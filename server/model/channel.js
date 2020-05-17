const mongoose = require("mongoose");

const channelSchema = new mongoose.Schema({
  channelId: { type: String, required: true },
  created_at: { type: Date, default: Date.now() },
  updated_at: { type: Date, default: Date.now() }
});

module.exports = mongoose.model("channel", channelSchema);
