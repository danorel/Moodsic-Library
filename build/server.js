/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/common/features/landing/components/Landing.tsx":
/*!************************************************************!*\
  !*** ./src/common/features/landing/components/Landing.tsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Landing)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Landing() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, \"Landing\");\n}\n\n\n//# sourceURL=webpack://client/./src/common/features/landing/components/Landing.tsx?");

/***/ }),

/***/ "./src/common/features/landing/epics.ts":
/*!**********************************************!*\
  !*** ./src/common/features/landing/epics.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"persistPlaylistsInLocalStorage\": () => (/* binding */ persistPlaylistsInLocalStorage),\n/* harmony export */   \"loadDataOnAppStart\": () => (/* binding */ loadDataOnAppStart)\n/* harmony export */ });\n/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ \"rxjs/operators\");\n/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var typesafe_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! typesafe-actions */ \"typesafe-actions\");\n/* harmony import */ var typesafe_actions__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(typesafe_actions__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _playlist_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../playlist/actions */ \"./src/common/features/playlist/actions.ts\");\n\n\n\nvar persistPlaylistsInLocalStorage = function (action$, store, _a) {\n    var localStorage = _a.localStorage;\n    return action$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.filter)((0,typesafe_actions__WEBPACK_IMPORTED_MODULE_1__.isActionOf)([_playlist_actions__WEBPACK_IMPORTED_MODULE_2__.loadPlaylistsAsync.success, _playlist_actions__WEBPACK_IMPORTED_MODULE_2__.createPlaylistsAsync.success, _playlist_actions__WEBPACK_IMPORTED_MODULE_2__.deletePlaylistAsync.success])), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.tap)(function (_) {\n        // handle side-effects\n        localStorage.set('playlists', store.value.playlists.playlists);\n    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.ignoreElements)());\n};\nvar loadDataOnAppStart = function (action$, _store) { return action$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.first)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(_playlist_actions__WEBPACK_IMPORTED_MODULE_2__.loadPlaylistsAsync.request)); };\n\n\n//# sourceURL=webpack://client/./src/common/features/landing/epics.ts?");

/***/ }),

/***/ "./src/common/features/playlist/actions.ts":
/*!*************************************************!*\
  !*** ./src/common/features/playlist/actions.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadPlaylistsAsync\": () => (/* binding */ loadPlaylistsAsync),\n/* harmony export */   \"createPlaylistsAsync\": () => (/* binding */ createPlaylistsAsync),\n/* harmony export */   \"deletePlaylistAsync\": () => (/* binding */ deletePlaylistAsync)\n/* harmony export */ });\n/* harmony import */ var typesafe_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! typesafe-actions */ \"typesafe-actions\");\n/* harmony import */ var typesafe_actions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(typesafe_actions__WEBPACK_IMPORTED_MODULE_0__);\n\nvar loadPlaylistsAsync = (0,typesafe_actions__WEBPACK_IMPORTED_MODULE_0__.createAsyncAction)('LOAD_PLAYLIST_REQUEST', 'LOAD_PLAYLIST_SUCCESS', 'LOAD_PLAYLIST_FAILURE')();\nvar createPlaylistsAsync = (0,typesafe_actions__WEBPACK_IMPORTED_MODULE_0__.createAsyncAction)('CREATE_PLAYLIST_REQUEST', 'CREATE_PLAYLIST_SUCCESS', 'CREATE_PLAYLIST_FAILURE')();\nvar deletePlaylistAsync = (0,typesafe_actions__WEBPACK_IMPORTED_MODULE_0__.createAsyncAction)('DELETE_PLAYLIST_REQUEST', 'DELETE_PLAYLIST_SUCCESS', 'DELETE_PLAYLIST_FAILURE')();\n\n\n//# sourceURL=webpack://client/./src/common/features/playlist/actions.ts?");

/***/ }),

/***/ "./src/common/features/playlist/epics.ts":
/*!***********************************************!*\
  !*** ./src/common/features/playlist/epics.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadPlaylistsEpic\": () => (/* binding */ loadPlaylistsEpic),\n/* harmony export */   \"createPlaylistEpic\": () => (/* binding */ createPlaylistEpic),\n/* harmony export */   \"deletePlaylistEpic\": () => (/* binding */ deletePlaylistEpic)\n/* harmony export */ });\n/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ \"rxjs\");\n/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ \"rxjs/operators\");\n/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var typesafe_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! typesafe-actions */ \"typesafe-actions\");\n/* harmony import */ var typesafe_actions__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(typesafe_actions__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions */ \"./src/common/features/playlist/actions.ts\");\n\n\n\n\nvar loadPlaylistsEpic = function (action$, _state$, _a) {\n    var api = _a.api;\n    return action$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)((0,typesafe_actions__WEBPACK_IMPORTED_MODULE_2__.isActionOf)(_actions__WEBPACK_IMPORTED_MODULE_3__.loadPlaylistsAsync.request)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.switchMap)(function () {\n        return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.from)(api.playlists.loadPlaylists()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(_actions__WEBPACK_IMPORTED_MODULE_3__.loadPlaylistsAsync.success), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(function (message) { return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(_actions__WEBPACK_IMPORTED_MODULE_3__.loadPlaylistsAsync.failure(message)); }));\n    }));\n};\nvar createPlaylistEpic = function (action$, _state$, _a) {\n    var api = _a.api;\n    return action$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)((0,typesafe_actions__WEBPACK_IMPORTED_MODULE_2__.isActionOf)(_actions__WEBPACK_IMPORTED_MODULE_3__.createPlaylistsAsync.request)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.switchMap)(function (action) {\n        return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.from)(api.playlists.createPlaylist(action.payload)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(_actions__WEBPACK_IMPORTED_MODULE_3__.createPlaylistsAsync.success), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(function (message) { return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(_actions__WEBPACK_IMPORTED_MODULE_3__.createPlaylistsAsync.failure(message)); }));\n    }));\n};\nvar deletePlaylistEpic = function (action$, _state$, _a) {\n    var api = _a.api, toast = _a.toast;\n    return action$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)((0,typesafe_actions__WEBPACK_IMPORTED_MODULE_2__.isActionOf)(_actions__WEBPACK_IMPORTED_MODULE_3__.deletePlaylistAsync.request)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.switchMap)(function (action) {\n        return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.from)(api.playlists.deletePlaylist(action.payload)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(_actions__WEBPACK_IMPORTED_MODULE_3__.deletePlaylistAsync.success), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(function (message) {\n            toast.error(message);\n            return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(_actions__WEBPACK_IMPORTED_MODULE_3__.deletePlaylistAsync.failure(action.payload));\n        }));\n    }));\n};\n\n\n//# sourceURL=webpack://client/./src/common/features/playlist/epics.ts?");

/***/ }),

/***/ "./src/common/features/playlist/reducer.ts":
/*!*************************************************!*\
  !*** ./src/common/features/playlist/reducer.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var typesafe_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! typesafe-actions */ \"typesafe-actions\");\n/* harmony import */ var typesafe_actions__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(typesafe_actions__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ \"./src/common/features/playlist/actions.ts\");\nvar __spreadArray = (undefined && undefined.__spreadArray) || function (to, from) {\n    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)\n        to[j] = from[i];\n    return to;\n};\n\n\n\nvar reducer = (0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({\n    isLoadingPlaylists: (0,typesafe_actions__WEBPACK_IMPORTED_MODULE_1__.createReducer)(false)\n        .handleAction([_actions__WEBPACK_IMPORTED_MODULE_2__.loadPlaylistsAsync.request], function (_state, _action) { return true; })\n        .handleAction([_actions__WEBPACK_IMPORTED_MODULE_2__.loadPlaylistsAsync.success, _actions__WEBPACK_IMPORTED_MODULE_2__.loadPlaylistsAsync.failure], function (_state, _action) { return false; }),\n    playlists: (0,typesafe_actions__WEBPACK_IMPORTED_MODULE_1__.createReducer)([])\n        .handleAction([_actions__WEBPACK_IMPORTED_MODULE_2__.loadPlaylistsAsync.success, _actions__WEBPACK_IMPORTED_MODULE_2__.createPlaylistsAsync.success, _actions__WEBPACK_IMPORTED_MODULE_2__.deletePlaylistAsync.success], function (_state, action) { return action.payload; })\n        .handleAction(_actions__WEBPACK_IMPORTED_MODULE_2__.createPlaylistsAsync.request, function (state, action) { return __spreadArray(__spreadArray([], state), [action.payload]); })\n        .handleAction(_actions__WEBPACK_IMPORTED_MODULE_2__.deletePlaylistAsync.request, function (state, action) { return state.filter(function (i) { return i.id !== action.payload.id; }); })\n        .handleAction(_actions__WEBPACK_IMPORTED_MODULE_2__.deletePlaylistAsync.failure, function (state, action) { return state.concat(action.payload); }),\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reducer);\n\n\n//# sourceURL=webpack://client/./src/common/features/playlist/reducer.ts?");

/***/ }),

/***/ "./src/common/features/user/actions.ts":
/*!*********************************************!*\
  !*** ./src/common/features/user/actions.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadUserAsync\": () => (/* binding */ loadUserAsync),\n/* harmony export */   \"createUserAsync\": () => (/* binding */ createUserAsync)\n/* harmony export */ });\n/* harmony import */ var typesafe_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! typesafe-actions */ \"typesafe-actions\");\n/* harmony import */ var typesafe_actions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(typesafe_actions__WEBPACK_IMPORTED_MODULE_0__);\n\nvar loadUserAsync = (0,typesafe_actions__WEBPACK_IMPORTED_MODULE_0__.createAsyncAction)('LOAD_PLAYLIST_REQUEST', 'LOAD_USER_SUCCESS', 'LOAD_PLAYLIST_FAILURE')();\nvar createUserAsync = (0,typesafe_actions__WEBPACK_IMPORTED_MODULE_0__.createAsyncAction)('CREATE_USER_REQUEST', 'CREATE_USER_SUCCESS', 'CREATE_USER_FAILURE')();\n\n\n//# sourceURL=webpack://client/./src/common/features/user/actions.ts?");

/***/ }),

/***/ "./src/common/features/user/components/index.tsx":
/*!*******************************************************!*\
  !*** ./src/common/features/user/components/index.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _modules_Tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/Tabs */ \"./src/common/features/user/components/modules/Tabs.tsx\");\n/* harmony import */ var _modules_Title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/Title */ \"./src/common/features/user/components/modules/Title.tsx\");\n/* harmony import */ var _modules_Form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/Form */ \"./src/common/features/user/components/modules/Form.tsx\");\n/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../selectors */ \"./src/common/features/user/selectors.ts\");\n/* harmony import */ var _stylesheets_layout_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./stylesheets/layout.css */ \"./src/common/features/user/components/stylesheets/layout.css\");\n/* harmony import */ var _stylesheets_layout_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_stylesheets_layout_css__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\nvar mapStateToProps = function (state) { return ({\n    isLoading: state.user.isLoadingUser,\n    user: _selectors__WEBPACK_IMPORTED_MODULE_6__.selectUser(state),\n}); };\nvar dispatchProps = {};\nvar AuthenticationView = function (_a) {\n    var user = _a.user, isLoading = _a.isLoading;\n    var _b = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''), email = _b[0], setEmail = _b[1];\n    var _c = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true), isSignIn = _c[0], setSignIn = _c[1];\n    var onClickForm = function () {\n        console.log('Submitting form');\n        console.log(user);\n    };\n    var onClickTab = function (newSignIn) { return setSignIn(newSignIn); };\n    var onChangeEmail = function (event) { return setEmail(event.target.value); };\n    if (isLoading)\n        return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", { style: { textAlign: 'center' } }, \"Loading user...\");\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", { className: (_stylesheets_layout_css__WEBPACK_IMPORTED_MODULE_7___default().div__background) },\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", { className: (_stylesheets_layout_css__WEBPACK_IMPORTED_MODULE_7___default().div__inner) },\n                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", { className: (_stylesheets_layout_css__WEBPACK_IMPORTED_MODULE_7___default().div__frame) },\n                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Grid, { container: true, direction: \"column\", justify: \"center\", alignItems: \"center\", spacing: 3 },\n                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Grid, { item: true },\n                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_modules_Tabs__WEBPACK_IMPORTED_MODULE_3__.default, { isSignIn: isSignIn, onClick: onClickTab })),\n                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Grid, { item: true },\n                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_modules_Title__WEBPACK_IMPORTED_MODULE_4__.default, { isSignIn: isSignIn })),\n                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Grid, { item: true },\n                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_modules_Form__WEBPACK_IMPORTED_MODULE_5__.default, { value: email, isSignIn: isSignIn, onClick: onClickForm, onChange: onChangeEmail }))))))));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, dispatchProps)(AuthenticationView));\n\n\n//# sourceURL=webpack://client/./src/common/features/user/components/index.tsx?");

/***/ }),

/***/ "./src/common/features/user/components/modules/Form.tsx":
/*!**************************************************************!*\
  !*** ./src/common/features/user/components/modules/Form.tsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FormView)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _stylesheets_content_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stylesheets/content.css */ \"./src/common/features/user/components/stylesheets/content.css\");\n/* harmony import */ var _stylesheets_content_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_stylesheets_content_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction FormView(_a) {\n    var value = _a.value, isSignIn = _a.isSignIn, onClick = _a.onClick, onChange = _a.onChange;\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { container: true, direction: \"column\", justify: \"center\", alignItems: \"center\", spacing: 2 },\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true },\n                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", { className: (_stylesheets_content_css__WEBPACK_IMPORTED_MODULE_2___default().input__field), value: value, placeholder: 'Pass e-mail...', onChange: onChange })),\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true },\n                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", { className: (_stylesheets_content_css__WEBPACK_IMPORTED_MODULE_2___default().button_sign_up), onClick: onClick }, isSignIn ? \"Let's go!\" : 'Register me!')))));\n}\n\n\n//# sourceURL=webpack://client/./src/common/features/user/components/modules/Form.tsx?");

/***/ }),

/***/ "./src/common/features/user/components/modules/Tabs.tsx":
/*!**************************************************************!*\
  !*** ./src/common/features/user/components/modules/Tabs.tsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TabsView)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _stylesheets_tab_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stylesheets/tab.css */ \"./src/common/features/user/components/stylesheets/tab.css\");\n/* harmony import */ var _stylesheets_tab_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_stylesheets_tab_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction TabsView(_a) {\n    var isSignIn = _a.isSignIn, onClick = _a.onClick;\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", { className: (_stylesheets_tab_css__WEBPACK_IMPORTED_MODULE_2___default().div__tab) },\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { container: true, direction: \"row\", justify: \"space-between\", alignItems: \"flex-start\", spacing: 2 },\n                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true },\n                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", { className: (_stylesheets_tab_css__WEBPACK_IMPORTED_MODULE_2___default().div__tab_sign_in), onClick: function () { return onClick(true); } }, \"Sign In\"),\n                    isSignIn ? react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", { className: (_stylesheets_tab_css__WEBPACK_IMPORTED_MODULE_2___default().div__tab_divider) }) : null),\n                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true },\n                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", { className: (_stylesheets_tab_css__WEBPACK_IMPORTED_MODULE_2___default().div__tab_sign_up), onClick: function () { return onClick(false); } }, \"Sign Up\"),\n                    !isSignIn ? react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", { className: (_stylesheets_tab_css__WEBPACK_IMPORTED_MODULE_2___default().div__tab_divider) }) : null)))));\n}\n\n\n//# sourceURL=webpack://client/./src/common/features/user/components/modules/Tabs.tsx?");

/***/ }),

/***/ "./src/common/features/user/components/modules/Title.tsx":
/*!***************************************************************!*\
  !*** ./src/common/features/user/components/modules/Title.tsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TitleView)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _stylesheets_content_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stylesheets/content.css */ \"./src/common/features/user/components/stylesheets/content.css\");\n/* harmony import */ var _stylesheets_content_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_stylesheets_content_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction TitleView(_a) {\n    var isSignIn = _a.isSignIn;\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { container: true, direction: \"row\", justify: \"center\", alignItems: \"center\" },\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true },\n                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", { className: (_stylesheets_content_css__WEBPACK_IMPORTED_MODULE_2___default().div__title) }, isSignIn ? 'Glad to see you again!' : 'Hello, musiclover :)')))));\n}\n\n\n//# sourceURL=webpack://client/./src/common/features/user/components/modules/Title.tsx?");

/***/ }),

/***/ "./src/common/features/user/epics.ts":
/*!*******************************************!*\
  !*** ./src/common/features/user/epics.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadUserEpic\": () => (/* binding */ loadUserEpic),\n/* harmony export */   \"createUserEpic\": () => (/* binding */ createUserEpic)\n/* harmony export */ });\n/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ \"rxjs\");\n/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ \"rxjs/operators\");\n/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var typesafe_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! typesafe-actions */ \"typesafe-actions\");\n/* harmony import */ var typesafe_actions__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(typesafe_actions__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions */ \"./src/common/features/user/actions.ts\");\n\n\n\n\nvar loadUserEpic = function (action$, _state$, _a) {\n    var api = _a.api;\n    return action$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)((0,typesafe_actions__WEBPACK_IMPORTED_MODULE_2__.isActionOf)(_actions__WEBPACK_IMPORTED_MODULE_3__.loadUserAsync.request)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.switchMap)(function () {\n        return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.from)(api.user.loadUser()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(_actions__WEBPACK_IMPORTED_MODULE_3__.loadUserAsync.success), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(function (message) { return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(_actions__WEBPACK_IMPORTED_MODULE_3__.loadUserAsync.failure(message)); }));\n    }));\n};\nvar createUserEpic = function (action$, _state$, _a) {\n    var api = _a.api;\n    return action$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)((0,typesafe_actions__WEBPACK_IMPORTED_MODULE_2__.isActionOf)(_actions__WEBPACK_IMPORTED_MODULE_3__.createUserAsync.request)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.switchMap)(function (action) {\n        return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.from)(api.user.createUser(action.payload)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(_actions__WEBPACK_IMPORTED_MODULE_3__.createUserAsync.success), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(function (message) { return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(_actions__WEBPACK_IMPORTED_MODULE_3__.createUserAsync.failure(message)); }));\n    }));\n};\n\n\n//# sourceURL=webpack://client/./src/common/features/user/epics.ts?");

/***/ }),

/***/ "./src/common/features/user/reducer.ts":
/*!*********************************************!*\
  !*** ./src/common/features/user/reducer.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var typesafe_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! typesafe-actions */ \"typesafe-actions\");\n/* harmony import */ var typesafe_actions__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(typesafe_actions__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ \"./src/common/features/user/actions.ts\");\nvar __assign = (undefined && undefined.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\n\n\n\nvar reducer = (0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({\n    isLoadingUser: (0,typesafe_actions__WEBPACK_IMPORTED_MODULE_1__.createReducer)(false)\n        .handleAction([_actions__WEBPACK_IMPORTED_MODULE_2__.loadUserAsync.request], function (_state) { return true; })\n        .handleAction([_actions__WEBPACK_IMPORTED_MODULE_2__.loadUserAsync.success, _actions__WEBPACK_IMPORTED_MODULE_2__.loadUserAsync.failure], function (_state, _action) { return false; }),\n    user: (0,typesafe_actions__WEBPACK_IMPORTED_MODULE_1__.createReducer)({})\n        .handleAction(_actions__WEBPACK_IMPORTED_MODULE_2__.createUserAsync.request, function (state, _action) { return (__assign(__assign({}, state), { isLoading: true })); })\n        .handleAction([_actions__WEBPACK_IMPORTED_MODULE_2__.loadUserAsync.success, _actions__WEBPACK_IMPORTED_MODULE_2__.createUserAsync.success], function (state, action) { return (__assign(__assign({}, state), action.payload)); })\n        .handleAction(_actions__WEBPACK_IMPORTED_MODULE_2__.createUserAsync.failure, function (state, _action) { return (__assign(__assign({}, state), { email: '', isLoading: false })); }),\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reducer);\n\n\n//# sourceURL=webpack://client/./src/common/features/user/reducer.ts?");

/***/ }),

/***/ "./src/common/features/user/selectors.ts":
/*!***********************************************!*\
  !*** ./src/common/features/user/selectors.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"selectUser\": () => (/* binding */ selectUser)\n/* harmony export */ });\nvar selectUser = function (state) { return state.user.user; };\n\n\n//# sourceURL=webpack://client/./src/common/features/user/selectors.ts?");

/***/ }),

/***/ "./src/common/routes/Main.tsx":
/*!************************************!*\
  !*** ./src/common/routes/Main.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Main)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ \"react-router\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _features_landing_components_Landing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../features/landing/components/Landing */ \"./src/common/features/landing/components/Landing.tsx\");\n/* harmony import */ var _features_user_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../features/user/components */ \"./src/common/features/user/components/index.tsx\");\n/* harmony import */ var _routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../routing */ \"./src/common/routing.ts\");\n\n\n\n\n\nfunction Main() {\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router__WEBPACK_IMPORTED_MODULE_1__.Switch, null,\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router__WEBPACK_IMPORTED_MODULE_1__.Route, { exact: true, path: (0,_routing__WEBPACK_IMPORTED_MODULE_4__.getPath)('home'), component: _features_landing_components_Landing__WEBPACK_IMPORTED_MODULE_2__.default }),\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router__WEBPACK_IMPORTED_MODULE_1__.Route, { path: (0,_routing__WEBPACK_IMPORTED_MODULE_4__.getPath)('authentication'), component: _features_user_components__WEBPACK_IMPORTED_MODULE_3__.default }))));\n}\n\n\n//# sourceURL=webpack://client/./src/common/routes/Main.tsx?");

/***/ }),

/***/ "./src/common/routing.ts":
/*!*******************************!*\
  !*** ./src/common/routing.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getPath\": () => (/* binding */ getPath)\n/* harmony export */ });\nvar pathsMap = {\n    home: function () { return '/'; },\n    cards: function (userName) { return \"/\" + userName + \"/cards\"; },\n    playlist: function (userName, playlistId) { return \"/\" + userName + \"/playlist/\" + playlistId; },\n    playground: function (userName) { return \"/\" + userName + \"/playground\"; },\n    authentication: function () { return '/authentication'; },\n};\nvar getPath = function (route) {\n    var params = [];\n    for (var _i = 1; _i < arguments.length; _i++) {\n        params[_i - 1] = arguments[_i];\n    }\n    var pathCb = pathsMap[route];\n    return pathCb.apply(void 0, params);\n};\n\n\n//# sourceURL=webpack://client/./src/common/routing.ts?");

/***/ }),

/***/ "./src/common/services/api.ts":
/*!************************************!*\
  !*** ./src/common/services/api.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadPlaylists\": () => (/* binding */ loadPlaylists),\n/* harmony export */   \"createPlaylist\": () => (/* binding */ createPlaylist),\n/* harmony export */   \"deletePlaylist\": () => (/* binding */ deletePlaylist),\n/* harmony export */   \"loadUser\": () => (/* binding */ loadUser),\n/* harmony export */   \"createUser\": () => (/* binding */ createUser)\n/* harmony export */ });\n/* harmony import */ var _local_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./local-storage */ \"./src/common/services/local-storage.ts\");\n\nvar user = _local_storage__WEBPACK_IMPORTED_MODULE_0__.get('user') || { email: '' };\nvar playlists = _local_storage__WEBPACK_IMPORTED_MODULE_0__.get('playlists') || [];\nvar TIMEOUT = 750;\nfunction loadPlaylists() {\n    return new Promise(function (resolve) {\n        setTimeout(function () {\n            resolve(playlists);\n        }, TIMEOUT);\n    });\n}\nfunction createPlaylist(playlist) {\n    return new Promise(function (resolve) {\n        setTimeout(function () {\n            playlists = playlists.concat(playlist);\n            resolve(playlists);\n        }, TIMEOUT);\n    });\n}\nfunction deletePlaylist(playlist) {\n    return new Promise(function (resolve) {\n        setTimeout(function () {\n            playlists = playlists.filter(function (i) { return i.id !== playlist.id; });\n            resolve(playlists);\n        }, TIMEOUT);\n    });\n}\nfunction loadUser() {\n    return new Promise(function (resolve) {\n        setTimeout(function () {\n            resolve(user);\n        }, TIMEOUT);\n    });\n}\nfunction createUser(newUser) {\n    return new Promise(function (resolve) {\n        setTimeout(function () {\n            resolve(newUser);\n        }, TIMEOUT);\n    });\n}\n\n\n//# sourceURL=webpack://client/./src/common/services/api.ts?");

/***/ }),

/***/ "./src/common/services/index.ts":
/*!**************************************!*\
  !*** ./src/common/services/index.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ \"./src/common/services/api.ts\");\n/* harmony import */ var _local_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./local-storage */ \"./src/common/services/local-storage.ts\");\n/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logger */ \"./src/common/services/logger.ts\");\n/* harmony import */ var _toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toast */ \"./src/common/services/toast.ts\");\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    logger: _logger__WEBPACK_IMPORTED_MODULE_2__,\n    localStorage: _local_storage__WEBPACK_IMPORTED_MODULE_1__,\n    toast: _toast__WEBPACK_IMPORTED_MODULE_3__,\n    api: {\n        user: _api__WEBPACK_IMPORTED_MODULE_0__,\n        playlists: _api__WEBPACK_IMPORTED_MODULE_0__,\n    },\n});\n\n\n//# sourceURL=webpack://client/./src/common/services/index.ts?");

/***/ }),

/***/ "./src/common/services/local-storage.ts":
/*!**********************************************!*\
  !*** ./src/common/services/local-storage.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"set\": () => (/* binding */ set),\n/* harmony export */   \"get\": () => (/* binding */ get)\n/* harmony export */ });\nvar version = process.env.APP_VERSION || 0;\nvar PREFIX = \"MY_APP_v\" + version + \"::\";\nfunction set(key, value) {\n    if (typeof window === 'undefined' || !localStorage) {\n        return;\n    }\n    try {\n        var serializedValue = JSON.stringify(value);\n        localStorage.setItem(PREFIX + key, serializedValue);\n    }\n    catch (error) {\n        throw new Error('Store serialization failed');\n    }\n}\nfunction get(key) {\n    if (typeof window === 'undefined' || !localStorage) {\n        return;\n    }\n    try {\n        var serializedValue = localStorage.getItem(PREFIX + key);\n        if (serializedValue == null) {\n            return;\n        }\n        return JSON.parse(serializedValue);\n    }\n    catch (error) {\n        throw new Error('Store deserialization failed');\n    }\n}\n\n\n//# sourceURL=webpack://client/./src/common/services/local-storage.ts?");

/***/ }),

/***/ "./src/common/services/logger.ts":
/*!***************************************!*\
  !*** ./src/common/services/logger.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// TODO: connect external client logging service here (e.g. Sentry SDK)\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ log: console.log });\n\n\n//# sourceURL=webpack://client/./src/common/services/logger.ts?");

/***/ }),

/***/ "./src/common/services/toast.ts":
/*!**************************************!*\
  !*** ./src/common/services/toast.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"error\": () => (/* binding */ error),\n/* harmony export */   \"info\": () => (/* binding */ info),\n/* harmony export */   \"success\": () => (/* binding */ success),\n/* harmony export */   \"warn\": () => (/* binding */ warn)\n/* harmony export */ });\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_0__);\n// import 'react-toastify/dist/ReactToastify.css';\n\nreact_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.configure();\nvar info = react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.info, warn = react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.warn, error = react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.error, success = react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.success;\n\n\n\n//# sourceURL=webpack://client/./src/common/services/toast.ts?");

/***/ }),

/***/ "./src/common/store/epics.ts":
/*!***********************************!*\
  !*** ./src/common/store/epics.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var redux_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-observable */ \"redux-observable\");\n/* harmony import */ var redux_observable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_observable__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _features_landing_epics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../features/landing/epics */ \"./src/common/features/landing/epics.ts\");\n/* harmony import */ var _features_playlist_epics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../features/playlist/epics */ \"./src/common/features/playlist/epics.ts\");\n/* harmony import */ var _features_user_epics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../features/user/epics */ \"./src/common/features/user/epics.ts\");\nvar __spreadArray = (undefined && undefined.__spreadArray) || function (to, from) {\n    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)\n        to[j] = from[i];\n    return to;\n};\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (redux_observable__WEBPACK_IMPORTED_MODULE_0__.combineEpics.apply(void 0, __spreadArray(__spreadArray(__spreadArray([], Object.values(_features_landing_epics__WEBPACK_IMPORTED_MODULE_1__)), Object.values(_features_user_epics__WEBPACK_IMPORTED_MODULE_3__)), Object.values(_features_playlist_epics__WEBPACK_IMPORTED_MODULE_2__))));\n\n\n//# sourceURL=webpack://client/./src/common/store/epics.ts?");

/***/ }),

/***/ "./src/common/store/index.ts":
/*!***********************************!*\
  !*** ./src/common/store/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"epicMiddleware\": () => (/* binding */ epicMiddleware),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-observable */ \"redux-observable\");\n/* harmony import */ var redux_observable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_observable__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services */ \"./src/common/services/index.ts\");\n/* harmony import */ var _epics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./epics */ \"./src/common/store/epics.ts\");\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducer */ \"./src/common/store/reducer.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ \"./src/common/store/utils.ts\");\n\n\n\n\n\n\nvar epicMiddleware = (0,redux_observable__WEBPACK_IMPORTED_MODULE_1__.createEpicMiddleware)({\n    dependencies: _services__WEBPACK_IMPORTED_MODULE_2__.default,\n});\n// configure middlewares\nvar middlewares = [epicMiddleware];\n// compose enhancers\nvar enhancer = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.composeEnhancers)(redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware.apply(void 0, middlewares));\nvar initialState = {};\n// create store\nvar store = (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)((0,_reducer__WEBPACK_IMPORTED_MODULE_4__.default)(), initialState, enhancer);\nepicMiddleware.run(_epics__WEBPACK_IMPORTED_MODULE_3__.default);\n// export store singleton instance\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);\n\n\n//# sourceURL=webpack://client/./src/common/store/index.ts?");

/***/ }),

/***/ "./src/common/store/reducer.ts":
/*!*************************************!*\
  !*** ./src/common/store/reducer.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _features_playlist_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../features/playlist/reducer */ \"./src/common/features/playlist/reducer.ts\");\n/* harmony import */ var _features_user_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../features/user/reducer */ \"./src/common/features/user/reducer.ts\");\n\n\n\nvar rootReducer = function () {\n    return (0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({\n        playlists: _features_playlist_reducer__WEBPACK_IMPORTED_MODULE_1__.default,\n        user: _features_user_reducer__WEBPACK_IMPORTED_MODULE_2__.default,\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rootReducer);\n\n\n//# sourceURL=webpack://client/./src/common/store/reducer.ts?");

/***/ }),

/***/ "./src/common/store/utils.ts":
/*!***********************************!*\
  !*** ./src/common/store/utils.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"composeEnhancers\": () => (/* binding */ composeEnhancers)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n\nvar window = __webpack_require__(/*! global/window */ \"global/window\");\nvar composeEnhancers = ( true && typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || redux__WEBPACK_IMPORTED_MODULE_0__.compose;\n\n\n//# sourceURL=webpack://client/./src/common/store/utils.ts?");

/***/ }),

/***/ "./src/server/index.tsx":
/*!******************************!*\
  !*** ./src/server/index.tsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var common_routes_Main__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! common/routes/Main */ \"./src/common/routes/Main.tsx\");\n/* harmony import */ var common_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! common/store */ \"./src/common/store/index.ts\");\n\n\n\n\n\n\n\nfunction main() {\n    var app = express__WEBPACK_IMPORTED_MODULE_4___default()();\n    app.use(express__WEBPACK_IMPORTED_MODULE_4___default().static('build'));\n    app.get('/*', function (req, res, next) {\n        var appHTML = react_dom_server__WEBPACK_IMPORTED_MODULE_1___default().renderToString(react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, { store: common_store__WEBPACK_IMPORTED_MODULE_6__.default },\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.StaticRouter, { location: req.path, context: {} },\n                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(common_routes_Main__WEBPACK_IMPORTED_MODULE_5__.default, null))));\n        var appInitialState = JSON.stringify(common_store__WEBPACK_IMPORTED_MODULE_6__.default.getState()).replace(/</g, '\\\\u003c');\n        res.send(indexHTML(appHTML, appInitialState));\n        res.end();\n        next();\n    });\n    var server = app.listen(5000, function () { return console.log('Listening to the server onn port 5000.'); });\n    if (false) {}\n}\nvar indexHTML = function (template, initialState) { return \"\\n    <!DOCTYPE html>\\n    <html lang=\\\"en\\\">\\n        <head>\\n            <meta charset=\\\"utf-8\\\" />\\n            <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1\\\" />\\n            <meta name=\\\"theme-color\\\" content=\\\"#000000\\\" />\\n            <meta name=\\\"description\\\" content=\\\"Listen music with emotions\\\" />\\n            <title>Moodsic</title>\\n        </head>\\n        <body>\\n             <main id=\\\"root\\\">\" + template + \"</main>\\n             <script>\\n                 window[\\\"__PRELOADED_STATE__\\\"] = \" + initialState + \"\\n             </script>\\n             <script type=\\\"application/javascript\\\" src=\\\"bundle.js\\\"></script>\\n        </body>\\n    </html>\\n\"; };\nmain();\n\n\n//# sourceURL=webpack://client/./src/server/index.tsx?");

/***/ }),

/***/ "./src/common/features/user/components/stylesheets/content.css":
/*!*********************************************************************!*\
  !*** ./src/common/features/user/components/stylesheets/content.css ***!
  \*********************************************************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected token (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> .input__field {\\n| \\tbackground: #d1f7ff;\\n| \\tborder-radius: 10px;\");\n\n//# sourceURL=webpack://client/./src/common/features/user/components/stylesheets/content.css?");

/***/ }),

/***/ "./src/common/features/user/components/stylesheets/layout.css":
/*!********************************************************************!*\
  !*** ./src/common/features/user/components/stylesheets/layout.css ***!
  \********************************************************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected token (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> .div__background {\\n| \\tmin-height: 100vh;\\n| \\tmin-width: 100vw;\");\n\n//# sourceURL=webpack://client/./src/common/features/user/components/stylesheets/layout.css?");

/***/ }),

/***/ "./src/common/features/user/components/stylesheets/tab.css":
/*!*****************************************************************!*\
  !*** ./src/common/features/user/components/stylesheets/tab.css ***!
  \*****************************************************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected token (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> .div__tab {\\n| \\twidth: 100%;\\n| }\");\n\n//# sourceURL=webpack://client/./src/common/features/user/components/stylesheets/tab.css?");

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/core");;

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");;

/***/ }),

/***/ "global/window":
/*!********************************!*\
  !*** external "global/window" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("global/window");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom/server");;

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-router");;

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-router-dom");;

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-toastify");;

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux");;

/***/ }),

/***/ "redux-observable":
/*!***********************************!*\
  !*** external "redux-observable" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-observable");;

/***/ }),

/***/ "rxjs":
/*!***********************!*\
  !*** external "rxjs" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("rxjs");;

/***/ }),

/***/ "rxjs/operators":
/*!*********************************!*\
  !*** external "rxjs/operators" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("rxjs/operators");;

/***/ }),

/***/ "typesafe-actions":
/*!***********************************!*\
  !*** external "typesafe-actions" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("typesafe-actions");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/server/index.tsx");
/******/ 	
/******/ })()
;