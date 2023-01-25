"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/myprojects",{

/***/ "./pages/myprojects.js":
/*!*****************************!*\
  !*** ./pages/myprojects.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_supabaseClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/supabaseClient */ \"./config/supabaseClient.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst uploads = ()=>{\n    _s();\n    const [uploadedFiles, setUploadedFiles] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [bucketData, setBucketData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const toast = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useToast)();\n    const handleUpload = async (e)=>{\n        let file;\n        if (e.target.files) {\n            file = e.target.files[0];\n        }\n        const { data , error  } = await _config_supabaseClient__WEBPACK_IMPORTED_MODULE_1__.supabase.storage.from(\"thesis\").upload(\"public/\" + (file === null || file === void 0 ? void 0 : file.name), file);\n        if (data) {\n            console.log(data);\n            const res = await fetch(\"http://localhost:5000/upload\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(data)\n            });\n            const jsonRes = await res.json();\n            console.log(\"positve response returned\");\n            console.log(\"jsonRes\", jsonRes);\n            console.log(uploadedFiles);\n        } else if (error) {\n            console.log(error);\n        }\n    };\n    const downloadFiles = async (fileName)=>{\n        try {\n            console.log(\"Inside download files at the frontend\");\n            console.log(\"About to send a get request\");\n            const res = await fetch(\"http://localhost:5000/api/uploads?fileName=\".concat(fileName), {\n                method: \"GET\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n            console.log(\"After the req\");\n            console.log(res);\n            toast({\n                title: \"File Downloaded\",\n                status: \"success\",\n                duration: 5000,\n                isClosable: true,\n                position: \"top\"\n            });\n        } catch (error) {\n            console.log(\"ERROR OCCURRED WHILE FETCHING FILES\");\n            console.log(error);\n        }\n    };\n    const getFromBucket = async ()=>{\n        const { data , error  } = await _config_supabaseClient__WEBPACK_IMPORTED_MODULE_1__.supabase.storage.from(\"thesis\").list(\"public\", {\n            limit: 100,\n            offset: 0,\n            sortBy: {\n                column: \"name\",\n                order: \"asc\"\n            }\n        });\n        setBucketData(data);\n        console.log(data);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        getFromBucket();\n    }, []);\n    //   className=\"flex min-h-scree flex-col items-center justify-center py-2 \"\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-[50%] mx-auto\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    class: \"max-w-sm p-6 text-center bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"#\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                class: \"mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white\",\n                                children: \"Create New Projects\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\pages\\\\myprojects.js\",\n                                lineNumber: 93,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\pages\\\\myprojects.js\",\n                            lineNumber: 92,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            class: \"mb-3 font-normal text-gray-700 dark:text-gray-400\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\pages\\\\myprojects.js\",\n                            lineNumber: 97,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"https://docs.google.com/document/d/1CHfflA9XCz2EdkV-qukilgAEBdxg0l_DYOBaCEptfgI/edit\",\n                            class: \"inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300\",\n                            children: \"Add New\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\pages\\\\myprojects.js\",\n                            lineNumber: 98,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\pages\\\\myprojects.js\",\n                    lineNumber: 91,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\pages\\\\myprojects.js\",\n                lineNumber: 90,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-[3%]\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\pages\\\\myprojects.js\",\n                    lineNumber: 107,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\pages\\\\myprojects.js\",\n                lineNumber: 106,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center justify-center py-2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"file\",\n                    className: \"\",\n                    onChange: handleUpload\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\pages\\\\myprojects.js\",\n                    lineNumber: 110,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\pages\\\\myprojects.js\",\n                lineNumber: 109,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-[0.5%]\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\pages\\\\myprojects.js\",\n                    lineNumber: 113,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\pages\\\\myprojects.js\",\n                lineNumber: 112,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: bucketData.map((data)=>{\n                    console.log(\"Mapping\", data.name);\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-gray-300 w-[100%] m-auto h-[50%] rounded-full mt-[10px] mb-[10px]\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"h-full\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex justify-center py-3\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: ()=>downloadFiles(data.name),\n                                    className: \"text-black\",\n                                    children: [\n                                        data.name,\n                                        \" \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\pages\\\\myprojects.js\",\n                                    lineNumber: 122,\n                                    columnNumber: 19\n                                }, undefined)\n                            }, data.id, false, {\n                                fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\pages\\\\myprojects.js\",\n                                lineNumber: 121,\n                                columnNumber: 17\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\pages\\\\myprojects.js\",\n                            lineNumber: 120,\n                            columnNumber: 15\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\pages\\\\myprojects.js\",\n                        lineNumber: 119,\n                        columnNumber: 13\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\pages\\\\myprojects.js\",\n                lineNumber: 115,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(uploads, \"XtqYuSeJG5zujD4HsH8gn5KxVvE=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useToast\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (uploads);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OERBQUNQO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDTztvQkFBTUMsTUFBSztvQkFBT1IsV0FBVTtvQkFBR1MsVUFBVTlDOzs7Ozs7Ozs7OzswQkFFNUMsOERBQUNvQztnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ007Ozs7Ozs7Ozs7MEJBRUgsOERBQUNQOzBCQUNFeEMsV0FBV21ELEdBQUcsQ0FBQyxDQUFDMUMsT0FBUztvQkFDeEJNLFFBQVFDLEdBQUcsQ0FBQyxXQUFXUCxLQUFLSyxJQUFJO29CQUNoQyxxQkFDRSw4REFBQzBCO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDRDs0QkFBSUMsV0FBVTtzQ0FDYiw0RUFBQ0Q7Z0NBQWtCQyxXQUFVOzBDQUMzQiw0RUFBQ1c7b0NBQ0NDLFNBQVMsSUFBTTNCLGNBQWNqQixLQUFLSyxJQUFJO29DQUN0QzJCLFdBQVU7O3dDQUVUaEMsS0FBS0ssSUFBSTt3Q0FBRTs7Ozs7OzsrQkFMTkwsS0FBSzZDLEVBQUU7Ozs7Ozs7Ozs7Ozs7OztnQkFXekI7Ozs7Ozs7O0FBSVI7R0FsSU16RDs7UUFHV0Ysa0RBQVNBO1FBQ1ZDLHNEQUFRQTs7O0FBZ0l4QiwrREFBZUMsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9teXByb2plY3RzLmpzPzAxZjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc3VwYWJhc2UgfSBmcm9tIFwiLi4vY29uZmlnL3N1cGFiYXNlQ2xpZW50XCI7XHJcbmltcG9ydCByZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VUb2FzdCB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcblxyXG5jb25zdCB1cGxvYWRzID0gKCkgPT4ge1xyXG4gIGNvbnN0IFt1cGxvYWRlZEZpbGVzLCBzZXRVcGxvYWRlZEZpbGVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbYnVja2V0RGF0YSwgc2V0QnVja2V0RGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgdG9hc3QgPSB1c2VUb2FzdCgpO1xyXG5cclxuICBjb25zdCBoYW5kbGVVcGxvYWQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgbGV0IGZpbGU7XHJcbiAgICBpZiAoZS50YXJnZXQuZmlsZXMpIHtcclxuICAgICAgZmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLnN0b3JhZ2VcclxuICAgICAgLmZyb20oXCJ0aGVzaXNcIilcclxuICAgICAgLnVwbG9hZChcInB1YmxpYy9cIiArIGZpbGU/Lm5hbWUsIGZpbGUpO1xyXG5cclxuICAgIGlmIChkYXRhKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjUwMDAvdXBsb2FkXCIsIHtcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCBqc29uUmVzID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgY29uc29sZS5sb2coXCJwb3NpdHZlIHJlc3BvbnNlIHJldHVybmVkXCIpO1xyXG5cclxuICAgICAgY29uc29sZS5sb2coXCJqc29uUmVzXCIsIGpzb25SZXMpO1xyXG4gICAgICBjb25zb2xlLmxvZyh1cGxvYWRlZEZpbGVzKTtcclxuICAgIH0gZWxzZSBpZiAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRvd25sb2FkRmlsZXMgPSBhc3luYyAoZmlsZU5hbWUpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiSW5zaWRlIGRvd25sb2FkIGZpbGVzIGF0IHRoZSBmcm9udGVuZFwiKTtcclxuICAgICAgY29uc29sZS5sb2coXCJBYm91dCB0byBzZW5kIGEgZ2V0IHJlcXVlc3RcIik7XHJcblxyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcclxuICAgICAgICBgaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS91cGxvYWRzP2ZpbGVOYW1lPSR7ZmlsZU5hbWV9YCxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG5cclxuICAgICAgY29uc29sZS5sb2coXCJBZnRlciB0aGUgcmVxXCIpO1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG5cclxuICAgICAgdG9hc3Qoe1xyXG4gICAgICAgIHRpdGxlOiBcIkZpbGUgRG93bmxvYWRlZFwiLFxyXG4gICAgICAgIHN0YXR1czogXCJzdWNjZXNzXCIsXHJcbiAgICAgICAgZHVyYXRpb246IDUwMDAsXHJcbiAgICAgICAgaXNDbG9zYWJsZTogdHJ1ZSxcclxuICAgICAgICBwb3NpdGlvbjogXCJ0b3BcIixcclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkVSUk9SIE9DQ1VSUkVEIFdISUxFIEZFVENISU5HIEZJTEVTXCIpO1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0RnJvbUJ1Y2tldCA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLnN0b3JhZ2VcclxuICAgICAgLmZyb20oXCJ0aGVzaXNcIilcclxuICAgICAgLmxpc3QoXCJwdWJsaWNcIiwge1xyXG4gICAgICAgIGxpbWl0OiAxMDAsXHJcbiAgICAgICAgb2Zmc2V0OiAwLFxyXG4gICAgICAgIHNvcnRCeTogeyBjb2x1bW46IFwibmFtZVwiLCBvcmRlcjogXCJhc2NcIiB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICBzZXRCdWNrZXREYXRhKGRhdGEpO1xyXG4gICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdldEZyb21CdWNrZXQoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIC8vICAgY2xhc3NOYW1lPVwiZmxleCBtaW4taC1zY3JlZSBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcHktMiBcIlxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctWzUwJV0gbXgtYXV0b1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtYXgtdy1zbSBwLTYgdGV4dC1jZW50ZXIgYmctd2hpdGUgYm9yZGVyIGJvcmRlci1ncmF5LTIwMCByb3VuZGVkLWxnIHNoYWRvdy1tZCBkYXJrOmJnLWdyYXktODAwIGRhcms6Ym9yZGVyLWdyYXktNzAwXCI+XHJcbiAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICA8aDUgY2xhc3M9XCJtYi0yIHRleHQtMnhsIGZvbnQtYm9sZCB0cmFja2luZy10aWdodCB0ZXh0LWdyYXktOTAwIGRhcms6dGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgIENyZWF0ZSBOZXcgUHJvamVjdHNcclxuICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDxwIGNsYXNzPVwibWItMyBmb250LW5vcm1hbCB0ZXh0LWdyYXktNzAwIGRhcms6dGV4dC1ncmF5LTQwMFwiPjwvcD5cclxuICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2RvY3MuZ29vZ2xlLmNvbS9kb2N1bWVudC9kLzFDSGZmbEE5WEN6MkVka1YtcXVraWxnQUVCZHhnMGxfRFlPQmFDRXB0ZmdJL2VkaXRcIlxyXG4gICAgICAgICAgICBjbGFzcz1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBweC0zIHB5LTIgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlIGJnLWJsdWUtNzAwIHJvdW5kZWQtbGcgaG92ZXI6YmctYmx1ZS04MDAgZm9jdXM6cmluZy00IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLWJsdWUtMzAwXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgQWRkIE5ld1xyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC1bMyVdXCI+XHJcbiAgICAgICAgPGhyIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggIGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBweS0yXCI+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgY2xhc3NOYW1lPVwiXCIgb25DaGFuZ2U9e2hhbmRsZVVwbG9hZH0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtWzAuNSVdXCI+XHJcbiAgICAgICAgPGhyIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHtidWNrZXREYXRhLm1hcCgoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJNYXBwaW5nXCIsIGRhdGEubmFtZSk7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyYXktMzAwIHctWzEwMCVdIG0tYXV0byBoLVs1MCVdIHJvdW5kZWQtZnVsbCBtdC1bMTBweF0gbWItWzEwcHhdXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtkYXRhLmlkfSBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIHB5LTNcIj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRvd25sb2FkRmlsZXMoZGF0YS5uYW1lKX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWJsYWNrXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtkYXRhLm5hbWV9e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVwbG9hZHM7XHJcbiJdLCJuYW1lcyI6WyJzdXBhYmFzZSIsInJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJ1c2VUb2FzdCIsInVwbG9hZHMiLCJ1cGxvYWRlZEZpbGVzIiwic2V0VXBsb2FkZWRGaWxlcyIsImJ1Y2tldERhdGEiLCJzZXRCdWNrZXREYXRhIiwicm91dGVyIiwidG9hc3QiLCJoYW5kbGVVcGxvYWQiLCJlIiwiZmlsZSIsInRhcmdldCIsImZpbGVzIiwiZGF0YSIsImVycm9yIiwic3RvcmFnZSIsImZyb20iLCJ1cGxvYWQiLCJuYW1lIiwiY29uc29sZSIsImxvZyIsInJlcyIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwianNvblJlcyIsImpzb24iLCJkb3dubG9hZEZpbGVzIiwiZmlsZU5hbWUiLCJ0aXRsZSIsInN0YXR1cyIsImR1cmF0aW9uIiwiaXNDbG9zYWJsZSIsInBvc2l0aW9uIiwiZ2V0RnJvbUJ1Y2tldCIsImxpc3QiLCJsaW1pdCIsIm9mZnNldCIsInNvcnRCeSIsImNvbHVtbiIsIm9yZGVyIiwiZGl2IiwiY2xhc3NOYW1lIiwiY2xhc3MiLCJhIiwiaHJlZiIsImg1IiwicCIsImhyIiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJtYXAiLCJidXR0b24iLCJvbkNsaWNrIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/myprojects.js\n"));

/***/ })

});