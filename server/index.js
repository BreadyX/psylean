const express = require('express');
const app = express();
const path = require('path');

const http = require('http').createServer(app);
const options = {};
const session = require('express-session');
const bodyParser = require('body-parser');
const www = require('./routes/www');
const logger = require('./routes/logger');

// SETTINGS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({'extended': false}));

app.use(session({
  secret: 'cats',
  name: 'sessionid',
  resave: true,
  // TODO: add 'secure' and a cookie session store suitable for production
  saveUninitialized: true
}));
app.use(bodyParser.urlencoded({ extended: false }));

// ROUTES MIDDLEWARE
if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, 'dist')));
}

app.use('/', logger);
app.use('/api', www);

http.listen(3000, () => {
  console.log('listening on: 3000');
});

module.exports = app;
