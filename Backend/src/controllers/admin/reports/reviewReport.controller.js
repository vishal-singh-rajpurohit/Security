const ApiError = require("../../../utils/ApiError.utils");
const ApiResponse = require("../../../utils/ApiResponse.utils")
const asyncHandler = require("../../../utils/asyncHandler.utils");
const Reportrevie = require("../../../models/reportreview.model");
const Report = require("../../../models/report.models");


const reviewReport = asyncHandler(async (req, resp) => {
  const { ReportId, UserId, Message, StatusForReport } = req.body;

  if (!ReportId || !UserId || !Message || !StatusForReport) {
    throw new ApiError(400, "Must Provide ReportId , DealerId, Message");
  }

  const review = new Reportrevie({
    ReportId,
    UserId,
    Message,
  });
  await review.save();

  if (!review) {
    throw new ApiError(400, "Unable to Save Review");
  }

  const report = await Report.findByIdAndUpdate(ReportId, {
    $set: { 
      Status: StatusForReport
     }
  });

  if (!report) {
    throw new ApiError(400, "Unable to Find Or Update the Report");
  }

  // send an mail for review conformed

  resp.status(200)
    .json(new ApiResponse(200, {}, "Review Added Sucessfull"));
});

module.exports = reviewReport;
