const Product = require("../../models/product.model");
const { ObjectId } = require("mongodb")
const Cart = require("../../models/cart.model")
const asyncHandler = require("../../utils/asyncHandler.utils");
const ApiError = require("../../utils/ApiError.utils");
const ApiResponse = require("../../utils/ApiResponse.utils");
const { paginate, limit } = require("../../methods");

const serverProducts = asyncHandler(async (req, resp) => {
  const page = Number(req.query.page) || 0;
  // let isFilterOn = false;
  const { CameraType, NumberOfCameras, CameraQuality, MegaPixels, IndoorOutdoor } = req.body.Filters;
  const { UserType } = req.body
  // fiter by price will be added soon Premium

  console.log("req.body.Filters :", req.body.Filters);


  // filter matching queries for optimization
  let matchQuery = {}
  if (CameraType) matchQuery.CameraType = CameraType;
  if (NumberOfCameras) matchQuery.NumberOfCameras = NumberOfCameras;
  if (CameraQuality) matchQuery.CameraQuality = CameraQuality;
  if (MegaPixels) matchQuery.MegaPixels = MegaPixels;
  if (IndoorOutdoor) matchQuery.InOut = IndoorOutdoor;

  console.log("matchQuery :", matchQuery);



  const skipped = paginate(page, 15);
  if (Object.keys(matchQuery).length === 0) {
    console.log("Filter prodcuts called");

    const Products = await Product.aggregate([
      {
        $match: req.body.Filters
      },
      {
        $project: {
          _id: 1,
          ProductName: 1,
          PriceForDealers: {
            $cond: {
              if: { $eq: [UserType, "DEALER"] },
              then: "$PriceForDealers",
              else: "$$REMOVE"
            }
          },
          PriceForInstallers: {
            $cond: {
              if: { $eq: [UserType, "INSTALLER"] },
              then: "$PriceForInstallers",
              else: "$$REMOVE"
            }
          },
          PriceForCustomers: {
            $cond: {
              if: { $eq: [UserType, "CUSTOMER"] },
              then: "$PriceForCustomers",
              else: "$$REMOVE"
            }
          },
          Premium: 1,
          AdvancedPaymentAmmount: 1,
          Description: 1,
          FrontImage: 1,
          Explaination: 1
        }
      }
    ])

    if (!Products) {
      throw new ApiError(400, "Not Any Product Found With Filter");
    }

    resp.status(200).json(
      new ApiResponse(
        200,
        {
          Products,
          LimitPerPage: limit,
        },
        "Here All Products With Filter"
      )
    );
  }
  else {
    console.log("Filter prodcuts called");

    const Products = await Product.aggregate([
      {
        $project: {
          _id: 1,
          ProductName: 1,
          PriceForDealers: {
            $cond: {
              if: { $eq: [UserType, "DEALER"] },
              then: "$PriceForDealers",
              else: "$$REMOVE"
            }
          },
          PriceForInstallers: {
            $cond: {
              if: { $eq: [UserType, "INSTALLER"] },
              then: "$PriceForInstallers",
              else: "$$REMOVE"
            }
          },
          PriceForCustomers: {
            $cond: {
              if: { $eq: [UserType, "CUSTOMER"] },
              then: "$PriceForCustomers",
              else: "$$REMOVE"
            }
          },
          Premium: 1,
          AdvancedPaymentAmmount: 1,
          Description: 1,
          FrontImage: 1,
          Explaination: 1
        }
      }
    ]).skip(skipped).limit(limit);
    if (!Products) {
      throw new ApiError(400, "Not Any Product Found");
    }

    resp.status(200).json(
      new ApiResponse(
        200,
        {
          Products,
          LimitPerPage: limit,
        },
        "Here All Products"
      )
    );
  }
});

const servePremium = asyncHandler(async (req, resp) => {
  const page = Number(req.query.page) || 0;
  const { UserType } = req.body;

  const skipped = paginate(page, 4);

  const Products = await Product.aggregate([
    {
      $match: {
        Premium: true
      }
    },
    {
      $project: {
        _id: 1,
        ProductName: 1,
        PriceForDealers: {
          $cond: {
            if: { $eq: [UserType, "DEALER"] },
            then: "$PriceForDealers",
            else: "$$REMOVE"
          }
        },
        PriceForInstallers: {
          $cond: {
            if: { $eq: [UserType, "INSTALLER"] },
            then: "$PriceForInstallers",
            else: "$$REMOVE"
          }
        },
        PriceForCustomers: {
          $cond: {
            if: { $eq: [UserType, "CUSTOMER"] },
            then: "$PriceForCustomers",
            else: "$$REMOVE"
          }
        }
      }
    }
  ]).skip(skipped).limit(4);

  if (!Products) {
    throw new ApiError(400, "Not Any Product Found");
  }

  resp.status(200).json(
    new ApiResponse(
      200,
      {
        Premium: Products,
        LimitPerPage: limit,
      },
      "Here All Premium Products"
    )
  );
});

const serveSelectedProduct = asyncHandler(async (req, resp) => {
  const { ProductId, UserType } = req.body;

  if (!ProductId) {
    throw new ApiError(400, "Must Provide Product Id");
  }

  const Item = await Product.aggregate([
    {
      $match: {
        _id: new ObjectId(ProductId)
      }
    },
    {
      $project: {
        _id: 1,
        ProductName: 1,
        PriceForDealers: {
          $cond: {
            if: { $eq: [UserType, "DEALER"] },
            then: "$PriceForDealers",
            else: "$$REMOVE"
          }
        },
        PriceForInstallers: {
          $cond: {
            if: { $eq: [UserType, "INSTALLER"] },
            then: "$PriceForInstallers",
            else: "$$REMOVE"
          }
        },
        PriceForCustomers: {
          $cond: {
            if: { $eq: [UserType, "CUSTOMER"] },
            then: "$PriceForCustomers",
            else: "$$REMOVE"
          }
        },
        Premium: 1,
        AdvancedPaymentAmmount: 1,
        Description: 1,
        FrontImage: 1,
        ShowCaseImages: 1,
        Explaination: 1,
        AboutItem: 1
      }
    }
  ])
  if (!Item) {
    throw new ApiError(400, "Item Not Found");
  }

  resp.status(200)
    .json(new ApiResponse(200, { Product: Item }, "Here is the item"));

});

const serveCartItems = asyncHandler(async (req, resp) => {
  const user = req.user;
  const page = Number(req.query.page) || 0;
  const skipped = paginate(page, 15);
  const { UserType } = req.body;

  if (!user) {
    throw new ApiError(400, "Unautharized Request");
  }

  if (!UserType) {
    throw new ApiError(400, "Should be know UserType");
  }

  const CartProducts = await Cart.aggregate([
    {
      $match: {
        UserId: user._id
      },
    },
    {
      $lookup: {
        from: "products",
        localField: "ProdcutId",
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
        "Product.FrontImage": 1,
        "Product.Explaination": 1,
        "Product.Price": {
          $switch: {
            branches: [
              { case: { $eq: [UserType, "DEALER"] }, then: "$Product.PriceForDealers" },
              { case: { $eq: [UserType, "INSTALLER"] }, then: "$Product.PriceForInstallers" },
              { case: { $eq: [UserType, "CUSTOMER"] }, then: "$Product.PriceForCustomers" }
            ],
            default: "$Product.PriceForCustomers" // Handle other cases or mismatched UserTypes
          }
        }
      }
    }
  ]).skip(skipped).limit(limit);

  let TotalAmmount = 0;

  CartProducts.map((product) => {
    TotalAmmount += product.Product.Price;
  })



  if (!CartProducts) {
    throw new ApiError(400, "Cart Item Not Found");
  }

  console.log("All Total Ammout :", TotalAmmount);

  resp.status(200)
    .json(new ApiResponse(200, {
      ProductsInCart: CartProducts,
      TotalAmmount: TotalAmmount,
      LimitPerPage: 15
    }))

});

module.exports = { serverProducts, serveSelectedProduct, serveCartItems, servePremium }