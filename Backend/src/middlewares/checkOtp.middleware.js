const asyncHandler = require("../utils/asyncHandler.utils");
const ApiError = require("../utils/ApiError.utils");
const Otp = require("../models/otp.model")


const checkOtp =asyncHandler(async (req, resp, next) => {

    const otp  = req.body?.Otp

    console.log("otp is 4: ", otp , req.body);
    

    if(!otp || isNaN(otp)){
        throw new ApiError(400, "Must Provide Otp");
    }

    console.log("otp :", otp, typeof otp);


    const otpValidation = await Otp.exists({Otp: otp});

    console.log("otp :", otpValidation);
    

    if(!otpValidation){
        throw new ApiError(401, "invalid otp");
    }

    await Otp.deleteOne({Otp: otp});
    console.log("otp checked");
    
    next();
});

module.exports = { checkOtp };