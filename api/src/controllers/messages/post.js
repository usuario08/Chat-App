const Message = require("../../models/Message");

const post = async ({ body }, res) => {
  try {
    const newMessage = new Message(body);
    const savedMessage = await newMessage.save();
    res.status(200).json(savedMessage);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

module.exports = { post };
