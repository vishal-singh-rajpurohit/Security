const Product = require("../../../models/product.model");
const uploadOnCloud = require("../../../utils/cloudinary.utils")
const ApiError = require("../../../utils/ApiError.utils");
const asyncHandler = require("../../../utils/asyncHandler.utils");
const ApiResponse = require("../../../utils/ApiResponse.utils");

const newproduct = asyncHandler(async (req, resp) => {
  const { ProductName, KeyWords, Tag, PriceForDealers, PriceForInstallers, PriceForCustomers, AdvancedPaymentAmmount, Description, Premium, CameraType, CameraQuality, IndoorOutdoor, MegaPixels, NumberOfCameras, AboutItem, Channel, Hdd   } = req.body;

  if ([ProductName, KeyWords, PriceForDealers, PriceForInstallers, PriceForCustomers, Description].some((field) => field?.trim() === "")) {
    throw new ApiError(400, "All fields must required");
  }

  const aboutItemArr = AboutItem.split("/")

  console.log("about this item ", aboutItemArr);

  let ShowCaseImages = []

  if (!req.files) {
    throw new ApiError(400, "files not found")
  }

  // upload multiple files at a time
  const LocalFrontImage = req.files?.image[0]?.path;
  if (!LocalFrontImage) {
    throw new ApiError(400, "Cover Images not found");
  }
  const FrontImage = await uploadOnCloud(LocalFrontImage);

  for (file of req.files.display) {
    if (!file) {
      throw new ApiError(400, "error in upload the image is not found");
    } else {
      const Image = await uploadOnCloud(file.path, {
        folder: "products",
        transformation: [{ width: 309, height: 480, crop: "limit" }],
      });
      ShowCaseImages.push(Image);
    }
  }

  if (ShowCaseImages.length < 1) {
    throw new ApiError(400, "error give 5 images");
  }

  const pushResult = new Product({
    ProductName,
    PriceForDealers: Number(PriceForDealers),
    PriceForInstallers: Number(PriceForInstallers),
    PriceForCustomers: Number(PriceForCustomers),
    AdvancedPaymentAmmount: Number(AdvancedPaymentAmmount),
    KeyWords,
    Description,
    FrontImage,
    ShowCaseImages,
    AboutItem: aboutItemArr,
    Premium,
    Tag,
    CameraType,
    CameraQuality,
    Channel,
    Hdd,
    IndoorOutdoor,
    MegaPixels,
    CameraQuality,
    NumberOfCameras,
  })
  await pushResult.save();

  if(!pushResult){
    throw new ApiError(400, "Error While Product in DB");
  }

  resp.status(200).json(new ApiResponse(200, {pushResult} ,"product Added Successfully"));
});

module.exports = newproduct;
