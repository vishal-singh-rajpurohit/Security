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
    CameraQuality: {
      type: String,
      required: true,
      enum: ["HD", "IP", "BOTH"]
    },
    CameraType: {
      type: String,
      required: true
    },
    NumberOfCameras: {
      type: Number,
      required: true
    },
    Channel:{
      type: Number,
      required: true
    },
    Hdd: {
      type: Number,
      required: true
    },
    MegaPixels:{
      type: Number,
      required: true
    },
    IndoorOutdoor: {
      type: String,
      required: true,
      enum: ["INDOOR", "OUTDOOR", "COMPLETE"]
    },
    KeyWords: {
        type: String,
        required: true
    },
    Tag: {
      type: String,
      required: true,
      enum : ["BUDGET", "BASIC"]
    },
    AboutItem: {
      type: [String],
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
