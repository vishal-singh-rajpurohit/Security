const mongoose = require("mongoose");

const { Schema } = mongoose;

const AdminSchema = new Schema(
  {
    id_number: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    hasAccess: {
      type: Boolean,
      default: false,
      required: true,
    },
    refreshToken: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true, 
    timeseries: true,
  }
);

const Admin = mongoose.model("Admin", AdminSchema);

module.exports = Admin;
