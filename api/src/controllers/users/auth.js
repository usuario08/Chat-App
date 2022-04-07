const User = require("../../models/User");
const auth = async (req, res) => {
  try {
    const user = await new User({
      username: "usuario9",
      email: "aamc5991@gmail.com",
      password: "1234",
    });
    await user.save();
    res.send("Registro exitoso");
  } catch (error) {
    console.error(error);
    res.status(404).send("Error");
  }
};

module.exports = { auth };
