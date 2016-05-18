const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/extragram_dev');

const PORT = process.env.PORT || 3000;

const galleriesRouter = require(__dirname + '/routes/galleries_router');
const profilesRouter = require(__dirname + '/routes/profiles_router');
const validationRouter = require(__dirname + '/routes/validation_router');

app.use('/api', galleriesRouter);
app.use('/api', profilesRouter);
app.use('/api', validationRouter);

app.use('/', express.static(__dirname + '/client'));

return app.listen(PORT, () => {
  console.log('Server running on port: ' + PORT);
});
