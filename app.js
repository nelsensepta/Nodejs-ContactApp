const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const flash = require("connect-flash");

require("./utils/db");
const Product = require("./model/product");

const app = express();
const port = 3000;

// Set Up EJS
app.set("view engine", "ejs");
app.use(expressLayouts);
app.use(express.static("public")); // akses public folder realtive path dan juga name
app.use(express.urlencoded({ extended: true }));

// Konfigurasi Flash Message Basis Session
app.use(cookieParser("secret"));
app.use(
  session({
    cookie: { maxAge: 6000 },
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(flash());

// Halaman Home
app.get("/", (req, res) => {
  const product = [
    {
      name: "Ayam Bakar",
      price: 6000,
    },
    {
      name: "Nasi Goreng",
      price: 10000,
    },
    {
      name: "Soto",
      price: 10000,
    },
  ];
  res.render("index", {
    layout: "layouts/main-layout",
    name: "Kucir",
    product,
    title: "Halaman Home",
  });
});

// Halaman About
app.get("/about", (req, res) => {
  res.render("about", {
    title: "Halaman About",
    layout: "layouts/main-layout",
  });
});

// Halaman Product
app.get("/product", async (req, res) => {
  // pakai promise
  // Product.find().then((result) => {
  //   res.send(result);
  // });
  const products = await Product.find();
  res.render("product", {
    title: "Halaman Product",
    layout: "layouts/main-layout",
    products,
    msg: req.flash("msg"),
  });
});

// Halaman Detail Product
app.get("/product/:name", async (req, res) => {
  const product = await Product.findOne({ name: req.params.name });
  res.render("detail", {
    title: req.params.name,
    layout: "layouts/main-layout",
    product,
  });
});

app.listen(port, () => {
  console.log(`Mongo Contact App | Listening at http://localhost:${port}`);
});
