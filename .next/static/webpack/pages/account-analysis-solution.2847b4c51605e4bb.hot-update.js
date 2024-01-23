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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config.json */ \"./config.json\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst SinglePost = (param)=>{\n    let { tags  } = param;\n    _s();\n    const [post, setPost] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [featuredImage, setFeaturedImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchPost = async ()=>{\n            try {\n                const postResponse = await fetch(\"\".concat(_config_json__WEBPACK_IMPORTED_MODULE_3__.SERVER_URL, \"ytvideos/\").concat(tags));\n                const postData = await postResponse.json();\n                console.log(postData);\n                if (postResponse.ok) {\n                    setPost(postData);\n                    // Fetch featured image information\n                    const featuredImageId = postData.featured_media;\n                    if (featuredImageId) {\n                        const featuredImageResponse = await fetch(\"\".concat(_config_json__WEBPACK_IMPORTED_MODULE_3__.SERVER_URL, \"media/\").concat(featuredImageId));\n                        const featuredImageData = await featuredImageResponse.json();\n                        if (featuredImageResponse.ok) {\n                            setFeaturedImage(featuredImageData);\n                        } else {\n                            console.error(\"Failed to fetch featured image. Status: \".concat(featuredImageResponse.status));\n                        }\n                    }\n                } else {\n                    console.error(\"Failed to fetch post. Status: \".concat(postResponse.status));\n                }\n            } catch (error) {\n                console.error(\"Error fetching post:\", error);\n            } finally{\n                setLoading(false);\n            }\n        };\n        fetchPost();\n    }, []);\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchVideos.js\",\n            lineNumber: 47,\n            columnNumber: 12\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-center mb-3 mt-4\",\n                children: \"Videos\"\n            }, void 0, false, {\n                fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchVideos.js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Container, {\n                className: \"wbg-blue p-2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    class: \"card mb-3 border-0\",\n                    style: {\n                        background: \"#D6F4F6\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"row g-0\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                class: \"col-md-8 text-start d-flex align-items-center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    class: \"card-body\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                            class: \"card-title text-start\",\n                                            dangerouslySetInnerHTML: {\n                                                __html: post.title.rendered\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchVideos.js\",\n                                            lineNumber: 58,\n                                            columnNumber: 9\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            class: \"card-text text-start\",\n                                            dangerouslySetInnerHTML: {\n                                                __html: post.excerpt.rendered\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchVideos.js\",\n                                            lineNumber: 59,\n                                            columnNumber: 25\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            href: \"ebboks/\".concat(post.slug),\n                                            className: \"pr-text text-decoration-none expand-btn text-white px-5 rounded-3\",\n                                            children: \"Download Now\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchVideos.js\",\n                                            lineNumber: 60,\n                                            columnNumber: 23\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchVideos.js\",\n                                    lineNumber: 57,\n                                    columnNumber: 7\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchVideos.js\",\n                                lineNumber: 56,\n                                columnNumber: 5\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                class: \"col-md-4 d-flex justify-content-center align-items-center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                                    width: \"950\",\n                                    height: \"534\",\n                                    src: post.acf.youtube_link,\n                                    title: \"Best of Emraan Hashmi 2023 \\uD83D\\uDC96 Hindi Romantic Songs 2023 \\uD83D\\uDC96 Emraan Hashmi Hits Songs \\uD83D\\uDC96 | Iztiraar Lofi\",\n                                    frameborder: \"0\",\n                                    allow: \"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\",\n                                    allowfullscreen: true\n                                }, void 0, false, {\n                                    fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchVideos.js\",\n                                    lineNumber: 64,\n                                    columnNumber: 23\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchVideos.js\",\n                                lineNumber: 63,\n                                columnNumber: 23\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchVideos.js\",\n                        lineNumber: 55,\n                        columnNumber: 3\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchVideos.js\",\n                    lineNumber: 54,\n                    columnNumber: 7\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchVideos.js\",\n                lineNumber: 53,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(SinglePost, \"lIvlvx3+wWMNoWF4q5yVatb/GkA=\");\n_c = SinglePost;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SinglePost);\nvar _c;\n$RefreshReg$(_c, \"SinglePost\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cGFjazovL19OX0UvLi91dGlscy9GZXRjaFZpZGVvcy5qcz9jNTBlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtDb250YWluZXIsUm93LCBDb2wsSW1hZ2UsQnJlYWRjcnVtYixDYXJkLCBCdXR0b259IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IGNvbmZpZ0RhdGEgZnJvbSBcIi4uL2NvbmZpZy5qc29uXCI7XG5cblxuY29uc3QgU2luZ2xlUG9zdCA9ICh7dGFnc30pID0+IHtcbiAgY29uc3QgW3Bvc3QsIHNldFBvc3RdID0gdXNlU3RhdGUoe30pO1xuICBjb25zdCBbZmVhdHVyZWRJbWFnZSwgc2V0RmVhdHVyZWRJbWFnZV0gPSB1c2VTdGF0ZSh7fSk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hQb3N0ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcG9zdFJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7Y29uZmlnRGF0YS5TRVJWRVJfVVJMfXl0dmlkZW9zLyR7dGFnc31gKTtcbiAgICAgICAgY29uc3QgcG9zdERhdGEgPSBhd2FpdCBwb3N0UmVzcG9uc2UuanNvbigpO1xuICAgICAgICBjb25zb2xlLmxvZyhwb3N0RGF0YSlcbiAgICAgICAgaWYgKHBvc3RSZXNwb25zZS5vaykge1xuICAgICAgICAgIHNldFBvc3QocG9zdERhdGEpO1xuXG4gICAgICAgICAgLy8gRmV0Y2ggZmVhdHVyZWQgaW1hZ2UgaW5mb3JtYXRpb25cbiAgICAgICAgICBjb25zdCBmZWF0dXJlZEltYWdlSWQgPSBwb3N0RGF0YS5mZWF0dXJlZF9tZWRpYTtcbiAgICAgICAgICBpZiAoZmVhdHVyZWRJbWFnZUlkKSB7XG4gICAgICAgICAgICBjb25zdCBmZWF0dXJlZEltYWdlUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtjb25maWdEYXRhLlNFUlZFUl9VUkx9bWVkaWEvJHtmZWF0dXJlZEltYWdlSWR9YCk7XG4gICAgICAgICAgICBjb25zdCBmZWF0dXJlZEltYWdlRGF0YSA9IGF3YWl0IGZlYXR1cmVkSW1hZ2VSZXNwb25zZS5qc29uKCk7XG5cbiAgICAgICAgICAgIGlmIChmZWF0dXJlZEltYWdlUmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgc2V0RmVhdHVyZWRJbWFnZShmZWF0dXJlZEltYWdlRGF0YSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBGYWlsZWQgdG8gZmV0Y2ggZmVhdHVyZWQgaW1hZ2UuIFN0YXR1czogJHtmZWF0dXJlZEltYWdlUmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBGYWlsZWQgdG8gZmV0Y2ggcG9zdC4gU3RhdHVzOiAke3Bvc3RSZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHBvc3Q6JywgZXJyb3IpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZldGNoUG9zdCgpO1xuICB9LCBbXSk7XG5cbiAgaWYgKGxvYWRpbmcpIHtcbiAgICByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aDIgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlciBtYi0zIG10LTQnPlZpZGVvczwvaDI+XG4gICAgPENvbnRhaW5lciBjbGFzc05hbWU9J3diZy1ibHVlIHAtMic+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZCBtYi0zIGJvcmRlci0wXCIgc3R5bGU9e3tiYWNrZ3JvdW5kOicjRDZGNEY2J319PlxuICA8ZGl2IGNsYXNzPVwicm93IGctMFwiPlxuICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtOCB0ZXh0LXN0YXJ0IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgPGg1IGNsYXNzPVwiY2FyZC10aXRsZSB0ZXh0LXN0YXJ0XCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6cG9zdC50aXRsZS5yZW5kZXJlZH19Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiY2FyZC10ZXh0IHRleHQtc3RhcnRcIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHBvc3QuZXhjZXJwdC5yZW5kZXJlZCB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2BlYmJva3MvJHtwb3N0LnNsdWd9YH0gY2xhc3NOYW1lPVwicHItdGV4dCB0ZXh0LWRlY29yYXRpb24tbm9uZSBleHBhbmQtYnRuIHRleHQtd2hpdGUgcHgtNSByb3VuZGVkLTNcIj5Eb3dubG9hZCBOb3c8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNCBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aWZyYW1lIHdpZHRoPVwiOTUwXCIgaGVpZ2h0PVwiNTM0XCIgc3JjPXtwb3N0LmFjZi55b3V0dWJlX2xpbmt9IHRpdGxlPVwiQmVzdCBvZiBFbXJhYW4gSGFzaG1pIDIwMjMg8J+SliBIaW5kaSBSb21hbnRpYyBTb25ncyAyMDIzIPCfkpYgRW1yYWFuIEhhc2htaSBIaXRzIFNvbmdzIPCfkpYgfCBJenRpcmFhciBMb2ZpXCIgZnJhbWVib3JkZXI9XCIwXCIgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhdXRvcGxheTsgY2xpcGJvYXJkLXdyaXRlOyBlbmNyeXB0ZWQtbWVkaWE7IGd5cm9zY29wZTsgcGljdHVyZS1pbi1waWN0dXJlOyB3ZWItc2hhcmVcIiBhbGxvd2Z1bGxzY3JlZW4+PC9pZnJhbWU+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgIDwvZGl2PlxuICAgXG4gIDwvZGl2PlxuPC9kaXY+XG48L0NvbnRhaW5lcj5cbjwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2luZ2xlUG9zdDsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNvbnRhaW5lciIsIlJvdyIsIkNvbCIsIkltYWdlIiwiQnJlYWRjcnVtYiIsIkNhcmQiLCJCdXR0b24iLCJMaW5rIiwiY29uZmlnRGF0YSIsIlNpbmdsZVBvc3QiLCJ0YWdzIiwicG9zdCIsInNldFBvc3QiLCJmZWF0dXJlZEltYWdlIiwic2V0RmVhdHVyZWRJbWFnZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZmV0Y2hQb3N0IiwicG9zdFJlc3BvbnNlIiwiZmV0Y2giLCJTRVJWRVJfVVJMIiwicG9zdERhdGEiLCJqc29uIiwiY29uc29sZSIsImxvZyIsIm9rIiwiZmVhdHVyZWRJbWFnZUlkIiwiZmVhdHVyZWRfbWVkaWEiLCJmZWF0dXJlZEltYWdlUmVzcG9uc2UiLCJmZWF0dXJlZEltYWdlRGF0YSIsImVycm9yIiwic3RhdHVzIiwicCIsImgyIiwiY2xhc3NOYW1lIiwiZGl2IiwiY2xhc3MiLCJzdHlsZSIsImJhY2tncm91bmQiLCJoNSIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwidGl0bGUiLCJyZW5kZXJlZCIsImV4Y2VycHQiLCJocmVmIiwic2x1ZyIsImlmcmFtZSIsIndpZHRoIiwiaGVpZ2h0Iiwic3JjIiwiYWNmIiwieW91dHViZV9saW5rIiwiZnJhbWVib3JkZXIiLCJhbGxvdyIsImFsbG93ZnVsbHNjcmVlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/FetchVideos.js\n"));

/***/ })

});