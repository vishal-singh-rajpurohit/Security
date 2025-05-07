const express = require("express");
const Auth = require("../middlewares/Auth.middleware")
const { isExists, isNotExists } = require("../middlewares/isExists.middleware");
const { checkOtp } = require("../middlewares/checkOtp.middleware");
const upload = require("../middlewares/multer.middleware");

const otpVerification = require("../controllers/sendOtp/otpVerification.controller");
const deleteAccount = require("../controllers/users/deleteAccount.controller");
const addreport = require("../controllers/report/addreport.controller");
const { addSatisfaction, getReviews } = require("../controllers/report/reviews.controller");
const addtocart = require("../controllers/shop/cart/addtocart.controller");
const removefromcart = require("../controllers/shop/cart/removerfromcart.controller");
const changePassword = require("../controllers/users/update/changePassword.controller");
const refreshAccessAndRefreshToken = require("../controllers/users/refreshAccessAndRefreshToken.controller");
const { serverProducts, serveSelectedProduct, serveCartItems, servePremium } = require("../controllers/Products/products.controller");
const { initialProductServer, customProductServer, selectProductServer } = require("../controllers/NEW/products/serve.controller");
// const messagesFromLanding = require("../controllers/Landing/message.controller");

const mainRoutes = express.Router();

// CHECK AUTHENTICATION
// mainRoutes.route("/auth/refresh-Tokens").post(Auth, refreshAccessAndRefreshToken);

// otps
// mainRoutes.route("/otp/send-otp-signup").post(isNotExists, otpVerification);
// mainRoutes.route("/otp/send-otp-login").post(isExists, otpVerification);
// mainRoutes.route("/danger/delete-account").post(Auth, otpVerification);
// mainRoutes.route("/otp/send-delete-otp").post(checkOtp, Auth, deleteAccount);

// SERVE PRODUCTS
// mainRoutes.route("/serve/products").post(serverProducts);
// mainRoutes.route("/serve/premium-products").post(servePremium);
// mainRoutes.route("/serve/selected-product").post(serveSelectedProduct);

// Reports
// mainRoutes.route("/report/new-report").post(Auth, addreport);
// mainRoutes.route("/report/set-satisfied").put(Auth, addSatisfaction);
// mainRoutes.route("/report/get-reviews").get(Auth, getReviews);

// CART
// mainRoutes.route("/cart/add-to-cart").post(Auth, addtocart);
// mainRoutes.route("/cart/serve-cart").post(Auth, serveCartItems);
// mainRoutes.route("/cart/remove-from-cart").post(Auth, removefromcart);

// User Modification
// mainRoutes.route("/modify/change-password").put(Auth, changePassword);

// New Routes
mainRoutes.route("/product/first-server").get(initialProductServer);
mainRoutes.route("/product/will-server").get(customProductServer);
mainRoutes.route("/product/select-server").get(selectProductServer);


module.exports = mainRoutes;