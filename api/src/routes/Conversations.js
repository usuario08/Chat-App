const express = require("express");
const { get } = require("../controllers/conversations/get");
const { post } = require("../controllers/conversations/post");
// const { login } = require("../controllers/conversations/login");
// const { update } = require("../controllers/conversations/update");
const validateJWT = require("../middlewares/validateJWT");

const conversationsRouter = express.Router();

conversationsRouter.get("/:userId", get);
conversationsRouter.post("/", post);
// userRouter.post("/login", login);
// userRouter.put("/:id", update);

module.exports = conversationsRouter;
