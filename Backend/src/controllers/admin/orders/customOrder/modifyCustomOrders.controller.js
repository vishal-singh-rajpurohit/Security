const ApiError = require("../../../../utils/ApiError.utils");
const ApiResponse = require("../../../../utils/ApiResponse.utils");
const asyncHandler = require("../../../../utils/asyncHandler.utils");
const Custom = require("../../../../models/custom.model");


const modifyCustomOrders = asyncHandler(async (req, resp)=>{
    const {CustomId, UserId} = req.body;
});

module.exports = modifyCustomOrders;