module.exports = function (app) {

  app.post("/api/user/:userId/website", createWebsite);
  app.put("/api/website/:websiteId", updateWebsite);
  app.get("/api/user/:userId/website", findWebsitesByUser);
  app.get("/api/website/:websiteId", findWebsiteById);
  app.delete("/api/website/:websiteId", deleteWebsite);

  var websiteModel = require("../model/website/website.model.server");

  // websites = [
  //   { '_id': '123', 'name': 'Facebook', 'developerId': '456', 'description': 'Lorem' },
  //   { '_id': '234', 'name': 'Tweeter', 'developerId': '456', 'description': 'Lorem' },
  //   { '_id': '456', 'name': 'Gizmodo', 'developerId': '456', 'description': 'Lorem' },
  //   { '_id': '890', 'name': 'Go', 'developerId': '123', 'description': 'Lorem' },
  //   { '_id': '567', 'name': 'Tic Tac Toe', 'developerId': '123', 'description': 'Lorem' },
  //   { '_id': '678', 'name': 'Checkers', 'developerId': '123', 'description': 'Lorem' },
  //   { '_id': '789', 'name': 'Chess', 'developerId': '234', 'description': 'Lorem' }
  // ];

  function createWebsite(req, res) {
    var website = req.body;
    website.developerID = req.params['userId'];
    var userId = req.params['userId'];
    websiteModel.createWebsiteForUser(userId, website)
      .then(function (newWebsite) {
        websiteModel.findAllWebsitesForUser(userId)
          .then(function (websites) {
            res.json(websites);
          });
      });
    // websites.push(website);
    // res.json(website);
  }

  function findWebsitesByUser(req, res) {
    var userId = req.params['userId'];
   // var websitesByUserId = [];
    websiteModel.findAllWebsitesForUser(userId)
      .then(function (websitesByUserId) {
        res.json(websitesByUserId);
      });
    return;
    // for (let x = 0; x < this.websites.length; x++) {
    //   if (this.websites[x].developerId === userId) {
    //     websitesByUserId.push(this.websites[x]);
    //   }
    // }
    // res.json(websitesByUserId);
  }

  function findWebsiteById(req, res) {
    var websiteId = req.params['websiteId'];
    // var website;
    // for (let x = 0; x < this.websites.length; x++) {
    //   if (this.websites[x]._id === websiteId) {
    //     website = websites[x];
    //   }
    // }
    websiteModel.findWebsiteById(websiteId)
      .then(function (websitesById) {
       // if (websitesByUserId){
          res.json(websitesById);
        // } else {
        //   res.json(null);
        // }
      });
    // if (website){
    //   res.json(website);
    // } else {
    //   res.json(null);
    // }
   // return;
  }

  function updateWebsite(req, res) {
    var website = req.body;
    var websiteId = req.params['websiteId'];
    websiteModel.updateWebsite(websiteId, website)
      .then(function (websites) {
        res.json(websites);
      });
    // for (let x = 0; x < websites.length; x++) {
    //   if (websites[x]._id === websiteId) {
    //     websites[x] = website; }
    // }
    // res.json(websites);
    return;
  }

  function deleteWebsite(req,res) {
    var websiteId = req.params['websiteId'];
    websiteModel.deleteWebsite(websiteId)
      .then(function (websites) {
        res.json(websites);
      });
    // for (let x = 0; x < websites.length; x++) {
    //   if (websites[x]._id === websiteId) {  websites.splice(x, 1); }
    // }
    // res.json({});
    return;
  }
}
