module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "core-js/library/fn/weak-map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var _WeakMap = __webpack_require__(/*! ../core-js/weak-map */ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        _Object$defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! ../next-server/lib/router/rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new _map.default();
var IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var {
      pathname
    } = window.location;
    var {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    var href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = _Object$create(null);

  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function rewriteUrlForNextExport(url) {
  const [pathname, hash] = url.split('#'); // tslint:disable-next-line

  let [path, qs] = pathname.split('?');
  path = path.replace(/\/$/, ''); // Append a trailing slash if this path does not have an extension

  if (!/\.[^/]+\/?$/.test(path)) path += `/`;
  if (qs) path += '?' + qs;
  if (hash) path += '#' + hash;
  return path;
}

exports.rewriteUrlForNextExport = rewriteUrlForNextExport;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Promise = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

var _Object$assign = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const rewrite_url_for_export_1 = __webpack_require__(/*! ./rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    return rewrite_url_for_export_1.rewriteUrlForNextExport(url);
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = _Object$assign(_Object$assign({}, data), {
      Component
    });

    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new _Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.SUPPORTS_PERFORMANCE_USER_TIMING) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeMatch = route_matcher_1.getRouteMatcher(route_regex_1.getRouteRegex(route))(asPathname);

        if (!routeMatch) {
          const error = `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`;

          if (true) {
            throw new Error(error);
          } else {}

          return resolve(false);
        } // Merge params into `query`, overwriting any specified in search


        _Object$assign(query, routeMatch);
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, _Object$assign(_Object$assign({}, routeInfo), {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return _Promise.resolve(cachedRouteInfo);
    }

    return new _Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return new _Promise((resolve, reject) => {
        // we provide AppTree later so this needs to be `any`
        this.getInitialProps(Component, {
          pathname,
          query,
          asPath: as
        }).then(props => {
          routeInfo.props = props;
          this.components[route] = routeInfo;
          resolve(routeInfo);
        }, reject);
      });
    }).catch(err => {
      return new _Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new _Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new _Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) return; // @ts-ignore pathname is always defined

      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  async getInitialProps(Component, ctx) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    const {
      Component: App
    } = this.components['/_app'];
    let props;

    if (Component.__NEXT_SPR) {
      let status; // pathname should have leading slash

      let {
        pathname
      } = url_1.parse(ctx.asPath || ctx.pathname);
      pathname = !pathname || pathname === '/' ? '/index' : pathname;
      props = await fetch( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`).then(res => {
        if (!res.ok) {
          status = res.status;
          throw new Error('failed to load prerender data');
        }

        return res.json();
      }).catch(err => {
        console.error(`Failed to load data`, status, err);
        window.location.href = pathname;
        return new _Promise(() => {});
      });
    } else {
      const AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      props = await utils_1.loadGetInitialProps(App, {
        AppTree,
        Component,
        router: this,
        ctx
      });
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    if (cancelled) {
      const err = new Error('Loading initial props cancelled');
      err.cancelled = true;
      throw err;
    }

    return props;
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};

    _Object$keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });

    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  if (true) {
    if (App.prototype && App.prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (_Object$keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      _Object$keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./pages/demo/index.js":
/*!*****************************!*\
  !*** ./pages/demo/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "@emotion/styled-base");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var emotion_theming__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! emotion-theming */ "emotion-theming");
/* harmony import */ var emotion_theming__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(emotion_theming__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rebass */ "rebass");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _rebass_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @rebass/forms */ "@rebass/forms");
/* harmony import */ var _rebass_forms__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_rebass_forms__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _theme_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../theme.js */ "./theme.js");

var _jsxFileName = "/Users/Chris/sweetmenu/www/pages/demo/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }










const Page = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div", {
  target: "e1lbjwjd0",
  label: "Page"
})(false ? undefined : {
  name: "uwzj9x",
  styles: "height:100%;min-height:100vh;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9DaHJpcy9zd2VldG1lbnUvd3d3L3BhZ2VzL2RlbW8vaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUJ1QiIsImZpbGUiOiIvVXNlcnMvQ2hyaXMvc3dlZXRtZW51L3d3dy9wYWdlcy9kZW1vL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHsgR2xvYmFsIH0gZnJvbSAnQGVtb3Rpb24vY29yZSdcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICdlbW90aW9uLXRoZW1pbmcnXG5pbXBvcnQge1xuICBIZWFkaW5nLFxuICBGbGV4LFxuICBDYXJkLFxuICBUZXh0LFxuICBCb3gsXG4gIEJ1dHRvblxufSBmcm9tICdyZWJhc3MnXG5pbXBvcnQge1xuICBMYWJlbCxcbiAgSW5wdXRcbn0gZnJvbSAnQHJlYmFzcy9mb3JtcydcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuaW1wb3J0IHRoZW1lIGZyb20gJy4uLy4uL3RoZW1lLmpzJ1xuXG5jb25zdCBQYWdlID0gc3R5bGVkLmRpdmBcbiAgaGVpZ2h0OiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbmA7XG5cbmNvbnN0IEJyYW5kID0gc3R5bGVkLmRpdmBcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICNmZmY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuYDtcblxuY29uc3QgQnJhbmRJY29uID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMzJweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9zdGF0aWMvc3dlZXRtZW51LWZhdmljb24ucG5nKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbmA7XG5cbmNsYXNzIERlbW8gZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgPFBhZ2UgY2xhc3NOYW1lPVwic3dlZXRtZW51X19wYWdlXCI+XG4gICAgICAgICAgPEdsb2JhbFxuICAgICAgICAgICAgc3R5bGVzPXt7XG4gICAgICAgICAgICAgICdib2R5LCBodG1sJzoge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdib2R5J1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICA8dGl0bGU+R2V0IGEgZGVtbyB8IFN3ZWV0bWVudTwvdGl0bGU+XG4gICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIGhyZWY9XCIvc3RhdGljL3N3ZWV0bWVudS1mYXZpY29uLnBuZ1wiLz5cbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgICAgIGhlaWdodD1cIjY0cHhcIlxuICAgICAgICAgICAgcGw9e1s0LDQsNCw2XX1cbiAgICAgICAgICAgIHByPXtbNCw0LDQsNl19XG4gICAgICAgICAgICB3aWR0aD1cIjEwMHZ3XCJcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb249XCJyb3dcIlxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInN3ZWV0bWVudV9fbmF2XCJcbiAgICAgICAgICAgIGZvbnRGYW1pbHk9XCJib2R5XCJcbiAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgICAgICAgICB6SW5kZXg6IDg4OCxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICA8QnJhbmQgY2xhc3NOYW1lPVwic3dlZXRtZW51X19uYXYtLWJyYW5kXCI+XG4gICAgICAgICAgICAgICAgPHN2ZyB2ZXJzaW9uPVwiMS4xXCJcbiAgICAgICAgICAgICAgICBcdCBzdHlsZT17eyBmaWxsOiAnd2hpdGUnfX1cbiAgICAgICAgICAgICAgICBcdCB4PVwiMHB4XCIgeT1cIjBweFwiIHdpZHRoPVwiMTQ0LjJweFwiIGhlaWdodD1cIjMycHhcIiB2aWV3Qm94PVwiMCAwIDE0NC4yIDMyXCI+XG4gICAgICAgICAgICAgICAgICA8Zz5cbiAgICAgICAgICAgICAgICAgIFx0PHBhdGggY2xhc3M9XCJzdDBcIiBkPVwiTTE2LDBjOC44LDAsMTYsNy4yLDE2LDE2YzAsNi4yLTMuNiwxMS42LTguOCwxNC4zdi00LjJ2LTdWOC45Yy01LjEsMC01LjYsMTcuMi01LjYsMTcuMkgyMXY1LjFcbiAgICAgICAgICAgICAgICAgIFx0XHRjLTEuNiwwLjUtMy4yLDAuOC01LDAuOGMtMS4yLDAtMi40LTAuMS0zLjUtMC40VjIxLjFjMS45LTAuNCwzLjMtMi4xLDMuMy00LjFWOS44YzAtMC41LTAuNC0wLjktMC45LTAuOWMtMC41LDAtMC45LDAuNC0wLjksMC45XG4gICAgICAgICAgICAgICAgICBcdFx0VjE3YzAsMS0wLjYsMS45LTEuNSwyLjJWOS44YzAtMC41LTAuNC0wLjktMC45LTAuOXMtMC45LDAuNC0wLjksMC45djkuNEM5LjgsMTguOSw5LjIsMTgsOS4yLDE3VjkuOGMwLTAuNS0wLjQtMC45LTAuOS0wLjlcbiAgICAgICAgICAgICAgICAgIFx0XHRjLTAuNSwwLTAuOSwwLjQtMC45LDAuOVYxN2MwLDIsMS40LDMuNywzLjMsNC4xdjEwQzQuNSwyOC45LDAsMjMsMCwxNkMwLDcuMiw3LjIsMCwxNiwwelwiLz5cbiAgICAgICAgICAgICAgICAgIFx0PGc+XG4gICAgICAgICAgICAgICAgICBcdFx0PHBhdGggY2xhc3M9XCJzdDBcIiBkPVwiTTQ3LjQsMTEuMkw0NC45LDEyYy0wLjEtMC41LTAuMy0xLTAuOC0xLjRjLTAuNC0wLjQtMS0wLjYtMS44LTAuNmMtMC43LDAtMS4yLDAuMi0xLjYsMC41XG4gICAgICAgICAgICAgICAgICBcdFx0XHRjLTAuNCwwLjQtMC42LDAuOC0wLjYsMS4zYzAsMC45LDAuNSwxLjQsMS41LDEuNmwyLDAuNGMxLjIsMC4yLDIuMiwwLjcsMi45LDEuNWMwLjcsMC44LDEsMS42LDEsMi43YzAsMS4yLTAuNSwyLjItMS40LDMuMVxuICAgICAgICAgICAgICAgICAgXHRcdFx0Yy0wLjksMC45LTIuMiwxLjMtMy43LDEuM2MtMC45LDAtMS43LTAuMS0yLjQtMC40Yy0wLjctMC4zLTEuMy0wLjYtMS43LTEuMWMtMC40LTAuNC0wLjgtMC45LTEtMS40Yy0wLjItMC41LTAuNC0xLTAuNC0xLjVcbiAgICAgICAgICAgICAgICAgIFx0XHRcdGwyLjUtMC43YzAuMSwwLjgsMC40LDEuNCwwLjksMS45YzAuNSwwLjUsMS4zLDAuOCwyLjIsMC44YzAuNywwLDEuMy0wLjIsMS43LTAuNWMwLjQtMC4zLDAuNi0wLjcsMC42LTEuM2MwLTAuNC0wLjEtMC44LTAuNC0xLjFcbiAgICAgICAgICAgICAgICAgIFx0XHRcdHMtMC43LTAuNS0xLjMtMC42bC0yLTAuNGMtMS4xLTAuMi0yLTAuNy0yLjctMS40Yy0wLjctMC43LTEtMS42LTEtMi42YzAtMS4yLDAuNS0yLjMsMS40LTMuMWMxLTAuOCwyLjEtMS4zLDMuNS0xLjNcbiAgICAgICAgICAgICAgICAgIFx0XHRcdGMwLjgsMCwxLjUsMC4xLDIuMiwwLjNjMC42LDAuMiwxLjEsMC41LDEuNSwwLjljMC40LDAuNCwwLjcsMC44LDAuOSwxLjJDNDcuMSwxMC40LDQ3LjMsMTAuOCw0Ny40LDExLjJ6XCIvPlxuICAgICAgICAgICAgICAgICAgXHRcdDxwYXRoIGNsYXNzPVwic3QwXCIgZD1cIk01NSwxMi4yaDIuOGwyLjEsNi4zbDEuOC02LjNoMi42TDYxLjMsMjJoLTIuNmwtMi4zLTYuN0w1NC4xLDIyaC0yLjdsLTMuMS05LjhINTFsMS44LDYuM0w1NSwxMi4yelwiLz5cbiAgICAgICAgICAgICAgICAgIFx0XHQ8cGF0aCBjbGFzcz1cInN0MFwiIGQ9XCJNNzIuMywxOC41bDIuMiwwLjdjLTAuMywwLjktMC44LDEuNi0xLjYsMi4yYy0wLjgsMC42LTEuNywwLjktMi45LDAuOWMtMS40LDAtMi42LTAuNS0zLjYtMS40XG4gICAgICAgICAgICAgICAgICBcdFx0XHRjLTEtMC45LTEuNS0yLjItMS41LTMuOGMwLTEuNSwwLjUtMi44LDEuNC0zLjdjMS0xLDIuMS0xLjQsMy40LTEuNGMxLjUsMCwyLjcsMC41LDMuNiwxLjRjMC45LDAuOSwxLjMsMi4xLDEuMywzLjdcbiAgICAgICAgICAgICAgICAgIFx0XHRcdGMwLDAuMSwwLDAuMiwwLDAuNGMwLDAuMSwwLDAuMiwwLDAuM2wwLDAuMWgtN2MwLDAuNiwwLjMsMS4yLDAuOCwxLjZjMC41LDAuNCwxLDAuNiwxLjcsMC42QzcxLjIsMjAsNzEuOSwxOS41LDcyLjMsMTguNXpcbiAgICAgICAgICAgICAgICAgIFx0XHRcdCBNNjcuNiwxNkg3MmMwLTAuNS0wLjItMS0wLjYtMS40Yy0wLjQtMC40LTAuOS0wLjYtMS42LTAuNmMtMC42LDAtMS4yLDAuMi0xLjYsMC42QzY3LjksMTUsNjcuNywxNS41LDY3LjYsMTZ6XCIvPlxuICAgICAgICAgICAgICAgICAgXHRcdDxwYXRoIGNsYXNzPVwic3QwXCIgZD1cIk04My4zLDE4LjVsMi4yLDAuN2MtMC4zLDAuOS0wLjgsMS42LTEuNiwyLjJjLTAuOCwwLjYtMS43LDAuOS0yLjksMC45Yy0xLjQsMC0yLjYtMC41LTMuNi0xLjRcbiAgICAgICAgICAgICAgICAgIFx0XHRcdGMtMS0wLjktMS41LTIuMi0xLjUtMy44YzAtMS41LDAuNS0yLjgsMS40LTMuN2MxLTEsMi4xLTEuNCwzLjQtMS40YzEuNSwwLDIuNywwLjUsMy42LDEuNGMwLjksMC45LDEuMywyLjEsMS4zLDMuN1xuICAgICAgICAgICAgICAgICAgXHRcdFx0YzAsMC4xLDAsMC4yLDAsMC40YzAsMC4xLDAsMC4yLDAsMC4zbDAsMC4xaC03YzAsMC42LDAuMywxLjIsMC44LDEuNmMwLjUsMC40LDEsMC42LDEuNywwLjZDODIuMiwyMCw4Mi45LDE5LjUsODMuMywxOC41elxuICAgICAgICAgICAgICAgICAgXHRcdFx0IE03OC43LDE2SDgzYzAtMC41LTAuMi0xLTAuNi0xLjRjLTAuNC0wLjQtMC45LTAuNi0xLjYtMC42Yy0wLjYsMC0xLjIsMC4yLTEuNiwwLjZDNzguOSwxNSw3OC43LDE1LjUsNzguNywxNnpcIi8+XG4gICAgICAgICAgICAgICAgICBcdFx0PHBhdGggY2xhc3M9XCJzdDBcIiBkPVwiTTkxLDkuM3YyLjloMnYyLjNoLTJ2NC4xYzAsMC40LDAuMSwwLjcsMC4zLDAuOWMwLjIsMC4yLDAuNSwwLjMsMC45LDAuM2MwLjQsMCwwLjYsMCwwLjgtMC4xdjIuMlxuICAgICAgICAgICAgICAgICAgXHRcdFx0Yy0wLjQsMC4yLTAuOSwwLjItMS41LDAuMmMtMSwwLTEuNy0wLjMtMi4zLTAuOGMtMC42LTAuNS0wLjgtMS4zLTAuOC0yLjJ2LTQuNmgtMS44di0yLjNoMC41YzAuNSwwLDAuOS0wLjEsMS4xLTAuNFxuICAgICAgICAgICAgICAgICAgXHRcdFx0YzAuMy0wLjMsMC40LTAuNywwLjQtMS4xVjkuM0g5MXpcIi8+XG4gICAgICAgICAgICAgICAgICBcdFx0PHBhdGggY2xhc3M9XCJzdDBcIiBkPVwiTTk3LjcsMjJoLTIuNnYtOS44aDIuNXYxLjJjMC4zLTAuNSwwLjctMC44LDEuMi0xLjFjMC41LTAuMywxLjEtMC40LDEuNy0wLjRjMS40LDAsMi40LDAuNSwyLjksMS42XG4gICAgICAgICAgICAgICAgICBcdFx0XHRjMC43LTEuMSwxLjctMS42LDMuMS0xLjZjMSwwLDEuOCwwLjMsMi41LDAuOWMwLjcsMC42LDEsMS42LDEsMi44VjIyaC0yLjZ2LTUuOGMwLTAuNi0wLjEtMS0wLjQtMS4zYy0wLjMtMC4zLTAuNy0wLjUtMS4zLTAuNVxuICAgICAgICAgICAgICAgICAgXHRcdFx0Yy0wLjUsMC0xLDAuMi0xLjMsMC42Yy0wLjMsMC40LTAuNSwwLjgtMC41LDEuNFYyMmgtMi42di01LjhjMC0wLjYtMC4xLTEtMC40LTEuM2MtMC4zLTAuMy0wLjctMC41LTEuMy0wLjVjLTAuNiwwLTEsMC4yLTEuMywwLjVcbiAgICAgICAgICAgICAgICAgIFx0XHRcdGMtMC4zLDAuNC0wLjUsMC44LTAuNSwxLjRWMjJ6XCIvPlxuICAgICAgICAgICAgICAgICAgXHRcdDxwYXRoIGNsYXNzPVwic3QwXCIgZD1cIk0xMTkuMywxOC41bDIuMiwwLjdjLTAuMywwLjktMC44LDEuNi0xLjYsMi4yYy0wLjgsMC42LTEuNywwLjktMi45LDAuOWMtMS40LDAtMi42LTAuNS0zLjYtMS40XG4gICAgICAgICAgICAgICAgICBcdFx0XHRjLTEtMC45LTEuNS0yLjItMS41LTMuOGMwLTEuNSwwLjUtMi44LDEuNC0zLjdjMS0xLDIuMS0xLjQsMy40LTEuNGMxLjUsMCwyLjcsMC41LDMuNiwxLjRjMC45LDAuOSwxLjMsMi4xLDEuMywzLjdcbiAgICAgICAgICAgICAgICAgIFx0XHRcdGMwLDAuMSwwLDAuMiwwLDAuNGMwLDAuMSwwLDAuMiwwLDAuM2wwLDAuMWgtN2MwLDAuNiwwLjMsMS4yLDAuOCwxLjZjMC41LDAuNCwxLDAuNiwxLjcsMC42QzExOC4yLDIwLDExOC45LDE5LjUsMTE5LjMsMTguNXpcbiAgICAgICAgICAgICAgICAgIFx0XHRcdCBNMTE0LjcsMTZoNC40YzAtMC41LTAuMi0xLTAuNi0xLjRjLTAuNC0wLjQtMC45LTAuNi0xLjYtMC42Yy0wLjYsMC0xLjIsMC4yLTEuNiwwLjZDMTE0LjksMTUsMTE0LjcsMTUuNSwxMTQuNywxNnpcIi8+XG4gICAgICAgICAgICAgICAgICBcdFx0PHBhdGggY2xhc3M9XCJzdDBcIiBkPVwiTTEyNi40LDE2LjRWMjJoLTIuNnYtOS44aDIuNnYxLjJjMC4zLTAuNSwwLjctMC44LDEuMi0xLjFjMC41LTAuMywxLjEtMC40LDEuNi0wLjRjMS4yLDAsMiwwLjQsMi42LDEuMVxuICAgICAgICAgICAgICAgICAgXHRcdFx0YzAuNiwwLjcsMC45LDEuNywwLjksMi44VjIySDEzMHYtNS43YzAtMC42LTAuMS0xLjEtMC40LTEuNGMtMC4zLTAuNC0wLjgtMC41LTEuNC0wLjVjLTAuNiwwLTEsMC4yLTEuMywwLjZcbiAgICAgICAgICAgICAgICAgIFx0XHRcdEMxMjYuNiwxNS4zLDEyNi40LDE1LjgsMTI2LjQsMTYuNHpcIi8+XG4gICAgICAgICAgICAgICAgICBcdFx0PHBhdGggY2xhc3M9XCJzdDBcIiBkPVwiTTE0MS43LDIyYy0wLjEtMC4zLTAuMS0wLjYtMC4xLTEuMWMtMC4zLDAuNC0wLjYsMC44LTEuMSwxYy0wLjUsMC4yLTEsMC4zLTEuNiwwLjNjLTEuMiwwLTIuMS0wLjQtMi43LTEuMVxuICAgICAgICAgICAgICAgICAgXHRcdFx0Yy0wLjctMC43LTEtMS43LTEtMi44di02LjJoMi42djUuN2MwLDAuNiwwLjIsMS4xLDAuNSwxLjRjMC4zLDAuNCwwLjcsMC41LDEuMywwLjVjMC42LDAsMS0wLjIsMS40LTAuNWMwLjMtMC40LDAuNS0wLjgsMC41LTEuNFxuICAgICAgICAgICAgICAgICAgXHRcdFx0di01LjdoMi42djhjMCwwLjYsMCwxLjIsMC4xLDEuOEgxNDEuN3pcIi8+XG4gICAgICAgICAgICAgICAgICBcdDwvZz5cbiAgICAgICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgPC9CcmFuZD5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uPVwicm93IG5vd3JhcFwiXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgICAgIGZvbnRTaXplPXsxfVxuICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgbXI9XCIuNXJlbVwiXG4gICAgICAgICAgICAgICAgZm9udEZhbWlseT1cImJvZHlcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgUXVlc3Rpb25zP1xuICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJtYWlsdG86Y2hyaXNAc3dlZXRtZW51LmNvXCI+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgcD1cIi41cmVtIDFyZW1cIlxuICAgICAgICAgICAgICAgICAgZm9udFdlaWdodD1cImJvbGRcIlxuICAgICAgICAgICAgICAgICAgYmc9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgIGNvbG9yPVwid2hpdGVcIlxuICAgICAgICAgICAgICAgICAgZm9udFNpemU9ezF9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgRW1haWwgQ2hyaXNcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj48L2E+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8RmxleFxuICAgICAgICAgICAgZmxleERpcmVjdGlvbj17Wydjb2x1bW4nLCAnY29sdW1uJywgJ2NvbHVtbicsICdyb3cnXX1cbiAgICAgICAgICAgIGFsaWduSXRlbXM9XCJzdHJldGNoXCJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwiZmxleC1zdGFydFwiXG4gICAgICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcbiAgICAgICAgICAgIG1pbkhlaWdodD1cIjEwMHZoXCJcbiAgICAgICAgICAgIGZvbnRGYW1pbHk9XCJib2R5XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgICAgICAgZmxleD1cIjFcIlxuICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCJcbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICBwPXtbNCw0LDQsNl19XG4gICAgICAgICAgICAgIHB0PVwiODBweFwiXG4gICAgICAgICAgICAgIHBiPVwiODBweFwiXG4gICAgICAgICAgICAgIGJnPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN3ZWV0bWVudV9fYXNpZGVcIj5cbiAgICAgICAgICAgICAgPEhlYWRpbmdcbiAgICAgICAgICAgICAgICBmb250U2l6ZT17WyA1LCA1LCA2IF19XG4gICAgICAgICAgICAgICAgY29sb3I9J3doaXRlJ1xuICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk9XCJpbmhlcml0XCJcbiAgICAgICAgICAgICAgICBtYj17Mn1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzd2VldG1lbnVfX2FzaWRlLS10aXRsZVwiPlxuICAgICAgICAgICAgICAgIFNlZWluZyBpcyBiZWxpZXZpbmdcbiAgICAgICAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgICAgIGNvbG9yPVwid2hpdGVcIlxuICAgICAgICAgICAgICAgIGZvbnRTaXplPXtbMiwyLCAzXX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzd2VldG1lbnVfX2FzaWRlLS1jYXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgV2UgY291bGQgZ28gb24gYW5kIG9uIGFib3V0IGhvdyBTd2VldG1lbnUgY2FuIHRyYW5zZm9ybSB5b3VyIHJlc3RhdXJhbnQncyB3ZWJzaXRlLiBCdXQgd2UgZG9uJ3Qgd2FudCB5b3UgdG8gaGF2ZSB0byB0YWtlIG91ciB3b3JkIGZvciBpdC5cbiAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgU28gZmlsbCBvdXQgdGhlIGZvcm0gYW5kIHlvdSBjYW4gc2VlIGZvciB5b3Vyc2VsZiwgcmlzay1mcmVlLCBleGFjdGx5IGhvdyByZXZvbHV0aW9uYXJ5IFN3ZWV0bWVudSBpcy5cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgICAgICAgZmxleD17Wydpbml0aWFsJywgJ2luaXRpYWwnLCAnaW5pdGlhbCcsIDFdfVxuICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCJcbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVwic3RyZXRjaFwiXG4gICAgICAgICAgICAgIHA9e1s0LDQsNCw2XX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3dlZXRtZW51X19mb3JtXCI+XG4gICAgICAgICAgICAgIDxmb3JtIG1ldGhvZD1cInBvc3RcIiBkYXRhLW5ldGxpZnk9XCJ0cnVlXCIgZGF0YS1uZXRsaWZ5LWhvbmV5cG90PVwiYm90LWZpZWxkXCIgbmFtZT1cImRlbW9cIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJmb3JtLW5hbWVcIiB2YWx1ZT1cImRlbW9cIiAvPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cImJvdC1maWVsZFwiIC8+XG4gICAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgICAgbWI9ezN9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzd2VldG1lbnVfX2Zvcm0tLWlucHV0R3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgIDxMYWJlbFxuICAgICAgICAgICAgICAgICAgICBtYj17Mn1cbiAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodD1cImJvbGRcIlxuICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwiZnVsbE5hbWVcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzd2VldG1lbnVfX2Zvcm0tLWlucHV0TGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgRnVsbCBuYW1lXG4gICAgICAgICAgICAgICAgICA8L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgIGF1dG9Gb2N1c1xuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICBiZz1cIiNlZmVmZWZcIlxuICAgICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI0cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDBcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgcD17M31cbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUaG9tYXMgS2VsbGVyXCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZnVsbE5hbWVcIiAvPlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICAgIG1iPXszfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3dlZXRtZW51X19mb3JtLS1pbnB1dEdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICA8TGFiZWxcbiAgICAgICAgICAgICAgICAgICAgbWI9ezJ9XG4gICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCJib2xkXCJcbiAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3dlZXRtZW51X19mb3JtLS1pbnB1dExhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgIEVtYWlsXG4gICAgICAgICAgICAgICAgICA8L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgIGJnPVwiI2VmZWZlZlwiXG4gICAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjRweFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBwPXszfVxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInRrZWxsZXJAdGhlZnJlbmNobGF1bmRyeS5jb21cIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIiAvPlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICAgIG1iPXszfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3dlZXRtZW51X19mb3JtLS1pbnB1dEdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICA8TGFiZWxcbiAgICAgICAgICAgICAgICAgICAgbWI9ezJ9XG4gICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCJib2xkXCJcbiAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cInJlc3RhdXJhbnRcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzd2VldG1lbnVfX2Zvcm0tLWlucHV0TGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgUmVzdGF1cmFudFxuICAgICAgICAgICAgICAgICAgPC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICBiZz1cIiNlZmVmZWZcIlxuICAgICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI0cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDBcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgcD17M31cbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUaGUgRnJlbmNoIExhdW5kcnlcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJyZXN0YXVyYW50XCIgLz5cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgICBtYj17M31cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN3ZWV0bWVudV9fZm9ybS0taW5wdXRHcm91cFwiPlxuICAgICAgICAgICAgICAgICAgPExhYmVsXG4gICAgICAgICAgICAgICAgICAgIG1iPXsyfVxuICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0PVwiYm9sZFwiXG4gICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJ3ZWJzaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3dlZXRtZW51X19mb3JtLS1pbnB1dExhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgIFdlYnNpdGVcbiAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgYmc9XCIjZWZlZmVmXCJcbiAgICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAwXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIHA9ezN9XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiaHR0cHM6Ly90aGVmcmVuY2hsYXVuZHJ5LmNvbVwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ1cmxcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwid2Vic2l0ZVwiIC8+XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3dlZXRtZW51X19mb3JtLS1zdWJtaXRHcm91cFwiPlxuICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk9XCJpbmxpbmUtZmxleFwiXG4gICAgICAgICAgICAgICAgICAgIGJnPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwid2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cImluaXRpYWxcIlxuICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0PVwiYm9sZFwiXG4gICAgICAgICAgICAgICAgICAgIHA9XCIxcmVtIDEuNXJlbVwiXG4gICAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6ICdyaWdodCcsXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNHB4J1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJSZXF1ZXN0IGRlbW9cIiBjbGFzc05hbWU9XCJzd2VldG1lbnVfX2Zvcm0tLXN1Ym1pdFwiPlxuICAgICAgICAgICAgICAgICAgPC9JbnB1dD5cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPC9GbGV4PlxuICAgICAgICA8L1BhZ2U+XG4gICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgKTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IERlbW87XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

const Brand = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div", {
  target: "e1lbjwjd1",
  label: "Brand"
})(false ? undefined : {
  name: "ifmpvz",
  styles: "font-size:1rem;font-weight:bold;color:#fff;display:flex;flex-flow:row nowrap;align-items:center;cursor:pointer;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9DaHJpcy9zd2VldG1lbnUvd3d3L3BhZ2VzL2RlbW8vaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEJ3QiIsImZpbGUiOiIvVXNlcnMvQ2hyaXMvc3dlZXRtZW51L3d3dy9wYWdlcy9kZW1vL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHsgR2xvYmFsIH0gZnJvbSAnQGVtb3Rpb24vY29yZSdcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICdlbW90aW9uLXRoZW1pbmcnXG5pbXBvcnQge1xuICBIZWFkaW5nLFxuICBGbGV4LFxuICBDYXJkLFxuICBUZXh0LFxuICBCb3gsXG4gIEJ1dHRvblxufSBmcm9tICdyZWJhc3MnXG5pbXBvcnQge1xuICBMYWJlbCxcbiAgSW5wdXRcbn0gZnJvbSAnQHJlYmFzcy9mb3JtcydcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuaW1wb3J0IHRoZW1lIGZyb20gJy4uLy4uL3RoZW1lLmpzJ1xuXG5jb25zdCBQYWdlID0gc3R5bGVkLmRpdmBcbiAgaGVpZ2h0OiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbmA7XG5cbmNvbnN0IEJyYW5kID0gc3R5bGVkLmRpdmBcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICNmZmY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuYDtcblxuY29uc3QgQnJhbmRJY29uID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMzJweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9zdGF0aWMvc3dlZXRtZW51LWZhdmljb24ucG5nKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbmA7XG5cbmNsYXNzIERlbW8gZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgPFBhZ2UgY2xhc3NOYW1lPVwic3dlZXRtZW51X19wYWdlXCI+XG4gICAgICAgICAgPEdsb2JhbFxuICAgICAgICAgICAgc3R5bGVzPXt7XG4gICAgICAgICAgICAgICdib2R5LCBodG1sJzoge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdib2R5J1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICA8dGl0bGU+R2V0IGEgZGVtbyB8IFN3ZWV0bWVudTwvdGl0bGU+XG4gICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIGhyZWY9XCIvc3RhdGljL3N3ZWV0bWVudS1mYXZpY29uLnBuZ1wiLz5cbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgICAgIGhlaWdodD1cIjY0cHhcIlxuICAgICAgICAgICAgcGw9e1s0LDQsNCw2XX1cbiAgICAgICAgICAgIHByPXtbNCw0LDQsNl19XG4gICAgICAgICAgICB3aWR0aD1cIjEwMHZ3XCJcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb249XCJyb3dcIlxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInN3ZWV0bWVudV9fbmF2XCJcbiAgICAgICAgICAgIGZvbnRGYW1pbHk9XCJib2R5XCJcbiAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgICAgICAgICB6SW5kZXg6IDg4OCxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICA8QnJhbmQgY2xhc3NOYW1lPVwic3dlZXRtZW51X19uYXYtLWJyYW5kXCI+XG4gICAgICAgICAgICAgICAgPHN2ZyB2ZXJzaW9uPVwiMS4xXCJcbiAgICAgICAgICAgICAgICBcdCBzdHlsZT17eyBmaWxsOiAnd2hpdGUnfX1cbiAgICAgICAgICAgICAgICBcdCB4PVwiMHB4XCIgeT1cIjBweFwiIHdpZHRoPVwiMTQ0LjJweFwiIGhlaWdodD1cIjMycHhcIiB2aWV3Qm94PVwiMCAwIDE0NC4yIDMyXCI+XG4gICAgICAgICAgICAgICAgICA8Zz5cbiAgICAgICAgICAgICAgICAgIFx0PHBhdGggY2xhc3M9XCJzdDBcIiBkPVwiTTE2LDBjOC44LDAsMTYsNy4yLDE2LDE2YzAsNi4yLTMuNiwxMS42LTguOCwxNC4zdi00LjJ2LTdWOC45Yy01LjEsMC01LjYsMTcuMi01LjYsMTcuMkgyMXY1LjFcbiAgICAgICAgICAgICAgICAgIFx0XHRjLTEuNiwwLjUtMy4yLDAuOC01LDAuOGMtMS4yLDAtMi40LTAuMS0zLjUtMC40VjIxLjFjMS45LTAuNCwzLjMtMi4xLDMuMy00LjFWOS44YzAtMC41LTAuNC0wLjktMC45LTAuOWMtMC41LDAtMC45LDAuNC0wLjksMC45XG4gICAgICAgICAgICAgICAgICBcdFx0VjE3YzAsMS0wLjYsMS45LTEuNSwyLjJWOS44YzAtMC41LTAuNC0wLjktMC45LTAuOXMtMC45LDAuNC0wLjksMC45djkuNEM5LjgsMTguOSw5LjIsMTgsOS4yLDE3VjkuOGMwLTAuNS0wLjQtMC45LTAuOS0wLjlcbiAgICAgICAgICAgICAgICAgIFx0XHRjLTAuNSwwLTAuOSwwLjQtMC45LDAuOVYxN2MwLDIsMS40LDMuNywzLjMsNC4xdjEwQzQuNSwyOC45LDAsMjMsMCwxNkMwLDcuMiw3LjIsMCwxNiwwelwiLz5cbiAgICAgICAgICAgICAgICAgIFx0PGc+XG4gICAgICAgICAgICAgICAgICBcdFx0PHBhdGggY2xhc3M9XCJzdDBcIiBkPVwiTTQ3LjQsMTEuMkw0NC45LDEyYy0wLjEtMC41LTAuMy0xLTAuOC0xLjRjLTAuNC0wLjQtMS0wLjYtMS44LTAuNmMtMC43LDAtMS4yLDAuMi0xLjYsMC41XG4gICAgICAgICAgICAgICAgICBcdFx0XHRjLTAuNCwwLjQtMC42LDAuOC0wLjYsMS4zYzAsMC45LDAuNSwxLjQsMS41LDEuNmwyLDAuNGMxLjIsMC4yLDIuMiwwLjcsMi45LDEuNWMwLjcsMC44LDEsMS42LDEsMi43YzAsMS4yLTAuNSwyLjItMS40LDMuMVxuICAgICAgICAgICAgICAgICAgXHRcdFx0Yy0wLjksMC45LTIuMiwxLjMtMy43LDEuM2MtMC45LDAtMS43LTAuMS0yLjQtMC40Yy0wLjctMC4zLTEuMy0wLjYtMS43LTEuMWMtMC40LTAuNC0wLjgtMC45LTEtMS40Yy0wLjItMC41LTAuNC0xLTAuNC0xLjVcbiAgICAgICAgICAgICAgICAgIFx0XHRcdGwyLjUtMC43YzAuMSwwLjgsMC40LDEuNCwwLjksMS45YzAuNSwwLjUsMS4zLDAuOCwyLjIsMC44YzAuNywwLDEuMy0wLjIsMS43LTAuNWMwLjQtMC4zLDAuNi0wLjcsMC42LTEuM2MwLTAuNC0wLjEtMC44LTAuNC0xLjFcbiAgICAgICAgICAgICAgICAgIFx0XHRcdHMtMC43LTAuNS0xLjMtMC42bC0yLTAuNGMtMS4xLTAuMi0yLTAuNy0yLjctMS40Yy0wLjctMC43LTEtMS42LTEtMi42YzAtMS4yLDAuNS0yLjMsMS40LTMuMWMxLTAuOCwyLjEtMS4zLDMuNS0xLjNcbiAgICAgICAgICAgICAgICAgIFx0XHRcdGMwLjgsMCwxLjUsMC4xLDIuMiwwLjNjMC42LDAuMiwxLjEsMC41LDEuNSwwLjljMC40LDAuNCwwLjcsMC44LDAuOSwxLjJDNDcuMSwxMC40LDQ3LjMsMTAuOCw0Ny40LDExLjJ6XCIvPlxuICAgICAgICAgICAgICAgICAgXHRcdDxwYXRoIGNsYXNzPVwic3QwXCIgZD1cIk01NSwxMi4yaDIuOGwyLjEsNi4zbDEuOC02LjNoMi42TDYxLjMsMjJoLTIuNmwtMi4zLTYuN0w1NC4xLDIyaC0yLjdsLTMuMS05LjhINTFsMS44LDYuM0w1NSwxMi4yelwiLz5cbiAgICAgICAgICAgICAgICAgIFx0XHQ8cGF0aCBjbGFzcz1cInN0MFwiIGQ9XCJNNzIuMywxOC41bDIuMiwwLjdjLTAuMywwLjktMC44LDEuNi0xLjYsMi4yYy0wLjgsMC42LTEuNywwLjktMi45LDAuOWMtMS40LDAtMi42LTAuNS0zLjYtMS40XG4gICAgICAgICAgICAgICAgICBcdFx0XHRjLTEtMC45LTEuNS0yLjItMS41LTMuOGMwLTEuNSwwLjUtMi44LDEuNC0zLjdjMS0xLDIuMS0xLjQsMy40LTEuNGMxLjUsMCwyLjcsMC41LDMuNiwxLjRjMC45LDAuOSwxLjMsMi4xLDEuMywzLjdcbiAgICAgICAgICAgICAgICAgIFx0XHRcdGMwLDAuMSwwLDAuMiwwLDAuNGMwLDAuMSwwLDAuMiwwLDAuM2wwLDAuMWgtN2MwLDAuNiwwLjMsMS4yLDAuOCwxLjZjMC41LDAuNCwxLDAuNiwxLjcsMC42QzcxLjIsMjAsNzEuOSwxOS41LDcyLjMsMTguNXpcbiAgICAgICAgICAgICAgICAgIFx0XHRcdCBNNjcuNiwxNkg3MmMwLTAuNS0wLjItMS0wLjYtMS40Yy0wLjQtMC40LTAuOS0wLjYtMS42LTAuNmMtMC42LDAtMS4yLDAuMi0xLjYsMC42QzY3LjksMTUsNjcuNywxNS41LDY3LjYsMTZ6XCIvPlxuICAgICAgICAgICAgICAgICAgXHRcdDxwYXRoIGNsYXNzPVwic3QwXCIgZD1cIk04My4zLDE4LjVsMi4yLDAuN2MtMC4zLDAuOS0wLjgsMS42LTEuNiwyLjJjLTAuOCwwLjYtMS43LDAuOS0yLjksMC45Yy0xLjQsMC0yLjYtMC41LTMuNi0xLjRcbiAgICAgICAgICAgICAgICAgIFx0XHRcdGMtMS0wLjktMS41LTIuMi0xLjUtMy44YzAtMS41LDAuNS0yLjgsMS40LTMuN2MxLTEsMi4xLTEuNCwzLjQtMS40YzEuNSwwLDIuNywwLjUsMy42LDEuNGMwLjksMC45LDEuMywyLjEsMS4zLDMuN1xuICAgICAgICAgICAgICAgICAgXHRcdFx0YzAsMC4xLDAsMC4yLDAsMC40YzAsMC4xLDAsMC4yLDAsMC4zbDAsMC4xaC03YzAsMC42LDAuMywxLjIsMC44LDEuNmMwLjUsMC40LDEsMC42LDEuNywwLjZDODIuMiwyMCw4Mi45LDE5LjUsODMuMywxOC41elxuICAgICAgICAgICAgICAgICAgXHRcdFx0IE03OC43LDE2SDgzYzAtMC41LTAuMi0xLTAuNi0xLjRjLTAuNC0wLjQtMC45LTAuNi0xLjYtMC42Yy0wLjYsMC0xLjIsMC4yLTEuNiwwLjZDNzguOSwxNSw3OC43LDE1LjUsNzguNywxNnpcIi8+XG4gICAgICAgICAgICAgICAgICBcdFx0PHBhdGggY2xhc3M9XCJzdDBcIiBkPVwiTTkxLDkuM3YyLjloMnYyLjNoLTJ2NC4xYzAsMC40LDAuMSwwLjcsMC4zLDAuOWMwLjIsMC4yLDAuNSwwLjMsMC45LDAuM2MwLjQsMCwwLjYsMCwwLjgtMC4xdjIuMlxuICAgICAgICAgICAgICAgICAgXHRcdFx0Yy0wLjQsMC4yLTAuOSwwLjItMS41LDAuMmMtMSwwLTEuNy0wLjMtMi4zLTAuOGMtMC42LTAuNS0wLjgtMS4zLTAuOC0yLjJ2LTQuNmgtMS44di0yLjNoMC41YzAuNSwwLDAuOS0wLjEsMS4xLTAuNFxuICAgICAgICAgICAgICAgICAgXHRcdFx0YzAuMy0wLjMsMC40LTAuNywwLjQtMS4xVjkuM0g5MXpcIi8+XG4gICAgICAgICAgICAgICAgICBcdFx0PHBhdGggY2xhc3M9XCJzdDBcIiBkPVwiTTk3LjcsMjJoLTIuNnYtOS44aDIuNXYxLjJjMC4zLTAuNSwwLjctMC44LDEuMi0xLjFjMC41LTAuMywxLjEtMC40LDEuNy0wLjRjMS40LDAsMi40LDAuNSwyLjksMS42XG4gICAgICAgICAgICAgICAgICBcdFx0XHRjMC43LTEuMSwxLjctMS42LDMuMS0xLjZjMSwwLDEuOCwwLjMsMi41LDAuOWMwLjcsMC42LDEsMS42LDEsMi44VjIyaC0yLjZ2LTUuOGMwLTAuNi0wLjEtMS0wLjQtMS4zYy0wLjMtMC4zLTAuNy0wLjUtMS4zLTAuNVxuICAgICAgICAgICAgICAgICAgXHRcdFx0Yy0wLjUsMC0xLDAuMi0xLjMsMC42Yy0wLjMsMC40LTAuNSwwLjgtMC41LDEuNFYyMmgtMi42di01LjhjMC0wLjYtMC4xLTEtMC40LTEuM2MtMC4zLTAuMy0wLjctMC41LTEuMy0wLjVjLTAuNiwwLTEsMC4yLTEuMywwLjVcbiAgICAgICAgICAgICAgICAgIFx0XHRcdGMtMC4zLDAuNC0wLjUsMC44LTAuNSwxLjRWMjJ6XCIvPlxuICAgICAgICAgICAgICAgICAgXHRcdDxwYXRoIGNsYXNzPVwic3QwXCIgZD1cIk0xMTkuMywxOC41bDIuMiwwLjdjLTAuMywwLjktMC44LDEuNi0xLjYsMi4yYy0wLjgsMC42LTEuNywwLjktMi45LDAuOWMtMS40LDAtMi42LTAuNS0zLjYtMS40XG4gICAgICAgICAgICAgICAgICBcdFx0XHRjLTEtMC45LTEuNS0yLjItMS41LTMuOGMwLTEuNSwwLjUtMi44LDEuNC0zLjdjMS0xLDIuMS0xLjQsMy40LTEuNGMxLjUsMCwyLjcsMC41LDMuNiwxLjRjMC45LDAuOSwxLjMsMi4xLDEuMywzLjdcbiAgICAgICAgICAgICAgICAgIFx0XHRcdGMwLDAuMSwwLDAuMiwwLDAuNGMwLDAuMSwwLDAuMiwwLDAuM2wwLDAuMWgtN2MwLDAuNiwwLjMsMS4yLDAuOCwxLjZjMC41LDAuNCwxLDAuNiwxLjcsMC42QzExOC4yLDIwLDExOC45LDE5LjUsMTE5LjMsMTguNXpcbiAgICAgICAgICAgICAgICAgIFx0XHRcdCBNMTE0LjcsMTZoNC40YzAtMC41LTAuMi0xLTAuNi0xLjRjLTAuNC0wLjQtMC45LTAuNi0xLjYtMC42Yy0wLjYsMC0xLjIsMC4yLTEuNiwwLjZDMTE0LjksMTUsMTE0LjcsMTUuNSwxMTQuNywxNnpcIi8+XG4gICAgICAgICAgICAgICAgICBcdFx0PHBhdGggY2xhc3M9XCJzdDBcIiBkPVwiTTEyNi40LDE2LjRWMjJoLTIuNnYtOS44aDIuNnYxLjJjMC4zLTAuNSwwLjctMC44LDEuMi0xLjFjMC41LTAuMywxLjEtMC40LDEuNi0wLjRjMS4yLDAsMiwwLjQsMi42LDEuMVxuICAgICAgICAgICAgICAgICAgXHRcdFx0YzAuNiwwLjcsMC45LDEuNywwLjksMi44VjIySDEzMHYtNS43YzAtMC42LTAuMS0xLjEtMC40LTEuNGMtMC4zLTAuNC0wLjgtMC41LTEuNC0wLjVjLTAuNiwwLTEsMC4yLTEuMywwLjZcbiAgICAgICAgICAgICAgICAgIFx0XHRcdEMxMjYuNiwxNS4zLDEyNi40LDE1LjgsMTI2LjQsMTYuNHpcIi8+XG4gICAgICAgICAgICAgICAgICBcdFx0PHBhdGggY2xhc3M9XCJzdDBcIiBkPVwiTTE0MS43LDIyYy0wLjEtMC4zLTAuMS0wLjYtMC4xLTEuMWMtMC4zLDAuNC0wLjYsMC44LTEuMSwxYy0wLjUsMC4yLTEsMC4zLTEuNiwwLjNjLTEuMiwwLTIuMS0wLjQtMi43LTEuMVxuICAgICAgICAgICAgICAgICAgXHRcdFx0Yy0wLjctMC43LTEtMS43LTEtMi44di02LjJoMi42djUuN2MwLDAuNiwwLjIsMS4xLDAuNSwxLjRjMC4zLDAuNCwwLjcsMC41LDEuMywwLjVjMC42LDAsMS0wLjIsMS40LTAuNWMwLjMtMC40LDAuNS0wLjgsMC41LTEuNFxuICAgICAgICAgICAgICAgICAgXHRcdFx0di01LjdoMi42djhjMCwwLjYsMCwxLjIsMC4xLDEuOEgxNDEuN3pcIi8+XG4gICAgICAgICAgICAgICAgICBcdDwvZz5cbiAgICAgICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgPC9CcmFuZD5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uPVwicm93IG5vd3JhcFwiXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgICAgIGZvbnRTaXplPXsxfVxuICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgbXI9XCIuNXJlbVwiXG4gICAgICAgICAgICAgICAgZm9udEZhbWlseT1cImJvZHlcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgUXVlc3Rpb25zP1xuICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJtYWlsdG86Y2hyaXNAc3dlZXRtZW51LmNvXCI+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgcD1cIi41cmVtIDFyZW1cIlxuICAgICAgICAgICAgICAgICAgZm9udFdlaWdodD1cImJvbGRcIlxuICAgICAgICAgICAgICAgICAgYmc9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgIGNvbG9yPVwid2hpdGVcIlxuICAgICAgICAgICAgICAgICAgZm9udFNpemU9ezF9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgRW1haWwgQ2hyaXNcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj48L2E+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8RmxleFxuICAgICAgICAgICAgZmxleERpcmVjdGlvbj17Wydjb2x1bW4nLCAnY29sdW1uJywgJ2NvbHVtbicsICdyb3cnXX1cbiAgICAgICAgICAgIGFsaWduSXRlbXM9XCJzdHJldGNoXCJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwiZmxleC1zdGFydFwiXG4gICAgICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcbiAgICAgICAgICAgIG1pbkhlaWdodD1cIjEwMHZoXCJcbiAgICAgICAgICAgIGZvbnRGYW1pbHk9XCJib2R5XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgICAgICAgZmxleD1cIjFcIlxuICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCJcbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICBwPXtbNCw0LDQsNl19XG4gICAgICAgICAgICAgIHB0PVwiODBweFwiXG4gICAgICAgICAgICAgIHBiPVwiODBweFwiXG4gICAgICAgICAgICAgIGJnPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN3ZWV0bWVudV9fYXNpZGVcIj5cbiAgICAgICAgICAgICAgPEhlYWRpbmdcbiAgICAgICAgICAgICAgICBmb250U2l6ZT17WyA1LCA1LCA2IF19XG4gICAgICAgICAgICAgICAgY29sb3I9J3doaXRlJ1xuICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk9XCJpbmhlcml0XCJcbiAgICAgICAgICAgICAgICBtYj17Mn1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzd2VldG1lbnVfX2FzaWRlLS10aXRsZVwiPlxuICAgICAgICAgICAgICAgIFNlZWluZyBpcyBiZWxpZXZpbmdcbiAgICAgICAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgICAgIGNvbG9yPVwid2hpdGVcIlxuICAgICAgICAgICAgICAgIGZvbnRTaXplPXtbMiwyLCAzXX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzd2VldG1lbnVfX2FzaWRlLS1jYXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgV2UgY291bGQgZ28gb24gYW5kIG9uIGFib3V0IGhvdyBTd2VldG1lbnUgY2FuIHRyYW5zZm9ybSB5b3VyIHJlc3RhdXJhbnQncyB3ZWJzaXRlLiBCdXQgd2UgZG9uJ3Qgd2FudCB5b3UgdG8gaGF2ZSB0byB0YWtlIG91ciB3b3JkIGZvciBpdC5cbiAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgU28gZmlsbCBvdXQgdGhlIGZvcm0gYW5kIHlvdSBjYW4gc2VlIGZvciB5b3Vyc2VsZiwgcmlzay1mcmVlLCBleGFjdGx5IGhvdyByZXZvbHV0aW9uYXJ5IFN3ZWV0bWVudSBpcy5cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgICAgICAgZmxleD17Wydpbml0aWFsJywgJ2luaXRpYWwnLCAnaW5pdGlhbCcsIDFdfVxuICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCJcbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVwic3RyZXRjaFwiXG4gICAgICAgICAgICAgIHA9e1s0LDQsNCw2XX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3dlZXRtZW51X19mb3JtXCI+XG4gICAgICAgICAgICAgIDxmb3JtIG1ldGhvZD1cInBvc3RcIiBkYXRhLW5ldGxpZnk9XCJ0cnVlXCIgZGF0YS1uZXRsaWZ5LWhvbmV5cG90PVwiYm90LWZpZWxkXCIgbmFtZT1cImRlbW9cIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJmb3JtLW5hbWVcIiB2YWx1ZT1cImRlbW9cIiAvPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cImJvdC1maWVsZFwiIC8+XG4gICAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgICAgbWI9ezN9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzd2VldG1lbnVfX2Zvcm0tLWlucHV0R3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgIDxMYWJlbFxuICAgICAgICAgICAgICAgICAgICBtYj17Mn1cbiAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodD1cImJvbGRcIlxuICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwiZnVsbE5hbWVcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzd2VldG1lbnVfX2Zvcm0tLWlucHV0TGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgRnVsbCBuYW1lXG4gICAgICAgICAgICAgICAgICA8L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgIGF1dG9Gb2N1c1xuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICBiZz1cIiNlZmVmZWZcIlxuICAgICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI0cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDBcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgcD17M31cbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUaG9tYXMgS2VsbGVyXCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZnVsbE5hbWVcIiAvPlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICAgIG1iPXszfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3dlZXRtZW51X19mb3JtLS1pbnB1dEdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICA8TGFiZWxcbiAgICAgICAgICAgICAgICAgICAgbWI9ezJ9XG4gICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCJib2xkXCJcbiAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3dlZXRtZW51X19mb3JtLS1pbnB1dExhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgIEVtYWlsXG4gICAgICAgICAgICAgICAgICA8L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgIGJnPVwiI2VmZWZlZlwiXG4gICAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjRweFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBwPXszfVxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInRrZWxsZXJAdGhlZnJlbmNobGF1bmRyeS5jb21cIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIiAvPlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICAgIG1iPXszfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3dlZXRtZW51X19mb3JtLS1pbnB1dEdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICA8TGFiZWxcbiAgICAgICAgICAgICAgICAgICAgbWI9ezJ9XG4gICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCJib2xkXCJcbiAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cInJlc3RhdXJhbnRcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzd2VldG1lbnVfX2Zvcm0tLWlucHV0TGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgUmVzdGF1cmFudFxuICAgICAgICAgICAgICAgICAgPC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICBiZz1cIiNlZmVmZWZcIlxuICAgICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI0cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDBcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgcD17M31cbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUaGUgRnJlbmNoIExhdW5kcnlcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJyZXN0YXVyYW50XCIgLz5cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgICBtYj17M31cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN3ZWV0bWVudV9fZm9ybS0taW5wdXRHcm91cFwiPlxuICAgICAgICAgICAgICAgICAgPExhYmVsXG4gICAgICAgICAgICAgICAgICAgIG1iPXsyfVxuICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0PVwiYm9sZFwiXG4gICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJ3ZWJzaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3dlZXRtZW51X19mb3JtLS1pbnB1dExhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgIFdlYnNpdGVcbiAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgYmc9XCIjZWZlZmVmXCJcbiAgICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAwXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIHA9ezN9XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiaHR0cHM6Ly90aGVmcmVuY2hsYXVuZHJ5LmNvbVwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ1cmxcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwid2Vic2l0ZVwiIC8+XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3dlZXRtZW51X19mb3JtLS1zdWJtaXRHcm91cFwiPlxuICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk9XCJpbmxpbmUtZmxleFwiXG4gICAgICAgICAgICAgICAgICAgIGJnPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwid2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cImluaXRpYWxcIlxuICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0PVwiYm9sZFwiXG4gICAgICAgICAgICAgICAgICAgIHA9XCIxcmVtIDEuNXJlbVwiXG4gICAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6ICdyaWdodCcsXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNHB4J1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJSZXF1ZXN0IGRlbW9cIiBjbGFzc05hbWU9XCJzd2VldG1lbnVfX2Zvcm0tLXN1Ym1pdFwiPlxuICAgICAgICAgICAgICAgICAgPC9JbnB1dD5cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPC9GbGV4PlxuICAgICAgICA8L1BhZ2U+XG4gICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgKTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IERlbW87XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

const BrandIcon = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div", {
  target: "e1lbjwjd2",
  label: "BrandIcon"
})(false ? undefined : {
  name: "lare0k",
  styles: "width:32px;height:32px;background-image:url(/static/sweetmenu-favicon.png);background-size:cover;background-position:center;margin-right:8px;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9DaHJpcy9zd2VldG1lbnUvd3d3L3BhZ2VzL2RlbW8vaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0M0QiIsImZpbGUiOiIvVXNlcnMvQ2hyaXMvc3dlZXRtZW51L3d3dy9wYWdlcy9kZW1vL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHsgR2xvYmFsIH0gZnJvbSAnQGVtb3Rpb24vY29yZSdcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICdlbW90aW9uLXRoZW1pbmcnXG5pbXBvcnQge1xuICBIZWFkaW5nLFxuICBGbGV4LFxuICBDYXJkLFxuICBUZXh0LFxuICBCb3gsXG4gIEJ1dHRvblxufSBmcm9tICdyZWJhc3MnXG5pbXBvcnQge1xuICBMYWJlbCxcbiAgSW5wdXRcbn0gZnJvbSAnQHJlYmFzcy9mb3JtcydcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuaW1wb3J0IHRoZW1lIGZyb20gJy4uLy4uL3RoZW1lLmpzJ1xuXG5jb25zdCBQYWdlID0gc3R5bGVkLmRpdmBcbiAgaGVpZ2h0OiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbmA7XG5cbmNvbnN0IEJyYW5kID0gc3R5bGVkLmRpdmBcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICNmZmY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuYDtcblxuY29uc3QgQnJhbmRJY29uID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMzJweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9zdGF0aWMvc3dlZXRtZW51LWZhdmljb24ucG5nKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbmA7XG5cbmNsYXNzIERlbW8gZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgPFBhZ2UgY2xhc3NOYW1lPVwic3dlZXRtZW51X19wYWdlXCI+XG4gICAgICAgICAgPEdsb2JhbFxuICAgICAgICAgICAgc3R5bGVzPXt7XG4gICAgICAgICAgICAgICdib2R5LCBodG1sJzoge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdib2R5J1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICA8dGl0bGU+R2V0IGEgZGVtbyB8IFN3ZWV0bWVudTwvdGl0bGU+XG4gICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIGhyZWY9XCIvc3RhdGljL3N3ZWV0bWVudS1mYXZpY29uLnBuZ1wiLz5cbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgICAgIGhlaWdodD1cIjY0cHhcIlxuICAgICAgICAgICAgcGw9e1s0LDQsNCw2XX1cbiAgICAgICAgICAgIHByPXtbNCw0LDQsNl19XG4gICAgICAgICAgICB3aWR0aD1cIjEwMHZ3XCJcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb249XCJyb3dcIlxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInN3ZWV0bWVudV9fbmF2XCJcbiAgICAgICAgICAgIGZvbnRGYW1pbHk9XCJib2R5XCJcbiAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgICAgICAgICB6SW5kZXg6IDg4OCxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICA8QnJhbmQgY2xhc3NOYW1lPVwic3dlZXRtZW51X19uYXYtLWJyYW5kXCI+XG4gICAgICAgICAgICAgICAgPHN2ZyB2ZXJzaW9uPVwiMS4xXCJcbiAgICAgICAgICAgICAgICBcdCBzdHlsZT17eyBmaWxsOiAnd2hpdGUnfX1cbiAgICAgICAgICAgICAgICBcdCB4PVwiMHB4XCIgeT1cIjBweFwiIHdpZHRoPVwiMTQ0LjJweFwiIGhlaWdodD1cIjMycHhcIiB2aWV3Qm94PVwiMCAwIDE0NC4yIDMyXCI+XG4gICAgICAgICAgICAgICAgICA8Zz5cbiAgICAgICAgICAgICAgICAgIFx0PHBhdGggY2xhc3M9XCJzdDBcIiBkPVwiTTE2LDBjOC44LDAsMTYsNy4yLDE2LDE2YzAsNi4yLTMuNiwxMS42LTguOCwxNC4zdi00LjJ2LTdWOC45Yy01LjEsMC01LjYsMTcuMi01LjYsMTcuMkgyMXY1LjFcbiAgICAgICAgICAgICAgICAgIFx0XHRjLTEuNiwwLjUtMy4yLDAuOC01LDAuOGMtMS4yLDAtMi40LTAuMS0zLjUtMC40VjIxLjFjMS45LTAuNCwzLjMtMi4xLDMuMy00LjFWOS44YzAtMC41LTAuNC0wLjktMC45LTAuOWMtMC41LDAtMC45LDAuNC0wLjksMC45XG4gICAgICAgICAgICAgICAgICBcdFx0VjE3YzAsMS0wLjYsMS45LTEuNSwyLjJWOS44YzAtMC41LTAuNC0wLjktMC45LTAuOXMtMC45LDAuNC0wLjksMC45djkuNEM5LjgsMTguOSw5LjIsMTgsOS4yLDE3VjkuOGMwLTAuNS0wLjQtMC45LTAuOS0wLjlcbiAgICAgICAgICAgICAgICAgIFx0XHRjLTAuNSwwLTAuOSwwLjQtMC45LDAuOVYxN2MwLDIsMS40LDMuNywzLjMsNC4xdjEwQzQuNSwyOC45LDAsMjMsMCwxNkMwLDcuMiw3LjIsMCwxNiwwelwiLz5cbiAgICAgICAgICAgICAgICAgIFx0PGc+XG4gICAgICAgICAgICAgICAgICBcdFx0PHBhdGggY2xhc3M9XCJzdDBcIiBkPVwiTTQ3LjQsMTEuMkw0NC45LDEyYy0wLjEtMC41LTAuMy0xLTAuOC0xLjRjLTAuNC0wLjQtMS0wLjYtMS44LTAuNmMtMC43LDAtMS4yLDAuMi0xLjYsMC41XG4gICAgICAgICAgICAgICAgICBcdFx0XHRjLTAuNCwwLjQtMC42LDAuOC0wLjYsMS4zYzAsMC45LDAuNSwxLjQsMS41LDEuNmwyLDAuNGMxLjIsMC4yLDIuMiwwLjcsMi45LDEuNWMwLjcsMC44LDEsMS42LDEsMi43YzAsMS4yLTAuNSwyLjItMS40LDMuMVxuICAgICAgICAgICAgICAgICAgXHRcdFx0Yy0wLjksMC45LTIuMiwxLjMtMy43LDEuM2MtMC45LDAtMS43LTAuMS0yLjQtMC40Yy0wLjctMC4zLTEuMy0wLjYtMS43LTEuMWMtMC40LTAuNC0wLjgtMC45LTEtMS40Yy0wLjItMC41LTAuNC0xLTAuNC0xLjVcbiAgICAgICAgICAgICAgICAgIFx0XHRcdGwyLjUtMC43YzAuMSwwLjgsMC40LDEuNCwwLjksMS45YzAuNSwwLjUsMS4zLDAuOCwyLjIsMC44YzAuNywwLDEuMy0wLjIsMS43LTAuNWMwLjQtMC4zLDAuNi0wLjcsMC42LTEuM2MwLTAuNC0wLjEtMC44LTAuNC0xLjFcbiAgICAgICAgICAgICAgICAgIFx0XHRcdHMtMC43LTAuNS0xLjMtMC42bC0yLTAuNGMtMS4xLTAuMi0yLTAuNy0yLjctMS40Yy0wLjctMC43LTEtMS42LTEtMi42YzAtMS4yLDAuNS0yLjMsMS40LTMuMWMxLTAuOCwyLjEtMS4zLDMuNS0xLjNcbiAgICAgICAgICAgICAgICAgIFx0XHRcdGMwLjgsMCwxLjUsMC4xLDIuMiwwLjNjMC42LDAuMiwxLjEsMC41LDEuNSwwLjljMC40LDAuNCwwLjcsMC44LDAuOSwxLjJDNDcuMSwxMC40LDQ3LjMsMTAuOCw0Ny40LDExLjJ6XCIvPlxuICAgICAgICAgICAgICAgICAgXHRcdDxwYXRoIGNsYXNzPVwic3QwXCIgZD1cIk01NSwxMi4yaDIuOGwyLjEsNi4zbDEuOC02LjNoMi42TDYxLjMsMjJoLTIuNmwtMi4zLTYuN0w1NC4xLDIyaC0yLjdsLTMuMS05LjhINTFsMS44LDYuM0w1NSwxMi4yelwiLz5cbiAgICAgICAgICAgICAgICAgIFx0XHQ8cGF0aCBjbGFzcz1cInN0MFwiIGQ9XCJNNzIuMywxOC41bDIuMiwwLjdjLTAuMywwLjktMC44LDEuNi0xLjYsMi4yYy0wLjgsMC42LTEuNywwLjktMi45LDAuOWMtMS40LDAtMi42LTAuNS0zLjYtMS40XG4gICAgICAgICAgICAgICAgICBcdFx0XHRjLTEtMC45LTEuNS0yLjItMS41LTMuOGMwLTEuNSwwLjUtMi44LDEuNC0zLjdjMS0xLDIuMS0xLjQsMy40LTEuNGMxLjUsMCwyLjcsMC41LDMuNiwxLjRjMC45LDAuOSwxLjMsMi4xLDEuMywzLjdcbiAgICAgICAgICAgICAgICAgIFx0XHRcdGMwLDAuMSwwLDAuMiwwLDAuNGMwLDAuMSwwLDAuMiwwLDAuM2wwLDAuMWgtN2MwLDAuNiwwLjMsMS4yLDAuOCwxLjZjMC41LDAuNCwxLDAuNiwxLjcsMC42QzcxLjIsMjAsNzEuOSwxOS41LDcyLjMsMTguNXpcbiAgICAgICAgICAgICAgICAgIFx0XHRcdCBNNjcuNiwxNkg3MmMwLTAuNS0wLjItMS0wLjYtMS40Yy0wLjQtMC40LTAuOS0wLjYtMS42LTAuNmMtMC42LDAtMS4yLDAuMi0xLjYsMC42QzY3LjksMTUsNjcuNywxNS41LDY3LjYsMTZ6XCIvPlxuICAgICAgICAgICAgICAgICAgXHRcdDxwYXRoIGNsYXNzPVwic3QwXCIgZD1cIk04My4zLDE4LjVsMi4yLDAuN2MtMC4zLDAuOS0wLjgsMS42LTEuNiwyLjJjLTAuOCwwLjYtMS43LDAuOS0yLjksMC45Yy0xLjQsMC0yLjYtMC41LTMuNi0xLjRcbiAgICAgICAgICAgICAgICAgIFx0XHRcdGMtMS0wLjktMS41LTIuMi0xLjUtMy44YzAtMS41LDAuNS0yLjgsMS40LTMuN2MxLTEsMi4xLTEuNCwzLjQtMS40YzEuNSwwLDIuNywwLjUsMy42LDEuNGMwLjksMC45LDEuMywyLjEsMS4zLDMuN1xuICAgICAgICAgICAgICAgICAgXHRcdFx0YzAsMC4xLDAsMC4yLDAsMC40YzAsMC4xLDAsMC4yLDAsMC4zbDAsMC4xaC03YzAsMC42LDAuMywxLjIsMC44LDEuNmMwLjUsMC40LDEsMC42LDEuNywwLjZDODIuMiwyMCw4Mi45LDE5LjUsODMuMywxOC41elxuICAgICAgICAgICAgICAgICAgXHRcdFx0IE03OC43LDE2SDgzYzAtMC41LTAuMi0xLTAuNi0xLjRjLTAuNC0wLjQtMC45LTAuNi0xLjYtMC42Yy0wLjYsMC0xLjIsMC4yLTEuNiwwLjZDNzguOSwxNSw3OC43LDE1LjUsNzguNywxNnpcIi8+XG4gICAgICAgICAgICAgICAgICBcdFx0PHBhdGggY2xhc3M9XCJzdDBcIiBkPVwiTTkxLDkuM3YyLjloMnYyLjNoLTJ2NC4xYzAsMC40LDAuMSwwLjcsMC4zLDAuOWMwLjIsMC4yLDAuNSwwLjMsMC45LDAuM2MwLjQsMCwwLjYsMCwwLjgtMC4xdjIuMlxuICAgICAgICAgICAgICAgICAgXHRcdFx0Yy0wLjQsMC4yLTAuOSwwLjItMS41LDAuMmMtMSwwLTEuNy0wLjMtMi4zLTAuOGMtMC42LTAuNS0wLjgtMS4zLTAuOC0yLjJ2LTQuNmgtMS44di0yLjNoMC41YzAuNSwwLDAuOS0wLjEsMS4xLTAuNFxuICAgICAgICAgICAgICAgICAgXHRcdFx0YzAuMy0wLjMsMC40LTAuNywwLjQtMS4xVjkuM0g5MXpcIi8+XG4gICAgICAgICAgICAgICAgICBcdFx0PHBhdGggY2xhc3M9XCJzdDBcIiBkPVwiTTk3LjcsMjJoLTIuNnYtOS44aDIuNXYxLjJjMC4zLTAuNSwwLjctMC44LDEuMi0xLjFjMC41LTAuMywxLjEtMC40LDEuNy0wLjRjMS40LDAsMi40LDAuNSwyLjksMS42XG4gICAgICAgICAgICAgICAgICBcdFx0XHRjMC43LTEuMSwxLjctMS42LDMuMS0xLjZjMSwwLDEuOCwwLjMsMi41LDAuOWMwLjcsMC42LDEsMS42LDEsMi44VjIyaC0yLjZ2LTUuOGMwLTAuNi0wLjEtMS0wLjQtMS4zYy0wLjMtMC4zLTAuNy0wLjUtMS4zLTAuNVxuICAgICAgICAgICAgICAgICAgXHRcdFx0Yy0wLjUsMC0xLDAuMi0xLjMsMC42Yy0wLjMsMC40LTAuNSwwLjgtMC41LDEuNFYyMmgtMi42di01LjhjMC0wLjYtMC4xLTEtMC40LTEuM2MtMC4zLTAuMy0wLjctMC41LTEuMy0wLjVjLTAuNiwwLTEsMC4yLTEuMywwLjVcbiAgICAgICAgICAgICAgICAgIFx0XHRcdGMtMC4zLDAuNC0wLjUsMC44LTAuNSwxLjRWMjJ6XCIvPlxuICAgICAgICAgICAgICAgICAgXHRcdDxwYXRoIGNsYXNzPVwic3QwXCIgZD1cIk0xMTkuMywxOC41bDIuMiwwLjdjLTAuMywwLjktMC44LDEuNi0xLjYsMi4yYy0wLjgsMC42LTEuNywwLjktMi45LDAuOWMtMS40LDAtMi42LTAuNS0zLjYtMS40XG4gICAgICAgICAgICAgICAgICBcdFx0XHRjLTEtMC45LTEuNS0yLjItMS41LTMuOGMwLTEuNSwwLjUtMi44LDEuNC0zLjdjMS0xLDIuMS0xLjQsMy40LTEuNGMxLjUsMCwyLjcsMC41LDMuNiwxLjRjMC45LDAuOSwxLjMsMi4xLDEuMywzLjdcbiAgICAgICAgICAgICAgICAgIFx0XHRcdGMwLDAuMSwwLDAuMiwwLDAuNGMwLDAuMSwwLDAuMiwwLDAuM2wwLDAuMWgtN2MwLDAuNiwwLjMsMS4yLDAuOCwxLjZjMC41LDAuNCwxLDAuNiwxLjcsMC42QzExOC4yLDIwLDExOC45LDE5LjUsMTE5LjMsMTguNXpcbiAgICAgICAgICAgICAgICAgIFx0XHRcdCBNMTE0LjcsMTZoNC40YzAtMC41LTAuMi0xLTAuNi0xLjRjLTAuNC0wLjQtMC45LTAuNi0xLjYtMC42Yy0wLjYsMC0xLjIsMC4yLTEuNiwwLjZDMTE0LjksMTUsMTE0LjcsMTUuNSwxMTQuNywxNnpcIi8+XG4gICAgICAgICAgICAgICAgICBcdFx0PHBhdGggY2xhc3M9XCJzdDBcIiBkPVwiTTEyNi40LDE2LjRWMjJoLTIuNnYtOS44aDIuNnYxLjJjMC4zLTAuNSwwLjctMC44LDEuMi0xLjFjMC41LTAuMywxLjEtMC40LDEuNi0wLjRjMS4yLDAsMiwwLjQsMi42LDEuMVxuICAgICAgICAgICAgICAgICAgXHRcdFx0YzAuNiwwLjcsMC45LDEuNywwLjksMi44VjIySDEzMHYtNS43YzAtMC42LTAuMS0xLjEtMC40LTEuNGMtMC4zLTAuNC0wLjgtMC41LTEuNC0wLjVjLTAuNiwwLTEsMC4yLTEuMywwLjZcbiAgICAgICAgICAgICAgICAgIFx0XHRcdEMxMjYuNiwxNS4zLDEyNi40LDE1LjgsMTI2LjQsMTYuNHpcIi8+XG4gICAgICAgICAgICAgICAgICBcdFx0PHBhdGggY2xhc3M9XCJzdDBcIiBkPVwiTTE0MS43LDIyYy0wLjEtMC4zLTAuMS0wLjYtMC4xLTEuMWMtMC4zLDAuNC0wLjYsMC44LTEuMSwxYy0wLjUsMC4yLTEsMC4zLTEuNiwwLjNjLTEuMiwwLTIuMS0wLjQtMi43LTEuMVxuICAgICAgICAgICAgICAgICAgXHRcdFx0Yy0wLjctMC43LTEtMS43LTEtMi44di02LjJoMi42djUuN2MwLDAuNiwwLjIsMS4xLDAuNSwxLjRjMC4zLDAuNCwwLjcsMC41LDEuMywwLjVjMC42LDAsMS0wLjIsMS40LTAuNWMwLjMtMC40LDAuNS0wLjgsMC41LTEuNFxuICAgICAgICAgICAgICAgICAgXHRcdFx0di01LjdoMi42djhjMCwwLjYsMCwxLjIsMC4xLDEuOEgxNDEuN3pcIi8+XG4gICAgICAgICAgICAgICAgICBcdDwvZz5cbiAgICAgICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgPC9CcmFuZD5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uPVwicm93IG5vd3JhcFwiXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgICAgIGZvbnRTaXplPXsxfVxuICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgbXI9XCIuNXJlbVwiXG4gICAgICAgICAgICAgICAgZm9udEZhbWlseT1cImJvZHlcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgUXVlc3Rpb25zP1xuICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJtYWlsdG86Y2hyaXNAc3dlZXRtZW51LmNvXCI+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgcD1cIi41cmVtIDFyZW1cIlxuICAgICAgICAgICAgICAgICAgZm9udFdlaWdodD1cImJvbGRcIlxuICAgICAgICAgICAgICAgICAgYmc9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgIGNvbG9yPVwid2hpdGVcIlxuICAgICAgICAgICAgICAgICAgZm9udFNpemU9ezF9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgRW1haWwgQ2hyaXNcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj48L2E+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8RmxleFxuICAgICAgICAgICAgZmxleERpcmVjdGlvbj17Wydjb2x1bW4nLCAnY29sdW1uJywgJ2NvbHVtbicsICdyb3cnXX1cbiAgICAgICAgICAgIGFsaWduSXRlbXM9XCJzdHJldGNoXCJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwiZmxleC1zdGFydFwiXG4gICAgICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcbiAgICAgICAgICAgIG1pbkhlaWdodD1cIjEwMHZoXCJcbiAgICAgICAgICAgIGZvbnRGYW1pbHk9XCJib2R5XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgICAgICAgZmxleD1cIjFcIlxuICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCJcbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICBwPXtbNCw0LDQsNl19XG4gICAgICAgICAgICAgIHB0PVwiODBweFwiXG4gICAgICAgICAgICAgIHBiPVwiODBweFwiXG4gICAgICAgICAgICAgIGJnPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN3ZWV0bWVudV9fYXNpZGVcIj5cbiAgICAgICAgICAgICAgPEhlYWRpbmdcbiAgICAgICAgICAgICAgICBmb250U2l6ZT17WyA1LCA1LCA2IF19XG4gICAgICAgICAgICAgICAgY29sb3I9J3doaXRlJ1xuICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk9XCJpbmhlcml0XCJcbiAgICAgICAgICAgICAgICBtYj17Mn1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzd2VldG1lbnVfX2FzaWRlLS10aXRsZVwiPlxuICAgICAgICAgICAgICAgIFNlZWluZyBpcyBiZWxpZXZpbmdcbiAgICAgICAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgICAgIGNvbG9yPVwid2hpdGVcIlxuICAgICAgICAgICAgICAgIGZvbnRTaXplPXtbMiwyLCAzXX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzd2VldG1lbnVfX2FzaWRlLS1jYXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgV2UgY291bGQgZ28gb24gYW5kIG9uIGFib3V0IGhvdyBTd2VldG1lbnUgY2FuIHRyYW5zZm9ybSB5b3VyIHJlc3RhdXJhbnQncyB3ZWJzaXRlLiBCdXQgd2UgZG9uJ3Qgd2FudCB5b3UgdG8gaGF2ZSB0byB0YWtlIG91ciB3b3JkIGZvciBpdC5cbiAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgU28gZmlsbCBvdXQgdGhlIGZvcm0gYW5kIHlvdSBjYW4gc2VlIGZvciB5b3Vyc2VsZiwgcmlzay1mcmVlLCBleGFjdGx5IGhvdyByZXZvbHV0aW9uYXJ5IFN3ZWV0bWVudSBpcy5cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgICAgICAgZmxleD17Wydpbml0aWFsJywgJ2luaXRpYWwnLCAnaW5pdGlhbCcsIDFdfVxuICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCJcbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVwic3RyZXRjaFwiXG4gICAgICAgICAgICAgIHA9e1s0LDQsNCw2XX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3dlZXRtZW51X19mb3JtXCI+XG4gICAgICAgICAgICAgIDxmb3JtIG1ldGhvZD1cInBvc3RcIiBkYXRhLW5ldGxpZnk9XCJ0cnVlXCIgZGF0YS1uZXRsaWZ5LWhvbmV5cG90PVwiYm90LWZpZWxkXCIgbmFtZT1cImRlbW9cIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJmb3JtLW5hbWVcIiB2YWx1ZT1cImRlbW9cIiAvPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cImJvdC1maWVsZFwiIC8+XG4gICAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgICAgbWI9ezN9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzd2VldG1lbnVfX2Zvcm0tLWlucHV0R3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgIDxMYWJlbFxuICAgICAgICAgICAgICAgICAgICBtYj17Mn1cbiAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodD1cImJvbGRcIlxuICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwiZnVsbE5hbWVcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzd2VldG1lbnVfX2Zvcm0tLWlucHV0TGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgRnVsbCBuYW1lXG4gICAgICAgICAgICAgICAgICA8L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgIGF1dG9Gb2N1c1xuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICBiZz1cIiNlZmVmZWZcIlxuICAgICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI0cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDBcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgcD17M31cbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUaG9tYXMgS2VsbGVyXCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZnVsbE5hbWVcIiAvPlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICAgIG1iPXszfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3dlZXRtZW51X19mb3JtLS1pbnB1dEdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICA8TGFiZWxcbiAgICAgICAgICAgICAgICAgICAgbWI9ezJ9XG4gICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCJib2xkXCJcbiAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3dlZXRtZW51X19mb3JtLS1pbnB1dExhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgIEVtYWlsXG4gICAgICAgICAgICAgICAgICA8L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgIGJnPVwiI2VmZWZlZlwiXG4gICAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjRweFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBwPXszfVxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInRrZWxsZXJAdGhlZnJlbmNobGF1bmRyeS5jb21cIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIiAvPlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICAgIG1iPXszfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3dlZXRtZW51X19mb3JtLS1pbnB1dEdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICA8TGFiZWxcbiAgICAgICAgICAgICAgICAgICAgbWI9ezJ9XG4gICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCJib2xkXCJcbiAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cInJlc3RhdXJhbnRcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzd2VldG1lbnVfX2Zvcm0tLWlucHV0TGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgUmVzdGF1cmFudFxuICAgICAgICAgICAgICAgICAgPC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICBiZz1cIiNlZmVmZWZcIlxuICAgICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI0cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDBcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgcD17M31cbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUaGUgRnJlbmNoIExhdW5kcnlcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJyZXN0YXVyYW50XCIgLz5cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgICBtYj17M31cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN3ZWV0bWVudV9fZm9ybS0taW5wdXRHcm91cFwiPlxuICAgICAgICAgICAgICAgICAgPExhYmVsXG4gICAgICAgICAgICAgICAgICAgIG1iPXsyfVxuICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0PVwiYm9sZFwiXG4gICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJ3ZWJzaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3dlZXRtZW51X19mb3JtLS1pbnB1dExhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgIFdlYnNpdGVcbiAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgYmc9XCIjZWZlZmVmXCJcbiAgICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAwXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIHA9ezN9XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiaHR0cHM6Ly90aGVmcmVuY2hsYXVuZHJ5LmNvbVwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ1cmxcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwid2Vic2l0ZVwiIC8+XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3dlZXRtZW51X19mb3JtLS1zdWJtaXRHcm91cFwiPlxuICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk9XCJpbmxpbmUtZmxleFwiXG4gICAgICAgICAgICAgICAgICAgIGJnPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwid2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cImluaXRpYWxcIlxuICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0PVwiYm9sZFwiXG4gICAgICAgICAgICAgICAgICAgIHA9XCIxcmVtIDEuNXJlbVwiXG4gICAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6ICdyaWdodCcsXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNHB4J1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJSZXF1ZXN0IGRlbW9cIiBjbGFzc05hbWU9XCJzd2VldG1lbnVfX2Zvcm0tLXN1Ym1pdFwiPlxuICAgICAgICAgICAgICAgICAgPC9JbnB1dD5cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPC9GbGV4PlxuICAgICAgICA8L1BhZ2U+XG4gICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgKTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IERlbW87XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

class Demo extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  render() {
    return __jsx(emotion_theming__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"], {
      theme: _theme_js__WEBPACK_IMPORTED_MODULE_8__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, __jsx(Page, {
      className: "sweetmenu__page",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, __jsx(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["Global"], {
      styles: {
        'body, html': {
          padding: 0,
          margin: 0,
          fontFamily: 'body'
        }
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }), __jsx(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, __jsx("title", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, "Get a demo | Sweetmenu"), __jsx("link", {
      rel: "icon",
      type: "image/png",
      href: "/static/sweetmenu-favicon.png",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }), __jsx("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    })), __jsx(rebass__WEBPACK_IMPORTED_MODULE_4__["Box"], {
      display: "flex",
      height: "64px",
      pl: [4, 4, 4, 6],
      pr: [4, 4, 4, 6],
      width: "100vw",
      flexDirection: "row",
      justifyContent: "space-between",
      className: "sweetmenu__nav",
      fontFamily: "body",
      sx: {
        position: 'fixed',
        zIndex: 888
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, __jsx(Brand, {
      className: "sweetmenu__nav--brand",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, __jsx("svg", {
      version: "1.1",
      style: {
        fill: 'white'
      },
      x: "0px",
      y: "0px",
      width: "144.2px",
      height: "32px",
      viewBox: "0 0 144.2 32",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, __jsx("g", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, __jsx("path", {
      class: "st0",
      d: "M16,0c8.8,0,16,7.2,16,16c0,6.2-3.6,11.6-8.8,14.3v-4.2v-7V8.9c-5.1,0-5.6,17.2-5.6,17.2H21v5.1 c-1.6,0.5-3.2,0.8-5,0.8c-1.2,0-2.4-0.1-3.5-0.4V21.1c1.9-0.4,3.3-2.1,3.3-4.1V9.8c0-0.5-0.4-0.9-0.9-0.9c-0.5,0-0.9,0.4-0.9,0.9 V17c0,1-0.6,1.9-1.5,2.2V9.8c0-0.5-0.4-0.9-0.9-0.9s-0.9,0.4-0.9,0.9v9.4C9.8,18.9,9.2,18,9.2,17V9.8c0-0.5-0.4-0.9-0.9-0.9 c-0.5,0-0.9,0.4-0.9,0.9V17c0,2,1.4,3.7,3.3,4.1v10C4.5,28.9,0,23,0,16C0,7.2,7.2,0,16,0z",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }), __jsx("g", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }, __jsx("path", {
      class: "st0",
      d: "M47.4,11.2L44.9,12c-0.1-0.5-0.3-1-0.8-1.4c-0.4-0.4-1-0.6-1.8-0.6c-0.7,0-1.2,0.2-1.6,0.5 c-0.4,0.4-0.6,0.8-0.6,1.3c0,0.9,0.5,1.4,1.5,1.6l2,0.4c1.2,0.2,2.2,0.7,2.9,1.5c0.7,0.8,1,1.6,1,2.7c0,1.2-0.5,2.2-1.4,3.1 c-0.9,0.9-2.2,1.3-3.7,1.3c-0.9,0-1.7-0.1-2.4-0.4c-0.7-0.3-1.3-0.6-1.7-1.1c-0.4-0.4-0.8-0.9-1-1.4c-0.2-0.5-0.4-1-0.4-1.5 l2.5-0.7c0.1,0.8,0.4,1.4,0.9,1.9c0.5,0.5,1.3,0.8,2.2,0.8c0.7,0,1.3-0.2,1.7-0.5c0.4-0.3,0.6-0.7,0.6-1.3c0-0.4-0.1-0.8-0.4-1.1 s-0.7-0.5-1.3-0.6l-2-0.4c-1.1-0.2-2-0.7-2.7-1.4c-0.7-0.7-1-1.6-1-2.6c0-1.2,0.5-2.3,1.4-3.1c1-0.8,2.1-1.3,3.5-1.3 c0.8,0,1.5,0.1,2.2,0.3c0.6,0.2,1.1,0.5,1.5,0.9c0.4,0.4,0.7,0.8,0.9,1.2C47.1,10.4,47.3,10.8,47.4,11.2z",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }), __jsx("path", {
      class: "st0",
      d: "M55,12.2h2.8l2.1,6.3l1.8-6.3h2.6L61.3,22h-2.6l-2.3-6.7L54.1,22h-2.7l-3.1-9.8H51l1.8,6.3L55,12.2z",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }), __jsx("path", {
      class: "st0",
      d: "M72.3,18.5l2.2,0.7c-0.3,0.9-0.8,1.6-1.6,2.2c-0.8,0.6-1.7,0.9-2.9,0.9c-1.4,0-2.6-0.5-3.6-1.4 c-1-0.9-1.5-2.2-1.5-3.8c0-1.5,0.5-2.8,1.4-3.7c1-1,2.1-1.4,3.4-1.4c1.5,0,2.7,0.5,3.6,1.4c0.9,0.9,1.3,2.1,1.3,3.7 c0,0.1,0,0.2,0,0.4c0,0.1,0,0.2,0,0.3l0,0.1h-7c0,0.6,0.3,1.2,0.8,1.6c0.5,0.4,1,0.6,1.7,0.6C71.2,20,71.9,19.5,72.3,18.5z M67.6,16H72c0-0.5-0.2-1-0.6-1.4c-0.4-0.4-0.9-0.6-1.6-0.6c-0.6,0-1.2,0.2-1.6,0.6C67.9,15,67.7,15.5,67.6,16z",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }), __jsx("path", {
      class: "st0",
      d: "M83.3,18.5l2.2,0.7c-0.3,0.9-0.8,1.6-1.6,2.2c-0.8,0.6-1.7,0.9-2.9,0.9c-1.4,0-2.6-0.5-3.6-1.4 c-1-0.9-1.5-2.2-1.5-3.8c0-1.5,0.5-2.8,1.4-3.7c1-1,2.1-1.4,3.4-1.4c1.5,0,2.7,0.5,3.6,1.4c0.9,0.9,1.3,2.1,1.3,3.7 c0,0.1,0,0.2,0,0.4c0,0.1,0,0.2,0,0.3l0,0.1h-7c0,0.6,0.3,1.2,0.8,1.6c0.5,0.4,1,0.6,1.7,0.6C82.2,20,82.9,19.5,83.3,18.5z M78.7,16H83c0-0.5-0.2-1-0.6-1.4c-0.4-0.4-0.9-0.6-1.6-0.6c-0.6,0-1.2,0.2-1.6,0.6C78.9,15,78.7,15.5,78.7,16z",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }), __jsx("path", {
      class: "st0",
      d: "M91,9.3v2.9h2v2.3h-2v4.1c0,0.4,0.1,0.7,0.3,0.9c0.2,0.2,0.5,0.3,0.9,0.3c0.4,0,0.6,0,0.8-0.1v2.2 c-0.4,0.2-0.9,0.2-1.5,0.2c-1,0-1.7-0.3-2.3-0.8c-0.6-0.5-0.8-1.3-0.8-2.2v-4.6h-1.8v-2.3h0.5c0.5,0,0.9-0.1,1.1-0.4 c0.3-0.3,0.4-0.7,0.4-1.1V9.3H91z",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }), __jsx("path", {
      class: "st0",
      d: "M97.7,22h-2.6v-9.8h2.5v1.2c0.3-0.5,0.7-0.8,1.2-1.1c0.5-0.3,1.1-0.4,1.7-0.4c1.4,0,2.4,0.5,2.9,1.6 c0.7-1.1,1.7-1.6,3.1-1.6c1,0,1.8,0.3,2.5,0.9c0.7,0.6,1,1.6,1,2.8V22h-2.6v-5.8c0-0.6-0.1-1-0.4-1.3c-0.3-0.3-0.7-0.5-1.3-0.5 c-0.5,0-1,0.2-1.3,0.6c-0.3,0.4-0.5,0.8-0.5,1.4V22h-2.6v-5.8c0-0.6-0.1-1-0.4-1.3c-0.3-0.3-0.7-0.5-1.3-0.5c-0.6,0-1,0.2-1.3,0.5 c-0.3,0.4-0.5,0.8-0.5,1.4V22z",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }), __jsx("path", {
      class: "st0",
      d: "M119.3,18.5l2.2,0.7c-0.3,0.9-0.8,1.6-1.6,2.2c-0.8,0.6-1.7,0.9-2.9,0.9c-1.4,0-2.6-0.5-3.6-1.4 c-1-0.9-1.5-2.2-1.5-3.8c0-1.5,0.5-2.8,1.4-3.7c1-1,2.1-1.4,3.4-1.4c1.5,0,2.7,0.5,3.6,1.4c0.9,0.9,1.3,2.1,1.3,3.7 c0,0.1,0,0.2,0,0.4c0,0.1,0,0.2,0,0.3l0,0.1h-7c0,0.6,0.3,1.2,0.8,1.6c0.5,0.4,1,0.6,1.7,0.6C118.2,20,118.9,19.5,119.3,18.5z M114.7,16h4.4c0-0.5-0.2-1-0.6-1.4c-0.4-0.4-0.9-0.6-1.6-0.6c-0.6,0-1.2,0.2-1.6,0.6C114.9,15,114.7,15.5,114.7,16z",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: this
    }), __jsx("path", {
      class: "st0",
      d: "M126.4,16.4V22h-2.6v-9.8h2.6v1.2c0.3-0.5,0.7-0.8,1.2-1.1c0.5-0.3,1.1-0.4,1.6-0.4c1.2,0,2,0.4,2.6,1.1 c0.6,0.7,0.9,1.7,0.9,2.8V22H130v-5.7c0-0.6-0.1-1.1-0.4-1.4c-0.3-0.4-0.8-0.5-1.4-0.5c-0.6,0-1,0.2-1.3,0.6 C126.6,15.3,126.4,15.8,126.4,16.4z",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    }), __jsx("path", {
      class: "st0",
      d: "M141.7,22c-0.1-0.3-0.1-0.6-0.1-1.1c-0.3,0.4-0.6,0.8-1.1,1c-0.5,0.2-1,0.3-1.6,0.3c-1.2,0-2.1-0.4-2.7-1.1 c-0.7-0.7-1-1.7-1-2.8v-6.2h2.6v5.7c0,0.6,0.2,1.1,0.5,1.4c0.3,0.4,0.7,0.5,1.3,0.5c0.6,0,1-0.2,1.4-0.5c0.3-0.4,0.5-0.8,0.5-1.4 v-5.7h2.6v8c0,0.6,0,1.2,0.1,1.8H141.7z",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: this
    })))))), __jsx(rebass__WEBPACK_IMPORTED_MODULE_4__["Box"], {
      display: "flex",
      flexDirection: "row nowrap",
      alignItems: "center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      },
      __self: this
    }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      fontSize: 1,
      color: "primary",
      mr: ".5rem",
      fontFamily: "body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134
      },
      __self: this
    }, "Questions?"), __jsx("a", {
      href: "mailto:chris@sweetmenu.co",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142
      },
      __self: this
    }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      p: ".5rem 1rem",
      fontWeight: "bold",
      bg: "primary",
      color: "white",
      fontSize: 1,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143
      },
      __self: this
    }, "Email Chris")))), __jsx(rebass__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
      flexDirection: ['column', 'column', 'column', 'row'],
      alignItems: "stretch",
      justifyContent: "flex-start",
      height: "100%",
      minHeight: "100vh",
      fontFamily: "body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154
      },
      __self: this
    }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_4__["Box"], {
      display: "flex",
      flex: "1",
      flexDirection: "column",
      justifyContent: "center",
      p: [4, 4, 4, 6],
      pt: "80px",
      pb: "80px",
      bg: "primary",
      className: "sweetmenu__aside",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162
      },
      __self: this
    }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_4__["Heading"], {
      fontSize: [5, 5, 6],
      color: "white",
      fontFamily: "inherit",
      mb: 2,
      className: "sweetmenu__aside--title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172
      },
      __self: this
    }, "Seeing is believing"), __jsx(rebass__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      color: "white",
      fontSize: [2, 2, 3],
      className: "sweetmenu__aside--caption",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180
      },
      __self: this
    }, "We could go on and on about how Sweetmenu can transform your restaurant's website. But we don't want you to have to take our word for it.", __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185
      },
      __self: this
    }), __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186
      },
      __self: this
    }), "So fill out the form and you can see for yourself, risk-free, exactly how revolutionary Sweetmenu is.")), __jsx(rebass__WEBPACK_IMPORTED_MODULE_4__["Box"], {
      display: "flex",
      flex: ['initial', 'initial', 'initial', 1],
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "stretch",
      p: [4, 4, 4, 6],
      className: "sweetmenu__form",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190
      },
      __self: this
    }, __jsx("form", {
      method: "post",
      "data-netlify": "true",
      "data-netlify-honeypot": "bot-field",
      name: "demo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198
      },
      __self: this
    }, __jsx("input", {
      type: "hidden",
      name: "form-name",
      value: "demo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199
      },
      __self: this
    }), __jsx("input", {
      type: "hidden",
      name: "bot-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200
      },
      __self: this
    }), __jsx(rebass__WEBPACK_IMPORTED_MODULE_4__["Box"], {
      mb: 3,
      className: "sweetmenu__form--inputGroup",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201
      },
      __self: this
    }, __jsx(_rebass_forms__WEBPACK_IMPORTED_MODULE_5__["Label"], {
      mb: 2,
      fontWeight: "bold",
      htmlFor: "fullName",
      className: "sweetmenu__form--inputLabel",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204
      },
      __self: this
    }, "Full name"), __jsx(_rebass_forms__WEBPACK_IMPORTED_MODULE_5__["Input"], {
      autoFocus: true,
      required: true,
      bg: "#efefef",
      sx: {
        borderRadius: "4px",
        border: 0
      },
      p: 3,
      placeholder: "Thomas Keller",
      type: "text",
      name: "fullName",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211
      },
      __self: this
    })), __jsx(rebass__WEBPACK_IMPORTED_MODULE_4__["Box"], {
      mb: 3,
      className: "sweetmenu__form--inputGroup",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 224
      },
      __self: this
    }, __jsx(_rebass_forms__WEBPACK_IMPORTED_MODULE_5__["Label"], {
      mb: 2,
      fontWeight: "bold",
      htmlFor: "email",
      className: "sweetmenu__form--inputLabel",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227
      },
      __self: this
    }, "Email"), __jsx(_rebass_forms__WEBPACK_IMPORTED_MODULE_5__["Input"], {
      required: true,
      bg: "#efefef",
      sx: {
        borderRadius: "4px",
        border: 0
      },
      p: 3,
      placeholder: "tkeller@thefrenchlaundry.com",
      type: "email",
      name: "email",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 234
      },
      __self: this
    })), __jsx(rebass__WEBPACK_IMPORTED_MODULE_4__["Box"], {
      mb: 3,
      className: "sweetmenu__form--inputGroup",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 246
      },
      __self: this
    }, __jsx(_rebass_forms__WEBPACK_IMPORTED_MODULE_5__["Label"], {
      mb: 2,
      fontWeight: "bold",
      htmlFor: "restaurant",
      className: "sweetmenu__form--inputLabel",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 249
      },
      __self: this
    }, "Restaurant"), __jsx(_rebass_forms__WEBPACK_IMPORTED_MODULE_5__["Input"], {
      required: true,
      bg: "#efefef",
      sx: {
        borderRadius: "4px",
        border: 0
      },
      p: 3,
      placeholder: "The French Laundry",
      type: "text",
      name: "restaurant",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 256
      },
      __self: this
    })), __jsx(rebass__WEBPACK_IMPORTED_MODULE_4__["Box"], {
      mb: 3,
      className: "sweetmenu__form--inputGroup",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 268
      },
      __self: this
    }, __jsx(_rebass_forms__WEBPACK_IMPORTED_MODULE_5__["Label"], {
      mb: 2,
      fontWeight: "bold",
      htmlFor: "website",
      className: "sweetmenu__form--inputLabel",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 271
      },
      __self: this
    }, "Website"), __jsx(_rebass_forms__WEBPACK_IMPORTED_MODULE_5__["Input"], {
      required: true,
      bg: "#efefef",
      sx: {
        borderRadius: "4px",
        border: 0
      },
      p: 3,
      placeholder: "https://thefrenchlaundry.com",
      type: "url",
      name: "website",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 278
      },
      __self: this
    })), __jsx(rebass__WEBPACK_IMPORTED_MODULE_4__["Box"], {
      className: "sweetmenu__form--submitGroup",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 290
      },
      __self: this
    }, __jsx(_rebass_forms__WEBPACK_IMPORTED_MODULE_5__["Input"], {
      display: "inline-flex",
      bg: "primary",
      color: "white",
      width: "initial",
      fontWeight: "bold",
      p: "1rem 1.5rem",
      sx: {
        float: 'right',
        borderRadius: '4px'
      },
      type: "submit",
      value: "Request demo",
      className: "sweetmenu__form--submit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 292
      },
      __self: this
    })))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Demo);

/***/ }),

/***/ "./theme.js":
/*!******************!*\
  !*** ./theme.js ***!
  \******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  breakpoints: ['40em', '52em', '64em'],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 60, 72],
  colors: {
    blue: '#07c',
    gray: '#696969',
    primary: '#151515'
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace'
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 800
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25
  },
  shadows: {
    small: '0 0 4px rgba(0, 0, 0, .125)',
    large: '0 0 24px rgba(0, 0, 0, .125)'
  },
  variants: {},
  text: {},
  buttons: {
    primary: {
      fontSize: '1.25rem',
      fontWeight: 'bold',
      padding: '1.25rem 3rem',
      color: 'white',
      bg: 'primary',
      borderRadius: '4px',
      boxShadow: '0 4px 16px -2px rgba(0,0,0,0.32)'
    },
    inverted: {
      fontSize: '1.25rem',
      fontWeight: 'bold',
      padding: '1.25rem 3rem',
      color: 'primary',
      bg: 'white',
      borderRadius: '4px',
      boxShadow: '0 4px 16px -2px rgba(0,0,0,0.32)'
    }
  }
});

/***/ }),

/***/ 4:
/*!***********************************!*\
  !*** multi ./pages/demo/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Chris/sweetmenu/www/pages/demo/index.js */"./pages/demo/index.js");


/***/ }),

/***/ "@emotion/core":
/*!********************************!*\
  !*** external "@emotion/core" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@emotion/core");

/***/ }),

/***/ "@emotion/styled-base":
/*!***************************************!*\
  !*** external "@emotion/styled-base" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@emotion/styled-base");

/***/ }),

/***/ "@rebass/forms":
/*!********************************!*\
  !*** external "@rebass/forms" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@rebass/forms");

/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "core-js/library/fn/weak-map":
/*!**********************************************!*\
  !*** external "core-js/library/fn/weak-map" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "emotion-theming":
/*!**********************************!*\
  !*** external "emotion-theming" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("emotion-theming");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "rebass":
/*!*************************!*\
  !*** external "rebass" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rebass");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=demo.js.map