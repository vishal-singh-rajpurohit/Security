const asyncHandler = require("../../utils/asyncHandler.utils");
const ApiResponse = require("../../utils/ApiResponse.utils");
const ApiError = require("../../utils/ApiError.utils");
const Cart = require("../../models/cart.model");



const addToCart = asyncHandler(async (req, resp) => {
  const user = req.user;

  if (!user) {
    throw new ApiError(400, "Unautharized Request");
  }

  const { productId } = req.body;

  if (!productId) {
    throw new ApiError(400, "Product Id not found");
  }

  const is_Already_In_Cart = await Cart.exists({
    userId: user._id,
    prodcutId: productId,
  });

  if (is_Already_In_Cart) {
    throw new ApiError(200, "Product already in cart");
  }

  const newCart = new Cart({
    userId: user._id,
    prodcutId: productId,
  });

  await newCart.save();

  if (!newCart) {
    throw new ApiError(500, "Internal Server Error");
  }

  resp.status(200).json(new ApiResponse(200, {}, "Product Added to Cart"));
});

const removeFromCart = asyncHandler(async (req, resp) => {
  const user = req.user;

  if (!user) {
    throw new ApiError(400, "Unautharized Request");
  }

  const { cartId } = req.body;

  if (!cartId) {
    throw new ApiError(400, "Product Id not found");
  }

  const is_Already_In_Cart = await Cart.findById(cartId);

  if (!is_Already_In_Cart) {
    throw new ApiError(400, "Product is not in cart");
  }

  const deletedProduct = await Cart.findByIdAndDelete(cartId);

  if (!deletedProduct) {
    throw new ApiError(500, "Internal Server Error");
  }

  resp.status(200).json(new ApiResponse(200, {}, "Product Deleted from Cart"));
});

const changeQunatity = asyncHandler(async (req, resp) => {
  const user = req.user;

  if (!user) {
    throw new ApiError(400, "Unautharized Request");
  }

  const { cartId, quantity } = req.body;

  if (!cartId) {
    throw new ApiError(400, "Product Id not found");
  }

  const item = await Cart.findById(cartId);

  if (!item) {
    throw new ApiError(400, "Product is not in cart");
  }

  item.qunatity = quantity;

  await item.save();

  resp.status(200).json(new ApiResponse(200, {}, "Product Qunatity Updated"));
});

const clearCart = asyncHandler(async (req, resp) => {
  const user = req.user;

  if (!user) {
    throw new ApiError(400, "Unautharized Request");
  }

  const { cartId, quantity } = req.body;

  if (!cartId) {
    throw new ApiError(400, "Product Id not found");
  }

  const item = await Cart.findById(cartId);

  if (!item) {
    throw new ApiError(400, "Product is not in cart");
  }

  const deletedProduct = await Cart.deleteMany({
    userId: user._id,
  });

  if (!deletedProduct) {
    throw new ApiError(500, "Internal Server Error");
  }

  resp.status(200).json(new ApiResponse(200, {}, "Item Removed from Cart"));
});

// Fix agrigation
const serveCart = asyncHandler(async (req, resp) => {
  const user = req.user;

  if (!user) {
    throw new ApiError(400, "Unautharized Request");
  }

  const whole_cart = await Cart.aggregate([
  {
    $match: {
      userId: user._id
    }
  },
  {
    $lookup: {
      from: "products",
      localField: "prodcutId",
      foreignField: "_id",
      as: "product"
    }
  },
  {
    $unwind: "$product"
  },
  {
    $project: {
      _id: 1,
      qunatity: 1,
      "product._id": 1,
      "product.ProductName": 1,
      "product.DealPrice": 1,
      "product.FrontImage": 1,
      "product.DealPrice": 1
    }
  }
]);

  if (!whole_cart) {
    throw new ApiError(400, "no item in cart");
  }

  resp
    .status(200)
    .json(new ApiResponse(200, { Cart: whole_cart }, "Cart Served"));
});

module.exports = {
  addToCart,
  removeFromCart,
  changeQunatity,
  clearCart,
  serveCart,
};
