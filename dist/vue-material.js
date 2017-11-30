/*!
 * vue-material v1.0.0-beta-6
 * Made with <3 by marcosmoura 2017
 * Released under the MIT License.
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define(["vue"], factory);
	else if(typeof exports === 'object')
		exports["VueMaterial"] = factory(require("vue"));
	else
		root["VueMaterial"] = factory(root["Vue"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_7__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 54);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(56);

var _MdReactive = __webpack_require__(28);

var _MdReactive2 = _interopRequireDefault(_MdReactive);

var _MdTheme = __webpack_require__(29);

var _MdTheme2 = _interopRequireDefault(_MdTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var init = function init() {
  var material = new _MdReactive2.default({
    ripple: true,
    theming: {},
    locale: {
      startYear: 1900,
      endYear: 2099,
      dateFormat: 'YYYY-MM-DD',
      days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      shortDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      shorterDays: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
      months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
      shorterMonths: ['J', 'F', 'M', 'A', 'M', 'Ju', 'Ju', 'A', 'Se', 'O', 'N', 'D']
    }
  });

  Object.defineProperties(material.theming, {
    metaColors: {
      get: function get() {
        return _MdTheme2.default.metaColors;
      },
      set: function set(metaColors) {
        _MdTheme2.default.metaColors = metaColors;
      }
    },
    theme: {
      get: function get() {
        return _MdTheme2.default.theme;
      },
      set: function set(theme) {
        _MdTheme2.default.theme = theme;
      }
    },
    enabled: {
      get: function get() {
        return _MdTheme2.default.enabled;
      },
      set: function set(enabled) {
        _MdTheme2.default.enabled = enabled;
      }
    }
  });

  return material;
};

exports.default = function (Vue) {
  if (!Vue.material) {
    Vue.material = init();
    Vue.prototype.$material = Vue.material;
  }
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (newComponent) {
  var defaults = {
    props: {
      mdTheme: null
    },
    computed: {
      $mdActiveTheme: function $mdActiveTheme() {
        var enabled = _MdTheme2.default.enabled,
            getThemeName = _MdTheme2.default.getThemeName,
            getAncestorTheme = _MdTheme2.default.getAncestorTheme;


        if (enabled && this.mdTheme !== false) {
          return getThemeName(this.mdTheme || getAncestorTheme(this));
        }

        return null;
      }
    }
  };

  return (0, _deepmerge2.default)(defaults, newComponent);
};

var _MdTheme = __webpack_require__(29);

var _MdTheme2 = _interopRequireDefault(_MdTheme);

var _deepmerge = __webpack_require__(30);

var _deepmerge2 = _interopRequireDefault(_deepmerge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var isDate = __webpack_require__(36)

var MILLISECONDS_IN_HOUR = 3600000
var MILLISECONDS_IN_MINUTE = 60000
var DEFAULT_ADDITIONAL_DIGITS = 2

var parseTokenDateTimeDelimeter = /[T ]/
var parseTokenPlainTime = /:/

// year tokens
var parseTokenYY = /^(\d{2})$/
var parseTokensYYY = [
  /^([+-]\d{2})$/, // 0 additional digits
  /^([+-]\d{3})$/, // 1 additional digit
  /^([+-]\d{4})$/ // 2 additional digits
]

var parseTokenYYYY = /^(\d{4})/
var parseTokensYYYYY = [
  /^([+-]\d{4})/, // 0 additional digits
  /^([+-]\d{5})/, // 1 additional digit
  /^([+-]\d{6})/ // 2 additional digits
]

// date tokens
var parseTokenMM = /^-(\d{2})$/
var parseTokenDDD = /^-?(\d{3})$/
var parseTokenMMDD = /^-?(\d{2})-?(\d{2})$/
var parseTokenWww = /^-?W(\d{2})$/
var parseTokenWwwD = /^-?W(\d{2})-?(\d{1})$/

// time tokens
var parseTokenHH = /^(\d{2}([.,]\d*)?)$/
var parseTokenHHMM = /^(\d{2}):?(\d{2}([.,]\d*)?)$/
var parseTokenHHMMSS = /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/

// timezone tokens
var parseTokenTimezone = /([Z+-].*)$/
var parseTokenTimezoneZ = /^(Z)$/
var parseTokenTimezoneHH = /^([+-])(\d{2})$/
var parseTokenTimezoneHHMM = /^([+-])(\d{2}):?(\d{2})$/

/**
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If an argument is a string, the function tries to parse it.
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If all above fails, the function passes the given argument to Date constructor.
 *
 * @param {Date|String|Number} argument - the value to convert
 * @param {Object} [options] - the object with options
 * @param {0 | 1 | 2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @returns {Date} the parsed date in the local time zone
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * var result = parse('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Parse string '+02014101',
 * // if the additional number of digits in the extended year format is 1:
 * var result = parse('+02014101', {additionalDigits: 1})
 * //=> Fri Apr 11 2014 00:00:00
 */
function parse (argument, dirtyOptions) {
  if (isDate(argument)) {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime())
  } else if (typeof argument !== 'string') {
    return new Date(argument)
  }

  var options = dirtyOptions || {}
  var additionalDigits = options.additionalDigits
  if (additionalDigits == null) {
    additionalDigits = DEFAULT_ADDITIONAL_DIGITS
  } else {
    additionalDigits = Number(additionalDigits)
  }

  var dateStrings = splitDateString(argument)

  var parseYearResult = parseYear(dateStrings.date, additionalDigits)
  var year = parseYearResult.year
  var restDateString = parseYearResult.restDateString

  var date = parseDate(restDateString, year)

  if (date) {
    var timestamp = date.getTime()
    var time = 0
    var offset

    if (dateStrings.time) {
      time = parseTime(dateStrings.time)
    }

    if (dateStrings.timezone) {
      offset = parseTimezone(dateStrings.timezone)
    } else {
      // get offset accurate to hour in timezones that change offset
      offset = new Date(timestamp + time).getTimezoneOffset()
      offset = new Date(timestamp + time + offset * MILLISECONDS_IN_MINUTE).getTimezoneOffset()
    }

    return new Date(timestamp + time + offset * MILLISECONDS_IN_MINUTE)
  } else {
    return new Date(argument)
  }
}

function splitDateString (dateString) {
  var dateStrings = {}
  var array = dateString.split(parseTokenDateTimeDelimeter)
  var timeString

  if (parseTokenPlainTime.test(array[0])) {
    dateStrings.date = null
    timeString = array[0]
  } else {
    dateStrings.date = array[0]
    timeString = array[1]
  }

  if (timeString) {
    var token = parseTokenTimezone.exec(timeString)
    if (token) {
      dateStrings.time = timeString.replace(token[1], '')
      dateStrings.timezone = token[1]
    } else {
      dateStrings.time = timeString
    }
  }

  return dateStrings
}

function parseYear (dateString, additionalDigits) {
  var parseTokenYYY = parseTokensYYY[additionalDigits]
  var parseTokenYYYYY = parseTokensYYYYY[additionalDigits]

  var token

  // YYYY or ±YYYYY
  token = parseTokenYYYY.exec(dateString) || parseTokenYYYYY.exec(dateString)
  if (token) {
    var yearString = token[1]
    return {
      year: parseInt(yearString, 10),
      restDateString: dateString.slice(yearString.length)
    }
  }

  // YY or ±YYY
  token = parseTokenYY.exec(dateString) || parseTokenYYY.exec(dateString)
  if (token) {
    var centuryString = token[1]
    return {
      year: parseInt(centuryString, 10) * 100,
      restDateString: dateString.slice(centuryString.length)
    }
  }

  // Invalid ISO-formatted year
  return {
    year: null
  }
}

function parseDate (dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) {
    return null
  }

  var token
  var date
  var month
  var week

  // YYYY
  if (dateString.length === 0) {
    date = new Date(0)
    date.setUTCFullYear(year)
    return date
  }

  // YYYY-MM
  token = parseTokenMM.exec(dateString)
  if (token) {
    date = new Date(0)
    month = parseInt(token[1], 10) - 1
    date.setUTCFullYear(year, month)
    return date
  }

  // YYYY-DDD or YYYYDDD
  token = parseTokenDDD.exec(dateString)
  if (token) {
    date = new Date(0)
    var dayOfYear = parseInt(token[1], 10)
    date.setUTCFullYear(year, 0, dayOfYear)
    return date
  }

  // YYYY-MM-DD or YYYYMMDD
  token = parseTokenMMDD.exec(dateString)
  if (token) {
    date = new Date(0)
    month = parseInt(token[1], 10) - 1
    var day = parseInt(token[2], 10)
    date.setUTCFullYear(year, month, day)
    return date
  }

  // YYYY-Www or YYYYWww
  token = parseTokenWww.exec(dateString)
  if (token) {
    week = parseInt(token[1], 10) - 1
    return dayOfISOYear(year, week)
  }

  // YYYY-Www-D or YYYYWwwD
  token = parseTokenWwwD.exec(dateString)
  if (token) {
    week = parseInt(token[1], 10) - 1
    var dayOfWeek = parseInt(token[2], 10) - 1
    return dayOfISOYear(year, week, dayOfWeek)
  }

  // Invalid ISO-formatted date
  return null
}

function parseTime (timeString) {
  var token
  var hours
  var minutes

  // hh
  token = parseTokenHH.exec(timeString)
  if (token) {
    hours = parseFloat(token[1].replace(',', '.'))
    return (hours % 24) * MILLISECONDS_IN_HOUR
  }

  // hh:mm or hhmm
  token = parseTokenHHMM.exec(timeString)
  if (token) {
    hours = parseInt(token[1], 10)
    minutes = parseFloat(token[2].replace(',', '.'))
    return (hours % 24) * MILLISECONDS_IN_HOUR +
      minutes * MILLISECONDS_IN_MINUTE
  }

  // hh:mm:ss or hhmmss
  token = parseTokenHHMMSS.exec(timeString)
  if (token) {
    hours = parseInt(token[1], 10)
    minutes = parseInt(token[2], 10)
    var seconds = parseFloat(token[3].replace(',', '.'))
    return (hours % 24) * MILLISECONDS_IN_HOUR +
      minutes * MILLISECONDS_IN_MINUTE +
      seconds * 1000
  }

  // Invalid ISO-formatted time
  return null
}

function parseTimezone (timezoneString) {
  var token
  var absoluteOffset

  // Z
  token = parseTokenTimezoneZ.exec(timezoneString)
  if (token) {
    return 0
  }

  // ±hh
  token = parseTokenTimezoneHH.exec(timezoneString)
  if (token) {
    absoluteOffset = parseInt(token[2], 10) * 60
    return (token[1] === '+') ? -absoluteOffset : absoluteOffset
  }

  // ±hh:mm or ±hhmm
  token = parseTokenTimezoneHHMM.exec(timezoneString)
  if (token) {
    absoluteOffset = parseInt(token[2], 10) * 60 + parseInt(token[3], 10)
    return (token[1] === '+') ? -absoluteOffset : absoluteOffset
  }

  return 0
}

function dayOfISOYear (isoYear, week, day) {
  week = week || 0
  day = day || 0
  var date = new Date(0)
  date.setUTCFullYear(isoYear, 0, 4)
  var fourthOfJanuaryDay = date.getUTCDay() || 7
  var diff = week * 7 + day + 1 - fourthOfJanuaryDay
  date.setUTCDate(date.getUTCDate() + diff)
  return date
}

module.exports = parse


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = __webpack_require__(7);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (name, options) {
  return {
    validator: function validator(value) {
      if (options.includes(value)) {
        return true;
      }

      _vue2.default.util.warn('The ' + name + ' prop is invalid. Given value: ' + value + '. Available options: ' + options.join(', ') + '.', undefined);

      return false;
    }
  };
};

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/components/MdIcon/MdIcon.vue
var MdIcon = __webpack_require__(149);
var MdIcon_default = /*#__PURE__*/__webpack_require__.n(MdIcon);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-59c14b8f","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/components/MdIcon/MdIcon.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.mdSrc
    ? _c("md-svg-loader", {
        staticClass: "md-icon md-icon-image",
        class: [_vm.$mdActiveTheme],
        attrs: { "md-src": _vm.mdSrc },
        on: {
          "md-loaded": function($event) {
            _vm.$emit("md-loaded")
          }
        }
      })
    : _c(
        "i",
        { staticClass: "md-icon md-icon-font", class: [_vm.$mdActiveTheme] },
        [_vm._t("default")],
        2
      )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var MdIcon_MdIcon = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-59c14b8f", esExports)
  }
}
// CONCATENATED MODULE: ./src/components/MdIcon/MdIcon.vue
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(148)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  MdIcon_default.a,
  MdIcon_MdIcon,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/MdIcon/MdIcon.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-59c14b8f", Component.options)
  } else {
    hotAPI.reload("data-v-59c14b8f", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var components_MdIcon_MdIcon = __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var MdUuid = function MdUuid() {
  return Math.random().toString(36).slice(4);
};

exports.default = MdUuid;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/components/MdRipple/MdRipple.vue
var MdRipple = __webpack_require__(92);
var MdRipple_default = /*#__PURE__*/__webpack_require__.n(MdRipple);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-7692b1af","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/components/MdRipple/MdRipple.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "md-ripple",
      class: _vm.rippleClasses,
      on: {
        "&touchstart": function($event) {
          $event.stopPropagation()
          _vm.touchStartCheck($event)
        },
        "&touchmove": function($event) {
          $event.stopPropagation()
          _vm.touchMoveCheck($event)
        },
        "&mousedown": function($event) {
          $event.stopPropagation()
          _vm.startRipple($event)
        }
      }
    },
    [
      _vm._t("default"),
      _vm._v(" "),
      !_vm.isDisabled
        ? _c(
            "transition",
            {
              attrs: { name: "md-ripple" },
              on: { "after-enter": _vm.clearWave }
            },
            [
              _vm.animating
                ? _c("span", {
                    ref: "rippleWave",
                    staticClass: "md-ripple-wave",
                    class: _vm.waveClasses,
                    style: _vm.waveStyles
                  })
                : _vm._e()
            ]
          )
        : _vm._e()
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var MdRipple_MdRipple = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7692b1af", esExports)
  }
}
// CONCATENATED MODULE: ./src/components/MdRipple/MdRipple.vue
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(91)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  MdRipple_default.a,
  MdRipple_MdRipple,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/MdRipple/MdRipple.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7692b1af", Component.options)
  } else {
    hotAPI.reload("data-v-7692b1af", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var components_MdRipple_MdRipple = __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var now = __webpack_require__(64)
  , root = typeof window === 'undefined' ? global : window
  , vendors = ['moz', 'webkit']
  , suffix = 'AnimationFrame'
  , raf = root['request' + suffix]
  , caf = root['cancel' + suffix] || root['cancelRequest' + suffix]

for(var i = 0; !raf && i < vendors.length; i++) {
  raf = root[vendors[i] + 'Request' + suffix]
  caf = root[vendors[i] + 'Cancel' + suffix]
      || root[vendors[i] + 'CancelRequest' + suffix]
}

// Some versions of FF have rAF but not cAF
if(!raf || !caf) {
  var last = 0
    , id = 0
    , queue = []
    , frameDuration = 1000 / 60

  raf = function(callback) {
    if(queue.length === 0) {
      var _now = now()
        , next = Math.max(0, frameDuration - (_now - last))
      last = next + _now
      setTimeout(function() {
        var cp = queue.slice(0)
        // Clear queue here to prevent
        // callbacks from appending listeners
        // to the current frame's queue
        queue.length = 0
        for(var i = 0; i < cp.length; i++) {
          if(!cp[i].cancelled) {
            try{
              cp[i].callback(last)
            } catch(e) {
              setTimeout(function() { throw e }, 0)
            }
          }
        }
      }, Math.round(next))
    }
    queue.push({
      handle: ++id,
      callback: callback,
      cancelled: false
    })
    return id
  }

  caf = function(handle) {
    for(var i = 0; i < queue.length; i++) {
      if(queue[i].handle === handle) {
        queue[i].cancelled = true
      }
    }
  }
}

module.exports = function(fn) {
  // Wrap in a new function to prevent
  // `cancel` potentially being assigned
  // to the native rAF function
  return raf.call(root, fn)
}
module.exports.cancel = function() {
  caf.apply(root, arguments)
}
module.exports.polyfill = function(object) {
  if (!object) {
    object = root;
  }
  object.requestAnimationFrame = raf
  object.cancelAnimationFrame = caf
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(17)))

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/components/MdDialog/MdDialog.vue
var MdDialog = __webpack_require__(204);
var MdDialog_default = /*#__PURE__*/__webpack_require__.n(MdDialog);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-f080a6a2","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/components/MdDialog/MdDialog.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "md-portal",
    [
      _c("transition", { attrs: { name: "md-dialog" } }, [
        _vm.mdActive
          ? _c(
              "div",
              _vm._g(
                {
                  staticClass: "md-dialog",
                  class: [_vm.dialogClasses, _vm.$mdActiveTheme],
                  on: {
                    keydown: function($event) {
                      if (
                        !("button" in $event) &&
                        _vm._k($event.keyCode, "esc", 27, $event.key)
                      ) {
                        return null
                      }
                      _vm.onEsc($event)
                    }
                  }
                },
                _vm.$listeners
              ),
              [
                _c("md-focus-trap", [
                  _c(
                    "div",
                    { staticClass: "md-dialog-container" },
                    [
                      _vm._t("default"),
                      _vm._v(" "),
                      _c(
                        "keep-alive",
                        [
                          _vm.mdBackdrop
                            ? _c("md-overlay", {
                                class: _vm.mdBackdropClass,
                                attrs: {
                                  "md-fixed": "",
                                  "md-active": _vm.mdActive
                                },
                                on: { click: _vm.onClick }
                              })
                            : _vm._e()
                        ],
                        1
                      )
                    ],
                    2
                  )
                ])
              ],
              1
            )
          : _vm._e()
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var MdDialog_MdDialog = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-f080a6a2", esExports)
  }
}
// CONCATENATED MODULE: ./src/components/MdDialog/MdDialog.vue
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(203)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  MdDialog_default.a,
  MdDialog_MdDialog,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/MdDialog/MdDialog.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f080a6a2", Component.options)
  } else {
    hotAPI.reload("data-v-f080a6a2", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var components_MdDialog_MdDialog = __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MdRipple = __webpack_require__(19);

var _MdRipple2 = _interopRequireDefault(_MdRipple);

var _MdListItemContent = __webpack_require__(281);

var _MdListItemContent2 = _interopRequireDefault(_MdListItemContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  mixins: [_MdRipple2.default],
  components: {
    MdListItemContent: _MdListItemContent2.default
  },
  props: {
    disabled: Boolean
  },
  computed: {
    isDisabled: function isDisabled() {
      return !this.mdRipple || this.disabled;
    }
  }
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (context, props) {
  return _extends({}, props, context.$options.components['router-link'].options.props);
};

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_MdButton_vue__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_MdButton_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_MdButton_vue__);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(96)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */
var __vue_template__ = null
/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_MdButton_vue___default.a,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/MdButton/MdButton.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7d2cd822", Component.options)
  } else {
    hotAPI.reload("data-v-7d2cd822", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/components/MdField/MdInput/MdInput.vue
var MdInput = __webpack_require__(157);
var MdInput_default = /*#__PURE__*/__webpack_require__.n(MdInput);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-69de42aa","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/components/MdField/MdInput/MdInput.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "input",
    _vm._g(
      _vm._b(
        {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.model,
              expression: "model"
            }
          ],
          staticClass: "md-input",
          domProps: { value: _vm.model },
          on: {
            focus: _vm.onFocus,
            blur: _vm.onBlur,
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.model = $event.target.value
            }
          }
        },
        "input",
        _vm.attributes,
        false
      ),
      _vm.listeners
    )
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var MdInput_MdInput = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-69de42aa", esExports)
  }
}
// CONCATENATED MODULE: ./src/components/MdField/MdInput/MdInput.vue
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  MdInput_default.a,
  MdInput_MdInput,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/MdField/MdInput/MdInput.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-69de42aa", Component.options)
  } else {
    hotAPI.reload("data-v-69de42aa", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var MdField_MdInput_MdInput = __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = {
  props: {
    value: {},
    placeholder: String,
    maxlength: [String, Number],
    readonly: Boolean,
    required: Boolean,
    disabled: Boolean,
    mdCounter: [String, Number]
  },
  data: function data() {
    return {
      localValue: this.value,
      textareaHeight: false
    };
  },

  computed: {
    model: {
      get: function get() {
        return this.localValue;
      },
      set: function set(value) {
        var _this = this;

        if (value.constructor.name.toLowerCase() !== 'inputevent') {
          this.$nextTick(function () {
            _this.localValue = value;
          });
        }
      }
    },
    clear: function clear() {
      return this.MdField.clear;
    },
    attributes: function attributes() {
      return _extends({}, this.$attrs, {
        type: this.type,
        id: this.id,
        name: this.name,
        disabled: this.disabled,
        required: this.required,
        placeholder: this.placeholder,
        readonly: this.readonly,
        maxlength: this.maxlength
      });
    }
  },
  watch: {
    model: function model() {
      this.setFieldValue();
    },
    clear: function clear(_clear) {
      if (_clear) {
        this.clearField();
      }
    },
    placeholder: function placeholder() {
      this.setPlaceholder();
    },
    disabled: function disabled() {
      this.setDisabled();
    },
    required: function required() {
      this.setRequired();
    },
    maxlength: function maxlength() {
      this.setMaxlength();
    },
    mdCounter: function mdCounter() {
      this.setMaxlength();
    },
    localValue: function localValue(val) {
      this.$emit('input', val);
    },
    value: function value(val) {
      this.localValue = val;
    }
  },
  methods: {
    clearField: function clearField() {
      this.$el.value = '';
      this.model = '';
      this.setFieldValue();
    },
    setLabelFor: function setLabelFor() {
      if (this.$el.parentNode) {
        var label = this.$el.parentNode.querySelector('label');

        if (label) {
          var forAttribute = label.getAttribute('for');

          if (!forAttribute || forAttribute.indexOf('md-') >= 0) {
            label.setAttribute('for', this.id);
          }
        }
      }
    },
    setFieldValue: function setFieldValue() {
      this.MdField.value = this.model;
    },
    setPlaceholder: function setPlaceholder() {
      this.MdField.placeholder = Boolean(this.placeholder);
    },
    setDisabled: function setDisabled() {
      this.MdField.disabled = Boolean(this.disabled);
    },
    setRequired: function setRequired() {
      this.MdField.required = Boolean(this.required);
    },
    setMaxlength: function setMaxlength() {
      if (this.mdCounter) {
        this.MdField.counter = parseInt(this.mdCounter, 10);
      } else {
        this.MdField.maxlength = parseInt(this.maxlength, 10);
      }
    },
    onFocus: function onFocus() {
      this.MdField.focused = true;
    },
    onBlur: function onBlur() {
      this.MdField.focused = false;
    }
  },
  created: function created() {
    this.setFieldValue();
    this.setPlaceholder();
    this.setDisabled();
    this.setRequired();
    this.setMaxlength();
  },
  mounted: function mounted() {
    this.setLabelFor();
  }
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = __webpack_require__(7);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = {
  name: 'MdPortal',
  abstract: true,
  props: {
    mdAttachToParent: Boolean,
    mdTarget: {
      type: null,
      validator: function validator(value) {
        if (HTMLElement && value && value instanceof HTMLElement) {
          return true;
        }

        _vue2.default.util.warn('The md-target-el prop is invalid. You should pass a valid HTMLElement.', this);

        return false;
      }
    }
  },
  data: function data() {
    return {
      leaveTimeout: null,
      originalParentEl: null
    };
  },
  computed: {
    transitionName: function transitionName() {
      var childrenComponent = this._vnode.componentOptions.children[0];

      if (childrenComponent) {
        var transition = childrenComponent.data.transition;

        if (transition) {
          return transition.name;
        } else {
          var _transition = childrenComponent.componentOptions.propsData.name;

          if (_transition) {
            return _transition;
          }
        }
      }

      return 'v';
    },
    leaveClass: function leaveClass() {
      return this.transitionName + '-leave';
    },
    leaveActiveClass: function leaveActiveClass() {
      return this.transitionName + '-leave-active';
    },
    leaveToClass: function leaveToClass() {
      return this.transitionName + '-leave-to';
    }
  },
  watch: {
    mdTarget: function mdTarget(newTarget, oldTarget) {
      this.changeParentEl(newTarget);

      if (oldTarget) {
        this.$forceUpdate();
      }
    }
  },
  methods: {
    getTransitionDuration: function getTransitionDuration(el) {
      var duration = getComputedStyle(el).transitionDuration;
      var num = parseFloat(duration, 10);
      var unit = duration.match(/m?s/);
      var milliseconds = null;

      if (unit) {
        unit = unit[0];
      }

      switch (unit) {
        case 's':
          milliseconds = num * 1000;
          break;

        case 'ms':
          milliseconds = num;
          break;

        default:
          milliseconds = 0;
          break;
      }

      return milliseconds;
    },
    killGhostElement: function killGhostElement(el) {
      if (el.parentNode) {
        this.changeParentEl(this.originalParentEl);
        this.$options._parentElm = this.originalParentEl;
        el.parentNode.removeChild(el);
      }
    },
    initDestroy: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(manualCall) {
        var _this = this;

        var el;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                el = this.$el;


                if (manualCall && this.$el.constructor.name.toLowerCase() === 'comment') {
                  el = this.$vnode.elm;
                }

                el.classList.add(this.leaveClass);
                el.classList.add(this.leaveActiveClass);
                _context.next = 6;
                return this.$nextTick();

              case 6:
                el.classList.add(this.leaveToClass);

                clearTimeout(this.leaveTimeout);
                this.leaveTimeout = setTimeout(function () {
                  _this.destroyElement(el);
                }, this.getTransitionDuration(el));

              case 9:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function initDestroy(_x) {
        return _ref.apply(this, arguments);
      }

      return initDestroy;
    }(),
    destroyElement: function destroyElement(el) {
      var _this2 = this;

      requestAnimationFrame(function () {
        el.classList.remove(_this2.leaveClass);
        el.classList.remove(_this2.leaveActiveClass);
        el.classList.remove(_this2.leaveToClass);
        _this2.$emit('md-destroy');
        _this2.killGhostElement(el);
      });
    },
    changeParentEl: function changeParentEl(newTarget) {
      newTarget && newTarget.appendChild(this.$el);
    }
  },
  mounted: function mounted() {
    if (!this.originalParentEl) {
      this.originalParentEl = this.$el.parentNode;
      this.$emit('md-initial-parent', this.$el.parentNode);
    }

    if (this.mdAttachToParent && this.$el.parentNode.parentNode) {
      this.changeParentEl(this.$el.parentNode.parentNode);
    } else if (document) {
      this.changeParentEl(this.mdTarget || document.body);
    }
  },
  beforeDestroy: function beforeDestroy() {
    if (this.$el.classList) {
      this.initDestroy();
    } else {
      this.killGhostElement(this.$el);
    }
  },
  render: function render(createElement) {
    var defaultSlot = this.$slots.default;

    if (defaultSlot && defaultSlot[0]) {
      return defaultSlot[0];
    }
  }
};

/***/ }),
/* 17 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  methods: {
    isAssetIcon: function isAssetIcon(icon) {
      return (/\w+[/\\.]\w+/.test(icon)
      );
    }
  }
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MdRipple = __webpack_require__(8);

var _MdRipple2 = _interopRequireDefault(_MdRipple);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: {
    MdRipple: _MdRipple2.default
  },
  props: {
    mdRipple: {
      type: Boolean,
      default: true
    }
  }
};

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/components/MdField/MdField.vue
var MdField = __webpack_require__(146);
var MdField_default = /*#__PURE__*/__webpack_require__.n(MdField);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-2ecd7b97","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/components/MdField/MdField.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "md-field",
      class: [_vm.$mdActiveTheme, _vm.fieldClasses],
      on: { blur: _vm.onBlur }
    },
    [
      _vm._t("default"),
      _vm._v(" "),
      _vm.hasCounter
        ? _c("span", { staticClass: "md-count" }, [
            _vm._v(
              _vm._s(_vm.valueLength) +
                " / " +
                _vm._s(_vm.MdField.maxlength || _vm.MdField.counter)
            )
          ])
        : _vm._e(),
      _vm._v(" "),
      _c(
        "transition",
        { attrs: { name: "md-input-action", appear: "" } },
        [
          _vm.hasValue && _vm.mdClearable
            ? _c(
                "md-button",
                {
                  staticClass:
                    "md-icon-button md-dense md-input-action md-clear",
                  attrs: { tabindex: "-1" },
                  on: { click: _vm.clearInput }
                },
                [_c("md-clear-icon")],
                1
              )
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "transition",
        { attrs: { name: "md-input-action", appear: "" } },
        [
          _vm.hasPasswordToggle
            ? _c(
                "md-button",
                {
                  staticClass:
                    "md-icon-button md-dense md-input-action md-toggle-password",
                  attrs: { tabindex: "-1" },
                  on: { click: _vm.togglePassword }
                },
                [
                  _vm.MdField.togglePassword
                    ? _c("md-password-off-icon")
                    : _c("md-password-on-icon")
                ],
                1
              )
            : _vm._e()
        ],
        1
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var MdField_MdField = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2ecd7b97", esExports)
  }
}
// CONCATENATED MODULE: ./src/components/MdField/MdField.vue
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(145)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  MdField_default.a,
  MdField_MdField,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/MdField/MdField.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2ecd7b97", Component.options)
  } else {
    hotAPI.reload("data-v-2ecd7b97", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var components_MdField_MdField = __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(3)

/**
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the start of a day
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * var result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */
function startOfDay (dirtyDate) {
  var date = parse(dirtyDate)
  date.setHours(0, 0, 0, 0)
  return date
}

module.exports = startOfDay


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var startOfWeek = __webpack_require__(173)

/**
 * @category ISO Week Helpers
 * @summary Return the start of an ISO week for the given date.
 *
 * @description
 * Return the start of an ISO week for the given date.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the start of an ISO week
 *
 * @example
 * // The start of an ISO week for 2 September 2014 11:55:00:
 * var result = startOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfISOWeek (dirtyDate) {
  return startOfWeek(dirtyDate, {weekStartsOn: 1})
}

module.exports = startOfISOWeek


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/components/MdOverlay/MdOverlay.vue
var MdOverlay = __webpack_require__(180);
var MdOverlay_default = /*#__PURE__*/__webpack_require__.n(MdOverlay);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-0e05c97a","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/components/MdOverlay/MdOverlay.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "md-portal",
    { attrs: { "md-attach-to-parent": _vm.mdAttachToParent } },
    [
      _c("transition", { attrs: { name: "md-overlay" } }, [
        _vm.mdActive
          ? _c(
              "div",
              _vm._g(
                { staticClass: "md-overlay", class: _vm.overlayClasses },
                _vm.$listeners
              )
            )
          : _vm._e()
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var MdOverlay_MdOverlay = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0e05c97a", esExports)
  }
}
// CONCATENATED MODULE: ./src/components/MdOverlay/MdOverlay.vue
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(179)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  MdOverlay_default.a,
  MdOverlay_MdOverlay,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/MdOverlay/MdOverlay.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0e05c97a", Component.options)
  } else {
    hotAPI.reload("data-v-0e05c97a", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var components_MdOverlay_MdOverlay = __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(3)

/**
 * @category Month Helpers
 * @summary Get the number of days in a month of the given date.
 *
 * @description
 * Get the number of days in a month of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the number of days in a month
 *
 * @example
 * // How many days are in February 2000?
 * var result = getDaysInMonth(new Date(2000, 1))
 * //=> 29
 */
function getDaysInMonth (dirtyDate) {
  var date = parse(dirtyDate)
  var year = date.getFullYear()
  var monthIndex = date.getMonth()
  var lastDayOfMonth = new Date(0)
  lastDayOfMonth.setFullYear(year, monthIndex + 1, 0)
  lastDayOfMonth.setHours(0, 0, 0, 0)
  return lastDayOfMonth.getDate()
}

module.exports = getDaysInMonth


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_MdPopover_vue__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_MdPopover_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_MdPopover_vue__);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(196)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */
var __vue_template__ = null
/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_MdPopover_vue___default.a,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/MdPopover/MdPopover.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d36236a6", Component.options)
  } else {
    hotAPI.reload("data-v-d36236a6", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (el, config, cb) {
  if ('MutationObserver' in window) {
    var observer = new window.MutationObserver(cb);

    observer.observe(el, config);

    return {
      disconnect: function disconnect() {
        observer.disconnect();
      }
    };
  }
};

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/components/MdTable/MdTableHead.vue
var MdTableHead = __webpack_require__(359);
var MdTableHead_default = /*#__PURE__*/__webpack_require__.n(MdTableHead);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-98ddc082","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/components/MdTable/MdTableHead.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "th",
    {
      staticClass: "md-table-head",
      class: _vm.headClasses,
      style: _vm.headStyles,
      on: { click: _vm.changeSort }
    },
    [
      _vm.$slots.default
        ? _c("div", { staticClass: "md-table-head-container" }, [
            _c(
              "div",
              { staticClass: "md-table-head-label" },
              [_vm._t("default")],
              2
            )
          ])
        : _c(
            "md-ripple",
            {
              staticClass: "md-table-head-container",
              attrs: { "md-disabled": !_vm.hasSort }
            },
            [
              _c(
                "div",
                { staticClass: "md-table-head-label" },
                [
                  _vm.hasSort
                    ? _c(
                        "md-upward-icon",
                        { staticClass: "md-table-sortable-icon" },
                        [_vm._v("arrow_upward")]
                      )
                    : _vm._e(),
                  _vm._v("\n\n      " + _vm._s(_vm.label) + "\n\n      "),
                  _vm.tooltip
                    ? _c("md-tooltip", [_vm._v(_vm._s(_vm.tooltip))])
                    : _vm._e()
                ],
                1
              )
            ]
          )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var MdTable_MdTableHead = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-98ddc082", esExports)
  }
}
// CONCATENATED MODULE: ./src/components/MdTable/MdTableHead.vue
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(358)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  MdTableHead_default.a,
  MdTable_MdTableHead,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/MdTable/MdTableHead.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-98ddc082", Component.options)
  } else {
    hotAPI.reload("data-v-98ddc082", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var components_MdTable_MdTableHead = __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (data) {
  var Instance = {};

  _vue2.default.util.defineReactive(Instance, 'reactive', data);

  return Instance.reactive;
};

var _vue = __webpack_require__(7);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = __webpack_require__(7);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var msColor = null;
var themeColor = null;
var maskIcon = null;

exports.default = new _vue2.default({
  data: function data() {
    return {
      prefix: 'md-theme-',
      theme: 'default',
      enabled: true,
      metaColors: false
    };
  },
  computed: {
    themeTarget: function themeTarget() {
      if (!this.$isServer) {
        return document.documentElement;
      }

      return false;
    },
    fullThemeName: function fullThemeName() {
      return this.getThemeName();
    }
  },
  watch: {
    enabled: {
      immediate: true,
      handler: function handler() {
        var fullThemeName = this.fullThemeName,
            themeTarget = this.themeTarget,
            enabled = this.enabled;


        if (themeTarget) {
          if (enabled) {
            themeTarget.classList.add(fullThemeName);
            this.metaColors && this.setHtmlMetaColors(fullThemeName);
          } else {
            themeTarget.classList.remove(fullThemeName);
            this.metaColors && this.setHtmlMetaColors();
          }
        }
      }
    },
    theme: function theme(newTheme, oldTheme) {
      var getThemeName = this.getThemeName,
          themeTarget = this.themeTarget;


      newTheme = getThemeName(newTheme);

      themeTarget.classList.remove(getThemeName(oldTheme));
      themeTarget.classList.add(newTheme);

      if (this.metaColors) {
        this.setHtmlMetaColors(newTheme);
      }
    },
    metaColors: function metaColors(meta) {
      if (meta) {
        this.setHtmlMetaColors(this.fullThemeName);
      } else {
        this.setHtmlMetaColors();
      }
    }
  },
  methods: {
    getAncestorTheme: function getAncestorTheme(component) {
      var _this = this;

      if (component) {
        var currentTheme = component.mdTheme;
        var getParentThemeName = function getParentThemeName(parent) {
          if (parent) {
            var mdTheme = parent.mdTheme,
                $parent = parent.$parent;


            if (mdTheme && mdTheme !== currentTheme) {
              return mdTheme;
            }

            return getParentThemeName($parent);
          }

          return _this.theme;
        };

        return getParentThemeName(component.$parent);
      }

      return null;
    },
    getThemeName: function getThemeName(theme) {
      var themeName = theme || this.theme;

      return this.prefix + themeName;
    },
    setMicrosoftColors: function setMicrosoftColors(primaryColor) {
      if (msColor) {
        msColor.setAttribute('content', primaryColor);
      }
    },
    setThemeColors: function setThemeColors(primaryColor) {
      if (themeColor) {
        themeColor.setAttribute('content', primaryColor);
      }
    },
    setMaskColors: function setMaskColors(primaryColor) {
      if (maskIcon) {
        maskIcon.setAttribute('color', primaryColor);
      }
    },
    setHtmlMetaColors: function setHtmlMetaColors(themeName) {
      var primaryColor = '#fff';

      if (themeName) {
        var computedStyle = window.getComputedStyle(document.documentElement);

        primaryColor = computedStyle.getPropertyValue('--' + themeName + '-primary');
      }

      if (primaryColor) {
        this.setMicrosoftColors(primaryColor);
        this.setThemeColors(primaryColor);
        this.setMaskColors(primaryColor);
      }
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    msColor = document.querySelector('[name="msapplication-TileColor"]');
    themeColor = document.querySelector('[name="theme-color"]');
    maskIcon = document.querySelector('[rel="mask-icon"]');

    if (this.enabled && this.metaColors) {
      window.addEventListener('load', function () {
        _this2.setHtmlMetaColors(_this2.fullThemeName);
      });
    }
  }
});

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var isMergeableObject = function isMergeableObject(value) {
	return isNonNullObject(value)
		&& !isSpecial(value)
};

function isNonNullObject(value) {
	return !!value && typeof value === 'object'
}

function isSpecial(value) {
	var stringValue = Object.prototype.toString.call(value);

	return stringValue === '[object RegExp]'
		|| stringValue === '[object Date]'
		|| isReactElement(value)
}

// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

function isReactElement(value) {
	return value.$$typeof === REACT_ELEMENT_TYPE
}

function emptyTarget(val) {
	return Array.isArray(val) ? [] : {}
}

function cloneUnlessOtherwiseSpecified(value, optionsArgument) {
	var clone = !optionsArgument || optionsArgument.clone !== false;

	return (clone && isMergeableObject(value))
		? deepmerge(emptyTarget(value), value, optionsArgument)
		: value
}

function defaultArrayMerge(target, source, optionsArgument) {
	return target.concat(source).map(function(element) {
		return cloneUnlessOtherwiseSpecified(element, optionsArgument)
	})
}

function mergeObject(target, source, optionsArgument) {
	var destination = {};
	if (isMergeableObject(target)) {
		Object.keys(target).forEach(function(key) {
			destination[key] = cloneUnlessOtherwiseSpecified(target[key], optionsArgument);
		});
	}
	Object.keys(source).forEach(function(key) {
		if (!isMergeableObject(source[key]) || !target[key]) {
			destination[key] = cloneUnlessOtherwiseSpecified(source[key], optionsArgument);
		} else {
			destination[key] = deepmerge(target[key], source[key], optionsArgument);
		}
	});
	return destination
}

function deepmerge(target, source, optionsArgument) {
	var sourceIsArray = Array.isArray(source);
	var targetIsArray = Array.isArray(target);
	var options = optionsArgument || { arrayMerge: defaultArrayMerge };
	var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

	if (!sourceAndTargetTypesMatch) {
		return cloneUnlessOtherwiseSpecified(source, optionsArgument)
	} else if (sourceIsArray) {
		var arrayMerge = options.arrayMerge || defaultArrayMerge;
		return arrayMerge(target, source, optionsArgument)
	} else {
		return mergeObject(target, source, optionsArgument)
	}
}

deepmerge.all = function deepmergeAll(array, optionsArgument) {
	if (!Array.isArray(array)) {
		throw new Error('first argument should be an array')
	}

	return array.reduce(function(prev, next) {
		return deepmerge(prev, next, optionsArgument)
	}, {})
};

var deepmerge_1 = deepmerge;

/* harmony default export */ __webpack_exports__["default"] = (deepmerge_1);


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _raf = __webpack_require__(9);

var _raf2 = _interopRequireDefault(_raf);

var _MdPropValidator = __webpack_require__(4);

var _MdPropValidator2 = _interopRequireDefault(_MdPropValidator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mdAppModes = ['fixed', 'fixed-last', 'reveal', 'overlap', 'flexible'];

exports.default = {
  props: {
    mdMode: _extends({
      type: String
    }, (0, _MdPropValidator2.default)('md-mode', mdAppModes)),
    mdWaterfall: Boolean,
    mdScrollbar: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      revealTimer: null,
      revealLastPos: 0,
      manualTick: false,
      MdApp: {
        options: {
          mode: null,
          waterfall: false,
          flexible: false
        },
        toolbar: {
          element: null,
          titleElement: null,
          height: '0px',
          initialHeight: 0,
          top: 0,
          titleSize: 20,
          hasElevation: true,
          revealActive: false,
          fixedLastActive: false,
          fixedLastHeight: false,
          overlapOff: false
        },
        drawer: {
          initialWidth: 0,
          active: false,
          mode: 'temporary',
          width: 0
        }
      }
    };
  },
  provide: function provide() {
    return {
      MdApp: this.MdApp
    };
  },

  computed: {
    contentStyles: function contentStyles() {
      var drawer = this.MdApp.drawer;

      if (drawer.active && drawer.mode === 'persistent' && drawer.submode === 'full') {
        return {
          'padding-left': drawer.width
        };
      }
    },
    containerStyles: function containerStyles() {
      var drawer = this.MdApp.drawer;
      var styles = {};

      if (this.mdMode && this.mdMode !== 'fixed') {
        styles['margin-top'] = this.MdApp.toolbar.initialHeight + 'px';
      }

      if (drawer.mode === 'persistent' && drawer.submode === 'mini') {
        styles['padding-left'] = !drawer.active ? drawer.initialWidth + 'px' : 0;
      }

      return styles;
    },
    scrollerClasses: function scrollerClasses() {
      if (this.mdScrollbar) {
        return 'md-scrollbar';
      }
    },
    appClasses: function appClasses() {
      return {
        'md-waterfall': this.mdWaterfall,
        'md-flexible': this.mdMode === 'flexible',
        'md-fixed': this.mdMode === 'fixed',
        'md-fixed-last': this.mdMode === 'fixed-last',
        'md-reveal': this.mdMode === 'reveal',
        'md-overlap': this.mdMode === 'overlap',
        'md-drawer-active': this.MdApp.drawer.active
      };
    }
  },
  watch: {
    mdMode: function mdMode(mode) {
      this.MdApp.options.mode = mode;
    },
    mdWaterfall: function mdWaterfall(waterfall) {
      this.MdApp.options.waterfall = waterfall;
      this.setToolbarElevation();
    }
  },
  methods: {
    setToolbarElevation: function setToolbarElevation() {
      this.MdApp.toolbar.hasElevation = !this.mdWaterfall;
    },
    setToolbarTimer: function setToolbarTimer(scrollTop) {
      var _this = this;

      window.clearTimeout(this.revealTimer);

      this.revealTimer = window.setTimeout(function () {
        _this.revealLastPos = scrollTop;
      }, 100);
    },
    setToolbarMarginAndHeight: function setToolbarMarginAndHeight(margin, height) {
      this.MdApp.toolbar.top = margin;
      this.MdApp.toolbar.height = height;
    },
    getToolbarConstrants: function getToolbarConstrants($event) {
      var toolbarHeight = this.MdApp.toolbar.element.offsetHeight;
      var safeAmount = 10;
      var threshold = toolbarHeight + safeAmount;
      var scrollTop = $event.target.scrollTop;

      if (!this.MdApp.toolbar.initialHeight) {
        this.MdApp.toolbar.initialHeight = toolbarHeight;
      }

      return {
        toolbarHeight: toolbarHeight,
        safeAmount: safeAmount,
        threshold: threshold,
        scrollTop: scrollTop,
        initialHeight: this.MdApp.toolbar.initialHeight
      };
    },
    handleWaterfallScroll: function handleWaterfallScroll($event) {
      var _getToolbarConstrants = this.getToolbarConstrants($event),
          threshold = _getToolbarConstrants.threshold,
          scrollTop = _getToolbarConstrants.scrollTop;

      var elevationMark = 4;

      if (this.mdMode === 'reveal') {
        elevationMark = threshold;
      }

      this.MdApp.toolbar.hasElevation = scrollTop >= elevationMark;
    },
    handleFlexibleMode: function handleFlexibleMode($event) {
      var _getToolbarConstrants2 = this.getToolbarConstrants($event),
          scrollTop = _getToolbarConstrants2.scrollTop,
          initialHeight = _getToolbarConstrants2.initialHeight;

      var toolbar = this.MdApp.toolbar.element;
      var firstRow = toolbar.querySelector('.md-toolbar-row:first-child');
      var firstRowHeight = firstRow.offsetHeight;
      var scrollAmount = initialHeight - scrollTop;
      var shouldKeepFlexible = scrollTop < initialHeight - firstRowHeight;

      if (firstRowHeight) {
        if (shouldKeepFlexible) {
          toolbar.style.height = scrollAmount + 'px';
        } else {
          toolbar.style.height = firstRowHeight + 'px';
        }
      }

      var titleElement = this.MdApp.toolbar.titleElement;
      if (titleElement) {
        var targetSize = 20;
        var initialSize = this.MdApp.toolbar.titleSize;

        if (shouldKeepFlexible) {
          var newSize = Math.max(0, 1 - (scrollTop - initialSize) / (scrollAmount + initialSize + 0.000001)) * (initialSize - targetSize) + targetSize;

          titleElement.style.fontSize = newSize + 'px';
        } else {
          titleElement.style.fontSize = '20px';
        }
      }

      var _getToolbarConstrants3 = this.getToolbarConstrants($event),
          threshold = _getToolbarConstrants3.threshold,
          toolbarHeight = _getToolbarConstrants3.toolbarHeight;

      this.setToolbarMarginAndHeight(scrollTop - threshold, toolbarHeight);
    },
    handleRevealMode: function handleRevealMode($event) {
      var _getToolbarConstrants4 = this.getToolbarConstrants($event),
          toolbarHeight = _getToolbarConstrants4.toolbarHeight,
          safeAmount = _getToolbarConstrants4.safeAmount,
          threshold = _getToolbarConstrants4.threshold,
          scrollTop = _getToolbarConstrants4.scrollTop;

      this.setToolbarTimer(scrollTop);
      this.setToolbarMarginAndHeight(scrollTop - threshold, toolbarHeight);

      if (scrollTop >= threshold) {
        this.MdApp.toolbar.revealActive = this.revealLastPos > scrollTop + safeAmount;
      } else {
        this.MdApp.toolbar.revealActive = true;
      }
    },
    handleFixedLastMode: function handleFixedLastMode($event) {
      var _getToolbarConstrants5 = this.getToolbarConstrants($event),
          scrollTop = _getToolbarConstrants5.scrollTop,
          toolbarHeight = _getToolbarConstrants5.toolbarHeight,
          safeAmount = _getToolbarConstrants5.safeAmount;

      var toolbar = this.MdApp.toolbar.element;
      var firstRow = toolbar.querySelector('.md-toolbar-row:first-child');
      var firstRowHeight = firstRow.offsetHeight;

      this.setToolbarTimer(scrollTop);
      this.setToolbarMarginAndHeight(scrollTop - firstRowHeight, toolbarHeight);
      this.MdApp.toolbar.fixedLastHeight = firstRowHeight;

      if (scrollTop >= firstRowHeight) {
        this.MdApp.toolbar.fixedLastActive = this.revealLastPos > scrollTop + safeAmount;
      } else {
        this.MdApp.toolbar.fixedLastActive = true;
      }
    },
    handleOverlapMode: function handleOverlapMode($event) {
      var _getToolbarConstrants6 = this.getToolbarConstrants($event),
          toolbarHeight = _getToolbarConstrants6.toolbarHeight,
          scrollTop = _getToolbarConstrants6.scrollTop,
          initialHeight = _getToolbarConstrants6.initialHeight;

      var toolbar = this.MdApp.toolbar.element;
      var firstRow = toolbar.querySelector('.md-toolbar-row:first-child');
      var firstRowHeight = firstRow.offsetHeight;
      var newHeight = initialHeight - scrollTop - scrollTop * 100 / (initialHeight - firstRowHeight - firstRowHeight / 1.5);

      if (firstRowHeight) {
        if (scrollTop < initialHeight - firstRowHeight && newHeight >= firstRowHeight) {
          this.MdApp.toolbar.overlapOff = false;
          toolbar.style.height = newHeight + 'px';
        } else {
          this.MdApp.toolbar.overlapOff = true;
          toolbar.style.height = firstRowHeight + 'px';
        }
      }

      this.setToolbarMarginAndHeight(scrollTop, toolbarHeight);
    },
    handleModeScroll: function handleModeScroll($event) {
      if (this.mdMode === 'reveal') {
        this.handleRevealMode($event);
      } else if (this.mdMode === 'fixed-last') {
        this.handleFixedLastMode($event);
      } else if (this.mdMode === 'overlap') {
        this.handleOverlapMode($event);
      } else if (this.mdMode === 'flexible') {
        this.handleFlexibleMode($event);
      }
    },
    handleScroll: function handleScroll($event) {
      var _this2 = this;

      if (this.MdApp.toolbar.element) {
        (0, _raf2.default)(function () {
          if (_this2.mdWaterfall) {
            _this2.handleWaterfallScroll($event);
          }

          if (_this2.mdMode) {
            _this2.handleModeScroll($event);
          }
        });
      }
    }
  },
  created: function created() {
    this.MdApp.options.mode = this.mdMode;
    this.MdApp.options.waterfall = this.mdWaterfall;
    this.setToolbarElevation();
  },
  mounted: function mounted() {
    var fakeEvent = {
      target: {
        scrollTop: 0
      }
    };

    if (this.mdMode === 'reveal') {
      this.MdApp.toolbar.revealActive = true;
      this.handleRevealMode(fakeEvent);
    }

    if (this.mdMode === 'flexible') {
      this.MdApp.toolbar.revealActive = true;
      this.handleFlexibleMode(fakeEvent);
    }

    if (this.mdMode === 'fixed-last') {
      this.MdApp.toolbar.fixedLastActive = true;
      this.handleFixedLastMode(fakeEvent);
    }

    if (this.mdMode === 'overlap') {
      this.handleOverlapMode(fakeEvent);
    }
  }
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MdReactive = __webpack_require__(28);

var _MdReactive2 = _interopRequireDefault(_MdReactive);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hasEvents = false;
var eventTarget = null;
var supportsPassiveEvent = false;
var MdFocused = new _MdReactive2.default({
  currentElement: null
});

function checkPassiveEventSupport() {
  try {
    var opts = Object.defineProperty({}, 'passive', {
      get: function get() {
        supportsPassiveEvent = { passive: true };
      }
    });
    window.addEventListener('ghost', null, opts);
  } catch (e) {}
}

function setKeyboardInteraction(_ref) {
  var keyCode = _ref.keyCode,
      target = _ref.target;

  MdFocused.currentElement = target;
}

function setMouseAndTouchInteraction(event) {
  MdFocused.currentElement = null;
}

function createKeyboardEvents() {
  eventTarget.addEventListener('keyup', setKeyboardInteraction);
}

function createPointerEvents() {
  eventTarget.addEventListener('pointerup', setMouseAndTouchInteraction);
}

function createMSPointerEvents() {
  eventTarget.addEventListener('MSPointerUp', setMouseAndTouchInteraction);
}

function createMouseAndTouchEvents() {
  eventTarget.addEventListener('mouseup', setMouseAndTouchInteraction);

  if ('ontouchend' in window) {
    eventTarget.addEventListener('touchend', setMouseAndTouchInteraction, supportsPassiveEvent);
  }
}

function bindEvents() {
  if (window.PointerEvent) {
    createPointerEvents();
  } else if (window.MSPointerEvent) {
    createMSPointerEvents();
  } else {
    createMouseAndTouchEvents();
  }

  createKeyboardEvents();
}

function createEvents() {
  if (!hasEvents) {
    eventTarget = document.body;
    checkPassiveEventSupport();
    bindEvents();
    hasEvents = true;
  }
}

exports.default = {
  data: function data() {
    return {
      mdHasFocus: false
    };
  },
  computed: {
    focusedElement: function focusedElement() {
      return MdFocused.currentElement;
    }
  },
  watch: {
    focusedElement: function focusedElement(el) {
      this.mdHasFocus = el === this.$el;
    }
  },
  mounted: function mounted() {
    createEvents();
  }
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MdRipple = __webpack_require__(8);

var _MdRipple2 = _interopRequireDefault(_MdRipple);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: {
    MdRipple: _MdRipple2.default
  },
  props: {
    model: [String, Number, Boolean, Array],
    value: {
      type: [String, Number, Boolean],
      default: 'on'
    },
    name: [String, Number],
    required: Boolean,
    disabled: Boolean
  },
  model: {
    prop: 'model',
    event: 'change'
  },
  data: function data() {
    return {
      rippleActive: false
    };
  },
  computed: {
    isSelected: function isSelected() {
      if (this.isModelArray) {
        return this.model.includes(this.value);
      }

      if (this.isModelBoolean && this.value === 'on') {
        return this.model;
      }

      return this.model === this.value;
    },
    isModelArray: function isModelArray() {
      return Array.isArray(this.model);
    },
    isModelBoolean: function isModelBoolean() {
      return typeof this.model === 'boolean';
    },
    checkClasses: function checkClasses() {
      return {
        'md-checked': this.isSelected,
        'md-disabled': this.disabled,
        'md-required': this.required
      };
    }
  },
  methods: {
    removeItemFromModel: function removeItemFromModel(newModel) {
      var index = newModel.indexOf(this.value);

      if (index !== -1) {
        newModel.splice(index, 1);
      }
    },
    handleArrayCheckbox: function handleArrayCheckbox() {
      var newModel = this.model;

      if (!this.isSelected) {
        newModel.push(this.value);
      } else {
        this.removeItemFromModel(newModel);
      }

      this.$emit('change', newModel);
    },
    handleStringCheckbox: function handleStringCheckbox() {
      if (!this.isSelected) {
        this.$emit('change', this.value);
      } else {
        this.$emit('change', null);
      }
    },
    handleBooleanCheckbox: function handleBooleanCheckbox() {
      this.$emit('change', !this.model);
    },
    toggleCheck: function toggleCheck() {
      if (!this.disabled) {
        this.rippleActive = true;

        if (this.isModelArray) {
          this.handleArrayCheckbox();
        } else if (this.isModelBoolean) {
          this.handleBooleanCheckbox();
        } else {
          this.handleStringCheckbox();
        }
      }
    }
  }
};

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/core/icons/MdClearIcon.vue
var MdClearIcon = __webpack_require__(147);
var MdClearIcon_default = /*#__PURE__*/__webpack_require__.n(MdClearIcon);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-f53126ba","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/core/icons/MdClearIcon.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(1)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "svg",
      {
        attrs: {
          height: "24",
          viewBox: "0 0 24 24",
          width: "24",
          xmlns: "http://www.w3.org/2000/svg"
        }
      },
      [
        _c("path", {
          attrs: {
            d:
              "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
          }
        }),
        _vm._v(" "),
        _c("path", { attrs: { d: "M0 0h24v24H0z", fill: "none" } })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("md-icon", { staticClass: "md-icon-image" }, [_vm._m(0)])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var icons_MdClearIcon = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-f53126ba", esExports)
  }
}
// CONCATENATED MODULE: ./src/core/icons/MdClearIcon.vue
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  MdClearIcon_default.a,
  icons_MdClearIcon,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/core/icons/MdClearIcon.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f53126ba", Component.options)
  } else {
    hotAPI.reload("data-v-f53126ba", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var core_icons_MdClearIcon = __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_MdContent_vue__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_MdContent_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_MdContent_vue__);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */
var __vue_template__ = null
/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_MdContent_vue___default.a,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/MdContent/MdContent.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-500cc355", Component.options)
  } else {
    hotAPI.reload("data-v-500cc355", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 36 */
/***/ (function(module, exports) {

/**
 * @category Common Helpers
 * @summary Is the given argument an instance of Date?
 *
 * @description
 * Is the given argument an instance of Date?
 *
 * @param {*} argument - the argument to check
 * @returns {Boolean} the given argument is an instance of Date
 *
 * @example
 * // Is 'mayonnaise' a Date?
 * var result = isDate('mayonnaise')
 * //=> false
 */
function isDate (argument) {
  return argument instanceof Date
}

module.exports = isDate


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(3)
var startOfISOWeek = __webpack_require__(22)

/**
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the ISO week-numbering year of the given date.
 *
 * @description
 * Get the ISO week-numbering year of the given date,
 * which always starts 3 days before the year's first Thursday.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the ISO week-numbering year
 *
 * @example
 * // Which ISO-week numbering year is 2 January 2005?
 * var result = getISOYear(new Date(2005, 0, 2))
 * //=> 2004
 */
function getISOYear (dirtyDate) {
  var date = parse(dirtyDate)
  var year = date.getFullYear()

  var fourthOfJanuaryOfNextYear = new Date(0)
  fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4)
  fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0)
  var startOfNextYear = startOfISOWeek(fourthOfJanuaryOfNextYear)

  var fourthOfJanuaryOfThisYear = new Date(0)
  fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4)
  fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0)
  var startOfThisYear = startOfISOWeek(fourthOfJanuaryOfThisYear)

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year
  } else {
    return year - 1
  }
}

module.exports = getISOYear


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var isDate = __webpack_require__(36)

/**
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @param {Date} date - the date to check
 * @returns {Boolean} the date is valid
 * @throws {TypeError} argument must be an instance of Date
 *
 * @example
 * // For the valid date:
 * var result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the invalid date:
 * var result = isValid(new Date(''))
 * //=> false
 */
function isValid (dirtyDate) {
  if (isDate(dirtyDate)) {
    return !isNaN(dirtyDate)
  } else {
    throw new TypeError(toString.call(dirtyDate) + ' is not an instance of Date')
  }
}

module.exports = isValid


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(3)
var getDaysInMonth = __webpack_require__(24)

/**
 * @category Month Helpers
 * @summary Add the specified number of months to the given date.
 *
 * @description
 * Add the specified number of months to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of months to be added
 * @returns {Date} the new date with the months added
 *
 * @example
 * // Add 5 months to 1 September 2014:
 * var result = addMonths(new Date(2014, 8, 1), 5)
 * //=> Sun Feb 01 2015 00:00:00
 */
function addMonths (dirtyDate, dirtyAmount) {
  var date = parse(dirtyDate)
  var amount = Number(dirtyAmount)
  var desiredMonth = date.getMonth() + amount
  var dateWithDesiredMonth = new Date(0)
  dateWithDesiredMonth.setFullYear(date.getFullYear(), desiredMonth, 1)
  dateWithDesiredMonth.setHours(0, 0, 0, 0)
  var daysInMonth = getDaysInMonth(dateWithDesiredMonth)
  // Set the last day of the new month
  // if the original date was the last day of the longer month
  date.setMonth(desiredMonth, Math.min(daysInMonth, date.getDate()))
  return date
}

module.exports = addMonths


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = __webpack_require__(7);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'MdFocusTrap',
  abstract: true,
  methods: {
    setFocus: function setFocus() {
      var _this = this;

      window.setTimeout(function () {
        if (_this.$el.tagName) {
          _this.$el.setAttribute('tabindex', '-1');
          _this.$el.focus();
        }
      }, 20);
    }
  },
  mounted: function mounted() {
    this.setFocus();
  },
  render: function render() {
    try {
      var defaultSlot = this.$slots.default;

      if (!defaultSlot) {
        return null;
      }

      if (defaultSlot.length > 1) {
        throw new Error();
      }

      return defaultSlot[0];
    } catch (e) {
      _vue2.default.util.warn('MdFocusTrap can only render one, and exactly one child component.', this);
    }

    return null;
  }
};

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/components/MdEmptyState/MdEmptyState.vue
var MdEmptyState = __webpack_require__(238);
var MdEmptyState_default = /*#__PURE__*/__webpack_require__.n(MdEmptyState);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-d8a893a2","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/components/MdEmptyState/MdEmptyState.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { name: "md-empty-state", appear: "" } }, [
    _c(
      "div",
      {
        staticClass: "md-empty-state",
        class: [_vm.emptyStateClasses, _vm.$mdActiveTheme],
        style: _vm.emptyStateStyles
      },
      [
        _c(
          "div",
          { staticClass: "md-empty-state-container" },
          [
            _vm.mdIcon
              ? [
                  _vm.isAssetIcon(_vm.mdIcon)
                    ? _c("md-icon", {
                        staticClass: "md-empty-state-icon",
                        attrs: { "md-src": _vm.mdIcon }
                      })
                    : _c("md-icon", { staticClass: "md-empty-state-icon" }, [
                        _vm._v(_vm._s(_vm.mdIcon))
                      ])
                ]
              : _vm._e(),
            _vm._v(" "),
            _vm.mdLabel
              ? _c("strong", { staticClass: "md-empty-state-label" }, [
                  _vm._v(_vm._s(_vm.mdLabel))
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.mdDescription
              ? _c("p", { staticClass: "md-empty-state-description" }, [
                  _vm._v(_vm._s(_vm.mdDescription))
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm._t("default")
          ],
          2
        )
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var MdEmptyState_MdEmptyState = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-d8a893a2", esExports)
  }
}
// CONCATENATED MODULE: ./src/components/MdEmptyState/MdEmptyState.vue
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(237)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  MdEmptyState_default.a,
  MdEmptyState_MdEmptyState,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/MdEmptyState/MdEmptyState.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d8a893a2", Component.options)
  } else {
    hotAPI.reload("data-v-d8a893a2", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var components_MdEmptyState_MdEmptyState = __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  mdRounded: Boolean,
  mdSize: {
    type: Number,
    default: 420
  },
  mdIcon: String,
  mdLabel: String,
  mdDescription: String
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _material = __webpack_require__(1);

var _material2 = _interopRequireDefault(_material);

var _MdIcon = __webpack_require__(5);

var _MdIcon2 = _interopRequireDefault(_MdIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (Vue) {
  (0, _material2.default)(Vue);
  Vue.component(_MdIcon2.default.name, _MdIcon2.default);
};

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/components/MdMenu/MdMenu.vue
var MdMenu = __webpack_require__(247);
var MdMenu_default = /*#__PURE__*/__webpack_require__.n(MdMenu);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-577c0662","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/components/MdMenu/MdMenu.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    _vm._g({ staticClass: "md-menu" }, _vm.$listeners),
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var MdMenu_MdMenu = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-577c0662", esExports)
  }
}
// CONCATENATED MODULE: ./src/components/MdMenu/MdMenu.vue
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(246)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  MdMenu_default.a,
  MdMenu_MdMenu,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/MdMenu/MdMenu.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-577c0662", Component.options)
  } else {
    hotAPI.reload("data-v-577c0662", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var components_MdMenu_MdMenu = __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/components/MdMenu/MdMenuContent.vue
var MdMenuContent = __webpack_require__(249);
var MdMenuContent_default = /*#__PURE__*/__webpack_require__.n(MdMenuContent);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-2c16774c","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/components/MdMenu/MdMenuContent.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "md-popover",
    {
      attrs: {
        "md-settings": _vm.popperSettings,
        "md-active": _vm.shouldRender
      }
    },
    [
      _vm.shouldRender
        ? _c(
            "transition",
            { attrs: { name: "md-menu-content", css: _vm.didMount } },
            [
              _c(
                "div",
                {
                  class: [
                    _vm.menuClasses,
                    _vm.mdContentClass,
                    _vm.$mdActiveTheme
                  ],
                  style: _vm.menuStyles,
                  on: {
                    keydown: [
                      function($event) {
                        if (
                          !("button" in $event) &&
                          _vm._k(
                            $event.keyCode,
                            "arrow-down",
                            undefined,
                            $event.key
                          )
                        ) {
                          return null
                        }
                        $event.preventDefault()
                        _vm.setHighlight("down")
                      },
                      function($event) {
                        if (
                          !("button" in $event) &&
                          _vm._k(
                            $event.keyCode,
                            "arrow-up",
                            undefined,
                            $event.key
                          )
                        ) {
                          return null
                        }
                        $event.preventDefault()
                        _vm.setHighlight("up")
                      },
                      function($event) {
                        if (
                          !("button" in $event) &&
                          _vm._k($event.keyCode, "space", 32, $event.key)
                        ) {
                          return null
                        }
                        $event.preventDefault()
                        _vm.setSelection($event)
                      },
                      function($event) {
                        if (
                          !("button" in $event) &&
                          _vm._k($event.keyCode, "enter", 13, $event.key)
                        ) {
                          return null
                        }
                        $event.preventDefault()
                        _vm.setSelection($event)
                      }
                    ]
                  }
                },
                [
                  _c(
                    "div",
                    {
                      staticClass: "md-menu-content-container md-scrollbar",
                      class: _vm.$mdActiveTheme
                    },
                    [
                      _c(
                        "md-list",
                        _vm._b(
                          {
                            class: _vm.listClasses,
                            on: {
                              keydown: function($event) {
                                if (
                                  !("button" in $event) &&
                                  _vm._k($event.keyCode, "esc", 27, $event.key)
                                ) {
                                  return null
                                }
                                _vm.onEsc($event)
                              }
                            }
                          },
                          "md-list",
                          _vm.$attrs,
                          false
                        ),
                        [_vm._t("default")],
                        2
                      )
                    ],
                    1
                  )
                ]
              )
            ]
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var MdMenu_MdMenuContent = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2c16774c", esExports)
  }
}
// CONCATENATED MODULE: ./src/components/MdMenu/MdMenuContent.vue
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(248)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  MdMenuContent_default.a,
  MdMenu_MdMenuContent,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/MdMenu/MdMenuContent.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2c16774c", Component.options)
  } else {
    hotAPI.reload("data-v-2c16774c", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var components_MdMenu_MdMenuContent = __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (el, eventName, observerFn, options) {
  function killObserver() {
    el.removeEventListener(eventName, observerFn);
  }

  el.addEventListener(eventName, observerFn, options || false);

  return {
    destroy: killObserver
  };
};

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/components/MdList/MdList.vue
var MdList = __webpack_require__(252);
var MdList_default = /*#__PURE__*/__webpack_require__.n(MdList);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-16ed17ef","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/components/MdList/MdList.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "ul",
    _vm._g(
      _vm._b(
        { staticClass: "md-list", class: [_vm.$mdActiveTheme] },
        "ul",
        _vm.$attrs,
        false
      ),
      _vm.$listeners
    ),
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var MdList_MdList = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-16ed17ef", esExports)
  }
}
// CONCATENATED MODULE: ./src/components/MdList/MdList.vue
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(251)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  MdList_default.a,
  MdList_MdList,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/MdList/MdList.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-16ed17ef", Component.options)
  } else {
    hotAPI.reload("data-v-16ed17ef", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var components_MdList_MdList = __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_MdListItem_vue__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_MdListItem_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_MdListItem_vue__);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(277)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */
var __vue_template__ = null
/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_MdListItem_vue___default.a,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/MdList/MdListItem/MdListItem.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-cff46336", Component.options)
  } else {
    hotAPI.reload("data-v-cff46336", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ['click', 'dblclick', 'mousedown', 'mouseup'];

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/components/MdSteppers/MdStepHeader.vue
var MdStepHeader = __webpack_require__(331);
var MdStepHeader_default = /*#__PURE__*/__webpack_require__.n(MdStepHeader);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-43e95866","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/components/MdSteppers/MdStepHeader.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "md-button",
    _vm._g(
      _vm._b(
        {
          staticClass: "md-stepper-header",
          class: _vm.classes,
          attrs: { disabled: _vm.shouldDisable },
          nativeOn: {
            click: function($event) {
              _vm.MdSteppers.setActiveStep(_vm.index)
            }
          }
        },
        "md-button",
        _vm.data.props,
        false
      ),
      _vm.data.events
    ),
    [
      _vm.data.error
        ? _c("md-warning-icon", { staticClass: "md-stepper-icon" })
        : _c(
            "div",
            { staticClass: "md-stepper-number" },
            [
              _vm.data.done && _vm.data.editable
                ? _c("md-edit-icon", { staticClass: "md-stepper-editable" })
                : _vm.data.done
                  ? _c("md-check-icon", { staticClass: "md-stepper-done" })
                  : [_vm._v(_vm._s(_vm.MdSteppers.getStepperNumber(_vm.index)))]
            ],
            2
          ),
      _vm._v(" "),
      _c("div", { staticClass: "md-stepper-text" }, [
        _c("span", { staticClass: "md-stepper-label" }, [
          _vm._v(_vm._s(_vm.data.label))
        ]),
        _vm._v(" "),
        _vm.data.error
          ? _c("span", { staticClass: "md-stepper-error" }, [
              _vm._v(_vm._s(_vm.data.error))
            ])
          : _vm.data.description
            ? _c("span", { staticClass: "md-stepper-description" }, [
                _vm._v(_vm._s(_vm.data.description))
              ])
            : _vm._e()
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var MdSteppers_MdStepHeader = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-43e95866", esExports)
  }
}
// CONCATENATED MODULE: ./src/components/MdSteppers/MdStepHeader.vue
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  MdStepHeader_default.a,
  MdSteppers_MdStepHeader,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/MdSteppers/MdStepHeader.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-43e95866", Component.options)
  } else {
    hotAPI.reload("data-v-43e95866", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var components_MdSteppers_MdStepHeader = __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/components/MdTable/MdTableRow.vue
var MdTableRow = __webpack_require__(368);
var MdTableRow_default = /*#__PURE__*/__webpack_require__.n(MdTableRow);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-00a4496a","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/components/MdTable/MdTableRow.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "tr",
    {
      staticClass: "md-table-row",
      class: _vm.rowClasses,
      on: { click: _vm.onClick }
    },
    [
      _vm.selectableCount
        ? _c("md-table-cell-selection", {
            attrs: {
              "md-disabled": _vm.mdDisabled,
              "md-selectable": _vm.mdSelectable === "multiple",
              "md-row-id": _vm.mdIndex
            },
            model: {
              value: _vm.isSelected,
              callback: function($$v) {
                _vm.isSelected = $$v
              },
              expression: "isSelected"
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _vm._t("default")
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var MdTable_MdTableRow = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-00a4496a", esExports)
  }
}
// CONCATENATED MODULE: ./src/components/MdTable/MdTableRow.vue
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(367)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  MdTableRow_default.a,
  MdTable_MdTableRow,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/MdTable/MdTableRow.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-00a4496a", Component.options)
  } else {
    hotAPI.reload("data-v-00a4496a", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var components_MdTable_MdTableRow = __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/components/MdTable/MdTableCellSelection.vue
var MdTableCellSelection = __webpack_require__(370);
var MdTableCellSelection_default = /*#__PURE__*/__webpack_require__.n(MdTableCellSelection);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-50a4b70a","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/components/MdTable/MdTableCellSelection.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.mdSelectable
    ? _c("td", { staticClass: "md-table-cell md-table-cell-selection" }, [
        _c(
          "div",
          { staticClass: "md-table-cell-container" },
          [
            _c("md-checkbox", {
              attrs: { disabled: !_vm.mdSelectable || _vm.mdDisabled },
              on: { change: _vm.onChange },
              model: {
                value: _vm.isSelected,
                callback: function($$v) {
                  _vm.isSelected = $$v
                },
                expression: "isSelected"
              }
            })
          ],
          1
        )
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var MdTable_MdTableCellSelection = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-50a4b70a", esExports)
  }
}
// CONCATENATED MODULE: ./src/components/MdTable/MdTableCellSelection.vue
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(369)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  MdTableCellSelection_default.a,
  MdTable_MdTableCellSelection,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/MdTable/MdTableCellSelection.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-50a4b70a", Component.options)
  } else {
    hotAPI.reload("data-v-50a4b70a", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var components_MdTable_MdTableCellSelection = __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/components/MdToolbar/MdToolbar.vue
var MdToolbar = __webpack_require__(377);
var MdToolbar_default = /*#__PURE__*/__webpack_require__.n(MdToolbar);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-38a0b4d9","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/components/MdToolbar/MdToolbar.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "md-toolbar",
      class: [_vm.$mdActiveTheme, "md-elevation-" + _vm.mdElevation]
    },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var MdToolbar_MdToolbar = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-38a0b4d9", esExports)
  }
}
// CONCATENATED MODULE: ./src/components/MdToolbar/MdToolbar.vue
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(376)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  MdToolbar_default.a,
  MdToolbar_MdToolbar,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/MdToolbar/MdToolbar.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-38a0b4d9", Component.options)
  } else {
    hotAPI.reload("data-v-38a0b4d9", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var components_MdToolbar_MdToolbar = __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(55);

var _material = __webpack_require__(1);

var _material2 = _interopRequireDefault(_material);

var _components = __webpack_require__(57);

var MdComponents = _interopRequireWildcard(_components);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VueMaterial = function VueMaterial(Vue) {
  (0, _material2.default)(Vue);

  Object.values(MdComponents).forEach(function (MdComponent) {
    Vue.use(MdComponent);
  });
};

VueMaterial.version = '__VERSION__';

exports.default = VueMaterial;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    if (typeof global.process === "object" && global.process.domain) {
      invoke = global.process.domain.bind(invoke);
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // Among the various tricks for obtaining a reference to the global
  // object, this seems to be the most reliable technique that does not
  // use indirect eval (which violates Content Security Policy).
  typeof global === "object" ? global :
  typeof window === "object" ? window :
  typeof self === "object" ? self : this
);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(17)))

/***/ }),
/* 56 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MdTooltip = exports.MdToolbar = exports.MdTabs = exports.MdTable = exports.MdSwitch = exports.MdSubheader = exports.MdSteppers = exports.MdSpeedDial = exports.MdSnackbar = exports.MdRipple = exports.MdRadio = exports.MdProgress = exports.MdMenu = exports.MdList = exports.MdLayout = exports.MdImage = exports.MdIcon = exports.MdHighlightText = exports.MdField = exports.MdEmptyState = exports.MdElevation = exports.MdDrawer = exports.MdDivider = exports.MdDialogPrompt = exports.MdDialogConfirm = exports.MdDialogAlert = exports.MdDialog = exports.MdDatepicker = exports.MdContent = exports.MdChips = exports.MdCheckbox = exports.MdCard = exports.MdButton = exports.MdBottomBar = exports.MdAvatar = exports.MdAutocomplete = exports.MdApp = undefined;

var _MdApp = __webpack_require__(58);

var _MdApp2 = _interopRequireDefault(_MdApp);

var _MdAutocomplete = __webpack_require__(77);

var _MdAutocomplete2 = _interopRequireDefault(_MdAutocomplete);

var _MdAvatar = __webpack_require__(83);

var _MdAvatar2 = _interopRequireDefault(_MdAvatar);

var _MdBottomBar = __webpack_require__(87);

var _MdBottomBar2 = _interopRequireDefault(_MdBottomBar);

var _MdButton = __webpack_require__(95);

var _MdButton2 = _interopRequireDefault(_MdButton);

var _MdCard = __webpack_require__(101);

var _MdCard2 = _interopRequireDefault(_MdCard);

var _MdCheckbox = __webpack_require__(137);

var _MdCheckbox2 = _interopRequireDefault(_MdCheckbox);

var _MdChips = __webpack_require__(141);

var _MdChips2 = _interopRequireDefault(_MdChips);

var _MdContent = __webpack_require__(161);

var _MdContent2 = _interopRequireDefault(_MdContent);

var _MdDatepicker = __webpack_require__(163);

var _MdDatepicker2 = _interopRequireDefault(_MdDatepicker);

var _MdDialog = __webpack_require__(207);

var _MdDialog2 = _interopRequireDefault(_MdDialog);

var _MdDialogAlert = __webpack_require__(217);

var _MdDialogAlert2 = _interopRequireDefault(_MdDialogAlert);

var _MdDialogConfirm = __webpack_require__(220);

var _MdDialogConfirm2 = _interopRequireDefault(_MdDialogConfirm);

var _MdDialogPrompt = __webpack_require__(223);

var _MdDialogPrompt2 = _interopRequireDefault(_MdDialogPrompt);

var _MdDivider = __webpack_require__(226);

var _MdDivider2 = _interopRequireDefault(_MdDivider);

var _MdDrawer = __webpack_require__(230);

var _MdDrawer2 = _interopRequireDefault(_MdDrawer);

var _MdElevation = __webpack_require__(234);

var _MdElevation2 = _interopRequireDefault(_MdElevation);

var _MdEmptyState = __webpack_require__(236);

var _MdEmptyState2 = _interopRequireDefault(_MdEmptyState);

var _MdField = __webpack_require__(239);

var _MdField2 = _interopRequireDefault(_MdField);

var _MdHighlightText = __webpack_require__(266);

var _MdHighlightText2 = _interopRequireDefault(_MdHighlightText);

var _MdIcon = __webpack_require__(43);

var _MdIcon2 = _interopRequireDefault(_MdIcon);

var _MdImage = __webpack_require__(270);

var _MdImage2 = _interopRequireDefault(_MdImage);

var _MdLayout = __webpack_require__(274);

var _MdLayout2 = _interopRequireDefault(_MdLayout);

var _MdList = __webpack_require__(276);

var _MdList2 = _interopRequireDefault(_MdList);

var _MdMenu = __webpack_require__(294);

var _MdMenu2 = _interopRequireDefault(_MdMenu);

var _MdProgress = __webpack_require__(297);

var _MdProgress2 = _interopRequireDefault(_MdProgress);

var _MdRadio = __webpack_require__(305);

var _MdRadio2 = _interopRequireDefault(_MdRadio);

var _MdRipple = __webpack_require__(309);

var _MdRipple2 = _interopRequireDefault(_MdRipple);

var _MdSnackbar = __webpack_require__(310);

var _MdSnackbar2 = _interopRequireDefault(_MdSnackbar);

var _MdSpeedDial = __webpack_require__(317);

var _MdSpeedDial2 = _interopRequireDefault(_MdSpeedDial);

var _MdSteppers = __webpack_require__(327);

var _MdSteppers2 = _interopRequireDefault(_MdSteppers);

var _MdSubheader = __webpack_require__(341);

var _MdSubheader2 = _interopRequireDefault(_MdSubheader);

var _MdSwitch = __webpack_require__(345);

var _MdSwitch2 = _interopRequireDefault(_MdSwitch);

var _MdTable = __webpack_require__(349);

var _MdTable2 = _interopRequireDefault(_MdTable);

var _MdTabs = __webpack_require__(387);

var _MdTabs2 = _interopRequireDefault(_MdTabs);

var _MdToolbar = __webpack_require__(393);

var _MdToolbar2 = _interopRequireDefault(_MdToolbar);

var _MdTooltip = __webpack_require__(394);

var _MdTooltip2 = _interopRequireDefault(_MdTooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.MdApp = _MdApp2.default;
exports.MdAutocomplete = _MdAutocomplete2.default;
exports.MdAvatar = _MdAvatar2.default;
exports.MdBottomBar = _MdBottomBar2.default;
exports.MdButton = _MdButton2.default;
exports.MdCard = _MdCard2.default;
exports.MdCheckbox = _MdCheckbox2.default;
exports.MdChips = _MdChips2.default;
exports.MdContent = _MdContent2.default;
exports.MdDatepicker = _MdDatepicker2.default;
exports.MdDialog = _MdDialog2.default;
exports.MdDialogAlert = _MdDialogAlert2.default;
exports.MdDialogConfirm = _MdDialogConfirm2.default;
exports.MdDialogPrompt = _MdDialogPrompt2.default;
exports.MdDivider = _MdDivider2.default;
exports.MdDrawer = _MdDrawer2.default;
exports.MdElevation = _MdElevation2.default;
exports.MdEmptyState = _MdEmptyState2.default;
exports.MdField = _MdField2.default;
exports.MdHighlightText = _MdHighlightText2.default;
exports.MdIcon = _MdIcon2.default;
exports.MdImage = _MdImage2.default;
exports.MdLayout = _MdLayout2.default;
exports.MdList = _MdList2.default;
exports.MdMenu = _MdMenu2.default;
exports.MdProgress = _MdProgress2.default;
exports.MdRadio = _MdRadio2.default;
exports.MdRipple = _MdRipple2.default;
exports.MdSnackbar = _MdSnackbar2.default;
exports.MdSpeedDial = _MdSpeedDial2.default;
exports.MdSteppers = _MdSteppers2.default;
exports.MdSubheader = _MdSubheader2.default;
exports.MdSwitch = _MdSwitch2.default;
exports.MdTable = _MdTable2.default;
exports.MdTabs = _MdTabs2.default;
exports.MdToolbar = _MdToolbar2.default;
exports.MdTooltip = _MdTooltip2.default;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _material = __webpack_require__(1);

var _material2 = _interopRequireDefault(_material);

var _MdApp = __webpack_require__(59);

var _MdApp2 = _interopRequireDefault(_MdApp);

var _MdAppToolbar = __webpack_require__(69);

var _MdAppToolbar2 = _interopRequireDefault(_MdAppToolbar);

var _MdAppContent = __webpack_require__(72);

var _MdAppContent2 = _interopRequireDefault(_MdAppContent);

var _MdAppDrawer = __webpack_require__(75);

var _MdAppDrawer2 = _interopRequireDefault(_MdAppDrawer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (Vue) {
  (0, _material2.default)(Vue);
  Vue.component(_MdApp2.default.name, _MdApp2.default);
  Vue.component(_MdAppToolbar2.default.name, _MdAppToolbar2.default);
  Vue.component(_MdAppContent2.default.name, _MdAppContent2.default);
  Vue.component(_MdAppDrawer2.default.name, _MdAppDrawer2.default);
};

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_MdApp_vue__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_MdApp_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_MdApp_vue__);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(60)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */
var __vue_template__ = null
/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_MdApp_vue___default.a,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/MdApp/MdApp.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8b7389b6", Component.options)
  } else {
    hotAPI.reload("data-v-8b7389b6", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 60 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MdAppSideDrawer = __webpack_require__(62);

var _MdAppSideDrawer2 = _interopRequireDefault(_MdAppSideDrawer);

var _MdAppInternalDrawer = __webpack_require__(66);

var _MdAppInternalDrawer2 = _interopRequireDefault(_MdAppInternalDrawer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var componentTypes = ['md-app-toolbar', 'md-app-drawer', 'md-app-content'];

function buildSlots(children, context, functionalContext, options) {
  var slots = [];

  if (children) {
    children.forEach(function (child) {
      var opts = child.componentOptions;

      if (opts && componentTypes.includes(opts.tag)) {
        child.data.slot = opts.tag;
        child.data.provide = options.Ctor.options.provide;
        child.context = context;
        child.functionalContext = functionalContext;

        slots.push(child);
      }
    });
  }

  return slots;
}

function getDrawers(children) {
  var drawerVnodes = children.filter(function (child) {
    return child.componentOptions.tag === 'md-app-drawer';
  });

  return drawerVnodes.length ? drawerVnodes : [];
}

function hasInternalDrawer(attrs) {
  var mdPermanent = attrs && attrs['md-permanent'];

  return mdPermanent && (mdPermanent === 'clipped' || mdPermanent === 'card');
}

exports.default = {
  name: 'MdApp',
  functional: true,
  render: function render(createElement, _ref) {
    var children = _ref.children,
        props = _ref.props;

    var appComponent = _MdAppSideDrawer2.default;

    var _createElement = createElement(appComponent),
        context = _createElement.context,
        functionalContext = _createElement.functionalContext,
        componentOptions = _createElement.componentOptions;

    var slots = buildSlots(children, context, functionalContext, componentOptions);
    var drawers = getDrawers(slots);

    drawers.forEach(function (drawer) {
      if (drawer && hasInternalDrawer(drawer.data.attrs)) {
        appComponent = _MdAppInternalDrawer2.default;
      }
    });

    return createElement(appComponent, {
      attrs: props
    }, slots);
  }
};

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/components/MdApp/MdAppSideDrawer.vue
var MdAppSideDrawer = __webpack_require__(63);
var MdAppSideDrawer_default = /*#__PURE__*/__webpack_require__.n(MdAppSideDrawer);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-2aaa67a6","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/components/MdApp/MdAppSideDrawer.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "md-app md-app-side-drawer md-layout-row",
      class: _vm.appClasses
    },
    [
      _vm._t("md-app-drawer"),
      _vm._v(" "),
      _c(
        "main",
        {
          staticClass: "md-app-container md-flex md-layout-column",
          class: [_vm.$mdActiveTheme, _vm.scrollerClasses],
          style: _vm.contentStyles,
          on: {
            "&scroll": function($event) {
              _vm.handleScroll($event)
            }
          }
        },
        [
          _vm._t("md-app-toolbar"),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "md-app-scroller md-layout-column md-flex",
              class: [_vm.$mdActiveTheme, _vm.scrollerClasses],
              style: _vm.containerStyles,
              on: {
                "&scroll": function($event) {
                  _vm.handleScroll($event)
                }
              }
            },
            [_vm._t("md-app-content")],
            2
          )
        ],
        2
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var MdApp_MdAppSideDrawer = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2aaa67a6", esExports)
  }
}
// CONCATENATED MODULE: ./src/components/MdApp/MdAppSideDrawer.vue
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  MdAppSideDrawer_default.a,
  MdApp_MdAppSideDrawer,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/MdApp/MdAppSideDrawer.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2aaa67a6", Component.options)
  } else {
    hotAPI.reload("data-v-2aaa67a6", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var components_MdApp_MdAppSideDrawer = __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MdComponent = __webpack_require__(2);

var _MdComponent2 = _interopRequireDefault(_MdComponent);

var _MdAppMixin = __webpack_require__(31);

var _MdAppMixin2 = _interopRequireDefault(_MdAppMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = new _MdComponent2.default({
  name: 'MdAppInternalSideDrawer',
  mixins: [_MdAppMixin2.default]
});

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Generated by CoffeeScript 1.12.2
(function() {
  var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;

  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
    module.exports = function() {
      return performance.now();
    };
  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
    module.exports = function() {
      return (getNanoSeconds() - nodeLoadTime) / 1e6;
    };
    hrtime = process.hrtime;
    getNanoSeconds = function() {
      var hr;
      hr = hrtime();
      return hr[0] * 1e9 + hr[1];
    };
    moduleLoadTime = getNanoSeconds();
    upTime = process.uptime() * 1e9;
    nodeLoadTime = moduleLoadTime - upTime;
  } else if (Date.now) {
    module.exports = function() {
      return Date.now() - loadTime;
    };
    loadTime = Date.now();
  } else {
    module.exports = function() {
      return new Date().getTime() - loadTime;
    };
    loadTime = new Date().getTime();
  }

}).call(this);

//# sourceMappingURL=performance-now.js.map

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(65)))

/***/ }),
/* 65 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/components/MdApp/MdAppInternalDrawer.vue
var MdAppInternalDrawer = __webpack_require__(68);
var MdAppInternalDrawer_default = /*#__PURE__*/__webpack_require__.n(MdAppInternalDrawer);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-f33ea0da","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/components/MdApp/MdAppInternalDrawer.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "md-app md-app-internal-drawer md-layout-column",
      class: _vm.appClasses
    },
    [
      _vm._t("md-app-toolbar"),
      _vm._v(" "),
      _c(
        "main",
        {
          staticClass: "md-app-container md-flex md-layout-row",
          class: [_vm.$mdActiveTheme, _vm.scrollerClasses],
          style: [_vm.containerStyles, _vm.contentStyles]
        },
        [
          _vm._t("md-app-drawer"),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "md-app-scroller md-layout-column md-flex",
              class: [_vm.$mdActiveTheme, _vm.scrollerClasses]
            },
            [_vm._t("md-app-content")],
            2
          )
        ],
        2
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var MdApp_MdAppInternalDrawer = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-f33ea0da", esExports)
  }
}
// CONCATENATED MODULE: ./src/components/MdApp/MdAppInternalDrawer.vue
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(67)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  MdAppInternalDrawer_default.a,
  MdApp_MdAppInternalDrawer,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/MdApp/MdAppInternalDrawer.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f33ea0da", Component.options)
  } else {
    hotAPI.reload("data-v-f33ea0da", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var components_MdApp_MdAppInternalDrawer = __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 67 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MdComponent = __webpack_require__(2);

var _MdComponent2 = _interopRequireDefault(_MdComponent);

var _MdAppMixin = __webpack_require__(31);

var _MdAppMixin2 = _interopRequireDefault(_MdAppMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = new _MdComponent2.default({
  name: 'MdAppInternalDrawer',
  mixins: [_MdAppMixin2.default]
});

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/components/MdApp/MdAppToolbar.vue
var MdAppToolbar = __webpack_require__(71);
var MdAppToolbar_default = /*#__PURE__*/__webpack_require__.n(MdAppToolbar);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-2d3e4174","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/components/MdApp/MdAppToolbar.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "md-toolbar",
    _vm._g(
      _vm._b(
        {
          staticClass: "md-app-toolbar",
          class: _vm.toolbarClasses,
          style: _vm.toolbarStyles
        },
        "md-toolbar",
        _vm.$attrs,
        false
      ),
      _vm.$listeners
    ),
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var MdApp_MdAppToolbar = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2d3e4174", esExports)
  }
}
// CONCATENATED MODULE: ./src/components/MdApp/MdAppToolbar.vue
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(70)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  MdAppToolbar_default.a,
  MdApp_MdAppToolbar,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/MdApp/MdAppToolbar.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2d3e4174", Component.options)
  } else {
    hotAPI.reload("data-v-2d3e4174", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var components_MdApp_MdAppToolbar = __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 70 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//

exports.default = {
  name: 'MdAppToolbar',
  inject: ['MdApp'],
  computed: {
    toolbarClasses: function toolbarClasses() {
      return {
        'md-no-elevation': !this.MdApp.toolbar.hasElevation,
        'md-reveal-active': this.MdApp.toolbar.revealActive,
        'md-fixed-last-active': this.MdApp.toolbar.fixedLastActive,
        'md-overlap-off': this.MdApp.toolbar.overlapOff
      };
    },
    toolbarStyles: function toolbarStyles() {
      var styles = {
        'top': this.MdApp.toolbar.top + 'px'
      };

      if (this.MdApp.toolbar.fixedLastActive) {
        styles['transform'] = 'translate3D(0, ' + this.MdApp.toolbar.fixedLastHeight + 'px, 0)';
      }

      return styles;
    }
  },
  mounted: function mounted() {
    var title = this.$el.querySelector('.md-title, .md-display-1, .md-display-2');

    this.MdApp.toolbar.element = this.$el;
    this.MdApp.toolbar.titleElement = title;

    if (title) {
      this.MdApp.toolbar.titleSize = parseInt(window.getComputedStyle(title).fontSize, 10);
    }
  }
};

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/components/MdApp/MdAppContent.vue
var MdAppContent = __webpack_require__(74);
var MdAppContent_default = /*#__PURE__*/__webpack_require__.n(MdAppContent);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-65f3d944","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/components/MdApp/MdAppContent.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.showCard
    ? _c(
        "md-card",
        _vm._g(
          _vm._b(
            { staticClass: "md-app-content md-flex" },
            "md-card",
            _vm.$attrs,
            false
          ),
          _vm.$listeners
        ),
        [_vm._t("default")],
        2
      )
    : _c(
        "md-content",
        _vm._g(
          _vm._b(
            { staticClass: "md-app-content md-flex" },
            "md-content",
            _vm.$attrs,
            false
          ),
          _vm.$listeners
        ),
        [_vm._t("default")],
        2
      )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var MdApp_MdAppContent = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-65f3d944", esExports)
  }
}
// CONCATENATED MODULE: ./src/components/MdApp/MdAppContent.vue
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(73)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  MdAppContent_default.a,
  MdApp_MdAppContent,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/MdApp/MdAppContent.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-65f3d944", Component.options)
  } else {
    hotAPI.reload("data-v-65f3d944", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var components_MdApp_MdAppContent = __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 73 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//

exports.default = {
  name: 'MdAppContent',
  inject: ['MdApp'],
  computed: {
    showCard: function showCard() {
      return this.MdApp.options && this.MdApp.options.mode === 'overlap';
    }
  }
};

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/components/MdApp/MdAppDrawer.vue
var MdAppDrawer = __webpack_require__(76);
var MdAppDrawer_default = /*#__PURE__*/__webpack_require__.n(MdAppDrawer);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-1d41d1f6","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/components/MdApp/MdAppDrawer.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "md-drawer",
    _vm._g(
      _vm._b({ staticClass: "md-app-drawer" }, "md-drawer", _vm.$attrs, false),
      _vm.$listeners
    ),
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var MdApp_MdAppDrawer = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1d41d1f6", esExports)
  }
}
// CONCATENATED MODULE: ./src/components/MdApp/MdAppDrawer.vue
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  MdAppDrawer_default.a,
  MdApp_MdAppDrawer,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/MdApp/MdAppDrawer.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1d41d1f6", Component.options)
  } else {
    hotAPI.reload("data-v-1d41d1f6", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var components_MdApp_MdAppDrawer = __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

//
//
//
//
//
//

exports.default = {
  name: 'MdAppDrawer',
  inject: ['MdApp'],
  data: function data() {
    return {
      drawerElement: {
        mdActive: null,
        mode: null,
        submode: null
      }
    };
  },
  computed: {
    visible: function visible() {
      return this.drawerElement.mdActive;
    },
    mode: function mode() {
      return this.drawerElement.mode;
    },
    submode: function submode() {
      return this.drawerElement.submode;
    }
  },
  watch: {
    visible: function visible(_visible) {
      this.MdApp.drawer.width = this.getDrawerWidth();
      this.MdApp.drawer.active = _visible;
    },
    mode: function mode(_mode) {
      this.MdApp.drawer.mode = _mode;
    },
    submode: function submode(_submode) {
      this.MdApp.drawer.submode = _submode;
    }
  },
  methods: {
    getDrawerWidth: function getDrawerWidth() {
      if (this.$el) {
        return window.getComputedStyle(this.$el).width;
      }

      return 0;
    }
  },
  mounted: function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.$nextTick();

            case 2:
              this.drawerElement = this.$children[0];
              this.MdApp.drawer.width = this.getDrawerWidth();
              this.MdApp.drawer.active = this.visible;
              this.MdApp.drawer.mode = this.mode;
              this.MdApp.drawer.submode = this.submode;
              this.MdApp.drawer.initialWidth = this.$el.offsetWidth;

            case 8:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function mounted() {
      return _ref.apply(this, arguments);
    }

    return mounted;
  }()
};

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _material = __webpack_require__(1);

var _material2 = _interopRequireDefault(_material);

var _MdAutocomplete = __webpack_require__(78);

var _MdAutocomplete2 = _interopRequireDefault(_MdAutocomplete);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (Vue) {
  (0, _material2.default)(Vue);
  Vue.component(_MdAutocomplete2.default.name, _MdAutocomplete2.default);
};

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/components/MdAutocomplete/MdAutocomplete.vue
var MdAutocomplete = __webpack_require__(80);
var MdAutocomplete_default = /*#__PURE__*/__webpack_require__.n(MdAutocomplete);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-130e5ea2","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/components/MdAutocomplete/MdAutocomplete.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "md-field",
    {
      staticClass: "md-autocomplete",
      class: _vm.fieldClasses,
      attrs: { "md-clearable": "", "md-inline": _vm.isBoxLayout }
    },
    [
      _c(
        "md-menu",
        {
          attrs: {
            "md-direction": "bottom-start",
            "md-dense": _vm.mdDense,
            "md-align-trigger": "",
            "md-full-width": "",
            "md-active": _vm.showMenu
          },
          on: {
            "update:mdActive": function($event) {
              _vm.showMenu = $event
            }
          }
        },
        [
          _c(
            "md-input",
            _vm._b(
              {
                attrs: {
                  id: _vm.mdInputId,
                  name: _vm.mdInputName,
                  maxlength: _vm.mdInputMaxlength,
                  placeholder: _vm.mdInputPlaceholder
                },
                on: {
                  focus: function($event) {
                    $event.stopPropagation()
                    _vm.openOnFocus($event)
                  },
                  blur: _vm.hideOptions,
                  input: _vm.onInput,
                  click: function($event) {
                    $event.stopPropagation()
                    $event.preventDefault()
                    _vm.openOnFocus($event)
                  }
                },
                model: {
                  value: _vm.searchTerm,
                  callback: function($$v) {
                    _vm.searchTerm = $$v
                  },
                  expression: "searchTerm"
                }
              },
              "md-input",
              _vm.$attrs,
              false
            )
          ),
          _vm._v(" "),
          _c(
            "md-menu-content",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.hasScopedEmptySlot || _vm.hasFilteredItems,
                  expression: "hasScopedEmptySlot || hasFilteredItems"
                }
              ],
              class: _vm.contentClasses
            },
            [
              _vm.isPromisePending
                ? _c(
                    "div",
                    { staticClass: "md-autocomplete-loading" },
                    [
                      _c("md-progress-spinner", {
                        attrs: {
                          "md-diameter": 40,
                          "md-stroke": 4,
                          "md-mode": "indeterminate"
                        }
                      })
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.hasFilteredItems
                ? _c(
                    "div",
                    { staticClass: "md-autocomplete-items" },
                    _vm._l(_vm.getOptions(), function(item, index) {
                      return _c(
                        "md-menu-item",
                        {
                          key: index,
                          on: {
                            click: function($event) {
                              _vm.selectItem(item, $event)
                            }
                          }
                        },
                        [
                          _vm.$scopedSlots["md-autocomplete-item"]
                            ? _vm._t("md-autocomplete-item", null, {
                                item: item,
                                term: _vm.searchTerm
                              })
                            : [_vm._v(_vm._s(item))]
                        ],
                        2
                      )
                    })
                  )
                : _vm.hasScopedEmptySlot
                  ? _c("md-menu-item", [
                      _c(
                        "div",
                        { staticClass: "md-autocomplete-empty" },
                        [
                          _vm._t("md-autocomplete-empty", null, {
                            term: _vm.searchTerm
                          })
                        ],
                        2
                      )
                    ])
                  : _vm._e()
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _vm._t("default")
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var MdAutocomplete_MdAutocomplete = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-130e5ea2", esExports)
  }
}
// CONCATENATED MODULE: ./src/components/MdAutocomplete/MdAutocomplete.vue
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(79)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  MdAutocomplete_default.a,
  MdAutocomplete_MdAutocomplete,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/MdAutocomplete/MdAutocomplete.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-130e5ea2", Component.options)
  } else {
    hotAPI.reload("data-v-130e5ea2", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var components_MdAutocomplete_MdAutocomplete = __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 79 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var _fuzzysearch = __webpack_require__(81);

var _fuzzysearch2 = _interopRequireDefault(_fuzzysearch);

var _isPromise2 = __webpack_require__(82);

var _isPromise3 = _interopRequireDefault(_isPromise2);

var _MdPropValidator = __webpack_require__(4);

var _MdPropValidator2 = _interopRequireDefault(_MdPropValidator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = {
  name: 'MdAutocomplete',
  props: {
    value: {
      type: null,
      required: true
    },
    mdDense: Boolean,
    mdLayout: _extends({
      type: String,
      default: 'floating'
    }, (0, _MdPropValidator2.default)('md-layout', ['floating', 'box'])),
    mdOpenOnFocus: {
      type: Boolean,
      default: true
    },
    mdFuzzySearch: {
      type: Boolean,
      default: true
    },
    mdOptions: {
      type: [Array, Promise],
      required: true
    },
    mdInputName: String,
    mdInputId: String,
    mdInputMaxlength: [String, Number],
    mdInputPlaceholder: [String, Number]
  },
  data: function data() {
    return {
      searchTerm: this.value,
      showMenu: false,
      triggerPopover: false,
      isPromisePending: false,
      filteredAsyncOptions: []
    };
  },

  computed: {
    isBoxLayout: function isBoxLayout() {
      return this.mdLayout === 'box';
    },
    fieldClasses: function fieldClasses() {
      if (this.isBoxLayout) {
        return 'md-autocomplete-box';
      }
    },
    contentClasses: function contentClasses() {
      if (this.isBoxLayout) {
        return 'md-autocomplete-box-content';
      }
    },
    filteredStaticOptions: function filteredStaticOptions() {
      if (this.isPromise(this.mdOptions)) {
        return false;
      }

      var firstItem = this.mdOptions[0];

      if (this.mdOptions[0] && this.searchTerm) {
        if (typeof firstItem === 'string') {
          return this.filterByString();
        } else if ((typeof firstItem === 'undefined' ? 'undefined' : _typeof(firstItem)) === 'object') {
          return this.filterByObject();
        }
      }

      return this.mdOptions;
    },
    hasFilteredItems: function hasFilteredItems() {
      return this.filteredStaticOptions.length > 0 || this.filteredAsyncOptions.length > 0;
    },
    hasScopedEmptySlot: function hasScopedEmptySlot() {
      return this.$scopedSlots['md-autocomplete-empty'];
    }
  },
  watch: {
    mdOptions: {
      deep: true,
      immediate: true,
      handler: function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!this.isPromise(this.mdOptions)) {
                    _context.next = 6;
                    break;
                  }

                  this.isPromisePending = true;
                  _context.next = 4;
                  return this.mdOptions;

                case 4:
                  this.filteredAsyncOptions = _context.sent;

                  this.isPromisePending = false;

                case 6:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function handler() {
          return _ref.apply(this, arguments);
        }

        return handler;
      }()
    },

    value: function value(val) {
      this.searchTerm = val;
    }
  },
  methods: {
    getOptions: function getOptions() {
      if (this.isPromise(this.mdOptions)) {
        return this.filteredAsyncOptions;
      }

      return this.filteredStaticOptions;
    },
    isPromise: function isPromise(obj) {
      return (0, _isPromise3.default)(obj);
    },
    matchText: function matchText(item) {
      var target = item.toLowerCase();
      var search = this.searchTerm.toLowerCase();

      if (this.mdFuzzySearch) {
        return (0, _fuzzysearch2.default)(search, target);
      }

      return target.includes(search);
    },
    filterByString: function filterByString() {
      var _this = this;

      return this.mdOptions.filter(function (item) {
        return _this.matchText(item);
      });
    },
    filterByObject: function filterByObject() {
      var _this2 = this;

      return this.mdOptions.filter(function (item) {
        var values = Object.values(item);
        var valuesCount = values.length;

        for (var i = 0; i <= valuesCount; i++) {
          if (typeof values[i] === 'string' && _this2.matchText(values[i])) {
            return true;
          }
        }
      });
    },
    openOnFocus: function openOnFocus() {
      if (this.mdOpenOnFocus) {
        this.showOptions();
      }
    },
    onInput: function onInput() {
      if (!this.mdOpenOnFocus) {
        this.showOptions();
      }

      if (this.searchTerm.constructor.name.toLowerCase() !== 'inputevent') {
        this.$emit('md-changed', this.searchTerm);
      }
    },
    showOptions: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.showMenu = true;
                _context2.next = 3;
                return this.$nextTick();

              case 3:
                this.triggerPopover = true;
                this.$emit('md-opened');

              case 5:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function showOptions() {
        return _ref2.apply(this, arguments);
      }

      return showOptions;
    }(),
    hideOptions: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.$nextTick();

              case 2:
                this.showMenu = false;
                _context3.next = 5;
                return this.$nextTick();

              case 5:
                this.triggerPopover = false;
                this.$emit('md-closed');

              case 7:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function hideOptions() {
        return _ref3.apply(this, arguments);
      }

      return hideOptions;
    }(),
    selectItem: function selectItem(item, $event) {
      var content = $event.target.textContent.trim();

      this.searchTerm = content;
      this.$emit('input', item);
      this.$emit('md-selected', item);
      this.hideOptions();
    }
  }
};

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function fuzzysearch (needle, haystack) {
  var tlen = haystack.length;
  var qlen = needle.length;
  if (qlen > tlen) {
    return false;
  }
  if (qlen === tlen) {
    return needle === haystack;
  }
  outer: for (var i = 0, j = 0; i < qlen; i++) {
    var nch = needle.charCodeAt(i);
    while (j < tlen) {
      if (haystack.charCodeAt(j++) === nch) {
        continue outer;
      }
    }
    return false;
  }
  return true;
}

module.exports = fuzzysearch;


/***/ }),
/* 82 */
/***/ (function(module, exports) {

module.exports = isPromise;

function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _material = __webpack_require__(1);

var _material2 = _interopRequireDefault(_material);

var _MdAvatar = __webpack_require__(84);

var _MdAvatar2 = _interopRequireDefault(_MdAvatar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (Vue) {
  (0, _material2.default)(Vue);
  Vue.component(_MdAvatar2.default.name, _MdAvatar2.default);
};

/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/components/MdAvatar/MdAvatar.vue
var MdAvatar = __webpack_require__(86);
var MdAvatar_default = /*#__PURE__*/__webpack_require__.n(MdAvatar);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-2bc61fcf","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/components/MdAvatar/MdAvatar.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "md-avatar", class: [_vm.$mdActiveTheme] },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var MdAvatar_MdAvatar = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2bc61fcf", esExports)
  }
}
// CONCATENATED MODULE: ./src/components/MdAvatar/MdAvatar.vue
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(85)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  MdAvatar_default.a,
  MdAvatar_MdAvatar,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/MdAvatar/MdAvatar.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2bc61fcf", Component.options)
  } else {
    hotAPI.reload("data-v-2bc61fcf", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var components_MdAvatar_MdAvatar = __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 85 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MdComponent = __webpack_require__(2);

var _MdComponent2 = _interopRequireDefault(_MdComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _MdComponent2.default({
  name: 'MdAvatar'
}); //
//
//
//
//
//

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _material = __webpack_require__(1);

var _material2 = _interopRequireDefault(_material);

var _MdBottomBar = __webpack_require__(88);

var _MdBottomBar2 = _interopRequireDefault(_MdBottomBar);

var _MdBottomBarItem = __webpack_require__(93);

var _MdBottomBarItem2 = _interopRequireDefault(_MdBottomBarItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (Vue) {
  (0, _material2.default)(Vue);
  Vue.component(_MdBottomBar2.default.name, _MdBottomBar2.default);
  Vue.component(_MdBottomBarItem2.default.name, _MdBottomBarItem2.default);
};

/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/components/MdBottomBar/MdBottomBar.vue
var MdBottomBar = __webpack_require__(90);
var MdBottomBar_default = /*#__PURE__*/__webpack_require__.n(MdBottomBar);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-0fac6773","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/components/MdBottomBar/MdBottomBar.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "md-bottom-bar",
      class: [_vm.$mdActiveTheme, _vm.barClasses]
    },
    [
      _c(
        "md-ripple",
        {
          attrs: {
            "md-disabled": _vm.mdType === "fixed",
            "md-active": _vm.MdBottomBar.mouseEvent
          }
        },
        [_vm._t("default")],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var MdBottomBar_MdBottomBar = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0fac6773", esExports)
  }
}
// CONCATENATED MODULE: ./src/components/MdBottomBar/MdBottomBar.vue
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(89)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  MdBottomBar_default.a,
  MdBottomBar_MdBottomBar,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/MdBottomBar/MdBottomBar.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0fac6773", Component.options)
  } else {
    hotAPI.reload("data-v-0fac6773", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var components_MdBottomBar_MdBottomBar = __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 89 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //
//
//
//
//
//
//
//

var _MdComponent = __webpack_require__(2);

var _MdComponent2 = _interopRequireDefault(_MdComponent);

var _MdPropValidator = __webpack_require__(4);

var _MdPropValidator2 = _interopRequireDefault(_MdPropValidator);

var _MdRipple = __webpack_require__(8);

var _MdRipple2 = _interopRequireDefault(_MdRipple);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = new _MdComponent2.default({
  name: 'MdBottomBar',
  components: {
    MdRipple: _MdRipple2.default
  },
  props: {
    mdSyncRoute: Boolean,
    mdActiveItem: [String, Number],
    mdType: _extends({
      type: String,
      default: 'fixed'
    }, (0, _MdPropValidator2.default)('md-type', ['fixed', 'shift']))
  },
  data: function data() {
    return {
      MdBottomBar: {
        mouseEvent: null,
        activeItem: null,
        items: {}
      }
    };
  },
  provide: function provide() {
    return {
      MdBottomBar: this.MdBottomBar
    };
  },

  computed: {
    activeItem: function activeItem() {
      return this.MdBottomBar.activeItem;
    },
    barClasses: function barClasses() {
      return _defineProperty({}, 'md-type-' + this.mdType, true);
    }
  },
  watch: {
    activeItem: function activeItem() {
      this.$emit('md-changed', this.activeItem);
    }
  },
  methods: {
    setupWatchers: function setupWatchers() {
      if (this.mdSyncRoute) {
        this.$watch('$route', {
          deep: true,
          handler: function handler() {
            if (this.mdSyncRoute) {
              this.setActiveItemByRoute();
            }
          }
        });
      }
    },
    hasActiveItem: function hasActiveItem() {
      return this.MdBottomBar.activeItem || this.mdActiveItem;
    },
    getItemsAndKeys: function getItemsAndKeys() {
      var items = this.MdBottomBar.items;

      return {
        items: items,
        keys: Object.keys(items)
      };
    },
    setActiveItemByIndex: function setActiveItemByIndex(index) {
      var _getItemsAndKeys = this.getItemsAndKeys(),
          keys = _getItemsAndKeys.keys;

      if (!this.mdActiveItem) {
        this.MdBottomBar.activeItem = keys[index];
      } else {
        this.MdBottomBar.activeItem = this.mdActiveItem;
      }
    },
    setActiveItemByRoute: function setActiveItemByRoute() {
      var _this = this;

      var _getItemsAndKeys2 = this.getItemsAndKeys(),
          items = _getItemsAndKeys2.items,
          keys = _getItemsAndKeys2.keys;

      var tabIndex = null;

      if (this.$router) {
        keys.forEach(function (key, index) {
          var item = items[key];
          var toProp = item.props.to;

          if (toProp && toProp === _this.$route.path) {
            tabIndex = index;
          }
        });
      }

      if (!this.hasActiveItem()) {
        if (keys[tabIndex]) {
          this.MdBottomBar.activeItem = keys[tabIndex];
        } else {
          this.MdBottomBar.activeItem = keys[0];
        }
      } else if (keys[tabIndex]) {
        this.MdBottomBar.activeItem = keys[tabIndex];
      }
    }
  },
  created: function created() {
    this.MdBottomBar.type = this.mdType;
  },
  mounted: function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var _this2 = this;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.$nextTick();

            case 2:

              if (this.mdSyncRoute) {
                this.setActiveItemByRoute();
              } else {
                this.setActiveItemByIndex(0);
              }

              window.setTimeout(function () {
                _this2.setupWatchers();
              }, 100);

            case 4:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function mounted() {
      return _ref2.apply(this, arguments);
    }

    return mounted;
  }()
});

/***/ }),
/* 91 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _raf = __webpack_require__(9);

var _raf2 = _interopRequireDefault(_raf);

var _MdComponent = __webpack_require__(2);

var _MdComponent2 = _interopRequireDefault(_MdComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } //
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = new _MdComponent2.default({
  name: 'MdRipple',
  props: {
    mdActive: null,
    mdDisabled: Boolean,
    mdCentered: Boolean
  },
  data: function data() {
    return {
      eventType: null,
      waveStyles: null,
      animating: false,
      touchTimeout: null
    };
  },
  computed: {
    isDisabled: function isDisabled() {
      return !this.$material.ripple || this.mdDisabled;
    },
    rippleClasses: function rippleClasses() {
      return {
        'md-disabled': this.isDisabled
      };
    },
    waveClasses: function waveClasses() {
      return {
        'md-centered': this.mdCentered
      };
    }
  },
  watch: {
    mdActive: function mdActive(active) {
      var isBoolean = typeof active === 'boolean';
      var isEvent = active.constructor.name.toLowerCase() === 'mouseevent';

      if (isBoolean && this.mdCentered && active) {
        this.startRipple({
          type: 'mousedown'
        });
        this.$emit('update:mdActive', false);
      } else if (isEvent) {
        this.startRipple(active);
        this.$emit('update:mdActive', false);
      }
    }
  },
  methods: {
    touchMoveCheck: function touchMoveCheck() {
      window.clearTimeout(this.touchTimeout);
    },
    touchStartCheck: function touchStartCheck($event) {
      var _this = this;

      this.touchTimeout = window.setTimeout(function () {
        _this.startRipple($event);
      }, 100);
    },
    startRipple: function startRipple($event) {
      var _this2 = this;

      (0, _raf2.default)(_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var eventType, isDisabled, mdCentered, size, position;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                eventType = _this2.eventType, isDisabled = _this2.isDisabled, mdCentered = _this2.mdCentered;

                if (!(!isDisabled && (!eventType || eventType === $event.type))) {
                  _context.next = 10;
                  break;
                }

                size = _this2.getSize();
                position = null;


                if (mdCentered) {
                  position = _this2.getCenteredPosition(size);
                } else {
                  position = _this2.getHitPosition($event, size);
                }

                _context.next = 7;
                return _this2.clearWave();

              case 7:

                _this2.eventType = $event.type;
                _this2.animating = true;
                _this2.applyStyles(position, size);

              case 10:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      })));
    },
    applyStyles: function applyStyles(position, size) {
      size += 'px';

      this.waveStyles = _extends({}, position, {
        width: size,
        height: size
      });
    },
    clearWave: function clearWave() {
      this.waveStyles = null;
      this.animating = false;

      return this.$nextTick();
    },
    getSize: function getSize() {
      var _$el = this.$el,
          offsetWidth = _$el.offsetWidth,
          offsetHeight = _$el.offsetHeight;


      return Math.round(Math.max(offsetWidth, offsetHeight));
    },
    getCenteredPosition: function getCenteredPosition(size) {
      var halfSize = -size / 2 + 'px';

      return {
        'margin-top': halfSize,
        'margin-left': halfSize
      };
    },
    getHitPosition: function getHitPosition($event, elementSize) {
      var rect = this.$el.getBoundingClientRect();
      var top = $event.pageY;
      var left = $event.pageX;

      if ($event.type === 'touchstart') {
        top = $event.changedTouches[0].pageY;
        left = $event.changedTouches[0].pageX;
      }

      return {
        top: top - rect.top - elementSize / 2 - document.documentElement.scrollTop + 'px',
        left: left - rect.left - elementSize / 2 - document.documentElement.scrollLeft + 'px'
      };
    }
  }
});

/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/components/MdBottomBar/MdBottomBarItem.vue
var MdBottomBarItem = __webpack_require__(94);
var MdBottomBarItem_default = /*#__PURE__*/__webpack_require__.n(MdBottomBarItem);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-7ba29fa6","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/components/MdBottomBar/MdBottomBarItem.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "md-button",
    _vm._g(
      _vm._b(
        {
          staticClass: "md-bottom-bar-item",
          class: _vm.itemClasses,
          attrs: {
            id: _vm.id,
            disabled: _vm.mdDisabled,
            "md-ripple": _vm.MdBottomBar.type === "fixed"
          },
          on: { click: _vm.setActiveItem }
        },
        "md-button",
        _vm.$attrs,
        false
      ),
      _vm.$listeners
    ),
    [
      _vm.$slots.default
        ? _vm._t("default")
        : [
            _vm.isAssetIcon(_vm.mdIcon)
              ? _c("md-icon", {
                  staticClass: "md-bottom-bar-icon",
                  attrs: { "md-src": _vm.mdIcon }
                })
              : _c("md-icon", { staticClass: "md-bottom-bar-icon" }, [
                  _vm._v(_vm._s(_vm.mdIcon))
                ]),
            _vm._v(" "),
            _c("span", { staticClass: "md-bottom-bar-label" }, [
              _vm._v(_vm._s(_vm.mdLabel))
            ])
          ]
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var MdBottomBar_MdBottomBarItem = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7ba29fa6", esExports)
  }
}
// CONCATENATED MODULE: ./src/components/MdBottomBar/MdBottomBarItem.vue
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  MdBottomBarItem_default.a,
  MdBottomBar_MdBottomBarItem,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/MdBottomBar/MdBottomBarItem.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7ba29fa6", Component.options)
  } else {
    hotAPI.reload("data-v-7ba29fa6", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var components_MdBottomBar_MdBottomBarItem = __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MdAssetIcon = __webpack_require__(18);

var _MdAssetIcon2 = _interopRequireDefault(_MdAssetIcon);

var _MdUuid = __webpack_require__(6);

var _MdUuid2 = _interopRequireDefault(_MdUuid);

var _MdRouterLinkProps = __webpack_require__(12);

var _MdRouterLinkProps2 = _interopRequireDefault(_MdRouterLinkProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ignoredProps = ['id', 'mdLabel', 'mdIcon', 'mdDisabled']; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  name: 'MdBottomBarItem',
  mixins: [_MdAssetIcon2.default],
  props: {
    id: {
      type: String,
      default: function _default() {
        return 'md-bottom-bar-item-' + (0, _MdUuid2.default)();
      }
    },
    to: null,
    mdLabel: String,
    mdIcon: String,
    mdDisabled: Boolean
  },
  inject: ['MdBottomBar'],
  watch: {
    $props: {
      deep: true,
      handler: function handler() {
        this.setItemData();
      }
    },
    $attrs: {
      deep: true,
      handler: function handler() {
        this.setItemData();
      }
    }
  },
  computed: {
    itemClasses: function itemClasses() {
      return {
        'md-active': this.id === this.MdBottomBar.activeItem
      };
    }
  },
  methods: {
    getPropValues: function getPropValues() {
      var _this = this;

      var propNames = Object.keys(this.$options.props);
      var values = {};

      propNames.forEach(function (prop) {
        if (!ignoredProps.includes(prop)) {
          if (_this[prop]) {
            values[prop] = _this[prop];
          } else if (_this.$attrs && _this.$attrs.hasOwnProperty(prop)) {
            if (prop) {
              values[prop] = _this.$attrs[prop];
            } else {
              values[prop] = true;
            }
          }
        }
      });

      return values;
    },
    setItemData: function setItemData() {
      this.$set(this.MdBottomBar.items, this.id, {
        disabled: this.mdDisabled,
        options: this.mdTemplateOptions,
        props: this.getPropValues()
      });
    },
    setActiveItem: function setActiveItem($event) {
      this.MdBottomBar.activeItem = this.id;

      if (this.MdBottomBar.type === 'shift') {
        this.MdBottomBar.mouseEvent = $event;
      }
    }
  },
  beforeCreate: function beforeCreate() {
    var _this2 = this;

    if (this.$router && this.$options.propsData.to) {
      var componentProps = (0, _MdRouterLinkProps2.default)(this, this.$options.props);
      var propNames = Object.keys(this.$options.propsData);

      this.$options.props = componentProps;
      propNames.forEach(function (prop) {
        if (!ignoredProps.includes(prop)) {
          _this2.$attrs[prop] = _this2.$options.propsData[prop];
        }
      });
    }
  },
  created: function created() {
    this.setItemData();
  },
  beforeDestroy: function beforeDestroy() {
    this.$delete(this.MdBottomBar.items, this.id);
  }
};

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _material = __webpack_require__(1);

var _material2 = _interopRequireDefault(_material);

var _MdButton = __webpack_require__(13);

var _MdButton2 = _interopRequireDefault(_MdButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (Vue) {
  (0, _material2.default)(Vue);
  Vue.component(_MdButton2.default.name, _MdButton2.default);
};

/***/ }),
/* 96 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _MdComponent = __webpack_require__(2);

var _MdComponent2 = _interopRequireDefault(_MdComponent);

var _MdFocused = __webpack_require__(32);

var _MdFocused2 = _interopRequireDefault(_MdFocused);

var _MdRipple = __webpack_require__(19);

var _MdRipple2 = _interopRequireDefault(_MdRipple);

var _MdRouterLinkProps = __webpack_require__(12);

var _MdRouterLinkProps2 = _interopRequireDefault(_MdRouterLinkProps);

var _MdButtonContent = __webpack_require__(98);

var _MdButtonContent2 = _interopRequireDefault(_MdButtonContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _MdComponent2.default({
  name: 'MdButton',
  components: {
    MdButtonContent: _MdButtonContent2.default
  },
  mixins: [_MdRipple2.default, _MdFocused2.default],
  props: {
    href: String,
    type: {
      type: String,
      default: 'button'
    },
    disabled: Boolean,
    to: null
  },
  render: function render(createElement) {
    var buttonContent = createElement('md-button-content', {
      attrs: {
        mdRipple: this.mdRipple,
        disabled: this.disabled
      }
    }, this.$slots.default);
    var buttonAttrs = {
      staticClass: 'md-button',
      class: [this.$mdActiveTheme, {
        'md-ripple-off': !this.mdRipple,
        'md-focused': this.mdHasFocus
      }],
      attrs: _extends({}, this.attrs, {
        href: this.href,
        disabled: this.disabled,
        type: !this.href && (this.type || 'button')
      }),
      on: this.$listeners
    };
    var tag = 'button';

    if (this.href) {
      tag = 'a';
    } else if (this.$router && this.to) {
      this.$options.props = (0, _MdRouterLinkProps2.default)(this, this.$options.props);

      tag = 'router-link';
      buttonAttrs.props = this.$props;
      delete buttonAttrs.props.type;
      delete buttonAttrs.attrs.type;
      delete buttonAttrs.props.href;
      delete buttonAttrs.attrs.href;
    }

    return createElement(tag, buttonAttrs, [buttonContent]);
  }
});

/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/components/MdButton/MdButtonContent.vue
var MdButtonContent = __webpack_require__(100);
var MdButtonContent_default = /*#__PURE__*/__webpack_require__.n(MdButtonContent);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-008ae93a","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/components/MdButton/MdButtonContent.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "md-ripple",
    { attrs: { "md-disabled": !_vm.mdRipple || _vm.disabled } },
    [_c("div", { staticClass: "md-button-content" }, [_vm._t("default")], 2)]
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var MdButton_MdButtonContent = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-008ae93a", esExports)
  }
}
// CONCATENATED MODULE: ./src/components/MdButton/MdButtonContent.vue
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(99)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  MdButtonContent_default.a,
  MdButton_MdButtonContent,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/MdButton/MdButtonContent.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-008ae93a", Component.options)
  } else {
    hotAPI.reload("data-v-008ae93a", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var components_MdButton_MdButtonContent = __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 99 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MdRipple = __webpack_require__(8);

var _MdRipple2 = _interopRequireDefault(_MdRipple);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'MdButtonContent',
  components: {
    MdRipple: _MdRipple2.default
  },
  props: {
    mdRipple: Boolean,
    disabled: Boolean
  }
}; //
//
//
//
//
//
//
//

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _material = __webpack_require__(1);

var _material2 = _interopRequireDefault(_material);

var _MdCard = __webpack_require__(102);

var _MdCard2 = _interopRequireDefault(_MdCard);

var _MdCardArea = __webpack_require__(105);

var _MdCardArea2 = _interopRequireDefault(_MdCardArea);

var _MdCardHeader = __webpack_require__(108);

var _MdCardHeader2 = _interopRequireDefault(_MdCardHeader);

var _MdCardHeaderText = __webpack_require__(111);

var _MdCardHeaderText2 = _interopRequireDefault(_MdCardHeaderText);

var _MdCardMedia = __webpack_require__(113);

var _MdCardMedia2 = _interopRequireDefault(_MdCardMedia);

var _MdCardMediaActions = __webpack_require__(116);

var _MdCardMediaActions2 = _interopRequireDefault(_MdCardMediaActions);

var _MdCardMediaCover = __webpack_require__(119);

var _MdCardMediaCover2 = _interopRequireDefault(_MdCardMediaCover);

var _MdCardContent = __webpack_require__(122);

var _MdCardContent2 = _interopRequireDefault(_MdCardContent);

var _MdCardExpand = __webpack_require__(125);

var _MdCardExpand2 = _interopRequireDefault(_MdCardExpand);

var _MdCardExpandTrigger = __webpack_require__(128);

var _MdCardExpandTrigger2 = _interopRequireDefault(_MdCardExpandTrigger);

var _MdCardExpandContent = __webpack_require__(131);

var _MdCardExpandContent2 = _interopRequireDefault(_MdCardExpandContent);

var _MdCardActions = __webpack_require__(134);

var _MdCardActions2 = _interopRequireDefault(_MdCardActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (Vue) {
  (0, _material2.default)(Vue);
  Vue.component(_MdCard2.default.name, _MdCard2.default);
  Vue.component(_MdCardArea2.default.name, _MdCardArea2.default);
  Vue.component(_MdCardHeader2.default.name, _MdCardHeader2.default);
  Vue.component(_MdCardHeaderText2.default.name, _MdCardHeaderText2.default);
  Vue.component(_MdCardMedia2.default.name, _MdCardMedia2.default);
  Vue.component(_MdCardMediaActions2.default.name, _MdCardMediaActions2.default);
  Vue.component(_MdCardMediaCover2.default.name, _MdCardMediaCover2.default);
  Vue.component(_MdCardContent2.default.name, _MdCardContent2.default);
  Vue.component(_MdCardExpand2.default.name, _MdCardExpand2.default);
  Vue.component(_MdCardExpandTrigger2.default.name, _MdCardExpandTrigger2.default);
  Vue.component(_MdCardExpandContent2.default.name, _MdCardExpandContent2.default);
  Vue.component(_MdCardActions2.default.name, _MdCardActions2.default);
};

/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/components/MdCard/MdCard.vue
var MdCard = __webpack_require__(104);
var MdCard_default = /*#__PURE__*/__webpack_require__.n(MdCard);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-24f7f3af","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/components/MdCard/MdCard.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "md-card", class: [_vm.$mdActiveTheme, _vm.cardClasses] },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var MdCard_MdCard = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-24f7f3af", esExports)
  }
}
// CONCATENATED MODULE: ./src/components/MdCard/MdCard.vue
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(103)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  MdCard_default.a,
  MdCard_MdCard,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/MdCard/MdCard.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-24f7f3af", Component.options)
  } else {
    hotAPI.reload("data-v-24f7f3af", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var components_MdCard_MdCard = __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 103 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MdComponent = __webpack_require__(2);

var _MdComponent2 = _interopRequireDefault(_MdComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _MdComponent2.default({
  name: 'MdCard',
  props: {
    mdWithHover: Boolean
  },
  data: function data() {
    return {
      MdCard: {
        expand: false
      }
    };
  },
  provide: function provide() {
    return {
      MdCard: this.MdCard
    };
  },

  computed: {
    cardClasses: function cardClasses() {
      return {
        'md-with-hover': this.mdWithHover,
        'md-expand-active': this.MdCard.expand
      };
    }
  }
}); //
//
//
//
//
//

/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/components/MdCard/MdCardArea/MdCardArea.vue
var MdCardArea = __webpack_require__(107);
var MdCardArea_default = /*#__PURE__*/__webpack_require__.n(MdCardArea);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-132f02d7","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/components/MdCard/MdCardArea/MdCardArea.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "md-card-area", class: _vm.areaClasses },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var MdCardArea_MdCardArea = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-132f02d7", esExports)
  }
}
// CONCATENATED MODULE: ./src/components/MdCard/MdCardArea/MdCardArea.vue
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(106)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  MdCardArea_default.a,
  MdCardArea_MdCardArea,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/MdCard/MdCardArea/MdCardArea.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-132f02d7", Component.options)
  } else {
    hotAPI.reload("data-v-132f02d7", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var MdCard_MdCardArea_MdCardArea = __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 106 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//

exports.default = {
  name: 'MdCardArea',
  props: {
    mdInset: Boolean
  },
  computed: {
    areaClasses: function areaClasses() {
      return {
        'md-inset': this.mdInset
      };
    }
  }
};

/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/components/MdCard/MdCardHeader/MdCardHeader.vue
var MdCardHeader = __webpack_require__(110);
var MdCardHeader_default = /*#__PURE__*/__webpack_require__.n(MdCardHeader);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-4d103817","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/components/MdCard/MdCardHeader/MdCardHeader.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "md-card-header" }, [_vm._t("default")], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var MdCardHeader_MdCardHeader = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4d103817", esExports)
  }
}
// CONCATENATED MODULE: ./src/components/MdCard/MdCardHeader/MdCardHeader.vue
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(109)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  MdCardHeader_default.a,
  MdCardHeader_MdCardHeader,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/MdCard/MdCardHeader/MdCardHeader.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4d103817", Component.options)
  } else {
    hotAPI.reload("data-v-4d103817", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var MdCard_MdCardHeader_MdCardHeader = __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 109 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//

exports.default = {
  name: 'MdCardHeader'
};

/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/components/MdCard/MdCardHeader/MdCardHeaderText.vue
var MdCardHeaderText = __webpack_require__(112);
var MdCardHeaderText_default = /*#__PURE__*/__webpack_require__.n(MdCardHeaderText);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-49a3ab64","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/components/MdCard/MdCardHeader/MdCardHeaderText.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "md-card-header-text" },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var MdCardHeader_MdCardHeaderText = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-49a3ab64", esExports)
  }
}
// CONCATENATED MODULE: ./src/components/MdCard/MdCardHeader/MdCardHeaderText.vue
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  MdCardHeaderText_default.a,
  MdCardHeader_MdCardHeaderText,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/MdCard/MdCardHeader/MdCardHeaderText.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-49a3ab64", Component.options)
  } else {
    hotAPI.reload("data-v-49a3ab64", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var MdCard_MdCardHeader_MdCardHeaderText = __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//

exports.default = {
  name: 'MdCardHeaderText',
  data: function data() {
    return {
      parentClasses: null
    };
  },
  mounted: function mounted() {
    this.parentClasses = this.$parent.$el.classList;

    if (this.parentClasses.contains('md-card-header')) {
      this.parentClasses.add('md-card-header-flex');
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.parentClasses.remove('md-card-header-flex');
  }
};

/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/components/MdCard/MdCardMedia/MdCardMedia.vue
var MdCardMedia = __webpack_require__(115);
var MdCardMedia_default = /*#__PURE__*/__webpack_require__.n(MdCardMedia);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-33e1f253","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/components/MdCard/MdCardMedia/MdCardMedia.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "md-card-media", class: _vm.mediaClasses },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var MdCardMedia_MdCardMedia = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-33e1f253", esExports)
  }
}
// CONCATENATED MODULE: ./src/components/MdCard/MdCardMedia/MdCardMedia.vue
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(114)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  MdCardMedia_default.a,
  MdCardMedia_MdCardMedia,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/MdCard/MdCardMedia/MdCardMedia.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-33e1f253", Component.options)
  } else {
    hotAPI.reload("data-v-33e1f253", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var MdCard_MdCardMedia_MdCardMedia = __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 114 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //
//
//
//
//
//

var _MdPropValidator = __webpack_require__(4);

var _MdPropValidator2 = _interopRequireDefault(_MdPropValidator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'MdCardMedia',
  props: {
    mdRatio: _extends({
      type: String
    }, (0, _MdPropValidator2.default)('md-ratio', ['16-9', '16/9', '16:9', '4-3', '4/3', '4:3', '1-1', '1/1', '1:1'])),
    mdMedium: Boolean,
    mdBig: Boolean
  },
  computed: {
    mediaClasses: function mediaClasses() {
      var classes = {};

      if (this.mdRatio) {
        var ratio = this.getAspectRatio();

        if (ratio) {
          var _ratio = _slicedToArray(ratio, 2),
              horiz = _ratio[0],
              vert = _ratio[1];

          classes['md-ratio-' + horiz + '-' + vert] = true;
        }
      }

      if (this.mdMedium || this.mdBig) {
        classes = {
          'md-medium': this.mdMedium,
          'md-big': this.mdBig
        };
      }

      return classes;
    }
  },
  methods: {
    getAspectRatio: function getAspectRatio() {
      var ratio = [];

      if (this.mdRatio.indexOf(':') !== -1) {
        ratio = this.mdRatio.split(':');
      } else if (this.mdRatio.indexOf('/') !== -1) {
        ratio = this.mdRatio.split('/');
      } else if (this.mdRatio.indexOf('-') !== -1) {
        ratio = this.mdRatio.split('-');
      }

      return ratio.length === 2 ? ratio : null;
    }
  }
};

/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/components/MdCard/MdCardMedia/MdCardMediaActions.vue
var MdCardMediaActions = __webpack_require__(118);
var MdCardMediaActions_default = /*#__PURE__*/__webpack_require__.n(MdCardMediaActions);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-102584da","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/components/MdCard/MdCardMedia/MdCardMediaActions.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "md-card-media-actions" },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var MdCardMedia_MdCardMediaActions = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-102584da", esExports)
  }
}
// CONCATENATED MODULE: ./src/components/MdCard/MdCardMedia/MdCardMediaActions.vue
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(117)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  MdCardMediaActions_default.a,
  MdCardMedia_MdCardMediaActions,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/MdCard/MdCardMedia/MdCardMediaActions.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-102584da", Component.options)
  } else {
    hotAPI.reload("data-v-102584da", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var MdCard_MdCardMedia_MdCardMediaActions = __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 117 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//

exports.default = {
  name: 'MdCardMediaActions'
};

/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/components/MdCard/MdCardMedia/MdCardMediaCover.vue
var MdCardMediaCover = __webpack_require__(121);
var MdCardMediaCover_default = /*#__PURE__*/__webpack_require__.n(MdCardMediaCover);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-20dfcfd4","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/components/MdCard/MdCardMedia/MdCardMediaCover.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "md-card-media-cover", class: _vm.coverClasses },
    [
      _vm._t("default"),
      _vm._v(" "),
      _vm.mdTextScrim
        ? _c("div", {
            ref: "backdrop",
            staticClass: "md-card-backdrop",
            style: _vm.coverStyles
          })
        : _vm._e()
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var MdCardMedia_MdCardMediaCover = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-20dfcfd4", esExports)
  }
}
// CONCATENATED MODULE: ./src/components/MdCard/MdCardMedia/MdCardMediaCover.vue
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(120)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  MdCardMediaCover_default.a,
  MdCardMedia_MdCardMediaCover,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/MdCard/MdCardMedia/MdCardMediaCover.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-20dfcfd4", Component.options)
  } else {
    hotAPI.reload("data-v-20dfcfd4", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var MdCard_MdCardMedia_MdCardMediaCover = __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 120 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//

exports.default = {
  name: 'MdCardMediaCover',
  props: {
    mdTextScrim: Boolean,
    mdSolid: Boolean
  },
  data: function data() {
    return {
      backdropBackground: {}
    };
  },
  computed: {
    coverClasses: function coverClasses() {
      return {
        'md-text-scrim': this.mdTextScrim,
        'md-solid': this.mdSolid
      };
    },
    coverStyles: function coverStyles() {
      return {
        background: this.backdropBackground
      };
    }
  },
  methods: {
    applyScrimColor: function applyScrimColor(darkness) {
      if (this.$refs.backdrop) {
        this.backdropBackground = 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, ' + darkness / 2 + ') 66%, rgba(0, 0, 0, ' + darkness + ') 100%)';
      }
    },
    applySolidColor: function applySolidColor(darkness) {
      var area = this.$el.querySelector('.md-card-area');

      if (area) {
        area.style.background = 'rgba(0, 0, 0, ' + darkness + ')';
      }
    },
    getImageLightness: function getImageLightness(image, onLoad, onError) {
      var canvas = document.createElement('canvas');

      image.crossOrigin = 'Anonymous';

      image.onload = function () {
        var colorSum = 0;
        var ctx = void 0;
        var imageData = void 0;
        var imageMetadata = void 0;
        var r = void 0;
        var g = void 0;
        var b = void 0;
        var average = void 0;

        canvas.width = this.width;
        canvas.height = this.height;
        ctx = canvas.getContext('2d');

        ctx.drawImage(this, 0, 0);

        imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        imageMetadata = imageData.data;

        for (var x = 0, len = imageMetadata.length; x < len; x += 4) {
          r = imageMetadata[x];
          g = imageMetadata[x + 1];
          b = imageMetadata[x + 2];

          average = Math.floor((r + g + b) / 3);
          colorSum += average;
        }

        onLoad(Math.floor(colorSum / (this.width * this.height)));
      };

      image.onerror = onError;
    }
  },
  mounted: function mounted() {
    var _this = this;

    var applyBackground = function applyBackground() {
      var darkness = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0.6;

      if (_this.mdTextScrim) {
        _this.applyScrimColor(darkness);
      } else if (_this.mdSolid) {
        _this.applySolidColor(darkness);
      }
    };
    var image = this.$el.querySelector('img');

    if (image && (this.mdTextScrim || this.mdSolid)) {
      this.getImageLightness(image, function (lightness) {
        var limit = 256;
        var darkness = (Math.abs(limit - lightness) * 100 / limit + 15) / 100;

        if (darkness >= 0.7) {
          darkness = 0.7;
        }

        applyBackground(darkness);
      }, applyBackground);
    }
  }
};

/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/components/MdCard/MdCardContent/MdCardContent.vue
var MdCardContent = __webpack_require__(124);
var MdCardContent_default = /*#__PURE__*/__webpack_require__.n(MdCardContent);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-36a98486","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/components/MdCard/MdCardContent/MdCardContent.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "md-card-content" }, [_vm._t("default")], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var MdCardContent_MdCardContent = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-36a98486", esExports)
  }
}
// CONCATENATED MODULE: ./src/components/MdCard/MdCardContent/MdCardContent.vue
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(123)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  MdCardContent_default.a,
  MdCardContent_MdCardContent,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/MdCard/MdCardContent/MdCardContent.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-36a98486", Component.options)
  } else {
    hotAPI.reload("data-v-36a98486", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var MdCard_MdCardContent_MdCardContent = __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 123 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//

exports.default = {
  name: 'MdCardContent'
};

/***/ }),
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/components/MdCard/MdCardExpand/MdCardExpand.vue
var MdCardExpand = __webpack_require__(127);
var MdCardExpand_default = /*#__PURE__*/__webpack_require__.n(MdCardExpand);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-d46d3592","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/components/MdCard/MdCardExpand/MdCardExpand.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "md-card-expand" }, [_vm._t("default")], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var MdCardExpand_MdCardExpand = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-d46d3592", esExports)
  }
}
// CONCATENATED MODULE: ./src/components/MdCard/MdCardExpand/MdCardExpand.vue
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(126)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  MdCardExpand_default.a,
  MdCardExpand_MdCardExpand,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/MdCard/MdCardExpand/MdCardExpand.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d46d3592", Component.options)
  } else {
    hotAPI.reload("data-v-d46d3592", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var MdCard_MdCardExpand_MdCardExpand = __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 126 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//

exports.default = {
  name: 'MdCardExpand',
  inject: ['MdCard']
};

/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_MdCardExpandTrigger_vue__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_MdCardExpandTrigger_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_MdCardExpandTrigger_vue__);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(129)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */
var __vue_template__ = null
/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_MdCardExpandTrigger_vue___default.a,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/MdCard/MdCardExpand/MdCardExpandTrigger.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4ede00b1", Component.options)
  } else {
    hotAPI.reload("data-v-4ede00b1", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 129 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = {
  name: 'MdCardExpandTrigger',
  inject: ['MdCard'],
  render: function render(createElement) {
    var _this = this;

    var _$slots$default = _slicedToArray(this.$slots.default, 1),
        trigger = _$slots$default[0];

    var staticClass = ' md-card-expand-trigger';
    var listeners = {
      click: function click() {
        _this.MdCard.expand = !_this.MdCard.expand;
      }
    };

    if (trigger) {
      trigger.componentOptions.listeners = _extends({}, trigger.componentOptions.listeners, listeners);
      trigger.data.staticClass += staticClass;

      return trigger;
    }

    return createElement('div', {
      staticClass: staticClass,
      on: listeners
    });
  }
};

/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/components/MdCard/MdCardExpand/MdCardExpandContent.vue
var MdCardExpandContent = __webpack_require__(133);
var MdCardExpandContent_default = /*#__PURE__*/__webpack_require__.n(MdCardExpandContent);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-604296f2","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/components/MdCard/MdCardExpand/MdCardExpandContent.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "md-card-expand-content", style: _vm.contentStyles },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var MdCardExpand_MdCardExpandContent = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-604296f2", esExports)
  }
}
// CONCATENATED MODULE: ./src/components/MdCard/MdCardExpand/MdCardExpandContent.vue
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(132)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  MdCardExpandContent_default.a,
  MdCardExpand_MdCardExpandContent,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/MdCard/MdCardExpand/MdCardExpandContent.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-604296f2", Component.options)
  } else {
    hotAPI.reload("data-v-604296f2", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var MdCard_MdCardExpand_MdCardExpandContent = __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 132 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//

exports.default = {
  name: 'MdCardExpandContent',
  inject: ['MdCard'],
  data: function data() {
    return {
      marginTop: 0
    };
  },
  computed: {
    expand: function expand() {
      return this.MdCard.expand;
    },
    contentStyles: function contentStyles() {
      return {
        'margin-top': '-' + this.marginTop + 'px',
        'opacity': this.marginTop === 0 ? 1 : 0
      };
    }
  },
  watch: {
    expand: function expand(_expand) {
      if (!_expand) {
        this.marginTop = this.$el.children[0].offsetHeight;
      } else {
        this.marginTop = 0;
      }
    }
  },
  mounted: function mounted() {
    this.marginTop = this.$el.children[0].offsetHeight;
  }
};

/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/components/MdCard/MdCardActions/MdCardActions.vue
var MdCardActions = __webpack_require__(136);
var MdCardActions_default = /*#__PURE__*/__webpack_require__.n(MdCardActions);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-2894ebc5","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/components/MdCard/MdCardActions/MdCardActions.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "md-card-actions",
      class: "md-alignment-" + _vm.mdAlignment
    },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var MdCardActions_MdCardActions = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2894ebc5", esExports)
  }
}
// CONCATENATED MODULE: ./src/components/MdCard/MdCardActions/MdCardActions.vue
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(135)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  MdCardActions_default.a,
  MdCardActions_MdCardActions,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/MdCard/MdCardActions/MdCardActions.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2894ebc5", Component.options)
  } else {
    hotAPI.reload("data-v-2894ebc5", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var MdCard_MdCardActions_MdCardActions = __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 135 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //
//
//
//
//
//

var _MdPropValidator = __webpack_require__(4);

var _MdPropValidator2 = _interopRequireDefault(_MdPropValidator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var alignments = ['left', 'right', 'space-between'];

exports.default = {
  name: 'MdCardActions',
  props: {
    mdAlignment: _extends({
      type: String,
      default: 'right'
    }, (0, _MdPropValidator2.default)('md-alignment', alignments))
  }
};

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _material = __webpack_require__(1);

var _material2 = _interopRequireDefault(_material);

var _MdCheckbox = __webpack_require__(138);

var _MdCheckbox2 = _interopRequireDefault(_MdCheckbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (Vue) {
  (0, _material2.default)(Vue);
  Vue.component(_MdCheckbox2.default.name, _MdCheckbox2.default);
};

/***/ }),
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/components/MdCheckbox/MdCheckbox.vue
var MdCheckbox = __webpack_require__(140);
var MdCheckbox_default = /*#__PURE__*/__webpack_require__.n(MdCheckbox);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-7c2899cf","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/components/MdCheckbox/MdCheckbox.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "md-checkbox",
      class: [_vm.$mdActiveTheme, _vm.checkClasses]
    },
    [
      _c(
        "div",
        {
          staticClass: "md-checkbox-container",
          on: {
            click: function($event) {
              $event.stopPropagation()
              _vm.toggleCheck($event)
            }
          }
        },
        [
          _c(
            "md-ripple",
            {
              attrs: {
                "md-centered": "",
                "md-active": _vm.rippleActive,
                "md-disabled": _vm.disabled
              },
              on: {
                "update:mdActive": function($event) {
                  _vm.rippleActive = $event
                }
              }
            },
            [
              _c(
                "input",
                _vm._b(
                  { attrs: { type: "checkbox" } },
                  "input",
                  {
                    id: _vm.id,
                    name: _vm.name,
                    disabled: _vm.disabled,
                    required: _vm.required,
                    value: _vm.value
                  },
                  false
                )
              )
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _vm.$slots.default
        ? _c(
            "label",
            {
              staticClass: "md-checkbox-label",
              attrs: { for: _vm.id },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  _vm.toggleCheck($event)
                }
              }
            },
            [_vm._t("default")],
            2
          )
        : _vm._e()
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var MdCheckbox_MdCheckbox = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7c2899cf", esExports)
  }
}
// CONCATENATED MODULE: ./src/components/MdCheckbox/MdCheckbox.vue
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(139)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  MdCheckbox_default.a,
  MdCheckbox_MdCheckbox,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/MdCheckbox/MdCheckbox.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7c2899cf", Component.options)
  } else {
    hotAPI.reload("data-v-7c2899cf", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var components_MdCheckbox_MdCheckbox = __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 139 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MdComponent = __webpack_require__(2);

var _MdComponent2 = _interopRequireDefault(_MdComponent);

var _MdCheckboxMixin = __webpack_require__(33);

var _MdCheckboxMixin2 = _interopRequireDefault(_MdCheckboxMixin);

var _MdUuid = __webpack_require__(6);

var _MdUuid2 = _interopRequireDefault(_MdUuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _MdComponent2.default({
  name: 'MdCheckbox',
  mixins: [_MdCheckboxMixin2.default],
  props: {
    id: {
      type: String,
      default: function _default() {
        return 'md-checkbox-' + (0, _MdUuid2.default)();
      }
    }
  }
}); //
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _material = __webpack_require__(1);

var _material2 = _interopRequireDefault(_material);

var _MdChips = __webpack_require__(142);

var _MdChips2 = _interopRequireDefault(_MdChips);

var _MdChip = __webpack_require__(158);

var _MdChip2 = _interopRequireDefault(_MdChip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (Vue) {
  (0, _material2.default)(Vue);
  Vue.component(_MdChips2.default.name, _MdChips2.default);
  Vue.component(_MdChip2.default.name, _MdChip2.default);
};

/***/ }),
/* 142 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/components/MdChips/MdChips.vue
var MdChips = __webpack_require__(144);
var MdChips_default = /*#__PURE__*/__webpack_require__.n(MdChips);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-0b3d2a1e","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/components/MdChips/MdChips.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "md-field",
    { staticClass: "md-chips", class: [_vm.$mdActiveTheme, _vm.chipsClasses] },
    [
      !_vm.mdStatic ? _vm._t("default") : _vm._e(),
      _vm._v(" "),
      _vm._l(_vm.value, function(chip, key) {
        return _c(
          "md-chip",
          {
            key: key,
            attrs: {
              "md-deletable": !_vm.mdStatic,
              "md-clickable": !_vm.mdStatic
            },
            on: {
              keydown: function($event) {
                if (
                  !("button" in $event) &&
                  _vm._k($event.keyCode, "enter", 13, $event.key)
                ) {
                  return null
                }
                _vm.$emit("md-click", chip, key)
              },
              "md-delete": function($event) {
                $event.stopPropagation()
                _vm.removeChip(chip)
              }
            },
            nativeOn: {
              click: function($event) {
                _vm.$emit("md-click", chip, key)
              }
            }
          },
          [
            _vm.$scopedSlots["md-chip"]
              ? _vm._t("md-chip", [_vm._v(_vm._s(chip))], { chip: chip })
              : [_vm._v(_vm._s(chip))]
          ],
          2
        )
      }),
      _vm._v(" "),
      !_vm.mdStatic && _vm.modelRespectLimit
        ? _c("md-input", {
            ref: "input",
            attrs: {
              type: _vm.mdInputType,
              id: _vm.id,
              placeholder: _vm.mdPlaceholder
            },
            on: {
              keydown: [
                function($event) {
                  if (
                    !("button" in $event) &&
                    _vm._k($event.keyCode, "enter", 13, $event.key)
                  ) {
                    return null
                  }
                  _vm.insertChip($event)
                },
                function($event) {
                  if (!("button" in $event) && $event.keyCode !== 8) {
                    return null
                  }
                  _vm.handleBackRemove($event)
                }
              ]
            },
            model: {
              value: _vm.inputValue,
              callback: function($$v) {
                _vm.inputValue = typeof $$v === "string" ? $$v.trim() : $$v
              },
              expression: "inputValue"
            }
          })
        : _vm._e()
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var MdChips_MdChips = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0b3d2a1e", esExports)
  }
}
// CONCATENATED MODULE: ./src/components/MdChips/MdChips.vue
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(143)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  MdChips_default.a,
  MdChips_MdChips,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/MdChips/MdChips.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0b3d2a1e", Component.options)
  } else {
    hotAPI.reload("data-v-0b3d2a1e", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var components_MdChips_MdChips = __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 143 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var _MdComponent = __webpack_require__(2);

var _MdComponent2 = _interopRequireDefault(_MdComponent);

var _MdField = __webpack_require__(20);

var _MdField2 = _interopRequireDefault(_MdField);

var _MdInput = __webpack_require__(14);

var _MdInput2 = _interopRequireDefault(_MdInput);

var _MdUuid = __webpack_require__(6);

var _MdUuid2 = _interopRequireDefault(_MdUuid);

var _MdPropValidator = __webpack_require__(4);

var _MdPropValidator2 = _interopRequireDefault(_MdPropValidator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _MdComponent2.default({
  name: 'MdChips',
  components: {
    MdField: _MdField2.default,
    MdInput: _MdInput2.default
  },
  props: {
    value: Array,
    id: {
      type: [String, Number],
      default: function _default() {
        return 'md-chips-' + (0, _MdUuid2.default)();
      }
    },
    mdInputType: _extends({
      type: [String, Number]
    }, (0, _MdPropValidator2.default)('md-input-type', ['email', 'number', 'password', 'search', 'tel', 'text', 'url'])),
    mdPlaceholder: [String, Number],
    mdStatic: Boolean,
    mdLimit: Number
  },
  data: function data() {
    return {
      inputValue: ''
    };
  },
  computed: {
    chipsClasses: function chipsClasses() {
      return {
        'md-has-value': this.value && this.value.length
      };
    },
    modelRespectLimit: function modelRespectLimit() {
      return !this.mdLimit || this.value.length < this.mdLimit;
    }
  },
  methods: {
    insertChip: function insertChip(_ref) {
      var target = _ref.target;

      if (!this.inputValue || this.value.includes(this.inputValue) || !this.modelRespectLimit) {
        return;
      }
      this.value.push(this.inputValue);
      this.$emit('input', this.value);
      this.$emit('md-insert', this.inputValue);
      this.inputValue = '';
    },
    removeChip: function removeChip(chip) {
      var _this = this;

      var index = this.value.indexOf(chip);

      this.value.splice(index, 1);
      this.$emit('input', this.value);
      this.$emit('md-delete', chip, index);
      this.$nextTick(function () {
        return _this.$refs.input.$el.focus();
      });
    },
    handleBackRemove: function handleBackRemove() {
      if (!this.inputValue) {
        this.removeChip(this.value[this.value.length - 1]);
      }
    }
  }
});

/***/ }),
/* 145 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MdComponent = __webpack_require__(2);

var _MdComponent2 = _interopRequireDefault(_MdComponent);

var _MdClearIcon = __webpack_require__(34);

var _MdClearIcon2 = _interopRequireDefault(_MdClearIcon);

var _MdPasswordOffIcon = __webpack_require__(153);

var _MdPasswordOffIcon2 = _interopRequireDefault(_MdPasswordOffIcon);

var _MdPasswordOnIcon = __webpack_require__(155);

var _MdPasswordOnIcon2 = _interopRequireDefault(_MdPasswordOnIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = new _MdComponent2.default({
  name: 'MdField',
  components: {
    MdClearIcon: _MdClearIcon2.default,
    MdPasswordOffIcon: _MdPasswordOffIcon2.default,
    MdPasswordOnIcon: _MdPasswordOnIcon2.default
  },
  props: {
    mdInline: Boolean,
    mdClearable: Boolean,
    mdCounter: {
      type: Boolean,
      default: true
    },
    mdTogglePassword: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      showPassword: false,
      MdField: {
        value: null,
        focused: false,
        highlighted: false,
        disabled: false,
        required: false,
        placeholder: false,
        textarea: false,
        autogrow: false,
        maxlength: null,
        counter: null,
        password: null,
        togglePassword: false,
        clear: false,
        file: false
      }
    };
  },
  provide: function provide() {
    return {
      MdField: this.MdField
    };
  },

  computed: {
    stringValue: function stringValue() {
      return this.MdField.value && this.MdField.value.toString();
    },
    hasCounter: function hasCounter() {
      return this.mdCounter && (this.MdField.maxlength || this.MdField.counter);
    },
    hasPasswordToggle: function hasPasswordToggle() {
      return this.mdTogglePassword && this.MdField.password;
    },
    hasValue: function hasValue() {
      return this.stringValue && this.stringValue.length > 0;
    },
    valueLength: function valueLength() {
      if (this.stringValue) {
        return this.stringValue.length;
      }

      return 0;
    },
    fieldClasses: function fieldClasses() {
      return {
        'md-inline': this.mdInline,
        'md-clearable': this.mdClearable,
        'md-focused': this.MdField.focused,
        'md-highlight': this.MdField.highlighted,
        'md-disabled': this.MdField.disabled,
        'md-required': this.MdField.required,
        'md-has-value': this.hasValue,
        'md-has-placeholder': this.MdField.placeholder,
        'md-has-textarea': this.MdField.textarea,
        'md-has-password': this.MdField.password,
        'md-has-file': this.MdField.file,
        'md-has-select': this.MdField.select,
        'md-autogrow': this.MdField.autogrow
      };
    }
  },
  methods: {
    clearInput: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.MdField.clear = true;
                _context.next = 3;
                return this.$nextTick();

              case 3:
                this.MdField.clear = false;

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function clearInput() {
        return _ref.apply(this, arguments);
      }

      return clearInput;
    }(),
    togglePassword: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.MdField.togglePassword = !this.MdField.togglePassword;

              case 1:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function togglePassword() {
        return _ref2.apply(this, arguments);
      }

      return togglePassword;
    }(),
    onBlur: function onBlur() {
      this.MdField.highlighted = false;
    }
  }
});

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MdIcon = __webpack_require__(5);

var _MdIcon2 = _interopRequireDefault(_MdIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'MdClearIcon',
  components: {
    MdIcon: _MdIcon2.default
  }
}; //
//
//
//
//
//
//
//
//

/***/ }),
/* 148 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MdComponent = __webpack_require__(2);

var _MdComponent2 = _interopRequireDefault(_MdComponent);

var _MdSvgLoader = __webpack_require__(150);

var _MdSvgLoader2 = _interopRequireDefault(_MdSvgLoader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//

exports.default = new _MdComponent2.default({
  name: 'MdIcon',
  components: {
    MdSvgLoader: _MdSvgLoader2.default
  },
  props: {
    mdSrc: String
  }
});

/***/ }),
/* 150 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/components/MdSvgLoader/MdSvgLoader.vue
var MdSvgLoader = __webpack_require__(152);
var MdSvgLoader_default = /*#__PURE__*/__webpack_require__.n(MdSvgLoader);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-0db3655e","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/components/MdSvgLoader/MdSvgLoader.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("i", {
    staticClass: "md-svg-loader",
    domProps: { innerHTML: _vm._s(_vm.html) }
  })
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var MdSvgLoader_MdSvgLoader = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0db3655e", esExports)
  }
}
// CONCATENATED MODULE: ./src/components/MdSvgLoader/MdSvgLoader.vue
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(151)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  MdSvgLoader_default.a,
  MdSvgLoader_MdSvgLoader,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/MdSvgLoader/MdSvgLoader.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0db3655e", Component.options)
  } else {
    hotAPI.reload("data-v-0db3655e", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var components_MdSvgLoader_MdSvgLoader = __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 151 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

//
//
//
//

var mdSVGStore = {};

exports.default = {
  name: 'MdSVGLoader',
  props: {
    mdSrc: {
      type: String,
      required: true
    }
  },
  data: function data() {
    return {
      html: null,
      error: null
    };
  },
  watch: {
    mdSrc: function mdSrc() {
      this.html = null;
      this.loadSVG();
    }
  },
  methods: {
    isSVG: function isSVG(mimetype) {
      return mimetype.indexOf('svg') >= 0;
    },
    setHtml: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(value) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return mdSVGStore[this.mdSrc];

              case 2:
                this.html = _context.sent;
                _context.next = 5;
                return this.$nextTick();

              case 5:

                this.$emit('md-loaded');

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function setHtml(_x) {
        return _ref.apply(this, arguments);
      }

      return setHtml;
    }(),
    unexpectedError: function unexpectedError(reject) {
      this.error = 'Something bad happened trying to fetch ' + this.mdSrc + '.';
      reject(this.error);
    },
    loadSVG: function loadSVG() {
      var _this = this;

      if (!mdSVGStore.hasOwnProperty(this.mdSrc)) {
        mdSVGStore[this.mdSrc] = new Promise(function (resolve, reject) {
          var request = new window.XMLHttpRequest();

          request.open('GET', _this.mdSrc, true);

          request.onload = function () {
            var mimetype = request.getResponseHeader('content-type');

            if (request.status === 200) {
              if (_this.isSVG(mimetype)) {
                resolve(request.response);
                _this.setHtml();
              } else {
                _this.error = 'The file ' + _this.mdSrc + ' is not a valid SVG.';
                reject(_this.error);
              }
            } else if (request.status >= 400 && request.status < 500) {
              _this.error = 'The file ' + _this.mdSrc + ' do not exists.';
              reject(_this.error);
            } else {
              _this.unexpectedError(reject);
            }
          };

          request.onerror = function () {
            return _this.unexpectedError(reject);
          };
          request.onabort = function () {
            return _this.unexpectedError(reject);
          };
          request.send();
        });
      } else {
        this.setHtml();
      }
    }
  },
  mounted: function mounted() {
    this.loadSVG();
  }
};

/***/ }),
/* 153 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/core/icons/MdPasswordOffIcon.vue
var MdPasswordOffIcon = __webpack_require__(154);
var MdPasswordOffIcon_default = /*#__PURE__*/__webpack_require__.n(MdPasswordOffIcon);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-4113206a","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/core/icons/MdPasswordOffIcon.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("md-icon", { staticClass: "md-icon-image" }, [
      _c(
        "svg",
        {
          attrs: {
            height: "24",
            viewBox: "0 0 24 24",
            width: "24",
            xmlns: "http://www.w3.org/2000/svg"
          }
        },
        [
          _c("path", {
            attrs: {
              d: "M0 0h24v24H0zm0 0h24v24H0zm0 0h24v24H0zm0 0h24v24H0z",
              fill: "none"
            }
          }),
          _vm._v(" "),
          _c("path", {
            attrs: {
              d:
                "M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"
            }
          })
        ]
      )
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var icons_MdPasswordOffIcon = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4113206a", esExports)
  }
}
// CONCATENATED MODULE: ./src/core/icons/MdPasswordOffIcon.vue
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  MdPasswordOffIcon_default.a,
  icons_MdPasswordOffIcon,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/core/icons/MdPasswordOffIcon.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4113206a", Component.options)
  } else {
    hotAPI.reload("data-v-4113206a", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var core_icons_MdPasswordOffIcon = __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MdIcon = __webpack_require__(5);

var _MdIcon2 = _interopRequireDefault(_MdIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'MdPasswordOffIcon',
  components: {
    MdIcon: _MdIcon2.default
  }
}; //
//
//
//
//
//
//
//
//

/***/ }),
/* 155 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/core/icons/MdPasswordOnIcon.vue
var MdPasswordOnIcon = __webpack_require__(156);
var MdPasswordOnIcon_default = /*#__PURE__*/__webpack_require__.n(MdPasswordOnIcon);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-71ec8df4","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/core/icons/MdPasswordOnIcon.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("md-icon", { staticClass: "md-icon-image" }, [
      _c(
        "svg",
        {
          attrs: {
            height: "24",
            viewBox: "0 0 24 24",
            width: "24",
            xmlns: "http://www.w3.org/2000/svg"
          }
        },
        [
          _c("path", { attrs: { d: "M0 0h24v24H0z", fill: "none" } }),
          _vm._v(" "),
          _c("path", {
            attrs: {
              d:
                "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
            }
          })
        ]
      )
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var icons_MdPasswordOnIcon = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-71ec8df4", esExports)
  }
}
// CONCATENATED MODULE: ./src/core/icons/MdPasswordOnIcon.vue
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  MdPasswordOnIcon_default.a,
  icons_MdPasswordOnIcon,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/core/icons/MdPasswordOnIcon.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-71ec8df4", Component.options)
  } else {
    hotAPI.reload("data-v-71ec8df4", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var core_icons_MdPasswordOnIcon = __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MdIcon = __webpack_require__(5);

var _MdIcon2 = _interopRequireDefault(_MdIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'MdPasswordOnIcon',
  components: {
    MdIcon: _MdIcon2.default
  }
}; //
//
//
//
//
//
//
//
//

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //
//
//
//
//
//
//
//
//
//

var _MdComponent = __webpack_require__(2);

var _MdComponent2 = _interopRequireDefault(_MdComponent);

var _MdUuid = __webpack_require__(6);

var _MdUuid2 = _interopRequireDefault(_MdUuid);

var _MdFieldMixin = __webpack_require__(15);

var _MdFieldMixin2 = _interopRequireDefault(_MdFieldMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _MdComponent2.default({
  name: 'MdInput',
  mixins: [_MdFieldMixin2.default],
  inject: ['MdField'],
  props: {
    id: {
      type: String,
      default: function _default() {
        return 'md-input-' + (0, _MdUuid2.default)();
      }
    },
    type: {
      type: String,
      default: 'text'
    }
  },
  computed: {
    toggleType: function toggleType() {
      return this.MdField.togglePassword;
    },
    isPassword: function isPassword() {
      return this.type === 'password';
    },
    listeners: function listeners() {
      var _this = this;

      return _extends({}, this.$listeners, {
        input: function input(event) {
          return _this.$emit('input', event.target.value);
        }
      });
    }
  },
  watch: {
    type: function type(_type) {
      this.setPassword(this.isPassword);
    },
    toggleType: function toggleType(toggle) {
      if (toggle) {
        this.setTypeText();
      } else {
        this.setTypePassword();
      }
    }
  },
  methods: {
    setPassword: function setPassword(state) {
      this.MdField.password = state;
      this.MdField.togglePassword = false;
    },
    setTypePassword: function setTypePassword() {
      this.$el.type = 'password';
    },
    setTypeText: function setTypeText() {
      this.$el.type = 'text';
    }
  },
  created: function created() {
    this.setPassword(this.isPassword);
  },
  beforeDestroy: function beforeDestroy() {
    this.setPassword(false);
  }
});

/***/ }),
/* 158 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/components/MdChips/MdChip.vue
var MdChip = __webpack_require__(160);
var MdChip_default = /*#__PURE__*/__webpack_require__.n(MdChip);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-84ba771c","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/components/MdChips/MdChip.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { name: "md-chip", appear: "" } }, [
    _c(
      "div",
      _vm._g(
        {
          staticClass: "md-chip",
          class: [_vm.$mdActiveTheme, _vm.chipClasses],
          attrs: { tabindex: "0" }
        },
        _vm.$listeners
      ),
      [
        _vm.mdClickable || !_vm.mdRipple
          ? _c(
              "md-ripple",
              { attrs: { "md-disabled": _vm.mdDisabled } },
              [_vm._t("default")],
              2
            )
          : _vm._t("default"),
        _vm._v(" "),
        _c(
          "transition",
          { attrs: { name: "md-input-action", appear: "" } },
          [
            _vm.mdDeletable
              ? _c(
                  "md-button",
                  {
                    staticClass:
                      "md-icon-button md-dense md-input-action md-clear",
                    attrs: { tabindex: "-1" },
                    on: {
                      click: function($event) {
                        _vm.$emit("md-delete", $event)
                      }
                    }
                  },
                  [_c("md-clear-icon")],
                  1
                )
              : _vm._e()
          ],
          1
        )
      ],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var MdChips_MdChip = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-84ba771c", esExports)
  }
}
// CONCATENATED MODULE: ./src/components/MdChips/MdChip.vue
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(159)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  MdChip_default.a,
  MdChips_MdChip,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/MdChips/MdChip.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-84ba771c", Component.options)
  } else {
    hotAPI.reload("data-v-84ba771c", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var components_MdChips_MdChip = __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 159 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MdComponent = __webpack_require__(2);

var _MdComponent2 = _interopRequireDefault(_MdComponent);

var _MdFocused = __webpack_require__(32);

var _MdFocused2 = _interopRequireDefault(_MdFocused);

var _MdRipple = __webpack_require__(19);

var _MdRipple2 = _interopRequireDefault(_MdRipple);

var _MdClearIcon = __webpack_require__(34);

var _MdClearIcon2 = _interopRequireDefault(_MdClearIcon);

var _MdButton = __webpack_require__(13);

var _MdButton2 = _interopRequireDefault(_MdButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _MdComponent2.default({
  name: 'MdChip',
  components: {
    MdButton: _MdButton2.default,
    MdClearIcon: _MdClearIcon2.default
  },
  mixins: [_MdFocused2.default, _MdRipple2.default],
  props: {
    mdDisabled: Boolean,
    mdDeletable: Boolean,
    mdClickable: Boolean
  },
  computed: {
    chipClasses: function chipClasses() {
      return {
        'md-disabled': this.mdDisabled,
        'md-deletable': this.mdDeletable,
        'md-clickable': this.mdClickable,
        'md-focused': this.mdHasFocus
      };
    }
  }
}); //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _material = __webpack_require__(1);

var _material2 = _interopRequireDefault(_material);

var _MdContent = __webpack_require__(35);

var _MdContent2 = _interopRequireDefault(_MdContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (Vue) {
  (0, _material2.default)(Vue);
  Vue.component(_MdContent2.default.name, _MdContent2.default);
};

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MdComponent = __webpack_require__(2);

var _MdComponent2 = _interopRequireDefault(_MdComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _MdComponent2.default({
  name: 'MdContent',
  props: {
    mdTag: {
      type: String,
      default: 'div'
    }
  },
  render: function render(createElement) {
    return createElement(this.mdTag, {
      staticClass: 'md-content',
      class: [this.$mdActiveTheme],
      attrs: this.$attrs,
      on: this.$listeners
    }, this.$slots.default);
  }
});

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _material = __webpack_require__(1);

var _material2 = _interopRequireDefault(_material);

var _MdDatepicker = __webpack_require__(164);

var _MdDatepicker2 = _interopRequireDefault(_MdDatepicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (Vue) {
  (0, _material2.default)(Vue);
  Vue.component(_MdDatepicker2.default.name, _MdDatepicker2.default);
};

/***/ }),
/* 164 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/components/MdDatepicker/MdDatepicker.vue
var MdDatepicker = __webpack_require__(166);
var MdDatepicker_default = /*#__PURE__*/__webpack_require__.n(MdDatepicker);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-37fe792f","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/components/MdDatepicker/MdDatepicker.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "md-field",
    { staticClass: "md-datepicker" },
    [
      _c("md-date-icon", {
        staticClass: "md-date-icon",
        nativeOn: {
          click: function($event) {
            _vm.toggleDialog($event)
          }
        }
      }),
      _vm._v(" "),
      _c("md-input", {
        ref: "input",
        attrs: { type: "date", pattern: "[0-9]{4}-[0-9]{2}-[0-9]{2}" },
        nativeOn: {
          focus: function($event) {
            _vm.onFocus($event)
          }
        },
        model: {
          value: _vm.modelDate,
          callback: function($$v) {
            _vm.modelDate = $$v
          },
          expression: "modelDate"
        }
      }),
      _vm._v(" "),
      _vm._t("default"),
      _vm._v(" "),
      _c(
        "keep-alive",
        [
          _vm.showDialog
            ? _c("md-datepicker-dialog", {
                attrs: {
                  "md-date": _vm.selectedDate,
                  "md-disabled-dates": _vm.mdDisabledDates
                },
                on: {
                  "update:mdDate": function($event) {
                    _vm.selectedDate = $event
                  },
                  "md-closed": _vm.toggleDialog
                }
              })
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c("md-overlay", {
        staticClass: "md-datepicker-overlay",
        attrs: { "md-fixed": "", "md-active": _vm.showDialog },
        on: { click: _vm.toggleDialog }
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var MdDatepicker_MdDatepicker = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-37fe792f", esExports)
  }
}
// CONCATENATED MODULE: ./src/components/MdDatepicker/MdDatepicker.vue
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(165)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  MdDatepicker_default.a,
  MdDatepicker_MdDatepicker,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/MdDatepicker/MdDatepicker.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-37fe792f", Component.options)
  } else {
    hotAPI.reload("data-v-37fe792f", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var components_MdDatepicker_MdDatepicker = __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 165 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = __webpack_require__(7);

var _vue2 = _interopRequireDefault(_vue);

var _isFirefox = __webpack_require__(167);

var _isFirefox2 = _interopRequireDefault(_isFirefox);

var _format = __webpack_require__(168);

var _format2 = _interopRequireDefault(_format);

var _parse = __webpack_require__(3);

var _parse2 = _interopRequireDefault(_parse);

var _is_valid = __webpack_require__(38);

var _is_valid2 = _interopRequireDefault(_is_valid);

var _MdOverlay = __webpack_require__(23);

var _MdOverlay2 = _interopRequireDefault(_MdOverlay);

var _MdDatepickerDialog = __webpack_require__(181);

var _MdDatepickerDialog2 = _interopRequireDefault(_MdDatepickerDialog);

var _MdDateIcon = __webpack_require__(205);

var _MdDateIcon2 = _interopRequireDefault(_MdDateIcon);

var _MdField = __webpack_require__(20);

var _MdField2 = _interopRequireDefault(_MdField);

var _MdInput = __webpack_require__(14);

var _MdInput2 = _interopRequireDefault(_MdInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  name: 'MdDatepicker',
  components: {
    MdOverlay: _MdOverlay2.default,
    MdDateIcon: _MdDateIcon2.default,
    MdField: _MdField2.default,
    MdInput: _MdInput2.default,
    MdDatepickerDialog: _MdDatepickerDialog2.default
  },
  props: {
    value: [String, Date],
    mdDisabledDates: [Array, Function],
    mdOpenOnFocus: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      showDialog: false,
      modelDate: null,
      selectedDate: null
    };
  },
  watch: {
    selectedDate: function selectedDate(_selectedDate) {
      if (_selectedDate) {
        this.modelDate = this.dateToHTMLString(_selectedDate);
        this.$emit('input', _selectedDate);
      }
    },
    value: function value() {
      if (this.value) {
        this.modelDate = this.dateToHTMLString(this.value);
      }
    },
    modelDate: function modelDate(value) {
      if (value) {
        var parsedDate = (0, _parse2.default)(value);

        if ((0, _is_valid2.default)(parsedDate)) {
          this.selectedDate = parsedDate;
        }
      }
    }
  },
  methods: {
    toggleDialog: function toggleDialog() {
      if (!_isFirefox2.default) {
        this.showDialog = !this.showDialog;
      } else {
        this.$refs.input.$el.click();
      }
    },
    onFocus: function onFocus() {
      if (this.mdOpenOnFocus) {
        this.toggleDialog();
      }
    },
    dateToHTMLString: function dateToHTMLString(date) {
      if (date) {
        var formattedDate = null;

        try {
          formattedDate = (0, _format2.default)(date, 'YYYY-MM-DD');
        } catch (error) {
          _vue2.default.util.warn('The datepicker value is not a valid date. Given value: ' + date + '.', this);
        }

        return formattedDate;
      }
    }
  },
  created: function created() {
    this.modelDate = this.dateToHTMLString(this.value);
    this.selectedDate = this.value;
  }
};

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = typeof navigator !== 'undefined' && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent);


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

var getDayOfYear = __webpack_require__(169)
var getISOWeek = __webpack_require__(172)
var getISOYear = __webpack_require__(37)
var parse = __webpack_require__(3)
var isValid = __webpack_require__(38)
var enLocale = __webpack_require__(175)

/**
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format.
 *
 * Accepted tokens:
 * | Unit                    | Token | Result examples                  |
 * |-------------------------|-------|----------------------------------|
 * | Month                   | M     | 1, 2, ..., 12                    |
 * |                         | Mo    | 1st, 2nd, ..., 12th              |
 * |                         | MM    | 01, 02, ..., 12                  |
 * |                         | MMM   | Jan, Feb, ..., Dec               |
 * |                         | MMMM  | January, February, ..., December |
 * | Quarter                 | Q     | 1, 2, 3, 4                       |
 * |                         | Qo    | 1st, 2nd, 3rd, 4th               |
 * | Day of month            | D     | 1, 2, ..., 31                    |
 * |                         | Do    | 1st, 2nd, ..., 31st              |
 * |                         | DD    | 01, 02, ..., 31                  |
 * | Day of year             | DDD   | 1, 2, ..., 366                   |
 * |                         | DDDo  | 1st, 2nd, ..., 366th             |
 * |                         | DDDD  | 001, 002, ..., 366               |
 * | Day of week             | d     | 0, 1, ..., 6                     |
 * |                         | do    | 0th, 1st, ..., 6th               |
 * |                         | dd    | Su, Mo, ..., Sa                  |
 * |                         | ddd   | Sun, Mon, ..., Sat               |
 * |                         | dddd  | Sunday, Monday, ..., Saturday    |
 * | Day of ISO week         | E     | 1, 2, ..., 7                     |
 * | ISO week                | W     | 1, 2, ..., 53                    |
 * |                         | Wo    | 1st, 2nd, ..., 53rd              |
 * |                         | WW    | 01, 02, ..., 53                  |
 * | Year                    | YY    | 00, 01, ..., 99                  |
 * |                         | YYYY  | 1900, 1901, ..., 2099            |
 * | ISO week-numbering year | GG    | 00, 01, ..., 99                  |
 * |                         | GGGG  | 1900, 1901, ..., 2099            |
 * | AM/PM                   | A     | AM, PM                           |
 * |                         | a     | am, pm                           |
 * |                         | aa    | a.m., p.m.                       |
 * | Hour                    | H     | 0, 1, ... 23                     |
 * |                         | HH    | 00, 01, ... 23                   |
 * |                         | h     | 1, 2, ..., 12                    |
 * |                         | hh    | 01, 02, ..., 12                  |
 * | Minute                  | m     | 0, 1, ..., 59                    |
 * |                         | mm    | 00, 01, ..., 59                  |
 * | Second                  | s     | 0, 1, ..., 59                    |
 * |                         | ss    | 00, 01, ..., 59                  |
 * | 1/10 of second          | S     | 0, 1, ..., 9                     |
 * | 1/100 of second         | SS    | 00, 01, ..., 99                  |
 * | Millisecond             | SSS   | 000, 001, ..., 999               |
 * | Timezone                | Z     | -01:00, +00:00, ... +12:00       |
 * |                         | ZZ    | -0100, +0000, ..., +1200         |
 * | Seconds timestamp       | X     | 512969520                        |
 * | Milliseconds timestamp  | x     | 512969520900                     |
 *
 * The characters wrapped in square brackets are escaped.
 *
 * The result may vary by locale.
 *
 * @param {Date|String|Number} date - the original date
 * @param {String} [format='YYYY-MM-DDTHH:mm:ss.SSSZ'] - the string of tokens
 * @param {Object} [options] - the object with options
 * @param {Object} [options.locale=enLocale] - the locale object
 * @returns {String} the formatted date string
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * var result = format(
 *   new Date(2014, 1, 11),
 *   'MM/DD/YYYY'
 * )
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * var eoLocale = require('date-fns/locale/eo')
 * var result = format(
 *   new Date(2014, 6, 2),
 *   'Do [de] MMMM YYYY',
 *   {locale: eoLocale}
 * )
 * //=> '2-a de julio 2014'
 */
function format (dirtyDate, dirtyFormatStr, dirtyOptions) {
  var formatStr = dirtyFormatStr ? String(dirtyFormatStr) : 'YYYY-MM-DDTHH:mm:ss.SSSZ'
  var options = dirtyOptions || {}

  var locale = options.locale
  var localeFormatters = enLocale.format.formatters
  var formattingTokensRegExp = enLocale.format.formattingTokensRegExp
  if (locale && locale.format && locale.format.formatters) {
    localeFormatters = locale.format.formatters

    if (locale.format.formattingTokensRegExp) {
      formattingTokensRegExp = locale.format.formattingTokensRegExp
    }
  }

  var date = parse(dirtyDate)

  if (!isValid(date)) {
    return 'Invalid Date'
  }

  var formatFn = buildFormatFn(formatStr, localeFormatters, formattingTokensRegExp)

  return formatFn(date)
}

var formatters = {
  // Month: 1, 2, ..., 12
  'M': function (date) {
    return date.getMonth() + 1
  },

  // Month: 01, 02, ..., 12
  'MM': function (date) {
    return addLeadingZeros(date.getMonth() + 1, 2)
  },

  // Quarter: 1, 2, 3, 4
  'Q': function (date) {
    return Math.ceil((date.getMonth() + 1) / 3)
  },

  // Day of month: 1, 2, ..., 31
  'D': function (date) {
    return date.getDate()
  },

  // Day of month: 01, 02, ..., 31
  'DD': function (date) {
    return addLeadingZeros(date.getDate(), 2)
  },

  // Day of year: 1, 2, ..., 366
  'DDD': function (date) {
    return getDayOfYear(date)
  },

  // Day of year: 001, 002, ..., 366
  'DDDD': function (date) {
    return addLeadingZeros(getDayOfYear(date), 3)
  },

  // Day of week: 0, 1, ..., 6
  'd': function (date) {
    return date.getDay()
  },

  // Day of ISO week: 1, 2, ..., 7
  'E': function (date) {
    return date.getDay() || 7
  },

  // ISO week: 1, 2, ..., 53
  'W': function (date) {
    return getISOWeek(date)
  },

  // ISO week: 01, 02, ..., 53
  'WW': function (date) {
    return addLeadingZeros(getISOWeek(date), 2)
  },

  // Year: 00, 01, ..., 99
  'YY': function (date) {
    return addLeadingZeros(date.getFullYear(), 4).substr(2)
  },

  // Year: 1900, 1901, ..., 2099
  'YYYY': function (date) {
    return addLeadingZeros(date.getFullYear(), 4)
  },

  // ISO week-numbering year: 00, 01, ..., 99
  'GG': function (date) {
    return String(getISOYear(date)).substr(2)
  },

  // ISO week-numbering year: 1900, 1901, ..., 2099
  'GGGG': function (date) {
    return getISOYear(date)
  },

  // Hour: 0, 1, ... 23
  'H': function (date) {
    return date.getHours()
  },

  // Hour: 00, 01, ..., 23
  'HH': function (date) {
    return addLeadingZeros(date.getHours(), 2)
  },

  // Hour: 1, 2, ..., 12
  'h': function (date) {
    var hours = date.getHours()
    if (hours === 0) {
      return 12
    } else if (hours > 12) {
      return hours % 12
    } else {
      return hours
    }
  },

  // Hour: 01, 02, ..., 12
  'hh': function (date) {
    return addLeadingZeros(formatters['h'](date), 2)
  },

  // Minute: 0, 1, ..., 59
  'm': function (date) {
    return date.getMinutes()
  },

  // Minute: 00, 01, ..., 59
  'mm': function (date) {
    return addLeadingZeros(date.getMinutes(), 2)
  },

  // Second: 0, 1, ..., 59
  's': function (date) {
    return date.getSeconds()
  },

  // Second: 00, 01, ..., 59
  'ss': function (date) {
    return addLeadingZeros(date.getSeconds(), 2)
  },

  // 1/10 of second: 0, 1, ..., 9
  'S': function (date) {
    return Math.floor(date.getMilliseconds() / 100)
  },

  // 1/100 of second: 00, 01, ..., 99
  'SS': function (date) {
    return addLeadingZeros(Math.floor(date.getMilliseconds() / 10), 2)
  },

  // Millisecond: 000, 001, ..., 999
  'SSS': function (date) {
    return addLeadingZeros(date.getMilliseconds(), 3)
  },

  // Timezone: -01:00, +00:00, ... +12:00
  'Z': function (date) {
    return formatTimezone(date.getTimezoneOffset(), ':')
  },

  // Timezone: -0100, +0000, ... +1200
  'ZZ': function (date) {
    return formatTimezone(date.getTimezoneOffset())
  },

  // Seconds timestamp: 512969520
  'X': function (date) {
    return Math.floor(date.getTime() / 1000)
  },

  // Milliseconds timestamp: 512969520900
  'x': function (date) {
    return date.getTime()
  }
}

function buildFormatFn (formatStr, localeFormatters, formattingTokensRegExp) {
  var array = formatStr.match(formattingTokensRegExp)
  var length = array.length

  var i
  var formatter
  for (i = 0; i < length; i++) {
    formatter = localeFormatters[array[i]] || formatters[array[i]]
    if (formatter) {
      array[i] = formatter
    } else {
      array[i] = removeFormattingTokens(array[i])
    }
  }

  return function (date) {
    var output = ''
    for (var i = 0; i < length; i++) {
      if (array[i] instanceof Function) {
        output += array[i](date, formatters)
      } else {
        output += array[i]
      }
    }
    return output
  }
}

function removeFormattingTokens (input) {
  if (input.match(/\[[\s\S]/)) {
    return input.replace(/^\[|]$/g, '')
  }
  return input.replace(/\\/g, '')
}

function formatTimezone (offset, delimeter) {
  delimeter = delimeter || ''
  var sign = offset > 0 ? '-' : '+'
  var absOffset = Math.abs(offset)
  var hours = Math.floor(absOffset / 60)
  var minutes = absOffset % 60
  return sign + addLeadingZeros(hours, 2) + delimeter + addLeadingZeros(minutes, 2)
}

function addLeadingZeros (number, targetLength) {
  var output = Math.abs(number).toString()
  while (output.length < targetLength) {
    output = '0' + output
  }
  return output
}

module.exports = format


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(3)
var startOfYear = __webpack_require__(170)
var differenceInCalendarDays = __webpack_require__(171)

/**
 * @category Day Helpers
 * @summary Get the day of the year of the given date.
 *
 * @description
 * Get the day of the year of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the day of year
 *
 * @example
 * // Which day of the year is 2 July 2014?
 * var result = getDayOfYear(new Date(2014, 6, 2))
 * //=> 183
 */
function getDayOfYear (dirtyDate) {
  var date = parse(dirtyDate)
  var diff = differenceInCalendarDays(date, startOfYear(date))
  var dayOfYear = diff + 1
  return dayOfYear
}

module.exports = getDayOfYear


/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(3)

/**
 * @category Year Helpers
 * @summary Return the start of a year for the given date.
 *
 * @description
 * Return the start of a year for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the start of a year
 *
 * @example
 * // The start of a year for 2 September 2014 11:55:00:
 * var result = startOfYear(new Date(2014, 8, 2, 11, 55, 00))
 * //=> Wed Jan 01 2014 00:00:00
 */
function startOfYear (dirtyDate) {
  var cleanDate = parse(dirtyDate)
  var date = new Date(0)
  date.setFullYear(cleanDate.getFullYear(), 0, 1)
  date.setHours(0, 0, 0, 0)
  return date
}

module.exports = startOfYear


/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

var startOfDay = __webpack_require__(21)

var MILLISECONDS_IN_MINUTE = 60000
var MILLISECONDS_IN_DAY = 86400000

/**
 * @category Day Helpers
 * @summary Get the number of calendar days between the given dates.
 *
 * @description
 * Get the number of calendar days between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar days
 *
 * @example
 * // How many calendar days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * var result = differenceInCalendarDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 366
 */
function differenceInCalendarDays (dirtyDateLeft, dirtyDateRight) {
  var startOfDayLeft = startOfDay(dirtyDateLeft)
  var startOfDayRight = startOfDay(dirtyDateRight)

  var timestampLeft = startOfDayLeft.getTime() -
    startOfDayLeft.getTimezoneOffset() * MILLISECONDS_IN_MINUTE
  var timestampRight = startOfDayRight.getTime() -
    startOfDayRight.getTimezoneOffset() * MILLISECONDS_IN_MINUTE

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a day is not constant
  // (e.g. it's different in the day of the daylight saving time clock shift)
  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_DAY)
}

module.exports = differenceInCalendarDays


/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(3)
var startOfISOWeek = __webpack_require__(22)
var startOfISOYear = __webpack_require__(174)

var MILLISECONDS_IN_WEEK = 604800000

/**
 * @category ISO Week Helpers
 * @summary Get the ISO week of the given date.
 *
 * @description
 * Get the ISO week of the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the ISO week
 *
 * @example
 * // Which week of the ISO-week numbering year is 2 January 2005?
 * var result = getISOWeek(new Date(2005, 0, 2))
 * //=> 53
 */
function getISOWeek (dirtyDate) {
  var date = parse(dirtyDate)
  var diff = startOfISOWeek(date).getTime() - startOfISOYear(date).getTime()

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1
}

module.exports = getISOWeek


/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(3)

/**
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @param {Object} [options] - the object with options
 * @param {Number} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the start of a week
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * var result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * var result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), {weekStartsOn: 1})
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfWeek (dirtyDate, dirtyOptions) {
  var weekStartsOn = dirtyOptions ? (Number(dirtyOptions.weekStartsOn) || 0) : 0

  var date = parse(dirtyDate)
  var day = date.getDay()
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn

  date.setDate(date.getDate() - diff)
  date.setHours(0, 0, 0, 0)
  return date
}

module.exports = startOfWeek


/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

var getISOYear = __webpack_require__(37)
var startOfISOWeek = __webpack_require__(22)

/**
 * @category ISO Week-Numbering Year Helpers
 * @summary Return the start of an ISO week-numbering year for the given date.
 *
 * @description
 * Return the start of an ISO week-numbering year,
 * which always starts 3 days before the year's first Thursday.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the start of an ISO year
 *
 * @example
 * // The start of an ISO week-numbering year for 2 July 2005:
 * var result = startOfISOYear(new Date(2005, 6, 2))
 * //=> Mon Jan 03 2005 00:00:00
 */
function startOfISOYear (dirtyDate) {
  var year = getISOYear(dirtyDate)
  var fourthOfJanuary = new Date(0)
  fourthOfJanuary.setFullYear(year, 0, 4)
  fourthOfJanuary.setHours(0, 0, 0, 0)
  var date = startOfISOWeek(fourthOfJanuary)
  return date
}

module.exports = startOfISOYear


/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

var buildDistanceInWordsLocale = __webpack_require__(176)
var buildFormatLocale = __webpack_require__(177)

/**
 * @category Locales
 * @summary English locale.
 */
module.exports = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}


/***/ }),
/* 176 */
/***/ (function(module, exports) {

function buildDistanceInWordsLocale () {
  var distanceInWordsLocale = {
    lessThanXSeconds: {
      one: 'less than a second',
      other: 'less than {{count}} seconds'
    },

    xSeconds: {
      one: '1 second',
      other: '{{count}} seconds'
    },

    halfAMinute: 'half a minute',

    lessThanXMinutes: {
      one: 'less than a minute',
      other: 'less than {{count}} minutes'
    },

    xMinutes: {
      one: '1 minute',
      other: '{{count}} minutes'
    },

    aboutXHours: {
      one: 'about 1 hour',
      other: 'about {{count}} hours'
    },

    xHours: {
      one: '1 hour',
      other: '{{count}} hours'
    },

    xDays: {
      one: '1 day',
      other: '{{count}} days'
    },

    aboutXMonths: {
      one: 'about 1 month',
      other: 'about {{count}} months'
    },

    xMonths: {
      one: '1 month',
      other: '{{count}} months'
    },

    aboutXYears: {
      one: 'about 1 year',
      other: 'about {{count}} years'
    },

    xYears: {
      one: '1 year',
      other: '{{count}} years'
    },

    overXYears: {
      one: 'over 1 year',
      other: 'over {{count}} years'
    },

    almostXYears: {
      one: 'almost 1 year',
      other: 'almost {{count}} years'
    }
  }

  function localize (token, count, options) {
    options = options || {}

    var result
    if (typeof distanceInWordsLocale[token] === 'string') {
      result = distanceInWordsLocale[token]
    } else if (count === 1) {
      result = distanceInWordsLocale[token].one
    } else {
      result = distanceInWordsLocale[token].other.replace('{{count}}', count)
    }

    if (options.addSuffix) {
      if (options.comparison > 0) {
        return 'in ' + result
      } else {
        return result + ' ago'
      }
    }

    return result
  }

  return {
    localize: localize
  }
}

module.exports = buildDistanceInWordsLocale


/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

var buildFormattingTokensRegExp = __webpack_require__(178)

function buildFormatLocale () {
  // Note: in English, the names of days of the week and months are capitalized.
  // If you are making a new locale based on this one, check if the same is true for the language you're working on.
  // Generally, formatted dates should look like they are in the middle of a sentence,
  // e.g. in Spanish language the weekdays and months should be in the lowercase.
  var months3char = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  var monthsFull = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  var weekdays2char = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
  var weekdays3char = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  var weekdaysFull = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  var meridiemUppercase = ['AM', 'PM']
  var meridiemLowercase = ['am', 'pm']
  var meridiemFull = ['a.m.', 'p.m.']

  var formatters = {
    // Month: Jan, Feb, ..., Dec
    'MMM': function (date) {
      return months3char[date.getMonth()]
    },

    // Month: January, February, ..., December
    'MMMM': function (date) {
      return monthsFull[date.getMonth()]
    },

    // Day of week: Su, Mo, ..., Sa
    'dd': function (date) {
      return weekdays2char[date.getDay()]
    },

    // Day of week: Sun, Mon, ..., Sat
    'ddd': function (date) {
      return weekdays3char[date.getDay()]
    },

    // Day of week: Sunday, Monday, ..., Saturday
    'dddd': function (date) {
      return weekdaysFull[date.getDay()]
    },

    // AM, PM
    'A': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemUppercase[1] : meridiemUppercase[0]
    },

    // am, pm
    'a': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemLowercase[1] : meridiemLowercase[0]
    },

    // a.m., p.m.
    'aa': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemFull[1] : meridiemFull[0]
    }
  }

  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
  ordinalFormatters.forEach(function (formatterToken) {
    formatters[formatterToken + 'o'] = function (date, formatters) {
      return ordinal(formatters[formatterToken](date))
    }
  })

  return {
    formatters: formatters,
    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
  }
}

function ordinal (number) {
  var rem100 = number % 100
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st'
      case 2:
        return number + 'nd'
      case 3:
        return number + 'rd'
    }
  }
  return number + 'th'
}

module.exports = buildFormatLocale


/***/ }),
/* 178 */
/***/ (function(module, exports) {

var commonFormatterKeys = [
  'M', 'MM', 'Q', 'D', 'DD', 'DDD', 'DDDD', 'd',
  'E', 'W', 'WW', 'YY', 'YYYY', 'GG', 'GGGG',
  'H', 'HH', 'h', 'hh', 'm', 'mm',
  's', 'ss', 'S', 'SS', 'SSS',
  'Z', 'ZZ', 'X', 'x'
]

function buildFormattingTokensRegExp (formatters) {
  var formatterKeys = []
  for (var key in formatters) {
    if (formatters.hasOwnProperty(key)) {
      formatterKeys.push(key)
    }
  }

  var formattingTokens = commonFormatterKeys
    .concat(formatterKeys)
    .sort()
    .reverse()
  var formattingTokensRegExp = new RegExp(
    '(\\[[^\\[]*\\])|(\\\\)?' + '(' + formattingTokens.join('|') + '|.)', 'g'
  )

  return formattingTokensRegExp
}

module.exports = buildFormattingTokensRegExp


/***/ }),
/* 179 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MdPortal = __webpack_require__(16);

var _MdPortal2 = _interopRequireDefault(_MdPortal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'MdOverlay',
  components: {
    MdPortal: _MdPortal2.default
  },
  props: {
    mdActive: Boolean,
    mdAttachToParent: Boolean,
    mdFixed: Boolean
  },
  computed: {
    overlayClasses: function overlayClasses() {
      return {
        'md-fixed': this.mdFixed
      };
    }
  }
}; //
//
//
//
//
//
//
//

/***/ }),
/* 181 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/components/MdDatepicker/MdDatepickerDialog.vue
var MdDatepickerDialog = __webpack_require__(183);
var MdDatepickerDialog_default = /*#__PURE__*/__webpack_require__.n(MdDatepickerDialog);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-4f0a3d52","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/components/MdDatepicker/MdDatepickerDialog.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "md-popover",
    { attrs: { "md-settings": _vm.popperSettings, "md-active": "" } },
    [
      _c(
        "transition",
        { attrs: { name: "md-datepicker-dialog", appear: "" } },
        [
          _c(
            "div",
            {
              staticClass: "md-datepicker-dialog",
              class: [_vm.$mdActiveTheme]
            },
            [
              _c("div", { staticClass: "md-datepicker-header" }, [
                _c(
                  "span",
                  {
                    staticClass: "md-datepicker-year-select",
                    class: { "md-selected": _vm.currentView === "year" },
                    on: {
                      click: function($event) {
                        _vm.currentView = "year"
                      }
                    }
                  },
                  [_vm._v(_vm._s(_vm.selectedYear))]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "md-datepicker-date-select",
                    class: { "md-selected": _vm.currentView !== "year" },
                    on: {
                      click: function($event) {
                        _vm.currentView = "day"
                      }
                    }
                  },
                  [
                    _c("strong", { staticClass: "md-datepicker-dayname" }, [
                      _vm._v(_vm._s(_vm.shortDayName) + ", ")
                    ]),
                    _vm._v(" "),
                    _c("strong", { staticClass: "md-datepicker-monthname" }, [
                      _vm._v(_vm._s(_vm.shortMonthName))
                    ]),
                    _vm._v(" "),
                    _c("strong", { staticClass: "md-datepicker-day" }, [
                      _vm._v(_vm._s(_vm.currentDay))
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "md-datepicker-body" },
                [
                  _c(
                    "transition",
                    { attrs: { name: "md-datepicker-body-header" } },
                    [
                      _vm.currentView === "day"
                        ? _c(
                            "div",
                            { staticClass: "md-datepicker-body-header" },
                            [
                              _c(
                                "md-button",
                                {
                                  staticClass: "md-dense md-icon-button",
                                  on: { click: _vm.previousMonth }
                                },
                                [_c("md-arrow-left-icon")],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "md-button",
                                {
                                  staticClass: "md-dense md-icon-button",
                                  on: { click: _vm.nextMonth }
                                },
                                [_c("md-arrow-right-icon")],
                                1
                              )
                            ],
                            1
                          )
                        : _vm._e()
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "md-datepicker-body-content",
                      style: _vm.contentStyles
                    },
                    [
                      _c(
                        "transition",
                        { attrs: { name: "md-datepicker-view" } },
                        [
                          _vm.currentView === "day"
                            ? _c(
                                "transition-group",
                                {
                                  staticClass:
                                    "md-datepicker-panel md-datepicker-calendar",
                                  class: _vm.calendarClasses,
                                  attrs: {
                                    tag: "div",
                                    name: "md-datepicker-month"
                                  }
                                },
                                _vm._l([_vm.currentDate], function(
                                  month,
                                  index
                                ) {
                                  return _c(
                                    "div",
                                    {
                                      key: month.getMonth(),
                                      staticClass:
                                        "md-datepicker-panel md-datepicker-month"
                                    },
                                    [
                                      _c(
                                        "md-button",
                                        {
                                          staticClass:
                                            "md-dense md-datepicker-month-trigger",
                                          on: {
                                            click: function($event) {
                                              _vm.currentView = "month"
                                            }
                                          }
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(_vm.currentMonthName) +
                                              " " +
                                              _vm._s(_vm.currentYear)
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "md-datepicker-week" },
                                        _vm._l(_vm.locale.shorterDays, function(
                                          day,
                                          index
                                        ) {
                                          return _c("span", { key: index }, [
                                            _vm._v(_vm._s(day))
                                          ])
                                        })
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "md-datepicker-days" },
                                        [
                                          _vm._l(_vm.firstDayOfMonth, function(
                                            day
                                          ) {
                                            return _c("span", {
                                              key: day,
                                              staticClass: "md-datepicker-empty"
                                            })
                                          }),
                                          _vm._v(" "),
                                          _vm._l(_vm.daysInMonth, function(
                                            day
                                          ) {
                                            return _c(
                                              "div",
                                              {
                                                key: day,
                                                staticClass: "md-datepicker-day"
                                              },
                                              [
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "md-datepicker-day-button",
                                                    class: {
                                                      "md-datepicker-selected": _vm.isSelectedDay(
                                                        day
                                                      ),
                                                      "md-datepicker-today": _vm.isToday(
                                                        day
                                                      ),
                                                      "md-datepicker-disabled": _vm.isDisabled(
                                                        day
                                                      )
                                                    },
                                                    on: {
                                                      click: function($event) {
                                                        _vm.selectDate(day)
                                                      }
                                                    }
                                                  },
                                                  [_vm._v(_vm._s(day))]
                                                )
                                              ]
                                            )
                                          })
                                        ],
                                        2
                                      )
                                    ],
                                    1
                                  )
                                })
                              )
                            : _vm.currentView === "month"
                              ? _c(
                                  "div",
                                  {
                                    staticClass:
                                      "md-datepicker-panel md-datepicker-month-selector"
                                  },
                                  [
                                    _c(
                                      "md-button",
                                      {
                                        staticClass:
                                          "md-datepicker-year-trigger",
                                        on: {
                                          click: function($event) {
                                            _vm.currentView = "year"
                                          }
                                        }
                                      },
                                      [_vm._v(_vm._s(_vm.currentYear))]
                                    ),
                                    _vm._v(" "),
                                    _vm._l(_vm.locale.months, function(
                                      month,
                                      index
                                    ) {
                                      return _c(
                                        "span",
                                        {
                                          key: month,
                                          staticClass:
                                            "md-datepicker-month-button",
                                          class: {
                                            "md-datepicker-selected":
                                              _vm.currentMonthName === month
                                          },
                                          on: {
                                            click: function($event) {
                                              _vm.switchMonth(index)
                                            }
                                          }
                                        },
                                        [_vm._v(_vm._s(month))]
                                      )
                                    })
                                  ],
                                  2
                                )
                              : _vm.currentView === "year"
                                ? _c(
                                    "keep-alive",
                                    [
                                      _c(
                                        "md-content",
                                        {
                                          staticClass:
                                            "md-datepicker-panel md-datepicker-year-selector md-scrollbar"
                                        },
                                        _vm._l(_vm.availableYears, function(
                                          year
                                        ) {
                                          return _c(
                                            "span",
                                            {
                                              key: year,
                                              staticClass:
                                                "md-datepicker-year-button",
                                              class: {
                                                "md-datepicker-selected":
                                                  _vm.currentYear === year
                                              },
                                              on: {
                                                click: function($event) {
                                                  _vm.switchYear(year)
                                                }
                                              }
                                            },
                                            [_vm._v(_vm._s(year))]
                                          )
                                        })
                                      )
                                    ],
                                    1
                                  )
                                : _vm._e()
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "md-dialog-actions",
                    { staticClass: "md-datepicker-body-footer" },
                    [
                      _c(
                        "md-button",
                        {
                          staticClass: "md-primary",
                          on: { click: _vm.onCancel }
                        },
                        [_vm._v("Cancel")]
                      ),
                      _vm._v(" "),
                      _c(
                        "md-button",
                        {
                          staticClass: "md-primary",
                          on: { click: _vm.onConfirm }
                        },
                        [_vm._v("Ok")]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ]
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var MdDatepicker_MdDatepickerDialog = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4f0a3d52", esExports)
  }
}
// CONCATENATED MODULE: ./src/components/MdDatepicker/MdDatepickerDialog.vue
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(182)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  MdDatepickerDialog_default.a,
  MdDatepicker_MdDatepickerDialog,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/MdDatepicker/MdDatepickerDialog.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4f0a3d52", Component.options)
  } else {
    hotAPI.reload("data-v-4f0a3d52", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var components_MdDatepicker_MdDatepickerDialog = __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 182 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _add_months = __webpack_require__(39);

var _add_months2 = _interopRequireDefault(_add_months);

var _start_of_month = __webpack_require__(184);

var _start_of_month2 = _interopRequireDefault(_start_of_month);

var _sub_months = __webpack_require__(185);

var _sub_months2 = _interopRequireDefault(_sub_months);

var _get_date = __webpack_require__(186);

var _get_date2 = _interopRequireDefault(_get_date);

var _get_day = __webpack_require__(187);

var _get_day2 = _interopRequireDefault(_get_day);

var _get_days_in_month = __webpack_require__(24);

var _get_days_in_month2 = _interopRequireDefault(_get_days_in_month);

var _get_month = __webpack_require__(188);

var _get_month2 = _interopRequireDefault(_get_month);

var _get_year = __webpack_require__(189);

var _get_year2 = _interopRequireDefault(_get_year);

var _is_equal = __webpack_require__(190);

var _is_equal2 = _interopRequireDefault(_is_equal);

var _is_same_day = __webpack_require__(191);

var _is_same_day2 = _interopRequireDefault(_is_same_day);

var _is_today = __webpack_require__(192);

var _is_today2 = _interopRequireDefault(_is_today);

var _set_date = __webpack_require__(193);

var _set_date2 = _interopRequireDefault(_set_date);

var _set_month = __webpack_require__(194);

var _set_month2 = _interopRequireDefault(_set_month);

var _set_year = __webpack_require__(195);

var _set_year2 = _interopRequireDefault(_set_year);

var _MdComponent = __webpack_require__(2);

var _MdComponent2 = _interopRequireDefault(_MdComponent);

var _MdPopover = __webpack_require__(25);

var _MdPopover2 = _interopRequireDefault(_MdPopover);

var _MdArrowRightIcon = __webpack_require__(199);

var _MdArrowRightIcon2 = _interopRequireDefault(_MdArrowRightIcon);

var _MdArrowLeftIcon = __webpack_require__(201);

var _MdArrowLeftIcon2 = _interopRequireDefault(_MdArrowLeftIcon);

var _MdDialog = __webpack_require__(10);

var _MdDialog2 = _interopRequireDefault(_MdDialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var getElements = function getElements(el, selector) {
  if (el && el.querySelector) {
    return el.querySelectorAll(selector);
  }

  return false;
};

exports.default = new _MdComponent2.default({
  name: 'MdDatepickerDialog',
  components: {
    MdPopover: _MdPopover2.default,
    MdArrowRightIcon: _MdArrowRightIcon2.default,
    MdArrowLeftIcon: _MdArrowLeftIcon2.default,
    MdDialog: _MdDialog2.default
  },
  props: {
    mdDate: Date,
    mdDisabledDates: [Array, Function]
  },
  data: function data() {
    return {
      currentDate: null,
      selectedDate: null,
      showDialog: false,
      monthAction: null,
      currentView: 'day',
      contentStyles: {},
      availableYears: null
    };
  },
  computed: {
    locale: function locale() {
      return this.$material.locale;
    },
    popperSettings: function popperSettings() {
      return {
        placement: 'bottom-start',
        modifiers: {
          keepTogether: {
            enabled: true
          },
          flip: {
            enabled: false
          }
        }
      };
    },
    calendarClasses: function calendarClasses() {
      if (this.monthAction === 'next') {
        return 'md-next';
      }

      return 'md-previous';
    },
    firstDayOfMonth: function firstDayOfMonth() {
      return (0, _start_of_month2.default)(this.currentDate).getDay();
    },
    daysInMonth: function daysInMonth() {
      return (0, _get_days_in_month2.default)(this.currentDate);
    },
    currentDay: function currentDay() {
      if (this.selectedDate) {
        return (0, _get_date2.default)(this.selectedDate);
      }

      return (0, _get_date2.default)(this.currentDate);
    },
    currentMonth: function currentMonth() {
      return (0, _get_month2.default)(this.currentDate);
    },
    currentMonthName: function currentMonthName() {
      return this.locale.months[this.currentMonth];
    },
    currentYear: function currentYear() {
      return (0, _get_year2.default)(this.currentDate);
    },
    selectedYear: function selectedYear() {
      if (this.selectedDate) {
        return (0, _get_year2.default)(this.selectedDate);
      }

      return (0, _get_year2.default)(this.currentDate);
    },
    shortDayName: function shortDayName() {
      if (this.selectedDate) {
        return this.locale.shortDays[(0, _get_day2.default)(this.selectedDate)];
      }

      return this.locale.shortDays[(0, _get_day2.default)(this.currentDate)];
    },
    shortMonthName: function shortMonthName() {
      if (this.selectedDate) {
        return this.locale.shortMonths[(0, _get_month2.default)(this.selectedDate)];
      }

      return this.locale.shortMonths[(0, _get_month2.default)(this.currentDate)];
    }
  },
  watch: {
    mdDate: function mdDate() {
      this.currentDate = this.mdDate || new Date();
      this.selectedDate = this.mdDate;
    },
    currentDate: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(next, previous) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.$nextTick();

              case 2:

                if (previous) {
                  this.setContentStyles();
                }

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function currentDate(_x, _x2) {
        return _ref.apply(this, arguments);
      }

      return currentDate;
    }(),
    currentView: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var activeYear;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.$nextTick();

              case 2:

                if (this.currentView === 'year') {
                  activeYear = getElements(this.$el, '.md-datepicker-year-button.md-datepicker-selected');


                  if (activeYear.length) {
                    activeYear[0].scrollIntoView({
                      behavior: 'instant',
                      block: 'center',
                      inline: 'center'
                    });
                  }
                }

              case 3:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function currentView() {
        return _ref2.apply(this, arguments);
      }

      return currentView;
    }()
  },
  methods: {
    setContentStyles: function setContentStyles() {
      var months = getElements(this.$el, '.md-datepicker-month');

      if (months.length) {
        var nextMonth = months[months.length - 1];

        this.contentStyles = {
          height: nextMonth.offsetHeight + 10 + 'px'
        };
      }
    },
    setAvailableYears: function setAvailableYears() {
      var _locale = this.locale,
          startYear = _locale.startYear,
          endYear = _locale.endYear;

      var counter = startYear;
      var years = [];

      while (counter <= endYear) {
        years.push(counter++);
      }

      this.availableYears = years;
    },
    handleDisabledDateByArray: function handleDisabledDateByArray(date) {
      return this.mdDisabledDates.some(function (disabledDate) {
        return (0, _is_same_day2.default)(disabledDate, date);
      });
    },
    isDisabled: function isDisabled(day) {
      if (this.mdDisabledDates) {
        var targetDate = (0, _set_date2.default)(this.currentDate, day);

        if (Array.isArray(this.mdDisabledDates)) {
          return this.handleDisabledDateByArray(targetDate);
        } else if (typeof this.mdDisabledDates === 'function') {
          return this.mdDisabledDates(targetDate);
        }
      }
    },
    isSelectedDay: function isSelectedDay(day) {
      return (0, _is_equal2.default)(this.selectedDate, (0, _set_date2.default)(this.currentDate, day));
    },
    isToday: function isToday(day) {
      return (0, _is_today2.default)((0, _set_date2.default)(this.currentDate, day));
    },
    previousMonth: function previousMonth() {
      this.monthAction = 'previous';
      this.currentDate = (0, _sub_months2.default)(this.currentDate, 1);
    },
    nextMonth: function nextMonth() {
      this.monthAction = 'next';
      this.currentDate = (0, _add_months2.default)(this.currentDate, 1);
    },
    switchMonth: function switchMonth(index) {
      this.currentDate = (0, _set_month2.default)(this.currentDate, index);
      this.currentView = 'day';
    },
    switchYear: function switchYear(year) {
      this.currentDate = (0, _set_year2.default)(this.currentDate, year);
      this.currentView = 'month';
    },
    selectDate: function selectDate(day) {
      this.currentDate = (0, _set_date2.default)(this.currentDate, day);
      this.selectedDate = this.currentDate;
    },
    closeDialog: function closeDialog() {
      this.$emit('md-closed');
    },
    onClose: function onClose() {
      this.closeDialog();
    },
    onCancel: function onCancel() {
      this.closeDialog();
    },
    onConfirm: function onConfirm() {
      this.closeDialog();
      this.$emit('update:mdDate', this.selectedDate);
    }
  },
  created: function created() {
    var _this = this;

    this.setAvailableYears();
    this.currentDate = this.mdDate || new Date();
    this.selectedDate = this.mdDate;
    this.currentView = 'day';

    window.setTimeout(function () {
      _this.setContentStyles();
    }, 50);
  }
});

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(3)

/**
 * @category Month Helpers
 * @summary Return the start of a month for the given date.
 *
 * @description
 * Return the start of a month for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the start of a month
 *
 * @example
 * // The start of a month for 2 September 2014 11:55:00:
 * var result = startOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfMonth (dirtyDate) {
  var date = parse(dirtyDate)
  date.setDate(1)
  date.setHours(0, 0, 0, 0)
  return date
}

module.exports = startOfMonth


/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

var addMonths = __webpack_require__(39)

/**
 * @category Month Helpers
 * @summary Subtract the specified number of months from the given date.
 *
 * @description
 * Subtract the specified number of months from the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of months to be subtracted
 * @returns {Date} the new date with the months subtracted
 *
 * @example
 * // Subtract 5 months from 1 February 2015:
 * var result = subMonths(new Date(2015, 1, 1), 5)
 * //=> Mon Sep 01 2014 00:00:00
 */
function subMonths (dirtyDate, dirtyAmount) {
  var amount = Number(dirtyAmount)
  return addMonths(dirtyDate, -amount)
}

module.exports = subMonths


/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(3)

/**
 * @category Day Helpers
 * @summary Get the day of the month of the given date.
 *
 * @description
 * Get the day of the month of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the day of month
 *
 * @example
 * // Which day of the month is 29 February 2012?
 * var result = getDate(new Date(2012, 1, 29))
 * //=> 29
 */
function getDate (dirtyDate) {
  var date = parse(dirtyDate)
  var dayOfMonth = date.getDate()
  return dayOfMonth
}

module.exports = getDate


/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(3)

/**
 * @category Weekday Helpers
 * @summary Get the day of the week of the given date.
 *
 * @description
 * Get the day of the week of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the day of week
 *
 * @example
 * // Which day of the week is 29 February 2012?
 * var result = getDay(new Date(2012, 1, 29))
 * //=> 3
 */
function getDay (dirtyDate) {
  var date = parse(dirtyDate)
  var day = date.getDay()
  return day
}

module.exports = getDay


/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(3)

/**
 * @category Month Helpers
 * @summary Get the month of the given date.
 *
 * @description
 * Get the month of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the month
 *
 * @example
 * // Which month is 29 February 2012?
 * var result = getMonth(new Date(2012, 1, 29))
 * //=> 1
 */
function getMonth (dirtyDate) {
  var date = parse(dirtyDate)
  var month = date.getMonth()
  return month
}

module.exports = getMonth


/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(3)

/**
 * @category Year Helpers
 * @summary Get the year of the given date.
 *
 * @description
 * Get the year of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the year
 *
 * @example
 * // Which year is 2 July 2014?
 * var result = getYear(new Date(2014, 6, 2))
 * //=> 2014
 */
function getYear (dirtyDate) {
  var date = parse(dirtyDate)
  var year = date.getFullYear()
  return year
}

module.exports = getYear


/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(3)

/**
 * @category Common Helpers
 * @summary Are the given dates equal?
 *
 * @description
 * Are the given dates equal?
 *
 * @param {Date|String|Number} dateLeft - the first date to compare
 * @param {Date|String|Number} dateRight - the second date to compare
 * @returns {Boolean} the dates are equal
 *
 * @example
 * // Are 2 July 2014 06:30:45.000 and 2 July 2014 06:30:45.500 equal?
 * var result = isEqual(
 *   new Date(2014, 6, 2, 6, 30, 45, 0)
 *   new Date(2014, 6, 2, 6, 30, 45, 500)
 * )
 * //=> false
 */
function isEqual (dirtyLeftDate, dirtyRightDate) {
  var dateLeft = parse(dirtyLeftDate)
  var dateRight = parse(dirtyRightDate)
  return dateLeft.getTime() === dateRight.getTime()
}

module.exports = isEqual


/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

var startOfDay = __webpack_require__(21)

/**
 * @category Day Helpers
 * @summary Are the given dates in the same day?
 *
 * @description
 * Are the given dates in the same day?
 *
 * @param {Date|String|Number} dateLeft - the first date to check
 * @param {Date|String|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same day
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * var result = isSameDay(
 *   new Date(2014, 8, 4, 6, 0),
 *   new Date(2014, 8, 4, 18, 0)
 * )
 * //=> true
 */
function isSameDay (dirtyDateLeft, dirtyDateRight) {
  var dateLeftStartOfDay = startOfDay(dirtyDateLeft)
  var dateRightStartOfDay = startOfDay(dirtyDateRight)

  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime()
}

module.exports = isSameDay


/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

var startOfDay = __webpack_require__(21)

/**
 * @category Day Helpers
 * @summary Is the given date today?
 *
 * @description
 * Is the given date today?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is today
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * var result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */
function isToday (dirtyDate) {
  return startOfDay(dirtyDate).getTime() === startOfDay(new Date()).getTime()
}

module.exports = isToday


/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(3)

/**
 * @category Day Helpers
 * @summary Set the day of the month to the given date.
 *
 * @description
 * Set the day of the month to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} dayOfMonth - the day of the month of the new date
 * @returns {Date} the new date with the day of the month setted
 *
 * @example
 * // Set the 30th day of the month to 1 September 2014:
 * var result = setDate(new Date(2014, 8, 1), 30)
 * //=> Tue Sep 30 2014 00:00:00
 */
function setDate (dirtyDate, dirtyDayOfMonth) {
  var date = parse(dirtyDate)
  var dayOfMonth = Number(dirtyDayOfMonth)
  date.setDate(dayOfMonth)
  return date
}

module.exports = setDate


/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(3)
var getDaysInMonth = __webpack_require__(24)

/**
 * @category Month Helpers
 * @summary Set the month to the given date.
 *
 * @description
 * Set the month to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} month - the month of the new date
 * @returns {Date} the new date with the month setted
 *
 * @example
 * // Set February to 1 September 2014:
 * var result = setMonth(new Date(2014, 8, 1), 1)
 * //=> Sat Feb 01 2014 00:00:00
 */
function setMonth (dirtyDate, dirtyMonth) {
  var date = parse(dirtyDate)
  var month = Number(dirtyMonth)
  var year = date.getFullYear()
  var day = date.getDate()

  var dateWithDesiredMonth = new Date(0)
  dateWithDesiredMonth.setFullYear(year, month, 15)
  dateWithDesiredMonth.setHours(0, 0, 0, 0)
  var daysInMonth = getDaysInMonth(dateWithDesiredMonth)
  // Set the last day of the new month
  // if the original date was the last day of the longer month
  date.setMonth(month, Math.min(day, daysInMonth))
  return date
}

module.exports = setMonth


/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(3)

/**
 * @category Year Helpers
 * @summary Set the year to the given date.
 *
 * @description
 * Set the year to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} year - the year of the new date
 * @returns {Date} the new date with the year setted
 *
 * @example
 * // Set year 2013 to 1 September 2014:
 * var result = setYear(new Date(2014, 8, 1), 2013)
 * //=> Sun Sep 01 2013 00:00:00
 */
function setYear (dirtyDate, dirtyYear) {
  var date = parse(dirtyDate)
  var year = Number(dirtyYear)
  date.setFullYear(year)
  return date
}

module.exports = setYear


/***/ }),
/* 196 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _popper = __webpack_require__(198);

var _popper2 = _interopRequireDefault(_popper);

var _deepmerge = __webpack_require__(30);

var _deepmerge2 = _interopRequireDefault(_deepmerge);

var _MdPortal = __webpack_require__(16);

var _MdPortal2 = _interopRequireDefault(_MdPortal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = {
  name: 'MdPopover',
  abstract: true,
  components: {
    MdPortal: _MdPortal2.default
  },
  props: {
    mdActive: Boolean,
    mdSettings: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      popperInstance: null,
      originalParentEl: null,
      shouldRender: false,
      shouldActivate: false
    };
  },
  computed: {
    popoverClasses: function popoverClasses() {
      if (this.shouldActivate) {
        return 'md-active';
      } else if (this.shouldRender) {
        return 'md-rendering';
      }
    }
  },
  watch: {
    mdActive: {
      immediate: true,
      handler: function handler(shouldRender) {
        this.shouldRender = shouldRender;

        if (shouldRender) {
          this.bindPopper();
        } else {
          this.shouldActivate = false;
        }
      }
    },
    mdSettings: function mdSettings() {
      if (this.popperInstance) {
        this.createPopper();
      }
    }
  },
  methods: {
    getPopperOptions: function getPopperOptions() {
      var _this = this;

      return {
        placement: 'bottom',
        modifiers: {
          preventOverflow: {
            boundariesElement: 'viewport',
            padding: 16
          },
          computeStyle: {
            gpuAcceleration: false
          }
        },
        onCreate: function onCreate() {
          _this.shouldActivate = true;
          _this.$emit('md-active');
        }
      };
    },
    setOriginalParent: function setOriginalParent(el) {
      if (!this.originalParentEl) {
        this.originalParentEl = el;
      }
    },
    killPopper: function killPopper() {
      if (this.popperInstance) {
        this.popperInstance.destroy();
        this.popperInstance = null;
      }
    },
    bindPopper: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.$nextTick();

              case 2:

                if (this.originalParentEl) {
                  this.createPopper();
                }

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function bindPopper() {
        return _ref.apply(this, arguments);
      }

      return bindPopper;
    }(),
    createPopper: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var options;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (this.mdSettings) {
                  options = (0, _deepmerge2.default)(this.getPopperOptions(), this.mdSettings);


                  if (this.$el.constructor.name.toLowerCase() !== 'comment') {
                    this.popperInstance = new _popper2.default(this.originalParentEl, this.$el, options);
                  }
                }

              case 1:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function createPopper() {
        return _ref2.apply(this, arguments);
      }

      return createPopper;
    }(),
    resetPopper: function resetPopper() {
      if (this.popperInstance) {
        this.killPopper();
        this.createPopper();
      }
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.killPopper();
  },
  mounted: function mounted() {
    this.resetPopper();
  },
  render: function render(createElement) {
    return createElement(_MdPortal2.default, {
      props: _extends({}, this.$attrs),
      on: _extends({}, this.$listeners, {
        'md-initial-parent': this.setOriginalParent,
        'md-destroy': this.killPopper
      })
    }, this.$slots.default);
  }
};

/***/ }),
/* 198 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(global) {/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.12.6
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var isBrowser = typeof window !== 'undefined' && typeof window.document !== 'undefined';
var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
var timeoutDuration = 0;
for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
  if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
    timeoutDuration = 1;
    break;
  }
}

function microtaskDebounce(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }
    called = true;
    Promise.resolve().then(function () {
      called = false;
      fn();
    });
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

var supportsMicroTasks = isBrowser && window.Promise;

/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/
var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  // NOTE: 1 DOM access here
  var css = window.getComputedStyle(element, null);
  return property ? css[property] : css;
}

/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }
  return element.parentNode || element.host;
}

/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */
function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element) {
    return window.document.body;
  }

  switch (element.nodeName) {
    case 'HTML':
    case 'BODY':
      return element.ownerDocument.body;
    case '#document':
      return element.body;
  }

  // Firefox want us to check `-x` and `-y` variations as well

  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}

/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
function getOffsetParent(element) {
  // NOTE: 1 DOM access here
  var offsetParent = element && element.offsetParent;
  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    if (element) {
      return element.ownerDocument.documentElement;
    }

    return window.document.documentElement;
  }

  // .offsetParent will return the closest TD or TABLE in case
  // no offsetParent is present, I hate this job...
  if (['TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }
  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}

/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */
function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}

/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */
function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return window.document.documentElement;
  }

  // Here we make sure to give as "start" the element that comes first in the DOM
  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1;

  // Get common ancestor container
  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer;

  // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  }

  // one of the nodes is inside shadowDOM, find which one
  var element1root = getRoot(element1);
  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}

/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */
function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}

/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */
function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}

/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */

function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

  return +styles['border' + sideA + 'Width'].split('px')[0] + +styles['border' + sideB + 'Width'].split('px')[0];
}

/**
 * Tells if you are running Internet Explorer 10
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean} isIE10
 */
var isIE10 = undefined;

var isIE10$1 = function () {
  if (isIE10 === undefined) {
    isIE10 = navigator.appVersion.indexOf('MSIE 10') !== -1;
  }
  return isIE10;
};

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE10$1() ? html['offset' + axis] + computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')] + computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')] : 0);
}

function getWindowSizes() {
  var body = window.document.body;
  var html = window.document.documentElement;
  var computedStyle = isIE10$1() && window.getComputedStyle(html);

  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
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

/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */
function getClientRect(offsets) {
  return _extends({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}

/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
function getBoundingClientRect(element) {
  var rect = {};

  // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11
  if (isIE10$1()) {
    try {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } catch (err) {}
  } else {
    rect = element.getBoundingClientRect();
  }

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };

  // subtract scrollbar size from sizes
  var sizes = element.nodeName === 'HTML' ? getWindowSizes() : {};
  var width = sizes.width || element.clientWidth || result.right - result.left;
  var height = sizes.height || element.clientHeight || result.bottom - result.top;

  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height;

  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons
  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');

    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var isIE10 = isIE10$1();
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);

  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = +styles.borderTopWidth.split('px')[0];
  var borderLeftWidth = +styles.borderLeftWidth.split('px')[0];

  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;

  // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.
  if (!isIE10 && isHTML) {
    var marginTop = +styles.marginTop.split('px')[0];
    var marginLeft = +styles.marginLeft.split('px')[0];

    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;

    // Attach marginTop and marginLeft because in some circumstances we may need them
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);

  var scrollTop = getScroll(html);
  var scrollLeft = getScroll(html, 'left');

  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };

  return getClientRect(offset);
}

/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */
function isFixed(element) {
  var nodeName = element.nodeName;
  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }
  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }
  return isFixed(getParentNode(element));
}

/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @returns {Object} Coordinates of the boundaries
 */
function getBoundaries(popper, reference, padding, boundariesElement) {
  // NOTE: 1 DOM access here
  var boundaries = { top: 0, left: 0 };
  var offsetParent = findCommonOffsetParent(popper, reference);

  // Handle viewport case
  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;
    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(popper));
      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent);

    // In case of HTML, we need a different computation
    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  }

  // Add paddings
  boundaries.left += padding;
  boundaries.top += padding;
  boundaries.right -= padding;
  boundaries.bottom -= padding;

  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;

  return width * height;
}

/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };

  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });

  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });

  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

  var variation = placement.split('-')[1];

  return computedPlacement + (variation ? '-' + variation : '');
}

/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
function getReferenceOffsets(state, popper, reference) {
  var commonOffsetParent = findCommonOffsetParent(popper, reference);
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent);
}

/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
function getOuterSizes(element) {
  var styles = window.getComputedStyle(element);
  var x = parseFloat(styles.marginTop) + parseFloat(styles.marginBottom);
  var y = parseFloat(styles.marginLeft) + parseFloat(styles.marginRight);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}

/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */
function getOppositePlacement(placement) {
  var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */
function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0];

  // Get popper node sizes
  var popperRect = getOuterSizes(popper);

  // Add position, width and height to our offsets object
  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  };

  // depending by the popper placement we have to compute its offsets slightly differently
  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';

  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}

/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  }

  // use `filter` to obtain the same behavior of `find`
  return arr.filter(check)[0];
}

/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  }

  // use `find` + `indexOf` if `findIndex` isn't supported
  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}

/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */
function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

  modifiersToRun.forEach(function (modifier) {
    if (modifier['function']) {
      // eslint-disable-line dot-notation
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }
    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);

      data = fn(data, modifier);
    }
  });

  return data;
}

/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */
function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  };

  // compute reference element offsets
  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

  // store the computed placement inside `originalPlacement`
  data.originalPlacement = data.placement;

  // compute the popper offsets
  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);
  data.offsets.popper.position = 'absolute';

  // run the modifiers
  data = runModifiers(this.modifiers, data);

  // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback
  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}

/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */
function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}

/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */
function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length - 1; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;
    if (typeof window.document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }
  return null;
}

/**
 * Destroy the popper
 * @method
 * @memberof Popper
 */
function destroy() {
  this.state.isDestroyed = true;

  // touch DOM only if `applyStyle` modifier is enabled
  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.left = '';
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners();

  // remove the popper if user explicity asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it
  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }
  return this;
}

/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */
function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, { passive: true });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }
  scrollParents.push(target);
}

/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

  // Scroll event listener on scroll parents
  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;

  return state;
}

/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */
function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}

/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  getWindow(reference).removeEventListener('resize', state.updateBound);

  // Remove scroll event listener on scroll parents
  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  });

  // Reset state
  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}

/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger onUpdate callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */
function disableEventListeners() {
  if (this.state.eventsEnabled) {
    window.cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}

/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */
function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = '';
    // add unit if the value is numeric and is one of the following
    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }
    element.style[prop] = styles[prop] + unit;
  });
}

/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];
    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */
function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles);

  // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element
  setAttributes(data.instance.popper, data.attributes);

  // if arrowElement is defined and arrowStyles has some properties
  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}

/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper.
 * @param {Object} options - Popper.js options
 */
function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

  popper.setAttribute('x-placement', placement);

  // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations
  setStyles(popper, { position: 'absolute' });

  return options;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper;

  // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;
  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }
  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent);

  // Styles
  var styles = {
    position: popper.position
  };

  // floor sides to avoid blurry text
  var offsets = {
    left: Math.floor(popper.left),
    top: Math.floor(popper.top),
    bottom: Math.floor(popper.bottom),
    right: Math.floor(popper.right)
  };

  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right';

  // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed
  var prefixedProperty = getSupportedPropertyName('transform');

  // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.
  var left = void 0,
      top = void 0;
  if (sideA === 'bottom') {
    top = -offsetParentRect.height + offsets.bottom;
  } else {
    top = offsets.top;
  }
  if (sideB === 'right') {
    left = -offsetParentRect.width + offsets.right;
  } else {
    left = offsets.left;
  }
  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  }

  // Attributes
  var attributes = {
    'x-placement': data.placement
  };

  // Update `data` attributes, styles and arrowStyles
  data.attributes = _extends({}, attributes, data.attributes);
  data.styles = _extends({}, styles, data.styles);
  data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);

  return data;
}

/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */
function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });

  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';
    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }
  return isRequired;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function arrow(data, options) {
  // arrow depends on keepTogether in order to work
  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element;

  // if arrowElement is a string, suppose it's a CSS selector
  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement);

    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isVertical = ['left', 'right'].indexOf(placement) !== -1;

  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len];

  //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjuction
  //

  // top/left side
  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  }
  // bottom/right side
  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }

  // compute center of the popper
  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

  // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available
  var popperMarginSide = getStyleComputedProperty(data.instance.popper, 'margin' + sideCapitalized).replace('px', '');
  var sideValue = center - getClientRect(data.offsets.popper)[side] - popperMarginSide;

  // prevent arrowElement from being placed not contiguously to its popper
  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

  data.arrowElement = arrowElement;
  data.offsets.arrow = {};
  data.offsets.arrow[side] = Math.round(sideValue);
  data.offsets.arrow[altSide] = ''; // make sure to unset any eventual altSide value from the DOM node

  return data;
}

/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */
function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }
  return variation;
}

/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-right` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */
var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

// Get rid of `auto` `auto-start` and `auto-end`
var validPlacements = placements.slice(3);

/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */
function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement);

  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';

  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;
    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;
    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;
    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);

    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference;

    // using floor because the reference offsets may contain decimals we are not going to consider here
    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

    // flip the variation if required
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
    var flippedVariation = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : '');

      // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future
      data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function keepTogether(data) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }
  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}

/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */
function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2];

  // If it's not a number it's an operator, I guess
  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;
    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;
      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;
    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}

/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */
function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0];

  // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one
  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

  // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  });

  // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space
  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  }

  // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.
  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

  // Convert the values with units to absolute pixels to allow our computations
  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op
    // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, [])
    // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  });

  // Loop trough the offsets arrays and execute the operations
  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */
function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var basePlacement = placement.split('-')[0];

  var offsets = void 0;
  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

  // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken
  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement);
  options.boundaries = boundaries;

  var order = options.priority;
  var popper = data.offsets.popper;

  var check = {
    primary: function primary(placement) {
      var value = popper[placement];
      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }
      return defineProperty({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];
      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }
      return defineProperty({}, mainSide, value);
    }
  };

  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends({}, popper, check[side](placement));
  });

  data.offsets.popper = popper;

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1];

  // if shift shiftvariation is specified, run the modifier
  if (shiftvariation) {
    var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;

    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    var shiftOffsets = {
      start: defineProperty({}, side, reference[side]),
      end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
    };

    data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);

  return data;
}

/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */
var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unitless, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the height.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > More on this [reading this issue](https://github.com/FezVrasta/popper.js/issues/373)
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: offset,
    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * An scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: preventOverflow,
    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],
    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper this makes sure the popper has always a little padding
     * between the edges of its container
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier, can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near eachothers
   * without leaving any gap between the two. Expecially useful when the arrow is
   * enabled and you want to assure it to point to its reference element.
   * It cares only about the first axis, you can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjuction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: arrow,
    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: flip,
    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations).
     */
    behavior: 'flip',
    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position,
     * the popper will never be placed outside of the defined boundaries
     * (except if keepTogether is enabled)
     */
    boundariesElement: 'viewport'
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,
    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,
    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: computeStyle,
    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3d transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties.
     */
    gpuAcceleration: true,
    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',
    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define you own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: applyStyle,
    /** @prop {Function} */
    onLoad: applyStyleOnLoad,
    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3d transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties.
     */
    gpuAcceleration: undefined
  }
};

/**
 * The `dataObject` is an object containing all the informations used by Popper.js
 * this object get passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper.
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper, it expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow, it expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements.
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overriden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass as 3rd argument an object with the same
 * structure of this object, example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */
var Defaults = {
  /**
   * Popper's placement
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Whether events (resize, scroll) are initially enabled
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated, this callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js
   * @prop {modifiers}
   */
  modifiers: modifiers
};

/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */

// Utils
// Methods
var Popper = function () {
  /**
   * Create a new Popper.js instance
   * @class Popper
   * @param {HTMLElement|referenceObject} reference - The reference element used to position the popper
   * @param {HTMLElement} popper - The HTML element used as popper.
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    };

    // make update() debounced, so that it only runs at most once-per-tick
    this.update = debounce(this.update.bind(this));

    // with {} we create a new object with the options inside it
    this.options = _extends({}, Popper.Defaults, options);

    // init state
    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    };

    // get reference and popper elements (allow jQuery wrappers)
    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper;

    // Deep merge modifiers options
    this.options.modifiers = {};
    Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    });

    // Refactoring modifiers' list (Object => Array)
    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends({
        name: name
      }, _this.options.modifiers[name]);
    })
    // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    });

    // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    });

    // fire the first update to position the popper in the right place
    this.update();

    var eventsEnabled = this.options.eventsEnabled;
    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  }

  // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs


  createClass(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }

    /**
     * Schedule an update, it will run on the next UI update available
     * @method scheduleUpdate
     * @memberof Popper
     */


    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);
  return Popper;
}();

/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */


Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;

/* harmony default export */ __webpack_exports__["default"] = (Popper);
//# sourceMappingURL=popper.js.map

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(17)))

/***/ }),
/* 199 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/core/icons/MdArrowRightIcon.vue
var MdArrowRightIcon = __webpack_require__(200);
var MdArrowRightIcon_default = /*#__PURE__*/__webpack_require__.n(MdArrowRightIcon);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-1e23e1bf","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/core/icons/MdArrowRightIcon.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("md-icon", { staticClass: "md-icon-image" }, [
      _c(
        "svg",
        {
          attrs: {
            height: "24",
            viewBox: "0 0 24 24",
            width: "24",
            xmlns: "http://www.w3.org/2000/svg"
          }
        },
        [
          _c("path", {
            attrs: { d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" }
          }),
          _vm._v(" "),
          _c("path", { attrs: { d: "M0-.25h24v24H0z", fill: "none" } })
        ]
      )
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var icons_MdArrowRightIcon = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1e23e1bf", esExports)
  }
}
// CONCATENATED MODULE: ./src/core/icons/MdArrowRightIcon.vue
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  MdArrowRightIcon_default.a,
  icons_MdArrowRightIcon,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/core/icons/MdArrowRightIcon.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1e23e1bf", Component.options)
  } else {
    hotAPI.reload("data-v-1e23e1bf", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var core_icons_MdArrowRightIcon = __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MdIcon = __webpack_require__(5);

var _MdIcon2 = _interopRequireDefault(_MdIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'MdArrowRightIcon',
  components: {
    MdIcon: _MdIcon2.default
  }
}; //
//
//
//
//
//
//
//
//

/***/ }),
/* 201 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/core/icons/MdArrowLeftIcon.vue
var MdArrowLeftIcon = __webpack_require__(202);
var MdArrowLeftIcon_default = /*#__PURE__*/__webpack_require__.n(MdArrowLeftIcon);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-5cc7b6f4","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/core/icons/MdArrowLeftIcon.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("md-icon", { staticClass: "md-icon-image" }, [
      _c(
        "svg",
        {
          attrs: {
            height: "24",
            viewBox: "0 0 24 24",
            width: "24",
            xmlns: "http://www.w3.org/2000/svg"
          }
        },
        [
          _c("path", {
            attrs: { d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z" }
          }),
          _vm._v(" "),
          _c("path", { attrs: { d: "M0-.5h24v24H0z", fill: "none" } })
        ]
      )
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var icons_MdArrowLeftIcon = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5cc7b6f4", esExports)
  }
}
// CONCATENATED MODULE: ./src/core/icons/MdArrowLeftIcon.vue
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  MdArrowLeftIcon_default.a,
  icons_MdArrowLeftIcon,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/core/icons/MdArrowLeftIcon.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5cc7b6f4", Component.options)
  } else {
    hotAPI.reload("data-v-5cc7b6f4", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var core_icons_MdArrowLeftIcon = __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MdIcon = __webpack_require__(5);

var _MdIcon2 = _interopRequireDefault(_MdIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'MdArrowLeftIcon',
  components: {
    MdIcon: _MdIcon2.default
  }
}; //
//
//
//
//
//
//
//
//

/***/ }),
/* 203 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MdComponent = __webpack_require__(2);

var _MdComponent2 = _interopRequireDefault(_MdComponent);

var _MdPortal = __webpack_require__(16);

var _MdPortal2 = _interopRequireDefault(_MdPortal);

var _MdOverlay = __webpack_require__(23);

var _MdOverlay2 = _interopRequireDefault(_MdOverlay);

var _MdFocusTrap = __webpack_require__(40);

var _MdFocusTrap2 = _interopRequireDefault(_MdFocusTrap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = new _MdComponent2.default({
  name: 'MdDialog',
  components: {
    MdPortal: _MdPortal2.default,
    MdOverlay: _MdOverlay2.default,
    MdFocusTrap: _MdFocusTrap2.default
  },
  props: {
    mdActive: Boolean,
    mdBackdrop: {
      type: Boolean,
      default: true
    },
    mdBackdropClass: {
      type: String,
      default: 'md-dialog-overlay'
    },
    mdCloseOnEsc: {
      type: Boolean,
      default: true
    },
    mdClickOutsideToClose: {
      type: Boolean,
      default: true
    },
    mdFullscreen: {
      type: Boolean,
      default: true
    },
    mdAnimateFromSource: Boolean
  },
  computed: {
    dialogClasses: function dialogClasses() {
      return {
        'md-dialog-fullscreen': this.mdFullscreen
      };
    }
  },
  watch: {
    mdActive: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(isActive) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.$nextTick();

              case 2:

                if (isActive) {
                  this.$emit('md-opened');
                } else {
                  this.$emit('md-closed');
                }

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function mdActive(_x) {
        return _ref.apply(this, arguments);
      }

      return mdActive;
    }()
  },
  methods: {
    closeDialog: function closeDialog() {
      this.$emit('update:mdActive', false);
    },
    onClick: function onClick() {
      if (this.mdClickOutsideToClose) {
        this.closeDialog();
      }
    },
    onEsc: function onEsc() {
      if (this.mdCloseOnEsc) {
        this.closeDialog();
      }
    }
  }
});

/***/ }),
/* 205 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/core/icons/MdDateIcon.vue
var MdDateIcon = __webpack_require__(206);
var MdDateIcon_default = /*#__PURE__*/__webpack_require__.n(MdDateIcon);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-644b79cc","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/core/icons/MdDateIcon.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("md-icon", { staticClass: "md-icon-image" }, [
      _c(
        "svg",
        {
          attrs: {
            height: "24",
            viewBox: "0 0 24 24",
            width: "24",
            xmlns: "http://www.w3.org/2000/svg"
          }
        },
        [
          _c("path", {
            attrs: {
              d:
                "M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"
            }
          }),
          _vm._v(" "),
          _c("path", { attrs: { d: "M0 0h24v24H0z", fill: "none" } })
        ]
      )
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var icons_MdDateIcon = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-644b79cc", esExports)
  }
}
// CONCATENATED MODULE: ./src/core/icons/MdDateIcon.vue
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  MdDateIcon_default.a,
  icons_MdDateIcon,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/core/icons/MdDateIcon.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-644b79cc", Component.options)
  } else {
    hotAPI.reload("data-v-644b79cc", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var core_icons_MdDateIcon = __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MdIcon = __webpack_require__(5);

var _MdIcon2 = _interopRequireDefault(_MdIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'MdDateIcon',
  components: {
    MdIcon: _MdIcon2.default
  }
}; //
//
//
//
//
//
//
//
//

/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _material = __webpack_require__(1);

var _material2 = _interopRequireDefault(_material);

var _MdDialog = __webpack_require__(10);

var _MdDialog2 = _interopRequireDefault(_MdDialog);

var _MdDialogTitle = __webpack_require__(208);

var _MdDialogTitle2 = _interopRequireDefault(_MdDialogTitle);

var _MdDialogContent = __webpack_require__(211);

var _MdDialogContent2 = _interopRequireDefault(_MdDialogContent);

var _MdDialogActions = __webpack_require__(214);

var _MdDialogActions2 = _interopRequireDefault(_MdDialogActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (Vue) {
  (0, _material2.default)(Vue);
  Vue.component(_MdDialog2.default.name, _MdDialog2.default);
  Vue.component(_MdDialogTitle2.default.name, _MdDialogTitle2.default);
  Vue.component(_MdDialogContent2.default.name, _MdDialogContent2.default);
  Vue.component(_MdDialogActions2.default.name, _MdDialogActions2.default);
};

/***/ }),
/* 208 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/components/MdDialog/MdDialogTitle.vue
var MdDialogTitle = __webpack_require__(210);
var MdDialogTitle_default = /*#__PURE__*/__webpack_require__.n(MdDialogTitle);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-879275ce","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/components/MdDialog/MdDialogTitle.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "span",
    { staticClass: "md-dialog-title md-title" },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var MdDialog_MdDialogTitle = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-879275ce", esExports)
  }
}
// CONCATENATED MODULE: ./src/components/MdDialog/MdDialogTitle.vue
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(209)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  MdDialogTitle_default.a,
  MdDialog_MdDialogTitle,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/MdDialog/MdDialogTitle.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-879275ce", Component.options)
  } else {
    hotAPI.reload("data-v-879275ce", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var components_MdDialog_MdDialogTitle = __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 209 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//

exports.default = {
  name: 'MdDialogTitle'
};

/***/ }),
/* 211 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/components/MdDialog/MdDialogContent.vue
var MdDialogContent = __webpack_require__(213);
var MdDialogContent_default = /*#__PURE__*/__webpack_require__.n(MdDialogContent);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-dae90f0c","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/components/MdDialog/MdDialogContent.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "md-dialog-content" }, [_vm._t("default")], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var MdDialog_MdDialogContent = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-dae90f0c", esExports)
  }
}
// CONCATENATED MODULE: ./src/components/MdDialog/MdDialogContent.vue
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(212)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  MdDialogContent_default.a,
  MdDialog_MdDialogContent,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/MdDialog/MdDialogContent.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-dae90f0c", Component.options)
  } else {
    hotAPI.reload("data-v-dae90f0c", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var components_MdDialog_MdDialogContent = __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 212 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//

exports.default = {
  name: 'MdDialogContent'
};

/***/ }),
/* 214 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/components/MdDialog/MdDialogActions.vue
var MdDialogActions = __webpack_require__(216);
var MdDialogActions_default = /*#__PURE__*/__webpack_require__.n(MdDialogActions);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-092eaafe","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/components/MdDialog/MdDialogActions.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "md-dialog-actions" }, [_vm._t("default")], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var MdDialog_MdDialogActions = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-092eaafe", esExports)
  }
}
// CONCATENATED MODULE: ./src/components/MdDialog/MdDialogActions.vue
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(215)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  MdDialogActions_default.a,
  MdDialog_MdDialogActions,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/MdDialog/MdDialogActions.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-092eaafe", Component.options)
  } else {
    hotAPI.reload("data-v-092eaafe", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var components_MdDialog_MdDialogActions = __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 215 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//

exports.default = {
  name: 'MdDialogActions'
};

/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _material = __webpack_require__(1);

var _material2 = _interopRequireDefault(_material);

var _MdDialog = __webpack_require__(10);

var _MdDialog2 = _interopRequireDefault(_MdDialog);

var _MdDialogAlert = __webpack_require__(218);

var _MdDialogAlert2 = _interopRequireDefault(_MdDialogAlert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (Vue) {
  (0, _material2.default)(Vue);
  Vue.component(_MdDialog2.default.name, _MdDialog2.default);
  Vue.component(_MdDialogAlert2.default.name, _MdDialogAlert2.default);
};

/***/ }),
/* 218 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/components/MdDialog/MdDialogAlert/MdDialogAlert.vue
var MdDialogAlert = __webpack_require__(219);
var MdDialogAlert_default = /*#__PURE__*/__webpack_require__.n(MdDialogAlert);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-197ab94b","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/components/MdDialog/MdDialogAlert/MdDialogAlert.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "md-dialog",
    _vm._g(
      _vm._b(
        { attrs: { "md-fullscreen": false } },
        "md-dialog",
        _vm.$attrs,
        false
      ),
      _vm.$listeners
    ),
    [
      _vm.mdTitle
        ? _c("md-dialog-title", [_vm._v(_vm._s(_vm.mdTitle))])
        : _vm._e(),
      _vm._v(" "),
      _vm.mdContent
        ? _c("md-dialog-content", {
            domProps: { innerHTML: _vm._s(_vm.mdContent) }
          })
        : _vm._e(),
      _vm._v(" "),
      _c(
        "md-dialog-actions",
        [
          _c(
            "md-button",
            {
              staticClass: "md-primary",
              on: {
                click: function($event) {
                  _vm.$emit("update:mdActive", false)
                }
              }
            },
            [_vm._v(_vm._s(_vm.mdConfirmText))]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var MdDialogAlert_MdDialogAlert = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-197ab94b", esExports)
  }
}
// CONCATENATED MODULE: ./src/components/MdDialog/MdDialogAlert/MdDialogAlert.vue
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  MdDialogAlert_default.a,
  MdDialogAlert_MdDialogAlert,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/MdDialog/MdDialogAlert/MdDialogAlert.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-197ab94b", Component.options)
  } else {
    hotAPI.reload("data-v-197ab94b", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var MdDialog_MdDialogAlert_MdDialogAlert = __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  name: 'MdDialogAlert',
  props: {
    mdTitle: String,
    mdContent: String,
    mdConfirmText: {
      type: String,
      default: 'Ok'
    }
  }
};

/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _material = __webpack_require__(1);

var _material2 = _interopRequireDefault(_material);

var _MdDialog = __webpack_require__(10);

var _MdDialog2 = _interopRequireDefault(_MdDialog);

var _MdDialogConfirm = __webpack_require__(221);

var _MdDialogConfirm2 = _interopRequireDefault(_MdDialogConfirm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (Vue) {
  (0, _material2.default)(Vue);
  Vue.component(_MdDialog2.default.name, _MdDialog2.default);
  Vue.component(_MdDialogConfirm2.default.name, _MdDialogConfirm2.default);
};

/***/ }),
/* 221 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/components/MdDialog/MdDialogConfirm/MdDialogConfirm.vue
var MdDialogConfirm = __webpack_require__(222);
var MdDialogConfirm_default = /*#__PURE__*/__webpack_require__.n(MdDialogConfirm);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-acc7afda","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/components/MdDialog/MdDialogConfirm/MdDialogConfirm.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "md-dialog",
    _vm._g(
      _vm._b(
        { attrs: { "md-fullscreen": false } },
        "md-dialog",
        _vm.$attrs,
        false
      ),
      _vm.$listeners
    ),
    [
      _vm.mdTitle
        ? _c("md-dialog-title", [_vm._v(_vm._s(_vm.mdTitle))])
        : _vm._e(),
      _vm._v(" "),
      _vm.mdContent
        ? _c("md-dialog-content", {
            domProps: { innerHTML: _vm._s(_vm.mdContent) }
          })
        : _vm._e(),
      _vm._v(" "),
      _c(
        "md-dialog-actions",
        [
          _c(
            "md-button",
            { staticClass: "md-primary", on: { click: _vm.onCancel } },
            [_vm._v(_vm._s(_vm.mdCancelText))]
          ),
          _vm._v(" "),
          _c(
            "md-button",
            { staticClass: "md-primary", on: { click: _vm.onConfirm } },
            [_vm._v(_vm._s(_vm.mdConfirmText))]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var MdDialogConfirm_MdDialogConfirm = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-acc7afda", esExports)
  }
}
// CONCATENATED MODULE: ./src/components/MdDialog/MdDialogConfirm/MdDialogConfirm.vue
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  MdDialogConfirm_default.a,
  MdDialogConfirm_MdDialogConfirm,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/MdDialog/MdDialogConfirm/MdDialogConfirm.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-acc7afda", Component.options)
  } else {
    hotAPI.reload("data-v-acc7afda", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var MdDialog_MdDialogConfirm_MdDialogConfirm = __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  name: 'MdDialogConfirm',
  props: {
    mdTitle: String,
    mdContent: String,
    mdConfirmText: {
      type: String,
      default: 'Ok'
    },
    mdCancelText: {
      type: String,
      default: 'Cancel'
    }
  },
  methods: {
    onCancel: function onCancel() {
      this.$emit('md-cancel');
      this.$emit('update:mdActive', false);
    },
    onConfirm: function onConfirm() {
      this.$emit('md-confirm');
      this.$emit('update:mdActive', false);
    }
  }
};

/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _material = __webpack_require__(1);

var _material2 = _interopRequireDefault(_material);

var _MdDialog = __webpack_require__(10);

var _MdDialog2 = _interopRequireDefault(_MdDialog);

var _MdDialogPrompt = __webpack_require__(224);

var _MdDialogPrompt2 = _interopRequireDefault(_MdDialogPrompt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (Vue) {
  (0, _material2.default)(Vue);
  Vue.component(_MdDialog2.default.name, _MdDialog2.default);
  Vue.component(_MdDialogPrompt2.default.name, _MdDialogPrompt2.default);
};

/***/ }),
/* 224 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/components/MdDialog/MdDialogPrompt/MdDialogPrompt.vue
var MdDialogPrompt = __webpack_require__(225);
var MdDialogPrompt_default = /*#__PURE__*/__webpack_require__.n(MdDialogPrompt);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-7b3c8c22","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/components/MdDialog/MdDialogPrompt/MdDialogPrompt.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "md-dialog",
    _vm._b(
      {
        attrs: { "md-fullscreen": false },
        on: { "md-opened": _vm.setInputFocus }
      },
      "md-dialog",
      _vm.$attrs,
      false
    ),
    [
      _vm.mdTitle
        ? _c("md-dialog-title", [_vm._v(_vm._s(_vm.mdTitle))])
        : _vm._e(),
      _vm._v(" "),
      _vm.mdContent
        ? _c("md-dialog-content", {
            domProps: { innerHTML: _vm._s(_vm.mdContent) }
          })
        : _vm._e(),
      _vm._v(" "),
      _c(
        "md-dialog-content",
        [
          _c(
            "md-field",
            [
              _c("md-input", {
                ref: "input",
                attrs: {
                  id: _vm.mdInputId,
                  name: _vm.mdInputName,
                  maxlength: _vm.mdInputMaxlength,
                  placeholder: _vm.mdInputPlaceholder
                },
                nativeOn: {
                  keydown: function($event) {
                    if (
                      !("button" in $event) &&
                      _vm._k($event.keyCode, "enter", 13, $event.key)
                    ) {
                      return null
                    }
                    _vm.onConfirm($event)
                  }
                },
                model: {
                  value: _vm.inputValue,
                  callback: function($$v) {
                    _vm.inputValue = $$v
                  },
                  expression: "inputValue"
                }
              })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "md-dialog-actions",
        [
          _c(
            "md-button",
            { staticClass: "md-primary", on: { click: _vm.onCancel } },
            [_vm._v(_vm._s(_vm.mdCancelText))]
          ),
          _vm._v(" "),
          _c(
            "md-button",
            { staticClass: "md-primary", on: { click: _vm.onConfirm } },
            [_vm._v(_vm._s(_vm.mdConfirmText))]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var MdDialogPrompt_MdDialogPrompt = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7b3c8c22", esExports)
  }
}
// CONCATENATED MODULE: ./src/components/MdDialog/MdDialogPrompt/MdDialogPrompt.vue
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  MdDialogPrompt_default.a,
  MdDialogPrompt_MdDialogPrompt,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/MdDialog/MdDialogPrompt/MdDialogPrompt.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7b3c8c22", Component.options)
  } else {
    hotAPI.reload("data-v-7b3c8c22", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var MdDialog_MdDialogPrompt_MdDialogPrompt = __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  name: 'MdDialogPrompt',
  props: {
    value: {},
    mdTitle: String,
    mdInputName: String,
    mdInputId: String,
    mdInputMaxlength: [String, Number],
    mdInputPlaceholder: [String, Number],
    mdContent: String,
    mdConfirmText: {
      type: String,
      default: 'Ok'
    },
    mdCancelText: {
      type: String,
      default: 'Cancel'
    }
  },
  data: function data() {
    return {
      inputValue: null
    };
  },
  watch: {
    value: function value() {
      this.inputValue = this.value;
    }
  },
  methods: {
    onCancel: function onCancel() {
      this.$emit('md-cancel');
      this.$emit('update:mdActive', false);
    },
    onConfirm: function onConfirm() {
      this.$emit('input', this.inputValue);
      this.$emit('md-confirm', this.inputValue);
      this.$emit('update:mdActive', false);
    },
    setInputFocus: function setInputFocus() {
      var _this = this;

      window.setTimeout(function () {
        _this.$refs.input.$el.focus();
      }, 50);
    }
  },
  created: function created() {
    this.inputValue = this.value;
  }
};

/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _material = __webpack_require__(1);

var _material2 = _interopRequireDefault(_material);

var _MdDivider = __webpack_require__(227);

var _MdDivider2 = _interopRequireDefault(_MdDivider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (Vue) {
  (0, _material2.default)(Vue);
  Vue.component(_MdDivider2.default.name, _MdDivider2.default);
};

/***/ }),
/* 227 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/components/MdDivider/MdDivider.vue
var MdDivider = __webpack_require__(229);
var MdDivider_default = /*#__PURE__*/__webpack_require__.n(MdDivider);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-8ca7ced6","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/components/MdDivider/MdDivider.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.insideList
    ? _c("li", { staticClass: "md-divider", class: [_vm.$mdActiveTheme] })
    : _c("hr", { staticClass: "md-divider", class: [_vm.$mdActiveTheme] })
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var MdDivider_MdDivider = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-8ca7ced6", esExports)
  }
}
// CONCATENATED MODULE: ./src/components/MdDivider/MdDivider.vue
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(228)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  MdDivider_default.a,
  MdDivider_MdDivider,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/MdDivider/MdDivider.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8ca7ced6", Component.options)
  } else {
    hotAPI.reload("data-v-8ca7ced6", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var components_MdDivider_MdDivider = __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 228 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MdComponent = __webpack_require__(2);

var _MdComponent2 = _interopRequireDefault(_MdComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _MdComponent2.default({
  name: 'MdDivider',
  computed: {
    insideList: function insideList() {
      return this.$parent.$options._componentTag === 'md-list';
    }
  }
}); //
//
//
//
//

/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _material = __webpack_require__(1);

var _material2 = _interopRequireDefault(_material);

var _MdDrawer = __webpack_require__(231);

var _MdDrawer2 = _interopRequireDefault(_MdDrawer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (Vue) {
  (0, _material2.default)(Vue);
  Vue.component(_MdDrawer2.default.name, _MdDrawer2.default);
};

/***/ }),
/* 231 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/components/MdDrawer/MdDrawer.vue
var MdDrawer = __webpack_require__(233);
var MdDrawer_default = /*#__PURE__*/__webpack_require__.n(MdDrawer);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-801caa62","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/components/MdDrawer/MdDrawer.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "md-drawer",
      class: [_vm.$mdActiveTheme, _vm.drawerClasses]
    },
    [
      _vm._t("default"),
      _vm._v(" "),
      _vm.mdFixed
        ? _c("md-overlay", {
            attrs: { "md-active": _vm.mdActive },
            on: { click: _vm.closeDrawer }
          })
        : _c("md-overlay", {
            attrs: { "md-active": _vm.mdActive, "md-attach-to-parent": "" },
            on: { click: _vm.closeDrawer }
          })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var MdDrawer_MdDrawer = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-801caa62", esExports)
  }
}
// CONCATENATED MODULE: ./src/components/MdDrawer/MdDrawer.vue
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(232)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  MdDrawer_default.a,
  MdDrawer_MdDrawer,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/MdDrawer/MdDrawer.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-801caa62", Component.options)
  } else {
    hotAPI.reload("data-v-801caa62", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var components_MdDrawer_MdDrawer = __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 232 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //
//
//
//
//
//
//
//

var _MdComponent = __webpack_require__(2);

var _MdComponent2 = _interopRequireDefault(_MdComponent);

var _MdOverlay = __webpack_require__(23);

var _MdOverlay2 = _interopRequireDefault(_MdOverlay);

var _MdPropValidator = __webpack_require__(4);

var _MdPropValidator2 = _interopRequireDefault(_MdPropValidator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _MdComponent2.default({
  name: 'MdDrawer',
  components: {
    MdOverlay: _MdOverlay2.default
  },
  props: {
    mdLeft: Boolean,
    mdRight: Boolean,
    mdPermanent: _extends({
      type: String
    }, (0, _MdPropValidator2.default)('md-permanent', ['full', 'clipped', 'card'])),
    mdPersistent: _extends({
      type: String
    }, (0, _MdPropValidator2.default)('md-persistent', ['mini', 'full'])),
    mdActive: Boolean,
    mdFixed: Boolean
  },
  watch: {
    mdActive: function mdActive(visible) {
      if (visible) {
        this.$emit('md-opened');
      } else {
        this.$emit('md-closed');
      }
    }
  },
  computed: {
    drawerClasses: function drawerClasses() {
      var classes = {
        'md-left': this.mdLeft,
        'md-right': this.mdRight,
        'md-temporary': this.isTemporary,
        'md-persistent': this.mdPersistent,
        'md-permanent': this.mdPermanent,
        'md-active': this.mdActive,
        'md-fixed': this.mdFixed
      };

      if (this.mdPermanent) {
        classes['md-permanent-' + this.mdPermanent] = true;
      }

      if (this.mdPersistent) {
        classes['md-persistent-' + this.mdPersistent] = true;
      }

      return classes;
    },
    isTemporary: function isTemporary() {
      return !this.mdPermanent && !this.mdPersistent;
    },
    mode: function mode() {
      if (this.mdPersistent) {
        return 'persistent';
      }

      if (this.mdPermanent) {
        return 'permanent';
      }

      return 'temporary';
    },
    submode: function submode() {
      if (this.mdPersistent) {
        return this.mdPersistent;
      }

      if (this.mdPermanent) {
        return this.mdPermanent;
      }
    }
  },
  methods: {
    closeDrawer: function closeDrawer() {
      this.$emit('update:mdActive', false);
    }
  }
});

/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(235);

exports.default = function (Vue) {};

/***/ }),
/* 235 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _material = __webpack_require__(1);

var _material2 = _interopRequireDefault(_material);

var _MdEmptyState = __webpack_require__(41);

var _MdEmptyState2 = _interopRequireDefault(_MdEmptyState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (Vue) {
  (0, _material2.default)(Vue);
  Vue.component(_MdEmptyState2.default.name, _MdEmptyState2.default);
};

/***/ }),
/* 237 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MdComponent = __webpack_require__(2);

var _MdComponent2 = _interopRequireDefault(_MdComponent);

var _MdEmptyStateProps = __webpack_require__(42);

var _MdEmptyStateProps2 = _interopRequireDefault(_MdEmptyStateProps);

var _MdAssetIcon = __webpack_require__(18);

var _MdAssetIcon2 = _interopRequireDefault(_MdAssetIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _MdComponent2.default({
  name: 'MdEmptyState',
  mixins: [_MdAssetIcon2.default],
  props: _MdEmptyStateProps2.default,
  computed: {
    emptyStateClasses: function emptyStateClasses() {
      return {
        'md-rounded': this.mdRounded
      };
    },
    emptyStateStyles: function emptyStateStyles() {
      if (this.mdRounded) {
        var size = this.mdSize + 'px';

        return {
          width: size,
          height: size
        };
      }
    }
  }
}); //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _material = __webpack_require__(1);

var _material2 = _interopRequireDefault(_material);

var _MdIcon = __webpack_require__(43);

var _MdIcon2 = _interopRequireDefault(_MdIcon);

var _MdSelect = __webpack_require__(240);

var _MdSelect2 = _interopRequireDefault(_MdSelect);

var _MdField = __webpack_require__(20);

var _MdField2 = _interopRequireDefault(_MdField);

var _MdFile = __webpack_require__(259);

var _MdFile2 = _interopRequireDefault(_MdFile);

var _MdInput = __webpack_require__(14);

var _MdInput2 = _interopRequireDefault(_MdInput);

var _MdTextarea = __webpack_require__(264);

var _MdTextarea2 = _interopRequireDefault(_MdTextarea);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (Vue) {
  (0, _material2.default)(Vue);
  Vue.use(_MdIcon2.default);
  Vue.use(_MdSelect2.default);
  Vue.component(_MdField2.default.name, _MdField2.default);
  Vue.component(_MdFile2.default.name, _MdFile2.default);
  Vue.component(_MdInput2.default.name, _MdInput2.default);
  Vue.component(_MdTextarea2.default.name, _MdTextarea2.default);
};

/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _material = __webpack_require__(1);

var _material2 = _interopRequireDefault(_material);

var _MdSelect = __webpack_require__(241);

var _MdSelect2 = _interopRequireDefault(_MdSelect);

var _MdOption = __webpack_require__(253);

var _MdOption2 = _interopRequireDefault(_MdOption);

var _MdOptgroup = __webpack_require__(256);

var _MdOptgroup2 = _interopRequireDefault(_MdOptgroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (Vue) {
  (0, _material2.default)(Vue);
  Vue.component(_MdSelect2.default.name, _MdSelect2.default);
  Vue.component(_MdOption2.default.name, _MdOption2.default);
  Vue.component(_MdOptgroup2.default.name, _MdOptgroup2.default);
};

/***/ }),
/* 241 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/components/MdField/MdSelect/MdSelect.vue
var MdSelect = __webpack_require__(243);
var MdSelect_default = /*#__PURE__*/__webpack_require__.n(MdSelect);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-7e35dfa3","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/components/MdField/MdSelect/MdSelect.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "md-menu",
    {
      staticClass: "md-select",
      class: { "md-disabled": _vm.disabled },
      attrs: {
        "md-close-on-select": false,
        "md-active": _vm.showSelect,
        "md-offset-x": _vm.offset.x,
        "md-offset-y": _vm.offset.y
      },
      on: {
        "update:mdActive": function($event) {
          _vm.showSelect = $event
        },
        "md-opened": _vm.onOpen,
        "md-closed": _vm.onClose
      }
    },
    [
      _c(
        "md-input",
        _vm._g(
          _vm._b(
            {
              ref: "input",
              staticClass: "md-input md-select-value",
              attrs: {
                readonly: "",
                disabled: _vm.disabled,
                required: _vm.required,
                placeholder: _vm.placeholder
              },
              on: {
                focus: function($event) {
                  $event.preventDefault()
                  _vm.onFocus($event)
                },
                blur: function($event) {
                  $event.preventDefault()
                  _vm.removeHighlight($event)
                },
                click: _vm.openSelect,
                keydown: [
                  function($event) {
                    if (
                      !("button" in $event) &&
                      _vm._k($event.keyCode, "down", 40, $event.key)
                    ) {
                      return null
                    }
                    _vm.openSelect($event)
                  },
                  function($event) {
                    if (
                      !("button" in $event) &&
                      _vm._k($event.keyCode, "enter", 13, $event.key)
                    ) {
                      return null
                    }
                    _vm.openSelect($event)
                  },
                  function($event) {
                    if (
                      !("button" in $event) &&
                      _vm._k($event.keyCode, "space", 32, $event.key)
                    ) {
                      return null
                    }
                    _vm.openSelect($event)
                  }
                ]
              },
              model: {
                value: _vm.MdSelect.label,
                callback: function($$v) {
                  _vm.$set(_vm.MdSelect, "label", $$v)
                },
                expression: "MdSelect.label"
              }
            },
            "md-input",
            _vm.$attrs,
            false
          ),
          _vm.inputListeners
        )
      ),
      _vm._v(" "),
      _c("md-drop-down-icon", {
        nativeOn: {
          click: function($event) {
            _vm.openSelect($event)
          }
        }
      }),
      _vm._v(" "),
      _c(
        "keep-alive",
        [
          _c(
            "md-menu-content",
            {
              ref: "menu",
              staticClass: "md-select-menu",
              style: _vm.menuStyles,
              attrs: {
                "md-content-class": _vm.mdClass,
                "md-list-class": _vm.mdDense && "md-dense",
                id: _vm.uniqueId
              }
            },
            [_vm._t("default")],
            2
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.model,
            expression: "model"
          }
        ],
        staticClass: "md-input-fake",
        attrs: { disabled: _vm.disabled, readonly: "", tabindex: "-1" },
        domProps: { value: _vm.model },
        on: {
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.model = $event.target.value
          }
        }
      }),
      _vm._v(" "),
      _c(
        "select",
        _vm._b(
          {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.model,
                expression: "model"
              }
            ],
            attrs: { readonly: "", tabindex: "-1" },
            on: {
              change: function($event) {
                var $$selectedVal = Array.prototype.filter
                  .call($event.target.options, function(o) {
                    return o.selected
                  })
                  .map(function(o) {
                    var val = "_value" in o ? o._value : o.value
                    return val
                  })
                _vm.model = $event.target.multiple
                  ? $$selectedVal
                  : $$selectedVal[0]
              }
            }
          },
          "select",
          _vm.attributes,
          false
        )
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var MdSelect_MdSelect = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7e35dfa3", esExports)
  }
}
// CONCATENATED MODULE: ./src/components/MdField/MdSelect/MdSelect.vue
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(242)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  MdSelect_default.a,
  MdSelect_MdSelect,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/MdField/MdSelect/MdSelect.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7e35dfa3", Component.options)
  } else {
    hotAPI.reload("data-v-7e35dfa3", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var MdField_MdSelect_MdSelect = __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 242 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var _raf = __webpack_require__(9);

var _raf2 = _interopRequireDefault(_raf);

var _MdUuid = __webpack_require__(6);

var _MdUuid2 = _interopRequireDefault(_MdUuid);

var _MdComponent = __webpack_require__(2);

var _MdComponent2 = _interopRequireDefault(_MdComponent);

var _MdDropDownIcon = __webpack_require__(244);

var _MdDropDownIcon2 = _interopRequireDefault(_MdDropDownIcon);

var _MdMenu = __webpack_require__(44);

var _MdMenu2 = _interopRequireDefault(_MdMenu);

var _MdMenuContent = __webpack_require__(45);

var _MdMenuContent2 = _interopRequireDefault(_MdMenuContent);

var _MdInput = __webpack_require__(14);

var _MdInput2 = _interopRequireDefault(_MdInput);

var _MdFieldMixin = __webpack_require__(15);

var _MdFieldMixin2 = _interopRequireDefault(_MdFieldMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var defaultOffset = {
  x: -15,
  y: -48
};

exports.default = {
  name: 'MdSelect',
  components: {
    MdInput: _MdInput2.default,
    MdMenu: _MdMenu2.default,
    MdMenuContent: _MdMenuContent2.default,
    MdDropDownIcon: _MdDropDownIcon2.default
  },
  mixins: [_MdFieldMixin2.default],
  props: {
    mdDense: Boolean,
    mdClass: String,
    multiple: Boolean,
    id: String,
    name: String
  },
  inject: ['MdField'],
  data: function data() {
    return {
      uniqueId: 'md-select-menu-' + (0, _MdUuid2.default)(),
      menuStyles: {},
      offset: {
        x: defaultOffset.x,
        y: 0
      },
      showSelect: true,
      didMount: false,
      MdSelect: {
        items: {},
        label: null,
        multiple: false,
        modelValue: this.model,
        setValue: this.setValue,
        setContent: this.setContent,
        setMultipleValue: this.setMultipleValue,
        setMultipleContent: this.setMultipleContent
      }
    };
  },
  provide: function provide() {
    var MdSelect = this.MdSelect;

    return { MdSelect: MdSelect };
  },

  computed: {
    inputListeners: function inputListeners() {
      return _extends({}, this.$listeners, {
        input: undefined
      });
    }
  },
  watch: {
    localValue: {
      immediate: true,
      handler: function handler() {
        this.setFieldContent();
      }
    },
    multiple: {
      immediate: true,
      handler: function handler(isMultiple) {
        var _this = this;

        this.MdSelect.multiple = isMultiple;
        this.$nextTick(function () {
          return _this.initialLocalValueByDefault();
        });
      }
    },
    model: function model() {
      this.MdSelect.modelValue = this.model;
    }
  },
  methods: {
    elHasScroll: function elHasScroll(el) {
      return el.scrollHeight > el.offsetHeight;
    },
    scrollToSelectedOption: function scrollToSelectedOption(el, menu) {
      var top = el.offsetTop;
      var elHeight = el.offsetHeight;
      var menuHeight = menu.offsetHeight;

      menu.scrollTop = top - (menuHeight - elHeight) / 2;
    },
    setOffsets: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(target) {
        var menu, selected;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.$nextTick();

              case 2:

                if (!this.$isServer) {
                  menu = document.getElementById(this.uniqueId);


                  if (menu) {
                    selected = target || menu.querySelector('.md-selected');


                    if (selected) {
                      this.scrollToSelectedOption(selected, menu);
                      this.offset.y = defaultOffset.y - selected.offsetTop + menu.scrollTop + 8;
                      this.menuStyles = {
                        'transform-origin': '0 ' + Math.abs(this.offset.y) + 'px'
                      };
                    } else {
                      this.offset.y = defaultOffset.y + 1;
                      this.menuStyles = {};
                    }
                  }
                }

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function setOffsets(_x) {
        return _ref.apply(this, arguments);
      }

      return setOffsets;
    }(),
    onOpen: function onOpen() {
      var _this2 = this;

      if (this.didMount) {
        this.setOffsets();
        window.setTimeout(function () {
          _this2.MdField.focused = true;
        }, 10);
      }
    },
    applyHighlight: function applyHighlight() {
      this.MdField.focused = false;
      this.MdField.highlighted = true;
      this.$refs.input.$el.focus();
    },
    onClose: function onClose() {
      if (this.didMount) {
        this.applyHighlight();
      }
    },
    onFocus: function onFocus() {
      if (this.didMount) {
        this.applyHighlight();
      }
    },
    removeHighlight: function removeHighlight() {
      this.MdField.highlighted = false;
    },
    openSelect: function openSelect() {
      if (!this.disabled) {
        this.showSelect = true;
      }
    },
    arrayAccessorRemove: function arrayAccessorRemove(arr, index) {
      var before = arr.slice(0, index);
      var after = arr.slice(index + 1, arr.length);
      return before.concat(after);
    },
    toggleArrayValue: function toggleArrayValue(value) {
      var index = this.localValue.indexOf(value);
      var includes = index > -1;
      if (!includes) {
        this.localValue = this.localValue.concat([value]);
        return;
      }
      this.localValue = this.arrayAccessorRemove(this.localValue, index);
    },
    setValue: function setValue(newValue) {
      this.model = newValue;
      this.setFieldValue();
      this.showSelect = false;
    },
    setContent: function setContent(newLabel) {
      this.MdSelect.label = newLabel;
    },
    setContentByValue: function setContentByValue() {
      var textContent = this.MdSelect.items[this.localValue];

      if (textContent) {
        this.setContent(textContent);
      } else {
        this.setContent('');
      }
    },
    setMultipleValue: function setMultipleValue(value) {
      var newValue = value;

      this.toggleArrayValue(newValue);
      this.setFieldValue();
    },
    setMultipleContentByValue: function setMultipleContentByValue() {
      var _this3 = this;

      if (!this.localValue) {
        this.initialLocalValueByDefault();
      }
      var content = [];

      this.localValue.forEach(function (item) {
        var textContent = _this3.MdSelect.items[item];

        if (textContent) {
          content.push(textContent);
        }
      });

      this.setContent(content.join(', '));
    },
    setFieldContent: function setFieldContent() {
      if (this.multiple) {
        this.setMultipleContentByValue();
      } else {
        this.setContentByValue();
      }
    },
    initialLocalValueByDefault: function initialLocalValueByDefault() {
      var isArray = Array.isArray(this.localValue);
      if (this.multiple && !isArray) {
        var isSet = this.localValue !== undefined && this.localValue !== null;
        this.localValue = isSet ? [this.localValue] : [];
        return;
      }
      if (!this.multiple && isArray) {
        this.localValue = this.localValue.length > 0 ? this.localValue[0] : null;
      }
    }
  },
  mounted: function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              this.showSelect = false;
              this.setFieldContent();

              _context2.next = 4;
              return this.$nextTick();

            case 4:
              this.didMount = true;

            case 5:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function mounted() {
      return _ref2.apply(this, arguments);
    }

    return mounted;
  }()
};

/***/ }),
/* 244 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/core/icons/MdDropDownIcon.vue
var MdDropDownIcon = __webpack_require__(245);
var MdDropDownIcon_default = /*#__PURE__*/__webpack_require__.n(MdDropDownIcon);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-44db031d","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/core/icons/MdDropDownIcon.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("md-icon", { staticClass: "md-icon-image" }, [
      _c(
        "svg",
        {
          attrs: {
            height: "24",
            viewBox: "0 0 24 24",
            width: "24",
            xmlns: "http://www.w3.org/2000/svg"
          }
        },
        [
          _c("path", { attrs: { d: "M7 10l5 5 5-5z" } }),
          _vm._v(" "),
          _c("path", { attrs: { d: "M0 0h24v24H0z", fill: "none" } })
        ]
      )
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var icons_MdDropDownIcon = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-44db031d", esExports)
  }
}
// CONCATENATED MODULE: ./src/core/icons/MdDropDownIcon.vue
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  MdDropDownIcon_default.a,
  icons_MdDropDownIcon,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/core/icons/MdDropDownIcon.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-44db031d", Component.options)
  } else {
    hotAPI.reload("data-v-44db031d", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var core_icons_MdDropDownIcon = __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MdIcon = __webpack_require__(5);

var _MdIcon2 = _interopRequireDefault(_MdIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'MdDropDownIcon',
  components: {
    MdIcon: _MdIcon2.default
  }
}; //
//
//
//
//
//
//
//
//

/***/ }),
/* 246 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //
//
//
//
//
//

var _MdPropValidator = __webpack_require__(4);

var _MdPropValidator2 = _interopRequireDefault(_MdPropValidator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = {
  name: 'MdMenu',
  props: {
    mdActive: Boolean,
    mdAlignTrigger: Boolean,
    mdOffsetX: Number,
    mdOffsetY: Number,
    mdFullWidth: Boolean,
    mdDense: Boolean,
    mdDirection: _extends({
      type: String,
      default: 'bottom-start'
    }, (0, _MdPropValidator2.default)('md-direction', ['top-end', 'top-start', 'bottom-end', 'bottom-start'])),
    mdCloseOnSelect: {
      type: Boolean,
      default: true
    },
    mdSize: _extends({
      type: String,
      default: 'small'
    }, (0, _MdPropValidator2.default)('md-size', ['auto', 'small', 'medium', 'big', 'huge']))
  },
  data: function data() {
    return {
      triggerEl: null,
      MdMenu: {
        instance: this,
        active: this.mdActive,
        direction: this.mdDirection,
        size: this.mdSize,
        alignTrigger: this.mdAlignTrigger,
        offsetX: this.mdOffsetX,
        offsetY: this.mdOffsetY,
        fullWidth: this.mdFullWidth,
        dense: this.mdDense,
        closeOnSelect: this.mdCloseOnSelect,
        bodyClickObserver: null,
        windowResizeObserver: null
      }
    };
  },
  provide: function provide() {
    return {
      MdMenu: this.MdMenu
    };
  },

  computed: {
    isActive: function isActive() {
      return this.MdMenu.active;
    }
  },
  watch: {
    mdActive: {
      immediate: true,
      handler: function handler(isActive) {
        this.MdMenu.active = isActive;
      }
    },
    mdDirection: function mdDirection(direction) {
      this.MdMenu.direction = direction;
    },
    mdSize: function mdSize(size) {
      this.MdMenu.size = size;
    },
    mdAlignTrigger: function mdAlignTrigger(aligned) {
      this.MdMenu.alignTrigger = aligned;
    },
    mdOffsetX: function mdOffsetX(offset) {
      this.MdMenu.offsetX = offset;
    },
    mdOffsetY: function mdOffsetY(offset) {
      this.MdMenu.offsetY = offset;
    },
    isActive: function isActive(_isActive) {
      this.$emit('update:mdActive', _isActive);

      if (!_isActive) {
        this.$emit('md-closed');
      } else {
        this.$emit('md-opened');
      }
    }
  },
  methods: {
    toggleContent: function toggleContent($event) {
      $event.stopPropagation();
      this.MdMenu.active = !this.MdMenu.active;
    }
  },
  mounted: function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.$nextTick();

            case 2:

              this.triggerEl = this.$el.querySelector('[md-menu-trigger]');

              if (this.triggerEl) {
                this.triggerEl.addEventListener('click', this.toggleContent);
              }

            case 4:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function mounted() {
      return _ref.apply(this, arguments);
    }

    return mounted;
  }(),
  beforeDestroy: function beforeDestroy() {
    if (this.triggerEl) {
      this.triggerEl.removeEventListener('click', this.toggleContent);
    }
  }
};

/***/ }),
/* 248 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _MdComponent = __webpack_require__(2);

var _MdComponent2 = _interopRequireDefault(_MdComponent);

var _MdPropValidator = __webpack_require__(4);

var _MdPropValidator2 = _interopRequireDefault(_MdPropValidator);

var _MdObserveEvent = __webpack_require__(46);

var _MdObserveEvent2 = _interopRequireDefault(_MdObserveEvent);

var _MdResizeObserver = __webpack_require__(250);

var _MdResizeObserver2 = _interopRequireDefault(_MdResizeObserver);

var _MdPopover = __webpack_require__(25);

var _MdPopover2 = _interopRequireDefault(_MdPopover);

var _MdFocusTrap = __webpack_require__(40);

var _MdFocusTrap2 = _interopRequireDefault(_MdFocusTrap);

var _MdList = __webpack_require__(47);

var _MdList2 = _interopRequireDefault(_MdList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = new _MdComponent2.default({
  name: 'MdMenuContent',
  components: {
    MdPopover: _MdPopover2.default,
    MdFocusTrap: _MdFocusTrap2.default,
    MdList: _MdList2.default
  },
  props: {
    mdListClass: [String, Boolean],
    mdContentClass: [String, Boolean]
  },
  inject: ['MdMenu'],
  data: function data() {
    return {
      highlightIndex: -1,
      didMount: false,
      highlightItems: [],
      popperSettings: null,
      menuStyles: ''
    };
  },
  computed: {
    highlightedItem: function highlightedItem() {
      return this.highlightItems[this.highlightIndex];
    },
    shouldRender: function shouldRender() {
      return this.MdMenu.active;
    },
    menuClasses: function menuClasses() {
      var _ref;

      var prefix = 'md-menu-content-';

      return _ref = {}, _defineProperty(_ref, prefix + this.MdMenu.direction, true), _defineProperty(_ref, prefix + this.MdMenu.size, true), _defineProperty(_ref, 'md-menu-content', this.didMount), _defineProperty(_ref, 'md-shallow', !this.didMount), _ref;
    },
    listClasses: function listClasses() {
      return _extends({
        'md-dense': this.MdMenu.dense
      }, this.mdListClass);
    }
  },
  watch: {
    shouldRender: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_shouldRender) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!_shouldRender) {
                  _context.next = 7;
                  break;
                }

                this.setPopperSettings();
                _context.next = 4;
                return this.$nextTick();

              case 4:
                this.setInitialHighlightIndex();
                this.createClickEventObserver();
                this.createResizeObserver();

              case 7:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function shouldRender(_x) {
        return _ref2.apply(this, arguments);
      }

      return shouldRender;
    }()
  },
  methods: {
    setPopperSettings: function setPopperSettings() {
      var _MdMenu = this.MdMenu,
          direction = _MdMenu.direction,
          alignTrigger = _MdMenu.alignTrigger;

      var _getOffsets = this.getOffsets(),
          offsetX = _getOffsets.offsetX,
          offsetY = _getOffsets.offsetY;

      if (!this.hasCustomOffsets()) {
        if (this.MdMenu.instance.$el && this.MdMenu.instance.$el.offsetHeight) {
          offsetY = -this.MdMenu.instance.$el.offsetHeight - 11;
        }

        if (direction.includes('start')) {
          offsetX = -8;
        } else if (direction.includes('end')) {
          offsetX = 8;
        }
      }

      this.popperSettings = {
        placement: direction,
        modifiers: {
          keepTogether: {
            enabled: true
          },
          flip: {
            enabled: false
          },
          offset: {
            offset: offsetX + ', ' + offsetY
          }
        }
      };
    },
    setInitialHighlightIndex: function setInitialHighlightIndex() {
      var _this = this;

      this.setHighlightItems();
      this.highlightItems.forEach(function (item, index) {
        if (item.classList.contains('md-selected')) {
          _this.highlightIndex = index - 1;
        }
      });
    },
    setHighlightItems: function setHighlightItems() {
      if (this.$el.querySelectorAll) {
        var items = this.$el.querySelectorAll('.md-list-item-container:not(.md-list-item-default):not([disabled])');

        this.highlightItems = Array.from(items);
      }
    },
    setHighlight: function setHighlight(direction) {
      this.setHighlightItems();

      if (this.highlightItems.length) {
        if (direction === 'down') {
          if (this.highlightIndex === this.highlightItems.length - 1) {
            this.highlightIndex = 0;
          } else {
            this.highlightIndex++;
          }
        } else {
          if (this.highlightIndex === 0) {
            this.highlightIndex = this.highlightItems.length - 1;
          } else {
            this.highlightIndex--;
          }
        }

        this.clearAllHighlights();
        this.setItemHighlight();
      }
    },
    clearAllHighlights: function clearAllHighlights() {
      this.highlightItems.forEach(function (item) {
        item.parentNode.__vue__.highlighted = false;
      });
    },
    setItemHighlight: function setItemHighlight() {
      if (this.highlightedItem) {
        this.highlightedItem.parentNode.__vue__.highlighted = true;
        if (this.$parent.$parent.setOffsets) {
          this.$parent.$parent.setOffsets(this.highlightedItem.parentNode);
        }
      }
    },
    setSelection: function setSelection() {
      if (this.highlightedItem) {
        this.highlightedItem.parentNode.click();
      }
    },
    onEsc: function onEsc() {
      this.MdMenu.active = false;
    },
    getOffsets: function getOffsets() {
      return {
        offsetX: this.MdMenu.offsetX || 0,
        offsetY: this.MdMenu.offsetY || 0
      };
    },
    hasCustomOffsets: function hasCustomOffsets() {
      var _MdMenu2 = this.MdMenu,
          offsetX = _MdMenu2.offsetX,
          offsetY = _MdMenu2.offsetY,
          alignTrigger = _MdMenu2.alignTrigger;


      return Boolean(alignTrigger || offsetY || offsetX);
    },
    createClickEventObserver: function createClickEventObserver() {
      var _this2 = this;

      if (document) {
        this.MdMenu.bodyClickObserver = new _MdObserveEvent2.default(document.body, 'click', function ($event) {
          $event.stopPropagation();

          if (!_this2.$el.contains($event.target)) {
            _this2.MdMenu.active = false;
            _this2.MdMenu.bodyClickObserver.destroy();
            _this2.MdMenu.windowResizeObserver.destroy();
          }
        });
      }
    },
    createResizeObserver: function createResizeObserver() {
      this.MdMenu.windowResizeObserver = new _MdResizeObserver2.default(window, this.setStyles);
    },
    setupWatchers: function setupWatchers() {
      this.$watch('MdMenu.direction', this.setPopperSettings);
      this.$watch('MdMenu.alignTrigger', this.setPopperSettings);
      this.$watch('MdMenu.offsetX', this.setPopperSettings);
      this.$watch('MdMenu.offsetY', this.setPopperSettings);
    },
    setStyles: function setStyles() {
      if (this.MdMenu.fullWidth) {
        this.menuStyles = '\n          width: ' + this.MdMenu.instance.$el.offsetWidth + 'px;\n          max-width: ' + this.MdMenu.instance.$el.offsetWidth + 'px\n        ';
      }
    }
  },
  mounted: function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.$nextTick();

            case 2:
              this.setHighlightItems();
              this.setupWatchers();
              this.setStyles();
              this.didMount = true;

            case 6:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function mounted() {
      return _ref3.apply(this, arguments);
    }

    return mounted;
  }(),
  beforeDestroy: function beforeDestroy() {
    if (this.MdMenu.bodyClickObserver) {
      this.MdMenu.bodyClickObserver.destroy();
    }

    if (this.MdMenu.windowResizeObserver) {
      this.MdMenu.windowResizeObserver.destroy();
    }
  }
});

/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _raf = __webpack_require__(9);

var _raf2 = _interopRequireDefault(_raf);

var _MdObserveEvent = __webpack_require__(46);

var _MdObserveEvent2 = _interopRequireDefault(_MdObserveEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var el = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
  var observerFn = arguments[1];

  var observer = (0, _MdObserveEvent2.default)(el, 'resize', function () {
    (0, _raf2.default)(observerFn);
  }, { passive: true });

  return {
    destroy: function destroy() {
      return observer.destroy;
    }
  };
};

/***/ }),
/* 251 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MdComponent = __webpack_require__(2);

var _MdComponent2 = _interopRequireDefault(_MdComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _MdComponent2.default({
  name: 'MdList'
}); //
//
//
//
//
//

/***/ }),
/* 253 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/components/MdField/MdSelect/MdOption.vue
var MdOption = __webpack_require__(255);
var MdOption_default = /*#__PURE__*/__webpack_require__.n(MdOption);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-32c8ce9c","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/components/MdField/MdSelect/MdOption.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "md-menu-item",
    {
      class: _vm.optionClasses,
      attrs: { disabled: _vm.isDisabled },
      on: { click: _vm.setSelection }
    },
    [
      _vm.MdSelect.multiple
        ? _c("md-checkbox", {
            staticClass: "md-primary",
            model: {
              value: _vm.isChecked,
              callback: function($$v) {
                _vm.isChecked = $$v
              },
              expression: "isChecked"
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _c(
        "span",
        { ref: "text", staticClass: "md-list-item-text" },
        [_vm._t("default")],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var MdSelect_MdOption = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-32c8ce9c", esExports)
  }
}
// CONCATENATED MODULE: ./src/components/MdField/MdSelect/MdOption.vue
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(254)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  MdOption_default.a,
  MdSelect_MdOption,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/MdField/MdSelect/MdOption.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-32c8ce9c", Component.options)
  } else {
    hotAPI.reload("data-v-32c8ce9c", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var MdField_MdSelect_MdOption = __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 254 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MdUuid = __webpack_require__(6);

var _MdUuid2 = _interopRequireDefault(_MdUuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'MdOption',
  props: {
    value: [String, Number, Boolean],
    disabled: Boolean
  },
  inject: {
    MdSelect: {},
    MdOptgroup: {
      default: {}
    }
  },
  data: function data() {
    return {
      uniqueId: 'md-option-' + (0, _MdUuid2.default)(),
      isSelected: false,
      isChecked: false
    };
  },
  computed: {
    selectValue: function selectValue() {
      return this.MdSelect.modelValue;
    },
    isMultiple: function isMultiple() {
      return this.MdSelect.multiple;
    },
    isDisabled: function isDisabled() {
      return this.MdOptgroup.disabled || this.disabled;
    },
    key: function key() {
      var isSet = this.value || this.value === 0;
      return isSet ? this.value : this.uniqueId;
    },
    inputLabel: function inputLabel() {
      return this.MdSelect.label;
    },
    optionClasses: function optionClasses() {
      return {
        'md-selected': this.isSelected || this.isChecked
      };
    }
  },
  watch: {
    inputLabel: function inputLabel() {
      this.setIsSelected();
    }
  },
  methods: {
    getTextContent: function getTextContent() {
      if (this.$el) {
        return this.$el.textContent.trim();
      }

      var slot = this.$slots.default;

      return slot ? slot[0].text.trim() : '';
    },
    setIsSelected: function setIsSelected() {
      this.isSelected = this.inputLabel === this.getTextContent();
    },
    setSingleSelection: function setSingleSelection() {
      this.MdSelect.setValue(this.value);
    },
    setMultipleSelection: function setMultipleSelection() {
      this.isChecked = !this.isChecked;
      this.MdSelect.setMultipleValue(this.value);
    },
    setSelection: function setSelection() {
      if (!this.disabled) {
        if (this.isMultiple) {
          this.setMultipleSelection();
        } else {
          this.setSingleSelection();
        }
      }
    },
    setItem: function setItem() {
      this.$set(this.MdSelect.items, this.key, this.getTextContent());
    }
  },
  updated: function updated() {
    this.setItem();
  },
  created: function created() {
    this.setItem();
    this.setIsSelected();

    if (this.isMultiple && this.selectValue && this.selectValue.length) {
      this.isChecked = this.selectValue.includes(this.value);
    }
  }
}; //
//
//
//
//
//
//
//
//
//

/***/ }),
/* 256 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/components/MdField/MdSelect/MdOptgroup.vue
var MdOptgroup = __webpack_require__(258);
var MdOptgroup_default = /*#__PURE__*/__webpack_require__.n(MdOptgroup);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-60840a93","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/components/MdField/MdSelect/MdOptgroup.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "md-optgroup" },
    [
      _c("md-subheader", [_vm._v(_vm._s(_vm.label))]),
      _vm._v(" "),
      _vm._t("default")
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var MdSelect_MdOptgroup = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-60840a93", esExports)
  }
}
// CONCATENATED MODULE: ./src/components/MdField/MdSelect/MdOptgroup.vue
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(257)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  MdOptgroup_default.a,
  MdSelect_MdOptgroup,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/MdField/MdSelect/MdOptgroup.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-60840a93", Component.options)
  } else {
    hotAPI.reload("data-v-60840a93", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var MdField_MdSelect_MdOptgroup = __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 257 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//

exports.default = {
  name: 'MdOptgroup',
  props: {
    label: String,
    disabled: Boolean
  },
  provide: function provide() {
    return {
      MdOptgroup: {
        disabled: this.disabled
      }
    };
  }
};

/***/ }),
/* 259 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/components/MdField/MdFile/MdFile.vue
var MdFile = __webpack_require__(261);
var MdFile_default = /*#__PURE__*/__webpack_require__.n(MdFile);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-16fac4a3","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/components/MdField/MdFile/MdFile.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "md-file" },
    [
      _c("md-file-icon", {
        nativeOn: {
          click: function($event) {
            _vm.openPicker($event)
          }
        }
      }),
      _vm._v(" "),
      _c(
        "input",
        _vm._b(
          {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.model,
                expression: "model"
              }
            ],
            staticClass: "md-input",
            attrs: { readonly: "" },
            domProps: { value: _vm.model },
            on: {
              focus: _vm.openPicker,
              blur: _vm.onBlur,
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.model = $event.target.value
              }
            }
          },
          "input",
          {
            disabled: _vm.disabled,
            required: _vm.required,
            placeholder: _vm.placeholder
          },
          false
        )
      ),
      _vm._v(" "),
      _c(
        "input",
        _vm._g(
          _vm._b(
            {
              ref: "inputFile",
              attrs: { type: "file" },
              on: { change: _vm.onChange }
            },
            "input",
            _vm.attributes,
            false
          ),
          _vm.$listeners
        )
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var MdFile_MdFile = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-16fac4a3", esExports)
  }
}
// CONCATENATED MODULE: ./src/components/MdField/MdFile/MdFile.vue
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(260)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  MdFile_default.a,
  MdFile_MdFile,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/MdField/MdFile/MdFile.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-16fac4a3", Component.options)
  } else {
    hotAPI.reload("data-v-16fac4a3", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var MdField_MdFile_MdFile = __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 260 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MdUuid = __webpack_require__(6);

var _MdUuid2 = _interopRequireDefault(_MdUuid);

var _MdFileIcon = __webpack_require__(262);

var _MdFileIcon2 = _interopRequireDefault(_MdFileIcon);

var _MdFieldMixin = __webpack_require__(15);

var _MdFieldMixin2 = _interopRequireDefault(_MdFieldMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  name: 'MdFile',
  components: {
    MdFileIcon: _MdFileIcon2.default
  },
  props: {
    id: {
      type: String,
      default: function _default() {
        return 'md-file-' + (0, _MdUuid2.default)();
      }
    },
    name: String
  },
  mixins: [_MdFieldMixin2.default],
  inject: ['MdField'],
  methods: {
    getMultipleName: function getMultipleName(files) {
      var names = [];

      [].concat(_toConsumableArray(files)).forEach(function (_ref) {
        var name = _ref.name;
        return names.push(name);
      });

      return names.join(', ');
    },
    getFileName: function getFileName(files, target) {
      if (!files) {
        return target.value.split('\\').pop();
      }

      if (files.length > 1) {
        return this.getMultipleName(files);
      }

      if (files.length === 1) {
        return files[0].name;
      }

      return null;
    },
    openPicker: function openPicker() {
      this.onFocus();
      this.$refs.inputFile.click();
    },
    onChange: function onChange($event) {
      this.onFileSelected($event);
    },
    onFileSelected: function onFileSelected(_ref2) {
      var target = _ref2.target,
          dataTransfer = _ref2.dataTransfer;

      var files = target.files || dataTransfer.files;

      this.model = this.getFileName(files, target);
      this.$emit('md-change', files || target.value);
    }
  },
  created: function created() {
    this.MdField.file = true;
  },
  beforeDestroy: function beforeDestroy() {
    this.MdField.file = false;
  }
};

/***/ }),
/* 262 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/core/icons/MdFileIcon.vue
var MdFileIcon = __webpack_require__(263);
var MdFileIcon_default = /*#__PURE__*/__webpack_require__.n(MdFileIcon);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-3bd0ca30","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/core/icons/MdFileIcon.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("md-icon", { staticClass: "md-icon-image" }, [
      _c(
        "svg",
        {
          attrs: {
            height: "24",
            viewBox: "0 0 24 24",
            width: "24",
            xmlns: "http://www.w3.org/2000/svg"
          }
        },
        [
          _c("path", {
            attrs: {
              d:
                "M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6h-1.5z"
            }
          }),
          _vm._v(" "),
          _c("path", { attrs: { d: "M0 0h24v24H0z", fill: "none" } })
        ]
      )
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var icons_MdFileIcon = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3bd0ca30", esExports)
  }
}
// CONCATENATED MODULE: ./src/core/icons/MdFileIcon.vue
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  MdFileIcon_default.a,
  icons_MdFileIcon,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/core/icons/MdFileIcon.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3bd0ca30", Component.options)
  } else {
    hotAPI.reload("data-v-3bd0ca30", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var core_icons_MdFileIcon = __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MdIcon = __webpack_require__(5);

var _MdIcon2 = _interopRequireDefault(_MdIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'MdFileIcon',
  components: {
    MdIcon: _MdIcon2.default
  }
}; //
//
//
//
//
//
//
//
//

/***/ }),
/* 264 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/components/MdField/MdTextarea/MdTextarea.vue
var MdTextarea = __webpack_require__(265);
var MdTextarea_default = /*#__PURE__*/__webpack_require__.n(MdTextarea);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-445d103a","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/components/MdField/MdTextarea/MdTextarea.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "textarea",
    _vm._g(
      _vm._b(
        {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.model,
              expression: "model"
            }
          ],
          staticClass: "md-textarea",
          style: _vm.textareaStyles,
          domProps: { value: _vm.model },
          on: {
            focus: _vm.onFocus,
            blur: _vm.onBlur,
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.model = $event.target.value
            }
          }
        },
        "textarea",
        _vm.attributes,
        false
      ),
      _vm.$listeners
    )
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var MdTextarea_MdTextarea = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-445d103a", esExports)
  }
}
// CONCATENATED MODULE: ./src/components/MdField/MdTextarea/MdTextarea.vue
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  MdTextarea_default.a,
  MdTextarea_MdTextarea,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/MdField/MdTextarea/MdTextarea.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-445d103a", Component.options)
  } else {
    hotAPI.reload("data-v-445d103a", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var MdField_MdTextarea_MdTextarea = __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MdComponent = __webpack_require__(2);

var _MdComponent2 = _interopRequireDefault(_MdComponent);

var _MdUuid = __webpack_require__(6);

var _MdUuid2 = _interopRequireDefault(_MdUuid);

var _MdFieldMixin = __webpack_require__(15);

var _MdFieldMixin2 = _interopRequireDefault(_MdFieldMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } //
//
//
//
//
//
//
//
//
//
//
//

function calculateContentHeight(el, lineHeight) {
  var origHeight = el.style.height;
  var height = el.offsetHeight;
  var scrollHeight = el.scrollHeight;

  el.style.overflow = 'hidden';

  if (height >= scrollHeight) {
    el.style.height = height + lineHeight + 'px';

    if (scrollHeight < el.scrollHeight) {
      el.style.height = origHeight;

      return height;
    }
  }

  return scrollHeight;
}

exports.default = new _MdComponent2.default({
  name: 'MdTextarea',
  mixins: [_MdFieldMixin2.default],
  inject: ['MdField'],
  props: {
    id: {
      type: String,
      default: function _default() {
        return 'md-textarea-' + (0, _MdUuid2.default)();
      }
    },
    mdAutogrow: Boolean
  },
  computed: {
    textareaStyles: function textareaStyles() {
      return {
        height: this.textareaHeight
      };
    }
  },
  methods: {
    getTextAreaLineSize: function getTextAreaLineSize() {
      var style = window.getComputedStyle(this.$el);

      return parseInt(style.lineHeight, 10);
    },
    setTextAreaSize: function setTextAreaSize(height) {
      var newHeight = height;

      if (!height) {
        var size = this.getTextAreaLineSize();

        newHeight = calculateContentHeight(this.$el, size);
      }

      this.textareaHeight = newHeight + 'px';
    },
    applyStyles: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _this = this;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!this.mdAutogrow) {
                  _context.next = 6;
                  break;
                }

                this.setTextAreaSize(32);
                _context.next = 4;
                return this.$nextTick();

              case 4:
                this.setTextAreaSize();
                window.setTimeout(function () {
                  _this.$el.style.overflow = 'auto';
                }, 10);

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function applyStyles() {
        return _ref.apply(this, arguments);
      }

      return applyStyles;
    }(),
    setTextarea: function setTextarea() {
      this.MdField.textarea = true;
    },
    setAutogrow: function setAutogrow() {
      this.MdField.autogrow = this.mdAutogrow;
    },
    onInput: function onInput() {
      this.setFieldValue();
      this.applyStyles();
    }
  },
  created: function created() {
    this.setTextarea();
    this.setAutogrow();
  },
  mounted: function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.$nextTick();

            case 2:
              this.applyStyles();

            case 3:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function mounted() {
      return _ref2.apply(this, arguments);
    }

    return mounted;
  }(),
  beforeDestroy: function beforeDestroy() {
    this.setTextarea(false);
  }
});

/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _material = __webpack_require__(1);

var _material2 = _interopRequireDefault(_material);

var _MdHighlightText = __webpack_require__(267);

var _MdHighlightText2 = _interopRequireDefault(_MdHighlightText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (Vue) {
  (0, _material2.default)(Vue);
  Vue.component(_MdHighlightText2.default.name, _MdHighlightText2.default);
};

/***/ }),
/* 267 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_MdHighlightText_vue__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_MdHighlightText_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_MdHighlightText_vue__);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(268)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */
var __vue_template__ = null
/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_MdHighlightText_vue___default.a,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/MdHighlightText/MdHighlightText.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-41eb36a5", Component.options)
  } else {
    hotAPI.reload("data-v-41eb36a5", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 268 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = __webpack_require__(7);

var _vue2 = _interopRequireDefault(_vue);

var _MdComponent = __webpack_require__(2);

var _MdComponent2 = _interopRequireDefault(_MdComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getHTMLOutput(str) {
  var text = str;

  if (!text) {
    text = '$&';
  }

  return '<span class="md-highlight-text-match">' + text + '</span>';
}

function fuzzyHighlight(text, term) {
  if (term.length === 0) {
    return text;
  }

  var offset = text.toLowerCase().indexOf(term[0].toLowerCase());

  if (offset === -1) {
    return null;
  }

  var last = 0;
  for (var i = 1; i < term.length; i++) {
    if (text[offset + i] !== term[i]) {
      break;
    }

    last = i;
  }

  var before = text.slice(0, offset);
  var match = getHTMLOutput(text.slice(offset, offset + last + 1));
  var after = fuzzyHighlight(text.slice(offset + last + 1), term.slice(last + 1));

  return before + match + after;
}

function normalHighlight(text, term) {
  var matches = new RegExp(term + '(?!([^<]+)?<)', 'gi');

  return text.replace(matches, getHTMLOutput());
}

function generateHighlight(_ref, term, isFuzzy) {
  var text = _ref.text;

  if (text && term && term[0]) {
    if (isFuzzy) {
      return fuzzyHighlight(text, term) || text;
    }

    return normalHighlight(text, term);
  }

  return text;
}

exports.default = new _MdComponent2.default({
  name: 'MdHighlightText',
  abstract: true,
  props: {
    mdTerm: String,
    mdFuzzySearch: {
      type: Boolean,
      default: true
    }
  },
  render: function render(createElement) {
    try {
      var defaultSlot = this.$slots.default;

      if (!defaultSlot) {
        return null;
      }

      if (defaultSlot.length > 1 || defaultSlot[0].tag) {
        throw new Error();
      }

      var HTMLContent = generateHighlight(defaultSlot[0], this.mdTerm, this.mdFuzzySearch);

      return createElement('div', {
        staticClass: 'md-highlight-text',
        class: this.$mdActiveTheme,
        domProps: {
          innerHTML: HTMLContent
        }
      });
    } catch (e) {
      _vue2.default.util.warn('MdHighlightText can only render text nodes.', this);
    }

    return null;
  }
});

/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _material = __webpack_require__(1);

var _material2 = _interopRequireDefault(_material);

var _MdImage = __webpack_require__(271);

var _MdImage2 = _interopRequireDefault(_MdImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (Vue) {
  (0, _material2.default)(Vue);
  Vue.component(_MdImage2.default.name, _MdImage2.default);
};

/***/ }),
/* 271 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/components/MdImage/MdImage.vue
var MdImage = __webpack_require__(273);
var MdImage_default = /*#__PURE__*/__webpack_require__.n(MdImage);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-4511ea59","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/components/MdImage/MdImage.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "md-image", class: [_vm.$mdActiveTheme] },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var MdImage_MdImage = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4511ea59", esExports)
  }
}
// CONCATENATED MODULE: ./src/components/MdImage/MdImage.vue
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(272)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  MdImage_default.a,
  MdImage_MdImage,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/MdImage/MdImage.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4511ea59", Component.options)
  } else {
    hotAPI.reload("data-v-4511ea59", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var components_MdImage_MdImage = __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 272 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MdComponent = __webpack_require__(2);

var _MdComponent2 = _interopRequireDefault(_MdComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _MdComponent2.default({
  name: 'MdImage',
  props: {
    mdSrc: String
  }
});

/***/ }),
/* 274 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(275);

exports.default = function (Vue) {};

/***/ }),
/* 275 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _material = __webpack_require__(1);

var _material2 = _interopRequireDefault(_material);

var _MdList = __webpack_require__(47);

var _MdList2 = _interopRequireDefault(_MdList);

var _MdListItem = __webpack_require__(48);

var _MdListItem2 = _interopRequireDefault(_MdListItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (Vue) {
  (0, _material2.default)(Vue);
  Vue.component(_MdList2.default.name, _MdList2.default);
  Vue.component(_MdListItem2.default.name, _MdListItem2.default);
};

/***/ }),
/* 277 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _MdInteractionEvents = __webpack_require__(49);

var _MdInteractionEvents2 = _interopRequireDefault(_MdInteractionEvents);

var _MdRouterLinkProps = __webpack_require__(12);

var _MdRouterLinkProps2 = _interopRequireDefault(_MdRouterLinkProps);

var _MdListItemDefault = __webpack_require__(279);

var _MdListItemDefault2 = _interopRequireDefault(_MdListItemDefault);

var _MdListItemButton = __webpack_require__(283);

var _MdListItemButton2 = _interopRequireDefault(_MdListItemButton);

var _MdListItemLink = __webpack_require__(285);

var _MdListItemLink2 = _interopRequireDefault(_MdListItemLink);

var _MdListItemRouter = __webpack_require__(287);

var _MdListItemRouter2 = _interopRequireDefault(_MdListItemRouter);

var _MdListItemExpand = __webpack_require__(289);

var _MdListItemExpand2 = _interopRequireDefault(_MdListItemExpand);

var _MdButton = __webpack_require__(13);

var _MdButton2 = _interopRequireDefault(_MdButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function hasExpansion(props) {
  return props.hasOwnProperty('mdExpand') && props.mdExpand !== false;
}

function resolveScopedSlot(props, children) {
  if (hasExpansion(props)) {
    return {
      'md-expand': function mdExpand() {
        return children['md-expand'][0];
      }
    };
  }
}

exports.default = {
  name: 'MdListItem',
  functional: true,
  components: {
    MdButton: _MdButton2.default
  },
  render: function render(createElement, _ref) {
    var parent = _ref.parent,
        props = _ref.props,
        listeners = _ref.listeners,
        data = _ref.data,
        slots = _ref.slots;

    var children = slots();
    var listComponent = _MdListItemDefault2.default;
    var staticClass = 'md-list-item';

    if (hasExpansion(props)) {
      listComponent = _MdListItemExpand2.default;
    } else if (parent && parent.$router && props.to) {
      listComponent = _MdListItemRouter2.default;
      listComponent.props = (0, _MdRouterLinkProps2.default)(parent, {
        target: String
      });
      delete listComponent.props.href;
    } else if (props.href) {
      listComponent = _MdListItemLink2.default;
    } else {
      var listenerNames = Object.keys(listeners);

      listenerNames.forEach(function (listener) {
        if (_MdInteractionEvents2.default.includes(listener)) {
          listComponent = _MdListItemButton2.default;
        }
      });
    }

    if (data.staticClass) {
      staticClass += ' ' + data.staticClass;
    }

    return createElement('li', _extends({}, data, {
      staticClass: staticClass,
      on: listeners
    }), [createElement(listComponent, {
      props: props,
      scopedSlots: resolveScopedSlot(props, children),
      staticClass: 'md-list-item-container md-button-clean'
    }, children.default)]);
  }
};

/***/ }),
/* 279 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/components/MdList/MdListItem/MdListItemDefault.vue
var MdListItemDefault = __webpack_require__(280);
var MdListItemDefault_default = /*#__PURE__*/__webpack_require__.n(MdListItemDefault);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-b4eac868","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/components/MdList/MdListItem/MdListItemDefault.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "md-list-item-default", on: { click: _vm.toggleControl } },
    [
      _c(
        "md-list-item-content",
        { attrs: { "md-disabled": "" } },
        [_vm._t("default")],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var MdListItem_MdListItemDefault = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-b4eac868", esExports)
  }
}
// CONCATENATED MODULE: ./src/components/MdList/MdListItem/MdListItemDefault.vue
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  MdListItemDefault_default.a,
  MdListItem_MdListItemDefault,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/MdList/MdListItem/MdListItemDefault.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b4eac868", Component.options)
  } else {
    hotAPI.reload("data-v-b4eac868", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var MdList_MdListItem_MdListItemDefault = __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MdListItemMixin = __webpack_require__(11);

var _MdListItemMixin2 = _interopRequireDefault(_MdListItemMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'MdListItemDefault',
  mixins: [_MdListItemMixin2.default],
  methods: {
    toggleControl: function toggleControl() {
      var control = this.$el.querySelector('.md-checkbox-container, .md-switch-container, .md-radio-container');

      if (control) {
        control.click();
      }
    }
  }
}; //
//
//
//
//
//
//
//

/***/ }),
/* 281 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/components/MdList/MdListItem/MdListItemContent.vue
var MdListItemContent = __webpack_require__(282);
var MdListItemContent_default = /*#__PURE__*/__webpack_require__.n(MdListItemContent);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-af37c3f8","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/components/MdList/MdListItem/MdListItemContent.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "md-ripple",
    {
      staticClass: "md-list-item-content",
      attrs: { "md-disabled": _vm.mdDisabled }
    },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var MdListItem_MdListItemContent = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-af37c3f8", esExports)
  }
}
// CONCATENATED MODULE: ./src/components/MdList/MdListItem/MdListItemContent.vue
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  MdListItemContent_default.a,
  MdListItem_MdListItemContent,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/MdList/MdListItem/MdListItemContent.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-af37c3f8", Component.options)
  } else {
    hotAPI.reload("data-v-af37c3f8", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var MdList_MdListItem_MdListItemContent = __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 282 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MdRipple = __webpack_require__(8);

var _MdRipple2 = _interopRequireDefault(_MdRipple);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'MdListItemContent',
  components: {
    MdRipple: _MdRipple2.default
  },
  props: {
    mdDisabled: Boolean
  }
}; //
//
//
//
//
//

/***/ }),
/* 283 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/components/MdList/MdListItem/MdListItemButton.vue
var MdListItemButton = __webpack_require__(284);
var MdListItemButton_default = /*#__PURE__*/__webpack_require__.n(MdListItemButton);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-4d27ca12","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/components/MdList/MdListItem/MdListItemButton.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "button",
    {
      staticClass: "md-list-item-button",
      attrs: { type: "button", disabled: _vm.disabled }
    },
    [
      _c(
        "md-list-item-content",
        { attrs: { "md-disabled": _vm.isDisabled } },
        [_vm._t("default")],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var MdListItem_MdListItemButton = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4d27ca12", esExports)
  }
}
// CONCATENATED MODULE: ./src/components/MdList/MdListItem/MdListItemButton.vue
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  MdListItemButton_default.a,
  MdListItem_MdListItemButton,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/MdList/MdListItem/MdListItemButton.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4d27ca12", Component.options)
  } else {
    hotAPI.reload("data-v-4d27ca12", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var MdList_MdListItem_MdListItemButton = __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MdListItemMixin = __webpack_require__(11);

var _MdListItemMixin2 = _interopRequireDefault(_MdListItemMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'MdListItemButton',
  mixins: [_MdListItemMixin2.default]
}; //
//
//
//
//
//
//
//

/***/ }),
/* 285 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/components/MdList/MdListItem/MdListItemLink.vue
var MdListItemLink = __webpack_require__(286);
var MdListItemLink_default = /*#__PURE__*/__webpack_require__.n(MdListItemLink);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-49acb202","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/components/MdList/MdListItem/MdListItemLink.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "a",
    _vm._b(
      { staticClass: "md-list-item-link" },
      "a",
      { href: _vm.href, disabled: _vm.disabled, target: _vm.target },
      false
    ),
    [
      _c(
        "md-list-item-content",
        { attrs: { "md-disabled": _vm.isDisabled } },
        [_vm._t("default")],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var MdListItem_MdListItemLink = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-49acb202", esExports)
  }
}
// CONCATENATED MODULE: ./src/components/MdList/MdListItem/MdListItemLink.vue
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  MdListItemLink_default.a,
  MdListItem_MdListItemLink,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/MdList/MdListItem/MdListItemLink.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-49acb202", Component.options)
  } else {
    hotAPI.reload("data-v-49acb202", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var MdList_MdListItem_MdListItemLink = __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MdListItemMixin = __webpack_require__(11);

var _MdListItemMixin2 = _interopRequireDefault(_MdListItemMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'MdListItemLink',
  mixins: [_MdListItemMixin2.default],
  props: {
    href: String,
    target: String
  }
}; //
//
//
//
//
//
//
//

/***/ }),
/* 287 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/components/MdList/MdListItem/MdListItemRouter.vue
var MdListItemRouter = __webpack_require__(288);
var MdListItemRouter_default = /*#__PURE__*/__webpack_require__.n(MdListItemRouter);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-091cb0e4","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/components/MdList/MdListItem/MdListItemRouter.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "router-link",
    _vm._b(
      { staticClass: "md-list-item-router" },
      "router-link",
      _vm.routerProps,
      false
    ),
    [
      _c(
        "md-list-item-content",
        { attrs: { "md-disabled": _vm.isDisabled } },
        [_vm._t("default")],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var MdListItem_MdListItemRouter = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-091cb0e4", esExports)
  }
}
// CONCATENATED MODULE: ./src/components/MdList/MdListItem/MdListItemRouter.vue
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  MdListItemRouter_default.a,
  MdListItem_MdListItemRouter,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/MdList/MdListItem/MdListItemRouter.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-091cb0e4", Component.options)
  } else {
    hotAPI.reload("data-v-091cb0e4", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var MdList_MdListItem_MdListItemRouter = __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 288 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MdListItemMixin = __webpack_require__(11);

var _MdListItemMixin2 = _interopRequireDefault(_MdListItemMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'MdListItemRouter',
  mixins: [_MdListItemMixin2.default],
  computed: {
    routerProps: function routerProps() {
      return this.$props;
    }
  }
}; //
//
//
//
//
//
//
//

/***/ }),
/* 289 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/components/MdList/MdListItem/MdListItemExpand.vue
var MdListItemExpand = __webpack_require__(291);
var MdListItemExpand_default = /*#__PURE__*/__webpack_require__.n(MdListItemExpand);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-378e4342","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/components/MdList/MdListItem/MdListItemExpand.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "md-list-item-expand", class: _vm.expandClasses },
    [
      _c(
        "md-list-item-content",
        {
          attrs: { "md-disabled": _vm.isDisabled },
          nativeOn: {
            click: function($event) {
              _vm.toggleExpand($event)
            }
          }
        },
        [
          _vm._t("default"),
          _vm._v(" "),
          _c("md-arrow-down-icon", { staticClass: "md-list-expand-icon" })
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          ref: "listExpand",
          staticClass: "md-list-expand",
          style: _vm.expandStyles
        },
        [_vm._t("md-expand")],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var MdListItem_MdListItemExpand = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-378e4342", esExports)
  }
}
// CONCATENATED MODULE: ./src/components/MdList/MdListItem/MdListItemExpand.vue
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(290)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  MdListItemExpand_default.a,
  MdListItem_MdListItemExpand,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/MdList/MdListItem/MdListItemExpand.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-378e4342", Component.options)
  } else {
    hotAPI.reload("data-v-378e4342", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var MdList_MdListItem_MdListItemExpand = __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 290 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 291 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _raf = __webpack_require__(9);

var _raf2 = _interopRequireDefault(_raf);

var _MdArrowDownIcon = __webpack_require__(292);

var _MdArrowDownIcon2 = _interopRequireDefault(_MdArrowDownIcon);

var _MdListItemMixin = __webpack_require__(11);

var _MdListItemMixin2 = _interopRequireDefault(_MdListItemMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'MdListItemExpand',
  components: {
    MdArrowDownIcon: _MdArrowDownIcon2.default
  },
  mixins: [_MdListItemMixin2.default],
  data: function data() {
    return {
      expandStyles: {},
      showContent: false
    };
  },
  computed: {
    expandClasses: function expandClasses() {
      return {
        'md-active': this.showContent
      };
    }
  },
  methods: {
    getChildrenSize: function getChildrenSize() {
      var expandEl = this.$refs.listExpand;
      var size = 0;

      Array.from(expandEl.children).forEach(function (child) {
        size += child.offsetHeight;
      });

      return size;
    },
    toggleExpand: function toggleExpand() {
      var _this = this;

      (0, _raf2.default)(function () {
        var fullHeight = 0;

        if (!_this.showContent) {
          fullHeight = 'auto'; // this.getChildrenSize() + 'px'
        }

        _this.expandStyles = { height: fullHeight };
        _this.showContent = !_this.showContent;
      });
    }
  }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 292 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/core/icons/MdArrowDownIcon.vue
var MdArrowDownIcon = __webpack_require__(293);
var MdArrowDownIcon_default = /*#__PURE__*/__webpack_require__.n(MdArrowDownIcon);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-2443de21","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/core/icons/MdArrowDownIcon.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("md-icon", { staticClass: "md-icon-image" }, [
      _c(
        "svg",
        {
          attrs: {
            height: "24",
            viewBox: "0 0 24 24",
            width: "24",
            xmlns: "http://www.w3.org/2000/svg"
          }
        },
        [
          _c("path", {
            attrs: { d: "M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z" }
          }),
          _vm._v(" "),
          _c("path", { attrs: { d: "M0-.75h24v24H0z", fill: "none" } })
        ]
      )
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var icons_MdArrowDownIcon = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2443de21", esExports)
  }
}
// CONCATENATED MODULE: ./src/core/icons/MdArrowDownIcon.vue
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  MdArrowDownIcon_default.a,
  icons_MdArrowDownIcon,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/core/icons/MdArrowDownIcon.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2443de21", Component.options)
  } else {
    hotAPI.reload("data-v-2443de21", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var core_icons_MdArrowDownIcon = __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 293 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MdIcon = __webpack_require__(5);

var _MdIcon2 = _interopRequireDefault(_MdIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'MdArrowDownIcon',
  components: {
    MdIcon: _MdIcon2.default
  }
}; //
//
//
//
//
//
//
//
//

/***/ }),
/* 294 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _material = __webpack_require__(1);

var _material2 = _interopRequireDefault(_material);

var _MdMenu = __webpack_require__(44);

var _MdMenu2 = _interopRequireDefault(_MdMenu);

var _MdMenuContent = __webpack_require__(45);

var _MdMenuContent2 = _interopRequireDefault(_MdMenuContent);

var _MdMenuItem = __webpack_require__(295);

var _MdMenuItem2 = _interopRequireDefault(_MdMenuItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (Vue) {
  (0, _material2.default)(Vue);
  Vue.component(_MdMenu2.default.name, _MdMenu2.default);
  Vue.component(_MdMenuContent2.default.name, _MdMenuContent2.default);
  Vue.component(_MdMenuItem2.default.name, _MdMenuItem2.default);
};

/***/ }),
/* 295 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/components/MdMenu/MdMenuItem.vue
var MdMenuItem = __webpack_require__(296);
var MdMenuItem_default = /*#__PURE__*/__webpack_require__.n(MdMenuItem);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-26762702","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/components/MdMenu/MdMenuItem.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "md-list-item",
    _vm._g(
      _vm._b(
        {
          staticClass: "md-menu-item",
          class: [_vm.itemClasses, _vm.$mdActiveTheme],
          attrs: { disabled: _vm.disabled, tabindex: _vm.highlighted && -1 }
        },
        "md-list-item",
        _vm.$attrs,
        false
      ),
      _vm.listeners
    ),
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var MdMenu_MdMenuItem = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-26762702", esExports)
  }
}
// CONCATENATED MODULE: ./src/components/MdMenu/MdMenuItem.vue
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  MdMenuItem_default.a,
  MdMenu_MdMenuItem,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/MdMenu/MdMenuItem.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-26762702", Component.options)
  } else {
    hotAPI.reload("data-v-26762702", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var components_MdMenu_MdMenuItem = __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 296 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MdComponent = __webpack_require__(2);

var _MdComponent2 = _interopRequireDefault(_MdComponent);

var _MdInteractionEvents = __webpack_require__(49);

var _MdInteractionEvents2 = _interopRequireDefault(_MdInteractionEvents);

var _MdListItem = __webpack_require__(48);

var _MdListItem2 = _interopRequireDefault(_MdListItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _MdComponent2.default({
  name: 'MdMenuItem',
  props: {
    disabled: Boolean
  },
  inject: ['MdMenu'],
  data: function data() {
    return {
      listeners: {},
      highlighted: false
    };
  },
  computed: {
    itemClasses: function itemClasses() {
      return {
        'md-highlight': this.highlighted
      };
    }
  },
  created: function created() {
    var _this = this;

    if (this.MdMenu.closeOnSelect) {
      var listenerNames = Object.keys(this.$listeners);
      var hasInteraction = false;

      listenerNames.forEach(function (listener) {
        if (_MdInteractionEvents2.default.includes(listener)) {
          _this.listeners[listener] = function ($event) {
            if (!_this.disabled) {
              _this.$listeners[listener]($event);
              _this.MdMenu.active = false;

              if (_this.MdMenu.eventObserver) {
                _this.MdMenu.eventObserver.destroy();
              }
            }
          };
        } else {
          _this.listeners[listener] = _this.$listeners[listener];
        }
      });
    } else {
      this.listeners = this.$listeners;
    }
  }
}); //
//
//
//
//
//

/***/ }),
/* 297 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _material = __webpack_require__(1);

var _material2 = _interopRequireDefault(_material);

var _MdProgressBar = __webpack_require__(298);

var _MdProgressBar2 = _interopRequireDefault(_MdProgressBar);

var _MdProgressSpinner = __webpack_require__(301);

var _MdProgressSpinner2 = _interopRequireDefault(_MdProgressSpinner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (Vue) {
  (0, _material2.default)(Vue);
  Vue.component(_MdProgressBar2.default.name, _MdProgressBar2.default);
  Vue.component(_MdProgressSpinner2.default.name, _MdProgressSpinner2.default);
};

/***/ }),
/* 298 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/components/MdProgress/MdProgressBar/MdProgressBar.vue
var MdProgressBar = __webpack_require__(300);
var MdProgressBar_default = /*#__PURE__*/__webpack_require__.n(MdProgressBar);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-ec82e758","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/components/MdProgress/MdProgressBar/MdProgressBar.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { name: "md-progress-bar", appear: "" } }, [
    _c(
      "div",
      {
        staticClass: "md-progress-bar",
        class: [_vm.progressClasses, _vm.$mdActiveTheme]
      },
      [
        _c("div", {
          staticClass: "md-progress-bar-track",
          style: _vm.progressTrackStyle
        }),
        _vm._v(" "),
        _c("div", {
          staticClass: "md-progress-bar-fill",
          style: _vm.progressValueStyle
        }),
        _vm._v(" "),
        _c("div", {
          staticClass: "md-progress-bar-buffer",
          attrs: { Style: _vm.progressBufferStyle }
        })
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var MdProgressBar_MdProgressBar = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-ec82e758", esExports)
  }
}
// CONCATENATED MODULE: ./src/components/MdProgress/MdProgressBar/MdProgressBar.vue
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(299)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  MdProgressBar_default.a,
  MdProgressBar_MdProgressBar,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/MdProgress/MdProgressBar/MdProgressBar.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ec82e758", Component.options)
  } else {
    hotAPI.reload("data-v-ec82e758", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var MdProgress_MdProgressBar_MdProgressBar = __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 299 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 300 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //
//
//
//
//
//
//
//
//
//

var _MdComponent = __webpack_require__(2);

var _MdComponent2 = _interopRequireDefault(_MdComponent);

var _MdPropValidator = __webpack_require__(4);

var _MdPropValidator2 = _interopRequireDefault(_MdPropValidator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _MdComponent2.default({
  name: 'MdProgressBar',
  props: {
    mdValue: {
      type: Number,
      default: 0
    },
    mdBuffer: {
      type: Number,
      default: 0
    },
    mdMode: _extends({
      type: String,
      default: 'determinate'
    }, (0, _MdPropValidator2.default)('md-mode', ['determinate', 'indeterminate', 'query', 'buffer']))
  },
  computed: {
    isDeterminate: function isDeterminate() {
      return this.mdMode === 'determinate';
    },
    isBuffer: function isBuffer() {
      return this.mdMode === 'buffer';
    },
    hasAmountFill: function hasAmountFill() {
      return this.isBuffer || this.isDeterminate;
    },
    progressClasses: function progressClasses() {
      return 'md-' + this.mdMode;
    },
    progressValueStyle: function progressValueStyle() {
      if (this.hasAmountFill) {
        return 'width: ' + this.mdValue + '%';
      }
    },
    progressTrackStyle: function progressTrackStyle() {
      if (this.hasAmountFill) {
        return 'width: ' + this.mdBuffer + '%';
      }
    },
    progressBufferStyle: function progressBufferStyle() {
      if (this.hasAmountFill) {
        return 'left: calc(' + this.mdBuffer + '% + 8px)';
      }
    }
  }
});

/***/ }),
/* 301 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/components/MdProgress/MdProgressSpinner/MdProgressSpinner.vue
var MdProgressSpinner = __webpack_require__(303);
var MdProgressSpinner_default = /*#__PURE__*/__webpack_require__.n(MdProgressSpinner);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-0abf13e0","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/components/MdProgress/MdProgressSpinner/MdProgressSpinner.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "transition",
    { attrs: { name: "md-progress-spinner", appear: "" } },
    [
      _c(
        "div",
        {
          staticClass: "md-progress-spinner",
          class: [_vm.progressClasses, _vm.$mdActiveTheme]
        },
        [
          _c(
            "svg",
            {
              staticClass: "md-progress-spinner-draw",
              style: _vm.svgStyles,
              attrs: {
                preserveAspectRatio: "xMidYMid meet",
                focusable: "false",
                viewBox: "0 0 " + _vm.mdDiameter + " " + _vm.mdDiameter
              }
            },
            [
              _c("circle", {
                staticClass: "md-progress-spinner-circle",
                style: _vm.circleStyles,
                attrs: { cx: "50%", cy: "50%", r: _vm.circleRadius }
              })
            ]
          )
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var MdProgressSpinner_MdProgressSpinner = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0abf13e0", esExports)
  }
}
// CONCATENATED MODULE: ./src/components/MdProgress/MdProgressSpinner/MdProgressSpinner.vue
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(302)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  MdProgressSpinner_default.a,
  MdProgressSpinner_MdProgressSpinner,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/MdProgress/MdProgressSpinner/MdProgressSpinner.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0abf13e0", Component.options)
  } else {
    hotAPI.reload("data-v-0abf13e0", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var MdProgress_MdProgressSpinner_MdProgressSpinner = __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 302 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 303 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var _MdComponent = __webpack_require__(2);

var _MdComponent2 = _interopRequireDefault(_MdComponent);

var _MdPropValidator = __webpack_require__(4);

var _MdPropValidator2 = _interopRequireDefault(_MdPropValidator);

var _MdProgressSpinnerAnimation = __webpack_require__(304);

var _MdProgressSpinnerAnimation2 = _interopRequireDefault(_MdProgressSpinnerAnimation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var MdProgressSpinner = {
  styleTag: null,
  diameters: new Set()
};

exports.default = new _MdComponent2.default({
  name: 'MdProgressSpinner',
  props: {
    mdValue: {
      type: Number,
      default: 0
    },
    mdDiameter: {
      type: Number,
      default: 60
    },
    mdStroke: {
      type: Number,
      default: 6
    },
    mdMode: _extends({
      type: String,
      default: 'determinate'
    }, (0, _MdPropValidator2.default)('md-mode', ['determinate', 'indeterminate']))
  },
  computed: {
    isDeterminate: function isDeterminate() {
      return this.mdMode === 'determinate';
    },
    isIndeterminate: function isIndeterminate() {
      return this.mdMode === 'indeterminate';
    },
    isIE: function isIE() {
      return navigator.userAgent.toLowerCase().includes('trident');
    },
    progressClasses: function progressClasses() {
      var _ref;

      var animationClass = 'md-progress-spinner-indeterminate';

      if (this.isIE) {
        animationClass += '-fallback';
      }

      return _ref = {}, _defineProperty(_ref, animationClass, true), _defineProperty(_ref, 'md-' + this.mdMode, true), _ref;
    },
    svgStyles: function svgStyles() {
      var size = this.mdDiameter + 'px';

      return {
        width: size,
        height: size
      };
    },
    circleStyles: function circleStyles() {
      return {
        'stroke-dashoffset': this.circleStrokeDashOffset,
        'stroke-dasharray': this.circleStrokeDashArray,
        'stroke-width': this.circleStrokeWidth,
        'animation-name': 'md-progress-spinner-stroke-rotate-' + this.mdDiameter
      };
    },
    circleRadius: function circleRadius() {
      return (this.mdDiameter - this.mdStroke) / 2;
    },
    circleStrokeWidth: function circleStrokeWidth() {
      return this.mdStroke + 'px';
    },
    circleCircumference: function circleCircumference() {
      return 2 * Math.PI * this.circleRadius;
    },
    circleStrokeDashArray: function circleStrokeDashArray() {
      return this.circleCircumference + 'px';
    },
    circleStrokeDashOffset: function circleStrokeDashOffset() {
      if (this.isDeterminate) {
        return this.circleCircumference * (100 - this.mdValue) / 100 + 'px';
      }

      if (this.isIndeterminate && this.isIE) {
        return this.circleCircumference * 0.2 + 'px';
      }

      return null;
    }
  },
  watch: {
    mdDiameter: function mdDiameter() {
      this.attachStyleTag();
    }
  },
  methods: {
    getAnimationCSS: function getAnimationCSS() {
      return _MdProgressSpinnerAnimation2.default.replace(/START_VALUE/g, '' + 0.95 * this.circleCircumference).replace(/END_VALUE/g, '' + 0.2 * this.circleCircumference).replace(/DIAMETER/g, '' + this.mdDiameter);
    },
    attachStyleTag: function attachStyleTag() {
      var styleTag = MdProgressSpinner.styleTag;

      if (!styleTag) {
        styleTag = document.getElementById('md-progress-spinner-styles');
      }

      if (!styleTag) {
        styleTag = document.createElement('style');

        styleTag.id = 'md-progress-spinner-styles';
        document.head.appendChild(styleTag);
        MdProgressSpinner.styleTag = styleTag;
      }

      if (styleTag && styleTag.sheet) {
        styleTag.sheet.insertRule(this.getAnimationCSS(), 0);
      }

      MdProgressSpinner.diameters.add(this.mdDiameter);
    }
  },
  mounted: function mounted() {
    this.attachStyleTag();
  }
});

/***/ }),
/* 304 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = "\n  @keyframes md-progress-spinner-stroke-rotate-DIAMETER {\n    0% {\n      stroke-dashoffset: START_VALUE;\n      transform: rotate(0);\n    }\n\n    12.5% {\n      stroke-dashoffset: END_VALUE;\n      transform: rotate(0);\n    }\n\n    12.51% {\n      stroke-dashoffset: END_VALUE;\n      transform: rotateX(180deg) rotate(72.5deg);\n    }\n\n    25% {\n      stroke-dashoffset: START_VALUE;\n      transform: rotateX(180deg) rotate(72.5deg);\n    }\n\n    25.1% {\n      stroke-dashoffset: START_VALUE;\n      transform: rotate(270deg);\n    }\n\n    37.5% {\n      stroke-dashoffset: END_VALUE;\n      transform: rotate(270deg);\n    }\n\n    37.51% {\n      stroke-dashoffset: END_VALUE;\n      transform: rotateX(180deg) rotate(161.5deg);\n    }\n\n    50% {\n      stroke-dashoffset: START_VALUE;\n      transform: rotateX(180deg) rotate(161.5deg);\n    }\n\n    50.01% {\n      stroke-dashoffset: START_VALUE;\n      transform: rotate(180deg);\n    }\n\n    62.5% {\n      stroke-dashoffset: END_VALUE;\n      transform: rotate(180deg);\n    }\n\n    62.51% {\n      stroke-dashoffset: END_VALUE;\n      transform: rotateX(180deg) rotate(251.5deg);\n    }\n\n    75% {\n      stroke-dashoffset: START_VALUE;\n      transform: rotateX(180deg) rotate(251.5deg);\n    }\n\n    75.01% {\n      stroke-dashoffset: START_VALUE;\n      transform: rotate(90deg);\n    }\n\n    87.5% {\n      stroke-dashoffset: END_VALUE;\n      transform: rotate(90deg);\n    }\n\n    87.51% {\n      stroke-dashoffset: END_VALUE;\n      transform: rotateX(180deg) rotate(341.5deg);\n    }\n\n    100% {\n      stroke-dashoffset: START_VALUE;\n      transform: rotateX(180deg) rotate(341.5deg);\n    }\n  }\n";

/***/ }),
/* 305 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _material = __webpack_require__(1);

var _material2 = _interopRequireDefault(_material);

var _MdRadio = __webpack_require__(306);

var _MdRadio2 = _interopRequireDefault(_MdRadio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (Vue) {
  (0, _material2.default)(Vue);
  Vue.component(_MdRadio2.default.name, _MdRadio2.default);
};

/***/ }),
/* 306 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/components/MdRadio/MdRadio.vue
var MdRadio = __webpack_require__(308);
var MdRadio_default = /*#__PURE__*/__webpack_require__.n(MdRadio);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-b5b900ce","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/components/MdRadio/MdRadio.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "md-radio", class: [_vm.$mdActiveTheme, _vm.radioClasses] },
    [
      _c(
        "div",
        {
          staticClass: "md-radio-container",
          on: {
            click: function($event) {
              $event.stopPropagation()
              _vm.toggleCheck($event)
            }
          }
        },
        [
          _c(
            "md-ripple",
            {
              attrs: {
                "md-centered": "",
                "md-active": _vm.rippleActive,
                "md-disabled": _vm.disabled
              },
              on: {
                "update:mdActive": function($event) {
                  _vm.rippleActive = $event
                }
              }
            },
            [
              _c(
                "input",
                _vm._b(
                  { attrs: { type: "radio" } },
                  "input",
                  {
                    id: _vm.id,
                    name: _vm.name,
                    disabled: _vm.disabled,
                    required: _vm.required,
                    value: _vm.value
                  },
                  false
                )
              )
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _vm.$slots.default
        ? _c(
            "label",
            {
              staticClass: "md-radio-label",
              attrs: { for: _vm.id },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  _vm.toggleCheck($event)
                }
              }
            },
            [_vm._t("default")],
            2
          )
        : _vm._e()
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var MdRadio_MdRadio = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-b5b900ce", esExports)
  }
}
// CONCATENATED MODULE: ./src/components/MdRadio/MdRadio.vue
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(307)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  MdRadio_default.a,
  MdRadio_MdRadio,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/MdRadio/MdRadio.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b5b900ce", Component.options)
  } else {
    hotAPI.reload("data-v-b5b900ce", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var components_MdRadio_MdRadio = __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 307 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 308 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MdComponent = __webpack_require__(2);

var _MdComponent2 = _interopRequireDefault(_MdComponent);

var _MdUuid = __webpack_require__(6);

var _MdUuid2 = _interopRequireDefault(_MdUuid);

var _MdRipple = __webpack_require__(8);

var _MdRipple2 = _interopRequireDefault(_MdRipple);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _MdComponent2.default({
  name: 'MdRadio',
  components: {
    MdRipple: _MdRipple2.default
  },
  props: {
    model: [String, Number, Boolean],
    value: {
      type: [String, Number, Boolean],
      default: 'on'
    },
    id: {
      type: String,
      default: function _default() {
        return 'md-radio-' + (0, _MdUuid2.default)();
      }
    },
    name: [String, Number],
    required: Boolean,
    disabled: Boolean
  },
  model: {
    prop: 'model',
    event: 'change'
  },
  data: function data() {
    return {
      rippleActive: false
    };
  },
  computed: {
    isSelected: function isSelected() {
      return this.model === this.value;
    },
    radioClasses: function radioClasses() {
      return {
        'md-checked': this.isSelected,
        'md-disabled': this.disabled,
        'md-required': this.required
      };
    }
  },
  methods: {
    toggleCheck: function toggleCheck() {
      if (!this.disabled) {
        this.rippleActive = true;
        this.$emit('change', this.value);
      }
    }
  }
}); //
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 309 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _material = __webpack_require__(1);

var _material2 = _interopRequireDefault(_material);

var _MdRipple = __webpack_require__(8);

var _MdRipple2 = _interopRequireDefault(_MdRipple);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (Vue) {
  (0, _material2.default)(Vue);
  Vue.component(_MdRipple2.default.name, _MdRipple2.default);
};

/***/ }),
/* 310 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _material = __webpack_require__(1);

var _material2 = _interopRequireDefault(_material);

var _MdSnackbar = __webpack_require__(311);

var _MdSnackbar2 = _interopRequireDefault(_MdSnackbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (Vue) {
  (0, _material2.default)(Vue);
  Vue.component(_MdSnackbar2.default.name, _MdSnackbar2.default);
};

/***/ }),
/* 311 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/components/MdSnackbar/MdSnackbar.vue
var MdSnackbar = __webpack_require__(313);
var MdSnackbar_default = /*#__PURE__*/__webpack_require__.n(MdSnackbar);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-7063bc8f","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/components/MdSnackbar/MdSnackbar.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.mdPersistent && _vm.mdDuration !== Infinity
    ? _c(
        "md-portal",
        [
          _c(
            "keep-alive",
            [
              _vm.mdActive
                ? _c(
                    "md-snackbar-content",
                    {
                      attrs: {
                        "md-classes": [_vm.snackbarClasses, _vm.$mdActiveTheme]
                      }
                    },
                    [_vm._t("default")],
                    2
                  )
                : _vm._e()
            ],
            1
          )
        ],
        1
      )
    : _c(
        "md-portal",
        [
          _vm.mdActive
            ? _c(
                "md-snackbar-content",
                {
                  attrs: {
                    "md-classes": [_vm.snackbarClasses, _vm.$mdActiveTheme]
                  }
                },
                [_vm._t("default")],
                2
              )
            : _vm._e()
        ],
        1
      )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var MdSnackbar_MdSnackbar = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7063bc8f", esExports)
  }
}
// CONCATENATED MODULE: ./src/components/MdSnackbar/MdSnackbar.vue
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(312)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  MdSnackbar_default.a,
  MdSnackbar_MdSnackbar,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/MdSnackbar/MdSnackbar.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7063bc8f", Component.options)
  } else {
    hotAPI.reload("data-v-7063bc8f", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var components_MdSnackbar_MdSnackbar = __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 312 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 313 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var _MdComponent = __webpack_require__(2);

var _MdComponent2 = _interopRequireDefault(_MdComponent);

var _MdPropValidator = __webpack_require__(4);

var _MdPropValidator2 = _interopRequireDefault(_MdPropValidator);

var _MdPortal = __webpack_require__(16);

var _MdPortal2 = _interopRequireDefault(_MdPortal);

var _MdSnackbarContent = __webpack_require__(314);

var _MdSnackbarContent2 = _interopRequireDefault(_MdSnackbarContent);

var _MdSnackbarQueue = __webpack_require__(316);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = new _MdComponent2.default({
  name: 'MdSnackbar',
  components: {
    MdPortal: _MdPortal2.default,
    MdSnackbarContent: _MdSnackbarContent2.default
  },
  props: {
    mdActive: Boolean,
    mdPersistent: Boolean,
    mdDuration: {
      type: Number,
      default: 4000
    },
    mdPosition: _extends({
      type: String,
      default: 'center'
    }, (0, _MdPropValidator2.default)('md-position', ['center', 'left']))
  },
  computed: {
    snackbarClasses: function snackbarClasses() {
      return _defineProperty({}, 'md-position-' + this.mdPosition, true);
    }
  },
  watch: {
    mdActive: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(isActive) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!isActive) {
                  _context.next = 7;
                  break;
                }

                _context.next = 3;
                return (0, _MdSnackbarQueue.createSnackbar)(this.mdDuration, this);

              case 3:

                this.$emit('update:mdActive', false);
                this.$emit('md-opened');
                _context.next = 9;
                break;

              case 7:
                (0, _MdSnackbarQueue.destroySnackbar)();
                this.$emit('md-closed');

              case 9:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function mdActive(_x) {
        return _ref2.apply(this, arguments);
      }

      return mdActive;
    }()
  }
});

/***/ }),
/* 314 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/components/MdSnackbar/MdSnackbarContent.vue
var MdSnackbarContent = __webpack_require__(315);
var MdSnackbarContent_default = /*#__PURE__*/__webpack_require__.n(MdSnackbarContent);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-ffe066cc","hasScoped":false,"buble":{"transforms":{"stripWithFunctional":true}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/components/MdSnackbar/MdSnackbarContent.vue
var render = function(_h, _vm) {
  var _c = _vm._c
  return _c("transition", { attrs: { name: "md-snackbar", appear: "" } }, [
    _c("div", { staticClass: "md-snackbar", class: _vm.props.mdClasses }, [
      _c("div", { staticClass: "md-snackbar-content" }, [_vm._t("default")], 2)
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var MdSnackbar_MdSnackbarContent = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-ffe066cc", esExports)
  }
}
// CONCATENATED MODULE: ./src/components/MdSnackbar/MdSnackbarContent.vue
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = true
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  MdSnackbarContent_default.a,
  MdSnackbar_MdSnackbarContent,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/MdSnackbar/MdSnackbarContent.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ffe066cc", Component.options)
  } else {
    hotAPI.rerender("data-v-ffe066cc", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var components_MdSnackbar_MdSnackbarContent = __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 315 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//

exports.default = {
  name: 'MdSnackbarContent',
  props: {
    mdClasses: Array
  }
};

/***/ }),
/* 316 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var currentSnackbar = null;
var timeout = null;

function createPromise(duration, context) {
  return new Promise(function (resolve) {
    currentSnackbar = {
      destroy: function destroy() {
        currentSnackbar = null;
        resolve();
      }
    };

    if (duration !== Infinity) {
      timeout = window.setTimeout(function () {
        destroySnackbar();
        context._vnode.componentInstance.initDestroy(true);
      }, duration);
    }
  });
}

var destroySnackbar = exports.destroySnackbar = function destroySnackbar() {
  return new Promise(function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(resolve) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (currentSnackbar) {
                window.clearTimeout(timeout);
                currentSnackbar.destroy();
                window.setTimeout(resolve, 400);
              } else {
                resolve();
              }

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
};

var createSnackbar = exports.createSnackbar = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(duration, context) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!currentSnackbar) {
              _context2.next = 4;
              break;
            }

            _context2.next = 3;
            return destroySnackbar();

          case 3:
            return _context2.abrupt("return", createPromise(duration, context));

          case 4:
            return _context2.abrupt("return", createPromise(duration, context));

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  }));

  return function createSnackbar(_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();

/***/ }),
/* 317 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _material = __webpack_require__(1);

var _material2 = _interopRequireDefault(_material);

var _MdSpeedDial = __webpack_require__(318);

var _MdSpeedDial2 = _interopRequireDefault(_MdSpeedDial);

var _MdSpeedDialTarget = __webpack_require__(321);

var _MdSpeedDialTarget2 = _interopRequireDefault(_MdSpeedDialTarget);

var _MdSpeedDialContent = __webpack_require__(324);

var _MdSpeedDialContent2 = _interopRequireDefault(_MdSpeedDialContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (Vue) {
  (0, _material2.default)(Vue);
  Vue.component(_MdSpeedDial2.default.name, _MdSpeedDial2.default);
  Vue.component(_MdSpeedDialTarget2.default.name, _MdSpeedDialTarget2.default);
  Vue.component(_MdSpeedDialContent2.default.name, _MdSpeedDialContent2.default);
};

/***/ }),
/* 318 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/components/MdSpeedDial/MdSpeedDial.vue
var MdSpeedDial = __webpack_require__(320);
var MdSpeedDial_default = /*#__PURE__*/__webpack_require__.n(MdSpeedDial);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-470f76d1","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/components/MdSpeedDial/MdSpeedDial.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "md-speed-dial",
      class: [_vm.$mdActiveTheme, _vm.speedDialClasses]
    },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var MdSpeedDial_MdSpeedDial = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-470f76d1", esExports)
  }
}
// CONCATENATED MODULE: ./src/components/MdSpeedDial/MdSpeedDial.vue
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(319)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  MdSpeedDial_default.a,
  MdSpeedDial_MdSpeedDial,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/MdSpeedDial/MdSpeedDial.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-470f76d1", Component.options)
  } else {
    hotAPI.reload("data-v-470f76d1", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var components_MdSpeedDial_MdSpeedDial = __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 319 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 320 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //
//
//
//
//
//

var _MdComponent = __webpack_require__(2);

var _MdComponent2 = _interopRequireDefault(_MdComponent);

var _MdPropValidator = __webpack_require__(4);

var _MdPropValidator2 = _interopRequireDefault(_MdPropValidator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = new _MdComponent2.default({
  name: 'MdSpeedDial',
  props: {
    mdEvent: _extends({
      type: String,
      default: 'hover'
    }, (0, _MdPropValidator2.default)('md-event', ['click', 'hover'])),
    mdDirection: _extends({
      type: String,
      default: 'top'
    }, (0, _MdPropValidator2.default)('md-direction', ['top', 'bottom'])),
    mdEffect: _extends({
      type: String,
      default: 'fling'
    }, (0, _MdPropValidator2.default)('md-effect', ['fling', 'scale', 'opacity']))
  },
  data: function data() {
    return {
      MdSpeedDial: {
        active: false,
        event: this.mdEvent,
        direction: this.mdDirection
      }
    };
  },
  provide: function provide() {
    return {
      MdSpeedDial: this.MdSpeedDial
    };
  },

  computed: {
    speedDialClasses: function speedDialClasses() {
      var _ref;

      return _ref = {
        'md-active': this.MdSpeedDial.active,
        'md-with-hover': this.mdEvent === 'hover'
      }, _defineProperty(_ref, 'md-direction-' + this.mdDirection, true), _defineProperty(_ref, 'md-effect-' + this.mdEffect, true), _ref;
    }
  }
});

/***/ }),
/* 321 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/components/MdSpeedDial/MdSpeedDialTarget.vue
var MdSpeedDialTarget = __webpack_require__(323);
var MdSpeedDialTarget_default = /*#__PURE__*/__webpack_require__.n(MdSpeedDialTarget);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-654a757c","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/components/MdSpeedDial/MdSpeedDialTarget.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "md-button",
    _vm._g(
      _vm._b(
        {
          staticClass: "md-speed-dial-target md-fab",
          on: { click: _vm.handleClick }
        },
        "md-button",
        _vm.$attrs,
        false
      ),
      _vm.$listeners
    ),
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var MdSpeedDial_MdSpeedDialTarget = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-654a757c", esExports)
  }
}
// CONCATENATED MODULE: ./src/components/MdSpeedDial/MdSpeedDialTarget.vue
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(322)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  MdSpeedDialTarget_default.a,
  MdSpeedDial_MdSpeedDialTarget,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/MdSpeedDial/MdSpeedDialTarget.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-654a757c", Component.options)
  } else {
    hotAPI.reload("data-v-654a757c", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var components_MdSpeedDial_MdSpeedDialTarget = __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 322 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 323 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MdButton = __webpack_require__(13);

var _MdButton2 = _interopRequireDefault(_MdButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'MdSpeedDialTarget',
  components: {
    MdButton: _MdButton2.default
  },
  inject: ['MdSpeedDial'],
  methods: {
    handleClick: function handleClick() {
      if (this.MdSpeedDial.event === 'click') {
        this.MdSpeedDial.active = !this.MdSpeedDial.active;
      }
    }
  }
}; //
//
//
//
//
//

/***/ }),
/* 324 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/components/MdSpeedDial/MdSpeedDialContent.vue
var MdSpeedDialContent = __webpack_require__(326);
var MdSpeedDialContent_default = /*#__PURE__*/__webpack_require__.n(MdSpeedDialContent);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-45ac6418","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/components/MdSpeedDial/MdSpeedDialContent.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "md-speed-dial-content" },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var MdSpeedDial_MdSpeedDialContent = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-45ac6418", esExports)
  }
}
// CONCATENATED MODULE: ./src/components/MdSpeedDial/MdSpeedDialContent.vue
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(325)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  MdSpeedDialContent_default.a,
  MdSpeedDial_MdSpeedDialContent,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/MdSpeedDial/MdSpeedDialContent.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-45ac6418", Component.options)
  } else {
    hotAPI.reload("data-v-45ac6418", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var components_MdSpeedDial_MdSpeedDialContent = __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 325 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 326 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

//
//
//
//
//
//

function getChildIndex(direction, index, count) {
  if (direction === 'top') {
    return count - index - 1;
  }

  return index;
}

exports.default = {
  name: 'MdSpeedDialContent',
  inject: ['MdSpeedDial'],
  methods: {
    setChildrenIndexes: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _this = this;

        var countChild;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.$nextTick();

              case 2:
                countChild = this.$children.length;


                this.$children.forEach(function (child, index) {
                  if (child._vnode.tag === 'button') {
                    var childIndex = getChildIndex(_this.MdSpeedDial.direction, index, countChild);

                    child.$el.setAttribute('md-button-index', childIndex);
                    child.$el.classList.add('md-raised');
                  }
                });

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function setChildrenIndexes() {
        return _ref.apply(this, arguments);
      }

      return setChildrenIndexes;
    }()
  },
  mounted: function mounted() {
    this.setChildrenIndexes();
  },
  updated: function updated() {
    this.setChildrenIndexes();
  }
};

/***/ }),
/* 327 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _material = __webpack_require__(1);

var _material2 = _interopRequireDefault(_material);

var _MdSteppers = __webpack_require__(328);

var _MdSteppers2 = _interopRequireDefault(_MdSteppers);

var _MdStep = __webpack_require__(338);

var _MdStep2 = _interopRequireDefault(_MdStep);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (Vue) {
  (0, _material2.default)(Vue);
  Vue.component(_MdSteppers2.default.name, _MdSteppers2.default);
  Vue.component(_MdStep2.default.name, _MdStep2.default);
};

/***/ }),
/* 328 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/components/MdSteppers/MdSteppers.vue
var MdSteppers = __webpack_require__(330);
var MdSteppers_default = /*#__PURE__*/__webpack_require__.n(MdSteppers);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-95acb722","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/components/MdSteppers/MdSteppers.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "md-steppers",
      class: [_vm.steppersClasses, _vm.$mdActiveTheme]
    },
    [
      !_vm.mdVertical
        ? _c(
            "div",
            { staticClass: "md-steppers-navigation" },
            _vm._l(_vm.MdSteppers.items, function(_, index) {
              return _c("md-step-header", {
                key: index,
                attrs: { index: index }
              })
            })
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "md-steppers-wrapper", style: _vm.contentStyles },
        [
          _c(
            "div",
            {
              staticClass: "md-steppers-container",
              style: _vm.containerStyles
            },
            [_vm._t("default")],
            2
          )
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var MdSteppers_MdSteppers = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-95acb722", esExports)
  }
}
// CONCATENATED MODULE: ./src/components/MdSteppers/MdSteppers.vue
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(329)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  MdSteppers_default.a,
  MdSteppers_MdSteppers,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/MdSteppers/MdSteppers.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-95acb722", Component.options)
  } else {
    hotAPI.reload("data-v-95acb722", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var components_MdSteppers_MdSteppers = __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 329 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 330 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MdComponent = __webpack_require__(2);

var _MdComponent2 = _interopRequireDefault(_MdComponent);

var _MdObserveElement = __webpack_require__(26);

var _MdObserveElement2 = _interopRequireDefault(_MdObserveElement);

var _MdStepHeader = __webpack_require__(50);

var _MdStepHeader2 = _interopRequireDefault(_MdStepHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } //
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = new _MdComponent2.default({
  name: 'MdSteppers',
  components: {
    MdStepHeader: _MdStepHeader2.default
  },
  props: {
    mdSyncRoute: Boolean,
    mdDynamicHeight: Boolean,
    mdVertical: Boolean,
    mdLinear: Boolean,
    mdAlternative: Boolean,
    mdActiveStep: [String, Number]
  },
  data: function data() {
    return {
      activeStepIndex: 0,
      noTransition: true,
      containerStyles: {},
      contentStyles: {},
      MdSteppers: {
        activeStep: 0,
        isLinear: false,
        isVertical: false,
        items: {}
      }
    };
  },
  provide: function provide() {
    var MdSteppers = this.MdSteppers;

    MdSteppers.getStepperNumber = this.getStepperNumber;
    MdSteppers.setActiveStep = this.setActiveStep;
    MdSteppers.isPreviousStepperDone = this.isPreviousStepperDone;

    return { MdSteppers: MdSteppers };
  },

  computed: {
    steppersClasses: function steppersClasses() {
      return {
        'md-no-transition': this.noTransition,
        'md-alternative': this.mdAlternative,
        'md-horizontal': !this.mdVertical,
        'md-vertical': this.mdVertical,
        'md-dynamic-height': this.mdDynamicHeight
      };
    },
    activeIndex: function activeIndex() {
      return this.MdSteppers.activeStep;
    }
  },
  watch: {
    mdActiveStep: function mdActiveStep(stepper) {
      this.MdSteppers.activeStep = stepper;
      this.$emit('md-changed', stepper);
    },
    mdLinear: function mdLinear(isLinear) {
      this.MdSteppers.isLinear = isLinear;
    },
    mdVertical: function mdVertical(isVertical) {
      this.MdSteppers.isVertical = isVertical;
    },
    activeIndex: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.$nextTick();

              case 2:
                this.setActiveStepIndex();
                this.calculateStepperPos();

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function activeIndex() {
        return _ref.apply(this, arguments);
      }

      return activeIndex;
    }()
  },
  methods: {
    hasActiveStep: function hasActiveStep() {
      return this.MdSteppers.activeStep || this.mdActiveStep;
    },
    getItemsAndKeys: function getItemsAndKeys() {
      var items = this.MdSteppers.items;

      return {
        items: items,
        keys: Object.keys(items)
      };
    },
    getStepperNumber: function getStepperNumber(id) {
      var stepperNames = Object.keys(this.MdSteppers.items);

      return stepperNames.indexOf(id) + 1;
    },
    isStepperDone: function isStepperDone(id) {
      return this.MdSteppers.items[id].done;
    },
    isPreviousStepperDone: function isPreviousStepperDone(id) {
      var items = this.MdSteppers.items;

      var stepperNames = Object.keys(items);
      var activeIndex = this.getStepperNumber(id) - 2;
      var previousIndex = stepperNames[activeIndex];

      if (!previousIndex) {
        return true;
      }

      return items[previousIndex].done;
    },
    isStepperEditable: function isStepperEditable(id) {
      return this.MdSteppers.items[id].editable;
    },
    setStepperAsDone: function setStepperAsDone(id) {
      this.MdSteppers.items[id].done = true;
    },
    setPreviousStepperAsDone: function setPreviousStepperAsDone(newId) {
      var activeIndex = this.getStepperNumber(this.MdSteppers.activeStep);
      var newIndex = this.getStepperNumber(newId);

      if (newIndex > activeIndex) {
        this.setStepperAsDone(this.MdSteppers.activeStep);
      }
    },
    setActiveStep: function setActiveStep(id) {
      if (this.mdLinear && !this.isPreviousStepperDone(id)) {
        return false;
      }

      if (id !== this.MdSteppers.activeStep && (this.isStepperEditable(id) || !this.isStepperDone(id))) {
        this.setPreviousStepperAsDone(id);
        this.MdSteppers.activeStep = id;
        this.$emit('md-changed', id);
        this.$emit('update:mdActiveStep', id);
        this.MdSteppers.items[id].error = null;
      }
    },
    setActiveStepIndex: function setActiveStepIndex() {
      var activeButton = this.$el.querySelector('.md-button.md-active');

      if (activeButton) {
        this.activeStepIndex = [].indexOf.call(activeButton.parentNode.childNodes, activeButton);
      }
    },
    setActiveStepByIndex: function setActiveStepByIndex(index) {
      var _getItemsAndKeys = this.getItemsAndKeys(),
          keys = _getItemsAndKeys.keys;

      if (!this.hasActiveStep()) {
        this.MdSteppers.activeStep = keys[index];
      }
    },
    setActiveStepByRoute: function setActiveStepByRoute() {
      var _this = this;

      var _getItemsAndKeys2 = this.getItemsAndKeys(),
          items = _getItemsAndKeys2.items,
          keys = _getItemsAndKeys2.keys;

      var stepperIndex = null;

      if (this.$router) {
        keys.forEach(function (key, index) {
          var item = items[key];
          var toProp = item.props.to;

          if (toProp && toProp === _this.$route.path) {
            stepperIndex = index;
          }
        });
      }

      if (!this.hasActiveStep() && !stepperIndex) {
        this.MdSteppers.activeStep = keys[0];
      } else {
        this.MdSteppers.activeStep = keys[stepperIndex];

        for (var i = 0; i < stepperIndex; i++) {
          this.setStepperAsDone(keys[i]);
        }
      }
    },
    setupObservers: function setupObservers() {
      var steppersContent = this.$el.querySelector('.md-steppers-wrapper');

      if ('ResizeObserver' in window) {
        this.resizeObserver = new window.ResizeObserver(this.calculateStepperPos);
        this.resizeObserver.observe(this.$el);
      }

      if (steppersContent) {
        this.resizeObserver = (0, _MdObserveElement2.default)(this.$el.querySelector('.md-steppers-wrapper'), {
          childList: true,
          characterData: true,
          subtree: true
        }, this.calculateStepperPos);
      }
    },
    calculateStepperPos: function calculateStepperPos() {
      if (!this.mdVertical) {
        var stepperElement = this.$el.querySelector('.md-stepper:nth-child(' + (this.activeStepIndex + 1) + ')');

        this.contentStyles = {
          height: stepperElement.offsetHeight + 'px'
        };

        this.containerStyles = {
          transform: 'translate3D(' + -this.activeStepIndex * 100 + '%, 0, 0)'
        };
      }
    },
    setupWatchers: function setupWatchers() {
      if (this.mdSyncRoute) {
        this.$watch('$route', {
          deep: true,
          handler: function handler() {
            this.setActiveStepByRoute();
          }
        });
      }
    }
  },
  created: function created() {
    this.MdSteppers.activeStep = this.mdActiveStep;
    this.MdSteppers.isLinear = this.mdLinear;
    this.MdSteppers.isVertical = this.mdVertical;
  },
  mounted: function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var _this2 = this;

      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.$nextTick();

            case 2:

              if (this.mdSyncRoute) {
                this.setActiveStepByRoute();
              } else {
                this.setActiveStepByIndex(0);
              }

              _context2.next = 5;
              return this.$nextTick();

            case 5:

              this.setActiveStepIndex();
              this.calculateStepperPos();

              window.setTimeout(function () {
                _this2.noTransition = false;
                _this2.setupObservers();
                _this2.setupWatchers();
              }, 100);

            case 8:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function mounted() {
      return _ref2.apply(this, arguments);
    }

    return mounted;
  }()
});

/***/ }),
/* 331 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MdWarningIcon = __webpack_require__(332);

var _MdWarningIcon2 = _interopRequireDefault(_MdWarningIcon);

var _MdCheckIcon = __webpack_require__(334);

var _MdCheckIcon2 = _interopRequireDefault(_MdCheckIcon);

var _MdEditIcon = __webpack_require__(336);

var _MdEditIcon2 = _interopRequireDefault(_MdEditIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'MdStepperHeader',
  components: {
    MdWarningIcon: _MdWarningIcon2.default,
    MdCheckIcon: _MdCheckIcon2.default,
    MdEditIcon: _MdEditIcon2.default
  },
  props: {
    index: {
      type: String,
      required: true
    }
  },
  inject: ['MdSteppers'],
  computed: {
    data: function data() {
      return this.MdSteppers.items[this.index];
    },
    shouldDisable: function shouldDisable() {
      var data = this.data,
          index = this.index,
          MdSteppers = this.MdSteppers;


      if (data.done && !data.editable) {
        return true;
      }

      return MdSteppers.isLinear && !MdSteppers.isPreviousStepperDone(index);
    },
    classes: function classes() {
      return {
        'md-active': this.index === this.MdSteppers.activeStep,
        'md-error': this.data.error,
        'md-done': this.data.done
      };
    }
  }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 332 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/core/icons/MdWarningIcon.vue
var MdWarningIcon = __webpack_require__(333);
var MdWarningIcon_default = /*#__PURE__*/__webpack_require__.n(MdWarningIcon);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-8993dc9c","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/core/icons/MdWarningIcon.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("md-icon", { staticClass: "md-icon-image" }, [
      _c(
        "svg",
        {
          attrs: {
            height: "24",
            viewBox: "0 0 24 24",
            width: "24",
            xmlns: "http://www.w3.org/2000/svg"
          }
        },
        [
          _c("path", { attrs: { d: "M0 0h24v24H0z", fill: "none" } }),
          _vm._v(" "),
          _c("path", {
            attrs: { d: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" }
          })
        ]
      )
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var icons_MdWarningIcon = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-8993dc9c", esExports)
  }
}
// CONCATENATED MODULE: ./src/core/icons/MdWarningIcon.vue
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  MdWarningIcon_default.a,
  icons_MdWarningIcon,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/core/icons/MdWarningIcon.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8993dc9c", Component.options)
  } else {
    hotAPI.reload("data-v-8993dc9c", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var core_icons_MdWarningIcon = __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 333 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MdIcon = __webpack_require__(5);

var _MdIcon2 = _interopRequireDefault(_MdIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'MdWarningIcon',
  components: {
    MdIcon: _MdIcon2.default
  }
}; //
//
//
//
//
//
//
//
//

/***/ }),
/* 334 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/core/icons/MdCheckIcon.vue
var MdCheckIcon = __webpack_require__(335);
var MdCheckIcon_default = /*#__PURE__*/__webpack_require__.n(MdCheckIcon);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-4154b05e","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/core/icons/MdCheckIcon.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("md-icon", { staticClass: "md-icon-image" }, [
      _c(
        "svg",
        {
          attrs: {
            height: "24",
            viewBox: "0 0 24 24",
            width: "24",
            xmlns: "http://www.w3.org/2000/svg"
          }
        },
        [
          _c("path", { attrs: { d: "M0 0h24v24H0z", fill: "none" } }),
          _vm._v(" "),
          _c("path", {
            attrs: { d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" }
          })
        ]
      )
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var icons_MdCheckIcon = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4154b05e", esExports)
  }
}
// CONCATENATED MODULE: ./src/core/icons/MdCheckIcon.vue
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  MdCheckIcon_default.a,
  icons_MdCheckIcon,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/core/icons/MdCheckIcon.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4154b05e", Component.options)
  } else {
    hotAPI.reload("data-v-4154b05e", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var core_icons_MdCheckIcon = __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 335 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MdIcon = __webpack_require__(5);

var _MdIcon2 = _interopRequireDefault(_MdIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'MdDoneIcon',
  components: {
    MdIcon: _MdIcon2.default
  }
}; //
//
//
//
//
//
//
//
//

/***/ }),
/* 336 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/core/icons/MdEditIcon.vue
var MdEditIcon = __webpack_require__(337);
var MdEditIcon_default = /*#__PURE__*/__webpack_require__.n(MdEditIcon);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-75d6b514","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/core/icons/MdEditIcon.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("md-icon", { staticClass: "md-icon-image" }, [
      _c(
        "svg",
        {
          attrs: {
            height: "24",
            viewBox: "0 0 24 24",
            width: "24",
            xmlns: "http://www.w3.org/2000/svg"
          }
        },
        [
          _c("path", {
            attrs: {
              d:
                "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
            }
          }),
          _vm._v(" "),
          _c("path", { attrs: { d: "M0 0h24v24H0z", fill: "none" } })
        ]
      )
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var icons_MdEditIcon = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-75d6b514", esExports)
  }
}
// CONCATENATED MODULE: ./src/core/icons/MdEditIcon.vue
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  MdEditIcon_default.a,
  icons_MdEditIcon,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/core/icons/MdEditIcon.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-75d6b514", Component.options)
  } else {
    hotAPI.reload("data-v-75d6b514", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var core_icons_MdEditIcon = __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 337 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MdIcon = __webpack_require__(5);

var _MdIcon2 = _interopRequireDefault(_MdIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'MdEditIcon',
  components: {
    MdIcon: _MdIcon2.default
  }
}; //
//
//
//
//
//
//
//
//

/***/ }),
/* 338 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/components/MdSteppers/MdStep.vue
var MdStep = __webpack_require__(340);
var MdStep_default = /*#__PURE__*/__webpack_require__.n(MdStep);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-8624960e","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/components/MdSteppers/MdStep.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "md-stepper" },
    [
      _vm.MdSteppers.isVertical
        ? _c("md-step-header", { attrs: { index: _vm.id } })
        : _vm._e(),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "md-stepper-content",
          class: { "md-active": _vm.id === _vm.MdSteppers.activeStep }
        },
        [_vm._t("default")],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var MdSteppers_MdStep = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-8624960e", esExports)
  }
}
// CONCATENATED MODULE: ./src/components/MdSteppers/MdStep.vue
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(339)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  MdStep_default.a,
  MdSteppers_MdStep,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/MdSteppers/MdStep.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8624960e", Component.options)
  } else {
    hotAPI.reload("data-v-8624960e", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var components_MdSteppers_MdStep = __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 339 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 340 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //
//
//
//
//
//
//
//
//
//

var _MdUuid = __webpack_require__(6);

var _MdUuid2 = _interopRequireDefault(_MdUuid);

var _MdStepHeader = __webpack_require__(50);

var _MdStepHeader2 = _interopRequireDefault(_MdStepHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'MdStep',
  components: {
    MdStepHeader: _MdStepHeader2.default
  },
  props: {
    id: {
      type: String,
      default: function _default() {
        return 'md-stepper-' + (0, _MdUuid2.default)();
      }
    },
    href: [String, Number],
    to: null,
    mdLabel: String,
    mdDescription: String,
    mdError: String,
    mdDone: Boolean,
    mdEditable: {
      type: Boolean,
      default: true
    }
  },
  inject: ['MdSteppers'],
  watch: {
    $props: {
      deep: true,
      handler: function handler() {
        this.setStepperData();
      }
    }
  },
  methods: {
    getPropValues: function getPropValues() {
      var _this = this;

      var propNames = Object.keys(this.$options.props);
      var ignoredProps = ['id', 'mdLabel', 'mdDescription', 'mdError', 'mdEditable'];
      var values = {};

      propNames.forEach(function (prop) {
        if (!ignoredProps.includes(prop)) {
          if (_this[prop]) {
            values[prop] = _this[prop];
          } else if (_this.$attrs.hasOwnProperty(prop)) {
            if (prop) {
              values[prop] = _this.$attrs[prop];
            } else {
              values[prop] = true;
            }
          }
        }
      });

      return values;
    },
    setStepperData: function setStepperData() {
      this.$set(this.MdSteppers.items, this.id, {
        label: this.mdLabel,
        description: this.mdDescription,
        error: this.mdError,
        done: this.mdDone,
        editable: this.mdEditable,
        props: this.getPropValues(),
        events: this.$listeners
      });
    },
    setupWatchers: function setupWatchers() {
      var _this2 = this;

      var getProp = function getProp(prop) {
        if (_this2.MdSteppers.items[_this2.id]) {
          return _this2.MdSteppers.items[_this2.id][prop];
        }
      };

      this.$watch(function () {
        return getProp('error');
      }, function () {
        return _this2.$emit('update:mdError', getProp('error'));
      });

      this.$watch(function () {
        return getProp('done');
      }, function () {
        return _this2.$emit('update:mdDone', getProp('done'));
      });
    }
  },
  created: function created() {
    this.setStepperData();
    this.setupWatchers();
  },
  beforeDestroy: function beforeDestroy() {
    this.$delete(this.MdSteppers.items, this.id);
  },
  render: function render(createElement) {
    var stepperAttrs = {
      staticClass: 'md-stepper',
      attrs: _extends({}, this.$attrs, {
        id: this.id
      }),
      on: this.$listeners
    };

    if (this.href) {
      this.buttonProps = this.$options.props;
    } else if (this.$router && this.to) {
      this.$options.props = MdRouterLinkProps(this, this.$options.props);

      stepperAttrs.props = this.$props;
    }

    return createElement('div', stepperAttrs, this.$slots.default);
  }
};

/***/ }),
/* 341 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _material = __webpack_require__(1);

var _material2 = _interopRequireDefault(_material);

var _MdSubheader = __webpack_require__(342);

var _MdSubheader2 = _interopRequireDefault(_MdSubheader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (Vue) {
  (0, _material2.default)(Vue);
  Vue.component(_MdSubheader2.default.name, _MdSubheader2.default);
};

/***/ }),
/* 342 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/components/MdSubheader/MdSubheader.vue
var MdSubheader = __webpack_require__(344);
var MdSubheader_default = /*#__PURE__*/__webpack_require__.n(MdSubheader);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-7ff30e86","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/components/MdSubheader/MdSubheader.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.insideList
    ? _c(
        "li",
        { staticClass: "md-subheader", class: [_vm.$mdActiveTheme] },
        [_vm._t("default")],
        2
      )
    : _c(
        "div",
        { staticClass: "md-subheader", class: [_vm.$mdActiveTheme] },
        [_vm._t("default")],
        2
      )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var MdSubheader_MdSubheader = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7ff30e86", esExports)
  }
}
// CONCATENATED MODULE: ./src/components/MdSubheader/MdSubheader.vue
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(343)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  MdSubheader_default.a,
  MdSubheader_MdSubheader,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/MdSubheader/MdSubheader.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7ff30e86", Component.options)
  } else {
    hotAPI.reload("data-v-7ff30e86", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var components_MdSubheader_MdSubheader = __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 343 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 344 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MdComponent = __webpack_require__(2);

var _MdComponent2 = _interopRequireDefault(_MdComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _MdComponent2.default({
  name: 'MdSubheader',
  computed: {
    insideList: function insideList() {
      return this.$parent.$options._componentTag === 'md-list';
    }
  }
}); //
//
//
//
//
//
//
//
//
//

/***/ }),
/* 345 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _material = __webpack_require__(1);

var _material2 = _interopRequireDefault(_material);

var _MdSwitch = __webpack_require__(346);

var _MdSwitch2 = _interopRequireDefault(_MdSwitch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (Vue) {
  (0, _material2.default)(Vue);
  Vue.component(_MdSwitch2.default.name, _MdSwitch2.default);
};

/***/ }),
/* 346 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/components/MdSwitch/MdSwitch.vue
var MdSwitch = __webpack_require__(348);
var MdSwitch_default = /*#__PURE__*/__webpack_require__.n(MdSwitch);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-5ff953a2","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/components/MdSwitch/MdSwitch.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "md-switch", class: [_vm.$mdActiveTheme, _vm.checkClasses] },
    [
      _c(
        "div",
        {
          staticClass: "md-switch-container",
          on: {
            click: function($event) {
              $event.stopPropagation()
              _vm.toggleCheck($event)
            }
          }
        },
        [
          _c(
            "div",
            { staticClass: "md-switch-thumb" },
            [
              _c(
                "md-ripple",
                {
                  attrs: {
                    "md-centered": "",
                    "md-active": _vm.rippleActive,
                    "md-disabled": _vm.disabled
                  },
                  on: {
                    "update:mdActive": function($event) {
                      _vm.rippleActive = $event
                    }
                  }
                },
                [
                  _c(
                    "input",
                    _vm._b(
                      { attrs: { type: "checkbox" } },
                      "input",
                      {
                        id: _vm.id,
                        name: _vm.name,
                        disabled: _vm.disabled,
                        required: _vm.required,
                        value: _vm.value
                      },
                      false
                    )
                  )
                ]
              )
            ],
            1
          )
        ]
      ),
      _vm._v(" "),
      _vm.$slots.default
        ? _c(
            "label",
            {
              staticClass: "md-switch-label",
              attrs: { for: _vm.id },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  _vm.toggleCheck($event)
                }
              }
            },
            [_vm._t("default")],
            2
          )
        : _vm._e()
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var MdSwitch_MdSwitch = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5ff953a2", esExports)
  }
}
// CONCATENATED MODULE: ./src/components/MdSwitch/MdSwitch.vue
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(347)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  MdSwitch_default.a,
  MdSwitch_MdSwitch,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/MdSwitch/MdSwitch.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5ff953a2", Component.options)
  } else {
    hotAPI.reload("data-v-5ff953a2", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var components_MdSwitch_MdSwitch = __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 347 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 348 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MdComponent = __webpack_require__(2);

var _MdComponent2 = _interopRequireDefault(_MdComponent);

var _MdCheckboxMixin = __webpack_require__(33);

var _MdCheckboxMixin2 = _interopRequireDefault(_MdCheckboxMixin);

var _MdUuid = __webpack_require__(6);

var _MdUuid2 = _interopRequireDefault(_MdUuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _MdComponent2.default({
  name: 'MdSwitch',
  mixins: [_MdCheckboxMixin2.default],
  props: {
    id: {
      type: String,
      default: function _default() {
        return 'md-switch-' + (0, _MdUuid2.default)();
      }
    }
  }
}); //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 349 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _material = __webpack_require__(1);

var _material2 = _interopRequireDefault(_material);

var _MdTableContainer = __webpack_require__(350);

var _MdTableContainer2 = _interopRequireDefault(_MdTableContainer);

var _MdTableToolbar = __webpack_require__(373);

var _MdTableToolbar2 = _interopRequireDefault(_MdTableToolbar);

var _MdTableEmptyState = __webpack_require__(378);

var _MdTableEmptyState2 = _interopRequireDefault(_MdTableEmptyState);

var _MdTableRow = __webpack_require__(51);

var _MdTableRow2 = _interopRequireDefault(_MdTableRow);

var _MdTableHead = __webpack_require__(27);

var _MdTableHead2 = _interopRequireDefault(_MdTableHead);

var _MdTableCell = __webpack_require__(381);

var _MdTableCell2 = _interopRequireDefault(_MdTableCell);

var _MdTablePagination = __webpack_require__(384);

var _MdTablePagination2 = _interopRequireDefault(_MdTablePagination);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (Vue) {
  (0, _material2.default)(Vue);
  Vue.component('MdTable', _MdTableContainer2.default);
  Vue.component(_MdTableToolbar2.default.name, _MdTableToolbar2.default);
  Vue.component(_MdTableEmptyState2.default.name, _MdTableEmptyState2.default);
  Vue.component(_MdTableRow2.default.name, _MdTableRow2.default);
  Vue.component(_MdTableHead2.default.name, _MdTableHead2.default);
  Vue.component(_MdTableCell2.default.name, _MdTableCell2.default);
  Vue.component(_MdTablePagination2.default.name, _MdTablePagination2.default);
};

/***/ }),
/* 350 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _MdTable = __webpack_require__(351);

var _MdTable2 = _interopRequireDefault(_MdTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function processChildren(children, createElement) {
  var slotNames = ['md-table-toolbar', 'md-table-empty-state', 'md-table-pagination'];
  var nodes = Array.from(children);
  var namedSlots = {};

  nodes.forEach(function (node, index) {
    if (node && node.tag) {
      var tag = node.componentOptions && node.componentOptions.tag;

      if (tag && slotNames.includes(tag)) {
        node.data.slot = tag;
        node.data.attrs = node.data.attrs || {};
        namedSlots[tag] = function () {
          return node;
        };
        nodes.splice(index, 1);
      }
    }
  });

  return {
    childNodes: nodes,
    slots: namedSlots
  };
}

exports.default = {
  name: 'MdTableContainer',
  functional: true,
  render: function render(createElement, _ref) {
    var data = _ref.data,
        props = _ref.props,
        children = _ref.children;

    var slotChildren = [];
    var scopedSlots = data.scopedSlots;

    if (children) {
      var _processChildren = processChildren(children, createElement),
          childNodes = _processChildren.childNodes,
          slots = _processChildren.slots;

      slotChildren = childNodes;
      scopedSlots = _extends({}, scopedSlots, slots);
    }

    return createElement(_MdTable2.default, _extends({}, data, {
      props: props,
      scopedSlots: scopedSlots
    }), [slotChildren]);
  }
};

/***/ }),
/* 351 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/components/MdTable/MdTable.vue
var MdTable = __webpack_require__(353);
var MdTable_default = /*#__PURE__*/__webpack_require__.n(MdTable);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-aaeced82","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/components/MdTable/MdTable.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "md-tag-switcher",
    { staticClass: "md-table", attrs: { "md-tag": _vm.contentTag } },
    [
      _vm._t("md-table-toolbar"),
      _vm._v(" "),
      _c(
        "keep-alive",
        [
          _vm.$scopedSlots["md-table-alternate-header"] && _vm.selectedCount
            ? _c(
                "md-table-alternate-header",
                [
                  _vm._t("md-table-alternate-header", null, {
                    count: _vm.selectedCount
                  })
                ],
                2
              )
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _vm.mdFixedHeader
        ? _c(
            "div",
            {
              staticClass: "md-table-fixed-header",
              class: _vm.headerClasses,
              style: _vm.headerStyles
            },
            [_c("table", [_c("md-table-thead")], 1)]
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "md-content",
        {
          staticClass: "md-table-content md-scrollbar",
          class: _vm.contentClasses,
          style: _vm.contentStyles,
          on: { scroll: _vm.setScroll }
        },
        [
          _c(
            "table",
            [
              !_vm.mdFixedHeader && _vm.$scopedSlots["md-table-row"]
                ? _c("md-table-thead", { class: _vm.headerClasses })
                : _vm._e(),
              _vm._v(" "),
              !_vm.$scopedSlots["md-table-row"]
                ? _c("tbody", [_vm._t("default")], 2)
                : _vm.value.length
                  ? _c(
                      "tbody",
                      _vm._l(_vm.value, function(item, index) {
                        return _c(
                          "md-table-row-ghost",
                          {
                            key: _vm.getRowId(item[_vm.mdModelId]),
                            attrs: {
                              "md-id": _vm.getRowId(item[_vm.mdModelId]),
                              "md-index": index
                            }
                          },
                          [_vm._t("md-table-row", null, { item: item })],
                          2
                        )
                      })
                    )
                  : _vm.$scopedSlots["md-table-empty-state"]
                    ? _c("tbody", [
                        _c("tr", [
                          _c(
                            "td",
                            { attrs: { colspan: _vm.headerCount } },
                            [_vm._t("md-table-empty-state")],
                            2
                          )
                        ])
                      ])
                    : _vm._e()
            ],
            1
          ),
          _vm._v(" "),
          _vm._t("md-table-pagination")
        ],
        2
      ),
      _vm._v(" "),
      _vm.value ? _vm._t("default") : _vm._e()
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var MdTable_MdTable = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-aaeced82", esExports)
  }
}
// CONCATENATED MODULE: ./src/components/MdTable/MdTable.vue
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(352)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  MdTable_default.a,
  MdTable_MdTable,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/MdTable/MdTable.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-aaeced82", Component.options)
  } else {
    hotAPI.reload("data-v-aaeced82", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var components_MdTable_MdTable = __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 352 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 353 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var _raf = __webpack_require__(9);

var _raf2 = _interopRequireDefault(_raf);

var _MdTagSwitcher = __webpack_require__(354);

var _MdTagSwitcher2 = _interopRequireDefault(_MdTagSwitcher);

var _MdUuid = __webpack_require__(6);

var _MdUuid2 = _interopRequireDefault(_MdUuid);

var _MdPropValidator = __webpack_require__(4);

var _MdPropValidator2 = _interopRequireDefault(_MdPropValidator);

var _MdTableThead = __webpack_require__(356);

var _MdTableThead2 = _interopRequireDefault(_MdTableThead);

var _MdTableAlternateHeader = __webpack_require__(364);

var _MdTableAlternateHeader2 = _interopRequireDefault(_MdTableAlternateHeader);

var _MdTableRow = __webpack_require__(51);

var _MdTableRow2 = _interopRequireDefault(_MdTableRow);

var _MdTableRowGhost = __webpack_require__(371);

var _MdTableRowGhost2 = _interopRequireDefault(_MdTableRowGhost);

var _MdTableCellSelection = __webpack_require__(52);

var _MdTableCellSelection2 = _interopRequireDefault(_MdTableCellSelection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'MdTable',
  components: {
    MdTagSwitcher: _MdTagSwitcher2.default,
    MdTableAlternateHeader: _MdTableAlternateHeader2.default,
    MdTableThead: _MdTableThead2.default,
    MdTableRow: _MdTableRow2.default,
    MdTableRowGhost: _MdTableRowGhost2.default,
    MdTableCellSelection: _MdTableCellSelection2.default
  },
  props: {
    value: [Array, Object],
    mdModelId: {
      type: String,
      default: 'id'
    },
    mdCard: Boolean,
    mdFixedHeader: Boolean,
    mdHeight: {
      type: Number,
      default: 400
    },
    mdSort: String,
    mdSortOrder: _extends({
      type: String,
      default: 'asc'
    }, (0, _MdPropValidator2.default)('md-sort-order', ['asc', 'desc'])),
    mdSortFn: {
      type: Function,
      default: function _default(value) {
        var _this = this;

        return value.sort(function (a, b) {
          var sortBy = _this.MdTable.sort;

          if (_this.MdTable.sortOrder === 'desc') {
            return a[sortBy].localeCompare(b[sortBy]);
          }

          return b[sortBy].localeCompare(a[sortBy]);
        });
      }
    }
  },
  data: function data() {
    return {
      fixedHeaderPadding: 0,
      hasContentScroll: false,
      MdTable: {
        items: {},
        sort: null,
        sortOrder: null,
        singleSelection: null,
        selectedItems: {},
        selectable: {},
        fixedHeader: null,
        contentPadding: null,
        contentEl: null,
        // computed
        hasValue: this.hasValue,
        // methods
        emitEvent: this.emitEvent,
        sortTable: this.sortTable,
        manageItemSelection: this.manageItemSelection,
        getModel: this.getModel,
        getModelItem: this.getModelItem
      }
    };
  },

  computed: {
    contentTag: function contentTag() {
      if (this.mdCard) {
        return 'md-card';
      }

      return 'md-content';
    },
    headerCount: function headerCount() {
      return Object.keys(this.MdTable.items).length;
    },
    selectedCount: function selectedCount() {
      return Object.keys(this.MdTable.selectedItems).length;
    },
    headerStyles: function headerStyles() {
      if (this.mdFixedHeader) {
        return 'padding-right: ' + this.fixedHeaderPadding + 'px';
      }
    },
    hasValue: function hasValue() {
      return this.value && this.value.length !== 0;
    },
    headerClasses: function headerClasses() {
      if (this.mdFixedHeader && this.hasContentScroll || !this.hasValue) {
        return 'md-table-fixed-header-active';
      }
    },
    contentStyles: function contentStyles() {
      if (this.mdFixedHeader) {
        return 'height: ' + this.mdHeight + 'px';
      }
    },
    contentClasses: function contentClasses() {
      if (this.mdFixedHeader && this.value.length === 0) {
        return 'md-table-empty';
      }
    }
  },
  provide: function provide() {
    var MdTable = this.MdTable;

    return { MdTable: MdTable };
  },

  watch: {
    mdSort: {
      immediate: true,
      handler: function handler() {
        this.MdTable.sort = this.mdSort;
      }
    },
    mdSortOrder: {
      immediate: true,
      handler: function handler() {
        this.MdTable.sortOrder = this.mdSortOrder;
      }
    },
    mdFixedHeader: {
      immediate: true,
      handler: function handler() {
        this.MdTable.fixedHeader = this.mdFixedHeader;
      }
    },
    hasValue: {
      immediate: true,
      handler: function handler() {
        this.MdTable.hasValue = this.hasValue;
      }
    }
  },
  methods: {
    emitEvent: function emitEvent(eventName, value) {
      this.$emit(eventName, value);
    },
    getRowId: function getRowId(id) {
      if (id) {
        return id;
      }

      return 'md-row-' + (0, _MdUuid2.default)();
    },
    setScroll: function setScroll($event) {
      var _this2 = this;

      (0, _raf2.default)(function () {
        _this2.hasContentScroll = $event.target.scrollTop > 0;
      });
    },
    getContentEl: function getContentEl() {
      return this.$el.querySelector('.md-table-content');
    },
    setContentEl: function setContentEl() {
      this.MdTable.contentEl = this.getContentEl();
    },
    setHeaderPadding: function setHeaderPadding() {
      this.setContentEl();

      var contentEl = this.MdTable.contentEl;

      var tableEl = contentEl.childNodes[0];

      this.fixedHeaderPadding = contentEl.offsetWidth - tableEl.offsetWidth;
    },
    getModel: function getModel() {
      return this.value;
    },
    getModelItem: function getModelItem(index) {
      return this.value[index];
    },
    manageItemSelection: function manageItemSelection(index) {
      if (this.MdTable.selectedItems[index]) {
        this.$delete(this.MdTable.selectedItems, index);
      } else {
        this.$set(this.MdTable.selectedItems, index, this.value[index]);
      }

      this.sendSelectionEvent();
    },
    sendSelectionEvent: function sendSelectionEvent() {
      this.$emit('md-selected', Object.values(this.MdTable.selectedItems));
    },
    sortTable: function sortTable() {
      if (Array.isArray(this.value)) {
        this.$emit('input', this.mdSortFn(this.value));
      }
    }
  },
  mounted: function mounted() {
    this.setContentEl();

    if (this.mdFixedHeader) {
      this.setHeaderPadding();
    }
  }
};

/***/ }),
/* 354 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_MdTagSwitcher_vue__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_MdTagSwitcher_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_MdTagSwitcher_vue__);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */
var __vue_template__ = null
/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_MdTagSwitcher_vue___default.a,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/MdTagSwitcher/MdTagSwitcher.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6f07a399", Component.options)
  } else {
    hotAPI.reload("data-v-6f07a399", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 355 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = {
  functional: true,
  props: {
    mdTag: {
      type: String,
      default: 'div'
    }
  },
  render: function render(createElement, _ref) {
    var props = _ref.props,
        children = _ref.children,
        data = _ref.data,
        listeners = _ref.listeners;

    return createElement(props.mdTag, _extends({}, data, {
      on: listeners
    }), children);
  }
};

/***/ }),
/* 356 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/components/MdTable/MdTableThead.vue
var MdTableThead = __webpack_require__(357);
var MdTableThead_default = /*#__PURE__*/__webpack_require__.n(MdTableThead);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-8a8392f6","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/components/MdTable/MdTableThead.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("thead", [
    _c(
      "tr",
      [
        _c("md-table-head-selection"),
        _vm._v(" "),
        _vm._l(_vm.MdTable.items, function(item, index) {
          return _c(
            "md-table-head",
            _vm._b({ key: index }, "md-table-head", item, false)
          )
        })
      ],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var MdTable_MdTableThead = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-8a8392f6", esExports)
  }
}
// CONCATENATED MODULE: ./src/components/MdTable/MdTableThead.vue
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  MdTableThead_default.a,
  MdTable_MdTableThead,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/MdTable/MdTableThead.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8a8392f6", Component.options)
  } else {
    hotAPI.reload("data-v-8a8392f6", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var components_MdTable_MdTableThead = __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 357 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MdTableHead = __webpack_require__(27);

var _MdTableHead2 = _interopRequireDefault(_MdTableHead);

var _MdTableHeadSelection = __webpack_require__(362);

var _MdTableHeadSelection2 = _interopRequireDefault(_MdTableHeadSelection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//

exports.default = {
  name: 'MdTableThead',
  inject: ['MdTable'],
  components: {
    MdTableHead: _MdTableHead2.default,
    MdTableHeadSelection: _MdTableHeadSelection2.default
  }
};

/***/ }),
/* 358 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 359 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MdUpwardIcon = __webpack_require__(360);

var _MdUpwardIcon2 = _interopRequireDefault(_MdUpwardIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  name: 'MdTableHead',
  components: {
    MdUpwardIcon: _MdUpwardIcon2.default
  },
  props: {
    mdNumeric: Boolean,
    numeric: Boolean,
    label: String,
    tooltip: String,
    sortBy: String
  },
  inject: ['MdTable'],
  data: function data() {
    return {
      width: null
    };
  },
  computed: {
    hasSort: function hasSort() {
      return this.MdTable.sort && this.sortBy;
    },
    isSorted: function isSorted() {
      if (this.MdTable.sort) {
        return this.MdTable.sort === this.sortBy;
      }
    },
    isDescSorted: function isDescSorted() {
      return this.isSorted && this.MdTable.sortOrder === 'desc';
    },
    isAscSorted: function isAscSorted() {
      return this.isSorted && this.MdTable.sortOrder === 'asc';
    },
    headStyles: function headStyles() {
      return {
        width: this.width + 'px'
      };
    },
    headClasses: function headClasses() {
      return {
        'md-numeric': this.numeric || this.mdNumeric,
        'md-sortable': this.hasSort,
        'md-sorted': this.isSorted,
        'md-sorted-desc': this.isDescSorted
      };
    }
  },
  methods: {
    changeSort: function changeSort() {
      if (this.hasSort) {
        if (this.isAscSorted) {
          this.MdTable.sortOrder = 'desc';
        } else {
          this.MdTable.sortOrder = 'asc';
        }

        this.MdTable.sort = this.sortBy;
        this.MdTable.emitEvent('md-sorted', this.MdTable.sort);
        this.MdTable.emitEvent('update:mdSort', this.MdTable.sort);
        this.MdTable.emitEvent('update:mdSortOrder', this.MdTable.sortOrder);
        this.MdTable.sortTable();
      }
    },
    getChildNodesBySelector: function getChildNodesBySelector(el, selector) {
      return Array.from(el.childNodes).filter(function (_ref) {
        var classList = _ref.classList;
        return classList && classList.contains(selector);
      });
    },
    getNodeIndex: function getNodeIndex(nodes, el) {
      return [].indexOf.call(nodes, el);
    },
    setWidth: function setWidth() {
      if (this.MdTable.fixedHeader) {
        var cellSelector = 'md-table-cell';
        var thEls = this.getChildNodesBySelector(this.$el.parentNode, 'md-table-head');
        var tdEls = this.MdTable.contentEl.querySelectorAll('tr:first-child .' + cellSelector);
        var nodeIndex = this.getNodeIndex(thEls, this.$el);

        this.width = tdEls[nodeIndex].offsetWidth;
      }
    }
  },
  updated: function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.$nextTick();

            case 2:
              this.setWidth();

            case 3:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function updated() {
      return _ref2.apply(this, arguments);
    }

    return updated;
  }(),
  mounted: function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.$nextTick();

            case 2:
              this.setWidth();

            case 3:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function mounted() {
      return _ref3.apply(this, arguments);
    }

    return mounted;
  }()
};

/***/ }),
/* 360 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/core/icons/MdUpwardIcon.vue
var MdUpwardIcon = __webpack_require__(361);
var MdUpwardIcon_default = /*#__PURE__*/__webpack_require__.n(MdUpwardIcon);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-235f197a","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/core/icons/MdUpwardIcon.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("md-icon", { staticClass: "md-icon-image" }, [
      _c(
        "svg",
        {
          attrs: {
            height: "24",
            viewBox: "0 0 24 24",
            width: "24",
            xmlns: "http://www.w3.org/2000/svg"
          }
        },
        [
          _c("path", { attrs: { d: "M0 0h24v24H0V0z", fill: "none" } }),
          _vm._v(" "),
          _c("path", {
            attrs: {
              d: "M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"
            }
          })
        ]
      )
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var icons_MdUpwardIcon = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-235f197a", esExports)
  }
}
// CONCATENATED MODULE: ./src/core/icons/MdUpwardIcon.vue
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  MdUpwardIcon_default.a,
  icons_MdUpwardIcon,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/core/icons/MdUpwardIcon.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-235f197a", Component.options)
  } else {
    hotAPI.reload("data-v-235f197a", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var core_icons_MdUpwardIcon = __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 361 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MdIcon = __webpack_require__(5);

var _MdIcon2 = _interopRequireDefault(_MdIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'MdArrowDownIcon',
  components: {
    MdIcon: _MdIcon2.default
  }
}; //
//
//
//
//
//
//
//
//

/***/ }),
/* 362 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/components/MdTable/MdTableHeadSelection.vue
var MdTableHeadSelection = __webpack_require__(363);
var MdTableHeadSelection_default = /*#__PURE__*/__webpack_require__.n(MdTableHeadSelection);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-7fa31cbd","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/components/MdTable/MdTableHeadSelection.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.selectableCount
    ? _c("md-table-head", { staticClass: "md-table-cell-selection" }, [
        _c(
          "div",
          { staticClass: "md-table-cell-container" },
          [
            _c("md-checkbox", {
              attrs: { disabled: _vm.isDisabled },
              on: { change: _vm.onChange },
              model: {
                value: _vm.allSelected,
                callback: function($$v) {
                  _vm.allSelected = $$v
                },
                expression: "allSelected"
              }
            })
          ],
          1
        )
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var MdTable_MdTableHeadSelection = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7fa31cbd", esExports)
  }
}
// CONCATENATED MODULE: ./src/components/MdTable/MdTableHeadSelection.vue
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  MdTableHeadSelection_default.a,
  MdTable_MdTableHeadSelection,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/MdTable/MdTableHeadSelection.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7fa31cbd", Component.options)
  } else {
    hotAPI.reload("data-v-7fa31cbd", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var components_MdTable_MdTableHeadSelection = __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 363 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MdTableHead = __webpack_require__(27);

var _MdTableHead2 = _interopRequireDefault(_MdTableHead);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'MdTableHeadSelection',
  components: {
    MdTableHead: _MdTableHead2.default
  },
  inject: ['MdTable'],
  data: function data() {
    return {
      allSelected: false
    };
  },
  computed: {
    selectableCount: function selectableCount() {
      return Object.keys(this.selectable).length;
    },
    isDisabled: function isDisabled() {
      return !this.selectableCount;
    },
    selectable: function selectable() {
      return this.MdTable.selectable;
    },
    selectedItems: function selectedItems() {
      return this.MdTable.selectedItems;
    }
  },
  watch: {
    selectedItems: {
      immediate: true,
      deep: true,
      handler: function handler(items) {
        var _this = this;

        window.setTimeout(function () {
          var countSelected = Object.keys(items).length;

          if (_this.selectableCount > 0 && countSelected > 0) {
            _this.allSelected = countSelected === _this.selectableCount;
          }
        }, 10);
      }
    }
  },
  methods: {
    onChange: function onChange() {
      var _this2 = this;

      Object.values(this.MdTable.selectable).forEach(function (callback) {
        callback(_this2.allSelected);
      });
    }
  }
}; //
//
//
//
//
//
//
//

/***/ }),
/* 364 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/components/MdTable/MdTableAlternateHeader.vue
var MdTableAlternateHeader = __webpack_require__(366);
var MdTableAlternateHeader_default = /*#__PURE__*/__webpack_require__.n(MdTableAlternateHeader);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-4241c118","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/components/MdTable/MdTableAlternateHeader.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { name: "md-table-alternate-header" } }, [
    _c(
      "div",
      { staticClass: "md-table-alternate-header" },
      [_vm._t("default")],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var MdTable_MdTableAlternateHeader = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4241c118", esExports)
  }
}
// CONCATENATED MODULE: ./src/components/MdTable/MdTableAlternateHeader.vue
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(365)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  MdTableAlternateHeader_default.a,
  MdTable_MdTableAlternateHeader,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/MdTable/MdTableAlternateHeader.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4241c118", Component.options)
  } else {
    hotAPI.reload("data-v-4241c118", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var components_MdTable_MdTableAlternateHeader = __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 365 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 366 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//

exports.default = {
  name: 'MdTableAlternateHeader'
};

/***/ }),
/* 367 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 368 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //
//
//
//
//
//
//
//
//
//
//
//

var _MdPropValidator = __webpack_require__(4);

var _MdPropValidator2 = _interopRequireDefault(_MdPropValidator);

var _MdTableCellSelection = __webpack_require__(52);

var _MdTableCellSelection2 = _interopRequireDefault(_MdTableCellSelection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'MdTableRow',
  components: {
    MdTableCellSelection: _MdTableCellSelection2.default
  },
  props: {
    mdIndex: [Number, String],
    mdId: [Number, String],
    mdSelectable: _extends({
      type: [String]
    }, (0, _MdPropValidator2.default)('md-selectable', ['multiple', 'single'])),
    mdDisabled: Boolean,
    mdAutoSelect: Boolean
  },
  inject: ['MdTable'],
  data: function data() {
    return {
      index: null,
      isSelected: false
    };
  },
  computed: {
    selectableCount: function selectableCount() {
      return Object.keys(this.MdTable.selectable).length;
    },
    isSingleSelected: function isSingleSelected() {
      return this.MdTable.singleSelection === this.mdId;
    },
    hasMultipleSelection: function hasMultipleSelection() {
      return this.MdTable.hasValue && this.mdSelectable === 'multiple';
    },
    hasSingleSelection: function hasSingleSelection() {
      return this.MdTable.hasValue && this.mdSelectable === 'single';
    },
    rowClasses: function rowClasses() {
      if (this.MdTable.hasValue) {
        return {
          'md-has-selection': !this.mdDisabled && (this.mdAutoSelect || this.hasSingleSelection),
          'md-selected': this.isSelected,
          'md-selected-single': this.isSingleSelected
        };
      }
    }
  },
  watch: {
    mdDisabled: function mdDisabled() {
      if (this.mdDisabled) {
        this.removeSelectableItem();
      } else {
        this.addSelectableItem();
      }
    },
    mdId: function mdId(newId, oldId) {
      this.removeSelectableItem(oldId);
      this.addSelectableItem(newId);
    },
    isSelected: function isSelected() {
      this.MdTable.manageItemSelection(this.mdIndex);
    }
  },
  methods: {
    onClick: function onClick() {
      if (this.MdTable.hasValue && !this.mdDisabled) {
        if (this.hasMultipleSelection) {
          this.selectRowIfMultiple();
        } else if (this.hasSingleSelection) {
          this.selectRowIfSingle();
        }
      }
    },
    toggleSelection: function toggleSelection() {
      this.isSelected = !this.isSelected;
    },
    selectRowIfSingle: function selectRowIfSingle() {
      if (this.MdTable.singleSelection === this.mdId) {
        this.MdTable.singleSelection = null;
        this.$emit('md-selected', null);
      } else {
        this.MdTable.singleSelection = this.mdId;
        this.$emit('md-selected', this.MdTable.getModelItem(this.mdIndex));
      }
    },
    selectRowIfMultiple: function selectRowIfMultiple() {
      if (this.mdAutoSelect) {
        this.toggleSelection();
      }
    },
    addSelectableItem: function addSelectableItem(id) {
      var _this = this;

      if (this.hasMultipleSelection && !this.mdDisabled) {
        this.$set(this.MdTable.selectable, id || this.mdId, function (isSelected) {
          _this.isSelected = isSelected;
        });
      }
    },
    removeSelectableItem: function removeSelectableItem(id) {
      if (this.hasMultipleSelection) {
        this.$delete(this.MdTable.selectable, id || this.mdId);
      }
    }
  },
  created: function created() {
    this.addSelectableItem();
  },
  beforeDestroy: function beforeDestroy() {
    this.removeSelectableItem();
  }
};

/***/ }),
/* 369 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 370 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//

exports.default = {
  name: 'MdTableCellSelection',
  props: {
    value: Boolean,
    mdRowId: [Number, String],
    mdSelectable: Boolean,
    mdDisabled: Boolean
  },
  inject: ['MdTable'],
  data: function data() {
    return {
      isSelected: false
    };
  },
  watch: {
    value: function value() {
      this.isSelected = this.value;
    }
  },
  methods: {
    onChange: function onChange() {
      this.$emit('input', this.isSelected);
    }
  }
};

/***/ }),
/* 371 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_MdTableRowGhost_vue__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_MdTableRowGhost_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_MdTableRowGhost_vue__);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */
var __vue_template__ = null
/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_MdTableRowGhost_vue___default.a,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/MdTable/MdTableRowGhost.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b1d6a698", Component.options)
  } else {
    hotAPI.reload("data-v-b1d6a698", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 372 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'MdTableRowGhost',
  abstract: true,
  props: {
    mdIndex: [String, Number],
    mdId: [String, Number]
  },
  render: function render() {
    this.$slots.default[0].componentOptions.propsData.mdIndex = this.mdIndex;
    this.$slots.default[0].componentOptions.propsData.mdId = this.mdId;

    return this.$slots.default[0];
  }
};

/***/ }),
/* 373 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/components/MdTable/MdTableToolbar.vue
var MdTableToolbar = __webpack_require__(375);
var MdTableToolbar_default = /*#__PURE__*/__webpack_require__.n(MdTableToolbar);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-3f6f4028","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/components/MdTable/MdTableToolbar.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "md-toolbar",
    {
      staticClass: "md-table-toolbar md-transparent",
      attrs: { "md-elevation": 0 }
    },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var MdTable_MdTableToolbar = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3f6f4028", esExports)
  }
}
// CONCATENATED MODULE: ./src/components/MdTable/MdTableToolbar.vue
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(374)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  MdTableToolbar_default.a,
  MdTable_MdTableToolbar,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/MdTable/MdTableToolbar.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3f6f4028", Component.options)
  } else {
    hotAPI.reload("data-v-3f6f4028", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var components_MdTable_MdTableToolbar = __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 374 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 375 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MdToolbar = __webpack_require__(53);

var _MdToolbar2 = _interopRequireDefault(_MdToolbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'MdTableToolbar',
  components: {
    MdToolbar: _MdToolbar2.default
  },
  inject: ['MdTable']
}; //
//
//
//
//
//

/***/ }),
/* 376 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 377 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MdComponent = __webpack_require__(2);

var _MdComponent2 = _interopRequireDefault(_MdComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _MdComponent2.default({
  name: 'MdToolbar',
  props: {
    mdElevation: {
      type: [String, Number],
      default: 4
    }
  }
}); //
//
//
//
//
//

/***/ }),
/* 378 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/components/MdTable/MdTableEmptyState.vue
var MdTableEmptyState = __webpack_require__(380);
var MdTableEmptyState_default = /*#__PURE__*/__webpack_require__.n(MdTableEmptyState);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-6f84743a","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/components/MdTable/MdTableEmptyState.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "md-empty-state",
    _vm._b(
      { staticClass: "md-table-empty-state" },
      "md-empty-state",
      _vm.$props,
      false
    ),
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var MdTable_MdTableEmptyState = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6f84743a", esExports)
  }
}
// CONCATENATED MODULE: ./src/components/MdTable/MdTableEmptyState.vue
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(379)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  MdTableEmptyState_default.a,
  MdTable_MdTableEmptyState,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/MdTable/MdTableEmptyState.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6f84743a", Component.options)
  } else {
    hotAPI.reload("data-v-6f84743a", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var components_MdTable_MdTableEmptyState = __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 379 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 380 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MdEmptyState = __webpack_require__(41);

var _MdEmptyState2 = _interopRequireDefault(_MdEmptyState);

var _MdEmptyStateProps = __webpack_require__(42);

var _MdEmptyStateProps2 = _interopRequireDefault(_MdEmptyStateProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//

exports.default = {
  name: 'MdTableEmptyState',
  props: _MdEmptyStateProps2.default,
  inject: ['MdTable']
};

/***/ }),
/* 381 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/components/MdTable/MdTableCell.vue
var MdTableCell = __webpack_require__(383);
var MdTableCell_default = /*#__PURE__*/__webpack_require__.n(MdTableCell);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-813d6b7e","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/components/MdTable/MdTableCell.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("td", { staticClass: "md-table-cell", class: _vm.cellClasses }, [
    _c(
      "div",
      { staticClass: "md-table-cell-container" },
      [_vm._t("default")],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var MdTable_MdTableCell = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-813d6b7e", esExports)
  }
}
// CONCATENATED MODULE: ./src/components/MdTable/MdTableCell.vue
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(382)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  MdTableCell_default.a,
  MdTable_MdTableCell,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/MdTable/MdTableCell.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-813d6b7e", Component.options)
  } else {
    hotAPI.reload("data-v-813d6b7e", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var components_MdTable_MdTableCell = __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 382 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 383 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//

exports.default = {
  name: 'MdTableCell',
  props: {
    mdLabel: String,
    mdNumeric: Boolean,
    mdTooltip: String,
    mdSortBy: String
  },
  inject: ['MdTable'],
  data: function data() {
    return {
      index: null
    };
  },
  computed: {
    cellClasses: function cellClasses() {
      return {
        'md-numeric': this.mdNumeric
      };
    }
  },
  watch: {
    mdSortBy: function mdSortBy() {
      this.setCellData();
    },
    mdNumeric: function mdNumeric() {
      this.setCellData();
    },
    mdLabel: function mdLabel() {
      this.setCellData();
    },
    mdTooltip: function mdTooltip() {
      this.setCellData();
    }
  },
  methods: {
    setCellData: function setCellData() {
      var $vm = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this;

      this.$set(this.MdTable.items, $vm.index, {
        label: $vm.mdLabel,
        numeric: $vm.mdNumeric,
        tooltip: $vm.mdTooltip,
        sortBy: $vm.mdSortBy
      });
    },
    updateAllCellData: function updateAllCellData() {
      var _this = this;

      var cells = Array.from(this.$el.parentNode.childNodes).filter(function (_ref) {
        var tagName = _ref.tagName,
            classList = _ref.classList;

        var isSelection = classList && classList.contains('md-table-cell-selection');
        var isTd = tagName && tagName.toLowerCase() === 'td';

        return isTd && !isSelection;
      });

      cells.forEach(function (cell, index) {
        var $vm = cell.__vue__;

        $vm.index = index;

        _this.setCellData($vm);
      });
    }
  },
  mounted: function mounted() {
    this.updateAllCellData();
  }
};

/***/ }),
/* 384 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/components/MdTable/MdTablePagination.vue
var MdTablePagination = __webpack_require__(386);
var MdTablePagination_default = /*#__PURE__*/__webpack_require__.n(MdTablePagination);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-4165698e","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/components/MdTable/MdTablePagination.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "md-table-pagination" },
    [
      _vm.mdPageOptions !== false
        ? [
            _c("span", { staticClass: "md-table-pagination-label" }, [
              _vm._v(_vm._s(_vm.mdLabel))
            ]),
            _vm._v(" "),
            _c(
              "md-field",
              [
                _c(
                  "md-select",
                  {
                    attrs: {
                      "md-dense": "",
                      "md-class": "md-pagination-select"
                    },
                    on: { changed: _vm.setPageSize },
                    model: {
                      value: _vm.currentPageSize,
                      callback: function($$v) {
                        _vm.currentPageSize = $$v
                      },
                      expression: "currentPageSize"
                    }
                  },
                  _vm._l(_vm.mdPageOptions, function(amount) {
                    return _c(
                      "md-option",
                      { key: amount, attrs: { value: amount } },
                      [_vm._v(_vm._s(amount))]
                    )
                  })
                )
              ],
              1
            )
          ]
        : _vm._e(),
      _vm._v(" "),
      _c("span", [
        _vm._v(
          _vm._s(_vm.currentItemCount) +
            "-" +
            _vm._s(_vm.currentPageCount) +
            " " +
            _vm._s(_vm.mdSeparator) +
            " " +
            _vm._s(_vm.mdTotal)
        )
      ]),
      _vm._v(" "),
      _c(
        "md-button",
        {
          staticClass: "md-icon-button md-table-pagination-previous",
          attrs: { disabled: _vm.mdPage === 1 },
          on: {
            click: function($event) {
              _vm.goToPrevious()
            }
          }
        },
        [_c("md-icon", [_vm._v("keyboard_arrow_left")])],
        1
      ),
      _vm._v(" "),
      _c(
        "md-button",
        {
          staticClass: "md-icon-button md-table-pagination-next",
          on: {
            click: function($event) {
              _vm.goToNext()
            }
          }
        },
        [_c("md-icon", [_vm._v("keyboard_arrow_right")])],
        1
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var MdTable_MdTablePagination = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4165698e", esExports)
  }
}
// CONCATENATED MODULE: ./src/components/MdTable/MdTablePagination.vue
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(385)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  MdTablePagination_default.a,
  MdTable_MdTablePagination,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/MdTable/MdTablePagination.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4165698e", Component.options)
  } else {
    hotAPI.reload("data-v-4165698e", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var components_MdTable_MdTablePagination = __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 385 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 386 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  name: 'MdTablePagination',
  inject: ['MdTable'],
  props: {
    mdPageSize: {
      type: [String, Number],
      default: 10
    },
    mdPageOptions: {
      type: Array,
      default: function _default() {
        return [10, 25, 50, 100];
      }
    },
    mdPage: {
      type: Number,
      default: 1
    },
    mdTotal: {
      type: [String, Number],
      default: 'Many'
    },
    mdLabel: {
      type: String,
      default: 'Rows per page:'
    },
    mdSeparator: {
      type: String,
      default: 'of'
    }
  },
  data: function data() {
    return {
      currentPageSize: 0
    };
  },
  computed: {
    currentItemCount: function currentItemCount() {
      return (this.mdPage - 1) * this.mdPageSize + 1;
    },
    currentPageCount: function currentPageCount() {
      return this.mdPage * this.mdPageSize;
    }
  },
  watch: {
    mdPageSize: {
      immediate: true,
      handler: function handler(pageSize) {
        this.currentPageSize = this.pageSize;
      }
    }
  },
  methods: {
    setPageSize: function setPageSize() {
      this.$emit('update:mdPageSize', this.currentPageSize);
    },
    goToPrevious: function goToPrevious() {},
    goToNext: function goToNext() {}
  },
  created: function created() {
    this.currentPageSize = this.mdPageSize;
  }
};

/***/ }),
/* 387 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _material = __webpack_require__(1);

var _material2 = _interopRequireDefault(_material);

var _MdTabs = __webpack_require__(388);

var _MdTabs2 = _interopRequireDefault(_MdTabs);

var _MdTab = __webpack_require__(391);

var _MdTab2 = _interopRequireDefault(_MdTab);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (Vue) {
  (0, _material2.default)(Vue);
  Vue.component(_MdTabs2.default.name, _MdTabs2.default);
  Vue.component(_MdTab2.default.name, _MdTab2.default);
};

/***/ }),
/* 388 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/components/MdTabs/MdTabs.vue
var MdTabs = __webpack_require__(390);
var MdTabs_default = /*#__PURE__*/__webpack_require__.n(MdTabs);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-733c1bef","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/components/MdTabs/MdTabs.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "md-tabs", class: [_vm.tabsClasses, _vm.$mdActiveTheme] },
    [
      _c(
        "div",
        { staticClass: "md-tabs-navigation", class: _vm.navigationClasses },
        [
          _vm._l(_vm.MdTabs.items, function(ref, index) {
            var label = ref.label
            var props = ref.props
            var icon = ref.icon
            var disabled = ref.disabled
            var data = ref.data
            var events = ref.events
            return _c(
              "md-button",
              _vm._g(
                _vm._b(
                  {
                    key: index,
                    class: {
                      "md-active": index === _vm.activeTab,
                      "md-icon-label": icon && label
                    },
                    attrs: { disabled: disabled },
                    nativeOn: {
                      click: function($event) {
                        _vm.setActiveTab(index)
                      }
                    }
                  },
                  "md-button",
                  props,
                  false
                ),
                events
              ),
              [
                _vm.$scopedSlots["md-tab"]
                  ? _vm._t("md-tab", null, {
                      tab: { label: label, icon: icon, data: data }
                    })
                  : [
                      !icon
                        ? [_vm._v(_vm._s(label))]
                        : [
                            _vm.isAssetIcon(icon)
                              ? _c("md-icon", {
                                  staticClass: "md-tab-icon",
                                  attrs: { "md-src": icon }
                                })
                              : _c("md-icon", { staticClass: "md-tab-icon" }, [
                                  _vm._v(_vm._s(icon))
                                ]),
                            _vm._v(" "),
                            _c("span", { staticClass: "md-tab-label" }, [
                              _vm._v(_vm._s(label))
                            ])
                          ]
                    ]
              ],
              2
            )
          }),
          _vm._v(" "),
          _c("span", {
            ref: "indicator",
            staticClass: "md-tabs-indicator",
            class: _vm.indicatorClass,
            style: _vm.indicatorStyles
          })
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "md-content",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.hasContent,
              expression: "hasContent"
            }
          ],
          staticClass: "md-tabs-content",
          style: _vm.contentStyles
        },
        [
          _c(
            "div",
            { staticClass: "md-tabs-container", style: _vm.containerStyles },
            [_vm._t("default")],
            2
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var MdTabs_MdTabs = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-733c1bef", esExports)
  }
}
// CONCATENATED MODULE: ./src/components/MdTabs/MdTabs.vue
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(389)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  MdTabs_default.a,
  MdTabs_MdTabs,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/MdTabs/MdTabs.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-733c1bef", Component.options)
  } else {
    hotAPI.reload("data-v-733c1bef", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var components_MdTabs_MdTabs = __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 389 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 390 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var _MdComponent = __webpack_require__(2);

var _MdComponent2 = _interopRequireDefault(_MdComponent);

var _MdAssetIcon = __webpack_require__(18);

var _MdAssetIcon2 = _interopRequireDefault(_MdAssetIcon);

var _MdPropValidator = __webpack_require__(4);

var _MdPropValidator2 = _interopRequireDefault(_MdPropValidator);

var _MdObserveElement = __webpack_require__(26);

var _MdObserveElement2 = _interopRequireDefault(_MdObserveElement);

var _MdContent = __webpack_require__(35);

var _MdContent2 = _interopRequireDefault(_MdContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = new _MdComponent2.default({
  name: 'MdTabs',
  mixins: [_MdAssetIcon2.default],
  components: {
    MdContent: _MdContent2.default
  },
  props: {
    mdAlignment: _extends({
      type: String,
      default: 'left'
    }, (0, _MdPropValidator2.default)('md-alignment', ['left', 'right', 'centered', 'fixed'])),
    mdElevation: {
      type: [Number, String],
      default: 0
    },
    mdSyncRoute: Boolean,
    mdDynamicHeight: Boolean,
    mdActiveTab: [String, Number]
  },
  data: function data() {
    return {
      resizeObserver: null,
      activeTab: 0,
      activeTabIndex: 0,
      indicatorStyles: {},
      indicatorClass: null,
      noTransition: true,
      containerStyles: {},
      contentStyles: {
        height: '0px'
      },
      hasContent: false,
      MdTabs: {
        items: {}
      }
    };
  },
  provide: function provide() {
    return {
      MdTabs: this.MdTabs
    };
  },

  computed: {
    tabsClasses: function tabsClasses() {
      var _ref;

      return _ref = {}, _defineProperty(_ref, 'md-alignment-' + this.mdAlignment, true), _defineProperty(_ref, 'md-no-transition', this.noTransition), _defineProperty(_ref, 'md-dynamic-height', this.mdDynamicHeight), _ref;
    },
    navigationClasses: function navigationClasses() {
      return 'md-elevation-' + this.mdElevation;
    }
  },
  watch: {
    MdTabs: {
      deep: true,
      handler: function handler() {
        this.setHasContent();
      }
    },
    activeTab: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.$nextTick();

              case 2:
                this.setIndicatorStyles();
                this.setActiveTabIndex();
                this.calculateTabPos();

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function activeTab() {
        return _ref2.apply(this, arguments);
      }

      return activeTab;
    }(),
    mdActiveTab: function mdActiveTab(tab) {
      this.activeTab = tab;
      this.$emit('md-changed', tab);
    },
    mdAlignment: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.$nextTick();

              case 2:
                this.setIndicatorStyles();

              case 3:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function mdAlignment() {
        return _ref3.apply(this, arguments);
      }

      return mdAlignment;
    }()
  },
  methods: {
    hasActiveTab: function hasActiveTab() {
      return this.activeTab || this.mdActiveTab;
    },
    getItemsAndKeys: function getItemsAndKeys() {
      var items = this.MdTabs.items;

      return {
        items: items,
        keys: Object.keys(items)
      };
    },
    setActiveTab: function setActiveTab(index) {
      this.activeTab = index;
      this.$emit('md-changed', index);
    },
    setActiveTabIndex: function setActiveTabIndex() {
      var activeButton = this.$el.querySelector('.md-button.md-active');

      if (activeButton) {
        this.activeTabIndex = [].indexOf.call(activeButton.parentNode.childNodes, activeButton);
      }
    },
    setActiveTabByIndex: function setActiveTabByIndex(index) {
      var _getItemsAndKeys = this.getItemsAndKeys(),
          keys = _getItemsAndKeys.keys;

      if (!this.hasActiveTab()) {
        this.activeTab = keys[index];
      }
    },
    setActiveTabByRoute: function setActiveTabByRoute() {
      var _this = this;

      var _getItemsAndKeys2 = this.getItemsAndKeys(),
          items = _getItemsAndKeys2.items,
          keys = _getItemsAndKeys2.keys;

      var tabIndex = null;

      if (this.$router) {
        keys.forEach(function (key, index) {
          var item = items[key];
          var toProp = item.props.to;

          if (toProp && toProp === _this.$route.path) {
            tabIndex = index;
          }
        });
      }

      if (!this.hasActiveTab() && !tabIndex) {
        this.activeTab = keys[0];
      } else {
        this.activeTab = keys[tabIndex];
      }
    },
    setHasContent: function setHasContent() {
      var _getItemsAndKeys3 = this.getItemsAndKeys(),
          items = _getItemsAndKeys3.items,
          keys = _getItemsAndKeys3.keys;

      this.hasContent = keys.some(function (key) {
        return items[key].hasContent;
      });
    },
    setIndicatorStyles: function setIndicatorStyles() {
      var _this2 = this;

      window.requestAnimationFrame(_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var activeButton, buttonWidth, buttonLeft, indicatorLeft;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _this2.$nextTick();

              case 2:
                activeButton = _this2.$el.querySelector('.md-button.md-active');


                if (activeButton && _this2.$refs.indicator) {
                  buttonWidth = activeButton.offsetWidth;
                  buttonLeft = activeButton.offsetLeft;
                  indicatorLeft = _this2.$refs.indicator.offsetLeft;


                  if (indicatorLeft < buttonLeft) {
                    _this2.indicatorClass = 'md-tabs-indicator-right';
                  } else {
                    _this2.indicatorClass = 'md-tabs-indicator-left';
                  }

                  _this2.indicatorStyles = {
                    left: buttonLeft + 'px',
                    right: 'calc(100% - ' + (buttonWidth + buttonLeft) + 'px)'
                  };
                }

              case 4:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this2);
      })));
    },
    calculateTabPos: function calculateTabPos() {
      if (this.hasContent) {
        var tabElement = this.$el.querySelector('.md-tab:nth-child(' + (this.activeTabIndex + 1) + ')');

        this.contentStyles = {
          height: tabElement.offsetHeight + 'px'
        };

        this.containerStyles = {
          transform: 'translate3D(' + -this.activeTabIndex * 100 + '%, 0, 0)'
        };
      }
    },
    setupObservers: function setupObservers() {
      var _this3 = this;

      if ('ResizeObserver' in window) {
        this.resizeObserver = new window.ResizeObserver(this.setIndicatorStyles);
        this.resizeObserver.observe(this.$el);
      } else {
        this.resizeObserver = (0, _MdObserveElement2.default)(this.$el.querySelector('.md-tabs-content'), {
          childList: true,
          characterData: true,
          subtree: true
        }, function () {
          _this3.setIndicatorStyles();
          _this3.calculateTabPos();
        });

        window.addEventListener('resize', this.setIndicatorStyles);
      }
    },
    setupWatchers: function setupWatchers() {
      if (this.mdSyncRoute) {
        this.$watch('$route', {
          deep: true,
          handler: function handler() {
            if (this.mdSyncRoute) {
              this.setActiveTabByRoute();
            }
          }
        });
      }
    }
  },
  created: function created() {
    this.setHasContent();
    this.activeTab = this.mdActiveTab;
  },
  mounted: function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
      var _this4 = this;

      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return this.$nextTick();

            case 2:

              if (this.mdSyncRoute) {
                this.setActiveTabByRoute();
              } else {
                this.setActiveTabByIndex(0);
              }

              _context4.next = 5;
              return this.$nextTick();

            case 5:

              this.setActiveTabIndex();
              this.calculateTabPos();

              window.setTimeout(function () {
                _this4.noTransition = false;
                _this4.setupObservers();
                _this4.setupWatchers();
              }, 100);

            case 8:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function mounted() {
      return _ref5.apply(this, arguments);
    }

    return mounted;
  }(),
  beforeDestroy: function beforeDestroy() {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }

    window.removeEventListener('resize', this.setIndicatorStyles);
  }
});

/***/ }),
/* 391 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_MdTab_vue__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_MdTab_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_MdTab_vue__);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */
var __vue_template__ = null
/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_MdTab_vue___default.a,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/MdTabs/MdTab.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4b620898", Component.options)
  } else {
    hotAPI.reload("data-v-4b620898", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 392 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _MdUuid = __webpack_require__(6);

var _MdUuid2 = _interopRequireDefault(_MdUuid);

var _MdObserveElement = __webpack_require__(26);

var _MdObserveElement2 = _interopRequireDefault(_MdObserveElement);

var _MdRouterLinkProps = __webpack_require__(12);

var _MdRouterLinkProps2 = _interopRequireDefault(_MdRouterLinkProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'MdTab',
  props: {
    id: {
      type: String,
      default: function _default() {
        return 'md-tab-' + (0, _MdUuid2.default)();
      }
    },
    href: [String, Number],
    to: null,
    mdDisabled: Boolean,
    mdLabel: [String, Number],
    mdIcon: String,
    mdTemplateData: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  inject: ['MdTabs'],
  data: function data() {
    return {
      observer: null
    };
  },
  watch: {
    $props: {
      deep: true,
      handler: function handler() {
        this.setTabData();
      }
    },
    $attrs: {
      deep: true,
      handler: function handler() {
        this.setTabData();
      }
    }
  },
  methods: {
    setTabContent: function setTabContent() {
      this.$set(this.MdTabs.items[this.id], 'hasContent', !!this.$slots.default);
    },
    setupObserver: function setupObserver() {
      this.observer = (0, _MdObserveElement2.default)(this.$el, {
        childList: true
      }, this.setTabContent);
    },
    setTabData: function setTabData() {
      this.$set(this.MdTabs.items, this.id, {
        hasContent: !!this.$slots.default,
        label: this.mdLabel,
        icon: this.mdIcon,
        disabled: this.mdDisabled,
        data: this.mdTemplateData,
        props: this.getPropValues(),
        events: this.$listeners
      });
    },
    getPropValues: function getPropValues() {
      var _this = this;

      var propNames = Object.keys(this.$options.props);
      var ignoredProps = ['id', 'mdLabel', 'mdDisabled', 'mdTemplateData'];
      var values = {};

      propNames.forEach(function (prop) {
        if (!ignoredProps.includes(prop)) {
          if (_this[prop]) {
            values[prop] = _this[prop];
          } else if (_this.$attrs.hasOwnProperty(prop)) {
            if (prop) {
              values[prop] = _this.$attrs[prop];
            } else {
              values[prop] = true;
            }
          }
        }
      });

      return values;
    }
  },
  mounted: function mounted() {
    this.setupObserver();
    this.setTabData();
  },
  beforeDestroy: function beforeDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }

    this.$delete(this.MdTabs.items, this.id);
  },
  render: function render(createElement) {
    var tabAttrs = {
      staticClass: 'md-tab',
      attrs: _extends({}, this.$attrs, {
        id: this.id
      }),
      on: this.$listeners
    };

    if (this.href) {
      this.buttonProps = this.$options.props;
    } else if (this.$router && this.to) {
      this.$options.props = (0, _MdRouterLinkProps2.default)(this, this.$options.props);

      tabAttrs.props = this.$props;
    }

    return createElement('div', tabAttrs, this.$slots.default);
  }
};

/***/ }),
/* 393 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _material = __webpack_require__(1);

var _material2 = _interopRequireDefault(_material);

var _MdToolbar = __webpack_require__(53);

var _MdToolbar2 = _interopRequireDefault(_MdToolbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (Vue) {
  (0, _material2.default)(Vue);
  Vue.component(_MdToolbar2.default.name, _MdToolbar2.default);
};

/***/ }),
/* 394 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _material = __webpack_require__(1);

var _material2 = _interopRequireDefault(_material);

var _MdTooltip = __webpack_require__(395);

var _MdTooltip2 = _interopRequireDefault(_MdTooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (Vue) {
  (0, _material2.default)(Vue);
  Vue.component(_MdTooltip2.default.name, _MdTooltip2.default);
};

/***/ }),
/* 395 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/components/MdTooltip/MdTooltip.vue
var MdTooltip = __webpack_require__(397);
var MdTooltip_default = /*#__PURE__*/__webpack_require__.n(MdTooltip);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-03252be9","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/components/MdTooltip/MdTooltip.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "md-popover",
    {
      attrs: {
        "md-settings": _vm.popperSettings,
        "md-active": _vm.shouldRender
      }
    },
    [
      _vm.shouldRender
        ? _c("transition", { attrs: { name: "md-tooltip" } }, [
            _c(
              "div",
              {
                staticClass: "md-tooltip",
                class: [_vm.tooltipClasses, _vm.$mdActiveTheme],
                style: _vm.tooltipStyles
              },
              [_vm._t("default")],
              2
            )
          ])
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var MdTooltip_MdTooltip = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-03252be9", esExports)
  }
}
// CONCATENATED MODULE: ./src/components/MdTooltip/MdTooltip.vue
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(396)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  MdTooltip_default.a,
  MdTooltip_MdTooltip,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/MdTooltip/MdTooltip.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-03252be9", Component.options)
  } else {
    hotAPI.reload("data-v-03252be9", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var components_MdTooltip_MdTooltip = __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 396 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 397 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //
//
//
//
//
//
//
//
//
//

var _MdComponent = __webpack_require__(2);

var _MdComponent2 = _interopRequireDefault(_MdComponent);

var _MdPropValidator = __webpack_require__(4);

var _MdPropValidator2 = _interopRequireDefault(_MdPropValidator);

var _MdPopover = __webpack_require__(25);

var _MdPopover2 = _interopRequireDefault(_MdPopover);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = new _MdComponent2.default({
  name: 'MdTooltip',
  components: {
    MdPopover: _MdPopover2.default
  },
  props: {
    mdActive: Boolean,
    mdDelay: {
      type: [String, Number],
      default: 0
    },
    mdDirection: _extends({
      type: String,
      default: 'bottom'
    }, (0, _MdPropValidator2.default)('md-direction', ['top', 'right', 'bottom', 'left']))
  },
  data: function data() {
    return {
      shouldRender: false,
      targetEl: null
    };
  },
  computed: {
    tooltipClasses: function tooltipClasses() {
      return 'md-tooltip-' + this.mdDirection;
    },
    tooltipStyles: function tooltipStyles() {
      return 'transition-delay: ' + this.mdDelay + 'ms';
    },
    popperSettings: function popperSettings() {
      return {
        placement: this.mdDirection,
        modifiers: {
          offset: {
            offset: '0, 16'
          }
        }
      };
    }
  },
  watch: {
    mdActive: function mdActive() {
      this.shouldRender = this.mdActive;
    }
  },
  methods: {
    show: function show() {
      this.shouldRender = true;
    },
    hide: function hide() {
      this.$emit('update:mdActive', false);
      this.shouldRender = false;
    }
  },
  mounted: function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.$nextTick();

            case 2:

              this.shouldRender = this.mdActive;
              this.targetEl = this._vnode.componentInstance.originalParentEl;

              if (this.targetEl) {
                this.targetEl.addEventListener('mouseenter', this.show, false);
                this.targetEl.addEventListener('mouseleave', this.hide, false);
              }

            case 5:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function mounted() {
      return _ref.apply(this, arguments);
    }

    return mounted;
  }(),
  beforeDestroy: function beforeDestroy() {
    if (this.targetEl) {
      this.targetEl.removeEventListener('mouseenter', this.show);
      this.targetEl.removeEventListener('mouseleave', this.hide);
    }
  }
});

/***/ })
/******/ ]);
});