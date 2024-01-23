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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config.json */ \"./config.json\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Insights(param) {\n    let { tags  } = param;\n    _s();\n    const [allInsights, setInsights] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [heading, setHeading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [article, setArticle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [ebooks, setEbooks] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [pov, setPov] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [podcasts, setPodcasts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const fetchInsights = async ()=>{\n        let url = \"\";\n        url = \"\".concat(_config_json__WEBPACK_IMPORTED_MODULE_3__.SERVER_URL, \"all-insights?tag=\").concat(tags);\n        try {\n            const response = await fetch(url);\n            const data = await response.json();\n            console.log(data.length);\n            setInsights(data);\n            if (data.length > 1) {\n                setHeading(true);\n            }\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchInsights();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Container, {\n        className: \"mb-5 mt-5 text-center\",\n        id: \"insights\",\n        children: [\n            heading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Our Latest Insights\"\n            }, void 0, false, {\n                fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchAccount.js\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Container, {\n                className: \"mt-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Row, {\n                    className: \"center\",\n                    children: allInsights.map((post)=>{\n                        //console.log(post);\n                        const Type = post[\"type\"];\n                        const Pslug = post[\"slug\"];\n                        let Links;\n                        if (Type == \"page\") {\n                            Links = Pslug;\n                        } else {\n                            Links = Type + \"/\" + Pslug;\n                        }\n                        if (Type === \"articles\") {\n                            setArticle(true);\n                        }\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {\n                            sm: 6,\n                            lg: 6,\n                            xs: 6,\n                            md: 6,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                class: \"card mb-3 border-0\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    class: \"row g-0\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            class: \"col-md-4 d-flex justify-content-center align-items-center\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Image, {\n                                                src: post[\"featured_img_src\"],\n                                                class: \"img-fluid \",\n                                                alt: \"...\",\n                                                width: 220,\n                                                height: 220\n                                            }, void 0, false, {\n                                                fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchAccount.js\",\n                                                lineNumber: 60,\n                                                columnNumber: 21\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchAccount.js\",\n                                            lineNumber: 59,\n                                            columnNumber: 5\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            class: \"col-md-8 text-start\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    class: \"card-body\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                                            class: \"card-title text-start\",\n                                                            dangerouslySetInnerHTML: {\n                                                                __html: post[\"title\"]\n                                                            }\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchAccount.js\",\n                                                            lineNumber: 64,\n                                                            columnNumber: 9\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                            class: \"card-text text-start\",\n                                                            dangerouslySetInnerHTML: {\n                                                                __html: post[\"excerpt\"]\n                                                            }\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchAccount.js\",\n                                                            lineNumber: 65,\n                                                            columnNumber: 25\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                            href: Links,\n                                                            className: \"pr-text text-decoration-none expand-btn text-white px-5 rounded-3\",\n                                                            children: \"Read More\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchAccount.js\",\n                                                            lineNumber: 66,\n                                                            columnNumber: 25\n                                                        }, this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchAccount.js\",\n                                                    lineNumber: 63,\n                                                    columnNumber: 7\n                                                }, this),\n                                                Type\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchAccount.js\",\n                                            lineNumber: 62,\n                                            columnNumber: 5\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchAccount.js\",\n                                    lineNumber: 58,\n                                    columnNumber: 3\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchAccount.js\",\n                                lineNumber: 57,\n                                columnNumber: 1\n                            }, this)\n                        }, post[\"id\"], false, {\n                            fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchAccount.js\",\n                            lineNumber: 56,\n                            columnNumber: 3\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchAccount.js\",\n                    lineNumber: 39,\n                    columnNumber: 3\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchAccount.js\",\n                lineNumber: 38,\n                columnNumber: 1\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchAccount.js\",\n        lineNumber: 36,\n        columnNumber: 1\n    }, this);\n}\n_s(Insights, \"kCspNxl4VbhU/hLjYYBt8AfCtiM=\");\n_c = Insights;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Insights);\nvar _c;\n$RefreshReg$(_c, \"Insights\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RCxJQUFJLENBQUMsS0FBSzs7Ozs7b0JBbUJ0Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLQTtHQXpFUzdCO0tBQUFBO0FBMkVULCtEQUFlQSxRQUFRQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3V0aWxzL0ZldGNoQWNjb3VudC5qcz8xMDliIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Q29udGFpbmVyLFJvdywgQ29sLEltYWdlLEJyZWFkY3J1bWIsQ2FyZCwgQnV0dG9ufSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBjb25maWdEYXRhIGZyb20gXCIuLi9jb25maWcuanNvblwiO1xuXG5mdW5jdGlvbiBJbnNpZ2h0cyh7dGFnc30pIHtcbiAgY29uc3QgW2FsbEluc2lnaHRzLCBzZXRJbnNpZ2h0c10gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgW2hlYWRpbmcsIHNldEhlYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFthcnRpY2xlLCBzZXRBcnRpY2xlXSA9IHVzZVN0YXRlKCk7XG4gICAgY29uc3QgW2Vib29rcywgc2V0RWJvb2tzXSA9IHVzZVN0YXRlKCk7XG4gICAgY29uc3QgW3Bvdiwgc2V0UG92XSA9IHVzZVN0YXRlKCk7XG4gICAgY29uc3QgW3BvZGNhc3RzLCBzZXRQb2RjYXN0c10gPSB1c2VTdGF0ZSgpO1xuXG4gICAgY29uc3QgZmV0Y2hJbnNpZ2h0cyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgbGV0IHVybCA9IFwiXCI7XG4gICAgICAgIHVybCA9IGAke2NvbmZpZ0RhdGEuU0VSVkVSX1VSTH1hbGwtaW5zaWdodHM/dGFnPSR7dGFnc31gO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEubGVuZ3RoKTtcbiAgICAgICAgICBzZXRJbnNpZ2h0cyhkYXRhKTtcbiAgICAgICAgICBpZihkYXRhLmxlbmd0aCA+IDEpe1xuICAgICAgICAgICAgc2V0SGVhZGluZyh0cnVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZmV0Y2hJbnNpZ2h0cygpO1xuICAgICAgfSxbXSk7XG5cblxuICByZXR1cm4gKFxuPENvbnRhaW5lciBjbGFzc05hbWU9XCJtYi01IG10LTUgdGV4dC1jZW50ZXJcIiBpZD1cImluc2lnaHRzXCI+XG57aGVhZGluZyAmJiA8aDI+T3VyIExhdGVzdCBJbnNpZ2h0czwvaDI+fVxuPENvbnRhaW5lciBjbGFzc05hbWU9XCJtdC01XCI+XG4gIDxSb3cgY2xhc3NOYW1lPVwiY2VudGVyXCI+XG4gIHtcbmFsbEluc2lnaHRzLm1hcCgocG9zdCkgPT4ge1xuICAvL2NvbnNvbGUubG9nKHBvc3QpO1xuICBjb25zdCBUeXBlID0gIHBvc3RbJ3R5cGUnXTtcbiAgY29uc3QgUHNsdWcgPSAgcG9zdFsnc2x1ZyddO1xuICBsZXQgTGlua3M7XG4gIGlmKFR5cGUgPT0ncGFnZScpe1xuICAgIExpbmtzID0gUHNsdWc7XG4gIH1cbiAgZWxzZXtcbiAgICBMaW5rcyA9IFR5cGUgKyAnLycrIFBzbHVnO1xuICB9XG4gICAgaWYgKFR5cGUgPT09ICdhcnRpY2xlcycpIHtcbiAgICAgICAgc2V0QXJ0aWNsZSh0cnVlKSAgIFxuICAgIH1cbnJldHVybiAoXG4gIDxDb2wga2V5PXtwb3N0WydpZCddfSBzbT17Nn0gbGc9ezZ9IHhzPXs2fSBtZD17Nn0+XG48ZGl2IGNsYXNzPVwiY2FyZCBtYi0zIGJvcmRlci0wXCIgPlxuICA8ZGl2IGNsYXNzPVwicm93IGctMFwiPlxuICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNCBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17cG9zdFsnZmVhdHVyZWRfaW1nX3NyYyddfSBjbGFzcz1cImltZy1mbHVpZCBcIiBhbHQ9XCIuLi5cIiB3aWR0aD17MjIwfSBoZWlnaHQ9ezIyMH0gLz5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTggdGV4dC1zdGFydFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxuICAgICAgICA8aDUgY2xhc3M9XCJjYXJkLXRpdGxlIHRleHQtc3RhcnRcIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDpwb3N0Wyd0aXRsZSddfX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkLXRleHQgdGV4dC1zdGFydFwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcG9zdFsnZXhjZXJwdCddIH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtMaW5rc30gY2xhc3NOYW1lPVwicHItdGV4dCB0ZXh0LWRlY29yYXRpb24tbm9uZSBleHBhbmQtYnRuIHRleHQtd2hpdGUgcHgtNSByb3VuZGVkLTNcIj5SZWFkIE1vcmU8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB7VHlwZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PlxuICAgIDwvQ29sPlxuICApXG59KX1cbjwvUm93PlxuPC9Db250YWluZXI+XG48L0NvbnRhaW5lcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnNpZ2h0c1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29udGFpbmVyIiwiUm93IiwiQ29sIiwiSW1hZ2UiLCJCcmVhZGNydW1iIiwiQ2FyZCIsIkJ1dHRvbiIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTGluayIsImNvbmZpZ0RhdGEiLCJJbnNpZ2h0cyIsInRhZ3MiLCJhbGxJbnNpZ2h0cyIsInNldEluc2lnaHRzIiwiaGVhZGluZyIsInNldEhlYWRpbmciLCJhcnRpY2xlIiwic2V0QXJ0aWNsZSIsImVib29rcyIsInNldEVib29rcyIsInBvdiIsInNldFBvdiIsInBvZGNhc3RzIiwic2V0UG9kY2FzdHMiLCJmZXRjaEluc2lnaHRzIiwidXJsIiwiU0VSVkVSX1VSTCIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJlcnJvciIsImNsYXNzTmFtZSIsImlkIiwiaDIiLCJtYXAiLCJwb3N0IiwiVHlwZSIsIlBzbHVnIiwiTGlua3MiLCJzbSIsImxnIiwieHMiLCJtZCIsImRpdiIsImNsYXNzIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJoNSIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwicCIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/FetchAccount.js\n"));

/***/ })

});