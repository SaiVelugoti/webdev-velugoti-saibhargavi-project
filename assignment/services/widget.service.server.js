module.exports = function (app) {

  // var multer = require('multer');
  // var upload = multer({ dest: __dirname +'/../../src/assets/uploads'});

  app.post("/api/page/:pageId/widget", createWidget);
  app.get("/api/page/:pageId/widget", findAllWidgetsForPage);
  app.get("/api/widget/:widgetId", findWidgetById);
  app.put("/api/widget/:widgetId", updateWidget);
  app.delete("/api/widget/:widgetId", deleteWidget);
 // app.post("/api/upload", upload.single('myFile'), uploadImage);

  var widgetModel = require("../model/widget/widget.model.server")
  widgets = [
    { '_id': '123', 'widgetType': 'HEADING', 'pageId': '321', 'size': 2, 'text': 'GIZMODO'},
    { '_id': '234', 'widgetType': 'HEADING', 'pageId': '321', 'size': 4, 'text': 'Lorem ipsum'},
    { '_id': '345', 'widgetType': 'IMAGE', 'pageId': '321', 'width': '100%', 'url': 'http://lorempixel.com/400/200/', 'name': 'Image1'},
    { '_id': '456', 'widgetType': 'HTML', 'pageId': '321', 'text': '<p>Lorem ipsum</p>'},
    { '_id': '567', 'widgetType': 'HEADING', 'pageId': '321', 'size': 4, 'text': 'Lorem ipsum'},
    { '_id': '678', 'widgetType': 'YOUTUBE', 'pageId': '321', 'width': '100%',
      'url': 'https://www.youtube.com/embed/mu5vRI13bGc', 'name': 'uTube1' },
    { '_id': '789', 'widgetType': 'HTML', 'pageId': '321', 'text': '<p>Lorem ipsum</p>'}
  ];

  api = {
    'createWidget': this.createWidget,
    'findAllWidgetsForPage': this.findAllWidgetsForPage,
    'findWidgetById': this.findWidgetById,
    'updateWidget': this.updateWidget,
    'deleteWidget': this.deleteWidget
  };

  function createWidget(req, res){
    var widget = req.body;
    //widget.pageId = req.params['pageId'];
    var pageId = req.params['pageId'];
    widgetModel.createWidget(pageId, widget)
      .then(function (newWidget) {
        widgetModel.findAllWidgetsForPage(pageId)
          .then(function (widgets) {
            res.json(widgets);
          });
      });
    // this.widgets.push(widget);
    // res.json(widgets);
  }

  function findAllWidgetsForPage(req, res) {
    var pageId = req.params['pageId'];
    var widgetsByPageId = [];
    widgetModel.findAllWidgetsForPage(pageId)
      .then(function (widgetsByPageId) {
        res.json(widgetsByPageId);
      })
    // for (let x = 0; x < widgets.length; x++) {
    //   if (widgets[x].pageId === pageId) {
    //     widgetsByPageId.push(widgets[x]);
    //   }
    // }
    // res.json(widgetsByPageId);
  }

  function findWidgetById(req, res) {
    var widgetId = req.params['widgetId'];
    var widget;
    widgetModel.findWidgetById(widgetId)
      .then(function (widget) {
        res.json(widget);
      })
    // for (let x = 0; x < widgets.length; x++) {
    //   if (widgets[x]._id === widgetId) {
    //     widget = widgets[x];
    //   }
    // }
    // if (widget){
    //   res.json(widget);
    // } else {
    //   res.json(null);
    // }
  }

  function updateWidget(req, res) {
    var widget = req.body;
    var widgetId = req.params['widgetId'];
    widgetModel.updateWidget(widgetId, widget)
      .then(function (widgets) {
        res.json(widgets);
      })
    // for (let x = 0; x < this.widgets.length; x++) {
    //   if (this.widgets[x]._id === widgetId) {
    //     this.widgets[x] = widget;
    //   }
    // }
    // res.json(widgets);
  }

  function deleteWidget(req, res) {
    var widgetId = req.params['widgetId'];
    widgetModel.deleteWidget(widgetId)
      .then(function (widgets) {
        res.json(widgets);
      })
    // for (let x = 0; x < this.widgets.length; x++) {
    //   if (this.widgets[x]._id === widgetId) {
    //     this.widgets.splice(x, 1);
    //   }
    // }
    // res.json(widgets);
  }

  // function uploadImage(req, res) {
  //   var widgetId = req.body.widgetId;
  //   var width = req.body.width;
  //   var myFile = req.file;
  //
  //   var userId = req.body.userId;
  //   var websiteId = req.body.websiteId;
  //   var pageId = req.body.pageId;
  //
  //   var originalname = myFile.originalname;
  //   var filename = myFile.filename;
  //   var path = myFile.path;
  //   var destination = myFile.destination;
  //   var size = myFile.size;
  //   var mimetype = myFile.mimetype;
  //
  //   var widget = getWidgetById(widgetId);
  //   console.log('hey its me' + filename);
  //
  //   widget.url = 'assets/uploads/' + filename;
  //   widget.width = width;
  //
  //
  //     for (let x = 0; x < this.widgets.length; x++) {
  //       if (this.widgets[x]._id === widgetId) {
  //         this.widgets[x] = widget;
  //       }
  //   }
  //
  //   var callbackUrl = '/user/' + userId + '/website/' + websiteId + '/page/' + pageId + '/widget';
  //   res.redirect(callbackUrl);
  // }
  function getWidgetById(widgetId){
    for (let x = 0; x < widgets.length; x++) {
      if (widgets[x]._id === widgetId) {
        return widgets[x];
      }
    }
  }

}
