const Reportreview = require("../../models/reportreview.model");
const ApiError = require("../../utils/ApiError.utils");
const ApiResponse = require("../../utils/ApiResponse.utils");
const asyncHandler = require("../../utils/asyncHandler.utils");

const addSatisfaction = asyncHandler(async( req, resp)=>{
    const user = req.user;

    if(!user){
        throw new ApiError(401, "Unautharized Request");
    }

    const {ResponseId, Status} = req.body;

    if(!ResponseId || !Status){
        throw new ApiError(400 , "Must Provide Id or Status");
    }

    const updatedReview = await Reportrevie.findByIdAndUpdate(ResponseId , {
       $set: { Status}
    })

    if(!updatedReview){
        throw new ApiError(400, "Problem in Add Reiew Status");
    }

    resp.status(200)
    .json(new ApiResponse(200, {}, "Added Satisfaction"));

});

const getReviews = asyncHandler(async(req, resp)=>{
    const user = req.user;

    if(!user){
        throw new ApiError(401, "Unautharized Request");
    }

    console.log(user._id);

    const Reviews = await Reportreview.find({UserId: user._id});

    if(!Reviews){
        throw new ApiError(200, "Error in Find Reviews");
    }

    resp.status(200)
    .json(new ApiResponse(200, {Reviews}, "Reviews Found"));

});

module.exports = {addSatisfaction, getReviews};