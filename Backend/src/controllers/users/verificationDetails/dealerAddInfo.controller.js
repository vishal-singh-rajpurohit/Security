const asyncHandler = require("../../../utils/asyncHandler.utils");
const ApiError = require("../../../utils/ApiError.utils");
const ApiResponse = require("../../../utils/ApiResponse.utils");
const uploadOnCloud = require("../../../utils/cloudinary.utils")
const Dealer = require("../../../models/dealer.model");


const dealerAddInfo = asyncHandler(async (req, resp)=>{
    const user = req.user;
    if(!user){
        throw new ApiError(400 , "Unauthraized Request , Login First");
    }

    const {Age, MobilerNumber2, UpiMobileNumber,  AadharNumber, PanNumber, Address1, Address2, City, PostCode} = req.body;

    if(!Age || !MobilerNumber2 || !UpiMobileNumber || !AadharNumber|| !PanNumber|| !Address1 || !Address2 || !City || !PostCode){
        throw new ApiError(400 , "All Values Must Require");
    }

    console.log("req.file.path ", req.file.path )
    if(!req.file.path){
        throw new ApiError(400, "Must Provide Image");
    }



    const IdPhoto =  await uploadOnCloud(req.file.path);

    if(!IdPhoto){
        throw new ApiError(500, "Somthing Wents Wrong While Uploading image on Cloudinary");
    }

    const updatedUser = await Dealer.findOneAndUpdate(
        {
            _id: user._id
        },
        {
            $set: {
                Age,
                MobilerNumber2,
                UpiMobileNumber,
                AadharNumber,
                PanNumber,
                IdPhoto,
                Address1,
                Address2,
                City,
                PostCode
            }
        }
    );

    if(!updatedUser){
        throw new ApiError(500 , "Somthing Went Wrong While Saving New Data");
    }

    const finalUser = await Dealer.findById(updatedUser._id).select("-Password -refreshToken");

    resp.status(200).json(new ApiResponse(200 , {User: finalUser}, "User Updated Successfuly"));
});

module.exports = dealerAddInfo;