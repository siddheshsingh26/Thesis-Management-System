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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* harmony import */ var _data_tododata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/tododata */ \"./data/tododata.js\");\n/* harmony import */ var _Context_ChatProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Context/ChatProvider */ \"./Context/ChatProvider.js\");\n/* harmony import */ var _miscellaneous_DeleteModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./miscellaneous/DeleteModal */ \"./components/miscellaneous/DeleteModal.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst ToDo = (param)=>{\n    let { toDo , markDone , setUpdateData , deleteTask  } = param;\n    _s();\n    const [showModal, setShowModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { user  } = (0,_Context_ChatProvider__WEBPACK_IMPORTED_MODULE_4__.ChatState)();\n    console.log(user);\n    console.log(toDo);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: toDo === null || toDo === void 0 ? void 0 : toDo.sort((a, b)=>a._id > b._id ? 1 : -1).map((task, index)=>{\n            const { isCompleted , creator  } = task;\n            console.log(\"Is user._id === creator\", user._id === creator);\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col bg-gray-100 rounded-[6px] mb-[20px] pt-[10px] pr-[140px] pl-[10px] pb-[15px] text-center text-[22px] relative flex\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: task.isCompleted ? \"flex line-through ...\" : \"\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex items-center\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-[#999] rounded-[50%] w-[26px] h-[26px] flex text-center text-[18px] mr-[8px] justify-center items-center \",\n                                            children: index + 1\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ToDo.jsx\",\n                                            lineNumber: 43,\n                                            columnNumber: 21\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"flex\",\n                                            children: task.task\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ToDo.jsx\",\n                                            lineNumber: 46,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ToDo.jsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 19\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ToDo.jsx\",\n                                lineNumber: 39,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"absolute top-[50%] -translate-y-[50%] ... right-[15px] inline-block\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"inline-block text-[#00ff89] pointer-events-auto mr-[20px] mb-[10px] hover:text-[#ff5e00]\",\n                                        title: \"Completed / Not Completed\",\n                                        onClick: (e)=>markDone(task),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n                                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faCircleCheck\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ToDo.jsx\",\n                                            lineNumber: 55,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ToDo.jsx\",\n                                        lineNumber: 50,\n                                        columnNumber: 19\n                                    }, undefined),\n                                    user._id === task.creator && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"mr-[20px] cursor-pointer\",\n                                        title: \"Edit\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n                                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faPen\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ToDo.jsx\",\n                                            lineNumber: 63,\n                                            columnNumber: 23\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ToDo.jsx\",\n                                        lineNumber: 59,\n                                        columnNumber: 21\n                                    }, undefined),\n                                    user._id === task.creator && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                                        className: \"mr-[20px] cursor-pointer \",\n                                        title: \"Delete\",\n                                        onClick: ()=>setShowModal(true),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n                                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faTrashCan\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ToDo.jsx\",\n                                            lineNumber: 73,\n                                            columnNumber: 23\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ToDo.jsx\",\n                                        lineNumber: 68,\n                                        columnNumber: 21\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ToDo.jsx\",\n                                lineNumber: 49,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ToDo.jsx\",\n                        lineNumber: 38,\n                        columnNumber: 15\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_miscellaneous_DeleteModal__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        isVisible: showModal,\n                        onClose: ()=>setShowModal(false),\n                        deleteTask: deleteTask,\n                        task: task\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ToDo.jsx\",\n                        lineNumber: 78,\n                        columnNumber: 15\n                    }, undefined)\n                ]\n            }, task._id, true, {\n                fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ToDo.jsx\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, undefined);\n        })\n    }, void 0, false);\n};\n_s(ToDo, \"uVlnG5KLfXemZk5i5Fl+Cg356FU=\");\n_c = ToDo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ToDo);\nvar _c;\n$RefreshReg$(_c, \"ToDo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RvRG8uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQXdDO0FBVWQ7QUFDdUM7QUFLdEI7QUFDQztBQUNLO0FBQ0c7QUFDUjtBQUNVO0FBRXRELE1BQU1tQixPQUFPLFNBQW1EO1FBQWxELEVBQUVDLEtBQUksRUFBRUMsU0FBUSxFQUFFQyxjQUFhLEVBQUVDLFdBQVUsRUFBRTs7SUFDekQsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUd4QiwrQ0FBUUEsQ0FBQyxLQUFLO0lBQ2hELE1BQU0sRUFBRXlCLEtBQUksRUFBRSxHQUFHVixnRUFBU0E7SUFDMUJXLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFDWkMsUUFBUUMsR0FBRyxDQUFDUjtJQUNaLHFCQUNFO2tCQUNHQSxpQkFBQUEsa0JBQUFBLEtBQUFBLElBQUFBLEtBQ0dTLElBQUksQ0FBQyxDQUFDQyxHQUFHQyxJQUFPRCxFQUFFRSxHQUFHLEdBQUdELEVBQUVDLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxFQUN2Q0MsR0FBRyxDQUFDLENBQUNDLE1BQU1DLFFBQVU7WUFDcEIsTUFBTSxFQUFFQyxZQUFXLEVBQUVDLFFBQU8sRUFBRSxHQUFHSDtZQUNqQ1AsUUFBUUMsR0FBRyxDQUFDLDJCQUEyQkYsS0FBS00sR0FBRyxLQUFLSztZQUNwRCxxQkFDRSw4REFBQ3JDLHVEQUFjOztrQ0FDYiw4REFBQ3VDO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0Q7Z0NBQ0NDLFdBQVdOLEtBQUtFLFdBQVcsR0FBRywwQkFBMEIsRUFBRTswQ0FFMUQsNEVBQUNHO29DQUFJQyxXQUFVOztzREFDYiw4REFBQ0M7NENBQUtELFdBQVU7c0RBQ2JMLFFBQVE7Ozs7OztzREFFWCw4REFBQ007NENBQUtELFdBQVU7c0RBQVFOLEtBQUtBLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQUdyQyw4REFBQ0s7Z0NBQUlDLFdBQVU7O2tEQUNiLDhEQUFDRTt3Q0FDQ0YsV0FBVTt3Q0FDVkcsT0FBTTt3Q0FDTkMsU0FBUyxDQUFDQyxJQUFNeEIsU0FBU2E7a0RBRXpCLDRFQUFDeEIsMkVBQWVBOzRDQUFDb0MsTUFBTW5DLDRFQUFhQTs7Ozs7Ozs7Ozs7b0NBR3JDZSxLQUFLTSxHQUFHLEtBQUtFLEtBQUtHLE9BQU8sa0JBQ3hCLDhEQUFDSTt3Q0FDQ0QsV0FBWTt3Q0FDWkcsT0FBTTtrREFFTiw0RUFBQ2pDLDJFQUFlQTs0Q0FBQ29DLE1BQU1sQyxvRUFBS0E7Ozs7Ozs7Ozs7O29DQUkvQmMsS0FBS00sR0FBRyxLQUFLRSxLQUFLRyxPQUFPLGtCQUN4Qiw4REFBQzVCLG9EQUFNQTt3Q0FDTCtCLFdBQVk7d0NBQ1pHLE9BQU07d0NBQ05DLFNBQVMsSUFBTW5CLGFBQWEsSUFBSTtrREFFaEMsNEVBQUNmLDJFQUFlQTs0Q0FBQ29DLE1BQU1qQyx5RUFBVUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUt6Qyw4REFBQ0ssa0VBQVdBO3dCQUNWNkIsV0FBV3ZCO3dCQUNYd0IsU0FBUyxJQUFNdkIsYUFBYSxLQUFLO3dCQUNqQ0YsWUFBWUE7d0JBQ1pXLE1BQU1BOzs7Ozs7O2VBN0NXQSxLQUFLRixHQUFHOzs7OztRQWlEakMsRUFBRTs7QUFHVjtHQWpFTWI7S0FBQUE7QUFtRU4sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ub0RvLmpzeD8xNzA2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIE1vZGFsLFxyXG4gIE1vZGFsT3ZlcmxheSxcclxuICBNb2RhbENvbnRlbnQsXHJcbiAgTW9kYWxIZWFkZXIsXHJcbiAgTW9kYWxGb290ZXIsXHJcbiAgTW9kYWxCb2R5LFxyXG4gIE1vZGFsQ2xvc2VCdXR0b24sXHJcbiAgQnV0dG9uLFxyXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuaW1wb3J0IHtcclxuICBmYUNpcmNsZUNoZWNrLFxyXG4gIGZhUGVuLFxyXG4gIGZhVHJhc2hDYW4sXHJcbn0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xyXG5pbXBvcnQgeyB0b2RvZGF0YSB9IGZyb20gXCIuLi9kYXRhL3RvZG9kYXRhXCI7XHJcbmltcG9ydCB7IHVzZURpc2Nsb3N1cmUgfSBmcm9tIFwiQGNoYWtyYS11aS9ob29rc1wiO1xyXG5pbXBvcnQgeyBDaGF0U3RhdGUgfSBmcm9tIFwiLi4vQ29udGV4dC9DaGF0UHJvdmlkZXJcIjtcclxuaW1wb3J0IHsgQnV0dG9uR3JvdXAgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgRGVsZXRlTW9kYWwgZnJvbSBcIi4vbWlzY2VsbGFuZW91cy9EZWxldGVNb2RhbFwiO1xyXG5cclxuY29uc3QgVG9EbyA9ICh7IHRvRG8sIG1hcmtEb25lLCBzZXRVcGRhdGVEYXRhLCBkZWxldGVUYXNrIH0pID0+IHtcclxuICBjb25zdCBbc2hvd01vZGFsLCBzZXRTaG93TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHsgdXNlciB9ID0gQ2hhdFN0YXRlKCk7XHJcbiAgY29uc29sZS5sb2codXNlcik7XHJcbiAgY29uc29sZS5sb2codG9Ebyk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHt0b0RvXHJcbiAgICAgICAgPy5zb3J0KChhLCBiKSA9PiAoYS5faWQgPiBiLl9pZCA/IDEgOiAtMSkpXHJcbiAgICAgICAgLm1hcCgodGFzaywgaW5kZXgpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHsgaXNDb21wbGV0ZWQsIGNyZWF0b3IgfSA9IHRhc2s7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIklzIHVzZXIuX2lkID09PSBjcmVhdG9yXCIsIHVzZXIuX2lkID09PSBjcmVhdG9yKTtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e3Rhc2suX2lkfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBiZy1ncmF5LTEwMCByb3VuZGVkLVs2cHhdIG1iLVsyMHB4XSBwdC1bMTBweF0gcHItWzE0MHB4XSBwbC1bMTBweF0gcGItWzE1cHhdIHRleHQtY2VudGVyIHRleHQtWzIycHhdIHJlbGF0aXZlIGZsZXhcIj5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXt0YXNrLmlzQ29tcGxldGVkID8gXCJmbGV4IGxpbmUtdGhyb3VnaCAuLi5cIiA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsjOTk5XSByb3VuZGVkLVs1MCVdIHctWzI2cHhdIGgtWzI2cHhdIGZsZXggdGV4dC1jZW50ZXIgdGV4dC1bMThweF0gbXItWzhweF0ganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2luZGV4ICsgMX1cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxleFwiPnt0YXNrLnRhc2t9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtWzUwJV0gLXRyYW5zbGF0ZS15LVs1MCVdIC4uLiByaWdodC1bMTVweF0gaW5saW5lLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgdGV4dC1bIzAwZmY4OV0gcG9pbnRlci1ldmVudHMtYXV0byBtci1bMjBweF0gbWItWzEwcHhdIGhvdmVyOnRleHQtWyNmZjVlMDBdXCJcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkNvbXBsZXRlZCAvIE5vdCBDb21wbGV0ZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBtYXJrRG9uZSh0YXNrKX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFDaXJjbGVDaGVja30gLz5cclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICB7dXNlci5faWQgPT09IHRhc2suY3JlYXRvciAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YG1yLVsyMHB4XSBjdXJzb3ItcG9pbnRlcmB9XHJcbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkVkaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFQZW59IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAge3VzZXIuX2lkID09PSB0YXNrLmNyZWF0b3IgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YG1yLVsyMHB4XSBjdXJzb3ItcG9pbnRlciBgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJEZWxldGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd01vZGFsKHRydWUpfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFUcmFzaENhbn0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxEZWxldGVNb2RhbFxyXG4gICAgICAgICAgICAgICAgaXNWaXNpYmxlPXtzaG93TW9kYWx9XHJcbiAgICAgICAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRTaG93TW9kYWwoZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgZGVsZXRlVGFzaz17ZGVsZXRlVGFza31cclxuICAgICAgICAgICAgICAgIHRhc2s9e3Rhc2t9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9EbztcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJNb2RhbCIsIk1vZGFsT3ZlcmxheSIsIk1vZGFsQ29udGVudCIsIk1vZGFsSGVhZGVyIiwiTW9kYWxGb290ZXIiLCJNb2RhbEJvZHkiLCJNb2RhbENsb3NlQnV0dG9uIiwiQnV0dG9uIiwiRm9udEF3ZXNvbWVJY29uIiwiZmFDaXJjbGVDaGVjayIsImZhUGVuIiwiZmFUcmFzaENhbiIsInRvZG9kYXRhIiwidXNlRGlzY2xvc3VyZSIsIkNoYXRTdGF0ZSIsIkJ1dHRvbkdyb3VwIiwiRGVsZXRlTW9kYWwiLCJUb0RvIiwidG9EbyIsIm1hcmtEb25lIiwic2V0VXBkYXRlRGF0YSIsImRlbGV0ZVRhc2siLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJ1c2VyIiwiY29uc29sZSIsImxvZyIsInNvcnQiLCJhIiwiYiIsIl9pZCIsIm1hcCIsInRhc2siLCJpbmRleCIsImlzQ29tcGxldGVkIiwiY3JlYXRvciIsIkZyYWdtZW50IiwiZGl2IiwiY2xhc3NOYW1lIiwic3BhbiIsImJ1dHRvbiIsInRpdGxlIiwib25DbGljayIsImUiLCJpY29uIiwiaXNWaXNpYmxlIiwib25DbG9zZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ToDo.jsx\n"));

/***/ })

});