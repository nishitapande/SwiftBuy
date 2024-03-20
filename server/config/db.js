const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDb Connected : ${conn.connection.host}`.cyan.underline);
  } catch (err) {
    console.log(`MongoDB connection error: ${err.message}`.red.bold);
    process.exit(1);
  }
};

module.exports = connectDB;
