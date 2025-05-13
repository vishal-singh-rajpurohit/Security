const asyncHandler = require("../../../utils/asyncHandler.utils");
const ApiResponse = require("../../../utils/ApiResponse.utils");
const ApiError = require("../../../utils/ApiError.utils");
const Product = require("../../../models/product.model");

const initialProductServer = asyncHandler(async (req, resp) => {
  const Products = await Product.aggregate([
    {
      $limit: 20,
    },
    {
      $project: {
        _id: 1,
        ProductName: 1,
        DealPrice: 1,
        OriginalPrice: 1,
        FrontImage: 1,
        ProductCategory: 1,
        ProductBrand: 1,
        ProductRating: 1,
        ProductReviews: 1,
      },
    },
  ]);

  const OffersProducts = await Product.aggregate([
    {
      $match: {
        offer: true,
      },
    },
    {
      $limit: 10,
    },
  ]);

  if (!Products || !OffersProducts) {
    throw new ApiError(404, "No products found");
  }

  return resp.status(200).json(
    new ApiResponse(200, "Products fetched successfully", {
      Products,
      OffersProducts,
    })
  );
});

const productServer = asyncHandler(async (req, resp) => {
  const { page, limit } = req.query;
  const pageNumber = parseInt(page) || 1;
  const limitNumber = parseInt(limit) || 20;
  const skip = (pageNumber - 1) * limitNumber;

  const Products = await Product.aggregate([
    {
      $skip: skip,
    },
    {
      $limit: limitNumber,
    },
    {
      $project: {
        _id: 1,
        ProductName: 1,
        DealPrice: 1,
        OriginalPrice: 1,
        FrontImage: 1,
        ProductCategory: 1,
        ProductBrand: 1,
        ProductRating: 1,
      },
    },
  ]);

  if (!Products) {
    throw new ApiError(404, "No products found");
  }

  return resp
    .status(200)
    .json(new ApiResponse(200, "Products fetched successfully", { Products }));
});

const selectProductServer = asyncHandler(async (req, resp) => {
  const { id } = req.query;

  const ProductData = await Product.findById(id);

  if (!ProductData) {
    throw new ApiError(404, "No products found");
  }

  return resp
    .status(200)
    .json(
      new ApiResponse(200, "Products fetched successfully", { ProductData })
    );
});


module.exports = {
  initialProductServer,
  productServer,
  selectProductServer
}