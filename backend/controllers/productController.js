const Product = require("../models/ProductModel");

const getProducts = (req, res) => {
  Product.create({ name: "Panasonic" });
  res.send("Handling product api");
};
module.exports = getProducts;
