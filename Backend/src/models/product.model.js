const mongoose = require("mongoose");

const newSchema = new mongoose.Schema(
  {
    ProductName: {
        type: String,
        required: true
    },
    PriceForDealers: {
      type: Number,
      required: true
    },
    PriceForInstallers: {
      type: Number,
      required: true
    },
    PriceForCustomers: {
      type: Number,
      required: true
    },
    AdvancedPaymentAmmount: {
      type: Number,
      required: true
    },
    Premium: {
      type: Boolean,
      default: false,
      required: true
    },
    Branded: {
      type: Boolean,
      default: false,
      required: true
    },
    Brand: {
      type: String,
      enum: [],
      required: true
    },
    CameraType: {
      type: String,
      required: true,
      enum: ["HD", "IP", "BOTH"]
    },
    PlaceOfInstallation: {
      type: String,
      required: true,
      enum: ["INDOOR", "OUTDOOR", "COMBINED"]
    },
    InstallationAreaSize: {
      type: String,
      required: true,
      enum: ["INDOOR", "OUTDOOR", "COMBINED"]
    },
    KeyWords: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    FrontImage:{
      type: String,
      required: true
    },
    ShowCaseImages: {
      type: [String],
      valida : [arrayLimit , 'ShowCaseImages exceeds the limit of 6'],
      required: true
    },
    Explaination: {
        type: String,
        required: false
    }
  },
  {
    timeseries: true,
    timestamps: true,
  }
);

function arrayLimit(val) {
  return val.length <= 5;
}


const Product = mongoose.model("Product", newSchema);

module.exports = Product;
