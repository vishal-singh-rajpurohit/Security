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


const registerDealer = asyncHandler(async (req, resp) => {
    let { FirstName, LastName, Age, Password, MobileNumber, MobileNumber2, Email, AadharNumber, PanNumber, Address1, Address2, City, PostCode, UpiMobileNumber } = req.body;

    let isAlredy = await Dealer.exists({ Email }) || await User.exists({ Email }) || await Installer.exists({ Email });

    if(isAlredy){
        throw new ApiError(401, "User Already Exists");
    }

    console.log(req.file)
    if (!req.file) {
        throw new ApiError(400, "req.files not found")
    }

    // error to solve here
    const Avatar = await uploadOnCloud(req.file.path);

    if (!Avatar) {
        throw new ApiError(400, "unable to upload");
    }


    const newDealer = new Dealer({
        FirstName,
        LastName,
        Password,
        Age,
        MobileNumber,
        MobileNumber2,
        Email,
        Avatar,
        AadharNumber,
        PanNumber,
        Address1,
        Address2,
        City,
        PostCode,
        UpiMobileNumber
    });

    let user = await newDealer.save();

    
    const { accessToken, refreshToken } = await genTokens(Dealer, user?._id);

    if (!accessToken || !refreshToken) {
        throw new ApiError(500, "refreshToken or accessToken not generated");
    }

    const decodedToken = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);

    if (!decodedToken) {
        throw new ApiError(500, "Invalid Token");
    }

    const authenticatedUser = await Dealer.findOneAndUpdate(
        { _id: user._id },
        {
            $set: {
                refreshToken: refreshToken
            }
        },
    ).select("-Password -refreshToken");

 

    if(!authenticatedUser){
        throw new ApiError(400, "Somthing went Wrong while Saving refreshToke to User");
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

const loginDealer = asyncHandler(async (req, resp) => {
    const { Email, Password } = req.body;

    if (!Email) {
        throw new ApiError(400, "Must Provide Email Id");
    }
    if (!Password || Password === " ") {
        throw new ApiError(400, "Must Provide Password");
    }

    const dealer = await Dealer.findOne({ Email });

    if (!dealer) {
        throw new ApiError(404, "User Not Found , Please Register First");
    }

    const isValidPassword = await dealer.isPasswordCorrect(Password);

    if (!isValidPassword) {
        throw new ApiError(400, "Invalid Password");
    }

    const { accessToken, refreshToken } = await genTokens(Dealer, dealer?._id);

    if (!accessToken || !refreshToken) {
        throw new ApiError(500, "refreshToken or accessToken not generated");
    }

    const decodedToken = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);

    if (!decodedToken) {
        throw new ApiError(500, "Invalid Token");
    }

    const user = await Dealer.findOneAndUpdate(
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

const logoutDealer = asyncHandler(async (req, resp) => {


    await Dealer.findOneAndUpdate(
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


module.exports = { registerDealer, loginDealer, logoutDealer };