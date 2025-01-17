const mongoose = require("mongoose");

const newSchema = new mongoose.Schema(
  {
    ProductName: {
        type: String,
        require: true
    },
    PriceForDealers: {
      type: Number,
      require: true
    },
    PriceForInstallers: {
      type: Number,
      require: true
    },
    PriceForCustomers: {
      type: Number,
      require: true
    },
    AdvancedPaymentAmmount: {
      type: Number,
      require: true
    },
    KeyWords: {
        type: String,
        require: true
    },
    Description: {
        type: String,
        require: true
    },
    FrontImage:{
      type: String,
      require: true
    },
    ShowCaseImages: {
      type: [String],
      valida : [arrayLimit , 'ShowCaseImages exceeds the limit of 6'],
      require: true
    },
    Explaination: {
        type: String,
        require: false
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
