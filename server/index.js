const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const connectDB = require("./config/db.js");

const productRoutes = require("./routes/productRoutes.js");
dotenv.config();
connectDB();
const app = express();

app.get("/", (req, res) => {
  res.send("Api is running");
});
app.use("/api/products", productRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`listening on port: ${PORT} `));
