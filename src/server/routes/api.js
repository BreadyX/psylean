const express = require('express');
const router = express.Router();
const upload = require('multer')();
const json = express.json();
const urlencoded = express.urlencoded({ extended: false });

const { ValidationError } = require('../exceptions');

const csrf = require('../service/csrf');
const userManagement = require('../service/userManagement');

router.get('/', (_, res) => {
  res.status(200).end();
});

router.post('/doctors', csrf, json, urlencoded, upload.none(), (req, res) => {
  let data = {};
  for (let key in req.body) data[key] = decodeURIComponent(req.body[key]);

  userManagement
    .addDoctor(data)
    .then(() => res.sendStatus(200))
    .catch((e) => {
      if (e instanceof ValidationError) {
        res.status(400).json(e);
      } else {
        res.sendStatus(500);
        console.log(e);
      }
    });
});

router.post('/doctor/verify/:code', csrf, (req, res) => {
  const code = decodeURIComponent(req.params.code);
  userManagement
    .verifyAccount(code)
    .then(() => {
      res.sendStatus(200);
    })
    .catch(() => {
      res.sendStatus(404);
    });
});

module.exports = router;
