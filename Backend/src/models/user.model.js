const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-aggregate-paginate-v2");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const newSchema = new mongoose.Schema(
  {
    FirstName: {
      type: String,
      required: true,
    },
    LastName: {
      type: String,
      required: true,
    },
    Password: {
      type: String,
      required: true
    },
    refreshToken: {
      type: String
    },
    MobileNumber: {
      type: Number,
      unique: true,
      required: true,
    },
    MobileNumber2: {
      type: Number,
      unique: true,
    },
    Email: {
      type: String,
      unique: true,
      required: true,
    },
    UserType: {
      type: String,
      default: "CUSTOMER",
      required: true,
    },
    Address1: {
      type: String,
    },
    City: {
      type: String,
    },
    PostCode: {
      type: Number,
    },
    TotalOrders: {
      type: Number,
      default: 0,
    },
  },
  {
    timeseries: true,
    timestamps: true,
  }
);

newSchema.pre("save", async function (next) {
  if (!this.isModified("Password")) {
    next();
  }
  this.Password = await bcrypt.hash(this.Password, 10);
  next();
});

newSchema.methods.isPasswordCorrect = async function (Password) {
  return await bcrypt.compare(Password , this.Password);
}

newSchema.methods.gentateAccessToken = function(){
  return jwt.sign(
    {
      _id: this._id,
      Email: this.Email,
      MobileNumber: this.MobileNumber,
      FirstName: this.FirstName
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY
    }
  )
}
newSchema.methods.gentateRefreshToken = function(){
  return jwt.sign(
    {
      _id: this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY
    }
  )
}

let User = mongoose.model("user", newSchema);
module.exports = User;
