const express = require("express");
const Auth = require("../middlewares/Auth.middleware");
const { addToCart, serveCart, removeFromCart, changeQunatity, clearCart } = require("../controllers/NEW/cart.controller");

const cartRoutes = express.Router();


cartRoutes.route("/add-to-cart").post(Auth, addToCart);

cartRoutes.route("/remove-from-cart").post(Auth, removeFromCart);

cartRoutes.route("/chage-qunatity-cart").post(Auth, changeQunatity);

cartRoutes.route("/clear-cart").post(Auth, clearCart);

cartRoutes.route("/serve-cart").post(Auth, serveCart);

module.exports = cartRoutes;