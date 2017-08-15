var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var userModel = new Schema({
    fname: { type: String },
    lname: { type: String },
    picture: { type: String },
    email: { type: String },
    emailConfirmed: { type: Boolean },
    roleType: { type: Number },
    password: { type: String }
});

module.exports = mongoose.model('Users', userModel);