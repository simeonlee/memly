//node dependencies for server
var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors');
var routes = require('./serverRoutes.js');
var path = require('path');
var session = require('express-session');
var port = process.env.PORT || 3000;
var auth = require('../db/auth/auth.js');
var passport = require('passport');
var authConfig = require('../db/auth/authConfig.js');
var logout = require('express-passport-logout');
var User = require('../db/users/userModel.js');
var mongoose = require('mongoose');
var db = require('../db/database.js');
var helper = require('./helperFunctions.js');
//------ instantiate app. connect middleware. -----//
var app = express();


app.use(cors());
app.use(express.static(path.join(__dirname, '../client')));
app.use(morgan('dev'));
app.use(bodyParser.json());

<<<<<<< ef9d182e47a5e579eceab12be5e3ff605a0dde23
=======
//need to import session 
>>>>>>> styling updates for infoWindow
// Configure our server with the passport middleware
auth(app);

// This runs our app through some middleware that allows saving to our database
// CURRENTLY JUST IMAGES ARE CONFIGURED TO BE SAVED
require('./../db/database')(app);

//--- route config ----- //

app.get('/getTest', routes.getTest);
app.post('/postTest', routes.postTest);

// Redirect the user to Facebook for authentication.  When complete,
// Facebook will redirect the user back to the application at
//     /auth/facebook/callback

app.get('/auth/facebook', passport.authenticate('facebook', { scope: authConfig.scope }));

// app.get('/auth/facebook', passport.authenticate('facebook'));

//TESTING to see if login button is hitting here----
// app.get('/auth/facebook', function(req, res) {
//   console.log('the login button was clicked and hitting here');
//   res.send('it hit here on the server');
// });
//--------//
// Facebook will redirect the user to this URL after approval.  Finish the
// authentication process by attempting to obtain an access token.  If
// access was granted, the user will be logged in.  Otherwise,
// authentication has failed.

app.get('/', function(req, res) {
  console.log('AM I HITTING APP.GET?????');
  res.render('index');
});


app.get('/auth/facebook/callback', 
  passport.authenticate('facebook', { failureRedirect: 'http://localhost:3000/#' }),
  function(req, res) {
    //console.log('LOGIN SUCCESS NOW SHOW ME THE USER---------------------->', req.user);
    //console.log('SHOW ME WHAT THIS SESSION IS------------>', req.session.passport.user);
    res.redirect('http://localhost:3000/#/user/profile');
  });


//helper function to check if a user session has been created.
// var isLoggedIn = function(req, res, next) {
//   console.log('I am hitting isLoggedIn helper function');
//   if (!req.session.passport) {
//     console.log('no passport session sorry!!!');
//     res.redirect('http://localhost:3000/#');
//   } else if (!req.session.passport.user) {
//     console.log('no passport user defined. maybe next time????');
//     res.redirect('http://localhost:3000/#');
//   } else {
//     next();
//   }
// };

app.get('/user/profile/', helper.isLoggedIn, function(req, res) {
  res.redirect('http://localhost:3000/#/user/profile');
  // }
});


//function to pass information from database to client
app.get('/user/retrieve/profileinfo/', helper.isLoggedIn, function(req, res) {

  if (req.session.passport.user) {
    var userID = req.session.passport.user['_id'];
    console.log('checking to make sure this is the right ID', userID);
    User.findOne({_id: userID}).exec(function(err, found) {
      if (err) {
        res.status(404).send('i got a bad feeling about this....');
      }
      if (found) {
        //console.log('what is found????????????', found);
        res.status(200).send(found);
      } else {
        res.redirect('http://localhost:3000/#');
      }
    });
  } else {
    res.redirect('http://localhost:3000/#');
  }


});




//Log out of session
app.get('/logout', function(req, res) {
  console.log('I HIT LOGOUT, checking if theres a session made', req.session);
  req.logOut();
  console.log('MAKING SURE SESSION IS DESTROYED', req.session);
  res.status(200).send('destroy session');
});

app.listen(port, function() {
  console.log('server listening on ' + port);
});