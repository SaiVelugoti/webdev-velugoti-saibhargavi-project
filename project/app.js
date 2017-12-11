module.exports = function (app) {

  var db = require("./model/models.server");
  require("./services/user.service.server")(app);
  require("./services/comment.service.server")(app);
  require("./services/event.service.server")(app);
  require("./services/manage-event.service.server")(app);
  };
