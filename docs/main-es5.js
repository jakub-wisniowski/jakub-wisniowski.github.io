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


    var _homepage_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./homepage/home/home.component */
    "./src/app/homepage/home/home.component.ts");

    var routes = [{
      path: "",
      component: _homepage_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }, {
      path: "projects",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | projects-projects-module */
        "projects-projects-module").then(__webpack_require__.bind(null,
        /*! ./projects/projects.module */
        "./src/app/projects/projects.module.ts")).then(function (m) {
          return m.ProjectsModule;
        });
      }
    }, {
      path: "**",
      redirectTo: "/"
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = ["backToTop"];

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(router) {
        var _this = this;

        _classCallCheck(this, AppComponent);

        this.router = router;
        this.title = "jakub-wisniowski";

        this.scrollToTop = function () {
          var button = _this.backToTop.nativeElement;
          button.classList.add("active");
          var c = document.documentElement.scrollTop || document.body.scrollTop;

          if (c > 0) {
            window.requestAnimationFrame(_this.scrollToTop);
            window.scrollTo(0, c - 30);
          } else {
            button.classList.remove("active");
            button.blur();
          }
        };
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.router.events.subscribe(function (evt) {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"])) {
              return;
            }

            window.scrollTo(0, 0);
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      viewQuery: function AppComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.backToTop = _t.first);
        }
      },
      decls: 6,
      vars: 0,
      consts: [[1, "footer"], ["id", "backToTop", "tabindex", "1", 3, "click"], ["backToTop", ""]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "All rights reserved. Jakub Wi\u015Bniowski 2018");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_4_listener() {
            return ctx.scrollToTop();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: [".footer[_ngcontent-%COMP%] {\n  width: 100%;\n  clear: both;\n  font-size: 80%;\n}\n.footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n  position: relative;\n  margin-top: 40px;\n  margin-bottom: 0;\n  padding-bottom: 10px;\n}\n#backToTop[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  width: 50px;\n  height: 50px;\n  background: url('paper-plane.png');\n  background-size: contain !important;\n  border: none;\n  outline: none;\n  z-index: 10;\n}\n#backToTop[_ngcontent-%COMP%]:hover, #backToTop[_ngcontent-%COMP%]:focus {\n  background: url('paper-plane-hover.png');\n  -webkit-animation: pulsate 4s linear both;\n          animation: pulsate 4s linear both;\n}\n#backToTop.active[_ngcontent-%COMP%] {\n  -webkit-animation: fly 4s linear;\n          animation: fly 4s linear;\n  transform: translate3d(0, 0, 0);\n  background: url('paper-plane-flying.png');\n}\n@-webkit-keyframes fly {\n  10%, 50% {\n    transform: translate3d(-10px, 0, 0);\n  }\n  20%, 40% {\n    transform: translate3d(-20px, 0, 0);\n  }\n  30% {\n    transform: translate3d(-30px, 0, 0);\n  }\n  60% {\n    transform: translate3d(0, 0, 0);\n  }\n  70%, 90% {\n    transform: translate3d(10px, 0, 0);\n  }\n  80% {\n    transform: translate3d(20px, 0, 0);\n  }\n}\n@keyframes fly {\n  10%, 50% {\n    transform: translate3d(-10px, 0, 0);\n  }\n  20%, 40% {\n    transform: translate3d(-20px, 0, 0);\n  }\n  30% {\n    transform: translate3d(-30px, 0, 0);\n  }\n  60% {\n    transform: translate3d(0, 0, 0);\n  }\n  70%, 90% {\n    transform: translate3d(10px, 0, 0);\n  }\n  80% {\n    transform: translate3d(20px, 0, 0);\n  }\n}\n@-webkit-keyframes pulsate {\n  10%, 90% {\n    transform: scale(0.9);\n  }\n  30%, 70% {\n    transform: scale(1.1);\n  }\n  50% {\n    transform: scale(1);\n  }\n}\n@keyframes pulsate {\n  10%, 90% {\n    transform: scale(0.9);\n  }\n  30%, 70% {\n    transform: scale(1.1);\n  }\n  50% {\n    transform: scale(1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Jvb3Rlci9Qcm9qZWN0cy9Qb3J0Zm9saW8vb2xkLWpha3ViLXdpc25pb3dza2kuZ2l0aHViLmlvL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUNIRjtBREtFO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQ0hKO0FET0E7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtDQUFBO0VBQ0EsbUNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUNKRjtBRE9BOztFQUVFLHdDQUFBO0VBQ0EseUNBQUE7VUFBQSxpQ0FBQTtBQ0pGO0FET0E7RUFDRSxnQ0FBQTtVQUFBLHdCQUFBO0VBQ0EsK0JBQUE7RUFDQSx5Q0FBQTtBQ0pGO0FET0E7RUFDRTtJQUVFLG1DQUFBO0VDTEY7RURRQTtJQUVFLG1DQUFBO0VDUEY7RURVQTtJQUNFLG1DQUFBO0VDUkY7RURXQTtJQUNFLCtCQUFBO0VDVEY7RURZQTtJQUVFLGtDQUFBO0VDWEY7RURjQTtJQUNFLGtDQUFBO0VDWkY7QUFDRjtBRGRBO0VBQ0U7SUFFRSxtQ0FBQTtFQ0xGO0VEUUE7SUFFRSxtQ0FBQTtFQ1BGO0VEVUE7SUFDRSxtQ0FBQTtFQ1JGO0VEV0E7SUFDRSwrQkFBQTtFQ1RGO0VEWUE7SUFFRSxrQ0FBQTtFQ1hGO0VEY0E7SUFDRSxrQ0FBQTtFQ1pGO0FBQ0Y7QURlQTtFQUNFO0lBRUUscUJBQUE7RUNkRjtFRGlCQTtJQUVFLHFCQUFBO0VDaEJGO0VEbUJBO0lBQ0UsbUJBQUE7RUNqQkY7QUFDRjtBRElBO0VBQ0U7SUFFRSxxQkFBQTtFQ2RGO0VEaUJBO0lBRUUscUJBQUE7RUNoQkY7RURtQkE7SUFDRSxtQkFBQTtFQ2pCRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIn5zcmMvc3R5bGVzL2NvbG9yc1wiO1xuQGltcG9ydCBcIn5zcmMvc3R5bGVzL3ZhcmlhYmxlc1wiO1xuXG5cbi5mb290ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgY2xlYXI6IGJvdGg7XG4gIGZvbnQtc2l6ZTogODAlO1xuXG4gIHAge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICB9XG59XG5cbiNiYWNrVG9Ub3Age1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMjBweDtcbiAgcmlnaHQ6IDIwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJhY2tncm91bmQ6IHVybCgkaW1nX3ByZWZpeCtcImljb25zL3BhcGVyLXBsYW5lLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgei1pbmRleDogMTA7XG59XG5cbiNiYWNrVG9Ub3A6aG92ZXIsXG4jYmFja1RvVG9wOmZvY3VzIHtcbiAgYmFja2dyb3VuZDogdXJsKCRpbWdfcHJlZml4K1wiaWNvbnMvcGFwZXItcGxhbmUtaG92ZXIucG5nXCIpO1xuICBhbmltYXRpb246IHB1bHNhdGUgNHMgbGluZWFyIGJvdGg7XG59XG5cbiNiYWNrVG9Ub3AuYWN0aXZlIHtcbiAgYW5pbWF0aW9uOiBmbHkgNHMgbGluZWFyO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICBiYWNrZ3JvdW5kOiB1cmwoJGltZ19wcmVmaXgrXCJpY29ucy9wYXBlci1wbGFuZS1mbHlpbmcucG5nXCIpO1xufVxuXG5Aa2V5ZnJhbWVzIGZseSB7XG4gIDEwJSxcbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMHB4LCAwLCAwKTtcbiAgfVxuXG4gIDIwJSxcbiAgNDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yMHB4LCAwLCAwKTtcbiAgfVxuXG4gIDMwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMzBweCwgMCwgMCk7XG4gIH1cblxuICA2MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cblxuICA3MCUsXG4gIDkwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMHB4LCAwLCAwKTtcbiAgfVxuXG4gIDgwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgyMHB4LCAwLCAwKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHB1bHNhdGUge1xuICAxMCUsXG4gIDkwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xuICB9XG5cbiAgMzAlLFxuICA3MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgfVxuXG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxufSIsIi5mb290ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgY2xlYXI6IGJvdGg7XG4gIGZvbnQtc2l6ZTogODAlO1xufVxuLmZvb3RlciBwIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG4jYmFja1RvVG9wIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDIwcHg7XG4gIHJpZ2h0OiAyMHB4O1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoXCJ+c3JjL2Fzc2V0cy9pbWFnZXMvaWNvbnMvcGFwZXItcGxhbmUucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW4gIWltcG9ydGFudDtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICB6LWluZGV4OiAxMDtcbn1cblxuI2JhY2tUb1RvcDpob3ZlcixcbiNiYWNrVG9Ub3A6Zm9jdXMge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCJ+c3JjL2Fzc2V0cy9pbWFnZXMvaWNvbnMvcGFwZXItcGxhbmUtaG92ZXIucG5nXCIpO1xuICBhbmltYXRpb246IHB1bHNhdGUgNHMgbGluZWFyIGJvdGg7XG59XG5cbiNiYWNrVG9Ub3AuYWN0aXZlIHtcbiAgYW5pbWF0aW9uOiBmbHkgNHMgbGluZWFyO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCJ+c3JjL2Fzc2V0cy9pbWFnZXMvaWNvbnMvcGFwZXItcGxhbmUtZmx5aW5nLnBuZ1wiKTtcbn1cblxuQGtleWZyYW1lcyBmbHkge1xuICAxMCUsIDUwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTBweCwgMCwgMCk7XG4gIH1cbiAgMjAlLCA0MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTIwcHgsIDAsIDApO1xuICB9XG4gIDMwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMzBweCwgMCwgMCk7XG4gIH1cbiAgNjAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG4gIDcwJSwgOTAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwcHgsIDAsIDApO1xuICB9XG4gIDgwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgyMHB4LCAwLCAwKTtcbiAgfVxufVxuQGtleWZyYW1lcyBwdWxzYXRlIHtcbiAgMTAlLCA5MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcbiAgfVxuICAzMCUsIDcwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-root",
          templateUrl: "./app.component.html",
          styleUrls: ["./app.component.scss"]
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, {
        backToTop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ["backToTop"]
        }]
      });
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


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _homepage_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./homepage/home/home.component */
    "./src/app/homepage/home/home.component.ts");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @scullyio/ng-lib */
    "./node_modules/@scullyio/ng-lib/__ivy_ngcc__/fesm2015/scullyio-ng-lib.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _homepage_projects_overview_projects_overview_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./homepage/projects-overview/projects-overview.component */
    "./src/app/homepage/projects-overview/projects-overview.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_9__["ScullyLibModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _homepage_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _homepage_projects_overview_projects_overview_component__WEBPACK_IMPORTED_MODULE_11__["ProjectsOverviewComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_9__["ScullyLibModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _homepage_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _homepage_projects_overview_projects_overview_component__WEBPACK_IMPORTED_MODULE_11__["ProjectsOverviewComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_9__["ScullyLibModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/homepage/home/home.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/homepage/home/home.component.ts ***!
    \*************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomepageHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _shared_directives_click_outside_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/directives/click-outside.directive */
    "./src/app/shared/directives/click-outside.directive.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_directives_intersection_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../shared/directives/intersection.directive */
    "./src/app/shared/directives/intersection.directive.ts");
    /* harmony import */


    var _projects_overview_projects_overview_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../projects-overview/projects-overview.component */
    "./src/app/homepage/projects-overview/projects-overview.component.ts");

    function HomeComponent_div_103_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name is required. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_div_107_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    function HomeComponent_div_107_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Incorrect email address.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    function HomeComponent_div_107_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_div_107_ng_container_1_Template, 2, 0, "ng-container", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_div_107_ng_container_2_Template, 2, 0, "ng-container", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.form.controls.email.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.form.controls.email.errors.email);
      }
    }

    function HomeComponent_div_111_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Messages is required. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a0) {
      return {
        collapsed: a0
      };
    };

    var _c1 = function _c1(a0) {
      return {
        visible: a0
      };
    };

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent(http, fb, renderer) {
        _classCallCheck(this, HomeComponent);

        this.http = http;
        this.fb = fb;
        this.renderer = renderer;
        this.isCollapsed = true;
        this.formSubmitted = false;
        this.form = this.fb.group({
          name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
          email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
          message: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        });
      }

      _createClass(HomeComponent, [{
        key: "scrollToSection",
        value: function scrollToSection(section) {
          section.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
          this.isCollapsed = true;
        }
      }, {
        key: "submit",
        value: function submit() {
          var _this2 = this;

          this.http.post("https://formspree.io/jakub.m.wisniowski@gmail.com", {
            name: this.form.controls.name.value,
            email: this.form.controls.email.value,
            message: this.form.controls.message.value
          }).subscribe(function (_) {
            _this2.formSubmitted = true;
            setTimeout(function () {
              _this2.formSubmitted = false;
            }, 3000);
          });
        }
      }, {
        key: "handleIntersection",
        value: function handleIntersection(visible, el) {
          visible ? this.renderer.addClass(el, "intersecting") : this.renderer.removeClass(el, "intersecting");
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 116,
      vars: 12,
      consts: [[1, "content-wrapper"], [1, "page-header"], [1, "container", 3, "clickOutside"], ["type", "button", "aria-controls", "navigation", 1, "hamburger-menu", 3, "click"], ["width", "50", "src", "assets/images/icons/hamburger.png"], ["id", "navigation", 1, "navigation-small", 3, "ngClass"], [1, "navigation-link-small", 3, "click"], [1, "navigation"], [1, "navigation-link", "border-link", "fs-34", 3, "click"], [1, "banner"], [1, "banner-bg-opacity"], [1, "my-name"], [1, "my-places-center"], [1, "my-places"], ["href", "https://github.com/jakub-wisniowski", "data-tool-tip", "Github profile", "target", "-blank", 1, "shortcut-img"], ["src", "assets/images/icons/github.png", "alt", "Github profile"], ["href", "https://www.linkedin.com/in/jakub-m-wisniowski/", "data-tool-tip", "LinkedIn profile", "target", "-blank", 1, "shortcut-img"], ["src", "assets/images/icons/linkedin.png", "alt", "LinkedIn profile"], ["id", "about"], ["about", ""], [1, "section-header"], [1, "container", "overflow-hidden"], ["intersection", "", 1, "row", "justify-content-center", "align-items-center", "bio", 3, "visibilityChange"], ["bio", ""], ["id", "imageWrapper", 1, "col-4"], ["src", "assets/images/profile.jpeg", "alt", "Profile picture", 1, "profile-picture"], ["id", "textWrapper", 1, "col-8", "fs-26", "text-justify"], ["id", "projects"], ["projects", ""], ["id", "contact"], ["contact", ""], [1, "contact-opacity"], [1, "container"], [1, "row"], [1, "instruction", "fs-26"], ["href", "mailto:jakub.m.wisniowski@gmail.com", "data-tool-tip", "open in your email client", 1, "border-link"], ["id", "contact-form", 1, "col", "col-12", 3, "formGroup", "ngSubmit"], ["for", "name"], ["id", "name", "name", "name", "placeholder", "Name", "type", "text", "formControlName", "name", 1, "form-control"], ["class", "alert alert-danger", 4, "ngIf"], ["for", "email"], ["id", "email", "name", "email", "placeholder", "Email", "type", "email", "formControlName", "email", 1, "form-control"], ["for", "message"], ["id", "message", "name", "message", "placeholder", "Message", "rows", "5", "formControlName", "message", 1, "form-control"], ["id", "send-button", "type", "submit", 1, "btn", "btn-default", "pull-right", 3, "disabled"], ["id", "thank-you-message", 3, "ngClass"], [1, "alert", "alert-danger"], [4, "ngIf"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickOutside", function HomeComponent_Template_div_clickOutside_2_listener() {
            return ctx.isCollapsed = true;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_3_listener() {
            return ctx.isCollapsed = !ctx.isCollapsed;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](40);

            return ctx.scrollToSection(_r0);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "ABOUT");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](85);

            return ctx.scrollToSection(_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "PROJECTS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_14_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](88);

            return ctx.scrollToSection(_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "CONTACT");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ul", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_18_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](40);

            return ctx.scrollToSection(_r0);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "ABOUT");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_21_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](85);

            return ctx.scrollToSection(_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "PROJECTS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_24_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](88);

            return ctx.scrollToSection(_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "CONTACT");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "section", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "JAKUB WI\u015ANIOWSKI");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "FRONT-END DEVELOPER");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "section", 18, 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h3", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "About me");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 22, 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibilityChange", function HomeComponent_Template_div_visibilityChange_44_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](45);

            return ctx.handleIntersection($event, _r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "img", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " I am a Frontend Developer with 2 years of experience. I graduated from Computer Science at ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Poznan University of\xA0Technology");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " in February 2019. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " I'm looking for mid level frontend or\xA0fullstack positions. Right now, I'm working mainly in ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Angular 9");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, ". In my everyday work I use Typescript, but I'm also familiar with Dart. For the last 6 months I worked on a project using technologies such as REST API, RxJS, NgRx and ngx-bootstrap. I write and maintain unit and e2e tests. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " As a Computer Science Bachelor, I also have a basic understanding of\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Java");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, ", ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Python");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, ", ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Kotlin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " and\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "C#");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, ". ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " Foreign languages are my passion, I've been studying ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "English");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " at Adam Mickiewicz University, I also speak ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "French");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " and have basic knowledge of ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Danish");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, ". After working hours I translate texts and work on various IT solutions for grassroots groups. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "section", 27, 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "app-projects-overview");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "section", 29, 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "h3", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "p", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " Contact me via the form below or send an email to the following address: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "a", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "jakub.m.wisniowski@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "form", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function HomeComponent_Template_form_ngSubmit_99_listener() {
            return ctx.submit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "label", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "input", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](103, HomeComponent_div_103_Template, 2, 0, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "label", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "input", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](107, HomeComponent_div_107_Template, 3, 2, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "label", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Your message");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "textarea", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](111, HomeComponent_div_111_Template, 2, 0, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "button", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, " Send ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, " Thanks for contacting me! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx.isCollapsed));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.controls.name.touched && ctx.form.controls.name.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.controls.email.touched && ctx.form.controls.email.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.controls.message.touched && ctx.form.controls.message.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.form.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c1, ctx.formSubmitted));
        }
      },
      directives: [_shared_directives_click_outside_directive__WEBPACK_IMPORTED_MODULE_3__["ClickOutsideDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _shared_directives_intersection_directive__WEBPACK_IMPORTED_MODULE_5__["IntersectionDirective"], _projects_overview_projects_overview_component__WEBPACK_IMPORTED_MODULE_6__["ProjectsOverviewComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
      styles: [".border-link[_ngcontent-%COMP%] {\n  position: relative;\n}\n.border-link[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: -10px;\n  bottom: -10px;\n  left: 0;\n  right: 0;\n  transition: transform ease-out 250ms;\n  border-top: 2px solid #474507;\n  border-bottom: 2px solid #474507;\n  transform: scale(0, 1);\n}\n.border-link[_ngcontent-%COMP%]:hover::before, .border-link[_ngcontent-%COMP%]:focus::before {\n  transform: scale(1, 1);\n}\n.border-link[_ngcontent-%COMP%]:focus {\n  outline: none;\n  color: black;\n  text-decoration: none;\n}\n.content-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0;\n  min-height: 100vh;\n}\n.fs-16[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.lh-16[_ngcontent-%COMP%] {\n  line-height: 16px;\n}\n.fs-17[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n.lh-17[_ngcontent-%COMP%] {\n  line-height: 17px;\n}\n.fs-18[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.lh-18[_ngcontent-%COMP%] {\n  line-height: 18px;\n}\n.fs-19[_ngcontent-%COMP%] {\n  font-size: 19px;\n}\n.lh-19[_ngcontent-%COMP%] {\n  line-height: 19px;\n}\n.fs-20[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.lh-20[_ngcontent-%COMP%] {\n  line-height: 20px;\n}\n.fs-21[_ngcontent-%COMP%] {\n  font-size: 21px;\n}\n.lh-21[_ngcontent-%COMP%] {\n  line-height: 21px;\n}\n.fs-22[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n.lh-22[_ngcontent-%COMP%] {\n  line-height: 22px;\n}\n.fs-23[_ngcontent-%COMP%] {\n  font-size: 23px;\n}\n.lh-23[_ngcontent-%COMP%] {\n  line-height: 23px;\n}\n.fs-24[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.lh-24[_ngcontent-%COMP%] {\n  line-height: 24px;\n}\n.fs-25[_ngcontent-%COMP%] {\n  font-size: 25px;\n}\n.lh-25[_ngcontent-%COMP%] {\n  line-height: 25px;\n}\n.fs-26[_ngcontent-%COMP%] {\n  font-size: 26px;\n}\n.lh-26[_ngcontent-%COMP%] {\n  line-height: 26px;\n}\n.fs-27[_ngcontent-%COMP%] {\n  font-size: 27px;\n}\n.lh-27[_ngcontent-%COMP%] {\n  line-height: 27px;\n}\n.fs-28[_ngcontent-%COMP%] {\n  font-size: 28px;\n}\n.lh-28[_ngcontent-%COMP%] {\n  line-height: 28px;\n}\n.fs-29[_ngcontent-%COMP%] {\n  font-size: 29px;\n}\n.lh-29[_ngcontent-%COMP%] {\n  line-height: 29px;\n}\n.fs-30[_ngcontent-%COMP%] {\n  font-size: 30px;\n}\n.lh-30[_ngcontent-%COMP%] {\n  line-height: 30px;\n}\n.fs-31[_ngcontent-%COMP%] {\n  font-size: 31px;\n}\n.lh-31[_ngcontent-%COMP%] {\n  line-height: 31px;\n}\n.fs-32[_ngcontent-%COMP%] {\n  font-size: 32px;\n}\n.lh-32[_ngcontent-%COMP%] {\n  line-height: 32px;\n}\n.fs-33[_ngcontent-%COMP%] {\n  font-size: 33px;\n}\n.lh-33[_ngcontent-%COMP%] {\n  line-height: 33px;\n}\n.fs-34[_ngcontent-%COMP%] {\n  font-size: 34px;\n}\n.lh-34[_ngcontent-%COMP%] {\n  line-height: 34px;\n}\n.fs-35[_ngcontent-%COMP%] {\n  font-size: 35px;\n}\n.lh-35[_ngcontent-%COMP%] {\n  line-height: 35px;\n}\n.fs-36[_ngcontent-%COMP%] {\n  font-size: 36px;\n}\n.lh-36[_ngcontent-%COMP%] {\n  line-height: 36px;\n}\n.fs-37[_ngcontent-%COMP%] {\n  font-size: 37px;\n}\n.lh-37[_ngcontent-%COMP%] {\n  line-height: 37px;\n}\n.fs-38[_ngcontent-%COMP%] {\n  font-size: 38px;\n}\n.lh-38[_ngcontent-%COMP%] {\n  line-height: 38px;\n}\n.fs-39[_ngcontent-%COMP%] {\n  font-size: 39px;\n}\n.lh-39[_ngcontent-%COMP%] {\n  line-height: 39px;\n}\n.fs-40[_ngcontent-%COMP%] {\n  font-size: 40px;\n}\n.lh-40[_ngcontent-%COMP%] {\n  line-height: 40px;\n}\n.fs-41[_ngcontent-%COMP%] {\n  font-size: 41px;\n}\n.lh-41[_ngcontent-%COMP%] {\n  line-height: 41px;\n}\n.fs-42[_ngcontent-%COMP%] {\n  font-size: 42px;\n}\n.lh-42[_ngcontent-%COMP%] {\n  line-height: 42px;\n}\n.fs-43[_ngcontent-%COMP%] {\n  font-size: 43px;\n}\n.lh-43[_ngcontent-%COMP%] {\n  line-height: 43px;\n}\n.fs-44[_ngcontent-%COMP%] {\n  font-size: 44px;\n}\n.lh-44[_ngcontent-%COMP%] {\n  line-height: 44px;\n}\n.fs-45[_ngcontent-%COMP%] {\n  font-size: 45px;\n}\n.lh-45[_ngcontent-%COMP%] {\n  line-height: 45px;\n}\n.fs-46[_ngcontent-%COMP%] {\n  font-size: 46px;\n}\n.lh-46[_ngcontent-%COMP%] {\n  line-height: 46px;\n}\n.fs-47[_ngcontent-%COMP%] {\n  font-size: 47px;\n}\n.lh-47[_ngcontent-%COMP%] {\n  line-height: 47px;\n}\n.fs-48[_ngcontent-%COMP%] {\n  font-size: 48px;\n}\n.lh-48[_ngcontent-%COMP%] {\n  line-height: 48px;\n}\n.fs-49[_ngcontent-%COMP%] {\n  font-size: 49px;\n}\n.lh-49[_ngcontent-%COMP%] {\n  line-height: 49px;\n}\n.fs-50[_ngcontent-%COMP%] {\n  font-size: 50px;\n}\n.lh-50[_ngcontent-%COMP%] {\n  line-height: 50px;\n}\n.fs-51[_ngcontent-%COMP%] {\n  font-size: 51px;\n}\n.lh-51[_ngcontent-%COMP%] {\n  line-height: 51px;\n}\n.fs-52[_ngcontent-%COMP%] {\n  font-size: 52px;\n}\n.lh-52[_ngcontent-%COMP%] {\n  line-height: 52px;\n}\n.fs-53[_ngcontent-%COMP%] {\n  font-size: 53px;\n}\n.lh-53[_ngcontent-%COMP%] {\n  line-height: 53px;\n}\n.fs-54[_ngcontent-%COMP%] {\n  font-size: 54px;\n}\n.lh-54[_ngcontent-%COMP%] {\n  line-height: 54px;\n}\n.fs-55[_ngcontent-%COMP%] {\n  font-size: 55px;\n}\n.lh-55[_ngcontent-%COMP%] {\n  line-height: 55px;\n}\n.fs-56[_ngcontent-%COMP%] {\n  font-size: 56px;\n}\n.lh-56[_ngcontent-%COMP%] {\n  line-height: 56px;\n}\n.fs-57[_ngcontent-%COMP%] {\n  font-size: 57px;\n}\n.lh-57[_ngcontent-%COMP%] {\n  line-height: 57px;\n}\n.fs-58[_ngcontent-%COMP%] {\n  font-size: 58px;\n}\n.lh-58[_ngcontent-%COMP%] {\n  line-height: 58px;\n}\n.fs-59[_ngcontent-%COMP%] {\n  font-size: 59px;\n}\n.lh-59[_ngcontent-%COMP%] {\n  line-height: 59px;\n}\n.fs-60[_ngcontent-%COMP%] {\n  font-size: 60px;\n}\n.lh-60[_ngcontent-%COMP%] {\n  line-height: 60px;\n}\n.fs-61[_ngcontent-%COMP%] {\n  font-size: 61px;\n}\n.lh-61[_ngcontent-%COMP%] {\n  line-height: 61px;\n}\n.fs-62[_ngcontent-%COMP%] {\n  font-size: 62px;\n}\n.lh-62[_ngcontent-%COMP%] {\n  line-height: 62px;\n}\n.fs-63[_ngcontent-%COMP%] {\n  font-size: 63px;\n}\n.lh-63[_ngcontent-%COMP%] {\n  line-height: 63px;\n}\n.fs-64[_ngcontent-%COMP%] {\n  font-size: 64px;\n}\n.lh-64[_ngcontent-%COMP%] {\n  line-height: 64px;\n}\n.fs-65[_ngcontent-%COMP%] {\n  font-size: 65px;\n}\n.lh-65[_ngcontent-%COMP%] {\n  line-height: 65px;\n}\n.fs-66[_ngcontent-%COMP%] {\n  font-size: 66px;\n}\n.lh-66[_ngcontent-%COMP%] {\n  line-height: 66px;\n}\n.fs-67[_ngcontent-%COMP%] {\n  font-size: 67px;\n}\n.lh-67[_ngcontent-%COMP%] {\n  line-height: 67px;\n}\n.fs-68[_ngcontent-%COMP%] {\n  font-size: 68px;\n}\n.lh-68[_ngcontent-%COMP%] {\n  line-height: 68px;\n}\n.fs-69[_ngcontent-%COMP%] {\n  font-size: 69px;\n}\n.lh-69[_ngcontent-%COMP%] {\n  line-height: 69px;\n}\n.fs-70[_ngcontent-%COMP%] {\n  font-size: 70px;\n}\n.lh-70[_ngcontent-%COMP%] {\n  line-height: 70px;\n}\n.fs-71[_ngcontent-%COMP%] {\n  font-size: 71px;\n}\n.lh-71[_ngcontent-%COMP%] {\n  line-height: 71px;\n}\n.fs-72[_ngcontent-%COMP%] {\n  font-size: 72px;\n}\n.lh-72[_ngcontent-%COMP%] {\n  line-height: 72px;\n}\n.fs-73[_ngcontent-%COMP%] {\n  font-size: 73px;\n}\n.lh-73[_ngcontent-%COMP%] {\n  line-height: 73px;\n}\n.fs-74[_ngcontent-%COMP%] {\n  font-size: 74px;\n}\n.lh-74[_ngcontent-%COMP%] {\n  line-height: 74px;\n}\n.fs-75[_ngcontent-%COMP%] {\n  font-size: 75px;\n}\n.lh-75[_ngcontent-%COMP%] {\n  line-height: 75px;\n}\n.fs-76[_ngcontent-%COMP%] {\n  font-size: 76px;\n}\n.lh-76[_ngcontent-%COMP%] {\n  line-height: 76px;\n}\n.fs-77[_ngcontent-%COMP%] {\n  font-size: 77px;\n}\n.lh-77[_ngcontent-%COMP%] {\n  line-height: 77px;\n}\n.fs-78[_ngcontent-%COMP%] {\n  font-size: 78px;\n}\n.lh-78[_ngcontent-%COMP%] {\n  line-height: 78px;\n}\n.fs-79[_ngcontent-%COMP%] {\n  font-size: 79px;\n}\n.lh-79[_ngcontent-%COMP%] {\n  line-height: 79px;\n}\n.fs-80[_ngcontent-%COMP%] {\n  font-size: 80px;\n}\n.lh-80[_ngcontent-%COMP%] {\n  line-height: 80px;\n}\n.fs-81[_ngcontent-%COMP%] {\n  font-size: 81px;\n}\n.lh-81[_ngcontent-%COMP%] {\n  line-height: 81px;\n}\n.fs-82[_ngcontent-%COMP%] {\n  font-size: 82px;\n}\n.lh-82[_ngcontent-%COMP%] {\n  line-height: 82px;\n}\n.fs-83[_ngcontent-%COMP%] {\n  font-size: 83px;\n}\n.lh-83[_ngcontent-%COMP%] {\n  line-height: 83px;\n}\n.fs-84[_ngcontent-%COMP%] {\n  font-size: 84px;\n}\n.lh-84[_ngcontent-%COMP%] {\n  line-height: 84px;\n}\n.fs-85[_ngcontent-%COMP%] {\n  font-size: 85px;\n}\n.lh-85[_ngcontent-%COMP%] {\n  line-height: 85px;\n}\n.fs-86[_ngcontent-%COMP%] {\n  font-size: 86px;\n}\n.lh-86[_ngcontent-%COMP%] {\n  line-height: 86px;\n}\n.fs-87[_ngcontent-%COMP%] {\n  font-size: 87px;\n}\n.lh-87[_ngcontent-%COMP%] {\n  line-height: 87px;\n}\n.fs-88[_ngcontent-%COMP%] {\n  font-size: 88px;\n}\n.lh-88[_ngcontent-%COMP%] {\n  line-height: 88px;\n}\n.fs-89[_ngcontent-%COMP%] {\n  font-size: 89px;\n}\n.lh-89[_ngcontent-%COMP%] {\n  line-height: 89px;\n}\n.fs-90[_ngcontent-%COMP%] {\n  font-size: 90px;\n}\n.lh-90[_ngcontent-%COMP%] {\n  line-height: 90px;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: absolute;\n  top: 0;\n  opacity: 0.8;\n  background: #00abca;\n  z-index: 1;\n  width: 100%;\n}\n.page-header[_ngcontent-%COMP%]   .hamburger-menu[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  position: fixed;\n  top: 10px;\n  right: 10px;\n  cursor: pointer;\n  background-size: cover;\n}\n@media only screen and (min-width: 650px) {\n  .page-header[_ngcontent-%COMP%]   .hamburger-menu[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.page-header[_ngcontent-%COMP%]   .navigation-small[_ngcontent-%COMP%] {\n  text-align: center;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  background-color: #00abca;\n  height: 100vh;\n  width: 250px;\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\n  z-index: 1;\n  opacity: 0.99;\n  transition: right 0.5s ease-in;\n}\n.page-header[_ngcontent-%COMP%]   .navigation-small.collapsed[_ngcontent-%COMP%] {\n  right: -250px;\n}\n.page-header[_ngcontent-%COMP%]   .navigation-small[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 60px 0 0 0;\n  margin-bottom: 0;\n}\n.page-header[_ngcontent-%COMP%]   .navigation-small[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 120%;\n}\n.page-header[_ngcontent-%COMP%]   .navigation-small[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background: #f9f871;\n}\n.page-header[_ngcontent-%COMP%]   .navigation-small[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\n  color: #00abca;\n}\n.page-header[_ngcontent-%COMP%]   .navigation-small[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  color: white;\n  padding: 15px 5px;\n}\n@media only screen and (min-width: 650px) {\n  .page-header[_ngcontent-%COMP%]   .navigation-small[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.page-header[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: center;\n  padding: 30px 0;\n  margin-bottom: 0;\n}\n.page-header[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 30%;\n}\n.page-header[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  position: relative;\n}\n.page-header[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: white;\n}\n@media only screen and (max-width: 650px) {\n  .page-header[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.section-header[_ngcontent-%COMP%] {\n  color: white;\n  position: relative;\n  text-transform: uppercase;\n  display: inline-block;\n  white-space: nowrap;\n  width: 100%;\n  text-align: center;\n  margin: 0;\n  height: 100px;\n  line-height: 100px;\n  font-size: 34px;\n  font-weight: bold;\n}\n.section-header[_ngcontent-%COMP%]::after, .section-header[_ngcontent-%COMP%]::before {\n  content: \"\";\n  height: 100%;\n  position: absolute;\n  display: block;\n  width: 100%;\n  top: 0;\n}\n.section-header[_ngcontent-%COMP%]::before {\n  z-index: -2;\n  background-color: white;\n}\n.section-header[_ngcontent-%COMP%]::after {\n  z-index: -1;\n  background-color: #00abca;\n}\nsection[_ngcontent-%COMP%] {\n  clear: both;\n  text-align: center;\n}\nsection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  max-width: 90%;\n  margin: 0 auto;\n}\nsection[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 30px;\n}\n.banner[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100vh;\n  margin: 0;\n  padding: 0;\n}\n.banner[_ngcontent-%COMP%]   .banner-bg-opacity[_ngcontent-%COMP%] {\n  opacity: 0.3;\n  background-image: url('banner.png');\n  width: 100%;\n  height: 100%;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-size: cover;\n  background-position: center;\n  position: absolute;\n}\n.banner[_ngcontent-%COMP%]   .my-name[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: center;\n  margin: 0;\n  padding: 50vh 50px;\n  bottom: 140px;\n}\n.banner[_ngcontent-%COMP%]   .my-places[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  text-align: center;\n  margin: 0 auto;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.banner[_ngcontent-%COMP%]   .shortcut-img[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: relative;\n  margin: 20px;\n  height: 62px;\n  width: 62px;\n}\n.banner[_ngcontent-%COMP%]   .shortcut-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n}\n.banner[_ngcontent-%COMP%]   .shortcut-img[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n.banner[_ngcontent-%COMP%]   .my-places-center[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 50px;\n  bottom: 60px;\n}\n.bio[_ngcontent-%COMP%] {\n  padding: 50px 0;\n}\n.bio[_ngcontent-%COMP%]   #imageWrapper[_ngcontent-%COMP%] {\n  opacity: 0;\n  transform: translateX(-300px);\n  transition: opacity 5s cubic-bezier(0.17, 0.67, 0.61, 0.96), transform 1s cubic-bezier(0.17, 0.67, 0.61, 0.96);\n}\n.bio[_ngcontent-%COMP%]   #imageWrapper[_ngcontent-%COMP%]   .profile-picture[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  border-radius: 50%;\n  margin-right: 1em;\n  border: 7px solid #00abca;\n}\n.bio[_ngcontent-%COMP%]   #textWrapper[_ngcontent-%COMP%] {\n  opacity: 0;\n  transform: translateX(600px);\n  transition: opacity 5s cubic-bezier(0.17, 0.67, 0.61, 0.96), transform 1s cubic-bezier(0.17, 0.67, 0.61, 0.96);\n}\n.bio.intersecting[_ngcontent-%COMP%]   #imageWrapper[_ngcontent-%COMP%], .bio.intersecting[_ngcontent-%COMP%]   #textWrapper[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateX(0);\n}\n.instruction[_ngcontent-%COMP%] {\n  text-align: center;\n  padding-top: 50px;\n}\n#contact[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 700px;\n  margin: 0;\n  padding: 0;\n}\n#contact[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  padding: 0 10%;\n  margin-top: 2%;\n  opacity: 0.9;\n  display: flex;\n  flex-direction: column;\n}\n#contact[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n#contact[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n#contact[_ngcontent-%COMP%]   .contact-opacity[_ngcontent-%COMP%] {\n  opacity: 0.3;\n  background-image: url('keyboard.jpg');\n  width: 100%;\n  height: 100%;\n  top: 70px;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-size: cover;\n  background-position: center;\n  position: absolute;\n  z-index: -1;\n}\n.alert-danger[_ngcontent-%COMP%] {\n  color: red;\n  text-align: left;\n  padding: 0 0 10px 0;\n  font-weight: bold;\n}\n#thank-you-message[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 5px;\n  margin: 20px 20%;\n  font-weight: 600;\n  border: 2px solid #00abca;\n  padding: 10px;\n  background: white;\n  opacity: 0;\n  transition: opacity 300ms cubic-bezier(0.6, -0.28, 0.735, 0.045);\n}\n#thank-you-message.visible[_ngcontent-%COMP%] {\n  opacity: 0.8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Jvb3Rlci9Qcm9qZWN0cy9Qb3J0Zm9saW8vb2xkLWpha3ViLXdpc25pb3dza2kuZ2l0aHViLmlvL3NyYy9zdHlsZXMvX2JvcmRlci1saW5rLnNjc3MiLCJzcmMvYXBwL2hvbWVwYWdlL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsIi9ob21lL3Jvb3Rlci9Qcm9qZWN0cy9Qb3J0Zm9saW8vb2xkLWpha3ViLXdpc25pb3dza2kuZ2l0aHViLmlvL3NyYy9zdHlsZXMvX2NvbnRlbnQtd3JhcHBlci5zY3NzIiwiL2hvbWUvcm9vdGVyL1Byb2plY3RzL1BvcnRmb2xpby9vbGQtamFrdWItd2lzbmlvd3NraS5naXRodWIuaW8vc3JjL3N0eWxlcy9faGVscGVycy5zY3NzIiwiL2hvbWUvcm9vdGVyL1Byb2plY3RzL1BvcnRmb2xpby9vbGQtamFrdWItd2lzbmlvd3NraS5naXRodWIuaW8vc3JjL3N0eWxlcy9fcGFnZS1oZWFkZXIuc2NzcyIsIi9ob21lL3Jvb3Rlci9Qcm9qZWN0cy9Qb3J0Zm9saW8vb2xkLWpha3ViLXdpc25pb3dza2kuZ2l0aHViLmlvL3NyYy9zdHlsZXMvX2NvbG9ycy5zY3NzIiwiL2hvbWUvcm9vdGVyL1Byb2plY3RzL1BvcnRmb2xpby9vbGQtamFrdWItd2lzbmlvd3NraS5naXRodWIuaW8vc3JjL3N0eWxlcy9fc2VjdGlvbi1oZWFkZXIuc2NzcyIsIi9ob21lL3Jvb3Rlci9Qcm9qZWN0cy9Qb3J0Zm9saW8vb2xkLWpha3ViLXdpc25pb3dza2kuZ2l0aHViLmlvL3NyYy9zdHlsZXMvX3NlY3Rpb24uc2NzcyIsIi9ob21lL3Jvb3Rlci9Qcm9qZWN0cy9Qb3J0Zm9saW8vb2xkLWpha3ViLXdpc25pb3dza2kuZ2l0aHViLmlvL3NyYy9hcHAvaG9tZXBhZ2UvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksa0JBQUE7QUNESjtBREVJO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLG9DQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQ0FBQTtFQUNBLHNCQUFBO0FDQU47QURHSTtFQUVFLHNCQUFBO0FDRk47QURLSTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUNITjtBQ3RCQTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUR5QkY7QUUzQkk7RUFDSSxlQUFBO0FGOEJSO0FFM0JJO0VBQ0ksaUJBQUE7QUY4QlI7QUVuQ0k7RUFDSSxlQUFBO0FGc0NSO0FFbkNJO0VBQ0ksaUJBQUE7QUZzQ1I7QUUzQ0k7RUFDSSxlQUFBO0FGOENSO0FFM0NJO0VBQ0ksaUJBQUE7QUY4Q1I7QUVuREk7RUFDSSxlQUFBO0FGc0RSO0FFbkRJO0VBQ0ksaUJBQUE7QUZzRFI7QUUzREk7RUFDSSxlQUFBO0FGOERSO0FFM0RJO0VBQ0ksaUJBQUE7QUY4RFI7QUVuRUk7RUFDSSxlQUFBO0FGc0VSO0FFbkVJO0VBQ0ksaUJBQUE7QUZzRVI7QUUzRUk7RUFDSSxlQUFBO0FGOEVSO0FFM0VJO0VBQ0ksaUJBQUE7QUY4RVI7QUVuRkk7RUFDSSxlQUFBO0FGc0ZSO0FFbkZJO0VBQ0ksaUJBQUE7QUZzRlI7QUUzRkk7RUFDSSxlQUFBO0FGOEZSO0FFM0ZJO0VBQ0ksaUJBQUE7QUY4RlI7QUVuR0k7RUFDSSxlQUFBO0FGc0dSO0FFbkdJO0VBQ0ksaUJBQUE7QUZzR1I7QUUzR0k7RUFDSSxlQUFBO0FGOEdSO0FFM0dJO0VBQ0ksaUJBQUE7QUY4R1I7QUVuSEk7RUFDSSxlQUFBO0FGc0hSO0FFbkhJO0VBQ0ksaUJBQUE7QUZzSFI7QUUzSEk7RUFDSSxlQUFBO0FGOEhSO0FFM0hJO0VBQ0ksaUJBQUE7QUY4SFI7QUVuSUk7RUFDSSxlQUFBO0FGc0lSO0FFbklJO0VBQ0ksaUJBQUE7QUZzSVI7QUUzSUk7RUFDSSxlQUFBO0FGOElSO0FFM0lJO0VBQ0ksaUJBQUE7QUY4SVI7QUVuSkk7RUFDSSxlQUFBO0FGc0pSO0FFbkpJO0VBQ0ksaUJBQUE7QUZzSlI7QUUzSkk7RUFDSSxlQUFBO0FGOEpSO0FFM0pJO0VBQ0ksaUJBQUE7QUY4SlI7QUVuS0k7RUFDSSxlQUFBO0FGc0tSO0FFbktJO0VBQ0ksaUJBQUE7QUZzS1I7QUUzS0k7RUFDSSxlQUFBO0FGOEtSO0FFM0tJO0VBQ0ksaUJBQUE7QUY4S1I7QUVuTEk7RUFDSSxlQUFBO0FGc0xSO0FFbkxJO0VBQ0ksaUJBQUE7QUZzTFI7QUUzTEk7RUFDSSxlQUFBO0FGOExSO0FFM0xJO0VBQ0ksaUJBQUE7QUY4TFI7QUVuTUk7RUFDSSxlQUFBO0FGc01SO0FFbk1JO0VBQ0ksaUJBQUE7QUZzTVI7QUUzTUk7RUFDSSxlQUFBO0FGOE1SO0FFM01JO0VBQ0ksaUJBQUE7QUY4TVI7QUVuTkk7RUFDSSxlQUFBO0FGc05SO0FFbk5JO0VBQ0ksaUJBQUE7QUZzTlI7QUUzTkk7RUFDSSxlQUFBO0FGOE5SO0FFM05JO0VBQ0ksaUJBQUE7QUY4TlI7QUVuT0k7RUFDSSxlQUFBO0FGc09SO0FFbk9JO0VBQ0ksaUJBQUE7QUZzT1I7QUUzT0k7RUFDSSxlQUFBO0FGOE9SO0FFM09JO0VBQ0ksaUJBQUE7QUY4T1I7QUVuUEk7RUFDSSxlQUFBO0FGc1BSO0FFblBJO0VBQ0ksaUJBQUE7QUZzUFI7QUUzUEk7RUFDSSxlQUFBO0FGOFBSO0FFM1BJO0VBQ0ksaUJBQUE7QUY4UFI7QUVuUUk7RUFDSSxlQUFBO0FGc1FSO0FFblFJO0VBQ0ksaUJBQUE7QUZzUVI7QUUzUUk7RUFDSSxlQUFBO0FGOFFSO0FFM1FJO0VBQ0ksaUJBQUE7QUY4UVI7QUVuUkk7RUFDSSxlQUFBO0FGc1JSO0FFblJJO0VBQ0ksaUJBQUE7QUZzUlI7QUUzUkk7RUFDSSxlQUFBO0FGOFJSO0FFM1JJO0VBQ0ksaUJBQUE7QUY4UlI7QUVuU0k7RUFDSSxlQUFBO0FGc1NSO0FFblNJO0VBQ0ksaUJBQUE7QUZzU1I7QUUzU0k7RUFDSSxlQUFBO0FGOFNSO0FFM1NJO0VBQ0ksaUJBQUE7QUY4U1I7QUVuVEk7RUFDSSxlQUFBO0FGc1RSO0FFblRJO0VBQ0ksaUJBQUE7QUZzVFI7QUUzVEk7RUFDSSxlQUFBO0FGOFRSO0FFM1RJO0VBQ0ksaUJBQUE7QUY4VFI7QUVuVUk7RUFDSSxlQUFBO0FGc1VSO0FFblVJO0VBQ0ksaUJBQUE7QUZzVVI7QUUzVUk7RUFDSSxlQUFBO0FGOFVSO0FFM1VJO0VBQ0ksaUJBQUE7QUY4VVI7QUVuVkk7RUFDSSxlQUFBO0FGc1ZSO0FFblZJO0VBQ0ksaUJBQUE7QUZzVlI7QUUzVkk7RUFDSSxlQUFBO0FGOFZSO0FFM1ZJO0VBQ0ksaUJBQUE7QUY4VlI7QUVuV0k7RUFDSSxlQUFBO0FGc1dSO0FFbldJO0VBQ0ksaUJBQUE7QUZzV1I7QUUzV0k7RUFDSSxlQUFBO0FGOFdSO0FFM1dJO0VBQ0ksaUJBQUE7QUY4V1I7QUVuWEk7RUFDSSxlQUFBO0FGc1hSO0FFblhJO0VBQ0ksaUJBQUE7QUZzWFI7QUUzWEk7RUFDSSxlQUFBO0FGOFhSO0FFM1hJO0VBQ0ksaUJBQUE7QUY4WFI7QUVuWUk7RUFDSSxlQUFBO0FGc1lSO0FFbllJO0VBQ0ksaUJBQUE7QUZzWVI7QUUzWUk7RUFDSSxlQUFBO0FGOFlSO0FFM1lJO0VBQ0ksaUJBQUE7QUY4WVI7QUVuWkk7RUFDSSxlQUFBO0FGc1pSO0FFblpJO0VBQ0ksaUJBQUE7QUZzWlI7QUUzWkk7RUFDSSxlQUFBO0FGOFpSO0FFM1pJO0VBQ0ksaUJBQUE7QUY4WlI7QUVuYUk7RUFDSSxlQUFBO0FGc2FSO0FFbmFJO0VBQ0ksaUJBQUE7QUZzYVI7QUUzYUk7RUFDSSxlQUFBO0FGOGFSO0FFM2FJO0VBQ0ksaUJBQUE7QUY4YVI7QUVuYkk7RUFDSSxlQUFBO0FGc2JSO0FFbmJJO0VBQ0ksaUJBQUE7QUZzYlI7QUUzYkk7RUFDSSxlQUFBO0FGOGJSO0FFM2JJO0VBQ0ksaUJBQUE7QUY4YlI7QUVuY0k7RUFDSSxlQUFBO0FGc2NSO0FFbmNJO0VBQ0ksaUJBQUE7QUZzY1I7QUUzY0k7RUFDSSxlQUFBO0FGOGNSO0FFM2NJO0VBQ0ksaUJBQUE7QUY4Y1I7QUVuZEk7RUFDSSxlQUFBO0FGc2RSO0FFbmRJO0VBQ0ksaUJBQUE7QUZzZFI7QUUzZEk7RUFDSSxlQUFBO0FGOGRSO0FFM2RJO0VBQ0ksaUJBQUE7QUY4ZFI7QUVuZUk7RUFDSSxlQUFBO0FGc2VSO0FFbmVJO0VBQ0ksaUJBQUE7QUZzZVI7QUUzZUk7RUFDSSxlQUFBO0FGOGVSO0FFM2VJO0VBQ0ksaUJBQUE7QUY4ZVI7QUVuZkk7RUFDSSxlQUFBO0FGc2ZSO0FFbmZJO0VBQ0ksaUJBQUE7QUZzZlI7QUUzZkk7RUFDSSxlQUFBO0FGOGZSO0FFM2ZJO0VBQ0ksaUJBQUE7QUY4ZlI7QUVuZ0JJO0VBQ0ksZUFBQTtBRnNnQlI7QUVuZ0JJO0VBQ0ksaUJBQUE7QUZzZ0JSO0FFM2dCSTtFQUNJLGVBQUE7QUY4Z0JSO0FFM2dCSTtFQUNJLGlCQUFBO0FGOGdCUjtBRW5oQkk7RUFDSSxlQUFBO0FGc2hCUjtBRW5oQkk7RUFDSSxpQkFBQTtBRnNoQlI7QUUzaEJJO0VBQ0ksZUFBQTtBRjhoQlI7QUUzaEJJO0VBQ0ksaUJBQUE7QUY4aEJSO0FFbmlCSTtFQUNJLGVBQUE7QUZzaUJSO0FFbmlCSTtFQUNJLGlCQUFBO0FGc2lCUjtBRTNpQkk7RUFDSSxlQUFBO0FGOGlCUjtBRTNpQkk7RUFDSSxpQkFBQTtBRjhpQlI7QUVuakJJO0VBQ0ksZUFBQTtBRnNqQlI7QUVuakJJO0VBQ0ksaUJBQUE7QUZzakJSO0FFM2pCSTtFQUNJLGVBQUE7QUY4akJSO0FFM2pCSTtFQUNJLGlCQUFBO0FGOGpCUjtBRW5rQkk7RUFDSSxlQUFBO0FGc2tCUjtBRW5rQkk7RUFDSSxpQkFBQTtBRnNrQlI7QUUza0JJO0VBQ0ksZUFBQTtBRjhrQlI7QUUza0JJO0VBQ0ksaUJBQUE7QUY4a0JSO0FFbmxCSTtFQUNJLGVBQUE7QUZzbEJSO0FFbmxCSTtFQUNJLGlCQUFBO0FGc2xCUjtBRTNsQkk7RUFDSSxlQUFBO0FGOGxCUjtBRTNsQkk7RUFDSSxpQkFBQTtBRjhsQlI7QUVubUJJO0VBQ0ksZUFBQTtBRnNtQlI7QUVubUJJO0VBQ0ksaUJBQUE7QUZzbUJSO0FFM21CSTtFQUNJLGVBQUE7QUY4bUJSO0FFM21CSTtFQUNJLGlCQUFBO0FGOG1CUjtBR2xuQkE7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7RUFDQSxtQkNQRztFRFFILFVBQUE7RUFDQSxXQUFBO0FIcW5CSjtBR25uQkk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBSHFuQk47QUdwbkJNO0VBUkY7SUFTSSxhQUFBO0VIdW5CTjtBQUNGO0FHcG5CSTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLHlCQzlCQztFRCtCRCxhQUFBO0VBQ0EsWUFBQTtFQUNBLDJDQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBSHNuQk47QUdwbkJNO0VBQ0UsYUFBQTtBSHNuQlI7QUdubkJNO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FIcW5CUjtBR25uQlE7RUFDRSxlQUFBO0FIcW5CVjtBR25uQlU7RUFDRSxtQkNqREg7QUpzcUJUO0FHcG5CWTtFQUNFLGNDckRQO0FKMnFCUDtBR2xuQlU7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FIb25CWjtBRy9tQk07RUF6Q0Y7SUEwQ0ksYUFBQTtFSGtuQk47QUFDRjtBRy9tQkk7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FIaW5CTjtBRy9tQk07RUFDRSxxQkFBQTtFQUNBLFVBQUE7QUhpbkJSO0FHL21CUTtFQUNFLGtCQUFBO0FIaW5CVjtBR2huQlU7RUFDRSxZQUFBO0FIa25CWjtBRzdtQk07RUFsQkY7SUFtQkksYUFBQTtFSGduQk47QUFDRjtBSzFzQkE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FMNnNCSjtBSzNzQkk7RUFFRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxNQUFBO0FMNHNCTjtBS3pzQkk7RUFDRSxXQUFBO0VBQ0EsdUJBQUE7QUwyc0JOO0FLeHNCSTtFQUNFLFdBQUE7RUFDQSx5QkQvQkM7QUp5dUJQO0FNenVCQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBTjR1Qko7QU0xdUJJO0VBQ0UsY0FBQTtFQUNBLGNBQUE7QU40dUJOO0FNMXVCSTtFQUNFLGVBQUE7QU40dUJOO0FPbnZCQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBUHN2QkY7QU9wdkJFO0VBQ0UsWUFBQTtFQUNBLG1DQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0FQc3ZCSjtBT252QkU7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBUHF2Qko7QU9sdkJFO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FQb3ZCSjtBT2p2QkU7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FQbXZCSjtBT2p2Qkk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBUG12Qk47QU9odkJJO0VBQ0UscUJBQUE7QVBrdkJOO0FPOXVCRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FQZ3ZCSjtBTzV1QkE7RUFDRSxlQUFBO0FQK3VCRjtBTzd1QkU7RUFDRSxVQUFBO0VBQ0EsNkJBQUE7RUFDQSw4R0FBQTtBUCt1Qko7QU83dUJJO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QVArdUJOO0FPM3VCRTtFQUNFLFVBQUE7RUFDQSw0QkFBQTtFQUNBLDhHQUFBO0FQNnVCSjtBT3h1Qkk7O0VBRUUsVUFBQTtFQUNBLHdCQUFBO0FQMHVCTjtBT3J1QkE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0FQd3VCRjtBT3J1QkE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QVB3dUJGO0FPdnVCRTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBUHl1Qko7QU92dUJJO0VBQ0UsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QVB5dUJOO0FPdnVCSTtFQUNFLG1CQUFBO0FQeXVCTjtBT3J1QkU7RUFDRSxZQUFBO0VBQ0EscUNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBUHV1Qko7QU9udUJBO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBUHN1QkY7QU9udUJBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxnRUFBQTtBUHN1QkY7QU9wdUJFO0VBQ0UsWUFBQTtBUHN1QkoiLCJmaWxlIjoic3JjL2FwcC9ob21lcGFnZS9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuL2NvbG9ycyc7XG5cbi5ib3JkZXItbGluayB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICY6OmJlZm9yZSB7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAtMTBweDtcbiAgICAgIGJvdHRvbTogLTEwcHg7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gZWFzZS1vdXQgMjUwbXM7XG4gICAgICBib3JkZXItdG9wOiAycHggc29saWQgJGxpZ2h0LWdyZXk7XG4gICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJGxpZ2h0LWdyZXk7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDAsIDEpO1xuICAgIH1cbiAgXG4gICAgJjpob3Zlcjo6YmVmb3JlLFxuICAgICY6Zm9jdXM6OmJlZm9yZSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xuICAgIH1cbiAgXG4gICAgJjpmb2N1cyB7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIH1cbiAgfSIsIi5ib3JkZXItbGluayB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5ib3JkZXItbGluazo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0xMHB4O1xuICBib3R0b206IC0xMHB4O1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIGVhc2Utb3V0IDI1MG1zO1xuICBib3JkZXItdG9wOiAycHggc29saWQgIzQ3NDUwNztcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM0NzQ1MDc7XG4gIHRyYW5zZm9ybTogc2NhbGUoMCwgMSk7XG59XG4uYm9yZGVyLWxpbms6aG92ZXI6OmJlZm9yZSwgLmJvcmRlci1saW5rOmZvY3VzOjpiZWZvcmUge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xufVxuLmJvcmRlci1saW5rOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5jb250ZW50LXdyYXBwZXIge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMDtcbiAgbWluLWhlaWdodDogMTAwdmg7XG59XG5cbi5mcy0xNiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmxoLTE2IHtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG59XG5cbi5mcy0xNyB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cblxuLmxoLTE3IHtcbiAgbGluZS1oZWlnaHQ6IDE3cHg7XG59XG5cbi5mcy0xOCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmxoLTE4IHtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG59XG5cbi5mcy0xOSB7XG4gIGZvbnQtc2l6ZTogMTlweDtcbn1cblxuLmxoLTE5IHtcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XG59XG5cbi5mcy0yMCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmxoLTIwIHtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG5cbi5mcy0yMSB7XG4gIGZvbnQtc2l6ZTogMjFweDtcbn1cblxuLmxoLTIxIHtcbiAgbGluZS1oZWlnaHQ6IDIxcHg7XG59XG5cbi5mcy0yMiB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cblxuLmxoLTIyIHtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG59XG5cbi5mcy0yMyB7XG4gIGZvbnQtc2l6ZTogMjNweDtcbn1cblxuLmxoLTIzIHtcbiAgbGluZS1oZWlnaHQ6IDIzcHg7XG59XG5cbi5mcy0yNCB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuLmxoLTI0IHtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG59XG5cbi5mcy0yNSB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuLmxoLTI1IHtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG59XG5cbi5mcy0yNiB7XG4gIGZvbnQtc2l6ZTogMjZweDtcbn1cblxuLmxoLTI2IHtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbi5mcy0yNyB7XG4gIGZvbnQtc2l6ZTogMjdweDtcbn1cblxuLmxoLTI3IHtcbiAgbGluZS1oZWlnaHQ6IDI3cHg7XG59XG5cbi5mcy0yOCB7XG4gIGZvbnQtc2l6ZTogMjhweDtcbn1cblxuLmxoLTI4IHtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG59XG5cbi5mcy0yOSB7XG4gIGZvbnQtc2l6ZTogMjlweDtcbn1cblxuLmxoLTI5IHtcbiAgbGluZS1oZWlnaHQ6IDI5cHg7XG59XG5cbi5mcy0zMCB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuLmxoLTMwIHtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG59XG5cbi5mcy0zMSB7XG4gIGZvbnQtc2l6ZTogMzFweDtcbn1cblxuLmxoLTMxIHtcbiAgbGluZS1oZWlnaHQ6IDMxcHg7XG59XG5cbi5mcy0zMiB7XG4gIGZvbnQtc2l6ZTogMzJweDtcbn1cblxuLmxoLTMyIHtcbiAgbGluZS1oZWlnaHQ6IDMycHg7XG59XG5cbi5mcy0zMyB7XG4gIGZvbnQtc2l6ZTogMzNweDtcbn1cblxuLmxoLTMzIHtcbiAgbGluZS1oZWlnaHQ6IDMzcHg7XG59XG5cbi5mcy0zNCB7XG4gIGZvbnQtc2l6ZTogMzRweDtcbn1cblxuLmxoLTM0IHtcbiAgbGluZS1oZWlnaHQ6IDM0cHg7XG59XG5cbi5mcy0zNSB7XG4gIGZvbnQtc2l6ZTogMzVweDtcbn1cblxuLmxoLTM1IHtcbiAgbGluZS1oZWlnaHQ6IDM1cHg7XG59XG5cbi5mcy0zNiB7XG4gIGZvbnQtc2l6ZTogMzZweDtcbn1cblxuLmxoLTM2IHtcbiAgbGluZS1oZWlnaHQ6IDM2cHg7XG59XG5cbi5mcy0zNyB7XG4gIGZvbnQtc2l6ZTogMzdweDtcbn1cblxuLmxoLTM3IHtcbiAgbGluZS1oZWlnaHQ6IDM3cHg7XG59XG5cbi5mcy0zOCB7XG4gIGZvbnQtc2l6ZTogMzhweDtcbn1cblxuLmxoLTM4IHtcbiAgbGluZS1oZWlnaHQ6IDM4cHg7XG59XG5cbi5mcy0zOSB7XG4gIGZvbnQtc2l6ZTogMzlweDtcbn1cblxuLmxoLTM5IHtcbiAgbGluZS1oZWlnaHQ6IDM5cHg7XG59XG5cbi5mcy00MCB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbn1cblxuLmxoLTQwIHtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG59XG5cbi5mcy00MSB7XG4gIGZvbnQtc2l6ZTogNDFweDtcbn1cblxuLmxoLTQxIHtcbiAgbGluZS1oZWlnaHQ6IDQxcHg7XG59XG5cbi5mcy00MiB7XG4gIGZvbnQtc2l6ZTogNDJweDtcbn1cblxuLmxoLTQyIHtcbiAgbGluZS1oZWlnaHQ6IDQycHg7XG59XG5cbi5mcy00MyB7XG4gIGZvbnQtc2l6ZTogNDNweDtcbn1cblxuLmxoLTQzIHtcbiAgbGluZS1oZWlnaHQ6IDQzcHg7XG59XG5cbi5mcy00NCB7XG4gIGZvbnQtc2l6ZTogNDRweDtcbn1cblxuLmxoLTQ0IHtcbiAgbGluZS1oZWlnaHQ6IDQ0cHg7XG59XG5cbi5mcy00NSB7XG4gIGZvbnQtc2l6ZTogNDVweDtcbn1cblxuLmxoLTQ1IHtcbiAgbGluZS1oZWlnaHQ6IDQ1cHg7XG59XG5cbi5mcy00NiB7XG4gIGZvbnQtc2l6ZTogNDZweDtcbn1cblxuLmxoLTQ2IHtcbiAgbGluZS1oZWlnaHQ6IDQ2cHg7XG59XG5cbi5mcy00NyB7XG4gIGZvbnQtc2l6ZTogNDdweDtcbn1cblxuLmxoLTQ3IHtcbiAgbGluZS1oZWlnaHQ6IDQ3cHg7XG59XG5cbi5mcy00OCB7XG4gIGZvbnQtc2l6ZTogNDhweDtcbn1cblxuLmxoLTQ4IHtcbiAgbGluZS1oZWlnaHQ6IDQ4cHg7XG59XG5cbi5mcy00OSB7XG4gIGZvbnQtc2l6ZTogNDlweDtcbn1cblxuLmxoLTQ5IHtcbiAgbGluZS1oZWlnaHQ6IDQ5cHg7XG59XG5cbi5mcy01MCB7XG4gIGZvbnQtc2l6ZTogNTBweDtcbn1cblxuLmxoLTUwIHtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG59XG5cbi5mcy01MSB7XG4gIGZvbnQtc2l6ZTogNTFweDtcbn1cblxuLmxoLTUxIHtcbiAgbGluZS1oZWlnaHQ6IDUxcHg7XG59XG5cbi5mcy01MiB7XG4gIGZvbnQtc2l6ZTogNTJweDtcbn1cblxuLmxoLTUyIHtcbiAgbGluZS1oZWlnaHQ6IDUycHg7XG59XG5cbi5mcy01MyB7XG4gIGZvbnQtc2l6ZTogNTNweDtcbn1cblxuLmxoLTUzIHtcbiAgbGluZS1oZWlnaHQ6IDUzcHg7XG59XG5cbi5mcy01NCB7XG4gIGZvbnQtc2l6ZTogNTRweDtcbn1cblxuLmxoLTU0IHtcbiAgbGluZS1oZWlnaHQ6IDU0cHg7XG59XG5cbi5mcy01NSB7XG4gIGZvbnQtc2l6ZTogNTVweDtcbn1cblxuLmxoLTU1IHtcbiAgbGluZS1oZWlnaHQ6IDU1cHg7XG59XG5cbi5mcy01NiB7XG4gIGZvbnQtc2l6ZTogNTZweDtcbn1cblxuLmxoLTU2IHtcbiAgbGluZS1oZWlnaHQ6IDU2cHg7XG59XG5cbi5mcy01NyB7XG4gIGZvbnQtc2l6ZTogNTdweDtcbn1cblxuLmxoLTU3IHtcbiAgbGluZS1oZWlnaHQ6IDU3cHg7XG59XG5cbi5mcy01OCB7XG4gIGZvbnQtc2l6ZTogNThweDtcbn1cblxuLmxoLTU4IHtcbiAgbGluZS1oZWlnaHQ6IDU4cHg7XG59XG5cbi5mcy01OSB7XG4gIGZvbnQtc2l6ZTogNTlweDtcbn1cblxuLmxoLTU5IHtcbiAgbGluZS1oZWlnaHQ6IDU5cHg7XG59XG5cbi5mcy02MCB7XG4gIGZvbnQtc2l6ZTogNjBweDtcbn1cblxuLmxoLTYwIHtcbiAgbGluZS1oZWlnaHQ6IDYwcHg7XG59XG5cbi5mcy02MSB7XG4gIGZvbnQtc2l6ZTogNjFweDtcbn1cblxuLmxoLTYxIHtcbiAgbGluZS1oZWlnaHQ6IDYxcHg7XG59XG5cbi5mcy02MiB7XG4gIGZvbnQtc2l6ZTogNjJweDtcbn1cblxuLmxoLTYyIHtcbiAgbGluZS1oZWlnaHQ6IDYycHg7XG59XG5cbi5mcy02MyB7XG4gIGZvbnQtc2l6ZTogNjNweDtcbn1cblxuLmxoLTYzIHtcbiAgbGluZS1oZWlnaHQ6IDYzcHg7XG59XG5cbi5mcy02NCB7XG4gIGZvbnQtc2l6ZTogNjRweDtcbn1cblxuLmxoLTY0IHtcbiAgbGluZS1oZWlnaHQ6IDY0cHg7XG59XG5cbi5mcy02NSB7XG4gIGZvbnQtc2l6ZTogNjVweDtcbn1cblxuLmxoLTY1IHtcbiAgbGluZS1oZWlnaHQ6IDY1cHg7XG59XG5cbi5mcy02NiB7XG4gIGZvbnQtc2l6ZTogNjZweDtcbn1cblxuLmxoLTY2IHtcbiAgbGluZS1oZWlnaHQ6IDY2cHg7XG59XG5cbi5mcy02NyB7XG4gIGZvbnQtc2l6ZTogNjdweDtcbn1cblxuLmxoLTY3IHtcbiAgbGluZS1oZWlnaHQ6IDY3cHg7XG59XG5cbi5mcy02OCB7XG4gIGZvbnQtc2l6ZTogNjhweDtcbn1cblxuLmxoLTY4IHtcbiAgbGluZS1oZWlnaHQ6IDY4cHg7XG59XG5cbi5mcy02OSB7XG4gIGZvbnQtc2l6ZTogNjlweDtcbn1cblxuLmxoLTY5IHtcbiAgbGluZS1oZWlnaHQ6IDY5cHg7XG59XG5cbi5mcy03MCB7XG4gIGZvbnQtc2l6ZTogNzBweDtcbn1cblxuLmxoLTcwIHtcbiAgbGluZS1oZWlnaHQ6IDcwcHg7XG59XG5cbi5mcy03MSB7XG4gIGZvbnQtc2l6ZTogNzFweDtcbn1cblxuLmxoLTcxIHtcbiAgbGluZS1oZWlnaHQ6IDcxcHg7XG59XG5cbi5mcy03MiB7XG4gIGZvbnQtc2l6ZTogNzJweDtcbn1cblxuLmxoLTcyIHtcbiAgbGluZS1oZWlnaHQ6IDcycHg7XG59XG5cbi5mcy03MyB7XG4gIGZvbnQtc2l6ZTogNzNweDtcbn1cblxuLmxoLTczIHtcbiAgbGluZS1oZWlnaHQ6IDczcHg7XG59XG5cbi5mcy03NCB7XG4gIGZvbnQtc2l6ZTogNzRweDtcbn1cblxuLmxoLTc0IHtcbiAgbGluZS1oZWlnaHQ6IDc0cHg7XG59XG5cbi5mcy03NSB7XG4gIGZvbnQtc2l6ZTogNzVweDtcbn1cblxuLmxoLTc1IHtcbiAgbGluZS1oZWlnaHQ6IDc1cHg7XG59XG5cbi5mcy03NiB7XG4gIGZvbnQtc2l6ZTogNzZweDtcbn1cblxuLmxoLTc2IHtcbiAgbGluZS1oZWlnaHQ6IDc2cHg7XG59XG5cbi5mcy03NyB7XG4gIGZvbnQtc2l6ZTogNzdweDtcbn1cblxuLmxoLTc3IHtcbiAgbGluZS1oZWlnaHQ6IDc3cHg7XG59XG5cbi5mcy03OCB7XG4gIGZvbnQtc2l6ZTogNzhweDtcbn1cblxuLmxoLTc4IHtcbiAgbGluZS1oZWlnaHQ6IDc4cHg7XG59XG5cbi5mcy03OSB7XG4gIGZvbnQtc2l6ZTogNzlweDtcbn1cblxuLmxoLTc5IHtcbiAgbGluZS1oZWlnaHQ6IDc5cHg7XG59XG5cbi5mcy04MCB7XG4gIGZvbnQtc2l6ZTogODBweDtcbn1cblxuLmxoLTgwIHtcbiAgbGluZS1oZWlnaHQ6IDgwcHg7XG59XG5cbi5mcy04MSB7XG4gIGZvbnQtc2l6ZTogODFweDtcbn1cblxuLmxoLTgxIHtcbiAgbGluZS1oZWlnaHQ6IDgxcHg7XG59XG5cbi5mcy04MiB7XG4gIGZvbnQtc2l6ZTogODJweDtcbn1cblxuLmxoLTgyIHtcbiAgbGluZS1oZWlnaHQ6IDgycHg7XG59XG5cbi5mcy04MyB7XG4gIGZvbnQtc2l6ZTogODNweDtcbn1cblxuLmxoLTgzIHtcbiAgbGluZS1oZWlnaHQ6IDgzcHg7XG59XG5cbi5mcy04NCB7XG4gIGZvbnQtc2l6ZTogODRweDtcbn1cblxuLmxoLTg0IHtcbiAgbGluZS1oZWlnaHQ6IDg0cHg7XG59XG5cbi5mcy04NSB7XG4gIGZvbnQtc2l6ZTogODVweDtcbn1cblxuLmxoLTg1IHtcbiAgbGluZS1oZWlnaHQ6IDg1cHg7XG59XG5cbi5mcy04NiB7XG4gIGZvbnQtc2l6ZTogODZweDtcbn1cblxuLmxoLTg2IHtcbiAgbGluZS1oZWlnaHQ6IDg2cHg7XG59XG5cbi5mcy04NyB7XG4gIGZvbnQtc2l6ZTogODdweDtcbn1cblxuLmxoLTg3IHtcbiAgbGluZS1oZWlnaHQ6IDg3cHg7XG59XG5cbi5mcy04OCB7XG4gIGZvbnQtc2l6ZTogODhweDtcbn1cblxuLmxoLTg4IHtcbiAgbGluZS1oZWlnaHQ6IDg4cHg7XG59XG5cbi5mcy04OSB7XG4gIGZvbnQtc2l6ZTogODlweDtcbn1cblxuLmxoLTg5IHtcbiAgbGluZS1oZWlnaHQ6IDg5cHg7XG59XG5cbi5mcy05MCB7XG4gIGZvbnQtc2l6ZTogOTBweDtcbn1cblxuLmxoLTkwIHtcbiAgbGluZS1oZWlnaHQ6IDkwcHg7XG59XG5cbi5wYWdlLWhlYWRlciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIG9wYWNpdHk6IDAuODtcbiAgYmFja2dyb3VuZDogIzAwYWJjYTtcbiAgei1pbmRleDogMTtcbiAgd2lkdGg6IDEwMCU7XG59XG4ucGFnZS1oZWFkZXIgLmhhbWJ1cmdlci1tZW51IHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDEwcHg7XG4gIHJpZ2h0OiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY1MHB4KSB7XG4gIC5wYWdlLWhlYWRlciAuaGFtYnVyZ2VyLW1lbnUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbi5wYWdlLWhlYWRlciAubmF2aWdhdGlvbi1zbWFsbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGFiY2E7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAyNTBweDtcbiAgYm94LXNoYWRvdzogMCA4cHggMTZweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgei1pbmRleDogMTtcbiAgb3BhY2l0eTogMC45OTtcbiAgdHJhbnNpdGlvbjogcmlnaHQgMC41cyBlYXNlLWluO1xufVxuLnBhZ2UtaGVhZGVyIC5uYXZpZ2F0aW9uLXNtYWxsLmNvbGxhcHNlZCB7XG4gIHJpZ2h0OiAtMjUwcHg7XG59XG4ucGFnZS1oZWFkZXIgLm5hdmlnYXRpb24tc21hbGwgdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiA2MHB4IDAgMCAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLnBhZ2UtaGVhZGVyIC5uYXZpZ2F0aW9uLXNtYWxsIHVsIGxpIHtcbiAgZm9udC1zaXplOiAxMjAlO1xufVxuLnBhZ2UtaGVhZGVyIC5uYXZpZ2F0aW9uLXNtYWxsIHVsIGxpOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2Y5Zjg3MTtcbn1cbi5wYWdlLWhlYWRlciAubmF2aWdhdGlvbi1zbWFsbCB1bCBsaTpob3ZlciBhIHtcbiAgY29sb3I6ICMwMGFiY2E7XG59XG4ucGFnZS1oZWFkZXIgLm5hdmlnYXRpb24tc21hbGwgdWwgbGkgYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDE1cHggNXB4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NTBweCkge1xuICAucGFnZS1oZWFkZXIgLm5hdmlnYXRpb24tc21hbGwge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbi5wYWdlLWhlYWRlciAubmF2aWdhdGlvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAzMHB4IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4ucGFnZS1oZWFkZXIgLm5hdmlnYXRpb24gbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAzMCU7XG59XG4ucGFnZS1oZWFkZXIgLm5hdmlnYXRpb24gbGkgYSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5wYWdlLWhlYWRlciAubmF2aWdhdGlvbiBsaSBhOmhvdmVyIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xuICAucGFnZS1oZWFkZXIgLm5hdmlnYXRpb24ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuLnNlY3Rpb24taGVhZGVyIHtcbiAgY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwO1xuICBoZWlnaHQ6IDEwMHB4O1xuICBsaW5lLWhlaWdodDogMTAwcHg7XG4gIGZvbnQtc2l6ZTogMzRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uc2VjdGlvbi1oZWFkZXI6OmFmdGVyLCAuc2VjdGlvbi1oZWFkZXI6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogMDtcbn1cbi5zZWN0aW9uLWhlYWRlcjo6YmVmb3JlIHtcbiAgei1pbmRleDogLTI7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLnNlY3Rpb24taGVhZGVyOjphZnRlciB7XG4gIHotaW5kZXg6IC0xO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhYmNhO1xufVxuXG5zZWN0aW9uIHtcbiAgY2xlYXI6IGJvdGg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbnNlY3Rpb24gLmNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogOTAlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbnNlY3Rpb24gaDMge1xuICBmb250LXNpemU6IDMwcHg7XG59XG5cbi5iYW5uZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG4uYmFubmVyIC5iYW5uZXItYmctb3BhY2l0eSB7XG4gIG9wYWNpdHk6IDAuMztcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwifnNyYy9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmQvYmFubmVyLnBuZ1wiKTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4uYmFubmVyIC5teS1uYW1lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogNTB2aCA1MHB4O1xuICBib3R0b206IDE0MHB4O1xufVxuLmJhbm5lciAubXktcGxhY2VzIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDAgYXV0bztcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cbi5iYW5uZXIgLnNob3J0Y3V0LWltZyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDIwcHg7XG4gIGhlaWdodDogNjJweDtcbiAgd2lkdGg6IDYycHg7XG59XG4uYmFubmVyIC5zaG9ydGN1dC1pbWcgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cbi5iYW5uZXIgLnNob3J0Y3V0LWltZzpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn1cbi5iYW5uZXIgLm15LXBsYWNlcy1jZW50ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvdHRvbTogNjBweDtcbn1cblxuLmJpbyB7XG4gIHBhZGRpbmc6IDUwcHggMDtcbn1cbi5iaW8gI2ltYWdlV3JhcHBlciB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMzAwcHgpO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDVzIGN1YmljLWJlemllcigwLjE3LCAwLjY3LCAwLjYxLCAwLjk2KSwgdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLjE3LCAwLjY3LCAwLjYxLCAwLjk2KTtcbn1cbi5iaW8gI2ltYWdlV3JhcHBlciAucHJvZmlsZS1waWN0dXJlIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbi1yaWdodDogMWVtO1xuICBib3JkZXI6IDdweCBzb2xpZCAjMDBhYmNhO1xufVxuLmJpbyAjdGV4dFdyYXBwZXIge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNjAwcHgpO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDVzIGN1YmljLWJlemllcigwLjE3LCAwLjY3LCAwLjYxLCAwLjk2KSwgdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLjE3LCAwLjY3LCAwLjYxLCAwLjk2KTtcbn1cbi5iaW8uaW50ZXJzZWN0aW5nICNpbWFnZVdyYXBwZXIsXG4uYmlvLmludGVyc2VjdGluZyAjdGV4dFdyYXBwZXIge1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG59XG5cbi5pbnN0cnVjdGlvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDUwcHg7XG59XG5cbiNjb250YWN0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA3MDBweDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuI2NvbnRhY3QgZm9ybSB7XG4gIHBhZGRpbmc6IDAgMTAlO1xuICBtYXJnaW4tdG9wOiAyJTtcbiAgb3BhY2l0eTogMC45O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuI2NvbnRhY3QgZm9ybSBsYWJlbCB7XG4gIGJvcmRlcjogMDtcbiAgY2xpcDogcmVjdCgwIDAgMCAwKTtcbiAgaGVpZ2h0OiAxcHg7XG4gIG1hcmdpbjogLTFweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMXB4O1xufVxuI2NvbnRhY3QgZm9ybSAuZm9ybS1jb250cm9sIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbiNjb250YWN0IC5jb250YWN0LW9wYWNpdHkge1xuICBvcGFjaXR5OiAwLjM7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIn5zcmMvYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kL2tleWJvYXJkLmpwZ1wiKTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdG9wOiA3MHB4O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogLTE7XG59XG5cbi5hbGVydC1kYW5nZXIge1xuICBjb2xvcjogcmVkO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nOiAwIDAgMTBweCAwO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuI3RoYW5rLXlvdS1tZXNzYWdlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbjogMjBweCAyMCU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMGFiY2E7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGN1YmljLWJlemllcigwLjYsIC0wLjI4LCAwLjczNSwgMC4wNDUpO1xufVxuI3RoYW5rLXlvdS1tZXNzYWdlLnZpc2libGUge1xuICBvcGFjaXR5OiAwLjg7XG59IiwiLmNvbnRlbnQtd3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbn0iLCJAZm9yICRpIGZyb20gMTYgdGhyb3VnaCA5MCB7XG4gICAgLmZzLSN7JGl9IHtcbiAgICAgICAgZm9udC1zaXplOiAkaSAqIDFweDtcbiAgICB9XG5cbiAgICAubGgtI3skaX0ge1xuICAgICAgICBsaW5lLWhlaWdodDogJGkgKiAxcHg7XG4gICAgfVxufSIsIkBpbXBvcnQgXCIuL3ZhcmlhYmxlc1wiO1xuXG4ucGFnZS1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIG9wYWNpdHk6IDAuODtcbiAgICBiYWNrZ3JvdW5kOiAkYmx1ZTtcbiAgICB6LWluZGV4OiAxO1xuICAgIHdpZHRoOiAxMDAlO1xuICBcbiAgICAuaGFtYnVyZ2VyLW1lbnUge1xuICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICB0b3A6IDEwcHg7XG4gICAgICByaWdodDogMTBweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY1MHB4KSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuICBcbiAgICAubmF2aWdhdGlvbi1zbWFsbCB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICB0b3A6IDA7XG4gICAgICBib3R0b206IDA7XG4gICAgICByaWdodDogMDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibHVlO1xuICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICB6LWluZGV4OiAxO1xuICAgICAgb3BhY2l0eTogMC45OTtcbiAgICAgIHRyYW5zaXRpb246IHJpZ2h0IC41cyBlYXNlLWluO1xuXG4gICAgICAmLmNvbGxhcHNlZCB7XG4gICAgICAgIHJpZ2h0OiAtMjUwcHg7XG4gICAgICB9XG4gIFxuICAgICAgdWwge1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICBwYWRkaW5nOiA2MHB4IDAgMCAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICBcbiAgICAgICAgbGkge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTIwJTtcbiAgXG4gICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkeWVsbG93O1xuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgIGNvbG9yOiAkYmx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gIFxuICAgICAgICAgIGEge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDVweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY1MHB4KSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuICBcbiAgICAubmF2aWdhdGlvbiB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiAzMHB4IDA7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICBcbiAgICAgIGxpIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB3aWR0aDogMzAlO1xuICBcbiAgICAgICAgYSB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICBcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gIH0iLCIkYmx1ZTogIzAwYWJjYTtcbiRsaWdodC1ncmV5OiByZ2IoNzEsIDY5LCA3KTtcbiR5ZWxsb3c6ICNmOWY4NzE7XG4iLCIuc2VjdGlvbi1oZWFkZXIge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwO1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDEwMHB4O1xuICAgIGZvbnQtc2l6ZTogMzRweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgXG4gICAgJjo6YWZ0ZXIsXG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgdG9wOiAwO1xuICAgIH1cbiAgXG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIHotaW5kZXg6IC0yO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgfVxuICBcbiAgICAmOjphZnRlciB7XG4gICAgICB6LWluZGV4OiAtMTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibHVlO1xuICAgIH1cbiAgfSIsInNlY3Rpb24ge1xuICAgIGNsZWFyOiBib3RoO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgXG4gICAgLmNvbnRhaW5lciB7XG4gICAgICBtYXgtd2lkdGg6IDkwJTtcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIH1cbiAgICBoMyB7XG4gICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgfVxuICB9IiwiQGltcG9ydCBcIn5zcmMvc3R5bGVzL3N0eWxlc1wiO1xuXG4uYmFubmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuXG4gIC5iYW5uZXItYmctb3BhY2l0eSB7XG4gICAgb3BhY2l0eTogMC4zO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgkaW1nX3ByZWZpeCArIFwiYmFja2dyb3VuZC9iYW5uZXIucG5nXCIpO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICB9XG5cbiAgLm15LW5hbWUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDUwdmggNTBweDtcbiAgICBib3R0b206IDE0MHB4O1xuICB9XG5cbiAgLm15LXBsYWNlcyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIH1cblxuICAuc2hvcnRjdXQtaW1nIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbjogMjBweDtcbiAgICBoZWlnaHQ6IDYycHg7XG4gICAgd2lkdGg6IDYycHg7XG5cbiAgICBpbWcge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IGF1dG87XG4gICAgfVxuXG4gICAgJjpob3ZlciB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgfVxuICB9XG5cbiAgLm15LXBsYWNlcy1jZW50ZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYm90dG9tOiA2MHB4O1xuICB9XG59XG5cbi5iaW8ge1xuICBwYWRkaW5nOiA1MHB4IDA7XG5cbiAgI2ltYWdlV3JhcHBlciB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTMwMHB4KTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDVzIGN1YmljLWJlemllcigwLjE3LCAwLjY3LCAwLjYxLCAwLjk2KSxcbiAgICAgIHRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMC4xNywgMC42NywgMC42MSwgMC45Nik7XG4gICAgLnByb2ZpbGUtcGljdHVyZSB7XG4gICAgICB3aWR0aDogMjAwcHg7XG4gICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxZW07XG4gICAgICBib3JkZXI6IDdweCBzb2xpZCAkYmx1ZTtcbiAgICB9XG4gIH1cblxuICAjdGV4dFdyYXBwZXIge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDYwMHB4KTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDVzIGN1YmljLWJlemllcigwLjE3LCAwLjY3LCAwLjYxLCAwLjk2KSxcbiAgICAgIHRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMC4xNywgMC42NywgMC42MSwgMC45Nik7XG4gIH1cblxuICAmLmludGVyc2VjdGluZyB7XG4gICAgI2ltYWdlV3JhcHBlcixcbiAgICAjdGV4dFdyYXBwZXIge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICB9XG4gIH1cbn1cblxuLmluc3RydWN0aW9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogNTBweDtcbn1cblxuI2NvbnRhY3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDcwMHB4O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGZvcm0ge1xuICAgIHBhZGRpbmc6IDAgMTAlO1xuICAgIG1hcmdpbi10b3A6IDIlO1xuICAgIG9wYWNpdHk6IDAuOTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICBsYWJlbCB7XG4gICAgICBib3JkZXI6IDA7XG4gICAgICBjbGlwOiByZWN0KDAgMCAwIDApO1xuICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICBtYXJnaW46IC0xcHg7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHdpZHRoOiAxcHg7XG4gICAgfVxuICAgIC5mb3JtLWNvbnRyb2wge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB9XG4gIH1cblxuICAuY29udGFjdC1vcGFjaXR5IHtcbiAgICBvcGFjaXR5OiAwLjM7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCRpbWdfcHJlZml4ICsgXCJiYWNrZ3JvdW5kL2tleWJvYXJkLmpwZ1wiKTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgdG9wOiA3MHB4O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogLTE7XG4gIH1cbn1cblxuLmFsZXJ0LWRhbmdlciB7XG4gIGNvbG9yOiByZWQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDAgMCAxMHB4IDA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4jdGhhbmsteW91LW1lc3NhZ2Uge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luOiAyMHB4IDIwJTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgYm9yZGVyOiAycHggc29saWQgJGJsdWU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGN1YmljLWJlemllcigwLjYsIC0wLjI4LCAwLjczNSwgMC4wNDUpO1xuXG4gICYudmlzaWJsZSB7XG4gICAgb3BhY2l0eTogMC44O1xuICB9XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-home",
          templateUrl: "./home.component.html",
          styleUrls: ["./home.component.scss"]
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/homepage/projects-overview/projects-overview.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/homepage/projects-overview/projects-overview.component.ts ***!
    \***************************************************************************/

  /*! exports provided: ProjectsOverviewComponent */

  /***/
  function srcAppHomepageProjectsOverviewProjectsOverviewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectsOverviewComponent", function () {
      return ProjectsOverviewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_directives_intersection_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/directives/intersection.directive */
    "./src/app/shared/directives/intersection.directive.ts");

    function ProjectsOverviewComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 31);
      }
    }

    function ProjectsOverviewComponent_div_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 31);
      }
    }

    function ProjectsOverviewComponent_div_36_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 31);
      }
    }

    function ProjectsOverviewComponent_div_51_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 31);
      }
    }

    function ProjectsOverviewComponent_div_66_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 31);
      }
    }

    function ProjectsOverviewComponent_div_81_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 31);
      }
    }

    function ProjectsOverviewComponent_div_96_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 31);
      }
    }

    function ProjectsOverviewComponent_div_111_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 31);
      }
    }

    function ProjectsOverviewComponent_div_126_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 31);
      }
    }

    var _c0 = function _c0() {
      return [0, 1, 2];
    };

    var _c1 = function _c1() {
      return ["projects/home-library"];
    };

    var _c2 = function _c2() {
      return ["projects/planets"];
    };

    var _c3 = function _c3() {
      return ["projects/AKN-web-app"];
    };

    var _c4 = function _c4() {
      return ["projects/AKN-mobile-app"];
    };

    var _c5 = function _c5() {
      return ["projects/lego-app"];
    };

    var _c6 = function _c6() {
      return ["projects/mr-dumpling"];
    };

    var _c7 = function _c7() {
      return ["projects/climate-camp"];
    };

    var _c8 = function _c8() {
      return ["projects/climate-camp-website"];
    };

    var ProjectsOverviewComponent =
    /*#__PURE__*/
    function () {
      function ProjectsOverviewComponent(renderer) {
        _classCallCheck(this, ProjectsOverviewComponent);

        this.renderer = renderer;
        this.projectBackgrounds = {
          homeLibrary: 'assets/images/home-library/home-library-icon.png',
          planets: 'assets/images/planets/list-view.png',
          aknWebApp: 'assets/images/AKN-web-app/modify-account.png',
          aknMobileApp: 'assets/images/AKN-mobile-app/login-icon.png',
          RPNcalc: 'assets/images/RPN-calc/basic.png',
          legoApp: 'assets/images/lego-app/project-view.png',
          mrDumpling: 'assets/images/mr-dumpling/menu.png',
          climateCamp: 'assets/images/climate-camp/menu.png',
          climateCampWebsite: 'assets/images/icons/climate-camp-logo.png'
        };
      }

      _createClass(ProjectsOverviewComponent, [{
        key: "handleIntersection",
        value: function handleIntersection(visible, el, project) {
          visible ? this.renderer.addClass(el, "intersecting") : this.renderer.removeClass(el, "intersecting");
          visible && this.renderer.setAttribute(el.querySelector('img'), 'src', this.projectBackgrounds[project]);
        }
      }]);

      return ProjectsOverviewComponent;
    }();

    ProjectsOverviewComponent.ɵfac = function ProjectsOverviewComponent_Factory(t) {
      return new (t || ProjectsOverviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]));
    };

    ProjectsOverviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProjectsOverviewComponent,
      selectors: [["app-projects-overview"]],
      decls: 127,
      vars: 34,
      consts: [[1, "section-header"], [1, "container"], [1, "row", "w-100", "m-0", "sep-row"], ["class", "col", 4, "ngFor", "ngForOf"], [1, "row", "m-0"], [1, "col", "m-0", "p-0"], [1, "row", "w-100", "m-0"], [1, "col-2"], [1, "col-8", "p-0"], ["intersection", "", 1, "project-link", 3, "routerLink", "visibilityChange"], ["homeLibrary", ""], [1, "project-image"], ["alt", "Home library project"], [1, "project-text"], [1, "mb-0", "fs-50"], [1, "text-center", "fs-32"], ["planets", ""], ["alt", "Planets project"], ["aknWebApp", ""], ["alt", "AKN web project"], ["aknMobileApp", ""], ["alt", "AKN mobile project"], [1, "fs-32"], ["legoApp", ""], ["alt", "LEGO project"], ["mrDumpling", ""], ["alt", "Thesis project"], ["climateCamp", ""], ["alt", "Climate camp project"], ["climateCampWebsite", ""], ["alt", "Climate camp website"], [1, "col"]],
      template: function ProjectsOverviewComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Projects");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProjectsOverviewComponent_div_4_Template, 1, 0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 9, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibilityChange", function ProjectsOverviewComponent_Template_a_visibilityChange_10_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51);

            var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);

            return ctx.handleIntersection($event, _r26, "homeLibrary");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Home library");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Angular\xA0SailsJS\xA0MongoDB");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ProjectsOverviewComponent_div_21_Template, 1, 0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 9, 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibilityChange", function ProjectsOverviewComponent_Template_a_visibilityChange_25_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51);

            var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](26);

            return ctx.handleIntersection($event, _r28, "planets");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h3", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Planets");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Angular\xA0CSS3\xA0Bootstrap");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, ProjectsOverviewComponent_div_36_Template, 1, 0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 9, 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibilityChange", function ProjectsOverviewComponent_Template_a_visibilityChange_40_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51);

            var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](41);

            return ctx.handleIntersection($event, _r30, "aknWebApp");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h3", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "AKN webapp");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Angular\xA0SailsJS\xA0MongoDB");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, ProjectsOverviewComponent_div_51_Template, 1, 0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 9, 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibilityChange", function ProjectsOverviewComponent_Template_a_visibilityChange_55_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51);

            var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](56);

            return ctx.handleIntersection($event, _r32, "aknMobileApp");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "h3", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "AKN mobile app");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Ionic2\xA0HTML5\xA0CSS3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, ProjectsOverviewComponent_div_66_Template, 1, 0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "a", 9, 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibilityChange", function ProjectsOverviewComponent_Template_a_visibilityChange_70_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51);

            var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](71);

            return ctx.handleIntersection($event, _r34, "legoApp");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "img", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "h3", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Lego app");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "p", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Android Kotlin SQLite");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](81, ProjectsOverviewComponent_div_81_Template, 1, 0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "a", 9, 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibilityChange", function ProjectsOverviewComponent_Template_a_visibilityChange_85_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51);

            var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](86);

            return ctx.handleIntersection($event, _r36, "mrDumpling");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "img", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "h3", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Mr Dumpling");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "p", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, " Unity\xA0C#\xA0Google\xA0Play ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](96, ProjectsOverviewComponent_div_96_Template, 1, 0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "a", 9, 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibilityChange", function ProjectsOverviewComponent_Template_a_visibilityChange_100_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51);

            var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](101);

            return ctx.handleIntersection($event, _r38, "climateCamp");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "img", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "h3", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Climate Camp Mobile app");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "p", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Flutter Dart Firebase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](111, ProjectsOverviewComponent_div_111_Template, 1, 0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "a", 9, 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibilityChange", function ProjectsOverviewComponent_Template_a_visibilityChange_115_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51);

            var _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](116);

            return ctx.handleIntersection($event, _r40, "climateCampWebsite");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "img", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "h3", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Climate Camp website");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "p", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, " Angular 9 Scully Bootstrap ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](126, ProjectsOverviewComponent_div_126_Template, 1, 0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c3));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](23, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](24, _c4));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](25, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](26, _c5));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](27, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](28, _c6));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](29, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](30, _c7));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](31, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](32, _c8));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](33, _c0));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _shared_directives_intersection_directive__WEBPACK_IMPORTED_MODULE_3__["IntersectionDirective"]],
      styles: [".border-link[_ngcontent-%COMP%] {\n  position: relative;\n}\n.border-link[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: -10px;\n  bottom: -10px;\n  left: 0;\n  right: 0;\n  transition: transform ease-out 250ms;\n  border-top: 2px solid #474507;\n  border-bottom: 2px solid #474507;\n  transform: scale(0, 1);\n}\n.border-link[_ngcontent-%COMP%]:hover::before, .border-link[_ngcontent-%COMP%]:focus::before {\n  transform: scale(1, 1);\n}\n.border-link[_ngcontent-%COMP%]:focus {\n  outline: none;\n  color: black;\n  text-decoration: none;\n}\n.content-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0;\n  min-height: 100vh;\n}\n.fs-16[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.lh-16[_ngcontent-%COMP%] {\n  line-height: 16px;\n}\n.fs-17[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n.lh-17[_ngcontent-%COMP%] {\n  line-height: 17px;\n}\n.fs-18[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.lh-18[_ngcontent-%COMP%] {\n  line-height: 18px;\n}\n.fs-19[_ngcontent-%COMP%] {\n  font-size: 19px;\n}\n.lh-19[_ngcontent-%COMP%] {\n  line-height: 19px;\n}\n.fs-20[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.lh-20[_ngcontent-%COMP%] {\n  line-height: 20px;\n}\n.fs-21[_ngcontent-%COMP%] {\n  font-size: 21px;\n}\n.lh-21[_ngcontent-%COMP%] {\n  line-height: 21px;\n}\n.fs-22[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n.lh-22[_ngcontent-%COMP%] {\n  line-height: 22px;\n}\n.fs-23[_ngcontent-%COMP%] {\n  font-size: 23px;\n}\n.lh-23[_ngcontent-%COMP%] {\n  line-height: 23px;\n}\n.fs-24[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.lh-24[_ngcontent-%COMP%] {\n  line-height: 24px;\n}\n.fs-25[_ngcontent-%COMP%] {\n  font-size: 25px;\n}\n.lh-25[_ngcontent-%COMP%] {\n  line-height: 25px;\n}\n.fs-26[_ngcontent-%COMP%] {\n  font-size: 26px;\n}\n.lh-26[_ngcontent-%COMP%] {\n  line-height: 26px;\n}\n.fs-27[_ngcontent-%COMP%] {\n  font-size: 27px;\n}\n.lh-27[_ngcontent-%COMP%] {\n  line-height: 27px;\n}\n.fs-28[_ngcontent-%COMP%] {\n  font-size: 28px;\n}\n.lh-28[_ngcontent-%COMP%] {\n  line-height: 28px;\n}\n.fs-29[_ngcontent-%COMP%] {\n  font-size: 29px;\n}\n.lh-29[_ngcontent-%COMP%] {\n  line-height: 29px;\n}\n.fs-30[_ngcontent-%COMP%] {\n  font-size: 30px;\n}\n.lh-30[_ngcontent-%COMP%] {\n  line-height: 30px;\n}\n.fs-31[_ngcontent-%COMP%] {\n  font-size: 31px;\n}\n.lh-31[_ngcontent-%COMP%] {\n  line-height: 31px;\n}\n.fs-32[_ngcontent-%COMP%] {\n  font-size: 32px;\n}\n.lh-32[_ngcontent-%COMP%] {\n  line-height: 32px;\n}\n.fs-33[_ngcontent-%COMP%] {\n  font-size: 33px;\n}\n.lh-33[_ngcontent-%COMP%] {\n  line-height: 33px;\n}\n.fs-34[_ngcontent-%COMP%] {\n  font-size: 34px;\n}\n.lh-34[_ngcontent-%COMP%] {\n  line-height: 34px;\n}\n.fs-35[_ngcontent-%COMP%] {\n  font-size: 35px;\n}\n.lh-35[_ngcontent-%COMP%] {\n  line-height: 35px;\n}\n.fs-36[_ngcontent-%COMP%] {\n  font-size: 36px;\n}\n.lh-36[_ngcontent-%COMP%] {\n  line-height: 36px;\n}\n.fs-37[_ngcontent-%COMP%] {\n  font-size: 37px;\n}\n.lh-37[_ngcontent-%COMP%] {\n  line-height: 37px;\n}\n.fs-38[_ngcontent-%COMP%] {\n  font-size: 38px;\n}\n.lh-38[_ngcontent-%COMP%] {\n  line-height: 38px;\n}\n.fs-39[_ngcontent-%COMP%] {\n  font-size: 39px;\n}\n.lh-39[_ngcontent-%COMP%] {\n  line-height: 39px;\n}\n.fs-40[_ngcontent-%COMP%] {\n  font-size: 40px;\n}\n.lh-40[_ngcontent-%COMP%] {\n  line-height: 40px;\n}\n.fs-41[_ngcontent-%COMP%] {\n  font-size: 41px;\n}\n.lh-41[_ngcontent-%COMP%] {\n  line-height: 41px;\n}\n.fs-42[_ngcontent-%COMP%] {\n  font-size: 42px;\n}\n.lh-42[_ngcontent-%COMP%] {\n  line-height: 42px;\n}\n.fs-43[_ngcontent-%COMP%] {\n  font-size: 43px;\n}\n.lh-43[_ngcontent-%COMP%] {\n  line-height: 43px;\n}\n.fs-44[_ngcontent-%COMP%] {\n  font-size: 44px;\n}\n.lh-44[_ngcontent-%COMP%] {\n  line-height: 44px;\n}\n.fs-45[_ngcontent-%COMP%] {\n  font-size: 45px;\n}\n.lh-45[_ngcontent-%COMP%] {\n  line-height: 45px;\n}\n.fs-46[_ngcontent-%COMP%] {\n  font-size: 46px;\n}\n.lh-46[_ngcontent-%COMP%] {\n  line-height: 46px;\n}\n.fs-47[_ngcontent-%COMP%] {\n  font-size: 47px;\n}\n.lh-47[_ngcontent-%COMP%] {\n  line-height: 47px;\n}\n.fs-48[_ngcontent-%COMP%] {\n  font-size: 48px;\n}\n.lh-48[_ngcontent-%COMP%] {\n  line-height: 48px;\n}\n.fs-49[_ngcontent-%COMP%] {\n  font-size: 49px;\n}\n.lh-49[_ngcontent-%COMP%] {\n  line-height: 49px;\n}\n.fs-50[_ngcontent-%COMP%] {\n  font-size: 50px;\n}\n.lh-50[_ngcontent-%COMP%] {\n  line-height: 50px;\n}\n.fs-51[_ngcontent-%COMP%] {\n  font-size: 51px;\n}\n.lh-51[_ngcontent-%COMP%] {\n  line-height: 51px;\n}\n.fs-52[_ngcontent-%COMP%] {\n  font-size: 52px;\n}\n.lh-52[_ngcontent-%COMP%] {\n  line-height: 52px;\n}\n.fs-53[_ngcontent-%COMP%] {\n  font-size: 53px;\n}\n.lh-53[_ngcontent-%COMP%] {\n  line-height: 53px;\n}\n.fs-54[_ngcontent-%COMP%] {\n  font-size: 54px;\n}\n.lh-54[_ngcontent-%COMP%] {\n  line-height: 54px;\n}\n.fs-55[_ngcontent-%COMP%] {\n  font-size: 55px;\n}\n.lh-55[_ngcontent-%COMP%] {\n  line-height: 55px;\n}\n.fs-56[_ngcontent-%COMP%] {\n  font-size: 56px;\n}\n.lh-56[_ngcontent-%COMP%] {\n  line-height: 56px;\n}\n.fs-57[_ngcontent-%COMP%] {\n  font-size: 57px;\n}\n.lh-57[_ngcontent-%COMP%] {\n  line-height: 57px;\n}\n.fs-58[_ngcontent-%COMP%] {\n  font-size: 58px;\n}\n.lh-58[_ngcontent-%COMP%] {\n  line-height: 58px;\n}\n.fs-59[_ngcontent-%COMP%] {\n  font-size: 59px;\n}\n.lh-59[_ngcontent-%COMP%] {\n  line-height: 59px;\n}\n.fs-60[_ngcontent-%COMP%] {\n  font-size: 60px;\n}\n.lh-60[_ngcontent-%COMP%] {\n  line-height: 60px;\n}\n.fs-61[_ngcontent-%COMP%] {\n  font-size: 61px;\n}\n.lh-61[_ngcontent-%COMP%] {\n  line-height: 61px;\n}\n.fs-62[_ngcontent-%COMP%] {\n  font-size: 62px;\n}\n.lh-62[_ngcontent-%COMP%] {\n  line-height: 62px;\n}\n.fs-63[_ngcontent-%COMP%] {\n  font-size: 63px;\n}\n.lh-63[_ngcontent-%COMP%] {\n  line-height: 63px;\n}\n.fs-64[_ngcontent-%COMP%] {\n  font-size: 64px;\n}\n.lh-64[_ngcontent-%COMP%] {\n  line-height: 64px;\n}\n.fs-65[_ngcontent-%COMP%] {\n  font-size: 65px;\n}\n.lh-65[_ngcontent-%COMP%] {\n  line-height: 65px;\n}\n.fs-66[_ngcontent-%COMP%] {\n  font-size: 66px;\n}\n.lh-66[_ngcontent-%COMP%] {\n  line-height: 66px;\n}\n.fs-67[_ngcontent-%COMP%] {\n  font-size: 67px;\n}\n.lh-67[_ngcontent-%COMP%] {\n  line-height: 67px;\n}\n.fs-68[_ngcontent-%COMP%] {\n  font-size: 68px;\n}\n.lh-68[_ngcontent-%COMP%] {\n  line-height: 68px;\n}\n.fs-69[_ngcontent-%COMP%] {\n  font-size: 69px;\n}\n.lh-69[_ngcontent-%COMP%] {\n  line-height: 69px;\n}\n.fs-70[_ngcontent-%COMP%] {\n  font-size: 70px;\n}\n.lh-70[_ngcontent-%COMP%] {\n  line-height: 70px;\n}\n.fs-71[_ngcontent-%COMP%] {\n  font-size: 71px;\n}\n.lh-71[_ngcontent-%COMP%] {\n  line-height: 71px;\n}\n.fs-72[_ngcontent-%COMP%] {\n  font-size: 72px;\n}\n.lh-72[_ngcontent-%COMP%] {\n  line-height: 72px;\n}\n.fs-73[_ngcontent-%COMP%] {\n  font-size: 73px;\n}\n.lh-73[_ngcontent-%COMP%] {\n  line-height: 73px;\n}\n.fs-74[_ngcontent-%COMP%] {\n  font-size: 74px;\n}\n.lh-74[_ngcontent-%COMP%] {\n  line-height: 74px;\n}\n.fs-75[_ngcontent-%COMP%] {\n  font-size: 75px;\n}\n.lh-75[_ngcontent-%COMP%] {\n  line-height: 75px;\n}\n.fs-76[_ngcontent-%COMP%] {\n  font-size: 76px;\n}\n.lh-76[_ngcontent-%COMP%] {\n  line-height: 76px;\n}\n.fs-77[_ngcontent-%COMP%] {\n  font-size: 77px;\n}\n.lh-77[_ngcontent-%COMP%] {\n  line-height: 77px;\n}\n.fs-78[_ngcontent-%COMP%] {\n  font-size: 78px;\n}\n.lh-78[_ngcontent-%COMP%] {\n  line-height: 78px;\n}\n.fs-79[_ngcontent-%COMP%] {\n  font-size: 79px;\n}\n.lh-79[_ngcontent-%COMP%] {\n  line-height: 79px;\n}\n.fs-80[_ngcontent-%COMP%] {\n  font-size: 80px;\n}\n.lh-80[_ngcontent-%COMP%] {\n  line-height: 80px;\n}\n.fs-81[_ngcontent-%COMP%] {\n  font-size: 81px;\n}\n.lh-81[_ngcontent-%COMP%] {\n  line-height: 81px;\n}\n.fs-82[_ngcontent-%COMP%] {\n  font-size: 82px;\n}\n.lh-82[_ngcontent-%COMP%] {\n  line-height: 82px;\n}\n.fs-83[_ngcontent-%COMP%] {\n  font-size: 83px;\n}\n.lh-83[_ngcontent-%COMP%] {\n  line-height: 83px;\n}\n.fs-84[_ngcontent-%COMP%] {\n  font-size: 84px;\n}\n.lh-84[_ngcontent-%COMP%] {\n  line-height: 84px;\n}\n.fs-85[_ngcontent-%COMP%] {\n  font-size: 85px;\n}\n.lh-85[_ngcontent-%COMP%] {\n  line-height: 85px;\n}\n.fs-86[_ngcontent-%COMP%] {\n  font-size: 86px;\n}\n.lh-86[_ngcontent-%COMP%] {\n  line-height: 86px;\n}\n.fs-87[_ngcontent-%COMP%] {\n  font-size: 87px;\n}\n.lh-87[_ngcontent-%COMP%] {\n  line-height: 87px;\n}\n.fs-88[_ngcontent-%COMP%] {\n  font-size: 88px;\n}\n.lh-88[_ngcontent-%COMP%] {\n  line-height: 88px;\n}\n.fs-89[_ngcontent-%COMP%] {\n  font-size: 89px;\n}\n.lh-89[_ngcontent-%COMP%] {\n  line-height: 89px;\n}\n.fs-90[_ngcontent-%COMP%] {\n  font-size: 90px;\n}\n.lh-90[_ngcontent-%COMP%] {\n  line-height: 90px;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: absolute;\n  top: 0;\n  opacity: 0.8;\n  background: #00abca;\n  z-index: 1;\n  width: 100%;\n}\n.page-header[_ngcontent-%COMP%]   .hamburger-menu[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  position: fixed;\n  top: 10px;\n  right: 10px;\n  cursor: pointer;\n  background-size: cover;\n}\n@media only screen and (min-width: 650px) {\n  .page-header[_ngcontent-%COMP%]   .hamburger-menu[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.page-header[_ngcontent-%COMP%]   .navigation-small[_ngcontent-%COMP%] {\n  text-align: center;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  background-color: #00abca;\n  height: 100vh;\n  width: 250px;\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\n  z-index: 1;\n  opacity: 0.99;\n  transition: right 0.5s ease-in;\n}\n.page-header[_ngcontent-%COMP%]   .navigation-small.collapsed[_ngcontent-%COMP%] {\n  right: -250px;\n}\n.page-header[_ngcontent-%COMP%]   .navigation-small[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 60px 0 0 0;\n  margin-bottom: 0;\n}\n.page-header[_ngcontent-%COMP%]   .navigation-small[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 120%;\n}\n.page-header[_ngcontent-%COMP%]   .navigation-small[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background: #f9f871;\n}\n.page-header[_ngcontent-%COMP%]   .navigation-small[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\n  color: #00abca;\n}\n.page-header[_ngcontent-%COMP%]   .navigation-small[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  color: white;\n  padding: 15px 5px;\n}\n@media only screen and (min-width: 650px) {\n  .page-header[_ngcontent-%COMP%]   .navigation-small[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.page-header[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: center;\n  padding: 30px 0;\n  margin-bottom: 0;\n}\n.page-header[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 30%;\n}\n.page-header[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  position: relative;\n}\n.page-header[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: white;\n}\n@media only screen and (max-width: 650px) {\n  .page-header[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.section-header[_ngcontent-%COMP%] {\n  color: white;\n  position: relative;\n  text-transform: uppercase;\n  display: inline-block;\n  white-space: nowrap;\n  width: 100%;\n  text-align: center;\n  margin: 0;\n  height: 100px;\n  line-height: 100px;\n  font-size: 34px;\n  font-weight: bold;\n}\n.section-header[_ngcontent-%COMP%]::after, .section-header[_ngcontent-%COMP%]::before {\n  content: \"\";\n  height: 100%;\n  position: absolute;\n  display: block;\n  width: 100%;\n  top: 0;\n}\n.section-header[_ngcontent-%COMP%]::before {\n  z-index: -2;\n  background-color: white;\n}\n.section-header[_ngcontent-%COMP%]::after {\n  z-index: -1;\n  background-color: #00abca;\n}\nsection[_ngcontent-%COMP%] {\n  clear: both;\n  text-align: center;\n}\nsection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  max-width: 90%;\n  margin: 0 auto;\n}\nsection[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 30px;\n}\n.container[_ngcontent-%COMP%] {\n  align-items: center;\n  padding: 0;\n  margin: 0;\n  max-width: 100%;\n}\n.container[_ngcontent-%COMP%]   .sep-row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]:not(:last-of-type) {\n  border-left: 1px solid #d8d0d0;\n  border-right: 1px solid #d8d0d0;\n  height: 60px;\n}\n.container[_ngcontent-%COMP%]   .project-link[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  background: #00abca;\n  cursor: pointer;\n  overflow: hidden;\n  height: 50vh;\n  border: 2px solid #00abca;\n  border-radius: 10px;\n}\n.container[_ngcontent-%COMP%]   .project-link[_ngcontent-%COMP%]   .project-text[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  opacity: 0.7;\n  width: 80%;\n  font-size: 24px;\n  color: black;\n  transform: translate(-50%, -50%);\n  transition: opacity ease-out 250ms;\n}\n.container[_ngcontent-%COMP%]   .project-link[_ngcontent-%COMP%]:hover, .container[_ngcontent-%COMP%]   .project-link[_ngcontent-%COMP%]:focus {\n  background: white;\n}\n.container[_ngcontent-%COMP%]   .project-link[_ngcontent-%COMP%]   .project-image[_ngcontent-%COMP%] {\n  display: block;\n  border: 5px solid #00abca;\n  border-radius: 10px;\n  overflow: hidden;\n  transform: scale(1);\n  transition: transform 3s cubic-bezier(0.075, 0.12, 0.165, 1);\n  opacity: 0.3;\n  height: 100%;\n}\n.container[_ngcontent-%COMP%]   .project-link[_ngcontent-%COMP%]   .project-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.container[_ngcontent-%COMP%]   .project-link[_ngcontent-%COMP%]:hover, .container[_ngcontent-%COMP%]   .project-link[_ngcontent-%COMP%]:focus {\n  opacity: 1;\n}\n.container[_ngcontent-%COMP%]   .project-link[_ngcontent-%COMP%]:hover   .project-text[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .project-link[_ngcontent-%COMP%]:focus   .project-text[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.container[_ngcontent-%COMP%]   .project-link[_ngcontent-%COMP%]:hover   .project-image[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .project-link[_ngcontent-%COMP%]:focus   .project-image[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  transform: scale(1.2);\n  transition: transform 7s cubic-bezier(0.075, 0.12, 0.165, 1);\n}\n.container[_ngcontent-%COMP%]   .project-link[_ngcontent-%COMP%]::after, .container[_ngcontent-%COMP%]   .project-link[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 4em;\n  bottom: 4em;\n  left: 4em;\n  right: 4em;\n  transition: transform ease-out 250ms;\n}\n.container[_ngcontent-%COMP%]   .project-link[_ngcontent-%COMP%]::after {\n  border-top: 4px solid black;\n  border-bottom: 4px solid black;\n  transform: scale(0, 1);\n}\n.container[_ngcontent-%COMP%]   .project-link[_ngcontent-%COMP%]::before {\n  border-left: 4px solid black;\n  border-right: 4px solid black;\n  transform: scale(1, 0);\n}\n@media all and (min-width: 760px) {\n  .container[_ngcontent-%COMP%]   .project-link[_ngcontent-%COMP%]:hover::after, .container[_ngcontent-%COMP%]   .project-link[_ngcontent-%COMP%]:focus::after {\n    transform: scale(1.05, 1);\n  }\n  .container[_ngcontent-%COMP%]   .project-link[_ngcontent-%COMP%]:hover::before, .container[_ngcontent-%COMP%]   .project-link[_ngcontent-%COMP%]:focus::before {\n    transform: scale(1, 1.05);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Jvb3Rlci9Qcm9qZWN0cy9Qb3J0Zm9saW8vb2xkLWpha3ViLXdpc25pb3dza2kuZ2l0aHViLmlvL3NyYy9zdHlsZXMvX2JvcmRlci1saW5rLnNjc3MiLCJzcmMvYXBwL2hvbWVwYWdlL3Byb2plY3RzLW92ZXJ2aWV3L3Byb2plY3RzLW92ZXJ2aWV3LmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvcm9vdGVyL1Byb2plY3RzL1BvcnRmb2xpby9vbGQtamFrdWItd2lzbmlvd3NraS5naXRodWIuaW8vc3JjL3N0eWxlcy9fY29udGVudC13cmFwcGVyLnNjc3MiLCIvaG9tZS9yb290ZXIvUHJvamVjdHMvUG9ydGZvbGlvL29sZC1qYWt1Yi13aXNuaW93c2tpLmdpdGh1Yi5pby9zcmMvc3R5bGVzL19oZWxwZXJzLnNjc3MiLCIvaG9tZS9yb290ZXIvUHJvamVjdHMvUG9ydGZvbGlvL29sZC1qYWt1Yi13aXNuaW93c2tpLmdpdGh1Yi5pby9zcmMvc3R5bGVzL19wYWdlLWhlYWRlci5zY3NzIiwiL2hvbWUvcm9vdGVyL1Byb2plY3RzL1BvcnRmb2xpby9vbGQtamFrdWItd2lzbmlvd3NraS5naXRodWIuaW8vc3JjL3N0eWxlcy9fY29sb3JzLnNjc3MiLCIvaG9tZS9yb290ZXIvUHJvamVjdHMvUG9ydGZvbGlvL29sZC1qYWt1Yi13aXNuaW93c2tpLmdpdGh1Yi5pby9zcmMvc3R5bGVzL19zZWN0aW9uLWhlYWRlci5zY3NzIiwiL2hvbWUvcm9vdGVyL1Byb2plY3RzL1BvcnRmb2xpby9vbGQtamFrdWItd2lzbmlvd3NraS5naXRodWIuaW8vc3JjL3N0eWxlcy9fc2VjdGlvbi5zY3NzIiwiL2hvbWUvcm9vdGVyL1Byb2plY3RzL1BvcnRmb2xpby9vbGQtamFrdWItd2lzbmlvd3NraS5naXRodWIuaW8vc3JjL2FwcC9ob21lcGFnZS9wcm9qZWN0cy1vdmVydmlldy9wcm9qZWN0cy1vdmVydmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGtCQUFBO0FDREo7QURFSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxvQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxzQkFBQTtBQ0FOO0FER0k7RUFFRSxzQkFBQTtBQ0ZOO0FES0k7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FDSE47QUN0QkE7RUFDRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FEeUJGO0FFM0JJO0VBQ0ksZUFBQTtBRjhCUjtBRTNCSTtFQUNJLGlCQUFBO0FGOEJSO0FFbkNJO0VBQ0ksZUFBQTtBRnNDUjtBRW5DSTtFQUNJLGlCQUFBO0FGc0NSO0FFM0NJO0VBQ0ksZUFBQTtBRjhDUjtBRTNDSTtFQUNJLGlCQUFBO0FGOENSO0FFbkRJO0VBQ0ksZUFBQTtBRnNEUjtBRW5ESTtFQUNJLGlCQUFBO0FGc0RSO0FFM0RJO0VBQ0ksZUFBQTtBRjhEUjtBRTNESTtFQUNJLGlCQUFBO0FGOERSO0FFbkVJO0VBQ0ksZUFBQTtBRnNFUjtBRW5FSTtFQUNJLGlCQUFBO0FGc0VSO0FFM0VJO0VBQ0ksZUFBQTtBRjhFUjtBRTNFSTtFQUNJLGlCQUFBO0FGOEVSO0FFbkZJO0VBQ0ksZUFBQTtBRnNGUjtBRW5GSTtFQUNJLGlCQUFBO0FGc0ZSO0FFM0ZJO0VBQ0ksZUFBQTtBRjhGUjtBRTNGSTtFQUNJLGlCQUFBO0FGOEZSO0FFbkdJO0VBQ0ksZUFBQTtBRnNHUjtBRW5HSTtFQUNJLGlCQUFBO0FGc0dSO0FFM0dJO0VBQ0ksZUFBQTtBRjhHUjtBRTNHSTtFQUNJLGlCQUFBO0FGOEdSO0FFbkhJO0VBQ0ksZUFBQTtBRnNIUjtBRW5ISTtFQUNJLGlCQUFBO0FGc0hSO0FFM0hJO0VBQ0ksZUFBQTtBRjhIUjtBRTNISTtFQUNJLGlCQUFBO0FGOEhSO0FFbklJO0VBQ0ksZUFBQTtBRnNJUjtBRW5JSTtFQUNJLGlCQUFBO0FGc0lSO0FFM0lJO0VBQ0ksZUFBQTtBRjhJUjtBRTNJSTtFQUNJLGlCQUFBO0FGOElSO0FFbkpJO0VBQ0ksZUFBQTtBRnNKUjtBRW5KSTtFQUNJLGlCQUFBO0FGc0pSO0FFM0pJO0VBQ0ksZUFBQTtBRjhKUjtBRTNKSTtFQUNJLGlCQUFBO0FGOEpSO0FFbktJO0VBQ0ksZUFBQTtBRnNLUjtBRW5LSTtFQUNJLGlCQUFBO0FGc0tSO0FFM0tJO0VBQ0ksZUFBQTtBRjhLUjtBRTNLSTtFQUNJLGlCQUFBO0FGOEtSO0FFbkxJO0VBQ0ksZUFBQTtBRnNMUjtBRW5MSTtFQUNJLGlCQUFBO0FGc0xSO0FFM0xJO0VBQ0ksZUFBQTtBRjhMUjtBRTNMSTtFQUNJLGlCQUFBO0FGOExSO0FFbk1JO0VBQ0ksZUFBQTtBRnNNUjtBRW5NSTtFQUNJLGlCQUFBO0FGc01SO0FFM01JO0VBQ0ksZUFBQTtBRjhNUjtBRTNNSTtFQUNJLGlCQUFBO0FGOE1SO0FFbk5JO0VBQ0ksZUFBQTtBRnNOUjtBRW5OSTtFQUNJLGlCQUFBO0FGc05SO0FFM05JO0VBQ0ksZUFBQTtBRjhOUjtBRTNOSTtFQUNJLGlCQUFBO0FGOE5SO0FFbk9JO0VBQ0ksZUFBQTtBRnNPUjtBRW5PSTtFQUNJLGlCQUFBO0FGc09SO0FFM09JO0VBQ0ksZUFBQTtBRjhPUjtBRTNPSTtFQUNJLGlCQUFBO0FGOE9SO0FFblBJO0VBQ0ksZUFBQTtBRnNQUjtBRW5QSTtFQUNJLGlCQUFBO0FGc1BSO0FFM1BJO0VBQ0ksZUFBQTtBRjhQUjtBRTNQSTtFQUNJLGlCQUFBO0FGOFBSO0FFblFJO0VBQ0ksZUFBQTtBRnNRUjtBRW5RSTtFQUNJLGlCQUFBO0FGc1FSO0FFM1FJO0VBQ0ksZUFBQTtBRjhRUjtBRTNRSTtFQUNJLGlCQUFBO0FGOFFSO0FFblJJO0VBQ0ksZUFBQTtBRnNSUjtBRW5SSTtFQUNJLGlCQUFBO0FGc1JSO0FFM1JJO0VBQ0ksZUFBQTtBRjhSUjtBRTNSSTtFQUNJLGlCQUFBO0FGOFJSO0FFblNJO0VBQ0ksZUFBQTtBRnNTUjtBRW5TSTtFQUNJLGlCQUFBO0FGc1NSO0FFM1NJO0VBQ0ksZUFBQTtBRjhTUjtBRTNTSTtFQUNJLGlCQUFBO0FGOFNSO0FFblRJO0VBQ0ksZUFBQTtBRnNUUjtBRW5USTtFQUNJLGlCQUFBO0FGc1RSO0FFM1RJO0VBQ0ksZUFBQTtBRjhUUjtBRTNUSTtFQUNJLGlCQUFBO0FGOFRSO0FFblVJO0VBQ0ksZUFBQTtBRnNVUjtBRW5VSTtFQUNJLGlCQUFBO0FGc1VSO0FFM1VJO0VBQ0ksZUFBQTtBRjhVUjtBRTNVSTtFQUNJLGlCQUFBO0FGOFVSO0FFblZJO0VBQ0ksZUFBQTtBRnNWUjtBRW5WSTtFQUNJLGlCQUFBO0FGc1ZSO0FFM1ZJO0VBQ0ksZUFBQTtBRjhWUjtBRTNWSTtFQUNJLGlCQUFBO0FGOFZSO0FFbldJO0VBQ0ksZUFBQTtBRnNXUjtBRW5XSTtFQUNJLGlCQUFBO0FGc1dSO0FFM1dJO0VBQ0ksZUFBQTtBRjhXUjtBRTNXSTtFQUNJLGlCQUFBO0FGOFdSO0FFblhJO0VBQ0ksZUFBQTtBRnNYUjtBRW5YSTtFQUNJLGlCQUFBO0FGc1hSO0FFM1hJO0VBQ0ksZUFBQTtBRjhYUjtBRTNYSTtFQUNJLGlCQUFBO0FGOFhSO0FFbllJO0VBQ0ksZUFBQTtBRnNZUjtBRW5ZSTtFQUNJLGlCQUFBO0FGc1lSO0FFM1lJO0VBQ0ksZUFBQTtBRjhZUjtBRTNZSTtFQUNJLGlCQUFBO0FGOFlSO0FFblpJO0VBQ0ksZUFBQTtBRnNaUjtBRW5aSTtFQUNJLGlCQUFBO0FGc1pSO0FFM1pJO0VBQ0ksZUFBQTtBRjhaUjtBRTNaSTtFQUNJLGlCQUFBO0FGOFpSO0FFbmFJO0VBQ0ksZUFBQTtBRnNhUjtBRW5hSTtFQUNJLGlCQUFBO0FGc2FSO0FFM2FJO0VBQ0ksZUFBQTtBRjhhUjtBRTNhSTtFQUNJLGlCQUFBO0FGOGFSO0FFbmJJO0VBQ0ksZUFBQTtBRnNiUjtBRW5iSTtFQUNJLGlCQUFBO0FGc2JSO0FFM2JJO0VBQ0ksZUFBQTtBRjhiUjtBRTNiSTtFQUNJLGlCQUFBO0FGOGJSO0FFbmNJO0VBQ0ksZUFBQTtBRnNjUjtBRW5jSTtFQUNJLGlCQUFBO0FGc2NSO0FFM2NJO0VBQ0ksZUFBQTtBRjhjUjtBRTNjSTtFQUNJLGlCQUFBO0FGOGNSO0FFbmRJO0VBQ0ksZUFBQTtBRnNkUjtBRW5kSTtFQUNJLGlCQUFBO0FGc2RSO0FFM2RJO0VBQ0ksZUFBQTtBRjhkUjtBRTNkSTtFQUNJLGlCQUFBO0FGOGRSO0FFbmVJO0VBQ0ksZUFBQTtBRnNlUjtBRW5lSTtFQUNJLGlCQUFBO0FGc2VSO0FFM2VJO0VBQ0ksZUFBQTtBRjhlUjtBRTNlSTtFQUNJLGlCQUFBO0FGOGVSO0FFbmZJO0VBQ0ksZUFBQTtBRnNmUjtBRW5mSTtFQUNJLGlCQUFBO0FGc2ZSO0FFM2ZJO0VBQ0ksZUFBQTtBRjhmUjtBRTNmSTtFQUNJLGlCQUFBO0FGOGZSO0FFbmdCSTtFQUNJLGVBQUE7QUZzZ0JSO0FFbmdCSTtFQUNJLGlCQUFBO0FGc2dCUjtBRTNnQkk7RUFDSSxlQUFBO0FGOGdCUjtBRTNnQkk7RUFDSSxpQkFBQTtBRjhnQlI7QUVuaEJJO0VBQ0ksZUFBQTtBRnNoQlI7QUVuaEJJO0VBQ0ksaUJBQUE7QUZzaEJSO0FFM2hCSTtFQUNJLGVBQUE7QUY4aEJSO0FFM2hCSTtFQUNJLGlCQUFBO0FGOGhCUjtBRW5pQkk7RUFDSSxlQUFBO0FGc2lCUjtBRW5pQkk7RUFDSSxpQkFBQTtBRnNpQlI7QUUzaUJJO0VBQ0ksZUFBQTtBRjhpQlI7QUUzaUJJO0VBQ0ksaUJBQUE7QUY4aUJSO0FFbmpCSTtFQUNJLGVBQUE7QUZzakJSO0FFbmpCSTtFQUNJLGlCQUFBO0FGc2pCUjtBRTNqQkk7RUFDSSxlQUFBO0FGOGpCUjtBRTNqQkk7RUFDSSxpQkFBQTtBRjhqQlI7QUVua0JJO0VBQ0ksZUFBQTtBRnNrQlI7QUVua0JJO0VBQ0ksaUJBQUE7QUZza0JSO0FFM2tCSTtFQUNJLGVBQUE7QUY4a0JSO0FFM2tCSTtFQUNJLGlCQUFBO0FGOGtCUjtBRW5sQkk7RUFDSSxlQUFBO0FGc2xCUjtBRW5sQkk7RUFDSSxpQkFBQTtBRnNsQlI7QUUzbEJJO0VBQ0ksZUFBQTtBRjhsQlI7QUUzbEJJO0VBQ0ksaUJBQUE7QUY4bEJSO0FFbm1CSTtFQUNJLGVBQUE7QUZzbUJSO0FFbm1CSTtFQUNJLGlCQUFBO0FGc21CUjtBRTNtQkk7RUFDSSxlQUFBO0FGOG1CUjtBRTNtQkk7RUFDSSxpQkFBQTtBRjhtQlI7QUdsbkJBO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxZQUFBO0VBQ0EsbUJDUEc7RURRSCxVQUFBO0VBQ0EsV0FBQTtBSHFuQko7QUdubkJJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QUhxbkJOO0FHcG5CTTtFQVJGO0lBU0ksYUFBQTtFSHVuQk47QUFDRjtBR3BuQkk7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSx5QkM5QkM7RUQrQkQsYUFBQTtFQUNBLFlBQUE7RUFDQSwyQ0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUhzbkJOO0FHcG5CTTtFQUNFLGFBQUE7QUhzbkJSO0FHbm5CTTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBSHFuQlI7QUdubkJRO0VBQ0UsZUFBQTtBSHFuQlY7QUdubkJVO0VBQ0UsbUJDakRIO0FKc3FCVDtBR3BuQlk7RUFDRSxjQ3JEUDtBSjJxQlA7QUdsbkJVO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBSG9uQlo7QUcvbUJNO0VBekNGO0lBMENJLGFBQUE7RUhrbkJOO0FBQ0Y7QUcvbUJJO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBSGluQk47QUcvbUJNO0VBQ0UscUJBQUE7RUFDQSxVQUFBO0FIaW5CUjtBRy9tQlE7RUFDRSxrQkFBQTtBSGluQlY7QUdobkJVO0VBQ0UsWUFBQTtBSGtuQlo7QUc3bUJNO0VBbEJGO0lBbUJJLGFBQUE7RUhnbkJOO0FBQ0Y7QUsxc0JBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBTDZzQko7QUszc0JJO0VBRUUsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsTUFBQTtBTDRzQk47QUt6c0JJO0VBQ0UsV0FBQTtFQUNBLHVCQUFBO0FMMnNCTjtBS3hzQkk7RUFDRSxXQUFBO0VBQ0EseUJEL0JDO0FKeXVCUDtBTXp1QkE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QU40dUJKO0FNMXVCSTtFQUNFLGNBQUE7RUFDQSxjQUFBO0FONHVCTjtBTTF1Qkk7RUFDRSxlQUFBO0FONHVCTjtBT252QkE7RUFDSSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBUHN2Qko7QU9udkJNO0VBQ0UsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLFlBQUE7QVBxdkJSO0FPanZCSTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CSG5CQztFR29CRCxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBUG12Qk47QU9qdkJNO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLGtDQUFBO0FQbXZCUjtBT2h2Qk07RUFDSSxpQkFBQTtBUGt2QlY7QU83dUJJO0VBQ0ksY0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNERBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBUCt1QlI7QU83dUJRO0VBQ0UsWUFBQTtBUCt1QlY7QU8zdUJNO0VBQ0UsVUFBQTtBUDZ1QlI7QU8zdUJRO0VBQ0UsVUFBQTtBUDZ1QlY7QU8xdUJRO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsNERBQUE7QVA0dUJWO0FPdnVCTTtFQUVFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxvQ0FBQTtBUHd1QlI7QU9ydUJNO0VBQ0UsMkJBQUE7RUFDQSw4QkFBQTtFQUNBLHNCQUFBO0FQdXVCUjtBT3B1Qk07RUFDRSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0Esc0JBQUE7QVBzdUJSO0FPbnVCTTtFQUdJO0lBQ0UseUJBQUE7RVBtdUJWO0VPaHVCUTtJQUNFLHlCQUFBO0VQa3VCVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaG9tZXBhZ2UvcHJvamVjdHMtb3ZlcnZpZXcvcHJvamVjdHMtb3ZlcnZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuL2NvbG9ycyc7XG5cbi5ib3JkZXItbGluayB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICY6OmJlZm9yZSB7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAtMTBweDtcbiAgICAgIGJvdHRvbTogLTEwcHg7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gZWFzZS1vdXQgMjUwbXM7XG4gICAgICBib3JkZXItdG9wOiAycHggc29saWQgJGxpZ2h0LWdyZXk7XG4gICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJGxpZ2h0LWdyZXk7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDAsIDEpO1xuICAgIH1cbiAgXG4gICAgJjpob3Zlcjo6YmVmb3JlLFxuICAgICY6Zm9jdXM6OmJlZm9yZSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xuICAgIH1cbiAgXG4gICAgJjpmb2N1cyB7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIH1cbiAgfSIsIi5ib3JkZXItbGluayB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5ib3JkZXItbGluazo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0xMHB4O1xuICBib3R0b206IC0xMHB4O1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIGVhc2Utb3V0IDI1MG1zO1xuICBib3JkZXItdG9wOiAycHggc29saWQgIzQ3NDUwNztcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM0NzQ1MDc7XG4gIHRyYW5zZm9ybTogc2NhbGUoMCwgMSk7XG59XG4uYm9yZGVyLWxpbms6aG92ZXI6OmJlZm9yZSwgLmJvcmRlci1saW5rOmZvY3VzOjpiZWZvcmUge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xufVxuLmJvcmRlci1saW5rOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5jb250ZW50LXdyYXBwZXIge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMDtcbiAgbWluLWhlaWdodDogMTAwdmg7XG59XG5cbi5mcy0xNiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmxoLTE2IHtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG59XG5cbi5mcy0xNyB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cblxuLmxoLTE3IHtcbiAgbGluZS1oZWlnaHQ6IDE3cHg7XG59XG5cbi5mcy0xOCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmxoLTE4IHtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG59XG5cbi5mcy0xOSB7XG4gIGZvbnQtc2l6ZTogMTlweDtcbn1cblxuLmxoLTE5IHtcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XG59XG5cbi5mcy0yMCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmxoLTIwIHtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG5cbi5mcy0yMSB7XG4gIGZvbnQtc2l6ZTogMjFweDtcbn1cblxuLmxoLTIxIHtcbiAgbGluZS1oZWlnaHQ6IDIxcHg7XG59XG5cbi5mcy0yMiB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cblxuLmxoLTIyIHtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG59XG5cbi5mcy0yMyB7XG4gIGZvbnQtc2l6ZTogMjNweDtcbn1cblxuLmxoLTIzIHtcbiAgbGluZS1oZWlnaHQ6IDIzcHg7XG59XG5cbi5mcy0yNCB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuLmxoLTI0IHtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG59XG5cbi5mcy0yNSB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuLmxoLTI1IHtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG59XG5cbi5mcy0yNiB7XG4gIGZvbnQtc2l6ZTogMjZweDtcbn1cblxuLmxoLTI2IHtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbi5mcy0yNyB7XG4gIGZvbnQtc2l6ZTogMjdweDtcbn1cblxuLmxoLTI3IHtcbiAgbGluZS1oZWlnaHQ6IDI3cHg7XG59XG5cbi5mcy0yOCB7XG4gIGZvbnQtc2l6ZTogMjhweDtcbn1cblxuLmxoLTI4IHtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG59XG5cbi5mcy0yOSB7XG4gIGZvbnQtc2l6ZTogMjlweDtcbn1cblxuLmxoLTI5IHtcbiAgbGluZS1oZWlnaHQ6IDI5cHg7XG59XG5cbi5mcy0zMCB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuLmxoLTMwIHtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG59XG5cbi5mcy0zMSB7XG4gIGZvbnQtc2l6ZTogMzFweDtcbn1cblxuLmxoLTMxIHtcbiAgbGluZS1oZWlnaHQ6IDMxcHg7XG59XG5cbi5mcy0zMiB7XG4gIGZvbnQtc2l6ZTogMzJweDtcbn1cblxuLmxoLTMyIHtcbiAgbGluZS1oZWlnaHQ6IDMycHg7XG59XG5cbi5mcy0zMyB7XG4gIGZvbnQtc2l6ZTogMzNweDtcbn1cblxuLmxoLTMzIHtcbiAgbGluZS1oZWlnaHQ6IDMzcHg7XG59XG5cbi5mcy0zNCB7XG4gIGZvbnQtc2l6ZTogMzRweDtcbn1cblxuLmxoLTM0IHtcbiAgbGluZS1oZWlnaHQ6IDM0cHg7XG59XG5cbi5mcy0zNSB7XG4gIGZvbnQtc2l6ZTogMzVweDtcbn1cblxuLmxoLTM1IHtcbiAgbGluZS1oZWlnaHQ6IDM1cHg7XG59XG5cbi5mcy0zNiB7XG4gIGZvbnQtc2l6ZTogMzZweDtcbn1cblxuLmxoLTM2IHtcbiAgbGluZS1oZWlnaHQ6IDM2cHg7XG59XG5cbi5mcy0zNyB7XG4gIGZvbnQtc2l6ZTogMzdweDtcbn1cblxuLmxoLTM3IHtcbiAgbGluZS1oZWlnaHQ6IDM3cHg7XG59XG5cbi5mcy0zOCB7XG4gIGZvbnQtc2l6ZTogMzhweDtcbn1cblxuLmxoLTM4IHtcbiAgbGluZS1oZWlnaHQ6IDM4cHg7XG59XG5cbi5mcy0zOSB7XG4gIGZvbnQtc2l6ZTogMzlweDtcbn1cblxuLmxoLTM5IHtcbiAgbGluZS1oZWlnaHQ6IDM5cHg7XG59XG5cbi5mcy00MCB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbn1cblxuLmxoLTQwIHtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG59XG5cbi5mcy00MSB7XG4gIGZvbnQtc2l6ZTogNDFweDtcbn1cblxuLmxoLTQxIHtcbiAgbGluZS1oZWlnaHQ6IDQxcHg7XG59XG5cbi5mcy00MiB7XG4gIGZvbnQtc2l6ZTogNDJweDtcbn1cblxuLmxoLTQyIHtcbiAgbGluZS1oZWlnaHQ6IDQycHg7XG59XG5cbi5mcy00MyB7XG4gIGZvbnQtc2l6ZTogNDNweDtcbn1cblxuLmxoLTQzIHtcbiAgbGluZS1oZWlnaHQ6IDQzcHg7XG59XG5cbi5mcy00NCB7XG4gIGZvbnQtc2l6ZTogNDRweDtcbn1cblxuLmxoLTQ0IHtcbiAgbGluZS1oZWlnaHQ6IDQ0cHg7XG59XG5cbi5mcy00NSB7XG4gIGZvbnQtc2l6ZTogNDVweDtcbn1cblxuLmxoLTQ1IHtcbiAgbGluZS1oZWlnaHQ6IDQ1cHg7XG59XG5cbi5mcy00NiB7XG4gIGZvbnQtc2l6ZTogNDZweDtcbn1cblxuLmxoLTQ2IHtcbiAgbGluZS1oZWlnaHQ6IDQ2cHg7XG59XG5cbi5mcy00NyB7XG4gIGZvbnQtc2l6ZTogNDdweDtcbn1cblxuLmxoLTQ3IHtcbiAgbGluZS1oZWlnaHQ6IDQ3cHg7XG59XG5cbi5mcy00OCB7XG4gIGZvbnQtc2l6ZTogNDhweDtcbn1cblxuLmxoLTQ4IHtcbiAgbGluZS1oZWlnaHQ6IDQ4cHg7XG59XG5cbi5mcy00OSB7XG4gIGZvbnQtc2l6ZTogNDlweDtcbn1cblxuLmxoLTQ5IHtcbiAgbGluZS1oZWlnaHQ6IDQ5cHg7XG59XG5cbi5mcy01MCB7XG4gIGZvbnQtc2l6ZTogNTBweDtcbn1cblxuLmxoLTUwIHtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG59XG5cbi5mcy01MSB7XG4gIGZvbnQtc2l6ZTogNTFweDtcbn1cblxuLmxoLTUxIHtcbiAgbGluZS1oZWlnaHQ6IDUxcHg7XG59XG5cbi5mcy01MiB7XG4gIGZvbnQtc2l6ZTogNTJweDtcbn1cblxuLmxoLTUyIHtcbiAgbGluZS1oZWlnaHQ6IDUycHg7XG59XG5cbi5mcy01MyB7XG4gIGZvbnQtc2l6ZTogNTNweDtcbn1cblxuLmxoLTUzIHtcbiAgbGluZS1oZWlnaHQ6IDUzcHg7XG59XG5cbi5mcy01NCB7XG4gIGZvbnQtc2l6ZTogNTRweDtcbn1cblxuLmxoLTU0IHtcbiAgbGluZS1oZWlnaHQ6IDU0cHg7XG59XG5cbi5mcy01NSB7XG4gIGZvbnQtc2l6ZTogNTVweDtcbn1cblxuLmxoLTU1IHtcbiAgbGluZS1oZWlnaHQ6IDU1cHg7XG59XG5cbi5mcy01NiB7XG4gIGZvbnQtc2l6ZTogNTZweDtcbn1cblxuLmxoLTU2IHtcbiAgbGluZS1oZWlnaHQ6IDU2cHg7XG59XG5cbi5mcy01NyB7XG4gIGZvbnQtc2l6ZTogNTdweDtcbn1cblxuLmxoLTU3IHtcbiAgbGluZS1oZWlnaHQ6IDU3cHg7XG59XG5cbi5mcy01OCB7XG4gIGZvbnQtc2l6ZTogNThweDtcbn1cblxuLmxoLTU4IHtcbiAgbGluZS1oZWlnaHQ6IDU4cHg7XG59XG5cbi5mcy01OSB7XG4gIGZvbnQtc2l6ZTogNTlweDtcbn1cblxuLmxoLTU5IHtcbiAgbGluZS1oZWlnaHQ6IDU5cHg7XG59XG5cbi5mcy02MCB7XG4gIGZvbnQtc2l6ZTogNjBweDtcbn1cblxuLmxoLTYwIHtcbiAgbGluZS1oZWlnaHQ6IDYwcHg7XG59XG5cbi5mcy02MSB7XG4gIGZvbnQtc2l6ZTogNjFweDtcbn1cblxuLmxoLTYxIHtcbiAgbGluZS1oZWlnaHQ6IDYxcHg7XG59XG5cbi5mcy02MiB7XG4gIGZvbnQtc2l6ZTogNjJweDtcbn1cblxuLmxoLTYyIHtcbiAgbGluZS1oZWlnaHQ6IDYycHg7XG59XG5cbi5mcy02MyB7XG4gIGZvbnQtc2l6ZTogNjNweDtcbn1cblxuLmxoLTYzIHtcbiAgbGluZS1oZWlnaHQ6IDYzcHg7XG59XG5cbi5mcy02NCB7XG4gIGZvbnQtc2l6ZTogNjRweDtcbn1cblxuLmxoLTY0IHtcbiAgbGluZS1oZWlnaHQ6IDY0cHg7XG59XG5cbi5mcy02NSB7XG4gIGZvbnQtc2l6ZTogNjVweDtcbn1cblxuLmxoLTY1IHtcbiAgbGluZS1oZWlnaHQ6IDY1cHg7XG59XG5cbi5mcy02NiB7XG4gIGZvbnQtc2l6ZTogNjZweDtcbn1cblxuLmxoLTY2IHtcbiAgbGluZS1oZWlnaHQ6IDY2cHg7XG59XG5cbi5mcy02NyB7XG4gIGZvbnQtc2l6ZTogNjdweDtcbn1cblxuLmxoLTY3IHtcbiAgbGluZS1oZWlnaHQ6IDY3cHg7XG59XG5cbi5mcy02OCB7XG4gIGZvbnQtc2l6ZTogNjhweDtcbn1cblxuLmxoLTY4IHtcbiAgbGluZS1oZWlnaHQ6IDY4cHg7XG59XG5cbi5mcy02OSB7XG4gIGZvbnQtc2l6ZTogNjlweDtcbn1cblxuLmxoLTY5IHtcbiAgbGluZS1oZWlnaHQ6IDY5cHg7XG59XG5cbi5mcy03MCB7XG4gIGZvbnQtc2l6ZTogNzBweDtcbn1cblxuLmxoLTcwIHtcbiAgbGluZS1oZWlnaHQ6IDcwcHg7XG59XG5cbi5mcy03MSB7XG4gIGZvbnQtc2l6ZTogNzFweDtcbn1cblxuLmxoLTcxIHtcbiAgbGluZS1oZWlnaHQ6IDcxcHg7XG59XG5cbi5mcy03MiB7XG4gIGZvbnQtc2l6ZTogNzJweDtcbn1cblxuLmxoLTcyIHtcbiAgbGluZS1oZWlnaHQ6IDcycHg7XG59XG5cbi5mcy03MyB7XG4gIGZvbnQtc2l6ZTogNzNweDtcbn1cblxuLmxoLTczIHtcbiAgbGluZS1oZWlnaHQ6IDczcHg7XG59XG5cbi5mcy03NCB7XG4gIGZvbnQtc2l6ZTogNzRweDtcbn1cblxuLmxoLTc0IHtcbiAgbGluZS1oZWlnaHQ6IDc0cHg7XG59XG5cbi5mcy03NSB7XG4gIGZvbnQtc2l6ZTogNzVweDtcbn1cblxuLmxoLTc1IHtcbiAgbGluZS1oZWlnaHQ6IDc1cHg7XG59XG5cbi5mcy03NiB7XG4gIGZvbnQtc2l6ZTogNzZweDtcbn1cblxuLmxoLTc2IHtcbiAgbGluZS1oZWlnaHQ6IDc2cHg7XG59XG5cbi5mcy03NyB7XG4gIGZvbnQtc2l6ZTogNzdweDtcbn1cblxuLmxoLTc3IHtcbiAgbGluZS1oZWlnaHQ6IDc3cHg7XG59XG5cbi5mcy03OCB7XG4gIGZvbnQtc2l6ZTogNzhweDtcbn1cblxuLmxoLTc4IHtcbiAgbGluZS1oZWlnaHQ6IDc4cHg7XG59XG5cbi5mcy03OSB7XG4gIGZvbnQtc2l6ZTogNzlweDtcbn1cblxuLmxoLTc5IHtcbiAgbGluZS1oZWlnaHQ6IDc5cHg7XG59XG5cbi5mcy04MCB7XG4gIGZvbnQtc2l6ZTogODBweDtcbn1cblxuLmxoLTgwIHtcbiAgbGluZS1oZWlnaHQ6IDgwcHg7XG59XG5cbi5mcy04MSB7XG4gIGZvbnQtc2l6ZTogODFweDtcbn1cblxuLmxoLTgxIHtcbiAgbGluZS1oZWlnaHQ6IDgxcHg7XG59XG5cbi5mcy04MiB7XG4gIGZvbnQtc2l6ZTogODJweDtcbn1cblxuLmxoLTgyIHtcbiAgbGluZS1oZWlnaHQ6IDgycHg7XG59XG5cbi5mcy04MyB7XG4gIGZvbnQtc2l6ZTogODNweDtcbn1cblxuLmxoLTgzIHtcbiAgbGluZS1oZWlnaHQ6IDgzcHg7XG59XG5cbi5mcy04NCB7XG4gIGZvbnQtc2l6ZTogODRweDtcbn1cblxuLmxoLTg0IHtcbiAgbGluZS1oZWlnaHQ6IDg0cHg7XG59XG5cbi5mcy04NSB7XG4gIGZvbnQtc2l6ZTogODVweDtcbn1cblxuLmxoLTg1IHtcbiAgbGluZS1oZWlnaHQ6IDg1cHg7XG59XG5cbi5mcy04NiB7XG4gIGZvbnQtc2l6ZTogODZweDtcbn1cblxuLmxoLTg2IHtcbiAgbGluZS1oZWlnaHQ6IDg2cHg7XG59XG5cbi5mcy04NyB7XG4gIGZvbnQtc2l6ZTogODdweDtcbn1cblxuLmxoLTg3IHtcbiAgbGluZS1oZWlnaHQ6IDg3cHg7XG59XG5cbi5mcy04OCB7XG4gIGZvbnQtc2l6ZTogODhweDtcbn1cblxuLmxoLTg4IHtcbiAgbGluZS1oZWlnaHQ6IDg4cHg7XG59XG5cbi5mcy04OSB7XG4gIGZvbnQtc2l6ZTogODlweDtcbn1cblxuLmxoLTg5IHtcbiAgbGluZS1oZWlnaHQ6IDg5cHg7XG59XG5cbi5mcy05MCB7XG4gIGZvbnQtc2l6ZTogOTBweDtcbn1cblxuLmxoLTkwIHtcbiAgbGluZS1oZWlnaHQ6IDkwcHg7XG59XG5cbi5wYWdlLWhlYWRlciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIG9wYWNpdHk6IDAuODtcbiAgYmFja2dyb3VuZDogIzAwYWJjYTtcbiAgei1pbmRleDogMTtcbiAgd2lkdGg6IDEwMCU7XG59XG4ucGFnZS1oZWFkZXIgLmhhbWJ1cmdlci1tZW51IHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDEwcHg7XG4gIHJpZ2h0OiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY1MHB4KSB7XG4gIC5wYWdlLWhlYWRlciAuaGFtYnVyZ2VyLW1lbnUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbi5wYWdlLWhlYWRlciAubmF2aWdhdGlvbi1zbWFsbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGFiY2E7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAyNTBweDtcbiAgYm94LXNoYWRvdzogMCA4cHggMTZweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgei1pbmRleDogMTtcbiAgb3BhY2l0eTogMC45OTtcbiAgdHJhbnNpdGlvbjogcmlnaHQgMC41cyBlYXNlLWluO1xufVxuLnBhZ2UtaGVhZGVyIC5uYXZpZ2F0aW9uLXNtYWxsLmNvbGxhcHNlZCB7XG4gIHJpZ2h0OiAtMjUwcHg7XG59XG4ucGFnZS1oZWFkZXIgLm5hdmlnYXRpb24tc21hbGwgdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiA2MHB4IDAgMCAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLnBhZ2UtaGVhZGVyIC5uYXZpZ2F0aW9uLXNtYWxsIHVsIGxpIHtcbiAgZm9udC1zaXplOiAxMjAlO1xufVxuLnBhZ2UtaGVhZGVyIC5uYXZpZ2F0aW9uLXNtYWxsIHVsIGxpOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2Y5Zjg3MTtcbn1cbi5wYWdlLWhlYWRlciAubmF2aWdhdGlvbi1zbWFsbCB1bCBsaTpob3ZlciBhIHtcbiAgY29sb3I6ICMwMGFiY2E7XG59XG4ucGFnZS1oZWFkZXIgLm5hdmlnYXRpb24tc21hbGwgdWwgbGkgYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDE1cHggNXB4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NTBweCkge1xuICAucGFnZS1oZWFkZXIgLm5hdmlnYXRpb24tc21hbGwge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbi5wYWdlLWhlYWRlciAubmF2aWdhdGlvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAzMHB4IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4ucGFnZS1oZWFkZXIgLm5hdmlnYXRpb24gbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAzMCU7XG59XG4ucGFnZS1oZWFkZXIgLm5hdmlnYXRpb24gbGkgYSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5wYWdlLWhlYWRlciAubmF2aWdhdGlvbiBsaSBhOmhvdmVyIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xuICAucGFnZS1oZWFkZXIgLm5hdmlnYXRpb24ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuLnNlY3Rpb24taGVhZGVyIHtcbiAgY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwO1xuICBoZWlnaHQ6IDEwMHB4O1xuICBsaW5lLWhlaWdodDogMTAwcHg7XG4gIGZvbnQtc2l6ZTogMzRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uc2VjdGlvbi1oZWFkZXI6OmFmdGVyLCAuc2VjdGlvbi1oZWFkZXI6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogMDtcbn1cbi5zZWN0aW9uLWhlYWRlcjo6YmVmb3JlIHtcbiAgei1pbmRleDogLTI7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLnNlY3Rpb24taGVhZGVyOjphZnRlciB7XG4gIHotaW5kZXg6IC0xO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhYmNhO1xufVxuXG5zZWN0aW9uIHtcbiAgY2xlYXI6IGJvdGg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbnNlY3Rpb24gLmNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogOTAlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbnNlY3Rpb24gaDMge1xuICBmb250LXNpemU6IDMwcHg7XG59XG5cbi5jb250YWluZXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cbi5jb250YWluZXIgLnNlcC1yb3cgLmNvbDpub3QoOmxhc3Qtb2YtdHlwZSkge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNkOGQwZDA7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkOGQwZDA7XG4gIGhlaWdodDogNjBweDtcbn1cbi5jb250YWluZXIgLnByb2plY3QtbGluayB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6ICMwMGFiY2E7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgaGVpZ2h0OiA1MHZoO1xuICBib3JkZXI6IDJweCBzb2xpZCAjMDBhYmNhO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLmNvbnRhaW5lciAucHJvamVjdC1saW5rIC5wcm9qZWN0LXRleHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIG9wYWNpdHk6IDAuNztcbiAgd2lkdGg6IDgwJTtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogYmxhY2s7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IGVhc2Utb3V0IDI1MG1zO1xufVxuLmNvbnRhaW5lciAucHJvamVjdC1saW5rOmhvdmVyLCAuY29udGFpbmVyIC5wcm9qZWN0LWxpbms6Zm9jdXMge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbi5jb250YWluZXIgLnByb2plY3QtbGluayAucHJvamVjdC1pbWFnZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXI6IDVweCBzb2xpZCAjMDBhYmNhO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gM3MgY3ViaWMtYmV6aWVyKDAuMDc1LCAwLjEyLCAwLjE2NSwgMSk7XG4gIG9wYWNpdHk6IDAuMztcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmNvbnRhaW5lciAucHJvamVjdC1saW5rIC5wcm9qZWN0LWltYWdlIGltZyB7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5jb250YWluZXIgLnByb2plY3QtbGluazpob3ZlciwgLmNvbnRhaW5lciAucHJvamVjdC1saW5rOmZvY3VzIHtcbiAgb3BhY2l0eTogMTtcbn1cbi5jb250YWluZXIgLnByb2plY3QtbGluazpob3ZlciAucHJvamVjdC10ZXh0LCAuY29udGFpbmVyIC5wcm9qZWN0LWxpbms6Zm9jdXMgLnByb2plY3QtdGV4dCB7XG4gIG9wYWNpdHk6IDE7XG59XG4uY29udGFpbmVyIC5wcm9qZWN0LWxpbms6aG92ZXIgLnByb2plY3QtaW1hZ2UsIC5jb250YWluZXIgLnByb2plY3QtbGluazpmb2N1cyAucHJvamVjdC1pbWFnZSB7XG4gIG9wYWNpdHk6IDAuNTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gN3MgY3ViaWMtYmV6aWVyKDAuMDc1LCAwLjEyLCAwLjE2NSwgMSk7XG59XG4uY29udGFpbmVyIC5wcm9qZWN0LWxpbms6OmFmdGVyLCAuY29udGFpbmVyIC5wcm9qZWN0LWxpbms6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0ZW07XG4gIGJvdHRvbTogNGVtO1xuICBsZWZ0OiA0ZW07XG4gIHJpZ2h0OiA0ZW07XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSBlYXNlLW91dCAyNTBtcztcbn1cbi5jb250YWluZXIgLnByb2plY3QtbGluazo6YWZ0ZXIge1xuICBib3JkZXItdG9wOiA0cHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCBibGFjaztcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLCAxKTtcbn1cbi5jb250YWluZXIgLnByb2plY3QtbGluazo6YmVmb3JlIHtcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyLXJpZ2h0OiA0cHggc29saWQgYmxhY2s7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSwgMCk7XG59XG5AbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiA3NjBweCkge1xuICAuY29udGFpbmVyIC5wcm9qZWN0LWxpbms6aG92ZXI6OmFmdGVyLCAuY29udGFpbmVyIC5wcm9qZWN0LWxpbms6Zm9jdXM6OmFmdGVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUsIDEpO1xuICB9XG4gIC5jb250YWluZXIgLnByb2plY3QtbGluazpob3Zlcjo6YmVmb3JlLCAuY29udGFpbmVyIC5wcm9qZWN0LWxpbms6Zm9jdXM6OmJlZm9yZSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxLjA1KTtcbiAgfVxufSIsIi5jb250ZW50LXdyYXBwZXIge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMDtcbiAgbWluLWhlaWdodDogMTAwdmg7XG59IiwiQGZvciAkaSBmcm9tIDE2IHRocm91Z2ggOTAge1xuICAgIC5mcy0jeyRpfSB7XG4gICAgICAgIGZvbnQtc2l6ZTogJGkgKiAxcHg7XG4gICAgfVxuXG4gICAgLmxoLSN7JGl9IHtcbiAgICAgICAgbGluZS1oZWlnaHQ6ICRpICogMXB4O1xuICAgIH1cbn0iLCJAaW1wb3J0IFwiLi92YXJpYWJsZXNcIjtcblxuLnBhZ2UtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBvcGFjaXR5OiAwLjg7XG4gICAgYmFja2dyb3VuZDogJGJsdWU7XG4gICAgei1pbmRleDogMTtcbiAgICB3aWR0aDogMTAwJTtcbiAgXG4gICAgLmhhbWJ1cmdlci1tZW51IHtcbiAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgdG9wOiAxMHB4O1xuICAgICAgcmlnaHQ6IDEwcHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NTBweCkge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgIH1cbiAgXG4gICAgLm5hdmlnYXRpb24tc21hbGwge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgdG9wOiAwO1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmx1ZTtcbiAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICB3aWR0aDogMjUwcHg7XG4gICAgICBib3gtc2hhZG93OiAwIDhweCAxNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgICAgei1pbmRleDogMTtcbiAgICAgIG9wYWNpdHk6IDAuOTk7XG4gICAgICB0cmFuc2l0aW9uOiByaWdodCAuNXMgZWFzZS1pbjtcblxuICAgICAgJi5jb2xsYXBzZWQge1xuICAgICAgICByaWdodDogLTI1MHB4O1xuICAgICAgfVxuICBcbiAgICAgIHVsIHtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgcGFkZGluZzogNjBweCAwIDAgMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgXG4gICAgICAgIGxpIHtcbiAgICAgICAgICBmb250LXNpemU6IDEyMCU7XG4gIFxuICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJHllbGxvdztcbiAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICBjb2xvcjogJGJsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICBcbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgcGFkZGluZzogMTVweCA1cHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gIFxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NTBweCkge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgIH1cbiAgXG4gICAgLm5hdmlnYXRpb24ge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgcGFkZGluZzogMzBweCAwO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgXG4gICAgICBsaSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgd2lkdGg6IDMwJTtcbiAgXG4gICAgICAgIGEge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuICB9IiwiJGJsdWU6ICMwMGFiY2E7XG4kbGlnaHQtZ3JleTogcmdiKDcxLCA2OSwgNyk7XG4keWVsbG93OiAjZjlmODcxO1xuIiwiLnNlY3Rpb24taGVhZGVyIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxMDBweDtcbiAgICBmb250LXNpemU6IDM0cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIFxuICAgICY6OmFmdGVyLFxuICAgICY6OmJlZm9yZSB7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHRvcDogMDtcbiAgICB9XG4gIFxuICAgICY6OmJlZm9yZSB7XG4gICAgICB6LWluZGV4OiAtMjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgXG4gICAgJjo6YWZ0ZXIge1xuICAgICAgei1pbmRleDogLTE7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmx1ZTtcbiAgICB9XG4gIH0iLCJzZWN0aW9uIHtcbiAgICBjbGVhcjogYm90aDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIFxuICAgIC5jb250YWluZXIge1xuICAgICAgbWF4LXdpZHRoOiA5MCU7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICB9XG4gICAgaDMge1xuICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgIH1cbiAgfSIsIkBpbXBvcnQgXCJ+c3JjL3N0eWxlcy9zdHlsZXNcIjtcblxuLmNvbnRhaW5lciB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG5cbiAgICAuc2VwLXJvdyB7XG4gICAgICAuY29sOm5vdCg6bGFzdC1vZi10eXBlKSB7XG4gICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiKDIxNiwgMjA4LCAyMDgpO1xuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2IoMjE2LCAyMDgsIDIwOCk7XG4gICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgIH1cbiAgICB9XG4gIFxuICAgIC5wcm9qZWN0LWxpbmsge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBiYWNrZ3JvdW5kOiAkYmx1ZTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICBoZWlnaHQ6IDUwdmg7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAkYmx1ZTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIFxuICAgICAgLnByb2plY3QtdGV4dCB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgb3BhY2l0eTogMC43O1xuICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgZWFzZS1vdXQgMjUwbXM7XG4gICAgICB9XG5cbiAgICAgICY6aG92ZXIsICY6Zm9jdXMge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgfVxuXG5cbiAgXG4gICAgLnByb2plY3QtaW1hZ2Uge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgYm9yZGVyOiA1cHggc29saWQgJGJsdWU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzcyBjdWJpYy1iZXppZXIoMC4wNzUsIDAuMTIsIDAuMTY1LCAxKTtcbiAgICAgICAgb3BhY2l0eTogMC4zO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG4gICAgICB9XG4gIFxuICAgICAgJjpob3ZlciwgJjpmb2N1cyB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG5cbiAgICAgICAgLnByb2plY3QtdGV4dCB7XG4gICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wcm9qZWN0LWltYWdlIHtcbiAgICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSA3cyBjdWJpYy1iZXppZXIoMC4wNzUsIDAuMTIsIDAuMTY1LCAxKTtcblxuICAgICAgICB9XG4gICAgICB9XG4gIFxuICAgICAgJjo6YWZ0ZXIsXG4gICAgICAmOjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogNGVtO1xuICAgICAgICBib3R0b206IDRlbTtcbiAgICAgICAgbGVmdDogNGVtO1xuICAgICAgICByaWdodDogNGVtO1xuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gZWFzZS1vdXQgMjUwbXM7XG4gICAgICB9XG4gIFxuICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICBib3JkZXItdG9wOiA0cHggc29saWQgYmxhY2s7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCBibGFjaztcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLCAxKTtcbiAgICAgIH1cbiAgXG4gICAgICAmOjpiZWZvcmUge1xuICAgICAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkIGJsYWNrO1xuICAgICAgICBib3JkZXItcmlnaHQ6IDRweCBzb2xpZCBibGFjaztcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAwKTtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogNzYwcHgpIHtcblxuICAgICAgICAmOmhvdmVyLCAmOmZvY3VzIHtcbiAgICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUsIDEpO1xuICBcbiAgICAgICAgICB9XG4gICAgICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMS4wNSk7XG4gIFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICB9XG4gICAgfVxuICB9Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsOverviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-projects-overview",
          templateUrl: "./projects-overview.component.html",
          styleUrls: ["./projects-overview.component.scss"]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/gallery/gallery.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/shared/components/gallery/gallery.component.ts ***!
    \****************************************************************/

  /*! exports provided: GalleryComponent */

  /***/
  function srcAppSharedComponentsGalleryGalleryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GalleryComponent", function () {
      return GalleryComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var _show_more_button_show_more_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../show-more-button/show-more-button.component */
    "./src/app/shared/components/show-more-button/show-more-button.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function GalleryComponent_img_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleryComponent_img_2_Template_img_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

          var slide_r19 = ctx.$implicit;

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

          return ctx_r20.openModal(_r17, slide_r19);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var slide_r19 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", slide_r19.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", slide_r19.alt);
      }
    }

    function GalleryComponent_ng_template_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleryComponent_ng_template_3_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r22.modalRef.hide();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r18.chosenImage.alt);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r18.chosenImage.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx_r18.chosenImage.alt);
      }
    }

    var GalleryComponent =
    /*#__PURE__*/
    function () {
      function GalleryComponent(modalService) {
        _classCallCheck(this, GalleryComponent);

        this.modalService = modalService;
      }

      _createClass(GalleryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "openModal",
        value: function openModal(template, img) {
          this.chosenImage = img;
          this.modalRef = this.modalService.show(template, Object.assign({}, {
            "class": "gray modal-lg"
          }));
        }
      }]);

      return GalleryComponent;
    }();

    GalleryComponent.ɵfac = function GalleryComponent_Factory(t) {
      return new (t || GalleryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"]));
    };

    GalleryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GalleryComponent,
      selectors: [["app-gallery"]],
      inputs: {
        slides: "slides"
      },
      decls: 5,
      vars: 1,
      consts: [["elementId", "slides", "toggleClass", "open"], ["id", "slides", 1, "row", "slides"], ["class", "slide", 3, "src", "alt", "click", 4, "ngFor", "ngForOf"], ["template", ""], [1, "slide", 3, "src", "alt", "click"], [1, "modal-header"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body", "text-center"], [1, "mw-100", 2, "max-height", "80vh", 3, "src", "alt"]],
      template: function GalleryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-show-more-button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GalleryComponent_img_2_Template, 1, 2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GalleryComponent_ng_template_3_Template, 8, 3, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.slides);
        }
      },
      directives: [_show_more_button_show_more_button_component__WEBPACK_IMPORTED_MODULE_2__["ShowMoreButtonComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
      styles: ["#slides[_ngcontent-%COMP%] {\n  justify-content: center;\n  margin-bottom: 20px;\n  max-height: 0px;\n  overflow: hidden;\n  transition: max-height 300ms;\n}\n#slides[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%] {\n  max-height: 200px;\n  margin: 10px 20px;\n  border: 4px solid #00abca;\n  border-radius: 4px;\n  box-shadow: #6b6b60 3px 3px;\n  cursor: pointer;\n}\n#slides[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]:not(:disabled):hover {\n  transform: scale(0.95);\n}\n#slides[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]:not(:disabled):hover {\n  opacity: 0.5;\n}\n#slides.open[_ngcontent-%COMP%] {\n  max-height: 2000px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Jvb3Rlci9Qcm9qZWN0cy9Qb3J0Zm9saW8vb2xkLWpha3ViLXdpc25pb3dza2kuZ2l0aHViLmlvL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZ2FsbGVyeS9nYWxsZXJ5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9nYWxsZXJ5L2dhbGxlcnkuY29tcG9uZW50LnNjc3MiLCIvaG9tZS9yb290ZXIvUHJvamVjdHMvUG9ydGZvbGlvL29sZC1qYWt1Yi13aXNuaW93c2tpLmdpdGh1Yi5pby9zcmMvc3R5bGVzL19taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNDLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtBQ0REO0FERUM7RUFDQyxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDRyxrQkFBQTtFQUNILDJCQUFBO0VBQ0EsZUFBQTtBQ0FGO0FDYkk7RUFDSSxzQkFBQTtBRGVSO0FDVEk7RUFDSSxZQUZ1QjtBRGEvQjtBREZDO0VBQ0Msa0JBQUE7QUNJRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2dhbGxlcnkvZ2FsbGVyeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uLy4uL3N0eWxlcy9taXhpbnMnO1xuXG4jc2xpZGVzIHtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdG1hcmdpbi1ib3R0b206IDIwcHg7XG5cdG1heC1oZWlnaHQ6IDBweDtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0dHJhbnNpdGlvbjogbWF4LWhlaWdodCAzMDBtcztcblx0LnNsaWRlIHtcblx0XHRtYXgtaGVpZ2h0OiAyMDBweDtcblx0XHRtYXJnaW46IDEwcHggMjBweDtcblx0XHRib3JkZXI6IDRweCBzb2xpZCAjMDBhYmNhO1xuICAgIFx0Ym9yZGVyLXJhZGl1czogNHB4O1xuXHRcdGJveC1zaGFkb3c6IHJnYigxMDcsIDEwNywgOTYpIDNweCAzcHg7XG5cdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdEBpbmNsdWRlIGhvdmVyLXNjYWxlKCk7XG5cdFx0QGluY2x1ZGUgaG92ZXItb3BhY2l0eSgpO1xuXHR9XG5cdCYub3BlbiB7XG5cdFx0bWF4LWhlaWdodDogMjAwMHB4O1xuXHR9XG59IiwiI3NsaWRlcyB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBtYXgtaGVpZ2h0OiAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMzAwbXM7XG59XG4jc2xpZGVzIC5zbGlkZSB7XG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xuICBtYXJnaW46IDEwcHggMjBweDtcbiAgYm9yZGVyOiA0cHggc29saWQgIzAwYWJjYTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiAjNmI2YjYwIDNweCAzcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiNzbGlkZXMgLnNsaWRlOm5vdCg6ZGlzYWJsZWQpOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcbn1cbiNzbGlkZXMgLnNsaWRlOm5vdCg6ZGlzYWJsZWQpOmhvdmVyIHtcbiAgb3BhY2l0eTogMC41O1xufVxuI3NsaWRlcy5vcGVuIHtcbiAgbWF4LWhlaWdodDogMjAwMHB4O1xufSIsIkBtaXhpbiBob3Zlci1zY2FsZSgkc2NhbGU6IDAuOTUpIHtcbiAgICAmOm5vdCg6ZGlzYWJsZWQpOmhvdmVyIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgkc2NhbGUpO1xuICAgIH1cbn1cblxuXG5AbWl4aW4gaG92ZXItb3BhY2l0eSgkb3BhY2l0eTogMC41KSB7XG4gICAgJjpub3QoOmRpc2FibGVkKTpob3ZlciB7XG4gICAgICAgIG9wYWNpdHk6ICRvcGFjaXR5O1xuICAgIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GalleryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-gallery",
          templateUrl: "./gallery.component.html",
          styleUrls: ["./gallery.component.scss"]
        }]
      }], function () {
        return [{
          type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"]
        }];
      }, {
        slides: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/github-button/github-button.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/shared/components/github-button/github-button.component.ts ***!
    \****************************************************************************/

  /*! exports provided: GithubButtonComponent */

  /***/
  function srcAppSharedComponentsGithubButtonGithubButtonComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GithubButtonComponent", function () {
      return GithubButtonComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var GithubButtonComponent = function GithubButtonComponent() {
      _classCallCheck(this, GithubButtonComponent);
    };

    GithubButtonComponent.ɵfac = function GithubButtonComponent_Factory(t) {
      return new (t || GithubButtonComponent)();
    };

    GithubButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GithubButtonComponent,
      selectors: [["app-github-button"]],
      inputs: {
        repo: "repo"
      },
      decls: 6,
      vars: 1,
      consts: [[1, "github"], [1, "row", "align-items-center", "justify-content-center"], ["target", "-blank", 1, "border-link"], ["src", "assets/images/icons/github.png", "aria-hidden", "true", 1, "icon"], [1, "lh-52"]],
      template: function GithubButtonComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "See code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("href", ctx.repo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      },
      styles: [".border-link[_ngcontent-%COMP%] {\n  position: relative;\n}\n.border-link[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: -10px;\n  bottom: -10px;\n  left: 0;\n  right: 0;\n  transition: transform ease-out 250ms;\n  border-top: 2px solid #474507;\n  border-bottom: 2px solid #474507;\n  transform: scale(0, 1);\n}\n.border-link[_ngcontent-%COMP%]:hover::before, .border-link[_ngcontent-%COMP%]:focus::before {\n  transform: scale(1, 1);\n}\n.border-link[_ngcontent-%COMP%]:focus {\n  outline: none;\n  color: black;\n  text-decoration: none;\n}\n.content-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0;\n  min-height: 100vh;\n}\n.fs-16[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.lh-16[_ngcontent-%COMP%] {\n  line-height: 16px;\n}\n.fs-17[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n.lh-17[_ngcontent-%COMP%] {\n  line-height: 17px;\n}\n.fs-18[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.lh-18[_ngcontent-%COMP%] {\n  line-height: 18px;\n}\n.fs-19[_ngcontent-%COMP%] {\n  font-size: 19px;\n}\n.lh-19[_ngcontent-%COMP%] {\n  line-height: 19px;\n}\n.fs-20[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.lh-20[_ngcontent-%COMP%] {\n  line-height: 20px;\n}\n.fs-21[_ngcontent-%COMP%] {\n  font-size: 21px;\n}\n.lh-21[_ngcontent-%COMP%] {\n  line-height: 21px;\n}\n.fs-22[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n.lh-22[_ngcontent-%COMP%] {\n  line-height: 22px;\n}\n.fs-23[_ngcontent-%COMP%] {\n  font-size: 23px;\n}\n.lh-23[_ngcontent-%COMP%] {\n  line-height: 23px;\n}\n.fs-24[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.lh-24[_ngcontent-%COMP%] {\n  line-height: 24px;\n}\n.fs-25[_ngcontent-%COMP%] {\n  font-size: 25px;\n}\n.lh-25[_ngcontent-%COMP%] {\n  line-height: 25px;\n}\n.fs-26[_ngcontent-%COMP%] {\n  font-size: 26px;\n}\n.lh-26[_ngcontent-%COMP%] {\n  line-height: 26px;\n}\n.fs-27[_ngcontent-%COMP%] {\n  font-size: 27px;\n}\n.lh-27[_ngcontent-%COMP%] {\n  line-height: 27px;\n}\n.fs-28[_ngcontent-%COMP%] {\n  font-size: 28px;\n}\n.lh-28[_ngcontent-%COMP%] {\n  line-height: 28px;\n}\n.fs-29[_ngcontent-%COMP%] {\n  font-size: 29px;\n}\n.lh-29[_ngcontent-%COMP%] {\n  line-height: 29px;\n}\n.fs-30[_ngcontent-%COMP%] {\n  font-size: 30px;\n}\n.lh-30[_ngcontent-%COMP%] {\n  line-height: 30px;\n}\n.fs-31[_ngcontent-%COMP%] {\n  font-size: 31px;\n}\n.lh-31[_ngcontent-%COMP%] {\n  line-height: 31px;\n}\n.fs-32[_ngcontent-%COMP%] {\n  font-size: 32px;\n}\n.lh-32[_ngcontent-%COMP%] {\n  line-height: 32px;\n}\n.fs-33[_ngcontent-%COMP%] {\n  font-size: 33px;\n}\n.lh-33[_ngcontent-%COMP%] {\n  line-height: 33px;\n}\n.fs-34[_ngcontent-%COMP%] {\n  font-size: 34px;\n}\n.lh-34[_ngcontent-%COMP%] {\n  line-height: 34px;\n}\n.fs-35[_ngcontent-%COMP%] {\n  font-size: 35px;\n}\n.lh-35[_ngcontent-%COMP%] {\n  line-height: 35px;\n}\n.fs-36[_ngcontent-%COMP%] {\n  font-size: 36px;\n}\n.lh-36[_ngcontent-%COMP%] {\n  line-height: 36px;\n}\n.fs-37[_ngcontent-%COMP%] {\n  font-size: 37px;\n}\n.lh-37[_ngcontent-%COMP%] {\n  line-height: 37px;\n}\n.fs-38[_ngcontent-%COMP%] {\n  font-size: 38px;\n}\n.lh-38[_ngcontent-%COMP%] {\n  line-height: 38px;\n}\n.fs-39[_ngcontent-%COMP%] {\n  font-size: 39px;\n}\n.lh-39[_ngcontent-%COMP%] {\n  line-height: 39px;\n}\n.fs-40[_ngcontent-%COMP%] {\n  font-size: 40px;\n}\n.lh-40[_ngcontent-%COMP%] {\n  line-height: 40px;\n}\n.fs-41[_ngcontent-%COMP%] {\n  font-size: 41px;\n}\n.lh-41[_ngcontent-%COMP%] {\n  line-height: 41px;\n}\n.fs-42[_ngcontent-%COMP%] {\n  font-size: 42px;\n}\n.lh-42[_ngcontent-%COMP%] {\n  line-height: 42px;\n}\n.fs-43[_ngcontent-%COMP%] {\n  font-size: 43px;\n}\n.lh-43[_ngcontent-%COMP%] {\n  line-height: 43px;\n}\n.fs-44[_ngcontent-%COMP%] {\n  font-size: 44px;\n}\n.lh-44[_ngcontent-%COMP%] {\n  line-height: 44px;\n}\n.fs-45[_ngcontent-%COMP%] {\n  font-size: 45px;\n}\n.lh-45[_ngcontent-%COMP%] {\n  line-height: 45px;\n}\n.fs-46[_ngcontent-%COMP%] {\n  font-size: 46px;\n}\n.lh-46[_ngcontent-%COMP%] {\n  line-height: 46px;\n}\n.fs-47[_ngcontent-%COMP%] {\n  font-size: 47px;\n}\n.lh-47[_ngcontent-%COMP%] {\n  line-height: 47px;\n}\n.fs-48[_ngcontent-%COMP%] {\n  font-size: 48px;\n}\n.lh-48[_ngcontent-%COMP%] {\n  line-height: 48px;\n}\n.fs-49[_ngcontent-%COMP%] {\n  font-size: 49px;\n}\n.lh-49[_ngcontent-%COMP%] {\n  line-height: 49px;\n}\n.fs-50[_ngcontent-%COMP%] {\n  font-size: 50px;\n}\n.lh-50[_ngcontent-%COMP%] {\n  line-height: 50px;\n}\n.fs-51[_ngcontent-%COMP%] {\n  font-size: 51px;\n}\n.lh-51[_ngcontent-%COMP%] {\n  line-height: 51px;\n}\n.fs-52[_ngcontent-%COMP%] {\n  font-size: 52px;\n}\n.lh-52[_ngcontent-%COMP%] {\n  line-height: 52px;\n}\n.fs-53[_ngcontent-%COMP%] {\n  font-size: 53px;\n}\n.lh-53[_ngcontent-%COMP%] {\n  line-height: 53px;\n}\n.fs-54[_ngcontent-%COMP%] {\n  font-size: 54px;\n}\n.lh-54[_ngcontent-%COMP%] {\n  line-height: 54px;\n}\n.fs-55[_ngcontent-%COMP%] {\n  font-size: 55px;\n}\n.lh-55[_ngcontent-%COMP%] {\n  line-height: 55px;\n}\n.fs-56[_ngcontent-%COMP%] {\n  font-size: 56px;\n}\n.lh-56[_ngcontent-%COMP%] {\n  line-height: 56px;\n}\n.fs-57[_ngcontent-%COMP%] {\n  font-size: 57px;\n}\n.lh-57[_ngcontent-%COMP%] {\n  line-height: 57px;\n}\n.fs-58[_ngcontent-%COMP%] {\n  font-size: 58px;\n}\n.lh-58[_ngcontent-%COMP%] {\n  line-height: 58px;\n}\n.fs-59[_ngcontent-%COMP%] {\n  font-size: 59px;\n}\n.lh-59[_ngcontent-%COMP%] {\n  line-height: 59px;\n}\n.fs-60[_ngcontent-%COMP%] {\n  font-size: 60px;\n}\n.lh-60[_ngcontent-%COMP%] {\n  line-height: 60px;\n}\n.fs-61[_ngcontent-%COMP%] {\n  font-size: 61px;\n}\n.lh-61[_ngcontent-%COMP%] {\n  line-height: 61px;\n}\n.fs-62[_ngcontent-%COMP%] {\n  font-size: 62px;\n}\n.lh-62[_ngcontent-%COMP%] {\n  line-height: 62px;\n}\n.fs-63[_ngcontent-%COMP%] {\n  font-size: 63px;\n}\n.lh-63[_ngcontent-%COMP%] {\n  line-height: 63px;\n}\n.fs-64[_ngcontent-%COMP%] {\n  font-size: 64px;\n}\n.lh-64[_ngcontent-%COMP%] {\n  line-height: 64px;\n}\n.fs-65[_ngcontent-%COMP%] {\n  font-size: 65px;\n}\n.lh-65[_ngcontent-%COMP%] {\n  line-height: 65px;\n}\n.fs-66[_ngcontent-%COMP%] {\n  font-size: 66px;\n}\n.lh-66[_ngcontent-%COMP%] {\n  line-height: 66px;\n}\n.fs-67[_ngcontent-%COMP%] {\n  font-size: 67px;\n}\n.lh-67[_ngcontent-%COMP%] {\n  line-height: 67px;\n}\n.fs-68[_ngcontent-%COMP%] {\n  font-size: 68px;\n}\n.lh-68[_ngcontent-%COMP%] {\n  line-height: 68px;\n}\n.fs-69[_ngcontent-%COMP%] {\n  font-size: 69px;\n}\n.lh-69[_ngcontent-%COMP%] {\n  line-height: 69px;\n}\n.fs-70[_ngcontent-%COMP%] {\n  font-size: 70px;\n}\n.lh-70[_ngcontent-%COMP%] {\n  line-height: 70px;\n}\n.fs-71[_ngcontent-%COMP%] {\n  font-size: 71px;\n}\n.lh-71[_ngcontent-%COMP%] {\n  line-height: 71px;\n}\n.fs-72[_ngcontent-%COMP%] {\n  font-size: 72px;\n}\n.lh-72[_ngcontent-%COMP%] {\n  line-height: 72px;\n}\n.fs-73[_ngcontent-%COMP%] {\n  font-size: 73px;\n}\n.lh-73[_ngcontent-%COMP%] {\n  line-height: 73px;\n}\n.fs-74[_ngcontent-%COMP%] {\n  font-size: 74px;\n}\n.lh-74[_ngcontent-%COMP%] {\n  line-height: 74px;\n}\n.fs-75[_ngcontent-%COMP%] {\n  font-size: 75px;\n}\n.lh-75[_ngcontent-%COMP%] {\n  line-height: 75px;\n}\n.fs-76[_ngcontent-%COMP%] {\n  font-size: 76px;\n}\n.lh-76[_ngcontent-%COMP%] {\n  line-height: 76px;\n}\n.fs-77[_ngcontent-%COMP%] {\n  font-size: 77px;\n}\n.lh-77[_ngcontent-%COMP%] {\n  line-height: 77px;\n}\n.fs-78[_ngcontent-%COMP%] {\n  font-size: 78px;\n}\n.lh-78[_ngcontent-%COMP%] {\n  line-height: 78px;\n}\n.fs-79[_ngcontent-%COMP%] {\n  font-size: 79px;\n}\n.lh-79[_ngcontent-%COMP%] {\n  line-height: 79px;\n}\n.fs-80[_ngcontent-%COMP%] {\n  font-size: 80px;\n}\n.lh-80[_ngcontent-%COMP%] {\n  line-height: 80px;\n}\n.fs-81[_ngcontent-%COMP%] {\n  font-size: 81px;\n}\n.lh-81[_ngcontent-%COMP%] {\n  line-height: 81px;\n}\n.fs-82[_ngcontent-%COMP%] {\n  font-size: 82px;\n}\n.lh-82[_ngcontent-%COMP%] {\n  line-height: 82px;\n}\n.fs-83[_ngcontent-%COMP%] {\n  font-size: 83px;\n}\n.lh-83[_ngcontent-%COMP%] {\n  line-height: 83px;\n}\n.fs-84[_ngcontent-%COMP%] {\n  font-size: 84px;\n}\n.lh-84[_ngcontent-%COMP%] {\n  line-height: 84px;\n}\n.fs-85[_ngcontent-%COMP%] {\n  font-size: 85px;\n}\n.lh-85[_ngcontent-%COMP%] {\n  line-height: 85px;\n}\n.fs-86[_ngcontent-%COMP%] {\n  font-size: 86px;\n}\n.lh-86[_ngcontent-%COMP%] {\n  line-height: 86px;\n}\n.fs-87[_ngcontent-%COMP%] {\n  font-size: 87px;\n}\n.lh-87[_ngcontent-%COMP%] {\n  line-height: 87px;\n}\n.fs-88[_ngcontent-%COMP%] {\n  font-size: 88px;\n}\n.lh-88[_ngcontent-%COMP%] {\n  line-height: 88px;\n}\n.fs-89[_ngcontent-%COMP%] {\n  font-size: 89px;\n}\n.lh-89[_ngcontent-%COMP%] {\n  line-height: 89px;\n}\n.fs-90[_ngcontent-%COMP%] {\n  font-size: 90px;\n}\n.lh-90[_ngcontent-%COMP%] {\n  line-height: 90px;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: absolute;\n  top: 0;\n  opacity: 0.8;\n  background: #00abca;\n  z-index: 1;\n  width: 100%;\n}\n.page-header[_ngcontent-%COMP%]   .hamburger-menu[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  position: fixed;\n  top: 10px;\n  right: 10px;\n  cursor: pointer;\n  background-size: cover;\n}\n@media only screen and (min-width: 650px) {\n  .page-header[_ngcontent-%COMP%]   .hamburger-menu[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.page-header[_ngcontent-%COMP%]   .navigation-small[_ngcontent-%COMP%] {\n  text-align: center;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  background-color: #00abca;\n  height: 100vh;\n  width: 250px;\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\n  z-index: 1;\n  opacity: 0.99;\n  transition: right 0.5s ease-in;\n}\n.page-header[_ngcontent-%COMP%]   .navigation-small.collapsed[_ngcontent-%COMP%] {\n  right: -250px;\n}\n.page-header[_ngcontent-%COMP%]   .navigation-small[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 60px 0 0 0;\n  margin-bottom: 0;\n}\n.page-header[_ngcontent-%COMP%]   .navigation-small[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 120%;\n}\n.page-header[_ngcontent-%COMP%]   .navigation-small[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background: #f9f871;\n}\n.page-header[_ngcontent-%COMP%]   .navigation-small[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\n  color: #00abca;\n}\n.page-header[_ngcontent-%COMP%]   .navigation-small[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  color: white;\n  padding: 15px 5px;\n}\n@media only screen and (min-width: 650px) {\n  .page-header[_ngcontent-%COMP%]   .navigation-small[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.page-header[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: center;\n  padding: 30px 0;\n  margin-bottom: 0;\n}\n.page-header[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 30%;\n}\n.page-header[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  position: relative;\n}\n.page-header[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: white;\n}\n@media only screen and (max-width: 650px) {\n  .page-header[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.section-header[_ngcontent-%COMP%] {\n  color: white;\n  position: relative;\n  text-transform: uppercase;\n  display: inline-block;\n  white-space: nowrap;\n  width: 100%;\n  text-align: center;\n  margin: 0;\n  height: 100px;\n  line-height: 100px;\n  font-size: 34px;\n  font-weight: bold;\n}\n.section-header[_ngcontent-%COMP%]::after, .section-header[_ngcontent-%COMP%]::before {\n  content: \"\";\n  height: 100%;\n  position: absolute;\n  display: block;\n  width: 100%;\n  top: 0;\n}\n.section-header[_ngcontent-%COMP%]::before {\n  z-index: -2;\n  background-color: white;\n}\n.section-header[_ngcontent-%COMP%]::after {\n  z-index: -1;\n  background-color: #00abca;\n}\nsection[_ngcontent-%COMP%] {\n  clear: both;\n  text-align: center;\n}\nsection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  max-width: 90%;\n  margin: 0 auto;\n}\nsection[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 30px;\n}\n.row[_ngcontent-%COMP%] {\n  padding: 6px 0;\n}\n.row[_ngcontent-%COMP%]   .img-wrapper[_ngcontent-%COMP%] {\n  width: 50%;\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Jvb3Rlci9Qcm9qZWN0cy9Qb3J0Zm9saW8vb2xkLWpha3ViLXdpc25pb3dza2kuZ2l0aHViLmlvL3NyYy9zdHlsZXMvX2JvcmRlci1saW5rLnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2dpdGh1Yi1idXR0b24vZ2l0aHViLWJ1dHRvbi5jb21wb25lbnQuc2NzcyIsIi9ob21lL3Jvb3Rlci9Qcm9qZWN0cy9Qb3J0Zm9saW8vb2xkLWpha3ViLXdpc25pb3dza2kuZ2l0aHViLmlvL3NyYy9zdHlsZXMvX2NvbnRlbnQtd3JhcHBlci5zY3NzIiwiL2hvbWUvcm9vdGVyL1Byb2plY3RzL1BvcnRmb2xpby9vbGQtamFrdWItd2lzbmlvd3NraS5naXRodWIuaW8vc3JjL3N0eWxlcy9faGVscGVycy5zY3NzIiwiL2hvbWUvcm9vdGVyL1Byb2plY3RzL1BvcnRmb2xpby9vbGQtamFrdWItd2lzbmlvd3NraS5naXRodWIuaW8vc3JjL3N0eWxlcy9fcGFnZS1oZWFkZXIuc2NzcyIsIi9ob21lL3Jvb3Rlci9Qcm9qZWN0cy9Qb3J0Zm9saW8vb2xkLWpha3ViLXdpc25pb3dza2kuZ2l0aHViLmlvL3NyYy9zdHlsZXMvX2NvbG9ycy5zY3NzIiwiL2hvbWUvcm9vdGVyL1Byb2plY3RzL1BvcnRmb2xpby9vbGQtamFrdWItd2lzbmlvd3NraS5naXRodWIuaW8vc3JjL3N0eWxlcy9fc2VjdGlvbi1oZWFkZXIuc2NzcyIsIi9ob21lL3Jvb3Rlci9Qcm9qZWN0cy9Qb3J0Zm9saW8vb2xkLWpha3ViLXdpc25pb3dza2kuZ2l0aHViLmlvL3NyYy9zdHlsZXMvX3NlY3Rpb24uc2NzcyIsIi9ob21lL3Jvb3Rlci9Qcm9qZWN0cy9Qb3J0Zm9saW8vb2xkLWpha3ViLXdpc25pb3dza2kuZ2l0aHViLmlvL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZ2l0aHViLWJ1dHRvbi9naXRodWItYnV0dG9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksa0JBQUE7QUNESjtBREVJO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLG9DQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQ0FBQTtFQUNBLHNCQUFBO0FDQU47QURHSTtFQUVFLHNCQUFBO0FDRk47QURLSTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUNITjtBQ3RCQTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUR5QkY7QUUzQkk7RUFDSSxlQUFBO0FGOEJSO0FFM0JJO0VBQ0ksaUJBQUE7QUY4QlI7QUVuQ0k7RUFDSSxlQUFBO0FGc0NSO0FFbkNJO0VBQ0ksaUJBQUE7QUZzQ1I7QUUzQ0k7RUFDSSxlQUFBO0FGOENSO0FFM0NJO0VBQ0ksaUJBQUE7QUY4Q1I7QUVuREk7RUFDSSxlQUFBO0FGc0RSO0FFbkRJO0VBQ0ksaUJBQUE7QUZzRFI7QUUzREk7RUFDSSxlQUFBO0FGOERSO0FFM0RJO0VBQ0ksaUJBQUE7QUY4RFI7QUVuRUk7RUFDSSxlQUFBO0FGc0VSO0FFbkVJO0VBQ0ksaUJBQUE7QUZzRVI7QUUzRUk7RUFDSSxlQUFBO0FGOEVSO0FFM0VJO0VBQ0ksaUJBQUE7QUY4RVI7QUVuRkk7RUFDSSxlQUFBO0FGc0ZSO0FFbkZJO0VBQ0ksaUJBQUE7QUZzRlI7QUUzRkk7RUFDSSxlQUFBO0FGOEZSO0FFM0ZJO0VBQ0ksaUJBQUE7QUY4RlI7QUVuR0k7RUFDSSxlQUFBO0FGc0dSO0FFbkdJO0VBQ0ksaUJBQUE7QUZzR1I7QUUzR0k7RUFDSSxlQUFBO0FGOEdSO0FFM0dJO0VBQ0ksaUJBQUE7QUY4R1I7QUVuSEk7RUFDSSxlQUFBO0FGc0hSO0FFbkhJO0VBQ0ksaUJBQUE7QUZzSFI7QUUzSEk7RUFDSSxlQUFBO0FGOEhSO0FFM0hJO0VBQ0ksaUJBQUE7QUY4SFI7QUVuSUk7RUFDSSxlQUFBO0FGc0lSO0FFbklJO0VBQ0ksaUJBQUE7QUZzSVI7QUUzSUk7RUFDSSxlQUFBO0FGOElSO0FFM0lJO0VBQ0ksaUJBQUE7QUY4SVI7QUVuSkk7RUFDSSxlQUFBO0FGc0pSO0FFbkpJO0VBQ0ksaUJBQUE7QUZzSlI7QUUzSkk7RUFDSSxlQUFBO0FGOEpSO0FFM0pJO0VBQ0ksaUJBQUE7QUY4SlI7QUVuS0k7RUFDSSxlQUFBO0FGc0tSO0FFbktJO0VBQ0ksaUJBQUE7QUZzS1I7QUUzS0k7RUFDSSxlQUFBO0FGOEtSO0FFM0tJO0VBQ0ksaUJBQUE7QUY4S1I7QUVuTEk7RUFDSSxlQUFBO0FGc0xSO0FFbkxJO0VBQ0ksaUJBQUE7QUZzTFI7QUUzTEk7RUFDSSxlQUFBO0FGOExSO0FFM0xJO0VBQ0ksaUJBQUE7QUY4TFI7QUVuTUk7RUFDSSxlQUFBO0FGc01SO0FFbk1JO0VBQ0ksaUJBQUE7QUZzTVI7QUUzTUk7RUFDSSxlQUFBO0FGOE1SO0FFM01JO0VBQ0ksaUJBQUE7QUY4TVI7QUVuTkk7RUFDSSxlQUFBO0FGc05SO0FFbk5JO0VBQ0ksaUJBQUE7QUZzTlI7QUUzTkk7RUFDSSxlQUFBO0FGOE5SO0FFM05JO0VBQ0ksaUJBQUE7QUY4TlI7QUVuT0k7RUFDSSxlQUFBO0FGc09SO0FFbk9JO0VBQ0ksaUJBQUE7QUZzT1I7QUUzT0k7RUFDSSxlQUFBO0FGOE9SO0FFM09JO0VBQ0ksaUJBQUE7QUY4T1I7QUVuUEk7RUFDSSxlQUFBO0FGc1BSO0FFblBJO0VBQ0ksaUJBQUE7QUZzUFI7QUUzUEk7RUFDSSxlQUFBO0FGOFBSO0FFM1BJO0VBQ0ksaUJBQUE7QUY4UFI7QUVuUUk7RUFDSSxlQUFBO0FGc1FSO0FFblFJO0VBQ0ksaUJBQUE7QUZzUVI7QUUzUUk7RUFDSSxlQUFBO0FGOFFSO0FFM1FJO0VBQ0ksaUJBQUE7QUY4UVI7QUVuUkk7RUFDSSxlQUFBO0FGc1JSO0FFblJJO0VBQ0ksaUJBQUE7QUZzUlI7QUUzUkk7RUFDSSxlQUFBO0FGOFJSO0FFM1JJO0VBQ0ksaUJBQUE7QUY4UlI7QUVuU0k7RUFDSSxlQUFBO0FGc1NSO0FFblNJO0VBQ0ksaUJBQUE7QUZzU1I7QUUzU0k7RUFDSSxlQUFBO0FGOFNSO0FFM1NJO0VBQ0ksaUJBQUE7QUY4U1I7QUVuVEk7RUFDSSxlQUFBO0FGc1RSO0FFblRJO0VBQ0ksaUJBQUE7QUZzVFI7QUUzVEk7RUFDSSxlQUFBO0FGOFRSO0FFM1RJO0VBQ0ksaUJBQUE7QUY4VFI7QUVuVUk7RUFDSSxlQUFBO0FGc1VSO0FFblVJO0VBQ0ksaUJBQUE7QUZzVVI7QUUzVUk7RUFDSSxlQUFBO0FGOFVSO0FFM1VJO0VBQ0ksaUJBQUE7QUY4VVI7QUVuVkk7RUFDSSxlQUFBO0FGc1ZSO0FFblZJO0VBQ0ksaUJBQUE7QUZzVlI7QUUzVkk7RUFDSSxlQUFBO0FGOFZSO0FFM1ZJO0VBQ0ksaUJBQUE7QUY4VlI7QUVuV0k7RUFDSSxlQUFBO0FGc1dSO0FFbldJO0VBQ0ksaUJBQUE7QUZzV1I7QUUzV0k7RUFDSSxlQUFBO0FGOFdSO0FFM1dJO0VBQ0ksaUJBQUE7QUY4V1I7QUVuWEk7RUFDSSxlQUFBO0FGc1hSO0FFblhJO0VBQ0ksaUJBQUE7QUZzWFI7QUUzWEk7RUFDSSxlQUFBO0FGOFhSO0FFM1hJO0VBQ0ksaUJBQUE7QUY4WFI7QUVuWUk7RUFDSSxlQUFBO0FGc1lSO0FFbllJO0VBQ0ksaUJBQUE7QUZzWVI7QUUzWUk7RUFDSSxlQUFBO0FGOFlSO0FFM1lJO0VBQ0ksaUJBQUE7QUY4WVI7QUVuWkk7RUFDSSxlQUFBO0FGc1pSO0FFblpJO0VBQ0ksaUJBQUE7QUZzWlI7QUUzWkk7RUFDSSxlQUFBO0FGOFpSO0FFM1pJO0VBQ0ksaUJBQUE7QUY4WlI7QUVuYUk7RUFDSSxlQUFBO0FGc2FSO0FFbmFJO0VBQ0ksaUJBQUE7QUZzYVI7QUUzYUk7RUFDSSxlQUFBO0FGOGFSO0FFM2FJO0VBQ0ksaUJBQUE7QUY4YVI7QUVuYkk7RUFDSSxlQUFBO0FGc2JSO0FFbmJJO0VBQ0ksaUJBQUE7QUZzYlI7QUUzYkk7RUFDSSxlQUFBO0FGOGJSO0FFM2JJO0VBQ0ksaUJBQUE7QUY4YlI7QUVuY0k7RUFDSSxlQUFBO0FGc2NSO0FFbmNJO0VBQ0ksaUJBQUE7QUZzY1I7QUUzY0k7RUFDSSxlQUFBO0FGOGNSO0FFM2NJO0VBQ0ksaUJBQUE7QUY4Y1I7QUVuZEk7RUFDSSxlQUFBO0FGc2RSO0FFbmRJO0VBQ0ksaUJBQUE7QUZzZFI7QUUzZEk7RUFDSSxlQUFBO0FGOGRSO0FFM2RJO0VBQ0ksaUJBQUE7QUY4ZFI7QUVuZUk7RUFDSSxlQUFBO0FGc2VSO0FFbmVJO0VBQ0ksaUJBQUE7QUZzZVI7QUUzZUk7RUFDSSxlQUFBO0FGOGVSO0FFM2VJO0VBQ0ksaUJBQUE7QUY4ZVI7QUVuZkk7RUFDSSxlQUFBO0FGc2ZSO0FFbmZJO0VBQ0ksaUJBQUE7QUZzZlI7QUUzZkk7RUFDSSxlQUFBO0FGOGZSO0FFM2ZJO0VBQ0ksaUJBQUE7QUY4ZlI7QUVuZ0JJO0VBQ0ksZUFBQTtBRnNnQlI7QUVuZ0JJO0VBQ0ksaUJBQUE7QUZzZ0JSO0FFM2dCSTtFQUNJLGVBQUE7QUY4Z0JSO0FFM2dCSTtFQUNJLGlCQUFBO0FGOGdCUjtBRW5oQkk7RUFDSSxlQUFBO0FGc2hCUjtBRW5oQkk7RUFDSSxpQkFBQTtBRnNoQlI7QUUzaEJJO0VBQ0ksZUFBQTtBRjhoQlI7QUUzaEJJO0VBQ0ksaUJBQUE7QUY4aEJSO0FFbmlCSTtFQUNJLGVBQUE7QUZzaUJSO0FFbmlCSTtFQUNJLGlCQUFBO0FGc2lCUjtBRTNpQkk7RUFDSSxlQUFBO0FGOGlCUjtBRTNpQkk7RUFDSSxpQkFBQTtBRjhpQlI7QUVuakJJO0VBQ0ksZUFBQTtBRnNqQlI7QUVuakJJO0VBQ0ksaUJBQUE7QUZzakJSO0FFM2pCSTtFQUNJLGVBQUE7QUY4akJSO0FFM2pCSTtFQUNJLGlCQUFBO0FGOGpCUjtBRW5rQkk7RUFDSSxlQUFBO0FGc2tCUjtBRW5rQkk7RUFDSSxpQkFBQTtBRnNrQlI7QUUza0JJO0VBQ0ksZUFBQTtBRjhrQlI7QUUza0JJO0VBQ0ksaUJBQUE7QUY4a0JSO0FFbmxCSTtFQUNJLGVBQUE7QUZzbEJSO0FFbmxCSTtFQUNJLGlCQUFBO0FGc2xCUjtBRTNsQkk7RUFDSSxlQUFBO0FGOGxCUjtBRTNsQkk7RUFDSSxpQkFBQTtBRjhsQlI7QUVubUJJO0VBQ0ksZUFBQTtBRnNtQlI7QUVubUJJO0VBQ0ksaUJBQUE7QUZzbUJSO0FFM21CSTtFQUNJLGVBQUE7QUY4bUJSO0FFM21CSTtFQUNJLGlCQUFBO0FGOG1CUjtBR2xuQkE7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7RUFDQSxtQkNQRztFRFFILFVBQUE7RUFDQSxXQUFBO0FIcW5CSjtBR25uQkk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBSHFuQk47QUdwbkJNO0VBUkY7SUFTSSxhQUFBO0VIdW5CTjtBQUNGO0FHcG5CSTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLHlCQzlCQztFRCtCRCxhQUFBO0VBQ0EsWUFBQTtFQUNBLDJDQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBSHNuQk47QUdwbkJNO0VBQ0UsYUFBQTtBSHNuQlI7QUdubkJNO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FIcW5CUjtBR25uQlE7RUFDRSxlQUFBO0FIcW5CVjtBR25uQlU7RUFDRSxtQkNqREg7QUpzcUJUO0FHcG5CWTtFQUNFLGNDckRQO0FKMnFCUDtBR2xuQlU7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FIb25CWjtBRy9tQk07RUF6Q0Y7SUEwQ0ksYUFBQTtFSGtuQk47QUFDRjtBRy9tQkk7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FIaW5CTjtBRy9tQk07RUFDRSxxQkFBQTtFQUNBLFVBQUE7QUhpbkJSO0FHL21CUTtFQUNFLGtCQUFBO0FIaW5CVjtBR2huQlU7RUFDRSxZQUFBO0FIa25CWjtBRzdtQk07RUFsQkY7SUFtQkksYUFBQTtFSGduQk47QUFDRjtBSzFzQkE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FMNnNCSjtBSzNzQkk7RUFFRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxNQUFBO0FMNHNCTjtBS3pzQkk7RUFDRSxXQUFBO0VBQ0EsdUJBQUE7QUwyc0JOO0FLeHNCSTtFQUNFLFdBQUE7RUFDQSx5QkQvQkM7QUp5dUJQO0FNenVCQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBTjR1Qko7QU0xdUJJO0VBQ0UsY0FBQTtFQUNBLGNBQUE7QU40dUJOO0FNMXVCSTtFQUNFLGVBQUE7QU40dUJOO0FPcHZCQTtFQUNJLGNBQUE7QVB1dkJKO0FPdHZCSTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtBUHd2QlIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9naXRodWItYnV0dG9uL2dpdGh1Yi1idXR0b24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuL2NvbG9ycyc7XG5cbi5ib3JkZXItbGluayB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICY6OmJlZm9yZSB7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAtMTBweDtcbiAgICAgIGJvdHRvbTogLTEwcHg7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gZWFzZS1vdXQgMjUwbXM7XG4gICAgICBib3JkZXItdG9wOiAycHggc29saWQgJGxpZ2h0LWdyZXk7XG4gICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJGxpZ2h0LWdyZXk7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDAsIDEpO1xuICAgIH1cbiAgXG4gICAgJjpob3Zlcjo6YmVmb3JlLFxuICAgICY6Zm9jdXM6OmJlZm9yZSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xuICAgIH1cbiAgXG4gICAgJjpmb2N1cyB7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIH1cbiAgfSIsIi5ib3JkZXItbGluayB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5ib3JkZXItbGluazo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0xMHB4O1xuICBib3R0b206IC0xMHB4O1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIGVhc2Utb3V0IDI1MG1zO1xuICBib3JkZXItdG9wOiAycHggc29saWQgIzQ3NDUwNztcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM0NzQ1MDc7XG4gIHRyYW5zZm9ybTogc2NhbGUoMCwgMSk7XG59XG4uYm9yZGVyLWxpbms6aG92ZXI6OmJlZm9yZSwgLmJvcmRlci1saW5rOmZvY3VzOjpiZWZvcmUge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xufVxuLmJvcmRlci1saW5rOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5jb250ZW50LXdyYXBwZXIge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMDtcbiAgbWluLWhlaWdodDogMTAwdmg7XG59XG5cbi5mcy0xNiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmxoLTE2IHtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG59XG5cbi5mcy0xNyB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cblxuLmxoLTE3IHtcbiAgbGluZS1oZWlnaHQ6IDE3cHg7XG59XG5cbi5mcy0xOCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmxoLTE4IHtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG59XG5cbi5mcy0xOSB7XG4gIGZvbnQtc2l6ZTogMTlweDtcbn1cblxuLmxoLTE5IHtcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XG59XG5cbi5mcy0yMCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmxoLTIwIHtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG5cbi5mcy0yMSB7XG4gIGZvbnQtc2l6ZTogMjFweDtcbn1cblxuLmxoLTIxIHtcbiAgbGluZS1oZWlnaHQ6IDIxcHg7XG59XG5cbi5mcy0yMiB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cblxuLmxoLTIyIHtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG59XG5cbi5mcy0yMyB7XG4gIGZvbnQtc2l6ZTogMjNweDtcbn1cblxuLmxoLTIzIHtcbiAgbGluZS1oZWlnaHQ6IDIzcHg7XG59XG5cbi5mcy0yNCB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuLmxoLTI0IHtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG59XG5cbi5mcy0yNSB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuLmxoLTI1IHtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG59XG5cbi5mcy0yNiB7XG4gIGZvbnQtc2l6ZTogMjZweDtcbn1cblxuLmxoLTI2IHtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbi5mcy0yNyB7XG4gIGZvbnQtc2l6ZTogMjdweDtcbn1cblxuLmxoLTI3IHtcbiAgbGluZS1oZWlnaHQ6IDI3cHg7XG59XG5cbi5mcy0yOCB7XG4gIGZvbnQtc2l6ZTogMjhweDtcbn1cblxuLmxoLTI4IHtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG59XG5cbi5mcy0yOSB7XG4gIGZvbnQtc2l6ZTogMjlweDtcbn1cblxuLmxoLTI5IHtcbiAgbGluZS1oZWlnaHQ6IDI5cHg7XG59XG5cbi5mcy0zMCB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuLmxoLTMwIHtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG59XG5cbi5mcy0zMSB7XG4gIGZvbnQtc2l6ZTogMzFweDtcbn1cblxuLmxoLTMxIHtcbiAgbGluZS1oZWlnaHQ6IDMxcHg7XG59XG5cbi5mcy0zMiB7XG4gIGZvbnQtc2l6ZTogMzJweDtcbn1cblxuLmxoLTMyIHtcbiAgbGluZS1oZWlnaHQ6IDMycHg7XG59XG5cbi5mcy0zMyB7XG4gIGZvbnQtc2l6ZTogMzNweDtcbn1cblxuLmxoLTMzIHtcbiAgbGluZS1oZWlnaHQ6IDMzcHg7XG59XG5cbi5mcy0zNCB7XG4gIGZvbnQtc2l6ZTogMzRweDtcbn1cblxuLmxoLTM0IHtcbiAgbGluZS1oZWlnaHQ6IDM0cHg7XG59XG5cbi5mcy0zNSB7XG4gIGZvbnQtc2l6ZTogMzVweDtcbn1cblxuLmxoLTM1IHtcbiAgbGluZS1oZWlnaHQ6IDM1cHg7XG59XG5cbi5mcy0zNiB7XG4gIGZvbnQtc2l6ZTogMzZweDtcbn1cblxuLmxoLTM2IHtcbiAgbGluZS1oZWlnaHQ6IDM2cHg7XG59XG5cbi5mcy0zNyB7XG4gIGZvbnQtc2l6ZTogMzdweDtcbn1cblxuLmxoLTM3IHtcbiAgbGluZS1oZWlnaHQ6IDM3cHg7XG59XG5cbi5mcy0zOCB7XG4gIGZvbnQtc2l6ZTogMzhweDtcbn1cblxuLmxoLTM4IHtcbiAgbGluZS1oZWlnaHQ6IDM4cHg7XG59XG5cbi5mcy0zOSB7XG4gIGZvbnQtc2l6ZTogMzlweDtcbn1cblxuLmxoLTM5IHtcbiAgbGluZS1oZWlnaHQ6IDM5cHg7XG59XG5cbi5mcy00MCB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbn1cblxuLmxoLTQwIHtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG59XG5cbi5mcy00MSB7XG4gIGZvbnQtc2l6ZTogNDFweDtcbn1cblxuLmxoLTQxIHtcbiAgbGluZS1oZWlnaHQ6IDQxcHg7XG59XG5cbi5mcy00MiB7XG4gIGZvbnQtc2l6ZTogNDJweDtcbn1cblxuLmxoLTQyIHtcbiAgbGluZS1oZWlnaHQ6IDQycHg7XG59XG5cbi5mcy00MyB7XG4gIGZvbnQtc2l6ZTogNDNweDtcbn1cblxuLmxoLTQzIHtcbiAgbGluZS1oZWlnaHQ6IDQzcHg7XG59XG5cbi5mcy00NCB7XG4gIGZvbnQtc2l6ZTogNDRweDtcbn1cblxuLmxoLTQ0IHtcbiAgbGluZS1oZWlnaHQ6IDQ0cHg7XG59XG5cbi5mcy00NSB7XG4gIGZvbnQtc2l6ZTogNDVweDtcbn1cblxuLmxoLTQ1IHtcbiAgbGluZS1oZWlnaHQ6IDQ1cHg7XG59XG5cbi5mcy00NiB7XG4gIGZvbnQtc2l6ZTogNDZweDtcbn1cblxuLmxoLTQ2IHtcbiAgbGluZS1oZWlnaHQ6IDQ2cHg7XG59XG5cbi5mcy00NyB7XG4gIGZvbnQtc2l6ZTogNDdweDtcbn1cblxuLmxoLTQ3IHtcbiAgbGluZS1oZWlnaHQ6IDQ3cHg7XG59XG5cbi5mcy00OCB7XG4gIGZvbnQtc2l6ZTogNDhweDtcbn1cblxuLmxoLTQ4IHtcbiAgbGluZS1oZWlnaHQ6IDQ4cHg7XG59XG5cbi5mcy00OSB7XG4gIGZvbnQtc2l6ZTogNDlweDtcbn1cblxuLmxoLTQ5IHtcbiAgbGluZS1oZWlnaHQ6IDQ5cHg7XG59XG5cbi5mcy01MCB7XG4gIGZvbnQtc2l6ZTogNTBweDtcbn1cblxuLmxoLTUwIHtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG59XG5cbi5mcy01MSB7XG4gIGZvbnQtc2l6ZTogNTFweDtcbn1cblxuLmxoLTUxIHtcbiAgbGluZS1oZWlnaHQ6IDUxcHg7XG59XG5cbi5mcy01MiB7XG4gIGZvbnQtc2l6ZTogNTJweDtcbn1cblxuLmxoLTUyIHtcbiAgbGluZS1oZWlnaHQ6IDUycHg7XG59XG5cbi5mcy01MyB7XG4gIGZvbnQtc2l6ZTogNTNweDtcbn1cblxuLmxoLTUzIHtcbiAgbGluZS1oZWlnaHQ6IDUzcHg7XG59XG5cbi5mcy01NCB7XG4gIGZvbnQtc2l6ZTogNTRweDtcbn1cblxuLmxoLTU0IHtcbiAgbGluZS1oZWlnaHQ6IDU0cHg7XG59XG5cbi5mcy01NSB7XG4gIGZvbnQtc2l6ZTogNTVweDtcbn1cblxuLmxoLTU1IHtcbiAgbGluZS1oZWlnaHQ6IDU1cHg7XG59XG5cbi5mcy01NiB7XG4gIGZvbnQtc2l6ZTogNTZweDtcbn1cblxuLmxoLTU2IHtcbiAgbGluZS1oZWlnaHQ6IDU2cHg7XG59XG5cbi5mcy01NyB7XG4gIGZvbnQtc2l6ZTogNTdweDtcbn1cblxuLmxoLTU3IHtcbiAgbGluZS1oZWlnaHQ6IDU3cHg7XG59XG5cbi5mcy01OCB7XG4gIGZvbnQtc2l6ZTogNThweDtcbn1cblxuLmxoLTU4IHtcbiAgbGluZS1oZWlnaHQ6IDU4cHg7XG59XG5cbi5mcy01OSB7XG4gIGZvbnQtc2l6ZTogNTlweDtcbn1cblxuLmxoLTU5IHtcbiAgbGluZS1oZWlnaHQ6IDU5cHg7XG59XG5cbi5mcy02MCB7XG4gIGZvbnQtc2l6ZTogNjBweDtcbn1cblxuLmxoLTYwIHtcbiAgbGluZS1oZWlnaHQ6IDYwcHg7XG59XG5cbi5mcy02MSB7XG4gIGZvbnQtc2l6ZTogNjFweDtcbn1cblxuLmxoLTYxIHtcbiAgbGluZS1oZWlnaHQ6IDYxcHg7XG59XG5cbi5mcy02MiB7XG4gIGZvbnQtc2l6ZTogNjJweDtcbn1cblxuLmxoLTYyIHtcbiAgbGluZS1oZWlnaHQ6IDYycHg7XG59XG5cbi5mcy02MyB7XG4gIGZvbnQtc2l6ZTogNjNweDtcbn1cblxuLmxoLTYzIHtcbiAgbGluZS1oZWlnaHQ6IDYzcHg7XG59XG5cbi5mcy02NCB7XG4gIGZvbnQtc2l6ZTogNjRweDtcbn1cblxuLmxoLTY0IHtcbiAgbGluZS1oZWlnaHQ6IDY0cHg7XG59XG5cbi5mcy02NSB7XG4gIGZvbnQtc2l6ZTogNjVweDtcbn1cblxuLmxoLTY1IHtcbiAgbGluZS1oZWlnaHQ6IDY1cHg7XG59XG5cbi5mcy02NiB7XG4gIGZvbnQtc2l6ZTogNjZweDtcbn1cblxuLmxoLTY2IHtcbiAgbGluZS1oZWlnaHQ6IDY2cHg7XG59XG5cbi5mcy02NyB7XG4gIGZvbnQtc2l6ZTogNjdweDtcbn1cblxuLmxoLTY3IHtcbiAgbGluZS1oZWlnaHQ6IDY3cHg7XG59XG5cbi5mcy02OCB7XG4gIGZvbnQtc2l6ZTogNjhweDtcbn1cblxuLmxoLTY4IHtcbiAgbGluZS1oZWlnaHQ6IDY4cHg7XG59XG5cbi5mcy02OSB7XG4gIGZvbnQtc2l6ZTogNjlweDtcbn1cblxuLmxoLTY5IHtcbiAgbGluZS1oZWlnaHQ6IDY5cHg7XG59XG5cbi5mcy03MCB7XG4gIGZvbnQtc2l6ZTogNzBweDtcbn1cblxuLmxoLTcwIHtcbiAgbGluZS1oZWlnaHQ6IDcwcHg7XG59XG5cbi5mcy03MSB7XG4gIGZvbnQtc2l6ZTogNzFweDtcbn1cblxuLmxoLTcxIHtcbiAgbGluZS1oZWlnaHQ6IDcxcHg7XG59XG5cbi5mcy03MiB7XG4gIGZvbnQtc2l6ZTogNzJweDtcbn1cblxuLmxoLTcyIHtcbiAgbGluZS1oZWlnaHQ6IDcycHg7XG59XG5cbi5mcy03MyB7XG4gIGZvbnQtc2l6ZTogNzNweDtcbn1cblxuLmxoLTczIHtcbiAgbGluZS1oZWlnaHQ6IDczcHg7XG59XG5cbi5mcy03NCB7XG4gIGZvbnQtc2l6ZTogNzRweDtcbn1cblxuLmxoLTc0IHtcbiAgbGluZS1oZWlnaHQ6IDc0cHg7XG59XG5cbi5mcy03NSB7XG4gIGZvbnQtc2l6ZTogNzVweDtcbn1cblxuLmxoLTc1IHtcbiAgbGluZS1oZWlnaHQ6IDc1cHg7XG59XG5cbi5mcy03NiB7XG4gIGZvbnQtc2l6ZTogNzZweDtcbn1cblxuLmxoLTc2IHtcbiAgbGluZS1oZWlnaHQ6IDc2cHg7XG59XG5cbi5mcy03NyB7XG4gIGZvbnQtc2l6ZTogNzdweDtcbn1cblxuLmxoLTc3IHtcbiAgbGluZS1oZWlnaHQ6IDc3cHg7XG59XG5cbi5mcy03OCB7XG4gIGZvbnQtc2l6ZTogNzhweDtcbn1cblxuLmxoLTc4IHtcbiAgbGluZS1oZWlnaHQ6IDc4cHg7XG59XG5cbi5mcy03OSB7XG4gIGZvbnQtc2l6ZTogNzlweDtcbn1cblxuLmxoLTc5IHtcbiAgbGluZS1oZWlnaHQ6IDc5cHg7XG59XG5cbi5mcy04MCB7XG4gIGZvbnQtc2l6ZTogODBweDtcbn1cblxuLmxoLTgwIHtcbiAgbGluZS1oZWlnaHQ6IDgwcHg7XG59XG5cbi5mcy04MSB7XG4gIGZvbnQtc2l6ZTogODFweDtcbn1cblxuLmxoLTgxIHtcbiAgbGluZS1oZWlnaHQ6IDgxcHg7XG59XG5cbi5mcy04MiB7XG4gIGZvbnQtc2l6ZTogODJweDtcbn1cblxuLmxoLTgyIHtcbiAgbGluZS1oZWlnaHQ6IDgycHg7XG59XG5cbi5mcy04MyB7XG4gIGZvbnQtc2l6ZTogODNweDtcbn1cblxuLmxoLTgzIHtcbiAgbGluZS1oZWlnaHQ6IDgzcHg7XG59XG5cbi5mcy04NCB7XG4gIGZvbnQtc2l6ZTogODRweDtcbn1cblxuLmxoLTg0IHtcbiAgbGluZS1oZWlnaHQ6IDg0cHg7XG59XG5cbi5mcy04NSB7XG4gIGZvbnQtc2l6ZTogODVweDtcbn1cblxuLmxoLTg1IHtcbiAgbGluZS1oZWlnaHQ6IDg1cHg7XG59XG5cbi5mcy04NiB7XG4gIGZvbnQtc2l6ZTogODZweDtcbn1cblxuLmxoLTg2IHtcbiAgbGluZS1oZWlnaHQ6IDg2cHg7XG59XG5cbi5mcy04NyB7XG4gIGZvbnQtc2l6ZTogODdweDtcbn1cblxuLmxoLTg3IHtcbiAgbGluZS1oZWlnaHQ6IDg3cHg7XG59XG5cbi5mcy04OCB7XG4gIGZvbnQtc2l6ZTogODhweDtcbn1cblxuLmxoLTg4IHtcbiAgbGluZS1oZWlnaHQ6IDg4cHg7XG59XG5cbi5mcy04OSB7XG4gIGZvbnQtc2l6ZTogODlweDtcbn1cblxuLmxoLTg5IHtcbiAgbGluZS1oZWlnaHQ6IDg5cHg7XG59XG5cbi5mcy05MCB7XG4gIGZvbnQtc2l6ZTogOTBweDtcbn1cblxuLmxoLTkwIHtcbiAgbGluZS1oZWlnaHQ6IDkwcHg7XG59XG5cbi5wYWdlLWhlYWRlciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIG9wYWNpdHk6IDAuODtcbiAgYmFja2dyb3VuZDogIzAwYWJjYTtcbiAgei1pbmRleDogMTtcbiAgd2lkdGg6IDEwMCU7XG59XG4ucGFnZS1oZWFkZXIgLmhhbWJ1cmdlci1tZW51IHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDEwcHg7XG4gIHJpZ2h0OiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY1MHB4KSB7XG4gIC5wYWdlLWhlYWRlciAuaGFtYnVyZ2VyLW1lbnUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbi5wYWdlLWhlYWRlciAubmF2aWdhdGlvbi1zbWFsbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGFiY2E7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAyNTBweDtcbiAgYm94LXNoYWRvdzogMCA4cHggMTZweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgei1pbmRleDogMTtcbiAgb3BhY2l0eTogMC45OTtcbiAgdHJhbnNpdGlvbjogcmlnaHQgMC41cyBlYXNlLWluO1xufVxuLnBhZ2UtaGVhZGVyIC5uYXZpZ2F0aW9uLXNtYWxsLmNvbGxhcHNlZCB7XG4gIHJpZ2h0OiAtMjUwcHg7XG59XG4ucGFnZS1oZWFkZXIgLm5hdmlnYXRpb24tc21hbGwgdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiA2MHB4IDAgMCAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLnBhZ2UtaGVhZGVyIC5uYXZpZ2F0aW9uLXNtYWxsIHVsIGxpIHtcbiAgZm9udC1zaXplOiAxMjAlO1xufVxuLnBhZ2UtaGVhZGVyIC5uYXZpZ2F0aW9uLXNtYWxsIHVsIGxpOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2Y5Zjg3MTtcbn1cbi5wYWdlLWhlYWRlciAubmF2aWdhdGlvbi1zbWFsbCB1bCBsaTpob3ZlciBhIHtcbiAgY29sb3I6ICMwMGFiY2E7XG59XG4ucGFnZS1oZWFkZXIgLm5hdmlnYXRpb24tc21hbGwgdWwgbGkgYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDE1cHggNXB4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NTBweCkge1xuICAucGFnZS1oZWFkZXIgLm5hdmlnYXRpb24tc21hbGwge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbi5wYWdlLWhlYWRlciAubmF2aWdhdGlvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAzMHB4IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4ucGFnZS1oZWFkZXIgLm5hdmlnYXRpb24gbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAzMCU7XG59XG4ucGFnZS1oZWFkZXIgLm5hdmlnYXRpb24gbGkgYSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5wYWdlLWhlYWRlciAubmF2aWdhdGlvbiBsaSBhOmhvdmVyIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xuICAucGFnZS1oZWFkZXIgLm5hdmlnYXRpb24ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuLnNlY3Rpb24taGVhZGVyIHtcbiAgY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwO1xuICBoZWlnaHQ6IDEwMHB4O1xuICBsaW5lLWhlaWdodDogMTAwcHg7XG4gIGZvbnQtc2l6ZTogMzRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uc2VjdGlvbi1oZWFkZXI6OmFmdGVyLCAuc2VjdGlvbi1oZWFkZXI6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogMDtcbn1cbi5zZWN0aW9uLWhlYWRlcjo6YmVmb3JlIHtcbiAgei1pbmRleDogLTI7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLnNlY3Rpb24taGVhZGVyOjphZnRlciB7XG4gIHotaW5kZXg6IC0xO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhYmNhO1xufVxuXG5zZWN0aW9uIHtcbiAgY2xlYXI6IGJvdGg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbnNlY3Rpb24gLmNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogOTAlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbnNlY3Rpb24gaDMge1xuICBmb250LXNpemU6IDMwcHg7XG59XG5cbi5yb3cge1xuICBwYWRkaW5nOiA2cHggMDtcbn1cbi5yb3cgLmltZy13cmFwcGVyIHtcbiAgd2lkdGg6IDUwJTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59IiwiLmNvbnRlbnQtd3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbn0iLCJAZm9yICRpIGZyb20gMTYgdGhyb3VnaCA5MCB7XG4gICAgLmZzLSN7JGl9IHtcbiAgICAgICAgZm9udC1zaXplOiAkaSAqIDFweDtcbiAgICB9XG5cbiAgICAubGgtI3skaX0ge1xuICAgICAgICBsaW5lLWhlaWdodDogJGkgKiAxcHg7XG4gICAgfVxufSIsIkBpbXBvcnQgXCIuL3ZhcmlhYmxlc1wiO1xuXG4ucGFnZS1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIG9wYWNpdHk6IDAuODtcbiAgICBiYWNrZ3JvdW5kOiAkYmx1ZTtcbiAgICB6LWluZGV4OiAxO1xuICAgIHdpZHRoOiAxMDAlO1xuICBcbiAgICAuaGFtYnVyZ2VyLW1lbnUge1xuICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICB0b3A6IDEwcHg7XG4gICAgICByaWdodDogMTBweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY1MHB4KSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuICBcbiAgICAubmF2aWdhdGlvbi1zbWFsbCB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICB0b3A6IDA7XG4gICAgICBib3R0b206IDA7XG4gICAgICByaWdodDogMDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibHVlO1xuICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICB6LWluZGV4OiAxO1xuICAgICAgb3BhY2l0eTogMC45OTtcbiAgICAgIHRyYW5zaXRpb246IHJpZ2h0IC41cyBlYXNlLWluO1xuXG4gICAgICAmLmNvbGxhcHNlZCB7XG4gICAgICAgIHJpZ2h0OiAtMjUwcHg7XG4gICAgICB9XG4gIFxuICAgICAgdWwge1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICBwYWRkaW5nOiA2MHB4IDAgMCAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICBcbiAgICAgICAgbGkge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTIwJTtcbiAgXG4gICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkeWVsbG93O1xuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgIGNvbG9yOiAkYmx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gIFxuICAgICAgICAgIGEge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDVweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY1MHB4KSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuICBcbiAgICAubmF2aWdhdGlvbiB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiAzMHB4IDA7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICBcbiAgICAgIGxpIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB3aWR0aDogMzAlO1xuICBcbiAgICAgICAgYSB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICBcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gIH0iLCIkYmx1ZTogIzAwYWJjYTtcbiRsaWdodC1ncmV5OiByZ2IoNzEsIDY5LCA3KTtcbiR5ZWxsb3c6ICNmOWY4NzE7XG4iLCIuc2VjdGlvbi1oZWFkZXIge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwO1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDEwMHB4O1xuICAgIGZvbnQtc2l6ZTogMzRweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgXG4gICAgJjo6YWZ0ZXIsXG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgdG9wOiAwO1xuICAgIH1cbiAgXG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIHotaW5kZXg6IC0yO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgfVxuICBcbiAgICAmOjphZnRlciB7XG4gICAgICB6LWluZGV4OiAtMTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibHVlO1xuICAgIH1cbiAgfSIsInNlY3Rpb24ge1xuICAgIGNsZWFyOiBib3RoO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgXG4gICAgLmNvbnRhaW5lciB7XG4gICAgICBtYXgtd2lkdGg6IDkwJTtcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIH1cbiAgICBoMyB7XG4gICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgfVxuICB9IiwiQGltcG9ydCAnfnNyYy9zdHlsZXMvc3R5bGVzJztcbi5yb3cge1xuICAgIHBhZGRpbmc6IDZweCAwO1xuICAgIC5pbWctd3JhcHBlciB7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GithubButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-github-button',
          templateUrl: './github-button.component.html',
          styleUrls: ['./github-button.component.scss']
        }]
      }], null, {
        repo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/show-more-button/show-more-button.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/shared/components/show-more-button/show-more-button.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: ShowMoreButtonComponent */

  /***/
  function srcAppSharedComponentsShowMoreButtonShowMoreButtonComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShowMoreButtonComponent", function () {
      return ShowMoreButtonComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ShowMoreButtonComponent =
    /*#__PURE__*/
    function () {
      function ShowMoreButtonComponent() {
        _classCallCheck(this, ShowMoreButtonComponent);

        this.isHidden = true;
      }

      _createClass(ShowMoreButtonComponent, [{
        key: "toggleDescription",
        value: function toggleDescription() {
          this.isHidden = this.elementRef.classList.contains(this.toggleClass);

          if (this.isHidden) {
            this.elementRef.classList.remove(this.toggleClass);
          } else {
            this.elementRef.classList.add(this.toggleClass);
          }
        }
      }, {
        key: "elementRef",
        get: function get() {
          return document.getElementById(this.elementId);
        }
      }]);

      return ShowMoreButtonComponent;
    }();

    ShowMoreButtonComponent.ɵfac = function ShowMoreButtonComponent_Factory(t) {
      return new (t || ShowMoreButtonComponent)();
    };

    ShowMoreButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ShowMoreButtonComponent,
      selectors: [["app-show-more-button"]],
      inputs: {
        elementId: "elementId",
        toggleClass: "toggleClass"
      },
      decls: 3,
      vars: 1,
      consts: [[1, "button-wrapper"], [1, "border-link", 3, "click"]],
      template: function ShowMoreButtonComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShowMoreButtonComponent_Template_button_click_1_listener() {
            return ctx.toggleDescription();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.isHidden ? "Show gallery" : "Hide gallery");
        }
      },
      styles: [".border-link[_ngcontent-%COMP%] {\n  position: relative;\n}\n.border-link[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: -10px;\n  bottom: -10px;\n  left: 0;\n  right: 0;\n  transition: transform ease-out 250ms;\n  border-top: 2px solid #474507;\n  border-bottom: 2px solid #474507;\n  transform: scale(0, 1);\n}\n.border-link[_ngcontent-%COMP%]:hover::before, .border-link[_ngcontent-%COMP%]:focus::before {\n  transform: scale(1, 1);\n}\n.border-link[_ngcontent-%COMP%]:focus {\n  outline: none;\n  color: black;\n  text-decoration: none;\n}\n.content-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0;\n  min-height: 100vh;\n}\n.fs-16[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.lh-16[_ngcontent-%COMP%] {\n  line-height: 16px;\n}\n.fs-17[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n.lh-17[_ngcontent-%COMP%] {\n  line-height: 17px;\n}\n.fs-18[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.lh-18[_ngcontent-%COMP%] {\n  line-height: 18px;\n}\n.fs-19[_ngcontent-%COMP%] {\n  font-size: 19px;\n}\n.lh-19[_ngcontent-%COMP%] {\n  line-height: 19px;\n}\n.fs-20[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.lh-20[_ngcontent-%COMP%] {\n  line-height: 20px;\n}\n.fs-21[_ngcontent-%COMP%] {\n  font-size: 21px;\n}\n.lh-21[_ngcontent-%COMP%] {\n  line-height: 21px;\n}\n.fs-22[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n.lh-22[_ngcontent-%COMP%] {\n  line-height: 22px;\n}\n.fs-23[_ngcontent-%COMP%] {\n  font-size: 23px;\n}\n.lh-23[_ngcontent-%COMP%] {\n  line-height: 23px;\n}\n.fs-24[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.lh-24[_ngcontent-%COMP%] {\n  line-height: 24px;\n}\n.fs-25[_ngcontent-%COMP%] {\n  font-size: 25px;\n}\n.lh-25[_ngcontent-%COMP%] {\n  line-height: 25px;\n}\n.fs-26[_ngcontent-%COMP%] {\n  font-size: 26px;\n}\n.lh-26[_ngcontent-%COMP%] {\n  line-height: 26px;\n}\n.fs-27[_ngcontent-%COMP%] {\n  font-size: 27px;\n}\n.lh-27[_ngcontent-%COMP%] {\n  line-height: 27px;\n}\n.fs-28[_ngcontent-%COMP%] {\n  font-size: 28px;\n}\n.lh-28[_ngcontent-%COMP%] {\n  line-height: 28px;\n}\n.fs-29[_ngcontent-%COMP%] {\n  font-size: 29px;\n}\n.lh-29[_ngcontent-%COMP%] {\n  line-height: 29px;\n}\n.fs-30[_ngcontent-%COMP%] {\n  font-size: 30px;\n}\n.lh-30[_ngcontent-%COMP%] {\n  line-height: 30px;\n}\n.fs-31[_ngcontent-%COMP%] {\n  font-size: 31px;\n}\n.lh-31[_ngcontent-%COMP%] {\n  line-height: 31px;\n}\n.fs-32[_ngcontent-%COMP%] {\n  font-size: 32px;\n}\n.lh-32[_ngcontent-%COMP%] {\n  line-height: 32px;\n}\n.fs-33[_ngcontent-%COMP%] {\n  font-size: 33px;\n}\n.lh-33[_ngcontent-%COMP%] {\n  line-height: 33px;\n}\n.fs-34[_ngcontent-%COMP%] {\n  font-size: 34px;\n}\n.lh-34[_ngcontent-%COMP%] {\n  line-height: 34px;\n}\n.fs-35[_ngcontent-%COMP%] {\n  font-size: 35px;\n}\n.lh-35[_ngcontent-%COMP%] {\n  line-height: 35px;\n}\n.fs-36[_ngcontent-%COMP%] {\n  font-size: 36px;\n}\n.lh-36[_ngcontent-%COMP%] {\n  line-height: 36px;\n}\n.fs-37[_ngcontent-%COMP%] {\n  font-size: 37px;\n}\n.lh-37[_ngcontent-%COMP%] {\n  line-height: 37px;\n}\n.fs-38[_ngcontent-%COMP%] {\n  font-size: 38px;\n}\n.lh-38[_ngcontent-%COMP%] {\n  line-height: 38px;\n}\n.fs-39[_ngcontent-%COMP%] {\n  font-size: 39px;\n}\n.lh-39[_ngcontent-%COMP%] {\n  line-height: 39px;\n}\n.fs-40[_ngcontent-%COMP%] {\n  font-size: 40px;\n}\n.lh-40[_ngcontent-%COMP%] {\n  line-height: 40px;\n}\n.fs-41[_ngcontent-%COMP%] {\n  font-size: 41px;\n}\n.lh-41[_ngcontent-%COMP%] {\n  line-height: 41px;\n}\n.fs-42[_ngcontent-%COMP%] {\n  font-size: 42px;\n}\n.lh-42[_ngcontent-%COMP%] {\n  line-height: 42px;\n}\n.fs-43[_ngcontent-%COMP%] {\n  font-size: 43px;\n}\n.lh-43[_ngcontent-%COMP%] {\n  line-height: 43px;\n}\n.fs-44[_ngcontent-%COMP%] {\n  font-size: 44px;\n}\n.lh-44[_ngcontent-%COMP%] {\n  line-height: 44px;\n}\n.fs-45[_ngcontent-%COMP%] {\n  font-size: 45px;\n}\n.lh-45[_ngcontent-%COMP%] {\n  line-height: 45px;\n}\n.fs-46[_ngcontent-%COMP%] {\n  font-size: 46px;\n}\n.lh-46[_ngcontent-%COMP%] {\n  line-height: 46px;\n}\n.fs-47[_ngcontent-%COMP%] {\n  font-size: 47px;\n}\n.lh-47[_ngcontent-%COMP%] {\n  line-height: 47px;\n}\n.fs-48[_ngcontent-%COMP%] {\n  font-size: 48px;\n}\n.lh-48[_ngcontent-%COMP%] {\n  line-height: 48px;\n}\n.fs-49[_ngcontent-%COMP%] {\n  font-size: 49px;\n}\n.lh-49[_ngcontent-%COMP%] {\n  line-height: 49px;\n}\n.fs-50[_ngcontent-%COMP%] {\n  font-size: 50px;\n}\n.lh-50[_ngcontent-%COMP%] {\n  line-height: 50px;\n}\n.fs-51[_ngcontent-%COMP%] {\n  font-size: 51px;\n}\n.lh-51[_ngcontent-%COMP%] {\n  line-height: 51px;\n}\n.fs-52[_ngcontent-%COMP%] {\n  font-size: 52px;\n}\n.lh-52[_ngcontent-%COMP%] {\n  line-height: 52px;\n}\n.fs-53[_ngcontent-%COMP%] {\n  font-size: 53px;\n}\n.lh-53[_ngcontent-%COMP%] {\n  line-height: 53px;\n}\n.fs-54[_ngcontent-%COMP%] {\n  font-size: 54px;\n}\n.lh-54[_ngcontent-%COMP%] {\n  line-height: 54px;\n}\n.fs-55[_ngcontent-%COMP%] {\n  font-size: 55px;\n}\n.lh-55[_ngcontent-%COMP%] {\n  line-height: 55px;\n}\n.fs-56[_ngcontent-%COMP%] {\n  font-size: 56px;\n}\n.lh-56[_ngcontent-%COMP%] {\n  line-height: 56px;\n}\n.fs-57[_ngcontent-%COMP%] {\n  font-size: 57px;\n}\n.lh-57[_ngcontent-%COMP%] {\n  line-height: 57px;\n}\n.fs-58[_ngcontent-%COMP%] {\n  font-size: 58px;\n}\n.lh-58[_ngcontent-%COMP%] {\n  line-height: 58px;\n}\n.fs-59[_ngcontent-%COMP%] {\n  font-size: 59px;\n}\n.lh-59[_ngcontent-%COMP%] {\n  line-height: 59px;\n}\n.fs-60[_ngcontent-%COMP%] {\n  font-size: 60px;\n}\n.lh-60[_ngcontent-%COMP%] {\n  line-height: 60px;\n}\n.fs-61[_ngcontent-%COMP%] {\n  font-size: 61px;\n}\n.lh-61[_ngcontent-%COMP%] {\n  line-height: 61px;\n}\n.fs-62[_ngcontent-%COMP%] {\n  font-size: 62px;\n}\n.lh-62[_ngcontent-%COMP%] {\n  line-height: 62px;\n}\n.fs-63[_ngcontent-%COMP%] {\n  font-size: 63px;\n}\n.lh-63[_ngcontent-%COMP%] {\n  line-height: 63px;\n}\n.fs-64[_ngcontent-%COMP%] {\n  font-size: 64px;\n}\n.lh-64[_ngcontent-%COMP%] {\n  line-height: 64px;\n}\n.fs-65[_ngcontent-%COMP%] {\n  font-size: 65px;\n}\n.lh-65[_ngcontent-%COMP%] {\n  line-height: 65px;\n}\n.fs-66[_ngcontent-%COMP%] {\n  font-size: 66px;\n}\n.lh-66[_ngcontent-%COMP%] {\n  line-height: 66px;\n}\n.fs-67[_ngcontent-%COMP%] {\n  font-size: 67px;\n}\n.lh-67[_ngcontent-%COMP%] {\n  line-height: 67px;\n}\n.fs-68[_ngcontent-%COMP%] {\n  font-size: 68px;\n}\n.lh-68[_ngcontent-%COMP%] {\n  line-height: 68px;\n}\n.fs-69[_ngcontent-%COMP%] {\n  font-size: 69px;\n}\n.lh-69[_ngcontent-%COMP%] {\n  line-height: 69px;\n}\n.fs-70[_ngcontent-%COMP%] {\n  font-size: 70px;\n}\n.lh-70[_ngcontent-%COMP%] {\n  line-height: 70px;\n}\n.fs-71[_ngcontent-%COMP%] {\n  font-size: 71px;\n}\n.lh-71[_ngcontent-%COMP%] {\n  line-height: 71px;\n}\n.fs-72[_ngcontent-%COMP%] {\n  font-size: 72px;\n}\n.lh-72[_ngcontent-%COMP%] {\n  line-height: 72px;\n}\n.fs-73[_ngcontent-%COMP%] {\n  font-size: 73px;\n}\n.lh-73[_ngcontent-%COMP%] {\n  line-height: 73px;\n}\n.fs-74[_ngcontent-%COMP%] {\n  font-size: 74px;\n}\n.lh-74[_ngcontent-%COMP%] {\n  line-height: 74px;\n}\n.fs-75[_ngcontent-%COMP%] {\n  font-size: 75px;\n}\n.lh-75[_ngcontent-%COMP%] {\n  line-height: 75px;\n}\n.fs-76[_ngcontent-%COMP%] {\n  font-size: 76px;\n}\n.lh-76[_ngcontent-%COMP%] {\n  line-height: 76px;\n}\n.fs-77[_ngcontent-%COMP%] {\n  font-size: 77px;\n}\n.lh-77[_ngcontent-%COMP%] {\n  line-height: 77px;\n}\n.fs-78[_ngcontent-%COMP%] {\n  font-size: 78px;\n}\n.lh-78[_ngcontent-%COMP%] {\n  line-height: 78px;\n}\n.fs-79[_ngcontent-%COMP%] {\n  font-size: 79px;\n}\n.lh-79[_ngcontent-%COMP%] {\n  line-height: 79px;\n}\n.fs-80[_ngcontent-%COMP%] {\n  font-size: 80px;\n}\n.lh-80[_ngcontent-%COMP%] {\n  line-height: 80px;\n}\n.fs-81[_ngcontent-%COMP%] {\n  font-size: 81px;\n}\n.lh-81[_ngcontent-%COMP%] {\n  line-height: 81px;\n}\n.fs-82[_ngcontent-%COMP%] {\n  font-size: 82px;\n}\n.lh-82[_ngcontent-%COMP%] {\n  line-height: 82px;\n}\n.fs-83[_ngcontent-%COMP%] {\n  font-size: 83px;\n}\n.lh-83[_ngcontent-%COMP%] {\n  line-height: 83px;\n}\n.fs-84[_ngcontent-%COMP%] {\n  font-size: 84px;\n}\n.lh-84[_ngcontent-%COMP%] {\n  line-height: 84px;\n}\n.fs-85[_ngcontent-%COMP%] {\n  font-size: 85px;\n}\n.lh-85[_ngcontent-%COMP%] {\n  line-height: 85px;\n}\n.fs-86[_ngcontent-%COMP%] {\n  font-size: 86px;\n}\n.lh-86[_ngcontent-%COMP%] {\n  line-height: 86px;\n}\n.fs-87[_ngcontent-%COMP%] {\n  font-size: 87px;\n}\n.lh-87[_ngcontent-%COMP%] {\n  line-height: 87px;\n}\n.fs-88[_ngcontent-%COMP%] {\n  font-size: 88px;\n}\n.lh-88[_ngcontent-%COMP%] {\n  line-height: 88px;\n}\n.fs-89[_ngcontent-%COMP%] {\n  font-size: 89px;\n}\n.lh-89[_ngcontent-%COMP%] {\n  line-height: 89px;\n}\n.fs-90[_ngcontent-%COMP%] {\n  font-size: 90px;\n}\n.lh-90[_ngcontent-%COMP%] {\n  line-height: 90px;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: absolute;\n  top: 0;\n  opacity: 0.8;\n  background: #00abca;\n  z-index: 1;\n  width: 100%;\n}\n.page-header[_ngcontent-%COMP%]   .hamburger-menu[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  position: fixed;\n  top: 10px;\n  right: 10px;\n  cursor: pointer;\n  background-size: cover;\n}\n@media only screen and (min-width: 650px) {\n  .page-header[_ngcontent-%COMP%]   .hamburger-menu[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.page-header[_ngcontent-%COMP%]   .navigation-small[_ngcontent-%COMP%] {\n  text-align: center;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  background-color: #00abca;\n  height: 100vh;\n  width: 250px;\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\n  z-index: 1;\n  opacity: 0.99;\n  transition: right 0.5s ease-in;\n}\n.page-header[_ngcontent-%COMP%]   .navigation-small.collapsed[_ngcontent-%COMP%] {\n  right: -250px;\n}\n.page-header[_ngcontent-%COMP%]   .navigation-small[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 60px 0 0 0;\n  margin-bottom: 0;\n}\n.page-header[_ngcontent-%COMP%]   .navigation-small[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 120%;\n}\n.page-header[_ngcontent-%COMP%]   .navigation-small[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background: #f9f871;\n}\n.page-header[_ngcontent-%COMP%]   .navigation-small[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\n  color: #00abca;\n}\n.page-header[_ngcontent-%COMP%]   .navigation-small[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  color: white;\n  padding: 15px 5px;\n}\n@media only screen and (min-width: 650px) {\n  .page-header[_ngcontent-%COMP%]   .navigation-small[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.page-header[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: center;\n  padding: 30px 0;\n  margin-bottom: 0;\n}\n.page-header[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 30%;\n}\n.page-header[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  position: relative;\n}\n.page-header[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: white;\n}\n@media only screen and (max-width: 650px) {\n  .page-header[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.section-header[_ngcontent-%COMP%] {\n  color: white;\n  position: relative;\n  text-transform: uppercase;\n  display: inline-block;\n  white-space: nowrap;\n  width: 100%;\n  text-align: center;\n  margin: 0;\n  height: 100px;\n  line-height: 100px;\n  font-size: 34px;\n  font-weight: bold;\n}\n.section-header[_ngcontent-%COMP%]::after, .section-header[_ngcontent-%COMP%]::before {\n  content: \"\";\n  height: 100%;\n  position: absolute;\n  display: block;\n  width: 100%;\n  top: 0;\n}\n.section-header[_ngcontent-%COMP%]::before {\n  z-index: -2;\n  background-color: white;\n}\n.section-header[_ngcontent-%COMP%]::after {\n  z-index: -1;\n  background-color: #00abca;\n}\nsection[_ngcontent-%COMP%] {\n  clear: both;\n  text-align: center;\n}\nsection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  max-width: 90%;\n  margin: 0 auto;\n}\nsection[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 30px;\n}\n.button-wrapper[_ngcontent-%COMP%] {\n  font-size: 24px;\n  padding: 20px;\n  text-align: center;\n}\n.button-wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 0;\n  background: none;\n}\n.button-wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.button-wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:not(:disabled):hover {\n  transform: scale(0.95);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Jvb3Rlci9Qcm9qZWN0cy9Qb3J0Zm9saW8vb2xkLWpha3ViLXdpc25pb3dza2kuZ2l0aHViLmlvL3NyYy9zdHlsZXMvX2JvcmRlci1saW5rLnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3Nob3ctbW9yZS1idXR0b24vc2hvdy1tb3JlLWJ1dHRvbi5jb21wb25lbnQuc2NzcyIsIi9ob21lL3Jvb3Rlci9Qcm9qZWN0cy9Qb3J0Zm9saW8vb2xkLWpha3ViLXdpc25pb3dza2kuZ2l0aHViLmlvL3NyYy9zdHlsZXMvX2NvbnRlbnQtd3JhcHBlci5zY3NzIiwiL2hvbWUvcm9vdGVyL1Byb2plY3RzL1BvcnRmb2xpby9vbGQtamFrdWItd2lzbmlvd3NraS5naXRodWIuaW8vc3JjL3N0eWxlcy9faGVscGVycy5zY3NzIiwiL2hvbWUvcm9vdGVyL1Byb2plY3RzL1BvcnRmb2xpby9vbGQtamFrdWItd2lzbmlvd3NraS5naXRodWIuaW8vc3JjL3N0eWxlcy9fcGFnZS1oZWFkZXIuc2NzcyIsIi9ob21lL3Jvb3Rlci9Qcm9qZWN0cy9Qb3J0Zm9saW8vb2xkLWpha3ViLXdpc25pb3dza2kuZ2l0aHViLmlvL3NyYy9zdHlsZXMvX2NvbG9ycy5zY3NzIiwiL2hvbWUvcm9vdGVyL1Byb2plY3RzL1BvcnRmb2xpby9vbGQtamFrdWItd2lzbmlvd3NraS5naXRodWIuaW8vc3JjL3N0eWxlcy9fc2VjdGlvbi1oZWFkZXIuc2NzcyIsIi9ob21lL3Jvb3Rlci9Qcm9qZWN0cy9Qb3J0Zm9saW8vb2xkLWpha3ViLXdpc25pb3dza2kuZ2l0aHViLmlvL3NyYy9zdHlsZXMvX3NlY3Rpb24uc2NzcyIsIi9ob21lL3Jvb3Rlci9Qcm9qZWN0cy9Qb3J0Zm9saW8vb2xkLWpha3ViLXdpc25pb3dza2kuZ2l0aHViLmlvL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc2hvdy1tb3JlLWJ1dHRvbi9zaG93LW1vcmUtYnV0dG9uLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvcm9vdGVyL1Byb2plY3RzL1BvcnRmb2xpby9vbGQtamFrdWItd2lzbmlvd3NraS5naXRodWIuaW8vc3JjL3N0eWxlcy9fbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxrQkFBQTtBQ0RKO0FERUk7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0Esb0NBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0VBQ0Esc0JBQUE7QUNBTjtBREdJO0VBRUUsc0JBQUE7QUNGTjtBREtJO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQ0hOO0FDdEJBO0VBQ0UsV0FBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtBRHlCRjtBRTNCSTtFQUNJLGVBQUE7QUY4QlI7QUUzQkk7RUFDSSxpQkFBQTtBRjhCUjtBRW5DSTtFQUNJLGVBQUE7QUZzQ1I7QUVuQ0k7RUFDSSxpQkFBQTtBRnNDUjtBRTNDSTtFQUNJLGVBQUE7QUY4Q1I7QUUzQ0k7RUFDSSxpQkFBQTtBRjhDUjtBRW5ESTtFQUNJLGVBQUE7QUZzRFI7QUVuREk7RUFDSSxpQkFBQTtBRnNEUjtBRTNESTtFQUNJLGVBQUE7QUY4RFI7QUUzREk7RUFDSSxpQkFBQTtBRjhEUjtBRW5FSTtFQUNJLGVBQUE7QUZzRVI7QUVuRUk7RUFDSSxpQkFBQTtBRnNFUjtBRTNFSTtFQUNJLGVBQUE7QUY4RVI7QUUzRUk7RUFDSSxpQkFBQTtBRjhFUjtBRW5GSTtFQUNJLGVBQUE7QUZzRlI7QUVuRkk7RUFDSSxpQkFBQTtBRnNGUjtBRTNGSTtFQUNJLGVBQUE7QUY4RlI7QUUzRkk7RUFDSSxpQkFBQTtBRjhGUjtBRW5HSTtFQUNJLGVBQUE7QUZzR1I7QUVuR0k7RUFDSSxpQkFBQTtBRnNHUjtBRTNHSTtFQUNJLGVBQUE7QUY4R1I7QUUzR0k7RUFDSSxpQkFBQTtBRjhHUjtBRW5ISTtFQUNJLGVBQUE7QUZzSFI7QUVuSEk7RUFDSSxpQkFBQTtBRnNIUjtBRTNISTtFQUNJLGVBQUE7QUY4SFI7QUUzSEk7RUFDSSxpQkFBQTtBRjhIUjtBRW5JSTtFQUNJLGVBQUE7QUZzSVI7QUVuSUk7RUFDSSxpQkFBQTtBRnNJUjtBRTNJSTtFQUNJLGVBQUE7QUY4SVI7QUUzSUk7RUFDSSxpQkFBQTtBRjhJUjtBRW5KSTtFQUNJLGVBQUE7QUZzSlI7QUVuSkk7RUFDSSxpQkFBQTtBRnNKUjtBRTNKSTtFQUNJLGVBQUE7QUY4SlI7QUUzSkk7RUFDSSxpQkFBQTtBRjhKUjtBRW5LSTtFQUNJLGVBQUE7QUZzS1I7QUVuS0k7RUFDSSxpQkFBQTtBRnNLUjtBRTNLSTtFQUNJLGVBQUE7QUY4S1I7QUUzS0k7RUFDSSxpQkFBQTtBRjhLUjtBRW5MSTtFQUNJLGVBQUE7QUZzTFI7QUVuTEk7RUFDSSxpQkFBQTtBRnNMUjtBRTNMSTtFQUNJLGVBQUE7QUY4TFI7QUUzTEk7RUFDSSxpQkFBQTtBRjhMUjtBRW5NSTtFQUNJLGVBQUE7QUZzTVI7QUVuTUk7RUFDSSxpQkFBQTtBRnNNUjtBRTNNSTtFQUNJLGVBQUE7QUY4TVI7QUUzTUk7RUFDSSxpQkFBQTtBRjhNUjtBRW5OSTtFQUNJLGVBQUE7QUZzTlI7QUVuTkk7RUFDSSxpQkFBQTtBRnNOUjtBRTNOSTtFQUNJLGVBQUE7QUY4TlI7QUUzTkk7RUFDSSxpQkFBQTtBRjhOUjtBRW5PSTtFQUNJLGVBQUE7QUZzT1I7QUVuT0k7RUFDSSxpQkFBQTtBRnNPUjtBRTNPSTtFQUNJLGVBQUE7QUY4T1I7QUUzT0k7RUFDSSxpQkFBQTtBRjhPUjtBRW5QSTtFQUNJLGVBQUE7QUZzUFI7QUVuUEk7RUFDSSxpQkFBQTtBRnNQUjtBRTNQSTtFQUNJLGVBQUE7QUY4UFI7QUUzUEk7RUFDSSxpQkFBQTtBRjhQUjtBRW5RSTtFQUNJLGVBQUE7QUZzUVI7QUVuUUk7RUFDSSxpQkFBQTtBRnNRUjtBRTNRSTtFQUNJLGVBQUE7QUY4UVI7QUUzUUk7RUFDSSxpQkFBQTtBRjhRUjtBRW5SSTtFQUNJLGVBQUE7QUZzUlI7QUVuUkk7RUFDSSxpQkFBQTtBRnNSUjtBRTNSSTtFQUNJLGVBQUE7QUY4UlI7QUUzUkk7RUFDSSxpQkFBQTtBRjhSUjtBRW5TSTtFQUNJLGVBQUE7QUZzU1I7QUVuU0k7RUFDSSxpQkFBQTtBRnNTUjtBRTNTSTtFQUNJLGVBQUE7QUY4U1I7QUUzU0k7RUFDSSxpQkFBQTtBRjhTUjtBRW5USTtFQUNJLGVBQUE7QUZzVFI7QUVuVEk7RUFDSSxpQkFBQTtBRnNUUjtBRTNUSTtFQUNJLGVBQUE7QUY4VFI7QUUzVEk7RUFDSSxpQkFBQTtBRjhUUjtBRW5VSTtFQUNJLGVBQUE7QUZzVVI7QUVuVUk7RUFDSSxpQkFBQTtBRnNVUjtBRTNVSTtFQUNJLGVBQUE7QUY4VVI7QUUzVUk7RUFDSSxpQkFBQTtBRjhVUjtBRW5WSTtFQUNJLGVBQUE7QUZzVlI7QUVuVkk7RUFDSSxpQkFBQTtBRnNWUjtBRTNWSTtFQUNJLGVBQUE7QUY4VlI7QUUzVkk7RUFDSSxpQkFBQTtBRjhWUjtBRW5XSTtFQUNJLGVBQUE7QUZzV1I7QUVuV0k7RUFDSSxpQkFBQTtBRnNXUjtBRTNXSTtFQUNJLGVBQUE7QUY4V1I7QUUzV0k7RUFDSSxpQkFBQTtBRjhXUjtBRW5YSTtFQUNJLGVBQUE7QUZzWFI7QUVuWEk7RUFDSSxpQkFBQTtBRnNYUjtBRTNYSTtFQUNJLGVBQUE7QUY4WFI7QUUzWEk7RUFDSSxpQkFBQTtBRjhYUjtBRW5ZSTtFQUNJLGVBQUE7QUZzWVI7QUVuWUk7RUFDSSxpQkFBQTtBRnNZUjtBRTNZSTtFQUNJLGVBQUE7QUY4WVI7QUUzWUk7RUFDSSxpQkFBQTtBRjhZUjtBRW5aSTtFQUNJLGVBQUE7QUZzWlI7QUVuWkk7RUFDSSxpQkFBQTtBRnNaUjtBRTNaSTtFQUNJLGVBQUE7QUY4WlI7QUUzWkk7RUFDSSxpQkFBQTtBRjhaUjtBRW5hSTtFQUNJLGVBQUE7QUZzYVI7QUVuYUk7RUFDSSxpQkFBQTtBRnNhUjtBRTNhSTtFQUNJLGVBQUE7QUY4YVI7QUUzYUk7RUFDSSxpQkFBQTtBRjhhUjtBRW5iSTtFQUNJLGVBQUE7QUZzYlI7QUVuYkk7RUFDSSxpQkFBQTtBRnNiUjtBRTNiSTtFQUNJLGVBQUE7QUY4YlI7QUUzYkk7RUFDSSxpQkFBQTtBRjhiUjtBRW5jSTtFQUNJLGVBQUE7QUZzY1I7QUVuY0k7RUFDSSxpQkFBQTtBRnNjUjtBRTNjSTtFQUNJLGVBQUE7QUY4Y1I7QUUzY0k7RUFDSSxpQkFBQTtBRjhjUjtBRW5kSTtFQUNJLGVBQUE7QUZzZFI7QUVuZEk7RUFDSSxpQkFBQTtBRnNkUjtBRTNkSTtFQUNJLGVBQUE7QUY4ZFI7QUUzZEk7RUFDSSxpQkFBQTtBRjhkUjtBRW5lSTtFQUNJLGVBQUE7QUZzZVI7QUVuZUk7RUFDSSxpQkFBQTtBRnNlUjtBRTNlSTtFQUNJLGVBQUE7QUY4ZVI7QUUzZUk7RUFDSSxpQkFBQTtBRjhlUjtBRW5mSTtFQUNJLGVBQUE7QUZzZlI7QUVuZkk7RUFDSSxpQkFBQTtBRnNmUjtBRTNmSTtFQUNJLGVBQUE7QUY4ZlI7QUUzZkk7RUFDSSxpQkFBQTtBRjhmUjtBRW5nQkk7RUFDSSxlQUFBO0FGc2dCUjtBRW5nQkk7RUFDSSxpQkFBQTtBRnNnQlI7QUUzZ0JJO0VBQ0ksZUFBQTtBRjhnQlI7QUUzZ0JJO0VBQ0ksaUJBQUE7QUY4Z0JSO0FFbmhCSTtFQUNJLGVBQUE7QUZzaEJSO0FFbmhCSTtFQUNJLGlCQUFBO0FGc2hCUjtBRTNoQkk7RUFDSSxlQUFBO0FGOGhCUjtBRTNoQkk7RUFDSSxpQkFBQTtBRjhoQlI7QUVuaUJJO0VBQ0ksZUFBQTtBRnNpQlI7QUVuaUJJO0VBQ0ksaUJBQUE7QUZzaUJSO0FFM2lCSTtFQUNJLGVBQUE7QUY4aUJSO0FFM2lCSTtFQUNJLGlCQUFBO0FGOGlCUjtBRW5qQkk7RUFDSSxlQUFBO0FGc2pCUjtBRW5qQkk7RUFDSSxpQkFBQTtBRnNqQlI7QUUzakJJO0VBQ0ksZUFBQTtBRjhqQlI7QUUzakJJO0VBQ0ksaUJBQUE7QUY4akJSO0FFbmtCSTtFQUNJLGVBQUE7QUZza0JSO0FFbmtCSTtFQUNJLGlCQUFBO0FGc2tCUjtBRTNrQkk7RUFDSSxlQUFBO0FGOGtCUjtBRTNrQkk7RUFDSSxpQkFBQTtBRjhrQlI7QUVubEJJO0VBQ0ksZUFBQTtBRnNsQlI7QUVubEJJO0VBQ0ksaUJBQUE7QUZzbEJSO0FFM2xCSTtFQUNJLGVBQUE7QUY4bEJSO0FFM2xCSTtFQUNJLGlCQUFBO0FGOGxCUjtBRW5tQkk7RUFDSSxlQUFBO0FGc21CUjtBRW5tQkk7RUFDSSxpQkFBQTtBRnNtQlI7QUUzbUJJO0VBQ0ksZUFBQTtBRjhtQlI7QUUzbUJJO0VBQ0ksaUJBQUE7QUY4bUJSO0FHbG5CQTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQ1BHO0VEUUgsVUFBQTtFQUNBLFdBQUE7QUhxbkJKO0FHbm5CSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0FIcW5CTjtBR3BuQk07RUFSRjtJQVNJLGFBQUE7RUh1bkJOO0FBQ0Y7QUdwbkJJO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EseUJDOUJDO0VEK0JELGFBQUE7RUFDQSxZQUFBO0VBQ0EsMkNBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FIc25CTjtBR3BuQk07RUFDRSxhQUFBO0FIc25CUjtBR25uQk07RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUhxbkJSO0FHbm5CUTtFQUNFLGVBQUE7QUhxbkJWO0FHbm5CVTtFQUNFLG1CQ2pESDtBSnNxQlQ7QUdwbkJZO0VBQ0UsY0NyRFA7QUoycUJQO0FHbG5CVTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUhvbkJaO0FHL21CTTtFQXpDRjtJQTBDSSxhQUFBO0VIa25CTjtBQUNGO0FHL21CSTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUhpbkJOO0FHL21CTTtFQUNFLHFCQUFBO0VBQ0EsVUFBQTtBSGluQlI7QUcvbUJRO0VBQ0Usa0JBQUE7QUhpbkJWO0FHaG5CVTtFQUNFLFlBQUE7QUhrbkJaO0FHN21CTTtFQWxCRjtJQW1CSSxhQUFBO0VIZ25CTjtBQUNGO0FLMXNCQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUw2c0JKO0FLM3NCSTtFQUVFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7QUw0c0JOO0FLenNCSTtFQUNFLFdBQUE7RUFDQSx1QkFBQTtBTDJzQk47QUt4c0JJO0VBQ0UsV0FBQTtFQUNBLHlCRC9CQztBSnl1QlA7QU16dUJBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0FONHVCSjtBTTF1Qkk7RUFDRSxjQUFBO0VBQ0EsY0FBQTtBTjR1Qk47QU0xdUJJO0VBQ0UsZUFBQTtBTjR1Qk47QU9udkJBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBUHN2QkY7QU9wdkJFO0VBQ0UsU0FBQTtFQUNBLGdCQUFBO0FQc3ZCSjtBT3J2Qkk7RUFDSSxhQUFBO0FQdXZCUjtBUWp3Qkk7RUFDSSxzQkFBQTtBUm13QlIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9zaG93LW1vcmUtYnV0dG9uL3Nob3ctbW9yZS1idXR0b24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuL2NvbG9ycyc7XG5cbi5ib3JkZXItbGluayB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICY6OmJlZm9yZSB7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAtMTBweDtcbiAgICAgIGJvdHRvbTogLTEwcHg7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gZWFzZS1vdXQgMjUwbXM7XG4gICAgICBib3JkZXItdG9wOiAycHggc29saWQgJGxpZ2h0LWdyZXk7XG4gICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJGxpZ2h0LWdyZXk7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDAsIDEpO1xuICAgIH1cbiAgXG4gICAgJjpob3Zlcjo6YmVmb3JlLFxuICAgICY6Zm9jdXM6OmJlZm9yZSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xuICAgIH1cbiAgXG4gICAgJjpmb2N1cyB7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIH1cbiAgfSIsIi5ib3JkZXItbGluayB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5ib3JkZXItbGluazo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0xMHB4O1xuICBib3R0b206IC0xMHB4O1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIGVhc2Utb3V0IDI1MG1zO1xuICBib3JkZXItdG9wOiAycHggc29saWQgIzQ3NDUwNztcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM0NzQ1MDc7XG4gIHRyYW5zZm9ybTogc2NhbGUoMCwgMSk7XG59XG4uYm9yZGVyLWxpbms6aG92ZXI6OmJlZm9yZSwgLmJvcmRlci1saW5rOmZvY3VzOjpiZWZvcmUge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xufVxuLmJvcmRlci1saW5rOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5jb250ZW50LXdyYXBwZXIge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMDtcbiAgbWluLWhlaWdodDogMTAwdmg7XG59XG5cbi5mcy0xNiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmxoLTE2IHtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG59XG5cbi5mcy0xNyB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cblxuLmxoLTE3IHtcbiAgbGluZS1oZWlnaHQ6IDE3cHg7XG59XG5cbi5mcy0xOCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmxoLTE4IHtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG59XG5cbi5mcy0xOSB7XG4gIGZvbnQtc2l6ZTogMTlweDtcbn1cblxuLmxoLTE5IHtcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XG59XG5cbi5mcy0yMCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmxoLTIwIHtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG5cbi5mcy0yMSB7XG4gIGZvbnQtc2l6ZTogMjFweDtcbn1cblxuLmxoLTIxIHtcbiAgbGluZS1oZWlnaHQ6IDIxcHg7XG59XG5cbi5mcy0yMiB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cblxuLmxoLTIyIHtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG59XG5cbi5mcy0yMyB7XG4gIGZvbnQtc2l6ZTogMjNweDtcbn1cblxuLmxoLTIzIHtcbiAgbGluZS1oZWlnaHQ6IDIzcHg7XG59XG5cbi5mcy0yNCB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuLmxoLTI0IHtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG59XG5cbi5mcy0yNSB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuLmxoLTI1IHtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG59XG5cbi5mcy0yNiB7XG4gIGZvbnQtc2l6ZTogMjZweDtcbn1cblxuLmxoLTI2IHtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbi5mcy0yNyB7XG4gIGZvbnQtc2l6ZTogMjdweDtcbn1cblxuLmxoLTI3IHtcbiAgbGluZS1oZWlnaHQ6IDI3cHg7XG59XG5cbi5mcy0yOCB7XG4gIGZvbnQtc2l6ZTogMjhweDtcbn1cblxuLmxoLTI4IHtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG59XG5cbi5mcy0yOSB7XG4gIGZvbnQtc2l6ZTogMjlweDtcbn1cblxuLmxoLTI5IHtcbiAgbGluZS1oZWlnaHQ6IDI5cHg7XG59XG5cbi5mcy0zMCB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuLmxoLTMwIHtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG59XG5cbi5mcy0zMSB7XG4gIGZvbnQtc2l6ZTogMzFweDtcbn1cblxuLmxoLTMxIHtcbiAgbGluZS1oZWlnaHQ6IDMxcHg7XG59XG5cbi5mcy0zMiB7XG4gIGZvbnQtc2l6ZTogMzJweDtcbn1cblxuLmxoLTMyIHtcbiAgbGluZS1oZWlnaHQ6IDMycHg7XG59XG5cbi5mcy0zMyB7XG4gIGZvbnQtc2l6ZTogMzNweDtcbn1cblxuLmxoLTMzIHtcbiAgbGluZS1oZWlnaHQ6IDMzcHg7XG59XG5cbi5mcy0zNCB7XG4gIGZvbnQtc2l6ZTogMzRweDtcbn1cblxuLmxoLTM0IHtcbiAgbGluZS1oZWlnaHQ6IDM0cHg7XG59XG5cbi5mcy0zNSB7XG4gIGZvbnQtc2l6ZTogMzVweDtcbn1cblxuLmxoLTM1IHtcbiAgbGluZS1oZWlnaHQ6IDM1cHg7XG59XG5cbi5mcy0zNiB7XG4gIGZvbnQtc2l6ZTogMzZweDtcbn1cblxuLmxoLTM2IHtcbiAgbGluZS1oZWlnaHQ6IDM2cHg7XG59XG5cbi5mcy0zNyB7XG4gIGZvbnQtc2l6ZTogMzdweDtcbn1cblxuLmxoLTM3IHtcbiAgbGluZS1oZWlnaHQ6IDM3cHg7XG59XG5cbi5mcy0zOCB7XG4gIGZvbnQtc2l6ZTogMzhweDtcbn1cblxuLmxoLTM4IHtcbiAgbGluZS1oZWlnaHQ6IDM4cHg7XG59XG5cbi5mcy0zOSB7XG4gIGZvbnQtc2l6ZTogMzlweDtcbn1cblxuLmxoLTM5IHtcbiAgbGluZS1oZWlnaHQ6IDM5cHg7XG59XG5cbi5mcy00MCB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbn1cblxuLmxoLTQwIHtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG59XG5cbi5mcy00MSB7XG4gIGZvbnQtc2l6ZTogNDFweDtcbn1cblxuLmxoLTQxIHtcbiAgbGluZS1oZWlnaHQ6IDQxcHg7XG59XG5cbi5mcy00MiB7XG4gIGZvbnQtc2l6ZTogNDJweDtcbn1cblxuLmxoLTQyIHtcbiAgbGluZS1oZWlnaHQ6IDQycHg7XG59XG5cbi5mcy00MyB7XG4gIGZvbnQtc2l6ZTogNDNweDtcbn1cblxuLmxoLTQzIHtcbiAgbGluZS1oZWlnaHQ6IDQzcHg7XG59XG5cbi5mcy00NCB7XG4gIGZvbnQtc2l6ZTogNDRweDtcbn1cblxuLmxoLTQ0IHtcbiAgbGluZS1oZWlnaHQ6IDQ0cHg7XG59XG5cbi5mcy00NSB7XG4gIGZvbnQtc2l6ZTogNDVweDtcbn1cblxuLmxoLTQ1IHtcbiAgbGluZS1oZWlnaHQ6IDQ1cHg7XG59XG5cbi5mcy00NiB7XG4gIGZvbnQtc2l6ZTogNDZweDtcbn1cblxuLmxoLTQ2IHtcbiAgbGluZS1oZWlnaHQ6IDQ2cHg7XG59XG5cbi5mcy00NyB7XG4gIGZvbnQtc2l6ZTogNDdweDtcbn1cblxuLmxoLTQ3IHtcbiAgbGluZS1oZWlnaHQ6IDQ3cHg7XG59XG5cbi5mcy00OCB7XG4gIGZvbnQtc2l6ZTogNDhweDtcbn1cblxuLmxoLTQ4IHtcbiAgbGluZS1oZWlnaHQ6IDQ4cHg7XG59XG5cbi5mcy00OSB7XG4gIGZvbnQtc2l6ZTogNDlweDtcbn1cblxuLmxoLTQ5IHtcbiAgbGluZS1oZWlnaHQ6IDQ5cHg7XG59XG5cbi5mcy01MCB7XG4gIGZvbnQtc2l6ZTogNTBweDtcbn1cblxuLmxoLTUwIHtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG59XG5cbi5mcy01MSB7XG4gIGZvbnQtc2l6ZTogNTFweDtcbn1cblxuLmxoLTUxIHtcbiAgbGluZS1oZWlnaHQ6IDUxcHg7XG59XG5cbi5mcy01MiB7XG4gIGZvbnQtc2l6ZTogNTJweDtcbn1cblxuLmxoLTUyIHtcbiAgbGluZS1oZWlnaHQ6IDUycHg7XG59XG5cbi5mcy01MyB7XG4gIGZvbnQtc2l6ZTogNTNweDtcbn1cblxuLmxoLTUzIHtcbiAgbGluZS1oZWlnaHQ6IDUzcHg7XG59XG5cbi5mcy01NCB7XG4gIGZvbnQtc2l6ZTogNTRweDtcbn1cblxuLmxoLTU0IHtcbiAgbGluZS1oZWlnaHQ6IDU0cHg7XG59XG5cbi5mcy01NSB7XG4gIGZvbnQtc2l6ZTogNTVweDtcbn1cblxuLmxoLTU1IHtcbiAgbGluZS1oZWlnaHQ6IDU1cHg7XG59XG5cbi5mcy01NiB7XG4gIGZvbnQtc2l6ZTogNTZweDtcbn1cblxuLmxoLTU2IHtcbiAgbGluZS1oZWlnaHQ6IDU2cHg7XG59XG5cbi5mcy01NyB7XG4gIGZvbnQtc2l6ZTogNTdweDtcbn1cblxuLmxoLTU3IHtcbiAgbGluZS1oZWlnaHQ6IDU3cHg7XG59XG5cbi5mcy01OCB7XG4gIGZvbnQtc2l6ZTogNThweDtcbn1cblxuLmxoLTU4IHtcbiAgbGluZS1oZWlnaHQ6IDU4cHg7XG59XG5cbi5mcy01OSB7XG4gIGZvbnQtc2l6ZTogNTlweDtcbn1cblxuLmxoLTU5IHtcbiAgbGluZS1oZWlnaHQ6IDU5cHg7XG59XG5cbi5mcy02MCB7XG4gIGZvbnQtc2l6ZTogNjBweDtcbn1cblxuLmxoLTYwIHtcbiAgbGluZS1oZWlnaHQ6IDYwcHg7XG59XG5cbi5mcy02MSB7XG4gIGZvbnQtc2l6ZTogNjFweDtcbn1cblxuLmxoLTYxIHtcbiAgbGluZS1oZWlnaHQ6IDYxcHg7XG59XG5cbi5mcy02MiB7XG4gIGZvbnQtc2l6ZTogNjJweDtcbn1cblxuLmxoLTYyIHtcbiAgbGluZS1oZWlnaHQ6IDYycHg7XG59XG5cbi5mcy02MyB7XG4gIGZvbnQtc2l6ZTogNjNweDtcbn1cblxuLmxoLTYzIHtcbiAgbGluZS1oZWlnaHQ6IDYzcHg7XG59XG5cbi5mcy02NCB7XG4gIGZvbnQtc2l6ZTogNjRweDtcbn1cblxuLmxoLTY0IHtcbiAgbGluZS1oZWlnaHQ6IDY0cHg7XG59XG5cbi5mcy02NSB7XG4gIGZvbnQtc2l6ZTogNjVweDtcbn1cblxuLmxoLTY1IHtcbiAgbGluZS1oZWlnaHQ6IDY1cHg7XG59XG5cbi5mcy02NiB7XG4gIGZvbnQtc2l6ZTogNjZweDtcbn1cblxuLmxoLTY2IHtcbiAgbGluZS1oZWlnaHQ6IDY2cHg7XG59XG5cbi5mcy02NyB7XG4gIGZvbnQtc2l6ZTogNjdweDtcbn1cblxuLmxoLTY3IHtcbiAgbGluZS1oZWlnaHQ6IDY3cHg7XG59XG5cbi5mcy02OCB7XG4gIGZvbnQtc2l6ZTogNjhweDtcbn1cblxuLmxoLTY4IHtcbiAgbGluZS1oZWlnaHQ6IDY4cHg7XG59XG5cbi5mcy02OSB7XG4gIGZvbnQtc2l6ZTogNjlweDtcbn1cblxuLmxoLTY5IHtcbiAgbGluZS1oZWlnaHQ6IDY5cHg7XG59XG5cbi5mcy03MCB7XG4gIGZvbnQtc2l6ZTogNzBweDtcbn1cblxuLmxoLTcwIHtcbiAgbGluZS1oZWlnaHQ6IDcwcHg7XG59XG5cbi5mcy03MSB7XG4gIGZvbnQtc2l6ZTogNzFweDtcbn1cblxuLmxoLTcxIHtcbiAgbGluZS1oZWlnaHQ6IDcxcHg7XG59XG5cbi5mcy03MiB7XG4gIGZvbnQtc2l6ZTogNzJweDtcbn1cblxuLmxoLTcyIHtcbiAgbGluZS1oZWlnaHQ6IDcycHg7XG59XG5cbi5mcy03MyB7XG4gIGZvbnQtc2l6ZTogNzNweDtcbn1cblxuLmxoLTczIHtcbiAgbGluZS1oZWlnaHQ6IDczcHg7XG59XG5cbi5mcy03NCB7XG4gIGZvbnQtc2l6ZTogNzRweDtcbn1cblxuLmxoLTc0IHtcbiAgbGluZS1oZWlnaHQ6IDc0cHg7XG59XG5cbi5mcy03NSB7XG4gIGZvbnQtc2l6ZTogNzVweDtcbn1cblxuLmxoLTc1IHtcbiAgbGluZS1oZWlnaHQ6IDc1cHg7XG59XG5cbi5mcy03NiB7XG4gIGZvbnQtc2l6ZTogNzZweDtcbn1cblxuLmxoLTc2IHtcbiAgbGluZS1oZWlnaHQ6IDc2cHg7XG59XG5cbi5mcy03NyB7XG4gIGZvbnQtc2l6ZTogNzdweDtcbn1cblxuLmxoLTc3IHtcbiAgbGluZS1oZWlnaHQ6IDc3cHg7XG59XG5cbi5mcy03OCB7XG4gIGZvbnQtc2l6ZTogNzhweDtcbn1cblxuLmxoLTc4IHtcbiAgbGluZS1oZWlnaHQ6IDc4cHg7XG59XG5cbi5mcy03OSB7XG4gIGZvbnQtc2l6ZTogNzlweDtcbn1cblxuLmxoLTc5IHtcbiAgbGluZS1oZWlnaHQ6IDc5cHg7XG59XG5cbi5mcy04MCB7XG4gIGZvbnQtc2l6ZTogODBweDtcbn1cblxuLmxoLTgwIHtcbiAgbGluZS1oZWlnaHQ6IDgwcHg7XG59XG5cbi5mcy04MSB7XG4gIGZvbnQtc2l6ZTogODFweDtcbn1cblxuLmxoLTgxIHtcbiAgbGluZS1oZWlnaHQ6IDgxcHg7XG59XG5cbi5mcy04MiB7XG4gIGZvbnQtc2l6ZTogODJweDtcbn1cblxuLmxoLTgyIHtcbiAgbGluZS1oZWlnaHQ6IDgycHg7XG59XG5cbi5mcy04MyB7XG4gIGZvbnQtc2l6ZTogODNweDtcbn1cblxuLmxoLTgzIHtcbiAgbGluZS1oZWlnaHQ6IDgzcHg7XG59XG5cbi5mcy04NCB7XG4gIGZvbnQtc2l6ZTogODRweDtcbn1cblxuLmxoLTg0IHtcbiAgbGluZS1oZWlnaHQ6IDg0cHg7XG59XG5cbi5mcy04NSB7XG4gIGZvbnQtc2l6ZTogODVweDtcbn1cblxuLmxoLTg1IHtcbiAgbGluZS1oZWlnaHQ6IDg1cHg7XG59XG5cbi5mcy04NiB7XG4gIGZvbnQtc2l6ZTogODZweDtcbn1cblxuLmxoLTg2IHtcbiAgbGluZS1oZWlnaHQ6IDg2cHg7XG59XG5cbi5mcy04NyB7XG4gIGZvbnQtc2l6ZTogODdweDtcbn1cblxuLmxoLTg3IHtcbiAgbGluZS1oZWlnaHQ6IDg3cHg7XG59XG5cbi5mcy04OCB7XG4gIGZvbnQtc2l6ZTogODhweDtcbn1cblxuLmxoLTg4IHtcbiAgbGluZS1oZWlnaHQ6IDg4cHg7XG59XG5cbi5mcy04OSB7XG4gIGZvbnQtc2l6ZTogODlweDtcbn1cblxuLmxoLTg5IHtcbiAgbGluZS1oZWlnaHQ6IDg5cHg7XG59XG5cbi5mcy05MCB7XG4gIGZvbnQtc2l6ZTogOTBweDtcbn1cblxuLmxoLTkwIHtcbiAgbGluZS1oZWlnaHQ6IDkwcHg7XG59XG5cbi5wYWdlLWhlYWRlciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIG9wYWNpdHk6IDAuODtcbiAgYmFja2dyb3VuZDogIzAwYWJjYTtcbiAgei1pbmRleDogMTtcbiAgd2lkdGg6IDEwMCU7XG59XG4ucGFnZS1oZWFkZXIgLmhhbWJ1cmdlci1tZW51IHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDEwcHg7XG4gIHJpZ2h0OiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY1MHB4KSB7XG4gIC5wYWdlLWhlYWRlciAuaGFtYnVyZ2VyLW1lbnUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbi5wYWdlLWhlYWRlciAubmF2aWdhdGlvbi1zbWFsbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGFiY2E7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAyNTBweDtcbiAgYm94LXNoYWRvdzogMCA4cHggMTZweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgei1pbmRleDogMTtcbiAgb3BhY2l0eTogMC45OTtcbiAgdHJhbnNpdGlvbjogcmlnaHQgMC41cyBlYXNlLWluO1xufVxuLnBhZ2UtaGVhZGVyIC5uYXZpZ2F0aW9uLXNtYWxsLmNvbGxhcHNlZCB7XG4gIHJpZ2h0OiAtMjUwcHg7XG59XG4ucGFnZS1oZWFkZXIgLm5hdmlnYXRpb24tc21hbGwgdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiA2MHB4IDAgMCAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLnBhZ2UtaGVhZGVyIC5uYXZpZ2F0aW9uLXNtYWxsIHVsIGxpIHtcbiAgZm9udC1zaXplOiAxMjAlO1xufVxuLnBhZ2UtaGVhZGVyIC5uYXZpZ2F0aW9uLXNtYWxsIHVsIGxpOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2Y5Zjg3MTtcbn1cbi5wYWdlLWhlYWRlciAubmF2aWdhdGlvbi1zbWFsbCB1bCBsaTpob3ZlciBhIHtcbiAgY29sb3I6ICMwMGFiY2E7XG59XG4ucGFnZS1oZWFkZXIgLm5hdmlnYXRpb24tc21hbGwgdWwgbGkgYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDE1cHggNXB4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NTBweCkge1xuICAucGFnZS1oZWFkZXIgLm5hdmlnYXRpb24tc21hbGwge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbi5wYWdlLWhlYWRlciAubmF2aWdhdGlvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAzMHB4IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4ucGFnZS1oZWFkZXIgLm5hdmlnYXRpb24gbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAzMCU7XG59XG4ucGFnZS1oZWFkZXIgLm5hdmlnYXRpb24gbGkgYSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5wYWdlLWhlYWRlciAubmF2aWdhdGlvbiBsaSBhOmhvdmVyIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xuICAucGFnZS1oZWFkZXIgLm5hdmlnYXRpb24ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuLnNlY3Rpb24taGVhZGVyIHtcbiAgY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwO1xuICBoZWlnaHQ6IDEwMHB4O1xuICBsaW5lLWhlaWdodDogMTAwcHg7XG4gIGZvbnQtc2l6ZTogMzRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uc2VjdGlvbi1oZWFkZXI6OmFmdGVyLCAuc2VjdGlvbi1oZWFkZXI6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogMDtcbn1cbi5zZWN0aW9uLWhlYWRlcjo6YmVmb3JlIHtcbiAgei1pbmRleDogLTI7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLnNlY3Rpb24taGVhZGVyOjphZnRlciB7XG4gIHotaW5kZXg6IC0xO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhYmNhO1xufVxuXG5zZWN0aW9uIHtcbiAgY2xlYXI6IGJvdGg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbnNlY3Rpb24gLmNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogOTAlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbnNlY3Rpb24gaDMge1xuICBmb250LXNpemU6IDMwcHg7XG59XG5cbi5idXR0b24td3JhcHBlciB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgcGFkZGluZzogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmJ1dHRvbi13cmFwcGVyIGJ1dHRvbiB7XG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cbi5idXR0b24td3JhcHBlciBidXR0b246Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuLmJ1dHRvbi13cmFwcGVyIGJ1dHRvbjpub3QoOmRpc2FibGVkKTpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG59IiwiLmNvbnRlbnQtd3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbn0iLCJAZm9yICRpIGZyb20gMTYgdGhyb3VnaCA5MCB7XG4gICAgLmZzLSN7JGl9IHtcbiAgICAgICAgZm9udC1zaXplOiAkaSAqIDFweDtcbiAgICB9XG5cbiAgICAubGgtI3skaX0ge1xuICAgICAgICBsaW5lLWhlaWdodDogJGkgKiAxcHg7XG4gICAgfVxufSIsIkBpbXBvcnQgXCIuL3ZhcmlhYmxlc1wiO1xuXG4ucGFnZS1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIG9wYWNpdHk6IDAuODtcbiAgICBiYWNrZ3JvdW5kOiAkYmx1ZTtcbiAgICB6LWluZGV4OiAxO1xuICAgIHdpZHRoOiAxMDAlO1xuICBcbiAgICAuaGFtYnVyZ2VyLW1lbnUge1xuICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICB0b3A6IDEwcHg7XG4gICAgICByaWdodDogMTBweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY1MHB4KSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuICBcbiAgICAubmF2aWdhdGlvbi1zbWFsbCB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICB0b3A6IDA7XG4gICAgICBib3R0b206IDA7XG4gICAgICByaWdodDogMDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibHVlO1xuICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICB6LWluZGV4OiAxO1xuICAgICAgb3BhY2l0eTogMC45OTtcbiAgICAgIHRyYW5zaXRpb246IHJpZ2h0IC41cyBlYXNlLWluO1xuXG4gICAgICAmLmNvbGxhcHNlZCB7XG4gICAgICAgIHJpZ2h0OiAtMjUwcHg7XG4gICAgICB9XG4gIFxuICAgICAgdWwge1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICBwYWRkaW5nOiA2MHB4IDAgMCAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICBcbiAgICAgICAgbGkge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTIwJTtcbiAgXG4gICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkeWVsbG93O1xuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgIGNvbG9yOiAkYmx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gIFxuICAgICAgICAgIGEge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDVweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY1MHB4KSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuICBcbiAgICAubmF2aWdhdGlvbiB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiAzMHB4IDA7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICBcbiAgICAgIGxpIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB3aWR0aDogMzAlO1xuICBcbiAgICAgICAgYSB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICBcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gIH0iLCIkYmx1ZTogIzAwYWJjYTtcbiRsaWdodC1ncmV5OiByZ2IoNzEsIDY5LCA3KTtcbiR5ZWxsb3c6ICNmOWY4NzE7XG4iLCIuc2VjdGlvbi1oZWFkZXIge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwO1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDEwMHB4O1xuICAgIGZvbnQtc2l6ZTogMzRweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgXG4gICAgJjo6YWZ0ZXIsXG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgdG9wOiAwO1xuICAgIH1cbiAgXG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIHotaW5kZXg6IC0yO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgfVxuICBcbiAgICAmOjphZnRlciB7XG4gICAgICB6LWluZGV4OiAtMTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibHVlO1xuICAgIH1cbiAgfSIsInNlY3Rpb24ge1xuICAgIGNsZWFyOiBib3RoO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgXG4gICAgLmNvbnRhaW5lciB7XG4gICAgICBtYXgtd2lkdGg6IDkwJTtcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIH1cbiAgICBoMyB7XG4gICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgfVxuICB9IiwiQGltcG9ydCAnfnNyYy9zdHlsZXMvc3R5bGVzJztcblxuLmJ1dHRvbi13cmFwcGVyIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgYnV0dG9uIHtcbiAgICBib3JkZXI6IDA7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAmOmZvY3VzIHtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBob3Zlci1zY2FsZSgpO1xuICB9XG59XG4iLCJAbWl4aW4gaG92ZXItc2NhbGUoJHNjYWxlOiAwLjk1KSB7XG4gICAgJjpub3QoOmRpc2FibGVkKTpob3ZlciB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoJHNjYWxlKTtcbiAgICB9XG59XG5cblxuQG1peGluIGhvdmVyLW9wYWNpdHkoJG9wYWNpdHk6IDAuNSkge1xuICAgICY6bm90KDpkaXNhYmxlZCk6aG92ZXIge1xuICAgICAgICBvcGFjaXR5OiAkb3BhY2l0eTtcbiAgICB9XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowMoreButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-show-more-button',
          template: "<div class=\"button-wrapper\">\n        <button class=\"border-link\" (click)=\"toggleDescription()\">{{ isHidden ? 'Show gallery' : 'Hide gallery'}}</button>\n    </div>",
          styleUrls: ['./show-more-button.component.scss']
        }]
      }], function () {
        return [];
      }, {
        elementId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        toggleClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/directives/click-outside.directive.ts":
  /*!**************************************************************!*\
    !*** ./src/app/shared/directives/click-outside.directive.ts ***!
    \**************************************************************/

  /*! exports provided: ClickOutsideDirective */

  /***/
  function srcAppSharedDirectivesClickOutsideDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClickOutsideDirective", function () {
      return ClickOutsideDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ClickOutsideDirective =
    /*#__PURE__*/
    function () {
      function ClickOutsideDirective(_elementRef) {
        _classCallCheck(this, ClickOutsideDirective);

        this._elementRef = _elementRef;
        this.clickOutside = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(ClickOutsideDirective, [{
        key: "onClick",
        value: function onClick(targetElement) {
          var clickedInside = this._elementRef.nativeElement.contains(targetElement);

          if (!clickedInside) {
            this.clickOutside.emit(true);
          }
        }
      }]);

      return ClickOutsideDirective;
    }();

    ClickOutsideDirective.ɵfac = function ClickOutsideDirective_Factory(t) {
      return new (t || ClickOutsideDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    ClickOutsideDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: ClickOutsideDirective,
      selectors: [["", "clickOutside", ""]],
      hostBindings: function ClickOutsideDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClickOutsideDirective_click_HostBindingHandler($event) {
            return ctx.onClick($event.target);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
        }
      },
      outputs: {
        clickOutside: "clickOutside"
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClickOutsideDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[clickOutside]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, {
        clickOutside: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['document:click', ['$event.target']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/directives/intersection.directive.ts":
  /*!*************************************************************!*\
    !*** ./src/app/shared/directives/intersection.directive.ts ***!
    \*************************************************************/

  /*! exports provided: IntersectionDirective */

  /***/
  function srcAppSharedDirectivesIntersectionDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IntersectionDirective", function () {
      return IntersectionDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _services_intersection_observer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/intersection-observer.service */
    "./src/app/shared/services/intersection-observer.service.ts");

    var IntersectionDirective =
    /*#__PURE__*/
    function () {
      function IntersectionDirective(intersectionObService, elRef) {
        _classCallCheck(this, IntersectionDirective);

        this.intersectionObService = intersectionObService;
        this.elRef = elRef;
        this.intersectionRootMargin = "0px";
        this.intersectionThreshold = 0;
        this.stopWhenVisible = false;
        this.throttleTime = 0;
        this.visibilityChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.directiveSubs = [];
      }

      _createClass(IntersectionDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var parentSub = this.findSub();

          if (parentSub) {
            this.addElementToExistingSub(this.elRef.nativeElement, parentSub);
          } else {
            this.addNewSub(this.elRef.nativeElement);
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          var intersectionSub = this.findSub();
          intersectionSub.subscription.unsubscribe();
          this.directiveSubs.forEach(function (sub) {
            return sub.unsubscribe();
          });
          var el = this.elRef.nativeElement;

          if (intersectionSub.elements.length > 1) {
            this.intersectionObService.elementObservers.find(function (o) {
              return o.element === el;
            }).observer.unobserve(el);
            this.intersectionObService.elementObservers = this.intersectionObService.elementObservers.filter(function (s) {
              return s.element !== el;
            });
            intersectionSub.elements = intersectionSub.elements.filter(function (e) {
              return e !== el;
            });
          } else {
            this.intersectionObService.intersectionSubs = this.intersectionObService.intersectionSubs.filter(function (s) {
              return s !== intersectionSub;
            });
            this.intersectionObService.elementObservers = this.intersectionObService.elementObservers.filter(function (s) {
              return s.element !== el;
            });
          }
        }
      }, {
        key: "addElementToExistingSub",
        value: function addElementToExistingSub(element, parentSub) {
          // finds elementObserver connected to parent intersectionSub
          var elementObserver = this.intersectionObService.elementObservers.find(function (o) {
            return o.element = parentSub.elements[0];
          }); //makes the same observer watch new element

          elementObserver.observer.observe(element);
          parentSub.elements.push(element); //adds new element observer to array

          this.intersectionObService.elementObservers.push({
            element: element,
            observer: elementObserver.observer
          });
          this.directiveSubs.push(this.subscribe(parentSub.observable$, element));
        }
      }, {
        key: "addNewSub",
        value: function addNewSub(element) {
          var config = {
            rootMargin: this.intersectionRootMargin,
            threshold: this.intersectionThreshold
          };
          var observable$ = this.intersectionObService.fromIntersectionObserverShare$(element, config, this.stopWhenVisible);
          var subscription = this.subscribe(observable$, element);
          var newSub = {
            subscription: subscription,
            observable$: observable$,
            elements: [element],
            intersectionRootMargin: this.intersectionRootMargin,
            intersectionTreshold: this.intersectionThreshold,
            stopWhenVisible: this.stopWhenVisible
          };
          this.intersectionObService.addSubscription(newSub);
        } // emits visibilityChange event if intersection detected for selected element

      }, {
        key: "subscribe",
        value: function subscribe(observable$, element) {
          var _this3 = this;

          return observable$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(function (entry) {
            return entry.target === element;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["throttleTime"])(this.throttleTime, undefined, {
            leading: true,
            trailing: true
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (entry) {
            return entry.isIntersecting;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (isIntersecting) {
            return _this3.visibilityChange.emit(isIntersecting);
          })).subscribe();
        } // finds subscription by comparing all params

      }, {
        key: "findSub",
        value: function findSub() {
          var _this4 = this;

          return this.intersectionObService.intersectionSubs.find(function (s) {
            return s.intersectionRootMargin === _this4.intersectionRootMargin && (!s.intersectionThreshold && !_this4.intersectionThreshold || s.intersectionThreshold === _this4.intersectionThreshold) && s.stopWhenVisible === _this4.stopWhenVisible;
          });
        }
      }]);

      return IntersectionDirective;
    }();

    IntersectionDirective.ɵfac = function IntersectionDirective_Factory(t) {
      return new (t || IntersectionDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_intersection_observer_service__WEBPACK_IMPORTED_MODULE_2__["IntersectionObserverService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    IntersectionDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: IntersectionDirective,
      selectors: [["", "intersection", ""]],
      inputs: {
        intersectionRootMargin: "intersectionRootMargin",
        intersectionThreshold: "intersectionThreshold",
        stopWhenVisible: "stopWhenVisible",
        throttleTime: "throttleTime"
      },
      outputs: {
        visibilityChange: "visibilityChange"
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IntersectionDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: "[intersection]"
        }]
      }], function () {
        return [{
          type: _services_intersection_observer_service__WEBPACK_IMPORTED_MODULE_2__["IntersectionObserverService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, {
        intersectionRootMargin: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        intersectionThreshold: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        stopWhenVisible: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        throttleTime: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        visibilityChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/intersection-observer.service.ts":
  /*!******************************************************************!*\
    !*** ./src/app/shared/services/intersection-observer.service.ts ***!
    \******************************************************************/

  /*! exports provided: IntersectionObserverService */

  /***/
  function srcAppSharedServicesIntersectionObserverServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IntersectionObserverService", function () {
      return IntersectionObserverService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var IntersectionObserverService =
    /*#__PURE__*/
    function () {
      function IntersectionObserverService() {
        _classCallCheck(this, IntersectionObserverService);

        this.elementObservers = [];
        this.intersectionSubs = [];
      }

      _createClass(IntersectionObserverService, [{
        key: "addSubscription",
        value: function addSubscription(subscription) {
          this.intersectionSubs.push(subscription);
          return this.intersectionSubs.length - 1;
        }
      }, {
        key: "fromIntersectionObserver$",
        value: function fromIntersectionObserver$(element, config) {
          var _this5 = this;

          var stopWhenVisible = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
          return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (subscriber) {
            var intersectionObserver = new IntersectionObserver(function (entries, observer) {
              entries.forEach(function (entry) {
                subscriber.next(entry);
                console.log('emitting for: ', entry.target);
                if (stopWhenVisible && entry.isIntersecting) observer.unobserve(entry.target);
              });
            }, config);

            _this5.elementObservers.push({
              element: element,
              observer: intersectionObserver
            });

            intersectionObserver.observe(element);
            return {
              unsubscribe: function unsubscribe() {
                intersectionObserver.disconnect();
              }
            };
          });
        }
      }, {
        key: "fromIntersectionObserverShare$",
        value: function fromIntersectionObserverShare$(element, config) {
          var stopWhenVisible = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
          return this.fromIntersectionObserver$(element, config, stopWhenVisible).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["share"])());
        }
      }]);

      return IntersectionObserverService;
    }();

    IntersectionObserverService.ɵfac = function IntersectionObserverService_Factory(t) {
      return new (t || IntersectionObserverService)();
    };

    IntersectionObserverService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: IntersectionObserverService,
      factory: IntersectionObserverService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IntersectionObserverService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _components_show_more_button_show_more_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./components/show-more-button/show-more-button.component */
    "./src/app/shared/components/show-more-button/show-more-button.component.ts");
    /* harmony import */


    var _components_github_button_github_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/github-button/github-button.component */
    "./src/app/shared/components/github-button/github-button.component.ts");
    /* harmony import */


    var _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/gallery/gallery.component */
    "./src/app/shared/components/gallery/gallery.component.ts");
    /* harmony import */


    var _directives_click_outside_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./directives/click-outside.directive */
    "./src/app/shared/directives/click-outside.directive.ts");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _directives_intersection_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./directives/intersection.directive */
    "./src/app/shared/directives/intersection.directive.ts");

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SharedModule
    });
    SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SharedModule_Factory(t) {
        return new (t || SharedModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot(), _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, {
        declarations: [_components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_3__["GalleryComponent"], _components_github_button_github_button_component__WEBPACK_IMPORTED_MODULE_2__["GithubButtonComponent"], _components_show_more_button_show_more_button_component__WEBPACK_IMPORTED_MODULE_1__["ShowMoreButtonComponent"], _directives_click_outside_directive__WEBPACK_IMPORTED_MODULE_4__["ClickOutsideDirective"], _directives_intersection_directive__WEBPACK_IMPORTED_MODULE_8__["IntersectionDirective"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["ModalModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]],
        exports: [_components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_3__["GalleryComponent"], _components_github_button_github_button_component__WEBPACK_IMPORTED_MODULE_2__["GithubButtonComponent"], _components_show_more_button_show_more_button_component__WEBPACK_IMPORTED_MODULE_1__["ShowMoreButtonComponent"], _directives_click_outside_directive__WEBPACK_IMPORTED_MODULE_4__["ClickOutsideDirective"], _directives_intersection_directive__WEBPACK_IMPORTED_MODULE_8__["IntersectionDirective"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_3__["GalleryComponent"], _components_github_button_github_button_component__WEBPACK_IMPORTED_MODULE_2__["GithubButtonComponent"], _components_show_more_button_show_more_button_component__WEBPACK_IMPORTED_MODULE_1__["ShowMoreButtonComponent"], _directives_click_outside_directive__WEBPACK_IMPORTED_MODULE_4__["ClickOutsideDirective"], _directives_intersection_directive__WEBPACK_IMPORTED_MODULE_8__["IntersectionDirective"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot(), _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]],
          exports: [_components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_3__["GalleryComponent"], _components_github_button_github_button_component__WEBPACK_IMPORTED_MODULE_2__["GithubButtonComponent"], _components_show_more_button_show_more_button_component__WEBPACK_IMPORTED_MODULE_1__["ShowMoreButtonComponent"], _directives_click_outside_directive__WEBPACK_IMPORTED_MODULE_4__["ClickOutsideDirective"], _directives_intersection_directive__WEBPACK_IMPORTED_MODULE_8__["IntersectionDirective"]]
        }]
      }], null, null);
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
    /*! /home/rooter/Projects/Portfolio/old-jakub-wisniowski.github.io/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map