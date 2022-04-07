const User = require("../../models/User");
const bcrypt = require("bcrypt");

const login = async ({ body: { email, password } }, res) => {
  try {
    const user = await User.findOne({ email });
    if (!user) {
      res.status(404).send("Usuario no encontrado");
      return;
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      res.status(400).send("Contraseña incorrecta");
      return;
    }

    res.send(user)
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

module.exports = { login };
