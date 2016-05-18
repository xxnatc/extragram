const express = require('express');
const jsonParser = require('body-parser').json();

const Gallery = require(__dirname + '/../models/gallery');
const dbErrorHandler = require(__dirname + '/../lib/db_error_handler');

var galleriesRouter = module.exports = exports = express.Router();

galleriesRouter.get('/galleries/:userId', (req, res) => {
  Gallery.findOne({ user_id: req.params.userId }, (err, data) => {
    if (err) return dbErrorHandler(err, res);
    res.status(200).json(data);
  });
});

galleriesRouter.put('/galleries/:userId', jsonParser, (req, res) => {
  var galleryData = req.body;
  if (galleryData._id) delete galleryData._id;

  Gallery.update({ user_id: req.params.userId }, galleryData, (err) => {
    if (err) return dbErrorHandler(err, res);
    res.status(200).json({ msg: 'Update gallery successful' });
  });
});
