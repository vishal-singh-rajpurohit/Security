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
      require: true
    },
    CustomerType: {
      type: String,
      enum: ["CUSTOMER", "DEALER", "INSTALLER"],
      require: true,
    },
    TotalAmmount: {
      type: Number,
      require: true,
    },
    AdvancedPaymentAmmout: {
      type: Number,
      // require: true
    },
    AdvancedPaymentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Payment"
      // require: true,
    },
    FinalPaymentId: {
      type: String,
      default: "PENDING",
      // require: true,
    },
    PendingAmmount: {
      type: Number,
      // require: true,
    },
    NextPaymentDate: {
      type: Date,
      // require: true,
    },
    DelivaryDate: {
      type: Date,
      // require: true,
    },
    Status: {
      type: String,
      enum: ["PENDING", "CONFORMED", "SHIPPING", "DELIVERED", "COMPLETED", "CANCELLED"],
      // require: true,
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
