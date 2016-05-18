const mongoose = require('mongoose');

var gallerySchema = new mongoose.Schema({
  user_id: { type: String, require: true },
  images: [String]
});

module.exports = exports = mongoose.model('Gallery', gallerySchema);
