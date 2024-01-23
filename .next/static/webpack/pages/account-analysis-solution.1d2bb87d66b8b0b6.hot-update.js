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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config.json */ \"./config.json\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Insights(param) {\n    let { tags  } = param;\n    _s();\n    const [allInsights, setInsights] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [heading, setHeading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const fetchInsights = async ()=>{\n        let url = \"\";\n        url = \"\".concat(_config_json__WEBPACK_IMPORTED_MODULE_3__.SERVER_URL, \"all-insights?tag=\").concat(tags);\n        try {\n            const response = await fetch(url);\n            const data = await response.json();\n            console.log(data.length);\n            setInsights(data);\n            if (data.length > 1) {\n                setHeading(true);\n            }\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchInsights();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Container, {\n        className: \"mb-5 mt-5 text-center\",\n        id: \"insights\",\n        children: [\n            heading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Our Latest Insights\"\n            }, void 0, false, {\n                fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchAccount.js\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Container, {\n                className: \"mt-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Row, {\n                    className: \"center\",\n                    children: allInsights.map((post)=>{\n                        //console.log(post);\n                        const Type = post[\"type\"];\n                        const Pslug = post[\"slug\"];\n                        let Links;\n                        if (Type == \"page\") {\n                            Links = Pslug;\n                        } else {\n                            Links = Type + \"/\" + Pslug;\n                        }\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {\n                            sm: 6,\n                            lg: 6,\n                            xs: 6,\n                            md: 6,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: Links,\n                                className: \"pr-text text-decoration-none\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    class: \"card mb-3\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        class: \"row g-0\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                class: \"col-md-4\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                    src: post[\"featured_img_src\"],\n                                                    class: \"img-fluid w-100 h-100\",\n                                                    alt: \"...\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchAccount.js\",\n                                                    lineNumber: 56,\n                                                    columnNumber: 7\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchAccount.js\",\n                                                lineNumber: 55,\n                                                columnNumber: 5\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                class: \"col-md-8\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    class: \"card-body\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                                            class: \"card-title\",\n                                                            children: post[\"title\"]\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchAccount.js\",\n                                                            lineNumber: 60,\n                                                            columnNumber: 9\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                            class: \"card-text\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchAccount.js\",\n                                                            lineNumber: 61,\n                                                            columnNumber: 9\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                            class: \"card-text\",\n                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                                                                class: \"text-body-secondary\",\n                                                                children: \"Last updated 3 mins ago\"\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchAccount.js\",\n                                                                lineNumber: 62,\n                                                                columnNumber: 30\n                                                            }, this)\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchAccount.js\",\n                                                            lineNumber: 62,\n                                                            columnNumber: 9\n                                                        }, this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchAccount.js\",\n                                                    lineNumber: 59,\n                                                    columnNumber: 7\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchAccount.js\",\n                                                lineNumber: 58,\n                                                columnNumber: 5\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchAccount.js\",\n                                        lineNumber: 54,\n                                        columnNumber: 3\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchAccount.js\",\n                                    lineNumber: 53,\n                                    columnNumber: 14\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchAccount.js\",\n                                lineNumber: 50,\n                                columnNumber: 1\n                            }, this)\n                        }, post[\"id\"], false, {\n                            fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchAccount.js\",\n                            lineNumber: 49,\n                            columnNumber: 3\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchAccount.js\",\n                    lineNumber: 35,\n                    columnNumber: 3\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchAccount.js\",\n                lineNumber: 34,\n                columnNumber: 1\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchAccount.js\",\n        lineNumber: 32,\n        columnNumber: 1\n    }, this);\n}\n_s(Insights, \"Yn0sHO1YCdaa57DMnWWFl62OG2M=\");\n_c = Insights;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Insights);\nvar _c;\n$RefreshReg$(_c, \"Insights\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9GZXRjaEFjY291bnQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQXlCO0FBQ3dEO0FBQ3JDO0FBQ2Y7QUFDVztBQUV4QyxTQUFTWSxTQUFTLEtBQU0sRUFBRTtRQUFSLEVBQUNDLEtBQUksRUFBQyxHQUFOOztJQUNoQixNQUFNLENBQUNDLGFBQWFDLFlBQVksR0FBR04sK0NBQVFBLENBQUMsRUFBRTtJQUM5QyxNQUFNLENBQUNPLFNBQVNDLFdBQVcsR0FBR1IsK0NBQVFBLENBQUMsS0FBSztJQUUxQyxNQUFNUyxnQkFBZ0IsVUFBWTtRQUM5QixJQUFJQyxNQUFNO1FBQ1ZBLE1BQU0sR0FBNENOLE9BQXpDRixvREFBcUIsRUFBQyxxQkFBd0IsT0FBTEU7UUFDbEQsSUFBSTtZQUNGLE1BQU1RLFdBQVcsTUFBTUMsTUFBTUg7WUFDN0IsTUFBTUksT0FBTyxNQUFNRixTQUFTRyxJQUFJO1lBQ2hDQyxRQUFRQyxHQUFHLENBQUNILEtBQUtJLE1BQU07WUFDdkJaLFlBQVlRO1lBQ1osSUFBR0EsS0FBS0ksTUFBTSxHQUFHLEdBQUU7Z0JBQ2pCVixXQUFXLElBQUk7WUFDakIsQ0FBQztRQUNILEVBQUUsT0FBT1csT0FBTztZQUNkSCxRQUFRQyxHQUFHLENBQUNFO1FBQ2Q7SUFDRjtJQUNBcEIsZ0RBQVNBLENBQUMsSUFBTTtRQUNkVTtJQUNGLEdBQUUsRUFBRTtJQUdSLHFCQUNGLDhEQUFDakIsc0RBQVNBO1FBQUM0QixXQUFVO1FBQXdCQyxJQUFHOztZQUMvQ2QseUJBQVcsOERBQUNlOzBCQUFHOzs7Ozs7MEJBQ2hCLDhEQUFDOUIsc0RBQVNBO2dCQUFDNEIsV0FBVTswQkFDbkIsNEVBQUMzQixnREFBR0E7b0JBQUMyQixXQUFVOzhCQUVqQmYsWUFBWWtCLEdBQUcsQ0FBQyxDQUFDQyxPQUFTO3dCQUN4QixvQkFBb0I7d0JBQ3BCLE1BQU1DLE9BQVFELElBQUksQ0FBQyxPQUFPO3dCQUMxQixNQUFNRSxRQUFTRixJQUFJLENBQUMsT0FBTzt3QkFDM0IsSUFBSUc7d0JBQ0osSUFBR0YsUUFBTyxRQUFPOzRCQUNmRSxRQUFRRDt3QkFDVixPQUNJOzRCQUNGQyxRQUFRRixPQUFPLE1BQUtDO3dCQUN0QixDQUFDO3dCQUNILHFCQUNFLDhEQUFDaEMsZ0RBQUdBOzRCQUFrQmtDLElBQUk7NEJBQUdDLElBQUk7NEJBQUdDLElBQUk7NEJBQUdDLElBQUk7c0NBQ2pELDRFQUFDOUIsa0RBQUlBO2dDQUNMK0IsTUFBTUw7Z0NBQ01QLFdBQVU7MENBQ1QsNEVBQUNhO29DQUFJQyxPQUFNOzhDQUN0Qiw0RUFBQ0Q7d0NBQUlDLE9BQU07OzBEQUNULDhEQUFDRDtnREFBSUMsT0FBTTswREFDVCw0RUFBQ0M7b0RBQUlDLEtBQUtaLElBQUksQ0FBQyxtQkFBbUI7b0RBQUVVLE9BQU07b0RBQXdCRyxLQUFJOzs7Ozs7Ozs7OzswREFFeEUsOERBQUNKO2dEQUFJQyxPQUFNOzBEQUNULDRFQUFDRDtvREFBSUMsT0FBTTs7c0VBQ1QsOERBQUNJOzREQUFHSixPQUFNO3NFQUFjVixJQUFJLENBQUMsUUFBUTs7Ozs7O3NFQUNyQyw4REFBQ2U7NERBQUVMLE9BQU07Ozs7OztzRUFDVCw4REFBQ0s7NERBQUVMLE9BQU07c0VBQVksNEVBQUNNO2dFQUFNTixPQUFNOzBFQUFzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MkJBYnBEVixJQUFJLENBQUMsS0FBSzs7Ozs7b0JBc0J0Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLQTtHQXJFU3JCO0tBQUFBO0FBdUVULCtEQUFlQSxRQUFRQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3V0aWxzL0ZldGNoQWNjb3VudC5qcz8xMDliIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Q29udGFpbmVyLFJvdywgQ29sLEltYWdlLEJyZWFkY3J1bWIsQ2FyZCwgQnV0dG9ufSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBjb25maWdEYXRhIGZyb20gXCIuLi9jb25maWcuanNvblwiO1xuXG5mdW5jdGlvbiBJbnNpZ2h0cyh7dGFnc30pIHtcbiAgY29uc3QgW2FsbEluc2lnaHRzLCBzZXRJbnNpZ2h0c10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtoZWFkaW5nLCBzZXRIZWFkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGNvbnN0IGZldGNoSW5zaWdodHMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGxldCB1cmwgPSBcIlwiO1xuICAgICAgICB1cmwgPSBgJHtjb25maWdEYXRhLlNFUlZFUl9VUkx9YWxsLWluc2lnaHRzP3RhZz0ke3RhZ3N9YDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG4gICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhLmxlbmd0aCk7XG4gICAgICAgICAgc2V0SW5zaWdodHMoZGF0YSk7XG4gICAgICAgICAgaWYoZGF0YS5sZW5ndGggPiAxKXtcbiAgICAgICAgICAgIHNldEhlYWRpbmcodHJ1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGZldGNoSW5zaWdodHMoKTtcbiAgICAgIH0sW10pO1xuXG5cbiAgcmV0dXJuIChcbjxDb250YWluZXIgY2xhc3NOYW1lPVwibWItNSBtdC01IHRleHQtY2VudGVyXCIgaWQ9XCJpbnNpZ2h0c1wiPlxue2hlYWRpbmcgJiYgPGgyPk91ciBMYXRlc3QgSW5zaWdodHM8L2gyPn1cbjxDb250YWluZXIgY2xhc3NOYW1lPVwibXQtNVwiPlxuICA8Um93IGNsYXNzTmFtZT1cImNlbnRlclwiPlxuICB7XG5hbGxJbnNpZ2h0cy5tYXAoKHBvc3QpID0+IHtcbiAgLy9jb25zb2xlLmxvZyhwb3N0KTtcbiAgY29uc3QgVHlwZSA9ICBwb3N0Wyd0eXBlJ107XG4gIGNvbnN0IFBzbHVnID0gIHBvc3RbJ3NsdWcnXTtcbiAgbGV0IExpbmtzO1xuICBpZihUeXBlID09J3BhZ2UnKXtcbiAgICBMaW5rcyA9IFBzbHVnO1xuICB9XG4gIGVsc2V7XG4gICAgTGlua3MgPSBUeXBlICsgJy8nKyBQc2x1ZztcbiAgfVxucmV0dXJuIChcbiAgPENvbCBrZXk9e3Bvc3RbJ2lkJ119IHNtPXs2fSBsZz17Nn0geHM9ezZ9IG1kPXs2fT5cbjxMaW5rIFxuaHJlZj17TGlua3N9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwci10ZXh0IHRleHQtZGVjb3JhdGlvbi1ub25lXCI+XG4gICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQgbWItM1wiID5cbiAgPGRpdiBjbGFzcz1cInJvdyBnLTBcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTRcIj5cbiAgICAgIDxpbWcgc3JjPXtwb3N0WydmZWF0dXJlZF9pbWdfc3JjJ119IGNsYXNzPVwiaW1nLWZsdWlkIHctMTAwIGgtMTAwXCIgYWx0PVwiLi4uXCIvPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtOFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxuICAgICAgICA8aDUgY2xhc3M9XCJjYXJkLXRpdGxlXCI+e3Bvc3RbJ3RpdGxlJ119PC9oNT5cbiAgICAgICAgPHAgY2xhc3M9XCJjYXJkLXRleHRcIi8+XG4gICAgICAgIDxwIGNsYXNzPVwiY2FyZC10ZXh0XCI+PHNtYWxsIGNsYXNzPVwidGV4dC1ib2R5LXNlY29uZGFyeVwiPkxhc3QgdXBkYXRlZCAzIG1pbnMgYWdvPC9zbWFsbD48L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cblxuPC9MaW5rPiBcbiAgICA8L0NvbD5cbiAgKVxufSl9XG48L1Jvdz5cbjwvQ29udGFpbmVyPlxuPC9Db250YWluZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5zaWdodHNcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbnRhaW5lciIsIlJvdyIsIkNvbCIsIkltYWdlIiwiQnJlYWRjcnVtYiIsIkNhcmQiLCJCdXR0b24iLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkxpbmsiLCJjb25maWdEYXRhIiwiSW5zaWdodHMiLCJ0YWdzIiwiYWxsSW5zaWdodHMiLCJzZXRJbnNpZ2h0cyIsImhlYWRpbmciLCJzZXRIZWFkaW5nIiwiZmV0Y2hJbnNpZ2h0cyIsInVybCIsIlNFUlZFUl9VUkwiLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwiZXJyb3IiLCJjbGFzc05hbWUiLCJpZCIsImgyIiwibWFwIiwicG9zdCIsIlR5cGUiLCJQc2x1ZyIsIkxpbmtzIiwic20iLCJsZyIsInhzIiwibWQiLCJocmVmIiwiZGl2IiwiY2xhc3MiLCJpbWciLCJzcmMiLCJhbHQiLCJoNSIsInAiLCJzbWFsbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/FetchAccount.js\n"));

/***/ })

});