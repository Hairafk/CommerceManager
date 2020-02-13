const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Should have products name"], minlength: [3, "Should be at least 3 characters"]},
    quantity: {type: Number, required: [true, "Should have quantity."], min: [0, "Must be more than zero"]},
    price: {type: Number, required: [true, "Should include product's price"], min: [.01, "NOT FREE"]}
}, {timestamps: true})

mongoose.model('Product', ProductSchema);
const Product = mongoose.model('Product');