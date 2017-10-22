const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

// define the User model schema
const userModel = new mongoose.Schema({
  fname: { type: String },
  lname: { type: String },
  name: { type: String },
  picture: { type: String },
  email: { type: String, unique: true, required: true },
  emailConfirmed: { type: Boolean, default: false },
  userType: { type: String, required: true },
  password: { type: String, required: true },
});

/**
 * Compare the passed password with the value in the database. A model method.
 *
 * @param {string} password
 * @returns {object} callback
 */
userModel.methods.comparePassword = function comparePassword(password, callback) {
  bcrypt.compare(password, this.password, callback);
};

/**
 * The pre-save hook method.
 */
userModel.pre('save', function saveHook(next) {
  const user = this;

  // proceed further only if the password is modified or the user is new
  if (!user.isModified('password')) {
    return next();
  }

  return bcrypt.genSalt((saltError, salt) => {
    if (saltError) { 
      return next(saltError); 
    }

    return bcrypt.hash(user.password, salt, (hashError, hash) => {
      if (hashError) { 
        return next(hashError); 
      }

      // replace a password string with hash value
      user.password = hash;

      return next();
    });
  });
});

module.exports = mongoose.model('Users', userModel);
