const asyncHandler = require("../../utils/asyncHandler.utils");
const genTokens = require("../../utils/genTokens.utils");
const ApiError = require("../../utils/ApiError.utils");
const ApiResponse = require("../../utils/ApiResponse.utils");
const User = require("../../models/user.model");
const jwt = require("jsonwebtoken");
const { sendVerificationEmail } = require("../admin/sendMails/sendMail");
const { Options } = require("../../methods");

const registerUser = asyncHandler(async (req, resp) => {
  let { name, password, conformPassword, email } = req.body;

  if (!name || !email || !password) {
    throw new ApiError(400, "All Data Required");
  }

  if (password !== conformPassword) {
    throw new ApiError(400, "Both Passwords are not matching");
  }

  let existingUser = await User.findOne({ Email: email });

  console.log("User: ", existingUser);
  

  if (existingUser && existingUser.isVerified) {
    throw new ApiError(401, "User Already Exists");
  }

  let newUser;

  console.log("existingUser: ", existingUser);

  if (existingUser && !existingUser.isVerified) {

    // Update unverified existing user
    existingUser.name = name;
    existingUser.Password = password; // Make sure `Password` is a valid field name in your model
    newUser = await existingUser.save();
  } else {
    // Create new user
    newUser = await User.create({
      name,
      Email: email,
      Password: password,
      isVerified: false,
    });
  }

  const user = await User.findById(newUser._id);

  if (!user) {
    throw new ApiError(500, "Something Went Wrong");
  }

  const { accessToken, refreshToken } = await genTokens(user._id);

  if (!accessToken || !refreshToken) {
    throw new ApiError(500, "refreshToken or accessToken not generated");
  }

  const decodedToken = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);

  if (!decodedToken) {
    throw new ApiError(500, "Invalid Token");
  }

  const authenticatedUser = await User.findOneAndUpdate(
    { _id: decodedToken._id },
    {
      $set: {
        refreshToken: refreshToken,
      },
    }
  ).select("-Password -refreshToken");

  if (!authenticatedUser) {
    throw new ApiError(500, "Something went wrong while saving refreshToken to user");
  }

  const sentMail = await sendVerificationEmail(user.Email, refreshToken);

  console.log("user registered");

  if (!sentMail) {
    console.log("error in sending mail ", sentMail);
    await User.findByIdAndDelete(user._id);
    throw new ApiError(400, "Unable to send email");
  }

  resp
    .status(200)
    .cookie("accessToken", accessToken, Options)
    .cookie("refreshToken", refreshToken, Options)
    .json(
      new ApiResponse(
        200,
        {
          accessToken,
          refreshToken,
          User: authenticatedUser,
        },
        "User Signup Successful"
      )
    );
});


const checkAlreadyUser = asyncHandler(async (req, resp) => {
  const user = req.user;

  if (!user) {
    throw new ApiError(400, "User Not Found");
  }

  const { accessToken, refreshToken } = await genTokens(user?._id);
  if (!accessToken || !refreshToken) {
    throw new ApiError(500, "refreshToken or accessToken not generated");
  }

  const decodedToken = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
  if (!decodedToken) {
    throw new ApiError(500, "Invalid Token");
  }

  const foundUser = await User.findOneAndUpdate(
    { _id: decodedToken._id },
    {
      $set: {
        refreshToken: refreshToken,
      },
    }
  ).select("-Password -refreshToken");

  resp
    .status(200)
    .cookie("accessToken", accessToken, Options)
    .cookie("refreshToken", refreshToken, Options)
    .json(
      new ApiResponse(
        200,
        {
          accessToken,
          refreshToken,
          User: foundUser,
        },
        "User Found Successful"
      )
    );
});

const loginUser = asyncHandler(async (req, resp) => {
  const { email, password } = req.body;

  if (!email) {
    throw new ApiError(400, "Must Provide Email Id");
  }
  if (!password || password === " ") {
    throw new ApiError(400, "Must Provide Password");
  }

  const customer = await User.findOne({ Email: email });

  if (!customer) {
    throw new ApiError(404, "User Not Found , Please Register First");
  }

  const isValidPassword = await customer.isPasswordCorrect(password);

  if (!isValidPassword) {
    throw new ApiError(400, "Invalid Password");
  }

  const { accessToken, refreshToken } = await genTokens(customer?._id);

  if (!accessToken || !refreshToken) {
    throw new ApiError(500, "refreshToken or accessToken not generated");
  }

  const decodedToken = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);

  if (!decodedToken) {
    throw new ApiError(500, "Invalid Token");
  }

  const user = await User.findOneAndUpdate(
    { _id: decodedToken._id },
    {
      $set: {
        refreshToken: refreshToken,
      },
    }
  ).select("-Password -refreshToken");

  resp
    .status(200)
    .cookie("accessToken", accessToken, Options)
    .cookie("refreshToken", refreshToken, Options)
    .json(
      new ApiResponse(
        200,
        {
          accessToken,
          refreshToken,
          User: user,
        },
        "Login Successful"
      )
    );
});

const logoutUser = asyncHandler(async (req, resp) => {
  await User.findOneAndUpdate(
    {
      _id: req.user._id,
    },
    {
      $set: {
        refreshToken: "",
      },
    },
    {
      new: true,
    }
  );

  const Options = {
    httpOnly: true,
    secure: true,
  };

  resp
    .status(200)
    .clearCookie("accessToken", Options)
    .clearCookie("refreshToken", Options)
    .json(new ApiResponse(200, {}, "Logout"));
});

const verifyUser = asyncHandler(async (req, resp) => {
  try {
    const token = req.body.token;

    if (!token) {
      throw new ApiError(400, "Must Provide Token");
    }

    const decodedToken = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);

    if (!decodedToken) {
      throw new ApiError(400, "Invalid Token");
    }

    const user = await User.findById(decodedToken._id);

    if (!user) {
      throw new ApiError(400, "User Not Found");
    }

    user.isVerified = true;
    await user.save();

    resp
      .status(200)
      .json(new ApiResponse(200, {}, "User Verified Successfully"));
  } catch (error) {
    console.log("error in verify email ", error);
    throw new ApiError(400, "Invalid Token");
  }
});

module.exports = {
  checkAlreadyUser,
  registerUser,
  loginUser,
  logoutUser,
  verifyUser,
};
