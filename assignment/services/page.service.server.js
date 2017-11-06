module.exports = function(app){

  app.post("/api/website/:websiteId/page", createPage);
  app.get("/api/website/:websiteId/page", findAllPagesForWebsite);
  app.get("/api/page/:pageId", findPageById);
  app.put("/api/page/:pageId", updatePage);
  app.delete("/api/page/:pageId", deletePage);

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
      page.websiteID = req.params['websiteId'];
      this.pages.push(page);
      res.json(pages);
    }

    function findAllPagesForWebsite(req, res) {
      var websiteId = req.params['websiteId'];
      var pagesByThisWebsiteId = [];
      for (let x = 0; x < this.pages.length; x++) {
        if (this.pages[x].websiteId === websiteId) {
          pagesByThisWebsiteId.push(this.pages[x]);
        }
      }
      res.json(pagesByThisWebsiteId);
    }

    function findPageById(req, res) {
      var pageId = req.params['pageId'];
        var page;
      for (let x = 0; x < this.pages.length; x++) {
        if (this.pages[x]._id === pageId) {
          page = this.pages[x];
        }
      }
      if (page){
        res.json(page);
      } else {
        res.json(null);
      }
    }

    function updatePage(req, res) {
      var page = req.body;
      var pageId = req.params['pageId'];
      for (let x = 0; x < this.pages.length; x++) {
        if (this.pages[x]._id === pageId) {
          this.pages[x] = page;
        }
      }
      res.json(pages);
    }

    function deletePage(req, res) {
      var pageId = req.params['pageId'];
      for (let x = 0; x < this.pages.length; x++) {
        if (this.pages[x]._id === pageId) {
          pages.splice(x, 1);
        }
      }
      res.json(pages);
    }
  }
