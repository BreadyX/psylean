require('dotenv').config();
const { getEnv } = require('./globals');

const path = require('path');

const express = require('express');
const app = express();
const session = require('express-session');
const http = require('http').createServer(app);

const www = require('./routes/www');

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

app.use('/', (req, _, next) => {
  console.log(req.protocol, req.method, 'request from', req.ip);
  next();
});
if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, 'dist')));
}
app.use('/api', www);

http.listen(getEnv('SERVER_PORT'), () => {
  console.log(`listening on: ${getEnv('SERVER_PORT')}`);
});

module.exports = app;
