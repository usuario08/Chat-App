const Message = require("../../models/Message");

const get = async ({ params: { idConversation } }, res) => {
  try {
    const message = await Message.find({ idConversation });
    res.status(200).json(message);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

module.exports = { get };
