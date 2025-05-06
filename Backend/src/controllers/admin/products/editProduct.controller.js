const Product = require("../../../models/product.model");
const asyncHandler = require("../../../utils/asyncHandler.utils");
const ApiError = require("../../../utils/ApiError.utils");
const uploadOnCloud = require("../../../utils/cloudinary.utils");

const editProductPrice = asyncHandler(async (req, resp) => {
  const { productId, DealPrice, OriginalPrice } = req.body;

  if (!productId) {
    throw new ApiError(400, "Product ID Must Required");
  }

  const isProduct = await Product.exists({ _id: productId });

  if (!isProduct) {
    throw new ApiError(400, "Not Any Product Found");
  }

  const UpdateProduct = await Product.findByIdAndUpdate(productId, {
    $set: {
      DealPrice,
      OriginalPrice
    },
  });

  if (!UpdateProduct) {
    throw new ApiError(400, "Unable to Save product in DB");
  }

  resp
    .status(200)
    .json({ message: "Product Updated Successfully", STATUS: "OK" });
});

const editProductDisplay = asyncHandler(async (req, resp) => {

  const { productId } = req.body;

  if (!productId) {
    throw new ApiError(400, "Product ID Must Required");
  }

  const isProduct = await Product.exists({ _id: productId });
  if (!isProduct) {
    throw new ApiError(400, "Not Any Product Found");
  }

  if(!req.files){
    throw new ApiError(400, "Image Files Not Found");
  }


  let ShowCaseImages = [];

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

  const UpdateProduct = await Product.findByIdAndUpdate(productId, {
    $set: {
      ShowImages: ShowCaseImages,
    },
  });

  if (!UpdateProduct) {
    throw new ApiError(400, "Unable to Save product in DB");
  }

  resp
    .status(200)
    .json({ message: "Product Updated Successfully", STATUS: "OK" });
});

module.exports = { editProductPrice, editProductDisplay };
