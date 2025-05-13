const express = require('express');
const upload = require("../middlewares/multer.middleware.js");
const { newProduct, delProduct} = require("../controllers/NEW/admin/products.controller.js");

const adminRouter = express.Router();


// products
adminRouter.route("/addproduct").post(upload.fields([
    {
        name: "image",
        maxCount: 1
    },
    {
        name: "display",
        maxCount: 5
    }
]), newProduct);

adminRouter.route("/delete-product").post(delProduct);




module.exports = adminRouter;