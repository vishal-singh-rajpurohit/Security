const asyncHandler = require('../../utils/asyncHandler.utils');
const genTokens = require("../../utils/genTokens.utils");
const ApiError = require("../../utils/ApiError.utils");
const ApiResponse = require("../../utils/ApiResponse.utils");
const User = require('../../models/user.model');
const Otp = require('../../models/otp.model')
const jwt = require("jsonwebtoken");
const {sendOtpVerifiaction} = require("../admin/sendMails/sendMail")
const { Options, genreateOtp } = require('../../methods')


const registerUser = asyncHandler(async (req, resp) => {
    let { FirstName, LastName, Password, ConformPassword, Email } = req.body;

    if (!FirstName || !Email || !Password) {
        throw new ApiError(400, "All Data Required");
    }

    if (Password !== ConformPassword) {
        throw new ApiError(400, "Both Passwrds are not matching");
    }

    let isAlredy = await User.exists({ Email });

    if (isAlredy) {
        throw new ApiError(401, "User Already Exists");
    }

    const newUser = new User({
        FirstName,
        LastName,
        Email,
        Password,
        UserType: "Customer"
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

    console.log("user registered")

    resp.status(200)
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

const becomeDealer = asyncHandler(async (req, resp)=>{
    try {
        
    } catch (error) {
        console.log("error in become dealer: ", error)
    }
})

const sendVerificationOtp = asyncHandler(async (req, resp)=>{
    try {
        const user = req.user;
        if(!user){
            throw new ApiError(400, "Unautharized Request ")
        }

        console.log("email :", user.Email)

        const otp = genreateOtp()

        const sendResult = await sendOtpVerifiaction(user.Email, otp)

        if(!sendResult){
            throw new ApiError(400, "unable to send email");
        }

        resp.status(200)
        .json(new ApiResponse(200, {}, "Email Send Successfully"))

    } catch (error) {
        throw new ApiError(400, "error while sending email ");
    }
})

const verifyUser = asyncHandler(async(req, resp)=>{
    try {
        const otp = req.body.Otp;

        if(!Otp){
            throw new ApiError(400, "Must Provide Otp")
        }

        const isValidOtp = await Otp.deleteOne({Otp: otp})

        if(!isValidOtp){
            throw new ApiError(400 , "invalid otp")
        }


        resp.status(200)
        .json(new ApiResponse(200, {}, "User Validate"));

    } catch (error) {
        console.log("error in verify User ", error)
    }
})

module.exports = { registerUser, loginUser, logoutUser , becomeDealer, sendVerificationOtp, verifyUser};