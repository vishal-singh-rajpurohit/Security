const asyncHandler = require("../../../utils/asyncHandler.utils");
const ApiResponse = require("../../../utils/ApiResponse.utils");
const ApiError = require("../../../utils/ApiError.utils");
const uploadOnCloud = require("../../../utils/cloudinary.utils");
const Product = require("../../../models/product.model");

const newProduct = asyncHandler(async (req, resp) => {
  let {
    ProductName,
    DealPrice,
    OriginalPrice,
    ProductDescription,
    ProductFeatures,
    ProductCategory,
    ProductSubCategory,
    ProductBrand,
    SpecialFeature,
    cameraMegaPixel,
    batteryCapacity,
    cameraType,
    cameraQuality,
    channel,
    hdd,
  } = req.body;

  if (
    [
      ProductName,
      DealPrice,
      OriginalPrice,
      ProductDescription,
      ProductFeatures,
      ProductCategory,
      ProductBrand,
    ].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "All fields must required");
  }

  const ProductFeaturesArray = ProductFeatures.split(",");

  let ShowCaseImages = [];

  if (!req.files) {
    throw new ApiError(400, "files not found");
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
    DealPrice: Number(DealPrice),
    OriginalPrice: Number(OriginalPrice),
    FrontImage: FrontImage,
    ShowImages: ShowCaseImages,
    ProductDescription,
    ProductFeatures,
    ProductBrand,
    ProductSubCategory,
    ProductCategory,
    SpecialFeature: ProductFeaturesArray,
    cameraMegaPixel,
    batteryCapacity,
    cameraType,
    cameraQuality,
    channel,
    hdd,
  });

  await pushResult.save();

  if (!pushResult) {
    throw new ApiError(400, "Error While Product in DB");
  }

  resp.status(200).json(new ApiResponse(200, {}, "product Added Successfully"));
});

const delProduct = asyncHandler(async (req, resp) => {
  const { productId } = req.body;

  if (!productId) {
    throw new ApiError(400, "Product Id Must Required");
  }

  const product = await Product.findByIdAndDelete(productId);

  if (!product) {
    throw new ApiError(400, "Product not found");
  }

  resp
    .status(200)
    .json(new ApiResponse(200, {}, "product Deleted Successfully"));
});

const editProductPrice = asyncHandler(async (req, resp) => {
  const { DealPrice, OriginalPrice, productId } = req.body;

  if (!productId) {
    throw new ApiError(400, "Product Id Required");
  }

  const product = await Product.findById(productId);

  if (!product) {
    throw new ApiError(400, "Product not found");
  }

  product.DealPrice = DealPrice;
  product.OriginalPrice = OriginalPrice;

  await product.save();

  resp
    .status(200)
    .json(new ApiResponse(200, {}, "product Price Edited Successfully"));
});

const editName = asyncHandler(async (req, resp) => {
  const { ProductName, productId } = req.body;

  if (!productId) {
    throw new ApiError(400, "Product Id Required");
  }

  const product = await Product.findById(productId);

  if (!product) {
    throw new ApiError(400, "Product not found");
  }

  product.ProductName = ProductName;

  await product.save();

  resp
    .status(200)
    .json(new ApiResponse(200, {}, "product Name Edited Successfully"));
});

module.exports = {
    newProduct,
    delProduct,
    editProductPrice,
    editName
}