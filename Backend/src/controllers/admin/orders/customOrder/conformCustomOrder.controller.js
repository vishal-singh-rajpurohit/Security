const ApiError = require("../../../../utils/ApiError.utils");
const ApiResponse = require("../../../../utils/ApiResponse.utils");
const asyncHandler = require("../../../../utils/asyncHandler.utils");
const Custom = require("../../../../models/custom.model");

const conformCustomOrder = asyncHandler(async (req, resp)=>{
    const {CustomId} = req.body;

    if(!CustomId, Status){
        throw new ApiError(400, "CustomeId required");
    }

    const conformedOrder = await Custom.findByIdAndUpdate(CustomId, {
        $set: {STATUS : Status}
    });
    
    if(!conformedOrder){
        throw new ApiError(400, "Somthing Went Wrong While Updating");
    }

    // push an notification for preview and pay to onform

    resp.status(200)
    .json(new ApiResponse(200 , {}, "Order Stauts Changed Successfully"));
})

module.exports = conformCustomOrder;