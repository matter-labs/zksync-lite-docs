(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return removeClass; });
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hasClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(77);
/* harmony import */ var _trim__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(120);





function removeClass(element, classes) {
  if (!element || !classes) return;
  classes = classes.split(' ');
  var currentClass = ' ' + element.className + ' ';

  for (var i = 0, j = classes.length; i < j; i++) {
    var className = classes[i];
    if (!className) continue;

    if (element.classList) {
      element.classList.remove(className);
    } else if (Object(_hasClass__WEBPACK_IMPORTED_MODULE_3__[/* hasClass */ "a"])(element, className)) {
      currentClass = currentClass.replace(' ' + className + ' ', ' ');
    }
  }

  if (!element.classList) {
    element.className = Object(_trim__WEBPACK_IMPORTED_MODULE_4__[/* trim */ "a"])(currentClass);
  }
}

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return trim; });
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__);


function trim(string) {
  return (string || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '');
}

/***/ }),

/***/ 4:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ addClass["a" /* addClass */]; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ breakpointClass; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ capitalizeFirst; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ debounce; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ getStyleProperty; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* reexport */ getValueByPath; });
__webpack_require__.d(__webpack_exports__, "g", function() { return /* reexport */ hashString; });
__webpack_require__.d(__webpack_exports__, "h", function() { return /* reexport */ isKey_isKey; });
__webpack_require__.d(__webpack_exports__, "i", function() { return /* reexport */ isMobile; });
__webpack_require__.d(__webpack_exports__, "j", function() { return /* reexport */ isVisible; });
__webpack_require__.d(__webpack_exports__, "k", function() { return /* reexport */ modifierClass; });
__webpack_require__.d(__webpack_exports__, "l", function() { return /* reexport */ on; });
__webpack_require__.d(__webpack_exports__, "m", function() { return /* reexport */ querySelector; });
__webpack_require__.d(__webpack_exports__, "n", function() { return /* reexport */ querySelectorAll; });
__webpack_require__.d(__webpack_exports__, "o", function() { return /* reexport */ removeClass["a" /* removeClass */]; });
__webpack_require__.d(__webpack_exports__, "p", function() { return /* reexport */ sortByPath; });
__webpack_require__.d(__webpack_exports__, "q", function() { return /* reexport */ uid["a" /* uid */]; });

// UNUSED EXPORTS: focusAttempt, focusFirstDescendant, focusLastDescendant, hasClass, isFocusable, off, once, popupManager, slugify, toCamelCase, toDashCase, toUnderscoreCase, triggerEvent, trim

// EXTERNAL MODULE: ./node_modules/@inkline/inkline/src/helpers/addClass.js
var addClass = __webpack_require__(83);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(36);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(25);

// CONCATENATED MODULE: ./node_modules/@inkline/inkline/src/helpers/toDashCase.js


function toDashCase(string) {
  var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'camel';
  var regExp = from === 'camel' ? /([A-Z])/g : /_([a-zA-Z])/g;
  return string.replace(regExp, function (match, p) {
    return '-' + p.toLowerCase();
  });
}
// CONCATENATED MODULE: ./node_modules/@inkline/inkline/src/helpers/breakpointClass.js



/**
 * Convert given class name into dash case and append the given breakpoint string. Required in order to turn camel case
 * props into dash case.
 *
 * @param className
 * @param breakpoint
 * @returns {string}
 */

function breakpointClass(className, breakpoint) {
  if (['string', 'number'].indexOf(Object(esm_typeof["a" /* default */])(breakpoint)) > -1 && breakpoint !== '') {
    return "".concat(toDashCase(className), "-").concat(breakpoint);
  }

  return toDashCase(className);
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__(29);

// CONCATENATED MODULE: ./node_modules/@inkline/inkline/src/helpers/capitalizeFirst.js


/**
 * Capitalize first letter of a string
 *
 * @param string
 * @returns {string}
 */
function capitalizeFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.timers.js
var web_timers = __webpack_require__(46);

// CONCATENATED MODULE: ./node_modules/@inkline/inkline/src/helpers/debounce.js


/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked, or until the next browser frame is drawn.
 *
 * @param fn
 * @param delay
 * @returns {Function}
 */
function debounce(fn, delay) {
  var inDebounce;
  return function () {
    var context = this;
    var args = arguments;
    clearTimeout(inDebounce);
    inDebounce = setTimeout(function () {
      return fn.apply(context, args);
    }, delay);
  };
}
// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/@inkline/inkline/src/helpers/isFocusable.js
function isFocusable(element) {
  if (element.tabIndex > 0 || element.tabIndex === 0 && element.getAttribute('tabIndex') !== null) {
    return true;
  }

  if (element.disabled) {
    return false;
  }

  switch (element.nodeName) {
    case 'A':
      return !!element.href && element.rel !== 'ignore';

    case 'INPUT':
      return element.type !== 'hidden' && element.type !== 'file';

    case 'BUTTON':
    case 'SELECT':
    case 'TEXTAREA':
      return true;

    default:
      return false;
  }
}
// CONCATENATED MODULE: ./node_modules/@inkline/inkline/src/helpers/focusAttempt.js


/**
 * Set Attempt to set focus on the current node.
 *
 * @param element The node to attempt to focus on.
 * @returns true if element is focused.
 */

function focusAttempt(element) {
  if (!isFocusable(element)) {
    return false;
  }

  try {
    element.focus(); // eslint-disable-next-line
  } catch (e) {}

  return !vue_runtime_esm["a" /* default */].prototype.$isServer && document && document.activeElement === element;
}
// CONCATENATED MODULE: ./node_modules/@inkline/inkline/src/helpers/focusFirstDescendant.js

/**
 * Set focus on descendant nodes until the first focusable element is found.
 *
 * @param element DOM node for which to find the first focusable descendant.
 * @returns true if a focusable element is found and focus is set.
 */

function focusFirstDescendant(element) {
  for (var i = 0; i < element.childNodes.length; i++) {
    var child = element.childNodes[i];

    if (focusAttempt(child) || focusFirstDescendant(child)) {
      return true;
    }
  }

  return false;
}
// CONCATENATED MODULE: ./node_modules/@inkline/inkline/src/helpers/focusLastDescendant.js

/**
 * Find the last descendant node that is focusable.
 *
 * @param element DOM node for which to find the last focusable descendant.
 * @returns true if a focusable element is found and focus is set.
 */

function focusLastDescendant(element) {
  for (var i = element.childNodes.length - 1; i >= 0; i--) {
    var child = element.childNodes[i];

    if (focusAttempt(child) || focusLastDescendant(child)) {
      return true;
    }
  }

  return false;
}
// CONCATENATED MODULE: ./node_modules/@inkline/inkline/src/helpers/getStyleProperty.js

function getStyleProperty(element, property) {
  if (!element || !property || vue_runtime_esm["a" /* default */].prototype.$isServer && !window) {
    return;
  }

  if (element.currentStyle) {
    return element.currentStyle[property];
  }

  if (window.getComputedStyle.getPropertyValue) {
    return window.getComputedStyle(element, null).getPropertyValue(property);
  } else {
    return window.getComputedStyle(element)[property];
  }
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.split.js
var es_string_split = __webpack_require__(47);

// CONCATENATED MODULE: ./node_modules/@inkline/inkline/src/helpers/getValueByPath.js



/**
 * Get a deeply nested value based on a given path string
 *
 * @param object
 * @param path
 * @returns {T}
 */
function getValueByPath(object, path) {
  return path.split('.').reduce(function (acc, key) {
    return acc && acc[key];
  }, object);
}
// EXTERNAL MODULE: ./node_modules/@inkline/inkline/src/helpers/hasClass.js
var hasClass = __webpack_require__(77);

// CONCATENATED MODULE: ./node_modules/@inkline/inkline/src/helpers/hashString.js
/**
 * Return hash for a given string
 *
 * @param string
 * @returns {number}
 */
function hashString(string) {
  var hash = 0;

  if (string.length === 0) {
    return hash;
  }

  for (var i = 0; i < string.length; i++) {
    hash = (hash << 5) - hash + string.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
  }

  return hash;
}
// EXTERNAL MODULE: ./node_modules/@inkline/inkline/src/constants/index.js + 3 modules
var constants = __webpack_require__(22);

// CONCATENATED MODULE: ./node_modules/@inkline/inkline/src/helpers/isKey.js

/**
 * Verify if the given event is mapped to a specific key
 *
 * @param key
 * @param e
 * @returns {boolean}
 */

var isKey_isKey = function isKey(key, e) {
  var keyCode = e.key || e.keyIdentifier || e.keyCode;
  return constants["d" /* keymap */][key].indexOf(keyCode) !== -1;
};
// CONCATENATED MODULE: ./node_modules/@inkline/inkline/src/helpers/isMobile.js

/**
 * Function used to determine if the used browser is a mobile browser
 *
 * @returns {boolean}
 */

function isMobile() {
  if (vue_runtime_esm["a" /* default */].prototype.$isServer || typeof window === 'undefined') {
    return false;
  }

  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

  if (typeof isMobile.cachedValue === 'undefined') {
    isMobile.cachedValue = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(userAgent.substr(0, 4));
  }

  return isMobile.cachedValue;
}
// CONCATENATED MODULE: ./node_modules/@inkline/inkline/src/helpers/isVisible.js
/**
 * Check if given element is visible
 *
 * @param element
 */
function isVisible(element) {
  return Boolean(element) && Boolean(element.offsetWidth || element.offsetHeight || element.getClientRects().length);
}
// CONCATENATED MODULE: ./node_modules/@inkline/inkline/src/helpers/modifierClass.js
function modifierClass(className) {
  return '-' + className;
}
// CONCATENATED MODULE: ./node_modules/@inkline/inkline/src/helpers/off.js

function removeEventListenerBinding(element, event, handler) {
  if (element && event) {
    element.removeEventListener(event, handler, false);
  }
}
function detachEventBinding(element, event, handler) {
  if (element && event) {
    element.detachEvent('on' + event, handler);
  }
}
var off_off = function _off() {
  if (!vue_runtime_esm["a" /* default */].prototype.$isServer && typeof window !== 'undefined' && window.document.removeEventListener) {
    return removeEventListenerBinding;
  } else {
    return detachEventBinding;
  }
};
var off = off_off();
// CONCATENATED MODULE: ./node_modules/@inkline/inkline/src/helpers/on.js

function addEventListenerBinding(element, event, handler) {
  if (element && event && handler) {
    element.addEventListener(event, handler, false);
  }
}
function attachEventBinding(element, event, handler) {
  if (element && event && handler) {
    element.attachEvent('on' + event, handler);
  }
}
var on_on = function _on() {
  if (!vue_runtime_esm["a" /* default */].prototype.$isServer && typeof window !== 'undefined' && window.document.addEventListener) {
    return addEventListenerBinding;
  } else {
    return attachEventBinding;
  }
};
var on = on_on();
// CONCATENATED MODULE: ./node_modules/@inkline/inkline/src/helpers/once.js


var once_once = function once(el, event, fn) {
  var listener = function listener() {
    if (fn) {
      fn.apply(this, arguments);
    }

    off(el, event, listener);
  };

  on(el, event, listener);
};
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.from.js
var es_array_from = __webpack_require__(37);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__(26);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(17);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__(38);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.iterator.js
var es_symbol_iterator = __webpack_require__(39);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(14);

// CONCATENATED MODULE: ./node_modules/@inkline/inkline/src/helpers/query.js











function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * Find component by component instance name.
 * Mainly used for searching first matching child in component slots.
 *
 * @param items
 * @param name
 * @param maxDepth
 * @param currentDepth
 * @returns {Array}
 */
function querySelector(items, name) {
  var maxDepth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;
  var currentDepth = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var result;

  var _iterator = _createForOfIteratorHelper(items),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var item = _step.value;
      var children = item.$children || (item.componentInstance || {}).$children || item.children;

      if ((item.$options || {}).name === name || ((item.$options || {}).extends || {}).name === name || ((item.componentInstance || {}).$options || {}).name === name || (((item.componentInstance || {}).$options || {}).extends || {}).name === name) {
        result = item;
      }

      if (children && children.length > 0 && currentDepth < maxDepth && !result) {
        result = querySelector(children, name, maxDepth, currentDepth + 1);
      }

      if (result) {
        break;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return result;
}
/**
 * Find components by component instance name.
 * Mainly used for filtering and searching children in component slots.
 *
 * @param items
 * @param name
 * @param maxDepth
 * @param currentDepth
 * @returns {Array}
 */

function querySelectorAll(items, name) {
  var maxDepth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;
  var currentDepth = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var results = [];

  if (!items) {
    return results;
  }

  var _iterator2 = _createForOfIteratorHelper(items),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var item = _step2.value;
      var children = item.$children || (item.componentInstance || {}).$children || item.children;

      if ((item.$options || {}).name === name || ((item.$options || {}).extends || {}).name === name || ((item.componentInstance || {}).$options || {}).name === name || (((item.componentInstance || {}).$options || {}).extends || {}).name === name) {
        results.push(item);
      }

      if (children && children.length > 0 && currentDepth < maxDepth) {
        results = results.concat(querySelectorAll(children, name, maxDepth, currentDepth + 1));
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  return results;
}
// EXTERNAL MODULE: ./node_modules/@inkline/inkline/src/factories/PopupManager.js
var PopupManager = __webpack_require__(55);

// EXTERNAL MODULE: ./node_modules/@inkline/inkline/src/helpers/removeClass.js
var removeClass = __webpack_require__(119);

// CONCATENATED MODULE: ./node_modules/@inkline/inkline/src/helpers/slugify.js


function slugify(string) {
  return string.toLowerCase().replace(/\s+/g, '-') // Replace spaces with -
  .replace(/[^\w-]+/g, '') // Remove all non-word chars
  .replace(/--+/g, '-') // Replace multiple - with single -
  .replace(/^-+/, '') // Trim - from start of text
  .replace(/-+$/, ''); // Trim - from end of text
}
// CONCATENATED MODULE: ./node_modules/@inkline/inkline/src/helpers/sortByPath.js

/**
 * Sort an array of objects by path
 *
 * @param path
 * @returns {function(*=, *=): number}
 */

function sortByPath(path) {
  return function (a, b) {
    return getValueByPath(a, path) > getValueByPath(b, path) ? 1 : getValueByPath(a, path) < getValueByPath(b, path) ? -1 : 0;
  };
}
// CONCATENATED MODULE: ./node_modules/@inkline/inkline/src/helpers/toCamelCase.js


function toCamelCase(string) {
  var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'dash';
  var regExp = from === 'dash' ? /-([a-z0-9])/g : /_([a-z0-9])/g;
  return string.replace(regExp, function (match, p) {
    return p.toUpperCase();
  });
}
// CONCATENATED MODULE: ./node_modules/@inkline/inkline/src/helpers/toUnderscoreCase.js


function toUnderscoreCase(string) {
  var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'camel';
  var regExp = from === 'camel' ? /([A-Z])/g : /-([a-zA-Z])/g;
  return string.replace(regExp, function (match, p) {
    return '_' + p.toLowerCase();
  });
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(42);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptors.js
var es_object_get_own_property_descriptors = __webpack_require__(43);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(16);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(21);

// CONCATENATED MODULE: ./node_modules/@inkline/inkline/src/helpers/triggerEvent.js








function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


/**
 * Manually trigger an event
 *
 * mouseenter, mouseleave, mouseover, keyup, change, click
 *
 * @param {Element} element
 * @param {String} name
 * @param {*} opts
 */

function triggerEvent(element, name, options) {
  if (vue_runtime_esm["a" /* default */].prototype.$isServer || !document) {
    return;
  }

  var eventName;
  options = _objectSpread({
    bubbles: false,
    cancelable: true
  }, options);

  if (/^mouse|click/.test(name)) {
    eventName = 'MouseEvents';
  } else if (/^key/.test(name)) {
    eventName = 'KeyboardEvent';
  } else {
    eventName = 'HTMLEvents';
  }

  var evt = document.createEvent(eventName);
  evt.initEvent(name, options.bubbles, options.cancelable);
  Object.keys(options).forEach(function (optionName) {
    if (optionName !== 'bubbles' && optionName !== 'cancelable') {
      evt[optionName] = options[optionName];
    }
  });
  element.dispatchEvent ? element.dispatchEvent(evt) : element.fireEvent('on' + name, evt);
  return element;
}
// EXTERNAL MODULE: ./node_modules/@inkline/inkline/src/helpers/trim.js
var trim = __webpack_require__(120);

// EXTERNAL MODULE: ./node_modules/@inkline/inkline/src/helpers/uid.js
var uid = __webpack_require__(78);

// CONCATENATED MODULE: ./node_modules/@inkline/inkline/src/helpers/index.js































/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PopupManager */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return popupManager; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(117);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(209);
/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(97);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2);
/* harmony import */ var _inkline_inkline_src_helpers_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4);







var PopupManager = /*#__PURE__*/function () {
  function PopupManager() {
    var _this = this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, PopupManager);

    this.instances = {};
    this.modalStack = [];
    this.zIndex = 1000;

    if (!vue__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].prototype.$isServer && window) {
      // Handle `esc` key when the popup is shown
      window.addEventListener('keydown', function (e) {
        if (Object(_inkline_inkline_src_helpers_index__WEBPACK_IMPORTED_MODULE_6__[/* isKey */ "h"])('esc', e)) {
          var topPopup = _this.getTopPopup();

          if (topPopup && topPopup.closeOnPressEscape) {
            topPopup.hide();
          }
        }
      });
    }
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(PopupManager, [{
    key: "register",
    value: function register(instance) {
      if (instance && instance.id) {
        this.instances[instance.id] = instance;
      }
    }
  }, {
    key: "unregister",
    value: function unregister(instance) {
      if (instance && instance.id) {
        this.instances[instance.id] = null;
        delete this.instances[instance.id];
      }
    }
  }, {
    key: "nextZIndex",
    value: function nextZIndex() {
      return this.zIndex++;
    }
  }, {
    key: "openModal",
    value: function openModal(id) {
      if (vue__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].prototype.$isServer || !window) {
        return;
      }

      var modal = this.modalStack.find(function (m) {
        return m.id === id;
      });

      if (modal && modal.$el) {
        modal.$el.style.zIndex = this.nextZIndex();
      } else {
        this.modalStack.push({
          id: id
        });
      }

      Object(_inkline_inkline_src_helpers_index__WEBPACK_IMPORTED_MODULE_6__[/* addClass */ "a"])(window.document.body, '-modal');
    }
  }, {
    key: "closeModal",
    value: function closeModal(id) {
      if (vue__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].prototype.$isServer || !window) {
        return;
      }

      var modalIndex = this.modalStack.findIndex(function (m) {
        return m.id === id;
      });
      this.modalStack.splice(modalIndex, 1);
      Object(_inkline_inkline_src_helpers_index__WEBPACK_IMPORTED_MODULE_6__[/* removeClass */ "o"])(window.document.body, '-modal');
    }
  }, {
    key: "getTopPopup",
    value: function getTopPopup() {
      if (this.modalStack.length > 0) {
        var topPopup = this.modalStack[this.modalStack.length - 1];
        if (!topPopup) return;
        return this.instances[topPopup.id];
      }
    }
  }]);

  return PopupManager;
}();
var popupManager = new PopupManager();
/* harmony default export */ __webpack_exports__["a"] = (popupManager);

/***/ }),

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormBuilder; });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(37);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(26);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(38);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(39);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(19);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(81);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(82);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(14);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(20);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(370);
/* harmony import */ var core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(12);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(47);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(25);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(41);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(29);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(36);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(21);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(16);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(159);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(62);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(97);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _inkline_inkline_src_validators__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(165);













function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

















var FormBuilder = /*#__PURE__*/function () {
  function FormBuilder() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(this, FormBuilder);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"])(FormBuilder, null, [{
    key: "configure",
    value:
    /**
     * Default form validation state that will be assigned to each field
     */

    /**
     * Default form control state that will be assigned to each value field
     */

    /**
     * Validation field keywords
     */

    /**
     * Array of reserved schema field names
     *
     * @type {string[]}
     */

    /**
     * Configure form validation fields and behaviour
     *
     * @param options
     */
    function configure() {
      var _FormBuilder$defaultF, _FormBuilder$defaultF2;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      FormBuilder.keys = _objectSpread(_objectSpread({}, FormBuilder.keys), options.keys);
      FormBuilder.reservedSchemaFields = Object.values(FormBuilder.keys).filter(function (k) {
        return k !== 'value';
      });
      FormBuilder.defaultFormControlState = (_FormBuilder$defaultF = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(_FormBuilder$defaultF, FormBuilder.keys.VALUE, FormBuilder.defaultFormControlState.value), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(_FormBuilder$defaultF, FormBuilder.keys.VALIDATE_ON, options.validateOn || FormBuilder.defaultFormControlState.validateOn), _FormBuilder$defaultF);
      FormBuilder.defaultFormState = (_FormBuilder$defaultF2 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(_FormBuilder$defaultF2, FormBuilder.keys.TOUCHED, false), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(_FormBuilder$defaultF2, FormBuilder.keys.UNTOUCHED, true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(_FormBuilder$defaultF2, FormBuilder.keys.DIRTY, false), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(_FormBuilder$defaultF2, FormBuilder.keys.PRISTINE, true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(_FormBuilder$defaultF2, FormBuilder.keys.INVALID, false), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(_FormBuilder$defaultF2, FormBuilder.keys.VALID, true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(_FormBuilder$defaultF2, FormBuilder.keys.ERRORS, {}), _FormBuilder$defaultF2);
    }
    /**
     * Returns an array of the input's parent schemas starting from the root, and ending with the
     * input itself's schema.
     *
     * @param schema
     * @param rootSchema
     */

  }, {
    key: "getSchemaList",
    value: function getSchemaList(schema, rootSchema) {
      if (schema === rootSchema) {
        return [schema];
      }

      var parentFormGroupKeys = schema[FormBuilder.keys.NAME].replace(/\[['"]?([^'"\]])['"]?]/g, '.$1').split('.');
      var parentSchemaList = parentFormGroupKeys.map(function (group, index) {
        return parentFormGroupKeys.slice(0, index).reduce(function (acc, key) {
          return acc && acc[key];
        }, rootSchema);
      });

      if (!parentSchemaList[parentSchemaList.length - 1].hasOwnProperty(parentFormGroupKeys[parentFormGroupKeys.length - 1])) {
        throw new Error("Could not retrieve schema tree for input with name ".concat(schema[FormBuilder.keys.NAME], "."));
      }

      parentSchemaList.reverse();
      return [schema].concat(parentSchemaList);
    }
    /**
     * Check if all child fields of the group schema are valid
     *
     * @param schema
     * @returns {boolean}
     */

  }, {
    key: "isValidFormGroupSchema",
    value: function isValidFormGroupSchema(schema) {
      return Object.keys(schema).reduce(function (groupValid, key) {
        var schemaListItemValue = schema[key];

        if (Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(schemaListItemValue) === 'object' && schemaListItemValue.hasOwnProperty('valid')) {
          groupValid = groupValid && schemaListItemValue.valid;
        }

        return groupValid;
      }, true);
    }
    /**
     * Return formatted default error messages for validators
     *
     * @param value
     * @param validator
     * @returns {string}
     */

  }, {
    key: "getErrorMessage",
    value: function getErrorMessage(value, validator) {
      var content = '';
      var isMultiple = Array.isArray(value);

      switch (validator.rule) {
        case 'alpha':
          if (validator.allowDashes && validator.allowSpaces) {
            content = 'letters, dashes and spaces';
          } else if (validator.allowSpaces) {
            content = 'letters and spaces';
          } else if (validator.allowDashes) {
            content = 'letters and dashes';
          } else {
            content = 'letters';
          }

          return isMultiple ? "Please select options that contain ".concat(content, " only.") : "Please enter ".concat(content, " only.");

        case 'alphanumeric':
          if (validator.allowDashes && validator.allowSpaces) {
            content = 'letters, numbers, dashes and spaces';
          } else if (validator.allowSpaces) {
            content = 'letters, numbers and spaces';
          } else if (validator.allowDashes) {
            content = 'letters, numbers and dashes';
          } else {
            content = 'letters and numbers';
          }

          return isMultiple ? "Please select options that contain ".concat(content, " only.") : "Please enter ".concat(content, " only.");

        case 'number':
          if (validator.allowNegative && validator.allowDecimal) {
            content = 'positive or negative decimal numbers';
          } else if (validator.allowNegative) {
            content = 'positive or negative numbers';
          } else if (validator.allowDecimal) {
            content = 'decimal numbers';
          } else {
            content = 'numbers';
          }

          return isMultiple ? "Please select options that contain ".concat(content, " only.") : "Please enter ".concat(content, " only.");

        case 'email':
          return isMultiple ? 'Please select only valid email address.' : 'Please enter a valid email address.';

        case 'max':
          return isMultiple ? "Please select values up to a maximum of ".concat(validator.value, ".") : "Please enter a value up to a maximum of ".concat(validator.value, ".");

        case 'maxLength':
          return isMultiple ? "Please select up to ".concat(validator.value, " options.") : "Please enter up to ".concat(validator.value, " characters.");

        case 'min':
          return isMultiple ? "Please select values up from a minimum of ".concat(validator.value, ".") : "Please enter a value up from a minimum of ".concat(validator.value, ".");

        case 'minLength':
          return isMultiple ? "Please select at least ".concat(validator.value, " options.") : "Please enter at least ".concat(validator.value, " characters.");

        case 'required':
          return isMultiple ? 'Please select at least one option.' : 'Please enter a value for this field.';

        case 'sameAs':
          return "Please make sure that the two values match.";

        default:
          return 'Please enter a correct value for this field.';
      }
    }
    /**
     * Creates a form control schema
     *
     * @param name
     * @param schema
     * @param options
     * @returns {{
     *      name: string,
     *      validate: (function(*=): {valid: boolean, errors: {length: number}}),
     *      value: string,
     *      validateOn: string,
     *      touched: boolean,
     *      untouched: boolean,
     *      dirty: boolean,
     *      pristine: boolean,
     *      invalid: boolean,
     *      valid: boolean,
     *      errors: {}
     * }}
     */

  }, {
    key: "formControl",
    value: function formControl(name, schema) {
      var _objectSpread2, _Object$assign;

      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      schema = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, FormBuilder.defaultFormControlState), FormBuilder.defaultFormState), schema), {}, (_objectSpread2 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(_objectSpread2, FormBuilder.keys.NAME, name), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(_objectSpread2, FormBuilder.keys.VALIDATORS, schema[FormBuilder.keys.VALIDATORS] || []), _objectSpread2)); // Set all validators as enabled by default

      var _iterator = _createForOfIteratorHelper(schema[FormBuilder.keys.VALIDATORS]),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var validator = _step.value;

          if (!validator.hasOwnProperty('enabled')) {
            validator.enabled = true;
          }
        } // Provide getSchema for field validation

      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      var buildOptions = options.getSchema ? {
        getSchema: options.getSchema
      } : {};
      return Object.assign(schema, (_Object$assign = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(_Object$assign, FormBuilder.keys.TOUCH, function () {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var rootSchema = options.getSchema ? options.getSchema() : buildOptions.getSchema();
        FormBuilder.getSchemaList(schema, rootSchema).forEach(function (schemaListItem) {
          schemaListItem[FormBuilder.keys.TOUCHED] = true;
          schemaListItem[FormBuilder.keys.UNTOUCHED] = false;
        });
        return true;
      }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(_Object$assign, FormBuilder.keys.VALIDATE, function (value) {
        var _ref;

        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var rootSchema = options.getSchema ? options.getSchema() : buildOptions.getSchema();
        var valid = true;
        var errors = {
          length: 0
        };

        var _iterator2 = _createForOfIteratorHelper(schema[FormBuilder.keys.VALIDATORS]),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var validator = _step2.value;

            if (!_inkline_inkline_src_validators__WEBPACK_IMPORTED_MODULE_27__[validator.rule]) {
              throw new Error("Invalid validation rule '".concat(validator.rule, "' provided."));
            } // Validator enabled state can be a function


            var validatorEnabled = typeof validator.enabled === 'function' ? validator.enabled() : validator.enabled; // Validator rule gets called with value, validator options and root schema options

            if (validatorEnabled && !_inkline_inkline_src_validators__WEBPACK_IMPORTED_MODULE_27__[validator.rule](value, validator, rootSchema)) {
              errors[validator.rule] = validator.message || FormBuilder.getErrorMessage(value, validator);
              errors.length += 1;
              valid = false;
            }
          }
          /**
           * Set validation status for each parent schema
           */

        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        FormBuilder.getSchemaList(schema, rootSchema).forEach(function (schemaListItem, index) {
          schemaListItem[FormBuilder.keys.ERRORS] = errors;
          schemaListItem[FormBuilder.keys.VALID] = index === 0 ? valid : FormBuilder.isValidFormGroupSchema(schemaListItem);
          schemaListItem[FormBuilder.keys.INVALID] = !schemaListItem[FormBuilder.keys.VALID];
          schemaListItem[FormBuilder.keys.DIRTY] = true;
          schemaListItem[FormBuilder.keys.PRISTINE] = false;
        });
        return _ref = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(_ref, FormBuilder.keys.VALID, valid), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(_ref, FormBuilder.keys.ERRORS, errors), _ref;
      }), _Object$assign));
    }
    /**
     * Creates a form schema by going through all the fields
     *
     * @param name
     * @param schema
     * @param options
     * @returns {{
     *      id: string,
     *      group: boolean,
     *      touched: boolean,
     *      untouched: boolean,
     *      dirty: boolean,
     *      pristine: boolean,
     *      invalid: boolean,
     *      valid: boolean,
     *      errors: {}
     * }}
     */

  }, {
    key: "form",
    value: function form(name, schema) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var nameNesting = name === '' ? [] : name.split('.');
      var fields = Object.keys(schema); // Clone the provided schema to make sure we're working on a clean copy
      // without modifying the provided arguments.

      schema = schema.constructor === Array ? schema.slice(0) : _objectSpread({}, schema); // Set schema fields

      schema[FormBuilder.keys.NAME] = name;
      schema[FormBuilder.keys.FIELDS] = fields; // Set current form as root schema

      var buildOptions = options.getSchema || options.root ? {
        getSchema: options.root ? function () {
          return schema;
        } : options.getSchema
      } : {}; // Check for reserved schema fields and recursively construct child schema fields

      fields.forEach(function (fieldName) {
        if (FormBuilder.reservedSchemaFields.indexOf(fieldName) !== -1) {
          throw new Error("The field name \"".concat(fieldName, "\" is a reserved Inkline Form Validation field name. Please provide a different name."));
        }

        var fieldSchema = schema[fieldName];
        var schemaHasFormControlProperties = [FormBuilder.keys.VALIDATORS, FormBuilder.keys.VALUE].some(function (key) {
          return fieldSchema.hasOwnProperty(key);
        });
        var schemaIsEmptyObject = Object.keys(fieldSchema).length === 0;
        var schemaIsArray = fieldSchema.constructor === Array;
        var schemaIsGroup = !(schemaHasFormControlProperties || schemaIsEmptyObject) || schemaIsArray; // Verify if schema is a form control or a form group. Form controls can be empty objects, can have either
        // a 'validators' or a 'value' field. Form groups are arrays or have multiple user-defined keys

        schema[fieldName] = FormBuilder.build(nameNesting.concat([fieldName]).join('.'), fieldSchema, _objectSpread(_objectSpread({}, buildOptions), {}, {
          group: schemaIsGroup
        }));
      }); // Add schema state properties. When handling array form groups, we add the schema fields as
      // custom array properties in order to keep the array iterator intact

      Object.keys(FormBuilder.defaultFormState).forEach(function (property) {
        return schema[property] = FormBuilder.defaultFormState[property];
      });
      /**
       * Validate the current group by performing all validation functions on its child fields
       *
       * @param options
       * @returns {{valid: boolean}}
       */

      schema[FormBuilder.keys.VALIDATE] = function () {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        for (var key in schema) {
          if (schema.hasOwnProperty(key) && schema[key] && schema[key][FormBuilder.keys.VALIDATE]) {
            if (schema[key][FormBuilder.keys.FIELDS]) {
              schema[key][FormBuilder.keys.VALIDATE](_objectSpread(_objectSpread({}, buildOptions), options));
            } else {
              schema[key][FormBuilder.keys.VALIDATE](schema[key][FormBuilder.keys.VALUE], _objectSpread(_objectSpread({}, buildOptions), options));
            }
          }
        }

        return Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])({}, FormBuilder.keys.VALID, schema[FormBuilder.keys.VALID]);
      };

      if (schema.constructor === Array) {
        var _Object$assign2;

        return Object.assign(schema, (_Object$assign2 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(_Object$assign2, FormBuilder.keys.ADD, function (item) {
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          schema.push(FormBuilder.build(nameNesting.concat([schema.length]).join('.'), item, _objectSpread(_objectSpread({}, buildOptions), options)));
          schema[FormBuilder.keys.FIELDS].push((schema.length - 1).toString());
        }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(_Object$assign2, FormBuilder.keys.REMOVE, function (start, deleteCount, item) {
          var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

          if (item) {
            schema.splice(start, deleteCount, FormBuilder.build(nameNesting.concat([start]).join('.'), item, _objectSpread(_objectSpread({}, buildOptions), options)));
            schema[FormBuilder.keys.FIELDS].splice(start, deleteCount, start);
          } else {
            schema.splice(start, deleteCount);
            schema[FormBuilder.keys.FIELDS].splice(start, deleteCount);
          }

          for (var index = start; index < schema.length; index += 1) {
            schema[index][FormBuilder.keys.NAME] = schema[index][FormBuilder.keys.NAME].replace(/[0-9]+$/, index);
            schema[FormBuilder.keys.FIELDS][index] = index.toString();
          }
        }), _Object$assign2));
      }

      return Object.assign(schema, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])({}, FormBuilder.keys.SET, function (name, item) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        if (!options.instance) {
          throw new Error('Please make sure you provide the Vue instance inside the options object as options.instance.');
        }

        options.instance.$set(schema, FormBuilder.keys.FIELDS, schema[FormBuilder.keys.FIELDS].concat([name]));
        options.instance.$set(schema, name, FormBuilder.build(nameNesting.concat([name]).join('.'), item, _objectSpread(_objectSpread({}, buildOptions), options)));
      }));
    }
    /**
     * If grouped, return a new form group. Otherwise, return a form control
     *
     * @param name
     * @param schema
     * @param options
     * @returns {*}
     */

  }, {
    key: "build",
    value: function build(name, schema, options) {
      return options.group ? FormBuilder.form(name, schema, options) : FormBuilder.formControl(name, schema, options);
    }
  }]);

  return FormBuilder;
}();
FormBuilder.defaultFormState = {
  touched: false,
  untouched: true,
  dirty: false,
  pristine: true,
  invalid: false,
  valid: true,
  errors: {}
};
FormBuilder.defaultFormControlState = {
  value: '',
  validateOn: 'input'
};
FormBuilder.keys = {
  VALUE: 'value',
  NAME: 'name',
  FIELDS: 'fields',
  VALIDATE: 'validate',
  VALIDATE_ON: 'validateOn',
  VALIDATORS: 'validators',
  INVALID: 'invalid',
  VALID: 'valid',
  TOUCH: 'touch',
  TOUCHED: 'touched',
  UNTOUCHED: 'untouched',
  DIRTY: 'dirty',
  PRISTINE: 'pristine',
  SET: 'set',
  ADD: 'add',
  REMOVE: 'remove',
  ERRORS: 'errors'
};
FormBuilder.reservedSchemaFields = ['name', 'fields', 'validate', 'validateOn', 'validators', 'invalid', 'valid', 'touch', 'touched', 'untouched', 'dirty', 'pristine', 'set', 'add', 'remove', 'errors'];

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hasClass; });
/**
 * Check whether given element has given className
 *
 * @param element
 * @param className
 * @returns {boolean}
 */
function hasClass(element, className) {
  if (!element || !className) return false;
  if (className.indexOf(' ') !== -1) throw new Error('Class name should not contain spaces.');

  if (element.classList) {
    return element.classList.contains(className);
  } else {
    return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
  }
}

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return uid; });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_1__);



/**
 * Math.random should be unique because of its seeding algorithm.
 * Convert it to base 36 (numbers + letters), and grab the first 9 characters after the decimal.
 *
 * @param baseId
 */
function uid(baseId) {
  return baseId + '-' + Math.random().toString(36).substr(2, 9);
}

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addClass; });
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hasClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77);



/**
 * Add new classes to the given element
 *
 * @param element
 * @param classes
 */

function addClass(element, classes) {
  if (!element) return;
  var currentClass = element.className;
  classes = (classes || '').split(' ');

  for (var i = 0, j = classes.length; i < j; i++) {
    var className = classes[i];
    if (!className) continue;

    if (element.classList) {
      element.classList.add(className);
    } else if (!Object(_hasClass__WEBPACK_IMPORTED_MODULE_2__[/* hasClass */ "a"])(element, className)) {
      currentClass += ' ' + className;
    }
  }

  if (!element.classList) {
    element.className = currentClass;
  }
}

/***/ })

}]);