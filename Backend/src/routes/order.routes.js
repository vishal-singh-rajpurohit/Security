const express = require("express");
const Auth = require("../middlewares/Auth.middleware");
const customOrders = require("../controllers/order/customorder.controller");
const {placeOrder , getAllOrders} = require("../controllers/order/placeorder.controller");

const orderRoutes = express.Router();

orderRoutes.route("custom").post(Auth, customOrders);
orderRoutes.route("/place-order").post(Auth, placeOrder);
orderRoutes.route("/get-my-orders").post(Auth, getAllOrders);

module.exports = orderRoutes;
