const asyncHandler = require("../../utils/asyncHandler.utils");
const ApiError = require("../../utils/ApiError.utils");
const ApiResponse = require("../../utils/ApiResponse.utils");
const Order = require("../../models/order.model");
const Product = require("../../models/product.model");

const placeOrder = asyncHandler(async (req, resp) => {

    const user = req.user;
    if (!user) {
        throw new ApiError(401, "Auautharized Request, Log in First ");
    }

    const { ProductId } = req.body;

    const productDetails = await Product.find({ _id: ProductId });

    if (!productDetails) {
        throw new ApiError(400, "Product Details Not Found");
    }

    const newOrder = new Order({
        ProductId,
        UserId: user._id,
        UserType: user.UserType
    });

    await newOrder.save();
    resp.status(200).json(new ApiResponse(200, {}, "Order Placed here"));
});

const getAllOrders = asyncHandler(async (req, resp) => {
    const user = req.user;
    if (!user) {
        throw new ApiError(401, "Auautharized Request ");
    }

    // const { OrderId } = req.body;

    // if (!OrderId) {
    //     throw new ApiError(400, "Must Provide Order Id");
    // }

    // const isOrderExists = await Order.exists({ _id: OrderId });

    // if (!isOrderExists) {
    //     throw new ApiError(400, "Order Does Not Exists");
    // }

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
                }
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
module.exports = { placeOrder, getAllOrders };