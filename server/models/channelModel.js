const mongoose = require('mongoose');

const channelSchema = mongoose.Schema({
  name: { type: String, unique: true },
  id: { type: String },
  private: { type: Boolean },
  between: { type: Array },
});

module.exports = mongoose.model('Channels', channelSchema);
