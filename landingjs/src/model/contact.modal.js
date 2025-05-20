import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name must required"],
  },
  email: {
    type: String,
    required: [true, "email must required"],
    match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "please use a valid email address"],
  },
  number: {
    type: Number,
    required: [true, "number must required"],
  },
  businessType: {
    type: String,
    required: [true, "business type must required"],
  },
  city: {
    type: String,
    required: [true, "city must required"],
  },
  state: {
    type: String,
    required: [true, "state must required"],
  },
  postCode: {
    type: Number,
    required: [true, "post code must required"],
  },
  message: {
    type: String,
    required: [true, "message must required"],
  },
});

// Reuse model if it exists, else create new
export const Contact = mongoose.models.Contacts || mongoose.model("Contacts", contactSchema);
