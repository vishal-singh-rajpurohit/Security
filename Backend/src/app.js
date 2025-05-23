const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser")


const app = express();
app.use(express.json({ limit: "16kb" }));

// const allowedOrigins = [
//   'https://www.wingslens.shop',
//   'https://www.shop.wingslens.shop',
//   'https://www.admin.wingslens.shop',
//   'http://www.shop.wingslens.shop',
//   'http://www.admin.wingslens.shop',
//   'http://wingslens.shop',
//   'https://shop.wingslens.shop',
//   'https://admin.wingslens.shop',
//   'http://shop.wingslens.shop',
//   'http://admin.wingslens.shop',
//   'http://localhost:3000' // for Local testing
// ];

// app.use(cors({
//   origin: function (origin, callback) {
//     if (origin && allowedOrigins.includes(origin)) { // <--- Pay attention here
//       callback(null, true); // Allow
//     } else {
//       callback(new Error("Not allowed by CORS")); // X Block
//     }
//   },
//   credentials: true
// }));

app.use(cors({ origin: true, credentials: true }));


// for get data encoded from urls
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public")); //configure static files on server
app.use(cookieParser());


// importing routes
const adminRouter = require("./routes/admin.routes");
const userRoute = require("./routes/user.routes");
const orderRoutes = require("./routes/order.routes");
const mainRoutes = require("./routes/main.routes");
const cartRoutes = require("./routes/cart.routes");

app.use("/api/v2/main", mainRoutes);

app.use("/api/v2/user", userRoute);


app.use("/api/v2/admin", adminRouter);

app.use("/api/v2/auth/orders", orderRoutes);

app.use("/api/v2/auth/cart", cartRoutes);

module.exports = app;
