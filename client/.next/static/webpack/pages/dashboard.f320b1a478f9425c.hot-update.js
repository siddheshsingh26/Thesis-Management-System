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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* harmony import */ var _data_tododata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/tododata */ \"./data/tododata.js\");\n/* harmony import */ var _chakra_ui_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/hooks */ \"./node_modules/@chakra-ui/hooks/dist/index.mjs\");\n/* harmony import */ var _Context_ChatProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Context/ChatProvider */ \"./Context/ChatProvider.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst ToDo = (param)=>{\n    let { toDo , markDone , setUpdateData , deleteTask  } = param;\n    _s();\n    const { isOpen , onOpen , onClose  } = (0,_chakra_ui_hooks__WEBPACK_IMPORTED_MODULE_5__.useDisclosure)();\n    const { user  } = (0,_Context_ChatProvider__WEBPACK_IMPORTED_MODULE_4__.ChatState)();\n    console.log(toDo);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: toDo === null || toDo === void 0 ? void 0 : toDo.sort((a, b)=>a._id > b._id ? 1 : -1).map((task, index)=>{\n            const { isCompleted , creator  } = task;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col bg-gray-100 rounded-[6px] mb-[20px] pt-[10px] pr-[140px] pl-[10px] pb-[15px] text-center text-[22px] relative flex\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: task.isCompleted ? \"flex line-through ...\" : \"\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-[#999] rounded-[50%] w-[26px] h-[26px] flex text-center text-[18px] mr-[8px] justify-center items-center \",\n                                        children: index + 1\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ToDo.jsx\",\n                                        lineNumber: 39,\n                                        columnNumber: 21\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"flex\",\n                                        children: task.task\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ToDo.jsx\",\n                                        lineNumber: 42,\n                                        columnNumber: 21\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ToDo.jsx\",\n                                lineNumber: 38,\n                                columnNumber: 19\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ToDo.jsx\",\n                            lineNumber: 35,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"absolute top-[50%] -translate-y-[50%] ... right-[15px] inline-block\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"inline-block text-[#00ff89] pointer-events-auto mr-[20px] mb-[10px] hover:text-[#ff5e00]\",\n                                    title: \"Completed / Not Completed\",\n                                    onClick: (e)=>markDone(task),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n                                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faCircleCheck\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ToDo.jsx\",\n                                        lineNumber: 51,\n                                        columnNumber: 21\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ToDo.jsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 19\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"mr-[20px] cursor-pointer \".concat(user._id == creator ? \"\" : \"hidden\", \"  \"),\n                                    title: \"Edit\",\n                                    onClick: onOpen,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n                                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faPen\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ToDo.jsx\",\n                                        lineNumber: 59,\n                                        columnNumber: 21\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ToDo.jsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 19\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"mr-[20px] cursor-pointer \".concat(user._id == creator ? \"\" : \"hidden\", \" \"),\n                                    title: \"Delete\",\n                                    onClick: ()=>deleteTask(task),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n                                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faTrashCan\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ToDo.jsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 21\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ToDo.jsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 19\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ToDo.jsx\",\n                            lineNumber: 45,\n                            columnNumber: 17\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ToDo.jsx\",\n                    lineNumber: 34,\n                    columnNumber: 15\n                }, undefined)\n            }, task._id, false, {\n                fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ToDo.jsx\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, undefined);\n        })\n    }, void 0, false);\n};\n_s(ToDo, \"b6HgRGUKK6FEfELRcVwOTS4RtgI=\", false, function() {\n    return [\n        _chakra_ui_hooks__WEBPACK_IMPORTED_MODULE_5__.useDisclosure\n    ];\n});\n_c = ToDo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ToDo);\nvar _c;\n$RefreshReg$(_c, \"ToDo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RvRG8uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFBMEI7QUFVQTtBQUN1QztBQUt0QjtBQUNDO0FBQ0s7QUFDRztBQUVwRCxNQUFNZ0IsT0FBTyxTQUFtRDtRQUFsRCxFQUFFQyxLQUFJLEVBQUVDLFNBQVEsRUFBRUMsY0FBYSxFQUFFQyxXQUFVLEVBQUU7O0lBQ3pELE1BQU0sRUFBRUMsT0FBTSxFQUFFQyxPQUFNLEVBQUVDLFFBQU8sRUFBRSxHQUFHVCwrREFBYUE7SUFDakQsTUFBTSxFQUFFVSxLQUFJLEVBQUUsR0FBR1QsZ0VBQVNBO0lBQzFCVSxRQUFRQyxHQUFHLENBQUNUO0lBQ1oscUJBQ0U7a0JBQ0dBLGlCQUFBQSxrQkFBQUEsS0FBQUEsSUFBQUEsS0FDR1UsSUFBSSxDQUFDLENBQUNDLEdBQUdDLElBQU9ELEVBQUVFLEdBQUcsR0FBR0QsRUFBRUMsR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDLEVBQ3ZDQyxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsUUFBVTtZQUNwQixNQUFNLEVBQUVDLFlBQVcsRUFBRUMsUUFBTyxFQUFFLEdBQUdIO1lBQ2pDLHFCQUNFLDhEQUFDaEMsdURBQWM7MEJBQ2IsNEVBQUNxQztvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNEOzRCQUNDQyxXQUFXTixLQUFLRSxXQUFXLEdBQUcsMEJBQTBCLEVBQUU7c0NBRTFELDRFQUFDRztnQ0FBSUMsV0FBVTs7a0RBQ2IsOERBQUNDO3dDQUFLRCxXQUFVO2tEQUNiTCxRQUFROzs7Ozs7a0RBRVgsOERBQUNNO3dDQUFLRCxXQUFVO2tEQUFRTixLQUFLQSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7OztzQ0FHckMsOERBQUNLOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ0U7b0NBQ0NGLFdBQVU7b0NBQ1ZHLE9BQU07b0NBQ05DLFNBQVMsQ0FBQ0MsSUFBTXpCLFNBQVNjOzhDQUV6Qiw0RUFBQ3ZCLDJFQUFlQTt3Q0FBQ21DLE1BQU1sQyw0RUFBYUE7Ozs7Ozs7Ozs7OzhDQUd0Qyw4REFBQzZCO29DQUNDRCxXQUFXLDRCQUE0RCxPQUFoQ2QsS0FBS00sR0FBRyxJQUFJSyxVQUFRLEtBQUcsUUFBUSxFQUFDO29DQUN2RU0sT0FBTTtvQ0FDTkMsU0FBU3BCOzhDQUVULDRFQUFDYiwyRUFBZUE7d0NBQUNtQyxNQUFNakMsb0VBQUtBOzs7Ozs7Ozs7Ozs4Q0FFOUIsOERBQUM0QjtvQ0FDQ0QsV0FBVyw0QkFBNEQsT0FBaENkLEtBQUtNLEdBQUcsSUFBSUssVUFBUSxLQUFHLFFBQVEsRUFBQztvQ0FDdkVNLE9BQU07b0NBQ05DLFNBQVMsSUFBTXRCLFdBQVdZOzhDQUUxQiw0RUFBQ3ZCLDJFQUFlQTt3Q0FBQ21DLE1BQU1oQyx5RUFBVUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2VBakNwQm9CLEtBQUtGLEdBQUc7Ozs7O1FBdUNqQyxFQUFFOztBQUdWO0dBckRNZDs7UUFDZ0NGLDJEQUFhQTs7O0tBRDdDRTtBQXVETiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1RvRG8uanN4PzE3MDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIE1vZGFsLFxyXG4gIE1vZGFsT3ZlcmxheSxcclxuICBNb2RhbENvbnRlbnQsXHJcbiAgTW9kYWxIZWFkZXIsXHJcbiAgTW9kYWxGb290ZXIsXHJcbiAgTW9kYWxCb2R5LFxyXG4gIE1vZGFsQ2xvc2VCdXR0b24sXHJcbiAgQnV0dG9uLFxyXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuaW1wb3J0IHtcclxuICBmYUNpcmNsZUNoZWNrLFxyXG4gIGZhUGVuLFxyXG4gIGZhVHJhc2hDYW4sXHJcbn0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xyXG5pbXBvcnQgeyB0b2RvZGF0YSB9IGZyb20gXCIuLi9kYXRhL3RvZG9kYXRhXCI7XHJcbmltcG9ydCB7IHVzZURpc2Nsb3N1cmUgfSBmcm9tIFwiQGNoYWtyYS11aS9ob29rc1wiO1xyXG5pbXBvcnQgeyBDaGF0U3RhdGUgfSBmcm9tIFwiLi4vQ29udGV4dC9DaGF0UHJvdmlkZXJcIjtcclxuXHJcbmNvbnN0IFRvRG8gPSAoeyB0b0RvLCBtYXJrRG9uZSwgc2V0VXBkYXRlRGF0YSwgZGVsZXRlVGFzayB9KSA9PiB7XHJcbiAgY29uc3QgeyBpc09wZW4sIG9uT3Blbiwgb25DbG9zZSB9ID0gdXNlRGlzY2xvc3VyZSgpO1xyXG4gIGNvbnN0IHsgdXNlciB9ID0gQ2hhdFN0YXRlKCk7XHJcbiAgY29uc29sZS5sb2codG9Ebyk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHt0b0RvXHJcbiAgICAgICAgPy5zb3J0KChhLCBiKSA9PiAoYS5faWQgPiBiLl9pZCA/IDEgOiAtMSkpXHJcbiAgICAgICAgLm1hcCgodGFzaywgaW5kZXgpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHsgaXNDb21wbGV0ZWQsIGNyZWF0b3IgfSA9IHRhc2s7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXt0YXNrLl9pZH0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgYmctZ3JheS0xMDAgcm91bmRlZC1bNnB4XSBtYi1bMjBweF0gcHQtWzEwcHhdIHByLVsxNDBweF0gcGwtWzEwcHhdIHBiLVsxNXB4XSB0ZXh0LWNlbnRlciB0ZXh0LVsyMnB4XSByZWxhdGl2ZSBmbGV4XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17dGFzay5pc0NvbXBsZXRlZCA/IFwiZmxleCBsaW5lLXRocm91Z2ggLi4uXCIgOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bIzk5OV0gcm91bmRlZC1bNTAlXSB3LVsyNnB4XSBoLVsyNnB4XSBmbGV4IHRleHQtY2VudGVyIHRleHQtWzE4cHhdIG1yLVs4cHhdIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHtpbmRleCArIDF9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsZXhcIj57dGFzay50YXNrfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLVs1MCVdIC10cmFuc2xhdGUteS1bNTAlXSAuLi4gcmlnaHQtWzE1cHhdIGlubGluZS1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHRleHQtWyMwMGZmODldIHBvaW50ZXItZXZlbnRzLWF1dG8gbXItWzIwcHhdIG1iLVsxMHB4XSBob3Zlcjp0ZXh0LVsjZmY1ZTAwXVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJDb21wbGV0ZWQgLyBOb3QgQ29tcGxldGVkXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gbWFya0RvbmUodGFzayl9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ2lyY2xlQ2hlY2t9IC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Btci1bMjBweF0gY3Vyc29yLXBvaW50ZXIgJHt1c2VyLl9pZCA9PSBjcmVhdG9yP1wiXCI6XCJoaWRkZW5cIn0gIGB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJFZGl0XCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbk9wZW59XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhUGVufSAvPlxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgbXItWzIwcHhdIGN1cnNvci1wb2ludGVyICR7dXNlci5faWQgPT0gY3JlYXRvcj9cIlwiOlwiaGlkZGVuXCJ9IGB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJEZWxldGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRlbGV0ZVRhc2sodGFzayl9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVHJhc2hDYW59IC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb0RvO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJNb2RhbCIsIk1vZGFsT3ZlcmxheSIsIk1vZGFsQ29udGVudCIsIk1vZGFsSGVhZGVyIiwiTW9kYWxGb290ZXIiLCJNb2RhbEJvZHkiLCJNb2RhbENsb3NlQnV0dG9uIiwiQnV0dG9uIiwiRm9udEF3ZXNvbWVJY29uIiwiZmFDaXJjbGVDaGVjayIsImZhUGVuIiwiZmFUcmFzaENhbiIsInRvZG9kYXRhIiwidXNlRGlzY2xvc3VyZSIsIkNoYXRTdGF0ZSIsIlRvRG8iLCJ0b0RvIiwibWFya0RvbmUiLCJzZXRVcGRhdGVEYXRhIiwiZGVsZXRlVGFzayIsImlzT3BlbiIsIm9uT3BlbiIsIm9uQ2xvc2UiLCJ1c2VyIiwiY29uc29sZSIsImxvZyIsInNvcnQiLCJhIiwiYiIsIl9pZCIsIm1hcCIsInRhc2siLCJpbmRleCIsImlzQ29tcGxldGVkIiwiY3JlYXRvciIsIkZyYWdtZW50IiwiZGl2IiwiY2xhc3NOYW1lIiwic3BhbiIsImJ1dHRvbiIsInRpdGxlIiwib25DbGljayIsImUiLCJpY29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ToDo.jsx\n"));

/***/ })

});