// RESTFUL API FOR FETCHING DB DATA

const router = require('express').Router();
const { Professional, Code } = require('../config/db');
const bcrypt = require('bcrypt');
const { pwSecure, fieldsSecure } = require('../config/security');

const saltRounds = 10;  // time complexity

// welcome route
const message = "Hey! Welcome to the API";
router.get('/', (req, res) => {
    res.json(message);
});

// REGISTER
router.post('/register', (req, res) => {
    const plainTextPw = req.body.password;

    if (pwSecure(plainTextPw) && fieldsSecure(req.body) === 0) {        // password is secure & request is correct
        bcrypt.hash(plainTextPw, saltRounds, (err, hashed) => {

            if (err) throw err;
            const newPsychologist = new Professional({
                email: req.body.email,
                username: req.body.username,
                password: hashed,
                fullName: req.body.fullName,
                newsletter: req.body.newsletter,
                dateJoined: Date.now()
            });
            Professional.find({email: newPsychologist.email}, (err, doc) => {
                console.log(doc);
                if (doc.length == 0) {
                    newPsychologist.save((doc, err) => {
                        if (err) res.status(500).end();
                        res.status(200).json("Success").end();
                    });
                } else {
                    res.status(400).json("User already exists");
                }
            });
            

        });

    } else {                                            // password isn't secure or bad formatted request
        res.status(400).json("Something went wrong");   // specify cases
    }
});

// LOGIN
router.post('/login', (req, res) => {
    ;
});

// GET INFORMATIONS
// get all users
router.get('/user', (req, res) => {
    Professional.find({ }, (err, doc) => {
        if (err) res.status(400);
        else if (!doc) res.status(404);
        res.json(doc);
    });
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

// UPDATE
// update user details by id TODO
router.put('user/id/:id', (req, res) => {
    ;
});

// DELETE USERS
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