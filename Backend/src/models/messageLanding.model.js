const mongoose = require("mongoose");


const newSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    contacts: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
},{
    timestamps: true
});

const MessageLanding = mongoose.Model("MessageLanding", newSchema);
module.exports = MessageLanding;