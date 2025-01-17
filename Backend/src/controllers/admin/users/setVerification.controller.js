const asyncHandler = require("../../../utils/asyncHandler.utils");
const ApiError = require("../../../utils/ApiError.utils");
const Dealer = require("../../../models/dealer.model");
const Installer = require("../../../models/installer.model");
const ApiResponse = require("../../../utils/ApiResponse.utils");
const { checkUserType } = require("../../../methods");

const setVerification = asyncHandler(async (req, resp) => {
  const { UserId, Verified, UserType } = req.body;


  let Modal = checkUserType(UserType);

  if (!Modal) {
    throw new ApiError(400, "Invalid User Type");
  }

  const updatedUser = await Modal.findByIdAndUpdate(UserId, {
   $set: { Verified}
  })
  // .select("-Password , -refreshToken");

  if(!updatedUser){
    throw new ApiError(400, "User Varificaation failed");
  }

  resp.status(200).json(new ApiResponse(200, {Verified}, "User Verified"));

});

module.exports = setVerification;
