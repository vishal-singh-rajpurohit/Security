const ApiError = require("../../../utils/ApiError.utils");
const ApiResponse = require("../../../utils/ApiResponse.utils");
const asyncHandler = require("../../../utils/asyncHandler.utils");
const {checkUserType} = require("../../../methods");
const Order = require("../../../models/order.model");


const conformOrder = asyncHandler(async(req , resp)=>{
    const {OrderId , Status} = req.body;

    if(!OrderId || !Status){
        throw new ApiError(400 , "Must Provide OrderId and Status");
    }

    const order = await Order.findById(OrderId);

    if(!order){
        throw new ApiError(400 , "Error While Searching The Order");
    }

    const Model = checkUserType(order.UserType);

    if(!Model){
        throw new ApiError(400 , "Model Not Found");
    }

    const user = await Model.findById(order._id).select("-Password -refreshToken");

    if(!user){
        throw new ApiError(400 , "User Not Found");
    }

    if(user.Verified !== "APPROVED"){
        throw new ApiError(400 , "User is Not Approved");
    }

    const updatedOrder = await Order.findByIdAndUpdate(OrderId , {
        Status
    });

    if(!updatedOrder){
        throw new ApiError(400 , "Somthing Went Wrong While Updating Order");
    }

    const updatedUser = await Model.findByIdAndUpdate(user._id, {
        TotalOrders: user.TotalOrders + 1
    });

    if(!updatedUser){
        throw new ApiError(400 , "Somthing Went Wrong While Updating Order");
    }

    resp.status(200)
    .json(new ApiResponse(200 , {} , "Order Updated"));

});


module.exports = conformOrder;