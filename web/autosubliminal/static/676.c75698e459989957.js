"use strict";
(self["webpackChunkautosubliminal"] = self["webpackChunkautosubliminal"] || []).push([[676],{

/***/ 1314:
/*!************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-calendar.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CALENDAR_VALUE_ACCESSOR: () => (/* binding */ CALENDAR_VALUE_ACCESSOR),
/* harmony export */   Calendar: () => (/* binding */ Calendar),
/* harmony export */   CalendarModule: () => (/* binding */ CalendarModule)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/animations */ 7172);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ 7780);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ 9136);
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/dom */ 5228);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/ripple */ 78);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/utils */ 7251);
/* harmony import */ var primeng_icons_chevronleft__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/icons/chevronleft */ 4959);
/* harmony import */ var primeng_icons_chevronright__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/icons/chevronright */ 5994);
/* harmony import */ var primeng_icons_chevronup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/icons/chevronup */ 7223);
/* harmony import */ var primeng_icons_chevrondown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/icons/chevrondown */ 5804);
/* harmony import */ var primeng_icons_times__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/icons/times */ 7727);
/* harmony import */ var primeng_icons_calendar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/icons/calendar */ 4837);
/* harmony import */ var primeng_autofocus__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/autofocus */ 7159);






















const _c0 = ["container"];
const _c1 = ["inputfield"];
const _c2 = ["contentWrapper"];
const _c3 = [[["p-header"]], [["p-footer"]]];
const _c4 = ["p-header", "p-footer"];
const _c5 = (a0, a1, a2, a3, a4) => ({
  "p-calendar": true,
  "p-input-icon-right": a0,
  "p-calendar-w-btn": a1,
  "p-calendar-timeonly": a2,
  "p-calendar-disabled": a3,
  "p-focus": a4
});
const _c6 = a0 => ({
  clickCallBack: a0
});
const _c7 = a0 => ({
  "p-datepicker-icon": a0
});
const _c8 = (a0, a1, a2, a3, a4, a5) => ({
  "p-datepicker p-component": true,
  "p-datepicker-inline": a0,
  "p-disabled": a1,
  "p-datepicker-timeonly": a2,
  "p-datepicker-multiple-month": a3,
  "p-datepicker-monthpicker": a4,
  "p-datepicker-touch-ui": a5
});
const _c9 = (a0, a1) => ({
  showTransitionParams: a0,
  hideTransitionParams: a1
});
const _c10 = a0 => ({
  value: "visibleTouchUI",
  params: a0
});
const _c11 = a0 => ({
  value: "visible",
  params: a0
});
const _c12 = a0 => ({
  $implicit: a0
});
const _c13 = (a0, a1) => ({
  "p-datepicker-other-month": a0,
  "p-datepicker-today": a1
});
const _c14 = (a0, a1) => ({
  "p-highlight": a0,
  "p-disabled": a1
});
const _c15 = a0 => [a0];
function Calendar_ng_template_2_ng_container_2_TimesIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "TimesIcon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Calendar_ng_template_2_ng_container_2_TimesIcon_1_Template_TimesIcon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.clear());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-calendar-clear-icon");
  }
}
function Calendar_ng_template_2_ng_container_2_span_2_1_ng_template_0_Template(rf, ctx) {}
function Calendar_ng_template_2_ng_container_2_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Calendar_ng_template_2_ng_container_2_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Calendar_ng_template_2_ng_container_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Calendar_ng_template_2_ng_container_2_span_2_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.clear());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Calendar_ng_template_2_ng_container_2_span_2_1_Template, 1, 0, null, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.clearIconTemplate);
  }
}
function Calendar_ng_template_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Calendar_ng_template_2_ng_container_2_TimesIcon_1_Template, 1, 1, "TimesIcon", 9)(2, Calendar_ng_template_2_ng_container_2_span_2_Template, 2, 1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.clearIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.clearIconTemplate);
  }
}
function Calendar_ng_template_2_button_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 16);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r1.icon);
  }
}
function Calendar_ng_template_2_button_3_ng_container_2_CalendarIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "CalendarIcon");
  }
}
function Calendar_ng_template_2_button_3_ng_container_2_2_ng_template_0_Template(rf, ctx) {}
function Calendar_ng_template_2_button_3_ng_container_2_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Calendar_ng_template_2_button_3_ng_container_2_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Calendar_ng_template_2_button_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Calendar_ng_template_2_button_3_ng_container_2_CalendarIcon_1_Template, 1, 0, "CalendarIcon", 7)(2, Calendar_ng_template_2_button_3_ng_container_2_2_Template, 1, 0, null, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.triggerIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.triggerIconTemplate);
  }
}
function Calendar_ng_template_2_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Calendar_ng_template_2_button_3_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      const inputfield_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onButtonClick($event, inputfield_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Calendar_ng_template_2_button_3_span_1_Template, 1, 1, "span", 15)(2, Calendar_ng_template_2_button_3_ng_container_2_Template, 3, 2, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_6_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r1.iconButtonAriaLabel)("aria-expanded", (tmp_6_0 = ctx_r1.overlayVisible) !== null && tmp_6_0 !== undefined ? tmp_6_0 : false)("aria-controls", ctx_r1.overlayVisible ? ctx_r1.panelId : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.icon);
  }
}
function Calendar_ng_template_2_ng_container_4_CalendarIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "CalendarIcon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Calendar_ng_template_2_ng_container_4_CalendarIcon_1_Template_CalendarIcon_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onButtonClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c7, ctx_r1.showOnFocus));
  }
}
function Calendar_ng_template_2_ng_container_4_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Calendar_ng_template_2_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Calendar_ng_template_2_ng_container_4_CalendarIcon_1_Template, 1, 3, "CalendarIcon", 17)(2, Calendar_ng_template_2_ng_container_4_ng_container_2_Template, 1, 0, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.inputIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.inputIconTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c6, ctx_r1.onButtonClick.bind(ctx_r1)));
  }
}
function Calendar_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 6, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function Calendar_ng_template_2_Template_input_focus_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onInputFocus($event));
    })("keydown", function Calendar_ng_template_2_Template_input_keydown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onInputKeydown($event));
    })("click", function Calendar_ng_template_2_Template_input_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onInputClick());
    })("blur", function Calendar_ng_template_2_Template_input_blur_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onInputBlur($event));
    })("input", function Calendar_ng_template_2_Template_input_input_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onUserInput($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Calendar_ng_template_2_ng_container_2_Template, 3, 2, "ng-container", 7)(3, Calendar_ng_template_2_button_3_Template, 3, 6, "button", 8)(4, Calendar_ng_template_2_ng_container_4_Template, 3, 5, "ng-container", 7);
  }
  if (rf & 2) {
    let tmp_15_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r1.inputStyleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r1.inputFieldValue)("readonly", ctx_r1.readonlyInput)("ngStyle", ctx_r1.inputStyle)("placeholder", ctx_r1.placeholder || "")("disabled", ctx_r1.disabled)("ngClass", ctx_r1.inputClass)("autofocus", ctx_r1.autofocus);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx_r1.inputId)("name", ctx_r1.name)("required", ctx_r1.required)("aria-required", ctx_r1.required)("aria-expanded", (tmp_15_0 = ctx_r1.overlayVisible) !== null && tmp_15_0 !== undefined ? tmp_15_0 : false)("aria-controls", ctx_r1.overlayVisible ? ctx_r1.panelId : null)("aria-labelledby", ctx_r1.ariaLabelledBy)("aria-label", ctx_r1.ariaLabel)("tabindex", ctx_r1.tabindex)("inputmode", ctx_r1.touchUI ? "off" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.showClear && !ctx_r1.disabled && ctx_r1.value != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.showIcon && ctx_r1.iconDisplay === "button");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.iconDisplay === "input" && ctx_r1.showIcon);
  }
}
function Calendar_div_3_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Calendar_div_3_ng_container_4_div_2_button_2_ChevronLeftIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ChevronLeftIcon", 40);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-datepicker-prev-icon");
  }
}
function Calendar_div_3_ng_container_4_div_2_button_2_span_2_1_ng_template_0_Template(rf, ctx) {}
function Calendar_div_3_ng_container_4_div_2_button_2_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Calendar_div_3_ng_container_4_div_2_button_2_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Calendar_div_3_ng_container_4_div_2_button_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Calendar_div_3_ng_container_4_div_2_button_2_span_2_1_Template, 1, 0, null, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.previousIconTemplate);
  }
}
function Calendar_div_3_ng_container_4_div_2_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function Calendar_div_3_ng_container_4_div_2_button_2_Template_button_keydown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onContainerButtonKeydown($event));
    })("click", function Calendar_div_3_ng_container_4_div_2_button_2_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onPrevButtonClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Calendar_div_3_ng_container_4_div_2_button_2_ChevronLeftIcon_1_Template, 1, 1, "ChevronLeftIcon", 35)(2, Calendar_div_3_ng_container_4_div_2_button_2_span_2_Template, 2, 1, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r1.prevIconAriaLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.previousIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.previousIconTemplate);
  }
}
function Calendar_div_3_ng_container_4_div_2_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Calendar_div_3_ng_container_4_div_2_button_4_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.switchToMonthView($event));
    })("keydown", function Calendar_div_3_ng_container_4_div_2_button_4_Template_button_keydown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onContainerButtonKeydown($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const month_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.switchViewButtonDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r1.getTranslation("chooseMonth"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.getMonthName(month_r12.month), " ");
  }
}
function Calendar_div_3_ng_container_4_div_2_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Calendar_div_3_ng_container_4_div_2_button_5_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.switchToYearView($event));
    })("keydown", function Calendar_div_3_ng_container_4_div_2_button_5_Template_button_keydown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onContainerButtonKeydown($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const month_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.switchViewButtonDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r1.getTranslation("chooseYear"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.getYear(month_r12), " ");
  }
}
function Calendar_div_3_ng_container_4_div_2_span_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r1.yearPickerValues()[0], " - ", ctx_r1.yearPickerValues()[ctx_r1.yearPickerValues().length - 1], "");
  }
}
function Calendar_div_3_ng_container_4_div_2_span_6_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Calendar_div_3_ng_container_4_div_2_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Calendar_div_3_ng_container_4_div_2_span_6_ng_container_1_Template, 2, 2, "ng-container", 7)(2, Calendar_div_3_ng_container_4_div_2_span_6_ng_container_2_Template, 1, 0, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.decadeTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.decadeTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c12, ctx_r1.yearPickerValues));
  }
}
function Calendar_div_3_ng_container_4_div_2_ChevronRightIcon_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ChevronRightIcon", 40);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-datepicker-next-icon");
  }
}
function Calendar_div_3_ng_container_4_div_2_span_9_1_ng_template_0_Template(rf, ctx) {}
function Calendar_div_3_ng_container_4_div_2_span_9_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Calendar_div_3_ng_container_4_div_2_span_9_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Calendar_div_3_ng_container_4_div_2_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Calendar_div_3_ng_container_4_div_2_span_9_1_Template, 1, 0, null, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.nextIconTemplate);
  }
}
function Calendar_div_3_ng_container_4_div_2_div_10_th_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 51)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.getTranslation("weekHeader"));
  }
}
function Calendar_div_3_ng_container_4_div_2_div_10_th_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 52)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const weekDay_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](weekDay_r14);
  }
}
function Calendar_div_3_ng_container_4_div_2_div_10_tr_7_td_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 55)(1, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const j_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const month_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", month_r12.weekNumbers[j_r15], " ");
  }
}
function Calendar_div_3_ng_container_4_div_2_div_10_tr_7_td_2_ng_container_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const date_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](date_r17.day);
  }
}
function Calendar_div_3_ng_container_4_div_2_div_10_tr_7_td_2_ng_container_1_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Calendar_div_3_ng_container_4_div_2_div_10_tr_7_td_2_ng_container_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Calendar_div_3_ng_container_4_div_2_div_10_tr_7_td_2_ng_container_1_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const date_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.dateTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c12, date_r17));
  }
}
function Calendar_div_3_ng_container_4_div_2_div_10_tr_7_td_2_ng_container_1_ng_container_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Calendar_div_3_ng_container_4_div_2_div_10_tr_7_td_2_ng_container_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Calendar_div_3_ng_container_4_div_2_div_10_tr_7_td_2_ng_container_1_ng_container_4_ng_container_1_Template, 1, 0, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const date_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.disabledDateTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c12, date_r17));
  }
}
function Calendar_div_3_ng_container_4_div_2_div_10_tr_7_td_2_ng_container_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const date_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", date_r17.day, " ");
  }
}
function Calendar_div_3_ng_container_4_div_2_div_10_tr_7_td_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Calendar_div_3_ng_container_4_div_2_div_10_tr_7_td_2_ng_container_1_Template_span_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);
      const date_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onDateSelect($event, date_r17));
    })("keydown", function Calendar_div_3_ng_container_4_div_2_div_10_tr_7_td_2_ng_container_1_Template_span_keydown_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);
      const date_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      const i_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onDateCellKeydown($event, date_r17, i_r18));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Calendar_div_3_ng_container_4_div_2_div_10_tr_7_td_2_ng_container_1_ng_container_2_Template, 2, 1, "ng-container", 7)(3, Calendar_div_3_ng_container_4_div_2_div_10_tr_7_td_2_ng_container_1_ng_container_3_Template, 2, 4, "ng-container", 7)(4, Calendar_div_3_ng_container_4_div_2_div_10_tr_7_td_2_ng_container_1_ng_container_4_Template, 2, 4, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, Calendar_div_3_ng_container_4_div_2_div_10_tr_7_td_2_ng_container_1_div_5_Template, 2, 1, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const date_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](6, _c14, ctx_r1.isSelected(date_r17) && date_r17.selectable, !date_r17.selectable));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-date", ctx_r1.formatDateKey(ctx_r1.formatDateMetaToDate(date_r17)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.dateTemplate && (date_r17.selectable || !ctx_r1.disabledDateTemplate));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", date_r17.selectable || !ctx_r1.disabledDateTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !date_r17.selectable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isSelected(date_r17));
  }
}
function Calendar_div_3_ng_container_4_div_2_div_10_tr_7_td_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Calendar_div_3_ng_container_4_div_2_div_10_tr_7_td_2_ng_container_1_Template, 6, 9, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const date_r17 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c13, date_r17.otherMonth, date_r17.today));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", date_r17.day);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", date_r17.otherMonth ? ctx_r1.showOtherMonths : true);
  }
}
function Calendar_div_3_ng_container_4_div_2_div_10_tr_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Calendar_div_3_ng_container_4_div_2_div_10_tr_7_td_1_Template, 3, 1, "td", 53)(2, Calendar_div_3_ng_container_4_div_2_div_10_tr_7_td_2_Template, 2, 6, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const week_r19 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.showWeek);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", week_r19);
  }
}
function Calendar_div_3_ng_container_4_div_2_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46)(1, "table", 47)(2, "thead")(3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, Calendar_div_3_ng_container_4_div_2_div_10_th_4_Template, 3, 1, "th", 48)(5, Calendar_div_3_ng_container_4_div_2_div_10_th_5_Template, 3, 1, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, Calendar_div_3_ng_container_4_div_2_div_10_tr_7_Template, 3, 2, "tr", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const month_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.showWeek);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.weekDays);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", month_r12.dates);
  }
}
function Calendar_div_3_ng_container_4_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27)(1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Calendar_div_3_ng_container_4_div_2_button_2_Template, 3, 3, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, Calendar_div_3_ng_container_4_div_2_button_4_Template, 2, 3, "button", 31)(5, Calendar_div_3_ng_container_4_div_2_button_5_Template, 2, 3, "button", 32)(6, Calendar_div_3_ng_container_4_div_2_span_6_Template, 3, 5, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function Calendar_div_3_ng_container_4_div_2_Template_button_keydown_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onContainerButtonKeydown($event));
    })("click", function Calendar_div_3_ng_container_4_div_2_Template_button_click_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onNextButtonClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, Calendar_div_3_ng_container_4_div_2_ChevronRightIcon_8_Template, 1, 1, "ChevronRightIcon", 35)(9, Calendar_div_3_ng_container_4_div_2_span_9_Template, 2, 1, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, Calendar_div_3_ng_container_4_div_2_div_10_Template, 8, 3, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r18 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r18 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.currentView === "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.currentView !== "year");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.currentView === "year");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx_r1.numberOfMonths === 1 ? "inline-flex" : i_r18 === ctx_r1.numberOfMonths - 1 ? "inline-flex" : "none");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r1.nextIconAriaLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.nextIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.nextIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.currentView === "date");
  }
}
function Calendar_div_3_ng_container_4_div_3_span_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const m_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", m_r22, " ");
  }
}
function Calendar_div_3_ng_container_4_div_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Calendar_div_3_ng_container_4_div_3_span_1_Template_span_click_0_listener($event) {
      const i_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onMonthSelect($event, i_r21));
    })("keydown", function Calendar_div_3_ng_container_4_div_3_span_1_Template_span_keydown_0_listener($event) {
      const i_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onMonthCellKeydown($event, i_r21));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Calendar_div_3_ng_container_4_div_3_span_1_div_2_Template, 2, 1, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const m_r22 = ctx.$implicit;
    const i_r21 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c14, ctx_r1.isMonthSelected(i_r21), ctx_r1.isMonthDisabled(i_r21)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", m_r22, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isMonthSelected(i_r21));
  }
}
function Calendar_div_3_ng_container_4_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Calendar_div_3_ng_container_4_div_3_span_1_Template, 3, 6, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.monthPickerValues());
  }
}
function Calendar_div_3_ng_container_4_div_4_span_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const y_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", y_r24, " ");
  }
}
function Calendar_div_3_ng_container_4_div_4_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Calendar_div_3_ng_container_4_div_4_span_1_Template_span_click_0_listener($event) {
      const y_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onYearSelect($event, y_r24));
    })("keydown", function Calendar_div_3_ng_container_4_div_4_span_1_Template_span_keydown_0_listener($event) {
      const y_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onYearCellKeydown($event, y_r24));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Calendar_div_3_ng_container_4_div_4_span_1_div_2_Template, 2, 1, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const y_r24 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c14, ctx_r1.isYearSelected(y_r24), ctx_r1.isYearDisabled(y_r24)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", y_r24, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isYearSelected(y_r24));
  }
}
function Calendar_div_3_ng_container_4_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Calendar_div_3_ng_container_4_div_4_span_1_Template, 3, 6, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.yearPickerValues());
  }
}
function Calendar_div_3_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Calendar_div_3_ng_container_4_div_2_Template, 11, 10, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, Calendar_div_3_ng_container_4_div_3_Template, 2, 1, "div", 25)(4, Calendar_div_3_ng_container_4_div_4_Template, 2, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.months);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.currentView === "month");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.currentView === "year");
  }
}
function Calendar_div_3_div_5_ChevronUpIcon_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ChevronUpIcon");
  }
}
function Calendar_div_3_div_5_4_ng_template_0_Template(rf, ctx) {}
function Calendar_div_3_div_5_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Calendar_div_3_div_5_4_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Calendar_div_3_div_5_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
}
function Calendar_div_3_div_5_ChevronDownIcon_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ChevronDownIcon");
  }
}
function Calendar_div_3_div_5_10_ng_template_0_Template(rf, ctx) {}
function Calendar_div_3_div_5_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Calendar_div_3_div_5_10_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Calendar_div_3_div_5_ChevronUpIcon_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ChevronUpIcon");
  }
}
function Calendar_div_3_div_5_17_ng_template_0_Template(rf, ctx) {}
function Calendar_div_3_div_5_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Calendar_div_3_div_5_17_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Calendar_div_3_div_5_ng_container_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
}
function Calendar_div_3_div_5_ChevronDownIcon_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ChevronDownIcon");
  }
}
function Calendar_div_3_div_5_23_ng_template_0_Template(rf, ctx) {}
function Calendar_div_3_div_5_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Calendar_div_3_div_5_23_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Calendar_div_3_div_5_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 69)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.timeSeparator);
  }
}
function Calendar_div_3_div_5_div_25_ChevronUpIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ChevronUpIcon");
  }
}
function Calendar_div_3_div_5_div_25_3_ng_template_0_Template(rf, ctx) {}
function Calendar_div_3_div_5_div_25_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Calendar_div_3_div_5_div_25_3_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Calendar_div_3_div_5_div_25_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
}
function Calendar_div_3_div_5_div_25_ChevronDownIcon_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ChevronDownIcon");
  }
}
function Calendar_div_3_div_5_div_25_9_ng_template_0_Template(rf, ctx) {}
function Calendar_div_3_div_5_div_25_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Calendar_div_3_div_5_div_25_9_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Calendar_div_3_div_5_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 74)(1, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function Calendar_div_3_div_5_div_25_Template_button_keydown_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onContainerButtonKeydown($event));
    })("keydown.enter", function Calendar_div_3_div_5_div_25_Template_button_keydown_enter_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.incrementSecond($event));
    })("keydown.space", function Calendar_div_3_div_5_div_25_Template_button_keydown_space_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.incrementSecond($event));
    })("mousedown", function Calendar_div_3_div_5_div_25_Template_button_mousedown_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onTimePickerElementMouseDown($event, 2, 1));
    })("mouseup", function Calendar_div_3_div_5_div_25_Template_button_mouseup_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onTimePickerElementMouseUp($event));
    })("keyup.enter", function Calendar_div_3_div_5_div_25_Template_button_keyup_enter_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onTimePickerElementMouseUp($event));
    })("keyup.space", function Calendar_div_3_div_5_div_25_Template_button_keyup_space_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onTimePickerElementMouseUp($event));
    })("mouseleave", function Calendar_div_3_div_5_div_25_Template_button_mouseleave_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onTimePickerElementMouseLeave());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Calendar_div_3_div_5_div_25_ChevronUpIcon_2_Template, 1, 0, "ChevronUpIcon", 7)(3, Calendar_div_3_div_5_div_25_3_Template, 1, 0, null, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, Calendar_div_3_div_5_div_25_ng_container_5_Template, 2, 0, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function Calendar_div_3_div_5_div_25_Template_button_keydown_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onContainerButtonKeydown($event));
    })("keydown.enter", function Calendar_div_3_div_5_div_25_Template_button_keydown_enter_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.decrementSecond($event));
    })("keydown.space", function Calendar_div_3_div_5_div_25_Template_button_keydown_space_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.decrementSecond($event));
    })("mousedown", function Calendar_div_3_div_5_div_25_Template_button_mousedown_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onTimePickerElementMouseDown($event, 2, -1));
    })("mouseup", function Calendar_div_3_div_5_div_25_Template_button_mouseup_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onTimePickerElementMouseUp($event));
    })("keyup.enter", function Calendar_div_3_div_5_div_25_Template_button_keyup_enter_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onTimePickerElementMouseUp($event));
    })("keyup.space", function Calendar_div_3_div_5_div_25_Template_button_keyup_space_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onTimePickerElementMouseUp($event));
    })("mouseleave", function Calendar_div_3_div_5_div_25_Template_button_mouseleave_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onTimePickerElementMouseLeave());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, Calendar_div_3_div_5_div_25_ChevronDownIcon_8_Template, 1, 0, "ChevronDownIcon", 7)(9, Calendar_div_3_div_5_div_25_9_Template, 1, 0, null, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r1.getTranslation("nextSecond"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.incrementIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.incrementIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.currentSecond < 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.currentSecond);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r1.getTranslation("prevSecond"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.decrementIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.decrementIconTemplate);
  }
}
function Calendar_div_3_div_5_div_26_ChevronUpIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ChevronUpIcon");
  }
}
function Calendar_div_3_div_5_div_26_3_ng_template_0_Template(rf, ctx) {}
function Calendar_div_3_div_5_div_26_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Calendar_div_3_div_5_div_26_3_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Calendar_div_3_div_5_div_26_ChevronDownIcon_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ChevronDownIcon");
  }
}
function Calendar_div_3_div_5_div_26_8_ng_template_0_Template(rf, ctx) {}
function Calendar_div_3_div_5_div_26_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Calendar_div_3_div_5_div_26_8_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Calendar_div_3_div_5_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 75)(1, "button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function Calendar_div_3_div_5_div_26_Template_button_keydown_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onContainerButtonKeydown($event));
    })("click", function Calendar_div_3_div_5_div_26_Template_button_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.toggleAMPM($event));
    })("keydown.enter", function Calendar_div_3_div_5_div_26_Template_button_keydown_enter_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.toggleAMPM($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Calendar_div_3_div_5_div_26_ChevronUpIcon_2_Template, 1, 0, "ChevronUpIcon", 7)(3, Calendar_div_3_div_5_div_26_3_Template, 1, 0, null, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function Calendar_div_3_div_5_div_26_Template_button_keydown_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onContainerButtonKeydown($event));
    })("click", function Calendar_div_3_div_5_div_26_Template_button_click_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.toggleAMPM($event));
    })("keydown.enter", function Calendar_div_3_div_5_div_26_Template_button_keydown_enter_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.toggleAMPM($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, Calendar_div_3_div_5_div_26_ChevronDownIcon_7_Template, 1, 0, "ChevronDownIcon", 7)(8, Calendar_div_3_div_5_div_26_8_Template, 1, 0, null, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r1.getTranslation("am"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.incrementIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.incrementIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.pm ? "PM" : "AM");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r1.getTranslation("pm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.decrementIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.decrementIconTemplate);
  }
}
function Calendar_div_3_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 66)(1, "div", 67)(2, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function Calendar_div_3_div_5_Template_button_keydown_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onContainerButtonKeydown($event));
    })("keydown.enter", function Calendar_div_3_div_5_Template_button_keydown_enter_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.incrementHour($event));
    })("keydown.space", function Calendar_div_3_div_5_Template_button_keydown_space_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.incrementHour($event));
    })("mousedown", function Calendar_div_3_div_5_Template_button_mousedown_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onTimePickerElementMouseDown($event, 0, 1));
    })("mouseup", function Calendar_div_3_div_5_Template_button_mouseup_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onTimePickerElementMouseUp($event));
    })("keyup.enter", function Calendar_div_3_div_5_Template_button_keyup_enter_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onTimePickerElementMouseUp($event));
    })("keyup.space", function Calendar_div_3_div_5_Template_button_keyup_space_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onTimePickerElementMouseUp($event));
    })("mouseleave", function Calendar_div_3_div_5_Template_button_mouseleave_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onTimePickerElementMouseLeave());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, Calendar_div_3_div_5_ChevronUpIcon_3_Template, 1, 0, "ChevronUpIcon", 7)(4, Calendar_div_3_div_5_4_Template, 1, 0, null, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, Calendar_div_3_div_5_ng_container_6_Template, 2, 0, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function Calendar_div_3_div_5_Template_button_keydown_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onContainerButtonKeydown($event));
    })("keydown.enter", function Calendar_div_3_div_5_Template_button_keydown_enter_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.decrementHour($event));
    })("keydown.space", function Calendar_div_3_div_5_Template_button_keydown_space_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.decrementHour($event));
    })("mousedown", function Calendar_div_3_div_5_Template_button_mousedown_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onTimePickerElementMouseDown($event, 0, -1));
    })("mouseup", function Calendar_div_3_div_5_Template_button_mouseup_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onTimePickerElementMouseUp($event));
    })("keyup.enter", function Calendar_div_3_div_5_Template_button_keyup_enter_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onTimePickerElementMouseUp($event));
    })("keyup.space", function Calendar_div_3_div_5_Template_button_keyup_space_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onTimePickerElementMouseUp($event));
    })("mouseleave", function Calendar_div_3_div_5_Template_button_mouseleave_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onTimePickerElementMouseLeave());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, Calendar_div_3_div_5_ChevronDownIcon_9_Template, 1, 0, "ChevronDownIcon", 7)(10, Calendar_div_3_div_5_10_Template, 1, 0, null, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 69)(12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 70)(15, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function Calendar_div_3_div_5_Template_button_keydown_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onContainerButtonKeydown($event));
    })("keydown.enter", function Calendar_div_3_div_5_Template_button_keydown_enter_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.incrementMinute($event));
    })("keydown.space", function Calendar_div_3_div_5_Template_button_keydown_space_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.incrementMinute($event));
    })("mousedown", function Calendar_div_3_div_5_Template_button_mousedown_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onTimePickerElementMouseDown($event, 1, 1));
    })("mouseup", function Calendar_div_3_div_5_Template_button_mouseup_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onTimePickerElementMouseUp($event));
    })("keyup.enter", function Calendar_div_3_div_5_Template_button_keyup_enter_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onTimePickerElementMouseUp($event));
    })("keyup.space", function Calendar_div_3_div_5_Template_button_keyup_space_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onTimePickerElementMouseUp($event));
    })("mouseleave", function Calendar_div_3_div_5_Template_button_mouseleave_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onTimePickerElementMouseLeave());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, Calendar_div_3_div_5_ChevronUpIcon_16_Template, 1, 0, "ChevronUpIcon", 7)(17, Calendar_div_3_div_5_17_Template, 1, 0, null, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, Calendar_div_3_div_5_ng_container_19_Template, 2, 0, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function Calendar_div_3_div_5_Template_button_keydown_21_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onContainerButtonKeydown($event));
    })("keydown.enter", function Calendar_div_3_div_5_Template_button_keydown_enter_21_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.decrementMinute($event));
    })("keydown.space", function Calendar_div_3_div_5_Template_button_keydown_space_21_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.decrementMinute($event));
    })("mousedown", function Calendar_div_3_div_5_Template_button_mousedown_21_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onTimePickerElementMouseDown($event, 1, -1));
    })("mouseup", function Calendar_div_3_div_5_Template_button_mouseup_21_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onTimePickerElementMouseUp($event));
    })("keyup.enter", function Calendar_div_3_div_5_Template_button_keyup_enter_21_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onTimePickerElementMouseUp($event));
    })("keyup.space", function Calendar_div_3_div_5_Template_button_keyup_space_21_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onTimePickerElementMouseUp($event));
    })("mouseleave", function Calendar_div_3_div_5_Template_button_mouseleave_21_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onTimePickerElementMouseLeave());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, Calendar_div_3_div_5_ChevronDownIcon_22_Template, 1, 0, "ChevronDownIcon", 7)(23, Calendar_div_3_div_5_23_Template, 1, 0, null, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, Calendar_div_3_div_5_div_24_Template, 3, 1, "div", 71)(25, Calendar_div_3_div_5_div_25_Template, 10, 8, "div", 72)(26, Calendar_div_3_div_5_div_26_Template, 9, 7, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r1.getTranslation("nextHour"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.incrementIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.incrementIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.currentHour < 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.currentHour);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r1.getTranslation("prevHour"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.decrementIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.decrementIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.timeSeparator);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r1.getTranslation("nextMinute"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.incrementIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.incrementIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.currentMinute < 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.currentMinute);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r1.getTranslation("prevMinute"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.decrementIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.decrementIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.showSeconds);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.showSeconds);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.hourFormat == "12");
  }
}
function Calendar_div_3_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 77)(1, "button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function Calendar_div_3_div_6_Template_button_keydown_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onContainerButtonKeydown($event));
    })("click", function Calendar_div_3_div_6_Template_button_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onTodayButtonClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function Calendar_div_3_div_6_Template_button_keydown_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onContainerButtonKeydown($event));
    })("click", function Calendar_div_3_div_6_Template_button_click_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onClearButtonClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", ctx_r1.getTranslation("today"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c15, ctx_r1.todayButtonStyleClass));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", ctx_r1.getTranslation("clear"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c15, ctx_r1.clearButtonStyleClass));
  }
}
function Calendar_div_3_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Calendar_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@overlayAnimation.start", function Calendar_div_3_Template_div_animation_overlayAnimation_start_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onOverlayAnimationStart($event));
    })("@overlayAnimation.done", function Calendar_div_3_Template_div_animation_overlayAnimation_done_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onOverlayAnimationDone($event));
    })("click", function Calendar_div_3_Template_div_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onOverlayClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, Calendar_div_3_ng_container_3_Template, 1, 0, "ng-container", 13)(4, Calendar_div_3_ng_container_4_Template, 5, 3, "ng-container", 7)(5, Calendar_div_3_div_5_Template, 27, 20, "div", 21)(6, Calendar_div_3_div_6_Template, 3, 8, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](7, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, Calendar_div_3_ng_container_8_Template, 1, 0, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r1.panelStyleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r1.panelStyle)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction6"](15, _c8, ctx_r1.inline, ctx_r1.disabled, ctx_r1.timeOnly, ctx_r1.numberOfMonths > 1, ctx_r1.view === "month", ctx_r1.touchUI))("@overlayAnimation", ctx_r1.touchUI ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](25, _c10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](22, _c9, ctx_r1.showTransitionOptions, ctx_r1.hideTransitionOptions)) : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](30, _c11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](27, _c9, ctx_r1.showTransitionOptions, ctx_r1.hideTransitionOptions)))("@.disabled", ctx_r1.inline === true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx_r1.panelId)("aria-label", ctx_r1.getTranslation("chooseDate"))("role", ctx_r1.inline ? null : "dialog")("aria-modal", ctx_r1.inline ? null : "true");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.headerTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.timeOnly);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r1.showTime || ctx_r1.timeOnly) && ctx_r1.currentView === "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.showButtonBar);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.footerTemplate);
  }
}
const CALENDAR_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
  useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => Calendar),
  multi: true
};
/**
 * Calendar also known as DatePicker, is a form component to work with dates.
 * @group Components
 */
let Calendar = /*#__PURE__*/(() => {
  class Calendar {
    document;
    el;
    renderer;
    cd;
    zone;
    config;
    overlayService;
    iconDisplay = 'button';
    /**
     * Inline style of the component.
     * @group Props
     */
    style;
    /**
     * Style class of the component.
     * @group Props
     */
    styleClass;
    /**
     * Inline style of the input field.
     * @group Props
     */
    inputStyle;
    /**
     * Identifier of the focus input to match a label defined for the component.
     * @group Props
     */
    inputId;
    /**
     * Name of the input element.
     * @group Props
     */
    name;
    /**
     * Style class of the input field.
     * @group Props
     */
    inputStyleClass;
    /**
     * Placeholder text for the input.
     * @group Props
     */
    placeholder;
    /**
     * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
     * @group Props
     */
    ariaLabelledBy;
    /**
     * Defines a string that labels the input for accessibility.
     * @group Props
     */
    ariaLabel;
    /**
     * Defines a string that labels the icon button for accessibility.
     * @group Props
     */
    iconAriaLabel;
    /**
     * When specified, disables the component.
     * @group Props
     */
    disabled;
    /**
     * Format of the date which can also be defined at locale settings.
     * @group Props
     */
    dateFormat;
    /**
     * Separator for multiple selection mode.
     * @group Props
     */
    multipleSeparator = ',';
    /**
     * Separator for joining start and end dates on range selection mode.
     * @group Props
     */
    rangeSeparator = '-';
    /**
     * When enabled, displays the calendar as inline. Default is false for popup mode.
     * @group Props
     */
    inline = false;
    /**
     * Whether to display dates in other months (non-selectable) at the start or end of the current month. To make these days selectable use the selectOtherMonths option.
     * @group Props
     */
    showOtherMonths = true;
    /**
     * Whether days in other months shown before or after the current month are selectable. This only applies if the showOtherMonths option is set to true.
     * @group Props
     */
    selectOtherMonths;
    /**
     * When enabled, displays a button with icon next to input.
     * @group Props
     */
    showIcon;
    /**
     * Icon of the calendar button.
     * @group Props
     */
    icon;
    /**
     * Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having#mydiv as variable name).
     * @group Props
     */
    appendTo;
    /**
     * When specified, prevents entering the date manually with keyboard.
     * @group Props
     */
    readonlyInput;
    /**
     * The cutoff year for determining the century for a date.
     * @group Props
     */
    shortYearCutoff = '+10';
    /**
     * Whether the month should be rendered as a dropdown instead of text.
     * @group Props
     * @deprecated Navigator is always on.
     */
    monthNavigator;
    /**
     * Whether the year should be rendered as a dropdown instead of text.
     * @group Props
     * @deprecated  Navigator is always on.
     */
    yearNavigator;
    /**
     * Specifies 12 or 24 hour format.
     * @group Props
     */
    hourFormat = '24';
    /**
     * Whether to display timepicker only.
     * @group Props
     */
    timeOnly;
    /**
     * Years to change per step in yearpicker.
     * @group Props
     */
    stepYearPicker = 10;
    /**
     * Hours to change per step.
     * @group Props
     */
    stepHour = 1;
    /**
     * Minutes to change per step.
     * @group Props
     */
    stepMinute = 1;
    /**
     * Seconds to change per step.
     * @group Props
     */
    stepSecond = 1;
    /**
     * Whether to show the seconds in time picker.
     * @group Props
     */
    showSeconds = false;
    /**
     * When present, it specifies that an input field must be filled out before submitting the form.
     * @group Props
     */
    required;
    /**
     * When disabled, datepicker will not be visible with input focus.
     * @group Props
     */
    showOnFocus = true;
    /**
     * When enabled, calendar will show week numbers.
     * @group Props
     */
    showWeek = false;
    /**
     * When enabled, calendar will start week numbers from first day of the year.
     * @group Props
     */
    startWeekFromFirstDayOfYear = false;
    /**
     * When enabled, a clear icon is displayed to clear the value.
     * @group Props
     */
    showClear = false;
    /**
     * Type of the value to write back to ngModel, default is date and alternative is string.
     * @group Props
     */
    dataType = 'date';
    /**
     * Defines the quantity of the selection, valid values are "single", "multiple" and "range".
     * @group Props
     */
    selectionMode = 'single';
    /**
     * Maximum number of selectable dates in multiple mode.
     * @group Props
     */
    maxDateCount;
    /**
     * Whether to display today and clear buttons at the footer
     * @group Props
     */
    showButtonBar;
    /**
     * Style class of the today button.
     * @group Props
     */
    todayButtonStyleClass = 'p-button-text';
    /**
     * Style class of the clear button.
     * @group Props
     */
    clearButtonStyleClass = 'p-button-text';
    /**
     * When present, it specifies that the component should automatically get focus on load.
     * @group Props
     */
    autofocus;
    /**
     * Whether to automatically manage layering.
     * @group Props
     */
    autoZIndex = true;
    /**
     * Base zIndex value to use in layering.
     * @group Props
     */
    baseZIndex = 0;
    /**
     * Style class of the datetimepicker container element.
     * @group Props
     */
    panelStyleClass;
    /**
     * Inline style of the datetimepicker container element.
     * @group Props
     */
    panelStyle;
    /**
     * Keep invalid value when input blur.
     * @group Props
     */
    keepInvalid = false;
    /**
     * Whether to hide the overlay on date selection.
     * @group Props
     */
    hideOnDateTimeSelect = true;
    /**
     * When enabled, calendar overlay is displayed as optimized for touch devices.
     * @group Props
     */
    touchUI;
    /**
     * Separator of time selector.
     * @group Props
     */
    timeSeparator = ':';
    /**
     * When enabled, can only focus on elements inside the calendar.
     * @group Props
     */
    focusTrap = true;
    /**
     * Transition options of the show animation.
     * @group Props
     */
    showTransitionOptions = '.12s cubic-bezier(0, 0, 0.2, 1)';
    /**
     * Transition options of the hide animation.
     * @group Props
     */
    hideTransitionOptions = '.1s linear';
    /**
     * Index of the element in tabbing order.
     * @group Props
     */
    tabindex;
    /**
     * Specifies the input variant of the component.
     * @group Props
     */
    variant = 'outlined';
    /**
     * The minimum selectable date.
     * @group Props
     */
    get minDate() {
      return this._minDate;
    }
    set minDate(date) {
      this._minDate = date;
      if (this.currentMonth != undefined && this.currentMonth != null && this.currentYear) {
        this.createMonths(this.currentMonth, this.currentYear);
      }
    }
    /**
     * The maximum selectable date.
     * @group Props
     */
    get maxDate() {
      return this._maxDate;
    }
    set maxDate(date) {
      this._maxDate = date;
      if (this.currentMonth != undefined && this.currentMonth != null && this.currentYear) {
        this.createMonths(this.currentMonth, this.currentYear);
      }
    }
    /**
     * Array with dates that should be disabled (not selectable).
     * @group Props
     */
    get disabledDates() {
      return this._disabledDates;
    }
    set disabledDates(disabledDates) {
      this._disabledDates = disabledDates;
      if (this.currentMonth != undefined && this.currentMonth != null && this.currentYear) {
        this.createMonths(this.currentMonth, this.currentYear);
      }
    }
    /**
     * Array with weekday numbers that should be disabled (not selectable).
     * @group Props
     */
    get disabledDays() {
      return this._disabledDays;
    }
    set disabledDays(disabledDays) {
      this._disabledDays = disabledDays;
      if (this.currentMonth != undefined && this.currentMonth != null && this.currentYear) {
        this.createMonths(this.currentMonth, this.currentYear);
      }
    }
    /**
     * The range of years displayed in the year drop-down in (nnnn:nnnn) format such as (2000:2020).
     * @group Props
     * @deprecated Years are based on decades by default.
     */
    get yearRange() {
      return this._yearRange;
    }
    set yearRange(yearRange) {
      this._yearRange = yearRange;
      if (yearRange) {
        const years = yearRange.split(':');
        const yearStart = parseInt(years[0]);
        const yearEnd = parseInt(years[1]);
        this.populateYearOptions(yearStart, yearEnd);
      }
    }
    /**
     * Whether to display timepicker.
     * @group Props
     */
    get showTime() {
      return this._showTime;
    }
    set showTime(showTime) {
      this._showTime = showTime;
      if (this.currentHour === undefined) {
        this.initTime(this.value || new Date());
      }
      this.updateInputfield();
    }
    /**
     * An array of options for responsive design.
     * @group Props
     */
    get responsiveOptions() {
      return this._responsiveOptions;
    }
    set responsiveOptions(responsiveOptions) {
      this._responsiveOptions = responsiveOptions;
      this.destroyResponsiveStyleElement();
      this.createResponsiveStyle();
    }
    /**
     * Number of months to display.
     * @group Props
     */
    get numberOfMonths() {
      return this._numberOfMonths;
    }
    set numberOfMonths(numberOfMonths) {
      this._numberOfMonths = numberOfMonths;
      this.destroyResponsiveStyleElement();
      this.createResponsiveStyle();
    }
    /**
     * Defines the first of the week for various date calculations.
     * @group Props
     */
    get firstDayOfWeek() {
      return this._firstDayOfWeek;
    }
    set firstDayOfWeek(firstDayOfWeek) {
      this._firstDayOfWeek = firstDayOfWeek;
      this.createWeekDays();
    }
    /**
     * Option to set calendar locale.
     * @group Props
     * @deprecated Locale property has no effect, use new i18n API instead.
     */
    set locale(newLocale) {
      console.warn('Locale property has no effect, use new i18n API instead.');
    }
    /**
     * Type of view to display, valid values are "date" for datepicker and "month" for month picker.
     * @group Props
     */
    get view() {
      return this._view;
    }
    set view(view) {
      this._view = view;
      this.currentView = this._view;
    }
    /**
     * Set the date to highlight on first opening if the field is blank.
     * @group Props
     */
    get defaultDate() {
      return this._defaultDate;
    }
    set defaultDate(defaultDate) {
      this._defaultDate = defaultDate;
      if (this.initialized) {
        const date = defaultDate || new Date();
        this.currentMonth = date.getMonth();
        this.currentYear = date.getFullYear();
        this.initTime(date);
        this.createMonths(this.currentMonth, this.currentYear);
      }
    }
    get inputClass() {
      return {
        'p-inputtext p-component': true,
        'p-variant-filled': this.variant === 'filled' || this.config.inputStyle() === 'filled'
      };
    }
    /**
     * Callback to invoke on focus of input field.
     * @param {Event} event - browser event.
     * @group Emits
     */
    onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke on blur of input field.
     * @param {Event} event - browser event.
     * @group Emits
     */
    onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when date panel closed.
     * @param {Event} event - Mouse event
     * @group Emits
     */
    onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke on date select.
     * @param {Date} date - date value.
     * @group Emits
     */
    onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when input field cleared.
     * @group Emits
     */
    onClear = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when input field is being typed.
     * @param {Event} event - browser event
     * @group Emits
     */
    onInput = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when today button is clicked.
     * @param {Date} date - today as a date instance.
     * @group Emits
     */
    onTodayClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when clear button is clicked.
     * @param {Event} event - browser event.
     * @group Emits
     */
    onClearClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when a month is changed using the navigators.
     * @param {CalendarMonthChangeEvent} event - custom month change event.
     * @group Emits
     */
    onMonthChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when a year is changed using the navigators.
     * @param {CalendarYearChangeEvent} event - custom year change event.
     * @group Emits
     */
    onYearChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when clicked outside of the date panel.
     * @group Emits
     */
    onClickOutside = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when datepicker panel is shown.
     * @group Emits
     */
    onShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    templates;
    containerViewChild;
    inputfieldViewChild;
    set content(content) {
      this.contentViewChild = content;
      if (this.contentViewChild) {
        if (this.isMonthNavigate) {
          Promise.resolve(null).then(() => this.updateFocus());
          this.isMonthNavigate = false;
        } else {
          if (!this.focus && !this.inline) {
            this.initFocusableCell();
          }
        }
      }
    }
    contentViewChild;
    value;
    dates;
    months;
    weekDays;
    currentMonth;
    currentYear;
    currentHour;
    currentMinute;
    currentSecond;
    pm;
    mask;
    maskClickListener;
    overlay;
    responsiveStyleElement;
    overlayVisible;
    onModelChange = () => {};
    onModelTouched = () => {};
    calendarElement;
    timePickerTimer;
    documentClickListener;
    animationEndListener;
    ticksTo1970;
    yearOptions;
    focus;
    isKeydown;
    filled;
    inputFieldValue = null;
    _minDate;
    _maxDate;
    _showTime;
    _yearRange;
    preventDocumentListener;
    dateTemplate;
    headerTemplate;
    footerTemplate;
    disabledDateTemplate;
    decadeTemplate;
    previousIconTemplate;
    nextIconTemplate;
    triggerIconTemplate;
    clearIconTemplate;
    decrementIconTemplate;
    incrementIconTemplate;
    inputIconTemplate;
    _disabledDates;
    _disabledDays;
    selectElement;
    todayElement;
    focusElement;
    scrollHandler;
    documentResizeListener;
    navigationState = null;
    isMonthNavigate;
    initialized;
    translationSubscription;
    _locale;
    _responsiveOptions;
    currentView;
    attributeSelector;
    panelId;
    _numberOfMonths = 1;
    _firstDayOfWeek;
    _view = 'date';
    preventFocus;
    _defaultDate;
    _focusKey = null;
    window;
    get locale() {
      return this._locale;
    }
    get iconButtonAriaLabel() {
      return this.iconAriaLabel ? this.iconAriaLabel : this.getTranslation('chooseDate');
    }
    get prevIconAriaLabel() {
      return this.currentView === 'year' ? this.getTranslation('prevDecade') : this.currentView === 'month' ? this.getTranslation('prevYear') : this.getTranslation('prevMonth');
    }
    get nextIconAriaLabel() {
      return this.currentView === 'year' ? this.getTranslation('nextDecade') : this.currentView === 'month' ? this.getTranslation('nextYear') : this.getTranslation('nextMonth');
    }
    constructor(document, el, renderer, cd, zone, config, overlayService) {
      this.document = document;
      this.el = el;
      this.renderer = renderer;
      this.cd = cd;
      this.zone = zone;
      this.config = config;
      this.overlayService = overlayService;
      this.window = this.document.defaultView;
    }
    ngOnInit() {
      this.attributeSelector = (0,primeng_utils__WEBPACK_IMPORTED_MODULE_2__.UniqueComponentId)();
      this.panelId = this.attributeSelector + '_panel';
      const date = this.defaultDate || new Date();
      this.createResponsiveStyle();
      this.currentMonth = date.getMonth();
      this.currentYear = date.getFullYear();
      this.yearOptions = [];
      this.currentView = this.view;
      if (this.view === 'date') {
        this.createWeekDays();
        this.initTime(date);
        this.createMonths(this.currentMonth, this.currentYear);
        this.ticksTo1970 = ((1970 - 1) * 365 + Math.floor(1970 / 4) - Math.floor(1970 / 100) + Math.floor(1970 / 400)) * 24 * 60 * 60 * 10000000;
      }
      this.translationSubscription = this.config.translationObserver.subscribe(() => {
        this.createWeekDays();
        this.cd.markForCheck();
      });
      this.initialized = true;
    }
    ngAfterContentInit() {
      this.templates.forEach(item => {
        switch (item.getType()) {
          case 'date':
            this.dateTemplate = item.template;
            break;
          case 'decade':
            this.decadeTemplate = item.template;
            break;
          case 'disabledDate':
            this.disabledDateTemplate = item.template;
            break;
          case 'header':
            this.headerTemplate = item.template;
            break;
          case 'inputicon':
            this.inputIconTemplate = item.template;
            break;
          case 'previousicon':
            this.previousIconTemplate = item.template;
            break;
          case 'nexticon':
            this.nextIconTemplate = item.template;
            break;
          case 'triggericon':
            this.triggerIconTemplate = item.template;
            break;
          case 'clearicon':
            this.clearIconTemplate = item.template;
            break;
          case 'decrementicon':
            this.decrementIconTemplate = item.template;
            break;
          case 'incrementicon':
            this.incrementIconTemplate = item.template;
            break;
          case 'footer':
            this.footerTemplate = item.template;
            break;
          default:
            this.dateTemplate = item.template;
            break;
        }
      });
    }
    ngAfterViewInit() {
      if (this.inline) {
        this.contentViewChild && this.contentViewChild.nativeElement.setAttribute(this.attributeSelector, '');
        if (!this.disabled && !this.inline) {
          this.initFocusableCell();
          if (this.numberOfMonths === 1) {
            if (this.contentViewChild && this.contentViewChild.nativeElement) {
              this.contentViewChild.nativeElement.style.width = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getOuterWidth(this.containerViewChild?.nativeElement) + 'px';
            }
          }
        }
      }
    }
    getTranslation(option) {
      return this.config.getTranslation(option);
    }
    populateYearOptions(start, end) {
      this.yearOptions = [];
      for (let i = start; i <= end; i++) {
        this.yearOptions.push(i);
      }
    }
    createWeekDays() {
      this.weekDays = [];
      let dayIndex = this.getFirstDateOfWeek();
      let dayLabels = this.getTranslation(primeng_api__WEBPACK_IMPORTED_MODULE_4__.TranslationKeys.DAY_NAMES_MIN);
      for (let i = 0; i < 7; i++) {
        this.weekDays.push(dayLabels[dayIndex]);
        dayIndex = dayIndex == 6 ? 0 : ++dayIndex;
      }
    }
    monthPickerValues() {
      let monthPickerValues = [];
      for (let i = 0; i <= 11; i++) {
        monthPickerValues.push(this.config.getTranslation('monthNamesShort')[i]);
      }
      return monthPickerValues;
    }
    yearPickerValues() {
      let yearPickerValues = [];
      let base = this.currentYear - this.currentYear % this.stepYearPicker;
      for (let i = 0; i < this.stepYearPicker; i++) {
        yearPickerValues.push(base + i);
      }
      return yearPickerValues;
    }
    createMonths(month, year) {
      this.months = this.months = [];
      for (let i = 0; i < this.numberOfMonths; i++) {
        let m = month + i;
        let y = year;
        if (m > 11) {
          m = m % 11 - 1;
          y = year + 1;
        }
        this.months.push(this.createMonth(m, y));
      }
    }
    getWeekNumber(date) {
      let checkDate = new Date(date.getTime());
      if (this.startWeekFromFirstDayOfYear) {
        let firstDayOfWeek = +this.getFirstDateOfWeek();
        checkDate.setDate(checkDate.getDate() + 6 + firstDayOfWeek - checkDate.getDay());
      } else {
        checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));
      }
      let time = checkDate.getTime();
      checkDate.setMonth(0);
      checkDate.setDate(1);
      return Math.floor(Math.round((time - checkDate.getTime()) / 86400000) / 7) + 1;
    }
    createMonth(month, year) {
      let dates = [];
      let firstDay = this.getFirstDayOfMonthIndex(month, year);
      let daysLength = this.getDaysCountInMonth(month, year);
      let prevMonthDaysLength = this.getDaysCountInPrevMonth(month, year);
      let dayNo = 1;
      let today = new Date();
      let weekNumbers = [];
      let monthRows = Math.ceil((daysLength + firstDay) / 7);
      for (let i = 0; i < monthRows; i++) {
        let week = [];
        if (i == 0) {
          for (let j = prevMonthDaysLength - firstDay + 1; j <= prevMonthDaysLength; j++) {
            let prev = this.getPreviousMonthAndYear(month, year);
            week.push({
              day: j,
              month: prev.month,
              year: prev.year,
              otherMonth: true,
              today: this.isToday(today, j, prev.month, prev.year),
              selectable: this.isSelectable(j, prev.month, prev.year, true)
            });
          }
          let remainingDaysLength = 7 - week.length;
          for (let j = 0; j < remainingDaysLength; j++) {
            week.push({
              day: dayNo,
              month: month,
              year: year,
              today: this.isToday(today, dayNo, month, year),
              selectable: this.isSelectable(dayNo, month, year, false)
            });
            dayNo++;
          }
        } else {
          for (let j = 0; j < 7; j++) {
            if (dayNo > daysLength) {
              let next = this.getNextMonthAndYear(month, year);
              week.push({
                day: dayNo - daysLength,
                month: next.month,
                year: next.year,
                otherMonth: true,
                today: this.isToday(today, dayNo - daysLength, next.month, next.year),
                selectable: this.isSelectable(dayNo - daysLength, next.month, next.year, true)
              });
            } else {
              week.push({
                day: dayNo,
                month: month,
                year: year,
                today: this.isToday(today, dayNo, month, year),
                selectable: this.isSelectable(dayNo, month, year, false)
              });
            }
            dayNo++;
          }
        }
        if (this.showWeek) {
          weekNumbers.push(this.getWeekNumber(new Date(week[0].year, week[0].month, week[0].day)));
        }
        dates.push(week);
      }
      return {
        month: month,
        year: year,
        dates: dates,
        weekNumbers: weekNumbers
      };
    }
    initTime(date) {
      this.pm = date.getHours() > 11;
      if (this.showTime) {
        this.currentMinute = date.getMinutes();
        this.currentSecond = date.getSeconds();
        this.setCurrentHourPM(date.getHours());
      } else if (this.timeOnly) {
        this.currentMinute = 0;
        this.currentHour = 0;
        this.currentSecond = 0;
      }
    }
    navBackward(event) {
      if (this.disabled) {
        event.preventDefault();
        return;
      }
      this.isMonthNavigate = true;
      if (this.currentView === 'month') {
        this.decrementYear();
        setTimeout(() => {
          this.updateFocus();
        }, 1);
      } else if (this.currentView === 'year') {
        this.decrementYearPickerStep();
        setTimeout(() => {
          this.updateFocus();
        }, 1);
      } else {
        if (this.currentMonth === 0) {
          this.currentMonth = 11;
          this.decrementYear();
        } else {
          this.currentMonth--;
        }
        this.onMonthChange.emit({
          month: this.currentMonth + 1,
          year: this.currentYear
        });
        this.createMonths(this.currentMonth, this.currentYear);
      }
    }
    navForward(event) {
      if (this.disabled) {
        event.preventDefault();
        return;
      }
      this.isMonthNavigate = true;
      if (this.currentView === 'month') {
        this.incrementYear();
        setTimeout(() => {
          this.updateFocus();
        }, 1);
      } else if (this.currentView === 'year') {
        this.incrementYearPickerStep();
        setTimeout(() => {
          this.updateFocus();
        }, 1);
      } else {
        if (this.currentMonth === 11) {
          this.currentMonth = 0;
          this.incrementYear();
        } else {
          this.currentMonth++;
        }
        this.onMonthChange.emit({
          month: this.currentMonth + 1,
          year: this.currentYear
        });
        this.createMonths(this.currentMonth, this.currentYear);
      }
    }
    decrementYear() {
      this.currentYear--;
      let _yearOptions = this.yearOptions;
      if (this.yearNavigator && this.currentYear < _yearOptions[0]) {
        let difference = _yearOptions[_yearOptions.length - 1] - _yearOptions[0];
        this.populateYearOptions(_yearOptions[0] - difference, _yearOptions[_yearOptions.length - 1] - difference);
      }
    }
    decrementYearPickerStep() {
      this.currentYear = this.currentYear - this.stepYearPicker;
    }
    incrementYearPickerStep() {
      this.currentYear = this.currentYear + this.stepYearPicker;
    }
    incrementYear() {
      this.currentYear++;
      let _yearOptions = this.yearOptions;
      if (this.yearNavigator && this.currentYear > _yearOptions[_yearOptions.length - 1]) {
        let difference = _yearOptions[_yearOptions.length - 1] - _yearOptions[0];
        this.populateYearOptions(_yearOptions[0] + difference, _yearOptions[_yearOptions.length - 1] + difference);
      }
    }
    switchToMonthView(event) {
      this.setCurrentView('month');
      event.preventDefault();
    }
    switchToYearView(event) {
      this.setCurrentView('year');
      event.preventDefault();
    }
    onDateSelect(event, dateMeta) {
      if (this.disabled || !dateMeta.selectable) {
        event.preventDefault();
        return;
      }
      if (this.isMultipleSelection() && this.isSelected(dateMeta)) {
        this.value = this.value.filter((date, i) => {
          return !this.isDateEquals(date, dateMeta);
        });
        if (this.value.length === 0) {
          this.value = null;
        }
        this.updateModel(this.value);
      } else {
        if (this.shouldSelectDate(dateMeta)) {
          this.selectDate(dateMeta);
        }
      }
      if (this.hideOnDateTimeSelect && (this.isSingleSelection() || this.isRangeSelection() && this.value[1])) {
        setTimeout(() => {
          event.preventDefault();
          this.hideOverlay();
          if (this.mask) {
            this.disableModality();
          }
          this.cd.markForCheck();
        }, 150);
      }
      this.updateInputfield();
      event.preventDefault();
    }
    shouldSelectDate(dateMeta) {
      if (this.isMultipleSelection()) return this.maxDateCount != null ? this.maxDateCount > (this.value ? this.value.length : 0) : true;else return true;
    }
    onMonthSelect(event, index) {
      if (this.view === 'month') {
        this.onDateSelect(event, {
          year: this.currentYear,
          month: index,
          day: 1,
          selectable: true
        });
      } else {
        this.currentMonth = index;
        this.createMonths(this.currentMonth, this.currentYear);
        this.setCurrentView('date');
        this.onMonthChange.emit({
          month: this.currentMonth + 1,
          year: this.currentYear
        });
      }
    }
    onYearSelect(event, year) {
      if (this.view === 'year') {
        this.onDateSelect(event, {
          year: year,
          month: 0,
          day: 1,
          selectable: true
        });
      } else {
        this.currentYear = year;
        this.setCurrentView('month');
        this.onYearChange.emit({
          month: this.currentMonth + 1,
          year: this.currentYear
        });
      }
    }
    updateInputfield() {
      let formattedValue = '';
      if (this.value) {
        if (this.isSingleSelection()) {
          formattedValue = this.formatDateTime(this.value);
        } else if (this.isMultipleSelection()) {
          for (let i = 0; i < this.value.length; i++) {
            let dateAsString = this.formatDateTime(this.value[i]);
            formattedValue += dateAsString;
            if (i !== this.value.length - 1) {
              formattedValue += this.multipleSeparator + ' ';
            }
          }
        } else if (this.isRangeSelection()) {
          if (this.value && this.value.length) {
            let startDate = this.value[0];
            let endDate = this.value[1];
            formattedValue = this.formatDateTime(startDate);
            if (endDate) {
              formattedValue += ' ' + this.rangeSeparator + ' ' + this.formatDateTime(endDate);
            }
          }
        }
      }
      this.inputFieldValue = formattedValue;
      this.updateFilledState();
      if (this.inputfieldViewChild && this.inputfieldViewChild.nativeElement) {
        this.inputfieldViewChild.nativeElement.value = this.inputFieldValue;
      }
    }
    formatDateTime(date) {
      let formattedValue = this.keepInvalid ? date : null;
      const isDateValid = this.isValidDateForTimeConstraints(date);
      if (this.isValidDate(date)) {
        if (this.timeOnly) {
          formattedValue = this.formatTime(date);
        } else {
          formattedValue = this.formatDate(date, this.getDateFormat());
          if (this.showTime) {
            formattedValue += ' ' + this.formatTime(date);
          }
        }
      } else if (this.dataType === 'string') {
        formattedValue = date;
      }
      formattedValue = isDateValid ? formattedValue : '';
      return formattedValue;
    }
    formatDateMetaToDate(dateMeta) {
      return new Date(dateMeta.year, dateMeta.month, dateMeta.day);
    }
    formatDateKey(date) {
      return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
    }
    setCurrentHourPM(hours) {
      if (this.hourFormat == '12') {
        this.pm = hours > 11;
        if (hours >= 12) {
          this.currentHour = hours == 12 ? 12 : hours - 12;
        } else {
          this.currentHour = hours == 0 ? 12 : hours;
        }
      } else {
        this.currentHour = hours;
      }
    }
    setCurrentView(currentView) {
      this.currentView = currentView;
      this.cd.detectChanges();
      this.alignOverlay();
    }
    selectDate(dateMeta) {
      let date = this.formatDateMetaToDate(dateMeta);
      if (this.showTime) {
        if (this.hourFormat == '12') {
          if (this.currentHour === 12) date.setHours(this.pm ? 12 : 0);else date.setHours(this.pm ? this.currentHour + 12 : this.currentHour);
        } else {
          date.setHours(this.currentHour);
        }
        date.setMinutes(this.currentMinute);
        date.setSeconds(this.currentSecond);
      }
      if (this.minDate && this.minDate > date) {
        date = this.minDate;
        this.setCurrentHourPM(date.getHours());
        this.currentMinute = date.getMinutes();
        this.currentSecond = date.getSeconds();
      }
      if (this.maxDate && this.maxDate < date) {
        date = this.maxDate;
        this.setCurrentHourPM(date.getHours());
        this.currentMinute = date.getMinutes();
        this.currentSecond = date.getSeconds();
      }
      if (this.isSingleSelection()) {
        this.updateModel(date);
      } else if (this.isMultipleSelection()) {
        this.updateModel(this.value ? [...this.value, date] : [date]);
      } else if (this.isRangeSelection()) {
        if (this.value && this.value.length) {
          let startDate = this.value[0];
          let endDate = this.value[1];
          if (!endDate && date.getTime() >= startDate.getTime()) {
            endDate = date;
          } else {
            startDate = date;
            endDate = null;
          }
          this.updateModel([startDate, endDate]);
        } else {
          this.updateModel([date, null]);
        }
      }
      this.onSelect.emit(date);
    }
    updateModel(value) {
      this.value = value;
      if (this.dataType == 'date') {
        this.onModelChange(this.value);
      } else if (this.dataType == 'string') {
        if (this.isSingleSelection()) {
          this.onModelChange(this.formatDateTime(this.value));
        } else {
          let stringArrValue = null;
          if (Array.isArray(this.value)) {
            stringArrValue = this.value.map(date => this.formatDateTime(date));
          }
          this.onModelChange(stringArrValue);
        }
      }
    }
    getFirstDayOfMonthIndex(month, year) {
      let day = new Date();
      day.setDate(1);
      day.setMonth(month);
      day.setFullYear(year);
      let dayIndex = day.getDay() + this.getSundayIndex();
      return dayIndex >= 7 ? dayIndex - 7 : dayIndex;
    }
    getDaysCountInMonth(month, year) {
      return 32 - this.daylightSavingAdjust(new Date(year, month, 32)).getDate();
    }
    getDaysCountInPrevMonth(month, year) {
      let prev = this.getPreviousMonthAndYear(month, year);
      return this.getDaysCountInMonth(prev.month, prev.year);
    }
    getPreviousMonthAndYear(month, year) {
      let m, y;
      if (month === 0) {
        m = 11;
        y = year - 1;
      } else {
        m = month - 1;
        y = year;
      }
      return {
        month: m,
        year: y
      };
    }
    getNextMonthAndYear(month, year) {
      let m, y;
      if (month === 11) {
        m = 0;
        y = year + 1;
      } else {
        m = month + 1;
        y = year;
      }
      return {
        month: m,
        year: y
      };
    }
    getSundayIndex() {
      let firstDayOfWeek = this.getFirstDateOfWeek();
      return firstDayOfWeek > 0 ? 7 - firstDayOfWeek : 0;
    }
    isSelected(dateMeta) {
      if (this.value) {
        if (this.isSingleSelection()) {
          return this.isDateEquals(this.value, dateMeta);
        } else if (this.isMultipleSelection()) {
          let selected = false;
          for (let date of this.value) {
            selected = this.isDateEquals(date, dateMeta);
            if (selected) {
              break;
            }
          }
          return selected;
        } else if (this.isRangeSelection()) {
          if (this.value[1]) return this.isDateEquals(this.value[0], dateMeta) || this.isDateEquals(this.value[1], dateMeta) || this.isDateBetween(this.value[0], this.value[1], dateMeta);else return this.isDateEquals(this.value[0], dateMeta);
        }
      } else {
        return false;
      }
    }
    isComparable() {
      return this.value != null && typeof this.value !== 'string';
    }
    isMonthSelected(month) {
      if (this.isComparable() && !this.isMultipleSelection()) {
        const [start, end] = this.isRangeSelection() ? this.value : [this.value, this.value];
        const selected = new Date(this.currentYear, month, 1);
        return selected >= start && selected <= (end ?? start);
      }
      return false;
    }
    isMonthDisabled(month, year) {
      const yearToCheck = year ?? this.currentYear;
      for (let day = 1; day < this.getDaysCountInMonth(month, yearToCheck) + 1; day++) {
        if (this.isSelectable(day, month, yearToCheck, false)) {
          return false;
        }
      }
      return true;
    }
    isYearDisabled(year) {
      return Array(12).fill(0).every((v, month) => this.isMonthDisabled(month, year));
    }
    isYearSelected(year) {
      if (this.isComparable()) {
        let value = this.isRangeSelection() ? this.value[0] : this.value;
        return !this.isMultipleSelection() ? value.getFullYear() === year : false;
      }
      return false;
    }
    isDateEquals(value, dateMeta) {
      if (value && primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.isDate(value)) return value.getDate() === dateMeta.day && value.getMonth() === dateMeta.month && value.getFullYear() === dateMeta.year;else return false;
    }
    isDateBetween(start, end, dateMeta) {
      let between = false;
      if (primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.isDate(start) && primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.isDate(end)) {
        let date = this.formatDateMetaToDate(dateMeta);
        return start.getTime() <= date.getTime() && end.getTime() >= date.getTime();
      }
      return between;
    }
    isSingleSelection() {
      return this.selectionMode === 'single';
    }
    isRangeSelection() {
      return this.selectionMode === 'range';
    }
    isMultipleSelection() {
      return this.selectionMode === 'multiple';
    }
    isToday(today, day, month, year) {
      return today.getDate() === day && today.getMonth() === month && today.getFullYear() === year;
    }
    isSelectable(day, month, year, otherMonth) {
      let validMin = true;
      let validMax = true;
      let validDate = true;
      let validDay = true;
      if (otherMonth && !this.selectOtherMonths) {
        return false;
      }
      if (this.minDate) {
        if (this.minDate.getFullYear() > year) {
          validMin = false;
        } else if (this.minDate.getFullYear() === year && this.currentView != 'year') {
          if (this.minDate.getMonth() > month) {
            validMin = false;
          } else if (this.minDate.getMonth() === month) {
            if (this.minDate.getDate() > day) {
              validMin = false;
            }
          }
        }
      }
      if (this.maxDate) {
        if (this.maxDate.getFullYear() < year) {
          validMax = false;
        } else if (this.maxDate.getFullYear() === year) {
          if (this.maxDate.getMonth() < month) {
            validMax = false;
          } else if (this.maxDate.getMonth() === month) {
            if (this.maxDate.getDate() < day) {
              validMax = false;
            }
          }
        }
      }
      if (this.disabledDates) {
        validDate = !this.isDateDisabled(day, month, year);
      }
      if (this.disabledDays) {
        validDay = !this.isDayDisabled(day, month, year);
      }
      return validMin && validMax && validDate && validDay;
    }
    isDateDisabled(day, month, year) {
      if (this.disabledDates) {
        for (let disabledDate of this.disabledDates) {
          if (disabledDate.getFullYear() === year && disabledDate.getMonth() === month && disabledDate.getDate() === day) {
            return true;
          }
        }
      }
      return false;
    }
    isDayDisabled(day, month, year) {
      if (this.disabledDays) {
        let weekday = new Date(year, month, day);
        let weekdayNumber = weekday.getDay();
        return this.disabledDays.indexOf(weekdayNumber) !== -1;
      }
      return false;
    }
    onInputFocus(event) {
      this.focus = true;
      if (this.showOnFocus) {
        this.showOverlay();
      }
      this.onFocus.emit(event);
    }
    onInputClick() {
      if (this.showOnFocus && !this.overlayVisible) {
        this.showOverlay();
      }
    }
    onInputBlur(event) {
      this.focus = false;
      this.onBlur.emit(event);
      if (!this.keepInvalid) {
        this.updateInputfield();
      }
      this.onModelTouched();
    }
    onButtonClick(event, inputfield = this.inputfieldViewChild?.nativeElement) {
      if (!this.overlayVisible) {
        inputfield.focus();
        this.showOverlay();
      } else {
        this.hideOverlay();
      }
    }
    clear() {
      this.inputFieldValue = null;
      this.value = null;
      this.onModelChange(this.value);
      this.onClear.emit();
    }
    onOverlayClick(event) {
      this.overlayService.add({
        originalEvent: event,
        target: this.el.nativeElement
      });
    }
    getMonthName(index) {
      return this.config.getTranslation('monthNames')[index];
    }
    getYear(month) {
      return this.currentView === 'month' ? this.currentYear : month.year;
    }
    switchViewButtonDisabled() {
      return this.numberOfMonths > 1 || this.disabled;
    }
    onPrevButtonClick(event) {
      this.navigationState = {
        backward: true,
        button: true
      };
      this.navBackward(event);
    }
    onNextButtonClick(event) {
      this.navigationState = {
        backward: false,
        button: true
      };
      this.navForward(event);
    }
    onContainerButtonKeydown(event) {
      switch (event.which) {
        //tab
        case 9:
          if (!this.inline) {
            this.trapFocus(event);
          }
          if (this.inline) {
            const headerElements = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.findSingle(this.containerViewChild?.nativeElement, '.p-datepicker-header');
            const element = event.target;
            if (this.timeOnly) {
              return;
            } else {
              if (element == headerElements.children[headerElements?.children?.length - 1]) {
                this.initFocusableCell();
              }
            }
          }
          break;
        //escape
        case 27:
          this.inputfieldViewChild?.nativeElement.focus();
          this.overlayVisible = false;
          event.preventDefault();
          break;
        default:
          //Noop
          break;
      }
    }
    onInputKeydown(event) {
      this.isKeydown = true;
      if (event.keyCode === 40 && this.contentViewChild) {
        this.trapFocus(event);
      } else if (event.keyCode === 27) {
        if (this.overlayVisible) {
          this.inputfieldViewChild?.nativeElement.focus();
          this.overlayVisible = false;
          event.preventDefault();
        }
      } else if (event.keyCode === 13) {
        if (this.overlayVisible) {
          this.overlayVisible = false;
          event.preventDefault();
        }
      } else if (event.keyCode === 9 && this.contentViewChild) {
        primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getFocusableElements(this.contentViewChild.nativeElement).forEach(el => el.tabIndex = '-1');
        if (this.overlayVisible) {
          this.overlayVisible = false;
        }
      }
    }
    onDateCellKeydown(event, dateMeta, groupIndex) {
      const cellContent = event.currentTarget;
      const cell = cellContent.parentElement;
      const currentDate = this.formatDateMetaToDate(dateMeta);
      switch (event.which) {
        //down arrow
        case 40:
          {
            cellContent.tabIndex = '-1';
            let cellIndex = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.index(cell);
            let nextRow = cell.parentElement.nextElementSibling;
            if (nextRow) {
              let focusCell = nextRow.children[cellIndex].children[0];
              if (primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.hasClass(focusCell, 'p-disabled')) {
                this.navigationState = {
                  backward: false
                };
                this.navForward(event);
              } else {
                nextRow.children[cellIndex].children[0].tabIndex = '0';
                nextRow.children[cellIndex].children[0].focus();
              }
            } else {
              this.navigationState = {
                backward: false
              };
              this.navForward(event);
            }
            event.preventDefault();
            break;
          }
        //up arrow
        case 38:
          {
            cellContent.tabIndex = '-1';
            let cellIndex = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.index(cell);
            let prevRow = cell.parentElement.previousElementSibling;
            if (prevRow) {
              let focusCell = prevRow.children[cellIndex].children[0];
              if (primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.hasClass(focusCell, 'p-disabled')) {
                this.navigationState = {
                  backward: true
                };
                this.navBackward(event);
              } else {
                focusCell.tabIndex = '0';
                focusCell.focus();
              }
            } else {
              this.navigationState = {
                backward: true
              };
              this.navBackward(event);
            }
            event.preventDefault();
            break;
          }
        //left arrow
        case 37:
          {
            cellContent.tabIndex = '-1';
            let prevCell = cell.previousElementSibling;
            if (prevCell) {
              let focusCell = prevCell.children[0];
              if (primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.hasClass(focusCell, 'p-disabled') || primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.hasClass(focusCell.parentElement, 'p-datepicker-weeknumber')) {
                this.navigateToMonth(true, groupIndex);
              } else {
                focusCell.tabIndex = '0';
                focusCell.focus();
              }
            } else {
              this.navigateToMonth(true, groupIndex);
            }
            event.preventDefault();
            break;
          }
        //right arrow
        case 39:
          {
            cellContent.tabIndex = '-1';
            let nextCell = cell.nextElementSibling;
            if (nextCell) {
              let focusCell = nextCell.children[0];
              if (primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.hasClass(focusCell, 'p-disabled')) {
                this.navigateToMonth(false, groupIndex);
              } else {
                focusCell.tabIndex = '0';
                focusCell.focus();
              }
            } else {
              this.navigateToMonth(false, groupIndex);
            }
            event.preventDefault();
            break;
          }
        //enter
        //space
        case 13:
        case 32:
          {
            this.onDateSelect(event, dateMeta);
            event.preventDefault();
            break;
          }
        //escape
        case 27:
          {
            this.inputfieldViewChild?.nativeElement.focus();
            this.overlayVisible = false;
            event.preventDefault();
            break;
          }
        //tab
        case 9:
          {
            if (!this.inline) {
              this.trapFocus(event);
            }
            break;
          }
        // page up
        case 33:
          {
            cellContent.tabIndex = '-1';
            const dateToFocus = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, currentDate.getDate());
            const focusKey = this.formatDateKey(dateToFocus);
            this.navigateToMonth(true, groupIndex, `span[data-date='${focusKey}']:not(.p-disabled):not(.p-ink)`);
            event.preventDefault();
            break;
          }
        // page down
        case 34:
          {
            cellContent.tabIndex = '-1';
            const dateToFocus = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, currentDate.getDate());
            const focusKey = this.formatDateKey(dateToFocus);
            this.navigateToMonth(false, groupIndex, `span[data-date='${focusKey}']:not(.p-disabled):not(.p-ink)`);
            event.preventDefault();
            break;
          }
        //home
        case 36:
          cellContent.tabIndex = '-1';
          const firstDayDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
          const firstDayDateKey = this.formatDateKey(firstDayDate);
          const firstDayCell = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.findSingle(cellContent.offsetParent, `span[data-date='${firstDayDateKey}']:not(.p-disabled):not(.p-ink)`);
          if (firstDayCell) {
            firstDayCell.tabIndex = '0';
            firstDayCell.focus();
          }
          event.preventDefault();
          break;
        //end
        case 35:
          cellContent.tabIndex = '-1';
          const lastDayDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
          const lastDayDateKey = this.formatDateKey(lastDayDate);
          const lastDayCell = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.findSingle(cellContent.offsetParent, `span[data-date='${lastDayDateKey}']:not(.p-disabled):not(.p-ink)`);
          if (lastDayDate) {
            lastDayCell.tabIndex = '0';
            lastDayCell.focus();
          }
          event.preventDefault();
          break;
        default:
          //no op
          break;
      }
    }
    onMonthCellKeydown(event, index) {
      const cell = event.currentTarget;
      switch (event.which) {
        //arrows
        case 38:
        case 40:
          {
            cell.tabIndex = '-1';
            var cells = cell.parentElement.children;
            var cellIndex = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.index(cell);
            let nextCell = cells[event.which === 40 ? cellIndex + 3 : cellIndex - 3];
            if (nextCell) {
              nextCell.tabIndex = '0';
              nextCell.focus();
            }
            event.preventDefault();
            break;
          }
        //left arrow
        case 37:
          {
            cell.tabIndex = '-1';
            let prevCell = cell.previousElementSibling;
            if (prevCell) {
              prevCell.tabIndex = '0';
              prevCell.focus();
            } else {
              this.navigationState = {
                backward: true
              };
              this.navBackward(event);
            }
            event.preventDefault();
            break;
          }
        //right arrow
        case 39:
          {
            cell.tabIndex = '-1';
            let nextCell = cell.nextElementSibling;
            if (nextCell) {
              nextCell.tabIndex = '0';
              nextCell.focus();
            } else {
              this.navigationState = {
                backward: false
              };
              this.navForward(event);
            }
            event.preventDefault();
            break;
          }
        //enter
        //space
        case 13:
        case 32:
          {
            this.onMonthSelect(event, index);
            event.preventDefault();
            break;
          }
        //escape
        case 27:
          {
            this.inputfieldViewChild?.nativeElement.focus();
            this.overlayVisible = false;
            event.preventDefault();
            break;
          }
        //tab
        case 9:
          {
            if (!this.inline) {
              this.trapFocus(event);
            }
            break;
          }
        default:
          //no op
          break;
      }
    }
    onYearCellKeydown(event, index) {
      const cell = event.currentTarget;
      switch (event.which) {
        //arrows
        case 38:
        case 40:
          {
            cell.tabIndex = '-1';
            var cells = cell.parentElement.children;
            var cellIndex = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.index(cell);
            let nextCell = cells[event.which === 40 ? cellIndex + 2 : cellIndex - 2];
            if (nextCell) {
              nextCell.tabIndex = '0';
              nextCell.focus();
            }
            event.preventDefault();
            break;
          }
        //left arrow
        case 37:
          {
            cell.tabIndex = '-1';
            let prevCell = cell.previousElementSibling;
            if (prevCell) {
              prevCell.tabIndex = '0';
              prevCell.focus();
            } else {
              this.navigationState = {
                backward: true
              };
              this.navBackward(event);
            }
            event.preventDefault();
            break;
          }
        //right arrow
        case 39:
          {
            cell.tabIndex = '-1';
            let nextCell = cell.nextElementSibling;
            if (nextCell) {
              nextCell.tabIndex = '0';
              nextCell.focus();
            } else {
              this.navigationState = {
                backward: false
              };
              this.navForward(event);
            }
            event.preventDefault();
            break;
          }
        //enter
        //space
        case 13:
        case 32:
          {
            this.onYearSelect(event, index);
            event.preventDefault();
            break;
          }
        //escape
        case 27:
          {
            this.inputfieldViewChild?.nativeElement.focus();
            this.overlayVisible = false;
            event.preventDefault();
            break;
          }
        //tab
        case 9:
          {
            this.trapFocus(event);
            break;
          }
        default:
          //no op
          break;
      }
    }
    navigateToMonth(prev, groupIndex, focusKey) {
      if (prev) {
        if (this.numberOfMonths === 1 || groupIndex === 0) {
          this.navigationState = {
            backward: true
          };
          this._focusKey = focusKey;
          this.navBackward(event);
        } else {
          let prevMonthContainer = this.contentViewChild.nativeElement.children[groupIndex - 1];
          if (focusKey) {
            const firstDayCell = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.findSingle(prevMonthContainer, focusKey);
            firstDayCell.tabIndex = '0';
            firstDayCell.focus();
          } else {
            let cells = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.find(prevMonthContainer, '.p-datepicker-calendar td span:not(.p-disabled):not(.p-ink)');
            let focusCell = cells[cells.length - 1];
            focusCell.tabIndex = '0';
            focusCell.focus();
          }
        }
      } else {
        if (this.numberOfMonths === 1 || groupIndex === this.numberOfMonths - 1) {
          this.navigationState = {
            backward: false
          };
          this._focusKey = focusKey;
          this.navForward(event);
        } else {
          let nextMonthContainer = this.contentViewChild.nativeElement.children[groupIndex + 1];
          if (focusKey) {
            const firstDayCell = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.findSingle(nextMonthContainer, focusKey);
            firstDayCell.tabIndex = '0';
            firstDayCell.focus();
          } else {
            let focusCell = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.findSingle(nextMonthContainer, '.p-datepicker-calendar td span:not(.p-disabled):not(.p-ink)');
            focusCell.tabIndex = '0';
            focusCell.focus();
          }
        }
      }
    }
    updateFocus() {
      let cell;
      if (this.navigationState) {
        if (this.navigationState.button) {
          this.initFocusableCell();
          if (this.navigationState.backward) primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.findSingle(this.contentViewChild.nativeElement, '.p-datepicker-prev').focus();else primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.findSingle(this.contentViewChild.nativeElement, '.p-datepicker-next').focus();
        } else {
          if (this.navigationState.backward) {
            let cells;
            if (this.currentView === 'month') {
              cells = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.find(this.contentViewChild.nativeElement, '.p-monthpicker .p-monthpicker-month:not(.p-disabled)');
            } else if (this.currentView === 'year') {
              cells = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.find(this.contentViewChild.nativeElement, '.p-yearpicker .p-yearpicker-year:not(.p-disabled)');
            } else {
              cells = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.find(this.contentViewChild.nativeElement, this._focusKey || '.p-datepicker-calendar td span:not(.p-disabled):not(.p-ink)');
            }
            if (cells && cells.length > 0) {
              cell = cells[cells.length - 1];
            }
          } else {
            if (this.currentView === 'month') {
              cell = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.findSingle(this.contentViewChild.nativeElement, '.p-monthpicker .p-monthpicker-month:not(.p-disabled)');
            } else if (this.currentView === 'year') {
              cell = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.findSingle(this.contentViewChild.nativeElement, '.p-yearpicker .p-yearpicker-year:not(.p-disabled)');
            } else {
              cell = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.findSingle(this.contentViewChild.nativeElement, this._focusKey || '.p-datepicker-calendar td span:not(.p-disabled):not(.p-ink)');
            }
          }
          if (cell) {
            cell.tabIndex = '0';
            cell.focus();
          }
        }
        this.navigationState = null;
        this._focusKey = null;
      } else {
        this.initFocusableCell();
      }
      this.alignOverlay();
    }
    initFocusableCell() {
      const contentEl = this.contentViewChild?.nativeElement;
      let cell;
      if (this.currentView === 'month') {
        let cells = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.find(contentEl, '.p-monthpicker .p-monthpicker-month:not(.p-disabled)');
        let selectedCell = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.findSingle(contentEl, '.p-monthpicker .p-monthpicker-month.p-highlight');
        cells.forEach(cell => cell.tabIndex = -1);
        cell = selectedCell || cells[0];
        if (cells.length === 0) {
          let disabledCells = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.find(contentEl, '.p-monthpicker .p-monthpicker-month.p-disabled[tabindex = "0"]');
          disabledCells.forEach(cell => cell.tabIndex = -1);
        }
      } else if (this.currentView === 'year') {
        let cells = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.find(contentEl, '.p-yearpicker .p-yearpicker-year:not(.p-disabled)');
        let selectedCell = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.findSingle(contentEl, '.p-yearpicker .p-yearpicker-year.p-highlight');
        cells.forEach(cell => cell.tabIndex = -1);
        cell = selectedCell || cells[0];
        if (cells.length === 0) {
          let disabledCells = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.find(contentEl, '.p-yearpicker .p-yearpicker-year.p-disabled[tabindex = "0"]');
          disabledCells.forEach(cell => cell.tabIndex = -1);
        }
      } else {
        cell = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.findSingle(contentEl, 'span.p-highlight');
        if (!cell) {
          let todayCell = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.findSingle(contentEl, 'td.p-datepicker-today span:not(.p-disabled):not(.p-ink)');
          if (todayCell) cell = todayCell;else cell = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.findSingle(contentEl, '.p-datepicker-calendar td span:not(.p-disabled):not(.p-ink)');
        }
      }
      if (cell) {
        cell.tabIndex = '0';
        if (!this.preventFocus && (!this.navigationState || !this.navigationState.button)) {
          setTimeout(() => {
            if (!this.disabled) {
              cell.focus();
            }
          }, 1);
        }
        this.preventFocus = false;
      }
    }
    trapFocus(event) {
      let focusableElements = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getFocusableElements(this.contentViewChild.nativeElement);
      if (focusableElements && focusableElements.length > 0) {
        if (!focusableElements[0].ownerDocument.activeElement) {
          focusableElements[0].focus();
        } else {
          let focusedIndex = focusableElements.indexOf(focusableElements[0].ownerDocument.activeElement);
          if (event.shiftKey) {
            if (focusedIndex == -1 || focusedIndex === 0) {
              if (this.focusTrap) {
                focusableElements[focusableElements.length - 1].focus();
              } else {
                if (focusedIndex === -1) return this.hideOverlay();else if (focusedIndex === 0) return;
              }
            } else {
              focusableElements[focusedIndex - 1].focus();
            }
          } else {
            if (focusedIndex == -1) {
              if (this.timeOnly) {
                focusableElements[0].focus();
              } else {
                let spanIndex = 0;
                for (let i = 0; i < focusableElements.length; i++) {
                  if (focusableElements[i].tagName === 'SPAN') spanIndex = i;
                }
                focusableElements[spanIndex].focus();
              }
            } else if (focusedIndex === focusableElements.length - 1) {
              if (!this.focusTrap && focusedIndex != -1) return this.hideOverlay();
              focusableElements[0].focus();
            } else {
              focusableElements[focusedIndex + 1].focus();
            }
          }
        }
      }
      event.preventDefault();
    }
    onMonthDropdownChange(m) {
      this.currentMonth = parseInt(m);
      this.onMonthChange.emit({
        month: this.currentMonth + 1,
        year: this.currentYear
      });
      this.createMonths(this.currentMonth, this.currentYear);
    }
    onYearDropdownChange(y) {
      this.currentYear = parseInt(y);
      this.onYearChange.emit({
        month: this.currentMonth + 1,
        year: this.currentYear
      });
      this.createMonths(this.currentMonth, this.currentYear);
    }
    convertTo24Hour(hours, pm) {
      //@ts-ignore
      if (this.hourFormat == '12') {
        if (hours === 12) {
          return pm ? 12 : 0;
        } else {
          return pm ? hours + 12 : hours;
        }
      }
      return hours;
    }
    constrainTime(hour, minute, second, pm) {
      let returnTimeTriple = [hour, minute, second];
      let minHoursExceeds12;
      let value = this.value;
      const convertedHour = this.convertTo24Hour(hour, pm);
      const isRange = this.isRangeSelection(),
        isMultiple = this.isMultipleSelection(),
        isMultiValue = isRange || isMultiple;
      if (isMultiValue) {
        if (!this.value) {
          this.value = [new Date(), new Date()];
        }
        if (isRange) {
          value = this.value[1] || this.value[0];
        }
        if (isMultiple) {
          value = this.value[this.value.length - 1];
        }
      }
      const valueDateString = value ? value.toDateString() : null;
      let isMinDate = this.minDate && valueDateString && this.minDate.toDateString() === valueDateString;
      let isMaxDate = this.maxDate && valueDateString && this.maxDate.toDateString() === valueDateString;
      if (isMinDate) {
        minHoursExceeds12 = this.minDate.getHours() >= 12;
      }
      switch (true // intentional fall through
      ) {
        case isMinDate && minHoursExceeds12 && this.minDate.getHours() === 12 && this.minDate.getHours() > convertedHour:
          returnTimeTriple[0] = 11;
        case isMinDate && this.minDate.getHours() === convertedHour && this.minDate.getMinutes() > minute:
          returnTimeTriple[1] = this.minDate.getMinutes();
        case isMinDate && this.minDate.getHours() === convertedHour && this.minDate.getMinutes() === minute && this.minDate.getSeconds() > second:
          returnTimeTriple[2] = this.minDate.getSeconds();
          break;
        case isMinDate && !minHoursExceeds12 && this.minDate.getHours() - 1 === convertedHour && this.minDate.getHours() > convertedHour:
          returnTimeTriple[0] = 11;
          this.pm = true;
        case isMinDate && this.minDate.getHours() === convertedHour && this.minDate.getMinutes() > minute:
          returnTimeTriple[1] = this.minDate.getMinutes();
        case isMinDate && this.minDate.getHours() === convertedHour && this.minDate.getMinutes() === minute && this.minDate.getSeconds() > second:
          returnTimeTriple[2] = this.minDate.getSeconds();
          break;
        case isMinDate && minHoursExceeds12 && this.minDate.getHours() > convertedHour && convertedHour !== 12:
          this.setCurrentHourPM(this.minDate.getHours());
          returnTimeTriple[0] = this.currentHour;
        case isMinDate && this.minDate.getHours() === convertedHour && this.minDate.getMinutes() > minute:
          returnTimeTriple[1] = this.minDate.getMinutes();
        case isMinDate && this.minDate.getHours() === convertedHour && this.minDate.getMinutes() === minute && this.minDate.getSeconds() > second:
          returnTimeTriple[2] = this.minDate.getSeconds();
          break;
        case isMinDate && this.minDate.getHours() > convertedHour:
          returnTimeTriple[0] = this.minDate.getHours();
        case isMinDate && this.minDate.getHours() === convertedHour && this.minDate.getMinutes() > minute:
          returnTimeTriple[1] = this.minDate.getMinutes();
        case isMinDate && this.minDate.getHours() === convertedHour && this.minDate.getMinutes() === minute && this.minDate.getSeconds() > second:
          returnTimeTriple[2] = this.minDate.getSeconds();
          break;
        case isMaxDate && this.maxDate.getHours() < convertedHour:
          returnTimeTriple[0] = this.maxDate.getHours();
        case isMaxDate && this.maxDate.getHours() === convertedHour && this.maxDate.getMinutes() < minute:
          returnTimeTriple[1] = this.maxDate.getMinutes();
        case isMaxDate && this.maxDate.getHours() === convertedHour && this.maxDate.getMinutes() === minute && this.maxDate.getSeconds() < second:
          returnTimeTriple[2] = this.maxDate.getSeconds();
          break;
      }
      return returnTimeTriple;
    }
    incrementHour(event) {
      const prevHour = this.currentHour ?? 0;
      let newHour = (this.currentHour ?? 0) + this.stepHour;
      let newPM = this.pm;
      if (this.hourFormat == '24') newHour = newHour >= 24 ? newHour - 24 : newHour;else if (this.hourFormat == '12') {
        // Before the AM/PM break, now after
        if (prevHour < 12 && newHour > 11) {
          newPM = !this.pm;
        }
        newHour = newHour >= 13 ? newHour - 12 : newHour;
      }
      this.toggleAMPMIfNotMinDate(newPM);
      [this.currentHour, this.currentMinute, this.currentSecond] = this.constrainTime(newHour, this.currentMinute, this.currentSecond, newPM);
      event.preventDefault();
    }
    toggleAMPMIfNotMinDate(newPM) {
      let value = this.value;
      const valueDateString = value ? value.toDateString() : null;
      let isMinDate = this.minDate && valueDateString && this.minDate.toDateString() === valueDateString;
      if (isMinDate && this.minDate.getHours() >= 12) {
        this.pm = true;
      } else {
        this.pm = newPM;
      }
    }
    onTimePickerElementMouseDown(event, type, direction) {
      if (!this.disabled) {
        this.repeat(event, null, type, direction);
        event.preventDefault();
      }
    }
    onTimePickerElementMouseUp(event) {
      if (!this.disabled) {
        this.clearTimePickerTimer();
        this.updateTime();
      }
    }
    onTimePickerElementMouseLeave() {
      if (!this.disabled && this.timePickerTimer) {
        this.clearTimePickerTimer();
        this.updateTime();
      }
    }
    repeat(event, interval, type, direction) {
      let i = interval || 500;
      this.clearTimePickerTimer();
      this.timePickerTimer = setTimeout(() => {
        this.repeat(event, 100, type, direction);
        this.cd.markForCheck();
      }, i);
      switch (type) {
        case 0:
          if (direction === 1) this.incrementHour(event);else this.decrementHour(event);
          break;
        case 1:
          if (direction === 1) this.incrementMinute(event);else this.decrementMinute(event);
          break;
        case 2:
          if (direction === 1) this.incrementSecond(event);else this.decrementSecond(event);
          break;
      }
      this.updateInputfield();
    }
    clearTimePickerTimer() {
      if (this.timePickerTimer) {
        clearTimeout(this.timePickerTimer);
        this.timePickerTimer = null;
      }
    }
    decrementHour(event) {
      let newHour = (this.currentHour ?? 0) - this.stepHour;
      let newPM = this.pm;
      if (this.hourFormat == '24') newHour = newHour < 0 ? 24 + newHour : newHour;else if (this.hourFormat == '12') {
        // If we were at noon/midnight, then switch
        if (this.currentHour === 12) {
          newPM = !this.pm;
        }
        newHour = newHour <= 0 ? 12 + newHour : newHour;
      }
      this.toggleAMPMIfNotMinDate(newPM);
      [this.currentHour, this.currentMinute, this.currentSecond] = this.constrainTime(newHour, this.currentMinute, this.currentSecond, newPM);
      event.preventDefault();
    }
    incrementMinute(event) {
      let newMinute = (this.currentMinute ?? 0) + this.stepMinute;
      newMinute = newMinute > 59 ? newMinute - 60 : newMinute;
      [this.currentHour, this.currentMinute, this.currentSecond] = this.constrainTime(this.currentHour, newMinute, this.currentSecond, this.pm);
      event.preventDefault();
    }
    decrementMinute(event) {
      let newMinute = (this.currentMinute ?? 0) - this.stepMinute;
      newMinute = newMinute < 0 ? 60 + newMinute : newMinute;
      [this.currentHour, this.currentMinute, this.currentSecond] = this.constrainTime(this.currentHour, newMinute, this.currentSecond, this.pm);
      event.preventDefault();
    }
    incrementSecond(event) {
      let newSecond = this.currentSecond + this.stepSecond;
      newSecond = newSecond > 59 ? newSecond - 60 : newSecond;
      [this.currentHour, this.currentMinute, this.currentSecond] = this.constrainTime(this.currentHour, this.currentMinute, newSecond, this.pm);
      event.preventDefault();
    }
    decrementSecond(event) {
      let newSecond = this.currentSecond - this.stepSecond;
      newSecond = newSecond < 0 ? 60 + newSecond : newSecond;
      [this.currentHour, this.currentMinute, this.currentSecond] = this.constrainTime(this.currentHour, this.currentMinute, newSecond, this.pm);
      event.preventDefault();
    }
    updateTime() {
      let value = this.value;
      if (this.isRangeSelection()) {
        value = this.value[1] || this.value[0];
      }
      if (this.isMultipleSelection()) {
        value = this.value[this.value.length - 1];
      }
      value = value ? new Date(value.getTime()) : new Date();
      if (this.hourFormat == '12') {
        if (this.currentHour === 12) value.setHours(this.pm ? 12 : 0);else value.setHours(this.pm ? this.currentHour + 12 : this.currentHour);
      } else {
        value.setHours(this.currentHour);
      }
      value.setMinutes(this.currentMinute);
      value.setSeconds(this.currentSecond);
      if (this.isRangeSelection()) {
        if (this.value[1]) value = [this.value[0], value];else value = [value, null];
      }
      if (this.isMultipleSelection()) {
        value = [...this.value.slice(0, -1), value];
      }
      this.updateModel(value);
      this.onSelect.emit(value);
      this.updateInputfield();
    }
    toggleAMPM(event) {
      const newPM = !this.pm;
      this.pm = newPM;
      [this.currentHour, this.currentMinute, this.currentSecond] = this.constrainTime(this.currentHour, this.currentMinute, this.currentSecond, newPM);
      this.updateTime();
      event.preventDefault();
    }
    onUserInput(event) {
      // IE 11 Workaround for input placeholder : https://github.com/primefaces/primeng/issues/2026
      if (!this.isKeydown) {
        return;
      }
      this.isKeydown = false;
      let val = event.target.value;
      try {
        let value = this.parseValueFromString(val);
        if (this.isValidSelection(value)) {
          this.updateModel(value);
          this.updateUI();
        } else if (this.keepInvalid) {
          this.updateModel(value);
        }
      } catch (err) {
        //invalid date
        let value = this.keepInvalid ? val : null;
        this.updateModel(value);
      }
      this.filled = val != null && val.length;
      this.onInput.emit(event);
    }
    isValidSelection(value) {
      if (this.isSingleSelection()) {
        return this.isSelectable(value.getDate(), value.getMonth(), value.getFullYear(), false);
      }
      let isValid = value.every(v => this.isSelectable(v.getDate(), v.getMonth(), v.getFullYear(), false));
      if (isValid && this.isRangeSelection()) {
        isValid = value.length === 1 || value.length > 1 && value[1] >= value[0];
      }
      return isValid;
    }
    parseValueFromString(text) {
      if (!text || text.trim().length === 0) {
        return null;
      }
      let value;
      if (this.isSingleSelection()) {
        value = this.parseDateTime(text);
      } else if (this.isMultipleSelection()) {
        let tokens = text.split(this.multipleSeparator);
        value = [];
        for (let token of tokens) {
          value.push(this.parseDateTime(token.trim()));
        }
      } else if (this.isRangeSelection()) {
        let tokens = text.split(' ' + this.rangeSeparator + ' ');
        value = [];
        for (let i = 0; i < tokens.length; i++) {
          value[i] = this.parseDateTime(tokens[i].trim());
        }
      }
      return value;
    }
    parseDateTime(text) {
      let date;
      let parts = text.split(' ');
      if (this.timeOnly) {
        date = new Date();
        this.populateTime(date, parts[0], parts[1]);
      } else {
        const dateFormat = this.getDateFormat();
        if (this.showTime) {
          let ampm = this.hourFormat == '12' ? parts.pop() : null;
          let timeString = parts.pop();
          date = this.parseDate(parts.join(' '), dateFormat);
          this.populateTime(date, timeString, ampm);
        } else {
          date = this.parseDate(text, dateFormat);
        }
      }
      return date;
    }
    populateTime(value, timeString, ampm) {
      if (this.hourFormat == '12' && !ampm) {
        throw 'Invalid Time';
      }
      this.pm = ampm === 'PM' || ampm === 'pm';
      let time = this.parseTime(timeString);
      value.setHours(time.hour);
      value.setMinutes(time.minute);
      value.setSeconds(time.second);
    }
    isValidDate(date) {
      return primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.isDate(date) && primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.isNotEmpty(date);
    }
    updateUI() {
      let propValue = this.value;
      if (Array.isArray(propValue)) {
        propValue = propValue.length === 2 ? propValue[1] : propValue[0];
      }
      let val = this.defaultDate && this.isValidDate(this.defaultDate) && !this.value ? this.defaultDate : propValue && this.isValidDate(propValue) ? propValue : new Date();
      this.currentMonth = val.getMonth();
      this.currentYear = val.getFullYear();
      this.createMonths(this.currentMonth, this.currentYear);
      if (this.showTime || this.timeOnly) {
        this.setCurrentHourPM(val.getHours());
        this.currentMinute = val.getMinutes();
        this.currentSecond = val.getSeconds();
      }
    }
    showOverlay() {
      if (!this.overlayVisible) {
        this.updateUI();
        if (!this.touchUI) {
          this.preventFocus = true;
        }
        this.overlayVisible = true;
      }
    }
    hideOverlay() {
      this.inputfieldViewChild?.nativeElement.focus();
      this.overlayVisible = false;
      this.clearTimePickerTimer();
      if (this.touchUI) {
        this.disableModality();
      }
      this.cd.markForCheck();
    }
    toggle() {
      if (!this.inline) {
        if (!this.overlayVisible) {
          this.showOverlay();
          this.inputfieldViewChild?.nativeElement.focus();
        } else {
          this.hideOverlay();
        }
      }
    }
    onOverlayAnimationStart(event) {
      switch (event.toState) {
        case 'visible':
        case 'visibleTouchUI':
          if (!this.inline) {
            this.overlay = event.element;
            this.overlay?.setAttribute(this.attributeSelector, '');
            this.appendOverlay();
            this.updateFocus();
            if (this.autoZIndex) {
              if (this.touchUI) primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ZIndexUtils.set('modal', this.overlay, this.baseZIndex || this.config.zIndex.modal);else primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ZIndexUtils.set('overlay', this.overlay, this.baseZIndex || this.config.zIndex.overlay);
            }
            this.alignOverlay();
            this.onShow.emit(event);
          }
          break;
        case 'void':
          this.onOverlayHide();
          this.onClose.emit(event);
          break;
      }
    }
    onOverlayAnimationDone(event) {
      switch (event.toState) {
        case 'visible':
        case 'visibleTouchUI':
          if (!this.inline) {
            this.bindDocumentClickListener();
            this.bindDocumentResizeListener();
            this.bindScrollListener();
          }
          break;
        case 'void':
          if (this.autoZIndex) {
            primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ZIndexUtils.clear(event.element);
          }
          break;
      }
    }
    appendOverlay() {
      if (this.appendTo) {
        if (this.appendTo === 'body') this.document.body.appendChild(this.overlay);else primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.appendChild(this.overlay, this.appendTo);
      }
    }
    restoreOverlayAppend() {
      if (this.overlay && this.appendTo) {
        this.el.nativeElement.appendChild(this.overlay);
      }
    }
    alignOverlay() {
      if (this.touchUI) {
        this.enableModality(this.overlay);
      } else if (this.overlay) {
        if (this.appendTo) {
          if (this.view === 'date') {
            this.overlay.style.width = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getOuterWidth(this.overlay) + 'px';
            this.overlay.style.minWidth = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getOuterWidth(this.inputfieldViewChild?.nativeElement) + 'px';
          } else {
            this.overlay.style.width = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getOuterWidth(this.inputfieldViewChild?.nativeElement) + 'px';
          }
          primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.absolutePosition(this.overlay, this.inputfieldViewChild?.nativeElement);
        } else {
          primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.relativePosition(this.overlay, this.inputfieldViewChild?.nativeElement);
        }
      }
    }
    enableModality(element) {
      if (!this.mask && this.touchUI) {
        this.mask = this.renderer.createElement('div');
        this.renderer.setStyle(this.mask, 'zIndex', String(parseInt(element.style.zIndex) - 1));
        let maskStyleClass = 'p-component-overlay p-datepicker-mask p-datepicker-mask-scrollblocker p-component-overlay p-component-overlay-enter';
        primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.addMultipleClasses(this.mask, maskStyleClass);
        this.maskClickListener = this.renderer.listen(this.mask, 'click', event => {
          this.disableModality();
          this.overlayVisible = false;
        });
        this.renderer.appendChild(this.document.body, this.mask);
        primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.blockBodyScroll();
      }
    }
    disableModality() {
      if (this.mask) {
        primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.addClass(this.mask, 'p-component-overlay-leave');
        if (!this.animationEndListener) {
          this.animationEndListener = this.renderer.listen(this.mask, 'animationend', this.destroyMask.bind(this));
        }
      }
    }
    destroyMask() {
      if (!this.mask) {
        return;
      }
      this.renderer.removeChild(this.document.body, this.mask);
      let bodyChildren = this.document.body.children;
      let hasBlockerMasks;
      for (let i = 0; i < bodyChildren.length; i++) {
        let bodyChild = bodyChildren[i];
        if (primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.hasClass(bodyChild, 'p-datepicker-mask-scrollblocker')) {
          hasBlockerMasks = true;
          break;
        }
      }
      if (!hasBlockerMasks) {
        primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.unblockBodyScroll();
      }
      this.unbindAnimationEndListener();
      this.unbindMaskClickListener();
      this.mask = null;
    }
    unbindMaskClickListener() {
      if (this.maskClickListener) {
        this.maskClickListener();
        this.maskClickListener = null;
      }
    }
    unbindAnimationEndListener() {
      if (this.animationEndListener && this.mask) {
        this.animationEndListener();
        this.animationEndListener = null;
      }
    }
    writeValue(value) {
      this.value = value;
      if (this.value && typeof this.value === 'string') {
        try {
          this.value = this.parseValueFromString(this.value);
        } catch {
          if (this.keepInvalid) {
            this.value = value;
          }
        }
      }
      this.updateInputfield();
      this.updateUI();
      this.cd.markForCheck();
    }
    registerOnChange(fn) {
      this.onModelChange = fn;
    }
    registerOnTouched(fn) {
      this.onModelTouched = fn;
    }
    setDisabledState(val) {
      this.disabled = val;
      this.cd.markForCheck();
    }
    getDateFormat() {
      return this.dateFormat || this.getTranslation('dateFormat');
    }
    getFirstDateOfWeek() {
      return this._firstDayOfWeek || this.getTranslation(primeng_api__WEBPACK_IMPORTED_MODULE_4__.TranslationKeys.FIRST_DAY_OF_WEEK);
    }
    // Ported from jquery-ui datepicker formatDate
    formatDate(date, format) {
      if (!date) {
        return '';
      }
      let iFormat;
      const lookAhead = match => {
          const matches = iFormat + 1 < format.length && format.charAt(iFormat + 1) === match;
          if (matches) {
            iFormat++;
          }
          return matches;
        },
        formatNumber = (match, value, len) => {
          let num = '' + value;
          if (lookAhead(match)) {
            while (num.length < len) {
              num = '0' + num;
            }
          }
          return num;
        },
        formatName = (match, value, shortNames, longNames) => {
          return lookAhead(match) ? longNames[value] : shortNames[value];
        };
      let output = '';
      let literal = false;
      if (date) {
        for (iFormat = 0; iFormat < format.length; iFormat++) {
          if (literal) {
            if (format.charAt(iFormat) === "'" && !lookAhead("'")) {
              literal = false;
            } else {
              output += format.charAt(iFormat);
            }
          } else {
            switch (format.charAt(iFormat)) {
              case 'd':
                output += formatNumber('d', date.getDate(), 2);
                break;
              case 'D':
                output += formatName('D', date.getDay(), this.getTranslation(primeng_api__WEBPACK_IMPORTED_MODULE_4__.TranslationKeys.DAY_NAMES_SHORT), this.getTranslation(primeng_api__WEBPACK_IMPORTED_MODULE_4__.TranslationKeys.DAY_NAMES));
                break;
              case 'o':
                output += formatNumber('o', Math.round((new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 86400000), 3);
                break;
              case 'm':
                output += formatNumber('m', date.getMonth() + 1, 2);
                break;
              case 'M':
                output += formatName('M', date.getMonth(), this.getTranslation(primeng_api__WEBPACK_IMPORTED_MODULE_4__.TranslationKeys.MONTH_NAMES_SHORT), this.getTranslation(primeng_api__WEBPACK_IMPORTED_MODULE_4__.TranslationKeys.MONTH_NAMES));
                break;
              case 'y':
                output += lookAhead('y') ? date.getFullYear() : (date.getFullYear() % 100 < 10 ? '0' : '') + date.getFullYear() % 100;
                break;
              case '@':
                output += date.getTime();
                break;
              case '!':
                output += date.getTime() * 10000 + this.ticksTo1970;
                break;
              case "'":
                if (lookAhead("'")) {
                  output += "'";
                } else {
                  literal = true;
                }
                break;
              default:
                output += format.charAt(iFormat);
            }
          }
        }
      }
      return output;
    }
    formatTime(date) {
      if (!date) {
        return '';
      }
      let output = '';
      let hours = date.getHours();
      let minutes = date.getMinutes();
      let seconds = date.getSeconds();
      if (this.hourFormat == '12' && hours > 11 && hours != 12) {
        hours -= 12;
      }
      if (this.hourFormat == '12') {
        output += hours === 0 ? 12 : hours < 10 ? '0' + hours : hours;
      } else {
        output += hours < 10 ? '0' + hours : hours;
      }
      output += ':';
      output += minutes < 10 ? '0' + minutes : minutes;
      if (this.showSeconds) {
        output += ':';
        output += seconds < 10 ? '0' + seconds : seconds;
      }
      if (this.hourFormat == '12') {
        output += date.getHours() > 11 ? ' PM' : ' AM';
      }
      return output;
    }
    parseTime(value) {
      let tokens = value.split(':');
      let validTokenLength = this.showSeconds ? 3 : 2;
      if (tokens.length !== validTokenLength) {
        throw 'Invalid time';
      }
      let h = parseInt(tokens[0]);
      let m = parseInt(tokens[1]);
      let s = this.showSeconds ? parseInt(tokens[2]) : null;
      if (isNaN(h) || isNaN(m) || h > 23 || m > 59 || this.hourFormat == '12' && h > 12 || this.showSeconds && (isNaN(s) || s > 59)) {
        throw 'Invalid time';
      } else {
        if (this.hourFormat == '12') {
          if (h !== 12 && this.pm) {
            h += 12;
          } else if (!this.pm && h === 12) {
            h -= 12;
          }
        }
        return {
          hour: h,
          minute: m,
          second: s
        };
      }
    }
    // Ported from jquery-ui datepicker parseDate
    parseDate(value, format) {
      if (format == null || value == null) {
        throw 'Invalid arguments';
      }
      value = typeof value === 'object' ? value.toString() : value + '';
      if (value === '') {
        return null;
      }
      let iFormat,
        dim,
        extra,
        iValue = 0,
        shortYearCutoff = typeof this.shortYearCutoff !== 'string' ? this.shortYearCutoff : new Date().getFullYear() % 100 + parseInt(this.shortYearCutoff, 10),
        year = -1,
        month = -1,
        day = -1,
        doy = -1,
        literal = false,
        date,
        lookAhead = match => {
          let matches = iFormat + 1 < format.length && format.charAt(iFormat + 1) === match;
          if (matches) {
            iFormat++;
          }
          return matches;
        },
        getNumber = match => {
          let isDoubled = lookAhead(match),
            size = match === '@' ? 14 : match === '!' ? 20 : match === 'y' && isDoubled ? 4 : match === 'o' ? 3 : 2,
            minSize = match === 'y' ? size : 1,
            digits = new RegExp('^\\d{' + minSize + ',' + size + '}'),
            num = value.substring(iValue).match(digits);
          if (!num) {
            throw 'Missing number at position ' + iValue;
          }
          iValue += num[0].length;
          return parseInt(num[0], 10);
        },
        getName = (match, shortNames, longNames) => {
          let index = -1;
          let arr = lookAhead(match) ? longNames : shortNames;
          let names = [];
          for (let i = 0; i < arr.length; i++) {
            names.push([i, arr[i]]);
          }
          names.sort((a, b) => {
            return -(a[1].length - b[1].length);
          });
          for (let i = 0; i < names.length; i++) {
            let name = names[i][1];
            if (value.substr(iValue, name.length).toLowerCase() === name.toLowerCase()) {
              index = names[i][0];
              iValue += name.length;
              break;
            }
          }
          if (index !== -1) {
            return index + 1;
          } else {
            throw 'Unknown name at position ' + iValue;
          }
        },
        checkLiteral = () => {
          if (value.charAt(iValue) !== format.charAt(iFormat)) {
            throw 'Unexpected literal at position ' + iValue;
          }
          iValue++;
        };
      if (this.view === 'month') {
        day = 1;
      }
      for (iFormat = 0; iFormat < format.length; iFormat++) {
        if (literal) {
          if (format.charAt(iFormat) === "'" && !lookAhead("'")) {
            literal = false;
          } else {
            checkLiteral();
          }
        } else {
          switch (format.charAt(iFormat)) {
            case 'd':
              day = getNumber('d');
              break;
            case 'D':
              getName('D', this.getTranslation(primeng_api__WEBPACK_IMPORTED_MODULE_4__.TranslationKeys.DAY_NAMES_SHORT), this.getTranslation(primeng_api__WEBPACK_IMPORTED_MODULE_4__.TranslationKeys.DAY_NAMES));
              break;
            case 'o':
              doy = getNumber('o');
              break;
            case 'm':
              month = getNumber('m');
              break;
            case 'M':
              month = getName('M', this.getTranslation(primeng_api__WEBPACK_IMPORTED_MODULE_4__.TranslationKeys.MONTH_NAMES_SHORT), this.getTranslation(primeng_api__WEBPACK_IMPORTED_MODULE_4__.TranslationKeys.MONTH_NAMES));
              break;
            case 'y':
              year = getNumber('y');
              break;
            case '@':
              date = new Date(getNumber('@'));
              year = date.getFullYear();
              month = date.getMonth() + 1;
              day = date.getDate();
              break;
            case '!':
              date = new Date((getNumber('!') - this.ticksTo1970) / 10000);
              year = date.getFullYear();
              month = date.getMonth() + 1;
              day = date.getDate();
              break;
            case "'":
              if (lookAhead("'")) {
                checkLiteral();
              } else {
                literal = true;
              }
              break;
            default:
              checkLiteral();
          }
        }
      }
      if (iValue < value.length) {
        extra = value.substr(iValue);
        if (!/^\s+/.test(extra)) {
          throw 'Extra/unparsed characters found in date: ' + extra;
        }
      }
      if (year === -1) {
        year = new Date().getFullYear();
      } else if (year < 100) {
        year += new Date().getFullYear() - new Date().getFullYear() % 100 + (year <= shortYearCutoff ? 0 : -100);
      }
      if (doy > -1) {
        month = 1;
        day = doy;
        do {
          dim = this.getDaysCountInMonth(year, month - 1);
          if (day <= dim) {
            break;
          }
          month++;
          day -= dim;
        } while (true);
      }
      if (this.view === 'year') {
        month = month === -1 ? 1 : month;
        day = day === -1 ? 1 : day;
      }
      date = this.daylightSavingAdjust(new Date(year, month - 1, day));
      if (date.getFullYear() !== year || date.getMonth() + 1 !== month || date.getDate() !== day) {
        throw 'Invalid date'; // E.g. 31/02/00
      }
      return date;
    }
    daylightSavingAdjust(date) {
      if (!date) {
        return null;
      }
      date.setHours(date.getHours() > 12 ? date.getHours() + 2 : 0);
      return date;
    }
    updateFilledState() {
      this.filled = this.inputFieldValue && this.inputFieldValue != '';
    }
    isValidDateForTimeConstraints(selectedDate) {
      if (this.keepInvalid) {
        return true; // If we are keeping invalid dates, we don't need to check for time constraints
      }
      return (!this.minDate || selectedDate >= this.minDate) && (!this.maxDate || selectedDate <= this.maxDate);
    }
    onTodayButtonClick(event) {
      const date = new Date();
      const dateMeta = {
        day: date.getDate(),
        month: date.getMonth(),
        year: date.getFullYear(),
        otherMonth: date.getMonth() !== this.currentMonth || date.getFullYear() !== this.currentYear,
        today: true,
        selectable: true
      };
      this.createMonths(date.getMonth(), date.getFullYear());
      this.onDateSelect(event, dateMeta);
      this.onTodayClick.emit(date);
    }
    onClearButtonClick(event) {
      this.updateModel(null);
      this.updateInputfield();
      this.hideOverlay();
      this.onClearClick.emit(event);
    }
    createResponsiveStyle() {
      if (this.numberOfMonths > 1 && this.responsiveOptions) {
        if (!this.responsiveStyleElement) {
          this.responsiveStyleElement = this.renderer.createElement('style');
          this.responsiveStyleElement.type = 'text/css';
          this.renderer.appendChild(this.document.body, this.responsiveStyleElement);
        }
        let innerHTML = '';
        if (this.responsiveOptions) {
          let responsiveOptions = [...this.responsiveOptions].filter(o => !!(o.breakpoint && o.numMonths)).sort((o1, o2) => -1 * o1.breakpoint.localeCompare(o2.breakpoint, undefined, {
            numeric: true
          }));
          for (let i = 0; i < responsiveOptions.length; i++) {
            let {
              breakpoint,
              numMonths
            } = responsiveOptions[i];
            let styles = `
                        .p-datepicker[${this.attributeSelector}] .p-datepicker-group:nth-child(${numMonths}) .p-datepicker-next {
                            display: inline-flex !important;
                        }
                    `;
            for (let j = numMonths; j < this.numberOfMonths; j++) {
              styles += `
                            .p-datepicker[${this.attributeSelector}] .p-datepicker-group:nth-child(${j + 1}) {
                                display: none !important;
                            }
                        `;
            }
            innerHTML += `
                        @media screen and (max-width: ${breakpoint}) {
                            ${styles}
                        }
                    `;
          }
        }
        this.responsiveStyleElement.innerHTML = innerHTML;
        primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.setAttribute(this.responsiveStyleElement, 'nonce', this.config?.csp()?.nonce);
      }
    }
    destroyResponsiveStyleElement() {
      if (this.responsiveStyleElement) {
        this.responsiveStyleElement.remove();
        this.responsiveStyleElement = null;
      }
    }
    bindDocumentClickListener() {
      if (!this.documentClickListener) {
        this.zone.runOutsideAngular(() => {
          const documentTarget = this.el ? this.el.nativeElement.ownerDocument : this.document;
          this.documentClickListener = this.renderer.listen(documentTarget, 'mousedown', event => {
            if (this.isOutsideClicked(event) && this.overlayVisible) {
              this.zone.run(() => {
                this.hideOverlay();
                this.onClickOutside.emit(event);
                this.cd.markForCheck();
              });
            }
          });
        });
      }
    }
    unbindDocumentClickListener() {
      if (this.documentClickListener) {
        this.documentClickListener();
        this.documentClickListener = null;
      }
    }
    bindDocumentResizeListener() {
      if (!this.documentResizeListener && !this.touchUI) {
        this.documentResizeListener = this.renderer.listen(this.window, 'resize', this.onWindowResize.bind(this));
      }
    }
    unbindDocumentResizeListener() {
      if (this.documentResizeListener) {
        this.documentResizeListener();
        this.documentResizeListener = null;
      }
    }
    bindScrollListener() {
      if (!this.scrollHandler) {
        this.scrollHandler = new primeng_dom__WEBPACK_IMPORTED_MODULE_3__.ConnectedOverlayScrollHandler(this.containerViewChild?.nativeElement, () => {
          if (this.overlayVisible) {
            this.hideOverlay();
          }
        });
      }
      this.scrollHandler.bindScrollListener();
    }
    unbindScrollListener() {
      if (this.scrollHandler) {
        this.scrollHandler.unbindScrollListener();
      }
    }
    isOutsideClicked(event) {
      return !(this.el.nativeElement.isSameNode(event.target) || this.isNavIconClicked(event) || this.el.nativeElement.contains(event.target) || this.overlay && this.overlay.contains(event.target));
    }
    isNavIconClicked(event) {
      return primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.hasClass(event.target, 'p-datepicker-prev') || primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.hasClass(event.target, 'p-datepicker-prev-icon') || primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.hasClass(event.target, 'p-datepicker-next') || primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.hasClass(event.target, 'p-datepicker-next-icon');
    }
    onWindowResize() {
      if (this.overlayVisible && !primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.isTouchDevice()) {
        this.hideOverlay();
      }
    }
    onOverlayHide() {
      this.currentView = this.view;
      if (this.mask) {
        this.destroyMask();
      }
      this.unbindDocumentClickListener();
      this.unbindDocumentResizeListener();
      this.unbindScrollListener();
      this.overlay = null;
    }
    ngOnDestroy() {
      if (this.scrollHandler) {
        this.scrollHandler.destroy();
        this.scrollHandler = null;
      }
      if (this.translationSubscription) {
        this.translationSubscription.unsubscribe();
      }
      if (this.overlay && this.autoZIndex) {
        primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ZIndexUtils.clear(this.overlay);
      }
      this.destroyResponsiveStyleElement();
      this.clearTimePickerTimer();
      this.restoreOverlayAppend();
      this.onOverlayHide();
    }
    static ɵfac = function Calendar_Factory(t) {
      return new (t || Calendar)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeNGConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_4__.OverlayService));
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Calendar,
      selectors: [["p-calendar"]],
      contentQueries: function Calendar_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeTemplate, 4);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
        }
      },
      viewQuery: function Calendar_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.containerViewChild = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.inputfieldViewChild = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
        }
      },
      hostAttrs: [1, "p-element", "p-inputwrapper"],
      hostVars: 6,
      hostBindings: function Calendar_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("p-inputwrapper-filled", ctx.filled)("p-inputwrapper-focus", ctx.focus)("p-calendar-clearable", ctx.showClear && !ctx.disabled);
        }
      },
      inputs: {
        iconDisplay: "iconDisplay",
        style: "style",
        styleClass: "styleClass",
        inputStyle: "inputStyle",
        inputId: "inputId",
        name: "name",
        inputStyleClass: "inputStyleClass",
        placeholder: "placeholder",
        ariaLabelledBy: "ariaLabelledBy",
        ariaLabel: "ariaLabel",
        iconAriaLabel: "iconAriaLabel",
        disabled: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "disabled", "disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        dateFormat: "dateFormat",
        multipleSeparator: "multipleSeparator",
        rangeSeparator: "rangeSeparator",
        inline: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "inline", "inline", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        showOtherMonths: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "showOtherMonths", "showOtherMonths", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        selectOtherMonths: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "selectOtherMonths", "selectOtherMonths", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        showIcon: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "showIcon", "showIcon", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        icon: "icon",
        appendTo: "appendTo",
        readonlyInput: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "readonlyInput", "readonlyInput", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        shortYearCutoff: "shortYearCutoff",
        monthNavigator: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "monthNavigator", "monthNavigator", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        yearNavigator: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "yearNavigator", "yearNavigator", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        hourFormat: "hourFormat",
        timeOnly: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "timeOnly", "timeOnly", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        stepYearPicker: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "stepYearPicker", "stepYearPicker", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute],
        stepHour: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "stepHour", "stepHour", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute],
        stepMinute: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "stepMinute", "stepMinute", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute],
        stepSecond: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "stepSecond", "stepSecond", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute],
        showSeconds: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "showSeconds", "showSeconds", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        required: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "required", "required", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        showOnFocus: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "showOnFocus", "showOnFocus", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        showWeek: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "showWeek", "showWeek", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        startWeekFromFirstDayOfYear: "startWeekFromFirstDayOfYear",
        showClear: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "showClear", "showClear", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        dataType: "dataType",
        selectionMode: "selectionMode",
        maxDateCount: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "maxDateCount", "maxDateCount", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute],
        showButtonBar: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "showButtonBar", "showButtonBar", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        todayButtonStyleClass: "todayButtonStyleClass",
        clearButtonStyleClass: "clearButtonStyleClass",
        autofocus: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "autofocus", "autofocus", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        autoZIndex: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "autoZIndex", "autoZIndex", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        baseZIndex: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "baseZIndex", "baseZIndex", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute],
        panelStyleClass: "panelStyleClass",
        panelStyle: "panelStyle",
        keepInvalid: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "keepInvalid", "keepInvalid", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        hideOnDateTimeSelect: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "hideOnDateTimeSelect", "hideOnDateTimeSelect", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        touchUI: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "touchUI", "touchUI", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        timeSeparator: "timeSeparator",
        focusTrap: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "focusTrap", "focusTrap", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        showTransitionOptions: "showTransitionOptions",
        hideTransitionOptions: "hideTransitionOptions",
        tabindex: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "tabindex", "tabindex", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute],
        variant: "variant",
        minDate: "minDate",
        maxDate: "maxDate",
        disabledDates: "disabledDates",
        disabledDays: "disabledDays",
        yearRange: "yearRange",
        showTime: "showTime",
        responsiveOptions: "responsiveOptions",
        numberOfMonths: "numberOfMonths",
        firstDayOfWeek: "firstDayOfWeek",
        locale: "locale",
        view: "view",
        defaultDate: "defaultDate"
      },
      outputs: {
        onFocus: "onFocus",
        onBlur: "onBlur",
        onClose: "onClose",
        onSelect: "onSelect",
        onClear: "onClear",
        onInput: "onInput",
        onTodayClick: "onTodayClick",
        onClearClick: "onClearClick",
        onMonthChange: "onMonthChange",
        onYearChange: "onYearChange",
        onClickOutside: "onClickOutside",
        onShow: "onShow"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([CALENDAR_VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"]],
      ngContentSelectors: _c4,
      decls: 4,
      vars: 12,
      consts: [["container", ""], ["inputfield", ""], ["contentWrapper", ""], [3, "ngClass", "ngStyle"], [3, "ngIf"], [3, "class", "ngStyle", "ngClass", "click", 4, "ngIf"], ["type", "text", "role", "combobox", "aria-autocomplete", "none", "aria-haspopup", "dialog", "autocomplete", "off", "pAutoFocus", "", 3, "focus", "keydown", "click", "blur", "input", "value", "readonly", "ngStyle", "placeholder", "disabled", "ngClass", "autofocus"], [4, "ngIf"], ["type", "button", "aria-haspopup", "dialog", "pButton", "", "pRipple", "", "class", "p-datepicker-trigger p-button-icon-only", "tabindex", "0", 3, "disabled", "click", 4, "ngIf"], [3, "styleClass", "click", 4, "ngIf"], ["class", "p-calendar-clear-icon", 3, "click", 4, "ngIf"], [3, "click", "styleClass"], [1, "p-calendar-clear-icon", 3, "click"], [4, "ngTemplateOutlet"], ["type", "button", "aria-haspopup", "dialog", "pButton", "", "pRipple", "", "tabindex", "0", 1, "p-datepicker-trigger", "p-button-icon-only", 3, "click", "disabled"], [3, "ngClass", 4, "ngIf"], [3, "ngClass"], [3, "ngClass", "click", 4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "click", "ngClass"], [3, "click", "ngStyle", "ngClass"], ["class", "p-timepicker", 4, "ngIf"], ["class", "p-datepicker-buttonbar", 4, "ngIf"], [1, "p-datepicker-group-container"], ["class", "p-datepicker-group", 4, "ngFor", "ngForOf"], ["class", "p-monthpicker", 4, "ngIf"], ["class", "p-yearpicker", 4, "ngIf"], [1, "p-datepicker-group"], [1, "p-datepicker-header"], ["class", "p-datepicker-prev p-link", "type", "button", "pRipple", "", 3, "keydown", "click", 4, "ngIf"], [1, "p-datepicker-title"], ["type", "button", "class", "p-datepicker-month p-link", 3, "disabled", "click", "keydown", 4, "ngIf"], ["type", "button", "class", "p-datepicker-year p-link", 3, "disabled", "click", "keydown", 4, "ngIf"], ["class", "p-datepicker-decade", 4, "ngIf"], ["type", "button", "pRipple", "", 1, "p-datepicker-next", "p-link", 3, "keydown", "click"], [3, "styleClass", 4, "ngIf"], ["class", "p-datepicker-next-icon", 4, "ngIf"], ["class", "p-datepicker-calendar-container", 4, "ngIf"], ["type", "button", "pRipple", "", 1, "p-datepicker-prev", "p-link", 3, "keydown", "click"], ["class", "p-datepicker-prev-icon", 4, "ngIf"], [3, "styleClass"], [1, "p-datepicker-prev-icon"], ["type", "button", 1, "p-datepicker-month", "p-link", 3, "click", "keydown", "disabled"], ["type", "button", 1, "p-datepicker-year", "p-link", 3, "click", "keydown", "disabled"], [1, "p-datepicker-decade"], [1, "p-datepicker-next-icon"], [1, "p-datepicker-calendar-container"], ["role", "grid", 1, "p-datepicker-calendar"], ["class", "p-datepicker-weekheader p-disabled", 4, "ngIf"], ["scope", "col", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [1, "p-datepicker-weekheader", "p-disabled"], ["scope", "col"], ["class", "p-datepicker-weeknumber", 4, "ngIf"], [3, "ngClass", 4, "ngFor", "ngForOf"], [1, "p-datepicker-weeknumber"], [1, "p-disabled"], ["draggable", "false", "pRipple", "", 3, "click", "keydown", "ngClass"], ["class", "p-hidden-accessible", "aria-live", "polite", 4, "ngIf"], ["aria-live", "polite", 1, "p-hidden-accessible"], [1, "p-monthpicker"], ["class", "p-monthpicker-month", "pRipple", "", 3, "ngClass", "click", "keydown", 4, "ngFor", "ngForOf"], ["pRipple", "", 1, "p-monthpicker-month", 3, "click", "keydown", "ngClass"], [1, "p-yearpicker"], ["class", "p-yearpicker-year", "pRipple", "", 3, "ngClass", "click", "keydown", 4, "ngFor", "ngForOf"], ["pRipple", "", 1, "p-yearpicker-year", 3, "click", "keydown", "ngClass"], [1, "p-timepicker"], [1, "p-hour-picker"], ["type", "button", "pRipple", "", 1, "p-link", 3, "keydown", "keydown.enter", "keydown.space", "mousedown", "mouseup", "keyup.enter", "keyup.space", "mouseleave"], [1, "p-separator"], [1, "p-minute-picker"], ["class", "p-separator", 4, "ngIf"], ["class", "p-second-picker", 4, "ngIf"], ["class", "p-ampm-picker", 4, "ngIf"], [1, "p-second-picker"], [1, "p-ampm-picker"], ["type", "button", "pRipple", "", 1, "p-link", 3, "keydown", "click", "keydown.enter"], [1, "p-datepicker-buttonbar"], ["type", "button", "pButton", "", "pRipple", "", 3, "keydown", "click", "label", "ngClass"]],
      template: function Calendar_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 3, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Calendar_ng_template_2_Template, 5, 22, "ng-template", 4)(3, Calendar_div_3_Template, 9, 32, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.styleClass);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction5"](6, _c5, ctx.showIcon && ctx.iconDisplay === "input", ctx.showIcon && ctx.iconDisplay === "button", ctx.timeOnly, ctx.disabled, ctx.focus || ctx.overlayVisible))("ngStyle", ctx.style);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.inline);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.inline || ctx.overlayVisible);
        }
      },
      dependencies: () => [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgStyle, primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonDirective, primeng_ripple__WEBPACK_IMPORTED_MODULE_7__.Ripple, primeng_icons_chevronleft__WEBPACK_IMPORTED_MODULE_8__.ChevronLeftIcon, primeng_icons_chevronright__WEBPACK_IMPORTED_MODULE_9__.ChevronRightIcon, primeng_icons_chevronup__WEBPACK_IMPORTED_MODULE_10__.ChevronUpIcon, primeng_icons_chevrondown__WEBPACK_IMPORTED_MODULE_11__.ChevronDownIcon, primeng_icons_times__WEBPACK_IMPORTED_MODULE_12__.TimesIcon, primeng_icons_calendar__WEBPACK_IMPORTED_MODULE_13__.CalendarIcon, primeng_autofocus__WEBPACK_IMPORTED_MODULE_14__.AutoFocus],
      styles: ["@layer primeng{.p-calendar{position:relative;display:inline-flex;max-width:100%}.p-calendar .p-inputtext{flex:1 1 auto;width:1%;text-overflow:ellipsis}.p-calendar-w-btn .p-inputtext{border-top-right-radius:0;border-bottom-right-radius:0}.p-calendar-w-btn .p-datepicker-trigger{border-top-left-radius:0;border-bottom-left-radius:0}.p-fluid .p-calendar{display:flex}.p-fluid .p-calendar .p-inputtext{width:1%}.p-calendar .p-datepicker{min-width:100%}.p-datepicker{width:auto;position:absolute;top:0;left:0}.p-datepicker-inline{display:inline-block;position:static;overflow-x:auto}.p-datepicker-header{display:flex;align-items:center;justify-content:space-between}.p-datepicker-header .p-datepicker-title{margin:0 auto}.p-datepicker-prev,.p-datepicker-next{cursor:pointer;display:inline-flex;justify-content:center;align-items:center;overflow:hidden;position:relative}.p-datepicker-multiple-month .p-datepicker-group-container .p-datepicker-group{flex:1 1 auto}.p-datepicker-multiple-month .p-datepicker-group-container{display:flex}.p-datepicker table{width:100%;border-collapse:collapse}.p-datepicker td>span{display:flex;justify-content:center;align-items:center;cursor:pointer;margin:0 auto;overflow:hidden;position:relative}.p-monthpicker-month{width:33.3%;display:inline-flex;align-items:center;justify-content:center;cursor:pointer;overflow:hidden;position:relative}.p-datepicker-buttonbar{display:flex;justify-content:space-between;align-items:center}.p-timepicker{display:flex;justify-content:center;align-items:center}.p-timepicker button{display:flex;align-items:center;justify-content:center;cursor:pointer;overflow:hidden;position:relative}.p-timepicker>div{display:flex;align-items:center;flex-direction:column}.p-datepicker-touch-ui,.p-calendar .p-datepicker-touch-ui{position:fixed;top:50%;left:50%;min-width:80vw;transform:translate(-50%,-50%)}.p-yearpicker-year{width:50%;display:inline-flex;align-items:center;justify-content:center;cursor:pointer;overflow:hidden;position:relative}.p-calendar-clear-icon{position:absolute;top:50%;margin-top:-.5rem;cursor:pointer}.p-datepicker-icon{pointer-events:none}.p-calendar-clearable{position:relative}}\n"],
      encapsulation: 2,
      data: {
        animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.trigger)('overlayAnimation', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.state)('visibleTouchUI', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.style)({
          transform: 'translate(-50%,-50%)',
          opacity: 1
        })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.transition)('void => visible', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.style)({
          opacity: 0,
          transform: 'scaleY(0.8)'
        }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.animate)('{{showTransitionParams}}', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.style)({
          opacity: 1,
          transform: '*'
        }))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.transition)('visible => void', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.animate)('{{hideTransitionParams}}', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.style)({
          opacity: 0
        }))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.transition)('void => visibleTouchUI', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.style)({
          opacity: 0,
          transform: 'translate3d(-50%, -40%, 0) scale(0.9)'
        }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.animate)('{{showTransitionParams}}')]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.transition)('visibleTouchUI => void', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.animate)('{{hideTransitionParams}}', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.style)({
          opacity: 0,
          transform: 'translate3d(-50%, -40%, 0) scale(0.9)'
        }))])])]
      },
      changeDetection: 0
    });
  }
  return Calendar;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let CalendarModule = /*#__PURE__*/(() => {
  class CalendarModule {
    static ɵfac = function CalendarModule_Factory(t) {
      return new (t || CalendarModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CalendarModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonModule, primeng_api__WEBPACK_IMPORTED_MODULE_4__.SharedModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_7__.RippleModule, primeng_icons_chevronleft__WEBPACK_IMPORTED_MODULE_8__.ChevronLeftIcon, primeng_icons_chevronright__WEBPACK_IMPORTED_MODULE_9__.ChevronRightIcon, primeng_icons_chevronup__WEBPACK_IMPORTED_MODULE_10__.ChevronUpIcon, primeng_icons_chevrondown__WEBPACK_IMPORTED_MODULE_11__.ChevronDownIcon, primeng_icons_times__WEBPACK_IMPORTED_MODULE_12__.TimesIcon, primeng_icons_calendar__WEBPACK_IMPORTED_MODULE_13__.CalendarIcon, primeng_autofocus__WEBPACK_IMPORTED_MODULE_14__.AutoFocusModule, primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonModule, primeng_api__WEBPACK_IMPORTED_MODULE_4__.SharedModule]
    });
  }
  return CalendarModule;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 8540:
/*!*************************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-icons-angledoubleleft.mjs ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AngleDoubleLeftIcon: () => (/* binding */ AngleDoubleLeftIcon)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primeng/baseicon */ 9436);



let AngleDoubleLeftIcon = /*#__PURE__*/(() => {
  class AngleDoubleLeftIcon extends primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__.BaseIcon {
    static ɵfac = /* @__PURE__ */(() => {
      let ɵAngleDoubleLeftIcon_BaseFactory;
      return function AngleDoubleLeftIcon_Factory(t) {
        return (ɵAngleDoubleLeftIcon_BaseFactory || (ɵAngleDoubleLeftIcon_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](AngleDoubleLeftIcon)))(t || AngleDoubleLeftIcon);
      };
    })();
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AngleDoubleLeftIcon,
      selectors: [["AngleDoubleLeftIcon"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 5,
      consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M5.71602 11.164C5.80782 11.2021 5.9063 11.2215 6.00569 11.221C6.20216 11.2301 6.39427 11.1612 6.54025 11.0294C6.68191 10.8875 6.76148 10.6953 6.76148 10.4948C6.76148 10.2943 6.68191 10.1021 6.54025 9.96024L3.51441 6.9344L6.54025 3.90855C6.624 3.76126 6.65587 3.59011 6.63076 3.42254C6.60564 3.25498 6.525 3.10069 6.40175 2.98442C6.2785 2.86815 6.11978 2.79662 5.95104 2.7813C5.78229 2.76598 5.61329 2.80776 5.47112 2.89994L1.97123 6.39983C1.82957 6.54167 1.75 6.73393 1.75 6.9344C1.75 7.13486 1.82957 7.32712 1.97123 7.46896L5.47112 10.9991C5.54096 11.0698 5.62422 11.1259 5.71602 11.164ZM11.0488 10.9689C11.1775 11.1156 11.3585 11.2061 11.5531 11.221C11.7477 11.2061 11.9288 11.1156 12.0574 10.9689C12.1815 10.8302 12.25 10.6506 12.25 10.4645C12.25 10.2785 12.1815 10.0989 12.0574 9.96024L9.03158 6.93439L12.0574 3.90855C12.1248 3.76739 12.1468 3.60881 12.1204 3.45463C12.0939 3.30045 12.0203 3.15826 11.9097 3.04765C11.7991 2.93703 11.6569 2.86343 11.5027 2.83698C11.3486 2.81053 11.19 2.83252 11.0488 2.89994L7.51865 6.36957C7.37699 6.51141 7.29742 6.70367 7.29742 6.90414C7.29742 7.1046 7.37699 7.29686 7.51865 7.4387L11.0488 10.9689Z", "fill", "currentColor"]],
      template: function AngleDoubleLeftIcon_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "path", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.getClassNames());
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
        }
      },
      encapsulation: 2
    });
  }
  return AngleDoubleLeftIcon;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 4607:
/*!**************************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-icons-angledoubleright.mjs ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AngleDoubleRightIcon: () => (/* binding */ AngleDoubleRightIcon)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primeng/baseicon */ 9436);



let AngleDoubleRightIcon = /*#__PURE__*/(() => {
  class AngleDoubleRightIcon extends primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__.BaseIcon {
    static ɵfac = /* @__PURE__ */(() => {
      let ɵAngleDoubleRightIcon_BaseFactory;
      return function AngleDoubleRightIcon_Factory(t) {
        return (ɵAngleDoubleRightIcon_BaseFactory || (ɵAngleDoubleRightIcon_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](AngleDoubleRightIcon)))(t || AngleDoubleRightIcon);
      };
    })();
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AngleDoubleRightIcon,
      selectors: [["AngleDoubleRightIcon"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 5,
      consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M7.68757 11.1451C7.7791 11.1831 7.8773 11.2024 7.9764 11.2019C8.07769 11.1985 8.17721 11.1745 8.26886 11.1312C8.36052 11.088 8.44238 11.0265 8.50943 10.9505L12.0294 7.49085C12.1707 7.34942 12.25 7.15771 12.25 6.95782C12.25 6.75794 12.1707 6.56622 12.0294 6.42479L8.50943 2.90479C8.37014 2.82159 8.20774 2.78551 8.04633 2.80192C7.88491 2.81833 7.73309 2.88635 7.6134 2.99588C7.4937 3.10541 7.41252 3.25061 7.38189 3.40994C7.35126 3.56927 7.37282 3.73423 7.44337 3.88033L10.4605 6.89748L7.44337 9.91463C7.30212 10.0561 7.22278 10.2478 7.22278 10.4477C7.22278 10.6475 7.30212 10.8393 7.44337 10.9807C7.51301 11.0512 7.59603 11.1071 7.68757 11.1451ZM1.94207 10.9505C2.07037 11.0968 2.25089 11.1871 2.44493 11.2019C2.63898 11.1871 2.81949 11.0968 2.94779 10.9505L6.46779 7.49085C6.60905 7.34942 6.68839 7.15771 6.68839 6.95782C6.68839 6.75793 6.60905 6.56622 6.46779 6.42479L2.94779 2.90479C2.80704 2.83757 2.6489 2.81563 2.49517 2.84201C2.34143 2.86839 2.19965 2.94178 2.08936 3.05207C1.97906 3.16237 1.90567 3.30415 1.8793 3.45788C1.85292 3.61162 1.87485 3.76975 1.94207 3.9105L4.95922 6.92765L1.94207 9.9448C1.81838 10.0831 1.75 10.2621 1.75 10.4477C1.75 10.6332 1.81838 10.8122 1.94207 10.9505Z", "fill", "currentColor"]],
      template: function AngleDoubleRightIcon_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "path", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.getClassNames());
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
        }
      },
      encapsulation: 2
    });
  }
  return AngleDoubleRightIcon;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 203:
/*!*******************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-icons-angleleft.mjs ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AngleLeftIcon: () => (/* binding */ AngleLeftIcon)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primeng/baseicon */ 9436);



let AngleLeftIcon = /*#__PURE__*/(() => {
  class AngleLeftIcon extends primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__.BaseIcon {
    static ɵfac = /* @__PURE__ */(() => {
      let ɵAngleLeftIcon_BaseFactory;
      return function AngleLeftIcon_Factory(t) {
        return (ɵAngleLeftIcon_BaseFactory || (ɵAngleLeftIcon_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](AngleLeftIcon)))(t || AngleLeftIcon);
      };
    })();
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AngleLeftIcon,
      selectors: [["AngleLeftIcon"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 5,
      consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M8.75 11.185C8.65146 11.1854 8.55381 11.1662 8.4628 11.1284C8.37179 11.0906 8.28924 11.0351 8.22 10.965L4.72 7.46496C4.57955 7.32433 4.50066 7.13371 4.50066 6.93496C4.50066 6.73621 4.57955 6.54558 4.72 6.40496L8.22 2.93496C8.36095 2.84357 8.52851 2.80215 8.69582 2.81733C8.86312 2.83252 9.02048 2.90344 9.14268 3.01872C9.26487 3.134 9.34483 3.28696 9.36973 3.4531C9.39463 3.61924 9.36303 3.78892 9.28 3.93496L6.28 6.93496L9.28 9.93496C9.42045 10.0756 9.49934 10.2662 9.49934 10.465C9.49934 10.6637 9.42045 10.8543 9.28 10.995C9.13526 11.1257 8.9448 11.1939 8.75 11.185Z", "fill", "currentColor"]],
      template: function AngleLeftIcon_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "path", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.getClassNames());
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
        }
      },
      encapsulation: 2
    });
  }
  return AngleLeftIcon;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 1147:
/*!*****************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-icons-angleup.mjs ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AngleUpIcon: () => (/* binding */ AngleUpIcon)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primeng/baseicon */ 9436);



let AngleUpIcon = /*#__PURE__*/(() => {
  class AngleUpIcon extends primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__.BaseIcon {
    static ɵfac = /* @__PURE__ */(() => {
      let ɵAngleUpIcon_BaseFactory;
      return function AngleUpIcon_Factory(t) {
        return (ɵAngleUpIcon_BaseFactory || (ɵAngleUpIcon_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](AngleUpIcon)))(t || AngleUpIcon);
      };
    })();
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AngleUpIcon,
      selectors: [["AngleUpIcon"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 5,
      consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M10.4134 9.49931C10.3148 9.49977 10.2172 9.48055 10.1262 9.44278C10.0352 9.405 9.95263 9.34942 9.88338 9.27931L6.88338 6.27931L3.88338 9.27931C3.73811 9.34946 3.57409 9.3709 3.41567 9.34044C3.25724 9.30999 3.11286 9.22926 3.00395 9.11025C2.89504 8.99124 2.82741 8.84028 2.8111 8.67978C2.79478 8.51928 2.83065 8.35781 2.91338 8.21931L6.41338 4.71931C6.55401 4.57886 6.74463 4.49997 6.94338 4.49997C7.14213 4.49997 7.33276 4.57886 7.47338 4.71931L10.9734 8.21931C11.1138 8.35994 11.1927 8.55056 11.1927 8.74931C11.1927 8.94806 11.1138 9.13868 10.9734 9.27931C10.9007 9.35315 10.8132 9.41089 10.7168 9.44879C10.6203 9.48669 10.5169 9.5039 10.4134 9.49931Z", "fill", "currentColor"]],
      template: function AngleUpIcon_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "path", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.getClassNames());
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
        }
      },
      encapsulation: 2
    });
  }
  return AngleUpIcon;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 5306:
/*!*******************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-icons-arrowdown.mjs ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArrowDownIcon: () => (/* binding */ ArrowDownIcon)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primeng/baseicon */ 9436);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/utils */ 7251);




let ArrowDownIcon = /*#__PURE__*/(() => {
  class ArrowDownIcon extends primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__.BaseIcon {
    pathId;
    ngOnInit() {
      this.pathId = 'url(#' + (0,primeng_utils__WEBPACK_IMPORTED_MODULE_1__.UniqueComponentId)() + ')';
    }
    static ɵfac = /* @__PURE__ */(() => {
      let ɵArrowDownIcon_BaseFactory;
      return function ArrowDownIcon_Factory(t) {
        return (ɵArrowDownIcon_BaseFactory || (ɵArrowDownIcon_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](ArrowDownIcon)))(t || ArrowDownIcon);
      };
    })();
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ArrowDownIcon,
      selectors: [["ArrowDownIcon"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 6,
      vars: 7,
      consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M6.99994 14C6.91097 14.0004 6.82281 13.983 6.74064 13.9489C6.65843 13.9148 6.58387 13.8646 6.52133 13.8013L1.10198 8.38193C0.982318 8.25351 0.917175 8.08367 0.920272 7.90817C0.923368 7.73267 0.994462 7.56523 1.11858 7.44111C1.24269 7.317 1.41014 7.2459 1.58563 7.2428C1.76113 7.23971 1.93098 7.30485 2.0594 7.42451L6.32263 11.6877V0.677419C6.32263 0.497756 6.394 0.325452 6.52104 0.198411C6.64808 0.0713706 6.82039 0 7.00005 0C7.17971 0 7.35202 0.0713706 7.47906 0.198411C7.6061 0.325452 7.67747 0.497756 7.67747 0.677419V11.6877L11.9407 7.42451C12.0691 7.30485 12.2389 7.23971 12.4144 7.2428C12.5899 7.2459 12.7574 7.317 12.8815 7.44111C13.0056 7.56523 13.0767 7.73267 13.0798 7.90817C13.0829 8.08367 13.0178 8.25351 12.8981 8.38193L7.47875 13.8013C7.41621 13.8646 7.34164 13.9148 7.25944 13.9489C7.17727 13.983 7.08912 14.0004 7.00015 14C7.00012 14 7.00009 14 7.00005 14C7.00001 14 6.99998 14 6.99994 14Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
      template: function ArrowDownIcon_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "svg", 0)(1, "g");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "path", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "defs")(4, "clipPath", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "rect", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.getClassNames());
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("clip-path", ctx.pathId);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", ctx.pathId);
        }
      },
      encapsulation: 2
    });
  }
  return ArrowDownIcon;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 5809:
/*!*****************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-icons-arrowup.mjs ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArrowUpIcon: () => (/* binding */ ArrowUpIcon)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primeng/baseicon */ 9436);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/utils */ 7251);




let ArrowUpIcon = /*#__PURE__*/(() => {
  class ArrowUpIcon extends primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__.BaseIcon {
    pathId;
    ngOnInit() {
      this.pathId = 'url(#' + (0,primeng_utils__WEBPACK_IMPORTED_MODULE_1__.UniqueComponentId)() + ')';
    }
    static ɵfac = /* @__PURE__ */(() => {
      let ɵArrowUpIcon_BaseFactory;
      return function ArrowUpIcon_Factory(t) {
        return (ɵArrowUpIcon_BaseFactory || (ɵArrowUpIcon_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](ArrowUpIcon)))(t || ArrowUpIcon);
      };
    })();
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ArrowUpIcon,
      selectors: [["ArrowUpIcon"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 6,
      vars: 7,
      consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M6.51551 13.799C6.64205 13.9255 6.813 13.9977 6.99193 14C7.17087 13.9977 7.34182 13.9255 7.46835 13.799C7.59489 13.6725 7.66701 13.5015 7.66935 13.3226V2.31233L11.9326 6.57554C11.9951 6.63887 12.0697 6.68907 12.1519 6.72319C12.2341 6.75731 12.3223 6.77467 12.4113 6.77425C12.5003 6.77467 12.5885 6.75731 12.6707 6.72319C12.7529 6.68907 12.8274 6.63887 12.89 6.57554C13.0168 6.44853 13.0881 6.27635 13.0881 6.09683C13.0881 5.91732 13.0168 5.74514 12.89 5.61812L7.48846 0.216594C7.48274 0.210436 7.4769 0.204374 7.47094 0.198411C7.3439 0.0713707 7.1716 0 6.99193 0C6.81227 0 6.63997 0.0713707 6.51293 0.198411C6.50704 0.204296 6.50128 0.210278 6.49563 0.216354L1.09386 5.61812C0.974201 5.74654 0.909057 5.91639 0.912154 6.09189C0.91525 6.26738 0.986345 6.43483 1.11046 6.55894C1.23457 6.68306 1.40202 6.75415 1.57752 6.75725C1.75302 6.76035 1.92286 6.6952 2.05128 6.57554L6.31451 2.31231V13.3226C6.31685 13.5015 6.38898 13.6725 6.51551 13.799Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
      template: function ArrowUpIcon_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "svg", 0)(1, "g");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "path", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "defs")(4, "clipPath", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "rect", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.getClassNames());
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("clip-path", ctx.pathId);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", ctx.pathId);
        }
      },
      encapsulation: 2
    });
  }
  return ArrowUpIcon;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 4837:
/*!******************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-icons-calendar.mjs ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalendarIcon: () => (/* binding */ CalendarIcon)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primeng/baseicon */ 9436);



let CalendarIcon = /*#__PURE__*/(() => {
  class CalendarIcon extends primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__.BaseIcon {
    static ɵfac = /* @__PURE__ */(() => {
      let ɵCalendarIcon_BaseFactory;
      return function CalendarIcon_Factory(t) {
        return (ɵCalendarIcon_BaseFactory || (ɵCalendarIcon_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](CalendarIcon)))(t || CalendarIcon);
      };
    })();
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CalendarIcon,
      selectors: [["CalendarIcon"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 5,
      consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M10.7838 1.51351H9.83783V0.567568C9.83783 0.417039 9.77804 0.272676 9.6716 0.166237C9.56516 0.0597971 9.42079 0 9.27027 0C9.11974 0 8.97538 0.0597971 8.86894 0.166237C8.7625 0.272676 8.7027 0.417039 8.7027 0.567568V1.51351H5.29729V0.567568C5.29729 0.417039 5.2375 0.272676 5.13106 0.166237C5.02462 0.0597971 4.88025 0 4.72973 0C4.5792 0 4.43484 0.0597971 4.3284 0.166237C4.22196 0.272676 4.16216 0.417039 4.16216 0.567568V1.51351H3.21621C2.66428 1.51351 2.13494 1.73277 1.74467 2.12305C1.35439 2.51333 1.13513 3.04266 1.13513 3.59459V11.9189C1.13513 12.4709 1.35439 13.0002 1.74467 13.3905C2.13494 13.7807 2.66428 14 3.21621 14H10.7838C11.3357 14 11.865 13.7807 12.2553 13.3905C12.6456 13.0002 12.8649 12.4709 12.8649 11.9189V3.59459C12.8649 3.04266 12.6456 2.51333 12.2553 2.12305C11.865 1.73277 11.3357 1.51351 10.7838 1.51351ZM3.21621 2.64865H4.16216V3.59459C4.16216 3.74512 4.22196 3.88949 4.3284 3.99593C4.43484 4.10237 4.5792 4.16216 4.72973 4.16216C4.88025 4.16216 5.02462 4.10237 5.13106 3.99593C5.2375 3.88949 5.29729 3.74512 5.29729 3.59459V2.64865H8.7027V3.59459C8.7027 3.74512 8.7625 3.88949 8.86894 3.99593C8.97538 4.10237 9.11974 4.16216 9.27027 4.16216C9.42079 4.16216 9.56516 4.10237 9.6716 3.99593C9.77804 3.88949 9.83783 3.74512 9.83783 3.59459V2.64865H10.7838C11.0347 2.64865 11.2753 2.74831 11.4527 2.92571C11.6301 3.10311 11.7297 3.34371 11.7297 3.59459V5.67568H2.27027V3.59459C2.27027 3.34371 2.36993 3.10311 2.54733 2.92571C2.72473 2.74831 2.96533 2.64865 3.21621 2.64865ZM10.7838 12.8649H3.21621C2.96533 12.8649 2.72473 12.7652 2.54733 12.5878C2.36993 12.4104 2.27027 12.1698 2.27027 11.9189V6.81081H11.7297V11.9189C11.7297 12.1698 11.6301 12.4104 11.4527 12.5878C11.2753 12.7652 11.0347 12.8649 10.7838 12.8649Z", "fill", "currentColor"]],
      template: function CalendarIcon_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "path", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.getClassNames());
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
        }
      },
      encapsulation: 2
    });
  }
  return CalendarIcon;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 4959:
/*!*********************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-icons-chevronleft.mjs ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChevronLeftIcon: () => (/* binding */ ChevronLeftIcon)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primeng/baseicon */ 9436);



let ChevronLeftIcon = /*#__PURE__*/(() => {
  class ChevronLeftIcon extends primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__.BaseIcon {
    static ɵfac = /* @__PURE__ */(() => {
      let ɵChevronLeftIcon_BaseFactory;
      return function ChevronLeftIcon_Factory(t) {
        return (ɵChevronLeftIcon_BaseFactory || (ɵChevronLeftIcon_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](ChevronLeftIcon)))(t || ChevronLeftIcon);
      };
    })();
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ChevronLeftIcon,
      selectors: [["ChevronLeftIcon"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 5,
      consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M9.61296 13C9.50997 13.0005 9.40792 12.9804 9.3128 12.9409C9.21767 12.9014 9.13139 12.8433 9.05902 12.7701L3.83313 7.54416C3.68634 7.39718 3.60388 7.19795 3.60388 6.99022C3.60388 6.78249 3.68634 6.58325 3.83313 6.43628L9.05902 1.21039C9.20762 1.07192 9.40416 0.996539 9.60724 1.00012C9.81032 1.00371 10.0041 1.08597 10.1477 1.22959C10.2913 1.37322 10.3736 1.56698 10.3772 1.77005C10.3808 1.97313 10.3054 2.16968 10.1669 2.31827L5.49496 6.99022L10.1669 11.6622C10.3137 11.8091 10.3962 12.0084 10.3962 12.2161C10.3962 12.4238 10.3137 12.6231 10.1669 12.7701C10.0945 12.8433 10.0083 12.9014 9.91313 12.9409C9.81801 12.9804 9.71596 13.0005 9.61296 13Z", "fill", "currentColor"]],
      template: function ChevronLeftIcon_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "path", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.getClassNames());
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
        }
      },
      encapsulation: 2
    });
  }
  return ChevronLeftIcon;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 5994:
/*!**********************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-icons-chevronright.mjs ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChevronRightIcon: () => (/* binding */ ChevronRightIcon)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primeng/baseicon */ 9436);



let ChevronRightIcon = /*#__PURE__*/(() => {
  class ChevronRightIcon extends primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__.BaseIcon {
    static ɵfac = /* @__PURE__ */(() => {
      let ɵChevronRightIcon_BaseFactory;
      return function ChevronRightIcon_Factory(t) {
        return (ɵChevronRightIcon_BaseFactory || (ɵChevronRightIcon_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](ChevronRightIcon)))(t || ChevronRightIcon);
      };
    })();
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ChevronRightIcon,
      selectors: [["ChevronRightIcon"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 5,
      consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M4.38708 13C4.28408 13.0005 4.18203 12.9804 4.08691 12.9409C3.99178 12.9014 3.9055 12.8433 3.83313 12.7701C3.68634 12.6231 3.60388 12.4238 3.60388 12.2161C3.60388 12.0084 3.68634 11.8091 3.83313 11.6622L8.50507 6.99022L3.83313 2.31827C3.69467 2.16968 3.61928 1.97313 3.62287 1.77005C3.62645 1.56698 3.70872 1.37322 3.85234 1.22959C3.99596 1.08597 4.18972 1.00371 4.3928 1.00012C4.59588 0.996539 4.79242 1.07192 4.94102 1.21039L10.1669 6.43628C10.3137 6.58325 10.3962 6.78249 10.3962 6.99022C10.3962 7.19795 10.3137 7.39718 10.1669 7.54416L4.94102 12.7701C4.86865 12.8433 4.78237 12.9014 4.68724 12.9409C4.59212 12.9804 4.49007 13.0005 4.38708 13Z", "fill", "currentColor"]],
      template: function ChevronRightIcon_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "path", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.getClassNames());
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
        }
      },
      encapsulation: 2
    });
  }
  return ChevronRightIcon;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 7223:
/*!*******************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-icons-chevronup.mjs ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChevronUpIcon: () => (/* binding */ ChevronUpIcon)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primeng/baseicon */ 9436);



let ChevronUpIcon = /*#__PURE__*/(() => {
  class ChevronUpIcon extends primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__.BaseIcon {
    static ɵfac = /* @__PURE__ */(() => {
      let ɵChevronUpIcon_BaseFactory;
      return function ChevronUpIcon_Factory(t) {
        return (ɵChevronUpIcon_BaseFactory || (ɵChevronUpIcon_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](ChevronUpIcon)))(t || ChevronUpIcon);
      };
    })();
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ChevronUpIcon,
      selectors: [["ChevronUpIcon"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 5,
      consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M12.2097 10.4113C12.1057 10.4118 12.0027 10.3915 11.9067 10.3516C11.8107 10.3118 11.7237 10.2532 11.6506 10.1792L6.93602 5.46461L2.22139 10.1476C2.07272 10.244 1.89599 10.2877 1.71953 10.2717C1.54307 10.2556 1.3771 10.1808 1.24822 10.0593C1.11933 9.93766 1.035 9.77633 1.00874 9.6011C0.982477 9.42587 1.0158 9.2469 1.10338 9.09287L6.37701 3.81923C6.52533 3.6711 6.72639 3.58789 6.93602 3.58789C7.14565 3.58789 7.3467 3.6711 7.49502 3.81923L12.7687 9.09287C12.9168 9.24119 13 9.44225 13 9.65187C13 9.8615 12.9168 10.0626 12.7687 10.2109C12.616 10.3487 12.4151 10.4207 12.2097 10.4113Z", "fill", "currentColor"]],
      template: function ChevronUpIcon_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "path", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.getClassNames());
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
        }
      },
      encapsulation: 2
    });
  }
  return ChevronUpIcon;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 3529:
/*!****************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-icons-filter.mjs ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterIcon: () => (/* binding */ FilterIcon)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primeng/baseicon */ 9436);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/utils */ 7251);




let FilterIcon = /*#__PURE__*/(() => {
  class FilterIcon extends primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__.BaseIcon {
    pathId;
    ngOnInit() {
      this.pathId = 'url(#' + (0,primeng_utils__WEBPACK_IMPORTED_MODULE_1__.UniqueComponentId)() + ')';
    }
    static ɵfac = /* @__PURE__ */(() => {
      let ɵFilterIcon_BaseFactory;
      return function FilterIcon_Factory(t) {
        return (ɵFilterIcon_BaseFactory || (ɵFilterIcon_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](FilterIcon)))(t || FilterIcon);
      };
    })();
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: FilterIcon,
      selectors: [["FilterIcon"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 6,
      vars: 7,
      consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M8.64708 14H5.35296C5.18981 13.9979 5.03395 13.9321 4.91858 13.8167C4.8032 13.7014 4.73745 13.5455 4.73531 13.3824V7L0.329431 0.98C0.259794 0.889466 0.217389 0.780968 0.20718 0.667208C0.19697 0.553448 0.219379 0.439133 0.271783 0.337647C0.324282 0.236453 0.403423 0.151519 0.500663 0.0920138C0.597903 0.0325088 0.709548 0.000692754 0.823548 0H13.1765C13.2905 0.000692754 13.4021 0.0325088 13.4994 0.0920138C13.5966 0.151519 13.6758 0.236453 13.7283 0.337647C13.7807 0.439133 13.8031 0.553448 13.7929 0.667208C13.7826 0.780968 13.7402 0.889466 13.6706 0.98L9.26472 7V13.3824C9.26259 13.5455 9.19683 13.7014 9.08146 13.8167C8.96609 13.9321 8.81022 13.9979 8.64708 14ZM5.97061 12.7647H8.02943V6.79412C8.02878 6.66289 8.07229 6.53527 8.15296 6.43177L11.9412 1.23529H2.05884L5.86355 6.43177C5.94422 6.53527 5.98773 6.66289 5.98708 6.79412L5.97061 12.7647Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
      template: function FilterIcon_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "svg", 0)(1, "g");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "path", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "defs")(4, "clipPath", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "rect", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.getClassNames());
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("clip-path", ctx.pathId);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", ctx.pathId);
        }
      },
      encapsulation: 2
    });
  }
  return FilterIcon;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 2032:
/*!*********************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-icons-filterslash.mjs ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterSlashIcon: () => (/* binding */ FilterSlashIcon)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primeng/baseicon */ 9436);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/utils */ 7251);




let FilterSlashIcon = /*#__PURE__*/(() => {
  class FilterSlashIcon extends primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__.BaseIcon {
    pathId;
    ngOnInit() {
      this.pathId = 'url(#' + (0,primeng_utils__WEBPACK_IMPORTED_MODULE_1__.UniqueComponentId)() + ')';
    }
    static ɵfac = /* @__PURE__ */(() => {
      let ɵFilterSlashIcon_BaseFactory;
      return function FilterSlashIcon_Factory(t) {
        return (ɵFilterSlashIcon_BaseFactory || (ɵFilterSlashIcon_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](FilterSlashIcon)))(t || FilterSlashIcon);
      };
    })();
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: FilterSlashIcon,
      selectors: [["FilterSlashIcon"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 6,
      vars: 7,
      consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M13.4994 0.0920138C13.5967 0.151519 13.6758 0.236453 13.7283 0.337647C13.7807 0.439133 13.8031 0.553448 13.7929 0.667208C13.7827 0.780968 13.7403 0.889466 13.6707 0.98L11.406 4.06823C11.3099 4.19928 11.1656 4.28679 11.005 4.3115C10.8444 4.33621 10.6805 4.2961 10.5495 4.2C10.4184 4.1039 10.3309 3.95967 10.3062 3.79905C10.2815 3.63843 10.3216 3.47458 10.4177 3.34353L11.9412 1.23529H7.41184C7.24803 1.23529 7.09093 1.17022 6.97509 1.05439C6.85926 0.938558 6.79419 0.781457 6.79419 0.617647C6.79419 0.453837 6.85926 0.296736 6.97509 0.180905C7.09093 0.0650733 7.24803 0 7.41184 0H13.1765C13.2905 0.000692754 13.4022 0.0325088 13.4994 0.0920138ZM4.20008 0.181168H4.24126L13.2013 9.03411C13.3169 9.14992 13.3819 9.3069 13.3819 9.47058C13.3819 9.63426 13.3169 9.79124 13.2013 9.90705C13.1445 9.96517 13.0766 10.0112 13.0016 10.0423C12.9266 10.0735 12.846 10.0891 12.7648 10.0882C12.6836 10.0886 12.6032 10.0728 12.5283 10.0417C12.4533 10.0106 12.3853 9.96479 12.3283 9.90705L9.3142 6.92587L9.26479 6.99999V13.3823C9.26265 13.5455 9.19689 13.7014 9.08152 13.8167C8.96615 13.9321 8.81029 13.9979 8.64714 14H5.35302C5.18987 13.9979 5.03401 13.9321 4.91864 13.8167C4.80327 13.7014 4.73751 13.5455 4.73537 13.3823V6.99999L0.329492 1.02117C0.259855 0.930634 0.21745 0.822137 0.207241 0.708376C0.197031 0.594616 0.21944 0.480301 0.271844 0.378815C0.324343 0.277621 0.403484 0.192687 0.500724 0.133182C0.597964 0.073677 0.709609 0.041861 0.823609 0.0411682H3.86243C3.92448 0.0461551 3.9855 0.060022 4.04361 0.0823446C4.10037 0.10735 4.15311 0.140655 4.20008 0.181168ZM8.02949 6.79411C8.02884 6.66289 8.07235 6.53526 8.15302 6.43176L8.42478 6.05293L3.55773 1.23529H2.0589L5.84714 6.43176C5.92781 6.53526 5.97132 6.66289 5.97067 6.79411V12.7647H8.02949V6.79411Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
      template: function FilterSlashIcon_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "svg", 0)(1, "g");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "path", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "defs")(4, "clipPath", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "rect", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.getClassNames());
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("clip-path", ctx.pathId);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", ctx.pathId);
        }
      },
      encapsulation: 2
    });
  }
  return FilterSlashIcon;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 3868:
/*!*****************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-icons-sortalt.mjs ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SortAltIcon: () => (/* binding */ SortAltIcon)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primeng/baseicon */ 9436);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/utils */ 7251);




let SortAltIcon = /*#__PURE__*/(() => {
  class SortAltIcon extends primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__.BaseIcon {
    pathId;
    ngOnInit() {
      this.pathId = 'url(#' + (0,primeng_utils__WEBPACK_IMPORTED_MODULE_1__.UniqueComponentId)() + ')';
    }
    static ɵfac = /* @__PURE__ */(() => {
      let ɵSortAltIcon_BaseFactory;
      return function SortAltIcon_Factory(t) {
        return (ɵSortAltIcon_BaseFactory || (ɵSortAltIcon_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](SortAltIcon)))(t || SortAltIcon);
      };
    })();
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: SortAltIcon,
      selectors: [["SortAltIcon"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 9,
      vars: 7,
      consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M5.64515 3.61291C5.47353 3.61291 5.30192 3.54968 5.16644 3.4142L3.38708 1.63484L1.60773 3.4142C1.34579 3.67613 0.912244 3.67613 0.650309 3.4142C0.388374 3.15226 0.388374 2.71871 0.650309 2.45678L2.90837 0.198712C3.17031 -0.0632236 3.60386 -0.0632236 3.86579 0.198712L6.12386 2.45678C6.38579 2.71871 6.38579 3.15226 6.12386 3.4142C5.98837 3.54968 5.81676 3.61291 5.64515 3.61291Z", "fill", "currentColor"], ["d", "M3.38714 14C3.01681 14 2.70972 13.6929 2.70972 13.3226V0.677419C2.70972 0.307097 3.01681 0 3.38714 0C3.75746 0 4.06456 0.307097 4.06456 0.677419V13.3226C4.06456 13.6929 3.75746 14 3.38714 14Z", "fill", "currentColor"], ["d", "M10.6129 14C10.4413 14 10.2697 13.9368 10.1342 13.8013L7.87611 11.5432C7.61418 11.2813 7.61418 10.8477 7.87611 10.5858C8.13805 10.3239 8.5716 10.3239 8.83353 10.5858L10.6129 12.3652L12.3922 10.5858C12.6542 10.3239 13.0877 10.3239 13.3497 10.5858C13.6116 10.8477 13.6116 11.2813 13.3497 11.5432L11.0916 13.8013C10.9561 13.9368 10.7845 14 10.6129 14Z", "fill", "currentColor"], ["d", "M10.6129 14C10.2426 14 9.93552 13.6929 9.93552 13.3226V0.677419C9.93552 0.307097 10.2426 0 10.6129 0C10.9833 0 11.2904 0.307097 11.2904 0.677419V13.3226C11.2904 13.6929 10.9832 14 10.6129 14Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
      template: function SortAltIcon_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "svg", 0)(1, "g");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "path", 1)(3, "path", 2)(4, "path", 3)(5, "path", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "defs")(7, "clipPath", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "rect", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.getClassNames());
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("clip-path", ctx.pathId);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", ctx.pathId);
        }
      },
      encapsulation: 2
    });
  }
  return SortAltIcon;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 9407:
/*!************************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-icons-sortamountdown.mjs ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SortAmountDownIcon: () => (/* binding */ SortAmountDownIcon)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primeng/baseicon */ 9436);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/utils */ 7251);




let SortAmountDownIcon = /*#__PURE__*/(() => {
  class SortAmountDownIcon extends primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__.BaseIcon {
    pathId;
    ngOnInit() {
      this.pathId = 'url(#' + (0,primeng_utils__WEBPACK_IMPORTED_MODULE_1__.UniqueComponentId)() + ')';
    }
    static ɵfac = /* @__PURE__ */(() => {
      let ɵSortAmountDownIcon_BaseFactory;
      return function SortAmountDownIcon_Factory(t) {
        return (ɵSortAmountDownIcon_BaseFactory || (ɵSortAmountDownIcon_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](SortAmountDownIcon)))(t || SortAmountDownIcon);
      };
    })();
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: SortAmountDownIcon,
      selectors: [["SortAmountDownIcon"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 6,
      vars: 7,
      consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M4.93953 10.5858L3.83759 11.6877V0.677419C3.83759 0.307097 3.53049 0 3.16017 0C2.78985 0 2.48275 0.307097 2.48275 0.677419V11.6877L1.38082 10.5858C1.11888 10.3239 0.685331 10.3239 0.423396 10.5858C0.16146 10.8477 0.16146 11.2813 0.423396 11.5432L2.68146 13.8013C2.74469 13.8645 2.81694 13.9097 2.89823 13.9458C2.97952 13.9819 3.06985 14 3.16017 14C3.25049 14 3.33178 13.9819 3.42211 13.9458C3.5034 13.9097 3.57565 13.8645 3.63888 13.8013L5.89694 11.5432C6.15888 11.2813 6.15888 10.8477 5.89694 10.5858C5.63501 10.3239 5.20146 10.3239 4.93953 10.5858ZM13.0957 0H7.22468C6.85436 0 6.54726 0.307097 6.54726 0.677419C6.54726 1.04774 6.85436 1.35484 7.22468 1.35484H13.0957C13.466 1.35484 13.7731 1.04774 13.7731 0.677419C13.7731 0.307097 13.466 0 13.0957 0ZM7.22468 5.41935H9.48275C9.85307 5.41935 10.1602 5.72645 10.1602 6.09677C10.1602 6.4671 9.85307 6.77419 9.48275 6.77419H7.22468C6.85436 6.77419 6.54726 6.4671 6.54726 6.09677C6.54726 5.72645 6.85436 5.41935 7.22468 5.41935ZM7.6763 8.12903H7.22468C6.85436 8.12903 6.54726 8.43613 6.54726 8.80645C6.54726 9.17677 6.85436 9.48387 7.22468 9.48387H7.6763C8.04662 9.48387 8.35372 9.17677 8.35372 8.80645C8.35372 8.43613 8.04662 8.12903 7.6763 8.12903ZM7.22468 2.70968H11.2892C11.6595 2.70968 11.9666 3.01677 11.9666 3.3871C11.9666 3.75742 11.6595 4.06452 11.2892 4.06452H7.22468C6.85436 4.06452 6.54726 3.75742 6.54726 3.3871C6.54726 3.01677 6.85436 2.70968 7.22468 2.70968Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
      template: function SortAmountDownIcon_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "svg", 0)(1, "g");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "path", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "defs")(4, "clipPath", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "rect", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.getClassNames());
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("clip-path", ctx.pathId);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", ctx.pathId);
        }
      },
      encapsulation: 2
    });
  }
  return SortAmountDownIcon;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 1293:
/*!*************************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-icons-sortamountupalt.mjs ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SortAmountUpAltIcon: () => (/* binding */ SortAmountUpAltIcon)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primeng/baseicon */ 9436);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/utils */ 7251);




let SortAmountUpAltIcon = /*#__PURE__*/(() => {
  class SortAmountUpAltIcon extends primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__.BaseIcon {
    pathId;
    ngOnInit() {
      this.pathId = 'url(#' + (0,primeng_utils__WEBPACK_IMPORTED_MODULE_1__.UniqueComponentId)() + ')';
    }
    static ɵfac = /* @__PURE__ */(() => {
      let ɵSortAmountUpAltIcon_BaseFactory;
      return function SortAmountUpAltIcon_Factory(t) {
        return (ɵSortAmountUpAltIcon_BaseFactory || (ɵSortAmountUpAltIcon_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](SortAmountUpAltIcon)))(t || SortAmountUpAltIcon);
      };
    })();
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: SortAmountUpAltIcon,
      selectors: [["SortAmountUpAltIcon"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 6,
      vars: 7,
      consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M3.63435 0.19871C3.57113 0.135484 3.49887 0.0903226 3.41758 0.0541935C3.255 -0.0180645 3.06532 -0.0180645 2.90274 0.0541935C2.82145 0.0903226 2.74919 0.135484 2.68597 0.19871L0.427901 2.45677C0.165965 2.71871 0.165965 3.15226 0.427901 3.41419C0.689836 3.67613 1.12338 3.67613 1.38532 3.41419L2.48726 2.31226V13.3226C2.48726 13.6929 2.79435 14 3.16467 14C3.535 14 3.84209 13.6929 3.84209 13.3226V2.31226L4.94403 3.41419C5.07951 3.54968 5.25113 3.6129 5.42274 3.6129C5.59435 3.6129 5.76597 3.54968 5.90145 3.41419C6.16338 3.15226 6.16338 2.71871 5.90145 2.45677L3.64338 0.19871H3.63435ZM13.7685 13.3226C13.7685 12.9523 13.4615 12.6452 13.0911 12.6452H7.22016C6.84984 12.6452 6.54274 12.9523 6.54274 13.3226C6.54274 13.6929 6.84984 14 7.22016 14H13.0911C13.4615 14 13.7685 13.6929 13.7685 13.3226ZM7.22016 8.58064C6.84984 8.58064 6.54274 8.27355 6.54274 7.90323C6.54274 7.5329 6.84984 7.22581 7.22016 7.22581H9.47823C9.84855 7.22581 10.1556 7.5329 10.1556 7.90323C10.1556 8.27355 9.84855 8.58064 9.47823 8.58064H7.22016ZM7.22016 5.87097H7.67177C8.0421 5.87097 8.34919 5.56387 8.34919 5.19355C8.34919 4.82323 8.0421 4.51613 7.67177 4.51613H7.22016C6.84984 4.51613 6.54274 4.82323 6.54274 5.19355C6.54274 5.56387 6.84984 5.87097 7.22016 5.87097ZM11.2847 11.2903H7.22016C6.84984 11.2903 6.54274 10.9832 6.54274 10.6129C6.54274 10.2426 6.84984 9.93548 7.22016 9.93548H11.2847C11.655 9.93548 11.9621 10.2426 11.9621 10.6129C11.9621 10.9832 11.655 11.2903 11.2847 11.2903Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
      template: function SortAmountUpAltIcon_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "svg", 0)(1, "g");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "path", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "defs")(4, "clipPath", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "rect", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.getClassNames());
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("clip-path", ctx.pathId);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", ctx.pathId);
        }
      },
      encapsulation: 2
    });
  }
  return SortAmountUpAltIcon;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 4299:
/*!***************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-icons-trash.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TrashIcon: () => (/* binding */ TrashIcon)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primeng/baseicon */ 9436);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/utils */ 7251);




let TrashIcon = /*#__PURE__*/(() => {
  class TrashIcon extends primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__.BaseIcon {
    pathId;
    ngOnInit() {
      this.pathId = 'url(#' + (0,primeng_utils__WEBPACK_IMPORTED_MODULE_1__.UniqueComponentId)() + ')';
    }
    static ɵfac = /* @__PURE__ */(() => {
      let ɵTrashIcon_BaseFactory;
      return function TrashIcon_Factory(t) {
        return (ɵTrashIcon_BaseFactory || (ɵTrashIcon_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](TrashIcon)))(t || TrashIcon);
      };
    })();
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: TrashIcon,
      selectors: [["TrashIcon"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 6,
      vars: 7,
      consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M3.44802 13.9955H10.552C10.8056 14.0129 11.06 13.9797 11.3006 13.898C11.5412 13.8163 11.7632 13.6877 11.9537 13.5196C12.1442 13.3515 12.2995 13.1473 12.4104 12.9188C12.5213 12.6903 12.5858 12.442 12.6 12.1884V4.36041H13.4C13.5591 4.36041 13.7117 4.29722 13.8243 4.18476C13.9368 4.07229 14 3.91976 14 3.76071C14 3.60166 13.9368 3.44912 13.8243 3.33666C13.7117 3.22419 13.5591 3.16101 13.4 3.16101H12.0537C12.0203 3.1557 11.9863 3.15299 11.952 3.15299C11.9178 3.15299 11.8838 3.1557 11.8503 3.16101H11.2285C11.2421 3.10893 11.2487 3.05513 11.248 3.00106V1.80966C11.2171 1.30262 10.9871 0.828306 10.608 0.48989C10.229 0.151475 9.73159 -0.0236625 9.22402 0.00257442H4.77602C4.27251 -0.0171866 3.78126 0.160868 3.40746 0.498617C3.03365 0.836366 2.807 1.30697 2.77602 1.80966V3.00106C2.77602 3.0556 2.78346 3.10936 2.79776 3.16101H0.6C0.521207 3.16101 0.443185 3.17652 0.37039 3.20666C0.297595 3.2368 0.231451 3.28097 0.175736 3.33666C0.120021 3.39235 0.0758251 3.45846 0.0456722 3.53121C0.0155194 3.60397 0 3.68196 0 3.76071C0 3.83946 0.0155194 3.91744 0.0456722 3.9902C0.0758251 4.06296 0.120021 4.12907 0.175736 4.18476C0.231451 4.24045 0.297595 4.28462 0.37039 4.31476C0.443185 4.3449 0.521207 4.36041 0.6 4.36041H1.40002V12.1884C1.41426 12.442 1.47871 12.6903 1.58965 12.9188C1.7006 13.1473 1.85582 13.3515 2.04633 13.5196C2.23683 13.6877 2.45882 13.8163 2.69944 13.898C2.94005 13.9797 3.1945 14.0129 3.44802 13.9955ZM2.60002 4.36041H11.304V12.1884C11.304 12.5163 10.952 12.7961 10.504 12.7961H3.40002C2.97602 12.7961 2.60002 12.5163 2.60002 12.1884V4.36041ZM3.95429 3.16101C3.96859 3.10936 3.97602 3.0556 3.97602 3.00106V1.80966C3.97602 1.48183 4.33602 1.20197 4.77602 1.20197H9.24802C9.66403 1.20197 10.048 1.48183 10.048 1.80966V3.00106C10.0473 3.05515 10.054 3.10896 10.0678 3.16101H3.95429ZM5.57571 10.997C5.41731 10.995 5.26597 10.9311 5.15395 10.8191C5.04193 10.7071 4.97808 10.5558 4.97601 10.3973V6.77517C4.97601 6.61612 5.0392 6.46359 5.15166 6.35112C5.26413 6.23866 5.41666 6.17548 5.57571 6.17548C5.73476 6.17548 5.8873 6.23866 5.99976 6.35112C6.11223 6.46359 6.17541 6.61612 6.17541 6.77517V10.3894C6.17647 10.4688 6.16174 10.5476 6.13208 10.6213C6.10241 10.695 6.05841 10.762 6.00261 10.8186C5.94682 10.8751 5.88035 10.92 5.80707 10.9506C5.73378 10.9813 5.65514 10.9971 5.57571 10.997ZM7.99968 10.8214C8.11215 10.9339 8.26468 10.997 8.42373 10.997C8.58351 10.9949 8.73604 10.93 8.84828 10.8163C8.96052 10.7025 9.02345 10.5491 9.02343 10.3894V6.77517C9.02343 6.61612 8.96025 6.46359 8.84778 6.35112C8.73532 6.23866 8.58278 6.17548 8.42373 6.17548C8.26468 6.17548 8.11215 6.23866 7.99968 6.35112C7.88722 6.46359 7.82404 6.61612 7.82404 6.77517V10.3973C7.82404 10.5564 7.88722 10.7089 7.99968 10.8214Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
      template: function TrashIcon_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "svg", 0)(1, "g");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "path", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "defs")(4, "clipPath", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "rect", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.getClassNames());
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("clip-path", ctx.pathId);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", ctx.pathId);
        }
      },
      encapsulation: 2
    });
  }
  return TrashIcon;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 1759:
/*!***************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-inputnumber.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   INPUTNUMBER_VALUE_ACCESSOR: () => (/* binding */ INPUTNUMBER_VALUE_ACCESSOR),
/* harmony export */   InputNumber: () => (/* binding */ InputNumber),
/* harmony export */   InputNumberModule: () => (/* binding */ InputNumberModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ 7780);
/* harmony import */ var primeng_autofocus__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/autofocus */ 7159);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ 9136);
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/dom */ 5228);
/* harmony import */ var primeng_icons_angledown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/icons/angledown */ 8776);
/* harmony import */ var primeng_icons_angleup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/icons/angleup */ 1147);
/* harmony import */ var primeng_icons_times__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/icons/times */ 7727);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/inputtext */ 8361);
















const _c0 = ["input"];
const _c1 = (a0, a1, a2) => ({
  "p-inputnumber p-component": true,
  "p-inputnumber-buttons-stacked": a0,
  "p-inputnumber-buttons-horizontal": a1,
  "p-inputnumber-buttons-vertical": a2
});
const _c2 = () => ({
  "p-inputnumber-button p-inputnumber-button-up": true
});
const _c3 = () => ({
  "p-inputnumber-button p-inputnumber-button-down": true
});
function InputNumber_ng_container_3_TimesIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "TimesIcon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InputNumber_ng_container_3_TimesIcon_1_Template_TimesIcon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.clear());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "p-inputnumber-clear-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "clearIcon");
  }
}
function InputNumber_ng_container_3_span_2_1_ng_template_0_Template(rf, ctx) {}
function InputNumber_ng_container_3_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, InputNumber_ng_container_3_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function InputNumber_ng_container_3_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InputNumber_ng_container_3_span_2_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.clear());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InputNumber_ng_container_3_span_2_1_Template, 1, 0, null, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "clearIcon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.clearIconTemplate);
  }
}
function InputNumber_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InputNumber_ng_container_3_TimesIcon_1_Template, 1, 2, "TimesIcon", 6)(2, InputNumber_ng_container_3_span_2_Template, 2, 2, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.clearIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.clearIconTemplate);
  }
}
function InputNumber_span_4_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 14);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r2.incrementButtonIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "incrementbuttonicon");
  }
}
function InputNumber_span_4_ng_container_3_AngleUpIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "AngleUpIcon");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "incrementbuttonicon");
  }
}
function InputNumber_span_4_ng_container_3_2_ng_template_0_Template(rf, ctx) {}
function InputNumber_span_4_ng_container_3_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, InputNumber_span_4_ng_container_3_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function InputNumber_span_4_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InputNumber_span_4_ng_container_3_AngleUpIcon_1_Template, 1, 1, "AngleUpIcon", 3)(2, InputNumber_span_4_ng_container_3_2_Template, 1, 0, null, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.incrementButtonIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.incrementButtonIconTemplate);
  }
}
function InputNumber_span_4_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 14);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r2.decrementButtonIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "decrementbuttonicon");
  }
}
function InputNumber_span_4_ng_container_6_AngleDownIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "AngleDownIcon");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "decrementbuttonicon");
  }
}
function InputNumber_span_4_ng_container_6_2_ng_template_0_Template(rf, ctx) {}
function InputNumber_span_4_ng_container_6_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, InputNumber_span_4_ng_container_6_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function InputNumber_span_4_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InputNumber_span_4_ng_container_6_AngleDownIcon_1_Template, 1, 1, "AngleDownIcon", 3)(2, InputNumber_span_4_ng_container_6_2_Template, 1, 0, null, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.decrementButtonIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.decrementButtonIconTemplate);
  }
}
function InputNumber_span_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11)(1, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function InputNumber_span_4_Template_button_mousedown_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onUpButtonMouseDown($event));
    })("mouseup", function InputNumber_span_4_Template_button_mouseup_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onUpButtonMouseUp());
    })("mouseleave", function InputNumber_span_4_Template_button_mouseleave_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onUpButtonMouseLeave());
    })("keydown", function InputNumber_span_4_Template_button_keydown_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onUpButtonKeyDown($event));
    })("keyup", function InputNumber_span_4_Template_button_keyup_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onUpButtonKeyUp());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, InputNumber_span_4_span_2_Template, 1, 2, "span", 13)(3, InputNumber_span_4_ng_container_3_Template, 3, 2, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function InputNumber_span_4_Template_button_mousedown_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onDownButtonMouseDown($event));
    })("mouseup", function InputNumber_span_4_Template_button_mouseup_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onDownButtonMouseUp());
    })("mouseleave", function InputNumber_span_4_Template_button_mouseleave_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onDownButtonMouseLeave());
    })("keydown", function InputNumber_span_4_Template_button_keydown_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onDownButtonKeyDown($event));
    })("keyup", function InputNumber_span_4_Template_button_keyup_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onDownButtonKeyUp());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, InputNumber_span_4_span_5_Template, 1, 2, "span", 13)(6, InputNumber_span_4_ng_container_6_Template, 3, 2, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "buttonGroup");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r2.incrementButtonClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c2))("disabled", ctx_r2.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-hidden", true)("data-pc-section", "incrementbutton");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.incrementButtonIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.incrementButtonIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r2.decrementButtonClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c3))("disabled", ctx_r2.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-hidden", true)("data-pc-section", ctx_r2.decrementbutton);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.decrementButtonIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.decrementButtonIcon);
  }
}
function InputNumber_button_5_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 14);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r2.incrementButtonIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "incrementbuttonicon");
  }
}
function InputNumber_button_5_ng_container_2_AngleUpIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "AngleUpIcon");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "incrementbuttonicon");
  }
}
function InputNumber_button_5_ng_container_2_2_ng_template_0_Template(rf, ctx) {}
function InputNumber_button_5_ng_container_2_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, InputNumber_button_5_ng_container_2_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function InputNumber_button_5_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InputNumber_button_5_ng_container_2_AngleUpIcon_1_Template, 1, 1, "AngleUpIcon", 3)(2, InputNumber_button_5_ng_container_2_2_Template, 1, 0, null, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.incrementButtonIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.incrementButtonIconTemplate);
  }
}
function InputNumber_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function InputNumber_button_5_Template_button_mousedown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onUpButtonMouseDown($event));
    })("mouseup", function InputNumber_button_5_Template_button_mouseup_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onUpButtonMouseUp());
    })("mouseleave", function InputNumber_button_5_Template_button_mouseleave_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onUpButtonMouseLeave());
    })("keydown", function InputNumber_button_5_Template_button_keydown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onUpButtonKeyDown($event));
    })("keyup", function InputNumber_button_5_Template_button_keyup_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onUpButtonKeyUp());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InputNumber_button_5_span_1_Template, 1, 2, "span", 13)(2, InputNumber_button_5_ng_container_2_Template, 3, 2, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r2.incrementButtonClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c2))("disabled", ctx_r2.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-hidden", true)("data-pc-section", "incrementbutton");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.incrementButtonIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.incrementButtonIcon);
  }
}
function InputNumber_button_6_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 14);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r2.decrementButtonIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "decrementbuttonicon");
  }
}
function InputNumber_button_6_ng_container_2_AngleDownIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "AngleDownIcon");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "decrementbuttonicon");
  }
}
function InputNumber_button_6_ng_container_2_2_ng_template_0_Template(rf, ctx) {}
function InputNumber_button_6_ng_container_2_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, InputNumber_button_6_ng_container_2_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function InputNumber_button_6_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InputNumber_button_6_ng_container_2_AngleDownIcon_1_Template, 1, 1, "AngleDownIcon", 3)(2, InputNumber_button_6_ng_container_2_2_Template, 1, 0, null, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.decrementButtonIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.decrementButtonIconTemplate);
  }
}
function InputNumber_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function InputNumber_button_6_Template_button_mousedown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onDownButtonMouseDown($event));
    })("mouseup", function InputNumber_button_6_Template_button_mouseup_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onDownButtonMouseUp());
    })("mouseleave", function InputNumber_button_6_Template_button_mouseleave_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onDownButtonMouseLeave());
    })("keydown", function InputNumber_button_6_Template_button_keydown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onDownButtonKeyDown($event));
    })("keyup", function InputNumber_button_6_Template_button_keyup_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onDownButtonKeyUp());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InputNumber_button_6_span_1_Template, 1, 2, "span", 13)(2, InputNumber_button_6_ng_container_2_Template, 3, 2, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r2.decrementButtonClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c3))("disabled", ctx_r2.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-hidden", true)("data-pc-section", "decrementbutton");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.decrementButtonIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.decrementButtonIcon);
  }
}
const INPUTNUMBER_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
  useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => InputNumber),
  multi: true
};
/**
 * InputNumber is an input component to provide numerical input.
 * @group Components
 */
let InputNumber = /*#__PURE__*/(() => {
  class InputNumber {
    document;
    el;
    cd;
    injector;
    /**
     * Displays spinner buttons.
     * @group Props
     */
    showButtons = false;
    /**
     * Whether to format the value.
     * @group Props
     */
    format = true;
    /**
     * Layout of the buttons, valid values are "stacked" (default), "horizontal" and "vertical".
     * @group Props
     */
    buttonLayout = 'stacked';
    /**
     * Identifier of the focus input to match a label defined for the component.
     * @group Props
     */
    inputId;
    /**
     * Style class of the component.
     * @group Props
     */
    styleClass;
    /**
     * Inline style of the component.
     * @group Props
     */
    style;
    /**
     * Advisory information to display on input.
     * @group Props
     */
    placeholder;
    /**
     * Size of the input field.
     * @group Props
     */
    size;
    /**
     * Maximum number of character allows in the input field.
     * @group Props
     */
    maxlength;
    /**
     * Specifies tab order of the element.
     * @group Props
     */
    tabindex;
    /**
     * Title text of the input text.
     * @group Props
     */
    title;
    /**
     * Specifies one or more IDs in the DOM that labels the input field.
     * @group Props
     */
    ariaLabelledBy;
    /**
     * Used to define a string that labels the input element.
     * @group Props
     */
    ariaLabel;
    /**
     * Used to indicate that user input is required on an element before a form can be submitted.
     * @group Props
     */
    ariaRequired;
    /**
     * Name of the input field.
     * @group Props
     */
    name;
    /**
     * Indicates that whether the input field is required.
     * @group Props
     */
    required;
    /**
     * Used to define a string that autocomplete attribute the current element.
     * @group Props
     */
    autocomplete;
    /**
     * Mininum boundary value.
     * @group Props
     */
    min;
    /**
     * Maximum boundary value.
     * @group Props
     */
    max;
    /**
     * Style class of the increment button.
     * @group Props
     */
    incrementButtonClass;
    /**
     * Style class of the decrement button.
     * @group Props
     */
    decrementButtonClass;
    /**
     * Style class of the increment button.
     * @group Props
     */
    incrementButtonIcon;
    /**
     * Style class of the decrement button.
     * @group Props
     */
    decrementButtonIcon;
    /**
     * When present, it specifies that an input field is read-only.
     * @group Props
     */
    readonly = false;
    /**
     * Step factor to increment/decrement the value.
     * @group Props
     */
    step = 1;
    /**
     * Determines whether the input field is empty.
     * @group Props
     */
    allowEmpty = true;
    /**
     * Locale to be used in formatting.
     * @group Props
     */
    locale;
    /**
     * The locale matching algorithm to use. Possible values are "lookup" and "best fit"; the default is "best fit". See Locale Negotiation for details.
     * @group Props
     */
    localeMatcher;
    /**
     * Defines the behavior of the component, valid values are "decimal" and "currency".
     * @group Props
     */
    mode = 'decimal';
    /**
     * The currency to use in currency formatting. Possible values are the ISO 4217 currency codes, such as "USD" for the US dollar, "EUR" for the euro, or "CNY" for the Chinese RMB. There is no default value; if the style is "currency", the currency property must be provided.
     * @group Props
     */
    currency;
    /**
     * How to display the currency in currency formatting. Possible values are "symbol" to use a localized currency symbol such as €, ü"code" to use the ISO currency code, "name" to use a localized currency name such as "dollar"; the default is "symbol".
     * @group Props
     */
    currencyDisplay;
    /**
     * Whether to use grouping separators, such as thousands separators or thousand/lakh/crore separators.
     * @group Props
     */
    useGrouping = true;
    /**
     * Specifies the input variant of the component.
     * @group Props
     */
    variant = 'outlined';
    /**
     * The minimum number of fraction digits to use. Possible values are from 0 to 20; the default for plain number and percent formatting is 0; the default for currency formatting is the number of minor unit digits provided by the ISO 4217 currency code list (2 if the list doesn't provide that information).
     * @group Props
     */
    minFractionDigits;
    /**
     * The maximum number of fraction digits to use. Possible values are from 0 to 20; the default for plain number formatting is the larger of minimumFractionDigits and 3; the default for currency formatting is the larger of minimumFractionDigits and the number of minor unit digits provided by the ISO 4217 currency code list (2 if the list doesn't provide that information).
     * @group Props
     */
    maxFractionDigits;
    /**
     * Text to display before the value.
     * @group Props
     */
    prefix;
    /**
     * Text to display after the value.
     * @group Props
     */
    suffix;
    /**
     * Inline style of the input field.
     * @group Props
     */
    inputStyle;
    /**
     * Style class of the input field.
     * @group Props
     */
    inputStyleClass;
    /**
     * When enabled, a clear icon is displayed to clear the value.
     * @group Props
     */
    showClear = false;
    /**
     * When present, it specifies that the component should automatically get focus on load.
     * @group Props
     */
    autofocus;
    /**
     * When present, it specifies that the element should be disabled.
     * @group Props
     */
    get disabled() {
      return this._disabled;
    }
    set disabled(disabled) {
      if (disabled) this.focused = false;
      this._disabled = disabled;
      if (this.timer) this.clearTimer();
    }
    /**
     * Callback to invoke on input.
     * @param {InputNumberInputEvent} event - Custom input event.
     * @group Emits
     */
    onInput = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when the component receives focus.
     * @param {Event} event - Browser event.
     * @group Emits
     */
    onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when the component loses focus.
     * @param {Event} event - Browser event.
     * @group Emits
     */
    onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke on input key press.
     * @param {KeyboardEvent} event - Keyboard event.
     * @group Emits
     */
    onKeyDown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when clear token is clicked.
     * @group Emits
     */
    onClear = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    input;
    templates;
    clearIconTemplate;
    incrementButtonIconTemplate;
    decrementButtonIconTemplate;
    value;
    onModelChange = () => {};
    onModelTouched = () => {};
    focused;
    initialized;
    groupChar = '';
    prefixChar = '';
    suffixChar = '';
    isSpecialChar;
    timer;
    lastValue;
    _numeral;
    numberFormat;
    _decimal;
    _decimalChar;
    _group;
    _minusSign;
    _currency;
    _prefix;
    _suffix;
    _index;
    _disabled;
    ngControl = null;
    constructor(document, el, cd, injector) {
      this.document = document;
      this.el = el;
      this.cd = cd;
      this.injector = injector;
    }
    ngOnChanges(simpleChange) {
      const props = ['locale', 'localeMatcher', 'mode', 'currency', 'currencyDisplay', 'useGrouping', 'minFractionDigits', 'maxFractionDigits', 'prefix', 'suffix'];
      if (props.some(p => !!simpleChange[p])) {
        this.updateConstructParser();
      }
    }
    ngAfterContentInit() {
      this.templates.forEach(item => {
        switch (item.getType()) {
          case 'clearicon':
            this.clearIconTemplate = item.template;
            break;
          case 'incrementbuttonicon':
            this.incrementButtonIconTemplate = item.template;
            break;
          case 'decrementbuttonicon':
            this.decrementButtonIconTemplate = item.template;
            break;
        }
      });
    }
    ngOnInit() {
      this.ngControl = this.injector.get(_angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControl, null, {
        optional: true
      });
      this.constructParser();
      this.initialized = true;
    }
    getOptions() {
      return {
        localeMatcher: this.localeMatcher,
        style: this.mode,
        currency: this.currency,
        currencyDisplay: this.currencyDisplay,
        useGrouping: this.useGrouping,
        minimumFractionDigits: this.minFractionDigits ? this.minFractionDigits : undefined,
        maximumFractionDigits: this.maxFractionDigits ? this.maxFractionDigits : undefined
      };
    }
    constructParser() {
      this.numberFormat = new Intl.NumberFormat(this.locale, this.getOptions());
      const numerals = [...new Intl.NumberFormat(this.locale, {
        useGrouping: false
      }).format(9876543210)].reverse();
      const index = new Map(numerals.map((d, i) => [d, i]));
      this._numeral = new RegExp(`[${numerals.join('')}]`, 'g');
      this._group = this.getGroupingExpression();
      this._minusSign = this.getMinusSignExpression();
      this._currency = this.getCurrencyExpression();
      this._decimal = this.getDecimalExpression();
      this._decimalChar = this.getDecimalChar();
      this._suffix = this.getSuffixExpression();
      this._prefix = this.getPrefixExpression();
      this._index = d => index.get(d);
    }
    updateConstructParser() {
      if (this.initialized) {
        this.constructParser();
      }
    }
    escapeRegExp(text) {
      return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
    }
    getDecimalExpression() {
      const decimalChar = this.getDecimalChar();
      return new RegExp(`[${decimalChar}]`, 'g');
    }
    getDecimalChar() {
      const formatter = new Intl.NumberFormat(this.locale, {
        ...this.getOptions(),
        useGrouping: false
      });
      return formatter.format(1.1).replace(this._currency, '').trim().replace(this._numeral, '');
    }
    getGroupingExpression() {
      const formatter = new Intl.NumberFormat(this.locale, {
        useGrouping: true
      });
      this.groupChar = formatter.format(1000000).trim().replace(this._numeral, '').charAt(0);
      return new RegExp(`[${this.groupChar}]`, 'g');
    }
    getMinusSignExpression() {
      const formatter = new Intl.NumberFormat(this.locale, {
        useGrouping: false
      });
      return new RegExp(`[${formatter.format(-1).trim().replace(this._numeral, '')}]`, 'g');
    }
    getCurrencyExpression() {
      if (this.currency) {
        const formatter = new Intl.NumberFormat(this.locale, {
          style: 'currency',
          currency: this.currency,
          currencyDisplay: this.currencyDisplay,
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        });
        return new RegExp(`[${formatter.format(1).replace(/\s/g, '').replace(this._numeral, '').replace(this._group, '')}]`, 'g');
      }
      return new RegExp(`[]`, 'g');
    }
    getPrefixExpression() {
      if (this.prefix) {
        this.prefixChar = this.prefix;
      } else {
        const formatter = new Intl.NumberFormat(this.locale, {
          style: this.mode,
          currency: this.currency,
          currencyDisplay: this.currencyDisplay
        });
        this.prefixChar = formatter.format(1).split('1')[0];
      }
      return new RegExp(`${this.escapeRegExp(this.prefixChar || '')}`, 'g');
    }
    getSuffixExpression() {
      if (this.suffix) {
        this.suffixChar = this.suffix;
      } else {
        const formatter = new Intl.NumberFormat(this.locale, {
          style: this.mode,
          currency: this.currency,
          currencyDisplay: this.currencyDisplay,
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        });
        this.suffixChar = formatter.format(1).split('1')[1];
      }
      return new RegExp(`${this.escapeRegExp(this.suffixChar || '')}`, 'g');
    }
    formatValue(value) {
      if (value != null) {
        if (value === '-') {
          // Minus sign
          return value;
        }
        if (this.format) {
          let formatter = new Intl.NumberFormat(this.locale, this.getOptions());
          let formattedValue = formatter.format(value);
          if (this.prefix && value != this.prefix) {
            formattedValue = this.prefix + formattedValue;
          }
          if (this.suffix && value != this.suffix) {
            formattedValue = formattedValue + this.suffix;
          }
          return formattedValue;
        }
        return value.toString();
      }
      return '';
    }
    parseValue(text) {
      const suffixRegex = new RegExp(this._suffix, '');
      const prefixRegex = new RegExp(this._prefix, '');
      const currencyRegex = new RegExp(this._currency, '');
      let filteredText = text.replace(suffixRegex, '').replace(prefixRegex, '').trim().replace(/\s/g, '').replace(currencyRegex, '').replace(this._group, '').replace(this._minusSign, '-').replace(this._decimal, '.').replace(this._numeral, this._index);
      if (filteredText) {
        if (filteredText === '-')
          // Minus sign
          return filteredText;
        let parsedValue = +filteredText;
        return isNaN(parsedValue) ? null : parsedValue;
      }
      return null;
    }
    repeat(event, interval, dir) {
      if (this.readonly) {
        return;
      }
      let i = interval || 500;
      this.clearTimer();
      this.timer = setTimeout(() => {
        this.repeat(event, 40, dir);
      }, i);
      this.spin(event, dir);
    }
    spin(event, dir) {
      let step = this.step * dir;
      let currentValue = this.parseValue(this.input?.nativeElement.value) || 0;
      let newValue = this.validateValue(currentValue + step);
      if (this.maxlength && this.maxlength < this.formatValue(newValue).length) {
        return;
      }
      this.updateInput(newValue, null, 'spin', null);
      this.updateModel(event, newValue);
      this.handleOnInput(event, currentValue, newValue);
    }
    clear() {
      this.value = null;
      this.onModelChange(this.value);
      this.onClear.emit();
    }
    onUpButtonMouseDown(event) {
      if (event.button === 2) {
        this.clearTimer();
        return;
      }
      if (!this.disabled) {
        this.input?.nativeElement.focus();
        this.repeat(event, null, 1);
        event.preventDefault();
      }
    }
    onUpButtonMouseUp() {
      if (!this.disabled) {
        this.clearTimer();
      }
    }
    onUpButtonMouseLeave() {
      if (!this.disabled) {
        this.clearTimer();
      }
    }
    onUpButtonKeyDown(event) {
      if (event.keyCode === 32 || event.keyCode === 13) {
        this.repeat(event, null, 1);
      }
    }
    onUpButtonKeyUp() {
      if (!this.disabled) {
        this.clearTimer();
      }
    }
    onDownButtonMouseDown(event) {
      if (event.button === 2) {
        this.clearTimer();
        return;
      }
      if (!this.disabled) {
        this.input?.nativeElement.focus();
        this.repeat(event, null, -1);
        event.preventDefault();
      }
    }
    onDownButtonMouseUp() {
      if (!this.disabled) {
        this.clearTimer();
      }
    }
    onDownButtonMouseLeave() {
      if (!this.disabled) {
        this.clearTimer();
      }
    }
    onDownButtonKeyUp() {
      if (!this.disabled) {
        this.clearTimer();
      }
    }
    onDownButtonKeyDown(event) {
      if (event.keyCode === 32 || event.keyCode === 13) {
        this.repeat(event, null, -1);
      }
    }
    onUserInput(event) {
      if (this.readonly) {
        return;
      }
      if (this.isSpecialChar) {
        event.target.value = this.lastValue;
      }
      this.isSpecialChar = false;
    }
    onInputKeyDown(event) {
      if (this.readonly) {
        return;
      }
      this.lastValue = event.target.value;
      if (event.shiftKey || event.altKey) {
        this.isSpecialChar = true;
        return;
      }
      let selectionStart = event.target.selectionStart;
      let selectionEnd = event.target.selectionEnd;
      let inputValue = event.target.value;
      let newValueStr = null;
      if (event.altKey) {
        event.preventDefault();
      }
      switch (event.key) {
        case 'ArrowUp':
          this.spin(event, 1);
          event.preventDefault();
          break;
        case 'ArrowDown':
          this.spin(event, -1);
          event.preventDefault();
          break;
        case 'ArrowLeft':
          for (let index = selectionStart; index <= inputValue.length; index++) {
            const previousCharIndex = index === 0 ? 0 : index - 1;
            if (this.isNumeralChar(inputValue.charAt(previousCharIndex))) {
              this.input.nativeElement.setSelectionRange(index, index);
              break;
            }
          }
          break;
        case 'ArrowRight':
          for (let index = selectionEnd; index >= 0; index--) {
            if (this.isNumeralChar(inputValue.charAt(index))) {
              this.input.nativeElement.setSelectionRange(index, index);
              break;
            }
          }
          break;
        case 'Tab':
        case 'Enter':
          newValueStr = this.validateValue(this.parseValue(this.input.nativeElement.value));
          this.input.nativeElement.value = this.formatValue(newValueStr);
          this.input.nativeElement.setAttribute('aria-valuenow', newValueStr);
          this.updateModel(event, newValueStr);
          break;
        case 'Backspace':
          {
            event.preventDefault();
            if (selectionStart === selectionEnd) {
              if (selectionStart == 1 && this.prefix || selectionStart == inputValue.length && this.suffix) {
                break;
              }
              const deleteChar = inputValue.charAt(selectionStart - 1);
              const {
                decimalCharIndex,
                decimalCharIndexWithoutPrefix
              } = this.getDecimalCharIndexes(inputValue);
              if (this.isNumeralChar(deleteChar)) {
                const decimalLength = this.getDecimalLength(inputValue);
                if (this._group.test(deleteChar)) {
                  this._group.lastIndex = 0;
                  newValueStr = inputValue.slice(0, selectionStart - 2) + inputValue.slice(selectionStart - 1);
                } else if (this._decimal.test(deleteChar)) {
                  this._decimal.lastIndex = 0;
                  if (decimalLength) {
                    this.input?.nativeElement.setSelectionRange(selectionStart - 1, selectionStart - 1);
                  } else {
                    newValueStr = inputValue.slice(0, selectionStart - 1) + inputValue.slice(selectionStart);
                  }
                } else if (decimalCharIndex > 0 && selectionStart > decimalCharIndex) {
                  const insertedText = this.isDecimalMode() && (this.minFractionDigits || 0) < decimalLength ? '' : '0';
                  newValueStr = inputValue.slice(0, selectionStart - 1) + insertedText + inputValue.slice(selectionStart);
                } else if (decimalCharIndexWithoutPrefix === 1) {
                  newValueStr = inputValue.slice(0, selectionStart - 1) + '0' + inputValue.slice(selectionStart);
                  newValueStr = this.parseValue(newValueStr) > 0 ? newValueStr : '';
                } else {
                  newValueStr = inputValue.slice(0, selectionStart - 1) + inputValue.slice(selectionStart);
                }
              } else if (this.mode === 'currency' && deleteChar.search(this._currency) != -1) {
                newValueStr = inputValue.slice(1);
              }
              this.updateValue(event, newValueStr, null, 'delete-single');
            } else {
              newValueStr = this.deleteRange(inputValue, selectionStart, selectionEnd);
              this.updateValue(event, newValueStr, null, 'delete-range');
            }
            break;
          }
        case 'Delete':
          event.preventDefault();
          if (selectionStart === selectionEnd) {
            if (selectionStart == 0 && this.prefix || selectionStart == inputValue.length - 1 && this.suffix) {
              break;
            }
            const deleteChar = inputValue.charAt(selectionStart);
            const {
              decimalCharIndex,
              decimalCharIndexWithoutPrefix
            } = this.getDecimalCharIndexes(inputValue);
            if (this.isNumeralChar(deleteChar)) {
              const decimalLength = this.getDecimalLength(inputValue);
              if (this._group.test(deleteChar)) {
                this._group.lastIndex = 0;
                newValueStr = inputValue.slice(0, selectionStart) + inputValue.slice(selectionStart + 2);
              } else if (this._decimal.test(deleteChar)) {
                this._decimal.lastIndex = 0;
                if (decimalLength) {
                  this.input?.nativeElement.setSelectionRange(selectionStart + 1, selectionStart + 1);
                } else {
                  newValueStr = inputValue.slice(0, selectionStart) + inputValue.slice(selectionStart + 1);
                }
              } else if (decimalCharIndex > 0 && selectionStart > decimalCharIndex) {
                const insertedText = this.isDecimalMode() && (this.minFractionDigits || 0) < decimalLength ? '' : '0';
                newValueStr = inputValue.slice(0, selectionStart) + insertedText + inputValue.slice(selectionStart + 1);
              } else if (decimalCharIndexWithoutPrefix === 1) {
                newValueStr = inputValue.slice(0, selectionStart) + '0' + inputValue.slice(selectionStart + 1);
                newValueStr = this.parseValue(newValueStr) > 0 ? newValueStr : '';
              } else {
                newValueStr = inputValue.slice(0, selectionStart) + inputValue.slice(selectionStart + 1);
              }
            }
            this.updateValue(event, newValueStr, null, 'delete-back-single');
          } else {
            newValueStr = this.deleteRange(inputValue, selectionStart, selectionEnd);
            this.updateValue(event, newValueStr, null, 'delete-range');
          }
          break;
        case 'Home':
          if (this.min) {
            this.updateModel(event, this.min);
            event.preventDefault();
          }
          break;
        case 'End':
          if (this.max) {
            this.updateModel(event, this.max);
            event.preventDefault();
          }
          break;
        default:
          break;
      }
      this.onKeyDown.emit(event);
    }
    onInputKeyPress(event) {
      if (this.readonly) {
        return;
      }
      let code = event.which || event.keyCode;
      let char = String.fromCharCode(code);
      let isDecimalSign = this.isDecimalSign(char);
      const isMinusSign = this.isMinusSign(char);
      if (code != 13) {
        event.preventDefault();
      }
      if (!isDecimalSign && event.code === 'NumpadDecimal') {
        isDecimalSign = true;
        char = this._decimalChar;
        code = char.charCodeAt(0);
      }
      const newValue = this.parseValue(this.input.nativeElement.value + char);
      const newValueStr = newValue != null ? newValue.toString() : '';
      if (this.maxlength && this.getSelectedText()?.length == this.maxlength) {
        this.insert(event, char, {
          isDecimalSign,
          isMinusSign
        });
        return;
      }
      if (this.maxlength && newValueStr.length > this.maxlength) {
        return;
      }
      if (48 <= code && code <= 57 || isMinusSign || isDecimalSign) {
        this.insert(event, char, {
          isDecimalSign,
          isMinusSign
        });
      }
    }
    getSelectedText() {
      return window?.getSelection()?.toString().replaceAll(/[^0-9']/g, '') || '';
    }
    onPaste(event) {
      if (!this.disabled && !this.readonly) {
        event.preventDefault();
        let data = (event.clipboardData || this.document.defaultView['clipboardData']).getData('Text');
        if (data) {
          if (this.maxlength) {
            data = data.toString().substring(0, this.maxlength);
          }
          let filteredData = this.parseValue(data);
          if (filteredData != null) {
            this.insert(event, filteredData.toString());
          }
        }
      }
    }
    allowMinusSign() {
      return this.min == null || this.min < 0;
    }
    isMinusSign(char) {
      if (this._minusSign.test(char) || char === '-') {
        this._minusSign.lastIndex = 0;
        return true;
      }
      return false;
    }
    isDecimalSign(char) {
      if (this._decimal.test(char)) {
        this._decimal.lastIndex = 0;
        return true;
      }
      return false;
    }
    isDecimalMode() {
      return this.mode === 'decimal';
    }
    getDecimalCharIndexes(val) {
      let decimalCharIndex = val.search(this._decimal);
      this._decimal.lastIndex = 0;
      const filteredVal = val.replace(this._prefix, '').trim().replace(/\s/g, '').replace(this._currency, '');
      const decimalCharIndexWithoutPrefix = filteredVal.search(this._decimal);
      this._decimal.lastIndex = 0;
      return {
        decimalCharIndex,
        decimalCharIndexWithoutPrefix
      };
    }
    getCharIndexes(val) {
      const decimalCharIndex = val.search(this._decimal);
      this._decimal.lastIndex = 0;
      const minusCharIndex = val.search(this._minusSign);
      this._minusSign.lastIndex = 0;
      const suffixCharIndex = val.search(this._suffix);
      this._suffix.lastIndex = 0;
      const currencyCharIndex = val.search(this._currency);
      this._currency.lastIndex = 0;
      return {
        decimalCharIndex,
        minusCharIndex,
        suffixCharIndex,
        currencyCharIndex
      };
    }
    insert(event, text, sign = {
      isDecimalSign: false,
      isMinusSign: false
    }) {
      const minusCharIndexOnText = text.search(this._minusSign);
      this._minusSign.lastIndex = 0;
      if (!this.allowMinusSign() && minusCharIndexOnText !== -1) {
        return;
      }
      let selectionStart = this.input?.nativeElement.selectionStart;
      let selectionEnd = this.input?.nativeElement.selectionEnd;
      let inputValue = this.input?.nativeElement.value.trim();
      const {
        decimalCharIndex,
        minusCharIndex,
        suffixCharIndex,
        currencyCharIndex
      } = this.getCharIndexes(inputValue);
      let newValueStr;
      if (sign.isMinusSign) {
        if (selectionStart === 0) {
          newValueStr = inputValue;
          if (minusCharIndex === -1 || selectionEnd !== 0) {
            newValueStr = this.insertText(inputValue, text, 0, selectionEnd);
          }
          this.updateValue(event, newValueStr, text, 'insert');
        }
      } else if (sign.isDecimalSign) {
        if (decimalCharIndex > 0 && selectionStart === decimalCharIndex) {
          this.updateValue(event, inputValue, text, 'insert');
        } else if (decimalCharIndex > selectionStart && decimalCharIndex < selectionEnd) {
          newValueStr = this.insertText(inputValue, text, selectionStart, selectionEnd);
          this.updateValue(event, newValueStr, text, 'insert');
        } else if (decimalCharIndex === -1 && this.maxFractionDigits) {
          newValueStr = this.insertText(inputValue, text, selectionStart, selectionEnd);
          this.updateValue(event, newValueStr, text, 'insert');
        }
      } else {
        const maxFractionDigits = this.numberFormat.resolvedOptions().maximumFractionDigits;
        const operation = selectionStart !== selectionEnd ? 'range-insert' : 'insert';
        if (decimalCharIndex > 0 && selectionStart > decimalCharIndex) {
          if (selectionStart + text.length - (decimalCharIndex + 1) <= maxFractionDigits) {
            const charIndex = currencyCharIndex >= selectionStart ? currencyCharIndex - 1 : suffixCharIndex >= selectionStart ? suffixCharIndex : inputValue.length;
            newValueStr = inputValue.slice(0, selectionStart) + text + inputValue.slice(selectionStart + text.length, charIndex) + inputValue.slice(charIndex);
            this.updateValue(event, newValueStr, text, operation);
          }
        } else {
          newValueStr = this.insertText(inputValue, text, selectionStart, selectionEnd);
          this.updateValue(event, newValueStr, text, operation);
        }
      }
    }
    insertText(value, text, start, end) {
      let textSplit = text === '.' ? text : text.split('.');
      if (textSplit.length === 2) {
        const decimalCharIndex = value.slice(start, end).search(this._decimal);
        this._decimal.lastIndex = 0;
        return decimalCharIndex > 0 ? value.slice(0, start) + this.formatValue(text) + value.slice(end) : value || this.formatValue(text);
      } else if (end - start === value.length) {
        return this.formatValue(text);
      } else if (start === 0) {
        return text + value.slice(end);
      } else if (end === value.length) {
        return value.slice(0, start) + text;
      } else {
        return value.slice(0, start) + text + value.slice(end);
      }
    }
    deleteRange(value, start, end) {
      let newValueStr;
      if (end - start === value.length) newValueStr = '';else if (start === 0) newValueStr = value.slice(end);else if (end === value.length) newValueStr = value.slice(0, start);else newValueStr = value.slice(0, start) + value.slice(end);
      return newValueStr;
    }
    initCursor() {
      let selectionStart = this.input?.nativeElement.selectionStart;
      let selectionEnd = this.input?.nativeElement.selectionEnd;
      let inputValue = this.input?.nativeElement.value;
      let valueLength = inputValue.length;
      let index = null;
      // remove prefix
      let prefixLength = (this.prefixChar || '').length;
      inputValue = inputValue.replace(this._prefix, '');
      // Will allow selecting whole prefix. But not a part of it.
      // Negative values will trigger clauses after this to fix the cursor position.
      if (selectionStart === selectionEnd || selectionStart !== 0 || selectionEnd < prefixLength) {
        selectionStart -= prefixLength;
      }
      let char = inputValue.charAt(selectionStart);
      if (this.isNumeralChar(char)) {
        return selectionStart + prefixLength;
      }
      //left
      let i = selectionStart - 1;
      while (i >= 0) {
        char = inputValue.charAt(i);
        if (this.isNumeralChar(char)) {
          index = i + prefixLength;
          break;
        } else {
          i--;
        }
      }
      if (index !== null) {
        this.input?.nativeElement.setSelectionRange(index + 1, index + 1);
      } else {
        i = selectionStart;
        while (i < valueLength) {
          char = inputValue.charAt(i);
          if (this.isNumeralChar(char)) {
            index = i + prefixLength;
            break;
          } else {
            i++;
          }
        }
        if (index !== null) {
          this.input?.nativeElement.setSelectionRange(index, index);
        }
      }
      return index || 0;
    }
    onInputClick() {
      const currentValue = this.input?.nativeElement.value;
      if (!this.readonly && currentValue !== primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.getSelection()) {
        this.initCursor();
      }
    }
    isNumeralChar(char) {
      if (char.length === 1 && (this._numeral.test(char) || this._decimal.test(char) || this._group.test(char) || this._minusSign.test(char))) {
        this.resetRegex();
        return true;
      }
      return false;
    }
    resetRegex() {
      this._numeral.lastIndex = 0;
      this._decimal.lastIndex = 0;
      this._group.lastIndex = 0;
      this._minusSign.lastIndex = 0;
    }
    updateValue(event, valueStr, insertedValueStr, operation) {
      let currentValue = this.input?.nativeElement.value;
      let newValue = null;
      if (valueStr != null) {
        newValue = this.parseValue(valueStr);
        newValue = !newValue && !this.allowEmpty ? 0 : newValue;
        this.updateInput(newValue, insertedValueStr, operation, valueStr);
        this.handleOnInput(event, currentValue, newValue);
      }
    }
    handleOnInput(event, currentValue, newValue) {
      if (this.isValueChanged(currentValue, newValue)) {
        this.input.nativeElement.value = this.formatValue(newValue);
        this.input?.nativeElement.setAttribute('aria-valuenow', newValue);
        this.updateModel(event, newValue);
        this.onInput.emit({
          originalEvent: event,
          value: newValue,
          formattedValue: currentValue
        });
      }
    }
    isValueChanged(currentValue, newValue) {
      if (newValue === null && currentValue !== null) {
        return true;
      }
      if (newValue != null) {
        let parsedCurrentValue = typeof currentValue === 'string' ? this.parseValue(currentValue) : currentValue;
        return newValue !== parsedCurrentValue;
      }
      return false;
    }
    validateValue(value) {
      if (value === '-' || value == null) {
        return null;
      }
      if (this.min != null && value < this.min) {
        return this.min;
      }
      if (this.max != null && value > this.max) {
        return this.max;
      }
      return value;
    }
    updateInput(value, insertedValueStr, operation, valueStr) {
      insertedValueStr = insertedValueStr || '';
      let inputValue = this.input?.nativeElement.value;
      let newValue = this.formatValue(value);
      let currentLength = inputValue.length;
      if (newValue !== valueStr) {
        newValue = this.concatValues(newValue, valueStr);
      }
      if (currentLength === 0) {
        this.input.nativeElement.value = newValue;
        this.input.nativeElement.setSelectionRange(0, 0);
        const index = this.initCursor();
        const selectionEnd = index + insertedValueStr.length;
        this.input.nativeElement.setSelectionRange(selectionEnd, selectionEnd);
      } else {
        let selectionStart = this.input.nativeElement.selectionStart;
        let selectionEnd = this.input.nativeElement.selectionEnd;
        if (this.maxlength && newValue.length > this.maxlength) {
          newValue = newValue.slice(0, this.maxlength);
          selectionStart = Math.min(selectionStart, this.maxlength);
          selectionEnd = Math.min(selectionEnd, this.maxlength);
        }
        if (this.maxlength && this.maxlength < newValue.length) {
          return;
        }
        this.input.nativeElement.value = newValue;
        let newLength = newValue.length;
        if (operation === 'range-insert') {
          const startValue = this.parseValue((inputValue || '').slice(0, selectionStart));
          const startValueStr = startValue !== null ? startValue.toString() : '';
          const startExpr = startValueStr.split('').join(`(${this.groupChar})?`);
          const sRegex = new RegExp(startExpr, 'g');
          sRegex.test(newValue);
          const tExpr = insertedValueStr.split('').join(`(${this.groupChar})?`);
          const tRegex = new RegExp(tExpr, 'g');
          tRegex.test(newValue.slice(sRegex.lastIndex));
          selectionEnd = sRegex.lastIndex + tRegex.lastIndex;
          this.input.nativeElement.setSelectionRange(selectionEnd, selectionEnd);
        } else if (newLength === currentLength) {
          if (operation === 'insert' || operation === 'delete-back-single') this.input.nativeElement.setSelectionRange(selectionEnd + 1, selectionEnd + 1);else if (operation === 'delete-single') this.input.nativeElement.setSelectionRange(selectionEnd - 1, selectionEnd - 1);else if (operation === 'delete-range' || operation === 'spin') this.input.nativeElement.setSelectionRange(selectionEnd, selectionEnd);
        } else if (operation === 'delete-back-single') {
          let prevChar = inputValue.charAt(selectionEnd - 1);
          let nextChar = inputValue.charAt(selectionEnd);
          let diff = currentLength - newLength;
          let isGroupChar = this._group.test(nextChar);
          if (isGroupChar && diff === 1) {
            selectionEnd += 1;
          } else if (!isGroupChar && this.isNumeralChar(prevChar)) {
            selectionEnd += -1 * diff + 1;
          }
          this._group.lastIndex = 0;
          this.input.nativeElement.setSelectionRange(selectionEnd, selectionEnd);
        } else if (inputValue === '-' && operation === 'insert') {
          this.input.nativeElement.setSelectionRange(0, 0);
          const index = this.initCursor();
          const selectionEnd = index + insertedValueStr.length + 1;
          this.input.nativeElement.setSelectionRange(selectionEnd, selectionEnd);
        } else {
          selectionEnd = selectionEnd + (newLength - currentLength);
          this.input.nativeElement.setSelectionRange(selectionEnd, selectionEnd);
        }
      }
      this.input.nativeElement.setAttribute('aria-valuenow', value);
    }
    concatValues(val1, val2) {
      if (val1 && val2) {
        let decimalCharIndex = val2.search(this._decimal);
        this._decimal.lastIndex = 0;
        if (this.suffixChar) {
          return decimalCharIndex !== -1 ? val1 : val1.replace(this.suffixChar, '').split(this._decimal)[0] + val2.replace(this.suffixChar, '').slice(decimalCharIndex) + this.suffixChar;
        } else {
          return decimalCharIndex !== -1 ? val1.split(this._decimal)[0] + val2.slice(decimalCharIndex) : val1;
        }
      }
      return val1;
    }
    getDecimalLength(value) {
      if (value) {
        const valueSplit = value.split(this._decimal);
        if (valueSplit.length === 2) {
          return valueSplit[1].replace(this._suffix, '').trim().replace(/\s/g, '').replace(this._currency, '').length;
        }
      }
      return 0;
    }
    onInputFocus(event) {
      this.focused = true;
      this.onFocus.emit(event);
    }
    onInputBlur(event) {
      this.focused = false;
      const newValueNumber = this.validateValue(this.parseValue(this.input.nativeElement.value));
      const newValueString = newValueNumber?.toString();
      this.input.nativeElement.value = this.formatValue(newValueString);
      this.input.nativeElement.setAttribute('aria-valuenow', newValueString);
      this.updateModel(event, newValueNumber);
      this.onBlur.emit(event);
    }
    formattedValue() {
      const val = !this.value && !this.allowEmpty ? 0 : this.value;
      return this.formatValue(val);
    }
    updateModel(event, value) {
      const isBlurUpdateOnMode = this.ngControl?.control?.updateOn === 'blur';
      if (this.value !== value) {
        this.value = value;
        if (!(isBlurUpdateOnMode && this.focused)) {
          this.onModelChange(value);
        }
      } else if (isBlurUpdateOnMode) {
        this.onModelChange(value);
      }
      this.onModelTouched();
    }
    writeValue(value) {
      this.value = value;
      this.cd.markForCheck();
    }
    registerOnChange(fn) {
      this.onModelChange = fn;
    }
    registerOnTouched(fn) {
      this.onModelTouched = fn;
    }
    setDisabledState(val) {
      this.disabled = val;
      this.cd.markForCheck();
    }
    get filled() {
      return this.value != null && this.value.toString().length > 0;
    }
    clearTimer() {
      if (this.timer) {
        clearInterval(this.timer);
      }
    }
    static ɵfac = function InputNumber_Factory(t) {
      return new (t || InputNumber)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector));
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: InputNumber,
      selectors: [["p-inputNumber"]],
      contentQueries: function InputNumber_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeTemplate, 4);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
        }
      },
      viewQuery: function InputNumber_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.input = _t.first);
        }
      },
      hostAttrs: [1, "p-element", "p-inputwrapper"],
      hostVars: 6,
      hostBindings: function InputNumber_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("p-inputwrapper-filled", ctx.filled)("p-inputwrapper-focus", ctx.focused)("p-inputnumber-clearable", ctx.showClear && ctx.buttonLayout != "vertical");
        }
      },
      inputs: {
        showButtons: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "showButtons", "showButtons", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        format: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "format", "format", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        buttonLayout: "buttonLayout",
        inputId: "inputId",
        styleClass: "styleClass",
        style: "style",
        placeholder: "placeholder",
        size: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "size", "size", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute],
        maxlength: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "maxlength", "maxlength", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute],
        tabindex: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "tabindex", "tabindex", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute],
        title: "title",
        ariaLabelledBy: "ariaLabelledBy",
        ariaLabel: "ariaLabel",
        ariaRequired: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "ariaRequired", "ariaRequired", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        name: "name",
        required: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "required", "required", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        autocomplete: "autocomplete",
        min: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "min", "min", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute],
        max: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "max", "max", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute],
        incrementButtonClass: "incrementButtonClass",
        decrementButtonClass: "decrementButtonClass",
        incrementButtonIcon: "incrementButtonIcon",
        decrementButtonIcon: "decrementButtonIcon",
        readonly: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "readonly", "readonly", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        step: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "step", "step", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute],
        allowEmpty: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "allowEmpty", "allowEmpty", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        locale: "locale",
        localeMatcher: "localeMatcher",
        mode: "mode",
        currency: "currency",
        currencyDisplay: "currencyDisplay",
        useGrouping: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "useGrouping", "useGrouping", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        variant: "variant",
        minFractionDigits: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "minFractionDigits", "minFractionDigits", value => (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute)(value, null)],
        maxFractionDigits: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "maxFractionDigits", "maxFractionDigits", value => (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute)(value, null)],
        prefix: "prefix",
        suffix: "suffix",
        inputStyle: "inputStyle",
        inputStyleClass: "inputStyleClass",
        showClear: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "showClear", "showClear", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        autofocus: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "autofocus", "autofocus", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        disabled: "disabled"
      },
      outputs: {
        onInput: "onInput",
        onFocus: "onFocus",
        onBlur: "onBlur",
        onKeyDown: "onKeyDown",
        onClear: "onClear"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([INPUTNUMBER_VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 7,
      vars: 41,
      consts: [["input", ""], [3, "ngClass", "ngStyle"], ["pInputText", "", "role", "spinbutton", "inputmode", "decimal", "pAutoFocus", "", 3, "input", "keydown", "keypress", "paste", "click", "focus", "blur", "ngClass", "ngStyle", "value", "disabled", "readonly", "autofocus"], [4, "ngIf"], ["class", "p-inputnumber-button-group", 4, "ngIf"], ["type", "button", "pButton", "", "class", "p-button-icon-only", "tabindex", "-1", 3, "ngClass", "class", "disabled", "mousedown", "mouseup", "mouseleave", "keydown", "keyup", 4, "ngIf"], [3, "ngClass", "click", 4, "ngIf"], ["class", "p-inputnumber-clear-icon", 3, "click", 4, "ngIf"], [3, "click", "ngClass"], [1, "p-inputnumber-clear-icon", 3, "click"], [4, "ngTemplateOutlet"], [1, "p-inputnumber-button-group"], ["type", "button", "pButton", "", "tabindex", "-1", 1, "p-button-icon-only", 3, "mousedown", "mouseup", "mouseleave", "keydown", "keyup", "ngClass", "disabled"], [3, "ngClass", 4, "ngIf"], [3, "ngClass"]],
      template: function InputNumber_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 1)(1, "input", 2, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function InputNumber_Template_input_input_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onUserInput($event));
          })("keydown", function InputNumber_Template_input_keydown_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onInputKeyDown($event));
          })("keypress", function InputNumber_Template_input_keypress_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onInputKeyPress($event));
          })("paste", function InputNumber_Template_input_paste_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onPaste($event));
          })("click", function InputNumber_Template_input_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onInputClick());
          })("focus", function InputNumber_Template_input_focus_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onInputFocus($event));
          })("blur", function InputNumber_Template_input_blur_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onInputBlur($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, InputNumber_ng_container_3_Template, 3, 2, "ng-container", 3)(4, InputNumber_span_4_Template, 7, 19, "span", 4)(5, InputNumber_button_5_Template, 3, 9, "button", 5)(6, InputNumber_button_6_Template, 3, 9, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.styleClass);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](37, _c1, ctx.showButtons && ctx.buttonLayout === "stacked", ctx.showButtons && ctx.buttonLayout === "horizontal", ctx.showButtons && ctx.buttonLayout === "vertical"))("ngStyle", ctx.style);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-name", "inputnumber")("data-pc-section", "root");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.inputStyleClass);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "p-inputnumber-input")("ngStyle", ctx.inputStyle)("value", ctx.formattedValue())("disabled", ctx.disabled)("readonly", ctx.readonly)("autofocus", ctx.autofocus);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.inputId)("variant", ctx.variant)("aria-valuemin", ctx.min)("aria-valuemax", ctx.max)("aria-valuenow", ctx.value)("placeholder", ctx.placeholder)("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledBy)("title", ctx.title)("size", ctx.size)("name", ctx.name)("autocomplete", ctx.autocomplete)("maxlength", ctx.maxlength)("tabindex", ctx.tabindex)("aria-required", ctx.ariaRequired)("required", ctx.required)("min", ctx.min)("max", ctx.max)("data-pc-section", "input");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.buttonLayout != "vertical" && ctx.showClear && ctx.value);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showButtons && ctx.buttonLayout === "stacked");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showButtons && ctx.buttonLayout !== "stacked");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showButtons && ctx.buttonLayout !== "stacked");
        }
      },
      dependencies: () => [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle, primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__.InputText, primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonDirective, primeng_autofocus__WEBPACK_IMPORTED_MODULE_7__.AutoFocus, primeng_icons_times__WEBPACK_IMPORTED_MODULE_8__.TimesIcon, primeng_icons_angleup__WEBPACK_IMPORTED_MODULE_9__.AngleUpIcon, primeng_icons_angledown__WEBPACK_IMPORTED_MODULE_10__.AngleDownIcon],
      styles: ["@layer primeng{p-inputnumber,.p-inputnumber{display:inline-flex}.p-inputnumber-button{display:flex;align-items:center;justify-content:center;flex:0 0 auto}.p-inputnumber-buttons-stacked .p-button.p-inputnumber-button .p-button-label,.p-inputnumber-buttons-horizontal .p-button.p-inputnumber-button .p-button-label{display:none}.p-inputnumber-buttons-stacked .p-button.p-inputnumber-button-up{border-top-left-radius:0;border-bottom-left-radius:0;border-bottom-right-radius:0;padding:0}.p-inputnumber-buttons-stacked .p-inputnumber-input{border-top-right-radius:0;border-bottom-right-radius:0}.p-inputnumber-buttons-stacked .p-button.p-inputnumber-button-down{border-top-left-radius:0;border-top-right-radius:0;border-bottom-left-radius:0;padding:0}.p-inputnumber-buttons-stacked .p-inputnumber-button-group{display:flex;flex-direction:column}.p-inputnumber-buttons-stacked .p-inputnumber-button-group .p-button.p-inputnumber-button{flex:1 1 auto}.p-inputnumber-buttons-horizontal .p-button.p-inputnumber-button-up{order:3;border-top-left-radius:0;border-bottom-left-radius:0}.p-inputnumber-buttons-horizontal .p-inputnumber-input{order:2;border-radius:0}.p-inputnumber-buttons-horizontal .p-button.p-inputnumber-button-down{order:1;border-top-right-radius:0;border-bottom-right-radius:0}.p-inputnumber-buttons-vertical{flex-direction:column}.p-inputnumber-buttons-vertical .p-button.p-inputnumber-button-up{order:1;border-bottom-left-radius:0;border-bottom-right-radius:0;width:100%}.p-inputnumber-buttons-vertical .p-inputnumber-input{order:2;border-radius:0;text-align:center}.p-inputnumber-buttons-vertical .p-button.p-inputnumber-button-down{order:3;border-top-left-radius:0;border-top-right-radius:0;width:100%}.p-inputnumber-input{flex:1 1 auto}.p-fluid p-inputnumber,.p-fluid .p-inputnumber{width:100%}.p-fluid .p-inputnumber .p-inputnumber-input{width:1%}.p-fluid .p-inputnumber-buttons-vertical .p-inputnumber-input{width:100%}.p-inputnumber-clear-icon{position:absolute;top:50%;margin-top:-.5rem;cursor:pointer}.p-inputnumber-clearable{position:relative}}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return InputNumber;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let InputNumberModule = /*#__PURE__*/(() => {
  class InputNumberModule {
    static ɵfac = function InputNumberModule_Factory(t) {
      return new (t || InputNumberModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: InputNumberModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__.InputTextModule, primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonModule, primeng_autofocus__WEBPACK_IMPORTED_MODULE_7__.AutoFocusModule, primeng_icons_times__WEBPACK_IMPORTED_MODULE_8__.TimesIcon, primeng_icons_angleup__WEBPACK_IMPORTED_MODULE_9__.AngleUpIcon, primeng_icons_angledown__WEBPACK_IMPORTED_MODULE_10__.AngleDownIcon, primeng_api__WEBPACK_IMPORTED_MODULE_4__.SharedModule]
    });
  }
  return InputNumberModule;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 8361:
/*!*************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-inputtext.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InputText: () => (/* binding */ InputText),
/* harmony export */   InputTextModule: () => (/* binding */ InputTextModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ 7780);






/**
 * InputText directive is an extension to standard input element with theming.
 * @group Components
 */
let InputText = /*#__PURE__*/(() => {
  class InputText {
    el;
    ngModel;
    cd;
    config;
    /**
     * Specifies the input variant of the component.
     * @group Props
     */
    variant = 'outlined';
    filled;
    constructor(el, ngModel, cd, config) {
      this.el = el;
      this.ngModel = ngModel;
      this.cd = cd;
      this.config = config;
    }
    ngAfterViewInit() {
      this.updateFilledState();
      this.cd.detectChanges();
    }
    ngDoCheck() {
      this.updateFilledState();
    }
    onInput() {
      this.updateFilledState();
    }
    updateFilledState() {
      this.filled = this.el.nativeElement.value && this.el.nativeElement.value.length || this.ngModel && this.ngModel.model;
    }
    static ɵfac = function InputText_Factory(t) {
      return new (t || InputText)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_2__.PrimeNGConfig));
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: InputText,
      selectors: [["", "pInputText", ""]],
      hostAttrs: [1, "p-inputtext", "p-component", "p-element"],
      hostVars: 4,
      hostBindings: function InputText_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function InputText_input_HostBindingHandler($event) {
            return ctx.onInput($event);
          });
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("p-filled", ctx.filled)("p-variant-filled", ctx.variant === "filled" || ctx.config.inputStyle() === "filled");
        }
      },
      inputs: {
        variant: "variant"
      }
    });
  }
  return InputText;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let InputTextModule = /*#__PURE__*/(() => {
  class InputTextModule {
    static ɵfac = function InputTextModule_Factory(t) {
      return new (t || InputTextModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: InputTextModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule]
    });
  }
  return InputTextModule;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 3157:
/*!*************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-paginator.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Paginator: () => (/* binding */ Paginator),
/* harmony export */   PaginatorModule: () => (/* binding */ PaginatorModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/api */ 7780);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/dropdown */ 6895);
/* harmony import */ var primeng_icons_angledoubleleft__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/icons/angledoubleleft */ 8540);
/* harmony import */ var primeng_icons_angledoubleright__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/icons/angledoubleright */ 4607);
/* harmony import */ var primeng_icons_angleleft__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/icons/angleleft */ 203);
/* harmony import */ var primeng_icons_angleright__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/icons/angleright */ 1726);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/inputnumber */ 1759);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/ripple */ 78);



















/**
 * Paginator is a generic component to display content in paged format.
 * @group Components
 */
const _c0 = a0 => ({
  "p-disabled": a0
});
const _c1 = a0 => ({
  $implicit: a0
});
const _c2 = a0 => ({
  "p-highlight": a0
});
function Paginator_div_0_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Paginator_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Paginator_div_0_div_1_ng_container_1_Template, 1, 0, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "start");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.templateLeft)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c1, ctx_r1.paginatorState));
  }
}
function Paginator_div_0_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.currentPageReport);
  }
}
function Paginator_div_0_button_3_AngleDoubleLeftIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "AngleDoubleLeftIcon", 19);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-paginator-icon");
  }
}
function Paginator_div_0_button_3_span_2_1_ng_template_0_Template(rf, ctx) {}
function Paginator_div_0_button_3_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Paginator_div_0_button_3_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Paginator_div_0_button_3_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Paginator_div_0_button_3_span_2_1_Template, 1, 0, null, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.firstPageLinkIconTemplate);
  }
}
function Paginator_div_0_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Paginator_div_0_button_3_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.changePageToFirst($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Paginator_div_0_button_3_AngleDoubleLeftIcon_1_Template, 1, 1, "AngleDoubleLeftIcon", 6)(2, Paginator_div_0_button_3_span_2_Template, 2, 1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.isFirstPage() || ctx_r1.empty())("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx_r1.isFirstPage() || ctx_r1.empty()));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r1.getAriaLabel("firstPageLabel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.firstPageLinkIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.firstPageLinkIconTemplate);
  }
}
function Paginator_div_0_AngleLeftIcon_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "AngleLeftIcon", 19);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-paginator-icon");
  }
}
function Paginator_div_0_span_6_1_ng_template_0_Template(rf, ctx) {}
function Paginator_div_0_span_6_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Paginator_div_0_span_6_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Paginator_div_0_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Paginator_div_0_span_6_1_Template, 1, 0, null, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.previousPageLinkIconTemplate);
  }
}
function Paginator_div_0_span_7_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Paginator_div_0_span_7_button_1_Template_button_click_0_listener($event) {
      const pageLink_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onPageLinkClick($event, pageLink_r5 - 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const pageLink_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c2, pageLink_r5 - 1 == ctx_r1.getPage()));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r1.getPageAriaLabel(pageLink_r5))("aria-current", pageLink_r5 - 1 == ctx_r1.getPage() ? "page" : undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.getLocalization(pageLink_r5), " ");
  }
}
function Paginator_div_0_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Paginator_div_0_span_7_button_1_Template, 2, 6, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.pageLinks);
  }
}
function Paginator_div_0_p_dropdown_8_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.currentPageReport);
  }
}
function Paginator_div_0_p_dropdown_8_ng_container_2_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Paginator_div_0_p_dropdown_8_ng_container_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Paginator_div_0_p_dropdown_8_ng_container_2_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 16);
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.jumpToPageItemTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, item_r7));
  }
}
function Paginator_div_0_p_dropdown_8_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Paginator_div_0_p_dropdown_8_ng_container_2_ng_template_1_Template, 1, 4, "ng-template", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
}
function Paginator_div_0_p_dropdown_8_3_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Paginator_div_0_p_dropdown_8_3_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Paginator_div_0_p_dropdown_8_3_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 21);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.dropdownIconTemplate);
  }
}
function Paginator_div_0_p_dropdown_8_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Paginator_div_0_p_dropdown_8_3_ng_template_0_Template, 1, 1, "ng-template", 29);
  }
}
function Paginator_div_0_p_dropdown_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-dropdown", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onChange", function Paginator_div_0_p_dropdown_8_Template_p_dropdown_onChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onPageDropdownChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Paginator_div_0_p_dropdown_8_ng_template_1_Template, 1, 1, "ng-template", 26)(2, Paginator_div_0_p_dropdown_8_ng_container_2_Template, 2, 0, "ng-container", 27)(3, Paginator_div_0_p_dropdown_8_3_Template, 1, 0, null, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r1.pageItems)("ngModel", ctx_r1.getPage())("disabled", ctx_r1.empty())("appendTo", ctx_r1.dropdownAppendTo)("scrollHeight", ctx_r1.dropdownScrollHeight);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r1.getAriaLabel("jumpToPageDropdownLabel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.jumpToPageItemTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.dropdownIconTemplate);
  }
}
function Paginator_div_0_AngleRightIcon_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "AngleRightIcon", 19);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-paginator-icon");
  }
}
function Paginator_div_0_span_11_1_ng_template_0_Template(rf, ctx) {}
function Paginator_div_0_span_11_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Paginator_div_0_span_11_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Paginator_div_0_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Paginator_div_0_span_11_1_Template, 1, 0, null, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.nextPageLinkIconTemplate);
  }
}
function Paginator_div_0_button_12_AngleDoubleRightIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "AngleDoubleRightIcon", 19);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-paginator-icon");
  }
}
function Paginator_div_0_button_12_span_2_1_ng_template_0_Template(rf, ctx) {}
function Paginator_div_0_button_12_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Paginator_div_0_button_12_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Paginator_div_0_button_12_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Paginator_div_0_button_12_span_2_1_Template, 1, 0, null, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.lastPageLinkIconTemplate);
  }
}
function Paginator_div_0_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Paginator_div_0_button_12_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.changePageToLast($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Paginator_div_0_button_12_AngleDoubleRightIcon_1_Template, 1, 1, "AngleDoubleRightIcon", 6)(2, Paginator_div_0_button_12_span_2_Template, 2, 1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.isLastPage() || ctx_r1.empty())("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx_r1.isLastPage() || ctx_r1.empty()));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r1.getAriaLabel("lastPageLabel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.lastPageLinkIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.lastPageLinkIconTemplate);
  }
}
function Paginator_div_0_p_inputNumber_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-inputNumber", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function Paginator_div_0_p_inputNumber_13_Template_p_inputNumber_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.changePage($event - 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.currentPage())("disabled", ctx_r1.empty());
  }
}
function Paginator_div_0_p_dropdown_14_ng_container_1_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Paginator_div_0_p_dropdown_14_ng_container_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Paginator_div_0_p_dropdown_14_ng_container_1_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 16);
  }
  if (rf & 2) {
    const item_r11 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.dropdownItemTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, item_r11));
  }
}
function Paginator_div_0_p_dropdown_14_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Paginator_div_0_p_dropdown_14_ng_container_1_ng_template_1_Template, 1, 4, "ng-template", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
}
function Paginator_div_0_p_dropdown_14_2_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Paginator_div_0_p_dropdown_14_2_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Paginator_div_0_p_dropdown_14_2_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 21);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.dropdownIconTemplate);
  }
}
function Paginator_div_0_p_dropdown_14_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Paginator_div_0_p_dropdown_14_2_ng_template_0_Template, 1, 1, "ng-template", 29);
  }
}
function Paginator_div_0_p_dropdown_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-dropdown", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function Paginator_div_0_p_dropdown_14_Template_p_dropdown_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx_r1.rows, $event) || (ctx_r1.rows = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onChange", function Paginator_div_0_p_dropdown_14_Template_p_dropdown_onChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onRppChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Paginator_div_0_p_dropdown_14_ng_container_1_Template, 2, 0, "ng-container", 27)(2, Paginator_div_0_p_dropdown_14_2_Template, 1, 0, null, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r1.rowsPerPageItems);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.rows);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.empty())("appendTo", ctx_r1.dropdownAppendTo)("scrollHeight", ctx_r1.dropdownScrollHeight)("ariaLabel", ctx_r1.getAriaLabel("rowsPerPageLabel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.dropdownItemTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.dropdownIconTemplate);
  }
}
function Paginator_div_0_div_15_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Paginator_div_0_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Paginator_div_0_div_15_ng_container_1_Template, 1, 0, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "end");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.templateRight)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c1, ctx_r1.paginatorState));
  }
}
function Paginator_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Paginator_div_0_div_1_Template, 2, 5, "div", 2)(2, Paginator_div_0_span_2_Template, 2, 1, "span", 3)(3, Paginator_div_0_button_3_Template, 3, 7, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Paginator_div_0_Template_button_click_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.changePageToPrev($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, Paginator_div_0_AngleLeftIcon_5_Template, 1, 1, "AngleLeftIcon", 6)(6, Paginator_div_0_span_6_Template, 2, 1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, Paginator_div_0_span_7_Template, 2, 1, "span", 8)(8, Paginator_div_0_p_dropdown_8_Template, 4, 8, "p-dropdown", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Paginator_div_0_Template_button_click_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.changePageToNext($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, Paginator_div_0_AngleRightIcon_10_Template, 1, 1, "AngleRightIcon", 6)(11, Paginator_div_0_span_11_Template, 2, 1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, Paginator_div_0_button_12_Template, 3, 7, "button", 11)(13, Paginator_div_0_p_inputNumber_13_Template, 1, 2, "p-inputNumber", 12)(14, Paginator_div_0_p_dropdown_14_Template, 3, 8, "p-dropdown", 13)(15, Paginator_div_0_div_15_Template, 2, 5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r1.styleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r1.style)("ngClass", "p-paginator p-component");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "paginator")("data-pc-section", "root");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.templateLeft);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.showCurrentPageReport);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.showFirstLastIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.isFirstPage() || ctx_r1.empty())("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](25, _c0, ctx_r1.isFirstPage() || ctx_r1.empty()));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r1.getAriaLabel("prevPageLabel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.previousPageLinkIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.previousPageLinkIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.showPageLinks);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.showJumpToPageDropdown);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.isLastPage() || ctx_r1.empty())("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](27, _c0, ctx_r1.isLastPage() || ctx_r1.empty()));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r1.getAriaLabel("nextPageLabel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.nextPageLinkIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.nextPageLinkIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.showFirstLastIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.showJumpToPageInput);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.rowsPerPageOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.templateRight);
  }
}
let Paginator = /*#__PURE__*/(() => {
  class Paginator {
    cd;
    config;
    /**
     * Number of page links to display.
     * @group Props
     */
    pageLinkSize = 5;
    /**
     * Inline style of the component.
     * @group Props
     */
    style;
    /**
     * Style class of the component.
     * @group Props
     */
    styleClass;
    /**
     * Whether to show it even there is only one page.
     * @group Props
     */
    alwaysShow = true;
    /**
     * Target element to attach the dropdown overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
     * @group Props
     */
    dropdownAppendTo;
    /**
     * Template instance to inject into the left side of the paginator.
     * @param {PaginatorState} context - Paginator state.
     * @group Props
     */
    templateLeft;
    /**
     * Template instance to inject into the right side of the paginator.
     * @param {PaginatorState} context - Paginator state.
     * @group Props
     */
    templateRight;
    /**
     * Target element to attach the dropdown overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
     * @group Props
     */
    appendTo;
    /**
     * Dropdown height of the viewport in pixels, a scrollbar is defined if height of list exceeds this value.
     * @group Props
     */
    dropdownScrollHeight = '200px';
    /**
     * Template of the current page report element. Available placeholders are {currentPage},{totalPages},{rows},{first},{last} and {totalRecords}
     * @group Props
     */
    currentPageReportTemplate = '{currentPage} of {totalPages}';
    /**
     * Whether to display current page report.
     * @group Props
     */
    showCurrentPageReport;
    /**
     * When enabled, icons are displayed on paginator to go first and last page.
     * @group Props
     */
    showFirstLastIcon = true;
    /**
     * Number of total records.
     * @group Props
     */
    totalRecords = 0;
    /**
     * Data count to display per page.
     * @group Props
     */
    rows = 0;
    /**
     * Array of integer/object values to display inside rows per page dropdown. A object that have 'showAll' key can be added to it to show all data. Exp; [10,20,30,{showAll:'All'}]
     * @group Props
     */
    rowsPerPageOptions;
    /**
     * Whether to display a dropdown to navigate to any page.
     * @group Props
     */
    showJumpToPageDropdown;
    /**
     * Whether to display a input to navigate to any page.
     * @group Props
     */
    showJumpToPageInput;
    /**
     * Template instance to inject into the jump to page dropdown item inside in the paginator.
     * @param {Object} context - item instance.
     * @group Props
     */
    jumpToPageItemTemplate;
    /**
     * Whether to show page links.
     * @group Props
     */
    showPageLinks = true;
    /**
     * Locale to be used in formatting.
     * @group Props
     */
    locale;
    /**
     * Template instance to inject into the rows per page dropdown item inside in the paginator.
     * @param {Object} context - item instance.
     * @group Props
     */
    dropdownItemTemplate;
    /**
     * Zero-relative number of the first row to be displayed.
     * @group Props
     */
    get first() {
      return this._first;
    }
    set first(val) {
      this._first = val;
    }
    /**
     * Callback to invoke when page changes, the event object contains information about the new state.
     * @param {PaginatorState} event - Paginator state.
     * @group Emits
     */
    onPageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    templates;
    dropdownIconTemplate;
    firstPageLinkIconTemplate;
    previousPageLinkIconTemplate;
    lastPageLinkIconTemplate;
    nextPageLinkIconTemplate;
    pageLinks;
    pageItems;
    rowsPerPageItems;
    paginatorState;
    _first = 0;
    _page = 0;
    constructor(cd, config) {
      this.cd = cd;
      this.config = config;
    }
    ngOnInit() {
      this.updatePaginatorState();
    }
    getAriaLabel(labelType) {
      return this.config.translation.aria ? this.config.translation.aria[labelType] : undefined;
    }
    getPageAriaLabel(value) {
      return this.config.translation.aria ? this.config.translation.aria.pageLabel.replace(/{page}/g, `${value}`) : undefined;
    }
    getLocalization(digit) {
      const numerals = [...new Intl.NumberFormat(this.locale, {
        useGrouping: false
      }).format(9876543210)].reverse();
      const index = new Map(numerals.map((d, i) => [i, d]));
      if (digit > 9) {
        const numbers = String(digit).split('');
        return numbers.map(number => index.get(Number(number))).join('');
      } else {
        return index.get(digit);
      }
    }
    ngAfterContentInit() {
      this.templates.forEach(item => {
        switch (item.getType()) {
          case 'dropdownicon':
            this.dropdownIconTemplate = item.template;
            break;
          case 'firstpagelinkicon':
            this.firstPageLinkIconTemplate = item.template;
            break;
          case 'previouspagelinkicon':
            this.previousPageLinkIconTemplate = item.template;
            break;
          case 'lastpagelinkicon':
            this.lastPageLinkIconTemplate = item.template;
            break;
          case 'nextpagelinkicon':
            this.nextPageLinkIconTemplate = item.template;
            break;
        }
      });
    }
    ngOnChanges(simpleChange) {
      if (simpleChange.totalRecords) {
        this.updatePageLinks();
        this.updatePaginatorState();
        this.updateFirst();
        this.updateRowsPerPageOptions();
      }
      if (simpleChange.first) {
        this._first = simpleChange.first.currentValue;
        this.updatePageLinks();
        this.updatePaginatorState();
      }
      if (simpleChange.rows) {
        this.updatePageLinks();
        this.updatePaginatorState();
      }
      if (simpleChange.rowsPerPageOptions) {
        this.updateRowsPerPageOptions();
      }
      if (simpleChange.pageLinkSize) {
        this.updatePageLinks();
      }
    }
    updateRowsPerPageOptions() {
      if (this.rowsPerPageOptions) {
        this.rowsPerPageItems = [];
        for (let opt of this.rowsPerPageOptions) {
          if (typeof opt == 'object' && opt['showAll']) {
            this.rowsPerPageItems.unshift({
              label: opt['showAll'],
              value: this.totalRecords
            });
          } else {
            this.rowsPerPageItems.push({
              label: String(this.getLocalization(opt)),
              value: opt
            });
          }
        }
      }
    }
    isFirstPage() {
      return this.getPage() === 0;
    }
    isLastPage() {
      return this.getPage() === this.getPageCount() - 1;
    }
    getPageCount() {
      return Math.ceil(this.totalRecords / this.rows);
    }
    calculatePageLinkBoundaries() {
      let numberOfPages = this.getPageCount(),
        visiblePages = Math.min(this.pageLinkSize, numberOfPages);
      //calculate range, keep current in middle if necessary
      let start = Math.max(0, Math.ceil(this.getPage() - visiblePages / 2)),
        end = Math.min(numberOfPages - 1, start + visiblePages - 1);
      //check when approaching to last page
      var delta = this.pageLinkSize - (end - start + 1);
      start = Math.max(0, start - delta);
      return [start, end];
    }
    updatePageLinks() {
      this.pageLinks = [];
      let boundaries = this.calculatePageLinkBoundaries(),
        start = boundaries[0],
        end = boundaries[1];
      for (let i = start; i <= end; i++) {
        this.pageLinks.push(i + 1);
      }
      if (this.showJumpToPageDropdown) {
        this.pageItems = [];
        for (let i = 0; i < this.getPageCount(); i++) {
          this.pageItems.push({
            label: String(i + 1),
            value: i
          });
        }
      }
    }
    changePage(p) {
      var pc = this.getPageCount();
      if (p >= 0 && p < pc) {
        this._first = this.rows * p;
        var state = {
          page: p,
          first: this.first,
          rows: this.rows,
          pageCount: pc
        };
        this.updatePageLinks();
        this.onPageChange.emit(state);
        this.updatePaginatorState();
      }
    }
    updateFirst() {
      const page = this.getPage();
      if (page > 0 && this.totalRecords && this.first >= this.totalRecords) {
        Promise.resolve(null).then(() => this.changePage(page - 1));
      }
    }
    getPage() {
      return Math.floor(this.first / this.rows);
    }
    changePageToFirst(event) {
      if (!this.isFirstPage()) {
        this.changePage(0);
      }
      event.preventDefault();
    }
    changePageToPrev(event) {
      this.changePage(this.getPage() - 1);
      event.preventDefault();
    }
    changePageToNext(event) {
      this.changePage(this.getPage() + 1);
      event.preventDefault();
    }
    changePageToLast(event) {
      if (!this.isLastPage()) {
        this.changePage(this.getPageCount() - 1);
      }
      event.preventDefault();
    }
    onPageLinkClick(event, page) {
      this.changePage(page);
      event.preventDefault();
    }
    onRppChange(event) {
      this.changePage(this.getPage());
    }
    onPageDropdownChange(event) {
      this.changePage(event.value);
    }
    updatePaginatorState() {
      this.paginatorState = {
        page: this.getPage(),
        pageCount: this.getPageCount(),
        rows: this.rows,
        first: this.first,
        totalRecords: this.totalRecords
      };
    }
    empty() {
      return this.getPageCount() === 0;
    }
    currentPage() {
      return this.getPageCount() > 0 ? this.getPage() + 1 : 0;
    }
    get currentPageReport() {
      return this.currentPageReportTemplate.replace('{currentPage}', String(this.currentPage())).replace('{totalPages}', String(this.getPageCount())).replace('{first}', String(this.totalRecords > 0 ? this._first + 1 : 0)).replace('{last}', String(Math.min(this._first + this.rows, this.totalRecords))).replace('{rows}', String(this.rows)).replace('{totalRecords}', String(this.totalRecords));
    }
    static ɵfac = function Paginator_Factory(t) {
      return new (t || Paginator)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_1__.PrimeNGConfig));
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Paginator,
      selectors: [["p-paginator"]],
      contentQueries: function Paginator_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_1__.PrimeTemplate, 4);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
        }
      },
      hostAttrs: [1, "p-element"],
      inputs: {
        pageLinkSize: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "pageLinkSize", "pageLinkSize", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute],
        style: "style",
        styleClass: "styleClass",
        alwaysShow: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "alwaysShow", "alwaysShow", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        dropdownAppendTo: "dropdownAppendTo",
        templateLeft: "templateLeft",
        templateRight: "templateRight",
        appendTo: "appendTo",
        dropdownScrollHeight: "dropdownScrollHeight",
        currentPageReportTemplate: "currentPageReportTemplate",
        showCurrentPageReport: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "showCurrentPageReport", "showCurrentPageReport", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        showFirstLastIcon: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "showFirstLastIcon", "showFirstLastIcon", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        totalRecords: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "totalRecords", "totalRecords", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute],
        rows: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "rows", "rows", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute],
        rowsPerPageOptions: "rowsPerPageOptions",
        showJumpToPageDropdown: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "showJumpToPageDropdown", "showJumpToPageDropdown", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        showJumpToPageInput: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "showJumpToPageInput", "showJumpToPageInput", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        jumpToPageItemTemplate: "jumpToPageItemTemplate",
        showPageLinks: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "showPageLinks", "showPageLinks", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        locale: "locale",
        dropdownItemTemplate: "dropdownItemTemplate",
        first: "first"
      },
      outputs: {
        onPageChange: "onPageChange"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 1,
      vars: 1,
      consts: [[3, "class", "ngStyle", "ngClass", 4, "ngIf"], [3, "ngStyle", "ngClass"], ["class", "p-paginator-left-content", 4, "ngIf"], ["class", "p-paginator-current", 4, "ngIf"], ["type", "button", "pRipple", "", "class", "p-paginator-first p-paginator-element p-link", 3, "disabled", "ngClass", "click", 4, "ngIf"], ["type", "button", "pRipple", "", 1, "p-paginator-prev", "p-paginator-element", "p-link", 3, "click", "disabled", "ngClass"], [3, "styleClass", 4, "ngIf"], ["class", "p-paginator-icon", 4, "ngIf"], ["class", "p-paginator-pages", 4, "ngIf"], ["styleClass", "p-paginator-page-options", 3, "options", "ngModel", "disabled", "appendTo", "scrollHeight", "onChange", 4, "ngIf"], ["type", "button", "pRipple", "", 1, "p-paginator-next", "p-paginator-element", "p-link", 3, "click", "disabled", "ngClass"], ["type", "button", "pRipple", "", "class", "p-paginator-last p-paginator-element p-link", 3, "disabled", "ngClass", "click", 4, "ngIf"], ["class", "p-paginator-page-input", 3, "ngModel", "disabled", "ngModelChange", 4, "ngIf"], ["styleClass", "p-paginator-rpp-options", 3, "options", "ngModel", "disabled", "appendTo", "scrollHeight", "ariaLabel", "ngModelChange", "onChange", 4, "ngIf"], ["class", "p-paginator-right-content", 4, "ngIf"], [1, "p-paginator-left-content"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "p-paginator-current"], ["type", "button", "pRipple", "", 1, "p-paginator-first", "p-paginator-element", "p-link", 3, "click", "disabled", "ngClass"], [3, "styleClass"], [1, "p-paginator-icon"], [4, "ngTemplateOutlet"], [1, "p-paginator-pages"], ["type", "button", "class", "p-paginator-page p-paginator-element p-link", "pRipple", "", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["type", "button", "pRipple", "", 1, "p-paginator-page", "p-paginator-element", "p-link", 3, "click", "ngClass"], ["styleClass", "p-paginator-page-options", 3, "onChange", "options", "ngModel", "disabled", "appendTo", "scrollHeight"], ["pTemplate", "selectedItem"], [4, "ngIf"], ["pTemplate", "item"], ["pTemplate", "dropdownicon"], ["type", "button", "pRipple", "", 1, "p-paginator-last", "p-paginator-element", "p-link", 3, "click", "disabled", "ngClass"], [1, "p-paginator-page-input", 3, "ngModelChange", "ngModel", "disabled"], ["styleClass", "p-paginator-rpp-options", 3, "ngModelChange", "onChange", "options", "ngModel", "disabled", "appendTo", "scrollHeight", "ariaLabel"], [1, "p-paginator-right-content"]],
      template: function Paginator_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Paginator_div_0_Template, 16, 29, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.alwaysShow ? true : ctx.pageLinks && ctx.pageLinks.length > 1);
        }
      },
      dependencies: () => [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__.Dropdown, primeng_api__WEBPACK_IMPORTED_MODULE_1__.PrimeTemplate, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_4__.InputNumber, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, primeng_ripple__WEBPACK_IMPORTED_MODULE_6__.Ripple, primeng_icons_angledoubleleft__WEBPACK_IMPORTED_MODULE_7__.AngleDoubleLeftIcon, primeng_icons_angledoubleright__WEBPACK_IMPORTED_MODULE_8__.AngleDoubleRightIcon, primeng_icons_angleleft__WEBPACK_IMPORTED_MODULE_9__.AngleLeftIcon, primeng_icons_angleright__WEBPACK_IMPORTED_MODULE_10__.AngleRightIcon],
      styles: ["@layer primeng{.p-paginator{display:flex;align-items:center;justify-content:center;flex-wrap:wrap}.p-paginator-left-content{margin-right:auto}.p-paginator-right-content{margin-left:auto}.p-paginator-page,.p-paginator-next,.p-paginator-last,.p-paginator-first,.p-paginator-prev,.p-paginator-current{cursor:pointer;display:inline-flex;align-items:center;justify-content:center;line-height:1;-webkit-user-select:none;user-select:none;overflow:hidden;position:relative}.p-paginator-element:focus{z-index:1;position:relative}}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return Paginator;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let PaginatorModule = /*#__PURE__*/(() => {
  class PaginatorModule {
    static ɵfac = function PaginatorModule_Factory(t) {
      return new (t || PaginatorModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: PaginatorModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__.DropdownModule, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_4__.InputNumberModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, primeng_api__WEBPACK_IMPORTED_MODULE_1__.SharedModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_6__.RippleModule, primeng_icons_angledoubleleft__WEBPACK_IMPORTED_MODULE_7__.AngleDoubleLeftIcon, primeng_icons_angledoubleright__WEBPACK_IMPORTED_MODULE_8__.AngleDoubleRightIcon, primeng_icons_angleleft__WEBPACK_IMPORTED_MODULE_9__.AngleLeftIcon, primeng_icons_angleright__WEBPACK_IMPORTED_MODULE_10__.AngleRightIcon, primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__.DropdownModule, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_4__.InputNumberModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, primeng_api__WEBPACK_IMPORTED_MODULE_1__.SharedModule]
    });
  }
  return PaginatorModule;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 9656:
/*!****************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-selectbutton.mjs ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SELECTBUTTON_VALUE_ACCESSOR: () => (/* binding */ SELECTBUTTON_VALUE_ACCESSOR),
/* harmony export */   SelectButton: () => (/* binding */ SelectButton),
/* harmony export */   SelectButtonModule: () => (/* binding */ SelectButtonModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ 7780);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/ripple */ 78);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/utils */ 7251);
/* harmony import */ var primeng_autofocus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/autofocus */ 7159);











const _c0 = ["container"];
const _c1 = (a0, a1, a2) => ({
  "p-highlight": a0,
  "p-disabled": a1,
  "p-button-icon-only": a2
});
const _c2 = (a0, a1) => ({
  $implicit: a0,
  index: a1
});
function SelectButton_div_2_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 8);
  }
  if (rf & 2) {
    const option_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](option_r3.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "p-button-icon p-button-icon-left");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "icon");
  }
}
function SelectButton_div_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SelectButton_div_2_ng_container_1_span_1_Template, 1, 4, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const option_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", option_r3.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.getOptionLabel(option_r3));
  }
}
function SelectButton_div_2_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function SelectButton_div_2_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SelectButton_div_2_ng_template_2_ng_container_0_Template, 1, 0, "ng-container", 9);
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const option_r3 = ctx_r6.$implicit;
    const i_r4 = ctx_r6.index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r4.selectButtonTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c2, option_r3, i_r4));
  }
}
function SelectButton_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelectButton_div_2_Template_div_click_0_listener($event) {
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const option_r3 = ctx_r1.$implicit;
      const i_r4 = ctx_r1.index;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r4.onOptionSelect($event, option_r3, i_r4));
    })("keydown", function SelectButton_div_2_Template_div_keydown_0_listener($event) {
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const option_r3 = ctx_r5.$implicit;
      const i_r4 = ctx_r5.index;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r4.onKeyDown($event, option_r3, i_r4));
    })("focus", function SelectButton_div_2_Template_div_focus_0_listener($event) {
      const i_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1).index;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r4.onFocus($event, i_r4));
    })("blur", function SelectButton_div_2_Template_div_blur_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r4.onBlur());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SelectButton_div_2_ng_container_1_Template, 4, 3, "ng-container", 5)(2, SelectButton_div_2_ng_template_2_Template, 1, 5, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const customcontent_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](option_r3.styleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("role", ctx_r4.multiple ? "checkbox" : "radio")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](14, _c1, ctx_r4.isSelected(option_r3), ctx_r4.disabled || ctx_r4.isOptionDisabled(option_r3), option_r3.icon && !ctx_r4.getOptionLabel(option_r3)))("autofocus", ctx_r4.autofocus);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", i_r4 === ctx_r4.focusedIndex ? "0" : "-1")("aria-label", option_r3.label)("aria-checked", ctx_r4.isSelected(option_r3))("aria-disabled", ctx_r4.optionDisabled)("title", option_r3.title)("aria-labelledby", ctx_r4.getOptionLabel(option_r3))("data-pc-section", "button");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.itemTemplate)("ngIfElse", customcontent_r8);
  }
}
const SELECTBUTTON_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
  useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => SelectButton),
  multi: true
};
/**
 * SelectButton is used to choose single or multiple items from a list using buttons.
 * @group Components
 */
let SelectButton = /*#__PURE__*/(() => {
  class SelectButton {
    cd;
    /**
     * An array of selectitems to display as the available options.
     * @group Props
     */
    options;
    /**
     * Name of the label field of an option.
     * @group Props
     */
    optionLabel;
    /**
     * Name of the value field of an option.
     * @group Props
     */
    optionValue;
    /**
     * Name of the disabled field of an option.
     * @group Props
     */
    optionDisabled;
    /**
     * Whether selection can be cleared.
     * @group Props
     */
    unselectable = false;
    /**
     * Index of the element in tabbing order.
     * @group Props
     */
    tabindex = 0;
    /**
     * When specified, allows selecting multiple values.
     * @group Props
     */
    multiple;
    /**
     * Whether selection can not be cleared.
     * @group Props
     */
    allowEmpty = true;
    /**
     * Inline style of the component.
     * @group Props
     */
    style;
    /**
     * Style class of the component.
     * @group Props
     */
    styleClass;
    /**
     * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
     * @group Props
     */
    ariaLabelledBy;
    /**
     * When present, it specifies that the element should be disabled.
     * @group Props
     */
    disabled;
    /**
     * A property to uniquely identify a value in options.
     * @group Props
     */
    dataKey;
    /**
     * When present, it specifies that the component should automatically get focus on load.
     * @group Props
     */
    autofocus;
    /**
     * Callback to invoke on input click.
     * @param {SelectButtonOptionClickEvent} event - Custom click event.
     * @group Emits
     */
    onOptionClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke on selection change.
     * @param {SelectButtonChangeEvent} event - Custom change event.
     * @group Emits
     */
    onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    container;
    itemTemplate;
    get selectButtonTemplate() {
      return this.itemTemplate?.template;
    }
    get equalityKey() {
      return this.optionValue ? null : this.dataKey;
    }
    value;
    onModelChange = () => {};
    onModelTouched = () => {};
    focusedIndex = 0;
    constructor(cd) {
      this.cd = cd;
    }
    getOptionLabel(option) {
      return this.optionLabel ? primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(option, this.optionLabel) : option.label != undefined ? option.label : option;
    }
    getOptionValue(option) {
      return this.optionValue ? primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(option, this.optionValue) : this.optionLabel || option.value === undefined ? option : option.value;
    }
    isOptionDisabled(option) {
      return this.optionDisabled ? primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(option, this.optionDisabled) : option.disabled !== undefined ? option.disabled : false;
    }
    writeValue(value) {
      this.value = value;
      this.cd.markForCheck();
    }
    registerOnChange(fn) {
      this.onModelChange = fn;
    }
    registerOnTouched(fn) {
      this.onModelTouched = fn;
    }
    setDisabledState(val) {
      this.disabled = val;
      this.cd.markForCheck();
    }
    onOptionSelect(event, option, index) {
      if (this.disabled || this.isOptionDisabled(option)) {
        return;
      }
      let selected = this.isSelected(option);
      if (selected && this.unselectable) {
        return;
      }
      let optionValue = this.getOptionValue(option);
      let newValue;
      if (this.multiple) {
        if (selected) newValue = this.value.filter(val => !primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.equals(val, optionValue, this.equalityKey));else newValue = this.value ? [...this.value, optionValue] : [optionValue];
      } else {
        if (selected && !this.allowEmpty) {
          return;
        }
        newValue = selected ? null : optionValue;
      }
      this.focusedIndex = index;
      this.value = newValue;
      this.onModelChange(this.value);
      this.onChange.emit({
        originalEvent: event,
        value: this.value
      });
      this.onOptionClick.emit({
        originalEvent: event,
        option: option,
        index: index
      });
    }
    onKeyDown(event, option, index) {
      switch (event.code) {
        case 'Space':
          {
            this.onOptionSelect(event, option, index);
            event.preventDefault();
            break;
          }
        case 'ArrowDown':
        case 'ArrowRight':
          {
            this.changeTabIndexes(event, 'next');
            event.preventDefault();
            break;
          }
        case 'ArrowUp':
        case 'ArrowLeft':
          {
            this.changeTabIndexes(event, 'prev');
            event.preventDefault();
            break;
          }
        default:
          //no op
          break;
      }
    }
    changeTabIndexes(event, direction) {
      let firstTabableChild, index;
      for (let i = 0; i <= this.container.nativeElement.children.length - 1; i++) {
        if (this.container.nativeElement.children[i].getAttribute('tabindex') === '0') firstTabableChild = {
          elem: this.container.nativeElement.children[i],
          index: i
        };
      }
      if (direction === 'prev') {
        if (firstTabableChild.index === 0) index = this.container.nativeElement.children.length - 1;else index = firstTabableChild.index - 1;
      } else {
        if (firstTabableChild.index === this.container.nativeElement.children.length - 1) index = 0;else index = firstTabableChild.index + 1;
      }
      this.focusedIndex = index;
      this.container.nativeElement.children[index].focus();
    }
    onFocus(event, index) {
      this.focusedIndex = index;
    }
    onBlur() {
      this.onModelTouched();
    }
    removeOption(option) {
      this.value = this.value.filter(val => !primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.equals(val, this.getOptionValue(option), this.dataKey));
    }
    isSelected(option) {
      let selected = false;
      const optionValue = this.getOptionValue(option);
      if (this.multiple) {
        if (this.value && Array.isArray(this.value)) {
          for (let val of this.value) {
            if (primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.equals(val, optionValue, this.dataKey)) {
              selected = true;
              break;
            }
          }
        }
      } else {
        selected = primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.equals(this.getOptionValue(option), this.value, this.equalityKey);
      }
      return selected;
    }
    static ɵfac = function SelectButton_Factory(t) {
      return new (t || SelectButton)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SelectButton,
      selectors: [["p-selectButton"]],
      contentQueries: function SelectButton_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_3__.PrimeTemplate, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.itemTemplate = _t.first);
        }
      },
      viewQuery: function SelectButton_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.container = _t.first);
        }
      },
      hostAttrs: [1, "p-element"],
      inputs: {
        options: "options",
        optionLabel: "optionLabel",
        optionValue: "optionValue",
        optionDisabled: "optionDisabled",
        unselectable: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "unselectable", "unselectable", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        tabindex: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "tabindex", "tabindex", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute],
        multiple: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "multiple", "multiple", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        allowEmpty: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "allowEmpty", "allowEmpty", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        style: "style",
        styleClass: "styleClass",
        ariaLabelledBy: "ariaLabelledBy",
        disabled: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "disabled", "disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        dataKey: "dataKey",
        autofocus: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "autofocus", "autofocus", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute]
      },
      outputs: {
        onOptionClick: "onOptionClick",
        onChange: "onChange"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([SELECTBUTTON_VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"]],
      decls: 3,
      vars: 8,
      consts: [["container", ""], ["customcontent", ""], ["role", "group", 3, "ngClass", "ngStyle"], ["pRipple", "", "class", "p-button p-component", "pAutoFocus", "", 3, "role", "class", "ngClass", "autofocus", "click", "keydown", "focus", "blur", 4, "ngFor", "ngForOf"], ["pRipple", "", "pAutoFocus", "", 1, "p-button", "p-component", 3, "click", "keydown", "focus", "blur", "role", "ngClass", "autofocus"], [4, "ngIf", "ngIfElse"], [3, "ngClass", "class", 4, "ngIf"], [1, "p-button-label"], [3, "ngClass"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
      template: function SelectButton_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SelectButton_div_2_Template, 4, 18, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.styleClass);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "p-selectbutton p-buttonset p-component")("ngStyle", ctx.style);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-labelledby", ctx.ariaLabelledBy)("data-pc-name", "selectbutton")("data-pc-section", "root");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.options);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle, primeng_ripple__WEBPACK_IMPORTED_MODULE_5__.Ripple, primeng_autofocus__WEBPACK_IMPORTED_MODULE_6__.AutoFocus],
      styles: ["@layer primeng{.p-button{margin:0;display:inline-flex;cursor:pointer;-webkit-user-select:none;user-select:none;align-items:center;vertical-align:bottom;text-align:center;overflow:hidden;position:relative}.p-button-label{flex:1 1 auto}.p-button-icon-right{order:1}.p-button:disabled{cursor:default;pointer-events:none}.p-button-icon-only{justify-content:center}.p-button-icon-only:after{content:\"p\";visibility:hidden;clip:rect(0 0 0 0);width:0}.p-button-vertical{flex-direction:column}.p-button-icon-bottom{order:2}.p-button-group .p-button{margin:0}.p-button-group .p-button:focus,.p-button-group p-button:focus .p-button,.p-buttonset .p-button:focus,.p-buttonset p-button:focus .p-button{position:relative;z-index:1}.p-button-group .p-button:not(:last-child),.p-button-group .p-button:not(:last-child):hover,.p-button-group p-button:not(:last-child) .p-button,.p-button-group p-button:not(:last-child) .p-button:hover,.p-buttonset .p-button:not(:last-child),.p-buttonset .p-button:not(:last-child):hover,.p-buttonset p-button:not(:last-child) .p-button,.p-buttonset p-button:not(:last-child) .p-button:hover{border-right:0 none}.p-button-group .p-button:not(:first-of-type):not(:last-of-type),.p-button-group p-button:not(:first-of-type):not(:last-of-type) .p-button,.p-buttonset .p-button:not(:first-of-type):not(:last-of-type),.p-buttonset p-button:not(:first-of-type):not(:last-of-type) .p-button{border-radius:0}.p-button-group .p-button:first-of-type:not(:only-of-type),.p-button-group p-button:first-of-type:not(:only-of-type) .p-button,.p-buttonset .p-button:first-of-type:not(:only-of-type),.p-buttonset p-button:first-of-type:not(:only-of-type) .p-button{border-top-right-radius:0;border-bottom-right-radius:0}.p-button-group .p-button:last-of-type:not(:only-of-type),.p-button-group p-button:last-of-type:not(:only-of-type) .p-button,.p-buttonset .p-button:last-of-type:not(:only-of-type),.p-buttonset p-button:last-of-type:not(:only-of-type) .p-button{border-top-left-radius:0;border-bottom-left-radius:0}p-button[iconpos=right] spinnericon{order:1}}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return SelectButton;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let SelectButtonModule = /*#__PURE__*/(() => {
  class SelectButtonModule {
    static ɵfac = function SelectButtonModule_Factory(t) {
      return new (t || SelectButtonModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SelectButtonModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_5__.RippleModule, primeng_api__WEBPACK_IMPORTED_MODULE_3__.SharedModule, primeng_autofocus__WEBPACK_IMPORTED_MODULE_6__.AutoFocusModule, primeng_api__WEBPACK_IMPORTED_MODULE_3__.SharedModule]
    });
  }
  return SelectButtonModule;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 6676:
/*!*********************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-table.mjs ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CancelEditableRow: () => (/* binding */ CancelEditableRow),
/* harmony export */   CellEditor: () => (/* binding */ CellEditor),
/* harmony export */   ColumnFilter: () => (/* binding */ ColumnFilter),
/* harmony export */   ColumnFilterFormElement: () => (/* binding */ ColumnFilterFormElement),
/* harmony export */   ContextMenuRow: () => (/* binding */ ContextMenuRow),
/* harmony export */   EditableColumn: () => (/* binding */ EditableColumn),
/* harmony export */   EditableRow: () => (/* binding */ EditableRow),
/* harmony export */   FrozenColumn: () => (/* binding */ FrozenColumn),
/* harmony export */   InitEditableRow: () => (/* binding */ InitEditableRow),
/* harmony export */   ReorderableColumn: () => (/* binding */ ReorderableColumn),
/* harmony export */   ReorderableRow: () => (/* binding */ ReorderableRow),
/* harmony export */   ReorderableRowHandle: () => (/* binding */ ReorderableRowHandle),
/* harmony export */   ResizableColumn: () => (/* binding */ ResizableColumn),
/* harmony export */   RowGroupHeader: () => (/* binding */ RowGroupHeader),
/* harmony export */   RowToggler: () => (/* binding */ RowToggler),
/* harmony export */   SaveEditableRow: () => (/* binding */ SaveEditableRow),
/* harmony export */   SelectableRow: () => (/* binding */ SelectableRow),
/* harmony export */   SelectableRowDblClick: () => (/* binding */ SelectableRowDblClick),
/* harmony export */   SortIcon: () => (/* binding */ SortIcon),
/* harmony export */   SortableColumn: () => (/* binding */ SortableColumn),
/* harmony export */   Table: () => (/* binding */ Table),
/* harmony export */   TableBody: () => (/* binding */ TableBody),
/* harmony export */   TableCheckbox: () => (/* binding */ TableCheckbox),
/* harmony export */   TableHeaderCheckbox: () => (/* binding */ TableHeaderCheckbox),
/* harmony export */   TableModule: () => (/* binding */ TableModule),
/* harmony export */   TableRadioButton: () => (/* binding */ TableRadioButton),
/* harmony export */   TableService: () => (/* binding */ TableService)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/animations */ 7172);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ 7780);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/button */ 9136);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/calendar */ 1314);
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/dom */ 5228);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/dropdown */ 6895);
/* harmony import */ var primeng_icons_arrowdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/icons/arrowdown */ 5306);
/* harmony import */ var primeng_icons_arrowup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/icons/arrowup */ 5809);
/* harmony import */ var primeng_icons_check__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/icons/check */ 2289);
/* harmony import */ var primeng_icons_filter__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/icons/filter */ 3529);
/* harmony import */ var primeng_icons_filterslash__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/icons/filterslash */ 2032);
/* harmony import */ var primeng_icons_plus__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/icons/plus */ 1155);
/* harmony import */ var primeng_icons_sortalt__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/icons/sortalt */ 3868);
/* harmony import */ var primeng_icons_sortamountdown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/icons/sortamountdown */ 9407);
/* harmony import */ var primeng_icons_sortamountupalt__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/icons/sortamountupalt */ 1293);
/* harmony import */ var primeng_icons_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/icons/spinner */ 4766);
/* harmony import */ var primeng_icons_trash__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/icons/trash */ 4299);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/inputnumber */ 1759);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/inputtext */ 8361);
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/paginator */ 3157);
/* harmony import */ var primeng_scroller__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/scroller */ 2222);
/* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! primeng/selectbutton */ 9656);
/* harmony import */ var primeng_tristatecheckbox__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! primeng/tristatecheckbox */ 8833);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/utils */ 7251);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 819);








































const _c0 = ["container"];
const _c1 = ["resizeHelper"];
const _c2 = ["reorderIndicatorUp"];
const _c3 = ["reorderIndicatorDown"];
const _c4 = ["wrapper"];
const _c5 = ["table"];
const _c6 = ["thead"];
const _c7 = ["tfoot"];
const _c8 = ["scroller"];
const _c9 = (a0, a1, a2) => ({
  "p-datatable p-component": true,
  "p-datatable-hoverable-rows": a0,
  "p-datatable-scrollable": a1,
  "p-datatable-flex-scrollable": a2
});
const _c10 = a0 => ({
  maxHeight: a0
});
const _c11 = a0 => ({
  height: a0
});
const _c12 = (a0, a1) => ({
  $implicit: a0,
  options: a1
});
const _c13 = a0 => ({
  columns: a0
});
const _c14 = (a0, a1, a2) => ({
  "p-datatable-table": true,
  "p-datatable-scrollable-table": a0,
  "p-datatable-resizable-table": a1,
  "p-datatable-resizable-table-fit": a2
});
const _c15 = a0 => ({
  $implicit: a0
});
function Table_div_2_i_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i");
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("p-datatable-loading-icon " + ctx_r0.loadingIcon);
  }
}
function Table_div_2_ng_container_2_SpinnerIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "SpinnerIcon", 25);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("spin", true)("styleClass", "p-datatable-loading-icon");
  }
}
function Table_div_2_ng_container_2_span_2_1_ng_template_0_Template(rf, ctx) {}
function Table_div_2_ng_container_2_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Table_div_2_ng_container_2_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Table_div_2_ng_container_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Table_div_2_ng_container_2_span_2_1_Template, 1, 0, null, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.loadingIconTemplate);
  }
}
function Table_div_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Table_div_2_ng_container_2_SpinnerIcon_1_Template, 1, 2, "SpinnerIcon", 23)(2, Table_div_2_ng_container_2_span_2_Template, 2, 1, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.loadingIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.loadingIconTemplate);
  }
}
function Table_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Table_div_2_i_1_Template, 1, 2, "i", 22)(2, Table_div_2_ng_container_2_Template, 3, 2, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.loadingIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.loadingIcon);
  }
}
function Table_div_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Table_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Table_div_3_ng_container_1_Template, 1, 0, "ng-container", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.captionTemplate);
  }
}
function Table_p_paginator_4_1_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Table_p_paginator_4_1_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Table_p_paginator_4_1_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 27);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.paginatorDropdownIconTemplate);
  }
}
function Table_p_paginator_4_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Table_p_paginator_4_1_ng_template_0_Template, 1, 1, "ng-template", 30);
  }
}
function Table_p_paginator_4_2_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Table_p_paginator_4_2_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Table_p_paginator_4_2_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 27);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.paginatorFirstPageLinkIconTemplate);
  }
}
function Table_p_paginator_4_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Table_p_paginator_4_2_ng_template_0_Template, 1, 1, "ng-template", 31);
  }
}
function Table_p_paginator_4_3_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Table_p_paginator_4_3_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Table_p_paginator_4_3_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 27);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.paginatorPreviousPageLinkIconTemplate);
  }
}
function Table_p_paginator_4_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Table_p_paginator_4_3_ng_template_0_Template, 1, 1, "ng-template", 32);
  }
}
function Table_p_paginator_4_4_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Table_p_paginator_4_4_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Table_p_paginator_4_4_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 27);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.paginatorLastPageLinkIconTemplate);
  }
}
function Table_p_paginator_4_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Table_p_paginator_4_4_ng_template_0_Template, 1, 1, "ng-template", 33);
  }
}
function Table_p_paginator_4_5_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Table_p_paginator_4_5_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Table_p_paginator_4_5_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 27);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.paginatorNextPageLinkIconTemplate);
  }
}
function Table_p_paginator_4_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Table_p_paginator_4_5_ng_template_0_Template, 1, 1, "ng-template", 34);
  }
}
function Table_p_paginator_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-paginator", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onPageChange", function Table_p_paginator_4_Template_p_paginator_onPageChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.onPageChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Table_p_paginator_4_1_Template, 1, 0, null, 16)(2, Table_p_paginator_4_2_Template, 1, 0, null, 16)(3, Table_p_paginator_4_3_Template, 1, 0, null, 16)(4, Table_p_paginator_4_4_Template, 1, 0, null, 16)(5, Table_p_paginator_4_5_Template, 1, 0, null, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rows", ctx_r0.rows)("first", ctx_r0.first)("totalRecords", ctx_r0.totalRecords)("pageLinkSize", ctx_r0.pageLinks)("alwaysShow", ctx_r0.alwaysShowPaginator)("rowsPerPageOptions", ctx_r0.rowsPerPageOptions)("templateLeft", ctx_r0.paginatorLeftTemplate)("templateRight", ctx_r0.paginatorRightTemplate)("dropdownAppendTo", ctx_r0.paginatorDropdownAppendTo)("dropdownScrollHeight", ctx_r0.paginatorDropdownScrollHeight)("currentPageReportTemplate", ctx_r0.currentPageReportTemplate)("showFirstLastIcon", ctx_r0.showFirstLastIcon)("dropdownItemTemplate", ctx_r0.paginatorDropdownItemTemplate)("showCurrentPageReport", ctx_r0.showCurrentPageReport)("showJumpToPageDropdown", ctx_r0.showJumpToPageDropdown)("showJumpToPageInput", ctx_r0.showJumpToPageInput)("showPageLinks", ctx_r0.showPageLinks)("styleClass", ctx_r0.getPaginatorStyleClasses("p-paginator-top"))("locale", ctx_r0.paginatorLocale);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.paginatorDropdownIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.paginatorFirstPageLinkIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.paginatorPreviousPageLinkIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.paginatorLastPageLinkIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.paginatorNextPageLinkIconTemplate);
  }
}
function Table_p_scroller_7_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Table_p_scroller_7_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Table_p_scroller_7_ng_template_2_ng_container_0_Template, 1, 0, "ng-container", 37);
  }
  if (rf & 2) {
    const items_r4 = ctx.$implicit;
    const scrollerOptions_r5 = ctx.options;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const buildInTable_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", buildInTable_r6)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c12, items_r4, scrollerOptions_r5));
  }
}
function Table_p_scroller_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-scroller", 35, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onLazyLoad", function Table_p_scroller_7_Template_p_scroller_onLazyLoad_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.onLazyItemLoad($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Table_p_scroller_7_ng_template_2_Template, 1, 5, "ng-template", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c11, ctx_r0.scrollHeight !== "flex" ? ctx_r0.scrollHeight : undefined));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r0.processedData)("columns", ctx_r0.columns)("scrollHeight", ctx_r0.scrollHeight !== "flex" ? undefined : "100%")("itemSize", ctx_r0.virtualScrollItemSize || ctx_r0._virtualRowHeight)("step", ctx_r0.rows)("delay", ctx_r0.lazy ? ctx_r0.virtualScrollDelay : 0)("inline", true)("lazy", ctx_r0.lazy)("loaderDisabled", true)("showSpacer", false)("showLoader", ctx_r0.loadingBodyTemplate)("options", ctx_r0.virtualScrollOptions)("autoSize", true);
  }
}
function Table_ng_container_8_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Table_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Table_ng_container_8_ng_container_1_Template, 1, 0, "ng-container", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const buildInTable_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", buildInTable_r6)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c12, ctx_r0.processedData, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c13, ctx_r0.columns)));
  }
}
function Table_ng_template_9_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Table_ng_template_9_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Table_ng_template_9_tbody_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tbody", 44);
  }
  if (rf & 2) {
    const scrollerOptions_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().options;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r0.frozenValue)("frozenRows", true)("pTableBody", scrollerOptions_r7.columns)("pTableBodyTemplate", ctx_r0.frozenBodyTemplate)("frozen", true);
  }
}
function Table_ng_template_9_tbody_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tbody", 45);
  }
  if (rf & 2) {
    const scrollerOptions_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().options;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"]("height: calc(" + scrollerOptions_r7.spacerStyle.height + " - " + scrollerOptions_r7.rows.length * scrollerOptions_r7.itemSize + "px);");
  }
}
function Table_ng_template_9_tfoot_9_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Table_ng_template_9_tfoot_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tfoot", 46, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Table_ng_template_9_tfoot_9_ng_container_2_Template, 1, 0, "ng-container", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const scrollerOptions_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().options;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.footerGroupedTemplate || ctx_r0.footerTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c15, scrollerOptions_r7.columns));
  }
}
function Table_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 38, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Table_ng_template_9_ng_container_2_Template, 1, 0, "ng-container", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "thead", 39, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, Table_ng_template_9_ng_container_5_Template, 1, 0, "ng-container", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, Table_ng_template_9_tbody_6_Template, 1, 5, "tbody", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "tbody", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, Table_ng_template_9_tbody_8_Template, 1, 2, "tbody", 42)(9, Table_ng_template_9_tfoot_9_Template, 3, 4, "tfoot", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const scrollerOptions_r7 = ctx.options;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx_r0.tableStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r0.tableStyleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](20, _c14, ctx_r0.scrollable, ctx_r0.resizableColumns, ctx_r0.resizableColumns && ctx_r0.columnResizeMode === "fit"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx_r0.id + "-table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.colGroupTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](24, _c15, scrollerOptions_r7.columns));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.headerGroupedTemplate || ctx_r0.headerTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](26, _c15, scrollerOptions_r7.columns));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.frozenValue || ctx_r0.frozenBodyTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](scrollerOptions_r7.contentStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", scrollerOptions_r7.contentStyleClass)("value", ctx_r0.dataToRender(scrollerOptions_r7.rows))("pTableBody", scrollerOptions_r7.columns)("pTableBodyTemplate", ctx_r0.bodyTemplate)("scrollerOptions", scrollerOptions_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", scrollerOptions_r7.spacerStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.footerGroupedTemplate || ctx_r0.footerTemplate);
  }
}
function Table_p_paginator_11_1_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Table_p_paginator_11_1_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Table_p_paginator_11_1_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 27);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.paginatorDropdownIconTemplate);
  }
}
function Table_p_paginator_11_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Table_p_paginator_11_1_ng_template_0_Template, 1, 1, "ng-template", 30);
  }
}
function Table_p_paginator_11_2_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Table_p_paginator_11_2_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Table_p_paginator_11_2_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 27);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.paginatorFirstPageLinkIconTemplate);
  }
}
function Table_p_paginator_11_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Table_p_paginator_11_2_ng_template_0_Template, 1, 1, "ng-template", 31);
  }
}
function Table_p_paginator_11_3_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Table_p_paginator_11_3_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Table_p_paginator_11_3_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 27);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.paginatorPreviousPageLinkIconTemplate);
  }
}
function Table_p_paginator_11_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Table_p_paginator_11_3_ng_template_0_Template, 1, 1, "ng-template", 32);
  }
}
function Table_p_paginator_11_4_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Table_p_paginator_11_4_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Table_p_paginator_11_4_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 27);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.paginatorLastPageLinkIconTemplate);
  }
}
function Table_p_paginator_11_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Table_p_paginator_11_4_ng_template_0_Template, 1, 1, "ng-template", 33);
  }
}
function Table_p_paginator_11_5_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Table_p_paginator_11_5_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Table_p_paginator_11_5_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 27);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.paginatorNextPageLinkIconTemplate);
  }
}
function Table_p_paginator_11_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Table_p_paginator_11_5_ng_template_0_Template, 1, 1, "ng-template", 34);
  }
}
function Table_p_paginator_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-paginator", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onPageChange", function Table_p_paginator_11_Template_p_paginator_onPageChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.onPageChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Table_p_paginator_11_1_Template, 1, 0, null, 16)(2, Table_p_paginator_11_2_Template, 1, 0, null, 16)(3, Table_p_paginator_11_3_Template, 1, 0, null, 16)(4, Table_p_paginator_11_4_Template, 1, 0, null, 16)(5, Table_p_paginator_11_5_Template, 1, 0, null, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rows", ctx_r0.rows)("first", ctx_r0.first)("totalRecords", ctx_r0.totalRecords)("pageLinkSize", ctx_r0.pageLinks)("alwaysShow", ctx_r0.alwaysShowPaginator)("rowsPerPageOptions", ctx_r0.rowsPerPageOptions)("templateLeft", ctx_r0.paginatorLeftTemplate)("templateRight", ctx_r0.paginatorRightTemplate)("dropdownAppendTo", ctx_r0.paginatorDropdownAppendTo)("dropdownScrollHeight", ctx_r0.paginatorDropdownScrollHeight)("currentPageReportTemplate", ctx_r0.currentPageReportTemplate)("showFirstLastIcon", ctx_r0.showFirstLastIcon)("dropdownItemTemplate", ctx_r0.paginatorDropdownItemTemplate)("showCurrentPageReport", ctx_r0.showCurrentPageReport)("showJumpToPageDropdown", ctx_r0.showJumpToPageDropdown)("showJumpToPageInput", ctx_r0.showJumpToPageInput)("showPageLinks", ctx_r0.showPageLinks)("styleClass", ctx_r0.getPaginatorStyleClasses("p-paginator-bottom"))("locale", ctx_r0.paginatorLocale);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.paginatorDropdownIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.paginatorFirstPageLinkIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.paginatorPreviousPageLinkIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.paginatorLastPageLinkIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.paginatorNextPageLinkIconTemplate);
  }
}
function Table_div_12_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Table_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Table_div_12_ng_container_1_Template, 1, 0, "ng-container", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.summaryTemplate);
  }
}
function Table_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 48, 7);
  }
}
function Table_span_14_ArrowDownIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ArrowDownIcon");
  }
}
function Table_span_14_3_ng_template_0_Template(rf, ctx) {}
function Table_span_14_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Table_span_14_3_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Table_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 49, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Table_span_14_ArrowDownIcon_2_Template, 1, 0, "ArrowDownIcon", 16)(3, Table_span_14_3_Template, 1, 0, null, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.reorderIndicatorUpIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.reorderIndicatorUpIconTemplate);
  }
}
function Table_span_15_ArrowUpIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ArrowUpIcon");
  }
}
function Table_span_15_3_ng_template_0_Template(rf, ctx) {}
function Table_span_15_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Table_span_15_3_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Table_span_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 50, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Table_span_15_ArrowUpIcon_2_Template, 1, 0, "ArrowUpIcon", 16)(3, Table_span_15_3_Template, 1, 0, null, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.reorderIndicatorDownIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.reorderIndicatorDownIconTemplate);
  }
}
const _c16 = ["pTableBody", ""];
const _c17 = (a0, a1, a2, a3, a4) => ({
  $implicit: a0,
  rowIndex: a1,
  columns: a2,
  editing: a3,
  frozen: a4
});
const _c18 = (a0, a1, a2, a3, a4, a5, a6) => ({
  $implicit: a0,
  rowIndex: a1,
  columns: a2,
  editing: a3,
  frozen: a4,
  rowgroup: a5,
  rowspan: a6
});
const _c19 = (a0, a1, a2, a3, a4, a5) => ({
  $implicit: a0,
  rowIndex: a1,
  columns: a2,
  expanded: a3,
  editing: a4,
  frozen: a5
});
const _c20 = (a0, a1, a2, a3) => ({
  $implicit: a0,
  rowIndex: a1,
  columns: a2,
  frozen: a3
});
const _c21 = (a0, a1) => ({
  $implicit: a0,
  frozen: a1
});
function TableBody_ng_container_0_ng_template_1_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function TableBody_ng_container_0_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableBody_ng_container_0_ng_template_1_ng_container_0_ng_container_1_Template, 1, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const rowData_r2 = ctx_r0.$implicit;
    const rowIndex_r3 = ctx_r0.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.dt.groupHeaderTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction5"](2, _c17, rowData_r2, ctx_r3.getRowIndex(rowIndex_r3), ctx_r3.columns, ctx_r3.dt.editMode === "row" && ctx_r3.dt.isRowEditing(rowData_r2), ctx_r3.frozen));
  }
}
function TableBody_ng_container_0_ng_template_1_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function TableBody_ng_container_0_ng_template_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableBody_ng_container_0_ng_template_1_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const rowData_r2 = ctx_r0.$implicit;
    const rowIndex_r3 = ctx_r0.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", rowData_r2 ? ctx_r3.template : ctx_r3.dt.loadingBodyTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction5"](2, _c17, rowData_r2, ctx_r3.getRowIndex(rowIndex_r3), ctx_r3.columns, ctx_r3.dt.editMode === "row" && ctx_r3.dt.isRowEditing(rowData_r2), ctx_r3.frozen));
  }
}
function TableBody_ng_container_0_ng_template_1_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function TableBody_ng_container_0_ng_template_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableBody_ng_container_0_ng_template_1_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const rowData_r2 = ctx_r0.$implicit;
    const rowIndex_r3 = ctx_r0.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", rowData_r2 ? ctx_r3.template : ctx_r3.dt.loadingBodyTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction7"](2, _c18, rowData_r2, ctx_r3.getRowIndex(rowIndex_r3), ctx_r3.columns, ctx_r3.dt.editMode === "row" && ctx_r3.dt.isRowEditing(rowData_r2), ctx_r3.frozen, ctx_r3.shouldRenderRowspan(ctx_r3.value, rowData_r2, rowIndex_r3), ctx_r3.calculateRowGroupSize(ctx_r3.value, rowData_r2, rowIndex_r3)));
  }
}
function TableBody_ng_container_0_ng_template_1_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function TableBody_ng_container_0_ng_template_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableBody_ng_container_0_ng_template_1_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const rowData_r2 = ctx_r0.$implicit;
    const rowIndex_r3 = ctx_r0.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.dt.groupFooterTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction5"](2, _c17, rowData_r2, ctx_r3.getRowIndex(rowIndex_r3), ctx_r3.columns, ctx_r3.dt.editMode === "row" && ctx_r3.dt.isRowEditing(rowData_r2), ctx_r3.frozen));
  }
}
function TableBody_ng_container_0_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TableBody_ng_container_0_ng_template_1_ng_container_0_Template, 2, 8, "ng-container", 2)(1, TableBody_ng_container_0_ng_template_1_ng_container_1_Template, 2, 8, "ng-container", 0)(2, TableBody_ng_container_0_ng_template_1_ng_container_2_Template, 2, 10, "ng-container", 0)(3, TableBody_ng_container_0_ng_template_1_ng_container_3_Template, 2, 8, "ng-container", 2);
  }
  if (rf & 2) {
    const rowData_r2 = ctx.$implicit;
    const rowIndex_r3 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.dt.groupHeaderTemplate && !ctx_r3.dt.virtualScroll && ctx_r3.dt.rowGroupMode === "subheader" && ctx_r3.shouldRenderRowGroupHeader(ctx_r3.value, rowData_r2, rowIndex_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.dt.rowGroupMode !== "rowspan");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.dt.rowGroupMode === "rowspan");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.dt.groupFooterTemplate && !ctx_r3.dt.virtualScroll && ctx_r3.dt.rowGroupMode === "subheader" && ctx_r3.shouldRenderRowGroupFooter(ctx_r3.value, rowData_r2, rowIndex_r3));
  }
}
function TableBody_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableBody_ng_container_0_ng_template_1_Template, 4, 4, "ng-template", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.value)("ngForTrackBy", ctx_r3.dt.rowTrackBy);
  }
}
function TableBody_ng_container_1_ng_template_1_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function TableBody_ng_container_1_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableBody_ng_container_1_ng_template_1_ng_container_0_ng_container_1_Template, 1, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const rowData_r6 = ctx_r4.$implicit;
    const rowIndex_r7 = ctx_r4.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.template)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction6"](2, _c19, rowData_r6, ctx_r3.getRowIndex(rowIndex_r7), ctx_r3.columns, ctx_r3.dt.isRowExpanded(rowData_r6), ctx_r3.dt.editMode === "row" && ctx_r3.dt.isRowEditing(rowData_r6), ctx_r3.frozen));
  }
}
function TableBody_ng_container_1_ng_template_1_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function TableBody_ng_container_1_ng_template_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableBody_ng_container_1_ng_template_1_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const rowData_r6 = ctx_r4.$implicit;
    const rowIndex_r7 = ctx_r4.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.dt.groupHeaderTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction6"](2, _c19, rowData_r6, ctx_r3.getRowIndex(rowIndex_r7), ctx_r3.columns, ctx_r3.dt.isRowExpanded(rowData_r6), ctx_r3.dt.editMode === "row" && ctx_r3.dt.isRowEditing(rowData_r6), ctx_r3.frozen));
  }
}
function TableBody_ng_container_1_ng_template_1_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function TableBody_ng_container_1_ng_template_1_ng_container_2_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function TableBody_ng_container_1_ng_template_1_ng_container_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableBody_ng_container_1_ng_template_1_ng_container_2_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const rowData_r6 = ctx_r4.$implicit;
    const rowIndex_r7 = ctx_r4.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.dt.groupFooterTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction6"](2, _c19, rowData_r6, ctx_r3.getRowIndex(rowIndex_r7), ctx_r3.columns, ctx_r3.dt.isRowExpanded(rowData_r6), ctx_r3.dt.editMode === "row" && ctx_r3.dt.isRowEditing(rowData_r6), ctx_r3.frozen));
  }
}
function TableBody_ng_container_1_ng_template_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableBody_ng_container_1_ng_template_1_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 4)(2, TableBody_ng_container_1_ng_template_1_ng_container_2_ng_container_2_Template, 2, 9, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const rowData_r6 = ctx_r4.$implicit;
    const rowIndex_r7 = ctx_r4.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.dt.expandedRowTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](3, _c20, rowData_r6, ctx_r3.getRowIndex(rowIndex_r7), ctx_r3.columns, ctx_r3.frozen));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.dt.groupFooterTemplate && ctx_r3.dt.rowGroupMode === "subheader" && ctx_r3.shouldRenderRowGroupFooter(ctx_r3.value, rowData_r6, ctx_r3.getRowIndex(rowIndex_r7)));
  }
}
function TableBody_ng_container_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TableBody_ng_container_1_ng_template_1_ng_container_0_Template, 2, 9, "ng-container", 0)(1, TableBody_ng_container_1_ng_template_1_ng_container_1_Template, 2, 9, "ng-container", 2)(2, TableBody_ng_container_1_ng_template_1_ng_container_2_Template, 3, 8, "ng-container", 0);
  }
  if (rf & 2) {
    const rowData_r6 = ctx.$implicit;
    const rowIndex_r7 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.dt.groupHeaderTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.dt.groupHeaderTemplate && ctx_r3.dt.rowGroupMode === "subheader" && ctx_r3.shouldRenderRowGroupHeader(ctx_r3.value, rowData_r6, ctx_r3.getRowIndex(rowIndex_r7)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.dt.isRowExpanded(rowData_r6));
  }
}
function TableBody_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableBody_ng_container_1_ng_template_1_Template, 3, 3, "ng-template", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.value)("ngForTrackBy", ctx_r3.dt.rowTrackBy);
  }
}
function TableBody_ng_container_2_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function TableBody_ng_container_2_ng_template_1_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function TableBody_ng_container_2_ng_template_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableBody_ng_container_2_ng_template_1_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const rowData_r9 = ctx_r7.$implicit;
    const rowIndex_r10 = ctx_r7.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.dt.frozenExpandedRowTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](2, _c20, rowData_r9, ctx_r3.getRowIndex(rowIndex_r10), ctx_r3.columns, ctx_r3.frozen));
  }
}
function TableBody_ng_container_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TableBody_ng_container_2_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 4)(1, TableBody_ng_container_2_ng_template_1_ng_container_1_Template, 2, 7, "ng-container", 0);
  }
  if (rf & 2) {
    const rowData_r9 = ctx.$implicit;
    const rowIndex_r10 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.template)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction6"](3, _c19, rowData_r9, ctx_r3.getRowIndex(rowIndex_r10), ctx_r3.columns, ctx_r3.dt.isRowExpanded(rowData_r9), ctx_r3.dt.editMode === "row" && ctx_r3.dt.isRowEditing(rowData_r9), ctx_r3.frozen));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.dt.isRowExpanded(rowData_r9));
  }
}
function TableBody_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableBody_ng_container_2_ng_template_1_Template, 2, 10, "ng-template", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.value)("ngForTrackBy", ctx_r3.dt.rowTrackBy);
  }
}
function TableBody_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function TableBody_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableBody_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.dt.loadingBodyTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c21, ctx_r3.columns, ctx_r3.frozen));
  }
}
function TableBody_ng_container_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function TableBody_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableBody_ng_container_4_ng_container_1_Template, 1, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.dt.emptyMessageTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c21, ctx_r3.columns, ctx_r3.frozen));
  }
}
function SortIcon_ng_container_0_SortAltIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "SortAltIcon", 4);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-sortable-column-icon");
  }
}
function SortIcon_ng_container_0_SortAmountUpAltIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "SortAmountUpAltIcon", 4);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-sortable-column-icon");
  }
}
function SortIcon_ng_container_0_SortAmountDownIcon_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "SortAmountDownIcon", 4);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-sortable-column-icon");
  }
}
function SortIcon_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SortIcon_ng_container_0_SortAltIcon_1_Template, 1, 1, "SortAltIcon", 3)(2, SortIcon_ng_container_0_SortAmountUpAltIcon_2_Template, 1, 1, "SortAmountUpAltIcon", 3)(3, SortIcon_ng_container_0_SortAmountDownIcon_3_Template, 1, 1, "SortAmountDownIcon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.sortOrder === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.sortOrder === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.sortOrder === -1);
  }
}
function SortIcon_span_1_1_ng_template_0_Template(rf, ctx) {}
function SortIcon_span_1_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SortIcon_span_1_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function SortIcon_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SortIcon_span_1_1_Template, 1, 0, null, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.dt.sortIconTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c15, ctx_r0.sortOrder));
  }
}
function SortIcon_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.getBadgeValue());
  }
}
function CellEditor_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function CellEditor_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CellEditor_ng_container_0_ng_container_1_Template, 1, 0, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.inputTemplate);
  }
}
function CellEditor_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function CellEditor_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CellEditor_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.outputTemplate);
  }
}
const _c22 = ["rb"];
const _c23 = (a0, a1, a2) => ({
  "p-radiobutton-focused": a0,
  "p-radiobutton-checked": a1,
  "p-radiobutton-disabled": a2
});
const _c24 = (a0, a1, a2) => ({
  "p-radiobutton-box p-component": true,
  "p-highlight": a0,
  "p-focus": a1,
  "p-disabled": a2
});
const _c25 = (a0, a1) => ({
  "p-checkbox-focused": a0,
  "p-checkbox-disabled": a1
});
const _c26 = (a0, a1, a2) => ({
  "p-checkbox-box p-component": true,
  "p-highlight": a0,
  "p-focus": a1,
  "p-disabled": a2
});
function TableCheckbox_ng_container_5_CheckIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "CheckIcon", 7);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-checkbox-icon");
  }
}
function TableCheckbox_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableCheckbox_ng_container_5_CheckIcon_1_Template, 1, 1, "CheckIcon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.checked);
  }
}
function TableCheckbox_span_6_1_ng_template_0_Template(rf, ctx) {}
function TableCheckbox_span_6_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TableCheckbox_span_6_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function TableCheckbox_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableCheckbox_span_6_1_Template, 1, 0, null, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.dt.checkboxIconTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c15, ctx_r1.checked));
  }
}
const _c27 = (a0, a1, a2) => ({
  "p-checkbox-box": true,
  "p-highlight": a0,
  "p-focus": a1,
  "p-disabled": a2
});
function TableHeaderCheckbox_ng_container_6_CheckIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "CheckIcon", 9);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-checkbox-icon");
  }
}
function TableHeaderCheckbox_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableHeaderCheckbox_ng_container_6_CheckIcon_1_Template, 1, 1, "CheckIcon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.checked);
  }
}
function TableHeaderCheckbox_span_7_1_ng_template_0_Template(rf, ctx) {}
function TableHeaderCheckbox_span_7_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TableHeaderCheckbox_span_7_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function TableHeaderCheckbox_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableHeaderCheckbox_span_7_1_Template, 1, 0, null, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.dt.headerCheckboxIconTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c15, ctx_r1.checked));
  }
}
const _c28 = ["icon"];
const _c29 = ["clearBtn"];
const _c30 = (a0, a1) => ({
  "p-column-filter-row": a0,
  "p-column-filter-menu": a1
});
const _c31 = (a0, a1) => ({
  "p-column-filter-menu-button-open": a0,
  "p-column-filter-menu-button-active": a1
});
const _c32 = a0 => ({
  "p-hidden-space": a0
});
const _c33 = a0 => ({
  "p-column-filter-overlay p-component p-fluid": true,
  "p-column-filter-overlay-menu": a0
});
const _c34 = a0 => ({
  "p-highlight": a0
});
function ColumnFilter_p_columnFilterFormElement_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p-columnFilterFormElement", 8);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx_r0.type)("field", ctx_r0.field)("ariaLabel", ctx_r0.ariaLabel)("filterConstraint", ctx_r0.dt.filters[ctx_r0.field])("filterTemplate", ctx_r0.filterTemplate)("placeholder", ctx_r0.placeholder)("minFractionDigits", ctx_r0.minFractionDigits)("maxFractionDigits", ctx_r0.maxFractionDigits)("prefix", ctx_r0.prefix)("suffix", ctx_r0.suffix)("locale", ctx_r0.locale)("localeMatcher", ctx_r0.localeMatcher)("currency", ctx_r0.currency)("currencyDisplay", ctx_r0.currencyDisplay)("useGrouping", ctx_r0.useGrouping)("showButtons", ctx_r0.showButtons);
  }
}
function ColumnFilter_button_2_FilterIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "FilterIcon", 12);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "pi-filter-icon");
  }
}
function ColumnFilter_button_2_span_3_1_ng_template_0_Template(rf, ctx) {}
function ColumnFilter_button_2_span_3_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ColumnFilter_button_2_span_3_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function ColumnFilter_button_2_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ColumnFilter_button_2_span_3_1_Template, 1, 0, null, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.filterIconTemplate);
  }
}
function ColumnFilter_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColumnFilter_button_2_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.toggleMenu());
    })("keydown", function ColumnFilter_button_2_Template_button_keydown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.onToggleButtonKeyDown($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ColumnFilter_button_2_FilterIcon_2_Template, 1, 1, "FilterIcon", 10)(3, ColumnFilter_button_2_span_3_Template, 2, 1, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](6, _c31, ctx_r0.overlayVisible, ctx_r0.hasFilter()));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r0.filterMenuButtonAriaLabel)("aria-controls", ctx_r0.overlayVisible ? ctx_r0.overlayId : null)("aria-expanded", (tmp_5_0 = ctx_r0.overlayVisible) !== null && tmp_5_0 !== undefined ? tmp_5_0 : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.filterIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.filterIconTemplate);
  }
}
function ColumnFilter_button_3_FilterSlashIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "FilterSlashIcon");
  }
}
function ColumnFilter_button_3_3_ng_template_0_Template(rf, ctx) {}
function ColumnFilter_button_3_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ColumnFilter_button_3_3_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function ColumnFilter_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 15, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColumnFilter_button_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.clearFilter());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ColumnFilter_button_3_FilterSlashIcon_2_Template, 1, 0, "FilterSlashIcon", 16)(3, ColumnFilter_button_3_3_Template, 1, 0, null, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c32, !ctx_r0.hasRowFilter()));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r0.clearButtonLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.clearFilterIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.clearFilterIconTemplate);
  }
}
function ColumnFilter_div_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function ColumnFilter_div_4_ul_2_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColumnFilter_div_4_ul_2_li_1_Template_li_click_0_listener() {
      const matchMode_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.onRowMatchModeChange(matchMode_r7.value));
    })("keydown", function ColumnFilter_div_4_ul_2_li_1_Template_li_keydown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.onRowMatchModeKeyDown($event));
    })("keydown.enter", function ColumnFilter_div_4_ul_2_li_1_Template_li_keydown_enter_0_listener() {
      const matchMode_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.onRowMatchModeChange(matchMode_r7.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const matchMode_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c34, ctx_r0.isRowMatchModeSelected(matchMode_r7.value)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", i_r8 === 0 ? "0" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", matchMode_r7.label, " ");
  }
}
function ColumnFilter_div_4_ul_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ColumnFilter_div_4_ul_2_li_1_Template, 2, 5, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColumnFilter_div_4_ul_2_Template_li_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.onRowClearItemClick());
    })("keydown", function ColumnFilter_div_4_ul_2_Template_li_keydown_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.onRowMatchModeKeyDown($event));
    })("keydown.enter", function ColumnFilter_div_4_ul_2_Template_li_keydown_enter_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.onRowClearItemClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.matchModes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.noFilterLabel);
  }
}
function ColumnFilter_div_4_ng_template_3_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32)(1, "p-dropdown", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ColumnFilter_div_4_ng_template_3_div_0_Template_p_dropdown_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.onOperatorChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r0.operatorOptions)("ngModel", ctx_r0.operator);
  }
}
function ColumnFilter_div_4_ng_template_3_div_2_p_dropdown_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-dropdown", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ColumnFilter_div_4_ng_template_3_div_2_p_dropdown_1_Template_p_dropdown_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const fieldConstraint_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.onMenuMatchModeChange($event, fieldConstraint_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const fieldConstraint_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r0.matchModes)("ngModel", fieldConstraint_r11.matchMode);
  }
}
function ColumnFilter_div_4_ng_template_3_div_2_button_4_TrashIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "TrashIcon", 12);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-button-icon-left");
  }
}
function ColumnFilter_div_4_ng_template_3_div_2_button_4_2_ng_template_0_Template(rf, ctx) {}
function ColumnFilter_div_4_ng_template_3_div_2_button_4_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ColumnFilter_div_4_ng_template_3_div_2_button_4_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function ColumnFilter_div_4_ng_template_3_div_2_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColumnFilter_div_4_ng_template_3_div_2_button_4_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);
      const fieldConstraint_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.removeConstraint(fieldConstraint_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ColumnFilter_div_4_ng_template_3_div_2_button_4_TrashIcon_1_Template, 1, 1, "TrashIcon", 10)(2, ColumnFilter_div_4_ng_template_3_div_2_button_4_2_Template, 1, 0, null, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", ctx_r0.removeRuleButtonLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r0.removeRuleButtonLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.removeRuleIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.removeRuleIconTemplate);
  }
}
function ColumnFilter_div_4_ng_template_3_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ColumnFilter_div_4_ng_template_3_div_2_p_dropdown_1_Template, 1, 2, "p-dropdown", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "p-columnFilterFormElement", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ColumnFilter_div_4_ng_template_3_div_2_button_4_Template, 3, 4, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const fieldConstraint_r11 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.showMatchModes && ctx_r0.matchModes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx_r0.type)("field", ctx_r0.field)("filterConstraint", fieldConstraint_r11)("filterTemplate", ctx_r0.filterTemplate)("placeholder", ctx_r0.placeholder)("minFractionDigits", ctx_r0.minFractionDigits)("maxFractionDigits", ctx_r0.maxFractionDigits)("prefix", ctx_r0.prefix)("suffix", ctx_r0.suffix)("locale", ctx_r0.locale)("localeMatcher", ctx_r0.localeMatcher)("currency", ctx_r0.currency)("currencyDisplay", ctx_r0.currencyDisplay)("useGrouping", ctx_r0.useGrouping);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.showRemoveIcon);
  }
}
function ColumnFilter_div_4_ng_template_3_div_3_PlusIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "PlusIcon", 12);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-button-icon-left");
  }
}
function ColumnFilter_div_4_ng_template_3_div_3_3_ng_template_0_Template(rf, ctx) {}
function ColumnFilter_div_4_ng_template_3_div_3_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ColumnFilter_div_4_ng_template_3_div_3_3_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function ColumnFilter_div_4_ng_template_3_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40)(1, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColumnFilter_div_4_ng_template_3_div_3_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.addConstraint());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ColumnFilter_div_4_ng_template_3_div_3_PlusIcon_2_Template, 1, 1, "PlusIcon", 10)(3, ColumnFilter_div_4_ng_template_3_div_3_3_Template, 1, 0, null, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", ctx_r0.addRuleButtonLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r0.addRuleButtonLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.addRuleIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.addRuleIconTemplate);
  }
}
function ColumnFilter_div_4_ng_template_3_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 42, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColumnFilter_div_4_ng_template_3_button_5_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.clearFilter());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", ctx_r0.clearButtonLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r0.clearButtonLabel);
  }
}
function ColumnFilter_div_4_ng_template_3_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColumnFilter_div_4_ng_template_3_button_6_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.applyFilter());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", ctx_r0.applyButtonLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r0.applyButtonLabel);
  }
}
function ColumnFilter_div_4_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ColumnFilter_div_4_ng_template_3_div_0_Template, 2, 2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ColumnFilter_div_4_ng_template_3_div_2_Template, 5, 16, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ColumnFilter_div_4_ng_template_3_div_3_Template, 4, 4, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ColumnFilter_div_4_ng_template_3_button_5_Template, 2, 2, "button", 30)(6, ColumnFilter_div_4_ng_template_3_button_6_Template, 1, 2, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isShowOperator);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.fieldConstraints);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isShowAddConstraint);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.showClearButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.showApplyButton);
  }
}
function ColumnFilter_div_4_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function ColumnFilter_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColumnFilter_div_4_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.onContentClick());
    })("@overlayAnimation.start", function ColumnFilter_div_4_Template_div_animation_overlayAnimation_start_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.onOverlayAnimationStart($event));
    })("@overlayAnimation.done", function ColumnFilter_div_4_Template_div_animation_overlayAnimation_done_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.onOverlayAnimationEnd($event));
    })("keydown.escape", function ColumnFilter_div_4_Template_div_keydown_escape_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.onEscape());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ColumnFilter_div_4_ng_container_1_Template, 1, 0, "ng-container", 18)(2, ColumnFilter_div_4_ul_2_Template, 5, 2, "ul", 19)(3, ColumnFilter_div_4_ng_template_3_Template, 7, 5, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"])(5, ColumnFilter_div_4_ng_container_5_Template, 1, 0, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menu_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c33, ctx_r0.display === "menu"))("id", ctx_r0.overlayId)("@overlayAnimation", "visible");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-modal", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.headerTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c15, ctx_r0.field));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.display === "row")("ngIfElse", menu_r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.footerTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c15, ctx_r0.field));
  }
}
const _c35 = (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15) => ({
  $implicit: a0,
  filterCallback: a1,
  type: a2,
  field: a3,
  filterConstraint: a4,
  placeholder: a5,
  minFractionDigits: a6,
  maxFractionDigits: a7,
  prefix: a8,
  suffix: a9,
  locale: a10,
  localeMatcher: a11,
  currency: a12,
  currencyDisplay: a13,
  useGrouping: a14,
  showButtons: a15
});
function ColumnFilterFormElement_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function ColumnFilterFormElement_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ColumnFilterFormElement_ng_container_0_ng_container_1_Template, 1, 0, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.filterTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunctionV"](2, _c35, [ctx_r0.filterConstraint.value, ctx_r0.filterCallback, ctx_r0.type, ctx_r0.field, ctx_r0.filterConstraint, ctx_r0.placeholder, ctx_r0.minFractionDigits, ctx_r0.maxFractionDigits, ctx_r0.prefix, ctx_r0.suffix, ctx_r0.locale, ctx_r0.localeMatcher, ctx_r0.currency, ctx_r0.currencyDisplay, ctx_r0.useGrouping, ctx_r0.showButtons]));
  }
}
function ColumnFilterFormElement_ng_template_1_input_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function ColumnFilterFormElement_ng_template_1_input_1_Template_input_input_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.onModelChange($event.target.value));
    })("keydown.enter", function ColumnFilterFormElement_ng_template_1_input_1_Template_input_keydown_enter_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.onTextInputEnterKeyDown($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ariaLabel", ctx_r0.ariaLabel)("value", ctx_r0.filterConstraint == null ? null : ctx_r0.filterConstraint.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("placeholder", ctx_r0.placeholder);
  }
}
function ColumnFilterFormElement_ng_template_1_p_inputNumber_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-inputNumber", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ColumnFilterFormElement_ng_template_1_p_inputNumber_2_Template_p_inputNumber_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.onModelChange($event));
    })("onKeyDown", function ColumnFilterFormElement_ng_template_1_p_inputNumber_2_Template_p_inputNumber_onKeyDown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.onNumericInputKeyDown($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.filterConstraint == null ? null : ctx_r0.filterConstraint.value)("showButtons", ctx_r0.showButtons)("minFractionDigits", ctx_r0.minFractionDigits)("maxFractionDigits", ctx_r0.maxFractionDigits)("ariaLabel", ctx_r0.ariaLabel)("prefix", ctx_r0.prefix)("suffix", ctx_r0.suffix)("placeholder", ctx_r0.placeholder)("mode", ctx_r0.currency ? "currency" : "decimal")("locale", ctx_r0.locale)("localeMatcher", ctx_r0.localeMatcher)("currency", ctx_r0.currency)("currencyDisplay", ctx_r0.currencyDisplay)("useGrouping", ctx_r0.useGrouping);
  }
}
function ColumnFilterFormElement_ng_template_1_p_triStateCheckbox_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-triStateCheckbox", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ColumnFilterFormElement_ng_template_1_p_triStateCheckbox_3_Template_p_triStateCheckbox_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.onModelChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ariaLabel", ctx_r0.ariaLabel)("ngModel", ctx_r0.filterConstraint == null ? null : ctx_r0.filterConstraint.value);
  }
}
function ColumnFilterFormElement_ng_template_1_p_calendar_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-calendar", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ColumnFilterFormElement_ng_template_1_p_calendar_4_Template_p_calendar_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.onModelChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ariaLabel", ctx_r0.ariaLabel)("placeholder", ctx_r0.placeholder)("ngModel", ctx_r0.filterConstraint == null ? null : ctx_r0.filterConstraint.value);
  }
}
function ColumnFilterFormElement_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ColumnFilterFormElement_ng_template_1_input_1_Template, 1, 3, "input", 4)(2, ColumnFilterFormElement_ng_template_1_p_inputNumber_2_Template, 1, 14, "p-inputNumber", 5)(3, ColumnFilterFormElement_ng_template_1_p_triStateCheckbox_3_Template, 1, 2, "p-triStateCheckbox", 6)(4, ColumnFilterFormElement_ng_template_1_p_calendar_4_Template, 1, 3, "p-calendar", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx_r0.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "numeric");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "boolean");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "date");
  }
}
let TableService = /*#__PURE__*/(() => {
  class TableService {
    sortSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    selectionSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    contextMenuSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    valueSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    totalRecordsSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    columnsSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    sortSource$ = this.sortSource.asObservable();
    selectionSource$ = this.selectionSource.asObservable();
    contextMenuSource$ = this.contextMenuSource.asObservable();
    valueSource$ = this.valueSource.asObservable();
    totalRecordsSource$ = this.totalRecordsSource.asObservable();
    columnsSource$ = this.columnsSource.asObservable();
    onSort(sortMeta) {
      this.sortSource.next(sortMeta);
    }
    onSelectionChange() {
      this.selectionSource.next(null);
    }
    onContextMenu(data) {
      this.contextMenuSource.next(data);
    }
    onValueChange(value) {
      this.valueSource.next(value);
    }
    onTotalRecordsChange(value) {
      this.totalRecordsSource.next(value);
    }
    onColumnsChange(columns) {
      this.columnsSource.next(columns);
    }
    static ɵfac = function TableService_Factory(t) {
      return new (t || TableService)();
    };
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: TableService,
      factory: TableService.ɵfac
    });
  }
  return TableService;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Table displays data in tabular format.
 * @group Components
 */
let Table = /*#__PURE__*/(() => {
  class Table {
    document;
    platformId;
    renderer;
    el;
    zone;
    tableService;
    cd;
    filterService;
    overlayService;
    config;
    /**
     * An array of objects to represent dynamic columns that are frozen.
     * @group Props
     */
    frozenColumns;
    /**
     * An array of objects to display as frozen.
     * @group Props
     */
    frozenValue;
    /**
     * Inline style of the component.
     * @group Props
     */
    style;
    /**
     * Style class of the component.
     * @group Props
     */
    styleClass;
    /**
     * Inline style of the table.
     * @group Props
     */
    tableStyle;
    /**
     * Style class of the table.
     * @group Props
     */
    tableStyleClass;
    /**
     * When specified as true, enables the pagination.
     * @group Props
     */
    paginator;
    /**
     * Number of page links to display in paginator.
     * @group Props
     */
    pageLinks = 5;
    /**
     * Array of integer/object values to display inside rows per page dropdown of paginator
     * @group Props
     */
    rowsPerPageOptions;
    /**
     * Whether to show it even there is only one page.
     * @group Props
     */
    alwaysShowPaginator = true;
    /**
     * Position of the paginator, options are "top", "bottom" or "both".
     * @group Props
     */
    paginatorPosition = 'bottom';
    /**
     * Custom style class for paginator
     * @group Props
     */
    paginatorStyleClass;
    /**
     * Target element to attach the paginator dropdown overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
     * @group Props
     */
    paginatorDropdownAppendTo;
    /**
     * Paginator dropdown height of the viewport in pixels, a scrollbar is defined if height of list exceeds this value.
     * @group Props
     */
    paginatorDropdownScrollHeight = '200px';
    /**
     * Template of the current page report element. Available placeholders are {currentPage},{totalPages},{rows},{first},{last} and {totalRecords}
     * @group Props
     */
    currentPageReportTemplate = '{currentPage} of {totalPages}';
    /**
     * Whether to display current page report.
     * @group Props
     */
    showCurrentPageReport;
    /**
     * Whether to display a dropdown to navigate to any page.
     * @group Props
     */
    showJumpToPageDropdown;
    /**
     * Whether to display a input to navigate to any page.
     * @group Props
     */
    showJumpToPageInput;
    /**
     * When enabled, icons are displayed on paginator to go first and last page.
     * @group Props
     */
    showFirstLastIcon = true;
    /**
     * Whether to show page links.
     * @group Props
     */
    showPageLinks = true;
    /**
     * Sort order to use when an unsorted column gets sorted by user interaction.
     * @group Props
     */
    defaultSortOrder = 1;
    /**
     * Defines whether sorting works on single column or on multiple columns.
     * @group Props
     */
    sortMode = 'single';
    /**
     * When true, resets paginator to first page after sorting. Available only when sortMode is set to single.
     * @group Props
     */
    resetPageOnSort = true;
    /**
     * Specifies the selection mode, valid values are "single" and "multiple".
     * @group Props
     */
    selectionMode;
    /**
     * When enabled with paginator and checkbox selection mode, the select all checkbox in the header will select all rows on the current page.
     * @group Props
     */
    selectionPageOnly;
    /**
     * Selected row with a context menu.
     * @group Props
     */
    contextMenuSelection;
    /**
     * Callback to invoke on context menu selection change.
     * @param {*} object - row data.
     * @group Emits
     */
    contextMenuSelectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     *  Defines the behavior of context menu selection, in "separate" mode context menu updates contextMenuSelection property whereas in joint mode selection property is used instead so that when row selection is enabled, both row selection and context menu selection use the same property.
     * @group Props
     */
    contextMenuSelectionMode = 'separate';
    /**
     * A property to uniquely identify a record in data.
     * @group Props
     */
    dataKey;
    /**
     * Defines whether metaKey should be considered for the selection. On touch enabled devices, metaKeySelection is turned off automatically.
     * @group Props
     */
    metaKeySelection = false;
    /**
     * Defines if the row is selectable.
     * @group Props
     */
    rowSelectable;
    /**
     * Function to optimize the dom operations by delegating to ngForTrackBy, default algorithm checks for object identity.
     * @group Props
     */
    rowTrackBy = (index, item) => item;
    /**
     * Defines if data is loaded and interacted with in lazy manner.
     * @group Props
     */
    lazy = false;
    /**
     * Whether to call lazy loading on initialization.
     * @group Props
     */
    lazyLoadOnInit = true;
    /**
     * Algorithm to define if a row is selected, valid values are "equals" that compares by reference and "deepEquals" that compares all fields.
     * @group Props
     */
    compareSelectionBy = 'deepEquals';
    /**
     * Character to use as the csv separator.
     * @group Props
     */
    csvSeparator = ',';
    /**
     * Name of the exported file.
     * @group Props
     */
    exportFilename = 'download';
    /**
     * An array of FilterMetadata objects to provide external filters.
     * @group Props
     */
    filters = {};
    /**
     * An array of fields as string to use in global filtering.
     * @group Props
     */
    globalFilterFields;
    /**
     * Delay in milliseconds before filtering the data.
     * @group Props
     */
    filterDelay = 300;
    /**
     * Locale to use in filtering. The default locale is the host environment's current locale.
     * @group Props
     */
    filterLocale;
    /**
     * Map instance to keep the expanded rows where key of the map is the data key of the row.
     * @group Props
     */
    expandedRowKeys = {};
    /**
     * Map instance to keep the rows being edited where key of the map is the data key of the row.
     * @group Props
     */
    editingRowKeys = {};
    /**
     * Whether multiple rows can be expanded at any time. Valid values are "multiple" and "single".
     * @group Props
     */
    rowExpandMode = 'multiple';
    /**
     * Enables scrollable tables.
     * @group Props
     */
    scrollable;
    /**
     * Orientation of the scrolling, options are "vertical", "horizontal" and "both".
     * @group Props
     * @deprecated Property is obselete since v14.2.0.
     */
    scrollDirection = 'vertical';
    /**
     * Type of the row grouping, valid values are "subheader" and "rowspan".
     * @group Props
     */
    rowGroupMode;
    /**
     * Height of the scroll viewport in fixed pixels or the "flex" keyword for a dynamic size.
     * @group Props
     */
    scrollHeight;
    /**
     * Whether the data should be loaded on demand during scroll.
     * @group Props
     */
    virtualScroll;
    /**
     * Height of a row to use in calculations of virtual scrolling.
     * @group Props
     */
    virtualScrollItemSize;
    /**
     * Whether to use the scroller feature. The properties of scroller component can be used like an object in it.
     * @group Props
     */
    virtualScrollOptions;
    /**
     * Threshold in milliseconds to delay lazy loading during scrolling.
     * @group Props
     */
    virtualScrollDelay = 250;
    /**
     * Width of the frozen columns container.
     * @group Props
     */
    frozenWidth;
    /**
     * Defines if the table is responsive.
     * @group Props
     * @deprecated table is always responsive with scrollable behavior.
     */
    get responsive() {
      return this._responsive;
    }
    set responsive(val) {
      this._responsive = val;
      console.warn('responsive property is deprecated as table is always responsive with scrollable behavior.');
    }
    _responsive;
    /**
     * Local ng-template varilable of a ContextMenu.
     * @group Props
     */
    contextMenu;
    /**
     * When enabled, columns can be resized using drag and drop.
     * @group Props
     */
    resizableColumns;
    /**
     * Defines whether the overall table width should change on column resize, valid values are "fit" and "expand".
     * @group Props
     */
    columnResizeMode = 'fit';
    /**
     * When enabled, columns can be reordered using drag and drop.
     * @group Props
     */
    reorderableColumns;
    /**
     * Displays a loader to indicate data load is in progress.
     * @group Props
     */
    loading;
    /**
     * The icon to show while indicating data load is in progress.
     * @group Props
     */
    loadingIcon;
    /**
     * Whether to show the loading mask when loading property is true.
     * @group Props
     */
    showLoader = true;
    /**
     * Adds hover effect to rows without the need for selectionMode. Note that tr elements that can be hovered need to have "p-selectable-row" class for rowHover to work.
     * @group Props
     */
    rowHover;
    /**
     * Whether to use the default sorting or a custom one using sortFunction.
     * @group Props
     */
    customSort;
    /**
     * Whether to use the initial sort badge or not.
     * @group Props
     */
    showInitialSortBadge = true;
    /**
     * Whether the cell widths scale according to their content or not.  Deprecated:  Table layout is always "auto".
     * @group Props
     */
    autoLayout;
    /**
     * Export function.
     * @group Props
     */
    exportFunction;
    /**
     * Custom export header of the column to be exported as CSV.
     * @group Props
     */
    exportHeader;
    /**
     * Unique identifier of a stateful table to use in state storage.
     * @group Props
     */
    stateKey;
    /**
     * Defines where a stateful table keeps its state, valid values are "session" for sessionStorage and "local" for localStorage.
     * @group Props
     */
    stateStorage = 'session';
    /**
     * Defines the editing mode, valid values are "cell" and "row".
     * @group Props
     */
    editMode = 'cell';
    /**
     * Field name to use in row grouping.
     * @group Props
     */
    groupRowsBy;
    /**
     * Order to sort when default row grouping is enabled.
     * @group Props
     */
    groupRowsByOrder = 1;
    /**
     * Defines the responsive mode, valid options are "stack" and "scroll".
     * @group Props
     */
    responsiveLayout = 'scroll';
    /**
     * The breakpoint to define the maximum width boundary when using stack responsive layout.
     * @group Props
     */
    breakpoint = '960px';
    /**
     * Locale to be used in paginator formatting.
     * @group Props
     */
    paginatorLocale;
    /**
     * An array of objects to display.
     * @group Props
     */
    get value() {
      return this._value;
    }
    set value(val) {
      this._value = val;
    }
    /**
     * An array of objects to represent dynamic columns.
     * @group Props
     */
    get columns() {
      return this._columns;
    }
    set columns(cols) {
      this._columns = cols;
    }
    /**
     * Index of the first row to be displayed.
     * @group Props
     */
    get first() {
      return this._first;
    }
    set first(val) {
      this._first = val;
    }
    /**
     * Number of rows to display per page.
     * @group Props
     */
    get rows() {
      return this._rows;
    }
    set rows(val) {
      this._rows = val;
    }
    /**
     * Number of total records, defaults to length of value when not defined.
     * @group Props
     */
    get totalRecords() {
      return this._totalRecords;
    }
    set totalRecords(val) {
      this._totalRecords = val;
      this.tableService.onTotalRecordsChange(this._totalRecords);
    }
    /**
     * Name of the field to sort data by default.
     * @group Props
     */
    get sortField() {
      return this._sortField;
    }
    set sortField(val) {
      this._sortField = val;
    }
    /**
     * Order to sort when default sorting is enabled.
     * @group Props
     */
    get sortOrder() {
      return this._sortOrder;
    }
    set sortOrder(val) {
      this._sortOrder = val;
    }
    /**
     * An array of SortMeta objects to sort the data by default in multiple sort mode.
     * @group Props
     */
    get multiSortMeta() {
      return this._multiSortMeta;
    }
    set multiSortMeta(val) {
      this._multiSortMeta = val;
    }
    /**
     * Selected row in single mode or an array of values in multiple mode.
     * @group Props
     */
    get selection() {
      return this._selection;
    }
    set selection(val) {
      this._selection = val;
    }
    /**
     * Whether all data is selected.
     * @group Props
     */
    get selectAll() {
      return this._selection;
    }
    set selectAll(val) {
      this._selection = val;
    }
    /**
     * Emits when the all of the items selected or unselected.
     * @param {TableSelectAllChangeEvent} event - custom  all selection change event.
     * @group Emits
     */
    selectAllChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke on selection changed.
     * @param {any | null} value - selected data.
     * @group Emits
     */
    selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when a row is selected.
     * @param {TableRowSelectEvent} event - custom select event.
     * @group Emits
     */
    onRowSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when a row is unselected.
     * @param {TableRowUnSelectEvent} event - custom unselect event.
     * @group Emits
     */
    onRowUnselect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when pagination occurs.
     * @param {TablePageEvent} event - custom pagination event.
     * @group Emits
     */
    onPage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when a column gets sorted.
     * @param {Object} object - sort meta.
     * @group Emits
     */
    onSort = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when data is filtered.
     * @param {TableFilterEvent} event - custom filtering event.
     * @group Emits
     */
    onFilter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when paging, sorting or filtering happens in lazy mode.
     * @param {TableLazyLoadEvent} event - custom lazy loading event.
     * @group Emits
     */
    onLazyLoad = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when a row is expanded.
     * @param {TableRowExpandEvent} event - custom row expand event.
     * @group Emits
     */
    onRowExpand = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when a row is collapsed.
     * @param {TableRowCollapseEvent} event - custom row collapse event.
     * @group Emits
     */
    onRowCollapse = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when a row is selected with right click.
     * @param {TableContextMenuSelectEvent} event - custom context menu select event.
     * @group Emits
     */
    onContextMenuSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when a column is resized.
     * @param {TableColResizeEvent} event - custom column resize event.
     * @group Emits
     */
    onColResize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when a column is reordered.
     * @param {TableColumnReorderEvent} event - custom column reorder event.
     * @group Emits
     */
    onColReorder = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when a row is reordered.
     * @param {TableRowReorderEvent} event - custom row reorder event.
     * @group Emits
     */
    onRowReorder = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when a cell switches to edit mode.
     * @param {TableEditInitEvent} event - custom edit init event.
     * @group Emits
     */
    onEditInit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when cell edit is completed.
     * @param {TableEditCompleteEvent} event - custom edit complete event.
     * @group Emits
     */
    onEditComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when cell edit is cancelled with escape key.
     * @param {TableEditCancelEvent} event - custom edit cancel event.
     * @group Emits
     */
    onEditCancel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when state of header checkbox changes.
     * @param {TableHeaderCheckboxToggleEvent} event - custom header checkbox event.
     * @group Emits
     */
    onHeaderCheckboxToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * A function to implement custom sorting, refer to sorting section for details.
     * @param {any} any - sort meta.
     * @group Emits
     */
    sortFunction = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke on pagination.
     * @param {number} number - first element.
     * @group Emits
     */
    firstChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke on rows change.
     * @param {number} number - Row count.
     * @group Emits
     */
    rowsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke table state is saved.
     * @param {TableState} object - table state.
     * @group Emits
     */
    onStateSave = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke table state is restored.
     * @param {TableState} object - table state.
     * @group Emits
     */
    onStateRestore = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    containerViewChild;
    resizeHelperViewChild;
    reorderIndicatorUpViewChild;
    reorderIndicatorDownViewChild;
    wrapperViewChild;
    tableViewChild;
    tableHeaderViewChild;
    tableFooterViewChild;
    scroller;
    templates;
    /**
     * Indicates the height of rows to be scrolled.
     * @group Props
     * @deprecated use virtualScrollItemSize property instead.
     */
    get virtualRowHeight() {
      return this._virtualRowHeight;
    }
    set virtualRowHeight(val) {
      this._virtualRowHeight = val;
      console.warn('The virtualRowHeight property is deprecated.');
    }
    _virtualRowHeight = 28;
    _value = [];
    _columns;
    _totalRecords = 0;
    _first = 0;
    _rows;
    filteredValue;
    headerTemplate;
    headerGroupedTemplate;
    bodyTemplate;
    loadingBodyTemplate;
    captionTemplate;
    footerTemplate;
    footerGroupedTemplate;
    summaryTemplate;
    colGroupTemplate;
    expandedRowTemplate;
    groupHeaderTemplate;
    groupFooterTemplate;
    frozenExpandedRowTemplate;
    frozenHeaderTemplate;
    frozenBodyTemplate;
    frozenFooterTemplate;
    frozenColGroupTemplate;
    emptyMessageTemplate;
    paginatorLeftTemplate;
    paginatorRightTemplate;
    paginatorDropdownItemTemplate;
    loadingIconTemplate;
    reorderIndicatorUpIconTemplate;
    reorderIndicatorDownIconTemplate;
    sortIconTemplate;
    checkboxIconTemplate;
    headerCheckboxIconTemplate;
    paginatorDropdownIconTemplate;
    paginatorFirstPageLinkIconTemplate;
    paginatorLastPageLinkIconTemplate;
    paginatorPreviousPageLinkIconTemplate;
    paginatorNextPageLinkIconTemplate;
    selectionKeys = {};
    lastResizerHelperX;
    reorderIconWidth;
    reorderIconHeight;
    draggedColumn;
    draggedRowIndex;
    droppedRowIndex;
    rowDragging;
    dropPosition;
    editingCell;
    editingCellData;
    editingCellField;
    editingCellRowIndex;
    selfClick;
    documentEditListener;
    _multiSortMeta;
    _sortField;
    _sortOrder = 1;
    preventSelectionSetterPropagation;
    _selection;
    _selectAll = null;
    anchorRowIndex;
    rangeRowIndex;
    filterTimeout;
    initialized;
    rowTouched;
    restoringSort;
    restoringFilter;
    stateRestored;
    columnOrderStateRestored;
    columnWidthsState;
    tableWidthState;
    overlaySubscription;
    resizeColumnElement;
    columnResizing = false;
    rowGroupHeaderStyleObject = {};
    id = (0,primeng_utils__WEBPACK_IMPORTED_MODULE_2__.UniqueComponentId)();
    styleElement;
    responsiveStyleElement;
    window;
    constructor(document, platformId, renderer, el, zone, tableService, cd, filterService, overlayService, config) {
      this.document = document;
      this.platformId = platformId;
      this.renderer = renderer;
      this.el = el;
      this.zone = zone;
      this.tableService = tableService;
      this.cd = cd;
      this.filterService = filterService;
      this.overlayService = overlayService;
      this.config = config;
      this.window = this.document.defaultView;
    }
    ngOnInit() {
      if (this.lazy && this.lazyLoadOnInit) {
        if (!this.virtualScroll) {
          this.onLazyLoad.emit(this.createLazyLoadMetadata());
        }
        if (this.restoringFilter) {
          this.restoringFilter = false;
        }
      }
      if (this.responsiveLayout === 'stack') {
        this.createResponsiveStyle();
      }
      this.initialized = true;
    }
    ngAfterContentInit() {
      this.templates.forEach(item => {
        switch (item.getType()) {
          case 'caption':
            this.captionTemplate = item.template;
            break;
          case 'header':
            this.headerTemplate = item.template;
            break;
          case 'headergrouped':
            this.headerGroupedTemplate = item.template;
            break;
          case 'body':
            this.bodyTemplate = item.template;
            break;
          case 'loadingbody':
            this.loadingBodyTemplate = item.template;
            break;
          case 'footer':
            this.footerTemplate = item.template;
            break;
          case 'footergrouped':
            this.footerGroupedTemplate = item.template;
            break;
          case 'summary':
            this.summaryTemplate = item.template;
            break;
          case 'colgroup':
            this.colGroupTemplate = item.template;
            break;
          case 'rowexpansion':
            this.expandedRowTemplate = item.template;
            break;
          case 'groupheader':
            this.groupHeaderTemplate = item.template;
            break;
          case 'groupfooter':
            this.groupFooterTemplate = item.template;
            break;
          case 'frozenheader':
            this.frozenHeaderTemplate = item.template;
            break;
          case 'frozenbody':
            this.frozenBodyTemplate = item.template;
            break;
          case 'frozenfooter':
            this.frozenFooterTemplate = item.template;
            break;
          case 'frozencolgroup':
            this.frozenColGroupTemplate = item.template;
            break;
          case 'frozenrowexpansion':
            this.frozenExpandedRowTemplate = item.template;
            break;
          case 'emptymessage':
            this.emptyMessageTemplate = item.template;
            break;
          case 'paginatorleft':
            this.paginatorLeftTemplate = item.template;
            break;
          case 'paginatorright':
            this.paginatorRightTemplate = item.template;
            break;
          case 'paginatordropdownicon':
            this.paginatorDropdownIconTemplate = item.template;
            break;
          case 'paginatordropdownitem':
            this.paginatorDropdownItemTemplate = item.template;
            break;
          case 'paginatorfirstpagelinkicon':
            this.paginatorFirstPageLinkIconTemplate = item.template;
            break;
          case 'paginatorlastpagelinkicon':
            this.paginatorLastPageLinkIconTemplate = item.template;
            break;
          case 'paginatorpreviouspagelinkicon':
            this.paginatorPreviousPageLinkIconTemplate = item.template;
            break;
          case 'paginatornextpagelinkicon':
            this.paginatorNextPageLinkIconTemplate = item.template;
            break;
          case 'loadingicon':
            this.loadingIconTemplate = item.template;
            break;
          case 'reorderindicatorupicon':
            this.reorderIndicatorUpIconTemplate = item.template;
            break;
          case 'reorderindicatordownicon':
            this.reorderIndicatorDownIconTemplate = item.template;
            break;
          case 'sorticon':
            this.sortIconTemplate = item.template;
            break;
          case 'checkboxicon':
            this.checkboxIconTemplate = item.template;
            break;
          case 'headercheckboxicon':
            this.headerCheckboxIconTemplate = item.template;
            break;
        }
      });
    }
    ngAfterViewInit() {
      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.isPlatformBrowser)(this.platformId)) {
        if (this.isStateful() && this.resizableColumns) {
          this.restoreColumnWidths();
        }
      }
    }
    ngOnChanges(simpleChange) {
      if (simpleChange.value) {
        if (this.isStateful() && !this.stateRestored && (0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.isPlatformBrowser)(this.platformId)) {
          this.restoreState();
        }
        this._value = simpleChange.value.currentValue;
        if (!this.lazy) {
          this.totalRecords = this._value ? this._value.length : 0;
          if (this.sortMode == 'single' && (this.sortField || this.groupRowsBy)) this.sortSingle();else if (this.sortMode == 'multiple' && (this.multiSortMeta || this.groupRowsBy)) this.sortMultiple();else if (this.hasFilter())
            //sort already filters
            this._filter();
        }
        this.tableService.onValueChange(simpleChange.value.currentValue);
      }
      if (simpleChange.columns) {
        if (!this.isStateful()) {
          this._columns = simpleChange.columns.currentValue;
          this.tableService.onColumnsChange(simpleChange.columns.currentValue);
        }
        if (this._columns && this.isStateful() && this.reorderableColumns && !this.columnOrderStateRestored) {
          this.restoreColumnOrder();
          this.tableService.onColumnsChange(this._columns);
        }
      }
      if (simpleChange.sortField) {
        this._sortField = simpleChange.sortField.currentValue;
        //avoid triggering lazy load prior to lazy initialization at onInit
        if (!this.lazy || this.initialized) {
          if (this.sortMode === 'single') {
            this.sortSingle();
          }
        }
      }
      if (simpleChange.groupRowsBy) {
        //avoid triggering lazy load prior to lazy initialization at onInit
        if (!this.lazy || this.initialized) {
          if (this.sortMode === 'single') {
            this.sortSingle();
          }
        }
      }
      if (simpleChange.sortOrder) {
        this._sortOrder = simpleChange.sortOrder.currentValue;
        //avoid triggering lazy load prior to lazy initialization at onInit
        if (!this.lazy || this.initialized) {
          if (this.sortMode === 'single') {
            this.sortSingle();
          }
        }
      }
      if (simpleChange.groupRowsByOrder) {
        //avoid triggering lazy load prior to lazy initialization at onInit
        if (!this.lazy || this.initialized) {
          if (this.sortMode === 'single') {
            this.sortSingle();
          }
        }
      }
      if (simpleChange.multiSortMeta) {
        this._multiSortMeta = simpleChange.multiSortMeta.currentValue;
        if (this.sortMode === 'multiple' && (this.initialized || !this.lazy && !this.virtualScroll)) {
          this.sortMultiple();
        }
      }
      if (simpleChange.selection) {
        this._selection = simpleChange.selection.currentValue;
        if (!this.preventSelectionSetterPropagation) {
          this.updateSelectionKeys();
          this.tableService.onSelectionChange();
        }
        this.preventSelectionSetterPropagation = false;
      }
      if (simpleChange.selectAll) {
        this._selectAll = simpleChange.selectAll.currentValue;
        if (!this.preventSelectionSetterPropagation) {
          this.updateSelectionKeys();
          this.tableService.onSelectionChange();
          if (this.isStateful()) {
            this.saveState();
          }
        }
        this.preventSelectionSetterPropagation = false;
      }
    }
    get processedData() {
      return this.filteredValue || this.value || [];
    }
    _initialColWidths;
    dataToRender(data) {
      const _data = data || this.processedData;
      if (_data && this.paginator) {
        const first = this.lazy ? 0 : this.first;
        return _data.slice(first, first + this.rows);
      }
      return _data;
    }
    updateSelectionKeys() {
      if (this.dataKey && this._selection) {
        this.selectionKeys = {};
        if (Array.isArray(this._selection)) {
          for (let data of this._selection) {
            this.selectionKeys[String(primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(data, this.dataKey))] = 1;
          }
        } else {
          this.selectionKeys[String(primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(this._selection, this.dataKey))] = 1;
        }
      }
    }
    onPageChange(event) {
      this.first = event.first;
      this.rows = event.rows;
      this.onPage.emit({
        first: this.first,
        rows: this.rows
      });
      if (this.lazy) {
        this.onLazyLoad.emit(this.createLazyLoadMetadata());
      }
      this.firstChange.emit(this.first);
      this.rowsChange.emit(this.rows);
      this.tableService.onValueChange(this.value);
      if (this.isStateful()) {
        this.saveState();
      }
      this.anchorRowIndex = null;
      if (this.scrollable) {
        this.resetScrollTop();
      }
    }
    sort(event) {
      let originalEvent = event.originalEvent;
      if (this.sortMode === 'single') {
        this._sortOrder = this.sortField === event.field ? this.sortOrder * -1 : this.defaultSortOrder;
        this._sortField = event.field;
        if (this.resetPageOnSort) {
          this._first = 0;
          this.firstChange.emit(this._first);
          if (this.scrollable) {
            this.resetScrollTop();
          }
        }
        this.sortSingle();
      }
      if (this.sortMode === 'multiple') {
        let metaKey = originalEvent.metaKey || originalEvent.ctrlKey;
        let sortMeta = this.getSortMeta(event.field);
        if (sortMeta) {
          if (!metaKey) {
            this._multiSortMeta = [{
              field: event.field,
              order: sortMeta.order * -1
            }];
            if (this.resetPageOnSort) {
              this._first = 0;
              this.firstChange.emit(this._first);
              if (this.scrollable) {
                this.resetScrollTop();
              }
            }
          } else {
            sortMeta.order = sortMeta.order * -1;
          }
        } else {
          if (!metaKey || !this.multiSortMeta) {
            this._multiSortMeta = [];
            if (this.resetPageOnSort) {
              this._first = 0;
              this.firstChange.emit(this._first);
            }
          }
          this._multiSortMeta.push({
            field: event.field,
            order: this.defaultSortOrder
          });
        }
        this.sortMultiple();
      }
      if (this.isStateful()) {
        this.saveState();
      }
      this.anchorRowIndex = null;
    }
    sortSingle() {
      let field = this.sortField || this.groupRowsBy;
      let order = this.sortField ? this.sortOrder : this.groupRowsByOrder;
      if (this.groupRowsBy && this.sortField && this.groupRowsBy !== this.sortField) {
        this._multiSortMeta = [this.getGroupRowsMeta(), {
          field: this.sortField,
          order: this.sortOrder
        }];
        this.sortMultiple();
        return;
      }
      if (field && order) {
        if (this.restoringSort) {
          this.restoringSort = false;
        }
        if (this.lazy) {
          this.onLazyLoad.emit(this.createLazyLoadMetadata());
        } else if (this.value) {
          if (this.customSort) {
            this.sortFunction.emit({
              data: this.value,
              mode: this.sortMode,
              field: field,
              order: order
            });
          } else {
            this.value.sort((data1, data2) => {
              let value1 = primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(data1, field);
              let value2 = primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(data2, field);
              let result = null;
              if (value1 == null && value2 != null) result = -1;else if (value1 != null && value2 == null) result = 1;else if (value1 == null && value2 == null) result = 0;else if (typeof value1 === 'string' && typeof value2 === 'string') result = value1.localeCompare(value2);else result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;
              return order * result;
            });
            this._value = [...this.value];
          }
          if (this.hasFilter()) {
            this._filter();
          }
        }
        let sortMeta = {
          field: field,
          order: order
        };
        this.onSort.emit(sortMeta);
        this.tableService.onSort(sortMeta);
      }
    }
    sortMultiple() {
      if (this.groupRowsBy) {
        if (!this._multiSortMeta) this._multiSortMeta = [this.getGroupRowsMeta()];else if (this.multiSortMeta[0].field !== this.groupRowsBy) this._multiSortMeta = [this.getGroupRowsMeta(), ...this._multiSortMeta];
      }
      if (this.multiSortMeta) {
        if (this.lazy) {
          this.onLazyLoad.emit(this.createLazyLoadMetadata());
        } else if (this.value) {
          if (this.customSort) {
            this.sortFunction.emit({
              data: this.value,
              mode: this.sortMode,
              multiSortMeta: this.multiSortMeta
            });
          } else {
            this.value.sort((data1, data2) => {
              return this.multisortField(data1, data2, this.multiSortMeta, 0);
            });
            this._value = [...this.value];
          }
          if (this.hasFilter()) {
            this._filter();
          }
        }
        this.onSort.emit({
          multisortmeta: this.multiSortMeta
        });
        this.tableService.onSort(this.multiSortMeta);
      }
    }
    multisortField(data1, data2, multiSortMeta, index) {
      const value1 = primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(data1, multiSortMeta[index].field);
      const value2 = primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(data2, multiSortMeta[index].field);
      if (primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.compare(value1, value2, this.filterLocale) === 0) {
        return multiSortMeta.length - 1 > index ? this.multisortField(data1, data2, multiSortMeta, index + 1) : 0;
      }
      return this.compareValuesOnSort(value1, value2, multiSortMeta[index].order);
    }
    compareValuesOnSort(value1, value2, order) {
      return primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.sort(value1, value2, order, this.filterLocale, this.sortOrder);
    }
    getSortMeta(field) {
      if (this.multiSortMeta && this.multiSortMeta.length) {
        for (let i = 0; i < this.multiSortMeta.length; i++) {
          if (this.multiSortMeta[i].field === field) {
            return this.multiSortMeta[i];
          }
        }
      }
      return null;
    }
    isSorted(field) {
      if (this.sortMode === 'single') {
        return this.sortField && this.sortField === field;
      } else if (this.sortMode === 'multiple') {
        let sorted = false;
        if (this.multiSortMeta) {
          for (let i = 0; i < this.multiSortMeta.length; i++) {
            if (this.multiSortMeta[i].field == field) {
              sorted = true;
              break;
            }
          }
        }
        return sorted;
      }
    }
    handleRowClick(event) {
      let target = event.originalEvent.target;
      let targetNode = target.nodeName;
      let parentNode = target.parentElement && target.parentElement.nodeName;
      if (targetNode == 'INPUT' || targetNode == 'BUTTON' || targetNode == 'A' || parentNode == 'INPUT' || parentNode == 'BUTTON' || parentNode == 'A' || primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.hasClass(event.originalEvent.target, 'p-clickable')) {
        return;
      }
      if (this.selectionMode) {
        let rowData = event.rowData;
        let rowIndex = event.rowIndex;
        this.preventSelectionSetterPropagation = true;
        if (this.isMultipleSelectionMode() && event.originalEvent.shiftKey && this.anchorRowIndex != null) {
          primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.clearSelection();
          if (this.rangeRowIndex != null) {
            this.clearSelectionRange(event.originalEvent);
          }
          this.rangeRowIndex = rowIndex;
          this.selectRange(event.originalEvent, rowIndex);
        } else {
          let selected = this.isSelected(rowData);
          if (!selected && !this.isRowSelectable(rowData, rowIndex)) {
            return;
          }
          let metaSelection = this.rowTouched ? false : this.metaKeySelection;
          let dataKeyValue = this.dataKey ? String(primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(rowData, this.dataKey)) : null;
          this.anchorRowIndex = rowIndex;
          this.rangeRowIndex = rowIndex;
          if (metaSelection) {
            let metaKey = event.originalEvent.metaKey || event.originalEvent.ctrlKey;
            if (selected && metaKey) {
              if (this.isSingleSelectionMode()) {
                this._selection = null;
                this.selectionKeys = {};
                this.selectionChange.emit(null);
              } else {
                let selectionIndex = this.findIndexInSelection(rowData);
                this._selection = this.selection.filter((val, i) => i != selectionIndex);
                this.selectionChange.emit(this.selection);
                if (dataKeyValue) {
                  delete this.selectionKeys[dataKeyValue];
                }
              }
              this.onRowUnselect.emit({
                originalEvent: event.originalEvent,
                data: rowData,
                type: 'row'
              });
            } else {
              if (this.isSingleSelectionMode()) {
                this._selection = rowData;
                this.selectionChange.emit(rowData);
                if (dataKeyValue) {
                  this.selectionKeys = {};
                  this.selectionKeys[dataKeyValue] = 1;
                }
              } else if (this.isMultipleSelectionMode()) {
                if (metaKey) {
                  this._selection = this.selection || [];
                } else {
                  this._selection = [];
                  this.selectionKeys = {};
                }
                this._selection = [...this.selection, rowData];
                this.selectionChange.emit(this.selection);
                if (dataKeyValue) {
                  this.selectionKeys[dataKeyValue] = 1;
                }
              }
              this.onRowSelect.emit({
                originalEvent: event.originalEvent,
                data: rowData,
                type: 'row',
                index: rowIndex
              });
            }
          } else {
            if (this.selectionMode === 'single') {
              if (selected) {
                this._selection = null;
                this.selectionKeys = {};
                this.selectionChange.emit(this.selection);
                this.onRowUnselect.emit({
                  originalEvent: event.originalEvent,
                  data: rowData,
                  type: 'row',
                  index: rowIndex
                });
              } else {
                this._selection = rowData;
                this.selectionChange.emit(this.selection);
                this.onRowSelect.emit({
                  originalEvent: event.originalEvent,
                  data: rowData,
                  type: 'row',
                  index: rowIndex
                });
                if (dataKeyValue) {
                  this.selectionKeys = {};
                  this.selectionKeys[dataKeyValue] = 1;
                }
              }
            } else if (this.selectionMode === 'multiple') {
              if (selected) {
                let selectionIndex = this.findIndexInSelection(rowData);
                this._selection = this.selection.filter((val, i) => i != selectionIndex);
                this.selectionChange.emit(this.selection);
                this.onRowUnselect.emit({
                  originalEvent: event.originalEvent,
                  data: rowData,
                  type: 'row',
                  index: rowIndex
                });
                if (dataKeyValue) {
                  delete this.selectionKeys[dataKeyValue];
                }
              } else {
                this._selection = this.selection ? [...this.selection, rowData] : [rowData];
                this.selectionChange.emit(this.selection);
                this.onRowSelect.emit({
                  originalEvent: event.originalEvent,
                  data: rowData,
                  type: 'row',
                  index: rowIndex
                });
                if (dataKeyValue) {
                  this.selectionKeys[dataKeyValue] = 1;
                }
              }
            }
          }
        }
        this.tableService.onSelectionChange();
        if (this.isStateful()) {
          this.saveState();
        }
      }
      this.rowTouched = false;
    }
    handleRowTouchEnd(event) {
      this.rowTouched = true;
    }
    handleRowRightClick(event) {
      if (this.contextMenu) {
        const rowData = event.rowData;
        const rowIndex = event.rowIndex;
        if (this.contextMenuSelectionMode === 'separate') {
          this.contextMenuSelection = rowData;
          this.contextMenuSelectionChange.emit(rowData);
          this.onContextMenuSelect.emit({
            originalEvent: event.originalEvent,
            data: rowData,
            index: event.rowIndex
          });
          this.contextMenu.show(event.originalEvent);
          this.tableService.onContextMenu(rowData);
        } else if (this.contextMenuSelectionMode === 'joint') {
          this.preventSelectionSetterPropagation = true;
          let selected = this.isSelected(rowData);
          let dataKeyValue = this.dataKey ? String(primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(rowData, this.dataKey)) : null;
          if (!selected) {
            if (!this.isRowSelectable(rowData, rowIndex)) {
              return;
            }
            if (this.isSingleSelectionMode()) {
              this.selection = rowData;
              this.selectionChange.emit(rowData);
              if (dataKeyValue) {
                this.selectionKeys = {};
                this.selectionKeys[dataKeyValue] = 1;
              }
            } else if (this.isMultipleSelectionMode()) {
              this._selection = this.selection ? [...this.selection, rowData] : [rowData];
              this.selectionChange.emit(this.selection);
              if (dataKeyValue) {
                this.selectionKeys[dataKeyValue] = 1;
              }
            }
          }
          this.tableService.onSelectionChange();
          this.contextMenu.show(event.originalEvent);
          this.onContextMenuSelect.emit({
            originalEvent: event,
            data: rowData,
            index: event.rowIndex
          });
        }
      }
    }
    selectRange(event, rowIndex) {
      let rangeStart, rangeEnd;
      if (this.anchorRowIndex > rowIndex) {
        rangeStart = rowIndex;
        rangeEnd = this.anchorRowIndex;
      } else if (this.anchorRowIndex < rowIndex) {
        rangeStart = this.anchorRowIndex;
        rangeEnd = rowIndex;
      } else {
        rangeStart = rowIndex;
        rangeEnd = rowIndex;
      }
      if (this.lazy && this.paginator) {
        rangeStart -= this.first;
        rangeEnd -= this.first;
      }
      let rangeRowsData = [];
      for (let i = rangeStart; i <= rangeEnd; i++) {
        let rangeRowData = this.filteredValue ? this.filteredValue[i] : this.value[i];
        if (!this.isSelected(rangeRowData)) {
          if (!this.isRowSelectable(rangeRowData, rowIndex)) {
            continue;
          }
          rangeRowsData.push(rangeRowData);
          this._selection = [...this.selection, rangeRowData];
          let dataKeyValue = this.dataKey ? String(primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(rangeRowData, this.dataKey)) : null;
          if (dataKeyValue) {
            this.selectionKeys[dataKeyValue] = 1;
          }
        }
      }
      this.selectionChange.emit(this.selection);
      this.onRowSelect.emit({
        originalEvent: event,
        data: rangeRowsData,
        type: 'row'
      });
    }
    clearSelectionRange(event) {
      let rangeStart, rangeEnd;
      let rangeRowIndex = this.rangeRowIndex;
      let anchorRowIndex = this.anchorRowIndex;
      if (rangeRowIndex > anchorRowIndex) {
        rangeStart = this.anchorRowIndex;
        rangeEnd = this.rangeRowIndex;
      } else if (rangeRowIndex < anchorRowIndex) {
        rangeStart = this.rangeRowIndex;
        rangeEnd = this.anchorRowIndex;
      } else {
        rangeStart = this.rangeRowIndex;
        rangeEnd = this.rangeRowIndex;
      }
      for (let i = rangeStart; i <= rangeEnd; i++) {
        let rangeRowData = this.value[i];
        let selectionIndex = this.findIndexInSelection(rangeRowData);
        this._selection = this.selection.filter((val, i) => i != selectionIndex);
        let dataKeyValue = this.dataKey ? String(primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(rangeRowData, this.dataKey)) : null;
        if (dataKeyValue) {
          delete this.selectionKeys[dataKeyValue];
        }
        this.onRowUnselect.emit({
          originalEvent: event,
          data: rangeRowData,
          type: 'row'
        });
      }
    }
    isSelected(rowData) {
      if (rowData && this.selection) {
        if (this.dataKey) {
          return this.selectionKeys[primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(rowData, this.dataKey)] !== undefined;
        } else {
          if (Array.isArray(this.selection)) return this.findIndexInSelection(rowData) > -1;else return this.equals(rowData, this.selection);
        }
      }
      return false;
    }
    findIndexInSelection(rowData) {
      let index = -1;
      if (this.selection && this.selection.length) {
        for (let i = 0; i < this.selection.length; i++) {
          if (this.equals(rowData, this.selection[i])) {
            index = i;
            break;
          }
        }
      }
      return index;
    }
    isRowSelectable(data, index) {
      if (this.rowSelectable && !this.rowSelectable({
        data,
        index
      })) {
        return false;
      }
      return true;
    }
    toggleRowWithRadio(event, rowData) {
      this.preventSelectionSetterPropagation = true;
      if (this.selection != rowData) {
        if (!this.isRowSelectable(rowData, event.rowIndex)) {
          return;
        }
        this._selection = rowData;
        this.selectionChange.emit(this.selection);
        this.onRowSelect.emit({
          originalEvent: event.originalEvent,
          index: event.rowIndex,
          data: rowData,
          type: 'radiobutton'
        });
        if (this.dataKey) {
          this.selectionKeys = {};
          this.selectionKeys[String(primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(rowData, this.dataKey))] = 1;
        }
      } else {
        this._selection = null;
        this.selectionChange.emit(this.selection);
        this.onRowUnselect.emit({
          originalEvent: event.originalEvent,
          index: event.rowIndex,
          data: rowData,
          type: 'radiobutton'
        });
      }
      this.tableService.onSelectionChange();
      if (this.isStateful()) {
        this.saveState();
      }
    }
    toggleRowWithCheckbox(event, rowData) {
      this.selection = this.selection || [];
      let selected = this.isSelected(rowData);
      let dataKeyValue = this.dataKey ? String(primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(rowData, this.dataKey)) : null;
      this.preventSelectionSetterPropagation = true;
      if (selected) {
        let selectionIndex = this.findIndexInSelection(rowData);
        this._selection = this.selection.filter((val, i) => i != selectionIndex);
        this.selectionChange.emit(this.selection);
        this.onRowUnselect.emit({
          originalEvent: event.originalEvent,
          index: event.rowIndex,
          data: rowData,
          type: 'checkbox'
        });
        if (dataKeyValue) {
          delete this.selectionKeys[dataKeyValue];
        }
      } else {
        if (!this.isRowSelectable(rowData, event.rowIndex)) {
          return;
        }
        this._selection = this.selection ? [...this.selection, rowData] : [rowData];
        this.selectionChange.emit(this.selection);
        this.onRowSelect.emit({
          originalEvent: event.originalEvent,
          index: event.rowIndex,
          data: rowData,
          type: 'checkbox'
        });
        if (dataKeyValue) {
          this.selectionKeys[dataKeyValue] = 1;
        }
      }
      this.tableService.onSelectionChange();
      if (this.isStateful()) {
        this.saveState();
      }
    }
    toggleRowsWithCheckbox(event, check) {
      if (this._selectAll !== null) {
        this.selectAllChange.emit({
          originalEvent: event,
          checked: check
        });
      } else {
        const data = this.selectionPageOnly ? this.dataToRender(this.processedData) : this.processedData;
        let selection = this.selectionPageOnly && this._selection ? this._selection.filter(s => !data.some(d => this.equals(s, d))) : [];
        if (check) {
          selection = this.frozenValue ? [...selection, ...this.frozenValue, ...data] : [...selection, ...data];
          selection = this.rowSelectable ? selection.filter((data, index) => this.rowSelectable({
            data,
            index
          })) : selection;
        }
        this._selection = selection;
        this.preventSelectionSetterPropagation = true;
        this.updateSelectionKeys();
        this.selectionChange.emit(this._selection);
        this.tableService.onSelectionChange();
        this.onHeaderCheckboxToggle.emit({
          originalEvent: event,
          checked: check
        });
        if (this.isStateful()) {
          this.saveState();
        }
      }
    }
    equals(data1, data2) {
      return this.compareSelectionBy === 'equals' ? data1 === data2 : primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.equals(data1, data2, this.dataKey);
    }
    /* Legacy Filtering for custom elements */
    filter(value, field, matchMode) {
      if (this.filterTimeout) {
        clearTimeout(this.filterTimeout);
      }
      if (!this.isFilterBlank(value)) {
        this.filters[field] = {
          value: value,
          matchMode: matchMode
        };
      } else if (this.filters[field]) {
        delete this.filters[field];
      }
      this.filterTimeout = setTimeout(() => {
        this._filter();
        this.filterTimeout = null;
      }, this.filterDelay);
      this.anchorRowIndex = null;
    }
    filterGlobal(value, matchMode) {
      this.filter(value, 'global', matchMode);
    }
    isFilterBlank(filter) {
      if (filter !== null && filter !== undefined) {
        if (typeof filter === 'string' && filter.trim().length == 0 || Array.isArray(filter) && filter.length == 0) return true;else return false;
      }
      return true;
    }
    _filter() {
      if (!this.restoringFilter) {
        this.first = 0;
        this.firstChange.emit(this.first);
      }
      if (this.lazy) {
        this.onLazyLoad.emit(this.createLazyLoadMetadata());
      } else {
        if (!this.value) {
          return;
        }
        if (!this.hasFilter()) {
          this.filteredValue = null;
          if (this.paginator) {
            this.totalRecords = this.value ? this.value.length : 0;
          }
        } else {
          let globalFilterFieldsArray;
          if (this.filters['global']) {
            if (!this.columns && !this.globalFilterFields) throw new Error('Global filtering requires dynamic columns or globalFilterFields to be defined.');else globalFilterFieldsArray = this.globalFilterFields || this.columns;
          }
          this.filteredValue = [];
          for (let i = 0; i < this.value.length; i++) {
            let localMatch = true;
            let globalMatch = false;
            let localFiltered = false;
            for (let prop in this.filters) {
              if (this.filters.hasOwnProperty(prop) && prop !== 'global') {
                localFiltered = true;
                let filterField = prop;
                let filterMeta = this.filters[filterField];
                if (Array.isArray(filterMeta)) {
                  for (let meta of filterMeta) {
                    localMatch = this.executeLocalFilter(filterField, this.value[i], meta);
                    if (meta.operator === primeng_api__WEBPACK_IMPORTED_MODULE_5__.FilterOperator.OR && localMatch || meta.operator === primeng_api__WEBPACK_IMPORTED_MODULE_5__.FilterOperator.AND && !localMatch) {
                      break;
                    }
                  }
                } else {
                  localMatch = this.executeLocalFilter(filterField, this.value[i], filterMeta);
                }
                if (!localMatch) {
                  break;
                }
              }
            }
            if (this.filters['global'] && !globalMatch && globalFilterFieldsArray) {
              for (let j = 0; j < globalFilterFieldsArray.length; j++) {
                let globalFilterField = globalFilterFieldsArray[j].field || globalFilterFieldsArray[j];
                globalMatch = this.filterService.filters[this.filters['global'].matchMode](primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(this.value[i], globalFilterField), this.filters['global'].value, this.filterLocale);
                if (globalMatch) {
                  break;
                }
              }
            }
            let matches;
            if (this.filters['global']) {
              matches = localFiltered ? localFiltered && localMatch && globalMatch : globalMatch;
            } else {
              matches = localFiltered && localMatch;
            }
            if (matches) {
              this.filteredValue.push(this.value[i]);
            }
          }
          if (this.filteredValue.length === this.value.length) {
            this.filteredValue = null;
          }
          if (this.paginator) {
            this.totalRecords = this.filteredValue ? this.filteredValue.length : this.value ? this.value.length : 0;
          }
        }
      }
      this.onFilter.emit({
        filters: this.filters,
        filteredValue: this.filteredValue || this.value
      });
      this.tableService.onValueChange(this.value);
      if (this.isStateful() && !this.restoringFilter) {
        this.saveState();
      }
      if (this.restoringFilter) {
        this.restoringFilter = false;
      }
      this.cd.markForCheck();
      if (this.scrollable) {
        this.resetScrollTop();
      }
    }
    executeLocalFilter(field, rowData, filterMeta) {
      let filterValue = filterMeta.value;
      let filterMatchMode = filterMeta.matchMode || primeng_api__WEBPACK_IMPORTED_MODULE_5__.FilterMatchMode.STARTS_WITH;
      let dataFieldValue = primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(rowData, field);
      let filterConstraint = this.filterService.filters[filterMatchMode];
      return filterConstraint(dataFieldValue, filterValue, this.filterLocale);
    }
    hasFilter() {
      let empty = true;
      for (let prop in this.filters) {
        if (this.filters.hasOwnProperty(prop)) {
          empty = false;
          break;
        }
      }
      return !empty;
    }
    createLazyLoadMetadata() {
      return {
        first: this.first,
        rows: this.rows,
        sortField: this.sortField,
        sortOrder: this.sortOrder,
        filters: this.filters,
        globalFilter: this.filters && this.filters['global'] ? this.filters['global'].value : null,
        multiSortMeta: this.multiSortMeta,
        forceUpdate: () => this.cd.detectChanges()
      };
    }
    clear() {
      this._sortField = null;
      this._sortOrder = this.defaultSortOrder;
      this._multiSortMeta = null;
      this.tableService.onSort(null);
      this.clearFilterValues();
      this.filteredValue = null;
      this.first = 0;
      this.firstChange.emit(this.first);
      if (this.lazy) {
        this.onLazyLoad.emit(this.createLazyLoadMetadata());
      } else {
        this.totalRecords = this._value ? this._value.length : 0;
      }
    }
    clearFilterValues() {
      for (const [, filterMetadata] of Object.entries(this.filters)) {
        if (Array.isArray(filterMetadata)) {
          for (let filter of filterMetadata) {
            filter.value = null;
          }
        } else if (filterMetadata) {
          filterMetadata.value = null;
        }
      }
    }
    reset() {
      this.clear();
    }
    getExportHeader(column) {
      return column[this.exportHeader] || column.header || column.field;
    }
    /**
     * Data export method.
     * @param {ExportCSVOptions} object - Export options.
     * @group Method
     */
    exportCSV(options) {
      let data;
      let csv = '';
      let columns = this.columns;
      if (options && options.selectionOnly) {
        data = this.selection || [];
      } else if (options && options.allValues) {
        data = this.value || [];
      } else {
        data = this.filteredValue || this.value;
        if (this.frozenValue) {
          data = data ? [...this.frozenValue, ...data] : this.frozenValue;
        }
      }
      const exportableColumns = columns.filter(column => column.exportable !== false && column.field);
      //headers
      csv += exportableColumns.map(column => '"' + this.getExportHeader(column) + '"').join(this.csvSeparator);
      //body
      const body = data.map(record => exportableColumns.map(column => {
        let cellData = primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(record, column.field);
        if (cellData != null) {
          if (this.exportFunction) {
            cellData = this.exportFunction({
              data: cellData,
              field: column.field
            });
          } else cellData = String(cellData).replace(/"/g, '""');
        } else cellData = '';
        return '"' + cellData + '"';
      }).join(this.csvSeparator)).join('\n');
      if (body.length) {
        csv += '\n' + body;
      }
      let blob = new Blob([new Uint8Array([0xef, 0xbb, 0xbf]), csv], {
        type: 'text/csv;charset=utf-8;'
      });
      let link = this.renderer.createElement('a');
      link.style.display = 'none';
      this.renderer.appendChild(this.document.body, link);
      if (link.download !== undefined) {
        link.setAttribute('href', URL.createObjectURL(blob));
        link.setAttribute('download', this.exportFilename + '.csv');
        link.click();
      } else {
        csv = 'data:text/csv;charset=utf-8,' + csv;
        this.window.open(encodeURI(csv));
      }
      this.renderer.removeChild(this.document.body, link);
    }
    onLazyItemLoad(event) {
      this.onLazyLoad.emit({
        ...this.createLazyLoadMetadata(),
        ...event,
        rows: event.last - event.first
      });
    }
    /**
     * Resets scroll to top.
     * @group Method
     */
    resetScrollTop() {
      if (this.virtualScroll) this.scrollToVirtualIndex(0);else this.scrollTo({
        top: 0
      });
    }
    /**
     * Scrolls to given index when using virtual scroll.
     * @param {number} index - index of the element.
     * @group Method
     */
    scrollToVirtualIndex(index) {
      this.scroller && this.scroller.scrollToIndex(index);
    }
    /**
     * Scrolls to given index.
     * @param {ScrollToOptions} options - scroll options.
     * @group Method
     */
    scrollTo(options) {
      if (this.virtualScroll) {
        this.scroller?.scrollTo(options);
      } else if (this.wrapperViewChild && this.wrapperViewChild.nativeElement) {
        if (this.wrapperViewChild.nativeElement.scrollTo) {
          this.wrapperViewChild.nativeElement.scrollTo(options);
        } else {
          this.wrapperViewChild.nativeElement.scrollLeft = options.left;
          this.wrapperViewChild.nativeElement.scrollTop = options.top;
        }
      }
    }
    updateEditingCell(cell, data, field, index) {
      this.editingCell = cell;
      this.editingCellData = data;
      this.editingCellField = field;
      this.editingCellRowIndex = index;
      this.bindDocumentEditListener();
    }
    isEditingCellValid() {
      return this.editingCell && primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.find(this.editingCell, '.ng-invalid.ng-dirty').length === 0;
    }
    bindDocumentEditListener() {
      if (!this.documentEditListener) {
        this.documentEditListener = this.renderer.listen(this.document, 'click', event => {
          if (this.editingCell && !this.selfClick && this.isEditingCellValid()) {
            primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.removeClass(this.editingCell, 'p-cell-editing');
            this.editingCell = null;
            this.onEditComplete.emit({
              field: this.editingCellField,
              data: this.editingCellData,
              originalEvent: event,
              index: this.editingCellRowIndex
            });
            this.editingCellField = null;
            this.editingCellData = null;
            this.editingCellRowIndex = null;
            this.unbindDocumentEditListener();
            this.cd.markForCheck();
            if (this.overlaySubscription) {
              this.overlaySubscription.unsubscribe();
            }
          }
          this.selfClick = false;
        });
      }
    }
    unbindDocumentEditListener() {
      if (this.documentEditListener) {
        this.documentEditListener();
        this.documentEditListener = null;
      }
    }
    initRowEdit(rowData) {
      let dataKeyValue = String(primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(rowData, this.dataKey));
      this.editingRowKeys[dataKeyValue] = true;
    }
    saveRowEdit(rowData, rowElement) {
      if (primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.find(rowElement, '.ng-invalid.ng-dirty').length === 0) {
        let dataKeyValue = String(primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(rowData, this.dataKey));
        delete this.editingRowKeys[dataKeyValue];
      }
    }
    cancelRowEdit(rowData) {
      let dataKeyValue = String(primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(rowData, this.dataKey));
      delete this.editingRowKeys[dataKeyValue];
    }
    toggleRow(rowData, event) {
      if (!this.dataKey && !this.groupRowsBy) {
        throw new Error('dataKey or groupRowsBy must be defined to use row expansion');
      }
      let dataKeyValue = this.groupRowsBy ? String(primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(rowData, this.groupRowsBy)) : String(primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(rowData, this.dataKey));
      if (this.expandedRowKeys[dataKeyValue] != null) {
        delete this.expandedRowKeys[dataKeyValue];
        this.onRowCollapse.emit({
          originalEvent: event,
          data: rowData
        });
      } else {
        if (this.rowExpandMode === 'single') {
          this.expandedRowKeys = {};
        }
        this.expandedRowKeys[dataKeyValue] = true;
        this.onRowExpand.emit({
          originalEvent: event,
          data: rowData
        });
      }
      if (event) {
        event.preventDefault();
      }
      if (this.isStateful()) {
        this.saveState();
      }
    }
    isRowExpanded(rowData) {
      return this.groupRowsBy ? this.expandedRowKeys[String(primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(rowData, this.groupRowsBy))] === true : this.expandedRowKeys[String(primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(rowData, this.dataKey))] === true;
    }
    isRowEditing(rowData) {
      return this.editingRowKeys[String(primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(rowData, this.dataKey))] === true;
    }
    isSingleSelectionMode() {
      return this.selectionMode === 'single';
    }
    isMultipleSelectionMode() {
      return this.selectionMode === 'multiple';
    }
    onColumnResizeBegin(event) {
      let containerLeft = primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.getOffset(this.containerViewChild?.nativeElement).left;
      this.resizeColumnElement = event.target.parentElement;
      this.columnResizing = true;
      if (event.type == 'touchstart') {
        this.lastResizerHelperX = event.changedTouches[0].clientX - containerLeft + this.containerViewChild?.nativeElement.scrollLeft;
      } else {
        this.lastResizerHelperX = event.pageX - containerLeft + this.containerViewChild?.nativeElement.scrollLeft;
      }
      this.onColumnResize(event);
      event.preventDefault();
    }
    onColumnResize(event) {
      let containerLeft = primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.getOffset(this.containerViewChild?.nativeElement).left;
      primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.addClass(this.containerViewChild?.nativeElement, 'p-unselectable-text');
      this.resizeHelperViewChild.nativeElement.style.height = this.containerViewChild?.nativeElement.offsetHeight + 'px';
      this.resizeHelperViewChild.nativeElement.style.top = 0 + 'px';
      if (event.type == 'touchmove') {
        this.resizeHelperViewChild.nativeElement.style.left = event.changedTouches[0].clientX - containerLeft + this.containerViewChild?.nativeElement.scrollLeft + 'px';
      } else {
        this.resizeHelperViewChild.nativeElement.style.left = event.pageX - containerLeft + this.containerViewChild?.nativeElement.scrollLeft + 'px';
      }
      this.resizeHelperViewChild.nativeElement.style.display = 'block';
    }
    onColumnResizeEnd() {
      let delta = this.resizeHelperViewChild?.nativeElement.offsetLeft - this.lastResizerHelperX;
      let columnWidth = this.resizeColumnElement.offsetWidth;
      let newColumnWidth = columnWidth + delta;
      let minWidth = this.resizeColumnElement.style.minWidth.replace(/[^\d.]/g, '') || 15;
      if (newColumnWidth >= minWidth) {
        if (this.columnResizeMode === 'fit') {
          let nextColumn = this.resizeColumnElement.nextElementSibling;
          let nextColumnWidth = nextColumn.offsetWidth - delta;
          if (newColumnWidth > 15 && nextColumnWidth > 15) {
            this.resizeTableCells(newColumnWidth, nextColumnWidth);
          }
        } else if (this.columnResizeMode === 'expand') {
          this._initialColWidths = this._totalTableWidth();
          let tableWidth = this.tableViewChild?.nativeElement.offsetWidth + delta;
          this.setResizeTableWidth(tableWidth + 'px');
          this.resizeTableCells(newColumnWidth, null);
        }
        this.onColResize.emit({
          element: this.resizeColumnElement,
          delta: delta
        });
        if (this.isStateful()) {
          this.saveState();
        }
      }
      this.resizeHelperViewChild.nativeElement.style.display = 'none';
      primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.removeClass(this.containerViewChild?.nativeElement, 'p-unselectable-text');
    }
    _totalTableWidth() {
      let widths = [];
      const tableHead = primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.findSingle(this.containerViewChild.nativeElement, '.p-datatable-thead');
      let headers = primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.find(tableHead, 'tr > th');
      headers.forEach(header => widths.push(primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.getOuterWidth(header)));
      return widths;
    }
    onColumnDragStart(event, columnElement) {
      this.reorderIconWidth = primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.getHiddenElementOuterWidth(this.reorderIndicatorUpViewChild?.nativeElement);
      this.reorderIconHeight = primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.getHiddenElementOuterHeight(this.reorderIndicatorDownViewChild?.nativeElement);
      this.draggedColumn = columnElement;
      event.dataTransfer.setData('text', 'b'); // For firefox
    }
    onColumnDragEnter(event, dropHeader) {
      if (this.reorderableColumns && this.draggedColumn && dropHeader) {
        event.preventDefault();
        let containerOffset = primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.getOffset(this.containerViewChild?.nativeElement);
        let dropHeaderOffset = primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.getOffset(dropHeader);
        if (this.draggedColumn != dropHeader) {
          let dragIndex = primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.indexWithinGroup(this.draggedColumn, 'preorderablecolumn');
          let dropIndex = primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.indexWithinGroup(dropHeader, 'preorderablecolumn');
          let targetLeft = dropHeaderOffset.left - containerOffset.left;
          let targetTop = containerOffset.top - dropHeaderOffset.top;
          let columnCenter = dropHeaderOffset.left + dropHeader.offsetWidth / 2;
          this.reorderIndicatorUpViewChild.nativeElement.style.top = dropHeaderOffset.top - containerOffset.top - (this.reorderIconHeight - 1) + 'px';
          this.reorderIndicatorDownViewChild.nativeElement.style.top = dropHeaderOffset.top - containerOffset.top + dropHeader.offsetHeight + 'px';
          if (event.pageX > columnCenter) {
            this.reorderIndicatorUpViewChild.nativeElement.style.left = targetLeft + dropHeader.offsetWidth - Math.ceil(this.reorderIconWidth / 2) + 'px';
            this.reorderIndicatorDownViewChild.nativeElement.style.left = targetLeft + dropHeader.offsetWidth - Math.ceil(this.reorderIconWidth / 2) + 'px';
            this.dropPosition = 1;
          } else {
            this.reorderIndicatorUpViewChild.nativeElement.style.left = targetLeft - Math.ceil(this.reorderIconWidth / 2) + 'px';
            this.reorderIndicatorDownViewChild.nativeElement.style.left = targetLeft - Math.ceil(this.reorderIconWidth / 2) + 'px';
            this.dropPosition = -1;
          }
          this.reorderIndicatorUpViewChild.nativeElement.style.display = 'block';
          this.reorderIndicatorDownViewChild.nativeElement.style.display = 'block';
        } else {
          event.dataTransfer.dropEffect = 'none';
        }
      }
    }
    onColumnDragLeave(event) {
      if (this.reorderableColumns && this.draggedColumn) {
        event.preventDefault();
      }
    }
    onColumnDrop(event, dropColumn) {
      event.preventDefault();
      if (this.draggedColumn) {
        let dragIndex = primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.indexWithinGroup(this.draggedColumn, 'preorderablecolumn');
        let dropIndex = primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.indexWithinGroup(dropColumn, 'preorderablecolumn');
        let allowDrop = dragIndex != dropIndex;
        if (allowDrop && (dropIndex - dragIndex == 1 && this.dropPosition === -1 || dragIndex - dropIndex == 1 && this.dropPosition === 1)) {
          allowDrop = false;
        }
        if (allowDrop && dropIndex < dragIndex && this.dropPosition === 1) {
          dropIndex = dropIndex + 1;
        }
        if (allowDrop && dropIndex > dragIndex && this.dropPosition === -1) {
          dropIndex = dropIndex - 1;
        }
        if (allowDrop) {
          primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.reorderArray(this.columns, dragIndex, dropIndex);
          this.onColReorder.emit({
            dragIndex: dragIndex,
            dropIndex: dropIndex,
            columns: this.columns
          });
          if (this.isStateful()) {
            this.zone.runOutsideAngular(() => {
              setTimeout(() => {
                this.saveState();
              });
            });
          }
        }
        if (this.resizableColumns && this.resizeColumnElement) {
          let width = this.columnResizeMode === 'expand' ? this._initialColWidths : this._totalTableWidth();
          primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.reorderArray(width, dragIndex + 1, dropIndex + 1);
          this.updateStyleElement(width, dragIndex, null, null);
        }
        this.reorderIndicatorUpViewChild.nativeElement.style.display = 'none';
        this.reorderIndicatorDownViewChild.nativeElement.style.display = 'none';
        this.draggedColumn.draggable = false;
        this.draggedColumn = null;
        this.dropPosition = null;
      }
    }
    resizeTableCells(newColumnWidth, nextColumnWidth) {
      let colIndex = primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.index(this.resizeColumnElement);
      let width = this.columnResizeMode === 'expand' ? this._initialColWidths : this._totalTableWidth();
      this.updateStyleElement(width, colIndex, newColumnWidth, nextColumnWidth);
    }
    updateStyleElement(width, colIndex, newColumnWidth, nextColumnWidth) {
      this.destroyStyleElement();
      this.createStyleElement();
      let innerHTML = '';
      width.forEach((width, index) => {
        let colWidth = index === colIndex ? newColumnWidth : nextColumnWidth && index === colIndex + 1 ? nextColumnWidth : width;
        let style = `width: ${colWidth}px !important; max-width: ${colWidth}px !important;`;
        innerHTML += `
                #${this.id}-table > .p-datatable-thead > tr > th:nth-child(${index + 1}),
                #${this.id}-table > .p-datatable-tbody > tr > td:nth-child(${index + 1}),
                #${this.id}-table > .p-datatable-tfoot > tr > td:nth-child(${index + 1}) {
                    ${style}
                }
            `;
      });
      this.renderer.setProperty(this.styleElement, 'innerHTML', innerHTML);
    }
    onRowDragStart(event, index) {
      this.rowDragging = true;
      this.draggedRowIndex = index;
      event.dataTransfer.setData('text', 'b'); // For firefox
    }
    onRowDragOver(event, index, rowElement) {
      if (this.rowDragging && this.draggedRowIndex !== index) {
        let rowY = primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.getOffset(rowElement).top;
        let pageY = event.pageY;
        let rowMidY = rowY + primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.getOuterHeight(rowElement) / 2;
        let prevRowElement = rowElement.previousElementSibling;
        if (pageY < rowMidY) {
          primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.removeClass(rowElement, 'p-datatable-dragpoint-bottom');
          this.droppedRowIndex = index;
          if (prevRowElement) primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.addClass(prevRowElement, 'p-datatable-dragpoint-bottom');else primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.addClass(rowElement, 'p-datatable-dragpoint-top');
        } else {
          if (prevRowElement) primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.removeClass(prevRowElement, 'p-datatable-dragpoint-bottom');else primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.addClass(rowElement, 'p-datatable-dragpoint-top');
          this.droppedRowIndex = index + 1;
          primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.addClass(rowElement, 'p-datatable-dragpoint-bottom');
        }
      }
    }
    onRowDragLeave(event, rowElement) {
      let prevRowElement = rowElement.previousElementSibling;
      if (prevRowElement) {
        primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.removeClass(prevRowElement, 'p-datatable-dragpoint-bottom');
      }
      primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.removeClass(rowElement, 'p-datatable-dragpoint-bottom');
      primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.removeClass(rowElement, 'p-datatable-dragpoint-top');
    }
    onRowDragEnd(event) {
      this.rowDragging = false;
      this.draggedRowIndex = null;
      this.droppedRowIndex = null;
    }
    onRowDrop(event, rowElement) {
      if (this.droppedRowIndex != null) {
        let dropIndex = this.draggedRowIndex > this.droppedRowIndex ? this.droppedRowIndex : this.droppedRowIndex === 0 ? 0 : this.droppedRowIndex - 1;
        primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.reorderArray(this.value, this.draggedRowIndex, dropIndex);
        if (this.virtualScroll) {
          // TODO: Check
          this._value = [...this._value];
        }
        this.onRowReorder.emit({
          dragIndex: this.draggedRowIndex,
          dropIndex: dropIndex
        });
      }
      //cleanup
      this.onRowDragLeave(event, rowElement);
      this.onRowDragEnd(event);
    }
    isEmpty() {
      let data = this.filteredValue || this.value;
      return data == null || data.length == 0;
    }
    getBlockableElement() {
      return this.el.nativeElement.children[0];
    }
    getStorage() {
      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.isPlatformBrowser)(this.platformId)) {
        switch (this.stateStorage) {
          case 'local':
            return window.localStorage;
          case 'session':
            return window.sessionStorage;
          default:
            throw new Error(this.stateStorage + ' is not a valid value for the state storage, supported values are "local" and "session".');
        }
      } else {
        throw new Error('Browser storage is not available in the server side.');
      }
    }
    isStateful() {
      return this.stateKey != null;
    }
    saveState() {
      const storage = this.getStorage();
      let state = {};
      if (this.paginator) {
        state.first = this.first;
        state.rows = this.rows;
      }
      if (this.sortField) {
        state.sortField = this.sortField;
        state.sortOrder = this.sortOrder;
      }
      if (this.multiSortMeta) {
        state.multiSortMeta = this.multiSortMeta;
      }
      if (this.hasFilter()) {
        state.filters = this.filters;
      }
      if (this.resizableColumns) {
        this.saveColumnWidths(state);
      }
      if (this.reorderableColumns) {
        this.saveColumnOrder(state);
      }
      if (this.selection) {
        state.selection = this.selection;
      }
      if (Object.keys(this.expandedRowKeys).length) {
        state.expandedRowKeys = this.expandedRowKeys;
      }
      storage.setItem(this.stateKey, JSON.stringify(state));
      this.onStateSave.emit(state);
    }
    clearState() {
      const storage = this.getStorage();
      if (this.stateKey) {
        storage.removeItem(this.stateKey);
      }
    }
    restoreState() {
      const storage = this.getStorage();
      const stateString = storage.getItem(this.stateKey);
      const dateFormat = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/;
      const reviver = function (key, value) {
        if (typeof value === 'string' && dateFormat.test(value)) {
          return new Date(value);
        }
        return value;
      };
      if (stateString) {
        let state = JSON.parse(stateString, reviver);
        if (this.paginator) {
          if (this.first !== undefined) {
            this.first = state.first;
            this.firstChange.emit(this.first);
          }
          if (this.rows !== undefined) {
            this.rows = state.rows;
            this.rowsChange.emit(this.rows);
          }
        }
        if (state.sortField) {
          this.restoringSort = true;
          this._sortField = state.sortField;
          this._sortOrder = state.sortOrder;
        }
        if (state.multiSortMeta) {
          this.restoringSort = true;
          this._multiSortMeta = state.multiSortMeta;
        }
        if (state.filters) {
          this.restoringFilter = true;
          this.filters = state.filters;
        }
        if (this.resizableColumns) {
          this.columnWidthsState = state.columnWidths;
          this.tableWidthState = state.tableWidth;
        }
        // if (this.reorderableColumns) {
        //     this.restoreColumnOrder();
        // }
        if (state.expandedRowKeys) {
          this.expandedRowKeys = state.expandedRowKeys;
        }
        if (state.selection) {
          Promise.resolve(null).then(() => this.selectionChange.emit(state.selection));
        }
        this.stateRestored = true;
        this.onStateRestore.emit(state);
      }
    }
    saveColumnWidths(state) {
      let widths = [];
      let headers = primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.find(this.containerViewChild?.nativeElement, '.p-datatable-thead > tr > th');
      headers.forEach(header => widths.push(primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.getOuterWidth(header)));
      state.columnWidths = widths.join(',');
      if (this.columnResizeMode === 'expand') {
        state.tableWidth = primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.getOuterWidth(this.tableViewChild?.nativeElement);
      }
    }
    setResizeTableWidth(width) {
      this.tableViewChild.nativeElement.style.width = width;
      this.tableViewChild.nativeElement.style.minWidth = width;
    }
    restoreColumnWidths() {
      if (this.columnWidthsState) {
        let widths = this.columnWidthsState.split(',');
        if (this.columnResizeMode === 'expand' && this.tableWidthState) {
          this.setResizeTableWidth(this.tableWidthState + 'px');
        }
        if (primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.isNotEmpty(widths)) {
          this.createStyleElement();
          let innerHTML = '';
          widths.forEach((width, index) => {
            let style = `width: ${width}px !important; max-width: ${width}px !important`;
            innerHTML += `
                        #${this.id}-table > .p-datatable-thead > tr > th:nth-child(${index + 1}),
                        #${this.id}-table > .p-datatable-tbody > tr > td:nth-child(${index + 1}),
                        #${this.id}-table > .p-datatable-tfoot > tr > td:nth-child(${index + 1}) {
                            ${style}
                        }
                    `;
          });
          this.styleElement.innerHTML = innerHTML;
        }
      }
    }
    saveColumnOrder(state) {
      if (this.columns) {
        let columnOrder = [];
        this.columns.map(column => {
          columnOrder.push(column.field || column.key);
        });
        state.columnOrder = columnOrder;
      }
    }
    restoreColumnOrder() {
      const storage = this.getStorage();
      const stateString = storage.getItem(this.stateKey);
      if (stateString) {
        let state = JSON.parse(stateString);
        let columnOrder = state.columnOrder;
        if (columnOrder) {
          let reorderedColumns = [];
          columnOrder.map(key => {
            let col = this.findColumnByKey(key);
            if (col) {
              reorderedColumns.push(col);
            }
          });
          this.columnOrderStateRestored = true;
          this.columns = reorderedColumns;
        }
      }
    }
    findColumnByKey(key) {
      if (this.columns) {
        for (let col of this.columns) {
          if (col.key === key || col.field === key) return col;else continue;
        }
      } else {
        return null;
      }
    }
    createStyleElement() {
      this.styleElement = this.renderer.createElement('style');
      this.styleElement.type = 'text/css';
      this.renderer.appendChild(this.document.head, this.styleElement);
      primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.setAttribute(this.styleElement, 'nonce', this.config?.csp()?.nonce);
    }
    getGroupRowsMeta() {
      return {
        field: this.groupRowsBy,
        order: this.groupRowsByOrder
      };
    }
    createResponsiveStyle() {
      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.isPlatformBrowser)(this.platformId)) {
        if (!this.responsiveStyleElement) {
          this.responsiveStyleElement = this.renderer.createElement('style');
          this.responsiveStyleElement.type = 'text/css';
          this.renderer.appendChild(this.document.head, this.responsiveStyleElement);
          let innerHTML = `
    @media screen and (max-width: ${this.breakpoint}) {
        #${this.id}-table > .p-datatable-thead > tr > th,
        #${this.id}-table > .p-datatable-tfoot > tr > td {
            display: none !important;
        }

        #${this.id}-table > .p-datatable-tbody > tr > td {
            display: flex;
            width: 100% !important;
            align-items: center;
            justify-content: space-between;
        }

        #${this.id}-table > .p-datatable-tbody > tr > td:not(:last-child) {
            border: 0 none;
        }

        #${this.id}.p-datatable-gridlines > .p-datatable-wrapper > .p-datatable-table > .p-datatable-tbody > tr > td:last-child {
            border-top: 0;
            border-right: 0;
            border-left: 0;
        }

        #${this.id}-table > .p-datatable-tbody > tr > td > .p-column-title {
            display: block;
        }
    }
    `;
          this.renderer.setProperty(this.responsiveStyleElement, 'innerHTML', innerHTML);
        }
      }
    }
    destroyResponsiveStyle() {
      if (this.responsiveStyleElement) {
        this.renderer.removeChild(this.document.head, this.responsiveStyleElement);
        this.responsiveStyleElement = null;
      }
    }
    destroyStyleElement() {
      if (this.styleElement) {
        this.renderer.removeChild(this.document.head, this.styleElement);
        this.styleElement = null;
      }
    }
    ngOnDestroy() {
      this.unbindDocumentEditListener();
      this.editingCell = null;
      this.initialized = null;
      this.destroyStyleElement();
      this.destroyResponsiveStyle();
    }
    getPaginatorStyleClasses(className) {
      return [this.paginatorStyleClass, className].filter(c => !!c).join(' ').trim();
    }
    static ɵfac = function Table_Factory(t) {
      return new (t || Table)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TableService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_5__.FilterService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_5__.OverlayService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_5__.PrimeNGConfig));
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Table,
      selectors: [["p-table"]],
      contentQueries: function Table_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_5__.PrimeTemplate, 4);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
        }
      },
      viewQuery: function Table_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c4, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c5, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c6, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c7, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c8, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.containerViewChild = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.resizeHelperViewChild = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.reorderIndicatorUpViewChild = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.reorderIndicatorDownViewChild = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.wrapperViewChild = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tableViewChild = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tableHeaderViewChild = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tableFooterViewChild = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.scroller = _t.first);
        }
      },
      hostAttrs: [1, "p-element"],
      inputs: {
        frozenColumns: "frozenColumns",
        frozenValue: "frozenValue",
        style: "style",
        styleClass: "styleClass",
        tableStyle: "tableStyle",
        tableStyleClass: "tableStyleClass",
        paginator: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "paginator", "paginator", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        pageLinks: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "pageLinks", "pageLinks", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute],
        rowsPerPageOptions: "rowsPerPageOptions",
        alwaysShowPaginator: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "alwaysShowPaginator", "alwaysShowPaginator", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        paginatorPosition: "paginatorPosition",
        paginatorStyleClass: "paginatorStyleClass",
        paginatorDropdownAppendTo: "paginatorDropdownAppendTo",
        paginatorDropdownScrollHeight: "paginatorDropdownScrollHeight",
        currentPageReportTemplate: "currentPageReportTemplate",
        showCurrentPageReport: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "showCurrentPageReport", "showCurrentPageReport", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        showJumpToPageDropdown: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "showJumpToPageDropdown", "showJumpToPageDropdown", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        showJumpToPageInput: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "showJumpToPageInput", "showJumpToPageInput", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        showFirstLastIcon: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "showFirstLastIcon", "showFirstLastIcon", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        showPageLinks: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "showPageLinks", "showPageLinks", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        defaultSortOrder: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "defaultSortOrder", "defaultSortOrder", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute],
        sortMode: "sortMode",
        resetPageOnSort: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "resetPageOnSort", "resetPageOnSort", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        selectionMode: "selectionMode",
        selectionPageOnly: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "selectionPageOnly", "selectionPageOnly", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        contextMenuSelection: "contextMenuSelection",
        contextMenuSelectionMode: "contextMenuSelectionMode",
        dataKey: "dataKey",
        metaKeySelection: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "metaKeySelection", "metaKeySelection", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        rowSelectable: "rowSelectable",
        rowTrackBy: "rowTrackBy",
        lazy: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "lazy", "lazy", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        lazyLoadOnInit: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "lazyLoadOnInit", "lazyLoadOnInit", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        compareSelectionBy: "compareSelectionBy",
        csvSeparator: "csvSeparator",
        exportFilename: "exportFilename",
        filters: "filters",
        globalFilterFields: "globalFilterFields",
        filterDelay: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "filterDelay", "filterDelay", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute],
        filterLocale: "filterLocale",
        expandedRowKeys: "expandedRowKeys",
        editingRowKeys: "editingRowKeys",
        rowExpandMode: "rowExpandMode",
        scrollable: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "scrollable", "scrollable", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        scrollDirection: "scrollDirection",
        rowGroupMode: "rowGroupMode",
        scrollHeight: "scrollHeight",
        virtualScroll: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "virtualScroll", "virtualScroll", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        virtualScrollItemSize: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "virtualScrollItemSize", "virtualScrollItemSize", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute],
        virtualScrollOptions: "virtualScrollOptions",
        virtualScrollDelay: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "virtualScrollDelay", "virtualScrollDelay", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute],
        frozenWidth: "frozenWidth",
        responsive: "responsive",
        contextMenu: "contextMenu",
        resizableColumns: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "resizableColumns", "resizableColumns", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        columnResizeMode: "columnResizeMode",
        reorderableColumns: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "reorderableColumns", "reorderableColumns", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        loading: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "loading", "loading", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        loadingIcon: "loadingIcon",
        showLoader: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "showLoader", "showLoader", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        rowHover: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "rowHover", "rowHover", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        customSort: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "customSort", "customSort", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        showInitialSortBadge: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "showInitialSortBadge", "showInitialSortBadge", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        autoLayout: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "autoLayout", "autoLayout", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        exportFunction: "exportFunction",
        exportHeader: "exportHeader",
        stateKey: "stateKey",
        stateStorage: "stateStorage",
        editMode: "editMode",
        groupRowsBy: "groupRowsBy",
        groupRowsByOrder: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "groupRowsByOrder", "groupRowsByOrder", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute],
        responsiveLayout: "responsiveLayout",
        breakpoint: "breakpoint",
        paginatorLocale: "paginatorLocale",
        value: "value",
        columns: "columns",
        first: "first",
        rows: "rows",
        totalRecords: "totalRecords",
        sortField: "sortField",
        sortOrder: "sortOrder",
        multiSortMeta: "multiSortMeta",
        selection: "selection",
        selectAll: "selectAll",
        virtualRowHeight: "virtualRowHeight"
      },
      outputs: {
        contextMenuSelectionChange: "contextMenuSelectionChange",
        selectAllChange: "selectAllChange",
        selectionChange: "selectionChange",
        onRowSelect: "onRowSelect",
        onRowUnselect: "onRowUnselect",
        onPage: "onPage",
        onSort: "onSort",
        onFilter: "onFilter",
        onLazyLoad: "onLazyLoad",
        onRowExpand: "onRowExpand",
        onRowCollapse: "onRowCollapse",
        onContextMenuSelect: "onContextMenuSelect",
        onColResize: "onColResize",
        onColReorder: "onColReorder",
        onRowReorder: "onRowReorder",
        onEditInit: "onEditInit",
        onEditComplete: "onEditComplete",
        onEditCancel: "onEditCancel",
        onHeaderCheckboxToggle: "onHeaderCheckboxToggle",
        sortFunction: "sortFunction",
        firstChange: "firstChange",
        rowsChange: "rowsChange",
        onStateSave: "onStateSave",
        onStateRestore: "onStateRestore"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([TableService]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 16,
      vars: 22,
      consts: [["container", ""], ["wrapper", ""], ["buildInTable", ""], ["scroller", ""], ["table", ""], ["thead", ""], ["tfoot", ""], ["resizeHelper", ""], ["reorderIndicatorUp", ""], ["reorderIndicatorDown", ""], [3, "ngStyle", "ngClass"], ["class", "p-datatable-loading-overlay p-component-overlay", 4, "ngIf"], ["class", "p-datatable-header", 4, "ngIf"], [3, "rows", "first", "totalRecords", "pageLinkSize", "alwaysShow", "rowsPerPageOptions", "templateLeft", "templateRight", "dropdownAppendTo", "dropdownScrollHeight", "currentPageReportTemplate", "showFirstLastIcon", "dropdownItemTemplate", "showCurrentPageReport", "showJumpToPageDropdown", "showJumpToPageInput", "showPageLinks", "styleClass", "locale", "onPageChange", 4, "ngIf"], [1, "p-datatable-wrapper", 3, "ngStyle"], [3, "items", "columns", "style", "scrollHeight", "itemSize", "step", "delay", "inline", "lazy", "loaderDisabled", "showSpacer", "showLoader", "options", "autoSize", "onLazyLoad", 4, "ngIf"], [4, "ngIf"], ["class", "p-datatable-footer", 4, "ngIf"], ["class", "p-column-resizer-helper", "style", "display:none", 4, "ngIf"], ["class", "p-datatable-reorder-indicator-up", "style", "display: none;", 4, "ngIf"], ["class", "p-datatable-reorder-indicator-down", "style", "display: none;", 4, "ngIf"], [1, "p-datatable-loading-overlay", "p-component-overlay"], [3, "class", 4, "ngIf"], [3, "spin", "styleClass", 4, "ngIf"], ["class", "p-datatable-loading-icon", 4, "ngIf"], [3, "spin", "styleClass"], [1, "p-datatable-loading-icon"], [4, "ngTemplateOutlet"], [1, "p-datatable-header"], [3, "onPageChange", "rows", "first", "totalRecords", "pageLinkSize", "alwaysShow", "rowsPerPageOptions", "templateLeft", "templateRight", "dropdownAppendTo", "dropdownScrollHeight", "currentPageReportTemplate", "showFirstLastIcon", "dropdownItemTemplate", "showCurrentPageReport", "showJumpToPageDropdown", "showJumpToPageInput", "showPageLinks", "styleClass", "locale"], ["pTemplate", "dropdownicon"], ["pTemplate", "firstpagelinkicon"], ["pTemplate", "previouspagelinkicon"], ["pTemplate", "lastpagelinkicon"], ["pTemplate", "nextpagelinkicon"], [3, "onLazyLoad", "items", "columns", "scrollHeight", "itemSize", "step", "delay", "inline", "lazy", "loaderDisabled", "showSpacer", "showLoader", "options", "autoSize"], ["pTemplate", "content"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["role", "table", 3, "ngClass"], ["role", "rowgroup", 1, "p-datatable-thead"], ["role", "rowgroup", "class", "p-datatable-tbody p-datatable-frozen-tbody", 3, "value", "frozenRows", "pTableBody", "pTableBodyTemplate", "frozen", 4, "ngIf"], ["role", "rowgroup", 1, "p-datatable-tbody", 3, "ngClass", "value", "pTableBody", "pTableBodyTemplate", "scrollerOptions"], ["role", "rowgroup", "class", "p-datatable-scroller-spacer", 3, "style", 4, "ngIf"], ["role", "rowgroup", "class", "p-datatable-tfoot", 4, "ngIf"], ["role", "rowgroup", 1, "p-datatable-tbody", "p-datatable-frozen-tbody", 3, "value", "frozenRows", "pTableBody", "pTableBodyTemplate", "frozen"], ["role", "rowgroup", 1, "p-datatable-scroller-spacer"], ["role", "rowgroup", 1, "p-datatable-tfoot"], [1, "p-datatable-footer"], [1, "p-column-resizer-helper", 2, "display", "none"], [1, "p-datatable-reorder-indicator-up", 2, "display", "none"], [1, "p-datatable-reorder-indicator-down", 2, "display", "none"]],
      template: function Table_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Table_div_2_Template, 3, 2, "div", 11)(3, Table_div_3_Template, 2, 1, "div", 12)(4, Table_p_paginator_4_Template, 6, 24, "p-paginator", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 14, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, Table_p_scroller_7_Template, 3, 17, "p-scroller", 15)(8, Table_ng_container_8_Template, 2, 7, "ng-container", 16)(9, Table_ng_template_9_Template, 10, 28, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, Table_p_paginator_11_Template, 6, 24, "p-paginator", 13)(12, Table_div_12_Template, 2, 1, "div", 17)(13, Table_div_13_Template, 2, 0, "div", 18)(14, Table_span_14_Template, 4, 2, "span", 19)(15, Table_span_15_Template, 4, 2, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.styleClass);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.style)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](16, _c9, ctx.rowHover || ctx.selectionMode, ctx.scrollable, ctx.scrollable && ctx.scrollHeight === "flex"));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.id);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading && ctx.showLoader);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.captionTemplate);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.paginator && (ctx.paginatorPosition === "top" || ctx.paginatorPosition == "both"));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c10, ctx.virtualScroll ? "" : ctx.scrollHeight));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.virtualScroll);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.virtualScroll);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.paginator && (ctx.paginatorPosition === "bottom" || ctx.paginatorPosition == "both"));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.summaryTemplate);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.resizableColumns);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.reorderableColumns);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.reorderableColumns);
        }
      },
      dependencies: () => [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle, primeng_paginator__WEBPACK_IMPORTED_MODULE_6__.Paginator, primeng_api__WEBPACK_IMPORTED_MODULE_5__.PrimeTemplate, primeng_scroller__WEBPACK_IMPORTED_MODULE_7__.Scroller, primeng_icons_arrowdown__WEBPACK_IMPORTED_MODULE_8__.ArrowDownIcon, primeng_icons_arrowup__WEBPACK_IMPORTED_MODULE_9__.ArrowUpIcon, primeng_icons_spinner__WEBPACK_IMPORTED_MODULE_10__.SpinnerIcon, TableBody],
      styles: ["@layer primeng{.p-datatable{position:relative}.p-datatable>.p-datatable-wrapper{overflow:auto}.p-datatable-table{border-spacing:0px;width:100%}.p-datatable .p-sortable-column{cursor:pointer;-webkit-user-select:none;user-select:none}.p-datatable .p-sortable-column .p-column-title,.p-datatable .p-sortable-column .p-sortable-column-icon,.p-datatable .p-sortable-column .p-sortable-column-badge{vertical-align:middle}.p-datatable .p-sortable-column .p-icon-wrapper{display:inline}.p-datatable .p-sortable-column .p-sortable-column-badge{display:inline-flex;align-items:center;justify-content:center}.p-datatable-hoverable-rows .p-selectable-row{cursor:pointer}.p-datatable-scrollable>.p-datatable-wrapper{position:relative}.p-datatable-scrollable-table>.p-datatable-thead{position:sticky;top:0;z-index:2}.p-datatable-scrollable-table>.p-datatable-frozen-tbody{position:sticky;z-index:1}.p-datatable-scrollable-table>.p-datatable-tfoot{position:sticky;bottom:0;z-index:1}.p-datatable-scrollable .p-frozen-column{position:sticky;background:inherit;z-index:1}.p-datatable-scrollable th.p-frozen-column{z-index:1}.p-datatable-flex-scrollable{display:flex;flex-direction:column;height:100%}.p-datatable-flex-scrollable>.p-datatable-wrapper{display:flex;flex-direction:column;flex:1;height:100%}.p-datatable-scrollable-table>.p-datatable-tbody>.p-rowgroup-header{position:sticky;z-index:2}.p-datatable-resizable-table>.p-datatable-thead>tr>th,.p-datatable-resizable-table>.p-datatable-tfoot>tr>td,.p-datatable-resizable-table>.p-datatable-tbody>tr>td{overflow:hidden;white-space:nowrap}.p-datatable-resizable-table>.p-datatable-thead>tr>th.p-resizable-column:not(.p-frozen-column){background-clip:padding-box;position:relative}.p-datatable-resizable-table-fit>.p-datatable-thead>tr>th.p-resizable-column:last-child .p-column-resizer{display:none}.p-datatable .p-column-resizer{display:block;position:absolute!important;top:0;right:0;margin:0;width:.5rem;height:100%;padding:0;cursor:col-resize;border:1px solid transparent}.p-datatable .p-column-resizer-helper{width:1px;position:absolute;z-index:10;display:none}.p-datatable .p-row-editor-init,.p-datatable .p-row-editor-save,.p-datatable .p-row-editor-cancel,.p-datatable .p-row-toggler{display:inline-flex;align-items:center;justify-content:center;overflow:hidden;position:relative}.p-datatable-reorder-indicator-up,.p-datatable-reorder-indicator-down{position:absolute}.p-datatable-reorderablerow-handle,[pReorderableColumn]{cursor:move}.p-datatable .p-datatable-loading-overlay{position:absolute;display:flex;align-items:center;justify-content:center;z-index:3}.p-column-filter-row{display:flex;align-items:center;width:100%}.p-column-filter-menu{display:inline-flex}.p-column-filter-row p-columnfilterformelement{flex:1 1 auto;width:1%}.p-column-filter-menu-button,.p-column-filter-clear-button{display:inline-flex;justify-content:center;align-items:center;cursor:pointer;text-decoration:none;overflow:hidden;position:relative}.p-column-filter-overlay{position:absolute;top:0;left:0}.p-column-filter-row-items{margin:0;padding:0;list-style:none}.p-column-filter-row-item{cursor:pointer}.p-column-filter-add-button,.p-column-filter-remove-button{justify-content:center}.p-column-filter-add-button .p-button-label,.p-column-filter-remove-button .p-button-label{flex-grow:0}.p-column-filter-buttonbar{display:flex;align-items:center;justify-content:space-between}.p-column-filter-buttonbar .p-button{width:auto}.p-datatable-tbody>tr>td>.p-column-title{display:none}.p-datatable-scroller-spacer{display:flex}.p-datatable .p-scroller .p-scroller-loading{transform:none!important;min-height:0;position:sticky;top:0;left:0}}\n"],
      encapsulation: 2
    });
  }
  return Table;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TableBody = /*#__PURE__*/(() => {
  class TableBody {
    dt;
    tableService;
    cd;
    el;
    columns;
    template;
    get value() {
      return this._value;
    }
    set value(val) {
      this._value = val;
      if (this.frozenRows) {
        this.updateFrozenRowStickyPosition();
      }
      if (this.dt.scrollable && this.dt.rowGroupMode === 'subheader') {
        this.updateFrozenRowGroupHeaderStickyPosition();
      }
    }
    frozen;
    frozenRows;
    scrollerOptions;
    subscription;
    _value;
    ngAfterViewInit() {
      if (this.frozenRows) {
        this.updateFrozenRowStickyPosition();
      }
      if (this.dt.scrollable && this.dt.rowGroupMode === 'subheader') {
        this.updateFrozenRowGroupHeaderStickyPosition();
      }
    }
    constructor(dt, tableService, cd, el) {
      this.dt = dt;
      this.tableService = tableService;
      this.cd = cd;
      this.el = el;
      this.subscription = this.dt.tableService.valueSource$.subscribe(() => {
        if (this.dt.virtualScroll) {
          this.cd.detectChanges();
        }
      });
    }
    shouldRenderRowGroupHeader(value, rowData, i) {
      let currentRowFieldData = primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(rowData, this.dt.groupRowsBy);
      let prevRowData = value[i - (1 + this.dt._first)];
      if (prevRowData) {
        let previousRowFieldData = primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(prevRowData, this.dt.groupRowsBy);
        return currentRowFieldData !== previousRowFieldData;
      } else {
        return true;
      }
    }
    shouldRenderRowGroupFooter(value, rowData, i) {
      let currentRowFieldData = primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(rowData, this.dt.groupRowsBy);
      let nextRowData = value[i + (1 + this.dt._first)];
      if (nextRowData) {
        let nextRowFieldData = primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(nextRowData, this.dt.groupRowsBy);
        return currentRowFieldData !== nextRowFieldData;
      } else {
        return true;
      }
    }
    shouldRenderRowspan(value, rowData, i) {
      let currentRowFieldData = primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(rowData, this.dt.groupRowsBy);
      let prevRowData = value[i - 1];
      if (prevRowData) {
        let previousRowFieldData = primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(prevRowData, this.dt.groupRowsBy);
        return currentRowFieldData !== previousRowFieldData;
      } else {
        return true;
      }
    }
    calculateRowGroupSize(value, rowData, index) {
      let currentRowFieldData = primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(rowData, this.dt.groupRowsBy);
      let nextRowFieldData = currentRowFieldData;
      let groupRowSpan = 0;
      while (currentRowFieldData === nextRowFieldData) {
        groupRowSpan++;
        let nextRowData = value[++index];
        if (nextRowData) {
          nextRowFieldData = primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(nextRowData, this.dt.groupRowsBy);
        } else {
          break;
        }
      }
      return groupRowSpan === 1 ? null : groupRowSpan;
    }
    ngOnDestroy() {
      if (this.subscription) {
        this.subscription.unsubscribe();
      }
    }
    updateFrozenRowStickyPosition() {
      this.el.nativeElement.style.top = primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.getOuterHeight(this.el.nativeElement.previousElementSibling) + 'px';
    }
    updateFrozenRowGroupHeaderStickyPosition() {
      if (this.el.nativeElement.previousElementSibling) {
        let tableHeaderHeight = primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.getOuterHeight(this.el.nativeElement.previousElementSibling);
        this.dt.rowGroupHeaderStyleObject.top = tableHeaderHeight + 'px';
      }
    }
    getScrollerOption(option, options) {
      if (this.dt.virtualScroll) {
        options = options || this.scrollerOptions;
        return options ? options[option] : null;
      }
      return null;
    }
    getRowIndex(rowIndex) {
      const index = this.dt.paginator ? this.dt.first + rowIndex : rowIndex;
      const getItemOptions = this.getScrollerOption('getItemOptions');
      return getItemOptions ? getItemOptions(index).index : index;
    }
    static ɵfac = function TableBody_Factory(t) {
      return new (t || TableBody)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Table), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TableService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TableBody,
      selectors: [["", "pTableBody", ""]],
      hostAttrs: [1, "p-element"],
      inputs: {
        columns: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].None, "pTableBody", "columns"],
        template: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].None, "pTableBodyTemplate", "template"],
        value: "value",
        frozen: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "frozen", "frozen", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        frozenRows: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "frozenRows", "frozenRows", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        scrollerOptions: "scrollerOptions"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"]],
      attrs: _c16,
      decls: 5,
      vars: 5,
      consts: [[4, "ngIf"], ["ngFor", "", 3, "ngForOf", "ngForTrackBy"], ["role", "row", 4, "ngIf"], ["role", "row"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
      template: function TableBody_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TableBody_ng_container_0_Template, 2, 2, "ng-container", 0)(1, TableBody_ng_container_1_Template, 2, 2, "ng-container", 0)(2, TableBody_ng_container_2_Template, 2, 2, "ng-container", 0)(3, TableBody_ng_container_3_Template, 2, 5, "ng-container", 0)(4, TableBody_ng_container_4_Template, 2, 5, "ng-container", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.dt.expandedRowTemplate);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dt.expandedRowTemplate && !(ctx.frozen && ctx.dt.frozenExpandedRowTemplate));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dt.frozenExpandedRowTemplate && ctx.frozen);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dt.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dt.isEmpty() && !ctx.dt.loading);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet],
      encapsulation: 2
    });
  }
  return TableBody;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let RowGroupHeader = /*#__PURE__*/(() => {
  class RowGroupHeader {
    dt;
    constructor(dt) {
      this.dt = dt;
    }
    get getFrozenRowGroupHeaderStickyPosition() {
      return this.dt.rowGroupHeaderStyleObject ? this.dt.rowGroupHeaderStyleObject.top : '';
    }
    static ɵfac = function RowGroupHeader_Factory(t) {
      return new (t || RowGroupHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Table));
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: RowGroupHeader,
      selectors: [["", "pRowGroupHeader", ""]],
      hostAttrs: [1, "p-rowgroup-header", "p-element"],
      hostVars: 2,
      hostBindings: function RowGroupHeader_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("top", ctx.getFrozenRowGroupHeaderStickyPosition);
        }
      }
    });
  }
  return RowGroupHeader;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let FrozenColumn = /*#__PURE__*/(() => {
  class FrozenColumn {
    el;
    zone;
    get frozen() {
      return this._frozen;
    }
    set frozen(val) {
      this._frozen = val;
      Promise.resolve(null).then(() => this.updateStickyPosition());
    }
    alignFrozen = 'left';
    constructor(el, zone) {
      this.el = el;
      this.zone = zone;
    }
    ngAfterViewInit() {
      this.zone.runOutsideAngular(() => {
        setTimeout(() => {
          this.recalculateColumns();
        }, 1000);
      });
    }
    recalculateColumns() {
      const siblings = primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.siblings(this.el.nativeElement);
      const index = primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.index(this.el.nativeElement);
      const time = (siblings.length - index + 1) * 50;
      setTimeout(() => {
        this.updateStickyPosition();
      }, time);
    }
    _frozen = true;
    updateStickyPosition() {
      if (this._frozen) {
        if (this.alignFrozen === 'right') {
          let right = 0;
          let next = this.el.nativeElement.nextElementSibling;
          if (next) {
            right = primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.getOuterWidth(next) + (parseFloat(next.style.right) || 0);
          }
          this.el.nativeElement.style.right = right + 'px';
        } else {
          let left = 0;
          let prev = this.el.nativeElement.previousElementSibling;
          if (prev) {
            left = primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.getOuterWidth(prev) + (parseFloat(prev.style.left) || 0);
          }
          this.el.nativeElement.style.left = left + 'px';
        }
        const filterRow = this.el.nativeElement?.parentElement?.nextElementSibling;
        if (filterRow) {
          let index = primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.index(this.el.nativeElement);
          if (filterRow.children && filterRow.children[index]) {
            filterRow.children[index].style.left = this.el.nativeElement.style.left;
            filterRow.children[index].style.right = this.el.nativeElement.style.right;
          }
        }
      }
    }
    static ɵfac = function FrozenColumn_Factory(t) {
      return new (t || FrozenColumn)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: FrozenColumn,
      selectors: [["", "pFrozenColumn", ""]],
      hostAttrs: [1, "p-element"],
      hostVars: 2,
      hostBindings: function FrozenColumn_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function FrozenColumn_resize_HostBindingHandler($event) {
            return ctx.recalculateColumns($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("p-frozen-column", ctx.frozen);
        }
      },
      inputs: {
        frozen: "frozen",
        alignFrozen: "alignFrozen"
      }
    });
  }
  return FrozenColumn;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let SortableColumn = /*#__PURE__*/(() => {
  class SortableColumn {
    dt;
    field;
    pSortableColumnDisabled;
    sorted;
    sortOrder;
    subscription;
    constructor(dt) {
      this.dt = dt;
      if (this.isEnabled()) {
        this.subscription = this.dt.tableService.sortSource$.subscribe(sortMeta => {
          this.updateSortState();
        });
      }
    }
    ngOnInit() {
      if (this.isEnabled()) {
        this.updateSortState();
      }
    }
    updateSortState() {
      this.sorted = this.dt.isSorted(this.field);
      this.sortOrder = this.sorted ? this.dt.sortOrder === 1 ? 'ascending' : 'descending' : 'none';
    }
    onClick(event) {
      if (this.isEnabled() && !this.isFilterElement(event.target)) {
        this.updateSortState();
        this.dt.sort({
          originalEvent: event,
          field: this.field
        });
        primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.clearSelection();
      }
    }
    onEnterKey(event) {
      this.onClick(event);
      event.preventDefault();
    }
    isEnabled() {
      return this.pSortableColumnDisabled !== true;
    }
    isFilterElement(element) {
      return this.isFilterElementIconOrButton(element) || this.isFilterElementIconOrButton(element?.parentElement?.parentElement);
    }
    isFilterElementIconOrButton(element) {
      return primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.hasClass(element, 'pi-filter-icon') || primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.hasClass(element, 'p-column-filter-menu-button');
    }
    ngOnDestroy() {
      if (this.subscription) {
        this.subscription.unsubscribe();
      }
    }
    static ɵfac = function SortableColumn_Factory(t) {
      return new (t || SortableColumn)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Table));
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: SortableColumn,
      selectors: [["", "pSortableColumn", ""]],
      hostAttrs: [1, "p-element"],
      hostVars: 7,
      hostBindings: function SortableColumn_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SortableColumn_click_HostBindingHandler($event) {
            return ctx.onClick($event);
          })("keydown.space", function SortableColumn_keydown_space_HostBindingHandler($event) {
            return ctx.onEnterKey($event);
          })("keydown.enter", function SortableColumn_keydown_enter_HostBindingHandler($event) {
            return ctx.onEnterKey($event);
          });
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx.isEnabled() ? "0" : null)("role", "columnheader")("aria-sort", ctx.sortOrder);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("p-sortable-column", ctx.isEnabled())("p-highlight", ctx.sorted);
        }
      },
      inputs: {
        field: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].None, "pSortableColumn", "field"],
        pSortableColumnDisabled: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "pSortableColumnDisabled", "pSortableColumnDisabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute]
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"]]
    });
  }
  return SortableColumn;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let SortIcon = /*#__PURE__*/(() => {
  class SortIcon {
    dt;
    cd;
    field;
    subscription;
    sortOrder;
    constructor(dt, cd) {
      this.dt = dt;
      this.cd = cd;
      this.subscription = this.dt.tableService.sortSource$.subscribe(sortMeta => {
        this.updateSortState();
      });
    }
    ngOnInit() {
      this.updateSortState();
    }
    onClick(event) {
      event.preventDefault();
    }
    updateSortState() {
      if (this.dt.sortMode === 'single') {
        this.sortOrder = this.dt.isSorted(this.field) ? this.dt.sortOrder : 0;
      } else if (this.dt.sortMode === 'multiple') {
        let sortMeta = this.dt.getSortMeta(this.field);
        this.sortOrder = sortMeta ? sortMeta.order : 0;
      }
      this.cd.markForCheck();
    }
    getMultiSortMetaIndex() {
      let multiSortMeta = this.dt._multiSortMeta;
      let index = -1;
      if (multiSortMeta && this.dt.sortMode === 'multiple' && this.dt.showInitialSortBadge && multiSortMeta.length > 1) {
        for (let i = 0; i < multiSortMeta.length; i++) {
          let meta = multiSortMeta[i];
          if (meta.field === this.field || meta.field === this.field) {
            index = i;
            break;
          }
        }
      }
      return index;
    }
    getBadgeValue() {
      let index = this.getMultiSortMetaIndex();
      return this.dt.groupRowsBy && index > -1 ? index : index + 1;
    }
    isMultiSorted() {
      return this.dt.sortMode === 'multiple' && this.getMultiSortMetaIndex() > -1;
    }
    ngOnDestroy() {
      if (this.subscription) {
        this.subscription.unsubscribe();
      }
    }
    static ɵfac = function SortIcon_Factory(t) {
      return new (t || SortIcon)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Table), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SortIcon,
      selectors: [["p-sortIcon"]],
      hostAttrs: [1, "p-element"],
      inputs: {
        field: "field"
      },
      decls: 3,
      vars: 3,
      consts: [[4, "ngIf"], ["class", "p-sortable-column-icon", 4, "ngIf"], ["class", "p-sortable-column-badge", 4, "ngIf"], [3, "styleClass", 4, "ngIf"], [3, "styleClass"], [1, "p-sortable-column-icon"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "p-sortable-column-badge"]],
      template: function SortIcon_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SortIcon_ng_container_0_Template, 4, 3, "ng-container", 0)(1, SortIcon_span_1_Template, 2, 4, "span", 1)(2, SortIcon_span_2_Template, 2, 1, "span", 2);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.dt.sortIconTemplate);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dt.sortIconTemplate);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isMultiSorted());
        }
      },
      dependencies: () => [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet, primeng_icons_sortalt__WEBPACK_IMPORTED_MODULE_11__.SortAltIcon, primeng_icons_sortamountupalt__WEBPACK_IMPORTED_MODULE_12__.SortAmountUpAltIcon, primeng_icons_sortamountdown__WEBPACK_IMPORTED_MODULE_13__.SortAmountDownIcon],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return SortIcon;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let SelectableRow = /*#__PURE__*/(() => {
  class SelectableRow {
    dt;
    tableService;
    el;
    data;
    index;
    pSelectableRowDisabled;
    selected;
    subscription;
    constructor(dt, tableService, el) {
      this.dt = dt;
      this.tableService = tableService;
      this.el = el;
      if (this.isEnabled()) {
        this.subscription = this.dt.tableService.selectionSource$.subscribe(() => {
          this.selected = this.dt.isSelected(this.data);
        });
      }
    }
    setRowTabIndex() {
      if (this.dt.selectionMode === 'single' || this.dt.selectionMode === 'multiple') {
        return !this.dt.selection ? 0 : this.dt.anchorRowIndex === this.index ? 0 : -1;
      }
    }
    ngOnInit() {
      if (this.isEnabled()) {
        this.selected = this.dt.isSelected(this.data);
      }
    }
    onClick(event) {
      if (this.isEnabled()) {
        this.dt.handleRowClick({
          originalEvent: event,
          rowData: this.data,
          rowIndex: this.index
        });
      }
    }
    onTouchEnd(event) {
      if (this.isEnabled()) {
        this.dt.handleRowTouchEnd(event);
      }
    }
    onKeyDown(event) {
      switch (event.code) {
        case 'ArrowDown':
          this.onArrowDownKey(event);
          break;
        case 'ArrowUp':
          this.onArrowUpKey(event);
          break;
        case 'Home':
          this.onHomeKey(event);
          break;
        case 'End':
          this.onEndKey(event);
          break;
        case 'Space':
          this.onSpaceKey(event);
          break;
        case 'Enter':
          this.onEnterKey(event);
          break;
        default:
          if (event.code === 'KeyA' && (event.metaKey || event.ctrlKey) && this.dt.selectionMode === 'multiple') {
            const data = this.dt.dataToRender(this.dt.processedData);
            this.dt.selection = [...data];
            this.dt.selectRange(event, data.length - 1);
            event.preventDefault();
          }
          break;
      }
    }
    onArrowDownKey(event) {
      if (!this.isEnabled()) {
        return;
      }
      const row = event.currentTarget;
      const nextRow = this.findNextSelectableRow(row);
      if (nextRow) {
        nextRow.focus();
      }
      event.preventDefault();
    }
    onArrowUpKey(event) {
      if (!this.isEnabled()) {
        return;
      }
      const row = event.currentTarget;
      const prevRow = this.findPrevSelectableRow(row);
      if (prevRow) {
        prevRow.focus();
      }
      event.preventDefault();
    }
    onEnterKey(event) {
      if (!this.isEnabled()) {
        return;
      }
      this.dt.handleRowClick({
        originalEvent: event,
        rowData: this.data,
        rowIndex: this.index
      });
    }
    onEndKey(event) {
      const lastRow = this.findLastSelectableRow();
      lastRow && this.focusRowChange(this.el.nativeElement, lastRow);
      if (event.ctrlKey && event.shiftKey) {
        const data = this.dt.dataToRender(this.dt.rows);
        const lastSelectableRowIndex = primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.getAttribute(lastRow, 'index');
        this.dt.anchorRowIndex = lastSelectableRowIndex;
        this.dt.selection = data.slice(this.index, data.length);
        this.dt.selectRange(event, this.index);
      }
      event.preventDefault();
    }
    onHomeKey(event) {
      const firstRow = this.findFirstSelectableRow();
      firstRow && this.focusRowChange(this.el.nativeElement, firstRow);
      if (event.ctrlKey && event.shiftKey) {
        const data = this.dt.dataToRender(this.dt.rows);
        const firstSelectableRowIndex = primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.getAttribute(firstRow, 'index');
        this.dt.anchorRowIndex = this.dt.anchorRowIndex || firstSelectableRowIndex;
        this.dt.selection = data.slice(0, this.index + 1);
        this.dt.selectRange(event, this.index);
      }
      event.preventDefault();
    }
    onSpaceKey(event) {
      const isInput = event.target instanceof HTMLInputElement || event.target instanceof HTMLSelectElement || event.target instanceof HTMLTextAreaElement;
      if (isInput) {
        return;
      } else {
        this.onEnterKey(event);
        if (event.shiftKey && this.dt.selection !== null) {
          const data = this.dt.dataToRender(this.dt.rows);
          let index;
          if (primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.isNotEmpty(this.dt.selection) && this.dt.selection.length > 0) {
            let firstSelectedRowIndex, lastSelectedRowIndex;
            firstSelectedRowIndex = primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.findIndexInList(this.dt.selection[0], data);
            lastSelectedRowIndex = primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.findIndexInList(this.dt.selection[this.dt.selection.length - 1], data);
            index = this.index <= firstSelectedRowIndex ? lastSelectedRowIndex : firstSelectedRowIndex;
          } else {
            index = primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.findIndexInList(this.dt.selection, data);
          }
          this.dt.anchorRowIndex = index;
          this.dt.selection = index !== this.index ? data.slice(Math.min(index, this.index), Math.max(index, this.index) + 1) : [this.data];
          this.dt.selectRange(event, this.index);
        }
        event.preventDefault();
      }
    }
    focusRowChange(firstFocusableRow, currentFocusedRow) {
      firstFocusableRow.tabIndex = '-1';
      currentFocusedRow.tabIndex = '0';
      primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.focus(currentFocusedRow);
    }
    findLastSelectableRow() {
      const rows = primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.find(this.dt.el.nativeElement, '.p-selectable-row');
      return rows ? rows[rows.length - 1] : null;
    }
    findFirstSelectableRow() {
      const firstRow = primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.findSingle(this.dt.el.nativeElement, '.p-selectable-row');
      return firstRow;
    }
    findNextSelectableRow(row) {
      let nextRow = row.nextElementSibling;
      if (nextRow) {
        if (primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.hasClass(nextRow, 'p-selectable-row')) return nextRow;else return this.findNextSelectableRow(nextRow);
      } else {
        return null;
      }
    }
    findPrevSelectableRow(row) {
      let prevRow = row.previousElementSibling;
      if (prevRow) {
        if (primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.hasClass(prevRow, 'p-selectable-row')) return prevRow;else return this.findPrevSelectableRow(prevRow);
      } else {
        return null;
      }
    }
    isEnabled() {
      return this.pSelectableRowDisabled !== true;
    }
    ngOnDestroy() {
      if (this.subscription) {
        this.subscription.unsubscribe();
      }
    }
    static ɵfac = function SelectableRow_Factory(t) {
      return new (t || SelectableRow)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Table), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TableService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: SelectableRow,
      selectors: [["", "pSelectableRow", ""]],
      hostAttrs: [1, "p-element"],
      hostVars: 7,
      hostBindings: function SelectableRow_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelectableRow_click_HostBindingHandler($event) {
            return ctx.onClick($event);
          })("touchend", function SelectableRow_touchend_HostBindingHandler($event) {
            return ctx.onTouchEnd($event);
          })("keydown", function SelectableRow_keydown_HostBindingHandler($event) {
            return ctx.onKeyDown($event);
          });
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx.setRowTabIndex())("data-p-highlight", ctx.selected)("data-p-selectable-row", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("p-selectable-row", ctx.isEnabled())("p-highlight", ctx.selected);
        }
      },
      inputs: {
        data: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].None, "pSelectableRow", "data"],
        index: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].None, "pSelectableRowIndex", "index"],
        pSelectableRowDisabled: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "pSelectableRowDisabled", "pSelectableRowDisabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute]
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"]]
    });
  }
  return SelectableRow;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let SelectableRowDblClick = /*#__PURE__*/(() => {
  class SelectableRowDblClick {
    dt;
    tableService;
    data;
    index;
    pSelectableRowDisabled;
    selected;
    subscription;
    constructor(dt, tableService) {
      this.dt = dt;
      this.tableService = tableService;
      if (this.isEnabled()) {
        this.subscription = this.dt.tableService.selectionSource$.subscribe(() => {
          this.selected = this.dt.isSelected(this.data);
        });
      }
    }
    ngOnInit() {
      if (this.isEnabled()) {
        this.selected = this.dt.isSelected(this.data);
      }
    }
    onClick(event) {
      if (this.isEnabled()) {
        this.dt.handleRowClick({
          originalEvent: event,
          rowData: this.data,
          rowIndex: this.index
        });
      }
    }
    isEnabled() {
      return this.pSelectableRowDisabled !== true;
    }
    ngOnDestroy() {
      if (this.subscription) {
        this.subscription.unsubscribe();
      }
    }
    static ɵfac = function SelectableRowDblClick_Factory(t) {
      return new (t || SelectableRowDblClick)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Table), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TableService));
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: SelectableRowDblClick,
      selectors: [["", "pSelectableRowDblClick", ""]],
      hostAttrs: [1, "p-element"],
      hostVars: 4,
      hostBindings: function SelectableRowDblClick_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dblclick", function SelectableRowDblClick_dblclick_HostBindingHandler($event) {
            return ctx.onClick($event);
          });
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("p-selectable-row", ctx.isEnabled())("p-highlight", ctx.selected);
        }
      },
      inputs: {
        data: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].None, "pSelectableRowDblClick", "data"],
        index: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].None, "pSelectableRowIndex", "index"],
        pSelectableRowDisabled: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "pSelectableRowDisabled", "pSelectableRowDisabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute]
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"]]
    });
  }
  return SelectableRowDblClick;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let ContextMenuRow = /*#__PURE__*/(() => {
  class ContextMenuRow {
    dt;
    tableService;
    el;
    data;
    index;
    pContextMenuRowDisabled;
    selected;
    subscription;
    constructor(dt, tableService, el) {
      this.dt = dt;
      this.tableService = tableService;
      this.el = el;
      if (this.isEnabled()) {
        this.subscription = this.dt.tableService.contextMenuSource$.subscribe(data => {
          this.selected = this.dt.equals(this.data, data);
        });
      }
    }
    onContextMenu(event) {
      if (this.isEnabled()) {
        this.dt.handleRowRightClick({
          originalEvent: event,
          rowData: this.data,
          rowIndex: this.index
        });
        this.el.nativeElement.focus();
        event.preventDefault();
      }
    }
    isEnabled() {
      return this.pContextMenuRowDisabled !== true;
    }
    ngOnDestroy() {
      if (this.subscription) {
        this.subscription.unsubscribe();
      }
    }
    static ɵfac = function ContextMenuRow_Factory(t) {
      return new (t || ContextMenuRow)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Table), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TableService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: ContextMenuRow,
      selectors: [["", "pContextMenuRow", ""]],
      hostAttrs: [1, "p-element"],
      hostVars: 3,
      hostBindings: function ContextMenuRow_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("contextmenu", function ContextMenuRow_contextmenu_HostBindingHandler($event) {
            return ctx.onContextMenu($event);
          });
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx.isEnabled() ? 0 : undefined);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("p-highlight-contextmenu", ctx.selected);
        }
      },
      inputs: {
        data: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].None, "pContextMenuRow", "data"],
        index: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].None, "pContextMenuRowIndex", "index"],
        pContextMenuRowDisabled: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "pContextMenuRowDisabled", "pContextMenuRowDisabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute]
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"]]
    });
  }
  return ContextMenuRow;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let RowToggler = /*#__PURE__*/(() => {
  class RowToggler {
    dt;
    data;
    pRowTogglerDisabled;
    constructor(dt) {
      this.dt = dt;
    }
    onClick(event) {
      if (this.isEnabled()) {
        this.dt.toggleRow(this.data, event);
        event.preventDefault();
      }
    }
    isEnabled() {
      return this.pRowTogglerDisabled !== true;
    }
    static ɵfac = function RowToggler_Factory(t) {
      return new (t || RowToggler)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Table));
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: RowToggler,
      selectors: [["", "pRowToggler", ""]],
      hostAttrs: [1, "p-element"],
      hostBindings: function RowToggler_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RowToggler_click_HostBindingHandler($event) {
            return ctx.onClick($event);
          });
        }
      },
      inputs: {
        data: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].None, "pRowToggler", "data"],
        pRowTogglerDisabled: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "pRowTogglerDisabled", "pRowTogglerDisabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute]
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"]]
    });
  }
  return RowToggler;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let ResizableColumn = /*#__PURE__*/(() => {
  class ResizableColumn {
    document;
    platformId;
    renderer;
    dt;
    el;
    zone;
    pResizableColumnDisabled;
    resizer;
    resizerMouseDownListener;
    resizerTouchStartListener;
    resizerTouchMoveListener;
    resizerTouchEndListener;
    documentMouseMoveListener;
    documentMouseUpListener;
    constructor(document, platformId, renderer, dt, el, zone) {
      this.document = document;
      this.platformId = platformId;
      this.renderer = renderer;
      this.dt = dt;
      this.el = el;
      this.zone = zone;
    }
    ngAfterViewInit() {
      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.isPlatformBrowser)(this.platformId)) {
        if (this.isEnabled()) {
          primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.addClass(this.el.nativeElement, 'p-resizable-column');
          this.resizer = this.renderer.createElement('span');
          this.renderer.addClass(this.resizer, 'p-column-resizer');
          this.renderer.appendChild(this.el.nativeElement, this.resizer);
          this.zone.runOutsideAngular(() => {
            this.resizerMouseDownListener = this.renderer.listen(this.resizer, 'mousedown', this.onMouseDown.bind(this));
            this.resizerTouchStartListener = this.renderer.listen(this.resizer, 'touchstart', this.onTouchStart.bind(this));
          });
        }
      }
    }
    bindDocumentEvents() {
      this.zone.runOutsideAngular(() => {
        this.documentMouseMoveListener = this.renderer.listen(this.document, 'mousemove', this.onDocumentMouseMove.bind(this));
        this.documentMouseUpListener = this.renderer.listen(this.document, 'mouseup', this.onDocumentMouseUp.bind(this));
        this.resizerTouchMoveListener = this.renderer.listen(this.resizer, 'touchmove', this.onTouchMove.bind(this));
        this.resizerTouchEndListener = this.renderer.listen(this.resizer, 'touchend', this.onTouchEnd.bind(this));
      });
    }
    unbindDocumentEvents() {
      if (this.documentMouseMoveListener) {
        this.documentMouseMoveListener();
        this.documentMouseMoveListener = null;
      }
      if (this.documentMouseUpListener) {
        this.documentMouseUpListener();
        this.documentMouseUpListener = null;
      }
      if (this.resizerTouchMoveListener) {
        this.resizerTouchMoveListener();
        this.resizerTouchMoveListener = null;
      }
      if (this.resizerTouchEndListener) {
        this.resizerTouchEndListener();
        this.resizerTouchEndListener = null;
      }
    }
    onMouseDown(event) {
      this.dt.onColumnResizeBegin(event);
      this.bindDocumentEvents();
    }
    onTouchStart(event) {
      this.dt.onColumnResizeBegin(event);
      this.bindDocumentEvents();
    }
    onTouchMove(event) {
      this.dt.onColumnResize(event);
    }
    onDocumentMouseMove(event) {
      this.dt.onColumnResize(event);
    }
    onDocumentMouseUp(event) {
      this.dt.onColumnResizeEnd();
      this.unbindDocumentEvents();
    }
    onTouchEnd(event) {
      this.dt.onColumnResizeEnd();
      this.unbindDocumentEvents();
    }
    isEnabled() {
      return this.pResizableColumnDisabled !== true;
    }
    ngOnDestroy() {
      if (this.resizerMouseDownListener) {
        this.resizerMouseDownListener();
        this.resizerMouseDownListener = null;
      }
      this.unbindDocumentEvents();
    }
    static ɵfac = function ResizableColumn_Factory(t) {
      return new (t || ResizableColumn)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Table), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: ResizableColumn,
      selectors: [["", "pResizableColumn", ""]],
      hostAttrs: [1, "p-element"],
      inputs: {
        pResizableColumnDisabled: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "pResizableColumnDisabled", "pResizableColumnDisabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute]
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"]]
    });
  }
  return ResizableColumn;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let ReorderableColumn = /*#__PURE__*/(() => {
  class ReorderableColumn {
    platformId;
    renderer;
    dt;
    el;
    zone;
    pReorderableColumnDisabled;
    dragStartListener;
    dragOverListener;
    dragEnterListener;
    dragLeaveListener;
    mouseDownListener;
    constructor(platformId, renderer, dt, el, zone) {
      this.platformId = platformId;
      this.renderer = renderer;
      this.dt = dt;
      this.el = el;
      this.zone = zone;
    }
    ngAfterViewInit() {
      if (this.isEnabled()) {
        this.bindEvents();
      }
    }
    bindEvents() {
      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.isPlatformBrowser)(this.platformId)) {
        this.zone.runOutsideAngular(() => {
          this.mouseDownListener = this.renderer.listen(this.el.nativeElement, 'mousedown', this.onMouseDown.bind(this));
          this.dragStartListener = this.renderer.listen(this.el.nativeElement, 'dragstart', this.onDragStart.bind(this));
          this.dragOverListener = this.renderer.listen(this.el.nativeElement, 'dragover', this.onDragOver.bind(this));
          this.dragEnterListener = this.renderer.listen(this.el.nativeElement, 'dragenter', this.onDragEnter.bind(this));
          this.dragLeaveListener = this.renderer.listen(this.el.nativeElement, 'dragleave', this.onDragLeave.bind(this));
        });
      }
    }
    unbindEvents() {
      if (this.mouseDownListener) {
        this.mouseDownListener();
        this.mouseDownListener = null;
      }
      if (this.dragStartListener) {
        this.dragStartListener();
        this.dragStartListener = null;
      }
      if (this.dragOverListener) {
        this.dragOverListener();
        this.dragOverListener = null;
      }
      if (this.dragEnterListener) {
        this.dragEnterListener();
        this.dragEnterListener = null;
      }
      if (this.dragLeaveListener) {
        this.dragLeaveListener();
        this.dragLeaveListener = null;
      }
    }
    onMouseDown(event) {
      if (event.target.nodeName === 'INPUT' || event.target.nodeName === 'TEXTAREA' || primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.hasClass(event.target, 'p-column-resizer')) this.el.nativeElement.draggable = false;else this.el.nativeElement.draggable = true;
    }
    onDragStart(event) {
      this.dt.onColumnDragStart(event, this.el.nativeElement);
    }
    onDragOver(event) {
      event.preventDefault();
    }
    onDragEnter(event) {
      this.dt.onColumnDragEnter(event, this.el.nativeElement);
    }
    onDragLeave(event) {
      this.dt.onColumnDragLeave(event);
    }
    onDrop(event) {
      if (this.isEnabled()) {
        this.dt.onColumnDrop(event, this.el.nativeElement);
      }
    }
    isEnabled() {
      return this.pReorderableColumnDisabled !== true;
    }
    ngOnDestroy() {
      this.unbindEvents();
    }
    static ɵfac = function ReorderableColumn_Factory(t) {
      return new (t || ReorderableColumn)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Table), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: ReorderableColumn,
      selectors: [["", "pReorderableColumn", ""]],
      hostAttrs: [1, "p-element"],
      hostVars: 2,
      hostBindings: function ReorderableColumn_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function ReorderableColumn_drop_HostBindingHandler($event) {
            return ctx.onDrop($event);
          });
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("cursor", ctx.isEnabled() ? "move" : "default");
        }
      },
      inputs: {
        pReorderableColumnDisabled: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "pReorderableColumnDisabled", "pReorderableColumnDisabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute]
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"]]
    });
  }
  return ReorderableColumn;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let EditableColumn = /*#__PURE__*/(() => {
  class EditableColumn {
    dt;
    el;
    zone;
    data;
    field;
    rowIndex;
    pEditableColumnDisabled;
    pFocusCellSelector;
    overlayEventListener;
    constructor(dt, el, zone) {
      this.dt = dt;
      this.el = el;
      this.zone = zone;
    }
    ngOnChanges(changes) {
      if (this.el.nativeElement && !changes.data?.firstChange) {
        this.dt.updateEditingCell(this.el.nativeElement, this.data, this.field, this.rowIndex);
      }
    }
    ngAfterViewInit() {
      if (this.isEnabled()) {
        primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.addClass(this.el.nativeElement, 'p-editable-column');
      }
    }
    onClick(event) {
      if (this.isEnabled()) {
        this.dt.selfClick = true;
        if (this.dt.editingCell) {
          if (this.dt.editingCell !== this.el.nativeElement) {
            if (!this.dt.isEditingCellValid()) {
              return;
            }
            this.closeEditingCell(true, event);
            this.openCell();
          }
        } else {
          this.openCell();
        }
      }
    }
    openCell() {
      this.dt.updateEditingCell(this.el.nativeElement, this.data, this.field, this.rowIndex);
      primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.addClass(this.el.nativeElement, 'p-cell-editing');
      this.dt.onEditInit.emit({
        field: this.field,
        data: this.data,
        index: this.rowIndex
      });
      this.zone.runOutsideAngular(() => {
        setTimeout(() => {
          let focusCellSelector = this.pFocusCellSelector || 'input, textarea, select';
          let focusableElement = primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.findSingle(this.el.nativeElement, focusCellSelector);
          if (focusableElement) {
            focusableElement.focus();
          }
        }, 50);
      });
      this.overlayEventListener = e => {
        if (this.el && this.el.nativeElement.contains(e.target)) {
          this.dt.selfClick = true;
        }
      };
      this.dt.overlaySubscription = this.dt.overlayService.clickObservable.subscribe(this.overlayEventListener);
    }
    closeEditingCell(completed, event) {
      const eventData = {
        field: this.dt.editingCellField,
        data: this.dt.editingCellData,
        originalEvent: event,
        index: this.dt.editingCellRowIndex
      };
      if (completed) {
        this.dt.onEditComplete.emit(eventData);
      } else {
        this.dt.onEditCancel.emit(eventData);
        this.dt.value.forEach(element => {
          if (element[this.dt.editingCellField] === this.data) {
            element[this.dt.editingCellField] = this.dt.editingCellData;
          }
        });
      }
      primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.removeClass(this.dt.editingCell, 'p-cell-editing');
      this.dt.editingCell = null;
      this.dt.editingCellData = null;
      this.dt.editingCellField = null;
      this.dt.unbindDocumentEditListener();
      if (this.dt.overlaySubscription) {
        this.dt.overlaySubscription.unsubscribe();
      }
    }
    onEnterKeyDown(event) {
      if (this.isEnabled() && !event.shiftKey) {
        if (this.dt.isEditingCellValid()) {
          this.closeEditingCell(true, event);
        }
        event.preventDefault();
      }
    }
    onTabKeyDown(event) {
      if (this.isEnabled()) {
        if (this.dt.isEditingCellValid()) {
          this.closeEditingCell(true, event);
        }
        event.preventDefault();
      }
    }
    onEscapeKeyDown(event) {
      if (this.isEnabled()) {
        if (this.dt.isEditingCellValid()) {
          this.closeEditingCell(false, event);
        }
        event.preventDefault();
      }
    }
    onShiftKeyDown(event) {
      if (this.isEnabled()) {
        if (event.shiftKey) this.moveToPreviousCell(event);else {
          this.moveToNextCell(event);
        }
      }
    }
    onArrowDown(event) {
      if (this.isEnabled()) {
        let currentCell = this.findCell(event.target);
        if (currentCell) {
          let cellIndex = primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.index(currentCell);
          let targetCell = this.findNextEditableColumnByIndex(currentCell, cellIndex);
          if (targetCell) {
            if (this.dt.isEditingCellValid()) {
              this.closeEditingCell(true, event);
            }
            primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.invokeElementMethod(event.target, 'blur');
            primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.invokeElementMethod(targetCell, 'click');
          }
          event.preventDefault();
        }
      }
    }
    onArrowUp(event) {
      if (this.isEnabled()) {
        let currentCell = this.findCell(event.target);
        if (currentCell) {
          let cellIndex = primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.index(currentCell);
          let targetCell = this.findPrevEditableColumnByIndex(currentCell, cellIndex);
          if (targetCell) {
            if (this.dt.isEditingCellValid()) {
              this.closeEditingCell(true, event);
            }
            primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.invokeElementMethod(event.target, 'blur');
            primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.invokeElementMethod(targetCell, 'click');
          }
          event.preventDefault();
        }
      }
    }
    onArrowLeft(event) {
      if (this.isEnabled()) {
        this.moveToPreviousCell(event);
      }
    }
    onArrowRight(event) {
      if (this.isEnabled()) {
        this.moveToNextCell(event);
      }
    }
    findCell(element) {
      if (element) {
        let cell = element;
        while (cell && !primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.hasClass(cell, 'p-cell-editing')) {
          cell = cell.parentElement;
        }
        return cell;
      } else {
        return null;
      }
    }
    moveToPreviousCell(event) {
      let currentCell = this.findCell(event.target);
      if (currentCell) {
        let targetCell = this.findPreviousEditableColumn(currentCell);
        if (targetCell) {
          if (this.dt.isEditingCellValid()) {
            this.closeEditingCell(true, event);
          }
          primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.invokeElementMethod(event.target, 'blur');
          primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.invokeElementMethod(targetCell, 'click');
          event.preventDefault();
        }
      }
    }
    moveToNextCell(event) {
      let currentCell = this.findCell(event.target);
      if (currentCell) {
        let targetCell = this.findNextEditableColumn(currentCell);
        if (targetCell) {
          if (this.dt.isEditingCellValid()) {
            this.closeEditingCell(true, event);
          }
          primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.invokeElementMethod(event.target, 'blur');
          primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.invokeElementMethod(targetCell, 'click');
          event.preventDefault();
        } else {
          if (this.dt.isEditingCellValid()) {
            this.closeEditingCell(true, event);
          }
        }
      }
    }
    findPreviousEditableColumn(cell) {
      let prevCell = cell.previousElementSibling;
      if (!prevCell) {
        let previousRow = cell.parentElement?.previousElementSibling;
        if (previousRow) {
          prevCell = previousRow.lastElementChild;
        }
      }
      if (prevCell) {
        if (primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.hasClass(prevCell, 'p-editable-column')) return prevCell;else return this.findPreviousEditableColumn(prevCell);
      } else {
        return null;
      }
    }
    findNextEditableColumn(cell) {
      let nextCell = cell.nextElementSibling;
      if (!nextCell) {
        let nextRow = cell.parentElement?.nextElementSibling;
        if (nextRow) {
          nextCell = nextRow.firstElementChild;
        }
      }
      if (nextCell) {
        if (primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.hasClass(nextCell, 'p-editable-column')) return nextCell;else return this.findNextEditableColumn(nextCell);
      } else {
        return null;
      }
    }
    findNextEditableColumnByIndex(cell, index) {
      let nextRow = cell.parentElement?.nextElementSibling;
      if (nextRow) {
        let nextCell = nextRow.children[index];
        if (nextCell && primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.hasClass(nextCell, 'p-editable-column')) {
          return nextCell;
        }
        return null;
      } else {
        return null;
      }
    }
    findPrevEditableColumnByIndex(cell, index) {
      let prevRow = cell.parentElement?.previousElementSibling;
      if (prevRow) {
        let prevCell = prevRow.children[index];
        if (prevCell && primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.hasClass(prevCell, 'p-editable-column')) {
          return prevCell;
        }
        return null;
      } else {
        return null;
      }
    }
    isEnabled() {
      return this.pEditableColumnDisabled !== true;
    }
    ngOnDestroy() {
      if (this.dt.overlaySubscription) {
        this.dt.overlaySubscription.unsubscribe();
      }
    }
    static ɵfac = function EditableColumn_Factory(t) {
      return new (t || EditableColumn)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Table), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: EditableColumn,
      selectors: [["", "pEditableColumn", ""]],
      hostAttrs: [1, "p-element"],
      hostBindings: function EditableColumn_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditableColumn_click_HostBindingHandler($event) {
            return ctx.onClick($event);
          })("keydown.enter", function EditableColumn_keydown_enter_HostBindingHandler($event) {
            return ctx.onEnterKeyDown($event);
          })("keydown.tab", function EditableColumn_keydown_tab_HostBindingHandler($event) {
            return ctx.onShiftKeyDown($event);
          })("keydown.escape", function EditableColumn_keydown_escape_HostBindingHandler($event) {
            return ctx.onEscapeKeyDown($event);
          })("keydown.shift.tab", function EditableColumn_keydown_shift_tab_HostBindingHandler($event) {
            return ctx.onShiftKeyDown($event);
          })("keydown.meta.tab", function EditableColumn_keydown_meta_tab_HostBindingHandler($event) {
            return ctx.onShiftKeyDown($event);
          })("keydown.arrowdown", function EditableColumn_keydown_arrowdown_HostBindingHandler($event) {
            return ctx.onArrowDown($event);
          })("keydown.arrowup", function EditableColumn_keydown_arrowup_HostBindingHandler($event) {
            return ctx.onArrowUp($event);
          })("keydown.arrowleft", function EditableColumn_keydown_arrowleft_HostBindingHandler($event) {
            return ctx.onArrowLeft($event);
          })("keydown.arrowright", function EditableColumn_keydown_arrowright_HostBindingHandler($event) {
            return ctx.onArrowRight($event);
          });
        }
      },
      inputs: {
        data: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].None, "pEditableColumn", "data"],
        field: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].None, "pEditableColumnField", "field"],
        rowIndex: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].None, "pEditableColumnRowIndex", "rowIndex"],
        pEditableColumnDisabled: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "pEditableColumnDisabled", "pEditableColumnDisabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        pFocusCellSelector: "pFocusCellSelector"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
    });
  }
  return EditableColumn;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let EditableRow = /*#__PURE__*/(() => {
  class EditableRow {
    el;
    data;
    pEditableRowDisabled;
    constructor(el) {
      this.el = el;
    }
    isEnabled() {
      return this.pEditableRowDisabled !== true;
    }
    static ɵfac = function EditableRow_Factory(t) {
      return new (t || EditableRow)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: EditableRow,
      selectors: [["", "pEditableRow", ""]],
      hostAttrs: [1, "p-element"],
      inputs: {
        data: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].None, "pEditableRow", "data"],
        pEditableRowDisabled: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "pEditableRowDisabled", "pEditableRowDisabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute]
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"]]
    });
  }
  return EditableRow;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let InitEditableRow = /*#__PURE__*/(() => {
  class InitEditableRow {
    dt;
    editableRow;
    constructor(dt, editableRow) {
      this.dt = dt;
      this.editableRow = editableRow;
    }
    onClick(event) {
      this.dt.initRowEdit(this.editableRow.data);
      event.preventDefault();
    }
    static ɵfac = function InitEditableRow_Factory(t) {
      return new (t || InitEditableRow)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Table), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](EditableRow));
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: InitEditableRow,
      selectors: [["", "pInitEditableRow", ""]],
      hostAttrs: [1, "p-element"],
      hostBindings: function InitEditableRow_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InitEditableRow_click_HostBindingHandler($event) {
            return ctx.onClick($event);
          });
        }
      }
    });
  }
  return InitEditableRow;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let SaveEditableRow = /*#__PURE__*/(() => {
  class SaveEditableRow {
    dt;
    editableRow;
    constructor(dt, editableRow) {
      this.dt = dt;
      this.editableRow = editableRow;
    }
    onClick(event) {
      this.dt.saveRowEdit(this.editableRow.data, this.editableRow.el.nativeElement);
      event.preventDefault();
    }
    static ɵfac = function SaveEditableRow_Factory(t) {
      return new (t || SaveEditableRow)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Table), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](EditableRow));
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: SaveEditableRow,
      selectors: [["", "pSaveEditableRow", ""]],
      hostAttrs: [1, "p-element"],
      hostBindings: function SaveEditableRow_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SaveEditableRow_click_HostBindingHandler($event) {
            return ctx.onClick($event);
          });
        }
      }
    });
  }
  return SaveEditableRow;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let CancelEditableRow = /*#__PURE__*/(() => {
  class CancelEditableRow {
    dt;
    editableRow;
    constructor(dt, editableRow) {
      this.dt = dt;
      this.editableRow = editableRow;
    }
    onClick(event) {
      this.dt.cancelRowEdit(this.editableRow.data);
      event.preventDefault();
    }
    static ɵfac = function CancelEditableRow_Factory(t) {
      return new (t || CancelEditableRow)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Table), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](EditableRow));
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: CancelEditableRow,
      selectors: [["", "pCancelEditableRow", ""]],
      hostAttrs: [1, "p-element"],
      hostBindings: function CancelEditableRow_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CancelEditableRow_click_HostBindingHandler($event) {
            return ctx.onClick($event);
          });
        }
      }
    });
  }
  return CancelEditableRow;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let CellEditor = /*#__PURE__*/(() => {
  class CellEditor {
    dt;
    editableColumn;
    editableRow;
    templates;
    inputTemplate;
    outputTemplate;
    constructor(dt, editableColumn, editableRow) {
      this.dt = dt;
      this.editableColumn = editableColumn;
      this.editableRow = editableRow;
    }
    ngAfterContentInit() {
      this.templates.forEach(item => {
        switch (item.getType()) {
          case 'input':
            this.inputTemplate = item.template;
            break;
          case 'output':
            this.outputTemplate = item.template;
            break;
        }
      });
    }
    get editing() {
      return this.dt.editingCell && this.editableColumn && this.dt.editingCell === this.editableColumn.el.nativeElement || this.editableRow && this.dt.editMode === 'row' && this.dt.isRowEditing(this.editableRow.data);
    }
    static ɵfac = function CellEditor_Factory(t) {
      return new (t || CellEditor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Table), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](EditableColumn, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](EditableRow, 8));
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CellEditor,
      selectors: [["p-cellEditor"]],
      contentQueries: function CellEditor_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_5__.PrimeTemplate, 4);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
        }
      },
      hostAttrs: [1, "p-element"],
      decls: 2,
      vars: 2,
      consts: [[4, "ngIf"], [4, "ngTemplateOutlet"]],
      template: function CellEditor_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CellEditor_ng_container_0_Template, 2, 1, "ng-container", 0)(1, CellEditor_ng_container_1_Template, 2, 1, "ng-container", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editing);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.editing);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet],
      encapsulation: 2
    });
  }
  return CellEditor;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TableRadioButton = /*#__PURE__*/(() => {
  class TableRadioButton {
    dt;
    cd;
    disabled;
    value;
    index;
    inputId;
    name;
    ariaLabel;
    inputViewChild;
    checked;
    focused;
    subscription;
    constructor(dt, cd) {
      this.dt = dt;
      this.cd = cd;
      this.subscription = this.dt.tableService.selectionSource$.subscribe(() => {
        this.checked = this.dt.isSelected(this.value);
        this.ariaLabel = this.ariaLabel || this.dt.config.translation.aria ? this.checked ? this.dt.config.translation.aria.selectRow : this.dt.config.translation.aria.unselectRow : undefined;
        this.cd.markForCheck();
      });
    }
    ngOnInit() {
      this.checked = this.dt.isSelected(this.value);
    }
    onClick(event) {
      if (!this.disabled) {
        this.dt.toggleRowWithRadio({
          originalEvent: event,
          rowIndex: this.index
        }, this.value);
        this.inputViewChild?.nativeElement?.focus();
      }
      primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.clearSelection();
    }
    onFocus() {
      this.focused = true;
    }
    onBlur() {
      this.focused = false;
    }
    ngOnDestroy() {
      if (this.subscription) {
        this.subscription.unsubscribe();
      }
    }
    static ɵfac = function TableRadioButton_Factory(t) {
      return new (t || TableRadioButton)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Table), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TableRadioButton,
      selectors: [["p-tableRadioButton"]],
      viewQuery: function TableRadioButton_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c22, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.inputViewChild = _t.first);
        }
      },
      hostAttrs: [1, "p-element"],
      inputs: {
        disabled: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "disabled", "disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        value: "value",
        index: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "index", "index", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute],
        inputId: "inputId",
        name: "name",
        ariaLabel: "ariaLabel"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"]],
      decls: 7,
      vars: 16,
      consts: [["rb", ""], ["box", ""], [1, "p-radiobutton", "p-component", 3, "click", "ngClass"], [1, "p-hidden-accessible"], ["type", "radio", 3, "focus", "blur", "checked", "disabled", "tabindex"], [3, "ngClass"], [1, "p-radiobutton-icon"]],
      template: function TableRadioButton_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableRadioButton_Template_div_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onClick($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3)(2, "input", 4, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function TableRadioButton_Template_input_focus_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onFocus());
          })("blur", function TableRadioButton_Template_input_blur_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onBlur());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](8, _c23, ctx.focused, ctx.checked, ctx.disabled));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.checked)("disabled", ctx.disabled)("tabindex", ctx.disabled ? null : "0");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.inputId)("name", ctx.name)("aria-label", ctx.ariaLabel);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](12, _c24, ctx.checked, ctx.focused, ctx.disabled));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return TableRadioButton;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TableCheckbox = /*#__PURE__*/(() => {
  class TableCheckbox {
    dt;
    tableService;
    cd;
    disabled;
    value;
    index;
    inputId;
    name;
    required;
    ariaLabel;
    checked;
    focused;
    subscription;
    constructor(dt, tableService, cd) {
      this.dt = dt;
      this.tableService = tableService;
      this.cd = cd;
      this.subscription = this.dt.tableService.selectionSource$.subscribe(() => {
        this.checked = this.dt.isSelected(this.value) && !this.disabled;
        this.ariaLabel = this.ariaLabel || this.dt.config.translation.aria ? this.checked ? this.dt.config.translation.aria.selectRow : this.dt.config.translation.aria.unselectRow : undefined;
        this.cd.markForCheck();
      });
    }
    ngOnInit() {
      this.checked = this.dt.isSelected(this.value);
    }
    onClick(event) {
      if (!this.disabled) {
        this.dt.toggleRowWithCheckbox({
          originalEvent: event,
          rowIndex: this.index
        }, this.value);
      }
      primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.clearSelection();
    }
    onFocus() {
      this.focused = true;
    }
    onBlur() {
      this.focused = false;
    }
    ngOnDestroy() {
      if (this.subscription) {
        this.subscription.unsubscribe();
      }
    }
    static ɵfac = function TableCheckbox_Factory(t) {
      return new (t || TableCheckbox)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Table), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TableService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TableCheckbox,
      selectors: [["p-tableCheckbox"]],
      hostAttrs: [1, "p-element"],
      inputs: {
        disabled: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "disabled", "disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        value: "value",
        index: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "index", "index", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute],
        inputId: "inputId",
        name: "name",
        required: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "required", "required", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        ariaLabel: "ariaLabel"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"]],
      decls: 7,
      vars: 18,
      consts: [["box", ""], [1, "p-checkbox", "p-component", 3, "click", "ngClass"], [1, "p-hidden-accessible"], ["type", "checkbox", 3, "focus", "blur", "checked", "disabled", "tabindex"], [3, "ngClass"], [4, "ngIf"], [3, "styleClass", 4, "ngIf"], [3, "styleClass"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
      template: function TableCheckbox_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableCheckbox_Template_div_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onClick($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2)(2, "input", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function TableCheckbox_Template_input_focus_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onFocus());
          })("blur", function TableCheckbox_Template_input_blur_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onBlur());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TableCheckbox_ng_container_5_Template, 2, 1, "ng-container", 5)(6, TableCheckbox_span_6_Template, 2, 4, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](11, _c25, ctx.focused, ctx.disabled));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.checked)("disabled", ctx.disabled)("tabindex", ctx.disabled ? null : "0");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.inputId)("name", ctx.name)("required", ctx.required)("aria-label", ctx.ariaLabel);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](14, _c26, ctx.checked, ctx.focused, ctx.disabled));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.dt.checkboxIconTemplate);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dt.checkboxIconTemplate);
        }
      },
      dependencies: () => [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet, primeng_icons_check__WEBPACK_IMPORTED_MODULE_14__.CheckIcon],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return TableCheckbox;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TableHeaderCheckbox = /*#__PURE__*/(() => {
  class TableHeaderCheckbox {
    dt;
    tableService;
    cd;
    disabled;
    inputId;
    name;
    ariaLabel;
    checked;
    focused;
    selectionChangeSubscription;
    valueChangeSubscription;
    constructor(dt, tableService, cd) {
      this.dt = dt;
      this.tableService = tableService;
      this.cd = cd;
      this.valueChangeSubscription = this.dt.tableService.valueSource$.subscribe(() => {
        this.checked = this.updateCheckedState();
        this.ariaLabel = this.ariaLabel || this.dt.config.translation.aria ? this.checked ? this.dt.config.translation.aria.selectAll : this.dt.config.translation.aria.unselectAll : undefined;
      });
      this.selectionChangeSubscription = this.dt.tableService.selectionSource$.subscribe(() => {
        this.checked = this.updateCheckedState();
      });
    }
    ngOnInit() {
      this.checked = this.updateCheckedState();
    }
    onClick(event) {
      if (!this.disabled) {
        if (this.dt.value && this.dt.value.length > 0) {
          this.dt.toggleRowsWithCheckbox(event, !this.checked);
        }
      }
      primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.clearSelection();
    }
    onFocus() {
      this.focused = true;
    }
    onBlur() {
      this.focused = false;
    }
    isDisabled() {
      return this.disabled || !this.dt.value || !this.dt.value.length;
    }
    ngOnDestroy() {
      if (this.selectionChangeSubscription) {
        this.selectionChangeSubscription.unsubscribe();
      }
      if (this.valueChangeSubscription) {
        this.valueChangeSubscription.unsubscribe();
      }
    }
    updateCheckedState() {
      this.cd.markForCheck();
      if (this.dt._selectAll !== null) {
        return this.dt._selectAll;
      } else {
        const data = this.dt.selectionPageOnly ? this.dt.dataToRender(this.dt.processedData) : this.dt.processedData;
        const val = this.dt.frozenValue ? [...this.dt.frozenValue, ...data] : data;
        const selectableVal = this.dt.rowSelectable ? val.filter((data, index) => this.dt.rowSelectable({
          data,
          index
        })) : val;
        return primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.isNotEmpty(selectableVal) && primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.isNotEmpty(this.dt.selection) && selectableVal.every(v => this.dt.selection.some(s => this.dt.equals(v, s)));
      }
    }
    static ɵfac = function TableHeaderCheckbox_Factory(t) {
      return new (t || TableHeaderCheckbox)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Table), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TableService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TableHeaderCheckbox,
      selectors: [["p-tableHeaderCheckbox"]],
      hostAttrs: [1, "p-element"],
      inputs: {
        disabled: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "disabled", "disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        inputId: "inputId",
        name: "name",
        ariaLabel: "ariaLabel"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"]],
      decls: 8,
      vars: 17,
      consts: [["cb", ""], ["box", ""], [1, "p-checkbox", "p-component", 3, "click", "ngClass"], [1, "p-hidden-accessible"], ["type", "checkbox", 3, "focus", "blur", "tabindex", "checked", "disabled"], [3, "ngClass"], [4, "ngIf"], ["class", "p-checkbox-icon", 4, "ngIf"], [3, "styleClass", 4, "ngIf"], [3, "styleClass"], [1, "p-checkbox-icon"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
      template: function TableHeaderCheckbox_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableHeaderCheckbox_Template_div_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onClick($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3)(2, "input", 4, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function TableHeaderCheckbox_Template_input_focus_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onFocus());
          })("blur", function TableHeaderCheckbox_Template_input_blur_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onBlur());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TableHeaderCheckbox_ng_container_6_Template, 2, 1, "ng-container", 6)(7, TableHeaderCheckbox_span_7_Template, 2, 4, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](10, _c25, ctx.focused, ctx.isDisabled()));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tabindex", ctx.disabled ? null : "0")("checked", ctx.checked)("disabled", ctx.isDisabled());
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.inputId)("name", ctx.name)("aria-label", ctx.ariaLabel);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](13, _c27, ctx.checked, ctx.focused, ctx.isDisabled()));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.dt.headerCheckboxIconTemplate);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dt.headerCheckboxIconTemplate);
        }
      },
      dependencies: () => [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet, primeng_icons_check__WEBPACK_IMPORTED_MODULE_14__.CheckIcon],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return TableHeaderCheckbox;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let ReorderableRowHandle = /*#__PURE__*/(() => {
  class ReorderableRowHandle {
    el;
    constructor(el) {
      this.el = el;
    }
    ngAfterViewInit() {
      primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.addClass(this.el.nativeElement, 'p-datatable-reorderablerow-handle');
    }
    static ɵfac = function ReorderableRowHandle_Factory(t) {
      return new (t || ReorderableRowHandle)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: ReorderableRowHandle,
      selectors: [["", "pReorderableRowHandle", ""]],
      hostAttrs: [1, "p-element"]
    });
  }
  return ReorderableRowHandle;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let ReorderableRow = /*#__PURE__*/(() => {
  class ReorderableRow {
    renderer;
    dt;
    el;
    zone;
    index;
    pReorderableRowDisabled;
    mouseDownListener;
    dragStartListener;
    dragEndListener;
    dragOverListener;
    dragLeaveListener;
    dropListener;
    constructor(renderer, dt, el, zone) {
      this.renderer = renderer;
      this.dt = dt;
      this.el = el;
      this.zone = zone;
    }
    ngAfterViewInit() {
      if (this.isEnabled()) {
        this.el.nativeElement.droppable = true;
        this.bindEvents();
      }
    }
    bindEvents() {
      this.zone.runOutsideAngular(() => {
        this.mouseDownListener = this.renderer.listen(this.el.nativeElement, 'mousedown', this.onMouseDown.bind(this));
        this.dragStartListener = this.renderer.listen(this.el.nativeElement, 'dragstart', this.onDragStart.bind(this));
        this.dragEndListener = this.renderer.listen(this.el.nativeElement, 'dragend', this.onDragEnd.bind(this));
        this.dragOverListener = this.renderer.listen(this.el.nativeElement, 'dragover', this.onDragOver.bind(this));
        this.dragLeaveListener = this.renderer.listen(this.el.nativeElement, 'dragleave', this.onDragLeave.bind(this));
      });
    }
    unbindEvents() {
      if (this.mouseDownListener) {
        this.mouseDownListener();
        this.mouseDownListener = null;
      }
      if (this.dragStartListener) {
        this.dragStartListener();
        this.dragStartListener = null;
      }
      if (this.dragEndListener) {
        this.dragEndListener();
        this.dragEndListener = null;
      }
      if (this.dragOverListener) {
        this.dragOverListener();
        this.dragOverListener = null;
      }
      if (this.dragLeaveListener) {
        this.dragLeaveListener();
        this.dragLeaveListener = null;
      }
    }
    onMouseDown(event) {
      const targetElement = event.target;
      const isHandleClicked = this.isHandleElement(targetElement);
      this.el.nativeElement.draggable = isHandleClicked;
    }
    isHandleElement(element) {
      if (element?.classList.contains('p-datatable-reorderablerow-handle')) {
        return true;
      }
      if (element?.parentElement && !['TD', 'TR'].includes(element?.parentElement?.tagName)) {
        return this.isHandleElement(element?.parentElement);
      }
      return false;
    }
    onDragStart(event) {
      this.dt.onRowDragStart(event, this.index);
    }
    onDragEnd(event) {
      this.dt.onRowDragEnd(event);
      this.el.nativeElement.draggable = false;
    }
    onDragOver(event) {
      this.dt.onRowDragOver(event, this.index, this.el.nativeElement);
      event.preventDefault();
    }
    onDragLeave(event) {
      this.dt.onRowDragLeave(event, this.el.nativeElement);
    }
    isEnabled() {
      return this.pReorderableRowDisabled !== true;
    }
    onDrop(event) {
      if (this.isEnabled() && this.dt.rowDragging) {
        this.dt.onRowDrop(event, this.el.nativeElement);
      }
      event.preventDefault();
    }
    ngOnDestroy() {
      this.unbindEvents();
    }
    static ɵfac = function ReorderableRow_Factory(t) {
      return new (t || ReorderableRow)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Table), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: ReorderableRow,
      selectors: [["", "pReorderableRow", ""]],
      hostAttrs: [1, "p-element"],
      hostBindings: function ReorderableRow_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function ReorderableRow_drop_HostBindingHandler($event) {
            return ctx.onDrop($event);
          });
        }
      },
      inputs: {
        index: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].None, "pReorderableRow", "index"],
        pReorderableRowDisabled: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "pReorderableRowDisabled", "pReorderableRowDisabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute]
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"]]
    });
  }
  return ReorderableRow;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let ColumnFilter = /*#__PURE__*/(() => {
  class ColumnFilter {
    document;
    el;
    dt;
    renderer;
    config;
    overlayService;
    cd;
    /**
     * Property represented by the column.
     * @group Props
     */
    field;
    /**
     * Type of the input.
     * @group Props
     */
    type = 'text';
    /**
     * Filter display.
     * @group Props
     */
    display = 'row';
    /**
     * Decides whether to display filter menu popup.
     * @group Props
     */
    showMenu = true;
    /**
     * Filter match mode.
     * @group Props
     */
    matchMode;
    /**
     * Filter operator.
     * @defaultValue 'AND'
     * @group Props
     */
    operator = primeng_api__WEBPACK_IMPORTED_MODULE_5__.FilterOperator.AND;
    /**
     * Decides whether to display filter operator.
     * @group Props
     */
    showOperator = true;
    /**
     * Decides whether to display clear filter button.
     * @group Props
     */
    showClearButton = true;
    /**
     * Decides whether to display apply filter button.
     * @group Props
     */
    showApplyButton = true;
    /**
     * Decides whether to display filter match modes.
     * @group Props
     */
    showMatchModes = true;
    /**
     * Decides whether to display add filter button.
     * @group Props
     */
    showAddButton = true;
    /**
     * Decides whether to close popup on clear button click.
     * @group Props
     */
    hideOnClear = false;
    /**
     * Filter placeholder.
     * @group Props
     */
    placeholder;
    /**
     * Filter match mode options.
     * @group Props
     */
    matchModeOptions;
    /**
     * Defines maximum amount of constraints.
     * @group Props
     */
    maxConstraints = 2;
    /**
     * Defines minimum fraction of digits.
     * @group Props
     */
    minFractionDigits;
    /**
     * Defines maximum fraction of digits.
     * @group Props
     */
    maxFractionDigits;
    /**
     * Defines prefix of the filter.
     * @group Props
     */
    prefix;
    /**
     * Defines suffix of the filter.
     * @group Props
     */
    suffix;
    /**
     * Defines filter locale.
     * @group Props
     */
    locale;
    /**
     * Defines filter locale matcher.
     * @group Props
     */
    localeMatcher;
    /**
     * Enables currency input.
     * @group Props
     */
    currency;
    /**
     * Defines the display of the currency input.
     * @group Props
     */
    currencyDisplay;
    /**
     * Defines if filter grouping will be enabled.
     * @group Props
     */
    useGrouping = true;
    /**
     * Defines the visibility of buttons.
     * @group Props
     */
    showButtons = true;
    /**
     * Defines the aria-label of the form element.
     * @group Props
     */
    ariaLabel;
    /**
     * Callback to invoke on overlay is shown.
     * @param {AnimationEvent} originalEvent - animation event.
     * @group Emits
     */
    onShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke on overlay is hidden.
     * @param {AnimationEvent} originalEvent - animation event.
     * @group Emits
     */
    onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    icon;
    clearButtonViewChild;
    templates;
    overlaySubscription;
    headerTemplate;
    filterTemplate;
    footerTemplate;
    filterIconTemplate;
    removeRuleIconTemplate;
    addRuleIconTemplate;
    clearFilterIconTemplate;
    operatorOptions;
    overlayVisible;
    overlay;
    scrollHandler;
    documentClickListener;
    documentResizeListener;
    matchModes;
    translationSubscription;
    resetSubscription;
    selfClick;
    overlayEventListener;
    window;
    overlayId;
    applyHasBeenClicked = false;
    get fieldConstraints() {
      return this.dt.filters ? this.dt.filters[this.field] : null;
    }
    get showRemoveIcon() {
      return this.fieldConstraints ? this.fieldConstraints.length > 1 : false;
    }
    get showMenuButton() {
      return this.showMenu && (this.display === 'row' ? this.type !== 'boolean' : true);
    }
    get isShowOperator() {
      return this.showOperator && this.type !== 'boolean';
    }
    get isShowAddConstraint() {
      return this.showAddButton && this.type !== 'boolean' && this.fieldConstraints && this.fieldConstraints.length < this.maxConstraints;
    }
    get showMenuButtonLabel() {
      return this.config.getTranslation(primeng_api__WEBPACK_IMPORTED_MODULE_5__.TranslationKeys.SHOW_FILTER_MENU);
    }
    get applyButtonLabel() {
      return this.config.getTranslation(primeng_api__WEBPACK_IMPORTED_MODULE_5__.TranslationKeys.APPLY);
    }
    get clearButtonLabel() {
      return this.config.getTranslation(primeng_api__WEBPACK_IMPORTED_MODULE_5__.TranslationKeys.CLEAR);
    }
    get addRuleButtonLabel() {
      return this.config.getTranslation(primeng_api__WEBPACK_IMPORTED_MODULE_5__.TranslationKeys.ADD_RULE);
    }
    get removeRuleButtonLabel() {
      return this.config.getTranslation(primeng_api__WEBPACK_IMPORTED_MODULE_5__.TranslationKeys.REMOVE_RULE);
    }
    get noFilterLabel() {
      return this.config.getTranslation(primeng_api__WEBPACK_IMPORTED_MODULE_5__.TranslationKeys.NO_FILTER);
    }
    get filterMenuButtonAriaLabel() {
      return this.config.translation ? this.overlayVisible ? this.config.translation.aria.hideFilterMenu : this.config.translation.aria.showFilterMenu : undefined;
    }
    get removeRuleButtonAriaLabel() {
      return this.config.translation ? this.config.translation.removeRule : undefined;
    }
    get filterOperatorAriaLabel() {
      return this.config.translation ? this.config.translation.aria.filterOperator : undefined;
    }
    get filterConstraintAriaLabel() {
      return this.config.translation ? this.config.translation.aria.filterConstraint : undefined;
    }
    constructor(document, el, dt, renderer, config, overlayService, cd) {
      this.document = document;
      this.el = el;
      this.dt = dt;
      this.renderer = renderer;
      this.config = config;
      this.overlayService = overlayService;
      this.cd = cd;
      this.window = this.document.defaultView;
    }
    ngOnInit() {
      this.overlayId = (0,primeng_utils__WEBPACK_IMPORTED_MODULE_2__.UniqueComponentId)();
      if (!this.dt.filters[this.field]) {
        this.initFieldFilterConstraint();
      }
      this.translationSubscription = this.config.translationObserver.subscribe(() => {
        this.generateMatchModeOptions();
        this.generateOperatorOptions();
      });
      this.generateMatchModeOptions();
      this.generateOperatorOptions();
    }
    generateMatchModeOptions() {
      this.matchModes = this.matchModeOptions || this.config.filterMatchModeOptions[this.type]?.map(key => {
        return {
          label: this.config.getTranslation(key),
          value: key
        };
      });
    }
    generateOperatorOptions() {
      this.operatorOptions = [{
        label: this.config.getTranslation(primeng_api__WEBPACK_IMPORTED_MODULE_5__.TranslationKeys.MATCH_ALL),
        value: primeng_api__WEBPACK_IMPORTED_MODULE_5__.FilterOperator.AND
      }, {
        label: this.config.getTranslation(primeng_api__WEBPACK_IMPORTED_MODULE_5__.TranslationKeys.MATCH_ANY),
        value: primeng_api__WEBPACK_IMPORTED_MODULE_5__.FilterOperator.OR
      }];
    }
    ngAfterContentInit() {
      this.templates.forEach(item => {
        switch (item.getType()) {
          case 'header':
            this.headerTemplate = item.template;
            break;
          case 'filter':
            this.filterTemplate = item.template;
            break;
          case 'footer':
            this.footerTemplate = item.template;
            break;
          case 'filtericon':
            this.filterIconTemplate = item.template;
            break;
          case 'clearfiltericon':
            this.clearFilterIconTemplate = item.template;
            break;
          case 'removeruleicon':
            this.removeRuleIconTemplate = item.template;
            break;
          case 'addruleicon':
            this.addRuleIconTemplate = item.template;
            break;
          default:
            this.filterTemplate = item.template;
            break;
        }
      });
    }
    initFieldFilterConstraint() {
      let defaultMatchMode = this.getDefaultMatchMode();
      this.dt.filters[this.field] = this.display == 'row' ? {
        value: null,
        matchMode: defaultMatchMode
      } : [{
        value: null,
        matchMode: defaultMatchMode,
        operator: this.operator
      }];
    }
    onMenuMatchModeChange(value, filterMeta) {
      filterMeta.matchMode = value;
      if (!this.showApplyButton) {
        this.dt._filter();
      }
    }
    onRowMatchModeChange(matchMode) {
      const fieldFilter = this.dt.filters[this.field];
      fieldFilter.matchMode = matchMode;
      if (fieldFilter.value) {
        this.dt._filter();
      }
      this.hide();
    }
    onRowMatchModeKeyDown(event) {
      let item = event.target;
      switch (event.key) {
        case 'ArrowDown':
          var nextItem = this.findNextItem(item);
          if (nextItem) {
            item.removeAttribute('tabindex');
            nextItem.tabIndex = '0';
            nextItem.focus();
          }
          event.preventDefault();
          break;
        case 'ArrowUp':
          var prevItem = this.findPrevItem(item);
          if (prevItem) {
            item.removeAttribute('tabindex');
            prevItem.tabIndex = '0';
            prevItem.focus();
          }
          event.preventDefault();
          break;
      }
    }
    onRowClearItemClick() {
      this.clearFilter();
      this.hide();
    }
    isRowMatchModeSelected(matchMode) {
      return this.dt.filters[this.field].matchMode === matchMode;
    }
    addConstraint() {
      this.dt.filters[this.field].push({
        value: null,
        matchMode: this.getDefaultMatchMode(),
        operator: this.getDefaultOperator()
      });
      primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.focus(this.clearButtonViewChild.nativeElement);
    }
    removeConstraint(filterMeta) {
      this.dt.filters[this.field] = this.dt.filters[this.field].filter(meta => meta !== filterMeta);
      if (!this.showApplyButton) {
        this.dt._filter();
      }
      primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.focus(this.clearButtonViewChild.nativeElement);
    }
    onOperatorChange(value) {
      this.dt.filters[this.field].forEach(filterMeta => {
        filterMeta.operator = value;
        this.operator = value;
      });
      if (!this.showApplyButton) {
        this.dt._filter();
      }
    }
    toggleMenu() {
      this.overlayVisible = !this.overlayVisible;
    }
    onToggleButtonKeyDown(event) {
      switch (event.key) {
        case 'Escape':
        case 'Tab':
          this.overlayVisible = false;
          break;
        case 'ArrowDown':
          if (this.overlayVisible) {
            let focusable = primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.getFocusableElements(this.overlay);
            if (focusable) {
              focusable[0].focus();
            }
            event.preventDefault();
          } else if (event.altKey) {
            this.overlayVisible = true;
            event.preventDefault();
          }
          break;
        case 'Enter':
          this.toggleMenu();
          event.preventDefault();
          break;
      }
    }
    onEscape() {
      if (this.hasFilterNotBeenApplied()) {
        this.clearFilter();
      }
      this.applyHasBeenClicked = false;
      this.overlayVisible = false;
      this.icon?.nativeElement.focus();
    }
    findNextItem(item) {
      let nextItem = item.nextElementSibling;
      if (nextItem) return primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.hasClass(nextItem, 'p-column-filter-separator') ? this.findNextItem(nextItem) : nextItem;else return item.parentElement?.firstElementChild;
    }
    findPrevItem(item) {
      let prevItem = item.previousElementSibling;
      if (prevItem) return primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.hasClass(prevItem, 'p-column-filter-separator') ? this.findPrevItem(prevItem) : prevItem;else return item.parentElement?.lastElementChild;
    }
    onContentClick() {
      this.selfClick = true;
    }
    onOverlayAnimationStart(event) {
      switch (event.toState) {
        case 'visible':
          this.overlay = event.element;
          this.renderer.appendChild(this.document.body, this.overlay);
          primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ZIndexUtils.set('overlay', this.overlay, this.config.zIndex.overlay);
          primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.absolutePosition(this.overlay, this.icon?.nativeElement);
          this.bindDocumentClickListener();
          this.bindDocumentResizeListener();
          this.bindScrollListener();
          this.overlayEventListener = e => {
            if (this.overlay && this.overlay.contains(e.target)) {
              this.selfClick = true;
            }
          };
          this.overlaySubscription = this.overlayService.clickObservable.subscribe(this.overlayEventListener);
          this.onShow.emit({
            originalEvent: event
          });
          break;
        case 'void':
          this.onOverlayHide();
          if (this.overlaySubscription) {
            this.overlaySubscription.unsubscribe();
          }
          break;
      }
    }
    onOverlayAnimationEnd(event) {
      switch (event.toState) {
        case 'visible':
          this.focusOnFirstElement();
          break;
        case 'void':
          primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ZIndexUtils.clear(event.element);
          this.onHide.emit({
            originalEvent: event
          });
          break;
      }
    }
    focusOnFirstElement() {
      if (this.overlay) {
        primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.focus(primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.getFirstFocusableElement(this.overlay, ''));
      }
    }
    getDefaultMatchMode() {
      if (this.matchMode) {
        return this.matchMode;
      } else {
        if (this.type === 'text') return primeng_api__WEBPACK_IMPORTED_MODULE_5__.FilterMatchMode.STARTS_WITH;else if (this.type === 'numeric') return primeng_api__WEBPACK_IMPORTED_MODULE_5__.FilterMatchMode.EQUALS;else if (this.type === 'date') return primeng_api__WEBPACK_IMPORTED_MODULE_5__.FilterMatchMode.DATE_IS;else return primeng_api__WEBPACK_IMPORTED_MODULE_5__.FilterMatchMode.CONTAINS;
      }
    }
    getDefaultOperator() {
      return this.dt.filters ? this.dt.filters[this.field][0].operator : this.operator;
    }
    hasRowFilter() {
      return this.dt.filters[this.field] && !this.dt.isFilterBlank(this.dt.filters[this.field].value);
    }
    hasFilter() {
      let fieldFilter = this.dt.filters[this.field];
      if (fieldFilter) {
        if (Array.isArray(fieldFilter)) return !this.dt.isFilterBlank(fieldFilter[0].value);else return !this.dt.isFilterBlank(fieldFilter.value);
      }
      return false;
    }
    hasFilterNotBeenApplied() {
      return this.hasFilter() && !this.applyHasBeenClicked;
    }
    isOutsideClicked(event) {
      return !(primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.hasClass(this.overlay?.nextElementSibling, 'p-overlay') || this.overlay?.isSameNode(event.target) || this.overlay?.contains(event.target) || this.icon?.nativeElement.isSameNode(event.target) || this.icon?.nativeElement.contains(event.target) || primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.hasClass(event.target, 'p-column-filter-add-button') || primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.hasClass(event.target.parentElement, 'p-column-filter-add-button') || primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.hasClass(event.target, 'p-column-filter-remove-button') || primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.hasClass(event.target.parentElement, 'p-column-filter-remove-button'));
    }
    bindDocumentClickListener() {
      if (!this.documentClickListener) {
        const documentTarget = this.el ? this.el.nativeElement.ownerDocument : 'document';
        this.documentClickListener = this.renderer.listen(documentTarget, 'mousedown', event => {
          const dialogElements = document.querySelectorAll('[role="dialog"]');
          const targetIsColumnFilterMenuButton = event.target.closest('.p-column-filter-menu-button');
          if (this.overlayVisible && this.isOutsideClicked(event) && (targetIsColumnFilterMenuButton || dialogElements?.length <= 1)) {
            this.hide();
          }
          this.selfClick = false;
        });
      }
    }
    unbindDocumentClickListener() {
      if (this.documentClickListener) {
        this.documentClickListener();
        this.documentClickListener = null;
        this.selfClick = false;
      }
    }
    bindDocumentResizeListener() {
      if (!this.documentResizeListener) {
        this.documentResizeListener = this.renderer.listen(this.window, 'resize', event => {
          if (this.overlayVisible && !primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.isTouchDevice()) {
            this.hide();
          }
        });
      }
    }
    unbindDocumentResizeListener() {
      if (this.documentResizeListener) {
        this.documentResizeListener();
        this.documentResizeListener = null;
      }
    }
    bindScrollListener() {
      if (!this.scrollHandler) {
        this.scrollHandler = new primeng_dom__WEBPACK_IMPORTED_MODULE_4__.ConnectedOverlayScrollHandler(this.icon?.nativeElement, () => {
          if (this.overlayVisible) {
            this.hide();
          }
        });
      }
      this.scrollHandler.bindScrollListener();
    }
    unbindScrollListener() {
      if (this.scrollHandler) {
        this.scrollHandler.unbindScrollListener();
      }
    }
    hide() {
      if (this.hasFilterNotBeenApplied()) {
        this.clearFilter();
      }
      this.applyHasBeenClicked = false;
      this.overlayVisible = false;
      this.cd.markForCheck();
    }
    onOverlayHide() {
      this.unbindDocumentClickListener();
      this.unbindDocumentResizeListener();
      this.unbindScrollListener();
      this.overlay = null;
    }
    clearFilter() {
      this.applyHasBeenClicked = false;
      this.initFieldFilterConstraint();
      this.dt._filter();
      if (this.hideOnClear) this.hide();
    }
    applyFilter() {
      this.applyHasBeenClicked = true;
      this.dt._filter();
      this.hide();
    }
    ngOnDestroy() {
      if (this.overlay) {
        this.renderer.appendChild(this.el.nativeElement, this.overlay);
        primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ZIndexUtils.clear(this.overlay);
        this.onOverlayHide();
      }
      if (this.translationSubscription) {
        this.translationSubscription.unsubscribe();
      }
      if (this.resetSubscription) {
        this.resetSubscription.unsubscribe();
      }
      if (this.overlaySubscription) {
        this.overlaySubscription.unsubscribe();
      }
    }
    static ɵfac = function ColumnFilter_Factory(t) {
      return new (t || ColumnFilter)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Table), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_5__.PrimeNGConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_5__.OverlayService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ColumnFilter,
      selectors: [["p-columnFilter"]],
      contentQueries: function ColumnFilter_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_5__.PrimeTemplate, 4);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
        }
      },
      viewQuery: function ColumnFilter_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c28, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c29, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.icon = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.clearButtonViewChild = _t.first);
        }
      },
      hostAttrs: [1, "p-element"],
      inputs: {
        field: "field",
        type: "type",
        display: "display",
        showMenu: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "showMenu", "showMenu", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        matchMode: "matchMode",
        operator: "operator",
        showOperator: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "showOperator", "showOperator", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        showClearButton: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "showClearButton", "showClearButton", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        showApplyButton: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "showApplyButton", "showApplyButton", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        showMatchModes: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "showMatchModes", "showMatchModes", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        showAddButton: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "showAddButton", "showAddButton", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        hideOnClear: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "hideOnClear", "hideOnClear", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        placeholder: "placeholder",
        matchModeOptions: "matchModeOptions",
        maxConstraints: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "maxConstraints", "maxConstraints", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute],
        minFractionDigits: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "minFractionDigits", "minFractionDigits", value => (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute)(value, null)],
        maxFractionDigits: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "maxFractionDigits", "maxFractionDigits", value => (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute)(value, null)],
        prefix: "prefix",
        suffix: "suffix",
        locale: "locale",
        localeMatcher: "localeMatcher",
        currency: "currency",
        currencyDisplay: "currencyDisplay",
        useGrouping: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "useGrouping", "useGrouping", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        showButtons: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "showButtons", "showButtons", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        ariaLabel: "ariaLabel"
      },
      outputs: {
        onShow: "onShow",
        onHide: "onHide"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"]],
      decls: 5,
      vars: 8,
      consts: [["icon", ""], ["menu", ""], ["clearBtn", ""], [1, "p-column-filter", 3, "ngClass"], ["class", "p-fluid", 3, "type", "field", "ariaLabel", "filterConstraint", "filterTemplate", "placeholder", "minFractionDigits", "maxFractionDigits", "prefix", "suffix", "locale", "localeMatcher", "currency", "currencyDisplay", "useGrouping", "showButtons", 4, "ngIf"], ["type", "button", "class", "p-column-filter-menu-button p-link", "aria-haspopup", "true", 3, "ngClass", "click", "keydown", 4, "ngIf"], ["type", "button", "class", "p-column-filter-clear-button p-link", 3, "ngClass", "click", 4, "ngIf"], ["role", "dialog", 3, "ngClass", "id", "click", "keydown.escape", 4, "ngIf"], [1, "p-fluid", 3, "type", "field", "ariaLabel", "filterConstraint", "filterTemplate", "placeholder", "minFractionDigits", "maxFractionDigits", "prefix", "suffix", "locale", "localeMatcher", "currency", "currencyDisplay", "useGrouping", "showButtons"], ["type", "button", "aria-haspopup", "true", 1, "p-column-filter-menu-button", "p-link", 3, "click", "keydown", "ngClass"], [3, "styleClass", 4, "ngIf"], ["class", "pi-filter-icon", 4, "ngIf"], [3, "styleClass"], [1, "pi-filter-icon"], [4, "ngTemplateOutlet"], ["type", "button", 1, "p-column-filter-clear-button", "p-link", 3, "click", "ngClass"], [4, "ngIf"], ["role", "dialog", 3, "click", "keydown.escape", "ngClass", "id"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "p-column-filter-row-items", 4, "ngIf", "ngIfElse"], [1, "p-column-filter-row-items"], ["class", "p-column-filter-row-item", 3, "ngClass", "click", "keydown", "keydown.enter", 4, "ngFor", "ngForOf"], [1, "p-column-filter-separator"], [1, "p-column-filter-row-item", 3, "click", "keydown", "keydown.enter"], [1, "p-column-filter-row-item", 3, "click", "keydown", "keydown.enter", "ngClass"], ["class", "p-column-filter-operator", 4, "ngIf"], [1, "p-column-filter-constraints"], ["class", "p-column-filter-constraint", 4, "ngFor", "ngForOf"], ["class", "p-column-filter-add-rule", 4, "ngIf"], [1, "p-column-filter-buttonbar"], ["type", "button", "pButton", "", "class", "p-button-outlined p-button-sm", "pRipple", "", 3, "label", "click", 4, "ngIf"], ["type", "button", "pButton", "", "class", "p-button-sm", "pRipple", "", 3, "label", "click", 4, "ngIf"], [1, "p-column-filter-operator"], ["styleClass", "p-column-filter-operator-dropdown", 3, "ngModelChange", "options", "ngModel"], [1, "p-column-filter-constraint"], ["styleClass", "p-column-filter-matchmode-dropdown", 3, "options", "ngModel", "ngModelChange", 4, "ngIf"], [3, "type", "field", "filterConstraint", "filterTemplate", "placeholder", "minFractionDigits", "maxFractionDigits", "prefix", "suffix", "locale", "localeMatcher", "currency", "currencyDisplay", "useGrouping"], ["type", "button", "pButton", "", "class", "p-column-filter-remove-button p-button-text p-button-danger p-button-sm", "pRipple", "", 3, "label", "click", 4, "ngIf"], ["styleClass", "p-column-filter-matchmode-dropdown", 3, "ngModelChange", "options", "ngModel"], ["type", "button", "pButton", "", "pRipple", "", 1, "p-column-filter-remove-button", "p-button-text", "p-button-danger", "p-button-sm", 3, "click", "label"], [1, "p-column-filter-add-rule"], ["type", "button", "pButton", "", "pRipple", "", 1, "p-column-filter-add-button", "p-button-text", "p-button-sm", 3, "click", "label"], ["type", "button", "pButton", "", "pRipple", "", 1, "p-button-outlined", "p-button-sm", 3, "click", "label"], ["type", "button", "pButton", "", "pRipple", "", 1, "p-button-sm", 3, "click", "label"]],
      template: function ColumnFilter_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ColumnFilter_p_columnFilterFormElement_1_Template, 1, 16, "p-columnFilterFormElement", 4)(2, ColumnFilter_button_2_Template, 4, 9, "button", 5)(3, ColumnFilter_button_3_Template, 4, 6, "button", 6)(4, ColumnFilter_div_4_Template, 6, 16, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c30, ctx.display === "row", ctx.display === "menu"));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.display === "row");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showMenuButton);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showClearButton && ctx.display === "row");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showMenu && ctx.overlayVisible);
        }
      },
      dependencies: () => [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet, primeng_dropdown__WEBPACK_IMPORTED_MODULE_15__.Dropdown, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgModel, primeng_button__WEBPACK_IMPORTED_MODULE_17__.ButtonDirective, primeng_icons_filter__WEBPACK_IMPORTED_MODULE_18__.FilterIcon, primeng_icons_filterslash__WEBPACK_IMPORTED_MODULE_19__.FilterSlashIcon, primeng_icons_plus__WEBPACK_IMPORTED_MODULE_20__.PlusIcon, primeng_icons_trash__WEBPACK_IMPORTED_MODULE_21__.TrashIcon, ColumnFilterFormElement],
      encapsulation: 2,
      data: {
        animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_22__.trigger)('overlayAnimation', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_22__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_22__.style)({
          opacity: 0,
          transform: 'scaleY(0.8)'
        }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_22__.animate)('.12s cubic-bezier(0, 0, 0.2, 1)')]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_22__.transition)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_22__.animate)('.1s linear', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_22__.style)({
          opacity: 0
        }))])])]
      }
    });
  }
  return ColumnFilter;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let ColumnFilterFormElement = /*#__PURE__*/(() => {
  class ColumnFilterFormElement {
    dt;
    colFilter;
    field;
    type;
    filterConstraint;
    filterTemplate;
    placeholder;
    minFractionDigits;
    maxFractionDigits;
    prefix;
    suffix;
    locale;
    localeMatcher;
    currency;
    currencyDisplay;
    useGrouping = true;
    ariaLabel;
    get showButtons() {
      return this.colFilter.showButtons;
    }
    filterCallback;
    constructor(dt, colFilter) {
      this.dt = dt;
      this.colFilter = colFilter;
    }
    ngOnInit() {
      this.filterCallback = value => {
        this.filterConstraint.value = value;
        this.dt._filter();
      };
    }
    onModelChange(value) {
      this.filterConstraint.value = value;
      if (this.type === 'date' || this.type === 'boolean' || value === '') {
        this.dt._filter();
      }
    }
    onTextInputEnterKeyDown(event) {
      this.dt._filter();
      event.preventDefault();
    }
    onNumericInputKeyDown(event) {
      if (event.key === 'Enter') {
        this.dt._filter();
        event.preventDefault();
      }
    }
    static ɵfac = function ColumnFilterFormElement_Factory(t) {
      return new (t || ColumnFilterFormElement)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Table), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ColumnFilter));
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ColumnFilterFormElement,
      selectors: [["p-columnFilterFormElement"]],
      hostAttrs: [1, "p-element"],
      inputs: {
        field: "field",
        type: "type",
        filterConstraint: "filterConstraint",
        filterTemplate: "filterTemplate",
        placeholder: "placeholder",
        minFractionDigits: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "minFractionDigits", "minFractionDigits", value => (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute)(value, null)],
        maxFractionDigits: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "maxFractionDigits", "maxFractionDigits", value => (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute)(value, null)],
        prefix: "prefix",
        suffix: "suffix",
        locale: "locale",
        localeMatcher: "localeMatcher",
        currency: "currency",
        currencyDisplay: "currencyDisplay",
        useGrouping: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "useGrouping", "useGrouping", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        ariaLabel: "ariaLabel"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"]],
      decls: 3,
      vars: 2,
      consts: [["builtInElement", ""], [4, "ngIf", "ngIfElse"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "ngSwitch"], ["type", "text", "pInputText", "", 3, "ariaLabel", "value", "input", "keydown.enter", 4, "ngSwitchCase"], [3, "ngModel", "showButtons", "minFractionDigits", "maxFractionDigits", "ariaLabel", "prefix", "suffix", "placeholder", "mode", "locale", "localeMatcher", "currency", "currencyDisplay", "useGrouping", "ngModelChange", "onKeyDown", 4, "ngSwitchCase"], [3, "ariaLabel", "ngModel", "ngModelChange", 4, "ngSwitchCase"], ["appendTo", "body", 3, "ariaLabel", "placeholder", "ngModel", "ngModelChange", 4, "ngSwitchCase"], ["type", "text", "pInputText", "", 3, "input", "keydown.enter", "ariaLabel", "value"], [3, "ngModelChange", "onKeyDown", "ngModel", "showButtons", "minFractionDigits", "maxFractionDigits", "ariaLabel", "prefix", "suffix", "placeholder", "mode", "locale", "localeMatcher", "currency", "currencyDisplay", "useGrouping"], [3, "ngModelChange", "ariaLabel", "ngModel"], ["appendTo", "body", 3, "ngModelChange", "ariaLabel", "placeholder", "ngModel"]],
      template: function ColumnFilterFormElement_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ColumnFilterFormElement_ng_container_0_Template, 2, 19, "ng-container", 1)(1, ColumnFilterFormElement_ng_template_1_Template, 5, 5, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }
        if (rf & 2) {
          const builtInElement_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.filterTemplate)("ngIfElse", builtInElement_r6);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgSwitchCase, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_23__.InputNumber, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgModel, primeng_inputtext__WEBPACK_IMPORTED_MODULE_24__.InputText, primeng_calendar__WEBPACK_IMPORTED_MODULE_25__.Calendar, primeng_tristatecheckbox__WEBPACK_IMPORTED_MODULE_26__.TriStateCheckbox],
      encapsulation: 2
    });
  }
  return ColumnFilterFormElement;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TableModule = /*#__PURE__*/(() => {
  class TableModule {
    static ɵfac = function TableModule_Factory(t) {
      return new (t || TableModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: TableModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, primeng_paginator__WEBPACK_IMPORTED_MODULE_6__.PaginatorModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_24__.InputTextModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_15__.DropdownModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule, primeng_button__WEBPACK_IMPORTED_MODULE_17__.ButtonModule, primeng_selectbutton__WEBPACK_IMPORTED_MODULE_27__.SelectButtonModule, primeng_calendar__WEBPACK_IMPORTED_MODULE_25__.CalendarModule, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_23__.InputNumberModule, primeng_tristatecheckbox__WEBPACK_IMPORTED_MODULE_26__.TriStateCheckboxModule, primeng_scroller__WEBPACK_IMPORTED_MODULE_7__.ScrollerModule, primeng_icons_arrowdown__WEBPACK_IMPORTED_MODULE_8__.ArrowDownIcon, primeng_icons_arrowup__WEBPACK_IMPORTED_MODULE_9__.ArrowUpIcon, primeng_icons_spinner__WEBPACK_IMPORTED_MODULE_10__.SpinnerIcon, primeng_icons_sortalt__WEBPACK_IMPORTED_MODULE_11__.SortAltIcon, primeng_icons_sortamountupalt__WEBPACK_IMPORTED_MODULE_12__.SortAmountUpAltIcon, primeng_icons_sortamountdown__WEBPACK_IMPORTED_MODULE_13__.SortAmountDownIcon, primeng_icons_check__WEBPACK_IMPORTED_MODULE_14__.CheckIcon, primeng_icons_filter__WEBPACK_IMPORTED_MODULE_18__.FilterIcon, primeng_icons_filterslash__WEBPACK_IMPORTED_MODULE_19__.FilterSlashIcon, primeng_icons_plus__WEBPACK_IMPORTED_MODULE_20__.PlusIcon, primeng_icons_trash__WEBPACK_IMPORTED_MODULE_21__.TrashIcon, primeng_api__WEBPACK_IMPORTED_MODULE_5__.SharedModule, primeng_scroller__WEBPACK_IMPORTED_MODULE_7__.ScrollerModule]
    });
  }
  return TableModule;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 8833:
/*!********************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-tristatecheckbox.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TRISTATECHECKBOX_VALUE_ACCESSOR: () => (/* binding */ TRISTATECHECKBOX_VALUE_ACCESSOR),
/* harmony export */   TriStateCheckbox: () => (/* binding */ TriStateCheckbox),
/* harmony export */   TriStateCheckboxModule: () => (/* binding */ TriStateCheckboxModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ 7780);
/* harmony import */ var primeng_icons_check__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/icons/check */ 2289);
/* harmony import */ var primeng_icons_times__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/icons/times */ 7727);
/* harmony import */ var primeng_autofocus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/autofocus */ 7159);











const _c0 = (a0, a1, a2) => ({
  "p-checkbox p-component": true,
  "p-checkbox-disabled": a0,
  "p-checkbox-focused": a1,
  "p-variant-filled": a2
});
const _c1 = (a0, a1, a2) => ({
  "p-highlight": a0,
  "p-disabled": a1,
  "p-focus": a2
});
const _c2 = (a0, a1, a2) => ({
  "p-checkbox-label-active": a0,
  "p-disabled": a1,
  "p-checkbox-label-focus": a2
});
function TriStateCheckbox_ng_container_5_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 8);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r2.checkboxTrueIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "checkIcon");
  }
}
function TriStateCheckbox_ng_container_5_ng_container_2_CheckIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "CheckIcon", 11);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-checkbox-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "checkIcon");
  }
}
function TriStateCheckbox_ng_container_5_ng_container_2_span_2_1_ng_template_0_Template(rf, ctx) {}
function TriStateCheckbox_ng_container_5_ng_container_2_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TriStateCheckbox_ng_container_5_ng_container_2_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function TriStateCheckbox_ng_container_5_ng_container_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TriStateCheckbox_ng_container_5_ng_container_2_span_2_1_Template, 1, 0, null, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "checkIcon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.checkIconTemplate);
  }
}
function TriStateCheckbox_ng_container_5_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TriStateCheckbox_ng_container_5_ng_container_2_CheckIcon_1_Template, 1, 2, "CheckIcon", 9)(2, TriStateCheckbox_ng_container_5_ng_container_2_span_2_Template, 2, 2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.checkIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.checkIconTemplate);
  }
}
function TriStateCheckbox_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TriStateCheckbox_ng_container_5_span_1_Template, 1, 2, "span", 7)(2, TriStateCheckbox_ng_container_5_ng_container_2_Template, 3, 2, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.checkboxTrueIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.checkboxTrueIcon);
  }
}
function TriStateCheckbox_ng_container_6_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 8);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r2.checkboxFalseIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "uncheckIcon");
  }
}
function TriStateCheckbox_ng_container_6_ng_container_2_TimesIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "TimesIcon", 11);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-checkbox-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "uncheckIcon");
  }
}
function TriStateCheckbox_ng_container_6_ng_container_2_span_2_1_ng_template_0_Template(rf, ctx) {}
function TriStateCheckbox_ng_container_6_ng_container_2_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TriStateCheckbox_ng_container_6_ng_container_2_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function TriStateCheckbox_ng_container_6_ng_container_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TriStateCheckbox_ng_container_6_ng_container_2_span_2_1_Template, 1, 0, null, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "uncheckIcon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.uncheckIconTemplate);
  }
}
function TriStateCheckbox_ng_container_6_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TriStateCheckbox_ng_container_6_ng_container_2_TimesIcon_1_Template, 1, 2, "TimesIcon", 9)(2, TriStateCheckbox_ng_container_6_ng_container_2_span_2_Template, 2, 2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.uncheckIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.uncheckIconTemplate);
  }
}
function TriStateCheckbox_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TriStateCheckbox_ng_container_6_span_1_Template, 1, 2, "span", 7)(2, TriStateCheckbox_ng_container_6_ng_container_2_Template, 3, 2, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.checkboxFalseIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.checkboxFalseIcon);
  }
}
function TriStateCheckbox_label_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TriStateCheckbox_label_7_Template_label_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      const input_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onClick($event, input_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](3, _c2, ctx_r2.value != null, ctx_r2.disabled, ctx_r2.focused));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("for", ctx_r2.inputId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.label);
  }
}
const TRISTATECHECKBOX_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
  useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => TriStateCheckbox),
  multi: true
};
/**
 * TriStateCheckbox is used to select either 'true', 'false' or 'null' as the value.
 * @group Components
 */
let TriStateCheckbox = /*#__PURE__*/(() => {
  class TriStateCheckbox {
    cd;
    config;
    constructor(cd, config) {
      this.cd = cd;
      this.config = config;
    }
    /**
     * When present, it specifies that the element should be disabled.
     * @group Props
     */
    disabled;
    /**
     * Name of the component.
     * @group Props
     */
    name;
    /**
     * Defines a string that labels the input for accessibility.
     * @group Props
     */
    ariaLabel;
    /**
     * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
     * @group Props
     */
    ariaLabelledBy;
    /**
     * Specifies the input variant of the component.
     * @group Props
     */
    variant = 'outlined';
    /**
     * Index of the element in tabbing order.
     * @group Props
     */
    tabindex;
    /**
     * Identifier of the focus input to match a label defined for the component.
     * @group Props
     */
    inputId;
    /**
     * Inline style of the component.
     * @group Props
     */
    style;
    /**
     * Style class of the component.
     * @group Props
     */
    styleClass;
    /**
     * Label of the checkbox.
     * @group Props
     */
    label;
    /**
     * When present, it specifies that the component cannot be edited.
     * @group Props
     */
    readonly;
    /**
     * Specifies the icon for checkbox true value.
     * @group Props
     */
    checkboxTrueIcon;
    /**
     * Specifies the icon for checkbox false value.
     * @group Props
     */
    checkboxFalseIcon;
    /**
     * When present, it specifies that the component should automatically get focus on load.
     * @group Props
     */
    autofocus;
    /**
     * Callback to invoke on value change.
     * @param {TriStateCheckboxChangeEvent} event - Custom change event.
     * @group Emits
     */
    onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    templates;
    checkIconTemplate;
    uncheckIconTemplate;
    focused;
    value;
    onModelChange = () => {};
    onModelTouched = () => {};
    onClick(event, input) {
      if (!this.disabled && !this.readonly) {
        this.toggle(event);
        this.focused = true;
        input.focus();
      }
    }
    onKeyDown(event) {
      if (event.key === 'Enter') {
        this.toggle(event);
        event.preventDefault();
      }
    }
    toggle(event) {
      if (this.value == null || this.value == undefined) this.value = true;else if (this.value == true) this.value = false;else if (this.value == false) this.value = null;
      this.onModelChange(this.value);
      this.onChange.emit({
        originalEvent: event,
        value: this.value
      });
    }
    ngAfterContentInit() {
      this.templates.forEach(item => {
        switch (item.getType()) {
          case 'checkicon':
            this.checkIconTemplate = item.template;
            break;
          case 'uncheckicon':
            this.uncheckIconTemplate = item.template;
            break;
        }
      });
    }
    onFocus() {
      this.focused = true;
    }
    onBlur() {
      this.focused = false;
      this.onModelTouched();
    }
    registerOnChange(fn) {
      this.onModelChange = fn;
    }
    registerOnTouched(fn) {
      this.onModelTouched = fn;
    }
    writeValue(value) {
      this.value = value;
      this.cd.markForCheck();
    }
    setDisabledState(disabled) {
      this.disabled = disabled;
      this.cd.markForCheck();
    }
    static ɵfac = function TriStateCheckbox_Factory(t) {
      return new (t || TriStateCheckbox)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_2__.PrimeNGConfig));
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TriStateCheckbox,
      selectors: [["p-triStateCheckbox"]],
      contentQueries: function TriStateCheckbox_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_2__.PrimeTemplate, 4);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
        }
      },
      hostAttrs: [1, "p-element"],
      inputs: {
        disabled: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "disabled", "disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        name: "name",
        ariaLabel: "ariaLabel",
        ariaLabelledBy: "ariaLabelledBy",
        variant: "variant",
        tabindex: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "tabindex", "tabindex", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute],
        inputId: "inputId",
        style: "style",
        styleClass: "styleClass",
        label: "label",
        readonly: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "readonly", "readonly", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        checkboxTrueIcon: "checkboxTrueIcon",
        checkboxFalseIcon: "checkboxFalseIcon",
        autofocus: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "autofocus", "autofocus", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute]
      },
      outputs: {
        onChange: "onChange"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([TRISTATECHECKBOX_VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"]],
      decls: 8,
      vars: 28,
      consts: [["input", ""], [3, "click", "ngStyle", "ngClass"], [1, "p-hidden-accessible"], ["type", "checkbox", "inputmode", "none", "pAutoFocus", "", 3, "keydown", "focus", "blur", "name", "readonly", "disabled", "autofocus"], ["role", "checkbox", 1, "p-checkbox-box", 3, "ngClass"], [4, "ngIf"], ["class", "p-checkbox-label", 3, "ngClass", "click", 4, "ngIf"], ["class", "p-checkbox-icon", 3, "ngClass", 4, "ngIf"], [1, "p-checkbox-icon", 3, "ngClass"], [3, "styleClass", 4, "ngIf"], ["class", "p-checkbox-icon", 4, "ngIf"], [3, "styleClass"], [1, "p-checkbox-icon"], [4, "ngTemplateOutlet"], [1, "p-checkbox-label", 3, "click", "ngClass"]],
      template: function TriStateCheckbox_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TriStateCheckbox_Template_div_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            const input_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onClick($event, input_r2));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2)(2, "input", 3, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function TriStateCheckbox_Template_input_keydown_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onKeyDown($event));
          })("focus", function TriStateCheckbox_Template_input_focus_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onFocus());
          })("blur", function TriStateCheckbox_Template_input_blur_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onBlur());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TriStateCheckbox_ng_container_5_Template, 3, 2, "ng-container", 5)(6, TriStateCheckbox_ng_container_6_Template, 3, 2, "ng-container", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TriStateCheckbox_label_7_Template, 2, 7, "label", 6);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.styleClass);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.style)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](20, _c0, ctx.disabled, ctx.focused, ctx.variant === "filled" || ctx.config.inputStyle() === "filled"));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-name", "tristatecheckbox")("data-pc-section", "root");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", ctx.name)("readonly", ctx.readonly)("disabled", ctx.disabled)("autofocus", ctx.autofocus);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.inputId)("tabindex", ctx.tabindex)("aria-labelledby", ctx.ariaLabelledBy)("aria-label", ctx.ariaLabel)("data-pc-section", "hiddenInput");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](24, _c1, ctx.value != null, ctx.disabled, ctx.focused));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-checked", ctx.value === true);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.value === true);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.value === false);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.label);
        }
      },
      dependencies: () => [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle, primeng_autofocus__WEBPACK_IMPORTED_MODULE_4__.AutoFocus, primeng_icons_check__WEBPACK_IMPORTED_MODULE_5__.CheckIcon, primeng_icons_times__WEBPACK_IMPORTED_MODULE_6__.TimesIcon],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return TriStateCheckbox;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TriStateCheckboxModule = /*#__PURE__*/(() => {
  class TriStateCheckboxModule {
    static ɵfac = function TriStateCheckboxModule_Factory(t) {
      return new (t || TriStateCheckboxModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: TriStateCheckboxModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, primeng_api__WEBPACK_IMPORTED_MODULE_2__.SharedModule, primeng_autofocus__WEBPACK_IMPORTED_MODULE_4__.AutoFocusModule, primeng_icons_check__WEBPACK_IMPORTED_MODULE_5__.CheckIcon, primeng_icons_times__WEBPACK_IMPORTED_MODULE_6__.TimesIcon, primeng_api__WEBPACK_IMPORTED_MODULE_2__.SharedModule]
    });
  }
  return TriStateCheckboxModule;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=676.c75698e459989957.js.map