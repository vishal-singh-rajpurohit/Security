const { checkUserType } = require("../methods");
const ApiError = require("../utils/ApiError.utils");
const asyncHandler = require("../utils/asyncHandler.utils");

const isExists = asyncHandler(async (req, resp, next) => {
    const { Email, UserType, Password } = req.body;

    if (!Email) {
        throw new ApiError(400, "Must Provide Email");
    }

    if(!UserType){
        throw new ApiError(400, "Must Provide UserType");
    }

    const UserModel = checkUserType(UserType);

    if (!UserModel) {
        throw new ApiError(400, "invalid User Model");
    }

    const isUserExists = await UserModel.findOne({ Email });

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
    const { Email, UserType } = req.body;

    if (!Email) {
        throw new ApiError(400, "Must Provide Email");
    }

    const UserModel = checkUserType(UserType);

    if (!UserModel) {
        throw new ApiError(400, "invalid User Model");
    }

    const isUserExists = await UserModel.exists({ Email });

    if (isUserExists) {
        throw new ApiError(400, "User Exists with this email");
    }

    next();
});

module.exports = { isExists, isNotExists };