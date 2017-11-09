module.exports = function (app) {
  // console.log("hello from app.js");

  var db = require("./model/models.server");
  require("./services/user.service.server")(app);
  require("./services/website.service.server")(app);
  require("./services/page.service.server")(app);
  require("./services/widget.service.server")(app);
};
