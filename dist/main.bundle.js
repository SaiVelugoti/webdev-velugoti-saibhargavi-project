webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: "<router-outlet></router-outlet>",
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_test_test_component__ = __webpack_require__("../../../../../src/app/components/test/test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_test_service_client__ = __webpack_require__("../../../../../src/app/services/test.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__component_name_component_name_component__ = __webpack_require__("../../../../../src/app/component-name/component-name.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_website_website_new_website_new_component__ = __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_website_website_edit_website_edit_component__ = __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_website_website_list_website_list_component__ = __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_page_page_new_page_new_component__ = __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_page_page_edit_page_edit_component__ = __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_page_page_list_page_list_component__ = __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_widget_widget_chooser_widget_chooser_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_widget_widget_edit_widget_edit_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_widget_widget_list_widget_list_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_widget_widget_edit_widget_header_widget_header_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_widget_widget_edit_widget_image_widget_image_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_widget_widget_edit_widget_youtube_widget_youtube_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        // Declare components here
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components_test_test_component__["a" /* TestComponent */],
            __WEBPACK_IMPORTED_MODULE_9__component_name_component_name_component__["a" /* ComponentNameComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_user_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_user_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_user_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_website_website_new_website_new_component__["a" /* WebsiteNewComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_website_website_list_website_list_component__["a" /* WebsiteListComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_page_page_new_page_new_component__["a" /* PageNewComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_page_page_edit_page_edit_component__["a" /* PageEditComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_page_page_list_page_list_component__["a" /* PageListComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_widget_widget_chooser_widget_chooser_component__["a" /* WidgetChooserComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_widget_widget_edit_widget_edit_component__["a" /* WidgetEditComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_widget_widget_list_widget_list_component__["a" /* WidgetListComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_widget_widget_edit_widget_header_widget_header_component__["a" /* WidgetHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_widget_widget_edit_widget_image_widget_image_component__["a" /* WidgetImageComponent */],
            __WEBPACK_IMPORTED_MODULE_24__components_widget_widget_edit_widget_youtube_widget_youtube_component__["a" /* WidgetYoutubeComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* Routing */]
        ],
        // Client Side services here
        providers: [__WEBPACK_IMPORTED_MODULE_8__services_test_service_client__["a" /* TestService */], __WEBPACK_IMPORTED_MODULE_25__services_user_service_client__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_26__services_website_service_client__["a" /* WebsiteService */], __WEBPACK_IMPORTED_MODULE_27__services_page_service_client__["a" /* PageService */], __WEBPACK_IMPORTED_MODULE_28__services_widget_service_client__["a" /* WidgetService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_test_test_component__ = __webpack_require__("../../../../../src/app/components/test/test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_website_website_list_website_list_component__ = __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_website_website_edit_website_edit_component__ = __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_page_page_new_page_new_component__ = __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_page_page_list_page_list_component__ = __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_website_website_new_website_new_component__ = __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_page_page_edit_page_edit_component__ = __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_widget_widget_list_widget_list_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_widget_widget_chooser_widget_chooser_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_widget_widget_edit_widget_edit_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts");














var APP_ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__components_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'test', component: __WEBPACK_IMPORTED_MODULE_1__components_test_test_component__["a" /* TestComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__components_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_3__components_user_register_register_component__["a" /* RegisterComponent */] },
    { path: 'user/:userId', component: __WEBPACK_IMPORTED_MODULE_4__components_user_profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'user/:userId/website', component: __WEBPACK_IMPORTED_MODULE_5__components_website_website_list_website_list_component__["a" /* WebsiteListComponent */] },
    { path: 'user/:userId/website/new', component: __WEBPACK_IMPORTED_MODULE_9__components_website_website_new_website_new_component__["a" /* WebsiteNewComponent */] },
    { path: 'user/:userId/website/:wid', component: __WEBPACK_IMPORTED_MODULE_6__components_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */] },
    { path: 'user/:userId/website/:wid/page', component: __WEBPACK_IMPORTED_MODULE_8__components_page_page_list_page_list_component__["a" /* PageListComponent */] },
    { path: 'user/:userId/website/:wid/page/new', component: __WEBPACK_IMPORTED_MODULE_7__components_page_page_new_page_new_component__["a" /* PageNewComponent */] },
    { path: 'user/:userId/website/:wid/page/:pid', component: __WEBPACK_IMPORTED_MODULE_10__components_page_page_edit_page_edit_component__["a" /* PageEditComponent */] },
    { path: 'user/:userId/website/:wid/page/:pid/widget', component: __WEBPACK_IMPORTED_MODULE_11__components_widget_widget_list_widget_list_component__["a" /* WidgetListComponent */] },
    { path: 'user/:userId/website/:wid/page/:pid/widget/new', component: __WEBPACK_IMPORTED_MODULE_12__components_widget_widget_chooser_widget_chooser_component__["a" /* WidgetChooserComponent */] },
    { path: 'user/:userId/website/:wid/page/:pid/widget/:wgid/:widtype', component: __WEBPACK_IMPORTED_MODULE_13__components_widget_widget_edit_widget_edit_component__["a" /* WidgetEditComponent */] }
];
// Export the routes as module providers
var Routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/component-name/component-name.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component-name/component-name.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  component-name works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/component-name/component-name.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentNameComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ComponentNameComponent = (function () {
    function ComponentNameComponent() {
    }
    ComponentNameComponent.prototype.ngOnInit = function () {
    };
    return ComponentNameComponent;
}());
ComponentNameComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-component-name',
        template: __webpack_require__("../../../../../src/app/component-name/component-name.component.html"),
        styles: [__webpack_require__("../../../../../src/app/component-name/component-name.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ComponentNameComponent);

//# sourceMappingURL=component-name.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n\n  <h1>\n    Angular 4 MEAN stack app\n  </h1>\n\n\n  <h3>\n    App works\n  </h3>\n\n\n  <h4>\n    <a href=\"test\">Test MongoDB</a>\n  </h4>\n\n  <h4>\n    <a [routerLink]=\"['/login']\">Assignement 3</a>\n  </h4>\n\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/page/page-edit/page-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page/page-edit/page-edit.component.html":
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-fixed-top bg-primary btnStyle\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header header-width header-fix\">\n      <p class=\"navbar-text pull-left p-fix\">\n        <a [routerLink]=\"['/user', userId, 'website', wid, 'page']\"\n           class=\"navbar-link glyphicon-color\">\n          <span class=\"glyphicon glyphicon-chevron-left\">\n          </span>\n        </a>\n      </p>\n\n      <span class=\"navbar-brand\">Edit Page</span>\n      <p class=\"navbar-text pull-right  p-right-fix\">\n        <a (click)= \"updatePage()\" class=\"navbar-link glyphicon-color\">\n          <!--<a [routerLink]=\"['/user', userId, 'website', wid, 'page']\"-->\n          <span class=\"glyphicon glyphicon-ok\">\n          </span>\n        </a>\n      </p>\n    </div>\n  </div>\n</nav>\n<form (ngSubmit) = \"updatePage()\" #f=\"ngForm\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-lg-3 visible-lg\">\n        <ul class=\"list-group\">\n          <li class=\"list-group-item active btnStyle\">\n            <div class=\"row\">\n              <div class=\"col-lg-9  visible-lg\">\n                Pages\n              </div>\n\n              <div class=\"col-xs-3\">\n                <a [routerLink]=\"['/user', userId, 'website', wid, 'page', 'new']\"\n                   class=\"glyphicon-color pull-right\">\n              <span class=\"glyphicon glyphicon-plus\">\n              </span>\n                </a>\n              </div>\n            </div>\n          </li>\n\n          <li class=\"list-group-item\"  *ngFor=\"let page of pages\">\n            <div class=\"row\">\n              <div class=\"col-lg-9  visible-lg\">\n                <a [routerLink]=\"['/user', userId, 'website', wid, 'page', pid, 'widget']\">\n                  {{page['name']}}\n                </a>\n              </div>\n\n              <div class=\"col-xs-3\">\n                <a [routerLink]=\"['/user', userId, 'website', wid, 'page', pid]\" >\n              <span class=\"glyphicon glyphicon-cog pull-right\">\n              </span>\n                </a>\n              </div>\n            </div>\n          </li>\n        </ul>\n      </div>\n\n      <div class=\"form-group\">\n        <div class=\"col-lg-9 col-xs-12\">\n          <div *ngIf=\"errorFlag\"\n               class=\"alert alert-danger\">\n            {{errorMsg}}\n          </div>\n          <label for=\"pageName\">Name</label>\n          <input [(ngModel)]=\"pageName\"\n                 placeholder={{pageName}}\n                 name=\"pageName\"\n                 type=\"text\"\n                 id=\"pageName\"\n                 class=\"form-control\"/>\n\n          <label for=\"description\">Description</label>\n          <input  [(ngModel)]=\"description\"\n                  placeholder={{description}}\n                  name=\"description\"\n                  type=\"text\"\n                  id=\"description\"\n                  class=\"form-control\"/>\n          <a [routerLink]=\"['/user', userId, 'website', wid, 'page']\"\n             class=\"btn btn-danger btn-block \">\n            Delete\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n</form>\n<nav class=\"navbar navbar-fixed-bottom bg-primary btnStyle\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/user', userId]\" class=\"navbar-link glyphicon-color\">\n        <span class=\"glyphicon glyphicon-user\">\n        </span>\n      </a>\n    </p>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-edit/page-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PageEditComponent = (function () {
    function PageEditComponent(router, activatedRoute, pageService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.pageService = pageService;
        this.pages = [{}];
    }
    PageEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['userId'];
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            _this.pages = _this.pageService.findPageByWebsiteId(_this.wid);
            _this.editpage = _this.pageService.findPageById(_this.pid);
            if (_this.editpage != null) {
                _this.pageName = _this.editpage['name'];
                _this.description = _this.editpage['description'];
            }
        });
    };
    PageEditComponent.prototype.updatePage = function () {
        if (this.pageName === '' || this.description === '') {
            this.errorMsg = 'Enter both name and description';
            this.errorFlag = true;
        }
        else {
            var page = {
                _id: this.pid,
                name: this.pageEditForm.value.pageName,
                websiteId: this.wid,
                description: this.pageEditForm.value.description
            };
            this.pageService.updatePage(this.pid, page);
            this.router.navigate(['/user/', this.userId, 'website', this.wid, 'page']);
        }
    };
    PageEditComponent.prototype.deletePage = function () {
        this.pageService.deletePage(this.pid);
        this.router.navigate(['/user/', this.userId, 'website', this.wid, 'page']);
    };
    return PageEditComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], PageEditComponent.prototype, "pageEditForm", void 0);
PageEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page-edit',
        template: __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_page_service_client__["a" /* PageService */]) === "function" && _d || Object])
], PageEditComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=page-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/page/page-list/page-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page/page-list/page-list.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top bg-primary btnStyle\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header header-width header-fix\">\n      <p class=\"navbar-text pull-left p-fix\">\n        <a [routerLink]=\"['/user', userId, 'website']\" class=\"navbar-link glyphicon-color\">\n        <span class=\"glyphicon glyphicon-chevron-left\">\n        </span>\n        </a>\n      </p>\n\n      <span class=\"navbar-brand\">Pages</span>\n      <p class=\"navbar-text pull-right  p-right-fix\">\n        <a [routerLink]=\"['/user', userId, 'website', wid, 'page', 'new']\" class=\"navbar-link glyphicon-color\">\n              <span class=\"glyphicon glyphicon-plus\">\n              </span>\n        </a>\n      </p>\n    </div>\n\n  </div>\n</nav>\n\n<div class=\"container-fluid\">\n  <ul class=\"list-group\">\n    <li class=\"list-group-item active btnStyle\">\n      <div class=\"row\">\n        <div class=\"col-lg-5 col-md-9 col-xs-9\">\n          Name\n        </div>\n\n        <div class=\"col-lg-4 visible-lg\">\n          Description\n        </div>\n\n        <div class=\"col-xs-3\">\n\n        </div>\n\n      </div>\n    </li>\n\n    <li class=\"list-group-item\" *ngFor=\"let page of pages\">\n      <div class=\"row\">\n        <div class=\"col-lg-5 col-md-9 col-xs-9\">\n          <a [routerLink]=\"['/user', userId, 'website', wid, 'page', page['_id'], 'widget']\">\n            {{page['name']}}\n          </a>\n        </div>\n\n        <div class=\"col-lg-4 visible-lg\">\n          {{page['description']}}\n        </div>\n\n        <div class=\"col-xs-3\">\n          <a [routerLink]=\"['/user', userId, 'website', wid, 'page', page['_id']]\">\n              <span class=\"glyphicon glyphicon-cog pull-right\">\n              </span>\n          </a>\n        </div>\n\n      </div>\n    </li>\n  </ul>\n</div>\n\n<nav class=\"navbar navbar-fixed-bottom bg-primary btnStyle\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/user', userId]\" class=\"navbar-link glyphicon-color\">\n              <span class=\"glyphicon glyphicon-user\">\n              </span>\n      </a>\n    </p>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-list/page-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PageListComponent = (function () {
    function PageListComponent(pageService, activatedRoute) {
        this.pageService = pageService;
        this.activatedRoute = activatedRoute;
        this.pages = [{}];
    }
    PageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['userId'];
            _this.wid = params['wid'];
            _this.pid = params['pid'];
        });
        this.pages = this.pageService.findPageByWebsiteId(this.wid);
    };
    return PageListComponent;
}());
PageListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page-list',
        template: __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__["a" /* PageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], PageListComponent);

var _a, _b;
//# sourceMappingURL=page-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/page/page-new/page-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page/page-new/page-new.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top bg-primary btnStyle\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header header-width header-fix\">\n      <p class=\"navbar-text pull-left p-fix\">\n        <a [routerLink]=\"['/user', userId, 'website', wid, 'page']\" class=\"navbar-link glyphicon-color\">\n              <span class=\"glyphicon glyphicon-chevron-left\">\n              </span>\n        </a>\n      </p>\n\n      <span class=\"navbar-brand\">New Page</span>\n      <p class=\"navbar-text pull-right p-right-fix\">\n        <a (click)=\"createPage()\" class=\"navbar-link glyphicon-color\">\n              <span class=\"glyphicon glyphicon-ok\">\n              </span>\n        </a>\n      </p>\n    </div>\n\n  </div>\n</nav>\n<form (ngSubmit) = \"createPage()\" #f=\"ngForm\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-lg-3 visible-lg\">\n        <ul class=\"list-group\">\n          <li class=\"list-group-item active btnStyle\">\n            <div class=\"row\">\n              <div class=\"col-lg-9  visible-lg\">\n                Pages\n              </div>\n\n              <div class=\"col-xs-3\">\n                <a [routerLink]=\"['/user', userId, 'website', wid, 'page', 'new']\" class=\"glyphicon-color pull-right\">\n              <span class=\"glyphicon glyphicon-plus\">\n              </span>\n                </a>\n              </div>\n\n            </div>\n          </li>\n\n          <li class=\"list-group-item\"  *ngFor=\"let page of pages\">\n            <div class=\"row\">\n              <div class=\"col-lg-9  visible-lg\">\n                <a [routerLink]=\"['/user', userId, 'website', wid, 'page', pid, 'widget']\">\n                  {{page['name']}}\n                </a>\n              </div>\n\n              <div class=\"col-xs-3\">\n                <a [routerLink]=\"['/user', userId, 'website', wid, 'page', pid]\" >\n              <span class=\"glyphicon glyphicon-cog pull-right\">\n              </span>\n                </a>\n              </div>\n            </div>\n          </li>\n        </ul>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"col-lg-9 col-xs-12\">\n          <div class=\"container-fluid\">\n            <div *ngIf=\"errorFlag\"\n                 class=\"alert alert-danger\">\n              {{errorMsg}}\n            </div>\n\n            <label for=\"pageName\">Name</label>\n            <input\n              placeholder=\"Page Name\"\n              name=\"pageName\"\n              type=\"text\"\n              id=\"pageName\"\n              class=\"form-control\"\n              ngModel\n              required\n              #pageName=\"ngModel\"/>\n            <span class=\"help-block\" *ngIf=\"!pageName.valid && pageName.touched\">\n            Please enter Page Name!\n            </span>\n\n            <label for=\"description\">Description</label>\n            <textarea\n              rows=\"5\"\n              name=\"description\"\n              id=\"description\"\n              class=\"form-control\"\n              ngModel\n              required\n              #description=\"ngModel\">{{description}}</textarea>\n            <span class=\"help-block\" *ngIf=\"!description.valid && description.touched\">\n            Please describe your page!\n            </span>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n\n  </form>\n      <nav class=\"navbar navbar-fixed-bottom bg-primary btnStyle\">\n        <div class=\"container-fluid\">\n          <p class=\"navbar-text pull-right\">\n            <a [routerLink]=\"['/user', userId]\" class=\"navbar-link glyphicon-color\">\n              <span class=\"glyphicon glyphicon-user\">\n              </span>\n            </a>\n          </p>\n        </div>\n      </nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-new/page-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PageNewComponent = (function () {
    function PageNewComponent(router, activatedRoute, pageService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.pageService = pageService;
        this.pages = [{}];
    }
    PageNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['userId'];
            _this.wid = params['wid'];
            _this.pages = _this.pageService.findPageByWebsiteId(_this.wid);
        });
    };
    PageNewComponent.prototype.createPage = function () {
        if (this.pageCreateForm.value.pageName === '' && this.pageCreateForm.value.description === '') {
            this.router.navigate(['/user/', this.userId, 'website', this.wid, 'page']);
        }
        else if (this.pageCreateForm.value.pageName !== '' && this.pageCreateForm.value.description !== '') {
            this.newPageId = Math.random().toString();
            var page = {
                _id: this.newPageId,
                name: this.pageCreateForm.value.pageName,
                websiteId: this.wid,
                description: this.pageCreateForm.value.webDescription
            };
            this.pageService.createPage(this.wid, page);
            this.router.navigate(['/user/', this.userId, 'website', this.wid, 'page']);
        }
        else {
            this.errorMsg = 'Enter both name and description';
            this.errorFlag = true;
        }
    };
    return PageNewComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], PageNewComponent.prototype, "pageCreateForm", void 0);
PageNewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page-new',
        template: __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_page_service_client__["a" /* PageService */]) === "function" && _d || Object])
], PageNewComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=page-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n\n  <h1>Test</h1>\n\n  <div *ngIf=\"alertMessage\"\n       class=\"alert alert-danger\">\n    \"Failed to create\"\n  </div>\n\n  <div *ngIf=\"successMessage\"\n       class=\"alert alert-success\">\n    \"Succesfully created/deleted\"\n  </div>\n\n  <table class=\"table\">\n    <thead>\n    <tr>\n      <th>Test Message</th>\n      <th>&nbsp;</th>\n    </tr>\n\n\n    <tr>\n      <td>\n        <input [(ngModel)]=\"message\"\n               placeholder=\"message\"\n               class=\"form-control\"/>\n      </td>\n\n\n      <td>\n        <button (click)=\"createMessage()\"\n                class=\"btn imary pull-right\">\n          <span class=\"glyphicon glyphicon-plus\"></span>\n        </button>\n      </td>\n    </tr>\n    </thead>\n\n\n    <tbody>\n    <tr *ngFor=\"let message of messages\">\n      <td>\n        {{message.message}}\n      </td>\n      <td>\n        <button (click)=\"deleteMessage(message._id)\"\n                class=\"btn btn-danger pull-right\">\n          <span class=\"glyphicon glyphicon-remove\"></span>\n        </button>\n      </td>\n    </tr>\n    </tbody>\n  </table>\n\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_test_service_client__ = __webpack_require__("../../../../../src/app/services/test.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TestComponent = (function () {
    function TestComponent(_testService) {
        this._testService = _testService;
        this.alertMessage = false;
        this.successMessage = false;
        this.messages = [];
    }
    TestComponent.prototype.ngOnInit = function () {
        this.findAllMessages();
    };
    TestComponent.prototype.findAllMessages = function () {
        var _this = this;
        return this._testService.findAllMessages()
            .subscribe(function (data) {
            _this.messages = data;
        });
    };
    TestComponent.prototype.createMessage = function () {
        var _this = this;
        return this._testService.createMessage(this.message)
            .subscribe(function (data) {
            _this.successMessage = true;
            _this.ngOnInit();
            _this.message = null;
        });
    };
    TestComponent.prototype.deleteMessage = function (messageId) {
        var _this = this;
        return this._testService.deleteMessage(messageId)
            .subscribe(function (data) {
            _this.successMessage = true;
            _this.ngOnInit();
        });
    };
    return TestComponent;
}());
TestComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-test',
        template: __webpack_require__("../../../../../src/app/components/test/test.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/test/test.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_test_service_client__["a" /* TestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_test_service_client__["a" /* TestService */]) === "function" && _a || Object])
], TestComponent);

var _a;
//# sourceMappingURL=test.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div *ngIf=\"errorFlag\"\n       class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n  <h1> Login </h1>\n  <form (ngSubmit) = \"login()\" #f=\"ngForm\">\n  <input placeholder=\"username\"\n         name=\"username\"\n         type=\"text\"\n         id=\"username\"\n         class=\"form-control\"\n         ngModel\n         required\n         #username=\"ngModel\"/>\n    <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">\n      Please enter username!\n    </span>\n  <input placeholder=\"password\"\n         name=\"password\"\n         type=\"password\"\n         id=\"password\"\n         class=\"form-control\"\n         ngModel\n         required\n         #password=\"ngModel\"/>\n    <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">\n      Please enter username!\n    </span>\n    <button class=\"btn btn-block bg-primary btnStyle\"\n            type=\"submit\"\n            [disabled]=\"!f.valid\">Login</button>\n\n    <button class=\"btn btn-block btn-success\"\n            type=\"button\"\n            [routerLink]=\"['/register']\">Register</button>\n\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.errorMsg = 'Invalid username or password !';
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.title = 'This is Login Page';
        this.disabledFlag = true;
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.username = this.loginForm.value.username;
        this.password = this.loginForm.value.password;
        this.userService.findUserByCredentials(this.username, this.password)
            .subscribe(function (user) {
            if ((user != null)) {
                _this.router.navigate(['/user/', user._id]);
            }
            else {
                _this.errorMsg = 'Invalid username or password !';
                _this.errorFlag = true;
            }
        });
    };
    return LoginComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], LoginComponent.prototype, "loginForm", void 0);
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/user/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top bg-primary \">\n  <div class=\"container-fluid btnStyle\">\n    <div class=\"navbar-header header-width header-fix\">\n\n      <span class=\"navbar-brand\">Profile</span>\n      <p class=\"navbar-text pull-right p-fix\">\n        <a (click)=\"updateUser()\" class=\"navbar-link glyphicon-color \">\n                <span class=\"glyphicon glyphicon-ok\">\n                </span>\n        </a>\n      </p>\n    </div>\n\n  </div>\n</nav>\n\n\n<div class=\"container-fluid\">\n  <label for=\"username\">Username</label>\n  <input [(ngModel)]=\"username\"\n         name=\"username\"\n         id=\"username\"\n         placeholder={{username}}\n         class=\"form-control\"\n         readonly>\n\n  <label for=\"firstName\">First Name</label>\n  <input [(ngModel)]=\"firstname\"\n         name=\"firstname\"\n         id=\"firstName\"\n         placeholder={{firstname}}\n         class=\"form-control\">\n\n  <label for=\"lastName\">Last Name</label>\n  <input [(ngModel)]=\"lastname\"\n         name=\"lastname\"\n         id=\"lastName\"\n         placeholder={{lastname}}\n         class=\"form-control\">\n\n  <a [routerLink]=\"['/user', userId, 'website']\" class=\"btn btn-block bg-primary btnStyle\">\n    Websites\n  </a>\n  <a [routerLink]=\"['/login']\" class=\"btn btn-block btn-danger\">\n    Logout\n  </a>\n</div>\n\n<nav class=\"navbar navbar-fixed-bottom bg-primary btnStyle\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/user', userId]\" class=\"navbar-link glyphicon-color\">\n                <span class=\"glyphicon glyphicon-user\">\n                </span>\n      </a>\n    </p>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(userService, activatedRoute) {
        this.userService = userService;
        this.activatedRoute = activatedRoute;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['userId'];
        });
        this.userService.findUserById(this.userId)
            .subscribe(function (user) {
            _this.user = user;
            _this.username = _this.user['username'];
            _this.firstname = _this.user['firstName'];
            _this.lastname = _this.user['lastName'];
        });
    };
    ProfileComponent.prototype.updateUser = function () {
        this.user['firstName'] = this.firstname;
        this.user['lastName'] = this.lastname;
        this.userService.updateUser(this.userId, this.user)
            .subscribe(function (user) { });
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/components/user/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], ProfileComponent);

var _a, _b;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div *ngIf=\"errorFlag\"\n       class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n  <h1> Register </h1>\n  <form (ngSubmit) = \"register()\" #f=\"ngForm\">\n\n      <input placeholder=\"username\"\n             name=\"username\"\n             type=\"text\"\n             id=\"username\"\n             class=\"form-control\"\n             ngModel\n             required\n             #username=\"ngModel\"/>\n      <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">\n      Please enter username!\n    </span>\n\n    <input placeholder=\"password\"\n           name=\"password\"\n           type=\"password\"\n           id=\"password\"\n           class=\"form-control\"\n           ngModel\n           required\n           #password=\"ngModel\"/>\n    <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">\n      Please enter password!\n    </span>\n    <input placeholder=\"verify password\"\n           name=\"verifyPassword\"\n           type=\"password\"\n           id=\"verifyPassword\"\n           class=\"form-control\"\n           ngModel\n           required\n           #verifyPassword=\"ngModel\"/>\n    <span class=\"help-block\" *ngIf=\"!verifyPassword.valid && verifyPassword.touched\">\n      Please verify password!\n    </span>\n    <span class=\"help-block\" *ngIf=\"password.value != verifyPassword.value\">\n      Passwords do not match\n    </span>\n\n    <button class=\"btn btn-block btnStyle bg-primary\"\n            type=\"submit\"\n            [disabled]=\"!f.valid\">Register</button>\n    <button class=\"btn btn-block btn-danger\"\n            type=\"button\"\n            [routerLink]=\"['/login']\">Cancel</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = (function () {
    function RegisterComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.errorMsg = 'Invalid username or password !';
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.errorFlag = false;
        this.username = '';
        this.password = '';
        this.verifyPassword = '';
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.username = this.registerForm.value.username;
        this.password = this.registerForm.value.password;
        this.verifyPassword = this.registerForm.value.verifyPassword;
        this.userService.findUserByUsername(this.username)
            .subscribe(function (user) {
            if (user !== null) {
                _this.errorMsg = 'User already exists!';
                _this.errorFlag = true;
            }
            else if (_this.verifyPassword === _this.password) {
                _this.newUserId = Math.random().toString();
                var newUser = {
                    _id: _this.newUserId,
                    username: _this.username,
                    password: _this.password,
                    firstName: '',
                    lastName: ''
                };
                _this.userService.createUser(newUser).subscribe(function (usernew) {
                    _this.router.navigate(['/user/', usernew._id]);
                });
            }
        });
    };
    return RegisterComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], RegisterComponent.prototype, "registerForm", void 0);
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/user/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], RegisterComponent);

var _a, _b, _c;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/website/website-edit/website-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/website/website-edit/website-edit.component.html":
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-fixed-top bg-primary btnStyle\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header header-width header-fix\">\n      <p class=\"navbar-text pull-left p-fix\">\n        <a [routerLink]=\"['/user', userId, 'website']\"\n           class=\"navbar-link glyphicon-color\">\n          <span class=\"glyphicon glyphicon-chevron-left\">\n          </span>\n        </a>\n      </p>\n\n      <span class=\"navbar-brand\">Edit Website</span>\n      <p class=\"navbar-text pull-right p-right-fix\">\n        <a (click)=\"updateWebsite()\" class=\"navbar-link glyphicon-color\">\n          <!--<a [routerLink]=\"['/user', userId, 'website']\"-->\n          <span class=\"glyphicon glyphicon-ok\">\n              </span>\n        </a>\n      </p>\n    </div>\n  </div>\n</nav>\n  <form (ngSubmit) = \"updateWebsite()\" #f=\"ngForm\">\n<div class=\"container-fluid \">\n  <div class=\"row\">\n    <div class=\"col-lg-3 visible-lg\">\n      <ul class=\"list-group\">\n        <li class=\"list-group-item active btnStyle\">\n          <div class=\"row\">\n            <div class=\"col-lg-9  visible-lg\">\n              Websites\n            </div>\n            <div class=\"col-xs-3\">\n              <a [routerLink]=\"['/user', userId, 'website', 'new']\"\n                 class=\"glyphicon-color pull-right\">\n              <span class=\"glyphicon glyphicon-plus\">\n              </span>\n              </a>\n            </div>\n\n          </div>\n        </li>\n\n        <li class=\"list-group-item\" *ngFor=\"let website of websites\">\n          <div class=\"row\">\n            <div class=\"col-lg-9  visible-lg\">\n              <a [routerLink]=\"['/user', userId, 'website', website['_id'], 'page']\">\n                {{website['name']}}\n              </a>\n            </div>\n\n            <div class=\"col-xs-3\">\n              <a [routerLink]=\"['/user', userId, 'website', website['_id']]\" >\n              <span class=\"glyphicon glyphicon-cog pull-right\">\n              </span>\n              </a>\n            </div>\n          </div>\n        </li>\n      </ul>\n    </div>\n\n    <div class=\"form-group\">\n    <div class=\"col-xs-12 col-lg-9 form-group\">\n      <div class=\"container-fluid\">\n        <div *ngIf=\"errorFlag\"\n             class=\"alert alert-danger\">\n          {{errorMsg}}\n        </div>\n      <label for=\"websiteName\">Name</label>\n      <input [(ngModel)]=\"websiteName\"\n             placeholder={{websiteName}}\n             name=\"websiteName\"\n             type=\"text\"\n             id=\"websiteName\"\n             class=\"form-control\"/>\n      <!--<span class=\"help-block\" *ngIf=\"!websiteName.valid && websiteName.touched\">-->\n      <!--Please enter Website Name!-->\n    <!--</span>-->\n      <label for=\"webDescription\">Description</label>\n      <textarea\n        [(ngModel)]=\"webDescription\"\n        rows=\"5\"\n        name=\"webDescription\"\n        id=\"webDescription\"\n        class=\"form-control\"\n        ngModel\n        required>{{webDescription}}</textarea>\n      <!--<span class=\"help-block\" *ngIf=\"!webDescription.valid && webDescription.touched\">-->\n      <!--Please describe your website!-->\n    <!--</span>-->\n      <button class=\"btn btn-danger btn-block \"\n              (click)='deleteWebsite()'>Delete\n      </button>\n    </div>\n    </div>\n\n    </div>\n  </div>\n</div>\n  </form>\n<nav class=\"navbar navbar-fixed-bottom bg-primary btnStyle\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/user', userId]\" class=\"navbar-link glyphicon-color\">\n              <span class=\"glyphicon glyphicon-user\">\n              </span>\n      </a>\n    </p>\n  </div>\n</nav>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-edit/website-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WebsiteEditComponent = (function () {
    function WebsiteEditComponent(router, activatedRoute, websiteService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.websiteService = websiteService;
        this.websites = [{}];
    }
    WebsiteEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['userId'];
            _this.websiteId = params['websiteId'];
            // this.websites = this.websiteService.findWebsitesByUser(this.userId);
            _this.websiteService.findWebsiteById(_this.websiteId).subscribe(function (website) {
                _this.websiteName = _this.editweb['name'];
                _this.webDescription = _this.editweb['description'];
            });
        });
    };
    WebsiteEditComponent.prototype.updateWebsite = function () {
        var _this = this;
        if (this.websiteName === '' || this.webDescription === '') {
            this.errorMsg = 'Enter both name and description';
            this.errorFlag = true;
        }
        else {
            var web = {
                _id: this.websiteId,
                name: this.webEditForm.value.websiteName,
                developerId: this.userId,
                description: this.webEditForm.value.webDescription
            };
            this.websiteService.updateWebsite(this.websiteId, web).subscribe(function (website) {
                _this.router.navigate(['/user/', _this.userId, 'website']);
            });
        }
    };
    WebsiteEditComponent.prototype.deleteWebsite = function () {
        var _this = this;
        this.websiteService.deleteWebsite(this.websiteId).subscribe(function (website) {
            _this.router.navigate(['/user', _this.userId, 'website']);
        });
    };
    return WebsiteEditComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], WebsiteEditComponent.prototype, "webEditForm", void 0);
WebsiteEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-website-edit',
        template: __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__["a" /* WebsiteService */]) === "function" && _d || Object])
], WebsiteEditComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=website-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top bg-primary btnStyle\">\n  <div class=\"container-fluid\">\n\n    <div class=\"navbar-header header-width header-fix\">\n      <p class=\"navbar-text pull-left p-fix\">\n        <a [routerLink]=\"['/user/', userId]\" class=\"navbar-link glyphicon-color\">\n              <span class=\"glyphicon glyphicon-chevron-left\">\n              </span>\n        </a>\n      </p>\n      <span class=\"navbar-brand glyphicon-color\">Websites</span>\n\n      <p class=\"navbar-text pull-right p-right-fix\">\n        <a [routerLink]=\"['/user', userId, 'website', 'new']\" class=\"navbar-link glyphicon-color\">\n              <span class=\"glyphicon glyphicon-plus\">\n              </span>\n        </a>\n      </p>\n    </div>\n  </div>\n</nav>\n\n<div class=\"container-fluid\">\n  <ul class=\"list-group\">\n    <li class=\"list-group-item active btnStyle\">\n      <div class=\"row\">\n        <div class=\"col-lg-5 col-md-9 col-xs-9\">\n          Name\n        </div>\n\n        <div class=\"col-lg-4 visible-lg\">\n          Description\n        </div>\n\n        <div class=\"col-xs-3\">\n\n        </div>\n\n      </div>\n    </li>\n\n\n    <li class=\"list-group-item\" *ngFor=\"let website of websites\">\n      <div class=\"row\">\n        <div class=\"col-lg-5 col-md-9 col-xs-9\">\n          <a [routerLink]=\"['/user', userId, 'website', website['_id'], 'page']\">\n            {{website['name']}}\n          </a>\n        </div>\n        <div class=\"col-lg-4 visible-lg\">\n          {{website['description']}}\n        </div>\n\n        <div class=\"col-xs-3\">\n          <a [routerLink]=\"['/user', userId, 'website', website['_id']]\" >\n              <span class=\"glyphicon glyphicon-cog pull-right\">\n              </span>\n          </a>\n        </div>\n\n      </div>\n    </li>\n     </ul>\n</div>\n\n<nav class=\"navbar navbar-fixed-bottom bg-primary btnStyle\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/user', userId]\" class=\"navbar-link glyphicon-color\">\n              <span class=\"glyphicon glyphicon-user\">\n              </span>\n      </a>\n    </p>\n  </div>\n\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WebsiteListComponent = (function () {
    function WebsiteListComponent(websiteService, activatedRoute) {
        this.websiteService = websiteService;
        this.activatedRoute = activatedRoute;
        this.websites = [{}];
    }
    WebsiteListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['userId'];
            _this.websiteService.findWebsitesByUser(_this.userId).subscribe(function (list) {
                _this.websites = list;
            });
        });
    };
    return WebsiteListComponent;
}());
WebsiteListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-website-list',
        template: __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.css")]
    })
    // export class WebsiteListComponent implements OnInit {
    //   userId: string;
    //   websites = [{}];
    //   user = {};
    //   constructor(private websiteService: WebsiteService, private userService: UserService, private activatedRoute: ActivatedRoute) { }
    //
    //   ngOnInit() {
    //     this.activatedRoute.params
    //       .subscribe(
    //         (params: any) => {
    //           this.userId = params['userId'];
    //         });
    //           this.websiteService.findWebsitesByUser(this.userId)
    //             .subscribe((websites: any) => {
    //               this.websites = websites;
    //             });
    //     this.user = this.userService.findUserById(this.userId);
    //   }
    // }
    ,
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], WebsiteListComponent);

var _a, _b;
//# sourceMappingURL=website-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top bg-primary btnStyle\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header  header-width header-fix\">\n      <p class=\"navbar-text pull-left p-fix\">\n        <a [routerLink]=\"['/user', userId, 'website']\" class=\"navbar-link glyphicon-color\">\n              <span class=\"glyphicon glyphicon-chevron-left\">\n              </span>\n        </a>\n      </p>\n\n      <span class=\"navbar-brand\">New Website</span>\n      <p class=\"navbar-text pull-right p-right-fix\">\n        <a (click)=\"createWebsite()\" class=\"navbar-link glyphicon-color\">\n              <span class=\"glyphicon glyphicon-ok\">\n              </span>\n        </a>\n      </p>\n    </div>\n\n  </div>\n</nav>\n\n<form (ngSubmit) = \"createWebsite()\" #f=\"ngForm\">\n  <div class=\"container-fluid \">\n    <div class=\"row\">\n      <div class=\"col-lg-3 visible-lg\">\n        <ul class=\"list-group\">\n          <li class=\"list-group-item active btnStyle\">\n            <div class=\"row\">\n              <div class=\"col-lg-9  visible-lg\">\n                Websites\n              </div>\n              <div class=\"col-xs-3\">\n                <a [routerLink]=\"['/user', userId, 'website', 'new']\"class=\"glyphicon-color pull-right\">\n              <span class=\"glyphicon glyphicon-plus\">\n              </span>\n                </a>\n              </div>\n\n            </div>\n          </li>\n\n          <li class=\"list-group-item\" *ngFor=\"let website of websites\">\n            <div class=\"row\">\n              <div class=\"col-lg-9  visible-lg\">\n                <a [routerLink]=\"['/user', userId, 'website', website['_id'], 'page']\">\n                  {{website['name']}}\n                </a>\n              </div>\n\n              <div class=\"col-xs-3\">\n                <a [routerLink]=\"['/user', userId, 'website', website['_id']]\" >\n              <span class=\"glyphicon glyphicon-cog pull-right\">\n              </span>\n                </a>\n              </div>\n            </div>\n          </li>\n        </ul>\n      </div>\n\n      <div class=\"form-group\">\n        <div class=\"col-xs-12 col-lg-9\">\n          <div class=\"container-fluid\">\n            <div *ngIf=\"errorFlag\"\n                 class=\"alert alert-danger\">\n              {{errorMsg}}\n            </div>\n            <label for=\"websiteName\">Name</label>\n            <input placeholder=\"Website Name\"\n                   name=\"websiteName\"\n                   type=\"text\"\n                   id=\"websiteName\"\n                   class=\"form-control\"\n            ngModel\n            required\n            #websiteName=\"ngModel\"/>\n            <span class=\"help-block\" *ngIf=\"!websiteName.valid && websiteName.touched\">\n            Please enter Website Name!\n            </span>\n            <label for=\"webDescription\">Description</label>\n            <textarea\n              rows=\"5\"\n              name=\"webDescription\"\n              id=\"webDescription\"\n              class=\"form-control\"\n              ngModel\n              required\n            #webDescription=\"ngModel\">{{webDescription}}</textarea>\n            <span class=\"help-block\" *ngIf=\"!webDescription.valid && webDescription.touched\">\n            Please describe your website!\n            </span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</form>\n<nav class=\"navbar navbar-fixed-bottom btnStyle\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/user', userId]\" class=\"navbar-link glyphicon-color\">\n              <span class=\"glyphicon glyphicon-user\">\n              </span>\n      </a>\n    </p>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WebsiteNewComponent = (function () {
    function WebsiteNewComponent(router, activatedRoute, websiteService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.websiteService = websiteService;
        this.websites = [{}];
    }
    WebsiteNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['userId'];
            //  this.websites = this.websiteService.findWebsitesByUser(this.userId);
        });
    };
    // createWebsite() {
    //   this.webname = this.submitForm.value.webname;
    //   this.description = this.submitForm.value.description;
    //   const tempSite = {_id: '000', name: this.webname, developerId: this.userId, description: this.description};
    //   this.websiteService.createWebsite(this.userId, tempSite).subscribe((site: any) => {
    //     this.router.navigate(['/user', this.userId, 'website']);
    //   });
    // }
    WebsiteNewComponent.prototype.createWebsite = function () {
        var _this = this;
        if (this.webCreateForm.value.websiteName === '' && this.webCreateForm.value.webDescription === '') {
            this.router.navigate(['/user/', this.userId, 'website']);
        }
        else if (this.webCreateForm.value.websiteName !== '' && this.webCreateForm.value.webDescription !== '') {
            this.newWebId = Math.random().toString();
            var web = {
                _id: this.newWebId,
                name: this.webCreateForm.value.websiteName,
                developerId: this.userId,
                description: this.webCreateForm.value.webDescription
            };
            this.websiteService.createWebsite(this.userId, web).subscribe(function (site) {
                _this.router.navigate(['/user/', _this.userId, 'website']);
            });
        }
        else {
            this.errorMsg = 'Enter both name and description';
            this.errorFlag = true;
        }
    };
    return WebsiteNewComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], WebsiteNewComponent.prototype, "webCreateForm", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */]) === "function" && _b || Object)
], WebsiteNewComponent.prototype, "webeditForm", void 0);
WebsiteNewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-website-new',
        template: __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__["a" /* WebsiteService */]) === "function" && _e || Object])
], WebsiteNewComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=website-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top bg-primary btnStyle\">\n  <div class=\"container-fluid btnStyle\">\n    <div class=\"navbar-header header-width header-fix\">\n      <p class=\"navbar-text pull-left p-fix\">\n        <a [routerLink]=\"['/user', userId, 'website', wid, 'page', pid, 'widget']\" class=\"navbar-link glyphicon-color\">\n              <span class=\"glyphicon glyphicon-chevron-left\">\n              </span>\n        </a>\n      </p>\n\n      <span class=\"navbar-brand\">Choose Widget</span>\n      <p class=\"navbar-text pull-right p-right-fix\">\n        <a [routerLink]=\"['/user', userId, 'website', wid, 'page', pid, 'widget']\" class=\"navbar-link glyphicon-color\">\n\n        </a>\n      </p>\n    </div>\n\n  </div>\n</nav>\n\n\n<div class=\"container-fluid\">\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\"><a [routerLink]=\"['/user', userId, 'website', wid, 'page', pid, 'widget', newWid, 'HEADING']\">Heading</a></li>\n    <li class=\"list-group-item\"><a [routerLink]=\"['/user', userId, 'website', wid, 'page', pid, 'widget', newWid, 'IMAGE']\">Image</a></li>\n    <li class=\"list-group-item\"><a [routerLink]=\"['/user', userId, 'website', wid, 'page', pid, 'widget', newWid, 'YOUTUBE']\">YouTube</a></li>\n\n  </ul>\n</div>\n\n<nav class=\"navbar navbar-fixed-bottom bg-primary btnStyle\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/user', userId]\" class=\"navbar-link glyphicon-color\">\n              <span class=\"glyphicon glyphicon-user\">\n              </span>\n      </a>\n    </p>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetChooserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetChooserComponent = (function () {
    function WidgetChooserComponent(widgetService, activatedRoute) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.widgets = [{}];
    }
    WidgetChooserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['userId'];
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            _this.wgid = params['wgid'];
            _this.widgets = _this.widgetService.findWidgetsByPageId(_this.pid);
            _this.newWid = Math.random();
        });
    };
    return WidgetChooserComponent;
}());
WidgetChooserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-chooser',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], WidgetChooserComponent);

var _a, _b;
//# sourceMappingURL=widget-chooser.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"updateWidget()\" #f=\"ngForm\">\n    <div class=\"col-sm-4 hidden-xs vertical-line\">\n      <app-widget-chooser></app-widget-chooser>\n\n    </div>\n    <div class=\"col-sm-8\">\n      <div [ngSwitch]=\"widtype\">\n\n        <div *ngSwitchCase=\"'HEADING'\">\n          <app-widget-header></app-widget-header>\n        </div>\n\n        <div *ngSwitchCase=\"'IMAGE'\">\n          <app-widget-image></app-widget-image>\n        </div>\n\n        <div *ngSwitchCase=\"'YOUTUBE'\">\n          <app-widget-youtube></app-widget-youtube>\n        </div>\n\n      </div>\n      <div *ngIf=\"widgetExists\">\n      <button class=\"btn btn-danger btn-block \"\n              (click)='deleteWidget()'>Delete\n      </button>\n      </div>\n    </div>\n</form>\n\n\n<nav class=\"navbar navbar-fixed-bottom bg-primary btnStyle\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/user', userId]\" class=\"navbar-link glyphicon-color\">\n              <span class=\"glyphicon glyphicon-user\">\n              </span>\n      </a>\n    </p>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetEditComponent = (function () {
    function WidgetEditComponent(activatedRoute, widgetService, router) {
        this.activatedRoute = activatedRoute;
        this.widgetService = widgetService;
        this.router = router;
    }
    WidgetEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['userId'];
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            _this.wgid = params['wgid'];
            _this.widtype = params['widtype'];
            _this.widget = _this.widgetService.findWidgetById(_this.wgid);
            if (_this.widget !== null) {
                _this.widgetExists = true;
            }
        });
    };
    WidgetEditComponent.prototype.updateWidget = function () {
        this.widgetService.updateWidget(this.wgid, this.widget);
        this.router.navigate(['/user', this.userId, 'website', this.wid, 'page', this.pid, 'widget']);
    };
    WidgetEditComponent.prototype.deleteWidget = function () {
        this.widgetService.deleteWidget(this.wgid);
        this.router.navigate(['/user', this.userId, 'website', this.wid, 'page', this.pid, 'widget']);
    };
    return WidgetEditComponent;
}());
WidgetEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-edit',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], WidgetEditComponent);

var _a, _b, _c;
//# sourceMappingURL=widget-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top bg-primary btnStyle\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header header-width header-fix\">\n      <p class=\"navbar-text pull-left p-fix\">\n        <a [routerLink]=\"['/user', userId, 'website', wid, 'page', pid, 'widget', 'new']\" class=\"navbar-link glyphicon-color\">\n              <span class=\"glyphicon glyphicon-chevron-left\">\n              </span>\n        </a>\n      </p>\n\n      <span class=\"navbar-brand\">Widget Edit</span>\n      <p class=\"navbar-text pull-right p-right-fix\">\n        <a (click) = \"createEditHeader()\" class=\"navbar-link glyphicon-color\">\n              <span class=\"glyphicon glyphicon-ok\">\n              </span>\n          <!--<a [routerLink]=\"['/user', userId, 'website', wid, 'page', pid, 'widget']\" class=\"navbar-link glyphicon-color\">-->\n        </a>\n      </p>\n    </div>\n\n  </div>\n</nav>\n\n\n<div class=\"container-fluid\">\n  <div *ngIf=\"errorFlag\"\n       class=\"alert alert-danger\">\n    {{errMsg}}\n  </div>\n  <div class=\"form-group\">\n  <label for=\"widText\">Text</label>\n  <input [(ngModel)]=\"widText\"\n          placeholder={{widText}}\n          type=\"text\"\n         id=\"widText\"\n         name=\"widText\"\n         class=\"form-control\"\n         />\n  <label for=\"size\">Size</label>\n  <input  [(ngModel)]=\"size\"\n          placeholder={{size}}\n          type=\"text\"\n          id=\"size\"\n          name=\"size\"\n          class=\"form-control\"\n          />\n\n  <!--<a [routerLink]=\"['/user', userId, 'website', wid, 'page', pid, 'widget', wgid]\" class=\"btn btn-danger btn-block \">-->\n    <!--Delete-->\n  <!--</a>-->\n  </div>\n</div>\n\n<nav class=\"navbar navbar-fixed-bottom bg-primary btnStyle\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/user', userId]\" class=\"navbar-link glyphicon-color\">\n              <span class=\"glyphicon glyphicon-user\">\n              </span>\n      </a>\n    </p>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetHeaderComponent = (function () {
    function WidgetHeaderComponent(widgetService, activatedRoute, router) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    WidgetHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.errorFlag = false;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['userId'];
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            _this.wgid = params['wgid'];
            _this.widtype = params['widtype'];
            _this.widgetRet = _this.widgetService.findWidgetById(_this.wgid);
            if (_this.widgetRet !== null) {
                _this.widText = _this.widgetRet['text'];
                _this.size = _this.widgetRet['size'];
            }
            else {
                _this.widText = '';
                _this.size = '';
            }
        });
    };
    WidgetHeaderComponent.prototype.createEditHeader = function () {
        if (this.widText === '' || this.size === '') {
            this.errMsg = 'Enter all values';
            this.errorFlag = true;
        }
        else if (this.widgetRet !== null) {
            if (this.widText !== this.widgetRet['text'] || this.size !== this.widgetRet['size']) {
                var newId = Math.random().toString();
                this.widgetNew = { _id: newId, widgetType: 'HEADING', pageId: this.pid, size: this.size, text: this.widText };
                this.widgetService.createWidget(this.pid, this.widgetNew);
            }
            else {
                this.widgetNew = { _id: this.wid, widgetType: 'HEADING', pageId: this.pid, size: this.size, text: this.widText };
                this.widgetService.updateWidget(this.wid, this.widgetNew);
            }
        }
        else {
            var newId = Math.random().toString();
            this.widgetNew = { _id: newId, widgetType: 'HEADING', pageId: this.pid, size: this.size, text: this.widText };
            this.widgetService.createWidget(this.pid, this.widgetNew);
        }
        this.router.navigate(['/user', this.userId, 'website', this.wid, 'page', this.pid, 'widget']);
    };
    return WidgetHeaderComponent;
}());
WidgetHeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-header',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], WidgetHeaderComponent);

var _a, _b, _c;
//# sourceMappingURL=widget-header.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top bg-primary btnStyle\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header header-width header-fix\">\n      <p class=\"navbar-text pull-left p-fix\">\n        <a [routerLink]=\"['/user', userId, 'website', wid, 'page', pid, 'widget']\"\n           class=\"navbar-link glyphicon-color\">\n              <span class=\"glyphicon glyphicon-chevron-left\">\n              </span>\n        </a>\n      </p>\n\n      <span class=\"navbar-brand\">Widget Edit</span>\n      <p class=\"navbar-text pull-right p-right-fix\">\n        <a (click)=\"createEditImage()\"\n           class=\"navbar-link glyphicon-color\">\n              <span class=\"glyphicon glyphicon-ok\">\n              </span>\n        </a>\n      </p>\n    </div>\n\n  </div>\n</nav>\n\n\n<form (ngSubmit) = \"createEditImage()\" #f=\"ngForm\">\n  <div class=\"container-fluid\">\n    <div *ngIf=\"errorFlag\"\n         class=\"alert alert-danger\">\n      {{errMsg}}\n    </div>\n    <div class=\"form-group\">\n      <label for=\"name\">Name</label>\n      <input  [(ngModel)]=\"name\"\n              placeholder={{name}}\n              type=\"text\"\n              id=\"name\"\n              name=\"name\"\n              class=\"form-control\"\n      />\n      <label for=\"url\">URL</label>\n      <input  [(ngModel)]=\"url\"\n              placeholder={{url}}\n              type=\"text\"\n              id=\"url\"\n              name=\"url\"\n              class=\"form-control\"\n      />\n      <label for=\"width\">Width</label>\n      <input  [(ngModel)]=\"width\"\n              placeholder={{width}}\n              type=\"text\"\n              id=\"width\"\n              name=\"width\"\n              class=\"form-control\"\n      />\n\n      <label for=\"upload\">Upload</label>\n      <input type=\"file\"\n             id=\"upload\"\n             name=\"page-title\"\n             class=\"form-control\"\n             placeholder=\"Widget Upload\">\n\n      <button class=\"btn btn-block btnStyle bg-primary\"\n              type=\"submit\"\n              [disabled]=\"!f.valid\">Upload Image</button>\n    </div>\n    </div>\n  <!--<a [routerLink]=\"['/user', userId, 'website', wid, 'page', pid, 'widget']\" class=\"btn btn-danger btn-block \">-->\n    <!--Delete-->\n  <!--</a>-->\n</form>\n<nav class=\"navbar navbar-fixed-bottom bg-primary btnStyle\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/user', userId]\" class=\"navbar-link glyphicon-color\">\n              <span class=\"glyphicon glyphicon-user\">\n              </span>\n      </a>\n    </p>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetImageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetImageComponent = (function () {
    function WidgetImageComponent(widgetService, activatedRoute, router) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    WidgetImageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.errorFlag = false;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['userId'];
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            _this.wgid = params['wgid'];
            _this.widtype = params['widtype'];
            _this.widgetRet = _this.widgetService.findWidgetById(_this.wgid);
            if (_this.widgetRet !== null) {
                _this.width = _this.widgetRet['width'];
                _this.url = _this.widgetRet['url'];
                _this.name = _this.widgetRet['name'];
            }
            else {
                _this.url = '';
                _this.name = '';
                _this.width = '';
            }
        });
    };
    WidgetImageComponent.prototype.createEditImage = function () {
        if (this.name === '' || this.width === '' || this.url === '') {
            this.errMsg = 'Enter all values';
            this.errorFlag = true;
        }
        else if (this.widgetRet !== null) {
            if (this.name !== this.widgetRet['name']) {
                // || this.width !== this.widgetRet['width'] || this.url !== this.widgetRet['url']) {
                var newId = Math.random().toString();
                this.widgetNew = { _id: newId, widgetType: 'IMAGE', pageId: this.pid, width: this.imgForm.value.width,
                    url: this.imgForm.value.url, name: this.imgForm.value.name };
                this.widgetService.createWidget(this.pid, this.widgetNew);
            }
            else {
                this.widgetNew = { _id: this.wid, widgetType: 'IMAGE', pageId: this.pid, width: this.imgForm.value.width,
                    url: this.imgForm.value.url, name: this.imgForm.value.name };
                this.widgetService.updateWidget(this.wid, this.widgetNew);
            }
        }
        else {
            var newId = Math.random().toString();
            this.widgetNew = {
                _id: newId, widgetType: 'IMAGE', pageId: this.pid, width: this.imgForm.value.width,
                url: this.imgForm.value.url, name: this.imgForm.value.name
            };
            this.widgetService.createWidget(this.pid, this.widgetNew);
        }
        this.router.navigate(['/user', this.userId, 'website', this.wid, 'page', this.pid, 'widget']);
    };
    return WidgetImageComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], WidgetImageComponent.prototype, "imgForm", void 0);
WidgetImageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-image',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_widget_service_client__["a" /* WidgetService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object])
], WidgetImageComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=widget-image.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top bg-primary btnStyle\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header header-width header-fix\">\n      <p class=\"navbar-text pull-left p-fix\">\n        <a [routerLink]=\"['/user', userId, 'website', wid, 'page', pid, 'widget']\" class=\"navbar-link glyphicon-color\">\n              <span class=\"glyphicon glyphicon-chevron-left\">\n              </span>\n        </a>\n      </p>\n\n      <span class=\"navbar-brand\">Widget Edit</span>\n      <p class=\"navbar-text pull-right p-right-fix\">\n        <a (click)=\"createEditYoutube()\" class=\"navbar-link glyphicon-color\">\n              <span class=\"glyphicon glyphicon-ok\">\n              </span>\n        </a>\n      </p>\n    </div>\n\n  </div>\n</nav>\n\n\n<form (ngSubmit) = \"createEditYoutube()\" #f=\"ngForm\">\n<div class=\"container-fluid\">\n\n  <label for=\"name\">Name</label>\n  <input  [(ngModel)]=\"name\"\n          placeholder={{name}}\n          type=\"text\"\n          id=\"name\"\n          name=\"name\"\n          class=\"form-control\"\n  />\n  <label for=\"url\">URL</label>\n  <input  [(ngModel)]=\"url\"\n          placeholder={{url}}\n          type=\"text\"\n          id=\"url\"\n          name=\"url\"\n          class=\"form-control\"\n  />\n  <label for=\"width\">Width</label>\n  <input  [(ngModel)]=\"width\"\n          placeholder={{width}}\n          type=\"text\"\n          id=\"width\"\n          name=\"width\"\n          class=\"form-control\"/>\n</div>\n</form>\n\n<nav class=\"navbar navbar-fixed-bottom btnStyle\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/user', userId]\" class=\"navbar-link glyphicon-color\">\n              <span class=\"glyphicon glyphicon-user\">\n              </span>\n      </a>\n    </p>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetYoutubeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetYoutubeComponent = (function () {
    function WidgetYoutubeComponent(widgetService, activatedRoute, router) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    WidgetYoutubeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.errorFlag = false;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['userId'];
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            _this.wgid = params['wgid'];
            _this.widtype = params['widtype'];
            _this.widgetRet = _this.widgetService.findWidgetById(_this.wgid);
            if (_this.widgetRet !== null) {
                _this.url = _this.widgetRet['url'];
                _this.name = _this.widgetRet['name'];
                _this.width = _this.widgetRet['width'];
            }
            else {
                _this.url = '';
                _this.name = '';
                _this.width = '';
            }
        });
    };
    WidgetYoutubeComponent.prototype.createEditYoutube = function () {
        if (this.name === '' || this.width === '' || this.url === '') {
            this.errMsg = 'Enter all values';
            this.errorFlag = true;
        }
        else if (this.widgetRet !== null) {
            if (this.name !== this.widgetRet['name'] || this.width !== this.widgetRet['width'] || this.url !== this.widgetRet['url']) {
                var newId = Math.random().toString();
                this.widgetNew = { _id: newId, widgetType: 'YOUTUBE', pageId: this.pid, width: this.ytForm.value.width,
                    url: this.ytForm.value.url, name: this.ytForm.value.name };
                this.widgetService.createWidget(this.pid, this.widgetNew);
            }
            else {
                this.widgetNew = { _id: this.wid, widgetType: 'YOUTUBE', pageId: this.pid, width: this.ytForm.value.width,
                    url: this.ytForm.value.url, name: this.ytForm.value.name };
                this.widgetService.updateWidget(this.wid, this.widgetNew);
            }
        }
        else {
            var newId = Math.random().toString();
            this.widgetNew = { _id: newId, widgetType: 'YOUTUBE', pageId: this.pid, width: this.ytForm.value.width,
                url: this.ytForm.value.url, name: this.ytForm.value.name };
            this.widgetService.createWidget(this.pid, this.widgetNew);
        }
        this.router.navigate(['/user', this.userId, 'website', this.wid, 'page', this.pid, 'widget']);
    };
    return WidgetYoutubeComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], WidgetYoutubeComponent.prototype, "ytForm", void 0);
WidgetYoutubeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-youtube',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_widget_service_client__["a" /* WidgetService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object])
], WidgetYoutubeComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=widget-youtube.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.html":
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-fixed-top bg-primary btnStyle\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header header-width header-fix\">\n      <p class=\"navbar-text pull-left p-fix\">\n        <a [routerLink]=\"['/user', userId, 'website', wid, 'page']\" class=\"navbar-link glyphicon-color\">\n              <span class=\"glyphicon glyphicon-chevron-left\">\n              </span>\n        </a>\n      </p>\n\n      <span class=\"navbar-brand\">Widgets</span>\n      <p class=\"navbar-text pull-right p-right-fix \">\n        <a [routerLink]=\"['/user', userId, 'website', wid, 'page', pid, 'widget', 'new']\" class=\"navbar-link glyphicon-color\">\n              <span class=\"glyphicon glyphicon-plus\">\n              </span>\n        </a>\n      </p>\n    </div>\n\n  </div>\n</nav>\n\n<div class=\"container-fluid\">\n\n  <div *ngFor=\"let widget of widgets\" class=\"widget-container wd-widget\">\n    <div class=\"wd-widget\">\n      <div class=\"wd-widget-toolbar\">\n        <a [routerLink]=\"['/user', userId, 'website', wid, 'page', pid, 'widget', widget['_id'], widget['widgetType']]\">\n          <span class=\"glyphicon glyphicon-cog\"></span>\n        </a>\n        <span class=\"glyphicon glyphicon-align-justify\"></span>\n      </div>\n    </div>\n\n\n    <div [ngSwitch]=\"widget['widgetType']\">\n      <div *ngSwitchCase=\"'HEADING'\">\n        <div [ngSwitch]=\"widget['size']\">\n          <div *ngSwitchCase=\"'1'\">\n            <h1>{{widget['text']}}</h1>\n          </div>\n          <div *ngSwitchCase=\"'2'\">\n            <h2>{{widget['text']}}</h2>\n          </div>\n          <div *ngSwitchCase=\"'3'\">\n            <h3>{{widget['text']}}</h3>\n          </div>\n          <div *ngSwitchCase=\"'4'\">\n            <h4>{{widget['text']}}</h4>\n          </div>\n        </div>\n\n      </div>\n\n      <div *ngSwitchCase=\"'YOUTUBE'\">\n        <div class=\"wd-widget\">\n          <div class=\"video-container\">\n            <iframe [style.width]=\"widget['width']\" [src]=\"cleanURL(widget['url'])\" frameborder=\"0\" allowfullscreen></iframe>\n            <div class=\"wd-widget-toolbar toolbar-youtube-position\">\n              <a [routerLink]=\"['/user', userId, 'website', wid, 'page', pid, 'widget', widget['_id'], widget['widgetType']]\">\n                <span class=\"glyphicon glyphicon-cog\"></span>\n              </a>\n              <span class=\"glyphicon glyphicon-align-justify\"></span>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div *ngSwitchCase=\"'IMAGE'\">\n        <div class=\"wd-widget\">\n          <div class=\"wd-widget-toolbar\">\n            <a [routerLink]=\"['/user', userId, 'website', wid, 'page', pid, 'widget', widget['_id'], widget['widgetType']]\">\n            <span class=\"glyphicon glyphicon-cog\"></span>\n            </a>\n            <span class=\"glyphicon glyphicon-align-justify\"></span>\n          </div>\n          <img src=\"{{widget['url']}}\" [style.width]=\"widget['width']\"/>\n        </div>\n    </div>\n\n      <div *ngSwitchCase=\"'HTML'\">\n        <div class=\"wd-widget\">\n          <div class=\"wd-widget-toolbar\">\n            <a [routerLink]=\"['/user', userId, 'website', wid, 'page', pid, 'widget', widget['_id'], widget['widgetType']]\">\n              <span class=\"glyphicon glyphicon-cog\"></span>\n            </a>\n            <span class=\"glyphicon glyphicon-align-justify\"></span>\n          </div>\n          {{widget['text']}}\n        </div>\n\n      </div>\n\n  </div>\n</div>\n</div>\n<nav class=\"navbar navbar-fixed-bottom bg-primary btnStyle\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/user', userId]\" class=\"navbar-link glyphicon-color\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetListComponent = (function () {
    function WidgetListComponent(widgetService, activatedRoute, domSanitizer) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.domSanitizer = domSanitizer;
        this.widgets = [{}];
    }
    WidgetListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['userId'];
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            _this.widgets = _this.widgetService.findWidgetsByPageId(_this.pid);
        });
    };
    WidgetListComponent.prototype.cleanURL = function (url) {
        return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
    };
    WidgetListComponent.prototype.assignWidth = function (width) {
        this.widWidth = width;
    };
    return WidgetListComponent;
}());
WidgetListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-list',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _c || Object])
], WidgetListComponent);

var _a, _b, _c;
//# sourceMappingURL=widget-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/page.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageService = (function () {
    function PageService() {
        this.pages = [
            { '_id': '321', 'name': 'Post 1', 'websiteId': '890', 'description': 'Lorem' },
            { '_id': '432', 'name': 'Post 2', 'websiteId': '890', 'description': 'Lorem' },
            { '_id': '543', 'name': 'Post 3', 'websiteId': '567', 'description': 'Lorem' }
        ];
        this.api = {
            'createPage': this.createPage,
            'findPageByWebsiteId': this.findPageByWebsiteId,
            'findPageById': this.findPageById,
            'updatePage': this.updatePage,
            'deletePage': this.deletePage
        };
    }
    PageService.prototype.createPage = function (websiteId, page) {
        page.websiteID = websiteId;
        this.pages.push(page);
    };
    PageService.prototype.findPageByWebsiteId = function (websiteId) {
        var pagesByThisWebsiteId = [];
        for (var x = 0; x < this.pages.length; x++) {
            if (this.pages[x].websiteId === websiteId) {
                pagesByThisWebsiteId.push(this.pages[x]);
            }
        }
        return pagesByThisWebsiteId;
    };
    PageService.prototype.findPageById = function (pageId) {
        for (var x = 0; x < this.pages.length; x++) {
            if (this.pages[x]._id === pageId) {
                return this.pages[x];
            }
        }
        return null;
    };
    PageService.prototype.updatePage = function (pageId, page) {
        for (var x = 0; x < this.pages.length; x++) {
            if (this.pages[x]._id === pageId) {
                this.pages[x]._id = page;
            }
        }
    };
    PageService.prototype.deletePage = function (pageId) {
        for (var x = 0; x < this.pages.length; x++) {
            if (this.pages[x]._id === pageId) {
                this.pages.splice(x, 1);
            }
        }
    };
    return PageService;
}());
PageService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], PageService);

//# sourceMappingURL=page.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/test.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TestService = (function () {
    function TestService(_http) {
        this._http = _http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    TestService.prototype.findAllMessages = function () {
        console.log(this.baseUrl);
        return this._http.get(this.baseUrl + '/api/test')
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    TestService.prototype.createMessage = function (message) {
        var obj = {
            message: message
        };
        return this._http.post(this.baseUrl + '/api/test', obj)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    TestService.prototype.deleteMessage = function (messageId) {
        return this._http.delete(this.baseUrl + '/api/test/' + messageId)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    return TestService;
}());
TestService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], TestService);

var _a;
//# sourceMappingURL=test.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/user.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = (function () {
    function UserService(_http) {
        this._http = _http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    UserService.prototype.findUsers = function () {
        var url = this.baseUrl + '/api/users/';
        return this._http.get(url).map(function (response) { });
    };
    // users = [
    //   {_id: '123', username: 'alice', password: 'alice', firstName: 'Alice', lastName: 'Wonder'},
    //   {_id: '234', username: 'bob', password: 'bob', firstName: 'Bob', lastName: 'Marley'},
    //   {_id: '345', username: 'charly', password: 'charly', firstName: 'Charly', lastName: 'Garcia'},
    //   {_id: '456', username: 'jannunzi', password: 'jannunzi', firstName: 'Jose', lastName: 'Annunzi'}
    // ];
    // api = {
    //   'createUser': this.createUser,
    //   'findUserById': this.findUserById,
    //   'findUserByUsername': this.findUserByUsername,
    //   'updateUser': this.updateUser,
    //   'deleteUser': this.deleteUser,
    //   'findUserByCredentials' : this.findUserByCredentials
    // };
    // app.post("/api/user", createUser);
    // app.get("/api/user?username=username", findUserByUsername);
    // app.get("/api/user?username=username&password=password", findUserByCredentials);
    // app.get("/api/user", findUsers);
    // app.get("/api/user/:userId", findUserById);
    // app.put("/api/user/:userId", updateUser);
    // app.delete("/api/user/:userId", deleteUser);
    UserService.prototype.createUser = function (user) {
        var url = this.baseUrl + '/api/user/';
        return this._http.post(url, user)
            .map(function (response) {
            return response.json();
        });
        // this.users.push(user);
        // return user;
    };
    UserService.prototype.findUserById = function (userId) {
        var url = this.baseUrl + '/api/user/' + userId;
        //    alert(url);
        return this._http.get(url)
            .map(function (response) {
            return response.json();
        });
        // for (let x = 0; x < this.users.length; x++) {
        //   if (this.users[x]._id === userId) {
        //     return this.users[x];
        //   }
        // }
        // return null;
    };
    UserService.prototype.findUserByUsername = function (username) {
        var url = this.baseUrl + '/api/user?username=' + username;
        return this._http.get(url)
            .map(function (response) {
            return response.json();
        });
        // for (let x = 0; x < this.users.length; x++) {
        //   if (this.users[x].username === username) {
        //     return this.users[x];
        //   }
        // }
        // return null;
    };
    UserService.prototype.updateUser = function (userId, user) {
        user.id = userId;
        var url = this.baseUrl + '/api/user/' + userId;
        return this._http.put(url, user)
            .map(function (response) {
            return response.json();
        });
        // for (let x = 0; x < this.users.length; x++) {
        //   if (this.users[x]._id === userId) {
        //     this.users[x] = user;
        //   }
        // }
    };
    UserService.prototype.deleteUser = function (userId) {
        var url = this.baseUrl + '/api/user/' + userId;
        return this._http.delete(url)
            .map(function (response) {
            return response.json();
        });
        // for (let x = 0; x < this.users.length; x++) {
        //   if (this.users[x]._id === userId) {
        //     this.users.splice(x, 1);
        //   }
        // }
    };
    UserService.prototype.findUserByCredentials = function (username, password) {
        var url = this.baseUrl + '/api/user?username=' + username + '&password=' + password;
        return this._http.get(url)
            .map(function (response) {
            return response.json();
        });
        // for (let x = 0; x < this.users.length; x++) {
        //   if (this.users[x].username === username && this.users[x].password === password) {
        //     return this.users[x];
        //   }
        // }
        // return null;
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/website.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WebsiteService = (function () {
    function WebsiteService(_http) {
        this._http = _http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
        this.api = {
            'createWebsite': this.createWebsite,
            'findWebsitesByUser': this.findWebsitesByUser,
            'findWebsiteById': this.findWebsiteById,
            'updateWebsite': this.updateWebsite,
            'deleteWebsite': this.deleteWebsite
        };
    }
    WebsiteService.prototype.createWebsite = function (userId, website) {
        var url = this.baseUrl + '/api/user/' + userId + '/website';
        return this._http.post(url, website).map(function (response) {
            return response.json();
        });
    };
    WebsiteService.prototype.findWebsitesByUser = function (userId) {
        var url = this.baseUrl + '/api/user/' + userId + '/website';
        alert('hey ');
        alert(url);
        return this._http.get(url).map(function (response) {
            return response.json();
        });
    };
    WebsiteService.prototype.findWebsiteById = function (websiteId) {
        var url = this.baseUrl + '/api/' + websiteId;
        return this._http.get(url).map(function (response) {
            return response.json();
        });
    };
    WebsiteService.prototype.updateWebsite = function (websiteId, website) {
        var url = this.baseUrl + websiteId;
        return this._http.put(url, website).map(function (response) {
            return response.json();
        });
    };
    WebsiteService.prototype.deleteWebsite = function (websiteId) {
        var url = this.baseUrl + websiteId;
        return this._http.delete(url).map(function (response) {
            return response.json();
        });
    };
    return WebsiteService;
}());
WebsiteService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], WebsiteService);

var _a;
//# sourceMappingURL=website.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/widget.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WidgetService = (function () {
    function WidgetService() {
        this.widgets = [
            { '_id': '123', 'widgetType': 'HEADING', 'pageId': '321', 'size': 2, 'text': 'GIZMODO' },
            { '_id': '234', 'widgetType': 'HEADING', 'pageId': '321', 'size': 4, 'text': 'Lorem ipsum' },
            { '_id': '345', 'widgetType': 'IMAGE', 'pageId': '321', 'width': '100%', 'url': 'http://lorempixel.com/400/200/', 'name': 'Image1' },
            { '_id': '456', 'widgetType': 'HTML', 'pageId': '321', 'text': '<p>Lorem ipsum</p>' },
            { '_id': '567', 'widgetType': 'HEADING', 'pageId': '321', 'size': 4, 'text': 'Lorem ipsum' },
            { '_id': '678', 'widgetType': 'YOUTUBE', 'pageId': '321', 'width': '100%',
                'url': 'https://www.youtube.com/embed/mu5vRI13bGc', 'name': 'uTube1' },
            // 'url': 'https://youtube/AM2Ivdi9c4E'},
            { '_id': '789', 'widgetType': 'HTML', 'pageId': '321', 'text': '<p>Lorem ipsum</p>' }
        ];
        this.api = {
            'createWidget': this.createWidget,
            'findWidgetsByPageId': this.findWidgetsByPageId,
            'findWidgetById': this.findWidgetById,
            'updateWidget': this.updateWidget,
            'deleteWidget': this.deleteWidget
        };
    }
    WidgetService.prototype.createWidget = function (pageId, widget) {
        widget.pageId = pageId;
        this.widgets.push(widget);
    };
    WidgetService.prototype.findWidgetsByPageId = function (pageId) {
        var widgetsByPageId = [];
        for (var x = 0; x < this.widgets.length; x++) {
            if (this.widgets[x].pageId === pageId) {
                widgetsByPageId.push(this.widgets[x]);
            }
        }
        return widgetsByPageId;
    };
    WidgetService.prototype.findWidgetById = function (widgetId) {
        for (var x = 0; x < this.widgets.length; x++) {
            if (this.widgets[x]._id === widgetId) {
                return this.widgets[x];
            }
        }
        return null;
    };
    WidgetService.prototype.updateWidget = function (widgetId, widget) {
        for (var x = 0; x < this.widgets.length; x++) {
            if (this.widgets[x]._id === widgetId) {
                this.widgets[x] = widget;
            }
        }
    };
    WidgetService.prototype.deleteWidget = function (widgetId) {
        for (var x = 0; x < this.widgets.length; x++) {
            if (this.widgets[x]._id === widgetId) {
                this.widgets.splice(x, 1);
            }
        }
    };
    return WidgetService;
}());
WidgetService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], WidgetService);

//# sourceMappingURL=widget.service.client.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    baseUrl: ''
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map