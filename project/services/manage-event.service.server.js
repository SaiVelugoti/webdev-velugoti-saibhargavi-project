module.exports = function (app) {

  var userModel = require("../model/user/user.model.server");
  var eventModel = require("../model/event/event.model.server");

  app.post("/api/addNewEvent", addNewEvent);
  app.post("/api/updateNewEvent", updateNewEvent);
  app.delete("/api/deleteEvent/:eventId", deleteEvent);

  function addNewEvent(req, res) {
    console.log("In ManageEvent Server -> add new event");
    var newEvent = req.body.eventNew;
    eventModel.addNewEvent(newEvent)
      .then(function (res1) {
        res.json(res1);
      })
  }

  function updateNewEvent(req, res) {
    var eventId = req.body.eventId;
    eventModel.updateNewEvent(eventId)
      .then(function (res1) {
        res.json(res1);
      })
  }

  function deleteEvent(req, res) {
    var eventId = req.params['eventId'];
    //var user = req.body;
    eventModel.deleteEvent(eventId)
      .then(function (eve) {
        res.json(eve);
      });
  }


}
