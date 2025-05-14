const mongoose = require("mongoose");

const offerSchema = new mongoose.Schema(
  {
    banner1: {
      type: String,
      required: true,
      trim: true,
    },
    banner2: {
      type: String,
      required: true,
      trim: true,
    },
    offerText: {
      type: String,
      required: true,
      trim: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timeseries: true,
    timestamps: true,
  }
);

const Offer = mongoose.model("Offer", offerSchema);
module.exports = Offer;
