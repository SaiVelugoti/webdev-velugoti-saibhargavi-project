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
  following: [String],
  dateCreated: {type: Date, default: Date.now()},
  eventsAttending: [String],
  facebook: {
    id: String,
    token: String
  }
}, {collection: 'user'});

module.exports = UserSchema;
