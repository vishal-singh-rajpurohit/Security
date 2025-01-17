const express = require("express");
const Auth = require("../middlewares/Auth.middleware");
const upload = require("../middlewares/multer.middleware")
const { checkOtp } = require("../middlewares/checkOtp.middleware");
const {registerInstaller , loginInstaller, logoutInstaller} = require("../controllers/users/installer.controller");
const installerAddInfo = require("../controllers/users/verificationDetails/installerAddInfo.controller");





const installerRoute = express.Router();

installerRoute.route("/register").post(upload.single('image'),checkOtp ,  registerInstaller);
installerRoute.route("/login").post(checkOtp, loginInstaller);
installerRoute.route("/logout").post(Auth, logoutInstaller);
installerRoute.route("/addinfo").post(Auth,upload.single('photoId'), installerAddInfo);


module.exports = installerRoute;