const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser")


const app = express();
app.use(express.json({ limit: "16kb" }));
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
// for get data encoded from urls
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public")); //configure static files on server
app.use(cookieParser());


// importing routes
const dealerRoutes = require("./routes/dealer.routes");
const adminRouter = require("./routes/admin.routes");
const installerRoute = require("./routes/installer.routes");
const userRoute = require("./routes/user.routes");
const orderRoutes = require("./routes/order.routes");
const mainRoutes = require("./routes/main.routes")

app.use("/api/v1/main", mainRoutes);

app.use("/api/v1/dealer", dealerRoutes);
app.use("/api/v1/installer", installerRoute);
app.use("/api/v1/user", userRoute);
app.use("/api/v1/admin", adminRouter);

app.use("/api/v1/orders", orderRoutes);


module.exports = app;
