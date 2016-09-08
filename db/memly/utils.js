var Memly = require('./model');

exports.createAndSaveNewMemly = function(req, res, mediaUrl) {
  // Create new instance of Memly and save to database
  var newMemly = new Memly();
  newMemly.userId = null;
  newMemly.media.url = mediaUrl;
  newMemly.media.contentType = req.file.mimetype; // 'image/png'
  newMemly.comment = req.body.comment;
  newMemly.place = req.body.place;
  newMemly.visits = 1;
  newMemly.location = {
    lat: req.body.lat,
    lng: req.body.lng
  };
  newMemly.save();
};