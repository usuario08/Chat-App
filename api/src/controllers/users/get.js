const User = require("../../models/User");
const get = async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (error) {
    console.error(error);
    res.status(400).send("Error");
  }
};

module.exports = { get };
