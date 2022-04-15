const Conversation = require("../../models/Conversation");

const get = async ({ params: { userId } }, res) => {
  try {
    const conversations = await Conversation.find({
      members: { $in: [userId] },
    });
    res.status(200).json(conversations);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

module.exports = { get };
