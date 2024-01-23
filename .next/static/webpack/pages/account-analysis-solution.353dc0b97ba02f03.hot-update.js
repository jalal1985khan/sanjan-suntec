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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config.json */ \"./config.json\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst SinglePost = (param)=>{\n    let { tags  } = param;\n    _s();\n    const [post, setPost] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [featuredImage, setFeaturedImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchPost = async ()=>{\n            try {\n                const postResponse = await fetch(\"\".concat(_config_json__WEBPACK_IMPORTED_MODULE_3__.SERVER_URL, \"case-studies/\").concat(tags));\n                const postData = await postResponse.json();\n                if (postResponse.ok) {\n                    setPost(postData);\n                    // Fetch featured image information\n                    const featuredImageId = postData.featured_media;\n                    if (featuredImageId) {\n                        const featuredImageResponse = await fetch(\"\".concat(_config_json__WEBPACK_IMPORTED_MODULE_3__.SERVER_URL, \"media/\").concat(featuredImageId));\n                        const featuredImageData = await featuredImageResponse.json();\n                        if (featuredImageResponse.ok) {\n                            setFeaturedImage(featuredImageData);\n                        } else {\n                            console.error(\"Failed to fetch featured image. Status: \".concat(featuredImageResponse.status));\n                        }\n                    }\n                } else {\n                    console.error(\"Failed to fetch post. Status: \".concat(postResponse.status));\n                }\n            } catch (error) {\n                console.error(\"Error fetching post:\", error);\n            } finally{\n                setLoading(false);\n            }\n        };\n        fetchPost();\n    }, []);\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchCaseStudy.js\",\n            lineNumber: 47,\n            columnNumber: 12\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-center mb-3 mt-4\",\n                children: \"Point of View\"\n            }, void 0, false, {\n                fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchCaseStudy.js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Container, {\n                className: \"wbg-blue p-2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    class: \"card mb-3 border-0\",\n                    style: {\n                        background: \"#D6F4F6\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"row g-0\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                class: \"col-md-4 d-flex justify-content-center align-items-center\",\n                                children: featuredImage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: featuredImage.source_url,\n                                    alt: featuredImage.alt_text,\n                                    style: {\n                                        maxWidth: \"100%\",\n                                        height: \"auto\"\n                                    },\n                                    class: \"img-fluid \",\n                                    width: 420,\n                                    height: 220\n                                }, void 0, false, {\n                                    fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchCaseStudy.js\",\n                                    lineNumber: 58,\n                                    columnNumber: 9\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchCaseStudy.js\",\n                                lineNumber: 56,\n                                columnNumber: 3\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                class: \"col-md-8 text-start d-flex align-items-center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    class: \"card-body\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                            class: \"card-title text-start\",\n                                            dangerouslySetInnerHTML: {\n                                                __html: post.title.rendered\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchCaseStudy.js\",\n                                            lineNumber: 69,\n                                            columnNumber: 9\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            class: \"card-text text-start\",\n                                            dangerouslySetInnerHTML: {\n                                                __html: post.excerpt.rendered\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchCaseStudy.js\",\n                                            lineNumber: 70,\n                                            columnNumber: 25\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            href: \"ebboks/\".concat(post.slug),\n                                            className: \"pr-text text-decoration-none expand-btn text-white px-5 rounded-3\",\n                                            children: \"Download Now\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchCaseStudy.js\",\n                                            lineNumber: 71,\n                                            columnNumber: 23\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchCaseStudy.js\",\n                                    lineNumber: 68,\n                                    columnNumber: 7\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchCaseStudy.js\",\n                                lineNumber: 67,\n                                columnNumber: 5\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchCaseStudy.js\",\n                        lineNumber: 55,\n                        columnNumber: 3\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchCaseStudy.js\",\n                    lineNumber: 54,\n                    columnNumber: 7\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchCaseStudy.js\",\n                lineNumber: 53,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(SinglePost, \"lIvlvx3+wWMNoWF4q5yVatb/GkA=\");\n_c = SinglePost;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SinglePost);\nvar _c;\n$RefreshReg$(_c, \"SinglePost\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvRmV0Y2hDYXNlU3R1ZHkuanM/YTdkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Q29udGFpbmVyLFJvdywgQ29sLEltYWdlLEJyZWFkY3J1bWIsQ2FyZCwgQnV0dG9ufSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBjb25maWdEYXRhIGZyb20gXCIuLi9jb25maWcuanNvblwiO1xuXG5cbmNvbnN0IFNpbmdsZVBvc3QgPSAoe3RhZ3N9KSA9PiB7XG4gIGNvbnN0IFtwb3N0LCBzZXRQb3N0XSA9IHVzZVN0YXRlKHt9KTtcbiAgY29uc3QgW2ZlYXR1cmVkSW1hZ2UsIHNldEZlYXR1cmVkSW1hZ2VdID0gdXNlU3RhdGUoe30pO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoUG9zdCA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHBvc3RSZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2NvbmZpZ0RhdGEuU0VSVkVSX1VSTH1jYXNlLXN0dWRpZXMvJHt0YWdzfWApO1xuICAgICAgICBjb25zdCBwb3N0RGF0YSA9IGF3YWl0IHBvc3RSZXNwb25zZS5qc29uKCk7XG5cbiAgICAgICAgaWYgKHBvc3RSZXNwb25zZS5vaykge1xuICAgICAgICAgIHNldFBvc3QocG9zdERhdGEpO1xuXG4gICAgICAgICAgLy8gRmV0Y2ggZmVhdHVyZWQgaW1hZ2UgaW5mb3JtYXRpb25cbiAgICAgICAgICBjb25zdCBmZWF0dXJlZEltYWdlSWQgPSBwb3N0RGF0YS5mZWF0dXJlZF9tZWRpYTtcbiAgICAgICAgICBpZiAoZmVhdHVyZWRJbWFnZUlkKSB7XG4gICAgICAgICAgICBjb25zdCBmZWF0dXJlZEltYWdlUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtjb25maWdEYXRhLlNFUlZFUl9VUkx9bWVkaWEvJHtmZWF0dXJlZEltYWdlSWR9YCk7XG4gICAgICAgICAgICBjb25zdCBmZWF0dXJlZEltYWdlRGF0YSA9IGF3YWl0IGZlYXR1cmVkSW1hZ2VSZXNwb25zZS5qc29uKCk7XG5cbiAgICAgICAgICAgIGlmIChmZWF0dXJlZEltYWdlUmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgc2V0RmVhdHVyZWRJbWFnZShmZWF0dXJlZEltYWdlRGF0YSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBGYWlsZWQgdG8gZmV0Y2ggZmVhdHVyZWQgaW1hZ2UuIFN0YXR1czogJHtmZWF0dXJlZEltYWdlUmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBGYWlsZWQgdG8gZmV0Y2ggcG9zdC4gU3RhdHVzOiAke3Bvc3RSZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHBvc3Q6JywgZXJyb3IpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZldGNoUG9zdCgpO1xuICB9LCBbXSk7XG5cbiAgaWYgKGxvYWRpbmcpIHtcbiAgICByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aDIgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlciBtYi0zIG10LTQnPlBvaW50IG9mIFZpZXc8L2gyPlxuICAgIDxDb250YWluZXIgY2xhc3NOYW1lPSd3YmctYmx1ZSBwLTInPlxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQgbWItMyBib3JkZXItMFwiIHN0eWxlPXt7YmFja2dyb3VuZDonI0Q2RjRGNid9fT5cbiAgPGRpdiBjbGFzcz1cInJvdyBnLTBcIj5cbiAgPGRpdiBjbGFzcz1cImNvbC1tZC00IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIHtmZWF0dXJlZEltYWdlICYmIChcbiAgICAgICAgPGltZ1xuICAgICAgICAgIHNyYz17ZmVhdHVyZWRJbWFnZS5zb3VyY2VfdXJsfVxuICAgICAgICAgIGFsdD17ZmVhdHVyZWRJbWFnZS5hbHRfdGV4dH1cbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXhXaWR0aDogJzEwMCUnLCBoZWlnaHQ6ICdhdXRvJyB9fVxuICAgICAgICAgICAgICAgIGNsYXNzPVwiaW1nLWZsdWlkIFwiIHdpZHRoPXs0MjB9IGhlaWdodD17MjIwfVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNvbC1tZC04IHRleHQtc3RhcnQgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxuICAgICAgICA8aDUgY2xhc3M9XCJjYXJkLXRpdGxlIHRleHQtc3RhcnRcIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDpwb3N0LnRpdGxlLnJlbmRlcmVkfX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkLXRleHQgdGV4dC1zdGFydFwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcG9zdC5leGNlcnB0LnJlbmRlcmVkIH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YGViYm9rcy8ke3Bvc3Quc2x1Z31gfSBjbGFzc05hbWU9XCJwci10ZXh0IHRleHQtZGVjb3JhdGlvbi1ub25lIGV4cGFuZC1idG4gdGV4dC13aGl0ZSBweC01IHJvdW5kZWQtM1wiPkRvd25sb2FkIE5vdzwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgXG4gIDwvZGl2PlxuPC9kaXY+XG48L0NvbnRhaW5lcj5cbjwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2luZ2xlUG9zdDsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNvbnRhaW5lciIsIlJvdyIsIkNvbCIsIkltYWdlIiwiQnJlYWRjcnVtYiIsIkNhcmQiLCJCdXR0b24iLCJMaW5rIiwiY29uZmlnRGF0YSIsIlNpbmdsZVBvc3QiLCJ0YWdzIiwicG9zdCIsInNldFBvc3QiLCJmZWF0dXJlZEltYWdlIiwic2V0RmVhdHVyZWRJbWFnZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZmV0Y2hQb3N0IiwicG9zdFJlc3BvbnNlIiwiZmV0Y2giLCJTRVJWRVJfVVJMIiwicG9zdERhdGEiLCJqc29uIiwib2siLCJmZWF0dXJlZEltYWdlSWQiLCJmZWF0dXJlZF9tZWRpYSIsImZlYXR1cmVkSW1hZ2VSZXNwb25zZSIsImZlYXR1cmVkSW1hZ2VEYXRhIiwiY29uc29sZSIsImVycm9yIiwic3RhdHVzIiwicCIsImgyIiwiY2xhc3NOYW1lIiwiZGl2IiwiY2xhc3MiLCJzdHlsZSIsImJhY2tncm91bmQiLCJpbWciLCJzcmMiLCJzb3VyY2VfdXJsIiwiYWx0IiwiYWx0X3RleHQiLCJtYXhXaWR0aCIsImhlaWdodCIsIndpZHRoIiwiaDUiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsInRpdGxlIiwicmVuZGVyZWQiLCJleGNlcnB0IiwiaHJlZiIsInNsdWciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/FetchCaseStudy.js\n"));

/***/ })

});