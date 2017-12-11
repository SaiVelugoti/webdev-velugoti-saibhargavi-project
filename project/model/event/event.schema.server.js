var mongoose = require("mongoose");
var EventSchema = mongoose.Schema({
  title: String,
  description: String,
  address: String,
  eventId: String,
  imgSrc: String,
  url: String,
  createdBy: String,
  commentsOnEvent: [{userId: String, username: String, comment: String}],
  start_time: {type: Date, default: Date.now()},
}, {collection: 'event'});

module.exports = EventSchema;
