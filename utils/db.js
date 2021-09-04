const mongoose = require("mongoose");
mongoose.connect("you Db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// // membuat Schema Model sudah dipindahkan ke Folder model/product.js
// const Product = mongoose.model("Product2", {
//   name: {
//     type: String,
//     required: true,
//   },
//   price: {
//     type: Number,
//     required: true,
//   },
//   description: {
//     type: String,
//     required: true,
//   },
// });

// Manambahkan 1 data
// const product1 = new Product({
//   name: "Gorengan",
//   price: 1000,
//   description: "Ini Gorengan Oke",
// });

// // simpan ke collection
// product1.save().then((result) => console.log(result));
