const express = require("express");
const Auth = require("../middlewares/Auth.middleware");
const {
  placeOrder,
  verifyOrder,
  sendCancellationRequest,
  cancleOrder,
} = require("../controllers/NEW/orders.controller");

const orderRoutes = express.Router();

orderRoutes.route("/place-order").post(Auth, placeOrder);
orderRoutes.route("/verify-order").post(Auth, verifyOrder);

orderRoutes.route("/send-cancel-mail").post(Auth, sendCancellationRequest);
orderRoutes.route("/conform-cancel-order").post(Auth, cancleOrder);

module.exports = orderRoutes;
