const mongoose = require("mongoose");

const newSchema = new mongoose.Schema(
  {
    UserId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User" || "Dealer" || "Installer",
      require: true,
    },
    FirstName: {
      type: String,
      require: true,
    },
    LastName: {
      type: String,
      require: true,
    },
    MobileNumber: {
      type: Number,
      index: true,
      require: true,
      unique: true,
    },
    Email: {
      type: String,
      unique: true,
      index: true,
      require: true,
    },
    AadharNumber: {
      type: Number,
      unique: true,
    },
    PanNumber: {
      type: String,
      unique: true,
      uppercase: true,
    },
    UserType: {
      type: String,
      default: "DEALER",
      require: true,
    },
    Address1: {
      type: String,
    },
    IdPhoto: {
      type: String,
      defult: "NOT SET",
    },
    City: {
      type: String,
      index: true,
    },
    PostCode: {
      type: Number,
    },
    TotalOrders: {
      type: Number,
      default: 0,
    },
    TotalEarnings: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
    timeseries: true,
  }
);

const DeletedUser = mongoose.model("DeletedUser", newSchema);

module.exports = DeletedUser;
