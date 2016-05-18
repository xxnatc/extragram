const mongoose = require('mongoose');

var profileSchema = new mongoose.Schema({
  username: { type: String, require: true },
  name: { type: String, require: true },
  bio: { type: String, require: true },
  avatar: String
});

module.exports = exports = mongoose.model('Profile', profileSchema);
