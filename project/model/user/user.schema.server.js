var mongoose = require("mongoose");
var UserSchema = mongoose.Schema({
  username: String,
  password: String,
  firstName: String,
  lastName: String,
  email: String,
  role: {type: String, default: 'USER', enum:['ADMIN', 'USER', 'ORGANIZER']},
  commentedEvents: [{eventId: String, eventName: String, comment: String}],
  followedBy: [String],
  followingUsers: [String],
  dateCreated: {type: Date, default: Date.now()},
  favoriteEvents: [{eventId: String, eventName: String}],
  facebook: {
    id: String,
    token: String
  }
}, {collection: 'user'});

module.exports = UserSchema;
