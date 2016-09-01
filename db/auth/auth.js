var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var authConfig = require('./authConfig.js');
var User = require('../users/userModel.js');
var keys = require('./keys.js');

module.exports = function(app) {
  
  app.use(passport.initialize());
  app.use(passport.session());

  passport.use(new FacebookStrategy({
    clientID: keys.FACEBOOK_APP_ID, // TODO: set process.env.FACEBOOK_APP_ID config vars in heroku
    clientSecret: keys.FACEBOOK_APP_SECRET, // TODO: set  process.env.FACEBOOK_APP_SECRET config vars in heroku
    callbackURL: "http://localhost:3000/auth/facebook/callback", // TODO: put website url here
    profileFields: authConfig.profileFields
  }, function(accessToken, refreshToken, profile, done) {
    User.findOrCreate(profile, function(err, user) {
      if (err) { return done(err); }
      done(null, user);
    })
  }));

  passport.serializeUser(function(user, done) {
    done(null, user);
  });

  passport.deserializeUser(function(user, done) {
    done(null, user);
  });

};
