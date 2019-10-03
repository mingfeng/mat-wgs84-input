(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./projects/mat-wgs84-input/src/lib/mat-wgs84-input.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./projects/mat-wgs84-input/src/lib/mat-wgs84-input.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [formGroup]=\"parts\" class=\"coordinate-input-container\">\n  <input type=\"number\" class=\"degrees-input\" min=\"0\" max=\"{{ maxDegrees }}\" formControlName=\"degrees\">\n  <span class=\"coordinate-symbol\">°</span>\n  <input type=\"number\" class=\"minutes-input\" min=\"0\" max=\"60\" formControlName=\"minutes\">\n  <span class=\"coordinate-symbol\">'</span>\n  <input type=\"number\" class=\"seconds-input\" min=\"0\" max=\"60\" formControlName=\"seconds\">\n  <span class=\"coordinate-symbol\">\"</span>\n  <select class=\"direction-select\" formControlName=\"direction\">\n    <option *ngFor=\"let direction of directions\" [value]=\"direction\">{{ direction }}</option>\n  </select>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"example-form\" [formGroup]=\"form\">\n  <mat-form-field>\n    <mat-wgs84-input placeholder=\"Latitude\" type=\"latitude\" formControlName=\"latitude\" required></mat-wgs84-input>\n    <mat-error *ngIf=\"latitude.invalid\">{{ latitudeErrorMessage }}</mat-error>\n  </mat-form-field>\n  <mat-form-field>\n    <mat-wgs84-input placeholder=\"Longitude\" type=\"longitude\" formControlName=\"longitude\" required></mat-wgs84-input>\n    <mat-error *ngIf=\"longitude.invalid\">{{ longitudeErrorMessage }}</mat-error>\n  </mat-form-field>\n  <h4>Form control values</h4>\n  <p>Latitude: {{ latitude.value }}</p>\n  <p>Longitude: {{ longitude.value }}</p>\n</form>\n"

/***/ }),

/***/ "./projects/mat-wgs84-input/src/lib/mat-wgs84-input.component.css":
/*!************************************************************************!*\
  !*** ./projects/mat-wgs84-input/src/lib/mat-wgs84-input.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".coordinate-input-container {\n  display: flex;\n}\n\n.degrees-input,\n.minutes-input,\n.seconds-input {\n  border: none;\n  background: none;\n  padding: 0;\n  outline: none;\n  font: inherit;\n  text-align: center;\n  width: 25%;\n}\n\n.direction-select {\n  opacity: 0;\n  transition: opacity 200ms;\n  background: transparent;\n  border: none;\n  outline: none;\n  width: 25%;\n}\n\n.coordinate-symbol {\n  opacity: 0;\n  transition: opacity 200ms;\n}\n\n:host.floating-label .coordinate-symbol,\n:host.floating-label .direction-select {\n  opacity: 1;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL21hdC13Z3M4NC1pbnB1dC9zcmMvbGliL21hdC13Z3M4NC1pbnB1dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtBQUNmOztBQUVBOzs7RUFHRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixhQUFhO0VBQ2IsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0VBQ1YseUJBQXlCO0VBQ3pCLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osYUFBYTtFQUNiLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFVBQVU7RUFDVix5QkFBeUI7QUFDM0I7O0FBRUE7O0VBRUUsVUFBVTtBQUNaIiwiZmlsZSI6InByb2plY3RzL21hdC13Z3M4NC1pbnB1dC9zcmMvbGliL21hdC13Z3M4NC1pbnB1dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvb3JkaW5hdGUtaW5wdXQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmRlZ3JlZXMtaW5wdXQsXG4ubWludXRlcy1pbnB1dCxcbi5zZWNvbmRzLWlucHV0IHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBvdXRsaW5lOiBub25lO1xuICBmb250OiBpbmhlcml0O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAyNSU7XG59XG5cbi5kaXJlY3Rpb24tc2VsZWN0IHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAyMDBtcztcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgd2lkdGg6IDI1JTtcbn1cblxuLmNvb3JkaW5hdGUtc3ltYm9sIHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAyMDBtcztcbn1cblxuOmhvc3QuZmxvYXRpbmctbGFiZWwgLmNvb3JkaW5hdGUtc3ltYm9sLFxuOmhvc3QuZmxvYXRpbmctbGFiZWwgLmRpcmVjdGlvbi1zZWxlY3Qge1xuICBvcGFjaXR5OiAxO1xufVxuIl19 */"

/***/ }),

/***/ "./projects/mat-wgs84-input/src/lib/mat-wgs84-input.component.ts":
/*!***********************************************************************!*\
  !*** ./projects/mat-wgs84-input/src/lib/mat-wgs84-input.component.ts ***!
  \***********************************************************************/
/*! exports provided: MatWgs84InputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatWgs84InputComponent", function() { return MatWgs84InputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm2015/a11y.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm2015/coercion.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");

var MatWgs84InputComponent_1;






/* tslint:disable:component-selector */
let MatWgs84InputComponent = MatWgs84InputComponent_1 = class MatWgs84InputComponent {
    constructor(formBuilder, focusMonitor, elRef) {
        this.formBuilder = formBuilder;
        this.focusMonitor = focusMonitor;
        this.elRef = elRef;
        this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.focused = false;
        this.ngControl = null;
        this.errorState = false;
        this.controlType = 'mat-wgs84-input';
        this.id = `mat-wgs84-input-${MatWgs84InputComponent_1.nextId++}`;
        this.describedBy = '';
        this.precision = 7; // coordinate value precision
        this._required = false;
        this._disabled = false;
        this._type = 'latitude';
        this._onChange = (value) => { };
        this._onTouched = () => { };
        focusMonitor.monitor(elRef, true).subscribe(origin => {
            this.focused = !!origin;
            this.stateChanges.next();
        });
    }
    get empty() {
        const { degrees, minutes, seconds } = this.parts.value;
        return degrees === null && minutes === null && seconds === null;
    }
    get shouldLabelFloat() {
        return this.focused || !this.empty;
    }
    get placeholder() {
        return this._placeholder;
    }
    set placeholder(value) {
        this._placeholder = value;
        this.stateChanges.next();
    }
    get required() {
        return this._required;
    }
    set required(value) {
        this._required = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);
        this.stateChanges.next();
    }
    get disabled() {
        return this._disabled;
    }
    set disabled(value) {
        this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);
        this._disabled ? this.parts.disable() : this.parts.enable();
        this.stateChanges.next();
    }
    get value() {
        if (this.empty) {
            return null;
        }
        const { degrees, minutes, seconds, direction } = this.parts.value;
        const degreeFactor = Math.pow(10, this.precision);
        const val = Math.round((degrees + minutes / 60 + seconds / 3600) * degreeFactor) / degreeFactor;
        return direction === 'S' || direction === 'W' ? -val : val;
    }
    set value(val) {
        if (val === null) {
            this.parts.setValue({ degrees: null, minutes: null, seconds: null, direction: null });
        }
        else {
            val = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(val);
            const direction = val > 0 ? this.directions[0] : this.directions[1];
            const degreeFactor = Math.pow(10, this.precision);
            const secondFactor = Math.pow(10, this.precision - 4);
            const fullDegrees = Math.round(Math.abs(val) * degreeFactor) / degreeFactor;
            const degrees = Math.floor(fullDegrees);
            const fullMinutes = (fullDegrees % 1) * 60;
            const minutes = Math.floor(fullMinutes);
            const seconds = Math.round((fullMinutes % 1) * 60 * secondFactor) / secondFactor;
            this.parts.setValue({ degrees, minutes, seconds, direction });
        }
        this.stateChanges.next();
    }
    get type() {
        return this._type;
    }
    set type(value) {
        this._type = value;
        this.stateChanges.next();
    }
    get directions() {
        return this.type === 'longitude' ? ['E', 'W'] : ['N', 'S'];
    }
    get maxDegrees() {
        return this.type === 'latitude' ? 90 : 180;
    }
    ngOnInit() {
        this.parts = this.formBuilder.group({
            degrees: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].max(this.maxDegrees)]],
            minutes: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].max(60)]],
            seconds: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].max(60)]],
            direction: null
        });
        this.changeSubscription = this.parts.valueChanges.subscribe(() => {
            this.errorState = this.parts.invalid;
            this._onChange(this.parts.valid ? this.value : NaN);
        });
    }
    ngOnDestroy() {
        this.stateChanges.complete();
        this.changeSubscription.unsubscribe();
        this.focusMonitor.stopMonitoring(this.elRef);
    }
    setDescribedByIds(ids) {
        this.describedBy = ids.join(' ');
    }
    onContainerClick(event) {
        const tag = event.target.tagName.toLowerCase();
        if (tag !== 'input' && tag !== 'select') {
            this.elRef.nativeElement.querySelector('input').focus();
        }
    }
    writeValue(value) {
        this.value = value;
    }
    registerOnChange(fn) {
        this._onChange = fn;
    }
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
};
MatWgs84InputComponent.nextId = 0;
MatWgs84InputComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["FocusMonitor"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])
], MatWgs84InputComponent.prototype, "placeholder", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
], MatWgs84InputComponent.prototype, "required", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
], MatWgs84InputComponent.prototype, "disabled", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Number])
], MatWgs84InputComponent.prototype, "value", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])
], MatWgs84InputComponent.prototype, "type", null);
MatWgs84InputComponent = MatWgs84InputComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'mat-wgs84-input',
        template: __webpack_require__(/*! raw-loader!./mat-wgs84-input.component.html */ "./node_modules/raw-loader/index.js!./projects/mat-wgs84-input/src/lib/mat-wgs84-input.component.html"),
        providers: [
            { provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldControl"], useExisting: MatWgs84InputComponent_1 },
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])(() => MatWgs84InputComponent_1),
                multi: true
            }
        ],
        host: {
            '[class.floating-label]': 'shouldLabelFloat',
            '[id]': 'id',
            '[attr.aria-describedby]': 'describedBy'
        },
        styles: [__webpack_require__(/*! ./mat-wgs84-input.component.css */ "./projects/mat-wgs84-input/src/lib/mat-wgs84-input.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["FocusMonitor"],
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]])
], MatWgs84InputComponent);



/***/ }),

/***/ "./projects/mat-wgs84-input/src/lib/mat-wgs84-input.module.ts":
/*!********************************************************************!*\
  !*** ./projects/mat-wgs84-input/src/lib/mat-wgs84-input.module.ts ***!
  \********************************************************************/
/*! exports provided: MatWgs84InputModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatWgs84InputModule", function() { return MatWgs84InputModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _mat_wgs84_input_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mat-wgs84-input.component */ "./projects/mat-wgs84-input/src/lib/mat-wgs84-input.component.ts");






let MatWgs84InputModule = class MatWgs84InputModule {
};
MatWgs84InputModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_mat_wgs84_input_component__WEBPACK_IMPORTED_MODULE_5__["MatWgs84InputComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"]],
        exports: [_mat_wgs84_input_component__WEBPACK_IMPORTED_MODULE_5__["MatWgs84InputComponent"]]
    })
], MatWgs84InputModule);



/***/ }),

/***/ "./projects/mat-wgs84-input/src/lib/validators.ts":
/*!********************************************************!*\
  !*** ./projects/mat-wgs84-input/src/lib/validators.ts ***!
  \********************************************************/
/*! exports provided: Validators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Validators", function() { return Validators; });
class Validators {
    /**
     * Validator that requires values to be in the given range
     */
    static valueRangeValidator(min, max) {
        const fn = (control) => {
            return control.value >= min && control.value <= max ? null : { invalid: { value: control.value } };
        };
        return fn;
    }
}
/**
 * Validator that requires a valid latitude value
 */
Validators.latitude = Validators.valueRangeValidator(-90, 90);
/**
 * Validator that requires a valid longitude value
 */
Validators.longitude = Validators.valueRangeValidator(-180, 180);


/***/ }),

/***/ "./projects/mat-wgs84-input/src/public-api.ts":
/*!****************************************************!*\
  !*** ./projects/mat-wgs84-input/src/public-api.ts ***!
  \****************************************************/
/*! exports provided: MatWgs84InputComponent, MatWgs84InputModule, Validators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_mat_wgs84_input_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/mat-wgs84-input.component */ "./projects/mat-wgs84-input/src/lib/mat-wgs84-input.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatWgs84InputComponent", function() { return _lib_mat_wgs84_input_component__WEBPACK_IMPORTED_MODULE_0__["MatWgs84InputComponent"]; });

/* harmony import */ var _lib_mat_wgs84_input_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/mat-wgs84-input.module */ "./projects/mat-wgs84-input/src/lib/mat-wgs84-input.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatWgs84InputModule", function() { return _lib_mat_wgs84_input_module__WEBPACK_IMPORTED_MODULE_1__["MatWgs84InputModule"]; });

/* harmony import */ var _lib_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/validators */ "./projects/mat-wgs84-input/src/lib/validators.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Validators", function() { return _lib_validators__WEBPACK_IMPORTED_MODULE_2__["Validators"]; });

/*
 * Public API Surface of mat-wgs84-input
 */





/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\n  display: flex;\n  flex-direction: column;\n  margin: 20px;\n  width: 320px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW46IDIwcHg7XG4gIHdpZHRoOiAzMjBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var projects_mat_wgs84_input_src_public_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! projects/mat-wgs84-input/src/public-api */ "./projects/mat-wgs84-input/src/public-api.ts");




let AppComponent = class AppComponent {
    constructor(fb) {
        this.title = 'wgs84-input';
        this.form = fb.group({
            latitude: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, projects_mat_wgs84_input_src_public_api__WEBPACK_IMPORTED_MODULE_3__["Validators"].latitude]],
            longitude: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, projects_mat_wgs84_input_src_public_api__WEBPACK_IMPORTED_MODULE_3__["Validators"].longitude]],
        });
    }
    get latitude() {
        return this.form.get('latitude');
    }
    get latitudeErrorMessage() {
        return this.latitude.hasError('required') ? 'Latitude is required' : 'Invalid latitude';
    }
    get longitude() {
        return this.form.get('longitude');
    }
    get longitudeErrorMessage() {
        return this.longitude.hasError('required') ? 'Longitude is required' : 'Invalid longitude';
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var projects_mat_wgs84_input_src_public_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! projects/mat-wgs84-input/src/public-api */ "./projects/mat-wgs84-input/src/public-api.ts");









let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
            projects_mat_wgs84_input_src_public_api__WEBPACK_IMPORTED_MODULE_8__["MatWgs84InputModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/mingfeng/projects/wgs84-input/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map