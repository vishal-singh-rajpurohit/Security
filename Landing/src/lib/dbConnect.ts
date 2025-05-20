import mongoose from "mongoose";

type ConnectionObject = {
    isConnected?: number
}

const connection: ConnectionObject = {}

export default async function dbConnect(): Promise<void> {

    if (connection.isConnected) {
        console.log("already connected to db")
        return
    }
    try {
        const db: typeof mongoose = await mongoose.connect(process.env.MONGODB_URI!);
        connection.isConnected = db.connection.readyState;
        
        console.log("DB connnected Successfully");

    } catch (error) {
        console.log("Error in connect db: ", error);
        process.exit(1);
    }
}