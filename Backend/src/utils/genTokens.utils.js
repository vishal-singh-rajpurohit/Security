const Dealer = require("../models/dealer.model");
const ApiError = require("./ApiError.utils")

const genTokens = async (Model, userId) => {
    try {
        console.log("genTokens start");
        const user = await Model.findById(userId);

        if (!user) {
            console.log("user not found");
            throw new ApiError(400, "User Not Found");
        }

        const accessToken = user.gentateAccessToken();
        const refreshToken = user.gentateRefreshToken();

        user.refreshToken = refreshToken;
        user.save({ validateBeforeSave: false });

        return { accessToken, refreshToken }

    } catch (error) {
        throw new ApiError(400, "Somting Wents Wrong While Genrating Tokens");
    }
}

module.exports = genTokens;