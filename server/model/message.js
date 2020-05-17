const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  channelId: { type: mongoose.Types.ObjectId, ref: "channel", required: true },
  message: { type: String },
  senderId: { type: mongoose.Types.ObjectId, ref: "users", required: true },
  created_at: { type: Date, default: Date.now() },
  updated_at: { type: Date, default: Date.now() }
});

module.exports = mongoose.model("messages", messageSchema);
