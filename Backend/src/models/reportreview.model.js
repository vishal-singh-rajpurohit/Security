const mongoose = require("mongoose");

const newSchema = new mongoose.Schema(
  {
    ReportId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Report",
    },
    UserId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User" || "Dealer" || "Installer",
      required: true,
    },
    Message: {
      type: String,
      required: true,
    },
    Status: {
      type: String,
      enum: ["UNSATISFIED", "SATISFIED", "UNREAD"],
      default: "UNREAD",
      required: true
    }
  },
  {
    timeseries: true,
    timestamps: true,
  }
);

const Reportreview = mongoose.model("Reportreview", newSchema);
module.exports = Reportreview;
