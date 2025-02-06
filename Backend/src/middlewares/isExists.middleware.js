const User = require("../models/user.model");
const ApiError = require("../utils/ApiError.utils");
const asyncHandler = require("../utils/asyncHandler.utils");

const isExists = asyncHandler(async (req, resp, next) => {
    const { Email, Password } = req.body;

    if (!Email) {
        throw new ApiError(400, "Must Provide Email");
    }

    const isUserExists = await User.findOne({ Email });

    if (!isUserExists) {
        throw new ApiError(400, "User Not Exists")
    }

    const passwordCorrect = await isUserExists.isPasswordCorrect(Password);

    if(!passwordCorrect){
        throw new ApiError(401, "Password is incorrect");
    }

    next();
});

const isNotExists = asyncHandler(async (req, resp, next) => {
    const { Email } = req.body;

    if (!Email) {
        throw new ApiError(400, "Must Provide Email");
    }


    const isUserExists = await User.exists({ Email });

    if (isUserExists) {
        throw new ApiError(400, "User Exists with this email");
    }

    next();
});

module.exports = { isExists, isNotExists };