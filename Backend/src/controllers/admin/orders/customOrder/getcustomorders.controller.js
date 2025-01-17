const ApiError = require("../../../../utils/ApiError.utils");
const ApiResponse = require("../../../../utils/ApiResponse.utils");
const asyncHandler = require("../../../../utils/asyncHandler.utils");
const Custom = require("../../../../models/custom.model");


const getCustomOrders = asyncHandler(async (req, resp) => {
    const { Password } = req.body;

    if (Password !== process.env.ADMIN_PASSWORD) {
        throw new ApiError(401, "Unautharized Request");
    }


    const customOrders = await Custom.find({ STATUS: "PENDING" });

    if (!customOrders) {
        throw new ApiError(400, "Unable To Find in Data Base");
    }

    resp.status(200).json(new ApiResponse(200, { CusomOrders: customOrders }, "Orders Found"));

});

module.exports = getCustomOrders;