const express = require('express');
const router = express.Router();
const path = require('path');

const basePath = path.join(__dirname, '..', 'dist');
const options = {
  root: basePath
};

router.get('/', (_, res) => {
  res.sendFile('index.html', options);
});

module.exports = router;
