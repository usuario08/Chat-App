const User = require("../../models/User");
const get = async (req, res) => {
  console.log(req.id)
  try {
    const users = await User.find();
    res.send(users);
  } catch (error) {
    console.error(error);
    res.status(400).send("Error");
  }
};

module.exports = { get };
