/* Passport.js initialization
In this file the passport strategies are specified,
they are included and used in the routes  */

const passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    Professional = require('./db').Professional,
    bcrypt = require('bcrypt');

passport.use(new LocalStrategy(

    function(username, password, done) {

        Professional.findOne({ username: username }, function (err, user) {
        if (err) { return done(err); }
        if (!user) {
            return done(null, false, { message: 'Incorrect username.' });
        }
        if (!bcrypt.compareSync(password, user.password)) {
            return done(null, false, { message: 'Incorrect password.' });
        }

        return done(null, user);
        });

    }
    ));


