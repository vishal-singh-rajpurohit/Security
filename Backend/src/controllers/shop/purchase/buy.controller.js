const asyncHandler = require("../../../utils/asyncHandler.utils");
const ApiError = require("../../../utils/ApiError.utils");
const ApiResponse = require("../../../utils/ApiResponse.utils");
const Order = require("../../../models/order.model");
const Prodcut = require("../../../models/product.model");


const buy = asyncHandler(async (req, resp) => {
    const user = req.user;
    if (!user) {
        throw new ApiError(400, "Unautharized Request");
    }

    const { ProdcutId, UserId, CustomerType} = req.body;

    if(!ProdcutId || !UserId || !CustomerType){
        throw new ApiError(400, "Must Provide ProductId and UserId");
    }

    const isValidProduct = await Prodcut.findById(ProdcutId);

    if(!isValidProduct){
        throw new ApiError(400, "Not a Valid Product");
    }

    // make advanced Payments or Full Payments
    // recive payment method

    const newOrder = new Order({
        ProdcutId,
        UserId,
        CustomerType
    })

    await newOrder.save();

    resp.status(200)
    .json(new ApiResponse(200, {}, "Order Placed"));
});

module.exports = buy;