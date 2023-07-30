"use strict";
(self["webpackChunkautosubliminal"] = self["webpackChunkautosubliminal"] || []).push([[675],{

/***/ 2024:
/*!**************************************************!*\
  !*** ./src/app/core/services/api/log.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LogService: () => (/* binding */ LogService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 9736);
/* harmony import */ var _app_settings_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../app-settings.service */ 5751);
/* harmony import */ var _api_service_template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api-service-template */ 4176);
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
      return this.httpClient.delete(this.URL, this.options).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(() => true));
    }
    getLogCount() {
      return this.httpClient.get(`${this.URL}/count`, this.options).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(count => count.count));
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

/***/ 3282:
/*!*************************************************!*\
  !*** ./src/app/core/services/scroll.service.ts ***!
  \*************************************************/
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

/***/ }),

/***/ 6640:
/*!**********************************************************!*\
  !*** ./src/app/modules/log/clear/log-clear.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LogClearComponent: () => (/* binding */ LogClearComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _core_services_api_log_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services/api/log.service */ 2024);
/* harmony import */ var _core_services_message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/message.service */ 5476);






let LogClearComponent = /*#__PURE__*/(() => {
  class LogClearComponent {
    constructor() {
      this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router);
      this.logService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_core_services_api_log_service__WEBPACK_IMPORTED_MODULE_0__.LogService);
      this.messageService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_core_services_message_service__WEBPACK_IMPORTED_MODULE_1__.MessageService);
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

/***/ 6675:
/*!*******************************************!*\
  !*** ./src/app/modules/log/log.routes.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _clear_log_clear_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clear/log-clear.component */ 6640);
/* harmony import */ var _view_log_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/log-view.component */ 1412);


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

/***/ 1412:
/*!********************************************************!*\
  !*** ./src/app/modules/log/view/log-view.component.ts ***!
  \********************************************************/
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
/* harmony import */ var _core_services_api_log_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/api/log.service */ 2024);
/* harmony import */ var _core_services_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/message.service */ 5476);
/* harmony import */ var _core_services_scroll_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/scroll.service */ 3282);
/* harmony import */ var _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/loading/loading.component */ 6992);
/* harmony import */ var _shared_components_scroll_scroll_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/scroll/scroll.component */ 2480);
/* harmony import */ var _shared_models_loglevel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/models/loglevel */ 3348);






















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
      this.logService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.inject)(_core_services_api_log_service__WEBPACK_IMPORTED_MODULE_1__.LogService);
      this.messageService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.inject)(_core_services_message_service__WEBPACK_IMPORTED_MODULE_2__.MessageService);
      this.scrollService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.inject)(_core_services_scroll_service__WEBPACK_IMPORTED_MODULE_3__.ScrollService);
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
      Object.entries(_shared_models_loglevel__WEBPACK_IMPORTED_MODULE_6__.Loglevel).forEach(entry => logLevels.push({
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
    consts: [[1, "container-lg"], ["pTemplate", "header"], [1, "log-content"], [3, "visible"], [1, "w-100"], [1, "p-panel-title"], [1, "log-num"], [1, "p-tag", "p-tag-rounded", 3, "ngClass", "click"], ["class", "p-badge", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "log-tail"], ["styleClass", "p-button-outlined", 3, "label", "icon", "disabled", "onClick"], [1, "log-level"], ["styleClass", "p-dropdown-ar", "scrollHeight", "300px", 3, "options", "ngModel", "ngModelChange"], [1, "p-badge", 3, "ngClass", "click"]],
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
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgFor, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, primeng_panel__WEBPACK_IMPORTED_MODULE_12__.PanelModule, primeng_panel__WEBPACK_IMPORTED_MODULE_12__.Panel, primeng_api__WEBPACK_IMPORTED_MODULE_13__.PrimeTemplate, primeng_button__WEBPACK_IMPORTED_MODULE_14__.ButtonModule, primeng_button__WEBPACK_IMPORTED_MODULE_14__.Button, primeng_dropdown__WEBPACK_IMPORTED_MODULE_15__.DropdownModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_15__.Dropdown, primeng_api__WEBPACK_IMPORTED_MODULE_13__.SharedModule, _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_4__.LoadingComponent, _shared_components_scroll_scroll_component__WEBPACK_IMPORTED_MODULE_5__.ScrollComponent],
    styles: [".log-num[_ngcontent-%COMP%]   .p-badge[_ngcontent-%COMP%], .log-num[_ngcontent-%COMP%]   .p-tag[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n  cursor: pointer;\n}\n.log-num[_ngcontent-%COMP%]   .p-badge[_ngcontent-%COMP%]:hover, .log-num[_ngcontent-%COMP%]   .p-tag[_ngcontent-%COMP%]:hover {\n  -moz-filter: brightness(125%);\n  -o-filter: brightness(125%);\n  filter: brightness(125%);\n}\n\n.log-tail[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n}\n\n.log-content[_ngcontent-%COMP%] {\n  overflow: auto;\n  color: var(--text-color);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9sb2cvdmlldy9sb2ctdmlldy5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9zY3NzL21peGlucy9fZmlsdGVyLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0U7O0VBRUUsb0JBQUE7RUFDQSxlQUFBO0FBSko7QUFNSTs7RUNSRiw2QkRTb0I7RUNScEIsMkJEUW9CO0VDUHBCLHdCRE9vQjtBQUF0Qjs7QUFLQTtFQUNFLG9CQUFBO0FBRkY7O0FBS0E7RUFDRSxjQUFBO0VBQ0Esd0JFZlc7QUZhYiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uLy4uL3Njc3MvdmFyaWFibGVzJztcclxuQGltcG9ydCAnLi4vLi4vLi4vLi4vc2Nzcy9taXhpbnMvZmlsdGVyJztcclxuXHJcbi5sb2ctbnVtIHtcclxuXHJcbiAgLnAtYmFkZ2UsXHJcbiAgLnAtdGFnIHtcclxuICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBAaW5jbHVkZSBmaWx0ZXIoYnJpZ2h0bmVzcygxMjUlKSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ubG9nLXRhaWwge1xyXG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xyXG59XHJcblxyXG4ubG9nLWNvbnRlbnQge1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIGNvbG9yOiAkZm9udC1jb2xvcjtcclxufVxyXG4iLCJAbWl4aW4gZmlsdGVyKCR2YWx1ZSkge1xyXG4gIC13ZWJraXQtZmlsdGVyOiAkdmFsdWU7XHJcbiAgLW1vei1maWx0ZXI6ICR2YWx1ZTtcclxuICAtby1maWx0ZXI6ICR2YWx1ZTtcclxuICBmaWx0ZXI6ICR2YWx1ZTtcclxufVxyXG4iLCIvLyBHbG9iYWwgdmFyaWFibGVzICh2YXIoLS14eHh4KSkgYXJlIHVzZWQgZnJvbSBpbXBvcnRlZCBwcmltZW5nIHN0eWxlc1xyXG5cclxuLy8gRm9udFxyXG4kZm9udC1zaXplOiAxcmVtO1xyXG4kZm9udC1zaXplLXNtOiAoJGZvbnQtc2l6ZSAqIC44NzUpICFkZWZhdWx0O1xyXG4kZm9udC1kZWZhdWx0OiA0MDA7XHJcbiRmb250LWJvbGQ6IDUwMDtcclxuJGZvbnQtY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xyXG5cclxuLy8gQmFja2dyb3VuZFxyXG4kYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3VyZmFjZS1hKTtcclxuXHJcbi8vTWVkaWEgYm91bmRhcmllc1xyXG4kbWVkaWEtbW9iaWxlLW1heC13aWR0aDogNzY3cHg7XHJcbiRtZWRpYS10YWJsZXQtbWluLXdpZHRoOiA3NjhweDtcclxuJG1lZGlhLXRhYmxldC1tYXgtd2lkdGg6IDk5MXB4O1xyXG4kbWVkaWEtZGVza3RvcC1taW4td2lkdGg6IDk5MnB4O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
  return LogViewComponent;
})();

/***/ }),

/***/ 2480:
/*!**************************************************************!*\
  !*** ./src/app/shared/components/scroll/scroll.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScrollComponent: () => (/* binding */ ScrollComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 839);
/* harmony import */ var _core_services_scroll_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services/scroll.service */ 3282);





const _c0 = function (a0) {
  return {
    "d-none": a0
  };
};
let ScrollComponent = /*#__PURE__*/(() => {
  class ScrollComponent {
    constructor() {
      this.scrollService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_core_services_scroll_service__WEBPACK_IMPORTED_MODULE_0__.ScrollService);
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
    styles: [".scroll-icons[_ngcontent-%COMP%] {\n  position: fixed;\n  right: 0.25rem;\n  font-size: 1.5rem;\n}\n.scroll-icons.top[_ngcontent-%COMP%] {\n  top: 4.375rem;\n}\n.scroll-icons.bottom[_ngcontent-%COMP%] {\n  bottom: 1.5rem;\n}\n@media screen and (max-width: 767px) {\n  .scroll-icons.bottom[_ngcontent-%COMP%] {\n    bottom: 2.5rem;\n  }\n}\n\n.scroll-icon-bottom[_ngcontent-%COMP%], .scroll-icon-top[_ngcontent-%COMP%] {\n  overflow: hidden;\n  z-index: 999;\n  cursor: pointer;\n  background-color: var(--surface-d);\n  color: var(--text-color);\n  font-size: 1.5rem;\n  border-radius: 0.5rem;\n  padding: 0.25rem;\n}\n.scroll-icon-bottom[_ngcontent-%COMP%]:hover, .scroll-icon-top[_ngcontent-%COMP%]:hover {\n  background-color: var(--text-color);\n  color: var(--surface-d);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc2Nyb2xsL3Njcm9sbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFQRjtBQVNFO0VBQ0UsYUFBQTtBQVBKO0FBVUU7RUFDRSxjQUFBO0FBUko7QUFVSTtFQUhGO0lBSUksY0FBQTtFQVBKO0FBQ0Y7O0FBV0E7O0VBRUUsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtDQTVCZTtFQTZCZix3QkE1QmtCO0VBNkJsQixpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUFSRjtBQVVFOztFQUNFLG1DQWpDa0I7RUFrQ2xCLHVCQWpDcUI7QUEwQnpCIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vLi4vc2Nzcy92YXJpYWJsZXMnO1xyXG5cclxuLy8gU2Nyb2xcclxuJHNjcm9sbC1pY29uLWJnOiB2YXIoLS1zdXJmYWNlLWQpO1xyXG4kc2Nyb2xsLWljb24tY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xyXG4kc2Nyb2wtaWNvbi1ob3Zlci1iZzogdmFyKC0tdGV4dC1jb2xvcik7XHJcbiRzY3JvbC1pY29uLWhvdmVyLWNvbG9yOiB2YXIoLS1zdXJmYWNlLWQpO1xyXG5cclxuLnNjcm9sbC1pY29ucyB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHJpZ2h0OiAwLjI1cmVtO1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG5cclxuICAmLnRvcCB7XHJcbiAgICB0b3A6IDQuMzc1cmVtO1xyXG4gIH1cclxuXHJcbiAgJi5ib3R0b20ge1xyXG4gICAgYm90dG9tOiAxLjVyZW07XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJG1lZGlhLW1vYmlsZS1tYXgtd2lkdGgpIHtcclxuICAgICAgYm90dG9tOiAyLjVyZW07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uc2Nyb2xsLWljb24tYm90dG9tLFxyXG4uc2Nyb2xsLWljb24tdG9wIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHotaW5kZXg6IDk5OTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHNjcm9sbC1pY29uLWJnO1xyXG4gIGNvbG9yOiAkc2Nyb2xsLWljb24tY29sb3I7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gIHBhZGRpbmc6IDAuMjVyZW07XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNjcm9sLWljb24taG92ZXItYmc7XHJcbiAgICBjb2xvcjogJHNjcm9sLWljb24taG92ZXItY29sb3I7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
  return ScrollComponent;
})();

/***/ }),

/***/ 3348:
/*!*******************************************!*\
  !*** ./src/app/shared/models/loglevel.ts ***!
  \*******************************************/
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

/***/ })

}]);
//# sourceMappingURL=675.765a0fffce53047c.js.map