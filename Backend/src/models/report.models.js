const mongoose = require("mongoose");

const newSchema = new mongoose.Schema(
  {
    UserId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User" || "Dealer" || "Installer",
      required: true
    },
    OrderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
      required: true
    },
    TroubleType: {
      type: String,
      enum: ["PAYMENTS", "DELIVARY", "BUG", "OTHER"],
      required: true,
    },
    Message: {
      type: String,
      required: true,
    },
    Status: {
      type: String,
      enum: ["UNREAD", "READ", "READ AND REJECTED", "READ AND APPROVED"],
      default: "UNREAD",  
      required: true
    }
  },
  {
    timeseries: true,
    timestamps: true,
  }
);


const Report = mongoose.model("Report", newSchema);
module.exports = Report;