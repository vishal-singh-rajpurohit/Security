const mongoose = require("mongoose");

const newSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User" || "Dealer" || "Installer",
      required: true,
    },
    orderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
      required: true,
    },
    mobileNumber: {
      type: Number,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    status: {
      type: ["CHECKED", "UNCHECKED"],
      default: "UNCHECKED",
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
