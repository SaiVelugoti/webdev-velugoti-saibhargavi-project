var mongoose = require("mongoose");
var WidgetSchema = require("./widget.schema.server");
var WidgetModel = mongoose.model("WidgetModel", WidgetSchema);

WidgetModel.createWidget = createWidget;
WidgetModel.findAllWidgetsForPage = findAllWidgetsForPage;
WidgetModel.findWidgetById = findWidgetById;
WidgetModel.updateWidget = updateWidget;
WidgetModel.deleteWidget = deleteWidget;
WidgetModel.reorderWidget = reorderWidget;

module.exports = WidgetModel;

function createWidget(pageId, widget){
  "use strict";

}
function findAllWidgetsForPage(pageId){
  "use strict";

}
function findWidgetById(widgetId){
  "use strict";

}
function updateWidget(widgetId, widget){
  "use strict";

}
function deleteWidget(widgetId){
  "use strict";

}
function reorderWidget(pageId, start, end){
  "use strict";

}
