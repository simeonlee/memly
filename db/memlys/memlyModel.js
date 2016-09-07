var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var memlySchema = new Schema({
  userId: String,
  comment: String,
  visits: Number,
  place: String,
  location: {
  	lat: Number,
  	lng: Number
  },
  image: {
  	data: Buffer, // allows us to store our image as data in the form of arrays
  	contentType: String
  }
});

module.exports = mongoose.model('Memly', memlySchema);