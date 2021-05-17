const express = require('express');
const app = express();

const http = require('http').createServer(app);
const options = {};
const session = require('express-session');
const bodyParser = require('body-parser');
const www = require('./routes/www'),
  logger = require('./routes/logger'),
  api = require('./routes/api');

// SETTINGS
app.set('view engine', 'ejs');
app.set('views', './views');

// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({'extended': false}));

app.use('/static', express.static('./static'));
app.use(session({
  secret: 'cats',
  name: 'sessionid',
  resave: true,
  // TODO: add 'secure' and a cookie session store suitable for production
  saveUninitialized: true
}));
app.use(bodyParser.urlencoded({ extended: false }));

// ROUTES MIDDLEWARE
app.use('/', logger);
app.use('/', www);
app.use('/api', api);
 
http.listen(3000, () => {
  console.log('listening on: 3000');
});

module.exports = app;
