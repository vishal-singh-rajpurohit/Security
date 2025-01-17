const asyncHandler = require("../../../utils/asyncHandler.utils");
const ApiError = require("../../../utils/ApiError.utils");
const Dealer = require("../../../models/dealer.model");
const Installer = require("../../../models/installer.model");
const ApiResponse = require("../../../utils/ApiResponse.utils");
const {checkUserType} = require("../../../methods")


const getUsersVerification = asyncHandler(async (req, resp)=>{

    const {Verified} = req.body;

    if(!Verified){
        throw new ApiError(400, "Must Provide Varify Status of User");
    }

    const UnverifiedDealers = await Dealer.find({
        Verified,
    }).select("-Password -refreshToken");

    const UnverifiedInstallers = await Installer.find({
        Verified,
    }).select("-Password -refreshToken");

    if(!UnverifiedDealers || !UnverifiedInstallers){
        throw new ApiError(400 , "Unable to Search Pending Users");
    }

    resp.status(200)
    .json(new ApiResponse(200, {UnverifiedDealers, UnverifiedInstallers}, "Here Are Unverified Users or dealers"));
});

module.exports = getUsersVerification;