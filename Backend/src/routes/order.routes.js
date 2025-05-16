const express = require("express");
const Auth = require("../middlewares/Auth.middleware");
const { placeOrder, verifyOrder, sendCancellationRequest, cancleOrder, serveOrders, reportOrder,} = require("../controllers/NEW/orders.controller");
const { serveMyReports } = require("../controllers/NEW/report.controller");

const orderRoutes = express.Router();

orderRoutes.route("/place-order").post(Auth, placeOrder);

orderRoutes.route("/serve-projects").post(Auth, serveOrders);

orderRoutes.route("/verify-order").post(Auth, verifyOrder);

orderRoutes.route("/send-cancel-mail").post(Auth, sendCancellationRequest);

orderRoutes.route("/conform-cancel-order").post(Auth, cancleOrder);

orderRoutes.route("/report/report-order").post(Auth, reportOrder);

orderRoutes.route("/report/serve-reports").post(Auth, serveMyReports);

module.exports = orderRoutes;
