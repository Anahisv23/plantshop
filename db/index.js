// here I will make my associations
const { User } = require("./models/User");
const { db } = require("./db");

module.exports = {
  User,
  db,
};
