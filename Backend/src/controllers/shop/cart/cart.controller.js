const asyncHandler = require("../../../utils/asyncHandler.utils");
const ApiError = require("../../../utils/ApiError.utils");
const ApiResponse = require("../../../utils/ApiResponse.utils");
const Cart = require("../../../models/cart.model");


export const addToCart = asyncHandler(async (req, resp) => {
    const user = req.user;
    if (!user) {
        throw new ApiError(400, "Unautharized Request");
    }

    const { productId } = req.body;

    if(!productId) {
        throw new ApiError(400, "Product Id Must Provided");
    }

    const newProduct = await Cart.create({
        productId: productId,
        userId: user._id
    });

    if(!newProduct) {
        throw new ApiError(400, "Product Not Added To Cart");
    }

    resp.status(200).json(new ApiResponse(200, "Product Added To Cart", newProduct, "success"));
});

export const removeFromCart = asyncHandler(async (req, resp) => {
    const user = req.user;
    if (!user) {
        throw new ApiError(400, "Unautharized Request");
    }

    const { cartItemId } = req.body;

    if(!cartItemId) {
        throw new ApiError(400, "Cart Item Id Must Provided");
    }

    const newProduct = await Cart.findByIdAndDelete(cartItemId);

    if(!newProduct) {
        throw new ApiError(400, "Product Not Removed From Cart");
    }

    resp.status(200).json(new ApiResponse(200, "Product Removed From Cart", {}, "success"));
});

export const clearCart = asyncHandler(async (req, resp) => {
    const user = req.user;
    if (!user) {
        throw new ApiError(400, "Unautharized Request");
    }

    const newProduct = await Cart.deleteMany({ UserId: user._id });

    if(!newProduct) {
        throw new ApiError(400, "Cart Not Cleared");
    }

    resp.status(200).json(new ApiResponse(200, "Cart Not Cleared", {}, "success"));
});

export const fetchCart = asyncHandler(async (req, resp) => {
    const user = req.user;
    if (!user) {
        throw new ApiError(400, "Unautharized Request");
    }

    const newProduct = await Cart.aggregate([
        { $match: { userId: user._id } },
        {
            $lookup: {
                from: "products",
                localField: "productId",
                foreignField: "_id",
                as: "productDetails"
            }
        },
        {
            $unwind: "$productDetails"
        },
        {
            $project: {
                _id: 1,
                productId: 1,
                userId: 1,
                quantity: 1,
                productDetails: {
                    _id: "$productDetails._id",
                    ProductName: "$productDetails.ProductName",
                    DealPrice: "$productDetails.DealPrice",
                    OriginalPrice: "$productDetails.OriginalPrice",
                    FrontImage: "$productDetails.FrontImage",
                    rating: "$productDetails.rating"
                }
            }
        }
    ]);

    if(!newProduct) {
        throw new ApiError(400, "Cart Not Found");
    }

    resp.status(200).json(new ApiResponse(200, "Cart Not Found", {Cart: newProduct}, "success"));
});
