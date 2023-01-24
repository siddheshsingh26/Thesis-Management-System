"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/uploads",{

/***/ "./pages/uploads.js":
/*!**************************!*\
  !*** ./pages/uploads.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_supabaseClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/supabaseClient */ \"./config/supabaseClient.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst uploads = ()=>{\n    _s();\n    const [uploadedFiles, setUploadedFiles] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [bucketData, setBucketData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const handleUpload = async (e)=>{\n        let file;\n        if (e.target.files) {\n            file = e.target.files[0];\n        }\n        const { data , error  } = await _config_supabaseClient__WEBPACK_IMPORTED_MODULE_1__.supabase.storage.from(\"thesis\").upload(\"public/\" + (file === null || file === void 0 ? void 0 : file.name), file);\n        if (data) {\n            console.log(data);\n            const res = await fetch(\"http://localhost:5000/upload\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(data)\n            });\n            const jsonRes = await res.json();\n            console.log(\"positve response returned\");\n            console.log(\"jsonRes\", jsonRes);\n            console.log(uploadedFiles);\n        } else if (error) {\n            console.log(error);\n        }\n    };\n    const downloadFiles = async ()=>{\n        const { data , error  } = await _config_supabaseClient__WEBPACK_IMPORTED_MODULE_1__.supabase.storage.from(\"thesis\").download(\"public/DMA9.pdf\");\n    };\n    const getFiles = async (req, res)=>{\n        try {\n            const res1 = await fetch(\"http://localhost:5000/upload\", {\n                method: \"GET\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n            const data = await res1.json();\n            setUploadedFiles(data);\n            console.log(data);\n            console.log(\"inside get files at frontend\");\n            console.log(uploadedFiles);\n            await downloadFiles();\n        } catch (err) {\n            console.error(err.message);\n        }\n    };\n    const getFromBucket = async ()=>{\n        const { data , error  } = await _config_supabaseClient__WEBPACK_IMPORTED_MODULE_1__.supabase.storage.from(\"thesis\").list(\"public\", {\n            limit: 100,\n            offset: 0,\n            sortBy: {\n                column: \"name\",\n                order: \"asc\"\n            }\n        });\n        setBucketData(data);\n        console.log(data);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        getFiles();\n        getFromBucket();\n    }, []);\n    //   className=\"flex min-h-scree flex-col items-center justify-center py-2 \"\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex min-h-screen flex-col items-center justify-center py-2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"file\",\n                    className: \"\",\n                    onChange: handleUpload\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\pages\\\\uploads.js\",\n                    lineNumber: 85,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\pages\\\\uploads.js\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-blue-400\",\n                children: bucketData.map((data)=>{\n                    console.log(\"Mapping\", data.name);\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"akdfja;lkdfjas;ldkfja; \"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\pages\\\\uploads.js\",\n                            lineNumber: 92,\n                            columnNumber: 15\n                        }, undefined)\n                    }, data.id, false, {\n                        fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\pages\\\\uploads.js\",\n                        lineNumber: 91,\n                        columnNumber: 13\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Adwait\\\\Downloads\\\\hackathon-front-main\\\\client\\\\pages\\\\uploads.js\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(uploads, \"CUqcG5B0LNJhluczShmzZvHVEMQ=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (uploads);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cEMsS0FBS3FDLEVBQUU7Ozs7O2dCQUlyQjs7Ozs7Ozs7QUFJUjtHQTlGTWhEOztRQUdXRCxrREFBU0E7OztBQTZGMUIsK0RBQWVDLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXBsb2Fkcy5qcz8yODc5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHN1cGFiYXNlIH0gZnJvbSBcIi4uL2NvbmZpZy9zdXBhYmFzZUNsaWVudFwiO1xyXG5pbXBvcnQgcmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmNvbnN0IHVwbG9hZHMgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3VwbG9hZGVkRmlsZXMsIHNldFVwbG9hZGVkRmlsZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtidWNrZXREYXRhLCBzZXRCdWNrZXREYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlVXBsb2FkID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGxldCBmaWxlO1xyXG4gICAgaWYgKGUudGFyZ2V0LmZpbGVzKSB7XHJcbiAgICAgIGZpbGUgPSBlLnRhcmdldC5maWxlc1swXTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZS5zdG9yYWdlXHJcbiAgICAgIC5mcm9tKFwidGhlc2lzXCIpXHJcbiAgICAgIC51cGxvYWQoXCJwdWJsaWMvXCIgKyBmaWxlPy5uYW1lLCBmaWxlKTtcclxuXHJcbiAgICBpZiAoZGF0YSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuXHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwL3VwbG9hZFwiLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3QganNvblJlcyA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwicG9zaXR2ZSByZXNwb25zZSByZXR1cm5lZFwiKTtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKFwianNvblJlc1wiLCBqc29uUmVzKTtcclxuICAgICAgY29uc29sZS5sb2codXBsb2FkZWRGaWxlcyk7XHJcbiAgICB9IGVsc2UgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBkb3dubG9hZEZpbGVzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2Uuc3RvcmFnZVxyXG4gICAgICAuZnJvbShcInRoZXNpc1wiKVxyXG4gICAgICAuZG93bmxvYWQoXCJwdWJsaWMvRE1BOS5wZGZcIik7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0RmlsZXMgPSBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwL3VwbG9hZFwiLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgc2V0VXBsb2FkZWRGaWxlcyhkYXRhKTtcclxuICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiaW5zaWRlIGdldCBmaWxlcyBhdCBmcm9udGVuZFwiKTtcclxuICAgICAgY29uc29sZS5sb2codXBsb2FkZWRGaWxlcyk7XHJcbiAgICAgIGF3YWl0IGRvd25sb2FkRmlsZXMoKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVyci5tZXNzYWdlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRGcm9tQnVja2V0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2Uuc3RvcmFnZVxyXG4gICAgICAuZnJvbShcInRoZXNpc1wiKVxyXG4gICAgICAubGlzdChcInB1YmxpY1wiLCB7XHJcbiAgICAgICAgbGltaXQ6IDEwMCxcclxuICAgICAgICBvZmZzZXQ6IDAsXHJcbiAgICAgICAgc29ydEJ5OiB7IGNvbHVtbjogXCJuYW1lXCIsIG9yZGVyOiBcImFzY1wiIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgIHNldEJ1Y2tldERhdGEoZGF0YSk7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0RmlsZXMoKTtcclxuICAgIGdldEZyb21CdWNrZXQoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIC8vICAgY2xhc3NOYW1lPVwiZmxleCBtaW4taC1zY3JlZSBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcHktMiBcIlxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbWluLWgtc2NyZWVuIGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBweS0yXCI+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgY2xhc3NOYW1lPVwiXCIgb25DaGFuZ2U9e2hhbmRsZVVwbG9hZH0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctYmx1ZS00MDBcIj5cclxuICAgICAgICB7YnVja2V0RGF0YS5tYXAoKGRhdGEpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiTWFwcGluZ1wiLCBkYXRhLm5hbWUpO1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBrZXk9e2RhdGEuaWR9PlxyXG4gICAgICAgICAgICAgIDxwPmFrZGZqYTtsa2RmamFzO2xka2ZqYTsgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVwbG9hZHM7XHJcbiJdLCJuYW1lcyI6WyJzdXBhYmFzZSIsInJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJ1cGxvYWRzIiwidXBsb2FkZWRGaWxlcyIsInNldFVwbG9hZGVkRmlsZXMiLCJidWNrZXREYXRhIiwic2V0QnVja2V0RGF0YSIsInJvdXRlciIsImhhbmRsZVVwbG9hZCIsImUiLCJmaWxlIiwidGFyZ2V0IiwiZmlsZXMiLCJkYXRhIiwiZXJyb3IiLCJzdG9yYWdlIiwiZnJvbSIsInVwbG9hZCIsIm5hbWUiLCJjb25zb2xlIiwibG9nIiwicmVzIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJqc29uUmVzIiwianNvbiIsImRvd25sb2FkRmlsZXMiLCJkb3dubG9hZCIsImdldEZpbGVzIiwicmVxIiwiZXJyIiwibWVzc2FnZSIsImdldEZyb21CdWNrZXQiLCJsaXN0IiwibGltaXQiLCJvZmZzZXQiLCJzb3J0QnkiLCJjb2x1bW4iLCJvcmRlciIsImRpdiIsImNsYXNzTmFtZSIsImlucHV0IiwidHlwZSIsIm9uQ2hhbmdlIiwibWFwIiwicCIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/uploads.js\n"));

/***/ })

});