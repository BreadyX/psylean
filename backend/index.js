const express = require('express');
const app = express();

const http = require('http').createServer(app);
const options = {};
const www = require('./routes/www'),
  logger = require('./routes/logger'),
  api = require('./routes/api'),
  passport = require('passport');

// SETTINGS
app.set('view engine', 'ejs');
app.set('views', './views');

// MIDDLEWARE
const session = require("express-session"),
    bodyParser = require("body-parser");

app.use(express.static("public"));
app.use(session({ secret: "cats", resave: true, saveUninitialized: false }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());


app.use(express.json());
app.use(express.urlencoded({'extended': false}));


// ROUTES MIDDLEWARE
app.use('/', logger);   // change in production
app.use('/', www);
app.use('/api', api);
 
http.listen(3000, () => {
  console.log('listening on: 3000');
});

module.exports = app;
