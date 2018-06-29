// Require our DATABASE
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectsId = Schema.Types.ObjectsId;

// define our MODEL (Blueprint)
const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Product Name is requred"],
    minlength: [3, "Product name must be longer than 2 characters"]
  },

  quantity: {
    type: Number,
    required: [true, "Qty of product is requred"],
    min: [0, "Product qty cannot be less than zero, .... duh"]
  },

  price: {
    type: Number,
    required: [true, "Qty of product is requred"],
    min: [0, "Product price cannot be less than zero, .... unless its free, is it FREE?"]
  },

}, { timestamps: true });

// export our MODEL
mongoose.model('Product',ProductSchema);
