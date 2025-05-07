const express = require("express");
const Auth = require("../middlewares/Auth.middleware");
const {registerUser , loginUser , logoutUser, becomeDealer, sendVerificationOtp, verifyUser, verifyEmail} = require("../controllers/users/user.controller");
const userAddInfo = require("../controllers/users/verificationDetails/userAddInfo.controller");


const userRoutes = express.Router();

userRoutes.route("/register").post(registerUser);
userRoutes.route("/login").post(loginUser);
userRoutes.route("/logout").post(Auth, logoutUser);
userRoutes.route("/verify-token").post(Auth, verifyEmail);
userRoutes.route("/addinfo").post(Auth, userAddInfo);
userRoutes.route("/becomeUser").put(Auth, becomeDealer);
userRoutes.route("/verification-mail").post(Auth, sendVerificationOtp);
userRoutes.route("/validate-user").post(verifyEmail);

module.exports = userRoutes;