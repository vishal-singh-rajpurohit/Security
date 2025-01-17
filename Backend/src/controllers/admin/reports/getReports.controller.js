const Report = require("../../../models/report.models");
const asyncHandler = require("../../../utils/asyncHandler.utils");
const ApiError = require("../../../utils/ApiError.utils");
const ApiResponse = require("../../../utils/ApiResponse.utils");
const { paginate } = require("../../../methods");

const getReports = asyncHandler(async (req, resp) => {
  let pageNumber = Number(req.query.pagenumber) || 0;
  let limitPerPage = 20;

  const skipped = paginate(pageNumber, limitPerPage);

  if (!skipped) {
    throw new ApiError(400, "skipped values error paginate error");
  }

  const Reports = await Report.find({ Status: "UNREAD" })
    .skip(0)
    .limit(limitPerPage);

  if (!Reports) {
    throw new ApiError(400, "Error in Find Reports");
  }

  resp
    .status(200)
    .json(
      new ApiResponse(
        200,
        { Reports, ContentPerPage: limitPerPage },
        "Here are the Reports"
      )
    );
});

module.exports = { getReports };
