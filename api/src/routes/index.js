const express = require("express");
const userRoutes = require("./user");
const conversationsRoutes = require("./Conversations");
const messagesRoutes = require("./message");

const router = express.Router();

router.use("/users", userRoutes);
router.use("/conversations", conversationsRoutes);
router.use("/messages", messagesRoutes);

module.exports = router;
