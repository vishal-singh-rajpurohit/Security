const mongoose = require("mongoose");

const newSchema = new mongoose.Schema(
  {
    ProductName: {
      type: String,
      required: true,
    },
    DealPrice: {
      type: Number,
      required: true,
    },
    OriginalPrice: {
      type: Number,
    },
    FrontImage: {
      type: String,
      required: true,
    },
    ShowImages: {
      type: [String],
      validate: {
        validator: function (val) {
          return val.length <= 5;
        },
        message: "{PATH} exceeds the limit of 5!",
      },
    },
    ProductDescription: {
      type: String,
      required: true,
    },
    ProductFeatures: {
      type: [String],
      validate: {
        validator: function (val) {
          return val.length <= 10;
        },
        message: "{PATH} exceeds the limit of 10!",
      },
    },
    ProductCategory: {
      type: String,
      required: true,
    },
    ProductSubCategory: {
      type: String,
      required: true,
    },
    ProductBrand: {
      type: String,
      default: "Not manfioned",
    },
    ProductRating: {
      type: Number,
      default: 0,
    },
    ProductReviews: {
      type: Number,
      default: 0,
    },
    SpecialFeature: {
      type: String,
      default: "No Special Feature",
    },
    cameraMegaPixel: {
      type: String,
      default: "No Camera",
    },
    batteryCapacity: {
      type: String,
      default: "No Battery",
    },
    cameraType: {
      type: String,
      default: "No Camera",
    },
    cameraQuality: {
      type: String,
      default: "No Camera",
    },
    channel: {
      type: String,
      default: "No Channel",
    },
    hdd: {
      type: String,
      default: "No HDD",
    },
    offer: {
      type: Boolean,
      default: false,
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
