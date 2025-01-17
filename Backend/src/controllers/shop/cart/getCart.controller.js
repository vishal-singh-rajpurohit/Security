const asyncHandler = require("../../../utils/asyncHandler.utils");
const ApiError = require("../../../utils/ApiError.utils");
const ApiResponse = require("../../../utils/ApiResponse.utils");
const Cart = require("../../../models/cart.model");
const Product = require("../../../models/product.model");


const getCart = asyncHandler(async (req, resp) => {

    const user = req.user;
    if (!user) {
        throw new ApiError(400, "Unautharized Request");
    }



    const CartItems = await Cart.find({
        UserId: user
    });


    // @<here to perform left Join>

    let CartProducts = [];

    for (let i of CartItems) {
        let item = await Product.findById(i.ProdcutId);
        if (!item) {
            throw new ApiError(400, "Item Not Found in the Product");
        }

        CartProducts.push(item);
    }


    resp.status(200)
        .json(new ApiResponse(200, { CartItems, CartProducts }, "Products in Cart Find Successsfully"));

});

module.exports = getCart;