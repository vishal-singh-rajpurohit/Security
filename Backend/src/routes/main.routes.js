const express = require("express");
const { registerUser } = require("../controllers/users/user.controller");
const { initialProductServe, productServer, selectProductServer } = require("../controllers/NEW/products/serve.controller");



const mainRoutes = express.Router();

// CHECK AUTHENTICATION
mainRoutes.route("/auth/sign-up").post(registerUser);

// Otps

// SERVE PRODUCTS
mainRoutes.route("/serve/initail-serve").get(initialProductServe);
mainRoutes.route("/serve/serve-by-page").get(productServer);
mainRoutes.route("/serve/select-product").get(selectProductServer);

// Reports

// CART

// New Routes


module.exports = mainRoutes;