/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- *
 *      =====================^==================^=====================      *
 *                     (c) 2019 jao Minecraft Server                        *
 *                           https://jaoafa.com                             *
 *      ==============================================================      *
 * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- * -- */
(function () {
  'use strict';

  var hamburger = document.getElementsByClassName('p-globalNav__hamburger')[0];
  var globalNavigation = document.getElementsByClassName('p-globalNav__container')[0];
  hamburger.addEventListener('click', function () {
    hamburger.querySelector('span').classList.toggle('is-view');
    globalNavigation.classList.toggle('is-view');
  });
  var globalNavigationChildItems = document.getElementsByClassName('p-globalNavItem');

  var _loop = function _loop(index) {
    globalNavigationChildItems[index].addEventListener('click', function () {
      for (var count = 0; count < globalNavigationChildItems.length; count++) {
        var elem = globalNavigationChildItems[count].querySelector('.p-globalNavItem__accordion');

        if (elem != null) {
          if (count === index) {
            elem.classList.toggle('is-view');
          } else {
            elem.classList.remove('is-view');
          }
        }
      }
    });
  };

  for (var index = 0; index < globalNavigationChildItems.length; index++) {
    _loop(index);
  }
})();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21haW4uanMiXSwibmFtZXMiOlsiaGFtYnVyZ2VyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiZ2xvYmFsTmF2aWdhdGlvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiZ2xvYmFsTmF2aWdhdGlvbkNoaWxkSXRlbXMiLCJpbmRleCIsImNvdW50IiwibGVuZ3RoIiwiZWxlbSIsInJlbW92ZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBOzs7Ozs7QUFPQSxDQUFDLFlBQVc7QUFFVjs7QUFFQSxNQUFJQSxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0Msc0JBQVQsQ0FBaUMsd0JBQWpDLEVBQTRELENBQTVELENBQWhCO0FBQ0EsTUFBSUMsZ0JBQWdCLEdBQUdGLFFBQVEsQ0FBQ0Msc0JBQVQsQ0FBaUMsd0JBQWpDLEVBQTRELENBQTVELENBQXZCO0FBQ0FGLFdBQVMsQ0FBQ0ksZ0JBQVYsQ0FBNEIsT0FBNUIsRUFBcUMsWUFBVztBQUM5Q0osYUFBUyxDQUFDSyxhQUFWLENBQXlCLE1BQXpCLEVBQWtDQyxTQUFsQyxDQUE0Q0MsTUFBNUMsQ0FBb0QsU0FBcEQ7QUFDQUosb0JBQWdCLENBQUNHLFNBQWpCLENBQTJCQyxNQUEzQixDQUFtQyxTQUFuQztBQUNELEdBSEQ7QUFLQSxNQUFJQywwQkFBMEIsR0FBR1AsUUFBUSxDQUFDQyxzQkFBVCxDQUFpQyxpQkFBakMsQ0FBakM7O0FBWFUsNkJBWURPLEtBWkM7QUFhUkQsOEJBQTBCLENBQUNDLEtBQUQsQ0FBMUIsQ0FBa0NMLGdCQUFsQyxDQUFvRCxPQUFwRCxFQUE2RCxZQUFXO0FBQ3RFLFdBQUssSUFBSU0sS0FBSyxHQUFHLENBQWpCLEVBQW9CQSxLQUFLLEdBQUdGLDBCQUEwQixDQUFDRyxNQUF2RCxFQUErREQsS0FBSyxFQUFwRSxFQUF5RTtBQUN2RSxZQUFJRSxJQUFJLEdBQUdKLDBCQUEwQixDQUFDRSxLQUFELENBQTFCLENBQWtDTCxhQUFsQyxDQUFpRCw2QkFBakQsQ0FBWDs7QUFDQSxZQUFJTyxJQUFJLElBQUksSUFBWixFQUFtQjtBQUNqQixjQUFJRixLQUFLLEtBQUtELEtBQWQsRUFBc0I7QUFDcEJHLGdCQUFJLENBQUNOLFNBQUwsQ0FBZUMsTUFBZixDQUF1QixTQUF2QjtBQUNELFdBRkQsTUFHSztBQUNISyxnQkFBSSxDQUFDTixTQUFMLENBQWVPLE1BQWYsQ0FBdUIsU0FBdkI7QUFDRDtBQUNGO0FBQ0Y7QUFDRixLQVpEO0FBYlE7O0FBWVYsT0FBSyxJQUFJSixLQUFLLEdBQUcsQ0FBakIsRUFBb0JBLEtBQUssR0FBR0QsMEJBQTBCLENBQUNHLE1BQXZELEVBQStERixLQUFLLEVBQXBFLEVBQXlFO0FBQUEsVUFBaEVBLEtBQWdFO0FBY3hFO0FBRUYsQ0E1QkQsSSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvanMvbWFpbi5qc1wiKTtcbiIsIi8qIC0tICogLS0gKiAtLSAqIC0tICogLS0gKiAtLSAqIC0tICogLS0gKiAtLSAqIC0tICogLS0gKiAtLSAqIC0tICogLS0gKiAtLSAqXHJcbiAqICAgICAgPT09PT09PT09PT09PT09PT09PT09Xj09PT09PT09PT09PT09PT09PV49PT09PT09PT09PT09PT09PT09PT0gICAgICAqXHJcbiAqICAgICAgICAgICAgICAgICAgICAgKGMpIDIwMTkgamFvIE1pbmVjcmFmdCBTZXJ2ZXIgICAgICAgICAgICAgICAgICAgICAgICAqXHJcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgaHR0cHM6Ly9qYW9hZmEuY29tICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXHJcbiAqICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gICAgICAqXHJcbiAqIC0tICogLS0gKiAtLSAqIC0tICogLS0gKiAtLSAqIC0tICogLS0gKiAtLSAqIC0tICogLS0gKiAtLSAqIC0tICogLS0gKiAtLSAqL1xyXG5cclxuKGZ1bmN0aW9uKCkge1xyXG5cclxuICAndXNlIHN0cmljdCc7XHJcblxyXG4gIHZhciBoYW1idXJnZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCAncC1nbG9iYWxOYXZfX2hhbWJ1cmdlcicgKVswXTtcclxuICB2YXIgZ2xvYmFsTmF2aWdhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoICdwLWdsb2JhbE5hdl9fY29udGFpbmVyJyApWzBdO1xyXG4gIGhhbWJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgIGhhbWJ1cmdlci5xdWVyeVNlbGVjdG9yKCAnc3BhbicgKS5jbGFzc0xpc3QudG9nZ2xlKCAnaXMtdmlldycgKTtcclxuICAgIGdsb2JhbE5hdmlnYXRpb24uY2xhc3NMaXN0LnRvZ2dsZSggJ2lzLXZpZXcnICk7XHJcbiAgfSk7XHJcblxyXG4gIHZhciBnbG9iYWxOYXZpZ2F0aW9uQ2hpbGRJdGVtcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoICdwLWdsb2JhbE5hdkl0ZW0nICk7XHJcbiAgZm9yKCBsZXQgaW5kZXggPSAwOyBpbmRleCA8IGdsb2JhbE5hdmlnYXRpb25DaGlsZEl0ZW1zLmxlbmd0aDsgaW5kZXgrKyApIHtcclxuICAgIGdsb2JhbE5hdmlnYXRpb25DaGlsZEl0ZW1zW2luZGV4XS5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgZm9yKCBsZXQgY291bnQgPSAwOyBjb3VudCA8IGdsb2JhbE5hdmlnYXRpb25DaGlsZEl0ZW1zLmxlbmd0aDsgY291bnQrKyApIHtcclxuICAgICAgICBsZXQgZWxlbSA9IGdsb2JhbE5hdmlnYXRpb25DaGlsZEl0ZW1zW2NvdW50XS5xdWVyeVNlbGVjdG9yKCAnLnAtZ2xvYmFsTmF2SXRlbV9fYWNjb3JkaW9uJyApO1xyXG4gICAgICAgIGlmKCBlbGVtICE9IG51bGwgKSB7XHJcbiAgICAgICAgICBpZiggY291bnQgPT09IGluZGV4ICkge1xyXG4gICAgICAgICAgICBlbGVtLmNsYXNzTGlzdC50b2dnbGUoICdpcy12aWV3JyApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZSggJ2lzLXZpZXcnICk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG59KSgpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9