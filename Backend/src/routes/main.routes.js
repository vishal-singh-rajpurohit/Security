const express = require("express");
const { initialProductServe, productServer, selectProductServer } = require("../controllers/NEW/products/serve.controller");

const mainRoutes = express.Router();

mainRoutes.route("/serve/initail-serve").get(initialProductServe);
mainRoutes.route("/serve/serve-by-page").get(productServer);
mainRoutes.route("/serve/select-product").get(selectProductServer);

module.exports = mainRoutes;