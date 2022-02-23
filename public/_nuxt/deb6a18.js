(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

/***/ 542:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "Severity", function() { return /* reexport */ severity["a" /* Severity */]; });
__webpack_require__.d(__webpack_exports__, "Status", function() { return /* reexport */ esm_status["a" /* Status */]; });
__webpack_require__.d(__webpack_exports__, "addGlobalEventProcessor", function() { return /* reexport */ esm_scope["b" /* addGlobalEventProcessor */]; });
__webpack_require__.d(__webpack_exports__, "addBreadcrumb", function() { return /* reexport */ esm["a" /* addBreadcrumb */]; });
__webpack_require__.d(__webpack_exports__, "captureException", function() { return /* reexport */ esm["c" /* captureException */]; });
__webpack_require__.d(__webpack_exports__, "captureEvent", function() { return /* reexport */ esm["b" /* captureEvent */]; });
__webpack_require__.d(__webpack_exports__, "captureMessage", function() { return /* reexport */ esm["d" /* captureMessage */]; });
__webpack_require__.d(__webpack_exports__, "configureScope", function() { return /* reexport */ esm["e" /* configureScope */]; });
__webpack_require__.d(__webpack_exports__, "getHubFromCarrier", function() { return /* reexport */ esm_hub["c" /* getHubFromCarrier */]; });
__webpack_require__.d(__webpack_exports__, "getCurrentHub", function() { return /* reexport */ esm_hub["b" /* getCurrentHub */]; });
__webpack_require__.d(__webpack_exports__, "Hub", function() { return /* reexport */ esm_hub["a" /* Hub */]; });
__webpack_require__.d(__webpack_exports__, "makeMain", function() { return /* reexport */ esm_hub["d" /* makeMain */]; });
__webpack_require__.d(__webpack_exports__, "Scope", function() { return /* reexport */ esm_scope["a" /* Scope */]; });
__webpack_require__.d(__webpack_exports__, "startTransaction", function() { return /* reexport */ esm["l" /* startTransaction */]; });
__webpack_require__.d(__webpack_exports__, "SDK_VERSION", function() { return /* reexport */ SDK_VERSION; });
__webpack_require__.d(__webpack_exports__, "setContext", function() { return /* reexport */ esm["f" /* setContext */]; });
__webpack_require__.d(__webpack_exports__, "setExtra", function() { return /* reexport */ esm["g" /* setExtra */]; });
__webpack_require__.d(__webpack_exports__, "setExtras", function() { return /* reexport */ esm["h" /* setExtras */]; });
__webpack_require__.d(__webpack_exports__, "setTag", function() { return /* reexport */ esm["i" /* setTag */]; });
__webpack_require__.d(__webpack_exports__, "setTags", function() { return /* reexport */ esm["j" /* setTags */]; });
__webpack_require__.d(__webpack_exports__, "setUser", function() { return /* reexport */ esm["k" /* setUser */]; });
__webpack_require__.d(__webpack_exports__, "withScope", function() { return /* reexport */ esm["m" /* withScope */]; });
__webpack_require__.d(__webpack_exports__, "BrowserClient", function() { return /* reexport */ client_BrowserClient; });
__webpack_require__.d(__webpack_exports__, "injectReportDialog", function() { return /* reexport */ injectReportDialog; });
__webpack_require__.d(__webpack_exports__, "eventFromException", function() { return /* reexport */ eventFromException; });
__webpack_require__.d(__webpack_exports__, "eventFromMessage", function() { return /* reexport */ eventFromMessage; });
__webpack_require__.d(__webpack_exports__, "defaultIntegrations", function() { return /* reexport */ sdk_defaultIntegrations; });
__webpack_require__.d(__webpack_exports__, "forceLoad", function() { return /* reexport */ forceLoad; });
__webpack_require__.d(__webpack_exports__, "init", function() { return /* reexport */ init; });
__webpack_require__.d(__webpack_exports__, "lastEventId", function() { return /* reexport */ lastEventId; });
__webpack_require__.d(__webpack_exports__, "onLoad", function() { return /* reexport */ onLoad; });
__webpack_require__.d(__webpack_exports__, "showReportDialog", function() { return /* reexport */ showReportDialog; });
__webpack_require__.d(__webpack_exports__, "flush", function() { return /* reexport */ flush; });
__webpack_require__.d(__webpack_exports__, "close", function() { return /* reexport */ sdk_close; });
__webpack_require__.d(__webpack_exports__, "wrap", function() { return /* reexport */ sdk_wrap; });
__webpack_require__.d(__webpack_exports__, "SDK_NAME", function() { return /* reexport */ SDK_NAME; });
__webpack_require__.d(__webpack_exports__, "Integrations", function() { return /* binding */ INTEGRATIONS; });
__webpack_require__.d(__webpack_exports__, "Transports", function() { return /* reexport */ transports_namespaceObject; });

// NAMESPACE OBJECT: ./node_modules/@sentry/core/esm/integrations/index.js
var integrations_namespaceObject = {};
__webpack_require__.r(integrations_namespaceObject);
__webpack_require__.d(integrations_namespaceObject, "FunctionToString", function() { return FunctionToString; });
__webpack_require__.d(integrations_namespaceObject, "InboundFilters", function() { return inboundfilters_InboundFilters; });

// NAMESPACE OBJECT: ./node_modules/@sentry/browser/esm/integrations/index.js
var esm_integrations_namespaceObject = {};
__webpack_require__.r(esm_integrations_namespaceObject);
__webpack_require__.d(esm_integrations_namespaceObject, "GlobalHandlers", function() { return globalhandlers_GlobalHandlers; });
__webpack_require__.d(esm_integrations_namespaceObject, "TryCatch", function() { return trycatch_TryCatch; });
__webpack_require__.d(esm_integrations_namespaceObject, "Breadcrumbs", function() { return breadcrumbs_Breadcrumbs; });
__webpack_require__.d(esm_integrations_namespaceObject, "LinkedErrors", function() { return linkederrors_LinkedErrors; });
__webpack_require__.d(esm_integrations_namespaceObject, "UserAgent", function() { return useragent_UserAgent; });
__webpack_require__.d(esm_integrations_namespaceObject, "Dedupe", function() { return Dedupe; });

// NAMESPACE OBJECT: ./node_modules/@sentry/browser/esm/transports/index.js
var transports_namespaceObject = {};
__webpack_require__.r(transports_namespaceObject);
__webpack_require__.d(transports_namespaceObject, "BaseTransport", function() { return base_BaseTransport; });
__webpack_require__.d(transports_namespaceObject, "FetchTransport", function() { return fetch_FetchTransport; });
__webpack_require__.d(transports_namespaceObject, "XHRTransport", function() { return xhr_XHRTransport; });

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(457);

// EXTERNAL MODULE: ./node_modules/@sentry/types/esm/severity.js
var severity = __webpack_require__(533);

// EXTERNAL MODULE: ./node_modules/@sentry/types/esm/status.js
var esm_status = __webpack_require__(534);

// EXTERNAL MODULE: ./node_modules/@sentry/hub/esm/scope.js
var esm_scope = __webpack_require__(525);

// EXTERNAL MODULE: ./node_modules/@sentry/minimal/esm/index.js
var esm = __webpack_require__(458);

// EXTERNAL MODULE: ./node_modules/@sentry/hub/esm/hub.js + 1 modules
var esm_hub = __webpack_require__(544);

// CONCATENATED MODULE: ./node_modules/@sentry/core/esm/version.js
var SDK_VERSION = '6.8.0';
//# sourceMappingURL=version.js.map
// EXTERNAL MODULE: ./node_modules/@sentry/types/esm/session.js
var esm_session = __webpack_require__(536);

// EXTERNAL MODULE: ./node_modules/@sentry/utils/esm/dsn.js
var esm_dsn = __webpack_require__(538);

// EXTERNAL MODULE: ./node_modules/@sentry/utils/esm/is.js
var is = __webpack_require__(461);

// EXTERNAL MODULE: ./node_modules/@sentry/utils/esm/logger.js
var logger = __webpack_require__(472);

// EXTERNAL MODULE: ./node_modules/@sentry/utils/esm/syncpromise.js
var syncpromise = __webpack_require__(526);

// EXTERNAL MODULE: ./node_modules/@sentry/utils/esm/misc.js
var misc = __webpack_require__(462);

// EXTERNAL MODULE: ./node_modules/@sentry/utils/esm/time.js
var time = __webpack_require__(535);

// EXTERNAL MODULE: ./node_modules/@sentry/utils/esm/object.js
var object = __webpack_require__(527);

// EXTERNAL MODULE: ./node_modules/@sentry/utils/esm/string.js
var string = __webpack_require__(471);

// EXTERNAL MODULE: ./node_modules/@sentry/utils/esm/error.js + 1 modules
var esm_error = __webpack_require__(474);

// CONCATENATED MODULE: ./node_modules/@sentry/core/esm/integration.js



var installedIntegrations = [];
/**
 * @private
 */
function filterDuplicates(integrations) {
    return integrations.reduce(function (acc, integrations) {
        if (acc.every(function (accIntegration) { return integrations.name !== accIntegration.name; })) {
            acc.push(integrations);
        }
        return acc;
    }, []);
}
/** Gets integration to install */
function getIntegrationsToSetup(options) {
    var defaultIntegrations = (options.defaultIntegrations && Object(tslib_es6["g" /* __spread */])(options.defaultIntegrations)) || [];
    var userIntegrations = options.integrations;
    var integrations = Object(tslib_es6["g" /* __spread */])(filterDuplicates(defaultIntegrations));
    if (Array.isArray(userIntegrations)) {
        // Filter out integrations that are also included in user options
        integrations = Object(tslib_es6["g" /* __spread */])(integrations.filter(function (integrations) {
            return userIntegrations.every(function (userIntegration) { return userIntegration.name !== integrations.name; });
        }), filterDuplicates(userIntegrations));
    }
    else if (typeof userIntegrations === 'function') {
        integrations = userIntegrations(integrations);
        integrations = Array.isArray(integrations) ? integrations : [integrations];
    }
    // Make sure that if present, `Debug` integration will always run last
    var integrationsNames = integrations.map(function (i) { return i.name; });
    var alwaysLastToRun = 'Debug';
    if (integrationsNames.indexOf(alwaysLastToRun) !== -1) {
        integrations.push.apply(integrations, Object(tslib_es6["g" /* __spread */])(integrations.splice(integrationsNames.indexOf(alwaysLastToRun), 1)));
    }
    return integrations;
}
/** Setup given integration */
function setupIntegration(integration) {
    if (installedIntegrations.indexOf(integration.name) !== -1) {
        return;
    }
    integration.setupOnce(esm_scope["b" /* addGlobalEventProcessor */], esm_hub["b" /* getCurrentHub */]);
    installedIntegrations.push(integration.name);
    logger["a" /* logger */].log("Integration installed: " + integration.name);
}
/**
 * Given a list of integration instances this installs them all. When `withDefaults` is set to `true` then all default
 * integrations are added unless they were already provided before.
 * @param integrations array of integration instances
 * @param withDefault should enable default integrations
 */
function setupIntegrations(options) {
    var integrations = {};
    getIntegrationsToSetup(options).forEach(function (integration) {
        integrations[integration.name] = integration;
        setupIntegration(integration);
    });
    return integrations;
}
//# sourceMappingURL=integration.js.map
// CONCATENATED MODULE: ./node_modules/@sentry/core/esm/baseclient.js

/* eslint-disable max-lines */




/**
 * Base implementation for all JavaScript SDK clients.
 *
 * Call the constructor with the corresponding backend constructor and options
 * specific to the client subclass. To access these options later, use
 * {@link Client.getOptions}. Also, the Backend instance is available via
 * {@link Client.getBackend}.
 *
 * If a Dsn is specified in the options, it will be parsed and stored. Use
 * {@link Client.getDsn} to retrieve the Dsn at any moment. In case the Dsn is
 * invalid, the constructor will throw a {@link SentryException}. Note that
 * without a valid Dsn, the SDK will not send any events to Sentry.
 *
 * Before sending an event via the backend, it is passed through
 * {@link BaseClient._prepareEvent} to add SDK information and scope data
 * (breadcrumbs and context). To add more custom information, override this
 * method and extend the resulting prepared event.
 *
 * To issue automatically created events (e.g. via instrumentation), use
 * {@link Client.captureEvent}. It will prepare the event and pass it through
 * the callback lifecycle. To issue auto-breadcrumbs, use
 * {@link Client.addBreadcrumb}.
 *
 * @example
 * class NodeClient extends BaseClient<NodeBackend, NodeOptions> {
 *   public constructor(options: NodeOptions) {
 *     super(NodeBackend, options);
 *   }
 *
 *   // ...
 * }
 */
var baseclient_BaseClient = /** @class */ (function () {
    /**
     * Initializes this client instance.
     *
     * @param backendClass A constructor function to create the backend.
     * @param options Options for the client.
     */
    function BaseClient(backendClass, options) {
        /** Array of used integrations. */
        this._integrations = {};
        /** Number of call being processed */
        this._processing = 0;
        this._backend = new backendClass(options);
        this._options = options;
        if (options.dsn) {
            this._dsn = new esm_dsn["a" /* Dsn */](options.dsn);
        }
    }
    /**
     * @inheritDoc
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
    BaseClient.prototype.captureException = function (exception, hint, scope) {
        var _this = this;
        var eventId = hint && hint.event_id;
        this._process(this._getBackend()
            .eventFromException(exception, hint)
            .then(function (event) { return _this._captureEvent(event, hint, scope); })
            .then(function (result) {
            eventId = result;
        }));
        return eventId;
    };
    /**
     * @inheritDoc
     */
    BaseClient.prototype.captureMessage = function (message, level, hint, scope) {
        var _this = this;
        var eventId = hint && hint.event_id;
        var promisedEvent = Object(is["i" /* isPrimitive */])(message)
            ? this._getBackend().eventFromMessage(String(message), level, hint)
            : this._getBackend().eventFromException(message, hint);
        this._process(promisedEvent
            .then(function (event) { return _this._captureEvent(event, hint, scope); })
            .then(function (result) {
            eventId = result;
        }));
        return eventId;
    };
    /**
     * @inheritDoc
     */
    BaseClient.prototype.captureEvent = function (event, hint, scope) {
        var eventId = hint && hint.event_id;
        this._process(this._captureEvent(event, hint, scope).then(function (result) {
            eventId = result;
        }));
        return eventId;
    };
    /**
     * @inheritDoc
     */
    BaseClient.prototype.captureSession = function (session) {
        if (!this._isEnabled()) {
            logger["a" /* logger */].warn('SDK not enabled, will not capture session.');
            return;
        }
        if (!(typeof session.release === 'string')) {
            logger["a" /* logger */].warn('Discarded session because of missing or non-string release');
        }
        else {
            this._sendSession(session);
            // After sending, we set init false to indicate it's not the first occurrence
            session.update({ init: false });
        }
    };
    /**
     * @inheritDoc
     */
    BaseClient.prototype.getDsn = function () {
        return this._dsn;
    };
    /**
     * @inheritDoc
     */
    BaseClient.prototype.getOptions = function () {
        return this._options;
    };
    /**
     * @inheritDoc
     */
    BaseClient.prototype.flush = function (timeout) {
        var _this = this;
        return this._isClientProcessing(timeout).then(function (ready) {
            return _this._getBackend()
                .getTransport()
                .close(timeout)
                .then(function (transportFlushed) { return ready && transportFlushed; });
        });
    };
    /**
     * @inheritDoc
     */
    BaseClient.prototype.close = function (timeout) {
        var _this = this;
        return this.flush(timeout).then(function (result) {
            _this.getOptions().enabled = false;
            return result;
        });
    };
    /**
     * Sets up the integrations
     */
    BaseClient.prototype.setupIntegrations = function () {
        if (this._isEnabled()) {
            this._integrations = setupIntegrations(this._options);
        }
    };
    /**
     * @inheritDoc
     */
    BaseClient.prototype.getIntegration = function (integration) {
        try {
            return this._integrations[integration.id] || null;
        }
        catch (_oO) {
            logger["a" /* logger */].warn("Cannot retrieve integration " + integration.id + " from the current Client");
            return null;
        }
    };
    /** Updates existing session based on the provided event */
    BaseClient.prototype._updateSessionFromEvent = function (session, event) {
        var e_1, _a;
        var crashed = false;
        var errored = false;
        var exceptions = event.exception && event.exception.values;
        if (exceptions) {
            errored = true;
            try {
                for (var exceptions_1 = Object(tslib_es6["h" /* __values */])(exceptions), exceptions_1_1 = exceptions_1.next(); !exceptions_1_1.done; exceptions_1_1 = exceptions_1.next()) {
                    var ex = exceptions_1_1.value;
                    var mechanism = ex.mechanism;
                    if (mechanism && mechanism.handled === false) {
                        crashed = true;
                        break;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (exceptions_1_1 && !exceptions_1_1.done && (_a = exceptions_1.return)) _a.call(exceptions_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        // A session is updated and that session update is sent in only one of the two following scenarios:
        // 1. Session with non terminal status and 0 errors + an error occurred -> Will set error count to 1 and send update
        // 2. Session with non terminal status and 1 error + a crash occurred -> Will set status crashed and send update
        var sessionNonTerminal = session.status === esm_session["a" /* SessionStatus */].Ok;
        var shouldUpdateAndSend = (sessionNonTerminal && session.errors === 0) || (sessionNonTerminal && crashed);
        if (shouldUpdateAndSend) {
            session.update(Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, (crashed && { status: esm_session["a" /* SessionStatus */].Crashed })), { errors: session.errors || Number(errored || crashed) }));
            this.captureSession(session);
        }
    };
    /** Deliver captured session to Sentry */
    BaseClient.prototype._sendSession = function (session) {
        this._getBackend().sendSession(session);
    };
    /** Waits for the client to be done with processing. */
    BaseClient.prototype._isClientProcessing = function (timeout) {
        var _this = this;
        return new syncpromise["a" /* SyncPromise */](function (resolve) {
            var ticked = 0;
            var tick = 1;
            var interval = setInterval(function () {
                if (_this._processing == 0) {
                    clearInterval(interval);
                    resolve(true);
                }
                else {
                    ticked += tick;
                    if (timeout && ticked >= timeout) {
                        clearInterval(interval);
                        resolve(false);
                    }
                }
            }, tick);
        });
    };
    /** Returns the current backend. */
    BaseClient.prototype._getBackend = function () {
        return this._backend;
    };
    /** Determines whether this SDK is enabled and a valid Dsn is present. */
    BaseClient.prototype._isEnabled = function () {
        return this.getOptions().enabled !== false && this._dsn !== undefined;
    };
    /**
     * Adds common information to events.
     *
     * The information includes release and environment from `options`,
     * breadcrumbs and context (extra, tags and user) from the scope.
     *
     * Information that is already present in the event is never overwritten. For
     * nested objects, such as the context, keys are merged.
     *
     * @param event The original event.
     * @param hint May contain additional information about the original exception.
     * @param scope A scope containing event metadata.
     * @returns A new event with more information.
     */
    BaseClient.prototype._prepareEvent = function (event, scope, hint) {
        var _this = this;
        var _a = this.getOptions().normalizeDepth, normalizeDepth = _a === void 0 ? 3 : _a;
        var prepared = Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, event), { event_id: event.event_id || (hint && hint.event_id ? hint.event_id : Object(misc["i" /* uuid4 */])()), timestamp: event.timestamp || Object(time["a" /* dateTimestampInSeconds */])() });
        this._applyClientOptions(prepared);
        this._applyIntegrationsMetadata(prepared);
        // If we have scope given to us, use it as the base for further modifications.
        // This allows us to prevent unnecessary copying of data if `captureContext` is not provided.
        var finalScope = scope;
        if (hint && hint.captureContext) {
            finalScope = esm_scope["a" /* Scope */].clone(finalScope).update(hint.captureContext);
        }
        // We prepare the result here with a resolved Event.
        var result = syncpromise["a" /* SyncPromise */].resolve(prepared);
        // This should be the last thing called, since we want that
        // {@link Hub.addEventProcessor} gets the finished prepared event.
        if (finalScope) {
            // In case we have a hub we reassign it.
            result = finalScope.applyToEvent(prepared, hint);
        }
        return result.then(function (evt) {
            if (typeof normalizeDepth === 'number' && normalizeDepth > 0) {
                return _this._normalizeEvent(evt, normalizeDepth);
            }
            return evt;
        });
    };
    /**
     * Applies `normalize` function on necessary `Event` attributes to make them safe for serialization.
     * Normalized keys:
     * - `breadcrumbs.data`
     * - `user`
     * - `contexts`
     * - `extra`
     * @param event Event
     * @returns Normalized event
     */
    BaseClient.prototype._normalizeEvent = function (event, depth) {
        if (!event) {
            return null;
        }
        var normalized = Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, event), (event.breadcrumbs && {
            breadcrumbs: event.breadcrumbs.map(function (b) { return (Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, b), (b.data && {
                data: Object(object["d" /* normalize */])(b.data, depth),
            }))); }),
        })), (event.user && {
            user: Object(object["d" /* normalize */])(event.user, depth),
        })), (event.contexts && {
            contexts: Object(object["d" /* normalize */])(event.contexts, depth),
        })), (event.extra && {
            extra: Object(object["d" /* normalize */])(event.extra, depth),
        }));
        // event.contexts.trace stores information about a Transaction. Similarly,
        // event.spans[] stores information about child Spans. Given that a
        // Transaction is conceptually a Span, normalization should apply to both
        // Transactions and Spans consistently.
        // For now the decision is to skip normalization of Transactions and Spans,
        // so this block overwrites the normalized event to add back the original
        // Transaction information prior to normalization.
        if (event.contexts && event.contexts.trace) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            normalized.contexts.trace = event.contexts.trace;
        }
        return normalized;
    };
    /**
     *  Enhances event using the client configuration.
     *  It takes care of all "static" values like environment, release and `dist`,
     *  as well as truncating overly long values.
     * @param event event instance to be enhanced
     */
    BaseClient.prototype._applyClientOptions = function (event) {
        var options = this.getOptions();
        var environment = options.environment, release = options.release, dist = options.dist, _a = options.maxValueLength, maxValueLength = _a === void 0 ? 250 : _a;
        if (!('environment' in event)) {
            event.environment = 'environment' in options ? environment : 'production';
        }
        if (event.release === undefined && release !== undefined) {
            event.release = release;
        }
        if (event.dist === undefined && dist !== undefined) {
            event.dist = dist;
        }
        if (event.message) {
            event.message = Object(string["d" /* truncate */])(event.message, maxValueLength);
        }
        var exception = event.exception && event.exception.values && event.exception.values[0];
        if (exception && exception.value) {
            exception.value = Object(string["d" /* truncate */])(exception.value, maxValueLength);
        }
        var request = event.request;
        if (request && request.url) {
            request.url = Object(string["d" /* truncate */])(request.url, maxValueLength);
        }
    };
    /**
     * This function adds all used integrations to the SDK info in the event.
     * @param event The event that will be filled with all integrations.
     */
    BaseClient.prototype._applyIntegrationsMetadata = function (event) {
        var integrationsArray = Object.keys(this._integrations);
        if (integrationsArray.length > 0) {
            event.sdk = event.sdk || {};
            event.sdk.integrations = Object(tslib_es6["g" /* __spread */])((event.sdk.integrations || []), integrationsArray);
        }
    };
    /**
     * Tells the backend to send this event
     * @param event The Sentry event to send
     */
    BaseClient.prototype._sendEvent = function (event) {
        this._getBackend().sendEvent(event);
    };
    /**
     * Processes the event and logs an error in case of rejection
     * @param event
     * @param hint
     * @param scope
     */
    BaseClient.prototype._captureEvent = function (event, hint, scope) {
        return this._processEvent(event, hint, scope).then(function (finalEvent) {
            return finalEvent.event_id;
        }, function (reason) {
            logger["a" /* logger */].error(reason);
            return undefined;
        });
    };
    /**
     * Processes an event (either error or message) and sends it to Sentry.
     *
     * This also adds breadcrumbs and context information to the event. However,
     * platform specific meta data (such as the User's IP address) must be added
     * by the SDK implementor.
     *
     *
     * @param event The event to send to Sentry.
     * @param hint May contain additional information about the original exception.
     * @param scope A scope containing event metadata.
     * @returns A SyncPromise that resolves with the event or rejects in case event was/will not be send.
     */
    BaseClient.prototype._processEvent = function (event, hint, scope) {
        var _this = this;
        // eslint-disable-next-line @typescript-eslint/unbound-method
        var _a = this.getOptions(), beforeSend = _a.beforeSend, sampleRate = _a.sampleRate;
        if (!this._isEnabled()) {
            return syncpromise["a" /* SyncPromise */].reject(new esm_error["a" /* SentryError */]('SDK not enabled, will not capture event.'));
        }
        var isTransaction = event.type === 'transaction';
        // 1.0 === 100% events are sent
        // 0.0 === 0% events are sent
        // Sampling for transaction happens somewhere else
        if (!isTransaction && typeof sampleRate === 'number' && Math.random() > sampleRate) {
            return syncpromise["a" /* SyncPromise */].reject(new esm_error["a" /* SentryError */]("Discarding event because it's not included in the random sample (sampling rate = " + sampleRate + ")"));
        }
        return this._prepareEvent(event, scope, hint)
            .then(function (prepared) {
            if (prepared === null) {
                throw new esm_error["a" /* SentryError */]('An event processor returned null, will not send event.');
            }
            var isInternalException = hint && hint.data && hint.data.__sentry__ === true;
            if (isInternalException || isTransaction || !beforeSend) {
                return prepared;
            }
            var beforeSendResult = beforeSend(prepared, hint);
            return _this._ensureBeforeSendRv(beforeSendResult);
        })
            .then(function (processedEvent) {
            if (processedEvent === null) {
                throw new esm_error["a" /* SentryError */]('`beforeSend` returned `null`, will not send event.');
            }
            var session = scope && scope.getSession && scope.getSession();
            if (!isTransaction && session) {
                _this._updateSessionFromEvent(session, processedEvent);
            }
            _this._sendEvent(processedEvent);
            return processedEvent;
        })
            .then(null, function (reason) {
            if (reason instanceof esm_error["a" /* SentryError */]) {
                throw reason;
            }
            _this.captureException(reason, {
                data: {
                    __sentry__: true,
                },
                originalException: reason,
            });
            throw new esm_error["a" /* SentryError */]("Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: " + reason);
        });
    };
    /**
     * Occupies the client with processing and event
     */
    BaseClient.prototype._process = function (promise) {
        var _this = this;
        this._processing += 1;
        void promise.then(function (value) {
            _this._processing -= 1;
            return value;
        }, function (reason) {
            _this._processing -= 1;
            return reason;
        });
    };
    /**
     * Verifies that return value of configured `beforeSend` is of expected type.
     */
    BaseClient.prototype._ensureBeforeSendRv = function (rv) {
        var nullErr = '`beforeSend` method has to return `null` or a valid event.';
        if (Object(is["m" /* isThenable */])(rv)) {
            return rv.then(function (event) {
                if (!(Object(is["h" /* isPlainObject */])(event) || event === null)) {
                    throw new esm_error["a" /* SentryError */](nullErr);
                }
                return event;
            }, function (e) {
                throw new esm_error["a" /* SentryError */]("beforeSend rejected with " + e);
            });
        }
        else if (!(Object(is["h" /* isPlainObject */])(rv) || rv === null)) {
            throw new esm_error["a" /* SentryError */](nullErr);
        }
        return rv;
    };
    return BaseClient;
}());

//# sourceMappingURL=baseclient.js.map
// CONCATENATED MODULE: ./node_modules/@sentry/core/esm/transports/noop.js


/** Noop transport */
var noop_NoopTransport = /** @class */ (function () {
    function NoopTransport() {
    }
    /**
     * @inheritDoc
     */
    NoopTransport.prototype.sendEvent = function (_) {
        return syncpromise["a" /* SyncPromise */].resolve({
            reason: "NoopTransport: Event has been skipped because no Dsn is configured.",
            status: esm_status["a" /* Status */].Skipped,
        });
    };
    /**
     * @inheritDoc
     */
    NoopTransport.prototype.close = function (_) {
        return syncpromise["a" /* SyncPromise */].resolve(true);
    };
    return NoopTransport;
}());

//# sourceMappingURL=noop.js.map
// CONCATENATED MODULE: ./node_modules/@sentry/core/esm/basebackend.js


/**
 * This is the base implemention of a Backend.
 * @hidden
 */
var basebackend_BaseBackend = /** @class */ (function () {
    /** Creates a new backend instance. */
    function BaseBackend(options) {
        this._options = options;
        if (!this._options.dsn) {
            logger["a" /* logger */].warn('No DSN provided, backend will not do anything.');
        }
        this._transport = this._setupTransport();
    }
    /**
     * @inheritDoc
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
    BaseBackend.prototype.eventFromException = function (_exception, _hint) {
        throw new esm_error["a" /* SentryError */]('Backend has to implement `eventFromException` method');
    };
    /**
     * @inheritDoc
     */
    BaseBackend.prototype.eventFromMessage = function (_message, _level, _hint) {
        throw new esm_error["a" /* SentryError */]('Backend has to implement `eventFromMessage` method');
    };
    /**
     * @inheritDoc
     */
    BaseBackend.prototype.sendEvent = function (event) {
        void this._transport.sendEvent(event).then(null, function (reason) {
            logger["a" /* logger */].error("Error while sending event: " + reason);
        });
    };
    /**
     * @inheritDoc
     */
    BaseBackend.prototype.sendSession = function (session) {
        if (!this._transport.sendSession) {
            logger["a" /* logger */].warn("Dropping session because custom transport doesn't implement sendSession");
            return;
        }
        void this._transport.sendSession(session).then(null, function (reason) {
            logger["a" /* logger */].error("Error while sending session: " + reason);
        });
    };
    /**
     * @inheritDoc
     */
    BaseBackend.prototype.getTransport = function () {
        return this._transport;
    };
    /**
     * Sets up the transport so it can be used later to send requests.
     */
    BaseBackend.prototype._setupTransport = function () {
        return new noop_NoopTransport();
    };
    return BaseBackend;
}());

//# sourceMappingURL=basebackend.js.map
// EXTERNAL MODULE: ./node_modules/@sentry/utils/esm/supports.js
var supports = __webpack_require__(530);

// CONCATENATED MODULE: ./node_modules/@sentry/browser/esm/tracekit.js
/**
 * This was originally forked from https://github.com/occ/TraceKit, but has since been
 * largely modified and is now maintained as part of Sentry JS SDK.
 */

// global reference to slice
var UNKNOWN_FUNCTION = '?';
// Chromium based browsers: Chrome, Brave, new Opera, new Edge
var chrome = /^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;
// gecko regex: `(?:bundle|\d+\.js)`: `bundle` is for react native, `\d+\.js` also but specifically for ram bundles because it
// generates filenames without a prefix like `file://` the filenames in the stacktrace are just 42.js
// We need this specific case for now because we want no other regex to match.
var gecko = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|capacitor).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i;
var winjs = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
var geckoEval = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
var chromeEval = /\((\S*)(?::(\d+))(?::(\d+))\)/;
// Based on our own mapping pattern - https://github.com/getsentry/sentry/blob/9f08305e09866c8bd6d0c24f5b0aabdd7dd6c59c/src/sentry/lang/javascript/errormapping.py#L83-L108
var reactMinifiedRegexp = /Minified React error #\d+;/i;
/** JSDoc */
// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
function computeStackTrace(ex) {
    var stack = null;
    var popSize = 0;
    if (ex) {
        if (typeof ex.framesToPop === 'number') {
            popSize = ex.framesToPop;
        }
        else if (reactMinifiedRegexp.test(ex.message)) {
            popSize = 1;
        }
    }
    try {
        // This must be tried first because Opera 10 *destroys*
        // its stacktrace property if you try to access the stack
        // property first!!
        stack = computeStackTraceFromStacktraceProp(ex);
        if (stack) {
            return popFrames(stack, popSize);
        }
    }
    catch (e) {
        // no-empty
    }
    try {
        stack = computeStackTraceFromStackProp(ex);
        if (stack) {
            return popFrames(stack, popSize);
        }
    }
    catch (e) {
        // no-empty
    }
    return {
        message: extractMessage(ex),
        name: ex && ex.name,
        stack: [],
        failed: true,
    };
}
/** JSDoc */
// eslint-disable-next-line @typescript-eslint/no-explicit-any, complexity
function computeStackTraceFromStackProp(ex) {
    if (!ex || !ex.stack) {
        return null;
    }
    var stack = [];
    var lines = ex.stack.split('\n');
    var isEval;
    var submatch;
    var parts;
    var element;
    for (var i = 0; i < lines.length; ++i) {
        if ((parts = chrome.exec(lines[i]))) {
            var isNative = parts[2] && parts[2].indexOf('native') === 0; // start of line
            isEval = parts[2] && parts[2].indexOf('eval') === 0; // start of line
            if (isEval && (submatch = chromeEval.exec(parts[2]))) {
                // throw out eval line/column and use top-most line/column number
                parts[2] = submatch[1]; // url
                parts[3] = submatch[2]; // line
                parts[4] = submatch[3]; // column
            }
            // Arpad: Working with the regexp above is super painful. it is quite a hack, but just stripping the `address at `
            // prefix here seems like the quickest solution for now.
            var url = parts[2] && parts[2].indexOf('address at ') === 0 ? parts[2].substr('address at '.length) : parts[2];
            // Kamil: One more hack won't hurt us right? Understanding and adding more rules on top of these regexps right now
            // would be way too time consuming. (TODO: Rewrite whole RegExp to be more readable)
            var func = parts[1] || UNKNOWN_FUNCTION;
            var isSafariExtension = func.indexOf('safari-extension') !== -1;
            var isSafariWebExtension = func.indexOf('safari-web-extension') !== -1;
            if (isSafariExtension || isSafariWebExtension) {
                func = func.indexOf('@') !== -1 ? func.split('@')[0] : UNKNOWN_FUNCTION;
                url = isSafariExtension ? "safari-extension:" + url : "safari-web-extension:" + url;
            }
            element = {
                url: url,
                func: func,
                args: isNative ? [parts[2]] : [],
                line: parts[3] ? +parts[3] : null,
                column: parts[4] ? +parts[4] : null,
            };
        }
        else if ((parts = winjs.exec(lines[i]))) {
            element = {
                url: parts[2],
                func: parts[1] || UNKNOWN_FUNCTION,
                args: [],
                line: +parts[3],
                column: parts[4] ? +parts[4] : null,
            };
        }
        else if ((parts = gecko.exec(lines[i]))) {
            isEval = parts[3] && parts[3].indexOf(' > eval') > -1;
            if (isEval && (submatch = geckoEval.exec(parts[3]))) {
                // throw out eval line/column and use top-most line number
                parts[1] = parts[1] || "eval";
                parts[3] = submatch[1];
                parts[4] = submatch[2];
                parts[5] = ''; // no column when eval
            }
            else if (i === 0 && !parts[5] && ex.columnNumber !== void 0) {
                // FireFox uses this awesome columnNumber property for its top frame
                // Also note, Firefox's column number is 0-based and everything else expects 1-based,
                // so adding 1
                // NOTE: this hack doesn't work if top-most frame is eval
                stack[0].column = ex.columnNumber + 1;
            }
            element = {
                url: parts[3],
                func: parts[1] || UNKNOWN_FUNCTION,
                args: parts[2] ? parts[2].split(',') : [],
                line: parts[4] ? +parts[4] : null,
                column: parts[5] ? +parts[5] : null,
            };
        }
        else {
            continue;
        }
        if (!element.func && element.line) {
            element.func = UNKNOWN_FUNCTION;
        }
        stack.push(element);
    }
    if (!stack.length) {
        return null;
    }
    return {
        message: extractMessage(ex),
        name: ex.name,
        stack: stack,
    };
}
/** JSDoc */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function computeStackTraceFromStacktraceProp(ex) {
    if (!ex || !ex.stacktrace) {
        return null;
    }
    // Access and store the stacktrace property before doing ANYTHING
    // else to it because Opera is not very good at providing it
    // reliably in other circumstances.
    var stacktrace = ex.stacktrace;
    var opera10Regex = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i;
    var opera11Regex = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\((.*)\))? in (.*):\s*$/i;
    var lines = stacktrace.split('\n');
    var stack = [];
    var parts;
    for (var line = 0; line < lines.length; line += 2) {
        var element = null;
        if ((parts = opera10Regex.exec(lines[line]))) {
            element = {
                url: parts[2],
                func: parts[3],
                args: [],
                line: +parts[1],
                column: null,
            };
        }
        else if ((parts = opera11Regex.exec(lines[line]))) {
            element = {
                url: parts[6],
                func: parts[3] || parts[4],
                args: parts[5] ? parts[5].split(',') : [],
                line: +parts[1],
                column: +parts[2],
            };
        }
        if (element) {
            if (!element.func && element.line) {
                element.func = UNKNOWN_FUNCTION;
            }
            stack.push(element);
        }
    }
    if (!stack.length) {
        return null;
    }
    return {
        message: extractMessage(ex),
        name: ex.name,
        stack: stack,
    };
}
/** Remove N number of frames from the stack */
function popFrames(stacktrace, popSize) {
    try {
        return Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, stacktrace), { stack: stacktrace.stack.slice(popSize) });
    }
    catch (e) {
        return stacktrace;
    }
}
/**
 * There are cases where stacktrace.message is an Event object
 * https://github.com/getsentry/sentry-javascript/issues/1949
 * In this specific case we try to extract stacktrace.message.error.message
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function extractMessage(ex) {
    var message = ex && ex.message;
    if (!message) {
        return 'No error message';
    }
    if (message.error && typeof message.error.message === 'string') {
        return message.error.message;
    }
    return message;
}
//# sourceMappingURL=tracekit.js.map
// CONCATENATED MODULE: ./node_modules/@sentry/browser/esm/parsers.js


var STACKTRACE_LIMIT = 50;
/**
 * This function creates an exception from an TraceKitStackTrace
 * @param stacktrace TraceKitStackTrace that will be converted to an exception
 * @hidden
 */
function exceptionFromStacktrace(stacktrace) {
    var frames = prepareFramesForEvent(stacktrace.stack);
    var exception = {
        type: stacktrace.name,
        value: stacktrace.message,
    };
    if (frames && frames.length) {
        exception.stacktrace = { frames: frames };
    }
    if (exception.type === undefined && exception.value === '') {
        exception.value = 'Unrecoverable error caught';
    }
    return exception;
}
/**
 * @hidden
 */
function eventFromPlainObject(exception, syntheticException, rejection) {
    var event = {
        exception: {
            values: [
                {
                    type: Object(is["f" /* isEvent */])(exception) ? exception.constructor.name : rejection ? 'UnhandledRejection' : 'Error',
                    value: "Non-Error " + (rejection ? 'promise rejection' : 'exception') + " captured with keys: " + Object(object["b" /* extractExceptionKeysForMessage */])(exception),
                },
            ],
        },
        extra: {
            __serialized__: Object(object["e" /* normalizeToSize */])(exception),
        },
    };
    if (syntheticException) {
        var stacktrace = computeStackTrace(syntheticException);
        var frames_1 = prepareFramesForEvent(stacktrace.stack);
        event.stacktrace = {
            frames: frames_1,
        };
    }
    return event;
}
/**
 * @hidden
 */
function eventFromStacktrace(stacktrace) {
    var exception = exceptionFromStacktrace(stacktrace);
    return {
        exception: {
            values: [exception],
        },
    };
}
/**
 * @hidden
 */
function prepareFramesForEvent(stack) {
    if (!stack || !stack.length) {
        return [];
    }
    var localStack = stack;
    var firstFrameFunction = localStack[0].func || '';
    var lastFrameFunction = localStack[localStack.length - 1].func || '';
    // If stack starts with one of our API calls, remove it (starts, meaning it's the top of the stack - aka last call)
    if (firstFrameFunction.indexOf('captureMessage') !== -1 || firstFrameFunction.indexOf('captureException') !== -1) {
        localStack = localStack.slice(1);
    }
    // If stack ends with one of our internal API calls, remove it (ends, meaning it's the bottom of the stack - aka top-most call)
    if (lastFrameFunction.indexOf('sentryWrapped') !== -1) {
        localStack = localStack.slice(0, -1);
    }
    // The frame where the crash happened, should be the last entry in the array
    return localStack
        .slice(0, STACKTRACE_LIMIT)
        .map(function (frame) { return ({
        colno: frame.column === null ? undefined : frame.column,
        filename: frame.url || localStack[0].url,
        function: frame.func || '?',
        in_app: true,
        lineno: frame.line === null ? undefined : frame.line,
    }); })
        .reverse();
}
//# sourceMappingURL=parsers.js.map
// CONCATENATED MODULE: ./node_modules/@sentry/browser/esm/eventbuilder.js





/**
 * Builds and Event from a Exception
 * @hidden
 */
function eventFromException(options, exception, hint) {
    var syntheticException = (hint && hint.syntheticException) || undefined;
    var event = eventFromUnknownInput(exception, syntheticException, {
        attachStacktrace: options.attachStacktrace,
    });
    Object(misc["a" /* addExceptionMechanism */])(event, {
        handled: true,
        type: 'generic',
    });
    event.level = severity["a" /* Severity */].Error;
    if (hint && hint.event_id) {
        event.event_id = hint.event_id;
    }
    return syncpromise["a" /* SyncPromise */].resolve(event);
}
/**
 * Builds and Event from a Message
 * @hidden
 */
function eventFromMessage(options, message, level, hint) {
    if (level === void 0) { level = severity["a" /* Severity */].Info; }
    var syntheticException = (hint && hint.syntheticException) || undefined;
    var event = eventFromString(message, syntheticException, {
        attachStacktrace: options.attachStacktrace,
    });
    event.level = level;
    if (hint && hint.event_id) {
        event.event_id = hint.event_id;
    }
    return syncpromise["a" /* SyncPromise */].resolve(event);
}
/**
 * @hidden
 */
function eventFromUnknownInput(exception, syntheticException, options) {
    if (options === void 0) { options = {}; }
    var event;
    if (Object(is["e" /* isErrorEvent */])(exception) && exception.error) {
        // If it is an ErrorEvent with `error` property, extract it to get actual Error
        var errorEvent = exception;
        // eslint-disable-next-line no-param-reassign
        exception = errorEvent.error;
        event = eventFromStacktrace(computeStackTrace(exception));
        return event;
    }
    if (Object(is["a" /* isDOMError */])(exception) || Object(is["b" /* isDOMException */])(exception)) {
        // If it is a DOMError or DOMException (which are legacy APIs, but still supported in some browsers)
        // then we just extract the name, code, and message, as they don't provide anything else
        // https://developer.mozilla.org/en-US/docs/Web/API/DOMError
        // https://developer.mozilla.org/en-US/docs/Web/API/DOMException
        var domException = exception;
        var name_1 = domException.name || (Object(is["a" /* isDOMError */])(domException) ? 'DOMError' : 'DOMException');
        var message = domException.message ? name_1 + ": " + domException.message : name_1;
        event = eventFromString(message, syntheticException, options);
        Object(misc["b" /* addExceptionTypeValue */])(event, message);
        if ('code' in domException) {
            event.tags = Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, event.tags), { 'DOMException.code': "" + domException.code });
        }
        return event;
    }
    if (Object(is["d" /* isError */])(exception)) {
        // we have a real Error object, do nothing
        event = eventFromStacktrace(computeStackTrace(exception));
        return event;
    }
    if (Object(is["h" /* isPlainObject */])(exception) || Object(is["f" /* isEvent */])(exception)) {
        // If it is plain Object or Event, serialize it manually and extract options
        // This will allow us to group events based on top-level keys
        // which is much better than creating new group when any key/value change
        var objectException = exception;
        event = eventFromPlainObject(objectException, syntheticException, options.rejection);
        Object(misc["a" /* addExceptionMechanism */])(event, {
            synthetic: true,
        });
        return event;
    }
    // If none of previous checks were valid, then it means that it's not:
    // - an instance of DOMError
    // - an instance of DOMException
    // - an instance of Event
    // - an instance of Error
    // - a valid ErrorEvent (one with an error property)
    // - a plain Object
    //
    // So bail out and capture it as a simple message:
    event = eventFromString(exception, syntheticException, options);
    Object(misc["b" /* addExceptionTypeValue */])(event, "" + exception, undefined);
    Object(misc["a" /* addExceptionMechanism */])(event, {
        synthetic: true,
    });
    return event;
}
/**
 * @hidden
 */
function eventFromString(input, syntheticException, options) {
    if (options === void 0) { options = {}; }
    var event = {
        message: input,
    };
    if (options.attachStacktrace && syntheticException) {
        var stacktrace = computeStackTrace(syntheticException);
        var frames_1 = prepareFramesForEvent(stacktrace.stack);
        event.stacktrace = {
            frames: frames_1,
        };
    }
    return event;
}
//# sourceMappingURL=eventbuilder.js.map
// CONCATENATED MODULE: ./node_modules/@sentry/core/esm/request.js

/** Extract sdk info from from the API metadata */
function getSdkMetadataForEnvelopeHeader(api) {
    if (!api.metadata || !api.metadata.sdk) {
        return;
    }
    var _a = api.metadata.sdk, name = _a.name, version = _a.version;
    return { name: name, version: version };
}
/**
 * Apply SdkInfo (name, version, packages, integrations) to the corresponding event key.
 * Merge with existing data if any.
 **/
function enhanceEventWithSdkInfo(event, sdkInfo) {
    if (!sdkInfo) {
        return event;
    }
    event.sdk = event.sdk || {};
    event.sdk.name = event.sdk.name || sdkInfo.name;
    event.sdk.version = event.sdk.version || sdkInfo.version;
    event.sdk.integrations = Object(tslib_es6["g" /* __spread */])((event.sdk.integrations || []), (sdkInfo.integrations || []));
    event.sdk.packages = Object(tslib_es6["g" /* __spread */])((event.sdk.packages || []), (sdkInfo.packages || []));
    return event;
}
/** Creates a SentryRequest from a Session. */
function sessionToSentryRequest(session, api) {
    var sdkInfo = getSdkMetadataForEnvelopeHeader(api);
    var envelopeHeaders = JSON.stringify(Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({ sent_at: new Date().toISOString() }, (sdkInfo && { sdk: sdkInfo })), (api.forceEnvelope() && { dsn: api.getDsn().toString() })));
    // I know this is hacky but we don't want to add `session` to request type since it's never rate limited
    var type = 'aggregates' in session ? 'sessions' : 'session';
    var itemHeaders = JSON.stringify({
        type: type,
    });
    return {
        body: envelopeHeaders + "\n" + itemHeaders + "\n" + JSON.stringify(session),
        type: type,
        url: api.getEnvelopeEndpointWithUrlEncodedAuth(),
    };
}
/** Creates a SentryRequest from an event. */
function eventToSentryRequest(event, api) {
    var sdkInfo = getSdkMetadataForEnvelopeHeader(api);
    var eventType = event.type || 'event';
    var useEnvelope = eventType === 'transaction' || api.forceEnvelope();
    var _a = event.debug_meta || {}, transactionSampling = _a.transactionSampling, metadata = Object(tslib_es6["f" /* __rest */])(_a, ["transactionSampling"]);
    var _b = transactionSampling || {}, samplingMethod = _b.method, sampleRate = _b.rate;
    if (Object.keys(metadata).length === 0) {
        delete event.debug_meta;
    }
    else {
        event.debug_meta = metadata;
    }
    var req = {
        body: JSON.stringify(sdkInfo ? enhanceEventWithSdkInfo(event, api.metadata.sdk) : event),
        type: eventType,
        url: useEnvelope ? api.getEnvelopeEndpointWithUrlEncodedAuth() : api.getStoreEndpointWithUrlEncodedAuth(),
    };
    // https://develop.sentry.dev/sdk/envelopes/
    // Since we don't need to manipulate envelopes nor store them, there is no
    // exported concept of an Envelope with operations including serialization and
    // deserialization. Instead, we only implement a minimal subset of the spec to
    // serialize events inline here.
    if (useEnvelope) {
        var envelopeHeaders = JSON.stringify(Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({ event_id: event.event_id, sent_at: new Date().toISOString() }, (sdkInfo && { sdk: sdkInfo })), (api.forceEnvelope() && { dsn: api.getDsn().toString() })));
        var itemHeaders = JSON.stringify({
            type: eventType,
            // TODO: Right now, sampleRate may or may not be defined (it won't be in the cases of inheritance and
            // explicitly-set sampling decisions). Are we good with that?
            sample_rates: [{ id: samplingMethod, rate: sampleRate }],
        });
        // The trailing newline is optional. We intentionally don't send it to avoid
        // sending unnecessary bytes.
        //
        // const envelope = `${envelopeHeaders}\n${itemHeaders}\n${req.body}\n`;
        var envelope = envelopeHeaders + "\n" + itemHeaders + "\n" + req.body;
        req.body = envelope;
    }
    return req;
}
//# sourceMappingURL=request.js.map
// CONCATENATED MODULE: ./node_modules/@sentry/core/esm/api.js

var SENTRY_API_VERSION = '7';
/**
 * Helper class to provide urls, headers and metadata that can be used to form
 * different types of requests to Sentry endpoints.
 * Supports both envelopes and regular event requests.
 **/
var api_API = /** @class */ (function () {
    /** Create a new instance of API */
    function API(dsn, metadata, tunnel) {
        if (metadata === void 0) { metadata = {}; }
        this.dsn = dsn;
        this._dsnObject = new esm_dsn["a" /* Dsn */](dsn);
        this.metadata = metadata;
        this._tunnel = tunnel;
    }
    /** Returns the Dsn object. */
    API.prototype.getDsn = function () {
        return this._dsnObject;
    };
    /** Does this transport force envelopes? */
    API.prototype.forceEnvelope = function () {
        return !!this._tunnel;
    };
    /** Returns the prefix to construct Sentry ingestion API endpoints. */
    API.prototype.getBaseApiEndpoint = function () {
        var dsn = this.getDsn();
        var protocol = dsn.protocol ? dsn.protocol + ":" : '';
        var port = dsn.port ? ":" + dsn.port : '';
        return protocol + "//" + dsn.host + port + (dsn.path ? "/" + dsn.path : '') + "/api/";
    };
    /** Returns the store endpoint URL. */
    API.prototype.getStoreEndpoint = function () {
        return this._getIngestEndpoint('store');
    };
    /**
     * Returns the store endpoint URL with auth in the query string.
     *
     * Sending auth as part of the query string and not as custom HTTP headers avoids CORS preflight requests.
     */
    API.prototype.getStoreEndpointWithUrlEncodedAuth = function () {
        return this.getStoreEndpoint() + "?" + this._encodedAuth();
    };
    /**
     * Returns the envelope endpoint URL with auth in the query string.
     *
     * Sending auth as part of the query string and not as custom HTTP headers avoids CORS preflight requests.
     */
    API.prototype.getEnvelopeEndpointWithUrlEncodedAuth = function () {
        if (this.forceEnvelope()) {
            return this._tunnel;
        }
        return this._getEnvelopeEndpoint() + "?" + this._encodedAuth();
    };
    /** Returns only the path component for the store endpoint. */
    API.prototype.getStoreEndpointPath = function () {
        var dsn = this.getDsn();
        return (dsn.path ? "/" + dsn.path : '') + "/api/" + dsn.projectId + "/store/";
    };
    /**
     * Returns an object that can be used in request headers.
     * This is needed for node and the old /store endpoint in sentry
     */
    API.prototype.getRequestHeaders = function (clientName, clientVersion) {
        // CHANGE THIS to use metadata but keep clientName and clientVersion compatible
        var dsn = this.getDsn();
        var header = ["Sentry sentry_version=" + SENTRY_API_VERSION];
        header.push("sentry_client=" + clientName + "/" + clientVersion);
        header.push("sentry_key=" + dsn.publicKey);
        if (dsn.pass) {
            header.push("sentry_secret=" + dsn.pass);
        }
        return {
            'Content-Type': 'application/json',
            'X-Sentry-Auth': header.join(', '),
        };
    };
    /** Returns the url to the report dialog endpoint. */
    API.prototype.getReportDialogEndpoint = function (dialogOptions) {
        if (dialogOptions === void 0) { dialogOptions = {}; }
        var dsn = this.getDsn();
        var endpoint = this.getBaseApiEndpoint() + "embed/error-page/";
        var encodedOptions = [];
        encodedOptions.push("dsn=" + dsn.toString());
        for (var key in dialogOptions) {
            if (key === 'dsn') {
                continue;
            }
            if (key === 'user') {
                if (!dialogOptions.user) {
                    continue;
                }
                if (dialogOptions.user.name) {
                    encodedOptions.push("name=" + encodeURIComponent(dialogOptions.user.name));
                }
                if (dialogOptions.user.email) {
                    encodedOptions.push("email=" + encodeURIComponent(dialogOptions.user.email));
                }
            }
            else {
                encodedOptions.push(encodeURIComponent(key) + "=" + encodeURIComponent(dialogOptions[key]));
            }
        }
        if (encodedOptions.length) {
            return endpoint + "?" + encodedOptions.join('&');
        }
        return endpoint;
    };
    /** Returns the envelope endpoint URL. */
    API.prototype._getEnvelopeEndpoint = function () {
        return this._getIngestEndpoint('envelope');
    };
    /** Returns the ingest API endpoint for target. */
    API.prototype._getIngestEndpoint = function (target) {
        if (this._tunnel) {
            return this._tunnel;
        }
        var base = this.getBaseApiEndpoint();
        var dsn = this.getDsn();
        return "" + base + dsn.projectId + "/" + target + "/";
    };
    /** Returns a URL-encoded string with auth config suitable for a query string. */
    API.prototype._encodedAuth = function () {
        var dsn = this.getDsn();
        var auth = {
            // We send only the minimum set of required information. See
            // https://github.com/getsentry/sentry-javascript/issues/2572.
            sentry_key: dsn.publicKey,
            sentry_version: SENTRY_API_VERSION,
        };
        return Object(object["f" /* urlEncode */])(auth);
    };
    return API;
}());

//# sourceMappingURL=api.js.map
// EXTERNAL MODULE: ./node_modules/@sentry/utils/esm/promisebuffer.js
var promisebuffer = __webpack_require__(537);

// CONCATENATED MODULE: ./node_modules/@sentry/browser/esm/transports/base.js




var CATEGORY_MAPPING = {
    event: 'error',
    transaction: 'transaction',
    session: 'session',
    attachment: 'attachment',
};
/** Base Transport class implementation */
var base_BaseTransport = /** @class */ (function () {
    function BaseTransport(options) {
        this.options = options;
        /** A simple buffer holding all requests. */
        this._buffer = new promisebuffer["a" /* PromiseBuffer */](30);
        /** Locks transport after receiving rate limits in a response */
        this._rateLimits = {};
        this._api = new api_API(options.dsn, options._metadata, options.tunnel);
        // eslint-disable-next-line deprecation/deprecation
        this.url = this._api.getStoreEndpointWithUrlEncodedAuth();
    }
    /**
     * @inheritDoc
     */
    BaseTransport.prototype.sendEvent = function (_) {
        throw new esm_error["a" /* SentryError */]('Transport Class has to implement `sendEvent` method');
    };
    /**
     * @inheritDoc
     */
    BaseTransport.prototype.close = function (timeout) {
        return this._buffer.drain(timeout);
    };
    /**
     * Handle Sentry repsonse for promise-based transports.
     */
    BaseTransport.prototype._handleResponse = function (_a) {
        var requestType = _a.requestType, response = _a.response, headers = _a.headers, resolve = _a.resolve, reject = _a.reject;
        var status = esm_status["a" /* Status */].fromHttpCode(response.status);
        /**
         * "The name is case-insensitive."
         * https://developer.mozilla.org/en-US/docs/Web/API/Headers/get
         */
        var limited = this._handleRateLimit(headers);
        if (limited)
            logger["a" /* logger */].warn("Too many " + requestType + " requests, backing off until: " + this._disabledUntil(requestType));
        if (status === esm_status["a" /* Status */].Success) {
            resolve({ status: status });
            return;
        }
        reject(response);
    };
    /**
     * Gets the time that given category is disabled until for rate limiting
     */
    BaseTransport.prototype._disabledUntil = function (requestType) {
        var category = CATEGORY_MAPPING[requestType];
        return this._rateLimits[category] || this._rateLimits.all;
    };
    /**
     * Checks if a category is rate limited
     */
    BaseTransport.prototype._isRateLimited = function (requestType) {
        return this._disabledUntil(requestType) > new Date(Date.now());
    };
    /**
     * Sets internal _rateLimits from incoming headers. Returns true if headers contains a non-empty rate limiting header.
     */
    BaseTransport.prototype._handleRateLimit = function (headers) {
        var e_1, _a, e_2, _b;
        var now = Date.now();
        var rlHeader = headers['x-sentry-rate-limits'];
        var raHeader = headers['retry-after'];
        if (rlHeader) {
            try {
                // rate limit headers are of the form
                //     <header>,<header>,..
                // where each <header> is of the form
                //     <retry_after>: <categories>: <scope>: <reason_code>
                // where
                //     <retry_after> is a delay in ms
                //     <categories> is the event type(s) (error, transaction, etc) being rate limited and is of the form
                //         <category>;<category>;...
                //     <scope> is what's being limited (org, project, or key) - ignored by SDK
                //     <reason_code> is an arbitrary string like "org_quota" - ignored by SDK
                for (var _c = Object(tslib_es6["h" /* __values */])(rlHeader.trim().split(',')), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var limit = _d.value;
                    var parameters = limit.split(':', 2);
                    var headerDelay = parseInt(parameters[0], 10);
                    var delay = (!isNaN(headerDelay) ? headerDelay : 60) * 1000; // 60sec default
                    try {
                        for (var _e = (e_2 = void 0, Object(tslib_es6["h" /* __values */])(parameters[1].split(';'))), _f = _e.next(); !_f.done; _f = _e.next()) {
                            var category = _f.value;
                            this._rateLimits[category || 'all'] = new Date(now + delay);
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return true;
        }
        else if (raHeader) {
            this._rateLimits.all = new Date(now + Object(misc["g" /* parseRetryAfterHeader */])(now, raHeader));
            return true;
        }
        return false;
    };
    return BaseTransport;
}());

//# sourceMappingURL=base.js.map
// CONCATENATED MODULE: ./node_modules/@sentry/browser/esm/transports/fetch.js




/**
 * A special usecase for incorrectly wrapped Fetch APIs in conjunction with ad-blockers.
 * Whenever someone wraps the Fetch API and returns the wrong promise chain,
 * this chain becomes orphaned and there is no possible way to capture it's rejections
 * other than allowing it bubble up to this very handler. eg.
 *
 * const f = window.fetch;
 * window.fetch = function () {
 *   const p = f.apply(this, arguments);
 *
 *   p.then(function() {
 *     console.log('hi.');
 *   });
 *
 *   return p;
 * }
 *
 * `p.then(function () { ... })` is producing a completely separate promise chain,
 * however, what's returned is `p` - the result of original `fetch` call.
 *
 * This mean, that whenever we use the Fetch API to send our own requests, _and_
 * some ad-blocker blocks it, this orphaned chain will _always_ reject,
 * effectively causing another event to be captured.
 * This makes a whole process become an infinite loop, which we need to somehow
 * deal with, and break it in one way or another.
 *
 * To deal with this issue, we are making sure that we _always_ use the real
 * browser Fetch API, instead of relying on what `window.fetch` exposes.
 * The only downside to this would be missing our own requests as breadcrumbs,
 * but because we are already not doing this, it should be just fine.
 *
 * Possible failed fetch error messages per-browser:
 *
 * Chrome:  Failed to fetch
 * Edge:    Failed to Fetch
 * Firefox: NetworkError when attempting to fetch resource
 * Safari:  resource blocked by content blocker
 */
function getNativeFetchImplementation() {
    /* eslint-disable @typescript-eslint/unbound-method */
    var _a, _b;
    // Fast path to avoid DOM I/O
    var global = Object(misc["e" /* getGlobalObject */])();
    if (Object(supports["a" /* isNativeFetch */])(global.fetch)) {
        return global.fetch.bind(global);
    }
    var document = global.document;
    var fetchImpl = global.fetch;
    // eslint-disable-next-line deprecation/deprecation
    if (typeof ((_a = document) === null || _a === void 0 ? void 0 : _a.createElement) === "function") {
        try {
            var sandbox = document.createElement('iframe');
            sandbox.hidden = true;
            document.head.appendChild(sandbox);
            if ((_b = sandbox.contentWindow) === null || _b === void 0 ? void 0 : _b.fetch) {
                fetchImpl = sandbox.contentWindow.fetch;
            }
            document.head.removeChild(sandbox);
        }
        catch (e) {
            logger["a" /* logger */].warn('Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ', e);
        }
    }
    return fetchImpl.bind(global);
    /* eslint-enable @typescript-eslint/unbound-method */
}
/** `fetch` based transport */
var fetch_FetchTransport = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(FetchTransport, _super);
    function FetchTransport(options, fetchImpl) {
        if (fetchImpl === void 0) { fetchImpl = getNativeFetchImplementation(); }
        var _this = _super.call(this, options) || this;
        _this._fetch = fetchImpl;
        return _this;
    }
    /**
     * @inheritDoc
     */
    FetchTransport.prototype.sendEvent = function (event) {
        return this._sendRequest(eventToSentryRequest(event, this._api), event);
    };
    /**
     * @inheritDoc
     */
    FetchTransport.prototype.sendSession = function (session) {
        return this._sendRequest(sessionToSentryRequest(session, this._api), session);
    };
    /**
     * @param sentryRequest Prepared SentryRequest to be delivered
     * @param originalPayload Original payload used to create SentryRequest
     */
    FetchTransport.prototype._sendRequest = function (sentryRequest, originalPayload) {
        var _this = this;
        if (this._isRateLimited(sentryRequest.type)) {
            return Promise.reject({
                event: originalPayload,
                type: sentryRequest.type,
                reason: "Transport for " + sentryRequest.type + " requests locked till " + this._disabledUntil(sentryRequest.type) + " due to too many requests.",
                status: 429,
            });
        }
        var options = {
            body: sentryRequest.body,
            method: 'POST',
            // Despite all stars in the sky saying that Edge supports old draft syntax, aka 'never', 'always', 'origin' and 'default
            // https://caniuse.com/#feat=referrer-policy
            // It doesn't. And it throw exception instead of ignoring this parameter...
            // REF: https://github.com/getsentry/raven-js/issues/1233
            referrerPolicy: (Object(supports["e" /* supportsReferrerPolicy */])() ? 'origin' : ''),
        };
        if (this.options.fetchParameters !== undefined) {
            Object.assign(options, this.options.fetchParameters);
        }
        if (this.options.headers !== undefined) {
            options.headers = this.options.headers;
        }
        return this._buffer.add(function () {
            return new syncpromise["a" /* SyncPromise */](function (resolve, reject) {
                void _this._fetch(sentryRequest.url, options)
                    .then(function (response) {
                    var headers = {
                        'x-sentry-rate-limits': response.headers.get('X-Sentry-Rate-Limits'),
                        'retry-after': response.headers.get('Retry-After'),
                    };
                    _this._handleResponse({
                        requestType: sentryRequest.type,
                        response: response,
                        headers: headers,
                        resolve: resolve,
                        reject: reject,
                    });
                })
                    .catch(reject);
            });
        });
    };
    return FetchTransport;
}(base_BaseTransport));

//# sourceMappingURL=fetch.js.map
// CONCATENATED MODULE: ./node_modules/@sentry/browser/esm/transports/xhr.js




/** `XHR` based transport */
var xhr_XHRTransport = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(XHRTransport, _super);
    function XHRTransport() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @inheritDoc
     */
    XHRTransport.prototype.sendEvent = function (event) {
        return this._sendRequest(eventToSentryRequest(event, this._api), event);
    };
    /**
     * @inheritDoc
     */
    XHRTransport.prototype.sendSession = function (session) {
        return this._sendRequest(sessionToSentryRequest(session, this._api), session);
    };
    /**
     * @param sentryRequest Prepared SentryRequest to be delivered
     * @param originalPayload Original payload used to create SentryRequest
     */
    XHRTransport.prototype._sendRequest = function (sentryRequest, originalPayload) {
        var _this = this;
        if (this._isRateLimited(sentryRequest.type)) {
            return Promise.reject({
                event: originalPayload,
                type: sentryRequest.type,
                reason: "Transport for " + sentryRequest.type + " requests locked till " + this._disabledUntil(sentryRequest.type) + " due to too many requests.",
                status: 429,
            });
        }
        return this._buffer.add(function () {
            return new syncpromise["a" /* SyncPromise */](function (resolve, reject) {
                var request = new XMLHttpRequest();
                request.onreadystatechange = function () {
                    if (request.readyState === 4) {
                        var headers = {
                            'x-sentry-rate-limits': request.getResponseHeader('X-Sentry-Rate-Limits'),
                            'retry-after': request.getResponseHeader('Retry-After'),
                        };
                        _this._handleResponse({ requestType: sentryRequest.type, response: request, headers: headers, resolve: resolve, reject: reject });
                    }
                };
                request.open('POST', sentryRequest.url);
                for (var header in _this.options.headers) {
                    if (_this.options.headers.hasOwnProperty(header)) {
                        request.setRequestHeader(header, _this.options.headers[header]);
                    }
                }
                request.send(sentryRequest.body);
            });
        });
    };
    return XHRTransport;
}(base_BaseTransport));

//# sourceMappingURL=xhr.js.map
// CONCATENATED MODULE: ./node_modules/@sentry/browser/esm/backend.js






/**
 * The Sentry Browser SDK Backend.
 * @hidden
 */
var backend_BrowserBackend = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(BrowserBackend, _super);
    function BrowserBackend() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @inheritDoc
     */
    BrowserBackend.prototype.eventFromException = function (exception, hint) {
        return eventFromException(this._options, exception, hint);
    };
    /**
     * @inheritDoc
     */
    BrowserBackend.prototype.eventFromMessage = function (message, level, hint) {
        if (level === void 0) { level = severity["a" /* Severity */].Info; }
        return eventFromMessage(this._options, message, level, hint);
    };
    /**
     * @inheritDoc
     */
    BrowserBackend.prototype._setupTransport = function () {
        if (!this._options.dsn) {
            // We return the noop transport here in case there is no Dsn.
            return _super.prototype._setupTransport.call(this);
        }
        var transportOptions = Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, this._options.transportOptions), { dsn: this._options.dsn, tunnel: this._options.tunnel, _metadata: this._options._metadata });
        if (this._options.transport) {
            return new this._options.transport(transportOptions);
        }
        if (Object(supports["b" /* supportsFetch */])()) {
            return new fetch_FetchTransport(transportOptions);
        }
        return new xhr_XHRTransport(transportOptions);
    };
    return BrowserBackend;
}(basebackend_BaseBackend));

//# sourceMappingURL=backend.js.map
// CONCATENATED MODULE: ./node_modules/@sentry/browser/esm/helpers.js



var ignoreOnError = 0;
/**
 * @hidden
 */
function shouldIgnoreOnError() {
    return ignoreOnError > 0;
}
/**
 * @hidden
 */
function ignoreNextOnError() {
    // onerror should trigger before setTimeout
    ignoreOnError += 1;
    setTimeout(function () {
        ignoreOnError -= 1;
    });
}
/**
 * Instruments the given function and sends an event to Sentry every time the
 * function throws an exception.
 *
 * @param fn A function to wrap.
 * @returns The wrapped function.
 * @hidden
 */
function wrap(fn, options, before) {
    if (options === void 0) { options = {}; }
    if (typeof fn !== 'function') {
        return fn;
    }
    try {
        // We don't wanna wrap it twice
        if (fn.__sentry__) {
            return fn;
        }
        // If this has already been wrapped in the past, return that wrapped function
        if (fn.__sentry_wrapped__) {
            return fn.__sentry_wrapped__;
        }
    }
    catch (e) {
        // Just accessing custom props in some Selenium environments
        // can cause a "Permission denied" exception (see raven-js#495).
        // Bail on wrapping and return the function as-is (defers to window.onerror).
        return fn;
    }
    /* eslint-disable prefer-rest-params */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var sentryWrapped = function () {
        var args = Array.prototype.slice.call(arguments);
        try {
            if (before && typeof before === 'function') {
                before.apply(this, arguments);
            }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-member-access
            var wrappedArguments = args.map(function (arg) { return wrap(arg, options); });
            if (fn.handleEvent) {
                // Attempt to invoke user-land function
                // NOTE: If you are a Sentry user, and you are seeing this stack frame, it
                //       means the sentry.javascript SDK caught an error invoking your application code. This
                //       is expected behavior and NOT indicative of a bug with sentry.javascript.
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                return fn.handleEvent.apply(this, wrappedArguments);
            }
            // Attempt to invoke user-land function
            // NOTE: If you are a Sentry user, and you are seeing this stack frame, it
            //       means the sentry.javascript SDK caught an error invoking your application code. This
            //       is expected behavior and NOT indicative of a bug with sentry.javascript.
            return fn.apply(this, wrappedArguments);
        }
        catch (ex) {
            ignoreNextOnError();
            Object(esm["m" /* withScope */])(function (scope) {
                scope.addEventProcessor(function (event) {
                    var processedEvent = Object(tslib_es6["a" /* __assign */])({}, event);
                    if (options.mechanism) {
                        Object(misc["b" /* addExceptionTypeValue */])(processedEvent, undefined, undefined);
                        Object(misc["a" /* addExceptionMechanism */])(processedEvent, options.mechanism);
                    }
                    processedEvent.extra = Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, processedEvent.extra), { arguments: args });
                    return processedEvent;
                });
                Object(esm["c" /* captureException */])(ex);
            });
            throw ex;
        }
    };
    /* eslint-enable prefer-rest-params */
    // Accessing some objects may throw
    // ref: https://github.com/getsentry/sentry-javascript/issues/1168
    try {
        for (var property in fn) {
            if (Object.prototype.hasOwnProperty.call(fn, property)) {
                sentryWrapped[property] = fn[property];
            }
        }
    }
    catch (_oO) { } // eslint-disable-line no-empty
    fn.prototype = fn.prototype || {};
    sentryWrapped.prototype = fn.prototype;
    Object.defineProperty(fn, '__sentry_wrapped__', {
        enumerable: false,
        value: sentryWrapped,
    });
    // Signal that this function has been wrapped/filled already
    // for both debugging and to prevent it to being wrapped/filled twice
    Object.defineProperties(sentryWrapped, {
        __sentry__: {
            enumerable: false,
            value: true,
        },
        __sentry_original__: {
            enumerable: false,
            value: fn,
        },
    });
    // Restore original function name (not all browsers allow that)
    try {
        var descriptor = Object.getOwnPropertyDescriptor(sentryWrapped, 'name');
        if (descriptor.configurable) {
            Object.defineProperty(sentryWrapped, 'name', {
                get: function () {
                    return fn.name;
                },
            });
        }
        // eslint-disable-next-line no-empty
    }
    catch (_oO) { }
    return sentryWrapped;
}
/**
 * Injects the Report Dialog script
 * @hidden
 */
function injectReportDialog(options) {
    if (options === void 0) { options = {}; }
    if (!options.eventId) {
        logger["a" /* logger */].error("Missing eventId option in showReportDialog call");
        return;
    }
    if (!options.dsn) {
        logger["a" /* logger */].error("Missing dsn option in showReportDialog call");
        return;
    }
    var script = document.createElement('script');
    script.async = true;
    script.src = new api_API(options.dsn).getReportDialogEndpoint(options);
    if (options.onLoad) {
        // eslint-disable-next-line @typescript-eslint/unbound-method
        script.onload = options.onLoad;
    }
    (document.head || document.body).appendChild(script);
}
//# sourceMappingURL=helpers.js.map
// EXTERNAL MODULE: ./node_modules/@sentry/utils/esm/instrument.js
var instrument = __webpack_require__(539);

// EXTERNAL MODULE: ./node_modules/@sentry/utils/esm/browser.js
var browser = __webpack_require__(528);

// CONCATENATED MODULE: ./node_modules/@sentry/browser/esm/integrations/breadcrumbs.js

/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable max-lines */



/**
 * Default Breadcrumbs instrumentations
 * TODO: Deprecated - with v6, this will be renamed to `Instrument`
 */
var breadcrumbs_Breadcrumbs = /** @class */ (function () {
    /**
     * @inheritDoc
     */
    function Breadcrumbs(options) {
        /**
         * @inheritDoc
         */
        this.name = Breadcrumbs.id;
        this._options = Object(tslib_es6["a" /* __assign */])({ console: true, dom: true, fetch: true, history: true, sentry: true, xhr: true }, options);
    }
    /**
     * Create a breadcrumb of `sentry` from the events themselves
     */
    Breadcrumbs.prototype.addSentryBreadcrumb = function (event) {
        if (!this._options.sentry) {
            return;
        }
        Object(esm_hub["b" /* getCurrentHub */])().addBreadcrumb({
            category: "sentry." + (event.type === 'transaction' ? 'transaction' : 'event'),
            event_id: event.event_id,
            level: event.level,
            message: Object(misc["d" /* getEventDescription */])(event),
        }, {
            event: event,
        });
    };
    /**
     * Instrument browser built-ins w/ breadcrumb capturing
     *  - Console API
     *  - DOM API (click/typing)
     *  - XMLHttpRequest API
     *  - Fetch API
     *  - History API
     */
    Breadcrumbs.prototype.setupOnce = function () {
        var _this = this;
        if (this._options.console) {
            Object(instrument["a" /* addInstrumentationHandler */])({
                callback: function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    _this._consoleBreadcrumb.apply(_this, Object(tslib_es6["g" /* __spread */])(args));
                },
                type: 'console',
            });
        }
        if (this._options.dom) {
            Object(instrument["a" /* addInstrumentationHandler */])({
                callback: function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    _this._domBreadcrumb.apply(_this, Object(tslib_es6["g" /* __spread */])(args));
                },
                type: 'dom',
            });
        }
        if (this._options.xhr) {
            Object(instrument["a" /* addInstrumentationHandler */])({
                callback: function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    _this._xhrBreadcrumb.apply(_this, Object(tslib_es6["g" /* __spread */])(args));
                },
                type: 'xhr',
            });
        }
        if (this._options.fetch) {
            Object(instrument["a" /* addInstrumentationHandler */])({
                callback: function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    _this._fetchBreadcrumb.apply(_this, Object(tslib_es6["g" /* __spread */])(args));
                },
                type: 'fetch',
            });
        }
        if (this._options.history) {
            Object(instrument["a" /* addInstrumentationHandler */])({
                callback: function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    _this._historyBreadcrumb.apply(_this, Object(tslib_es6["g" /* __spread */])(args));
                },
                type: 'history',
            });
        }
    };
    /**
     * Creates breadcrumbs from console API calls
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Breadcrumbs.prototype._consoleBreadcrumb = function (handlerData) {
        var breadcrumb = {
            category: 'console',
            data: {
                arguments: handlerData.args,
                logger: 'console',
            },
            level: severity["a" /* Severity */].fromString(handlerData.level),
            message: Object(string["b" /* safeJoin */])(handlerData.args, ' '),
        };
        if (handlerData.level === 'assert') {
            if (handlerData.args[0] === false) {
                breadcrumb.message = "Assertion failed: " + (Object(string["b" /* safeJoin */])(handlerData.args.slice(1), ' ') || 'console.assert');
                breadcrumb.data.arguments = handlerData.args.slice(1);
            }
            else {
                // Don't capture a breadcrumb for passed assertions
                return;
            }
        }
        Object(esm_hub["b" /* getCurrentHub */])().addBreadcrumb(breadcrumb, {
            input: handlerData.args,
            level: handlerData.level,
        });
    };
    /**
     * Creates breadcrumbs from DOM API calls
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Breadcrumbs.prototype._domBreadcrumb = function (handlerData) {
        var target;
        var keyAttrs = typeof this._options.dom === 'object' ? this._options.dom.serializeAttribute : undefined;
        if (typeof keyAttrs === 'string') {
            keyAttrs = [keyAttrs];
        }
        // Accessing event.target can throw (see getsentry/raven-js#838, #768)
        try {
            target = handlerData.event.target
                ? Object(browser["a" /* htmlTreeAsString */])(handlerData.event.target, keyAttrs)
                : Object(browser["a" /* htmlTreeAsString */])(handlerData.event, keyAttrs);
        }
        catch (e) {
            target = '<unknown>';
        }
        if (target.length === 0) {
            return;
        }
        Object(esm_hub["b" /* getCurrentHub */])().addBreadcrumb({
            category: "ui." + handlerData.name,
            message: target,
        }, {
            event: handlerData.event,
            name: handlerData.name,
            global: handlerData.global,
        });
    };
    /**
     * Creates breadcrumbs from XHR API calls
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Breadcrumbs.prototype._xhrBreadcrumb = function (handlerData) {
        if (handlerData.endTimestamp) {
            // We only capture complete, non-sentry requests
            if (handlerData.xhr.__sentry_own_request__) {
                return;
            }
            var _a = handlerData.xhr.__sentry_xhr__ || {}, method = _a.method, url = _a.url, status_code = _a.status_code, body = _a.body;
            Object(esm_hub["b" /* getCurrentHub */])().addBreadcrumb({
                category: 'xhr',
                data: {
                    method: method,
                    url: url,
                    status_code: status_code,
                },
                type: 'http',
            }, {
                xhr: handlerData.xhr,
                input: body,
            });
            return;
        }
    };
    /**
     * Creates breadcrumbs from fetch API calls
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Breadcrumbs.prototype._fetchBreadcrumb = function (handlerData) {
        // We only capture complete fetch requests
        if (!handlerData.endTimestamp) {
            return;
        }
        if (handlerData.fetchData.url.match(/sentry_key/) && handlerData.fetchData.method === 'POST') {
            // We will not create breadcrumbs for fetch requests that contain `sentry_key` (internal sentry requests)
            return;
        }
        if (handlerData.error) {
            Object(esm_hub["b" /* getCurrentHub */])().addBreadcrumb({
                category: 'fetch',
                data: handlerData.fetchData,
                level: severity["a" /* Severity */].Error,
                type: 'http',
            }, {
                data: handlerData.error,
                input: handlerData.args,
            });
        }
        else {
            Object(esm_hub["b" /* getCurrentHub */])().addBreadcrumb({
                category: 'fetch',
                data: Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, handlerData.fetchData), { status_code: handlerData.response.status }),
                type: 'http',
            }, {
                input: handlerData.args,
                response: handlerData.response,
            });
        }
    };
    /**
     * Creates breadcrumbs from history API calls
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Breadcrumbs.prototype._historyBreadcrumb = function (handlerData) {
        var global = Object(misc["e" /* getGlobalObject */])();
        var from = handlerData.from;
        var to = handlerData.to;
        var parsedLoc = Object(misc["h" /* parseUrl */])(global.location.href);
        var parsedFrom = Object(misc["h" /* parseUrl */])(from);
        var parsedTo = Object(misc["h" /* parseUrl */])(to);
        // Initial pushState doesn't provide `from` information
        if (!parsedFrom.path) {
            parsedFrom = parsedLoc;
        }
        // Use only the path component of the URL if the URL matches the current
        // document (almost all the time when using pushState)
        if (parsedLoc.protocol === parsedTo.protocol && parsedLoc.host === parsedTo.host) {
            to = parsedTo.relative;
        }
        if (parsedLoc.protocol === parsedFrom.protocol && parsedLoc.host === parsedFrom.host) {
            from = parsedFrom.relative;
        }
        Object(esm_hub["b" /* getCurrentHub */])().addBreadcrumb({
            category: 'navigation',
            data: {
                from: from,
                to: to,
            },
        });
    };
    /**
     * @inheritDoc
     */
    Breadcrumbs.id = 'Breadcrumbs';
    return Breadcrumbs;
}());

//# sourceMappingURL=breadcrumbs.js.map
// CONCATENATED MODULE: ./node_modules/@sentry/browser/esm/client.js






/**
 * The Sentry Browser SDK Client.
 *
 * @see BrowserOptions for documentation on configuration options.
 * @see SentryClient for usage documentation.
 */
var client_BrowserClient = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(BrowserClient, _super);
    /**
     * Creates a new Browser SDK instance.
     *
     * @param options Configuration options for this SDK.
     */
    function BrowserClient(options) {
        if (options === void 0) { options = {}; }
        var _this = this;
        options._metadata = options._metadata || {};
        options._metadata.sdk = options._metadata.sdk || {
            name: 'sentry.javascript.browser',
            packages: [
                {
                    name: 'npm:@sentry/browser',
                    version: SDK_VERSION,
                },
            ],
            version: SDK_VERSION,
        };
        _this = _super.call(this, backend_BrowserBackend, options) || this;
        return _this;
    }
    /**
     * Show a report dialog to the user to send feedback to a specific event.
     *
     * @param options Set individual options for the dialog
     */
    BrowserClient.prototype.showReportDialog = function (options) {
        if (options === void 0) { options = {}; }
        // doesn't work without a document (React Native)
        var document = Object(misc["e" /* getGlobalObject */])().document;
        if (!document) {
            return;
        }
        if (!this._isEnabled()) {
            logger["a" /* logger */].error('Trying to call showReportDialog with Sentry Client disabled');
            return;
        }
        injectReportDialog(Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, options), { dsn: options.dsn || this.getDsn() }));
    };
    /**
     * @inheritDoc
     */
    BrowserClient.prototype._prepareEvent = function (event, scope, hint) {
        event.platform = event.platform || 'javascript';
        return _super.prototype._prepareEvent.call(this, event, scope, hint);
    };
    /**
     * @inheritDoc
     */
    BrowserClient.prototype._sendEvent = function (event) {
        var integration = this.getIntegration(breadcrumbs_Breadcrumbs);
        if (integration) {
            integration.addSentryBreadcrumb(event);
        }
        _super.prototype._sendEvent.call(this, event);
    };
    return BrowserClient;
}(baseclient_BaseClient));

//# sourceMappingURL=client.js.map
// CONCATENATED MODULE: ./node_modules/@sentry/core/esm/integrations/functiontostring.js
var originalFunctionToString;
/** Patch toString calls to return proper name for wrapped functions */
var FunctionToString = /** @class */ (function () {
    function FunctionToString() {
        /**
         * @inheritDoc
         */
        this.name = FunctionToString.id;
    }
    /**
     * @inheritDoc
     */
    FunctionToString.prototype.setupOnce = function () {
        // eslint-disable-next-line @typescript-eslint/unbound-method
        originalFunctionToString = Function.prototype.toString;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        Function.prototype.toString = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var context = this.__sentry_original__ || this;
            return originalFunctionToString.apply(context, args);
        };
    };
    /**
     * @inheritDoc
     */
    FunctionToString.id = 'FunctionToString';
    return FunctionToString;
}());

//# sourceMappingURL=functiontostring.js.map
// CONCATENATED MODULE: ./node_modules/@sentry/core/esm/integrations/inboundfilters.js



// "Script error." is hard coded into browsers for errors that it can't read.
// this is the result of a script being pulled in from an external domain and CORS.
var DEFAULT_IGNORE_ERRORS = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/];
/** Inbound filters configurable by the user */
var inboundfilters_InboundFilters = /** @class */ (function () {
    function InboundFilters(_options) {
        if (_options === void 0) { _options = {}; }
        this._options = _options;
        /**
         * @inheritDoc
         */
        this.name = InboundFilters.id;
    }
    /**
     * @inheritDoc
     */
    InboundFilters.prototype.setupOnce = function () {
        Object(esm_scope["b" /* addGlobalEventProcessor */])(function (event) {
            var hub = Object(esm_hub["b" /* getCurrentHub */])();
            if (!hub) {
                return event;
            }
            var self = hub.getIntegration(InboundFilters);
            if (self) {
                var client = hub.getClient();
                var clientOptions = client ? client.getOptions() : {};
                // This checks prevents most of the occurrences of the bug linked below:
                // https://github.com/getsentry/sentry-javascript/issues/2622
                // The bug is caused by multiple SDK instances, where one is minified and one is using non-mangled code.
                // Unfortunatelly we cannot fix it reliably (thus reserved property in rollup's terser config),
                // as we cannot force people using multiple instances in their apps to sync SDK versions.
                var options = typeof self._mergeOptions === 'function' ? self._mergeOptions(clientOptions) : {};
                if (typeof self._shouldDropEvent !== 'function') {
                    return event;
                }
                return self._shouldDropEvent(event, options) ? null : event;
            }
            return event;
        });
    };
    /** JSDoc */
    InboundFilters.prototype._shouldDropEvent = function (event, options) {
        if (this._isSentryError(event, options)) {
            logger["a" /* logger */].warn("Event dropped due to being internal Sentry Error.\nEvent: " + Object(misc["d" /* getEventDescription */])(event));
            return true;
        }
        if (this._isIgnoredError(event, options)) {
            logger["a" /* logger */].warn("Event dropped due to being matched by `ignoreErrors` option.\nEvent: " + Object(misc["d" /* getEventDescription */])(event));
            return true;
        }
        if (this._isDeniedUrl(event, options)) {
            logger["a" /* logger */].warn("Event dropped due to being matched by `denyUrls` option.\nEvent: " + Object(misc["d" /* getEventDescription */])(event) + ".\nUrl: " + this._getEventFilterUrl(event));
            return true;
        }
        if (!this._isAllowedUrl(event, options)) {
            logger["a" /* logger */].warn("Event dropped due to not being matched by `allowUrls` option.\nEvent: " + Object(misc["d" /* getEventDescription */])(event) + ".\nUrl: " + this._getEventFilterUrl(event));
            return true;
        }
        return false;
    };
    /** JSDoc */
    InboundFilters.prototype._isSentryError = function (event, options) {
        if (!options.ignoreInternal) {
            return false;
        }
        try {
            return ((event &&
                event.exception &&
                event.exception.values &&
                event.exception.values[0] &&
                event.exception.values[0].type === 'SentryError') ||
                false);
        }
        catch (_oO) {
            return false;
        }
    };
    /** JSDoc */
    InboundFilters.prototype._isIgnoredError = function (event, options) {
        if (!options.ignoreErrors || !options.ignoreErrors.length) {
            return false;
        }
        return this._getPossibleEventMessages(event).some(function (message) {
            // Not sure why TypeScript complains here...
            return options.ignoreErrors.some(function (pattern) { return Object(string["a" /* isMatchingPattern */])(message, pattern); });
        });
    };
    /** JSDoc */
    InboundFilters.prototype._isDeniedUrl = function (event, options) {
        // TODO: Use Glob instead?
        if (!options.denyUrls || !options.denyUrls.length) {
            return false;
        }
        var url = this._getEventFilterUrl(event);
        return !url ? false : options.denyUrls.some(function (pattern) { return Object(string["a" /* isMatchingPattern */])(url, pattern); });
    };
    /** JSDoc */
    InboundFilters.prototype._isAllowedUrl = function (event, options) {
        // TODO: Use Glob instead?
        if (!options.allowUrls || !options.allowUrls.length) {
            return true;
        }
        var url = this._getEventFilterUrl(event);
        return !url ? true : options.allowUrls.some(function (pattern) { return Object(string["a" /* isMatchingPattern */])(url, pattern); });
    };
    /** JSDoc */
    InboundFilters.prototype._mergeOptions = function (clientOptions) {
        if (clientOptions === void 0) { clientOptions = {}; }
        return {
            allowUrls: Object(tslib_es6["g" /* __spread */])((this._options.whitelistUrls || []), (this._options.allowUrls || []), (clientOptions.whitelistUrls || []), (clientOptions.allowUrls || [])),
            denyUrls: Object(tslib_es6["g" /* __spread */])((this._options.blacklistUrls || []), (this._options.denyUrls || []), (clientOptions.blacklistUrls || []), (clientOptions.denyUrls || [])),
            ignoreErrors: Object(tslib_es6["g" /* __spread */])((this._options.ignoreErrors || []), (clientOptions.ignoreErrors || []), DEFAULT_IGNORE_ERRORS),
            ignoreInternal: typeof this._options.ignoreInternal !== 'undefined' ? this._options.ignoreInternal : true,
        };
    };
    /** JSDoc */
    InboundFilters.prototype._getPossibleEventMessages = function (event) {
        if (event.message) {
            return [event.message];
        }
        if (event.exception) {
            try {
                var _a = (event.exception.values && event.exception.values[0]) || {}, _b = _a.type, type = _b === void 0 ? '' : _b, _c = _a.value, value = _c === void 0 ? '' : _c;
                return ["" + value, type + ": " + value];
            }
            catch (oO) {
                logger["a" /* logger */].error("Cannot extract message for event " + Object(misc["d" /* getEventDescription */])(event));
                return [];
            }
        }
        return [];
    };
    /** JSDoc */
    InboundFilters.prototype._getEventFilterUrl = function (event) {
        try {
            if (event.stacktrace) {
                var frames_1 = event.stacktrace.frames;
                return (frames_1 && frames_1[frames_1.length - 1].filename) || null;
            }
            if (event.exception) {
                var frames_2 = event.exception.values && event.exception.values[0].stacktrace && event.exception.values[0].stacktrace.frames;
                return (frames_2 && frames_2[frames_2.length - 1].filename) || null;
            }
            return null;
        }
        catch (oO) {
            logger["a" /* logger */].error("Cannot extract url for event " + Object(misc["d" /* getEventDescription */])(event));
            return null;
        }
    };
    /**
     * @inheritDoc
     */
    InboundFilters.id = 'InboundFilters';
    return InboundFilters;
}());

//# sourceMappingURL=inboundfilters.js.map
// CONCATENATED MODULE: ./node_modules/@sentry/core/esm/integrations/index.js


//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/@sentry/core/esm/index.js











//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/@sentry/core/esm/sdk.js


/**
 * Internal function to create a new SDK client instance. The client is
 * installed and then bound to the current scope.
 *
 * @param clientClass The client class to instantiate.
 * @param options Options to pass to the client.
 */
function initAndBind(clientClass, options) {
    var _a;
    if (options.debug === true) {
        logger["a" /* logger */].enable();
    }
    var hub = Object(esm_hub["b" /* getCurrentHub */])();
    (_a = hub.getScope()) === null || _a === void 0 ? void 0 : _a.update(options.initialScope);
    var client = new clientClass(options);
    hub.bindClient(client);
}
//# sourceMappingURL=sdk.js.map
// EXTERNAL MODULE: ./node_modules/@sentry/utils/esm/stacktrace.js
var esm_stacktrace = __webpack_require__(473);

// CONCATENATED MODULE: ./node_modules/@sentry/browser/esm/integrations/trycatch.js



var DEFAULT_EVENT_TARGET = [
    'EventTarget',
    'Window',
    'Node',
    'ApplicationCache',
    'AudioTrackList',
    'ChannelMergerNode',
    'CryptoOperation',
    'EventSource',
    'FileReader',
    'HTMLUnknownElement',
    'IDBDatabase',
    'IDBRequest',
    'IDBTransaction',
    'KeyOperation',
    'MediaController',
    'MessagePort',
    'ModalWindow',
    'Notification',
    'SVGElementInstance',
    'Screen',
    'TextTrack',
    'TextTrackCue',
    'TextTrackList',
    'WebSocket',
    'WebSocketWorker',
    'Worker',
    'XMLHttpRequest',
    'XMLHttpRequestEventTarget',
    'XMLHttpRequestUpload',
];
/** Wrap timer functions and event targets to catch errors and provide better meta data */
var trycatch_TryCatch = /** @class */ (function () {
    /**
     * @inheritDoc
     */
    function TryCatch(options) {
        /**
         * @inheritDoc
         */
        this.name = TryCatch.id;
        this._options = Object(tslib_es6["a" /* __assign */])({ XMLHttpRequest: true, eventTarget: true, requestAnimationFrame: true, setInterval: true, setTimeout: true }, options);
    }
    /**
     * Wrap timer functions and event targets to catch errors
     * and provide better metadata.
     */
    TryCatch.prototype.setupOnce = function () {
        var global = Object(misc["e" /* getGlobalObject */])();
        if (this._options.setTimeout) {
            Object(object["c" /* fill */])(global, 'setTimeout', this._wrapTimeFunction.bind(this));
        }
        if (this._options.setInterval) {
            Object(object["c" /* fill */])(global, 'setInterval', this._wrapTimeFunction.bind(this));
        }
        if (this._options.requestAnimationFrame) {
            Object(object["c" /* fill */])(global, 'requestAnimationFrame', this._wrapRAF.bind(this));
        }
        if (this._options.XMLHttpRequest && 'XMLHttpRequest' in global) {
            Object(object["c" /* fill */])(XMLHttpRequest.prototype, 'send', this._wrapXHR.bind(this));
        }
        if (this._options.eventTarget) {
            var eventTarget = Array.isArray(this._options.eventTarget) ? this._options.eventTarget : DEFAULT_EVENT_TARGET;
            eventTarget.forEach(this._wrapEventTarget.bind(this));
        }
    };
    /** JSDoc */
    TryCatch.prototype._wrapTimeFunction = function (original) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var originalCallback = args[0];
            args[0] = wrap(originalCallback, {
                mechanism: {
                    data: { function: Object(esm_stacktrace["a" /* getFunctionName */])(original) },
                    handled: true,
                    type: 'instrument',
                },
            });
            return original.apply(this, args);
        };
    };
    /** JSDoc */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    TryCatch.prototype._wrapRAF = function (original) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return function (callback) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            return original.call(this, wrap(callback, {
                mechanism: {
                    data: {
                        function: 'requestAnimationFrame',
                        handler: Object(esm_stacktrace["a" /* getFunctionName */])(original),
                    },
                    handled: true,
                    type: 'instrument',
                },
            }));
        };
    };
    /** JSDoc */
    TryCatch.prototype._wrapEventTarget = function (target) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var global = Object(misc["e" /* getGlobalObject */])();
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        var proto = global[target] && global[target].prototype;
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        if (!proto || !proto.hasOwnProperty || !proto.hasOwnProperty('addEventListener')) {
            return;
        }
        Object(object["c" /* fill */])(proto, 'addEventListener', function (original) {
            return function (eventName, fn, options) {
                try {
                    if (typeof fn.handleEvent === 'function') {
                        fn.handleEvent = wrap(fn.handleEvent.bind(fn), {
                            mechanism: {
                                data: {
                                    function: 'handleEvent',
                                    handler: Object(esm_stacktrace["a" /* getFunctionName */])(fn),
                                    target: target,
                                },
                                handled: true,
                                type: 'instrument',
                            },
                        });
                    }
                }
                catch (err) {
                    // can sometimes get 'Permission denied to access property "handle Event'
                }
                return original.call(this, eventName, 
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                wrap(fn, {
                    mechanism: {
                        data: {
                            function: 'addEventListener',
                            handler: Object(esm_stacktrace["a" /* getFunctionName */])(fn),
                            target: target,
                        },
                        handled: true,
                        type: 'instrument',
                    },
                }), options);
            };
        });
        Object(object["c" /* fill */])(proto, 'removeEventListener', function (originalRemoveEventListener) {
            return function (eventName, fn, options) {
                var _a;
                /**
                 * There are 2 possible scenarios here:
                 *
                 * 1. Someone passes a callback, which was attached prior to Sentry initialization, or by using unmodified
                 * method, eg. `document.addEventListener.call(el, name, handler). In this case, we treat this function
                 * as a pass-through, and call original `removeEventListener` with it.
                 *
                 * 2. Someone passes a callback, which was attached after Sentry was initialized, which means that it was using
                 * our wrapped version of `addEventListener`, which internally calls `wrap` helper.
                 * This helper "wraps" whole callback inside a try/catch statement, and attached appropriate metadata to it,
                 * in order for us to make a distinction between wrapped/non-wrapped functions possible.
                 * If a function was wrapped, it has additional property of `__sentry_wrapped__`, holding the handler.
                 *
                 * When someone adds a handler prior to initialization, and then do it again, but after,
                 * then we have to detach both of them. Otherwise, if we'd detach only wrapped one, it'd be impossible
                 * to get rid of the initial handler and it'd stick there forever.
                 */
                var wrappedEventHandler = fn;
                try {
                    var originalEventHandler = (_a = wrappedEventHandler) === null || _a === void 0 ? void 0 : _a.__sentry_wrapped__;
                    if (originalEventHandler) {
                        originalRemoveEventListener.call(this, eventName, originalEventHandler, options);
                    }
                }
                catch (e) {
                    // ignore, accessing __sentry_wrapped__ will throw in some Selenium environments
                }
                return originalRemoveEventListener.call(this, eventName, wrappedEventHandler, options);
            };
        });
    };
    /** JSDoc */
    TryCatch.prototype._wrapXHR = function (originalSend) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            // eslint-disable-next-line @typescript-eslint/no-this-alias
            var xhr = this;
            var xmlHttpRequestProps = ['onload', 'onerror', 'onprogress', 'onreadystatechange'];
            xmlHttpRequestProps.forEach(function (prop) {
                if (prop in xhr && typeof xhr[prop] === 'function') {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    Object(object["c" /* fill */])(xhr, prop, function (original) {
                        var wrapOptions = {
                            mechanism: {
                                data: {
                                    function: prop,
                                    handler: Object(esm_stacktrace["a" /* getFunctionName */])(original),
                                },
                                handled: true,
                                type: 'instrument',
                            },
                        };
                        // If Instrument integration has been called before TryCatch, get the name of original function
                        if (original.__sentry_original__) {
                            wrapOptions.mechanism.data.handler = Object(esm_stacktrace["a" /* getFunctionName */])(original.__sentry_original__);
                        }
                        // Otherwise wrap directly
                        return wrap(original, wrapOptions);
                    });
                }
            });
            return originalSend.apply(this, args);
        };
    };
    /**
     * @inheritDoc
     */
    TryCatch.id = 'TryCatch';
    return TryCatch;
}());

//# sourceMappingURL=trycatch.js.map
// CONCATENATED MODULE: ./node_modules/@sentry/browser/esm/integrations/globalhandlers.js

/* eslint-disable @typescript-eslint/no-unsafe-member-access */





/** Global handlers */
var globalhandlers_GlobalHandlers = /** @class */ (function () {
    /** JSDoc */
    function GlobalHandlers(options) {
        /**
         * @inheritDoc
         */
        this.name = GlobalHandlers.id;
        /** JSDoc */
        this._onErrorHandlerInstalled = false;
        /** JSDoc */
        this._onUnhandledRejectionHandlerInstalled = false;
        this._options = Object(tslib_es6["a" /* __assign */])({ onerror: true, onunhandledrejection: true }, options);
    }
    /**
     * @inheritDoc
     */
    GlobalHandlers.prototype.setupOnce = function () {
        Error.stackTraceLimit = 50;
        if (this._options.onerror) {
            logger["a" /* logger */].log('Global Handler attached: onerror');
            this._installGlobalOnErrorHandler();
        }
        if (this._options.onunhandledrejection) {
            logger["a" /* logger */].log('Global Handler attached: onunhandledrejection');
            this._installGlobalOnUnhandledRejectionHandler();
        }
    };
    /** JSDoc */
    GlobalHandlers.prototype._installGlobalOnErrorHandler = function () {
        var _this = this;
        if (this._onErrorHandlerInstalled) {
            return;
        }
        Object(instrument["a" /* addInstrumentationHandler */])({
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            callback: function (data) {
                var error = data.error;
                var currentHub = Object(esm_hub["b" /* getCurrentHub */])();
                var hasIntegration = currentHub.getIntegration(GlobalHandlers);
                var isFailedOwnDelivery = error && error.__sentry_own_request__ === true;
                if (!hasIntegration || shouldIgnoreOnError() || isFailedOwnDelivery) {
                    return;
                }
                var client = currentHub.getClient();
                var event = error === undefined && Object(is["k" /* isString */])(data.msg)
                    ? _this._eventFromIncompleteOnError(data.msg, data.url, data.line, data.column)
                    : _this._enhanceEventWithInitialFrame(eventFromUnknownInput(error || data.msg, undefined, {
                        attachStacktrace: client && client.getOptions().attachStacktrace,
                        rejection: false,
                    }), data.url, data.line, data.column);
                Object(misc["a" /* addExceptionMechanism */])(event, {
                    handled: false,
                    type: 'onerror',
                });
                currentHub.captureEvent(event, {
                    originalException: error,
                });
            },
            type: 'error',
        });
        this._onErrorHandlerInstalled = true;
    };
    /** JSDoc */
    GlobalHandlers.prototype._installGlobalOnUnhandledRejectionHandler = function () {
        var _this = this;
        if (this._onUnhandledRejectionHandlerInstalled) {
            return;
        }
        Object(instrument["a" /* addInstrumentationHandler */])({
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            callback: function (e) {
                var error = e;
                // dig the object of the rejection out of known event types
                try {
                    // PromiseRejectionEvents store the object of the rejection under 'reason'
                    // see https://developer.mozilla.org/en-US/docs/Web/API/PromiseRejectionEvent
                    if ('reason' in e) {
                        error = e.reason;
                    }
                    // something, somewhere, (likely a browser extension) effectively casts PromiseRejectionEvents
                    // to CustomEvents, moving the `promise` and `reason` attributes of the PRE into
                    // the CustomEvent's `detail` attribute, since they're not part of CustomEvent's spec
                    // see https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent and
                    // https://github.com/getsentry/sentry-javascript/issues/2380
                    else if ('detail' in e && 'reason' in e.detail) {
                        error = e.detail.reason;
                    }
                }
                catch (_oO) {
                    // no-empty
                }
                var currentHub = Object(esm_hub["b" /* getCurrentHub */])();
                var hasIntegration = currentHub.getIntegration(GlobalHandlers);
                var isFailedOwnDelivery = error && error.__sentry_own_request__ === true;
                if (!hasIntegration || shouldIgnoreOnError() || isFailedOwnDelivery) {
                    return true;
                }
                var client = currentHub.getClient();
                var event = Object(is["i" /* isPrimitive */])(error)
                    ? _this._eventFromRejectionWithPrimitive(error)
                    : eventFromUnknownInput(error, undefined, {
                        attachStacktrace: client && client.getOptions().attachStacktrace,
                        rejection: true,
                    });
                event.level = severity["a" /* Severity */].Error;
                Object(misc["a" /* addExceptionMechanism */])(event, {
                    handled: false,
                    type: 'onunhandledrejection',
                });
                currentHub.captureEvent(event, {
                    originalException: error,
                });
                return;
            },
            type: 'unhandledrejection',
        });
        this._onUnhandledRejectionHandlerInstalled = true;
    };
    /**
     * This function creates a stack from an old, error-less onerror handler.
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    GlobalHandlers.prototype._eventFromIncompleteOnError = function (msg, url, line, column) {
        var ERROR_TYPES_RE = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;
        // If 'message' is ErrorEvent, get real message from inside
        var message = Object(is["e" /* isErrorEvent */])(msg) ? msg.message : msg;
        var name;
        var groups = message.match(ERROR_TYPES_RE);
        if (groups) {
            name = groups[1];
            message = groups[2];
        }
        var event = {
            exception: {
                values: [
                    {
                        type: name || 'Error',
                        value: message,
                    },
                ],
            },
        };
        return this._enhanceEventWithInitialFrame(event, url, line, column);
    };
    /**
     * Create an event from a promise rejection where the `reason` is a primitive.
     *
     * @param reason: The `reason` property of the promise rejection
     * @returns An Event object with an appropriate `exception` value
     */
    GlobalHandlers.prototype._eventFromRejectionWithPrimitive = function (reason) {
        return {
            exception: {
                values: [
                    {
                        type: 'UnhandledRejection',
                        // String() is needed because the Primitive type includes symbols (which can't be automatically stringified)
                        value: "Non-Error promise rejection captured with value: " + String(reason),
                    },
                ],
            },
        };
    };
    /** JSDoc */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    GlobalHandlers.prototype._enhanceEventWithInitialFrame = function (event, url, line, column) {
        event.exception = event.exception || {};
        event.exception.values = event.exception.values || [];
        event.exception.values[0] = event.exception.values[0] || {};
        event.exception.values[0].stacktrace = event.exception.values[0].stacktrace || {};
        event.exception.values[0].stacktrace.frames = event.exception.values[0].stacktrace.frames || [];
        var colno = isNaN(parseInt(column, 10)) ? undefined : column;
        var lineno = isNaN(parseInt(line, 10)) ? undefined : line;
        var filename = Object(is["k" /* isString */])(url) && url.length > 0 ? url : Object(misc["f" /* getLocationHref */])();
        if (event.exception.values[0].stacktrace.frames.length === 0) {
            event.exception.values[0].stacktrace.frames.push({
                colno: colno,
                filename: filename,
                function: '?',
                in_app: true,
                lineno: lineno,
            });
        }
        return event;
    };
    /**
     * @inheritDoc
     */
    GlobalHandlers.id = 'GlobalHandlers';
    return GlobalHandlers;
}());

//# sourceMappingURL=globalhandlers.js.map
// CONCATENATED MODULE: ./node_modules/@sentry/browser/esm/integrations/linkederrors.js





var DEFAULT_KEY = 'cause';
var DEFAULT_LIMIT = 5;
/** Adds SDK info to an event. */
var linkederrors_LinkedErrors = /** @class */ (function () {
    /**
     * @inheritDoc
     */
    function LinkedErrors(options) {
        if (options === void 0) { options = {}; }
        /**
         * @inheritDoc
         */
        this.name = LinkedErrors.id;
        this._key = options.key || DEFAULT_KEY;
        this._limit = options.limit || DEFAULT_LIMIT;
    }
    /**
     * @inheritDoc
     */
    LinkedErrors.prototype.setupOnce = function () {
        Object(esm_scope["b" /* addGlobalEventProcessor */])(function (event, hint) {
            var self = Object(esm_hub["b" /* getCurrentHub */])().getIntegration(LinkedErrors);
            if (self) {
                return self._handler(event, hint);
            }
            return event;
        });
    };
    /**
     * @inheritDoc
     */
    LinkedErrors.prototype._handler = function (event, hint) {
        if (!event.exception || !event.exception.values || !hint || !Object(is["g" /* isInstanceOf */])(hint.originalException, Error)) {
            return event;
        }
        var linkedErrors = this._walkErrorTree(hint.originalException, this._key);
        event.exception.values = Object(tslib_es6["g" /* __spread */])(linkedErrors, event.exception.values);
        return event;
    };
    /**
     * @inheritDoc
     */
    LinkedErrors.prototype._walkErrorTree = function (error, key, stack) {
        if (stack === void 0) { stack = []; }
        if (!Object(is["g" /* isInstanceOf */])(error[key], Error) || stack.length + 1 >= this._limit) {
            return stack;
        }
        var stacktrace = computeStackTrace(error[key]);
        var exception = exceptionFromStacktrace(stacktrace);
        return this._walkErrorTree(error[key], key, Object(tslib_es6["g" /* __spread */])([exception], stack));
    };
    /**
     * @inheritDoc
     */
    LinkedErrors.id = 'LinkedErrors';
    return LinkedErrors;
}());

//# sourceMappingURL=linkederrors.js.map
// CONCATENATED MODULE: ./node_modules/@sentry/browser/esm/integrations/dedupe.js
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
// CONCATENATED MODULE: ./node_modules/@sentry/browser/esm/integrations/useragent.js



var useragent_global = Object(misc["e" /* getGlobalObject */])();
/** UserAgent */
var useragent_UserAgent = /** @class */ (function () {
    function UserAgent() {
        /**
         * @inheritDoc
         */
        this.name = UserAgent.id;
    }
    /**
     * @inheritDoc
     */
    UserAgent.prototype.setupOnce = function () {
        Object(esm_scope["b" /* addGlobalEventProcessor */])(function (event) {
            var _a, _b, _c;
            if (Object(esm_hub["b" /* getCurrentHub */])().getIntegration(UserAgent)) {
                // if none of the information we want exists, don't bother
                if (!useragent_global.navigator && !useragent_global.location && !useragent_global.document) {
                    return event;
                }
                // grab as much info as exists and add it to the event
                var url = ((_a = event.request) === null || _a === void 0 ? void 0 : _a.url) || ((_b = useragent_global.location) === null || _b === void 0 ? void 0 : _b.href);
                var referrer = (useragent_global.document || {}).referrer;
                var userAgent = (useragent_global.navigator || {}).userAgent;
                var headers = Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, (_c = event.request) === null || _c === void 0 ? void 0 : _c.headers), (referrer && { Referer: referrer })), (userAgent && { 'User-Agent': userAgent }));
                var request = Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, (url && { url: url })), { headers: headers });
                return Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, event), { request: request });
            }
            return event;
        });
    };
    /**
     * @inheritDoc
     */
    UserAgent.id = 'UserAgent';
    return UserAgent;
}());

//# sourceMappingURL=useragent.js.map
// CONCATENATED MODULE: ./node_modules/@sentry/browser/esm/sdk.js





var sdk_defaultIntegrations = [
    new integrations_namespaceObject.InboundFilters(),
    new integrations_namespaceObject.FunctionToString(),
    new trycatch_TryCatch(),
    new breadcrumbs_Breadcrumbs(),
    new globalhandlers_GlobalHandlers(),
    new linkederrors_LinkedErrors(),
    new Dedupe(),
    new useragent_UserAgent(),
];
/**
 * The Sentry Browser SDK Client.
 *
 * To use this SDK, call the {@link init} function as early as possible when
 * loading the web page. To set context information or send manual events, use
 * the provided methods.
 *
 * @example
 *
 * ```
 *
 * import { init } from '@sentry/browser';
 *
 * init({
 *   dsn: '__DSN__',
 *   // ...
 * });
 * ```
 *
 * @example
 * ```
 *
 * import { configureScope } from '@sentry/browser';
 * configureScope((scope: Scope) => {
 *   scope.setExtra({ battery: 0.7 });
 *   scope.setTag({ user_mode: 'admin' });
 *   scope.setUser({ id: '4711' });
 * });
 * ```
 *
 * @example
 * ```
 *
 * import { addBreadcrumb } from '@sentry/browser';
 * addBreadcrumb({
 *   message: 'My Breadcrumb',
 *   // ...
 * });
 * ```
 *
 * @example
 *
 * ```
 *
 * import * as Sentry from '@sentry/browser';
 * Sentry.captureMessage('Hello, world!');
 * Sentry.captureException(new Error('Good bye'));
 * Sentry.captureEvent({
 *   message: 'Manual',
 *   stacktrace: [
 *     // ...
 *   ],
 * });
 * ```
 *
 * @see {@link BrowserOptions} for documentation on configuration options.
 */
function init(options) {
    if (options === void 0) { options = {}; }
    if (options.defaultIntegrations === undefined) {
        options.defaultIntegrations = sdk_defaultIntegrations;
    }
    if (options.release === undefined) {
        var window_1 = Object(misc["e" /* getGlobalObject */])();
        // This supports the variable that sentry-webpack-plugin injects
        if (window_1.SENTRY_RELEASE && window_1.SENTRY_RELEASE.id) {
            options.release = window_1.SENTRY_RELEASE.id;
        }
    }
    if (options.autoSessionTracking === undefined) {
        options.autoSessionTracking = true;
    }
    initAndBind(client_BrowserClient, options);
    if (options.autoSessionTracking) {
        startSessionTracking();
    }
}
/**
 * Present the user with a report dialog.
 *
 * @param options Everything is optional, we try to fetch all info need from the global scope.
 */
function showReportDialog(options) {
    if (options === void 0) { options = {}; }
    if (!options.eventId) {
        options.eventId = Object(esm_hub["b" /* getCurrentHub */])().lastEventId();
    }
    var client = Object(esm_hub["b" /* getCurrentHub */])().getClient();
    if (client) {
        client.showReportDialog(options);
    }
}
/**
 * This is the getter for lastEventId.
 *
 * @returns The last event id of a captured event.
 */
function lastEventId() {
    return Object(esm_hub["b" /* getCurrentHub */])().lastEventId();
}
/**
 * This function is here to be API compatible with the loader.
 * @hidden
 */
function forceLoad() {
    // Noop
}
/**
 * This function is here to be API compatible with the loader.
 * @hidden
 */
function onLoad(callback) {
    callback();
}
/**
 * A promise that resolves when all current events have been sent.
 * If you provide a timeout and the queue takes longer to drain the promise returns false.
 *
 * @param timeout Maximum time in ms the client should wait.
 */
function flush(timeout) {
    var client = Object(esm_hub["b" /* getCurrentHub */])().getClient();
    if (client) {
        return client.flush(timeout);
    }
    return syncpromise["a" /* SyncPromise */].reject(false);
}
/**
 * A promise that resolves when all current events have been sent.
 * If you provide a timeout and the queue takes longer to drain the promise returns false.
 *
 * @param timeout Maximum time in ms the client should wait.
 */
function sdk_close(timeout) {
    var client = Object(esm_hub["b" /* getCurrentHub */])().getClient();
    if (client) {
        return client.close(timeout);
    }
    return syncpromise["a" /* SyncPromise */].reject(false);
}
/**
 * Wrap code within a try/catch block so the SDK is able to capture errors.
 *
 * @param fn A function to wrap.
 *
 * @returns The result of wrapped function call.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function sdk_wrap(fn) {
    return wrap(fn)();
}
/**
 * Enable automatic Session Tracking for the initial page load.
 */
function startSessionTracking() {
    var window = Object(misc["e" /* getGlobalObject */])();
    var document = window.document;
    if (typeof document === 'undefined') {
        logger["a" /* logger */].warn('Session tracking in non-browser environment with @sentry/browser is not supported.');
        return;
    }
    var hub = Object(esm_hub["b" /* getCurrentHub */])();
    // The only way for this to be false is for there to be a version mismatch between @sentry/browser (>= 6.0.0) and
    // @sentry/hub (< 5.27.0). In the simple case, there won't ever be such a mismatch, because the two packages are
    // pinned at the same version in package.json, but there are edge cases where it's possible. See
    // https://github.com/getsentry/sentry-javascript/issues/3207 and
    // https://github.com/getsentry/sentry-javascript/issues/3234 and
    // https://github.com/getsentry/sentry-javascript/issues/3278.
    if (typeof hub.startSession !== 'function' || typeof hub.captureSession !== 'function') {
        return;
    }
    // The session duration for browser sessions does not track a meaningful
    // concept that can be used as a metric.
    // Automatically captured sessions are akin to page views, and thus we
    // discard their duration.
    hub.startSession({ ignoreDuration: true });
    hub.captureSession();
    // We want to create a session for every navigation as well
    Object(instrument["a" /* addInstrumentationHandler */])({
        callback: function (_a) {
            var from = _a.from, to = _a.to;
            // Don't create an additional session for the initial route or if the location did not change
            if (from === undefined || from === to) {
                return;
            }
            hub.startSession({ ignoreDuration: true });
            hub.captureSession();
        },
        type: 'history',
    });
}
//# sourceMappingURL=sdk.js.map
// CONCATENATED MODULE: ./node_modules/@sentry/browser/esm/version.js
// TODO: Remove in the next major release and rely only on @sentry/core SDK_VERSION and SdkInfo metadata
var SDK_NAME = 'sentry.javascript.browser';
//# sourceMappingURL=version.js.map
// CONCATENATED MODULE: ./node_modules/@sentry/browser/esm/exports.js







//# sourceMappingURL=exports.js.map
// CONCATENATED MODULE: ./node_modules/@sentry/browser/esm/integrations/index.js






//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/@sentry/browser/esm/transports/index.js



//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/@sentry/browser/esm/index.js






var windowIntegrations = {};
// This block is needed to add compatibility with the integrations packages when used with a CDN
var _window = Object(misc["e" /* getGlobalObject */])();
if (_window.Sentry && _window.Sentry.Integrations) {
    windowIntegrations = _window.Sentry.Integrations;
}
var INTEGRATIONS = Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, windowIntegrations), integrations_namespaceObject), esm_integrations_namespaceObject);

//# sourceMappingURL=index.js.map

/***/ })

}]);