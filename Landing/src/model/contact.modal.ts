import mongoose, { Document, Schema } from "mongoose"

export interface contactInterface extends Document {
    name: string;
    email: string;
    number: number;
    businessType: string;
    city: string;
    state: string;
    postCode: number;
    message: string;
}


const contactSchema: Schema<contactInterface> = new Schema({
    name: {
        type: String,
        required: [true, "name must required"]
    },
    email: {
        type: String,
        required: [true, "email must required"],
        match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "please use a valid email address"]
    },
    number: {
        type: Number,
        required: [true, "number must required"]
    },
    businessType: {
        type: String,
        required: [true, "business type must required"]
    },
    city: {
        type: String,
        required: [true, "city must required"]
    },
    state: {
        type: String,
        required: [true, "state must required"]
    },
    postCode: {
        type: Number,
        required: [true, "post code must required"]
    },
    message: {
        type: String,
        required: [true, "message must required"]
    },
});


export const Contact = (mongoose.models.contacts as mongoose.Model<contactInterface>) || mongoose.model<contactInterface>("Contacts", contactSchema);