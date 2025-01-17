const asyncHandler = require("../utils/asyncHandler.utils");
const ApiError = require("../utils/ApiError.utils");
const jwt = require("jsonwebtoken");
const Dealer = require("../models/dealer.model");
const User = require("../models/user.model");
const Installer = require("../models/installer.model");

const Auth = asyncHandler(async (req, resp, next) => {
    
    const Token = req.cookies?.accessToken || req.headers["Authorization"]?.replace("Bearer ", "");

    if(!Token){
        throw new ApiError(401, "Unauthorized request");
    }

    const decodedToken = jwt.verify(Token, process.env.ACCESS_TOKEN_SECRET);

    const user = await Dealer.findById(decodedToken?._id).select("-Password -refreshToken") 
    || await User.findById(decodedToken?._id).select("-Password -refreshToken") 
    || await Installer.findById(decodedToken?._id).select("-Password -refreshToken");

    if(!user){
        throw new ApiError(401, "Unauthorized request , User not found");
    }
    
    req.user = user;
    next();

});


module.exports = Auth;