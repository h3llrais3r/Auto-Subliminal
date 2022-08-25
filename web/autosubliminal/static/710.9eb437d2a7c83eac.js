"use strict";
(self["webpackChunkautosubliminal"] = self["webpackChunkautosubliminal"] || []).push([[710],{

/***/ 4817:
/*!**************************************************!*\
  !*** ./src/app/core/services/api/log.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogService": () => (/* binding */ LogService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var _app_settings_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../app-settings.service */ 1205);
/* harmony import */ var _api_service_template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api-service-template */ 8621);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);





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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _core_services_api_log_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services/api/log.service */ 4817);
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
    styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2ctY2xlYXIuY29tcG9uZW50LnNjc3MifQ== */"]
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _clear_log_clear_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clear/log-clear.component */ 8036);
/* harmony import */ var _view_log_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/log-view.component */ 9930);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);





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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);





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

/***/ 9930:
/*!********************************************************!*\
  !*** ./src/app/modules/log/view/log-view.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogViewComponent": () => (/* binding */ LogViewComponent)
/* harmony export */ });
/* harmony import */ var rxjs_webSocket__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/webSocket */ 3390);
/* harmony import */ var _app_settings_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../app-settings.service */ 1205);
/* harmony import */ var _shared_models_loglevel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/models/loglevel */ 4572);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _core_services_api_log_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/api/log.service */ 4817);
/* harmony import */ var _core_services_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/message.service */ 1245);
/* harmony import */ var _core_services_scroll_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/services/scroll.service */ 5488);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/panel */ 4266);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/dropdown */ 8992);
/* harmony import */ var _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/loading/loading.component */ 5102);
/* harmony import */ var _shared_components_scroll_scroll_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/scroll/scroll.component */ 597);
















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
    constructor(logService, messageService, scrollService) {
      this.logService = logService;
      this.messageService = messageService;
      this.scrollService = scrollService;
      this.LOG_MESSAGE_REGEX = /^((?<date>\d{4}\-\d{2}\-\d{2})\s(?<time>\d{2}:\d{2}:\d{2},\d{3})\s(?<loglevel>\w+))/;
      this.selectedLogNum = 0;
      this.selectedLoglevel = '';
      this.loading = false;
      this.tailing = false;
      this.tailingDisabled = false; // true for non current (lognum != 0) logfiles as tailing has no use in this case

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
        // Change button label
        this.tailButtonLabel = 'Stop tailing';
        this.tailButtonIcon = 'pi pi-pause'; // Scroll to right position when tailing is enabled

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
      return (0,rxjs_webSocket__WEBPACK_IMPORTED_MODULE_8__.webSocket)(config);
    }

    handleLogTailing() {
      if (this.tailing && !this.tailingDisabled) {
        // Subscribe on new logs once loaded (only for current logfile -> logNum = 0)
        this.logWebsocket = this.createLogWebSocket(); // Need to create a new socket after unsubscribe

        this.logWebsocket.subscribe(logMessage => {
          if (_app_settings_service__WEBPACK_IMPORTED_MODULE_0__.appSettings.logReversed) {
            // Append to the top
            this.logMessages.unshift(logMessage);
            this.scrollService.triggerScrollUp();
          } else {
            // Append to the end
            this.logMessages.push(logMessage);
            this.scrollService.triggerScrollDown();
          }
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
    return new (t || LogViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_services_api_log_service__WEBPACK_IMPORTED_MODULE_2__.LogService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_services_message_service__WEBPACK_IMPORTED_MODULE_3__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_services_scroll_service__WEBPACK_IMPORTED_MODULE_4__.ScrollService));
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
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, primeng_api__WEBPACK_IMPORTED_MODULE_11__.PrimeTemplate, primeng_panel__WEBPACK_IMPORTED_MODULE_12__.Panel, primeng_button__WEBPACK_IMPORTED_MODULE_13__.Button, primeng_dropdown__WEBPACK_IMPORTED_MODULE_14__.Dropdown, _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__.LoadingComponent, _shared_components_scroll_scroll_component__WEBPACK_IMPORTED_MODULE_6__.ScrollComponent],
    styles: [".log-num[_ngcontent-%COMP%]   .p-badge[_ngcontent-%COMP%], .log-num[_ngcontent-%COMP%]   .p-tag[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n  cursor: pointer;\n}\n.log-num[_ngcontent-%COMP%]   .p-badge[_ngcontent-%COMP%]:hover, .log-num[_ngcontent-%COMP%]   .p-tag[_ngcontent-%COMP%]:hover {\n  -moz-filter: brightness(125%);\n  -o-filter: brightness(125%);\n  filter: brightness(125%);\n}\n.log-tail[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n}\n.log-content[_ngcontent-%COMP%] {\n  overflow: auto;\n  color: var(--text-color);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZy12aWV3LmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXHNjc3NcXG1peGluc1xcX2ZpbHRlci5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXHNjc3NcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLRTs7RUFFRSxvQkFBQTtFQUNBLGVBQUE7QUFKSjtBQU1JOztFQ1JGLDZCRFNvQjtFQ1JwQiwyQkRRb0I7RUNQcEIsd0JET29CO0FBQXRCO0FBS0E7RUFDRSxvQkFBQTtBQUZGO0FBS0E7RUFDRSxjQUFBO0VBQ0Esd0JFZlc7QUZhYiIsImZpbGUiOiJsb2ctdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uLy4uL3Njc3MvdmFyaWFibGVzJztcclxuQGltcG9ydCAnLi4vLi4vLi4vLi4vc2Nzcy9taXhpbnMvZmlsdGVyJztcclxuXHJcbi5sb2ctbnVtIHtcclxuXHJcbiAgLnAtYmFkZ2UsXHJcbiAgLnAtdGFnIHtcclxuICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBAaW5jbHVkZSBmaWx0ZXIoYnJpZ2h0bmVzcygxMjUlKSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ubG9nLXRhaWwge1xyXG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xyXG59XHJcblxyXG4ubG9nLWNvbnRlbnQge1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIGNvbG9yOiAkZm9udC1jb2xvcjtcclxufVxyXG4iLCJAbWl4aW4gZmlsdGVyKCR2YWx1ZSkge1xyXG4gIC13ZWJraXQtZmlsdGVyOiAkdmFsdWU7XHJcbiAgLW1vei1maWx0ZXI6ICR2YWx1ZTtcclxuICAtby1maWx0ZXI6ICR2YWx1ZTtcclxuICBmaWx0ZXI6ICR2YWx1ZTtcclxufVxyXG4iLCIvLyBHbG9iYWwgdmFyaWFibGVzICh2YXIoLS14eHh4KSkgYXJlIHVzZWQgZnJvbSBpbXBvcnRlZCBwcmltZW5nIHN0eWxlc1xyXG5cclxuLy8gRm9udFxyXG4kZm9udC1zaXplOiAxcmVtO1xyXG4kZm9udC1zaXplLXNtOiAoJGZvbnQtc2l6ZSAqIC44NzUpICFkZWZhdWx0O1xyXG4kZm9udC1kZWZhdWx0OiA0MDA7XHJcbiRmb250LWJvbGQ6IDUwMDtcclxuJGZvbnQtY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xyXG5cclxuLy8gQmFja2dyb3VuZFxyXG4kYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3VyZmFjZS1hKTtcclxuXHJcbi8vTWVkaWEgYm91bmRhcmllc1xyXG4kbWVkaWEtbW9iaWxlLW1heC13aWR0aDogNzY3cHg7XHJcbiRtZWRpYS10YWJsZXQtbWluLXdpZHRoOiA3NjhweDtcclxuJG1lZGlhLXRhYmxldC1tYXgtd2lkdGg6IDk5MXB4O1xyXG4kbWVkaWEtZGVza3RvcC1taW4td2lkdGg6IDk5MnB4O1xyXG4iXX0= */"]
  });
  return LogViewComponent;
})();

/***/ }),

/***/ 4572:
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
//# sourceMappingURL=710.9eb437d2a7c83eac.js.map