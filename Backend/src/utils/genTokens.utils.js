const User = require("../models/user.model")
const ApiError = require("./ApiError.utils")

const genTokens = async (userId) => {
    try {
        const user = await User.findById(userId);

        if (!user) {
            console.log("user not found");
            throw new ApiError(400, "User Not Found");
        }

        const accessToken = user.gentateAccessToken();
        const refreshToken = user.gentateRefreshToken();

        user.refreshToken = refreshToken;
        user.save({ validateBeforeSave: false });

        if(!accessToken){
            throw new ApiError(500 , "Unable to genrate accessToken")
        }
        if(!refreshToken){
            throw new ApiError(500 , "Unable to genrate accessToken")
        }

        return { accessToken, refreshToken }

    } catch (error) {
        throw new ApiError(400, "Somting Wents Wrong While Genrating Tokens");
    }
}

module.exports = genTokens;