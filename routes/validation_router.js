const express = require('express');
const jsonParser = require('body-parser').json();
const request = require('superagent');

var validationRouter = module.exports = exports = express.Router();

validationRouter.get('/valid-image', jsonParser, (req, res) => {
  if (!req.headers.src) return res.status(400).json({ msg: 'Empty src field' });

  request
    .get(req.headers.src)
    .end((checkErr, checkRes) => {
      if (checkErr) return res.status(200).json({ msg: 'Error fetch source' });
      if (checkRes.status !== 200 || !checkRes.type.match(/image\//))
        return res.status(200).json({ msg: 'Invalid image source' });
      res.status(200).json({ success: true, msg: 'Valid image source' });
    });
});
