require('dotenv').config();
require('./config/db');

const express = require('express');
const session = require('express-session');
const path = require('path');

const { getEnv } = require('../globals');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  session({
    secret: 'cats',
    name: 'sessionid',
    resave: true,
    // TODO: add 'secure' and a cookie session store suitable for production
    saveUninitialized: true
  })
);

app.use((req, _, next) => {
  console.log(req.protocol, req.method, 'request from', req.ip);
  next();
});

const www = require('./routes/www');
if (getEnv('NODE_ENV', 'production') === 'production') {
  app.use('/static', express.static(path.join(__dirname, 'dist', 'static')));
  app.use('/', www);
}

const api = require('./routes/api');
app.use('/api', api);

app.listen(getEnv('SERVER_PORT', 3000), () => {
  console.log(`listening on: ${getEnv('SERVER_PORT', 3000)}`);
});

module.exports = app;
