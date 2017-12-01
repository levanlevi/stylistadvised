const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
  id: { type: String },
  channelId: { type: String },
  text: { type: String },
  user: { type: Object },
  time: { type: String },
});

module.exports = mongoose.model('Messages', messageSchema);
