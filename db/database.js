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

