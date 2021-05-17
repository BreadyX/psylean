const express = require('express');
const router = express.Router()

//db connection
const { Professional, Code } = require('../config/db');

// VIEWS (delete asap)
router.get('/', (req, res, next) => {
    Professional.find({}, (err, docs) => {
        if (err) throw err;
        res.render('homepage', { professionals: docs });
        res.end();
    });
});

module.exports = router;