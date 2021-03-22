const express = require('express');
const app = express();

const http = require('http').createServer(app);
const options = {};
const session = require('express-session');
const bodyParser = require('body-parser');

// SETTINGS
app.set('view engine', 'ejs');
app.set('views', './views');

// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({'extended': false}));
app.use('/static', express.static('./static'));
app.use(session({              
  secret: "cats",
  name: "sessionid",
  resave: true,
  saveUninitialized: true         // TODO: add 'secure' and a cookie session store suitable for production
})); 
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.render('homepage', { });
});

http.listen(3000, () => {
    console.log('listening on: 3000');
  });
  
  module.exports = app;