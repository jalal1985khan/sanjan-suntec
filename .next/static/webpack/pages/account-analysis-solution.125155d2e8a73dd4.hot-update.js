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

/***/ "./utils/FetchVideos.js":
/*!******************************!*\
  !*** ./utils/FetchVideos.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config.json */ \"./config.json\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst SinglePost = (param)=>{\n    let { tags  } = param;\n    _s();\n    const [post, setPost] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [featuredImage, setFeaturedImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchPost = async ()=>{\n            try {\n                const postResponse = await fetch(\"\".concat(_config_json__WEBPACK_IMPORTED_MODULE_3__.SERVER_URL, \"ytvideos/\").concat(tags));\n                const postData = await postResponse.json();\n                console.log(postData);\n                if (postResponse.ok) {\n                    setPost(postData);\n                    // Fetch featured image information\n                    const featuredImageId = postData.featured_media;\n                    if (featuredImageId) {\n                        const featuredImageResponse = await fetch(\"\".concat(_config_json__WEBPACK_IMPORTED_MODULE_3__.SERVER_URL, \"media/\").concat(featuredImageId));\n                        const featuredImageData = await featuredImageResponse.json();\n                        if (featuredImageResponse.ok) {\n                            setFeaturedImage(featuredImageData);\n                        } else {\n                            console.error(\"Failed to fetch featured image. Status: \".concat(featuredImageResponse.status));\n                        }\n                    }\n                } else {\n                    console.error(\"Failed to fetch post. Status: \".concat(postResponse.status));\n                }\n            } catch (error) {\n                console.error(\"Error fetching post:\", error);\n            } finally{\n                setLoading(false);\n            }\n        };\n        fetchPost();\n    }, []);\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchVideos.js\",\n            lineNumber: 47,\n            columnNumber: 12\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-center mb-3 mt-4\",\n                children: \"Videos\"\n            }, void 0, false, {\n                fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchVideos.js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Container, {\n                className: \"wbg-pink p-2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    class: \"card mb-3 border-0\",\n                    style: {\n                        background: \"#e9c7e033\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"row g-0\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                class: \"col-md-4 d-flex justify-content-center align-items-center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                                    width: \"950\",\n                                    height: \"534\",\n                                    src: post.acf.youtube_link,\n                                    frameborder: \"0\",\n                                    allow: \"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\",\n                                    allowfullscreen: true,\n                                    className: \"w-100 h-auto\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchVideos.js\",\n                                    lineNumber: 57,\n                                    columnNumber: 23\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchVideos.js\",\n                                lineNumber: 56,\n                                columnNumber: 19\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                class: \"col-md-8 text-start d-flex align-items-center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    class: \"card-body\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                            class: \"card-title text-start\",\n                                            dangerouslySetInnerHTML: {\n                                                __html: post.title.rendered\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchVideos.js\",\n                                            lineNumber: 61,\n                                            columnNumber: 9\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            class: \"card-text text-start\",\n                                            dangerouslySetInnerHTML: {\n                                                __html: post.excerpt.rendered\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchVideos.js\",\n                                            lineNumber: 62,\n                                            columnNumber: 25\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            href: \"ebboks/\".concat(post.slug),\n                                            className: \"pr-text text-decoration-none expand-btn text-white px-5 rounded-3\",\n                                            children: \"Download Now\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchVideos.js\",\n                                            lineNumber: 63,\n                                            columnNumber: 23\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchVideos.js\",\n                                    lineNumber: 60,\n                                    columnNumber: 7\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchVideos.js\",\n                                lineNumber: 59,\n                                columnNumber: 5\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchVideos.js\",\n                        lineNumber: 55,\n                        columnNumber: 19\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchVideos.js\",\n                    lineNumber: 54,\n                    columnNumber: 7\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchVideos.js\",\n                lineNumber: 53,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(SinglePost, \"lIvlvx3+wWMNoWF4q5yVatb/GkA=\");\n_c = SinglePost;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SinglePost);\nvar _c;\n$RefreshReg$(_c, \"SinglePost\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YnBhY2s6Ly9fTl9FLy4vdXRpbHMvRmV0Y2hWaWRlb3MuanM/YzUwZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Q29udGFpbmVyLFJvdywgQ29sLEltYWdlLEJyZWFkY3J1bWIsQ2FyZCwgQnV0dG9ufSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBjb25maWdEYXRhIGZyb20gXCIuLi9jb25maWcuanNvblwiO1xuXG5cbmNvbnN0IFNpbmdsZVBvc3QgPSAoe3RhZ3N9KSA9PiB7XG4gIGNvbnN0IFtwb3N0LCBzZXRQb3N0XSA9IHVzZVN0YXRlKHt9KTtcbiAgY29uc3QgW2ZlYXR1cmVkSW1hZ2UsIHNldEZlYXR1cmVkSW1hZ2VdID0gdXNlU3RhdGUoe30pO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoUG9zdCA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHBvc3RSZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2NvbmZpZ0RhdGEuU0VSVkVSX1VSTH15dHZpZGVvcy8ke3RhZ3N9YCk7XG4gICAgICAgIGNvbnN0IHBvc3REYXRhID0gYXdhaXQgcG9zdFJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgY29uc29sZS5sb2cocG9zdERhdGEpXG4gICAgICAgIGlmIChwb3N0UmVzcG9uc2Uub2spIHtcbiAgICAgICAgICBzZXRQb3N0KHBvc3REYXRhKTtcblxuICAgICAgICAgIC8vIEZldGNoIGZlYXR1cmVkIGltYWdlIGluZm9ybWF0aW9uXG4gICAgICAgICAgY29uc3QgZmVhdHVyZWRJbWFnZUlkID0gcG9zdERhdGEuZmVhdHVyZWRfbWVkaWE7XG4gICAgICAgICAgaWYgKGZlYXR1cmVkSW1hZ2VJZCkge1xuICAgICAgICAgICAgY29uc3QgZmVhdHVyZWRJbWFnZVJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7Y29uZmlnRGF0YS5TRVJWRVJfVVJMfW1lZGlhLyR7ZmVhdHVyZWRJbWFnZUlkfWApO1xuICAgICAgICAgICAgY29uc3QgZmVhdHVyZWRJbWFnZURhdGEgPSBhd2FpdCBmZWF0dXJlZEltYWdlUmVzcG9uc2UuanNvbigpO1xuXG4gICAgICAgICAgICBpZiAoZmVhdHVyZWRJbWFnZVJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgIHNldEZlYXR1cmVkSW1hZ2UoZmVhdHVyZWRJbWFnZURhdGEpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRmFpbGVkIHRvIGZldGNoIGZlYXR1cmVkIGltYWdlLiBTdGF0dXM6ICR7ZmVhdHVyZWRJbWFnZVJlc3BvbnNlLnN0YXR1c31gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRmFpbGVkIHRvIGZldGNoIHBvc3QuIFN0YXR1czogJHtwb3N0UmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBwb3N0OicsIGVycm9yKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmZXRjaFBvc3QoKTtcbiAgfSwgW10pO1xuXG4gIGlmIChsb2FkaW5nKSB7XG4gICAgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGgyIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXIgbWItMyBtdC00Jz5WaWRlb3M8L2gyPlxuICAgIDxDb250YWluZXIgY2xhc3NOYW1lPSd3YmctcGluayBwLTInPlxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQgbWItMyBib3JkZXItMFwiIHN0eWxlPXt7YmFja2dyb3VuZDonI2U5YzdlMDMzJ319PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBnLTBcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNCBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aWZyYW1lIHdpZHRoPVwiOTUwXCIgaGVpZ2h0PVwiNTM0XCIgc3JjPXtwb3N0LmFjZi55b3V0dWJlX2xpbmt9ICBmcmFtZWJvcmRlcj1cIjBcIiBhbGxvdz1cImFjY2VsZXJvbWV0ZXI7IGF1dG9wbGF5OyBjbGlwYm9hcmQtd3JpdGU7IGVuY3J5cHRlZC1tZWRpYTsgZ3lyb3Njb3BlOyBwaWN0dXJlLWluLXBpY3R1cmU7IHdlYi1zaGFyZVwiIGFsbG93ZnVsbHNjcmVlbiBjbGFzc05hbWU9J3ctMTAwIGgtYXV0byc+PC9pZnJhbWU+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNvbC1tZC04IHRleHQtc3RhcnQgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxuICAgICAgICA8aDUgY2xhc3M9XCJjYXJkLXRpdGxlIHRleHQtc3RhcnRcIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDpwb3N0LnRpdGxlLnJlbmRlcmVkfX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkLXRleHQgdGV4dC1zdGFydFwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcG9zdC5leGNlcnB0LnJlbmRlcmVkIH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YGViYm9rcy8ke3Bvc3Quc2x1Z31gfSBjbGFzc05hbWU9XCJwci10ZXh0IHRleHQtZGVjb3JhdGlvbi1ub25lIGV4cGFuZC1idG4gdGV4dC13aGl0ZSBweC01IHJvdW5kZWQtM1wiPkRvd25sb2FkIE5vdzwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgXG4gICBcbiAgPC9kaXY+XG48L2Rpdj5cbjwvQ29udGFpbmVyPlxuPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaW5nbGVQb3N0OyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ29udGFpbmVyIiwiUm93IiwiQ29sIiwiSW1hZ2UiLCJCcmVhZGNydW1iIiwiQ2FyZCIsIkJ1dHRvbiIsIkxpbmsiLCJjb25maWdEYXRhIiwiU2luZ2xlUG9zdCIsInRhZ3MiLCJwb3N0Iiwic2V0UG9zdCIsImZlYXR1cmVkSW1hZ2UiLCJzZXRGZWF0dXJlZEltYWdlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJmZXRjaFBvc3QiLCJwb3N0UmVzcG9uc2UiLCJmZXRjaCIsIlNFUlZFUl9VUkwiLCJwb3N0RGF0YSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwib2siLCJmZWF0dXJlZEltYWdlSWQiLCJmZWF0dXJlZF9tZWRpYSIsImZlYXR1cmVkSW1hZ2VSZXNwb25zZSIsImZlYXR1cmVkSW1hZ2VEYXRhIiwiZXJyb3IiLCJzdGF0dXMiLCJwIiwiaDIiLCJjbGFzc05hbWUiLCJkaXYiLCJjbGFzcyIsInN0eWxlIiwiYmFja2dyb3VuZCIsImlmcmFtZSIsIndpZHRoIiwiaGVpZ2h0Iiwic3JjIiwiYWNmIiwieW91dHViZV9saW5rIiwiZnJhbWVib3JkZXIiLCJhbGxvdyIsImFsbG93ZnVsbHNjcmVlbiIsImg1IiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJ0aXRsZSIsInJlbmRlcmVkIiwiZXhjZXJwdCIsImhyZWYiLCJzbHVnIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/FetchVideos.js\n"));

/***/ })

});