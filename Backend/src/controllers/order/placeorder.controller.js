const asyncHandler = require("../../utils/asyncHandler.utils");
const ApiError = require("../../utils/ApiError.utils");
const ApiResponse = require("../../utils/ApiResponse.utils");
const Order = require("../../models/order.model");
const Product = require("../../models/product.model");
const { default: mongoose } = require("mongoose");

const placeOrder = asyncHandler(async (req, resp) => {

    const user = req.user;
    if (!user) {
        throw new ApiError(401, "unAuautharized Request, Log in First ");
    }

    const { ProductId, Address, City, State, PostCode, MobileNumber, ReffralCode } = req.body;

    console.log("ProductId , Address, City, State, PostCode, MobileNumber, ReffralCode :", ProductId, Address, City, State, PostCode, MobileNumber, ReffralCode);


    if (!ProductId || !Address || !City || !State || !PostCode || !MobileNumber) {
        throw new ApiError(400, "All Data Required");
    }

    const productDetails = await Product.findOne({ _id: ProductId });

    if (!productDetails) {
        throw new ApiError(400, "Product Details Not Found");
    }

    const newOrder = new Order({
        ProductId,
        UserId: user._id,
        Address,
        City,
        State,
        PostCode,
        MobileNumber,
        ReffralCode: ReffralCode || ''
    });

    await newOrder.save();
    resp.status(200).json(new ApiResponse(200, {}, "Order Placed here"));
});

const cancleOrder = asyncHandler(async (req, resp) => {
    try {
        const user = req.user;

        if (!user) {
            throw new ApiError(401, "Unautharized Request ");
        }

        const { OrderId } = req.body;

        const checkOrder = await Order.findById(OrderId);

        if (!checkOrder) {
            throw new ApiError(400, "Order Not Found");
        }

        const cancledOrder = await Order.findByIdAndUpdate(
            {
                _id: OrderId
            },
            {
                Status : "CANCELLED"
            }
        )

        if(!cancledOrder){
            throw new ApiError(400, "Unable to cancle Orders")
        }

        resp.status(200)
        .json(new ApiResponse(200, {}, "Order Cancelled Successfully"))

    } catch (error) {
        console.log("error while cancelling order ", error)
    }
})

const getAllOrders = asyncHandler(async (req, resp) => {
    const user = req.user;
    if (!user) {
        throw new ApiError(401, "Auautharized Request ");
    }


    const Orders = await Order.aggregate([
        {
            $match: {
                UserId: user._id
            }
        },
        {
            $lookup: {
                from: "products",
                localField: "ProductId",
                foreignField: "_id",
                as: "product"
            }
        },
        {
            $addFields: {
                Product: {
                    $first: "$product"
                }
            }
        },
        {
            $project: {
                "Product.ProductName": 1,
                "Product._id": 1,
                "Product.FrontImage": 1,
                "Product.Explaination": 1,
                "Product.Price": {
                    $switch: {
                        branches: [
                            { case: { $eq: [user.UserType, "DEALER"] }, then: "$Product.PriceForDealers" },
                            { case: { $eq: [user.UserType, "INSTALLER"] }, then: "$Product.PriceForInstallers" },
                            { case: { $eq: [user.UserType, "CUSTOMER"] }, then: "$Product.PriceForCustomers" }
                        ],
                        default: "$Product.PriceForCustomers" // Handle other cases or mismatched UserTypes
                    }
                },
                Status: 1
            }
        }
    ])

    if (!Orders) {
        throw new ApiError(400, "Orders Not Found");
    }

    resp.status(200)
        .json(new ApiResponse(200, {
            Orders: Orders
        }));

});


module.exports = { placeOrder, getAllOrders, cancleOrder };