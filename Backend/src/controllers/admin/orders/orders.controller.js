const Order = require("../../../models/order.model");
const ApiError = require("../../../utils/ApiError.utils");
const asyncHandler = require("../../../utils/asyncHandler.utils");


const getNewOrders = asyncHandler(async (req, resp) => {
    const { UserId, OrderId } = req.body;

    if (!OrderId) {
        throw new ApiError(400, "Must Provide Order Id");
    }

    const newOrders = await Order.aggregate([
        {
            $match:{
                Status: "PENDING"
            }
        },
        {
            $project
        }
    ])
})