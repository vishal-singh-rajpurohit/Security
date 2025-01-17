const Product = require("../../../models/product.model");
const asyncHandler = require("../../../utils/asyncHandler.utils");
const ApiError = require("../../../utils/ApiError.utils");
const ApiResponse = require("../../../utils/ApiResponse.utils");

const deleteProduct = asyncHandler(async (req, resp) => {
  const {productId} = req.body;

  if (!productId) {
    throw new ApiError(400, "Give productId");
  }


  const deletedItem = await Product.findByIdAndDelete(productId);

  if (!deletedItem) {
    throw new ApiError(400, "Error in Delete Prodcut");
  }

  resp
    .status(200)
    .json(new ApiResponse(200, {}, "Product Deleted Sucessfully"));
});

module.exports = deleteProduct;
