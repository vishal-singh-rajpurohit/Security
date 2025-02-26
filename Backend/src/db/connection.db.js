require("dotenv").config();
const mongoose = require("mongoose");

const connection = async () => {
  try {
    await mongoose.connect(process.env.ATLAS_LINK_);
    console.log("connecte to DB");
  } catch (error) {
    console.log("error in connection.db.js: ", error);
  }
};

module.exports = connection;
