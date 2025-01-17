const asyncHandler = require("../../../utils/asyncHandler.utils");
const ApiError = require("../../../utils/ApiError.utils");
const ApiResponse = require("../../../utils/ApiResponse.utils");
const uploadOnCloud = require("../../../utils/cloudinary.utils");
const Dealer = require("../../../models/dealer.model");
const Installer = require("../../../models/installer.model");

const changeId = asyncHandler(async (req, resp) => {

  const user = req.user;

  if (!user) {
    throw new ApiError(400, "Unautharized Request");
  }

  if(user.Verified !== "APPROVED"){
    throw new ApiError(400, "User is Approved you Can Not ");
  }

  if (!req.file.path) {
    throw new ApiError(400, "Photo of Id Not Found");
  }

  const IdPhoto = await uploadOnCloud(req.file.path);

  // Delete Old File

  if (!IdPhoto) {
    throw new ApiError(
      400,
      "Somthing Wents Wrong While Uploading File on Cloudianry"
    );
  }

  const {userType} = req.body;
  let Model;
  switch (userType) {
    case "DEALER":
      Model = Dealer;
      break;

    case "INSTALLER":
      Model = Installer;
      break;
    default:
      throw new ApiError(400, "Unautharized Request");
  }

  if(!(req.user.Verified === "PENDING" || req.user.Verified === "REJECTED")){
    throw new ApiError(400, "You Already Verified");
  }

  const updatedUser = await Model.findByIdAndUpdate(req.user._id, {
    $set: {
      IdPhoto,
      Verified: "PENDING"
    }
  }, {
    new: true
  })

  if(!updatedUser){
    throw new ApiError(400 , "Somting Wents Wrong While Saving The Id");
  }

  // push a notification while updating this
  resp.status(200)
  .json(new ApiResponse(200, {User: updatedUser}, "Id Updated Successfully"));

});


module.exports = changeId;