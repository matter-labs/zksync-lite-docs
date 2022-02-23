(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(113);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(41);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(29);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(15);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(37);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(26);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(17);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(38);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(39);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(14);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2);
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


















var requestIdleCallback = window.requestIdleCallback || function (cb) {
  var start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function timeRemaining() {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

var cancelIdleCallback = window.cancelIdleCallback || function (id) {
  clearTimeout(id);
};

var observer = window.IntersectionObserver && new window.IntersectionObserver(function (entries) {
  entries.forEach(function (_ref) {
    var intersectionRatio = _ref.intersectionRatio,
        link = _ref.target;

    if (intersectionRatio <= 0 || !link.__prefetch) {
      return;
    }

    link.__prefetch();
  });
});
/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'NuxtLink',
  extends: vue__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].component('RouterLink'),
  props: {
    prefetch: {
      type: Boolean,
      default: true
    },
    noPrefetch: {
      type: Boolean,
      default: false
    }
  },
  mounted: function mounted() {
    if (this.prefetch && !this.noPrefetch) {
      this.handleId = requestIdleCallback(this.observe, {
        timeout: 2e3
      });
    }
  },
  beforeDestroy: function beforeDestroy() {
    cancelIdleCallback(this.handleId);

    if (this.__observed) {
      observer.unobserve(this.$el);
      delete this.$el.__prefetch;
    }
  },
  methods: {
    observe: function observe() {
      // If no IntersectionObserver, avoid prefetching
      if (!observer) {
        return;
      } // Add to observer


      if (this.shouldPrefetch()) {
        this.$el.__prefetch = this.prefetchLink.bind(this);
        observer.observe(this.$el);
        this.__observed = true;
      }
    },
    shouldPrefetch: function shouldPrefetch() {
      return this.getPrefetchComponents().length > 0;
    },
    canPrefetch: function canPrefetch() {
      var conn = navigator.connection;
      var hasBadConnection = this.$nuxt.isOffline || conn && ((conn.effectiveType || '').includes('2g') || conn.saveData);
      return !hasBadConnection;
    },
    getPrefetchComponents: function getPrefetchComponents() {
      var ref = this.$router.resolve(this.to, this.$route, this.append);
      var Components = ref.resolved.matched.map(function (r) {
        return r.components.default;
      });
      return Components.filter(function (Component) {
        return typeof Component === 'function' && !Component.options && !Component.__prefetched;
      });
    },
    prefetchLink: function prefetchLink() {
      if (!this.canPrefetch()) {
        return;
      } // Stop observing this link (in case of internet connection changes)


      observer.unobserve(this.$el);
      var Components = this.getPrefetchComponents();

      var _iterator = _createForOfIteratorHelper(Components),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var Component = _step.value;
          var componentOrPromise = Component();

          if (componentOrPromise instanceof Promise) {
            componentOrPromise.catch(function () {});
          }

          Component.__prefetched = true;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }
});

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var middleware = {};
/* harmony default export */ __webpack_exports__["a"] = (middleware);

/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {};

/***/ }),

/***/ 325:
/***/ (function(module, exports) {

// This file is intentionally left empty for noop aliases

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68);
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(46);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5);







var isSsrHydration = function isSsrHydration(vm) {
  return vm.$vnode && vm.$vnode.elm && vm.$vnode.elm.dataset && vm.$vnode.elm.dataset.fetchKey;
};

var nuxtState = window.__NUXT__;
/* harmony default export */ __webpack_exports__["a"] = ({
  beforeCreate: function beforeCreate() {
    if (!Object(_utils__WEBPACK_IMPORTED_MODULE_5__[/* hasFetch */ "l"])(this)) {
      return;
    }

    this._fetchDelay = typeof this.$options.fetchDelay === 'number' ? this.$options.fetchDelay : 200;
    vue__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].util.defineReactive(this, '$fetchState', {
      pending: false,
      error: null,
      timestamp: Date.now()
    });
    this.$fetch = $fetch.bind(this);
    Object(_utils__WEBPACK_IMPORTED_MODULE_5__[/* addLifecycleHook */ "a"])(this, 'created', created);
    Object(_utils__WEBPACK_IMPORTED_MODULE_5__[/* addLifecycleHook */ "a"])(this, 'beforeMount', beforeMount);
  }
});

function beforeMount() {
  if (!this._hydrated) {
    return this.$fetch();
  }
}

function created() {
  if (!isSsrHydration(this)) {
    return;
  } // Hydrate component


  this._hydrated = true;
  this._fetchKey = this.$vnode.elm.dataset.fetchKey;
  var data = nuxtState.fetch[this._fetchKey]; // If fetch error

  if (data && data._error) {
    this.$fetchState.error = data._error;
    return;
  } // Merge data


  for (var key in data) {
    vue__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].set(this.$data, key, data[key]);
  }
}

function $fetch() {
  var _this = this;

  if (!this._fetchPromise) {
    this._fetchPromise = $_fetch.call(this).then(function () {
      delete _this._fetchPromise;
    });
  }

  return this._fetchPromise;
}

function $_fetch() {
  return _$_fetch.apply(this, arguments);
}

function _$_fetch() {
  _$_fetch = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var _this2 = this;

    var error, startTime, delayLeft;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            this.$nuxt.nbFetching++;
            this.$fetchState.pending = true;
            this.$fetchState.error = null;
            this._hydrated = false;
            error = null;
            startTime = Date.now();
            _context.prev = 6;
            _context.next = 9;
            return this.$options.fetch.call(this);

          case 9:
            _context.next = 15;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](6);

            if (false) {}

            error = Object(_utils__WEBPACK_IMPORTED_MODULE_5__[/* normalizeError */ "p"])(_context.t0);

          case 15:
            delayLeft = this._fetchDelay - (Date.now() - startTime);

            if (!(delayLeft > 0)) {
              _context.next = 19;
              break;
            }

            _context.next = 19;
            return new Promise(function (resolve) {
              return setTimeout(resolve, delayLeft);
            });

          case 19:
            this.$fetchState.error = error;
            this.$fetchState.pending = false;
            this.$fetchState.timestamp = Date.now();
            this.$nextTick(function () {
              return _this2.$nuxt.nbFetching--;
            });

          case 23:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[6, 11]]);
  }));
  return _$_fetch.apply(this, arguments);
}

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(144);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(341);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(348);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(349);
/* harmony import */ var core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(68);
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(15);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(16);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(20);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(21);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(96);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(113);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(36);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(41);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(26);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(14);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(46);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(2);
/* harmony import */ var unfetch__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(321);
/* harmony import */ var _middleware_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(161);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(5);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(57);
/* harmony import */ var _mixins_fetch_client__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(327);
/* harmony import */ var _components_nuxt_link_client_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(132);












function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




















 // should be included after ./index.js
// Fetch mixin

if (!vue__WEBPACK_IMPORTED_MODULE_24__[/* default */ "a"].__nuxt__fetch__mixin__) {
  vue__WEBPACK_IMPORTED_MODULE_24__[/* default */ "a"].mixin(_mixins_fetch_client__WEBPACK_IMPORTED_MODULE_29__[/* default */ "a"]);
  vue__WEBPACK_IMPORTED_MODULE_24__[/* default */ "a"].__nuxt__fetch__mixin__ = true;
} // Component: <NuxtLink>


vue__WEBPACK_IMPORTED_MODULE_24__[/* default */ "a"].component(_components_nuxt_link_client_js__WEBPACK_IMPORTED_MODULE_30__[/* default */ "a"].name, _components_nuxt_link_client_js__WEBPACK_IMPORTED_MODULE_30__[/* default */ "a"]);
vue__WEBPACK_IMPORTED_MODULE_24__[/* default */ "a"].component('NLink', _components_nuxt_link_client_js__WEBPACK_IMPORTED_MODULE_30__[/* default */ "a"]);

if (!global.fetch) {
  global.fetch = unfetch__WEBPACK_IMPORTED_MODULE_25__[/* default */ "a"];
} // Global shared references


var _lastPaths = [];
var app;
var router;
var store; // Try to rehydrate SSR data from window

var NUXT = window.__NUXT__ || {};
var $config = NUXT.config || {};

if ($config._app) {
  __webpack_require__.p = Object(_utils_js__WEBPACK_IMPORTED_MODULE_27__[/* urlJoin */ "u"])($config._app.cdnURL, $config._app.assetsPath);
}

Object.assign(vue__WEBPACK_IMPORTED_MODULE_24__[/* default */ "a"].config, {
  "productionTip": false,
  "devtools": true,
  "silent": true,
  "performance": false
});
var errorHandler = vue__WEBPACK_IMPORTED_MODULE_24__[/* default */ "a"].config.errorHandler || console.error; // Create and mount App

Object(_index_js__WEBPACK_IMPORTED_MODULE_28__[/* createApp */ "b"])(null, NUXT.config).then(mountApp).catch(errorHandler);

function componentOption(component, key) {
  if (!component || !component.options || !component.options[key]) {
    return {};
  }

  var option = component.options[key];

  if (typeof option === 'function') {
    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    return option.apply(void 0, args);
  }

  return option;
}

function mapTransitions(toComponents, to, from) {
  var componentTransitions = function componentTransitions(component) {
    var transition = componentOption(component, 'transition', to, from) || {};
    return typeof transition === 'string' ? {
      name: transition
    } : transition;
  };

  var fromComponents = from ? Object(_utils_js__WEBPACK_IMPORTED_MODULE_27__[/* getMatchedComponents */ "g"])(from) : [];
  var maxDepth = Math.max(toComponents.length, fromComponents.length);
  var mergedTransitions = [];

  var _loop = function _loop(i) {
    // Clone original objects to prevent overrides
    var toTransitions = Object.assign({}, componentTransitions(toComponents[i]));
    var transitions = Object.assign({}, componentTransitions(fromComponents[i])); // Combine transitions & prefer `leave` properties of "from" route

    Object.keys(toTransitions).filter(function (key) {
      return typeof toTransitions[key] !== 'undefined' && !key.toLowerCase().includes('leave');
    }).forEach(function (key) {
      transitions[key] = toTransitions[key];
    });
    mergedTransitions.push(transitions);
  };

  for (var i = 0; i < maxDepth; i++) {
    _loop(i);
  }

  return mergedTransitions;
}

function loadAsyncComponents(_x, _x2, _x3) {
  return _loadAsyncComponents.apply(this, arguments);
}

function _loadAsyncComponents() {
  _loadAsyncComponents = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(to, from, next) {
    var _this3 = this;

    var Components, startLoader, err, statusCode, message;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            // Check if route changed (this._routeChanged), only if the page is not an error (for validate())
            this._routeChanged = Boolean(app.nuxt.err) || from.name !== to.name;
            this._paramChanged = !this._routeChanged && from.path !== to.path;
            this._queryChanged = !this._paramChanged && from.fullPath !== to.fullPath;
            this._diffQuery = this._queryChanged ? Object(_utils_js__WEBPACK_IMPORTED_MODULE_27__[/* getQueryDiff */ "i"])(to.query, from.query) : [];

            if ((this._routeChanged || this._paramChanged) && this.$loading.start && !this.$loading.manual) {
              this.$loading.start();
            }

            _context2.prev = 5;

            if (!this._queryChanged) {
              _context2.next = 12;
              break;
            }

            _context2.next = 9;
            return Object(_utils_js__WEBPACK_IMPORTED_MODULE_27__[/* resolveRouteComponents */ "r"])(to, function (Component, instance) {
              return {
                Component: Component,
                instance: instance
              };
            });

          case 9:
            Components = _context2.sent;
            // Add a marker on each component that it needs to refresh or not
            startLoader = Components.some(function (_ref2) {
              var Component = _ref2.Component,
                  instance = _ref2.instance;
              var watchQuery = Component.options.watchQuery;

              if (watchQuery === true) {
                return true;
              }

              if (Array.isArray(watchQuery)) {
                return watchQuery.some(function (key) {
                  return _this3._diffQuery[key];
                });
              }

              if (typeof watchQuery === 'function') {
                return watchQuery.apply(instance, [to.query, from.query]);
              }

              return false;
            });

            if (startLoader && this.$loading.start && !this.$loading.manual) {
              this.$loading.start();
            }

          case 12:
            // Call next()
            next();
            _context2.next = 26;
            break;

          case 15:
            _context2.prev = 15;
            _context2.t0 = _context2["catch"](5);
            err = _context2.t0 || {};
            statusCode = err.statusCode || err.status || err.response && err.response.status || 500;
            message = err.message || ''; // Handle chunk loading errors
            // This may be due to a new deployment or a network problem

            if (!/^Loading( CSS)? chunk (\d)+ failed\./.test(message)) {
              _context2.next = 23;
              break;
            }

            window.location.reload(true
            /* skip cache */
            );
            return _context2.abrupt("return");

          case 23:
            this.error({
              statusCode: statusCode,
              message: message
            });
            this.$nuxt.$emit('routeChanged', to, from, err);
            next();

          case 26:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this, [[5, 15]]);
  }));
  return _loadAsyncComponents.apply(this, arguments);
}

function applySSRData(Component, ssrData) {
  if (NUXT.serverRendered && ssrData) {
    Object(_utils_js__WEBPACK_IMPORTED_MODULE_27__[/* applyAsyncData */ "b"])(Component, ssrData);
  }

  Component._Ctor = Component;
  return Component;
} // Get matched components


function resolveComponents(route) {
  return Object(_utils_js__WEBPACK_IMPORTED_MODULE_27__[/* flatMapComponents */ "d"])(route, /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee(Component, _, match, key, index) {
      var _Component;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(typeof Component === 'function' && !Component.options)) {
                _context.next = 4;
                break;
              }

              _context.next = 3;
              return Component();

            case 3:
              Component = _context.sent;

            case 4:
              // Sanitize it and save it
              _Component = applySSRData(Object(_utils_js__WEBPACK_IMPORTED_MODULE_27__[/* sanitizeComponent */ "s"])(Component), NUXT.data ? NUXT.data[index] : null);
              match.components[key] = _Component;
              return _context.abrupt("return", _Component);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x4, _x5, _x6, _x7, _x8) {
      return _ref.apply(this, arguments);
    };
  }());
}

function callMiddleware(Components, context, layout) {
  var _this = this;

  var midd = [];
  var unknownMiddleware = false; // If layout is undefined, only call global middleware

  if (typeof layout !== 'undefined') {
    midd = []; // Exclude global middleware if layout defined (already called before)

    layout = Object(_utils_js__WEBPACK_IMPORTED_MODULE_27__[/* sanitizeComponent */ "s"])(layout);

    if (layout.options.middleware) {
      midd = midd.concat(layout.options.middleware);
    }

    Components.forEach(function (Component) {
      if (Component.options.middleware) {
        midd = midd.concat(Component.options.middleware);
      }
    });
  }

  midd = midd.map(function (name) {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _middleware_js__WEBPACK_IMPORTED_MODULE_26__[/* default */ "a"][name] !== 'function') {
      unknownMiddleware = true;

      _this.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _middleware_js__WEBPACK_IMPORTED_MODULE_26__[/* default */ "a"][name];
  });

  if (unknownMiddleware) {
    return;
  }

  return Object(_utils_js__WEBPACK_IMPORTED_MODULE_27__[/* middlewareSeries */ "o"])(midd, context);
}

function render(_x9, _x10, _x11) {
  return _render.apply(this, arguments);
} // Fix components format in matched, it's due to code-splitting of vue-router


function _render() {
  _render = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(to, from, next) {
    var _this4 = this;

    var spaFallback, fromMatches, nextCalled, _next, matches, Components, errorLayout, layout, _layout, isValid, _iterator, _step, Component, instances, error, _layout2;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            if (!(this._routeChanged === false && this._paramChanged === false && this._queryChanged === false)) {
              _context4.next = 2;
              break;
            }

            return _context4.abrupt("return", next());

          case 2:
            // Handle first render on SPA mode
            spaFallback = false;

            if (to === from) {
              _lastPaths = [];
              spaFallback = true;
            } else {
              fromMatches = [];
              _lastPaths = Object(_utils_js__WEBPACK_IMPORTED_MODULE_27__[/* getMatchedComponents */ "g"])(from, fromMatches).map(function (Component, i) {
                return Object(_utils_js__WEBPACK_IMPORTED_MODULE_27__[/* compile */ "c"])(from.matched[fromMatches[i]].path)(from.params);
              });
            } // nextCalled is true when redirected


            nextCalled = false;

            _next = function _next(path) {
              if (from.path === path.path && _this4.$loading.finish) {
                _this4.$loading.finish();
              }

              if (from.path !== path.path && _this4.$loading.pause) {
                _this4.$loading.pause();
              }

              if (nextCalled) {
                return;
              }

              nextCalled = true;
              next(path);
            }; // Update context


            _context4.next = 8;
            return Object(_utils_js__WEBPACK_IMPORTED_MODULE_27__[/* setContext */ "t"])(app, {
              route: to,
              from: from,
              next: _next.bind(this)
            });

          case 8:
            this._dateLastError = app.nuxt.dateErr;
            this._hadError = Boolean(app.nuxt.err); // Get route's matched components

            matches = [];
            Components = Object(_utils_js__WEBPACK_IMPORTED_MODULE_27__[/* getMatchedComponents */ "g"])(to, matches); // If no Components matched, generate 404

            if (Components.length) {
              _context4.next = 27;
              break;
            }

            _context4.next = 15;
            return callMiddleware.call(this, Components, app.context);

          case 15:
            if (!nextCalled) {
              _context4.next = 17;
              break;
            }

            return _context4.abrupt("return");

          case 17:
            // Load layout for error page
            errorLayout = (_index_js__WEBPACK_IMPORTED_MODULE_28__[/* NuxtError */ "a"].options || _index_js__WEBPACK_IMPORTED_MODULE_28__[/* NuxtError */ "a"]).layout;
            _context4.next = 20;
            return this.loadLayout(typeof errorLayout === 'function' ? errorLayout.call(_index_js__WEBPACK_IMPORTED_MODULE_28__[/* NuxtError */ "a"], app.context) : errorLayout);

          case 20:
            layout = _context4.sent;
            _context4.next = 23;
            return callMiddleware.call(this, Components, app.context, layout);

          case 23:
            if (!nextCalled) {
              _context4.next = 25;
              break;
            }

            return _context4.abrupt("return");

          case 25:
            // Show error page
            app.context.error({
              statusCode: 404,
              message: 'This page could not be found'
            });
            return _context4.abrupt("return", next());

          case 27:
            // Update ._data and other properties if hot reloaded
            Components.forEach(function (Component) {
              if (Component._Ctor && Component._Ctor.options) {
                Component.options.asyncData = Component._Ctor.options.asyncData;
                Component.options.fetch = Component._Ctor.options.fetch;
              }
            }); // Apply transitions

            this.setTransitions(mapTransitions(Components, to, from));
            _context4.prev = 29;
            _context4.next = 32;
            return callMiddleware.call(this, Components, app.context);

          case 32:
            if (!nextCalled) {
              _context4.next = 34;
              break;
            }

            return _context4.abrupt("return");

          case 34:
            if (!app.context._errored) {
              _context4.next = 36;
              break;
            }

            return _context4.abrupt("return", next());

          case 36:
            // Set layout
            _layout = Components[0].options.layout;

            if (typeof _layout === 'function') {
              _layout = _layout(app.context);
            }

            _context4.next = 40;
            return this.loadLayout(_layout);

          case 40:
            _layout = _context4.sent;
            _context4.next = 43;
            return callMiddleware.call(this, Components, app.context, _layout);

          case 43:
            if (!nextCalled) {
              _context4.next = 45;
              break;
            }

            return _context4.abrupt("return");

          case 45:
            if (!app.context._errored) {
              _context4.next = 47;
              break;
            }

            return _context4.abrupt("return", next());

          case 47:
            // Call .validate()
            isValid = true;
            _context4.prev = 48;
            _iterator = _createForOfIteratorHelper(Components);
            _context4.prev = 50;

            _iterator.s();

          case 52:
            if ((_step = _iterator.n()).done) {
              _context4.next = 63;
              break;
            }

            Component = _step.value;

            if (!(typeof Component.options.validate !== 'function')) {
              _context4.next = 56;
              break;
            }

            return _context4.abrupt("continue", 61);

          case 56:
            _context4.next = 58;
            return Component.options.validate(app.context);

          case 58:
            isValid = _context4.sent;

            if (isValid) {
              _context4.next = 61;
              break;
            }

            return _context4.abrupt("break", 63);

          case 61:
            _context4.next = 52;
            break;

          case 63:
            _context4.next = 68;
            break;

          case 65:
            _context4.prev = 65;
            _context4.t0 = _context4["catch"](50);

            _iterator.e(_context4.t0);

          case 68:
            _context4.prev = 68;

            _iterator.f();

            return _context4.finish(68);

          case 71:
            _context4.next = 77;
            break;

          case 73:
            _context4.prev = 73;
            _context4.t1 = _context4["catch"](48);
            // ...If .validate() threw an error
            this.error({
              statusCode: _context4.t1.statusCode || '500',
              message: _context4.t1.message
            });
            return _context4.abrupt("return", next());

          case 77:
            if (isValid) {
              _context4.next = 80;
              break;
            }

            this.error({
              statusCode: 404,
              message: 'This page could not be found'
            });
            return _context4.abrupt("return", next());

          case 80:
            _context4.next = 82;
            return Promise.all(Components.map( /*#__PURE__*/function () {
              var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(Component, i) {
                var childPathChanged, watchParam, watchQuery, promises, hasAsyncData, hasFetch, loadingIncrease, promise, p;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        // Check if only children route changed
                        Component._path = Object(_utils_js__WEBPACK_IMPORTED_MODULE_27__[/* compile */ "c"])(to.matched[matches[i]].path)(to.params);
                        Component._dataRefresh = false;
                        childPathChanged = Component._path !== _lastPaths[i]; // Refresh component (call asyncData & fetch) when:
                        // Route path changed part includes current component
                        // Or route param changed part includes current component and watchParam is not `false`
                        // Or route query is changed and watchQuery returns `true`

                        // Refresh component (call asyncData & fetch) when:
                        // Route path changed part includes current component
                        // Or route param changed part includes current component and watchParam is not `false`
                        // Or route query is changed and watchQuery returns `true`
                        if (_this4._routeChanged && childPathChanged) {
                          Component._dataRefresh = true;
                        } else if (_this4._paramChanged && childPathChanged) {
                          watchParam = Component.options.watchParam;
                          Component._dataRefresh = watchParam !== false;
                        } else if (_this4._queryChanged) {
                          watchQuery = Component.options.watchQuery;

                          if (watchQuery === true) {
                            Component._dataRefresh = true;
                          } else if (Array.isArray(watchQuery)) {
                            Component._dataRefresh = watchQuery.some(function (key) {
                              return _this4._diffQuery[key];
                            });
                          } else if (typeof watchQuery === 'function') {
                            if (!instances) {
                              instances = Object(_utils_js__WEBPACK_IMPORTED_MODULE_27__[/* getMatchedComponentsInstances */ "h"])(to);
                            }

                            Component._dataRefresh = watchQuery.apply(instances[i], [to.query, from.query]);
                          }
                        }

                        if (!(!_this4._hadError && _this4._isMounted && !Component._dataRefresh)) {
                          _context3.next = 6;
                          break;
                        }

                        return _context3.abrupt("return");

                      case 6:
                        promises = [];
                        hasAsyncData = Component.options.asyncData && typeof Component.options.asyncData === 'function';
                        hasFetch = Boolean(Component.options.fetch) && Component.options.fetch.length;
                        loadingIncrease = hasAsyncData && hasFetch ? 30 : 45; // Call asyncData(context)

                        // Call asyncData(context)
                        if (hasAsyncData) {
                          promise = Object(_utils_js__WEBPACK_IMPORTED_MODULE_27__[/* promisify */ "q"])(Component.options.asyncData, app.context);
                          promise.then(function (asyncDataResult) {
                            Object(_utils_js__WEBPACK_IMPORTED_MODULE_27__[/* applyAsyncData */ "b"])(Component, asyncDataResult);

                            if (_this4.$loading.increase) {
                              _this4.$loading.increase(loadingIncrease);
                            }
                          });
                          promises.push(promise);
                        } // Check disabled page loading


                        // Check disabled page loading
                        _this4.$loading.manual = Component.options.loading === false; // Call fetch(context)

                        // Call fetch(context)
                        if (hasFetch) {
                          p = Component.options.fetch(app.context);

                          if (!p || !(p instanceof Promise) && typeof p.then !== 'function') {
                            p = Promise.resolve(p);
                          }

                          p.then(function (fetchResult) {
                            if (_this4.$loading.increase) {
                              _this4.$loading.increase(loadingIncrease);
                            }
                          });
                          promises.push(p);
                        }

                        return _context3.abrupt("return", Promise.all(promises));

                      case 14:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3);
              }));

              return function (_x13, _x14) {
                return _ref3.apply(this, arguments);
              };
            }()));

          case 82:
            // If not redirected
            if (!nextCalled) {
              if (this.$loading.finish && !this.$loading.manual) {
                this.$loading.finish();
              }

              next();
            }

            _context4.next = 99;
            break;

          case 85:
            _context4.prev = 85;
            _context4.t2 = _context4["catch"](29);
            error = _context4.t2 || {};

            if (!(error.message === 'ERR_REDIRECT')) {
              _context4.next = 90;
              break;
            }

            return _context4.abrupt("return", this.$nuxt.$emit('routeChanged', to, from, error));

          case 90:
            _lastPaths = [];
            Object(_utils_js__WEBPACK_IMPORTED_MODULE_27__[/* globalHandleError */ "k"])(error); // Load error layout

            _layout2 = (_index_js__WEBPACK_IMPORTED_MODULE_28__[/* NuxtError */ "a"].options || _index_js__WEBPACK_IMPORTED_MODULE_28__[/* NuxtError */ "a"]).layout;

            if (typeof _layout2 === 'function') {
              _layout2 = _layout2(app.context);
            }

            _context4.next = 96;
            return this.loadLayout(_layout2);

          case 96:
            this.error(error);
            this.$nuxt.$emit('routeChanged', to, from, error);
            next();

          case 99:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this, [[29, 85], [48, 73], [50, 65, 68, 71]]);
  }));
  return _render.apply(this, arguments);
}

function normalizeComponents(to, ___) {
  Object(_utils_js__WEBPACK_IMPORTED_MODULE_27__[/* flatMapComponents */ "d"])(to, function (Component, _, match, key) {
    if (Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Component) === 'object' && !Component.options) {
      // Updated via vue-router resolveAsyncComponents()
      Component = vue__WEBPACK_IMPORTED_MODULE_24__[/* default */ "a"].extend(Component);
      Component._Ctor = Component;
      match.components[key] = Component;
    }

    return Component;
  });
}

function setLayoutForNextPage(to) {
  // Set layout
  var hasError = Boolean(this.$options.nuxt.err);

  if (this._hadError && this._dateLastError === this.$options.nuxt.dateErr) {
    hasError = false;
  }

  var layout = hasError ? (_index_js__WEBPACK_IMPORTED_MODULE_28__[/* NuxtError */ "a"].options || _index_js__WEBPACK_IMPORTED_MODULE_28__[/* NuxtError */ "a"]).layout : to.matched[0].components.default.options.layout;

  if (typeof layout === 'function') {
    layout = layout(app.context);
  }

  this.setLayout(layout);
}

function checkForErrors(app) {
  // Hide error component if no error
  if (app._hadError && app._dateLastError === app.$options.nuxt.dateErr) {
    app.error();
  }
} // When navigating on a different route but the same component is used, Vue.js
// Will not update the instance data, so we have to update $data ourselves


function fixPrepatch(to, ___) {
  var _this2 = this;

  if (this._routeChanged === false && this._paramChanged === false && this._queryChanged === false) {
    return;
  }

  var instances = Object(_utils_js__WEBPACK_IMPORTED_MODULE_27__[/* getMatchedComponentsInstances */ "h"])(to);
  var Components = Object(_utils_js__WEBPACK_IMPORTED_MODULE_27__[/* getMatchedComponents */ "g"])(to);
  var triggerScroll = false;
  vue__WEBPACK_IMPORTED_MODULE_24__[/* default */ "a"].nextTick(function () {
    instances.forEach(function (instance, i) {
      if (!instance || instance._isDestroyed) {
        return;
      }

      if (instance.constructor._dataRefresh && Components[i] === instance.constructor && instance.$vnode.data.keepAlive !== true && typeof instance.constructor.options.data === 'function') {
        var newData = instance.constructor.options.data.call(instance);

        for (var key in newData) {
          vue__WEBPACK_IMPORTED_MODULE_24__[/* default */ "a"].set(instance.$data, key, newData[key]);
        }

        triggerScroll = true;
      }
    });

    if (triggerScroll) {
      // Ensure to trigger scroll event after calling scrollBehavior
      window.$nuxt.$nextTick(function () {
        window.$nuxt.$emit('triggerScroll');
      });
    }

    checkForErrors(_this2);
  });
}

function nuxtReady(_app) {
  window.onNuxtReadyCbs.forEach(function (cb) {
    if (typeof cb === 'function') {
      cb(_app);
    }
  }); // Special JSDOM

  if (typeof window._onNuxtLoaded === 'function') {
    window._onNuxtLoaded(_app);
  } // Add router hooks


  router.afterEach(function (to, from) {
    // Wait for fixPrepatch + $data updates
    vue__WEBPACK_IMPORTED_MODULE_24__[/* default */ "a"].nextTick(function () {
      return _app.$nuxt.$emit('routeChanged', to, from);
    });
  });
}

function mountApp(_x12) {
  return _mountApp.apply(this, arguments);
}

function _mountApp() {
  _mountApp = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(__app) {
    var _app, mount, Components, clientFirstMount;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            // Set global variables
            app = __app.app;
            router = __app.router;
            store = __app.store; // Create Vue instance

            _app = new vue__WEBPACK_IMPORTED_MODULE_24__[/* default */ "a"](app); // Mounts Vue app to DOM element

            mount = function mount() {
              _app.$mount('#__nuxt'); // Add afterEach router hooks


              router.afterEach(normalizeComponents);
              router.afterEach(setLayoutForNextPage.bind(_app));
              router.afterEach(fixPrepatch.bind(_app)); // Listen for first Vue update

              vue__WEBPACK_IMPORTED_MODULE_24__[/* default */ "a"].nextTick(function () {
                // Call window.{{globals.readyCallback}} callbacks
                nuxtReady(_app);
              });
            }; // Resolve route components


            _context5.next = 7;
            return Promise.all(resolveComponents(app.context.route));

          case 7:
            Components = _context5.sent;
            // Enable transitions
            _app.setTransitions = _app.$options.nuxt.setTransitions.bind(_app);

            if (Components.length) {
              _app.setTransitions(mapTransitions(Components, router.currentRoute));

              _lastPaths = router.currentRoute.matched.map(function (route) {
                return Object(_utils_js__WEBPACK_IMPORTED_MODULE_27__[/* compile */ "c"])(route.path)(router.currentRoute.params);
              });
            } // Initialize error handler


            _app.$loading = {}; // To avoid error while _app.$nuxt does not exist

            if (NUXT.error) {
              _app.error(NUXT.error);
            } // Add beforeEach router hooks


            router.beforeEach(loadAsyncComponents.bind(_app));
            router.beforeEach(render.bind(_app)); // Fix in static: remove trailing slash to force hydration
            // Full static, if server-rendered: hydrate, to allow custom redirect to generated page
            // Fix in static: remove trailing slash to force hydration

            if (!(NUXT.serverRendered && Object(_utils_js__WEBPACK_IMPORTED_MODULE_27__[/* isSamePath */ "n"])(NUXT.routePath, _app.context.route.path))) {
              _context5.next = 16;
              break;
            }

            return _context5.abrupt("return", mount());

          case 16:
            // First render on client-side
            clientFirstMount = function clientFirstMount() {
              normalizeComponents(router.currentRoute, router.currentRoute);
              setLayoutForNextPage.call(_app, router.currentRoute);
              checkForErrors(_app); // Don't call fixPrepatch.call(_app, router.currentRoute, router.currentRoute) since it's first render

              mount();
            }; // fix: force next tick to avoid having same timestamp when an error happen on spa fallback


            _context5.next = 19;
            return new Promise(function (resolve) {
              return setTimeout(resolve, 0);
            });

          case 19:
            render.call(_app, router.currentRoute, router.currentRoute, function (path) {
              // If not redirected
              if (!path) {
                clientFirstMount();
                return;
              } // Add a one-time afterEach hook to
              // mount the app wait for redirect and route gets resolved


              var unregisterHook = router.afterEach(function (to, from) {
                unregisterHook();
                clientFirstMount();
              }); // Push the path and let route to be resolved

              router.push(path, undefined, function (err) {
                if (err) {
                  errorHandler(err);
                }
              });
            });

          case 20:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _mountApp.apply(this, arguments);
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(58)))

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _extract_css_chunks_webpack_plugin_dist_loader_js_ref_3_oneOf_1_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_3_oneOf_1_2_nuxt_components_dist_loader_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(208);
/* harmony import */ var _extract_css_chunks_webpack_plugin_dist_loader_js_ref_3_oneOf_1_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_3_oneOf_1_2_nuxt_components_dist_loader_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_extract_css_chunks_webpack_plugin_dist_loader_js_ref_3_oneOf_1_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_3_oneOf_1_2_nuxt_components_dist_loader_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 5:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createGetCounter */
/* unused harmony export empty */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return globalHandleError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return interopDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return hasFetch; });
/* unused harmony export purifyData */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getChildrenComponentInstancesUsingFetch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return applyAsyncData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return sanitizeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getMatchedComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getMatchedComponentsInstances; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return flatMapComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return resolveRouteComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return getRouteData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return setContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return middlewareSeries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return promisify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return compile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getQueryDiff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return normalizeError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addLifecycleHook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return urlJoin; });
/* unused harmony export stripTrailingSlash */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return isSamePath; });
/* unused harmony export setScrollRestoration */
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(42);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(43);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(19);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(13);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(32);
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(68);
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(20);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(352);
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(9);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(15);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(36);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(41);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(21);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(26);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(14);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(29);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(12);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(25);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(205);
/* harmony import */ var core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(157);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(158);
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(62);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(159);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_string_repeat_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(355);
/* harmony import */ var core_js_modules_es_string_repeat_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_repeat_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(96);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(113);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(2);
/* harmony import */ var ufo__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(56);













function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }






















 // window.{{globals.loadedCallback}} hook
// Useful for jsdom testing or plugins (https://github.com/tmpvar/jsdom#dealing-with-asynchronous-script-loading)

if (true) {
  window.onNuxtReadyCbs = [];

  window.onNuxtReady = function (cb) {
    window.onNuxtReadyCbs.push(cb);
  };
}

function createGetCounter(counterObject) {
  var defaultKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return function getCounter() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultKey;

    if (counterObject[id] === undefined) {
      counterObject[id] = 0;
    }

    return counterObject[id]++;
  };
}
function empty() {}
function globalHandleError(error) {
  if (vue__WEBPACK_IMPORTED_MODULE_32__[/* default */ "a"].config.errorHandler) {
    vue__WEBPACK_IMPORTED_MODULE_32__[/* default */ "a"].config.errorHandler(error);
  }
}
function interopDefault(promise) {
  return promise.then(function (m) {
    return m.default || m;
  });
}
function hasFetch(vm) {
  return vm.$options && typeof vm.$options.fetch === 'function' && !vm.$options.fetch.length;
}
function purifyData(data) {
  if (true) {
    return data;
  }

  return Object.entries(data).filter(function (_ref) {
    var _ref2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    var valid = !(value instanceof Function) && !(value instanceof Promise);

    if (!valid) {
      console.warn("".concat(key, " is not able to be stringified. This will break in a production environment."));
    }

    return valid;
  }).reduce(function (obj, _ref3) {
    var _ref4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(_ref3, 2),
        key = _ref4[0],
        value = _ref4[1];

    obj[key] = value;
    return obj;
  }, {});
}
function getChildrenComponentInstancesUsingFetch(vm) {
  var instances = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var children = vm.$children || [];

  var _iterator = _createForOfIteratorHelper(children),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var child = _step.value;

      if (child.$fetch) {
        instances.push(child);
        continue; // Don't get the children since it will reload the template
      }

      if (child.$children) {
        getChildrenComponentInstancesUsingFetch(child, instances);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return instances;
}
function applyAsyncData(Component, asyncData) {
  if ( // For SSR, we once all this function without second param to just apply asyncData
  // Prevent doing this for each SSR request
  !asyncData && Component.options.__hasNuxtData) {
    return;
  }

  var ComponentData = Component.options._originDataFn || Component.options.data || function () {
    return {};
  };

  Component.options._originDataFn = ComponentData;

  Component.options.data = function () {
    var data = ComponentData.call(this, this);

    if (this.$ssrContext) {
      asyncData = this.$ssrContext.asyncData[Component.cid];
    }

    return _objectSpread(_objectSpread({}, data), asyncData);
  };

  Component.options.__hasNuxtData = true;

  if (Component._Ctor && Component._Ctor.options) {
    Component._Ctor.options.data = Component.options.data;
  }
}
function sanitizeComponent(Component) {
  // If Component already sanitized
  if (Component.options && Component._Ctor === Component) {
    return Component;
  }

  if (!Component.options) {
    Component = vue__WEBPACK_IMPORTED_MODULE_32__[/* default */ "a"].extend(Component); // fix issue #6

    Component._Ctor = Component;
  } else {
    Component._Ctor = Component;
    Component.extendOptions = Component.options;
  } // If no component name defined, set file path as name, (also fixes #5703)


  if (!Component.options.name && Component.options.__file) {
    Component.options.name = Component.options.__file;
  }

  return Component;
}
function getMatchedComponents(route) {
  var matches = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var prop = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'components';
  return Array.prototype.concat.apply([], route.matched.map(function (m, index) {
    return Object.keys(m[prop]).map(function (key) {
      matches && matches.push(index);
      return m[prop][key];
    });
  }));
}
function getMatchedComponentsInstances(route) {
  var matches = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return getMatchedComponents(route, matches, 'instances');
}
function flatMapComponents(route, fn) {
  return Array.prototype.concat.apply([], route.matched.map(function (m, index) {
    return Object.keys(m.components).reduce(function (promises, key) {
      if (m.components[key]) {
        promises.push(fn(m.components[key], m.instances[key], m, key, index));
      } else {
        delete m.components[key];
      }

      return promises;
    }, []);
  }));
}
function resolveRouteComponents(route, fn) {
  return Promise.all(flatMapComponents(route, /*#__PURE__*/function () {
    var _ref5 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee(Component, instance, match, key) {
      var timeNow, previousReloadTime;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(typeof Component === 'function' && !Component.options)) {
                _context.next = 11;
                break;
              }

              _context.prev = 1;
              _context.next = 4;
              return Component();

            case 4:
              Component = _context.sent;
              _context.next = 11;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](1);

              // Handle webpack chunk loading errors
              // This may be due to a new deployment or a network problem
              if (_context.t0 && _context.t0.name === 'ChunkLoadError' && typeof window !== 'undefined' && window.sessionStorage) {
                timeNow = Date.now();
                previousReloadTime = parseInt(window.sessionStorage.getItem('nuxt-reload')); // check for previous reload time not to reload infinitely

                if (!previousReloadTime || previousReloadTime + 60000 < timeNow) {
                  window.sessionStorage.setItem('nuxt-reload', timeNow);
                  window.location.reload(true
                  /* skip cache */
                  );
                }
              }

              throw _context.t0;

            case 11:
              match.components[key] = Component = sanitizeComponent(Component);
              return _context.abrupt("return", typeof fn === 'function' ? fn(Component, instance, match, key) : Component);

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 7]]);
    }));

    return function (_x, _x2, _x3, _x4) {
      return _ref5.apply(this, arguments);
    };
  }()));
}
function getRouteData(_x5) {
  return _getRouteData.apply(this, arguments);
}

function _getRouteData() {
  _getRouteData = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(route) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (route) {
              _context2.next = 2;
              break;
            }

            return _context2.abrupt("return");

          case 2:
            _context2.next = 4;
            return resolveRouteComponents(route);

          case 4:
            return _context2.abrupt("return", _objectSpread(_objectSpread({}, route), {}, {
              meta: getMatchedComponents(route).map(function (Component, index) {
                return _objectSpread(_objectSpread({}, Component.options.meta), (route.matched[index] || {}).meta);
              })
            }));

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getRouteData.apply(this, arguments);
}

function setContext(_x6, _x7) {
  return _setContext.apply(this, arguments);
}

function _setContext() {
  _setContext = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(app, context) {
    var _yield$Promise$all, _yield$Promise$all2, currentRouteData, fromRouteData;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            // If context not defined, create it
            if (!app.context) {
              app.context = {
                isStatic: true,
                isDev: false,
                isHMR: false,
                app: app,
                store: app.store,
                payload: context.payload,
                error: context.error,
                base: app.router.options.base,
                env: {
                  "GJS_DEBUG_TOPICS": "JS ERROR;JS LOG",
                  "LESSOPEN": "| /usr/bin/lesspipe %s",
                  "USER": "stanislav",
                  "LC_TIME": "en_US.UTF-8",
                  "npm_config_user_agent": "yarn/2.4.2 npm/? node/14.14.0 linux x64",
                  "SSH_AGENT_PID": "2192",
                  "XDG_SESSION_TYPE": "x11",
                  "npm_node_execpath": "/tmp/xfs-692e0406/node",
                  "SHLVL": "1",
                  "HOME": "/home/stanislav",
                  "OLDPWD": "/home/stanislav/matter-labs",
                  "DESKTOP_SESSION": "ubuntu",
                  "NVM_BIN": "/home/stanislav/.nvm/versions/node/v14.14.0/bin",
                  "NVM_INC": "/home/stanislav/.nvm/versions/node/v14.14.0/include/node",
                  "GNOME_SHELL_SESSION_MODE": "ubuntu",
                  "GTK_MODULES": "gail:atk-bridge",
                  "LC_MONETARY": "en_US.UTF-8",
                  "MANAGERPID": "2008",
                  "DBUS_SESSION_BUS_ADDRESS": "unix:path=/run/user/1000/bus",
                  "COLORTERM": "truecolor",
                  "NVM_DIR": "/home/stanislav/.nvm",
                  "ZKSYNC_HOME": "/home/stanislav/matter-labs/zksync-dev",
                  "MANDATORY_PATH": "/usr/share/gconf/ubuntu.mandatory.path",
                  "IM_CONFIG_PHASE": "1",
                  "LOGNAME": "stanislav",
                  "JOURNAL_STREAM": "9:49829",
                  "_": "/usr/bin/yarn",
                  "XDG_SESSION_CLASS": "user",
                  "DEFAULTS_PATH": "/usr/share/gconf/ubuntu.default.path",
                  "USERNAME": "stanislav",
                  "TERM": "xterm-256color",
                  "GNOME_DESKTOP_SESSION_ID": "this-is-deprecated",
                  "WINDOWPATH": "2",
                  "PATH": "/tmp/xfs-692e0406:/tmp/xfs-dcadbf92:/tmp/xfs-cf8295f1:/home/stanislav/matter-labs/compiler-yul/target/release:/home/stanislav/matter-labs/my-scripts:/home/stanislav/Documents/swift-5.3.2-RELEASE-ubuntu18.04/usr/bin:/home/stanislav/.yarn/bin:/home/stanislav/matter-labs/zksync-dev/bin:/home/stanislav/.nvm/versions/node/v14.14.0/bin:/home/stanislav/.cargo/bin:/home/stanislav/.local/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin::/usr/local/ssl/bin:/usr/local/go/bin",
                  "SESSION_MANAGER": "local/stanislav-ThinkPad-X1-Carbon-Gen-8:@/tmp/.ICE-unix/2228,unix/stanislav-ThinkPad-X1-Carbon-Gen-8:/tmp/.ICE-unix/2228",
                  "INVOCATION_ID": "ab255ca5ff6e4fc993b61cff7eb02732",
                  "PAPERSIZE": "letter",
                  "XDG_MENU_PREFIX": "gnome-",
                  "LC_ADDRESS": "en_US.UTF-8",
                  "GNOME_TERMINAL_SCREEN": "/org/gnome/Terminal/screen/49a9a904_b26d_4382_8afd_cc7c35c0b78d",
                  "XDG_RUNTIME_DIR": "/run/user/1000",
                  "DISPLAY": ":0",
                  "LANG": "en_US.UTF-8",
                  "XDG_CURRENT_DESKTOP": "ubuntu:GNOME",
                  "LC_TELEPHONE": "en_US.UTF-8",
                  "OPENSSL_DIR": "/usr/local/ssl",
                  "XMODIFIERS": "@im=ibus",
                  "XDG_SESSION_DESKTOP": "ubuntu",
                  "XAUTHORITY": "/run/user/1000/gdm/Xauthority",
                  "LS_COLORS": "rs=0:di=01;34:ln=01;36:mh=00:pi=40;33:so=01;35:do=01;35:bd=40;33;01:cd=40;33;01:or=40;31;01:mi=00:su=37;41:sg=30;43:ca=30;41:tw=30;42:ow=34;42:st=37;44:ex=01;32:*.tar=01;31:*.tgz=01;31:*.arc=01;31:*.arj=01;31:*.taz=01;31:*.lha=01;31:*.lz4=01;31:*.lzh=01;31:*.lzma=01;31:*.tlz=01;31:*.txz=01;31:*.tzo=01;31:*.t7z=01;31:*.zip=01;31:*.z=01;31:*.dz=01;31:*.gz=01;31:*.lrz=01;31:*.lz=01;31:*.lzo=01;31:*.xz=01;31:*.zst=01;31:*.tzst=01;31:*.bz2=01;31:*.bz=01;31:*.tbz=01;31:*.tbz2=01;31:*.tz=01;31:*.deb=01;31:*.rpm=01;31:*.jar=01;31:*.war=01;31:*.ear=01;31:*.sar=01;31:*.rar=01;31:*.alz=01;31:*.ace=01;31:*.zoo=01;31:*.cpio=01;31:*.7z=01;31:*.rz=01;31:*.cab=01;31:*.wim=01;31:*.swm=01;31:*.dwm=01;31:*.esd=01;31:*.jpg=01;35:*.jpeg=01;35:*.mjpg=01;35:*.mjpeg=01;35:*.gif=01;35:*.bmp=01;35:*.pbm=01;35:*.pgm=01;35:*.ppm=01;35:*.tga=01;35:*.xbm=01;35:*.xpm=01;35:*.tif=01;35:*.tiff=01;35:*.png=01;35:*.svg=01;35:*.svgz=01;35:*.mng=01;35:*.pcx=01;35:*.mov=01;35:*.mpg=01;35:*.mpeg=01;35:*.m2v=01;35:*.mkv=01;35:*.webm=01;35:*.ogm=01;35:*.mp4=01;35:*.m4v=01;35:*.mp4v=01;35:*.vob=01;35:*.qt=01;35:*.nuv=01;35:*.wmv=01;35:*.asf=01;35:*.rm=01;35:*.rmvb=01;35:*.flc=01;35:*.avi=01;35:*.fli=01;35:*.flv=01;35:*.gl=01;35:*.dl=01;35:*.xcf=01;35:*.xwd=01;35:*.yuv=01;35:*.cgm=01;35:*.emf=01;35:*.ogv=01;35:*.ogx=01;35:*.aac=00;36:*.au=00;36:*.flac=00;36:*.m4a=00;36:*.mid=00;36:*.midi=00;36:*.mka=00;36:*.mp3=00;36:*.mpc=00;36:*.ogg=00;36:*.ra=00;36:*.wav=00;36:*.oga=00;36:*.opus=00;36:*.spx=00;36:*.xspf=00;36:",
                  "GNOME_TERMINAL_SERVICE": ":1.1362",
                  "SSH_AUTH_SOCK": "/run/user/1000/keyring/ssh",
                  "SHELL": "/bin/bash",
                  "LC_NAME": "en_US.UTF-8",
                  "npm_lifecycle_event": "generate",
                  "QT_ACCESSIBILITY": "1",
                  "WEB3_API": "https://eth-mainnet.alchemyapi.io/v2/ZfzGmD-NkSYIU6wTdpUQkrJnAPKfUC_o",
                  "GDMSESSION": "ubuntu",
                  "YARN_IGNORE_CWD": "1",
                  "LESSCLOSE": "/usr/bin/lesspipe %s %s",
                  "LC_MEASUREMENT": "en_US.UTF-8",
                  "GPG_AGENT_INFO": "/run/user/1000/gnupg/S.gpg-agent:0:1",
                  "GJS_DEBUG_OUTPUT": "stderr",
                  "LC_IDENTIFICATION": "en_US.UTF-8",
                  "QT_IM_MODULE": "ibus",
                  "PWD": "/home/stanislav/matter-labs/zksync-docs",
                  "BERRY_BIN_FOLDER": "/tmp/xfs-692e0406",
                  "npm_execpath": "/tmp/xfs-692e0406/yarn",
                  "XDG_CONFIG_DIRS": "/etc/xdg/xdg-ubuntu:/etc/xdg",
                  "NVM_CD_FLAGS": "",
                  "XDG_DATA_DIRS": "/usr/share/ubuntu:/usr/local/share/:/usr/share/:/var/lib/snapd/desktop",
                  "LC_NUMERIC": "en_US.UTF-8",
                  "LC_PAPER": "en_US.UTF-8",
                  "VTE_VERSION": "6003",
                  "ZK_SYNC_LIBRARY_PATH": "/home/stanislav/matter-labs/zksync-python/zks-crypto-linux-x64.so",
                  "INIT_CWD": "/home/stanislav/matter-labs/zksync-docs",
                  "NODE_ENV": "production",
                  "_applied": "true",
                  "SENTRY_DSN": "https://1f18c5c8e8fb4f2491be8d9daac67145@o496053.ingest.sentry.io/5635442",
                  "SITE_TITLE": "zkSync — Rely on math, not validators",
                  "SITE_DESCRIPTION": "zkSync is a ZK rollup solving Ethereum scalability with zero security compromises.",
                  "SITE_KEYWORDS": "\"zkSync, Matter Labs, rollup, ZK rollup, zero confirmation, ZKP, zero-knowledge proofs, Ethereum, crypto, blockchain, permissionless, L2, secure payments, scalable",
                  "GTAG_ID": "GTM-T5WRP8N",
                  "APP_GIT_VERSION": "2.2.0",
                  "APP_GIT_REVISION": "b88ec0d",
                  "APP_ENV": "dev",
                  "APP_GIT_UPDATED_AT": "Thu Nov 4 12:17:23 2021 +0200",
                  "IS_LOCALHOST": "1"
                }
              }; // Only set once

              if (context.req) {
                app.context.req = context.req;
              }

              if (context.res) {
                app.context.res = context.res;
              }

              if (context.ssrContext) {
                app.context.ssrContext = context.ssrContext;
              }

              app.context.redirect = function (status, path, query) {
                if (!status) {
                  return;
                }

                app.context._redirected = true; // if only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })

                var pathType = Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(path);

                if (typeof status !== 'number' && (pathType === 'undefined' || pathType === 'object')) {
                  query = path || {};
                  path = status;
                  pathType = Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(path);
                  status = 302;
                }

                if (pathType === 'object') {
                  path = app.router.resolve(path).route.fullPath;
                } // "/absolute/route", "./relative/route" or "../relative/route"


                if (/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) {
                  app.context.next({
                    path: path,
                    query: query,
                    status: status
                  });
                } else {
                  path = Object(ufo__WEBPACK_IMPORTED_MODULE_33__[/* withQuery */ "d"])(path, query);

                  if (false) {}

                  if (true) {
                    // https://developer.mozilla.org/en-US/docs/Web/API/Location/replace
                    window.location.replace(path); // Throw a redirect error

                    throw new Error('ERR_REDIRECT');
                  }
                }
              };

              if (false) {}

              if (true) {
                app.context.nuxtState = window.__NUXT__;
              }
            } // Dynamic keys


            _context3.next = 3;
            return Promise.all([getRouteData(context.route), getRouteData(context.from)]);

          case 3:
            _yield$Promise$all = _context3.sent;
            _yield$Promise$all2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(_yield$Promise$all, 2);
            currentRouteData = _yield$Promise$all2[0];
            fromRouteData = _yield$Promise$all2[1];

            if (context.route) {
              app.context.route = currentRouteData;
            }

            if (context.from) {
              app.context.from = fromRouteData;
            }

            app.context.next = context.next;
            app.context._redirected = false;
            app.context._errored = false;
            app.context.isHMR = false;
            app.context.params = app.context.route.params || {};
            app.context.query = app.context.route.query || {};

          case 15:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _setContext.apply(this, arguments);
}

function middlewareSeries(promises, appContext) {
  if (!promises.length || appContext._redirected || appContext._errored) {
    return Promise.resolve();
  }

  return promisify(promises[0], appContext).then(function () {
    return middlewareSeries(promises.slice(1), appContext);
  });
}
function promisify(fn, context) {
  var promise;

  if (fn.length === 2) {
    // fn(context, callback)
    promise = new Promise(function (resolve) {
      fn(context, function (err, data) {
        if (err) {
          context.error(err);
        }

        data = data || {};
        resolve(data);
      });
    });
  } else {
    promise = fn(context);
  }

  if (promise && promise instanceof Promise && typeof promise.then === 'function') {
    return promise;
  }

  return Promise.resolve(promise);
} // Imported from vue-router

function getLocation(base, mode) {
  if (mode === 'hash') {
    return window.location.hash.replace(/^#\//, '');
  }

  base = decodeURI(base).slice(0, -1); // consideration is base is normalized with trailing slash

  var path = decodeURI(window.location.pathname);

  if (base && path.startsWith(base)) {
    path = path.slice(base.length);
  }

  var fullPath = (path || '/') + window.location.search + window.location.hash;
  return Object(ufo__WEBPACK_IMPORTED_MODULE_33__[/* normalizeURL */ "c"])(fullPath);
} // Imported from path-to-regexp

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */

function compile(str, options) {
  return tokensToFunction(parse(str, options), options);
}
function getQueryDiff(toQuery, fromQuery) {
  var diff = {};

  var queries = _objectSpread(_objectSpread({}, toQuery), fromQuery);

  for (var k in queries) {
    if (String(toQuery[k]) !== String(fromQuery[k])) {
      diff[k] = true;
    }
  }

  return diff;
}
function normalizeError(err) {
  var message;

  if (!(err.message || typeof err === 'string')) {
    try {
      message = JSON.stringify(err, null, 2);
    } catch (e) {
      message = "[".concat(err.constructor.name, "]");
    }
  } else {
    message = err.message || err;
  }

  return _objectSpread(_objectSpread({}, err), {}, {
    message: message,
    statusCode: err.statusCode || err.status || err.response && err.response.status || 500
  });
}
/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */

var PATH_REGEXP = new RegExp([// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)', // Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');
/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */

function parse(str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || '/';
  var res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length; // Ignore already escaped sequences.

    if (escaped) {
      path += escaped[1];
      continue;
    }

    var next = str[index];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7]; // Push the current path onto the tokens.

    if (path) {
      tokens.push(path);
      path = '';
    }

    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;
    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: Boolean(asterisk),
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  } // Match any characters still remaining.


  if (index < str.length) {
    path += str.substr(index);
  } // If the path exists, push it onto the end.


  if (path) {
    tokens.push(path);
  }

  return tokens;
}
/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */


function encodeURIComponentPretty(str, slashAllowed) {
  var re = slashAllowed ? /[?#]/g : /[/?#]/g;
  return encodeURI(str).replace(re, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}
/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */


function encodeAsterisk(str) {
  return encodeURIComponentPretty(str, true);
}
/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */


function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
}
/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */


function escapeGroup(group) {
  return group.replace(/([=!:$/()])/g, '\\$1');
}
/**
 * Expose a method for transforming tokens into the path function.
 */


function tokensToFunction(tokens, options) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length); // Compile all the patterns before compilation.

  for (var i = 0; i < tokens.length; i++) {
    if (Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(tokens[i]) === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options));
    }
  }

  return function (obj, opts) {
    var path = '';
    var data = obj || {};
    var options = opts || {};
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (var _i = 0; _i < tokens.length; _i++) {
      var token = tokens[_i];

      if (typeof token === 'string') {
        path += token;
        continue;
      }

      var value = data[token.name || 'pathMatch'];
      var segment = void 0;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }

      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }

        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[_i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue;
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[_i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }

      path += token.prefix + segment;
    }

    return path;
  };
}
/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */


function flags(options) {
  return options && options.sensitive ? '' : 'i';
}

function addLifecycleHook(vm, hook, fn) {
  if (!vm.$options[hook]) {
    vm.$options[hook] = [];
  }

  if (!vm.$options[hook].includes(fn)) {
    vm.$options[hook].push(fn);
  }
}
var urlJoin = ufo__WEBPACK_IMPORTED_MODULE_33__[/* joinURL */ "b"];
var stripTrailingSlash = ufo__WEBPACK_IMPORTED_MODULE_33__[/* withoutTrailingSlash */ "e"];
var isSamePath = ufo__WEBPACK_IMPORTED_MODULE_33__[/* isSamePath */ "a"];
function setScrollRestoration(newVal) {
  try {
    window.history.scrollRestoration = newVal;
  } catch (e) {}
}

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ createApp; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ layouts_error["a" /* default */]; });

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(17);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(42);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(16);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptors.js
var es_object_get_own_property_descriptors = __webpack_require__(43);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(68);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(41);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(25);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(101);

// EXTERNAL MODULE: ./node_modules/vue-meta/dist/vue-meta.esm.browser.js
var vue_meta_esm_browser = __webpack_require__(322);

// EXTERNAL MODULE: ./node_modules/vue-client-only/dist/vue-client-only.common.js
var vue_client_only_common = __webpack_require__(163);
var vue_client_only_common_default = /*#__PURE__*/__webpack_require__.n(vue_client_only_common);

// EXTERNAL MODULE: ./node_modules/vue-no-ssr/dist/vue-no-ssr.common.js
var vue_no_ssr_common = __webpack_require__(85);
var vue_no_ssr_common_default = /*#__PURE__*/__webpack_require__.n(vue_no_ssr_common);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__(26);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(14);

// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.esm.js
var vue_router_esm = __webpack_require__(164);

// EXTERNAL MODULE: ./node_modules/ufo/dist/index.mjs
var dist = __webpack_require__(56);

// EXTERNAL MODULE: ./node_modules/.cache/nuxt/utils.js
var utils = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.timers.js
var web_timers = __webpack_require__(46);

// CONCATENATED MODULE: ./node_modules/.cache/nuxt/router.scrollBehavior.js




/* harmony default export */ var router_scrollBehavior = (function (_x, _x2, _x3) {
  return router_scrollBehavior_ref.apply(this, arguments);
});

function router_scrollBehavior_ref() {
  router_scrollBehavior_ref = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee(to, from, savedPosition) {
    var findEl, el, offsetTop;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (to.path !== from.path) {
              this.app.$store.commit("scroll/setLastPath", from.path);
              this.app.$store.commit("scroll/setLastScroll", savedPosition);
            }

            if (!savedPosition) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return", savedPosition);

          case 3:
            findEl = function findEl(hash, x) {
              return document.querySelector(hash) || new Promise(function (resolve) {
                if (x > 100) {
                  return resolve();
                }

                setTimeout(function () {
                  resolve(findEl(hash, ++x || 1));
                }, 200);
              });
            };

            if (!to.hash) {
              _context.next = 14;
              break;
            }

            _context.next = 7;
            return findEl(to.hash);

          case 7:
            el = _context.sent;
            offsetTop = el.getBoundingClientRect().top + window.pageYOffset - 84;
            /* 84px - size of the header */

            if (!("scrollBehavior" in document.documentElement.style)) {
              _context.next = 13;
              break;
            }

            return _context.abrupt("return", window.scrollTo({
              top: offsetTop,
              behavior: "smooth"
            }));

          case 13:
            return _context.abrupt("return", window.scrollTo(0, offsetTop));

          case 14:
            return _context.abrupt("return", {
              x: 0,
              y: 0
            });

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return router_scrollBehavior_ref.apply(this, arguments);
}
// CONCATENATED MODULE: ./node_modules/.cache/nuxt/router.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
















var router_4ceb8f67 = function _4ceb8f67() {
  return Object(utils["m" /* interopDefault */])(Promise.all(/* import() | pages/index */[__webpack_require__.e(22), __webpack_require__.e(7)]).then(__webpack_require__.bind(null, 541)));
};

var emptyFn = function emptyFn() {};

vue_runtime_esm["a" /* default */].use(vue_router_esm["a" /* default */]);
var routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior: router_scrollBehavior,
  routes: [{
    path: "/",
    component: router_4ceb8f67,
    name: "index"
  }],
  fallback: false
};
function createRouter(ssrContext, config) {
  var base = config._app && config._app.basePath || routerOptions.base;
  var router = new vue_router_esm["a" /* default */](_objectSpread(_objectSpread({}, routerOptions), {}, {
    base: base
  })); // TODO: remove in Nuxt 3

  var originalPush = router.push;

  router.push = function push(location) {
    var onComplete = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : emptyFn;
    var onAbort = arguments.length > 2 ? arguments[2] : undefined;
    return originalPush.call(this, location, onComplete, onAbort);
  };

  var resolve = router.resolve.bind(router);

  router.resolve = function (to, current, append) {
    if (typeof to === 'string') {
      to = Object(dist["c" /* normalizeURL */])(to);
    }

    return resolve(to, current, append);
  };

  return router;
}
// CONCATENATED MODULE: ./node_modules/.cache/nuxt/components/nuxt-child.js

/* harmony default export */ var nuxt_child = ({
  name: 'NuxtChild',
  functional: true,
  props: {
    nuxtChildKey: {
      type: String,
      default: ''
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    }
  },
  render: function render(_, _ref) {
    var parent = _ref.parent,
        data = _ref.data,
        props = _ref.props;
    var h = parent.$createElement;
    data.nuxtChild = true;
    var _parent = parent;
    var transitions = parent.$nuxt.nuxt.transitions;
    var defaultTransition = parent.$nuxt.nuxt.defaultTransition;
    var depth = 0;

    while (parent) {
      if (parent.$vnode && parent.$vnode.data.nuxtChild) {
        depth++;
      }

      parent = parent.$parent;
    }

    data.nuxtChildDepth = depth;
    var transition = transitions[depth] || defaultTransition;
    var transitionProps = {};
    transitionsKeys.forEach(function (key) {
      if (typeof transition[key] !== 'undefined') {
        transitionProps[key] = transition[key];
      }
    });
    var listeners = {};
    listenersKeys.forEach(function (key) {
      if (typeof transition[key] === 'function') {
        listeners[key] = transition[key].bind(_parent);
      }
    });

    if (true) {
      // Add triggerScroll event on beforeEnter (fix #1376)
      var beforeEnter = listeners.beforeEnter;

      listeners.beforeEnter = function (el) {
        // Ensure to trigger scroll event after calling scrollBehavior
        window.$nuxt.$nextTick(function () {
          window.$nuxt.$emit('triggerScroll');
        });

        if (beforeEnter) {
          return beforeEnter.call(_parent, el);
        }
      };
    } // make sure that leave is called asynchronous (fix #5703)


    if (transition.css === false) {
      var leave = listeners.leave; // only add leave listener when user didnt provide one
      // or when it misses the done argument

      if (!leave || leave.length < 2) {
        listeners.leave = function (el, done) {
          if (leave) {
            leave.call(_parent, el);
          }

          _parent.$nextTick(done);
        };
      }
    }

    var routerView = h('routerView', data);

    if (props.keepAlive) {
      routerView = h('keep-alive', {
        props: props.keepAliveProps
      }, [routerView]);
    }

    return h('transition', {
      props: transitionProps,
      on: listeners
    }, [routerView]);
  }
});
var transitionsKeys = ['name', 'mode', 'appear', 'css', 'type', 'duration', 'enterClass', 'leaveClass', 'appearClass', 'enterActiveClass', 'enterActiveClass', 'leaveActiveClass', 'appearActiveClass', 'enterToClass', 'leaveToClass', 'appearToClass'];
var listenersKeys = ['beforeEnter', 'enter', 'afterEnter', 'enterCancelled', 'beforeLeave', 'leave', 'afterLeave', 'leaveCancelled', 'beforeAppear', 'appear', 'afterAppear', 'appearCancelled'];
// EXTERNAL MODULE: ./src/layouts/error.vue + 4 modules
var layouts_error = __webpack_require__(67);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(32);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__(62);

// CONCATENATED MODULE: ./node_modules/.cache/nuxt/components/nuxt.js









/* harmony default export */ var components_nuxt = ({
  name: 'Nuxt',
  components: {
    NuxtChild: nuxt_child,
    NuxtError: layouts_error["a" /* default */]
  },
  props: {
    nuxtChildKey: {
      type: String,
      default: undefined
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    },
    name: {
      type: String,
      default: 'default'
    }
  },
  errorCaptured: function errorCaptured(error) {
    // if we receive and error while showing the NuxtError component
    // capture the error and force an immediate update so we re-render
    // without the NuxtError component
    if (this.displayingNuxtError) {
      this.errorFromNuxtError = error;
      this.$forceUpdate();
    }
  },
  computed: {
    routerViewKey: function routerViewKey() {
      // If nuxtChildKey prop is given or current route has children
      if (typeof this.nuxtChildKey !== 'undefined' || this.$route.matched.length > 1) {
        return this.nuxtChildKey || Object(utils["c" /* compile */])(this.$route.matched[0].path)(this.$route.params);
      }

      var _this$$route$matched = Object(slicedToArray["a" /* default */])(this.$route.matched, 1),
          matchedRoute = _this$$route$matched[0];

      if (!matchedRoute) {
        return this.$route.path;
      }

      var Component = matchedRoute.components.default;

      if (Component && Component.options) {
        var options = Component.options;

        if (options.key) {
          return typeof options.key === 'function' ? options.key(this.$route) : options.key;
        }
      }

      var strict = /\/$/.test(matchedRoute.path);
      return strict ? this.$route.path : this.$route.path.replace(/\/$/, '');
    }
  },
  beforeCreate: function beforeCreate() {
    vue_runtime_esm["a" /* default */].util.defineReactive(this, 'nuxt', this.$root.$options.nuxt);
  },
  render: function render(h) {
    var _this = this;

    // if there is no error
    if (!this.nuxt.err) {
      // Directly return nuxt child
      return h('NuxtChild', {
        key: this.routerViewKey,
        props: this.$props
      });
    } // if an error occurred within NuxtError show a simple
    // error message instead to prevent looping


    if (this.errorFromNuxtError) {
      this.$nextTick(function () {
        return _this.errorFromNuxtError = false;
      });
      return h('div', {}, [h('h2', 'An error occurred while showing the error page'), h('p', 'Unfortunately an error occurred and while showing the error page another error occurred'), h('p', "Error details: ".concat(this.errorFromNuxtError.toString())), h('nuxt-link', {
        props: {
          to: '/'
        }
      }, 'Go back to home')]);
    } // track if we are showing the NuxtError component


    this.displayingNuxtError = true;
    this.$nextTick(function () {
      return _this.displayingNuxtError = false;
    });
    return h(layouts_error["a" /* default */], {
      props: {
        error: this.nuxt.err
      }
    });
  }
});
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__(29);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.from.js
var es_array_from = __webpack_require__(37);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__(38);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.iterator.js
var es_symbol_iterator = __webpack_require__(39);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/.cache/nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&

/* harmony default export */ var nuxt_loadingvue_type_script_lang_js_ = ({
  name: 'NuxtLoading',
  data: function data() {
    return {
      percent: 0,
      show: false,
      canSucceed: true,
      reversed: false,
      skipTimerCount: 0,
      rtl: false,
      throttle: 200,
      duration: 5000,
      continuous: true
    };
  },
  computed: {
    left: function left() {
      if (!this.continuous && !this.rtl) {
        return false;
      }

      return this.rtl ? this.reversed ? '0px' : 'auto' : !this.reversed ? '0px' : 'auto';
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.clear();
  },
  methods: {
    clear: function clear() {
      clearInterval(this._timer);
      clearTimeout(this._throttle);
      this._timer = null;
    },
    start: function start() {
      var _this = this;

      this.clear();
      this.percent = 0;
      this.reversed = false;
      this.skipTimerCount = 0;
      this.canSucceed = true;

      if (this.throttle) {
        this._throttle = setTimeout(function () {
          return _this.startTimer();
        }, this.throttle);
      } else {
        this.startTimer();
      }

      return this;
    },
    set: function set(num) {
      this.show = true;
      this.canSucceed = true;
      this.percent = Math.min(100, Math.max(0, Math.floor(num)));
      return this;
    },
    get: function get() {
      return this.percent;
    },
    increase: function increase(num) {
      this.percent = Math.min(100, Math.floor(this.percent + num));
      return this;
    },
    decrease: function decrease(num) {
      this.percent = Math.max(0, Math.floor(this.percent - num));
      return this;
    },
    pause: function pause() {
      clearInterval(this._timer);
      return this;
    },
    resume: function resume() {
      this.startTimer();
      return this;
    },
    finish: function finish() {
      this.percent = this.reversed ? 0 : 100;
      this.hide();
      return this;
    },
    hide: function hide() {
      var _this2 = this;

      this.clear();
      setTimeout(function () {
        _this2.show = false;

        _this2.$nextTick(function () {
          _this2.percent = 0;
          _this2.reversed = false;
        });
      }, 500);
      return this;
    },
    fail: function fail(error) {
      this.canSucceed = false;
      return this;
    },
    startTimer: function startTimer() {
      var _this3 = this;

      if (!this.show) {
        this.show = true;
      }

      if (typeof this._cut === 'undefined') {
        this._cut = 10000 / Math.floor(this.duration);
      }

      this._timer = setInterval(function () {
        /**
         * When reversing direction skip one timers
         * so 0, 100 are displayed for two iterations
         * also disable css width transitioning
         * which otherwise interferes and shows
         * a jojo effect
         */
        if (_this3.skipTimerCount > 0) {
          _this3.skipTimerCount--;
          return;
        }

        if (_this3.reversed) {
          _this3.decrease(_this3._cut);
        } else {
          _this3.increase(_this3._cut);
        }

        if (_this3.continuous) {
          if (_this3.percent >= 100) {
            _this3.skipTimerCount = 1;
            _this3.reversed = !_this3.reversed;
          } else if (_this3.percent <= 0) {
            _this3.skipTimerCount = 1;
            _this3.reversed = !_this3.reversed;
          }
        }
      }, 100);
    }
  },
  render: function render(h) {
    var el = h(false);

    if (this.show) {
      el = h('div', {
        staticClass: 'nuxt-progress',
        class: {
          'nuxt-progress-notransition': this.skipTimerCount > 0,
          'nuxt-progress-failed': !this.canSucceed
        },
        style: {
          width: this.percent + '%',
          left: this.left
        }
      });
    }

    return el;
  }
});
// CONCATENATED MODULE: ./node_modules/.cache/nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_loadingvue_type_script_lang_js_ = (nuxt_loadingvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/.cache/nuxt/components/nuxt-loading.vue?vue&type=style&index=0&lang=css&
var nuxt_loadingvue_type_style_index_0_lang_css_ = __webpack_require__(365);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/.cache/nuxt/components/nuxt-loading.vue
var nuxt_loading_render, staticRenderFns





/* normalize component */

var nuxt_loading_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_loadingvue_type_script_lang_js_,
  nuxt_loading_render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var nuxt_loading = (nuxt_loading_component.exports);
// EXTERNAL MODULE: ./node_modules/@inkline/inkline/src/inkline.scss
var inkline = __webpack_require__(366);

// EXTERNAL MODULE: ./src/assets/style/main.scss
var main = __webpack_require__(367);

// EXTERNAL MODULE: ./src/layouts/default.vue + 17 modules
var layouts_default = __webpack_require__(328);

// CONCATENATED MODULE: ./node_modules/.cache/nuxt/App.js








function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }














var layouts = {
  "_default": Object(utils["s" /* sanitizeComponent */])(layouts_default["a" /* default */])
};
/* harmony default export */ var App = ({
  render: function render(h, props) {
    var loadingEl = h('NuxtLoading', {
      ref: 'loading'
    });
    var layoutEl = h(this.layout || 'nuxt');
    var templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [layoutEl]);
    var transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter: function beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(function () {
            window.$nuxt.$emit('triggerScroll');
          });
        }
      }
    }, [templateEl]);
    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [loadingEl, transitionEl]);
  },
  data: function data() {
    return {
      isOnline: true,
      layout: null,
      layoutName: '',
      nbFetching: 0
    };
  },
  beforeCreate: function beforeCreate() {
    vue_runtime_esm["a" /* default */].util.defineReactive(this, 'nuxt', this.$options.nuxt);
  },
  created: function created() {
    // Add this.$nuxt in child instances
    this.$root.$options.$nuxt = this;

    if (true) {
      // add to window so we can listen when ready
      window.$nuxt = this;
      this.refreshOnlineStatus(); // Setup the listeners

      window.addEventListener('online', this.refreshOnlineStatus);
      window.addEventListener('offline', this.refreshOnlineStatus);
    } // Add $nuxt.error()


    this.error = this.nuxt.error; // Add $nuxt.context

    this.context = this.$options.context;
  },
  mounted: function mounted() {
    var _this = this;

    return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.$loading = _this.$refs.loading;

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  watch: {
    'nuxt.err': 'errorChanged'
  },
  computed: {
    isOffline: function isOffline() {
      return !this.isOnline;
    },
    isFetching: function isFetching() {
      return this.nbFetching > 0;
    },
    isPreview: function isPreview() {
      return Boolean(this.$options.previewData);
    }
  },
  methods: {
    refreshOnlineStatus: function refreshOnlineStatus() {
      if (true) {
        if (typeof window.navigator.onLine === 'undefined') {
          // If the browser doesn't support connection status reports
          // assume that we are online because most apps' only react
          // when they now that the connection has been interrupted
          this.isOnline = true;
        } else {
          this.isOnline = window.navigator.onLine;
        }
      }
    },
    refresh: function refresh() {
      var _this2 = this;

      return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var pages, promises;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                pages = Object(utils["h" /* getMatchedComponentsInstances */])(_this2.$route);

                if (pages.length) {
                  _context2.next = 3;
                  break;
                }

                return _context2.abrupt("return");

              case 3:
                _this2.$loading.start();

                promises = pages.map(function (page) {
                  var p = []; // Old fetch

                  if (page.$options.fetch && page.$options.fetch.length) {
                    p.push(Object(utils["q" /* promisify */])(page.$options.fetch, _this2.context));
                  }

                  if (page.$fetch) {
                    p.push(page.$fetch());
                  } else {
                    // Get all component instance to call $fetch
                    var _iterator = _createForOfIteratorHelper(Object(utils["e" /* getChildrenComponentInstancesUsingFetch */])(page.$vnode.componentInstance)),
                        _step;

                    try {
                      for (_iterator.s(); !(_step = _iterator.n()).done;) {
                        var component = _step.value;
                        p.push(component.$fetch());
                      }
                    } catch (err) {
                      _iterator.e(err);
                    } finally {
                      _iterator.f();
                    }
                  }

                  if (page.$options.asyncData) {
                    p.push(Object(utils["q" /* promisify */])(page.$options.asyncData, _this2.context).then(function (newData) {
                      for (var key in newData) {
                        vue_runtime_esm["a" /* default */].set(page.$data, key, newData[key]);
                      }
                    }));
                  }

                  return Promise.all(p);
                });
                _context2.prev = 5;
                _context2.next = 8;
                return Promise.all(promises);

              case 8:
                _context2.next = 15;
                break;

              case 10:
                _context2.prev = 10;
                _context2.t0 = _context2["catch"](5);

                _this2.$loading.fail(_context2.t0);

                Object(utils["k" /* globalHandleError */])(_context2.t0);

                _this2.error(_context2.t0);

              case 15:
                _this2.$loading.finish();

              case 16:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[5, 10]]);
      }))();
    },
    errorChanged: function errorChanged() {
      if (this.nuxt.err) {
        if (this.$loading) {
          if (this.$loading.fail) {
            this.$loading.fail(this.nuxt.err);
          }

          if (this.$loading.finish) {
            this.$loading.finish();
          }
        }

        var errorLayout = (layouts_error["a" /* default */].options || layouts_error["a" /* default */]).layout;

        if (typeof errorLayout === 'function') {
          errorLayout = errorLayout(this.context);
        }

        this.setLayout(errorLayout);
      }
    },
    setLayout: function setLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      this.layoutName = layout;
      this.layout = layouts['_' + layout];
      return this.layout;
    },
    loadLayout: function loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      return Promise.resolve(layouts['_' + layout]);
    }
  },
  components: {
    NuxtLoading: nuxt_loading
  }
});
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.split.js
var es_string_split = __webpack_require__(47);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__(96);

// CONCATENATED MODULE: ./node_modules/.cache/nuxt/store.js
function store_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = store_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function store_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return store_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return store_arrayLikeToArray(o, minLen); }

function store_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
















vue_runtime_esm["a" /* default */].use(vuex_esm["a" /* default */]);
var VUEX_PROPERTIES = ['state', 'getters', 'actions', 'mutations'];
var store_store = {};

(function updateModules() {
  store_store = normalizeRoot(__webpack_require__(377), 'store/index.ts'); // If store is an exported method = classic mode (deprecated)
  // Enforce store modules

  store_store.modules = store_store.modules || {};
  resolveStoreModules(__webpack_require__(378), 'scroll/index.ts'); // If the environment supports hot reloading...
})(); // createStore


var createStore = store_store instanceof Function ? store_store : function () {
  return new vuex_esm["a" /* default */].Store(Object.assign({
    strict: "production" !== 'production'
  }, store_store));
};

function normalizeRoot(moduleData, filePath) {
  moduleData = moduleData.default || moduleData;

  if (moduleData.commit) {
    throw new Error("[nuxt] ".concat(filePath, " should export a method that returns a Vuex instance."));
  }

  if (typeof moduleData !== 'function') {
    // Avoid TypeError: setting a property that has only a getter when overwriting top level keys
    moduleData = Object.assign({}, moduleData);
  }

  return normalizeModule(moduleData, filePath);
}

function normalizeModule(moduleData, filePath) {
  if (moduleData.state && typeof moduleData.state !== 'function') {
    console.warn("'state' should be a method that returns an object in ".concat(filePath));

    var _state = Object.assign({}, moduleData.state); // Avoid TypeError: setting a property that has only a getter when overwriting top level keys


    moduleData = Object.assign({}, moduleData, {
      state: function state() {
        return _state;
      }
    });
  }

  return moduleData;
}

function resolveStoreModules(moduleData, filename) {
  moduleData = moduleData.default || moduleData; // Remove store src + extension (./foo/index.js -> foo/index)

  var namespace = filename.replace(/\.(js|mjs|ts)$/, '');
  var namespaces = namespace.split('/');
  var moduleName = namespaces[namespaces.length - 1];
  var filePath = "store/".concat(filename);
  moduleData = moduleName === 'state' ? normalizeState(moduleData, filePath) : normalizeModule(moduleData, filePath); // If src is a known Vuex property

  if (VUEX_PROPERTIES.includes(moduleName)) {
    var property = moduleName;
    var propertyStoreModule = getStoreModule(store_store, namespaces, {
      isProperty: true
    }); // Replace state since it's a function

    mergeProperty(propertyStoreModule, moduleData, property);
    return;
  } // If file is foo/index.js, it should be saved as foo


  var isIndexModule = moduleName === 'index';

  if (isIndexModule) {
    namespaces.pop();
    moduleName = namespaces[namespaces.length - 1];
  }

  var storeModule = getStoreModule(store_store, namespaces);

  var _iterator = store_createForOfIteratorHelper(VUEX_PROPERTIES),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _property = _step.value;
      mergeProperty(storeModule, moduleData[_property], _property);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  if (moduleData.namespaced === false) {
    delete storeModule.namespaced;
  }
}

function normalizeState(moduleData, filePath) {
  if (typeof moduleData !== 'function') {
    console.warn("".concat(filePath, " should export a method that returns an object"));
    var state = Object.assign({}, moduleData);
    return function () {
      return state;
    };
  }

  return normalizeModule(moduleData, filePath);
}

function getStoreModule(storeModule, namespaces) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref$isProperty = _ref.isProperty,
      isProperty = _ref$isProperty === void 0 ? false : _ref$isProperty;

  // If ./mutations.js
  if (!namespaces.length || isProperty && namespaces.length === 1) {
    return storeModule;
  }

  var namespace = namespaces.shift();
  storeModule.modules[namespace] = storeModule.modules[namespace] || {};
  storeModule.modules[namespace].namespaced = true;
  storeModule.modules[namespace].modules = storeModule.modules[namespace].modules || {};
  return getStoreModule(storeModule.modules[namespace], namespaces, {
    isProperty: isProperty
  });
}

function mergeProperty(storeModule, moduleData, property) {
  if (!moduleData) {
    return;
  }

  if (property === 'state') {
    storeModule.state = moduleData || storeModule.state;
  } else {
    storeModule[property] = Object.assign({}, storeModule[property], moduleData);
  }
}
// EXTERNAL MODULE: ./node_modules/.cache/nuxt/empty.js
var empty = __webpack_require__(325);
var empty_default = /*#__PURE__*/__webpack_require__.n(empty);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(36);

// CONCATENATED MODULE: ./node_modules/.cache/nuxt/sentry.client.js














function sentry_client_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = sentry_client_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function sentry_client_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return sentry_client_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return sentry_client_arrayLikeToArray(o, minLen); }

function sentry_client_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function sentry_client_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function sentry_client_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { sentry_client_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { sentry_client_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









/* eslint-enable object-curly-spacing, quote-props, quotes, key-spacing, comma-spacing */

var delayedCalls = [];
var SentryMock = {};
var sentryReadyResolve;
var loadInitiated = false;
var loadCompleted = false;
var delayedGlobalErrors = [];
var delayedUnhandledRejections = [];
/** @param {ErrorEvent} event */

var delayGlobalError = function delayGlobalError(event) {
  delayedGlobalErrors.push([event.message, event.filename, event.lineno, event.colno, event.error]);
};

var delayUnhandledRejection = function delayUnhandledRejection(event) {
  delayedUnhandledRejections.push('reason' in event ? event.reason : 'detail' in event && 'reason' in event.detail ? event.detail.reason : event);
};

var vueErrorHandler = vue_runtime_esm["a" /* default */].config.errorHandler;

vue_runtime_esm["a" /* default */].config.errorHandler = function (error, vm, info) {
  if (!loadCompleted) {
    if (vm) {
      vm.$sentry.captureException(error);
    }

    if (vue_runtime_esm["a" /* default */].util) {
      vue_runtime_esm["a" /* default */].util.warn("Error in ".concat(info, ": \"").concat(error.toString(), "\""), vm);
    }

    console.error(error); // eslint-disable-line no-console
  }

  if (vueErrorHandler) {
    return vueErrorHandler(error, vm, info);
  }
};

function SentryPlugin(ctx, inject) {
  /* eslint-disable object-curly-spacing, quote-props, quotes, key-spacing, comma-spacing */
  var apiMethods = ["addGlobalEventProcessor", "addBreadcrumb", "captureException", "captureEvent", "captureMessage", "configureScope", "getHubFromCarrier", "getCurrentHub", "Hub", "makeMain", "Scope", "startTransaction", "setContext", "setExtra", "setExtras", "setTag", "setTags", "setUser", "withScope", "BrowserClient", "injectReportDialog", "eventFromException", "eventFromMessage", "forceLoad", "init", "lastEventId", "onLoad", "showReportDialog", "flush", "close", "wrap"];
  apiMethods.forEach(function (key) {
    SentryMock[key] = function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return delayedCalls.push([key, args]);
    };
  });
  window.addEventListener('error', delayGlobalError);
  window.addEventListener('unhandledrejection', delayUnhandledRejection);
  inject('sentry', SentryMock);
  ctx.$sentry = SentryMock;

  var loadSentryHook = function loadSentryHook() {
    return attemptLoadSentry(ctx, inject);
  };

  window.onNuxtReady(loadSentryHook);
  var sentryReadyPromise = new Promise(function (resolve) {
    sentryReadyResolve = resolve;
  });

  var sentryReady = function sentryReady() {
    return sentryReadyPromise;
  };

  inject('sentryReady', sentryReady);
  ctx.$sentryReady = sentryReady;
}

function attemptLoadSentry(_x, _x2) {
  return _attemptLoadSentry.apply(this, arguments);
}

function _attemptLoadSentry() {
  _attemptLoadSentry = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee(ctx, inject) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!loadInitiated) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return");

          case 2:
            loadInitiated = true;

            if (window.$nuxt) {
              _context.next = 5;
              break;
            }

            return _context.abrupt("return");

          case 5:
            _context.next = 7;
            return loadSentry(ctx, inject);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _attemptLoadSentry.apply(this, arguments);
}

function loadSentry(_x3, _x4) {
  return _loadSentry.apply(this, arguments);
} // Custom inject function that is able to overwrite previously injected values,
// which original inject doesn't allow to do.
// This method is adapted from the inject method in nuxt/vue-app/template/index.js


function _loadSentry() {
  _loadSentry = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(ctx, inject) {
    var Sentry, _yield$import, Dedupe, ExtraErrorData, ReportingObserver, RewriteFrames, Vue, config, runtimeConfigKey, _yield$import2, merge, _iterator, _step, errorArgs, _iterator2, _step2, reason;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!loadCompleted) {
              _context2.next = 2;
              break;
            }

            return _context2.abrupt("return");

          case 2:
            _context2.next = 4;
            return Promise.all(/* import() | sentry */[__webpack_require__.e(25), __webpack_require__.e(24), __webpack_require__.e(23)]).then(__webpack_require__.bind(null, 542));

          case 4:
            Sentry = _context2.sent;
            _context2.next = 7;
            return Promise.all(/* import() | sentry */[__webpack_require__.e(25), __webpack_require__.e(24), __webpack_require__.e(23)]).then(__webpack_require__.bind(null, 543));

          case 7:
            _yield$import = _context2.sent;
            Dedupe = _yield$import.Dedupe;
            ExtraErrorData = _yield$import.ExtraErrorData;
            ReportingObserver = _yield$import.ReportingObserver;
            RewriteFrames = _yield$import.RewriteFrames;
            Vue = _yield$import.Vue;

            /* eslint-disable object-curly-spacing, quote-props, quotes, key-spacing, comma-spacing */
            config = {
              "dsn": "https://1f18c5c8e8fb4f2491be8d9daac67145@o496053.ingest.sentry.io/5635442",
              "environment": "production",
              "tracesSampleRate": 1,
              "release": "b88ec0de93b3c150f14f81fca5b4450b2d7420e5"
            };
            runtimeConfigKey = "sentry";

            if (!(ctx.$config && runtimeConfigKey && ctx.$config[runtimeConfigKey])) {
              _context2.next = 21;
              break;
            }

            _context2.next = 18;
            return Promise.all(/* import() | sentry */[__webpack_require__.e(25), __webpack_require__.e(24), __webpack_require__.e(23)]).then(__webpack_require__.t.bind(null, 540, 7));

          case 18:
            _yield$import2 = _context2.sent;
            merge = _yield$import2.default;
            merge(config, ctx.$config[runtimeConfigKey].config, ctx.$config[runtimeConfigKey].clientConfig);

          case 21:
            config.integrations = [new Dedupe({}), new ExtraErrorData({}), new ReportingObserver({}), new RewriteFrames({}), new Vue(sentry_client_objectSpread({
              Vue: vue_runtime_esm["a" /* default */]
            }, {
              "attachProps": true,
              "logErrors": false
            }))];
            /* eslint-enable object-curly-spacing, quote-props, quotes, key-spacing, comma-spacing */

            Sentry.init(config);
            loadCompleted = true;
            window.removeEventListener('error', delayGlobalError);
            window.removeEventListener('unhandledrejection', delayUnhandledRejection);

            if (delayedGlobalErrors.length) {
              if (window.onerror) {
                console.info('Reposting global errors after Sentry has loaded'); // eslint-disable-line no-console

                _iterator = sentry_client_createForOfIteratorHelper(delayedGlobalErrors);

                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    errorArgs = _step.value;
                    window.onerror.apply(window, errorArgs);
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }
              }

              delayedGlobalErrors = [];
            }

            if (delayedUnhandledRejections.length) {
              if (window.onunhandledrejection) {
                console.info('Reposting unhandled promise rejection errors after Sentry has loaded'); // eslint-disable-line no-console

                _iterator2 = sentry_client_createForOfIteratorHelper(delayedUnhandledRejections);

                try {
                  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                    reason = _step2.value;
                    window.onunhandledrejection(reason);
                  }
                } catch (err) {
                  _iterator2.e(err);
                } finally {
                  _iterator2.f();
                }
              }

              delayedUnhandledRejections = [];
            }

            delayedCalls.forEach(function (_ref) {
              var _ref2 = Object(slicedToArray["a" /* default */])(_ref, 2),
                  methodName = _ref2[0],
                  args = _ref2[1];

              return Sentry[methodName].apply(Sentry, args);
            });
            forceInject(ctx, inject, 'sentry', Sentry);
            sentryReadyResolve(Sentry); // help gc
            // Dont unset delayedCalls & SentryMock during
            // development, this will cause HMR issues

            delayedCalls = undefined;
            SentryMock = undefined;
            sentryReadyResolve = undefined;

          case 34:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _loadSentry.apply(this, arguments);
}

function forceInject(ctx, inject, key, value) {
  inject(key, value);
  var injectKey = '$' + key;
  ctx[injectKey] = value;
  window.$nuxt.$options[injectKey] = value;
}
// EXTERNAL MODULE: ./node_modules/@inkline/inkline/src/index.js + 1 modules
var src = __webpack_require__(329);

// CONCATENATED MODULE: ./node_modules/.cache/nuxt/inkline.js


vue_runtime_esm["a" /* default */].use(src["a" /* Inkline */], {
  "config": {
    "variant": "dark"
  }
});
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__(113);

// CONCATENATED MODULE: ./node_modules/.cache/nuxt/components/utils.js



// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options;
  }

  var propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {});
  return {
    render: function render(h) {
      var attrs = {};
      var props = {};

      for (var key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key];
        } else {
          attrs[key] = this.$attrs[key];
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs: attrs,
        props: props,
        scopedSlots: this.$scopedSlots
      }, this.$slots.default);
    }
  };
}
// CONCATENATED MODULE: ./node_modules/.cache/nuxt/components/plugin.js





var components = {
  IAlert: function IAlert() {
    return Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 282)).then(function (c) {
      return wrapFunctional(c.default || c);
    });
  },
  IBadge: function IBadge() {
    return Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 170)).then(function (c) {
      return wrapFunctional(c.default || c);
    });
  },
  IBreadcrumb: function IBreadcrumb() {
    return Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 283)).then(function (c) {
      return wrapFunctional(c.default || c);
    });
  },
  IBreadcrumbItem: function IBreadcrumbItem() {
    return Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 284)).then(function (c) {
      return wrapFunctional(c.default || c);
    });
  },
  IButton: function IButton() {
    return Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 48)).then(function (c) {
      return wrapFunctional(c.default || c);
    });
  },
  IButtonGroup: function IButtonGroup() {
    return Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 64)).then(function (c) {
      return wrapFunctional(c.default || c);
    });
  },
  ICard: function ICard() {
    return Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 285)).then(function (c) {
      return wrapFunctional(c.default || c);
    });
  },
  ICheckable: function ICheckable() {
    return Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 66)).then(function (c) {
      return wrapFunctional(c.default || c);
    });
  },
  ICheckableGroup: function ICheckableGroup() {
    return Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 50)).then(function (c) {
      return wrapFunctional(c.default || c);
    });
  },
  ICheckbox: function ICheckbox() {
    return Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 127)).then(function (c) {
      return wrapFunctional(c.default || c);
    });
  },
  ICheckboxButton: function ICheckboxButton() {
    return Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 308)).then(function (c) {
      return wrapFunctional(c.default || c);
    });
  },
  ICheckboxButtonGroup: function ICheckboxButtonGroup() {
    return Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 310)).then(function (c) {
      return wrapFunctional(c.default || c);
    });
  },
  ICheckboxGroup: function ICheckboxGroup() {
    return Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 309)).then(function (c) {
      return wrapFunctional(c.default || c);
    });
  },
  ICollapsible: function ICollapsible() {
    return Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 172)).then(function (c) {
      return wrapFunctional(c.default || c);
    });
  },
  ICollapsibleItem: function ICollapsibleItem() {
    return Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 173)).then(function (c) {
      return wrapFunctional(c.default || c);
    });
  },
  IColumn: function IColumn() {
    return Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 63)).then(function (c) {
      return wrapFunctional(c.default || c);
    });
  },
  IContainer: function IContainer() {
    return Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 59)).then(function (c) {
      return wrapFunctional(c.default || c);
    });
  },
  IDatatable: function IDatatable() {
    return Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 286)).then(function (c) {
      return wrapFunctional(c.default || c);
    });
  },
  IDropdown: function IDropdown() {
    return Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 99)).then(function (c) {
      return wrapFunctional(c.default || c);
    });
  },
  IDropdownDivider: function IDropdownDivider() {
    return Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 287)).then(function (c) {
      return wrapFunctional(c.default || c);
    });
  },
  IDropdownItem: function IDropdownItem() {
    return Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 160)).then(function (c) {
      return wrapFunctional(c.default || c);
    });
  },
  IDropdownMenu: function IDropdownMenu() {
    return Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 98)).then(function (c) {
      return wrapFunctional(c.default || c);
    });
  },
  IForm: function IForm() {
    return Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 311)).then(function (c) {
      return wrapFunctional(c.default || c);
    });
  },
  IFormError: function IFormError() {
    return Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 79)).then(function (c) {
      return wrapFunctional(c.default || c);
    });
  },
  IFormGroup: function IFormGroup() {
    return Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 65)).then(function (c) {
      return wrapFunctional(c.default || c);
    });
  },
  IFormLabel: function IFormLabel() {
    return Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 312)).then(function (c) {
      return wrapFunctional(c.default || c);
    });
  },
  IHamburgerMenu: function IHamburgerMenu() {
    return Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 126)).then(function (c) {
      return wrapFunctional(c.default || c);
    });
  },
  IHeader: function IHeader() {
    return Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 288)).then(function (c) {
      return wrapFunctional(c.default || c);
    });
  },
  IIcon: function IIcon() {
    return Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 122)).then(function (c) {
      return wrapFunctional(c.default || c);
    });
  },
  IInput: function IInput() {
    return Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 49)).then(function (c) {
      return wrapFunctional(c.default || c);
    });
  },
  IInputNumber: function IInputNumber() {
    return Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 313)).then(function (c) {
      return wrapFunctional(c.default || c);
    });
  },
  ILayout: function ILayout() {
    return Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 289)).then(function (c) {
      return wrapFunctional(c.default || c);
    });
  },
  ILayoutAside: function ILayoutAside() {
    return Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 290)).then(function (c) {
      return wrapFunctional(c.default || c);
    });
  },
  ILayoutContent: function ILayoutContent() {
    return Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 291)).then(function (c) {
      return wrapFunctional(c.default || c);
    });
  },
  ILayoutFooter: function ILayoutFooter() {
    return Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 292)).then(function (c) {
      return wrapFunctional(c.default || c);
    });
  },
  ILayoutHeader: function ILayoutHeader() {
    return Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 293)).then(function (c) {
      return wrapFunctional(c.default || c);
    });
  },
  ILinkable: function ILinkable() {
    return Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 31)).then(function (c) {
      return wrapFunctional(c.default || c);
    });
  },
  IListGroup: function IListGroup() {
    return Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 294)).then(function (c) {
      return wrapFunctional(c.default || c);
    });
  },
  IListGroupItem: function IListGroupItem() {
    return Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 295)).then(function (c) {
      return wrapFunctional(c.default || c);
    });
  },
  ILoader: function ILoader() {
    return Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 121)).then(function (c) {
      return wrapFunctional(c.default || c);
    });
  },
  IMedia: function IMedia() {
    return Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 296)).then(function (c) {
      return wrapFunctional(c.default || c);
    });
  },
  IModal: function IModal() {
    return Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 297)).then(function (c) {
      return wrapFunctional(c.default || c);
    });
  },
  INav: function INav() {
    return Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 298)).then(function (c) {
      return wrapFunctional(c.default || c);
    });
  },
  INavItem: function INavItem() {
    return Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 320)).then(function (c) {
      return wrapFunctional(c.default || c);
    });
  },
  INavbar: function INavbar() {
    return Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 299)).then(function (c) {
      return wrapFunctional(c.default || c);
    });
  },
  INavbarBrand: function INavbarBrand() {
    return Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 300)).then(function (c) {
      return wrapFunctional(c.default || c);
    });
  },
  INavbarItems: function INavbarItems() {
    return Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 301)).then(function (c) {
      return wrapFunctional(c.default || c);
    });
  },
  IPagination: function IPagination() {
    return Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 125)).then(function (c) {
      return wrapFunctional(c.default || c);
    });
  },
  IPopover: function IPopover() {
    return Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 302)).then(function (c) {
      return wrapFunctional(c.default || c);
    });
  },
  IProgress: function IProgress() {
    return Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 303)).then(function (c) {
      return wrapFunctional(c.default || c);
    });
  },
  IProgressBar: function IProgressBar() {
    return Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 304)).then(function (c) {
      return wrapFunctional(c.default || c);
    });
  },
  IRadio: function IRadio() {
    return Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 128)).then(function (c) {
      return wrapFunctional(c.default || c);
    });
  },
  IRadioButton: function IRadioButton() {
    return Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 314)).then(function (c) {
      return wrapFunctional(c.default || c);
    });
  },
  IRadioButtonGroup: function IRadioButtonGroup() {
    return Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 316)).then(function (c) {
      return wrapFunctional(c.default || c);
    });
  },
  IRadioGroup: function IRadioGroup() {
    return Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 315)).then(function (c) {
      return wrapFunctional(c.default || c);
    });
  },
  IRow: function IRow() {
    return Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 60)).then(function (c) {
      return wrapFunctional(c.default || c);
    });
  },
  ISelect: function ISelect() {
    return Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 123)).then(function (c) {
      return wrapFunctional(c.default || c);
    });
  },
  ISelectOption: function ISelectOption() {
    return Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 124)).then(function (c) {
      return wrapFunctional(c.default || c);
    });
  },
  ISidebar: function ISidebar() {
    return Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 305)).then(function (c) {
      return wrapFunctional(c.default || c);
    });
  },
  ITab: function ITab() {
    return Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 307)).then(function (c) {
      return wrapFunctional(c.default || c);
    });
  },
  ITable: function ITable() {
    return Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 103)).then(function (c) {
      return wrapFunctional(c.default || c);
    });
  },
  ITabs: function ITabs() {
    return Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 306)).then(function (c) {
      return wrapFunctional(c.default || c);
    });
  },
  ITextarea: function ITextarea() {
    return Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 317)).then(function (c) {
      return wrapFunctional(c.default || c);
    });
  },
  IToggle: function IToggle() {
    return Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 318)).then(function (c) {
      return wrapFunctional(c.default || c);
    });
  },
  ITooltip: function ITooltip() {
    return Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 118)).then(function (c) {
      return wrapFunctional(c.default || c);
    });
  }
};

for (var plugin_name in components) {
  vue_runtime_esm["a" /* default */].component(plugin_name, components[plugin_name]);
  vue_runtime_esm["a" /* default */].component('Lazy' + plugin_name, components[plugin_name]);
}
// EXTERNAL MODULE: ./node_modules/vue-scrollto/vue-scrollto.js
var vue_scrollto = __webpack_require__(102);
var vue_scrollto_default = /*#__PURE__*/__webpack_require__.n(vue_scrollto);

// CONCATENATED MODULE: ./node_modules/.cache/nuxt/vue-scrollto.js


vue_runtime_esm["a" /* default */].use(vue_scrollto_default.a, {});
/* harmony default export */ var nuxt_vue_scrollto = (function (ctx, inject) {
  inject('scrollTo', vue_scrollto_default.a.scrollTo);
});
// CONCATENATED MODULE: ./node_modules/.cache/nuxt/google-gtag.js
/* harmony default export */ var google_gtag = (function (_ref, inject) {
  var router = _ref.app.router;

  if (false) {}

  window.dataLayer = window.dataLayer || [];

  function gtag() {
    dataLayer.push(arguments);

    if (true) {
      console.debug('gtag tracking called with following arguments:', arguments);
    }
  }

  inject('gtag', gtag);
  gtag('js', new Date());
  gtag('config', 'GTM-T5WRP8N', {
    "anonymize_ip": true,
    "send_page_view": true
  });

  if (true) {
    router.afterEach(function (to) {
      gtag('config', 'GTM-T5WRP8N', {
        'page_path': to.fullPath
      });
    });
  } // additional accounts

});
// EXTERNAL MODULE: ./src/plugins/main.ts + 5 modules
var plugins_main = __webpack_require__(166);

// CONCATENATED MODULE: ./node_modules/.cache/nuxt/index.js










function nuxt_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function nuxt_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { nuxt_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { nuxt_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


















/* Plugins */

 // Source: ./sentry.server.js (mode: 'server')

 // Source: ./sentry.client.js (mode: 'client')

 // Source: ./inkline.js (mode: 'all')

 // Source: ./components/plugin.js (mode: 'all')

 // Source: ./vue-scrollto.js (mode: 'client')

 // Source: ./google-gtag.js (mode: 'client')

 // Source: ../../../src/plugins/main (mode: 'all')
// Component: <ClientOnly>

vue_runtime_esm["a" /* default */].component(vue_client_only_common_default.a.name, vue_client_only_common_default.a); // TODO: Remove in Nuxt 3: <NoSsr>

vue_runtime_esm["a" /* default */].component(vue_no_ssr_common_default.a.name, nuxt_objectSpread(nuxt_objectSpread({}, vue_no_ssr_common_default.a), {}, {
  render: function render(h, ctx) {
    if ( true && !vue_no_ssr_common_default.a._warned) {
      vue_no_ssr_common_default.a._warned = true;
      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead');
    }

    return vue_no_ssr_common_default.a.render(h, ctx);
  }
})); // Component: <NuxtChild>

vue_runtime_esm["a" /* default */].component(nuxt_child.name, nuxt_child);
vue_runtime_esm["a" /* default */].component('NChild', nuxt_child); // Component NuxtLink is imported in server.js or client.js
// Component: <Nuxt>

vue_runtime_esm["a" /* default */].component(components_nuxt.name, components_nuxt);
Object.defineProperty(vue_runtime_esm["a" /* default */].prototype, '$nuxt', {
  get: function get() {
    var globalNuxt = this.$root.$options.$nuxt;

    if ( true && !globalNuxt && typeof window !== 'undefined') {
      return window.$nuxt;
    }

    return globalNuxt;
  },
  configurable: true
});
vue_runtime_esm["a" /* default */].use(vue_meta_esm_browser["a" /* default */], {
  "keyName": "head",
  "attribute": "data-n-head",
  "ssrAttribute": "data-n-head-ssr",
  "tagIDKeyName": "hid"
});
var defaultTransition = {
  "name": "page",
  "mode": "out-in",
  "appear": true,
  "appearClass": "appear",
  "appearActiveClass": "appear-active",
  "appearToClass": "appear-to"
};
var originalRegisterModule = vuex_esm["a" /* default */].Store.prototype.registerModule;

function registerModule(path, rawModule) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var preserveState =  true && (Array.isArray(path) ? !!path.reduce(function (namespacedState, path) {
    return namespacedState && namespacedState[path];
  }, this.state) : path in this.state);
  return originalRegisterModule.call(this, path, rawModule, nuxt_objectSpread({
    preserveState: preserveState
  }, options));
}

function createApp(_x) {
  return _createApp.apply(this, arguments);
}

function _createApp() {
  _createApp = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(ssrContext) {
    var config,
        router,
        store,
        app,
        next,
        route,
        path,
        inject,
        _args2 = arguments;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            inject = function _inject(key, value) {
              if (!key) {
                throw new Error('inject(key, value) has no key provided');
              }

              if (value === undefined) {
                throw new Error("inject('".concat(key, "', value) has no value provided"));
              }

              key = '$' + key; // Add into app

              app[key] = value; // Add into context

              if (!app.context[key]) {
                app.context[key] = value;
              } // Add into store


              store[key] = app[key]; // Check if plugin not already installed

              var installKey = '__nuxt_' + key + '_installed__';

              if (vue_runtime_esm["a" /* default */][installKey]) {
                return;
              }

              vue_runtime_esm["a" /* default */][installKey] = true; // Call Vue.use() to install the plugin into vm

              vue_runtime_esm["a" /* default */].use(function () {
                if (!Object.prototype.hasOwnProperty.call(vue_runtime_esm["a" /* default */].prototype, key)) {
                  Object.defineProperty(vue_runtime_esm["a" /* default */].prototype, key, {
                    get: function get() {
                      return this.$root.$options[key];
                    }
                  });
                }
              });
            };

            config = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : {};
            _context2.next = 4;
            return createRouter(ssrContext, config);

          case 4:
            router = _context2.sent;
            store = createStore(ssrContext); // Add this.$router into store actions/mutations

            store.$router = router; // Create Root instance
            // here we inject the router and store to all child components,
            // making them available everywhere as `this.$router` and `this.$store`.

            app = nuxt_objectSpread({
              head: {
                "name": "zkSync — Rely on math, not validators",
                "titleTemplate": "zkSync — Rely on math, not validators",
                "htmlAttrs": {
                  "lang": "en",
                  "amp": "true"
                },
                "meta": [{
                  "name": "seobility",
                  "content": "782740f1dfd8b20131dd892a71c3d72b"
                }, {
                  "name": "google-site-verification",
                  "content": "hrWPMoXfTOG40VQGoOgWmIW4shMGIsObggR1BNBm5bg"
                }, {
                  "hid": "keywords",
                  "name": "keywords",
                  "content": "\"zkSync, Matter Labs, rollup, ZK rollup, zero confirmation, ZKP, zero-knowledge proofs, Ethereum, crypto, blockchain, permissionless, L2, secure payments, scalable"
                }, {
                  "hid": "author",
                  "name": "author",
                  "content": "https://matter-labs.io"
                }, {
                  "httpEquiv": "pragma",
                  "content": "no-cache"
                }, {
                  "httpEquiv": "cache-control",
                  "content": "no-cache , no-store, must-revalidate"
                }, {
                  "httpEquiv": "expires",
                  "content": "0"
                }, {
                  "charset": "utf-8"
                }, {
                  "name": "viewport",
                  "content": "width=device-width, initial-scale=1"
                }, {
                  "hid": "description",
                  "name": "description",
                  "content": "zkSync is a ZK rollup solving Ethereum scalability with zero security compromises."
                }, {
                  "hid": "msapplication-TileImage",
                  "name": "msapplication-TileImage",
                  "content": "/favicon.ico"
                }, {
                  "hid": "msapplication-TileColor",
                  "property": "msapplication-TileColor",
                  "content": "#4e529a"
                }, {
                  "hid": "theme-color",
                  "name": "theme-color",
                  "content": "#4e529a"
                }, {
                  "name": "msapplication-TileColor",
                  "content": "#ffffff"
                }, {
                  "name": "msapplication-TileImage",
                  "content": "/ms-icon-144x144.png"
                }, {
                  "hid": "author",
                  "name": "author",
                  "content": "https://zksync.io"
                }, {
                  "hid": "publisher",
                  "name": "publisher",
                  "content": "https://zksync.io"
                }, {
                  "hid": "apple-mobile-web-app-title",
                  "name": "apple-mobile-web-app-title",
                  "content": "zkSync — Rely on math, not validators"
                }, {
                  "hid": "theme-color",
                  "name": "theme-color",
                  "content": "#4e529a"
                }, {
                  "hid": "og:title",
                  "name": "og:title",
                  "content": "zkSync — Rely on math, not validators"
                }, {
                  "hid": "og:description",
                  "name": "og:description",
                  "content": "zkSync is a ZK rollup solving Ethereum scalability with zero security compromises."
                }, {
                  "hid": "og:type",
                  "name": "og:type",
                  "content": "website"
                }, {
                  "hid": "og:url",
                  "name": "og:url",
                  "content": "https://zksync.io"
                }, {
                  "hid": "og:image",
                  "name": "og:image",
                  "content": "https://zksync.io/social.jpg"
                }, {
                  "hid": "og:locale",
                  "name": "og:locale",
                  "content": "en_US"
                }, {
                  "hid": "og:site_name",
                  "name": "og:site_name",
                  "content": "zkSync — Rely on math, not validators"
                }, {
                  "hid": "twitter:card",
                  "name": "twitter:card",
                  "content": "https://zksync.io/social.jpg"
                }, {
                  "hid": "twitter:site",
                  "name": "twitter:site",
                  "content": "@zksync"
                }, {
                  "hid": "twitter:creator",
                  "name": "twitter:creator",
                  "content": "@zksync"
                }, {
                  "hid": "twitter:title",
                  "name": "twitter:title",
                  "content": "zkSync — Rely on math, not validators"
                }, {
                  "hid": "twitter:description",
                  "name": "twitter:description",
                  "content": "zkSync is a ZK rollup solving Ethereum scalability with zero security compromises."
                }, {
                  "hid": "twitter:image",
                  "name": "twitter:image",
                  "content": "https://zksync.io/social.jpg"
                }],
                "link": [{
                  "rel": "icon",
                  "type": "image/x-icon",
                  "href": "/favicon.ico"
                }, {
                  "rel": "apple-touch-icon",
                  "sizes": "57x57",
                  "type": "image/x-icon",
                  "href": "/apple-icon-57x57.png"
                }, {
                  "rel": "apple-touch-icon",
                  "sizes": "60x60",
                  "type": "image/x-icon",
                  "href": "/apple-icon-60x60.png"
                }, {
                  "rel": "apple-touch-icon",
                  "sizes": "72x72",
                  "type": "image/x-icon",
                  "href": "/apple-icon-72x72.png"
                }, {
                  "rel": "apple-touch-icon",
                  "sizes": "76x76",
                  "type": "image/x-icon",
                  "href": "/apple-icon-76x76.png"
                }, {
                  "rel": "apple-touch-icon",
                  "sizes": "114x114",
                  "type": "image/x-icon",
                  "href": "/apple-icon-114x114.png"
                }, {
                  "rel": "apple-touch-icon",
                  "sizes": "120x120",
                  "type": "image/x-icon",
                  "href": "/apple-icon-120x120.png"
                }, {
                  "rel": "apple-touch-icon",
                  "sizes": "144x144",
                  "type": "image/x-icon",
                  "href": "/apple-icon-144x144.png"
                }, {
                  "rel": "apple-touch-icon",
                  "sizes": "152x152",
                  "type": "image/x-icon",
                  "href": "/apple-icon-152x152.png"
                }, {
                  "rel": "apple-touch-icon",
                  "sizes": "180x180",
                  "type": "image/x-icon",
                  "href": "/apple-icon-180x180.png"
                }, {
                  "rel": "icon",
                  "sizes": "192x192",
                  "type": "image/png",
                  "href": "/android-icon-192x192.png"
                }, {
                  "rel": "icon",
                  "sizes": "32x32",
                  "type": "image/png",
                  "href": "/android-icon-36x36.png"
                }, {
                  "rel": "icon",
                  "sizes": "96x96",
                  "type": "image/png",
                  "href": "/android-icon-96x96.png"
                }, {
                  "rel": "icon",
                  "sizes": "16x16",
                  "type": "image/png",
                  "href": "/android-icon-16x16.png"
                }, {
                  "rel": "manifest",
                  "href": "/manifest.json"
                }, {
                  "rel": "preconnect",
                  "href": "https://fonts.gstatic.com"
                }, {
                  "rel": "stylesheet",
                  "href": "https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap"
                }],
                "style": [],
                "script": [{
                  "src": "https://www.googletagmanager.com/gtag/js?id=GTM-T5WRP8N",
                  "async": true
                }]
              },
              store: store,
              router: router,
              nuxt: {
                defaultTransition: defaultTransition,
                transitions: [defaultTransition],
                setTransitions: function setTransitions(transitions) {
                  if (!Array.isArray(transitions)) {
                    transitions = [transitions];
                  }

                  transitions = transitions.map(function (transition) {
                    if (!transition) {
                      transition = defaultTransition;
                    } else if (typeof transition === 'string') {
                      transition = Object.assign({}, defaultTransition, {
                        name: transition
                      });
                    } else {
                      transition = Object.assign({}, defaultTransition, transition);
                    }

                    return transition;
                  });
                  this.$options.nuxt.transitions = transitions;
                  return transitions;
                },
                err: null,
                dateErr: null,
                error: function error(err) {
                  err = err || null;
                  app.context._errored = Boolean(err);
                  err = err ? Object(utils["p" /* normalizeError */])(err) : null;
                  var nuxt = app.nuxt; // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207

                  if (this) {
                    nuxt = this.nuxt || this.$options.nuxt;
                  }

                  nuxt.dateErr = Date.now();
                  nuxt.err = err; // Used in src/server.js

                  if (ssrContext) {
                    ssrContext.nuxt.error = err;
                  }

                  return err;
                }
              }
            }, App); // Make app available into store via this.app

            store.app = app;
            next = ssrContext ? ssrContext.next : function (location) {
              return app.router.push(location);
            }; // Resolve route

            if (ssrContext) {
              route = router.resolve(ssrContext.url).route;
            } else {
              path = Object(utils["f" /* getLocation */])(router.options.base, router.options.mode);
              route = router.resolve(path).route;
            } // Set context to app.context


            _context2.next = 13;
            return Object(utils["t" /* setContext */])(app, {
              store: store,
              route: route,
              next: next,
              error: app.nuxt.error.bind(app),
              payload: ssrContext ? ssrContext.payload : undefined,
              req: ssrContext ? ssrContext.req : undefined,
              res: ssrContext ? ssrContext.res : undefined,
              beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
              ssrContext: ssrContext
            });

          case 13:
            // Inject runtime config as $config
            inject('config', config);

            if (true) {
              // Replace store state before plugins execution
              if (window.__NUXT__ && window.__NUXT__.state) {
                store.replaceState(window.__NUXT__.state);
              }
            } // Add enablePreview(previewData = {}) in context for plugins


            if (true) {
              app.context.enablePreview = function () {
                var previewData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                app.previewData = Object.assign({}, previewData);
                inject('preview', previewData);
              };
            } // Plugin execution


            if (true) {
              _context2.next = 19;
              break;
            }

            _context2.next = 19;
            return empty_default()(app.context, inject);

          case 19:
            if (!( true && typeof SentryPlugin === 'function')) {
              _context2.next = 22;
              break;
            }

            _context2.next = 22;
            return SentryPlugin(app.context, inject);

          case 22:
            if (!(typeof /* Cannot get final name for export "default" in "./node_modules/.cache/nuxt/inkline.js" (known exports: , known reexports: ) */ undefined === 'function')) {
              _context2.next = 25;
              break;
            }

            _context2.next = 25;
            return /* Cannot get final name for export "default" in "./node_modules/.cache/nuxt/inkline.js" (known exports: , known reexports: ) */ undefined(app.context, inject);

          case 25:
            if (!(typeof /* Cannot get final name for export "default" in "./node_modules/.cache/nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined === 'function')) {
              _context2.next = 28;
              break;
            }

            _context2.next = 28;
            return /* Cannot get final name for export "default" in "./node_modules/.cache/nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined(app.context, inject);

          case 28:
            if (!( true && typeof nuxt_vue_scrollto === 'function')) {
              _context2.next = 31;
              break;
            }

            _context2.next = 31;
            return nuxt_vue_scrollto(app.context, inject);

          case 31:
            if (!( true && typeof google_gtag === 'function')) {
              _context2.next = 34;
              break;
            }

            _context2.next = 34;
            return google_gtag(app.context, inject);

          case 34:
            if (!(typeof plugins_main["default"] === 'function')) {
              _context2.next = 37;
              break;
            }

            _context2.next = 37;
            return Object(plugins_main["default"])(app.context, inject);

          case 37:
            // Lock enablePreview in context
            if (true) {
              app.context.enablePreview = function () {
                console.warn('You cannot call enablePreview() outside a plugin.');
              };
            } // Wait for async component to be resolved first


            _context2.next = 40;
            return new Promise(function (resolve, reject) {
              var _router$resolve = router.resolve(app.context.route.fullPath),
                  route = _router$resolve.route; // Ignore 404s rather than blindly replacing URL


              // Ignore 404s rather than blindly replacing URL
              if (!route.matched.length && true) {
                return resolve();
              }

              router.replace(route, resolve, function (err) {
                // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
                if (!err._isRouter) return reject(err);
                if (err.type !== 2
                /* NavigationFailureType.redirected */
                )
                  /* NavigationFailureType.redirected */
                  return resolve(); // navigated to a different route in router guard

                // navigated to a different route in router guard
                var unregister = router.afterEach( /*#__PURE__*/function () {
                  var _ref = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee(to, from) {
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            if (false) {}

                            _context.next = 3;
                            return Object(utils["j" /* getRouteData */])(to);

                          case 3:
                            app.context.route = _context.sent;
                            app.context.params = to.params || {};
                            app.context.query = to.query || {};
                            unregister();
                            resolve();

                          case 8:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  }));

                  return function (_x2, _x3) {
                    return _ref.apply(this, arguments);
                  };
                }());
              });
            });

          case 40:
            return _context2.abrupt("return", {
              store: store,
              app: app,
              router: router
            });

          case 41:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _createApp.apply(this, arguments);
}



/***/ })

}]);