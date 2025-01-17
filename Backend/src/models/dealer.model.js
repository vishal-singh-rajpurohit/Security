const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-aggregate-paginate-v2");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const newSchema = new mongoose.Schema(
  {
    FirstName: {
      type: String,
      require: true,
    },
    LastName: {
      type: String,
      require: true,
    },
    Password: {
      type: String,
      require: true
    },
    refreshToken: {
      type: String
    },
    MobileNumber: {
      type: Number,
      index: true,
      require: true,
      unique: true
    },
    MobilerNumber2: {
      type: Number,
      unique: true,
      index: true
    },
    Email: {
      type: String,
      unique: true,
      index: true,
      require: true,
    },
    Avatar: {
      type: String,
      require: true,
    },
    AadharNumber: {
      type: Number,
      unique: true
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
    IdPhoto: {
      type: String,
      defult: "NOT SET"
    },
    Address1: {
      type: String
    },
    City: {
      type: String,
      index: true,
    },
    PostCode: {
      type: Number,
    },
    Verified: {
      type: String,
      enum: ["PENDING", "APPROVED", "REJECTED"],
      default: "PENDING",
    },
    UpiMobileNumber: {
      type: Number,
      unique: true,
    },
    TotalOrders: {
      type: Number,
      default: 0,
    },
    TotalEarnings: {
      type: Number,
      default: 0,
    },
    PendingPayment: {
      type: Number,
      default: 0,
    },
    CraditPayment: {
      type: Number,
      defult: 0,
    },
  },
  {
    timeseries: true,
    timestamps: true,
  }
);

newSchema.pre("save", async function (next) {
  if (!this.isModified("Password")) {
    console.log("password is not modified");
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
      Email: this.Email
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
      UserType: this.UserType
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY
    }
  )
}

let Dealer = mongoose.model("dealer", newSchema);
module.exports = Dealer;
