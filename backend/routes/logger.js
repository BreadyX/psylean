const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    const informations = {
        ip: req.ip,
        a: req.method
    };
    console.log(req.protocol, req.method, 'request from', req.ip);
    next();
});

module.exports = router;