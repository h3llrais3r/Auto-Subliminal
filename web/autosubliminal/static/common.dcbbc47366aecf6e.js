"use strict";
(self["webpackChunkautosubliminal"] = self["webpackChunkautosubliminal"] || []).push([[76],{

/***/ 1753:
/*!*******************************************************************!*\
  !*** ./src/app/components/input/number/input-number.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InputNumberComponent: () => (/* binding */ InputNumberComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/inputnumber */ 1759);
/* harmony import */ var _input_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../input.component */ 1473);







let InputNumberComponent = /*#__PURE__*/(() => {
  class InputNumberComponent extends _input_component__WEBPACK_IMPORTED_MODULE_0__.InputComponent {
    constructor() {
      super(...arguments);
      this.mode = 'decimal'; // default decimal
      this.useGrouping = false; // default no grouping
      this.showButtons = true; // default show buttons
      this.step = 1; // default 1
    }
    static #_ = this.ɵfac = /*@__PURE__*/(() => {
      let ɵInputNumberComponent_BaseFactory;
      return function InputNumberComponent_Factory(t) {
        return (ɵInputNumberComponent_BaseFactory || (ɵInputNumberComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](InputNumberComponent)))(t || InputNumberComponent);
      };
    })();
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: InputNumberComponent,
      selectors: [["app-input-number"]],
      inputs: {
        mode: "mode",
        useGrouping: "useGrouping",
        showButtons: "showButtons",
        step: "step",
        min: "min",
        max: "max",
        suffix: "suffix"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NG_VALUE_ACCESSOR,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => InputNumberComponent),
        multi: true
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 1,
      vars: 9,
      consts: [["decrementButtonClass", "p-button-outlined input-addon", "incrementButtonClass", "p-button-outlined input-addon", "styleClass", "w-100", "inputStyleClass", "w-100", 1, "w-100", 3, "onFocus", "onKeyDown", "onBlur", "inputId", "formControl", "mode", "useGrouping", "step", "min", "max", "suffix", "showButtons"]],
      template: function InputNumberComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p-inputNumber", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onFocus", function InputNumberComponent_Template_p_inputNumber_onFocus_0_listener($event) {
            return ctx.onFocus($event);
          })("onKeyDown", function InputNumberComponent_Template_p_inputNumber_onKeyDown_0_listener($event) {
            return ctx.onKeyDown($event);
          })("onBlur", function InputNumberComponent_Template_p_inputNumber_onBlur_0_listener($event) {
            return ctx.onBlur($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("inputId", ctx.id || ctx.formControlName)("formControl", ctx.control)("mode", ctx.mode)("useGrouping", ctx.useGrouping)("step", ctx.step)("min", ctx.min)("max", ctx.max)("suffix", ctx.suffix)("showButtons", ctx.showButtons);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlDirective, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_3__.InputNumberModule, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_3__.InputNumber],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return InputNumberComponent;
})();

/***/ }),

/***/ 5789:
/*!***************************************************************!*\
  !*** ./src/app/components/input/text/input-text.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InputTextComponent: () => (/* binding */ InputTextComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-mask */ 6769);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/inputtext */ 8361);
/* harmony import */ var _input_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../input.component */ 1473);









let InputTextComponent = /*#__PURE__*/(() => {
  class InputTextComponent extends _input_component__WEBPACK_IMPORTED_MODULE_0__.InputComponent {
    constructor() {
      super(...arguments);
      this.type = 'text';
      this.placeholder = '';
      this.mask = '';
      this.dropSpecialCharacters = true;
    }
    writeValue(obj) {
      super.writeValue(obj);
      this.changeDetectorRef.detectChanges(); // ngx-mask makes changes to the input, so detect changes again to prevent ExpressionChangedAfterItHasBeenCheckedError
    }
    static #_ = this.ɵfac = /*@__PURE__*/(() => {
      let ɵInputTextComponent_BaseFactory;
      return function InputTextComponent_Factory(t) {
        return (ɵInputTextComponent_BaseFactory || (ɵInputTextComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](InputTextComponent)))(t || InputTextComponent);
      };
    })();
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: InputTextComponent,
      selectors: [["app-input-text"]],
      inputs: {
        type: "type",
        placeholder: "placeholder",
        mask: "mask",
        dropSpecialCharacters: "dropSpecialCharacters"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NG_VALUE_ACCESSOR,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => InputTextComponent),
        multi: true
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 1,
      vars: 7,
      consts: [["pInputText", "", 1, "w-100", 3, "focus", "keydown", "keyup", "change", "blur", "type", "id", "formControl", "placeholder", "ngClass", "mask", "dropSpecialCharacters"]],
      template: function InputTextComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("focus", function InputTextComponent_Template_input_focus_0_listener($event) {
            return ctx.onFocus($event);
          })("keydown", function InputTextComponent_Template_input_keydown_0_listener($event) {
            return ctx.onKeyDown($event);
          })("keyup", function InputTextComponent_Template_input_keyup_0_listener($event) {
            return ctx.onKeyUp($event);
          })("change", function InputTextComponent_Template_input_change_0_listener($event) {
            return ctx.onChange($event);
          })("blur", function InputTextComponent_Template_input_blur_0_listener($event) {
            return ctx.onBlur($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.type)("id", ctx.id || ctx.formControlName)("formControl", ctx.control)("placeholder", ctx.placeholder)("ngClass", ctx.validationClass)("mask", ctx.mask)("dropSpecialCharacters", ctx.dropSpecialCharacters);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlDirective, primeng_inputtext__WEBPACK_IMPORTED_MODULE_4__.InputTextModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_4__.InputText, ngx_mask__WEBPACK_IMPORTED_MODULE_5__.NgxMaskDirective],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return InputTextComponent;
})();

/***/ }),

/***/ 8325:
/*!*********************************************************!*\
  !*** ./src/app/components/loading/loading.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoadingComponent: () => (/* binding */ LoadingComponent)
/* harmony export */ });
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/dialog */ 6280);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);



let LoadingComponent = /*#__PURE__*/(() => {
  class LoadingComponent {
    constructor() {
      this.visible = false;
    }
    static #_ = this.ɵfac = function LoadingComponent_Factory(t) {
      return new (t || LoadingComponent)();
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoadingComponent,
      selectors: [["app-loading"]],
      inputs: {
        visible: "visible"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 3,
      vars: 6,
      consts: [["styleClass", "dialog-transparent", 3, "visibleChange", "visible", "modal", "closable", "draggable", "resizable", "showHeader"], [1, "loading"], ["aria-hidden", "true", 1, "fa", "fa-spinner", "fa-spin", "fa-5x"]],
      template: function LoadingComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-dialog", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("visibleChange", function LoadingComponent_Template_p_dialog_visibleChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.visible, $event) || (ctx.visible = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("visible", ctx.visible);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("modal", true)("closable", false)("draggable", false)("resizable", false)("showHeader", false);
        }
      },
      dependencies: [primeng_dialog__WEBPACK_IMPORTED_MODULE_1__.DialogModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_1__.Dialog],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return LoadingComponent;
})();

/***/ }),

/***/ 6136:
/*!************************************!*\
  !*** ./src/app/models/settings.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GeneralSettings: () => (/* binding */ GeneralSettings),
/* harmony export */   LibrarySettings: () => (/* binding */ LibrarySettings),
/* harmony export */   LogSettings: () => (/* binding */ LogSettings),
/* harmony export */   NameMappingSettings: () => (/* binding */ NameMappingSettings),
/* harmony export */   NotificationSettings: () => (/* binding */ NotificationSettings),
/* harmony export */   PostProcessSettings: () => (/* binding */ PostProcessSettings),
/* harmony export */   SkipMappingSettings: () => (/* binding */ SkipMappingSettings),
/* harmony export */   SubliminalSettings: () => (/* binding */ SubliminalSettings),
/* harmony export */   TwitterAuthorization: () => (/* binding */ TwitterAuthorization),
/* harmony export */   TwitterRegistration: () => (/* binding */ TwitterRegistration),
/* harmony export */   WebServerSettings: () => (/* binding */ WebServerSettings)
/* harmony export */ });
class GeneralSettings {
  constructor(obj) {
    Object.assign(this, obj);
  }
}
class LibrarySettings {
  constructor(obj) {
    Object.assign(this, obj);
  }
}
class LogSettings {
  constructor(obj) {
    Object.assign(this, obj);
  }
}
class WebServerSettings {
  constructor(obj) {
    Object.assign(this, obj);
  }
}
class SubliminalSettings {
  constructor(obj) {
    Object.assign(this, obj);
  }
}
class NameMappingSettings {
  constructor(obj) {
    Object.assign(this, obj);
  }
}
class SkipMappingSettings {
  constructor(obj) {
    Object.assign(this, obj);
  }
}
class NotificationSettings {
  constructor(obj) {
    Object.assign(this, obj);
  }
}
class TwitterRegistration {
  constructor(obj) {
    Object.assign(this, obj);
  }
}
class TwitterAuthorization {
  constructor(obj) {
    Object.assign(this, obj);
  }
}
class PostProcessSettings {
  constructor(obj) {
    Object.assign(this, obj);
  }
}

/***/ }),

/***/ 6078:
/*!**************************************************!*\
  !*** ./src/app/services/api/settings.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsService: () => (/* binding */ SettingsService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 271);
/* harmony import */ var _app_settings_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app-settings.service */ 4730);
/* harmony import */ var _models_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/settings */ 6136);
/* harmony import */ var _api_service_template__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api-service-template */ 8501);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);





let SettingsService = /*#__PURE__*/(() => {
  class SettingsService extends _api_service_template__WEBPACK_IMPORTED_MODULE_2__.ApiServiceTemplate {
    constructor() {
      super(...arguments);
      this.URL = `${_app_settings_service__WEBPACK_IMPORTED_MODULE_0__.appSettings.webRoot}/api/settings`;
    }
    // General settings
    getGeneralSettings() {
      return this.httpClient.get(`${this.URL}/general`, this.options).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(settings => new _models_settings__WEBPACK_IMPORTED_MODULE_1__.GeneralSettings(settings)));
    }
    updateGeneralSettings(generalSettings) {
      return this.httpClient.put(`${this.URL}/general`, JSON.stringify(generalSettings), this.options).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(() => true));
    }
    updateGeneralSetting(settingName, value) {
      return this.httpClient.patch(`${this.URL}/general/${settingName}`, JSON.stringify(value), this.options).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(() => true));
    }
    // Library settings
    getLibrarySettings() {
      return this.httpClient.get(`${this.URL}/library`, this.options).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(settings => new _models_settings__WEBPACK_IMPORTED_MODULE_1__.LibrarySettings(settings)));
    }
    updateLibrarySettings(librarySettings) {
      return this.httpClient.put(`${this.URL}/library`, JSON.stringify(librarySettings), this.options).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(() => true));
    }
    // Log settings
    getLogSettings() {
      return this.httpClient.get(`${this.URL}/logging`, this.options).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(settings => new _models_settings__WEBPACK_IMPORTED_MODULE_1__.LogSettings(settings)));
    }
    updateLogSettings(logSettings) {
      return this.httpClient.put(`${this.URL}/logging`, JSON.stringify(logSettings), this.options).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(() => true));
    }
    // WebServer settings
    getWebServerSettings() {
      return this.httpClient.get(`${this.URL}/webserver`, this.options).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(settings => new _models_settings__WEBPACK_IMPORTED_MODULE_1__.WebServerSettings(settings)));
    }
    updateWebServerSettings(webServerSettings) {
      return this.httpClient.put(`${this.URL}/webserver`, JSON.stringify(webServerSettings), this.options).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(() => true));
    }
    // Subliminal settings
    getSubliminalSettings() {
      return this.httpClient.get(`${this.URL}/subliminal`, this.options).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(settings => new _models_settings__WEBPACK_IMPORTED_MODULE_1__.SubliminalSettings(settings)));
    }
    updateSubliminalSettings(subliminalSettings) {
      return this.httpClient.put(`${this.URL}/subliminal`, JSON.stringify(subliminalSettings), this.options).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(() => true));
    }
    // NameMapping settings
    getNameMappingSettings() {
      return this.httpClient.get(`${this.URL}/namemapping`, this.options).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(settings => new _models_settings__WEBPACK_IMPORTED_MODULE_1__.NameMappingSettings(settings)));
    }
    updateNameMappingSettings(nameMappingSettings) {
      return this.httpClient.put(`${this.URL}/namemapping`, JSON.stringify(nameMappingSettings), this.options).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(() => true));
    }
    // SkipMapping settings
    getSkipMappingSettings() {
      return this.httpClient.get(`${this.URL}/skipmapping`, this.options).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(settings => new _models_settings__WEBPACK_IMPORTED_MODULE_1__.SkipMappingSettings(settings)));
    }
    updateSkipMappingSettings(skipMappingSettings) {
      return this.httpClient.put(`${this.URL}/skipmapping`, JSON.stringify(skipMappingSettings), this.options).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(() => true));
    }
    // Notification settings
    getNotificationSettings() {
      return this.httpClient.get(`${this.URL}/notification`, this.options).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(settings => new _models_settings__WEBPACK_IMPORTED_MODULE_1__.NotificationSettings(settings)));
    }
    updateNotificationSettings(notificationSettings) {
      return this.httpClient.put(`${this.URL}/notification`, JSON.stringify(notificationSettings), this.options).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(() => true));
    }
    testNotifier(notifierName) {
      return this.httpClient.patch(`${this.URL}/notification/${notifierName}`, {}, this.options).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(() => true));
    }
    registerTwitter() {
      return this.httpClient.post(`${this.URL}/notification/twitter`, {}, this.options).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(twitterRegistration => new _models_settings__WEBPACK_IMPORTED_MODULE_1__.TwitterRegistration(twitterRegistration)));
    }
    authorizeTwitter(twitterRegistration) {
      return this.httpClient.post(`${this.URL}/notification/twitter`, twitterRegistration, this.options).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(twitterAuthorization => new _models_settings__WEBPACK_IMPORTED_MODULE_1__.TwitterAuthorization(twitterAuthorization)));
    }
    // PostProcess settings
    getPostProcessSettings() {
      return this.httpClient.get(`${this.URL}/postprocessing`, this.options).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(settings => new _models_settings__WEBPACK_IMPORTED_MODULE_1__.PostProcessSettings(settings)));
    }
    updatePostProcessSettings(postProcessSettings) {
      return this.httpClient.put(`${this.URL}/postprocessing`, JSON.stringify(postProcessSettings), this.options).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(() => true));
    }
    static #_ = this.ɵfac = /*@__PURE__*/(() => {
      let ɵSettingsService_BaseFactory;
      return function SettingsService_Factory(t) {
        return (ɵSettingsService_BaseFactory || (ɵSettingsService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetInheritedFactory"](SettingsService)))(t || SettingsService);
      };
    })();
    static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: SettingsService,
      factory: SettingsService.ɵfac,
      providedIn: 'root'
    });
  }
  return SettingsService;
})();

/***/ })

}]);
//# sourceMappingURL=common.dcbbc47366aecf6e.js.map