module.exports = function (app) {

  var userModel = require("../model/user/user.model.server");
  var eventModel = require("../model/event/event.model.server");

  app.get("/api/findEventsCreated/:userId", getEventsCreated);
  app.get("/api/findEventsCreatedByOthers/:userId", findEventsCreatedByOthers);

  app.get("/api/getEventName/:eventId", getEventName);

  // app.put("/api/eventDetail/:id", getEventDetails);
  // app.get("/api/getInterestedEvents/:userId", getInterestedEvents);
  app.get("/api/findEventsCreated/:userId", getEventsCreated);

  function getEventsCreated(req, res) {
    var userId = req.params['userId'];
    eventModel.getEventsCreated(userId)
      .then(function (res1) {
        res.json(res1);
      });
  }

  function findEventsCreatedByOthers(req, res) {
    var userId = req.params['userId'];
    eventModel.findEventsCreatedByOthers(userId)
      .then(function (res1) {
        res.json(res1);
      });
  }

  function getEventName(req, res) {
    var eventId = req.params['eventId'];
    eventModel.getEventName(eventId)
      .then(function (res1) {
        res.json(res1);
      });
  }

}
