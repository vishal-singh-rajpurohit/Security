const mongoose = require("mongoose");

const newSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
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
      type: ["UNWATCHED", "VERIFIED", "REJECTED"],
      default: "UNWATCHED",
      required: true
    },
    returnMessage: {
      type: String,
      required: true,
      default: "Will be checked"
    }
  },
  {
    timeseries: true,
    timestamps: true,
  }
);

const Report = mongoose.model("Report", newSchema);
module.exports = Report;
