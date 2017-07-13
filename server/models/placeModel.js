var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Track = require('./trackModel');
/**
 * A model for a restaurant (we call it place as it can be cafe or gym, etc...)
 */
var placeModel = new Schema({
    name: { type: String },
    address: { type: String },
    phones: { type: String },
    emails: { type: String },
    tracks: [{ type: Schema.Types.ObjectId, ref: 'Tracks' }],
    playlist: [{ type: Schema.Types.ObjectId, ref: 'Tracks' }]
});

module.exports = mongoose.model('Places', placeModel);