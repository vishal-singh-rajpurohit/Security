const asyncHandler = require("../../utils/asyncHandler.utils");
const ApiResponse = require("../../utils/ApiResponse.utils");
const ApiError = require("../../utils/ApiError.utils");
const Product = require("../../models/product.model");
const Order = require("../../models/order.model");
const Report = require("../../models/report.models");
const User = require("../../models/user.model");

/**
 * @description Only users
 */

const serveMyReports = asyncHandler(async (req, resp) => {
  const user = req.user;

  if (!user || !user.isVerified) {
    throw new ApiError(500, "Unautharized Request");
  }

  const all_reports = await Report.find({
    userId: user._id,
  });

  if (!all_reports) {
    throw new ApiError(400, "No Reports found");
  }

  resp
    .status(200)
    .json(new ApiResponse(200, { reports: all_reports }, "Here All Reporst"));
});

/**
 * @description Admins
 */
const checkReport = asyncHandler(async (req, resp) => {
  const { reportId, returnMessage } = req.body;

  if (!reportId) {
    throw new ApiError(400, "report id reuired");
  }

  const report = await Report.findById(reportId);

  if (!report) {
    throw new ApiError(400, "Order not found or already delivered");
  }

  report.status = "CHECKED";
  report.returnMessage = returnMessage;

  await report.save();

  resp.status(200).json(new ApiResponse(200, {}, "report Checked"));
});

module.exports = {
  serveMyReports,
  respReport: checkReport,
};
