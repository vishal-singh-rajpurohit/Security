const express = require("express");



const mainRoutes = express.Router();

// CHECK AUTHENTICATION
mainRoutes.route("/auth/sign-up", require("./auth.routes"));

// Otps

// SERVE PRODUCTS

// Reports

// CART

// New Routes


module.exports = mainRoutes;