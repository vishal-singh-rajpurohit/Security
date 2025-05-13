const asyncHandler = require("../utils/asyncHandler.utils");
const ApiError = require("../utils/ApiError.utils");
const jwt = require("jsonwebtoken");
const Admin = require("../models/admin.model"); 

const SuperAuth = asyncHandler(async (req, resp, next) => {
    
    const Token = req.cookies?.adminAccess;

    if(!Token){
        throw new ApiError(401, "Unauthorized request");
    }

    const decodedToken = jwt.verify(Token, process.env.ACCESS_TOKEN_SECRET);

    const user = await Admin.findById(decodedToken?._id).select("-Password -refreshToken");

    if(!user){
        throw new ApiError(401, "Unauthorized request , User not found");
    }
    
    req.admin = user;
    next();

});


module.exports = SuperAuth;