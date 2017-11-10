module.exports = function(app){

  app.post("/api/website/:websiteId/page", createPage);
  app.get("/api/website/:websiteId/page", findAllPagesForWebsite);
  app.get("/api/page/:pageId", findPageById);
  app.put("/api/page/:pageId", updatePage);
  app.delete("/api/page/:pageId", deletePage);

  var pageModel = require("../model/page/page.model.server");


    pages = [
      { '_id': '321', 'name': 'Post 1', 'websiteId': '890', 'description': 'Lorem' },
      { '_id': '432', 'name': 'Post 2', 'websiteId': '890', 'description': 'Lorem' },
      { '_id': '543', 'name': 'Post 3', 'websiteId': '567', 'description': 'Lorem' }
    ];
    api = {
      'createPage': this.createPage,
      'findPageByWebsiteId': this.findPageByWebsiteId,
      'findPageById': this.findPageById,
      'updatePage': this.updatePage,
      'deletePage': this.deletePage
    };

    function createPage(req, res) {
      var page = req.body;
      page.websiteId = req.params['websiteId'];
      pageModel.createPage(websiteId, page)
        .then(function (page) {
          pageModel.findAllPagesForWebsite(websiteId)
            .then(function (retrievedPages) {
              res.json(retrievedPages);
            });
        });
      // this.pages.push(page);
      // res.json(pages);
    }

    function findAllPagesForWebsite(req, res) {
      var websiteId = req.params['websiteId'];
      // var pagesByThisWebsiteId = [];
      pageModel.findAllPagesForWebsite(websiteId)
        .then(function (pagesByThisWebsiteId) {
          res.json(pagesByThisWebsiteId);
        });
      // for (let x = 0; x < this.pages.length; x++) {
      //   if (this.pages[x].websiteId === websiteId) {
      //     pagesByThisWebsiteId.push(this.pages[x]);
      //   }
      // }
      // res.json(pagesByThisWebsiteId);
    }

    function findPageById(req, res) {
      var pageId = req.params['pageId'];
      pageModel.findPageById(pageId)
        .then(function (page) {
          if (page){
            res.json(page);
          } else {
            res.json(null);
          }
        });
      //   var page;
      // for (let x = 0; x < this.pages.length; x++) {
      //   if (this.pages[x]._id === pageId) {
      //     page = this.pages[x];
      //   }
      // }
      // if (page){
      //   res.json(page);
      // } else {
      //   res.json(null);
      // }
    }

    function updatePage(req, res) {
      var page = req.body;
      var pageId = req.params['pageId'];
      pageModel.updatePage(pageId, page)
        .then(function (pages) {
            res.json(pages);
        });
      // for (let x = 0; x < this.pages.length; x++) {
      //   if (this.pages[x]._id === pageId) {
      //     this.pages[x] = page;
      //   }
      // }
      // res.json(pages);
    }

    function deletePage(req, res) {
      var pageId = req.params['pageId'];
      pageModel.deletePage(pageId)
        .then(function (pages) {
          res.json(pages);
        });
      // for (let x = 0; x < this.pages.length; x++) {
      //   if (this.pages[x]._id === pageId) {
      //     pages.splice(x, 1);
      //   }
      // }
      // res.json(pages);
    }
  }
