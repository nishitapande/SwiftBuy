const bcrypt = require("bcryptjs");

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: "123456",
    isAdmin: true,
  },
  {
    name: "Test User",
    email: "test@example.com",
    password: "123456",
  },
  {
    name: "Test User 2",
    email: "test2@example.com",
    password: "123456",
  },
];

module.exports = users;
