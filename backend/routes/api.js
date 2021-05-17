// RESTFUL API FOR FETCHING DB DATA

const router = require('express').Router();
const { Professional, Code } = require('../config/db');

// welcome route
const message = "Hey! Welcome to the API";
router.get('/', (req, res) => {
    res.json(message);
});

// get user by username
router.get('/user/:username', (req, res) => {
    Professional.findOne({ username: req.params.username }, (err, doc) => {
        if (err) res.status(400);
        else if (!doc) res.status(404);
        res.json(doc);
    });
});

// get user by id
router.get('/user/id/:id', (req, res) => {
    Professional.findById(req.params.id, (err, doc) => {
        if (err) res.status(400);
        else if (!doc) res.status(404);
        res.json(doc);
    });
});

// delete user by id
router.delete('/user/id/:id', (req, res) => {
    Professional.findByIdAndDelete(req.params.id, (err, doc) => {
        if (err) res.status(400);
        else if (!doc) res.status(404);
        res.json({userdeleted: 1, doc});
    });
});

// todo: add all the other REST operations.
module.exports = router;