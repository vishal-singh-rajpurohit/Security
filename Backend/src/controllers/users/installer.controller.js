const uploadOnCloud = require("../../utils/cloudinary.utils")
const asyncHandler = require('../../utils/asyncHandler.utils');
const genTokens = require("../../utils/genTokens.utils");
const ApiError = require("../../utils/ApiError.utils");
const ApiResponse = require("../../utils/ApiResponse.utils");
const Dealer = require('../../models/dealer.model');
const User = require('../../models/user.model');
const Installer = require('../../models/installer.model');
const {Options} = require("../../methods")

const jwt = require("jsonwebtoken");


const registerInstaller = asyncHandler(async (req, resp) => {
    console.log("hii by signup");
    let { FirstName, LastName, Password,  Email } = req.body;

    if(!FirstName || !Password ||  !Email){
        throw new ApiError(400 , "All Data Required");
    }

    let isAlredy = await Dealer.exists({ Email }) || await User.exists({ Email }) || await Installer.exists({ Email });

    if(isAlredy){
        throw new ApiError(401, "User Already Exists");
    }

    if (!req.file) {
        throw new ApiError(400, "req.files not found")
    }

    const Avatar = await uploadOnCloud(req.file.path);

    if (!Avatar) {
        throw new ApiError(400, "unable to upload");
    }


    const newImage = new Installer({
        FirstName,
        LastName,
        Password,
        Email,
        Avatar,
    });
    let user = await newImage.save();
    
    const { accessToken, refreshToken } = await genTokens(Installer, user?._id);

    if (!accessToken || !refreshToken) {
        throw new ApiError(500, "refreshToken or accessToken not generated");
    }

    const decodedToken = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);

    if (!decodedToken) {
        throw new ApiError(500, "Invalid Token");
    }

    const authenticatedUser = await Installer.findOneAndUpdate(
        { _id: newImage._id },
        {
            $set: {
                refreshToken: refreshToken
            }
        },
    ).select("-Password -refreshToken");

    if(!authenticatedUser){
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

const loginInstaller = asyncHandler(async (req, resp) => {
    const { Email, Password } = req.body;

    if (!Email) {
        throw new ApiError(400, "Must Provide Email Id");
    }
    if (!Password || Password === " ") {
        throw new ApiError(400, "Must Provide Password");
    }

    const installer = await Installer.findOne({ Email });

    if (!installer) {
        throw new ApiError(404, "User Not Found , Please Register First");
    }

    const isValidPassword = await installer.isPasswordCorrect(Password);

    if (!isValidPassword) {
        throw new ApiError(400, "Invalid Password");
    }

    const { accessToken, refreshToken } = await genTokens(Installer, installer?._id);

    if (!accessToken || !refreshToken) {
        throw new ApiError(500, "refreshToken or accessToken not generated");
    }

    const decodedToken = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);

    if (!decodedToken) {
        throw new ApiError(500, "Invalid Token");
    }

    const user = await Installer.findOneAndUpdate(
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

    req.user = user;
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

const logoutInstaller = asyncHandler(async (req, resp) => {
    await Installer.findOneAndUpdate(
        { _id: req.user._id },
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


module.exports = { registerInstaller, loginInstaller, logoutInstaller };