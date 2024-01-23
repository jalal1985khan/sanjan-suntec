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

/***/ "./utils/FetchCaseStudy.js":
/*!*********************************!*\
  !*** ./utils/FetchCaseStudy.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config.json */ \"./config.json\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst SinglePost = (param)=>{\n    let { tags  } = param;\n    _s();\n    const [post, setPost] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [featuredImage, setFeaturedImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchPost = async ()=>{\n            try {\n                const postResponse = await fetch(\"\".concat(_config_json__WEBPACK_IMPORTED_MODULE_3__.SERVER_URL, \"case-studies/\").concat(tags));\n                const postData = await postResponse.json();\n                if (postResponse.ok) {\n                    setPost(postData);\n                    // Fetch featured image information\n                    const featuredImageId = postData.featured_media;\n                    if (featuredImageId) {\n                        const featuredImageResponse = await fetch(\"\".concat(_config_json__WEBPACK_IMPORTED_MODULE_3__.SERVER_URL, \"media/\").concat(featuredImageId));\n                        const featuredImageData = await featuredImageResponse.json();\n                        if (featuredImageResponse.ok) {\n                            setFeaturedImage(featuredImageData);\n                        } else {\n                            console.error(\"Failed to fetch featured image. Status: \".concat(featuredImageResponse.status));\n                        }\n                    }\n                } else {\n                    console.error(\"Failed to fetch post. Status: \".concat(postResponse.status));\n                }\n            } catch (error) {\n                console.error(\"Error fetching post:\", error);\n            } finally{\n                setLoading(false);\n            }\n        };\n        fetchPost();\n    }, []);\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchCaseStudy.js\",\n            lineNumber: 47,\n            columnNumber: 12\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-center mb-3 mt-4\",\n                children: \"Case Study\"\n            }, void 0, false, {\n                fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchCaseStudy.js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Container, {\n                className: \"wbg-blue p-2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    class: \"card mb-3 border-0\",\n                    style: {\n                        background: \"#D6F4F6\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"row g-0\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                class: \"col-md-8 text-start d-flex align-items-center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    class: \"card-body\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                            class: \"card-title text-start\",\n                                            dangerouslySetInnerHTML: {\n                                                __html: post.title.rendered\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchCaseStudy.js\",\n                                            lineNumber: 58,\n                                            columnNumber: 9\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            class: \"card-text text-start\",\n                                            dangerouslySetInnerHTML: {\n                                                __html: post.excerpt.rendered\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchCaseStudy.js\",\n                                            lineNumber: 59,\n                                            columnNumber: 25\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            href: \"case-studies/\".concat(post.slug),\n                                            className: \"pr-text text-decoration-none expand-btn text-white px-5 rounded-3\",\n                                            children: \"Download Now\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchCaseStudy.js\",\n                                            lineNumber: 60,\n                                            columnNumber: 23\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchCaseStudy.js\",\n                                    lineNumber: 57,\n                                    columnNumber: 7\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchCaseStudy.js\",\n                                lineNumber: 56,\n                                columnNumber: 5\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                class: \"col-md-4 d-flex justify-content-center align-items-center\",\n                                children: featuredImage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: featuredImage.source_url,\n                                    alt: featuredImage.alt_text,\n                                    style: {\n                                        maxWidth: \"100%\",\n                                        height: \"auto\"\n                                    },\n                                    class: \"img-fluid \",\n                                    width: 420,\n                                    height: 220\n                                }, void 0, false, {\n                                    fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchCaseStudy.js\",\n                                    lineNumber: 65,\n                                    columnNumber: 9\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchCaseStudy.js\",\n                                lineNumber: 63,\n                                columnNumber: 23\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchCaseStudy.js\",\n                        lineNumber: 55,\n                        columnNumber: 3\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchCaseStudy.js\",\n                    lineNumber: 54,\n                    columnNumber: 7\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchCaseStudy.js\",\n                lineNumber: 53,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(SinglePost, \"lIvlvx3+wWMNoWF4q5yVatb/GkA=\");\n_c = SinglePost;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SinglePost);\nvar _c;\n$RefreshReg$(_c, \"SinglePost\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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InNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi91dGlscy9GZXRjaENhc2VTdHVkeS5qcz9hN2Q2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtDb250YWluZXIsUm93LCBDb2wsSW1hZ2UsQnJlYWRjcnVtYixDYXJkLCBCdXR0b259IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IGNvbmZpZ0RhdGEgZnJvbSBcIi4uL2NvbmZpZy5qc29uXCI7XG5cblxuY29uc3QgU2luZ2xlUG9zdCA9ICh7dGFnc30pID0+IHtcbiAgY29uc3QgW3Bvc3QsIHNldFBvc3RdID0gdXNlU3RhdGUoe30pO1xuICBjb25zdCBbZmVhdHVyZWRJbWFnZSwgc2V0RmVhdHVyZWRJbWFnZV0gPSB1c2VTdGF0ZSh7fSk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hQb3N0ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcG9zdFJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7Y29uZmlnRGF0YS5TRVJWRVJfVVJMfWNhc2Utc3R1ZGllcy8ke3RhZ3N9YCk7XG4gICAgICAgIGNvbnN0IHBvc3REYXRhID0gYXdhaXQgcG9zdFJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgICBpZiAocG9zdFJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgc2V0UG9zdChwb3N0RGF0YSk7XG5cbiAgICAgICAgICAvLyBGZXRjaCBmZWF0dXJlZCBpbWFnZSBpbmZvcm1hdGlvblxuICAgICAgICAgIGNvbnN0IGZlYXR1cmVkSW1hZ2VJZCA9IHBvc3REYXRhLmZlYXR1cmVkX21lZGlhO1xuICAgICAgICAgIGlmIChmZWF0dXJlZEltYWdlSWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGZlYXR1cmVkSW1hZ2VSZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2NvbmZpZ0RhdGEuU0VSVkVSX1VSTH1tZWRpYS8ke2ZlYXR1cmVkSW1hZ2VJZH1gKTtcbiAgICAgICAgICAgIGNvbnN0IGZlYXR1cmVkSW1hZ2VEYXRhID0gYXdhaXQgZmVhdHVyZWRJbWFnZVJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgICAgICAgaWYgKGZlYXR1cmVkSW1hZ2VSZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICBzZXRGZWF0dXJlZEltYWdlKGZlYXR1cmVkSW1hZ2VEYXRhKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEZhaWxlZCB0byBmZXRjaCBmZWF0dXJlZCBpbWFnZS4gU3RhdHVzOiAke2ZlYXR1cmVkSW1hZ2VSZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEZhaWxlZCB0byBmZXRjaCBwb3N0LiBTdGF0dXM6ICR7cG9zdFJlc3BvbnNlLnN0YXR1c31gKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgcG9zdDonLCBlcnJvcik7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZmV0Y2hQb3N0KCk7XG4gIH0sIFtdKTtcblxuICBpZiAobG9hZGluZykge1xuICAgIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxoMiBjbGFzc05hbWU9J3RleHQtY2VudGVyIG1iLTMgbXQtNCc+Q2FzZSBTdHVkeTwvaDI+XG4gICAgPENvbnRhaW5lciBjbGFzc05hbWU9J3diZy1ibHVlIHAtMic+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZCBtYi0zIGJvcmRlci0wXCIgc3R5bGU9e3tiYWNrZ3JvdW5kOicjRDZGNEY2J319PlxuICA8ZGl2IGNsYXNzPVwicm93IGctMFwiPlxuICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtOCB0ZXh0LXN0YXJ0IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgPGg1IGNsYXNzPVwiY2FyZC10aXRsZSB0ZXh0LXN0YXJ0XCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6cG9zdC50aXRsZS5yZW5kZXJlZH19Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiY2FyZC10ZXh0IHRleHQtc3RhcnRcIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHBvc3QuZXhjZXJwdC5yZW5kZXJlZCB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2BjYXNlLXN0dWRpZXMvJHtwb3N0LnNsdWd9YH0gY2xhc3NOYW1lPVwicHItdGV4dCB0ZXh0LWRlY29yYXRpb24tbm9uZSBleHBhbmQtYnRuIHRleHQtd2hpdGUgcHgtNSByb3VuZGVkLTNcIj5Eb3dubG9hZCBOb3c8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNCBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICB7ZmVhdHVyZWRJbWFnZSAmJiAoXG4gICAgICAgIDxpbWdcbiAgICAgICAgICBzcmM9e2ZlYXR1cmVkSW1hZ2Uuc291cmNlX3VybH1cbiAgICAgICAgICBhbHQ9e2ZlYXR1cmVkSW1hZ2UuYWx0X3RleHR9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWF4V2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnYXV0bycgfX1cbiAgICAgICAgICAgICAgICBjbGFzcz1cImltZy1mbHVpZCBcIiB3aWR0aD17NDIwfSBoZWlnaHQ9ezIyMH1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgIDwvZGl2PlxuICAgXG4gIDwvZGl2PlxuPC9kaXY+XG48L0NvbnRhaW5lcj5cbjwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2luZ2xlUG9zdDsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNvbnRhaW5lciIsIlJvdyIsIkNvbCIsIkltYWdlIiwiQnJlYWRjcnVtYiIsIkNhcmQiLCJCdXR0b24iLCJMaW5rIiwiY29uZmlnRGF0YSIsIlNpbmdsZVBvc3QiLCJ0YWdzIiwicG9zdCIsInNldFBvc3QiLCJmZWF0dXJlZEltYWdlIiwic2V0RmVhdHVyZWRJbWFnZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZmV0Y2hQb3N0IiwicG9zdFJlc3BvbnNlIiwiZmV0Y2giLCJTRVJWRVJfVVJMIiwicG9zdERhdGEiLCJqc29uIiwib2siLCJmZWF0dXJlZEltYWdlSWQiLCJmZWF0dXJlZF9tZWRpYSIsImZlYXR1cmVkSW1hZ2VSZXNwb25zZSIsImZlYXR1cmVkSW1hZ2VEYXRhIiwiY29uc29sZSIsImVycm9yIiwic3RhdHVzIiwicCIsImgyIiwiY2xhc3NOYW1lIiwiZGl2IiwiY2xhc3MiLCJzdHlsZSIsImJhY2tncm91bmQiLCJoNSIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwidGl0bGUiLCJyZW5kZXJlZCIsImV4Y2VycHQiLCJocmVmIiwic2x1ZyIsImltZyIsInNyYyIsInNvdXJjZV91cmwiLCJhbHQiLCJhbHRfdGV4dCIsIm1heFdpZHRoIiwiaGVpZ2h0Iiwid2lkdGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/FetchCaseStudy.js\n"));

/***/ })

});