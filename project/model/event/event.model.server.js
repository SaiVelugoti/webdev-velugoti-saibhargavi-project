var mongoose = require("mongoose");
var EventSchema = require("./event.schema.server");
var EventModel = mongoose.model("EventModel", EventSchema);

EventModel.addCommentToEvent  = addCommentToEvent;
EventModel.findAllCommentsForEvent = findAllCommentsForEvent;
EventModel.addEvent = addEvent;
EventModel.getEventName = getEventName;
module.exports = EventModel;

function addCommentToEvent(eventId, comment) {
  console.log("In event - model - server - addCommentToEvent")
  return EventModel.update({eventId: eventId},
    {$addToSet: {commentsOnEvent: comment}});
}

function findAllCommentsForEvent(eventId) {
  return EventModel.find({eventId: eventId});
}

function  addEvent(eventId, eventName) {
  return EventModel.create({eventId: eventId, eventName: eventName});
}

function getEventName(eventId) {
  return EventModel.find({eventId: eventId});
}
