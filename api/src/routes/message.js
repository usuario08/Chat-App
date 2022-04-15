const express = require("express");
const { get } = require("../controllers/messages/get");
const { post } = require("../controllers/messages/post");
const validateJWT = require("../middlewares/validateJWT");

const messagesRouter = express.Router();

messagesRouter.get("/:idConversation", get);
messagesRouter.post("/", post);

module.exports = messagesRouter