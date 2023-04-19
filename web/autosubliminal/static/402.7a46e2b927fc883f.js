"use strict";
(self["webpackChunkautosubliminal"] = self["webpackChunkautosubliminal"] || []).push([[402],{

/***/ 1824:
/*!************************************************************************!*\
  !*** ./src/app/modules/settings/general/settings-general.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsGeneralComponent": () => (/* binding */ SettingsGeneralComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _app_settings_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../app-settings.service */ 1205);
/* harmony import */ var _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/forms/form-utils */ 2571);
/* harmony import */ var _shared_components_forms_form_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/forms/form-validators */ 3383);
/* harmony import */ var _shared_models_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/models/settings */ 5868);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _core_services_api_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/services/api/settings.service */ 4873);
/* harmony import */ var _core_services_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/services/message.service */ 1245);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/panel */ 4266);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var _shared_components_icon_dropdown_icon_dropdown_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/icon-dropdown/icon-dropdown.component */ 1738);
/* harmony import */ var _shared_components_input_number_input_number_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/input/number/input-number.component */ 8424);
/* harmony import */ var _shared_components_input_dropdown_input_dropdown_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/components/input/dropdown/input-dropdown.component */ 9772);
/* harmony import */ var _shared_components_input_file_browser_input_file_browser_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/components/input/file-browser/input-file-browser.component */ 4525);
/* harmony import */ var _shared_components_input_multi_text_input_multi_text_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/components/input/multi-text/input-multi-text.component */ 5125);
/* harmony import */ var _shared_components_input_multi_file_browser_input_multi_file_browser_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/components/input/multi-file-browser/input-multi-file-browser.component */ 5998);



















function SettingsGeneralComponent_form_2_div_215_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 4)(1, "div", 5)(2, "label", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "FFMPEG path");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "app-icon-dropdown")(5, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6, "The directory where the FFMPEG executable is located.");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](8, "app-input-file-browser", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("folderMode", true)("validationFeedback", ctx_r1.saveAttempt);
  }
}
function SettingsGeneralComponent_form_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "form", 3)(1, "div", 4)(2, "div", 5)(3, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, "Video paths");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "app-icon-dropdown")(6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7, "The folders where your videos are located.");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](9, "app-input-multi-file-browser", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "div", 4)(11, "div", 5)(12, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](13, "Default language");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "app-icon-dropdown")(15, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](16, "The default subtitle language.");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](17, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](18, "app-input-dropdown", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](19, "div", 4)(20, "div", 5)(21, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](22, "Default language suffix");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](23, "app-icon-dropdown")(24, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](25, "When enabled, the default subtitle will be extended with the language code (f.e. showname.en.srt).");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](26, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](27, "app-input-dropdown", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](28, "div", 4)(29, "div", 5)(30, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](31, "Additional languages");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](32, "app-icon-dropdown")(33, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](34, "The addditional subtitle languages in alpha2 or ietf format.");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](35, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](36, "If additional languages are provided, subtitles will be extended with the language code (f.e. showname.en.srt).");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](37, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](38, "app-input-multi-text", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](39, "div", 4)(40, "div", 5)(41, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](42, "Manual search with scoring");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](43, "app-icon-dropdown")(44, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](45, "When enabled, only subtitles matching the minimum default score will be returned.");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](46, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](47, "When disabled, all found subtitles will be returned.");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](48, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](49, "REMARK: Disable it at your own risk because it might return even unrelated subtitles!");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](50, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](51, "app-input-dropdown", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](52, "div", 4)(53, "div", 5)(54, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](55, "Disk scan interval");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](56, "app-icon-dropdown")(57, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](58, "Disk scan interval of the ScanDisk thread. It scans the disk for missing subtitle files.");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](59, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](60);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](61, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](62, "app-input-number", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](63, "div", 4)(64, "div", 5)(65, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](66, "Disk scan at startup");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](67, "app-icon-dropdown")(68, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](69, "When enabled, the ScanDisk thread will run immediately at startup.");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](70, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](71, "If not, it will run the first time after the disk scan interval.");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](72, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](73, "app-input-dropdown", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](74, "div", 4)(75, "div", 5)(76, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](77, "Subtitle check interval");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](78, "app-icon-dropdown")(79, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](80, "Subtitle check interval of the CheckSub thread. It checks if there is a match on the configured subliminal providers.");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](81, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](82);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](83, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](84, "app-input-number", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](85, "div", 4)(86, "div", 5)(87, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](88, "Subtitle check at startup");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](89, "app-icon-dropdown")(90, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](91, "When enabled, the CheckSub thread will run immediately at startup.");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](92, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](93, "If not, it will run the first time after the subtitle check interval.");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](94, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](95, "app-input-dropdown", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](96, "div", 4)(97, "div", 5)(98, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](99, "Subtitle check deadline");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](100, "app-icon-dropdown")(101, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](102, "Subtitle check deadline in weeks for checking subtitles on daily basis.");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](103, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](104, "After this deadline, the daily search is replaced by a search every X week(s), defined by the parameter below.");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](105, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](106);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](107, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](108, "app-input-number", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](109, "div", 4)(110, "div", 5)(111, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](112, "Subtitle check delta");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](113, "app-icon-dropdown")(114, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](115, "Subtitle check delta in days for checking subtitles after deadline.");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](116, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](117, "After the deadline (parameter above) is passed, a subtitle is search every X day(s), defined by this parameter.");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](118, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](119);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](120, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](121, "app-input-number", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](122, "div", 4)(123, "div", 5)(124, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](125, "Version check interval");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](126, "app-icon-dropdown")(127, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](128, "Version check interval of the CheckVersion thread. It checks if there is a new version available.");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](129, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](130);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](131, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](132, "app-input-number", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](133, "div", 4)(134, "div", 5)(135, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](136, "Version check at startup");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](137, "app-icon-dropdown")(138, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](139, "When enabled, the CheckVersion thread will run immediately at startup.");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](140, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](141, "If not, it will run the first time after the version check interval.");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](142, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](143, "app-input-dropdown", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](144, "div", 4)(145, "div", 5)(146, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](147, "Version check auto update");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](148, "app-icon-dropdown")(149, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](150, "When enabled, the version check will also try to auto update the system.");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](151, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](152, "app-input-dropdown", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](153, "div", 4)(154, "div", 5)(155, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](156, "Scan for embedded subtitles");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](157, "app-icon-dropdown")(158, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](159, "When enabled, the video files will be scanned for embedded subtitles.");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](160, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](161, "app-input-dropdown", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](162, "div", 4)(163, "div", 5)(164, "label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](165, "Scan for hardcoded subtitles");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](166, "app-icon-dropdown")(167, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](168, "When enabled, the video files will be scanned for hardcoded subtitles.");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](169, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](170, "app-input-dropdown", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](171, "div", 4)(172, "div", 5)(173, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](174, "Skip hidden directories");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](175, "app-icon-dropdown")(176, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](177, "When enabled, also hidden directories (directories that start with a dot, f.e. .config) are scanned.");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](178, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](179, "REMARK: Doesn't work for Windows style hidden directories.");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](180, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](181, "app-input-dropdown", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](182, "div", 4)(183, "div", 5)(184, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](185, "Detect invalid subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](186, "app-icon-dropdown")(187, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](188, "When enabled, the language of a subtitle, without a language suffix, will be detected.");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](189, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](190, "If the language does not match the default language, the subtitle will be deleted from the system in order to search a new one.");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](191, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](192, "app-input-dropdown", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](193, "div", 4)(194, "div", 5)(195, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](196, "Language detection probability");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](197, "app-icon-dropdown")(198, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](199, "The minimum required probability for the invalid language detection functionality.");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](200, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](201, "The probability must be at least this value before the language is accepted as the detected language of the subtitle.");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](202, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](203, "app-input-number", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](204, "div", 4)(205, "div", 5)(206, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](207, "Manual subtitle synchronization");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](208, "app-icon-dropdown")(209, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](210, "When enabled, the manual search will have the option to synchronize a subtitle.");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](211, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](212, "REMARK: This requires ffmpeg (https://www.ffmpeg.org/download.html) to be installed on your system.");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](213, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](214, "app-input-dropdown", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](215, SettingsGeneralComponent_form_2_div_215_Template, 9, 2, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](216, "div", 4)(217, "div", 5)(218, "label", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](219, "Min video file size");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](220, "app-icon-dropdown")(221, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](222, "The mininum file size in MB that a video must be before it's including in the scanning.");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](223, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](224, "Files with a size lower than this value will be ignored in the scanning.");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](225, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](226, "Use 0 to disable this limit.");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](227, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](228, "app-input-number", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](229, "div", 4)(230, "div", 5)(231, "label", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](232, "Max db results");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](233, "app-icon-dropdown")(234, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](235, "The maximum number of results returned from the database.");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](236, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](237, "Use 0 to return all the results.");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](238, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](239, "app-input-number", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](240, "div", 4)(241, "div", 5)(242, "label", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](243, "Timestamp format");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](244, "app-icon-dropdown")(245, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](246, "The format in which timestamps are displayed.");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](247, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](248, "app-input-dropdown", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](249, "div", 54)(250, "div", 55)(251, "p-button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("onClick", function SettingsGeneralComponent_form_2_Template_p_button_onClick_251_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r2.save());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formGroup", ctx_r0.settingsForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("folderMode", true)("validationFeedback", ctx_r0.saveAttempt);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("options", ctx_r0.languages)("validationFeedback", ctx_r0.saveAttempt);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("options", ctx_r0.enabledOrDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("options", ctx_r0.languages);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("options", ctx_r0.enabledOrDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("Cannot be set lower then ", ctx_r0.scanDiskIntervalDefault, " hour(s).");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("min", ctx_r0.scanDiskIntervalDefault);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("options", ctx_r0.enabledOrDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("Cannot be set lower then ", ctx_r0.checkSubIntervalDefault, " hour(s).");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("min", ctx_r0.checkSubIntervalDefault);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("options", ctx_r0.enabledOrDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("Cannot be set lower than ", ctx_r0.checkSubDeadlineDefault, " week(s).");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("min", ctx_r0.checkSubDeadlineDefault);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("Cannot be set lower than ", ctx_r0.checkSubDeltaDefault, " day(s).");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("min", ctx_r0.checkSubDeltaDefault);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" Cannot be set lower then ", ctx_r0.checkVersionIntervalDefault, " hour(s).");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("min", ctx_r0.checkVersionIntervalDefault);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("options", ctx_r0.enabledOrDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("options", ctx_r0.enabledOrDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("options", ctx_r0.enabledOrDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("options", ctx_r0.enabledOrDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("options", ctx_r0.enabledOrDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("options", ctx_r0.enabledOrDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("min", 1)("max", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("options", ctx_r0.enabledOrDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r0.showFfmpegPath());
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("min", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("min", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("options", ctx_r0.timestampFormats);
  }
}
let SettingsGeneralComponent = /*#__PURE__*/(() => {
  class SettingsGeneralComponent {
    constructor(fb, settingsService, appSettingsService, messageService) {
      this.fb = fb;
      this.settingsService = settingsService;
      this.appSettingsService = appSettingsService;
      this.messageService = messageService;
      this.saveAttempt = false;
    }
    ngOnInit() {
      this.initDefaults();
      this.buildSelectItems();
      this.settingsService.getGeneralSettings().subscribe({
        next: generalSettings => {
          this.buildForm(generalSettings);
        },
        error: () => this.messageService.showErrorMessage('Unable to get the general settings!')
      });
    }
    save() {
      this.saveAttempt = true;
      if (this.settingsForm.valid) {
        this.settingsService.updateGeneralSettings(this.getGeneralSettings()).subscribe({
          next: () => {
            this.messageService.showSuccessMessage('General settings saved.');
            this.appSettingsService.reload(); // reload app settings
          },

          error: () => this.messageService.showErrorMessage('Unable to save the general settings!')
        });
      } else {
        _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_1__.FormUtils.scrollToFirstInvalidField(this.settingsForm);
      }
    }
    showFfmpegPath() {
      // FFMPEG is required for manualSubSync
      return _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_1__.FormUtils.getFormControlValue(this.settingsForm, 'manualSubSync');
    }
    initDefaults() {
      this.scanDiskIntervalDefault = _app_settings_service__WEBPACK_IMPORTED_MODULE_0__.appSettings.scanDiskIntervalDefault;
      this.checkSubIntervalDefault = _app_settings_service__WEBPACK_IMPORTED_MODULE_0__.appSettings.checkSubIntervalDefault;
      this.checkSubDeadlineDefault = _app_settings_service__WEBPACK_IMPORTED_MODULE_0__.appSettings.checkSubDeadlineDefault;
      this.checkSubDeltaDefault = _app_settings_service__WEBPACK_IMPORTED_MODULE_0__.appSettings.checkSubDeltaDefault;
      this.checkVersionIntervalDefault = _app_settings_service__WEBPACK_IMPORTED_MODULE_0__.appSettings.checkVersionIntervalDefault;
    }
    buildSelectItems() {
      // Enabled or disabled
      this.enabledOrDisabled = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_1__.FormUtils.enabledOrDisabledSelectItems();
      // Languages
      this.languages = [];
      this.languages.push({
        label: 'Select a language',
        value: ''
      });
      _app_settings_service__WEBPACK_IMPORTED_MODULE_0__.appSettings.languages.forEach(language => this.languages.push({
        label: language.name,
        value: language.code
      }));
      // Timestamp formats (python strftime() formats)
      this.timestampFormats = [];
      this.timestampFormats.push({
        label: 'YYYY-MM-DD HH:MM:SS',
        value: '%Y-%m-%d %H:%M:%S'
      });
      this.timestampFormats.push({
        label: 'MM-DD-YYYY HH:MM:SS',
        value: '%m-%d-%Y %H:%M:%S'
      });
      this.timestampFormats.push({
        label: 'DD-MM-YYYY HH:MM:SS',
        value: '%d-%m-%Y %H:%M:%S'
      });
    }
    buildForm(generalSettings) {
      this.settingsForm = this.fb.group({
        videoPaths: [generalSettings.videoPaths || [], [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, _shared_components_forms_form_validators__WEBPACK_IMPORTED_MODULE_2__.FormValidators.notEmpty]],
        defaultLanguage: [generalSettings.defaultLanguage, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
        defaultLanguageSuffix: [generalSettings.defaultLanguageSuffix, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
        additionalLanguages: [generalSettings.additionalLanguages || [], []],
        manualSearchWithScoring: [generalSettings.manualSearchWithScoring, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
        scanDiskInterval: [generalSettings.scanDiskInterval, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
        scanDiskAtStartup: [generalSettings.scanDiskAtStartup, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
        checkSubInterval: [generalSettings.checkSubInterval, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
        checkSubAtStartup: [generalSettings.checkSubAtStartup, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
        checkSubDeadline: [generalSettings.checkSubDeadline, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
        checkSubDelta: [generalSettings.checkSubDelta, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
        checkVersionInterval: [generalSettings.checkVersionInterval, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
        checkVersionAtStartup: [generalSettings.checkVersionAtStartup, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
        checkVersionAutoUpdate: [generalSettings.checkVersionAutoUpdate, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
        scanEmbeddedSubs: [generalSettings.scanEmbeddedSubs, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
        scanHardcodedSubs: [generalSettings.scanHardcodedSubs, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
        skipHiddenDirs: [generalSettings.skipHiddenDirs, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
        detectInvalidSubLanguage: [generalSettings.detectInvalidSubLanguage, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
        detectedLanguageProbability: [generalSettings.detectedLanguageProbability * 100, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
        manualSubSync: [generalSettings.manualSubSync, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
        ffmpegPath: [generalSettings.ffmpegPath, []],
        minVideoFileSize: [generalSettings.minVideoFileSize, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
        maxDbResults: [generalSettings.maxDbResults, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
        timestampFormat: [generalSettings.timestampFormat, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]]
      }, {
        validator: this.globalFormValidator
      });
    }
    globalFormValidator(formGroup) {
      // Return error ffmpegPath is not filled in when manualSubSync is enabled
      const error = {
        ffmpegPathRequired: true
      };
      const ffmpegPath = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_1__.FormUtils.getFormControlValue(formGroup, 'ffmpegPath');
      if (_shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_1__.FormUtils.getFormControlValue(formGroup, 'manualSubSync') && (!ffmpegPath || !ffmpegPath.trim())) {
        _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_1__.FormUtils.addFormControlValidationErrors(formGroup.controls['ffmpegPath'], error);
        _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_1__.FormUtils.markFormControlFieldsAsDirty(formGroup);
        return error;
      }
      _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_1__.FormUtils.clearFormControlValidationErrors(formGroup.controls['ffmpegPath'], error);
      return null;
    }
    getGeneralSettings() {
      const settings = new _shared_models_settings__WEBPACK_IMPORTED_MODULE_3__.GeneralSettings();
      settings.videoPaths = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_1__.FormUtils.getFormControlValue(this.settingsForm, 'videoPaths');
      settings.defaultLanguage = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_1__.FormUtils.getFormControlValue(this.settingsForm, 'defaultLanguage');
      settings.defaultLanguageSuffix = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_1__.FormUtils.getFormControlValue(this.settingsForm, 'defaultLanguageSuffix');
      settings.additionalLanguages = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_1__.FormUtils.getFormControlValue(this.settingsForm, 'additionalLanguages');
      settings.manualSearchWithScoring = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_1__.FormUtils.getFormControlValue(this.settingsForm, 'manualSearchWithScoring');
      settings.scanDiskInterval = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_1__.FormUtils.getFormControlValue(this.settingsForm, 'scanDiskInterval');
      settings.scanDiskAtStartup = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_1__.FormUtils.getFormControlValue(this.settingsForm, 'scanDiskAtStartup');
      settings.checkSubInterval = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_1__.FormUtils.getFormControlValue(this.settingsForm, 'checkSubInterval');
      settings.checkSubAtStartup = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_1__.FormUtils.getFormControlValue(this.settingsForm, 'checkSubAtStartup');
      settings.checkSubDeadline = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_1__.FormUtils.getFormControlValue(this.settingsForm, 'checkSubDeadline');
      settings.checkSubDelta = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_1__.FormUtils.getFormControlValue(this.settingsForm, 'checkSubDelta');
      settings.checkVersionInterval = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_1__.FormUtils.getFormControlValue(this.settingsForm, 'checkVersionInterval');
      settings.checkVersionAtStartup = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_1__.FormUtils.getFormControlValue(this.settingsForm, 'checkVersionAtStartup');
      settings.checkVersionAutoUpdate = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_1__.FormUtils.getFormControlValue(this.settingsForm, 'checkVersionAutoUpdate');
      settings.scanEmbeddedSubs = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_1__.FormUtils.getFormControlValue(this.settingsForm, 'scanEmbeddedSubs');
      settings.scanHardcodedSubs = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_1__.FormUtils.getFormControlValue(this.settingsForm, 'scanHardcodedSubs');
      settings.skipHiddenDirs = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_1__.FormUtils.getFormControlValue(this.settingsForm, 'skipHiddenDirs');
      settings.detectInvalidSubLanguage = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_1__.FormUtils.getFormControlValue(this.settingsForm, 'detectInvalidSubLanguage');
      settings.detectedLanguageProbability = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_1__.FormUtils.getFormControlValue(this.settingsForm, 'detectedLanguageProbability') / 100; // percentage as decimal number
      settings.manualSubSync = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_1__.FormUtils.getFormControlValue(this.settingsForm, 'manualSubSync');
      settings.ffmpegPath = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_1__.FormUtils.getFormControlValue(this.settingsForm, 'ffmpegPath');
      settings.minVideoFileSize = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_1__.FormUtils.getFormControlValue(this.settingsForm, 'minVideoFileSize');
      settings.maxDbResults = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_1__.FormUtils.getFormControlValue(this.settingsForm, 'maxDbResults');
      settings.timestampFormat = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_1__.FormUtils.getFormControlValue(this.settingsForm, 'timestampFormat');
      return settings;
    }
  }
  SettingsGeneralComponent.ɵfac = function SettingsGeneralComponent_Factory(t) {
    return new (t || SettingsGeneralComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_13__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_core_services_api_settings_service__WEBPACK_IMPORTED_MODULE_4__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_app_settings_service__WEBPACK_IMPORTED_MODULE_0__.AppSettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_core_services_message_service__WEBPACK_IMPORTED_MODULE_5__.MessageService));
  };
  SettingsGeneralComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
    type: SettingsGeneralComponent,
    selectors: [["app-settings-general"]],
    decls: 3,
    vars: 1,
    consts: [[1, "container-lg"], ["header", "General settings"], ["class", "form", 3, "formGroup", 4, "ngIf"], [1, "form", 3, "formGroup"], [1, "row", "form-row"], [1, "col-12", "col-sm-12", "col-md-4", "col-lg-4", "form-row-label"], ["for", "videoPaths", 1, "label"], [1, "col-12", "col-sm-12", "col-md-8", "col-lg-8"], ["formControlName", "videoPaths", 3, "folderMode", "validationFeedback"], ["for", "defaultLanguage", 1, "label"], ["formControlName", "defaultLanguage", 3, "options", "validationFeedback"], ["for", "defaultLanguageSuffix", 1, "label"], ["formControlName", "defaultLanguageSuffix", 3, "options"], ["for", "additionalLanguages", 1, "label"], ["formControlName", "additionalLanguages", 3, "options"], ["for", "manualSearchWithScoring", 1, "label"], ["formControlName", "manualSearchWithScoring", 3, "options"], ["for", "scanDiskInterval", 1, "label"], ["formControlName", "scanDiskInterval", "suffix", " hour(s)", 3, "min"], ["for", "scanDiskAtStartup", 1, "label"], ["formControlName", "scanDiskAtStartup", 3, "options"], ["for", "checkSubInterval", 1, "label"], ["formControlName", "checkSubInterval", "suffix", " hour(s)", 3, "min"], ["for", "checkSubAtStartup", 1, "label"], ["formControlName", "checkSubAtStartup", 3, "options"], ["for", "checkSubDeadline", 1, "label"], ["formControlName", "checkSubDeadline", "suffix", " week(s)", 3, "min"], ["for", "checkSubDelta", 1, "label"], ["formControlName", "checkSubDelta", "suffix", " day(s)", 3, "min"], ["for", "checkVersionInterval", 1, "label"], ["formControlName", "checkVersionInterval", "suffix", " hour(s)", 3, "min"], ["for", "checkVersionAtStartup", 1, "label"], ["formControlName", "checkVersionAtStartup", 3, "options"], ["for", "checkVersionAutoUpdate", 1, "label"], ["formControlName", "checkVersionAutoUpdate", 3, "options"], ["for", "scanEmbeddedSubs", 1, "label"], ["formControlName", "scanEmbeddedSubs", 3, "options"], ["for", "scanHardcodedSubs", 1, "label"], ["formControlName", "scanHardcodedSubs", 3, "options"], ["for", "skipHiddenDirs", 1, "label"], ["formControlName", "skipHiddenDirs", 3, "options"], ["for", "detectInvalidSubLanguage", 1, "label"], ["formControlName", "detectInvalidSubLanguage", 3, "options"], ["for", "detectedLanguageProbability", 1, "label"], ["formControlName", "detectedLanguageProbability", "suffix", " %", 3, "min", "max"], ["for", "manualSubSync", 1, "label"], ["formControlName", "manualSubSync", 3, "options"], ["class", "row form-row", 4, "ngIf"], ["for", "minVideoFileSize", 1, "label"], ["formControlName", "minVideoFileSize", "suffix", " MB", 3, "min"], ["for", "maxDbResults", 1, "label"], ["formControlName", "maxDbResults", "mode", "decimal", "suffix", " results", 3, "min"], ["for", "timestampFormat", 1, "label"], ["formControlName", "timestampFormat", 3, "options"], [1, "row", "button-row"], [1, "col-12", "col-sm-12", "col-md-12", "col-lg-10"], ["label", "Save", 3, "onClick"], ["for", "ffmpegPath", 1, "label"], ["formControlName", "ffmpegPath", 3, "folderMode", "validationFeedback"]],
    template: function SettingsGeneralComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 0)(1, "p-panel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, SettingsGeneralComponent_form_2_Template, 252, 33, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.settingsForm);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControlName, primeng_panel__WEBPACK_IMPORTED_MODULE_15__.Panel, primeng_button__WEBPACK_IMPORTED_MODULE_16__.Button, _shared_components_icon_dropdown_icon_dropdown_component__WEBPACK_IMPORTED_MODULE_6__.IconDropdownComponent, _shared_components_input_number_input_number_component__WEBPACK_IMPORTED_MODULE_7__.InputNumberComponent, _shared_components_input_dropdown_input_dropdown_component__WEBPACK_IMPORTED_MODULE_8__.InputDropdownComponent, _shared_components_input_file_browser_input_file_browser_component__WEBPACK_IMPORTED_MODULE_9__.InputFileBrowserComponent, _shared_components_input_multi_text_input_multi_text_component__WEBPACK_IMPORTED_MODULE_10__.InputMultiTextComponent, _shared_components_input_multi_file_browser_input_multi_file_browser_component__WEBPACK_IMPORTED_MODULE_11__.InputMultiFileBrowserComponent],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
  return SettingsGeneralComponent;
})();

/***/ }),

/***/ 7902:
/*!************************************************************************!*\
  !*** ./src/app/modules/settings/library/settings-library.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsLibraryComponent": () => (/* binding */ SettingsLibraryComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _app_settings_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../app-settings.service */ 1205);
/* harmony import */ var _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/forms/form-utils */ 2571);
/* harmony import */ var _shared_models_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/models/settings */ 5868);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _core_services_api_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/api/settings.service */ 4873);
/* harmony import */ var _core_services_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/services/message.service */ 1245);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/panel */ 4266);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var _shared_components_icon_dropdown_icon_dropdown_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/icon-dropdown/icon-dropdown.component */ 1738);
/* harmony import */ var _shared_components_input_number_input_number_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/input/number/input-number.component */ 8424);
/* harmony import */ var _shared_components_input_dropdown_input_dropdown_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/input/dropdown/input-dropdown.component */ 9772);
/* harmony import */ var _shared_components_input_multi_file_browser_input_multi_file_browser_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/components/input/multi-file-browser/input-multi-file-browser.component */ 5998);
















function SettingsLibraryComponent_form_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "form", 3)(1, "div", 4)(2, "div", 5)(3, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "Library mode");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "app-icon-dropdown")(6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "When enabled, a libraryscanner thread will be enabled to scan your complete library.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9, "This will enable a new menu link 'Library' from which you can view your complete library.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11, "ATTENTION: this may cause a very long disk scan if your library is very big!");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](13, "app-input-dropdown", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "div", 4)(15, "div", 5)(16, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17, "Library paths");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "app-icon-dropdown")(19, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](20, "The folders where your show/movie libraries are located.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](22, "app-input-multi-file-browser", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "div", 4)(24, "div", 5)(25, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](26, "Library scan interval");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](27, "app-icon-dropdown")(28, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](29, "Library scan interval of the ScanLibrary thread. It scans the complete library for generating an overview.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](30, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](32, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](33, "app-input-number", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](34, "div", 4)(35, "div", 5)(36, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](37, "Scan library at startup");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](38, "app-icon-dropdown")(39, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](40, "When enabled, the ScanLibrary thread will run immediately at startup.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](41, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](42, "If not, it will run the first time after the library scan interval.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](43, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](44, "app-input-dropdown", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](45, "div", 4)(46, "div", 5)(47, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](48, "Library edit mode");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](49, "app-icon-dropdown")(50, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](51, "When enabled, edit functionality is enabled in the libraries.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](52, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](53, "app-input-dropdown", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](54, "div", 17)(55, "div", 18)(56, "p-button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("onClick", function SettingsLibraryComponent_form_2_Template_p_button_onClick_56_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.save());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx_r0.settingsForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("options", ctx_r0.enabledOrDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("folderMode", true)("validationFeedback", ctx_r0.saveAttempt);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("Cannot not be set lower then ", ctx_r0.scanLibraryIntervalDefault, " hour(s).");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("min", ctx_r0.scanLibraryIntervalDefault);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("options", ctx_r0.enabledOrDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("options", ctx_r0.enabledOrDisabled);
  }
}
let SettingsLibraryComponent = /*#__PURE__*/(() => {
  class SettingsLibraryComponent {
    constructor(fb, settingsService, appSettingsService, messageService) {
      this.fb = fb;
      this.settingsService = settingsService;
      this.appSettingsService = appSettingsService;
      this.messageService = messageService;
      this.saveAttempt = false;
    }
    ngOnInit() {
      this.initDefaults();
      this.buildSelectItems();
      this.settingsService.getLibrarySettings().subscribe({
        next: librarySettings => {
          this.buildForm(librarySettings);
        },
        error: () => this.messageService.showErrorMessage('Unable to get the library settings!')
      });
    }
    save() {
      this.saveAttempt = true;
      if (this.settingsForm.valid) {
        this.settingsService.updateLibrarySettings(this.getLibrarySettings()).subscribe({
          next: () => {
            this.messageService.showSuccessMessage('Library settings saved.');
            this.appSettingsService.reload(); // reload app settings
          },

          error: () => this.messageService.showErrorMessage('Unable to save the library settings!')
        });
      } else {
        _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_1__.FormUtils.scrollToFirstInvalidField(this.settingsForm);
      }
    }
    initDefaults() {
      this.scanLibraryIntervalDefault = _app_settings_service__WEBPACK_IMPORTED_MODULE_0__.appSettings.scanLibraryIntervalDefault;
    }
    buildSelectItems() {
      // Enabled or disabled
      this.enabledOrDisabled = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_1__.FormUtils.enabledOrDisabledSelectItems();
    }
    buildForm(librarySettings) {
      this.settingsForm = this.fb.group({
        libraryMode: [librarySettings.libraryMode, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
        libraryPaths: [librarySettings.libraryPaths || [], []],
        scanLibraryInterval: [librarySettings.scanLibraryInterval, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
        scanLibraryAtStartup: [librarySettings.scanLibraryAtStartup, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
        libraryEditMode: [librarySettings.libraryEditMode, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]]
      });
    }
    getLibrarySettings() {
      const settings = new _shared_models_settings__WEBPACK_IMPORTED_MODULE_2__.LibrarySettings();
      settings.libraryMode = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_1__.FormUtils.getFormControlValue(this.settingsForm, 'libraryMode');
      settings.libraryPaths = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_1__.FormUtils.getFormControlValue(this.settingsForm, 'libraryPaths');
      settings.scanLibraryInterval = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_1__.FormUtils.getFormControlValue(this.settingsForm, 'scanLibraryInterval');
      settings.scanLibraryAtStartup = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_1__.FormUtils.getFormControlValue(this.settingsForm, 'scanLibraryAtStartup');
      settings.libraryEditMode = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_1__.FormUtils.getFormControlValue(this.settingsForm, 'libraryEditMode');
      return settings;
    }
  }
  SettingsLibraryComponent.ɵfac = function SettingsLibraryComponent_Factory(t) {
    return new (t || SettingsLibraryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_core_services_api_settings_service__WEBPACK_IMPORTED_MODULE_3__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_app_settings_service__WEBPACK_IMPORTED_MODULE_0__.AppSettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_core_services_message_service__WEBPACK_IMPORTED_MODULE_4__.MessageService));
  };
  SettingsLibraryComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
    type: SettingsLibraryComponent,
    selectors: [["app-settings-library"]],
    decls: 3,
    vars: 1,
    consts: [[1, "container-lg"], ["header", "Log settings"], ["class", "form", 3, "formGroup", 4, "ngIf"], [1, "form", 3, "formGroup"], [1, "row", "form-row"], [1, "col-12", "col-sm-12", "col-md-4", "col-lg-4", "form-row-label"], ["for", "libraryMode", 1, "label"], [1, "col-12", "col-sm-12", "col-md-8", "col-lg-8"], ["formControlName", "libraryMode", 3, "options"], ["for", "libraryPaths", 1, "label"], ["formControlName", "libraryPaths", 3, "folderMode", "validationFeedback"], ["for", "scanLibraryInterval", 1, "label"], ["formControlName", "scanLibraryInterval", "suffix", " hour(s)", 3, "min"], ["for", "scanLibraryAtStartup", 1, "label"], ["formControlName", "scanLibraryAtStartup", 3, "options"], ["for", "libraryEditMode", 1, "label"], ["formControlName", "libraryEditMode", 3, "options"], [1, "row", "button-row"], [1, "col-12", "col-sm-12", "col-md-12", "col-lg-10"], ["label", "Save", 3, "onClick"]],
    template: function SettingsLibraryComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0)(1, "p-panel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, SettingsLibraryComponent_form_2_Template, 57, 8, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.settingsForm);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName, primeng_panel__WEBPACK_IMPORTED_MODULE_12__.Panel, primeng_button__WEBPACK_IMPORTED_MODULE_13__.Button, _shared_components_icon_dropdown_icon_dropdown_component__WEBPACK_IMPORTED_MODULE_5__.IconDropdownComponent, _shared_components_input_number_input_number_component__WEBPACK_IMPORTED_MODULE_6__.InputNumberComponent, _shared_components_input_dropdown_input_dropdown_component__WEBPACK_IMPORTED_MODULE_7__.InputDropdownComponent, _shared_components_input_multi_file_browser_input_multi_file_browser_component__WEBPACK_IMPORTED_MODULE_8__.InputMultiFileBrowserComponent],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
  return SettingsLibraryComponent;
})();

/***/ }),

/***/ 7000:
/*!************************************************************************!*\
  !*** ./src/app/modules/settings/logging/settings-logging.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsLoggingComponent": () => (/* binding */ SettingsLoggingComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/components/forms/form-utils */ 2571);
/* harmony import */ var _shared_components_forms_form_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/forms/form-validators */ 3383);
/* harmony import */ var _shared_models_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/models/settings */ 5868);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _core_services_api_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/api/settings.service */ 4873);
/* harmony import */ var _app_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../app-settings.service */ 1205);
/* harmony import */ var _core_services_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/services/message.service */ 1245);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/panel */ 4266);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var _shared_components_icon_dropdown_icon_dropdown_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/icon-dropdown/icon-dropdown.component */ 1738);
/* harmony import */ var _shared_components_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/input/text/input-text.component */ 6015);
/* harmony import */ var _shared_components_input_number_input_number_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/components/input/number/input-number.component */ 8424);
/* harmony import */ var _shared_components_input_dropdown_input_dropdown_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/components/input/dropdown/input-dropdown.component */ 9772);
















function SettingsLoggingComponent_form_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "form", 3)(1, "div", 4)(2, "div", 5)(3, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "Logfile name");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "app-icon-dropdown")(6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, "The location and the name of the logfile.");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9, "When not set, AutoSubliminal.log will be used.");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](11, "app-input-text", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "div", 4)(13, "div", 5)(14, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15, "Log level");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "app-icon-dropdown")(17, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](18, "The level of logging in the logfile.");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](20, "app-input-dropdown", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "div", 4)(22, "div", 5)(23, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](24, "Number of backup log files");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "app-icon-dropdown")(26, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](27, "The maximum number of backup log files.");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](29, "Use 0 for no backup log files.");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](30, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](31, "app-input-number", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](32, "div", 4)(33, "div", 5)(34, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](35, "Log size");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](36, "app-icon-dropdown")(37, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](38, "The maximum size of the log file(s) in MB.");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](39, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](40, "Use 0 for unlimited size.");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](41, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](42, "app-input-number", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](43, "div", 4)(44, "div", 5)(45, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](46, "Log HTTP access");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](47, "app-icon-dropdown")(48, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](49, "When enabled, also http access calls will be logged.");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](50, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](51, "app-input-dropdown", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](52, "div", 4)(53, "div", 5)(54, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](55, "Log external libs");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](56, "app-icon-dropdown")(57, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](58, "When enabled, also external libs will be logged.");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](59, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](60, "This only works in combination with the 'Log detailed format' option.");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](61, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](62, "app-input-dropdown", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](63, "div", 4)(64, "div", 5)(65, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](66, "Log detailed format");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](67, "app-icon-dropdown")(68, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](69, "When enabled, the detailed log format will be used.");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](70, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](71, "app-input-dropdown", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](72, "div", 4)(73, "div", 5)(74, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](75, "Log reversed");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](76, "app-icon-dropdown")(77, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](78, "When enabled, the log output will be shown in reversed order (newest at the top) in the application.");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](79, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](80, "app-input-dropdown", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](81, "div", 4)(82, "div", 5)(83, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](84, "Console log level");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](85, "app-icon-dropdown")(86, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](87, "The level of logging in the console output.");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](88, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](89, "app-input-dropdown", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](90, "div", 25)(91, "div", 26)(92, "p-button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("onClick", function SettingsLoggingComponent_form_2_Template_p_button_onClick_92_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.save());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx_r0.settingsForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("validationFeedback", ctx_r0.saveAttempt);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("options", ctx_r0.logLevels)("validationFeedback", ctx_r0.saveAttempt);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("min", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("min", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("options", ctx_r0.enabledOrDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("options", ctx_r0.enabledOrDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("options", ctx_r0.enabledOrDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("options", ctx_r0.enabledOrDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("options", ctx_r0.logLevels)("validationFeedback", ctx_r0.saveAttempt);
  }
}
let SettingsLoggingComponent = /*#__PURE__*/(() => {
  class SettingsLoggingComponent {
    constructor(fb, settingsService, appSettingsService, messageService) {
      this.fb = fb;
      this.settingsService = settingsService;
      this.appSettingsService = appSettingsService;
      this.messageService = messageService;
      this.saveAttempt = false;
    }
    ngOnInit() {
      this.buildSelectItems();
      this.settingsService.getLogSettings().subscribe({
        next: logSettings => {
          this.buildForm(logSettings);
        },
        error: () => this.messageService.showErrorMessage('Unable to get the log settings!')
      });
    }
    save() {
      this.saveAttempt = true;
      if (this.settingsForm.valid) {
        this.settingsService.updateLogSettings(this.getLogSettings()).subscribe({
          next: () => {
            this.messageService.showSuccessMessage('Log settings saved.');
            this.appSettingsService.reload(); // reload app settings
          },

          error: () => this.messageService.showErrorMessage('Unable to save the log settings!')
        });
      } else {
        _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_0__.FormUtils.scrollToFirstInvalidField(this.settingsForm);
      }
    }
    buildSelectItems() {
      // Enabled or disabled
      this.enabledOrDisabled = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_0__.FormUtils.enabledOrDisabledSelectItems();
      // Log levels (value corresponds to python log level)
      this.logLevels = [];
      this.logLevels.push({
        label: 'Debug',
        value: 10
      });
      this.logLevels.push({
        label: 'Info',
        value: 20
      });
      this.logLevels.push({
        label: 'Warning',
        value: 30
      });
      this.logLevels.push({
        label: 'Error',
        value: 40
      });
      this.logLevels.push({
        label: 'Critical',
        value: 50
      });
    }
    buildForm(logSettings) {
      this.settingsForm = this.fb.group({
        logFile: [logSettings.logFile, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _shared_components_forms_form_validators__WEBPACK_IMPORTED_MODULE_1__.FormValidators.notEmpty]],
        logLevel: [logSettings.logLevel, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
        logNum: [logSettings.logNum, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
        logSize: [logSettings.logSize, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
        logHttpAccess: [logSettings.logHttpAccess, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
        logExternalLibs: [logSettings.logExternalLibs, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
        logDetailedFormat: [logSettings.logDetailedFormat, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
        logReversed: [logSettings.logReversed, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
        logLevelConsole: [logSettings.logLevelConsole, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]]
      });
    }
    getLogSettings() {
      const settings = new _shared_models_settings__WEBPACK_IMPORTED_MODULE_2__.LogSettings();
      settings.logFile = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_0__.FormUtils.getFormControlValue(this.settingsForm, 'logFile');
      settings.logLevel = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_0__.FormUtils.getFormControlValue(this.settingsForm, 'logLevel');
      settings.logNum = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_0__.FormUtils.getFormControlValue(this.settingsForm, 'logNum');
      settings.logSize = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_0__.FormUtils.getFormControlValue(this.settingsForm, 'logSize');
      settings.logHttpAccess = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_0__.FormUtils.getFormControlValue(this.settingsForm, 'logHttpAccess');
      settings.logExternalLibs = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_0__.FormUtils.getFormControlValue(this.settingsForm, 'logExternalLibs');
      settings.logDetailedFormat = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_0__.FormUtils.getFormControlValue(this.settingsForm, 'logDetailedFormat');
      settings.logReversed = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_0__.FormUtils.getFormControlValue(this.settingsForm, 'logReversed');
      settings.logLevelConsole = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_0__.FormUtils.getFormControlValue(this.settingsForm, 'logLevelConsole');
      return settings;
    }
  }
  SettingsLoggingComponent.ɵfac = function SettingsLoggingComponent_Factory(t) {
    return new (t || SettingsLoggingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_11__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_core_services_api_settings_service__WEBPACK_IMPORTED_MODULE_3__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_app_settings_service__WEBPACK_IMPORTED_MODULE_4__.AppSettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_core_services_message_service__WEBPACK_IMPORTED_MODULE_5__.MessageService));
  };
  SettingsLoggingComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
    type: SettingsLoggingComponent,
    selectors: [["app-settings-logging"]],
    decls: 3,
    vars: 1,
    consts: [[1, "container-lg"], ["header", "Log settings"], ["class", "form", 3, "formGroup", 4, "ngIf"], [1, "form", 3, "formGroup"], [1, "row", "form-row"], [1, "col-12", "col-sm-12", "col-md-4", "col-lg-4", "form-row-label"], ["for", "logFile", 1, "label"], [1, "col-12", "col-sm-12", "col-md-8", "col-lg-8"], ["formControlName", "logFile", 3, "validationFeedback"], ["for", "logLevel", 1, "label"], ["formControlName", "logLevel", 3, "options", "validationFeedback"], ["for", "logNum", 1, "label"], ["formControlName", "logNum", "suffix", " file(s)", 3, "min"], ["for", "logSize", 1, "label"], ["formControlName", "logSize", "suffix", " MB", 3, "min"], ["for", "logHttpAccess", 1, "label"], ["formControlName", "logHttpAccess", 3, "options"], ["for", "logExternalLibs", 1, "label"], ["formControlName", "logExternalLibs", 3, "options"], ["for", "logDetailedFormat", 1, "label"], ["formControlName", "logDetailedFormat", 3, "options"], ["for", "logReversed", 1, "label"], ["formControlName", "logReversed", 3, "options"], ["for", "logLevelConsole", 1, "label"], ["formControlName", "logLevelConsole", 3, "options", "validationFeedback"], [1, "row", "button-row"], [1, "col-12", "col-sm-12", "col-md-12", "col-lg-10"], ["label", "Save", 3, "onClick"]],
    template: function SettingsLoggingComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0)(1, "p-panel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, SettingsLoggingComponent_form_2_Template, 93, 12, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.settingsForm);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControlName, primeng_panel__WEBPACK_IMPORTED_MODULE_13__.Panel, primeng_button__WEBPACK_IMPORTED_MODULE_14__.Button, _shared_components_icon_dropdown_icon_dropdown_component__WEBPACK_IMPORTED_MODULE_6__.IconDropdownComponent, _shared_components_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_7__.InputTextComponent, _shared_components_input_number_input_number_component__WEBPACK_IMPORTED_MODULE_8__.InputNumberComponent, _shared_components_input_dropdown_input_dropdown_component__WEBPACK_IMPORTED_MODULE_9__.InputDropdownComponent],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
  return SettingsLoggingComponent;
})();

/***/ }),

/***/ 9997:
/*!********************************************************************************!*\
  !*** ./src/app/modules/settings/namemapping/settings-namemapping.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsNamemappingComponent": () => (/* binding */ SettingsNamemappingComponent)
/* harmony export */ });
/* harmony import */ var _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/components/forms/form-utils */ 2571);
/* harmony import */ var _shared_models_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/models/settings */ 5868);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _core_services_api_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/api/settings.service */ 4873);
/* harmony import */ var _app_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../app-settings.service */ 1205);
/* harmony import */ var _core_services_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/services/message.service */ 1245);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/message */ 3589);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/panel */ 4266);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var _shared_components_icon_dropdown_icon_dropdown_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/icon-dropdown/icon-dropdown.component */ 1738);
/* harmony import */ var _shared_components_input_multi_text_input_multi_text_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/input/multi-text/input-multi-text.component */ 5125);













function SettingsNamemappingComponent_form_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "form", 3)(1, "div", 4)(2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "p-message", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 4)(5, "div", 7)(6, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Show");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 4)(9, "div", 9)(10, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "Name mapping");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "app-icon-dropdown")(13, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "The local show name mapping to the TVDB ID.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "Examples:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "Show name = 12345");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, "Show name 2 = 123456");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](22, "app-input-multi-text", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "div", 4)(24, "div", 9)(25, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26, "Addic7ed name mapping");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "app-icon-dropdown")(28, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29, "The local show name mapping to the Addic7ed ID.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31, "Examples:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33, "Show name = 12345");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](35, "Show name 2 = 123456");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](37, "app-input-multi-text", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "div", 4)(39, "div", 9)(40, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](41, "Alternative name mapping");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "app-icon-dropdown")(43, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](44, "List the alternative names of a show to increase subtitle matching.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](46, "Examples:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](48, "Show name = Show name alternative 1a,Show name alternative 1b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](49, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](50, "Show name 2 = Show name 2a");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](51, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](52, "app-input-multi-text", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](53, "div", 4)(54, "div", 7)(55, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](56, "Movie");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](57, "div", 4)(58, "div", 9)(59, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](60, "Name mapping");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](61, "app-icon-dropdown")(62, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](63, "The local movie name mapping to the IMDB ID.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](64, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](65, "Examples:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](66, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](67, "Movie title (year) = 12345");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](68, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](69, "Movie title 2 (year) = 123456");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](70, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](71, "app-input-multi-text", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](72, "div", 4)(73, "div", 9)(74, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](75, "Alternative name mapping");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](76, "app-icon-dropdown")(77, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](78, "List the alternative titles of a movie to increase subtitle matching.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](79, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](80, "Examples:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](81, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](82, "Movie title = Movie title alternative 1a,Movie title alternative 1b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](83, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](84, "Movie title 2 = Movie title 2a");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](85, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](86, "app-input-multi-text", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](87, "div", 21)(88, "div", 22)(89, "p-button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onClick", function SettingsNamemappingComponent_form_2_Template_p_button_onClick_89_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.save());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx_r0.settingsForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("validationFeedback", ctx_r0.saveAttempt);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("validationFeedback", ctx_r0.saveAttempt);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("validationFeedback", ctx_r0.saveAttempt);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("validationFeedback", ctx_r0.saveAttempt);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("validationFeedback", ctx_r0.saveAttempt);
  }
}
let SettingsNamemappingComponent = /*#__PURE__*/(() => {
  class SettingsNamemappingComponent {
    constructor(fb, settingsService, appSettingsService, messageService) {
      this.fb = fb;
      this.settingsService = settingsService;
      this.appSettingsService = appSettingsService;
      this.messageService = messageService;
      this.saveAttempt = false;
    }
    ngOnInit() {
      this.settingsService.getNameMappingSettings().subscribe({
        next: nameMappingSettings => {
          this.buildForm(nameMappingSettings);
        },
        error: () => this.messageService.showErrorMessage('Unable to get the namemapping settings!')
      });
    }
    save() {
      this.saveAttempt = true;
      if (this.settingsForm.valid) {
        this.settingsService.updateNameMappingSettings(this.getNameMappingSettings()).subscribe({
          next: () => {
            this.messageService.showSuccessMessage('Namemapping settings saved.');
            this.appSettingsService.reload(); // reload app settings
          },

          error: () => this.messageService.showErrorMessage('Unable to save the namemapping settings!')
        });
      } else {
        _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_0__.FormUtils.scrollToFirstInvalidField(this.settingsForm);
      }
    }
    buildForm(nameMappingSettings) {
      this.settingsForm = this.fb.group({
        showNameMapping: [nameMappingSettings.showNameMapping || [], []],
        addic7edShowNameMapping: [nameMappingSettings.addic7edShowNameMapping || [], []],
        alternativeShowNameMapping: [nameMappingSettings.alternativeShowNameMapping || [], []],
        movieNameMapping: [nameMappingSettings.movieNameMapping || [], []],
        alternativeMovieNameMapping: [nameMappingSettings.alternativeMovieNameMapping || [], []]
      });
    }
    getNameMappingSettings() {
      const settings = new _shared_models_settings__WEBPACK_IMPORTED_MODULE_1__.NameMappingSettings();
      settings.showNameMapping = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_0__.FormUtils.getFormControlValue(this.settingsForm, 'showNameMapping');
      settings.addic7edShowNameMapping = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_0__.FormUtils.getFormControlValue(this.settingsForm, 'addic7edShowNameMapping');
      settings.alternativeShowNameMapping = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_0__.FormUtils.getFormControlValue(this.settingsForm, 'alternativeShowNameMapping');
      settings.movieNameMapping = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_0__.FormUtils.getFormControlValue(this.settingsForm, 'movieNameMapping');
      settings.alternativeMovieNameMapping = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_0__.FormUtils.getFormControlValue(this.settingsForm, 'alternativeMovieNameMapping');
      return settings;
    }
  }
  SettingsNamemappingComponent.ɵfac = function SettingsNamemappingComponent_Factory(t) {
    return new (t || SettingsNamemappingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_services_api_settings_service__WEBPACK_IMPORTED_MODULE_2__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_app_settings_service__WEBPACK_IMPORTED_MODULE_3__.AppSettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_services_message_service__WEBPACK_IMPORTED_MODULE_4__.MessageService));
  };
  SettingsNamemappingComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: SettingsNamemappingComponent,
    selectors: [["app-settings-namemapping"]],
    decls: 3,
    vars: 1,
    consts: [[1, "container-lg"], ["header", "Namemapping settings"], ["class", "form", 3, "formGroup", 4, "ngIf"], [1, "form", 3, "formGroup"], [1, "row", "form-row"], [1, "col-12", "form-row-notification"], ["severity", "warn", "text", "Use the namemapping at own risk! Incorrect use of the namemapping may result in subtitles not being found!", "styleClass", "w-100"], [1, "col-12"], [1, "p-tag", "p-tag-rounded", "p-tag-small"], [1, "col-12", "col-sm-12", "col-md-4", "col-lg-4", "form-row-label"], ["for", "showNameMapping", 1, "label"], [1, "col-12", "col-sm-12", "col-md-8", "col-lg-8"], ["formControlName", "showNameMapping", 3, "validationFeedback"], ["for", "addic7edShowNameMapping", 1, "label"], ["formControlName", "addic7edShowNameMapping", 3, "validationFeedback"], ["for", "alternativeShowNameMapping", 1, "label"], ["formControlName", "alternativeShowNameMapping", 3, "validationFeedback"], ["for", "movieNameMapping", 1, "label"], ["formControlName", "movieNameMapping", 3, "validationFeedback"], ["for", "alternativeMovieNameMapping", 1, "label"], ["formControlName", "alternativeMovieNameMapping", 3, "validationFeedback"], [1, "row", "button-row"], [1, "col-12", "col-sm-12", "col-md-12", "col-lg-10"], ["label", "Save", 3, "onClick"]],
    template: function SettingsNamemappingComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "p-panel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, SettingsNamemappingComponent_form_2_Template, 90, 6, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.settingsForm);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, primeng_message__WEBPACK_IMPORTED_MODULE_10__.UIMessage, primeng_panel__WEBPACK_IMPORTED_MODULE_11__.Panel, primeng_button__WEBPACK_IMPORTED_MODULE_12__.Button, _shared_components_icon_dropdown_icon_dropdown_component__WEBPACK_IMPORTED_MODULE_5__.IconDropdownComponent, _shared_components_input_multi_text_input_multi_text_component__WEBPACK_IMPORTED_MODULE_6__.InputMultiTextComponent],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
  return SettingsNamemappingComponent;
})();

/***/ }),

/***/ 3048:
/*!**********************************************************************************!*\
  !*** ./src/app/modules/settings/notification/settings-notification.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsNotificationComponent": () => (/* binding */ SettingsNotificationComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/components/forms/form-utils */ 2571);
/* harmony import */ var _shared_models_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/models/settings */ 5868);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _core_services_api_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/api/settings.service */ 4873);
/* harmony import */ var _app_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../app-settings.service */ 1205);
/* harmony import */ var _core_services_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/services/message.service */ 1245);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/message */ 3589);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/panel */ 4266);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/inputtext */ 9906);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/dialog */ 1837);
/* harmony import */ var _shared_components_icon_dropdown_icon_dropdown_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/icon-dropdown/icon-dropdown.component */ 1738);
/* harmony import */ var _shared_components_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/input/text/input-text.component */ 6015);
/* harmony import */ var _shared_components_input_number_input_number_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/input/number/input-number.component */ 8424);
/* harmony import */ var _shared_components_input_dropdown_input_dropdown_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/components/input/dropdown/input-dropdown.component */ 9772);


















function SettingsNotificationComponent_form_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "form", 5)(1, "div", 6)(2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "p-message", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 6)(5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](6, "p-message", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "div", 6)(8, "div", 10)(9, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, "General");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "div", 6)(12, "div", 12)(13, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14, "Notify");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "app-icon-dropdown")(16, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17, "When enabled, notification(s) will be sent when a subtitle has been downloaded.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](19, "app-input-dropdown", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](21, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "div", 14)(23, "p-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("onClick", function SettingsNotificationComponent_form_2_Template_p_button_onClick_23_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.save());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "div", 6)(25, "div", 10)(26, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](27, "Mail");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](28, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "div", 6)(30, "div", 12)(31, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](32, "Notify");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](33, "app-icon-dropdown")(34, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](35, "When enabled, an email notification will be sent when a subtitle has been downloaded.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](36, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](37, "app-input-dropdown", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](38, "div", 6)(39, "div", 12)(40, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](41, "Server");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](42, "app-icon-dropdown")(43, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](44, "The mail server address (and port if needed).");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](45, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](46, "app-input-text", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](47, "div", 6)(48, "div", 12)(49, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](50, "Sender name");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](51, "app-icon-dropdown")(52, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](53, "The name from which the notification will be sent.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](54, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](55, "app-input-text", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](56, "div", 6)(57, "div", 12)(58, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](59, "Sender");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](60, "app-icon-dropdown")(61, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](62, "The email address from which the notification will be sent.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](63, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](64, "app-input-text", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](65, "div", 6)(66, "div", 12)(67, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](68, "Receiver");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](69, "app-icon-dropdown")(70, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](71, "The email address(es) to which the notification will be sent.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](72, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](73, "app-input-text", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](74, "div", 6)(75, "div", 12)(76, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](77, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](78, "app-icon-dropdown")(79, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](80, "The username on the mail server.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](81, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](82, "app-input-text", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](83, "div", 6)(84, "div", 12)(85, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](86, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](87, "app-icon-dropdown")(88, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](89, "The password for the username on the mail server.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](90, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](91, "app-input-text", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](92, "div", 6)(93, "div", 12)(94, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](95, "Subject");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](96, "app-icon-dropdown")(97, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](98, "The email subject.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](99, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](100, "If not provided, the default subject will be used.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](101, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](102, "app-input-text", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](103, "div", 6)(104, "div", 12)(105, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](106, "Encryption");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](107, "app-icon-dropdown")(108, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](109, "The encryption method used by the mail server.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](110, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](111, "app-input-text", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](112, "div", 6)(113, "div", 12)(114, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](115, "Authentication");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](116, "app-icon-dropdown")(117, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](118, "The authentication mechanism used by the mail server.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](119, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](120, "Don't change this if you don't know what you are doing.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](121, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](122, "app-input-text", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](123, "div", 6)(124, "div", 38)(125, "p-button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("onClick", function SettingsNotificationComponent_form_2_Template_p_button_onClick_125_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r3);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r4.test("mail"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](126, "p-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("onClick", function SettingsNotificationComponent_form_2_Template_p_button_onClick_126_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r3);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r5.save());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](127, "div", 6)(128, "div", 10)(129, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](130, "Twitter");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](131, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](132, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](133, "div", 6)(134, "div", 12)(135, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](136, "Notify");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](137, "app-icon-dropdown")(138, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](139, "When enabled, a Twitter notification will be sent when a subtitle has been downloaded.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](140, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](141, "app-input-dropdown", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](142, "div", 6)(143, "div", 12)(144, "label", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](145, "API key");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](146, "app-icon-dropdown")(147, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](148, "The API key for Twitter.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](149, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](150, "app-input-text", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](151, "div", 6)(152, "div", 12)(153, "label", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](154, "Secret code");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](155, "app-icon-dropdown")(156, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](157, "The secret code for Twitter.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](158, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](159, "app-input-text", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](160, "div", 6)(161, "div", 38)(162, "p-button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("onClick", function SettingsNotificationComponent_form_2_Template_p_button_onClick_162_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r3);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r6.registerTwitter());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](163, "p-button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("onClick", function SettingsNotificationComponent_form_2_Template_p_button_onClick_163_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r3);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r7.test("twitter"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](164, "p-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("onClick", function SettingsNotificationComponent_form_2_Template_p_button_onClick_164_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r3);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r8.save());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](165, "div", 6)(166, "div", 10)(167, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](168, "Pushalot");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](169, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](170, "img", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](171, "div", 6)(172, "div", 12)(173, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](174, "Notify");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](175, "app-icon-dropdown")(176, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](177, "When enabled, a Pushalot notification will be sent when a subtitle has been downloaded.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](178, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](179, "app-input-dropdown", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](180, "div", 6)(181, "div", 12)(182, "label", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](183, "API key");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](184, "app-icon-dropdown")(185, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](186, "The API key for Pushalot.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](187, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](188, "app-input-text", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](189, "div", 6)(190, "div", 38)(191, "p-button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("onClick", function SettingsNotificationComponent_form_2_Template_p_button_onClick_191_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r3);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r9.test("pushalot"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](192, "p-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("onClick", function SettingsNotificationComponent_form_2_Template_p_button_onClick_192_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r3);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r10.save());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](193, "div", 6)(194, "div", 10)(195, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](196, "Pushover");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](197, "a", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](198, "img", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](199, "div", 6)(200, "div", 12)(201, "label", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](202, "Notify");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](203, "app-icon-dropdown")(204, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](205, "When enabled, a Pushover notification will be sent when a subtitle has been downloaded.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](206, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](207, "app-input-dropdown", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](208, "div", 6)(209, "div", 12)(210, "label", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](211, "User key");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](212, "app-icon-dropdown")(213, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](214, "The user key for Pushover.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](215, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](216, "app-input-text", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](217, "div", 6)(218, "div", 12)(219, "label", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](220, "API key");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](221, "app-icon-dropdown")(222, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](223, "The API key for Pushover.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](224, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](225, "app-input-text", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](226, "div", 6)(227, "div", 12)(228, "label", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](229, "Devices");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](230, "app-icon-dropdown")(231, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](232, "The devices (comma separated list) used for Pushover notifications.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](233, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](234, "If not provided, notifications will be sent to all your Pushover devices.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](235, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](236, "app-input-text", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](237, "div", 6)(238, "div", 38)(239, "p-button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("onClick", function SettingsNotificationComponent_form_2_Template_p_button_onClick_239_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r3);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r11.test("pushover"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](240, "p-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("onClick", function SettingsNotificationComponent_form_2_Template_p_button_onClick_240_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r3);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r12.save());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](241, "div", 6)(242, "div", 10)(243, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](244, "Growl");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](245, "a", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](246, "img", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](247, "div", 6)(248, "div", 12)(249, "label", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](250, "Notify");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](251, "app-icon-dropdown")(252, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](253, "When enabled, a Growl notification will be sent when a subtitle has been downloaded.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](254, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](255, "app-input-dropdown", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](256, "div", 6)(257, "div", 12)(258, "label", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](259, "Server");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](260, "app-icon-dropdown")(261, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](262, "The Growl host server address.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](263, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](264, "app-input-text", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](265, "div", 6)(266, "div", 12)(267, "label", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](268, "Port");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](269, "app-icon-dropdown")(270, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](271, "The port of the Growl host server.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](272, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](273, "app-input-number", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](274, "div", 6)(275, "div", 12)(276, "label", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](277, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](278, "app-icon-dropdown")(279, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](280, "The password on the growl host server.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](281, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](282, "app-input-text", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](283, "div", 6)(284, "div", 12)(285, "label", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](286, "Priority");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](287, "app-icon-dropdown")(288, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](289, "The priority for the Growl notification.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](290, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](291, "app-input-dropdown", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](292, "div", 6)(293, "div", 38)(294, "p-button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("onClick", function SettingsNotificationComponent_form_2_Template_p_button_onClick_294_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r3);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r13.test("growl"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](295, "p-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("onClick", function SettingsNotificationComponent_form_2_Template_p_button_onClick_295_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r3);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r14.save());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](296, "div", 6)(297, "div", 10)(298, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](299, "Prowl");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](300, "a", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](301, "img", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](302, "div", 6)(303, "div", 12)(304, "label", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](305, "Notify");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](306, "app-icon-dropdown")(307, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](308, "When enabled, a Prowl notification will be sent when a subtitle has been downloaded.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](309, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](310, "app-input-dropdown", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](311, "div", 6)(312, "div", 12)(313, "label", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](314, "API key");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](315, "app-icon-dropdown")(316, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](317, "The API key for Prowl.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](318, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](319, "Your API key can be found by visiting: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](320, "a", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](321, "https://prowlapp.com/api_settings.php");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](322, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](323, "app-input-text", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](324, "div", 6)(325, "div", 12)(326, "label", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](327, "Priority");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](328, "app-icon-dropdown")(329, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](330, "The priority for the Prowl notification.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](331, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](332, "app-input-dropdown", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](333, "div", 6)(334, "div", 38)(335, "p-button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("onClick", function SettingsNotificationComponent_form_2_Template_p_button_onClick_335_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r3);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r15.test("prowl"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](336, "p-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("onClick", function SettingsNotificationComponent_form_2_Template_p_button_onClick_336_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r3);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r16.save());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](337, "div", 6)(338, "div", 10)(339, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](340, "Pushbullet");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](341, "a", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](342, "img", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](343, "div", 6)(344, "div", 12)(345, "label", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](346, "Notify");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](347, "app-icon-dropdown")(348, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](349, "When enabled, a Pushbullet notification will be sent when a subtitle has been downloaded.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](350, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](351, "app-input-dropdown", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](352, "div", 6)(353, "div", 12)(354, "label", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](355, "API key");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](356, "app-icon-dropdown")(357, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](358, "The API key for Pushbullet.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](359, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](360, "app-input-text", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](361, "div", 6)(362, "div", 38)(363, "p-button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("onClick", function SettingsNotificationComponent_form_2_Template_p_button_onClick_363_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r3);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r17.test("pushbullet"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](364, "p-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("onClick", function SettingsNotificationComponent_form_2_Template_p_button_onClick_364_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r3);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r18.save());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](365, "div", 6)(366, "div", 10)(367, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](368, "Telegram");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](369, "a", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](370, "img", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](371, "div", 6)(372, "div", 12)(373, "label", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](374, "Notify");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](375, "app-icon-dropdown")(376, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](377, "When enabled, a Telegram notification will be sent when a subtitle has been downloaded.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](378, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](379, "app-input-dropdown", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](380, "div", 6)(381, "div", 12)(382, "label", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](383, "Bot API key (token)");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](384, "app-icon-dropdown")(385, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](386, "The bot API key (token) for Telegram.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](387, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](388, "Contact @BotFather on Telegram to set up one.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](389, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](390, "See ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](391, "a", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](392, "https://core.telegram.org/bots");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](393, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](394, "app-input-text", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](395, "div", 6)(396, "div", 12)(397, "label", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](398, "Chat ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](399, "app-icon-dropdown")(400, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](401, "Unique identifier for the target chat or username of the target channel (in the format @channelusername).");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](402, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](403, "Contact @myidbot on Telegram to get an ID.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](404, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](405, "app-input-text", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](406, "div", 6)(407, "div", 38)(408, "p-button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("onClick", function SettingsNotificationComponent_form_2_Template_p_button_onClick_408_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r3);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r19.test("telegram"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](409, "p-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("onClick", function SettingsNotificationComponent_form_2_Template_p_button_onClick_409_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r3);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r20.save());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](410, "div", 101)(411, "div", 102)(412, "p-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("onClick", function SettingsNotificationComponent_form_2_Template_p_button_onClick_412_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r3);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r21.save());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx_r0.settingsForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("options", ctx_r0.enabledOrDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("options", ctx_r0.enabledOrDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("validationFeedback", ctx_r0.saveAttempt);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("validationFeedback", ctx_r0.saveAttempt);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("validationFeedback", ctx_r0.saveAttempt);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("validationFeedback", ctx_r0.saveAttempt);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("validationFeedback", ctx_r0.saveAttempt);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("validationFeedback", ctx_r0.saveAttempt);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("validationFeedback", ctx_r0.saveAttempt);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("validationFeedback", ctx_r0.saveAttempt);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("validationFeedback", ctx_r0.saveAttempt);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("options", ctx_r0.enabledOrDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("validationFeedback", ctx_r0.saveAttempt);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("validationFeedback", ctx_r0.saveAttempt);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("options", ctx_r0.enabledOrDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("validationFeedback", ctx_r0.saveAttempt);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("options", ctx_r0.enabledOrDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("validationFeedback", ctx_r0.saveAttempt);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("validationFeedback", ctx_r0.saveAttempt);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("validationFeedback", ctx_r0.saveAttempt);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("options", ctx_r0.enabledOrDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("validationFeedback", ctx_r0.saveAttempt);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("showButtons", false)("validationFeedback", ctx_r0.saveAttempt);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("validationFeedback", ctx_r0.saveAttempt);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("options", ctx_r0.growlProwlPriorities)("validationFeedback", ctx_r0.saveAttempt);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("options", ctx_r0.enabledOrDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("validationFeedback", ctx_r0.saveAttempt);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("options", ctx_r0.growlProwlPriorities)("validationFeedback", ctx_r0.saveAttempt);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("options", ctx_r0.enabledOrDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("validationFeedback", ctx_r0.saveAttempt);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("options", ctx_r0.enabledOrDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("validationFeedback", ctx_r0.saveAttempt);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("validationFeedback", ctx_r0.saveAttempt);
  }
}
function SettingsNotificationComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div")(1, "div", 6)(2, "div", 10)(3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "In order to use twitter, you need to give permission to 'Auto-Subliminal' to send tweets with your account.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div", 6)(6, "div", 10)(7, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "Execute the following steps:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div", 6)(10, "div", 10)(11, "ul")(12, "li")(13, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14, "Go to ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "a", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16, "twitter");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "li")(18, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](19, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "li")(21, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](22, "Authorize 'Auto-Subliminal'");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "li")(24, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](25, "Enter pin below and click 'OK'");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "div", 6)(27, "div", 104)(28, "div", 105)(29, "input", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function SettingsNotificationComponent_div_4_Template_input_ngModelChange_29_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r23);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r22.twitterRegistration.tokenPin = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](30, "p-button", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("onClick", function SettingsNotificationComponent_div_4_Template_p_button_onClick_30_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r23);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r24.authorizeTwitter());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("href", ctx_r1.twitterRegistration.url, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r1.twitterRegistration.tokenPin);
  }
}
let SettingsNotificationComponent = /*#__PURE__*/(() => {
  class SettingsNotificationComponent {
    constructor(fb, settingsService, appSettingsService, messageService) {
      this.fb = fb;
      this.settingsService = settingsService;
      this.appSettingsService = appSettingsService;
      this.messageService = messageService;
      this.twitterRegistrationDialog = false;
      this.saveAttempt = false;
    }
    ngOnInit() {
      this.buildSelectItems();
      this.settingsService.getNotificationSettings().subscribe({
        next: notificationSettings => {
          this.buildForm(notificationSettings);
        },
        error: () => this.messageService.showErrorMessage('Unable to get the notification settings!')
      });
    }
    save() {
      this.saveAttempt = true;
      if (this.settingsForm.valid) {
        this.settingsService.updateNotificationSettings(this.getNotificationSettings()).subscribe({
          next: () => {
            this.messageService.showSuccessMessage('Notification settings saved.');
            this.appSettingsService.reload(); // reload app settings
          },

          error: () => this.messageService.showErrorMessage('Unable to save the notification settings!')
        });
      } else {
        _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_0__.FormUtils.scrollToFirstInvalidField(this.settingsForm);
      }
    }
    test(notifierName) {
      this.settingsService.testNotifier(notifierName).subscribe({
        next: () => this.messageService.showSuccessMessage(`Test ${notifierName} notification sent.`),
        error: () => this.messageService.showErrorMessage(`Test ${notifierName} notification failed!`)
      });
    }
    registerTwitter() {
      this.settingsService.registerTwitter().subscribe({
        next: twitterRegistration => {
          // Show dialog to finish the registration
          this.twitterRegistration = twitterRegistration;
          this.twitterRegistrationDialog = true;
        },
        error: () => this.messageService.showErrorMessage('Twitter registration failed!')
      });
    }
    authorizeTwitter() {
      this.settingsService.authorizeTwitter(this.twitterRegistration).subscribe({
        next: twitterAuthorization => {
          // Update form with twitter key and secret
          _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_0__.FormUtils.setFormControlValue(this.settingsForm, 'twitterKey', twitterAuthorization.twitterKey);
          _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_0__.FormUtils.setFormControlValue(this.settingsForm, 'twitterSecret', twitterAuthorization.twitterSecret);
          this.messageService.showSuccessMessage('Twitter registration successful. Please save and test Twitter.');
        },
        error: () => this.messageService.showErrorMessage('Twitter authorization failed!')
      });
    }
    buildSelectItems() {
      // Enabled or disabled
      this.enabledOrDisabled = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_0__.FormUtils.enabledOrDisabledSelectItems();
      // Growl/Prowl priorities
      this.growlProwlPriorities = [];
      this.growlProwlPriorities.push({
        label: 'Very low',
        value: -2
      });
      this.growlProwlPriorities.push({
        label: 'Moderate',
        value: -1
      });
      this.growlProwlPriorities.push({
        label: 'Normal',
        value: 0
      });
      this.growlProwlPriorities.push({
        label: 'High',
        value: 1
      });
      this.growlProwlPriorities.push({
        label: 'Emergency',
        value: 2
      });
    }
    buildForm(notificationSettings) {
      this.settingsForm = this.fb.group({
        notify: [notificationSettings.notify, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
        notifyMail: [notificationSettings.notifyMail, []],
        mailServer: [notificationSettings.mailServer, []],
        mailFromName: [notificationSettings.mailFromName, []],
        mailFrom: [notificationSettings.mailFrom, []],
        mailTo: [notificationSettings.mailTo, []],
        mailUserName: [notificationSettings.mailUserName, []],
        mailPassword: [notificationSettings.mailPassword, []],
        mailSubject: [notificationSettings.mailSubject, []],
        mailEncryption: [notificationSettings.mailEncryption, []],
        mailAuthentication: [notificationSettings.mailAuthentication, []],
        notifyTwitter: [notificationSettings.notifyTwitter, []],
        twitterKey: [notificationSettings.twitterKey, []],
        twitterSecret: [notificationSettings.twitterSecret, []],
        notifyPushalot: [notificationSettings.notifyPushalot, []],
        pushalotApi: [notificationSettings.pushalotApi, []],
        notifyPushover: [notificationSettings.notifyPushover, []],
        pushoverKey: [notificationSettings.pushoverKey, []],
        pushoverApi: [notificationSettings.pushoverApi, []],
        pushoverDevices: [notificationSettings.pushoverDevices, []],
        notifyGrowl: [notificationSettings.notifyGrowl, []],
        growlHost: [notificationSettings.growlHost, []],
        growlPort: [notificationSettings.growlPort, []],
        growlPassword: [notificationSettings.growlPassword, []],
        growlPriority: [notificationSettings.growlPriority || 0, []],
        notifyProwl: [notificationSettings.notifyProwl, []],
        prowlApi: [notificationSettings.prowlApi, []],
        prowlPriority: [notificationSettings.prowlPriority || 0, []],
        notifyPushbullet: [notificationSettings.notifyPushbullet, []],
        pushbulletApi: [notificationSettings.pushbulletApi, []],
        notifyTelegram: [notificationSettings.notifyTelegram, []],
        telegramBotApi: [notificationSettings.telegramBotApi, []],
        telegramChatId: [notificationSettings.telegramChatId, []]
      });
    }
    getNotificationSettings() {
      const settings = new _shared_models_settings__WEBPACK_IMPORTED_MODULE_1__.NotificationSettings();
      settings.notify = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_0__.FormUtils.getFormControlValue(this.settingsForm, 'notify');
      settings.notifyMail = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_0__.FormUtils.getFormControlValue(this.settingsForm, 'notifyMail');
      settings.mailServer = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_0__.FormUtils.getFormControlValue(this.settingsForm, 'mailServer');
      settings.mailFromName = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_0__.FormUtils.getFormControlValue(this.settingsForm, 'mailFromName');
      settings.mailFrom = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_0__.FormUtils.getFormControlValue(this.settingsForm, 'mailFrom');
      settings.mailTo = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_0__.FormUtils.getFormControlValue(this.settingsForm, 'mailTo');
      settings.mailUserName = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_0__.FormUtils.getFormControlValue(this.settingsForm, 'mailUserName');
      settings.mailPassword = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_0__.FormUtils.getFormControlValue(this.settingsForm, 'mailPassword');
      settings.mailSubject = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_0__.FormUtils.getFormControlValue(this.settingsForm, 'mailSubject');
      settings.mailEncryption = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_0__.FormUtils.getFormControlValue(this.settingsForm, 'mailEncryption');
      settings.mailAuthentication = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_0__.FormUtils.getFormControlValue(this.settingsForm, 'mailAuthentication');
      settings.notifyTwitter = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_0__.FormUtils.getFormControlValue(this.settingsForm, 'notifyTwitter');
      settings.twitterKey = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_0__.FormUtils.getFormControlValue(this.settingsForm, 'twitterKey');
      settings.twitterSecret = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_0__.FormUtils.getFormControlValue(this.settingsForm, 'twitterSecret');
      settings.notifyPushalot = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_0__.FormUtils.getFormControlValue(this.settingsForm, 'notifyPushalot');
      settings.pushalotApi = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_0__.FormUtils.getFormControlValue(this.settingsForm, 'pushalotApi');
      settings.notifyPushover = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_0__.FormUtils.getFormControlValue(this.settingsForm, 'notifyPushover');
      settings.pushoverKey = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_0__.FormUtils.getFormControlValue(this.settingsForm, 'pushoverKey');
      settings.pushoverApi = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_0__.FormUtils.getFormControlValue(this.settingsForm, 'pushoverApi');
      settings.pushoverDevices = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_0__.FormUtils.getFormControlValue(this.settingsForm, 'pushoverDevices');
      settings.notifyGrowl = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_0__.FormUtils.getFormControlValue(this.settingsForm, 'notifyGrowl');
      settings.growlHost = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_0__.FormUtils.getFormControlValue(this.settingsForm, 'growlHost');
      settings.growlPort = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_0__.FormUtils.getFormControlValue(this.settingsForm, 'growlPort');
      settings.growlPassword = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_0__.FormUtils.getFormControlValue(this.settingsForm, 'growlPassword');
      settings.growlPriority = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_0__.FormUtils.getFormControlValue(this.settingsForm, 'growlPriority');
      settings.notifyProwl = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_0__.FormUtils.getFormControlValue(this.settingsForm, 'notifyProwl');
      settings.prowlApi = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_0__.FormUtils.getFormControlValue(this.settingsForm, 'prowlApi');
      settings.prowlPriority = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_0__.FormUtils.getFormControlValue(this.settingsForm, 'prowlPriority');
      settings.notifyPushbullet = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_0__.FormUtils.getFormControlValue(this.settingsForm, 'notifyPushbullet');
      settings.pushbulletApi = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_0__.FormUtils.getFormControlValue(this.settingsForm, 'pushbulletApi');
      settings.notifyTelegram = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_0__.FormUtils.getFormControlValue(this.settingsForm, 'notifyTelegram');
      settings.telegramBotApi = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_0__.FormUtils.getFormControlValue(this.settingsForm, 'telegramBotApi');
      settings.telegramChatId = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_0__.FormUtils.getFormControlValue(this.settingsForm, 'telegramChatId');
      return settings;
    }
  }
  SettingsNotificationComponent.ɵfac = function SettingsNotificationComponent_Factory(t) {
    return new (t || SettingsNotificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_core_services_api_settings_service__WEBPACK_IMPORTED_MODULE_2__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_app_settings_service__WEBPACK_IMPORTED_MODULE_3__.AppSettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_core_services_message_service__WEBPACK_IMPORTED_MODULE_4__.MessageService));
  };
  SettingsNotificationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
    type: SettingsNotificationComponent,
    selectors: [["app-settings-notification"]],
    decls: 5,
    vars: 7,
    consts: [[1, "container-lg"], ["header", "Notification settings"], ["class", "form", 3, "formGroup", 4, "ngIf"], ["header", "Twitter registration", 3, "visible", "modal", "closable", "resizable", "showHeader", "visibleChange"], [4, "ngIf"], [1, "form", 3, "formGroup"], [1, "row", "form-row"], [1, "col-12", "form-row-notification"], ["severity", "warn", "text", "Passwords and keys are stored in plaintext!", "styleClass", "w-100"], ["severity", "info", "text", "You first need to save before you can test a notification.", "styleClass", "w-100"], [1, "col-12"], [1, "p-tag", "p-tag-rounded", "p-tag-small"], [1, "col-12", "col-sm-12", "col-md-4", "col-lg-4", "form-row-label"], ["for", "notify", 1, "label"], [1, "col-12", "col-sm-12", "col-md-8", "col-lg-8"], ["formControlName", "notify", 3, "options"], ["label", "Save", 3, "onClick"], ["src", "assets/notifiers/email.png", "alt", "Mail", "title", "Mail", 1, "notifier-icon"], ["for", "notifyMail", 1, "label"], ["formControlName", "notifyMail", 3, "options"], ["for", "mailServer", 1, "label"], ["formControlName", "mailServer", 3, "validationFeedback"], ["for", "mailFromName", 1, "label"], ["formControlName", "mailFromName", 3, "validationFeedback"], ["for", "mailFrom", 1, "label"], ["formControlName", "mailFrom", 3, "validationFeedback"], ["for", "mailTo", 1, "label"], ["formControlName", "mailTo", 3, "validationFeedback"], ["for", "mailUserName", 1, "label"], ["formControlName", "mailUserName", 3, "validationFeedback"], ["for", "mailPassword", 1, "label"], ["formControlName", "mailPassword", "type", "password", 3, "validationFeedback"], ["for", "mailSubject", 1, "label"], ["formControlName", "mailSubject", 3, "validationFeedback"], ["for", "mailEncryption", 1, "label"], ["formControlName", "mailEncryption", 3, "validationFeedback"], ["for", "mailAuthentication", 1, "label"], ["formControlName", "mailAuthentication", 3, "validationFeedback"], [1, "col-12", "col-sm-12", "col-md-8", "col-lg-8", "offset-0", "offset-sm-0", "offset-md-4", "offset-lg-4", "form-row-buttons"], ["label", "Test", "styleClass", "p-button-secondary", 3, "onClick"], ["href", "https://twitter.com/", "target", "_blank"], ["src", "assets/notifiers/twitter.png", "alt", "Twitter", "title", "Twitter", 1, "notifier-icon"], ["for", "notifyTwitter", 1, "label"], ["formControlName", "notifyTwitter", 3, "options"], ["for", "twitterKey", 1, "label"], ["formControlName", "twitterKey", 3, "validationFeedback"], ["for", "twitterSecret", 1, "label"], ["formControlName", "twitterSecret", "type", "password", 3, "validationFeedback"], ["label", "Register", "styleClass", "p-button-secondary", 3, "onClick"], ["href", "https://pushalot.com/", "target", "_blank"], ["src", "assets/notifiers/pushalot.png", "alt", "Pushalot", "title", "Pushalot", 1, "notifier-icon"], ["for", "notifyPushalot", 1, "label"], ["formControlName", "notifyPushalot", 3, "options"], ["for", "pushalotApi", 1, "label"], ["formControlName", "pushalotApi", 3, "validationFeedback"], ["href", "https://pushover.net/", "target", "_blank"], ["src", "assets/notifiers/pushover.png", "alt", "Pushover", "title", "Pushover", 1, "notifier-icon"], ["for", "notifyPushover", 1, "label"], ["formControlName", "notifyPushover", 3, "options"], ["for", "pushoverKey", 1, "label"], ["formControlName", "pushoverKey", 3, "validationFeedback"], ["for", "pushoverApi", 1, "label"], ["formControlName", "pushoverApi", 3, "validationFeedback"], ["for", "pushoverDevices", 1, "label"], ["formControlName", "pushoverDevices", 3, "validationFeedback"], ["href", "http://www.growl.info/", "target", "_blank"], ["src", "assets/notifiers/growl.png", "alt", "Growl", "title", "Growl", 1, "notifier-icon"], ["for", "notifyGrowl", 1, "label"], ["formControlName", "notifyGrowl", 3, "options"], ["for", "growlHost", 1, "label"], ["formControlName", "growlHost", 3, "validationFeedback"], ["for", "growlPort", 1, "label"], ["formControlName", "growlPort", 3, "showButtons", "validationFeedback"], ["for", "growlPassword", 1, "label"], ["formControlName", "growlPassword", "type", "password", 3, "validationFeedback"], ["for", "growlPriority", 1, "label"], ["formControlName", "growlPriority", 3, "options", "validationFeedback"], ["href", "https://www.prowlapp.com/", "target", "_blank"], ["src", "assets/notifiers/prowl.png", "alt", "Prowl", "title", "Prowl", 1, "notifier-icon"], ["for", "notifyProwl", 1, "label"], ["formControlName", "notifyProwl", 3, "options"], ["for", "prowlApi", 1, "label"], ["href", "https://prowlapp.com/api_settings.php", "target", "_blank"], ["formControlName", "prowlApi", 3, "validationFeedback"], ["for", "prowlPriority", 1, "label"], ["formControlName", "prowlPriority", 3, "options", "validationFeedback"], ["href", "https://www.pushbullet.com/", "target", "_blank"], ["src", "assets/notifiers/pushbullet.png", "alt", "Pushbullet", "title", "Pushbullet", 1, "notifier-icon"], ["for", "notifyPushbullet", 1, "label"], ["formControlName", "notifyPushbullet", 3, "options"], ["for", "pushbulletApi", 1, "label"], ["formControlName", "pushbulletApi", 3, "validationFeedback"], ["href", "https://telegram.org/", "target", "_blank"], ["src", "assets/notifiers/telegram.png", "alt", "Telegram", "title", "Telegram", 1, "notifier-icon"], ["for", "notifyTelegram", 1, "label"], ["formControlName", "notifyTelegram", 3, "options"], ["for", "telegramBotApi", 1, "label"], ["href", "https://core.telegram.org/bots", "target", "_blank"], ["formControlName", "telegramBotApi", 3, "validationFeedback"], ["for", "telegramChatId", 1, "label"], ["formControlName", "telegramChatId", 3, "validationFeedback"], [1, "row", "button-row"], [1, "col-12", "col-sm-12", "col-md-12", "col-lg-10"], ["target", "_blank", 3, "href"], [1, "col-6", "col-6", "col-sm-6", "col-md-4", "col-lg-4"], [1, "p-inputgroup"], ["type", "text", "pInputText", "", "placeholder", "Pin", 3, "ngModel", "ngModelChange"], ["label", "Ok", "styleClass", "p-button-outlined input-addon", 3, "onClick"]],
    template: function SettingsNotificationComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0)(1, "p-panel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, SettingsNotificationComponent_form_2_Template, 413, 37, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "p-dialog", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("visibleChange", function SettingsNotificationComponent_Template_p_dialog_visibleChange_3_listener($event) {
          return ctx.twitterRegistrationDialog = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, SettingsNotificationComponent_div_4_Template, 31, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.settingsForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("visible", ctx.twitterRegistrationDialog)("modal", true)("closable", true)("resizable", false)("showHeader", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.twitterRegistration);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName, primeng_message__WEBPACK_IMPORTED_MODULE_12__.UIMessage, primeng_panel__WEBPACK_IMPORTED_MODULE_13__.Panel, primeng_button__WEBPACK_IMPORTED_MODULE_14__.Button, primeng_inputtext__WEBPACK_IMPORTED_MODULE_15__.InputText, primeng_dialog__WEBPACK_IMPORTED_MODULE_16__.Dialog, _shared_components_icon_dropdown_icon_dropdown_component__WEBPACK_IMPORTED_MODULE_5__.IconDropdownComponent, _shared_components_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_6__.InputTextComponent, _shared_components_input_number_input_number_component__WEBPACK_IMPORTED_MODULE_7__.InputNumberComponent, _shared_components_input_dropdown_input_dropdown_component__WEBPACK_IMPORTED_MODULE_8__.InputDropdownComponent],
    styles: [".notifier-icon[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n  position: absolute;\n  height: 1.5rem;\n  width: 1.5rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9zZXR0aW5ncy9ub3RpZmljYXRpb24vc2V0dGluZ3Mtbm90aWZpY2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFFO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIgIC5ub3RpZmllci1pY29uIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBoZWlnaHQ6IDEuNXJlbTtcclxuICAgIHdpZHRoOiAxLjVyZW07XHJcbiAgfVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
  return SettingsNotificationComponent;
})();

/***/ }),

/***/ 9751:
/*!**************************************************************************************!*\
  !*** ./src/app/modules/settings/postprocessing/settings-postprocessing.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPostprocessingComponent": () => (/* binding */ SettingsPostprocessingComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/components/forms/form-utils */ 2571);
/* harmony import */ var _shared_models_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/models/settings */ 5868);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _core_services_api_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/api/settings.service */ 4873);
/* harmony import */ var _app_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../app-settings.service */ 1205);
/* harmony import */ var _core_services_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/services/message.service */ 1245);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/panel */ 4266);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var _shared_components_icon_dropdown_icon_dropdown_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/icon-dropdown/icon-dropdown.component */ 1738);
/* harmony import */ var _shared_components_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/input/text/input-text.component */ 6015);
/* harmony import */ var _shared_components_input_dropdown_input_dropdown_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/input/dropdown/input-dropdown.component */ 9772);
/* harmony import */ var _shared_components_input_file_browser_input_file_browser_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/components/input/file-browser/input-file-browser.component */ 4525);















function SettingsPostprocessingComponent_form_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "form", 3)(1, "div", 4)(2, "div", 5)(3, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "General");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div", 4)(6, "div", 7)(7, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "Post-process");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "app-icon-dropdown")(10, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11, "When enabled, the post processing command(s) will be executed.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](13, "app-input-dropdown", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "div", 4)(15, "div", 7)(16, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17, "Individual");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "app-icon-dropdown")(19, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](20, "When enabled, the post processing will be executed after each subtitle download for a video.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](22, "If disabled, the post processing will only be executed when all wanted subtitles are downloaded for a video.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](24, "app-input-dropdown", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "div", 4)(26, "div", 7)(27, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](28, "UTF-8 encoding");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "app-icon-dropdown")(30, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](31, "When enabled, the post processing command(s) and argument(s) will be encoded in UTF-8.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](32, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](33, "This means that the post processing script will need to decode the argument(s) from UTF-8.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](34, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](35, "app-input-dropdown", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](36, "div", 4)(37, "div", 5)(38, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](39, "Show");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](40, "div", 4)(41, "div", 7)(42, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](43, "Post-process command");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](44, "app-icon-dropdown")(45, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](46, "The command to run after downloading a subtitle for a show.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](47, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](48, "app-input-file-browser", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](49, "div", 4)(50, "div", 7)(51, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](52, "Post-process argument(s)");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](53, "app-icon-dropdown")(54, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](55, "The argument(s) (separated by |) to pass to the command above after downloading a subtitle for a show.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](56, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](57, "app-input-text", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](58, "div", 4)(59, "div", 5)(60, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](61, "Movie");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](62, "div", 4)(63, "div", 7)(64, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](65, "Post-process command");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](66, "app-icon-dropdown")(67, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](68, "The command to run after downloading a subtitle for a movie.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](69, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](70, "app-input-file-browser", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](71, "div", 4)(72, "div", 7)(73, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](74, "Post-process argument(s)");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](75, "app-icon-dropdown")(76, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](77, "The argument(s) (separated by |) to pass to the command above after downloading a subtitle for a movie.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](78, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](79, "app-input-text", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](80, "div", 23)(81, "div", 24)(82, "p-button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("onClick", function SettingsPostprocessingComponent_form_2_Template_p_button_onClick_82_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.save());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx_r0.settingsForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("options", ctx_r0.enabledOrDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("options", ctx_r0.enabledOrDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("options", ctx_r0.enabledOrDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("validationFeedback", ctx_r0.saveAttempt);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("validationFeedback", ctx_r0.saveAttempt);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("validationFeedback", ctx_r0.saveAttempt);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("validationFeedback", ctx_r0.saveAttempt);
  }
}
let SettingsPostprocessingComponent = /*#__PURE__*/(() => {
  class SettingsPostprocessingComponent {
    constructor(fb, settingsService, appSettingsService, messageService) {
      this.fb = fb;
      this.settingsService = settingsService;
      this.appSettingsService = appSettingsService;
      this.messageService = messageService;
      this.saveAttempt = false;
    }
    ngOnInit() {
      this.buildSelectItems();
      this.settingsService.getPostProcessSettings().subscribe({
        next: postProcessSettings => {
          this.buildForm(postProcessSettings);
        },
        error: () => this.messageService.showErrorMessage('Unable to get the postprocessing settings!')
      });
    }
    save() {
      this.saveAttempt = true;
      if (this.settingsForm.valid) {
        this.settingsService.updatePostProcessSettings(this.getPostProcessSettings()).subscribe({
          next: () => {
            this.messageService.showSuccessMessage('Postprocessing settings saved.');
            this.appSettingsService.reload(); // reload app settings
          },

          error: () => this.messageService.showErrorMessage('Unable to save the postprocessing settings!')
        });
      } else {
        _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_0__.FormUtils.scrollToFirstInvalidField(this.settingsForm);
      }
    }
    buildSelectItems() {
      // Enabled or disabled
      this.enabledOrDisabled = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_0__.FormUtils.enabledOrDisabledSelectItems();
    }
    buildForm(postProcessSettings) {
      this.settingsForm = this.fb.group({
        postProcess: [postProcessSettings.postProcess, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
        postProcessIndividual: [postProcessSettings.postProcessIndividual, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
        postProcessUtf8Encoding: [postProcessSettings.postProcessUtf8Encoding, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
        showPostProcessCmd: [postProcessSettings.showPostProcessCmd, []],
        showPostProcessArgs: [postProcessSettings.showPostProcessArgs, []],
        moviePostProcessCmd: [postProcessSettings.moviePostProcessCmd, []],
        moviePostProcessArgs: [postProcessSettings.moviePostProcessArgs, []]
      });
    }
    getPostProcessSettings() {
      const settings = new _shared_models_settings__WEBPACK_IMPORTED_MODULE_1__.PostProcessSettings();
      settings.postProcess = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_0__.FormUtils.getFormControlValue(this.settingsForm, 'postProcess');
      settings.postProcessIndividual = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_0__.FormUtils.getFormControlValue(this.settingsForm, 'postProcessIndividual');
      settings.postProcessUtf8Encoding = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_0__.FormUtils.getFormControlValue(this.settingsForm, 'postProcessUtf8Encoding');
      settings.showPostProcessCmd = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_0__.FormUtils.getFormControlValue(this.settingsForm, 'showPostProcessCmd');
      settings.showPostProcessArgs = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_0__.FormUtils.getFormControlValue(this.settingsForm, 'showPostProcessArgs');
      settings.moviePostProcessCmd = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_0__.FormUtils.getFormControlValue(this.settingsForm, 'moviePostProcessCmd');
      settings.moviePostProcessArgs = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_0__.FormUtils.getFormControlValue(this.settingsForm, 'moviePostProcessArgs');
      return settings;
    }
  }
  SettingsPostprocessingComponent.ɵfac = function SettingsPostprocessingComponent_Factory(t) {
    return new (t || SettingsPostprocessingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_core_services_api_settings_service__WEBPACK_IMPORTED_MODULE_2__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_app_settings_service__WEBPACK_IMPORTED_MODULE_3__.AppSettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_core_services_message_service__WEBPACK_IMPORTED_MODULE_4__.MessageService));
  };
  SettingsPostprocessingComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
    type: SettingsPostprocessingComponent,
    selectors: [["app-settings-postprocessing"]],
    decls: 3,
    vars: 1,
    consts: [[1, "container-lg"], ["header", "Postprocessing settings"], ["class", "form", 3, "formGroup", 4, "ngIf"], [1, "form", 3, "formGroup"], [1, "row", "form-row"], [1, "col-12"], [1, "p-tag", "p-tag-rounded", "p-tag-small"], [1, "col-12", "col-sm-12", "col-md-4", "col-lg-4", "form-row-label"], ["for", "postProcess", 1, "label"], [1, "col-12", "col-sm-12", "col-md-8", "col-lg-8"], ["formControlName", "postProcess", 3, "options"], ["for", "postProcessIndividual", 1, "label"], ["formControlName", "postProcessIndividual", 3, "options"], ["for", "postProcessUtf8Encoding", 1, "label"], ["formControlName", "postProcessUtf8Encoding", 3, "options"], ["for", "showPostProcessCmd", 1, "label"], ["formControlName", "showPostProcessCmd", 3, "validationFeedback"], ["for", "showPostProcessArgs", 1, "label"], ["formControlName", "showPostProcessArgs", 3, "validationFeedback"], ["for", "moviePostProcessCmd", 1, "label"], ["formControlName", "moviePostProcessCmd", 3, "validationFeedback"], ["for", "moviePostProcessArgs", 1, "label"], ["formControlName", "moviePostProcessArgs", 3, "validationFeedback"], [1, "row", "button-row"], [1, "col-12", "col-sm-12", "col-md-12", "col-lg-10"], ["label", "Save", 3, "onClick"]],
    template: function SettingsPostprocessingComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0)(1, "p-panel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, SettingsPostprocessingComponent_form_2_Template, 83, 8, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.settingsForm);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName, primeng_panel__WEBPACK_IMPORTED_MODULE_12__.Panel, primeng_button__WEBPACK_IMPORTED_MODULE_13__.Button, _shared_components_icon_dropdown_icon_dropdown_component__WEBPACK_IMPORTED_MODULE_5__.IconDropdownComponent, _shared_components_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_6__.InputTextComponent, _shared_components_input_dropdown_input_dropdown_component__WEBPACK_IMPORTED_MODULE_7__.InputDropdownComponent, _shared_components_input_file_browser_input_file_browser_component__WEBPACK_IMPORTED_MODULE_8__.InputFileBrowserComponent],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
  return SettingsPostprocessingComponent;
})();

/***/ }),

/***/ 3590:
/*!*************************************************************!*\
  !*** ./src/app/modules/settings/settings-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigRoutingModule": () => (/* binding */ ConfigRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _general_settings_general_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./general/settings-general.component */ 1824);
/* harmony import */ var _library_settings_library_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./library/settings-library.component */ 7902);
/* harmony import */ var _logging_settings_logging_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logging/settings-logging.component */ 7000);
/* harmony import */ var _namemapping_settings_namemapping_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./namemapping/settings-namemapping.component */ 9997);
/* harmony import */ var _notification_settings_notification_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notification/settings-notification.component */ 3048);
/* harmony import */ var _postprocessing_settings_postprocessing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./postprocessing/settings-postprocessing.component */ 9751);
/* harmony import */ var _skipmapping_settings_skipmapping_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./skipmapping/settings-skipmapping.component */ 4899);
/* harmony import */ var _subliminal_settings_subliminal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./subliminal/settings-subliminal.component */ 4108);
/* harmony import */ var _webserver_settings_webserver_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./webserver/settings-webserver.component */ 9853);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);












const routes = [{
  path: '',
  redirectTo: 'general',
  pathMatch: 'full'
}, {
  path: 'general',
  component: _general_settings_general_component__WEBPACK_IMPORTED_MODULE_0__.SettingsGeneralComponent
}, {
  path: 'library',
  component: _library_settings_library_component__WEBPACK_IMPORTED_MODULE_1__.SettingsLibraryComponent
}, {
  path: 'logging',
  component: _logging_settings_logging_component__WEBPACK_IMPORTED_MODULE_2__.SettingsLoggingComponent
}, {
  path: 'webserver',
  component: _webserver_settings_webserver_component__WEBPACK_IMPORTED_MODULE_8__.SettingsWebserverComponent
}, {
  path: 'subliminal',
  component: _subliminal_settings_subliminal_component__WEBPACK_IMPORTED_MODULE_7__.SettingsSubliminalComponent
}, {
  path: 'namemapping',
  component: _namemapping_settings_namemapping_component__WEBPACK_IMPORTED_MODULE_3__.SettingsNamemappingComponent
}, {
  path: 'skipmapping',
  component: _skipmapping_settings_skipmapping_component__WEBPACK_IMPORTED_MODULE_6__.SettingsSkipmappingComponent
}, {
  path: 'notification',
  component: _notification_settings_notification_component__WEBPACK_IMPORTED_MODULE_4__.SettingsNotificationComponent
}, {
  path: 'postprocessing',
  component: _postprocessing_settings_postprocessing_component__WEBPACK_IMPORTED_MODULE_5__.SettingsPostprocessingComponent
}, {
  path: '**',
  redirectTo: 'general'
}];
let ConfigRoutingModule = /*#__PURE__*/(() => {
  class ConfigRoutingModule {}
  ConfigRoutingModule.ɵfac = function ConfigRoutingModule_Factory(t) {
    return new (t || ConfigRoutingModule)();
  };
  ConfigRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
    type: ConfigRoutingModule
  });
  ConfigRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule]
  });
  return ConfigRoutingModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](ConfigRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule]
  });
})();

/***/ }),

/***/ 3402:
/*!*****************************************************!*\
  !*** ./src/app/modules/settings/settings.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsModule": () => (/* binding */ SettingsModule)
/* harmony export */ });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 4466);
/* harmony import */ var _general_settings_general_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./general/settings-general.component */ 1824);
/* harmony import */ var _logging_settings_logging_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logging/settings-logging.component */ 7000);
/* harmony import */ var _namemapping_settings_namemapping_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./namemapping/settings-namemapping.component */ 9997);
/* harmony import */ var _notification_settings_notification_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notification/settings-notification.component */ 3048);
/* harmony import */ var _postprocessing_settings_postprocessing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./postprocessing/settings-postprocessing.component */ 9751);
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings-routing.module */ 3590);
/* harmony import */ var _skipmapping_settings_skipmapping_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./skipmapping/settings-skipmapping.component */ 4899);
/* harmony import */ var _subliminal_settings_subliminal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./subliminal/settings-subliminal.component */ 4108);
/* harmony import */ var _webserver_settings_webserver_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./webserver/settings-webserver.component */ 9853);
/* harmony import */ var _library_settings_library_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./library/settings-library.component */ 7902);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2560);












let SettingsModule = /*#__PURE__*/(() => {
  class SettingsModule {}
  SettingsModule.ɵfac = function SettingsModule_Factory(t) {
    return new (t || SettingsModule)();
  };
  SettingsModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({
    type: SettingsModule
  });
  SettingsModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({
    imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _settings_routing_module__WEBPACK_IMPORTED_MODULE_6__.ConfigRoutingModule]
  });
  return SettingsModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](SettingsModule, {
    declarations: [_general_settings_general_component__WEBPACK_IMPORTED_MODULE_1__.SettingsGeneralComponent, _logging_settings_logging_component__WEBPACK_IMPORTED_MODULE_2__.SettingsLoggingComponent, _webserver_settings_webserver_component__WEBPACK_IMPORTED_MODULE_9__.SettingsWebserverComponent, _subliminal_settings_subliminal_component__WEBPACK_IMPORTED_MODULE_8__.SettingsSubliminalComponent, _namemapping_settings_namemapping_component__WEBPACK_IMPORTED_MODULE_3__.SettingsNamemappingComponent, _skipmapping_settings_skipmapping_component__WEBPACK_IMPORTED_MODULE_7__.SettingsSkipmappingComponent, _notification_settings_notification_component__WEBPACK_IMPORTED_MODULE_4__.SettingsNotificationComponent, _postprocessing_settings_postprocessing_component__WEBPACK_IMPORTED_MODULE_5__.SettingsPostprocessingComponent, _library_settings_library_component__WEBPACK_IMPORTED_MODULE_10__.SettingsLibraryComponent],
    imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _settings_routing_module__WEBPACK_IMPORTED_MODULE_6__.ConfigRoutingModule]
  });
})();

/***/ }),

/***/ 4899:
/*!********************************************************************************!*\
  !*** ./src/app/modules/settings/skipmapping/settings-skipmapping.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsSkipmappingComponent": () => (/* binding */ SettingsSkipmappingComponent)
/* harmony export */ });
/* harmony import */ var _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/components/forms/form-utils */ 2571);
/* harmony import */ var _shared_models_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/models/settings */ 5868);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _core_services_api_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/api/settings.service */ 4873);
/* harmony import */ var _app_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../app-settings.service */ 1205);
/* harmony import */ var _core_services_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/services/message.service */ 1245);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/panel */ 4266);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var _shared_components_icon_dropdown_icon_dropdown_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/icon-dropdown/icon-dropdown.component */ 1738);
/* harmony import */ var _shared_components_input_multi_text_input_multi_text_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/input/multi-text/input-multi-text.component */ 5125);












function SettingsSkipmappingComponent_form_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "form", 3)(1, "div", 4)(2, "div", 5)(3, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Show");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 4)(6, "div", 7)(7, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "Skip show mapping");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "app-icon-dropdown")(10, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "The mapping to skip a show.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "Examples:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "Serie Name = 00 (this will skip the show 'Serie Name' completely");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "Another Serie name = 1,5,6 (this will skip the show 'Another Serie Name' season 1, 5 and 6");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, "Show Name = 0,6,7 (this will skip the show 'Show Name' season 0 (specials), 6 and 7.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, "00 is different then 0, 00 skips a show, 0 skips specials (season 0)");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](23, "app-input-multi-text", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "div", 4)(25, "div", 5)(26, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, "Movie");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "div", 4)(29, "div", 7)(30, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31, "Skip movie mapping");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "app-icon-dropdown")(33, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34, "The mapping to skip a movie.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](36, "Examples:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](38, "Movie title (year) = 00");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](40, "Movie title 2 (year) = 00");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](42, "app-input-multi-text", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "div", 13)(44, "div", 14)(45, "p-button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onClick", function SettingsSkipmappingComponent_form_2_Template_p_button_onClick_45_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.save());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx_r0.settingsForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("validationFeedback", ctx_r0.saveAttempt);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("validationFeedback", ctx_r0.saveAttempt);
  }
}
let SettingsSkipmappingComponent = /*#__PURE__*/(() => {
  class SettingsSkipmappingComponent {
    constructor(fb, settingsService, appSettingsService, messageService) {
      this.fb = fb;
      this.settingsService = settingsService;
      this.appSettingsService = appSettingsService;
      this.messageService = messageService;
      this.saveAttempt = false;
    }
    ngOnInit() {
      this.settingsService.getSkipMappingSettings().subscribe({
        next: skipMappingSettings => {
          this.buildForm(skipMappingSettings);
        },
        error: () => this.messageService.showErrorMessage('Unable to get the skipmapping settings!')
      });
    }
    save() {
      this.saveAttempt = true;
      if (this.settingsForm.valid) {
        this.settingsService.updateSkipMappingSettings(this.getSkipMappingSettings()).subscribe({
          next: () => {
            this.messageService.showSuccessMessage('Skipmapping settings saved.');
            this.appSettingsService.reload(); // reload app settings
          },

          error: () => this.messageService.showErrorMessage('Unable to save the skipmapping settings!')
        });
      } else {
        _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_0__.FormUtils.scrollToFirstInvalidField(this.settingsForm);
      }
    }
    buildForm(skipMappingSettings) {
      this.settingsForm = this.fb.group({
        skipShowMapping: [skipMappingSettings.skipShowMapping || [], []],
        skipMovieMapping: [skipMappingSettings.skipMovieMapping || [], []]
      });
    }
    getSkipMappingSettings() {
      const settings = new _shared_models_settings__WEBPACK_IMPORTED_MODULE_1__.SkipMappingSettings();
      settings.skipShowMapping = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_0__.FormUtils.getFormControlValue(this.settingsForm, 'skipShowMapping');
      settings.skipMovieMapping = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_0__.FormUtils.getFormControlValue(this.settingsForm, 'skipMovieMapping');
      return settings;
    }
  }
  SettingsSkipmappingComponent.ɵfac = function SettingsSkipmappingComponent_Factory(t) {
    return new (t || SettingsSkipmappingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_services_api_settings_service__WEBPACK_IMPORTED_MODULE_2__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_app_settings_service__WEBPACK_IMPORTED_MODULE_3__.AppSettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_services_message_service__WEBPACK_IMPORTED_MODULE_4__.MessageService));
  };
  SettingsSkipmappingComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: SettingsSkipmappingComponent,
    selectors: [["app-settings-skipmapping"]],
    decls: 3,
    vars: 1,
    consts: [[1, "container-lg"], ["header", "Skipmapping settings"], ["class", "form", 3, "formGroup", 4, "ngIf"], [1, "form", 3, "formGroup"], [1, "row", "form-row"], [1, "col-12"], [1, "p-tag", "p-tag-rounded", "p-tag-small"], [1, "col-12", "col-sm-12", "col-md-4", "col-lg-4", "form-row-label"], ["for", "skipShowMapping", 1, "label"], [1, "col-12", "col-sm-12", "col-md-8", "col-lg-8"], ["formControlName", "skipShowMapping", 3, "validationFeedback"], ["for", "skipMovieMapping", 1, "label"], ["formControlName", "skipMovieMapping", 3, "validationFeedback"], [1, "row", "button-row"], [1, "col-12", "col-sm-12", "col-md-12", "col-lg-10"], ["label", "Save", 3, "onClick"]],
    template: function SettingsSkipmappingComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "p-panel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, SettingsSkipmappingComponent_form_2_Template, 46, 3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.settingsForm);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, primeng_panel__WEBPACK_IMPORTED_MODULE_10__.Panel, primeng_button__WEBPACK_IMPORTED_MODULE_11__.Button, _shared_components_icon_dropdown_icon_dropdown_component__WEBPACK_IMPORTED_MODULE_5__.IconDropdownComponent, _shared_components_input_multi_text_input_multi_text_component__WEBPACK_IMPORTED_MODULE_6__.InputMultiTextComponent],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
  return SettingsSkipmappingComponent;
})();

/***/ }),

/***/ 4108:
/*!******************************************************************************!*\
  !*** ./src/app/modules/settings/subliminal/settings-subliminal.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsSubliminalComponent": () => (/* binding */ SettingsSubliminalComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _app_settings_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../app-settings.service */ 1205);
/* harmony import */ var _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/forms/form-utils */ 2571);
/* harmony import */ var _shared_models_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/models/settings */ 5868);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _core_services_api_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/api/settings.service */ 4873);
/* harmony import */ var _core_services_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/services/message.service */ 1245);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/message */ 3589);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/panel */ 4266);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var primeng_listbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/listbox */ 2210);
/* harmony import */ var _shared_components_icon_dropdown_icon_dropdown_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/icon-dropdown/icon-dropdown.component */ 1738);
/* harmony import */ var _shared_components_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/input/text/input-text.component */ 6015);
/* harmony import */ var _shared_components_input_switch_input_switch_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/input/switch/input-switch.component */ 9267);
/* harmony import */ var _shared_components_input_dropdown_input_dropdown_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/components/input/dropdown/input-dropdown.component */ 9772);


















function SettingsSubliminalComponent_form_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "form", 3)(1, "div", 4)(2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "p-message", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 4)(5, "div", 7)(6, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "General");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "div", 4)(9, "div", 9)(10, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11, "Show MinMatchScore");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "app-icon-dropdown")(13, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14, "The items that must match before a show subtitle is downloaded.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](16, "app-input-switch", 12)(17, "app-input-switch", 13)(18, "app-input-switch", 14)(19, "app-input-switch", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "div", 4)(21, "div", 9)(22, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](23, "Movie MinMatchScore");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "app-icon-dropdown")(25, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](26, "The items that must match before a movie subtitle is downloaded.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](27, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](28, "app-input-switch", 16)(29, "app-input-switch", 17)(30, "app-input-switch", 18)(31, "app-input-switch", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](32, "div", 4)(33, "div", 9)(34, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](35, "Providers");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](36, "app-icon-dropdown")(37, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](38, "The subliminal providers that must be used for searching and downloading subtitles.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](39, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](40, "Multiple providers can be selected (use ctrl key).");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](41, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](42, "p-listbox", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](43, "div", 4)(44, "div", 9)(45, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](46, "Subtitles in utf-8 encoding");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](47, "app-icon-dropdown")(48, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](49, "When enabled, all subtitles will be saved in utf-8 encoding.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](50, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](51, "When disabled, the original encoding of the subtitle is used.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](52, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](53, "app-input-dropdown", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](54, "div", 4)(55, "div", 9)(56, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](57, "Refine video");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](58, "app-icon-dropdown")(59, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](60, "When enabled, subliminal will enable 'refiners' to enrich the video meta-data before searching for subtitles.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](61, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](62, "This can result in a higher score matching and thus a higher automatic subtitle download.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](63, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](64, "app-input-dropdown", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](65, "div", 4)(66, "div", 9)(67, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](68, "Refine video manually");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](69, "app-icon-dropdown")(70, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](71, "When enabled, you will be able to edit the video meta-data before searching for subtitles.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](72, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](73, "An edit icon will appear next to the show/movie name to edit the show/movie details.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](74, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](75, "This only affects a manual search temporarily until the next disk scan.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](76, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](77, "app-input-dropdown", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](78, "div", 4)(79, "div", 9)(80, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](81, "Prefer hearing impaired subs");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](82, "app-icon-dropdown")(83, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](84, "When enabled, 'hearing impaired' subtitles will be preferred over 'regular' subtitles.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](85, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](86, "app-input-dropdown", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](87, "div", 4)(88, "div", 7)(89, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](90, "Anti-captcha");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](91, "div", 4)(92, "div", 9)(93, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](94, "Anti-captcha service");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](95, "app-icon-dropdown")(96, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](97, "The anti-captcha service.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](98, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](99, "app-input-dropdown", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](100, "div", 4)(101, "div", 9)(102, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](103, "Anti-captcha client key");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](104, "app-icon-dropdown")(105, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](106, "The anti-captcha client key.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](107, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](108, "anti-captcha.com: account_key");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](109, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](110, "deathbycaptcha.com: username:password");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](111, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](112, "app-input-text", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](113, "div", 4)(114, "div", 7)(115, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](116, "Addic7ed provider");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](117, "div", 4)(118, "div", 9)(119, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](120, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](121, "app-icon-dropdown")(122, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](123, "The username for your Addic7ed account.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](124, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](125, "app-input-text", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](126, "div", 4)(127, "div", 9)(128, "label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](129, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](130, "app-icon-dropdown")(131, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](132, "The password for your Addic7ed account.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](133, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](134, "app-input-text", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](135, "div", 4)(136, "div", 9)(137, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](138, "UserId");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](139, "app-icon-dropdown")(140, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](141, "The user id for your Addic7ed account.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](142, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](143, " It can be found in the url when you visit the details of your user in the profile page of your account.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](144, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](145, "app-input-text", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](146, "div", 4)(147, "div", 7)(148, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](149, "OpenSubtitles provider");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](150, "div", 4)(151, "div", 9)(152, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](153, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](154, "app-icon-dropdown")(155, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](156, "The username for your OpenSubtitles account.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](157, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](158, "app-input-text", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](159, "div", 4)(160, "div", 9)(161, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](162, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](163, "app-icon-dropdown")(164, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](165, "The password for your OpenSubtitles account.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](166, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](167, "app-input-text", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](168, "div", 4)(169, "div", 7)(170, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](171, "Legendas.TV provider");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](172, "div", 4)(173, "div", 9)(174, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](175, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](176, "app-icon-dropdown")(177, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](178, "The username for your Legendas.TV account.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](179, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](180, "app-input-text", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](181, "div", 4)(182, "div", 9)(183, "label", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](184, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](185, "app-icon-dropdown")(186, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](187, "The password for your Legendas.TV account.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](188, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](189, "app-input-text", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](190, "div", 49)(191, "div", 50)(192, "p-button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("onClick", function SettingsSubliminalComponent_form_2_Template_p_button_onClick_192_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.save());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx_r0.settingsForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("options", ctx_r0.subliminalProviders)("multiple", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("options", ctx_r0.enabledOrDisabled)("validationFeedback", ctx_r0.saveAttempt);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("options", ctx_r0.enabledOrDisabled)("validationFeedback", ctx_r0.saveAttempt);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("options", ctx_r0.enabledOrDisabled)("validationFeedback", ctx_r0.saveAttempt);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("options", ctx_r0.enabledOrDisabled)("validationFeedback", ctx_r0.saveAttempt);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("options", ctx_r0.antiCaptchaProviders)("validationFeedback", ctx_r0.saveAttempt);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("validationFeedback", ctx_r0.saveAttempt);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("validationFeedback", ctx_r0.saveAttempt);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("validationFeedback", ctx_r0.saveAttempt);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("validationFeedback", ctx_r0.saveAttempt);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("validationFeedback", ctx_r0.saveAttempt);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("validationFeedback", ctx_r0.saveAttempt);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("validationFeedback", ctx_r0.saveAttempt);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("validationFeedback", ctx_r0.saveAttempt);
  }
}
let SettingsSubliminalComponent = /*#__PURE__*/(() => {
  class SettingsSubliminalComponent {
    constructor(fb, settingsService, appSettingsService, messageService) {
      this.fb = fb;
      this.settingsService = settingsService;
      this.appSettingsService = appSettingsService;
      this.messageService = messageService;
      this.saveAttempt = false;
    }
    ngOnInit() {
      this.buildSelectItems();
      this.settingsService.getSubliminalSettings().subscribe({
        next: subliminalSettings => {
          this.buildForm(subliminalSettings);
        },
        error: () => this.messageService.showErrorMessage('Unable to get the subliminal settings!')
      });
    }
    save() {
      this.saveAttempt = true;
      if (this.settingsForm.valid) {
        this.settingsService.updateSubliminalSettings(this.getSubliminalSettings()).subscribe({
          next: () => {
            this.messageService.showSuccessMessage('Subliminal settings saved.');
            this.appSettingsService.reload(); // reload app settings
          },

          error: () => this.messageService.showErrorMessage('Unable to save the subliminal settings!')
        });
      } else {
        _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_1__.FormUtils.scrollToFirstInvalidField(this.settingsForm);
      }
    }
    buildSelectItems() {
      // Enabled or disabled
      this.enabledOrDisabled = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_1__.FormUtils.enabledOrDisabledSelectItems();
      // Subliminal providers
      this.subliminalProviders = [];
      _app_settings_service__WEBPACK_IMPORTED_MODULE_0__.appSettings.subliminalProviders.forEach(provider => this.subliminalProviders.push({
        label: provider,
        value: provider
      }));
      // Anti-Captcha providers
      this.antiCaptchaProviders = [];
      this.antiCaptchaProviders.push({
        label: 'Disabled',
        value: ''
      });
      _app_settings_service__WEBPACK_IMPORTED_MODULE_0__.appSettings.antiCaptchaProviders.forEach(provider => this.antiCaptchaProviders.push({
        label: provider.source,
        value: provider.class
      }));
    }
    buildForm(subliminalSettings) {
      this.settingsForm = this.fb.group({
        showMatchSource: [subliminalSettings.showMatchSource, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
        showMatchQuality: [subliminalSettings.showMatchQuality, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
        showMatchCodec: [subliminalSettings.showMatchCodec, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
        showMatchReleaseGroup: [subliminalSettings.showMatchReleaseGroup, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
        movieMatchSource: [subliminalSettings.movieMatchSource, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
        movieMatchQuality: [subliminalSettings.movieMatchQuality, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
        movieMatchCodec: [subliminalSettings.movieMatchCodec, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
        movieMatchReleaseGroup: [subliminalSettings.movieMatchReleaseGroup, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
        subliminalProviders: [subliminalSettings.subliminalProviders || [], []],
        subtitleUtf8Encoding: [subliminalSettings.subtitleUtf8Encoding, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
        refineVideo: [subliminalSettings.refineVideo, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
        manualRefineVideo: [subliminalSettings.manualRefineVideo, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
        preferHearingImpaired: [subliminalSettings.preferHearingImpaired, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
        antiCaptchaClass: [subliminalSettings.antiCaptchaClass, []],
        antiCaptchaClientKey: [subliminalSettings.antiCaptchaClientKey, []],
        addic7edUserName: [subliminalSettings.addic7edUserName, []],
        addic7edPassword: [subliminalSettings.addic7edPassword, []],
        addic7edUserId: [subliminalSettings.addic7edUserId, []],
        opensubtitlesUserName: [subliminalSettings.opensubtitlesUserName, []],
        opensubtitlesPassword: [subliminalSettings.opensubtitlesPassword, []],
        legendastvUserName: [subliminalSettings.legendastvUserName, []],
        legendastvPassword: [subliminalSettings.legendastvPassword, []]
      });
    }
    getSubliminalSettings() {
      const settings = new _shared_models_settings__WEBPACK_IMPORTED_MODULE_2__.SubliminalSettings();
      settings.showMatchSource = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_1__.FormUtils.getFormControlValue(this.settingsForm, 'showMatchSource');
      settings.showMatchQuality = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_1__.FormUtils.getFormControlValue(this.settingsForm, 'showMatchQuality');
      settings.showMatchCodec = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_1__.FormUtils.getFormControlValue(this.settingsForm, 'showMatchCodec');
      settings.showMatchReleaseGroup = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_1__.FormUtils.getFormControlValue(this.settingsForm, 'showMatchReleaseGroup');
      settings.movieMatchSource = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_1__.FormUtils.getFormControlValue(this.settingsForm, 'movieMatchSource');
      settings.movieMatchQuality = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_1__.FormUtils.getFormControlValue(this.settingsForm, 'movieMatchQuality');
      settings.movieMatchCodec = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_1__.FormUtils.getFormControlValue(this.settingsForm, 'movieMatchCodec');
      settings.movieMatchReleaseGroup = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_1__.FormUtils.getFormControlValue(this.settingsForm, 'movieMatchReleaseGroup');
      settings.subliminalProviders = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_1__.FormUtils.getFormControlValue(this.settingsForm, 'subliminalProviders');
      settings.subtitleUtf8Encoding = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_1__.FormUtils.getFormControlValue(this.settingsForm, 'subtitleUtf8Encoding');
      settings.refineVideo = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_1__.FormUtils.getFormControlValue(this.settingsForm, 'refineVideo');
      settings.manualRefineVideo = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_1__.FormUtils.getFormControlValue(this.settingsForm, 'manualRefineVideo');
      settings.preferHearingImpaired = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_1__.FormUtils.getFormControlValue(this.settingsForm, 'preferHearingImpaired');
      settings.antiCaptchaClass = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_1__.FormUtils.getFormControlValue(this.settingsForm, 'antiCaptchaClass');
      settings.antiCaptchaClientKey = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_1__.FormUtils.getFormControlValue(this.settingsForm, 'antiCaptchaClientKey');
      settings.addic7edUserName = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_1__.FormUtils.getFormControlValue(this.settingsForm, 'addic7edUserName');
      settings.addic7edPassword = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_1__.FormUtils.getFormControlValue(this.settingsForm, 'addic7edPassword');
      settings.addic7edUserId = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_1__.FormUtils.getFormControlValue(this.settingsForm, 'addic7edUserId');
      settings.opensubtitlesUserName = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_1__.FormUtils.getFormControlValue(this.settingsForm, 'opensubtitlesUserName');
      settings.opensubtitlesPassword = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_1__.FormUtils.getFormControlValue(this.settingsForm, 'opensubtitlesPassword');
      settings.legendastvUserName = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_1__.FormUtils.getFormControlValue(this.settingsForm, 'legendastvUserName');
      settings.legendastvPassword = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_1__.FormUtils.getFormControlValue(this.settingsForm, 'legendastvPassword');
      return settings;
    }
  }
  SettingsSubliminalComponent.ɵfac = function SettingsSubliminalComponent_Factory(t) {
    return new (t || SettingsSubliminalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_core_services_api_settings_service__WEBPACK_IMPORTED_MODULE_3__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_app_settings_service__WEBPACK_IMPORTED_MODULE_0__.AppSettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_core_services_message_service__WEBPACK_IMPORTED_MODULE_4__.MessageService));
  };
  SettingsSubliminalComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
    type: SettingsSubliminalComponent,
    selectors: [["app-settings-subliminal"]],
    decls: 3,
    vars: 1,
    consts: [[1, "container-lg"], ["header", "Subliminal settings"], ["class", "form", 3, "formGroup", 4, "ngIf"], [1, "form", 3, "formGroup"], [1, "row", "form-row"], [1, "col-12", "form-row-notification"], ["severity", "warn", "text", "Passwords and keys are stored in plain text!", "styleClass", "w-100"], [1, "col-12"], [1, "p-tag", "p-tag-rounded", "p-tag-small"], [1, "col-12", "col-sm-12", "col-md-4", "col-lg-4", "form-row-label"], [1, "label"], [1, "col-12", "col-sm-12", "col-md-8", "col-lg-8", "form-row-switches"], ["formControlName", "showMatchSource", "label", "Source"], ["formControlName", "showMatchQuality", "label", "Quality"], ["formControlName", "showMatchCodec", "label", "Codec"], ["formControlName", "showMatchReleaseGroup", "label", "Group"], ["formControlName", "movieMatchSource", "label", "Source"], ["formControlName", "movieMatchQuality", "label", "Quality"], ["formControlName", "movieMatchCodec", "label", "Codec"], ["formControlName", "movieMatchReleaseGroup", "label", "Group"], [1, "col-12", "col-sm-12", "col-md-8", "col-lg-8", "form-row-label"], ["formControlName", "subliminalProviders", 3, "options", "multiple"], ["for", "subtitleUtf8Encoding", 1, "label"], [1, "col-12", "col-sm-12", "col-md-8", "col-lg-8"], ["formControlName", "subtitleUtf8Encoding", 3, "options", "validationFeedback"], ["for", "refineVideo", 1, "label"], ["formControlName", "refineVideo", 3, "options", "validationFeedback"], ["for", "manualRefineVideo", 1, "label"], ["formControlName", "manualRefineVideo", 3, "options", "validationFeedback"], ["for", "preferHearingImpaired", 1, "label"], ["formControlName", "preferHearingImpaired", 3, "options", "validationFeedback"], ["for", "antiCaptchaClass", 1, "label"], ["formControlName", "antiCaptchaClass", 3, "options", "validationFeedback"], ["for", "antiCaptchaClientKey", 1, "label"], ["formControlName", "antiCaptchaClientKey", 3, "validationFeedback"], ["for", "addic7edUserName", 1, "label"], ["formControlName", "addic7edUserName", 3, "validationFeedback"], ["for", "addic7edPassword", 1, "label"], ["formControlName", "addic7edPassword", "type", "password", 3, "validationFeedback"], ["for", "addic7edUserId", 1, "label"], ["formControlName", "addic7edUserId", 3, "validationFeedback"], ["for", "opensubtitlesUserName", 1, "label"], ["formControlName", "opensubtitlesUserName", 3, "validationFeedback"], ["for", "opensubtitlesPassword", 1, "label"], ["formControlName", "opensubtitlesPassword", "type", "password", 3, "validationFeedback"], ["for", "legendastvUserName", 1, "label"], ["formControlName", "legendastvUserName", 3, "validationFeedback"], ["for", "legendastvPassword", 1, "label"], ["formControlName", "legendastvPassword", "type", "password", 3, "validationFeedback"], [1, "row", "button-row"], [1, "col-12", "col-sm-12", "col-md-12", "col-lg-10"], ["label", "Save", 3, "onClick"]],
    template: function SettingsSubliminalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0)(1, "p-panel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, SettingsSubliminalComponent_form_2_Template, 193, 21, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.settingsForm);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName, primeng_message__WEBPACK_IMPORTED_MODULE_12__.UIMessage, primeng_panel__WEBPACK_IMPORTED_MODULE_13__.Panel, primeng_button__WEBPACK_IMPORTED_MODULE_14__.Button, primeng_listbox__WEBPACK_IMPORTED_MODULE_15__.Listbox, _shared_components_icon_dropdown_icon_dropdown_component__WEBPACK_IMPORTED_MODULE_5__.IconDropdownComponent, _shared_components_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_6__.InputTextComponent, _shared_components_input_switch_input_switch_component__WEBPACK_IMPORTED_MODULE_7__.InputSwitchComponent, _shared_components_input_dropdown_input_dropdown_component__WEBPACK_IMPORTED_MODULE_8__.InputDropdownComponent],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
  return SettingsSubliminalComponent;
})();

/***/ }),

/***/ 9853:
/*!****************************************************************************!*\
  !*** ./src/app/modules/settings/webserver/settings-webserver.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsWebserverComponent": () => (/* binding */ SettingsWebserverComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/components/forms/form-utils */ 2571);
/* harmony import */ var _shared_components_forms_form_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/forms/form-validators */ 3383);
/* harmony import */ var _shared_models_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/models/settings */ 5868);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _core_services_api_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/api/settings.service */ 4873);
/* harmony import */ var _app_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../app-settings.service */ 1205);
/* harmony import */ var _core_services_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/services/message.service */ 1245);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/message */ 3589);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/panel */ 4266);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var _shared_components_icon_dropdown_icon_dropdown_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/icon-dropdown/icon-dropdown.component */ 1738);
/* harmony import */ var _shared_components_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/input/text/input-text.component */ 6015);
/* harmony import */ var _shared_components_input_number_input_number_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/components/input/number/input-number.component */ 8424);
/* harmony import */ var _shared_components_input_dropdown_input_dropdown_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/components/input/dropdown/input-dropdown.component */ 9772);

















function SettingsWebserverComponent_form_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "form", 3)(1, "div", 4)(2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "p-message", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 4)(5, "div", 7)(6, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, "IP address");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "app-icon-dropdown")(9, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10, "The webserver IP address.");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12, "To allow hosts to connect to any IP address, use '0.0.0.0'.");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](14, "app-input-text", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "div", 4)(16, "div", 7)(17, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](18, "Port");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "app-icon-dropdown")(20, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](21, "The webserver port.");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](23, "app-input-number", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "div", 4)(25, "div", 7)(26, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](27, "Webroot");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "app-icon-dropdown")(29, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](30, "The webserver webroot for reverse proxying.");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](31, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](32, "Example: to proxy it to 'http://localhost/autosubliminal/' the webroot needs to be '/autosubliminal'.");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](33, "div", 9)(34, "app-input-text", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("keyup", function SettingsWebserverComponent_form_2_Template_app_input_text_keyup_34_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.formatWebRoot());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](35, "div", 4)(36, "div", 7)(37, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](38, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](39, "app-icon-dropdown")(40, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](41, "The username for the webserver authentication.");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](42, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](43, "If a username and password are set, the webserver requires authentication.");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](44, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](45, "Otherwise no authentication is set or required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](46, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](47, "app-input-text", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](48, "div", 4)(49, "div", 7)(50, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](51, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](52, "app-icon-dropdown")(53, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](54, "The password for the webserver authentication.");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](55, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](56, "If a username and password are set, the webserver requires authentication.");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](57, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](58, "Otherwise no authentication is set or required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](59, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](60, "app-input-text", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](61, "div", 4)(62, "div", 7)(63, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](64, "Launch browser");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](65, "app-icon-dropdown")(66, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](67, "When enabled, the browser will start every time Auto-Subliminal starts.");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](68, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](69, "app-input-dropdown", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](70, "div", 21)(71, "div", 22)(72, "p-button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("onClick", function SettingsWebserverComponent_form_2_Template_p_button_onClick_72_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r2);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r3.save());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx_r0.settingsForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("dropSpecialCharacters", false)("validationFeedback", ctx_r0.saveAttempt);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("showButtons", false)("validationFeedback", ctx_r0.saveAttempt);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("validationFeedback", ctx_r0.saveAttempt);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("validationFeedback", ctx_r0.saveAttempt);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("validationFeedback", ctx_r0.saveAttempt);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("options", ctx_r0.enabledOrDisabled);
  }
}
let SettingsWebserverComponent = /*#__PURE__*/(() => {
  class SettingsWebserverComponent {
    constructor(fb, settingsService, appSettingsService, messageService) {
      this.fb = fb;
      this.settingsService = settingsService;
      this.appSettingsService = appSettingsService;
      this.messageService = messageService;
      this.saveAttempt = false;
    }
    ngOnInit() {
      this.buildSelectItems();
      this.settingsService.getWebServerSettings().subscribe({
        next: webServerSettings => {
          this.buildForm(webServerSettings);
        },
        error: () => this.messageService.showErrorMessage('Unable to get the webserver settings!')
      });
    }
    formatWebRoot() {
      let webRoot = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_0__.FormUtils.getFormControlValue(this.settingsForm, 'webRoot');
      if (webRoot) {
        if (!webRoot.startsWith('/')) {
          webRoot = `/${webRoot}`;
        }
        if (webRoot.endsWith('/')) {
          webRoot = webRoot.replace(new RegExp('/+$'), '');
        }
      }
      _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_0__.FormUtils.setFormControlValue(this.settingsForm, 'webRoot', webRoot);
    }
    save() {
      this.saveAttempt = true;
      if (this.settingsForm.valid) {
        this.settingsService.updateWebServerSettings(this.getWebServerSettings()).subscribe({
          next: () => {
            this.messageService.showSuccessMessage('Webserver settings saved.');
            this.appSettingsService.reload(); // reload app settings
          },

          error: () => this.messageService.showErrorMessage('Unable to save the webserver settings!')
        });
      } else {
        _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_0__.FormUtils.scrollToFirstInvalidField(this.settingsForm);
      }
    }
    buildSelectItems() {
      // Enabled or disabled
      this.enabledOrDisabled = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_0__.FormUtils.enabledOrDisabledSelectItems();
    }
    buildForm(webServerSettings) {
      this.settingsForm = this.fb.group({
        webServerIp: [webServerSettings.webServerIp, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _shared_components_forms_form_validators__WEBPACK_IMPORTED_MODULE_1__.FormValidators.notEmpty]],
        webServerPort: [webServerSettings.webServerPort, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _shared_components_forms_form_validators__WEBPACK_IMPORTED_MODULE_1__.FormValidators.notEmpty]],
        webRoot: [webServerSettings.webRoot, []],
        userName: [webServerSettings.userName, []],
        password: [webServerSettings.password, []],
        launchBrowser: [webServerSettings.launchBrowser, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]]
      });
    }
    getWebServerSettings() {
      const settings = new _shared_models_settings__WEBPACK_IMPORTED_MODULE_2__.WebServerSettings();
      settings.webServerIp = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_0__.FormUtils.getFormControlValue(this.settingsForm, 'webServerIp');
      settings.webServerPort = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_0__.FormUtils.getFormControlValue(this.settingsForm, 'webServerPort');
      settings.webRoot = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_0__.FormUtils.getFormControlValue(this.settingsForm, 'webRoot');
      settings.userName = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_0__.FormUtils.getFormControlValue(this.settingsForm, 'userName');
      settings.password = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_0__.FormUtils.getFormControlValue(this.settingsForm, 'password');
      settings.launchBrowser = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_0__.FormUtils.getFormControlValue(this.settingsForm, 'launchBrowser');
      return settings;
    }
  }
  SettingsWebserverComponent.ɵfac = function SettingsWebserverComponent_Factory(t) {
    return new (t || SettingsWebserverComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_11__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_core_services_api_settings_service__WEBPACK_IMPORTED_MODULE_3__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_app_settings_service__WEBPACK_IMPORTED_MODULE_4__.AppSettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_core_services_message_service__WEBPACK_IMPORTED_MODULE_5__.MessageService));
  };
  SettingsWebserverComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
    type: SettingsWebserverComponent,
    selectors: [["app-settings-webserver"]],
    decls: 3,
    vars: 1,
    consts: [[1, "container-lg"], ["header", "Webserver settings"], ["class", "form", 3, "formGroup", 4, "ngIf"], [1, "form", 3, "formGroup"], [1, "row", "form-row"], [1, "col-12", "form-row-notification"], ["severity", "warn", "text", "Changing webserver settings will result in no automatic reload! You'll need to change the url manually in order to reload correctly!", "styleClass", "w-100"], [1, "col-12", "col-sm-12", "col-md-4", "col-lg-4", "form-row-label"], ["for", "webServerIp", 1, "label"], [1, "col-12", "col-sm-12", "col-md-8", "col-lg-8"], ["formControlName", "webServerIp", "mask", "IP", 3, "dropSpecialCharacters", "validationFeedback"], ["for", "webServerPort", 1, "label"], ["formControlName", "webServerPort", 3, "showButtons", "validationFeedback"], ["for", "webRoot", 1, "label"], ["formControlName", "webRoot", 3, "validationFeedback", "keyup"], ["for", "userName", 1, "label"], ["formControlName", "userName", 3, "validationFeedback"], ["for", "password", 1, "label"], ["formControlName", "password", "type", "password", 3, "validationFeedback"], ["for", "launchBrowser", 1, "label"], ["formControlName", "launchBrowser", 3, "options"], [1, "row", "button-row"], [1, "col-12", "col-sm-12", "col-md-12", "col-lg-10"], ["label", "Save", 3, "onClick"]],
    template: function SettingsWebserverComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0)(1, "p-panel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, SettingsWebserverComponent_form_2_Template, 73, 9, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.settingsForm);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControlName, primeng_message__WEBPACK_IMPORTED_MODULE_13__.UIMessage, primeng_panel__WEBPACK_IMPORTED_MODULE_14__.Panel, primeng_button__WEBPACK_IMPORTED_MODULE_15__.Button, _shared_components_icon_dropdown_icon_dropdown_component__WEBPACK_IMPORTED_MODULE_6__.IconDropdownComponent, _shared_components_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_7__.InputTextComponent, _shared_components_input_number_input_number_component__WEBPACK_IMPORTED_MODULE_8__.InputNumberComponent, _shared_components_input_dropdown_input_dropdown_component__WEBPACK_IMPORTED_MODULE_9__.InputDropdownComponent],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
  return SettingsWebserverComponent;
})();

/***/ })

}]);
//# sourceMappingURL=402.7a46e2b927fc883f.js.map