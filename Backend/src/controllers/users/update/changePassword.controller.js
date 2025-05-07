const asyncHandler = require("../../../utils/asyncHandler.utils");
const ApiError = require("../../../utils/ApiError.utils");
const ApiResponse = require("../../../utils/ApiResponse.utils");
const User = require("../../../models/user.model");

const changePassword = asyncHandler(async (req, resp) => {
  const user = req.user;

  if (!user) {
    throw new ApiError(400, "Unautharized Request");
  }
  
  const { OldPassword, NewPassword, ConformPassword } = req.body;

  if (!OldPassword || !NewPassword || !ConformPassword) {
    throw new ApiError(400, "All Fields Must Proived");
  }

  if (NewPassword !== ConformPassword) {
    throw new ApiError(400, "New And Old Password is Not Matching");
  }

  const checkUser = await User.findById(user._id);

  if (!checkUser) {
    throw new ApiError(400, "User Not Found");
  }

  const isPasswordCorrect = await checkUser.isPasswordCorrect(OldPassword);

  if (!isPasswordCorrect) {
    throw new ApiError(401, "Old Password is Not Matching");
  }

  checkUser.Password = NewPassword;

  checkUser.save();

  if (!checkUser) {
    throw new ApiError(400, "Somthing Went Wrong While Saving New Password");
  }

  resp
    .status(200)
    .json(new ApiResponse(200, {NewPassword}, "Password Changed Successfully"));
});

module.exports = changePassword;
