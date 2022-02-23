require('dotenv').config();
require('./config/db');

const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const path = require('path');

const { getEnv } = require('../globals');

const httpPort = getEnv('HTTP_PORT', 80);
const httpsPort = getEnv('HTTPS_PORT', 443);
const certs = require('./config/https');

const app = express();

app.disable('x-powered-by');
app.set('trust proxy', true);
app.use(helmet());
app.use(cookieParser());
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
app.all('*', (req, res, next) => {
  if (req.secure) return next();
  res.redirect(308, `https://${req.hostname}:${httpsPort}${req.url}`);
});

const www = require('./routes/www');
const api = require('./routes/api');
if (getEnv('NODE_ENV') === 'production') {
  app.use('/static', express.static(path.join(__dirname, 'dist', 'static')));
}
app.use('/', www);
app.use('/api', api);

app.listen(httpPort, () => {
  console.log(`HTTP: listening on ${httpPort}`);
});

const https = require('https').createServer(certs, app);
https.listen(httpsPort, () => {
  console.log(`HTTPS: listening on ${httpsPort}`);
});

module.exports = app;
