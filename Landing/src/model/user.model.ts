import mongoose, { Document, Schema } from 'mongoose';


export interface messsageInterface extends Document{
    content: string;
    createdAt: Date;
}

const messageSchema: Schema<messsageInterface> = new Schema({
    content: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    }
}) 


export interface userInterface extends Document{
    username: string;
    email: string;
    password: string;
    verifyCode: string;
    verifyCodeExpiry: Date;
    isAccptingMessage: boolean;
    isVerified: boolean;
    messages: messsageInterface[];
    createdAt: Date;
}


const userSchema: Schema<userInterface> = new Schema({
    username: {
        type: String,
        required: [true, "User name is required"],
        trim: true,
        unique:  true
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "please use a valid email address"]
    },
    password: {
        type: String,
        equired: [true, "Password is required"],
    },
    verifyCode: {
        type: String,
        equired: [true, "verifyCode is required"],
        unique: true,
    },
    verifyCodeExpiry: {
        type: Date,
        equired: [true, "verifyCode Expiry is required"],
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    isAccptingMessage: {
            type: Boolean,
            default: false
    },
    messages: [messageSchema]

}) 


const User = (mongoose.models.User as mongoose.Model<userInterface>) || mongoose.model<userInterface>("User", userSchema);
const Message = (mongoose.models.Message as mongoose.Model<messsageInterface>) || mongoose.model<messsageInterface>("Messase", messageSchema);


export {
     User,
     Message
    }