const asyncHandler = require("../utils/asyncHandler.utils");
const ApiError = require("../utils/ApiError.utils");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

const Auth = asyncHandler(async (req, resp, next) => {
    
    const Token = req.cookies?.accessToken;

    if(!Token){
        throw new ApiError(401, "Unauthorized request");
    }

    const decodedToken = jwt.verify(Token, process.env.ACCESS_TOKEN_SECRET);

    const user = await User.findById(decodedToken?._id).select("-Password -refreshToken");

    if(!user){
        throw new ApiError(401, "Unauthorized request , User not found");
    }
    
    req.user = user;
    next();

});


module.exports = Auth;