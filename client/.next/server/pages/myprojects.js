"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/myprojects";
exports.ids = ["pages/myprojects"];
exports.modules = {

/***/ "./config/supabaseClient.js":
/*!**********************************!*\
  !*** ./config/supabaseClient.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"supabase\": () => (/* binding */ supabase)\n/* harmony export */ });\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @supabase/supabase-js */ \"@supabase/supabase-js\");\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__);\n\nconst supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__.createClient)(\"https://orxzdtkmobkpwvqymkcc.supabase.co\", \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9yeHpkdGttb2JrcHd2cXlta2NjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQ1MjgwMDIsImV4cCI6MTk5MDEwNDAwMn0.JDcjSjFu3AZIQK1szBy69WxdwkjO8MYtBMuRLyUkF3Y\");\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25maWcvc3VwYWJhc2VDbGllbnQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXFEO0FBRTlDLE1BQU1DLFdBQVdELG1FQUFZQSxDQUNsQyw0Q0FDQSxvTkFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vY29uZmlnL3N1cGFiYXNlQ2xpZW50LmpzP2YyNzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ2xpZW50IH0gZnJvbSBcIkBzdXBhYmFzZS9zdXBhYmFzZS1qc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHN1cGFiYXNlID0gY3JlYXRlQ2xpZW50KFxyXG4gIFwiaHR0cHM6Ly9vcnh6ZHRrbW9ia3B3dnF5bWtjYy5zdXBhYmFzZS5jb1wiLFxyXG4gIFwiZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnBjM01pT2lKemRYQmhZbUZ6WlNJc0luSmxaaUk2SW05eWVIcGtkR3R0YjJKcmNIZDJjWGx0YTJOaklpd2ljbTlzWlNJNkltRnViMjRpTENKcFlYUWlPakUyTnpRMU1qZ3dNRElzSW1WNGNDSTZNVGs1TURFd05EQXdNbjAuSkRjalNqRnUzQVpJUUsxc3pCeTY5V3hkd2tqTzhNWXRCTXVSTHlVa0YzWVwiXHJcbik7XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVDbGllbnQiLCJzdXBhYmFzZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./config/supabaseClient.js\n");

/***/ }),

/***/ "./pages/myprojects.js":
/*!*****************************!*\
  !*** ./pages/myprojects.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_supabaseClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/supabaseClient */ \"./config/supabaseClient.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__]);\n_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nconst uploads = ()=>{\n    const [uploadedFiles, setUploadedFiles] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [bucketData, setBucketData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const toast = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useToast)();\n    const handleUpload = async (e)=>{\n        let file;\n        if (e.target.files) {\n            file = e.target.files[0];\n        }\n        const { data , error  } = await _config_supabaseClient__WEBPACK_IMPORTED_MODULE_1__.supabase.storage.from(\"thesis\").upload(\"public/\" + file?.name, file);\n        if (data) {\n            console.log(data);\n        } else if (error) {\n            console.log(error);\n        }\n    };\n    const downloadFiles = async (fileName)=>{\n        try {\n            console.log(\"Inside download files at the frontend\");\n            console.log(\"About to send a get request\");\n            const res = await fetch(`http://localhost:5000/api/uploads?fileName=${fileName}`, {\n                method: \"GET\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n            console.log(\"After the req\");\n            console.log(res);\n            const data = await res.json();\n            console.log(data);\n            toast({\n                title: \"File Downloaded\",\n                status: \"success\",\n                duration: 5000,\n                isClosable: true,\n                position: \"top\"\n            });\n        } catch (error) {\n            console.log(\"ERROR OCCURRED WHILE FETCHING FILES\");\n            console.log(error);\n        }\n    };\n    const getFromBucket = async ()=>{\n        const { data , error  } = await _config_supabaseClient__WEBPACK_IMPORTED_MODULE_1__.supabase.storage.from(\"thesis\").list(\"public\", {\n            limit: 100,\n            offset: 0,\n            sortBy: {\n                column: \"name\",\n                order: \"asc\"\n            }\n        });\n        setBucketData(data);\n        console.log(data);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        getFromBucket();\n    }, []);\n    //   className=\"flex min-h-scree flex-col items-center justify-center py-2 \"\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-[50%] mx-auto\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    class: \"max-w-sm p-6 text-center bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"#\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                class: \"mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white\",\n                                children: \"Create New Projects\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\pages\\\\myprojects.js\",\n                                lineNumber: 84,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\pages\\\\myprojects.js\",\n                            lineNumber: 83,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            class: \"mb-3 font-normal text-gray-700 dark:text-gray-400\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\pages\\\\myprojects.js\",\n                            lineNumber: 88,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"https://docs.google.com/document/d/1CHfflA9XCz2EdkV-qukilgAEBdxg0l_DYOBaCEptfgI/edit\",\n                            class: \"inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300\",\n                            children: \"Add New\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\pages\\\\myprojects.js\",\n                            lineNumber: 89,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\pages\\\\myprojects.js\",\n                    lineNumber: 82,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\pages\\\\myprojects.js\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-[3%]\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\pages\\\\myprojects.js\",\n                    lineNumber: 98,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\pages\\\\myprojects.js\",\n                lineNumber: 97,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center justify-center py-2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"file\",\n                    className: \"\",\n                    onChange: handleUpload\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\pages\\\\myprojects.js\",\n                    lineNumber: 101,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\pages\\\\myprojects.js\",\n                lineNumber: 100,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-[0.5%]\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\pages\\\\myprojects.js\",\n                    lineNumber: 104,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\pages\\\\myprojects.js\",\n                lineNumber: 103,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: bucketData.map((data)=>{\n                    console.log(\"Mapping\", data.name);\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-gray-300 w-[100%] m-auto h-[50%] rounded-full mt-[10px] mb-[10px]\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"h-full\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex justify-center py-3\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: ()=>downloadFiles(data.name),\n                                    className: \"text-black\",\n                                    children: [\n                                        data.name,\n                                        \" \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\pages\\\\myprojects.js\",\n                                    lineNumber: 113,\n                                    columnNumber: 19\n                                }, undefined)\n                            }, data.id, false, {\n                                fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\pages\\\\myprojects.js\",\n                                lineNumber: 112,\n                                columnNumber: 17\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\pages\\\\myprojects.js\",\n                            lineNumber: 111,\n                            columnNumber: 15\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\pages\\\\myprojects.js\",\n                        lineNumber: 110,\n                        columnNumber: 13\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\pages\\\\myprojects.js\",\n                lineNumber: 106,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (uploads);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUFBUUMsR0FBRyxDQUFDLFdBQVdQLEtBQUtLLElBQUk7b0JBQ2hDLHFCQUNFLDhEQUFDc0I7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUNEOzRCQUFJQyxXQUFVO3NDQUNiLDRFQUFDRDtnQ0FBa0JDLFdBQVU7MENBQzNCLDRFQUFDVztvQ0FDQ0MsU0FBUyxJQUFNaEMsY0FBY1IsS0FBS0ssSUFBSTtvQ0FDdEN1QixXQUFVOzt3Q0FFVDVCLEtBQUtLLElBQUk7d0NBQUU7Ozs7Ozs7K0JBTE5MLEtBQUt5QyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Z0JBV3pCOzs7Ozs7OztBQUlSO0FBRUEsaUVBQWVyRCxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9wYWdlcy9teXByb2plY3RzLmpzPzAxZjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc3VwYWJhc2UgfSBmcm9tIFwiLi4vY29uZmlnL3N1cGFiYXNlQ2xpZW50XCI7XHJcbmltcG9ydCByZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VUb2FzdCB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcblxyXG5jb25zdCB1cGxvYWRzID0gKCkgPT4ge1xyXG4gIGNvbnN0IFt1cGxvYWRlZEZpbGVzLCBzZXRVcGxvYWRlZEZpbGVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbYnVja2V0RGF0YSwgc2V0QnVja2V0RGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgdG9hc3QgPSB1c2VUb2FzdCgpO1xyXG5cclxuICBjb25zdCBoYW5kbGVVcGxvYWQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgbGV0IGZpbGU7XHJcbiAgICBpZiAoZS50YXJnZXQuZmlsZXMpIHtcclxuICAgICAgZmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLnN0b3JhZ2VcclxuICAgICAgLmZyb20oXCJ0aGVzaXNcIilcclxuICAgICAgLnVwbG9hZChcInB1YmxpYy9cIiArIGZpbGU/Lm5hbWUsIGZpbGUpO1xyXG5cclxuICAgIGlmIChkYXRhKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgfSBlbHNlIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZG93bmxvYWRGaWxlcyA9IGFzeW5jIChmaWxlTmFtZSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc29sZS5sb2coXCJJbnNpZGUgZG93bmxvYWQgZmlsZXMgYXQgdGhlIGZyb250ZW5kXCIpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkFib3V0IHRvIHNlbmQgYSBnZXQgcmVxdWVzdFwiKTtcclxuXHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxyXG4gICAgICAgIGBodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL3VwbG9hZHM/ZmlsZU5hbWU9JHtmaWxlTmFtZX1gLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcblxyXG4gICAgICBjb25zb2xlLmxvZyhcIkFmdGVyIHRoZSByZXFcIik7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcblxyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICB0b2FzdCh7XHJcbiAgICAgICAgdGl0bGU6IFwiRmlsZSBEb3dubG9hZGVkXCIsXHJcbiAgICAgICAgc3RhdHVzOiBcInN1Y2Nlc3NcIixcclxuICAgICAgICBkdXJhdGlvbjogNTAwMCxcclxuICAgICAgICBpc0Nsb3NhYmxlOiB0cnVlLFxyXG4gICAgICAgIHBvc2l0aW9uOiBcInRvcFwiLFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiRVJST1IgT0NDVVJSRUQgV0hJTEUgRkVUQ0hJTkcgRklMRVNcIik7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRGcm9tQnVja2V0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2Uuc3RvcmFnZVxyXG4gICAgICAuZnJvbShcInRoZXNpc1wiKVxyXG4gICAgICAubGlzdChcInB1YmxpY1wiLCB7XHJcbiAgICAgICAgbGltaXQ6IDEwMCxcclxuICAgICAgICBvZmZzZXQ6IDAsXHJcbiAgICAgICAgc29ydEJ5OiB7IGNvbHVtbjogXCJuYW1lXCIsIG9yZGVyOiBcImFzY1wiIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgIHNldEJ1Y2tldERhdGEoZGF0YSk7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0RnJvbUJ1Y2tldCgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgLy8gICBjbGFzc05hbWU9XCJmbGV4IG1pbi1oLXNjcmVlIGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBweS0yIFwiXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1bNTAlXSBteC1hdXRvXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1heC13LXNtIHAtNiB0ZXh0LWNlbnRlciBiZy13aGl0ZSBib3JkZXIgYm9yZGVyLWdyYXktMjAwIHJvdW5kZWQtbGcgc2hhZG93LW1kIGRhcms6YmctZ3JheS04MDAgZGFyazpib3JkZXItZ3JheS03MDBcIj5cclxuICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgIDxoNSBjbGFzcz1cIm1iLTIgdGV4dC0yeGwgZm9udC1ib2xkIHRyYWNraW5nLXRpZ2h0IHRleHQtZ3JheS05MDAgZGFyazp0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgQ3JlYXRlIE5ldyBQcm9qZWN0c1xyXG4gICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPHAgY2xhc3M9XCJtYi0zIGZvbnQtbm9ybWFsIHRleHQtZ3JheS03MDAgZGFyazp0ZXh0LWdyYXktNDAwXCI+PC9wPlxyXG4gICAgICAgICAgPGFcclxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZG9jcy5nb29nbGUuY29tL2RvY3VtZW50L2QvMUNIZmZsQTlYQ3oyRWRrVi1xdWtpbGdBRUJkeGcwbF9EWU9CYUNFcHRmZ0kvZWRpdFwiXHJcbiAgICAgICAgICAgIGNsYXNzPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIHB4LTMgcHktMiB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtY2VudGVyIHRleHQtd2hpdGUgYmctYmx1ZS03MDAgcm91bmRlZC1sZyBob3ZlcjpiZy1ibHVlLTgwMCBmb2N1czpyaW5nLTQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctYmx1ZS0zMDBcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBBZGQgTmV3XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LVszJV1cIj5cclxuICAgICAgICA8aHIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCAgZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHB5LTJcIj5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBjbGFzc05hbWU9XCJcIiBvbkNoYW5nZT17aGFuZGxlVXBsb2FkfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC1bMC41JV1cIj5cclxuICAgICAgICA8aHIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAge2J1Y2tldERhdGEubWFwKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIk1hcHBpbmdcIiwgZGF0YS5uYW1lKTtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JheS0zMDAgdy1bMTAwJV0gbS1hdXRvIGgtWzUwJV0gcm91bmRlZC1mdWxsIG10LVsxMHB4XSBtYi1bMTBweF1cIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2RhdGEuaWR9IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgcHktM1wiPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZG93bmxvYWRGaWxlcyhkYXRhLm5hbWUpfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtYmxhY2tcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge2RhdGEubmFtZX17XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXBsb2FkcztcclxuIl0sIm5hbWVzIjpbInN1cGFiYXNlIiwicmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsInVzZVRvYXN0IiwidXBsb2FkcyIsInVwbG9hZGVkRmlsZXMiLCJzZXRVcGxvYWRlZEZpbGVzIiwiYnVja2V0RGF0YSIsInNldEJ1Y2tldERhdGEiLCJyb3V0ZXIiLCJ0b2FzdCIsImhhbmRsZVVwbG9hZCIsImUiLCJmaWxlIiwidGFyZ2V0IiwiZmlsZXMiLCJkYXRhIiwiZXJyb3IiLCJzdG9yYWdlIiwiZnJvbSIsInVwbG9hZCIsIm5hbWUiLCJjb25zb2xlIiwibG9nIiwiZG93bmxvYWRGaWxlcyIsImZpbGVOYW1lIiwicmVzIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwianNvbiIsInRpdGxlIiwic3RhdHVzIiwiZHVyYXRpb24iLCJpc0Nsb3NhYmxlIiwicG9zaXRpb24iLCJnZXRGcm9tQnVja2V0IiwibGlzdCIsImxpbWl0Iiwib2Zmc2V0Iiwic29ydEJ5IiwiY29sdW1uIiwib3JkZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJjbGFzcyIsImEiLCJocmVmIiwiaDUiLCJwIiwiaHIiLCJpbnB1dCIsInR5cGUiLCJvbkNoYW5nZSIsIm1hcCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/myprojects.js\n");

/***/ }),

/***/ "@supabase/supabase-js":
/*!****************************************!*\
  !*** external "@supabase/supabase-js" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@supabase/supabase-js");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

module.exports = import("@chakra-ui/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/myprojects.js"));
module.exports = __webpack_exports__;

})();