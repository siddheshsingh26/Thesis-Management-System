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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* harmony import */ var _data_tododata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/tododata */ \"./data/tododata.js\");\n/* harmony import */ var _Context_ChatProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Context/ChatProvider */ \"./Context/ChatProvider.js\");\n/* harmony import */ var _miscellaneous_DeleteModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./miscellaneous/DeleteModal */ \"./components/miscellaneous/DeleteModal.js\");\n/* harmony import */ var _miscellaneous_UpdateModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./miscellaneous/UpdateModal */ \"./components/miscellaneous/UpdateModal.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst ToDo = (param)=>{\n    let { toDo , markDone , updateTask , deleteTask  } = param;\n    _s();\n    const [showDeleteModal, setShowDeleteModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [showUpdateModal, setShowUpdateModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [selectedTask, setSelectedTask] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const onOpenModal = (task)=>{\n        setSelectedTask(task);\n    };\n    const { user  } = (0,_Context_ChatProvider__WEBPACK_IMPORTED_MODULE_4__.ChatState)();\n    console.log(user);\n    console.log(toDo);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: toDo.map((task, index)=>{\n            const { isCompleted , creator  } = task;\n            console.log(\"Is user._id === creator\", user._id === creator);\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col bg-gray-100 rounded-[6px] mb-[20px] pt-[10px] pr-[140px] pl-[10px] pb-[15px] text-center text-[22px] relative flex\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: task.isCompleted ? \"flex line-through ...\" : \"\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex items-center\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-[#999] rounded-[50%] w-[26px] h-[26px] flex text-center text-[18px] mr-[8px] justify-center items-center \",\n                                            children: index + 1\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ToDo.jsx\",\n                                            lineNumber: 47,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"flex\",\n                                            children: task.task\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ToDo.jsx\",\n                                            lineNumber: 50,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ToDo.jsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ToDo.jsx\",\n                                lineNumber: 45,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"absolute top-[50%] -translate-y-[50%] ... right-[15px] inline-block\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"inline-block text-[#00ff89] pointer-events-auto mr-[20px] mb-[10px] hover:text-[#ff5e00]\",\n                                        title: \"\".concat(task.isCompleted ? \"Completed\" : \"Not Completed\"),\n                                        onClick: (e)=>markDone(task),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n                                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faCircleCheck\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ToDo.jsx\",\n                                            lineNumber: 59,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ToDo.jsx\",\n                                        lineNumber: 54,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    user._id === task.creator && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"mr-[20px] cursor-pointer\",\n                                        title: \"Edit\",\n                                        onClick: ()=>onOpenModal(task),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n                                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faPen\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ToDo.jsx\",\n                                            lineNumber: 68,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ToDo.jsx\",\n                                        lineNumber: 63,\n                                        columnNumber: 19\n                                    }, undefined),\n                                    user._id === task.creator && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, {\n                                        className: \"mr-[20px] cursor-pointer \",\n                                        title: \"Delete\",\n                                        onClick: ()=>setShowDeleteModal(true),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n                                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faTrashCan\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ToDo.jsx\",\n                                            lineNumber: 78,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ToDo.jsx\",\n                                        lineNumber: 73,\n                                        columnNumber: 19\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ToDo.jsx\",\n                                lineNumber: 53,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ToDo.jsx\",\n                        lineNumber: 44,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_miscellaneous_DeleteModal__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        isVisible: showDeleteModal,\n                        onClose: ()=>setShowDeleteModal(false),\n                        deleteTask: selectedTask,\n                        task: task\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ToDo.jsx\",\n                        lineNumber: 83,\n                        columnNumber: 13\n                    }, undefined),\n                    selectedTask && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_miscellaneous_UpdateModal__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        isVisible: showUpdateModal,\n                        onClose: ()=>setShowUpdateModal(false),\n                        updateTask: selectedTask,\n                        task: task\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ToDo.jsx\",\n                        lineNumber: 90,\n                        columnNumber: 15\n                    }, undefined)\n                ]\n            }, task._id, true, {\n                fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\components\\\\ToDo.jsx\",\n                lineNumber: 43,\n                columnNumber: 11\n            }, undefined);\n        })\n    }, void 0, false);\n};\n_s(ToDo, \"h3i57rFKxhmIBNyshrzrMyPIbmE=\");\n_c = ToDo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ToDo);\nvar _c;\n$RefreshReg$(_c, \"ToDo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RvRG8uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOztBQUF3QztBQVVkO0FBQ3VDO0FBS3RCO0FBQ0M7QUFDSztBQUNHO0FBQ1I7QUFDVTtBQUNBO0FBRXRELE1BQU1vQixPQUFPLFNBQWdEO1FBQS9DLEVBQUVDLEtBQUksRUFBRUMsU0FBUSxFQUFFQyxXQUFVLEVBQUVDLFdBQVUsRUFBRTs7SUFDdEQsTUFBTSxDQUFDQyxpQkFBaUJDLG1CQUFtQixHQUFHekIsK0NBQVFBLENBQUMsS0FBSztJQUM1RCxNQUFNLENBQUMwQixpQkFBaUJDLG1CQUFtQixHQUFHM0IsK0NBQVFBLENBQUMsS0FBSztJQUM1RCxNQUFNLENBQUM0QixjQUFjQyxnQkFBZ0IsR0FBRzdCLCtDQUFRQSxDQUFDLENBQUM7SUFFbEQsTUFBTThCLGNBQWMsQ0FBQ0MsT0FBUztRQUM1QkYsZ0JBQWdCRTtJQUNsQjtJQUVBLE1BQU0sRUFBRUMsS0FBSSxFQUFFLEdBQUdqQixnRUFBU0E7SUFDMUJrQixRQUFRQyxHQUFHLENBQUNGO0lBQ1pDLFFBQVFDLEdBQUcsQ0FBQ2Q7SUFDWixxQkFDRTtrQkFDR0EsS0FBS2UsR0FBRyxDQUFDLENBQUNKLE1BQU1LLFFBQVU7WUFDekIsTUFBTSxFQUFFQyxZQUFXLEVBQUVDLFFBQU8sRUFBRSxHQUFHUDtZQUNqQ0UsUUFBUUMsR0FBRyxDQUFDLDJCQUEyQkYsS0FBS08sR0FBRyxLQUFLRDtZQUNwRCxxQkFDRSw4REFBQ3ZDLHVEQUFjOztrQ0FDYiw4REFBQzBDO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0Q7Z0NBQUlDLFdBQVdYLEtBQUtNLFdBQVcsR0FBRywwQkFBMEIsRUFBRTswQ0FDN0QsNEVBQUNJO29DQUFJQyxXQUFVOztzREFDYiw4REFBQ0M7NENBQUtELFdBQVU7c0RBQ2JOLFFBQVE7Ozs7OztzREFFWCw4REFBQ087NENBQUtELFdBQVU7c0RBQVFYLEtBQUtBLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQUdyQyw4REFBQ1U7Z0NBQUlDLFdBQVU7O2tEQUNiLDhEQUFDRTt3Q0FDQ0YsV0FBVTt3Q0FDVkcsT0FBTyxHQUFvRCxPQUFqRGQsS0FBS00sV0FBVyxHQUFHLGNBQWMsZUFBZTt3Q0FDMURTLFNBQVMsQ0FBQ0MsSUFBTTFCLFNBQVNVO2tEQUV6Qiw0RUFBQ3RCLDJFQUFlQTs0Q0FBQ3VDLE1BQU10Qyw0RUFBYUE7Ozs7Ozs7Ozs7O29DQUdyQ3NCLEtBQUtPLEdBQUcsS0FBS1IsS0FBS08sT0FBTyxrQkFDeEIsOERBQUNLO3dDQUNDRCxXQUFZO3dDQUNaRyxPQUFNO3dDQUNOQyxTQUFTLElBQU1oQixZQUFZQztrREFFM0IsNEVBQUN0QiwyRUFBZUE7NENBQUN1QyxNQUFNckMsb0VBQUtBOzs7Ozs7Ozs7OztvQ0FJL0JxQixLQUFLTyxHQUFHLEtBQUtSLEtBQUtPLE9BQU8sa0JBQ3hCLDhEQUFDOUIsb0RBQU1BO3dDQUNMa0MsV0FBWTt3Q0FDWkcsT0FBTTt3Q0FDTkMsU0FBUyxJQUFNckIsbUJBQW1CLElBQUk7a0RBRXRDLDRFQUFDaEIsMkVBQWVBOzRDQUFDdUMsTUFBTXBDLHlFQUFVQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBS3pDLDhEQUFDSyxrRUFBV0E7d0JBQ1ZnQyxXQUFXekI7d0JBQ1gwQixTQUFTLElBQU16QixtQkFBbUIsS0FBSzt3QkFDdkNGLFlBQVlLO3dCQUNaRyxNQUFNQTs7Ozs7O29CQUVQSCw4QkFDQyw4REFBQ1Ysa0VBQVdBO3dCQUNWK0IsV0FBV3ZCO3dCQUNYd0IsU0FBUyxJQUFNdkIsbUJBQW1CLEtBQUs7d0JBQ3ZDTCxZQUFZTTt3QkFDWkcsTUFBTUE7Ozs7Ozs7ZUFuRFNBLEtBQUtRLEdBQUc7Ozs7O1FBd0RqQzs7QUFHTjtHQTdFTXBCO0tBQUFBO0FBK0VOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVG9Eby5qc3g/MTcwNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICBNb2RhbCxcclxuICBNb2RhbE92ZXJsYXksXHJcbiAgTW9kYWxDb250ZW50LFxyXG4gIE1vZGFsSGVhZGVyLFxyXG4gIE1vZGFsRm9vdGVyLFxyXG4gIE1vZGFsQm9keSxcclxuICBNb2RhbENsb3NlQnV0dG9uLFxyXG4gIEJ1dHRvbixcclxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcbmltcG9ydCB7XHJcbiAgZmFDaXJjbGVDaGVjayxcclxuICBmYVBlbixcclxuICBmYVRyYXNoQ2FuLFxyXG59IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcclxuaW1wb3J0IHsgdG9kb2RhdGEgfSBmcm9tIFwiLi4vZGF0YS90b2RvZGF0YVwiO1xyXG5pbXBvcnQgeyB1c2VEaXNjbG9zdXJlIH0gZnJvbSBcIkBjaGFrcmEtdWkvaG9va3NcIjtcclxuaW1wb3J0IHsgQ2hhdFN0YXRlIH0gZnJvbSBcIi4uL0NvbnRleHQvQ2hhdFByb3ZpZGVyXCI7XHJcbmltcG9ydCB7IEJ1dHRvbkdyb3VwIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IERlbGV0ZU1vZGFsIGZyb20gXCIuL21pc2NlbGxhbmVvdXMvRGVsZXRlTW9kYWxcIjtcclxuaW1wb3J0IFVwZGF0ZU1vZGFsIGZyb20gXCIuL21pc2NlbGxhbmVvdXMvVXBkYXRlTW9kYWxcIjtcclxuXHJcbmNvbnN0IFRvRG8gPSAoeyB0b0RvLCBtYXJrRG9uZSwgdXBkYXRlVGFzaywgZGVsZXRlVGFzayB9KSA9PiB7XHJcbiAgY29uc3QgW3Nob3dEZWxldGVNb2RhbCwgc2V0U2hvd0RlbGV0ZU1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2hvd1VwZGF0ZU1vZGFsLCBzZXRTaG93VXBkYXRlTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzZWxlY3RlZFRhc2ssIHNldFNlbGVjdGVkVGFza10gPSB1c2VTdGF0ZSh7fSk7XHJcblxyXG4gIGNvbnN0IG9uT3Blbk1vZGFsID0gKHRhc2spID0+IHtcclxuICAgIHNldFNlbGVjdGVkVGFzayh0YXNrKTtcclxuICB9O1xyXG5cclxuICBjb25zdCB7IHVzZXIgfSA9IENoYXRTdGF0ZSgpO1xyXG4gIGNvbnNvbGUubG9nKHVzZXIpO1xyXG4gIGNvbnNvbGUubG9nKHRvRG8pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7dG9Eby5tYXAoKHRhc2ssIGluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBpc0NvbXBsZXRlZCwgY3JlYXRvciB9ID0gdGFzaztcclxuICAgICAgICBjb25zb2xlLmxvZyhcIklzIHVzZXIuX2lkID09PSBjcmVhdG9yXCIsIHVzZXIuX2lkID09PSBjcmVhdG9yKTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17dGFzay5faWR9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBiZy1ncmF5LTEwMCByb3VuZGVkLVs2cHhdIG1iLVsyMHB4XSBwdC1bMTBweF0gcHItWzE0MHB4XSBwbC1bMTBweF0gcGItWzE1cHhdIHRleHQtY2VudGVyIHRleHQtWzIycHhdIHJlbGF0aXZlIGZsZXhcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGFzay5pc0NvbXBsZXRlZCA/IFwiZmxleCBsaW5lLXRocm91Z2ggLi4uXCIgOiBcIlwifT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bIzk5OV0gcm91bmRlZC1bNTAlXSB3LVsyNnB4XSBoLVsyNnB4XSBmbGV4IHRleHQtY2VudGVyIHRleHQtWzE4cHhdIG1yLVs4cHhdIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBcIj5cclxuICAgICAgICAgICAgICAgICAgICB7aW5kZXggKyAxfVxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsZXhcIj57dGFzay50YXNrfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLVs1MCVdIC10cmFuc2xhdGUteS1bNTAlXSAuLi4gcmlnaHQtWzE1cHhdIGlubGluZS1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgdGV4dC1bIzAwZmY4OV0gcG9pbnRlci1ldmVudHMtYXV0byBtci1bMjBweF0gbWItWzEwcHhdIGhvdmVyOnRleHQtWyNmZjVlMDBdXCJcclxuICAgICAgICAgICAgICAgICAgdGl0bGU9e2Ake3Rhc2suaXNDb21wbGV0ZWQgPyBcIkNvbXBsZXRlZFwiIDogXCJOb3QgQ29tcGxldGVkXCJ9YH1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IG1hcmtEb25lKHRhc2spfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ2lyY2xlQ2hlY2t9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICB7dXNlci5faWQgPT09IHRhc2suY3JlYXRvciAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgbXItWzIwcHhdIGN1cnNvci1wb2ludGVyYH1cclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkVkaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uT3Blbk1vZGFsKHRhc2spfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVBlbn0gLz5cclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICB7dXNlci5faWQgPT09IHRhc2suY3JlYXRvciAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Btci1bMjBweF0gY3Vyc29yLXBvaW50ZXIgYH1cclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkRlbGV0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd0RlbGV0ZU1vZGFsKHRydWUpfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVRyYXNoQ2FufSAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8RGVsZXRlTW9kYWxcclxuICAgICAgICAgICAgICBpc1Zpc2libGU9e3Nob3dEZWxldGVNb2RhbH1cclxuICAgICAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRTaG93RGVsZXRlTW9kYWwoZmFsc2UpfVxyXG4gICAgICAgICAgICAgIGRlbGV0ZVRhc2s9e3NlbGVjdGVkVGFza31cclxuICAgICAgICAgICAgICB0YXNrPXt0YXNrfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB7c2VsZWN0ZWRUYXNrICYmIChcclxuICAgICAgICAgICAgICA8VXBkYXRlTW9kYWxcclxuICAgICAgICAgICAgICAgIGlzVmlzaWJsZT17c2hvd1VwZGF0ZU1vZGFsfVxyXG4gICAgICAgICAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0U2hvd1VwZGF0ZU1vZGFsKGZhbHNlKX1cclxuICAgICAgICAgICAgICAgIHVwZGF0ZVRhc2s9e3NlbGVjdGVkVGFza31cclxuICAgICAgICAgICAgICAgIHRhc2s9e3Rhc2t9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgKTtcclxuICAgICAgfSl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9EbztcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJNb2RhbCIsIk1vZGFsT3ZlcmxheSIsIk1vZGFsQ29udGVudCIsIk1vZGFsSGVhZGVyIiwiTW9kYWxGb290ZXIiLCJNb2RhbEJvZHkiLCJNb2RhbENsb3NlQnV0dG9uIiwiQnV0dG9uIiwiRm9udEF3ZXNvbWVJY29uIiwiZmFDaXJjbGVDaGVjayIsImZhUGVuIiwiZmFUcmFzaENhbiIsInRvZG9kYXRhIiwidXNlRGlzY2xvc3VyZSIsIkNoYXRTdGF0ZSIsIkJ1dHRvbkdyb3VwIiwiRGVsZXRlTW9kYWwiLCJVcGRhdGVNb2RhbCIsIlRvRG8iLCJ0b0RvIiwibWFya0RvbmUiLCJ1cGRhdGVUYXNrIiwiZGVsZXRlVGFzayIsInNob3dEZWxldGVNb2RhbCIsInNldFNob3dEZWxldGVNb2RhbCIsInNob3dVcGRhdGVNb2RhbCIsInNldFNob3dVcGRhdGVNb2RhbCIsInNlbGVjdGVkVGFzayIsInNldFNlbGVjdGVkVGFzayIsIm9uT3Blbk1vZGFsIiwidGFzayIsInVzZXIiLCJjb25zb2xlIiwibG9nIiwibWFwIiwiaW5kZXgiLCJpc0NvbXBsZXRlZCIsImNyZWF0b3IiLCJfaWQiLCJGcmFnbWVudCIsImRpdiIsImNsYXNzTmFtZSIsInNwYW4iLCJidXR0b24iLCJ0aXRsZSIsIm9uQ2xpY2siLCJlIiwiaWNvbiIsImlzVmlzaWJsZSIsIm9uQ2xvc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ToDo.jsx\n"));

/***/ })

});