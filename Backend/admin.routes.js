const express = require('express');
const upload = require("../middlewares/multer.middleware.js");
const newproduct = require('../controllers/admin/products/newproduct.controller.js');
const deleteProduct = require('../controllers/admin/products/delete.controller.js');
const {editProductPrice, editProductDisplay} = require('../controllers/admin/products/editProduct.controller.js');
const { getReports } = require('../controllers/admin/reports/getReports.controller.js');
const reviewReport = require('../controllers/admin/reports/reviewReport.controller.js');
const getUsersVerification = require('../controllers/admin/users/getUsersVerification.controller.js');
const setVerification = require('../controllers/admin/users/setVerification.controller.js');
const {changeName, changePrice, changeImages} = require("../controllers/admin/edit/edit.controller.js")


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
]), newproduct);
adminRouter.route("/delete-product").delete(deleteProduct);
// adminRouter.route("/edit-price").put(editProductPrice);
adminRouter.route("/edit-display").put(upload.fields([{
    name: "display",
    maxCount: 5
}]),editProductDisplay);

// reprts and response
adminRouter.route("/unread-reports").get(getReports);
adminRouter.route("/review-report").post(reviewReport);

// User Approval
adminRouter.route("/approve").put(setVerification);
adminRouter.route("/get-unverified-users").get(getUsersVerification);

// Edit Products

adminRouter.route("/edit-name").put(changeName)
adminRouter.route("/edit-price").put(changePrice)
adminRouter.route("/edit-images").put( upload.fields([
    {
        name: "display",
        maxCount: 5
    }
]) ,changeImages)


module.exports = adminRouter;