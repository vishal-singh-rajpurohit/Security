const asyncHandler = require("../utils/asyncHandler.utils");
const ApiError = require("../utils/ApiError.utils");


const checkOtp =asyncHandler((req, resp, next) => {
    
    const otp = Number(req.cookies.OTP);

    if (!otp) {
        throw new ApiError(400, "Somthing Wents Wrong in Otp ")
    }

    const Otp  = Number(req.body?.Otp);
    console.log("Body is :",req.body);
    if(!Otp){
        throw new ApiError(400, "Must Provide Otp");
    }

    if (otp !== Otp) {
        throw new ApiError(400 , "invalid Otp")
    }
    
    next();
});

module.exports = { checkOtp };