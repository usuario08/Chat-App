const Conversation = require("../../models/Conversation");

const post = async ({ body: { senderId, receiverId } }, res) => {
  try {
    const newConversation = new Conversation({
      members: [senderId, receiverId],
    });
    const {id} = await newConversation.save();
    if (id) res.send({ message: true });
    else res.send({ message: false });
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

module.exports = { post };
