"use strict";
(self["webpackChunkautosubliminal"] = self["webpackChunkautosubliminal"] || []).push([[882],{

/***/ 4194:
/*!*************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-autofocus.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AutoFocus: () => (/* binding */ AutoFocus),
/* harmony export */   AutoFocusModule: () => (/* binding */ AutoFocusModule)
/* harmony export */ });
/* harmony import */ var C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/dom */ 4946);






/**
 * AutoFocus manages focus on focusable element on load.
 * @group Components
 */
let AutoFocus = /*#__PURE__*/(() => {
  class AutoFocus {
    constructor(host) {
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "host", void 0);
      /**
       * When present, it specifies that the component should automatically get focus on load.
       * @group Props
       */
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "autofocus", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "focused", false);
      this.host = host;
    }
    ngAfterContentChecked() {
      if (!this.focused) {
        if (this.autofocus) {
          const focusableElements = primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.getFocusableElements(this.host.nativeElement);
          if (focusableElements.length === 0) {
            this.host.nativeElement.focus();
          }
          if (focusableElements.length > 0) {
            focusableElements[0].focus();
          }
          this.focused = true;
        }
      }
    }
  }
  (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(AutoFocus, "\u0275fac", function AutoFocus_Factory(t) {
    return new (t || AutoFocus)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef));
  });
  (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(AutoFocus, "\u0275dir", /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
    type: AutoFocus,
    selectors: [["", "pAutoFocus", ""]],
    hostAttrs: [1, "p-element"],
    inputs: {
      autofocus: "autofocus"
    }
  }));
  return AutoFocus;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let AutoFocusModule = /*#__PURE__*/(() => {
  class AutoFocusModule {}
  (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(AutoFocusModule, "\u0275fac", function AutoFocusModule_Factory(t) {
    return new (t || AutoFocusModule)();
  });
  (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(AutoFocusModule, "\u0275mod", /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: AutoFocusModule
  }));
  (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(AutoFocusModule, "\u0275inj", /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule]
  }));
  return AutoFocusModule;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 2947:
/*!**********************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-button.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Button: () => (/* binding */ Button),
/* harmony export */   ButtonDirective: () => (/* binding */ ButtonDirective),
/* harmony export */   ButtonModule: () => (/* binding */ ButtonModule)
/* harmony export */ });
/* harmony import */ var C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ 8026);
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/dom */ 4946);
/* harmony import */ var primeng_icons_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/icons/spinner */ 9184);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/ripple */ 1339);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/utils */ 5861);











function Button_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
function Button_ng_container_3_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 8);
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"]("p-button-loading-icon pi-spin " + ctx_r7.loadingIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r7.iconClass());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-hidden", true)("data-pc-section", "loadingicon");
  }
}
function Button_ng_container_3_ng_container_1_SpinnerIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "SpinnerIcon", 9);
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("styleClass", ctx_r8.spinnerIconClass())("spin", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-hidden", true)("data-pc-section", "loadingicon");
  }
}
function Button_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, Button_ng_container_3_ng_container_1_span_1_Template, 1, 5, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, Button_ng_container_3_ng_container_1_SpinnerIcon_2_Template, 1, 4, "SpinnerIcon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.loadingIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r5.loadingIcon);
  }
}
function Button_ng_container_3_span_2_1_ng_template_0_Template(rf, ctx) {}
function Button_ng_container_3_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, Button_ng_container_3_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Button_ng_container_3_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, Button_ng_container_3_span_2_1_Template, 1, 0, null, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r6.iconClass());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-hidden", true)("data-pc-section", "loadingicon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r6.loadingIconTemplate);
  }
}
function Button_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, Button_ng_container_3_ng_container_1_Template, 3, 2, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, Button_ng_container_3_span_2_Template, 2, 4, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.loadingIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.loadingIconTemplate);
  }
}
function Button_ng_container_4_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 8);
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r11.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r11.iconClass());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-pc-section", "icon");
  }
}
function Button_ng_container_4_span_2_1_ng_template_0_Template(rf, ctx) {}
function Button_ng_container_4_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, Button_ng_container_4_span_2_1_ng_template_0_Template, 0, 0, "ng-template", 12);
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r13.icon);
  }
}
function Button_ng_container_4_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, Button_ng_container_4_span_2_1_Template, 1, 1, null, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r12.iconClass());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-pc-section", "icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r12.iconTemplate);
  }
}
function Button_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, Button_ng_container_4_span_1_Template, 1, 4, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, Button_ng_container_4_span_2_Template, 2, 3, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.icon && !ctx_r2.iconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r2.icon && ctx_r2.iconTemplate);
  }
}
function Button_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-hidden", ctx_r3.icon && !ctx_r3.label)("data-pc-section", "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.label);
  }
}
function Button_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r4.badgeClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r4.badgeStyleClass());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-pc-section", "badge");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.badge);
  }
}
const _c0 = ["*"];
const INTERNAL_BUTTON_CLASSES = {
  button: 'p-button',
  component: 'p-component',
  iconOnly: 'p-button-icon-only',
  disabled: 'p-disabled',
  loading: 'p-button-loading',
  labelOnly: 'p-button-loading-label-only'
};
/**
 * Button directive is an extension to button component.
 * @group Components
 */
let ButtonDirective = /*#__PURE__*/(() => {
  class ButtonDirective {
    /**
     * Text of the button.
     * @group Props
     */
    get label() {
      return this._label;
    }
    set label(val) {
      this._label = val;
      if (this.initialized) {
        this.updateLabel();
        this.updateIcon();
        this.setStyleClass();
      }
    }
    /**
     * Name of the icon.
     * @group Props
     */
    get icon() {
      return this._icon;
    }
    set icon(val) {
      this._icon = val;
      if (this.initialized) {
        this.updateIcon();
        this.setStyleClass();
      }
    }
    /**
     * Whether the button is in loading state.
     * @group Props
     */
    get loading() {
      return this._loading;
    }
    set loading(val) {
      this._loading = val;
      if (this.initialized) {
        this.updateIcon();
        this.setStyleClass();
      }
    }
    get htmlElement() {
      return this.el.nativeElement;
    }
    constructor(el, document) {
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "el", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "document", void 0);
      /**
       * Position of the icon.
       * @group Props
       */
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "iconPos", 'left');
      /**
       * Uses to pass attributes to the loading icon's DOM element.
       * @group Props
       */
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "loadingIcon", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_label", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_icon", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_loading", false);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "initialized", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_internalClasses", Object.values(INTERNAL_BUTTON_CLASSES));
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "spinnerIcon", `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon-spin">
        <g clip-path="url(#clip0_417_21408)">
            <path
                d="M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z"
                fill="currentColor"
            />
        </g>
        <defs>
            <clipPath id="clip0_417_21408">
                <rect width="14" height="14" fill="white" />
            </clipPath>
        </defs>
    </svg>`);
      this.el = el;
      this.document = document;
    }
    ngAfterViewInit() {
      primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.addMultipleClasses(this.htmlElement, this.getStyleClass().join(' '));
      this.createIcon();
      this.createLabel();
      this.initialized = true;
    }
    getStyleClass() {
      const styleClass = [INTERNAL_BUTTON_CLASSES.button, INTERNAL_BUTTON_CLASSES.component];
      if (this.icon && !this.label && primeng_utils__WEBPACK_IMPORTED_MODULE_3__.ObjectUtils.isEmpty(this.htmlElement.textContent)) {
        styleClass.push(INTERNAL_BUTTON_CLASSES.iconOnly);
      }
      if (this.loading) {
        styleClass.push(INTERNAL_BUTTON_CLASSES.disabled, INTERNAL_BUTTON_CLASSES.loading);
        if (!this.icon && this.label) {
          styleClass.push(INTERNAL_BUTTON_CLASSES.labelOnly);
        }
        if (this.icon && !this.label && !primeng_utils__WEBPACK_IMPORTED_MODULE_3__.ObjectUtils.isEmpty(this.htmlElement.textContent)) {
          styleClass.push(INTERNAL_BUTTON_CLASSES.iconOnly);
        }
      }
      return styleClass;
    }
    setStyleClass() {
      const styleClass = this.getStyleClass();
      this.htmlElement.classList.remove(...this._internalClasses);
      this.htmlElement.classList.add(...styleClass);
    }
    createLabel() {
      if (this.label) {
        let labelElement = this.document.createElement('span');
        if (this.icon && !this.label) {
          labelElement.setAttribute('aria-hidden', 'true');
        }
        labelElement.className = 'p-button-label';
        labelElement.appendChild(this.document.createTextNode(this.label));
        this.htmlElement.appendChild(labelElement);
      }
    }
    createIcon() {
      if (this.icon || this.loading) {
        let iconElement = this.document.createElement('span');
        iconElement.className = 'p-button-icon';
        iconElement.setAttribute('aria-hidden', 'true');
        let iconPosClass = this.label ? 'p-button-icon-' + this.iconPos : null;
        if (iconPosClass) {
          primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.addClass(iconElement, iconPosClass);
        }
        let iconClass = this.getIconClass();
        if (iconClass) {
          primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.addMultipleClasses(iconElement, iconClass);
        }
        if (!this.loadingIcon && this.loading) {
          iconElement.innerHTML = this.spinnerIcon;
        }
        this.htmlElement.insertBefore(iconElement, this.htmlElement.firstChild);
      }
    }
    updateLabel() {
      let labelElement = primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.findSingle(this.htmlElement, '.p-button-label');
      if (!this.label) {
        labelElement && this.htmlElement.removeChild(labelElement);
        return;
      }
      labelElement ? labelElement.textContent = this.label : this.createLabel();
    }
    updateIcon() {
      let iconElement = primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.findSingle(this.htmlElement, '.p-button-icon');
      let labelElement = primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.findSingle(this.htmlElement, '.p-button-label');
      if (this.loading && !this.loadingIcon && iconElement) {
        iconElement.innerHTML = this.spinnerIcon;
      } else if (iconElement?.innerHTML) {
        iconElement.innerHTML = '';
      }
      if (iconElement) {
        if (this.iconPos) {
          iconElement.className = 'p-button-icon ' + (labelElement ? 'p-button-icon-' + this.iconPos : '') + ' ' + this.getIconClass();
        } else {
          iconElement.className = 'p-button-icon ' + this.getIconClass();
        }
      } else {
        this.createIcon();
      }
    }
    getIconClass() {
      return this.loading ? 'p-button-loading-icon ' + (this.loadingIcon ? this.loadingIcon : 'p-icon') : this.icon || 'p-hidden';
    }
    ngOnDestroy() {
      this.initialized = false;
    }
  }
  (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ButtonDirective, "\u0275fac", function ButtonDirective_Factory(t) {
    return new (t || ButtonDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT));
  });
  (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ButtonDirective, "\u0275dir", /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
    type: ButtonDirective,
    selectors: [["", "pButton", ""]],
    hostAttrs: [1, "p-element"],
    inputs: {
      iconPos: "iconPos",
      loadingIcon: "loadingIcon",
      label: "label",
      icon: "icon",
      loading: "loading"
    }
  }));
  return ButtonDirective;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Button is an extension to standard button element with icons and theming.
 * @group Components
 */
let Button = /*#__PURE__*/(() => {
  class Button {
    constructor() {
      /**
       * Type of the button.
       * @group Props
       */
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "type", 'button');
      /**
       * Position of the icon.
       * @group Props
       */
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "iconPos", 'left');
      /**
       * Name of the icon.
       * @group Props
       */
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "icon", void 0);
      /**
       * Value of the badge.
       * @group Props
       */
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "badge", void 0);
      /**
       * Uses to pass attributes to the label's DOM element.
       * @group Props
       */
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "label", void 0);
      /**
       * When present, it specifies that the component should be disabled.
       * @group Props
       */
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "disabled", void 0);
      /**
       * Whether the button is in loading state.
       * @group Props
       */
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "loading", false);
      /**
       * Icon to display in loading state.
       * @group Props
       */
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "loadingIcon", void 0);
      /**
       * Add a shadow to indicate elevation.
       * @group Props
       */
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "raised", false);
      /**
       * Add a circular border radius to the button.
       * @group Props
       */
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "rounded", false);
      /**
       * Add a textual class to the button without a background initially.
       * @group Props
       */
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "text", false);
      /**
       * Add a plain textual class to the button without a background initially.
       * @group Props
       */
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "plain", false);
      /**
       * Defines the style of the button.
       * @group Props
       */
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "severity", void 0);
      /**
       * Add a border class without a background initially.
       * @group Props
       */
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "outlined", false);
      /**
       *  Add a link style to the button.
       * @group Props
       */
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "link", false);
      /**
       * Defines the size of the button.
       * @group Props
       */
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "size", void 0);
      /**
       * Inline style of the element.
       * @group Props
       */
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "style", void 0);
      /**
       * Class of the element.
       * @group Props
       */
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "styleClass", void 0);
      /**
       * Style class of the badge.
       * @group Props
       */
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "badgeClass", void 0);
      /**
       * Used to define a string that autocomplete attribute the current element.
       * @group Props
       */
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "ariaLabel", void 0);
      /**
       * Callback to execute when button is clicked.
       * This event is intended to be used with the <p-button> component. Using a regular <button> element, use (click).
       * @param {MouseEvent} event - Mouse event.
       * @group Emits
       */
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onClick", new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter());
      /**
       * Callback to execute when button is focused.
       * This event is intended to be used with the <p-button> component. Using a regular <button> element, use (focus).
       * @param {FocusEvent} event - Focus event.
       * @group Emits
       */
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onFocus", new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter());
      /**
       * Callback to execute when button loses focus.
       * This event is intended to be used with the <p-button> component. Using a regular <button> element, use (blur).
       * @param {FocusEvent} event - Focus event.
       * @group Emits
       */
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onBlur", new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter());
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "contentTemplate", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "loadingIconTemplate", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "iconTemplate", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "templates", void 0);
    }
    spinnerIconClass() {
      return Object.entries(this.iconClass()).filter(([, value]) => !!value).reduce((acc, [key]) => acc + ` ${key}`, 'p-button-loading-icon');
    }
    iconClass() {
      return {
        'p-button-icon': true,
        'p-button-icon-left': this.iconPos === 'left' && this.label,
        'p-button-icon-right': this.iconPos === 'right' && this.label,
        'p-button-icon-top': this.iconPos === 'top' && this.label,
        'p-button-icon-bottom': this.iconPos === 'bottom' && this.label
      };
    }
    buttonClass() {
      return {
        'p-button p-component': true,
        'p-button-icon-only': (this.icon || this.iconTemplate || this.loadingIcon || this.loadingIconTemplate) && !this.label,
        'p-button-vertical': (this.iconPos === 'top' || this.iconPos === 'bottom') && this.label,
        'p-disabled': this.disabled || this.loading,
        'p-button-loading': this.loading,
        'p-button-loading-label-only': this.loading && !this.icon && this.label && !this.loadingIcon && this.iconPos === 'left',
        'p-button-link': this.link,
        [`p-button-${this.severity}`]: this.severity,
        'p-button-raised': this.raised,
        'p-button-rounded': this.rounded,
        'p-button-text': this.text,
        'p-button-outlined': this.outlined,
        'p-button-sm': this.size === 'small',
        'p-button-lg': this.size === 'large',
        'p-button-plain': this.plain
      };
    }
    ngAfterContentInit() {
      this.templates?.forEach(item => {
        switch (item.getType()) {
          case 'content':
            this.contentTemplate = item.template;
            break;
          case 'icon':
            this.iconTemplate = item.template;
            break;
          case 'loadingicon':
            this.loadingIconTemplate = item.template;
            break;
          default:
            this.contentTemplate = item.template;
            break;
        }
      });
    }
    badgeStyleClass() {
      return {
        'p-badge p-component': true,
        'p-badge-no-gutter': this.badge && String(this.badge).length === 1
      };
    }
  }
  (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Button, "\u0275fac", function Button_Factory(t) {
    return new (t || Button)();
  });
  (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Button, "\u0275cmp", /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: Button,
    selectors: [["p-button"]],
    contentQueries: function Button_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_5__.PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.templates = _t);
      }
    },
    hostAttrs: [1, "p-element"],
    hostVars: 2,
    hostBindings: function Button_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("p-disabled", ctx.disabled);
      }
    },
    inputs: {
      type: "type",
      iconPos: "iconPos",
      icon: "icon",
      badge: "badge",
      label: "label",
      disabled: "disabled",
      loading: "loading",
      loadingIcon: "loadingIcon",
      raised: "raised",
      rounded: "rounded",
      text: "text",
      plain: "plain",
      severity: "severity",
      outlined: "outlined",
      link: "link",
      size: "size",
      style: "style",
      styleClass: "styleClass",
      badgeClass: "badgeClass",
      ariaLabel: "ariaLabel"
    },
    outputs: {
      onClick: "onClick",
      onFocus: "onFocus",
      onBlur: "onBlur"
    },
    ngContentSelectors: _c0,
    decls: 7,
    vars: 14,
    consts: [["pRipple", "", 3, "ngStyle", "disabled", "ngClass", "click", "focus", "blur"], [4, "ngTemplateOutlet"], [4, "ngIf"], ["class", "p-button-label", 4, "ngIf"], [3, "ngClass", "class", 4, "ngIf"], ["class", "p-button-loading-icon", 3, "ngClass", 4, "ngIf"], [3, "class", "ngClass", 4, "ngIf"], [3, "styleClass", "spin", 4, "ngIf"], [3, "ngClass"], [3, "styleClass", "spin"], [1, "p-button-loading-icon", 3, "ngClass"], [3, "ngClass", 4, "ngIf"], [3, "ngIf"], [1, "p-button-label"]],
    template: function Button_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function Button_Template_button_click_0_listener($event) {
          return ctx.onClick.emit($event);
        })("focus", function Button_Template_button_focus_0_listener($event) {
          return ctx.onFocus.emit($event);
        })("blur", function Button_Template_button_blur_0_listener($event) {
          return ctx.onBlur.emit($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, Button_ng_container_2_Template, 1, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, Button_ng_container_3_Template, 3, 2, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, Button_ng_container_4_Template, 3, 2, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, Button_span_5_Template, 2, 3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, Button_span_6_Template, 2, 5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.styleClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx.style)("disabled", ctx.disabled || ctx.loading)("ngClass", ctx.buttonClass());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("type", ctx.type)("aria-label", ctx.ariaLabel)("data-pc-name", "button")("data-pc-section", "root");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx.contentTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.contentTemplate && ctx.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.contentTemplate && ctx.badge);
      }
    },
    dependencies: function () {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle, primeng_ripple__WEBPACK_IMPORTED_MODULE_6__.Ripple, primeng_icons_spinner__WEBPACK_IMPORTED_MODULE_7__.SpinnerIcon];
    },
    encapsulation: 2,
    changeDetection: 0
  }));
  return Button;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let ButtonModule = /*#__PURE__*/(() => {
  class ButtonModule {}
  (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ButtonModule, "\u0275fac", function ButtonModule_Factory(t) {
    return new (t || ButtonModule)();
  });
  (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ButtonModule, "\u0275mod", /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: ButtonModule
  }));
  (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ButtonModule, "\u0275inj", /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_6__.RippleModule, primeng_api__WEBPACK_IMPORTED_MODULE_5__.SharedModule, primeng_icons_spinner__WEBPACK_IMPORTED_MODULE_7__.SpinnerIcon, primeng_api__WEBPACK_IMPORTED_MODULE_5__.SharedModule]
  }));
  return ButtonModule;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 4553:
/*!************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-dropdown.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DROPDOWN_VALUE_ACCESSOR: () => (/* binding */ DROPDOWN_VALUE_ACCESSOR),
/* harmony export */   Dropdown: () => (/* binding */ Dropdown),
/* harmony export */   DropdownItem: () => (/* binding */ DropdownItem),
/* harmony export */   DropdownModule: () => (/* binding */ DropdownModule)
/* harmony export */ });
/* harmony import */ var C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ 8026);
/* harmony import */ var primeng_autofocus__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/autofocus */ 4194);
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/dom */ 4946);
/* harmony import */ var primeng_overlay__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/overlay */ 5166);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/ripple */ 1339);
/* harmony import */ var primeng_scroller__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/scroller */ 1422);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/tooltip */ 1251);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/utils */ 5861);
/* harmony import */ var primeng_icons_times__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/icons/times */ 8993);
/* harmony import */ var primeng_icons_chevrondown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/icons/chevrondown */ 4972);
/* harmony import */ var primeng_icons_search__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/icons/search */ 9103);























function DropdownItem_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((tmp_0_0 = ctx_r0.label) !== null && tmp_0_0 !== undefined ? tmp_0_0 : "empty");
  }
}
function DropdownItem_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
const _c0 = function (a0) {
  return {
    height: a0
  };
};
const _c1 = function (a1, a2, a3) {
  return {
    "p-dropdown-item": true,
    "p-highlight": a1,
    "p-disabled": a2,
    "p-focus": a3
  };
};
const _c2 = function (a0) {
  return {
    $implicit: a0
  };
};
const _c3 = ["container"];
const _c4 = ["filter"];
const _c5 = ["focusInput"];
const _c6 = ["editableInput"];
const _c7 = ["items"];
const _c8 = ["scroller"];
const _c9 = ["overlay"];
const _c10 = ["firstHiddenFocusableEl"];
const _c11 = ["lastHiddenFocusableEl"];
function Dropdown_span_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r9.label() === "p-emptylabel" ? "\xA0" : ctx_r9.label());
  }
}
function Dropdown_span_2_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
function Dropdown_span_2_ng_template_4_span_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r13.label() === "p-emptylabel" ? "\xA0" : ctx_r13.placeholder);
  }
}
function Dropdown_span_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, Dropdown_span_2_ng_template_4_span_0_Template, 2, 1, "span", 4);
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r12.label() === ctx_r12.placeholder || ctx_r12.label() && !ctx_r12.placeholder);
  }
}
function Dropdown_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 10, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("focus", function Dropdown_span_2_Template_span_focus_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r14.onInputFocus($event));
    })("blur", function Dropdown_span_2_Template_span_blur_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r16.onInputBlur($event));
    })("keydown", function Dropdown_span_2_Template_span_keydown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r17.onKeyDown($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, Dropdown_span_2_ng_container_2_Template, 2, 1, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, Dropdown_span_2_ng_container_3_Template, 1, 0, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, Dropdown_span_2_ng_template_4_Template, 1, 1, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r1.inputClass)("pTooltip", ctx_r1.tooltip)("tooltipPosition", ctx_r1.tooltipPosition)("positionStyle", ctx_r1.tooltipPositionStyle)("tooltipStyleClass", ctx_r1.tooltipStyleClass)("autofocus", ctx_r1.autofocus);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-disabled", ctx_r1.disabled)("id", ctx_r1.inputId)("aria-label", ctx_r1.ariaLabel || (ctx_r1.label() === "p-emptylabel" ? undefined : ctx_r1.label()))("aria-labelledby", ctx_r1.ariaLabelledBy)("aria-haspopup", "listbox")("aria-expanded", ctx_r1.overlayVisible)("aria-controls", ctx_r1.id + "_list")("tabindex", !ctx_r1.disabled ? ctx_r1.tabindex : -1)("aria-activedescendant", ctx_r1.focused ? ctx_r1.focusedOptionId : undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.selectedItemTemplate)("ngIfElse", _r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.selectedItemTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](19, _c2, ctx_r1.selectedOption));
  }
}
function Dropdown_input_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 15, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function Dropdown_input_3_Template_input_input_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r19.onEditableInput($event));
    })("keydown", function Dropdown_input_3_Template_input_keydown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r21.onKeyDown($event));
    })("focus", function Dropdown_input_3_Template_input_focus_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r22.onInputFocus($event));
    })("blur", function Dropdown_input_3_Template_input_blur_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r23.onInputBlur($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r2.inputClass)("disabled", ctx_r2.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("maxlength", ctx_r2.maxlength)("placeholder", ctx_r2.placeholder)("aria-expanded", ctx_r2.overlayVisible);
  }
}
function Dropdown_ng_container_4_TimesIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "TimesIcon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function Dropdown_ng_container_4_TimesIcon_1_Template_TimesIcon_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r26.clear($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("styleClass", "p-dropdown-clear-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-pc-section", "clearicon");
  }
}
function Dropdown_ng_container_4_span_2_1_ng_template_0_Template(rf, ctx) {}
function Dropdown_ng_container_4_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, Dropdown_ng_container_4_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Dropdown_ng_container_4_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function Dropdown_ng_container_4_span_2_Template_span_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r31);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r30.clear($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, Dropdown_ng_container_4_span_2_1_Template, 1, 0, null, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-pc-section", "clearicon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r25.clearIconTemplate);
  }
}
function Dropdown_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, Dropdown_ng_container_4_TimesIcon_1_Template, 1, 2, "TimesIcon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, Dropdown_ng_container_4_span_2_Template, 2, 2, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r3.clearIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.clearIconTemplate);
  }
}
function Dropdown_ng_container_6_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 24);
  }
  if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r32.dropdownIcon);
  }
}
function Dropdown_ng_container_6_ChevronDownIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ChevronDownIcon", 25);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("styleClass", "p-dropdown-trigger-icon");
  }
}
function Dropdown_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, Dropdown_ng_container_6_span_1_Template, 1, 1, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, Dropdown_ng_container_6_ChevronDownIcon_2_Template, 1, 1, "ChevronDownIcon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.dropdownIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r4.dropdownIcon);
  }
}
function Dropdown_span_7_1_ng_template_0_Template(rf, ctx) {}
function Dropdown_span_7_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, Dropdown_span_7_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Dropdown_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, Dropdown_span_7_1_Template, 1, 0, null, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r5.dropdownIconTemplate);
  }
}
function Dropdown_ng_template_10_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
function Dropdown_ng_template_10_div_4_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
const _c12 = function (a0) {
  return {
    options: a0
  };
};
function Dropdown_ng_template_10_div_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, Dropdown_ng_template_10_div_4_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r45.filterTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c12, ctx_r45.filterOptions));
  }
}
function Dropdown_ng_template_10_div_4_ng_template_2_SearchIcon_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "SearchIcon", 25);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("styleClass", "p-dropdown-filter-icon");
  }
}
function Dropdown_ng_template_10_div_4_ng_template_2_span_4_1_ng_template_0_Template(rf, ctx) {}
function Dropdown_ng_template_10_div_4_ng_template_2_span_4_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, Dropdown_ng_template_10_div_4_ng_template_2_span_4_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Dropdown_ng_template_10_div_4_ng_template_2_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, Dropdown_ng_template_10_div_4_ng_template_2_span_4_1_Template, 1, 0, null, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r51.filterIconTemplate);
  }
}
function Dropdown_ng_template_10_div_4_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 37)(1, "input", 38, 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function Dropdown_ng_template_10_div_4_ng_template_2_Template_input_input_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r55);
      const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r54.onFilterInputChange($event));
    })("keydown", function Dropdown_ng_template_10_div_4_ng_template_2_Template_input_keydown_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r55);
      const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r56.onFilterKeyDown($event));
    })("blur", function Dropdown_ng_template_10_div_4_ng_template_2_Template_input_blur_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r55);
      const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r57.onFilterBlur($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, Dropdown_ng_template_10_div_4_ng_template_2_SearchIcon_3_Template, 1, 1, "SearchIcon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, Dropdown_ng_template_10_div_4_ng_template_2_span_4_Template, 2, 1, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r47._filterValue() || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("placeholder", ctx_r47.filterPlaceholder)("aria-owns", ctx_r47.id + "_list")("aria-label", ctx_r47.ariaFilterLabel)("aria-activedescendant", ctx_r47.focusedOptionId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r47.filterIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r47.filterIconTemplate);
  }
}
function Dropdown_ng_template_10_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function Dropdown_ng_template_10_div_4_Template_div_click_0_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, Dropdown_ng_template_10_div_4_ng_container_1_Template, 2, 4, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, Dropdown_ng_template_10_div_4_ng_template_2_Template, 5, 7, "ng-template", null, 36, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r38.filterTemplate)("ngIfElse", _r46);
  }
}
function Dropdown_ng_template_10_p_scroller_6_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
const _c13 = function (a0, a1) {
  return {
    $implicit: a0,
    options: a1
  };
};
function Dropdown_ng_template_10_p_scroller_6_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, Dropdown_ng_template_10_p_scroller_6_ng_template_2_ng_container_0_Template, 1, 0, "ng-container", 13);
  }
  if (rf & 2) {
    const items_r62 = ctx.$implicit;
    const scrollerOptions_r63 = ctx.options;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r41)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](2, _c13, items_r62, scrollerOptions_r63));
  }
}
function Dropdown_ng_template_10_p_scroller_6_ng_container_3_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
function Dropdown_ng_template_10_p_scroller_6_ng_container_3_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, Dropdown_ng_template_10_p_scroller_6_ng_container_3_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 13);
  }
  if (rf & 2) {
    const scrollerOptions_r66 = ctx.options;
    const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r65.loaderTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c12, scrollerOptions_r66));
  }
}
function Dropdown_ng_template_10_p_scroller_6_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, Dropdown_ng_template_10_p_scroller_6_ng_container_3_ng_template_1_Template, 1, 4, "ng-template", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
}
function Dropdown_ng_template_10_p_scroller_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p-scroller", 42, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onLazyLoad", function Dropdown_ng_template_10_p_scroller_6_Template_p_scroller_onLazyLoad_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r69);
      const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r68.onLazyLoad.emit($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, Dropdown_ng_template_10_p_scroller_6_ng_template_2_Template, 1, 5, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, Dropdown_ng_template_10_p_scroller_6_ng_container_3_Template, 2, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](8, _c0, ctx_r39.scrollHeight));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("items", ctx_r39.visibleOptions())("itemSize", ctx_r39.virtualScrollItemSize || ctx_r39._itemSize)("autoSize", true)("lazy", ctx_r39.lazy)("options", ctx_r39.virtualScrollOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r39.loaderTemplate);
  }
}
function Dropdown_ng_template_10_ng_container_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
const _c14 = function () {
  return {};
};
function Dropdown_ng_template_10_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, Dropdown_ng_template_10_ng_container_7_ng_container_1_Template, 1, 0, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](9);
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r41)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](3, _c13, ctx_r40.visibleOptions(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c14)));
  }
}
function Dropdown_ng_template_10_ng_template_8_ng_template_2_ng_container_0_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r81.getOptionGroupLabel(option_r77.optionGroup));
  }
}
function Dropdown_ng_template_10_ng_template_8_ng_template_2_ng_container_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
function Dropdown_ng_template_10_ng_template_8_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, Dropdown_ng_template_10_ng_template_8_ng_template_2_ng_container_0_span_2_Template, 2, 1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, Dropdown_ng_template_10_ng_template_8_ng_template_2_ng_container_0_ng_container_3_Template, 1, 0, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const i_r78 = ctx_r85.index;
    const option_r77 = ctx_r85.$implicit;
    const scrollerOptions_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().options;
    const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c0, scrollerOptions_r72.itemSize + "px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("id", ctx_r79.id + "_" + ctx_r79.getOptionIndex(i_r78, scrollerOptions_r72));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r79.groupTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r79.groupTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c2, option_r77.optionGroup));
  }
}
function Dropdown_ng_template_10_ng_template_8_ng_template_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p-dropdownItem", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onClick", function Dropdown_ng_template_10_ng_template_8_ng_template_2_ng_container_1_Template_p_dropdownItem_onClick_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r88);
      const option_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r86.onOptionSelect($event, option_r77));
    })("onMouseEnter", function Dropdown_ng_template_10_ng_template_8_ng_template_2_ng_container_1_Template_p_dropdownItem_onMouseEnter_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r88);
      const i_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;
      const scrollerOptions_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().options;
      const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r89.onOptionMouseEnter($event, ctx_r89.getOptionIndex(i_r78, scrollerOptions_r72)));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const i_r78 = ctx_r92.index;
    const option_r77 = ctx_r92.$implicit;
    const scrollerOptions_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().options;
    const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", ctx_r80.id + "_" + ctx_r80.getOptionIndex(i_r78, scrollerOptions_r72))("option", option_r77)("selected", ctx_r80.isSelected(option_r77))("label", ctx_r80.getOptionLabel(option_r77))("disabled", ctx_r80.isOptionDisabled(option_r77))("template", ctx_r80.itemTemplate)("focused", ctx_r80.focusedOptionIndex() === ctx_r80.getOptionIndex(i_r78, scrollerOptions_r72))("ariaPosInset", ctx_r80.getAriaPosInset(ctx_r80.getOptionIndex(i_r78, scrollerOptions_r72)))("ariaSetSize", ctx_r80.ariaSetSize);
  }
}
function Dropdown_ng_template_10_ng_template_8_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, Dropdown_ng_template_10_ng_template_8_ng_template_2_ng_container_0_Template, 4, 9, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, Dropdown_ng_template_10_ng_template_8_ng_template_2_ng_container_1_Template, 2, 9, "ng-container", 4);
  }
  if (rf & 2) {
    const option_r77 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", option_r77.group);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !option_r77.group);
  }
}
function Dropdown_ng_template_10_ng_template_8_li_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r94.emptyFilterMessageLabel, " ");
  }
}
function Dropdown_ng_template_10_ng_template_8_li_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0, null, 52);
  }
}
function Dropdown_ng_template_10_ng_template_8_li_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, Dropdown_ng_template_10_ng_template_8_li_3_ng_container_1_Template, 2, 1, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, Dropdown_ng_template_10_ng_template_8_li_3_ng_container_2_Template, 2, 0, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const scrollerOptions_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().options;
    const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c0, scrollerOptions_r72.itemSize + "px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r75.emptyFilterTemplate && !ctx_r75.emptyTemplate)("ngIfElse", ctx_r75.emptyFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r75.emptyFilterTemplate || ctx_r75.emptyTemplate);
  }
}
function Dropdown_ng_template_10_ng_template_8_li_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r98.emptyMessageLabel, " ");
  }
}
function Dropdown_ng_template_10_ng_template_8_li_4_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0, null, 53);
  }
}
function Dropdown_ng_template_10_ng_template_8_li_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, Dropdown_ng_template_10_ng_template_8_li_4_ng_container_1_Template, 2, 1, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, Dropdown_ng_template_10_ng_template_8_li_4_ng_container_2_Template, 2, 0, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const scrollerOptions_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().options;
    const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c0, scrollerOptions_r72.itemSize + "px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r76.emptyTemplate)("ngIfElse", ctx_r76.empty);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r76.emptyTemplate);
  }
}
function Dropdown_ng_template_10_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 45, 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, Dropdown_ng_template_10_ng_template_8_ng_template_2_Template, 2, 2, "ng-template", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, Dropdown_ng_template_10_ng_template_8_li_3_Template, 3, 6, "li", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, Dropdown_ng_template_10_ng_template_8_li_4_Template, 3, 6, "li", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const items_r71 = ctx.$implicit;
    const scrollerOptions_r72 = ctx.options;
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](scrollerOptions_r72.contentStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", scrollerOptions_r72.contentStyleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("id", ctx_r42.id + "_list");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", items_r71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r42.filterValue && ctx_r42.isEmpty());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r42.filterValue && ctx_r42.isEmpty());
  }
}
function Dropdown_ng_template_10_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
function Dropdown_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r103 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 27)(1, "span", 28, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("focus", function Dropdown_ng_template_10_Template_span_focus_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r103);
      const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r102.onFirstHiddenFocus($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, Dropdown_ng_template_10_ng_container_3_Template, 1, 0, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, Dropdown_ng_template_10_div_4_Template, 4, 2, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, Dropdown_ng_template_10_p_scroller_6_Template, 4, 10, "p-scroller", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, Dropdown_ng_template_10_ng_container_7_Template, 2, 6, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, Dropdown_ng_template_10_ng_template_8_Template, 5, 7, "ng-template", null, 33, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, Dropdown_ng_template_10_ng_container_10_Template, 1, 0, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 28, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("focus", function Dropdown_ng_template_10_Template_span_focus_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r103);
      const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r104.onLastHiddenFocus($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r7.panelStyleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", "p-dropdown-panel p-component")("ngStyle", ctx_r7.panelStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-hidden", true)("tabindex", 0)("data-p-hidden-accessible", true)("data-p-hidden-focusable", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r7.headerTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.filter);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("max-height", ctx_r7.virtualScroll ? "auto" : ctx_r7.scrollHeight || "auto");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.virtualScroll);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r7.virtualScroll);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r7.footerTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-hidden", true)("tabindex", 0)("data-p-hidden-accessible", true)("data-p-hidden-focusable", true);
  }
}
const DROPDOWN_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NG_VALUE_ACCESSOR,
  useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => Dropdown),
  multi: true
};
let DropdownItem = /*#__PURE__*/(() => {
  class DropdownItem {
    constructor() {
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "id", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "option", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "selected", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "focused", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "label", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "disabled", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "visible", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "itemSize", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "ariaPosInset", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "ariaSetSize", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "template", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onClick", new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter());
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onMouseEnter", new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter());
    }
    ngOnInit() {}
    onOptionClick(event) {
      this.onClick.emit(event);
    }
    onOptionMouseEnter(event) {
      this.onMouseEnter.emit(event);
    }
  }
  (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(DropdownItem, "\u0275fac", function DropdownItem_Factory(t) {
    return new (t || DropdownItem)();
  });
  (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(DropdownItem, "\u0275cmp", /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: DropdownItem,
    selectors: [["p-dropdownItem"]],
    hostAttrs: [1, "p-element"],
    inputs: {
      id: "id",
      option: "option",
      selected: "selected",
      focused: "focused",
      label: "label",
      disabled: "disabled",
      visible: "visible",
      itemSize: "itemSize",
      ariaPosInset: "ariaPosInset",
      ariaSetSize: "ariaSetSize",
      template: "template"
    },
    outputs: {
      onClick: "onClick",
      onMouseEnter: "onMouseEnter"
    },
    decls: 3,
    vars: 21,
    consts: [["role", "option", "pRipple", "", 3, "id", "ngStyle", "ngClass", "click", "mouseenter"], [4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
    template: function DropdownItem_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DropdownItem_Template_li_click_0_listener($event) {
          return ctx.onOptionClick($event);
        })("mouseenter", function DropdownItem_Template_li_mouseenter_0_listener($event) {
          return ctx.onOptionMouseEnter($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DropdownItem_span_1_Template, 2, 1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DropdownItem_ng_container_2_Template, 1, 0, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", ctx.id)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](13, _c0, ctx.itemSize + "px"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](15, _c1, ctx.selected, ctx.disabled, ctx.focused));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx.label)("aria-setsize", ctx.ariaSetSize)("aria-posinset", ctx.ariaPosInset)("aria-selected", ctx.selected)("data-p-focused", ctx.focused)("data-p-highlight", ctx.selected)("data-p-disabled", ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.template);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx.template)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](19, _c2, ctx.option));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle, primeng_ripple__WEBPACK_IMPORTED_MODULE_4__.Ripple],
    encapsulation: 2
  }));
  return DropdownItem;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Dropdown also known as Select, is used to choose an item from a collection of options.
 * @group Components
 */
let Dropdown = /*#__PURE__*/(() => {
  class Dropdown {
    /**
     * When present, it specifies that the component should be disabled.
     * @group Props
     */
    get disabled() {
      return this._disabled;
    }
    set disabled(_disabled) {
      if (_disabled) {
        this.focused = false;
        if (this.overlayVisible) this.hide();
      }
      this._disabled = _disabled;
      if (!this.cd.destroyed) {
        this.cd.detectChanges();
      }
    }
    /**
     * Item size of item to be virtual scrolled.
     * @group Props
     * @deprecated use virtualScrollItemSize property instead.
     */
    get itemSize() {
      return this._itemSize;
    }
    set itemSize(val) {
      this._itemSize = val;
      console.warn('The itemSize property is deprecated, use virtualScrollItemSize property instead.');
    }
    /**
     * Whether to automatically manage layering.
     * @group Props
     * @deprecated since v14.2.0, use overlayOptions property instead.
     */
    get autoZIndex() {
      return this._autoZIndex;
    }
    set autoZIndex(val) {
      this._autoZIndex = val;
      console.warn('The autoZIndex property is deprecated since v14.2.0, use overlayOptions property instead.');
    }
    /**
     * Base zIndex value to use in layering.
     * @group Props
     * @deprecated since v14.2.0, use overlayOptions property instead.
     */
    get baseZIndex() {
      return this._baseZIndex;
    }
    set baseZIndex(val) {
      this._baseZIndex = val;
      console.warn('The baseZIndex property is deprecated since v14.2.0, use overlayOptions property instead.');
    }
    /**
     * Transition options of the show animation.
     * @group Props
     * @deprecated since v14.2.0, use overlayOptions property instead.
     */
    get showTransitionOptions() {
      return this._showTransitionOptions;
    }
    set showTransitionOptions(val) {
      this._showTransitionOptions = val;
      console.warn('The showTransitionOptions property is deprecated since v14.2.0, use overlayOptions property instead.');
    }
    /**
     * Transition options of the hide animation.
     * @group Props
     * @deprecated since v14.2.0, use overlayOptions property instead.
     */
    get hideTransitionOptions() {
      return this._hideTransitionOptions;
    }
    set hideTransitionOptions(val) {
      this._hideTransitionOptions = val;
      console.warn('The hideTransitionOptions property is deprecated since v14.2.0, use overlayOptions property instead.');
    }
    /**
     * When specified, filter displays with this value.
     * @group Props
     */
    get filterValue() {
      return this._filterValue();
    }
    set filterValue(val) {
      this._filterValue.set(val);
    }
    /**
     * An array of objects to display as the available options.
     * @group Props
     */
    get options() {
      const options = this._options();
      return options;
    }
    set options(val) {
      this._options.set(val);
    }
    /**
     * Callback to invoke when value of dropdown changes.
     * @param {DropdownChangeEvent} event - custom change event.
     * @group Emits
     */

    get emptyMessageLabel() {
      return this.emptyMessage || this.config.getTranslation(primeng_api__WEBPACK_IMPORTED_MODULE_5__.TranslationKeys.EMPTY_MESSAGE);
    }
    get emptyFilterMessageLabel() {
      return this.emptyFilterMessage || this.config.getTranslation(primeng_api__WEBPACK_IMPORTED_MODULE_5__.TranslationKeys.EMPTY_FILTER_MESSAGE);
    }
    get filled() {
      if (typeof this.modelValue() === 'string') return !!this.modelValue();
      return this.modelValue() || this.modelValue() != null || this.modelValue() != undefined;
    }
    get isVisibleClearIcon() {
      return this.modelValue() != null && primeng_utils__WEBPACK_IMPORTED_MODULE_6__.ObjectUtils.isNotEmpty(this.modelValue()) && this.modelValue() !== '' && this.showClear && !this.disabled;
    }
    get containerClass() {
      return {
        'p-dropdown p-component p-inputwrapper': true,
        'p-disabled': this.disabled,
        'p-dropdown-clearable': this.showClear && !this.disabled,
        'p-focus': this.focused,
        'p-inputwrapper-filled': this.modelValue(),
        'p-inputwrapper-focus': this.focused || this.overlayVisible
      };
    }
    get inputClass() {
      const label = this.label();
      return {
        'p-dropdown-label p-inputtext': true,
        'p-placeholder': this.placeholder && label === this.placeholder,
        'p-dropdown-label-empty': !this.editable && !this.selectedItemTemplate && (!label || label === 'p-emptylabel' || label.length === 0)
      };
    }
    get panelClass() {
      return {
        'p-dropdown-panel p-component': true,
        'p-input-filled': this.config.inputStyle === 'filled',
        'p-ripple-disabled': this.config.ripple === false
      };
    }
    constructor(el, renderer, cd, zone, filterService, config) {
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "el", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "renderer", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "cd", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "zone", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "filterService", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "config", void 0);
      /**
       * Unique identifier of the component
       * @group Props
       */
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "id", void 0);
      /**
       * Height of the viewport in pixels, a scrollbar is defined if height of list exceeds this value.
       * @group Props
       */
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "scrollHeight", '200px');
      /**
       * When specified, displays an input field to filter the items on keyup.
       * @group Props
       */
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "filter", void 0);
      /**
       * Name of the input element.
       * @group Props
       */
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "name", void 0);
      /**
       * Inline style of the element.
       * @group Props
       */
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "style", void 0);
      /**
       * Inline style of the overlay panel element.
       * @group Props
       */
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "panelStyle", void 0);
      /**
       * Style class of the element.
       * @group Props
       */
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "styleClass", void 0);
      /**
       * Style class of the overlay panel element.
       * @group Props
       */
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "panelStyleClass", void 0);
      /**
       * When present, it specifies that the component cannot be edited.
       * @group Props
       */
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "readonly", void 0);
      /**
       * When present, it specifies that an input field must be filled out before submitting the form.
       * @group Props
       */
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "required", void 0);
      /**
       * When present, custom value instead of predefined options can be entered using the editable input field.
       * @group Props
       */
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "editable", void 0);
      /**
       * Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
       * @group Props
       */
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "appendTo", void 0);
      /**
       * Index of the element in tabbing order.
       * @group Props
       */
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "tabindex", 0);
      /**
       * Default text to display when no option is selected.
       * @group Props
       */
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "placeholder", void 0);
      /**
       * Placeholder text to show when filter input is empty.
       * @group Props
       */
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "filterPlaceholder", void 0);
      /**
       * Locale to use in filtering. The default locale is the host environment's current locale.
       * @group Props
       */
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "filterLocale", void 0);
      /**
       * Identifier of the accessible input element.
       * @group Props
       */
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "inputId", void 0);
      /**
       * A property to uniquely identify a value in options.
       * @group Props
       */
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "dataKey", void 0);
      /**
       * When filtering is enabled, filterBy decides which field or fields (comma separated) to search against.
       * @group Props
       */
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "filterBy", void 0);
      /**
       * Fields used when filtering the options, defaults to optionLabel.
       * @group Props
       */
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "filterFields", void 0);
      /**
       * When present, it specifies that the component should automatically get focus on load.
       * @group Props
       */
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "autofocus", void 0);
      /**
       * Clears the filter value when hiding the dropdown.
       * @group Props
       */
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "resetFilterOnHide", false);
      /**
       * Icon class of the dropdown icon.
       * @group Props
       */
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "dropdownIcon", void 0);
      /**
       * Name of the label field of an option.
       * @group Props
       */
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "optionLabel", void 0);
      /**
       * Name of the value field of an option.
       * @group Props
       */
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "optionValue", void 0);
      /**
       * Name of the disabled field of an option.
       * @group Props
       */
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "optionDisabled", void 0);
      /**
       * Name of the label field of an option group.
       * @group Props
       */
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "optionGroupLabel", 'label');
      /**
       * Name of the options field of an option group.
       * @group Props
       */
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "optionGroupChildren", 'items');
      /**
       * Whether to display the first item as the label if no placeholder is defined and value is null.
       * @group Props
       */
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "autoDisplayFirst", true);
      /**
       * Whether to display options as grouped when nested options are provided.
       * @group Props
       */
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "group", void 0);
      /**
       * When enabled, a clear icon is displayed to clear the value.
       * @group Props
       */
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "showClear", void 0);
      /**
       * Text to display when filtering does not return any results. Defaults to global value in i18n translation configuration.
       * @group Props
       */
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "emptyFilterMessage", '');
      /**
       * Text to display when there is no data. Defaults to global value in i18n translation configuration.
       * @group Props
       */
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "emptyMessage", '');
      /**
       * Defines if data is loaded and interacted with in lazy manner.
       * @group Props
       */
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "lazy", false);
      /**
       * Whether the data should be loaded on demand during scroll.
       * @group Props
       */
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "virtualScroll", void 0);
      /**
       * Height of an item in the list for VirtualScrolling.
       * @group Props
       */
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "virtualScrollItemSize", void 0);
      /**
       * Whether to use the scroller feature. The properties of scroller component can be used like an object in it.
       * @group Props
       */
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "virtualScrollOptions", void 0);
      /**
       * Whether to use overlay API feature. The properties of overlay API can be used like an object in it.
       * @group Props
       */
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "overlayOptions", void 0);
      /**
       * Defines a string that labels the filter input.
       * @group Props
       */
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "ariaFilterLabel", void 0);
      /**
       * Used to define a aria label attribute the current element.
       * @group Props
       */
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "ariaLabel", void 0);
      /**
       * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
       * @group Props
       */
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "ariaLabelledBy", void 0);
      /**
       * Defines how the items are filtered.
       * @group Props
       */
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "filterMatchMode", 'contains');
      /**
       * Maximum number of character allows in the editable input field.
       * @group Props
       */
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "maxlength", void 0);
      /**
       * Advisory information to display in a tooltip on hover.
       * @group Props
       */
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "tooltip", '');
      /**
       * Position of the tooltip.
       * @group Props
       */
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "tooltipPosition", 'right');
      /**
       * Type of CSS position.
       * @group Props
       */
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "tooltipPositionStyle", 'absolute');
      /**
       * Style class of the tooltip.
       * @group Props
       */
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "tooltipStyleClass", void 0);
      /**
       * Fields used when filtering the options, defaults to optionLabel.
       * @group Props
       */
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "focusOnHover", false);
      /**
       * Determines if the option will be selected on focus.
       * @group Props
       */
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "selectOnFocus", false);
      /**
       * Whether to focus on the first visible or selected element when the overlay panel is shown.
       * @group Props
       */
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "autoOptionFocus", true);
      /**
       * Applies focus to the filter element when the overlay is shown.
       * @group Props
       */
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "autofocusFilter", true);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_itemSize", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_autoZIndex", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_baseZIndex", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_showTransitionOptions", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_hideTransitionOptions", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onChange", new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter());
      /**
       * Callback to invoke when data is filtered.
       * @param {DropdownFilterEvent} event - custom filter event.
       * @group Emits
       */
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onFilter", new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter());
      /**
       * Callback to invoke when dropdown gets focus.
       * @param {Event} event - Browser event.
       * @group Emits
       */
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onFocus", new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter());
      /**
       * Callback to invoke when dropdown loses focus.
       * @param {Event} event - Browser event.
       * @group Emits
       */
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onBlur", new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter());
      /**
       * Callback to invoke when component is clicked.
       * @param {MouseEvent} event - Mouse event.
       * @group Emits
       */
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onClick", new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter());
      /**
       * Callback to invoke when dropdown overlay gets visible.
       * @param {AnimationEvent} event - Animation event.
       * @group Emits
       */
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onShow", new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter());
      /**
       * Callback to invoke when dropdown overlay gets hidden.
       * @param {AnimationEvent} event - Animation event.
       * @group Emits
       */
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onHide", new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter());
      /**
       * Callback to invoke when dropdown clears the value.
       * @param {Event} event - Browser event.
       * @group Emits
       */
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onClear", new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter());
      /**
       * Callback to invoke in lazy mode to load new data.
       * @param {DropdownLazyLoadEvent} event - Lazy load event.
       * @group Emits
       */
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onLazyLoad", new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter());
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "containerViewChild", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "filterViewChild", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "focusInputViewChild", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "editableInputViewChild", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "itemsViewChild", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "scroller", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "overlayViewChild", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "firstHiddenFocusableElementOnOverlay", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "lastHiddenFocusableElementOnOverlay", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "templates", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_disabled", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "itemsWrapper", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "itemTemplate", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "groupTemplate", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "loaderTemplate", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "selectedItemTemplate", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "headerTemplate", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "filterTemplate", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "footerTemplate", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "emptyFilterTemplate", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "emptyTemplate", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "dropdownIconTemplate", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "clearIconTemplate", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "filterIconTemplate", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "filterOptions", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_options", (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(null));
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "modelValue", (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(null));
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "value", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onModelChange", () => {});
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onModelTouched", () => {});
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "hover", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "focused", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "overlayVisible", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "optionsChanged", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "panel", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "dimensionsUpdated", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "hoveredItem", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "selectedOptionUpdated", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_filterValue", (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(null));
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "searchValue", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "searchIndex", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "searchTimeout", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "previousSearchChar", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "currentSearchChar", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "preventModelTouched", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "focusedOptionIndex", (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(-1));
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "labelId", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "listId", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "visibleOptions", (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.computed)(() => {
        const options = this.group ? this.flatOptions(this.options) : this.options || [];
        if (this._filterValue()) {
          const filteredOptions = !this.filterBy && !this.filterFields && !this.optionValue ? this.options.filter(option => option.toLowerCase().indexOf(this._filterValue().toLowerCase()) !== -1) : this.filterService.filter(options, this.searchFields(), this._filterValue(), this.filterMatchMode, this.filterLocale);
          if (this.group) {
            const optionGroups = this.options || [];
            const filtered = [];
            optionGroups.forEach(group => {
              const groupChildren = this.getOptionGroupChildren(group);
              const filteredItems = groupChildren.filter(item => filteredOptions.includes(item));
              if (filteredItems.length > 0) filtered.push({
                ...group,
                [typeof this.optionGroupChildren === 'string' ? this.optionGroupChildren : 'items']: [...filteredItems]
              });
            });
            return this.flatOptions(filtered);
          }
          return filteredOptions;
        }
        return options;
      }));
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "label", (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.computed)(() => {
        const selectedOptionIndex = this.findSelectedOptionIndex();
        return selectedOptionIndex !== -1 ? this.getOptionLabel(this.visibleOptions()[selectedOptionIndex]) : this.placeholder || 'p-emptylabel';
      }));
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "selectedOption", void 0);
      this.el = el;
      this.renderer = renderer;
      this.cd = cd;
      this.zone = zone;
      this.filterService = filterService;
      this.config = config;
      (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.effect)(() => {
        const modelValue = this.modelValue();
        const visibleOptions = this.visibleOptions();
        if (modelValue && this.editable) {
          this.updateEditableLabel();
        }
        if (visibleOptions && primeng_utils__WEBPACK_IMPORTED_MODULE_6__.ObjectUtils.isNotEmpty(visibleOptions)) {
          this.selectedOption = visibleOptions[this.findSelectedOptionIndex()];
        }
      });
    }
    ngOnInit() {
      this.id = this.id || (0,primeng_utils__WEBPACK_IMPORTED_MODULE_6__.UniqueComponentId)();
      this.autoUpdateModel();
      if (this.filterBy) {
        this.filterOptions = {
          filter: value => this.onFilterInputChange(value),
          reset: () => this.resetFilter()
        };
      }
    }
    ngAfterViewChecked() {
      if (this.optionsChanged && this.overlayVisible) {
        this.optionsChanged = false;
        this.zone.runOutsideAngular(() => {
          setTimeout(() => {
            if (this.overlayViewChild) {
              this.overlayViewChild.alignOverlay();
            }
          }, 1);
        });
      }
      if (this.selectedOptionUpdated && this.itemsWrapper) {
        let selectedItem = primeng_dom__WEBPACK_IMPORTED_MODULE_7__.DomHandler.findSingle(this.overlayViewChild?.overlayViewChild?.nativeElement, 'li.p-highlight');
        if (selectedItem) {
          primeng_dom__WEBPACK_IMPORTED_MODULE_7__.DomHandler.scrollInView(this.itemsWrapper, selectedItem);
        }
        this.selectedOptionUpdated = false;
      }
    }
    ngAfterContentInit() {
      this.templates.forEach(item => {
        switch (item.getType()) {
          case 'item':
            this.itemTemplate = item.template;
            break;
          case 'selectedItem':
            this.selectedItemTemplate = item.template;
            break;
          case 'header':
            this.headerTemplate = item.template;
            break;
          case 'filter':
            this.filterTemplate = item.template;
            break;
          case 'footer':
            this.footerTemplate = item.template;
            break;
          case 'emptyfilter':
            this.emptyFilterTemplate = item.template;
            break;
          case 'empty':
            this.emptyTemplate = item.template;
            break;
          case 'group':
            this.groupTemplate = item.template;
            break;
          case 'loader':
            this.loaderTemplate = item.template;
            break;
          case 'dropdownicon':
            this.dropdownIconTemplate = item.template;
            break;
          case 'clearicon':
            this.clearIconTemplate = item.template;
            break;
          case 'filtericon':
            this.filterIconTemplate = item.template;
            break;
          default:
            this.itemTemplate = item.template;
            break;
        }
      });
    }
    flatOptions(options) {
      return (options || []).reduce((result, option, index) => {
        result.push({
          optionGroup: option,
          group: true,
          index
        });
        const optionGroupChildren = this.getOptionGroupChildren(option);
        optionGroupChildren && optionGroupChildren.forEach(o => result.push(o));
        return result;
      }, []);
    }
    autoUpdateModel() {
      if (this.selectOnFocus && this.autoOptionFocus && !this.hasSelectedOption()) {
        this.focusedOptionIndex.set(this.findFirstFocusedOptionIndex());
        this.onOptionSelect(null, this.visibleOptions()[this.focusedOptionIndex()], false);
      }
      if (this.autoDisplayFirst && !this.modelValue()) {
        const ind = this.findFirstOptionIndex();
        this.onOptionSelect(null, this.visibleOptions()[ind], false, true);
      }
    }
    onOptionSelect(event, option, isHide = true, preventChange = false) {
      const value = this.getOptionValue(option);
      this.updateModel(value, event);
      this.focusedOptionIndex.set(this.findSelectedOptionIndex());
      isHide && this.hide(true);
      preventChange === false && this.onChange.emit({
        originalEvent: event,
        value: value
      });
    }
    onOptionMouseEnter(event, index) {
      if (this.focusOnHover) {
        this.changeFocusedOptionIndex(event, index);
      }
    }
    updateModel(value, event) {
      this.value = value;
      this.onModelChange(value);
      this.modelValue.set(value);
      this.selectedOptionUpdated = true;
    }
    writeValue(value) {
      if (this.filter) {
        this.resetFilter();
      }
      this.value = value;
      this.allowModelChange() && this.onModelChange(value);
      this.modelValue.set(this.value);
      this.updateEditableLabel();
      this.cd.markForCheck();
    }
    allowModelChange() {
      return this.autoDisplayFirst && !this.placeholder && !this.modelValue() && !this.editable && this.options && this.options.length;
    }
    isSelected(option) {
      return this.isValidOption(option) && primeng_utils__WEBPACK_IMPORTED_MODULE_6__.ObjectUtils.equals(this.modelValue(), this.getOptionValue(option), this.equalityKey());
    }
    ngAfterViewInit() {
      if (this.editable) {
        this.updateEditableLabel();
      }
    }
    updateEditableLabel() {
      if (this.editableInputViewChild) {
        this.editableInputViewChild.nativeElement.value = this.getOptionLabel(this.modelValue()) === undefined ? this.editableInputViewChild.nativeElement.value : this.getOptionLabel(this.modelValue());
      }
    }
    getOptionIndex(index, scrollerOptions) {
      return this.virtualScrollerDisabled ? index : scrollerOptions && scrollerOptions.getItemOptions(index)['index'];
    }
    getOptionLabel(option) {
      return this.optionLabel ? primeng_utils__WEBPACK_IMPORTED_MODULE_6__.ObjectUtils.resolveFieldData(option, this.optionLabel) : option && option.label !== undefined ? option.label : option;
    }
    getOptionValue(option) {
      return this.optionValue ? primeng_utils__WEBPACK_IMPORTED_MODULE_6__.ObjectUtils.resolveFieldData(option, this.optionValue) : !this.optionLabel && option && option.value !== undefined ? option.value : option;
    }
    isOptionDisabled(option) {
      return this.optionDisabled ? primeng_utils__WEBPACK_IMPORTED_MODULE_6__.ObjectUtils.resolveFieldData(option, this.optionDisabled) : option && option.disabled !== undefined ? option.disabled : false;
    }
    getOptionGroupLabel(optionGroup) {
      return this.optionGroupLabel ? primeng_utils__WEBPACK_IMPORTED_MODULE_6__.ObjectUtils.resolveFieldData(optionGroup, this.optionGroupLabel) : optionGroup && optionGroup.label !== undefined ? optionGroup.label : optionGroup;
    }
    getOptionGroupChildren(optionGroup) {
      return this.optionGroupChildren ? primeng_utils__WEBPACK_IMPORTED_MODULE_6__.ObjectUtils.resolveFieldData(optionGroup, this.optionGroupChildren) : optionGroup.items;
    }
    getAriaPosInset(index) {
      return (this.optionGroupLabel ? index - this.visibleOptions().slice(0, index).filter(option => this.isOptionGroup(option)).length : index) + 1;
    }
    get ariaSetSize() {
      return this.visibleOptions().filter(option => !this.isOptionGroup(option)).length;
    }
    /**
     * Callback to invoke on filter reset.
     * @group Method
     */
    resetFilter() {
      this._filterValue.set(null);
      if (this.filterViewChild && this.filterViewChild.nativeElement) {
        this.filterViewChild.nativeElement.value = '';
      }
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
    onContainerClick(event) {
      if (this.disabled || this.readonly) {
        return;
      }
      this.focusInputViewChild?.nativeElement.focus({
        preventScroll: true
      });
      if (event.target.tagName === 'INPUT' || event.target.getAttribute('data-pc-section') === 'clearicon' || event.target.closest('[data-pc-section="clearicon"]')) {
        return;
      } else if (!this.overlayViewChild || !this.overlayViewChild.el.nativeElement.contains(event.target)) {
        this.overlayVisible ? this.hide(true) : this.show(true);
      }
      this.onClick.emit(event);
      this.cd.detectChanges();
    }
    isEmpty() {
      return !this._options() || this._options() && this._options().length === 0;
    }
    onEditableInput(event) {
      const value = event.target.value;
      this.searchValue = '';
      const matched = this.searchOptions(event, value);
      !matched && this.focusedOptionIndex.set(-1);
      this.onModelChange(value);
      this.updateModel(value, event);
      this.onChange.emit({
        originalEvent: event,
        value: value
      });
    }
    /**
     * Displays the panel.
     * @group Method
     */
    show(isFocus) {
      this.overlayVisible = true;
      const focusedOptionIndex = this.focusedOptionIndex() !== -1 ? this.focusedOptionIndex() : this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : -1;
      this.focusedOptionIndex.set(focusedOptionIndex);
      if (isFocus) {
        primeng_dom__WEBPACK_IMPORTED_MODULE_7__.DomHandler.focus(this.focusInputViewChild?.nativeElement);
      }
      this.cd.markForCheck();
    }
    onOverlayAnimationStart(event) {
      if (event.toState === 'visible') {
        this.itemsWrapper = primeng_dom__WEBPACK_IMPORTED_MODULE_7__.DomHandler.findSingle(this.overlayViewChild?.overlayViewChild?.nativeElement, this.virtualScroll ? '.p-scroller' : '.p-dropdown-items-wrapper');
        this.virtualScroll && this.scroller?.setContentEl(this.itemsViewChild?.nativeElement);
        if (this.options && this.options.length) {
          if (this.virtualScroll) {
            const selectedIndex = this.modelValue() ? this.focusedOptionIndex() : -1;
            if (selectedIndex !== -1) {
              this.scroller?.scrollToIndex(selectedIndex);
            }
          } else {
            let selectedListItem = primeng_dom__WEBPACK_IMPORTED_MODULE_7__.DomHandler.findSingle(this.itemsWrapper, '.p-dropdown-item.p-highlight');
            if (selectedListItem) {
              selectedListItem.scrollIntoView({
                block: 'nearest',
                inline: 'nearest'
              });
            }
          }
        }
        if (this.filterViewChild && this.filterViewChild.nativeElement) {
          this.preventModelTouched = true;
          if (this.autofocusFilter) {
            this.filterViewChild.nativeElement.focus();
          }
        }
        this.onShow.emit(event);
      }
      if (event.toState === 'void') {
        this.itemsWrapper = null;
        this.onModelTouched();
        this.onHide.emit(event);
      }
    }
    /**
     * Hides the panel.
     * @group Method
     */
    hide(isFocus) {
      this.overlayVisible = false;
      this.focusedOptionIndex.set(-1);
      if (this.filter && this.resetFilterOnHide) {
        this.resetFilter();
      }
      isFocus && primeng_dom__WEBPACK_IMPORTED_MODULE_7__.DomHandler.focus(this.focusInputViewChild?.nativeElement);
      this.cd.markForCheck();
    }
    onInputFocus(event) {
      if (this.disabled) {
        // For ScreenReaders
        return;
      }
      this.focused = true;
      const focusedOptionIndex = this.focusedOptionIndex() !== -1 ? this.focusedOptionIndex() : this.overlayVisible && this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : -1;
      this.focusedOptionIndex.set(focusedOptionIndex);
      this.overlayVisible && this.scrollInView(this.focusedOptionIndex());
      this.onFocus.emit(event);
    }
    onInputBlur(event) {
      this.focused = false;
      this.overlayVisible === false && this.onBlur.emit(event);
      if (!this.preventModelTouched) {
        this.onModelTouched();
      }
      this.preventModelTouched = false;
    }
    onKeyDown(event, search) {
      if (this.disabled || this.readonly) {
        return;
      }
      switch (event.code) {
        //down
        case 'ArrowDown':
          this.onArrowDownKey(event);
          break;
        //up
        case 'ArrowUp':
          this.onArrowUpKey(event, this.editable);
          break;
        case 'ArrowLeft':
        case 'ArrowRight':
          this.onArrowLeftKey(event, this.editable);
          break;
        case 'Delete':
          this.onDeleteKey(event);
          break;
        case 'Home':
          this.onHomeKey(event, this.editable);
          break;
        case 'End':
          this.onEndKey(event, this.editable);
          break;
        case 'PageDown':
          this.onPageDownKey(event);
          break;
        case 'PageUp':
          this.onPageUpKey(event);
          break;
        //space
        case 'Space':
          this.onSpaceKey(event, search);
          break;
        //enter
        case 'Enter':
        case 'NumpadEnter':
          this.onEnterKey(event);
          break;
        //escape and tab
        case 'Escape':
          this.onEscapeKey(event);
          break;
        case 'Tab':
          this.onTabKey(event);
          break;
        case 'Backspace':
          this.onBackspaceKey(event, this.editable);
          break;
        case 'ShiftLeft':
        case 'ShiftRight':
          //NOOP
          break;
        default:
          if (!event.metaKey && primeng_utils__WEBPACK_IMPORTED_MODULE_6__.ObjectUtils.isPrintableCharacter(event.key)) {
            !this.overlayVisible && this.show();
            !this.editable && this.searchOptions(event, event.key);
          }
          break;
      }
    }
    onFilterKeyDown(event) {
      switch (event.code) {
        case 'ArrowDown':
          this.onArrowDownKey(event);
          break;
        case 'ArrowUp':
          this.onArrowUpKey(event, true);
          break;
        case 'ArrowLeft':
        case 'ArrowRight':
          this.onArrowLeftKey(event, true);
          break;
        case 'Home':
          this.onHomeKey(event, true);
          break;
        case 'End':
          this.onEndKey(event, true);
          break;
        case 'Enter':
          this.onEnterKey(event);
          break;
        case 'Escape':
          this.onEscapeKey(event);
          break;
        case 'Tab':
          this.onTabKey(event, true);
          break;
        default:
          break;
      }
    }
    onFilterBlur(event) {
      this.focusedOptionIndex.set(-1);
    }
    onArrowDownKey(event) {
      const optionIndex = this.focusedOptionIndex() !== -1 ? this.findNextOptionIndex(this.focusedOptionIndex()) : this.findFirstFocusedOptionIndex();
      this.changeFocusedOptionIndex(event, optionIndex);
      !this.overlayVisible && this.show();
      event.preventDefault();
    }
    changeFocusedOptionIndex(event, index) {
      if (this.focusedOptionIndex() !== index) {
        this.focusedOptionIndex.set(index);
        this.scrollInView();
        if (this.selectOnFocus) {
          const option = this.visibleOptions()[index];
          this.onOptionSelect(event, option, false);
        }
      }
    }
    get virtualScrollerDisabled() {
      return !this.virtualScroll;
    }
    scrollInView(index = -1) {
      const id = index !== -1 ? `${this.id}_${index}` : this.focusedOptionId;
      if (this.itemsViewChild && this.itemsViewChild.nativeElement) {
        const element = primeng_dom__WEBPACK_IMPORTED_MODULE_7__.DomHandler.findSingle(this.itemsViewChild.nativeElement, `li[id="${id}"]`);
        if (element) {
          element.scrollIntoView && element.scrollIntoView({
            block: 'nearest',
            inline: 'nearest'
          });
        } else if (!this.virtualScrollerDisabled) {
          setTimeout(() => {
            this.virtualScroll && this.scroller?.scrollToIndex(index !== -1 ? index : this.focusedOptionIndex());
          }, 0);
        }
      }
    }
    get focusedOptionId() {
      return this.focusedOptionIndex() !== -1 ? `${this.id}_${this.focusedOptionIndex()}` : null;
    }
    hasSelectedOption() {
      return primeng_utils__WEBPACK_IMPORTED_MODULE_6__.ObjectUtils.isNotEmpty(this.modelValue());
    }
    isValidSelectedOption(option) {
      return this.isValidOption(option) && this.isSelected(option);
    }
    equalityKey() {
      return this.optionValue ? null : this.dataKey;
    }
    findFirstFocusedOptionIndex() {
      const selectedIndex = this.findSelectedOptionIndex();
      return selectedIndex < 0 ? this.findFirstOptionIndex() : selectedIndex;
    }
    findFirstOptionIndex() {
      return this.visibleOptions().findIndex(option => this.isValidOption(option));
    }
    findSelectedOptionIndex() {
      return this.hasSelectedOption() ? this.visibleOptions().findIndex(option => this.isValidSelectedOption(option)) : -1;
    }
    findNextOptionIndex(index) {
      const matchedOptionIndex = index < this.visibleOptions().length - 1 ? this.visibleOptions().slice(index + 1).findIndex(option => this.isValidOption(option)) : -1;
      return matchedOptionIndex > -1 ? matchedOptionIndex + index + 1 : index;
    }
    findPrevOptionIndex(index) {
      const matchedOptionIndex = index > 0 ? primeng_utils__WEBPACK_IMPORTED_MODULE_6__.ObjectUtils.findLastIndex(this.visibleOptions().slice(0, index), option => this.isValidOption(option)) : -1;
      return matchedOptionIndex > -1 ? matchedOptionIndex : index;
    }
    findLastOptionIndex() {
      return primeng_utils__WEBPACK_IMPORTED_MODULE_6__.ObjectUtils.findLastIndex(this.visibleOptions(), option => this.isValidOption(option));
    }
    findLastFocusedOptionIndex() {
      const selectedIndex = this.findSelectedOptionIndex();
      return selectedIndex < 0 ? this.findLastOptionIndex() : selectedIndex;
    }
    isValidOption(option) {
      return option && !(this.isOptionDisabled(option) || this.isOptionGroup(option));
    }
    isOptionGroup(option) {
      return this.optionGroupLabel && option.optionGroup && option.group;
    }
    onArrowUpKey(event, pressedInInputText = false) {
      if (event.altKey && !pressedInInputText) {
        if (this.focusedOptionIndex() !== -1) {
          const option = this.visibleOptions()[this.focusedOptionIndex()];
          this.onOptionSelect(event, option);
        }
        this.overlayVisible && this.hide();
        event.preventDefault();
      } else {
        const optionIndex = this.focusedOptionIndex() !== -1 ? this.findPrevOptionIndex(this.focusedOptionIndex()) : this.findLastFocusedOptionIndex();
        this.changeFocusedOptionIndex(event, optionIndex);
        !this.overlayVisible && this.show();
        event.preventDefault();
      }
    }
    onArrowLeftKey(event, pressedInInputText = false) {
      pressedInInputText && this.focusedOptionIndex.set(-1);
    }
    onDeleteKey(event) {
      if (this.showClear) {
        this.clear(event);
        event.preventDefault();
      }
    }
    onHomeKey(event, pressedInInputText = false) {
      if (pressedInInputText) {
        event.currentTarget.setSelectionRange(0, 0);
        this.focusedOptionIndex.set(-1);
      } else {
        this.changeFocusedOptionIndex(event, this.findFirstOptionIndex());
        !this.overlayVisible && this.show();
      }
      event.preventDefault();
    }
    onEndKey(event, pressedInInputText = false) {
      if (pressedInInputText) {
        const target = event.currentTarget;
        const len = target.value.length;
        target.setSelectionRange(len, len);
        this.focusedOptionIndex.set(-1);
      } else {
        this.changeFocusedOptionIndex(event, this.findLastOptionIndex());
        !this.overlayVisible && this.show();
      }
      event.preventDefault();
    }
    onPageDownKey(event) {
      this.scrollInView(this.visibleOptions().length - 1);
      event.preventDefault();
    }
    onPageUpKey(event) {
      this.scrollInView(0);
      event.preventDefault();
    }
    onSpaceKey(event, pressedInInputText = false) {
      !pressedInInputText && this.onEnterKey(event);
    }
    onEnterKey(event) {
      if (!this.overlayVisible) {
        this.onArrowDownKey(event);
      } else {
        if (this.focusedOptionIndex() !== -1) {
          const option = this.visibleOptions()[this.focusedOptionIndex()];
          this.onOptionSelect(event, option);
        }
        this.hide();
      }
      event.preventDefault();
    }
    onEscapeKey(event) {
      this.overlayVisible && this.hide(true);
      event.preventDefault();
    }
    onTabKey(event, pressedInInputText = false) {
      if (!pressedInInputText) {
        if (this.overlayVisible && this.hasFocusableElements()) {
          primeng_dom__WEBPACK_IMPORTED_MODULE_7__.DomHandler.focus(event.shiftKey ? this.lastHiddenFocusableElementOnOverlay.nativeElement : this.firstHiddenFocusableElementOnOverlay.nativeElement);
          event.preventDefault();
        } else {
          if (this.focusedOptionIndex() !== -1) {
            const option = this.visibleOptions()[this.focusedOptionIndex()];
            this.onOptionSelect(event, option);
          }
          this.overlayVisible && this.hide(this.filter);
        }
      }
    }
    onFirstHiddenFocus(event) {
      const focusableEl = event.relatedTarget === this.focusInputViewChild?.nativeElement ? primeng_dom__WEBPACK_IMPORTED_MODULE_7__.DomHandler.getFirstFocusableElement(this.overlayViewChild.el.nativeElement, ':not(.p-hidden-focusable)') : this.focusInputViewChild.nativeElement;
      primeng_dom__WEBPACK_IMPORTED_MODULE_7__.DomHandler.focus(focusableEl);
    }
    onLastHiddenFocus(event) {
      const focusableEl = event.relatedTarget === this.focusInputViewChild?.nativeElement ? primeng_dom__WEBPACK_IMPORTED_MODULE_7__.DomHandler.getLastFocusableElement(this.overlayViewChild?.overlayViewChild?.nativeElement, ':not([data-p-hidden-focusable="true"])') : this.focusInputViewChild?.nativeElement;
      primeng_dom__WEBPACK_IMPORTED_MODULE_7__.DomHandler.focus(focusableEl);
    }
    hasFocusableElements() {
      return primeng_dom__WEBPACK_IMPORTED_MODULE_7__.DomHandler.getFocusableElements(this.overlayViewChild.overlayViewChild.nativeElement, ':not([data-p-hidden-focusable="true"])').length > 0;
    }
    onBackspaceKey(event, pressedInInputText = false) {
      if (pressedInInputText) {
        !this.overlayVisible && this.show();
      }
    }
    searchFields() {
      return this.filterFields || [this.optionLabel];
    }
    searchOptions(event, char) {
      this.searchValue = (this.searchValue || '') + char;
      let optionIndex = -1;
      let matched = false;
      if (this.focusedOptionIndex() !== -1) {
        optionIndex = this.visibleOptions().slice(this.focusedOptionIndex()).findIndex(option => this.isOptionMatched(option));
        optionIndex = optionIndex === -1 ? this.visibleOptions().slice(0, this.focusedOptionIndex()).findIndex(option => this.isOptionMatched(option)) : optionIndex + this.focusedOptionIndex();
      } else {
        optionIndex = this.visibleOptions().findIndex(option => this.isOptionMatched(option));
      }
      if (optionIndex !== -1) {
        matched = true;
      }
      if (optionIndex === -1 && this.focusedOptionIndex() === -1) {
        optionIndex = this.findFirstFocusedOptionIndex();
      }
      if (optionIndex !== -1) {
        this.changeFocusedOptionIndex(event, optionIndex);
      }
      if (this.searchTimeout) {
        clearTimeout(this.searchTimeout);
      }
      this.searchTimeout = setTimeout(() => {
        this.searchValue = '';
        this.searchTimeout = null;
      }, 500);
      return matched;
    }
    isOptionMatched(option) {
      return this.isValidOption(option) && this.getOptionLabel(option).toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale));
    }
    onFilterInputChange(event) {
      let value = event.target.value?.trim();
      this._filterValue.set(value);
      this.focusedOptionIndex.set(-1);
      this.onFilter.emit({
        originalEvent: event,
        filter: this._filterValue()
      });
      !this.virtualScrollerDisabled && this.scroller.scrollToIndex(0);
      this.cd.markForCheck();
    }
    applyFocus() {
      if (this.editable) primeng_dom__WEBPACK_IMPORTED_MODULE_7__.DomHandler.findSingle(this.el.nativeElement, '.p-dropdown-label.p-inputtext').focus();else primeng_dom__WEBPACK_IMPORTED_MODULE_7__.DomHandler.findSingle(this.el.nativeElement, 'input[readonly]').focus();
    }
    /**
     * Applies focus.
     * @group Method
     */
    focus() {
      this.applyFocus();
    }
    clear(event) {
      this.updateModel(null, event);
      this.updateEditableLabel();
      this.onChange.emit({
        originalEvent: event,
        value: this.value
      });
      this.onClear.emit(event);
    }
  }
  (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Dropdown, "\u0275fac", function Dropdown_Factory(t) {
    return new (t || Dropdown)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_5__.FilterService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_5__.PrimeNGConfig));
  });
  (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Dropdown, "\u0275cmp", /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: Dropdown,
    selectors: [["p-dropdown"]],
    contentQueries: function Dropdown_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_5__.PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.templates = _t);
      }
    },
    viewQuery: function Dropdown_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c3, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c5, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c6, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c7, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c8, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c9, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c10, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c11, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.containerViewChild = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.filterViewChild = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.focusInputViewChild = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.editableInputViewChild = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.itemsViewChild = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.scroller = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.overlayViewChild = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.firstHiddenFocusableElementOnOverlay = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.lastHiddenFocusableElementOnOverlay = _t.first);
      }
    },
    hostAttrs: [1, "p-element", "p-inputwrapper"],
    hostVars: 4,
    hostBindings: function Dropdown_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("p-inputwrapper-filled", ctx.filled)("p-inputwrapper-focus", ctx.focused || ctx.overlayVisible);
      }
    },
    inputs: {
      id: "id",
      scrollHeight: "scrollHeight",
      filter: "filter",
      name: "name",
      style: "style",
      panelStyle: "panelStyle",
      styleClass: "styleClass",
      panelStyleClass: "panelStyleClass",
      readonly: "readonly",
      required: "required",
      editable: "editable",
      appendTo: "appendTo",
      tabindex: "tabindex",
      placeholder: "placeholder",
      filterPlaceholder: "filterPlaceholder",
      filterLocale: "filterLocale",
      inputId: "inputId",
      dataKey: "dataKey",
      filterBy: "filterBy",
      filterFields: "filterFields",
      autofocus: "autofocus",
      resetFilterOnHide: "resetFilterOnHide",
      dropdownIcon: "dropdownIcon",
      optionLabel: "optionLabel",
      optionValue: "optionValue",
      optionDisabled: "optionDisabled",
      optionGroupLabel: "optionGroupLabel",
      optionGroupChildren: "optionGroupChildren",
      autoDisplayFirst: "autoDisplayFirst",
      group: "group",
      showClear: "showClear",
      emptyFilterMessage: "emptyFilterMessage",
      emptyMessage: "emptyMessage",
      lazy: "lazy",
      virtualScroll: "virtualScroll",
      virtualScrollItemSize: "virtualScrollItemSize",
      virtualScrollOptions: "virtualScrollOptions",
      overlayOptions: "overlayOptions",
      ariaFilterLabel: "ariaFilterLabel",
      ariaLabel: "ariaLabel",
      ariaLabelledBy: "ariaLabelledBy",
      filterMatchMode: "filterMatchMode",
      maxlength: "maxlength",
      tooltip: "tooltip",
      tooltipPosition: "tooltipPosition",
      tooltipPositionStyle: "tooltipPositionStyle",
      tooltipStyleClass: "tooltipStyleClass",
      focusOnHover: "focusOnHover",
      selectOnFocus: "selectOnFocus",
      autoOptionFocus: "autoOptionFocus",
      autofocusFilter: "autofocusFilter",
      disabled: "disabled",
      itemSize: "itemSize",
      autoZIndex: "autoZIndex",
      baseZIndex: "baseZIndex",
      showTransitionOptions: "showTransitionOptions",
      hideTransitionOptions: "hideTransitionOptions",
      filterValue: "filterValue",
      options: "options"
    },
    outputs: {
      onChange: "onChange",
      onFilter: "onFilter",
      onFocus: "onFocus",
      onBlur: "onBlur",
      onClick: "onClick",
      onShow: "onShow",
      onHide: "onHide",
      onClear: "onClear",
      onLazyLoad: "onLazyLoad"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([DROPDOWN_VALUE_ACCESSOR])],
    decls: 11,
    vars: 20,
    consts: [[3, "ngClass", "ngStyle", "click"], ["container", ""], ["role", "combobox", "pAutoFocus", "", 3, "ngClass", "pTooltip", "tooltipPosition", "positionStyle", "tooltipStyleClass", "autofocus", "focus", "blur", "keydown", 4, "ngIf"], ["type", "text", "aria-haspopup", "listbox", 3, "ngClass", "disabled", "input", "keydown", "focus", "blur", 4, "ngIf"], [4, "ngIf"], ["role", "button", "aria-label", "dropdown trigger", "aria-haspopup", "listbox", 1, "p-dropdown-trigger"], ["class", "p-dropdown-trigger-icon", 4, "ngIf"], [3, "visible", "options", "target", "appendTo", "autoZIndex", "baseZIndex", "showTransitionOptions", "hideTransitionOptions", "visibleChange", "onAnimationStart", "onHide"], ["overlay", ""], ["pTemplate", "content"], ["role", "combobox", "pAutoFocus", "", 3, "ngClass", "pTooltip", "tooltipPosition", "positionStyle", "tooltipStyleClass", "autofocus", "focus", "blur", "keydown"], ["focusInput", ""], [4, "ngIf", "ngIfElse"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["defaultPlaceholder", ""], ["type", "text", "aria-haspopup", "listbox", 3, "ngClass", "disabled", "input", "keydown", "focus", "blur"], ["editableInput", ""], [3, "styleClass", "click", 4, "ngIf"], ["class", "p-dropdown-clear-icon", 3, "click", 4, "ngIf"], [3, "styleClass", "click"], [1, "p-dropdown-clear-icon", 3, "click"], [4, "ngTemplateOutlet"], ["class", "p-dropdown-trigger-icon", 3, "ngClass", 4, "ngIf"], [3, "styleClass", 4, "ngIf"], [1, "p-dropdown-trigger-icon", 3, "ngClass"], [3, "styleClass"], [1, "p-dropdown-trigger-icon"], [3, "ngClass", "ngStyle"], ["role", "presentation", 1, "p-hidden-accessible", "p-hidden-focusable", 3, "focus"], ["firstHiddenFocusableEl", ""], ["class", "p-dropdown-header", 3, "click", 4, "ngIf"], [1, "p-dropdown-items-wrapper"], [3, "items", "style", "itemSize", "autoSize", "lazy", "options", "onLazyLoad", 4, "ngIf"], ["buildInItems", ""], ["lastHiddenFocusableEl", ""], [1, "p-dropdown-header", 3, "click"], ["builtInFilterElement", ""], [1, "p-dropdown-filter-container"], ["type", "text", "autocomplete", "off", 1, "p-dropdown-filter", "p-inputtext", "p-component", 3, "value", "input", "keydown", "blur"], ["filter", ""], ["class", "p-dropdown-filter-icon", 4, "ngIf"], [1, "p-dropdown-filter-icon"], [3, "items", "itemSize", "autoSize", "lazy", "options", "onLazyLoad"], ["scroller", ""], ["pTemplate", "loader"], ["role", "listbox", 1, "p-dropdown-items", 3, "ngClass"], ["items", ""], ["ngFor", "", 3, "ngForOf"], ["class", "p-dropdown-empty-message", 3, "ngStyle", 4, "ngIf"], ["role", "option", 1, "p-dropdown-item-group", 3, "ngStyle"], [3, "id", "option", "selected", "label", "disabled", "template", "focused", "ariaPosInset", "ariaSetSize", "onClick", "onMouseEnter"], [1, "p-dropdown-empty-message", 3, "ngStyle"], ["emptyFilter", ""], ["empty", ""]],
    template: function Dropdown_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function Dropdown_Template_div_click_0_listener($event) {
          return ctx.onContainerClick($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, Dropdown_span_2_Template, 6, 21, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, Dropdown_input_3_Template, 2, 5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, Dropdown_ng_container_4_Template, 3, 2, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, Dropdown_ng_container_6_Template, 3, 2, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, Dropdown_span_7_Template, 2, 1, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p-overlay", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("visibleChange", function Dropdown_Template_p_overlay_visibleChange_8_listener($event) {
          return ctx.overlayVisible = $event;
        })("onAnimationStart", function Dropdown_Template_p_overlay_onAnimationStart_8_listener($event) {
          return ctx.onOverlayAnimationStart($event);
        })("onHide", function Dropdown_Template_p_overlay_onHide_8_listener() {
          return ctx.hide();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, Dropdown_ng_template_10_Template, 13, 19, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.styleClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.containerClass)("ngStyle", ctx.style);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("id", ctx.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.editable);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.editable);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isVisibleClearIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-expanded", ctx.overlayVisible)("data-pc-section", "trigger");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.dropdownIconTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.dropdownIconTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("visible", ctx.overlayVisible)("options", ctx.overlayOptions)("target", "@parent")("appendTo", ctx.appendTo)("autoZIndex", ctx.autoZIndex)("baseZIndex", ctx.baseZIndex)("showTransitionOptions", ctx.showTransitionOptions)("hideTransitionOptions", ctx.hideTransitionOptions);
      }
    },
    dependencies: function () {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle, primeng_overlay__WEBPACK_IMPORTED_MODULE_8__.Overlay, primeng_api__WEBPACK_IMPORTED_MODULE_5__.PrimeTemplate, primeng_tooltip__WEBPACK_IMPORTED_MODULE_9__.Tooltip, primeng_scroller__WEBPACK_IMPORTED_MODULE_10__.Scroller, primeng_autofocus__WEBPACK_IMPORTED_MODULE_11__.AutoFocus, primeng_icons_times__WEBPACK_IMPORTED_MODULE_12__.TimesIcon, primeng_icons_chevrondown__WEBPACK_IMPORTED_MODULE_13__.ChevronDownIcon, primeng_icons_search__WEBPACK_IMPORTED_MODULE_14__.SearchIcon, DropdownItem];
    },
    styles: ["@layer primeng{.p-dropdown{display:inline-flex;cursor:pointer;position:relative;-webkit-user-select:none;user-select:none}.p-dropdown-clear-icon{position:absolute;top:50%;margin-top:-.5rem}.p-dropdown-trigger{display:flex;align-items:center;justify-content:center;flex-shrink:0}.p-dropdown-label{display:block;white-space:nowrap;overflow:hidden;flex:1 1 auto;width:1%;text-overflow:ellipsis;cursor:pointer}.p-dropdown-label-empty{overflow:hidden;opacity:0}input.p-dropdown-label{cursor:default}.p-dropdown .p-dropdown-panel{min-width:100%}.p-dropdown-items-wrapper{overflow:auto}.p-dropdown-item{cursor:pointer;font-weight:400;white-space:nowrap;position:relative;overflow:hidden}.p-dropdown-item-group{cursor:auto}.p-dropdown-items{margin:0;padding:0;list-style-type:none}.p-dropdown-filter{width:100%}.p-dropdown-filter-container{position:relative}.p-dropdown-filter-icon{position:absolute;top:50%;margin-top:-.5rem}.p-fluid .p-dropdown{display:flex}.p-fluid .p-dropdown .p-dropdown-label{width:1%}}\n"],
    encapsulation: 2,
    changeDetection: 0
  }));
  return Dropdown;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let DropdownModule = /*#__PURE__*/(() => {
  class DropdownModule {}
  (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(DropdownModule, "\u0275fac", function DropdownModule_Factory(t) {
    return new (t || DropdownModule)();
  });
  (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(DropdownModule, "\u0275mod", /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: DropdownModule
  }));
  (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(DropdownModule, "\u0275inj", /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, primeng_overlay__WEBPACK_IMPORTED_MODULE_8__.OverlayModule, primeng_api__WEBPACK_IMPORTED_MODULE_5__.SharedModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_9__.TooltipModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_4__.RippleModule, primeng_scroller__WEBPACK_IMPORTED_MODULE_10__.ScrollerModule, primeng_autofocus__WEBPACK_IMPORTED_MODULE_11__.AutoFocusModule, primeng_icons_times__WEBPACK_IMPORTED_MODULE_12__.TimesIcon, primeng_icons_chevrondown__WEBPACK_IMPORTED_MODULE_13__.ChevronDownIcon, primeng_icons_search__WEBPACK_IMPORTED_MODULE_14__.SearchIcon, primeng_overlay__WEBPACK_IMPORTED_MODULE_8__.OverlayModule, primeng_api__WEBPACK_IMPORTED_MODULE_5__.SharedModule, primeng_scroller__WEBPACK_IMPORTED_MODULE_10__.ScrollerModule]
  }));
  return DropdownModule;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 4972:
/*!*********************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-icons-chevrondown.mjs ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChevronDownIcon: () => (/* binding */ ChevronDownIcon)
/* harmony export */ });
/* harmony import */ var C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var primeng_baseicon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/baseicon */ 3128);




let ChevronDownIcon = /*#__PURE__*/(() => {
  class ChevronDownIcon extends primeng_baseicon__WEBPACK_IMPORTED_MODULE_1__.BaseIcon {}
  (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ChevronDownIcon, "\u0275fac", /* @__PURE__ */function () {
    let ɵChevronDownIcon_BaseFactory;
    return function ChevronDownIcon_Factory(t) {
      return (ɵChevronDownIcon_BaseFactory || (ɵChevronDownIcon_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](ChevronDownIcon)))(t || ChevronDownIcon);
    };
  }());
  (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ChevronDownIcon, "\u0275cmp", /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ChevronDownIcon,
    selectors: [["ChevronDownIcon"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 2,
    vars: 5,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z", "fill", "currentColor"]],
    template: function ChevronDownIcon_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "path", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.getClassNames());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
      }
    },
    encapsulation: 2
  }));
  return ChevronDownIcon;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 8859:
/*!***************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-icons-minus.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MinusIcon: () => (/* binding */ MinusIcon)
/* harmony export */ });
/* harmony import */ var C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var primeng_baseicon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/baseicon */ 3128);





let MinusIcon = /*#__PURE__*/(() => {
  class MinusIcon extends primeng_baseicon__WEBPACK_IMPORTED_MODULE_1__.BaseIcon {}
  (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(MinusIcon, "\u0275fac", /* @__PURE__ */function () {
    let ɵMinusIcon_BaseFactory;
    return function MinusIcon_Factory(t) {
      return (ɵMinusIcon_BaseFactory || (ɵMinusIcon_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](MinusIcon)))(t || MinusIcon);
    };
  }());
  (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(MinusIcon, "\u0275cmp", /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: MinusIcon,
    selectors: [["MinusIcon"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 2,
    vars: 5,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z", "fill", "currentColor"]],
    template: function MinusIcon_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "path", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.getClassNames());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule],
    encapsulation: 2
  }));
  return MinusIcon;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 7186:
/*!**************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-icons-plus.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlusIcon: () => (/* binding */ PlusIcon)
/* harmony export */ });
/* harmony import */ var C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var primeng_baseicon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/baseicon */ 3128);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/utils */ 5861);





let PlusIcon = /*#__PURE__*/(() => {
  class PlusIcon extends primeng_baseicon__WEBPACK_IMPORTED_MODULE_1__.BaseIcon {
    constructor(...args) {
      super(...args);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "pathId", void 0);
    }
    ngOnInit() {
      this.pathId = 'url(#' + (0,primeng_utils__WEBPACK_IMPORTED_MODULE_2__.UniqueComponentId)() + ')';
    }
  }
  (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(PlusIcon, "\u0275fac", /* @__PURE__ */function () {
    let ɵPlusIcon_BaseFactory;
    return function PlusIcon_Factory(t) {
      return (ɵPlusIcon_BaseFactory || (ɵPlusIcon_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](PlusIcon)))(t || PlusIcon);
    };
  }());
  (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(PlusIcon, "\u0275cmp", /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: PlusIcon,
    selectors: [["PlusIcon"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
    decls: 6,
    vars: 7,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M7.67742 6.32258V0.677419C7.67742 0.497757 7.60605 0.325452 7.47901 0.198411C7.35197 0.0713707 7.17966 0 7 0C6.82034 0 6.64803 0.0713707 6.52099 0.198411C6.39395 0.325452 6.32258 0.497757 6.32258 0.677419V6.32258H0.677419C0.497757 6.32258 0.325452 6.39395 0.198411 6.52099C0.0713707 6.64803 0 6.82034 0 7C0 7.17966 0.0713707 7.35197 0.198411 7.47901C0.325452 7.60605 0.497757 7.67742 0.677419 7.67742H6.32258V13.3226C6.32492 13.5015 6.39704 13.6725 6.52358 13.799C6.65012 13.9255 6.82106 13.9977 7 14C7.17966 14 7.35197 13.9286 7.47901 13.8016C7.60605 13.6745 7.67742 13.5022 7.67742 13.3226V7.67742H13.3226C13.5022 7.67742 13.6745 7.60605 13.8016 7.47901C13.9286 7.35197 14 7.17966 14 7C13.9977 6.82106 13.9255 6.65012 13.799 6.52358C13.6725 6.39704 13.5015 6.32492 13.3226 6.32258H7.67742Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
    template: function PlusIcon_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "svg", 0)(1, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "path", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "defs")(4, "clipPath", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "rect", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](ctx.getClassNames());
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("clip-path", ctx.pathId);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", ctx.pathId);
      }
    },
    encapsulation: 2
  }));
  return PlusIcon;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 9103:
/*!****************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-icons-search.mjs ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchIcon: () => (/* binding */ SearchIcon)
/* harmony export */ });
/* harmony import */ var C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var primeng_baseicon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/baseicon */ 3128);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/utils */ 5861);





let SearchIcon = /*#__PURE__*/(() => {
  class SearchIcon extends primeng_baseicon__WEBPACK_IMPORTED_MODULE_1__.BaseIcon {
    constructor(...args) {
      super(...args);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "pathId", void 0);
    }
    ngOnInit() {
      this.pathId = 'url(#' + (0,primeng_utils__WEBPACK_IMPORTED_MODULE_2__.UniqueComponentId)() + ')';
    }
  }
  (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(SearchIcon, "\u0275fac", /* @__PURE__ */function () {
    let ɵSearchIcon_BaseFactory;
    return function SearchIcon_Factory(t) {
      return (ɵSearchIcon_BaseFactory || (ɵSearchIcon_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](SearchIcon)))(t || SearchIcon);
    };
  }());
  (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(SearchIcon, "\u0275cmp", /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: SearchIcon,
    selectors: [["SearchIcon"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
    decls: 6,
    vars: 7,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M2.67602 11.0265C3.6661 11.688 4.83011 12.0411 6.02086 12.0411C6.81149 12.0411 7.59438 11.8854 8.32483 11.5828C8.87005 11.357 9.37808 11.0526 9.83317 10.6803L12.9769 13.8241C13.0323 13.8801 13.0983 13.9245 13.171 13.9548C13.2438 13.985 13.3219 14.0003 13.4007 14C13.4795 14.0003 13.5575 13.985 13.6303 13.9548C13.7031 13.9245 13.7691 13.8801 13.8244 13.8241C13.9367 13.7116 13.9998 13.5592 13.9998 13.4003C13.9998 13.2414 13.9367 13.089 13.8244 12.9765L10.6807 9.8328C11.053 9.37773 11.3573 8.86972 11.5831 8.32452C11.8857 7.59408 12.0414 6.81119 12.0414 6.02056C12.0414 4.8298 11.6883 3.66579 11.0268 2.67572C10.3652 1.68564 9.42494 0.913972 8.32483 0.45829C7.22472 0.00260857 6.01418 -0.116618 4.84631 0.115686C3.67844 0.34799 2.60568 0.921393 1.76369 1.76338C0.921698 2.60537 0.348296 3.67813 0.115991 4.84601C-0.116313 6.01388 0.00291375 7.22441 0.458595 8.32452C0.914277 9.42464 1.68595 10.3649 2.67602 11.0265ZM3.35565 2.0158C4.14456 1.48867 5.07206 1.20731 6.02086 1.20731C7.29317 1.20731 8.51338 1.71274 9.41304 2.6124C10.3127 3.51206 10.8181 4.73226 10.8181 6.00457C10.8181 6.95337 10.5368 7.88088 10.0096 8.66978C9.48251 9.45868 8.73328 10.0736 7.85669 10.4367C6.98011 10.7997 6.01554 10.8947 5.08496 10.7096C4.15439 10.5245 3.2996 10.0676 2.62869 9.39674C1.95778 8.72583 1.50089 7.87104 1.31579 6.94046C1.13068 6.00989 1.22568 5.04532 1.58878 4.16874C1.95187 3.29215 2.56675 2.54292 3.35565 2.0158Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
    template: function SearchIcon_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "svg", 0)(1, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "path", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "defs")(4, "clipPath", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "rect", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](ctx.getClassNames());
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("clip-path", ctx.pathId);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", ctx.pathId);
      }
    },
    encapsulation: 2
  }));
  return SearchIcon;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 9184:
/*!*****************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-icons-spinner.mjs ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SpinnerIcon: () => (/* binding */ SpinnerIcon)
/* harmony export */ });
/* harmony import */ var C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var primeng_baseicon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/baseicon */ 3128);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/utils */ 5861);





let SpinnerIcon = /*#__PURE__*/(() => {
  class SpinnerIcon extends primeng_baseicon__WEBPACK_IMPORTED_MODULE_1__.BaseIcon {
    constructor(...args) {
      super(...args);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "pathId", void 0);
    }
    ngOnInit() {
      this.pathId = 'url(#' + (0,primeng_utils__WEBPACK_IMPORTED_MODULE_2__.UniqueComponentId)() + ')';
    }
  }
  (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(SpinnerIcon, "\u0275fac", /* @__PURE__ */function () {
    let ɵSpinnerIcon_BaseFactory;
    return function SpinnerIcon_Factory(t) {
      return (ɵSpinnerIcon_BaseFactory || (ɵSpinnerIcon_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](SpinnerIcon)))(t || SpinnerIcon);
    };
  }());
  (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(SpinnerIcon, "\u0275cmp", /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: SpinnerIcon,
    selectors: [["SpinnerIcon"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
    decls: 6,
    vars: 7,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
    template: function SpinnerIcon_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "svg", 0)(1, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "path", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "defs")(4, "clipPath", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "rect", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](ctx.getClassNames());
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("clip-path", ctx.pathId);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", ctx.pathId);
      }
    },
    encapsulation: 2
  }));
  return SpinnerIcon;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 5166:
/*!***********************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-overlay.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OVERLAY_VALUE_ACCESSOR: () => (/* binding */ OVERLAY_VALUE_ACCESSOR),
/* harmony export */   Overlay: () => (/* binding */ Overlay),
/* harmony export */   OverlayModule: () => (/* binding */ OverlayModule)
/* harmony export */ });
/* harmony import */ var C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ 2501);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ 8026);
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/dom */ 4946);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/utils */ 5861);











const _c0 = ["overlay"];
const _c1 = ["content"];
function Overlay_div_0_div_2_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
const _c2 = function (a0, a1, a2) {
  return {
    showTransitionParams: a0,
    hideTransitionParams: a1,
    transform: a2
  };
};
const _c3 = function (a1) {
  return {
    value: "visible",
    params: a1
  };
};
const _c4 = function (a0) {
  return {
    mode: a0
  };
};
const _c5 = function (a0) {
  return {
    $implicit: a0
  };
};
function Overlay_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function Overlay_div_0_div_2_Template_div_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r5.onOverlayContentClick($event));
    })("@overlayContentAnimation.start", function Overlay_div_0_div_2_Template_div_animation_overlayContentAnimation_start_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r7.onOverlayContentAnimationStart($event));
    })("@overlayContentAnimation.done", function Overlay_div_0_div_2_Template_div_animation_overlayContentAnimation_done_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r8.onOverlayContentAnimationDone($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, Overlay_div_0_div_2_ng_container_3_Template, 1, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r2.contentStyleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx_r2.contentStyle)("ngClass", "p-overlay-content")("@overlayContentAnimation", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](11, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](7, _c2, ctx_r2.showTransitionOptions, ctx_r2.hideTransitionOptions, ctx_r2.transformOptions[ctx_r2.modal ? ctx_r2.overlayResponsiveDirection : "default"])));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.contentTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](15, _c5, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](13, _c4, ctx_r2.overlayMode)));
  }
}
const _c6 = function (a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14) {
  return {
    "p-overlay p-component": true,
    "p-overlay-modal p-component-overlay p-component-overlay-enter": a1,
    "p-overlay-center": a2,
    "p-overlay-top": a3,
    "p-overlay-top-start": a4,
    "p-overlay-top-end": a5,
    "p-overlay-bottom": a6,
    "p-overlay-bottom-start": a7,
    "p-overlay-bottom-end": a8,
    "p-overlay-left": a9,
    "p-overlay-left-start": a10,
    "p-overlay-left-end": a11,
    "p-overlay-right": a12,
    "p-overlay-right-start": a13,
    "p-overlay-right-end": a14
  };
};
function Overlay_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function Overlay_div_0_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r9.onOverlayClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, Overlay_div_0_div_2_Template, 4, 17, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r0.styleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx_r0.style)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunctionV"](5, _c6, [ctx_r0.modal, ctx_r0.modal && ctx_r0.overlayResponsiveDirection === "center", ctx_r0.modal && ctx_r0.overlayResponsiveDirection === "top", ctx_r0.modal && ctx_r0.overlayResponsiveDirection === "top-start", ctx_r0.modal && ctx_r0.overlayResponsiveDirection === "top-end", ctx_r0.modal && ctx_r0.overlayResponsiveDirection === "bottom", ctx_r0.modal && ctx_r0.overlayResponsiveDirection === "bottom-start", ctx_r0.modal && ctx_r0.overlayResponsiveDirection === "bottom-end", ctx_r0.modal && ctx_r0.overlayResponsiveDirection === "left", ctx_r0.modal && ctx_r0.overlayResponsiveDirection === "left-start", ctx_r0.modal && ctx_r0.overlayResponsiveDirection === "left-end", ctx_r0.modal && ctx_r0.overlayResponsiveDirection === "right", ctx_r0.modal && ctx_r0.overlayResponsiveDirection === "right-start", ctx_r0.modal && ctx_r0.overlayResponsiveDirection === "right-end"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.visible);
  }
}
const _c7 = ["*"];
const OVERLAY_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NG_VALUE_ACCESSOR,
  useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => Overlay),
  multi: true
};
const showOverlayContentAnimation = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
  transform: '{{transform}}',
  opacity: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.animate)('{{showTransitionParams}}')]);
const hideOverlayContentAnimation = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.animate)('{{hideTransitionParams}}', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
  transform: '{{transform}}',
  opacity: 0
}))]);
/**
 * This API allows overlay components to be controlled from the PrimeNGConfig. In this way, all overlay components in the application can have the same behavior.
 * @group Components
 */
let Overlay = /*#__PURE__*/(() => {
  class Overlay {
    /**
     * The visible property is an input that determines the visibility of the component.
     * @defaultValue false
     * @group Props
     */
    get visible() {
      return this._visible;
    }
    set visible(value) {
      this._visible = value;
      if (this._visible && !this.modalVisible) {
        this.modalVisible = true;
      }
    }
    /**
     * The mode property is an input that determines the overlay mode type or string.
     * @defaultValue null
     * @group Props
     */
    get mode() {
      return this._mode || this.overlayOptions?.mode;
    }
    set mode(value) {
      this._mode = value;
    }
    /**
     * The style property is an input that determines the style object for the component.
     * @defaultValue null
     * @group Props
     */
    get style() {
      return primeng_utils__WEBPACK_IMPORTED_MODULE_4__.ObjectUtils.merge(this._style, this.modal ? this.overlayResponsiveOptions?.style : this.overlayOptions?.style);
    }
    set style(value) {
      this._style = value;
    }
    /**
     * The styleClass property is an input that determines the CSS class(es) for the component.
     * @defaultValue null
     * @group Props
     */
    get styleClass() {
      return primeng_utils__WEBPACK_IMPORTED_MODULE_4__.ObjectUtils.merge(this._styleClass, this.modal ? this.overlayResponsiveOptions?.styleClass : this.overlayOptions?.styleClass);
    }
    set styleClass(value) {
      this._styleClass = value;
    }
    /**
     * The contentStyle property is an input that determines the style object for the content of the component.
     * @defaultValue null
     * @group Props
     */
    get contentStyle() {
      return primeng_utils__WEBPACK_IMPORTED_MODULE_4__.ObjectUtils.merge(this._contentStyle, this.modal ? this.overlayResponsiveOptions?.contentStyle : this.overlayOptions?.contentStyle);
    }
    set contentStyle(value) {
      this._contentStyle = value;
    }
    /**
     * The contentStyleClass property is an input that determines the CSS class(es) for the content of the component.
     * @defaultValue null
     * @group Props
     */
    get contentStyleClass() {
      return primeng_utils__WEBPACK_IMPORTED_MODULE_4__.ObjectUtils.merge(this._contentStyleClass, this.modal ? this.overlayResponsiveOptions?.contentStyleClass : this.overlayOptions?.contentStyleClass);
    }
    set contentStyleClass(value) {
      this._contentStyleClass = value;
    }
    /**
     * The target property is an input that specifies the target element or selector for the component.
     * @defaultValue null
     * @group Props
     */
    get target() {
      const value = this._target || this.overlayOptions?.target;
      return value === undefined ? '@prev' : value;
    }
    set target(value) {
      this._target = value;
    }
    /**
     * Overlay can be mounted into its location, body or DOM element instance using this option.
     * @defaultValue null
     * @group Props
     */
    get appendTo() {
      return this._appendTo || this.overlayOptions?.appendTo;
    }
    set appendTo(value) {
      this._appendTo = value;
    }
    /**
     * The autoZIndex determines whether to automatically manage layering. Its default value is 'false'.
     * @defaultValue false
     * @group Props
     */
    get autoZIndex() {
      const value = this._autoZIndex || this.overlayOptions?.autoZIndex;
      return value === undefined ? true : value;
    }
    set autoZIndex(value) {
      this._autoZIndex = value;
    }
    /**
     * The baseZIndex is base zIndex value to use in layering.
     * @defaultValue null
     * @group Props
     */
    get baseZIndex() {
      const value = this._baseZIndex || this.overlayOptions?.baseZIndex;
      return value === undefined ? 0 : value;
    }
    set baseZIndex(value) {
      this._baseZIndex = value;
    }
    /**
     * Transition options of the show or hide animation.
     * @defaultValue .12s cubic-bezier(0, 0, 0.2, 1)
     * @group Props
     */
    get showTransitionOptions() {
      const value = this._showTransitionOptions || this.overlayOptions?.showTransitionOptions;
      return value === undefined ? '.12s cubic-bezier(0, 0, 0.2, 1)' : value;
    }
    set showTransitionOptions(value) {
      this._showTransitionOptions = value;
    }
    /**
     * The hideTransitionOptions property is an input that determines the CSS transition options for hiding the component.
     * @defaultValue .1s linear
     * @group Props
     */
    get hideTransitionOptions() {
      const value = this._hideTransitionOptions || this.overlayOptions?.hideTransitionOptions;
      return value === undefined ? '.1s linear' : value;
    }
    set hideTransitionOptions(value) {
      this._hideTransitionOptions = value;
    }
    /**
     * The listener property is an input that specifies the listener object for the component.
     * @defaultValue null
     * @group Props
     */
    get listener() {
      return this._listener || this.overlayOptions?.listener;
    }
    set listener(value) {
      this._listener = value;
    }
    /**
     * It is the option used to determine in which mode it should appear according to the given media or breakpoint.
     * @defaultValue null
     * @group Props
     */
    get responsive() {
      return this._responsive || this.overlayOptions?.responsive;
    }
    set responsive(val) {
      this._responsive = val;
    }
    /**
     * The options property is an input that specifies the overlay options for the component.
     * @defaultValue null
     * @group Props
     */
    get options() {
      return this._options;
    }
    set options(val) {
      this._options = val;
    }
    /**
     * This EventEmitter is used to notify changes in the visibility state of a component.
     * @param {Boolean} boolean - Value of visibility as boolean.
     * @group Emits
     */

    get modal() {
      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_5__.isPlatformBrowser)(this.platformId)) {
        return this.mode === 'modal' || this.overlayResponsiveOptions && this.window?.matchMedia(this.overlayResponsiveOptions.media?.replace('@media', '') || `(max-width: ${this.overlayResponsiveOptions.breakpoint})`).matches;
      }
    }
    get overlayMode() {
      return this.mode || (this.modal ? 'modal' : 'overlay');
    }
    get overlayOptions() {
      return {
        ...this.config?.overlayOptions,
        ...this.options
      }; // TODO: Improve performance
    }

    get overlayResponsiveOptions() {
      return {
        ...this.overlayOptions?.responsive,
        ...this.responsive
      }; // TODO: Improve performance
    }

    get overlayResponsiveDirection() {
      return this.overlayResponsiveOptions?.direction || 'center';
    }
    get overlayEl() {
      return this.overlayViewChild?.nativeElement;
    }
    get contentEl() {
      return this.contentViewChild?.nativeElement;
    }
    get targetEl() {
      return primeng_dom__WEBPACK_IMPORTED_MODULE_6__.DomHandler.getTargetElement(this.target, this.el?.nativeElement);
    }
    constructor(document, platformId, el, renderer, config, overlayService, cd, zone) {
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "document", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "platformId", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "el", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "renderer", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "config", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "overlayService", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "cd", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "zone", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "visibleChange", new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter());
      /**
       * Callback to invoke before the overlay is shown.
       * @param {OverlayOnBeforeShowEvent} event - Custom overlay before show event.
       * @group Emits
       */
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onBeforeShow", new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter());
      /**
       * Callback to invoke when the overlay is shown.
       * @param {OverlayOnShowEvent} event - Custom overlay show event.
       * @group Emits
       */
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onShow", new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter());
      /**
       * Callback to invoke before the overlay is hidden.
       * @param {OverlayOnBeforeHideEvent} event - Custom overlay before hide event.
       * @group Emits
       */
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onBeforeHide", new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter());
      /**
       * Callback to invoke when the overlay is hidden
       * @param {OverlayOnHideEvent} event - Custom hide event.
       * @group Emits
       */
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onHide", new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter());
      /**
       * Callback to invoke when the animation is started.
       * @param {AnimationEvent} event - Animation event.
       * @group Emits
       */
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onAnimationStart", new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter());
      /**
       * Callback to invoke when the animation is done.
       * @param {AnimationEvent} event - Animation event.
       * @group Emits
       */
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onAnimationDone", new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter());
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "templates", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "overlayViewChild", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "contentViewChild", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "contentTemplate", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_visible", false);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_mode", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_style", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_styleClass", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_contentStyle", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_contentStyleClass", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_target", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_appendTo", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_autoZIndex", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_baseZIndex", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_showTransitionOptions", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_hideTransitionOptions", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_listener", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_responsive", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_options", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "modalVisible", false);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "isOverlayClicked", false);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "isOverlayContentClicked", false);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "scrollHandler", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "documentClickListener", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "documentResizeListener", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "documentKeyboardListener", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "window", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "transformOptions", {
        default: 'scaleY(0.8)',
        center: 'scale(0.7)',
        top: 'translate3d(0px, -100%, 0px)',
        'top-start': 'translate3d(0px, -100%, 0px)',
        'top-end': 'translate3d(0px, -100%, 0px)',
        bottom: 'translate3d(0px, 100%, 0px)',
        'bottom-start': 'translate3d(0px, 100%, 0px)',
        'bottom-end': 'translate3d(0px, 100%, 0px)',
        left: 'translate3d(-100%, 0px, 0px)',
        'left-start': 'translate3d(-100%, 0px, 0px)',
        'left-end': 'translate3d(-100%, 0px, 0px)',
        right: 'translate3d(100%, 0px, 0px)',
        'right-start': 'translate3d(100%, 0px, 0px)',
        'right-end': 'translate3d(100%, 0px, 0px)'
      });
      this.document = document;
      this.platformId = platformId;
      this.el = el;
      this.renderer = renderer;
      this.config = config;
      this.overlayService = overlayService;
      this.cd = cd;
      this.zone = zone;
      this.window = this.document.defaultView;
    }
    ngAfterContentInit() {
      this.templates?.forEach(item => {
        switch (item.getType()) {
          case 'content':
            this.contentTemplate = item.template;
            break;
          // TODO: new template types may be added.
          default:
            this.contentTemplate = item.template;
            break;
        }
      });
    }
    show(overlay, isFocus = false) {
      this.onVisibleChange(true);
      this.handleEvents('onShow', {
        overlay: overlay || this.overlayEl,
        target: this.targetEl,
        mode: this.overlayMode
      });
      isFocus && primeng_dom__WEBPACK_IMPORTED_MODULE_6__.DomHandler.focus(this.targetEl);
      this.modal && primeng_dom__WEBPACK_IMPORTED_MODULE_6__.DomHandler.addClass(this.document?.body, 'p-overflow-hidden');
    }
    hide(overlay, isFocus = false) {
      if (!this.visible) {
        return;
      } else {
        this.onVisibleChange(false);
        this.handleEvents('onHide', {
          overlay: overlay || this.overlayEl,
          target: this.targetEl,
          mode: this.overlayMode
        });
        isFocus && primeng_dom__WEBPACK_IMPORTED_MODULE_6__.DomHandler.focus(this.targetEl);
        this.modal && primeng_dom__WEBPACK_IMPORTED_MODULE_6__.DomHandler.removeClass(this.document?.body, 'p-overflow-hidden');
      }
    }
    alignOverlay() {
      !this.modal && primeng_dom__WEBPACK_IMPORTED_MODULE_6__.DomHandler.alignOverlay(this.overlayEl, this.targetEl, this.appendTo);
    }
    onVisibleChange(visible) {
      this._visible = visible;
      this.visibleChange.emit(visible);
    }
    onOverlayClick() {
      this.isOverlayClicked = true;
    }
    onOverlayContentClick(event) {
      this.overlayService.add({
        originalEvent: event,
        target: this.targetEl
      });
      this.isOverlayContentClicked = true;
    }
    onOverlayContentAnimationStart(event) {
      switch (event.toState) {
        case 'visible':
          this.handleEvents('onBeforeShow', {
            overlay: this.overlayEl,
            target: this.targetEl,
            mode: this.overlayMode
          });
          if (this.autoZIndex) {
            primeng_utils__WEBPACK_IMPORTED_MODULE_4__.ZIndexUtils.set(this.overlayMode, this.overlayEl, this.baseZIndex + this.config?.zIndex[this.overlayMode]);
          }
          primeng_dom__WEBPACK_IMPORTED_MODULE_6__.DomHandler.appendOverlay(this.overlayEl, this.appendTo === 'body' ? this.document.body : this.appendTo, this.appendTo);
          this.alignOverlay();
          break;
        case 'void':
          this.handleEvents('onBeforeHide', {
            overlay: this.overlayEl,
            target: this.targetEl,
            mode: this.overlayMode
          });
          this.modal && primeng_dom__WEBPACK_IMPORTED_MODULE_6__.DomHandler.addClass(this.overlayEl, 'p-component-overlay-leave');
          break;
      }
      this.handleEvents('onAnimationStart', event);
    }
    onOverlayContentAnimationDone(event) {
      const container = this.overlayEl || event.element.parentElement;
      switch (event.toState) {
        case 'visible':
          this.show(container, true);
          this.bindListeners();
          break;
        case 'void':
          this.hide(container, true);
          this.unbindListeners();
          primeng_dom__WEBPACK_IMPORTED_MODULE_6__.DomHandler.appendOverlay(this.overlayEl, this.targetEl, this.appendTo);
          primeng_utils__WEBPACK_IMPORTED_MODULE_4__.ZIndexUtils.clear(container);
          this.modalVisible = false;
          this.cd.markForCheck();
          break;
      }
      this.handleEvents('onAnimationDone', event);
    }
    handleEvents(name, params) {
      this[name].emit(params);
      this.options && this.options[name] && this.options[name](params);
      this.config?.overlayOptions && (this.config?.overlayOptions)[name] && (this.config?.overlayOptions)[name](params);
    }
    bindListeners() {
      this.bindScrollListener();
      this.bindDocumentClickListener();
      this.bindDocumentResizeListener();
      this.bindDocumentKeyboardListener();
    }
    unbindListeners() {
      this.unbindScrollListener();
      this.unbindDocumentClickListener();
      this.unbindDocumentResizeListener();
      this.unbindDocumentKeyboardListener();
    }
    bindScrollListener() {
      if (!this.scrollHandler) {
        this.scrollHandler = new primeng_dom__WEBPACK_IMPORTED_MODULE_6__.ConnectedOverlayScrollHandler(this.targetEl, event => {
          const valid = this.listener ? this.listener(event, {
            type: 'scroll',
            mode: this.overlayMode,
            valid: true
          }) : true;
          valid && this.hide(event, true);
        });
      }
      this.scrollHandler.bindScrollListener();
    }
    unbindScrollListener() {
      if (this.scrollHandler) {
        this.scrollHandler.unbindScrollListener();
      }
    }
    bindDocumentClickListener() {
      if (!this.documentClickListener) {
        this.documentClickListener = this.renderer.listen(this.document, 'click', event => {
          const isTargetClicked = this.targetEl && (this.targetEl.isSameNode(event.target) || !this.isOverlayClicked && this.targetEl.contains(event.target));
          const isOutsideClicked = !isTargetClicked && !this.isOverlayContentClicked;
          const valid = this.listener ? this.listener(event, {
            type: 'outside',
            mode: this.overlayMode,
            valid: event.which !== 3 && isOutsideClicked
          }) : isOutsideClicked;
          valid && this.hide(event);
          this.isOverlayClicked = this.isOverlayContentClicked = false;
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
      if (!this.documentResizeListener) {
        this.documentResizeListener = this.renderer.listen(this.window, 'resize', event => {
          const valid = this.listener ? this.listener(event, {
            type: 'resize',
            mode: this.overlayMode,
            valid: !primeng_dom__WEBPACK_IMPORTED_MODULE_6__.DomHandler.isTouchDevice()
          }) : !primeng_dom__WEBPACK_IMPORTED_MODULE_6__.DomHandler.isTouchDevice();
          valid && this.hide(event, true);
        });
      }
    }
    unbindDocumentResizeListener() {
      if (this.documentResizeListener) {
        this.documentResizeListener();
        this.documentResizeListener = null;
      }
    }
    bindDocumentKeyboardListener() {
      if (this.documentKeyboardListener) {
        return;
      }
      this.zone.runOutsideAngular(() => {
        this.documentKeyboardListener = this.renderer.listen(this.window, 'keydown', event => {
          if (this.overlayOptions.hideOnEscape === false || event.code !== 'Escape') {
            return;
          }
          const valid = this.listener ? this.listener(event, {
            type: 'keydown',
            mode: this.overlayMode,
            valid: !primeng_dom__WEBPACK_IMPORTED_MODULE_6__.DomHandler.isTouchDevice()
          }) : !primeng_dom__WEBPACK_IMPORTED_MODULE_6__.DomHandler.isTouchDevice();
          if (valid) {
            this.zone.run(() => {
              this.hide(event, true);
            });
          }
        });
      });
    }
    unbindDocumentKeyboardListener() {
      if (this.documentKeyboardListener) {
        this.documentKeyboardListener();
        this.documentKeyboardListener = null;
      }
    }
    ngOnDestroy() {
      this.hide(this.overlayEl, true);
      if (this.overlayEl) {
        primeng_dom__WEBPACK_IMPORTED_MODULE_6__.DomHandler.appendOverlay(this.overlayEl, this.targetEl, this.appendTo);
        primeng_utils__WEBPACK_IMPORTED_MODULE_4__.ZIndexUtils.clear(this.overlayEl);
      }
      if (this.scrollHandler) {
        this.scrollHandler.destroy();
        this.scrollHandler = null;
      }
      this.unbindListeners();
    }
  }
  (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Overlay, "\u0275fac", function Overlay_Factory(t) {
    return new (t || Overlay)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_7__.PrimeNGConfig), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_7__.OverlayService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone));
  });
  (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Overlay, "\u0275cmp", /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: Overlay,
    selectors: [["p-overlay"]],
    contentQueries: function Overlay_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_7__.PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.templates = _t);
      }
    },
    viewQuery: function Overlay_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.overlayViewChild = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.contentViewChild = _t.first);
      }
    },
    hostAttrs: [1, "p-element"],
    inputs: {
      visible: "visible",
      mode: "mode",
      style: "style",
      styleClass: "styleClass",
      contentStyle: "contentStyle",
      contentStyleClass: "contentStyleClass",
      target: "target",
      appendTo: "appendTo",
      autoZIndex: "autoZIndex",
      baseZIndex: "baseZIndex",
      showTransitionOptions: "showTransitionOptions",
      hideTransitionOptions: "hideTransitionOptions",
      listener: "listener",
      responsive: "responsive",
      options: "options"
    },
    outputs: {
      visibleChange: "visibleChange",
      onBeforeShow: "onBeforeShow",
      onShow: "onShow",
      onBeforeHide: "onBeforeHide",
      onHide: "onHide",
      onAnimationStart: "onAnimationStart",
      onAnimationDone: "onAnimationDone"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([OVERLAY_VALUE_ACCESSOR])],
    ngContentSelectors: _c7,
    decls: 1,
    vars: 1,
    consts: [[3, "ngStyle", "class", "ngClass", "click", 4, "ngIf"], [3, "ngStyle", "ngClass", "click"], ["overlay", ""], ["content", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
    template: function Overlay_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, Overlay_div_0_Template, 3, 20, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.modalVisible);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgStyle],
    styles: ["@layer primeng{.p-overlay{position:absolute;top:0;left:0}.p-overlay-modal{display:flex;align-items:center;justify-content:center;position:fixed;top:0;left:0;width:100%;height:100%}.p-overlay-content{transform-origin:inherit}.p-overlay-modal>.p-overlay-content{z-index:1;width:90%}.p-overlay-top{align-items:flex-start}.p-overlay-top-start{align-items:flex-start;justify-content:flex-start}.p-overlay-top-end{align-items:flex-start;justify-content:flex-end}.p-overlay-bottom{align-items:flex-end}.p-overlay-bottom-start{align-items:flex-end;justify-content:flex-start}.p-overlay-bottom-end{align-items:flex-end;justify-content:flex-end}.p-overlay-left{justify-content:flex-start}.p-overlay-left-start{justify-content:flex-start;align-items:flex-start}.p-overlay-left-end{justify-content:flex-start;align-items:flex-end}.p-overlay-right{justify-content:flex-end}.p-overlay-right-start{justify-content:flex-end;align-items:flex-start}.p-overlay-right-end{justify-content:flex-end;align-items:flex-end}}\n"],
    encapsulation: 2,
    data: {
      animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.trigger)('overlayContentAnimation', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.useAnimation)(showOverlayContentAnimation)]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.transition)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.useAnimation)(hideOverlayContentAnimation)])])]
    },
    changeDetection: 0
  }));
  return Overlay;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let OverlayModule = /*#__PURE__*/(() => {
  class OverlayModule {}
  (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(OverlayModule, "\u0275fac", function OverlayModule_Factory(t) {
    return new (t || OverlayModule)();
  });
  (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(OverlayModule, "\u0275mod", /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: OverlayModule
  }));
  (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(OverlayModule, "\u0275inj", /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, primeng_api__WEBPACK_IMPORTED_MODULE_7__.SharedModule, primeng_api__WEBPACK_IMPORTED_MODULE_7__.SharedModule]
  }));
  return OverlayModule;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 6110:
/*!*********************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-panel.mjs ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Panel: () => (/* binding */ Panel),
/* harmony export */   PanelModule: () => (/* binding */ PanelModule)
/* harmony export */ });
/* harmony import */ var C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/animations */ 2501);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ 8026);
/* harmony import */ var primeng_icons_minus__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/icons/minus */ 8859);
/* harmony import */ var primeng_icons_plus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/icons/plus */ 7186);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/ripple */ 1339);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/utils */ 5861);













/**
 * Panel is a container with the optional content toggle feature.
 * @group Components
 */
function Panel_div_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("id", ctx_r3.id + "_header");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.header);
  }
}
function Panel_div_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
function Panel_div_1_5_ng_template_0_Template(rf, ctx) {}
function Panel_div_1_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, Panel_div_1_5_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Panel_div_1_button_6_ng_container_1_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 16);
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r12.expandIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r12.iconClass);
  }
}
function Panel_div_1_button_6_ng_container_1_ng_container_1_MinusIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "MinusIcon", 17);
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("styleClass", ctx_r13.iconClass);
  }
}
function Panel_div_1_button_6_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, Panel_div_1_button_6_ng_container_1_ng_container_1_span_1_Template, 1, 3, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, Panel_div_1_button_6_ng_container_1_ng_container_1_MinusIcon_2_Template, 1, 1, "MinusIcon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r10.expandIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r10.expandIcon);
  }
}
function Panel_div_1_button_6_ng_container_1_ng_container_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 16);
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r14.collapseIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r14.iconClass);
  }
}
function Panel_div_1_button_6_ng_container_1_ng_container_2_PlusIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "PlusIcon", 17);
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("styleClass", ctx_r15.iconClass);
  }
}
function Panel_div_1_button_6_ng_container_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, Panel_div_1_button_6_ng_container_1_ng_container_2_span_1_Template, 1, 3, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, Panel_div_1_button_6_ng_container_1_ng_container_2_PlusIcon_2_Template, 1, 1, "PlusIcon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r11.collapseIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r11.collapseIcon);
  }
}
function Panel_div_1_button_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, Panel_div_1_button_6_ng_container_1_ng_container_1_Template, 3, 2, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, Panel_div_1_button_6_ng_container_1_ng_container_2_Template, 3, 2, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r8.collapsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.collapsed);
  }
}
function Panel_div_1_button_6_2_ng_template_0_Template(rf, ctx) {}
function Panel_div_1_button_6_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, Panel_div_1_button_6_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
const _c0 = function (a0) {
  return {
    $implicit: a0
  };
};
function Panel_div_1_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function Panel_div_1_button_6_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r17.onIconClick($event));
    })("keydown", function Panel_div_1_button_6_Template_button_keydown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r19.onKeyDown($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, Panel_div_1_button_6_ng_container_1_Template, 3, 2, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, Panel_div_1_button_6_2_Template, 1, 0, null, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("id", ctx_r6.id + "_header")("aria-label", ctx_r6.buttonAriaLabel)("aria-controls", ctx_r6.id + "_content")("aria-expanded", !ctx_r6.collapsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r6.headerIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r6.headerIconTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c0, ctx_r6.collapsed));
  }
}
const _c1 = function (a0, a1, a2) {
  return {
    "p-panel-icons-start": a0,
    "p-panel-icons-end": a1,
    "p-panel-icons-center": a2
  };
};
function Panel_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function Panel_div_1_Template_div_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r20.onHeaderClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, Panel_div_1_span_1_Template, 2, 2, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](2, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, Panel_div_1_ng_container_3_Template, 1, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, Panel_div_1_5_Template, 1, 0, null, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, Panel_div_1_button_6_Template, 3, 9, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("id", ctx_r0.id + "-titlebar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.header);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.headerTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](6, _c1, ctx_r0.iconPos === "start", ctx_r0.iconPos === "end", ctx_r0.iconPos === "center"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.iconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.toggleable);
  }
}
function Panel_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
function Panel_div_6_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
function Panel_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, Panel_div_6_ng_container_2_Template, 1, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.footerTemplate);
  }
}
const _c2 = ["*", [["p-header"]], [["p-footer"]]];
const _c3 = function (a1, a2) {
  return {
    "p-panel p-component": true,
    "p-panel-toggleable": a1,
    "p-panel-expanded": a2
  };
};
const _c4 = function (a0) {
  return {
    transitionParams: a0,
    height: "0",
    opacity: "0"
  };
};
const _c5 = function (a1) {
  return {
    value: "hidden",
    params: a1
  };
};
const _c6 = function (a0) {
  return {
    transitionParams: a0,
    height: "*",
    opacity: "1"
  };
};
const _c7 = function (a1) {
  return {
    value: "visible",
    params: a1
  };
};
const _c8 = ["*", "p-header", "p-footer"];
let Panel = /*#__PURE__*/(() => {
  class Panel {
    get id() {
      return (0,primeng_utils__WEBPACK_IMPORTED_MODULE_2__.UniqueComponentId)();
    }
    get buttonAriaLabel() {
      return this.header;
    }
    constructor(el) {
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "el", void 0);
      /**
       * Defines if content of panel can be expanded and collapsed.
       * @group Props
       */
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "toggleable", void 0);
      /**
       * Header text of the panel.
       * @group Props
       */
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "header", void 0);
      /**
       * Defines the initial state of panel content, supports one or two-way binding as well.
       * @group Props
       */
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "collapsed", void 0);
      /**
       * Inline style of the component.
       * @group Props
       */
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "style", void 0);
      /**
       * Style class of the component.
       * @group Props
       */
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "styleClass", void 0);
      /**
       * Position of the icons.
       * @group Props
       */
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "iconPos", 'end');
      /**
       * Expand icon of the toggle button.
       * @group Props
       * @deprecated since v15.4.2, use `headericons` template instead.
       */
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "expandIcon", void 0);
      /**
       * Collapse icon of the toggle button.
       * @group Props
       * @deprecated since v15.4.2, use `headericons` template instead.
       */
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "collapseIcon", void 0);
      /**
       * Specifies if header of panel cannot be displayed.
       * @group Props
       * @deprecated since v15.4.2, use `headericons` template instead.
       */
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "showHeader", true);
      /**
       * Specifies the toggler element to toggle the panel content.
       * @group Props
       */
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "toggler", 'icon');
      /**
       * Transition options of the animation.
       * @group Props
       */
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "transitionOptions", '400ms cubic-bezier(0.86, 0, 0.07, 1)');
      /**
       * Emitted when the collapsed changes.
       * @param {boolean} value - New Value.
       * @group Emits
       */
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "collapsedChange", new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter());
      /**
       * Callback to invoke before panel toggle.
       * @param {PanelBeforeToggleEvent} event - Custom panel toggle event
       * @group Emits
       */
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onBeforeToggle", new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter());
      /**
       * Callback to invoke after panel toggle.
       * @param {PanelAfterToggleEvent} event - Custom panel toggle event
       * @group Emits
       */
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onAfterToggle", new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter());
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "footerFacet", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "templates", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "iconTemplate", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "animating", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "headerTemplate", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "contentTemplate", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "footerTemplate", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "headerIconTemplate", void 0);
      this.el = el;
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
          case 'footer':
            this.footerTemplate = item.template;
            break;
          case 'icons':
            this.iconTemplate = item.template;
            break;
          case 'headericons':
            this.headerIconTemplate = item.template;
            break;
          default:
            this.contentTemplate = item.template;
            break;
        }
      });
    }
    onHeaderClick(event) {
      if (this.toggler === 'header') {
        this.toggle(event);
      }
    }
    onIconClick(event) {
      if (this.toggler === 'icon') {
        this.toggle(event);
      }
    }
    toggle(event) {
      if (this.animating) {
        return false;
      }
      this.animating = true;
      this.onBeforeToggle.emit({
        originalEvent: event,
        collapsed: this.collapsed
      });
      if (this.toggleable) {
        if (this.collapsed) this.expand();else this.collapse();
      }
      event.preventDefault();
    }
    expand() {
      this.collapsed = false;
      this.collapsedChange.emit(this.collapsed);
    }
    collapse() {
      this.collapsed = true;
      this.collapsedChange.emit(this.collapsed);
    }
    getBlockableElement() {
      return this.el.nativeElement.children[0];
    }
    onKeyDown(event) {
      if (event.code === 'Enter' || event.code === 'Space') {
        this.toggle(event);
        event.preventDefault();
      }
    }
    onToggleDone(event) {
      this.animating = false;
      this.onAfterToggle.emit({
        originalEvent: event,
        collapsed: this.collapsed
      });
    }
  }
  (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Panel, "\u0275fac", function Panel_Factory(t) {
    return new (t || Panel)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef));
  });
  (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Panel, "\u0275cmp", /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: Panel,
    selectors: [["p-panel"]],
    contentQueries: function Panel_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_3__.Footer, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_3__.PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.footerFacet = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.templates = _t);
      }
    },
    hostAttrs: [1, "p-element"],
    inputs: {
      toggleable: "toggleable",
      header: "header",
      collapsed: "collapsed",
      style: "style",
      styleClass: "styleClass",
      iconPos: "iconPos",
      expandIcon: "expandIcon",
      collapseIcon: "collapseIcon",
      showHeader: "showHeader",
      toggler: "toggler",
      transitionOptions: "transitionOptions"
    },
    outputs: {
      collapsedChange: "collapsedChange",
      onBeforeToggle: "onBeforeToggle",
      onAfterToggle: "onAfterToggle"
    },
    ngContentSelectors: _c8,
    decls: 7,
    vars: 25,
    consts: [[3, "ngClass", "ngStyle"], ["class", "p-panel-header", 3, "click", 4, "ngIf"], ["role", "region", 1, "p-toggleable-content", 3, "id"], [1, "p-panel-content"], [4, "ngTemplateOutlet"], ["class", "p-panel-footer", 4, "ngIf"], [1, "p-panel-header", 3, "click"], ["class", "p-panel-title", 4, "ngIf"], [1, "p-panel-icons", 3, "ngClass"], ["pRipple", "", "type", "button", "role", "button", "class", "p-panel-header-icon p-panel-toggler p-link", 3, "click", "keydown", 4, "ngIf"], [1, "p-panel-title"], ["pRipple", "", "type", "button", "role", "button", 1, "p-panel-header-icon", "p-panel-toggler", "p-link", 3, "click", "keydown"], [4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "class", "ngClass", 4, "ngIf"], [3, "styleClass", 4, "ngIf"], [3, "ngClass"], [3, "styleClass"], [1, "p-panel-footer"]],
    template: function Panel_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"](_c2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, Panel_div_1_Template, 7, 10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("@panelContent.done", function Panel_Template_div_animation_panelContent_done_2_listener($event) {
          return ctx.onToggleDone($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, Panel_ng_container_5_Template, 1, 0, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, Panel_div_6_Template, 3, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.styleClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](14, _c3, ctx.toggleable, !ctx.collapsed && ctx.toggleable))("ngStyle", ctx.style);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("id", ctx.id)("data-pc-name", "panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showHeader);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", ctx.id + "_content")("@panelContent", ctx.collapsed ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](19, _c5, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](17, _c4, ctx.animating ? ctx.transitionOptions : "0ms")) : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](23, _c7, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](21, _c6, ctx.animating ? ctx.transitionOptions : "0ms")));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-labelledby", ctx.id + "_header")("aria-hidden", ctx.collapsed)("tabindex", ctx.collapsed ? "-1" : undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx.contentTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.footerFacet || ctx.footerTemplate);
      }
    },
    dependencies: function () {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle, primeng_ripple__WEBPACK_IMPORTED_MODULE_5__.Ripple, primeng_icons_plus__WEBPACK_IMPORTED_MODULE_6__.PlusIcon, primeng_icons_minus__WEBPACK_IMPORTED_MODULE_7__.MinusIcon];
    },
    styles: ["@layer primeng{.p-panel-header{display:flex;align-items:center}.p-panel-title{line-height:1;order:1}.p-panel-header-icon{display:inline-flex;justify-content:center;align-items:center;cursor:pointer;text-decoration:none;overflow:hidden;position:relative}.p-panel-toggleable.p-panel-expanded>.p-toggleable-content:not(.ng-animating){overflow:visible}.p-panel-toggleable .p-toggleable-content{overflow:hidden}}\n"],
    encapsulation: 2,
    data: {
      animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.trigger)('panelContent', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.state)('hidden', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
        height: '0'
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.state)('void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
        height: '{{height}}'
      }), {
        params: {
          height: '0'
        }
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.state)('visible', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
        height: '*'
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.transition)('visible <=> hidden', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)('{{transitionParams}}')]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.transition)('void => hidden', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)('{{transitionParams}}')), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.transition)('void => visible', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)('{{transitionParams}}'))])]
    },
    changeDetection: 0
  }));
  return Panel;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let PanelModule = /*#__PURE__*/(() => {
  class PanelModule {}
  (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(PanelModule, "\u0275fac", function PanelModule_Factory(t) {
    return new (t || PanelModule)();
  });
  (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(PanelModule, "\u0275mod", /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: PanelModule
  }));
  (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(PanelModule, "\u0275inj", /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, primeng_api__WEBPACK_IMPORTED_MODULE_3__.SharedModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_5__.RippleModule, primeng_icons_plus__WEBPACK_IMPORTED_MODULE_6__.PlusIcon, primeng_icons_minus__WEBPACK_IMPORTED_MODULE_7__.MinusIcon, primeng_api__WEBPACK_IMPORTED_MODULE_3__.SharedModule]
  }));
  return PanelModule;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 1422:
/*!************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-scroller.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Scroller: () => (/* binding */ Scroller),
/* harmony export */   ScrollerModule: () => (/* binding */ ScrollerModule)
/* harmony export */ });
/* harmony import */ var C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ 8026);
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/dom */ 4946);
/* harmony import */ var primeng_icons_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/icons/spinner */ 9184);









/**
 * Scroller is a performance-approach to handle huge data efficiently.
 * @group Components
 */
const _c0 = ["element"];
const _c1 = ["content"];
function Scroller_ng_container_0_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
const _c2 = function (a0, a1) {
  return {
    $implicit: a0,
    options: a1
  };
};
function Scroller_ng_container_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, Scroller_ng_container_0_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r4.contentTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](2, _c2, ctx_r4.loadedItems, ctx_r4.getContentOptions()));
  }
}
function Scroller_ng_container_0_ng_template_4_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
function Scroller_ng_container_0_ng_template_4_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, Scroller_ng_container_0_ng_template_4_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r12 = ctx.$implicit;
    const index_r13 = ctx.index;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r11.itemTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](2, _c2, item_r12, ctx_r11.getOptions(index_r13)));
  }
}
const _c3 = function (a0) {
  return {
    "p-scroller-loading": a0
  };
};
function Scroller_ng_container_0_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, Scroller_ng_container_0_ng_template_4_ng_container_2_Template, 2, 5, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c3, ctx_r6.d_loading))("ngStyle", ctx_r6.contentStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-pc-section", "content");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r6.loadedItems)("ngForTrackBy", ctx_r6._trackBy || ctx_r6.index);
  }
}
function Scroller_ng_container_0_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 11);
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx_r7.spacerStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-pc-section", "spacer");
  }
}
function Scroller_ng_container_0_div_7_ng_container_1_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
const _c4 = function (a0) {
  return {
    numCols: a0
  };
};
const _c5 = function (a0) {
  return {
    options: a0
  };
};
function Scroller_ng_container_0_div_7_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, Scroller_ng_container_0_div_7_ng_container_1_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const index_r20 = ctx.index;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r18.loaderTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c5, ctx_r18.getLoaderOptions(index_r20, ctx_r18.both && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c4, ctx_r18._numItemsInViewport.cols))));
  }
}
function Scroller_ng_container_0_div_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, Scroller_ng_container_0_div_7_ng_container_1_ng_container_1_Template, 2, 6, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r15.loaderArr);
  }
}
function Scroller_ng_container_0_div_7_ng_template_2_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
const _c6 = function () {
  return {
    styleClass: "p-scroller-loading-icon"
  };
};
function Scroller_ng_container_0_div_7_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, Scroller_ng_container_0_div_7_ng_template_2_ng_container_0_ng_container_1_Template, 1, 0, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r22.loaderIconTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c5, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c6)));
  }
}
function Scroller_ng_container_0_div_7_ng_template_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "SpinnerIcon", 16);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("styleClass", "p-scroller-loading-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-pc-section", "loadingIcon");
  }
}
function Scroller_ng_container_0_div_7_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, Scroller_ng_container_0_div_7_ng_template_2_ng_container_0_Template, 2, 5, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, Scroller_ng_container_0_div_7_ng_template_2_ng_template_1_Template, 1, 2, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
  }
  if (rf & 2) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r17.loaderIconTemplate)("ngIfElse", _r23);
  }
}
const _c7 = function (a0) {
  return {
    "p-component-overlay": a0
  };
};
function Scroller_ng_container_0_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, Scroller_ng_container_0_div_7_ng_container_1_Template, 2, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, Scroller_ng_container_0_div_7_ng_template_2_Template, 3, 2, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c7, !ctx_r8.loaderTemplate));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-pc-section", "loader");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.loaderTemplate)("ngIfElse", _r16);
  }
}
const _c8 = function (a1, a2, a3) {
  return {
    "p-scroller": true,
    "p-scroller-inline": a1,
    "p-both-scroll": a2,
    "p-horizontal-scroll": a3
  };
};
function Scroller_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 2, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scroll", function Scroller_ng_container_0_Template_div_scroll_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r26.onContainerScroll($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, Scroller_ng_container_0_ng_container_3_Template, 2, 5, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, Scroller_ng_container_0_ng_template_4_Template, 3, 7, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, Scroller_ng_container_0_div_6_Template, 1, 2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, Scroller_ng_container_0_div_7_Template, 4, 6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r0._styleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx_r0._style)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](12, _c8, ctx_r0.inline, ctx_r0.both, ctx_r0.horizontal));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("id", ctx_r0._id)("tabindex", ctx_r0.tabindex)("data-pc-name", "scroller")("data-pc-section", "root");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.contentTemplate)("ngIfElse", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0._showSpacer);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.loaderDisabled && ctx_r0._showLoader && ctx_r0.d_loading);
  }
}
function Scroller_ng_template_1_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
const _c9 = function (a0, a1) {
  return {
    rows: a0,
    columns: a1
  };
};
function Scroller_ng_template_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, Scroller_ng_template_1_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r28.contentTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](5, _c2, ctx_r28.items, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](2, _c9, ctx_r28._items, ctx_r28.loadedColumns)));
  }
}
function Scroller_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, Scroller_ng_template_1_ng_container_1_Template, 2, 8, "ng-container", 17);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.contentTemplate);
  }
}
const _c10 = ["*"];
let Scroller = /*#__PURE__*/(() => {
  class Scroller {
    /**
     * Unique identifier of the element.
     * @group Props
     */
    get id() {
      return this._id;
    }
    set id(val) {
      this._id = val;
    }
    /**
     * Inline style of the component.
     * @group Props
     */
    get style() {
      return this._style;
    }
    set style(val) {
      this._style = val;
    }
    /**
     * Style class of the element.
     * @group Props
     */
    get styleClass() {
      return this._styleClass;
    }
    set styleClass(val) {
      this._styleClass = val;
    }
    /**
     * Index of the element in tabbing order.
     * @group Props
     */
    get tabindex() {
      return this._tabindex;
    }
    set tabindex(val) {
      this._tabindex = val;
    }
    /**
     * An array of objects to display.
     * @group Props
     */
    get items() {
      return this._items;
    }
    set items(val) {
      this._items = val;
    }
    /**
     * The height/width of item according to orientation.
     * @group Props
     */
    get itemSize() {
      return this._itemSize;
    }
    set itemSize(val) {
      this._itemSize = val;
    }
    /**
     * Height of the scroll viewport.
     * @group Props
     */
    get scrollHeight() {
      return this._scrollHeight;
    }
    set scrollHeight(val) {
      this._scrollHeight = val;
    }
    /**
     * Width of the scroll viewport.
     * @group Props
     */
    get scrollWidth() {
      return this._scrollWidth;
    }
    set scrollWidth(val) {
      this._scrollWidth = val;
    }
    /**
     * The orientation of scrollbar.
     * @group Props
     */
    get orientation() {
      return this._orientation;
    }
    set orientation(val) {
      this._orientation = val;
    }
    /**
     * Used to specify how many items to load in each load method in lazy mode.
     * @group Props
     */
    get step() {
      return this._step;
    }
    set step(val) {
      this._step = val;
    }
    /**
     * Delay in scroll before new data is loaded.
     * @group Props
     */
    get delay() {
      return this._delay;
    }
    set delay(val) {
      this._delay = val;
    }
    /**
     * Delay after window's resize finishes.
     * @group Props
     */
    get resizeDelay() {
      return this._resizeDelay;
    }
    set resizeDelay(val) {
      this._resizeDelay = val;
    }
    /**
     * Used to append each loaded item to top without removing any items from the DOM. Using very large data may cause the browser to crash.
     * @group Props
     */
    get appendOnly() {
      return this._appendOnly;
    }
    set appendOnly(val) {
      this._appendOnly = val;
    }
    /**
     * Specifies whether the scroller should be displayed inline or not.
     * @group Props
     */
    get inline() {
      return this._inline;
    }
    set inline(val) {
      this._inline = val;
    }
    /**
     * Defines if data is loaded and interacted with in lazy manner.
     * @group Props
     */
    get lazy() {
      return this._lazy;
    }
    set lazy(val) {
      this._lazy = val;
    }
    /**
     * If disabled, the scroller feature is eliminated and the content is displayed directly.
     * @group Props
     */
    get disabled() {
      return this._disabled;
    }
    set disabled(val) {
      this._disabled = val;
    }
    /**
     * Used to implement a custom loader instead of using the loader feature in the scroller.
     * @group Props
     */
    get loaderDisabled() {
      return this._loaderDisabled;
    }
    set loaderDisabled(val) {
      this._loaderDisabled = val;
    }
    /**
     * Columns to display.
     * @group Props
     */
    get columns() {
      return this._columns;
    }
    set columns(val) {
      this._columns = val;
    }
    /**
     * Used to implement a custom spacer instead of using the spacer feature in the scroller.
     * @group Props
     */
    get showSpacer() {
      return this._showSpacer;
    }
    set showSpacer(val) {
      this._showSpacer = val;
    }
    /**
     * Defines whether to show loader.
     * @group Props
     */
    get showLoader() {
      return this._showLoader;
    }
    set showLoader(val) {
      this._showLoader = val;
    }
    /**
     * Determines how many additional elements to add to the DOM outside of the view. According to the scrolls made up and down, extra items are added in a certain algorithm in the form of multiples of this number. Default value is half the number of items shown in the view.
     * @group Props
     */
    get numToleratedItems() {
      return this._numToleratedItems;
    }
    set numToleratedItems(val) {
      this._numToleratedItems = val;
    }
    /**
     * Defines whether the data is loaded.
     * @group Props
     */
    get loading() {
      return this._loading;
    }
    set loading(val) {
      this._loading = val;
    }
    /**
     * Defines whether to dynamically change the height or width of scrollable container.
     * @group Props
     */
    get autoSize() {
      return this._autoSize;
    }
    set autoSize(val) {
      this._autoSize = val;
    }
    /**
     * Function to optimize the dom operations by delegating to ngForTrackBy, default algoritm checks for object identity.
     * @group Props
     */
    get trackBy() {
      return this._trackBy;
    }
    set trackBy(val) {
      this._trackBy = val;
    }
    /**
     * Defines whether to use the scroller feature. The properties of scroller component can be used like an object in it.
     * @group Props
     */
    get options() {
      return this._options;
    }
    set options(val) {
      this._options = val;
      if (val && typeof val === 'object') {
        //@ts-ignore
        Object.entries(val).forEach(([k, v]) => this[`_${k}`] !== v && (this[`_${k}`] = v));
      }
    }
    /**
     * Callback to invoke in lazy mode to load new data.
     * @param {ScrollerLazyLoadEvent} event - Custom lazy load event.
     * @group Emits
     */

    get vertical() {
      return this._orientation === 'vertical';
    }
    get horizontal() {
      return this._orientation === 'horizontal';
    }
    get both() {
      return this._orientation === 'both';
    }
    get loadedItems() {
      if (this._items && !this.d_loading) {
        if (this.both) return this._items.slice(this._appendOnly ? 0 : this.first.rows, this.last.rows).map(item => this._columns ? item : item.slice(this._appendOnly ? 0 : this.first.cols, this.last.cols));else if (this.horizontal && this._columns) return this._items;else return this._items.slice(this._appendOnly ? 0 : this.first, this.last);
      }
      return [];
    }
    get loadedRows() {
      return this.d_loading ? this._loaderDisabled ? this.loaderArr : [] : this.loadedItems;
    }
    get loadedColumns() {
      if (this._columns && (this.both || this.horizontal)) {
        return this.d_loading && this._loaderDisabled ? this.both ? this.loaderArr[0] : this.loaderArr : this._columns.slice(this.both ? this.first.cols : this.first, this.both ? this.last.cols : this.last);
      }
      return this._columns;
    }
    get isPageChanged() {
      return this._step ? this.page !== this.getPageByFirst() : true;
    }
    constructor(document, platformId, renderer, cd, zone) {
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "document", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "platformId", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "renderer", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "cd", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "zone", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onLazyLoad", new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter());
      /**
       * Callback to invoke when scroll position changes.
       * @param {ScrollerScrollEvent} event - Custom scroll event.
       * @group Emits
       */
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onScroll", new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter());
      /**
       * Callback to invoke when scroll position and item's range in view changes.
       * @param {ScrollerScrollEvent} event - Custom scroll index change event.
       * @group Emits
       */
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onScrollIndexChange", new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter());
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "elementViewChild", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "contentViewChild", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "templates", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_id", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_style", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_styleClass", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_tabindex", 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_items", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_itemSize", 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_scrollHeight", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_scrollWidth", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_orientation", 'vertical');
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_step", 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_delay", 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_resizeDelay", 10);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_appendOnly", false);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_inline", false);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_lazy", false);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_disabled", false);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_loaderDisabled", false);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_columns", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_showSpacer", true);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_showLoader", false);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_numToleratedItems", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_loading", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_autoSize", false);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_trackBy", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_options", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "d_loading", false);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "d_numToleratedItems", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "contentEl", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "contentTemplate", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "itemTemplate", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "loaderTemplate", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "loaderIconTemplate", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "first", 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "last", 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "page", 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "isRangeChanged", false);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "numItemsInViewport", 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "lastScrollPos", 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "lazyLoadState", {});
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "loaderArr", []);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "spacerStyle", {});
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "contentStyle", {});
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "scrollTimeout", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "resizeTimeout", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "initialized", false);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "windowResizeListener", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "defaultWidth", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "defaultHeight", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "defaultContentWidth", void 0);
      (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "defaultContentHeight", void 0);
      this.document = document;
      this.platformId = platformId;
      this.renderer = renderer;
      this.cd = cd;
      this.zone = zone;
    }
    ngOnInit() {
      this.setInitialState();
    }
    ngOnChanges(simpleChanges) {
      let isLoadingChanged = false;
      if (simpleChanges.loading) {
        const {
          previousValue,
          currentValue
        } = simpleChanges.loading;
        if (this.lazy && previousValue !== currentValue && currentValue !== this.d_loading) {
          this.d_loading = currentValue;
          isLoadingChanged = true;
        }
      }
      if (simpleChanges.orientation) {
        this.lastScrollPos = this.both ? {
          top: 0,
          left: 0
        } : 0;
      }
      if (simpleChanges.numToleratedItems) {
        const {
          previousValue,
          currentValue
        } = simpleChanges.numToleratedItems;
        if (previousValue !== currentValue && currentValue !== this.d_numToleratedItems) {
          this.d_numToleratedItems = currentValue;
        }
      }
      if (simpleChanges.options) {
        const {
          previousValue,
          currentValue
        } = simpleChanges.options;
        if (this.lazy && previousValue?.loading !== currentValue?.loading && currentValue?.loading !== this.d_loading) {
          this.d_loading = currentValue.loading;
          isLoadingChanged = true;
        }
        if (previousValue?.numToleratedItems !== currentValue?.numToleratedItems && currentValue?.numToleratedItems !== this.d_numToleratedItems) {
          this.d_numToleratedItems = currentValue.numToleratedItems;
        }
      }
      if (this.initialized) {
        const isChanged = !isLoadingChanged && (simpleChanges.items?.previousValue?.length !== simpleChanges.items?.currentValue?.length || simpleChanges.itemSize || simpleChanges.scrollHeight || simpleChanges.scrollWidth);
        if (isChanged) {
          this.init();
          this.calculateAutoSize();
        }
      }
    }
    ngAfterContentInit() {
      this.templates.forEach(item => {
        switch (item.getType()) {
          case 'content':
            this.contentTemplate = item.template;
            break;
          case 'item':
            this.itemTemplate = item.template;
            break;
          case 'loader':
            this.loaderTemplate = item.template;
            break;
          case 'loadericon':
            this.loaderIconTemplate = item.template;
            break;
          default:
            this.itemTemplate = item.template;
            break;
        }
      });
    }
    ngAfterViewInit() {
      Promise.resolve().then(() => {
        this.viewInit();
      });
    }
    ngAfterViewChecked() {
      if (!this.initialized) {
        this.viewInit();
      }
    }
    ngOnDestroy() {
      this.unbindResizeListener();
      this.contentEl = null;
      this.initialized = false;
    }
    viewInit() {
      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformBrowser)(this.platformId)) {
        if (primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.isVisible(this.elementViewChild?.nativeElement)) {
          this.setInitialState();
          this.setContentEl(this.contentEl);
          this.init();
          this.defaultWidth = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getWidth(this.elementViewChild?.nativeElement);
          this.defaultHeight = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getHeight(this.elementViewChild?.nativeElement);
          this.defaultContentWidth = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getWidth(this.contentEl);
          this.defaultContentHeight = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getHeight(this.contentEl);
          this.initialized = true;
        }
      }
    }
    init() {
      if (!this._disabled) {
        this.setSize();
        this.calculateOptions();
        this.setSpacerSize();
        this.bindResizeListener();
        this.cd.detectChanges();
      }
    }
    setContentEl(el) {
      this.contentEl = el || this.contentViewChild?.nativeElement || primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.findSingle(this.elementViewChild?.nativeElement, '.p-scroller-content');
    }
    setInitialState() {
      this.first = this.both ? {
        rows: 0,
        cols: 0
      } : 0;
      this.last = this.both ? {
        rows: 0,
        cols: 0
      } : 0;
      this.numItemsInViewport = this.both ? {
        rows: 0,
        cols: 0
      } : 0;
      this.lastScrollPos = this.both ? {
        top: 0,
        left: 0
      } : 0;
      this.d_loading = this._loading || false;
      this.d_numToleratedItems = this._numToleratedItems;
      this.loaderArr = [];
      this.spacerStyle = {};
      this.contentStyle = {};
    }
    getElementRef() {
      return this.elementViewChild;
    }
    getPageByFirst() {
      return Math.floor((this.first + this.d_numToleratedItems * 4) / (this._step || 1));
    }
    scrollTo(options) {
      this.lastScrollPos = this.both ? {
        top: 0,
        left: 0
      } : 0;
      this.elementViewChild?.nativeElement?.scrollTo(options);
    }
    scrollToIndex(index, behavior = 'auto') {
      const {
        numToleratedItems
      } = this.calculateNumItems();
      const contentPos = this.getContentPosition();
      const calculateFirst = (_index = 0, _numT) => _index <= _numT ? 0 : _index;
      const calculateCoord = (_first, _size, _cpos) => _first * _size + _cpos;
      const scrollTo = (left = 0, top = 0) => this.scrollTo({
        left,
        top,
        behavior
      });
      let newFirst = 0;
      if (this.both) {
        newFirst = {
          rows: calculateFirst(index[0], numToleratedItems[0]),
          cols: calculateFirst(index[1], numToleratedItems[1])
        };
        scrollTo(calculateCoord(newFirst.cols, this._itemSize[1], contentPos.left), calculateCoord(newFirst.rows, this._itemSize[0], contentPos.top));
      } else {
        newFirst = calculateFirst(index, numToleratedItems);
        this.horizontal ? scrollTo(calculateCoord(newFirst, this._itemSize, contentPos.left), 0) : scrollTo(0, calculateCoord(newFirst, this._itemSize, contentPos.top));
      }
      this.isRangeChanged = this.first !== newFirst;
      this.first = newFirst;
    }
    scrollInView(index, to, behavior = 'auto') {
      if (to) {
        const {
          first,
          viewport
        } = this.getRenderedRange();
        const scrollTo = (left = 0, top = 0) => this.scrollTo({
          left,
          top,
          behavior
        });
        const isToStart = to === 'to-start';
        const isToEnd = to === 'to-end';
        if (isToStart) {
          if (this.both) {
            if (viewport.first.rows - first.rows > index[0]) {
              scrollTo(viewport.first.cols * this._itemSize[1], (viewport.first.rows - 1) * this._itemSize[0]);
            } else if (viewport.first.cols - first.cols > index[1]) {
              scrollTo((viewport.first.cols - 1) * this._itemSize[1], viewport.first.rows * this._itemSize[0]);
            }
          } else {
            if (viewport.first - first > index) {
              const pos = (viewport.first - 1) * this._itemSize;
              this.horizontal ? scrollTo(pos, 0) : scrollTo(0, pos);
            }
          }
        } else if (isToEnd) {
          if (this.both) {
            if (viewport.last.rows - first.rows <= index[0] + 1) {
              scrollTo(viewport.first.cols * this._itemSize[1], (viewport.first.rows + 1) * this._itemSize[0]);
            } else if (viewport.last.cols - first.cols <= index[1] + 1) {
              scrollTo((viewport.first.cols + 1) * this._itemSize[1], viewport.first.rows * this._itemSize[0]);
            }
          } else {
            if (viewport.last - first <= index + 1) {
              const pos = (viewport.first + 1) * this._itemSize;
              this.horizontal ? scrollTo(pos, 0) : scrollTo(0, pos);
            }
          }
        }
      } else {
        this.scrollToIndex(index, behavior);
      }
    }
    getRenderedRange() {
      const calculateFirstInViewport = (_pos, _size) => Math.floor(_pos / (_size || _pos));
      let firstInViewport = this.first;
      let lastInViewport = 0;
      if (this.elementViewChild?.nativeElement) {
        const {
          scrollTop,
          scrollLeft
        } = this.elementViewChild.nativeElement;
        if (this.both) {
          firstInViewport = {
            rows: calculateFirstInViewport(scrollTop, this._itemSize[0]),
            cols: calculateFirstInViewport(scrollLeft, this._itemSize[1])
          };
          lastInViewport = {
            rows: firstInViewport.rows + this.numItemsInViewport.rows,
            cols: firstInViewport.cols + this.numItemsInViewport.cols
          };
        } else {
          const scrollPos = this.horizontal ? scrollLeft : scrollTop;
          firstInViewport = calculateFirstInViewport(scrollPos, this._itemSize);
          lastInViewport = firstInViewport + this.numItemsInViewport;
        }
      }
      return {
        first: this.first,
        last: this.last,
        viewport: {
          first: firstInViewport,
          last: lastInViewport
        }
      };
    }
    calculateNumItems() {
      const contentPos = this.getContentPosition();
      const contentWidth = (this.elementViewChild?.nativeElement ? this.elementViewChild.nativeElement.offsetWidth - contentPos.left : 0) || 0;
      const contentHeight = (this.elementViewChild?.nativeElement ? this.elementViewChild.nativeElement.offsetHeight - contentPos.top : 0) || 0;
      const calculateNumItemsInViewport = (_contentSize, _itemSize) => Math.ceil(_contentSize / (_itemSize || _contentSize));
      const calculateNumToleratedItems = _numItems => Math.ceil(_numItems / 2);
      const numItemsInViewport = this.both ? {
        rows: calculateNumItemsInViewport(contentHeight, this._itemSize[0]),
        cols: calculateNumItemsInViewport(contentWidth, this._itemSize[1])
      } : calculateNumItemsInViewport(this.horizontal ? contentWidth : contentHeight, this._itemSize);
      const numToleratedItems = this.d_numToleratedItems || (this.both ? [calculateNumToleratedItems(numItemsInViewport.rows), calculateNumToleratedItems(numItemsInViewport.cols)] : calculateNumToleratedItems(numItemsInViewport));
      return {
        numItemsInViewport,
        numToleratedItems
      };
    }
    calculateOptions() {
      const {
        numItemsInViewport,
        numToleratedItems
      } = this.calculateNumItems();
      const calculateLast = (_first, _num, _numT, _isCols = false) => this.getLast(_first + _num + (_first < _numT ? 2 : 3) * _numT, _isCols);
      const first = this.first;
      const last = this.both ? {
        rows: calculateLast(this.first.rows, numItemsInViewport.rows, numToleratedItems[0]),
        cols: calculateLast(this.first.cols, numItemsInViewport.cols, numToleratedItems[1], true)
      } : calculateLast(this.first, numItemsInViewport, numToleratedItems);
      this.last = last;
      this.numItemsInViewport = numItemsInViewport;
      this.d_numToleratedItems = numToleratedItems;
      if (this.showLoader) {
        this.loaderArr = this.both ? Array.from({
          length: numItemsInViewport.rows
        }).map(() => Array.from({
          length: numItemsInViewport.cols
        })) : Array.from({
          length: numItemsInViewport
        });
      }
      if (this._lazy) {
        Promise.resolve().then(() => {
          this.lazyLoadState = {
            first: this._step ? this.both ? {
              rows: 0,
              cols: first.cols
            } : 0 : first,
            last: Math.min(this._step ? this._step : this.last, this.items.length)
          };
          this.handleEvents('onLazyLoad', this.lazyLoadState);
        });
      }
    }
    calculateAutoSize() {
      if (this._autoSize && !this.d_loading) {
        Promise.resolve().then(() => {
          if (this.contentEl) {
            this.contentEl.style.minHeight = this.contentEl.style.minWidth = 'auto';
            this.contentEl.style.position = 'relative';
            this.elementViewChild.nativeElement.style.contain = 'none';
            const [contentWidth, contentHeight] = [primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getWidth(this.contentEl), primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getHeight(this.contentEl)];
            contentWidth !== this.defaultContentWidth && (this.elementViewChild.nativeElement.style.width = '');
            contentHeight !== this.defaultContentHeight && (this.elementViewChild.nativeElement.style.height = '');
            const [width, height] = [primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getWidth(this.elementViewChild.nativeElement), primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getHeight(this.elementViewChild.nativeElement)];
            (this.both || this.horizontal) && (this.elementViewChild.nativeElement.style.width = width < this.defaultWidth ? width + 'px' : this._scrollWidth || this.defaultWidth + 'px');
            (this.both || this.vertical) && (this.elementViewChild.nativeElement.style.height = height < this.defaultHeight ? height + 'px' : this._scrollHeight || this.defaultHeight + 'px');
            this.contentEl.style.minHeight = this.contentEl.style.minWidth = '';
            this.contentEl.style.position = '';
            this.elementViewChild.nativeElement.style.contain = '';
          }
        });
      }
    }
    getLast(last = 0, isCols = false) {
      return this._items ? Math.min(isCols ? (this._columns || this._items[0]).length : this._items.length, last) : 0;
    }
    getContentPosition() {
      if (this.contentEl) {
        const style = getComputedStyle(this.contentEl);
        const left = parseFloat(style.paddingLeft) + Math.max(parseFloat(style.left) || 0, 0);
        const right = parseFloat(style.paddingRight) + Math.max(parseFloat(style.right) || 0, 0);
        const top = parseFloat(style.paddingTop) + Math.max(parseFloat(style.top) || 0, 0);
        const bottom = parseFloat(style.paddingBottom) + Math.max(parseFloat(style.bottom) || 0, 0);
        return {
          left,
          right,
          top,
          bottom,
          x: left + right,
          y: top + bottom
        };
      }
      return {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        x: 0,
        y: 0
      };
    }
    setSize() {
      if (this.elementViewChild?.nativeElement) {
        const parentElement = this.elementViewChild.nativeElement.parentElement.parentElement;
        const width = this._scrollWidth || `${this.elementViewChild.nativeElement.offsetWidth || parentElement.offsetWidth}px`;
        const height = this._scrollHeight || `${this.elementViewChild.nativeElement.offsetHeight || parentElement.offsetHeight}px`;
        const setProp = (_name, _value) => this.elementViewChild.nativeElement.style[_name] = _value;
        if (this.both || this.horizontal) {
          setProp('height', height);
          setProp('width', width);
        } else {
          setProp('height', height);
        }
      }
    }
    setSpacerSize() {
      if (this._items) {
        const contentPos = this.getContentPosition();
        const setProp = (_name, _value, _size, _cpos = 0) => this.spacerStyle = {
          ...this.spacerStyle,
          ...{
            [`${_name}`]: (_value || []).length * _size + _cpos + 'px'
          }
        };
        if (this.both) {
          setProp('height', this._items, this._itemSize[0], contentPos.y);
          setProp('width', this._columns || this._items[1], this._itemSize[1], contentPos.x);
        } else {
          this.horizontal ? setProp('width', this._columns || this._items, this._itemSize, contentPos.x) : setProp('height', this._items, this._itemSize, contentPos.y);
        }
      }
    }
    setContentPosition(pos) {
      if (this.contentEl && !this._appendOnly) {
        const first = pos ? pos.first : this.first;
        const calculateTranslateVal = (_first, _size) => _first * _size;
        const setTransform = (_x = 0, _y = 0) => this.contentStyle = {
          ...this.contentStyle,
          ...{
            transform: `translate3d(${_x}px, ${_y}px, 0)`
          }
        };
        if (this.both) {
          setTransform(calculateTranslateVal(first.cols, this._itemSize[1]), calculateTranslateVal(first.rows, this._itemSize[0]));
        } else {
          const translateVal = calculateTranslateVal(first, this._itemSize);
          this.horizontal ? setTransform(translateVal, 0) : setTransform(0, translateVal);
        }
      }
    }
    onScrollPositionChange(event) {
      const target = event.target;
      const contentPos = this.getContentPosition();
      const calculateScrollPos = (_pos, _cpos) => _pos ? _pos > _cpos ? _pos - _cpos : _pos : 0;
      const calculateCurrentIndex = (_pos, _size) => Math.floor(_pos / (_size || _pos));
      const calculateTriggerIndex = (_currentIndex, _first, _last, _num, _numT, _isScrollDownOrRight) => {
        return _currentIndex <= _numT ? _numT : _isScrollDownOrRight ? _last - _num - _numT : _first + _numT - 1;
      };
      const calculateFirst = (_currentIndex, _triggerIndex, _first, _last, _num, _numT, _isScrollDownOrRight) => {
        if (_currentIndex <= _numT) return 0;else return Math.max(0, _isScrollDownOrRight ? _currentIndex < _triggerIndex ? _first : _currentIndex - _numT : _currentIndex > _triggerIndex ? _first : _currentIndex - 2 * _numT);
      };
      const calculateLast = (_currentIndex, _first, _last, _num, _numT, _isCols = false) => {
        let lastValue = _first + _num + 2 * _numT;
        if (_currentIndex >= _numT) {
          lastValue += _numT + 1;
        }
        return this.getLast(lastValue, _isCols);
      };
      const scrollTop = calculateScrollPos(target.scrollTop, contentPos.top);
      const scrollLeft = calculateScrollPos(target.scrollLeft, contentPos.left);
      let newFirst = this.both ? {
        rows: 0,
        cols: 0
      } : 0;
      let newLast = this.last;
      let isRangeChanged = false;
      let newScrollPos = this.lastScrollPos;
      if (this.both) {
        const isScrollDown = this.lastScrollPos.top <= scrollTop;
        const isScrollRight = this.lastScrollPos.left <= scrollLeft;
        if (!this._appendOnly || this._appendOnly && (isScrollDown || isScrollRight)) {
          const currentIndex = {
            rows: calculateCurrentIndex(scrollTop, this._itemSize[0]),
            cols: calculateCurrentIndex(scrollLeft, this._itemSize[1])
          };
          const triggerIndex = {
            rows: calculateTriggerIndex(currentIndex.rows, this.first.rows, this.last.rows, this.numItemsInViewport.rows, this.d_numToleratedItems[0], isScrollDown),
            cols: calculateTriggerIndex(currentIndex.cols, this.first.cols, this.last.cols, this.numItemsInViewport.cols, this.d_numToleratedItems[1], isScrollRight)
          };
          newFirst = {
            rows: calculateFirst(currentIndex.rows, triggerIndex.rows, this.first.rows, this.last.rows, this.numItemsInViewport.rows, this.d_numToleratedItems[0], isScrollDown),
            cols: calculateFirst(currentIndex.cols, triggerIndex.cols, this.first.cols, this.last.cols, this.numItemsInViewport.cols, this.d_numToleratedItems[1], isScrollRight)
          };
          newLast = {
            rows: calculateLast(currentIndex.rows, newFirst.rows, this.last.rows, this.numItemsInViewport.rows, this.d_numToleratedItems[0]),
            cols: calculateLast(currentIndex.cols, newFirst.cols, this.last.cols, this.numItemsInViewport.cols, this.d_numToleratedItems[1], true)
          };
          isRangeChanged = newFirst.rows !== this.first.rows || newLast.rows !== this.last.rows || newFirst.cols !== this.first.cols || newLast.cols !== this.last.cols || this.isRangeChanged;
          newScrollPos = {
            top: scrollTop,
            left: scrollLeft
          };
        }
      } else {
        const scrollPos = this.horizontal ? scrollLeft : scrollTop;
        const isScrollDownOrRight = this.lastScrollPos <= scrollPos;
        if (!this._appendOnly || this._appendOnly && isScrollDownOrRight) {
          const currentIndex = calculateCurrentIndex(scrollPos, this._itemSize);
          const triggerIndex = calculateTriggerIndex(currentIndex, this.first, this.last, this.numItemsInViewport, this.d_numToleratedItems, isScrollDownOrRight);
          newFirst = calculateFirst(currentIndex, triggerIndex, this.first, this.last, this.numItemsInViewport, this.d_numToleratedItems, isScrollDownOrRight);
          newLast = calculateLast(currentIndex, newFirst, this.last, this.numItemsInViewport, this.d_numToleratedItems);
          isRangeChanged = newFirst !== this.first || newLast !== this.last || this.isRangeChanged;
          newScrollPos = scrollPos;
        }
      }
      return {
        first: newFirst,
        last: newLast,
        isRangeChanged,
        scrollPos: newScrollPos
      };
    }
    onScrollChange(event) {
      const {
        first,
        last,
        isRangeChanged,
        scrollPos
      } = this.onScrollPositionChange(event);
      if (isRangeChanged) {
        const newState = {
          first,
          last
        };
        this.setContentPosition(newState);
        this.first = first;
        this.last = last;
        this.lastScrollPos = scrollPos;
        this.handleEvents('onScrollIndexChange', newState);
        if (this._lazy && this.isPageChanged) {
          const lazyLoadState = {
            first: this._step ? Math.min(this.getPageByFirst() * this._step, this.items.length - this._step) : first,
            last: Math.min(this._step ? (this.getPageByFirst() + 1) * this._step : last, this.items.length)
          };
          const isLazyStateChanged = this.lazyLoadState.first !== lazyLoadState.first || this.lazyLoadState.last !== lazyLoadState.last;
          isLazyStateChanged && this.handleEvents('onLazyLoad', lazyLoadState);
          this.lazyLoadState = lazyLoadState;
        }
      }
    }
    onContainerScroll(event) {
      this.handleEvents('onScroll', {
        originalEvent: event
      });
      if (this._delay && this.isPageChanged) {
        if (this.scrollTimeout) {
          clearTimeout(this.scrollTimeout);
        }
        if (!this.d_loading && this.showLoader) {
          const {
            isRangeChanged
          } = this.onScrollPositionChange(event);
          const changed = isRangeChanged || (this._step ? this.isPageChanged : false);
          if (changed) {
            this.d_loading = true;
            this.cd.detectChanges();
          }
        }
        this.scrollTimeout = setTimeout(() => {
          this.onScrollChange(event);
          if (this.d_loading && this.showLoader && (!this._lazy || this._loading === undefined)) {
            this.d_loading = false;
            this.page = this.getPageByFirst();
            this.cd.detectChanges();
          }
        }, this._delay);
      } else {
        !this.d_loading && this.onScrollChange(event);
      }
    }
    bindResizeListener() {
      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformBrowser)(this.platformId)) {
        if (!this.windowResizeListener) {
          this.zone.runOutsideAngular(() => {
            const window = this.document.defaultView;
            const event = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.isTouchDevice() ? 'orientationchange' : 'resize';
            this.windowResizeListener = this.renderer.listen(window, event, this.onWindowResize.bind(this));
          });
        }
      }
    }
    unbindResizeListener() {
      if (this.windowResizeListener) {
        this.windowResizeListener();
        this.windowResizeListener = null;
      }
    }
    onWindowResize() {
      if (this.resizeTimeout) {
        clearTimeout(this.resizeTimeout);
      }
      this.resizeTimeout = setTimeout(() => {
        if (primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.isVisible(this.elementViewChild?.nativeElement)) {
          const [width, height] = [primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getWidth(this.elementViewChild?.nativeElement), primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getHeight(this.elementViewChild?.nativeElement)];
          const [isDiffWidth, isDiffHeight] = [width !== this.defaultWidth, height !== this.defaultHeight];
          const reinit = this.both ? isDiffWidth || isDiffHeight : this.horizontal ? isDiffWidth : this.vertical ? isDiffHeight : false;
          reinit && this.zone.run(() => {
            this.d_numToleratedItems = this._numToleratedItems;
            this.defaultWidth = width;
            this.defaultHeight = height;
            this.defaultContentWidth = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getWidth(this.contentEl);
            this.defaultContentHeight = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getHeight(this.contentEl);
            this.init();
          });
        }
      }, this._resizeDelay);
    }
    handleEvents(name, params) {
      //@ts-ignore
      return this.options && this.options[name] ? this.options[name](params) : this[name].emit(params);
    }
    getContentOptions() {
      return {
        contentStyleClass: `p-scroller-content ${this.d_loading ? 'p-scroller-loading' : ''}`,
        items: this.loadedItems,
        getItemOptions: index => this.getOptions(index),
        loading: this.d_loading,
        getLoaderOptions: (index, options) => this.getLoaderOptions(index, options),
        itemSize: this._itemSize,
        rows: this.loadedRows,
        columns: this.loadedColumns,
        spacerStyle: this.spacerStyle,
        contentStyle: this.contentStyle,
        vertical: this.vertical,
        horizontal: this.horizontal,
        both: this.both
      };
    }
    getOptions(renderedIndex) {
      const count = (this._items || []).length;
      const index = this.both ? this.first.rows + renderedIndex : this.first + renderedIndex;
      return {
        index,
        count,
        first: index === 0,
        last: index === count - 1,
        even: index % 2 === 0,
        odd: index % 2 !== 0
      };
    }
    getLoaderOptions(index, extOptions) {
      const count = this.loaderArr.length;
      return {
        index,
        count,
        first: index === 0,
        last: index === count - 1,
        even: index % 2 === 0,
        odd: index % 2 !== 0,
        ...extOptions
      };
    }
  }
  (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Scroller, "\u0275fac", function Scroller_Factory(t) {
    return new (t || Scroller)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone));
  });
  (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Scroller, "\u0275cmp", /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: Scroller,
    selectors: [["p-scroller"]],
    contentQueries: function Scroller_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.templates = _t);
      }
    },
    viewQuery: function Scroller_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.elementViewChild = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.contentViewChild = _t.first);
      }
    },
    hostAttrs: [1, "p-scroller-viewport", "p-element"],
    inputs: {
      id: "id",
      style: "style",
      styleClass: "styleClass",
      tabindex: "tabindex",
      items: "items",
      itemSize: "itemSize",
      scrollHeight: "scrollHeight",
      scrollWidth: "scrollWidth",
      orientation: "orientation",
      step: "step",
      delay: "delay",
      resizeDelay: "resizeDelay",
      appendOnly: "appendOnly",
      inline: "inline",
      lazy: "lazy",
      disabled: "disabled",
      loaderDisabled: "loaderDisabled",
      columns: "columns",
      showSpacer: "showSpacer",
      showLoader: "showLoader",
      numToleratedItems: "numToleratedItems",
      loading: "loading",
      autoSize: "autoSize",
      trackBy: "trackBy",
      options: "options"
    },
    outputs: {
      onLazyLoad: "onLazyLoad",
      onScroll: "onScroll",
      onScrollIndexChange: "onScrollIndexChange"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
    ngContentSelectors: _c10,
    decls: 3,
    vars: 2,
    consts: [[4, "ngIf", "ngIfElse"], ["disabledContainer", ""], [3, "ngStyle", "ngClass", "scroll"], ["element", ""], ["buildInContent", ""], ["class", "p-scroller-spacer", 3, "ngStyle", 4, "ngIf"], ["class", "p-scroller-loader", 3, "ngClass", 4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "p-scroller-content", 3, "ngClass", "ngStyle"], ["content", ""], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "p-scroller-spacer", 3, "ngStyle"], [1, "p-scroller-loader", 3, "ngClass"], ["buildInLoader", ""], [4, "ngFor", "ngForOf"], ["buildInLoaderIcon", ""], [3, "styleClass"], [4, "ngIf"]],
    template: function Scroller_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, Scroller_ng_container_0_Template, 8, 16, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, Scroller_ng_template_1_Template, 2, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx._disabled)("ngIfElse", _r1);
      }
    },
    dependencies: function () {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, primeng_icons_spinner__WEBPACK_IMPORTED_MODULE_5__.SpinnerIcon];
    },
    styles: ["@layer primeng{p-scroller{flex:1;outline:0 none}.p-scroller{position:relative;overflow:auto;contain:strict;transform:translateZ(0);will-change:scroll-position;outline:0 none}.p-scroller-content{position:absolute;top:0;left:0;min-height:100%;min-width:100%;will-change:transform}.p-scroller-spacer{position:absolute;top:0;left:0;height:1px;width:1px;transform-origin:0 0;pointer-events:none}.p-scroller-loader{position:sticky;top:0;left:0;width:100%;height:100%}.p-scroller-loader.p-component-overlay{display:flex;align-items:center;justify-content:center}.p-scroller-loading-icon{scale:2}.p-scroller-inline .p-scroller-content{position:static}}\n"],
    encapsulation: 2
  }));
  return Scroller;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let ScrollerModule = /*#__PURE__*/(() => {
  class ScrollerModule {}
  (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ScrollerModule, "\u0275fac", function ScrollerModule_Factory(t) {
    return new (t || ScrollerModule)();
  });
  (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ScrollerModule, "\u0275mod", /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: ScrollerModule
  }));
  (0,C_Tools_GitHub_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ScrollerModule, "\u0275inj", /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, primeng_api__WEBPACK_IMPORTED_MODULE_4__.SharedModule, primeng_icons_spinner__WEBPACK_IMPORTED_MODULE_5__.SpinnerIcon, primeng_api__WEBPACK_IMPORTED_MODULE_4__.SharedModule]
  }));
  return ScrollerModule;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=882.f1ad0acd6d325ca1.js.map