"use strict";
const mongoose1 = require('mongoose');
const orderSchema = mongoose1.Schema({
    _id: mongoose1.Schema.Types.ObjectId,
    product: { type: mongoose1.Schema.Types.ObjectId, ref: 'Product', required: true },
    quantity: { type: Number, default: 1 }
});
module.exports = mongoose1.model('Order', orderSchema);
