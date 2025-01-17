const asyncHandler = require("../utils/asyncHandler.utils");
const ApiError = require("../utils/ApiError.utils");


const checkOtp =asyncHandler((req, resp, next) => {
    
    console.log("check executed");
    
    const otp = Number(req.cookies.OTP);
    // const otp = req.cookies.OTP;

    console.log(otp)

    if (!otp) {
        throw new ApiError(400, "Somthing Wents Wrong in Otp ")
    }

    const Otp  = Number(req.body?.Otp);
    console.log(req.body)
    
    if(!Otp){
        throw new ApiError(400, "Must Provide Otp");
    }
    console.log("Otp is: ", Otp)

    if (otp !== Otp) {
        throw new ApiError(400 , "invalid Otp")
    }
    console.log("check closed");
    
    next();
});

module.exports = { checkOtp };