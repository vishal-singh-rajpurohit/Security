const asyncHandler = require("../../utils/asyncHandler.utils");
const ApiError = require("../../utils/ApiError.utils");
const ApiResponse = require("../../utils/ApiResponse.utils");
const { genreateOtp, Options } = require("../../methods");
const { sendOtp } = require("../admin/sendMails/sendMail");

const otpVerification = asyncHandler(async (req, resp) => {
  const { FirstName, LastName, Password, ConformPassword, MobileNumber, Email, UserType } = req.body;
  if (!Email || !UserType) {
    throw new ApiError(400, "Must Provide Email and UserType");
  }

  const otp = genreateOtp();

  if (!otp) {
    throw new ApiError(400, "Failed to Genrate Otp");
  }

  await sendOtp(Email, otp);

  console.log("otp sent");

  resp
    .status(200)
    .cookie("OTP", otp, Options)
    .json(new ApiResponse(200, {
      OTP: otp, SentData: {
        FirstName,
        LastName,
        Password,
        ConformPassword,
        MobileNumber,
        Email,
        UserType
      }
    }, "Otp Sent Successfully"));
});

module.exports = otpVerification;
