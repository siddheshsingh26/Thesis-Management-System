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

/***/ "./components/ToDo.jsx":
/*!*****************************!*\
  !*** ./components/ToDo.jsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* harmony import */ var _data_tododata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/tododata */ \"./data/tododata.js\");\n/* harmony import */ var _Context_ChatProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Context/ChatProvider */ \"./Context/ChatProvider.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst ToDo = (param)=>{\n    let { toDo , markDone , setUpdateData , deleteTask  } = param;\n    _s();\n    const [showModal, setShowModal] = useState();\n    const { user  } = (0,_Context_ChatProvider__WEBPACK_IMPORTED_MODULE_4__.ChatState)();\n    console.log(user);\n    console.log(toDo);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: toDo === null || toDo === void 0 ? void 0 : toDo.sort((a, b)=>a._id > b._id ? 1 : -1).map((task, index)=>{\n            const { isCompleted , creator  } = task;\n            console.log(\"Is user._id === creator\", user._id === creator);\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col bg-gray-100 rounded-[6px] mb-[20px] pt-[10px] pr-[140px] pl-[10px] pb-[15px] text-center text-[22px] relative flex\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: task.isCompleted ? \"flex line-through ...\" : \"\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-[#999] rounded-[50%] w-[26px] h-[26px] flex text-center text-[18px] mr-[8px] justify-center items-center \",\n                                        children: index + 1\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ToDo.jsx\",\n                                        lineNumber: 42,\n                                        columnNumber: 21\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"flex\",\n                                        children: task.task\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ToDo.jsx\",\n                                        lineNumber: 45,\n                                        columnNumber: 21\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ToDo.jsx\",\n                                lineNumber: 41,\n                                columnNumber: 19\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ToDo.jsx\",\n                            lineNumber: 38,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"absolute top-[50%] -translate-y-[50%] ... right-[15px] inline-block\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"inline-block text-[#00ff89] pointer-events-auto mr-[20px] mb-[10px] hover:text-[#ff5e00]\",\n                                    title: \"Completed / Not Completed\",\n                                    onClick: (e)=>markDone(task),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n                                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faCircleCheck\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ToDo.jsx\",\n                                        lineNumber: 54,\n                                        columnNumber: 21\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ToDo.jsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 19\n                                }, undefined),\n                                user._id === task.creator && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"mr-[20px] cursor-pointer\",\n                                    title: \"Edit\",\n                                    onClick: onOpen,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n                                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faPen\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ToDo.jsx\",\n                                        lineNumber: 63,\n                                        columnNumber: 23\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ToDo.jsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 21\n                                }, undefined),\n                                user._id === task.creator && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                                    className: \"mr-[20px] cursor-pointer \",\n                                    title: \"Delete\",\n                                    onClick: ()=>deleteTask(task),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n                                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faTrashCan\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ToDo.jsx\",\n                                        lineNumber: 73,\n                                        columnNumber: 23\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ToDo.jsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 21\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ToDo.jsx\",\n                            lineNumber: 48,\n                            columnNumber: 17\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ToDo.jsx\",\n                    lineNumber: 37,\n                    columnNumber: 15\n                }, undefined)\n            }, task._id, false, {\n                fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ToDo.jsx\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, undefined);\n        })\n    }, void 0, false);\n};\n_s(ToDo, \"J1X9dajPtuwOUqxMQw1DHUYPp58=\");\n_c = ToDo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ToDo);\nvar _c;\n$RefreshReg$(_c, \"ToDo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RvRG8uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFBMEI7QUFVQTtBQUN1QztBQUt0QjtBQUNDO0FBQ0s7QUFDRztBQUNSO0FBRTVDLE1BQU1pQixPQUFPLFNBQW1EO1FBQWxELEVBQUVDLEtBQUksRUFBRUMsU0FBUSxFQUFFQyxjQUFhLEVBQUVDLFdBQVUsRUFBRTs7SUFDekQsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdDO0lBQ2xDLE1BQU0sRUFBRUMsS0FBSSxFQUFFLEdBQUdWLGdFQUFTQTtJQUMxQlcsUUFBUUMsR0FBRyxDQUFDRjtJQUNaQyxRQUFRQyxHQUFHLENBQUNUO0lBQ1oscUJBQ0U7a0JBQ0dBLGlCQUFBQSxrQkFBQUEsS0FBQUEsSUFBQUEsS0FDR1UsSUFBSSxDQUFDLENBQUNDLEdBQUdDLElBQU9ELEVBQUVFLEdBQUcsR0FBR0QsRUFBRUMsR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDLEVBQ3ZDQyxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsUUFBVTtZQUNwQixNQUFNLEVBQUVDLFlBQVcsRUFBRUMsUUFBTyxFQUFFLEdBQUdIO1lBQ2pDUCxRQUFRQyxHQUFHLENBQUMsMkJBQTJCRixLQUFLTSxHQUFHLEtBQUtLO1lBQ3BELHFCQUNFLDhEQUFDcEMsdURBQWM7MEJBQ2IsNEVBQUNzQztvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNEOzRCQUNDQyxXQUFXTixLQUFLRSxXQUFXLEdBQUcsMEJBQTBCLEVBQUU7c0NBRTFELDRFQUFDRztnQ0FBSUMsV0FBVTs7a0RBQ2IsOERBQUNDO3dDQUFLRCxXQUFVO2tEQUNiTCxRQUFROzs7Ozs7a0RBRVgsOERBQUNNO3dDQUFLRCxXQUFVO2tEQUFRTixLQUFLQSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7OztzQ0FHckMsOERBQUNLOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ0U7b0NBQ0NGLFdBQVU7b0NBQ1ZHLE9BQU07b0NBQ05DLFNBQVMsQ0FBQ0MsSUFBTXpCLFNBQVNjOzhDQUV6Qiw0RUFBQ3hCLDJFQUFlQTt3Q0FBQ29DLE1BQU1uQyw0RUFBYUE7Ozs7Ozs7Ozs7O2dDQUdyQ2UsS0FBS00sR0FBRyxLQUFLRSxLQUFLRyxPQUFPLGtCQUN4Qiw4REFBQ0k7b0NBQ0NELFdBQVk7b0NBQ1pHLE9BQU07b0NBQ05DLFNBQVNHOzhDQUVULDRFQUFDckMsMkVBQWVBO3dDQUFDb0MsTUFBTWxDLG9FQUFLQTs7Ozs7Ozs7Ozs7Z0NBSS9CYyxLQUFLTSxHQUFHLEtBQUtFLEtBQUtHLE9BQU8sa0JBQ3hCLDhEQUFDNUIsb0RBQU1BO29DQUNMK0IsV0FBWTtvQ0FDWkcsT0FBTTtvQ0FDTkMsU0FBUyxJQUFNdEIsV0FBV1k7OENBRTFCLDRFQUFDeEIsMkVBQWVBO3dDQUFDb0MsTUFBTWpDLHlFQUFVQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUFyQ3RCcUIsS0FBS0YsR0FBRzs7Ozs7UUE0Q2pDLEVBQUU7O0FBR1Y7R0E1RE1kO0tBQUFBO0FBOEROLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVG9Eby5qc3g/MTcwNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgTW9kYWwsXHJcbiAgTW9kYWxPdmVybGF5LFxyXG4gIE1vZGFsQ29udGVudCxcclxuICBNb2RhbEhlYWRlcixcclxuICBNb2RhbEZvb3RlcixcclxuICBNb2RhbEJvZHksXHJcbiAgTW9kYWxDbG9zZUJ1dHRvbixcclxuICBCdXR0b24sXHJcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5pbXBvcnQge1xyXG4gIGZhQ2lyY2xlQ2hlY2ssXHJcbiAgZmFQZW4sXHJcbiAgZmFUcmFzaENhbixcclxufSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XHJcbmltcG9ydCB7IHRvZG9kYXRhIH0gZnJvbSBcIi4uL2RhdGEvdG9kb2RhdGFcIjtcclxuaW1wb3J0IHsgdXNlRGlzY2xvc3VyZSB9IGZyb20gXCJAY2hha3JhLXVpL2hvb2tzXCI7XHJcbmltcG9ydCB7IENoYXRTdGF0ZSB9IGZyb20gXCIuLi9Db250ZXh0L0NoYXRQcm92aWRlclwiO1xyXG5pbXBvcnQgeyBCdXR0b25Hcm91cCB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XHJcblxyXG5jb25zdCBUb0RvID0gKHsgdG9EbywgbWFya0RvbmUsIHNldFVwZGF0ZURhdGEsIGRlbGV0ZVRhc2sgfSkgPT4ge1xyXG4gIGNvbnN0IFtzaG93TW9kYWwsIHNldFNob3dNb2RhbF0gPSB1c2VTdGF0ZSgpXHJcbiAgY29uc3QgeyB1c2VyIH0gPSBDaGF0U3RhdGUoKTtcclxuICBjb25zb2xlLmxvZyh1c2VyKTtcclxuICBjb25zb2xlLmxvZyh0b0RvKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge3RvRG9cclxuICAgICAgICA/LnNvcnQoKGEsIGIpID0+IChhLl9pZCA+IGIuX2lkID8gMSA6IC0xKSlcclxuICAgICAgICAubWFwKCh0YXNrLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgeyBpc0NvbXBsZXRlZCwgY3JlYXRvciB9ID0gdGFzaztcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiSXMgdXNlci5faWQgPT09IGNyZWF0b3JcIiwgdXNlci5faWQgPT09IGNyZWF0b3IpO1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17dGFzay5faWR9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIGJnLWdyYXktMTAwIHJvdW5kZWQtWzZweF0gbWItWzIwcHhdIHB0LVsxMHB4XSBwci1bMTQwcHhdIHBsLVsxMHB4XSBwYi1bMTVweF0gdGV4dC1jZW50ZXIgdGV4dC1bMjJweF0gcmVsYXRpdmUgZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3Rhc2suaXNDb21wbGV0ZWQgPyBcImZsZXggbGluZS10aHJvdWdoIC4uLlwiIDogXCJcIn1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWyM5OTldIHJvdW5kZWQtWzUwJV0gdy1bMjZweF0gaC1bMjZweF0gZmxleCB0ZXh0LWNlbnRlciB0ZXh0LVsxOHB4XSBtci1bOHB4XSBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7aW5kZXggKyAxfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbGV4XCI+e3Rhc2sudGFza308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC1bNTAlXSAtdHJhbnNsYXRlLXktWzUwJV0gLi4uIHJpZ2h0LVsxNXB4XSBpbmxpbmUtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayB0ZXh0LVsjMDBmZjg5XSBwb2ludGVyLWV2ZW50cy1hdXRvIG1yLVsyMHB4XSBtYi1bMTBweF0gaG92ZXI6dGV4dC1bI2ZmNWUwMF1cIlxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiQ29tcGxldGVkIC8gTm90IENvbXBsZXRlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IG1hcmtEb25lKHRhc2spfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUNpcmNsZUNoZWNrfSAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgIHt1c2VyLl9pZCA9PT0gdGFzay5jcmVhdG9yICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgbXItWzIwcHhdIGN1cnNvci1wb2ludGVyYH1cclxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiRWRpdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbk9wZW59XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVBlbn0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICB7dXNlci5faWQgPT09IHRhc2suY3JlYXRvciAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgbXItWzIwcHhdIGN1cnNvci1wb2ludGVyIGB9XHJcbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkRlbGV0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkZWxldGVUYXNrKHRhc2spfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFUcmFzaENhbn0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb0RvO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJNb2RhbCIsIk1vZGFsT3ZlcmxheSIsIk1vZGFsQ29udGVudCIsIk1vZGFsSGVhZGVyIiwiTW9kYWxGb290ZXIiLCJNb2RhbEJvZHkiLCJNb2RhbENsb3NlQnV0dG9uIiwiQnV0dG9uIiwiRm9udEF3ZXNvbWVJY29uIiwiZmFDaXJjbGVDaGVjayIsImZhUGVuIiwiZmFUcmFzaENhbiIsInRvZG9kYXRhIiwidXNlRGlzY2xvc3VyZSIsIkNoYXRTdGF0ZSIsIkJ1dHRvbkdyb3VwIiwiVG9EbyIsInRvRG8iLCJtYXJrRG9uZSIsInNldFVwZGF0ZURhdGEiLCJkZWxldGVUYXNrIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwidXNlU3RhdGUiLCJ1c2VyIiwiY29uc29sZSIsImxvZyIsInNvcnQiLCJhIiwiYiIsIl9pZCIsIm1hcCIsInRhc2siLCJpbmRleCIsImlzQ29tcGxldGVkIiwiY3JlYXRvciIsIkZyYWdtZW50IiwiZGl2IiwiY2xhc3NOYW1lIiwic3BhbiIsImJ1dHRvbiIsInRpdGxlIiwib25DbGljayIsImUiLCJpY29uIiwib25PcGVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ToDo.jsx\n"));

/***/ })

});