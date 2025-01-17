const express = require("express");
const Auth = require("../middlewares/Auth.middleware");
const customOrders = require("../controllers/order/customorder.controller");

const orderRoutes = express.Router();

orderRoutes.route("custom").post(Auth, customOrders);

module.exports = orderRoutes;
