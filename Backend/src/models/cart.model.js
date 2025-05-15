const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    prodcutId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    qunatity: {
        type: Number,
        default: 1,
        required: true
    }
},{
    timestamps: true
});


const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;