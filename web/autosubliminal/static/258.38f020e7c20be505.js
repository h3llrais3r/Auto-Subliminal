"use strict";
(self["webpackChunkautosubliminal"] = self["webpackChunkautosubliminal"] || []).push([[258],{

/***/ 9342:
/*!*******************************************************!*\
  !*** ./src/app/components/scroll/scroll.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScrollComponent: () => (/* binding */ ScrollComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 839);
/* harmony import */ var _services_scroll_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/scroll.service */ 7382);





const _c0 = function (a0) {
  return {
    "d-none": a0
  };
};
let ScrollComponent = /*#__PURE__*/(() => {
  class ScrollComponent {
    constructor() {
      this.scrollService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_services_scroll_service__WEBPACK_IMPORTED_MODULE_0__.ScrollService);
      this.destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.DestroyRef);
    }
    get scrollBottom() {
      return this.scrollHeight < this.maxScrollHeight;
    }
    get scrollTop() {
      return this.scrollHeight >= 100;
    }
    onWindowScroll() {
      this.scrollHeight = this.getScrollHeight();
      this.maxScrollHeight = this.getMaxScrollHeight();
    }
    ngOnInit() {
      this.scrollHeight = this.getScrollHeight();
      this.maxScrollHeight = this.getMaxScrollHeight();
      // Subscribe on scrollUp events
      this.scrollService.scrollUp$.pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_2__.takeUntilDestroyed)(this.destroyRef)).subscribe({
        next: () => this.scrollToTop()
      });
      // Subscribe on scrollDown events
      this.scrollService.scrollDown$.pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_2__.takeUntilDestroyed)(this.destroyRef)).subscribe({
        next: () => this.scrollToBottom()
      });
    }
    ngAfterContentChecked() {
      // Make sure to update the scrollheight after the page/component is loaded
      this.scrollHeight = this.getScrollHeight();
      this.maxScrollHeight = this.getMaxScrollHeight();
    }
    scrollToTop() {
      if (this.scrollHeight > 0) {
        if (this.target) {
          this.target.scrollIntoView({
            block: 'start',
            inline: 'nearest',
            behavior: 'smooth'
          });
        } else {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }
      }
    }
    scrollToBottom() {
      if (this.maxScrollHeight > 0) {
        if (this.target) {
          this.target.scrollIntoView({
            block: 'end',
            inline: 'nearest',
            behavior: 'smooth'
          });
        } else {
          window.scrollTo({
            top: this.maxScrollHeight,
            behavior: 'smooth'
          });
        }
      }
    }
    getScrollHeight() {
      return document.documentElement.scrollTop || document.body.scrollTop;
    }
    getMaxScrollHeight() {
      return (document.documentElement.scrollHeight || document.body.scrollHeight) - (document.documentElement.offsetHeight || document.body.offsetHeight);
    }
  }
  ScrollComponent.ɵfac = function ScrollComponent_Factory(t) {
    return new (t || ScrollComponent)();
  };
  ScrollComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ScrollComponent,
    selectors: [["app-scroll"]],
    hostBindings: function ScrollComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scroll", function ScrollComponent_scroll_HostBindingHandler() {
          return ctx.onWindowScroll();
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
      }
    },
    inputs: {
      target: "target"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 6,
    vars: 12,
    consts: [[1, "scroll-icons", "top"], ["aria-hidden", "true", "title", "Scroll to bottom", 1, "fa", "fa-arrow-circle-down", "scroll-icon-bottom", 3, "ngClass", "click"], ["aria-hidden", "true", "title", "Scroll to top", 1, "fa", "fa-arrow-circle-up", "scroll-icon-top", 3, "ngClass", "click"], [1, "scroll-icons", "bottom"]],
    template: function ScrollComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 0)(1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ScrollComponent_Template_i_click_1_listener() {
          return ctx.scrollToBottom();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ScrollComponent_Template_i_click_2_listener() {
          return ctx.scrollToTop();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 3)(4, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ScrollComponent_Template_i_click_4_listener() {
          return ctx.scrollToBottom();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ScrollComponent_Template_i_click_5_listener() {
          return ctx.scrollToTop();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c0, !ctx.scrollBottom));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c0, !ctx.scrollTop));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](8, _c0, !ctx.scrollBottom));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](10, _c0, !ctx.scrollTop));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass],
    styles: [".scroll-icons[_ngcontent-%COMP%] {\n  position: fixed;\n  right: 0.25rem;\n  font-size: 1.5rem;\n}\n.scroll-icons.top[_ngcontent-%COMP%] {\n  top: 4.375rem;\n}\n.scroll-icons.bottom[_ngcontent-%COMP%] {\n  bottom: 1.5rem;\n}\n@media screen and (max-width: 767px) {\n  .scroll-icons.bottom[_ngcontent-%COMP%] {\n    bottom: 2.5rem;\n  }\n}\n\n.scroll-icon-bottom[_ngcontent-%COMP%], .scroll-icon-top[_ngcontent-%COMP%] {\n  overflow: hidden;\n  z-index: 999;\n  cursor: pointer;\n  background-color: var(--surface-d);\n  color: var(--text-color);\n  font-size: 1.5rem;\n  border-radius: 0.5rem;\n  padding: 0.25rem;\n}\n.scroll-icon-bottom[_ngcontent-%COMP%]:hover, .scroll-icon-top[_ngcontent-%COMP%]:hover {\n  background-color: var(--text-color);\n  color: var(--surface-d);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9zY3JvbGwvc2Nyb2xsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQVBGO0FBU0U7RUFDRSxhQUFBO0FBUEo7QUFVRTtFQUNFLGNBQUE7QUFSSjtBQVVJO0VBSEY7SUFJSSxjQUFBO0VBUEo7QUFDRjs7QUFXQTs7RUFFRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0NBNUJlO0VBNkJmLHdCQTVCa0I7RUE2QmxCLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQVJGO0FBVUU7O0VBQ0UsbUNBakNrQjtFQWtDbEIsdUJBakNxQjtBQTBCekIiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9zY3NzL3ZhcmlhYmxlcyc7XHJcblxyXG4vLyBTY3JvbFxyXG4kc2Nyb2xsLWljb24tYmc6IHZhcigtLXN1cmZhY2UtZCk7XHJcbiRzY3JvbGwtaWNvbi1jb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XHJcbiRzY3JvbC1pY29uLWhvdmVyLWJnOiB2YXIoLS10ZXh0LWNvbG9yKTtcclxuJHNjcm9sLWljb24taG92ZXItY29sb3I6IHZhcigtLXN1cmZhY2UtZCk7XHJcblxyXG4uc2Nyb2xsLWljb25zIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgcmlnaHQ6IDAuMjVyZW07XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcblxyXG4gICYudG9wIHtcclxuICAgIHRvcDogNC4zNzVyZW07XHJcbiAgfVxyXG5cclxuICAmLmJvdHRvbSB7XHJcbiAgICBib3R0b206IDEuNXJlbTtcclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkbWVkaWEtbW9iaWxlLW1heC13aWR0aCkge1xyXG4gICAgICBib3R0b206IDIuNXJlbTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5zY3JvbGwtaWNvbi1ib3R0b20sXHJcbi5zY3JvbGwtaWNvbi10b3Age1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgei1pbmRleDogOTk5O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Nyb2xsLWljb24tYmc7XHJcbiAgY29sb3I6ICRzY3JvbGwtaWNvbi1jb2xvcjtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgcGFkZGluZzogMC4yNXJlbTtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Nyb2wtaWNvbi1ob3Zlci1iZztcclxuICAgIGNvbG9yOiAkc2Nyb2wtaWNvbi1ob3Zlci1jb2xvcjtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
  return ScrollComponent;
})();

/***/ }),

/***/ 8945:
/*!************************************!*\
  !*** ./src/app/models/loglevel.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Loglevel: () => (/* binding */ Loglevel)
/* harmony export */ });
var Loglevel = /*#__PURE__*/function (Loglevel) {
  Loglevel["DEBUG"] = "DEBUG";
  Loglevel["INFO"] = "INFO";
  Loglevel["WARNING"] = "WARNING";
  Loglevel["ERROR"] = "ERROR";
  Loglevel["CRITICAL"] = "CRITICAL";
  return Loglevel;
}(Loglevel || {});

/***/ }),

/***/ 7367:
/*!********************************************************!*\
  !*** ./src/app/pages/log/clear/log-clear.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LogClearComponent: () => (/* binding */ LogClearComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _services_api_log_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/api/log.service */ 10);
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/message.service */ 6288);






let LogClearComponent = /*#__PURE__*/(() => {
  class LogClearComponent {
    constructor() {
      this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router);
      this.logService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_services_api_log_service__WEBPACK_IMPORTED_MODULE_0__.LogService);
      this.messageService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_services_message_service__WEBPACK_IMPORTED_MODULE_1__.MessageService);
      this.destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.DestroyRef);
    }
    ngOnInit() {
      this.logService.clearLogs().pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_4__.takeUntilDestroyed)(this.destroyRef)).subscribe({
        next: result => {
          // Redirect to log view after the logs are cleared
          if (result) {
            this.router.navigateByUrl('/log/view');
          }
        },
        error: () => this.messageService.showErrorMessage(`Unable to clear the logs!`)
      });
    }
  }
  LogClearComponent.ɵfac = function LogClearComponent_Factory(t) {
    return new (t || LogClearComponent)();
  };
  LogClearComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: LogClearComponent,
    selectors: [["app-log-clear"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 0,
    vars: 0,
    template: function LogClearComponent_Template(rf, ctx) {},
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
  return LogClearComponent;
})();

/***/ }),

/***/ 1258:
/*!*****************************************!*\
  !*** ./src/app/pages/log/log.routes.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _clear_log_clear_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clear/log-clear.component */ 7367);
/* harmony import */ var _view_log_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/log-view.component */ 2412);


const routes = [{
  path: '',
  redirectTo: 'view',
  pathMatch: 'full'
}, {
  path: 'view',
  component: _view_log_view_component__WEBPACK_IMPORTED_MODULE_1__.LogViewComponent
}, {
  path: 'clear',
  component: _clear_log_clear_component__WEBPACK_IMPORTED_MODULE_0__.LogClearComponent
}, {
  path: '**',
  redirectTo: 'view'
}];
// Use default export for simplified lazy loading (https://angular.io/guide/standalone-components#lazy-loading-and-default-exports)
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (routes);

/***/ }),

/***/ 2412:
/*!******************************************************!*\
  !*** ./src/app/pages/log/view/log-view.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LogViewComponent: () => (/* binding */ LogViewComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 839);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/api */ 8026);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/button */ 2947);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/dropdown */ 4553);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/panel */ 6110);
/* harmony import */ var rxjs_webSocket__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/webSocket */ 7730);
/* harmony import */ var _app_settings_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../app-settings.service */ 5751);
/* harmony import */ var _services_api_log_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/api/log.service */ 10);
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/message.service */ 6288);
/* harmony import */ var _services_scroll_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/scroll.service */ 7382);
/* harmony import */ var _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/loading/loading.component */ 5156);
/* harmony import */ var _components_scroll_scroll_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/scroll/scroll.component */ 9342);
/* harmony import */ var _models_loglevel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../models/loglevel */ 8945);






















const _c0 = function (a0) {
  return {
    "p-badge-secondary": a0
  };
};
function LogViewComponent_ng_template_2_span_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function LogViewComponent_ng_template_2_span_7_Template_span_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4);
      const logNum_r2 = restoredCtx.$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.getLogs(logNum_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const logNum_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](2, _c0, ctx_r1.selectedLogNum !== logNum_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](logNum_r2);
  }
}
const _c1 = function (a0) {
  return {
    "p-tag-secondary": a0
  };
};
function LogViewComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 4)(1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Logfile");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div")(4, "span", 6)(5, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function LogViewComponent_ng_template_2_Template_span_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r5.getLogs(0));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "current");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, LogViewComponent_ng_template_2_span_7_Template, 2, 4, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "span", 9)(9, "p-button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onClick", function LogViewComponent_ng_template_2_Template_p_button_onClick_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r7.toggleTailing());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "span", 11)(11, "p-dropdown", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function LogViewComponent_ng_template_2_Template_p_dropdown_ngModelChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r8.selectedLoglevel = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](7, _c1, ctx_r0.selectedLogNum !== 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r0.logNums);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("label", ctx_r0.tailButtonLabel)("icon", ctx_r0.tailButtonIcon)("disabled", ctx_r0.tailingDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("options", ctx_r0.loglevels)("ngModel", ctx_r0.selectedLoglevel);
  }
}
let LogViewComponent = /*#__PURE__*/(() => {
  class LogViewComponent {
    constructor() {
      this.selectedLogNum = 0;
      this.selectedLoglevel = '';
      this.loading = false;
      this.tailing = false;
      this.tailingDisabled = false; // true for non current (lognum != 0) logfiles as tailing has no use in this case
      this.tailButtonLabel = 'Start tailing';
      this.tailButtonIcon = 'pi pi-play';
      this.LOG_MESSAGE_REGEX = /^((?<date>\d{4}-\d{2}-\d{2})\s(?<time>\d{2}:\d{2}:\d{2},\d{3})\s(?<loglevel>\w+))/;
      this.logMessages = [];
      this.logService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.inject)(_services_api_log_service__WEBPACK_IMPORTED_MODULE_1__.LogService);
      this.messageService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.inject)(_services_message_service__WEBPACK_IMPORTED_MODULE_2__.MessageService);
      this.scrollService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.inject)(_services_scroll_service__WEBPACK_IMPORTED_MODULE_3__.ScrollService);
      this.destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_7__.DestroyRef);
    }
    get filteredLogMessages() {
      return this.logMessages.filter(logMessage => {
        if (this.selectedLoglevel) {
          const match = this.LOG_MESSAGE_REGEX.exec(logMessage);
          return match && match.groups['loglevel'] === this.selectedLoglevel;
        } else {
          return true;
        }
      });
    }
    get logContent() {
      return this.filteredLogMessages.join('\n');
    }
    ngOnInit() {
      this.loglevels = this.getLogLevels();
      this.logService.getLogCount().pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_8__.takeUntilDestroyed)(this.destroyRef)).subscribe({
        next: count => this.logNums = Array.from(Array(count).keys()).map(i => i + 1) // get array starting from 1
      });

      this.getLogs(0); // 0 = current logfile
    }

    getLogs(logNum) {
      this.loading = true;
      this.selectedLogNum = logNum;
      this.tailingDisabled = this.selectedLogNum !== 0; // tailing only allowed when on current logfile -> lognum = 0
      this.logService.getLogs(logNum).pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_8__.takeUntilDestroyed)(this.destroyRef)).subscribe({
        next: logLines => {
          this.logMessages = logLines;
          this.loading = false;
          this.handleLogTailing();
        },
        error: () => this.messageService.showErrorMessage('Unable to get the logs!')
      });
    }
    toggleTailing() {
      this.tailing = !this.tailing;
      if (this.tailing) {
        // Change button label
        this.tailButtonLabel = 'Stop tailing';
        this.tailButtonIcon = 'pi pi-pause';
        // Scroll to right position when tailing is enabled
        if (_app_settings_service__WEBPACK_IMPORTED_MODULE_0__.appSettings.logReversed) {
          this.scrollService.triggerScrollUp();
        } else {
          this.scrollService.triggerScrollDown();
        }
      } else {
        // Change button label
        this.tailButtonLabel = 'Start tailing';
        this.tailButtonIcon = 'pi pi-play';
      }
      this.handleLogTailing();
    }
    getLogLevels() {
      const logLevels = [];
      logLevels.push({
        label: 'ALL',
        value: ''
      });
      Object.entries(_models_loglevel__WEBPACK_IMPORTED_MODULE_6__.Loglevel).forEach(entry => logLevels.push({
        label: entry[0],
        value: entry[1]
      }));
      return logLevels;
    }
    createLogWebSocket() {
      let protocol = 'ws:';
      if (window.location.protocol === 'https:') {
        protocol = 'wss:';
      }
      const url = `${protocol}//${window.location.host}${_app_settings_service__WEBPACK_IMPORTED_MODULE_0__.appSettings.webRoot}/websocket/log`;
      const config = {
        url,
        deserializer: e => e.data,
        serializer: value => value
      };
      return (0,rxjs_webSocket__WEBPACK_IMPORTED_MODULE_9__.webSocket)(config);
    }
    handleLogTailing() {
      if (this.tailing && !this.tailingDisabled) {
        // Subscribe on new logs once loaded (only for current logfile -> logNum = 0)
        this.logWebsocket$ = this.createLogWebSocket(); // Need to create a new socket after unsubscribe
        this.logWebsocket$.pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_8__.takeUntilDestroyed)(this.destroyRef)).subscribe({
          next: logMessage => {
            if (_app_settings_service__WEBPACK_IMPORTED_MODULE_0__.appSettings.logReversed) {
              // Append to the top
              this.logMessages.unshift(logMessage);
              this.scrollService.triggerScrollUp();
            } else {
              // Append to the end
              this.logMessages.push(logMessage);
              this.scrollService.triggerScrollDown();
            }
          }
        });
        console.log('Log tailing enabled');
      } else {
        // Unsubscribe when not tailing
        if (this.logWebsocket$) {
          this.logWebsocket$.unsubscribe();
        }
        console.log('Log tailing disabled');
      }
    }
  }
  LogViewComponent.ɵfac = function LogViewComponent_Factory(t) {
    return new (t || LogViewComponent)();
  };
  LogViewComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: LogViewComponent,
    selectors: [["app-log-view"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵStandaloneFeature"]],
    decls: 7,
    vars: 2,
    consts: [[1, "container-lg"], ["pTemplate", "header"], [1, "log-content"], [3, "visible"], [1, "w-100"], [1, "p-panel-title"], [1, "log-num"], [1, "p-tag", "p-tag-rounded", 3, "ngClass", "click"], ["class", "p-badge", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "log-tail"], ["styleClass", "p-button-outlined", 3, "label", "icon", "disabled", "onClick"], [1, "log-level"], ["inputId", "logLevels", "styleClass", "p-dropdown-ar", "scrollHeight", "300px", 3, "options", "ngModel", "ngModelChange"], [1, "p-badge", 3, "ngClass", "click"]],
    template: function LogViewComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "p-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, LogViewComponent_ng_template_2_Template, 12, 9, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "pre", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "app-loading", 3)(6, "app-scroll");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.logContent);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("visible", ctx.loading);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgFor, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, primeng_panel__WEBPACK_IMPORTED_MODULE_12__.PanelModule, primeng_panel__WEBPACK_IMPORTED_MODULE_12__.Panel, primeng_api__WEBPACK_IMPORTED_MODULE_13__.PrimeTemplate, primeng_button__WEBPACK_IMPORTED_MODULE_14__.ButtonModule, primeng_button__WEBPACK_IMPORTED_MODULE_14__.Button, primeng_dropdown__WEBPACK_IMPORTED_MODULE_15__.DropdownModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_15__.Dropdown, primeng_api__WEBPACK_IMPORTED_MODULE_13__.SharedModule, _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_4__.LoadingComponent, _components_scroll_scroll_component__WEBPACK_IMPORTED_MODULE_5__.ScrollComponent],
    styles: [".log-num[_ngcontent-%COMP%]   .p-badge[_ngcontent-%COMP%], .log-num[_ngcontent-%COMP%]   .p-tag[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n  cursor: pointer;\n}\n.log-num[_ngcontent-%COMP%]   .p-badge[_ngcontent-%COMP%]:hover, .log-num[_ngcontent-%COMP%]   .p-tag[_ngcontent-%COMP%]:hover {\n  -moz-filter: brightness(125%);\n  -o-filter: brightness(125%);\n  filter: brightness(125%);\n}\n\n.log-tail[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n}\n\n.log-content[_ngcontent-%COMP%] {\n  overflow: auto;\n  color: var(--text-color);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvbG9nL3ZpZXcvbG9nLXZpZXcuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9taXhpbnMvX2ZpbHRlci5zY3NzIiwid2VicGFjazovLy4vc3JjL3Njc3MvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtFOztFQUVFLG9CQUFBO0VBQ0EsZUFBQTtBQUpKO0FBTUk7O0VDUkYsNkJEU29CO0VDUnBCLDJCRFFvQjtFQ1BwQix3QkRPb0I7QUFBdEI7O0FBS0E7RUFDRSxvQkFBQTtBQUZGOztBQUtBO0VBQ0UsY0FBQTtFQUNBLHdCRWZXO0FGYWIiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi8uLi9zY3NzL3ZhcmlhYmxlcyc7XHJcbkBpbXBvcnQgJy4uLy4uLy4uLy4uL3Njc3MvbWl4aW5zL2ZpbHRlcic7XHJcblxyXG4ubG9nLW51bSB7XHJcblxyXG4gIC5wLWJhZGdlLFxyXG4gIC5wLXRhZyB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgQGluY2x1ZGUgZmlsdGVyKGJyaWdodG5lc3MoMTI1JSkpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmxvZy10YWlsIHtcclxuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcclxufVxyXG5cclxuLmxvZy1jb250ZW50IHtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICBjb2xvcjogJGZvbnQtY29sb3I7XHJcbn1cclxuIiwiQG1peGluIGZpbHRlcigkdmFsdWUpIHtcclxuICAtd2Via2l0LWZpbHRlcjogJHZhbHVlO1xyXG4gIC1tb3otZmlsdGVyOiAkdmFsdWU7XHJcbiAgLW8tZmlsdGVyOiAkdmFsdWU7XHJcbiAgZmlsdGVyOiAkdmFsdWU7XHJcbn1cclxuIiwiLy8gR2xvYmFsIHZhcmlhYmxlcyAodmFyKC0teHh4eCkpIGFyZSB1c2VkIGZyb20gaW1wb3J0ZWQgcHJpbWVuZyBzdHlsZXNcclxuXHJcbi8vIEZvbnRcclxuJGZvbnQtc2l6ZTogMXJlbTtcclxuJGZvbnQtc2l6ZS1zbTogKCRmb250LXNpemUgKiAuODc1KSAhZGVmYXVsdDtcclxuJGZvbnQtZGVmYXVsdDogNDAwO1xyXG4kZm9udC1ib2xkOiA1MDA7XHJcbiRmb250LWNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcclxuXHJcbi8vIEJhY2tncm91bmRcclxuJGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1cmZhY2UtYSk7XHJcblxyXG4vL01lZGlhIGJvdW5kYXJpZXNcclxuJG1lZGlhLW1vYmlsZS1tYXgtd2lkdGg6IDc2N3B4O1xyXG4kbWVkaWEtdGFibGV0LW1pbi13aWR0aDogNzY4cHg7XHJcbiRtZWRpYS10YWJsZXQtbWF4LXdpZHRoOiA5OTFweDtcclxuJG1lZGlhLWRlc2t0b3AtbWluLXdpZHRoOiA5OTJweDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
  return LogViewComponent;
})();

/***/ }),

/***/ 10:
/*!*********************************************!*\
  !*** ./src/app/services/api/log.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LogService: () => (/* binding */ LogService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 9736);
/* harmony import */ var _app_settings_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app-settings.service */ 5751);
/* harmony import */ var _api_service_template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api-service-template */ 8574);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);




let LogService = /*#__PURE__*/(() => {
  class LogService extends _api_service_template__WEBPACK_IMPORTED_MODULE_1__.ApiServiceTemplate {
    constructor() {
      super(...arguments);
      this.URL = `${_app_settings_service__WEBPACK_IMPORTED_MODULE_0__.appSettings.webRoot}/api/logs`;
    }
    getLogs(lognum) {
      const url = lognum ? `${this.URL}/${lognum}` : this.URL;
      return this.httpClient.get(url, this.options);
    }
    clearLogs() {
      return this.httpClient.delete(this.URL, this.options).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(() => true));
    }
    getLogCount() {
      return this.httpClient.get(`${this.URL}/count`, this.options).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(count => count.count));
    }
  }
  LogService.ɵfac = /*@__PURE__*/function () {
    let ɵLogService_BaseFactory;
    return function LogService_Factory(t) {
      return (ɵLogService_BaseFactory || (ɵLogService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](LogService)))(t || LogService);
    };
  }();
  LogService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: LogService,
    factory: LogService.ɵfac,
    providedIn: 'root'
  });
  return LogService;
})();

/***/ }),

/***/ 7382:
/*!********************************************!*\
  !*** ./src/app/services/scroll.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScrollService: () => (/* binding */ ScrollService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);


let ScrollService = /*#__PURE__*/(() => {
  class ScrollService {
    constructor() {
      this.scrollUp$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
      this.scrollDown$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    }
    triggerScrollUp() {
      this.scrollUp$.next(true);
    }
    triggerScrollDown() {
      this.scrollDown$.next(true);
    }
  }
  ScrollService.ɵfac = function ScrollService_Factory(t) {
    return new (t || ScrollService)();
  };
  ScrollService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: ScrollService,
    factory: ScrollService.ɵfac,
    providedIn: 'root'
  });
  return ScrollService;
})();

/***/ })

}]);
//# sourceMappingURL=258.38f020e7c20be505.js.map