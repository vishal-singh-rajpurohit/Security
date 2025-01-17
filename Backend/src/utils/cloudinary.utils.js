require("dotenv").config();
const cloudinary = require("cloudinary").v2;
const ApiError = require("./ApiError.utils");
const asyncHandler = require("./asyncHandler.utils")
const fs = require("fs");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloud = async (filePath) => {
  try {
    if (!filePath) {
      console.log("not any file avilabel");
      return null;
    } else {

      const uploadResult = await cloudinary.uploader.upload(filePath);

      fs.unlinkSync(filePath);
      return uploadResult.url;
    }
  } catch (error) {
    fs.unlinkSync(filePath);
    console.log("error in cloudinary", error);
    throw new ApiError(400, "Unable to upload on cloud");
  }
}

module.exports = uploadOnCloud;
