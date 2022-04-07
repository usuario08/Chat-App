const User = require("../../models/User");
const bcrypt = require("bcrypt");

const post = async ({ body: { username, email, password } }, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser =  new User({
      username,
      email,
      password: hashedPassword,
    });

    const user = await newUser.save();
    res.send(user);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

module.exports = { post };
