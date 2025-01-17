const Report = require("../../models/report.models");
const ApiError = require("../../utils/ApiError.utils");
const ApiResponse = require("../../utils/ApiResponse.utils");
const asyncHandler = require("../../utils/asyncHandler.utils");

const addreport = asyncHandler(async (req, resp) => {
  const user = req.user;
  if (!user) {
    throw new ApiError(400, "Anautharized User");
  }

  const { OrderId, TroubleType, Message } = req.body;

  const UserId = user._id;

  if (!TroubleType || !UserId) {
    console.log(TroubleType)
    console.log(UserId)
    throw new ApiError(400, "Trubel or DealerId Type Not Found");
  }


  const newReport = new Report({
    UserId,
    OrderId,
    TroubleType,
    Message,
  });

  await newReport.save();

  if(!newReport){
    throw new ApiError(400, "Unable to Post Error on DB");
  }

  resp.status(200).json( new ApiResponse(200, {} ,"Report Submitted Successfully , It Will Be Reviewed Soon" ));
});

module.exports = addreport;
