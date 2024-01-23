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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config.json */ \"./config.json\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Insights(param) {\n    let { tags  } = param;\n    _s();\n    const [allInsights, setInsights] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [heading, setHeading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [article, setArticle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [ebooks, setEbooks] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [pov, setPov] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [podcasts, setPodcasts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const fetchInsights = async ()=>{\n        let url = \"\";\n        url = \"\".concat(_config_json__WEBPACK_IMPORTED_MODULE_3__.SERVER_URL, \"all-insights?tag=\").concat(tags);\n        try {\n            const response = await fetch(url);\n            const data = await response.json();\n            console.log(data.length);\n            setInsights(data);\n            if (data.length > 1) {\n                setHeading(true);\n            }\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchInsights();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Container, {\n        className: \"mb-5 mt-5 text-center\",\n        id: \"insights\",\n        children: [\n            heading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Our Latest Insights\"\n            }, void 0, false, {\n                fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchAccount.js\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Container, {\n                className: \"mt-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Row, {\n                    className: \"center\",\n                    children: allInsights.map((post)=>{\n                        //console.log(post);\n                        const Type = post[\"type\"];\n                        const Pslug = post[\"slug\"];\n                        let Links;\n                        if (Type == \"page\") {\n                            Links = Pslug;\n                        } else {\n                            Links = Type + \"/\" + Pslug;\n                        }\n                        // if (Type == 'articles') {\n                        //     setArticle(true)   \n                        // }\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {\n                            sm: 6,\n                            lg: 6,\n                            xs: 6,\n                            md: 6,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                class: \"card mb-3 border-0\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    class: \"row g-0\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            class: \"col-md-4 d-flex justify-content-center align-items-center\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Image, {\n                                                src: post[\"featured_img_src\"],\n                                                class: \"img-fluid \",\n                                                alt: \"...\",\n                                                width: 220,\n                                                height: 220\n                                            }, void 0, false, {\n                                                fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchAccount.js\",\n                                                lineNumber: 60,\n                                                columnNumber: 21\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchAccount.js\",\n                                            lineNumber: 59,\n                                            columnNumber: 5\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            class: \"col-md-8 text-start\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    class: \"card-body\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                                            class: \"card-title text-start\",\n                                                            dangerouslySetInnerHTML: {\n                                                                __html: post[\"title\"]\n                                                            }\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchAccount.js\",\n                                                            lineNumber: 64,\n                                                            columnNumber: 9\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                            class: \"card-text text-start\",\n                                                            dangerouslySetInnerHTML: {\n                                                                __html: post[\"excerpt\"]\n                                                            }\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchAccount.js\",\n                                                            lineNumber: 65,\n                                                            columnNumber: 25\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                            href: Links,\n                                                            className: \"pr-text text-decoration-none expand-btn text-white px-5 rounded-3\",\n                                                            children: \"Read More\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchAccount.js\",\n                                                            lineNumber: 66,\n                                                            columnNumber: 25\n                                                        }, this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchAccount.js\",\n                                                    lineNumber: 63,\n                                                    columnNumber: 7\n                                                }, this),\n                                                Type\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchAccount.js\",\n                                            lineNumber: 62,\n                                            columnNumber: 5\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchAccount.js\",\n                                    lineNumber: 58,\n                                    columnNumber: 3\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchAccount.js\",\n                                lineNumber: 57,\n                                columnNumber: 1\n                            }, this)\n                        }, post[\"id\"], false, {\n                            fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchAccount.js\",\n                            lineNumber: 56,\n                            columnNumber: 3\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchAccount.js\",\n                    lineNumber: 39,\n                    columnNumber: 3\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchAccount.js\",\n                lineNumber: 38,\n                columnNumber: 1\n            }, this),\n            heading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Ebooks\"\n            }, void 0, false, {\n                fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchAccount.js\",\n                lineNumber: 78,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Container, {\n                className: \"mt-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Row, {\n                    className: \"center\",\n                    children: allInsights.map((post)=>{\n                        //console.log(post);\n                        const Type = post[\"type\"];\n                        const Pslug = post[\"slug\"];\n                        let Links;\n                        if (Type == \"page\") {\n                            Links = Pslug;\n                        } else {\n                            Links = Type + \"/\" + Pslug;\n                        }\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {\n                            sm: 6,\n                            lg: 6,\n                            xs: 6,\n                            md: 6,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                class: \"card mb-3 border-0\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    class: \"row g-0\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            class: \"col-md-4 d-flex justify-content-center align-items-center\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Image, {\n                                                src: post[\"featured_img_src\"],\n                                                class: \"img-fluid \",\n                                                alt: \"...\",\n                                                width: 220,\n                                                height: 220\n                                            }, void 0, false, {\n                                                fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchAccount.js\",\n                                                lineNumber: 100,\n                                                columnNumber: 21\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchAccount.js\",\n                                            lineNumber: 99,\n                                            columnNumber: 5\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            class: \"col-md-8 text-start\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                class: \"card-body\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                                        class: \"card-title text-start\",\n                                                        dangerouslySetInnerHTML: {\n                                                            __html: post[\"title\"]\n                                                        }\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchAccount.js\",\n                                                        lineNumber: 104,\n                                                        columnNumber: 9\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        class: \"card-text text-start\",\n                                                        dangerouslySetInnerHTML: {\n                                                            __html: post[\"excerpt\"]\n                                                        }\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchAccount.js\",\n                                                        lineNumber: 105,\n                                                        columnNumber: 25\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                        href: Links,\n                                                        className: \"pr-text text-decoration-none expand-btn text-white px-5 rounded-3\",\n                                                        children: \"Read More\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchAccount.js\",\n                                                        lineNumber: 106,\n                                                        columnNumber: 25\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchAccount.js\",\n                                                lineNumber: 103,\n                                                columnNumber: 7\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchAccount.js\",\n                                            lineNumber: 102,\n                                            columnNumber: 5\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchAccount.js\",\n                                    lineNumber: 98,\n                                    columnNumber: 3\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchAccount.js\",\n                                lineNumber: 97,\n                                columnNumber: 14\n                            }, this)\n                        }, post[\"id\"], false, {\n                            fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchAccount.js\",\n                            lineNumber: 94,\n                            columnNumber: 3\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchAccount.js\",\n                    lineNumber: 80,\n                    columnNumber: 3\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchAccount.js\",\n                lineNumber: 79,\n                columnNumber: 1\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchAccount.js\",\n        lineNumber: 36,\n        columnNumber: 1\n    }, this);\n}\n_s(Insights, \"kCspNxl4VbhU/hLjYYBt8AfCtiM=\");\n_c = Insights;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Insights);\nvar _c;\n$RefreshReg$(_c, \"Insights\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OzsyQkFaN0dJLElBQUksQ0FBQyxLQUFLOzs7OztvQkFvQnRCOzs7Ozs7Ozs7Ozs7Ozs7OztBQUtBO0dBaEhTN0I7S0FBQUE7QUFrSFQsK0RBQWVBLFFBQVFBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvRmV0Y2hBY2NvdW50LmpzPzEwOWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtDb250YWluZXIsUm93LCBDb2wsSW1hZ2UsQnJlYWRjcnVtYixDYXJkLCBCdXR0b259IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IGNvbmZpZ0RhdGEgZnJvbSBcIi4uL2NvbmZpZy5qc29uXCI7XG5cbmZ1bmN0aW9uIEluc2lnaHRzKHt0YWdzfSkge1xuICBjb25zdCBbYWxsSW5zaWdodHMsIHNldEluc2lnaHRzXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbaGVhZGluZywgc2V0SGVhZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2FydGljbGUsIHNldEFydGljbGVdID0gdXNlU3RhdGUoKTtcbiAgICBjb25zdCBbZWJvb2tzLCBzZXRFYm9va3NdID0gdXNlU3RhdGUoKTtcbiAgICBjb25zdCBbcG92LCBzZXRQb3ZdID0gdXNlU3RhdGUoKTtcbiAgICBjb25zdCBbcG9kY2FzdHMsIHNldFBvZGNhc3RzXSA9IHVzZVN0YXRlKCk7XG5cbiAgICBjb25zdCBmZXRjaEluc2lnaHRzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBsZXQgdXJsID0gXCJcIjtcbiAgICAgICAgdXJsID0gYCR7Y29uZmlnRGF0YS5TRVJWRVJfVVJMfWFsbC1pbnNpZ2h0cz90YWc9JHt0YWdzfWA7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YS5sZW5ndGgpO1xuICAgICAgICAgIHNldEluc2lnaHRzKGRhdGEpO1xuICAgICAgICAgIGlmKGRhdGEubGVuZ3RoID4gMSl7XG4gICAgICAgICAgICBzZXRIZWFkaW5nKHRydWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBmZXRjaEluc2lnaHRzKCk7XG4gICAgICB9LFtdKTtcblxuXG4gIHJldHVybiAoXG48Q29udGFpbmVyIGNsYXNzTmFtZT1cIm1iLTUgbXQtNSB0ZXh0LWNlbnRlclwiIGlkPVwiaW5zaWdodHNcIj5cbntoZWFkaW5nICYmIDxoMj5PdXIgTGF0ZXN0IEluc2lnaHRzPC9oMj59XG48Q29udGFpbmVyIGNsYXNzTmFtZT1cIm10LTVcIj5cbiAgPFJvdyBjbGFzc05hbWU9XCJjZW50ZXJcIj5cbiAge1xuYWxsSW5zaWdodHMubWFwKChwb3N0KSA9PiB7XG4gIC8vY29uc29sZS5sb2cocG9zdCk7XG4gIGNvbnN0IFR5cGUgPSAgcG9zdFsndHlwZSddO1xuICBjb25zdCBQc2x1ZyA9ICBwb3N0WydzbHVnJ107XG4gIGxldCBMaW5rcztcbiAgaWYoVHlwZSA9PSdwYWdlJyl7XG4gICAgTGlua3MgPSBQc2x1ZztcbiAgfVxuICBlbHNle1xuICAgIExpbmtzID0gVHlwZSArICcvJysgUHNsdWc7XG4gIH1cbiAgICAvLyBpZiAoVHlwZSA9PSAnYXJ0aWNsZXMnKSB7XG4gICAgLy8gICAgIHNldEFydGljbGUodHJ1ZSkgICBcbiAgICAvLyB9XG5yZXR1cm4gKFxuICA8Q29sIGtleT17cG9zdFsnaWQnXX0gc209ezZ9IGxnPXs2fSB4cz17Nn0gbWQ9ezZ9PlxuPGRpdiBjbGFzcz1cImNhcmQgbWItMyBib3JkZXItMFwiID5cbiAgPGRpdiBjbGFzcz1cInJvdyBnLTBcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTQgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e3Bvc3RbJ2ZlYXR1cmVkX2ltZ19zcmMnXX0gY2xhc3M9XCJpbWctZmx1aWQgXCIgYWx0PVwiLi4uXCIgd2lkdGg9ezIyMH0gaGVpZ2h0PXsyMjB9IC8+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNvbC1tZC04IHRleHQtc3RhcnRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgPGg1IGNsYXNzPVwiY2FyZC10aXRsZSB0ZXh0LXN0YXJ0XCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6cG9zdFsndGl0bGUnXX19Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiY2FyZC10ZXh0IHRleHQtc3RhcnRcIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHBvc3RbJ2V4Y2VycHQnXSB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17TGlua3N9IGNsYXNzTmFtZT1cInByLXRleHQgdGV4dC1kZWNvcmF0aW9uLW5vbmUgZXhwYW5kLWJ0biB0ZXh0LXdoaXRlIHB4LTUgcm91bmRlZC0zXCI+UmVhZCBNb3JlPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAge1R5cGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cbiAgICA8L0NvbD5cbiAgKVxufSl9XG48L1Jvdz5cbjwvQ29udGFpbmVyPlxue2hlYWRpbmcgJiYgPGgyPkVib29rczwvaDI+fVxuPENvbnRhaW5lciBjbGFzc05hbWU9XCJtdC01XCI+XG4gIDxSb3cgY2xhc3NOYW1lPVwiY2VudGVyXCI+XG4gIHtcbmFsbEluc2lnaHRzLm1hcCgocG9zdCkgPT4ge1xuICAvL2NvbnNvbGUubG9nKHBvc3QpO1xuICBjb25zdCBUeXBlID0gIHBvc3RbJ3R5cGUnXTtcbiAgY29uc3QgUHNsdWcgPSAgcG9zdFsnc2x1ZyddO1xuICBsZXQgTGlua3M7XG4gIGlmKFR5cGUgPT0ncGFnZScpe1xuICAgIExpbmtzID0gUHNsdWc7XG4gIH1cbiAgZWxzZXtcbiAgICBMaW5rcyA9IFR5cGUgKyAnLycrIFBzbHVnO1xuICB9XG5yZXR1cm4gKFxuICA8Q29sIGtleT17cG9zdFsnaWQnXX0gc209ezZ9IGxnPXs2fSB4cz17Nn0gbWQ9ezZ9PlxuXG4gICAgICAgICAgIFxuICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkIG1iLTMgYm9yZGVyLTBcIiA+XG4gIDxkaXYgY2xhc3M9XCJyb3cgZy0wXCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbC1tZC00IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtwb3N0WydmZWF0dXJlZF9pbWdfc3JjJ119IGNsYXNzPVwiaW1nLWZsdWlkIFwiIGFsdD1cIi4uLlwiIHdpZHRoPXsyMjB9IGhlaWdodD17MjIwfSAvPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtOCB0ZXh0LXN0YXJ0XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgIDxoNSBjbGFzcz1cImNhcmQtdGl0bGUgdGV4dC1zdGFydFwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOnBvc3RbJ3RpdGxlJ119fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImNhcmQtdGV4dCB0ZXh0LXN0YXJ0XCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBwb3N0WydleGNlcnB0J10gfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e0xpbmtzfSBjbGFzc05hbWU9XCJwci10ZXh0IHRleHQtZGVjb3JhdGlvbi1ub25lIGV4cGFuZC1idG4gdGV4dC13aGl0ZSBweC01IHJvdW5kZWQtM1wiPlJlYWQgTW9yZTwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+XG4gICAgPC9Db2w+XG4gIClcbn0pfVxuPC9Sb3c+XG4gICAgICAgICAgPC9Db250YWluZXI+XG48L0NvbnRhaW5lcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnNpZ2h0c1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29udGFpbmVyIiwiUm93IiwiQ29sIiwiSW1hZ2UiLCJCcmVhZGNydW1iIiwiQ2FyZCIsIkJ1dHRvbiIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTGluayIsImNvbmZpZ0RhdGEiLCJJbnNpZ2h0cyIsInRhZ3MiLCJhbGxJbnNpZ2h0cyIsInNldEluc2lnaHRzIiwiaGVhZGluZyIsInNldEhlYWRpbmciLCJhcnRpY2xlIiwic2V0QXJ0aWNsZSIsImVib29rcyIsInNldEVib29rcyIsInBvdiIsInNldFBvdiIsInBvZGNhc3RzIiwic2V0UG9kY2FzdHMiLCJmZXRjaEluc2lnaHRzIiwidXJsIiwiU0VSVkVSX1VSTCIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJlcnJvciIsImNsYXNzTmFtZSIsImlkIiwiaDIiLCJtYXAiLCJwb3N0IiwiVHlwZSIsIlBzbHVnIiwiTGlua3MiLCJzbSIsImxnIiwieHMiLCJtZCIsImRpdiIsImNsYXNzIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJoNSIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwicCIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/FetchAccount.js\n"));

/***/ })

});