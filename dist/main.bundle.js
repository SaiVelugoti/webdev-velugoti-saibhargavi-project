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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_quill_editor__ = __webpack_require__("../../../../ngx-quill-editor/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_test_test_component__ = __webpack_require__("../../../../../src/app/components/test/test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_test_service_client__ = __webpack_require__("../../../../../src/app/services/test.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__component_name_component_name_component__ = __webpack_require__("../../../../../src/app/component-name/component-name.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_event_search_event_search_component__ = __webpack_require__("../../../../../src/app/components/event-search/event-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_event_search_service_client__ = __webpack_require__("../../../../../src/app/services/event-search.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_event_details_event_details_component__ = __webpack_require__("../../../../../src/app/components/event-details/event-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_manage_user_manage_user_component__ = __webpack_require__("../../../../../src/app/components/manage-user/manage-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_event_comment_event_comment_component__ = __webpack_require__("../../../../../src/app/components/event-comment/event-comment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_comment_service_client__ = __webpack_require__("../../../../../src/app/services/comment.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_other_user_dashboard_other_user_dashboard_component__ = __webpack_require__("../../../../../src/app/components/other-user-dashboard/other-user-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_manage_events_manage_events_component__ = __webpack_require__("../../../../../src/app/components/manage-events/manage-events.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_add_event_add_event_component__ = __webpack_require__("../../../../../src/app/components/add-event/add-event.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_edit_event_edit_event_component__ = __webpack_require__("../../../../../src/app/components/edit-event/edit-event.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services_manage_event_service_client__ = __webpack_require__("../../../../../src/app/services/manage-event.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_flickr_search_flickr_search_component__ = __webpack_require__("../../../../../src/app/components/flickr-search/flickr-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__services_flickr_service_client__ = __webpack_require__("../../../../../src/app/services/flickr.service.client.ts");
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
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_test_test_component__["a" /* TestComponent */],
            __WEBPACK_IMPORTED_MODULE_10__component_name_component_name_component__["a" /* ComponentNameComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_user_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_user_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_user_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_event_search_event_search_component__["a" /* EventSearchComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_event_details_event_details_component__["a" /* EventDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_manage_user_manage_user_component__["a" /* ManageUserComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_event_comment_event_comment_component__["a" /* EventCommentComponent */],
            __WEBPACK_IMPORTED_MODULE_24__components_other_user_dashboard_other_user_dashboard_component__["a" /* OtherUserDashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_25__components_manage_events_manage_events_component__["a" /* ManageEventsComponent */],
            __WEBPACK_IMPORTED_MODULE_26__components_add_event_add_event_component__["a" /* AddEventComponent */],
            __WEBPACK_IMPORTED_MODULE_27__components_edit_event_edit_event_component__["a" /* EditEventComponent */],
            __WEBPACK_IMPORTED_MODULE_29__components_flickr_search_flickr_search_component__["a" /* FlickrSearchComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_quill_editor__["a" /* QuillEditorModule */],
            __WEBPACK_IMPORTED_MODULE_6__app_routing__["a" /* Routing */]
        ],
        // Client Side services here
        providers: [
            __WEBPACK_IMPORTED_MODULE_9__services_test_service_client__["a" /* TestService */],
            __WEBPACK_IMPORTED_MODULE_14__services_user_service_client__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_15__services_shared_service_client__["a" /* SharedService */],
            __WEBPACK_IMPORTED_MODULE_18__services_event_search_service_client__["a" /* EventSearchService */],
            __WEBPACK_IMPORTED_MODULE_23__services_comment_service_client__["a" /* CommentService */],
            __WEBPACK_IMPORTED_MODULE_16__services_auth_guard_service__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_28__services_manage_event_service_client__["a" /* ManageEventService */],
            __WEBPACK_IMPORTED_MODULE_30__services_flickr_service_client__["a" /* FlickrService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_event_search_event_search_component__ = __webpack_require__("../../../../../src/app/components/event-search/event-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_event_details_event_details_component__ = __webpack_require__("../../../../../src/app/components/event-details/event-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_manage_user_manage_user_component__ = __webpack_require__("../../../../../src/app/components/manage-user/manage-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_event_comment_event_comment_component__ = __webpack_require__("../../../../../src/app/components/event-comment/event-comment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_other_user_dashboard_other_user_dashboard_component__ = __webpack_require__("../../../../../src/app/components/other-user-dashboard/other-user-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_manage_events_manage_events_component__ = __webpack_require__("../../../../../src/app/components/manage-events/manage-events.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_add_event_add_event_component__ = __webpack_require__("../../../../../src/app/components/add-event/add-event.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_flickr_search_flickr_search_component__ = __webpack_require__("../../../../../src/app/components/flickr-search/flickr-search.component.ts");















var APP_ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_6__components_event_search_event_search_component__["a" /* EventSearchComponent */] },
    { path: 'eventSearchAnonymous', component: __WEBPACK_IMPORTED_MODULE_6__components_event_search_event_search_component__["a" /* EventSearchComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_6__components_event_search_event_search_component__["a" /* EventSearchComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'test', component: __WEBPACK_IMPORTED_MODULE_1__components_test_test_component__["a" /* TestComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__components_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_3__components_user_register_register_component__["a" /* RegisterComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_4__components_user_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__services_auth_guard_service__["a" /* AuthGuard */]] },
    // { path : 'eventDetails/:id', component: EventDetailsComponent, canActivate: [AuthGuard]},
    { path: 'eventDetails/:id', component: __WEBPACK_IMPORTED_MODULE_7__components_event_details_event_details_component__["a" /* EventDetailsComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_8__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'manageUsers', component: __WEBPACK_IMPORTED_MODULE_9__components_manage_user_manage_user_component__["a" /* ManageUserComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'eventSearch', component: __WEBPACK_IMPORTED_MODULE_6__components_event_search_event_search_component__["a" /* EventSearchComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'comments/:interestedEvent', component: __WEBPACK_IMPORTED_MODULE_10__components_event_comment_event_comment_component__["a" /* EventCommentComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'detailsManager/:eventId', component: __WEBPACK_IMPORTED_MODULE_10__components_event_comment_event_comment_component__["a" /* EventCommentComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'otherUser/:id', component: __WEBPACK_IMPORTED_MODULE_11__components_other_user_dashboard_other_user_dashboard_component__["a" /* OtherUserDashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'manageEvents', component: __WEBPACK_IMPORTED_MODULE_12__components_manage_events_manage_events_component__["a" /* ManageEventsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'addEvent', component: __WEBPACK_IMPORTED_MODULE_13__components_add_event_add_event_component__["a" /* AddEventComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'flickrSearch', component: __WEBPACK_IMPORTED_MODULE_14__components_flickr_search_flickr_search_component__["a" /* FlickrSearchComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'addingImage/:url', component: __WEBPACK_IMPORTED_MODULE_13__components_add_event_add_event_component__["a" /* AddEventComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__services_auth_guard_service__["a" /* AuthGuard */]] }
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

/***/ "../../../../../src/app/components/add-event/add-event.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/add-event/add-event.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top bg-primary btnStyle\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header header-width header-fix\">\n      <p class=\"navbar-text pull-left p-fix\">\n        <a [routerLink]=\"['/manageEvents']\"\n           class=\"navbar-link glyphicon-color\">\n              <span class=\"glyphicon glyphicon-chevron-left\">\n              </span>\n        </a>\n      </p>\n\n      <span class=\"navbar-brand\">Add Event</span>\n      <p class=\"navbar-text pull-right p-right-fix glyphicon-color\">\n\n        <a [routerLink]=\"['/dashboard']\">\n      <span class=\"glyphicon glyphicon-color\">Dashboard\n      </span>\n        </a>\n        <a (click)=\"logout()\">\n      <span class=\"glyphicon glyphicon-log-out glyphicon-color\">\n      </span>\n        </a>\n      </p>\n    </div>\n\n  </div>\n</nav>\n\n\n<form (ngSubmit)=\"addEvent()\" #f=\"ngForm\">\n  <div class=\"container-fluid\">\n    <div *ngIf=\"successFlag\"\n         class=\"alert alert-success\">\n      {{successMsg}}\n    </div>\n    <div *ngIf=\"errorFlag\"\n         class=\"alert alert-danger\">\n      {{errMsg}}\n    </div>\n    <div class=\"form-group\">\n\n      <label for=\"eventName\">Name</label>\n      <input [(ngModel)]=\"eventName\"\n             placeholder=\"Grad Meet-up\"\n             value={{eventName}}\n             type=\"text\"\n             id=\"eventName\"\n             name=\"eventName\"\n             class=\"form-control\"\n      />\n      <label for=\"description\">Description</label>\n      <textarea [(ngModel)]=\"description\"\n                rows=\"6\"\n                placeholder=\"Come, Meet your fellow Huskies.!\"\n                value={{description}}\n                type=\"text\"\n                id=\"description\"\n                name=\"description\"\n                class=\"form-control\">{{description}}</textarea>\n\n      <label for=\"eventLocation\">Happening At</label>\n      <input [(ngModel)]=\"eventLocation\"\n             placeholder=\"Boston\"\n             value={{eventLocation}}\n             type=\"text\"\n             id=\"eventLocation\"\n             name=\"eventLocation\"\n             class=\"form-control\"\n      />\n\n      <label for=\"eventUrl\">Event Link</label>\n      <input [(ngModel)]=\"eventUrl\"\n             placeholder=\"https://www.eventbrite.com/d/ma--boston/events/\"\n             value={{eventUrl}}\n             type=\"text\"\n             id=\"eventUrl\"\n             name=\"eventUrl\"\n             class=\"form-control\"\n      />\n\n      <label for=\"imgSrc\">Image Link</label>\n      <input [(ngModel)]=\"imgSrc\"\n             placeholder=\"https://solarsystem.nasa.gov/images/galleries/soho-300.jpg\"\n             value={{imgSrc}}\n             type=\"text\"\n             id=\"imgSrc\"\n             name=\"imgSrc\"\n             class=\"form-control\"\n      />\n      <div class=\"input-group\">\n        <span class=\"input-group-btn\">\n          <a class=\"btn btn-primary btn-block\"\n             (click)=\"flickrSearch()\">\n            Search Flickr</a>\n        </span>\n      </div>\n      <div class=\"btn btn-block\"></div>\n\n      <button class=\"btn btn-block btnStyle bg-primary\"\n              type=\"submit\">\n        Create\n      </button>\n\n      <br/>\n    </div>\n  </div>\n\n</form>\n<nav class=\"navbar navbar-fixed-bottom bg-primary btnStyle\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/profile']\" class=\"navbar-link glyphicon-color\">\n              <span class=\"glyphicon glyphicon-user\">\n              </span>\n      </a>\n    </p>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/add-event/add-event.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddEventComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_manage_event_service_client__ = __webpack_require__("../../../../../src/app/services/manage-event.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AddEventComponent = (function () {
    function AddEventComponent(activatedRoute, router, sharedService, manageEventService, userService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.sharedService = sharedService;
        this.manageEventService = manageEventService;
        this.userService = userService;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    AddEventComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.errorFlag = false;
        this.eventName = '';
        this.description = '';
        this.eventLocation = '';
        this.imgSrc = '';
        this.eventUrl = '';
        this.user = this.sharedService.user;
        this.activatedRoute.params
            .subscribe(function (params) {
            if (params['url'] !== undefined) {
                _this.imgSrc = params['url'];
            }
        });
    };
    AddEventComponent.prototype.flickrSearch = function () {
        this.router.navigate(['/flickrSearch']);
    };
    AddEventComponent.prototype.addEvent = function () {
        var _this = this;
        if (this.eventName === '') {
            this.errMsg = 'Enter Name of the event';
            this.errorFlag = true;
        }
        else if (this.description === '' ||
            this.eventLocation === '') {
            this.errMsg = 'Enter both description and location';
            this.errorFlag = true;
        }
        var newEvent = {
            title: this.eventForm.value.eventName,
            description: this.eventForm.value.description,
            address: this.eventForm.value.eventLocation,
            imgSrc: this.eventForm.value.imgSrc,
            url: this.eventForm.value.eventUrl,
            createdBy: this.user['_id']
        };
        console.log(newEvent);
        this.manageEventService.addEvent(newEvent)
            .subscribe(function (event) {
            _this.successFlag = true;
            _this.successMsg = 'Event created successfully';
            _this.eventForm.reset();
            var newEventId = event['_id'];
            _this.manageEventService.updateNewEvent(newEventId)
                .subscribe(function (event1) {
            });
        });
    };
    AddEventComponent.prototype.logout = function () {
        var _this = this;
        this.userService.logout().subscribe(function (user) {
            _this.router.navigate(['/login']);
        });
    };
    return AddEventComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], AddEventComponent.prototype, "eventForm", void 0);
AddEventComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-add-event',
        template: __webpack_require__("../../../../../src/app/components/add-event/add-event.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/add-event/add-event.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__["a" /* SharedService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_manage_event_service_client__["a" /* ManageEventService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_manage_event_service_client__["a" /* ManageEventService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_user_service_client__["a" /* UserService */]) === "function" && _f || Object])
], AddEventComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=add-event.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top bg-primary btnStyle\">\n  <div class=\"container-fluid\">\n\n    <div class=\"navbar-header header-width header-fix\">\n      <p class=\"navbar-text pull-left p-fix\">\n        <!--<a [routerLink]=\"['/dashboard']\" class=\"navbar-link glyphicon-color\">-->\n        <!--<span class=\"glyphicon glyphicon-chevron-left\">-->\n        <!--</span>-->\n        <!--</a>-->\n      </p>\n      <span class=\"navbar-brand glyphicon-color\">Dashboard</span>\n\n      <p class=\"navbar-text pull-right p-right-fix\">\n\n        <a (click)=\"logout()\" class=\"navbar-link glyphicon-color\">\n      <span class=\"glyphicon glyphicon-log-out\">\n      </span> &nbsp;\n        </a>\n      </p>\n    </div>\n  </div>\n</nav>\n\n<div class=\"container-fluid\">\n  <div class=\"container-fluid\">\n    <div *ngIf=\"isAdmin\">\n      <div class=\"container-fluid\">\n        <a [routerLink]=\"['/manageUsers']\" class=\"btn btn-block btn-primary btnStyle\">\n          Manage Users\n        </a>\n      </div>\n    </div>\n    <div *ngIf=\"isOrganizer\">\n      <div class=\"container-fluid\">\n        <a [routerLink]=\"['/manageEvents']\" class=\"btn btn-block btn-primary btnStyle\">\n          Manage Events\n        </a>\n      </div>\n    </div>\n    <div class=\"btn btn-block\"></div>\n    <div class=\"container-fluid\">\n      <a [routerLink]=\"['/eventSearch']\" class=\"btn btn-block btn-primary btnStyle\">\n        Search Events\n      </a>\n    </div>\n  </div>\n\n\n  <div class=\"container-fluid\">\n    <div class=\"btn btn-block\"></div>\n  </div>\n  <div class=\"container-fluid\">\n\n  </div>\n  <div class=\"container-fluid\">\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <ul class=\"list-group\">\n            <li class=\"list-group-item active btnStyle\">\n              <div class=\"row\">\n                <!--<div class=\"col-lg-2\">-->\n                <div class=\"container-fluid\">\n                  Interested Events\n                </div>\n              </div>\n            </li>\n            <li class=\"list-group-item\" *ngFor=\"let interestedEvent of eventsInterestedIn\">\n              <div class=\"row\">\n                <!--<div class=\"col-lg-3\">-->\n                <!--<a [routerLink]=\"['/user']\"-->\n                <div class=\"container-fluid\">\n                  <a (click)=\"goToEventDetailsComments(interestedEvent['eventId'])\">\n                    {{interestedEvent['eventName']}}</a>\n                  <button type=\"button\" class=\"pull-right\" (click)=\"removeFromFavorites(interestedEvent['eventId'])\">\n                    <span class=\"glyphicon glyphicon-minus\"></span>\n                  </button>\n                </div>\n              </div>\n            </li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-lg-4\">\n          <ul class=\"list-group\">\n            <li class=\"list-group-item active btnStyle\">\n              <div class=\"row\">\n                <div class=\"container-fluid\">\n                  Followed By\n                </div>\n              </div>\n            </li>\n            <li class=\"list-group-item\" *ngFor=\"let followedByUser of followedByUsers\">\n              <div class=\"row\">\n                <div class=\"container-fluid\">\n                  {{followedByUser}}\n                  <!--{{getUserName(followedByUser)}}-->\n                </div>\n              </div>\n            </li>\n          </ul>\n        </div>\n\n        <div class=\"col-lg-4\">\n          <ul class=\"list-group\">\n            <li class=\"list-group-item active btnStyle\">\n              <div class=\"row\">\n                <div class=\"container-fluid\">\n                  Users you Follow\n                </div>\n              </div>\n            </li>\n            <li class=\"list-group-item\" *ngFor=\"let followingUser of usersFollowing\">\n              <div class=\"row\">\n                <div class=\"container-fluid\">\n                  <a [routerLink]=\"['/otherUser/', followingUser]\">\n                    <!--{{followingUser['_id']}}-->\n                    {{followingUser}}\n                    <!--{{getUserName(followingUser)}}-->\n                  </a>\n                  <button type=\"button\" class=\"pull-right\" (click)=\"unFollow(followingUser)\">\n                    UnFollow\n                  </button>\n                </div>\n              </div>\n            </li>\n          </ul>\n        </div>\n\n        <div class=\"col-lg-4\">\n          <ul class=\"list-group\">\n            <li class=\"list-group-item active btnStyle\">\n              <div class=\"row\">\n                <div class=\"container-fluid\">\n                  <div> Other Users</div>\n                </div>\n              </div>\n            </li>\n            <li class=\"list-group-item\" *ngFor=\"let otherUser of otherUsers\">\n              <div class=\"row\">\n                <div class=\"container-fluid\">\n                  {{otherUser.username}}\n                  <button type=\"button\" class=\"pull-right\" (click)=\"addToFollow(otherUser._id)\">\n                    Follow\n                  </button>\n                </div>\n              </div>\n            </li>\n          </ul>\n        </div>\n\n\n      </div>\n    </div>\n    <a (click)=\"logout()\" class=\"btn btn-block btn-danger\">\n      Logout\n    </a>\n  </div>\n</div>\n\n<nav class=\"navbar navbar-fixed-bottom bg-primary btnStyle\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-left\">\n      @Sai Bhargavi\n    </p>\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/profile']\" class=\"navbar-link glyphicon-color\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import {EventService} from '../../services/event.service.client';


var DashboardComponent = (function () {
    // private eventService: EventService,
    function DashboardComponent(router, activatedRoute, userService, sharedService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.sharedService = sharedService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.sharedService.user;
        console.log(this.user);
        if (this.user.role === 'ADMIN') {
            console.log('User is Admin');
            this.isAdmin = true;
        }
        if (this.user.role === 'ORGANIZER') {
            console.log('User is Organizer');
            this.isOrganizer = true;
        }
        this.userService.findUserById(this.user['_id']).subscribe(function (user) {
            _this.followedByUsers = user.followedBy;
            _this.usersFollowing = user.followingUsers;
        });
        this.userService.findUsers().subscribe(function (users) {
            _this.otherUsers = users;
            _this.otherUsers.forEach(function (user, index) {
                if (user['_id'] === _this.user['_id']) {
                    _this.otherUsers.splice(index, 1);
                }
            });
            if (_this.usersFollowing !== undefined && _this.usersFollowing !== null) {
                _this.otherUsers.forEach(function (user1, index) {
                    _this.usersFollowing.forEach(function (user2, index1) {
                        if (user1['_id'] === user2) {
                            _this.otherUsers.splice(index, 1);
                        }
                    });
                });
            }
        });
        this.userService.findEventsInterested(this.user['_id']).subscribe(function (eventsInterested) {
            _this.eventsInterestedIn = eventsInterested[0].favoriteEvents;
        });
        if (this.followedByUsers !== undefined) {
            this.followedByUsers.forEach(function (user, index) {
                _this.userService.findUserById(user[0]).subscribe(function (n) {
                    _this.followedByUsers.splice(index, 1, { _id: user[0], username: n['username'] });
                });
            });
        }
        if (this.usersFollowing !== undefined) {
            this.usersFollowing.forEach(function (user, index) {
                _this.userService.findUserById(user[0]).subscribe(function (n) {
                    _this.usersFollowing.splice(index, 1, { _id: user[0], username: n['username'] });
                });
            });
        }
    };
    DashboardComponent.prototype.addToFollow = function (userId) {
        var _this = this;
        this.userService.addUserToFollow(this.user['_id'], userId).subscribe(function (response) {
            _this.userService.addUserToFollowedBy(_this.user['_id'], userId).subscribe(function (response1) {
                _this.userService.findUserById(_this.user['_id']).subscribe(function (user) {
                    _this.followedByUsers = user.followedBy;
                    _this.usersFollowing = user.followingUsers;
                    _this.otherUsers.forEach(function (user1, index) {
                        if (user1['_id'] === userId) {
                            _this.otherUsers.splice(index, 1);
                        }
                    });
                });
            });
        });
    };
    DashboardComponent.prototype.unFollow = function (userId) {
        var _this = this;
        this.userService.removeUserFromFollow(this.user['_id'], userId).subscribe(function (response) {
            _this.userService.removeUserFromFollowedBy(_this.user['_id'], userId).subscribe(function (response1) {
                _this.userService.findUserById(_this.user['_id']).subscribe(function (user) {
                    _this.followedByUsers = user.followedBy;
                    _this.usersFollowing = user.followingUsers;
                    _this.userService.findUserById(userId).subscribe(function (userNew) {
                        _this.otherUsers.splice(1, 0, userNew);
                    });
                });
            });
        });
    };
    DashboardComponent.prototype.removeFromFavorites = function (eveId) {
        var _this = this;
        console.log('removeFromFavorites ->');
        console.log(this.user['_id']);
        this.userService.removeFromFavorites(this.user['_id'], eveId).subscribe(function (response) {
            _this.userService.findEventsInterested(_this.user['_id']).subscribe(function (eventsInterested) {
                _this.eventsInterestedIn = eventsInterested[0].favoriteEvents;
            });
        });
    };
    DashboardComponent.prototype.goToEventDetailsComments = function (interestedEvent) {
        console.log(interestedEvent);
        this.router.navigate(['/comments', interestedEvent]);
    };
    DashboardComponent.prototype.getUserName = function (uId) {
        console.log(uId);
        if (uId !== undefined && uId !== '') {
            this.userService.findUserById(uId).subscribe(function (user) {
                console.log(user['username']);
                return user;
            });
        }
    };
    DashboardComponent.prototype.logout = function () {
        var _this = this;
        this.userService.logout().subscribe(function (user) {
            _this.router.navigate(['/login']);
        });
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */]) === "function" && _d || Object])
], DashboardComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/edit-event/edit-event.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/edit-event/edit-event.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top bg-primary btnStyle\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header header-width header-fix\">\n      <p class=\"navbar-text pull-left p-fix\">\n        <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget']\"\n           class=\"navbar-link glyphicon-color\">\n              <span class=\"glyphicon glyphicon-chevron-left\">\n              </span>\n        </a>\n      </p>\n\n      <span class=\"navbar-brand\">Widget Edit</span>\n      <p class=\"navbar-text pull-right p-right-fix\">\n        <a (click)=\"createEditImage()\"\n           class=\"navbar-link glyphicon-color\">\n              <span class=\"glyphicon glyphicon-ok\">\n              </span>\n        </a>\n      </p>\n    </div>\n\n  </div>\n</nav>\n\n\n<form (ngSubmit)=\"createEditImage()\" #f=\"ngForm\">\n  <div class=\"container-fluid\">\n    <div *ngIf=\"errorFlag\"\n         class=\"alert alert-danger\">\n      {{errMsg}}\n    </div>\n    <div class=\"form-group\">\n\n      <label for=\"name\">Name</label>\n      <input [(ngModel)]=\"name\"\n             placeholder=\"Sun\"\n             value={{name}}\n             type=\"text\"\n             id=\"name\"\n             name=\"name\"\n             class=\"form-control\"\n      />\n      <label for=\"url\">URL</label>\n      <input [(ngModel)]=\"url\"\n             placeholder=\"https://solarsystem.nasa.gov/images/galleries/soho-300.jpg\"\n             value={{url}}\n             type=\"text\"\n             id=\"url\"\n             name=\"url\"\n             class=\"form-control\"\n      />\n      <label for=\"width\">Width</label>\n      <input [(ngModel)]=\"width\"\n             placeholder=\"80%\"\n             value={{width}}\n             type=\"text\"\n             id=\"width\"\n             name=\"width\"\n             class=\"form-control\"\n      />\n      <div class=\"input-group\">\n        <span class=\"input-group-btn\">\n                        <a class=\"btn btn-primary btn-block\"\n                           [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget', widgetId, 'flickrSearch']\">\n                            Search Flickr</a>\n                    </span>\n      </div>\n\n      <form ngNoForm action=\"{{baseUrl}}/api/upload\" method=\"post\" enctype=\"multipart/form-data\">\n        <input  name=\"myFile\"   type=\"file\" class=\"form-control\"/>\n        <input  name=\"widgetId\" value=\"{{widgetId}}\"   style=\"display: none\"/>\n        <input  name=\"websiteId\" value=\"{{websiteId}}\"   style=\"display: none\"/>\n        <input  name=\"pageId\" value=\"{{pageId}}\"   style=\"display: none\"/>\n        <input  name=\"userId\" value=\"{{userId}}\"   style=\"display: none\"/>\n        <button type=\"submit\" class=\"btn btn-block btn-primary\">Upload Image</button>\n        <br/>\n      </form>\n\n\n      <br/>\n      <div *ngIf=widgetExists>\n        <button class=\"btn btn-danger btn-block \"\n                (click)='deleteWidget()'>Delete\n        </button>\n      </div>\n    </div>\n  </div>\n\n</form>\n<nav class=\"navbar navbar-fixed-bottom bg-primary btnStyle\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/profile']\" class=\"navbar-link glyphicon-color\">\n              <span class=\"glyphicon glyphicon-user\">\n              </span>\n      </a>\n    </p>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/edit-event/edit-event.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditEventComponent; });
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

var EditEventComponent = (function () {
    function EditEventComponent() {
    }
    EditEventComponent.prototype.ngOnInit = function () {
    };
    return EditEventComponent;
}());
EditEventComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-edit-event',
        template: __webpack_require__("../../../../../src/app/components/edit-event/edit-event.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/edit-event/edit-event.component.css")]
    }),
    __metadata("design:paramtypes", [])
], EditEventComponent);

//# sourceMappingURL=edit-event.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/event-comment/event-comment.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".editComment{\n  pointer-events: none;\n}\n.saveButton{\n  display:none\n}\n\n.cancelButton{\n  display:none\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/event-comment/event-comment.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Header-Start-->\n<nav class=\"navbar navbar-fixed-top bg-primary btnStyle\">\n  <div class=\"container-fluid\">\n\n    <div class=\"navbar-header header-width header-fix\">\n      <p class=\"navbar-text pull-left p-fix\">\n        <a [routerLink]=\"['/dashboard']\" class=\"navbar-link glyphicon-color\">\n              <span class=\"glyphicon glyphicon-chevron-left\">\n              </span>\n        </a>\n      </p>\n      <span class=\"navbar-brand glyphicon-color\">{{eventId}} {{eventName}}</span>\n\n      <p class=\"navbar-text pull-right p-right-fix glyphicon-color\">\n        <a [routerLink]=\"['/login']\">\n      <span class=\"glyphicon glyphicon-log-in glyphicon-color\">\n      </span>\n        </a>\n        <a [routerLink]=\"['/register']\">\n      <span class=\"glyphicon glyphicon-registration-mark glyphicon-color\">\n      </span>\n        </a>\n        <a [routerLink]=\"['/about']\" class=\"glyphicon-color\">\n          Event Planet\n        </a>\n      </p>\n    </div>\n  </div>\n</nav>\n<!--Header-End-->\n\n<!--Body-Start-->\n<!--Search Input and button-->\n<div class=\"container-fluid\">\n  <div *ngIf=\"eventDetailsExist\">\n    <div class=\"container-fluid\">\n      <div *ngIf=\"eventDetail['description']\">\n        <h3>Description</h3>\n        {{eventDetail['description']}}\n        <br/><br/>\n      </div>\n      <b>Address:</b>&nbsp;&nbsp;\n      {{eventDetail['address']}}\n      <br/><br/>\n      <b>Start Time</b>&nbsp;&nbsp;\n      {{eventDetail['start_time']}}\n      <br/><br/>\n      <b>Link:</b>&nbsp;&nbsp;\n      <a href=\"{{eventDetail['url']}}\" target=\"_blank\">{{eventDetail['url']}}</a>\n    </div>\n  </div>\n</div>\n\n<div class=\"container-fluid\">\n  <div class=\"btn btn-block\"></div>\n  <div class=\"btn btn-block\"></div>\n  <div class=\"container-fluid\">\n\n<div *ngIf=\"commentsExist\">\n  <div class=\"row\">\n    <div class=\"col-xs-9\">\n      Comments\n    </div>\n  </div>\n  <li class=\"list-group-item\" *ngFor=\"let comment of commentsFound\">\n    <div class=\"row\">\n\n      <div class=\"col-xs-6\" id=\"{{comment['_id']}}\">\n        <!--<span id=\"{{comment['_id']}}\">-->\n        <!--<div>{{comment['comment']}}</div>-->\n        <!--<input value=\"cmment\"-->\n               <!--name=\"editComment\"-->\n               <!--type=\"text\"-->\n               <!--id=\"editComment\"-->\n               <!--class=\"form-control\"-->\n               <!--ngModel-->\n               <!--required-->\n               <!--autocomplete=\"off\"-->\n               <!--autocapitalize=\"off\"-->\n        <!--/>-->\n        <input type=\"text\" id=\"editText\" class=\"editComment\" name=\"FirstName\" [value]=\"comment['comment']\">\n        <span class=\"glyphicon glyphicon-edit \"  (click)=\"onEdit(comment['_id'])\"></span>&nbsp;\n\n        <button type=\"button\"\n                id=\"saveBtn\"\n                class=\"btn btn-default saveButton\"\n                (click)=\"saveComment(comment['_id'])\">\n          Save Comment</button>\n        <button type=\"button\"\n                id=\"cancelBtn\"\n                class=\"btn btn-default cancelButton\"\n                (click)=\"cancelEdit(comment['_id'])\">\n         Cancel</button>\n          <!--</spanan>-->\n      </div>\n\n      <div class=\"col-xs-3\">\n        {{comment['username']}}\n      </div>\n      <div *ngIf=\"comment['username'] === user['username']\">\n        <div class=\"col-xs-3\">\n          <!--<span class=\"glyphicon glyphicon-edit \" (click)=\"onEdit()\"></span>&nbsp;-->\n          <span class=\"glyphicon glyphicon-trash\" (click)=\"deleteComment(comment['_id'])\"></span>\n        </div>\n      </div>\n    </div>\n  </li>\n</div>\n<div class=\"container-fluid\">\n  <div class=\"btn btn-block\"></div>\n</div>\n<div class=\"container-fluid\">\n  <div class=\"btn btn-block\"></div>\n</div>\n  </div>\n</div>\n<div class=\"container-fluid\">\n  <div class=\"container-fluid\">\n  <div *ngIf=\"!commentsExist\"\n       class=\"alert alert-danger container-fluid\">\n    <i class=\"glyphicon glyphicon-info-sign glyphicon-color\"></i>\n    There are no comments for this event!!!\n  </div>\n</div>\n\n<div class=\"container-fluid\">\n<div *ngIf=\"!commentsExist\">\n  Be the first to comment\n</div>\n\n<div *ngIf=\"addingNewComment\">\n  <div *ngIf=\"errorFlag\"\n       class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n  <input placeholder=\"Enter your comment here\"\n         name=\"newComment\"\n         type=\"text\"\n         id=\"newComment\"\n         class=\"form-control\"\n         ngModel\n         required\n         [(ngModel)]=\"newComment\"\n         autocomplete=\"off\"\n         autocapitalize=\"off\"\n  />\n  <button class=\"btn-sm\" (click)=\"addCommentToEvent()\">\n    Save Comment\n  </button>\n</div>\n\n<div *ngIf=\"!addingNewComment\">\n  <button class=\"btn-sm\" (click)=\"addNewComment()\">\n    Add Comment\n  </button>\n</div>\n</div>\n</div>\n<!--Body Ends Here-->\n\n<!--Footer-->\n<div class=\"navbar navbar-fixed-bottom bg-primary btnStyle\">\n  <div class=\"container-fluid pull-right\">\n    <a [routerLink]=\"['/profile']\" class=\"navbar-link glyphicon-color\">\n      <span class=\"glyphicon glyphicon-user\">\n      </span>\n    </a>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/event-comment/event-comment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventCommentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_comment_service_client__ = __webpack_require__("../../../../../src/app/services/comment.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_event_search_service_client__ = __webpack_require__("../../../../../src/app/services/event-search.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EventCommentComponent = (function () {
    function EventCommentComponent(sharedService, commentService, activatedRoute, eventSearchService) {
        this.sharedService = sharedService;
        this.commentService = commentService;
        this.activatedRoute = activatedRoute;
        this.eventSearchService = eventSearchService;
    }
    EventCommentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.sharedService.user;
        this.activatedRoute.params
            .subscribe(function (params) {
            if (params['interestedEvent'] === undefined) {
                _this.event = params['eventId'];
            }
            else {
                _this.event = params['interestedEvent'];
            }
            _this.eventSearchService.getEventDetails(_this.event)
                .subscribe(function (eventDetailed) {
                if (eventDetailed !== undefined) {
                    _this.eventDetailsExist = true;
                    _this.eventDetail = eventDetailed;
                }
            });
            // this.commentService.getEventName(this.event)
            //   .subscribe((event: any) => {
            //     this.eventDetailsExist = true;
            //     this.eventName = event['eventName'];
            //   });
            console.log(_this.event);
            _this.commentService.findAllCommentsForEvent(_this.event)
                .subscribe(function (comments) {
                if (comments[0] !== undefined) {
                    _this.commentsFound = comments[0].commentsOnEvent;
                    if (_this.commentsFound.length > 0) {
                        _this.commentsExist = true;
                    }
                }
            });
        });
    };
    EventCommentComponent.prototype.addNewComment = function () {
        this.addingNewComment = true;
    };
    EventCommentComponent.prototype.onEdit = function (commentId) {
        var divEle = document.getElementsByTagName('div');
        var v = divEle[14].id;
        if (v === commentId) {
            var x = document.getElementById('editText');
            x.style.pointerEvents = 'auto';
            var y = document.getElementById('saveBtn');
            y.style.display = 'block';
            var z = document.getElementById('cancelBtn');
            z.style.display = 'block';
        }
    };
    EventCommentComponent.prototype.saveComment = function (commentId) {
        var x = document.getElementById('editText');
        x.style.pointerEvents = 'none';
        var commentText = document.getElementById('editText').value;
        console.log(commentText);
        var y = document.getElementById('saveBtn');
        y.style.display = 'none';
        this.commentService.modifyComment(this.eventId, commentId, commentText)
            .subscribe(function (resp) {
        });
    };
    EventCommentComponent.prototype.cancelEdit = function (commentId) {
        var _this = this;
        var y = document.getElementById('cancelBtn');
        y.style.display = 'none';
        this.commentService.findAllCommentsForEvent(this.event)
            .subscribe(function (comments) {
            if (comments) {
                _this.commentsFound = comments[0].commentsOnEvent;
                if (_this.commentsFound.length > 0) {
                    _this.commentsExist = true;
                }
            }
        });
    };
    EventCommentComponent.prototype.deleteComment = function (commentId) {
        var _this = this;
        var cID = commentId;
        // console.log(commentId);
        // const x = document.getElementById('editText');
        // x.style.pointerEvents = 'none';
        // const commentText = (<HTMLInputElement>document.getElementById('editText')).value;
        // console.log(commentText);
        // const y = document.getElementById('deleteBtn');
        // y.style.display = 'none';
        this.commentService.deleteComment(this.event, cID)
            .subscribe(function (resp) {
            _this.commentService.findAllCommentsForEvent(_this.event)
                .subscribe(function (comments) {
                if (comments[0] !== undefined) {
                    _this.commentsFound = comments[0].commentsOnEvent;
                    if (_this.commentsFound.length > 0) {
                        _this.commentsExist = true;
                    }
                }
            });
        });
    };
    EventCommentComponent.prototype.addCommentToEvent = function () {
        var _this = this;
        if (this.newComment === '' || this.newComment === undefined) {
            this.errorFlag = true;
            this.errorMsg = 'Please enter your comments';
        }
        else {
            var commentToAdd = {
                userId: this.user['_id'],
                username: this.user['username'],
                comment: this.newComment
            };
            console.log(commentToAdd);
            this.commentService.addCommentToEvent(this.event, commentToAdd)
                .subscribe(function (resp) {
                _this.addingNewComment = false;
                _this.newComment = '';
                _this.commentService.findAllCommentsForEvent(_this.event)
                    .subscribe(function (comments) {
                    if (comments[0] !== undefined) {
                        _this.commentsExist = true;
                        _this.commentsFound = comments[0].commentsOnEvent;
                    }
                });
            });
        }
    };
    EventCommentComponent.prototype.getEventName = function (id) {
        this.commentService.getEventName(id)
            .subscribe(function (event) {
            return event['eventName'];
        });
    };
    EventCommentComponent.prototype.searchForEvents = function (searchTerm) {
        var _this = this;
        this.eventSearchService.search(searchTerm)
            .subscribe(function (searchRes) {
            if (searchRes['events']) {
                _this.eventsExist = true;
                _this.noResults = false;
                _this.searchResults = searchRes.events.event;
                _this.buttonValue = 'Add to Favorites';
                _this.isSearching = false;
            }
            else {
                _this.eventsExist = false;
                _this.noResults = true;
            }
        });
    };
    return EventCommentComponent;
}());
EventCommentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-event-comment',
        template: __webpack_require__("../../../../../src/app/components/event-comment/event-comment.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/event-comment/event-comment.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_shared_service_client__["a" /* SharedService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_comment_service_client__["a" /* CommentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_comment_service_client__["a" /* CommentService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_event_search_service_client__["a" /* EventSearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_event_search_service_client__["a" /* EventSearchService */]) === "function" && _d || Object])
], EventCommentComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=event-comment.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/event-details/event-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/event-details/event-details.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Header-Start-->\n<nav class=\"navbar navbar-fixed-top bg-primary btnStyle\">\n  <div class=\"container-fluid\">\n\n    <div class=\"navbar-header header-width header-fix\">\n      <p class=\"navbar-text pull-left p-fix\">\n        <a (click)=\"searchForEvents(searchTerm)\" class=\"navbar-link glyphicon-color\">\n              <span class=\"glyphicon glyphicon-chevron-left\">\n              </span>\n        </a>\n      </p>\n      <span class=\"navbar-brand glyphicon-color\">{{eventName}}</span>\n\n      <p class=\"navbar-text pull-right p-right-fix glyphicon-color\">\n        <a [routerLink]=\"['/login']\">\n      <span class=\"glyphicon glyphicon-log-in glyphicon-color\">\n      </span>\n        </a>\n        <a [routerLink]=\"['/register']\">\n      <span class=\"glyphicon glyphicon-registration-mark glyphicon-color\">\n      </span>\n        </a>\n        <a [routerLink]=\"['/about']\" class=\"glyphicon-color\">\n          Event Planet\n        </a>\n      </p>\n    </div>\n  </div>\n</nav>\n<!--Header-End-->\n\n<!--Body-Start-->\n<!--Search Input and button-->\n<div class=\"container-fluid\">\n  <div *ngIf=\"eventDetailsExist\">\n    <div class=\"container-fluid\">\n      <div *ngIf=\"eventDetail['description']\">\n        <h3>Description</h3>\n        {{eventDetail['description']}}\n        <br/><br/>\n      </div>\n      <div *ngIf=\"!eventDetail['description']\">\n        <h3>Description</h3>\n        Description yet to come!\n        <br/><br/>\n      </div>\n      <b>Address:</b>&nbsp;&nbsp;\n      {{eventDetail['address']}}\n      <br/><br/>\n      <b>Start Time:</b>&nbsp;&nbsp;\n      {{eventDetail['start_time']}}\n      <br/><br/>\n      <b>Link:</b>&nbsp;&nbsp;\n      <a href=\"{{eventDetail['url']}}\" target=\"_blank\">{{eventDetail['url']}}</a>\n    </div>\n  </div>\n</div>\n\n\n<div *ngIf=\"commentsExist\">\n  <div class=\"row\">\n    <div class=\"col-xs-9\">\n      Comments\n    </div>\n  </div>\n  <li class=\"list-group-item\" *ngFor=\"let comment of commentsFound\">\n    <div class=\"row\">\n      <div class=\"col-xs-9\">\n        {{comment['comment']}}\n      </div>\n      <div class=\"col-xs-3\">\n        {{comment['username']}}\n      </div>\n    </div>\n  </li>\n</div>\n<div class=\"container-fluid\">\n  <div class=\"btn btn-block\"></div>\n</div>\n<div class=\"container-fluid\">\n  <div class=\"btn btn-block\"></div>\n</div>\n<div class=\"container-fluid\">\n  <div *ngIf=\"!commentsExist && !isLoading\"\n       class=\"alert alert-danger container-fluid\">\n    <i class=\"glyphicon glyphicon-info-sign glyphicon-color\"></i>\n    There are no comments for this event!!!\n  </div>\n  <div *ngIf=\"isLoading\">\n    <div>\n    Loading details of the event..\n    </div>\n  </div>\n</div>\n\n<!--Body Ends Here-->\n\n<!--Footer-->\n<div class=\"navbar navbar-fixed-bottom bg-primary btnStyle\">\n  <div class=\"container-fluid pull-right\">\n    <a [routerLink]=\"['/profile']\" class=\"navbar-link glyphicon-color\">\n      <span class=\"glyphicon glyphicon-user\">\n      </span>\n    </a>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/event-details/event-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_event_search_service_client__ = __webpack_require__("../../../../../src/app/services/event-search.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_comment_service_client__ = __webpack_require__("../../../../../src/app/services/comment.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EventDetailsComponent = (function () {
    function EventDetailsComponent(eventSearchService, activatedRoute, router, commentService) {
        this.eventSearchService = eventSearchService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.commentService = commentService;
    }
    EventDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.eventId = params['id'];
            // this.event = params['interestedEvent'];
            _this.eventSearchService.getEventDetails(_this.eventId)
                .subscribe(function (eventDetailed) {
                if (eventDetailed !== undefined) {
                    _this.eventDetailsExist = true;
                    _this.eventDetail = eventDetailed;
                    _this.eventName = eventDetailed['title'];
                    _this.commentService.findAllCommentsForEvent(_this.eventId)
                        .subscribe(function (comments) {
                        _this.isLoading = false;
                        if (comments[0] !== undefined) {
                            _this.commentsExist = true;
                            _this.commentsFound = comments[0].commentsOnEvent;
                        }
                        else {
                            _this.commentsExist = false;
                        }
                    });
                }
            });
        });
    };
    EventDetailsComponent.prototype.searchForEvents = function (searchTerm) {
        var _this = this;
        this.eventSearchService.search(searchTerm)
            .subscribe(function (searchRes) {
            if (searchRes['events']) {
                _this.eventsExist = true;
                _this.noResults = false;
                _this.searchResults = searchRes.events.event;
                _this.buttonValue = 'Add to Favorites';
                _this.isSearching = false;
            }
            else {
                _this.eventsExist = false;
                _this.noResults = true;
            }
        });
    };
    return EventDetailsComponent;
}());
EventDetailsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-event-details',
        template: __webpack_require__("../../../../../src/app/components/event-details/event-details.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/event-details/event-details.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_event_search_service_client__["a" /* EventSearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_event_search_service_client__["a" /* EventSearchService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_comment_service_client__["a" /* CommentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_comment_service_client__["a" /* CommentService */]) === "function" && _d || Object])
], EventDetailsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=event-details.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/event-search/event-search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/event-search/event-search.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Header-Start-->\n<nav class=\"navbar navbar-fixed-top bg-primary btnStyle\">\n  <div class=\"container-fluid\">\n\n    <div class=\"navbar-header header-width header-fix\">\n      <p class=\"navbar-text pull-left p-fix\">\n        <a [routerLink]=\"['/about']\" class=\"glyphicon-color\">\n          Event Planet\n        </a>\n      </p>\n      <div *ngIf=\"!userExists\">\n        <p class=\"navbar-text pull-right p-right-fix glyphicon-color\">\n\n        <a [routerLink]=\"['/login']\">\n      <span class=\"glyphicon glyphicon-log-in glyphicon-color\">\n      </span>\n        </a>\n          &nbsp;&nbsp;\n        <a [routerLink]=\"['/register']\">\n      <span class=\"glyphicon glyphicon-registration-mark glyphicon-color\">\n      </span>\n        </a>\n        </p>\n    </div>\n\n      <div *ngIf=\"userExists\">\n        <p class=\"navbar-text pull-right p-right-fix glyphicon-color\">\n\n          <a [routerLink]=\"['/dashboard']\">\n      <span class=\"glyphicon glyphicon-color\">Dashboard\n      </span>\n          </a>\n          <a [routerLink]=\"['/logout']\">\n      <span class=\"glyphicon glyphicon-log-out glyphicon-color\">\n      </span>\n          </a>\n        </p>\n      </div>\n    </div>\n  </div>\n</nav>\n<!--Header-End-->\n\n<!--Body-Start-->\n<div class=\"container-fluid\">\n<div *ngIf=\"infoFlag\"\n     class=\"alert alert-danger container-fluid\">\n  <i class=\"glyphicon glyphicon-info-sign glyphicon-color\"></i>\n  {{infoMsg}}\n</div>\n</div>\n<!--Search Input and button-->\n<div class=\"container-fluid\">\n  <form (ngSubmit)=\"search()\" #f=\"ngForm\">\n    <input ngModel={{searchTerm}}\n           name=\"searchTerm\"\n           id=\"searchTerm\"\n           placeholder=\"San Diego\"\n           class=\"form-control\">\n    <button\n            class=\"btn btn-primary btn-block btnStyle\"\n            [disabled]=\"!f.valid\">\n      Search for Events\n    </button>\n    <!--(click)=\"searchForEvents(searchTerm)\"-->\n  </form>\n\n  <div *ngIf=\"isSearching\">\n    <div class=\"btn btn-block\"></div>\n    <div align=\"center\">\n         Loading events for {{searchTerm}}...\n    </div>\n  </div>\n  <!--Empty Search results-->\n  <div *ngIf=\"noResults\"\n       class=\"alert alert-danger container-fluid\">\n    Sorry! We dont have any events happening at {{searchTerm}}\n  </div>\n\n  <!--Search Results-->\n  <div *ngIf=\"eventsExist\">\n    <div></div>\n    <div>\n      <h5>Click on any of the following events to know the details</h5>\n    </div>\n\n    <li class=\"list-group-item\" *ngFor=\"let eventsFromList of searchResults\">\n      <div class=\"row\">\n        <div class=\"col-xs-9\">\n          <a (click)=\"getDetails(eventsFromList['id'])\">\n            {{eventsFromList['title']}}\n            <br/>\n            {{eventsFromList['city_name']}}\n          </a>\n        </div>\n        <div class=\"col-xs-3\">\n          <button value=\"Add To Favorites\"\n                  id=\"{{eventsFromList['id']}}\"\n                  class=\"gray\"\n                  (click)=\"addTofavorites(eventsFromList['id'], eventsFromList['title'], $event)\">\n            {{buttonValue}}\n          </button>\n        </div>\n      </div>\n    </li>\n  </div>\n</div>\n<!--Body Ends Here-->\n\n<!--Footer-->\n<div class=\"navbar navbar-fixed-bottom bg-primary btnStyle\">\n  <div class=\"container-fluid pull-right\">\n    <!--<a [routerLink]=\"['/profile']\" class=\"navbar-link glyphicon-color\">-->\n      <!--<span class=\"glyphicon glyphicon-user\">-->\n      <!--</span>-->\n    <!--</a>-->\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/event-search/event-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_event_search_service_client__ = __webpack_require__("../../../../../src/app/services/event-search.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EventSearchComponent = (function () {
    function EventSearchComponent(eventSearchService, router, userService, sharedService) {
        this.eventSearchService = eventSearchService;
        this.router = router;
        this.userService = userService;
        this.sharedService = sharedService;
    }
    EventSearchComponent.prototype.ngOnInit = function () {
        this.user = this.sharedService.user;
        if (this.user['_id'] !== undefined) {
            this.userExists = true;
        }
        this.noResults = false;
        this.eventsExist = false;
        this.buttonValue = 'Add to Favorites';
        this.isSearching = false;
    };
    EventSearchComponent.prototype.search = function () {
        var _this = this;
        this.isSearching = true;
        this.searchTerm = this.welcomeForm.value.searchTerm;
        this.eventSearchService.search(this.searchTerm)
            .subscribe(function (searchRes) {
            if (searchRes['events']) {
                _this.eventsExist = true;
                _this.noResults = false;
                _this.searchResults = searchRes.events.event;
                _this.buttonValue = 'Add to Favorites';
                _this.isSearching = false;
            }
            else {
                _this.eventsExist = false;
                _this.noResults = true;
            }
        });
    };
    // searchForEvents(searchTerm) {
    //   this.eventSearchService.search(searchTerm)
    //     .subscribe((searchRes: any) => {
    //       if (searchRes['events']) {
    //         this.eventsExist = true;
    //         this.noResults = false;
    //         this.searchResults = searchRes.events.event;
    //         this.buttonValue = 'Add to Favorites';
    //         this.isSearching = false;
    //       } else {
    //         this.eventsExist = false;
    //         this.noResults = true;
    //
    //       }
    //
    //     });
    // }
    EventSearchComponent.prototype.getDetails = function (id) {
        this.router.navigate(['/eventDetails', id]);
    };
    //
    //   this.userService.register(this.username, this.password, this.role)
    // .subscribe((data: any) => {
    //   this.router.navigate(['/profile']);
    // },
    // (error: any) => {
    //   this.error = error._body;
    // });
    EventSearchComponent.prototype.addTofavorites = function (eventId, eventName, event) {
        if (this.user['_id'] === undefined || this.user['_id'] === '') {
            this.infoMsg = 'Login to add to favorites';
            this.infoFlag = true;
        }
        else {
            this.userService.addToFavorites(this.user['_id'], eventId, eventName)
                .subscribe(function (data) {
                console.log('Index of eventName is');
                var target = event.target || event.srcElement || event.currentTarget;
                var idAttr = target.attributes.id.nodeValue;
                if (idAttr === eventId) {
                    target.innerText = 'Added to favorites';
                }
                // console.log(this.searchResults.re);
                // .findIndex(eventName));
            });
        }
    };
    return EventSearchComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], EventSearchComponent.prototype, "welcomeForm", void 0);
EventSearchComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-event-search',
        template: __webpack_require__("../../../../../src/app/components/event-search/event-search.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/event-search/event-search.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_event_search_service_client__["a" /* EventSearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_event_search_service_client__["a" /* EventSearchService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_user_service_client__["a" /* UserService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_shared_service_client__["a" /* SharedService */]) === "function" && _e || Object])
], EventSearchComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=event-search.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/flickr-search/flickr-search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/flickr-search/flickr-search.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top bg-primary btnStyle\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header header-width header-fix\">\n      <p class=\"navbar-text pull-left p-fix\">\n        <!--<a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget', widgetId]\"-->\n        <a   class=\"navbar-link glyphicon-color\">\n              <span class=\"glyphicon glyphicon-chevron-left\">\n              </span>\n        </a>\n      </p>\n\n      <span class=\"navbar-brand\">Flickr Search</span>\n      <p class=\"navbar-text pull-right p-right-fix\">\n        <a (click)=\"searchPhotos()\"\n           class=\"navbar-link glyphicon-color\">\n              <span class=\"glyphicon glyphicon-search\">\n              </span>\n        </a>\n      </p>\n    </div>\n\n  </div>\n</nav>\n\n<div class=\"input-group\">\n  <input [(ngModel)]=\"searchText\" type=\"text\" class=\"form-control\">\n  <span class=\"input-group-btn\">\n         <a (click)=\"searchPhotos()\" class=\"btn btn-default\" type=\"button\">\n             <span class=\"glyphicon glyphicon-search\"></span>\n         </a>\n </span>\n</div>\n\n<div *ngIf=\"resultsFound\" class=\"row\">\n  <div *ngFor = \"let pic of photos['photo']\"\n       class=\"col-xs-4\">\n    <img (click)=\"selectPhoto(pic)\"\n         width=\"50%\"\n         [src] = \"['https://farm' + pic.farm + '.staticflickr.com/' + pic.server + '/' +   pic.id + '_' + pic.secret + '_s.jpg']\"/>\n    <p></p>\n  </div>\n</div>\n\n<nav class=\"navbar navbar-fixed-bottom bg-primary btnStyle\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/profile']\" class=\"navbar-link glyphicon-color\">\n              <span class=\"glyphicon glyphicon-user\">\n              </span>\n      </a>\n    </p>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/flickr-search/flickr-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlickrSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_flickr_service_client__ = __webpack_require__("../../../../../src/app/services/flickr.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FlickrSearchComponent = (function () {
    function FlickrSearchComponent(flickrService, router, activatedRoute, sharedService) {
        this.flickrService = flickrService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.sharedService = sharedService;
    }
    FlickrSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.resultsFound = false;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.user = _this.sharedService.user;
        });
    };
    FlickrSearchComponent.prototype.searchPhotos = function () {
        var _this = this;
        console.log(this.searchText);
        this.flickrService
            .searchPhotos(this.searchText)
            .subscribe(function (data) {
            _this.resultsFound = true;
            console.log(data);
            var val = data._body;
            val = val.replace('jsonFlickrApi(', '');
            val = val.substring(0, val.length - 1);
            val = JSON.parse(val);
            console.log(val);
            _this.photos = val.photos;
        });
    };
    FlickrSearchComponent.prototype.selectPhoto = function (photo) {
        console.log('IN selectPhoto(pic)');
        var url = 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server;
        url += '/' + photo.id + '_' + photo.secret + '_b.jpg';
        this.router.navigate(['/addingImage/', url]);
    };
    return FlickrSearchComponent;
}());
FlickrSearchComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-flickr-search',
        template: __webpack_require__("../../../../../src/app/components/flickr-search/flickr-search.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/flickr-search/flickr-search.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_flickr_service_client__["a" /* FlickrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_flickr_service_client__["a" /* FlickrService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */]) === "function" && _d || Object])
], FlickrSearchComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=flickr-search.component.js.map

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

/***/ "../../../../../src/app/components/manage-events/manage-events.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/manage-events/manage-events.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top bg-primary btnStyle\">\n  <div class=\"container-fluid\">\n\n    <div class=\"navbar-header header-width header-fix\">\n      <p class=\"navbar-text pull-left p-fix\">\n        <a [routerLink]=\"['/dashboard']\" class=\"navbar-link glyphicon-color\">\n              <span class=\"glyphicon glyphicon-chevron-left\">\n              </span>\n        </a>\n      </p>\n      <span class=\"navbar-brand glyphicon-color\">Manage Users</span>\n\n    </div>\n  </div>\n</nav>\n\n<div class=\"container-fluid\">\n  <div class=\"container-fluid\">\n\n    <a [routerLink]=\"['/addEvent']\" class=\"btn btn-primary pull-right\">\n      Add Event\n    </a>\n  </div>\n\n  <li class=\"list-group-item active btnStyle\">\n    <div class=\"row\">\n      <!--<div class=\"col-lg-2\">-->\n      <div class=\"container-fluid\">\n        Events created by you\n      </div>\n    </div>\n  </li>\n\n  <div *ngIf=\"userCreatedEvents\">\n    <li class=\"list-group-item\" *ngFor=\"let event of eventsCreated\">\n      <div class=\"row\">\n        <div class=\"col-xs-6\">\n          <a (click)=\"goToEventDetails(event['eventId'])\">\n          {{event['eventName']}}\n          </a>\n        </div>\n        <div class=\"pull-right\">\n          <div class=\"col-xs-3\">\n            <a [routerLink]=\"['/editEvent', event['_id']]\">\n              <span class=\"glyphicon glyphicon-edit\"></span>\n            </a>\n          </div>\n          <div class=\"col-xs-3\">\n            <div (click)=\"deleteEvent(event['_id'])\">\n              <span class=\"glyphicon glyphicon-trash\"></span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </li>\n  </div>\n\n  <div *ngIf=\"!userCreatedEvents\">\n    <div class=\"btn-block btn\"></div>\n    Sorry! We could not find any events created by you!\n    <br/>\n    Start creating events by click on 'Add Event'\n    <br/>\n  </div>\n  <div class=\"btn-block btn\"></div>\n  <li class=\"list-group-item active btnStyle\">\n    <div class=\"row\">\n      <!--<div class=\"col-lg-2\">-->\n      <div class=\"container-fluid\">\n        Take a look at events created by other organizers\n      </div>\n    </div>\n  </li>\n  <div class=\"btn-block btn\"></div>\n  <div *ngIf=\"otherUserCreatedEvents\">\n    <li class=\"list-group-item\" *ngFor=\"let event of eventsCreatedbyOthers\">\n      <div class=\"row\">\n        <div class=\"col-xs-12\">\n          <a (click)=\"goToEventDetails(event['eventId'])\">\n            {{event['eventId']}}\n          {{event['eventName']}}\n          </a>\n        </div>\n      </div>\n    </li>\n  </div>\n\n  <div *ngIf=\"!otherUserCreatedEvents\">\n    Other organizers are yet to create events.!\n    <br/>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/manage-events/manage-events.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageEventsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_manage_event_service_client__ = __webpack_require__("../../../../../src/app/services/manage-event.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ManageEventsComponent = (function () {
    function ManageEventsComponent(router, activatedRoute, userService, sharedService, manageEventService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.sharedService = sharedService;
        this.manageEventService = manageEventService;
    }
    ManageEventsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.sharedService.user;
        this.manageEventService.findEventsCreated(this.user['_id']).subscribe(function (eventsCreated) {
            if (eventsCreated.length > 0) {
                _this.userCreatedEvents = true;
                _this.eventsCreated = eventsCreated;
            }
        });
        this.manageEventService.findEventsCreatedByOthers(this.user['_id']).subscribe(function (eventsCreated) {
            if (eventsCreated.length > 0) {
                _this.otherUserCreatedEvents = true;
                _this.eventsCreatedbyOthers = eventsCreated;
            }
        });
    };
    ManageEventsComponent.prototype.deleteEvent = function (eventId) {
        var _this = this;
        this.user = this.sharedService.user;
        this.manageEventService.deleteEvent(eventId).subscribe(function (resp) {
            _this.manageEventService.findEventsCreated(_this.user['_id']).subscribe(function (eventsCreated) {
                _this.eventsCreated = eventsCreated;
            });
        });
    };
    ManageEventsComponent.prototype.goToEventDetails = function (eventId) {
        this.router.navigate(['/detailsManager', eventId]);
    };
    return ManageEventsComponent;
}());
ManageEventsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-manage-events',
        template: __webpack_require__("../../../../../src/app/components/manage-events/manage-events.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/manage-events/manage-events.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_manage_event_service_client__["a" /* ManageEventService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_manage_event_service_client__["a" /* ManageEventService */]) === "function" && _e || Object])
], ManageEventsComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=manage-events.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/manage-user/manage-user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/manage-user/manage-user.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top bg-primary btnStyle\">\n  <div class=\"container-fluid\">\n\n    <div class=\"navbar-header header-width header-fix\">\n      <p class=\"navbar-text pull-left p-fix\">\n        <a [routerLink]=\"['/dashboard']\" class=\"navbar-link glyphicon-color\">\n              <span class=\"glyphicon glyphicon-chevron-left\">\n              </span>\n        </a>\n      </p>\n      <span class=\"navbar-brand glyphicon-color\">Manage Users</span>\n      <p class=\"navbar-text pull-right p-right-fix\">\n\n        <a (click)=\"logout()\" class=\"navbar-link glyphicon-color\">\n      <span class=\"glyphicon glyphicon-log-out\">\n      </span> &nbsp;\n        </a>\n      </p>\n      <!--<p class=\"navbar-text pull-right p-right-fix\">-->\n      <!--<a [routerLink]=\"['/user', userId, 'website', 'new']\" class=\"navbar-link glyphicon-color\">-->\n      <!--<span class=\"glyphicon glyphicon-plus\">-->\n      <!--</span>-->\n      <!--</a>-->\n      <!--</p>-->\n    </div>\n  </div>\n</nav>\n\n\n<div class=\"container-fluid\">\n  <div class=\"container-fluid\">\n    <div *ngIf=\"successFlag\"\n         class=\"alert alert-success\">\n      {{successMsg}}\n    </div>\n    <div *ngIf=\"errFlag\"\n         class=\"alert alert-danger\">\n      {{errMsg}}\n    </div>\n    <div *ngIf=\"isEditing || isCreatingNewUser\">\n      <!--<div class=\"row container-fluid ribbon-style\">-->\n      <!--You are editing the profile of {{username}}-->\n      <!--<div class=\"pull-right\">-->\n      <!--<a (click)=\"updateUser()\" class=\"navbar-link \">-->\n      <!--<span class=\"glyphicon glyphicon-ok\">-->\n      <!--</span>-->\n      <!--</a>-->\n      <!--</div>-->\n\n      <div class=\"row\">\n        <div class=\"col-xs-3\">\n          <label for=\"username\">Username</label>\n          <div *ngIf=\"isEditing\">\n            <input [(ngModel)]=\"username\"\n                   name=\"username\"\n                   id=\"username\"\n                   placeholder={{username}}\n                   class=\"form-control\"\n                   readonly>\n          </div>\n          <div *ngIf=\"isCreatingNewUser\">\n            <input [(ngModel)]=\"newusername\"\n                   name=\"newusername\"\n                   id=\"newusername\"\n                   placeholder={{newusername}}\n                   class=\"form-control\">\n          </div>\n        </div>\n        <div class=\"col-xs-3\">\n          <label for=\"firstName\">First Name</label>\n          <input [(ngModel)]=\"firstName\"\n                 name=\"firstName\"\n                 id=\"firstName\"\n                 placeholder={{firstName}}\n                 class=\"form-control\">\n        </div>\n        <div class=\"col-xs-3\">\n          <label for=\"lastName\">Last Name</label>\n          <input [(ngModel)]=\"lastName\"\n                 name=\"lastname\"\n                 id=\"lastName\"\n                 placeholder={{lastName}}\n                 class=\"form-control\">\n        </div>\n      </div>\n      <div *ngIf=\"isCreatingNewUser\">\n        <div class=\"row\">\n          <div class=\"col-xs-3\">\n            <label for=\"password\">Password</label>\n            <input [(ngModel)]=\"password\"\n                   name=\"password\"\n                   id=\"password\"\n                   placeholder={{password}}\n                   type=password\n                   class=\"form-control\">\n          </div>\n          <div class=\"col-xs-3\">\n            <label for=\"verifyPwd\">Verify Password</label>\n            <input [(ngModel)]=\"verifyPwd\"\n                   name=\"verifyPwd\"\n                   id=\"verifyPwd\"\n                   type=\"password\"\n                   placeholder={{verifyPwd}}\n                   class=\"form-control\">\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xs-3\">\n          <label for=\"email\">E-Mail</label>\n          <input [(ngModel)]=\"email\"\n                 name=\"email\"\n                 id=\"email\"\n                 placeholder={{email}}\n                 class=\"form-control\">\n        </div>\n        <div class=\"col-xs-3\">\n          <label for=\"role\">Role</label>\n          <select [(ngModel)]=\"role\" class=\"form-control\" name=\"role\" id=\"role\">\n            <option value=\"USER\">User</option>\n            <option value=\"ORGANIZER\">Organizer</option>\n            <option value=\"ADMIN\">Admin</option>\n          </select>\n        </div>\n        <div *ngIf=\"!isCreatingNewUser\">\n          <div class=\"col-xs-3\">\n            <label></label>\n            <a (click)=\"updateUser()\" class=\"btn btn-block btnStyle\">\n              <div class=\"glyphicon-color\"> Update {{username}}'s profile\n              </div>\n            </a>\n          </div>\n        </div>\n        <div *ngIf=\"isCreatingNewUser\">\n          <div class=\"col-xs-3\">\n            <label></label>\n            <a (click)=\"createNewUser()\" class=\"btn btn-block btnStyle\">\n              <div class=\"glyphicon-color\"> Create new user\n              </div>\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"btn btn-block\"></div>\n    <div class=\"btn btn-block\"></div>\n    <!--<div class=\"btn btn-block glyphicon-color btnStyle\">-->\n      <!--All registered users-->\n    <!--</div>-->\n    <div class=\"btn btn-block\"></div>\n    <ul class=\"list-group\">\n      <li class=\"list-group-item active btnStyl\">\n        <div class=\"row\">\n          <div class=\"col-xs-3\">\n            Username\n          </div>\n\n          <div class=\"col-xs-3\">\n            First Name\n          </div>\n\n          <div class=\"col-xs-3\">\n            Last Name\n          </div>\n\n        </div>\n      </li>\n      <li class=\"list-group-item\" *ngFor=\"let user of all_users\">\n        <div class=\"row\">\n          <div class=\"col-xs-3\">\n            {{user['username']}}\n          </div>\n          <div class=\"col-xs-3\">\n            {{user['firstName']}}\n          </div>\n\n          <div class=\"col-xs-3\">\n            {{user['lastName']}}\n          </div>\n          <div class=\"col-xs-3\">\n            <div class=\"pull-right\" (click)=\"editUser(user['_id'])\">\n              <span class=\"glyphicon glyphicon-pencil\"></span>\n            </div>&nbsp;&nbsp;\n            <div class=\"pull-right\" (click)=\"deleteUser(user['_id'])\">\n              <span class=\"glyphicon glyphicon-trash\"></span>\n            </div>\n          </div>\n        </div>\n      </li>\n    </ul>\n  </div>\n  <div class=\"container-fluid\">\n    <div class=\"btn btn-block btnStyle glyphicon-color\" (click)=\"onCreate()\">\n      Create New User\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/manage-user/manage-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
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




var ManageUserComponent = (function () {
    function ManageUserComponent(userService, sharedService, router) {
        this.userService = userService;
        this.sharedService = sharedService;
        this.router = router;
        console.log('In manage user - ts - on init');
    }
    ManageUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.sharedService.user;
        this.userService.findUsers().subscribe(function (userList) {
            _this.all_users = userList;
            _this.all_users.forEach(function (user, index) {
                if (user['_id'] === _this.user['_id']) {
                    _this.all_users.splice(index, 1);
                }
            });
        });
    };
    ManageUserComponent.prototype.deleteUser = function (id) {
        var _this = this;
        this.userService.deleteUser(id).subscribe(function (user) {
            _this.userService.findUsers().subscribe(function (userList) {
                _this.all_users = userList;
            });
        });
    };
    ManageUserComponent.prototype.editUser = function (id) {
        var _this = this;
        this.userService.findUserById(id).subscribe(function (user) {
            _this.successFlag = false;
            _this.isEditing = true;
            _this.isCreatingNewUser = false;
            _this.currentUser = user;
            _this.username = user['username'];
            _this.firstName = user['firstName'];
            _this.lastName = user['lastName'];
            _this.email = user['email'];
            _this.role = user['role'];
        });
    };
    ManageUserComponent.prototype.updateUser = function () {
        var _this = this;
        var user = {
            username: this.username,
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            role: this.role
        };
        this.userService.updateUser(this.currentUser['_id'], user)
            .subscribe(function (result) {
            _this.successFlag = true;
            _this.successMsg = 'User updated successfully';
            _this.isEditing = false;
            _this.userService.findUsers().subscribe(function (userList) {
                _this.all_users = userList;
                _this.all_users.forEach(function (user1, index) {
                    if (user1['_id'] === _this.user['_id']) {
                        _this.all_users.splice(index, 1);
                    }
                });
            });
        });
    };
    ManageUserComponent.prototype.onCreate = function () {
        this.isEditing = false;
        this.isCreatingNewUser = true;
        this.successFlag = false;
        this.firstName = '';
        this.lastName = '';
        this.password = '';
        this.verifyPwd = '';
        this.email = '';
        this.role = '';
        this.newusername = '';
    };
    ManageUserComponent.prototype.logout = function () {
        var _this = this;
        this.userService.logout().subscribe(function (user) {
            _this.router.navigate(['/login']);
        });
    };
    ManageUserComponent.prototype.createNewUser = function () {
        var _this = this;
        if (this.newusername === undefined || this.newusername === ''
            || this.password === undefined || this.password === ''
            || this.verifyPwd === undefined || this.verifyPwd === '') {
            this.errMsg = 'Username, password and verify password fields are mandatory';
            this.errFlag = true;
        }
        else if (this.password !== this.verifyPwd) {
            this.errMsg = 'Password and verify password fields do not match';
            this.errFlag = true;
        }
        else {
            this.errFlag = false;
            var user = {
                username: this.newusername,
                password: this.password,
                firstName: this.firstName || '',
                lastName: this.lastName || '',
                email: this.email || '',
                role: this.role || 'USER'
            };
            this.userService.createUser(user)
                .subscribe(function (user1) {
                console.log('creating new user');
                _this.successFlag = true;
                _this.successMsg = 'Created user successfully!';
                _this.userService.findUsers().subscribe(function (userList) {
                    _this.all_users = userList;
                    _this.all_users.forEach(function (user2, index) {
                        if (user2['_id'] === _this.user['_id']) {
                            _this.all_users.splice(index, 1);
                        }
                    });
                });
                _this.isCreatingNewUser = false;
                _this.errFlag = false;
            });
        }
    };
    return ManageUserComponent;
}());
ManageUserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-manage-user',
        template: __webpack_require__("../../../../../src/app/components/manage-user/manage-user.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/manage-user/manage-user.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_shared_service_client__["a" /* SharedService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], ManageUserComponent);

var _a, _b, _c;
//# sourceMappingURL=manage-user.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/other-user-dashboard/other-user-dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/other-user-dashboard/other-user-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  {{otherUserName}} is following:\n</div>\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <ul class=\"list-group\">\n          <li class=\"list-group-item active btnStyle\">\n            <div class=\"row\">\n              <!--<div class=\"col-lg-2\">-->\n              <div class=\"container-fluid\">\n                Interested Events\n              </div>\n            </div>\n          </li>\n          <li class=\"list-group-item\" *ngFor=\"let interestedEvent of otherUser_Events\">\n            <div class=\"row\">\n              <!--<div class=\"col-lg-3\">-->\n              <!--<a [routerLink]=\"['/user']\"-->\n              <div class=\"container-fluid\">\n                <a (click)=\"goToEventDetailsComments(interestedEvent['eventId'])\">\n                  {{interestedEvent['eventName']}}</a>\n                <!--<button type=\"button\" class=\"pull-right\" (click)=\"removeFromFavorites(interestedEvent['eventId'])\">-->\n                <!--<span class=\"glyphicon glyphicon-minus\"></span>-->\n                <!--</button>-->\n              </div>\n            </div>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/components/other-user-dashboard/other-user-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtherUserDashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OtherUserDashboardComponent = (function () {
    function OtherUserDashboardComponent(router, activatedRoute, userService, sharedService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.sharedService = sharedService;
    }
    OtherUserDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.otherUserId = params['id'];
            _this.userService.findUserById(_this.otherUserId).subscribe(function (user) {
                _this.otherUserName = user['username'];
            });
            _this.userService.findEventsInterested(_this.otherUserId).subscribe(function (eventsInterested) {
                console.log(eventsInterested[0].favoriteEvents);
                _this.otherUser_Events = eventsInterested[0].favoriteEvents;
            });
        });
    };
    OtherUserDashboardComponent.prototype.goToEventDetailsComments = function (interestedEvent) {
        console.log(interestedEvent);
        this.router.navigate(['/comments', interestedEvent]);
    };
    return OtherUserDashboardComponent;
}());
OtherUserDashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-other-user-dashboard',
        template: __webpack_require__("../../../../../src/app/components/other-user-dashboard/other-user-dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/other-user-dashboard/other-user-dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */]) === "function" && _d || Object])
], OtherUserDashboardComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=other-user-dashboard.component.js.map

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

module.exports = "<nav class=\"navbar navbar-fixed-top bg-primary btnStyle\">\n  <div class=\"container-fluid\">\n\n    <div class=\"navbar-header header-width header-fix\">\n      <p class=\"navbar-text pull-left p-fix\">\n        <a [routerLink]=\"['/about']\" class=\"navbar-link glyphicon-color\">\n          <b>EventPlanet</b>\n        </a>\n      </p>\n    </div>\n  </div>\n</nav>\n\n<div class=\"container-fluid\">\n  <div *ngIf=\"errorFlag\"\n       class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n  <!--<div *ngIf=\"successFlag\"-->\n       <!--class=\"alert alert-success\">-->\n    <!--{{successMsg}}-->\n  <!--</div>-->\n  <h1> Login </h1>\n  <form (ngSubmit)=\"login()\" #f=\"ngForm\">\n    <input placeholder=\"username\"\n           name=\"username\"\n           type=\"text\"\n           id=\"username\"\n           class=\"form-control\"\n           ngModel\n           required\n           #username=\"ngModel\"\n           autocomplete=\"off\"\n           autocapitalize=\"off\"\n    />\n\n    <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">\n      Please enter username!\n    </span>\n    <input placeholder=\"password\"\n           name=\"password\"\n           type=\"password\"\n           id=\"password\"\n           class=\"form-control\"\n           ngModel\n           required\n           #password=\"ngModel\"/>\n    <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">\n      Please enter password!\n    </span>\n    <button class=\"btn btn-block bg-primary btnStyle\"\n            type=\"submit\"\n            [disabled]=\"!f.valid\">Login\n    </button>\n\n    <button class=\"btn btn-block btn-success\"\n            type=\"button\"\n            [routerLink]=\"['/register']\">Register\n    </button>\n    <button class=\"btn btn-block btn-success\"\n            type=\"button\"\n            [routerLink]=\"['/eventSearchAnonymous']\">Cancel\n    </button>\n    <!--<a (click)=\"deleteAllUsers()\">Delete all users-->\n      <!--</a>-->\n\n    <!--<a href=\"/api/facebook/login\" class=\"btn btn-primary btn-block\">-->\n      <!--<span class=\"fa fa-facebook\"></span>-->\n      <!--Facebook-->\n    <!--</a>-->\n\n\n  </form>\n</div>\n\n<nav class=\"navbar navbar-fixed-bottom bg-primary btnStyle\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-left\">\n      @Sai Bhargavi\n    </p>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
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
    function LoginComponent(userService, router, sharedService) {
        this.userService = userService;
        this.router = router;
        this.sharedService = sharedService;
        this.errorMsg = 'Invalid username or password !';
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.successFlag = false;
        this.title = 'This is Login Page';
        this.disabledFlag = true;
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.successFlag = false;
        this.username = this.loginForm.value.username;
        this.password = this.loginForm.value.password;
        this.userService.login(this.username, this.password)
            .subscribe(function (data) {
            // this.router.navigate(['/user', data._id]);
            _this.sharedService.user = data;
            console.log('Login component TS');
            _this.router.navigate(['/dashboard']);
        }, function (error) {
            _this.errorFlag = true;
            _this.errorMsg = 'Invalid username or password !';
            console.log(error);
        });
    };
    LoginComponent.prototype.deleteAllUsers = function () {
        var _this = this;
        this.userService.deleteAllUsers()
            .subscribe(function (status) {
            _this.successFlag = true;
            _this.successMsg = 'All users deleted successfully';
            _this.errorFlag = false;
        });
    };
    return LoginComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], LoginComponent.prototype, "loginForm", void 0);
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/user/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__["a" /* SharedService */]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
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

module.exports = "<nav class=\"navbar navbar-fixed-top bg-primary \">\n  <div class=\"container-fluid btnStyle\">\n    <div class=\"navbar-header header-width header-fix\">\n\n      <span class=\"navbar-brand\">Profile</span>\n      <p class=\"navbar-text pull-right p-fix\">\n        <a (click)=\"updateUser()\" class=\"navbar-link glyphicon-color \">\n                <span class=\"glyphicon glyphicon-ok\">\n                </span>\n        </a>\n      </p>\n    </div>\n\n  </div>\n</nav>\n\n<div *ngIf=\"successFlg\"\n     class=\"alert alert-success\">\n  {{successMsg}}\n</div>\n\n<div class=\"container-fluid\">\n  <label for=\"username\">Username</label>\n  <input [(ngModel)]=\"username\"\n         name=\"username\"\n         id=\"username\"\n         placeholder={{username}}\n         class=\"form-control\"\n         readonly>\n\n  <label for=\"firstName\">First Name</label>\n  <input [(ngModel)]=\"firstName\"\n         name=\"firstname\"\n         id=\"firstName\"\n         placeholder={{firstName}}\n         class=\"form-control\">\n\n  <label for=\"lastName\">Last Name</label>\n  <input [(ngModel)]=\"lastName\"\n         name=\"lastname\"\n         id=\"lastName\"\n         placeholder={{lastName}}\n         class=\"form-control\">\n\n  <label for=\"email\">Email</label>\n  <input [(ngModel)]=\"email\"\n         name=\"email\"\n         id=\"email\"\n         placeholder={{email}}\n         class=\"form-control\">\n\n    <label for=\"role\">Role</label>\n    <select [(ngModel)]=\"role\" class=\"form-control\" name=\"role\" id=\"role\" readonly disabled>\n      <option value=\"USER\">User</option>\n      <option value=\"ORGANIZER\">Organizer</option>\n      <option value=\"ADMIN\">Admin</option>\n    </select>\n\n  <a [routerLink]=\"['/dashboard']\" class=\"btn btn-block btn-primary btnStyle\">\n    Dashboard\n  </a>\n  <a (click)=\"logout()\" class=\"btn btn-block btn-danger\">\n    Logout\n  </a>\n</div>\n\n<nav class=\"navbar navbar-fixed-bottom bg-primary btnStyle\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/profile']\" class=\"navbar-link glyphicon-color\">\n                <span class=\"glyphicon glyphicon-user\">\n                </span>\n      </a>\n    </p>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
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
    function ProfileComponent(userService, activatedRoute, router, sharedService) {
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.sharedService = sharedService;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.user = this.sharedService.user;
        this.username = this.user['username'];
        this.firstName = this.user['firstName'];
        this.lastName = this.user['lastName'];
        this.email = this.user['email'];
        this.role = this.user['role'];
    };
    ProfileComponent.prototype.logout = function () {
        var _this = this;
        this.userService.logout()
            .subscribe(function (data) { return _this.router.navigate(['/login']); });
    };
    ProfileComponent.prototype.updateUser = function () {
        var _this = this;
        this.user = {
            _id: this.user._id,
            username: this.username,
            firstName: this.firstName,
            lastName: this.lastName,
            password: this.password,
            email: this.email
        };
        this.userService.updateUser(this.user._id, this.user)
            .subscribe(function (user) {
            _this.successMsg = 'Profile updated successfully';
            _this.successFlg = true;
        });
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/components/user/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */]) === "function" && _d || Object])
], ProfileComponent);

var _a, _b, _c, _d;
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

module.exports = "<nav class=\"navbar navbar-fixed-top bg-primary btnStyle\">\n  <div class=\"container-fluid\">\n\n    <div class=\"navbar-header header-width header-fix\">\n      <p class=\"navbar-text pull-left p-fix\">\n        <a [routerLink]=\"['/about']\" class=\"navbar-link glyphicon-color\">\n          <b>EventPlanet</b>\n        </a>\n      </p>\n    </div>\n  </div>\n</nav>\n\n<div class=\"container-fluid\">\n  <div *ngIf=\"errorFlag\"\n       class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n  <h1> Register </h1>\n  <form (ngSubmit)=\"register()\" #f=\"ngForm\">\n\n    <input placeholder=\"username\"\n           name=\"username\"\n           type=\"text\"\n           id=\"username\"\n           class=\"form-control\"\n           ngModel\n           required\n           #username=\"ngModel\"/>\n    <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">\n      Please enter username!\n    </span>\n\n    <input placeholder=\"password\"\n           name=\"password\"\n           type=\"password\"\n           id=\"password\"\n           class=\"form-control\"\n           ngModel\n           required\n           #password=\"ngModel\"/>\n    <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">\n      Please enter password!\n    </span>\n    <input placeholder=\"verify password\"\n           name=\"verifyPassword\"\n           type=\"password\"\n           id=\"verifyPassword\"\n           class=\"form-control\"\n           ngModel\n           required\n           #verifyPassword=\"ngModel\"/>\n    <span class=\"help-block\" *ngIf=\"!verifyPassword.valid && verifyPassword.touched\">\n      Please verify password!\n    </span>\n    <span class=\"help-block\" *ngIf=\"password.value != verifyPassword.value\">\n      Passwords do not match\n    </span>\n\n    <select [(ngModel)]=\"role\" class=\"form-control\" name=\"role\">\n      <option value=\"\">Select Role</option>\n      <option value=\"USER\">User</option>\n      <option value=\"ORGANIZER\">Organizer</option>\n      <option value=\"ADMIN\">Admin</option>\n    </select>\n    <button class=\"btn btn-block btnStyle bg-primary\"\n            type=\"submit\"\n            [disabled]=\"!f.valid\">Register\n    </button>\n    <button class=\"btn btn-block btn-danger\"\n            type=\"button\"\n            [routerLink]=\"['/login']\">Cancel\n    </button>\n  </form>\n</div>\n<nav class=\"navbar navbar-fixed-bottom bg-primary btnStyle\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-left\">\n      @Sai Bhargavi\n    </p>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
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
    function RegisterComponent(userService, sharedService, router) {
        this.userService = userService;
        this.sharedService = sharedService;
        this.router = router;
        this.errorMsg = 'Invalid username or password !';
    }
    RegisterComponent.prototype.ngOnInit = function () {
        // this.role = '';
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
        this.role = this.registerForm.value.role;
        console.log(this.role);
        this.userService.findUserByUsername(this.username)
            .subscribe(function (user) {
            if (user !== null) {
                _this.errorMsg = 'User already exists!';
                _this.errorFlag = true;
            }
            else if (_this.verifyPassword === _this.password) {
                // this.newUserId = Math.random().toString();
                var newUser = {
                    username: _this.username,
                    password: _this.password,
                    role: _this.role
                };
                _this.userService.register(_this.username, _this.password, _this.role)
                    .subscribe(function (data) {
                    _this.router.navigate(['/login']);
                }, function (error) {
                    _this.error = error._body;
                });
            }
        });
    };
    return RegisterComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], RegisterComponent.prototype, "registerForm", void 0);
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/user/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__["a" /* SharedService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        return this.userService.loggedIn();
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/comment.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CommentService = (function () {
    function CommentService(_http, sharedService, router) {
        this._http = _http;
        this.sharedService = sharedService;
        this.router = router;
        // Asgn 6
        // options: RequestOptions = new RequestOptions();
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    CommentService.prototype.modifyComment = function (eventId, commentId, commentText) {
        var eventComment = {
            eventId: eventId,
            commentId: commentId,
            commentText: commentText
        };
        return this._http.post(this.baseUrl + '/api/modifyCommentToEvent', eventComment)
            .map(function (res) {
            return res.json();
        });
    };
    CommentService.prototype.deleteComment = function (eventId, commentId) {
        var eventComment = {
            eventId: eventId,
            commentId: commentId
        };
        console.log(eventId, commentId);
        return this._http.post(this.baseUrl + '/api/deleteCommentToEvent', eventComment)
            .map(function (res) {
            return res.json();
        });
    };
    CommentService.prototype.findAllCommentsForEvent = function (eventId) {
        var url = this.baseUrl + '/api/findAllCommentsForEvent/' + eventId;
        return this._http.get(url).map(function (response) {
            return response.json();
        });
    };
    CommentService.prototype.addCommentToEvent = function (event, comment) {
        var eventComment = {
            eventId: event,
            comment: comment
        };
        return this._http.post(this.baseUrl + '/api/addCommentToEvent', eventComment)
            .map(function (res) {
            return res.json();
        });
    };
    CommentService.prototype.getEventName = function (eventId) {
        var url = this.baseUrl + '/api/getEventName/' + eventId;
        return this._http.get(url).map(function (response) {
            return response.json();
        });
    };
    return CommentService;
}());
CommentService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_service_client__["a" /* SharedService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _c || Object])
], CommentService);

var _a, _b, _c;
//# sourceMappingURL=comment.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/event-search.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventSearchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import {keys} from '../../../keys';
var EventSearchService = (function () {
    function EventSearchService(_http, router) {
        this._http = _http;
        this.router = router;
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]();
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
        this.apiKey = 'MkD6G4ptdWk8dbPr';
        this.proxyURL = 'https://cors-anywhere.herokuapp.com/';
        this.apiURL = 'http://api.eventful.com/json/events/search/?location=VALUE&app_key=API_KEY&date=Future&page_size=50';
        this.apiDetailURL = 'http://api.eventful.com/json/events/get?id=VALUE&app_key=API_KEY';
    }
    EventSearchService.prototype.search = function (searchTerm) {
        var url = this.proxyURL +
            this.apiURL.replace('VALUE', searchTerm).replace('API_KEY', this.apiKey);
        return this._http.get(url).map(function (response) {
            return response.json();
        });
    };
    EventSearchService.prototype.getEventDetails = function (id) {
        var url = this.proxyURL +
            this.apiDetailURL.replace('VALUE', id).replace('API_KEY', this.apiKey);
        return this._http.get(url).map(function (response) {
            return response.json();
        });
    };
    return EventSearchService;
}());
EventSearchService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _b || Object])
], EventSearchService);

var _a, _b;
// http://api.eventful.com/json/events/search/?location=San Diego&app_key=MkD6G4ptdWk8dbPr
//# sourceMappingURL=event-search.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/flickr.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlickrService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FlickrService = (function () {
    function FlickrService(_http) {
        this._http = _http;
        this.key = '5d9596b602c29a4986e327ebe8a77ed8';
        this.secret = '46d8cf97d7b21bff';
        this.urlBase = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=API_KEY&text=TEXT';
    }
    FlickrService.prototype.searchPhotos = function (searchTerm) {
        var url = this.urlBase
            .replace('API_KEY', this.key)
            .replace('TEXT', searchTerm);
        console.log('IN flickr.service.client.ts -> searchPhotos()');
        return this._http.get(url);
    };
    return FlickrService;
}());
FlickrService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], FlickrService);

var _a;
// 'https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=5d9596b602c29a4986e327ebe8a77ed8&text=flower'
//# sourceMappingURL=flickr.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/manage-event.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageEventService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ManageEventService = (function () {
    function ManageEventService(_http, sharedService, router) {
        this._http = _http;
        this.sharedService = sharedService;
        this.router = router;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    ManageEventService.prototype.findEventsCreated = function (userId) {
        var url = this.baseUrl + '/api/findEventsCreated/' + userId;
        return this._http.get(url).map(function (response) {
            return response.json();
        });
    };
    ManageEventService.prototype.findEventsCreatedByOthers = function (userId) {
        var url = this.baseUrl + '/api/findEventsCreatedByOthers/' + userId;
        return this._http.get(url).map(function (response) {
            return response.json();
        });
    };
    ManageEventService.prototype.addEvent = function (event) {
        var eventBody = {
            eventNew: event
        };
        return this._http.post(this.baseUrl + '/api/addNewEvent', eventBody)
            .map(function (res) {
            return res.json();
        });
    };
    ManageEventService.prototype.updateNewEvent = function (id) {
        var reqBody = {
            eventId: id
        };
        console.log('---- manage - evnet - client', reqBody);
        return this._http.post(this.baseUrl + '/api/updateNewEvent', reqBody)
            .map(function (res) {
            return res.json();
        });
    };
    ManageEventService.prototype.modifyComment = function (eventId, commentId, commentText) {
        var eventComment = {
            eventId: eventId,
            commentId: commentId,
            commentText: commentText
        };
        return this._http.post(this.baseUrl + '/api/modifyCommentToEvent', eventComment)
            .map(function (res) {
            return res.json();
        });
    };
    ManageEventService.prototype.deleteEvent = function (eventId) {
        var url = this.baseUrl + '/api/deleteEvent/' + eventId;
        return this._http.delete(url)
            .map(function (response) {
            return response.json();
        });
    };
    ManageEventService.prototype.findAllCommentsForEvent = function (eventId) {
        var url = this.baseUrl + '/api/findAllCommentsForEvent/' + eventId;
        return this._http.get(url).map(function (response) {
            return response.json();
        });
    };
    ManageEventService.prototype.getEventName = function (eventId) {
        var url = this.baseUrl + '/api/getEventName/' + eventId;
        return this._http.get(url).map(function (response) {
            return response.json();
        });
    };
    return ManageEventService;
}());
ManageEventService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_service_client__["a" /* SharedService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _c || Object])
], ManageEventService);

var _a, _b, _c;
//# sourceMappingURL=manage-event.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/shared.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SharedService = (function () {
    function SharedService() {
        this.user = '';
    }
    return SharedService;
}());
SharedService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], SharedService);

//# sourceMappingURL=shared.service.client.js.map

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
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
    function UserService(_http, sharedService, router) {
        this._http = _http;
        this.sharedService = sharedService;
        this.router = router;
        // Asgn 6
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]();
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    UserService.prototype.findEventsInterested = function (userId) {
        var url = this.baseUrl + '/api/getInterestedEvents/' + userId;
        return this._http.get(url).map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.addToFavorites = function (userId, eventId, eventName) {
        var url = this.baseUrl + '/api/addToFavorites/';
        var body = {
            userId: userId,
            eventId: eventId,
            eventName: eventName
        };
        return this._http.post(url, body)
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.removeFromFavorites = function (userId, eventName) {
        var url = this.baseUrl + '/api/removeFromFavorites/';
        var body = {
            userId: userId,
            eventName: eventName
        };
        return this._http.post(url, body)
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.findUsers = function () {
        var url = this.baseUrl + '/api/users/';
        return this._http.get(url).map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.login = function (username, password) {
        this.options.withCredentials = true;
        var body = {
            username: username,
            password: password
        };
        return this._http.post(this.baseUrl + '/api/login', body, this.options)
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.logout = function () {
        this.options.withCredentials = true;
        return this._http.post(this.baseUrl + '/api/logout', '', this.options)
            .map(function (res) {
            var data = res;
        });
    };
    UserService.prototype.register = function (username, password, role) {
        this.options.withCredentials = true;
        var user = {
            username: username,
            password: password,
            role: role
        };
        return this._http.post(this.baseUrl + '/api/register', user, this.options)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    UserService.prototype.loggedIn = function () {
        var _this = this;
        this.options.withCredentials = true;
        return this._http.post(this.baseUrl + '/api/loggedIn', '', this.options)
            .map(function (res) {
            var user = res.json();
            if (user !== 0) {
                _this.sharedService.user = user;
                return true;
            }
            else {
                _this.sharedService.user = '';
                _this.router.navigate(['/login']);
                return false;
            }
        });
    };
    UserService.prototype.createUser = function (user) {
        var url = this.baseUrl + '/api/user/';
        console.log('creating new user-> user service client');
        return this._http.post(url, user)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.findUserById = function (userId) {
        var url = this.baseUrl + '/api/user/' + userId;
        return this._http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.findUserByUsername = function (username) {
        var url = this.baseUrl + '/api/user?username=' + username;
        return this._http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.updateUser = function (userId, user) {
        user.id = userId;
        var url = this.baseUrl + '/api/user/' + userId;
        return this._http.put(url, user)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.deleteUser = function (userId) {
        var url = this.baseUrl + '/api/user/' + userId;
        return this._http.delete(url)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.findUserByCredentials = function (username, password) {
        var url = this.baseUrl + '/api/user?username=' + username + '&password=' + password;
        return this._http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.deleteAllUsers = function () {
        var url = this.baseUrl + '/api/deleteAllUsers';
        return this._http.delete(url)
            .map(function (response) {
            return response.status;
        });
    };
    UserService.prototype.findUsersFollowing = function (userId) {
        var url = this.baseUrl + '/api/user/' + userId + '/dashboard/following';
        return this._http.get(url).map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.findUserFollowedBy = function (userId) {
        var url = this.baseUrl + '/api/user/' + userId + '/dashboard/followedBy';
        return this._http.get(url).map(function (respoonse) {
            return respoonse.json();
        });
    };
    UserService.prototype.addUserToFollow = function (userId, followingId) {
        var url = this.baseUrl + '/api/user/' + userId + '/following/' + followingId;
        return this._http.put(url, followingId).map(function (response, Response) {
            return response.json();
        });
    };
    UserService.prototype.addUserToFollowedBy = function (userId, followingId) {
        var url = this.baseUrl + '/api/user/' + followingId + '/followedBy/' + userId;
        return this._http.put(url, followingId).map(function (response, Response) {
            return response.json();
        });
    };
    UserService.prototype.removeUserFromFollow = function (userId, followingId) {
        var url = this.baseUrl + '/api/user/' + userId + '/unfollow/' + followingId;
        return this._http.put(url, followingId).map(function (response, Response) {
            return response.json();
        });
    };
    UserService.prototype.removeUserFromFollowedBy = function (userId, followingId) {
        var url = this.baseUrl + '/api/user/' + followingId + '/unfollowedBy/' + userId;
        return this._http.put(url, followingId).map(function (response, Response) {
            return response.json();
        });
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_service_client__["a" /* SharedService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _c || Object])
], UserService);

var _a, _b, _c;
//# sourceMappingURL=user.service.client.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    baseUrl: '',
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