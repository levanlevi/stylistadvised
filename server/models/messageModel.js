const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
  id: { type: String },
  channelId: { type: String },
  text: { type: String },
  time: { type: String },
  user: { type: Object },  
});

module.exports = mongoose.model('Messages', messageSchema);
