(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["test-test-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/test/test1/test1.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/test/test1/test1.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>test1 works!</p>\r\n\r\n<h1>Medications for <span id=\"name\"></span></h1>\r\n<ul id=\"med_list\"></ul>\r\n");

/***/ }),

/***/ "./src/app/test/test-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/test/test-routing.module.ts ***!
  \*********************************************/
/*! exports provided: TestRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestRoutingModule", function() { return TestRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _test1_test1_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./test1/test1.component */ "./src/app/test/test1/test1.component.ts");




const routes = [
    {
        path: '',
        redirectTo: '/test/test1',
        component: _test1_test1_component__WEBPACK_IMPORTED_MODULE_3__["Test1Component"]
    },
    {
        path: 'test1',
        component: _test1_test1_component__WEBPACK_IMPORTED_MODULE_3__["Test1Component"]
    },
];
let TestRoutingModule = class TestRoutingModule {
};
TestRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TestRoutingModule);



/***/ }),

/***/ "./src/app/test/test.module.ts":
/*!*************************************!*\
  !*** ./src/app/test/test.module.ts ***!
  \*************************************/
/*! exports provided: CONTAINERS, TestModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTAINERS", function() { return CONTAINERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestModule", function() { return TestModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _test_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./test-routing.module */ "./src/app/test/test-routing.module.ts");
/* harmony import */ var _test1_test1_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./test1/test1.component */ "./src/app/test/test1/test1.component.ts");





const CONTAINERS = [
    _test1_test1_component__WEBPACK_IMPORTED_MODULE_4__["Test1Component"],
];
let TestModule = class TestModule {
};
TestModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [CONTAINERS],
        exports: [CONTAINERS],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _test_routing_module__WEBPACK_IMPORTED_MODULE_3__["TestRoutingModule"]
        ],
    })
], TestModule);



/***/ }),

/***/ "./src/app/test/test1/test1.component.css":
/*!************************************************!*\
  !*** ./src/app/test/test1/test1.component.css ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3QvdGVzdDEvdGVzdDEuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/test/test1/test1.component.ts":
/*!***********************************************!*\
  !*** ./src/app/test/test1/test1.component.ts ***!
  \***********************************************/
/*! exports provided: Test1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Test1Component", function() { return Test1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

/// <reference types="@types/fhir-js-client" />

let Test1Component = class Test1Component {
    constructor() { }
    ngOnInit() {
        test();
    }
};
Test1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-test1',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./test1.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/test/test1/test1.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./test1.component.css */ "./src/app/test/test1/test1.component.css")).default]
    })
], Test1Component);

function test() {
    function getPatientName(pt) {
        if (pt.name) {
            var names = pt.name.map(function (name) {
                return name.given.join(" ") + " " + name.family.join(" ");
            });
            return names.join(" / ");
        }
        else {
            return "anonymous";
        }
    }
    function getMedicationName(medCodings) {
        var coding = medCodings.find(function (c) {
            return c.system == "http://www.nlm.nih.gov/research/umls/rxnorm";
        });
        return coding && coding.display || "Unnamed Medication(TM)";
    }
    function displayPatient(pt) {
        document.getElementById('name').innerHTML = getPatientName(pt);
    }
    var med_list = document.getElementById('med_list');
    function displayMedication(medCodings) {
        med_list.innerHTML += "<li> " + getMedicationName(medCodings) + "</li>";
    }
    FHIR.oauth2.ready(function (smart) {
        smart.patient.read().then(function (pt) {
            displayPatient(pt);
        });
        smart.patient.api.fetchAllWithReferences({ type: "MedicationOrder" }, ["MedicationOrder.medicationReference"]).then(function (results, refs) {
            results.forEach(function (prescription) {
                if (prescription.medicationCodeableConcept) {
                    displayMedication(prescription.medicationCodeableConcept.coding);
                }
                else if (prescription.medicationReference) {
                    var med = refs(prescription, prescription.medicationReference);
                    displayMedication(med && med.code.coding || []);
                }
            });
        });
    });
}


/***/ })

}]);
//# sourceMappingURL=test-test-module-es2015.js.map