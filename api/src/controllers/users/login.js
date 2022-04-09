const User = require("../../models/User");
const bcrypt = require("bcrypt");
const {genJWT} = require("../../helpers/genJWT");

const login = async ({ body: { email, password } }, res) => {
  try {
    const user = await User.findOne({ email });
    if (!user) {
      res.status(404).send("USER NOT FOUND");
      return;
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      res.status(400).send({ message: "INCORRECT PASSWORD" });
      return;
    }
    const token = await genJWT(user.id);
    res.send({ message: "LOGIN SUCCESSFUL", token });
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

module.exports = { login };
