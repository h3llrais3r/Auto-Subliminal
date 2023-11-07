"use strict";
(self["webpackChunkautosubliminal"] = self["webpackChunkautosubliminal"] || []).push([[266],{

/***/ 6477:
/*!*******************************************************************!*\
  !*** ./src/app/components/file-browser/file-browser.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FileBrowserComponent: () => (/* binding */ FileBrowserComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 839);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/api */ 8026);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/button */ 2947);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/dialog */ 3311);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/inputtext */ 873);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/table */ 6192);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 655);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 2607);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 2389);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 4980);
/* harmony import */ var _app_settings_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app-settings.service */ 5751);
/* harmony import */ var _models_filebrowser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/filebrowser */ 9001);
/* harmony import */ var _services_api_filesystem_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api/filesystem.service */ 3351);
/* harmony import */ var _utils_path_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/path-utils */ 5997);





















const _c0 = ["rowElement"];
function FileBrowserComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControl", ctx_r0.selectedFilePath);
  }
}
function FileBrowserComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function FileBrowserComponent_ng_template_4_i_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 15);
  }
}
function FileBrowserComponent_ng_template_4_i_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 16);
  }
}
function FileBrowserComponent_ng_template_4_i_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 17);
  }
}
function FileBrowserComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 10, 11)(2, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, FileBrowserComponent_ng_template_4_i_3_Template, 1, 0, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, FileBrowserComponent_ng_template_4_i_4_Template, 1, 0, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, FileBrowserComponent_ng_template_4_i_5_Template, 1, 0, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const file_r4 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("pSelectableRow", file_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("data-id", file_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.isFolder(file_r4.type) && ctx_r2.isFolderUp(file_r4.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.isFolder(file_r4.type) && !ctx_r2.isFolderUp(file_r4.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.isFile(file_r4.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](file_r4.name);
  }
}
function FileBrowserComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p-button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FileBrowserComponent_ng_template_5_Template_p_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r9.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "p-button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FileBrowserComponent_ng_template_5_Template_p_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r11.selectFile());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
let FileBrowserComponent = /*#__PURE__*/(() => {
  class FileBrowserComponent {
    constructor() {
      this.visible = false;
      this.visibleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter(); // Setup 2-way binding [(visible)]="..."
      this.path = ''; // no path by default, if specified, the file browser will start to browse on this path
      this.pathChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter(); // Setup 2-way binding [(path)]="..."
      this.folderMode = false; // default no folder mode (folder mode means selecting folders instead of files)
      this.FOLDER_UP = '...';
      this.includeFiles = true;
      this.includeFolders = true;
      this.fileSystemService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_services_api_filesystem_service__WEBPACK_IMPORTED_MODULE_2__.FileSystemService);
      this.destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_4__.DestroyRef);
    }
    ngOnInit() {
      // In folder mode we don't want to select files, so do not include them
      if (this.folderMode) {
        this.includeFiles = false;
      }
      // Create and subscribe for selected file path changes
      // Use debounceTime to prevent too much calls to backend while typing
      // Use mergeMap to handle fast changes by typing in text field
      // Proper error catching to make sure the subscribe does not break on error (f.e. when invalid path is typed)
      this.selectedFilePath = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormControl(this.path);
      this.selectedFilePath.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.debounceTime)(500), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.mergeMap)(path => this.fileSystemService.browse(path, this.includeFiles, this.includeFolders)), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(null)), (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_10__.takeUntilDestroyed)(this.destroyRef)).subscribe({
        next: result => this.loadFileBrowserResult(result)
      });
      // Trigger initial browse
      this.fileSystemService.browse(this.path, this.includeFiles, this.includeFolders).pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_10__.takeUntilDestroyed)(this.destroyRef)).subscribe({
        next: result => this.loadFileBrowserResult(result)
      });
    }
    select() {
      // Handle selection of file or folder
      if (this.selectedFile.type === _models_filebrowser__WEBPACK_IMPORTED_MODULE_1__.FileBrowserFileType.FOLDER) {
        let folder = this.selectedFile.name;
        if (folder === this.FOLDER_UP) {
          const pathInChunks = (0,_utils_path_utils__WEBPACK_IMPORTED_MODULE_3__.splitPathInChunks)(this.fileBrowserPath);
          const parentFolderchunks = pathInChunks.slice(0, -1); // get parent folder path in chunks
          // On Windows, if parent chunk is a drive letter (without \) we clear the path to get the root path
          if (parentFolderchunks.length === 1 && parentFolderchunks[0].match(/[A-Z]+:/)) {
            folder = '';
          } else {
            // All other cases, join chunks together for parent path
            folder = (0,_utils_path_utils__WEBPACK_IMPORTED_MODULE_3__.joinPaths)(...parentFolderchunks);
          }
        } else {
          folder = this.getFilePath(folder); // get complete path of the folder
        }

        this.selectedFilePath.setValue(folder);
      } else {
        this.selectedFilePath.setValue(this.getFilePath(this.selectedFile.name));
      }
    }
    isFile(type) {
      return _models_filebrowser__WEBPACK_IMPORTED_MODULE_1__.FileBrowserFileType.FILE === type;
    }
    isFolder(type) {
      return _models_filebrowser__WEBPACK_IMPORTED_MODULE_1__.FileBrowserFileType.FOLDER === type;
    }
    isFolderUp(name) {
      return name === this.FOLDER_UP;
    }
    selectFile() {
      this.pathChange.emit(this.selectedFilePath.value);
      this.close();
    }
    close() {
      this.visibleChange.emit(false);
    }
    loadFileBrowserResult(fileBrowserResult) {
      // Check if present as the result can be null after an catch of an error in the api call
      if (fileBrowserResult) {
        // Set browser result
        this.fileBrowserResult = fileBrowserResult;
        // Set filebrowser path
        this.fileBrowserPath = this.fileBrowserResult.path;
        // Determine previously selected file name
        const selectedFileName = this.getSelectedFileName(this.selectedFilePath.value, this.fileBrowserPath);
        // Build browser files
        this.fileBrowserFiles = this.getFileBrowserFiles(this.fileBrowserResult, selectedFileName);
        // Insert folder up at beginning when not at root level (empty on Windows, / on unix)
        if (this.fileBrowserPath !== '' && this.fileBrowserPath !== '/') {
          this.fileBrowserFiles.unshift(new _models_filebrowser__WEBPACK_IMPORTED_MODULE_1__.FileBrowserFile(_models_filebrowser__WEBPACK_IMPORTED_MODULE_1__.FileBrowserFileType.FOLDER, this.FOLDER_UP));
        }
        // scroll to previously selected file name
        this.scrollToSelectedFileName(selectedFileName);
      }
    }
    getSelectedFileName(selectedFilePath, fileBrowserPath) {
      let selectedFileName = null;
      if (selectedFilePath && fileBrowserPath) {
        // The selected filename is the extra part after stripping the file browser path (which is always a folder) from the selected file path
        selectedFileName = (0,_utils_path_utils__WEBPACK_IMPORTED_MODULE_3__.joinPaths)(...(0,_utils_path_utils__WEBPACK_IMPORTED_MODULE_3__.splitPathInChunks)(selectedFilePath).filter(part => !(0,_utils_path_utils__WEBPACK_IMPORTED_MODULE_3__.splitPathInChunks)(fileBrowserPath).includes(part)));
      } else if (selectedFilePath) {
        // If file browser path is empty, the selecte file path is the selected filename
        selectedFileName = selectedFilePath;
      }
      return selectedFileName;
    }
    getFileBrowserFiles(fileBrowserResult, selectedFileName) {
      const files = [];
      this.selectedFile = null;
      // Add folders
      fileBrowserResult.folders.forEach(folder => files.push(new _models_filebrowser__WEBPACK_IMPORTED_MODULE_1__.FileBrowserFile(_models_filebrowser__WEBPACK_IMPORTED_MODULE_1__.FileBrowserFileType.FOLDER, folder)));
      // Add files
      fileBrowserResult.files.forEach(file => {
        const fileBrowserFile = new _models_filebrowser__WEBPACK_IMPORTED_MODULE_1__.FileBrowserFile(_models_filebrowser__WEBPACK_IMPORTED_MODULE_1__.FileBrowserFileType.FILE, file);
        files.push(fileBrowserFile);
        // If the file is the selected file, mark it as selected
        if (file === selectedFileName) {
          this.selectedFile = fileBrowserFile;
        }
      });
      return files;
    }
    scrollToSelectedFileName(selectedFileName) {
      // Find the selected file name (if available) in the rows and scroll to it
      if (selectedFileName) {
        setTimeout(() => {
          // Find element based on data-id attribute
          const row = this.rowElements.find(r => r.nativeElement.getAttribute('data-id') === selectedFileName);
          if (row) {
            row.nativeElement.scrollIntoView({
              inline: 'start',
              block: 'start'
            });
          }
        });
      }
    }
    getFilePath(path) {
      let fileBrowserPath = this.fileBrowserPath;
      if (fileBrowserPath.endsWith(_app_settings_service__WEBPACK_IMPORTED_MODULE_0__.appSettings.pathSeparator)) {
        // Make sure not to end up with double path separators, so remove trailing path separator if available
        fileBrowserPath = fileBrowserPath.slice(0, -1);
      }
      return fileBrowserPath ? (0,_utils_path_utils__WEBPACK_IMPORTED_MODULE_3__.joinPaths)(fileBrowserPath, path) : path;
    }
  }
  FileBrowserComponent.ɵfac = function FileBrowserComponent_Factory(t) {
    return new (t || FileBrowserComponent)();
  };
  FileBrowserComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: FileBrowserComponent,
    selectors: [["app-file-browser"]],
    viewQuery: function FileBrowserComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.rowElements = _t);
      }
    },
    inputs: {
      visible: "visible",
      path: "path",
      folderMode: "folderMode"
    },
    outputs: {
      visibleChange: "visibleChange",
      pathChange: "pathChange"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
    decls: 6,
    vars: 7,
    consts: [["header", "File browser", "styleClass", "dialog-file-browser", 3, "visible", "modal", "closable", "resizable", "visibleChange"], ["selectionMode", "single", "scrollHeight", "50vh", "styleClass", "p-datatable-sm p-datatable-striped", 3, "value", "selection", "scrollable", "selectionChange", "onRowSelect"], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "footer"], [1, "caption", "w-100"], ["type", "text", "pInputText", "", "placeholder", "Select or type path", 1, "p-inputtext-sm", "w-100", 3, "formControl"], [1, "col-type"], [1, "col-name"], [3, "pSelectableRow"], ["rowElement", ""], ["class", "fa fa-level-up", "aria-hidden", "true", "title", "File", 4, "ngIf"], ["class", "fa fa-folder-o", "aria-hidden", "true", "title", "Folder", 4, "ngIf"], ["class", "fa fa-file-o", "aria-hidden", "true", "title", "File", 4, "ngIf"], ["aria-hidden", "true", "title", "File", 1, "fa", "fa-level-up"], ["aria-hidden", "true", "title", "Folder", 1, "fa", "fa-folder-o"], ["aria-hidden", "true", "title", "File", 1, "fa", "fa-file-o"], ["icon", "pi pi-times", "label", "Cancel", "styleClass", "p-button p-button-secondary", 3, "click"], ["icon", "pi pi-check", "label", "Ok", "styleClass", "p-button mr-0", 3, "click"]],
    template: function FileBrowserComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p-dialog", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("visibleChange", function FileBrowserComponent_Template_p_dialog_visibleChange_0_listener($event) {
          return ctx.visible = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "p-table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selectionChange", function FileBrowserComponent_Template_p_table_selectionChange_1_listener($event) {
          return ctx.selectedFile = $event;
        })("onRowSelect", function FileBrowserComponent_Template_p_table_onRowSelect_1_listener() {
          return ctx.select();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, FileBrowserComponent_ng_template_2_Template, 2, 1, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, FileBrowserComponent_ng_template_3_Template, 5, 0, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, FileBrowserComponent_ng_template_4_Template, 8, 6, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, FileBrowserComponent_ng_template_5_Template, 2, 0, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("visible", ctx.visible)("modal", true)("closable", false)("resizable", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx.fileBrowserFiles)("selection", ctx.selectedFile)("scrollable", true);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlDirective, primeng_dialog__WEBPACK_IMPORTED_MODULE_12__.DialogModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_12__.Dialog, primeng_api__WEBPACK_IMPORTED_MODULE_13__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_14__.TableModule, primeng_table__WEBPACK_IMPORTED_MODULE_14__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_14__.SelectableRow, primeng_button__WEBPACK_IMPORTED_MODULE_15__.ButtonModule, primeng_button__WEBPACK_IMPORTED_MODULE_15__.Button, primeng_api__WEBPACK_IMPORTED_MODULE_13__.SharedModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_16__.InputTextModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_16__.InputText],
    styles: [".dialog-file-browser {\n  width: 50rem;\n}\n  .dialog-file-browser .p-datatable .p-datatable-header {\n  padding-left: 0;\n  padding-right: 0;\n}\n\n.caption[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.caption[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-weight: 400;\n}\n\n.col-type[_ngcontent-%COMP%] {\n  width: 50px;\n}\n\n.col-name[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9maWxlLWJyb3dzZXIvZmlsZS1icm93c2VyLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL3Njc3MvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsWUFBQTtBQURGO0FBR0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFESjs7QUFNRTtFQUNFLGdCQ1BRO0FESVo7QUFNRTtFQUNFLGdCQ1pXO0FEUWY7O0FBUUE7RUFDRSxXQUFBO0FBTEY7O0FBUUE7RUFDRSxXQUFBO0FBTEYiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9zY3NzL3ZhcmlhYmxlcyc7XHJcblxyXG46Om5nLWRlZXAgLmRpYWxvZy1maWxlLWJyb3dzZXIge1xyXG4gIHdpZHRoOiA1MHJlbTtcclxuXHJcbiAgLnAtZGF0YXRhYmxlIC5wLWRhdGF0YWJsZS1oZWFkZXIge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwOyAvLyByZW1vdmUgcGFkZGluZyBmcm9tIHRhYmxlIGhlYWRlclxyXG4gICAgcGFkZGluZy1yaWdodDogMDsgLy8gcmVtb3ZlIHBhZGRpbmcgZnJvbSB0YWJsZSBoZWFkZXJcclxuICB9XHJcbn1cclxuXHJcbi5jYXB0aW9uIHtcclxuICAubGFiZWwge1xyXG4gICAgZm9udC13ZWlnaHQ6ICRmb250LWJvbGQ7XHJcbiAgfVxyXG5cclxuICAudmFsdWUge1xyXG4gICAgZm9udC13ZWlnaHQ6ICRmb250LWRlZmF1bHQ7XHJcbiAgfVxyXG59XHJcblxyXG4uY29sLXR5cGUge1xyXG4gIHdpZHRoOiA1MHB4O1xyXG59XHJcblxyXG4uY29sLW5hbWUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiIsIi8vIEdsb2JhbCB2YXJpYWJsZXMgKHZhcigtLXh4eHgpKSBhcmUgdXNlZCBmcm9tIGltcG9ydGVkIHByaW1lbmcgc3R5bGVzXHJcblxyXG4vLyBGb250XHJcbiRmb250LXNpemU6IDFyZW07XHJcbiRmb250LXNpemUtc206ICgkZm9udC1zaXplICogLjg3NSkgIWRlZmF1bHQ7XHJcbiRmb250LWRlZmF1bHQ6IDQwMDtcclxuJGZvbnQtYm9sZDogNTAwO1xyXG4kZm9udC1jb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XHJcblxyXG4vLyBCYWNrZ3JvdW5kXHJcbiRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdXJmYWNlLWEpO1xyXG5cclxuLy9NZWRpYSBib3VuZGFyaWVzXHJcbiRtZWRpYS1tb2JpbGUtbWF4LXdpZHRoOiA3NjdweDtcclxuJG1lZGlhLXRhYmxldC1taW4td2lkdGg6IDc2OHB4O1xyXG4kbWVkaWEtdGFibGV0LW1heC13aWR0aDogOTkxcHg7XHJcbiRtZWRpYS1kZXNrdG9wLW1pbi13aWR0aDogOTkycHg7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
  return FileBrowserComponent;
})();

/***/ }),

/***/ 5540:
/*!***********************************************************************!*\
  !*** ./src/app/components/input/dropdown/input-dropdown.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InputDropdownComponent: () => (/* binding */ InputDropdownComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/dropdown */ 4553);
/* harmony import */ var _input_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../input.component */ 4904);








let InputDropdownComponent = /*#__PURE__*/(() => {
  class InputDropdownComponent extends _input_component__WEBPACK_IMPORTED_MODULE_0__.InputComponent {
    writeValue(obj) {
      super.writeValue(obj);
      this.changeDetectorRef.detectChanges(); // p-dropdown makes changes to the input, so detect changes again to prevent ExpressionChangedAfterItHasBeenCheckedError
    }

    onDropDownChange(event) {
      this.changeEvent.emit(event.originalEvent);
    }
  }
  InputDropdownComponent.ɵfac = /*@__PURE__*/function () {
    let ɵInputDropdownComponent_BaseFactory;
    return function InputDropdownComponent_Factory(t) {
      return (ɵInputDropdownComponent_BaseFactory || (ɵInputDropdownComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](InputDropdownComponent)))(t || InputDropdownComponent);
    };
  }();
  InputDropdownComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: InputDropdownComponent,
    selectors: [["app-input-dropdown"]],
    inputs: {
      options: "options"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NG_VALUE_ACCESSOR,
      useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => InputDropdownComponent),
      multi: true
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 1,
    vars: 4,
    consts: [["styleClass", "w-100", 3, "inputId", "formControl", "options", "ngClass", "onFocus", "onChange", "onBlur"]],
    template: function InputDropdownComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p-dropdown", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onFocus", function InputDropdownComponent_Template_p_dropdown_onFocus_0_listener($event) {
          return ctx.onFocus($event);
        })("onChange", function InputDropdownComponent_Template_p_dropdown_onChange_0_listener($event) {
          return ctx.onDropDownChange($event);
        })("onBlur", function InputDropdownComponent_Template_p_dropdown_onBlur_0_listener($event) {
          return ctx.onBlur($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("inputId", ctx.id || ctx.formControlName)("formControl", ctx.control)("options", ctx.options)("ngClass", ctx.validationClass);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlDirective, primeng_dropdown__WEBPACK_IMPORTED_MODULE_4__.DropdownModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_4__.Dropdown],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
  return InputDropdownComponent;
})();

/***/ }),

/***/ 7183:
/*!*******************************************************************************!*\
  !*** ./src/app/components/input/file-browser/input-file-browser.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InputFileBrowserComponent: () => (/* binding */ InputFileBrowserComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ 2947);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/inputtext */ 873);
/* harmony import */ var _file_browser_file_browser_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../file-browser/file-browser.component */ 6477);
/* harmony import */ var _input_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../input.component */ 4904);











function InputFileBrowserComponent_app_file_browser_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-file-browser", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("visibleChange", function InputFileBrowserComponent_app_file_browser_3_Template_app_file_browser_visibleChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.showFileBrowser = $event);
    })("pathChange", function InputFileBrowserComponent_app_file_browser_3_Template_app_file_browser_pathChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.setFilePath($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("visible", ctx_r0.showFileBrowser)("path", ctx_r0.browserPath)("folderMode", ctx_r0.folderMode);
  }
}
let InputFileBrowserComponent = /*#__PURE__*/(() => {
  class InputFileBrowserComponent extends _input_component__WEBPACK_IMPORTED_MODULE_1__.InputComponent {
    constructor() {
      super(...arguments);
      this.path = ''; // no path by default, if specified, the file browser will always start to browse on this path
      this.folderMode = false; // default no folder mode (folder mode means selecting folders instead of files)
      this.placeholder = '';
      this.showFileBrowser = false;
      this.browserPath = '';
    }
    openFileBrowser() {
      this.browserPath = this.path || this.control.value || ''; // use fixed path, path from input field or empty if not specified
      this.showFileBrowser = true;
    }
    setFilePath(filePath) {
      this.control.setValue(filePath);
    }
  }
  InputFileBrowserComponent.ɵfac = /*@__PURE__*/function () {
    let ɵInputFileBrowserComponent_BaseFactory;
    return function InputFileBrowserComponent_Factory(t) {
      return (ɵInputFileBrowserComponent_BaseFactory || (ɵInputFileBrowserComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](InputFileBrowserComponent)))(t || InputFileBrowserComponent);
    };
  }();
  InputFileBrowserComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: InputFileBrowserComponent,
    selectors: [["app-input-file-browser"]],
    inputs: {
      path: "path",
      folderMode: "folderMode",
      placeholder: "placeholder"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NG_VALUE_ACCESSOR,
      useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(() => InputFileBrowserComponent),
      multi: true
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 4,
    vars: 5,
    consts: [[1, "p-inputgroup"], ["pInputText", "", "type", "text", 1, "w-100", 3, "id", "formControl", "placeholder", "ngClass", "focus", "keydown", "keyup", "change", "blur"], ["icon", "pi pi-folder-open", "styleClass", "p-button-outlined input-addon", 3, "onClick"], [3, "visible", "path", "folderMode", "visibleChange", "pathChange", 4, "ngIf"], [3, "visible", "path", "folderMode", "visibleChange", "pathChange"]],
    template: function InputFileBrowserComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("focus", function InputFileBrowserComponent_Template_input_focus_1_listener($event) {
          return ctx.onFocus($event);
        })("keydown", function InputFileBrowserComponent_Template_input_keydown_1_listener($event) {
          return ctx.onKeyDown($event);
        })("keyup", function InputFileBrowserComponent_Template_input_keyup_1_listener($event) {
          return ctx.onKeyUp($event);
        })("change", function InputFileBrowserComponent_Template_input_change_1_listener($event) {
          return ctx.onChange($event);
        })("blur", function InputFileBrowserComponent_Template_input_blur_1_listener($event) {
          return ctx.onBlur($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onClick", function InputFileBrowserComponent_Template_p_button_onClick_2_listener() {
          return ctx.openFileBrowser();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, InputFileBrowserComponent_app_file_browser_3_Template, 1, 3, "app-file-browser", 3);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", ctx.id || ctx.formControlName)("formControl", ctx.control)("placeholder", ctx.placeholder)("ngClass", ctx.validationClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showFileBrowser);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlDirective, primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__.InputTextModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__.InputText, primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonModule, primeng_button__WEBPACK_IMPORTED_MODULE_6__.Button, _file_browser_file_browser_component__WEBPACK_IMPORTED_MODULE_0__.FileBrowserComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
  return InputFileBrowserComponent;
})();

/***/ }),

/***/ 6969:
/*!*******************************************************************************************!*\
  !*** ./src/app/components/input/multi-file-browser/input-multi-file-browser.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InputMultiFileBrowserComponent: () => (/* binding */ InputMultiFileBrowserComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ 2947);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/inputtext */ 873);
/* harmony import */ var _file_browser_file_browser_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../file-browser/file-browser.component */ 6477);
/* harmony import */ var _input_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../input.component */ 4904);











function InputMultiFileBrowserComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2)(1, "div", 2)(2, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup", function InputMultiFileBrowserComponent_div_1_Template_input_keyup_2_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const value_r2 = restoredCtx.$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r4.onValueKeyup($event, value_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p-button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onClick", function InputMultiFileBrowserComponent_div_1_Template_p_button_onClick_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const value_r2 = restoredCtx.$implicit;
      const i_r3 = restoredCtx.index;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r6.openFileBrowser(value_r2, i_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p-button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onClick", function InputMultiFileBrowserComponent_div_1_Template_p_button_onClick_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const value_r2 = restoredCtx.$implicit;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r7.removeValue(value_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const value_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", (ctx_r0.id || ctx_r0.formControlName) + i_r3)("value", value_r2);
  }
}
function InputMultiFileBrowserComponent_app_file_browser_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-file-browser", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("visibleChange", function InputMultiFileBrowserComponent_app_file_browser_7_Template_app_file_browser_visibleChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r8.showFileBrowser = $event);
    })("pathChange", function InputMultiFileBrowserComponent_app_file_browser_7_Template_app_file_browser_pathChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r10.setFilePath($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("visible", ctx_r1.showFileBrowser)("path", ctx_r1.browserPath)("folderMode", ctx_r1.folderMode);
  }
}
let InputMultiFileBrowserComponent = /*#__PURE__*/(() => {
  class InputMultiFileBrowserComponent extends _input_component__WEBPACK_IMPORTED_MODULE_1__.InputComponent {
    constructor() {
      super(...arguments);
      this.folderMode = false; // default no folder mode (folder mode means selecting folders instead of files)
      this.showFileBrowser = false;
      this.addButtonDisabled = true;
      this.browserPath = '';
      this.browserIndex = -1;
    }
    get values() {
      return this.control ? this.control.value : [];
    }
    // Required to only update single value inside array (https://angular.io/api/core/TrackByFunction) and do not refresh complete array
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    trackValueByIndex(index, value) {
      return index;
    }
    onValueKeyup(event, originalValue) {
      // Replace original value with change value
      const changedValue = event.target.value;
      if (changedValue && changedValue.trim()) {
        this.control.setValue(this.values.map(val => val === originalValue ? changedValue.trim() : val));
      }
    }
    removeValue(value) {
      // Remove value
      this.control.setValue(this.values.filter(val => val !== value));
    }
    onNewValueKeyup(event) {
      const value = event.target.value;
      if (value && value.trim()) {
        this.addButtonDisabled = false;
      } else {
        this.addButtonDisabled = true;
      }
    }
    addNewValue() {
      // Add new value
      if (this.newValue) {
        if (!this.values.includes(this.newValue.trim())) {
          this.control.setValue(this.values.concat(this.newValue.trim()));
        }
        this.newValue = ''; // clear new value
        this.addButtonDisabled = true;
      }
    }
    openFileBrowser(path, index) {
      this.browserPath = path || '';
      this.browserIndex = index;
      this.showFileBrowser = true;
    }
    setFilePath(filePath) {
      if (this.browserIndex >= 0) {
        this.values[this.browserIndex] = filePath.trim();
      } else {
        this.values.push(filePath.trim());
      }
      this.control.setValue(this.values);
    }
  }
  InputMultiFileBrowserComponent.ɵfac = /*@__PURE__*/function () {
    let ɵInputMultiFileBrowserComponent_BaseFactory;
    return function InputMultiFileBrowserComponent_Factory(t) {
      return (ɵInputMultiFileBrowserComponent_BaseFactory || (ɵInputMultiFileBrowserComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](InputMultiFileBrowserComponent)))(t || InputMultiFileBrowserComponent);
    };
  }();
  InputMultiFileBrowserComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: InputMultiFileBrowserComponent,
    selectors: [["app-input-multi-file-browser"]],
    inputs: {
      folderMode: "folderMode"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NG_VALUE_ACCESSOR,
      useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(() => InputMultiFileBrowserComponent),
      multi: true
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 9,
    vars: 9,
    consts: [[1, "input-multi-text"], ["class", "p-inputgroup", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "p-inputgroup"], ["type", "text", "pInputText", "", "placeholder", "New value", 3, "id", "ngModel", "ngClass", "ngModelChange", "keyup"], ["icon", "pi pi-folder-open", "styleClass", "p-button-outlined input-addon", 3, "onClick"], ["icon", "pi pi-plus", "styleClass", "p-button-outlined input-addon", 3, "disabled", "onClick"], [3, "visible", "path", "folderMode", "visibleChange", "pathChange", 4, "ngIf"], ["type", "hidden", 3, "id", "formControl"], ["type", "text", "pInputText", "", 3, "id", "value", "keyup"], ["icon", "pi pi-times", "styleClass", "p-button-outlined input-addon", 3, "onClick"], [3, "visible", "path", "folderMode", "visibleChange", "pathChange"]],
    template: function InputMultiFileBrowserComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, InputMultiFileBrowserComponent_div_1_Template, 5, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2)(3, "div", 2)(4, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function InputMultiFileBrowserComponent_Template_input_ngModelChange_4_listener($event) {
          return ctx.newValue = $event;
        })("keyup", function InputMultiFileBrowserComponent_Template_input_keyup_4_listener($event) {
          return ctx.onNewValueKeyup($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onClick", function InputMultiFileBrowserComponent_Template_p_button_onClick_5_listener() {
          return ctx.openFileBrowser(ctx.newValue, -1);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onClick", function InputMultiFileBrowserComponent_Template_p_button_onClick_6_listener() {
          return ctx.addNewValue();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, InputMultiFileBrowserComponent_app_file_browser_7_Template, 1, 3, "app-file-browser", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.values)("ngForTrackBy", ctx.trackValueByIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", (ctx.id || ctx.formControlName) + "New")("ngModel", ctx.newValue)("ngClass", ctx.validationClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.addButtonDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showFileBrowser);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", ctx.id || ctx.formControlName)("formControl", ctx.control);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgFor, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlDirective, primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__.InputTextModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__.InputText, primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonModule, primeng_button__WEBPACK_IMPORTED_MODULE_6__.Button, _file_browser_file_browser_component__WEBPACK_IMPORTED_MODULE_0__.FileBrowserComponent],
    styles: [".p-inputgroup[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:first-child {\n  flex-grow: 1;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9pbnB1dC9tdWx0aS1maWxlLWJyb3dzZXIvaW5wdXQtbXVsdGktZmlsZS1icm93c2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsWUFBQTtBQUFKIiwic291cmNlc0NvbnRlbnQiOlsiLnAtaW5wdXRncm91cCB7XHJcbiAgPjpmaXJzdC1jaGlsZCB7XHJcbiAgICBmbGV4LWdyb3c6IDE7IC8vIGF1dG8gc3RyZXRjaCBmaXJzdCBlbGVtZW50IG9mIHRoZSBpbnB1dGdyb3VwXHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
  return InputMultiFileBrowserComponent;
})();

/***/ }),

/***/ 5620:
/*!***************************************************************************!*\
  !*** ./src/app/components/input/multi-text/input-multi-text.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InputMultiTextComponent: () => (/* binding */ InputMultiTextComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ 2947);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/dropdown */ 4553);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/inputtext */ 873);
/* harmony import */ var _input_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../input.component */ 4904);












function InputMultiTextComponent_div_1_p_dropdown_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p-dropdown", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onChange", function InputMultiTextComponent_div_1_p_dropdown_1_Template_p_dropdown_onChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);
      const value_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r7.onValueChange($event, value_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const i_r4 = ctx_r10.index;
    const value_r3 = ctx_r10.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("inputId", (ctx_r5.id || ctx_r5.formControlName) + i_r4)("options", ctx_r5.options)("ngModel", value_r3);
  }
}
function InputMultiTextComponent_div_1_input_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function InputMultiTextComponent_div_1_input_2_Template_input_keyup_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13);
      const value_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r11.onValueKeyup($event, value_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const i_r4 = ctx_r14.index;
    const value_r3 = ctx_r14.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", (ctx_r6.id || ctx_r6.formControlName) + i_r4)("value", value_r3);
  }
}
function InputMultiTextComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, InputMultiTextComponent_div_1_p_dropdown_1_Template, 1, 3, "p-dropdown", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, InputMultiTextComponent_div_1_input_2_Template, 1, 2, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p-button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onClick", function InputMultiTextComponent_div_1_Template_p_button_onClick_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16);
      const value_r3 = restoredCtx.$implicit;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r15.removeValue(value_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.options);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.options);
  }
}
function InputMultiTextComponent_p_dropdown_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p-dropdown", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function InputMultiTextComponent_p_dropdown_3_Template_p_dropdown_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r17.newValue = $event);
    })("onChange", function InputMultiTextComponent_p_dropdown_3_Template_p_dropdown_onChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r19.onNewValueChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("inputId", (ctx_r1.id || ctx_r1.formControlName) + "New")("options", ctx_r1.options)("ngModel", ctx_r1.newValue)("ngClass", ctx_r1.validationClass);
  }
}
function InputMultiTextComponent_input_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function InputMultiTextComponent_input_4_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r20.newValue = $event);
    })("keyup", function InputMultiTextComponent_input_4_Template_input_keyup_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r22.onNewValueKeyup($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", (ctx_r2.id || ctx_r2.formControlName) + "New")("ngModel", ctx_r2.newValue)("ngClass", ctx_r2.validationClass);
  }
}
let InputMultiTextComponent = /*#__PURE__*/(() => {
  class InputMultiTextComponent extends _input_component__WEBPACK_IMPORTED_MODULE_0__.InputComponent {
    constructor() {
      super(...arguments);
      this.addButtonDisabled = true;
    }
    get values() {
      return this.control ? this.control.value : [];
    }
    // Required to only update single value inside array (https://angular.io/api/core/TrackByFunction) and do not refresh complete array
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    trackValueByIndex(index, value) {
      return index;
    }
    onValueChange(event, originalValue) {
      // Replace original value with change value
      const changedValue = event.value;
      if (changedValue) {
        this.control.setValue(this.values.map(val => val === originalValue ? changedValue.trim() : val));
      }
    }
    onValueKeyup(event, originalValue) {
      // Replace original value with change value
      const changedValue = event.target.value;
      if (changedValue && changedValue.trim()) {
        this.control.setValue(this.values.map(val => val === originalValue ? changedValue.trim() : val));
      }
    }
    removeValue(value) {
      // Remove value
      this.control.setValue(this.values.filter(val => val !== value));
    }
    onNewValueChange(event) {
      if (event.value) {
        this.addButtonDisabled = false;
      } else {
        this.addButtonDisabled = true;
      }
    }
    onNewValueKeyup(event) {
      const value = event.target.value;
      if (value && value.trim()) {
        this.addButtonDisabled = false;
      } else {
        this.addButtonDisabled = true;
      }
    }
    addNewValue() {
      // Add new value
      if (this.newValue) {
        if (!this.values.includes(this.newValue.trim())) {
          this.control.setValue(this.values.concat(this.newValue.trim()));
        }
        this.newValue = ''; // clear new value
        this.addButtonDisabled = true;
      }
    }
  }
  InputMultiTextComponent.ɵfac = /*@__PURE__*/function () {
    let ɵInputMultiTextComponent_BaseFactory;
    return function InputMultiTextComponent_Factory(t) {
      return (ɵInputMultiTextComponent_BaseFactory || (ɵInputMultiTextComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](InputMultiTextComponent)))(t || InputMultiTextComponent);
    };
  }();
  InputMultiTextComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: InputMultiTextComponent,
    selectors: [["app-input-multi-text"]],
    inputs: {
      options: "options"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NG_VALUE_ACCESSOR,
      useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => InputMultiTextComponent),
      multi: true
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 7,
    vars: 7,
    consts: [[1, "input-multi-text"], ["class", "p-inputgroup", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "p-inputgroup"], ["styleClass", "w-100", 3, "inputId", "options", "ngModel", "ngClass", "ngModelChange", "onChange", 4, "ngIf"], ["type", "text", "pInputText", "", "placeholder", "New value", 3, "id", "ngModel", "ngClass", "ngModelChange", "keyup", 4, "ngIf"], ["icon", "pi pi-plus", "styleClass", "p-button-outlined input-addon", 3, "disabled", "onClick"], ["type", "hidden", 3, "id", "formControl"], ["styleClass", "w-100", 3, "inputId", "options", "ngModel", "onChange", 4, "ngIf"], ["type", "text", "pInputText", "", 3, "id", "value", "keyup", 4, "ngIf"], ["icon", "pi pi-times", "styleClass", "p-button-outlined input-addon", 3, "onClick"], ["styleClass", "w-100", 3, "inputId", "options", "ngModel", "onChange"], ["type", "text", "pInputText", "", 3, "id", "value", "keyup"], ["styleClass", "w-100", 3, "inputId", "options", "ngModel", "ngClass", "ngModelChange", "onChange"], ["type", "text", "pInputText", "", "placeholder", "New value", 3, "id", "ngModel", "ngClass", "ngModelChange", "keyup"]],
    template: function InputMultiTextComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, InputMultiTextComponent_div_1_Template, 4, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, InputMultiTextComponent_p_dropdown_3_Template, 1, 4, "p-dropdown", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, InputMultiTextComponent_input_4_Template, 1, 3, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onClick", function InputMultiTextComponent_Template_p_button_onClick_5_listener() {
          return ctx.addNewValue();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.values)("ngForTrackBy", ctx.trackValueByIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.addButtonDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", ctx.id || ctx.formControlName)("formControl", ctx.control);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgFor, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlDirective, primeng_inputtext__WEBPACK_IMPORTED_MODULE_4__.InputTextModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_4__.InputText, primeng_dropdown__WEBPACK_IMPORTED_MODULE_5__.DropdownModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_5__.Dropdown, primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonModule, primeng_button__WEBPACK_IMPORTED_MODULE_6__.Button],
    styles: [".p-inputgroup[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:first-child {\n  flex-grow: 1;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9pbnB1dC9tdWx0aS10ZXh0L2lucHV0LW11bHRpLXRleHQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxZQUFBO0FBQUoiLCJzb3VyY2VzQ29udGVudCI6WyIucC1pbnB1dGdyb3VwIHtcclxuICA+OmZpcnN0LWNoaWxkIHtcclxuICAgIGZsZXgtZ3JvdzogMTsgLy8gYXV0byBzdHJldGNoIGZpcnN0IGVsZW1lbnQgb2YgdGhlIGlucHV0Z3JvdXBcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
  return InputMultiTextComponent;
})();

/***/ }),

/***/ 9001:
/*!***************************************!*\
  !*** ./src/app/models/filebrowser.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FileBrowserFile: () => (/* binding */ FileBrowserFile),
/* harmony export */   FileBrowserFileType: () => (/* binding */ FileBrowserFileType),
/* harmony export */   FileBrowserResult: () => (/* binding */ FileBrowserResult)
/* harmony export */ });
class FileBrowserResult {}
var FileBrowserFileType = /*#__PURE__*/function (FileBrowserFileType) {
  FileBrowserFileType["FILE"] = "file";
  FileBrowserFileType["FOLDER"] = "folder";
  return FileBrowserFileType;
}(FileBrowserFileType || {});
class FileBrowserFile {
  constructor(type, name) {
    this.type = type;
    this.name = name;
  }
}

/***/ }),

/***/ 5694:
/*!**********************************************************************!*\
  !*** ./src/app/pages/settings/general/settings-general.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsGeneralComponent: () => (/* binding */ SettingsGeneralComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 839);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/button */ 2947);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/panel */ 6110);
/* harmony import */ var _app_settings_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../app-settings.service */ 5751);
/* harmony import */ var _components_icon_dropdown_icon_dropdown_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/icon-dropdown/icon-dropdown.component */ 707);
/* harmony import */ var _components_input_dropdown_input_dropdown_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/input/dropdown/input-dropdown.component */ 5540);
/* harmony import */ var _components_input_file_browser_input_file_browser_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/input/file-browser/input-file-browser.component */ 7183);
/* harmony import */ var _components_input_multi_file_browser_input_multi_file_browser_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/input/multi-file-browser/input-multi-file-browser.component */ 6969);
/* harmony import */ var _components_input_multi_text_input_multi_text_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/input/multi-text/input-multi-text.component */ 5620);
/* harmony import */ var _components_input_number_input_number_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/input/number/input-number.component */ 6250);
/* harmony import */ var _models_settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../models/settings */ 6993);
/* harmony import */ var _services_api_settings_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/api/settings.service */ 1086);
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/message.service */ 6288);
/* harmony import */ var _utils_form_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../utils/form-utils */ 5580);
/* harmony import */ var _utils_form_validators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../utils/form-validators */ 1459);






















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
    constructor() {
      this.saveAttempt = false;
      this.fb = (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.inject)(_angular_forms__WEBPACK_IMPORTED_MODULE_13__.UntypedFormBuilder);
      this.settingsService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.inject)(_services_api_settings_service__WEBPACK_IMPORTED_MODULE_8__.SettingsService);
      this.appSettingsService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.inject)(_app_settings_service__WEBPACK_IMPORTED_MODULE_0__.AppSettingsService);
      this.messageService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.inject)(_services_message_service__WEBPACK_IMPORTED_MODULE_9__.MessageService);
      this.destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_12__.DestroyRef);
    }
    ngOnInit() {
      this.initDefaults();
      this.buildSelectItems();
      this.settingsService.getGeneralSettings().pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_14__.takeUntilDestroyed)(this.destroyRef)).subscribe({
        next: generalSettings => {
          this.buildForm(generalSettings);
        },
        error: () => this.messageService.showErrorMessage('Unable to get the general settings!')
      });
    }
    save() {
      this.saveAttempt = true;
      if (this.settingsForm.valid) {
        this.settingsService.updateGeneralSettings(this.getGeneralSettings()).pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_14__.takeUntilDestroyed)(this.destroyRef)).subscribe({
          next: () => {
            this.messageService.showSuccessMessage('General settings saved.');
            this.appSettingsService.reload(); // reload app settings
          },

          error: () => this.messageService.showErrorMessage('Unable to save the general settings!')
        });
      } else {
        _utils_form_utils__WEBPACK_IMPORTED_MODULE_10__.FormUtils.scrollToFirstInvalidField(this.settingsForm);
      }
    }
    showFfmpegPath() {
      // FFMPEG is required for manualSubSync
      return _utils_form_utils__WEBPACK_IMPORTED_MODULE_10__.FormUtils.getFormControlValue(this.settingsForm, 'manualSubSync');
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
      this.enabledOrDisabled = _utils_form_utils__WEBPACK_IMPORTED_MODULE_10__.FormUtils.enabledOrDisabledSelectItems();
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
        videoPaths: [generalSettings.videoPaths || [], [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, _utils_form_validators__WEBPACK_IMPORTED_MODULE_11__.FormValidators.notEmpty]],
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
      const ffmpegPath = _utils_form_utils__WEBPACK_IMPORTED_MODULE_10__.FormUtils.getFormControlValue(formGroup, 'ffmpegPath');
      if (_utils_form_utils__WEBPACK_IMPORTED_MODULE_10__.FormUtils.getFormControlValue(formGroup, 'manualSubSync') && (!ffmpegPath || !ffmpegPath.trim())) {
        _utils_form_utils__WEBPACK_IMPORTED_MODULE_10__.FormUtils.addFormControlValidationErrors(formGroup.controls['ffmpegPath'], error);
        _utils_form_utils__WEBPACK_IMPORTED_MODULE_10__.FormUtils.markFormControlFieldsAsDirty(formGroup);
        return error;
      }
      _utils_form_utils__WEBPACK_IMPORTED_MODULE_10__.FormUtils.clearFormControlValidationErrors(formGroup.controls['ffmpegPath'], error);
      return null;
    }
    getGeneralSettings() {
      const settings = new _models_settings__WEBPACK_IMPORTED_MODULE_7__.GeneralSettings();
      settings.videoPaths = _utils_form_utils__WEBPACK_IMPORTED_MODULE_10__.FormUtils.getFormControlValue(this.settingsForm, 'videoPaths');
      settings.defaultLanguage = _utils_form_utils__WEBPACK_IMPORTED_MODULE_10__.FormUtils.getFormControlValue(this.settingsForm, 'defaultLanguage');
      settings.defaultLanguageSuffix = _utils_form_utils__WEBPACK_IMPORTED_MODULE_10__.FormUtils.getFormControlValue(this.settingsForm, 'defaultLanguageSuffix');
      settings.additionalLanguages = _utils_form_utils__WEBPACK_IMPORTED_MODULE_10__.FormUtils.getFormControlValue(this.settingsForm, 'additionalLanguages');
      settings.manualSearchWithScoring = _utils_form_utils__WEBPACK_IMPORTED_MODULE_10__.FormUtils.getFormControlValue(this.settingsForm, 'manualSearchWithScoring');
      settings.scanDiskInterval = _utils_form_utils__WEBPACK_IMPORTED_MODULE_10__.FormUtils.getFormControlValue(this.settingsForm, 'scanDiskInterval');
      settings.scanDiskAtStartup = _utils_form_utils__WEBPACK_IMPORTED_MODULE_10__.FormUtils.getFormControlValue(this.settingsForm, 'scanDiskAtStartup');
      settings.checkSubInterval = _utils_form_utils__WEBPACK_IMPORTED_MODULE_10__.FormUtils.getFormControlValue(this.settingsForm, 'checkSubInterval');
      settings.checkSubAtStartup = _utils_form_utils__WEBPACK_IMPORTED_MODULE_10__.FormUtils.getFormControlValue(this.settingsForm, 'checkSubAtStartup');
      settings.checkSubDeadline = _utils_form_utils__WEBPACK_IMPORTED_MODULE_10__.FormUtils.getFormControlValue(this.settingsForm, 'checkSubDeadline');
      settings.checkSubDelta = _utils_form_utils__WEBPACK_IMPORTED_MODULE_10__.FormUtils.getFormControlValue(this.settingsForm, 'checkSubDelta');
      settings.checkVersionInterval = _utils_form_utils__WEBPACK_IMPORTED_MODULE_10__.FormUtils.getFormControlValue(this.settingsForm, 'checkVersionInterval');
      settings.checkVersionAtStartup = _utils_form_utils__WEBPACK_IMPORTED_MODULE_10__.FormUtils.getFormControlValue(this.settingsForm, 'checkVersionAtStartup');
      settings.checkVersionAutoUpdate = _utils_form_utils__WEBPACK_IMPORTED_MODULE_10__.FormUtils.getFormControlValue(this.settingsForm, 'checkVersionAutoUpdate');
      settings.scanEmbeddedSubs = _utils_form_utils__WEBPACK_IMPORTED_MODULE_10__.FormUtils.getFormControlValue(this.settingsForm, 'scanEmbeddedSubs');
      settings.scanHardcodedSubs = _utils_form_utils__WEBPACK_IMPORTED_MODULE_10__.FormUtils.getFormControlValue(this.settingsForm, 'scanHardcodedSubs');
      settings.skipHiddenDirs = _utils_form_utils__WEBPACK_IMPORTED_MODULE_10__.FormUtils.getFormControlValue(this.settingsForm, 'skipHiddenDirs');
      settings.detectInvalidSubLanguage = _utils_form_utils__WEBPACK_IMPORTED_MODULE_10__.FormUtils.getFormControlValue(this.settingsForm, 'detectInvalidSubLanguage');
      settings.detectedLanguageProbability = _utils_form_utils__WEBPACK_IMPORTED_MODULE_10__.FormUtils.getFormControlValue(this.settingsForm, 'detectedLanguageProbability') / 100; // percentage as decimal number
      settings.manualSubSync = _utils_form_utils__WEBPACK_IMPORTED_MODULE_10__.FormUtils.getFormControlValue(this.settingsForm, 'manualSubSync');
      settings.ffmpegPath = _utils_form_utils__WEBPACK_IMPORTED_MODULE_10__.FormUtils.getFormControlValue(this.settingsForm, 'ffmpegPath');
      settings.minVideoFileSize = _utils_form_utils__WEBPACK_IMPORTED_MODULE_10__.FormUtils.getFormControlValue(this.settingsForm, 'minVideoFileSize');
      settings.maxDbResults = _utils_form_utils__WEBPACK_IMPORTED_MODULE_10__.FormUtils.getFormControlValue(this.settingsForm, 'maxDbResults');
      settings.timestampFormat = _utils_form_utils__WEBPACK_IMPORTED_MODULE_10__.FormUtils.getFormControlValue(this.settingsForm, 'timestampFormat');
      return settings;
    }
  }
  SettingsGeneralComponent.ɵfac = function SettingsGeneralComponent_Factory(t) {
    return new (t || SettingsGeneralComponent)();
  };
  SettingsGeneralComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
    type: SettingsGeneralComponent,
    selectors: [["app-settings-general"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵStandaloneFeature"]],
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
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, primeng_panel__WEBPACK_IMPORTED_MODULE_16__.PanelModule, primeng_panel__WEBPACK_IMPORTED_MODULE_16__.Panel, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControlName, primeng_button__WEBPACK_IMPORTED_MODULE_17__.ButtonModule, primeng_button__WEBPACK_IMPORTED_MODULE_17__.Button, _components_icon_dropdown_icon_dropdown_component__WEBPACK_IMPORTED_MODULE_1__.IconDropdownComponent, _components_input_multi_file_browser_input_multi_file_browser_component__WEBPACK_IMPORTED_MODULE_4__.InputMultiFileBrowserComponent, _components_input_dropdown_input_dropdown_component__WEBPACK_IMPORTED_MODULE_2__.InputDropdownComponent, _components_input_multi_text_input_multi_text_component__WEBPACK_IMPORTED_MODULE_5__.InputMultiTextComponent, _components_input_number_input_number_component__WEBPACK_IMPORTED_MODULE_6__.InputNumberComponent, _components_input_file_browser_input_file_browser_component__WEBPACK_IMPORTED_MODULE_3__.InputFileBrowserComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
  return SettingsGeneralComponent;
})();

/***/ }),

/***/ 6728:
/*!**********************************************************************!*\
  !*** ./src/app/pages/settings/library/settings-library.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsLibraryComponent: () => (/* binding */ SettingsLibraryComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 839);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/button */ 2947);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/panel */ 6110);
/* harmony import */ var _app_settings_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../app-settings.service */ 5751);
/* harmony import */ var _components_icon_dropdown_icon_dropdown_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/icon-dropdown/icon-dropdown.component */ 707);
/* harmony import */ var _components_input_dropdown_input_dropdown_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/input/dropdown/input-dropdown.component */ 5540);
/* harmony import */ var _components_input_multi_file_browser_input_multi_file_browser_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/input/multi-file-browser/input-multi-file-browser.component */ 6969);
/* harmony import */ var _components_input_number_input_number_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/input/number/input-number.component */ 6250);
/* harmony import */ var _models_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../models/settings */ 6993);
/* harmony import */ var _services_api_settings_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/api/settings.service */ 1086);
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/message.service */ 6288);
/* harmony import */ var _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../utils/form-utils */ 5580);



















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
    constructor() {
      this.saveAttempt = false;
      this.fb = (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.inject)(_angular_forms__WEBPACK_IMPORTED_MODULE_10__.UntypedFormBuilder);
      this.settingsService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.inject)(_services_api_settings_service__WEBPACK_IMPORTED_MODULE_6__.SettingsService);
      this.appSettingsService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.inject)(_app_settings_service__WEBPACK_IMPORTED_MODULE_0__.AppSettingsService);
      this.messageService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.inject)(_services_message_service__WEBPACK_IMPORTED_MODULE_7__.MessageService);
      this.destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_9__.DestroyRef);
    }
    ngOnInit() {
      this.initDefaults();
      this.buildSelectItems();
      this.settingsService.getLibrarySettings().pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_11__.takeUntilDestroyed)(this.destroyRef)).subscribe({
        next: librarySettings => {
          this.buildForm(librarySettings);
        },
        error: () => this.messageService.showErrorMessage('Unable to get the library settings!')
      });
    }
    save() {
      this.saveAttempt = true;
      if (this.settingsForm.valid) {
        this.settingsService.updateLibrarySettings(this.getLibrarySettings()).pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_11__.takeUntilDestroyed)(this.destroyRef)).subscribe({
          next: () => {
            this.messageService.showSuccessMessage('Library settings saved.');
            this.appSettingsService.reload(); // reload app settings
          },

          error: () => this.messageService.showErrorMessage('Unable to save the library settings!')
        });
      } else {
        _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__.FormUtils.scrollToFirstInvalidField(this.settingsForm);
      }
    }
    initDefaults() {
      this.scanLibraryIntervalDefault = _app_settings_service__WEBPACK_IMPORTED_MODULE_0__.appSettings.scanLibraryIntervalDefault;
    }
    buildSelectItems() {
      // Enabled or disabled
      this.enabledOrDisabled = _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__.FormUtils.enabledOrDisabledSelectItems();
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
      const settings = new _models_settings__WEBPACK_IMPORTED_MODULE_5__.LibrarySettings();
      settings.libraryMode = _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__.FormUtils.getFormControlValue(this.settingsForm, 'libraryMode');
      settings.libraryPaths = _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__.FormUtils.getFormControlValue(this.settingsForm, 'libraryPaths');
      settings.scanLibraryInterval = _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__.FormUtils.getFormControlValue(this.settingsForm, 'scanLibraryInterval');
      settings.scanLibraryAtStartup = _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__.FormUtils.getFormControlValue(this.settingsForm, 'scanLibraryAtStartup');
      settings.libraryEditMode = _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__.FormUtils.getFormControlValue(this.settingsForm, 'libraryEditMode');
      return settings;
    }
  }
  SettingsLibraryComponent.ɵfac = function SettingsLibraryComponent_Factory(t) {
    return new (t || SettingsLibraryComponent)();
  };
  SettingsLibraryComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
    type: SettingsLibraryComponent,
    selectors: [["app-settings-library"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵStandaloneFeature"]],
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
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName, primeng_panel__WEBPACK_IMPORTED_MODULE_13__.PanelModule, primeng_panel__WEBPACK_IMPORTED_MODULE_13__.Panel, primeng_button__WEBPACK_IMPORTED_MODULE_14__.ButtonModule, primeng_button__WEBPACK_IMPORTED_MODULE_14__.Button, _components_icon_dropdown_icon_dropdown_component__WEBPACK_IMPORTED_MODULE_1__.IconDropdownComponent, _components_input_dropdown_input_dropdown_component__WEBPACK_IMPORTED_MODULE_2__.InputDropdownComponent, _components_input_multi_file_browser_input_multi_file_browser_component__WEBPACK_IMPORTED_MODULE_3__.InputMultiFileBrowserComponent, _components_input_number_input_number_component__WEBPACK_IMPORTED_MODULE_4__.InputNumberComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
  return SettingsLibraryComponent;
})();

/***/ }),

/***/ 1918:
/*!**********************************************************************!*\
  !*** ./src/app/pages/settings/logging/settings-logging.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsLoggingComponent: () => (/* binding */ SettingsLoggingComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 839);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/button */ 2947);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/panel */ 6110);
/* harmony import */ var _app_settings_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../app-settings.service */ 5751);
/* harmony import */ var _components_icon_dropdown_icon_dropdown_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/icon-dropdown/icon-dropdown.component */ 707);
/* harmony import */ var _components_input_dropdown_input_dropdown_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/input/dropdown/input-dropdown.component */ 5540);
/* harmony import */ var _components_input_number_input_number_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/input/number/input-number.component */ 6250);
/* harmony import */ var _components_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/input/text/input-text.component */ 8278);
/* harmony import */ var _models_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../models/settings */ 6993);
/* harmony import */ var _services_api_settings_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/api/settings.service */ 1086);
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/message.service */ 6288);
/* harmony import */ var _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../utils/form-utils */ 5580);
/* harmony import */ var _utils_form_validators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../utils/form-validators */ 1459);




















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
    constructor() {
      this.saveAttempt = false;
      this.fb = (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.inject)(_angular_forms__WEBPACK_IMPORTED_MODULE_11__.UntypedFormBuilder);
      this.settingsService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.inject)(_services_api_settings_service__WEBPACK_IMPORTED_MODULE_6__.SettingsService);
      this.appSettingsService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.inject)(_app_settings_service__WEBPACK_IMPORTED_MODULE_0__.AppSettingsService);
      this.messageService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.inject)(_services_message_service__WEBPACK_IMPORTED_MODULE_7__.MessageService);
      this.destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_10__.DestroyRef);
    }
    ngOnInit() {
      this.buildSelectItems();
      this.settingsService.getLogSettings().pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_12__.takeUntilDestroyed)(this.destroyRef)).subscribe({
        next: logSettings => {
          this.buildForm(logSettings);
        },
        error: () => this.messageService.showErrorMessage('Unable to get the log settings!')
      });
    }
    save() {
      this.saveAttempt = true;
      if (this.settingsForm.valid) {
        this.settingsService.updateLogSettings(this.getLogSettings()).pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_12__.takeUntilDestroyed)(this.destroyRef)).subscribe({
          next: () => {
            this.messageService.showSuccessMessage('Log settings saved.');
            this.appSettingsService.reload(); // reload app settings
          },

          error: () => this.messageService.showErrorMessage('Unable to save the log settings!')
        });
      } else {
        _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__.FormUtils.scrollToFirstInvalidField(this.settingsForm);
      }
    }
    buildSelectItems() {
      // Enabled or disabled
      this.enabledOrDisabled = _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__.FormUtils.enabledOrDisabledSelectItems();
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
        logFile: [logSettings.logFile, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _utils_form_validators__WEBPACK_IMPORTED_MODULE_9__.FormValidators.notEmpty]],
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
      const settings = new _models_settings__WEBPACK_IMPORTED_MODULE_5__.LogSettings();
      settings.logFile = _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__.FormUtils.getFormControlValue(this.settingsForm, 'logFile');
      settings.logLevel = _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__.FormUtils.getFormControlValue(this.settingsForm, 'logLevel');
      settings.logNum = _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__.FormUtils.getFormControlValue(this.settingsForm, 'logNum');
      settings.logSize = _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__.FormUtils.getFormControlValue(this.settingsForm, 'logSize');
      settings.logHttpAccess = _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__.FormUtils.getFormControlValue(this.settingsForm, 'logHttpAccess');
      settings.logExternalLibs = _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__.FormUtils.getFormControlValue(this.settingsForm, 'logExternalLibs');
      settings.logDetailedFormat = _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__.FormUtils.getFormControlValue(this.settingsForm, 'logDetailedFormat');
      settings.logReversed = _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__.FormUtils.getFormControlValue(this.settingsForm, 'logReversed');
      settings.logLevelConsole = _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__.FormUtils.getFormControlValue(this.settingsForm, 'logLevelConsole');
      return settings;
    }
  }
  SettingsLoggingComponent.ɵfac = function SettingsLoggingComponent_Factory(t) {
    return new (t || SettingsLoggingComponent)();
  };
  SettingsLoggingComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
    type: SettingsLoggingComponent,
    selectors: [["app-settings-logging"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵStandaloneFeature"]],
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
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControlName, primeng_panel__WEBPACK_IMPORTED_MODULE_14__.PanelModule, primeng_panel__WEBPACK_IMPORTED_MODULE_14__.Panel, primeng_button__WEBPACK_IMPORTED_MODULE_15__.ButtonModule, primeng_button__WEBPACK_IMPORTED_MODULE_15__.Button, _components_icon_dropdown_icon_dropdown_component__WEBPACK_IMPORTED_MODULE_1__.IconDropdownComponent, _components_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_4__.InputTextComponent, _components_input_dropdown_input_dropdown_component__WEBPACK_IMPORTED_MODULE_2__.InputDropdownComponent, _components_input_number_input_number_component__WEBPACK_IMPORTED_MODULE_3__.InputNumberComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
  return SettingsLoggingComponent;
})();

/***/ }),

/***/ 7914:
/*!******************************************************************************!*\
  !*** ./src/app/pages/settings/namemapping/settings-namemapping.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsNamemappingComponent: () => (/* binding */ SettingsNamemappingComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 839);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/button */ 2947);
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/message */ 7736);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/panel */ 6110);
/* harmony import */ var _app_settings_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../app-settings.service */ 5751);
/* harmony import */ var _components_icon_dropdown_icon_dropdown_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/icon-dropdown/icon-dropdown.component */ 707);
/* harmony import */ var _components_input_multi_text_input_multi_text_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/input/multi-text/input-multi-text.component */ 5620);
/* harmony import */ var _models_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/settings */ 6993);
/* harmony import */ var _services_api_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/api/settings.service */ 1086);
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/message.service */ 6288);
/* harmony import */ var _utils_form_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils/form-utils */ 5580);



















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
    constructor() {
      this.saveAttempt = false;
      this.fb = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.inject)(_angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormBuilder);
      this.settingsService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.inject)(_services_api_settings_service__WEBPACK_IMPORTED_MODULE_4__.SettingsService);
      this.appSettingsService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.inject)(_app_settings_service__WEBPACK_IMPORTED_MODULE_0__.AppSettingsService);
      this.messageService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.inject)(_services_message_service__WEBPACK_IMPORTED_MODULE_5__.MessageService);
      this.destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_7__.DestroyRef);
    }
    ngOnInit() {
      this.settingsService.getNameMappingSettings().pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_9__.takeUntilDestroyed)(this.destroyRef)).subscribe({
        next: nameMappingSettings => {
          this.buildForm(nameMappingSettings);
        },
        error: () => this.messageService.showErrorMessage('Unable to get the namemapping settings!')
      });
    }
    save() {
      this.saveAttempt = true;
      if (this.settingsForm.valid) {
        this.settingsService.updateNameMappingSettings(this.getNameMappingSettings()).pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_9__.takeUntilDestroyed)(this.destroyRef)).subscribe({
          next: () => {
            this.messageService.showSuccessMessage('Namemapping settings saved.');
            this.appSettingsService.reload(); // reload app settings
          },

          error: () => this.messageService.showErrorMessage('Unable to save the namemapping settings!')
        });
      } else {
        _utils_form_utils__WEBPACK_IMPORTED_MODULE_6__.FormUtils.scrollToFirstInvalidField(this.settingsForm);
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
      const settings = new _models_settings__WEBPACK_IMPORTED_MODULE_3__.NameMappingSettings();
      settings.showNameMapping = _utils_form_utils__WEBPACK_IMPORTED_MODULE_6__.FormUtils.getFormControlValue(this.settingsForm, 'showNameMapping');
      settings.addic7edShowNameMapping = _utils_form_utils__WEBPACK_IMPORTED_MODULE_6__.FormUtils.getFormControlValue(this.settingsForm, 'addic7edShowNameMapping');
      settings.alternativeShowNameMapping = _utils_form_utils__WEBPACK_IMPORTED_MODULE_6__.FormUtils.getFormControlValue(this.settingsForm, 'alternativeShowNameMapping');
      settings.movieNameMapping = _utils_form_utils__WEBPACK_IMPORTED_MODULE_6__.FormUtils.getFormControlValue(this.settingsForm, 'movieNameMapping');
      settings.alternativeMovieNameMapping = _utils_form_utils__WEBPACK_IMPORTED_MODULE_6__.FormUtils.getFormControlValue(this.settingsForm, 'alternativeMovieNameMapping');
      return settings;
    }
  }
  SettingsNamemappingComponent.ɵfac = function SettingsNamemappingComponent_Factory(t) {
    return new (t || SettingsNamemappingComponent)();
  };
  SettingsNamemappingComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: SettingsNamemappingComponent,
    selectors: [["app-settings-namemapping"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵStandaloneFeature"]],
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
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, primeng_panel__WEBPACK_IMPORTED_MODULE_11__.PanelModule, primeng_panel__WEBPACK_IMPORTED_MODULE_11__.Panel, primeng_button__WEBPACK_IMPORTED_MODULE_12__.ButtonModule, primeng_button__WEBPACK_IMPORTED_MODULE_12__.Button, primeng_message__WEBPACK_IMPORTED_MODULE_13__.MessageModule, primeng_message__WEBPACK_IMPORTED_MODULE_13__.UIMessage, _components_icon_dropdown_icon_dropdown_component__WEBPACK_IMPORTED_MODULE_1__.IconDropdownComponent, _components_input_multi_text_input_multi_text_component__WEBPACK_IMPORTED_MODULE_2__.InputMultiTextComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
  return SettingsNamemappingComponent;
})();

/***/ }),

/***/ 9031:
/*!********************************************************************************!*\
  !*** ./src/app/pages/settings/notification/settings-notification.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsNotificationComponent: () => (/* binding */ SettingsNotificationComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 839);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/button */ 2947);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/dialog */ 3311);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/inputtext */ 873);
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/message */ 7736);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/panel */ 6110);
/* harmony import */ var _app_settings_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../app-settings.service */ 5751);
/* harmony import */ var _components_icon_dropdown_icon_dropdown_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/icon-dropdown/icon-dropdown.component */ 707);
/* harmony import */ var _components_input_dropdown_input_dropdown_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/input/dropdown/input-dropdown.component */ 5540);
/* harmony import */ var _components_input_number_input_number_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/input/number/input-number.component */ 6250);
/* harmony import */ var _components_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/input/text/input-text.component */ 8278);
/* harmony import */ var _models_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../models/settings */ 6993);
/* harmony import */ var _services_api_settings_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/api/settings.service */ 1086);
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/message.service */ 6288);
/* harmony import */ var _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../utils/form-utils */ 5580);

























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
    constructor() {
      this.twitterRegistrationDialog = false;
      this.saveAttempt = false;
      this.fb = (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.inject)(_angular_forms__WEBPACK_IMPORTED_MODULE_10__.UntypedFormBuilder);
      this.settingsService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.inject)(_services_api_settings_service__WEBPACK_IMPORTED_MODULE_6__.SettingsService);
      this.appSettingsService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.inject)(_app_settings_service__WEBPACK_IMPORTED_MODULE_0__.AppSettingsService);
      this.messageService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.inject)(_services_message_service__WEBPACK_IMPORTED_MODULE_7__.MessageService);
      this.destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_9__.DestroyRef);
    }
    ngOnInit() {
      this.buildSelectItems();
      this.settingsService.getNotificationSettings().pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_11__.takeUntilDestroyed)(this.destroyRef)).subscribe({
        next: notificationSettings => {
          this.buildForm(notificationSettings);
        },
        error: () => this.messageService.showErrorMessage('Unable to get the notification settings!')
      });
    }
    save() {
      this.saveAttempt = true;
      if (this.settingsForm.valid) {
        this.settingsService.updateNotificationSettings(this.getNotificationSettings()).pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_11__.takeUntilDestroyed)(this.destroyRef)).subscribe({
          next: () => {
            this.messageService.showSuccessMessage('Notification settings saved.');
            this.appSettingsService.reload(); // reload app settings
          },

          error: () => this.messageService.showErrorMessage('Unable to save the notification settings!')
        });
      } else {
        _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__.FormUtils.scrollToFirstInvalidField(this.settingsForm);
      }
    }
    test(notifierName) {
      this.settingsService.testNotifier(notifierName).pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_11__.takeUntilDestroyed)(this.destroyRef)).subscribe({
        next: () => this.messageService.showSuccessMessage(`Test ${notifierName} notification sent.`),
        error: () => this.messageService.showErrorMessage(`Test ${notifierName} notification failed!`)
      });
    }
    registerTwitter() {
      this.settingsService.registerTwitter().pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_11__.takeUntilDestroyed)(this.destroyRef)).subscribe({
        next: twitterRegistration => {
          // Show dialog to finish the registration
          this.twitterRegistration = twitterRegistration;
          this.twitterRegistrationDialog = true;
        },
        error: () => this.messageService.showErrorMessage('Twitter registration failed!')
      });
    }
    authorizeTwitter() {
      this.settingsService.authorizeTwitter(this.twitterRegistration).pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_11__.takeUntilDestroyed)(this.destroyRef)).subscribe({
        next: twitterAuthorization => {
          // Update form with twitter key and secret
          _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__.FormUtils.setFormControlValue(this.settingsForm, 'twitterKey', twitterAuthorization.twitterKey);
          _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__.FormUtils.setFormControlValue(this.settingsForm, 'twitterSecret', twitterAuthorization.twitterSecret);
          this.messageService.showSuccessMessage('Twitter registration successful. Please save and test Twitter.');
        },
        error: () => this.messageService.showErrorMessage('Twitter authorization failed!')
      });
    }
    buildSelectItems() {
      // Enabled or disabled
      this.enabledOrDisabled = _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__.FormUtils.enabledOrDisabledSelectItems();
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
      const settings = new _models_settings__WEBPACK_IMPORTED_MODULE_5__.NotificationSettings();
      settings.notify = _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__.FormUtils.getFormControlValue(this.settingsForm, 'notify');
      settings.notifyMail = _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__.FormUtils.getFormControlValue(this.settingsForm, 'notifyMail');
      settings.mailServer = _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__.FormUtils.getFormControlValue(this.settingsForm, 'mailServer');
      settings.mailFromName = _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__.FormUtils.getFormControlValue(this.settingsForm, 'mailFromName');
      settings.mailFrom = _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__.FormUtils.getFormControlValue(this.settingsForm, 'mailFrom');
      settings.mailTo = _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__.FormUtils.getFormControlValue(this.settingsForm, 'mailTo');
      settings.mailUserName = _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__.FormUtils.getFormControlValue(this.settingsForm, 'mailUserName');
      settings.mailPassword = _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__.FormUtils.getFormControlValue(this.settingsForm, 'mailPassword');
      settings.mailSubject = _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__.FormUtils.getFormControlValue(this.settingsForm, 'mailSubject');
      settings.mailEncryption = _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__.FormUtils.getFormControlValue(this.settingsForm, 'mailEncryption');
      settings.mailAuthentication = _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__.FormUtils.getFormControlValue(this.settingsForm, 'mailAuthentication');
      settings.notifyTwitter = _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__.FormUtils.getFormControlValue(this.settingsForm, 'notifyTwitter');
      settings.twitterKey = _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__.FormUtils.getFormControlValue(this.settingsForm, 'twitterKey');
      settings.twitterSecret = _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__.FormUtils.getFormControlValue(this.settingsForm, 'twitterSecret');
      settings.notifyPushalot = _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__.FormUtils.getFormControlValue(this.settingsForm, 'notifyPushalot');
      settings.pushalotApi = _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__.FormUtils.getFormControlValue(this.settingsForm, 'pushalotApi');
      settings.notifyPushover = _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__.FormUtils.getFormControlValue(this.settingsForm, 'notifyPushover');
      settings.pushoverKey = _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__.FormUtils.getFormControlValue(this.settingsForm, 'pushoverKey');
      settings.pushoverApi = _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__.FormUtils.getFormControlValue(this.settingsForm, 'pushoverApi');
      settings.pushoverDevices = _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__.FormUtils.getFormControlValue(this.settingsForm, 'pushoverDevices');
      settings.notifyGrowl = _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__.FormUtils.getFormControlValue(this.settingsForm, 'notifyGrowl');
      settings.growlHost = _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__.FormUtils.getFormControlValue(this.settingsForm, 'growlHost');
      settings.growlPort = _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__.FormUtils.getFormControlValue(this.settingsForm, 'growlPort');
      settings.growlPassword = _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__.FormUtils.getFormControlValue(this.settingsForm, 'growlPassword');
      settings.growlPriority = _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__.FormUtils.getFormControlValue(this.settingsForm, 'growlPriority');
      settings.notifyProwl = _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__.FormUtils.getFormControlValue(this.settingsForm, 'notifyProwl');
      settings.prowlApi = _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__.FormUtils.getFormControlValue(this.settingsForm, 'prowlApi');
      settings.prowlPriority = _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__.FormUtils.getFormControlValue(this.settingsForm, 'prowlPriority');
      settings.notifyPushbullet = _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__.FormUtils.getFormControlValue(this.settingsForm, 'notifyPushbullet');
      settings.pushbulletApi = _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__.FormUtils.getFormControlValue(this.settingsForm, 'pushbulletApi');
      settings.notifyTelegram = _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__.FormUtils.getFormControlValue(this.settingsForm, 'notifyTelegram');
      settings.telegramBotApi = _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__.FormUtils.getFormControlValue(this.settingsForm, 'telegramBotApi');
      settings.telegramChatId = _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__.FormUtils.getFormControlValue(this.settingsForm, 'telegramChatId');
      return settings;
    }
  }
  SettingsNotificationComponent.ɵfac = function SettingsNotificationComponent_Factory(t) {
    return new (t || SettingsNotificationComponent)();
  };
  SettingsNotificationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
    type: SettingsNotificationComponent,
    selectors: [["app-settings-notification"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵStandaloneFeature"]],
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
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName, primeng_panel__WEBPACK_IMPORTED_MODULE_13__.PanelModule, primeng_panel__WEBPACK_IMPORTED_MODULE_13__.Panel, primeng_button__WEBPACK_IMPORTED_MODULE_14__.ButtonModule, primeng_button__WEBPACK_IMPORTED_MODULE_14__.Button, primeng_dialog__WEBPACK_IMPORTED_MODULE_15__.DialogModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_15__.Dialog, primeng_inputtext__WEBPACK_IMPORTED_MODULE_16__.InputTextModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_16__.InputText, primeng_message__WEBPACK_IMPORTED_MODULE_17__.MessageModule, primeng_message__WEBPACK_IMPORTED_MODULE_17__.UIMessage, _components_icon_dropdown_icon_dropdown_component__WEBPACK_IMPORTED_MODULE_1__.IconDropdownComponent, _components_input_dropdown_input_dropdown_component__WEBPACK_IMPORTED_MODULE_2__.InputDropdownComponent, _components_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_4__.InputTextComponent, _components_input_number_input_number_component__WEBPACK_IMPORTED_MODULE_3__.InputNumberComponent],
    styles: [".notifier-icon[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n  position: absolute;\n  height: 1.5rem;\n  width: 1.5rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvc2V0dGluZ3Mvbm90aWZpY2F0aW9uL3NldHRpbmdzLW5vdGlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBRTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiICAubm90aWZpZXItaWNvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaGVpZ2h0OiAxLjVyZW07XHJcbiAgICB3aWR0aDogMS41cmVtO1xyXG4gIH1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
  return SettingsNotificationComponent;
})();

/***/ }),

/***/ 3623:
/*!************************************************************************************!*\
  !*** ./src/app/pages/settings/postprocessing/settings-postprocessing.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsPostprocessingComponent: () => (/* binding */ SettingsPostprocessingComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 839);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/button */ 2947);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/panel */ 6110);
/* harmony import */ var _app_settings_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../app-settings.service */ 5751);
/* harmony import */ var _components_icon_dropdown_icon_dropdown_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/icon-dropdown/icon-dropdown.component */ 707);
/* harmony import */ var _components_input_dropdown_input_dropdown_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/input/dropdown/input-dropdown.component */ 5540);
/* harmony import */ var _components_input_file_browser_input_file_browser_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/input/file-browser/input-file-browser.component */ 7183);
/* harmony import */ var _components_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/input/text/input-text.component */ 8278);
/* harmony import */ var _models_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../models/settings */ 6993);
/* harmony import */ var _services_api_settings_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/api/settings.service */ 1086);
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/message.service */ 6288);
/* harmony import */ var _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../utils/form-utils */ 5580);



















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
    constructor() {
      this.saveAttempt = false;
      this.fb = (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.inject)(_angular_forms__WEBPACK_IMPORTED_MODULE_10__.UntypedFormBuilder);
      this.settingsService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.inject)(_services_api_settings_service__WEBPACK_IMPORTED_MODULE_6__.SettingsService);
      this.appSettingsService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.inject)(_app_settings_service__WEBPACK_IMPORTED_MODULE_0__.AppSettingsService);
      this.messageService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.inject)(_services_message_service__WEBPACK_IMPORTED_MODULE_7__.MessageService);
      this.destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_9__.DestroyRef);
    }
    ngOnInit() {
      this.buildSelectItems();
      this.settingsService.getPostProcessSettings().pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_11__.takeUntilDestroyed)(this.destroyRef)).subscribe({
        next: postProcessSettings => {
          this.buildForm(postProcessSettings);
        },
        error: () => this.messageService.showErrorMessage('Unable to get the postprocessing settings!')
      });
    }
    save() {
      this.saveAttempt = true;
      if (this.settingsForm.valid) {
        this.settingsService.updatePostProcessSettings(this.getPostProcessSettings()).pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_11__.takeUntilDestroyed)(this.destroyRef)).subscribe({
          next: () => {
            this.messageService.showSuccessMessage('Postprocessing settings saved.');
            this.appSettingsService.reload(); // reload app settings
          },

          error: () => this.messageService.showErrorMessage('Unable to save the postprocessing settings!')
        });
      } else {
        _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__.FormUtils.scrollToFirstInvalidField(this.settingsForm);
      }
    }
    buildSelectItems() {
      // Enabled or disabled
      this.enabledOrDisabled = _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__.FormUtils.enabledOrDisabledSelectItems();
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
      const settings = new _models_settings__WEBPACK_IMPORTED_MODULE_5__.PostProcessSettings();
      settings.postProcess = _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__.FormUtils.getFormControlValue(this.settingsForm, 'postProcess');
      settings.postProcessIndividual = _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__.FormUtils.getFormControlValue(this.settingsForm, 'postProcessIndividual');
      settings.postProcessUtf8Encoding = _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__.FormUtils.getFormControlValue(this.settingsForm, 'postProcessUtf8Encoding');
      settings.showPostProcessCmd = _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__.FormUtils.getFormControlValue(this.settingsForm, 'showPostProcessCmd');
      settings.showPostProcessArgs = _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__.FormUtils.getFormControlValue(this.settingsForm, 'showPostProcessArgs');
      settings.moviePostProcessCmd = _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__.FormUtils.getFormControlValue(this.settingsForm, 'moviePostProcessCmd');
      settings.moviePostProcessArgs = _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__.FormUtils.getFormControlValue(this.settingsForm, 'moviePostProcessArgs');
      return settings;
    }
  }
  SettingsPostprocessingComponent.ɵfac = function SettingsPostprocessingComponent_Factory(t) {
    return new (t || SettingsPostprocessingComponent)();
  };
  SettingsPostprocessingComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
    type: SettingsPostprocessingComponent,
    selectors: [["app-settings-postprocessing"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵStandaloneFeature"]],
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
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName, primeng_panel__WEBPACK_IMPORTED_MODULE_13__.PanelModule, primeng_panel__WEBPACK_IMPORTED_MODULE_13__.Panel, primeng_button__WEBPACK_IMPORTED_MODULE_14__.ButtonModule, primeng_button__WEBPACK_IMPORTED_MODULE_14__.Button, _components_icon_dropdown_icon_dropdown_component__WEBPACK_IMPORTED_MODULE_1__.IconDropdownComponent, _components_input_dropdown_input_dropdown_component__WEBPACK_IMPORTED_MODULE_2__.InputDropdownComponent, _components_input_file_browser_input_file_browser_component__WEBPACK_IMPORTED_MODULE_3__.InputFileBrowserComponent, _components_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_4__.InputTextComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
  return SettingsPostprocessingComponent;
})();

/***/ }),

/***/ 9266:
/*!***************************************************!*\
  !*** ./src/app/pages/settings/settings.routes.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _general_settings_general_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./general/settings-general.component */ 5694);
/* harmony import */ var _library_settings_library_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./library/settings-library.component */ 6728);
/* harmony import */ var _logging_settings_logging_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logging/settings-logging.component */ 1918);
/* harmony import */ var _namemapping_settings_namemapping_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./namemapping/settings-namemapping.component */ 7914);
/* harmony import */ var _notification_settings_notification_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notification/settings-notification.component */ 9031);
/* harmony import */ var _postprocessing_settings_postprocessing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./postprocessing/settings-postprocessing.component */ 3623);
/* harmony import */ var _skipmapping_settings_skipmapping_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./skipmapping/settings-skipmapping.component */ 1229);
/* harmony import */ var _subliminal_settings_subliminal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./subliminal/settings-subliminal.component */ 2883);
/* harmony import */ var _webserver_settings_webserver_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./webserver/settings-webserver.component */ 319);









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
// Use default export for simplified lazy loading (https://angular.io/guide/standalone-components#lazy-loading-and-default-exports)
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (routes);

/***/ }),

/***/ 1229:
/*!******************************************************************************!*\
  !*** ./src/app/pages/settings/skipmapping/settings-skipmapping.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsSkipmappingComponent: () => (/* binding */ SettingsSkipmappingComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 839);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/button */ 2947);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/panel */ 6110);
/* harmony import */ var _app_settings_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../app-settings.service */ 5751);
/* harmony import */ var _components_icon_dropdown_icon_dropdown_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/icon-dropdown/icon-dropdown.component */ 707);
/* harmony import */ var _components_input_multi_text_input_multi_text_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/input/multi-text/input-multi-text.component */ 5620);
/* harmony import */ var _models_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/settings */ 6993);
/* harmony import */ var _services_api_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/api/settings.service */ 1086);
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/message.service */ 6288);
/* harmony import */ var _utils_form_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils/form-utils */ 5580);

















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
    constructor() {
      this.saveAttempt = false;
      this.fb = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.inject)(_angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormBuilder);
      this.settingsService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.inject)(_services_api_settings_service__WEBPACK_IMPORTED_MODULE_4__.SettingsService);
      this.appSettingsService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.inject)(_app_settings_service__WEBPACK_IMPORTED_MODULE_0__.AppSettingsService);
      this.messageService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.inject)(_services_message_service__WEBPACK_IMPORTED_MODULE_5__.MessageService);
      this.destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_7__.DestroyRef);
    }
    ngOnInit() {
      this.settingsService.getSkipMappingSettings().pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_9__.takeUntilDestroyed)(this.destroyRef)).subscribe({
        next: skipMappingSettings => {
          this.buildForm(skipMappingSettings);
        },
        error: () => this.messageService.showErrorMessage('Unable to get the skipmapping settings!')
      });
    }
    save() {
      this.saveAttempt = true;
      if (this.settingsForm.valid) {
        this.settingsService.updateSkipMappingSettings(this.getSkipMappingSettings()).pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_9__.takeUntilDestroyed)(this.destroyRef)).subscribe({
          next: () => {
            this.messageService.showSuccessMessage('Skipmapping settings saved.');
            this.appSettingsService.reload(); // reload app settings
          },

          error: () => this.messageService.showErrorMessage('Unable to save the skipmapping settings!')
        });
      } else {
        _utils_form_utils__WEBPACK_IMPORTED_MODULE_6__.FormUtils.scrollToFirstInvalidField(this.settingsForm);
      }
    }
    buildForm(skipMappingSettings) {
      this.settingsForm = this.fb.group({
        skipShowMapping: [skipMappingSettings.skipShowMapping || [], []],
        skipMovieMapping: [skipMappingSettings.skipMovieMapping || [], []]
      });
    }
    getSkipMappingSettings() {
      const settings = new _models_settings__WEBPACK_IMPORTED_MODULE_3__.SkipMappingSettings();
      settings.skipShowMapping = _utils_form_utils__WEBPACK_IMPORTED_MODULE_6__.FormUtils.getFormControlValue(this.settingsForm, 'skipShowMapping');
      settings.skipMovieMapping = _utils_form_utils__WEBPACK_IMPORTED_MODULE_6__.FormUtils.getFormControlValue(this.settingsForm, 'skipMovieMapping');
      return settings;
    }
  }
  SettingsSkipmappingComponent.ɵfac = function SettingsSkipmappingComponent_Factory(t) {
    return new (t || SettingsSkipmappingComponent)();
  };
  SettingsSkipmappingComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: SettingsSkipmappingComponent,
    selectors: [["app-settings-skipmapping"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵStandaloneFeature"]],
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
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, primeng_panel__WEBPACK_IMPORTED_MODULE_11__.PanelModule, primeng_panel__WEBPACK_IMPORTED_MODULE_11__.Panel, primeng_button__WEBPACK_IMPORTED_MODULE_12__.ButtonModule, primeng_button__WEBPACK_IMPORTED_MODULE_12__.Button, _components_icon_dropdown_icon_dropdown_component__WEBPACK_IMPORTED_MODULE_1__.IconDropdownComponent, _components_input_multi_text_input_multi_text_component__WEBPACK_IMPORTED_MODULE_2__.InputMultiTextComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
  return SettingsSkipmappingComponent;
})();

/***/ }),

/***/ 2883:
/*!****************************************************************************!*\
  !*** ./src/app/pages/settings/subliminal/settings-subliminal.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsSubliminalComponent: () => (/* binding */ SettingsSubliminalComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 839);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/button */ 2947);
/* harmony import */ var primeng_listbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/listbox */ 9605);
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/message */ 7736);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/panel */ 6110);
/* harmony import */ var _app_settings_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../app-settings.service */ 5751);
/* harmony import */ var _components_icon_dropdown_icon_dropdown_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/icon-dropdown/icon-dropdown.component */ 707);
/* harmony import */ var _components_input_dropdown_input_dropdown_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/input/dropdown/input-dropdown.component */ 5540);
/* harmony import */ var _components_input_switch_input_switch_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/input/switch/input-switch.component */ 8681);
/* harmony import */ var _components_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/input/text/input-text.component */ 8278);
/* harmony import */ var _models_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../models/settings */ 6993);
/* harmony import */ var _services_api_settings_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/api/settings.service */ 1086);
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/message.service */ 6288);
/* harmony import */ var _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../utils/form-utils */ 5580);























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
    constructor() {
      this.saveAttempt = false;
      this.fb = (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.inject)(_angular_forms__WEBPACK_IMPORTED_MODULE_10__.UntypedFormBuilder);
      this.settingsService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.inject)(_services_api_settings_service__WEBPACK_IMPORTED_MODULE_6__.SettingsService);
      this.appSettingsService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.inject)(_app_settings_service__WEBPACK_IMPORTED_MODULE_0__.AppSettingsService);
      this.messageService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.inject)(_services_message_service__WEBPACK_IMPORTED_MODULE_7__.MessageService);
      this.destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_9__.DestroyRef);
    }
    ngOnInit() {
      this.buildSelectItems();
      this.settingsService.getSubliminalSettings().pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_11__.takeUntilDestroyed)(this.destroyRef)).subscribe({
        next: subliminalSettings => {
          this.buildForm(subliminalSettings);
        },
        error: () => this.messageService.showErrorMessage('Unable to get the subliminal settings!')
      });
    }
    save() {
      this.saveAttempt = true;
      if (this.settingsForm.valid) {
        this.settingsService.updateSubliminalSettings(this.getSubliminalSettings()).pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_11__.takeUntilDestroyed)(this.destroyRef)).subscribe({
          next: () => {
            this.messageService.showSuccessMessage('Subliminal settings saved.');
            this.appSettingsService.reload(); // reload app settings
          },

          error: () => this.messageService.showErrorMessage('Unable to save the subliminal settings!')
        });
      } else {
        _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__.FormUtils.scrollToFirstInvalidField(this.settingsForm);
      }
    }
    buildSelectItems() {
      // Enabled or disabled
      this.enabledOrDisabled = _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__.FormUtils.enabledOrDisabledSelectItems();
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
      const settings = new _models_settings__WEBPACK_IMPORTED_MODULE_5__.SubliminalSettings();
      settings.showMatchSource = _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__.FormUtils.getFormControlValue(this.settingsForm, 'showMatchSource');
      settings.showMatchQuality = _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__.FormUtils.getFormControlValue(this.settingsForm, 'showMatchQuality');
      settings.showMatchCodec = _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__.FormUtils.getFormControlValue(this.settingsForm, 'showMatchCodec');
      settings.showMatchReleaseGroup = _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__.FormUtils.getFormControlValue(this.settingsForm, 'showMatchReleaseGroup');
      settings.movieMatchSource = _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__.FormUtils.getFormControlValue(this.settingsForm, 'movieMatchSource');
      settings.movieMatchQuality = _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__.FormUtils.getFormControlValue(this.settingsForm, 'movieMatchQuality');
      settings.movieMatchCodec = _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__.FormUtils.getFormControlValue(this.settingsForm, 'movieMatchCodec');
      settings.movieMatchReleaseGroup = _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__.FormUtils.getFormControlValue(this.settingsForm, 'movieMatchReleaseGroup');
      settings.subliminalProviders = _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__.FormUtils.getFormControlValue(this.settingsForm, 'subliminalProviders');
      settings.subtitleUtf8Encoding = _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__.FormUtils.getFormControlValue(this.settingsForm, 'subtitleUtf8Encoding');
      settings.refineVideo = _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__.FormUtils.getFormControlValue(this.settingsForm, 'refineVideo');
      settings.manualRefineVideo = _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__.FormUtils.getFormControlValue(this.settingsForm, 'manualRefineVideo');
      settings.preferHearingImpaired = _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__.FormUtils.getFormControlValue(this.settingsForm, 'preferHearingImpaired');
      settings.antiCaptchaClass = _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__.FormUtils.getFormControlValue(this.settingsForm, 'antiCaptchaClass');
      settings.antiCaptchaClientKey = _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__.FormUtils.getFormControlValue(this.settingsForm, 'antiCaptchaClientKey');
      settings.addic7edUserName = _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__.FormUtils.getFormControlValue(this.settingsForm, 'addic7edUserName');
      settings.addic7edPassword = _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__.FormUtils.getFormControlValue(this.settingsForm, 'addic7edPassword');
      settings.addic7edUserId = _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__.FormUtils.getFormControlValue(this.settingsForm, 'addic7edUserId');
      settings.opensubtitlesUserName = _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__.FormUtils.getFormControlValue(this.settingsForm, 'opensubtitlesUserName');
      settings.opensubtitlesPassword = _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__.FormUtils.getFormControlValue(this.settingsForm, 'opensubtitlesPassword');
      settings.legendastvUserName = _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__.FormUtils.getFormControlValue(this.settingsForm, 'legendastvUserName');
      settings.legendastvPassword = _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__.FormUtils.getFormControlValue(this.settingsForm, 'legendastvPassword');
      return settings;
    }
  }
  SettingsSubliminalComponent.ɵfac = function SettingsSubliminalComponent_Factory(t) {
    return new (t || SettingsSubliminalComponent)();
  };
  SettingsSubliminalComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
    type: SettingsSubliminalComponent,
    selectors: [["app-settings-subliminal"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵStandaloneFeature"]],
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
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName, primeng_panel__WEBPACK_IMPORTED_MODULE_13__.PanelModule, primeng_panel__WEBPACK_IMPORTED_MODULE_13__.Panel, primeng_message__WEBPACK_IMPORTED_MODULE_14__.MessageModule, primeng_message__WEBPACK_IMPORTED_MODULE_14__.UIMessage, primeng_button__WEBPACK_IMPORTED_MODULE_15__.ButtonModule, primeng_button__WEBPACK_IMPORTED_MODULE_15__.Button, primeng_listbox__WEBPACK_IMPORTED_MODULE_16__.ListboxModule, primeng_listbox__WEBPACK_IMPORTED_MODULE_16__.Listbox, _components_icon_dropdown_icon_dropdown_component__WEBPACK_IMPORTED_MODULE_1__.IconDropdownComponent, _components_input_switch_input_switch_component__WEBPACK_IMPORTED_MODULE_3__.InputSwitchComponent, _components_input_dropdown_input_dropdown_component__WEBPACK_IMPORTED_MODULE_2__.InputDropdownComponent, _components_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_4__.InputTextComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
  return SettingsSubliminalComponent;
})();

/***/ }),

/***/ 319:
/*!**************************************************************************!*\
  !*** ./src/app/pages/settings/webserver/settings-webserver.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsWebserverComponent: () => (/* binding */ SettingsWebserverComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 839);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/button */ 2947);
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/message */ 7736);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/panel */ 6110);
/* harmony import */ var _app_settings_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../app-settings.service */ 5751);
/* harmony import */ var _components_icon_dropdown_icon_dropdown_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/icon-dropdown/icon-dropdown.component */ 707);
/* harmony import */ var _components_input_dropdown_input_dropdown_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/input/dropdown/input-dropdown.component */ 5540);
/* harmony import */ var _components_input_number_input_number_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/input/number/input-number.component */ 6250);
/* harmony import */ var _components_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/input/text/input-text.component */ 8278);
/* harmony import */ var _models_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../models/settings */ 6993);
/* harmony import */ var _services_api_settings_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/api/settings.service */ 1086);
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/message.service */ 6288);
/* harmony import */ var _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../utils/form-utils */ 5580);
/* harmony import */ var _utils_form_validators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../utils/form-validators */ 1459);






















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
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("keyUpEvent", function SettingsWebserverComponent_form_2_Template_app_input_text_keyUpEvent_34_listener() {
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
    constructor() {
      this.saveAttempt = false;
      this.fb = (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.inject)(_angular_forms__WEBPACK_IMPORTED_MODULE_11__.UntypedFormBuilder);
      this.settingsService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.inject)(_services_api_settings_service__WEBPACK_IMPORTED_MODULE_6__.SettingsService);
      this.appSettingsService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.inject)(_app_settings_service__WEBPACK_IMPORTED_MODULE_0__.AppSettingsService);
      this.messageService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.inject)(_services_message_service__WEBPACK_IMPORTED_MODULE_7__.MessageService);
      this.destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_10__.DestroyRef);
    }
    ngOnInit() {
      this.buildSelectItems();
      this.settingsService.getWebServerSettings().pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_12__.takeUntilDestroyed)(this.destroyRef)).subscribe({
        next: webServerSettings => {
          this.buildForm(webServerSettings);
        },
        error: () => this.messageService.showErrorMessage('Unable to get the webserver settings!')
      });
    }
    formatWebRoot() {
      let webRoot = _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__.FormUtils.getFormControlValue(this.settingsForm, 'webRoot');
      if (webRoot) {
        if (!webRoot.startsWith('/')) {
          webRoot = `/${webRoot}`;
        }
        if (webRoot.endsWith('/')) {
          webRoot = webRoot.replace(new RegExp('/+$'), '');
        }
      }
      _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__.FormUtils.setFormControlValue(this.settingsForm, 'webRoot', webRoot);
    }
    save() {
      this.saveAttempt = true;
      if (this.settingsForm.valid) {
        this.settingsService.updateWebServerSettings(this.getWebServerSettings()).pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_12__.takeUntilDestroyed)(this.destroyRef)).subscribe({
          next: () => {
            this.messageService.showSuccessMessage('Webserver settings saved.');
            this.appSettingsService.reload(); // reload app settings
          },

          error: () => this.messageService.showErrorMessage('Unable to save the webserver settings!')
        });
      } else {
        _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__.FormUtils.scrollToFirstInvalidField(this.settingsForm);
      }
    }
    buildSelectItems() {
      // Enabled or disabled
      this.enabledOrDisabled = _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__.FormUtils.enabledOrDisabledSelectItems();
    }
    buildForm(webServerSettings) {
      this.settingsForm = this.fb.group({
        webServerIp: [webServerSettings.webServerIp, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _utils_form_validators__WEBPACK_IMPORTED_MODULE_9__.FormValidators.notEmpty]],
        webServerPort: [webServerSettings.webServerPort, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _utils_form_validators__WEBPACK_IMPORTED_MODULE_9__.FormValidators.notEmpty]],
        webRoot: [webServerSettings.webRoot, []],
        userName: [webServerSettings.userName, []],
        password: [webServerSettings.password, []],
        launchBrowser: [webServerSettings.launchBrowser, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]]
      });
    }
    getWebServerSettings() {
      const settings = new _models_settings__WEBPACK_IMPORTED_MODULE_5__.WebServerSettings();
      settings.webServerIp = _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__.FormUtils.getFormControlValue(this.settingsForm, 'webServerIp');
      settings.webServerPort = _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__.FormUtils.getFormControlValue(this.settingsForm, 'webServerPort');
      settings.webRoot = _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__.FormUtils.getFormControlValue(this.settingsForm, 'webRoot');
      settings.userName = _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__.FormUtils.getFormControlValue(this.settingsForm, 'userName');
      settings.password = _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__.FormUtils.getFormControlValue(this.settingsForm, 'password');
      settings.launchBrowser = _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__.FormUtils.getFormControlValue(this.settingsForm, 'launchBrowser');
      return settings;
    }
  }
  SettingsWebserverComponent.ɵfac = function SettingsWebserverComponent_Factory(t) {
    return new (t || SettingsWebserverComponent)();
  };
  SettingsWebserverComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
    type: SettingsWebserverComponent,
    selectors: [["app-settings-webserver"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵStandaloneFeature"]],
    decls: 3,
    vars: 1,
    consts: [[1, "container-lg"], ["header", "Webserver settings"], ["class", "form", 3, "formGroup", 4, "ngIf"], [1, "form", 3, "formGroup"], [1, "row", "form-row"], [1, "col-12", "form-row-notification"], ["severity", "warn", "text", "Changing webserver settings will result in no automatic reload! You'll need to change the url manually in order to reload correctly!", "styleClass", "w-100"], [1, "col-12", "col-sm-12", "col-md-4", "col-lg-4", "form-row-label"], ["for", "webServerIp", 1, "label"], [1, "col-12", "col-sm-12", "col-md-8", "col-lg-8"], ["formControlName", "webServerIp", "mask", "IP", 3, "dropSpecialCharacters", "validationFeedback"], ["for", "webServerPort", 1, "label"], ["formControlName", "webServerPort", 3, "showButtons", "validationFeedback"], ["for", "webRoot", 1, "label"], ["formControlName", "webRoot", 3, "validationFeedback", "keyUpEvent"], ["for", "userName", 1, "label"], ["formControlName", "userName", 3, "validationFeedback"], ["for", "password", 1, "label"], ["formControlName", "password", "type", "password", 3, "validationFeedback"], ["for", "launchBrowser", 1, "label"], ["formControlName", "launchBrowser", 3, "options"], [1, "row", "button-row"], [1, "col-12", "col-sm-12", "col-md-12", "col-lg-10"], ["label", "Save", 3, "onClick"]],
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
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControlName, primeng_panel__WEBPACK_IMPORTED_MODULE_14__.PanelModule, primeng_panel__WEBPACK_IMPORTED_MODULE_14__.Panel, primeng_button__WEBPACK_IMPORTED_MODULE_15__.ButtonModule, primeng_button__WEBPACK_IMPORTED_MODULE_15__.Button, primeng_message__WEBPACK_IMPORTED_MODULE_16__.MessageModule, primeng_message__WEBPACK_IMPORTED_MODULE_16__.UIMessage, _components_icon_dropdown_icon_dropdown_component__WEBPACK_IMPORTED_MODULE_1__.IconDropdownComponent, _components_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_4__.InputTextComponent, _components_input_number_input_number_component__WEBPACK_IMPORTED_MODULE_3__.InputNumberComponent, _components_input_dropdown_input_dropdown_component__WEBPACK_IMPORTED_MODULE_2__.InputDropdownComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
  return SettingsWebserverComponent;
})();

/***/ }),

/***/ 3351:
/*!****************************************************!*\
  !*** ./src/app/services/api/filesystem.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FileSystemService: () => (/* binding */ FileSystemService)
/* harmony export */ });
/* harmony import */ var _app_settings_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app-settings.service */ 5751);
/* harmony import */ var _api_service_template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api-service-template */ 8574);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);



let FileSystemService = /*#__PURE__*/(() => {
  class FileSystemService extends _api_service_template__WEBPACK_IMPORTED_MODULE_1__.ApiServiceTemplate {
    constructor() {
      super(...arguments);
      this.URL = `${_app_settings_service__WEBPACK_IMPORTED_MODULE_0__.appSettings.webRoot}/api/filesystem`;
    }
    browse(path = '', includeFiles = true, includeFolders = true) {
      const url = `${this.URL}?path=${path}&includeFiles=${includeFiles}&includeFolders=${includeFolders}`;
      return this.httpClient.get(url, this.options);
    }
  }
  FileSystemService.ɵfac = /*@__PURE__*/function () {
    let ɵFileSystemService_BaseFactory;
    return function FileSystemService_Factory(t) {
      return (ɵFileSystemService_BaseFactory || (ɵFileSystemService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](FileSystemService)))(t || FileSystemService);
    };
  }();
  FileSystemService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: FileSystemService,
    factory: FileSystemService.ɵfac,
    providedIn: 'root'
  });
  return FileSystemService;
})();

/***/ }),

/***/ 655:
/*!***********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/debounceTime.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   debounceTime: () => (/* binding */ debounceTime)
/* harmony export */ });
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 7777);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/lift */ 4114);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OperatorSubscriber */ 5678);



function debounceTime(dueTime, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.asyncScheduler) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_1__.operate)((source, subscriber) => {
    let activeTask = null;
    let lastValue = null;
    let lastTime = null;
    const emit = () => {
      if (activeTask) {
        activeTask.unsubscribe();
        activeTask = null;
        const value = lastValue;
        lastValue = null;
        subscriber.next(value);
      }
    };
    function emitWhenIdle() {
      const targetTime = lastTime + dueTime;
      const now = scheduler.now();
      if (now < targetTime) {
        activeTask = this.schedule(undefined, targetTime - now);
        subscriber.add(activeTask);
        return;
      }
      emit();
    }
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__.createOperatorSubscriber)(subscriber, value => {
      lastValue = value;
      lastTime = scheduler.now();
      if (!activeTask) {
        activeTask = scheduler.schedule(emitWhenIdle, dueTime);
        subscriber.add(activeTask);
      }
    }, () => {
      emit();
      subscriber.complete();
    }, undefined, () => {
      lastValue = activeTask = null;
    }));
  });
}

/***/ }),

/***/ 9605:
/*!***********************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-listbox.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LISTBOX_VALUE_ACCESSOR: () => (/* binding */ LISTBOX_VALUE_ACCESSOR),
/* harmony export */   Listbox: () => (/* binding */ Listbox),
/* harmony export */   ListboxModule: () => (/* binding */ ListboxModule)
/* harmony export */ });
/* harmony import */ var D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ 8026);
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/dom */ 4946);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/utils */ 5861);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/ripple */ 1339);
/* harmony import */ var primeng_icons_search__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/icons/search */ 9103);
/* harmony import */ var primeng_icons_check__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/icons/check */ 7613);
/* harmony import */ var primeng_scroller__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/scroller */ 1422);
















const _c0 = ["headerchkbox"];
const _c1 = ["filter"];
const _c2 = ["lastHiddenFocusableElement"];
const _c3 = ["firstHiddenFocusableElement"];
const _c4 = ["scroller"];
const _c5 = ["list"];
function Listbox_div_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
const _c6 = function (a0, a1) {
  return {
    $implicit: a0,
    options: a1
  };
};
function Listbox_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, Listbox_div_3_ng_container_2_Template, 1, 0, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.headerTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](2, _c6, ctx_r1.modelValue(), ctx_r1.visibleOptions()));
  }
}
function Listbox_div_4_div_1_ng_container_5_CheckIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "CheckIcon", 24);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("styleClass", "p-checkbox-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-hidden", true);
  }
}
function Listbox_div_4_div_1_ng_container_5_span_2_1_ng_template_0_Template(rf, ctx) {}
function Listbox_div_4_div_1_ng_container_5_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, Listbox_div_4_div_1_ng_container_5_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Listbox_div_4_div_1_ng_container_5_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, Listbox_div_4_div_1_ng_container_5_span_2_1_Template, 1, 0, null, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-hidden", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r18.checkIconTemplate);
  }
}
function Listbox_div_4_div_1_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, Listbox_div_4_div_1_ng_container_5_CheckIcon_1_Template, 1, 2, "CheckIcon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, Listbox_div_4_div_1_ng_container_5_span_2_Template, 2, 2, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r16.checkIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r16.checkIconTemplate);
  }
}
const _c7 = function (a0) {
  return {
    "p-checkbox-disabled": a0
  };
};
const _c8 = function (a0, a1, a2) {
  return {
    "p-highlight": a0,
    "p-focus": a1,
    "p-disabled": a2
  };
};
function Listbox_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function Listbox_div_4_div_1_Template_div_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r21.onToggleAll($event));
    })("keydown", function Listbox_div_4_div_1_Template_div_keydown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r23.onHeaderCheckboxKeyDown($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 18)(2, "input", 19, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("focus", function Listbox_div_4_div_1_Template_input_focus_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r24.onHeaderCheckboxFocus($event));
    })("blur", function Listbox_div_4_div_1_Template_input_blur_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r25.onHeaderCheckboxBlur($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, Listbox_div_4_div_1_ng_container_5_Template, 3, 2, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](8, _c7, ctx_r11.disabled || ctx_r11.toggleAllDisabled));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-p-hidden-accessible", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r11.disabled || ctx_r11.toggleAllDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("checked", ctx_r11.allSelected())("aria-label", ctx_r11.toggleAllAriaLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](10, _c8, ctx_r11.allSelected(), ctx_r11.headerCheckboxFocus, ctx_r11.disabled || ctx_r11.toggleAllDisabled));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-checked", ctx_r11.allSelected());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r11.allSelected());
  }
}
function Listbox_div_4_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
const _c9 = function (a0) {
  return {
    options: a0
  };
};
function Listbox_div_4_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, Listbox_div_4_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r12.filterTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c9, ctx_r12.filterOptions));
  }
}
function Listbox_div_4_ng_template_3_div_0_SearchIcon_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "SearchIcon", 24);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("styleClass", "p-listbox-filter-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-hidden", true);
  }
}
function Listbox_div_4_ng_template_3_div_0_span_4_1_ng_template_0_Template(rf, ctx) {}
function Listbox_div_4_ng_template_3_div_0_span_4_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, Listbox_div_4_ng_template_3_div_0_span_4_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Listbox_div_4_ng_template_3_div_0_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, Listbox_div_4_ng_template_3_div_0_span_4_1_Template, 1, 0, null, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-hidden", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r30.filterIconTemplate);
  }
}
function Listbox_div_4_ng_template_3_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29)(1, "input", 30, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function Listbox_div_4_ng_template_3_div_0_Template_input_input_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r34);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r33.onFilterChange($event));
    })("keydown", function Listbox_div_4_ng_template_3_div_0_Template_input_keydown_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r34);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r35.onFilterKeyDown($event));
    })("blur", function Listbox_div_4_ng_template_3_div_0_Template_input_blur_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r34);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r36.onFilterBlur($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, Listbox_div_4_ng_template_3_div_0_SearchIcon_3_Template, 1, 2, "SearchIcon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, Listbox_div_4_ng_template_3_div_0_span_4_Template, 2, 2, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r27._filterValue() || "")("disabled", ctx_r27.disabled)("tabindex", !ctx_r27.disabled && !ctx_r27.focused ? ctx_r27.tabindex : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-owns", ctx_r27.id + "_list")("aria-activedescendant", ctx_r27.focusedOptionId)("placeholder", ctx_r27.filterPlaceHolder)("aria-label", ctx_r27.ariaFilterLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r27.filterIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r27.filterIconTemplate);
  }
}
function Listbox_div_4_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, Listbox_div_4_ng_template_3_div_0_Template, 5, 9, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r14.filter);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-p-hidden-accessible", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r14.filterResultMessageText, " ");
  }
}
function Listbox_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, Listbox_div_4_div_1_Template, 6, 14, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, Listbox_div_4_ng_container_2_Template, 2, 4, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, Listbox_div_4_ng_template_3_Template, 3, 3, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.checkbox && ctx_r2.multiple && ctx_r2.showToggleAll);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.filterTemplate)("ngIfElse", _r13);
  }
}
function Listbox_p_scroller_6_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
function Listbox_p_scroller_6_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, Listbox_p_scroller_6_ng_template_2_ng_container_0_Template, 1, 0, "ng-container", 13);
  }
  if (rf & 2) {
    const items_r40 = ctx.$implicit;
    const scrollerOptions_r41 = ctx.options;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r5)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](2, _c6, items_r40, scrollerOptions_r41));
  }
}
function Listbox_p_scroller_6_ng_container_3_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
function Listbox_p_scroller_6_ng_container_3_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, Listbox_p_scroller_6_ng_container_3_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 13);
  }
  if (rf & 2) {
    const scrollerOptions_r44 = ctx.options;
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r43.loaderTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c9, scrollerOptions_r44));
  }
}
function Listbox_p_scroller_6_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, Listbox_p_scroller_6_ng_container_3_ng_template_1_Template, 1, 4, "ng-template", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
}
const _c10 = function (a0) {
  return {
    height: a0
  };
};
function Listbox_p_scroller_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p-scroller", 34, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onLazyLoad", function Listbox_p_scroller_6_Template_p_scroller_onLazyLoad_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r47);
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r46.onLazyLoad.emit($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, Listbox_p_scroller_6_ng_template_2_Template, 1, 5, "ng-template", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, Listbox_p_scroller_6_ng_container_3_Template, 2, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](9, _c10, ctx_r3.scrollHeight));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("items", ctx_r3.visibleOptions())("itemSize", ctx_r3.virtualScrollItemSize)("autoSize", true)("tabindex", -1)("lazy", ctx_r3.lazy)("options", ctx_r3.virtualScrollOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.loaderTemplate);
  }
}
function Listbox_ng_container_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
const _c11 = function () {
  return {};
};
function Listbox_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, Listbox_ng_container_7_ng_container_1_Template, 1, 0, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r5)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](3, _c6, ctx_r4.visibleOptions(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c11)));
  }
}
function Listbox_ng_template_8_ng_template_2_ng_container_0_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r59.getOptionGroupLabel(option_r55.optionGroup));
  }
}
function Listbox_ng_template_8_ng_template_2_ng_container_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
const _c12 = function (a0) {
  return {
    $implicit: a0
  };
};
function Listbox_ng_template_8_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, Listbox_ng_template_8_ng_template_2_ng_container_0_span_2_Template, 2, 1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, Listbox_ng_template_8_ng_template_2_ng_container_0_ng_container_3_Template, 1, 0, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const i_r56 = ctx_r63.index;
    const option_r55 = ctx_r63.$implicit;
    const scrollerOptions_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().options;
    const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c10, scrollerOptions_r50.itemSize + "px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("id", ctx_r57.id + "_" + ctx_r57.getOptionIndex(i_r56, scrollerOptions_r50));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r57.groupTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r57.groupTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c12, option_r55.optionGroup));
  }
}
function Listbox_ng_template_8_ng_template_2_ng_container_1_div_2_ng_container_2_CheckIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "CheckIcon", 24);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("styleClass", "p-checkbox-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-hidden", true);
  }
}
function Listbox_ng_template_8_ng_template_2_ng_container_1_div_2_ng_container_2_span_2_1_ng_template_0_Template(rf, ctx) {}
function Listbox_ng_template_8_ng_template_2_ng_container_1_div_2_ng_container_2_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, Listbox_ng_template_8_ng_template_2_ng_container_1_div_2_ng_container_2_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Listbox_ng_template_8_ng_template_2_ng_container_1_div_2_ng_container_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, Listbox_ng_template_8_ng_template_2_ng_container_1_div_2_ng_container_2_span_2_1_Template, 1, 0, null, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-hidden", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r69.checkIconTemplate);
  }
}
function Listbox_ng_template_8_ng_template_2_ng_container_1_div_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, Listbox_ng_template_8_ng_template_2_ng_container_1_div_2_ng_container_2_CheckIcon_1_Template, 1, 2, "CheckIcon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, Listbox_ng_template_8_ng_template_2_ng_container_1_div_2_ng_container_2_span_2_Template, 2, 2, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r67.checkIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r67.checkIconTemplate);
  }
}
const _c13 = function (a0) {
  return {
    "p-highlight": a0
  };
};
function Listbox_ng_template_8_ng_template_2_ng_container_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 45)(1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, Listbox_ng_template_8_ng_template_2_ng_container_1_div_2_ng_container_2_Template, 3, 2, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const option_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c7, ctx_r64.disabled || ctx_r64.isOptionDisabled(option_r55)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c13, ctx_r64.isSelected(option_r55)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r64.isSelected(option_r55));
  }
}
function Listbox_ng_template_8_ng_template_2_ng_container_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r65.getOptionLabel(option_r55));
  }
}
function Listbox_ng_template_8_ng_template_2_ng_container_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
const _c14 = function (a1, a2, a3) {
  return {
    "p-listbox-item": true,
    "p-highlight": a1,
    "p-focus": a2,
    "p-disabled": a3
  };
};
const _c15 = function (a0, a1) {
  return {
    $implicit: a0,
    index: a1
  };
};
function Listbox_ng_template_8_ng_template_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function Listbox_ng_template_8_ng_template_2_ng_container_1_Template_li_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r76);
      const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      const option_r55 = ctx_r75.$implicit;
      const i_r56 = ctx_r75.index;
      const scrollerOptions_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().options;
      const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r74.onOptionSelect($event, option_r55, ctx_r74.getOptionIndex(i_r56, scrollerOptions_r50)));
    })("dblclick", function Listbox_ng_template_8_ng_template_2_ng_container_1_Template_li_dblclick_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r76);
      const option_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r78.onOptionDoubleClick($event, option_r55));
    })("mousedown", function Listbox_ng_template_8_ng_template_2_ng_container_1_Template_li_mousedown_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r76);
      const i_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;
      const scrollerOptions_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().options;
      const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r80.onOptionMouseDown($event, ctx_r80.getOptionIndex(i_r56, scrollerOptions_r50)));
    })("mouseenter", function Listbox_ng_template_8_ng_template_2_ng_container_1_Template_li_mouseenter_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r76);
      const i_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;
      const scrollerOptions_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().options;
      const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r83.onOptionMouseEnter($event, ctx_r83.getOptionIndex(i_r56, scrollerOptions_r50)));
    })("touchend", function Listbox_ng_template_8_ng_template_2_ng_container_1_Template_li_touchend_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r76);
      const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r86.onOptionTouchEnd());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, Listbox_ng_template_8_ng_template_2_ng_container_1_div_2_Template, 3, 7, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, Listbox_ng_template_8_ng_template_2_ng_container_1_span_3_Template, 2, 1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, Listbox_ng_template_8_ng_template_2_ng_container_1_ng_container_4_Template, 1, 0, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const option_r55 = ctx_r88.$implicit;
    const i_r56 = ctx_r88.index;
    const scrollerOptions_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().options;
    const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](12, _c10, scrollerOptions_r50.itemSize + "px"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](14, _c14, ctx_r58.isSelected(option_r55), ctx_r58.focusedOptionIndex() === ctx_r58.getOptionIndex(i_r56, scrollerOptions_r50), ctx_r58.isOptionDisabled(option_r55)))("ariaPosInset", ctx_r58.getAriaPosInset(ctx_r58.getOptionIndex(i_r56, scrollerOptions_r50)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("id", ctx_r58.id + "_" + ctx_r58.getOptionIndex(i_r56, scrollerOptions_r50))("aria-label", ctx_r58.getOptionLabel(option_r55))("aria-selected", ctx_r58.isSelected(option_r55))("aria-disabled", ctx_r58.isOptionDisabled(option_r55))("aria-setsize", ctx_r58.ariaSetSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r58.checkbox && ctx_r58.multiple);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r58.itemTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r58.itemTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](18, _c15, option_r55, ctx_r58.getOptionIndex(i_r56, scrollerOptions_r50)));
  }
}
function Listbox_ng_template_8_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, Listbox_ng_template_8_ng_template_2_ng_container_0_Template, 4, 9, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, Listbox_ng_template_8_ng_template_2_ng_container_1_Template, 5, 21, "ng-container", 6);
  }
  if (rf & 2) {
    const option_r55 = ctx.$implicit;
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r52.isOptionGroup(option_r55));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r52.isOptionGroup(option_r55));
  }
}
function Listbox_ng_template_8_li_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r89.emptyFilterMessageText, " ");
  }
}
function Listbox_ng_template_8_li_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0, null, 48);
  }
}
function Listbox_ng_template_8_li_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, Listbox_ng_template_8_li_3_ng_container_1_Template, 2, 1, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, Listbox_ng_template_8_li_3_ng_container_2_Template, 2, 0, "ng-container", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r53.emptyFilterTemplate && !ctx_r53.emptyTemplate)("ngIfElse", ctx_r53.emptyFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r53.emptyFilterTemplate || ctx_r53.emptyTemplate);
  }
}
function Listbox_ng_template_8_li_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r92.emptyMessageText, " ");
  }
}
function Listbox_ng_template_8_li_4_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0, null, 49);
  }
}
function Listbox_ng_template_8_li_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, Listbox_ng_template_8_li_4_ng_container_1_Template, 2, 1, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, Listbox_ng_template_8_li_4_ng_container_2_Template, 2, 0, "ng-container", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r54.emptyTemplate)("ngIfElse", ctx_r54.empty);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r54.emptyTemplate);
  }
}
function Listbox_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r96 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 38, 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("focus", function Listbox_ng_template_8_Template_ul_focus_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r96);
      const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r95.onListFocus($event));
    })("blur", function Listbox_ng_template_8_Template_ul_blur_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r96);
      const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r97.onListBlur($event));
    })("keydown", function Listbox_ng_template_8_Template_ul_keydown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r96);
      const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r98.onListKeyDown($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, Listbox_ng_template_8_ng_template_2_Template, 2, 2, "ng-template", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, Listbox_ng_template_8_li_3_Template, 3, 3, "li", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, Listbox_ng_template_8_li_4_Template, 3, 3, "li", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const items_r49 = ctx.$implicit;
    const scrollerOptions_r50 = ctx.options;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](scrollerOptions_r50.contentStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("tabindex", -1)("ngClass", scrollerOptions_r50.contentStyleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-multiselectable", true)("aria-activedescendant", ctx_r6.focused ? ctx_r6.focusedOptionId : undefined)("aria-label", ctx_r6.ariaLabel)("aria-multiselectable", ctx_r6.multiple)("aria-disabled", ctx_r6.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", items_r49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.hasFilter() && ctx_r6.isEmpty());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r6.hasFilter() && ctx_r6.isEmpty());
  }
}
function Listbox_div_10_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
function Listbox_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, Listbox_div_10_ng_container_2_Template, 1, 0, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r7.footerTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](2, _c6, ctx_r7.modelValue(), ctx_r7.visibleOptions()));
  }
}
function Listbox_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r8.emptyMessageText, " ");
  }
}
const _c16 = [[["p-header"]], [["p-footer"]]];
const _c17 = ["p-header", "p-footer"];
const LISTBOX_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NG_VALUE_ACCESSOR,
  useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => Listbox),
  multi: true
};
/**
 * ListBox is used to select one or more values from a list of items.
 * @group Components
 */
let Listbox = /*#__PURE__*/(() => {
  class Listbox {
    /**
     * An array of selectitems to display as the available options.
     * @group Props
     */
    get options() {
      return this._options();
    }
    set options(val) {
      this._options.set(val);
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
     * Callback to invoke on value change.
     * @param {ListboxChangeEvent} event - Custom change event.
     * @group Emits
     */

    get containerClass() {
      return {
        'p-listbox p-component': true,
        'p-focus': this.focused,
        'p-disabled': this.disabled
      };
    }
    get focusedOptionId() {
      return this.focusedOptionIndex() !== -1 ? `${this.id}_${this.focusedOptionIndex()}` : null;
    }
    get filterResultMessageText() {
      return primeng_utils__WEBPACK_IMPORTED_MODULE_3__.ObjectUtils.isNotEmpty(this.visibleOptions()) ? this.filterMessageText.replaceAll('{0}', this.visibleOptions().length) : this.emptyFilterMessageText;
    }
    get filterMessageText() {
      return this.filterMessage || this.config.translation.searchMessage || '';
    }
    get searchMessageText() {
      return this.searchMessage || this.config.translation.searchMessage || '';
    }
    get emptyFilterMessageText() {
      return this.emptyFilterMessage || this.config.translation.emptySearchMessage || this.config.translation.emptyFilterMessage || '';
    }
    get selectionMessageText() {
      return this.selectionMessage || this.config.translation.selectionMessage || '';
    }
    get emptySelectionMessageText() {
      return this.emptySelectionMessage || this.config.translation.emptySelectionMessage || '';
    }
    get selectedMessageText() {
      return this.hasSelectedOption() ? this.selectionMessageText.replaceAll('{0}', this.multiple ? this.modelValue().length : '1') : this.emptySelectionMessageText;
    }
    get ariaSetSize() {
      return this.visibleOptions().filter(option => !this.isOptionGroup(option)).length;
    }
    get virtualScrollerDisabled() {
      return !this.virtualScroll;
    }
    get searchFields() {
      return this.filterFields || [this.optionLabel];
    }
    get toggleAllAriaLabel() {
      return this.config.translation.aria ? this.config.translation.aria[this.allSelected() ? 'selectAll' : 'unselectAll'] : undefined;
    }
    constructor(el, cd, filterService, config, renderer) {
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "el", void 0);
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "cd", void 0);
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "filterService", void 0);
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "config", void 0);
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "renderer", void 0);
      /**
       * Unique identifier of the component.
       * @group Props
       */
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "id", void 0);
      /**
       * Text to display when the search is active. Defaults to global value in i18n translation configuration.
       * @group Props
       * @defaultValue '{0} results are available'
       */
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "searchMessage", void 0);
      /**
       * Text to display when filtering does not return any results. Defaults to global value in i18n translation configuration.
       * @group Props
       * @defaultValue 'No selected item'
       */
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "emptySelectionMessage", void 0);
      /**
       * Text to be displayed in hidden accessible field when options are selected. Defaults to global value in i18n translation configuration.
       * @group Props
       * @defaultValue '{0} items selected'
       */
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "selectionMessage", void 0);
      /**
       * Whether to focus on the first visible or selected element when the overlay panel is shown.
       * @group Props
       */
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "autoOptionFocus", true);
      /**
       * When enabled, the focused option is selected.
       * @group Props
       */
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "selectOnFocus", void 0);
      /**
       * Locale to use in searching. The default locale is the host environment's current locale.
       * @group Props
       */
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "searchLocale", void 0);
      /**
       * When enabled, the hovered option will be focused.
       * @group Props
       */
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "focusOnHover", void 0);
      /**
       * Text to display when filtering.
       * @group Props
       */
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "filterMessage", void 0);
      /**
       * Fields used when filtering the options, defaults to optionLabel.
       * @group Props
       */
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "filterFields", void 0);
      /**
       * Defines if data is loaded and interacted with in lazy manner.
       * @group Props
       */
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "lazy", false);
      /**
       * Whether the data should be loaded on demand during scroll.
       * @group Props
       */
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "virtualScroll", void 0);
      /**
       * Height of an item in the list for VirtualScrolling.
       * @group Props
       */
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "virtualScrollItemSize", void 0);
      /**
       * Whether to use the scroller feature. The properties of scroller component can be used like an object in it.
       * @group Props
       */
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "virtualScrollOptions", void 0);
      /**
       * Height of the viewport in pixels, a scrollbar is defined if height of list exceeds this value.
       * @group Props
       */
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "scrollHeight", '200px');
      /**
       * Index of the element in tabbing order.
       * @group Props
       */
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "tabindex", 0);
      /**
       * When specified, allows selecting multiple values.
       * @group Props
       */
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "multiple", void 0);
      /**
       * Inline style of the container.
       * @group Props
       */
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "style", void 0);
      /**
       * Style class of the container.
       * @group Props
       */
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "styleClass", void 0);
      /**
       * Inline style of the list element.
       * @group Props
       */
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "listStyle", void 0);
      /**
       * Style class of the list element.
       * @group Props
       */
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "listStyleClass", void 0);
      /**
       * When present, it specifies that the element value cannot be changed.
       * @group Props
       */
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "readonly", void 0);
      /**
       * When present, it specifies that the element should be disabled.
       * @group Props
       */
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "disabled", void 0);
      /**
       * When specified, allows selecting items with checkboxes.
       * @group Props
       */
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "checkbox", false);
      /**
       * When specified, displays a filter input at header.
       * @group Props
       */
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "filter", false);
      /**
       * When filtering is enabled, filterBy decides which field or fields (comma separated) to search against.
       * @group Props
       */
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "filterBy", void 0);
      /**
       * Defines how the items are filtered.
       * @group Props
       */
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "filterMatchMode", 'contains');
      /**
       * Locale to use in filtering. The default locale is the host environment's current locale.
       * @group Props
       */
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "filterLocale", void 0);
      /**
       * Defines how multiple items can be selected, when true metaKey needs to be pressed to select or unselect an item and when set to false selection of each item can be toggled individually. On touch enabled devices, metaKeySelection is turned off automatically.
       * @group Props
       */
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "metaKeySelection", false);
      /**
       * A property to uniquely identify a value in options.
       * @group Props
       */
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "dataKey", void 0);
      /**
       * Whether header checkbox is shown in multiple mode.
       * @group Props
       */
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "showToggleAll", true);
      /**
       * Name of the label field of an option.
       * @group Props
       */
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "optionLabel", void 0);
      /**
       * Name of the value field of an option.
       * @group Props
       */
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "optionValue", void 0);
      /**
       * Name of the options field of an option group.
       * @group Props
       */
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "optionGroupChildren", 'items');
      /**
       * Name of the label field of an option group.
       * @group Props
       */
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "optionGroupLabel", 'label');
      /**
       * Name of the disabled field of an option.
       * @group Props
       */
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "optionDisabled", void 0);
      /**
       * Defines a string that labels the filter input.
       * @group Props
       */
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "ariaFilterLabel", void 0);
      /**
       * Defines placeholder of the filter input.
       * @group Props
       */
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "filterPlaceHolder", void 0);
      /**
       * Text to display when filtering does not return any results.
       * @group Props
       */
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "emptyFilterMessage", void 0);
      /**
       * Text to display when there is no data. Defaults to global value in i18n translation configuration.
       * @group Props
       */
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "emptyMessage", void 0);
      /**
       * Whether to display options as grouped when nested options are provided.
       * @group Props
       */
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "group", void 0);
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onChange", new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter());
      /**
       * Callback to invoke when option is clicked.
       * @param {ListboxClickEvent} event - Custom click event.
       * @group Emits
       */
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onClick", new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter());
      /**
       * Callback to invoke when option is double clicked.
       * @param {ListboxDoubleClickEvent} event - Custom double click event.
       * @group Emits
       */
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onDblClick", new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter());
      /**
       * Callback to invoke when data is filtered.
       * @param {ListboxFilterEvent} event - Custom filter event.
       * @group Emits
       */
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onFilter", new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter());
      /**
       * Callback to invoke when component receives focus.
       * @param {FocusEvent} event - Focus event.
       * @group Emits
       */
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onFocus", new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter());
      /**
       * Callback to invoke when component loses focus.
       * @param {FocusEvent} event - Blur event.
       * @group Emits
       */
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onBlur", new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter());
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "headerCheckboxViewChild", void 0);
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "filterViewChild", void 0);
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "lastHiddenFocusableElement", void 0);
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "firstHiddenFocusableElement", void 0);
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "scroller", void 0);
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "listViewChild", void 0);
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "headerFacet", void 0);
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "footerFacet", void 0);
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "templates", void 0);
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "itemTemplate", void 0);
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "groupTemplate", void 0);
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "headerTemplate", void 0);
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "filterTemplate", void 0);
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "footerTemplate", void 0);
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "emptyFilterTemplate", void 0);
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "emptyTemplate", void 0);
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "filterIconTemplate", void 0);
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "checkIconTemplate", void 0);
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_filterValue", (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(null));
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_filteredOptions", void 0);
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "filterOptions", void 0);
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "filtered", void 0);
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "value", void 0);
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onModelChange", () => {});
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onModelTouched", () => {});
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "optionTouched", void 0);
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "focus", void 0);
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "headerCheckboxFocus", void 0);
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "translationSubscription", void 0);
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "focused", void 0);
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "searchValue", void 0);
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "searchTimeout", void 0);
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_options", (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(null));
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "startRangeIndex", (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(-1));
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "focusedOptionIndex", (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(-1));
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "modelValue", (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(null));
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "visibleOptions", (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.computed)(() => {
        const options = this.group ? this.flatOptions(this._options()) : this._options() || [];
        return this._filterValue() ? this.filterService.filter(options, this.searchFields, this._filterValue(), this.filterMatchMode, this.filterLocale) : options;
      }));
      this.el = el;
      this.cd = cd;
      this.filterService = filterService;
      this.config = config;
      this.renderer = renderer;
    }
    ngOnInit() {
      this.id = this.id || (0,primeng_utils__WEBPACK_IMPORTED_MODULE_3__.UniqueComponentId)();
      this.translationSubscription = this.config.translationObserver.subscribe(() => {
        this.cd.markForCheck();
      });
      this.autoUpdateModel();
      if (this.filterBy) {
        this.filterOptions = {
          filter: value => this.onFilterChange(value),
          reset: () => this.resetFilter()
        };
      }
    }
    ngAfterContentInit() {
      this.templates.forEach(item => {
        switch (item.getType()) {
          case 'item':
            this.itemTemplate = item.template;
            break;
          case 'group':
            this.groupTemplate = item.template;
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
          case 'empty':
            this.emptyTemplate = item.template;
            break;
          case 'emptyfilter':
            this.emptyFilterTemplate = item.template;
            break;
          case 'filtericon':
            this.filterIconTemplate = item.template;
            break;
          case 'checkicon':
            this.checkIconTemplate = item.template;
            break;
          default:
            this.itemTemplate = item.template;
            break;
        }
      });
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
      if (this.selectOnFocus && this.autoOptionFocus && !this.hasSelectedOption() && !this.multiple) {
        const focusedOptionIndex = this.findFirstFocusedOptionIndex();
        this.focusedOptionIndex.set(focusedOptionIndex);
        this.onOptionSelect(null, this.visibleOptions()[this.focusedOptionIndex()]);
      }
    }
    updateModel(value, event) {
      this.value = value;
      this.modelValue.set(value);
      this.onModelChange(value);
      this.onChange.emit({
        originalEvent: event,
        value: this.value
      });
    }
    removeOption(option) {
      return this.modelValue().filter(val => !primeng_utils__WEBPACK_IMPORTED_MODULE_3__.ObjectUtils.equals(val, this.getOptionValue(option), this.equalityKey()));
    }
    onOptionSelect(event, option, index = -1) {
      if (this.disabled || this.isOptionDisabled(option)) {
        return;
      }
      event && this.onClick.emit({
        originalEvent: event,
        value: option
      });
      this.multiple ? this.onOptionSelectMultiple(event, option) : this.onOptionSelectSingle(event, option);
      this.optionTouched = false;
      index !== -1 && this.focusedOptionIndex.set(index);
    }
    onOptionSelectMultiple(event, option) {
      let selected = this.isSelected(option);
      let value = null;
      let metaSelection = this.optionTouched ? false : this.metaKeySelection;
      if (metaSelection) {
        let metaKey = event.metaKey || event.ctrlKey;
        if (selected) {
          value = metaKey ? this.removeOption(option) : [this.getOptionValue(option)];
        } else {
          value = metaKey ? this.modelValue() || [] : [];
          value = [...value, this.getOptionValue(option)];
        }
      } else {
        value = selected ? this.removeOption(option) : [...(this.modelValue() || []), this.getOptionValue(option)];
      }
      this.updateModel(value, event);
    }
    onOptionSelectSingle(event, option) {
      let selected = this.isSelected(option);
      let valueChanged = false;
      let value = null;
      let metaSelection = this.optionTouched ? false : this.metaKeySelection;
      if (metaSelection) {
        let metaKey = event.metaKey || event.ctrlKey;
        if (selected) {
          if (metaKey) {
            value = null;
            valueChanged = true;
          }
        } else {
          value = this.getOptionValue(option);
          valueChanged = true;
        }
      } else {
        value = selected ? null : this.getOptionValue(option);
        valueChanged = true;
      }
      if (valueChanged) {
        this.updateModel(value, event);
      }
    }
    onOptionSelectRange(event, start = -1, end = -1) {
      start === -1 && (start = this.findNearestSelectedOptionIndex(end, true));
      end === -1 && (end = this.findNearestSelectedOptionIndex(start));
      if (start !== -1 && end !== -1) {
        const rangeStart = Math.min(start, end);
        const rangeEnd = Math.max(start, end);
        const value = this.visibleOptions().slice(rangeStart, rangeEnd + 1).filter(option => this.isValidOption(option)).map(option => this.getOptionValue(option));
        this.updateModel(value, event);
      }
    }
    onToggleAll(event) {
      if (this.disabled || this.readonly) {
        return;
      }
      primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.focus(this.headerCheckboxViewChild.nativeElement);
      const value = this.allSelected() ? [] : this.visibleOptions().filter(option => this.isValidOption(option)).map(option => this.getOptionValue(option));
      this.updateModel(value, event);
      event.preventDefault();
      event.stopPropagation();
    }
    allSelected() {
      const allSelected = this.visibleOptions().length > 0 && this.visibleOptions().every(option => this.isOptionGroup(option) || this.isOptionDisabled(option) || this.isSelected(option));
      return primeng_utils__WEBPACK_IMPORTED_MODULE_3__.ObjectUtils.isNotEmpty(this.visibleOptions()) && allSelected;
    }
    onOptionTouchEnd() {
      if (this.disabled) {
        return;
      }
      this.optionTouched = true;
    }
    onOptionMouseDown(event, index) {
      this.changeFocusedOptionIndex(event, index);
    }
    onOptionMouseEnter(event, index) {
      if (this.focusOnHover) {
        this.changeFocusedOptionIndex(event, index);
      }
    }
    onOptionDoubleClick(event, option) {
      if (this.disabled || this.isOptionDisabled(option) || this.readonly) {
        return;
      }
      this.onDblClick.emit({
        originalEvent: event,
        option: option,
        value: this.value
      });
    }
    onFirstHiddenFocus(event) {
      primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.focus(this.listViewChild.nativeElement);
      const firstFocusableEl = primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.getFirstFocusableElement(this.el.nativeElement, ':not([data-p-hidden-focusable="true"])');
      this.lastHiddenFocusableElement.nativeElement.tabIndex = primeng_utils__WEBPACK_IMPORTED_MODULE_3__.ObjectUtils.isEmpty(firstFocusableEl) ? '-1' : undefined;
      this.firstHiddenFocusableElement.nativeElement.tabIndex = -1;
    }
    onLastHiddenFocus(event) {
      const relatedTarget = event.relatedTarget;
      if (relatedTarget === this.listViewChild.nativeElement) {
        const firstFocusableEl = primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.getFirstFocusableElement(this.el.nativeElement, ':not(.p-hidden-focusable)');
        primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.focus(firstFocusableEl);
        this.firstHiddenFocusableElement.nativeElement.tabIndex = undefined;
      } else {
        primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.focus(this.firstHiddenFocusableElement.nativeElement);
      }
      this.lastHiddenFocusableElement.nativeElement.tabIndex = -1;
    }
    onFocusout(event) {
      if (!this.el.nativeElement.contains(event.relatedTarget) && this.lastHiddenFocusableElement && this.firstHiddenFocusableElement) {
        this.firstHiddenFocusableElement.nativeElement.tabIndex = this.lastHiddenFocusableElement.nativeElement.tabIndex = undefined;
      }
    }
    onListFocus(event) {
      this.focused = true;
      const focusedOptionIndex = this.focusedOptionIndex() !== -1 ? this.focusedOptionIndex() : this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : -1;
      this.focusedOptionIndex.set(focusedOptionIndex);
      this.onFocus.emit(event);
    }
    onListBlur(event) {
      this.focused = false;
      this.focusedOptionIndex.set(-1);
      this.startRangeIndex.set(-1);
      this.searchValue = '';
    }
    onHeaderCheckboxFocus(event) {
      this.headerCheckboxFocus = true;
    }
    onHeaderCheckboxBlur() {
      this.headerCheckboxFocus = false;
    }
    onHeaderCheckboxKeyDown(event) {
      if (this.disabled) {
        event.preventDefault();
        return;
      }
      switch (event.code) {
        case 'Space':
          this.onToggleAll(event);
          break;
        case 'Enter':
          this.onToggleAll(event);
          break;
        case 'Tab':
          this.onHeaderCheckboxTabKeyDown(event);
          break;
        default:
          break;
      }
    }
    onHeaderCheckboxTabKeyDown(event) {
      primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.focus(this.listViewChild.nativeElement);
      event.preventDefault();
    }
    onFilterChange(event) {
      let value = event.target.value?.trim();
      this._filterValue.set(value);
      this.focusedOptionIndex.set(-1);
      this.startRangeIndex.set(-1);
      this.onFilter.emit({
        originalEvent: event,
        filter: this._filterValue()
      });
      !this.virtualScrollerDisabled && this.scroller.scrollToIndex(0);
    }
    onFilterBlur(event) {
      this.focusedOptionIndex.set(-1);
      this.startRangeIndex.set(-1);
    }
    onListKeyDown(event) {
      const metaKey = event.metaKey || event.ctrlKey;
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
        case 'PageDown':
          this.onPageDownKey(event);
          break;
        case 'PageUp':
          this.onPageUpKey(event);
          break;
        case 'Enter':
        case 'Space':
          this.onSpaceKey(event);
          break;
        case 'Tab':
          //NOOP
          break;
        case 'ShiftLeft':
        case 'ShiftRight':
          this.onShiftKey();
          break;
        default:
          if (this.multiple && event.code === 'KeyA' && metaKey) {
            const value = this.visibleOptions().filter(option => this.isValidOption(option)).map(option => this.getOptionValue(option));
            this.updateModel(value, event);
            event.preventDefault();
            break;
          }
          if (!metaKey && primeng_utils__WEBPACK_IMPORTED_MODULE_3__.ObjectUtils.isPrintableCharacter(event.key)) {
            this.searchOptions(event, event.key);
            event.preventDefault();
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
          this.onArrowUpKey(event);
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
        case 'ShiftLeft':
        case 'ShiftRight':
          this.onShiftKey();
          break;
        default:
          break;
      }
    }
    onArrowDownKey(event) {
      const optionIndex = this.focusedOptionIndex() !== -1 ? this.findNextOptionIndex(this.focusedOptionIndex()) : this.findFirstFocusedOptionIndex();
      if (this.multiple && event.shiftKey) {
        this.onOptionSelectRange(event, this.startRangeIndex(), optionIndex);
      }
      this.changeFocusedOptionIndex(event, optionIndex);
      event.preventDefault();
    }
    onArrowUpKey(event) {
      const optionIndex = this.focusedOptionIndex() !== -1 ? this.findPrevOptionIndex(this.focusedOptionIndex()) : this.findLastFocusedOptionIndex();
      if (this.multiple && event.shiftKey) {
        this.onOptionSelectRange(event, optionIndex, this.startRangeIndex());
      }
      this.changeFocusedOptionIndex(event, optionIndex);
      event.preventDefault();
    }
    onArrowLeftKey(event, pressedInInputText = false) {
      pressedInInputText && this.focusedOptionIndex.set(-1);
    }
    onHomeKey(event, pressedInInputText = false) {
      if (pressedInInputText) {
        event.currentTarget.setSelectionRange(0, 0);
        this.focusedOptionIndex.set(-1);
      } else {
        let metaKey = event.metaKey || event.ctrlKey;
        let optionIndex = this.findFirstOptionIndex();
        if (this.multiple && event.shiftKey && metaKey) {
          this.onOptionSelectRange(event, optionIndex, this.startRangeIndex());
        }
        this.changeFocusedOptionIndex(event, optionIndex);
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
        let metaKey = event.metaKey || event.ctrlKey;
        let optionIndex = this.findLastOptionIndex();
        if (this.multiple && event.shiftKey && metaKey) {
          this.onOptionSelectRange(event, this.startRangeIndex(), optionIndex);
        }
        this.changeFocusedOptionIndex(event, optionIndex);
      }
      event.preventDefault();
    }
    onPageDownKey(event) {
      this.scrollInView(0);
      event.preventDefault();
    }
    onPageUpKey(event) {
      this.scrollInView(this.visibleOptions().length - 1);
      event.preventDefault();
    }
    onEnterKey(event) {
      if (this.focusedOptionIndex() !== -1) {
        if (this.multiple && event.shiftKey) this.onOptionSelectRange(event, this.focusedOptionIndex());else this.onOptionSelect(event, this.visibleOptions()[this.focusedOptionIndex()]);
      }
      event.preventDefault();
    }
    onSpaceKey(event) {
      this.onEnterKey(event);
    }
    onShiftKey() {
      const focusedOptionIndex = this.focusedOptionIndex();
      this.startRangeIndex.set(focusedOptionIndex);
    }
    getOptionGroupChildren(optionGroup) {
      return this.optionGroupChildren ? primeng_utils__WEBPACK_IMPORTED_MODULE_3__.ObjectUtils.resolveFieldData(optionGroup, this.optionGroupChildren) : optionGroup.items;
    }
    getOptionGroupLabel(optionGroup) {
      return this.optionGroupLabel ? primeng_utils__WEBPACK_IMPORTED_MODULE_3__.ObjectUtils.resolveFieldData(optionGroup, this.optionGroupLabel) : optionGroup && optionGroup.label !== undefined ? optionGroup.label : optionGroup;
    }
    getOptionLabel(option) {
      return this.optionLabel ? primeng_utils__WEBPACK_IMPORTED_MODULE_3__.ObjectUtils.resolveFieldData(option, this.optionLabel) : option.label != undefined ? option.label : option;
    }
    getOptionIndex(index, scrollerOptions) {
      return this.virtualScrollerDisabled ? index : scrollerOptions && scrollerOptions.getItemOptions(index)['index'];
    }
    getOptionValue(option) {
      return this.optionValue ? primeng_utils__WEBPACK_IMPORTED_MODULE_3__.ObjectUtils.resolveFieldData(option, this.optionValue) : !this.optionLabel && option && option.value !== undefined ? option.value : option;
    }
    getAriaPosInset(index) {
      return (this.optionGroupLabel ? index - this.visibleOptions().slice(0, index).filter(option => this.isOptionGroup(option)).length : index) + 1;
    }
    hasSelectedOption() {
      return primeng_utils__WEBPACK_IMPORTED_MODULE_3__.ObjectUtils.isNotEmpty(this.modelValue());
    }
    isOptionGroup(option) {
      return this.optionGroupLabel && option.optionGroup && option.group;
    }
    changeFocusedOptionIndex(event, index) {
      if (this.focusedOptionIndex() !== index) {
        this.focusedOptionIndex.set(index);
        this.scrollInView();
        if (this.selectOnFocus && !this.multiple) {
          this.onOptionSelect(event, this.visibleOptions()[index]);
        }
      }
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
    scrollInView(index = -1) {
      const id = index !== -1 ? `${this.id}_${index}` : this.focusedOptionId;
      const element = primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.findSingle(this.listViewChild.nativeElement, `li[id="${id}"]`);
      if (element) {
        element.scrollIntoView && element.scrollIntoView({
          block: 'nearest',
          inline: 'nearest'
        });
      } else if (!this.virtualScrollerDisabled) {
        this.virtualScroll && this.scroller.scrollToIndex(index !== -1 ? index : this.focusedOptionIndex());
      }
    }
    findFirstOptionIndex() {
      return this.visibleOptions().findIndex(option => this.isValidOption(option));
    }
    findLastOptionIndex() {
      return primeng_utils__WEBPACK_IMPORTED_MODULE_3__.ObjectUtils.findLastIndex(this.visibleOptions(), option => this.isValidOption(option));
    }
    findFirstFocusedOptionIndex() {
      const selectedIndex = this.findFirstSelectedOptionIndex();
      return selectedIndex < 0 ? this.findFirstOptionIndex() : selectedIndex;
    }
    findLastFocusedOptionIndex() {
      const selectedIndex = this.findLastSelectedOptionIndex();
      return selectedIndex < 0 ? this.findLastOptionIndex() : selectedIndex;
    }
    findLastSelectedOptionIndex() {
      return this.hasSelectedOption() ? primeng_utils__WEBPACK_IMPORTED_MODULE_3__.ObjectUtils.findLastIndex(this.visibleOptions(), option => this.isValidSelectedOption(option)) : -1;
    }
    findNextOptionIndex(index) {
      const matchedOptionIndex = index < this.visibleOptions().length - 1 ? this.visibleOptions().slice(index + 1).findIndex(option => this.isValidOption(option)) : -1;
      return matchedOptionIndex > -1 ? matchedOptionIndex + index + 1 : index;
    }
    findNextSelectedOptionIndex(index) {
      const matchedOptionIndex = this.hasSelectedOption() && index < this.visibleOptions().length - 1 ? this.visibleOptions().slice(index + 1).findIndex(option => this.isValidSelectedOption(option)) : -1;
      return matchedOptionIndex > -1 ? matchedOptionIndex + index + 1 : -1;
    }
    findPrevSelectedOptionIndex(index) {
      const matchedOptionIndex = this.hasSelectedOption() && index > 0 ? primeng_utils__WEBPACK_IMPORTED_MODULE_3__.ObjectUtils.findLastIndex(this.visibleOptions().slice(0, index), option => this.isValidSelectedOption(option)) : -1;
      return matchedOptionIndex > -1 ? matchedOptionIndex : -1;
    }
    findFirstSelectedOptionIndex() {
      return this.hasSelectedOption() ? this.visibleOptions().findIndex(option => this.isValidSelectedOption(option)) : -1;
    }
    findPrevOptionIndex(index) {
      const matchedOptionIndex = index > 0 ? primeng_utils__WEBPACK_IMPORTED_MODULE_3__.ObjectUtils.findLastIndex(this.visibleOptions().slice(0, index), option => this.isValidOption(option)) : -1;
      return matchedOptionIndex > -1 ? matchedOptionIndex : index;
    }
    findNearestSelectedOptionIndex(index, firstCheckUp = false) {
      let matchedOptionIndex = -1;
      if (this.hasSelectedOption()) {
        if (firstCheckUp) {
          matchedOptionIndex = this.findPrevSelectedOptionIndex(index);
          matchedOptionIndex = matchedOptionIndex === -1 ? this.findNextSelectedOptionIndex(index) : matchedOptionIndex;
        } else {
          matchedOptionIndex = this.findNextSelectedOptionIndex(index);
          matchedOptionIndex = matchedOptionIndex === -1 ? this.findPrevSelectedOptionIndex(index) : matchedOptionIndex;
        }
      }
      return matchedOptionIndex > -1 ? matchedOptionIndex : index;
    }
    equalityKey() {
      return this.optionValue ? null : this.dataKey;
    }
    isValidSelectedOption(option) {
      return this.isValidOption(option) && this.isSelected(option);
    }
    isOptionDisabled(option) {
      return this.optionDisabled ? primeng_utils__WEBPACK_IMPORTED_MODULE_3__.ObjectUtils.resolveFieldData(option, this.optionDisabled) : false;
    }
    isSelected(option) {
      const optionValue = this.getOptionValue(option);
      if (this.multiple) return (this.modelValue() || []).some(value => primeng_utils__WEBPACK_IMPORTED_MODULE_3__.ObjectUtils.equals(value, optionValue, this.equalityKey()));else return primeng_utils__WEBPACK_IMPORTED_MODULE_3__.ObjectUtils.equals(this.modelValue(), optionValue, this.equalityKey());
    }
    isValidOption(option) {
      return option && !(this.isOptionDisabled(option) || this.isOptionGroup(option));
    }
    isEmpty() {
      return !this._options() || this._options() && this._options().length === 0;
    }
    hasFilter() {
      return this._filterValue() && this._filterValue().trim().length > 0;
    }
    resetFilter() {
      if (this.filterViewChild && this.filterViewChild.nativeElement) {
        this.filterViewChild.nativeElement.value = '';
      }
      this._filterValue.set(null);
    }
    ngOnDestroy() {
      if (this.translationSubscription) {
        this.translationSubscription.unsubscribe();
      }
    }
  }
  (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Listbox, "\u0275fac", function Listbox_Factory(t) {
    return new (t || Listbox)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_5__.FilterService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_5__.PrimeNGConfig), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2));
  });
  (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Listbox, "\u0275cmp", /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: Listbox,
    selectors: [["p-listbox"]],
    contentQueries: function Listbox_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_5__.Header, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_5__.Footer, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_5__.PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.headerFacet = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.footerFacet = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.templates = _t);
      }
    },
    viewQuery: function Listbox_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c3, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c5, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.headerCheckboxViewChild = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.filterViewChild = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.lastHiddenFocusableElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.firstHiddenFocusableElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.scroller = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.listViewChild = _t.first);
      }
    },
    hostAttrs: [1, "p-element"],
    inputs: {
      id: "id",
      searchMessage: "searchMessage",
      emptySelectionMessage: "emptySelectionMessage",
      selectionMessage: "selectionMessage",
      autoOptionFocus: "autoOptionFocus",
      selectOnFocus: "selectOnFocus",
      searchLocale: "searchLocale",
      focusOnHover: "focusOnHover",
      filterMessage: "filterMessage",
      filterFields: "filterFields",
      lazy: "lazy",
      virtualScroll: "virtualScroll",
      virtualScrollItemSize: "virtualScrollItemSize",
      virtualScrollOptions: "virtualScrollOptions",
      scrollHeight: "scrollHeight",
      tabindex: "tabindex",
      multiple: "multiple",
      style: "style",
      styleClass: "styleClass",
      listStyle: "listStyle",
      listStyleClass: "listStyleClass",
      readonly: "readonly",
      disabled: "disabled",
      checkbox: "checkbox",
      filter: "filter",
      filterBy: "filterBy",
      filterMatchMode: "filterMatchMode",
      filterLocale: "filterLocale",
      metaKeySelection: "metaKeySelection",
      dataKey: "dataKey",
      showToggleAll: "showToggleAll",
      optionLabel: "optionLabel",
      optionValue: "optionValue",
      optionGroupChildren: "optionGroupChildren",
      optionGroupLabel: "optionGroupLabel",
      optionDisabled: "optionDisabled",
      ariaFilterLabel: "ariaFilterLabel",
      filterPlaceHolder: "filterPlaceHolder",
      emptyFilterMessage: "emptyFilterMessage",
      emptyMessage: "emptyMessage",
      group: "group",
      options: "options",
      filterValue: "filterValue"
    },
    outputs: {
      onChange: "onChange",
      onClick: "onClick",
      onDblClick: "onDblClick",
      onFilter: "onFilter",
      onFocus: "onFocus",
      onBlur: "onBlur"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([LISTBOX_VALUE_ACCESSOR])],
    ngContentSelectors: _c17,
    decls: 16,
    vars: 24,
    consts: [[3, "ngClass", "ngStyle", "focusout"], ["role", "presentation", 1, "p-hidden-accessible", "p-hidden-focusable", 3, "tabindex", "focus"], ["firstHiddenFocusableElement", ""], ["class", "p-listbox-header", 4, "ngIf"], [3, "ngClass", "ngStyle"], [3, "items", "style", "itemSize", "autoSize", "tabindex", "lazy", "options", "onLazyLoad", 4, "ngIf"], [4, "ngIf"], ["buildInItems", ""], ["class", "p-listbox-footer", 4, "ngIf"], ["role", "status", "aria-live", "polite", "class", "p-hidden-accessible", 4, "ngIf"], ["role", "status", "aria-live", "polite", 1, "p-hidden-accessible"], ["lastHiddenFocusableElement", ""], [1, "p-listbox-header"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "p-checkbox p-component", 3, "ngClass", "click", "keydown", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["builtInFilterElement", ""], [1, "p-checkbox", "p-component", 3, "ngClass", "click", "keydown"], [1, "p-hidden-accessible"], ["type", "checkbox", "readonly", "readonly", 3, "disabled", "focus", "blur"], ["headerchkbox", ""], ["role", "checkbox", 1, "p-checkbox-box", 3, "ngClass"], [3, "styleClass", 4, "ngIf"], ["class", "p-checkbox-icon", 4, "ngIf"], [3, "styleClass"], [1, "p-checkbox-icon"], [4, "ngTemplateOutlet"], ["class", "p-listbox-filter-container", 4, "ngIf"], ["role", "status", "attr.aria-live", "polite", 1, "p-hidden-accessible"], [1, "p-listbox-filter-container"], ["type", "text", "role", "searchbox", 1, "p-listbox-filter", "p-inputtext", "p-component", 3, "value", "disabled", "tabindex", "input", "keydown", "blur"], ["filterInput", ""], ["class", "p-listbox-filter-icon", 4, "ngIf"], [1, "p-listbox-filter-icon"], [3, "items", "itemSize", "autoSize", "tabindex", "lazy", "options", "onLazyLoad"], ["scroller", ""], ["pTemplate", "content"], ["pTemplate", "loader"], ["role", "listbox", 1, "p-listbox-list", 3, "tabindex", "ngClass", "focus", "blur", "keydown"], ["list", ""], ["ngFor", "", 3, "ngForOf"], ["class", "p-listbox-empty-message", "role", "option", 4, "ngIf"], ["role", "option", 1, "p-listbox-item-group", 3, "ngStyle"], ["pRipple", "", "role", "option", 1, "p-listbox-item", 3, "ngStyle", "ngClass", "ariaPosInset", "click", "dblclick", "mousedown", "mouseenter", "touchend"], ["class", "p-checkbox p-component", 3, "ngClass", 4, "ngIf"], [1, "p-checkbox", "p-component", 3, "ngClass"], [1, "p-checkbox-box", 3, "ngClass"], ["role", "option", 1, "p-listbox-empty-message"], ["emptyFilter", ""], ["empty", ""], [1, "p-listbox-footer"]],
    template: function Listbox_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"](_c16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("focusout", function Listbox_Template_div_focusout_0_listener($event) {
          return ctx.onFocusout($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("focus", function Listbox_Template_span_focus_1_listener($event) {
          return ctx.onFirstHiddenFocus($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, Listbox_div_3_Template, 3, 5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, Listbox_div_4_Template, 5, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, Listbox_p_scroller_6_Template, 4, 11, "p-scroller", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, Listbox_ng_container_7_Template, 2, 6, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, Listbox_ng_template_8_Template, 5, 12, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, Listbox_div_10_Template, 3, 5, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, Listbox_span_11_Template, 2, 1, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 1, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("focus", function Listbox_Template_span_focus_14_listener($event) {
          return ctx.onLastHiddenFocus($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.styleClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.containerClass)("ngStyle", ctx.style);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("id", ctx.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("tabindex", !ctx.disabled ? ctx.tabindex : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-hidden", true)("data-p-hidden-focusable", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.headerFacet || ctx.headerTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.checkbox && ctx.multiple && ctx.showToggleAll || ctx.filter);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.listStyleClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("max-height", ctx.virtualScroll ? "auto" : ctx.scrollHeight || "auto");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", "p-listbox-list-wrapper")("ngStyle", ctx.listStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.virtualScroll);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.virtualScroll);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.footerFacet || ctx.footerTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isEmpty());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.selectedMessageText, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("tabindex", !ctx.disabled ? ctx.tabindex : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-hidden", true)("data-p-hidden-focusable", true);
      }
    },
    dependencies: function () {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgStyle, primeng_api__WEBPACK_IMPORTED_MODULE_5__.PrimeTemplate, primeng_ripple__WEBPACK_IMPORTED_MODULE_7__.Ripple, primeng_scroller__WEBPACK_IMPORTED_MODULE_8__.Scroller, primeng_icons_search__WEBPACK_IMPORTED_MODULE_9__.SearchIcon, primeng_icons_check__WEBPACK_IMPORTED_MODULE_10__.CheckIcon];
    },
    styles: ["@layer primeng{.p-listbox-list-wrapper{overflow:auto}.p-listbox-list{list-style-type:none;margin:0;padding:0}.p-listbox-item{cursor:pointer;position:relative;overflow:hidden;display:flex;align-items:center;-webkit-user-select:none;user-select:none}.p-listbox-header{display:flex;align-items:center}.p-listbox-filter-container{position:relative;flex:1 1 auto}.p-listbox-filter-icon{position:absolute;top:50%;margin-top:-.5rem}.p-listbox-filter{width:100%}}\n"],
    encapsulation: 2,
    changeDetection: 0
  }));
  return Listbox;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let ListboxModule = /*#__PURE__*/(() => {
  class ListboxModule {}
  (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ListboxModule, "\u0275fac", function ListboxModule_Factory(t) {
    return new (t || ListboxModule)();
  });
  (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ListboxModule, "\u0275mod", /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: ListboxModule
  }));
  (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ListboxModule, "\u0275inj", /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, primeng_api__WEBPACK_IMPORTED_MODULE_5__.SharedModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_7__.RippleModule, primeng_scroller__WEBPACK_IMPORTED_MODULE_8__.ScrollerModule, primeng_icons_search__WEBPACK_IMPORTED_MODULE_9__.SearchIcon, primeng_icons_check__WEBPACK_IMPORTED_MODULE_10__.CheckIcon, primeng_api__WEBPACK_IMPORTED_MODULE_5__.SharedModule, primeng_scroller__WEBPACK_IMPORTED_MODULE_8__.ScrollerModule]
  }));
  return ListboxModule;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 7736:
/*!***********************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-message.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MessageModule: () => (/* binding */ MessageModule),
/* harmony export */   UIMessage: () => (/* binding */ UIMessage)
/* harmony export */ });
/* harmony import */ var D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var primeng_icons_check__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/icons/check */ 7613);
/* harmony import */ var primeng_icons_exclamationtriangle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/icons/exclamationtriangle */ 4733);
/* harmony import */ var primeng_icons_infocircle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/icons/infocircle */ 3803);
/* harmony import */ var primeng_icons_timescircle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/icons/timescircle */ 7800);










/**
 * Message groups a collection of contents in tabs.
 * @group Components
 */
function UIMessage_CheckIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "CheckIcon", 4);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("styleClass", "p-inline-message-icon");
  }
}
function UIMessage_InfoCircleIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "InfoCircleIcon", 4);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("styleClass", "p-inline-message-icon");
  }
}
function UIMessage_TimesCircleIcon_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "TimesCircleIcon", 4);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("styleClass", "p-inline-message-icon");
  }
}
function UIMessage_ExclamationTriangleIcon_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ExclamationTriangleIcon", 4);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("styleClass", "p-inline-message-icon");
  }
}
function UIMessage_div_5_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 6);
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx_r7.text, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
  }
}
function UIMessage_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, UIMessage_div_5_span_1_Template, 1, 1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r4.escape);
  }
}
function UIMessage_ng_template_6_span_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r8.text);
  }
}
function UIMessage_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, UIMessage_ng_template_6_span_0_Template, 2, 1, "span", 7);
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.escape);
  }
}
const _c0 = function (a0, a1, a2, a3, a4) {
  return {
    "p-inline-message-info": a0,
    "p-inline-message-warn": a1,
    "p-inline-message-error": a2,
    "p-inline-message-success": a3,
    "p-inline-message-icon-only": a4
  };
};
let UIMessage = /*#__PURE__*/(() => {
  class UIMessage {
    constructor() {
      /**
       * Severity level of the message.
       * @group Props
       */
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "severity", void 0);
      /**
       * Text content.
       * @group Props
       */
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "text", void 0);
      /**
       * Whether displaying messages would be escaped or not.
       * @group Props
       */
      (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "escape", true);
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
    }
    get icon() {
      if (this.severity && this.severity.trim()) {
        return this.severity;
      } else {
        return 'info';
      }
    }
  }
  (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(UIMessage, "\u0275fac", function UIMessage_Factory(t) {
    return new (t || UIMessage)();
  });
  (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(UIMessage, "\u0275cmp", /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: UIMessage,
    selectors: [["p-message"]],
    hostAttrs: [1, "p-element"],
    inputs: {
      severity: "severity",
      text: "text",
      escape: "escape",
      style: "style",
      styleClass: "styleClass"
    },
    decls: 8,
    vars: 16,
    consts: [["aria-live", "polite", 1, "p-inline-message", "p-component", "p-inline-message", 3, "ngStyle", "ngClass"], [3, "styleClass", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["escapeOut", ""], [3, "styleClass"], ["class", "p-inline-message-text", 3, "innerHTML", 4, "ngIf"], [1, "p-inline-message-text", 3, "innerHTML"], ["class", "p-inline-message-text", 4, "ngIf"], [1, "p-inline-message-text"]],
    template: function UIMessage_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, UIMessage_CheckIcon_1_Template, 1, 1, "CheckIcon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, UIMessage_InfoCircleIcon_2_Template, 1, 1, "InfoCircleIcon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, UIMessage_TimesCircleIcon_3_Template, 1, 1, "TimesCircleIcon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, UIMessage_ExclamationTriangleIcon_4_Template, 1, 1, "ExclamationTriangleIcon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, UIMessage_div_5_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, UIMessage_ng_template_6_Template, 1, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.styleClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx.style)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction5"](10, _c0, ctx.severity === "info", ctx.severity === "warn", ctx.severity === "error", ctx.severity === "success", ctx.text == null));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.icon === "success");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.icon === "info");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.icon === "error");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.icon === "warn");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.escape)("ngIfElse", _r5);
      }
    },
    dependencies: function () {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, primeng_icons_check__WEBPACK_IMPORTED_MODULE_3__.CheckIcon, primeng_icons_infocircle__WEBPACK_IMPORTED_MODULE_4__.InfoCircleIcon, primeng_icons_timescircle__WEBPACK_IMPORTED_MODULE_5__.TimesCircleIcon, primeng_icons_exclamationtriangle__WEBPACK_IMPORTED_MODULE_6__.ExclamationTriangleIcon];
    },
    styles: ["@layer primeng{.p-inline-message{display:inline-flex;align-items:center;justify-content:center;vertical-align:top}.p-inline-message-icon-only .p-inline-message-text{visibility:hidden;width:0}.p-fluid .p-inline-message{display:flex}}\n"],
    encapsulation: 2,
    changeDetection: 0
  }));
  return UIMessage;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let MessageModule = /*#__PURE__*/(() => {
  class MessageModule {}
  (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(MessageModule, "\u0275fac", function MessageModule_Factory(t) {
    return new (t || MessageModule)();
  });
  (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(MessageModule, "\u0275mod", /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: MessageModule
  }));
  (0,D_a_Auto_Subliminal_Auto_Subliminal_web_autosubliminal_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(MessageModule, "\u0275inj", /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, primeng_icons_check__WEBPACK_IMPORTED_MODULE_3__.CheckIcon, primeng_icons_infocircle__WEBPACK_IMPORTED_MODULE_4__.InfoCircleIcon, primeng_icons_timescircle__WEBPACK_IMPORTED_MODULE_5__.TimesCircleIcon, primeng_icons_exclamationtriangle__WEBPACK_IMPORTED_MODULE_6__.ExclamationTriangleIcon]
  }));
  return MessageModule;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=266.74d6a096d86b9811.js.map