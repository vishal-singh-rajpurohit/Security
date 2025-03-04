const Product = require('../../../models/product.model')
const asyncHandler = require('../../../utils/asyncHandler.utils')
const ApiResponse = require('../../../utils/ApiResponse.utils');
const ApiError = require('../../../utils/ApiError.utils')
const uploadOnCloud = require("../../../utils/cloudinary.utils")


const serveNewProducts = asyncHandler(async (req, resp) => {
    let filterTerm = req.body.filterTerm;

    if (!filterTerm) {
        filterTerm = "new"
    }

    const products = await Product.aggregate([
        {
            $match: {
                Status: filterTerm
            }
        }, {
            $project: {
                _id: 1,
                ProductName: 1,
                PriceForCustomers: 1,
                FrontImage: 1,
                Status: 1
            }
        }
    ])

    if (!products) {
        throw new ApiError(404, "Product not found")
    }

    resp.status(200)
        .json(new ApiResponse(200, {
            Products: products
        }, "Products Served"))
})

const selectProduct = asyncHandler(async (req, resp) => {
    const { ProductId } = req.body

    if (!ProductId) {
        throw new ApiError(400, "Product Id Not Found");
    }

    const product = await Product.findOne({
        _id: ProductId
    })

    if (!product) {
        throw new ApiError(404, "Product Not Found")
    }

    resp.status(200)
        .json(new ApiResponse(200, {
            Product: product
        }, "Served Product"))
})

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
const changeAdvancedAmmount = asyncHandler(async (req, resp) => {

    const { ProductId, AdvancedPaymentAmmount } = req.body;

    if (!ProductId) {
        throw new ApiError(400, "Product Id Must Be Provided")
    }

    if (!AdvancedPaymentAmmount) {
        throw new ApiError(400, "New Ammount of Product Must Be Provided")
    }

    const product = await Product.exists({
        _id: ProductId
    })

    if (!product) {
        throw new ApiError(400, "Product Not Found")
    }

    const newProduct = await Product.findByIdAndUpdate(ProductId, {
        $set: {
            AdvancedPaymentAmmount: AdvancedPaymentAmmount
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
        console.log("Prodcut id :", ProductId)
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
            ShowCaseImages: ShowCaseImages
        }
    })

    if (!newProduct) {
        throw new ApiError(400, "Something went wrong while saving")
    }

    resp.status(201)
        .json(new ApiResponse(201, {}, "Updated"))
})

const suspendProduct = asyncHandler(async (req, resp) => {
    const { ProductId } = req.body

    if (!ProductId) {
        throw new ApiError(400, "Product Id Not Found");
    }

    const product = await Product.findOneAndUpdate({
        _id: ProductId
    }, {
        Status: "suspended"
    });

    if (!product) {
        throw new ApiError(404, "Product not suspended")
    }

    resp.status(200)
        .json(new ApiResponse(200, {}, "Item Suspended"))
})

const publishProduct = asyncHandler(async (req, resp) => {
    const { ProductId } = req.body

    if (!ProductId) {
        throw new ApiError(400, "Product Id Not Found");
    }

    const product = await Product.findOneAndUpdate({
        _id: ProductId
    }, {
        Status: "published"
    });

    if (!product) {
        throw new ApiError(404, "Product not suspended")
    }

    resp.status(200)
        .json(new ApiResponse(200, {}, "Item Published"))
})

// const publishProduct = asyncHandler(async (req, resp) => {
//     const { ProductId } = req.body

//     if (!ProductId) {
//         throw new ApiError(400, "Product Id Not Found");
//     }

//     const product = await Product.findOneAndUpdate({
//         _id: ProductId
//     }, {
//         Status: "published"
//     });

//     if (!product) {
//         throw new ApiError(404, "Product not suspended")
//     }

//     resp.status(200)
//         .json(new ApiResponse(200, {}, "Item Published"))
// })

module.exports = { serveNewProducts, selectProduct, suspendProduct, publishProduct, changeName, changePrice, changeAdvancedAmmount, changeImages }