"use strict";
(self["webpackChunkautosubliminal"] = self["webpackChunkautosubliminal"] || []).push([[840],{

/***/ 5840:
/*!***************************************************!*\
  !*** ./src/app/modules/library/library.routes.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _movie_detail_library_movie_detail_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./movie/detail/library-movie-detail.component */ 6335);
/* harmony import */ var _movie_overview_library_movie_overview_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./movie/overview/library-movie-overview.component */ 5197);
/* harmony import */ var _overview_library_overview_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./overview/library-overview.component */ 5375);
/* harmony import */ var _show_detail_library_show_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./show/detail/library-show-detail.component */ 6571);
/* harmony import */ var _show_overview_library_show_overview_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./show/overview/library-show-overview.component */ 7239);





const routes = [{
  path: '',
  redirectTo: 'overview',
  pathMatch: 'full'
}, {
  path: 'overview',
  component: _overview_library_overview_component__WEBPACK_IMPORTED_MODULE_2__.LibraryOverviewComponent
}, {
  path: 'show',
  children: [{
    path: 'overview',
    component: _show_overview_library_show_overview_component__WEBPACK_IMPORTED_MODULE_4__.LibraryShowOverviewComponent
  }, {
    path: 'detail/:tvdbId',
    component: _show_detail_library_show_detail_component__WEBPACK_IMPORTED_MODULE_3__.LibraryShowDetailComponent
  }]
}, {
  path: 'movie',
  children: [{
    path: 'overview',
    component: _movie_overview_library_movie_overview_component__WEBPACK_IMPORTED_MODULE_1__.LibraryMovieOverviewComponent
  }, {
    path: 'detail/:imdbId',
    component: _movie_detail_library_movie_detail_component__WEBPACK_IMPORTED_MODULE_0__.LibraryMovieDetailComponent
  }]
}, {
  path: '**',
  redirectTo: 'overview'
}];
// Use default export for simplified lazy loading (https://angular.io/guide/standalone-components#lazy-loading-and-default-exports)
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (routes);

/***/ }),

/***/ 6335:
/*!********************************************************************************!*\
  !*** ./src/app/modules/library/movie/detail/library-movie-detail.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LibraryMovieDetailComponent: () => (/* binding */ LibraryMovieDetailComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 839);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-lazyload-image */ 1935);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/api */ 8026);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/confirmdialog */ 4123);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/panel */ 6110);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/table */ 6192);
/* harmony import */ var _app_settings_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../app-settings.service */ 5751);
/* harmony import */ var _core_services_api_movie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/services/api/movie.service */ 9375);
/* harmony import */ var _core_services_api_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/services/api/settings.service */ 1826);
/* harmony import */ var _core_services_artwork_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/services/artwork.service */ 6570);
/* harmony import */ var _core_services_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/services/message.service */ 5476);
/* harmony import */ var _shared_components_message_message_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/message/message.component */ 6325);
/* harmony import */ var _shared_components_movie_settings_movie_settings_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/movie-settings/movie-settings.component */ 4068);
/* harmony import */ var _shared_components_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/components/progress-bar/progress-bar.component */ 2087);
/* harmony import */ var _shared_components_subtitle_sync_subtitle_sync_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/components/subtitle-sync/subtitle-sync.component */ 4679);
/* harmony import */ var _shared_models_filetype__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/models/filetype */ 2113);
/* harmony import */ var _shared_models_video__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/models/video */ 3468);
/* harmony import */ var _shared_utils_common_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/utils/common-utils */ 8846);
/* harmony import */ var _shared_utils_path_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/utils/path-utils */ 9455);
/* harmony import */ var _scanning_library_scanning_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../scanning/library-scanning.component */ 5414);
/* harmony import */ var _video_library_video_subtitles_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../video/library-video-subtitles.component */ 5467);































function LibraryMovieDetailComponent_div_7_a_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function LibraryMovieDetailComponent_div_7_a_31_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r7.addMoviePathToVideoPaths());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function LibraryMovieDetailComponent_div_7_span_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const language_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](language_r9);
  }
}
function LibraryMovieDetailComponent_div_7_ng_template_49_a_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const file_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("href", ctx_r11.getPlayVideoUrl(ctx_r11.movie.path, file_r10.fileName), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsanitizeUrl"]);
  }
}
function LibraryMovieDetailComponent_div_7_ng_template_49_a_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function LibraryMovieDetailComponent_div_7_ng_template_49_a_6_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r19);
      const file_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r18.openVideoSubtitlesDialog(ctx_r18.movie.path, file_r10.fileName, file_r10.hardcodedLanguages));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function LibraryMovieDetailComponent_div_7_ng_template_49_a_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function LibraryMovieDetailComponent_div_7_ng_template_49_a_7_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r22);
      const file_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r21.openSubtitleSyncDialog(ctx_r21.movie.getMovieFilePath(ctx_r21.videoFileType), ctx_r21.movie.getMovieFilePath(ctx_r21.subtitleFileType, file_r10.fileName)));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function LibraryMovieDetailComponent_div_7_ng_template_49_a_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function LibraryMovieDetailComponent_div_7_ng_template_49_a_8_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r26);
      const file_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r24.openDeleteSubtitleDialog(file_r10.filePath, file_r10.fileName));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function LibraryMovieDetailComponent_div_7_ng_template_49_td_9_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const language_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](language_r30);
  }
}
function LibraryMovieDetailComponent_div_7_ng_template_49_td_9_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const language_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](language_r31);
  }
}
function LibraryMovieDetailComponent_div_7_ng_template_49_td_9_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "internal");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function LibraryMovieDetailComponent_div_7_ng_template_49_td_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, LibraryMovieDetailComponent_div_7_ng_template_49_td_9_span_1_Template, 2, 1, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](2, LibraryMovieDetailComponent_div_7_ng_template_49_td_9_span_2_Template, 2, 1, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](3, LibraryMovieDetailComponent_div_7_ng_template_49_td_9_span_3_Template, 2, 0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const file_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", file_r10.hardcodedLanguages);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", file_r10.embeddedLanguages);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", file_r10.internalLanguagesAvailable);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](file_r10.type);
  }
}
function LibraryMovieDetailComponent_div_7_ng_template_49_td_10_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const file_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](file_r10.language);
  }
}
function LibraryMovieDetailComponent_div_7_ng_template_49_td_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, LibraryMovieDetailComponent_div_7_ng_template_49_td_10_span_1_Template, 2, 1, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const file_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", file_r10.language);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](file_r10.type);
  }
}
function LibraryMovieDetailComponent_div_7_ng_template_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "tr")(1, "td", 41)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](5, LibraryMovieDetailComponent_div_7_ng_template_49_a_5_Template, 2, 1, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](6, LibraryMovieDetailComponent_div_7_ng_template_49_a_6_Template, 2, 0, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](7, LibraryMovieDetailComponent_div_7_ng_template_49_a_7_Template, 2, 0, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](8, LibraryMovieDetailComponent_div_7_ng_template_49_a_8_Template, 2, 0, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](9, LibraryMovieDetailComponent_div_7_ng_template_49_td_9_Template, 6, 4, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](10, LibraryMovieDetailComponent_div_7_ng_template_49_td_10_Template, 4, 2, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const file_r10 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](file_r10.fileName);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", file_r10.isVideo);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r6.libraryEditModeEnabled && file_r10.isVideo);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r6.manualSubSyncEnabled && file_r10.isSubtitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r6.libraryEditModeEnabled && file_r10.isSubtitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", file_r10.isVideo);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", file_r10.isSubtitle);
  }
}
function LibraryMovieDetailComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 9)(1, "div", 10)(2, "div", 11)(3, "div", 12)(4, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](5, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "div", 15)(7, "div", 16)(8, "div", 17)(9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](11, "span", 18)(12, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](13, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](14, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function LibraryMovieDetailComponent_div_7_Template_a_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r37);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r36.openSettingsDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](15, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](16, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function LibraryMovieDetailComponent_div_7_Template_a_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r37);
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r38.refreshMovieDetails());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](17, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](18, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function LibraryMovieDetailComponent_div_7_Template_a_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r37);
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r39.openDeleteDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](19, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](20, "div", 16)(21, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](22, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](23, "div", 10)(24, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](26, "div", 26)(27, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](28, "Location:");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](29, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](31, LibraryMovieDetailComponent_div_7_a_31_Template, 2, 0, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](32, "div", 26)(33, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](34, "Wanted languages:");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](35, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](36, LibraryMovieDetailComponent_div_7_span_36_Template, 2, 1, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](37, "div", 10)(38, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](39, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](40, "div", 32)(41, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](42, "Files");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](43, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](44, "app-progress-bar", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](45, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](46, "div", 10)(47, "div", 36)(48, "p-table", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](49, LibraryMovieDetailComponent_div_7_ng_template_49_Template, 11, 7, "ng-template", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("href", ctx_r0.getMoviePosterFullSizeUrl(), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("lazyLoad", ctx_r0.getMoviePosterThumbnailUrl())("defaultImage", ctx_r0.getPosterPlaceholderUrl());
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r0.movie.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("href", ctx_r0.getImdbUrl(), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r0.movie.overview);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx_r0.movie.path, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx_r0.movie.pathInVideoPaths);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r0.movie.settings.wantedLanguages);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("value", ctx_r0.movie.totalSubtitlesAvailable)("total", ctx_r0.movie.totalSubtitlesWanted);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("value", ctx_r0.movie.files)("autoLayout", true);
  }
}
function LibraryMovieDetailComponent_app_movie_settings_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "app-movie-settings", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("visibleChange", function LibraryMovieDetailComponent_app_movie_settings_9_Template_app_movie_settings_visibleChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r41);
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r40.showMovieSettings = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("visible", ctx_r1.showMovieSettings)("imdbId", ctx_r1.movie.imdbId)("title", ctx_r1.movie.name)("movieSettings", ctx_r1.movie.settings);
  }
}
function LibraryMovieDetailComponent_app_subtitle_sync_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "app-subtitle-sync", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("visibleChange", function LibraryMovieDetailComponent_app_subtitle_sync_10_Template_app_subtitle_sync_visibleChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r43);
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r42.showSubtitleSync = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("visible", ctx_r2.showSubtitleSync)("videoPath", ctx_r2.movieVideoFilePath)("subtitlePath", ctx_r2.movieSubtitleFilePath);
  }
}
function LibraryMovieDetailComponent_app_library_video_subtitles_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "app-library-video-subtitles", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("visibleChange", function LibraryMovieDetailComponent_app_library_video_subtitles_11_Template_app_library_video_subtitles_visibleChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r45);
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r44.showVideoSubtitles = $event);
    })("save", function LibraryMovieDetailComponent_app_library_video_subtitles_11_Template_app_library_video_subtitles_save_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r45);
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r46.saveHardcodedSubtitles($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("visible", ctx_r3.showVideoSubtitles)("videoSubtitles", ctx_r3.videoSubtitles);
  }
}
let LibraryMovieDetailComponent = /*#__PURE__*/(() => {
  class LibraryMovieDetailComponent {
    constructor() {
      this.videoFileType = _shared_models_filetype__WEBPACK_IMPORTED_MODULE_9__.FileType.VIDEO;
      this.subtitleFileType = _shared_models_filetype__WEBPACK_IMPORTED_MODULE_9__.FileType.SUBTITLE;
      this.loading = false;
      this.refreshInProgress = false;
      this.showMovieSettings = false;
      this.showVideoSubtitles = false;
      this.showSubtitleSync = false;
      this.manualSubSyncEnabled = false;
      this.libraryEditModeEnabled = false;
      this.route = (0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_16__.ActivatedRoute);
      this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_16__.Router);
      this.domSanitizer = (0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.inject)(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__.DomSanitizer);
      this.movieService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.inject)(_core_services_api_movie_service__WEBPACK_IMPORTED_MODULE_1__.MovieService);
      this.artworkService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.inject)(_core_services_artwork_service__WEBPACK_IMPORTED_MODULE_3__.ArtworkService);
      this.settingsService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.inject)(_core_services_api_settings_service__WEBPACK_IMPORTED_MODULE_2__.SettingsService);
      this.messageService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.inject)(_core_services_message_service__WEBPACK_IMPORTED_MODULE_4__.MessageService);
      this.confirmationService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.inject)(primeng_api__WEBPACK_IMPORTED_MODULE_18__.ConfirmationService);
      this.destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_15__.DestroyRef);
    }
    ngOnInit() {
      this.manualSubSyncEnabled = _app_settings_service__WEBPACK_IMPORTED_MODULE_0__.appSettings.manualSubSync;
      this.libraryEditModeEnabled = _app_settings_service__WEBPACK_IMPORTED_MODULE_0__.appSettings.libraryEditMode;
      this.route.paramMap.pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_19__.takeUntilDestroyed)(this.destroyRef)).subscribe({
        next: paramMap => {
          this.loading = true;
          const imdbId = paramMap.get('imdbId');
          this.getMovieDetails(imdbId);
        }
      });
    }
    getMoviePosterFullSizeUrl() {
      return this.artworkService.getMoviePosterFullSizeUrl(this.movie.imdbId);
    }
    getMoviePosterThumbnailUrl() {
      return this.artworkService.getMoviePosterThumbnailUrl(this.movie.imdbId);
    }
    getPosterPlaceholderUrl() {
      return (0,_shared_utils_common_utils__WEBPACK_IMPORTED_MODULE_11__.getPosterPlaceholderUrl)();
    }
    getImdbUrl() {
      return (0,_shared_utils_common_utils__WEBPACK_IMPORTED_MODULE_11__.getImdbUrl)(this.movie.imdbId);
    }
    getPlayVideoUrl(filePath, fileName) {
      return this.domSanitizer.bypassSecurityTrustResourceUrl((0,_shared_utils_common_utils__WEBPACK_IMPORTED_MODULE_11__.getPlayVideoUrl)(filePath, fileName));
    }
    openSettingsDialog() {
      this.showMovieSettings = true;
    }
    refreshMovieDetails() {
      this.refreshInProgress = true;
      this.movieService.refreshMovieDetails(this.movie.imdbId).pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_19__.takeUntilDestroyed)(this.destroyRef)).subscribe({
        next: () => {
          this.getMovieDetails(this.movie.imdbId);
          this.refreshInProgress = false;
        },
        error: () => this.messageService.showErrorMessage('Unable to refresh the movie details!')
      });
    }
    openDeleteDialog() {
      this.confirmationService.confirm({
        message: `Are you sure that you want to delete <b>${this.movie.name}</b>?`,
        accept: () => {
          this.movieService.deleteMovie(this.movie.imdbId).pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_19__.takeUntilDestroyed)(this.destroyRef)).subscribe({
            next: () => {
              this.router.navigateByUrl('/library/movie');
            },
            error: () => this.messageService.showErrorMessage(`Unable to delete the movie ${this.movie.name}!`)
          });
        }
      });
    }
    openDeleteSubtitleDialog(filePath, fileName) {
      this.confirmationService.confirm({
        message: `Are you sure that you want to delete the subtitle<br><b>${fileName}</b>?`,
        accept: () => {
          this.movieService.deleteMovieSubtitle(this.movie.imdbId, (0,_shared_utils_path_utils__WEBPACK_IMPORTED_MODULE_12__.joinPaths)(filePath, fileName)).pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_19__.takeUntilDestroyed)(this.destroyRef)).subscribe({
            next: () => {
              // Reload details
              this.getMovieDetails(this.movie.imdbId);
              this.messageService.showSuccessMessage(`Deleted ${fileName}.`);
            },
            error: () => this.messageService.showErrorMessage(`Unable to delete the subtitle ${fileName}!`)
          });
        }
      });
    }
    addMoviePathToVideoPaths() {
      const videoPath = {
        videoPath: this.movie.path
      };
      this.settingsService.updateGeneralSetting('videoPaths', videoPath).pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_19__.takeUntilDestroyed)(this.destroyRef)).subscribe({
        next: () => {
          this.messageService.showSuccessMessage(`Path ${this.movie.path} added to the video paths.`);
          this.getMovieDetails(this.movie.imdbId);
        },
        error: error => {
          if (error.status && error.status === 409) {
            this.messageService.showInfoMessage(`Path ${this.movie.path} already added to the video paths.`);
          } else {
            this.messageService.showErrorMessage(`Unable to add path ${this.movie.path} to the video paths!`);
          }
        }
      });
    }
    openVideoSubtitlesDialog(fileLocation, fileName, languages) {
      this.videoSubtitles = new _shared_models_video__WEBPACK_IMPORTED_MODULE_10__.VideoSubtitles();
      this.videoSubtitles.fileLocation = fileLocation;
      this.videoSubtitles.fileName = fileName;
      this.videoSubtitles.languages = languages;
      this.showVideoSubtitles = true;
    }
    closeVideoSubtitlesDialog() {
      this.showVideoSubtitles = false;
      this.videoSubtitles = null;
    }
    openSubtitleSyncDialog(videoFilePath, subtitleFilepath) {
      this.movieVideoFilePath = videoFilePath;
      this.movieSubtitleFilePath = subtitleFilepath;
      this.showSubtitleSync = true;
    }
    saveHardcodedSubtitles(videoSubtitles) {
      this.movieService.saveMovieHardcodedSubtitles(this.movie.imdbId, videoSubtitles).pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_19__.takeUntilDestroyed)(this.destroyRef)).subscribe({
        next: () => {
          this.closeVideoSubtitlesDialog();
          this.getMovieDetails(this.movie.imdbId);
        },
        error: () => this.messageService.showErrorMessage('Unable to save the hardcoded subtitles!')
      });
    }
    getMovieDetails(imdbId) {
      this.movieService.getMovieDetails(imdbId).pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_19__.takeUntilDestroyed)(this.destroyRef)).subscribe({
        next: movie => {
          this.movie = movie;
          this.loading = false;
        },
        error: () => this.messageService.showErrorMessage('Unable to get the movie details!')
      });
    }
  }
  LibraryMovieDetailComponent.ɵfac = function LibraryMovieDetailComponent_Factory(t) {
    return new (t || LibraryMovieDetailComponent)();
  };
  LibraryMovieDetailComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({
    type: LibraryMovieDetailComponent,
    selectors: [["app-library-movie-detail"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵStandaloneFeature"]],
    decls: 12,
    vars: 5,
    consts: [[1, "container-lg"], ["header", "Movie details"], [3, "visible"], ["aria-hidden", "true", 1, "fa", "fa-spinner", "fa-spin", "mr-2"], ["class", "library-details-container", 4, "ngIf"], ["header", "Confirmation", "icon", "pi pi-exclamation-triangle"], [3, "visible", "imdbId", "title", "movieSettings", "visibleChange", 4, "ngIf"], [3, "visible", "videoPath", "subtitlePath", "visibleChange", 4, "ngIf"], [3, "visible", "videoSubtitles", "visibleChange", "save", 4, "ngIf"], [1, "library-details-container"], [1, "row", "mb-3"], [1, "col-12", "library-details-info-container"], [1, "library-details-info-poster"], ["target", "_blank", 3, "href"], ["title", "Click to view full size", 1, "library-details-info-poster-image", 3, "lazyLoad", "defaultImage"], [1, "library-details-info"], [1, "row"], [1, "col-12", "library-details-info-title"], [1, "icon-group"], ["target", "_blank", 1, "icon-link", 3, "href"], ["aria-hidden", "true", "title", "Click to visit Imdb", 1, "fa", "fa-imdb"], [1, "icon-link", 3, "click"], ["aria-hidden", "true", "title", "Click to edit movie settings", 1, "fa", "fa-wrench"], ["aria-hidden", "true", "title", "Click to refresh movie details", 1, "fa", "fa-repeat"], ["aria-hidden", "true", "title", "Click to delete movie from the database", 1, "fa", "fa-trash"], [1, "col-12"], [1, "row", "mb-2"], [1, "col-3"], [1, "col-9", "wrap-text"], ["class", "icon-link", 3, "click", 4, "ngIf"], [1, "col-9"], ["class", "p-tag language mr-2", 4, "ngFor", "ngForOf"], [1, "library-details-files-summary"], [1, "summary-title"], [1, "summary-progress-bar", "ml-auto"], [3, "value", "total"], [1, "col-12", "library-details-files"], ["styleClass", "p-datatable-sm", 3, "value", "autoLayout"], ["pTemplate", "body"], ["aria-hidden", "true", "title", "Click to add the movie path to the video paths to scan", 1, "fa", "fa-plus"], [1, "p-tag", "language", "mr-2"], [1, "wrap-text"], ["class", "icon-link", 3, "href", 4, "ngIf"], ["class", "text-right", 4, "ngIf"], [1, "icon-link", 3, "href"], ["aria-hidden", "true", "title", "Click to play video", 1, "fa", "fa-play-circle-o"], ["aria-hidden", "true", "title", "Click to save hardcoded subtitle languages", 1, "fa", "fa-wrench"], ["aria-hidden", "true", "title", "Click to synchronize subtitle", 1, "fa", "fa-refresh"], ["aria-hidden", "true", "title", "Click to remove subtitle", 1, "fa", "fa-trash"], [1, "text-right"], ["class", "p-tag language ml-2", 4, "ngFor", "ngForOf"], ["class", "p-tag language ml-2", 4, "ngIf"], [1, "p-tag", "filetype", "ml-2"], [1, "p-tag", "language", "ml-2"], [3, "visible", "imdbId", "title", "movieSettings", "visibleChange"], [3, "visible", "videoPath", "subtitlePath", "visibleChange"], [3, "visible", "videoSubtitles", "visibleChange", "save"]],
    template: function LibraryMovieDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 0)(1, "p-panel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](2, "app-library-scanning");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "app-message", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](4, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6, "Refreshing movie details...");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](7, LibraryMovieDetailComponent_div_7_Template, 50, 13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](8, "p-confirmDialog", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](9, LibraryMovieDetailComponent_app_movie_settings_9_Template, 1, 4, "app-movie-settings", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](10, LibraryMovieDetailComponent_app_subtitle_sync_10_Template, 1, 3, "app-subtitle-sync", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](11, LibraryMovieDetailComponent_app_library_video_subtitles_11_Template, 1, 2, "app-library-video-subtitles", 8);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("visible", ctx.refreshInProgress);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.movie);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.showMovieSettings);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.showSubtitleSync);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.showVideoSubtitles);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_20__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgFor, primeng_panel__WEBPACK_IMPORTED_MODULE_21__.PanelModule, primeng_panel__WEBPACK_IMPORTED_MODULE_21__.Panel, primeng_api__WEBPACK_IMPORTED_MODULE_18__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_22__.TableModule, primeng_table__WEBPACK_IMPORTED_MODULE_22__.Table, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_23__.ConfirmDialogModule, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_23__.ConfirmDialog, primeng_api__WEBPACK_IMPORTED_MODULE_18__.SharedModule, ng_lazyload_image__WEBPACK_IMPORTED_MODULE_24__.LazyLoadImageModule, ng_lazyload_image__WEBPACK_IMPORTED_MODULE_24__.LazyLoadImageDirective, _scanning_library_scanning_component__WEBPACK_IMPORTED_MODULE_13__.LibraryScanningComponent, _shared_components_message_message_component__WEBPACK_IMPORTED_MODULE_5__.MessageComponent, _shared_components_movie_settings_movie_settings_component__WEBPACK_IMPORTED_MODULE_6__.MovieSettingsComponent, _shared_components_subtitle_sync_subtitle_sync_component__WEBPACK_IMPORTED_MODULE_8__.SubtitleSyncComponent, _video_library_video_subtitles_component__WEBPACK_IMPORTED_MODULE_14__.LibraryVideoSubtitlesComponent, _shared_components_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_7__.ProgressBarComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
  return LibraryMovieDetailComponent;
})();

/***/ }),

/***/ 5197:
/*!************************************************************************************!*\
  !*** ./src/app/modules/library/movie/overview/library-movie-overview.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LibraryMovieOverviewComponent: () => (/* binding */ LibraryMovieOverviewComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-lazyload-image */ 1935);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/api */ 8026);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/button */ 2947);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/panel */ 6110);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/table */ 6192);
/* harmony import */ var _app_settings_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../app-settings.service */ 5751);
/* harmony import */ var _core_services_api_movie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/services/api/movie.service */ 9375);
/* harmony import */ var _core_services_artwork_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/services/artwork.service */ 6570);
/* harmony import */ var _core_services_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/services/message.service */ 5476);
/* harmony import */ var _core_services_system_event_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/services/system-event.service */ 9118);
/* harmony import */ var _shared_components_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/progress-bar/progress-bar.component */ 2087);
/* harmony import */ var _shared_components_table_filter_table_filter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/table-filter/table-filter.component */ 4610);
/* harmony import */ var _shared_utils_table_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/utils/table-utils */ 981);
/* harmony import */ var _scanning_library_scanning_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../scanning/library-scanning.component */ 5414);
























function LibraryMovieOverviewComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 9)(1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "p-button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "app-table-filter", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("label", ctx_r1.nrOfMovies + " movies");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("table", _r0)("tableStateKey", ctx_r1.tableStateKey);
  }
}
function LibraryMovieOverviewComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr")(1, "th", 14)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "p-sortIcon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "th", 16)(6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "Year");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](8, "p-sortIcon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "th", 18)(10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11, "Path");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](12, "p-sortIcon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "th", 20)(14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15, "Wanted subtitles");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](16, "p-sortIcon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "th", 22)(18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](19, "Subtitles");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](20, "p-sortIcon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
}
function LibraryMovieOverviewComponent_ng_template_9_img_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "img", 36);
  }
  if (rf & 2) {
    const movie_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("lazyLoad", ctx_r5.getMoviePosterThumbnailUrl(movie_r4.imdbId))("defaultImage", ctx_r5.getPosterPlaceholderUrl());
  }
}
function LibraryMovieOverviewComponent_ng_template_9_span_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const lang_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](lang_r8);
  }
}
const _c0 = function (a1) {
  return ["/library/movie/detail", a1];
};
function LibraryMovieOverviewComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr")(1, "td")(2, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "span", 25)(5, "span", 26)(6, "span", 27)(7, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](8, LibraryMovieOverviewComponent_ng_template_9_img_8_Template, 1, 2, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "span", 30)(10, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "td")(13, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14, "Year");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "td")(18, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](19, "Path");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "td")(23, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](24, "Wanted subtitles");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](26, LibraryMovieOverviewComponent_ng_template_9_span_26_Template, 2, 1, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](27, "td")(28, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](29, "Subtitles");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](30, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](31, "app-progress-bar", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const movie_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](10, _c0, movie_r4.imdbId))("title", movie_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", movie_r4.poster);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](12, _c0, movie_r4.imdbId));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](movie_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](movie_r4.year);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](movie_r4.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", movie_r4.settings.wantedLanguages);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", movie_r4.totalSubtitlesAvailable)("total", movie_r4.totalSubtitlesWanted);
  }
}
const _c1 = function () {
  return {
    showAll: "All"
  };
};
const _c2 = function (a4) {
  return [5, 10, 25, 50, a4];
};
let LibraryMovieOverviewComponent = /*#__PURE__*/(() => {
  class LibraryMovieOverviewComponent {
    constructor() {
      this.nrOfMovies = 0;
      this.loading = false;
      this.globalFilterFields = ['title', 'year', 'path', 'settings.wantedLanguages', 'totalSubtitlesAvailable'];
      this.tableStateKey = 'autosubliminal-library-movie-overview-table';
      this.systemEventService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.inject)(_core_services_system_event_service__WEBPACK_IMPORTED_MODULE_4__.SystemEventService);
      this.movieService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.inject)(_core_services_api_movie_service__WEBPACK_IMPORTED_MODULE_1__.MovieService);
      this.artworkService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.inject)(_core_services_artwork_service__WEBPACK_IMPORTED_MODULE_2__.ArtworkService);
      this.messageService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.inject)(_core_services_message_service__WEBPACK_IMPORTED_MODULE_3__.MessageService);
      this.destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_9__.DestroyRef);
    }
    ngOnInit() {
      // Load overview
      this.loadOverview();
      // Subscribe on scanLibrary finish events to reload the overview
      this.systemEventService.schedulerFinish$.pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_10__.takeUntilDestroyed)(this.destroyRef)).subscribe({
        next: scheduler => {
          if (scheduler.name === _app_settings_service__WEBPACK_IMPORTED_MODULE_0__.appSettings.scanLibrary) {
            this.loadOverview();
          }
        }
      });
    }
    sort(event) {
      (0,_shared_utils_table_utils__WEBPACK_IMPORTED_MODULE_7__.naturalSort)(event);
    }
    getMoviePosterThumbnailUrl(imdbId) {
      return this.artworkService.getMoviePosterThumbnailUrl(imdbId);
    }
    getPosterPlaceholderUrl() {
      return 'assets/poster-placeholder.jpg';
    }
    loadOverview() {
      this.loading = true;
      this.movieService.getMovies().pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_10__.takeUntilDestroyed)(this.destroyRef)).subscribe({
        next: movies => {
          this.movies = movies;
          this.nrOfMovies = this.movies.length;
          this.loading = false;
        },
        error: () => this.messageService.showErrorMessage('Unable to get the movies!')
      });
    }
  }
  LibraryMovieOverviewComponent.ɵfac = function LibraryMovieOverviewComponent_Factory(t) {
    return new (t || LibraryMovieOverviewComponent)();
  };
  LibraryMovieOverviewComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
    type: LibraryMovieOverviewComponent,
    selectors: [["app-library-movie-overview"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵStandaloneFeature"]],
    decls: 10,
    vars: 14,
    consts: [[1, "container-lg"], ["header", "Movie library"], [1, "row"], [1, "col-12", "library-overview-container"], ["stateStorage", "local", "currentPageReportTemplate", "{first} to {last} of {totalRecords}", "styleClass", "p-datatable-sm p-datatable-gridlines p-datatable-striped p-datatable-responsive-mode", 3, "value", "stateKey", "loading", "autoLayout", "rowHover", "paginator", "rows", "rowsPerPageOptions", "showCurrentPageReport", "globalFilterFields", "customSort", "sortFunction"], ["movieTable", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], [1, "caption"], [1, "w-100"], ["styleClass", "p-button-static p-button-outlined", 3, "label"], [1, "ml-auto"], ["matchMode", "contains", 3, "table", "tableStateKey"], ["pSortableColumn", "title"], ["field", "title"], ["pSortableColumn", "year"], ["field", "year"], ["pSortableColumn", "path"], ["field", "path"], ["pSortableColumn", "settings.wantedLanguages"], ["field", "settings.wantedLanguages"], ["pSortableColumn", "totalSubtitlesAvailable"], ["field", "totalSubtitlesAvailable"], [1, "p-column-title"], [1, "p-column-data", "title-container"], [1, "title-container-wrapper"], [1, "title-poster-container"], [3, "routerLink", "title"], ["class", "title-poster-image", 3, "lazyLoad", "defaultImage", 4, "ngIf"], [1, "title-text"], [3, "routerLink"], [1, "p-column-data"], [1, "p-column-data", "wrap-text"], ["class", "p-tag p-tag-small p-tag-secondary mr-2", 4, "ngFor", "ngForOf"], [1, "w-100", 3, "value", "total"], [1, "title-poster-image", 3, "lazyLoad", "defaultImage"], [1, "p-tag", "p-tag-small", "p-tag-secondary", "mr-2"]],
    template: function LibraryMovieOverviewComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0)(1, "p-panel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "app-library-scanning");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 2)(4, "div", 3)(5, "p-table", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("sortFunction", function LibraryMovieOverviewComponent_Template_p_table_sortFunction_5_listener($event) {
          return ctx.sort($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](7, LibraryMovieOverviewComponent_ng_template_7_Template, 5, 3, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](8, LibraryMovieOverviewComponent_ng_template_8_Template, 21, 0, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](9, LibraryMovieOverviewComponent_ng_template_9_Template, 32, 14, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", ctx.movies)("stateKey", ctx.tableStateKey)("loading", ctx.loading)("autoLayout", true)("rowHover", true)("paginator", true)("rows", 10)("rowsPerPageOptions", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](12, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](11, _c1)))("showCurrentPageReport", true)("globalFilterFields", ctx.globalFilterFields)("customSort", true);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgFor, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLink, primeng_panel__WEBPACK_IMPORTED_MODULE_13__.PanelModule, primeng_panel__WEBPACK_IMPORTED_MODULE_13__.Panel, primeng_api__WEBPACK_IMPORTED_MODULE_14__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_15__.TableModule, primeng_table__WEBPACK_IMPORTED_MODULE_15__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_15__.SortableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_15__.SortIcon, primeng_button__WEBPACK_IMPORTED_MODULE_16__.ButtonModule, primeng_button__WEBPACK_IMPORTED_MODULE_16__.Button, primeng_api__WEBPACK_IMPORTED_MODULE_14__.SharedModule, ng_lazyload_image__WEBPACK_IMPORTED_MODULE_17__.LazyLoadImageModule, ng_lazyload_image__WEBPACK_IMPORTED_MODULE_17__.LazyLoadImageDirective, _scanning_library_scanning_component__WEBPACK_IMPORTED_MODULE_8__.LibraryScanningComponent, _shared_components_table_filter_table_filter_component__WEBPACK_IMPORTED_MODULE_6__.TableFilterComponent, _shared_components_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_5__.ProgressBarComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
  return LibraryMovieOverviewComponent;
})();

/***/ }),

/***/ 5375:
/*!************************************************************************!*\
  !*** ./src/app/modules/library/overview/library-overview.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LibraryOverviewComponent: () => (/* binding */ LibraryOverviewComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/panel */ 6110);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 4300);
/* harmony import */ var _app_settings_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../app-settings.service */ 5751);
/* harmony import */ var _core_services_api_movie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/api/movie.service */ 9375);
/* harmony import */ var _core_services_api_show_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/api/show.service */ 5602);
/* harmony import */ var _core_services_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/message.service */ 5476);
/* harmony import */ var _core_services_system_event_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/services/system-event.service */ 9118);
/* harmony import */ var _shared_components_icon_dropdown_icon_dropdown_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/icon-dropdown/icon-dropdown.component */ 8870);
/* harmony import */ var _shared_components_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/progress-bar/progress-bar.component */ 2087);
/* harmony import */ var _scanning_library_scanning_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../scanning/library-scanning.component */ 5414);
















function LibraryOverviewComponent_div_4_app_icon_dropdown_9_li_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li")(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const failedShow_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](failedShow_r4);
  }
}
function LibraryOverviewComponent_div_4_app_icon_dropdown_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "app-icon-dropdown", 12)(1, "li")(2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "List of failed shows:");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, LibraryOverviewComponent_div_4_app_icon_dropdown_9_li_5_Template, 3, 1, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r2.showsOverview.failedShows);
  }
}
const _c0 = function () {
  return ["/library/show/overview"];
};
function LibraryOverviewComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 5)(1, "div", 6)(2, "div", 7)(3, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 7)(6, "span")(7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](9, LibraryOverviewComponent_div_4_app_icon_dropdown_9_Template, 6, 1, "app-icon-dropdown", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "div", 7)(13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, "Total subtitles available:");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](16, "app-progress-bar", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](6, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("Total shows: ", ctx_r0.showsOverview.totalShows, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.showsOverview.failedShows.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("Total episodes: ", ctx_r0.showsOverview.totalEpisodes, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", ctx_r0.showsOverview.totalSubtitlesAvailable)("total", ctx_r0.showsOverview.totalSubtitlesWanted);
  }
}
function LibraryOverviewComponent_div_5_app_icon_dropdown_9_li_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li")(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const failedMovie_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](failedMovie_r7);
  }
}
function LibraryOverviewComponent_div_5_app_icon_dropdown_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "app-icon-dropdown", 12)(1, "li")(2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "List of failed movies:");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, LibraryOverviewComponent_div_5_app_icon_dropdown_9_li_5_Template, 3, 1, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r5.moviesOverview.failedMovies);
  }
}
const _c1 = function () {
  return ["/library/movie/overview"];
};
function LibraryOverviewComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 15)(1, "div", 6)(2, "div", 7)(3, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 7)(6, "span")(7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](9, LibraryOverviewComponent_div_5_app_icon_dropdown_9_Template, 6, 1, "app-icon-dropdown", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 7)(11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, "Total subtitles available:");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](14, "app-progress-bar", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](5, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("Total movies: ", ctx_r1.moviesOverview.totalMovies, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.moviesOverview.failedMovies.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", ctx_r1.moviesOverview.totalSubtitlesAvailable)("total", ctx_r1.moviesOverview.totalSubtitlesWanted);
  }
}
let LibraryOverviewComponent = /*#__PURE__*/(() => {
  class LibraryOverviewComponent {
    constructor() {
      this.loading = false;
      this.systemEventService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.inject)(_core_services_system_event_service__WEBPACK_IMPORTED_MODULE_4__.SystemEventService);
      this.showService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.inject)(_core_services_api_show_service__WEBPACK_IMPORTED_MODULE_2__.ShowService);
      this.movieService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.inject)(_core_services_api_movie_service__WEBPACK_IMPORTED_MODULE_1__.MovieService);
      this.messageService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.inject)(_core_services_message_service__WEBPACK_IMPORTED_MODULE_3__.MessageService);
      this.destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_8__.DestroyRef);
    }
    ngOnInit() {
      // Load overview
      this.loadOverview();
      // Subscribe on scanLibrary finish events to reload the overview
      this.systemEventService.schedulerFinish$.pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_9__.takeUntilDestroyed)(this.destroyRef)).subscribe({
        next: scheduler => {
          if (scheduler.name === _app_settings_service__WEBPACK_IMPORTED_MODULE_0__.appSettings.scanLibrary) {
            this.loadOverview();
          }
        }
      });
    }
    loadOverview() {
      this.loading = true;
      // Load shows and movies overview
      (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.forkJoin)([this.showService.getShowsOverview(), this.movieService.getMoviesOverview()]).pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_9__.takeUntilDestroyed)(this.destroyRef)).subscribe({
        next: ([showsOverview, moviesOverview]) => {
          this.showsOverview = showsOverview;
          this.moviesOverview = moviesOverview;
          this.loading = false;
        },
        error: () => this.messageService.showErrorMessage('Unable to get the library overview!')
      });
    }
  }
  LibraryOverviewComponent.ɵfac = function LibraryOverviewComponent_Factory(t) {
    return new (t || LibraryOverviewComponent)();
  };
  LibraryOverviewComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: LibraryOverviewComponent,
    selectors: [["app-library-overview"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵStandaloneFeature"]],
    decls: 6,
    vars: 2,
    consts: [[1, "container-lg"], ["header", "Library overview"], [1, "row"], ["class", "col-12 col-sm-12 col-md-6 col-lg-6 mb-3 mb-sm-3 mb-md-0 mb-lg-0", 4, "ngIf"], ["class", "col-12 col-sm-12 col-md-6 col-lg-6", 4, "ngIf"], [1, "col-12", "col-sm-12", "col-md-6", "col-lg-6", "mb-3", "mb-sm-3", "mb-md-0", "mb-lg-0"], [1, "overview-container"], [1, "overview-data"], [3, "routerLink"], ["src", "assets/shows.jpg", "title", "Click to view shows", 1, "overview-image"], ["iconClass", "fa fa-exclamation-triangle text-danger", 4, "ngIf"], [1, "w-100", 3, "value", "total"], ["iconClass", "fa fa-exclamation-triangle text-danger"], [1, "icon-dropdown-title"], [4, "ngFor", "ngForOf"], [1, "col-12", "col-sm-12", "col-md-6", "col-lg-6"], ["src", "assets/movies.jpg", "title", "Click to view movies", 1, "overview-image", "image-hover"]],
    template: function LibraryOverviewComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "p-panel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "app-library-scanning");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, LibraryOverviewComponent_div_4_Template, 17, 7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, LibraryOverviewComponent_div_5_Template, 15, 6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.showsOverview);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.moviesOverview);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgFor, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLink, primeng_panel__WEBPACK_IMPORTED_MODULE_13__.PanelModule, primeng_panel__WEBPACK_IMPORTED_MODULE_13__.Panel, _scanning_library_scanning_component__WEBPACK_IMPORTED_MODULE_7__.LibraryScanningComponent, _shared_components_icon_dropdown_icon_dropdown_component__WEBPACK_IMPORTED_MODULE_5__.IconDropdownComponent, _shared_components_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_6__.ProgressBarComponent],
    styles: [".image-box[_ngcontent-%COMP%], .overview-container[_ngcontent-%COMP%]   .overview-image[_ngcontent-%COMP%] {\n  box-shadow: 3px 3px 3px #000000;\n  -webkit-box-shadow: 3px 3px 3px #000000;\n  -moz-box-shadow: 3px 3px 3px #000000;\n  border: 1px solid #000000;\n}\n\n.image-hover[_ngcontent-%COMP%]:hover, .overview-container[_ngcontent-%COMP%]   .overview-image[_ngcontent-%COMP%]:hover {\n  -moz-filter: brightness(75%);\n  -o-filter: brightness(75%);\n  filter: brightness(75%);\n}\n\n.overview-container[_ngcontent-%COMP%] {\n  border: 1px solid var(--surface-d);\n  border-radius: 0.25rem;\n  padding: 1rem;\n}\n.overview-container[_ngcontent-%COMP%]   .overview-image[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.overview-container[_ngcontent-%COMP%]   .overview-data[_ngcontent-%COMP%] {\n  display: flex;\n  -moz-justify-content: space-between;\n  -ms-justify-content: space-between;\n  justify-content: space-between;\n  -ms-flex-pack: space-between;\n}\n.overview-container[_ngcontent-%COMP%]   .overview-data[_ngcontent-%COMP%]:not(:last-of-type) {\n  margin-bottom: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2NvbXBvbmVudHMvX2ltYWdlcy5zY3NzIiwid2VicGFjazovLy4vc3JjL3Njc3MvbWl4aW5zL19ib3gtc2hhZG93LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL21vZHVsZXMvbGlicmFyeS9vdmVydmlldy9saWJyYXJ5LW92ZXJ2aWV3LmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL3Njc3MvbWl4aW5zL19maWx0ZXIuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9zY3NzL21peGlucy9fZmxleGJveC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VDRkUsK0JER29CO0VDRnBCLHVDREVvQjtFQ0RwQixvQ0RDb0I7RUFDcEIseUJBQUE7QUVBRjs7QUZJRTtFR1BBLDRCSFFrQjtFR1BsQiwwQkhPa0I7RUdObEIsdUJITWtCO0FFRXBCOztBQVJBO0VBQ0Usa0NBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUFXRjtBQVRFO0VBR0UsV0FBQTtBQVNKO0FBTkU7RUVIQSxhQUFBO0VBMkZBLG1DRnRGMkI7RUV1RjNCLGtDRnZGMkI7RUV3RjNCLDhCRnhGMkI7RUV5RjNCLDRCRnpGMkI7QUFnQjdCO0FBZEk7RUFDRSxxQkFBQTtBQWdCTiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uL21peGlucy9ib3gtc2hhZG93JztcclxuQGltcG9ydCAnLi4vbWl4aW5zL2ZpbHRlcic7XHJcblxyXG4uaW1hZ2UtYm94IHtcclxuICBAaW5jbHVkZSBib3gtc2hhZG93KDNweCAzcHggM3B4ICMwMDAwMDApO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA7XHJcbn1cclxuXHJcbi5pbWFnZS1ob3ZlciB7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBAaW5jbHVkZSBmaWx0ZXIoYnJpZ2h0bmVzcyg3NSUpKTtcclxuICB9XHJcbn1cclxuIiwiQG1peGluIGJveC1zaGFkb3coJGJveC1zaGFkb3cpIHtcclxuICBib3gtc2hhZG93OiAkYm94LXNoYWRvdztcclxuICAtd2Via2l0LWJveC1zaGFkb3c6ICRib3gtc2hhZG93O1xyXG4gIC1tb3otYm94LXNoYWRvdzogJGJveC1zaGFkb3c7XHJcbn1cclxuIiwiQGltcG9ydCAnLi4vLi4vLi4vLi4vc2Nzcy92YXJpYWJsZXMnO1xyXG5AaW1wb3J0ICcuLi8uLi8uLi8uLi9zY3NzL21peGlucy9mbGV4Ym94JztcclxuQGltcG9ydCAnLi4vLi4vLi4vLi4vc2Nzcy9jb21wb25lbnRzL2ltYWdlcyc7XHJcblxyXG4ub3ZlcnZpZXctY29udGFpbmVyIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zdXJmYWNlLWQpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XHJcbiAgcGFkZGluZzogMXJlbTtcclxuXHJcbiAgLm92ZXJ2aWV3LWltYWdlIHtcclxuICAgIEBleHRlbmQgLmltYWdlLWJveDtcclxuICAgIEBleHRlbmQgLmltYWdlLWhvdmVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAub3ZlcnZpZXctZGF0YSB7XHJcbiAgICBAaW5jbHVkZSBmbGV4Ym94O1xyXG4gICAgQGluY2x1ZGUganVzdGlmeS1jb250ZW50KHNwYWNlLWJldHdlZW4pO1xyXG5cclxuICAgICY6bm90KDpsYXN0LW9mLXR5cGUpIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJAbWl4aW4gZmlsdGVyKCR2YWx1ZSkge1xyXG4gIC13ZWJraXQtZmlsdGVyOiAkdmFsdWU7XHJcbiAgLW1vei1maWx0ZXI6ICR2YWx1ZTtcclxuICAtby1maWx0ZXI6ICR2YWx1ZTtcclxuICBmaWx0ZXI6ICR2YWx1ZTtcclxufVxyXG4iLCIvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBGbGV4Ym94IFNBU1MgbWl4aW5zXHJcbi8vIFRoZSBzcGVjOiBodHRwOi8vd3d3LnczLm9yZy9UUi9jc3MzLWZsZXhib3hcclxuLy8gQ29waWVkIGZyb20gaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vcmljaGFyZHRvcnJlczMxNC8yNmIxOGUxMjk1OGJhNDE4YmIzNzk5M2ZkY2JmYzFiZFxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuLy8gRmxleGJveCBkaXNwbGF5XHJcbkBtaXhpbiBmbGV4Ym94KCkge1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIGRpc3BsYXk6IC1tb3otYm94O1xyXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4vLyBUaGUgJ2ZsZXgnIHNob3J0aGFuZFxyXG4vLyAtIGFwcGxpZXMgdG86IGZsZXggaXRlbXNcclxuLy8gPHBvc2l0aXZlLW51bWJlcj4sIGluaXRpYWwsIGF1dG8sIG9yIG5vbmVcclxuQG1peGluIGZsZXgoJHZhbHVlcykge1xyXG4gIC13ZWJraXQtYm94LWZsZXg6ICR2YWx1ZXM7XHJcbiAgLW1vei1ib3gtZmxleDogJHZhbHVlcztcclxuICAtd2Via2l0LWZsZXg6ICR2YWx1ZXM7XHJcbiAgLW1zLWZsZXg6ICR2YWx1ZXM7XHJcbiAgZmxleDogJHZhbHVlcztcclxufVxyXG5cclxuLy8gRmxleCBGbG93IERpcmVjdGlvblxyXG4vLyAtIGFwcGxpZXMgdG86IGZsZXggY29udGFpbmVyc1xyXG4vLyByb3cgfCByb3ctcmV2ZXJzZSB8IGNvbHVtbiB8IGNvbHVtbi1yZXZlcnNlXHJcbkBtaXhpbiBmbGV4LWRpcmVjdGlvbigkZGlyZWN0aW9uKSB7XHJcbiAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogJGRpcmVjdGlvbjtcclxuICAtbW96LWZsZXgtZGlyZWN0aW9uOiAkZGlyZWN0aW9uO1xyXG4gIC1tcy1mbGV4LWRpcmVjdGlvbjogJGRpcmVjdGlvbjtcclxuICBmbGV4LWRpcmVjdGlvbjogJGRpcmVjdGlvbjtcclxufVxyXG5cclxuLy8gRmxleCBMaW5lIFdyYXBwaW5nXHJcbi8vIC0gYXBwbGllcyB0bzogZmxleCBjb250YWluZXJzXHJcbi8vIG5vd3JhcCB8IHdyYXAgfCB3cmFwLXJldmVyc2VcclxuQG1peGluIGZsZXgtd3JhcCgkd3JhcCkge1xyXG4gIC13ZWJraXQtZmxleC13cmFwOiAkd3JhcDtcclxuICAtbW96LWZsZXgtd3JhcDogJHdyYXA7XHJcbiAgLW1zLWZsZXgtd3JhcDogJHdyYXA7XHJcbiAgZmxleC13cmFwOiAkd3JhcDtcclxufVxyXG5cclxuLy8gRmxleCBEaXJlY3Rpb24gYW5kIFdyYXBcclxuLy8gLSBhcHBsaWVzIHRvOiBmbGV4IGNvbnRhaW5lcnNcclxuLy8gPGZsZXgtZGlyZWN0aW9uPiB8fCA8ZmxleC13cmFwPlxyXG5AbWl4aW4gZmxleC1mbG93KCRmbG93KSB7XHJcbiAgLXdlYmtpdC1mbGV4LWZsb3c6ICRmbG93O1xyXG4gIC1tb3otZmxleC1mbG93OiAkZmxvdztcclxuICAtbXMtZmxleC1mbG93OiAkZmxvdztcclxuICBmbGV4LWZsb3c6ICRmbG93O1xyXG59XHJcblxyXG4vLyBEaXNwbGF5IE9yZGVyXHJcbi8vIC0gYXBwbGllcyB0bzogZmxleCBpdGVtc1xyXG4vLyA8aW50ZWdlcj5cclxuQG1peGluIG9yZGVyKCR2YWwpIHtcclxuICAtd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOiAkdmFsO1xyXG4gIC1tb3otYm94LW9yZGluYWwtZ3JvdXA6ICR2YWw7XHJcbiAgLW1zLWZsZXgtb3JkZXI6ICR2YWw7XHJcbiAgLXdlYmtpdC1vcmRlcjogJHZhbDtcclxuICBvcmRlcjogJHZhbDtcclxufVxyXG5cclxuLy8gRmxleCBncm93IGZhY3RvclxyXG4vLyAtIGFwcGxpZXMgdG86IGZsZXggaXRlbXNcclxuLy8gPG51bWJlcj5cclxuQG1peGluIGZsZXgtZ3JvdygkZ3Jvdykge1xyXG4gIC13ZWJraXQtZmxleC1ncm93OiAkZ3JvdztcclxuICAtbW96LWZsZXgtZ3JvdzogJGdyb3c7XHJcbiAgLW1zLWZsZXgtZ3JvdzogJGdyb3c7XHJcbiAgZmxleC1ncm93OiAkZ3JvdztcclxufVxyXG5cclxuLy8gRmxleCBzaHJpbmtcclxuLy8gLSBhcHBsaWVzIHRvOiBmbGV4IGl0ZW0gc2hyaW5rIGZhY3RvclxyXG4vLyA8bnVtYmVyPlxyXG5AbWl4aW4gZmxleC1zaHJpbmsoJHNocmluaykge1xyXG4gIC13ZWJraXQtZmxleC1zaHJpbms6ICRzaHJpbms7XHJcbiAgLW1vei1mbGV4LXNocmluazogJHNocmluaztcclxuICAtbXMtZmxleC1zaHJpbms6ICRzaHJpbms7XHJcbiAgZmxleC1zaHJpbms6ICRzaHJpbms7XHJcbn1cclxuXHJcbi8vIEZsZXggYmFzaXNcclxuLy8gLSB0aGUgaW5pdGlhbCBtYWluIHNpemUgb2YgdGhlIGZsZXggaXRlbVxyXG4vLyAtIGFwcGxpZXMgdG86IGZsZXggaXRlbXNuaXRpYWwgbWFpbiBzaXplIG9mIHRoZSBmbGV4IGl0ZW1cclxuLy8gPHdpZHRoPlxyXG5AbWl4aW4gZmxleC1iYXNpcygkd2lkdGgpIHtcclxuICAtd2Via2l0LWZsZXgtYmFzaXM6ICR3aWR0aDtcclxuICAtbW96LWZsZXgtYmFzaXM6ICR3aWR0aDtcclxuICAtbXMtZmxleC1iYXNpczogJHdpZHRoO1xyXG4gIGZsZXgtYmFzaXM6ICR3aWR0aDtcclxufVxyXG5cclxuLy8gQXhpcyBBbGlnbm1lbnRcclxuLy8gLSBhcHBsaWVzIHRvOiBmbGV4IGNvbnRhaW5lcnNcclxuLy8gZmxleC1zdGFydCB8IGZsZXgtZW5kIHwgY2VudGVyIHwgc3BhY2UtYmV0d2VlbiB8IHNwYWNlLWFyb3VuZFxyXG5AbWl4aW4ganVzdGlmeS1jb250ZW50KCRqdXN0aWZ5KSB7XHJcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5O1xyXG4gIC1tb3otanVzdGlmeS1jb250ZW50OiAkanVzdGlmeTtcclxuICAtbXMtanVzdGlmeS1jb250ZW50OiAkanVzdGlmeTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5O1xyXG4gIC1tcy1mbGV4LXBhY2s6ICRqdXN0aWZ5O1xyXG59XHJcblxyXG4vLyBQYWNraW5nIEZsZXggTGluZXNcclxuLy8gLSBhcHBsaWVzIHRvOiBtdWx0aS1saW5lIGZsZXggY29udGFpbmVyc1xyXG4vLyBmbGV4LXN0YXJ0IHwgZmxleC1lbmQgfCBjZW50ZXIgfCBzcGFjZS1iZXR3ZWVuIHwgc3BhY2UtYXJvdW5kIHwgc3RyZXRjaFxyXG5AbWl4aW4gYWxpZ24tY29udGVudCgkYWxpZ24pIHtcclxuICAtd2Via2l0LWFsaWduLWNvbnRlbnQ6ICRhbGlnbjtcclxuICAtbW96LWFsaWduLWNvbnRlbnQ6ICRhbGlnbjtcclxuICAtbXMtYWxpZ24tY29udGVudDogJGFsaWduO1xyXG4gIGFsaWduLWNvbnRlbnQ6ICRhbGlnbjtcclxufVxyXG5cclxuLy8gQ3Jvc3MtYXhpcyBBbGlnbm1lbnRcclxuLy8gLSBhcHBsaWVzIHRvOiBmbGV4IGNvbnRhaW5lcnNcclxuLy8gZmxleC1zdGFydCB8IGZsZXgtZW5kIHwgY2VudGVyIHwgYmFzZWxpbmUgfCBzdHJldGNoXHJcbkBtaXhpbiBhbGlnbi1pdGVtcygkYWxpZ24pIHtcclxuICAtd2Via2l0LWFsaWduLWl0ZW1zOiAkYWxpZ247XHJcbiAgLW1vei1hbGlnbi1pdGVtczogJGFsaWduO1xyXG4gIC1tcy1hbGlnbi1pdGVtczogJGFsaWduO1xyXG4gIGFsaWduLWl0ZW1zOiAkYWxpZ247XHJcbn1cclxuXHJcbi8vIENyb3NzLWF4aXMgQWxpZ25tZW50XHJcbi8vIC0gYXBwbGllcyB0bzogZmxleCBpdGVtc1xyXG4vLyBhdXRvIHwgZmxleC1zdGFydCB8IGZsZXgtZW5kIHwgY2VudGVyIHwgYmFzZWxpbmUgfCBzdHJldGNoXHJcbkBtaXhpbiBhbGlnbi1zZWxmKCRhbGlnbikge1xyXG4gIC13ZWJraXQtYWxpZ24tc2VsZjogJGFsaWduO1xyXG4gIC1tb3otYWxpZ24tc2VsZjogJGFsaWduO1xyXG4gIC1tcy1hbGlnbi1zZWxmOiAkYWxpZ247XHJcbiAgYWxpZ24tc2VsZjogJGFsaWduO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
  return LibraryOverviewComponent;
})();

/***/ }),

/***/ 5414:
/*!************************************************************************!*\
  !*** ./src/app/modules/library/scanning/library-scanning.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LibraryScanningComponent: () => (/* binding */ LibraryScanningComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 839);
/* harmony import */ var _app_settings_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../app-settings.service */ 5751);
/* harmony import */ var _core_services_api_system_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/api/system.service */ 5800);
/* harmony import */ var _core_services_system_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/system-event.service */ 9118);
/* harmony import */ var _shared_components_message_message_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/message/message.component */ 6325);







let LibraryScanningComponent = /*#__PURE__*/(() => {
  class LibraryScanningComponent {
    constructor() {
      this.scanningInProgress = false;
      this.systemService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_core_services_api_system_service__WEBPACK_IMPORTED_MODULE_1__.SystemService);
      this.systemEventService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_core_services_system_event_service__WEBPACK_IMPORTED_MODULE_2__.SystemEventService);
      this.destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_4__.DestroyRef);
    }
    ngOnInit() {
      // Check if library scanner is running
      this.systemService.getScheduler(_app_settings_service__WEBPACK_IMPORTED_MODULE_0__.appSettings.scanLibrary).pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_5__.takeUntilDestroyed)(this.destroyRef)).subscribe({
        next: scheduler => {
          this.scanningInProgress = scheduler.running;
        }
      });
      // Subscribe on scheduler finish events to check if library scanner is started
      this.systemEventService.schedulerStart$.pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_5__.takeUntilDestroyed)(this.destroyRef)).subscribe({
        next: scheduler => {
          this.scanningInProgress = scheduler.name === _app_settings_service__WEBPACK_IMPORTED_MODULE_0__.appSettings.scanLibrary ? true : this.scanningInProgress;
        }
      });
      // Subscribe on scheduler finish events to check if library scanner is finished
      this.systemEventService.schedulerFinish$.pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_5__.takeUntilDestroyed)(this.destroyRef)).subscribe({
        next: scheduler => {
          this.scanningInProgress = scheduler.name === _app_settings_service__WEBPACK_IMPORTED_MODULE_0__.appSettings.scanLibrary ? false : this.scanningInProgress;
        }
      });
    }
  }
  LibraryScanningComponent.ɵfac = function LibraryScanningComponent_Factory(t) {
    return new (t || LibraryScanningComponent)();
  };
  LibraryScanningComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: LibraryScanningComponent,
    selectors: [["app-library-scanning"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
    decls: 4,
    vars: 1,
    consts: [[3, "visible"], ["aria-hidden", "true", 1, "fa", "fa-spinner", "fa-spin", "mr-2"]],
    template: function LibraryScanningComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-message", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Scanning library...");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("visible", ctx.scanningInProgress);
      }
    },
    dependencies: [_shared_components_message_message_component__WEBPACK_IMPORTED_MODULE_3__.MessageComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
  return LibraryScanningComponent;
})();

/***/ }),

/***/ 6571:
/*!******************************************************************************!*\
  !*** ./src/app/modules/library/show/detail/library-show-detail.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LibraryShowDetailComponent: () => (/* binding */ LibraryShowDetailComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 839);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng-lazyload-image */ 1935);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/api */ 8026);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/button */ 2947);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/confirmdialog */ 4123);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/panel */ 6110);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/table */ 6192);
/* harmony import */ var _app_settings_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../app-settings.service */ 5751);
/* harmony import */ var _core_services_api_settings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/services/api/settings.service */ 1826);
/* harmony import */ var _core_services_api_show_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/services/api/show.service */ 5602);
/* harmony import */ var _core_services_artwork_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/services/artwork.service */ 6570);
/* harmony import */ var _core_services_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/services/message.service */ 5476);
/* harmony import */ var _shared_components_icon_dropdown_icon_dropdown_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/icon-dropdown/icon-dropdown.component */ 8870);
/* harmony import */ var _shared_components_message_message_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/message/message.component */ 6325);
/* harmony import */ var _shared_components_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/components/progress-bar/progress-bar.component */ 2087);
/* harmony import */ var _shared_components_show_settings_show_settings_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/components/show-settings/show-settings.component */ 2827);
/* harmony import */ var _shared_components_subtitle_sync_subtitle_sync_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/components/subtitle-sync/subtitle-sync.component */ 4679);
/* harmony import */ var _shared_models_filetype__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/models/filetype */ 2113);
/* harmony import */ var _shared_models_video__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/models/video */ 3468);
/* harmony import */ var _shared_utils_common_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/utils/common-utils */ 8846);
/* harmony import */ var _shared_utils_path_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/utils/path-utils */ 9455);
/* harmony import */ var _scanning_library_scanning_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../scanning/library-scanning.component */ 5414);
/* harmony import */ var _video_library_video_subtitles_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../video/library-video-subtitles.component */ 5467);


































function LibraryShowDetailComponent_div_7_a_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function LibraryShowDetailComponent_div_7_a_31_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r7.addShowPathToVideoPaths());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](1, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
}
function LibraryShowDetailComponent_div_7_span_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const language_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](language_r9);
  }
}
function LibraryShowDetailComponent_div_7_div_46_ng_template_3_p_button_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "p-button", 48);
  }
  if (rf & 2) {
    const language_r14 = ctx.$implicit;
    const season_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2).$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("label", language_r14)("badge", ctx_r13.getNrOfSubtitles(season_r10.files, language_r14));
  }
}
function LibraryShowDetailComponent_div_7_div_46_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 43)(1, "div", 44)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](4, "app-icon-dropdown")(5, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](7, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](8, LibraryShowDetailComponent_div_7_div_46_ng_template_3_p_button_8_Template, 1, 2, "p-button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](9, "p-button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const season_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](season_r10.seasonName);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](season_r10.seasonPath);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", ctx_r11.show.settings.wantedLanguages);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("badge", ctx_r11.getNrOfVideos(season_r10.files));
  }
}
function LibraryShowDetailComponent_div_7_div_46_ng_template_4_a_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "a", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](1, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const file_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
    const season_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("href", ctx_r18.getPlayVideoUrl(season_r10.seasonPath, file_r17.fileName), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsanitizeUrl"]);
  }
}
function LibraryShowDetailComponent_div_7_div_46_ng_template_4_a_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function LibraryShowDetailComponent_div_7_div_46_ng_template_4_a_6_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r28);
      const file_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
      const season_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r26.openVideoSubtitlesDialog(file_r17.tvdbId, season_r10.seasonPath, file_r17.fileName, file_r17.hardcodedLanguages));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](1, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
}
function LibraryShowDetailComponent_div_7_div_46_ng_template_4_a_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function LibraryShowDetailComponent_div_7_div_46_ng_template_4_a_7_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r32);
      const file_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r30.openSubtitleSyncDialog(ctx_r30.show.getShowEpisodeFilePath(file_r17.tvdbId, ctx_r30.videoFileType), ctx_r30.show.getShowEpisodeFilePath(file_r17.tvdbId, ctx_r30.subtitleFileType, file_r17.fileName)));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](1, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
}
function LibraryShowDetailComponent_div_7_div_46_ng_template_4_a_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function LibraryShowDetailComponent_div_7_div_46_ng_template_4_a_8_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r35);
      const file_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r33.openDeleteSubtitleDialog(file_r17.tvdbId, file_r17.filePath, file_r17.fileName));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](1, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
}
function LibraryShowDetailComponent_div_7_div_46_ng_template_4_td_9_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const language_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](language_r39);
  }
}
function LibraryShowDetailComponent_div_7_div_46_ng_template_4_td_9_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const language_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](language_r40);
  }
}
function LibraryShowDetailComponent_div_7_div_46_ng_template_4_td_9_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "internal");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
}
function LibraryShowDetailComponent_div_7_div_46_ng_template_4_td_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, LibraryShowDetailComponent_div_7_div_46_ng_template_4_td_9_span_1_Template, 2, 1, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](2, LibraryShowDetailComponent_div_7_div_46_ng_template_4_td_9_span_2_Template, 2, 1, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](3, LibraryShowDetailComponent_div_7_div_46_ng_template_4_td_9_span_3_Template, 2, 0, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](4, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const file_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", file_r17.hardcodedLanguages);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", file_r17.embeddedLanguages);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", file_r17.internalLanguagesAvailable);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](file_r17.type);
  }
}
function LibraryShowDetailComponent_div_7_div_46_ng_template_4_td_10_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const file_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](file_r17.language);
  }
}
function LibraryShowDetailComponent_div_7_div_46_ng_template_4_td_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, LibraryShowDetailComponent_div_7_div_46_ng_template_4_td_10_span_1_Template, 2, 1, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](2, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const file_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", file_r17.language);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](file_r17.type);
  }
}
function LibraryShowDetailComponent_div_7_div_46_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "tr")(1, "td", 49)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](4, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](5, LibraryShowDetailComponent_div_7_div_46_ng_template_4_a_5_Template, 2, 1, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](6, LibraryShowDetailComponent_div_7_div_46_ng_template_4_a_6_Template, 2, 0, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](7, LibraryShowDetailComponent_div_7_div_46_ng_template_4_a_7_Template, 2, 0, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](8, LibraryShowDetailComponent_div_7_div_46_ng_template_4_a_8_Template, 2, 0, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](9, LibraryShowDetailComponent_div_7_div_46_ng_template_4_td_9_Template, 6, 4, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](10, LibraryShowDetailComponent_div_7_div_46_ng_template_4_td_10_Template, 4, 2, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const file_r17 = ctx.$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](file_r17.fileName);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", file_r17.isVideo);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r12.libraryEditModeEnabled && file_r17.isVideo);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r12.libraryEditModeEnabled && ctx_r12.manualSubSyncEnabled && file_r17.isSubtitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r12.libraryEditModeEnabled && file_r17.isSubtitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", file_r17.isVideo);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", file_r17.isSubtitle);
  }
}
function LibraryShowDetailComponent_div_7_div_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 10)(1, "div", 39)(2, "p-table", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](3, LibraryShowDetailComponent_div_7_div_46_ng_template_3_Template, 10, 4, "ng-template", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](4, LibraryShowDetailComponent_div_7_div_46_ng_template_4_Template, 11, 7, "ng-template", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const season_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("value", season_r10.files)("autoLayout", true);
  }
}
function LibraryShowDetailComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 9)(1, "div", 10)(2, "div", 11)(3, "div", 12)(4, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](5, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](6, "div", 15)(7, "div", 16)(8, "div", 17)(9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](11, "span", 18)(12, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](13, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](14, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function LibraryShowDetailComponent_div_7_Template_a_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r46);
      const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r45.openSettingsDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](15, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](16, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function LibraryShowDetailComponent_div_7_Template_a_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r46);
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r47.refreshShowDetails());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](17, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](18, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function LibraryShowDetailComponent_div_7_Template_a_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r46);
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r48.openDeleteDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](19, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](20, "div", 16)(21, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](22, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](23, "div", 10)(24, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](26, "div", 26)(27, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](28, "Location:");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](29, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](31, LibraryShowDetailComponent_div_7_a_31_Template, 2, 0, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](32, "div", 26)(33, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](34, "Wanted languages:");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](35, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](36, LibraryShowDetailComponent_div_7_span_36_Template, 2, 1, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](37, "div", 10)(38, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](39, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](40, "div", 32)(41, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](42, "Files");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](43, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](44, "app-progress-bar", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](45, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](46, LibraryShowDetailComponent_div_7_div_46_Template, 5, 2, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("href", ctx_r0.getShowPosterFullSizeUrl(), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("lazyLoad", ctx_r0.getShowPosterThumbnailUrl())("defaultImage", ctx_r0.getPosterPlaceholderUrl());
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx_r0.show.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("href", ctx_r0.getTvdbUrl(), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx_r0.show.overview);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", ctx_r0.show.path, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", !ctx_r0.show.pathInVideoPaths);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", ctx_r0.show.settings.wantedLanguages);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("value", ctx_r0.show.totalSubtitlesAvailable)("total", ctx_r0.show.totalSubtitlesWanted);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", ctx_r0.show.seasons);
  }
}
function LibraryShowDetailComponent_app_show_settings_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "app-show-settings", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("visibleChange", function LibraryShowDetailComponent_app_show_settings_9_Template_app_show_settings_visibleChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r50);
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r49.showShowSettings = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("visible", ctx_r1.showShowSettings)("tvdbId", ctx_r1.show.tvdbId)("title", ctx_r1.show.name)("showSettings", ctx_r1.show.settings);
  }
}
function LibraryShowDetailComponent_app_subtitle_sync_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "app-subtitle-sync", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("visibleChange", function LibraryShowDetailComponent_app_subtitle_sync_10_Template_app_subtitle_sync_visibleChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r52);
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r51.showSubtitleSync = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("visible", ctx_r2.showSubtitleSync)("videoPath", ctx_r2.episodeVideoFilePath)("subtitlePath", ctx_r2.episodeSubtitleFilePath);
  }
}
function LibraryShowDetailComponent_app_library_video_subtitles_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "app-library-video-subtitles", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("visibleChange", function LibraryShowDetailComponent_app_library_video_subtitles_11_Template_app_library_video_subtitles_visibleChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r54);
      const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r53.showVideoSubtitles = $event);
    })("save", function LibraryShowDetailComponent_app_library_video_subtitles_11_Template_app_library_video_subtitles_save_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r54);
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r55.saveHardcodedSubtitles($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("visible", ctx_r3.showVideoSubtitles)("videoSubtitles", ctx_r3.videoSubtitles);
  }
}
let LibraryShowDetailComponent = /*#__PURE__*/(() => {
  class LibraryShowDetailComponent {
    constructor() {
      this.videoFileType = _shared_models_filetype__WEBPACK_IMPORTED_MODULE_10__.FileType.VIDEO;
      this.subtitleFileType = _shared_models_filetype__WEBPACK_IMPORTED_MODULE_10__.FileType.SUBTITLE;
      this.loading = false;
      this.refreshInProgress = false;
      this.showShowSettings = false;
      this.showVideoSubtitles = false;
      this.showSubtitleSync = false;
      this.manualSubSyncEnabled = false;
      this.libraryEditModeEnabled = false;
      this.route = (0,_angular_core__WEBPACK_IMPORTED_MODULE_16__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_17__.ActivatedRoute);
      this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_16__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_17__.Router);
      this.domSanitizer = (0,_angular_core__WEBPACK_IMPORTED_MODULE_16__.inject)(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__.DomSanitizer);
      this.showService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_16__.inject)(_core_services_api_show_service__WEBPACK_IMPORTED_MODULE_2__.ShowService);
      this.artworkService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_16__.inject)(_core_services_artwork_service__WEBPACK_IMPORTED_MODULE_3__.ArtworkService);
      this.settingsService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_16__.inject)(_core_services_api_settings_service__WEBPACK_IMPORTED_MODULE_1__.SettingsService);
      this.messageService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_16__.inject)(_core_services_message_service__WEBPACK_IMPORTED_MODULE_4__.MessageService);
      this.confirmationService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_16__.inject)(primeng_api__WEBPACK_IMPORTED_MODULE_19__.ConfirmationService);
      this.destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_16__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_16__.DestroyRef);
    }
    ngOnInit() {
      this.manualSubSyncEnabled = _app_settings_service__WEBPACK_IMPORTED_MODULE_0__.appSettings.manualSubSync;
      this.libraryEditModeEnabled = _app_settings_service__WEBPACK_IMPORTED_MODULE_0__.appSettings.libraryEditMode;
      this.route.paramMap.pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_20__.takeUntilDestroyed)(this.destroyRef)).subscribe({
        next: paramMap => {
          this.loading = true;
          const tvdbId = Number(paramMap.get('tvdbId'));
          this.getShowDetails(tvdbId);
        }
      });
    }
    getShowPosterFullSizeUrl() {
      return this.artworkService.getShowPosterFullSizeUrl(this.show.tvdbId);
    }
    getShowPosterThumbnailUrl() {
      return this.artworkService.getShowPosterThumbnailUrl(this.show.tvdbId);
    }
    getPosterPlaceholderUrl() {
      return (0,_shared_utils_common_utils__WEBPACK_IMPORTED_MODULE_12__.getPosterPlaceholderUrl)();
    }
    getTvdbUrl() {
      return (0,_shared_utils_common_utils__WEBPACK_IMPORTED_MODULE_12__.getTvdbUrl)(this.show.tvdbId);
    }
    getPlayVideoUrl(filePath, fileName) {
      return this.domSanitizer.bypassSecurityTrustResourceUrl((0,_shared_utils_common_utils__WEBPACK_IMPORTED_MODULE_12__.getPlayVideoUrl)(filePath, fileName));
    }
    openSettingsDialog() {
      this.showShowSettings = true;
    }
    refreshShowDetails() {
      this.refreshInProgress = true;
      this.showService.refreshShowDetails(this.show.tvdbId).pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_20__.takeUntilDestroyed)(this.destroyRef)).subscribe({
        next: () => {
          this.getShowDetails(this.show.tvdbId);
          this.refreshInProgress = false;
        },
        error: () => this.messageService.showErrorMessage('Unable to refresh the show details!')
      });
    }
    openDeleteDialog() {
      this.confirmationService.confirm({
        message: `Are you sure that you want to delete <b>${this.show.name}</b>?`,
        accept: () => {
          this.showService.deleteShow(this.show.tvdbId).pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_20__.takeUntilDestroyed)(this.destroyRef)).subscribe({
            next: () => this.router.navigateByUrl('/library/show'),
            error: () => this.messageService.showErrorMessage(`Unable to delete the show ${this.show.name}!`)
          });
        }
      });
    }
    openDeleteSubtitleDialog(episodeTvdbId, filePath, fileName) {
      this.confirmationService.confirm({
        message: `Are you sure that you want to delete the subtitle<br><b>${fileName}</b>?`,
        accept: () => {
          this.showService.deleteShowEpisodeSubtitle(this.show.tvdbId, episodeTvdbId, (0,_shared_utils_path_utils__WEBPACK_IMPORTED_MODULE_13__.joinPaths)(filePath, fileName)).pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_20__.takeUntilDestroyed)(this.destroyRef)).subscribe({
            next: () => {
              // Reload details
              this.getShowDetails(this.show.tvdbId);
              this.messageService.showSuccessMessage(`Deleted ${fileName}.`);
            },
            error: () => this.messageService.showErrorMessage(`Unable to delete the subtitle ${fileName}!`)
          });
        }
      });
    }
    addShowPathToVideoPaths() {
      const videoPath = {
        videoPath: this.show.path
      };
      this.settingsService.updateGeneralSetting('videoPaths', videoPath).pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_20__.takeUntilDestroyed)(this.destroyRef)).subscribe({
        next: () => {
          this.messageService.showSuccessMessage(`Path ${this.show.path} added to the video paths.`);
          this.getShowDetails(this.show.tvdbId);
        },
        error: error => {
          if (error.status && error.status === 409) {
            this.messageService.showWarningMessage(`Path ${this.show.path} already added to the video paths.`);
          } else {
            this.messageService.showErrorMessage(`Unable to add path ${this.show.path} to the video paths!`);
          }
        }
      });
    }
    openVideoSubtitlesDialog(episodeTvdbId, fileLocation, fileName, languages) {
      this.episodeTvdbId = episodeTvdbId; // keep track for which episode the video subtitles are edited
      this.videoSubtitles = new _shared_models_video__WEBPACK_IMPORTED_MODULE_11__.VideoSubtitles();
      this.videoSubtitles.fileLocation = fileLocation;
      this.videoSubtitles.fileName = fileName;
      this.videoSubtitles.languages = languages;
      this.showVideoSubtitles = true;
    }
    closeVideoSubtitlesDialog() {
      this.showVideoSubtitles = false;
      this.videoSubtitles = null;
      this.episodeTvdbId = null;
    }
    openSubtitleSyncDialog(videoFilePath, subtitleFilePath) {
      this.episodeVideoFilePath = videoFilePath;
      this.episodeSubtitleFilePath = subtitleFilePath;
      this.showSubtitleSync = true;
    }
    saveHardcodedSubtitles(videoSubtitles) {
      this.showService.saveShowEpisodeHardcodedSubtitles(this.show.tvdbId, this.episodeTvdbId, videoSubtitles).pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_20__.takeUntilDestroyed)(this.destroyRef)).subscribe({
        next: () => {
          this.closeVideoSubtitlesDialog();
          this.getShowDetails(this.show.tvdbId);
        },
        error: () => this.messageService.showErrorMessage('Unable to save the harcoded subtitles!')
      });
    }
    getNrOfSubtitles(files, language) {
      let subtitleCount = 0;
      files.forEach(file => {
        if (file.type === _shared_models_filetype__WEBPACK_IMPORTED_MODULE_10__.FileType.SUBTITLE && file.language && file.language === language) {
          // A subtitle file can have only 1 language
          subtitleCount++;
        } else if (file.type === _shared_models_filetype__WEBPACK_IMPORTED_MODULE_10__.FileType.VIDEO) {
          // A video file can have multiple hardcoded languages
          if (file.hardcodedLanguages) {
            file.hardcodedLanguages.forEach(harcodedLanguage => {
              if (harcodedLanguage === language) {
                subtitleCount++;
              }
            });
          }
          // A video file can have multiple embedded languages
          if (file.embeddedLanguages) {
            file.embeddedLanguages.forEach(embeddedLanguage => {
              if (embeddedLanguage === language) {
                subtitleCount++;
              }
            });
          }
        }
      });
      return subtitleCount.toString(); // must be string to be used as badge
    }

    getNrOfVideos(files) {
      let videoCount = 0;
      files.forEach(file => {
        if (file.type === _shared_models_filetype__WEBPACK_IMPORTED_MODULE_10__.FileType.VIDEO) {
          videoCount++;
        }
      });
      return videoCount.toString(); // must be string to be used as badge
    }

    getShowDetails(tvdbId) {
      this.showService.getShowDetails(tvdbId).pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_20__.takeUntilDestroyed)(this.destroyRef)).subscribe({
        next: show => {
          this.show = show;
          this.loading = false;
        },
        error: () => this.messageService.showErrorMessage('Unable to get the show details!')
      });
    }
  }
  LibraryShowDetailComponent.ɵfac = function LibraryShowDetailComponent_Factory(t) {
    return new (t || LibraryShowDetailComponent)();
  };
  LibraryShowDetailComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineComponent"]({
    type: LibraryShowDetailComponent,
    selectors: [["app-library-show-detail"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵStandaloneFeature"]],
    decls: 12,
    vars: 5,
    consts: [[1, "container-lg"], ["header", "Show details"], [3, "visible"], ["aria-hidden", "true", 1, "fa", "fa-spinner", "fa-spin", "mr-2"], ["class", "library-details-container", 4, "ngIf"], ["header", "Confirmation", "icon", "pi pi-exclamation-triangle"], [3, "visible", "tvdbId", "title", "showSettings", "visibleChange", 4, "ngIf"], [3, "visible", "videoPath", "subtitlePath", "visibleChange", 4, "ngIf"], [3, "visible", "videoSubtitles", "visibleChange", "save", 4, "ngIf"], [1, "library-details-container"], [1, "row", "mb-3"], [1, "col-12", "library-details-info-container"], [1, "library-details-info-poster"], ["target", "_blank", 3, "href"], ["title", "Click to view full size", 1, "library-details-info-poster-image", 3, "lazyLoad", "defaultImage"], [1, "library-details-info"], [1, "row"], [1, "col-12", "library-details-info-title"], [1, "icon-group"], ["target", "_blank", 1, "icon-link", 3, "href"], ["aria-hidden", "true", "title", "Click to visit Tvdb", 1, "fa", "fa-television"], [1, "icon-link", 3, "click"], ["aria-hidden", "true", "title", "Click to edit show settings", 1, "fa", "fa-wrench"], ["aria-hidden", "true", "title", "Click to refresh show details", 1, "fa", "fa-repeat"], ["aria-hidden", "true", "title", "Click to delete show from the database", 1, "fa", "fa-trash"], [1, "col-12"], [1, "row", "mb-2"], [1, "col-3"], [1, "col-9", "wrap-text"], ["class", "icon-link", 3, "click", 4, "ngIf"], [1, "col-9"], ["class", "p-tag language mr-2", 4, "ngFor", "ngForOf"], [1, "library-details-files-summary"], [1, "summary-title"], [1, "summary-progress-bar", "ml-auto"], [3, "value", "total"], ["class", "row mb-3", 4, "ngFor", "ngForOf"], ["aria-hidden", "true", "title", "Click to add the show path to the video paths to scan", 1, "fa", "fa-plus"], [1, "p-tag", "language", "mr-2"], [1, "col-12", "library-details-files"], ["styleClass", "p-datatable-sm", 3, "value", "autoLayout"], ["pTemplate", "caption"], ["pTemplate", "body"], [1, "table-caption"], [1, "table-caption-title"], [1, "ml-auto"], ["styleClass", "p-button-static p-button-outlined p-button-sm ml-2", 3, "label", "badge", 4, "ngFor", "ngForOf"], ["label", "video", "styleClass", "p-button-static p-button-outlined p-button-sm ml-2", 3, "badge"], ["styleClass", "p-button-static p-button-outlined p-button-sm ml-2", 3, "label", "badge"], [1, "wrap-text"], ["class", "icon-link", 3, "href", 4, "ngIf"], ["class", "text-right", 4, "ngIf"], [1, "icon-link", 3, "href"], ["aria-hidden", "true", "title", "Click to play video", 1, "fa", "fa-play-circle-o"], ["aria-hidden", "true", "title", "Click to save hardcoded subtitle languages", 1, "fa", "fa-wrench"], ["aria-hidden", "true", "title", "Click to synchronize subtitle", 1, "fa", "fa-refresh"], ["aria-hidden", "true", "title", "Click to remove subtitle", 1, "fa", "fa-trash"], [1, "text-right"], ["class", "p-tag language ml-2", 4, "ngFor", "ngForOf"], ["class", "p-tag language ml-2", 4, "ngIf"], [1, "p-tag", "filetype", "ml-2"], [1, "p-tag", "language", "ml-2"], [3, "visible", "tvdbId", "title", "showSettings", "visibleChange"], [3, "visible", "videoPath", "subtitlePath", "visibleChange"], [3, "visible", "videoSubtitles", "visibleChange", "save"]],
    template: function LibraryShowDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 0)(1, "p-panel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](2, "app-library-scanning");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "app-message", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](4, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](6, "Refreshing show details...");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](7, LibraryShowDetailComponent_div_7_Template, 47, 12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](8, "p-confirmDialog", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](9, LibraryShowDetailComponent_app_show_settings_9_Template, 1, 4, "app-show-settings", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](10, LibraryShowDetailComponent_app_subtitle_sync_10_Template, 1, 3, "app-subtitle-sync", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](11, LibraryShowDetailComponent_app_library_video_subtitles_11_Template, 1, 2, "app-library-video-subtitles", 8);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("visible", ctx.refreshInProgress);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.show);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.showShowSettings);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.showSubtitleSync);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.showVideoSubtitles);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_21__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgFor, primeng_panel__WEBPACK_IMPORTED_MODULE_22__.PanelModule, primeng_panel__WEBPACK_IMPORTED_MODULE_22__.Panel, primeng_api__WEBPACK_IMPORTED_MODULE_19__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_23__.TableModule, primeng_table__WEBPACK_IMPORTED_MODULE_23__.Table, primeng_button__WEBPACK_IMPORTED_MODULE_24__.ButtonModule, primeng_button__WEBPACK_IMPORTED_MODULE_24__.Button, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_25__.ConfirmDialogModule, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_25__.ConfirmDialog, primeng_api__WEBPACK_IMPORTED_MODULE_19__.SharedModule, ng_lazyload_image__WEBPACK_IMPORTED_MODULE_26__.LazyLoadImageModule, ng_lazyload_image__WEBPACK_IMPORTED_MODULE_26__.LazyLoadImageDirective, _scanning_library_scanning_component__WEBPACK_IMPORTED_MODULE_14__.LibraryScanningComponent, _shared_components_message_message_component__WEBPACK_IMPORTED_MODULE_6__.MessageComponent, _shared_components_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_7__.ProgressBarComponent, _shared_components_icon_dropdown_icon_dropdown_component__WEBPACK_IMPORTED_MODULE_5__.IconDropdownComponent, _shared_components_show_settings_show_settings_component__WEBPACK_IMPORTED_MODULE_8__.ShowSettingsComponent, _shared_components_subtitle_sync_subtitle_sync_component__WEBPACK_IMPORTED_MODULE_9__.SubtitleSyncComponent, _video_library_video_subtitles_component__WEBPACK_IMPORTED_MODULE_15__.LibraryVideoSubtitlesComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
  return LibraryShowDetailComponent;
})();

/***/ }),

/***/ 7239:
/*!**********************************************************************************!*\
  !*** ./src/app/modules/library/show/overview/library-show-overview.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LibraryShowOverviewComponent: () => (/* binding */ LibraryShowOverviewComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-lazyload-image */ 1935);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/api */ 8026);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/button */ 2947);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/panel */ 6110);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/table */ 6192);
/* harmony import */ var _app_settings_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../app-settings.service */ 5751);
/* harmony import */ var _core_services_api_show_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/services/api/show.service */ 5602);
/* harmony import */ var _core_services_artwork_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/services/artwork.service */ 6570);
/* harmony import */ var _core_services_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/services/message.service */ 5476);
/* harmony import */ var _core_services_system_event_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/services/system-event.service */ 9118);
/* harmony import */ var _shared_components_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/progress-bar/progress-bar.component */ 2087);
/* harmony import */ var _shared_components_table_filter_table_filter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/table-filter/table-filter.component */ 4610);
/* harmony import */ var _shared_utils_common_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/utils/common-utils */ 8846);
/* harmony import */ var _shared_utils_table_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/utils/table-utils */ 981);
/* harmony import */ var _scanning_library_scanning_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../scanning/library-scanning.component */ 5414);

























function LibraryShowOverviewComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 9)(1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "p-button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "app-table-filter", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("label", ctx_r1.nrOfShows + " shows");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("table", _r0)("tableStateKey", ctx_r1.tableStateKey);
  }
}
function LibraryShowOverviewComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr")(1, "th", 14)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "p-sortIcon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "th", 16)(6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, "Year");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](8, "p-sortIcon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "th", 18)(10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11, "Path");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](12, "p-sortIcon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "th", 20)(14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15, "Wanted subtitles");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](16, "p-sortIcon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "th", 22)(18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](19, "Subtitles");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](20, "p-sortIcon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
}
function LibraryShowOverviewComponent_ng_template_9_img_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "img", 33);
  }
  if (rf & 2) {
    const show_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("lazyLoad", ctx_r5.getShowBannerThumbnailUrl(show_r4.tvdbId))("defaultImage", ctx_r5.getBannerPlaceholderUrl());
  }
}
function LibraryShowOverviewComponent_ng_template_9_span_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const lang_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](lang_r8);
  }
}
const _c0 = function (a1) {
  return ["/library/show/detail", a1];
};
function LibraryShowOverviewComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr")(1, "td")(2, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "span", 25)(5, "span", 26)(6, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](7, LibraryShowOverviewComponent_ng_template_9_img_7_Template, 1, 2, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "td")(9, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10, "Year");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "td")(14, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15, "Path");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "td")(19, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](20, "Wanted subtitles");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](22, LibraryShowOverviewComponent_ng_template_9_span_22_Template, 2, 1, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "td")(24, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](25, "Subtitles");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](27, "app-progress-bar", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const show_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](8, _c0, show_r4.tvdbId))("title", show_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", show_r4.banner);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](show_r4.year);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](show_r4.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", show_r4.settings.wantedLanguages);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", show_r4.totalSubtitlesAvailable)("total", show_r4.totalSubtitlesWanted);
  }
}
const _c1 = function () {
  return {
    showAll: "All"
  };
};
const _c2 = function (a4) {
  return [5, 10, 25, 50, a4];
};
let LibraryShowOverviewComponent = /*#__PURE__*/(() => {
  class LibraryShowOverviewComponent {
    constructor() {
      this.nrOfShows = 0;
      this.loading = false;
      this.globalFilterFields = ['title', 'year', 'path', 'settings.wantedLanguages', 'totalSubtitlesAvailable'];
      this.tableStateKey = 'autosubliminal-library-show-overview-table';
      this.systemEventService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.inject)(_core_services_system_event_service__WEBPACK_IMPORTED_MODULE_4__.SystemEventService);
      this.showService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.inject)(_core_services_api_show_service__WEBPACK_IMPORTED_MODULE_1__.ShowService);
      this.artworkService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.inject)(_core_services_artwork_service__WEBPACK_IMPORTED_MODULE_2__.ArtworkService);
      this.messageService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.inject)(_core_services_message_service__WEBPACK_IMPORTED_MODULE_3__.MessageService);
      this.destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_10__.DestroyRef);
    }
    ngOnInit() {
      // Load overview
      this.loadOverview();
      // Subscribe on scanLibrary finish events to reload the overview
      this.systemEventService.schedulerFinish$.pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_11__.takeUntilDestroyed)(this.destroyRef)).subscribe({
        next: scheduler => {
          if (scheduler.name === _app_settings_service__WEBPACK_IMPORTED_MODULE_0__.appSettings.scanLibrary) {
            this.loadOverview();
          }
        }
      });
    }
    sort(event) {
      (0,_shared_utils_table_utils__WEBPACK_IMPORTED_MODULE_8__.naturalSort)(event);
    }
    getShowBannerThumbnailUrl(tvdbId) {
      return this.artworkService.getShowBannerThumbnailUrl(tvdbId);
    }
    getBannerPlaceholderUrl() {
      return (0,_shared_utils_common_utils__WEBPACK_IMPORTED_MODULE_7__.getBannerPlaceholderUrl)();
    }
    loadOverview() {
      this.loading = true;
      this.showService.getShows().pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_11__.takeUntilDestroyed)(this.destroyRef)).subscribe({
        next: shows => {
          this.shows = shows;
          this.nrOfShows = this.shows.length;
          this.loading = false;
        },
        error: () => this.messageService.showErrorMessage('Unable to get the shows!')
      });
    }
  }
  LibraryShowOverviewComponent.ɵfac = function LibraryShowOverviewComponent_Factory(t) {
    return new (t || LibraryShowOverviewComponent)();
  };
  LibraryShowOverviewComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
    type: LibraryShowOverviewComponent,
    selectors: [["app-library-show-overview"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵStandaloneFeature"]],
    decls: 10,
    vars: 14,
    consts: [[1, "container-lg"], ["header", "Show library"], [1, "row"], [1, "col-12", "library-overview-container"], ["stateStorage", "local", "currentPageReportTemplate", "{first} to {last} of {totalRecords}", "styleClass", "p-datatable-sm p-datatable-gridlines p-datatable-striped p-datatable-responsive-mode", 3, "value", "stateKey", "loading", "autoLayout", "rowHover", "paginator", "rows", "rowsPerPageOptions", "showCurrentPageReport", "globalFilterFields", "customSort", "sortFunction"], ["showTable", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], [1, "caption"], [1, "w-100"], ["styleClass", "p-button-static p-button-outlined", 3, "label"], [1, "ml-auto"], ["matchMode", "contains", 3, "table", "tableStateKey"], ["pSortableColumn", "title"], ["field", "title"], ["pSortableColumn", "year"], ["field", "year"], ["pSortableColumn", "path"], ["field", "path"], ["pSortableColumn", "settings.wantedLanguages"], ["field", "settings.wantedLanguages"], ["pSortableColumn", "totalSubtitlesAvailable"], ["field", "totalSubtitlesAvailable"], [1, "p-column-title"], [1, "p-column-data", "title-banner-container"], [1, "title-banner"], [3, "routerLink", "title"], ["class", "title-banner-image", 3, "lazyLoad", "defaultImage", 4, "ngIf"], [1, "p-column-data"], [1, "p-column-data", "wrap-text"], ["class", "p-tag p-tag-small p-tag-secondary mr-2", 4, "ngFor", "ngForOf"], [1, "w-100", 3, "value", "total"], [1, "title-banner-image", 3, "lazyLoad", "defaultImage"], [1, "p-tag", "p-tag-small", "p-tag-secondary", "mr-2"]],
    template: function LibraryShowOverviewComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0)(1, "p-panel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "app-library-scanning");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 2)(4, "div", 3)(5, "p-table", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("sortFunction", function LibraryShowOverviewComponent_Template_p_table_sortFunction_5_listener($event) {
          return ctx.sort($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](7, LibraryShowOverviewComponent_ng_template_7_Template, 5, 3, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, LibraryShowOverviewComponent_ng_template_8_Template, 21, 0, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](9, LibraryShowOverviewComponent_ng_template_9_Template, 28, 10, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", ctx.shows)("stateKey", ctx.tableStateKey)("loading", ctx.loading)("autoLayout", true)("rowHover", true)("paginator", true)("rows", 10)("rowsPerPageOptions", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](12, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](11, _c1)))("showCurrentPageReport", true)("globalFilterFields", ctx.globalFilterFields)("customSort", true);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgFor, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterLink, primeng_panel__WEBPACK_IMPORTED_MODULE_14__.PanelModule, primeng_panel__WEBPACK_IMPORTED_MODULE_14__.Panel, primeng_api__WEBPACK_IMPORTED_MODULE_15__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_16__.TableModule, primeng_table__WEBPACK_IMPORTED_MODULE_16__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_16__.SortableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_16__.SortIcon, primeng_button__WEBPACK_IMPORTED_MODULE_17__.ButtonModule, primeng_button__WEBPACK_IMPORTED_MODULE_17__.Button, primeng_api__WEBPACK_IMPORTED_MODULE_15__.SharedModule, ng_lazyload_image__WEBPACK_IMPORTED_MODULE_18__.LazyLoadImageModule, ng_lazyload_image__WEBPACK_IMPORTED_MODULE_18__.LazyLoadImageDirective, _scanning_library_scanning_component__WEBPACK_IMPORTED_MODULE_9__.LibraryScanningComponent, _shared_components_table_filter_table_filter_component__WEBPACK_IMPORTED_MODULE_6__.TableFilterComponent, _shared_components_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_5__.ProgressBarComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
  return LibraryShowOverviewComponent;
})();

/***/ }),

/***/ 5467:
/*!****************************************************************************!*\
  !*** ./src/app/modules/library/video/library-video-subtitles.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LibraryVideoSubtitlesComponent: () => (/* binding */ LibraryVideoSubtitlesComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ 8026);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/button */ 2947);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/dialog */ 3311);
/* harmony import */ var _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/components/forms/form-utils */ 9648);
/* harmony import */ var _shared_components_input_multi_select_input_multi_select_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/input/multi-select/input-multi-select.component */ 7628);
/* harmony import */ var _shared_models_video__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/models/video */ 3468);














function LibraryVideoSubtitlesComponent_form_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 3)(1, "div", 4)(2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Select the embedded hardcoded subtitle languages for video file:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4)(7, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "app-input-multi-select", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r0.videoSubtitlesForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.videoSubtitles.fileName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx_r0.languages);
  }
}
function LibraryVideoSubtitlesComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p-button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LibraryVideoSubtitlesComponent_ng_template_2_Template_p_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "p-button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LibraryVideoSubtitlesComponent_ng_template_2_Template_p_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r4.saveVideoSubtitles());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
let LibraryVideoSubtitlesComponent = /*#__PURE__*/(() => {
  class LibraryVideoSubtitlesComponent {
    constructor() {
      this.visible = false;
      this.visibleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter(); // Setup 2-way binding [(visible)]="..."
      this.save = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter(); // allows custom onSave functionality (save)="..." when component is created
      this.fb = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormBuilder);
    }
    ngOnInit() {
      this.languages = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_0__.FormUtils.languageSelectItems();
      this.buildForm();
    }
    saveVideoSubtitles() {
      const videoSubtitles = new _shared_models_video__WEBPACK_IMPORTED_MODULE_2__.VideoSubtitles();
      videoSubtitles.fileLocation = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_0__.FormUtils.getFormControlValue(this.videoSubtitlesForm, 'fileLocation');
      videoSubtitles.fileName = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_0__.FormUtils.getFormControlValue(this.videoSubtitlesForm, 'fileName');
      videoSubtitles.languages = _shared_components_forms_form_utils__WEBPACK_IMPORTED_MODULE_0__.FormUtils.getFormControlValue(this.videoSubtitlesForm, 'languages');
      this.save.emit(videoSubtitles); // ouput the videoSubtitles object on save
    }

    close() {
      this.visibleChange.emit(false);
    }
    buildForm() {
      this.videoSubtitlesForm = this.fb.group({
        fileLocation: [this.videoSubtitles.fileLocation, []],
        fileName: [this.videoSubtitles.fileName, []],
        languages: [this.videoSubtitles.languages || [], []]
      });
    }
  }
  LibraryVideoSubtitlesComponent.ɵfac = function LibraryVideoSubtitlesComponent_Factory(t) {
    return new (t || LibraryVideoSubtitlesComponent)();
  };
  LibraryVideoSubtitlesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: LibraryVideoSubtitlesComponent,
    selectors: [["app-library-video-subtitles"]],
    inputs: {
      visible: "visible",
      videoSubtitles: "videoSubtitles"
    },
    outputs: {
      visibleChange: "visibleChange",
      save: "save"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
    decls: 3,
    vars: 5,
    consts: [["header", "Hardcoded/embedded video subtitles", "styleClass", "p-dialog-video-subtitles", 3, "visible", "modal", "closable", "resizable", "visibleChange"], ["class", "form", 3, "formGroup", 4, "ngIf"], ["pTemplate", "footer"], [1, "form", 3, "formGroup"], [1, "row", "form-row"], [1, "col-12"], [1, "col-12", "file"], ["formControlName", "languages", "placeholder", "Select languages", 3, "options"], ["icon", "pi pi-times", "label", "Cancel", "styleClass", "p-button p-button-secondary", 3, "click"], ["icon", "pi pi-check", "label", "Save", "styleClass", "p-button mr-0", 3, "click"]],
    template: function LibraryVideoSubtitlesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p-dialog", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("visibleChange", function LibraryVideoSubtitlesComponent_Template_p_dialog_visibleChange_0_listener($event) {
          return ctx.visible = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, LibraryVideoSubtitlesComponent_form_1_Template, 9, 3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, LibraryVideoSubtitlesComponent_ng_template_2_Template, 2, 0, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("visible", ctx.visible)("modal", true)("closable", false)("resizable", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.videoSubtitlesForm);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, primeng_dialog__WEBPACK_IMPORTED_MODULE_6__.DialogModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_6__.Dialog, primeng_api__WEBPACK_IMPORTED_MODULE_7__.PrimeTemplate, primeng_button__WEBPACK_IMPORTED_MODULE_8__.ButtonModule, primeng_button__WEBPACK_IMPORTED_MODULE_8__.Button, primeng_api__WEBPACK_IMPORTED_MODULE_7__.SharedModule, _shared_components_input_multi_select_input_multi_select_component__WEBPACK_IMPORTED_MODULE_1__.InputMultiSelectComponent],
    styles: [".p-dialog-video-subtitles {\n  width: 40rem;\n}\n\n.file[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-style: italic;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9saWJyYXJ5L3ZpZGVvL2xpYnJhcnktdmlkZW8tc3VidGl0bGVzLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL3Njc3MvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsWUFBQTtBQURGOztBQUlBO0VBQ0UsZ0JDRFU7RURFVixrQkFBQTtBQURGIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vLi4vc2Nzcy92YXJpYWJsZXMnO1xyXG5cclxuOjpuZy1kZWVwIC5wLWRpYWxvZy12aWRlby1zdWJ0aXRsZXMge1xyXG4gIHdpZHRoOiA0MHJlbTtcclxufVxyXG5cclxuLmZpbGUge1xyXG4gIGZvbnQtd2VpZ2h0OiAkZm9udC1ib2xkO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG4iLCIvLyBHbG9iYWwgdmFyaWFibGVzICh2YXIoLS14eHh4KSkgYXJlIHVzZWQgZnJvbSBpbXBvcnRlZCBwcmltZW5nIHN0eWxlc1xyXG5cclxuLy8gRm9udFxyXG4kZm9udC1zaXplOiAxcmVtO1xyXG4kZm9udC1zaXplLXNtOiAoJGZvbnQtc2l6ZSAqIC44NzUpICFkZWZhdWx0O1xyXG4kZm9udC1kZWZhdWx0OiA0MDA7XHJcbiRmb250LWJvbGQ6IDUwMDtcclxuJGZvbnQtY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xyXG5cclxuLy8gQmFja2dyb3VuZFxyXG4kYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3VyZmFjZS1hKTtcclxuXHJcbi8vTWVkaWEgYm91bmRhcmllc1xyXG4kbWVkaWEtbW9iaWxlLW1heC13aWR0aDogNzY3cHg7XHJcbiRtZWRpYS10YWJsZXQtbWluLXdpZHRoOiA3NjhweDtcclxuJG1lZGlhLXRhYmxldC1tYXgtd2lkdGg6IDk5MXB4O1xyXG4kbWVkaWEtZGVza3RvcC1taW4td2lkdGg6IDk5MnB4O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
  return LibraryVideoSubtitlesComponent;
})();

/***/ }),

/***/ 2087:
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/progress-bar/progress-bar.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProgressBarComponent: () => (/* binding */ ProgressBarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

let ProgressBarComponent = /*#__PURE__*/(() => {
  class ProgressBarComponent {
    constructor() {
      this.value = 0;
      this.total = 100;
      this.showPercentage = false; // if true, percentage is show as text
    }

    get percentage() {
      return Math.round(this.value / this.total * 100);
    }
    getText() {
      // Show text or percentage
      if (this.showPercentage) {
        return `${this.percentage}%`;
      } else {
        return `${this.value} of ${this.total}`;
      }
    }
    getStyleClass() {
      // Get the progress percentage (always round down to nearest multiple of 5)
      const percentage = Math.floor(this.percentage / 5) * 5;
      return `progress-${percentage}`;
    }
    getWidth() {
      return `${this.percentage}%`;
    }
  }
  ProgressBarComponent.ɵfac = function ProgressBarComponent_Factory(t) {
    return new (t || ProgressBarComponent)();
  };
  ProgressBarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ProgressBarComponent,
    selectors: [["app-progress-bar"]],
    inputs: {
      value: "value",
      total: "total",
      showPercentage: "showPercentage"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 4,
    vars: 5,
    consts: [[1, "progress-bar-container"], [1, "progress-bar-text"], [1, "progress-bar-progress"]],
    template: function ProgressBarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getText());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.getStyleClass());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.getWidth());
      }
    },
    styles: [".progress-bar-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  background-color: #f4f4f4;\n  border: 1px solid var(--surface-d);\n  border-radius: 0.25rem;\n  color: #fff;\n}\n.progress-bar-container[_ngcontent-%COMP%]   .progress-bar-text[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  color: #000000;\n  text-align: center;\n  font-size: 0.875rem;\n  margin: 0.0625rem;\n}\n.progress-bar-container[_ngcontent-%COMP%]   .progress-bar-progress[_ngcontent-%COMP%] {\n  min-width: 15%;\n  min-height: 1.5rem;\n  white-space: nowrap;\n  overflow: hidden;\n  border-radius: 0.125rem 0 0 0.125rem;\n}\n\n.progress-0[_ngcontent-%COMP%] {\n  background: linear-gradient(rgb(100, 0, 0), rgb(200, 2, 0));\n  background: -o-linear-gradient(rgb(100, 0, 0), rgb(200, 2, 0));\n}\n\n.progress-5[_ngcontent-%COMP%] {\n  background: linear-gradient(rgb(200, 2, 0), rgb(255, 28, 0));\n  background: -o-linear-gradient(rgb(200, 2, 0), rgb(255, 28, 0));\n}\n\n.progress-10[_ngcontent-%COMP%] {\n  background: linear-gradient(rgb(255, 28, 0), rgb(255, 53, 0));\n  background: -o-linear-gradient(rgb(255, 28, 0), rgb(255, 53, 0));\n}\n\n.progress-15[_ngcontent-%COMP%] {\n  background: linear-gradient(rgb(255, 53, 0), rgb(255, 78, 0));\n  background: -o-linear-gradient(rgb(255, 53, 0), rgb(255, 78, 0));\n}\n\n.progress-20[_ngcontent-%COMP%] {\n  background: linear-gradient(rgb(255, 78, 0), rgb(255, 103, 0));\n  background: -o-linear-gradient(rgb(255, 78, 0), rgb(255, 103, 0));\n}\n\n.progress-25[_ngcontent-%COMP%] {\n  background: linear-gradient(rgb(255, 103, 0), rgb(255, 129, 0));\n  background: -o-linear-gradient(rgb(255, 103, 0), rgb(255, 129, 0));\n}\n\n.progress-30[_ngcontent-%COMP%] {\n  background: linear-gradient(rgb(255, 129, 0), rgb(255, 154, 0));\n  background: -o-linear-gradient(rgb(255, 129, 0), rgb(255, 154, 0));\n}\n\n.progress-35[_ngcontent-%COMP%] {\n  background: linear-gradient(rgb(255, 154, 0), rgb(255, 179, 0));\n  background: -o-linear-gradient(rgb(255, 154, 0), rgb(255, 179, 0));\n}\n\n.progress-40[_ngcontent-%COMP%] {\n  background: linear-gradient(rgb(255, 179, 0), rgb(255, 204, 0));\n  background: -o-linear-gradient(rgb(255, 179, 0), rgb(255, 204, 0));\n}\n\n.progress-45[_ngcontent-%COMP%] {\n  background: linear-gradient(rgb(255, 204, 0), rgb(255, 230, 0));\n  background: -o-linear-gradient(rgb(255, 204, 0), rgb(255, 230, 0));\n}\n\n.progress-50[_ngcontent-%COMP%] {\n  background: linear-gradient(rgb(255, 230, 0), rgb(255, 255, 0));\n  background: -o-linear-gradient(rgb(255, 230, 0), rgb(255, 255, 0));\n}\n\n.progress-55[_ngcontent-%COMP%] {\n  background: linear-gradient(rgb(255, 255, 0), rgb(230, 255, 0));\n  background: -o-linear-gradient(rgb(255, 255, 0), rgb(230, 255, 0));\n}\n\n.progress-60[_ngcontent-%COMP%] {\n  background: linear-gradient(rgb(230, 255, 0), rgb(204, 255, 0));\n  background: -o-linear-gradient(rgb(230, 255, 0), rgb(204, 255, 0));\n}\n\n.progress-65[_ngcontent-%COMP%] {\n  background: linear-gradient(rgb(204, 255, 0), rgb(179, 255, 0));\n  background: -o-linear-gradient(rgb(204, 255, 0), rgb(179, 255, 0));\n}\n\n.progress-70[_ngcontent-%COMP%] {\n  background: linear-gradient(rgb(179, 255, 0), rgb(154, 255, 0));\n  background: -o-linear-gradient(rgb(179, 255, 0), rgb(154, 255, 0));\n}\n\n.progress-75[_ngcontent-%COMP%] {\n  background: linear-gradient(rgb(154, 255, 0), rgb(129, 255, 0));\n  background: -o-linear-gradient(rgb(154, 255, 0), rgb(129, 255, 0));\n}\n\n.progress-80[_ngcontent-%COMP%] {\n  background: linear-gradient(rgb(129, 255, 0), rgb(103, 255, 0));\n  background: -o-linear-gradient(rgb(129, 255, 0), rgb(103, 255, 0));\n}\n\n.progress-85[_ngcontent-%COMP%] {\n  background: linear-gradient(rgb(103, 255, 0), rgb(78, 255, 0));\n  background: -o-linear-gradient(rgb(103, 255, 0), rgb(78, 255, 0));\n}\n\n.progress-90[_ngcontent-%COMP%] {\n  background: linear-gradient(rgb(78, 255, 0), rgb(53, 255, 0));\n  background: -o-linear-gradient(rgb(78, 255, 0), rgb(53, 255, 0));\n}\n\n.progress-95[_ngcontent-%COMP%] {\n  background: linear-gradient(rgb(53, 255, 0), rgb(28, 255, 0));\n  background: -o-linear-gradient(rgb(53, 255, 0), rgb(28, 255, 0));\n}\n\n.progress-100[_ngcontent-%COMP%] {\n  background: linear-gradient(rgb(2, 200, 0), rgb(2, 150, 0));\n  background: -o-linear-gradient(rgb(2, 200, 0), rgb(2, 150, 0));\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcHJvZ3Jlc3MtYmFyL3Byb2dyZXNzLWJhci5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9zY3NzL192YXJpYWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9zY3NzL21peGlucy9fbGluZWFyLWdyYWRpZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtDQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FBRkY7QUFJRTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkNiVztFRGNYLGlCQUFBO0FBRko7QUFLRTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQ0FBQTtBQUhKOztBQVNBO0VFL0JFLDJEQUFBO0VBR0EsOERBQUE7QUYwQkY7O0FBTUE7RUVuQ0UsNERBQUE7RUFHQSwrREFBQTtBRmlDRjs7QUFHQTtFRXZDRSw2REFBQTtFQUdBLGdFQUFBO0FGd0NGOztBQUFBO0VFM0NFLDZEQUFBO0VBR0EsZ0VBQUE7QUYrQ0Y7O0FBSEE7RUUvQ0UsOERBQUE7RUFHQSxpRUFBQTtBRnNERjs7QUFOQTtFRW5ERSwrREFBQTtFQUdBLGtFQUFBO0FGNkRGOztBQVRBO0VFdkRFLCtEQUFBO0VBR0Esa0VBQUE7QUZvRUY7O0FBWkE7RUUzREUsK0RBQUE7RUFHQSxrRUFBQTtBRjJFRjs7QUFmQTtFRS9ERSwrREFBQTtFQUdBLGtFQUFBO0FGa0ZGOztBQWxCQTtFRW5FRSwrREFBQTtFQUdBLGtFQUFBO0FGeUZGOztBQXJCQTtFRXZFRSwrREFBQTtFQUdBLGtFQUFBO0FGZ0dGOztBQXhCQTtFRTNFRSwrREFBQTtFQUdBLGtFQUFBO0FGdUdGOztBQTNCQTtFRS9FRSwrREFBQTtFQUdBLGtFQUFBO0FGOEdGOztBQTlCQTtFRW5GRSwrREFBQTtFQUdBLGtFQUFBO0FGcUhGOztBQWpDQTtFRXZGRSwrREFBQTtFQUdBLGtFQUFBO0FGNEhGOztBQXBDQTtFRTNGRSwrREFBQTtFQUdBLGtFQUFBO0FGbUlGOztBQXZDQTtFRS9GRSwrREFBQTtFQUdBLGtFQUFBO0FGMElGOztBQTFDQTtFRW5HRSw4REFBQTtFQUdBLGlFQUFBO0FGaUpGOztBQTdDQTtFRXZHRSw2REFBQTtFQUdBLGdFQUFBO0FGd0pGOztBQWhEQTtFRTNHRSw2REFBQTtFQUdBLGdFQUFBO0FGK0pGOztBQW5EQTtFRS9HRSwyREFBQTtFQUdBLDhEQUFBO0FGc0tGIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vLi4vc2Nzcy92YXJpYWJsZXMnO1xyXG5AaW1wb3J0ICcuLi8uLi8uLi8uLi9zY3NzL21peGlucy9saW5lYXItZ3JhZGllbnQnO1xyXG5cclxuLnByb2dyZXNzLWJhci1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXN1cmZhY2UtZCk7XHJcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcclxuICBjb2xvcjogI2ZmZjtcclxuXHJcbiAgLnByb2dyZXNzLWJhci10ZXh0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xyXG4gICAgbWFyZ2luOiAwLjA2MjVyZW07XHJcbiAgfVxyXG5cclxuICAucHJvZ3Jlc3MtYmFyLXByb2dyZXNzIHtcclxuICAgIG1pbi13aWR0aDogMTUlO1xyXG4gICAgbWluLWhlaWdodDogMS41cmVtO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjEyNXJlbSAwIDAgMC4xMjVyZW07XHJcbiAgfVxyXG59XHJcblxyXG4vLyBCYXNlZCBvbiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy83MTI4Njc1L2Zyb20tZ3JlZW4tdG8tcmVkLWNvbG9yLWRlcGVuZC1vbi1wZXJjZW50YWdlXHJcblxyXG4ucHJvZ3Jlc3MtMCB7XHJcbiAgQGluY2x1ZGUgbGluZWFyLWdyYWRpZW50KHJnYigxMDAsIDAsIDApLCByZ2IoMjAwLCAyLCAwKSk7XHJcbn1cclxuXHJcbi5wcm9ncmVzcy01IHtcclxuICBAaW5jbHVkZSBsaW5lYXItZ3JhZGllbnQocmdiKDIwMCwgMiwgMCksIHJnYigyNTUsIDI4LCAwKSk7XHJcbn1cclxuXHJcbi5wcm9ncmVzcy0xMCB7XHJcbiAgQGluY2x1ZGUgbGluZWFyLWdyYWRpZW50KHJnYigyNTUsIDI4LCAwKSwgcmdiKDI1NSwgNTMsIDApKTtcclxufVxyXG5cclxuLnByb2dyZXNzLTE1IHtcclxuICBAaW5jbHVkZSBsaW5lYXItZ3JhZGllbnQocmdiKDI1NSwgNTMsIDApLCByZ2IoMjU1LCA3OCwgMCkpO1xyXG59XHJcblxyXG4ucHJvZ3Jlc3MtMjAge1xyXG4gIEBpbmNsdWRlIGxpbmVhci1ncmFkaWVudChyZ2IoMjU1LCA3OCwgMCksIHJnYigyNTUsIDEwMywgMCkpO1xyXG59XHJcblxyXG4ucHJvZ3Jlc3MtMjUge1xyXG4gIEBpbmNsdWRlIGxpbmVhci1ncmFkaWVudChyZ2IoMjU1LCAxMDMsIDApLCByZ2IoMjU1LCAxMjksIDApKTtcclxufVxyXG5cclxuLnByb2dyZXNzLTMwIHtcclxuICBAaW5jbHVkZSBsaW5lYXItZ3JhZGllbnQocmdiKDI1NSwgMTI5LCAwKSwgcmdiKDI1NSwgMTU0LCAwKSk7XHJcbn1cclxuXHJcbi5wcm9ncmVzcy0zNSB7XHJcbiAgQGluY2x1ZGUgbGluZWFyLWdyYWRpZW50KHJnYigyNTUsIDE1NCwgMCksIHJnYigyNTUsIDE3OSwgMCkpO1xyXG59XHJcblxyXG4ucHJvZ3Jlc3MtNDAge1xyXG4gIEBpbmNsdWRlIGxpbmVhci1ncmFkaWVudChyZ2IoMjU1LCAxNzksIDApLCByZ2IoMjU1LCAyMDQsIDApKTtcclxufVxyXG5cclxuLnByb2dyZXNzLTQ1IHtcclxuICBAaW5jbHVkZSBsaW5lYXItZ3JhZGllbnQocmdiKDI1NSwgMjA0LCAwKSwgcmdiKDI1NSwgMjMwLCAwKSk7XHJcbn1cclxuXHJcbi5wcm9ncmVzcy01MCB7XHJcbiAgQGluY2x1ZGUgbGluZWFyLWdyYWRpZW50KHJnYigyNTUsIDIzMCwgMCksIHJnYigyNTUsIDI1NSwgMCkpO1xyXG59XHJcblxyXG4ucHJvZ3Jlc3MtNTUge1xyXG4gIEBpbmNsdWRlIGxpbmVhci1ncmFkaWVudChyZ2IoMjU1LCAyNTUsIDApLCByZ2IoMjMwLCAyNTUsIDApKTtcclxufVxyXG5cclxuLnByb2dyZXNzLTYwIHtcclxuICBAaW5jbHVkZSBsaW5lYXItZ3JhZGllbnQocmdiKDIzMCwgMjU1LCAwKSwgcmdiKDIwNCwgMjU1LCAwKSk7XHJcbn1cclxuXHJcbi5wcm9ncmVzcy02NSB7XHJcbiAgQGluY2x1ZGUgbGluZWFyLWdyYWRpZW50KHJnYigyMDQsIDI1NSwgMCksIHJnYigxNzksIDI1NSwgMCkpO1xyXG59XHJcblxyXG4ucHJvZ3Jlc3MtNzAge1xyXG4gIEBpbmNsdWRlIGxpbmVhci1ncmFkaWVudChyZ2IoMTc5LCAyNTUsIDApLCByZ2IoMTU0LCAyNTUsIDApKTtcclxufVxyXG5cclxuLnByb2dyZXNzLTc1IHtcclxuICBAaW5jbHVkZSBsaW5lYXItZ3JhZGllbnQocmdiKDE1NCwgMjU1LCAwKSwgcmdiKDEyOSwgMjU1LCAwKSk7XHJcbn1cclxuXHJcbi5wcm9ncmVzcy04MCB7XHJcbiAgQGluY2x1ZGUgbGluZWFyLWdyYWRpZW50KHJnYigxMjksIDI1NSwgMCksIHJnYigxMDMsIDI1NSwgMCkpO1xyXG59XHJcblxyXG4ucHJvZ3Jlc3MtODUge1xyXG4gIEBpbmNsdWRlIGxpbmVhci1ncmFkaWVudChyZ2IoMTAzLCAyNTUsIDApLCByZ2IoNzgsIDI1NSwgMCkpO1xyXG59XHJcblxyXG4ucHJvZ3Jlc3MtOTAge1xyXG4gIEBpbmNsdWRlIGxpbmVhci1ncmFkaWVudChyZ2IoNzgsIDI1NSwgMCksIHJnYig1MywgMjU1LCAwKSk7XHJcbn1cclxuXHJcbi5wcm9ncmVzcy05NSB7XHJcbiAgQGluY2x1ZGUgbGluZWFyLWdyYWRpZW50KHJnYig1MywgMjU1LCAwKSwgcmdiKDI4LCAyNTUsIDApKTtcclxufVxyXG5cclxuLnByb2dyZXNzLTEwMCB7XHJcbiAgQGluY2x1ZGUgbGluZWFyLWdyYWRpZW50KHJnYigyLCAyMDAsIDApLCByZ2IoMiwgMTUwLCAwKSk7XHJcbn1cclxuIiwiLy8gR2xvYmFsIHZhcmlhYmxlcyAodmFyKC0teHh4eCkpIGFyZSB1c2VkIGZyb20gaW1wb3J0ZWQgcHJpbWVuZyBzdHlsZXNcclxuXHJcbi8vIEZvbnRcclxuJGZvbnQtc2l6ZTogMXJlbTtcclxuJGZvbnQtc2l6ZS1zbTogKCRmb250LXNpemUgKiAuODc1KSAhZGVmYXVsdDtcclxuJGZvbnQtZGVmYXVsdDogNDAwO1xyXG4kZm9udC1ib2xkOiA1MDA7XHJcbiRmb250LWNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcclxuXHJcbi8vIEJhY2tncm91bmRcclxuJGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1cmZhY2UtYSk7XHJcblxyXG4vL01lZGlhIGJvdW5kYXJpZXNcclxuJG1lZGlhLW1vYmlsZS1tYXgtd2lkdGg6IDc2N3B4O1xyXG4kbWVkaWEtdGFibGV0LW1pbi13aWR0aDogNzY4cHg7XHJcbiRtZWRpYS10YWJsZXQtbWF4LXdpZHRoOiA5OTFweDtcclxuJG1lZGlhLWRlc2t0b3AtbWluLXdpZHRoOiA5OTJweDtcclxuIiwiQG1peGluIGxpbmVhci1ncmFkaWVudCgkZGlyZWN0aW9uLCAkbGlzdC4uLikge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgkZGlyZWN0aW9uLCAkbGlzdCk7XHJcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoJGRpcmVjdGlvbiwgJGxpc3QpO1xyXG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KCRkaXJlY3Rpb24sICRsaXN0KTtcclxuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoJGRpcmVjdGlvbiwgJGxpc3QpO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
  return ProgressBarComponent;
})();

/***/ })

}]);
//# sourceMappingURL=840.bce8efc8bce3a611.js.map