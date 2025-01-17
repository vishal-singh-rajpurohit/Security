const asyncHandler = require("../../utils/asyncHandler.utils");
const ApiResponse = require("../../utils/ApiResponse.utils");
const ApiError = require("../../utils/ApiError.utils");
const Custom = require("../../models/custom.model");

const customOrders = asyncHandler(async (req, resp)=>{
    const {CameraType, MegaPixels, IndoorCam, OutdoorCam, Channels, HardDisk, Area} = req.body;

    if(!CameraType || !MegaPixels || !IndoorCam || !OutdoorCam || !Channels || !HardDisk || !Area){
        throw new ApiError(400, "Must Provide All Values");
    }

    if(!req.user){
        throw new ApiError(400, "Unautharized Request");
    }

    const newOrder = new Custom({
        CoustomerId: req.user._id,
        CameraType,
        MegaPixels,
        IndoorCam,
        OutdoorCam,
        Channels,
        HardDisk,
        Area
    });

    const newProduct = newOrder.save();

    resp.status(200).json(new ApiResponse(200, {newProduct}, "Customized Order Placed Successfully"));

});

module.exports = customOrders;