// Schema or brain of the application.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        default: 0
    },
    price: { 
        type: Number,
        required: true
    },
    description: {
        type: String,
        default: ""
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});
                              // Item = will be pluralized when used as a name later
module.exports = mongoose.model('Item', itemSchema);