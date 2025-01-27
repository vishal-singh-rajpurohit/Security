const asyncHandler = require("../../utils/asyncHandler.utils");
const ApiError = require("../../utils/ApiError.utils");
const ApiResponse = require("../../utils/ApiResponse.utils");
const Order = require("../../models/order.model");
const Product = require("../../models/product.model");


const placeOrder = asyncHandler(async (req, resp) => {

    const user = req.user;
    if(!user){
        throw new ApiError(401, "Auautharized Request, Log in First ");
    }

    const { ProductId } = req.body;

    const productDetails = await Product.find({ _id : ProductId });
    

    if(!productDetails){
        throw new ApiError(400, "Product Details Not Found");
    }

 
    const newOrder = new Order({
        ProductId,
        UserrId: user._id,
        Status: "PENDING"
    });

    await newOrder.save();
    resp.status(200).json( new ApiResponse(200 , {} ,"Order Placed here" ));
});

module.exports = placeOrder;