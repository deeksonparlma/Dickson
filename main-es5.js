function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./not-found/not-found.component */
    "./src/app/not-found/not-found.component.ts");
    /* harmony import */


    var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home-page/home-page.component */
    "./src/app/home-page/home-page.component.ts");
    /* harmony import */


    var _skills_skills_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./skills/skills.component */
    "./src/app/skills/skills.component.ts");
    /* harmony import */


    var _projects_projects_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./projects/projects.component */
    "./src/app/projects/projects.component.ts");
    /* harmony import */


    var _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./contact/contact.component */
    "./src/app/contact/contact.component.ts");
    /* harmony import */


    var _webview_webview_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./webview/webview.component */
    "./src/app/webview/webview.component.ts");

    var routes = [{
      path: 'home',
      component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__["HomePageComponent"]
    }, {
      path: 'skills',
      component: _skills_skills_component__WEBPACK_IMPORTED_MODULE_4__["SkillsComponent"]
    }, {
      path: 'contact',
      component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"]
    }, {
      path: 'view/:platform/:link',
      component: _webview_webview_component__WEBPACK_IMPORTED_MODULE_7__["WebviewComponent"]
    }, {
      path: 'projects',
      component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_5__["ProjectsComponent"]
    }, {
      path: '',
      redirectTo: "/home",
      pathMatch: "full"
    }, {
      path: '**',
      component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__["NotFoundComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngx_progressbar_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngx-progressbar/core */
    "./node_modules/@ngx-progressbar/core/__ivy_ngcc__/esm2015/ngx-progressbar-core.js");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'App';
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {// this.SpinnerService.show();
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 4,
      vars: 0,
      consts: [[1, "cc"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ng-progress");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_ngx_progressbar_core__WEBPACK_IMPORTED_MODULE_1__["ɵa"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
      styles: [".cc[_ngcontent-%COMP%]{\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBdUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jY3tcbiAgLyogcGFkZGluZy10b3A6IDUwcHg7ICovXG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home-page/home-page.component */
    "./src/app/home-page/home-page.component.ts");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./not-found/not-found.component */
    "./src/app/not-found/not-found.component.ts");
    /* harmony import */


    var _skills_skills_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./skills/skills.component */
    "./src/app/skills/skills.component.ts");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
    /* harmony import */


    var _ngx_progressbar_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ngx-progressbar/core */
    "./node_modules/@ngx-progressbar/core/__ivy_ngcc__/esm2015/ngx-progressbar-core.js");
    /* harmony import */


    var _ngx_progressbar_http_client__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ngx-progressbar/http-client */
    "./node_modules/@ngx-progressbar/http-client/__ivy_ngcc__/esm2015/ngx-progressbar-http-client.js");
    /* harmony import */


    var _projects_projects_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./projects/projects.component */
    "./src/app/projects/projects.component.ts");
    /* harmony import */


    var _contact_contact_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./contact/contact.component */
    "./src/app/contact/contact.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _webview_webview_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./webview/webview.component */
    "./src/app/webview/webview.component.ts");
    /* harmony import */


    var _angular_service_worker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/service-worker */
    "./node_modules/@angular/service-worker/__ivy_ngcc__/fesm2015/service-worker.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _ngx_progressbar_core__WEBPACK_IMPORTED_MODULE_11__["NgProgressModule"].forRoot(), _ngx_progressbar_http_client__WEBPACK_IMPORTED_MODULE_12__["NgProgressHttpClientModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerModule"], _ngx_progressbar_core__WEBPACK_IMPORTED_MODULE_11__["NgProgressModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_17__["ServiceWorkerModule"].register('ngsw-worker.js', {
        enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_18__["environment"].production
      })]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_5__["HomePageComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__["NotFoundComponent"], _skills_skills_component__WEBPACK_IMPORTED_MODULE_9__["SkillsComponent"], _projects_projects_component__WEBPACK_IMPORTED_MODULE_13__["ProjectsComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_14__["ContactComponent"], _webview_webview_component__WEBPACK_IMPORTED_MODULE_16__["WebviewComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _ngx_progressbar_core__WEBPACK_IMPORTED_MODULE_11__["NgProgressModule"], _ngx_progressbar_http_client__WEBPACK_IMPORTED_MODULE_12__["NgProgressHttpClientModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerModule"], _ngx_progressbar_core__WEBPACK_IMPORTED_MODULE_11__["NgProgressModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_17__["ServiceWorkerModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          // schemas:[NO_ERRORS_SCHEMA],
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_5__["HomePageComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__["NotFoundComponent"], _skills_skills_component__WEBPACK_IMPORTED_MODULE_9__["SkillsComponent"], _projects_projects_component__WEBPACK_IMPORTED_MODULE_13__["ProjectsComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_14__["ContactComponent"], _webview_webview_component__WEBPACK_IMPORTED_MODULE_16__["WebviewComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _ngx_progressbar_core__WEBPACK_IMPORTED_MODULE_11__["NgProgressModule"].forRoot(), _ngx_progressbar_http_client__WEBPACK_IMPORTED_MODULE_12__["NgProgressHttpClientModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerModule"], _ngx_progressbar_core__WEBPACK_IMPORTED_MODULE_11__["NgProgressModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_17__["ServiceWorkerModule"].register('ngsw-worker.js', {
            enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_18__["environment"].production
          })],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/contact/contact.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/contact/contact.component.ts ***!
    \**********************************************/

  /*! exports provided: ContactComponent */

  /***/
  function srcAppContactContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
      return ContactComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _social__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../social */
    "./src/app/social.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ContactComponent_a_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactComponent_a_13_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var link_r2 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.goToUrl(link_r2.link, link_r2.platform);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var link_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", link_r2.platform, " ");
      }
    }

    var ContactComponent = /*#__PURE__*/function () {
      function ContactComponent(router) {
        _classCallCheck(this, ContactComponent);

        this.router = router;
        this.social = [new _social__WEBPACK_IMPORTED_MODULE_1__["Social"]('Github', 'https://www.github.com/deeksonparlma'), new _social__WEBPACK_IMPORTED_MODULE_1__["Social"]('LinkedIn', 'http://bit.ly/2WZmyTc'), new _social__WEBPACK_IMPORTED_MODULE_1__["Social"]('Twitter', 'https://www.twitter.com/code_mogul'), new _social__WEBPACK_IMPORTED_MODULE_1__["Social"]('Instagram', 'https://www.instagram.com/__deekson__')];
      }

      _createClass(ContactComponent, [{
        key: "stat",
        value: function stat() {
          console.log("message ''" + this.message + " ' Received from " + this.name);
        }
      }, {
        key: "goToUrl",
        value: function goToUrl(link, platform) {
          console.log(link + " in " + platform);
          this.router.navigate(['/view', platform, link]);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.links = this.social;
        }
      }]);

      return ContactComponent;
    }();

    ContactComponent.ɵfac = function ContactComponent_Factory(t) {
      return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContactComponent,
      selectors: [["app-contact"]],
      decls: 16,
      vars: 4,
      consts: [[1, "content"], [1, "contact"], [1, "form-group", 3, "ngSubmit"], ["contact", "ngForm"], ["type", "text", "name", "name", "value", "", "placeholder", "Name", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "email", "name", "email", "value", "", "placeholder", "email@dormain.com", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "message", "rows", "8", "placeholder", "message", "cols", "80", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", "name", "button", 1, "btn", "btn-info"], [1, "socialMedia"], [2, "background", "grey"], [1, "links"], [3, "click", 4, "ngFor", "ngForOf"], ["href", "mailto:dickson.nyaigoti@gmail.com", "target", "_blank"], [3, "click"]],
      template: function ContactComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ContactComponent_Template_form_ngSubmit_2_listener() {
            return ctx.stat();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactComponent_Template_input_ngModelChange_4_listener($event) {
            return ctx.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactComponent_Template_input_ngModelChange_5_listener($event) {
            return ctx.email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "textarea", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactComponent_Template_textarea_ngModelChange_6_listener($event) {
            return ctx.message = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Send");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "hr", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ContactComponent_a_13_Template, 2, 1, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Email ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.message);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.links);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
      styles: [".content[_ngcontent-%COMP%]{\n  padding-top: 60px;\n  height: 100vh;\n  background: rgba(1,8,25,0.8);\n}\n.contact[_ngcontent-%COMP%]{\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%,-50%);\n}\n.form-control[_ngcontent-%COMP%]{\n  margin: 5px;\n  width: 300px;\n  background: none;\n  border: 1px solid grey;\n}\n.btn[_ngcontent-%COMP%]{\n  width: 100%;\n  height: 30px;\n  font-size: 15px;\n  color: rgba(1,8,25,1);\n}\n.socialMedia[_ngcontent-%COMP%]{\n  position: absolute;\n  width: 90%;\n  padding-left:5%;\n  padding-right: 5%;\n  padding-bottom: 10px;\n  bottom: 0;\n  \n}\n.links[_ngcontent-%COMP%]{\n  display: flex;\n  flex-direction: row;\n}\n.socialMedia[_ngcontent-%COMP%] > .links[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{\n  font-size: 15px;\n  color: grey;\n  margin: auto;\n  opacity: 0.8;\n}\n@media only screen and (max-width:700px){\n  .socialMedia[_ngcontent-%COMP%] > .links[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{\n    font-size: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsK0JBQStCO0FBQ2pDO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixTQUFTO0VBQ1QsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0FBQ2Q7QUFDQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudHtcbiAgcGFkZGluZy10b3A6IDYwcHg7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMSw4LDI1LDAuOCk7XG59XG4uY29udGFjdHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xufVxuLmZvcm0tY29udHJvbHtcbiAgbWFyZ2luOiA1cHg7XG4gIHdpZHRoOiAzMDBweDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcbn1cbi5idG57XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMwcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6IHJnYmEoMSw4LDI1LDEpO1xufVxuLnNvY2lhbE1lZGlhe1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA5MCU7XG4gIHBhZGRpbmctbGVmdDo1JTtcbiAgcGFkZGluZy1yaWdodDogNSU7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBib3R0b206IDA7XG4gIC8qIGRpc3BsYXk6IGZsZXg7ICovXG59XG4ubGlua3N7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG4uc29jaWFsTWVkaWE+LmxpbmtzPmF7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6IGdyZXk7XG4gIG1hcmdpbjogYXV0bztcbiAgb3BhY2l0eTogMC44O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjcwMHB4KXtcbiAgLnNvY2lhbE1lZGlhPi5saW5rcz5he1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgfVxufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-contact',
          templateUrl: './contact.component.html',
          styleUrls: ['./contact.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 20,
      vars: 0,
      consts: [[1, "footer-section"], [1, "ft"], [1, "bar"], ["href", "https://www.github.com/deeksonparlma", 1, "footer-link"], ["href", "http://bit.ly/2WZmyTc", 1, "footer-link"], ["href", "https://www.twitter.com/code_mogul", 1, "footer-link"], ["href", "https://www.instagram.com/__deekson__", 1, "footer-link"], ["href", "mailto:dickson.nyaigoti@gmail.com", 1, "footer-link"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Github");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "LinkedIn");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Twitter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Instagram");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".ft[_ngcontent-%COMP%]{\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  padding: 40px;\n}\n.bar[_ngcontent-%COMP%]{\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsYUFBYTtBQUNmO0FBQ0E7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZnR7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgcGFkZGluZzogNDBweDtcbn1cbi5iYXJ7XG4gIG1hcmdpbjogYXV0bztcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home-page/home-page.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/home-page/home-page.component.ts ***!
    \**************************************************/

  /*! exports provided: HomePageComponent */

  /***/
  function srcAppHomePageHomePageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageComponent", function () {
      return HomePageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HomePageComponent = /*#__PURE__*/function () {
      function HomePageComponent() {
        _classCallCheck(this, HomePageComponent);

        this.title = 'Dickson';
        this.projects = [{
          id: 0,
          title: 'Meme Flix',
          link: 'https://play.google.com/store/apps/details?id=com.deekson.memeflix',
          desc: 'A mobile application that enables peoople to share memes',
          date: '01/03/2020'
        }, {
          id: 0,
          title: 'E-learning',
          link: 'https://digi-school-elearning.herokuapp.com',
          desc: 'An App that makes learning materials available to students',
          date: '25/05/2020'
        }, {
          id: 0,
          title: 'Covid19 Tracker',
          link: 'https://github.com/deeksonparlma/APKs/raw/master/Covid19Tracker.apk',
          desc: 'A mobile application that users can view Covid!9 updates for their country',
          date: '25/05/2020'
        }, {
          id: 0,
          title: 'Music-Hub',
          link: 'https://www.music-hub-app.herokuapp.com/',
          desc: 'Web application that gives you access to playlists of different artists',
          date: '25/05/2020'
        }, {
          id: 0,
          title: 'CountDown',
          link: 'https://play.google.com/store/apps/details?id=com.deekson.countdown',
          desc: 'Android application that counts down to a specific date from a user',
          date: '25/05/2020'
        }, {
          id: 0,
          title: 'Karibu Kenya',
          link: 'http://karibukenya.herokuapp.com/',
          desc: 'Web Application that informs potential tourists alot about Kenya before visisting ',
          date: '25/05/2020'
        }, {
          id: 0,
          title: 'Movies Hub',
          link: 'https://deeksonparlma.github.io/movies',
          desc: 'Website design for hosting movies',
          date: '25/05/2020'
        }];
      }

      _createClass(HomePageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {// this.SpinnerService.hide();
        }
      }]);

      return HomePageComponent;
    }();

    HomePageComponent.ɵfac = function HomePageComponent_Factory(t) {
      return new (t || HomePageComponent)();
    };

    HomePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomePageComponent,
      selectors: [["app-home-page"]],
      decls: 14,
      vars: 0,
      consts: [[1, "bg"], [1, "image-section"], ["id", "top"], [1, "tagName"], [1, "tag"], [1, "dev"], [1, "overlay"], [1, "dev2"]],
      template: function HomePageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "DICKSON");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "~Code Mogul~");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 7);
        }
      },
      styles: [".bg[_ngcontent-%COMP%]{\n  background-color: rgba(1,8,25,1);\n  height: 100vh;\n}\n#top[_ngcontent-%COMP%]{\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%,-50%);\n}\n.tagName[_ngcontent-%COMP%]{\n  font-family: 'Saira Stencil One', cursive;\n  font-size: 30px;\n  color: white;\n}\n.tag[_ngcontent-%COMP%] > i[_ngcontent-%COMP%]{\n  color: white;\n  padding-left: 40%;\n  white-space: nowrap;\n}\n.image-section[_ngcontent-%COMP%]{\n  background-image: url('pic3.png');\n  background-size: contain;\n  height: 500px;\n  width: 100%;\n  background-repeat: no-repeat;\n}\n.overlay[_ngcontent-%COMP%]{\n  position: absolute;\n  height: 100vh;\n  width: 100%;\n  top: 0;\n  left: 0;\n  background-color: rgba(1,8,25,0.5);\n}\n@media only screen and (min-width:700px){\n  .tagName[_ngcontent-%COMP%]{\n    font-family: 'Saira Stencil One', cursive;\n    font-size: 70px;\n  }\n  .dev[_ngcontent-%COMP%]{\n    background-image: url('dev.svg');\n    background-color: rgba(1,8,25,1);\n    height: 30px;\n    width: 100%;\n    background-repeat: no-repeat;\n    margin-left: 30%;\n  }\n}\n@media only screen and (max-width:700px){\n  .tag[_ngcontent-%COMP%] > i[_ngcontent-%COMP%]{\n    color: white;\n    padding-left: 10%;\n    white-space: nowrap;\n  }\n  .image-section[_ngcontent-%COMP%]{\n    height: 450px;\n    align-self: center;\n  }\n  .dev2[_ngcontent-%COMP%]{\n    background-image: url('dev.svg');\n    background-color: rgba(1,8,25,1);\n    height: 25px;\n    width: 100%;\n    background-repeat: no-repeat;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0NBQWdDO0VBQ2hDLGFBQWE7QUFDZjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsK0JBQStCO0FBQ2pDO0FBQ0E7RUFDRSx5Q0FBeUM7RUFDekMsZUFBZTtFQUNmLFlBQVk7QUFDZDtBQUNBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLGlDQUFtQztFQUNuQyx3QkFBd0I7RUFDeEIsYUFBYTtFQUNiLFdBQVc7RUFDWCw0QkFBNEI7QUFDOUI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsV0FBVztFQUNYLE1BQU07RUFDTixPQUFPO0VBQ1Asa0NBQWtDO0FBQ3BDO0FBRUE7RUFDRTtJQUNFLHlDQUF5QztJQUN6QyxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxnQ0FBa0M7SUFDbEMsZ0NBQWdDO0lBQ2hDLFlBQVk7SUFDWixXQUFXO0lBQ1gsNEJBQTRCO0lBQzVCLGdCQUFnQjtFQUNsQjtBQUNGO0FBQ0E7RUFDRTtJQUNFLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxhQUFhO0lBQ2Isa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxnQ0FBa0M7SUFDbEMsZ0NBQWdDO0lBQ2hDLFlBQVk7SUFDWixXQUFXO0lBQ1gsNEJBQTRCO0VBQzlCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lLXBhZ2UvaG9tZS1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmd7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMSw4LDI1LDEpO1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuI3RvcHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xufVxuLnRhZ05hbWV7XG4gIGZvbnQtZmFtaWx5OiAnU2FpcmEgU3RlbmNpbCBPbmUnLCBjdXJzaXZlO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi50YWc+aXtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLWxlZnQ6IDQwJTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmltYWdlLXNlY3Rpb257XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9waWMzLnBuZycpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGhlaWdodDogNTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuLm92ZXJsYXl7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxLDgsMjUsMC41KTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjcwMHB4KXtcbiAgLnRhZ05hbWV7XG4gICAgZm9udC1mYW1pbHk6ICdTYWlyYSBTdGVuY2lsIE9uZScsIGN1cnNpdmU7XG4gICAgZm9udC1zaXplOiA3MHB4O1xuICB9XG4gIC5kZXZ7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2Rldi5zdmcnKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEsOCwyNSwxKTtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBtYXJnaW4tbGVmdDogMzAlO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzAwcHgpe1xuICAudGFnPml7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmctbGVmdDogMTAlO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIH1cbiAgLmltYWdlLXNlY3Rpb257XG4gICAgaGVpZ2h0OiA0NTBweDtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIH1cbiAgLmRldjJ7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2Rldi5zdmcnKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEsOCwyNSwxKTtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgfVxufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home-page',
          templateUrl: './home-page.component.html',
          styleUrls: ['./home-page.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/navbar/navbar.component.ts":
  /*!********************************************!*\
    !*** ./src/app/navbar/navbar.component.ts ***!
    \********************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var NavbarComponent = /*#__PURE__*/function () {
      function NavbarComponent() {
        _classCallCheck(this, NavbarComponent);

        this.home = 'home';
        this.skills = 'skills';
        this.projects = 'projects';
        this.contact = 'contact';
      }

      _createClass(NavbarComponent, [{
        key: "goToUrl",
        value: function goToUrl(route) {
          // this.SpinnerService.show();
          console.log('currently in ' + route);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
      return new (t || NavbarComponent)();
    };

    NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavbarComponent,
      selectors: [["app-navbar"]],
      decls: 22,
      vars: 0,
      consts: [[1, "nav"], [1, "navbar", "hamburger"], ["src", "assets/img/hamburger.jpg", "height", "30px", "alt", ""], ["href", "#", "routerLink", "home", "routerLinkActive", "active", 1, "appName", 3, "click"], [1, "navbar"], ["href", "#", "routerLink", "home", "routerLinkActive", "active", 1, "first", "options", 3, "click"], [1, "navbar", "options"], ["href", "", "routerLink", "skills", "routerLinkActive", "active", 1, "options", 3, "click"], ["href", "#", "routerLink", "projects", "routerLinkActive", "active", 1, "options", 3, "click"], ["href", "#", "routerLink", "contact", "routerLinkActive", "active", 1, "options", 3, "click"]],
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_3_listener() {
            return ctx.goToUrl(ctx.home);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Portfolio ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_6_listener() {
            return ctx.goToUrl(ctx.home);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_10_listener() {
            return ctx.goToUrl(ctx.skills);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Skills");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_14_listener() {
            return ctx.goToUrl(ctx.projects);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Projects");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_18_listener() {
            return ctx.goToUrl(ctx.contact);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]],
      styles: [".first[_ngcontent-%COMP%]{\n  margin-left: auto;\n}\na[_ngcontent-%COMP%]{\n  text-decoration: none;\n  color: grey;\n}\n.nav[_ngcontent-%COMP%]{\n  background-color: rgba(1,8,25,0.8);\n  position: fixed;\n  width: 100%;\n  z-index: 3;\n  min-height: 50px;\n  box-shadow: 2px 2px 2px black;\n}\n@media only screen and (min-width:700px){\n  .hamburger[_ngcontent-%COMP%]{\n    display: none;\n  }\n}\n@media only screen and (max-width:700px){\n  .nav[_ngcontent-%COMP%]{\n    display: block;\n  }\n  .navbar[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{\n    padding-left: 50%;\n  }\n  .appName[_ngcontent-%COMP%]{\n    display: none;\n  }\n  .options[_ngcontent-%COMP%]{\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztBQUNiO0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsZUFBZTtFQUNmLFdBQVc7RUFDWCxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7QUFDRjtBQUNBO0VBQ0U7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlyc3R7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuYXtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogZ3JleTtcbn1cblxuLm5hdntcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxLDgsMjUsMC44KTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogMztcbiAgbWluLWhlaWdodDogNTBweDtcbiAgYm94LXNoYWRvdzogMnB4IDJweCAycHggYmxhY2s7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NzAwcHgpe1xuICAuaGFtYnVyZ2Vye1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo3MDBweCl7XG4gIC5uYXZ7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgLm5hdmJhcj5we1xuICAgIHBhZGRpbmctbGVmdDogNTAlO1xuICB9XG4gIC5hcHBOYW1le1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLm9wdGlvbnN7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-navbar',
          templateUrl: './navbar.component.html',
          styleUrls: ['./navbar.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/not-found/not-found.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/not-found/not-found.component.ts ***!
    \**************************************************/

  /*! exports provided: NotFoundComponent */

  /***/
  function srcAppNotFoundNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function () {
      return NotFoundComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var NotFoundComponent = /*#__PURE__*/function () {
      function NotFoundComponent() {
        _classCallCheck(this, NotFoundComponent);
      }

      _createClass(NotFoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {// this.SpinnerService.hide();
          // console.log('currently in '+route)
        }
      }]);

      return NotFoundComponent;
    }();

    NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) {
      return new (t || NotFoundComponent)();
    };

    NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NotFoundComponent,
      selectors: [["app-not-found"]],
      decls: 7,
      vars: 0,
      consts: [[1, "not-found"], [1, "err"], [1, "errMessage"], ["routerLink", ""]],
      template: function NotFoundComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "404");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Page not found go ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "home ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: [".not-found[_ngcontent-%COMP%]{\n  position: absolute;\n  top:50%;\n  left: 50%;\n  transform: translate(-50%,-50%);\n}\n.errMessage[_ngcontent-%COMP%]{\n  padding-left: 30%;\n}\n.err[_ngcontent-%COMP%]{\n  background:url('nature.jpeg');font-size:200px;\nbackground-position:bottom;\n  white-space:nowrap;\n  font-weight:300px;\n -webkit-background-clip:text;\n -webkit-text-fill-color:transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxTQUFTO0VBQ1QsK0JBQStCO0FBQ2pDO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLDZCQUErQixDQUFDLGVBQWU7QUFDakQsMEJBQTBCO0VBQ3hCLGtCQUFrQjtFQUNsQixpQkFBaUI7Q0FDbEIsNEJBQTRCO0NBQzVCLG1DQUFtQztBQUNwQyIsImZpbGUiOiJzcmMvYXBwL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ub3QtZm91bmR7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOjUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xufVxuLmVyck1lc3NhZ2V7XG4gIHBhZGRpbmctbGVmdDogMzAlO1xufVxuLmVycntcbiAgYmFja2dyb3VuZDp1cmwoJy4vbmF0dXJlLmpwZWcnKTtmb250LXNpemU6MjAwcHg7XG5iYWNrZ3JvdW5kLXBvc2l0aW9uOmJvdHRvbTtcbiAgd2hpdGUtc3BhY2U6bm93cmFwO1xuICBmb250LXdlaWdodDozMDBweDtcbiAtd2Via2l0LWJhY2tncm91bmQtY2xpcDp0ZXh0O1xuIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOnRyYW5zcGFyZW50O1xufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-not-found',
          templateUrl: './not-found.component.html',
          styleUrls: ['./not-found.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/projects/projects.component.ts":
  /*!************************************************!*\
    !*** ./src/app/projects/projects.component.ts ***!
    \************************************************/

  /*! exports provided: ProjectsComponent */

  /***/
  function srcAppProjectsProjectsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function () {
      return ProjectsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ProjectsComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsComponent_div_6_Template_a_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var project_r1 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.openlink(project_r1.link, project_r1.title);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "View Project");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var project_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r1.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r1.date);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r1.desc);
      }
    }

    var ProjectsComponent = /*#__PURE__*/function () {
      function ProjectsComponent(router) {
        _classCallCheck(this, ProjectsComponent);

        this.router = router;
        this.projects = [{
          id: 0,
          title: 'Ajeidy',
          link: 'https://play.google.com/store/apps/details?id=com.deekson.ajeidy',
          desc: 'This is an Android application for a cologne store that allows users to view and purchase colognes of their liking ',
          date: '8/09/2020'
        }, {
          id: 0,
          title: 'Wallpaper App',
          link: 'https://play.google.com/store/apps/details?id=com.wallpapers_8k_Anime_Lofi.app',
          desc: 'This is an Android application that enables users to view and set wallpapers from a collection made available to them ',
          date: '7/08/2020'
        }, {
          id: 0,
          title: 'Visha',
          link: 'https://play.google.com/store/apps/details?id=com.visha.app',
          desc: 'Android Application that helps users select outfits before hand to ease the process of selecting future clads ',
          date: '18/07/2020'
        }, {
          id: 0,
          title: 'Karibu Kenya',
          link: 'https://karibukenya.herokuapp.com/',
          desc: 'Web Application that informs potential tourists alot about Kenya before visisting ',
          date: '4/06/2020'
        }, {
          id: 0,
          title: 'Meme Flix',
          link: 'https://play.google.com/store/apps/details?id=com.deekson.memeflix',
          desc: 'A mobile application that enables peoople to share memes',
          date: '01/03/2020'
        }, {
          id: 0,
          title: 'E-learning',
          link: 'https://digi-school-elearning.herokuapp.com',
          desc: 'An App that makes learning materials available to students',
          date: '20/05/2020'
        }, {
          id: 0,
          title: 'Covid19 Tracker',
          link: 'https://github.com/deeksonparlma/APKs/raw/master/Covid19Tracker.apk',
          desc: 'A mobile application that users can view Covid!9 updates for their country',
          date: '13/05/2020'
        }, {
          id: 0,
          title: 'Music-Hub',
          link: 'https://music-hub-app.herokuapp.com/',
          desc: 'Web application that gives you access to playlists of different artists',
          date: '2/05/2020'
        }, {
          id: 0,
          title: 'CountDown',
          link: 'https://play.google.com/store/apps/details?id=com.deekson.countdown',
          desc: 'Android application that counts down to a specific date from a user',
          date: '4/16/2020'
        }, {
          id: 0,
          title: 'Movies Hub',
          link: 'https://deeksonparlma.github.io/movies',
          desc: 'Website design for hosting movies',
          date: '12/07/2019'
        }];
      }

      _createClass(ProjectsComponent, [{
        key: "openlink",
        value: function openlink(link, project) {
          this.router.navigate(['/view', project, link]);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProjectsComponent;
    }();

    ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) {
      return new (t || ProjectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProjectsComponent,
      selectors: [["app-projects"]],
      decls: 7,
      vars: 1,
      consts: [[1, "content"], [1, "container"], [1, "topLine"], [1, "projects"], ["class", "Project", 4, "ngFor", "ngForOf"], [1, "Project"], [1, "projName"], [1, "date"], [1, "link", 3, "click"]],
      template: function ProjectsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Projects");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProjectsComponent_div_6_Template, 12, 3, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projects);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: [".content[_ngcontent-%COMP%]{\n  padding-top: 60px;\n  min-height: 100vh;\n}\n.date[_ngcontent-%COMP%]{\n  margin-left: 3%;\n  font-size: 10px;\n  width: 30px;\n  color: white;\n  padding:5px;\n  border-radius: 10px;\n  background: black;\n}\n.projName[_ngcontent-%COMP%]{\n  font-size: 20px;\n}\n.projects[_ngcontent-%COMP%]{\n  padding: 40px;\n}\n.link[_ngcontent-%COMP%]{\n  text-decoration: none;\n  color: blue;\n}\n.link[_ngcontent-%COMP%]:visited{\n  text-decoration: none;\n}\n.topLine[_ngcontent-%COMP%]{\n  background: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGVBQWU7RUFDZixlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztBQUNiO0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudHtcbiAgcGFkZGluZy10b3A6IDYwcHg7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuLmRhdGV7XG4gIG1hcmdpbi1sZWZ0OiAzJTtcbiAgZm9udC1zaXplOiAxMHB4O1xuICB3aWR0aDogMzBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOjVweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG59XG4ucHJvak5hbWV7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5wcm9qZWN0c3tcbiAgcGFkZGluZzogNDBweDtcbn1cbi5saW5re1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBibHVlO1xufVxuLmxpbms6dmlzaXRlZHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLnRvcExpbmV7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-projects',
          templateUrl: './projects.component.html',
          styleUrls: ['./projects.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/skills/skills.component.ts":
  /*!********************************************!*\
    !*** ./src/app/skills/skills.component.ts ***!
    \********************************************/

  /*! exports provided: SkillsComponent */

  /***/
  function srcAppSkillsSkillsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SkillsComponent", function () {
      return SkillsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var SkillsComponent = /*#__PURE__*/function () {
      function SkillsComponent(SpinnerService, router) {
        _classCallCheck(this, SkillsComponent);

        this.SpinnerService = SpinnerService;
        this.router = router;
      }

      _createClass(SkillsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.SpinnerService.hide();
        }
      }]);

      return SkillsComponent;
    }();

    SkillsComponent.ɵfac = function SkillsComponent_Factory(t) {
      return new (t || SkillsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    SkillsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SkillsComponent,
      selectors: [["app-skills"]],
      decls: 36,
      vars: 0,
      consts: [[1, "content"], [1, "container"], [1, "skillList"], [1, "skill5"], [1, "skill6"], [1, "skill1"], [1, "skill3"], [1, "skill7"], [1, "skill8"], [1, "skill2"], [1, "skill4"], [1, "skill9"], [1, "skill14"], [1, "skill15"], [1, "skill16"], [1, "skill10"], [1, "skill11"], [1, "skill12"], [1, "skill13"]],
      template: function SkillsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Skills");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Languages");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Technologies");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "FrameWorks");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".content[_ngcontent-%COMP%]{\n  padding-top: 60px;\n}\n.skillList[_ngcontent-%COMP%]{\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  width: 100%;\n  \n  padding: 5%;\n\n}\n.skillList[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{\n  margin: auto;\n}\n.skill1[_ngcontent-%COMP%]{\n  background-image:url('flutter.png');\n  height:100px;\n  width: 60px;\n  background-repeat: no-repeat;\n}\n.skill2[_ngcontent-%COMP%]{\n  background-image:url('firebase.png');\n  height:100px;\n  width: 60px;\n  background-repeat: no-repeat;\n}\n.skill3[_ngcontent-%COMP%]{\n  background-image:url('es6.png');\n  height:100px;\n  width: 60px;\n  background-repeat: no-repeat;\n}\n.skill4[_ngcontent-%COMP%]{\n  background-image:url('gradle.png');\n  height:100px;\n  width: 60px;\n  background-repeat: no-repeat;\n}\n.skill5[_ngcontent-%COMP%]{\n  background-image:url('java.png');\n  height:100px;\n  width: 60px;\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n.skill6[_ngcontent-%COMP%]{\n  background-image:url('kotlin.png');\n  height:100px;\n  background-size: contain;\n  width: 60px;\n  background-repeat: no-repeat;\n}\n.skill7[_ngcontent-%COMP%]{\n  background-image:url('python.png');\n  height:100px;\n  background-size: contain;\n  width: 60px;\n  background-repeat: no-repeat;\n}\n.skill8[_ngcontent-%COMP%]{\n  background-image:url('c.jpeg');\n  height:100px;\n  background-size: contain;\n  width: 60px;\n  background-repeat: no-repeat;\n}\n.skill9[_ngcontent-%COMP%]{\n  background-image:url('psql.png');\n  height:100px;\n  background-size: contain;\n  width: 60px;\n  background-repeat: no-repeat;\n}\n.skill10[_ngcontent-%COMP%]{\n  background-image:url('react.png');\n  height:100px;\n  background-size: contain;\n  width: 60px;\n  background-repeat: no-repeat;\n}\n.skill11[_ngcontent-%COMP%]{\n  background-image:url('apache.png');\n  height:100px;\n  background-size: contain;\n  width: 60px;\n  background-repeat: no-repeat;\n}\n.skill12[_ngcontent-%COMP%]{\n  background-image:url('android.png');\n  height:100px;\n  background-size: contain;\n  width: 60px;\n  background-repeat: no-repeat;\n}\n.skill13[_ngcontent-%COMP%]{\n  background-image:url('angular.png');\n  height:100px;\n  background-size: contain;\n  width: 60px;\n  background-repeat: no-repeat;\n}\n.skill14[_ngcontent-%COMP%]{\n  background-image:url('html.png');\n  height:100px;\n  background-size: contain;\n  width: 60px;\n  background-repeat: no-repeat;\n}\n.skill15[_ngcontent-%COMP%]{\n  background-image:url('css.jpeg');\n  height:100px;\n  background-size: contain;\n  width: 60px;\n  background-repeat: no-repeat;\n}\n.skill16[_ngcontent-%COMP%]{\n  background-image:url('js.png');\n  height:100px;\n  background-size: contain;\n  width: 60px;\n  background-repeat: no-repeat;\n}\n@media only screen and (min-width:700px){\n  .skill1[_ngcontent-%COMP%]{\n    background-image:url('flutter.png');\n    height:100px;\n    width: 100px;\n    background-repeat: no-repeat;\n  }\n  .skill2[_ngcontent-%COMP%]{\n    background-image:url('firebase.png');\n    height:100px;\n    width: 100px;\n    background-repeat: no-repeat;\n  }\n  .skill3[_ngcontent-%COMP%]{\n    background-image:url('es6.png');\n    height:100px;\n    width: 100px;\n    background-repeat: no-repeat;\n  }\n  .skill4[_ngcontent-%COMP%]{\n    background-image:url('gradle.png');\n    height:100px;\n    width: 100px;\n    background-repeat: no-repeat;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2tpbGxzL3NraWxscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsV0FBVztFQUNYLGtDQUFrQztFQUNsQyxXQUFXOztBQUViO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLG1DQUFrRDtFQUNsRCxZQUFZO0VBQ1osV0FBVztFQUNYLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0Usb0NBQW1EO0VBQ25ELFlBQVk7RUFDWixXQUFXO0VBQ1gsNEJBQTRCO0FBQzlCO0FBQ0E7RUFDRSwrQkFBOEM7RUFDOUMsWUFBWTtFQUNaLFdBQVc7RUFDWCw0QkFBNEI7QUFDOUI7QUFDQTtFQUNFLGtDQUFpRDtFQUNqRCxZQUFZO0VBQ1osV0FBVztFQUNYLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0UsZ0NBQStDO0VBQy9DLFlBQVk7RUFDWixXQUFXO0VBQ1gsNEJBQTRCO0VBQzVCLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0Usa0NBQWlEO0VBQ2pELFlBQVk7RUFDWix3QkFBd0I7RUFDeEIsV0FBVztFQUNYLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0Usa0NBQWlEO0VBQ2pELFlBQVk7RUFDWix3QkFBd0I7RUFDeEIsV0FBVztFQUNYLDRCQUE0QjtBQUM5QjtBQUVBO0VBQ0UsOEJBQTZDO0VBQzdDLFlBQVk7RUFDWix3QkFBd0I7RUFDeEIsV0FBVztFQUNYLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0UsZ0NBQStDO0VBQy9DLFlBQVk7RUFDWix3QkFBd0I7RUFDeEIsV0FBVztFQUNYLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0UsaUNBQWdEO0VBQ2hELFlBQVk7RUFDWix3QkFBd0I7RUFDeEIsV0FBVztFQUNYLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0Usa0NBQWlEO0VBQ2pELFlBQVk7RUFDWix3QkFBd0I7RUFDeEIsV0FBVztFQUNYLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0UsbUNBQWtEO0VBQ2xELFlBQVk7RUFDWix3QkFBd0I7RUFDeEIsV0FBVztFQUNYLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0UsbUNBQWtEO0VBQ2xELFlBQVk7RUFDWix3QkFBd0I7RUFDeEIsV0FBVztFQUNYLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0UsZ0NBQStDO0VBQy9DLFlBQVk7RUFDWix3QkFBd0I7RUFDeEIsV0FBVztFQUNYLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0UsZ0NBQStDO0VBQy9DLFlBQVk7RUFDWix3QkFBd0I7RUFDeEIsV0FBVztFQUNYLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0UsOEJBQTZDO0VBQzdDLFlBQVk7RUFDWix3QkFBd0I7RUFDeEIsV0FBVztFQUNYLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0U7SUFDRSxtQ0FBa0Q7SUFDbEQsWUFBWTtJQUNaLFlBQVk7SUFDWiw0QkFBNEI7RUFDOUI7RUFDQTtJQUNFLG9DQUFtRDtJQUNuRCxZQUFZO0lBQ1osWUFBWTtJQUNaLDRCQUE0QjtFQUM5QjtFQUNBO0lBQ0UsK0JBQThDO0lBQzlDLFlBQVk7SUFDWixZQUFZO0lBQ1osNEJBQTRCO0VBQzlCO0VBQ0E7SUFDRSxrQ0FBaUQ7SUFDakQsWUFBWTtJQUNaLFlBQVk7SUFDWiw0QkFBNEI7RUFDOUI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NraWxscy9za2lsbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50e1xuICBwYWRkaW5nLXRvcDogNjBweDtcbn1cbi5za2lsbExpc3R7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICB3aWR0aDogMTAwJTtcbiAgLyogYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjAzKTsgKi9cbiAgcGFkZGluZzogNSU7XG5cbn1cbi5za2lsbExpc3Q+ZGl2e1xuICBtYXJnaW46IGF1dG87XG59XG4uc2tpbGwxe1xuICBiYWNrZ3JvdW5kLWltYWdlOnVybCgnLi9za2lsbHNBc3NldHMvZmx1dHRlci5wbmcnKTtcbiAgaGVpZ2h0OjEwMHB4O1xuICB3aWR0aDogNjBweDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cbi5za2lsbDJ7XG4gIGJhY2tncm91bmQtaW1hZ2U6dXJsKCcuL3NraWxsc0Fzc2V0cy9maXJlYmFzZS5wbmcnKTtcbiAgaGVpZ2h0OjEwMHB4O1xuICB3aWR0aDogNjBweDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cbi5za2lsbDN7XG4gIGJhY2tncm91bmQtaW1hZ2U6dXJsKCcuL3NraWxsc0Fzc2V0cy9lczYucG5nJyk7XG4gIGhlaWdodDoxMDBweDtcbiAgd2lkdGg6IDYwcHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG4uc2tpbGw0e1xuICBiYWNrZ3JvdW5kLWltYWdlOnVybCgnLi9za2lsbHNBc3NldHMvZ3JhZGxlLnBuZycpO1xuICBoZWlnaHQ6MTAwcHg7XG4gIHdpZHRoOiA2MHB4O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuLnNraWxsNXtcbiAgYmFja2dyb3VuZC1pbWFnZTp1cmwoJy4vc2tpbGxzQXNzZXRzL2phdmEucG5nJyk7XG4gIGhlaWdodDoxMDBweDtcbiAgd2lkdGg6IDYwcHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbn1cbi5za2lsbDZ7XG4gIGJhY2tncm91bmQtaW1hZ2U6dXJsKCcuL3NraWxsc0Fzc2V0cy9rb3RsaW4ucG5nJyk7XG4gIGhlaWdodDoxMDBweDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICB3aWR0aDogNjBweDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cbi5za2lsbDd7XG4gIGJhY2tncm91bmQtaW1hZ2U6dXJsKCcuL3NraWxsc0Fzc2V0cy9weXRob24ucG5nJyk7XG4gIGhlaWdodDoxMDBweDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICB3aWR0aDogNjBweDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cblxuLnNraWxsOHtcbiAgYmFja2dyb3VuZC1pbWFnZTp1cmwoJy4vc2tpbGxzQXNzZXRzL2MuanBlZycpO1xuICBoZWlnaHQ6MTAwcHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgd2lkdGg6IDYwcHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG4uc2tpbGw5e1xuICBiYWNrZ3JvdW5kLWltYWdlOnVybCgnLi9za2lsbHNBc3NldHMvcHNxbC5wbmcnKTtcbiAgaGVpZ2h0OjEwMHB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIHdpZHRoOiA2MHB4O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuLnNraWxsMTB7XG4gIGJhY2tncm91bmQtaW1hZ2U6dXJsKCcuL3NraWxsc0Fzc2V0cy9yZWFjdC5wbmcnKTtcbiAgaGVpZ2h0OjEwMHB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIHdpZHRoOiA2MHB4O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuLnNraWxsMTF7XG4gIGJhY2tncm91bmQtaW1hZ2U6dXJsKCcuL3NraWxsc0Fzc2V0cy9hcGFjaGUucG5nJyk7XG4gIGhlaWdodDoxMDBweDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICB3aWR0aDogNjBweDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cbi5za2lsbDEye1xuICBiYWNrZ3JvdW5kLWltYWdlOnVybCgnLi9za2lsbHNBc3NldHMvYW5kcm9pZC5wbmcnKTtcbiAgaGVpZ2h0OjEwMHB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIHdpZHRoOiA2MHB4O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuLnNraWxsMTN7XG4gIGJhY2tncm91bmQtaW1hZ2U6dXJsKCcuL3NraWxsc0Fzc2V0cy9hbmd1bGFyLnBuZycpO1xuICBoZWlnaHQ6MTAwcHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgd2lkdGg6IDYwcHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG4uc2tpbGwxNHtcbiAgYmFja2dyb3VuZC1pbWFnZTp1cmwoJy4vc2tpbGxzQXNzZXRzL2h0bWwucG5nJyk7XG4gIGhlaWdodDoxMDBweDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICB3aWR0aDogNjBweDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cbi5za2lsbDE1e1xuICBiYWNrZ3JvdW5kLWltYWdlOnVybCgnLi9za2lsbHNBc3NldHMvY3NzLmpwZWcnKTtcbiAgaGVpZ2h0OjEwMHB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIHdpZHRoOiA2MHB4O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuLnNraWxsMTZ7XG4gIGJhY2tncm91bmQtaW1hZ2U6dXJsKCcuL3NraWxsc0Fzc2V0cy9qcy5wbmcnKTtcbiAgaGVpZ2h0OjEwMHB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIHdpZHRoOiA2MHB4O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjcwMHB4KXtcbiAgLnNraWxsMXtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOnVybCgnLi9za2lsbHNBc3NldHMvZmx1dHRlci5wbmcnKTtcbiAgICBoZWlnaHQ6MTAwcHg7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIH1cbiAgLnNraWxsMntcbiAgICBiYWNrZ3JvdW5kLWltYWdlOnVybCgnLi9za2lsbHNBc3NldHMvZmlyZWJhc2UucG5nJyk7XG4gICAgaGVpZ2h0OjEwMHB4O1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICB9XG4gIC5za2lsbDN7XG4gICAgYmFja2dyb3VuZC1pbWFnZTp1cmwoJy4vc2tpbGxzQXNzZXRzL2VzNi5wbmcnKTtcbiAgICBoZWlnaHQ6MTAwcHg7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIH1cbiAgLnNraWxsNHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOnVybCgnLi9za2lsbHNBc3NldHMvZ3JhZGxlLnBuZycpO1xuICAgIGhlaWdodDoxMDBweDtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgfVxufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SkillsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-skills',
          templateUrl: './skills.component.html',
          styleUrls: ['./skills.component.css']
        }]
      }], function () {
        return [{
          type: ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/social.ts":
  /*!***************************!*\
    !*** ./src/app/social.ts ***!
    \***************************/

  /*! exports provided: Social */

  /***/
  function srcAppSocialTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Social", function () {
      return Social;
    });

    var Social = function Social(platform, link) {
      _classCallCheck(this, Social);

      this.platform = platform;
      this.link = link;
    };
    /***/

  },

  /***/
  "./src/app/web.service.ts":
  /*!********************************!*\
    !*** ./src/app/web.service.ts ***!
    \********************************/

  /*! exports provided: WebService */

  /***/
  function srcAppWebServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WebService", function () {
      return WebService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var WebService = /*#__PURE__*/function () {
      function WebService(http) {
        _classCallCheck(this, WebService);

        this.http = http;
      }

      _createClass(WebService, [{
        key: "checkLink",
        value: function checkLink(link) {
          var _this = this;

          var promise = new Promise(function (resolve, reject) {
            _this.http.get(link).toPromise().then(function (response) {
              console.log(response);
              resolve();
            }, function (error) {
              reject(error);
            });
          });
          return promise;
        }
      }]);

      return WebService;
    }();

    WebService.ɵfac = function WebService_Factory(t) {
      return new (t || WebService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    WebService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: WebService,
      factory: WebService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WebService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/webview/webview.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/webview/webview.component.ts ***!
    \**********************************************/

  /*! exports provided: WebviewComponent */

  /***/
  function srcAppWebviewWebviewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WebviewComponent", function () {
      return WebviewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _web_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../web.service */
    "./src/app/web.service.ts");

    var WebviewComponent = /*#__PURE__*/function () {
      function WebviewComponent(route, WebService) {
        _classCallCheck(this, WebviewComponent);

        this.route = route;
        this.WebService = WebService;
        this.link = "null";
        this.platform = "null";
      }

      _createClass(WebviewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // this.z = this.route.snapshot.paramMap.get('link');
          this.link = this.route.snapshot.paramMap.get('link');
          this.platform = this.route.snapshot.paramMap.get('platform');
          this.WebService.checkLink(this.route.snapshot.paramMap.get('link'));
        }
      }]);

      return WebviewComponent;
    }();

    WebviewComponent.ɵfac = function WebviewComponent_Factory(t) {
      return new (t || WebviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_web_service__WEBPACK_IMPORTED_MODULE_2__["WebService"]));
    };

    WebviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: WebviewComponent,
      selectors: [["app-webview"]],
      decls: 17,
      vars: 3,
      consts: [[1, "content"], [1, "centered"], [2, "font-size", "40px"], ["target", "_blank", 3, "href"], ["type", "button", "name", "button", 1, "btn", "btn-info"]],
      template: function WebviewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "strong", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.platform, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Open ", ctx.platform, "");
        }
      },
      styles: [".content[_ngcontent-%COMP%]{\n  padding-top: 60px;\n}\n.frame[_ngcontent-%COMP%]{\n  height: 100vh;\n  width: 100%;\n  border: 1px solid grey;\n}\n.centered[_ngcontent-%COMP%]{\n\n  position: absolute;\n  top:50%;\n  left:50%;\n  transform: translate(-50%,-50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2Vidmlldy93ZWJ2aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsc0JBQXNCO0FBQ3hCO0FBQ0E7O0VBRUUsa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxRQUFRO0VBQ1IsK0JBQStCO0FBQ2pDIiwiZmlsZSI6InNyYy9hcHAvd2Vidmlldy93ZWJ2aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudHtcbiAgcGFkZGluZy10b3A6IDYwcHg7XG59XG4uZnJhbWV7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xufVxuLmNlbnRlcmVke1xuXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOjUwJTtcbiAgbGVmdDo1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WebviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-webview',
          templateUrl: './webview.component.html',
          styleUrls: ['./webview.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _web_service__WEBPACK_IMPORTED_MODULE_2__["WebService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/dickson/Documents/projects/Angular/App/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map