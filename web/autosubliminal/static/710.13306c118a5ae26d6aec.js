"use strict";
(self["webpackChunkautosubliminal"] = self["webpackChunkautosubliminal"] || []).push([[710],{

/***/ 7097:
/*!**************************************************!*\
  !*** ./src/app/core/services/api/log.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogService": () => (/* binding */ LogService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 7969);
/* harmony import */ var _app_settings_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../app-settings.service */ 1205);
/* harmony import */ var _api_service_template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api-service-template */ 8621);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 1841);





let LogService = /*#__PURE__*/(() => {
  class LogService extends _api_service_template__WEBPACK_IMPORTED_MODULE_1__.ApiServiceTemplate {
    constructor(httpClient) {
      super(httpClient);
      this.httpClient = httpClient;
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

  LogService.ɵfac = function LogService_Factory(t) {
    return new (t || LogService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
  };

  LogService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: LogService,
    factory: LogService.ɵfac,
    providedIn: 'root'
  });
  return LogService;
})();

/***/ }),

/***/ 8036:
/*!**********************************************************!*\
  !*** ./src/app/modules/log/clear/log-clear.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogClearComponent": () => (/* binding */ LogClearComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _core_services_api_log_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services/api/log.service */ 7097);
/* harmony import */ var _core_services_message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/message.service */ 1245);




let LogClearComponent = /*#__PURE__*/(() => {
  class LogClearComponent {
    constructor(router, logService, messageService) {
      this.router = router;
      this.logService = logService;
      this.messageService = messageService;
    }

    ngOnInit() {
      this.logService.clearLogs().subscribe(result => {
        // Redirect to log view after the logs are cleared
        if (result) {
          this.router.navigateByUrl('/log/view');
        }
      }, () => this.messageService.showErrorMessage(`Unable to clear the logs!`));
    }

  }

  LogClearComponent.ɵfac = function LogClearComponent_Factory(t) {
    return new (t || LogClearComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services_api_log_service__WEBPACK_IMPORTED_MODULE_0__.LogService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services_message_service__WEBPACK_IMPORTED_MODULE_1__.MessageService));
  };

  LogClearComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: LogClearComponent,
    selectors: [["app-log-clear"]],
    decls: 0,
    vars: 0,
    template: function LogClearComponent_Template(rf, ctx) {},
    styles: [""]
  });
  return LogClearComponent;
})();

/***/ }),

/***/ 9842:
/*!***************************************************!*\
  !*** ./src/app/modules/log/log-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogRoutingModule": () => (/* binding */ LogRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _clear_log_clear_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clear/log-clear.component */ 8036);
/* harmony import */ var _view_log_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/log-view.component */ 9930);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);





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
    imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
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

/***/ 1710:
/*!*******************************************!*\
  !*** ./src/app/modules/log/log.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogModule": () => (/* binding */ LogModule)
/* harmony export */ });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 4466);
/* harmony import */ var _log_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./log-routing.module */ 9842);
/* harmony import */ var _view_log_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/log-view.component */ 9930);
/* harmony import */ var _clear_log_clear_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clear/log-clear.component */ 8036);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);





let LogModule = /*#__PURE__*/(() => {
  class LogModule {}

  LogModule.ɵfac = function LogModule_Factory(t) {
    return new (t || LogModule)();
  };

  LogModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: LogModule
  });
  LogModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _log_routing_module__WEBPACK_IMPORTED_MODULE_1__.LogRoutingModule]]
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

/***/ 9930:
/*!********************************************************!*\
  !*** ./src/app/modules/log/view/log-view.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogViewComponent": () => (/* binding */ LogViewComponent)
/* harmony export */ });
/* harmony import */ var rxjs_webSocket__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/webSocket */ 2540);
/* harmony import */ var _app_settings_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../app-settings.service */ 1205);
/* harmony import */ var _shared_models_loglevel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/models/loglevel */ 3395);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _core_services_api_log_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/api/log.service */ 7097);
/* harmony import */ var _core_services_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/message.service */ 1245);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/panel */ 4020);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/api */ 3013);
/* harmony import */ var _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/loading/loading.component */ 5102);
/* harmony import */ var _shared_components_scroll_scroll_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/scroll/scroll.component */ 597);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/button */ 4207);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/dropdown */ 103);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 3679);















const _c0 = function (a0) {
  return {
    "p-badge-secondary": a0
  };
};

function LogViewComponent_ng_template_2_span_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function LogViewComponent_ng_template_2_span_7_Template_span_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4);
      const logNum_r2 = restoredCtx.$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return ctx_r3.getLogs(logNum_r2);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const logNum_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](2, _c0, ctx_r1.selectedLogNum !== logNum_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](logNum_r2);
  }
}

const _c1 = function (a0) {
  return {
    "p-tag-secondary": a0
  };
};

function LogViewComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Logfile");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function LogViewComponent_ng_template_2_Template_span_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return ctx_r5.getLogs(0);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "current");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, LogViewComponent_ng_template_2_span_7_Template, 2, 4, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "p-button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onClick", function LogViewComponent_ng_template_2_Template_p_button_onClick_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return ctx_r7.toggleTailing();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "p-dropdown", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function LogViewComponent_ng_template_2_Template_p_dropdown_ngModelChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return ctx_r8.selectedLoglevel = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](7, _c1, ctx_r0.selectedLogNum !== 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r0.logNums);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("label", ctx_r0.tailButtonLabel)("icon", ctx_r0.tailButtonIcon)("disabled", ctx_r0.tailingDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("options", ctx_r0.loglevels)("ngModel", ctx_r0.selectedLoglevel);
  }
}

let LogViewComponent = /*#__PURE__*/(() => {
  class LogViewComponent {
    constructor(logService, messageService) {
      this.logService = logService;
      this.messageService = messageService;
      this.LOG_MESSAGE_REGEX = /^((?<date>\d{4}\-\d{2}\-\d{2})\s(?<time>\d{2}:\d{2}:\d{2},\d{3})\s(?<loglevel>\w+))/;
      this.selectedLogNum = 0;
      this.selectedLoglevel = '';
      this.loading = false;
      this.tailing = false;
      this.tailingDisabled = false;
      this.tailButtonLabel = 'Start tailing';
      this.tailButtonIcon = 'pi pi-play';
      this.logMessages = [];
    }

    ngOnInit() {
      this.loglevels = this.getLogLevels();
      this.logService.getLogCount().subscribe(count => this.logNums = Array.from(Array(count).keys()).map(i => i + 1)); // get array starting from 1

      this.getLogs(0); // 0 = current logfile
    }

    getLogs(logNum) {
      this.loading = true;
      this.selectedLogNum = logNum;
      this.tailingDisabled = this.selectedLogNum !== 0; // tailing only allowed when on current logfile -> lognum = 0

      this.logService.getLogs(logNum).subscribe(logLines => {
        this.logMessages = logLines;
        this.loading = false;
        this.handleLogTailing();
      }, () => this.messageService.showErrorMessage('Unable to get the logs!'));
    }

    toggleTailing() {
      this.tailing = !this.tailing;

      if (this.tailing) {
        this.tailButtonLabel = 'Stop tailing';
        this.tailButtonIcon = 'pi pi-pause';
      } else {
        this.tailButtonLabel = 'Start tailing';
        this.tailButtonIcon = 'pi pi-play';
      }

      this.handleLogTailing();
    }

    get filteredLogMessages() {
      return this.logMessages.filter(logMessage => {
        if (this.selectedLoglevel) {
          const match = this.LOG_MESSAGE_REGEX.exec(logMessage);
          return match && match.groups.loglevel === this.selectedLoglevel;
        } else {
          return true;
        }
      });
    }

    get logContent() {
      return this.filteredLogMessages.join('\n');
    }

    getLogLevels() {
      const logLevels = [];
      logLevels.push({
        label: 'ALL',
        value: ''
      });
      Object.entries(_shared_models_loglevel__WEBPACK_IMPORTED_MODULE_1__.Loglevel).forEach(entry => logLevels.push({
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
      return (0,rxjs_webSocket__WEBPACK_IMPORTED_MODULE_7__.webSocket)(config);
    }

    handleLogTailing() {
      if (this.tailing && !this.tailingDisabled) {
        // Subscribe on new logs once loaded (only for current logfile -> logNum = 0)
        this.logWebsocket = this.createLogWebSocket(); // Need to create a new socket after unsubscribe

        this.logWebsocket.subscribe(logMessage => {
          this.logMessages.push(logMessage);
        });
        console.log('Log tailing enabled');
      } else {
        // Unsubscribe when not tailing
        if (this.logWebsocket) {
          this.logWebsocket.unsubscribe();
        }

        console.log('Log tailing disabled');
      }
    }

  }

  LogViewComponent.ɵfac = function LogViewComponent_Factory(t) {
    return new (t || LogViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_services_api_log_service__WEBPACK_IMPORTED_MODULE_2__.LogService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_services_message_service__WEBPACK_IMPORTED_MODULE_3__.MessageService));
  };

  LogViewComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: LogViewComponent,
    selectors: [["app-log-view"]],
    decls: 7,
    vars: 2,
    consts: [[1, "container-lg"], ["pTemplate", "header"], [1, "log-content"], [3, "visible"], [1, "w-100"], [1, "p-panel-title"], [1, "log-num"], [1, "p-tag", "p-tag-rounded", 3, "ngClass", "click"], ["class", "p-badge", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "log-tail"], ["styleClass", "p-button-outlined", 3, "label", "icon", "disabled", "onClick"], [1, "log-level"], ["styleClass", "p-dropdown-ar", "scrollHeight", "300px", 3, "options", "ngModel", "ngModelChange"], [1, "p-badge", 3, "ngClass", "click"]],
    template: function LogViewComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "p-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, LogViewComponent_ng_template_2_Template, 12, 9, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "pre", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "app-loading", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "app-scroll");
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.logContent);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("visible", ctx.loading);
      }
    },
    directives: [primeng_panel__WEBPACK_IMPORTED_MODULE_8__.Panel, primeng_api__WEBPACK_IMPORTED_MODULE_9__.PrimeTemplate, _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_4__.LoadingComponent, _shared_components_scroll_scroll_component__WEBPACK_IMPORTED_MODULE_5__.ScrollComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, primeng_button__WEBPACK_IMPORTED_MODULE_11__.Button, primeng_dropdown__WEBPACK_IMPORTED_MODULE_12__.Dropdown, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgModel],
    styles: [".log-num[_ngcontent-%COMP%]   .p-badge[_ngcontent-%COMP%], .log-num[_ngcontent-%COMP%]   .p-tag[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n  cursor: pointer;\n}\n.log-num[_ngcontent-%COMP%]   .p-badge[_ngcontent-%COMP%]:hover, .log-num[_ngcontent-%COMP%]   .p-tag[_ngcontent-%COMP%]:hover {\n  -moz-filter: brightness(125%);\n  -o-filter: brightness(125%);\n  filter: brightness(125%);\n}\n.log-tail[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n}\n.log-content[_ngcontent-%COMP%] {\n  overflow: auto;\n  color: var(--text-color);\n}"]
  });
  return LogViewComponent;
})();

/***/ }),

/***/ 3395:
/*!*******************************************!*\
  !*** ./src/app/shared/models/loglevel.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Loglevel": () => (/* binding */ Loglevel)
/* harmony export */ });
var Loglevel = /*#__PURE__*/(() => {
  (function (Loglevel) {
    Loglevel["DEBUG"] = "DEBUG";
    Loglevel["INFO"] = "INFO";
    Loglevel["WARNING"] = "WARNING";
    Loglevel["ERROR"] = "ERROR";
    Loglevel["CRITICAL"] = "CRITICAL";
  })(Loglevel || (Loglevel = {}));

  return Loglevel;
})();

/***/ })

}]);