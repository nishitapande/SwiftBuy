const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const connectDB = require("./config/db.js");
const { notFound, errorHandler } = require("./middleware/errorMiddleware.js");

const productRoutes = require("./routes/productRoutes.js");
dotenv.config();
connectDB();
const app = express();

app.get("/", (req, res) => {
  res.send("Api is running");
});

app.use("/api/products", productRoutes);

app.use(notFound);

app.use(errorHandler);
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`listening on port: ${PORT} `));
