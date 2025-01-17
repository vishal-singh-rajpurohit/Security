const asyncHandler = require('../../utils/asyncHandler.utils');
const genTokens = require("../../utils/genTokens.utils");
const ApiError = require("../../utils/ApiError.utils");
const ApiResponse = require("../../utils/ApiResponse.utils");
const Dealer = require('../../models/dealer.model');
const User = require('../../models/user.model');
const Installer = require('../../models/installer.model');
const jwt = require("jsonwebtoken");
const { Options } = require('../../methods')


const registerUser = asyncHandler(async (req, resp) => {
    console.log("hii by signup");
    let { FirstName, LastName, Password, ConformPassword, MobileNumber, Email, UserType } = req.body;

    console.log("FirstName: ", FirstName)
    console.log("LastName: ", LastName)
    console.log("Password: ", Password)
    console.log("ConformPassword: ", ConformPassword)
    console.log("MobileNumber: ", MobileNumber)
    console.log("Email: ", Email)

    if (!FirstName || !MobileNumber || !Email || !Password) {
        throw new ApiError(400, "All Data Required");
    }

    if (Password !== ConformPassword) {
        throw new ApiError(400, "Both Passwrds are not matching");
    }

    let isAlredy = await Dealer.exists({ Email }) || await User.exists({ Email }) || await Installer.exists({ Email });

    if (isAlredy) {
        throw new ApiError(401, "User Already Exists");
    }

    const newUser = new User({
        FirstName,
        LastName,
        MobileNumber,
        Email,
        Password
    });
    let savedUser = await newUser.save();

    let user = await User.findById(savedUser._id);

    if (!user) {
        throw new ApiError(500, "Somting Wents Wrong");
    }


    const { accessToken, refreshToken } = await genTokens(User, user?._id);

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
                refreshToken: refreshToken
            }
        },
    ).select("-Password -refreshToken");

    if (!authenticatedUser) {
        throw new ApiError("Somthing went Wrong while Saving refreshToke to User");
    }

    resp.status(200)
        .clearCookie("OTP")
        .cookie("accessToken", accessToken, Options)
        .cookie("refreshToken", refreshToken, Options)
        .json(new ApiResponse(200, {
            accessToken,
            refreshToken,
            User: authenticatedUser
        }, "User Singup Successful"));
});

const loginUser = asyncHandler(async (req, resp) => {
    const { Email, Password } = req.body;

    if (!Email) {
        throw new ApiError(400, "Must Provide Email Id");
    }
    if (!Password || Password === " ") {
        throw new ApiError(400, "Must Provide Password");
    }

    const customer = await User.findOne({ Email });

    if (!customer) {
        console.log(customer);
        throw new ApiError(404, "User Not Found , Please Register First");
    }

    const isValidPassword = await customer.isPasswordCorrect(Password);

    if (!isValidPassword) {
        throw new ApiError(400, "Invalid Password");
    }

    const { accessToken, refreshToken } = await genTokens(User, customer?._id);

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
                refreshToken: refreshToken
            }
        },
    ).select("-Password -refreshToken");

    const Options = {
        httpOnly: true,
        secure: true
    }

    resp.status(200)
        .clearCookie("OTP")
        .cookie("accessToken", accessToken, Options)
        .cookie("refreshToken", refreshToken, Options)
        .json(new ApiResponse(200, {
            accessToken,
            refreshToken,
            User: user
        }, "Login Successful"));

});

const logoutUser = asyncHandler(async (req, resp) => {
    await User.findOneAndUpdate(
        {
            _id: req.user._id
        },
        {
            $set: {
                refreshToken: ""
            }
        },
        {
            new: true
        }
    );

    const Options = {
        httpOnly: true,
        secure: true
    }

    resp.status(200)
        .clearCookie("accessToken", Options)
        .clearCookie("refreshToken", Options)
        .json(new ApiResponse(200, {}, "Logout"));

});


module.exports = { registerUser, loginUser, logoutUser };