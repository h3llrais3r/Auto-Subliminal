"use strict";
(self["webpackChunkautosubliminal"] = self["webpackChunkautosubliminal"] || []).push([[514],{

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
    decls: 0,
    vars: 0,
    template: function LogClearComponent_Template(rf, ctx) {},
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
  return LogClearComponent;
})();

/***/ }),

/***/ 642:
/*!***************************************************!*\
  !*** ./src/app/modules/log/log-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LogRoutingModule: () => (/* binding */ LogRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _clear_log_clear_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clear/log-clear.component */ 6640);
/* harmony import */ var _view_log_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/log-view.component */ 1412);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);





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
let LogRoutingModule = /*#__PURE__*/(() => {
  class LogRoutingModule {}
  LogRoutingModule.ɵfac = function LogRoutingModule_Factory(t) {
    return new (t || LogRoutingModule)();
  };
  LogRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: LogRoutingModule
  });
  LogRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
  return LogRoutingModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](LogRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 8514:
/*!*******************************************!*\
  !*** ./src/app/modules/log/log.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LogModule: () => (/* binding */ LogModule)
/* harmony export */ });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 6208);
/* harmony import */ var _log_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./log-routing.module */ 642);
/* harmony import */ var _view_log_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/log-view.component */ 1412);
/* harmony import */ var _clear_log_clear_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clear/log-clear.component */ 6640);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);





let LogModule = /*#__PURE__*/(() => {
  class LogModule {}
  LogModule.ɵfac = function LogModule_Factory(t) {
    return new (t || LogModule)();
  };
  LogModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: LogModule
  });
  LogModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _log_routing_module__WEBPACK_IMPORTED_MODULE_1__.LogRoutingModule]
  });
  return LogModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](LogModule, {
    declarations: [_view_log_view_component__WEBPACK_IMPORTED_MODULE_2__.LogViewComponent, _clear_log_clear_component__WEBPACK_IMPORTED_MODULE_3__.LogClearComponent],
    imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _log_routing_module__WEBPACK_IMPORTED_MODULE_1__.LogRoutingModule]
  });
})();

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 839);
/* harmony import */ var rxjs_webSocket__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/webSocket */ 7730);
/* harmony import */ var _app_settings_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../app-settings.service */ 5751);
/* harmony import */ var _core_services_api_log_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/api/log.service */ 2024);
/* harmony import */ var _core_services_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/message.service */ 5476);
/* harmony import */ var _core_services_scroll_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/scroll.service */ 3282);
/* harmony import */ var _shared_models_loglevel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/models/loglevel */ 3348);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/api */ 8026);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/panel */ 6110);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/button */ 2947);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/dropdown */ 4553);
/* harmony import */ var _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/loading/loading.component */ 6992);
/* harmony import */ var _shared_components_scroll_scroll_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/scroll/scroll.component */ 2480);

















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
      Object.entries(_shared_models_loglevel__WEBPACK_IMPORTED_MODULE_4__.Loglevel).forEach(entry => logLevels.push({
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
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, primeng_api__WEBPACK_IMPORTED_MODULE_12__.PrimeTemplate, primeng_panel__WEBPACK_IMPORTED_MODULE_13__.Panel, primeng_button__WEBPACK_IMPORTED_MODULE_14__.Button, primeng_dropdown__WEBPACK_IMPORTED_MODULE_15__.Dropdown, _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__.LoadingComponent, _shared_components_scroll_scroll_component__WEBPACK_IMPORTED_MODULE_6__.ScrollComponent],
    styles: [".log-num[_ngcontent-%COMP%]   .p-badge[_ngcontent-%COMP%], .log-num[_ngcontent-%COMP%]   .p-tag[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n  cursor: pointer;\n}\n.log-num[_ngcontent-%COMP%]   .p-badge[_ngcontent-%COMP%]:hover, .log-num[_ngcontent-%COMP%]   .p-tag[_ngcontent-%COMP%]:hover {\n  -moz-filter: brightness(125%);\n  -o-filter: brightness(125%);\n  filter: brightness(125%);\n}\n\n.log-tail[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n}\n\n.log-content[_ngcontent-%COMP%] {\n  overflow: auto;\n  color: var(--text-color);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9sb2cvdmlldy9sb2ctdmlldy5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9zY3NzL21peGlucy9fZmlsdGVyLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0U7O0VBRUUsb0JBQUE7RUFDQSxlQUFBO0FBSko7QUFNSTs7RUNSRiw2QkRTb0I7RUNScEIsMkJEUW9CO0VDUHBCLHdCRE9vQjtBQUF0Qjs7QUFLQTtFQUNFLG9CQUFBO0FBRkY7O0FBS0E7RUFDRSxjQUFBO0VBQ0Esd0JFZlc7QUZhYiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uLy4uL3Njc3MvdmFyaWFibGVzJztcclxuQGltcG9ydCAnLi4vLi4vLi4vLi4vc2Nzcy9taXhpbnMvZmlsdGVyJztcclxuXHJcbi5sb2ctbnVtIHtcclxuXHJcbiAgLnAtYmFkZ2UsXHJcbiAgLnAtdGFnIHtcclxuICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBAaW5jbHVkZSBmaWx0ZXIoYnJpZ2h0bmVzcygxMjUlKSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ubG9nLXRhaWwge1xyXG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xyXG59XHJcblxyXG4ubG9nLWNvbnRlbnQge1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIGNvbG9yOiAkZm9udC1jb2xvcjtcclxufVxyXG4iLCJAbWl4aW4gZmlsdGVyKCR2YWx1ZSkge1xyXG4gIC13ZWJraXQtZmlsdGVyOiAkdmFsdWU7XHJcbiAgLW1vei1maWx0ZXI6ICR2YWx1ZTtcclxuICAtby1maWx0ZXI6ICR2YWx1ZTtcclxuICBmaWx0ZXI6ICR2YWx1ZTtcclxufVxyXG4iLCIvLyBHbG9iYWwgdmFyaWFibGVzICh2YXIoLS14eHh4KSkgYXJlIHVzZWQgZnJvbSBpbXBvcnRlZCBwcmltZW5nIHN0eWxlc1xyXG5cclxuLy8gRm9udFxyXG4kZm9udC1zaXplOiAxcmVtO1xyXG4kZm9udC1zaXplLXNtOiAoJGZvbnQtc2l6ZSAqIC44NzUpICFkZWZhdWx0O1xyXG4kZm9udC1kZWZhdWx0OiA0MDA7XHJcbiRmb250LWJvbGQ6IDUwMDtcclxuJGZvbnQtY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xyXG5cclxuLy8gQmFja2dyb3VuZFxyXG4kYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3VyZmFjZS1hKTtcclxuXHJcbi8vTWVkaWEgYm91bmRhcmllc1xyXG4kbWVkaWEtbW9iaWxlLW1heC13aWR0aDogNzY3cHg7XHJcbiRtZWRpYS10YWJsZXQtbWluLXdpZHRoOiA3NjhweDtcclxuJG1lZGlhLXRhYmxldC1tYXgtd2lkdGg6IDk5MXB4O1xyXG4kbWVkaWEtZGVza3RvcC1taW4td2lkdGg6IDk5MnB4O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
  return LogViewComponent;
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
//# sourceMappingURL=514.03ac76f7fd83cd9f.js.map