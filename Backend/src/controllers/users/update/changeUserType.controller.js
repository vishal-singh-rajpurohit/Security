const asyncHandler = require("../../../utils/asyncHandler.utils");
const ApiError = require("../../../utils/ApiError.utils");
const ApiResponse = require("../../../utils/ApiResponse.utils");
const genTokens = require("../../../utils/genTokens.utils");
const uploadOnCloud = require("../../../utils/cloudinary.utils");
const { checkUserType, Options } = require("../../../methods");
const User = require("../../../models/user.model");

const changeUserType = asyncHandler(async (req, resp) => {
    const user = req.user;

    if (!user) {
        throw new ApiError(400, "Unautharized Request");
    }

    if (user.UserType !== "CUSTOMER") {
        throw new ApiError(400, "Unable to Change");
    }

    const { Password, AadharNumber, PanNumber, UserType, MobilerNumber2, UpiMobileNumber, Address1, City, PostCode } = req.body;

    
    const UserModel = checkUserType(user.UserType);

    if (!UserModel) {
        throw new ApiError(400, "User Model Not Found");
    }

    const User = await UserModel.findById(user._id);

    // Check Password
    const isPasswordCorrect = await User.isPasswordCorrect(Password);

    if (!isPasswordCorrect) {
        throw new ApiError(400, "Invalid Password");
    }

    if (!req.files) {
        throw new ApiError(400, "Local Images Not Found");
    }

    // upload Avatar
    const Avatar = await uploadOnCloud(req.files?.image[0].path);

    if (!Avatar) {
        throw new ApiError(400, "Unable to Upload The Avatar on Cloudinary");
    }
    console.log("file uploaded on cloundinary");


    // upload Id Photo
    const IdPhoto = await uploadOnCloud(req.files?.id[0].path);

    if (!IdPhoto) {
        throw new ApiError(400, "Unable to Upload The Photo of Id on Cloudinary");
    }

    const NewUserModel = checkUserType(UserType)

    const updatedUser = new NewUserModel({
        FirstName: user.FirstName,
        LastName: user.LastName,
        Password,
        MobileNumber: user.MobileNumber,
        MobilerNumber2: MobilerNumber2,
        Email: user.Email,
        Avatar,
        AadharNumber,
        PanNumber,
        UserType,
        IdPhoto,
        Address1,
        City,
        PostCode,
        UpiMobileNumber,
        TotalOrders: user.TotalOrders,
    });

    await updatedUser.save();

    
    if(!updatedUser){
        throw new ApiError(400, "Unable to save the Changed User");
    }

    console.log(updatedUser._id)
    const {accessToken, refreshToken} = await genTokens(NewUserModel , updatedUser._id);

    if(!accessToken || !refreshToken){
        throw new ApiError(400, "Unable to Genteate Tokens");
    }

    const finalUser = await NewUserModel.findById(updatedUser._id).select('-Password -refreshToken');

    if(!finalUser){
        throw new ApiError(400 , "Unable to Find Final User");
    }


    const removedUser = await UserModel.findByIdAndDelete(user._id);

    if(!removedUser){
        throw new ApiError(400, "Unable to Remove the User");
    }


    resp.status(200)
    .cookie("accessToken", accessToken, Options)
    .cookie("refreshToken", refreshToken, Options)
    .json(new ApiResponse(200, {User: finalUser}, "User Type Changed "));
});

module.exports = changeUserType;
