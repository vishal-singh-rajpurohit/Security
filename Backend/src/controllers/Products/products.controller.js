const Product = require("../../models/product.model");
const asyncHandler = require("../../utils/asyncHandler.utils");
const ApiError = require("../../utils/ApiError.utils");
const ApiResponse = require("../../utils/ApiResponse.utils");
const { paginate } = require("../../methods");

const serverProducts = asyncHandler(async (req, resp) => {
  console.log("Hitting server products")
  const page  = Number(req.query.page) || 0;
  const isFilterOn = req.query.filteron
  const filterBody = req.body;
  const limit = 15;
  const skipped = paginate(page, 15);
  
  if (isFilterOn) {
    console.log(skipped)
    const Products = await Product.find(filterBody).skip(skipped).limit(15);

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
    const Products = await Product.find({}).skip(skipped).limit(15);

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

const serveSelectedProduct = asyncHandler(async (req, resp)=>{
  const {productId} = req.body;

  if(!productId){
    throw new ApiError(400, "Must Provide Product Id");
  }

  const Item = await Product.findOne({_id: productId});

  if(!Item){
    throw new ApiError(400, "Item Not Found");
  }

  resp.status(200)
  .json(new ApiResponse(200, {Product: Item}, "Here is the item"));

});

module.exports = {serverProducts, serveSelectedProduct}