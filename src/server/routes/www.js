const express = require('express');
const router = express.Router();
const path = require('path');

const basePath = path.join(__dirname, '..', 'dist');
const options = {
  root: basePath
};

router.get('/', (_, res, next) => {
  res.sendFile('index.html', options).end();
  next();
});

module.exports = router;
