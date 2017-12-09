var mongoose = require("mongoose");
var EventSchema = mongoose.Schema({
  eventName: String,
  eventId: String,
  imgSrc: String,
  commentedEvents: [{userId: String, username: String, comment: String}],
  dateCreated: {type: Date, default: Date.now()},
}, {collection: 'event'});

module.exports = EventSchema;
