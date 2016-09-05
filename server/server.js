//node dependencies for server
var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors');
var routes = require('./serverRoutes.js');
var path = require('path');
// var keys = require('./config/config.js');
// make sure you require express-session 
var session = require('express-session');
var port = process.env.PORT || 3000
var auth = require('../db/auth/auth.js');
var passport = require('passport');
var authConfig = require('../db/auth/authConfig.js');

//------ instantiate app. connect middleware. -----//
var app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, '../client')));
app.use(morgan('dev'));
app.use(bodyParser.json());

//need to import session 
// Configure our server with the passport middleware
auth(app);

//--- route config ----- //

app.get('/getTest', routes.getTest);
app.post('/postTest', routes.postTest);

// Redirect the user to Facebook for authentication.  When complete,
// Facebook will redirect the user back to the application at
//     /auth/facebook/callback

app.get('/auth/facebook', passport.authenticate('facebook', { scope: authConfig.scope }));

// Facebook will redirect the user to this URL after approval.  Finish the
// authentication process by attempting to obtain an access token.  If
// access was granted, the user will be logged in.  Otherwise,
// authentication has failed.

app.get('/auth/facebook/callback', 
  passport.authenticate('facebook', { failureRedirect: '/' }),
  function(req, res) {
    console.log('login success');
    res.redirect('/');
  });

app.listen(port, function(){
  console.log('server listening on ' + port);
})