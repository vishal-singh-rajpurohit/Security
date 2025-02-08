const asyncHandler = require('../../utils/asyncHandler.utils');
const genTokens = require("../../utils/genTokens.utils");
const ApiError = require("../../utils/ApiError.utils");
const ApiResponse = require("../../utils/ApiResponse.utils");
const User = require('../../models/user.model');
const jwt = require("jsonwebtoken");
const {Options} = require('../../methods')

const refreshAccessAndRefreshToken = asyncHandler(async (req, resp) => {
    const oldRefreshToken = req.cookies.refreshToken || req.header["Authorization"]?.replace("Bearer ", "");
    const user = req.user
    if (!oldRefreshToken) {
        throw new ApiError(401, "Unauthorized request");
    }

    const decodedToken = jwt.verify(oldRefreshToken, process.env.REFRESH_TOKEN_SECRET);

    if (!decodedToken) {
        throw new ApiError(401, "Unauthorized request");
    }

    let Modal = User;



    const foundUser = await Modal.findById(decodedToken?._id);

    if (oldRefreshToken !== foundUser.refreshToken) {
        throw new ApiError(401, "refreshToken is expired");
    }

    const { accessToken, refreshToken } = await genTokens(Modal, foundUser._id);


    if (!accessToken || !refreshToken) {
        console.log(accessToken , " kkkk ", refreshToken);
        throw new ApiError(500, "refreshToken or accessToken not generated");
    }

    const newUser = await Modal.findOneAndUpdate(
        { _id: user._id },
        {
            $set: {
                refreshToken: refreshToken
            }
        }
    ).select("-Password -refreshToken")

    if (!newUser) {
        throw new ApiError(500, "Somthing Wents Wrong While Saving the refreshToken");
    }

    resp.status(200)
        .cookie("refreshToken", refreshToken, Options)
        .cookie("accessToken", accessToken, Options)
        .json(new ApiResponse(200, { accessToken, refreshToken: refreshToken, User: newUser }, "Tokens Refreshed Successfully"));
});

module.exports = refreshAccessAndRefreshToken;