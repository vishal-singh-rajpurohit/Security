const asyncHandler = require("../utils/asyncHandler.utils");
const ApiError = require("../utils/ApiError.utils");
const Otp = require("../models/otp.model")


const checkOtp = asyncHandler(async (req, resp, next) => {

    const otpTrimmed = req.body?.Otp?.toString().trim();
    let xOtp = Number(otpTrimmed);

    console.log("Received OTP:", otpTrimmed, "Type:", typeof otpTrimmed);
    console.log("Converted OTP:", xOtp, "Type:", typeof xOtp);

    const otpValidation = await Otp.findOne({ Otp: xOtp });
    console.log("OTP from DB:", otpValidation);

    if (!otpValidation) {
        throw new ApiError(401, "Invalid OTP");
    }

    await Otp.deleteOne({Otp: xOtp});
    console.log("otp checked");

    next();
});

module.exports = { checkOtp };