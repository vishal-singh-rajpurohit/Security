import mongoose from "mongoose";

const connection = {};

export default async function dbConnect() {
  if (connection.isConnected) {
    console.log("already connected to db");
    return;
  }
  try {
    const db = await mongoose.connect(process.env.MONGODB_URI);
    connection.isConnected = db.connection.readyState;

    console.log("DB connected Successfully");
  } catch (error) {
    console.log("Error in connect db: ", error);
    process.exit(1);
  }
}
