const asyncHandler = require("../../utils/asyncHandler.utils");
const ApiResponse = require("../../utils/ApiResponse.utils");
const ApiError = require("../../utils/ApiError.utils");
const Product = require("../../models/product.model");
const Order = require("../../models/order.model");
const Report = require("../../models/report.models");
const { orderVerificationEmail } = require("../admin/sendMails/sendMail");
const User = require("../../models/user.model");

const placeOrder = asyncHandler(async (req, resp) => {
  const user = req.user;

  if (!user || !user.isVerified) {
    throw new ApiError(500, "Unautharized Request");
  }

  const { productId, quantity, mobileNumber, location, pincode, state, city } =
    req.body;

  if (!productId || !mobileNumber || !location || !pincode || !state || !city) {
    throw new ApiError(400, "Product Id must required");
  }

  const product = await Product.findById(productId);

  if (!product) {
    throw new ApiError(400, "Product not found");
  }

  const newOrder = new Order({
    productId: productId,
    userId: user._id,
    quantity: quantity ? quantity : null,
  });

  const changedUser = await User.findByIdAndUpdate(user._id, {
    MobileNumber: mobileNumber,
    Address: location,
    State: state,
    PostCode: pincode,
    City: city,
  });

  if (!changedUser) {
    throw new ApiError(500, "Internal server error");
  }

  const sendResult = await orderVerificationEmail(user.email, newOrder._id);

  if (!sendResult) {
    throw new ApiError(400, "Email does not sent successfully");
  }

  await newOrder.save();

  if (!newOrder) {
    throw new ApiError(400, "Product saved");
  }

  resp
    .status(200)
    .json(
      new ApiResponse(200, { Order: newOrder }, "Order Placed Successfully")
    );
});

const serveOrders = asyncHandler(async (req, resp) => {
  const user = req.user;

  if (!user || !user.isVerified) {
    throw new ApiError(400, "Unautharized Request");
  }

  const whole_orders = await Order.aggregate([
    {
      $match: {
        userId: user._id,
      },
    },
    {
      $lookup: {
        from: "Product",
        foreignField: "_id",
        localField: "productId",
        as: "product",
      },
    },
    {
      $project: {
        _id: 1,
        qunatity: 1,
        status: 1,
        "product._id": 1,
        "product.ProductName": 1,
        "product.DealPrice": 1,
        "product.FrontImage": 1,
        "product.DealPrice": 1,
      },
    },
  ]);

  if (!whole_orders) {
    throw new ApiError(400, "Order not found");
  }

  resp
    .status(200)
    .json(new ApiResponse(200, { Orders: whole_orders }, "Orders Served"));
});

const verifyOrder = asyncHandler(async (req, resp) => {
  const user = req.user;

  if (!user || !user.isVerified) {
    throw new ApiError(501, "Unautharized Request");
  }

  const { orderId } = req.user;

  if (!orderId) {
    throw new ApiError(400, "Order Id not found");
  }

  const order = await Order.find({
    userId: user._id,
    _id: orderId,
    status: "UNVERIFIED",
  });

  if (!order) {
    throw new ApiError(400, "Order not found or already verified");
  }

  order.status = "VERIFIED";

  await order.save();

  resp
    .status(200)
    .json(new ApiResponse(200, {}, "Order Verified Successfully"));
});

const sendCancellationRequest = asyncHandler(async (req, resp) => {
  const user = req.user;

  if (!user || !user.isVerified) {
    throw new ApiError(500, "Unautharized Request");
  }

  const { orderId } = req.body;

  if (!orderId) {
    throw new ApiError(400, "Order Id is required");
  }

  // Send Cancellation Email
});

const cancleOrder = asyncHandler(async (req, resp) => {
  const user = req.user;

  if (!user || user.isVerified) {
    throw new ApiError(501, "Unautharized Request");
  }

  const { orderId } = req.user;

  if (!orderId) {
    throw new ApiError(400, "Order Id not found");
  }

  const order = await Order.find({
    userId: user._id,
    _id: orderId,
  });

  if (!order) {
    throw new ApiError(400, "Order not found or already delivered");
  }

  order.status = "CANCELLED";

  await order.save();

  resp
    .status(200)
    .json(new ApiResponse(200, {}, "Order Cancelled Successfully"));
});

// A Admin route
const setPlaced = asyncHandler(async (req, resp) => {
  const user = req.user;

  if (!user || user.isVerified) {
    throw new ApiError(501, "Unautharized Request");
  }

  const { orderId } = req.user;

  if (!orderId) {
    throw new ApiError(400, "Order Id not found");
  }

  const order = await Order.find({
    userId: user._id,
    _id: orderId,
  });

  if (!order) {
    throw new ApiError(400, "Order not found or already delivered");
  }

  order.status = "DELIVERED";

  await order.save();

  resp
    .status(200)
    .json(new ApiResponse(200, {}, "Order Cancelled Successfully"));
});

const reportOrder = asyncHandler(async (req, resp) => {
  const user = req.user;

  if (!user || user.isVerified) {
    throw new ApiError(501, "Unautharized Request");
  }

  const { orderId, mobileNumber, message } = req.user;

  if (!orderId || !mobileNumber || !message) {
    throw new ApiError(400, "OrderId, Mobile Number, Message not found");
  }

  const order = await Order.find({
    userId: user._id,
    _id: orderId,
  });

  if (!order) {
    throw new ApiError(400, "Order not found or already delivered");
  }

  const newReport = new Report({
    userId: user._id,
    orderId: order._id,
    mobileNumber: mobileNumber,
    message: message,
  });

  await newReport.save();

  if (!newReport) {
    throw new ApiError(400, "Order not found");
  }

  resp.status(200).json(new ApiResponse(200, {}, "report submitted"));
});

// A Admin route
const checkReport = asyncHandler(async (req, resp) => {
  const { reportId } = req.user;

  if (!reportId) {
    throw new ApiError(400, "report id reuired");
  }

  const report = await Report.findById(reportId);

  if (!report) {
    throw new ApiError(400, "Order not found or already delivered");
  }

  report.status = "CHECKED";

  resp.status(200).json(new ApiResponse(200, {}, "report Checked"));
});

module.exports = {
  placeOrder,
  verifyOrder,
  sendCancellationRequest,
  cancleOrder,
  setPlaced,
  reportOrder,
  checkReport,
  serveOrders,
};
