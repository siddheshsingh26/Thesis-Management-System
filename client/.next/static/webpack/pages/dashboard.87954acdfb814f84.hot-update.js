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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* harmony import */ var _data_tododata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/tododata */ \"./data/tododata.js\");\n/* harmony import */ var _chakra_ui_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/hooks */ \"./node_modules/@chakra-ui/hooks/dist/index.mjs\");\n/* harmony import */ var _Context_ChatProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Context/ChatProvider */ \"./Context/ChatProvider.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst ToDo = (param)=>{\n    let { toDo , markDone , setUpdateData , deleteTask  } = param;\n    _s();\n    const { isOpen , onOpen , onClose  } = (0,_chakra_ui_hooks__WEBPACK_IMPORTED_MODULE_5__.useDisclosure)();\n    const { user  } = (0,_Context_ChatProvider__WEBPACK_IMPORTED_MODULE_4__.ChatState)();\n    console.log(user);\n    console.log(toDo);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: toDo === null || toDo === void 0 ? void 0 : toDo.sort((a, b)=>a._id > b._id ? 1 : -1).map((task, index)=>{\n            const { isCompleted , creator  } = task;\n            console.log(\"Is user._id === creator\", user._id === creator);\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col bg-gray-100 rounded-[6px] mb-[20px] pt-[10px] pr-[140px] pl-[10px] pb-[15px] text-center text-[22px] relative flex\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: task.isCompleted ? \"flex line-through ...\" : \"\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-[#999] rounded-[50%] w-[26px] h-[26px] flex text-center text-[18px] mr-[8px] justify-center items-center \",\n                                        children: index + 1\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ToDo.jsx\",\n                                        lineNumber: 42,\n                                        columnNumber: 21\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"flex\",\n                                        children: task.task\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ToDo.jsx\",\n                                        lineNumber: 45,\n                                        columnNumber: 21\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ToDo.jsx\",\n                                lineNumber: 41,\n                                columnNumber: 19\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ToDo.jsx\",\n                            lineNumber: 38,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"absolute top-[50%] -translate-y-[50%] ... right-[15px] inline-block\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"inline-block text-[#00ff89] pointer-events-auto mr-[20px] mb-[10px] hover:text-[#ff5e00]\",\n                                    title: \"Completed / Not Completed\",\n                                    onClick: (e)=>markDone(task),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n                                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faCircleCheck\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ToDo.jsx\",\n                                        lineNumber: 54,\n                                        columnNumber: 21\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ToDo.jsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 19\n                                }, undefined),\n                                user._id === task.creator && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"mr-[20px] cursor-pointer\",\n                                    title: \"Edit\",\n                                    onClick: onOpen,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n                                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faPen\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ToDo.jsx\",\n                                        lineNumber: 63,\n                                        columnNumber: 23\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ToDo.jsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 21\n                                }, undefined),\n                                user._id === task.creator && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                                    className: \"mr-[20px] cursor-pointer \",\n                                    title: \"Delete\",\n                                    onClick: onOpen,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n                                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faTrashCan\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ToDo.jsx\",\n                                            lineNumber: 73,\n                                            columnNumber: 23\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Modal, {\n                                            isOpen: isOpen,\n                                            onClose: onClose,\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.ModalOverlay, {}, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ToDo.jsx\",\n                                                    lineNumber: 75,\n                                                    columnNumber: 9\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.ModalContent, {\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.ModalHeader, {\n                                                            children: \"Modal Title\"\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ToDo.jsx\",\n                                                            lineNumber: 77,\n                                                            columnNumber: 11\n                                                        }, undefined),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.ModalCloseButton, {}, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ToDo.jsx\",\n                                                            lineNumber: 78,\n                                                            columnNumber: 11\n                                                        }, undefined),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.ModalBody, {\n                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Lorem, {\n                                                                count: 2\n                                                            }, void 0, false, {\n                                                                fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ToDo.jsx\",\n                                                                lineNumber: 80,\n                                                                columnNumber: 13\n                                                            }, undefined)\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ToDo.jsx\",\n                                                            lineNumber: 79,\n                                                            columnNumber: 11\n                                                        }, undefined),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.ModalFooter, {\n                                                            children: [\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                                                                    colorScheme: \"blue\",\n                                                                    mr: 3,\n                                                                    onClick: onClose,\n                                                                    children: \"Close\"\n                                                                }, void 0, false, {\n                                                                    fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ToDo.jsx\",\n                                                                    lineNumber: 84,\n                                                                    columnNumber: 13\n                                                                }, undefined),\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                                                                    variant: \"ghost\",\n                                                                    children: \"Secondary Action\"\n                                                                }, void 0, false, {\n                                                                    fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ToDo.jsx\",\n                                                                    lineNumber: 87,\n                                                                    columnNumber: 13\n                                                                }, undefined)\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ToDo.jsx\",\n                                                            lineNumber: 83,\n                                                            columnNumber: 11\n                                                        }, undefined)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ToDo.jsx\",\n                                                    lineNumber: 76,\n                                                    columnNumber: 9\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ToDo.jsx\",\n                                            lineNumber: 74,\n                                            columnNumber: 23\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ToDo.jsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 21\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ToDo.jsx\",\n                            lineNumber: 48,\n                            columnNumber: 17\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ToDo.jsx\",\n                    lineNumber: 37,\n                    columnNumber: 15\n                }, undefined)\n            }, task._id, false, {\n                fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ToDo.jsx\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, undefined);\n        })\n    }, void 0, false);\n};\n_s(ToDo, \"b6HgRGUKK6FEfELRcVwOTS4RtgI=\", false, function() {\n    return [\n        _chakra_ui_hooks__WEBPACK_IMPORTED_MODULE_5__.useDisclosure\n    ];\n});\n_c = ToDo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ToDo);\nvar _c;\n$RefreshReg$(_c, \"ToDo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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NzA2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICBNb2RhbCxcclxuICBNb2RhbE92ZXJsYXksXHJcbiAgTW9kYWxDb250ZW50LFxyXG4gIE1vZGFsSGVhZGVyLFxyXG4gIE1vZGFsRm9vdGVyLFxyXG4gIE1vZGFsQm9keSxcclxuICBNb2RhbENsb3NlQnV0dG9uLFxyXG4gIEJ1dHRvbixcclxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcbmltcG9ydCB7XHJcbiAgZmFDaXJjbGVDaGVjayxcclxuICBmYVBlbixcclxuICBmYVRyYXNoQ2FuLFxyXG59IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcclxuaW1wb3J0IHsgdG9kb2RhdGEgfSBmcm9tIFwiLi4vZGF0YS90b2RvZGF0YVwiO1xyXG5pbXBvcnQgeyB1c2VEaXNjbG9zdXJlIH0gZnJvbSBcIkBjaGFrcmEtdWkvaG9va3NcIjtcclxuaW1wb3J0IHsgQ2hhdFN0YXRlIH0gZnJvbSBcIi4uL0NvbnRleHQvQ2hhdFByb3ZpZGVyXCI7XHJcbmltcG9ydCB7IEJ1dHRvbkdyb3VwIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcclxuXHJcbmNvbnN0IFRvRG8gPSAoeyB0b0RvLCBtYXJrRG9uZSwgc2V0VXBkYXRlRGF0YSwgZGVsZXRlVGFzayB9KSA9PiB7XHJcbiAgY29uc3QgeyBpc09wZW4sIG9uT3Blbiwgb25DbG9zZSB9ID0gdXNlRGlzY2xvc3VyZSgpO1xyXG4gIGNvbnN0IHsgdXNlciB9ID0gQ2hhdFN0YXRlKCk7XHJcbiAgY29uc29sZS5sb2codXNlcik7XHJcbiAgY29uc29sZS5sb2codG9Ebyk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHt0b0RvXHJcbiAgICAgICAgPy5zb3J0KChhLCBiKSA9PiAoYS5faWQgPiBiLl9pZCA/IDEgOiAtMSkpXHJcbiAgICAgICAgLm1hcCgodGFzaywgaW5kZXgpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHsgaXNDb21wbGV0ZWQsIGNyZWF0b3IgfSA9IHRhc2s7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIklzIHVzZXIuX2lkID09PSBjcmVhdG9yXCIsIHVzZXIuX2lkID09PSBjcmVhdG9yKVxyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17dGFzay5faWR9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIGJnLWdyYXktMTAwIHJvdW5kZWQtWzZweF0gbWItWzIwcHhdIHB0LVsxMHB4XSBwci1bMTQwcHhdIHBsLVsxMHB4XSBwYi1bMTVweF0gdGV4dC1jZW50ZXIgdGV4dC1bMjJweF0gcmVsYXRpdmUgZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3Rhc2suaXNDb21wbGV0ZWQgPyBcImZsZXggbGluZS10aHJvdWdoIC4uLlwiIDogXCJcIn1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWyM5OTldIHJvdW5kZWQtWzUwJV0gdy1bMjZweF0gaC1bMjZweF0gZmxleCB0ZXh0LWNlbnRlciB0ZXh0LVsxOHB4XSBtci1bOHB4XSBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7aW5kZXggKyAxfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbGV4XCI+e3Rhc2sudGFza308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC1bNTAlXSAtdHJhbnNsYXRlLXktWzUwJV0gLi4uIHJpZ2h0LVsxNXB4XSBpbmxpbmUtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayB0ZXh0LVsjMDBmZjg5XSBwb2ludGVyLWV2ZW50cy1hdXRvIG1yLVsyMHB4XSBtYi1bMTBweF0gaG92ZXI6dGV4dC1bI2ZmNWUwMF1cIlxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiQ29tcGxldGVkIC8gTm90IENvbXBsZXRlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IG1hcmtEb25lKHRhc2spfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUNpcmNsZUNoZWNrfSAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgIHt1c2VyLl9pZCA9PT0gdGFzay5jcmVhdG9yICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgbXItWzIwcHhdIGN1cnNvci1wb2ludGVyYH1cclxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiRWRpdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbk9wZW59XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVBlbn0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICB7dXNlci5faWQgPT09IHRhc2suY3JlYXRvciAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgbXItWzIwcHhdIGN1cnNvci1wb2ludGVyIGB9XHJcbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkRlbGV0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbk9wZW59XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVRyYXNoQ2FufSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPE1vZGFsIGlzT3Blbj17aXNPcGVufSBvbkNsb3NlPXtvbkNsb3NlfT5cclxuICAgICAgICA8TW9kYWxPdmVybGF5IC8+XHJcbiAgICAgICAgPE1vZGFsQ29udGVudD5cclxuICAgICAgICAgIDxNb2RhbEhlYWRlcj5Nb2RhbCBUaXRsZTwvTW9kYWxIZWFkZXI+XHJcbiAgICAgICAgICA8TW9kYWxDbG9zZUJ1dHRvbiAvPlxyXG4gICAgICAgICAgPE1vZGFsQm9keT5cclxuICAgICAgICAgICAgPExvcmVtIGNvdW50PXsyfSAvPlxyXG4gICAgICAgICAgPC9Nb2RhbEJvZHk+XHJcblxyXG4gICAgICAgICAgPE1vZGFsRm9vdGVyPlxyXG4gICAgICAgICAgICA8QnV0dG9uIGNvbG9yU2NoZW1lPSdibHVlJyBtcj17M30gb25DbGljaz17b25DbG9zZX0+XHJcbiAgICAgICAgICAgICAgQ2xvc2VcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD0nZ2hvc3QnPlNlY29uZGFyeSBBY3Rpb248L0J1dHRvbj5cclxuICAgICAgICAgIDwvTW9kYWxGb290ZXI+XHJcbiAgICAgICAgPC9Nb2RhbENvbnRlbnQ+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9EbztcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiTW9kYWwiLCJNb2RhbE92ZXJsYXkiLCJNb2RhbENvbnRlbnQiLCJNb2RhbEhlYWRlciIsIk1vZGFsRm9vdGVyIiwiTW9kYWxCb2R5IiwiTW9kYWxDbG9zZUJ1dHRvbiIsIkJ1dHRvbiIsIkZvbnRBd2Vzb21lSWNvbiIsImZhQ2lyY2xlQ2hlY2siLCJmYVBlbiIsImZhVHJhc2hDYW4iLCJ0b2RvZGF0YSIsInVzZURpc2Nsb3N1cmUiLCJDaGF0U3RhdGUiLCJCdXR0b25Hcm91cCIsIlRvRG8iLCJ0b0RvIiwibWFya0RvbmUiLCJzZXRVcGRhdGVEYXRhIiwiZGVsZXRlVGFzayIsImlzT3BlbiIsIm9uT3BlbiIsIm9uQ2xvc2UiLCJ1c2VyIiwiY29uc29sZSIsImxvZyIsInNvcnQiLCJhIiwiYiIsIl9pZCIsIm1hcCIsInRhc2siLCJpbmRleCIsImlzQ29tcGxldGVkIiwiY3JlYXRvciIsIkZyYWdtZW50IiwiZGl2IiwiY2xhc3NOYW1lIiwic3BhbiIsImJ1dHRvbiIsInRpdGxlIiwib25DbGljayIsImUiLCJpY29uIiwiTG9yZW0iLCJjb3VudCIsImNvbG9yU2NoZW1lIiwibXIiLCJ2YXJpYW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ToDo.jsx\n"));

/***/ })

});