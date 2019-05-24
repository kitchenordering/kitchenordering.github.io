(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./layouts/admin-layout/admin-layout.module": [
		"./src/app/layouts/admin-layout/admin-layout.module.ts",
		"layouts-admin-layout-admin-layout-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".spinner {\r\n    border: 16px solid silver;\r\n    border-top: 16px solid #337AB7;\r\n    border-radius: 50%;\r\n    width: 80px;\r\n    height: 80px;\r\n    -webkit-animation: spin 700ms linear infinite;\r\n            animation: spin 700ms linear infinite;\r\n    top:50%;\r\n    left:50%;\r\n    position: absolute;\r\n  }\r\n  @-webkit-keyframes spin {\r\n    0% { -webkit-transform: rotate(0deg); transform: rotate(0deg) }\r\n    100% { -webkit-transform: rotate(-360deg); transform: rotate(-360deg) }\r\n  }\r\n  @keyframes spin {\r\n    0% { -webkit-transform: rotate(0deg); transform: rotate(0deg) }\r\n    100% { -webkit-transform: rotate(-360deg); transform: rotate(-360deg) }\r\n  }\r\n  .col{\r\n    background-color: #ff4800;\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showLoadingIndicator\" class=\"spinner\"></div>\n\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(_router) {
        var _this = this;
        this._router = _router;
        this.showLoadingIndicator = true;
        this._router.events.subscribe(function (routerEvent) {
            if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                _this.showLoadingIndicator = true;
            }
            if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"] ||
                routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationError"] ||
                routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationCancel"]) {
                _this.showLoadingIndicator = false;
            }
        });
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-webstorage */ "./node_modules/ngx-webstorage/fesm5/ngx-webstorage.js");
/* harmony import */ var ngx_progressbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-progressbar */ "./node_modules/ngx-progressbar/modules/ngx-progressbar.es5.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.component */ "./src/app/layouts/admin-layout/admin-layout.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












// import { MapsComponent } from './maps/maps.component';
// import { NotificationsComponent } from './notifications/notifications.component';



// import { MainfilterPipe } from './mainfilter.pipe';
// import { UpgradeComponent }   from './upgrade/upgrade.component';
// import { LoginComponent } from './app/login/login.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_13__["AdminLayoutComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
            ],
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__["BrowserAnimationsModule"],
                ngx_webstorage__WEBPACK_IMPORTED_MODULE_10__["NgxWebstorageModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
                ngx_progressbar__WEBPACK_IMPORTED_MODULE_11__["NgProgressModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrModule"].forRoot({
                    timeOut: 1000,
                    positionClass: 'toast-bottom-right',
                    preventDuplicates: true,
                }),
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([
                    // {
                    //   path: '',
                    //   component: AppComponent 
                    // },
                    {
                        path: 'login',
                        component: _login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"]
                    },
                ]),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_12__["AgmCoreModule"].forRoot({
                    apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
                })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.component */ "./src/app/layouts/admin-layout/admin-layout.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    }, {
        path: '',
        component: _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_4__["AdminLayoutComponent"],
        children: [
            {
                path: '',
                loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
            }
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)
            ],
            exports: [],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            ],
            declarations: [
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"]
            ],
            exports: [
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"]
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <footer class=\"footer \">\n    <div class=\"container-fluid\">\n        <nav class=\"pull-left\">\n            <ul>\n                <li>\n                    <a href=\"https://www.creative-tim.com\">\n                        Creative Tim\n                    </a>\n                </li>\n                <li>\n                    <a href=\"https://creative-tim.com/about-us\">\n                        About Us\n                    </a>\n                </li>\n                <li>\n                    <a href=\"http://blog.creative-tim.com\">\n                        Blog\n                    </a>\n                </li>\n                <li>\n                    <a href=\"https://www.creative-tim.com/license\">\n                        Licenses\n                    </a>\n                </li>\n            </ul>\n        </nav>\n        <div class=\"copyright pull-right\">\n            &copy;\n            {{test | date: 'yyyy'}}, made with love by\n            <a href=\"https://www.creative-tim.com\" target=\"_blank\">Creative Tim</a> for a better web.\n        </div>\n    </div>\n</footer> -->\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav{\r\n    background-color:#2e6da4 !important;  /* fallback for old browsers */  /* Chrome 10-25, Safari 5.1-6 */\r\nbackground-image: linear-gradient(#1D2671); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\r\n    color: white;\r\n}\r\n.navbar.navbar-transparent{\r\n    background-color: #ff4800 !important;\r\n}\r\n.sortable:hover {\r\n    cursor: pointer;\r\n    cursor: hand;\r\n}\r\n.foo {\r\n    \r\n    /* border: solid black 1px; */\r\n    display: inline-block;\r\n    vertical-align: top;\r\n}\r\n.iconsover:hover{\r\n    box-shadow: -2px 4px 20px 2px;\r\n}\r\n.pointerCursor:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n\r\n              \r\n\r\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-expand-lg navbar-transparent  navbar-absolute fixed-top\">\n  \n  <div class=\"container-fluid\">\n    <div class=\"navbar-wrapper\">\n      <a class=\"navbar-brand pointerCursor\" title=\"click to logout\"  (click)=\"logout\" (click)=\"panelExpanded = !panelExpanded\">{{getTitle()}}</a>\n     \n      <div class=\"row\">\n          <!-- <ng-progress [positionUsing]=\"'marginLeft'\" [minimum]=\"0.15\" [maximum]=\"1\"\n          [speed]=\"200\" [showSpinner]=\"true\" [direction]=\"'rightToLeftIncreased'\"\n          [color]=\"'green'\" [trickleSpeed]=\"250000\" [thick]=\"true\" [ease]=\"'linear'\"\n          ></ng-progress> -->\n          <div class=\"col-3\" (click)=\"btnClick1()\">\n              <img class=\" sortable iconsover\" title=\"Cheff Screen\" style=\"width:35px; height:35px\" src=\"assets/sev.png\">\n              <span class=\"notification\" style=\"font-size:15px;margin-top: -12px;margin-right: -10px\">{{count}}</span>\n          </div>\n            \n        <div class=\"col-3\" data-toggle=\"modal\" (click)=\"cli()\"  data-target=\"#myModal33\">\n          \n          <img class=\" sortable iconsover\" title=\"Bearer Notification\" style=\"width:35px; height:35px\" src=\"assets/not.png\">\n         <span class=\"notification sortable foo\" style=\"font-size:15px;margin-top: -12px;margin-right: -10px\">{{count2}}</span>\n        </div>\n\n        <div class=\"col-3\" (click)=\"btnClick2()\">\n          <img class=\" sortable iconsover\"  title=\"Bearer Screen\" style=\"width:35px; height:35px\" src=\"assets/22.png\">\n        </div>\n        \n        <div class=\"col-3\" (click)=\"btnClick()\">\n            <img class=\" sortable iconsover\" title=\"Food Items E/D Screen\" style=\"width:35px; height:35px\" src=\"assets/men.png\">\n        </div>\n      </div> \n    </div>\n    <a (click)=\"btnClick3()\"  *ngIf=\"panelExpanded\" class=\"btn btn-primary float-right\"\n    style=\"background-color: #f80000;  \"  >logout </a>\n  </div>\n  \n  \n \n    \n      \n    <!-- <i class=\"far fa-bell fa-2x\" ></i> -->\n          <!-- <i class=\"fas fa-concierge-bell sortable fa-2x\" (click)=\"btnClick2()\"></i> -->\n            <!-- <i class=\"fas fa-hot-tub sortable fa-2x\" (click)=\"btnClick1()\"></i> -->\n            <!-- &nbsp; <i class=\"fas fa-clipboard-list sortable fa-2x\" (click)=\"btnClick()\" style=\"margin-right:5px\" title=\"Item List\"></i> -->\n\n\n\n\n</nav>\n <div > \n    <!--  -->\n\n<div  class=\"modal fade\" id=\"myModal33\"> \n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n\n      <!-- Modal Header -->\n      <div class=\"modal-header\" >\n        <h4 class=\"modal-title font-weight-bold\" style=\"font-size:30px\"> NOTIFICATION </h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      </div>\n\n      <!-- Modal body -->\n      <div *ngIf=\"count2>0\" class=\"modal-body\">\n        <div class=\"card  \" style=\" background-color: rgb(255, 255, 255);\" *ngFor=\"let key of notify\">\n          \n            <div class=\"\" >\n              <h5 class=\"card-title font-weight-bold\" style=\" color: rgb(58, 54, 54);height: 40px; font-size: 30px \">\n                TABLE: {{key.table_no}}</h5>\n\n              <div style=\"  font-size: 18px \" *ngFor=\"let xvalue of key.items\">\n                {{xvalue.food_name}}\n\n                <!-- data-dismiss=\"modal\" -->\n               \n              </div>\n              <a class=\"btn font-weight-bold btn-primary float-right\"\n              style=\"background-color: #ff4800;  width: 30%\" (click)=\"Readed(key)\">ok </a>\n    \n\n            </div>\n\n\n\n            <div>\n\n\n            </div>\n\n\n    \n\n\n        </div>\n\n\n      </div>\n      <div *ngIf=\"count2 == 0\"class=\"modal-body\">\n       <h3>NO NOTIFICATION TO SHOW</h3>\n          \n       <button type=\"button\" class=\"btn btn-danger float-right \" data-dismiss=\"modal\">Close</button>\n  \n        </div>\n      <!-- Modal footer -->\n      <!-- <div class=\"modal-footer\"> -->\n\n        <!-- <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>\n              <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\" (click)=\"Update_con(itemname,departmentid,createrid,itid)\">OK</button> -->\n      <!-- </div> -->\n\n    </div>\n  </div>\n</div>\n\n </div> \n\n\n<!-- <div class=\"container\">\n                     \n\n       \n      \n   \n        <div class=\"modal fade\" id=\"myModal\">\n          <div class=\"modal-dialog\">\n            <div class=\"modal-content\">\n            \n           \n              <div class=\"modal-header\">\n                <h4 class=\"modal-title\">EDIT FOOD ITEMS</h4>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n              </div>\n            \n              <div class=\"modal-body\">\n                    <label style=\"font-size:20px;\" >FOOD ITEMS</label>\n                   \n              <label style=\"font-size:20px;\" >FOOD ITEMS</label>\n                    <select class=\"custom-select\" id=\"inputGroupSelect02\">\n                      <option selected>Choose...</option>\n                      <option value=\"1\">One</option>\n                      <option value=\"2\">Two</option>\n                      <option value=\"3\">Three</option>\n                    </select>\n              <label style=\"font-size:20px;\" >STATUS</label>\n                    <select class=\"custom-select\" id=\"inputGroupSelect02\">\n                      <option selected>Choose...</option>\n                      <option value=\"1\">One</option>\n                      <option value=\"2\">Two</option>\n                      <option value=\"3\">Three</option>\n                    </select>\n                   \n                  \n              \n             \n              <div class=\"modal-footer\">\n                <button type=\"button\" style=\" background-color: rgb(35, 104, 182);\" class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>\n                <button type=\"button\"  style=\" background-color: rgb(35, 104, 182);\" class=\"btn btn-danger\" data-dismiss=\"modal\" (click)=\"Delete_Alexa(alaxaid)\">OK</button>\n              </div>\n              \n            </div>\n          </div>\n        </div>\n        </div>\n    </div> -->\n\n<!--\n\n<nav class=\"navbar navbar-transparent navbar-absolute\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <button mat-raised-button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" (click)=\"sidebarToggle()\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\" href=\"#\">{{getTitle()}}</a>\n        </div>\n        <div class=\"collapse navbar-collapse\">\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li>\n                    <a href=\"#pablo\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                        <i class=\"material-icons\">dashboard</i>\n                        <p class=\"hidden-lg hidden-md\">Dashboard</p>\n                    </a>\n                </li>\n                <li class=\"dropdown\">\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                        <i class=\"material-icons\">notifications</i>\n                        <span class=\"notification\">5</span>\n                        <p class=\"hidden-lg hidden-md\">Notifications</p>\n                    </a>\n                    <ul class=\"dropdown-menu\">\n                        <li><a href=\"#\">Mike John responded to your email</a></li>\n                        <li><a href=\"#\">You have 5 new tasks</a></li>\n                        <li><a href=\"#\">You're now friend with Andrew</a></li>\n                        <li><a href=\"#\">Another Notification</a></li>\n                        <li><a href=\"#\">Another One</a></li>\n                    </ul>\n                </li>\n                <li>\n                    <a href=\"#pablo\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                       <i class=\"material-icons\">person</i>\n                       <p class=\"hidden-lg hidden-md\">Profile</p>\n                    </a>\n                </li>\n            </ul>\n\n            <form class=\"navbar-form navbar-right\" role=\"search\">\n                <div class=\"form-group form-black is-empty\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n                    <span class=\"material-input\"></span>\n                </div>\n                <button mat-raised-button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\n                    <i class=\"material-icons\">search</i><div class=\"ripple-container\"></div>\n                </button>\n            </form>\n        </div>\n    </div>\n</nav> -->"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _navbar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar.service */ "./src/app/components/navbar/navbar.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-webstorage */ "./node_modules/ngx-webstorage/fesm5/ngx-webstorage.js");
/* harmony import */ var ngx_progressbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-progressbar */ "./node_modules/ngx-progressbar/modules/ngx-progressbar.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(ngProgress, location, element, toastr, router, nav, storage) {
        this.ngProgress = ngProgress;
        this.element = element;
        this.toastr = toastr;
        this.router = router;
        this.nav = nav;
        this.storage = storage;
        this.panelExpanded = false;
        this.food = [];
        this.not = [];
        this.count = [];
        this.count2 = [];
        this.notify = [];
        this.notify1 = [];
        this.orderdetid = [];
        this.mobile_menu_visible = 0;
        this.location = location;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.Food_Orders();
        this.Serve();
        setInterval(function () { return _this.Food_Orders(); }, 5000);
        setInterval(function () { return _this.Serve(); }, 5000);
        // 
        this.listTitles = _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__["ROUTES"].filter(function (listTitle) { return listTitle; });
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
        this.router.events.subscribe(function (event) {
            _this.sidebarClose();
            var $layer = document.getElementsByClassName('close-layer')[0];
            if ($layer) {
                $layer.remove();
                _this.mobile_menu_visible = 0;
            }
        });
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        body.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    ;
    NavbarComponent.prototype.sidebarClose = function () {
        var body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    };
    ;
    NavbarComponent.prototype.sidebarToggle = function () {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        var $toggle = document.getElementsByClassName('navbar-toggler')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
        var body = document.getElementsByTagName('body')[0];
        if (this.mobile_menu_visible == 1) {
            // $('html').removeClass('nav-open');
            body.classList.remove('nav-open');
            if ($layer) {
                $layer.remove();
            }
            setTimeout(function () {
                $toggle.classList.remove('toggled');
            }, 400);
            this.mobile_menu_visible = 0;
        }
        else {
            setTimeout(function () {
                $toggle.classList.add('toggled');
            }, 430);
            var $layer = document.createElement('div');
            $layer.setAttribute('class', 'close-layer');
            if (body.querySelectorAll('.main-panel')) {
                document.getElementsByClassName('main-panel')[0].appendChild($layer);
            }
            else if (body.classList.contains('off-canvas-sidebar')) {
                document.getElementsByClassName('wrapper-full-page')[0].appendChild($layer);
            }
            setTimeout(function () {
                $layer.classList.add('visible');
            }, 100);
            $layer.onclick = function () {
                body.classList.remove('nav-open');
                this.mobile_menu_visible = 0;
                $layer.classList.remove('visible');
                setTimeout(function () {
                    $layer.remove();
                    $toggle.classList.remove('toggled');
                }, 400);
            }.bind(this);
            body.classList.add('nav-open');
            this.mobile_menu_visible = 1;
        }
    };
    ;
    NavbarComponent.prototype.getTitle = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(2);
        }
        titlee = titlee.split('/').pop();
        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return 'BUHARI KITCHEN';
    };
    NavbarComponent.prototype.btnClick = function () {
        this.router.navigateByUrl('/dashboard');
    };
    ;
    NavbarComponent.prototype.btnClick1 = function () {
        this.router.navigateByUrl('/user-profile');
    };
    ;
    NavbarComponent.prototype.btnClick2 = function () {
        this.router.navigateByUrl('/table-list');
    };
    ;
    NavbarComponent.prototype.btnClick3 = function () {
        this.router.navigateByUrl('/login');
    };
    ;
    NavbarComponent.prototype.Food_Orders = function () {
        var _this = this;
        var body = {
            "branch_id": this.storage.retrieve("businessid")
        };
        this.nav.Food_Orders(body).subscribe(function (Response) {
            if (Response.ReturnCode == "RRS") {
                _this.food = Response.Returnvalue;
                _this.count = Response.order_status_count;
            }
        });
    };
    NavbarComponent.prototype.not_n = function () {
        var _this = this;
        this.nav.not_n().subscribe(function (Response) {
            if (Response.ReturnCode == "RRS") {
                _this.not = Response.Returnvalue;
            }
        });
    };
    NavbarComponent.prototype.Serve = function () {
        var _this = this;
        var body = {
            "branch_id": this.storage.retrieve("businessid")
        };
        this.nav.Notification(body).subscribe(function (Response) {
            if (Response.ReturnCode == "RRS") {
                _this.notify = Response.Returnvalue;
                _this.count2 = Response.Notification_Count;
                // console.log(this.notify)
                // for (var i = 0; i < this.notify.length; i++) {
                //     for (var j = 0; j < this.notify[i].items.length; j++) {
                //       this.orderdetid.push(this.notify[i].items[j].order_details_id)
                //     }
                //   }
                // }
                //  console.log("vvvvvvvvvv", this.orderdetid);
            }
        });
    };
    NavbarComponent.prototype.Readed = function (key) {
        var _this = this;
        // this.ngProgress.start();
        // alert(this.orderdetid)
        var body1 = {
            "branch_id": this.storage.retrieve("businessid")
        };
        this.nav.Notification(body1).subscribe(function (Response) {
            if (Response.ReturnCode == "RRS") {
                _this.notify1 = Response.Returnvalue;
                _this.count2 = Response.Notification_Count;
                // console.log(this.notify)
                for (var i = 0; i < _this.notify1.length; i++) {
                    if (_this.notify[i]['table_no'] == key.table_no) {
                        var all_items1 = _this.notify[i]['items'];
                        for (var j = 0; j < all_items1.length; j++) {
                            _this.orderdetid.push(all_items1[j]['order_details_id']);
                        }
                    }
                }
            }
            var body = {
                "notification_status_id": 1,
                "order_details_id": _this.orderdetid,
                "branch_id": _this.storage.retrieve("businessid")
            };
            // console.log("jhbjk",body)
            _this.nav.Readed(body).subscribe(function (Response) {
                if (Response.ReturnCode == "RUS") {
                    _this.toastr.success('Thank You For Serving The Food');
                    _this.Serve();
                }
            });
        });
        // alert(this.orderdetid)
        //  console.log("vvvvvvvvvv", this.orderdetid);
        this.orderdetid = [];
        // this.ngProgress.done();
    };
    NavbarComponent.prototype.cli = function () {
        if (this.count2 == 0) {
            this.toastr.success('No Notification to Show');
        }
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")],
            providers: [_navbar_service__WEBPACK_IMPORTED_MODULE_4__["NavbarService"]]
        }),
        __metadata("design:paramtypes", [ngx_progressbar__WEBPACK_IMPORTED_MODULE_7__["NgProgress"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _navbar_service__WEBPACK_IMPORTED_MODULE_4__["NavbarService"], ngx_webstorage__WEBPACK_IMPORTED_MODULE_6__["LocalStorageService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/navbar/navbar.service.ts ***!
  \*****************************************************/
/*! exports provided: NavbarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarService", function() { return NavbarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarService = /** @class */ (function () {
    function NavbarService(http, https) {
        this.http = http;
        this.https = https;
    }
    NavbarService.prototype.Food_Orders = function (select) {
        return this.http.post("https://tos-production.herokuapp.com/Query_today_food_orders", select);
    };
    NavbarService.prototype.not_n = function () {
        var insert = {};
        return this.http.post("https://table-ordering-system.herokuapp.com/Query_today_food_orders", insert);
    };
    NavbarService.prototype.Notification = function (upl) {
        return this.http.post("https://tos-production.herokuapp.com/Query_Notification_Food_Items", upl);
    };
    NavbarService.prototype.Readed = function (read) {
        return this.http.post("https://tos-production.herokuapp.com/Update_Notification_Status", read);
    };
    NavbarService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], NavbarService);
    return NavbarService;
}());



/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidebar-wrapper{\r\n    background: rgb(235, 60, 211);  /* fallback for old browsers */  /* Chrome 10-25, Safari 5.1-6 */\r\nbackground: linear-gradient( #1D2671, #26c6da ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"logo\" style=\"background: rgb(0, 27, 35);  /* fallback for old browsers */\">\n        <a class=\"simple-text\">\n            <!-- <div class=\"logo-img\">\n                <img src=\"/assets/img/angular2-logo-red.png\"/>\n            </div> -->\n           <!-- Multi Ordering System -->\n        </a>\n    </div>\n<div class=\"sidebar-wrapper\">\n \n    <ul class=\"nav\">\n        <li routerLinkActive=\"active\" *ngFor=\"let menuItem of menuItems\" class=\"{{menuItem.class}} nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"[menuItem.path]\">\n                <i class=\"material-icons\">{{menuItem.icon}}</i>\n                <p>{{menuItem.title}}</p>\n            </a>\n        </li>\n        \n    </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: ROUTES, SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ROUTES = [
    { path: '/login', title: 'KOT', icon: 'content_paste', class: '' },
];
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.menuItems = ROUTES.filter(function (menuItem) { return menuItem; });
    };
    SidebarComponent.prototype.isMobileMenu = function () {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
    ;
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/components/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.component.html":
/*!******************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"sidebar\" data-color=\"danger\" data-background-color=\"white\" data-image=\"./assets/img/sidebar-1.jpg\">\n        <div class=\"sidebar-background\" style=\"background-image: url(./assets/img/sidebar-4.jpg)\"></div>\n    </div>\n    <div class=\"main-panel\">\n        <app-navbar></app-navbar>\n        <router-outlet></router-outlet>\n        <div *ngIf=\"isMaps('maps')\">\n            <app-footer></app-footer>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.ts ***!
  \****************************************************************/
/*! exports provided: AdminLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function() { return AdminLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! perfect-scrollbar */ "./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminLayoutComponent = /** @class */ (function () {
    function AdminLayoutComponent(location, router) {
        this.location = location;
        this.router = router;
        this.yScrollStack = [];
    }
    AdminLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        var isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
        if (isWindows && !document.getElementsByTagName('body')[0].classList.contains('sidebar-mini')) {
            document.getElementsByTagName('body')[0].classList.add('perfect-scrollbar-on');
        }
        else {
            document.getElementsByTagName('body')[0].classList.remove('perfect-scrollbar-off');
        }
        var elemMainPanel = document.querySelector('.main-panel');
        var elemSidebar = document.querySelector('.sidebar .sidebar-wrapper');
        this.location.subscribe(function (ev) {
            _this.lastPoppedUrl = ev.url;
        });
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationStart"]) {
                if (event.url != _this.lastPoppedUrl)
                    _this.yScrollStack.push(window.scrollY);
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                if (event.url == _this.lastPoppedUrl) {
                    _this.lastPoppedUrl = undefined;
                    window.scrollTo(0, _this.yScrollStack.pop());
                }
                else
                    window.scrollTo(0, 0);
            }
        });
        this._router = this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]; }).subscribe(function (event) {
            elemMainPanel.scrollTop = 0;
            elemSidebar.scrollTop = 0;
        });
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["default"](elemMainPanel);
            ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["default"](elemSidebar);
        }
    };
    AdminLayoutComponent.prototype.ngAfterViewInit = function () {
        this.runOnRouteChange();
    };
    AdminLayoutComponent.prototype.isMaps = function (path) {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice(1);
        if (path == titlee) {
            return false;
        }
        else {
            return true;
        }
    };
    AdminLayoutComponent.prototype.runOnRouteChange = function () {
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var elemMainPanel = document.querySelector('.main-panel');
            var ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["default"](elemMainPanel);
            ps.update();
        }
    };
    AdminLayoutComponent.prototype.isMac = function () {
        var bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    };
    AdminLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-layout',
            template: __webpack_require__(/*! ./admin-layout.component.html */ "./src/app/layouts/admin-layout/admin-layout.component.html"),
            styles: [__webpack_require__(/*! ./admin-layout.component.scss */ "./src/app/layouts/admin-layout/admin-layout.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AdminLayoutComponent);
    return AdminLayoutComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n        <ng-progress [positionUsing]=\"'marginLeft'\" [minimum]=\"0.15\" [maximum]=\"1\"\n        [speed]=\"200\" [showSpinner]=\"true\" [direction]=\"'rightToLeftIncreased'\"\n        [color]=\"'green'\" [trickleSpeed]=\"250000\" [thick]=\"true\" [ease]=\"'linear'\"\n    ></ng-progress>\n    <div class=\"container-fluid\">\n        <!-- <div class=\"row\"> -->\n            \n            \n            <!-- <div class=\"col-md-0\">\n\n            </div> -->\n            <div class=\"\"    >\n                <br>\n                <br>\n              \n                \n                            <div  class=\" flip-card\">\n                                    <div class=\"flip-card-inner\">\n                                            <div class=\"flip-card-front \">\n                                              <img src=\"assets/222.jpg\" alt=\"Avatar\" style=\"width:100%;height:300px;\">\n                                              <h2 class=\"card-category .text-left  text-gray\">Infocuit Technologies </h2>\n                      \n                                            </div>\n                                            <div class=\"flip-card-back\">\n                    \n                                    <div class=\" dei card card-profile \">\n                                        <div class=\"card-avatar\">\n                                            <a>\n                                                <img class=\"img\" s src=\"./assets/cheff.jpg\" />\n                                            </a>\n                                        </div>\n                                        <div class=\"card-body\">\n                                             <h6 class=\"text-danger \" style=\"color:red; font-size: 130%\" >Infocuit Technologies </h6>\n                                            <!--<h4 class=\"card-title\">Alec Thompson</h4> -->\n                                            <div class=\"card-body\">\n                                              <form>\n                                                 \n                                                      \n                                                      \n                                                      <div class=\"form-group\">\n                                                          <!-- <label style=\"color:black\" class=\"floatright\" >branch Id</label> -->\n                                                          <label style=\"float: left;color:red\"  for=\"fname\">Branch Id</label>\n                                                            <input class=\"form-control text\" name=\"user\" placeholder=\"\"  [(ngModel)]=\"login.user\">\n                                                          \n                                                      </div>\n                                                      <div class=\"form-group\">\n                                                        <!-- <label style=\"color:black\" class=\"floatright\" >branch Id</label> -->\n                                                        <label style=\"float: left;color:red\" for=\"fname\">Phone Number</label>\n                                                          <input class=\"form-control Number\" type=\"number\" name=\"user1\" placeholder=\"\"  [(ngModel)]=\"login.phone\">\n                                                        \n                                                    </div>\n                                                 \n                                                      \n                                                      <div class=\"form-group\">\n                                                            <!-- <label>password</label> -->\n                                                            <label style=\"float: left;color:red\" for=\"fname\">password</label>\n                                                            <input class=\"form-control text\" name=\"p\" placeholder=\"\" [(ngModel)]=\"login.passwor\" type=\"password\">\n                                                         \n                                                      </div>  \n                                      \n                                                 \n                                               \n                                                  <!-- <button mat-raised-button type=\"submit\" class=\"btn btn-danger pull-right\" (click)=\"btnClick();\">OK</button> -->\n                                                  \n                                                  <!-- <input type=\"file\"> -->\n                                                  <div class=\"clearfix\"></div>\n                                              </form>\n                                          </div>\n                                            \n                                            <a  class=\"btn btn-danger btn-round\" (click)=\"btnClick(login)\" >sign in</a>\n                                            <!-- <div *ngIf=\"check\">\n                                                DIV TO SHOW OR HIDE\n                                              </div>\n                                              <div *ngIf=\"check1\">\n                                                DIV TO SHOW OR HIDE\n                                              </div> -->\n                                        </div>\n                                    </div>\n                                    </div>\n                               \n                  \n                   \n                </div>\n                <!-- <div class=\"flip-card\">\n                    <div class=\"flip-card-inner\">\n                      <div class=\"flip-card-front\">\n                        <img src=\"assets/sev.png\" alt=\"Avatar\" style=\"width:300px;height:300px;\">\n                        <h6 class=\"card-category text-gray\">Infocuit Techonologies</h6>\n\n                      </div>\n                      <div class=\"flip-card-back\">\n                        <h1>John Doe</h1> \n                        <p>Architect & Engineer</p> \n                        <p>We love that guy</p>\n                      </div>\n                    </div>\n                  </div> -->\n                \n                <!-- <div class=\"\">\n                    <div class=\"card card-profile \">\n                        <div class=\"card-avatar\">\n                            <a href=\"#pablo\">\n                                <img class=\"img\" src=\"./assets/img/faces/marc.jpg\" />\n                            </a>\n                        </div>\n                        <div class=\"card-body\">\n                            <h6 class=\"card-category text-gray\">CEO / Co-Founder</h6>\n                            <h4 class=\"card-title\">Alec Thompson</h4>\n                            <div class=\"card-body\">\n                              <form>\n                                 \n                                      \n                                      \n                                      <div class=\"\">\n                                          \n                                            <input class=\"form-control\" placeholder=\"Username\">\n                                          \n                                      </div>\n                                      <div class=\"\">\n                                        \n                                            <input class=\"form-control\" placeholder=\"Email address\" type=\"email\">\n                                         \n                                      </div>\n                      \n                                 \n                               \n                                  <button mat-raised-button type=\"submit\" class=\"btn btn-danger pull-right\">OK</button>\n                                  <div class=\"clearfix\"></div>\n                              </form>\n                          </div>\n                            \n                            <a href=\"#pablo\" class=\"btn btn-danger btn-round\">sign up</a>\n                        </div>\n                    </div>\n                </div> -->\n           \n            <!-- <div class=\"col-md-0\">\n                \n\n            </div> -->\n        </div>\n    </div>\n</div>\n</div>\n  <!-- </div> -->\n\n  \n  "

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  padding-top: 15%; }\n\n.bg {\n  width: 100%;\n  height: 100%;\n  background: url('logo.svg') no-repeat center;\n  background-size: 100% 100%;\n  background-position: top center; }\n\n.flip-card {\n  background-color: transparent;\n  width: 100%;\n  height: 500px;\n  -webkit-perspective: 1000px;\n          perspective: 1000px; }\n\n.flip-card-inner {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  transition: -webkit-transform 0.6s;\n  transition: transform 0.6s;\n  transition: transform 0.6s, -webkit-transform 0.6s;\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); }\n\n.flip-card:hover .flip-card-inner {\n  -webkit-transform: rotateY(180deg);\n          transform: rotateY(180deg); }\n\n.flip-card-front, .flip-card-back {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden; }\n\n.flip-card-front {\n  background-color: #c90000;\n  color: black;\n  z-index: 2; }\n\n.flip-card-back {\n  background-color: #ffffff;\n  color: white;\n  -webkit-transform: rotateY(180deg);\n          transform: rotateY(180deg);\n  z-index: 2; }\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.service */ "./src/app/login/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-webstorage */ "./node_modules/ngx-webstorage/fesm5/ngx-webstorage.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_progressbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-progressbar */ "./node_modules/ngx-progressbar/modules/ngx-progressbar.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(ngProgress, toastr, user, router, storage) {
        this.ngProgress = ngProgress;
        this.toastr = toastr;
        this.user = user;
        this.router = router;
        this.storage = storage;
        this.check = false;
        this.check1 = false;
        this.login = {};
        this.log = [];
        this.log1 = [];
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.btnClick = function (param) {
        var _this = this;
        this.ngProgress.start();
        if (param.user == "" || param.passwor == "" || param.phone == "") {
            this.toastr.success("Field is empty");
            this.ngProgress.done();
        }
        // var x =par;
        var y = +param.phone;
        // alert("one");
        var body = {
            "branch_id": param.user,
            "screen": "KOT",
            "login_status_id": 1,
            "mobile": y,
            "password": param.passwor
        };
        // alert("dwndnu");
        this.user.login(body).subscribe(function (Response) {
            if (Response.ReturnCode == "LS") {
                _this.storage.store("businessid", param.user);
                _this.log = Response.branch_details[0].branch_name;
                _this.storage.store("businessname", _this.log);
                _this.toastr.success(_this.log, "Login To");
                _this.router.navigateByUrl('/user-profile');
                // alert("the testttttttt" +this.storage.retrieve("businessname"))
                _this.ngProgress.done();
            }
            else {
                _this.toastr.success("Please Enter The Correct Values");
                _this.ngProgress.done();
            }
        });
        // this.router.navigateByUrl('/user-profile');
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")],
            providers: [_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]]
        }),
        __metadata("design:paramtypes", [ngx_progressbar__WEBPACK_IMPORTED_MODULE_5__["NgProgress"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], _login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/login.service.ts":
/*!****************************************!*\
  !*** ./src/app/login/login.service.ts ***!
  \****************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginService = /** @class */ (function () {
    function LoginService(http, https) {
        this.http = http;
        this.https = https;
    }
    LoginService.prototype.login = function (up) {
        return this.http.post("https://tos-production.herokuapp.com/Billing_KOT_Login", up);
    };
    LoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\off\tos26\tos master\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map