const mongoose = require("mongoose");
const { bcrypt } = require("bcryptjs");
const validator = require("validator");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please tell us your name"],
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: [validator.isEmail, "Please enter a valid email"],
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true }
);

// userSchema.methods.comparePassword = function (password, callback) {
//   bcrypt.compare(password, this.password, function (error, isMatch) {
//     if (error) {
//       return callback(error);
//     } else {
//       callback(null, isMatch);
//     }
//   });
// };

// userSchema.methods.comparePassword = async function (enteredPassword) {
//   const isMatch = await bcrypt.compare(enteredPassword, this.password);
//   if (!isMatch) {
//     return false;
//   } else {
//     return true;
//   }
// };

const User = mongoose.model("User", userSchema);

module.exports = User;
