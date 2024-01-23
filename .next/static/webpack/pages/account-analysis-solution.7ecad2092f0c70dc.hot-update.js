"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/account-analysis-solution",{

/***/ "./utils/FetchEbooks.js":
/*!******************************!*\
  !*** ./utils/FetchEbooks.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config.json */ \"./config.json\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Insights() {\n    _s();\n    const [allInsights, setInsights] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [heading, setHeading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const fetchInsights = async ()=>{\n        const postSlug = \"45643\"; // The specific blog post slug\n        const url = \"\".concat(_config_json__WEBPACK_IMPORTED_MODULE_3__.SERVER_URL, \"ebooks/\").concat(postSlug);\n        try {\n            const response = await fetch(url);\n            const data = await response.json();\n            if (response.ok) {\n                setInsights([\n                    data\n                ]); // Wrap the single blog post in an array\n                console.log([\n                    data\n                ]);\n                setHeading(true);\n            } else {\n                console.error(\"Failed to fetch blog post. Status: \".concat(response.status));\n            }\n        } catch (error) {\n            console.error(\"Error fetching blog post:\", error);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchInsights();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Container, {\n        className: \"mb-5 mt-5 text-center\",\n        id: \"insights\",\n        children: [\n            heading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Our Latest Insights\"\n            }, void 0, false, {\n                fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchEbooks.js\",\n                lineNumber: 36,\n                columnNumber: 19\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Container, {\n                className: \"mt-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Row, {\n                    className: \"center\",\n                    children: allInsights.map((post)=>{\n                        const Type = post[\"type\"];\n                        const Pslug = post[\"slug\"];\n                        let Links;\n                        if (Type === \"page\") {\n                            Links = Pslug;\n                        } else {\n                            Links = \"\".concat(Type, \"/\").concat(Pslug);\n                        }\n                        const title = post[\"title\"] && typeof post[\"title\"] === \"object\" ? post[\"title\"].rendered : post[\"title\"];\n                        const excerpt = post[\"excerpt\"] && typeof post[\"excerpt\"] === \"object\" ? post[\"excerpt\"].rendered : post[\"excerpt\"];\n                        const image = post[\"acf\"][\"mobile_image\"] && typeof post[\"acf\"][\"mobile_image\"] === \"object\" ? post[\"acf\"][\"mobile_image\"] : post[\"excerpt\"];\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {\n                            sm: 6,\n                            lg: 6,\n                            xs: 6,\n                            md: 6,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"card mb-3 border-0\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"row g-0\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"col-md-4 d-flex justify-content-center align-items-center\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Image, {\n                                                    src: post[\"featured_img_src\"],\n                                                    className: \"img-fluid\",\n                                                    alt: \"...\",\n                                                    width: 220,\n                                                    height: 220\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchEbooks.js\",\n                                                    lineNumber: 59,\n                                                    columnNumber: 33\n                                                }, this),\n                                                post[\"featured_img_src\"]\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchEbooks.js\",\n                                            lineNumber: 58,\n                                            columnNumber: 21\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"col-md-8 text-start\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"card-body\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                                            className: \"card-title text-start\",\n                                                            dangerouslySetInnerHTML: {\n                                                                __html: title || \"\"\n                                                            }\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchEbooks.js\",\n                                                            lineNumber: 64,\n                                                            columnNumber: 25\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                            className: \"card-text text-start\",\n                                                            dangerouslySetInnerHTML: {\n                                                                __html: excerpt || \"\"\n                                                            }\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchEbooks.js\",\n                                                            lineNumber: 65,\n                                                            columnNumber: 25\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                            href: Links,\n                                                            className: \"pr-text text-decoration-none expand-btn text-white px-5 rounded-3\",\n                                                            children: \"Read More\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchEbooks.js\",\n                                                            lineNumber: 66,\n                                                            columnNumber: 25\n                                                        }, this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchEbooks.js\",\n                                                    lineNumber: 63,\n                                                    columnNumber: 23\n                                                }, this),\n                                                Type\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchEbooks.js\",\n                                            lineNumber: 62,\n                                            columnNumber: 21\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchEbooks.js\",\n                                    lineNumber: 57,\n                                    columnNumber: 19\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchEbooks.js\",\n                                lineNumber: 56,\n                                columnNumber: 17\n                            }, this)\n                        }, post[\"id\"], false, {\n                            fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchEbooks.js\",\n                            lineNumber: 55,\n                            columnNumber: 15\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchEbooks.js\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchEbooks.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchEbooks.js\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, this);\n}\n_s(Insights, \"Yn0sHO1YCdaa57DMnWWFl62OG2M=\");\n_c = Insights;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Insights);\nvar _c;\n$RefreshReg$(_c, \"Insights\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNxQjs0REFBR3JCLFdBQVU7NERBQXdCc0IseUJBQXlCO2dFQUFFQyxRQUFRZixTQUFTOzREQUFHOzs7Ozs7c0VBQ3JGLDhEQUFDZ0I7NERBQUV4QixXQUFVOzREQUF1QnNCLHlCQUF5QjtnRUFBRUMsUUFBUWIsV0FBVzs0REFBRzs7Ozs7O3NFQUNyRiw4REFBQzlCLGtEQUFJQTs0REFBQzZDLE1BQU1sQjs0REFDVlAsV0FBVTtzRUFBb0U7Ozs7Ozs7Ozs7OztnREFHakZLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MkJBZkNELElBQUksQ0FBQyxLQUFLOzs7OztvQkFxQnhCOzs7Ozs7Ozs7Ozs7Ozs7OztBQUtWO0dBM0VTdEI7S0FBQUE7QUE2RVQsK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvRmV0Y2hFYm9va3MuanM/ODFiNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENvbnRhaW5lciwgUm93LCBDb2wsIEltYWdlIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgY29uZmlnRGF0YSBmcm9tICcuLi9jb25maWcuanNvbic7XG5cbmZ1bmN0aW9uIEluc2lnaHRzKCkge1xuICBjb25zdCBbYWxsSW5zaWdodHMsIHNldEluc2lnaHRzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2hlYWRpbmcsIHNldEhlYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGZldGNoSW5zaWdodHMgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcG9zdFNsdWcgPSBcIjQ1NjQzXCI7IC8vIFRoZSBzcGVjaWZpYyBibG9nIHBvc3Qgc2x1Z1xuICAgIGNvbnN0IHVybCA9IGAke2NvbmZpZ0RhdGEuU0VSVkVSX1VSTH1lYm9va3MvJHtwb3N0U2x1Z31gO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgIHNldEluc2lnaHRzKFtkYXRhXSk7IC8vIFdyYXAgdGhlIHNpbmdsZSBibG9nIHBvc3QgaW4gYW4gYXJyYXlcbiAgICAgICAgICBjb25zb2xlLmxvZyhbZGF0YV0pXG4gICAgICAgIHNldEhlYWRpbmcodHJ1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBGYWlsZWQgdG8gZmV0Y2ggYmxvZyBwb3N0LiBTdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgYmxvZyBwb3N0OlwiLCBlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2hJbnNpZ2h0cygpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT1cIm1iLTUgbXQtNSB0ZXh0LWNlbnRlclwiIGlkPVwiaW5zaWdodHNcIj5cbiAgICAgIHtoZWFkaW5nICYmIDxoMj5PdXIgTGF0ZXN0IEluc2lnaHRzPC9oMj59XG4gICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT1cIm10LTVcIj5cbiAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJjZW50ZXJcIj5cbiAgICAgICAgICB7YWxsSW5zaWdodHMubWFwKChwb3N0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBUeXBlID0gcG9zdFsndHlwZSddO1xuICAgICAgICAgICAgY29uc3QgUHNsdWcgPSBwb3N0WydzbHVnJ107XG4gICAgICAgICAgICBsZXQgTGlua3M7XG5cbiAgICAgICAgICAgIGlmIChUeXBlID09PSAncGFnZScpIHtcbiAgICAgICAgICAgICAgTGlua3MgPSBQc2x1ZztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIExpbmtzID0gYCR7VHlwZX0vJHtQc2x1Z31gO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IHBvc3RbJ3RpdGxlJ10gJiYgdHlwZW9mIHBvc3RbJ3RpdGxlJ10gPT09ICdvYmplY3QnID8gcG9zdFsndGl0bGUnXS5yZW5kZXJlZCA6IHBvc3RbJ3RpdGxlJ107XG4gICAgICAgICAgICAgIGNvbnN0IGV4Y2VycHQgPSBwb3N0WydleGNlcnB0J10gJiYgdHlwZW9mIHBvc3RbJ2V4Y2VycHQnXSA9PT0gJ29iamVjdCcgPyBwb3N0WydleGNlcnB0J10ucmVuZGVyZWQgOiBwb3N0WydleGNlcnB0J107XG4gICAgICAgICAgICAgIGNvbnN0IGltYWdlID0gcG9zdFsnYWNmJ11bJ21vYmlsZV9pbWFnZSddICYmIHR5cGVvZiBwb3N0WydhY2YnXVsnbW9iaWxlX2ltYWdlJ10gPT09ICdvYmplY3QnID8gcG9zdFsnYWNmJ11bJ21vYmlsZV9pbWFnZSddIDogcG9zdFsnZXhjZXJwdCddO1xuXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8Q29sIGtleT17cG9zdFsnaWQnXX0gc209ezZ9IGxnPXs2fSB4cz17Nn0gbWQ9ezZ9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBtYi0zIGJvcmRlci0wXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBnLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNCBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17cG9zdFsnZmVhdHVyZWRfaW1nX3NyYyddfSBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBhbHQ9XCIuLi5cIiB3aWR0aD17MjIwfSBoZWlnaHQ9ezIyMH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Bvc3RbJ2ZlYXR1cmVkX2ltZ19zcmMnXX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTggdGV4dC1zdGFydFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiY2FyZC10aXRsZSB0ZXh0LXN0YXJ0XCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiB0aXRsZSB8fCAnJyB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0IHRleHQtc3RhcnRcIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGV4Y2VycHQgfHwgJycgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e0xpbmtzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwci10ZXh0IHRleHQtZGVjb3JhdGlvbi1ub25lIGV4cGFuZC1idG4gdGV4dC13aGl0ZSBweC01IHJvdW5kZWQtM1wiPlJlYWQgTW9yZVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIHtUeXBlfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvUm93PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluc2lnaHRzOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ29udGFpbmVyIiwiUm93IiwiQ29sIiwiSW1hZ2UiLCJMaW5rIiwiY29uZmlnRGF0YSIsIkluc2lnaHRzIiwiYWxsSW5zaWdodHMiLCJzZXRJbnNpZ2h0cyIsImhlYWRpbmciLCJzZXRIZWFkaW5nIiwiZmV0Y2hJbnNpZ2h0cyIsInBvc3RTbHVnIiwidXJsIiwiU0VSVkVSX1VSTCIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsIm9rIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwic3RhdHVzIiwiY2xhc3NOYW1lIiwiaWQiLCJoMiIsIm1hcCIsInBvc3QiLCJUeXBlIiwiUHNsdWciLCJMaW5rcyIsInRpdGxlIiwicmVuZGVyZWQiLCJleGNlcnB0IiwiaW1hZ2UiLCJzbSIsImxnIiwieHMiLCJtZCIsImRpdiIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwiaDUiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsInAiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/FetchEbooks.js\n"));

/***/ })

});