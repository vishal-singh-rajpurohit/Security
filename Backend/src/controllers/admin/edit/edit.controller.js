const Product = require('../../../models/product.model')
const asyncHandler = require('../../../utils/asyncHandler.utils')
const ApiResponse = require('../../../utils/ApiResponse.utils');
const ApiError = require('../../../utils/ApiError.utils')


const changeName = asyncHandler(async (req, resp) => {

    const { ProductId, ProductName } = req.body;

    if (!ProductId) {
        throw new ApiError(400, "Product Id Must Be Provided")
    }

    if (!ProductName) {
        throw new ApiError(400, "New Name of Product Must Be Provided")
    }

    const product = await Product.exists({
        _id: ProductId
    })

    if (!product) {
        throw new ApiError(400, "Product Not Found")
    }

    const newProduct = await Product.findByIdAndUpdate(ProductId, {
        $set: {
            ProductName: ProductName
        }
    })

    if (!newProduct) {
        throw new ApiError(400, "Something went wrong while saving")
    }

    resp.status(201)
        .json(new ApiResponse(201, {}, "Updated"))

})
const changePrice = asyncHandler(async (req, resp) => {
    const { ProductId, PriceForCustomers } = req.body;

    if (!ProductId) {
        throw new ApiError(400, "Product Id Must Be Provided")
    }

    if (!PriceForCustomers) {
        throw new ApiError(400, "New Price of Product Must Be Provided")
    }

    const product = await Product.exists({
        _id: ProductId
    })

    if (!product) {
        throw new ApiError(400, "Product Not Found")
    }

    const newProduct = await Product.findByIdAndUpdate(ProductId, {
        $set: {
            PriceForCustomers: Number(PriceForCustomers)
        }
    })

    if (!newProduct) {
        throw new ApiError(400, "Something went wrong while saving")
    }

    resp.status(201)
        .json(new ApiResponse(201, {}, "Updated"))
})
const changeImages = asyncHandler(async (req, resp) => {
    const { ProductId } = req.body;

    const image = req.files



    if (!ProductId) {
        throw new ApiError(400, "Product Id Must Be Provided")
    }

    if (!image) {
        throw new ApiError(400, "New images of Product Must Be Provided")
    }

    let ShowCaseImages = []

    // upload multiple files at a time
    const LocalFrontImage = req.files?.image[0]?.path;
    if (!LocalFrontImage) {
        throw new ApiError(400, "Cover Images not found");
    }
    const FrontImage = await uploadOnCloud(LocalFrontImage);

    for (file of req.files.display) {
        if (!file) {
            throw new ApiError(400, "error in upload the image is not found");
        } else {
            const Image = await uploadOnCloud(file.path, {
                folder: "products",
                transformation: [{ width: 309, height: 480, crop: "limit" }],
            });
            ShowCaseImages.push(Image);
        }
    }

    if (ShowCaseImages.length < 1) {
        throw new ApiError(400, "error give 5 images");
    }
    const product = await Product.exists({
        _id: ProductId
    })

    if (!product) {
        throw new ApiError(400, "Product Not Found")
    }

    const newProduct = await Product.findByIdAndUpdate(ProductId, {
        $set: {
            FrontImage: FrontImage
        }
    })

    if (!newProduct) {
        throw new ApiError(400, "Something went wrong while saving")
    }

    resp.status(201)
        .json(new ApiResponse(201, {}, "Updated"))
})

module.exports = { changeName, changePrice, changeImages }