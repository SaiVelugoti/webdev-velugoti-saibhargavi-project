var mongoose = require("mongoose");
var EventSchema = mongoose.Schema({
  eventName: String,
  eventLocation: String,
  eventId: String,
  imgSrc: String,
  commentsOnEvent: [{userId: String, username: String, comment: String}],
  dateCreated: {type: Date, default: Date.now()},
}, {collection: 'event'});

module.exports = EventSchema;
