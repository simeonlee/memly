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
		console.log('--> Request Body --> ',req.body);

		// Create new instance of Memly and save to database
		var newMemly = new Memly();
		newMemly.userId = null;
		newMemly.image.data = fs.readFileSync(req.file.path);
		newMemly.image.contentType = req.file.mimetype; // 'image/png'
		newMemly.comment = req.body.comment;
		newMemly.place = req.body.place;
		newMemly.visits = 1;
		newMemly.location = {
			lat: req.body.lat,
			lng: req.body.lng
		};
		newMemly.save();
		res.redirect('back');
	});

	app.get('/api/nearby', function(req, res) {
		// Acknowledge current user location
		var userLocation = {
			lat: req.body.lat,
			lng: req.body.lng
		};

		// Find any within 0.05 +/- lat and lng of current user location
		// which should equate to ~1.15 miles diameter circle centered on user
		var minLat = userLocation.lat - 0.05;
		var maxLat = userLocation.lat + 0.05;
		var minLng = userLocation.lng - 0.05;
		var maxLng = userLocation.lng + 0.05;

		// Query database for any memlys that are within range
		// http://mongoosejs.com/docs/queries.html
		Memly.find({
			'location.lat': { $gt: minLat, $lt: maxLat },
			'location.lng': { $gt: minLng, $lt: maxLng }
		}, function(err, memlys) {
			if (err) {
				console.log(err);
				return;
			};
			console.log(memlys);
		});
	});

};