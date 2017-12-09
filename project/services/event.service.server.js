module.exports = function (app) {
  app.get("/api/eventDetail/:id", getEventDetails);
}
