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
  media: {
    url: String,
    contentType: String
  }
});

module.exports = mongoose.model('Memly', memlySchema);