const express = require('express');
const history = require('connect-history-api-fallback');
const path = require('path');

const { getEnv } = require('../../globals');

const app = express();

const basePath = path.join(__dirname, '..', 'dist');
const options = {
  root: basePath
};

const errHandler =
  getEnv('NODE_ENV') === 'development'
    ? (_err, req, res) => res.status(200).send(`<h1>Handling ${req.url}</h1>`)
    : (err, _req, _res, next) => next(err);

app.use(
  history({
    index: '/404',
    rewrites: [
      { from: /^\/$/, to: '/' },
      {
        from: /\/users\/(.*)/,
        to: (ctx) => {
          const allowed = ['login', 'register', 'verify'];
          if (allowed.includes(ctx.match[1])) return '/users';
          else return '/404';
        }
      }
    ]
  })
);

app.get('/', (req, res, next) => {
  res.sendFile('index.html', options, (err) => errHandler(err, req, res, next));
});

app.get('/users', (req, res, next) => {
  res.sendFile('users.html', options, (err) => errHandler(err, req, res, next));
});

app.get('/404', (_, res) => {
  res.status(404).send('<h1>Not Found</h1>');
});

module.exports = app;
