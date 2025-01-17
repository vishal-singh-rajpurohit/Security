const mongoose = require("mongoose");

const newSchema = new mongoose.Schema(
  {
    OrderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
      require: true,
    },
    PayType: {
      type: String,
      enum: ["ADVANCED" , "PENDING"],
      require: true
    },
    Amount: {
      type: Number,
      require: true,
    },
    PaymentDate: {
      type: Date,
      default: Date.now,
    },
    Conformation: {
      type: String,
      enum:  ["PENDING", "CONFORMED", "REFOUNDED"],
      default: "PENDING",
    },
    PendingAmmountForOrder: {
      type: Number,
      require: true,
    }
  },

  {
    timeseries: true,
    timestamps: true,
  }
);

const Payment = mongoose.model("Payment", newSchema);
module.exports = Payment;
