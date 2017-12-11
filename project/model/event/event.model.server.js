var mongoose = require("mongoose");
var EventSchema = require("./event.schema.server");
var EventModel = mongoose.model("EventModel", EventSchema);

EventModel.addCommentToEvent = addCommentToEvent;
EventModel.findAllCommentsForEvent = findAllCommentsForEvent;
EventModel.addEvent = addEvent;
EventModel.getEventName = getEventName;
EventModel.modifyCommentToEvent = modifyCommentToEvent;
EventModel.deleteCommentToEvent = deleteCommentToEvent;
EventModel.getEventsCreated = getEventsCreated;
EventModel.addNewEvent = addNewEvent;
EventModel.deleteEvent = deleteEvent;
EventModel.findEventsCreatedByOthers = findEventsCreatedByOthers;

module.exports = EventModel;

function addCommentToEvent(eventId, comment) {
  return EventModel.update({eventId: eventId},
    {$addToSet: {commentsOnEvent: comment}});
}

function addNewEvent(event) {
  return EventModel.create(event);
}

function getEventsCreated(userId) {
  "use strict";
  return EventModel.find({createdBy: userId});
}

function findEventsCreatedByOthers(userId) {
  return EventModel.find({createdBy: {$ne: userId}});
}

function modifyCommentToEvent(eventId, commentId, commentText) {
  return EventModel.update({'commentsOnEvent._id': commentId},
    {'$set': {'commentsOnEvent.$.comment': commentText}});
}

function deleteCommentToEvent(eventId, commentId) {
  console.log('in model -> delete comment', eventId, commentId);
  return EventModel.update({'eventId': eventId}, {$pull: {'commentsOnEvent._id': commentId}});
}

function findAllCommentsForEvent(eventId) {
  return EventModel.find({eventId: eventId});
}

function addEvent(eventId, eventName) {
  return EventModel.create({eventId: eventId, eventName: eventName});
}

function getEventName(eventId) {
  return EventModel.find({eventId: eventId});
}

function deleteEvent(eventId) {
  return EventModel.remove({eventId: eventId});
}

