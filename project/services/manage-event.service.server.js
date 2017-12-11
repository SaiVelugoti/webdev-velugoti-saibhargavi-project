module.exports = function (app) {

  var userModel = require("../model/user/user.model.server");
  var eventModel = require("../model/event/event.model.server");

  app.get("/api/findEventsCreated/:userId", getEventsCreated);
  // app.post("/api/addNewEvent", addNewEvent);

  function getEventsCreated(req, res) {
    console.log("In ManageEvent Server -> getEventsCreated");
    var userId = req.params['userId'];
    eventModel.getEventsCreated(userId)
      .then(function (res1) {
        res.json(res1);
      });
  }

  function addNewEvent(req, res) {
    console.log("In ManageEvent Server -> add new event");
    var newEvent = req.body.eventNew;
    eventModel.addNewEvent(newEvent)
      .then(function (res1) {
        res.json(res1);
      })
  }
}
