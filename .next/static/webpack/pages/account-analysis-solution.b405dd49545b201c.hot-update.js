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

/***/ "./utils/FetchAccount.js":
/*!*******************************!*\
  !*** ./utils/FetchAccount.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config.json */ \"./config.json\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Insights(param) {\n    let { tags  } = param;\n    _s();\n    const [allInsights, setInsights] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [heading, setHeading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const fetchInsights = async ()=>{\n        let url = \"\";\n        url = \"\".concat(_config_json__WEBPACK_IMPORTED_MODULE_3__.SERVER_URL, \"all-insights?tag=\").concat(tags);\n        try {\n            const response = await fetch(url);\n            const data = await response.json();\n            console.log(data.length);\n            setInsights(data);\n            if (data.length > 1) {\n                setHeading(true);\n            }\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchInsights();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Container, {\n        className: \"mb-5 mt-5 text-center\",\n        id: \"insights\",\n        children: [\n            heading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Our Latest Insights\"\n            }, void 0, false, {\n                fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchAccount.js\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Container, {\n                className: \"mt-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Row, {\n                    className: \"center\",\n                    children: allInsights.map((post)=>{\n                        //console.log(post);\n                        const Type = post[\"type\"];\n                        const Pslug = post[\"slug\"];\n                        let Links;\n                        if (Type == \"page\") {\n                            Links = Pslug;\n                        } else {\n                            Links = Type + \"/\" + Pslug;\n                        }\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {\n                            sm: 6,\n                            lg: 4,\n                            xs: 6,\n                            md: 6,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: Links,\n                                className: \"pr-text text-decoration-none\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        class: \"card mb-3\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            class: \"row g-0\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    class: \"col-md-4\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                        src: post[\"featured_img_src\"],\n                                                        class: \"img-fluid rounded-start\",\n                                                        alt: \"...\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchAccount.js\",\n                                                        lineNumber: 56,\n                                                        columnNumber: 7\n                                                    }, this)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchAccount.js\",\n                                                    lineNumber: 55,\n                                                    columnNumber: 5\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    class: \"col-md-8\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        class: \"card-body\",\n                                                        children: [\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                                                class: \"card-title\",\n                                                                children: \"Card title\"\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchAccount.js\",\n                                                                lineNumber: 60,\n                                                                columnNumber: 9\n                                                            }, this),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                                class: \"card-text\",\n                                                                children: \"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.\"\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchAccount.js\",\n                                                                lineNumber: 61,\n                                                                columnNumber: 9\n                                                            }, this),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                                class: \"card-text\",\n                                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                                                                    class: \"text-body-secondary\",\n                                                                    children: \"Last updated 3 mins ago\"\n                                                                }, void 0, false, {\n                                                                    fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchAccount.js\",\n                                                                    lineNumber: 62,\n                                                                    columnNumber: 30\n                                                                }, this)\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchAccount.js\",\n                                                                lineNumber: 62,\n                                                                columnNumber: 9\n                                                            }, this)\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchAccount.js\",\n                                                        lineNumber: 59,\n                                                        columnNumber: 7\n                                                    }, this)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchAccount.js\",\n                                                    lineNumber: 58,\n                                                    columnNumber: 5\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchAccount.js\",\n                                            lineNumber: 54,\n                                            columnNumber: 3\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchAccount.js\",\n                                        lineNumber: 53,\n                                        columnNumber: 14\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Card, {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Card.Img, {\n                                                variant: \"top\",\n                                                src: \"\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchAccount.js\",\n                                                lineNumber: 68,\n                                                columnNumber: 7\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Card.Body, {\n                                                className: \"text-start\",\n                                                style: {\n                                                    height: 6 + \"em\"\n                                                },\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        className: \"badge text-bg-warning mb-2\",\n                                                        children: Type\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchAccount.js\",\n                                                        lineNumber: 70,\n                                                        columnNumber: 11\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Card.Title, {}, void 0, false, {\n                                                        fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchAccount.js\",\n                                                        lineNumber: 71,\n                                                        columnNumber: 9\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchAccount.js\",\n                                                lineNumber: 69,\n                                                columnNumber: 9\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Card.Body, {\n                                                className: \"text-start mt-4\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Card.Link, {\n                                                    className: \"readmore\",\n                                                    children: \"Read More\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchAccount.js\",\n                                                    lineNumber: 74,\n                                                    columnNumber: 9\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchAccount.js\",\n                                                lineNumber: 73,\n                                                columnNumber: 7\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchAccount.js\",\n                                        lineNumber: 67,\n                                        columnNumber: 1\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchAccount.js\",\n                                lineNumber: 50,\n                                columnNumber: 1\n                            }, this)\n                        }, post[\"id\"], false, {\n                            fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchAccount.js\",\n                            lineNumber: 49,\n                            columnNumber: 3\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchAccount.js\",\n                    lineNumber: 35,\n                    columnNumber: 3\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchAccount.js\",\n                lineNumber: 34,\n                columnNumber: 1\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchAccount.js\",\n        lineNumber: 32,\n        columnNumber: 1\n    }, this);\n}\n_s(Insights, \"Yn0sHO1YCdaa57DMnWWFl62OG2M=\");\n_c = Insights;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Insights);\nvar _c;\n$RefreshReg$(_c, \"Insights\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OzJCQXpCNUJJLElBQUksQ0FBQyxLQUFLOzs7OztvQkErQnRCOzs7Ozs7Ozs7Ozs7Ozs7OztBQUtBO0dBOUVTckI7S0FBQUE7QUFnRlQsK0RBQWVBLFFBQVFBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvRmV0Y2hBY2NvdW50LmpzPzEwOWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtDb250YWluZXIsUm93LCBDb2wsSW1hZ2UsQnJlYWRjcnVtYixDYXJkLCBCdXR0b259IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IGNvbmZpZ0RhdGEgZnJvbSBcIi4uL2NvbmZpZy5qc29uXCI7XG5cbmZ1bmN0aW9uIEluc2lnaHRzKHt0YWdzfSkge1xuICBjb25zdCBbYWxsSW5zaWdodHMsIHNldEluc2lnaHRzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2hlYWRpbmcsIHNldEhlYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgY29uc3QgZmV0Y2hJbnNpZ2h0cyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgbGV0IHVybCA9IFwiXCI7XG4gICAgICAgIHVybCA9IGAke2NvbmZpZ0RhdGEuU0VSVkVSX1VSTH1hbGwtaW5zaWdodHM/dGFnPSR7dGFnc31gO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEubGVuZ3RoKTtcbiAgICAgICAgICBzZXRJbnNpZ2h0cyhkYXRhKTtcbiAgICAgICAgICBpZihkYXRhLmxlbmd0aCA+IDEpe1xuICAgICAgICAgICAgc2V0SGVhZGluZyh0cnVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZmV0Y2hJbnNpZ2h0cygpO1xuICAgICAgfSxbXSk7XG5cblxuICByZXR1cm4gKFxuPENvbnRhaW5lciBjbGFzc05hbWU9XCJtYi01IG10LTUgdGV4dC1jZW50ZXJcIiBpZD1cImluc2lnaHRzXCI+XG57aGVhZGluZyAmJiA8aDI+T3VyIExhdGVzdCBJbnNpZ2h0czwvaDI+fVxuPENvbnRhaW5lciBjbGFzc05hbWU9XCJtdC01XCI+XG4gIDxSb3cgY2xhc3NOYW1lPVwiY2VudGVyXCI+XG4gIHtcbmFsbEluc2lnaHRzLm1hcCgocG9zdCkgPT4ge1xuICAvL2NvbnNvbGUubG9nKHBvc3QpO1xuICBjb25zdCBUeXBlID0gIHBvc3RbJ3R5cGUnXTtcbiAgY29uc3QgUHNsdWcgPSAgcG9zdFsnc2x1ZyddO1xuICBsZXQgTGlua3M7XG4gIGlmKFR5cGUgPT0ncGFnZScpe1xuICAgIExpbmtzID0gUHNsdWc7XG4gIH1cbiAgZWxzZXtcbiAgICBMaW5rcyA9IFR5cGUgKyAnLycrIFBzbHVnO1xuICB9XG5yZXR1cm4gKFxuICA8Q29sIGtleT17cG9zdFsnaWQnXX0gc209ezZ9IGxnPXs0fSB4cz17Nn0gbWQ9ezZ9PlxuPExpbmsgXG5ocmVmPXtMaW5rc31cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInByLXRleHQgdGV4dC1kZWNvcmF0aW9uLW5vbmVcIj5cbiAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZCBtYi0zXCIgPlxuICA8ZGl2IGNsYXNzPVwicm93IGctMFwiPlxuICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNFwiPlxuICAgICAgPGltZyBzcmM9e3Bvc3RbJ2ZlYXR1cmVkX2ltZ19zcmMnXX0gY2xhc3M9XCJpbWctZmx1aWQgcm91bmRlZC1zdGFydFwiIGFsdD1cIi4uLlwiLz5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLThcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgPGg1IGNsYXNzPVwiY2FyZC10aXRsZVwiPkNhcmQgdGl0bGU8L2g1PlxuICAgICAgICA8cCBjbGFzcz1cImNhcmQtdGV4dFwiPlRoaXMgaXMgYSB3aWRlciBjYXJkIHdpdGggc3VwcG9ydGluZyB0ZXh0IGJlbG93IGFzIGEgbmF0dXJhbCBsZWFkLWluIHRvIGFkZGl0aW9uYWwgY29udGVudC4gVGhpcyBjb250ZW50IGlzIGEgbGl0dGxlIGJpdCBsb25nZXIuPC9wPlxuICAgICAgICA8cCBjbGFzcz1cImNhcmQtdGV4dFwiPjxzbWFsbCBjbGFzcz1cInRleHQtYm9keS1zZWNvbmRhcnlcIj5MYXN0IHVwZGF0ZWQgMyBtaW5zIGFnbzwvc21hbGw+PC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+XG48Q2FyZD5cbiAgICAgIDxDYXJkLkltZyB2YXJpYW50PVwidG9wXCIgc3JjPScnLz5cbiAgICAgICAgPENhcmQuQm9keSBjbGFzc05hbWU9XCJ0ZXh0LXN0YXJ0XCIgc3R5bGU9e3sgaGVpZ2h0OiA2ICsgJ2VtJyB9fT5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiYWRnZSB0ZXh0LWJnLXdhcm5pbmcgbWItMlwiPntUeXBlfTwvc3Bhbj5cbiAgICAgICAgPENhcmQuVGl0bGU+PC9DYXJkLlRpdGxlPlxuICAgICAgPC9DYXJkLkJvZHk+XG4gICAgICA8Q2FyZC5Cb2R5ICBjbGFzc05hbWU9XCJ0ZXh0LXN0YXJ0IG10LTRcIj5cbiAgICAgICAgPENhcmQuTGluayBjbGFzc05hbWU9XCJyZWFkbW9yZVwiPlJlYWQgTW9yZTwvQ2FyZC5MaW5rPlxuICAgICAgPC9DYXJkLkJvZHk+XG4gICAgPC9DYXJkPlxuPC9MaW5rPiBcbiAgICA8L0NvbD5cbiAgKVxufSl9XG48L1Jvdz5cbjwvQ29udGFpbmVyPlxuPC9Db250YWluZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5zaWdodHNcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbnRhaW5lciIsIlJvdyIsIkNvbCIsIkltYWdlIiwiQnJlYWRjcnVtYiIsIkNhcmQiLCJCdXR0b24iLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkxpbmsiLCJjb25maWdEYXRhIiwiSW5zaWdodHMiLCJ0YWdzIiwiYWxsSW5zaWdodHMiLCJzZXRJbnNpZ2h0cyIsImhlYWRpbmciLCJzZXRIZWFkaW5nIiwiZmV0Y2hJbnNpZ2h0cyIsInVybCIsIlNFUlZFUl9VUkwiLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwiZXJyb3IiLCJjbGFzc05hbWUiLCJpZCIsImgyIiwibWFwIiwicG9zdCIsIlR5cGUiLCJQc2x1ZyIsIkxpbmtzIiwic20iLCJsZyIsInhzIiwibWQiLCJocmVmIiwiZGl2IiwiY2xhc3MiLCJpbWciLCJzcmMiLCJhbHQiLCJoNSIsInAiLCJzbWFsbCIsIkltZyIsInZhcmlhbnQiLCJCb2R5Iiwic3R5bGUiLCJoZWlnaHQiLCJzcGFuIiwiVGl0bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/FetchAccount.js\n"));

/***/ })

});