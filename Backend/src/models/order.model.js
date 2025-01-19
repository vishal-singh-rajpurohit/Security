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
    UserType: {
      type: String,
      enum: ["CUSTOMER", "INSTALLER", "DEALER"],
      required: true
    },
    CustomerType: {
      type: String,
      enum: ["CUSTOMER", "DEALER", "INSTALLER"],
      required: true,
    },
    TotalAmmount: {
      type: Number,
      required: true,
    },
    AdvancedPaymentAmmout: {
      type: Number,
      // required: true
    },
    AdvancedPaymentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Payment"
      // required: true,
    },
    FinalPaymentId: {
      type: String,
      default: "PENDING",
      // required: true,
    },
    PendingAmmount: {
      type: Number,
      // required: true,
    },
    NextPaymentDate: {
      type: Date,
      // required: true,
    },
    DelivaryDate: {
      type: Date,
      // required: true,
    },
    Status: {
      type: String,
      enum: ["PENDING", "CONFORMED", "SHIPPING", "DELIVERED", "COMPLETED", "CANCELLED"],
      // required: true,
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
