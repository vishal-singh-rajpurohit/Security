// const asyncHandler = require('../../utils/asyncHandler.utils');
// const ApiError = require("../../utils/ApiError.utils");
// const ApiResponse = require("../../utils/ApiResponse.utils");
// const {checkUserType} = require("../../methods");
// const DeletedUser = require("../../models/deletedUser.model");


// const deleteAccount = asyncHandler(async (req, resp)=>{
//     const user = req.user;

//     if(!user){
//         throw new ApiError(400 , "Anautharized Request");
//     }

//     const UserModel = checkUserType(user.UserType);

//     if(!UserModel){
//         throw new ApiError(400, "Model Not Found");
//     }

//     const deletedRecord = new DeletedUser({
//         UserId : user._id,
//         FirstName: user.FirstName,
//         LastName: user.LastName,
//         MobileNumber: user.MobileNumber,
//         Email: user.Email,
//         AadharNumber: user.AadharNumber,
//         PanNumber: user.PanNumber,
//         UserType: user.UserType,
//         Address1: user.Address1,
//         IdPhoto: user.IdPhoto,
//         City: user.City,
//         PostCode: user.PostCode,
//         TotalOrders: user.TotalOrders,
//         TotalEarnings: user.TotalEarnings
//     });

//     await deletedRecord.save();

//     if(!deletedRecord){
//         throw new ApiError(400, "Somthing Went Wrong While Saving Account to DataBase");
//     }

//     const deletedAccount = await UserModel.findByIdAndDelete(user._id);

//     if(!deletedAccount){
//         throw new ApiError(400 , "Unable to Delete the Account");
//     }

//     resp.status(200)
//     .json(new ApiResponse(200 , {} , "Account Deleted Successfully"));

// });

// module.exports = deleteAccount;

