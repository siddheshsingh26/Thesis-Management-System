"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dashboard",{

/***/ "./components/miscellaneous/DeleteModal.js":
/*!*************************************************!*\
  !*** ./components/miscellaneous/DeleteModal.js ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nconst DeleteModal = (param)=>{\n    let { isVisible , onClose , deleteTask , task  } = param;\n    if (!isVisible) return null;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center \",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            class: \"relative w-full h-full max-w-md md:h-auto\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: \"relative bg-white rounded-lg shadow dark:bg-gray-700\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"button\",\n                        class: \"absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white\",\n                        \"data-modal-hide\": \"popup-modal\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                \"aria-hidden\": \"true\",\n                                class: \"w-5 h-5\",\n                                fill: \"currentColor\",\n                                viewBox: \"0 0 20 20\",\n                                xmlns: \"http://www.w3.org/2000/svg\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                    \"fill-rule\": \"evenodd\",\n                                    d: \"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z\",\n                                    \"clip-rule\": \"evenodd\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\miscellaneous\\\\DeleteModal.js\",\n                                    lineNumber: 20,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\miscellaneous\\\\DeleteModal.js\",\n                                lineNumber: 13,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                class: \"sr-only\",\n                                onClick: ()=>onClose(),\n                                children: \"Close modal\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\miscellaneous\\\\DeleteModal.js\",\n                                lineNumber: 26,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\miscellaneous\\\\DeleteModal.js\",\n                        lineNumber: 8,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"p-6 text-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                \"aria-hidden\": \"true\",\n                                class: \"mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200\",\n                                fill: \"none\",\n                                stroke: \"currentColor\",\n                                viewBox: \"0 0 24 24\",\n                                xmlns: \"http://www.w3.org/2000/svg\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                    \"stroke-linecap\": \"round\",\n                                    \"stroke-linejoin\": \"round\",\n                                    \"stroke-width\": \"2\",\n                                    d: \"M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\miscellaneous\\\\DeleteModal.js\",\n                                    lineNumber: 39,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\miscellaneous\\\\DeleteModal.js\",\n                                lineNumber: 31,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                class: \"mb-5 text-lg font-normal text-gray-500 dark:text-gray-400\",\n                                children: \"Are you sure you want to delete this task?\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\miscellaneous\\\\DeleteModal.js\",\n                                lineNumber: 46,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                \"data-modal-hide\": \"popup-modal\",\n                                type: \"button\",\n                                class: \"text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2\",\n                                onClick: ()=>{\n                                    deleteTask(task);\n                                    setShowModal(false);\n                                },\n                                children: \"Yes, I'm sure\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\miscellaneous\\\\DeleteModal.js\",\n                                lineNumber: 49,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                \"data-modal-hide\": \"popup-modal\",\n                                type: \"button\",\n                                class: \"text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600\",\n                                onClick: ()=>{\n                                    setShowModa;\n                                },\n                                children: \"No, cancel\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\miscellaneous\\\\DeleteModal.js\",\n                                lineNumber: 60,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\miscellaneous\\\\DeleteModal.js\",\n                        lineNumber: 30,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\miscellaneous\\\\DeleteModal.js\",\n                lineNumber: 7,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\miscellaneous\\\\DeleteModal.js\",\n            lineNumber: 6,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\miscellaneous\\\\DeleteModal.js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, undefined);\n};\n_c = DeleteModal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DeleteModal);\nvar _c;\n$RefreshReg$(_c, \"DeleteModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL21pc2NlbGxhbmVvdXMvRGVsZXRlTW9kYWwuanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFBQSxNQUFNQSxjQUFjLFNBQThDO1FBQTdDLEVBQUVDLFVBQVMsRUFBRUMsUUFBTyxFQUFFQyxXQUFVLEVBQUVDLEtBQUksRUFBRTtJQUMzRCxJQUFJLENBQUNILFdBQVcsT0FBTyxJQUFJO0lBRTNCLHFCQUNFLDhEQUFDSTtRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJRSxPQUFNO3NCQUNULDRFQUFDRjtnQkFBSUUsT0FBTTs7a0NBQ1QsOERBQUNDO3dCQUNDQyxNQUFLO3dCQUNMRixPQUFNO3dCQUNORyxtQkFBZ0I7OzBDQUVoQiw4REFBQ0M7Z0NBQ0NDLGVBQVk7Z0NBQ1pMLE9BQU07Z0NBQ05NLE1BQUs7Z0NBQ0xDLFNBQVE7Z0NBQ1JDLE9BQU07MENBRU4sNEVBQUNDO29DQUNDQyxhQUFVO29DQUNWQyxHQUFFO29DQUNGQyxhQUFVOzs7Ozs7Ozs7OzswQ0FHZCw4REFBQ1g7Z0NBQU9ELE9BQU07Z0NBQVVhLFNBQVMsSUFBTWxCOzBDQUFXOzs7Ozs7Ozs7Ozs7a0NBSXBELDhEQUFDRzt3QkFBSUUsT0FBTTs7MENBQ1QsOERBQUNJO2dDQUNDQyxlQUFZO2dDQUNaTCxPQUFNO2dDQUNOTSxNQUFLO2dDQUNMUSxRQUFPO2dDQUNQUCxTQUFRO2dDQUNSQyxPQUFNOzBDQUVOLDRFQUFDQztvQ0FDQ00sa0JBQWU7b0NBQ2ZDLG1CQUFnQjtvQ0FDaEJDLGdCQUFhO29DQUNiTixHQUFFOzs7Ozs7Ozs7OzswQ0FHTiw4REFBQ087Z0NBQUdsQixPQUFNOzBDQUE0RDs7Ozs7OzBDQUd0RSw4REFBQ0M7Z0NBQ0NFLG1CQUFnQjtnQ0FDaEJELE1BQUs7Z0NBQ0xGLE9BQU07Z0NBQ05hLFNBQVMsSUFBTTtvQ0FDYmpCLFdBQVdDO29DQUNYc0IsYUFBYSxLQUFLO2dDQUNwQjswQ0FDRDs7Ozs7OzBDQUdELDhEQUFDbEI7Z0NBQ0NFLG1CQUFnQjtnQ0FDaEJELE1BQUs7Z0NBQ0xGLE9BQU07Z0NBQ05hLFNBQVMsSUFBTTtvQ0FDYk87Z0NBQ0Y7MENBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRYjtLQTFFTTNCO0FBNEVOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbWlzY2VsbGFuZW91cy9EZWxldGVNb2RhbC5qcz8xOTE4Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IERlbGV0ZU1vZGFsID0gKHsgaXNWaXNpYmxlLCBvbkNsb3NlLCBkZWxldGVUYXNrLCB0YXNrIH0pID0+IHtcclxuICBpZiAoIWlzVmlzaWJsZSkgcmV0dXJuIG51bGw7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIGluc2V0LTAgYmctYmxhY2sgYmctb3BhY2l0eS0yNSBiYWNrZHJvcC1ibHVyLXNtIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicmVsYXRpdmUgdy1mdWxsIGgtZnVsbCBtYXgtdy1tZCBtZDpoLWF1dG9cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicmVsYXRpdmUgYmctd2hpdGUgcm91bmRlZC1sZyBzaGFkb3cgZGFyazpiZy1ncmF5LTcwMFwiPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgY2xhc3M9XCJhYnNvbHV0ZSB0b3AtMyByaWdodC0yLjUgdGV4dC1ncmF5LTQwMCBiZy10cmFuc3BhcmVudCBob3ZlcjpiZy1ncmF5LTIwMCBob3Zlcjp0ZXh0LWdyYXktOTAwIHJvdW5kZWQtbGcgdGV4dC1zbSBwLTEuNSBtbC1hdXRvIGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBkYXJrOmhvdmVyOmJnLWdyYXktODAwIGRhcms6aG92ZXI6dGV4dC13aGl0ZVwiXHJcbiAgICAgICAgICAgIGRhdGEtbW9kYWwtaGlkZT1cInBvcHVwLW1vZGFsXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgY2xhc3M9XCJ3LTUgaC01XCJcclxuICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcclxuICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICBmaWxsLXJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgICAgICAgICAgIGQ9XCJNNC4yOTMgNC4yOTNhMSAxIDAgMDExLjQxNCAwTDEwIDguNTg2bDQuMjkzLTQuMjkzYTEgMSAwIDExMS40MTQgMS40MTRMMTEuNDE0IDEwbDQuMjkzIDQuMjkzYTEgMSAwIDAxLTEuNDE0IDEuNDE0TDEwIDExLjQxNGwtNC4yOTMgNC4yOTNhMSAxIDAgMDEtMS40MTQtMS40MTRMOC41ODYgMTAgNC4yOTMgNS43MDdhMSAxIDAgMDEwLTEuNDE0elwiXHJcbiAgICAgICAgICAgICAgICBjbGlwLXJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInNyLW9ubHlcIiBvbkNsaWNrPXsoKSA9PiBvbkNsb3NlKCl9PlxyXG4gICAgICAgICAgICAgIENsb3NlIG1vZGFsXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicC02IHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgICAgIGNsYXNzPVwibXgtYXV0byBtYi00IHRleHQtZ3JheS00MDAgdy0xNCBoLTE0IGRhcms6dGV4dC1ncmF5LTIwMFwiXHJcbiAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICBzdHJva2Utd2lkdGg9XCIyXCJcclxuICAgICAgICAgICAgICAgIGQ9XCJNMTIgOHY0bTAgNGguMDFNMjEgMTJhOSA5IDAgMTEtMTggMCA5IDkgMCAwMTE4IDB6XCJcclxuICAgICAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgPGgzIGNsYXNzPVwibWItNSB0ZXh0LWxnIGZvbnQtbm9ybWFsIHRleHQtZ3JheS01MDAgZGFyazp0ZXh0LWdyYXktNDAwXCI+XHJcbiAgICAgICAgICAgICAgQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIHRhc2s/XHJcbiAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBkYXRhLW1vZGFsLWhpZGU9XCJwb3B1cC1tb2RhbFwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LXdoaXRlIGJnLXJlZC02MDAgaG92ZXI6YmctcmVkLTgwMCBmb2N1czpyaW5nLTQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctcmVkLTMwMCBkYXJrOmZvY3VzOnJpbmctcmVkLTgwMCBmb250LW1lZGl1bSByb3VuZGVkLWxnIHRleHQtc20gaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIHB4LTUgcHktMi41IHRleHQtY2VudGVyIG1yLTJcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZVRhc2sodGFzayk7XHJcbiAgICAgICAgICAgICAgICBzZXRTaG93TW9kYWwoZmFsc2UpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBZZXMsIEknbSBzdXJlXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgZGF0YS1tb2RhbC1oaWRlPVwicG9wdXAtbW9kYWxcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIGNsYXNzPVwidGV4dC1ncmF5LTUwMCBiZy13aGl0ZSBob3ZlcjpiZy1ncmF5LTEwMCBmb2N1czpyaW5nLTQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctZ3JheS0yMDAgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLWdyYXktMjAwIHRleHQtc20gZm9udC1tZWRpdW0gcHgtNSBweS0yLjUgaG92ZXI6dGV4dC1ncmF5LTkwMCBmb2N1czp6LTEwIGRhcms6YmctZ3JheS03MDAgZGFyazp0ZXh0LWdyYXktMzAwIGRhcms6Ym9yZGVyLWdyYXktNTAwIGRhcms6aG92ZXI6dGV4dC13aGl0ZSBkYXJrOmhvdmVyOmJnLWdyYXktNjAwIGRhcms6Zm9jdXM6cmluZy1ncmF5LTYwMFwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0U2hvd01vZGFcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgTm8sIGNhbmNlbFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEZWxldGVNb2RhbDtcclxuIl0sIm5hbWVzIjpbIkRlbGV0ZU1vZGFsIiwiaXNWaXNpYmxlIiwib25DbG9zZSIsImRlbGV0ZVRhc2siLCJ0YXNrIiwiZGl2IiwiY2xhc3NOYW1lIiwiY2xhc3MiLCJidXR0b24iLCJ0eXBlIiwiZGF0YS1tb2RhbC1oaWRlIiwic3ZnIiwiYXJpYS1oaWRkZW4iLCJmaWxsIiwidmlld0JveCIsInhtbG5zIiwicGF0aCIsImZpbGwtcnVsZSIsImQiLCJjbGlwLXJ1bGUiLCJvbkNsaWNrIiwic3Ryb2tlIiwic3Ryb2tlLWxpbmVjYXAiLCJzdHJva2UtbGluZWpvaW4iLCJzdHJva2Utd2lkdGgiLCJoMyIsInNldFNob3dNb2RhbCIsInNldFNob3dNb2RhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/miscellaneous/DeleteModal.js\n"));

/***/ })

});