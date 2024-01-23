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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config.json */ \"./config.json\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Insights(param) {\n    let { tags  } = param;\n    _s();\n    const [allInsights, setInsights] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [heading, setHeading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [article, setArticle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const fetchInsights = async ()=>{\n        let url = \"\";\n        url = \"\".concat(_config_json__WEBPACK_IMPORTED_MODULE_3__.SERVER_URL, \"all-insights?tag=\").concat(tags);\n        try {\n            const response = await fetch(url);\n            const data = await response.json();\n            console.log(data.length);\n            setInsights(data);\n            if (data.length > 1) {\n                setHeading(true);\n            }\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchInsights();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Container, {\n        className: \"mb-5 mt-5 text-center\",\n        id: \"insights\",\n        children: [\n            heading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Our Latest Insights\"\n            }, void 0, false, {\n                fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchAccount.js\",\n                lineNumber: 34,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Container, {\n                className: \"mt-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Row, {\n                    className: \"center\",\n                    children: allInsights.map((post)=>{\n                        //console.log(post);\n                        const Type = post[\"type\"];\n                        const Pslug = post[\"slug\"];\n                        let Links;\n                        if (Type == \"page\") {\n                            Links = Pslug;\n                        } else {\n                            Links = Type + \"/\" + Pslug;\n                        }\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {\n                            sm: 6,\n                            lg: 6,\n                            xs: 6,\n                            md: 6,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                class: \"card mb-3 border-0\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    class: \"row g-0\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            class: \"col-md-4 d-flex justify-content-center align-items-center\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Image, {\n                                                src: post[\"featured_img_src\"],\n                                                class: \"img-fluid \",\n                                                alt: \"...\",\n                                                width: 220,\n                                                height: 220\n                                            }, void 0, false, {\n                                                fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchAccount.js\",\n                                                lineNumber: 56,\n                                                columnNumber: 21\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchAccount.js\",\n                                            lineNumber: 55,\n                                            columnNumber: 5\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            class: \"col-md-8 text-start\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    class: \"card-body\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                                            class: \"card-title text-start\",\n                                                            dangerouslySetInnerHTML: {\n                                                                __html: post[\"title\"]\n                                                            }\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchAccount.js\",\n                                                            lineNumber: 60,\n                                                            columnNumber: 9\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                            class: \"card-text text-start\",\n                                                            dangerouslySetInnerHTML: {\n                                                                __html: post[\"excerpt\"]\n                                                            }\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchAccount.js\",\n                                                            lineNumber: 61,\n                                                            columnNumber: 25\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                            href: Links,\n                                                            className: \"pr-text text-decoration-none expand-btn text-white px-5 rounded-3\",\n                                                            children: \"Read More\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchAccount.js\",\n                                                            lineNumber: 62,\n                                                            columnNumber: 25\n                                                        }, this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchAccount.js\",\n                                                    lineNumber: 59,\n                                                    columnNumber: 7\n                                                }, this),\n                                                Type\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchAccount.js\",\n                                            lineNumber: 58,\n                                            columnNumber: 5\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchAccount.js\",\n                                    lineNumber: 54,\n                                    columnNumber: 3\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchAccount.js\",\n                                lineNumber: 53,\n                                columnNumber: 14\n                            }, this)\n                        }, post[\"id\"], false, {\n                            fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchAccount.js\",\n                            lineNumber: 50,\n                            columnNumber: 3\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchAccount.js\",\n                    lineNumber: 36,\n                    columnNumber: 3\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchAccount.js\",\n                lineNumber: 35,\n                columnNumber: 1\n            }, this),\n            heading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Ebooks\"\n            }, void 0, false, {\n                fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchAccount.js\",\n                lineNumber: 74,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Container, {\n                className: \"mt-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Row, {\n                    className: \"center\",\n                    children: allInsights.map((post)=>{\n                        //console.log(post);\n                        const Type = post[\"type\"];\n                        const Pslug = post[\"slug\"];\n                        let Links;\n                        if (Type == \"page\") {\n                            Links = Pslug;\n                        } else {\n                            Links = Type + \"/\" + Pslug;\n                        }\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {\n                            sm: 6,\n                            lg: 6,\n                            xs: 6,\n                            md: 6,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                class: \"card mb-3 border-0\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    class: \"row g-0\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            class: \"col-md-4 d-flex justify-content-center align-items-center\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Image, {\n                                                src: post[\"featured_img_src\"],\n                                                class: \"img-fluid \",\n                                                alt: \"...\",\n                                                width: 220,\n                                                height: 220\n                                            }, void 0, false, {\n                                                fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchAccount.js\",\n                                                lineNumber: 96,\n                                                columnNumber: 21\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchAccount.js\",\n                                            lineNumber: 95,\n                                            columnNumber: 5\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            class: \"col-md-8 text-start\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                class: \"card-body\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                                        class: \"card-title text-start\",\n                                                        dangerouslySetInnerHTML: {\n                                                            __html: post[\"title\"]\n                                                        }\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchAccount.js\",\n                                                        lineNumber: 100,\n                                                        columnNumber: 9\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        class: \"card-text text-start\",\n                                                        dangerouslySetInnerHTML: {\n                                                            __html: post[\"excerpt\"]\n                                                        }\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchAccount.js\",\n                                                        lineNumber: 101,\n                                                        columnNumber: 25\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                        href: Links,\n                                                        className: \"pr-text text-decoration-none expand-btn text-white px-5 rounded-3\",\n                                                        children: \"Read More\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchAccount.js\",\n                                                        lineNumber: 102,\n                                                        columnNumber: 25\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchAccount.js\",\n                                                lineNumber: 99,\n                                                columnNumber: 7\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchAccount.js\",\n                                            lineNumber: 98,\n                                            columnNumber: 5\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchAccount.js\",\n                                    lineNumber: 94,\n                                    columnNumber: 3\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchAccount.js\",\n                                lineNumber: 93,\n                                columnNumber: 14\n                            }, this)\n                        }, post[\"id\"], false, {\n                            fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchAccount.js\",\n                            lineNumber: 90,\n                            columnNumber: 3\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchAccount.js\",\n                    lineNumber: 76,\n                    columnNumber: 3\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchAccount.js\",\n                lineNumber: 75,\n                columnNumber: 1\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchAccount.js\",\n        lineNumber: 33,\n        columnNumber: 1\n    }, this);\n}\n_s(Insights, \"kTQ/rOf5BLmlKvpDbfSncq790TY=\");\n_c = Insights;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Insights);\nvar _c;\n$RefreshReg$(_c, \"Insights\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixvQkFBb0I7d0JBQ3BCLE1BQU1DLE9BQVFELElBQUksQ0FBQyxPQUFPO3dCQUMxQixNQUFNRSxRQUFTRixJQUFJLENBQUMsT0FBTzt3QkFDM0IsSUFBSUc7d0JBQ0osSUFBR0YsUUFBTyxRQUFPOzRCQUNmRSxRQUFRRDt3QkFDVixPQUNJOzRCQUNGQyxRQUFRRixPQUFPLE1BQUtDO3dCQUN0QixDQUFDO3dCQUNILHFCQUNFLDhEQUFDbEMsZ0RBQUdBOzRCQUFrQm9DLElBQUk7NEJBQUdDLElBQUk7NEJBQUdDLElBQUk7NEJBQUdDLElBQUk7c0NBR3BDLDRFQUFDQztnQ0FBSUMsT0FBTTswQ0FDdEIsNEVBQUNEO29DQUFJQyxPQUFNOztzREFDVCw4REFBQ0Q7NENBQUlDLE9BQU07c0RBQ0ssNEVBQUN4QyxrREFBS0E7Z0RBQUN5QyxLQUFLVixJQUFJLENBQUMsbUJBQW1CO2dEQUFFUyxPQUFNO2dEQUFhRSxLQUFJO2dEQUFNQyxPQUFPO2dEQUFLQyxRQUFROzs7Ozs7Ozs7OztzREFFdkcsOERBQUNMOzRDQUFJQyxPQUFNO3NEQUNULDRFQUFDRDtnREFBSUMsT0FBTTs7a0VBQ1QsOERBQUNLO3dEQUFHTCxPQUFNO3dEQUF3Qk0seUJBQXlCOzREQUFDQyxRQUFPaEIsSUFBSSxDQUFDLFFBQVE7d0RBQUE7Ozs7OztrRUFDaEUsOERBQUNpQjt3REFBRVIsT0FBTTt3REFBdUJNLHlCQUF5Qjs0REFBRUMsUUFBUWhCLElBQUksQ0FBQyxVQUFVO3dEQUFDOzs7Ozs7a0VBQ25GLDhEQUFDekIsa0RBQUlBO3dEQUFDMkMsTUFBTWY7d0RBQU9QLFdBQVU7a0VBQW9FOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJCQVo3R0ksSUFBSSxDQUFDLEtBQUs7Ozs7O29CQW9CdEI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS0E7R0E1R1N2QjtLQUFBQTtBQThHVCwrREFBZUEsUUFBUUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi91dGlscy9GZXRjaEFjY291bnQuanM/MTA5YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge0NvbnRhaW5lcixSb3csIENvbCxJbWFnZSxCcmVhZGNydW1iLENhcmQsIEJ1dHRvbn0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgY29uZmlnRGF0YSBmcm9tIFwiLi4vY29uZmlnLmpzb25cIjtcblxuZnVuY3Rpb24gSW5zaWdodHMoe3RhZ3N9KSB7XG4gIGNvbnN0IFthbGxJbnNpZ2h0cywgc2V0SW5zaWdodHNdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFtoZWFkaW5nLCBzZXRIZWFkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbYXJ0aWNsZSwgc2V0QXJ0aWNsZV0gPSB1c2VTdGF0ZSgpO1xuXG4gICAgY29uc3QgZmV0Y2hJbnNpZ2h0cyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgbGV0IHVybCA9IFwiXCI7XG4gICAgICAgIHVybCA9IGAke2NvbmZpZ0RhdGEuU0VSVkVSX1VSTH1hbGwtaW5zaWdodHM/dGFnPSR7dGFnc31gO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEubGVuZ3RoKTtcbiAgICAgICAgICBzZXRJbnNpZ2h0cyhkYXRhKTtcbiAgICAgICAgICBpZihkYXRhLmxlbmd0aCA+IDEpe1xuICAgICAgICAgICAgc2V0SGVhZGluZyh0cnVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZmV0Y2hJbnNpZ2h0cygpO1xuICAgICAgfSxbXSk7XG5cblxuICByZXR1cm4gKFxuPENvbnRhaW5lciBjbGFzc05hbWU9XCJtYi01IG10LTUgdGV4dC1jZW50ZXJcIiBpZD1cImluc2lnaHRzXCI+XG57aGVhZGluZyAmJiA8aDI+T3VyIExhdGVzdCBJbnNpZ2h0czwvaDI+fVxuPENvbnRhaW5lciBjbGFzc05hbWU9XCJtdC01XCI+XG4gIDxSb3cgY2xhc3NOYW1lPVwiY2VudGVyXCI+XG4gIHtcbmFsbEluc2lnaHRzLm1hcCgocG9zdCkgPT4ge1xuICAvL2NvbnNvbGUubG9nKHBvc3QpO1xuICBjb25zdCBUeXBlID0gIHBvc3RbJ3R5cGUnXTtcbiAgY29uc3QgUHNsdWcgPSAgcG9zdFsnc2x1ZyddO1xuICBsZXQgTGlua3M7XG4gIGlmKFR5cGUgPT0ncGFnZScpe1xuICAgIExpbmtzID0gUHNsdWc7XG4gIH1cbiAgZWxzZXtcbiAgICBMaW5rcyA9IFR5cGUgKyAnLycrIFBzbHVnO1xuICB9XG5yZXR1cm4gKFxuICA8Q29sIGtleT17cG9zdFsnaWQnXX0gc209ezZ9IGxnPXs2fSB4cz17Nn0gbWQ9ezZ9PlxuXG4gICAgICAgICAgIFxuICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkIG1iLTMgYm9yZGVyLTBcIiA+XG4gIDxkaXYgY2xhc3M9XCJyb3cgZy0wXCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbC1tZC00IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtwb3N0WydmZWF0dXJlZF9pbWdfc3JjJ119IGNsYXNzPVwiaW1nLWZsdWlkIFwiIGFsdD1cIi4uLlwiIHdpZHRoPXsyMjB9IGhlaWdodD17MjIwfSAvPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtOCB0ZXh0LXN0YXJ0XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgIDxoNSBjbGFzcz1cImNhcmQtdGl0bGUgdGV4dC1zdGFydFwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOnBvc3RbJ3RpdGxlJ119fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImNhcmQtdGV4dCB0ZXh0LXN0YXJ0XCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBwb3N0WydleGNlcnB0J10gfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e0xpbmtzfSBjbGFzc05hbWU9XCJwci10ZXh0IHRleHQtZGVjb3JhdGlvbi1ub25lIGV4cGFuZC1idG4gdGV4dC13aGl0ZSBweC01IHJvdW5kZWQtM1wiPlJlYWQgTW9yZTwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIHtUeXBlfVxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+XG4gICAgPC9Db2w+XG4gIClcbn0pfVxuPC9Sb3c+XG48L0NvbnRhaW5lcj5cbntoZWFkaW5nICYmIDxoMj5FYm9va3M8L2gyPn1cbjxDb250YWluZXIgY2xhc3NOYW1lPVwibXQtNVwiPlxuICA8Um93IGNsYXNzTmFtZT1cImNlbnRlclwiPlxuICB7XG5hbGxJbnNpZ2h0cy5tYXAoKHBvc3QpID0+IHtcbiAgLy9jb25zb2xlLmxvZyhwb3N0KTtcbiAgY29uc3QgVHlwZSA9ICBwb3N0Wyd0eXBlJ107XG4gIGNvbnN0IFBzbHVnID0gIHBvc3RbJ3NsdWcnXTtcbiAgbGV0IExpbmtzO1xuICBpZihUeXBlID09J3BhZ2UnKXtcbiAgICBMaW5rcyA9IFBzbHVnO1xuICB9XG4gIGVsc2V7XG4gICAgTGlua3MgPSBUeXBlICsgJy8nKyBQc2x1ZztcbiAgfVxucmV0dXJuIChcbiAgPENvbCBrZXk9e3Bvc3RbJ2lkJ119IHNtPXs2fSBsZz17Nn0geHM9ezZ9IG1kPXs2fT5cblxuICAgICAgICAgICBcbiAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZCBtYi0zIGJvcmRlci0wXCIgPlxuICA8ZGl2IGNsYXNzPVwicm93IGctMFwiPlxuICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNCBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17cG9zdFsnZmVhdHVyZWRfaW1nX3NyYyddfSBjbGFzcz1cImltZy1mbHVpZCBcIiBhbHQ9XCIuLi5cIiB3aWR0aD17MjIwfSBoZWlnaHQ9ezIyMH0gLz5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTggdGV4dC1zdGFydFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxuICAgICAgICA8aDUgY2xhc3M9XCJjYXJkLXRpdGxlIHRleHQtc3RhcnRcIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDpwb3N0Wyd0aXRsZSddfX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkLXRleHQgdGV4dC1zdGFydFwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcG9zdFsnZXhjZXJwdCddIH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtMaW5rc30gY2xhc3NOYW1lPVwicHItdGV4dCB0ZXh0LWRlY29yYXRpb24tbm9uZSBleHBhbmQtYnRuIHRleHQtd2hpdGUgcHgtNSByb3VuZGVkLTNcIj5SZWFkIE1vcmU8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PlxuICAgIDwvQ29sPlxuICApXG59KX1cbjwvUm93PlxuICAgICAgICAgIDwvQ29udGFpbmVyPlxuPC9Db250YWluZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5zaWdodHNcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbnRhaW5lciIsIlJvdyIsIkNvbCIsIkltYWdlIiwiQnJlYWRjcnVtYiIsIkNhcmQiLCJCdXR0b24iLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkxpbmsiLCJjb25maWdEYXRhIiwiSW5zaWdodHMiLCJ0YWdzIiwiYWxsSW5zaWdodHMiLCJzZXRJbnNpZ2h0cyIsImhlYWRpbmciLCJzZXRIZWFkaW5nIiwiYXJ0aWNsZSIsInNldEFydGljbGUiLCJmZXRjaEluc2lnaHRzIiwidXJsIiwiU0VSVkVSX1VSTCIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJlcnJvciIsImNsYXNzTmFtZSIsImlkIiwiaDIiLCJtYXAiLCJwb3N0IiwiVHlwZSIsIlBzbHVnIiwiTGlua3MiLCJzbSIsImxnIiwieHMiLCJtZCIsImRpdiIsImNsYXNzIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJoNSIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwicCIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/FetchAccount.js\n"));

/***/ })

});