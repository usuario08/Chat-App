const express = require("express");
const { get } = require("../controllers/users/get");
const { post } = require("../controllers/users/post");
const { login } = require("../controllers/users/login");
const { update } = require("../controllers/users/update");
const validateJWT = require("../middlewares/validateJWT")


const userRouter = express.Router();

userRouter.get("/",validateJWT, get);
userRouter.post("/", post);
userRouter.post("/login", login);
userRouter.put("/:id", update);

module.exports = userRouter;
