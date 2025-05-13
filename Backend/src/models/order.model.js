const mongoose = require("mongoose");

const newSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    quantity: {
      type: Number,
      default: null,
    },
    status: {
      type: ["VERIFIED", "UNVERIFIED", "CANCELLED", "DELIVERED"],
      default: "UNVERIFIED",
      required: true
    }
  },
  {
    timeseries: true,
    timestamps: true,
  }
);

const Order = mongoose.model("Order", newSchema);

module.exports = Order;
