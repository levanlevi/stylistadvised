const mongoose = require('mongoose');

const channelSchema = mongoose.Schema({
  id: { type: String, unique: true },
  name: { type: String },
  between: { type: Array },
  lastMessage: { type: Object },
});

module.exports = mongoose.model('Channels', channelSchema);
