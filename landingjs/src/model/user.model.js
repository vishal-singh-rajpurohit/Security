import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "User name is required"],
    trim: true,
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "please use a valid email address"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],  // fixed typo here
  },
  verifyCode: {
    type: String,
    required: [true, "verifyCode is required"], // fixed typo here
    unique: true,
  },
  verifyCodeExpiry: {
    type: Date,
    required: [true, "verifyCode Expiry is required"],  // fixed typo here
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isAccptingMessage: {   // spelling is "isAcceptingMessage"? If yes, fix here and everywhere.
    type: Boolean,
    default: false,
  },
  messages: [messageSchema],
});

// Reuse model if exists, else create new
const User = mongoose.models.User || mongoose.model("User", userSchema);
const Message = mongoose.models.Message || mongoose.model("Message", messageSchema);

export {
  User,
  Message,
};
