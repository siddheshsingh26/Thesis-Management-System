"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/auth",{

/***/ "./pages/auth.js":
/*!***********************!*\
  !*** ./pages/auth.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Authentication_Login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Authentication/Login */ \"./components/Authentication/Login.js\");\n/* harmony import */ var _components_Authentication_SignUp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Authentication/SignUp */ \"./components/Authentication/SignUp.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Auth = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const user = JSON.parse(localStorage.getItem(\"userInfo\"));\n        if (user) {\n            router.push(\"/dashboard\");\n        }\n    }, [\n        router\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Container, {\n        maxW: \"xl\",\n        centerContent: true,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                className: \"flex\",\n                d: \"flex\",\n                justifyContent: \"center\",\n                p: 3,\n                bg: \"white\",\n                w: \"100%\",\n                m: \"40px 0 15px 0\",\n                borderRadius: \"lg\",\n                borderWidth: \"1px\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                    fontSize: \"4xl\",\n                    className: \"font-sans\",\n                    children: \"Thesis Management System\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\pages\\\\auth.js\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\pages\\\\auth.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                bg: \"white\",\n                w: \"100%\",\n                p: 4,\n                borderRadius: \"lg\",\n                borderWidth: \"1px\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Tabs, {\n                    isFitted: true,\n                    variant: \"soft-rounded\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.TabList, {\n                            mb: \"1em\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Tab, {\n                                    children: \"Login\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\pages\\\\auth.js\",\n                                    lineNumber: 46,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Tab, {\n                                    children: \"Sign Up\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\pages\\\\auth.js\",\n                                    lineNumber: 47,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\pages\\\\auth.js\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.TabPanels, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.TabPanel, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Authentication_Login__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\pages\\\\auth.js\",\n                                        lineNumber: 51,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\pages\\\\auth.js\",\n                                    lineNumber: 50,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.TabPanel, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Authentication_SignUp__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\pages\\\\auth.js\",\n                                        lineNumber: 54,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\pages\\\\auth.js\",\n                                    lineNumber: 53,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\pages\\\\auth.js\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\pages\\\\auth.js\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\pages\\\\auth.js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\pages\\\\auth.js\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Auth, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Auth;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Auth);\nvar _c;\n$RefreshReg$(_c, \"Auth\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hdXRoLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFTMEI7QUFDUTtBQUNNO0FBQ2U7QUFDRTtBQUV6RCxNQUFNWSxPQUFPLElBQU07O0lBQ2pCLE1BQU1DLFNBQVNKLHNEQUFTQTtJQUN4QkQsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLE1BQU1NLE9BQU9DLEtBQUtDLEtBQUssQ0FBQ0MsYUFBYUMsT0FBTyxDQUFDO1FBRTdDLElBQUlKLE1BQU07WUFDUkQsT0FBT00sSUFBSSxDQUFDO1FBQ2QsQ0FBQztJQUNILEdBQUc7UUFBQ047S0FBTztJQUVYLHFCQUNFLDhEQUFDWix1REFBU0E7UUFBQ21CLE1BQUs7UUFBS0MsYUFBYTs7MEJBQ2hDLDhEQUFDckIsaURBQUdBO2dCQUNGc0IsV0FBVTtnQkFDVkMsR0FBRTtnQkFDRkMsZ0JBQWU7Z0JBQ2ZDLEdBQUc7Z0JBQ0hDLElBQUc7Z0JBQ0hDLEdBQUU7Z0JBQ0ZDLEdBQUU7Z0JBQ0ZDLGNBQWE7Z0JBQ2JDLGFBQVk7MEJBRVosNEVBQUN2QixrREFBSUE7b0JBQUN3QixVQUFTO29CQUFNVCxXQUFVOzhCQUFZOzs7Ozs7Ozs7OzswQkFJN0MsOERBQUN0QixpREFBR0E7Z0JBQUMwQixJQUFHO2dCQUFRQyxHQUFFO2dCQUFPRixHQUFHO2dCQUFHSSxjQUFhO2dCQUFLQyxhQUFZOzBCQUMzRCw0RUFBQ3hCLGtEQUFJQTtvQkFBQzBCLFFBQVE7b0JBQUNDLFNBQVE7O3NDQUNyQiw4REFBQzlCLHFEQUFPQTs0QkFBQytCLElBQUc7OzhDQUNWLDhEQUFDaEMsaURBQUdBOzhDQUFDOzs7Ozs7OENBQ0wsOERBQUNBLGlEQUFHQTs4Q0FBQzs7Ozs7Ozs7Ozs7O3NDQUVQLDhEQUFDRyx1REFBU0E7OzhDQUNSLDhEQUFDRCxzREFBUUE7OENBQ1AsNEVBQUNNLHdFQUFLQTs7Ozs7Ozs7Ozs4Q0FFUiw4REFBQ04sc0RBQVFBOzhDQUNQLDRFQUFDTyx5RUFBTUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9yQjtHQTdDTUM7O1FBQ1dILGtEQUFTQTs7O0tBRHBCRztBQStDTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hdXRoLmpzP2RmNTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBCb3gsXHJcbiAgQ29udGFpbmVyLFxyXG4gIFRhYixcclxuICBUYWJMaXN0LFxyXG4gIFRhYlBhbmVsLFxyXG4gIFRhYlBhbmVscyxcclxuICBUYWJzLFxyXG4gIFRleHQsXHJcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgTG9naW4gZnJvbSBcIi4uL2NvbXBvbmVudHMvQXV0aGVudGljYXRpb24vTG9naW5cIjtcclxuaW1wb3J0IFNpZ25VcCBmcm9tIFwiLi4vY29tcG9uZW50cy9BdXRoZW50aWNhdGlvbi9TaWduVXBcIjtcclxuXHJcbmNvbnN0IEF1dGggPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHVzZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlckluZm9cIikpO1xyXG5cclxuICAgIGlmICh1c2VyKSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKFwiL2Rhc2hib2FyZFwiKTtcclxuICAgIH1cclxuICB9LCBbcm91dGVyXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyIG1heFc9XCJ4bFwiIGNlbnRlckNvbnRlbnQ+XHJcbiAgICAgIDxCb3hcclxuICAgICAgICBjbGFzc05hbWU9XCJmbGV4XCJcclxuICAgICAgICBkPVwiZmxleFwiXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxyXG4gICAgICAgIHA9ezN9XHJcbiAgICAgICAgYmc9XCJ3aGl0ZVwiXHJcbiAgICAgICAgdz1cIjEwMCVcIlxyXG4gICAgICAgIG09XCI0MHB4IDAgMTVweCAwXCJcclxuICAgICAgICBib3JkZXJSYWRpdXM9XCJsZ1wiXHJcbiAgICAgICAgYm9yZGVyV2lkdGg9XCIxcHhcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPFRleHQgZm9udFNpemU9XCI0eGxcIiBjbGFzc05hbWU9XCJmb250LXNhbnNcIj5cclxuICAgICAgICAgIFRoZXNpcyBNYW5hZ2VtZW50IFN5c3RlbVxyXG4gICAgICAgIDwvVGV4dD5cclxuICAgICAgPC9Cb3g+XHJcbiAgICAgIDxCb3ggYmc9XCJ3aGl0ZVwiIHc9XCIxMDAlXCIgcD17NH0gYm9yZGVyUmFkaXVzPVwibGdcIiBib3JkZXJXaWR0aD1cIjFweFwiPlxyXG4gICAgICAgIDxUYWJzIGlzRml0dGVkIHZhcmlhbnQ9XCJzb2Z0LXJvdW5kZWRcIj5cclxuICAgICAgICAgIDxUYWJMaXN0IG1iPVwiMWVtXCI+XHJcbiAgICAgICAgICAgIDxUYWI+TG9naW48L1RhYj5cclxuICAgICAgICAgICAgPFRhYj5TaWduIFVwPC9UYWI+XHJcbiAgICAgICAgICA8L1RhYkxpc3Q+XHJcbiAgICAgICAgICA8VGFiUGFuZWxzPlxyXG4gICAgICAgICAgICA8VGFiUGFuZWw+XHJcbiAgICAgICAgICAgICAgPExvZ2luIC8+XHJcbiAgICAgICAgICAgIDwvVGFiUGFuZWw+XHJcbiAgICAgICAgICAgIDxUYWJQYW5lbD5cclxuICAgICAgICAgICAgICA8U2lnblVwIC8+XHJcbiAgICAgICAgICAgIDwvVGFiUGFuZWw+XHJcbiAgICAgICAgICA8L1RhYlBhbmVscz5cclxuICAgICAgICA8L1RhYnM+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEF1dGg7XHJcbiJdLCJuYW1lcyI6WyJCb3giLCJDb250YWluZXIiLCJUYWIiLCJUYWJMaXN0IiwiVGFiUGFuZWwiLCJUYWJQYW5lbHMiLCJUYWJzIiwiVGV4dCIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsIkxvZ2luIiwiU2lnblVwIiwiQXV0aCIsInJvdXRlciIsInVzZXIiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicHVzaCIsIm1heFciLCJjZW50ZXJDb250ZW50IiwiY2xhc3NOYW1lIiwiZCIsImp1c3RpZnlDb250ZW50IiwicCIsImJnIiwidyIsIm0iLCJib3JkZXJSYWRpdXMiLCJib3JkZXJXaWR0aCIsImZvbnRTaXplIiwiaXNGaXR0ZWQiLCJ2YXJpYW50IiwibWIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/auth.js\n"));

/***/ })

});