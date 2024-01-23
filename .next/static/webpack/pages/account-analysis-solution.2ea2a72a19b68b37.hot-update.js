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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config.json */ \"./config.json\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst SinglePost = ()=>{\n    _s();\n    const [post, setPost] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [featuredImage, setFeaturedImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchPost = async ()=>{\n            try {\n                const postResponse = await fetch(\"https://elementor.ivistasolutions.biz/wp-json/wp/v2/ebooks/45643\");\n                const postData = await postResponse.json();\n                if (postResponse.ok) {\n                    setPost(postData);\n                    // Fetch featured image information\n                    const featuredImageId = postData.featured_media;\n                    if (featuredImageId) {\n                        const featuredImageResponse = await fetch(\"https://elementor.ivistasolutions.biz/wp-json/wp/v2/media/\".concat(featuredImageId));\n                        const featuredImageData = await featuredImageResponse.json();\n                        if (featuredImageResponse.ok) {\n                            setFeaturedImage(featuredImageData);\n                        } else {\n                            console.error(\"Failed to fetch featured image. Status: \".concat(featuredImageResponse.status));\n                        }\n                    }\n                } else {\n                    console.error(\"Failed to fetch post. Status: \".concat(postResponse.status));\n                }\n            } catch (error) {\n                console.error(\"Error fetching post:\", error);\n            } finally{\n                setLoading(false);\n            }\n        };\n        fetchPost();\n    }, []);\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchEbooks.js\",\n            lineNumber: 47,\n            columnNumber: 12\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: \"card mb-3 border-0\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    class: \"row g-0\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            class: \"col-md-4 d-flex justify-content-center align-items-center\",\n                            children: featuredImage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: featuredImage.source_url,\n                                alt: featuredImage.alt_text,\n                                style: {\n                                    maxWidth: \"100%\",\n                                    height: \"auto\"\n                                },\n                                class: \"img-fluid \",\n                                width: 220,\n                                height: 220\n                            }, void 0, false, {\n                                fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchEbooks.js\",\n                                lineNumber: 56,\n                                columnNumber: 9\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchEbooks.js\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            class: \"col-md-8 text-start\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                class: \"card-body\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                        class: \"card-title text-start\",\n                                        dangerouslySetInnerHTML: {\n                                            __html: post.title.rendered\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchEbooks.js\",\n                                        lineNumber: 67,\n                                        columnNumber: 9\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        class: \"card-text text-start\",\n                                        dangerouslySetInnerHTML: {\n                                            __html: post.excerpt\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchEbooks.js\",\n                                        lineNumber: 68,\n                                        columnNumber: 25\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchEbooks.js\",\n                                lineNumber: 66,\n                                columnNumber: 7\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchEbooks.js\",\n                            lineNumber: 65,\n                            columnNumber: 5\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchEbooks.js\",\n                    lineNumber: 53,\n                    columnNumber: 3\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchEbooks.js\",\n                lineNumber: 52,\n                columnNumber: 1\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: post.title.rendered\n            }, void 0, false, {\n                fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchEbooks.js\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                dangerouslySetInnerHTML: {\n                    __html: post.content.rendered\n                }\n            }, void 0, false, {\n                fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchEbooks.js\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchEbooks.js\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SinglePost, \"lIvlvx3+wWMNoWF4q5yVatb/GkA=\");\n_c = SinglePost;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SinglePost);\nvar _c;\n$RefreshReg$(_c, \"SinglePost\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9GZXRjaEVib29rcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUFtRDtBQUM4QjtBQUNwRDtBQUNXO0FBR3hDLE1BQU1ZLGFBQWEsSUFBTTs7SUFDdkIsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdaLCtDQUFRQSxDQUFDLENBQUM7SUFDbEMsTUFBTSxDQUFDYSxlQUFlQyxpQkFBaUIsR0FBR2QsK0NBQVFBLENBQUMsQ0FBQztJQUNwRCxNQUFNLENBQUNlLFNBQVNDLFdBQVcsR0FBR2hCLCtDQUFRQSxDQUFDLElBQUk7SUFFM0NELGdEQUFTQSxDQUFDLElBQU07UUFDZCxNQUFNa0IsWUFBWSxVQUFZO1lBQzVCLElBQUk7Z0JBQ0YsTUFBTUMsZUFBZSxNQUFNQyxNQUFNO2dCQUNqQyxNQUFNQyxXQUFXLE1BQU1GLGFBQWFHLElBQUk7Z0JBRXhDLElBQUlILGFBQWFJLEVBQUUsRUFBRTtvQkFDbkJWLFFBQVFRO29CQUVSLG1DQUFtQztvQkFDbkMsTUFBTUcsa0JBQWtCSCxTQUFTSSxjQUFjO29CQUMvQyxJQUFJRCxpQkFBaUI7d0JBQ25CLE1BQU1FLHdCQUF3QixNQUFNTixNQUFNLDZEQUE2RSxPQUFoQkk7d0JBQ3ZHLE1BQU1HLG9CQUFvQixNQUFNRCxzQkFBc0JKLElBQUk7d0JBRTFELElBQUlJLHNCQUFzQkgsRUFBRSxFQUFFOzRCQUM1QlIsaUJBQWlCWTt3QkFDbkIsT0FBTzs0QkFDTEMsUUFBUUMsS0FBSyxDQUFDLDJDQUF3RSxPQUE3Qkgsc0JBQXNCSSxNQUFNO3dCQUN2RixDQUFDO29CQUNILENBQUM7Z0JBQ0gsT0FBTztvQkFDTEYsUUFBUUMsS0FBSyxDQUFDLGlDQUFxRCxPQUFwQlYsYUFBYVcsTUFBTTtnQkFDcEUsQ0FBQztZQUNILEVBQUUsT0FBT0QsT0FBTztnQkFDZEQsUUFBUUMsS0FBSyxDQUFDLHdCQUF3QkE7WUFDeEMsU0FBVTtnQkFDUlosV0FBVyxLQUFLO1lBQ2xCO1FBQ0Y7UUFFQUM7SUFDRixHQUFHLEVBQUU7SUFFTCxJQUFJRixTQUFTO1FBQ1gscUJBQU8sOERBQUNlO3NCQUFFOzs7Ozs7SUFDWixDQUFDO0lBRUQscUJBQ0UsOERBQUNDOzswQkFDTCw4REFBQ0E7Z0JBQUlDLE9BQU07MEJBQ1QsNEVBQUNEO29CQUFJQyxPQUFNOztzQ0FDSCw4REFBQ0Q7NEJBQUlDLE9BQU07c0NBQ1ZuQiwrQkFDSCw4REFBQ29CO2dDQUNDQyxLQUFLckIsY0FBY3NCLFVBQVU7Z0NBQzdCQyxLQUFLdkIsY0FBY3dCLFFBQVE7Z0NBQ3JCQyxPQUFPO29DQUFFQyxVQUFVO29DQUFRQyxRQUFRO2dDQUFPO2dDQUMxQ1IsT0FBTTtnQ0FBYVMsT0FBTztnQ0FBS0QsUUFBUTs7Ozs7Ozs7Ozs7c0NBS25ELDhEQUFDVDs0QkFBSUMsT0FBTTtzQ0FDVCw0RUFBQ0Q7Z0NBQUlDLE9BQU07O2tEQUNULDhEQUFDVTt3Q0FBR1YsT0FBTTt3Q0FBd0JXLHlCQUF5Qjs0Q0FBQ0MsUUFBT2pDLEtBQUtrQyxLQUFLLENBQUNDLFFBQVE7d0NBQUE7Ozs7OztrREFDdEUsOERBQUNoQjt3Q0FBRUUsT0FBTTt3Q0FBdUJXLHlCQUF5Qjs0Q0FBRUMsUUFBUWpDLEtBQUtvQyxPQUFPO3dDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQVVsRyw4REFBQ0M7MEJBQUlyQyxLQUFLa0MsS0FBSyxDQUFDQyxRQUFROzs7Ozs7MEJBRXhCLDhEQUFDZjtnQkFBSVkseUJBQXlCO29CQUFFQyxRQUFRakMsS0FBS3NDLE9BQU8sQ0FBQ0gsUUFBUTtnQkFBQzs7Ozs7Ozs7Ozs7O0FBR3BFO0dBNUVNcEM7S0FBQUE7QUE4RU4sK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvRmV0Y2hFYm9va3MuanM/ODFiNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Q29udGFpbmVyLFJvdywgQ29sLEltYWdlLEJyZWFkY3J1bWIsQ2FyZCwgQnV0dG9ufSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBjb25maWdEYXRhIGZyb20gXCIuLi9jb25maWcuanNvblwiO1xuXG5cbmNvbnN0IFNpbmdsZVBvc3QgPSAoKSA9PiB7XG4gIGNvbnN0IFtwb3N0LCBzZXRQb3N0XSA9IHVzZVN0YXRlKHt9KTtcbiAgY29uc3QgW2ZlYXR1cmVkSW1hZ2UsIHNldEZlYXR1cmVkSW1hZ2VdID0gdXNlU3RhdGUoe30pO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoUG9zdCA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHBvc3RSZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL2VsZW1lbnRvci5pdmlzdGFzb2x1dGlvbnMuYml6L3dwLWpzb24vd3AvdjIvZWJvb2tzLzQ1NjQzJyk7XG4gICAgICAgIGNvbnN0IHBvc3REYXRhID0gYXdhaXQgcG9zdFJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgICBpZiAocG9zdFJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgc2V0UG9zdChwb3N0RGF0YSk7XG5cbiAgICAgICAgICAvLyBGZXRjaCBmZWF0dXJlZCBpbWFnZSBpbmZvcm1hdGlvblxuICAgICAgICAgIGNvbnN0IGZlYXR1cmVkSW1hZ2VJZCA9IHBvc3REYXRhLmZlYXR1cmVkX21lZGlhO1xuICAgICAgICAgIGlmIChmZWF0dXJlZEltYWdlSWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGZlYXR1cmVkSW1hZ2VSZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2VsZW1lbnRvci5pdmlzdGFzb2x1dGlvbnMuYml6L3dwLWpzb24vd3AvdjIvbWVkaWEvJHtmZWF0dXJlZEltYWdlSWR9YCk7XG4gICAgICAgICAgICBjb25zdCBmZWF0dXJlZEltYWdlRGF0YSA9IGF3YWl0IGZlYXR1cmVkSW1hZ2VSZXNwb25zZS5qc29uKCk7XG5cbiAgICAgICAgICAgIGlmIChmZWF0dXJlZEltYWdlUmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgc2V0RmVhdHVyZWRJbWFnZShmZWF0dXJlZEltYWdlRGF0YSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBGYWlsZWQgdG8gZmV0Y2ggZmVhdHVyZWQgaW1hZ2UuIFN0YXR1czogJHtmZWF0dXJlZEltYWdlUmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBGYWlsZWQgdG8gZmV0Y2ggcG9zdC4gU3RhdHVzOiAke3Bvc3RSZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHBvc3Q6JywgZXJyb3IpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZldGNoUG9zdCgpO1xuICB9LCBbXSk7XG5cbiAgaWYgKGxvYWRpbmcpIHtcbiAgICByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG48ZGl2IGNsYXNzPVwiY2FyZCBtYi0zIGJvcmRlci0wXCIgPlxuICA8ZGl2IGNsYXNzPVwicm93IGctMFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNCBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICB7ZmVhdHVyZWRJbWFnZSAmJiAoXG4gICAgICAgIDxpbWdcbiAgICAgICAgICBzcmM9e2ZlYXR1cmVkSW1hZ2Uuc291cmNlX3VybH1cbiAgICAgICAgICBhbHQ9e2ZlYXR1cmVkSW1hZ2UuYWx0X3RleHR9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWF4V2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnYXV0bycgfX1cbiAgICAgICAgICAgICAgICBjbGFzcz1cImltZy1mbHVpZCBcIiB3aWR0aD17MjIwfSBoZWlnaHQ9ezIyMH1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtOCB0ZXh0LXN0YXJ0XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgIDxoNSBjbGFzcz1cImNhcmQtdGl0bGUgdGV4dC1zdGFydFwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOnBvc3QudGl0bGUucmVuZGVyZWR9fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImNhcmQtdGV4dCB0ZXh0LXN0YXJ0XCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBwb3N0LmV4Y2VycHQgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8TGluayBocmVmPXtMaW5rc30gY2xhc3NOYW1lPVwicHItdGV4dCB0ZXh0LWRlY29yYXRpb24tbm9uZSBleHBhbmQtYnRuIHRleHQtd2hpdGUgcHgtNSByb3VuZGVkLTNcIj5SZWFkIE1vcmU8L0xpbms+ICovfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cblxuXG4gICAgICA8aDE+e3Bvc3QudGl0bGUucmVuZGVyZWR9PC9oMT5cbiAgICAgIFxuICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHBvc3QuY29udGVudC5yZW5kZXJlZCB9fSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2luZ2xlUG9zdDsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNvbnRhaW5lciIsIlJvdyIsIkNvbCIsIkltYWdlIiwiQnJlYWRjcnVtYiIsIkNhcmQiLCJCdXR0b24iLCJMaW5rIiwiY29uZmlnRGF0YSIsIlNpbmdsZVBvc3QiLCJwb3N0Iiwic2V0UG9zdCIsImZlYXR1cmVkSW1hZ2UiLCJzZXRGZWF0dXJlZEltYWdlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJmZXRjaFBvc3QiLCJwb3N0UmVzcG9uc2UiLCJmZXRjaCIsInBvc3REYXRhIiwianNvbiIsIm9rIiwiZmVhdHVyZWRJbWFnZUlkIiwiZmVhdHVyZWRfbWVkaWEiLCJmZWF0dXJlZEltYWdlUmVzcG9uc2UiLCJmZWF0dXJlZEltYWdlRGF0YSIsImNvbnNvbGUiLCJlcnJvciIsInN0YXR1cyIsInAiLCJkaXYiLCJjbGFzcyIsImltZyIsInNyYyIsInNvdXJjZV91cmwiLCJhbHQiLCJhbHRfdGV4dCIsInN0eWxlIiwibWF4V2lkdGgiLCJoZWlnaHQiLCJ3aWR0aCIsImg1IiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJ0aXRsZSIsInJlbmRlcmVkIiwiZXhjZXJwdCIsImgxIiwiY29udGVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/FetchEbooks.js\n"));

/***/ })

});