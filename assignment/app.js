module.exports = function(app) {
  console.log("hello from app.js");
  require("../assignment/services/user.service.server.js")(app);
   require("../assignment/services/website.service.server.js")(app);
   require("../assignment/services/page.service.server.js")(app);
  require("../assignment/services/widget.service.server.js")(app);
  // require("./services/user.service.server.js")(app);
  //  require("./services/website.service.server.js")(app);
  //  require("./services/page.service.server.js")(app);
  // require("./services/widget.service.server.js")(app);
};
