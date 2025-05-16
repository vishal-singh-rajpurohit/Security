const express = require('express');
const upload = require("../middlewares/multer.middleware.js");
const { newProduct, delProduct} = require("../controllers/NEW/admin/products.controller.js");
const { setStatus } = require('../controllers/NEW/orders.controller.js');
const { respReport } = require('../controllers/NEW/report.controller.js');

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


// Orders Admin
adminRouter.route("/orders/set-status").post(setStatus);

// Reports 
adminRouter.route("/report/response").post(respReport);




module.exports = adminRouter;