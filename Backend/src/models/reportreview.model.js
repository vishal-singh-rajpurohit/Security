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
      require: true,
    },
    Message: {
      type: String,
      require: true,
    },
    Status: {
      type: String,
      enum: ["UNSATISFIED", "SATISFIED", "UNREAD"],
      default: "UNREAD",
      require: true
    }
  },
  {
    timeseries: true,
    timestamps: true,
  }
);

const Reportreview = mongoose.model("Reportreview", newSchema);
module.exports = Reportreview;
