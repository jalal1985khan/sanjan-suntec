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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config.json */ \"./config.json\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst SinglePost = (param)=>{\n    let { tags  } = param;\n    _s();\n    const [post, setPost] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [featuredImage, setFeaturedImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchPost = async ()=>{\n            try {\n                const postResponse = await fetch(\"\".concat(_config_json__WEBPACK_IMPORTED_MODULE_3__.SERVER_URL, \"ebooks/45643\"));\n                const postData = await postResponse.json();\n                if (postResponse.ok) {\n                    setPost(postData);\n                    // Fetch featured image information\n                    const featuredImageId = postData.featured_media;\n                    if (featuredImageId) {\n                        const featuredImageResponse = await fetch(\"\".concat(_config_json__WEBPACK_IMPORTED_MODULE_3__.SERVER_URL, \"media/\").concat(featuredImageId));\n                        const featuredImageData = await featuredImageResponse.json();\n                        if (featuredImageResponse.ok) {\n                            setFeaturedImage(featuredImageData);\n                        } else {\n                            console.error(\"Failed to fetch featured image. Status: \".concat(featuredImageResponse.status));\n                        }\n                    }\n                } else {\n                    console.error(\"Failed to fetch post. Status: \".concat(postResponse.status));\n                }\n            } catch (error) {\n                console.error(\"Error fetching post:\", error);\n            } finally{\n                setLoading(false);\n            }\n        };\n        fetchPost();\n    }, []);\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchEbooks.js\",\n            lineNumber: 47,\n            columnNumber: 12\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Container, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            class: \"card mb-3 border-0\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: \"row g-0\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"col-md-8 text-start\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            class: \"card-body\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                    class: \"card-title text-start\",\n                                    dangerouslySetInnerHTML: {\n                                        __html: post.title.rendered\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchEbooks.js\",\n                                    lineNumber: 57,\n                                    columnNumber: 9\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    class: \"card-text text-start\",\n                                    dangerouslySetInnerHTML: {\n                                        __html: post.excerpt.rendered\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchEbooks.js\",\n                                    lineNumber: 58,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"ebboks/\".concat(post.slug),\n                                    className: \"pr-text text-decoration-none expand-btn text-white px-5 rounded-3\",\n                                    children: \"Read More\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchEbooks.js\",\n                                    lineNumber: 59,\n                                    columnNumber: 23\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchEbooks.js\",\n                            lineNumber: 56,\n                            columnNumber: 7\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchEbooks.js\",\n                        lineNumber: 55,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"col-md-4 d-flex justify-content-center align-items-center\",\n                        children: featuredImage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: featuredImage.source_url,\n                            alt: featuredImage.alt_text,\n                            style: {\n                                maxWidth: \"100%\",\n                                height: \"auto\"\n                            },\n                            class: \"img-fluid \",\n                            width: 220,\n                            height: 220\n                        }, void 0, false, {\n                            fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchEbooks.js\",\n                            lineNumber: 66,\n                            columnNumber: 9\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchEbooks.js\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchEbooks.js\",\n                lineNumber: 53,\n                columnNumber: 3\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchEbooks.js\",\n            lineNumber: 52,\n            columnNumber: 1\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchEbooks.js\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SinglePost, \"lIvlvx3+wWMNoWF4q5yVatb/GkA=\");\n_c = SinglePost;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SinglePost);\nvar _c;\n$RefreshReg$(_c, \"SinglePost\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9GZXRjaEVib29rcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFBbUQ7QUFDOEI7QUFDcEQ7QUFDVztBQUd4QyxNQUFNWSxhQUFhLFNBQVk7UUFBWCxFQUFDQyxLQUFJLEVBQUM7O0lBQ3hCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHYiwrQ0FBUUEsQ0FBQyxDQUFDO0lBQ2xDLE1BQU0sQ0FBQ2MsZUFBZUMsaUJBQWlCLEdBQUdmLCtDQUFRQSxDQUFDLENBQUM7SUFDcEQsTUFBTSxDQUFDZ0IsU0FBU0MsV0FBVyxHQUFHakIsK0NBQVFBLENBQUMsSUFBSTtJQUUzQ0QsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLE1BQU1tQixZQUFZLFVBQVk7WUFDNUIsSUFBSTtnQkFDRixNQUFNQyxlQUFlLE1BQU1DLE1BQU0sR0FBeUIsT0FBdEJYLG9EQUFxQixFQUFDO2dCQUMxRCxNQUFNYSxXQUFXLE1BQU1ILGFBQWFJLElBQUk7Z0JBRXhDLElBQUlKLGFBQWFLLEVBQUUsRUFBRTtvQkFDbkJYLFFBQVFTO29CQUVSLG1DQUFtQztvQkFDbkMsTUFBTUcsa0JBQWtCSCxTQUFTSSxjQUFjO29CQUMvQyxJQUFJRCxpQkFBaUI7d0JBQ25CLE1BQU1FLHdCQUF3QixNQUFNUCxNQUFNLEdBQWlDSyxPQUE5QmhCLG9EQUFxQixFQUFDLFVBQXdCLE9BQWhCZ0I7d0JBQzNFLE1BQU1HLG9CQUFvQixNQUFNRCxzQkFBc0JKLElBQUk7d0JBRTFELElBQUlJLHNCQUFzQkgsRUFBRSxFQUFFOzRCQUM1QlQsaUJBQWlCYTt3QkFDbkIsT0FBTzs0QkFDTEMsUUFBUUMsS0FBSyxDQUFDLDJDQUF3RSxPQUE3Qkgsc0JBQXNCSSxNQUFNO3dCQUN2RixDQUFDO29CQUNILENBQUM7Z0JBQ0gsT0FBTztvQkFDTEYsUUFBUUMsS0FBSyxDQUFDLGlDQUFxRCxPQUFwQlgsYUFBYVksTUFBTTtnQkFDcEUsQ0FBQztZQUNILEVBQUUsT0FBT0QsT0FBTztnQkFDZEQsUUFBUUMsS0FBSyxDQUFDLHdCQUF3QkE7WUFDeEMsU0FBVTtnQkFDUmIsV0FBVyxLQUFLO1lBQ2xCO1FBQ0Y7UUFFQUM7SUFDRixHQUFHLEVBQUU7SUFFTCxJQUFJRixTQUFTO1FBQ1gscUJBQU8sOERBQUNnQjtzQkFBRTs7Ozs7O0lBQ1osQ0FBQztJQUVELHFCQUNFLDhEQUFDL0Isc0RBQVNBO2tCQUNkLDRFQUFDZ0M7WUFBSUMsT0FBTTtzQkFDVCw0RUFBQ0Q7Z0JBQUlDLE9BQU07O2tDQUVULDhEQUFDRDt3QkFBSUMsT0FBTTtrQ0FDVCw0RUFBQ0Q7NEJBQUlDLE9BQU07OzhDQUNULDhEQUFDQztvQ0FBR0QsT0FBTTtvQ0FBd0JFLHlCQUF5Qjt3Q0FBQ0MsUUFBT3pCLEtBQUswQixLQUFLLENBQUNDLFFBQVE7b0NBQUE7Ozs7Ozs4Q0FDdEUsOERBQUNQO29DQUFFRSxPQUFNO29DQUF1QkUseUJBQXlCO3dDQUFFQyxRQUFRekIsS0FBSzRCLE9BQU8sQ0FBQ0QsUUFBUTtvQ0FBQzs7Ozs7OzhDQUMzRiw4REFBQy9CLGtEQUFJQTtvQ0FBQ2lDLE1BQU0sVUFBb0IsT0FBVjdCLEtBQUs4QixJQUFJO29DQUFJQyxXQUFVOzhDQUFvRTs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBSy9ILDhEQUFDVjt3QkFBSUMsT0FBTTtrQ0FDUnBCLCtCQUNILDhEQUFDOEI7NEJBQ0NDLEtBQUsvQixjQUFjZ0MsVUFBVTs0QkFDN0JDLEtBQUtqQyxjQUFja0MsUUFBUTs0QkFDckJDLE9BQU87Z0NBQUVDLFVBQVU7Z0NBQVFDLFFBQVE7NEJBQU87NEJBQzFDakIsT0FBTTs0QkFBYWtCLE9BQU87NEJBQUtELFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVV2RDtHQXpFTXpDO0tBQUFBO0FBMkVOLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3V0aWxzL0ZldGNoRWJvb2tzLmpzPzgxYjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0NvbnRhaW5lcixSb3csIENvbCxJbWFnZSxCcmVhZGNydW1iLENhcmQsIEJ1dHRvbn0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgY29uZmlnRGF0YSBmcm9tIFwiLi4vY29uZmlnLmpzb25cIjtcblxuXG5jb25zdCBTaW5nbGVQb3N0ID0gKHt0YWdzfSkgPT4ge1xuICBjb25zdCBbcG9zdCwgc2V0UG9zdF0gPSB1c2VTdGF0ZSh7fSk7XG4gIGNvbnN0IFtmZWF0dXJlZEltYWdlLCBzZXRGZWF0dXJlZEltYWdlXSA9IHVzZVN0YXRlKHt9KTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaFBvc3QgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBwb3N0UmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtjb25maWdEYXRhLlNFUlZFUl9VUkx9ZWJvb2tzLzQ1NjQzYCk7XG4gICAgICAgIGNvbnN0IHBvc3REYXRhID0gYXdhaXQgcG9zdFJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgICBpZiAocG9zdFJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgc2V0UG9zdChwb3N0RGF0YSk7XG5cbiAgICAgICAgICAvLyBGZXRjaCBmZWF0dXJlZCBpbWFnZSBpbmZvcm1hdGlvblxuICAgICAgICAgIGNvbnN0IGZlYXR1cmVkSW1hZ2VJZCA9IHBvc3REYXRhLmZlYXR1cmVkX21lZGlhO1xuICAgICAgICAgIGlmIChmZWF0dXJlZEltYWdlSWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGZlYXR1cmVkSW1hZ2VSZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2NvbmZpZ0RhdGEuU0VSVkVSX1VSTH1tZWRpYS8ke2ZlYXR1cmVkSW1hZ2VJZH1gKTtcbiAgICAgICAgICAgIGNvbnN0IGZlYXR1cmVkSW1hZ2VEYXRhID0gYXdhaXQgZmVhdHVyZWRJbWFnZVJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgICAgICAgaWYgKGZlYXR1cmVkSW1hZ2VSZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICBzZXRGZWF0dXJlZEltYWdlKGZlYXR1cmVkSW1hZ2VEYXRhKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEZhaWxlZCB0byBmZXRjaCBmZWF0dXJlZCBpbWFnZS4gU3RhdHVzOiAke2ZlYXR1cmVkSW1hZ2VSZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEZhaWxlZCB0byBmZXRjaCBwb3N0LiBTdGF0dXM6ICR7cG9zdFJlc3BvbnNlLnN0YXR1c31gKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgcG9zdDonLCBlcnJvcik7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZmV0Y2hQb3N0KCk7XG4gIH0sIFtdKTtcblxuICBpZiAobG9hZGluZykge1xuICAgIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbjxkaXYgY2xhc3M9XCJjYXJkIG1iLTMgYm9yZGVyLTBcIiA+XG4gIDxkaXYgY2xhc3M9XCJyb3cgZy0wXCI+XG5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTggdGV4dC1zdGFydFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxuICAgICAgICA8aDUgY2xhc3M9XCJjYXJkLXRpdGxlIHRleHQtc3RhcnRcIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDpwb3N0LnRpdGxlLnJlbmRlcmVkfX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkLXRleHQgdGV4dC1zdGFydFwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcG9zdC5leGNlcnB0LnJlbmRlcmVkIH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YGViYm9rcy8ke3Bvc3Quc2x1Z31gfSBjbGFzc05hbWU9XCJwci10ZXh0IHRleHQtZGVjb3JhdGlvbi1ub25lIGV4cGFuZC1idG4gdGV4dC13aGl0ZSBweC01IHJvdW5kZWQtM1wiPlJlYWQgTW9yZTwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTQgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAge2ZlYXR1cmVkSW1hZ2UgJiYgKFxuICAgICAgICA8aW1nXG4gICAgICAgICAgc3JjPXtmZWF0dXJlZEltYWdlLnNvdXJjZV91cmx9XG4gICAgICAgICAgYWx0PXtmZWF0dXJlZEltYWdlLmFsdF90ZXh0fVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1heFdpZHRoOiAnMTAwJScsIGhlaWdodDogJ2F1dG8nIH19XG4gICAgICAgICAgICAgICAgY2xhc3M9XCJpbWctZmx1aWQgXCIgd2lkdGg9ezIyMH0gaGVpZ2h0PXsyMjB9XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cbjwvQ29udGFpbmVyPlxuXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaW5nbGVQb3N0OyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ29udGFpbmVyIiwiUm93IiwiQ29sIiwiSW1hZ2UiLCJCcmVhZGNydW1iIiwiQ2FyZCIsIkJ1dHRvbiIsIkxpbmsiLCJjb25maWdEYXRhIiwiU2luZ2xlUG9zdCIsInRhZ3MiLCJwb3N0Iiwic2V0UG9zdCIsImZlYXR1cmVkSW1hZ2UiLCJzZXRGZWF0dXJlZEltYWdlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJmZXRjaFBvc3QiLCJwb3N0UmVzcG9uc2UiLCJmZXRjaCIsIlNFUlZFUl9VUkwiLCJwb3N0RGF0YSIsImpzb24iLCJvayIsImZlYXR1cmVkSW1hZ2VJZCIsImZlYXR1cmVkX21lZGlhIiwiZmVhdHVyZWRJbWFnZVJlc3BvbnNlIiwiZmVhdHVyZWRJbWFnZURhdGEiLCJjb25zb2xlIiwiZXJyb3IiLCJzdGF0dXMiLCJwIiwiZGl2IiwiY2xhc3MiLCJoNSIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwidGl0bGUiLCJyZW5kZXJlZCIsImV4Y2VycHQiLCJocmVmIiwic2x1ZyIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsInNvdXJjZV91cmwiLCJhbHQiLCJhbHRfdGV4dCIsInN0eWxlIiwibWF4V2lkdGgiLCJoZWlnaHQiLCJ3aWR0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/FetchEbooks.js\n"));

/***/ })

});