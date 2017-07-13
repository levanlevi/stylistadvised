var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var trackModel = new Schema({
    name: { type: String },
    artists: String
});

module.exports = mongoose.model('Tracks', trackModel);