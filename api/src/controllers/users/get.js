const User = require("../../models/User");
const get = async (req, res) => {
  console.log(req.id);
  try {
    // const users = await User.find();
    const user = await User.aggregate([{ $match: { username: 'usuario' } }]);
    res.send(user);
  } catch (error) {
    console.error(error);
    res.status(400).send("Error");
  }
};

module.exports = { get };
