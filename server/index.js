const express = require('express');
const app = express();
const path = require('path');

const http = require('http').createServer(app);
const session = require('express-session');

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

http.listen(3000, () => {
  console.log('listening on: 3000');
});

module.exports = app;
