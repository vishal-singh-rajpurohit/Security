const asyncHandler = require('../../utils/asyncHandler.utils');
const genTokens = require("../../utils/genTokens.utils");
const ApiError = require("../../utils/ApiError.utils");
const ApiResponse = require("../../utils/ApiResponse.utils");
const Dealer = require('../../models/dealer.model');
const User = require('../../models/user.model');
const Installer = require('../../models/installer.model');
const jwt = require("jsonwebtoken");

const refreshAccessAndRefreshToken = asyncHandler(async (req, resp) => {
    const refreshToken = req.cookies.refreshToken || req.header["Authorization"]?.replace("Bearer ", "");
    const user = req.user
    if (!refreshToken) {
        throw new ApiError(401, "Unauthorized request");
    }

    const decodedToken = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);

    if (!decodedToken) {
        throw new ApiError(401, "Unauthorized request");
    }

    let Modal;

    switch (user.UserType) {
        case "DEALER":
            Modal = Dealer;
            break;

        case "INSTALLER":
            Modal = Installer;
            break;

        case "CUSTOMER":
            Modal = User;
            break;

        default:
            throw new ApiError(401, "Somthing Wents Wrong With User Type");
    }

    const foundUser = await Modal.findById(decodedToken?._id);

    if (refreshToken !== foundUser.refreshToken) {
        console.log(foundUser.refreshToken == refreshToken)
        throw new ApiError(401, "refreshToken is expired");
    }

    const { accessToken, newRefreshToken } = await genTokens(Modal, foundUser._id);


    if (!accessToken || !newRefreshToken) {
        console.log(accessToken , " kkkk ", newRefreshToken);
        throw new ApiError(500, "refreshToken or accessToken not generated");
    }

    const newUser = await Modal.findOneAndUpdate(
        { _id: user._id },
        {
            $set: {
                refreshToken: newRefreshToken
            }
        }
    ).select("-Password -refreshToken")

    if (!newUser) {
        throw new ApiError(500, "Somthing Wents Wrong While Saving the refreshToken");
    }

    const Options = {
        httpOnly: true,
        secure: true
    }

    resp.status(200)
        .cookie("refreshToken", newRefreshToken, Options)
        .cookie("accessToken", accessToken, Options)
        .json(new ApiResponse(200, { accessToken, refreshToken: newRefreshToken, User: newUser }, "Tokens Refreshed Successfully"));
});

module.exports = refreshAccessAndRefreshToken;