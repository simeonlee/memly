var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var memlySchema = new Schema({
  userId: String,
  title: String,
  mediaUrl: String,
  visits: Number
  // TODO: what else should describe our memly?
});

module.exports = mongoose.model('Memly', memlySchema);