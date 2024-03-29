const bcrypt = require("bcryptjs");

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Test User",
    email: "test@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Test User 2",
    email: "test2@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

module.exports = users;
