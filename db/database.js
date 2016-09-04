var mongodb = require('mongodb');
var mongoose = require('mongoose');
var fs = require('fs');
var multer = require('multer');

// Import 'Memly' mongoose model
var Memly = require('./memlys/memlyModel');

var mongooseUri =
  process.env.MONGODB_URI ||
  'mongodb://localhost/memly';

mongoose.connect(mongooseUri);

// Call the below on app to enable it to upload images to database
module.exports = function(app) {

	// Use 'Multer' middleware to take a photo and put it in a folder
	// called 'uploads' so we can easily access it later
	// Multer is middleware for handling 'multipart/form-data',
	// which is primarily used for uploading files
	// https://github.com/expressjs/multer
	app.use(multer({ dest: './uploads/',
		rename: function(fieldname, filename) {
			return filename;
		}
	}));

	app.post('/api/photo', function(req, res) {
		// Create instance of Memly
		var newMemly = new Memly();
		// Memly image.data key will have value of image data
		newMemly.image.data = fs.readFileSync(req.files.userPhoto.path);
		// Memly image.contentType specifies that we have a 'png' file
		newMemly.image.contentType = 'image/png';
		// Save Memly to database
		newMemly.save();
	})

};