const mongoose = require("mongoose");
require("dotenv").config();
const { MONGO_URL } = process.env;

const conn = mongoose.connect(MONGO_URL);

module.exports = { conn };
