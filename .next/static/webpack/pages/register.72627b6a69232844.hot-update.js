"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/register",{

/***/ "./pages/register.js":
/*!***************************!*\
  !*** ./pages/register.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_define_property.mjs */ \"./node_modules/@swc/helpers/src/_define_property.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n\n\n\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar Register = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"\",\n        email: \"\",\n        password: \"\",\n        error: \"\",\n        success: \"\",\n        buttonText: \"Register\"\n    }), state = ref[0], setState = ref[1];\n    var name = state.name, email = state.email, password = state.password, error = state.error, success = state.success, buttonText = state.buttonText;\n    var handleChange = function(name) {\n        return function(e) {\n            var _obj;\n            setState((0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({}, state), (_obj = {}, (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_obj, name, e.target.value), (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_obj, \"error\", \"\"), (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_obj, \"success\", \"\"), (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_obj, \"buttonText\", \"Register\"), _obj)));\n        };\n    };\n    var handleSubmit = function(e) {};\n    var registerForm = function() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleSubmit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"form-group\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        value: name,\n                        onChange: handleChange(\"name\"),\n                        type: \"text\",\n                        className: \"form-control\",\n                        placeholder: \"Type your name\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\guanshi\\\\Desktop\\\\react-node-aws\\\\pages\\\\register.js\",\n                        lineNumber: 27,\n                        columnNumber: 17\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\guanshi\\\\Desktop\\\\react-node-aws\\\\pages\\\\register.js\",\n                    lineNumber: 26,\n                    columnNumber: 13\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"form-group\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        value: email,\n                        onChange: handleChange(\"email\"),\n                        type: \"email\",\n                        className: \"form-control\",\n                        placeholder: \"Type your email\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\guanshi\\\\Desktop\\\\react-node-aws\\\\pages\\\\register.js\",\n                        lineNumber: 36,\n                        columnNumber: 17\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\guanshi\\\\Desktop\\\\react-node-aws\\\\pages\\\\register.js\",\n                    lineNumber: 35,\n                    columnNumber: 13\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"form-group\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        value: password,\n                        onChange: handleChange(\"password\"),\n                        type: \"password\",\n                        className: \"form-control\",\n                        placeholder: \"Type your password\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\guanshi\\\\Desktop\\\\react-node-aws\\\\pages\\\\register.js\",\n                        lineNumber: 45,\n                        columnNumber: 17\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\guanshi\\\\Desktop\\\\react-node-aws\\\\pages\\\\register.js\",\n                    lineNumber: 44,\n                    columnNumber: 13\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"form-group\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"btn btn-outline-warning\",\n                        children: buttonText\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\guanshi\\\\Desktop\\\\react-node-aws\\\\pages\\\\register.js\",\n                        lineNumber: 54,\n                        columnNumber: 17\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\guanshi\\\\Desktop\\\\react-node-aws\\\\pages\\\\register.js\",\n                    lineNumber: 53,\n                    columnNumber: 13\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\guanshi\\\\Desktop\\\\react-node-aws\\\\pages\\\\register.js\",\n            lineNumber: 25,\n            columnNumber: 9\n        }, _this);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"col-md-6 offset-md-3\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Register\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\guanshi\\\\Desktop\\\\react-node-aws\\\\pages\\\\register.js\",\n                    lineNumber: 62,\n                    columnNumber: 13\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\guanshi\\\\Desktop\\\\react-node-aws\\\\pages\\\\register.js\",\n                    lineNumber: 63,\n                    columnNumber: 13\n                }, _this),\n                registerForm(),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\guanshi\\\\Desktop\\\\react-node-aws\\\\pages\\\\register.js\",\n                    lineNumber: 65,\n                    columnNumber: 13\n                }, _this),\n                JSON.stringify(state)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\guanshi\\\\Desktop\\\\react-node-aws\\\\pages\\\\register.js\",\n            lineNumber: 61,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\guanshi\\\\Desktop\\\\react-node-aws\\\\pages\\\\register.js\",\n        lineNumber: 60,\n        columnNumber: 12\n    }, _this);\n};\n_s(Register, \"SjqXqKmlACsGLqyHM8vKzNRiZO8=\");\n_c = Register;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Register);\nvar _c;\n$RefreshReg$(_c, \"Register\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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eUJBQUs7OEJBQ2pCLDhEQUFDQyxJQUFFOzs7O3lCQUFHO2dCQUNMWCxZQUFZLEVBQUU7OEJBQ2YsOERBQUNZLElBQUU7Ozs7eUJBQUc7Z0JBQ0xDLElBQUksQ0FBQ0MsU0FBUyxDQUFDckIsS0FBSyxDQUFDOzs7Ozs7aUJBQ3BCOzs7OzthQUNELENBQUM7Q0FDYjtHQWpFS1AsUUFBUTtBQUFSQSxLQUFBQSxRQUFRO0FBbUVkLCtEQUFlQSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVnaXN0ZXIuanM/YTA5NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XHJcblxyXG5jb25zdCBSZWdpc3RlciA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICBwYXNzd29yZDogJycsXHJcbiAgICAgICAgZXJyb3I6ICcnLFxyXG4gICAgICAgIHN1Y2Nlc3M6ICcnLFxyXG4gICAgICAgIGJ1dHRvblRleHQ6ICdSZWdpc3RlcidcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHsgbmFtZSwgZW1haWwsIHBhc3N3b3JkLCBlcnJvciwgc3VjY2VzcywgYnV0dG9uVGV4dCB9ID0gc3RhdGU7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKG5hbWUpID0+IChlKSA9PiB7XHJcbiAgICAgICAgc2V0U3RhdGUoeyAuLi5zdGF0ZSwgW25hbWVdOiBlLnRhcmdldC52YWx1ZSwgZXJyb3I6ICcnLCBzdWNjZXNzOiAnJywgYnV0dG9uVGV4dDogJ1JlZ2lzdGVyJyB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlZ2lzdGVyRm9ybSA9ICgpID0+XHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgnbmFtZScpfVxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSB5b3VyIG5hbWVcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ2VtYWlsJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSB5b3VyIGVtYWlsXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKCdwYXNzd29yZCcpfVxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlR5cGUgeW91ciBwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS13YXJuaW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2J1dHRvblRleHR9XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPjtcclxuXHJcbiAgICByZXR1cm4gPExheW91dD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IG9mZnNldC1tZC0zXCI+XHJcbiAgICAgICAgICAgIDxoMT5SZWdpc3RlcjwvaDE+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICB7cmVnaXN0ZXJGb3JtKCl9XHJcbiAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICB7SlNPTi5zdHJpbmdpZnkoc3RhdGUpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9MYXlvdXQ+O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0ZXI7Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiTGF5b3V0IiwiUmVnaXN0ZXIiLCJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImVycm9yIiwic3VjY2VzcyIsImJ1dHRvblRleHQiLCJzdGF0ZSIsInNldFN0YXRlIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlU3VibWl0IiwicmVnaXN0ZXJGb3JtIiwiZm9ybSIsIm9uU3VibWl0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaW5wdXQiLCJvbkNoYW5nZSIsInR5cGUiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiIsImgxIiwiYnIiLCJociIsIkpTT04iLCJzdHJpbmdpZnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/register.js\n"));

/***/ })

});