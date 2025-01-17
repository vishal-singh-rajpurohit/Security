const asyncHandler = require("../../utils/asyncHandler.utils");
const ApiError = require("../../utils/ApiError.utils");
const ApiResponse = require("../../utils/ApiResponse.utils")
const Order = require("../../models/order.model");
const Dealer = require("../../models/dealer.model");
const Payment = require("../../models/payment.models");
const Product = require("../../models/product.model");


const placeOrder = asyncHandler(async (req, resp) => {

    const user = req.user;
    if(!user){
        throw new ApiError(401, "Auautharized Request")
    }

    const payment = req.payment;

    if(!req.payment){
        throw new ApiError(401, "Payment Faield");
    }

    const { ProductId, BuildingName, MobileNumber2 } = req.body;

    const productDetails = await Product.find({ ProductId });
    
    let Price;

    switch(user.UserType){
        case "CUSTOMER":
            Price = productDetails.PriceForCustomers;
            break;
        case "Dealer":
            Price = productDetails.PriceForDealers;
            break;
        case "Installer":
            Price: productDetails.PriceForInstallers;
            break;
        default: 
            throw new ApiError(400, "Invalid User Type");
    }
    let AdvancedAmmount , pendingAmmount, advancedPaymentId;
    switch(ammount in payment.Ammount){
        case ammount === productDetails.AdvancedPaymentAmmount:
            AdvancedAmmount = ammount;
            pendingAmmount = Price - AdvancedAmmount;
            advancedPaymentId = payment._id;
            break;
        case ammount === Price:
            AdvancedAmmount = ammount;
            pendingAmmount = 0;
            advancedPaymentId = payment._id;
            break;
        default: 
            throw new ApiError(400 , "somthing went wrong in switch case")
    }

    if(!productDetails){
        throw new ApiError(400, "Product Not Found");
    }


    const newOrder = new order({
        ProductId,
        UserrId: user._id,
        MobileNumber: user.MobileNumber,
        MobileNumber2,
        BuildingName: BuildingName,
        Address1: user.Address1,
        Address2: user.Address2 || null,
        TotalAmmount: Price,
        AdvancedPaymentAmmout: AdvancedAmmount,
        AdvancedPaymentId: advancedPaymentId,
        PendingAmmount: pendingAmmount,
        Status: "PENDING"
    });

    await newOrder.save();
    resp.status(200).json({ message: "Order Placed Successfully, It Will Be Conformed Soon", STATUS: "OK" });
});

module.exports = placeOrder;