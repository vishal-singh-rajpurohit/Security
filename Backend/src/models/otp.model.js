const mongoose = require('mongoose');

const otpSchema = new mongoose.Schema({
    Otp: {
        type: Number,
        required: true
    }
});

const Otp = mongoose.model('Otp', otpSchema);
module.exports = Otp;