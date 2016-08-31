var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var User = require('./users/userModel');

passport.use(new FacebookStrategy({
  clientID: process.env.FACEBOOK_APP_ID, // TODO: set config vars in heroku
  clientSecret: process.env.FACEBOOK_APP_SECRET, // TODO: set config vars in heroku
  callbackURL: "", // TODO: put website url here
  profileFields: [
    'id',
    'displayName',
    'first_name',
    'last_name',
    'email',
    'bio',
    'work',
    'education',
    'location',
    'birthday',
    'cover',
    'photos',
    'gender',
    'interested_in',
    'link', // FB timeline 
    'website',
    'is_verified'
  ]
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