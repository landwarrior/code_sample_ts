/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst person_1 = __webpack_require__(/*! ./person */ \"./src/person.ts\");\r\nvar elem = document.getElementById('content');\r\nvar person = new person_1.Person(1, '田中', '東京都');\r\nperson.write(elem);\r\nperson = new person_1.Person(1, '鈴木', '千葉県');\r\nperson.write(elem);\r\nperson = new person_1.Person(1, '山田', '埼玉県');\r\nperson.write(elem);\r\n\n\n//# sourceURL=webpack://type_01/./src/app.ts?");

/***/ }),

/***/ "./src/person.ts":
/*!***********************!*\
  !*** ./src/person.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Person = void 0;\r\nclass Person {\r\n    constructor(id, personName, personAddress) {\r\n        this.id = id;\r\n        this.personName = personName;\r\n        this.personAddress = personAddress;\r\n    }\r\n    write(elem) {\r\n        if (elem) {\r\n            elem.innerHTML +=\r\n                \"<div>\" +\r\n                    \"ID: \" +\r\n                    this.id +\r\n                    \"  名前: \" +\r\n                    this.personName +\r\n                    \"  住所: \" +\r\n                    this.personAddress;\r\n        }\r\n    }\r\n}\r\nexports.Person = Person;\r\n\n\n//# sourceURL=webpack://type_01/./src/person.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.ts");
/******/ 	
/******/ })()
;