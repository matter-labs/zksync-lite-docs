(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return captureException; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return captureMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return captureEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return configureScope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addBreadcrumb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return setContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return setExtras; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return setTags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return setExtra; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return setTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return setUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return withScope; });
/* unused harmony export _callOnClient */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return startTransaction; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(457);
/* harmony import */ var _sentry_hub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(544);


/**
 * This calls a function on the current hub.
 * @param method function to call on hub.
 * @param args to pass to function.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function callOnHub(method) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    var hub = Object(_sentry_hub__WEBPACK_IMPORTED_MODULE_1__[/* getCurrentHub */ "b"])();
    if (hub && hub[method]) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return hub[method].apply(hub, Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __spread */ "g"])(args));
    }
    throw new Error("No hub defined or " + method + " was not found on the hub, please open a bug report.");
}
/**
 * Captures an exception event and sends it to Sentry.
 *
 * @param exception An exception-like object.
 * @returns The generated eventId.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
function captureException(exception, captureContext) {
    var syntheticException;
    try {
        throw new Error('Sentry syntheticException');
    }
    catch (exception) {
        syntheticException = exception;
    }
    return callOnHub('captureException', exception, {
        captureContext: captureContext,
        originalException: exception,
        syntheticException: syntheticException,
    });
}
/**
 * Captures a message event and sends it to Sentry.
 *
 * @param message The message to send to Sentry.
 * @param level Define the level of the message.
 * @returns The generated eventId.
 */
function captureMessage(message, captureContext) {
    var syntheticException;
    try {
        throw new Error(message);
    }
    catch (exception) {
        syntheticException = exception;
    }
    // This is necessary to provide explicit scopes upgrade, without changing the original
    // arity of the `captureMessage(message, level)` method.
    var level = typeof captureContext === 'string' ? captureContext : undefined;
    var context = typeof captureContext !== 'string' ? { captureContext: captureContext } : undefined;
    return callOnHub('captureMessage', message, level, Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({ originalException: message, syntheticException: syntheticException }, context));
}
/**
 * Captures a manually created event and sends it to Sentry.
 *
 * @param event The event to send to Sentry.
 * @returns The generated eventId.
 */
function captureEvent(event) {
    return callOnHub('captureEvent', event);
}
/**
 * Callback to set context information onto the scope.
 * @param callback Callback function that receives Scope.
 */
function configureScope(callback) {
    callOnHub('configureScope', callback);
}
/**
 * Records a new breadcrumb which will be attached to future events.
 *
 * Breadcrumbs will be added to subsequent events to provide more context on
 * user's actions prior to an error or crash.
 *
 * @param breadcrumb The breadcrumb to record.
 */
function addBreadcrumb(breadcrumb) {
    callOnHub('addBreadcrumb', breadcrumb);
}
/**
 * Sets context data with the given name.
 * @param name of the context
 * @param context Any kind of data. This data will be normalized.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function setContext(name, context) {
    callOnHub('setContext', name, context);
}
/**
 * Set an object that will be merged sent as extra data with the event.
 * @param extras Extras object to merge into current context.
 */
function setExtras(extras) {
    callOnHub('setExtras', extras);
}
/**
 * Set an object that will be merged sent as tags data with the event.
 * @param tags Tags context object to merge into current context.
 */
function setTags(tags) {
    callOnHub('setTags', tags);
}
/**
 * Set key:value that will be sent as extra data with the event.
 * @param key String of extra
 * @param extra Any kind of data. This data will be normalized.
 */
function setExtra(key, extra) {
    callOnHub('setExtra', key, extra);
}
/**
 * Set key:value that will be sent as tags data with the event.
 *
 * Can also be used to unset a tag, by passing `undefined`.
 *
 * @param key String key of tag
 * @param value Value of tag
 */
function setTag(key, value) {
    callOnHub('setTag', key, value);
}
/**
 * Updates user context information for future events.
 *
 * @param user User context object to be set in the current context. Pass `null` to unset the user.
 */
function setUser(user) {
    callOnHub('setUser', user);
}
/**
 * Creates a new scope with and executes the given operation within.
 * The scope is automatically removed once the operation
 * finishes or throws.
 *
 * This is essentially a convenience function for:
 *
 *     pushScope();
 *     callback();
 *     popScope();
 *
 * @param callback that will be enclosed into push/popScope.
 */
function withScope(callback) {
    callOnHub('withScope', callback);
}
/**
 * Calls a function on the latest client. Use this with caution, it's meant as
 * in "internal" helper so we don't need to expose every possible function in
 * the shim. It is not guaranteed that the client actually implements the
 * function.
 *
 * @param method The method to call on the client/client.
 * @param args Arguments to pass to the client/fontend.
 * @hidden
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function _callOnClient(method) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    callOnHub.apply(void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __spread */ "g"])(['_invokeClient', method], args));
}
/**
 * Starts a new `Transaction` and returns it. This is the entry point to manual tracing instrumentation.
 *
 * A tree structure can be built by adding child spans to the transaction, and child spans to other spans. To start a
 * new child span within the transaction or any span, call the respective `.startChild()` method.
 *
 * Every child span must be finished before the transaction is finished, otherwise the unfinished spans are discarded.
 *
 * The transaction must be finished with a call to its `.finish()` method, at which point the transaction with all its
 * finished child spans will be sent to Sentry.
 *
 * @param context Properties of the new `Transaction`.
 * @param customSamplingContext Information given to the transaction sampling function (along with context-dependent
 * default values). See {@link Options.tracesSampler}.
 *
 * @returns The transaction which was just started
 */
function startTransaction(context, customSamplingContext) {
    return callOnHub('startTransaction', Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({}, context), customSamplingContext);
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return isError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return isErrorEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isDOMError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isDOMException; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return isPrimitive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return isPlainObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return isEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return isRegExp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return isThenable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return isSyntheticEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return isInstanceOf; });
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/**
 * Checks whether given value's type is one of a few Error or Error-like
 * {@link isError}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isError(wat) {
    switch (Object.prototype.toString.call(wat)) {
        case '[object Error]':
            return true;
        case '[object Exception]':
            return true;
        case '[object DOMException]':
            return true;
        default:
            return isInstanceOf(wat, Error);
    }
}
/**
 * Checks whether given value's type is ErrorEvent
 * {@link isErrorEvent}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isErrorEvent(wat) {
    return Object.prototype.toString.call(wat) === '[object ErrorEvent]';
}
/**
 * Checks whether given value's type is DOMError
 * {@link isDOMError}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isDOMError(wat) {
    return Object.prototype.toString.call(wat) === '[object DOMError]';
}
/**
 * Checks whether given value's type is DOMException
 * {@link isDOMException}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isDOMException(wat) {
    return Object.prototype.toString.call(wat) === '[object DOMException]';
}
/**
 * Checks whether given value's type is a string
 * {@link isString}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isString(wat) {
    return Object.prototype.toString.call(wat) === '[object String]';
}
/**
 * Checks whether given value's is a primitive (undefined, null, number, boolean, string, bigint, symbol)
 * {@link isPrimitive}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isPrimitive(wat) {
    return wat === null || (typeof wat !== 'object' && typeof wat !== 'function');
}
/**
 * Checks whether given value's type is an object literal
 * {@link isPlainObject}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isPlainObject(wat) {
    return Object.prototype.toString.call(wat) === '[object Object]';
}
/**
 * Checks whether given value's type is an Event instance
 * {@link isEvent}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isEvent(wat) {
    return typeof Event !== 'undefined' && isInstanceOf(wat, Event);
}
/**
 * Checks whether given value's type is an Element instance
 * {@link isElement}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isElement(wat) {
    return typeof Element !== 'undefined' && isInstanceOf(wat, Element);
}
/**
 * Checks whether given value's type is an regexp
 * {@link isRegExp}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isRegExp(wat) {
    return Object.prototype.toString.call(wat) === '[object RegExp]';
}
/**
 * Checks whether given value has a then function.
 * @param wat A value to be checked.
 */
function isThenable(wat) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    return Boolean(wat && wat.then && typeof wat.then === 'function');
}
/**
 * Checks whether given value's type is a SyntheticEvent
 * {@link isSyntheticEvent}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isSyntheticEvent(wat) {
    return isPlainObject(wat) && 'nativeEvent' in wat && 'preventDefault' in wat && 'stopPropagation' in wat;
}
/**
 * Checks whether given value's type is an instance of provided constructor.
 * {@link isInstanceOf}.
 *
 * @param wat A value to be checked.
 * @param base A constructor to be used in a check.
 * @returns A boolean representing the result.
 */
function isInstanceOf(wat, base) {
    try {
        return wat instanceof base;
    }
    catch (_e) {
        return false;
    }
}
//# sourceMappingURL=is.js.map

/***/ }),

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getGlobalObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return uuid4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return parseUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getEventDescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return consoleSandbox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addExceptionTypeValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addExceptionMechanism; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getLocationHref; });
/* unused harmony export parseSemver */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return parseRetryAfterHeader; });
/* unused harmony export addContextToFrame */
/* unused harmony export stripUrlQueryAndFragment */
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(470);
/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(471);


var fallbackGlobalObject = {};
/**
 * Safely get global scope object
 *
 * @returns Global scope object
 */
function getGlobalObject() {
    return (Object(_node__WEBPACK_IMPORTED_MODULE_0__[/* isNodeEnv */ "b"])()
        ? global
        : typeof window !== 'undefined'
            ? window
            : typeof self !== 'undefined'
                ? self
                : fallbackGlobalObject);
}
/**
 * UUID4 generator
 *
 * @returns string Generated UUID4.
 */
function uuid4() {
    var global = getGlobalObject();
    var crypto = global.crypto || global.msCrypto;
    if (!(crypto === void 0) && crypto.getRandomValues) {
        // Use window.crypto API if available
        var arr = new Uint16Array(8);
        crypto.getRandomValues(arr);
        // set 4 in byte 7
        // eslint-disable-next-line no-bitwise
        arr[3] = (arr[3] & 0xfff) | 0x4000;
        // set 2 most significant bits of byte 9 to '10'
        // eslint-disable-next-line no-bitwise
        arr[4] = (arr[4] & 0x3fff) | 0x8000;
        var pad = function (num) {
            var v = num.toString(16);
            while (v.length < 4) {
                v = "0" + v;
            }
            return v;
        };
        return (pad(arr[0]) + pad(arr[1]) + pad(arr[2]) + pad(arr[3]) + pad(arr[4]) + pad(arr[5]) + pad(arr[6]) + pad(arr[7]));
    }
    // http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/2117523#2117523
    return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        // eslint-disable-next-line no-bitwise
        var r = (Math.random() * 16) | 0;
        // eslint-disable-next-line no-bitwise
        var v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}
/**
 * Parses string form of URL into an object
 * // borrowed from https://tools.ietf.org/html/rfc3986#appendix-B
 * // intentionally using regex and not <a/> href parsing trick because React Native and other
 * // environments where DOM might not be available
 * @returns parsed URL object
 */
function parseUrl(url) {
    if (!url) {
        return {};
    }
    var match = url.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
    if (!match) {
        return {};
    }
    // coerce to undefined values to empty string so we don't get 'undefined'
    var query = match[6] || '';
    var fragment = match[8] || '';
    return {
        host: match[4],
        path: match[5],
        protocol: match[2],
        relative: match[5] + query + fragment,
    };
}
/**
 * Extracts either message or type+value from an event that can be used for user-facing logs
 * @returns event's description
 */
function getEventDescription(event) {
    if (event.message) {
        return event.message;
    }
    if (event.exception && event.exception.values && event.exception.values[0]) {
        var exception = event.exception.values[0];
        if (exception.type && exception.value) {
            return exception.type + ": " + exception.value;
        }
        return exception.type || exception.value || event.event_id || '<unknown>';
    }
    return event.event_id || '<unknown>';
}
/** JSDoc */
function consoleSandbox(callback) {
    var global = getGlobalObject();
    var levels = ['debug', 'info', 'warn', 'error', 'log', 'assert'];
    if (!('console' in global)) {
        return callback();
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    var originalConsole = global.console;
    var wrappedLevels = {};
    // Restore all wrapped console methods
    levels.forEach(function (level) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        if (level in global.console && originalConsole[level].__sentry_original__) {
            wrappedLevels[level] = originalConsole[level];
            originalConsole[level] = originalConsole[level].__sentry_original__;
        }
    });
    // Perform callback manipulations
    var result = callback();
    // Revert restoration to wrapped state
    Object.keys(wrappedLevels).forEach(function (level) {
        originalConsole[level] = wrappedLevels[level];
    });
    return result;
}
/**
 * Adds exception values, type and value to an synthetic Exception.
 * @param event The event to modify.
 * @param value Value of the exception.
 * @param type Type of the exception.
 * @hidden
 */
function addExceptionTypeValue(event, value, type) {
    event.exception = event.exception || {};
    event.exception.values = event.exception.values || [];
    event.exception.values[0] = event.exception.values[0] || {};
    event.exception.values[0].value = event.exception.values[0].value || value || '';
    event.exception.values[0].type = event.exception.values[0].type || type || 'Error';
}
/**
 * Adds exception mechanism to a given event.
 * @param event The event to modify.
 * @param mechanism Mechanism of the mechanism.
 * @hidden
 */
function addExceptionMechanism(event, mechanism) {
    if (mechanism === void 0) { mechanism = {}; }
    // TODO: Use real type with `keyof Mechanism` thingy and maybe make it better?
    try {
        // @ts-ignore Type 'Mechanism | {}' is not assignable to type 'Mechanism | undefined'
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        event.exception.values[0].mechanism = event.exception.values[0].mechanism || {};
        Object.keys(mechanism).forEach(function (key) {
            // @ts-ignore Mechanism has no index signature
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            event.exception.values[0].mechanism[key] = mechanism[key];
        });
    }
    catch (_oO) {
        // no-empty
    }
}
/**
 * A safe form of location.href
 */
function getLocationHref() {
    try {
        return document.location.href;
    }
    catch (oO) {
        return '';
    }
}
// https://semver.org/#is-there-a-suggested-regular-expression-regex-to-check-a-semver-string
var SEMVER_REGEXP = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/;
/**
 * Parses input into a SemVer interface
 * @param input string representation of a semver version
 */
function parseSemver(input) {
    var match = input.match(SEMVER_REGEXP) || [];
    var major = parseInt(match[1], 10);
    var minor = parseInt(match[2], 10);
    var patch = parseInt(match[3], 10);
    return {
        buildmetadata: match[5],
        major: isNaN(major) ? undefined : major,
        minor: isNaN(minor) ? undefined : minor,
        patch: isNaN(patch) ? undefined : patch,
        prerelease: match[4],
    };
}
var defaultRetryAfter = 60 * 1000; // 60 seconds
/**
 * Extracts Retry-After value from the request header or returns default value
 * @param now current unix timestamp
 * @param header string representation of 'Retry-After' header
 */
function parseRetryAfterHeader(now, header) {
    if (!header) {
        return defaultRetryAfter;
    }
    var headerDelay = parseInt("" + header, 10);
    if (!isNaN(headerDelay)) {
        return headerDelay * 1000;
    }
    var headerDate = Date.parse("" + header);
    if (!isNaN(headerDate)) {
        return headerDate - now;
    }
    return defaultRetryAfter;
}
/**
 * This function adds context (pre/post/line) lines to the provided frame
 *
 * @param lines string[] containing all lines
 * @param frame StackFrame that will be mutated
 * @param linesOfContext number of context lines we want to add pre/post
 */
function addContextToFrame(lines, frame, linesOfContext) {
    if (linesOfContext === void 0) { linesOfContext = 5; }
    var lineno = frame.lineno || 0;
    var maxLines = lines.length;
    var sourceLine = Math.max(Math.min(maxLines, lineno - 1), 0);
    frame.pre_context = lines
        .slice(Math.max(0, sourceLine - linesOfContext), sourceLine)
        .map(function (line) { return Object(_string__WEBPACK_IMPORTED_MODULE_1__[/* snipLine */ "c"])(line, 0); });
    frame.context_line = Object(_string__WEBPACK_IMPORTED_MODULE_1__[/* snipLine */ "c"])(lines[Math.min(maxLines - 1, sourceLine)], frame.colno || 0);
    frame.post_context = lines
        .slice(Math.min(sourceLine + 1, maxLines), sourceLine + 1 + linesOfContext)
        .map(function (line) { return Object(_string__WEBPACK_IMPORTED_MODULE_1__[/* snipLine */ "c"])(line, 0); });
}
/**
 * Strip the query string and fragment off of a given URL or path (if present)
 *
 * @param urlPath Full URL or path, including possible query string and/or fragment
 * @returns URL or path without query string or fragment
 */
function stripUrlQueryAndFragment(urlPath) {
    // eslint-disable-next-line no-useless-escape
    return urlPath.split(/[\?#]/, 1)[0];
}
//# sourceMappingURL=misc.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(58)))

/***/ }),

/***/ 470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isNodeEnv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dynamicRequire; });
/* unused harmony export loadModule */
/**
 * Checks whether we're in the Node.js or Browser environment
 *
 * @returns Answer to given question
 */
function isNodeEnv() {
    return Object.prototype.toString.call(typeof process !== 'undefined' ? process : 0) === '[object process]';
}
/**
 * Requires a module which is protected against bundler minification.
 *
 * @param request The module path to resolve
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
function dynamicRequire(mod, request) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    return mod.require(request);
}
/**
 * Helper for dynamically loading module that should work with linked dependencies.
 * The problem is that we _should_ be using `require(require.resolve(moduleName, { paths: [cwd()] }))`
 * However it's _not possible_ to do that with Webpack, as it has to know all the dependencies during
 * build time. `require.resolve` is also not available in any other way, so we cannot create,
 * a fake helper like we do with `dynamicRequire`.
 *
 * We always prefer to use local package, thus the value is not returned early from each `try/catch` block.
 * That is to mimic the behavior of `require.resolve` exactly.
 *
 * @param moduleName module name to require
 * @returns possibly required module
 */
function loadModule(moduleName) {
    var mod;
    try {
        mod = dynamicRequire(module, moduleName);
    }
    catch (e) {
        // no-empty
    }
    try {
        var cwd = dynamicRequire(module, 'process').cwd;
        mod = dynamicRequire(module, cwd() + "/node_modules/" + moduleName);
    }
    catch (e) {
        // no-empty
    }
    return mod;
}
//# sourceMappingURL=node.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(330), __webpack_require__(469)(module)))

/***/ }),

/***/ 471:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return truncate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return snipLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return safeJoin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isMatchingPattern; });
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(461);

/**
 * Truncates given string to the maximum characters count
 *
 * @param str An object that contains serializable values
 * @param max Maximum number of characters in truncated string (0 = unlimited)
 * @returns string Encoded
 */
function truncate(str, max) {
    if (max === void 0) { max = 0; }
    if (typeof str !== 'string' || max === 0) {
        return str;
    }
    return str.length <= max ? str : str.substr(0, max) + "...";
}
/**
 * This is basically just `trim_line` from
 * https://github.com/getsentry/sentry/blob/master/src/sentry/lang/javascript/processor.py#L67
 *
 * @param str An object that contains serializable values
 * @param max Maximum number of characters in truncated string
 * @returns string Encoded
 */
function snipLine(line, colno) {
    var newLine = line;
    var ll = newLine.length;
    if (ll <= 150) {
        return newLine;
    }
    if (colno > ll) {
        // eslint-disable-next-line no-param-reassign
        colno = ll;
    }
    var start = Math.max(colno - 60, 0);
    if (start < 5) {
        start = 0;
    }
    var end = Math.min(start + 140, ll);
    if (end > ll - 5) {
        end = ll;
    }
    if (end === ll) {
        start = Math.max(end - 140, 0);
    }
    newLine = newLine.slice(start, end);
    if (start > 0) {
        newLine = "'{snip} " + newLine;
    }
    if (end < ll) {
        newLine += ' {snip}';
    }
    return newLine;
}
/**
 * Join values in array
 * @param input array of values to be joined together
 * @param delimiter string to be placed in-between values
 * @returns Joined values
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function safeJoin(input, delimiter) {
    if (!Array.isArray(input)) {
        return '';
    }
    var output = [];
    // eslint-disable-next-line @typescript-eslint/prefer-for-of
    for (var i = 0; i < input.length; i++) {
        var value = input[i];
        try {
            output.push(String(value));
        }
        catch (e) {
            output.push('[value cannot be serialized]');
        }
    }
    return output.join(delimiter);
}
/**
 * Checks if the value matches a regex or includes the string
 * @param value The string value to be checked against
 * @param pattern Either a regex or a string that must be contained in value
 */
function isMatchingPattern(value, pattern) {
    if (!Object(_is__WEBPACK_IMPORTED_MODULE_0__[/* isString */ "k"])(value)) {
        return false;
    }
    if (Object(_is__WEBPACK_IMPORTED_MODULE_0__[/* isRegExp */ "j"])(pattern)) {
        return pattern.test(value);
    }
    if (typeof pattern === 'string') {
        return value.indexOf(pattern) !== -1;
    }
    return false;
}
//# sourceMappingURL=string.js.map

/***/ }),

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return logger; });
/* harmony import */ var _misc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(462);
/* eslint-disable @typescript-eslint/no-explicit-any */

// TODO: Implement different loggers for different environments
var global = Object(_misc__WEBPACK_IMPORTED_MODULE_0__[/* getGlobalObject */ "e"])();
/** Prefix for logging strings */
var PREFIX = 'Sentry Logger ';
/** JSDoc */
var Logger = /** @class */ (function () {
    /** JSDoc */
    function Logger() {
        this._enabled = false;
    }
    /** JSDoc */
    Logger.prototype.disable = function () {
        this._enabled = false;
    };
    /** JSDoc */
    Logger.prototype.enable = function () {
        this._enabled = true;
    };
    /** JSDoc */
    Logger.prototype.log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!this._enabled) {
            return;
        }
        Object(_misc__WEBPACK_IMPORTED_MODULE_0__[/* consoleSandbox */ "c"])(function () {
            global.console.log(PREFIX + "[Log]: " + args.join(' '));
        });
    };
    /** JSDoc */
    Logger.prototype.warn = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!this._enabled) {
            return;
        }
        Object(_misc__WEBPACK_IMPORTED_MODULE_0__[/* consoleSandbox */ "c"])(function () {
            global.console.warn(PREFIX + "[Warn]: " + args.join(' '));
        });
    };
    /** JSDoc */
    Logger.prototype.error = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!this._enabled) {
            return;
        }
        Object(_misc__WEBPACK_IMPORTED_MODULE_0__[/* consoleSandbox */ "c"])(function () {
            global.console.error(PREFIX + "[Error]: " + args.join(' '));
        });
    };
    return Logger;
}());
// Ensure we only have a single logger instance, even if multiple versions of @sentry/utils are being used
global.__SENTRY__ = global.__SENTRY__ || {};
var logger = global.__SENTRY__.logger || (global.__SENTRY__.logger = new Logger());

//# sourceMappingURL=logger.js.map

/***/ }),

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getFunctionName; });
var defaultFunctionName = '<anonymous>';
/**
 * Safely extract function name from itself
 */
function getFunctionName(fn) {
    try {
        if (!fn || typeof fn !== 'function') {
            return defaultFunctionName;
        }
        return fn.name || defaultFunctionName;
    }
    catch (e) {
        // Just accessing custom props in some Selenium environments
        // can cause a "Permission denied" exception (see raven-js#495).
        return defaultFunctionName;
    }
}
//# sourceMappingURL=stacktrace.js.map

/***/ }),

/***/ 474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ error_SentryError; });

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(457);

// CONCATENATED MODULE: ./node_modules/@sentry/utils/esm/polyfill.js
var setPrototypeOf = Object.setPrototypeOf || ({ __proto__: [] } instanceof Array ? setProtoOf : mixinProperties);
/**
 * setPrototypeOf polyfill using __proto__
 */
// eslint-disable-next-line @typescript-eslint/ban-types
function setProtoOf(obj, proto) {
    // @ts-ignore __proto__ does not exist on obj
    obj.__proto__ = proto;
    return obj;
}
/**
 * setPrototypeOf polyfill using mixin
 */
// eslint-disable-next-line @typescript-eslint/ban-types
function mixinProperties(obj, proto) {
    for (var prop in proto) {
        // eslint-disable-next-line no-prototype-builtins
        if (!obj.hasOwnProperty(prop)) {
            // @ts-ignore typescript complains about indexing so we remove
            obj[prop] = proto[prop];
        }
    }
    return obj;
}
//# sourceMappingURL=polyfill.js.map
// CONCATENATED MODULE: ./node_modules/@sentry/utils/esm/error.js


/** An error emitted by Sentry SDKs and related utilities. */
var error_SentryError = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(SentryError, _super);
    function SentryError(message) {
        var _newTarget = this.constructor;
        var _this = _super.call(this, message) || this;
        _this.message = message;
        _this.name = _newTarget.prototype.constructor.name;
        setPrototypeOf(_this, _newTarget.prototype);
        return _this;
    }
    return SentryError;
}(Error));

//# sourceMappingURL=error.js.map

/***/ }),

/***/ 525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Scope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addGlobalEventProcessor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(457);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(461);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(535);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(526);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(462);


/**
 * Absolute maximum number of breadcrumbs added to an event.
 * The `maxBreadcrumbs` option cannot be higher than this value.
 */
var MAX_BREADCRUMBS = 100;
/**
 * Holds additional event information. {@link Scope.applyToEvent} will be
 * called by the client before an event will be sent.
 */
var Scope = /** @class */ (function () {
    function Scope() {
        /** Flag if notifiying is happening. */
        this._notifyingListeners = false;
        /** Callback for client to receive scope changes. */
        this._scopeListeners = [];
        /** Callback list that will be called after {@link applyToEvent}. */
        this._eventProcessors = [];
        /** Array of breadcrumbs. */
        this._breadcrumbs = [];
        /** User */
        this._user = {};
        /** Tags */
        this._tags = {};
        /** Extra */
        this._extra = {};
        /** Contexts */
        this._contexts = {};
    }
    /**
     * Inherit values from the parent scope.
     * @param scope to clone.
     */
    Scope.clone = function (scope) {
        var newScope = new Scope();
        if (scope) {
            newScope._breadcrumbs = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __spread */ "g"])(scope._breadcrumbs);
            newScope._tags = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({}, scope._tags);
            newScope._extra = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({}, scope._extra);
            newScope._contexts = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({}, scope._contexts);
            newScope._user = scope._user;
            newScope._level = scope._level;
            newScope._span = scope._span;
            newScope._session = scope._session;
            newScope._transactionName = scope._transactionName;
            newScope._fingerprint = scope._fingerprint;
            newScope._eventProcessors = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __spread */ "g"])(scope._eventProcessors);
            newScope._requestSession = scope._requestSession;
        }
        return newScope;
    };
    /**
     * Add internal on change listener. Used for sub SDKs that need to store the scope.
     * @hidden
     */
    Scope.prototype.addScopeListener = function (callback) {
        this._scopeListeners.push(callback);
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.addEventProcessor = function (callback) {
        this._eventProcessors.push(callback);
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.setUser = function (user) {
        this._user = user || {};
        if (this._session) {
            this._session.update({ user: user });
        }
        this._notifyScopeListeners();
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.getUser = function () {
        return this._user;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.getRequestSession = function () {
        return this._requestSession;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.setRequestSession = function (requestSession) {
        this._requestSession = requestSession;
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.setTags = function (tags) {
        this._tags = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({}, this._tags), tags);
        this._notifyScopeListeners();
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.setTag = function (key, value) {
        var _a;
        this._tags = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({}, this._tags), (_a = {}, _a[key] = value, _a));
        this._notifyScopeListeners();
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.setExtras = function (extras) {
        this._extra = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({}, this._extra), extras);
        this._notifyScopeListeners();
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.setExtra = function (key, extra) {
        var _a;
        this._extra = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({}, this._extra), (_a = {}, _a[key] = extra, _a));
        this._notifyScopeListeners();
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.setFingerprint = function (fingerprint) {
        this._fingerprint = fingerprint;
        this._notifyScopeListeners();
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.setLevel = function (level) {
        this._level = level;
        this._notifyScopeListeners();
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.setTransactionName = function (name) {
        this._transactionName = name;
        this._notifyScopeListeners();
        return this;
    };
    /**
     * Can be removed in major version.
     * @deprecated in favor of {@link this.setTransactionName}
     */
    Scope.prototype.setTransaction = function (name) {
        return this.setTransactionName(name);
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.setContext = function (key, context) {
        var _a;
        if (context === null) {
            // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
            delete this._contexts[key];
        }
        else {
            this._contexts = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({}, this._contexts), (_a = {}, _a[key] = context, _a));
        }
        this._notifyScopeListeners();
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.setSpan = function (span) {
        this._span = span;
        this._notifyScopeListeners();
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.getSpan = function () {
        return this._span;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.getTransaction = function () {
        var _a, _b, _c, _d;
        // often, this span will be a transaction, but it's not guaranteed to be
        var span = this.getSpan();
        // try it the new way first
        if ((_a = span) === null || _a === void 0 ? void 0 : _a.transaction) {
            return (_b = span) === null || _b === void 0 ? void 0 : _b.transaction;
        }
        // fallback to the old way (known bug: this only finds transactions with sampled = true)
        if ((_d = (_c = span) === null || _c === void 0 ? void 0 : _c.spanRecorder) === null || _d === void 0 ? void 0 : _d.spans[0]) {
            return span.spanRecorder.spans[0];
        }
        // neither way found a transaction
        return undefined;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.setSession = function (session) {
        if (!session) {
            delete this._session;
        }
        else {
            this._session = session;
        }
        this._notifyScopeListeners();
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.getSession = function () {
        return this._session;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.update = function (captureContext) {
        if (!captureContext) {
            return this;
        }
        if (typeof captureContext === 'function') {
            var updatedScope = captureContext(this);
            return updatedScope instanceof Scope ? updatedScope : this;
        }
        if (captureContext instanceof Scope) {
            this._tags = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({}, this._tags), captureContext._tags);
            this._extra = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({}, this._extra), captureContext._extra);
            this._contexts = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({}, this._contexts), captureContext._contexts);
            if (captureContext._user && Object.keys(captureContext._user).length) {
                this._user = captureContext._user;
            }
            if (captureContext._level) {
                this._level = captureContext._level;
            }
            if (captureContext._fingerprint) {
                this._fingerprint = captureContext._fingerprint;
            }
            if (captureContext._requestSession) {
                this._requestSession = captureContext._requestSession;
            }
        }
        else if (Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__[/* isPlainObject */ "h"])(captureContext)) {
            // eslint-disable-next-line no-param-reassign
            captureContext = captureContext;
            this._tags = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({}, this._tags), captureContext.tags);
            this._extra = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({}, this._extra), captureContext.extra);
            this._contexts = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({}, this._contexts), captureContext.contexts);
            if (captureContext.user) {
                this._user = captureContext.user;
            }
            if (captureContext.level) {
                this._level = captureContext.level;
            }
            if (captureContext.fingerprint) {
                this._fingerprint = captureContext.fingerprint;
            }
            if (captureContext.requestSession) {
                this._requestSession = captureContext.requestSession;
            }
        }
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.clear = function () {
        this._breadcrumbs = [];
        this._tags = {};
        this._extra = {};
        this._user = {};
        this._contexts = {};
        this._level = undefined;
        this._transactionName = undefined;
        this._fingerprint = undefined;
        this._requestSession = undefined;
        this._span = undefined;
        this._session = undefined;
        this._notifyScopeListeners();
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.addBreadcrumb = function (breadcrumb, maxBreadcrumbs) {
        var maxCrumbs = typeof maxBreadcrumbs === 'number' ? Math.min(maxBreadcrumbs, MAX_BREADCRUMBS) : MAX_BREADCRUMBS;
        // No data has been changed, so don't notify scope listeners
        if (maxCrumbs <= 0) {
            return this;
        }
        var mergedBreadcrumb = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({ timestamp: Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__[/* dateTimestampInSeconds */ "a"])() }, breadcrumb);
        this._breadcrumbs = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __spread */ "g"])(this._breadcrumbs, [mergedBreadcrumb]).slice(-maxCrumbs);
        this._notifyScopeListeners();
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.clearBreadcrumbs = function () {
        this._breadcrumbs = [];
        this._notifyScopeListeners();
        return this;
    };
    /**
     * Applies the current context and fingerprint to the event.
     * Note that breadcrumbs will be added by the client.
     * Also if the event has already breadcrumbs on it, we do not merge them.
     * @param event Event
     * @param hint May contain additional informartion about the original exception.
     * @hidden
     */
    Scope.prototype.applyToEvent = function (event, hint) {
        var _a;
        if (this._extra && Object.keys(this._extra).length) {
            event.extra = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({}, this._extra), event.extra);
        }
        if (this._tags && Object.keys(this._tags).length) {
            event.tags = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({}, this._tags), event.tags);
        }
        if (this._user && Object.keys(this._user).length) {
            event.user = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({}, this._user), event.user);
        }
        if (this._contexts && Object.keys(this._contexts).length) {
            event.contexts = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({}, this._contexts), event.contexts);
        }
        if (this._level) {
            event.level = this._level;
        }
        if (this._transactionName) {
            event.transaction = this._transactionName;
        }
        // We want to set the trace context for normal events only if there isn't already
        // a trace context on the event. There is a product feature in place where we link
        // errors with transaction and it relys on that.
        if (this._span) {
            event.contexts = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({ trace: this._span.getTraceContext() }, event.contexts);
            var transactionName = (_a = this._span.transaction) === null || _a === void 0 ? void 0 : _a.name;
            if (transactionName) {
                event.tags = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({ transaction: transactionName }, event.tags);
            }
        }
        this._applyFingerprint(event);
        event.breadcrumbs = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __spread */ "g"])((event.breadcrumbs || []), this._breadcrumbs);
        event.breadcrumbs = event.breadcrumbs.length > 0 ? event.breadcrumbs : undefined;
        return this._notifyEventProcessors(Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __spread */ "g"])(getGlobalEventProcessors(), this._eventProcessors), event, hint);
    };
    /**
     * This will be called after {@link applyToEvent} is finished.
     */
    Scope.prototype._notifyEventProcessors = function (processors, event, hint, index) {
        var _this = this;
        if (index === void 0) { index = 0; }
        return new _sentry_utils__WEBPACK_IMPORTED_MODULE_3__[/* SyncPromise */ "a"](function (resolve, reject) {
            var processor = processors[index];
            if (event === null || typeof processor !== 'function') {
                resolve(event);
            }
            else {
                var result = processor(Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({}, event), hint);
                if (Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__[/* isThenable */ "m"])(result)) {
                    void result
                        .then(function (final) { return _this._notifyEventProcessors(processors, final, hint, index + 1).then(resolve); })
                        .then(null, reject);
                }
                else {
                    void _this._notifyEventProcessors(processors, result, hint, index + 1)
                        .then(resolve)
                        .then(null, reject);
                }
            }
        });
    };
    /**
     * This will be called on every set call.
     */
    Scope.prototype._notifyScopeListeners = function () {
        var _this = this;
        // We need this check for this._notifyingListeners to be able to work on scope during updates
        // If this check is not here we'll produce endless recursion when something is done with the scope
        // during the callback.
        if (!this._notifyingListeners) {
            this._notifyingListeners = true;
            this._scopeListeners.forEach(function (callback) {
                callback(_this);
            });
            this._notifyingListeners = false;
        }
    };
    /**
     * Applies fingerprint from the scope to the event if there's one,
     * uses message if there's one instead or get rid of empty fingerprint
     */
    Scope.prototype._applyFingerprint = function (event) {
        // Make sure it's an array first and we actually have something in place
        event.fingerprint = event.fingerprint
            ? Array.isArray(event.fingerprint)
                ? event.fingerprint
                : [event.fingerprint]
            : [];
        // If we have something on the scope, then merge it with event
        if (this._fingerprint) {
            event.fingerprint = event.fingerprint.concat(this._fingerprint);
        }
        // If we have no data at all, remove empty array default
        if (event.fingerprint && !event.fingerprint.length) {
            delete event.fingerprint;
        }
    };
    return Scope;
}());

/**
 * Retruns the global event processors.
 */
function getGlobalEventProcessors() {
    /* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-member-access  */
    var global = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_4__[/* getGlobalObject */ "e"])();
    global.__SENTRY__ = global.__SENTRY__ || {};
    global.__SENTRY__.globalEventProcessors = global.__SENTRY__.globalEventProcessors || [];
    return global.__SENTRY__.globalEventProcessors;
    /* eslint-enable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-member-access */
}
/**
 * Add a EventProcessor to be kept globally.
 * @param callback EventProcessor to add
 */
function addGlobalEventProcessor(callback) {
    getGlobalEventProcessors().push(callback);
}
//# sourceMappingURL=scope.js.map

/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SyncPromise; });
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(461);
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/typedef */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

/** SyncPromise internal states */
var States;
(function (States) {
    /** Pending */
    States["PENDING"] = "PENDING";
    /** Resolved / OK */
    States["RESOLVED"] = "RESOLVED";
    /** Rejected / Error */
    States["REJECTED"] = "REJECTED";
})(States || (States = {}));
/**
 * Thenable class that behaves like a Promise and follows it's interface
 * but is not async internally
 */
var SyncPromise = /** @class */ (function () {
    function SyncPromise(executor) {
        var _this = this;
        this._state = States.PENDING;
        this._handlers = [];
        /** JSDoc */
        this._resolve = function (value) {
            _this._setResult(States.RESOLVED, value);
        };
        /** JSDoc */
        this._reject = function (reason) {
            _this._setResult(States.REJECTED, reason);
        };
        /** JSDoc */
        this._setResult = function (state, value) {
            if (_this._state !== States.PENDING) {
                return;
            }
            if (Object(_is__WEBPACK_IMPORTED_MODULE_0__[/* isThenable */ "m"])(value)) {
                void value.then(_this._resolve, _this._reject);
                return;
            }
            _this._state = state;
            _this._value = value;
            _this._executeHandlers();
        };
        // TODO: FIXME
        /** JSDoc */
        this._attachHandler = function (handler) {
            _this._handlers = _this._handlers.concat(handler);
            _this._executeHandlers();
        };
        /** JSDoc */
        this._executeHandlers = function () {
            if (_this._state === States.PENDING) {
                return;
            }
            var cachedHandlers = _this._handlers.slice();
            _this._handlers = [];
            cachedHandlers.forEach(function (handler) {
                if (handler.done) {
                    return;
                }
                if (_this._state === States.RESOLVED) {
                    if (handler.onfulfilled) {
                        // eslint-disable-next-line @typescript-eslint/no-floating-promises
                        handler.onfulfilled(_this._value);
                    }
                }
                if (_this._state === States.REJECTED) {
                    if (handler.onrejected) {
                        handler.onrejected(_this._value);
                    }
                }
                handler.done = true;
            });
        };
        try {
            executor(this._resolve, this._reject);
        }
        catch (e) {
            this._reject(e);
        }
    }
    /** JSDoc */
    SyncPromise.resolve = function (value) {
        return new SyncPromise(function (resolve) {
            resolve(value);
        });
    };
    /** JSDoc */
    SyncPromise.reject = function (reason) {
        return new SyncPromise(function (_, reject) {
            reject(reason);
        });
    };
    /** JSDoc */
    SyncPromise.all = function (collection) {
        return new SyncPromise(function (resolve, reject) {
            if (!Array.isArray(collection)) {
                reject(new TypeError("Promise.all requires an array as input."));
                return;
            }
            if (collection.length === 0) {
                resolve([]);
                return;
            }
            var counter = collection.length;
            var resolvedCollection = [];
            collection.forEach(function (item, index) {
                void SyncPromise.resolve(item)
                    .then(function (value) {
                    resolvedCollection[index] = value;
                    counter -= 1;
                    if (counter !== 0) {
                        return;
                    }
                    resolve(resolvedCollection);
                })
                    .then(null, reject);
            });
        });
    };
    /** JSDoc */
    SyncPromise.prototype.then = function (onfulfilled, onrejected) {
        var _this = this;
        return new SyncPromise(function (resolve, reject) {
            _this._attachHandler({
                done: false,
                onfulfilled: function (result) {
                    if (!onfulfilled) {
                        // TODO: ¯\_(ツ)_/¯
                        // TODO: FIXME
                        resolve(result);
                        return;
                    }
                    try {
                        resolve(onfulfilled(result));
                        return;
                    }
                    catch (e) {
                        reject(e);
                        return;
                    }
                },
                onrejected: function (reason) {
                    if (!onrejected) {
                        reject(reason);
                        return;
                    }
                    try {
                        resolve(onrejected(reason));
                        return;
                    }
                    catch (e) {
                        reject(e);
                        return;
                    }
                },
            });
        });
    };
    /** JSDoc */
    SyncPromise.prototype.catch = function (onrejected) {
        return this.then(function (val) { return val; }, onrejected);
    };
    /** JSDoc */
    SyncPromise.prototype.finally = function (onfinally) {
        var _this = this;
        return new SyncPromise(function (resolve, reject) {
            var val;
            var isRejected;
            return _this.then(function (value) {
                isRejected = false;
                val = value;
                if (onfinally) {
                    onfinally();
                }
            }, function (reason) {
                isRejected = true;
                val = reason;
                if (onfinally) {
                    onfinally();
                }
            }).then(function () {
                if (isRejected) {
                    reject(val);
                    return;
                }
                resolve(val);
            });
        });
    };
    /** JSDoc */
    SyncPromise.prototype.toString = function () {
        return '[object SyncPromise]';
    };
    return SyncPromise;
}());

//# sourceMappingURL=syncpromise.js.map

/***/ }),

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return fill; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return urlEncode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return normalizeToSize; });
/* unused harmony export walk */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return normalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return extractExceptionKeysForMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dropUndefinedKeys; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(457);
/* harmony import */ var _browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(528);
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(461);
/* harmony import */ var _memo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(529);
/* harmony import */ var _stacktrace__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(473);
/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(471);






/**
 * Replace a method in an object with a wrapped version of itself.
 *
 * @param source An object that contains a method to be wrapped.
 * @param name The name of the method to be wrapped.
 * @param replacementFactory A higher-order function that takes the original version of the given method and returns a
 * wrapped version. Note: The function returned by `replacementFactory` needs to be a non-arrow function, in order to
 * preserve the correct value of `this`, and the original method must be called using `origMethod.call(this, <other
 * args>)` or `origMethod.apply(this, [<other args>])` (rather than being called directly), again to preserve `this`.
 * @returns void
 */
function fill(source, name, replacementFactory) {
    if (!(name in source)) {
        return;
    }
    var original = source[name];
    var wrapped = replacementFactory(original);
    // Make sure it's a function first, as we need to attach an empty prototype for `defineProperties` to work
    // otherwise it'll throw "TypeError: Object.defineProperties called on non-object"
    if (typeof wrapped === 'function') {
        try {
            wrapped.prototype = wrapped.prototype || {};
            Object.defineProperties(wrapped, {
                __sentry_original__: {
                    enumerable: false,
                    value: original,
                },
            });
        }
        catch (_Oo) {
            // This can throw if multiple fill happens on a global object like XMLHttpRequest
            // Fixes https://github.com/getsentry/sentry-javascript/issues/2043
        }
    }
    source[name] = wrapped;
}
/**
 * Encodes given object into url-friendly format
 *
 * @param object An object that contains serializable values
 * @returns string Encoded
 */
function urlEncode(object) {
    return Object.keys(object)
        .map(function (key) { return encodeURIComponent(key) + "=" + encodeURIComponent(object[key]); })
        .join('&');
}
/**
 * Transforms any object into an object literal with all its attributes
 * attached to it.
 *
 * @param value Initial source that we have to transform in order for it to be usable by the serializer
 */
function getWalkSource(value) {
    if (Object(_is__WEBPACK_IMPORTED_MODULE_2__[/* isError */ "d"])(value)) {
        var error = value;
        var err = {
            message: error.message,
            name: error.name,
            stack: error.stack,
        };
        for (var i in error) {
            if (Object.prototype.hasOwnProperty.call(error, i)) {
                err[i] = error[i];
            }
        }
        return err;
    }
    if (Object(_is__WEBPACK_IMPORTED_MODULE_2__[/* isEvent */ "f"])(value)) {
        var event_1 = value;
        var source = {};
        source.type = event_1.type;
        // Accessing event.target can throw (see getsentry/raven-js#838, #768)
        try {
            source.target = Object(_is__WEBPACK_IMPORTED_MODULE_2__[/* isElement */ "c"])(event_1.target)
                ? Object(_browser__WEBPACK_IMPORTED_MODULE_1__[/* htmlTreeAsString */ "a"])(event_1.target)
                : Object.prototype.toString.call(event_1.target);
        }
        catch (_oO) {
            source.target = '<unknown>';
        }
        try {
            source.currentTarget = Object(_is__WEBPACK_IMPORTED_MODULE_2__[/* isElement */ "c"])(event_1.currentTarget)
                ? Object(_browser__WEBPACK_IMPORTED_MODULE_1__[/* htmlTreeAsString */ "a"])(event_1.currentTarget)
                : Object.prototype.toString.call(event_1.currentTarget);
        }
        catch (_oO) {
            source.currentTarget = '<unknown>';
        }
        if (typeof CustomEvent !== 'undefined' && Object(_is__WEBPACK_IMPORTED_MODULE_2__[/* isInstanceOf */ "g"])(value, CustomEvent)) {
            source.detail = event_1.detail;
        }
        for (var i in event_1) {
            if (Object.prototype.hasOwnProperty.call(event_1, i)) {
                source[i] = event_1;
            }
        }
        return source;
    }
    return value;
}
/** Calculates bytes size of input string */
function utf8Length(value) {
    // eslint-disable-next-line no-bitwise
    return ~-encodeURI(value).split(/%..|./).length;
}
/** Calculates bytes size of input object */
function jsonSize(value) {
    return utf8Length(JSON.stringify(value));
}
/** JSDoc */
function normalizeToSize(object, 
// Default Node.js REPL depth
depth, 
// 100kB, as 200kB is max payload size, so half sounds reasonable
maxSize) {
    if (depth === void 0) { depth = 3; }
    if (maxSize === void 0) { maxSize = 100 * 1024; }
    var serialized = normalize(object, depth);
    if (jsonSize(serialized) > maxSize) {
        return normalizeToSize(object, depth - 1, maxSize);
    }
    return serialized;
}
/**
 * Transform any non-primitive, BigInt, or Symbol-type value into a string. Acts as a no-op on strings, numbers,
 * booleans, null, and undefined.
 *
 * @param value The value to stringify
 * @returns For non-primitive, BigInt, and Symbol-type values, a string denoting the value's type, type and value, or
 *  type and `description` property, respectively. For non-BigInt, non-Symbol primitives, returns the original value,
 *  unchanged.
 */
function serializeValue(value) {
    var type = Object.prototype.toString.call(value);
    // Node.js REPL notation
    if (typeof value === 'string') {
        return value;
    }
    if (type === '[object Object]') {
        return '[Object]';
    }
    if (type === '[object Array]') {
        return '[Array]';
    }
    var normalized = normalizeValue(value);
    return Object(_is__WEBPACK_IMPORTED_MODULE_2__[/* isPrimitive */ "i"])(normalized) ? normalized : type;
}
/**
 * normalizeValue()
 *
 * Takes unserializable input and make it serializable friendly
 *
 * - translates undefined/NaN values to "[undefined]"/"[NaN]" respectively,
 * - serializes Error objects
 * - filter global objects
 */
function normalizeValue(value, key) {
    if (key === 'domain' && value && typeof value === 'object' && value._events) {
        return '[Domain]';
    }
    if (key === 'domainEmitter') {
        return '[DomainEmitter]';
    }
    if (typeof global !== 'undefined' && value === global) {
        return '[Global]';
    }
    if (typeof window !== 'undefined' && value === window) {
        return '[Window]';
    }
    if (typeof document !== 'undefined' && value === document) {
        return '[Document]';
    }
    // React's SyntheticEvent thingy
    if (Object(_is__WEBPACK_IMPORTED_MODULE_2__[/* isSyntheticEvent */ "l"])(value)) {
        return '[SyntheticEvent]';
    }
    if (typeof value === 'number' && value !== value) {
        return '[NaN]';
    }
    if (value === void 0) {
        return '[undefined]';
    }
    if (typeof value === 'function') {
        return "[Function: " + Object(_stacktrace__WEBPACK_IMPORTED_MODULE_4__[/* getFunctionName */ "a"])(value) + "]";
    }
    // symbols and bigints are considered primitives by TS, but aren't natively JSON-serilaizable
    if (typeof value === 'symbol') {
        return "[" + String(value) + "]";
    }
    if (typeof value === 'bigint') {
        return "[BigInt: " + String(value) + "]";
    }
    return value;
}
/**
 * Walks an object to perform a normalization on it
 *
 * @param key of object that's walked in current iteration
 * @param value object to be walked
 * @param depth Optional number indicating how deep should walking be performed
 * @param memo Optional Memo class handling decycling
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function walk(key, value, depth, memo) {
    if (depth === void 0) { depth = +Infinity; }
    if (memo === void 0) { memo = new _memo__WEBPACK_IMPORTED_MODULE_3__[/* Memo */ "a"](); }
    // If we reach the maximum depth, serialize whatever has left
    if (depth === 0) {
        return serializeValue(value);
    }
    /* eslint-disable @typescript-eslint/no-unsafe-member-access */
    // If value implements `toJSON` method, call it and return early
    if (value !== null && value !== undefined && typeof value.toJSON === 'function') {
        return value.toJSON();
    }
    /* eslint-enable @typescript-eslint/no-unsafe-member-access */
    // If normalized value is a primitive, there are no branches left to walk, so we can just bail out, as theres no point in going down that branch any further
    var normalized = normalizeValue(value, key);
    if (Object(_is__WEBPACK_IMPORTED_MODULE_2__[/* isPrimitive */ "i"])(normalized)) {
        return normalized;
    }
    // Create source that we will use for next itterations, either objectified error object (Error type with extracted keys:value pairs) or the input itself
    var source = getWalkSource(value);
    // Create an accumulator that will act as a parent for all future itterations of that branch
    var acc = Array.isArray(value) ? [] : {};
    // If we already walked that branch, bail out, as it's circular reference
    if (memo.memoize(value)) {
        return '[Circular ~]';
    }
    // Walk all keys of the source
    for (var innerKey in source) {
        // Avoid iterating over fields in the prototype if they've somehow been exposed to enumeration.
        if (!Object.prototype.hasOwnProperty.call(source, innerKey)) {
            continue;
        }
        // Recursively walk through all the child nodes
        acc[innerKey] = walk(innerKey, source[innerKey], depth - 1, memo);
    }
    // Once walked through all the branches, remove the parent from memo storage
    memo.unmemoize(value);
    // Return accumulated values
    return acc;
}
/**
 * normalize()
 *
 * - Creates a copy to prevent original input mutation
 * - Skip non-enumerablers
 * - Calls `toJSON` if implemented
 * - Removes circular references
 * - Translates non-serializeable values (undefined/NaN/Functions) to serializable format
 * - Translates known global objects/Classes to a string representations
 * - Takes care of Error objects serialization
 * - Optionally limit depth of final output
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function normalize(input, depth) {
    try {
        return JSON.parse(JSON.stringify(input, function (key, value) { return walk(key, value, depth); }));
    }
    catch (_oO) {
        return '**non-serializable**';
    }
}
/**
 * Given any captured exception, extract its keys and create a sorted
 * and truncated list that will be used inside the event message.
 * eg. `Non-error exception captured with keys: foo, bar, baz`
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function extractExceptionKeysForMessage(exception, maxLength) {
    if (maxLength === void 0) { maxLength = 40; }
    var keys = Object.keys(getWalkSource(exception));
    keys.sort();
    if (!keys.length) {
        return '[object has no keys]';
    }
    if (keys[0].length >= maxLength) {
        return Object(_string__WEBPACK_IMPORTED_MODULE_5__[/* truncate */ "d"])(keys[0], maxLength);
    }
    for (var includedKeys = keys.length; includedKeys > 0; includedKeys--) {
        var serialized = keys.slice(0, includedKeys).join(', ');
        if (serialized.length > maxLength) {
            continue;
        }
        if (includedKeys === keys.length) {
            return serialized;
        }
        return Object(_string__WEBPACK_IMPORTED_MODULE_5__[/* truncate */ "d"])(serialized, maxLength);
    }
    return '';
}
/**
 * Given any object, return the new object with removed keys that value was `undefined`.
 * Works recursively on objects and arrays.
 */
function dropUndefinedKeys(val) {
    var e_1, _a;
    if (Object(_is__WEBPACK_IMPORTED_MODULE_2__[/* isPlainObject */ "h"])(val)) {
        var obj = val;
        var rv = {};
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __values */ "h"])(Object.keys(obj)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var key = _c.value;
                if (typeof obj[key] !== 'undefined') {
                    rv[key] = dropUndefinedKeys(obj[key]);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return rv;
    }
    if (Array.isArray(val)) {
        return val.map(dropUndefinedKeys);
    }
    return val;
}
//# sourceMappingURL=object.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(58)))

/***/ }),

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return htmlTreeAsString; });
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(461);

/**
 * Given a child DOM element, returns a query-selector statement describing that
 * and its ancestors
 * e.g. [HTMLElement] => body > div > input#foo.btn[name=baz]
 * @returns generated DOM path
 */
function htmlTreeAsString(elem, keyAttrs) {
    // try/catch both:
    // - accessing event.target (see getsentry/raven-js#838, #768)
    // - `htmlTreeAsString` because it's complex, and just accessing the DOM incorrectly
    // - can throw an exception in some circumstances.
    try {
        var currentElem = elem;
        var MAX_TRAVERSE_HEIGHT = 5;
        var MAX_OUTPUT_LEN = 80;
        var out = [];
        var height = 0;
        var len = 0;
        var separator = ' > ';
        var sepLength = separator.length;
        var nextStr = void 0;
        // eslint-disable-next-line no-plusplus
        while (currentElem && height++ < MAX_TRAVERSE_HEIGHT) {
            nextStr = _htmlElementAsString(currentElem, keyAttrs);
            // bail out if
            // - nextStr is the 'html' element
            // - the length of the string that would be created exceeds MAX_OUTPUT_LEN
            //   (ignore this limit if we are on the first iteration)
            if (nextStr === 'html' || (height > 1 && len + out.length * sepLength + nextStr.length >= MAX_OUTPUT_LEN)) {
                break;
            }
            out.push(nextStr);
            len += nextStr.length;
            currentElem = currentElem.parentNode;
        }
        return out.reverse().join(separator);
    }
    catch (_oO) {
        return '<unknown>';
    }
}
/**
 * Returns a simple, query-selector representation of a DOM element
 * e.g. [HTMLElement] => input#foo.btn[name=baz]
 * @returns generated DOM path
 */
function _htmlElementAsString(el, keyAttrs) {
    var _a, _b;
    var elem = el;
    var out = [];
    var className;
    var classes;
    var key;
    var attr;
    var i;
    if (!elem || !elem.tagName) {
        return '';
    }
    out.push(elem.tagName.toLowerCase());
    // Pairs of attribute keys defined in `serializeAttribute` and their values on element.
    var keyAttrPairs = ((_a = keyAttrs) === null || _a === void 0 ? void 0 : _a.length) ? keyAttrs.filter(function (keyAttr) { return elem.getAttribute(keyAttr); }).map(function (keyAttr) { return [keyAttr, elem.getAttribute(keyAttr)]; })
        : null;
    if ((_b = keyAttrPairs) === null || _b === void 0 ? void 0 : _b.length) {
        keyAttrPairs.forEach(function (keyAttrPair) {
            out.push("[" + keyAttrPair[0] + "=\"" + keyAttrPair[1] + "\"]");
        });
    }
    else {
        if (elem.id) {
            out.push("#" + elem.id);
        }
        // eslint-disable-next-line prefer-const
        className = elem.className;
        if (className && Object(_is__WEBPACK_IMPORTED_MODULE_0__[/* isString */ "k"])(className)) {
            classes = className.split(/\s+/);
            for (i = 0; i < classes.length; i++) {
                out.push("." + classes[i]);
            }
        }
    }
    var allowedAttrs = ['type', 'name', 'title', 'alt'];
    for (i = 0; i < allowedAttrs.length; i++) {
        key = allowedAttrs[i];
        attr = elem.getAttribute(key);
        if (attr) {
            out.push("[" + key + "=\"" + attr + "\"]");
        }
    }
    return out.join('');
}
//# sourceMappingURL=browser.js.map

/***/ }),

/***/ 529:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Memo; });
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/**
 * Memo class used for decycle json objects. Uses WeakSet if available otherwise array.
 */
var Memo = /** @class */ (function () {
    function Memo() {
        this._hasWeakSet = typeof WeakSet === 'function';
        this._inner = this._hasWeakSet ? new WeakSet() : [];
    }
    /**
     * Sets obj to remember.
     * @param obj Object to remember
     */
    Memo.prototype.memoize = function (obj) {
        if (this._hasWeakSet) {
            if (this._inner.has(obj)) {
                return true;
            }
            this._inner.add(obj);
            return false;
        }
        // eslint-disable-next-line @typescript-eslint/prefer-for-of
        for (var i = 0; i < this._inner.length; i++) {
            var value = this._inner[i];
            if (value === obj) {
                return true;
            }
        }
        this._inner.push(obj);
        return false;
    };
    /**
     * Removes object from internal storage.
     * @param obj Object to forget
     */
    Memo.prototype.unmemoize = function (obj) {
        if (this._hasWeakSet) {
            this._inner.delete(obj);
        }
        else {
            for (var i = 0; i < this._inner.length; i++) {
                if (this._inner[i] === obj) {
                    this._inner.splice(i, 1);
                    break;
                }
            }
        }
    };
    return Memo;
}());

//# sourceMappingURL=memo.js.map

/***/ }),

/***/ 530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export supportsErrorEvent */
/* unused harmony export supportsDOMError */
/* unused harmony export supportsDOMException */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return supportsFetch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isNativeFetch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return supportsNativeFetch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return supportsReportingObserver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return supportsReferrerPolicy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return supportsHistory; });
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(472);
/* harmony import */ var _misc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(462);


/**
 * Tells whether current environment supports ErrorEvent objects
 * {@link supportsErrorEvent}.
 *
 * @returns Answer to the given question.
 */
function supportsErrorEvent() {
    try {
        new ErrorEvent('');
        return true;
    }
    catch (e) {
        return false;
    }
}
/**
 * Tells whether current environment supports DOMError objects
 * {@link supportsDOMError}.
 *
 * @returns Answer to the given question.
 */
function supportsDOMError() {
    try {
        // Chrome: VM89:1 Uncaught TypeError: Failed to construct 'DOMError':
        // 1 argument required, but only 0 present.
        // @ts-ignore It really needs 1 argument, not 0.
        new DOMError('');
        return true;
    }
    catch (e) {
        return false;
    }
}
/**
 * Tells whether current environment supports DOMException objects
 * {@link supportsDOMException}.
 *
 * @returns Answer to the given question.
 */
function supportsDOMException() {
    try {
        new DOMException('');
        return true;
    }
    catch (e) {
        return false;
    }
}
/**
 * Tells whether current environment supports Fetch API
 * {@link supportsFetch}.
 *
 * @returns Answer to the given question.
 */
function supportsFetch() {
    if (!('fetch' in Object(_misc__WEBPACK_IMPORTED_MODULE_1__[/* getGlobalObject */ "e"])())) {
        return false;
    }
    try {
        new Headers();
        new Request('');
        new Response();
        return true;
    }
    catch (e) {
        return false;
    }
}
/**
 * isNativeFetch checks if the given function is a native implementation of fetch()
 */
// eslint-disable-next-line @typescript-eslint/ban-types
function isNativeFetch(func) {
    return func && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(func.toString());
}
/**
 * Tells whether current environment supports Fetch API natively
 * {@link supportsNativeFetch}.
 *
 * @returns true if `window.fetch` is natively implemented, false otherwise
 */
function supportsNativeFetch() {
    if (!supportsFetch()) {
        return false;
    }
    var global = Object(_misc__WEBPACK_IMPORTED_MODULE_1__[/* getGlobalObject */ "e"])();
    // Fast path to avoid DOM I/O
    // eslint-disable-next-line @typescript-eslint/unbound-method
    if (isNativeFetch(global.fetch)) {
        return true;
    }
    // window.fetch is implemented, but is polyfilled or already wrapped (e.g: by a chrome extension)
    // so create a "pure" iframe to see if that has native fetch
    var result = false;
    var doc = global.document;
    // eslint-disable-next-line deprecation/deprecation
    if (doc && typeof doc.createElement === "function") {
        try {
            var sandbox = doc.createElement('iframe');
            sandbox.hidden = true;
            doc.head.appendChild(sandbox);
            if (sandbox.contentWindow && sandbox.contentWindow.fetch) {
                // eslint-disable-next-line @typescript-eslint/unbound-method
                result = isNativeFetch(sandbox.contentWindow.fetch);
            }
            doc.head.removeChild(sandbox);
        }
        catch (err) {
            _logger__WEBPACK_IMPORTED_MODULE_0__[/* logger */ "a"].warn('Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ', err);
        }
    }
    return result;
}
/**
 * Tells whether current environment supports ReportingObserver API
 * {@link supportsReportingObserver}.
 *
 * @returns Answer to the given question.
 */
function supportsReportingObserver() {
    return 'ReportingObserver' in Object(_misc__WEBPACK_IMPORTED_MODULE_1__[/* getGlobalObject */ "e"])();
}
/**
 * Tells whether current environment supports Referrer Policy API
 * {@link supportsReferrerPolicy}.
 *
 * @returns Answer to the given question.
 */
function supportsReferrerPolicy() {
    // Despite all stars in the sky saying that Edge supports old draft syntax, aka 'never', 'always', 'origin' and 'default
    // https://caniuse.com/#feat=referrer-policy
    // It doesn't. And it throw exception instead of ignoring this parameter...
    // REF: https://github.com/getsentry/raven-js/issues/1233
    if (!supportsFetch()) {
        return false;
    }
    try {
        new Request('_', {
            referrerPolicy: 'origin',
        });
        return true;
    }
    catch (e) {
        return false;
    }
}
/**
 * Tells whether current environment supports History API
 * {@link supportsHistory}.
 *
 * @returns Answer to the given question.
 */
function supportsHistory() {
    // NOTE: in Chrome App environment, touching history.pushState, *even inside
    //       a try/catch block*, will cause Chrome to output an error to console.error
    // borrowed from: https://github.com/angular/angular.js/pull/13945/files
    var global = Object(_misc__WEBPACK_IMPORTED_MODULE_1__[/* getGlobalObject */ "e"])();
    /* eslint-disable @typescript-eslint/no-unsafe-member-access */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var chrome = global.chrome;
    var isChromePackagedApp = chrome && chrome.app && chrome.app.runtime;
    /* eslint-enable @typescript-eslint/no-unsafe-member-access */
    var hasHistoryApi = 'history' in global && !!global.history.pushState && !!global.history.replaceState;
    return !isChromePackagedApp && hasHistoryApi;
}
//# sourceMappingURL=supports.js.map

/***/ }),

/***/ 533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Severity; });
/** JSDoc */
// eslint-disable-next-line import/export
var Severity;
(function (Severity) {
    /** JSDoc */
    Severity["Fatal"] = "fatal";
    /** JSDoc */
    Severity["Error"] = "error";
    /** JSDoc */
    Severity["Warning"] = "warning";
    /** JSDoc */
    Severity["Log"] = "log";
    /** JSDoc */
    Severity["Info"] = "info";
    /** JSDoc */
    Severity["Debug"] = "debug";
    /** JSDoc */
    Severity["Critical"] = "critical";
})(Severity || (Severity = {}));
// eslint-disable-next-line @typescript-eslint/no-namespace, import/export
(function (Severity) {
    /**
     * Converts a string-based level into a {@link Severity}.
     *
     * @param level string representation of Severity
     * @returns Severity
     */
    function fromString(level) {
        switch (level) {
            case 'debug':
                return Severity.Debug;
            case 'info':
                return Severity.Info;
            case 'warn':
            case 'warning':
                return Severity.Warning;
            case 'error':
                return Severity.Error;
            case 'fatal':
                return Severity.Fatal;
            case 'critical':
                return Severity.Critical;
            case 'log':
            default:
                return Severity.Log;
        }
    }
    Severity.fromString = fromString;
})(Severity || (Severity = {}));
//# sourceMappingURL=severity.js.map

/***/ }),

/***/ 534:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Status; });
/** The status of an event. */
// eslint-disable-next-line import/export
var Status;
(function (Status) {
    /** The status could not be determined. */
    Status["Unknown"] = "unknown";
    /** The event was skipped due to configuration or callbacks. */
    Status["Skipped"] = "skipped";
    /** The event was sent to Sentry successfully. */
    Status["Success"] = "success";
    /** The client is currently rate limited and will try again later. */
    Status["RateLimit"] = "rate_limit";
    /** The event could not be processed. */
    Status["Invalid"] = "invalid";
    /** A server-side error ocurred during submission. */
    Status["Failed"] = "failed";
})(Status || (Status = {}));
// eslint-disable-next-line @typescript-eslint/no-namespace, import/export
(function (Status) {
    /**
     * Converts a HTTP status code into a {@link Status}.
     *
     * @param code The HTTP response status code.
     * @returns The send status or {@link Status.Unknown}.
     */
    function fromHttpCode(code) {
        if (code >= 200 && code < 300) {
            return Status.Success;
        }
        if (code === 429) {
            return Status.RateLimit;
        }
        if (code >= 400 && code < 500) {
            return Status.Invalid;
        }
        if (code >= 500) {
            return Status.Failed;
        }
        return Status.Unknown;
    }
    Status.fromHttpCode = fromHttpCode;
})(Status || (Status = {}));
//# sourceMappingURL=status.js.map

/***/ }),

/***/ 535:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dateTimestampInSeconds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return timestampInSeconds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return timestampWithMs; });
/* unused harmony export usingPerformanceAPI */
/* unused harmony export _browserPerformanceTimeOriginMode */
/* unused harmony export browserPerformanceTimeOrigin */
/* harmony import */ var _misc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(462);
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(470);


/**
 * A TimestampSource implementation for environments that do not support the Performance Web API natively.
 *
 * Note that this TimestampSource does not use a monotonic clock. A call to `nowSeconds` may return a timestamp earlier
 * than a previously returned value. We do not try to emulate a monotonic behavior in order to facilitate debugging. It
 * is more obvious to explain "why does my span have negative duration" than "why my spans have zero duration".
 */
var dateTimestampSource = {
    nowSeconds: function () { return Date.now() / 1000; },
};
/**
 * Returns a wrapper around the native Performance API browser implementation, or undefined for browsers that do not
 * support the API.
 *
 * Wrapping the native API works around differences in behavior from different browsers.
 */
function getBrowserPerformance() {
    var performance = Object(_misc__WEBPACK_IMPORTED_MODULE_0__[/* getGlobalObject */ "e"])().performance;
    if (!performance || !performance.now) {
        return undefined;
    }
    // Replace performance.timeOrigin with our own timeOrigin based on Date.now().
    //
    // This is a partial workaround for browsers reporting performance.timeOrigin such that performance.timeOrigin +
    // performance.now() gives a date arbitrarily in the past.
    //
    // Additionally, computing timeOrigin in this way fills the gap for browsers where performance.timeOrigin is
    // undefined.
    //
    // The assumption that performance.timeOrigin + performance.now() ~= Date.now() is flawed, but we depend on it to
    // interact with data coming out of performance entries.
    //
    // Note that despite recommendations against it in the spec, browsers implement the Performance API with a clock that
    // might stop when the computer is asleep (and perhaps under other circumstances). Such behavior causes
    // performance.timeOrigin + performance.now() to have an arbitrary skew over Date.now(). In laptop computers, we have
    // observed skews that can be as long as days, weeks or months.
    //
    // See https://github.com/getsentry/sentry-javascript/issues/2590.
    //
    // BUG: despite our best intentions, this workaround has its limitations. It mostly addresses timings of pageload
    // transactions, but ignores the skew built up over time that can aversely affect timestamps of navigation
    // transactions of long-lived web pages.
    var timeOrigin = Date.now() - performance.now();
    return {
        now: function () { return performance.now(); },
        timeOrigin: timeOrigin,
    };
}
/**
 * Returns the native Performance API implementation from Node.js. Returns undefined in old Node.js versions that don't
 * implement the API.
 */
function getNodePerformance() {
    try {
        var perfHooks = Object(_node__WEBPACK_IMPORTED_MODULE_1__[/* dynamicRequire */ "a"])(module, 'perf_hooks');
        return perfHooks.performance;
    }
    catch (_) {
        return undefined;
    }
}
/**
 * The Performance API implementation for the current platform, if available.
 */
var platformPerformance = Object(_node__WEBPACK_IMPORTED_MODULE_1__[/* isNodeEnv */ "b"])() ? getNodePerformance() : getBrowserPerformance();
var timestampSource = platformPerformance === undefined
    ? dateTimestampSource
    : {
        nowSeconds: function () { return (platformPerformance.timeOrigin + platformPerformance.now()) / 1000; },
    };
/**
 * Returns a timestamp in seconds since the UNIX epoch using the Date API.
 */
var dateTimestampInSeconds = dateTimestampSource.nowSeconds.bind(dateTimestampSource);
/**
 * Returns a timestamp in seconds since the UNIX epoch using either the Performance or Date APIs, depending on the
 * availability of the Performance API.
 *
 * See `usingPerformanceAPI` to test whether the Performance API is used.
 *
 * BUG: Note that because of how browsers implement the Performance API, the clock might stop when the computer is
 * asleep. This creates a skew between `dateTimestampInSeconds` and `timestampInSeconds`. The
 * skew can grow to arbitrary amounts like days, weeks or months.
 * See https://github.com/getsentry/sentry-javascript/issues/2590.
 */
var timestampInSeconds = timestampSource.nowSeconds.bind(timestampSource);
// Re-exported with an old name for backwards-compatibility.
var timestampWithMs = timestampInSeconds;
/**
 * A boolean that is true when timestampInSeconds uses the Performance API to produce monotonic timestamps.
 */
var usingPerformanceAPI = platformPerformance !== undefined;
/**
 * Internal helper to store what is the source of browserPerformanceTimeOrigin below. For debugging only.
 */
var _browserPerformanceTimeOriginMode;
/**
 * The number of milliseconds since the UNIX epoch. This value is only usable in a browser, and only when the
 * performance API is available.
 */
var browserPerformanceTimeOrigin = (function () {
    // Unfortunately browsers may report an inaccurate time origin data, through either performance.timeOrigin or
    // performance.timing.navigationStart, which results in poor results in performance data. We only treat time origin
    // data as reliable if they are within a reasonable threshold of the current time.
    var performance = Object(_misc__WEBPACK_IMPORTED_MODULE_0__[/* getGlobalObject */ "e"])().performance;
    if (!performance || !performance.now) {
        _browserPerformanceTimeOriginMode = 'none';
        return undefined;
    }
    var threshold = 3600 * 1000;
    var performanceNow = performance.now();
    var dateNow = Date.now();
    // if timeOrigin isn't available set delta to threshold so it isn't used
    var timeOriginDelta = performance.timeOrigin
        ? Math.abs(performance.timeOrigin + performanceNow - dateNow)
        : threshold;
    var timeOriginIsReliable = timeOriginDelta < threshold;
    // While performance.timing.navigationStart is deprecated in favor of performance.timeOrigin, performance.timeOrigin
    // is not as widely supported. Namely, performance.timeOrigin is undefined in Safari as of writing.
    // Also as of writing, performance.timing is not available in Web Workers in mainstream browsers, so it is not always
    // a valid fallback. In the absence of an initial time provided by the browser, fallback to the current time from the
    // Date API.
    // eslint-disable-next-line deprecation/deprecation
    var navigationStart = performance.timing && performance.timing.navigationStart;
    var hasNavigationStart = typeof navigationStart === 'number';
    // if navigationStart isn't available set delta to threshold so it isn't used
    var navigationStartDelta = hasNavigationStart ? Math.abs(navigationStart + performanceNow - dateNow) : threshold;
    var navigationStartIsReliable = navigationStartDelta < threshold;
    if (timeOriginIsReliable || navigationStartIsReliable) {
        // Use the more reliable time origin
        if (timeOriginDelta <= navigationStartDelta) {
            _browserPerformanceTimeOriginMode = 'timeOrigin';
            return performance.timeOrigin;
        }
        else {
            _browserPerformanceTimeOriginMode = 'navigationStart';
            return navigationStart;
        }
    }
    // Either both timeOrigin and navigationStart are skewed or neither is available, fallback to Date.
    _browserPerformanceTimeOriginMode = 'dateNow';
    return dateNow;
})();
//# sourceMappingURL=time.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(469)(module)))

/***/ }),

/***/ 536:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionStatus; });
/* unused harmony export RequestSessionStatus */
/**
 * Session Status
 */
var SessionStatus;
(function (SessionStatus) {
    /** JSDoc */
    SessionStatus["Ok"] = "ok";
    /** JSDoc */
    SessionStatus["Exited"] = "exited";
    /** JSDoc */
    SessionStatus["Crashed"] = "crashed";
    /** JSDoc */
    SessionStatus["Abnormal"] = "abnormal";
})(SessionStatus || (SessionStatus = {}));
var RequestSessionStatus;
(function (RequestSessionStatus) {
    /** JSDoc */
    RequestSessionStatus["Ok"] = "ok";
    /** JSDoc */
    RequestSessionStatus["Errored"] = "errored";
    /** JSDoc */
    RequestSessionStatus["Crashed"] = "crashed";
})(RequestSessionStatus || (RequestSessionStatus = {}));
//# sourceMappingURL=session.js.map

/***/ }),

/***/ 537:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PromiseBuffer; });
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(474);
/* harmony import */ var _syncpromise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(526);


/** A simple queue that holds promises. */
var PromiseBuffer = /** @class */ (function () {
    function PromiseBuffer(_limit) {
        this._limit = _limit;
        /** Internal set of queued Promises */
        this._buffer = [];
    }
    /**
     * Says if the buffer is ready to take more requests
     */
    PromiseBuffer.prototype.isReady = function () {
        return this._limit === undefined || this.length() < this._limit;
    };
    /**
     * Add a promise to the queue.
     *
     * @param taskProducer A function producing any PromiseLike<T>; In previous versions this used to be `task: PromiseLike<T>`,
     *        however, Promises were instantly created on the call-site, making them fall through the buffer limit.
     * @returns The original promise.
     */
    PromiseBuffer.prototype.add = function (taskProducer) {
        var _this = this;
        if (!this.isReady()) {
            return _syncpromise__WEBPACK_IMPORTED_MODULE_1__[/* SyncPromise */ "a"].reject(new _error__WEBPACK_IMPORTED_MODULE_0__[/* SentryError */ "a"]('Not adding Promise due to buffer limit reached.'));
        }
        var task = taskProducer();
        if (this._buffer.indexOf(task) === -1) {
            this._buffer.push(task);
        }
        void task
            .then(function () { return _this.remove(task); })
            .then(null, function () {
            return _this.remove(task).then(null, function () {
                // We have to add this catch here otherwise we have an unhandledPromiseRejection
                // because it's a new Promise chain.
            });
        });
        return task;
    };
    /**
     * Remove a promise to the queue.
     *
     * @param task Can be any PromiseLike<T>
     * @returns Removed promise.
     */
    PromiseBuffer.prototype.remove = function (task) {
        var removedTask = this._buffer.splice(this._buffer.indexOf(task), 1)[0];
        return removedTask;
    };
    /**
     * This function returns the number of unresolved promises in the queue.
     */
    PromiseBuffer.prototype.length = function () {
        return this._buffer.length;
    };
    /**
     * This will drain the whole queue, returns true if queue is empty or drained.
     * If timeout is provided and the queue takes longer to drain, the promise still resolves but with false.
     *
     * @param timeout Number in ms to wait until it resolves with false.
     */
    PromiseBuffer.prototype.drain = function (timeout) {
        var _this = this;
        return new _syncpromise__WEBPACK_IMPORTED_MODULE_1__[/* SyncPromise */ "a"](function (resolve) {
            var capturedSetTimeout = setTimeout(function () {
                if (timeout && timeout > 0) {
                    resolve(false);
                }
            }, timeout);
            void _syncpromise__WEBPACK_IMPORTED_MODULE_1__[/* SyncPromise */ "a"].all(_this._buffer)
                .then(function () {
                clearTimeout(capturedSetTimeout);
                resolve(true);
            })
                .then(null, function () {
                resolve(true);
            });
        });
    };
    return PromiseBuffer;
}());

//# sourceMappingURL=promisebuffer.js.map

/***/ }),

/***/ 538:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dsn; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(457);
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474);


/** Regular expression used to parse a Dsn. */
var DSN_REGEX = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w.-]+)(?::(\d+))?\/(.+)/;
/** Error message */
var ERROR_MESSAGE = 'Invalid Dsn';
/** The Sentry Dsn, identifying a Sentry instance and project. */
var Dsn = /** @class */ (function () {
    /** Creates a new Dsn component */
    function Dsn(from) {
        if (typeof from === 'string') {
            this._fromString(from);
        }
        else {
            this._fromComponents(from);
        }
        this._validate();
    }
    /**
     * Renders the string representation of this Dsn.
     *
     * By default, this will render the public representation without the password
     * component. To get the deprecated private representation, set `withPassword`
     * to true.
     *
     * @param withPassword When set to true, the password will be included.
     */
    Dsn.prototype.toString = function (withPassword) {
        if (withPassword === void 0) { withPassword = false; }
        var _a = this, host = _a.host, path = _a.path, pass = _a.pass, port = _a.port, projectId = _a.projectId, protocol = _a.protocol, publicKey = _a.publicKey;
        return (protocol + "://" + publicKey + (withPassword && pass ? ":" + pass : '') +
            ("@" + host + (port ? ":" + port : '') + "/" + (path ? path + "/" : path) + projectId));
    };
    /** Parses a string into this Dsn. */
    Dsn.prototype._fromString = function (str) {
        var match = DSN_REGEX.exec(str);
        if (!match) {
            throw new _error__WEBPACK_IMPORTED_MODULE_1__[/* SentryError */ "a"](ERROR_MESSAGE);
        }
        var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __read */ "e"])(match.slice(1), 6), protocol = _a[0], publicKey = _a[1], _b = _a[2], pass = _b === void 0 ? '' : _b, host = _a[3], _c = _a[4], port = _c === void 0 ? '' : _c, lastPath = _a[5];
        var path = '';
        var projectId = lastPath;
        var split = projectId.split('/');
        if (split.length > 1) {
            path = split.slice(0, -1).join('/');
            projectId = split.pop();
        }
        if (projectId) {
            var projectMatch = projectId.match(/^\d+/);
            if (projectMatch) {
                projectId = projectMatch[0];
            }
        }
        this._fromComponents({ host: host, pass: pass, path: path, projectId: projectId, port: port, protocol: protocol, publicKey: publicKey });
    };
    /** Maps Dsn components into this instance. */
    Dsn.prototype._fromComponents = function (components) {
        // TODO this is for backwards compatibility, and can be removed in a future version
        if ('user' in components && !('publicKey' in components)) {
            components.publicKey = components.user;
        }
        this.user = components.publicKey || '';
        this.protocol = components.protocol;
        this.publicKey = components.publicKey || '';
        this.pass = components.pass || '';
        this.host = components.host;
        this.port = components.port || '';
        this.path = components.path || '';
        this.projectId = components.projectId;
    };
    /** Validates this Dsn and throws on error. */
    Dsn.prototype._validate = function () {
        var _this = this;
        ['protocol', 'publicKey', 'host', 'projectId'].forEach(function (component) {
            if (!_this[component]) {
                throw new _error__WEBPACK_IMPORTED_MODULE_1__[/* SentryError */ "a"](ERROR_MESSAGE + ": " + component + " missing");
            }
        });
        if (!this.projectId.match(/^\d+$/)) {
            throw new _error__WEBPACK_IMPORTED_MODULE_1__[/* SentryError */ "a"](ERROR_MESSAGE + ": Invalid projectId " + this.projectId);
        }
        if (this.protocol !== 'http' && this.protocol !== 'https') {
            throw new _error__WEBPACK_IMPORTED_MODULE_1__[/* SentryError */ "a"](ERROR_MESSAGE + ": Invalid protocol " + this.protocol);
        }
        if (this.port && isNaN(parseInt(this.port, 10))) {
            throw new _error__WEBPACK_IMPORTED_MODULE_1__[/* SentryError */ "a"](ERROR_MESSAGE + ": Invalid port " + this.port);
        }
    };
    return Dsn;
}());

//# sourceMappingURL=dsn.js.map

/***/ }),

/***/ 539:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addInstrumentationHandler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(457);
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(461);
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(472);
/* harmony import */ var _misc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(462);
/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(527);
/* harmony import */ var _stacktrace__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(473);
/* harmony import */ var _supports__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(530);







var global = Object(_misc__WEBPACK_IMPORTED_MODULE_3__[/* getGlobalObject */ "e"])();
/**
 * Instrument native APIs to call handlers that can be used to create breadcrumbs, APM spans etc.
 *  - Console API
 *  - Fetch API
 *  - XHR API
 *  - History API
 *  - DOM API (click/typing)
 *  - Error API
 *  - UnhandledRejection API
 */
var handlers = {};
var instrumented = {};
/** Instruments given API */
function instrument(type) {
    if (instrumented[type]) {
        return;
    }
    instrumented[type] = true;
    switch (type) {
        case 'console':
            instrumentConsole();
            break;
        case 'dom':
            instrumentDOM();
            break;
        case 'xhr':
            instrumentXHR();
            break;
        case 'fetch':
            instrumentFetch();
            break;
        case 'history':
            instrumentHistory();
            break;
        case 'error':
            instrumentError();
            break;
        case 'unhandledrejection':
            instrumentUnhandledRejection();
            break;
        default:
            _logger__WEBPACK_IMPORTED_MODULE_2__[/* logger */ "a"].warn('unknown instrumentation type:', type);
    }
}
/**
 * Add handler that will be called when given type of instrumentation triggers.
 * Use at your own risk, this might break without changelog notice, only used internally.
 * @hidden
 */
function addInstrumentationHandler(handler) {
    if (!handler || typeof handler.type !== 'string' || typeof handler.callback !== 'function') {
        return;
    }
    handlers[handler.type] = handlers[handler.type] || [];
    handlers[handler.type].push(handler.callback);
    instrument(handler.type);
}
/** JSDoc */
function triggerHandlers(type, data) {
    var e_1, _a;
    if (!type || !handlers[type]) {
        return;
    }
    try {
        for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __values */ "h"])(handlers[type] || []), _c = _b.next(); !_c.done; _c = _b.next()) {
            var handler = _c.value;
            try {
                handler(data);
            }
            catch (e) {
                _logger__WEBPACK_IMPORTED_MODULE_2__[/* logger */ "a"].error("Error while triggering instrumentation handler.\nType: " + type + "\nName: " + Object(_stacktrace__WEBPACK_IMPORTED_MODULE_5__[/* getFunctionName */ "a"])(handler) + "\nError: " + e);
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
}
/** JSDoc */
function instrumentConsole() {
    if (!('console' in global)) {
        return;
    }
    ['debug', 'info', 'warn', 'error', 'log', 'assert'].forEach(function (level) {
        if (!(level in global.console)) {
            return;
        }
        Object(_object__WEBPACK_IMPORTED_MODULE_4__[/* fill */ "c"])(global.console, level, function (originalConsoleLevel) {
            return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                triggerHandlers('console', { args: args, level: level });
                // this fails for some browsers. :(
                if (originalConsoleLevel) {
                    Function.prototype.apply.call(originalConsoleLevel, global.console, args);
                }
            };
        });
    });
}
/** JSDoc */
function instrumentFetch() {
    if (!Object(_supports__WEBPACK_IMPORTED_MODULE_6__[/* supportsNativeFetch */ "d"])()) {
        return;
    }
    Object(_object__WEBPACK_IMPORTED_MODULE_4__[/* fill */ "c"])(global, 'fetch', function (originalFetch) {
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var handlerData = {
                args: args,
                fetchData: {
                    method: getFetchMethod(args),
                    url: getFetchUrl(args),
                },
                startTimestamp: Date.now(),
            };
            triggerHandlers('fetch', Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({}, handlerData));
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            return originalFetch.apply(global, args).then(function (response) {
                triggerHandlers('fetch', Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({}, handlerData), { endTimestamp: Date.now(), response: response }));
                return response;
            }, function (error) {
                triggerHandlers('fetch', Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({}, handlerData), { endTimestamp: Date.now(), error: error }));
                // NOTE: If you are a Sentry user, and you are seeing this stack frame,
                //       it means the sentry.javascript SDK caught an error invoking your application code.
                //       This is expected behavior and NOT indicative of a bug with sentry.javascript.
                throw error;
            });
        };
    });
}
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/** Extract `method` from fetch call arguments */
function getFetchMethod(fetchArgs) {
    if (fetchArgs === void 0) { fetchArgs = []; }
    if ('Request' in global && Object(_is__WEBPACK_IMPORTED_MODULE_1__[/* isInstanceOf */ "g"])(fetchArgs[0], Request) && fetchArgs[0].method) {
        return String(fetchArgs[0].method).toUpperCase();
    }
    if (fetchArgs[1] && fetchArgs[1].method) {
        return String(fetchArgs[1].method).toUpperCase();
    }
    return 'GET';
}
/** Extract `url` from fetch call arguments */
function getFetchUrl(fetchArgs) {
    if (fetchArgs === void 0) { fetchArgs = []; }
    if (typeof fetchArgs[0] === 'string') {
        return fetchArgs[0];
    }
    if ('Request' in global && Object(_is__WEBPACK_IMPORTED_MODULE_1__[/* isInstanceOf */ "g"])(fetchArgs[0], Request)) {
        return fetchArgs[0].url;
    }
    return String(fetchArgs[0]);
}
/* eslint-enable @typescript-eslint/no-unsafe-member-access */
/** JSDoc */
function instrumentXHR() {
    if (!('XMLHttpRequest' in global)) {
        return;
    }
    // Poor man's implementation of ES6 `Map`, tracking and keeping in sync key and value separately.
    var requestKeys = [];
    var requestValues = [];
    var xhrproto = XMLHttpRequest.prototype;
    Object(_object__WEBPACK_IMPORTED_MODULE_4__[/* fill */ "c"])(xhrproto, 'open', function (originalOpen) {
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            // eslint-disable-next-line @typescript-eslint/no-this-alias
            var xhr = this;
            var url = args[1];
            xhr.__sentry_xhr__ = {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                method: Object(_is__WEBPACK_IMPORTED_MODULE_1__[/* isString */ "k"])(args[0]) ? args[0].toUpperCase() : args[0],
                url: args[1],
            };
            // if Sentry key appears in URL, don't capture it as a request
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            if (Object(_is__WEBPACK_IMPORTED_MODULE_1__[/* isString */ "k"])(url) && xhr.__sentry_xhr__.method === 'POST' && url.match(/sentry_key/)) {
                xhr.__sentry_own_request__ = true;
            }
            var onreadystatechangeHandler = function () {
                if (xhr.readyState === 4) {
                    try {
                        // touching statusCode in some platforms throws
                        // an exception
                        if (xhr.__sentry_xhr__) {
                            xhr.__sentry_xhr__.status_code = xhr.status;
                        }
                    }
                    catch (e) {
                        /* do nothing */
                    }
                    try {
                        var requestPos = requestKeys.indexOf(xhr);
                        if (requestPos !== -1) {
                            // Make sure to pop both key and value to keep it in sync.
                            requestKeys.splice(requestPos);
                            var args_1 = requestValues.splice(requestPos)[0];
                            if (xhr.__sentry_xhr__ && args_1[0] !== undefined) {
                                xhr.__sentry_xhr__.body = args_1[0];
                            }
                        }
                    }
                    catch (e) {
                        /* do nothing */
                    }
                    triggerHandlers('xhr', {
                        args: args,
                        endTimestamp: Date.now(),
                        startTimestamp: Date.now(),
                        xhr: xhr,
                    });
                }
            };
            if ('onreadystatechange' in xhr && typeof xhr.onreadystatechange === 'function') {
                Object(_object__WEBPACK_IMPORTED_MODULE_4__[/* fill */ "c"])(xhr, 'onreadystatechange', function (original) {
                    return function () {
                        var readyStateArgs = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            readyStateArgs[_i] = arguments[_i];
                        }
                        onreadystatechangeHandler();
                        return original.apply(xhr, readyStateArgs);
                    };
                });
            }
            else {
                xhr.addEventListener('readystatechange', onreadystatechangeHandler);
            }
            return originalOpen.apply(xhr, args);
        };
    });
    Object(_object__WEBPACK_IMPORTED_MODULE_4__[/* fill */ "c"])(xhrproto, 'send', function (originalSend) {
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            requestKeys.push(this);
            requestValues.push(args);
            triggerHandlers('xhr', {
                args: args,
                startTimestamp: Date.now(),
                xhr: this,
            });
            return originalSend.apply(this, args);
        };
    });
}
var lastHref;
/** JSDoc */
function instrumentHistory() {
    if (!Object(_supports__WEBPACK_IMPORTED_MODULE_6__[/* supportsHistory */ "c"])()) {
        return;
    }
    var oldOnPopState = global.onpopstate;
    global.onpopstate = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var to = global.location.href;
        // keep track of the current URL state, as we always receive only the updated state
        var from = lastHref;
        lastHref = to;
        triggerHandlers('history', {
            from: from,
            to: to,
        });
        if (oldOnPopState) {
            // Apparently this can throw in Firefox when incorrectly implemented plugin is installed.
            // https://github.com/getsentry/sentry-javascript/issues/3344
            // https://github.com/bugsnag/bugsnag-js/issues/469
            try {
                return oldOnPopState.apply(this, args);
            }
            catch (_oO) {
                // no-empty
            }
        }
    };
    /** @hidden */
    function historyReplacementFunction(originalHistoryFunction) {
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var url = args.length > 2 ? args[2] : undefined;
            if (url) {
                // coerce to string (this is what pushState does)
                var from = lastHref;
                var to = String(url);
                // keep track of the current URL state, as we always receive only the updated state
                lastHref = to;
                triggerHandlers('history', {
                    from: from,
                    to: to,
                });
            }
            return originalHistoryFunction.apply(this, args);
        };
    }
    Object(_object__WEBPACK_IMPORTED_MODULE_4__[/* fill */ "c"])(global.history, 'pushState', historyReplacementFunction);
    Object(_object__WEBPACK_IMPORTED_MODULE_4__[/* fill */ "c"])(global.history, 'replaceState', historyReplacementFunction);
}
var debounceDuration = 1000;
var debounceTimerID;
var lastCapturedEvent;
/**
 * Decide whether the current event should finish the debounce of previously captured one.
 * @param previous previously captured event
 * @param current event to be captured
 */
function shouldShortcircuitPreviousDebounce(previous, current) {
    // If there was no previous event, it should always be swapped for the new one.
    if (!previous) {
        return true;
    }
    // If both events have different type, then user definitely performed two separate actions. e.g. click + keypress.
    if (previous.type !== current.type) {
        return true;
    }
    try {
        // If both events have the same type, it's still possible that actions were performed on different targets.
        // e.g. 2 clicks on different buttons.
        if (previous.target !== current.target) {
            return true;
        }
    }
    catch (e) {
        // just accessing `target` property can throw an exception in some rare circumstances
        // see: https://github.com/getsentry/sentry-javascript/issues/838
    }
    // If both events have the same type _and_ same `target` (an element which triggered an event, _not necessarily_
    // to which an event listener was attached), we treat them as the same action, as we want to capture
    // only one breadcrumb. e.g. multiple clicks on the same button, or typing inside a user input box.
    return false;
}
/**
 * Decide whether an event should be captured.
 * @param event event to be captured
 */
function shouldSkipDOMEvent(event) {
    // We are only interested in filtering `keypress` events for now.
    if (event.type !== 'keypress') {
        return false;
    }
    try {
        var target = event.target;
        if (!target || !target.tagName) {
            return true;
        }
        // Only consider keypress events on actual input elements. This will disregard keypresses targeting body
        // e.g.tabbing through elements, hotkeys, etc.
        if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable) {
            return false;
        }
    }
    catch (e) {
        // just accessing `target` property can throw an exception in some rare circumstances
        // see: https://github.com/getsentry/sentry-javascript/issues/838
    }
    return true;
}
/**
 * Wraps addEventListener to capture UI breadcrumbs
 * @param handler function that will be triggered
 * @param globalListener indicates whether event was captured by the global event listener
 * @returns wrapped breadcrumb events handler
 * @hidden
 */
function makeDOMEventHandler(handler, globalListener) {
    if (globalListener === void 0) { globalListener = false; }
    return function (event) {
        // It's possible this handler might trigger multiple times for the same
        // event (e.g. event propagation through node ancestors).
        // Ignore if we've already captured that event.
        if (!event || lastCapturedEvent === event) {
            return;
        }
        // We always want to skip _some_ events.
        if (shouldSkipDOMEvent(event)) {
            return;
        }
        var name = event.type === 'keypress' ? 'input' : event.type;
        // If there is no debounce timer, it means that we can safely capture the new event and store it for future comparisons.
        if (debounceTimerID === undefined) {
            handler({
                event: event,
                name: name,
                global: globalListener,
            });
            lastCapturedEvent = event;
        }
        // If there is a debounce awaiting, see if the new event is different enough to treat it as a unique one.
        // If that's the case, emit the previous event and store locally the newly-captured DOM event.
        else if (shouldShortcircuitPreviousDebounce(lastCapturedEvent, event)) {
            handler({
                event: event,
                name: name,
                global: globalListener,
            });
            lastCapturedEvent = event;
        }
        // Start a new debounce timer that will prevent us from capturing multiple events that should be grouped together.
        clearTimeout(debounceTimerID);
        debounceTimerID = global.setTimeout(function () {
            debounceTimerID = undefined;
        }, debounceDuration);
    };
}
/** JSDoc */
function instrumentDOM() {
    if (!('document' in global)) {
        return;
    }
    // Make it so that any click or keypress that is unhandled / bubbled up all the way to the document triggers our dom
    // handlers. (Normally we have only one, which captures a breadcrumb for each click or keypress.) Do this before
    // we instrument `addEventListener` so that we don't end up attaching this handler twice.
    var triggerDOMHandler = triggerHandlers.bind(null, 'dom');
    var globalDOMEventHandler = makeDOMEventHandler(triggerDOMHandler, true);
    global.document.addEventListener('click', globalDOMEventHandler, false);
    global.document.addEventListener('keypress', globalDOMEventHandler, false);
    // After hooking into click and keypress events bubbled up to `document`, we also hook into user-handled
    // clicks & keypresses, by adding an event listener of our own to any element to which they add a listener. That
    // way, whenever one of their handlers is triggered, ours will be, too. (This is needed because their handler
    // could potentially prevent the event from bubbling up to our global listeners. This way, our handler are still
    // guaranteed to fire at least once.)
    ['EventTarget', 'Node'].forEach(function (target) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        var proto = global[target] && global[target].prototype;
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, no-prototype-builtins
        if (!proto || !proto.hasOwnProperty || !proto.hasOwnProperty('addEventListener')) {
            return;
        }
        Object(_object__WEBPACK_IMPORTED_MODULE_4__[/* fill */ "c"])(proto, 'addEventListener', function (originalAddEventListener) {
            return function (type, listener, options) {
                if (type === 'click' || type == 'keypress') {
                    try {
                        var el = this;
                        var handlers_1 = (el.__sentry_instrumentation_handlers__ = el.__sentry_instrumentation_handlers__ || {});
                        var handlerForType = (handlers_1[type] = handlers_1[type] || { refCount: 0 });
                        if (!handlerForType.handler) {
                            var handler = makeDOMEventHandler(triggerDOMHandler);
                            handlerForType.handler = handler;
                            originalAddEventListener.call(this, type, handler, options);
                        }
                        handlerForType.refCount += 1;
                    }
                    catch (e) {
                        // Accessing dom properties is always fragile.
                        // Also allows us to skip `addEventListenrs` calls with no proper `this` context.
                    }
                }
                return originalAddEventListener.call(this, type, listener, options);
            };
        });
        Object(_object__WEBPACK_IMPORTED_MODULE_4__[/* fill */ "c"])(proto, 'removeEventListener', function (originalRemoveEventListener) {
            return function (type, listener, options) {
                if (type === 'click' || type == 'keypress') {
                    try {
                        var el = this;
                        var handlers_2 = el.__sentry_instrumentation_handlers__ || {};
                        var handlerForType = handlers_2[type];
                        if (handlerForType) {
                            handlerForType.refCount -= 1;
                            // If there are no longer any custom handlers of the current type on this element, we can remove ours, too.
                            if (handlerForType.refCount <= 0) {
                                originalRemoveEventListener.call(this, type, handlerForType.handler, options);
                                handlerForType.handler = undefined;
                                delete handlers_2[type]; // eslint-disable-line @typescript-eslint/no-dynamic-delete
                            }
                            // If there are no longer any custom handlers of any type on this element, cleanup everything.
                            if (Object.keys(handlers_2).length === 0) {
                                delete el.__sentry_instrumentation_handlers__;
                            }
                        }
                    }
                    catch (e) {
                        // Accessing dom properties is always fragile.
                        // Also allows us to skip `addEventListenrs` calls with no proper `this` context.
                    }
                }
                return originalRemoveEventListener.call(this, type, listener, options);
            };
        });
    });
}
var _oldOnErrorHandler = null;
/** JSDoc */
function instrumentError() {
    _oldOnErrorHandler = global.onerror;
    global.onerror = function (msg, url, line, column, error) {
        triggerHandlers('error', {
            column: column,
            error: error,
            line: line,
            msg: msg,
            url: url,
        });
        if (_oldOnErrorHandler) {
            // eslint-disable-next-line prefer-rest-params
            return _oldOnErrorHandler.apply(this, arguments);
        }
        return false;
    };
}
var _oldOnUnhandledRejectionHandler = null;
/** JSDoc */
function instrumentUnhandledRejection() {
    _oldOnUnhandledRejectionHandler = global.onunhandledrejection;
    global.onunhandledrejection = function (e) {
        triggerHandlers('unhandledrejection', e);
        if (_oldOnUnhandledRejectionHandler) {
            // eslint-disable-next-line prefer-rest-params
            return _oldOnUnhandledRejectionHandler.apply(this, arguments);
        }
        return true;
    };
}
//# sourceMappingURL=instrument.js.map

/***/ }),

/***/ 543:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "Angular", function() { return /* reexport */ angular_Angular; });
__webpack_require__.d(__webpack_exports__, "CaptureConsole", function() { return /* reexport */ captureconsole_CaptureConsole; });
__webpack_require__.d(__webpack_exports__, "Debug", function() { return /* reexport */ debug_Debug; });
__webpack_require__.d(__webpack_exports__, "Dedupe", function() { return /* reexport */ Dedupe; });
__webpack_require__.d(__webpack_exports__, "Ember", function() { return /* reexport */ ember_Ember; });
__webpack_require__.d(__webpack_exports__, "ExtraErrorData", function() { return /* reexport */ extraerrordata_ExtraErrorData; });
__webpack_require__.d(__webpack_exports__, "Offline", function() { return /* reexport */ offline_Offline; });
__webpack_require__.d(__webpack_exports__, "ReportingObserver", function() { return /* reexport */ reportingobserver_ReportingObserver; });
__webpack_require__.d(__webpack_exports__, "RewriteFrames", function() { return /* reexport */ rewriteframes_RewriteFrames; });
__webpack_require__.d(__webpack_exports__, "SessionTiming", function() { return /* reexport */ sessiontiming_SessionTiming; });
__webpack_require__.d(__webpack_exports__, "Transaction", function() { return /* reexport */ Transaction; });
__webpack_require__.d(__webpack_exports__, "Vue", function() { return /* reexport */ vue_Vue; });

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(457);

// EXTERNAL MODULE: ./node_modules/@sentry/utils/esm/logger.js
var logger = __webpack_require__(472);

// EXTERNAL MODULE: ./node_modules/@sentry/utils/esm/misc.js
var misc = __webpack_require__(462);

// CONCATENATED MODULE: ./node_modules/@sentry/integrations/esm/angular.js


// See https://github.com/angular/angular.js/blob/v1.4.7/src/minErr.js
var angularPattern = /^\[((?:[$a-zA-Z0-9]+:)?(?:[$a-zA-Z0-9]+))\] (.*?)\n?(\S+)$/;
/**
 * AngularJS integration
 *
 * Provides an $exceptionHandler for AngularJS
 */
var angular_Angular = /** @class */ (function () {
    /**
     * @inheritDoc
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function Angular(options) {
        if (options === void 0) { options = {}; }
        /**
         * @inheritDoc
         */
        this.name = Angular.id;
        logger["a" /* logger */].log('You are still using the Angular integration, consider moving to @sentry/angular');
        // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-member-access
        this._angular = options.angular || Object(misc["e" /* getGlobalObject */])().angular;
        if (!this._angular) {
            logger["a" /* logger */].error('AngularIntegration is missing an Angular instance');
            return;
        }
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        this._module = this._angular.module(Angular.moduleName, []);
    }
    /**
     * @inheritDoc
     */
    Angular.prototype.setupOnce = function (_, getCurrentHub) {
        var _this = this;
        if (!this._module) {
            return;
        }
        this._getCurrentHub = getCurrentHub;
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        this._module.config([
            '$provide',
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            function ($provide) {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                $provide.decorator('$exceptionHandler', ['$delegate', _this._$exceptionHandlerDecorator.bind(_this)]);
            },
        ]);
    };
    /**
     * Angular's exceptionHandler for Sentry integration
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Angular.prototype._$exceptionHandlerDecorator = function ($delegate) {
        var _this = this;
        return function (exception, cause) {
            var hub = _this._getCurrentHub && _this._getCurrentHub();
            if (hub && hub.getIntegration(Angular)) {
                hub.withScope(function (scope) {
                    if (cause) {
                        scope.setExtra('cause', cause);
                    }
                    scope.addEventProcessor(function (event) {
                        var ex = event.exception && event.exception.values && event.exception.values[0];
                        if (ex) {
                            var matches = angularPattern.exec(ex.value || '');
                            if (matches) {
                                // This type now becomes something like: $rootScope:inprog
                                ex.type = matches[1];
                                ex.value = matches[2];
                                event.message = ex.type + ": " + ex.value;
                                // auto set a new tag specifically for the angular error url
                                event.extra = Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, event.extra), { angularDocs: matches[3].substr(0, 250) });
                            }
                        }
                        return event;
                    });
                    hub.captureException(exception);
                });
            }
            $delegate(exception, cause);
        };
    };
    /**
     * @inheritDoc
     */
    Angular.id = 'AngularJS';
    /**
     * moduleName used in Angular's DI resolution algorithm
     */
    Angular.moduleName = 'ngSentry';
    return Angular;
}());

//# sourceMappingURL=angular.js.map
// EXTERNAL MODULE: ./node_modules/@sentry/types/esm/severity.js
var severity = __webpack_require__(533);

// EXTERNAL MODULE: ./node_modules/@sentry/utils/esm/object.js
var object = __webpack_require__(527);

// EXTERNAL MODULE: ./node_modules/@sentry/utils/esm/string.js
var string = __webpack_require__(471);

// CONCATENATED MODULE: ./node_modules/@sentry/integrations/esm/captureconsole.js


var global = Object(misc["e" /* getGlobalObject */])();
/** Send Console API calls as Sentry Events */
var captureconsole_CaptureConsole = /** @class */ (function () {
    /**
     * @inheritDoc
     */
    function CaptureConsole(options) {
        if (options === void 0) { options = {}; }
        /**
         * @inheritDoc
         */
        this.name = CaptureConsole.id;
        /**
         * @inheritDoc
         */
        this._levels = ['log', 'info', 'warn', 'error', 'debug', 'assert'];
        if (options.levels) {
            this._levels = options.levels;
        }
    }
    /**
     * @inheritDoc
     */
    CaptureConsole.prototype.setupOnce = function (_, getCurrentHub) {
        if (!('console' in global)) {
            return;
        }
        this._levels.forEach(function (level) {
            if (!(level in global.console)) {
                return;
            }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            Object(object["c" /* fill */])(global.console, level, function (originalConsoleLevel) { return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var hub = getCurrentHub();
                if (hub.getIntegration(CaptureConsole)) {
                    hub.withScope(function (scope) {
                        scope.setLevel(severity["a" /* Severity */].fromString(level));
                        scope.setExtra('arguments', args);
                        scope.addEventProcessor(function (event) {
                            event.logger = 'console';
                            return event;
                        });
                        var message = Object(string["b" /* safeJoin */])(args, ' ');
                        if (level === 'assert') {
                            if (args[0] === false) {
                                message = "Assertion failed: " + (Object(string["b" /* safeJoin */])(args.slice(1), ' ') || 'console.assert');
                                scope.setExtra('arguments', args.slice(1));
                                hub.captureMessage(message);
                            }
                        }
                        else {
                            hub.captureMessage(message);
                        }
                    });
                }
                // this fails for some browsers. :(
                if (originalConsoleLevel) {
                    Function.prototype.apply.call(originalConsoleLevel, global.console, args);
                }
            }; });
        });
    };
    /**
     * @inheritDoc
     */
    CaptureConsole.id = 'CaptureConsole';
    return CaptureConsole;
}());

//# sourceMappingURL=captureconsole.js.map
// CONCATENATED MODULE: ./node_modules/@sentry/integrations/esm/debug.js


/** JSDoc */
var debug_Debug = /** @class */ (function () {
    /**
     * @inheritDoc
     */
    function Debug(options) {
        /**
         * @inheritDoc
         */
        this.name = Debug.id;
        this._options = Object(tslib_es6["a" /* __assign */])({ debugger: false, stringify: false }, options);
    }
    /**
     * @inheritDoc
     */
    Debug.prototype.setupOnce = function (addGlobalEventProcessor, getCurrentHub) {
        addGlobalEventProcessor(function (event, hint) {
            var self = getCurrentHub().getIntegration(Debug);
            if (self) {
                if (self._options.debugger) {
                    // eslint-disable-next-line no-debugger
                    debugger;
                }
                /* eslint-disable no-console */
                Object(misc["c" /* consoleSandbox */])(function () {
                    if (self._options.stringify) {
                        console.log(JSON.stringify(event, null, 2));
                        if (hint) {
                            console.log(JSON.stringify(hint, null, 2));
                        }
                    }
                    else {
                        console.log(event);
                        if (hint) {
                            console.log(hint);
                        }
                    }
                });
                /* eslint-enable no-console */
            }
            return event;
        });
    };
    /**
     * @inheritDoc
     */
    Debug.id = 'Debug';
    return Debug;
}());

//# sourceMappingURL=debug.js.map
// CONCATENATED MODULE: ./node_modules/@sentry/integrations/esm/dedupe.js
/** Deduplication filter */
var Dedupe = /** @class */ (function () {
    function Dedupe() {
        /**
         * @inheritDoc
         */
        this.name = Dedupe.id;
    }
    /**
     * @inheritDoc
     */
    Dedupe.prototype.setupOnce = function (addGlobalEventProcessor, getCurrentHub) {
        addGlobalEventProcessor(function (currentEvent) {
            var self = getCurrentHub().getIntegration(Dedupe);
            if (self) {
                // Juuust in case something goes wrong
                try {
                    if (self._shouldDropEvent(currentEvent, self._previousEvent)) {
                        return null;
                    }
                }
                catch (_oO) {
                    return (self._previousEvent = currentEvent);
                }
                return (self._previousEvent = currentEvent);
            }
            return currentEvent;
        });
    };
    /** JSDoc */
    Dedupe.prototype._shouldDropEvent = function (currentEvent, previousEvent) {
        if (!previousEvent) {
            return false;
        }
        if (this._isSameMessageEvent(currentEvent, previousEvent)) {
            return true;
        }
        if (this._isSameExceptionEvent(currentEvent, previousEvent)) {
            return true;
        }
        return false;
    };
    /** JSDoc */
    Dedupe.prototype._isSameMessageEvent = function (currentEvent, previousEvent) {
        var currentMessage = currentEvent.message;
        var previousMessage = previousEvent.message;
        // If neither event has a message property, they were both exceptions, so bail out
        if (!currentMessage && !previousMessage) {
            return false;
        }
        // If only one event has a stacktrace, but not the other one, they are not the same
        if ((currentMessage && !previousMessage) || (!currentMessage && previousMessage)) {
            return false;
        }
        if (currentMessage !== previousMessage) {
            return false;
        }
        if (!this._isSameFingerprint(currentEvent, previousEvent)) {
            return false;
        }
        if (!this._isSameStacktrace(currentEvent, previousEvent)) {
            return false;
        }
        return true;
    };
    /** JSDoc */
    Dedupe.prototype._getFramesFromEvent = function (event) {
        var exception = event.exception;
        if (exception) {
            try {
                // @ts-ignore Object could be undefined
                return exception.values[0].stacktrace.frames;
            }
            catch (_oO) {
                return undefined;
            }
        }
        else if (event.stacktrace) {
            return event.stacktrace.frames;
        }
        return undefined;
    };
    /** JSDoc */
    Dedupe.prototype._isSameStacktrace = function (currentEvent, previousEvent) {
        var currentFrames = this._getFramesFromEvent(currentEvent);
        var previousFrames = this._getFramesFromEvent(previousEvent);
        // If neither event has a stacktrace, they are assumed to be the same
        if (!currentFrames && !previousFrames) {
            return true;
        }
        // If only one event has a stacktrace, but not the other one, they are not the same
        if ((currentFrames && !previousFrames) || (!currentFrames && previousFrames)) {
            return false;
        }
        currentFrames = currentFrames;
        previousFrames = previousFrames;
        // If number of frames differ, they are not the same
        if (previousFrames.length !== currentFrames.length) {
            return false;
        }
        // Otherwise, compare the two
        for (var i = 0; i < previousFrames.length; i++) {
            var frameA = previousFrames[i];
            var frameB = currentFrames[i];
            if (frameA.filename !== frameB.filename ||
                frameA.lineno !== frameB.lineno ||
                frameA.colno !== frameB.colno ||
                frameA.function !== frameB.function) {
                return false;
            }
        }
        return true;
    };
    /** JSDoc */
    Dedupe.prototype._getExceptionFromEvent = function (event) {
        return event.exception && event.exception.values && event.exception.values[0];
    };
    /** JSDoc */
    Dedupe.prototype._isSameExceptionEvent = function (currentEvent, previousEvent) {
        var previousException = this._getExceptionFromEvent(previousEvent);
        var currentException = this._getExceptionFromEvent(currentEvent);
        if (!previousException || !currentException) {
            return false;
        }
        if (previousException.type !== currentException.type || previousException.value !== currentException.value) {
            return false;
        }
        if (!this._isSameFingerprint(currentEvent, previousEvent)) {
            return false;
        }
        if (!this._isSameStacktrace(currentEvent, previousEvent)) {
            return false;
        }
        return true;
    };
    /** JSDoc */
    Dedupe.prototype._isSameFingerprint = function (currentEvent, previousEvent) {
        var currentFingerprint = currentEvent.fingerprint;
        var previousFingerprint = previousEvent.fingerprint;
        // If neither event has a fingerprint, they are assumed to be the same
        if (!currentFingerprint && !previousFingerprint) {
            return true;
        }
        // If only one event has a fingerprint, but not the other one, they are not the same
        if ((currentFingerprint && !previousFingerprint) || (!currentFingerprint && previousFingerprint)) {
            return false;
        }
        currentFingerprint = currentFingerprint;
        previousFingerprint = previousFingerprint;
        // Otherwise, compare the two
        try {
            return !!(currentFingerprint.join('') === previousFingerprint.join(''));
        }
        catch (_oO) {
            return false;
        }
    };
    /**
     * @inheritDoc
     */
    Dedupe.id = 'Dedupe';
    return Dedupe;
}());

//# sourceMappingURL=dedupe.js.map
// EXTERNAL MODULE: ./node_modules/@sentry/utils/esm/is.js
var is = __webpack_require__(461);

// CONCATENATED MODULE: ./node_modules/@sentry/integrations/esm/ember.js

/** JSDoc */
var ember_Ember = /** @class */ (function () {
    /**
     * @inheritDoc
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function Ember(options) {
        if (options === void 0) { options = {}; }
        /**
         * @inheritDoc
         */
        this.name = Ember.id;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-member-access
        this._Ember = options.Ember || Object(misc["e" /* getGlobalObject */])().Ember;
    }
    /**
     * @inheritDoc
     */
    Ember.prototype.setupOnce = function (_, getCurrentHub) {
        var _this = this;
        if (!this._Ember) {
            logger["a" /* logger */].error('EmberIntegration is missing an Ember instance');
            return;
        }
        /* eslint-disable @typescript-eslint/no-unsafe-member-access */
        var oldOnError = this._Ember.onerror;
        this._Ember.onerror = function (error) {
            if (getCurrentHub().getIntegration(Ember)) {
                getCurrentHub().captureException(error, { originalException: error });
            }
            if (typeof oldOnError === 'function') {
                oldOnError.call(_this._Ember, error);
            }
            else if (_this._Ember.testing) {
                throw error;
            }
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this._Ember.RSVP.on('error', function (reason) {
            if (getCurrentHub().getIntegration(Ember)) {
                getCurrentHub().withScope(function (scope) {
                    if (Object(is["g" /* isInstanceOf */])(reason, Error)) {
                        scope.setExtra('context', 'Unhandled Promise error detected');
                        getCurrentHub().captureException(reason, { originalException: reason });
                    }
                    else {
                        scope.setExtra('reason', reason);
                        getCurrentHub().captureMessage('Unhandled Promise error detected');
                    }
                });
            }
        });
    };
    /**
     * @inheritDoc
     */
    Ember.id = 'Ember';
    return Ember;
}());

//# sourceMappingURL=ember.js.map
// CONCATENATED MODULE: ./node_modules/@sentry/integrations/esm/extraerrordata.js


/** Patch toString calls to return proper name for wrapped functions */
var extraerrordata_ExtraErrorData = /** @class */ (function () {
    /**
     * @inheritDoc
     */
    function ExtraErrorData(_options) {
        if (_options === void 0) { _options = { depth: 3 }; }
        this._options = _options;
        /**
         * @inheritDoc
         */
        this.name = ExtraErrorData.id;
    }
    /**
     * @inheritDoc
     */
    ExtraErrorData.prototype.setupOnce = function (addGlobalEventProcessor, getCurrentHub) {
        addGlobalEventProcessor(function (event, hint) {
            var self = getCurrentHub().getIntegration(ExtraErrorData);
            if (!self) {
                return event;
            }
            return self.enhanceEventWithErrorData(event, hint);
        });
    };
    /**
     * Attaches extracted information from the Error object to extra field in the Event
     */
    ExtraErrorData.prototype.enhanceEventWithErrorData = function (event, hint) {
        var _a;
        if (!hint || !hint.originalException || !Object(is["d" /* isError */])(hint.originalException)) {
            return event;
        }
        var name = hint.originalException.name || hint.originalException.constructor.name;
        var errorData = this._extractErrorData(hint.originalException);
        if (errorData) {
            var contexts = Object(tslib_es6["a" /* __assign */])({}, event.contexts);
            var normalizedErrorData = Object(object["d" /* normalize */])(errorData, this._options.depth);
            if (Object(is["h" /* isPlainObject */])(normalizedErrorData)) {
                contexts = Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, event.contexts), (_a = {}, _a[name] = Object(tslib_es6["a" /* __assign */])({}, normalizedErrorData), _a));
            }
            return Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, event), { contexts: contexts });
        }
        return event;
    };
    /**
     * Extract extra information from the Error object
     */
    ExtraErrorData.prototype._extractErrorData = function (error) {
        var e_1, _a;
        var result = null;
        // We are trying to enhance already existing event, so no harm done if it won't succeed
        try {
            var nativeKeys_1 = ['name', 'message', 'stack', 'line', 'column', 'fileName', 'lineNumber', 'columnNumber'];
            var errorKeys = Object.getOwnPropertyNames(error).filter(function (key) { return nativeKeys_1.indexOf(key) === -1; });
            if (errorKeys.length) {
                var extraErrorInfo = {};
                try {
                    for (var errorKeys_1 = Object(tslib_es6["h" /* __values */])(errorKeys), errorKeys_1_1 = errorKeys_1.next(); !errorKeys_1_1.done; errorKeys_1_1 = errorKeys_1.next()) {
                        var key = errorKeys_1_1.value;
                        var value = error[key];
                        if (Object(is["d" /* isError */])(value)) {
                            value = value.toString();
                        }
                        extraErrorInfo[key] = value;
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (errorKeys_1_1 && !errorKeys_1_1.done && (_a = errorKeys_1.return)) _a.call(errorKeys_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                result = extraErrorInfo;
            }
        }
        catch (oO) {
            logger["a" /* logger */].error('Unable to extract extra data from the Error object:', oO);
        }
        return result;
    };
    /**
     * @inheritDoc
     */
    ExtraErrorData.id = 'ExtraErrorData';
    return ExtraErrorData;
}());

//# sourceMappingURL=extraerrordata.js.map
// EXTERNAL MODULE: ./node_modules/localforage/dist/localforage.js
var localforage = __webpack_require__(531);
var localforage_default = /*#__PURE__*/__webpack_require__.n(localforage);

// CONCATENATED MODULE: ./node_modules/@sentry/integrations/esm/offline.js



/**
 * cache offline errors and send when connected
 */
var offline_Offline = /** @class */ (function () {
    /**
     * @inheritDoc
     */
    function Offline(options) {
        if (options === void 0) { options = {}; }
        /**
         * @inheritDoc
         */
        this.name = Offline.id;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.global = Object(misc["e" /* getGlobalObject */])();
        this.maxStoredEvents = options.maxStoredEvents || 30; // set a reasonable default
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        this.offlineEventStore = localforage_default.a.createInstance({
            name: 'sentry/offlineEventStore',
        });
    }
    /**
     * @inheritDoc
     */
    Offline.prototype.setupOnce = function (addGlobalEventProcessor, getCurrentHub) {
        var _this = this;
        this.hub = getCurrentHub();
        if ('addEventListener' in this.global) {
            this.global.addEventListener('online', function () {
                void _this._sendEvents().catch(function () {
                    logger["a" /* logger */].warn('could not send cached events');
                });
            });
        }
        addGlobalEventProcessor(function (event) {
            if (_this.hub && _this.hub.getIntegration(Offline)) {
                // cache if we are positively offline
                if ('navigator' in _this.global && 'onLine' in _this.global.navigator && !_this.global.navigator.onLine) {
                    void _this._cacheEvent(event)
                        .then(function (_event) { return _this._enforceMaxEvents(); })
                        .catch(function (_error) {
                        logger["a" /* logger */].warn('could not cache event while offline');
                    });
                    // return null on success or failure, because being offline will still result in an error
                    return null;
                }
            }
            return event;
        });
        // if online now, send any events stored in a previous offline session
        if ('navigator' in this.global && 'onLine' in this.global.navigator && this.global.navigator.onLine) {
            void this._sendEvents().catch(function () {
                logger["a" /* logger */].warn('could not send cached events');
            });
        }
    };
    /**
     * cache an event to send later
     * @param event an event
     */
    Offline.prototype._cacheEvent = function (event) {
        return Object(tslib_es6["b" /* __awaiter */])(this, void 0, void 0, function () {
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                return [2 /*return*/, this.offlineEventStore.setItem(Object(misc["i" /* uuid4 */])(), Object(object["d" /* normalize */])(event))];
            });
        });
    };
    /**
     * purge excess events if necessary
     */
    Offline.prototype._enforceMaxEvents = function () {
        return Object(tslib_es6["b" /* __awaiter */])(this, void 0, void 0, function () {
            var events;
            var _this = this;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                events = [];
                return [2 /*return*/, this.offlineEventStore
                        .iterate(function (event, cacheKey, _index) {
                        // aggregate events
                        events.push({ cacheKey: cacheKey, event: event });
                    })
                        .then(function () {
                        // this promise resolves when the iteration is finished
                        return _this._purgeEvents(
                        // purge all events past maxStoredEvents in reverse chronological order
                        events
                            .sort(function (a, b) { return (b.event.timestamp || 0) - (a.event.timestamp || 0); })
                            .slice(_this.maxStoredEvents < events.length ? _this.maxStoredEvents : events.length)
                            .map(function (event) { return event.cacheKey; }));
                    })
                        .catch(function (_error) {
                        logger["a" /* logger */].warn('could not enforce max events');
                    })];
            });
        });
    };
    /**
     * purge event from cache
     */
    Offline.prototype._purgeEvent = function (cacheKey) {
        return Object(tslib_es6["b" /* __awaiter */])(this, void 0, void 0, function () {
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                return [2 /*return*/, this.offlineEventStore.removeItem(cacheKey)];
            });
        });
    };
    /**
     * purge events from cache
     */
    Offline.prototype._purgeEvents = function (cacheKeys) {
        return Object(tslib_es6["b" /* __awaiter */])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                // trail with .then to ensure the return type as void and not void|void[]
                return [2 /*return*/, Promise.all(cacheKeys.map(function (cacheKey) { return _this._purgeEvent(cacheKey); })).then()];
            });
        });
    };
    /**
     * send all events
     */
    Offline.prototype._sendEvents = function () {
        return Object(tslib_es6["b" /* __awaiter */])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                return [2 /*return*/, this.offlineEventStore.iterate(function (event, cacheKey, _index) {
                        if (_this.hub) {
                            _this.hub.captureEvent(event);
                            void _this._purgeEvent(cacheKey).catch(function (_error) {
                                logger["a" /* logger */].warn('could not purge event from cache');
                            });
                        }
                        else {
                            logger["a" /* logger */].warn('no hub found - could not send cached event');
                        }
                    })];
            });
        });
    };
    /**
     * @inheritDoc
     */
    Offline.id = 'Offline';
    return Offline;
}());

//# sourceMappingURL=offline.js.map
// EXTERNAL MODULE: ./node_modules/@sentry/utils/esm/supports.js
var supports = __webpack_require__(530);

// CONCATENATED MODULE: ./node_modules/@sentry/integrations/esm/reportingobserver.js


/** JSDoc */
var ReportTypes;
(function (ReportTypes) {
    /** JSDoc */
    ReportTypes["Crash"] = "crash";
    /** JSDoc */
    ReportTypes["Deprecation"] = "deprecation";
    /** JSDoc */
    ReportTypes["Intervention"] = "intervention";
})(ReportTypes || (ReportTypes = {}));
/** Reporting API integration - https://w3c.github.io/reporting/ */
var reportingobserver_ReportingObserver = /** @class */ (function () {
    /**
     * @inheritDoc
     */
    function ReportingObserver(_options) {
        if (_options === void 0) { _options = {
            types: [ReportTypes.Crash, ReportTypes.Deprecation, ReportTypes.Intervention],
        }; }
        this._options = _options;
        /**
         * @inheritDoc
         */
        this.name = ReportingObserver.id;
    }
    /**
     * @inheritDoc
     */
    ReportingObserver.prototype.setupOnce = function (_, getCurrentHub) {
        if (!Object(supports["f" /* supportsReportingObserver */])()) {
            return;
        }
        this._getCurrentHub = getCurrentHub;
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        var observer = new (Object(misc["e" /* getGlobalObject */])().ReportingObserver)(this.handler.bind(this), {
            buffered: true,
            types: this._options.types,
        });
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        observer.observe();
    };
    /**
     * @inheritDoc
     */
    ReportingObserver.prototype.handler = function (reports) {
        var e_1, _a;
        var hub = this._getCurrentHub && this._getCurrentHub();
        if (!hub || !hub.getIntegration(ReportingObserver)) {
            return;
        }
        var _loop_1 = function (report) {
            hub.withScope(function (scope) {
                scope.setExtra('url', report.url);
                var label = "ReportingObserver [" + report.type + "]";
                var details = 'No details available';
                if (report.body) {
                    // Object.keys doesn't work on ReportBody, as all properties are inheirted
                    var plainBody = {};
                    // eslint-disable-next-line guard-for-in
                    for (var prop in report.body) {
                        plainBody[prop] = report.body[prop];
                    }
                    scope.setExtra('body', plainBody);
                    if (report.type === ReportTypes.Crash) {
                        var body = report.body;
                        // A fancy way to create a message out of crashId OR reason OR both OR fallback
                        details = [body.crashId || '', body.reason || ''].join(' ').trim() || details;
                    }
                    else {
                        var body = report.body;
                        details = body.message || details;
                    }
                }
                hub.captureMessage(label + ": " + details);
            });
        };
        try {
            for (var reports_1 = Object(tslib_es6["h" /* __values */])(reports), reports_1_1 = reports_1.next(); !reports_1_1.done; reports_1_1 = reports_1.next()) {
                var report = reports_1_1.value;
                _loop_1(report);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (reports_1_1 && !reports_1_1.done && (_a = reports_1.return)) _a.call(reports_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /**
     * @inheritDoc
     */
    ReportingObserver.id = 'ReportingObserver';
    return ReportingObserver;
}());

//# sourceMappingURL=reportingobserver.js.map
// CONCATENATED MODULE: ./node_modules/@sentry/utils/esm/path.js
// Slightly modified (no IE8 support, ES6) and transcribed to TypeScript
// https://raw.githubusercontent.com/calvinmetcalf/rollup-plugin-node-builtins/master/src/es6/path.js
/** JSDoc */
function normalizeArray(parts, allowAboveRoot) {
    // if the path tries to go above the root, `up` ends up > 0
    var up = 0;
    for (var i = parts.length - 1; i >= 0; i--) {
        var last = parts[i];
        if (last === '.') {
            parts.splice(i, 1);
        }
        else if (last === '..') {
            parts.splice(i, 1);
            // eslint-disable-next-line no-plusplus
            up++;
        }
        else if (up) {
            parts.splice(i, 1);
            // eslint-disable-next-line no-plusplus
            up--;
        }
    }
    // if the path is allowed to go above the root, restore leading ..s
    if (allowAboveRoot) {
        // eslint-disable-next-line no-plusplus
        for (; up--; up) {
            parts.unshift('..');
        }
    }
    return parts;
}
// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^/]+?|)(\.[^./]*|))(?:[/]*)$/;
/** JSDoc */
function splitPath(filename) {
    var parts = splitPathRe.exec(filename);
    return parts ? parts.slice(1) : [];
}
// path.resolve([from ...], to)
// posix version
/** JSDoc */
function resolve() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var resolvedPath = '';
    var resolvedAbsolute = false;
    for (var i = args.length - 1; i >= -1 && !resolvedAbsolute; i--) {
        var path = i >= 0 ? args[i] : '/';
        // Skip empty entries
        if (!path) {
            continue;
        }
        resolvedPath = path + "/" + resolvedPath;
        resolvedAbsolute = path.charAt(0) === '/';
    }
    // At this point the path should be resolved to a full absolute path, but
    // handle relative paths to be safe (might happen when process.cwd() fails)
    // Normalize the path
    resolvedPath = normalizeArray(resolvedPath.split('/').filter(function (p) { return !!p; }), !resolvedAbsolute).join('/');
    return (resolvedAbsolute ? '/' : '') + resolvedPath || '.';
}
/** JSDoc */
function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
        if (arr[start] !== '') {
            break;
        }
    }
    var end = arr.length - 1;
    for (; end >= 0; end--) {
        if (arr[end] !== '') {
            break;
        }
    }
    if (start > end) {
        return [];
    }
    return arr.slice(start, end - start + 1);
}
// path.relative(from, to)
// posix version
/** JSDoc */
function relative(from, to) {
    /* eslint-disable no-param-reassign */
    from = resolve(from).substr(1);
    to = resolve(to).substr(1);
    /* eslint-enable no-param-reassign */
    var fromParts = trim(from.split('/'));
    var toParts = trim(to.split('/'));
    var length = Math.min(fromParts.length, toParts.length);
    var samePartsLength = length;
    for (var i = 0; i < length; i++) {
        if (fromParts[i] !== toParts[i]) {
            samePartsLength = i;
            break;
        }
    }
    var outputParts = [];
    for (var i = samePartsLength; i < fromParts.length; i++) {
        outputParts.push('..');
    }
    outputParts = outputParts.concat(toParts.slice(samePartsLength));
    return outputParts.join('/');
}
// path.normalize(path)
// posix version
/** JSDoc */
function normalizePath(path) {
    var isPathAbsolute = isAbsolute(path);
    var trailingSlash = path.substr(-1) === '/';
    // Normalize the path
    var normalizedPath = normalizeArray(path.split('/').filter(function (p) { return !!p; }), !isPathAbsolute).join('/');
    if (!normalizedPath && !isPathAbsolute) {
        normalizedPath = '.';
    }
    if (normalizedPath && trailingSlash) {
        normalizedPath += '/';
    }
    return (isPathAbsolute ? '/' : '') + normalizedPath;
}
// posix version
/** JSDoc */
function isAbsolute(path) {
    return path.charAt(0) === '/';
}
// posix version
/** JSDoc */
function join() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return normalizePath(args.join('/'));
}
/** JSDoc */
function dirname(path) {
    var result = splitPath(path);
    var root = result[0];
    var dir = result[1];
    if (!root && !dir) {
        // No dirname whatsoever
        return '.';
    }
    if (dir) {
        // It has a dirname, strip trailing slash
        dir = dir.substr(0, dir.length - 1);
    }
    return root + dir;
}
/** JSDoc */
function basename(path, ext) {
    var f = splitPath(path)[2];
    if (ext && f.substr(ext.length * -1) === ext) {
        f = f.substr(0, f.length - ext.length);
    }
    return f;
}
//# sourceMappingURL=path.js.map
// CONCATENATED MODULE: ./node_modules/@sentry/integrations/esm/rewriteframes.js


/** Rewrite event frames paths */
var rewriteframes_RewriteFrames = /** @class */ (function () {
    /**
     * @inheritDoc
     */
    function RewriteFrames(options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        /**
         * @inheritDoc
         */
        this.name = RewriteFrames.id;
        /**
         * @inheritDoc
         */
        this._prefix = 'app:///';
        /**
         * @inheritDoc
         */
        this._iteratee = function (frame) {
            if (!frame.filename) {
                return frame;
            }
            // Check if the frame filename begins with `/` or a Windows-style prefix such as `C:\`
            var isWindowsFrame = /^[A-Z]:\\/.test(frame.filename);
            var startsWithSlash = /^\//.test(frame.filename);
            if (isWindowsFrame || startsWithSlash) {
                var filename = isWindowsFrame
                    ? frame.filename
                        .replace(/^[A-Z]:/, '') // remove Windows-style prefix
                        .replace(/\\/g, '/') // replace all `\\` instances with `/`
                    : frame.filename;
                var base = _this._root ? relative(_this._root, filename) : basename(filename);
                frame.filename = "" + _this._prefix + base;
            }
            return frame;
        };
        if (options.root) {
            this._root = options.root;
        }
        if (options.prefix) {
            this._prefix = options.prefix;
        }
        if (options.iteratee) {
            this._iteratee = options.iteratee;
        }
    }
    /**
     * @inheritDoc
     */
    RewriteFrames.prototype.setupOnce = function (addGlobalEventProcessor, getCurrentHub) {
        addGlobalEventProcessor(function (event) {
            var self = getCurrentHub().getIntegration(RewriteFrames);
            if (self) {
                return self.process(event);
            }
            return event;
        });
    };
    /** JSDoc */
    RewriteFrames.prototype.process = function (originalEvent) {
        var processedEvent = originalEvent;
        if (originalEvent.exception && Array.isArray(originalEvent.exception.values)) {
            processedEvent = this._processExceptionsEvent(processedEvent);
        }
        if (originalEvent.stacktrace) {
            processedEvent = this._processStacktraceEvent(processedEvent);
        }
        return processedEvent;
    };
    /** JSDoc */
    RewriteFrames.prototype._processExceptionsEvent = function (event) {
        var _this = this;
        try {
            return Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, event), { exception: Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, event.exception), { 
                    // The check for this is performed inside `process` call itself, safe to skip here
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                    values: event.exception.values.map(function (value) { return (Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, value), { stacktrace: _this._processStacktrace(value.stacktrace) })); }) }) });
        }
        catch (_oO) {
            return event;
        }
    };
    /** JSDoc */
    RewriteFrames.prototype._processStacktraceEvent = function (event) {
        try {
            return Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, event), { stacktrace: this._processStacktrace(event.stacktrace) });
        }
        catch (_oO) {
            return event;
        }
    };
    /** JSDoc */
    RewriteFrames.prototype._processStacktrace = function (stacktrace) {
        var _this = this;
        return Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, stacktrace), { frames: stacktrace && stacktrace.frames && stacktrace.frames.map(function (f) { return _this._iteratee(f); }) });
    };
    /**
     * @inheritDoc
     */
    RewriteFrames.id = 'RewriteFrames';
    return RewriteFrames;
}());

//# sourceMappingURL=rewriteframes.js.map
// CONCATENATED MODULE: ./node_modules/@sentry/integrations/esm/sessiontiming.js

/** This function adds duration since Sentry was initialized till the time event was sent */
var sessiontiming_SessionTiming = /** @class */ (function () {
    function SessionTiming() {
        /**
         * @inheritDoc
         */
        this.name = SessionTiming.id;
        /** Exact time Client was initialized expressed in milliseconds since Unix Epoch. */
        this._startTime = Date.now();
    }
    /**
     * @inheritDoc
     */
    SessionTiming.prototype.setupOnce = function (addGlobalEventProcessor, getCurrentHub) {
        addGlobalEventProcessor(function (event) {
            var self = getCurrentHub().getIntegration(SessionTiming);
            if (self) {
                return self.process(event);
            }
            return event;
        });
    };
    /**
     * @inheritDoc
     */
    SessionTiming.prototype.process = function (event) {
        var _a;
        var now = Date.now();
        return Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, event), { extra: Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, event.extra), (_a = {}, _a['session:start'] = this._startTime, _a['session:duration'] = now - this._startTime, _a['session:end'] = now, _a)) });
    };
    /**
     * @inheritDoc
     */
    SessionTiming.id = 'SessionTiming';
    return SessionTiming;
}());

//# sourceMappingURL=sessiontiming.js.map
// CONCATENATED MODULE: ./node_modules/@sentry/integrations/esm/transaction.js
/** Add node transaction to the event */
var Transaction = /** @class */ (function () {
    function Transaction() {
        /**
         * @inheritDoc
         */
        this.name = Transaction.id;
    }
    /**
     * @inheritDoc
     */
    Transaction.prototype.setupOnce = function (addGlobalEventProcessor, getCurrentHub) {
        addGlobalEventProcessor(function (event) {
            var self = getCurrentHub().getIntegration(Transaction);
            if (self) {
                return self.process(event);
            }
            return event;
        });
    };
    /**
     * @inheritDoc
     */
    Transaction.prototype.process = function (event) {
        var frames = this._getFramesFromEvent(event);
        // use for loop so we don't have to reverse whole frames array
        for (var i = frames.length - 1; i >= 0; i--) {
            var frame = frames[i];
            if (frame.in_app === true) {
                event.transaction = this._getTransaction(frame);
                break;
            }
        }
        return event;
    };
    /** JSDoc */
    Transaction.prototype._getFramesFromEvent = function (event) {
        var exception = event.exception && event.exception.values && event.exception.values[0];
        return (exception && exception.stacktrace && exception.stacktrace.frames) || [];
    };
    /** JSDoc */
    Transaction.prototype._getTransaction = function (frame) {
        return frame.module || frame.function ? (frame.module || '?') + "/" + (frame.function || '?') : '<unknown>';
    };
    /**
     * @inheritDoc
     */
    Transaction.id = 'Transaction';
    return Transaction;
}());

//# sourceMappingURL=transaction.js.map
// EXTERNAL MODULE: ./node_modules/@sentry/utils/esm/time.js
var time = __webpack_require__(535);

// CONCATENATED MODULE: ./node_modules/@sentry/integrations/esm/vue.js


/**
 * Used to extract Tracing integration from the current client,
 * without the need to import `Tracing` itself from the @sentry/apm package.
 * @deprecated as @sentry/tracing should be used over @sentry/apm.
 */
var TRACING_GETTER = {
    id: 'Tracing',
};
/**
 * Used to extract BrowserTracing integration from @sentry/tracing
 */
var BROWSER_TRACING_GETTER = {
    id: 'BrowserTracing',
};
// Mappings from operation to corresponding lifecycle hook.
var HOOKS = {
    activate: ['activated', 'deactivated'],
    create: ['beforeCreate', 'created'],
    destroy: ['beforeDestroy', 'destroyed'],
    mount: ['beforeMount', 'mounted'],
    update: ['beforeUpdate', 'updated'],
};
var COMPONENT_NAME_REGEXP = /(?:^|[-_/])(\w)/g;
var ROOT_COMPONENT_NAME = 'root';
var ANONYMOUS_COMPONENT_NAME = 'anonymous component';
/** JSDoc */
var vue_Vue = /** @class */ (function () {
    /**
     * @inheritDoc
     */
    function Vue(options) {
        var _this = this;
        /**
         * @inheritDoc
         */
        this.name = Vue.id;
        /**
         * Cache holding already processed component names
         */
        this._componentsCache = {};
        /** Keep it as attribute function, to keep correct `this` binding inside the hooks callbacks  */
        // eslint-disable-next-line @typescript-eslint/typedef
        this._applyTracingHooks = function (vm, getCurrentHub) {
            // Don't attach twice, just in case
            if (vm.$options.$_sentryPerfHook) {
                return;
            }
            vm.$options.$_sentryPerfHook = true;
            var name = _this._getComponentName(vm);
            var rootMount = name === ROOT_COMPONENT_NAME;
            var spans = {};
            // Render hook starts after once event is emitted,
            // but it ends before the second event of the same type.
            //
            // Because of this, we start measuring inside the first event,
            // but finish it before it triggers, to skip the event emitter timing itself.
            var rootHandler = function (hook) {
                var now = Object(time["c" /* timestampWithMs */])();
                // On the first handler call (before), it'll be undefined, as `$once` will add it in the future.
                // However, on the second call (after), it'll be already in place.
                if (_this._rootSpan) {
                    _this._finishRootSpan(now, getCurrentHub);
                }
                else {
                    vm.$once("hook:" + hook, function () {
                        // Create an activity on the first event call. There'll be no second call, as rootSpan will be in place,
                        // thus new event handler won't be attached.
                        // We do this whole dance with `TRACING_GETTER` to prevent `@sentry/apm` from becoming a peerDependency.
                        // We also need to ask for the `.constructor`, as `pushActivity` and `popActivity` are static, not instance methods.
                        /* eslint-disable @typescript-eslint/no-unsafe-member-access */
                        // eslint-disable-next-line deprecation/deprecation
                        var tracingIntegration = getCurrentHub().getIntegration(TRACING_GETTER);
                        if (tracingIntegration) {
                            _this._tracingActivity = tracingIntegration.constructor.pushActivity('Vue Application Render');
                            var transaction = tracingIntegration.constructor.getTransaction();
                            if (transaction) {
                                _this._rootSpan = transaction.startChild({
                                    description: 'Application Render',
                                    op: 'Vue',
                                });
                            }
                            // Use functionality from @sentry/tracing
                        }
                        else {
                            var activeTransaction = getActiveTransaction(getCurrentHub());
                            if (activeTransaction) {
                                _this._rootSpan = activeTransaction.startChild({
                                    description: 'Application Render',
                                    op: 'Vue',
                                });
                            }
                        }
                        /* eslint-enable @typescript-eslint/no-unsafe-member-access */
                    });
                }
            };
            var childHandler = function (hook, operation) {
                // Skip components that we don't want to track to minimize the noise and give a more granular control to the user
                var shouldTrack = Array.isArray(_this._options.tracingOptions.trackComponents)
                    ? _this._options.tracingOptions.trackComponents.indexOf(name) > -1
                    : _this._options.tracingOptions.trackComponents;
                if (!_this._rootSpan || !shouldTrack) {
                    return;
                }
                var now = Object(time["c" /* timestampWithMs */])();
                var span = spans[operation];
                // On the first handler call (before), it'll be undefined, as `$once` will add it in the future.
                // However, on the second call (after), it'll be already in place.
                if (span) {
                    span.finish();
                    _this._finishRootSpan(now, getCurrentHub);
                }
                else {
                    vm.$once("hook:" + hook, function () {
                        if (_this._rootSpan) {
                            spans[operation] = _this._rootSpan.startChild({
                                description: "Vue <" + name + ">",
                                op: operation,
                            });
                        }
                    });
                }
            };
            // Each component has it's own scope, so all activities are only related to one of them
            _this._options.tracingOptions.hooks.forEach(function (operation) {
                // Retrieve corresponding hooks from Vue lifecycle.
                // eg. mount => ['beforeMount', 'mounted']
                var internalHooks = HOOKS[operation];
                if (!internalHooks) {
                    logger["a" /* logger */].warn("Unknown hook: " + operation);
                    return;
                }
                internalHooks.forEach(function (internalHook) {
                    var handler = rootMount
                        ? rootHandler.bind(_this, internalHook)
                        : childHandler.bind(_this, internalHook, operation);
                    var currentValue = vm.$options[internalHook];
                    if (Array.isArray(currentValue)) {
                        vm.$options[internalHook] = Object(tslib_es6["g" /* __spread */])([handler], currentValue);
                    }
                    else if (typeof currentValue === 'function') {
                        vm.$options[internalHook] = [handler, currentValue];
                    }
                    else {
                        vm.$options[internalHook] = [handler];
                    }
                });
            });
        };
        logger["a" /* logger */].log('You are still using the Vue.js integration, consider moving to @sentry/vue');
        this._options = Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({ 
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            Vue: Object(misc["e" /* getGlobalObject */])().Vue, attachProps: true, logErrors: false, tracing: false }, options), { tracingOptions: Object(tslib_es6["a" /* __assign */])({ hooks: ['mount', 'update'], timeout: 2000, trackComponents: false }, options.tracingOptions) });
    }
    /**
     * @inheritDoc
     */
    Vue.prototype.setupOnce = function (_, getCurrentHub) {
        if (!this._options.Vue) {
            logger["a" /* logger */].error('Vue integration is missing a Vue instance');
            return;
        }
        this._attachErrorHandler(getCurrentHub);
        if (this._options.tracing) {
            this._startTracing(getCurrentHub);
        }
    };
    /**
     * Extract component name from the ViewModel
     */
    Vue.prototype._getComponentName = function (vm) {
        // Such level of granularity is most likely not necessary, but better safe than sorry. — Kamil
        if (!vm) {
            return ANONYMOUS_COMPONENT_NAME;
        }
        if (vm.$root === vm) {
            return ROOT_COMPONENT_NAME;
        }
        if (!vm.$options) {
            return ANONYMOUS_COMPONENT_NAME;
        }
        if (vm.$options.name) {
            return vm.$options.name;
        }
        if (vm.$options._componentTag) {
            return vm.$options._componentTag;
        }
        // injected by vue-loader
        if (vm.$options.__file) {
            var unifiedFile = vm.$options.__file.replace(/^[a-zA-Z]:/, '').replace(/\\/g, '/');
            var filename = basename(unifiedFile, '.vue');
            return (this._componentsCache[filename] ||
                (this._componentsCache[filename] = filename.replace(COMPONENT_NAME_REGEXP, function (_, c) {
                    return c ? c.toUpperCase() : '';
                })));
        }
        return ANONYMOUS_COMPONENT_NAME;
    };
    /** Finish top-level span and activity with a debounce configured using `timeout` option */
    Vue.prototype._finishRootSpan = function (timestamp, getCurrentHub) {
        var _this = this;
        if (this._rootSpanTimer) {
            clearTimeout(this._rootSpanTimer);
        }
        this._rootSpanTimer = setTimeout(function () {
            if (_this._tracingActivity) {
                // We do this whole dance with `TRACING_GETTER` to prevent `@sentry/apm` from becoming a peerDependency.
                // We also need to ask for the `.constructor`, as `pushActivity` and `popActivity` are static, not instance methods.
                // eslint-disable-next-line deprecation/deprecation
                var tracingIntegration = getCurrentHub().getIntegration(TRACING_GETTER);
                if (tracingIntegration) {
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                    tracingIntegration.constructor.popActivity(_this._tracingActivity);
                }
            }
            // We should always finish the span, only should pop activity if using @sentry/apm
            if (_this._rootSpan) {
                _this._rootSpan.finish(timestamp);
            }
        }, this._options.tracingOptions.timeout);
    };
    /** Inject configured tracing hooks into Vue's component lifecycles */
    Vue.prototype._startTracing = function (getCurrentHub) {
        var applyTracingHooks = this._applyTracingHooks;
        this._options.Vue.mixin({
            beforeCreate: function () {
                // eslint-disable-next-line deprecation/deprecation
                if (getCurrentHub().getIntegration(TRACING_GETTER) || getCurrentHub().getIntegration(BROWSER_TRACING_GETTER)) {
                    // `this` points to currently rendered component
                    applyTracingHooks(this, getCurrentHub);
                }
                else {
                    logger["a" /* logger */].error('Vue integration has tracing enabled, but Tracing integration is not configured');
                }
            },
        });
    };
    /** Inject Sentry's handler into owns Vue's error handler  */
    Vue.prototype._attachErrorHandler = function (getCurrentHub) {
        var _this = this;
        // eslint-disable-next-line @typescript-eslint/unbound-method
        var currentErrorHandler = this._options.Vue.config.errorHandler;
        this._options.Vue.config.errorHandler = function (error, vm, info) {
            var metadata = {};
            if (vm) {
                try {
                    metadata.componentName = _this._getComponentName(vm);
                    if (_this._options.attachProps) {
                        metadata.propsData = vm.$options.propsData;
                    }
                }
                catch (_oO) {
                    logger["a" /* logger */].warn('Unable to extract metadata from Vue component.');
                }
            }
            if (info) {
                metadata.lifecycleHook = info;
            }
            if (getCurrentHub().getIntegration(Vue)) {
                // Capture exception in the next event loop, to make sure that all breadcrumbs are recorded in time.
                setTimeout(function () {
                    getCurrentHub().withScope(function (scope) {
                        scope.setContext('vue', metadata);
                        getCurrentHub().captureException(error);
                    });
                });
            }
            if (typeof currentErrorHandler === 'function') {
                currentErrorHandler.call(_this._options.Vue, error, vm, info);
            }
            if (_this._options.logErrors) {
                if (_this._options.Vue.util) {
                    _this._options.Vue.util.warn("Error in " + info + ": \"" + (error && error.toString()) + "\"", vm);
                }
                // eslint-disable-next-line no-console
                console.error(error);
            }
        };
    };
    /**
     * @inheritDoc
     */
    Vue.id = 'Vue';
    return Vue;
}());

/** Grabs active transaction off scope */
function getActiveTransaction(hub) {
    if (hub && hub.getScope) {
        var scope = hub.getScope();
        if (scope) {
            return scope.getTransaction();
        }
    }
    return undefined;
}
//# sourceMappingURL=vue.js.map
// CONCATENATED MODULE: ./node_modules/@sentry/integrations/esm/index.js












//# sourceMappingURL=index.js.map

/***/ }),

/***/ 544:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ hub_Hub; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* binding */ makeMain; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ getCurrentHub; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ getHubFromCarrier; });

// UNUSED EXPORTS: API_VERSION, getMainCarrier, getActiveDomain, setHubOnCarrier

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(457);

// EXTERNAL MODULE: ./node_modules/@sentry/types/esm/session.js
var esm_session = __webpack_require__(536);

// EXTERNAL MODULE: ./node_modules/@sentry/utils/esm/misc.js
var misc = __webpack_require__(462);

// EXTERNAL MODULE: ./node_modules/@sentry/utils/esm/time.js
var time = __webpack_require__(535);

// EXTERNAL MODULE: ./node_modules/@sentry/utils/esm/logger.js
var logger = __webpack_require__(472);

// EXTERNAL MODULE: ./node_modules/@sentry/utils/esm/node.js
var node = __webpack_require__(470);

// EXTERNAL MODULE: ./node_modules/@sentry/hub/esm/scope.js
var esm_scope = __webpack_require__(525);

// EXTERNAL MODULE: ./node_modules/@sentry/utils/esm/object.js
var object = __webpack_require__(527);

// CONCATENATED MODULE: ./node_modules/@sentry/hub/esm/session.js


/**
 * @inheritdoc
 */
var session_Session = /** @class */ (function () {
    function Session(context) {
        this.errors = 0;
        this.sid = Object(misc["i" /* uuid4 */])();
        this.duration = 0;
        this.status = esm_session["a" /* SessionStatus */].Ok;
        this.init = true;
        this.ignoreDuration = false;
        // Both timestamp and started are in seconds since the UNIX epoch.
        var startingTime = Object(time["b" /* timestampInSeconds */])();
        this.timestamp = startingTime;
        this.started = startingTime;
        if (context) {
            this.update(context);
        }
    }
    /** JSDoc */
    // eslint-disable-next-line complexity
    Session.prototype.update = function (context) {
        if (context === void 0) { context = {}; }
        if (context.user) {
            if (!this.ipAddress && context.user.ip_address) {
                this.ipAddress = context.user.ip_address;
            }
            if (!this.did && !context.did) {
                this.did = context.user.id || context.user.email || context.user.username;
            }
        }
        this.timestamp = context.timestamp || Object(time["b" /* timestampInSeconds */])();
        if (context.ignoreDuration) {
            this.ignoreDuration = context.ignoreDuration;
        }
        if (context.sid) {
            // Good enough uuid validation. — Kamil
            this.sid = context.sid.length === 32 ? context.sid : Object(misc["i" /* uuid4 */])();
        }
        if (context.init !== undefined) {
            this.init = context.init;
        }
        if (!this.did && context.did) {
            this.did = "" + context.did;
        }
        if (typeof context.started === 'number') {
            this.started = context.started;
        }
        if (this.ignoreDuration) {
            this.duration = undefined;
        }
        else if (typeof context.duration === 'number') {
            this.duration = context.duration;
        }
        else {
            var duration = this.timestamp - this.started;
            this.duration = duration >= 0 ? duration : 0;
        }
        if (context.release) {
            this.release = context.release;
        }
        if (context.environment) {
            this.environment = context.environment;
        }
        if (!this.ipAddress && context.ipAddress) {
            this.ipAddress = context.ipAddress;
        }
        if (!this.userAgent && context.userAgent) {
            this.userAgent = context.userAgent;
        }
        if (typeof context.errors === 'number') {
            this.errors = context.errors;
        }
        if (context.status) {
            this.status = context.status;
        }
    };
    /** JSDoc */
    Session.prototype.close = function (status) {
        if (status) {
            this.update({ status: status });
        }
        else if (this.status === esm_session["a" /* SessionStatus */].Ok) {
            this.update({ status: esm_session["a" /* SessionStatus */].Exited });
        }
        else {
            this.update();
        }
    };
    /** JSDoc */
    Session.prototype.toJSON = function () {
        return Object(object["a" /* dropUndefinedKeys */])({
            sid: "" + this.sid,
            init: this.init,
            // Make sure that sec is converted to ms for date constructor
            started: new Date(this.started * 1000).toISOString(),
            timestamp: new Date(this.timestamp * 1000).toISOString(),
            status: this.status,
            errors: this.errors,
            did: typeof this.did === 'number' || typeof this.did === 'string' ? "" + this.did : undefined,
            duration: this.duration,
            attrs: Object(object["a" /* dropUndefinedKeys */])({
                release: this.release,
                environment: this.environment,
                ip_address: this.ipAddress,
                user_agent: this.userAgent,
            }),
        });
    };
    return Session;
}());

//# sourceMappingURL=session.js.map
// CONCATENATED MODULE: ./node_modules/@sentry/hub/esm/hub.js

/* eslint-disable max-lines */




/**
 * API compatibility version of this hub.
 *
 * WARNING: This number should only be increased when the global interface
 * changes and new methods are introduced.
 *
 * @hidden
 */
var API_VERSION = 4;
/**
 * Default maximum number of breadcrumbs added to an event. Can be overwritten
 * with {@link Options.maxBreadcrumbs}.
 */
var DEFAULT_BREADCRUMBS = 100;
/**
 * @inheritDoc
 */
var hub_Hub = /** @class */ (function () {
    /**
     * Creates a new instance of the hub, will push one {@link Layer} into the
     * internal stack on creation.
     *
     * @param client bound to the hub.
     * @param scope bound to the hub.
     * @param version number, higher number means higher priority.
     */
    function Hub(client, scope, _version) {
        if (scope === void 0) { scope = new esm_scope["a" /* Scope */](); }
        if (_version === void 0) { _version = API_VERSION; }
        this._version = _version;
        /** Is a {@link Layer}[] containing the client and scope */
        this._stack = [{}];
        this.getStackTop().scope = scope;
        this.bindClient(client);
    }
    /**
     * @inheritDoc
     */
    Hub.prototype.isOlderThan = function (version) {
        return this._version < version;
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.bindClient = function (client) {
        var top = this.getStackTop();
        top.client = client;
        if (client && client.setupIntegrations) {
            client.setupIntegrations();
        }
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.pushScope = function () {
        // We want to clone the content of prev scope
        var scope = esm_scope["a" /* Scope */].clone(this.getScope());
        this.getStack().push({
            client: this.getClient(),
            scope: scope,
        });
        return scope;
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.popScope = function () {
        if (this.getStack().length <= 1)
            return false;
        return !!this.getStack().pop();
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.withScope = function (callback) {
        var scope = this.pushScope();
        try {
            callback(scope);
        }
        finally {
            this.popScope();
        }
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.getClient = function () {
        return this.getStackTop().client;
    };
    /** Returns the scope of the top stack. */
    Hub.prototype.getScope = function () {
        return this.getStackTop().scope;
    };
    /** Returns the scope stack for domains or the process. */
    Hub.prototype.getStack = function () {
        return this._stack;
    };
    /** Returns the topmost scope layer in the order domain > local > process. */
    Hub.prototype.getStackTop = function () {
        return this._stack[this._stack.length - 1];
    };
    /**
     * @inheritDoc
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
    Hub.prototype.captureException = function (exception, hint) {
        var eventId = (this._lastEventId = Object(misc["i" /* uuid4 */])());
        var finalHint = hint;
        // If there's no explicit hint provided, mimick the same thing that would happen
        // in the minimal itself to create a consistent behavior.
        // We don't do this in the client, as it's the lowest level API, and doing this,
        // would prevent user from having full control over direct calls.
        if (!hint) {
            var syntheticException = void 0;
            try {
                throw new Error('Sentry syntheticException');
            }
            catch (exception) {
                syntheticException = exception;
            }
            finalHint = {
                originalException: exception,
                syntheticException: syntheticException,
            };
        }
        this._invokeClient('captureException', exception, Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, finalHint), { event_id: eventId }));
        return eventId;
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.captureMessage = function (message, level, hint) {
        var eventId = (this._lastEventId = Object(misc["i" /* uuid4 */])());
        var finalHint = hint;
        // If there's no explicit hint provided, mimick the same thing that would happen
        // in the minimal itself to create a consistent behavior.
        // We don't do this in the client, as it's the lowest level API, and doing this,
        // would prevent user from having full control over direct calls.
        if (!hint) {
            var syntheticException = void 0;
            try {
                throw new Error(message);
            }
            catch (exception) {
                syntheticException = exception;
            }
            finalHint = {
                originalException: message,
                syntheticException: syntheticException,
            };
        }
        this._invokeClient('captureMessage', message, level, Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, finalHint), { event_id: eventId }));
        return eventId;
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.captureEvent = function (event, hint) {
        var eventId = (this._lastEventId = Object(misc["i" /* uuid4 */])());
        this._invokeClient('captureEvent', event, Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, hint), { event_id: eventId }));
        return eventId;
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.lastEventId = function () {
        return this._lastEventId;
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.addBreadcrumb = function (breadcrumb, hint) {
        var _a = this.getStackTop(), scope = _a.scope, client = _a.client;
        if (!scope || !client)
            return;
        // eslint-disable-next-line @typescript-eslint/unbound-method
        var _b = (client.getOptions && client.getOptions()) || {}, _c = _b.beforeBreadcrumb, beforeBreadcrumb = _c === void 0 ? null : _c, _d = _b.maxBreadcrumbs, maxBreadcrumbs = _d === void 0 ? DEFAULT_BREADCRUMBS : _d;
        if (maxBreadcrumbs <= 0)
            return;
        var timestamp = Object(time["a" /* dateTimestampInSeconds */])();
        var mergedBreadcrumb = Object(tslib_es6["a" /* __assign */])({ timestamp: timestamp }, breadcrumb);
        var finalBreadcrumb = beforeBreadcrumb
            ? Object(misc["c" /* consoleSandbox */])(function () { return beforeBreadcrumb(mergedBreadcrumb, hint); })
            : mergedBreadcrumb;
        if (finalBreadcrumb === null)
            return;
        scope.addBreadcrumb(finalBreadcrumb, maxBreadcrumbs);
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.setUser = function (user) {
        var scope = this.getScope();
        if (scope)
            scope.setUser(user);
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.setTags = function (tags) {
        var scope = this.getScope();
        if (scope)
            scope.setTags(tags);
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.setExtras = function (extras) {
        var scope = this.getScope();
        if (scope)
            scope.setExtras(extras);
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.setTag = function (key, value) {
        var scope = this.getScope();
        if (scope)
            scope.setTag(key, value);
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.setExtra = function (key, extra) {
        var scope = this.getScope();
        if (scope)
            scope.setExtra(key, extra);
    };
    /**
     * @inheritDoc
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Hub.prototype.setContext = function (name, context) {
        var scope = this.getScope();
        if (scope)
            scope.setContext(name, context);
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.configureScope = function (callback) {
        var _a = this.getStackTop(), scope = _a.scope, client = _a.client;
        if (scope && client) {
            callback(scope);
        }
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.run = function (callback) {
        var oldHub = makeMain(this);
        try {
            callback(this);
        }
        finally {
            makeMain(oldHub);
        }
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.getIntegration = function (integration) {
        var client = this.getClient();
        if (!client)
            return null;
        try {
            return client.getIntegration(integration);
        }
        catch (_oO) {
            logger["a" /* logger */].warn("Cannot retrieve integration " + integration.id + " from the current Hub");
            return null;
        }
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.startSpan = function (context) {
        return this._callExtensionMethod('startSpan', context);
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.startTransaction = function (context, customSamplingContext) {
        return this._callExtensionMethod('startTransaction', context, customSamplingContext);
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.traceHeaders = function () {
        return this._callExtensionMethod('traceHeaders');
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.captureSession = function (endSession) {
        if (endSession === void 0) { endSession = false; }
        // both send the update and pull the session from the scope
        if (endSession) {
            return this.endSession();
        }
        // only send the update
        this._sendSessionUpdate();
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.endSession = function () {
        var _a, _b, _c, _d, _e;
        (_c = (_b = (_a = this.getStackTop()) === null || _a === void 0 ? void 0 : _a.scope) === null || _b === void 0 ? void 0 : _b.getSession()) === null || _c === void 0 ? void 0 : _c.close();
        this._sendSessionUpdate();
        // the session is over; take it off of the scope
        (_e = (_d = this.getStackTop()) === null || _d === void 0 ? void 0 : _d.scope) === null || _e === void 0 ? void 0 : _e.setSession();
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.startSession = function (context) {
        var _a = this.getStackTop(), scope = _a.scope, client = _a.client;
        var _b = (client && client.getOptions()) || {}, release = _b.release, environment = _b.environment;
        // Will fetch userAgent if called from browser sdk
        var global = Object(misc["e" /* getGlobalObject */])();
        var userAgent = (global.navigator || {}).userAgent;
        var session = new session_Session(Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({ release: release,
            environment: environment }, (scope && { user: scope.getUser() })), (userAgent && { userAgent: userAgent })), context));
        if (scope) {
            // End existing session if there's one
            var currentSession = scope.getSession && scope.getSession();
            if (currentSession && currentSession.status === esm_session["a" /* SessionStatus */].Ok) {
                currentSession.update({ status: esm_session["a" /* SessionStatus */].Exited });
            }
            this.endSession();
            // Afterwards we set the new session on the scope
            scope.setSession(session);
        }
        return session;
    };
    /**
     * Sends the current Session on the scope
     */
    Hub.prototype._sendSessionUpdate = function () {
        var _a = this.getStackTop(), scope = _a.scope, client = _a.client;
        if (!scope)
            return;
        var session = scope.getSession && scope.getSession();
        if (session) {
            if (client && client.captureSession) {
                client.captureSession(session);
            }
        }
    };
    /**
     * Internal helper function to call a method on the top client if it exists.
     *
     * @param method The method to call on the client.
     * @param args Arguments to pass to the client function.
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Hub.prototype._invokeClient = function (method) {
        var _a;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var _b = this.getStackTop(), scope = _b.scope, client = _b.client;
        if (client && client[method]) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-explicit-any
            (_a = client)[method].apply(_a, Object(tslib_es6["g" /* __spread */])(args, [scope]));
        }
    };
    /**
     * Calls global extension method and binding current instance to the function call
     */
    // @ts-ignore Function lacks ending return statement and return type does not include 'undefined'. ts(2366)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Hub.prototype._callExtensionMethod = function (method) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var carrier = getMainCarrier();
        var sentry = carrier.__SENTRY__;
        if (sentry && sentry.extensions && typeof sentry.extensions[method] === 'function') {
            return sentry.extensions[method].apply(this, args);
        }
        logger["a" /* logger */].warn("Extension method " + method + " couldn't be found, doing nothing.");
    };
    return Hub;
}());

/**
 * Returns the global shim registry.
 *
 * FIXME: This function is problematic, because despite always returning a valid Carrier,
 * it has an optional `__SENTRY__` property, which then in turn requires us to always perform an unnecessary check
 * at the call-site. We always access the carrier through this function, so we can guarantee that `__SENTRY__` is there.
 **/
function getMainCarrier() {
    var carrier = Object(misc["e" /* getGlobalObject */])();
    carrier.__SENTRY__ = carrier.__SENTRY__ || {
        extensions: {},
        hub: undefined,
    };
    return carrier;
}
/**
 * Replaces the current main hub with the passed one on the global object
 *
 * @returns The old replaced hub
 */
function makeMain(hub) {
    var registry = getMainCarrier();
    var oldHub = getHubFromCarrier(registry);
    setHubOnCarrier(registry, hub);
    return oldHub;
}
/**
 * Returns the default hub instance.
 *
 * If a hub is already registered in the global carrier but this module
 * contains a more recent version, it replaces the registered version.
 * Otherwise, the currently registered hub will be returned.
 */
function getCurrentHub() {
    // Get main carrier (global for every environment)
    var registry = getMainCarrier();
    // If there's no hub, or its an old API, assign a new one
    if (!hasHubOnCarrier(registry) || getHubFromCarrier(registry).isOlderThan(API_VERSION)) {
        setHubOnCarrier(registry, new hub_Hub());
    }
    // Prefer domains over global if they are there (applicable only to Node environment)
    if (Object(node["b" /* isNodeEnv */])()) {
        return getHubFromActiveDomain(registry);
    }
    // Return hub that lives on a global object
    return getHubFromCarrier(registry);
}
/**
 * Returns the active domain, if one exists
 * @deprecated No longer used; remove in v7
 * @returns The domain, or undefined if there is no active domain
 */
// eslint-disable-next-line deprecation/deprecation
function getActiveDomain() {
    logger["a" /* logger */].warn('Function `getActiveDomain` is deprecated and will be removed in a future version.');
    var sentry = getMainCarrier().__SENTRY__;
    return sentry && sentry.extensions && sentry.extensions.domain && sentry.extensions.domain.active;
}
/**
 * Try to read the hub from an active domain, and fallback to the registry if one doesn't exist
 * @returns discovered hub
 */
function getHubFromActiveDomain(registry) {
    var _a, _b, _c;
    try {
        var activeDomain = (_c = (_b = (_a = getMainCarrier().__SENTRY__) === null || _a === void 0 ? void 0 : _a.extensions) === null || _b === void 0 ? void 0 : _b.domain) === null || _c === void 0 ? void 0 : _c.active;
        // If there's no active domain, just return global hub
        if (!activeDomain) {
            return getHubFromCarrier(registry);
        }
        // If there's no hub on current domain, or it's an old API, assign a new one
        if (!hasHubOnCarrier(activeDomain) || getHubFromCarrier(activeDomain).isOlderThan(API_VERSION)) {
            var registryHubTopStack = getHubFromCarrier(registry).getStackTop();
            setHubOnCarrier(activeDomain, new hub_Hub(registryHubTopStack.client, esm_scope["a" /* Scope */].clone(registryHubTopStack.scope)));
        }
        // Return hub that lives on a domain
        return getHubFromCarrier(activeDomain);
    }
    catch (_Oo) {
        // Return hub that lives on a global object
        return getHubFromCarrier(registry);
    }
}
/**
 * This will tell whether a carrier has a hub on it or not
 * @param carrier object
 */
function hasHubOnCarrier(carrier) {
    return !!(carrier && carrier.__SENTRY__ && carrier.__SENTRY__.hub);
}
/**
 * This will create a new {@link Hub} and add to the passed object on
 * __SENTRY__.hub.
 * @param carrier object
 * @hidden
 */
function getHubFromCarrier(carrier) {
    if (carrier && carrier.__SENTRY__ && carrier.__SENTRY__.hub)
        return carrier.__SENTRY__.hub;
    carrier.__SENTRY__ = carrier.__SENTRY__ || {};
    carrier.__SENTRY__.hub = new hub_Hub();
    return carrier.__SENTRY__.hub;
}
/**
 * This will set passed {@link Hub} on the passed object's __SENTRY__.hub attribute
 * @param carrier object
 * @param hub Hub
 * @returns A boolean indicating success or failure
 */
function setHubOnCarrier(carrier, hub) {
    if (!carrier)
        return false;
    carrier.__SENTRY__ = carrier.__SENTRY__ || {};
    carrier.__SENTRY__.hub = hub;
    return true;
}
//# sourceMappingURL=hub.js.map

/***/ })

}]);