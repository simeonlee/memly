var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var authConfig = require('./authConfig.js');
var User = require('./users/userModel.js');

module.exports = function(app) {

  app.use(passport.initialize());
  app.use(passport.session());

  passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_APP_ID, // TODO: set config vars in heroku
    clientSecret: process.env.FACEBOOK_APP_SECRET, // TODO: set config vars in heroku
    callbackURL: "", // TODO: put website url here
    profileFields: authConfig.profileFields;
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