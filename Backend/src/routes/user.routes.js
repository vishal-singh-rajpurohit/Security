const express = require("express");
const Auth = require("../middlewares/Auth.middleware");
const {registerUser , loginUser , logoutUser, verifyUser, checkAlreadyUser} = require("../controllers/users/user.controller");

const userRoutes = express.Router();

userRoutes.route("/check-already-loggedin").post(Auth, checkAlreadyUser);
userRoutes.route("/register").post(registerUser);
userRoutes.route("/login").post(loginUser);
userRoutes.route("/verify-user").post(Auth, verifyUser);
userRoutes.route("/logout").post(Auth, logoutUser);

module.exports = userRoutes;