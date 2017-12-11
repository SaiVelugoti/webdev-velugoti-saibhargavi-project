module.exports = function (app) {

  var userModel = require("../model/user/user.model.server");
  var eventModel = require("../model/event/event.model.server");

  app.put("/api/eventDetail/:id", getEventDetails);
  app.get("/api/getInterestedEvents/:userId", getInterestedEvents);

  app.get("/api/findAllCommentsForEvent/:eventId", findAllCommentsForEvent);

  function findAllCommentsForEvent(req, res) {
    var eventId = req.params['eventId'];
    eventModel.findAllCommentsForEvent(eventId)
      .then(function (res1) {
        // "use strict";
        res.json(res1);
      });
  }


  function addCommentToEvent(req, res) {
    var eventId = req.body.eventId;
    var comment = req.body.comment;
    eventModel.addCommentToEvent(eventId, comment)
      .then(function (res1) {
        res.json(res1);
      })
  }

  function findAllCommentsForEvent(req, res) {
    var eventId = req.params['eventId'];
    eventModel.findAllCommentsForEvent(eventId)
      .then(function (res1) {
        "use strict";
        res.json(res1);
      })


  }
}
