//node dependencies for server
var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors');
var routes = require('./serverRoutes.js');
var path = require('path');
var port = process.env.PORT || 3000


var app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, './testFile')));
app.use(morgan('dev'));
app.use(bodyParser.json());

//--- route config ----- //
app.get('/getTest', routes.getTest);
app.post('/postTest', routes.postTest);

app.listen(port, function(){
  console.log('server listening on ' + port);
})

