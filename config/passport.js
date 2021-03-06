// Required Dependencies
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
const User = mongoose.model('users');

// Required files
const keys = require('../config/keys');

// Empty object for options
const opts = {};

// Grab our keys and our Bearer Token needed for authentication
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

module.exports = passport => {
    passport.use(
        new JwtStrategy(opts, (jwt_payload, done) => {
        // Find the user by the id
        User.findById(jwt_payload.id)
            .then(user => {
                // If the user is found return the user
                if (user) {
                    return done(null, user);
                }
                // If the user is not found return false
                return done(null, false);
            })
            .catch(err => console.log(err));
        })
    );
};
