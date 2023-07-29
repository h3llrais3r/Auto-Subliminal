"use strict";
(self["webpackChunkautosubliminal"] = self["webpackChunkautosubliminal"] || []).push([[592],{

/***/ 1826:
/*!*******************************************************!*\
  !*** ./src/app/core/services/api/settings.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsService: () => (/* binding */ SettingsService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 9736);
/* harmony import */ var _app_settings_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../app-settings.service */ 5751);
/* harmony import */ var _shared_models_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/models/settings */ 4869);
/* harmony import */ var _api_service_template__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api-service-template */ 4176);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);





let SettingsService = /*#__PURE__*/(() => {
  class SettingsService extends _api_service_template__WEBPACK_IMPORTED_MODULE_2__.ApiServiceTemplate {
    constructor() {
      super(...arguments);
      this.URL = `${_app_settings_service__WEBPACK_IMPORTED_MODULE_0__.appSettings.webRoot}/api/settings`;
    }
    // General settings
    getGeneralSettings() {
      return this.httpClient.get(`${this.URL}/general`, this.options).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(settings => new _shared_models_settings__WEBPACK_IMPORTED_MODULE_1__.GeneralSettings(settings)));
    }
    updateGeneralSettings(generalSettings) {
      return this.httpClient.put(`${this.URL}/general`, JSON.stringify(generalSettings), this.options).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(() => true));
    }
    updateGeneralSetting(settingName, value) {
      return this.httpClient.patch(`${this.URL}/general/${settingName}`, JSON.stringify(value), this.options).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(() => true));
    }
    // Library settings
    getLibrarySettings() {
      return this.httpClient.get(`${this.URL}/library`, this.options).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(settings => new _shared_models_settings__WEBPACK_IMPORTED_MODULE_1__.LibrarySettings(settings)));
    }
    updateLibrarySettings(librarySettings) {
      return this.httpClient.put(`${this.URL}/library`, JSON.stringify(librarySettings), this.options).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(() => true));
    }
    // Log settings
    getLogSettings() {
      return this.httpClient.get(`${this.URL}/logging`, this.options).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(settings => new _shared_models_settings__WEBPACK_IMPORTED_MODULE_1__.LogSettings(settings)));
    }
    updateLogSettings(logSettings) {
      return this.httpClient.put(`${this.URL}/logging`, JSON.stringify(logSettings), this.options).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(() => true));
    }
    // WebServer settings
    getWebServerSettings() {
      return this.httpClient.get(`${this.URL}/webserver`, this.options).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(settings => new _shared_models_settings__WEBPACK_IMPORTED_MODULE_1__.WebServerSettings(settings)));
    }
    updateWebServerSettings(webServerSettings) {
      return this.httpClient.put(`${this.URL}/webserver`, JSON.stringify(webServerSettings), this.options).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(() => true));
    }
    // Subliminal settings
    getSubliminalSettings() {
      return this.httpClient.get(`${this.URL}/subliminal`, this.options).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(settings => new _shared_models_settings__WEBPACK_IMPORTED_MODULE_1__.SubliminalSettings(settings)));
    }
    updateSubliminalSettings(subliminalSettings) {
      return this.httpClient.put(`${this.URL}/subliminal`, JSON.stringify(subliminalSettings), this.options).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(() => true));
    }
    // NameMapping settings
    getNameMappingSettings() {
      return this.httpClient.get(`${this.URL}/namemapping`, this.options).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(settings => new _shared_models_settings__WEBPACK_IMPORTED_MODULE_1__.NameMappingSettings(settings)));
    }
    updateNameMappingSettings(nameMappingSettings) {
      return this.httpClient.put(`${this.URL}/namemapping`, JSON.stringify(nameMappingSettings), this.options).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(() => true));
    }
    // SkipMapping settings
    getSkipMappingSettings() {
      return this.httpClient.get(`${this.URL}/skipmapping`, this.options).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(settings => new _shared_models_settings__WEBPACK_IMPORTED_MODULE_1__.SkipMappingSettings(settings)));
    }
    updateSkipMappingSettings(skipMappingSettings) {
      return this.httpClient.put(`${this.URL}/skipmapping`, JSON.stringify(skipMappingSettings), this.options).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(() => true));
    }
    // Notification settings
    getNotificationSettings() {
      return this.httpClient.get(`${this.URL}/notification`, this.options).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(settings => new _shared_models_settings__WEBPACK_IMPORTED_MODULE_1__.NotificationSettings(settings)));
    }
    updateNotificationSettings(notificationSettings) {
      return this.httpClient.put(`${this.URL}/notification`, JSON.stringify(notificationSettings), this.options).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(() => true));
    }
    testNotifier(notifierName) {
      return this.httpClient.patch(`${this.URL}/notification/${notifierName}`, {}, this.options).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(() => true));
    }
    registerTwitter() {
      return this.httpClient.post(`${this.URL}/notification/twitter`, {}, this.options).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(twitterRegistration => new _shared_models_settings__WEBPACK_IMPORTED_MODULE_1__.TwitterRegistration(twitterRegistration)));
    }
    authorizeTwitter(twitterRegistration) {
      return this.httpClient.post(`${this.URL}/notification/twitter`, twitterRegistration, this.options).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(twitterAuthorization => new _shared_models_settings__WEBPACK_IMPORTED_MODULE_1__.TwitterAuthorization(twitterAuthorization)));
    }
    // PostProcess settings
    getPostProcessSettings() {
      return this.httpClient.get(`${this.URL}/postprocessing`, this.options).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(settings => new _shared_models_settings__WEBPACK_IMPORTED_MODULE_1__.PostProcessSettings(settings)));
    }
    updatePostProcessSettings(postProcessSettings) {
      return this.httpClient.put(`${this.URL}/postprocessing`, JSON.stringify(postProcessSettings), this.options).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(() => true));
    }
  }
  SettingsService.ɵfac = /*@__PURE__*/function () {
    let ɵSettingsService_BaseFactory;
    return function SettingsService_Factory(t) {
      return (ɵSettingsService_BaseFactory || (ɵSettingsService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetInheritedFactory"](SettingsService)))(t || SettingsService);
    };
  }();
  SettingsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: SettingsService,
    factory: SettingsService.ɵfac,
    providedIn: 'root'
  });
  return SettingsService;
})();

/***/ }),

/***/ 4869:
/*!*******************************************!*\
  !*** ./src/app/shared/models/settings.ts ***!
  \*******************************************/
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

/***/ })

}]);
//# sourceMappingURL=common.b5658ddb970a258a.js.map