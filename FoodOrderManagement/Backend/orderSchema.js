const mongoose = require('mongoose');

const orderSchema = mongoose.Schema(
    {
        orderId: {
            type: String,
            required: true,
            unique: true
        },
        dateOfOrder: {
            type: Date,
            default: Date.now
        },
        customerName: {
            type: String,
            required: true
        },
        foodName: {
            type: String,
            required: true
        },
        quantity: {
            type: Number,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        totalAmount: {
            type: Number,
            required: true
        },
        paymentMethod: {
            type: String,
            required: true
        }
    }
);

module.exports = mongoose.model('Order', orderSchema);