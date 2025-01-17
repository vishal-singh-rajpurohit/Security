const express = require("express");
const upload = require("../middlewares/multer.middleware.js");
const Auth = require("../middlewares/Auth.middleware.js");
const { checkOtp } = require("../middlewares/checkOtp.middleware.js");


const {registerDealer , loginDealer, logoutDealer} = require("../controllers/users/dealer.controller.js");
const dealerAddInfo = require("../controllers/users/verificationDetails/dealerAddInfo.controller.js");
const changeId = require("../controllers/users/update/changeId.controller.js");

const dealerRoutes = express.Router();

// dealer logout
dealerRoutes.route("/register").post(upload.single("image"),checkOtp , registerDealer);
dealerRoutes.route("/login").post(checkOtp, loginDealer);
dealerRoutes.route("/logout").post(Auth, logoutDealer);
dealerRoutes.route("/addinfo").post(Auth, upload.single("photoId"), dealerAddInfo);
dealerRoutes.route("/addid").put(changeId);


module.exports = dealerRoutes;
