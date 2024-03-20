const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const connectDB = require("./config/db.js");
const products = require("./data/products");

dotenv.config();
connectDB();
const app = express();

app.get("/", (req, res) => {
  res.send("Api is running");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => (p._id = req.params.id));
  res.json(product);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`listening on port: ${PORT} `));
