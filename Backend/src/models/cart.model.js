const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    ProdcutId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    },
    UserId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' || 'Dealer' || 'Installer'
    }
},{
    timestamps: true
});


const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;