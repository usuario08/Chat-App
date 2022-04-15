const jwt = require("jsonwebtoken");

const validateJWT = async (req, res, next) => {
  const token = req.header("x-auth-token");
  if (!token) {
    return res.status(401).json({ errors: "NO TOKEN IN REQUEST" });
  }
  // if (token.startsWith("Bearer ")) {
  //   token = token.slice(7, token.length);
  // }
  try {
    const { id } = jwt.verify(token, "palabrasecreta");
    // console.log(id);
    req.id = id;
    next();
  } catch (error) {
    res.status(403).json({ errors: "INVALID TOKEN" });
  }
};
module.exports = validateJWT;
