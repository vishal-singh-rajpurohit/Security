const asyncHandler = require("../../../utils/asyncHandler.utils");
const ApiError = require("../../../utils/ApiError.utils");
const ApiResponse = require("../../../utils/ApiResponse.utils");
const Cart = require("../../../models/cart.model");

const removefromcart = asyncHandler(async (req, resp) => {
  
  if (!req.user) {
    throw new ApiError(400, "Unautharized Request");
  }

  const cartId = req.query.id;

  if (!cartId) {
    throw new ApiError(400, "Cart Id Not Found");
  }

  const removedItem = await Cart.findByIdAndDelete(cartId);

  if (!removedItem) {
    throw new ApiError(400, "Error in Deleting the Item From Cart");
  }

  const updatedCart = await Cart.find({});

  if(!updatedCart){
    throw new ApiError(400, "Somthing Went Wrong While Getting Cart Items")
  }

  resp.status(200).json(new ApiResponse(200, {ProductsInCart: updatedCart}, "Item Deleted Successfully"));
});

module.exports = removefromcart;
