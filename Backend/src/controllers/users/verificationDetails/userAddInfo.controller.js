const asyncHandler = require("../../../utils/asyncHandler.utils");
const ApiError = require("../../../utils/ApiError.utils");
const User = require("../../../models/user.model");
const ApiResponse = require("../../../utils/ApiResponse.utils");


const userAddInfo = asyncHandler(async (req, resp)=>{
    const user = req.user;

    if(!user){
        throw new ApiError(400 , "Unauthraized Request , Login First");
    }

    const {Address1, City, PostCode, MobileNumber2} = req.body;

    if(!Address1 || !City || !PostCode || MobileNumber2){
        throw new ApiError(400 , "All Values Must Require");
    }

    const updatedUser = await User.findOneAndUpdate(
        {
            _id: user._id
        },
        {
            $set: {
                Address1,
                City,
                PostCode,
                MobileNumber2
            }
        }
    );

    if(!updatedUser){
        throw new ApiError(500 , "Somthing Went Wrong While Saving New Data");
    }

    const finalUser = await User.findById(updatedUser._id).select("-Password -refreshToken");

    resp.status(200).json(new ApiResponse(200 , {User: finalUser}, "User Updated Successfuly"));
});

module.exports = userAddInfo;