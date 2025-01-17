const mongoose = require("mongoose");

const newSchema = new mongoose.Schema(
  {
    UserId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User" || "Dealer" || "Installer",
      require: true
    },
    OrderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
      require: true
    },
    TroubleType: {
      type: String,
      enum: ["PAYMENTS", "DELIVARY", "BUG", "OTHER"],
      require: true,
    },
    Message: {
      type: String,
      require: true,
    },
    Status: {
      type: String,
      enum: ["UNREAD", "READ", "READ AND REJECTED", "READ AND APPROVED"],
      default: "UNREAD",  
      require: true
    }
  },
  {
    timeseries: true,
    timestamps: true,
  }
);


const Report = mongoose.model("Report", newSchema);
module.exports = Report;