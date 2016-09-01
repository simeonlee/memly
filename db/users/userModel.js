var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var utils = require('./userUtils');

userSchema = new Schema({
  _id: String,
  name: String,
  age: Number,
  birthday: String,
  gender: String,
  city: String,
  job: String,
  education: String,
  bio: String,
  profilePhotoUrl: String,
  email: String,
  memlys: [
    {
      mediaUrl: String,
      date: Date,
      location: {
        lat: Number,
        lng: Number
      }
    }
  ],
  likedMemlys: [
    {
      mediaUrl: String,
      date: Date,
      location: {
        lat: Number,
        lng: Number
      }
    }
  ],
  savedMemlys: [
    {
      mediaUrl: String,
      date: Date,
      location: {
        lat: Number,
        lng: Number
      }
    }
  ],
  meta: {
    lastLogInLocation: {
      lat: Number,
      lng: Number
    },
    joinDate: {
      type: Date,
      default: Date.now
    }
  }
// We have set below _id to false to use
// FB id's instead of mongo-generated id's
},{ _id: false });

userSchema.statics.findOrCreate = function(profile, cb) {
  // store in server memory
  userId = profile.id;
  var userObj = new this();
  this.findOne({_id: profile.id}, function(err, result) {
    if (!result) {
      var raw = JSON.parse(profile._raw);
      userObj._id = profile.id;
      userObj.name = raw.first_name;
      userObj.email = profile.emails[0].value;
      userObj.age = utils.calculateAge(raw.birthday);
      userObj.birthday = raw.birthday;
      userObj.gender = raw.gender;
      userObj.city = raw.location.name;
      userObj.job = raw.work;
      userObj.education = raw.education[0].school.name;
      userObj.bio = raw.bio;
      userObj.profilePhotoUrl = profile.photos[0].value;
      userObj.save(cb);
    } else {
      cb(err, result);
    }
  })
}

module.exports = mongoose.model('User', userSchema);