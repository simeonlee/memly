var mongodb = require('mongodb');
var mongoose = require('mongoose');

var mongooseUri =
  process.env.MONGODB_URI ||
  'mongodb://localhost/memly';

mongoose.connect(mongooseUri);

// We will not have db.once('open', cb) and just have saving
// and finding operations to database buffer

// var db = mongoose.connection;

// db.on('error', console.error.bind(console, 'connection error:'));

// db.once('open', function() {
//   console.log('Database is connected');


  
// });

/*
// TODO: do we need to use express-session middleware in conjunciton with passport.session()?
app.use(passport.initialize());
app.use(passport.session());

// Redirect the user to Facebook for authentication.  When complete,
// Facebook will redirect the user back to the application at
//     /auth/facebook/callback
app.get('/auth/facebook', passport.authenticate('facebook', { scope:
  [
    'email', 
    'user_likes', 
    'user_friends', 
    'user_photos', 
    'user_birthday',
    'user_location',
    'user_education_history',
    'user_events',
    'user_photos',
    'user_website',
    'user_tagged_places',
    'user_work_history'
  ]
}));

// Facebook will redirect the user to this URL after approval.  Finish the
// authentication process by attempting to obtain an access token.  If
// access was granted, the user will be logged in.  Otherwise,
// authentication has failed.
app.get('/auth/facebook/callback', 
  passport.authenticate('facebook', { failureRedirect: '/#/map' }),
  function(req, res) {
    res.redirect('/#/map');
  });*/