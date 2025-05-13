const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    prodcutId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
},{
    timestamps: true
});


const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;