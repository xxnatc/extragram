const express = require('express');
const jsonParser = require('body-parser').json();

const Profile = require(__dirname + '/../models/profile');
const Gallery = require(__dirname + '/../models/gallery');
const dbErrorHandler = require(__dirname + '/../lib/db_error_handler');

var profilesRouter = module.exports = exports = express.Router();

profilesRouter.get('/profiles/:username', (req, res) => {
  Profile.findOne({ username: req.params.username }, (err, data) => {
    if (err) return dbErrorHandler(err, res);
    if (!data) return res.status(400).json({ msg: 'No user found' });
    res.status(200).json(data);
  });
});

profilesRouter.put('/profiles/:id', jsonParser, (req, res) => {
  var profileData = req.body;
  if (profileData._id) delete profileData._id;

  Profile.update({ _id: req.params.id }, profileData, (err) => {
    if (err) return dbErrorHandler(err, res);
    res.status(200).json({ msg: 'Update profile successful' });
  });
});

profilesRouter.delete('/profiles/:id', (req, res) => {
  Profile.remove({ _id: req.params.id }, (err) => {
    if (err) return dbErrorHandler(err, res);

    Gallery.remove({ user_id: req.params.id }, (err) => {
      if (err) return dbErrorHandler(err, res);
      res.status(200).json({ msg: 'Delete profile successful' });
    });
  });
});

profilesRouter.post('/profiles', jsonParser, (req, res) => {
  var newProfile = new Profile(req.body);
  newProfile.save((profileErr, profileData) => {
    if (profileErr) return dbErrorHandler(profileErr, res);

    var newGallery = new Gallery({ user_id: profileData._id, images: [] });
    newGallery.save((galleryErr, galleryData) => {
      if (galleryErr) return dbErrorHandler(galleryErr, res);
      res.status(200).json({ profileData, galleryData });
    });
  });
});
