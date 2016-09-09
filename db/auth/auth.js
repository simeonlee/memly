var express = require('express');
var passport = require('passport');
var util = require('util');
var session = require('express-session');
var LocalStrategy = require('passport-local').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
var authConfig = require('./authConfig.js');
var User = require('../users/userModel.js');
var keys = require('./keys.js');



module.exports = function(app) {
  
  app.use(session({ 
    secret: 'sneaky diamonds',
    saveUninitialized: true,
    resave: false
  }));
  app.use(passport.initialize());
  app.use(passport.session());

  passport.use(new FacebookStrategy({
    clientID: keys.FACEBOOK_APP_ID, // TODO: set process.env.FACEBOOK_APP_ID config vars in heroku
    clientSecret: keys.FACEBOOK_APP_SECRET, // TODO: set  process.env.FACEBOOK_APP_SECRET config vars in heroku
    callbackURL: "http://localhost:3000/auth/facebook/callback", // TODO: put website url here
    profileFields: authConfig.profileFields
  }, function(accessToken, refreshToken, profile, done) {
    console.log('chekcing profile in auth.js', profile);
    User.findOrCreate(profile, function(err, user) {
      if (err) { return done(err); }
      done(null, user);
    });
  }));

  passport.serializeUser(function(user, done) {
    done(null, user);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });

};
