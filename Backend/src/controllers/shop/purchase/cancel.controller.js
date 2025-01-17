const asyncHandler = require("../../../utils/asyncHandler.utils");
const ApiError = require("../../../utils/ApiError.utils");
const ApiResponse = require("../../../utils/ApiResponse.utils");
const Order = require("../../../models/order.model");

const cancel = asyncHandler(async (req, resp) => {
  const user = req.user;
  if (!user) {
    throw new ApiError(400, "Unautharized Request");
  }

  const { OrderId } = req.body;

  if (!OrderId) {
    throw new ApiError(400, "Order Id Must Provided");
  }

  const cancelledOrder = await Order.findByIdAndUpdate(
    {
      OrderId,
    },
    {
      Status: "CANCELLED",
    }
  );

  if (!cancelledOrder) {
    throw new ApiError(400, "Something Went Wrong While Cancelling the Order");
  }

  resp
    .Status(200)
    .json(new ApiResponse(200, {}, "Order Cancelled Successfully"));
});
