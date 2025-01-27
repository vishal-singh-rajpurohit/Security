const mongoose = require("mongoose");

const newSchema = new mongoose.Schema(
  {
    ProductId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
    UserId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User" || "Dealer" || "Installer",
    },
    AdvancedPaymentAmmout: {
      type: Number,
    },
    AdvancedPaymentId: {
      type: String,
    },
    FinalPaymentId: {
      type: String,
      default: "PENDING",
    },
    PendingAmmount: {
      type: Number,
      // required: true,
    },
    DelivaryDate: {
      type: Date,
      // required: true,
    },
    Status: {
      type: String,
      enum: ["PENDING", "CONFORMED", "SHIPPING", "DELIVERED", "COMPLETED", "CANCELLED"],
      default: "PENDING",
    },
  },
  {
    timeseries: true,
    timestamps: true,
  }
);

const Order = mongoose.model("Order", newSchema);

module.exports = Order;
