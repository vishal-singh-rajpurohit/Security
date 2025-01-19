const mongoose = require("mongoose");

const newSchema = new mongoose.Schema(
  {
    OrderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
      required: true,
    },
    PayType: {
      type: String,
      enum: ["ADVANCED" , "PENDING"],
      required: true
    },
    Amount: {
      type: Number,
      required: true,
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
      required: true,
    }
  },

  {
    timeseries: true,
    timestamps: true,
  }
);

const Payment = mongoose.model("Payment", newSchema);
module.exports = Payment;
