const express = require("express");
const router = express.Router();

const ChatbotController = require("../controllers/chatbot.controller");

router
  .route("/webhook")
  .get(ChatbotController.getWebhook)
  .post(ChatbotController.postWebhook);

module.exports = router;
