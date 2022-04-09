const jwt = require("jsonwebtoken");

const genJWT = (id = "") => {
  return new Promise((resolve, reject) => {
    const payload = { id };
    jwt.sign(payload, "palabrasecreta", (err, token) => {
      if (err) {
        console.log(err);
        reject("COULD NOT GENERATE TOKEN");
      } else {
        resolve(token);
      }
    });
  });
};
module.exports = { genJWT };
