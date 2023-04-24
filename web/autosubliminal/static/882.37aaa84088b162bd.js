"use strict";
(self["webpackChunkautosubliminal"] = self["webpackChunkautosubliminal"] || []).push([[882],{

/***/ 5570:
/*!**********************************************************************!*\
  !*** ./src/app/modules/home/downloaded/home-downloaded.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeDownloadedComponent": () => (/* binding */ HomeDownloadedComponent)
/* harmony export */ });
/* harmony import */ var _shared_models_video__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/models/video */ 6716);
/* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/utils/string-utils */ 6584);
/* harmony import */ var _shared_utils_table_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/utils/table-utils */ 6020);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _core_services_api_item_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/api/item.service */ 4158);
/* harmony import */ var _core_services_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/services/message.service */ 1245);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/table */ 7485);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/dropdown */ 8992);
/* harmony import */ var _shared_components_icon_dropdown_icon_dropdown_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/icon-dropdown/icon-dropdown.component */ 1738);
/* harmony import */ var _shared_components_table_filter_table_filter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/table-filter/table-filter.component */ 1450);












function HomeDownloadedComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 5)(1, "div", 6)(2, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "p-dropdown", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onChange", function HomeDownloadedComponent_ng_template_2_Template_p_dropdown_onChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](1);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](_r0.filter($event.value, "type", "equals"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "app-table-filter", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("options", ctx_r1.videoTypes);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("table", _r0)("tableStateKey", ctx_r1.tableStateKey);
  }
}
function HomeDownloadedComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr")(1, "th", 11)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "p-sortIcon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "th", 13)(6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Season");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "p-sortIcon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "th", 15)(10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "Episode");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](12, "p-sortIcon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "th", 17)(14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "Source");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](16, "p-sortIcon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "th", 19)(18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, "Quality");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](20, "p-sortIcon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "th", 21)(22, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, "Codec");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](24, "p-sortIcon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "th", 23)(26, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, "Group");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](28, "p-sortIcon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "th", 25)(30, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31, "Lang");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](32, "p-sortIcon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "th", 27)(34, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](35, "Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](36, "p-sortIcon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
}
function HomeDownloadedComponent_ng_template_4_li_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "li")(1, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Video path:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const downloadedItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](downloadedItem_r6.videoFilePath);
  }
}
function HomeDownloadedComponent_ng_template_4_li_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "li")(1, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Video name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const downloadedItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](downloadedItem_r6.videoFileName);
  }
}
function HomeDownloadedComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr")(1, "td")(2, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "span", 30)(5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "app-icon-dropdown");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, HomeDownloadedComponent_ng_template_4_li_8_Template, 5, 1, "li", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, HomeDownloadedComponent_ng_template_4_li_9_Template, 5, 1, "li", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "li")(11, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "Subtitle:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "li")(16, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "Provider:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "td")(21, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, "Season");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "td")(26, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, "Episode");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "td")(31, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32, "Source");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "td")(36, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](37, "Quality");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "td")(41, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](42, "Codec");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "td")(46, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](47, "Group");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](50, "td")(51, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](52, "Lang");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](53, "span", 30)(54, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](56, "td")(57, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](58, "Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](59, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const downloadedItem_r6 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](downloadedItem_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", downloadedItem_r6.videoFilePath);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", downloadedItem_r6.videoFileName);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](downloadedItem_r6.subtitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](downloadedItem_r6.provider);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](downloadedItem_r6.season);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](downloadedItem_r6.episode);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r3.displayUpperCase(downloadedItem_r6.source));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r3.displayUpperCase(downloadedItem_r6.quality));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r3.displayUpperCase(downloadedItem_r6.codec));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r3.displayUpperCase(downloadedItem_r6.releaseGroup));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](downloadedItem_r6.language);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](downloadedItem_r6.timestampFormatted);
  }
}
const _c0 = function () {
  return {
    showAll: "All"
  };
};
const _c1 = function (a4) {
  return [5, 10, 25, 50, a4];
};
let HomeDownloadedComponent = /*#__PURE__*/(() => {
  class HomeDownloadedComponent {
    constructor(itemService, messageService) {
      this.itemService = itemService;
      this.messageService = messageService;
      this.loading = false;
      this.globalFilterFields = ['name', 'season', 'episode', 'source', 'quality', 'codec', 'releaseGroup', 'languages', 'timestamp'];
      this.tableStateKey = 'autosubliminal-home-downloaded-table';
    }
    ngOnInit() {
      this.buildSelectItems();
      this.loadDownloadedItems();
    }
    buildSelectItems() {
      // videoTypes
      this.videoTypes = [];
      this.videoTypes.push({
        label: 'All',
        value: null
      });
      Object.values(_shared_models_video__WEBPACK_IMPORTED_MODULE_0__.VideoType).forEach(videoType => this.videoTypes.push({
        label: (0,_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_1__.capitalizeFirstChar)(videoType),
        value: videoType
      }));
    }
    loadDownloadedItems() {
      this.loading = true;
      this.itemService.getDownloadedItems().subscribe({
        next: downloadedItems => {
          this.downloadedItems = downloadedItems;
          this.loading = false;
        },
        error: () => {
          this.loading = false;
          this.messageService.showErrorMessage('Unable to get the downloaded items');
        }
      });
    }
    sort(event) {
      (0,_shared_utils_table_utils__WEBPACK_IMPORTED_MODULE_2__.naturalSort)(event);
    }
    displayUpperCase(value) {
      return (0,_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_1__.displayValue)(value, 'N/A', true);
    }
  }
  HomeDownloadedComponent.ɵfac = function HomeDownloadedComponent_Factory(t) {
    return new (t || HomeDownloadedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_services_api_item_service__WEBPACK_IMPORTED_MODULE_3__.ItemService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_services_message_service__WEBPACK_IMPORTED_MODULE_4__.MessageService));
  };
  HomeDownloadedComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: HomeDownloadedComponent,
    selectors: [["app-home-downloaded"]],
    inputs: {
      downloadedItems: "downloadedItems"
    },
    decls: 5,
    vars: 14,
    consts: [["stateStorage", "local", "currentPageReportTemplate", "{first} to {last} of {totalRecords}", "styleClass", "p-datatable-sm p-datatable-gridlines p-datatable-striped p-datatable-responsive-mode", 3, "value", "stateKey", "loading", "autoLayout", "rowHover", "paginator", "rows", "rowsPerPageOptions", "showCurrentPageReport", "globalFilterFields", "customSort", "sortFunction"], ["downloadedTable", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], [1, "caption"], [1, "p-inputgroup", "dropdown"], [1, "p-inputgroup-addon"], [3, "options", "onChange"], [1, "ml-auto"], ["matchMode", "contains", 3, "table", "tableStateKey"], ["pSortableColumn", "name"], ["field", "name"], ["pSortableColumn", "season"], ["field", "season"], ["pSortableColumn", "episode"], ["field", "episode"], ["pSortableColumn", "source"], ["field", "source"], ["pSortableColumn", "quality"], ["field", "quality"], ["pSortableColumn", "codec"], ["field", "codec"], ["pSortableColumn", "releaseGroup"], ["field", "releaseGroup"], ["pSortableColumn", "languages"], ["field", "languages"], ["pSortableColumn", "timestamp"], ["field", "timestamp"], [1, "p-column-title"], [1, "p-column-data"], [4, "ngIf"], [1, "icon-dropdown-title"], [1, "p-tag", "language"]],
    template: function HomeDownloadedComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p-table", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("sortFunction", function HomeDownloadedComponent_Template_p_table_sortFunction_0_listener($event) {
          return ctx.sort($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, HomeDownloadedComponent_ng_template_2_Template, 7, 3, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, HomeDownloadedComponent_ng_template_3_Template, 37, 0, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, HomeDownloadedComponent_ng_template_4_Template, 61, 13, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx.downloadedItems)("stateKey", ctx.tableStateKey)("loading", ctx.loading)("autoLayout", true)("rowHover", true)("paginator", true)("rows", 10)("rowsPerPageOptions", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](12, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](11, _c0)))("showCurrentPageReport", true)("globalFilterFields", ctx.globalFilterFields)("customSort", true);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, primeng_api__WEBPACK_IMPORTED_MODULE_9__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_10__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_10__.SortableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_10__.SortIcon, primeng_dropdown__WEBPACK_IMPORTED_MODULE_11__.Dropdown, _shared_components_icon_dropdown_icon_dropdown_component__WEBPACK_IMPORTED_MODULE_5__.IconDropdownComponent, _shared_components_table_filter_table_filter_component__WEBPACK_IMPORTED_MODULE_6__.TableFilterComponent],
    styles: [".p-datatable-auto-layout > .p-datatable-wrapper {\n  overflow-x: visible !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9ob21lL2Rvd25sb2FkZWQvaG9tZS1kb3dubG9hZGVkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsOEJBQUE7QUFBRiIsInNvdXJjZXNDb250ZW50IjpbIi8vIEFsbG93IGRyb3Bkb3duIG92ZXJmbG93IHdpdGhpbiB0YWJsZVxyXG46Om5nLWRlZXAucC1kYXRhdGFibGUtYXV0by1sYXlvdXQ+LnAtZGF0YXRhYmxlLXdyYXBwZXIge1xyXG4gIG92ZXJmbG93LXg6IHZpc2libGUgIWltcG9ydGFudDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
  return HomeDownloadedComponent;
})();

/***/ }),

/***/ 4601:
/*!*****************************************************!*\
  !*** ./src/app/modules/home/home-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeRoutingModule": () => (/* binding */ HomeRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ 5493);
/* harmony import */ var _search_home_search_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search/home-search.component */ 2207);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);





const routes = [{
  path: '',
  component: _home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
}, {
  path: 'search',
  component: _search_home_search_component__WEBPACK_IMPORTED_MODULE_1__.HomeSearchComponent
}, {
  path: '**',
  redirectTo: ''
}];
let HomeRoutingModule = /*#__PURE__*/(() => {
  class HomeRoutingModule {}
  HomeRoutingModule.ɵfac = function HomeRoutingModule_Factory(t) {
    return new (t || HomeRoutingModule)();
  };
  HomeRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: HomeRoutingModule
  });
  HomeRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
  return HomeRoutingModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](HomeRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 5493:
/*!************************************************!*\
  !*** ./src/app/modules/home/home.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/panel */ 4266);
/* harmony import */ var _wanted_home_wanted_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wanted/home-wanted.component */ 8030);
/* harmony import */ var _downloaded_home_downloaded_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./downloaded/home-downloaded.component */ 5570);




let HomeComponent = /*#__PURE__*/(() => {
  class HomeComponent {
    constructor() {
      this.total = 0;
      this.totalEpisodes = 0;
      this.totalMovies = 0;
    }
    getTotals(wantedTotals) {
      this.total = wantedTotals.total;
      this.totalEpisodes = wantedTotals.totalEpisodes;
      this.totalMovies = wantedTotals.totalMovies;
    }
    getWantedHeader() {
      return `Wanted subtitles (${this.total}) - Episodes (${this.totalEpisodes}) - Movies (${this.totalMovies})`;
    }
  }
  HomeComponent.ɵfac = function HomeComponent_Factory(t) {
    return new (t || HomeComponent)();
  };
  HomeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: HomeComponent,
    selectors: [["app-home"]],
    decls: 5,
    vars: 1,
    consts: [[1, "container-lg"], ["styleClass", "mb-3", 3, "header"], [3, "totals"], ["header", "Downloaded subtitles"]],
    template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "p-panel", 1)(2, "app-home-wanted", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("totals", function HomeComponent_Template_app_home_wanted_totals_2_listener($event) {
          return ctx.getTotals($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p-panel", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "app-home-downloaded");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("header", ctx.getWantedHeader());
      }
    },
    dependencies: [primeng_panel__WEBPACK_IMPORTED_MODULE_3__.Panel, _wanted_home_wanted_component__WEBPACK_IMPORTED_MODULE_0__.HomeWantedComponent, _downloaded_home_downloaded_component__WEBPACK_IMPORTED_MODULE_1__.HomeDownloadedComponent],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
  return HomeComponent;
})();

/***/ }),

/***/ 4882:
/*!*********************************************!*\
  !*** ./src/app/modules/home/home.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeModule": () => (/* binding */ HomeModule)
/* harmony export */ });
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);
/* harmony import */ var _downloaded_home_downloaded_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./downloaded/home-downloaded.component */ 5570);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-routing.module */ 4601);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ 5493);
/* harmony import */ var _search_home_search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search/home-search.component */ 2207);
/* harmony import */ var _wanted_home_wanted_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wanted/home-wanted.component */ 8030);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);







let HomeModule = /*#__PURE__*/(() => {
  class HomeModule {}
  HomeModule.ɵfac = function HomeModule_Factory(t) {
    return new (t || HomeModule)();
  };
  HomeModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
    type: HomeModule
  });
  HomeModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
    imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _home_routing_module__WEBPACK_IMPORTED_MODULE_2__.HomeRoutingModule]
  });
  return HomeModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](HomeModule, {
    declarations: [_home_component__WEBPACK_IMPORTED_MODULE_3__.HomeComponent, _wanted_home_wanted_component__WEBPACK_IMPORTED_MODULE_5__.HomeWantedComponent, _downloaded_home_downloaded_component__WEBPACK_IMPORTED_MODULE_1__.HomeDownloadedComponent, _search_home_search_component__WEBPACK_IMPORTED_MODULE_4__.HomeSearchComponent],
    imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _home_routing_module__WEBPACK_IMPORTED_MODULE_2__.HomeRoutingModule]
  });
})();

/***/ }),

/***/ 2207:
/*!**************************************************************!*\
  !*** ./src/app/modules/home/search/home-search.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeSearchComponent": () => (/* binding */ HomeSearchComponent)
/* harmony export */ });
/* harmony import */ var _app_settings_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../app-settings.service */ 1205);
/* harmony import */ var _shared_utils_common_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/utils/common-utils */ 3695);
/* harmony import */ var _shared_utils_number_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/utils/number-utils */ 3792);
/* harmony import */ var _shared_utils_path_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/utils/path-utils */ 486);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _core_services_api_item_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/services/api/item.service */ 4158);
/* harmony import */ var _core_services_api_subtitle_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/services/api/subtitle.service */ 7926);
/* harmony import */ var _core_services_message_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/services/message.service */ 1245);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/panel */ 4266);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/table */ 7485);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/dialog */ 1837);
/* harmony import */ var _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/loading/loading.component */ 5102);
/* harmony import */ var _shared_components_message_message_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/components/message/message.component */ 4250);
/* harmony import */ var _shared_components_subtitle_sync_subtitle_sync_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/components/subtitle-sync/subtitle-sync.component */ 8682);



















function HomeSearchComponent_p_panel_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 23)(1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Manual search for subtitles");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div")(4, "p-button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("onClick", function HomeSearchComponent_p_panel_1_ng_template_1_Template_p_button_onClick_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r6.searchSubtitles());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", ctx_r3.searchInProgress);
  }
}
function HomeSearchComponent_p_panel_1_ng_template_35_th_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "th");
  }
}
function HomeSearchComponent_p_panel_1_ng_template_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr")(1, "th", 26)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "Score");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "p-sortIcon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "th", 28)(6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, "Provider");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](8, "p-sortIcon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10, "Preview");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](11, "th")(12, "th")(13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](14, HomeSearchComponent_p_panel_1_ng_template_35_th_14_Template, 1, 0, "th", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](15, "th")(16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r4.manualSubSyncEnabled);
  }
}
function HomeSearchComponent_p_panel_1_ng_template_36_a_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HomeSearchComponent_p_panel_1_ng_template_36_a_7_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r18);
      const subtitle_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r16.showScoreDetails(subtitle_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function HomeSearchComponent_p_panel_1_ng_template_36_a_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HomeSearchComponent_p_panel_1_ng_template_36_a_8_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r21);
      const subtitle_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r19.showScoreDetails(subtitle_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function HomeSearchComponent_p_panel_1_ng_template_36_li_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const release_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](release_r22);
  }
}
function HomeSearchComponent_p_panel_1_ng_template_36_i_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "i", 56);
  }
}
function HomeSearchComponent_p_panel_1_ng_template_36_i_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "i", 57);
  }
}
const _c0 = function (a0) {
  return {
    "disabled": a0
  };
};
function HomeSearchComponent_p_panel_1_ng_template_36_td_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 41)(1, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Sync subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "span", 31)(4, "a", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HomeSearchComponent_p_panel_1_ng_template_36_td_44_Template_a_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r24);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r23.syncSubtitle());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](5, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](1, _c0, !ctx_r15.savedSubtitle));
  }
}
function HomeSearchComponent_p_panel_1_ng_template_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr")(1, "td")(2, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "Score");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "span", 31)(5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](7, HomeSearchComponent_p_panel_1_ng_template_36_a_7_Template, 2, 0, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, HomeSearchComponent_p_panel_1_ng_template_36_a_8_Template, 2, 0, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "td")(10, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11, "Provider");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "span", 31)(13, "span", 33)(14, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "ul", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](17, HomeSearchComponent_p_panel_1_ng_template_36_li_17_Template, 2, 1, "li", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "td")(19, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](20, "Preview");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "div", 37)(22, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HomeSearchComponent_p_panel_1_ng_template_36_Template_a_click_22_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r26);
      const subtitle_r9 = restoredCtx.$implicit;
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r25.showSubtitlePreview(subtitle_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](23, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](24, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "td", 41)(26, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](27, "Visit website");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "span", 31)(29, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](30, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](31, "td", 41)(32, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](33, "Save subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](34, "span", 31)(35, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HomeSearchComponent_p_panel_1_ng_template_36_Template_a_click_35_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r26);
      const subtitle_r9 = restoredCtx.$implicit;
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r27.saveSubtitle(subtitle_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](36, HomeSearchComponent_p_panel_1_ng_template_36_i_36_Template, 1, 0, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](37, HomeSearchComponent_p_panel_1_ng_template_36_i_37_Template, 1, 0, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](38, "td", 41)(39, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](40, "Delete subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](41, "span", 31)(42, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HomeSearchComponent_p_panel_1_ng_template_36_Template_a_click_42_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r26);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r28.deleteSubtitle());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](43, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](44, HomeSearchComponent_p_panel_1_ng_template_36_td_44_Template, 6, 3, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](45, "td", 41)(46, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](47, "Play video");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](48, "span", 31)(49, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](50, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](51, "td", 41)(52, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](53, "Post process");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](54, "span", 31)(55, "a", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HomeSearchComponent_p_panel_1_ng_template_36_Template_a_click_55_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r26);
      const subtitle_r9 = restoredCtx.$implicit;
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r29.postProcess(subtitle_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](56, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const subtitle_r9 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](subtitle_r9.score);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", subtitle_r9.score < ctx_r5.scores.min);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", subtitle_r9.score >= ctx_r5.scores.min);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", subtitle_r9.providerName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", subtitle_r9.releases);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("innerHTML", subtitle_r9.contentPreview, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("href", ctx_r5.getWebsiteUrl(subtitle_r9), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", subtitle_r9 !== ctx_r5.savedSubtitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", subtitle_r9 === ctx_r5.savedSubtitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r5.manualSubSyncEnabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("href", ctx_r5.getPlayVideoUrl(), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](12, _c0, !ctx_r5.savedSubtitle));
  }
}
function HomeSearchComponent_p_panel_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p-panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, HomeSearchComponent_p_panel_1_ng_template_1_Template, 5, 1, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "app-message", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "Searching subtitles...");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 11)(7, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8, "Wanted item");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "div", 13)(10, "div", 14)(11, "div", 15)(12, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13, "File name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "div", 17)(15, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "div", 14)(18, "div", 15)(19, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](20, "File path:");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "div", 17)(22, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "div", 14)(25, "div", 15)(26, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](27, "Language:");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "div", 17)(29, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](31, "div", 11)(32, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](34, "p-table", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](35, HomeSearchComponent_p_panel_1_ng_template_35_Template, 17, 1, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](36, HomeSearchComponent_p_panel_1_ng_template_36_Template, 57, 14, "ng-template", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](37, "p-footer")(38, "div")(39, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HomeSearchComponent_p_panel_1_Template_button_click_39_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r31);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r30.goHome());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("visible", ctx_r0.searchInProgress);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r0.wantedItem.videoFileName);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r0.wantedItem.videoFilePath);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r0.language);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("Subtitles\u00A0(", ctx_r0.subtitles.length, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", ctx_r0.subtitles)("loading", ctx_r0.searchInProgress)("autoLayout", true)("rowHover", true);
  }
}
function HomeSearchComponent_div_6_li_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const scoreMatch_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](scoreMatch_r35);
  }
}
function HomeSearchComponent_div_6_i_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "i", 62);
  }
}
function HomeSearchComponent_div_6_i_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "i", 63);
  }
}
function HomeSearchComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 3)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Matches:");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, HomeSearchComponent_div_6_li_4_Template, 2, 1, "li", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](6, "i", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, HomeSearchComponent_div_6_i_8_Template, 1, 0, "i", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](9, HomeSearchComponent_div_6_i_9_Template, 1, 0, "i", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r1.getScoreMatches());
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" Calculated score: ", ctx_r1.score, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.score < ctx_r1.scores.min);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.score >= ctx_r1.scores.min);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("Minimum required default score: ", ctx_r1.scores.default, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("Minimum required configured score: ", ctx_r1.scores.min, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("Maximum score: ", ctx_r1.scores.max, "");
  }
}
function HomeSearchComponent_app_subtitle_sync_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "app-subtitle-sync", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("visibleChange", function HomeSearchComponent_app_subtitle_sync_7_Template_app_subtitle_sync_visibleChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r37);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r36.showSubtitleSyncDialog = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("visible", ctx_r2.showSubtitleSyncDialog)("videoPath", ctx_r2.subtitleSyncVideoPath)("subtitlePath", ctx_r2.subtitleSyncSubtitlePath);
  }
}
let HomeSearchComponent = /*#__PURE__*/(() => {
  class HomeSearchComponent {
    constructor(route, router, domSanitizer, itemService, subtitleService, messageService) {
      this.route = route;
      this.router = router;
      this.domSanitizer = domSanitizer;
      this.itemService = itemService;
      this.subtitleService = subtitleService;
      this.messageService = messageService;
      this.subtitles = []; // default empty array so we are able to show the number of subtitles
      this.manualSubSyncEnabled = false;
      this.searchInProgress = false;
      this.postProcessInProgress = false;
      this.showScoreDetailsDialog = false;
      this.showSubtitlePreviewDialog = false;
      this.showSubtitleSyncDialog = false;
    }
    ngOnInit() {
      this.manualSubSyncEnabled = _app_settings_service__WEBPACK_IMPORTED_MODULE_0__.appSettings.manualSubSync;
      this.route.queryParamMap.subscribe({
        next: queryParamMap => {
          const wantedItemId = (0,_shared_utils_number_utils__WEBPACK_IMPORTED_MODULE_2__.toNumber)(queryParamMap.get('wantedItemId'));
          this.language = queryParamMap.get('language');
          this.itemService.getWantedItem(wantedItemId).subscribe({
            next: wantedItem => {
              this.wantedItem = wantedItem;
              this.scores = this.wantedItem.isEpisode ? _app_settings_service__WEBPACK_IMPORTED_MODULE_0__.appSettings.episodeScores : _app_settings_service__WEBPACK_IMPORTED_MODULE_0__.appSettings.movieScores;
              this.searchSubtitles();
            },
            error: () => this.messageService.showErrorMessage(`Unable to get the wanted item with id ${wantedItemId}`)
          });
        }
      });
    }
    ngOnDestroy() {
      // Make sure the save subtitle is removed if flow is not properly handled by the user
      if (this.savedSubtitle) {
        // No specific handling in subscribe as we want to do it in the background
        this.itemService.deleteWantedItemSubtitle(this.wantedItem.id).subscribe();
      }
    }
    searchSubtitles() {
      this.searchInProgress = true;
      this.subtitles = []; // reset subtitles
      this.itemService.searchWantedItemSubtitles(this.wantedItem.id, this.language).subscribe({
        next: subtitles => {
          this.subtitles = subtitles;
          this.searchInProgress = false;
          this.messageService.showInfoMessage(`${this.subtitles.length} subtitles found.`);
        },
        error: () => {
          this.searchInProgress = false;
          this.messageService.showErrorMessage('Unable to search subtitles!');
        }
      });
    }
    showScoreDetails(subtitle) {
      this.score = subtitle.score;
      this.matches = subtitle.matches;
      this.showScoreDetailsDialog = true;
    }
    getScoreMatches() {
      const matches = [];
      if (this.matches.includes('hash')) {
        matches.push(`Hash: ${this.scores.hash}`);
      }
      if (this.matches.includes('title')) {
        matches.push(`Title: ${this.scores.title}`);
      }
      if (this.matches.includes('year')) {
        matches.push(`Year: ${this.scores.year}`);
      }
      // Only available for episodes
      if (this.wantedItem.isEpisode) {
        if (this.matches.includes('season')) {
          matches.push(`Season: ${this.scores.season}`);
        }
        if (this.matches.includes('episode')) {
          matches.push(`Episode: ${this.scores.episode}`);
        }
      }
      if (this.matches.includes('source')) {
        matches.push(`Source: ${this.scores.source}`);
      }
      if (this.matches.includes('resolution')) {
        matches.push(`Quality: ${this.scores.quality}`);
      }
      if (this.matches.includes('video_codec')) {
        matches.push(`Codec: ${this.scores.codec}`);
      }
      if (this.matches.includes('release_group')) {
        matches.push(`Release group: ${this.scores.releaseGroup}`);
      }
      if (this.matches.includes('hearing_impaired')) {
        matches.push(`Hearing impaired: ${this.scores.hearingImpaired}`);
      }
      return matches;
    }
    showSubtitlePreview(subtitle) {
      this.subtitlePreview = subtitle.contentPreview;
      this.showSubtitlePreviewDialog = true;
    }
    getWebsiteUrl(subtitle) {
      return (0,_shared_utils_common_utils__WEBPACK_IMPORTED_MODULE_1__.getDereferUrl)(subtitle.pageLink);
    }
    saveSubtitle(subtitle) {
      this.itemService.saveWantedItemSubtitle(this.wantedItem.id, subtitle.subtitleIndex).subscribe({
        next: savedSubtitle => {
          this.savedSubtitle = savedSubtitle;
          this.messageService.showInfoMessage('Subtitles saved.');
        },
        error: () => this.messageService.showErrorMessage('Unable to save the subtitle!')
      });
    }
    deleteSubtitle() {
      this.itemService.deleteWantedItemSubtitle(this.wantedItem.id).subscribe({
        next: () => {
          this.savedSubtitle = null;
          this.messageService.showInfoMessage('Subtitles deleted.');
        },
        error: () => this.messageService.showErrorMessage('Unable to delete the subtitle!')
      });
    }
    syncSubtitle() {
      this.subtitleSyncVideoPath = (0,_shared_utils_path_utils__WEBPACK_IMPORTED_MODULE_3__.joinPaths)(this.wantedItem.videoFilePath, this.wantedItem.videoFileName);
      this.subtitleSyncSubtitlePath = this.savedSubtitle.subtitlePath;
      this.showSubtitleSyncDialog = true;
    }
    getPlayVideoUrl() {
      return this.domSanitizer.bypassSecurityTrustResourceUrl((0,_shared_utils_common_utils__WEBPACK_IMPORTED_MODULE_1__.getPlayVideoUrl)(this.wantedItem.videoFilePath, this.wantedItem.videoFileName));
    }
    postProcess(subtitle) {
      this.postProcessInProgress = true;
      this.itemService.postProcessWantedItem(this.wantedItem.id, subtitle.subtitleIndex).subscribe({
        next: () => {
          this.savedSubtitle = null; // clear saved subtile (to not trigger the cleanup in onDestroy)
          this.postProcessInProgress = false;
          this.messageService.showSuccessMessage(`Post processed ${this.wantedItem.longName}.`);
          this.goHome();
        },
        error: () => {
          this.postProcessInProgress = false;
          this.messageService.showErrorMessage(`Unable to post process ${this.wantedItem.longName}!`);
        }
      });
    }
    goHome() {
      this.router.navigateByUrl('/home');
    }
  }
  HomeSearchComponent.ɵfac = function HomeSearchComponent_Factory(t) {
    return new (t || HomeSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_core_services_api_item_service__WEBPACK_IMPORTED_MODULE_4__.ItemService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_core_services_api_subtitle_service__WEBPACK_IMPORTED_MODULE_5__.SubtitleService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_core_services_message_service__WEBPACK_IMPORTED_MODULE_6__.MessageService));
  };
  HomeSearchComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
    type: HomeSearchComponent,
    selectors: [["app-home-search"]],
    decls: 9,
    vars: 13,
    consts: [[1, "container-lg"], [4, "ngIf"], ["header", "Subtitle preview", 3, "visible", "modal", "closable", "resizable", "visibleChange"], [1, "dialog-content"], [3, "innerHTML"], ["header", "Score details", 3, "visible", "modal", "closable", "resizable", "visibleChange"], ["class", "dialog-content", 4, "ngIf"], [3, "visible", "videoPath", "subtitlePath", "visibleChange", 4, "ngIf"], [3, "visible"], ["pTemplate", "header"], ["aria-hidden", "true", 1, "fa", "fa-spinner", "fa-spin", "mr-2"], [1, "panel-section"], [1, "panel-section-header"], [1, "wanted-item-container"], [1, "row"], [1, "col-12", "col-sm-12", "col-md-2", "col-lg-2"], [1, "wanted-item-label"], [1, "col-12", "col-sm-12", "col-md-10", "col-lg-10"], [1, "wanted-item-value"], [1, "p-tag", "language"], ["styleClass", "p-datatable-sm p-datatable-gridlines p-datatable-striped p-datatable-responsive-mode", 3, "value", "loading", "autoLayout", "rowHover"], ["pTemplate", "body"], ["type", "button", "pButton", "", "icon", "pi pi-chevron-left", "label", "Return", 3, "click"], [1, "w-100"], [1, "p-panel-title"], ["label", "Search", "icon", "pi pi-refresh", "styleClass", "p-button-outlined", 3, "disabled", "onClick"], ["pSortableColumn", "score"], ["field", "score"], ["pSortableColumn", "providerName"], ["field", "providerName"], [1, "p-column-title"], [1, "p-column-data"], ["class", "icon-link ml-1", 3, "click", 4, "ngIf"], [1, "dropdown"], ["data-toggle", "dropdown", "data-display", "static", "aria-haspopup", "true", "aria-expanded", "false", "title", "Click to show releases", 1, "dropdown-toggle", "has-tip", "icon-link"], [1, "dropdown-menu", "has-tip"], [4, "ngFor", "ngForOf"], [1, "p-column-data", "subtitle-preview"], [1, "icon-link", "subtitle-preview-icon", 3, "click"], ["aria-hidden", "true", "title", "Click to show preview", 1, "fa", "fa-search-plus"], [1, "subtitle-preview-content", 3, "innerHTML"], [1, "subtitle-action"], ["target", "_blank", 1, "icon-link", 3, "href"], ["aria-hidden", "true", "title", "Click to visit website", 1, "fa", "fa-external-link"], [1, "icon-link", 3, "click"], ["class", "fa fa-floppy-o", "aria-hidden", "true", "title", "Click to save subtitle", 4, "ngIf"], ["class", "fa fa-check-circle-o text-success", "aria-hidden", "true", "title", "Subtitle saved", 4, "ngIf"], ["aria-hidden", "true", "title", "Click to delete subtitle", 1, "fa", "fa-times"], ["class", "subtitle-action", 4, "ngIf"], [1, "icon-link", 3, "href"], ["aria-hidden", "true", "title", "Click to play video", 1, "fa", "fa-play-circle-o"], [1, "icon-link", 3, "ngClass", "click"], ["aria-hidden", "true", "title", "Click to execute post processing", 1, "fa", "fa-paper-plane"], [1, "icon-link", "ml-1", 3, "click"], ["aria-hidden", "true", "title", "Click to show score details", 1, "fa", "fa-times-circle", "text-warning"], ["aria-hidden", "true", "title", "Click to show score details", 1, "fa", "fa-check-circle", "text-success"], ["aria-hidden", "true", "title", "Click to save subtitle", 1, "fa", "fa-floppy-o"], ["aria-hidden", "true", "title", "Subtitle saved", 1, "fa", "fa-check-circle-o", "text-success"], ["aria-hidden", "true", "title", "Click to synchronize subtitle", 1, "fa", "fa-refresh"], ["aria-hidden", "true", 1, "fa", "fa-arrow-right"], ["class", "fa fa-times-circle text-warning", "aria-hidden", "true", "title", "Below minimum required configured score", 4, "ngIf"], ["class", "fa fa-check-circle text-success", "aria-hidden", "true", "title", "Equal or more than minimum required configured score", 4, "ngIf"], ["aria-hidden", "true", "title", "Below minimum required configured score", 1, "fa", "fa-times-circle", "text-warning"], ["aria-hidden", "true", "title", "Equal or more than minimum required configured score", 1, "fa", "fa-check-circle", "text-success"], [3, "visible", "videoPath", "subtitlePath", "visibleChange"]],
    template: function HomeSearchComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, HomeSearchComponent_p_panel_1_Template, 40, 9, "p-panel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "p-dialog", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("visibleChange", function HomeSearchComponent_Template_p_dialog_visibleChange_2_listener($event) {
          return ctx.showSubtitlePreviewDialog = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "p-dialog", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("visibleChange", function HomeSearchComponent_Template_p_dialog_visibleChange_5_listener($event) {
          return ctx.showScoreDetailsDialog = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, HomeSearchComponent_div_6_Template, 17, 7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](7, HomeSearchComponent_app_subtitle_sync_7_Template, 1, 3, "app-subtitle-sync", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](8, "app-loading", 8);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.wantedItem);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("visible", ctx.showSubtitlePreviewDialog)("modal", true)("closable", true)("resizable", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("innerHTML", ctx.subtitlePreview, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("visible", ctx.showScoreDetailsDialog)("modal", true)("closable", true)("resizable", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.matches);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.showSubtitleSyncDialog);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("visible", ctx.postProcessInProgress);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, primeng_api__WEBPACK_IMPORTED_MODULE_14__.Footer, primeng_api__WEBPACK_IMPORTED_MODULE_14__.PrimeTemplate, primeng_panel__WEBPACK_IMPORTED_MODULE_15__.Panel, primeng_table__WEBPACK_IMPORTED_MODULE_16__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_16__.SortableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_16__.SortIcon, primeng_button__WEBPACK_IMPORTED_MODULE_17__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_17__.Button, primeng_dialog__WEBPACK_IMPORTED_MODULE_18__.Dialog, _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__.LoadingComponent, _shared_components_message_message_component__WEBPACK_IMPORTED_MODULE_8__.MessageComponent, _shared_components_subtitle_sync_subtitle_sync_component__WEBPACK_IMPORTED_MODULE_9__.SubtitleSyncComponent],
    styles: [".wanted-item-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  margin-top: 0.5rem;\n  padding: 0.5rem;\n}\n\n.subtitle-preview[_ngcontent-%COMP%] {\n  position: relative;\n}\n.subtitle-preview[_ngcontent-%COMP%]   .subtitle-preview-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0rem;\n  right: 2rem;\n}\n.subtitle-preview[_ngcontent-%COMP%]   .subtitle-preview-content[_ngcontent-%COMP%] {\n  height: 6.25rem;\n  overflow-y: scroll;\n  word-break: normal;\n  white-space: nowrap;\n}\n\n.subtitle-action[_ngcontent-%COMP%] {\n  text-align: center !important;\n}\n@media screen and (max-width: 767px) {\n  .subtitle-action[_ngcontent-%COMP%] {\n    text-align: left !important;\n  }\n}\n.subtitle-action[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%] {\n  pointer-events: none;\n  -moz-filter: brightness(50%);\n  -o-filter: brightness(50%);\n  filter: brightness(50%);\n}\n\n .p-datatable-auto-layout > .p-datatable-wrapper {\n  overflow-x: visible !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9ob21lL3NlYXJjaC9ob21lLXNlYXJjaC5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9zY3NzL21peGlucy9fZmlsdGVyLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUU7RUFDRSxxQkFBQTtBQUhKO0FBZ0JFO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFkSjs7QUFrQkE7RUFDRSxrQkFBQTtBQWZGO0FBaUJFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQWZKO0FBa0JFO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQWhCSjs7QUFvQkE7RUFDRSw2QkFBQTtBQWpCRjtBQW1CRTtFQUhGO0lBSUksMkJBQUE7RUFoQkY7QUFDRjtBQWtCRTtFQUNFLG9CQUFBO0VDaERGLDRCRGlEa0I7RUNoRGxCLDBCRGdEa0I7RUMvQ2xCLHVCRCtDa0I7QUFicEI7O0FBa0JBO0VBQ0UsOEJBQUE7QUFmRiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uLy4uL3Njc3MvdmFyaWFibGVzJztcclxuQGltcG9ydCAnLi4vLi4vLi4vLi4vc2Nzcy9taXhpbnMvZmlsdGVyJztcclxuXHJcbi53YW50ZWQtaXRlbS1jb250YWluZXIge1xyXG4gIC5yb3cge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gIH1cclxuXHJcbiAgLndhbnRlZC1pdGVtLWxhYmVsIHtcclxuICAgIC8vIGZvbnQtd2VpZ2h0OiAkZm9udC1ib2xkO1xyXG4gIH1cclxuXHJcbiAgLndhbnRlZC1pdGVtLXZhbHVlIHtcclxuICAgIC8vIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICB9XHJcbn1cclxuXHJcbi5kcm9wZG93biB7XHJcbiAgLmRyb3Bkb3duLW1lbnUge1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcclxuICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuICB9XHJcbn1cclxuXHJcbi5zdWJ0aXRsZS1wcmV2aWV3IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gIC5zdWJ0aXRsZS1wcmV2aWV3LWljb24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwcmVtO1xyXG4gICAgcmlnaHQ6IDJyZW07XHJcbiAgfVxyXG5cclxuICAuc3VidGl0bGUtcHJldmlldy1jb250ZW50IHtcclxuICAgIGhlaWdodDogNi4yNXJlbTtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIHdvcmQtYnJlYWs6IG5vcm1hbDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgfVxyXG59XHJcblxyXG4uc3VidGl0bGUtYWN0aW9uIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJG1lZGlhLW1vYmlsZS1tYXgtd2lkdGgpIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5kaXNhYmxlZCB7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIEBpbmNsdWRlIGZpbHRlcihicmlnaHRuZXNzKDUwJSkpO1xyXG4gIH1cclxufVxyXG5cclxuLy8gQWxsb3cgZHJvcGRvd24gb3ZlcmZsb3cgd2l0aGluIHRhYmxlXHJcbjo6bmctZGVlcC5wLWRhdGF0YWJsZS1hdXRvLWxheW91dD4ucC1kYXRhdGFibGUtd3JhcHBlciB7XHJcbiAgb3ZlcmZsb3cteDogdmlzaWJsZSAhaW1wb3J0YW50O1xyXG59XHJcbiIsIkBtaXhpbiBmaWx0ZXIoJHZhbHVlKSB7XHJcbiAgLXdlYmtpdC1maWx0ZXI6ICR2YWx1ZTtcclxuICAtbW96LWZpbHRlcjogJHZhbHVlO1xyXG4gIC1vLWZpbHRlcjogJHZhbHVlO1xyXG4gIGZpbHRlcjogJHZhbHVlO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
  return HomeSearchComponent;
})();

/***/ }),

/***/ 8030:
/*!**************************************************************!*\
  !*** ./src/app/modules/home/wanted/home-wanted.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeWantedComponent": () => (/* binding */ HomeWantedComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_settings_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../app-settings.service */ 1205);
/* harmony import */ var _shared_models_video__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/models/video */ 6716);
/* harmony import */ var _shared_utils_common_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/utils/common-utils */ 3695);
/* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/utils/string-utils */ 6584);
/* harmony import */ var _shared_utils_table_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/utils/table-utils */ 6020);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _core_services_api_item_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/services/api/item.service */ 4158);
/* harmony import */ var _core_services_system_event_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/services/system-event.service */ 8317);
/* harmony import */ var _core_services_message_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/services/message.service */ 1245);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/table */ 7485);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/inputtext */ 9906);
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/inputswitch */ 3585);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/dropdown */ 8992);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/confirmdialog */ 97);
/* harmony import */ var _shared_components_icon_dropdown_icon_dropdown_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/components/icon-dropdown/icon-dropdown.component */ 1738);
/* harmony import */ var _shared_components_table_filter_table_filter_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/components/table-filter/table-filter.component */ 1450);
/* harmony import */ var _shared_components_movie_settings_movie_settings_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/components/movie-settings/movie-settings.component */ 2735);
/* harmony import */ var _shared_components_show_settings_show_settings_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/components/show-settings/show-settings.component */ 3994);
/* harmony import */ var _shared_components_manual_refine_manual_refine_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/components/manual-refine/manual-refine.component */ 8306);

























function HomeWantedComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 15)(1, "div", 16)(2, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "p-dropdown", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("onChange", function HomeWantedComponent_ng_template_2_Template_p_dropdown_onChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r11);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](1);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](_r0.filter($event.value, "type", "equals"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](6, "app-table-filter", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("options", ctx_r1.videoTypes);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("table", _r0)("tableStateKey", ctx_r1.tableStateKey);
  }
}
function HomeWantedComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "tr")(1, "th", 21)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](4, "p-sortIcon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "th", 23)(6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](7, "Season");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](8, "p-sortIcon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "th", 25)(10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](11, "Episode");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](12, "p-sortIcon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](13, "th", 27)(14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](15, "Source");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](16, "p-sortIcon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](17, "th", 29)(18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](19, "Quality");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](20, "p-sortIcon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](21, "th", 31)(22, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](23, "Codec");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](24, "p-sortIcon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](25, "th", 33)(26, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](27, "Group");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](28, "p-sortIcon", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](29, "th", 35)(30, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](31, "Lang");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](32, "p-sortIcon", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](33, "th", 37)(34, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](35, "Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](36, "p-sortIcon", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
}
function HomeWantedComponent_ng_template_4_ul_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ul", 50)(1, "li", 51)(2, "a", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomeWantedComponent_ng_template_4_ul_8_Template_a_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r23);
      const wantedItem_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r21.postProcessWantedItem(wantedItem_r12));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, "Post process show");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "li", 51)(5, "a", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomeWantedComponent_ng_template_4_ul_8_Template_a_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r23);
      const wantedItem_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r24.deleteWantedItem(wantedItem_r12));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6, "Delete show");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "li", 51)(8, "a", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomeWantedComponent_ng_template_4_ul_8_Template_a_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r23);
      const wantedItem_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r26.skipShow(wantedItem_r12));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](9, "Skip show");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
}
function HomeWantedComponent_ng_template_4_ul_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ul", 50)(1, "li", 51)(2, "a", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomeWantedComponent_ng_template_4_ul_9_Template_a_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r30);
      const wantedItem_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r28.postProcessWantedItem(wantedItem_r12));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, "Post process movie");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "li", 51)(5, "a", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomeWantedComponent_ng_template_4_ul_9_Template_a_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r30);
      const wantedItem_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r31.deleteWantedItem(wantedItem_r12));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6, "Delete movie");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "li", 51)(8, "a", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomeWantedComponent_ng_template_4_ul_9_Template_a_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r30);
      const wantedItem_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r33.skipMovie(wantedItem_r12));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](9, "Skip movie");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
}
function HomeWantedComponent_ng_template_4_ng_container_27_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "a", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomeWantedComponent_ng_template_4_ng_container_27_a_1_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r39);
      const wantedItem_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r37.searchIndexerId(wantedItem_r12));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function HomeWantedComponent_ng_template_4_ng_container_27_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "a", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "i", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const wantedItem_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("href", ctx_r36.getTvdbUrl(wantedItem_r12), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsanitizeUrl"]);
  }
}
function HomeWantedComponent_ng_template_4_ng_container_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, HomeWantedComponent_ng_template_4_ng_container_27_a_1_Template, 2, 0, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, HomeWantedComponent_ng_template_4_ng_container_27_a_2_Template, 2, 1, "a", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "a", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomeWantedComponent_ng_template_4_ng_container_27_Template_a_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r43);
      const wantedItem_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r41.openShowSettingsDialog(wantedItem_r12));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](4, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const wantedItem_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !wantedItem_r12.tvdbId);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", wantedItem_r12.tvdbId);
  }
}
function HomeWantedComponent_ng_template_4_ng_container_28_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "a", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomeWantedComponent_ng_template_4_ng_container_28_a_1_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r49);
      const wantedItem_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r47.searchIndexerId(wantedItem_r12));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function HomeWantedComponent_ng_template_4_ng_container_28_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "a", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const wantedItem_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("href", ctx_r46.getImdbUrl(wantedItem_r12), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsanitizeUrl"]);
  }
}
function HomeWantedComponent_ng_template_4_ng_container_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, HomeWantedComponent_ng_template_4_ng_container_28_a_1_Template, 2, 0, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, HomeWantedComponent_ng_template_4_ng_container_28_a_2_Template, 2, 1, "a", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "a", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomeWantedComponent_ng_template_4_ng_container_28_Template_a_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r53);
      const wantedItem_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r51.openMovieSettingsDialog(wantedItem_r12));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](4, "i", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const wantedItem_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !wantedItem_r12.imdbId);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", wantedItem_r12.imdbId);
  }
}
function HomeWantedComponent_ng_template_4_ng_container_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "a", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomeWantedComponent_ng_template_4_ng_container_29_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r57);
      const wantedItem_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r55.openManualRefineDialog(wantedItem_r12));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](2, "i", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }
}
function HomeWantedComponent_ng_template_4_i_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "i", 65);
  }
}
function HomeWantedComponent_ng_template_4_i_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "i", 66);
  }
}
function HomeWantedComponent_ng_template_4_span_66_Template(rf, ctx) {
  if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span", 67)(1, "a", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomeWantedComponent_ng_template_4_span_66_Template_a_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r61);
      const language_r58 = restoredCtx.$implicit;
      const wantedItem_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
      const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r59.goToManualSearch(wantedItem_r12, language_r58));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const language_r58 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](language_r58);
  }
}
function HomeWantedComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "tr")(1, "td")(2, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "span", 40)(5, "span", 41)(6, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](8, HomeWantedComponent_ng_template_4_ul_8_Template, 10, 0, "ul", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](9, HomeWantedComponent_ng_template_4_ul_9_Template, 10, 0, "ul", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "app-icon-dropdown")(11, "li")(12, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](13, "File name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](16, "li")(17, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](18, "File path:");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](21, "li")(22, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](23, "File size:");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](24, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](26, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](27, HomeWantedComponent_ng_template_4_ng_container_27_Template, 5, 2, "ng-container", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](28, HomeWantedComponent_ng_template_4_ng_container_28_Template, 5, 2, "ng-container", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](29, HomeWantedComponent_ng_template_4_ng_container_29_Template, 3, 0, "ng-container", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](30, HomeWantedComponent_ng_template_4_i_30_Template, 1, 0, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](31, HomeWantedComponent_ng_template_4_i_31_Template, 1, 0, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](32, "td")(33, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](34, "Season");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](35, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](37, "td")(38, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](39, "Episode");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](40, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](42, "td")(43, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](44, "Source");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](45, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](47, "td")(48, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](49, "Quality");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](50, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](52, "td")(53, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](54, "Codec");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](55, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](57, "td")(58, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](59, "Group");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](60, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](61);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](62, "td")(63, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](64, "Lang");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](65, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](66, HomeWantedComponent_ng_template_4_span_66_Template, 3, 1, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](67, "td")(68, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](69, "Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](70, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](71);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const wantedItem_r12 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](wantedItem_r12.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", wantedItem_r12.isEpisode);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", wantedItem_r12.isMovie);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](wantedItem_r12.videoFileName);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](wantedItem_r12.videoFilePath);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](wantedItem_r12.videoFileSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", wantedItem_r12.isEpisode);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", wantedItem_r12.isMovie);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r3.manualRefineEnabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", wantedItem_r12.isSearchActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !wantedItem_r12.isSearchActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](wantedItem_r12.season);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](wantedItem_r12.episode);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r3.displayUpperCase(wantedItem_r12.source));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r3.displayUpperCase(wantedItem_r12.quality));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r3.displayUpperCase(wantedItem_r12.codec));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r3.displayUpperCase(wantedItem_r12.releaseGroup));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", wantedItem_r12.languages);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](wantedItem_r12.timestampFormatted);
  }
}
function HomeWantedComponent_app_show_settings_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "app-show-settings", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("visibleChange", function HomeWantedComponent_app_show_settings_5_Template_app_show_settings_visibleChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r63);
      const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r62.showShowSettings = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("visible", ctx_r4.showShowSettings)("tvdbId", ctx_r4.selectedWantedItem.tvdbId)("title", ctx_r4.selectedWantedItem.name);
  }
}
function HomeWantedComponent_app_movie_settings_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "app-movie-settings", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("visibleChange", function HomeWantedComponent_app_movie_settings_6_Template_app_movie_settings_visibleChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r65);
      const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r64.showMovieSettings = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("visible", ctx_r5.showMovieSettings)("imdbId", ctx_r5.selectedWantedItem.imdbId)("title", ctx_r5.selectedWantedItem.name);
  }
}
function HomeWantedComponent_app_manual_refine_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "app-manual-refine", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("visibleChange", function HomeWantedComponent_app_manual_refine_7_Template_app_manual_refine_visibleChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r67);
      const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r66.showManualRefine = $event);
    })("wantedItemChange", function HomeWantedComponent_app_manual_refine_7_Template_app_manual_refine_wantedItemChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r67);
      const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r68.updateWantedItemInList($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("visible", ctx_r6.showManualRefine)("wantedItem", ctx_r6.selectedWantedItem);
  }
}
function HomeWantedComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 72)(1, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, "Cleanup leftovers");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "p-inputSwitch", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function HomeWantedComponent_div_12_Template_p_inputSwitch_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r70);
      const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r69.cleanupOnDelete = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", ctx_r8.cleanupOnDelete);
  }
}
function HomeWantedComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 75)(1, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, "Season(s)");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "input", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function HomeWantedComponent_div_13_Template_input_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r72);
      const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r71.seasonToSkip = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", ctx_r9.seasonToSkip);
  }
}
const _c0 = function () {
  return {
    showAll: "All"
  };
};
const _c1 = function (a4) {
  return [5, 10, 25, 50, a4];
};
let HomeWantedComponent = /*#__PURE__*/(() => {
  class HomeWantedComponent {
    constructor(router, itemService, systemEventService, messageService, confirmationService) {
      this.router = router;
      this.itemService = itemService;
      this.systemEventService = systemEventService;
      this.messageService = messageService;
      this.confirmationService = confirmationService;
      this.totals = new _angular_core__WEBPACK_IMPORTED_MODULE_13__.EventEmitter();
      this.showShowSettings = false;
      this.showMovieSettings = false;
      this.showManualRefine = false;
      this.manualRefineEnabled = false;
      this.loading = false;
      this.cleanupOnDelete = false;
      this.seasonToSkip = '00';
      this.globalFilterFields = ['name', 'season', 'episode', 'source', 'quality', 'codec', 'releaseGroup', 'languages', 'timestamp'];
      this.tableStateKey = 'autosubliminal-home-wanted-table';
    }
    ngOnInit() {
      this.manualRefineEnabled = _app_settings_service__WEBPACK_IMPORTED_MODULE_0__.appSettings.manualRefineVideo;
      this.buildSelectItems();
      this.loadWantedItems();
      // Subscribe on scanDisk finish events to reload the overview
      this.scanDiskSubscription = this.systemEventService.schedulerFinish.subscribe({
        next: scheduler => {
          if (scheduler.name === _app_settings_service__WEBPACK_IMPORTED_MODULE_0__.appSettings.scanDisk) {
            this.loadWantedItems();
          }
        }
      });
      // Subscribe on checkSub finish events to reload the overview
      this.checkSubSubscription = this.systemEventService.schedulerFinish.subscribe({
        next: scheduler => {
          if (scheduler.name === _app_settings_service__WEBPACK_IMPORTED_MODULE_0__.appSettings.checkSub) {
            this.loadWantedItems();
          }
        }
      });
      // Subscribe on wantedItem update events to update the overview
      this.wantedItemUpdateSubscription = this.systemEventService.wantedItemUpdate.subscribe({
        next: wantedItem => {
          this.updateWantedItemInList(wantedItem);
        }
      });
      // Subscribe on wantedItem delete events to update the overview
      this.wantedItemDeleteSubscription = this.systemEventService.wantedItemDelete.subscribe({
        next: wantedItem => {
          this.deleteWantedItemInList(wantedItem);
        }
      });
    }
    ngOnDestroy() {
      this.scanDiskSubscription.unsubscribe();
      this.checkSubSubscription.unsubscribe();
      this.wantedItemUpdateSubscription.unsubscribe();
      this.wantedItemDeleteSubscription.unsubscribe();
    }
    buildSelectItems() {
      // videoTypes
      this.videoTypes = [];
      this.videoTypes.push({
        label: 'All',
        value: null
      });
      Object.values(_shared_models_video__WEBPACK_IMPORTED_MODULE_1__.VideoType).forEach(videoType => this.videoTypes.push({
        label: (0,_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_3__.capitalizeFirstChar)(videoType),
        value: videoType
      }));
    }
    loadWantedItems() {
      this.loading = true;
      this.itemService.getWantedItems().subscribe({
        next: wantedItems => {
          this.wantedItems = wantedItems;
          this.emitTotals();
          this.loading = false;
        },
        error: () => {
          this.loading = false;
          this.messageService.showErrorMessage('Unable to get the wanted items');
        }
      });
    }
    sort(event) {
      (0,_shared_utils_table_utils__WEBPACK_IMPORTED_MODULE_4__.naturalSort)(event);
    }
    displayUpperCase(value) {
      return (0,_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_3__.displayValue)(value, 'N/A', true);
    }
    getTvdbUrl(wantedItem) {
      return (0,_shared_utils_common_utils__WEBPACK_IMPORTED_MODULE_2__.getTvdbUrl)(wantedItem.tvdbId);
    }
    getImdbUrl(wantedItem) {
      return (0,_shared_utils_common_utils__WEBPACK_IMPORTED_MODULE_2__.getImdbUrl)(wantedItem.imdbId);
    }
    searchIndexerId(wantedItem) {
      const indexer = wantedItem.isEpisode ? 'tvdb id' : 'imdb id';
      this.messageService.showInfoMessage(`Searching for ${indexer} for ${wantedItem.longName}.`);
      this.itemService.searchWantedItemIndexerId(wantedItem.id).subscribe({
        next: updatedWantedItem => {
          this.updateWantedItemInList(updatedWantedItem);
          this.messageService.showSuccessMessage(`${(0,_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_3__.capitalizeFirstChar)(indexer)} found for ${updatedWantedItem.longName}.`);
        },
        error: () => this.messageService.showErrorMessage(`Unable to search ${indexer} for ${wantedItem.longName}!`)
      });
    }
    openShowSettingsDialog(wantedItem) {
      this.showShowSettings = true;
      this.selectedWantedItem = wantedItem;
    }
    openMovieSettingsDialog(wantedItem) {
      this.showMovieSettings = true;
      this.selectedWantedItem = wantedItem;
    }
    openManualRefineDialog(wantedItem) {
      this.showManualRefine = true;
      this.selectedWantedItem = wantedItem;
    }
    goToManualSearch(wantedItem, language) {
      this.router.navigate(['/home/search'], {
        queryParams: {
          wantedItemId: wantedItem.id,
          language
        }
      });
    }
    updateWantedItemInList(wantedItem) {
      // Replace updated wanted item in list of wanted items
      this.wantedItems = this.wantedItems.map(item => item.id === wantedItem.id ? wantedItem : item);
    }
    postProcessWantedItem(wantedItem) {
      this.itemService.postProcessWantedItem(wantedItem.id).subscribe({
        next: () => {
          this.deleteWantedItemInList(wantedItem);
          this.messageService.showSuccessMessage(`Post processed ${wantedItem.longName}.`);
        },
        error: () => this.messageService.showErrorMessage(`Unable to post process ${wantedItem.longName}!`)
      });
    }
    deleteWantedItem(wantedItem) {
      this.confirmationType = 'delete';
      this.cleanupOnDelete = false;
      this.confirmationService.confirm({
        message: `Are you sure that you want to delete <b>${wantedItem.longName}</b>?<br><small><i>Toggle button if you want to cleanup leftovers as well.</i></small>`,
        accept: () => {
          this.itemService.deleteWantedItem(wantedItem.id, this.cleanupOnDelete).subscribe({
            next: () => {
              this.deleteWantedItemInList(wantedItem);
              this.messageService.showSuccessMessage(`Deleted ${wantedItem.longName}.`);
            },
            error: () => this.messageService.showErrorMessage(`Unable to delete ${wantedItem.longName}!`)
          });
        }
      });
    }
    skipShow(wantedItem) {
      this.confirmationType = 'skip';
      this.seasonToSkip = '00';
      this.confirmationService.confirm({
        message: `Are you sure that you want to skip show <b>${wantedItem.name}</b>?<br><small><i>Enter season(s) to skip (comma separated, 00 = all seasons, 0 = specials).</i></small>`,
        accept: () => {
          this.itemService.skipWantedItem(wantedItem.id, wantedItem.type, this.seasonToSkip).subscribe({
            next: () => {
              this.deleteWantedItemInList(wantedItem);
              if (!this.seasonToSkip || this.seasonToSkip === '00') {
                // '00' or nothing means all seasons
                this.messageService.showSuccessMessage(`Skipped the show ${wantedItem.name} all seasons.`);
              } else {
                this.messageService.showSuccessMessage(`Skipped the show ${wantedItem.name} season(s) ${this.seasonToSkip}.`);
              }
            },
            error: () => this.messageService.showErrorMessage(`Unable to skip the show ${wantedItem.name}!`)
          });
        }
      });
    }
    skipMovie(wantedItem) {
      this.confirmationService.confirm({
        message: `Are you sure that you want to skip movie <b>${wantedItem.name}</b>?`,
        accept: () => {
          this.itemService.skipWantedItem(wantedItem.id, wantedItem.type).subscribe({
            next: () => {
              this.deleteWantedItemInList(wantedItem);
              this.messageService.showSuccessMessage(`Skipped the movie ${wantedItem.name}.`);
            },
            error: () => this.messageService.showErrorMessage(`Unable to skip the movie ${wantedItem.name}!`)
          });
        }
      });
    }
    deleteWantedItemInList(wantedItem) {
      this.wantedItems = this.wantedItems.filter(item => item.id !== wantedItem.id);
      this.emitTotals();
    }
    emitTotals() {
      const total = this.wantedItems.length;
      const totalEpisodes = this.wantedItems.filter(wantedItem => wantedItem.isEpisode).length;
      const totalMovies = this.wantedItems.filter(wantedItem => wantedItem.isMovie).length;
      this.totals.emit({
        total,
        totalEpisodes,
        totalMovies
      });
    }
  }
  HomeWantedComponent.ɵfac = function HomeWantedComponent_Factory(t) {
    return new (t || HomeWantedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_core_services_api_item_service__WEBPACK_IMPORTED_MODULE_5__.ItemService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_core_services_system_event_service__WEBPACK_IMPORTED_MODULE_6__.SystemEventService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_core_services_message_service__WEBPACK_IMPORTED_MODULE_7__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_15__.ConfirmationService));
  };
  HomeWantedComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
    type: HomeWantedComponent,
    selectors: [["app-home-wanted"]],
    inputs: {
      wantedItems: "wantedItems"
    },
    outputs: {
      totals: "totals"
    },
    decls: 17,
    vars: 19,
    consts: [["stateStorage", "local", "currentPageReportTemplate", "{first} to {last} of {totalRecords}", "styleClass", "p-datatable-sm p-datatable-gridlines p-datatable-striped p-datatable-responsive-mode", 3, "value", "stateKey", "loading", "autoLayout", "rowHover", "paginator", "rows", "rowsPerPageOptions", "showCurrentPageReport", "globalFilterFields", "customSort", "sortFunction"], ["wantedTable", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], [3, "visible", "tvdbId", "title", "visibleChange", 4, "ngIf"], [3, "visible", "imdbId", "title", "visibleChange", 4, "ngIf"], [3, "visible", "wantedItem", "visibleChange", "wantedItemChange", 4, "ngIf"], ["header", "Confirmation", "icon", "pi pi-exclamation-triangle"], ["cd", ""], [1, "confirmation-buttons"], ["class", "confirmation-cleanup-toggle", 4, "ngIf"], ["class", "confirmation-skip-season", 4, "ngIf"], ["type", "button", "pButton", "", "icon", "pi pi-times", "label", "No", 3, "click"], ["type", "button", "pButton", "", "icon", "pi pi-check", "label", "Yes", 3, "click"], [1, "caption"], [1, "p-inputgroup", "dropdown"], [1, "p-inputgroup-addon"], [3, "options", "onChange"], [1, "ml-auto"], ["matchMode", "contains", 3, "table", "tableStateKey"], ["pSortableColumn", "name"], ["field", "name"], ["pSortableColumn", "season"], ["field", "season"], ["pSortableColumn", "episode"], ["field", "episode"], ["pSortableColumn", "source"], ["field", "source"], ["pSortableColumn", "quality"], ["field", "quality"], ["pSortableColumn", "codec"], ["field", "codec"], ["pSortableColumn", "releaseGroup"], ["field", "releaseGroup"], ["pSortableColumn", "languages"], ["field", "languages"], ["pSortableColumn", "timestamp"], ["field", "timestamp"], [1, "p-column-title"], [1, "p-column-data"], [1, "dropdown"], ["data-toggle", "dropdown", "data-display", "static", "aria-haspopup", "true", "aria-expanded", "false", "title", "Click for actions", 1, "dropdown-toggle", "has-tip", "dropdown-link"], ["class", "dropdown-menu has-tip", 4, "ngIf"], [1, "icon-dropdown-title"], [1, "icon-group"], [4, "ngIf"], ["class", "fa fa-check-circle text-success", "aria-hidden", "true", "title", "Included in automatic search", 4, "ngIf"], ["class", "fa fa-pause-circle text-warning", "aria-hidden", "true", "title", "Not included in automatic search", 4, "ngIf"], ["class", "p-tag language mr-2", 4, "ngFor", "ngForOf"], [1, "dropdown-menu", "has-tip"], [1, "dropdown-item"], [3, "click"], ["class", "icon-link text-danger", 3, "click", 4, "ngIf"], ["class", "icon-link", "target", "_blank", 3, "href", 4, "ngIf"], [1, "icon-link", 3, "click"], ["aria-hidden", "true", "title", "Click to edit show settings", 1, "fa", "fa-wrench"], [1, "icon-link", "text-danger", 3, "click"], ["aria-hidden", "true", "title", "Click to search tvdb id", 1, "fa", "fa-exclamation-triangle"], ["target", "_blank", 1, "icon-link", 3, "href"], ["aria-hidden", "true", "title", "Click to visit Tvdb", 1, "fa", "fa-television"], ["aria-hidden", "true", "title", "Click to edit movie settings", 1, "fa", "fa-wrench"], ["aria-hidden", "true", "title", "Click to search imdb id", 1, "fa", "fa-exclamation-triangle"], ["aria-hidden", "true", "title", "Click to visit Imdb", 1, "fa", "fa-imdb"], ["aria-hidden", "true", "title", "Click to manually refine item details", 1, "fa", "fa-pencil"], ["aria-hidden", "true", "title", "Included in automatic search", 1, "fa", "fa-check-circle", "text-success"], ["aria-hidden", "true", "title", "Not included in automatic search", 1, "fa", "fa-pause-circle", "text-warning"], [1, "p-tag", "language", "mr-2"], ["title", "Click to search subtitles", 1, "icon-link", 3, "click"], [3, "visible", "tvdbId", "title", "visibleChange"], [3, "visible", "imdbId", "title", "visibleChange"], [3, "visible", "wantedItem", "visibleChange", "wantedItemChange"], [1, "confirmation-cleanup-toggle"], [1, "label"], [3, "ngModel", "ngModelChange"], [1, "confirmation-skip-season"], ["type", "text", "pInputText", "", 3, "ngModel", "ngModelChange"]],
    template: function HomeWantedComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "p-table", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("sortFunction", function HomeWantedComponent_Template_p_table_sortFunction_0_listener($event) {
          return ctx.sort($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, HomeWantedComponent_ng_template_2_Template, 7, 3, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](3, HomeWantedComponent_ng_template_3_Template, 37, 0, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](4, HomeWantedComponent_ng_template_4_Template, 72, 19, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](5, HomeWantedComponent_app_show_settings_5_Template, 1, 3, "app-show-settings", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](6, HomeWantedComponent_app_movie_settings_6_Template, 1, 3, "app-movie-settings", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](7, HomeWantedComponent_app_manual_refine_7_Template, 1, 2, "app-manual-refine", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "p-confirmDialog", 8, 9)(10, "p-footer")(11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](12, HomeWantedComponent_div_12_Template, 4, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](13, HomeWantedComponent_div_13_Template, 4, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](14, "div")(15, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomeWantedComponent_Template_button_click_15_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r73);
          const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](9);
          return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](_r7.reject());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](16, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomeWantedComponent_Template_button_click_16_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r73);
          const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](9);
          return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](_r7.accept());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("value", ctx.wantedItems)("stateKey", ctx.tableStateKey)("loading", ctx.loading)("autoLayout", true)("rowHover", true)("paginator", true)("rows", 10)("rowsPerPageOptions", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](17, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction0"](16, _c0)))("showCurrentPageReport", true)("globalFilterFields", ctx.globalFilterFields)("customSort", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.showShowSettings);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.showMovieSettings);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.showManualRefine);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.confirmationType === "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.confirmationType === "skip");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgModel, primeng_api__WEBPACK_IMPORTED_MODULE_15__.Footer, primeng_api__WEBPACK_IMPORTED_MODULE_15__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_18__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_18__.SortableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_18__.SortIcon, primeng_button__WEBPACK_IMPORTED_MODULE_19__.ButtonDirective, primeng_inputtext__WEBPACK_IMPORTED_MODULE_20__.InputText, primeng_inputswitch__WEBPACK_IMPORTED_MODULE_21__.InputSwitch, primeng_dropdown__WEBPACK_IMPORTED_MODULE_22__.Dropdown, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_23__.ConfirmDialog, _shared_components_icon_dropdown_icon_dropdown_component__WEBPACK_IMPORTED_MODULE_8__.IconDropdownComponent, _shared_components_table_filter_table_filter_component__WEBPACK_IMPORTED_MODULE_9__.TableFilterComponent, _shared_components_movie_settings_movie_settings_component__WEBPACK_IMPORTED_MODULE_10__.MovieSettingsComponent, _shared_components_show_settings_show_settings_component__WEBPACK_IMPORTED_MODULE_11__.ShowSettingsComponent, _shared_components_manual_refine_manual_refine_component__WEBPACK_IMPORTED_MODULE_12__.ManualRefineComponent],
    styles: [".p-datatable-auto-layout > .p-datatable-wrapper {\n  overflow-x: visible !important;\n}\n\n.dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n\n.confirmation-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.confirmation-buttons[_ngcontent-%COMP%]   .confirmation-cleanup-toggle[_ngcontent-%COMP%], .confirmation-buttons[_ngcontent-%COMP%]   .confirmation-skip-season[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.confirmation-buttons[_ngcontent-%COMP%]   .confirmation-cleanup-toggle[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%], .confirmation-buttons[_ngcontent-%COMP%]   .confirmation-skip-season[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9ob21lL3dhbnRlZC9ob21lLXdhbnRlZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLDhCQUFBO0FBQUY7O0FBSUU7RUFDRSxtQkFBQTtBQURKOztBQUtBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFGRjtBQUlFOztFQUVFLGFBQUE7RUFDQSxtQkFBQTtBQUZKO0FBSUk7O0VBQ0Usb0JBQUE7QUFETiIsInNvdXJjZXNDb250ZW50IjpbIi8vIEFsbG93IGRyb3Bkb3duIG92ZXJmbG93IHdpdGhpbiB0YWJsZVxyXG46Om5nLWRlZXAucC1kYXRhdGFibGUtYXV0by1sYXlvdXQ+LnAtZGF0YXRhYmxlLXdyYXBwZXIge1xyXG4gIG92ZXJmbG93LXg6IHZpc2libGUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRyb3Bkb3duIHtcclxuICAuZHJvcGRvd24tbWVudSB7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIH1cclxufVxyXG5cclxuLmNvbmZpcm1hdGlvbi1idXR0b25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAuY29uZmlybWF0aW9uLWNsZWFudXAtdG9nZ2xlLFxyXG4gIC5jb25maXJtYXRpb24tc2tpcC1zZWFzb24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgLmxhYmVsIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
  return HomeWantedComponent;
})();

/***/ }),

/***/ 6584:
/*!**********************************************!*\
  !*** ./src/app/shared/utils/string-utils.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "capitalizeFirstChar": () => (/* binding */ capitalizeFirstChar),
/* harmony export */   "displayValue": () => (/* binding */ displayValue)
/* harmony export */ });
function displayValue(value, defaultValue = '', upperCase = false) {
  let val = value || defaultValue;
  try {
    val = val ? String(val) : val;
  } catch (error) {
    val = defaultValue;
  }
  return val && upperCase ? val.toUpperCase() : val;
}
function capitalizeFirstChar(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

/***/ })

}]);
//# sourceMappingURL=882.37aaa84088b162bd.js.map