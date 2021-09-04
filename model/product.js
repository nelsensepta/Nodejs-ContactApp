const mongoose = require("mongoose");

// membuat Schema Model
const Product = mongoose.model("Product2", {
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

module.exports = Product;
