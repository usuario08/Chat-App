const User = require("../models/User");
const jwt = require("jsonwebtoken");

const validateJWT = async (req, res, next) => {
  let token = req.headers["x-access-token"] || req.headers["authorization"];
  if (!token) {
    return res.status(401).json({ message: "NO TOKEN IN REQUEST" });
  }
  if (token.startsWith("Bearer ")) {
    token = token.slice(7, token.length);
  }
  try {
    const { id } = jwt.verify(token, "palabrasecreta");
    console.log(id);
    req.id = id;
    next();
  } catch (error) {
    res.status(403).json(error);
  }
};
module.exports = validateJWT;
