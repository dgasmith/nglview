define(function() { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

	// This file contains the javascript that is run when the notebook is loaded.
	// It contains some requirejs configuration and the `load_ipython_extension`
	// which is required for any notebook extension.
	// Configure requirejs
	if (window.require) {
	    window.require.config({
	        map: {
	            "*": {
	                "nglview-js-widgets": "nbextensions/nglview-js-widgets/index",
	            }
	        }
	    });
	}
	// Export the required load_ipython_extention
	module.exports = {
	    load_ipython_extension: function () { }
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZW5zaW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2V4dGVuc2lvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2RUFBNkU7QUFDN0UsNEVBQTRFO0FBQzVFLGdEQUFnRDtBQUVoRCxzQkFBc0I7QUFDdEIsSUFBSSxNQUFNLENBQUMsT0FBTyxFQUFFO0lBQ2hCLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1FBQ2xCLEdBQUcsRUFBRTtZQUNELEdBQUcsRUFBRztnQkFDRixvQkFBb0IsRUFBRSx1Q0FBdUM7YUFDaEU7U0FDSjtLQUNKLENBQUMsQ0FBQztDQUNOO0FBRUQsNkNBQTZDO0FBQzdDLE1BQU0sQ0FBQyxPQUFPLEdBQUc7SUFDYixzQkFBc0IsRUFBRSxjQUFZLENBQUM7Q0FDeEMsQ0FBQyJ9

/***/ })
/******/ ])});;