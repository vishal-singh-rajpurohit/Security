const asyncHandler = require("../../../utils/asyncHandler.utils");
const ApiError = require("../../../utils/ApiError.utils");
const ApiResponse = require("../../../utils/ApiResponse.utils");
const Cart = require("../../../models/cart.model");

const addtocart = asyncHandler(async (req, resp) => {
  const user = req.user;
  if (!user) {
    throw new ApiError(400, "Unautharized Request");
  }

  const { ProdcutId } = req.body;

  if (!ProdcutId ) {
    throw new ApiError(400, "ProductId and UserId are required");
  }

  const newCartProduct = new Cart({
    ProdcutId,
    UserId: user._id,
  });

  await newCartProduct.save();

  if (!newCartProduct) {
    throw new ApiError(400, "Error While Saving new Product in Cart");
  }

  resp.status(200).json(new ApiResponse(200, {NawCartItem: newCartProduct}, "New Product Added to Cart"));
});

module.exports = addtocart;
