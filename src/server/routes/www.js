const express = require('express');
const router = express.Router();
const path = require('path');

const { getEnv } = require('../../globals');

const basePath = path.join(__dirname, '..', 'dist');
const options = {
  root: basePath
};

const errHandler =
  getEnv('NODE_ENV') === 'development'
    ? (_err, req, res) => res.status(200).send(`<h1>Handling ${req.url}</h1>`)
    : (err, _req, _res, next) => next(err);

router.get('/', (req, res, next) => {
  res.sendFile('index.html', options, (err) => errHandler(err, req, res, next));
});

module.exports = router;
