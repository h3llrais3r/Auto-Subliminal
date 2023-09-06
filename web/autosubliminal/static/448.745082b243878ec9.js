"use strict";
(self["webpackChunkautosubliminal"] = self["webpackChunkautosubliminal"] || []).push([[448],{

/***/ 7715:
/*!************************************************************!*\
  !*** ./src/app/pages/system/info/system-info.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SystemInfoComponent: () => (/* binding */ SystemInfoComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 839);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/tabview */ 1820);
/* harmony import */ var _models_systeminfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models/systeminfo */ 8435);
/* harmony import */ var _services_api_system_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/api/system.service */ 3948);
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/message.service */ 6288);











function SystemInfoComponent_div_3_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.version);
  }
}
function SystemInfoComponent_div_3_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8)(1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("href", ctx_r3.versionUrl, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r3.version);
  }
}
function SystemInfoComponent_div_3_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6)(1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Git branch");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 8)(4, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("href", ctx_r4.systemInfo.currentBranchUrl, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r4.systemInfo.currentBranch);
  }
}
function SystemInfoComponent_div_3_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6)(1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Git version");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 8)(4, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("href", ctx_r5.systemInfo.currentVersionUrl, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r5.systemInfo.currentVersion);
  }
}
function SystemInfoComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5)(1, "div", 6)(2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "OS");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 6)(7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "PID");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 6)(12, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Version");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, SystemInfoComponent_div_3_div_14_Template, 2, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, SystemInfoComponent_div_3_div_15_Template, 3, 2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, SystemInfoComponent_div_3_div_16_Template, 6, 2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, SystemInfoComponent_div_3_div_17_Template, 6, 2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 6)(19, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "System encoding");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 6)(24, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Python version");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 6)(29, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Python location");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 6)(34, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "Config file");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 6)(39, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "Database file");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 6)(44, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, "Log file");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](48, "hr", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "div", 6)(50, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, "Source");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "div", 8)(53, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div", 6)(56, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57, "Issues");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "div", 8)(59, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "div", 6)(62, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](63, "Wiki");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "div", 8)(65, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.systemInfo.os);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.systemInfo.pid);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r0.versionUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.versionUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.gitInstall);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.gitInstall);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.systemInfo.systemEncoding);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.systemInfo.pythonVersion);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.systemInfo.pythonLocation);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.systemInfo.configFile);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.systemInfo.databaseFile);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.systemInfo.logFile);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("href", ctx_r0.SOURCE_URL, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.SOURCE_URL);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("href", ctx_r0.ISSUES_URL, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.ISSUES_URL);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("href", ctx_r0.WIKI_URL, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.WIKI_URL);
  }
}
function SystemInfoComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 13);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", ctx_r1.changelog, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
  }
}
let SystemInfoComponent = /*#__PURE__*/(() => {
  class SystemInfoComponent {
    constructor() {
      this.SOURCE_URL = 'https://github.com/h3llrais3r/Auto-Subliminal';
      this.ISSUES_URL = `${this.SOURCE_URL}/issues`;
      this.WIKI_URL = `${this.SOURCE_URL}/wiki`;
      this.gitInstall = false;
      this.NOT_AVAILABLE = 'N/A';
      this.CHANGELOG_URL = 'https://raw.githubusercontent.com/h3llrais3r/Auto-Subliminal/master/changelog.html';
      this.httpClient = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient);
      this.systemService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_services_api_system_service__WEBPACK_IMPORTED_MODULE_1__.SystemService);
      this.messageService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_services_message_service__WEBPACK_IMPORTED_MODULE_2__.MessageService);
      this.domSanitizer = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.DomSanitizer);
      this.destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_3__.DestroyRef);
    }
    ngOnInit() {
      // Get system info
      this.systemService.getSystemInfo().pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_6__.takeUntilDestroyed)(this.destroyRef)).subscribe({
        next: systemInfo => {
          this.systemInfo = systemInfo;
          if (this.systemInfo.installType === _models_systeminfo__WEBPACK_IMPORTED_MODULE_0__.SystemInstallType.SOURCE) {
            this.version = this.systemInfo.currentVersion;
            this.versionUrl = this.systemInfo.currentVersionUrl;
          } else if (this.systemInfo.installType === _models_systeminfo__WEBPACK_IMPORTED_MODULE_0__.SystemInstallType.GIT) {
            this.version = this.systemInfo.releaseVersion;
            this.gitInstall = true;
          } else {
            this.version = this.NOT_AVAILABLE;
          }
        },
        error: () => this.messageService.showErrorMessage('Unable to get the system info!')
      });
      // Get changelog
      this.httpClient.get(this.CHANGELOG_URL, {
        responseType: 'text'
      }).pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_6__.takeUntilDestroyed)(this.destroyRef)).subscribe({
        next: changelog => {
          this.changelog = this.domSanitizer.bypassSecurityTrustHtml(this.parseChangelog(changelog));
        },
        error: () => this.messageService.showErrorMessage('Unable to get the changelog!')
      });
    }
    parseChangelog(changelogHtml) {
      let result = '';
      const parser = new DOMParser();
      const parsedChangelog = parser.parseFromString(changelogHtml, 'text/html');
      const releases = parsedChangelog.getElementsByClassName('release');
      Array.from(releases).forEach((release, index) => {
        const version = release.getElementsByClassName('version')[0];
        const releaseDate = release.getElementsByClassName('releasedate')[0];
        const changelog = release.getElementsByClassName('changelog')[0];
        if (index > 0) {
          result += '<hr class="separator">';
        }
        result += '<div class="release">';
        result += '<div class="version-label">Version</div>' + version.outerHTML;
        result += '<div class="releasedate-label">Release date</div>' + releaseDate.outerHTML;
        result += '<div class="changelog-label">Changelog</div>' + changelog.outerHTML;
        result += '</div>';
      });
      return result;
    }
  }
  SystemInfoComponent.ɵfac = function SystemInfoComponent_Factory(t) {
    return new (t || SystemInfoComponent)();
  };
  SystemInfoComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: SystemInfoComponent,
    selectors: [["app-system-info"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
    decls: 6,
    vars: 2,
    consts: [[1, "container-lg"], ["header", "General"], ["class", "info-wrapper", 4, "ngIf"], ["header", "Changelog"], ["class", "changelog-wrapper", 3, "innerHTML", 4, "ngIf"], [1, "info-wrapper"], [1, "info-item", "row"], [1, "info-label", "col-sm-12", "col-md-4"], [1, "info", "col-sm-12", "col-md-8"], ["class", "info col-sm-12 col-md-8", 4, "ngIf"], ["class", "info-item row", 4, "ngIf"], [1, "separator"], ["target", "_blank", 3, "href"], [1, "changelog-wrapper", 3, "innerHTML"]],
    template: function SystemInfoComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "p-tabView")(2, "p-tabPanel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, SystemInfoComponent_div_3_Template, 67, 18, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p-tabPanel", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, SystemInfoComponent_div_5_Template, 1, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.systemInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.changelog);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, primeng_tabview__WEBPACK_IMPORTED_MODULE_8__.TabViewModule, primeng_tabview__WEBPACK_IMPORTED_MODULE_8__.TabView, primeng_tabview__WEBPACK_IMPORTED_MODULE_8__.TabPanel],
    styles: [".info-wrapper[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.info-wrapper[_ngcontent-%COMP%]   .info-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n\n.changelog-wrapper[_ngcontent-%COMP%]     .release .version {\n  margin-bottom: 1rem;\n}\n.changelog-wrapper[_ngcontent-%COMP%]     .release .version-label {\n  font-weight: 500;\n}\n.changelog-wrapper[_ngcontent-%COMP%]     .release .releasedate {\n  margin-bottom: 1rem;\n}\n.changelog-wrapper[_ngcontent-%COMP%]     .release .releasedate-label {\n  font-weight: 500;\n}\n.changelog-wrapper[_ngcontent-%COMP%]     .release .changelog {\n  margin-bottom: 1rem;\n}\n.changelog-wrapper[_ngcontent-%COMP%]     .release .changelog-label {\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvc3lzdGVtL2luZm8vc3lzdGVtLWluZm8uY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUk7RUFDRSxtQkFBQTtBQUhOO0FBTUk7RUFDRSxnQkNITTtBRERaOztBQVVFO0VBQ0UsbUJBQUE7QUFQSjtBQVNJO0VBQ0UsZ0JDYk07QURNWjtBQVdFO0VBQ0UsbUJBQUE7QUFUSjtBQVdJO0VBQ0UsZ0JDckJNO0FEWVo7QUFhRTtFQUNFLG1CQUFBO0FBWEo7QUFhSTtFQUNFLGdCQzdCTTtBRGtCWiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uLy4uL3Njc3MvdmFyaWFibGVzJztcclxuXHJcbi5pbmZvLXdyYXBwZXIge1xyXG4gIC5pbmZvIHtcclxuICAgICYtaXRlbSB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICB9XHJcblxyXG4gICAgJi1sYWJlbCB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiAkZm9udC1ib2xkO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmNoYW5nZWxvZy13cmFwcGVyIDo6bmctZGVlcCAucmVsZWFzZSB7XHJcbiAgLnZlcnNpb24ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuXHJcbiAgICAmLWxhYmVsIHtcclxuICAgICAgZm9udC13ZWlnaHQ6ICRmb250LWJvbGQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAucmVsZWFzZWRhdGUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuXHJcbiAgICAmLWxhYmVsIHtcclxuICAgICAgZm9udC13ZWlnaHQ6ICRmb250LWJvbGQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY2hhbmdlbG9nIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcblxyXG4gICAgJi1sYWJlbCB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiAkZm9udC1ib2xkO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIvLyBHbG9iYWwgdmFyaWFibGVzICh2YXIoLS14eHh4KSkgYXJlIHVzZWQgZnJvbSBpbXBvcnRlZCBwcmltZW5nIHN0eWxlc1xyXG5cclxuLy8gRm9udFxyXG4kZm9udC1zaXplOiAxcmVtO1xyXG4kZm9udC1zaXplLXNtOiAoJGZvbnQtc2l6ZSAqIC44NzUpICFkZWZhdWx0O1xyXG4kZm9udC1kZWZhdWx0OiA0MDA7XHJcbiRmb250LWJvbGQ6IDUwMDtcclxuJGZvbnQtY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xyXG5cclxuLy8gQmFja2dyb3VuZFxyXG4kYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3VyZmFjZS1hKTtcclxuXHJcbi8vTWVkaWEgYm91bmRhcmllc1xyXG4kbWVkaWEtbW9iaWxlLW1heC13aWR0aDogNzY3cHg7XHJcbiRtZWRpYS10YWJsZXQtbWluLXdpZHRoOiA3NjhweDtcclxuJG1lZGlhLXRhYmxldC1tYXgtd2lkdGg6IDk5MXB4O1xyXG4kbWVkaWEtZGVza3RvcC1taW4td2lkdGg6IDk5MnB4O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
  return SystemInfoComponent;
})();

/***/ }),

/***/ 7531:
/*!****************************************************************!*\
  !*** ./src/app/pages/system/status/system-status.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SystemStatusComponent: () => (/* binding */ SystemStatusComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 839);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ 8026);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/panel */ 6110);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/table */ 6192);
/* harmony import */ var _services_api_system_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/api/system.service */ 3948);
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/message.service */ 6288);
/* harmony import */ var _services_system_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/system-event.service */ 431);













function SystemStatusComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "th", 7)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "p-sortIcon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "th", 9)(6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Active");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "p-sortIcon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "th", 11)(10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Alive");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "p-sortIcon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "th", 13)(14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Interval");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "p-sortIcon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "th", 15)(18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Last run");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "p-sortIcon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "th", 17)(22, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Next run");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "p-sortIcon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
}
const _c0 = function (a0) {
  return {
    "scheduler-running": a0
  };
};
function SystemStatusComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 19)(1, "td")(2, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "td")(7, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Active");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "td")(12, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Alive");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "td")(17, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Interval");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "td")(22, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Last Run");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "td")(27, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Next run");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const scheduler_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](7, _c0, scheduler_r4.running));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](scheduler_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](scheduler_r4.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](scheduler_r4.alive);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](scheduler_r4.intervalFormatted);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](scheduler_r4.lastRunFormatted);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](scheduler_r4.running ? "Running" : scheduler_r4.nextRunFormatted);
  }
}
function SystemStatusComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "th", 7)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "p-sortIcon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "th", 22)(6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Path");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "p-sortIcon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "th", 24)(10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Free space");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "p-sortIcon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
}
function SystemStatusComponent_ng_template_13_i_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 28);
  }
}
function SystemStatusComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td")(2, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "td")(7, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Path");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "td")(12, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Free space");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, SystemStatusComponent_ng_template_13_i_16_Template, 1, 0, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const pathInfo_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](pathInfo_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](pathInfo_r5.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](pathInfo_r5.freeSpaceFormatted);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", pathInfo_r5.freePercentage < 10);
  }
}
let SystemStatusComponent = /*#__PURE__*/(() => {
  class SystemStatusComponent {
    constructor() {
      this.systemService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_services_api_system_service__WEBPACK_IMPORTED_MODULE_0__.SystemService);
      this.systemEventService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_services_system_event_service__WEBPACK_IMPORTED_MODULE_2__.SystemEventService);
      this.messageService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_services_message_service__WEBPACK_IMPORTED_MODULE_1__.MessageService);
      this.destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_3__.DestroyRef);
    }
    ngOnInit() {
      // Get schedulers
      this.systemService.getSchedulers().pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_4__.takeUntilDestroyed)(this.destroyRef)).subscribe({
        next: schedulers => {
          this.schedulers = schedulers;
          // Subscribe on scheduler start events
          this.systemEventService.schedulerStart$.pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_4__.takeUntilDestroyed)(this.destroyRef)).subscribe({
            next: startedScheduler => {
              // Replace started scheduler in list of schedulers
              this.schedulers = this.schedulers.map(scheduler => scheduler.name === startedScheduler.name ? startedScheduler : scheduler);
            }
          });
          // Subscribe on scheduler finish events
          this.systemEventService.schedulerFinish$.pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_4__.takeUntilDestroyed)(this.destroyRef)).subscribe({
            next: finishedScheduler => {
              // Replace finished scheduler in list of schedulers
              this.schedulers = this.schedulers.map(scheduler => scheduler.name === finishedScheduler.name ? finishedScheduler : scheduler);
            }
          });
        },
        error: () => this.messageService.showErrorMessage('Unable to get the system schedulers!')
      });
      // Get paths
      this.systemService.getPaths().pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_4__.takeUntilDestroyed)(this.destroyRef)).subscribe({
        next: paths => {
          this.paths = paths;
        },
        error: () => this.messageService.showErrorMessage('Unable to get the system paths!')
      });
    }
  }
  SystemStatusComponent.ɵfac = function SystemStatusComponent_Factory(t) {
    return new (t || SystemStatusComponent)();
  };
  SystemStatusComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: SystemStatusComponent,
    selectors: [["app-system-status"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
    decls: 14,
    vars: 6,
    consts: [[1, "container-lg"], ["header", "Status"], [1, "panel-section"], [1, "panel-section-header"], ["styleClass", "p-datatable-sm p-datatable-gridlines p-datatable-striped p-datatable-responsive-mode", 3, "value", "autoLayout", "rowHover"], ["pTemplate", "header"], ["pTemplate", "body"], ["pSortableColumn", "name"], ["field", "name"], ["pSortableColumn", "active"], ["field", "active"], ["pSortableColumn", "alive"], ["field", "alive"], ["pSortableColumn", "interval"], ["field", "interval"], ["pSortableColumn", "lastRun"], ["field", "lastRun"], ["pSortableColumn", "nextRun"], ["field", "nextRun"], [3, "ngClass"], [1, "p-column-title"], [1, "p-column-data"], ["pSortableColumn", "path"], ["field", "path"], ["pSortableColumn", "freeBytes"], ["field", "freeBytes"], [1, "p-column-data", "wrap-text"], ["class", "fa fa-exclamation-triangle text-danger ml-1", "title", "Low disk space", 4, "ngIf"], ["title", "Low disk space", 1, "fa", "fa-exclamation-triangle", "text-danger", "ml-1"]],
    template: function SystemStatusComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "p-panel", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Schedulers");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p-table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, SystemStatusComponent_ng_template_6_Template, 25, 0, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, SystemStatusComponent_ng_template_7_Template, 31, 9, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 2)(9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Paths");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "p-table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, SystemStatusComponent_ng_template_12_Template, 13, 0, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, SystemStatusComponent_ng_template_13_Template, 17, 4, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.schedulers)("autoLayout", true)("rowHover", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.paths)("autoLayout", true)("rowHover", true);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, primeng_panel__WEBPACK_IMPORTED_MODULE_6__.PanelModule, primeng_panel__WEBPACK_IMPORTED_MODULE_6__.Panel, primeng_api__WEBPACK_IMPORTED_MODULE_7__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_8__.TableModule, primeng_table__WEBPACK_IMPORTED_MODULE_8__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_8__.SortableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_8__.SortIcon, primeng_api__WEBPACK_IMPORTED_MODULE_7__.SharedModule],
    styles: [".scheduler-running[_ngcontent-%COMP%] {\n  background-color: var(--success) !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvc3lzdGVtL3N0YXR1cy9zeXN0ZW0tc3RhdHVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsMkNBQUE7QUFERiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uLy4uL3Njc3MvdmFyaWFibGVzJztcclxuXHJcbi5zY2hlZHVsZXItcnVubmluZyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3VjY2VzcykgIWltcG9ydGFudDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
  return SystemStatusComponent;
})();

/***/ }),

/***/ 4448:
/*!***********************************************!*\
  !*** ./src/app/pages/system/system.routes.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _info_system_info_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./info/system-info.component */ 7715);
/* harmony import */ var _status_system_status_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./status/system-status.component */ 7531);


const routes = [{
  path: '',
  redirectTo: 'info',
  pathMatch: 'full'
}, {
  path: 'info',
  component: _info_system_info_component__WEBPACK_IMPORTED_MODULE_0__.SystemInfoComponent
}, {
  path: 'status',
  component: _status_system_status_component__WEBPACK_IMPORTED_MODULE_1__.SystemStatusComponent
}, {
  path: '**',
  redirectTo: 'info'
}];
// Use default export for simplified lazy loading (https://angular.io/guide/standalone-components#lazy-loading-and-default-exports)
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (routes);

/***/ }),

/***/ 1820:
/*!***********************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-tabview.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabPanel: () => (/* binding */ TabPanel),
/* harmony export */   TabView: () => (/* binding */ TabView),
/* harmony export */   TabViewModule: () => (/* binding */ TabViewModule)
/* harmony export */ });
/* harmony import */ var D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ 8026);
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/dom */ 4946);
/* harmony import */ var primeng_icons_chevronleft__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/icons/chevronleft */ 3642);
/* harmony import */ var primeng_icons_chevronright__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/icons/chevronright */ 3713);
/* harmony import */ var primeng_icons_times__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/icons/times */ 8993);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/ripple */ 1339);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/tooltip */ 1251);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/utils */ 5861);
















/**
 * TabPanel is a helper component for TabView component.
 * @group Components
 */
function TabPanel_div_0_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
function TabPanel_div_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TabPanel_div_0_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.contentTemplate);
  }
}
function TabPanel_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TabPanel_div_0_ng_container_2_Template, 2, 1, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx_r0.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("id", ctx_r0.tabView.getTabContentId(ctx_r0.id))("aria-hidden", !ctx_r0.selected)("aria-labelledby", ctx_r0.tabView.getTabHeaderActionId(ctx_r0.id))("data-pc-name", "tabpanel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.contentTemplate && (ctx_r0.cache ? ctx_r0.loaded : ctx_r0.selected));
  }
}
const _c0 = ["*"];
const _c1 = ["content"];
const _c2 = ["navbar"];
const _c3 = ["prevBtn"];
const _c4 = ["nextBtn"];
const _c5 = ["inkbar"];
const _c6 = ["elementToObserve"];
function TabView_button_3_ChevronLeftIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ChevronLeftIcon");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-hidden", true);
  }
}
function TabView_button_3_3_ng_template_0_Template(rf, ctx) {}
function TabView_button_3_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TabView_button_3_3_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function TabView_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 13, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TabView_button_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r11.navBackward());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TabView_button_3_ChevronLeftIcon_2_Template, 1, 1, "ChevronLeftIcon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, TabView_button_3_3_Template, 1, 0, null, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("tabindex", ctx_r1.tabindex)("aria-label", ctx_r1.prevButtonAriaLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.previousIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.previousIconTemplate);
  }
}
function TabView_ng_template_8_li_0_ng_container_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 25);
  }
  if (rf & 2) {
    const tab_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", tab_r13.leftIcon);
  }
}
function TabView_ng_template_8_li_0_ng_container_2_span_2_1_ng_template_0_Template(rf, ctx) {}
function TabView_ng_template_8_li_0_ng_container_2_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TabView_ng_template_8_li_0_ng_container_2_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function TabView_ng_template_8_li_0_ng_container_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TabView_ng_template_8_li_0_ng_container_2_span_2_1_Template, 1, 0, null, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tab_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", tab_r13.leftIconTemplate);
  }
}
function TabView_ng_template_8_li_0_ng_container_2_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 27);
  }
  if (rf & 2) {
    const tab_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", tab_r13.rightIcon);
  }
}
function TabView_ng_template_8_li_0_ng_container_2_span_6_1_ng_template_0_Template(rf, ctx) {}
function TabView_ng_template_8_li_0_ng_container_2_span_6_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TabView_ng_template_8_li_0_ng_container_2_span_6_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function TabView_ng_template_8_li_0_ng_container_2_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TabView_ng_template_8_li_0_ng_container_2_span_6_1_Template, 1, 0, null, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tab_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", tab_r13.rightIconTemplate);
  }
}
function TabView_ng_template_8_li_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TabView_ng_template_8_li_0_ng_container_2_span_1_Template, 1, 1, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TabView_ng_template_8_li_0_ng_container_2_span_2_Template, 2, 1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, TabView_ng_template_8_li_0_ng_container_2_span_5_Template, 1, 1, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, TabView_ng_template_8_li_0_ng_container_2_span_6_Template, 2, 1, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const tab_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", tab_r13.leftIcon && !tab_r13.leftIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", tab_r13.leftIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](tab_r13.header);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", tab_r13.rightIcon && !tab_r13.rightIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", tab_r13.rightIconTemplate);
  }
}
function TabView_ng_template_8_li_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
function TabView_ng_template_8_li_0_ng_container_4_TimesIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "TimesIcon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TabView_ng_template_8_li_0_ng_container_4_TimesIcon_1_Template_TimesIcon_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r37);
      const tab_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).$implicit;
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r35.close($event, tab_r13));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("styleClass", "p-tabview-close");
  }
}
function TabView_ng_template_8_li_0_ng_container_4_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 32);
  }
}
function TabView_ng_template_8_li_0_ng_container_4_3_ng_template_0_Template(rf, ctx) {}
function TabView_ng_template_8_li_0_ng_container_4_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TabView_ng_template_8_li_0_ng_container_4_3_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function TabView_ng_template_8_li_0_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TabView_ng_template_8_li_0_ng_container_4_TimesIcon_1_Template, 1, 1, "TimesIcon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TabView_ng_template_8_li_0_ng_container_4_span_2_Template, 1, 0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, TabView_ng_template_8_li_0_ng_container_4_3_Template, 1, 0, null, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const tab_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !tab_r13.closeIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", tab_r13.closeIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", tab_r13.closeIconTemplate);
  }
}
const _c7 = function (a0, a1) {
  return {
    "p-highlight": a0,
    "p-disabled": a1
  };
};
function TabView_ng_template_8_li_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 18)(1, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TabView_ng_template_8_li_0_Template_a_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r42);
      const tab_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r40.open($event, tab_r13));
    })("keydown", function TabView_ng_template_8_li_0_Template_a_keydown_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r42);
      const tab_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r43.onTabKeyDown($event, tab_r13));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TabView_ng_template_8_li_0_ng_container_2_Template, 7, 5, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, TabView_ng_template_8_li_0_ng_container_3_Template, 1, 0, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, TabView_ng_template_8_li_0_ng_container_4_Template, 4, 3, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const tab_r13 = ctx_r45.$implicit;
    const i_r14 = ctx_r45.index;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](tab_r13.headerStyleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](19, _c7, tab_r13.selected, tab_r13.disabled))("ngStyle", tab_r13.headerStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-p-disabled", tab_r13.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pTooltip", tab_r13.tooltip)("tooltipPosition", tab_r13.tooltipPosition)("positionStyle", tab_r13.tooltipPositionStyle)("tooltipStyleClass", tab_r13.tooltipStyleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("id", ctx_r15.getTabHeaderActionId(tab_r13.id))("aria-controls", ctx_r15.getTabContentId(tab_r13.id))("aria-selected", tab_r13.selected)("tabindex", tab_r13.disabled || !tab_r13.selected ? "-1" : ctx_r15.tabindex)("aria-disabled", tab_r13.disabled)("data-pc-index", i_r14)("data-pc-section", "headeraction");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !tab_r13.headerTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", tab_r13.headerTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", tab_r13.closable);
  }
}
function TabView_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TabView_ng_template_8_li_0_Template, 5, 22, "li", 17);
  }
  if (rf & 2) {
    const tab_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !tab_r13.closed);
  }
}
function TabView_button_11_ChevronRightIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ChevronRightIcon");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-hidden", true);
  }
}
function TabView_button_11_3_ng_template_0_Template(rf, ctx) {}
function TabView_button_11_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TabView_button_11_3_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function TabView_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 33, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TabView_button_11_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r51);
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r50.navForward());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TabView_button_11_ChevronRightIcon_2_Template, 1, 1, "ChevronRightIcon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, TabView_button_11_3_Template, 1, 0, null, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("tabindex", ctx_r6.tabindex)("aria-label", ctx_r6.nextButtonAriaLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r6.nextIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r6.nextIconTemplate);
  }
}
const _c8 = function (a1) {
  return {
    "p-tabview p-component": true,
    "p-tabview-scrollable": a1
  };
};
let TabPanel = /*#__PURE__*/(() => {
  class TabPanel {
    /**
     * Defines if tab is active.
     * @defaultValue false
     * @group Props
     */
    get selected() {
      return !!this._selected;
    }
    set selected(val) {
      this._selected = val;
      if (!this.loaded) {
        this.cd.detectChanges();
      }
      if (val) this.loaded = true;
    }
    /**
     * When true, tab cannot be activated.
     * @defaultValue false
     * @group Props
     */
    get disabled() {
      return !!this._disabled;
    }
    set disabled(disabled) {
      this._disabled = disabled;
      this.tabView.cd.markForCheck();
    }
    /**
     * Title of the tabPanel.
     * @group Props
     */
    get header() {
      return this._header;
    }
    set header(header) {
      this._header = header;
      // We have to wait for the rendering and then retrieve the actual size element from the DOM.
      // in future `Promise.resolve` can be changed to `queueMicrotask` (if ie11 support will be dropped)
      Promise.resolve().then(() => {
        this.tabView.updateInkBar();
        this.tabView.cd.markForCheck();
      });
    }
    /**
     * Left icon of the tabPanel.
     * @group Props
     * @deprecated since v15.4.2, use `lefticon` template instead.
     */
    get leftIcon() {
      return this._leftIcon;
    }
    set leftIcon(leftIcon) {
      this._leftIcon = leftIcon;
      this.tabView.cd.markForCheck();
    }
    /**
     * Left icon of the tabPanel.
     * @group Props
     * @deprecated since v15.4.2, use `righticon` template instead.
     */
    get rightIcon() {
      return this._rightIcon;
    }
    set rightIcon(rightIcon) {
      this._rightIcon = rightIcon;
      this.tabView.cd.markForCheck();
    }
    constructor(tabView, el, viewContainer, cd) {
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "el", void 0);
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "viewContainer", void 0);
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "cd", void 0);
      /**
       * Defines if tab can be removed.
       * @group Props
       */
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "closable", false);
      /**
       * Inline style of the tab header.
       * @group Props
       */
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "headerStyle", void 0);
      /**
       * Style class of the tab header.
       * @group Props
       */
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "headerStyleClass", void 0);
      /**
       * Whether a lazy loaded panel should avoid getting loaded again on reselection.
       * @group Props
       */
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "cache", true);
      /**
       * Advisory information to display in a tooltip on hover.
       * @group Props
       */
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "tooltip", void 0);
      /**
       * Position of the tooltip.
       * @group Props
       */
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "tooltipPosition", 'top');
      /**
       * Type of CSS position.
       * @group Props
       */
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "tooltipPositionStyle", 'absolute');
      /**
       * Style class of the tooltip.
       * @group Props
       */
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "tooltipStyleClass", void 0);
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "templates", void 0);
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "closed", false);
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "view", null);
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_selected", void 0);
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_disabled", void 0);
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_header", void 0);
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_leftIcon", void 0);
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_rightIcon", undefined);
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "loaded", false);
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "id", void 0);
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "contentTemplate", void 0);
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "headerTemplate", void 0);
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "leftIconTemplate", void 0);
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "rightIconTemplate", void 0);
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "closeIconTemplate", void 0);
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "tabView", void 0);
      this.el = el;
      this.viewContainer = viewContainer;
      this.cd = cd;
      this.tabView = tabView;
      this.id = (0,primeng_utils__WEBPACK_IMPORTED_MODULE_2__.UniqueComponentId)();
    }
    ngAfterContentInit() {
      this.templates.forEach(item => {
        switch (item.getType()) {
          case 'header':
            this.headerTemplate = item.template;
            break;
          case 'content':
            this.contentTemplate = item.template;
            break;
          case 'righticon':
            this.rightIconTemplate = item.template;
            break;
          case 'lefticon':
            this.leftIconTemplate = item.template;
            break;
          case 'closeicon':
            this.closeIconTemplate = item.template;
            break;
          default:
            this.contentTemplate = item.template;
            break;
        }
      });
    }
    ngOnDestroy() {
      this.view = null;
    }
  }
  (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(TabPanel, "\u0275fac", function TabPanel_Factory(t) {
    return new (t || TabPanel)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"]((0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => TabView)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef));
  });
  (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(TabPanel, "\u0275cmp", /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: TabPanel,
    selectors: [["p-tabPanel"]],
    contentQueries: function TabPanel_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_3__.PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.templates = _t);
      }
    },
    hostAttrs: [1, "p-element"],
    inputs: {
      closable: "closable",
      headerStyle: "headerStyle",
      headerStyleClass: "headerStyleClass",
      cache: "cache",
      tooltip: "tooltip",
      tooltipPosition: "tooltipPosition",
      tooltipPositionStyle: "tooltipPositionStyle",
      tooltipStyleClass: "tooltipStyleClass",
      selected: "selected",
      disabled: "disabled",
      header: "header",
      leftIcon: "leftIcon",
      rightIcon: "rightIcon"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 1,
    consts: [["class", "p-tabview-panel", "role", "tabpanel", 3, "hidden", 4, "ngIf"], ["role", "tabpanel", 1, "p-tabview-panel", 3, "hidden"], [4, "ngIf"], [4, "ngTemplateOutlet"]],
    template: function TabPanel_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TabPanel_div_0_Template, 3, 6, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.closed);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgTemplateOutlet],
    encapsulation: 2
  }));
  return TabPanel;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * TabView is a container component to group content with tabs.
 * @group Components
 */
let TabView = /*#__PURE__*/(() => {
  class TabView {
    /**
     * Index of the active tab to change selected tab programmatically.
     * @group Props
     */
    get activeIndex() {
      return this._activeIndex;
    }
    set activeIndex(val) {
      this._activeIndex = val;
      if (this.preventActiveIndexPropagation) {
        this.preventActiveIndexPropagation = false;
        return;
      }
      if (this.tabs && this.tabs.length && this._activeIndex != null && this.tabs.length > this._activeIndex) {
        this.findSelectedTab().selected = false;
        this.tabs[this._activeIndex].selected = true;
        this.tabChanged = true;
        this.updateScrollBar(val);
      }
    }
    /**
     * When enabled, the focused tab is activated.
     * @group Props
     */

    constructor(platformId, el, cd, renderer) {
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "platformId", void 0);
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "el", void 0);
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "cd", void 0);
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "renderer", void 0);
      /**
       * Inline style of the component.
       * @group Props
       */
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "style", void 0);
      /**
       * Style class of the component.
       * @group Props
       */
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "styleClass", void 0);
      /**
       * Whether tab close is controlled at onClose event or not.
       * @defaultValue false
       * @group Props
       */
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "controlClose", void 0);
      /**
       * When enabled displays buttons at each side of the tab headers to scroll the tab list.
       * @defaultValue false
       * @group Props
       */
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "scrollable", void 0);
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "selectOnFocus", false);
      /**
       * Index of the element in tabbing order.
       * @group Props
       */
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "tabindex", 0);
      /**
       * Callback to invoke on tab change.
       * @param {TabViewChangeEvent} event - Custom tab change event
       * @group Emits
       */
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onChange", new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter());
      /**
       * Callback to invoke on tab close.
       * @param {TabViewCloseEvent} event - Custom tab close event
       * @group Emits
       */
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onClose", new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter());
      /**
       * Callback to invoke on the active tab change.
       * @param {number} index - New active index
       * @group Emits
       */
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "activeIndexChange", new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter());
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "content", void 0);
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "navbar", void 0);
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "prevBtn", void 0);
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "nextBtn", void 0);
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "inkbar", void 0);
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "tabPanels", void 0);
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "templates", void 0);
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "initialized", void 0);
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "tabs", void 0);
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_activeIndex", void 0);
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "preventActiveIndexPropagation", void 0);
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "tabChanged", void 0);
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "backwardIsDisabled", true);
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "forwardIsDisabled", false);
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "tabChangesSubscription", void 0);
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "nextIconTemplate", void 0);
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "previousIconTemplate", void 0);
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "resizeObserver", void 0);
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "shouldVisible", void 0);
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "elementToObserve", void 0);
      this.platformId = platformId;
      this.el = el;
      this.cd = cd;
      this.renderer = renderer;
    }
    ngAfterContentInit() {
      this.initTabs();
      this.tabChangesSubscription = this.tabPanels.changes.subscribe(_ => {
        this.initTabs();
      });
      this.templates.forEach(item => {
        switch (item.getType()) {
          case 'previousicon':
            this.previousIconTemplate = item.template;
            break;
          case 'nexticon':
            this.nextIconTemplate = item.template;
            break;
        }
      });
    }
    ngAfterViewInit() {
      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.isPlatformBrowser)(this.platformId)) {
        this.bindResizeObserver();
      }
    }
    bindResizeObserver() {
      if (!this.resizeObserver) {
        this.resizeObserver = new ResizeObserver(entries => {
          for (let entry of entries) {
            const navbarWidth = parseFloat(getComputedStyle(this.navbar.nativeElement).width);
            const rect = entry.contentRect;
            this.shouldVisible = rect.width < navbarWidth;
            this.cd.detectChanges();
          }
        });
        this.resizeObserver.observe(this.elementToObserve.nativeElement);
      }
    }
    unbindResizeObserver() {
      this.resizeObserver.unobserve(this.elementToObserve.nativeElement);
      this.resizeObserver = null;
    }
    ngAfterViewChecked() {
      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.isPlatformBrowser)(this.platformId)) {
        if (this.tabChanged) {
          this.updateInkBar();
          this.tabChanged = false;
        }
      }
    }
    ngOnDestroy() {
      if (this.tabChangesSubscription) {
        this.tabChangesSubscription.unsubscribe();
      }
      if (this.resizeObserver) {
        this.unbindResizeObserver();
      }
    }
    getTabHeaderActionId(tabId) {
      return `${tabId}_header_action`;
    }
    getTabContentId(tabId) {
      return `${tabId}_content`;
    }
    initTabs() {
      this.tabs = this.tabPanels.toArray();
      let selectedTab = this.findSelectedTab();
      if (!selectedTab && this.tabs.length) {
        if (this.activeIndex != null && this.tabs.length > this.activeIndex) this.tabs[this.activeIndex].selected = true;else this.tabs[0].selected = true;
        this.tabChanged = true;
      }
      this.cd.markForCheck();
    }
    onTabKeyDown(event, tab) {
      switch (event.code) {
        case 'ArrowLeft':
          this.onTabArrowLeftKey(event);
          break;
        case 'ArrowRight':
          this.onTabArrowRightKey(event);
          break;
        case 'Home':
          this.onTabHomeKey(event);
          break;
        case 'End':
          this.onTabEndKey(event);
          break;
        case 'PageDown':
          this.onTabEndKey(event);
          break;
        case 'PageUp':
          this.onTabHomeKey(event);
          break;
        case 'Enter':
        case 'Space':
          this.open(event, tab);
          break;
        default:
          break;
      }
    }
    onTabArrowLeftKey(event) {
      const prevHeaderAction = this.findPrevHeaderAction(event.target.parentElement);
      const index = primeng_dom__WEBPACK_IMPORTED_MODULE_5__.DomHandler.getAttribute(prevHeaderAction, 'data-pc-index');
      prevHeaderAction ? this.changeFocusedTab(event, prevHeaderAction, index) : this.onTabEndKey(event);
      event.preventDefault();
    }
    onTabArrowRightKey(event) {
      const nextHeaderAction = this.findNextHeaderAction(event.target.parentElement);
      const index = primeng_dom__WEBPACK_IMPORTED_MODULE_5__.DomHandler.getAttribute(nextHeaderAction, 'data-pc-index');
      nextHeaderAction ? this.changeFocusedTab(event, nextHeaderAction, index) : this.onTabHomeKey(event);
      event.preventDefault();
    }
    onTabHomeKey(event) {
      const firstHeaderAction = this.findFirstHeaderAction();
      const index = primeng_dom__WEBPACK_IMPORTED_MODULE_5__.DomHandler.getAttribute(firstHeaderAction, 'data-pc-index');
      this.changeFocusedTab(event, firstHeaderAction, index);
      event.preventDefault();
    }
    onTabEndKey(event) {
      const lastHeaderAction = this.findLastHeaderAction();
      const index = primeng_dom__WEBPACK_IMPORTED_MODULE_5__.DomHandler.getAttribute(lastHeaderAction, 'data-pc-index');
      this.changeFocusedTab(event, lastHeaderAction, index);
      event.preventDefault();
    }
    changeFocusedTab(event, element, index) {
      if (element) {
        primeng_dom__WEBPACK_IMPORTED_MODULE_5__.DomHandler.focus(element);
        element.scrollIntoView({
          block: 'nearest'
        });
        if (this.selectOnFocus) {
          const tab = this.tabs[index];
          this.open(event, tab);
        }
      }
    }
    findNextHeaderAction(tabElement, selfCheck = false) {
      const headerElement = selfCheck ? tabElement : tabElement.nextElementSibling;
      return headerElement ? primeng_dom__WEBPACK_IMPORTED_MODULE_5__.DomHandler.getAttribute(headerElement, 'data-p-disabled') || primeng_dom__WEBPACK_IMPORTED_MODULE_5__.DomHandler.getAttribute(headerElement, 'data-pc-section') === 'inkbar' ? this.findNextHeaderAction(headerElement) : primeng_dom__WEBPACK_IMPORTED_MODULE_5__.DomHandler.findSingle(headerElement, '[data-pc-section="headeraction"]') : null;
    }
    findPrevHeaderAction(tabElement, selfCheck = false) {
      const headerElement = selfCheck ? tabElement : tabElement.previousElementSibling;
      return headerElement ? primeng_dom__WEBPACK_IMPORTED_MODULE_5__.DomHandler.getAttribute(headerElement, 'data-p-disabled') || primeng_dom__WEBPACK_IMPORTED_MODULE_5__.DomHandler.getAttribute(headerElement, 'data-pc-section') === 'inkbar' ? this.findPrevHeaderAction(headerElement) : primeng_dom__WEBPACK_IMPORTED_MODULE_5__.DomHandler.findSingle(headerElement, '[data-pc-section="headeraction"]') : null;
    }
    findFirstHeaderAction() {
      const firstEl = this.navbar.nativeElement.firstElementChild;
      return this.findNextHeaderAction(firstEl, true);
    }
    findLastHeaderAction() {
      const lastEl = this.navbar.nativeElement.lastElementChild;
      const lastHeaderAction = primeng_dom__WEBPACK_IMPORTED_MODULE_5__.DomHandler.getAttribute(lastEl, 'data-pc-section') === 'inkbar' ? lastEl.previousElementSibling : lastEl;
      return this.findPrevHeaderAction(lastHeaderAction, true);
    }
    open(event, tab) {
      if (tab.disabled) {
        if (event) {
          event.preventDefault();
        }
        return;
      }
      if (!tab.selected) {
        let selectedTab = this.findSelectedTab();
        if (selectedTab) {
          selectedTab.selected = false;
        }
        this.tabChanged = true;
        tab.selected = true;
        let selectedTabIndex = this.findTabIndex(tab);
        this.preventActiveIndexPropagation = true;
        this.activeIndexChange.emit(selectedTabIndex);
        this.onChange.emit({
          originalEvent: event,
          index: selectedTabIndex
        });
        this.updateScrollBar(selectedTabIndex);
      }
      if (event) {
        event.preventDefault();
      }
    }
    close(event, tab) {
      if (this.controlClose) {
        this.onClose.emit({
          originalEvent: event,
          index: this.findTabIndex(tab),
          close: () => {
            this.closeTab(tab);
          }
        });
      } else {
        this.closeTab(tab);
        this.onClose.emit({
          originalEvent: event,
          index: this.findTabIndex(tab)
        });
      }
    }
    closeTab(tab) {
      if (tab.disabled) {
        return;
      }
      if (tab.selected) {
        this.tabChanged = true;
        tab.selected = false;
        for (let i = 0; i < this.tabs.length; i++) {
          let tabPanel = this.tabs[i];
          if (!tabPanel.closed && !tab.disabled) {
            tabPanel.selected = true;
            break;
          }
        }
      }
      tab.closed = true;
    }
    findSelectedTab() {
      for (let i = 0; i < this.tabs.length; i++) {
        if (this.tabs[i].selected) {
          return this.tabs[i];
        }
      }
      return null;
    }
    findTabIndex(tab) {
      let index = -1;
      for (let i = 0; i < this.tabs.length; i++) {
        if (this.tabs[i] == tab) {
          index = i;
          break;
        }
      }
      return index;
    }
    getBlockableElement() {
      return this.el.nativeElement.children[0];
    }
    updateInkBar() {
      if (this.navbar) {
        const tabHeader = primeng_dom__WEBPACK_IMPORTED_MODULE_5__.DomHandler.findSingle(this.navbar.nativeElement, 'li.p-highlight');
        if (!tabHeader) {
          return;
        }
        this.inkbar.nativeElement.style.width = primeng_dom__WEBPACK_IMPORTED_MODULE_5__.DomHandler.getWidth(tabHeader) + 'px';
        this.inkbar.nativeElement.style.left = primeng_dom__WEBPACK_IMPORTED_MODULE_5__.DomHandler.getOffset(tabHeader).left - primeng_dom__WEBPACK_IMPORTED_MODULE_5__.DomHandler.getOffset(this.navbar.nativeElement).left + 'px';
      }
    }
    updateScrollBar(index) {
      let tabHeader = this.navbar.nativeElement.children[index];
      tabHeader.scrollIntoView({
        block: 'nearest'
      });
    }
    updateButtonState() {
      const content = this.content.nativeElement;
      const {
        scrollLeft,
        scrollWidth
      } = content;
      const width = primeng_dom__WEBPACK_IMPORTED_MODULE_5__.DomHandler.getWidth(content);
      this.backwardIsDisabled = scrollLeft === 0;
      this.forwardIsDisabled = scrollLeft === scrollWidth - width;
    }
    onScroll(event) {
      this.scrollable && this.updateButtonState();
      event.preventDefault();
    }
    getVisibleButtonWidths() {
      return [this.prevBtn?.nativeElement, this.nextBtn?.nativeElement].reduce((acc, el) => el ? acc + primeng_dom__WEBPACK_IMPORTED_MODULE_5__.DomHandler.getWidth(el) : acc, 0);
    }
    navBackward() {
      const content = this.content.nativeElement;
      const width = primeng_dom__WEBPACK_IMPORTED_MODULE_5__.DomHandler.getWidth(content) - this.getVisibleButtonWidths();
      const pos = content.scrollLeft - width;
      content.scrollLeft = pos <= 0 ? 0 : pos;
    }
    navForward() {
      const content = this.content.nativeElement;
      const width = primeng_dom__WEBPACK_IMPORTED_MODULE_5__.DomHandler.getWidth(content) - this.getVisibleButtonWidths();
      const pos = content.scrollLeft + width;
      const lastPos = content.scrollWidth - width;
      content.scrollLeft = pos >= lastPos ? lastPos : pos;
    }
  }
  (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(TabView, "\u0275fac", function TabView_Factory(t) {
    return new (t || TabView)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2));
  });
  (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(TabView, "\u0275cmp", /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: TabView,
    selectors: [["p-tabView"]],
    contentQueries: function TabView_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, TabPanel, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_3__.PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.tabPanels = _t);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.templates = _t);
      }
    },
    viewQuery: function TabView_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c3, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c5, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c6, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.navbar = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.prevBtn = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.nextBtn = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.inkbar = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.elementToObserve = _t.first);
      }
    },
    hostAttrs: [1, "p-element"],
    inputs: {
      style: "style",
      styleClass: "styleClass",
      controlClose: "controlClose",
      scrollable: "scrollable",
      activeIndex: "activeIndex",
      selectOnFocus: "selectOnFocus",
      tabindex: "tabindex"
    },
    outputs: {
      onChange: "onChange",
      onClose: "onClose",
      activeIndexChange: "activeIndexChange"
    },
    ngContentSelectors: _c0,
    decls: 14,
    vars: 11,
    consts: [[3, "ngClass", "ngStyle"], [1, "p-tabview-nav-container"], ["elementToObserve", ""], ["class", "p-tabview-nav-prev p-tabview-nav-btn p-link", "type", "button", "pRipple", "", 3, "click", 4, "ngIf"], [1, "p-tabview-nav-content", 3, "scroll"], ["content", ""], ["role", "tablist", 1, "p-tabview-nav"], ["navbar", ""], ["ngFor", "", 3, "ngForOf"], [1, "p-tabview-ink-bar"], ["inkbar", ""], ["class", "p-tabview-nav-next p-tabview-nav-btn p-link", "type", "button", "pRipple", "", 3, "click", 4, "ngIf"], [1, "p-tabview-panels"], ["type", "button", "pRipple", "", 1, "p-tabview-nav-prev", "p-tabview-nav-btn", "p-link", 3, "click"], ["prevBtn", ""], [4, "ngIf"], [4, "ngTemplateOutlet"], ["role", "presentation", 3, "ngClass", "ngStyle", "class", 4, "ngIf"], ["role", "presentation", 3, "ngClass", "ngStyle"], ["role", "tab", "pRipple", "", 1, "p-tabview-nav-link", 3, "pTooltip", "tooltipPosition", "positionStyle", "tooltipStyleClass", "click", "keydown"], ["class", "p-tabview-left-icon", 3, "ngClass", 4, "ngIf"], ["class", "p-tabview-left-icon", 4, "ngIf"], [1, "p-tabview-title"], ["class", "p-tabview-right-icon", 3, "ngClass", 4, "ngIf"], ["class", "p-tabview-right-icon", 4, "ngIf"], [1, "p-tabview-left-icon", 3, "ngClass"], [1, "p-tabview-left-icon"], [1, "p-tabview-right-icon", 3, "ngClass"], [1, "p-tabview-right-icon"], [3, "styleClass", "click", 4, "ngIf"], ["class", "tab.closeIconTemplate", 4, "ngIf"], [3, "styleClass", "click"], [1, "tab.closeIconTemplate"], ["type", "button", "pRipple", "", 1, "p-tabview-nav-next", "p-tabview-nav-btn", "p-link", 3, "click"], ["nextBtn", ""]],
    template: function TabView_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, TabView_button_3_Template, 4, 4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scroll", function TabView_Template_div_scroll_4_listener($event) {
          return ctx.onScroll($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ul", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, TabView_ng_template_8_Template, 1, 1, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "li", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, TabView_button_11_Template, 4, 4, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.styleClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](9, _c8, ctx.scrollable))("ngStyle", ctx.style);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-pc-name", "tabview");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.scrollable && !ctx.backwardIsDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.tabs);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-pc-section", "inkbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.scrollable && !ctx.forwardIsDisabled && ctx.shouldVisible);
      }
    },
    dependencies: function () {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle, primeng_tooltip__WEBPACK_IMPORTED_MODULE_6__.Tooltip, primeng_ripple__WEBPACK_IMPORTED_MODULE_7__.Ripple, primeng_icons_times__WEBPACK_IMPORTED_MODULE_8__.TimesIcon, primeng_icons_chevronleft__WEBPACK_IMPORTED_MODULE_9__.ChevronLeftIcon, primeng_icons_chevronright__WEBPACK_IMPORTED_MODULE_10__.ChevronRightIcon];
    },
    styles: [".p-tabview-nav-container{position:relative}.p-tabview-scrollable .p-tabview-nav-container{overflow:hidden}.p-tabview-nav-content{overflow-x:auto;overflow-y:hidden;scroll-behavior:smooth;scrollbar-width:none;overscroll-behavior:contain auto}.p-tabview-nav{display:inline-flex;min-width:100%;margin:0;padding:0;list-style-type:none;flex:1 1 auto}.p-tabview-nav-link{cursor:pointer;-webkit-user-select:none;user-select:none;display:flex;align-items:center;position:relative;text-decoration:none;overflow:hidden}.p-tabview-ink-bar{display:none;z-index:1}.p-tabview-nav-link:focus{z-index:1}.p-tabview-title{line-height:1;white-space:nowrap}.p-tabview-nav-btn{position:absolute;top:0;z-index:2;height:100%;display:flex;align-items:center;justify-content:center}.p-tabview-nav-prev{left:0}.p-tabview-nav-next{right:0}.p-tabview-nav-content::-webkit-scrollbar{display:none}.p-tabview-close{z-index:1}\n"],
    encapsulation: 2,
    changeDetection: 0
  }));
  return TabView;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TabViewModule = /*#__PURE__*/(() => {
  class TabViewModule {}
  (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(TabViewModule, "\u0275fac", function TabViewModule_Factory(t) {
    return new (t || TabViewModule)();
  });
  (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(TabViewModule, "\u0275mod", /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: TabViewModule
  }));
  (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(TabViewModule, "\u0275inj", /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, primeng_api__WEBPACK_IMPORTED_MODULE_3__.SharedModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_6__.TooltipModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_7__.RippleModule, primeng_icons_times__WEBPACK_IMPORTED_MODULE_8__.TimesIcon, primeng_icons_chevronleft__WEBPACK_IMPORTED_MODULE_9__.ChevronLeftIcon, primeng_icons_chevronright__WEBPACK_IMPORTED_MODULE_10__.ChevronRightIcon, primeng_api__WEBPACK_IMPORTED_MODULE_3__.SharedModule]
  }));
  return TabViewModule;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=448.745082b243878ec9.js.map