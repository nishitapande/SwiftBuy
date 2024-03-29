const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");
const asyncCatch = require("../utils/asyncCatch");
const AppError = require("../utils/appError");

// @ desc  Fectch all products
//@route  GET /api/products
//@access Public
const getProducts = asyncCatch(async (req, res, next) => {
  const products = await Product.find({});
  res.json(products);
});

// Fectch product by id
//@route  GET /api/products/:id
//@access Public

const getProductById = asyncCatch(
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return next(new AppError("Product not found", 404));
    }
    res.json(product);
  })
);

module.exports = {
  getProducts: getProducts,
  getProductById: getProductById,
};
