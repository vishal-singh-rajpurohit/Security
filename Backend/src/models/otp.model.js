const mongoose = require('mongoose');

const otpSchema = new mongoose.Schema({
    Otp: {
        type: Number,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }
});

const Otp = mongoose.model('Otp', otpSchema);
module.exports = Otp;