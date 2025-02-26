const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser")


const app = express();
app.use(express.json({ limit: "16kb" }));

const allowedOrigins = ['https://www.sewadinfotech.shop', 'https://data-edit.onrender.com'];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
// app.use(cors());
// for get data encoded from urls
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public")); //configure static files on server
app.use(cookieParser());


// importing routes
const adminRouter = require("./routes/admin.routes");
const userRoute = require("./routes/user.routes");
const orderRoutes = require("./routes/order.routes");
const mainRoutes = require("./routes/main.routes")

app.use("/api/v1/main", mainRoutes);

app.use("/api/v1/user", userRoute);
app.use("/api/v1/admin", adminRouter);

app.use("/api/v1/orders", orderRoutes);


module.exports = app;
