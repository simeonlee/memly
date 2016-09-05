var mongodb = require('mongodb');
var mongoose = require('mongoose');
var fs = require('fs');

// Use 'Multer' middleware to take a photo and put it in a folder
// called 'uploads' so we can easily access it later
// Multer is middleware for handling 'multipart/form-data',
// which is primarily used for uploading files
// https://github.com/expressjs/multer
var multer = require('multer');

// We use the below storage attribute to keep the original
// file name rather than have multer assign some hexadecimal blabber
// http://stackoverflow.com/questions/32184589/renaming-an-uploaded-file-using-multer-doesnt-work-express-js
var storage = multer.diskStorage({
	destination: function(req, file, cb) {
		cb(null, 'uploads/');
	},
	filename: function(req, file, cb) {
		cb(null, file.originalname + '-' + Date.now());
	}
});
var upload = multer({ storage: storage });

// We would use the below if we didn't want to rename
// var upload = multer({ dest: 'uploads/' });

// Import 'Memly' mongoose model
var Memly = require('./memlys/memlyModel');

var mongooseUri =
  process.env.MONGODB_URI ||
  'mongodb://localhost/memly';

mongoose.connect(mongooseUri);

// Call the below on app to enable it to upload images to database
module.exports = function(app) {

	app.post('/api/photo', upload.single('photo'), function(req, res) {
		console.log('--> Request File --> ',req.file);

		// Create instance of Memly
		var newMemly = new Memly();
		// Memly image.data key will have value of image data
		newMemly.image.data = fs.readFileSync(req.file.path);
		// Memly image.contentType specifies that we have a 'png' file
		newMemly.image.contentType = 'image/png';
		// Save Memly to database
		newMemly.save();
		// res.send('We\'ve successfully made our post request!');
		res.redirect('back');
	});

};