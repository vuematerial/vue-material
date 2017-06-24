/*!
 * vue-material v0.8.1
 * Made with <3 by marcosmoura 2017
 * Released under the MIT License.
 */
module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 52);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var store      = __webpack_require__(32)('wks')
  , uid        = __webpack_require__(33)
  , Symbol     = __webpack_require__(1).Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 2 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(72)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 4 */
/***/ (function(module, exports) {

var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 5 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(1)
  , core      = __webpack_require__(4)
  , ctx       = __webpack_require__(11)
  , hide      = __webpack_require__(7)
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var dP         = __webpack_require__(12)
  , createDesc = __webpack_require__(21);
module.exports = __webpack_require__(9) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(14);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(19)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 10 */
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

var _MdTheme = __webpack_require__(37);

var _MdTheme2 = _interopRequireDefault(_MdTheme);

var _deepmerge = __webpack_require__(79);

var _deepmerge2 = _interopRequireDefault(_deepmerge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(18);
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var anObject       = __webpack_require__(8)
  , IE8_DOM_DEFINE = __webpack_require__(56)
  , toPrimitive    = __webpack_require__(57)
  , dP             = Object.defineProperty;

exports.f = __webpack_require__(9) ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = {};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(31)
  , defined = __webpack_require__(23);
module.exports = function(it){
  return IObject(defined(it));
};

/***/ }),
/* 17 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(14)
  , document = __webpack_require__(1).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = __webpack_require__(59)
  , enumBugKeys = __webpack_require__(34);

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};

/***/ }),
/* 23 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(25)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),
/* 25 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(32)('keys')
  , uid    = __webpack_require__(33);
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(23);
module.exports = function(it){
  return Object(defined(it));
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(84);


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _promise = __webpack_require__(41);

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new _promise2.default(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          return _promise2.default.resolve(value).then(function (value) {
            step("next", value);
          }, function (err) {
            step("throw", err);
          });
        }
      }

      return step("next");
    });
  };
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(12).f
  , has = __webpack_require__(15)
  , TAG = __webpack_require__(0)('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(17);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};

/***/ }),
/* 33 */
/***/ (function(module, exports) {

var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),
/* 34 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

/***/ }),
/* 35 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var dP       = __webpack_require__(12)
  , anObject = __webpack_require__(8)
  , getKeys  = __webpack_require__(22);

module.exports = __webpack_require__(9) ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"vue\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var msColor = document.querySelector('[name="msapplication-TileColor"]');
var themeColor = document.querySelector('[name="theme-color"]');
var maskIcon = document.querySelector('[rel="mask-icon"]');

exports.default = new _vue2.default({
  data: function data() {
    return {
      prefix: 'md-theme-',
      theme: 'default',
      enabled: true,
      themeTarget: document.documentElement
    };
  },
  computed: {
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


        if (enabled) {
          themeTarget.classList.add(fullThemeName);
          this.setHtmlMetaColors(fullThemeName);
        } else {
          themeTarget.classList.remove(fullThemeName);
          this.setHtmlMetaColors();
        }
      }
    },
    theme: function theme(newTheme, oldTheme) {
      var getThemeName = this.getThemeName,
          themeTarget = this.themeTarget;


      newTheme = getThemeName(newTheme);

      themeTarget.classList.remove(getThemeName(oldTheme));
      themeTarget.classList.add(newTheme);
      this.setHtmlMetaColors(newTheme);
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
  created: function created() {
    var _this2 = this;

    if (this.enabled) {
      window.addEventListener('load', function () {
        _this2.setHtmlMetaColors(_this2.fullThemeName);
      });
    }
  }
});

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(74);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
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

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(81)
}
var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(83),
  /* template */
  __webpack_require__(105),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/marcosmoura/Projects/github/vue-material-experiments/src/components/MdRipple/MdRipple.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] MdRipple.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0ce4ed8a", Component.options)
  } else {
    hotAPI.reload("data-v-0ce4ed8a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 40 */
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
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(86), __esModule: true };

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at  = __webpack_require__(88)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(43)(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY        = __webpack_require__(44)
  , $export        = __webpack_require__(6)
  , redefine       = __webpack_require__(89)
  , hide           = __webpack_require__(7)
  , has            = __webpack_require__(15)
  , Iterators      = __webpack_require__(13)
  , $iterCreate    = __webpack_require__(90)
  , setToStringTag = __webpack_require__(30)
  , getPrototypeOf = __webpack_require__(92)
  , ITERATOR       = __webpack_require__(0)('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = true;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1).document && document.documentElement;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(17)
  , TAG = __webpack_require__(0)('toStringTag')
  // ES3 wrong here
  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function(it, key){
  try {
    return it[key];
  } catch(e){ /* empty */ }
};

module.exports = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(8);
module.exports = function(iterator, fn, value, entries){
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch(e){
    var ret = iterator['return'];
    if(ret !== undefined)anObject(ret.call(iterator));
    throw e;
  }
};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators  = __webpack_require__(13)
  , ITERATOR   = __webpack_require__(0)('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var classof   = __webpack_require__(46)
  , ITERATOR  = __webpack_require__(0)('iterator')
  , Iterators = __webpack_require__(13);
module.exports = __webpack_require__(4).getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var ctx                = __webpack_require__(11)
  , invoke             = __webpack_require__(101)
  , html               = __webpack_require__(45)
  , cel                = __webpack_require__(20)
  , global             = __webpack_require__(1)
  , process            = global.process
  , setTask            = global.setImmediate
  , clearTask          = global.clearImmediate
  , MessageChannel     = global.MessageChannel
  , counter            = 0
  , queue              = {}
  , ONREADYSTATECHANGE = 'onreadystatechange'
  , defer, channel, port;
var run = function(){
  var id = +this;
  if(queue.hasOwnProperty(id)){
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function(event){
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if(!setTask || !clearTask){
  setTask = function setImmediate(fn){
    var args = [], i = 1;
    while(arguments.length > i)args.push(arguments[i++]);
    queue[++counter] = function(){
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id){
    delete queue[id];
  };
  // Node.js 0.8-
  if(__webpack_require__(17)(process) == 'process'){
    defer = function(id){
      process.nextTick(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if(MessageChannel){
    channel = new MessageChannel;
    port    = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
    defer = function(id){
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if(ONREADYSTATECHANGE in cel('script')){
    defer = function(id){
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function(id){
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set:   setTask,
  clear: clearTask
};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR     = __webpack_require__(0)('iterator')
  , SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function(){ SAFE_CLOSING = true; };
  Array.from(riter, function(){ throw 2; });
} catch(e){ /* empty */ }

module.exports = function(exec, skipClosing){
  if(!skipClosing && !SAFE_CLOSING)return false;
  var safe = false;
  try {
    var arr  = [7]
      , iter = arr[ITERATOR]();
    iter.next = function(){ return {done: safe = true}; };
    arr[ITERATOR] = function(){ return iter; };
    exec(arr);
  } catch(e){ /* empty */ }
  return safe;
};

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _values = __webpack_require__(53);

var _values2 = _interopRequireDefault(_values);

var _material = __webpack_require__(62);

var _material2 = _interopRequireDefault(_material);

var _components = __webpack_require__(67);

var _components2 = _interopRequireDefault(_components);

__webpack_require__(149);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VueMaterial = function VueMaterial(Vue) {
  (0, _material2.default)(Vue);

  (0, _values2.default)(_components2.default).forEach(function (MdComponent) {
    Vue.use(MdComponent);
  });
};

VueMaterial.version = '__VERSION__';

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueMaterial);
}

exports.default = VueMaterial;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(54), __esModule: true };

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(55);
module.exports = __webpack_require__(4).Object.values;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(6)
  , $values = __webpack_require__(58)(false);

$export($export.S, 'Object', {
  values: function values(it){
    return $values(it);
  }
});

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(9) && !__webpack_require__(19)(function(){
  return Object.defineProperty(__webpack_require__(20)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(14);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var getKeys   = __webpack_require__(22)
  , toIObject = __webpack_require__(16)
  , isEnum    = __webpack_require__(35).f;
module.exports = function(isEntries){
  return function(it){
    var O      = toIObject(it)
      , keys   = getKeys(O)
      , length = keys.length
      , i      = 0
      , result = []
      , key;
    while(length > i)if(isEnum.call(O, key = keys[i++])){
      result.push(isEntries ? [key, O[key]] : O[key]);
    } return result;
  };
};

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var has          = __webpack_require__(15)
  , toIObject    = __webpack_require__(16)
  , arrayIndexOf = __webpack_require__(60)(false)
  , IE_PROTO     = __webpack_require__(26)('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(16)
  , toLength  = __webpack_require__(24)
  , toIndex   = __webpack_require__(61);
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(25)
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperties = __webpack_require__(63);

var _defineProperties2 = _interopRequireDefault(_defineProperties);

var _MdReactive = __webpack_require__(66);

var _MdReactive2 = _interopRequireDefault(_MdReactive);

var _MdTheme = __webpack_require__(37);

var _MdTheme2 = _interopRequireDefault(_MdTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var material = new _MdReactive2.default({
  inkRipple: true,
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

(0, _defineProperties2.default)(material.theming, {
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

exports.default = function (Vue) {
  if (!Vue.material) {
    Vue.material = material;
    Vue.prototype.$material = material;
  }
};

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(64), __esModule: true };

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(65);
var $Object = __webpack_require__(4).Object;
module.exports = function defineProperties(T, D){
  return $Object.defineProperties(T, D);
};

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(6);
// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
$export($export.S + $export.F * !__webpack_require__(9), 'Object', {defineProperties: __webpack_require__(36)});

/***/ }),
/* 66 */
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

var _vue = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"vue\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MdButton = __webpack_require__(68);

var _MdButton2 = _interopRequireDefault(_MdButton);

var _MdContent = __webpack_require__(109);

var _MdContent2 = _interopRequireDefault(_MdContent);

var _MdElevation = __webpack_require__(115);

var _MdElevation2 = _interopRequireDefault(_MdElevation);

var _MdIcon = __webpack_require__(118);

var _MdIcon2 = _interopRequireDefault(_MdIcon);

var _MdImage = __webpack_require__(129);

var _MdImage2 = _interopRequireDefault(_MdImage);

var _MdLayout = __webpack_require__(139);

var _MdLayout2 = _interopRequireDefault(_MdLayout);

var _MdRipple = __webpack_require__(142);

var _MdRipple2 = _interopRequireDefault(_MdRipple);

var _MdToolbar = __webpack_require__(143);

var _MdToolbar2 = _interopRequireDefault(_MdToolbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  MdButton: _MdButton2.default,
  MdContent: _MdContent2.default,
  MdElevation: _MdElevation2.default,
  MdIcon: _MdIcon2.default,
  MdImage: _MdImage2.default,
  MdLayout: _MdLayout2.default,
  MdRipple: _MdRipple2.default,
  MdToolbar: _MdToolbar2.default
};

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MdButton = __webpack_require__(69);

var _MdButton2 = _interopRequireDefault(_MdButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (Vue) {
  Vue.component(_MdButton2.default.name, _MdButton2.default);
};

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(70)
}
var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(73),
  /* template */
  null,
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/marcosmoura/Projects/github/vue-material-experiments/src/components/MdButton/MdButton.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-44646b7b", Component.options)
  } else {
    hotAPI.reload("data-v-44646b7b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(71);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("1661b235", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-44646b7b\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js?outputStyle=compressed!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./MdButton.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-44646b7b\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js?outputStyle=compressed!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./MdButton.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, "\n.md-button{min-width:88px;height:36px;margin:6px 8px;padding:0;display:inline-block;position:relative;overflow:hidden;user-select:none;outline:none;background:transparent;border:0;border-radius:2px;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:box-shadow, color, background-color;transition-duration:.3s,.4s,.4s;will-change:box-shadow, color, background-color;font-family:inherit;font-size:14px;font-weight:500;text-transform:uppercase;text-decoration:none;vertical-align:top;white-space:nowrap\n}\n.md-button:active{outline:none\n}\n.md-button[disabled]{pointer-events:none\n}\n.md-button:not([disabled]){cursor:pointer\n}\n.md-button:not([disabled]):hover:before,.md-button:not([disabled]):active:before,.md-button:not([disabled]).md-focused:before{background-color:currentColor;opacity:.15\n}\n.md-button:not([disabled]).md-focused.md-primary:before,.md-button:not([disabled]).md-focused.md-accent:before{opacity:.2\n}\n.md-button:not([disabled]):active:before{opacity:.2\n}\n.md-button::-moz-focus-inner{padding:0;border:0\n}\n.md-button:before{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;opacity:0;transition:.4s cubic-bezier(0.4, 0, 0.2, 1);will-change:background-color, opacity;content:\" \"\n}\n.md-button.md-dense{height:32px;font-size:13px\n}\n.md-button.md-raised:not([disabled]){box-shadow:0 3px 1px -2px rgba(0,0,0,0.2),0 2px 2px 0 rgba(0,0,0,0.14),0 1px 5px 0 rgba(0,0,0,0.12)\n}\n.md-button.md-raised:not([disabled]):active{box-shadow:0 5px 5px -3px rgba(0,0,0,0.2),0 8px 10px 1px rgba(0,0,0,0.14),0 3px 14px 2px rgba(0,0,0,0.12)\n}\n.md-button+.md-button{margin-left:0\n}\n.md-button .md-ripple{padding:0 8px;display:flex;justify-content:center;align-items:center\n}\n.md-button-spaced .md-ripple{padding:0 16px\n}\n.md-icon-button{width:40px;min-width:40px;height:40px;margin:0 6px;border-radius:50%\n}\n.md-icon-button:before{border-radius:50%\n}\n.md-icon-button.md-dense{width:32px;min-width:32px;height:32px\n}\n.md-icon-button .md-ripple{border-radius:50%\n}\n.md-icon-button .md-ripple-wave{top:0 !important;right:0 !important;bottom:0 !important;left:0 !important\n}\n.md-icon-button .md-ripple-enter-active{transition-duration:1.2s\n}\n.md-button-content{position:relative;z-index:2\n}\n", ""]);

// exports


/***/ }),
/* 72 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(38);

var _extends3 = _interopRequireDefault(_extends2);

var _MdComponent = __webpack_require__(10);

var _MdComponent2 = _interopRequireDefault(_MdComponent);

var _ripple = __webpack_require__(80);

var _ripple2 = _interopRequireDefault(_ripple);

var _MdButtonContent = __webpack_require__(106);

var _MdButtonContent2 = _interopRequireDefault(_MdButtonContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _MdComponent2.default({
  name: 'MdButton',
  components: {
    MdButtonContent: _MdButtonContent2.default
  },
  mixins: [_ripple2.default],
  props: {
    href: String,
    type: {
      type: String,
      default: 'button'
    },
    disabled: Boolean,
    to: [String, Object]
  },
  render: function render(createElement) {
    var _this = this;

    var buttonContent = createElement('md-button-content', {
      attrs: {
        mdRipple: this.mdRipple,
        disabled: this.disabled
      }
    }, this.$slots.default);
    var buttonAttrs = {
      staticClass: 'md-button',
      class: [this.$mdActiveTheme],
      attrs: {
        href: this.href,
        disabled: this.disabled,
        type: this.type || 'button'
      },
      on: {
        click: function click($event) {
          _this.$emit('click', $event);
        }
      }
    };
    var tag = 'button';

    if (this.href) {
      tag = 'a';
    } else if (this.to) {
      tag = 'router-link';
      buttonAttrs.attrs = (0, _extends3.default)({}, this.$options.propsData, {
        to: this.to
      });
    }

    return createElement(tag, buttonAttrs, [buttonContent]);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(75), __esModule: true };

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(76);
module.exports = __webpack_require__(4).Object.assign;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(6);

$export($export.S + $export.F, 'Object', {assign: __webpack_require__(77)});

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys  = __webpack_require__(22)
  , gOPS     = __webpack_require__(78)
  , pIE      = __webpack_require__(35)
  , toObject = __webpack_require__(27)
  , IObject  = __webpack_require__(31)
  , $assign  = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(19)(function(){
  var A = {}
    , B = {}
    , S = Symbol()
    , K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function(k){ B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
  var T     = toObject(target)
    , aLen  = arguments.length
    , index = 1
    , getSymbols = gOPS.f
    , isEnum     = pIE.f;
  while(aLen > index){
    var S      = IObject(arguments[index++])
      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
  } return T;
} : $assign;

/***/ }),
/* 78 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var index$2 = function isMergeableObject(value) {
	return isNonNullObject(value) && isNotSpecial(value)
};

function isNonNullObject(value) {
	return !!value && typeof value === 'object'
}

function isNotSpecial(value) {
	var stringValue = Object.prototype.toString.call(value);

	return stringValue !== '[object RegExp]'
		&& stringValue !== '[object Date]'
}

function emptyTarget(val) {
    return Array.isArray(val) ? [] : {}
}

function cloneIfNecessary(value, optionsArgument) {
    var clone = optionsArgument && optionsArgument.clone === true;
    return (clone && index$2(value)) ? deepmerge(emptyTarget(value), value, optionsArgument) : value
}

function defaultArrayMerge(target, source, optionsArgument) {
    var destination = target.slice();
    source.forEach(function(e, i) {
        if (typeof destination[i] === 'undefined') {
            destination[i] = cloneIfNecessary(e, optionsArgument);
        } else if (index$2(e)) {
            destination[i] = deepmerge(target[i], e, optionsArgument);
        } else if (target.indexOf(e) === -1) {
            destination.push(cloneIfNecessary(e, optionsArgument));
        }
    });
    return destination
}

function mergeObject(target, source, optionsArgument) {
    var destination = {};
    if (index$2(target)) {
        Object.keys(target).forEach(function(key) {
            destination[key] = cloneIfNecessary(target[key], optionsArgument);
        });
    }
    Object.keys(source).forEach(function(key) {
        if (!index$2(source[key]) || !target[key]) {
            destination[key] = cloneIfNecessary(source[key], optionsArgument);
        } else {
            destination[key] = deepmerge(target[key], source[key], optionsArgument);
        }
    });
    return destination
}

function deepmerge(target, source, optionsArgument) {
    var array = Array.isArray(source);
    var options = optionsArgument || { arrayMerge: defaultArrayMerge };
    var arrayMerge = options.arrayMerge || defaultArrayMerge;

    if (array) {
        return Array.isArray(target) ? arrayMerge(target, source, optionsArgument) : cloneIfNecessary(source, optionsArgument)
    } else {
        return mergeObject(target, source, optionsArgument)
    }
}

deepmerge.all = function deepmergeAll(array, optionsArgument) {
    if (!Array.isArray(array) || array.length < 2) {
        throw new Error('first argument should be an array with at least two elements')
    }

    // we are sure there are at least 2 values, so it is safe to have no initial value
    return array.reduce(function(prev, next) {
        return deepmerge(prev, next, optionsArgument)
    })
};

var index = deepmerge;

module.exports = index;


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MdRipple = __webpack_require__(39);

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
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(82);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("25815928", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0ce4ed8a\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js?outputStyle=compressed!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./MdRipple.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0ce4ed8a\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js?outputStyle=compressed!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./MdRipple.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, "\n.md-ripple{width:100%;height:100%;position:relative;z-index:99;overflow:hidden;-webkit-mask-image:radial-gradient(circle, #fff 100%, #000 100%);transition:background-color .4s cubic-bezier(0.4, 0, 0.2, 1)\n}\n.md-ripple-wave{position:absolute;z-index:1;pointer-events:none;background:currentColor;border-radius:50%;opacity:0;transform:scale(2) translateZ(0)\n}\n.md-ripple-wave.md-centered{top:50%;left:50%\n}\n.md-ripple-wave ~ *{position:relative;z-index:2\n}\n.md-ripple-enter-active{transition:1s cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:opacity, transform;will-change:opacity, transform\n}\n.md-ripple-enter-active.md-centered{transition-duration:1.2s\n}\n.md-ripple-enter{opacity:.26;transform:scale(0) translateZ(0)\n}\n", ""]);

// exports


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(38);

var _extends3 = _interopRequireDefault(_extends2);

var _regenerator = __webpack_require__(28);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(29);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _MdComponent = __webpack_require__(10);

var _MdComponent2 = _interopRequireDefault(_MdComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _MdComponent2.default({
  name: 'MdRipple',
  props: {
    mdDisabled: Boolean,
    mdCentered: Boolean
  },
  data: function data() {
    return {
      eventType: null,
      waveStyles: null,
      animating: false
    };
  },
  computed: {
    rippleClass: function rippleClass() {
      return {
        'md-centered': this.mdCentered
      };
    }
  },
  methods: {
    startRipple: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee($event) {
        var eventType, mdDisabled, mdCentered, rippleSize, ripplePosition;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                eventType = this.eventType, mdDisabled = this.mdDisabled, mdCentered = this.mdCentered;

                if (!(!mdDisabled && (!eventType || eventType === $event.type))) {
                  _context.next = 10;
                  break;
                }

                rippleSize = this.getSize();
                ripplePosition = null;


                if (mdCentered) {
                  ripplePosition = this.getCenteredPosition(rippleSize);
                } else {
                  ripplePosition = this.getHitPosition($event, rippleSize);
                }

                _context.next = 7;
                return this.clearWave();

              case 7:

                this.eventType = $event.type;
                this.animating = true;
                this.applyStyles(ripplePosition, rippleSize);

              case 10:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function startRipple(_x) {
        return _ref.apply(this, arguments);
      }

      return startRipple;
    }(),
    applyStyles: function applyStyles(position, size) {
      size += 'px';

      this.waveStyles = (0, _extends3.default)({}, position, {
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g =
  typeof global === "object" ? global :
  typeof window === "object" ? window :
  typeof self === "object" ? self : this;

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(85);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(40)))

/***/ }),
/* 85 */
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(40)))

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(87);
__webpack_require__(42);
__webpack_require__(93);
__webpack_require__(97);
module.exports = __webpack_require__(4).Promise;

/***/ }),
/* 87 */
/***/ (function(module, exports) {



/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(25)
  , defined   = __webpack_require__(23);
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create         = __webpack_require__(91)
  , descriptor     = __webpack_require__(21)
  , setToStringTag = __webpack_require__(30)
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(7)(IteratorPrototype, __webpack_require__(0)('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = __webpack_require__(8)
  , dPs         = __webpack_require__(36)
  , enumBugKeys = __webpack_require__(34)
  , IE_PROTO    = __webpack_require__(26)('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(20)('iframe')
    , i      = enumBugKeys.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(45).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty;
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = __webpack_require__(15)
  , toObject    = __webpack_require__(27)
  , IE_PROTO    = __webpack_require__(26)('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(94);
var global        = __webpack_require__(1)
  , hide          = __webpack_require__(7)
  , Iterators     = __webpack_require__(13)
  , TO_STRING_TAG = __webpack_require__(0)('toStringTag');

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype;
  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(95)
  , step             = __webpack_require__(96)
  , Iterators        = __webpack_require__(13)
  , toIObject        = __webpack_require__(16);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(43)(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

/***/ }),
/* 95 */
/***/ (function(module, exports) {

module.exports = function(){ /* empty */ };

/***/ }),
/* 96 */
/***/ (function(module, exports) {

module.exports = function(done, value){
  return {value: value, done: !!done};
};

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY            = __webpack_require__(44)
  , global             = __webpack_require__(1)
  , ctx                = __webpack_require__(11)
  , classof            = __webpack_require__(46)
  , $export            = __webpack_require__(6)
  , isObject           = __webpack_require__(14)
  , aFunction          = __webpack_require__(18)
  , anInstance         = __webpack_require__(98)
  , forOf              = __webpack_require__(99)
  , speciesConstructor = __webpack_require__(100)
  , task               = __webpack_require__(50).set
  , microtask          = __webpack_require__(102)()
  , PROMISE            = 'Promise'
  , TypeError          = global.TypeError
  , process            = global.process
  , $Promise           = global[PROMISE]
  , process            = global.process
  , isNode             = classof(process) == 'process'
  , empty              = function(){ /* empty */ }
  , Internal, GenericPromiseCapability, Wrapper;

var USE_NATIVE = !!function(){
  try {
    // correct subclassing with @@species support
    var promise     = $Promise.resolve(1)
      , FakePromise = (promise.constructor = {})[__webpack_require__(0)('species')] = function(exec){ exec(empty, empty); };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch(e){ /* empty */ }
}();

// helpers
var sameConstructor = function(a, b){
  // with library wrapper special case
  return a === b || a === $Promise && b === Wrapper;
};
var isThenable = function(it){
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var newPromiseCapability = function(C){
  return sameConstructor($Promise, C)
    ? new PromiseCapability(C)
    : new GenericPromiseCapability(C);
};
var PromiseCapability = GenericPromiseCapability = function(C){
  var resolve, reject;
  this.promise = new C(function($$resolve, $$reject){
    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject  = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject  = aFunction(reject);
};
var perform = function(exec){
  try {
    exec();
  } catch(e){
    return {error: e};
  }
};
var notify = function(promise, isReject){
  if(promise._n)return;
  promise._n = true;
  var chain = promise._c;
  microtask(function(){
    var value = promise._v
      , ok    = promise._s == 1
      , i     = 0;
    var run = function(reaction){
      var handler = ok ? reaction.ok : reaction.fail
        , resolve = reaction.resolve
        , reject  = reaction.reject
        , domain  = reaction.domain
        , result, then;
      try {
        if(handler){
          if(!ok){
            if(promise._h == 2)onHandleUnhandled(promise);
            promise._h = 1;
          }
          if(handler === true)result = value;
          else {
            if(domain)domain.enter();
            result = handler(value);
            if(domain)domain.exit();
          }
          if(result === reaction.promise){
            reject(TypeError('Promise-chain cycle'));
          } else if(then = isThenable(result)){
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch(e){
        reject(e);
      }
    };
    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if(isReject && !promise._h)onUnhandled(promise);
  });
};
var onUnhandled = function(promise){
  task.call(global, function(){
    var value = promise._v
      , abrupt, handler, console;
    if(isUnhandled(promise)){
      abrupt = perform(function(){
        if(isNode){
          process.emit('unhandledRejection', value, promise);
        } else if(handler = global.onunhandledrejection){
          handler({promise: promise, reason: value});
        } else if((console = global.console) && console.error){
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if(abrupt)throw abrupt.error;
  });
};
var isUnhandled = function(promise){
  if(promise._h == 1)return false;
  var chain = promise._a || promise._c
    , i     = 0
    , reaction;
  while(chain.length > i){
    reaction = chain[i++];
    if(reaction.fail || !isUnhandled(reaction.promise))return false;
  } return true;
};
var onHandleUnhandled = function(promise){
  task.call(global, function(){
    var handler;
    if(isNode){
      process.emit('rejectionHandled', promise);
    } else if(handler = global.onrejectionhandled){
      handler({promise: promise, reason: promise._v});
    }
  });
};
var $reject = function(value){
  var promise = this;
  if(promise._d)return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if(!promise._a)promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function(value){
  var promise = this
    , then;
  if(promise._d)return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if(promise === value)throw TypeError("Promise can't be resolved itself");
    if(then = isThenable(value)){
      microtask(function(){
        var wrapper = {_w: promise, _d: false}; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch(e){
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch(e){
    $reject.call({_w: promise, _d: false}, e); // wrap
  }
};

// constructor polyfill
if(!USE_NATIVE){
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor){
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch(err){
      $reject.call(this, err);
    }
  };
  Internal = function Promise(executor){
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(103)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected){
      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail   = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if(this._a)this._a.push(reaction);
      if(this._s)notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function(onRejected){
      return this.then(undefined, onRejected);
    }
  });
  PromiseCapability = function(){
    var promise  = new Internal;
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject  = ctx($reject, promise, 1);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
__webpack_require__(30)($Promise, PROMISE);
__webpack_require__(104)(PROMISE);
Wrapper = __webpack_require__(4)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r){
    var capability = newPromiseCapability(this)
      , $$reject   = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x){
    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
    var capability = newPromiseCapability(this)
      , $$resolve  = capability.resolve;
    $$resolve(x);
    return capability.promise;
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(51)(function(iter){
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , resolve    = capability.resolve
      , reject     = capability.reject;
    var abrupt = perform(function(){
      var values    = []
        , index     = 0
        , remaining = 1;
      forOf(iterable, false, function(promise){
        var $index        = index++
          , alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function(value){
          if(alreadyCalled)return;
          alreadyCalled  = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , reject     = capability.reject;
    var abrupt = perform(function(){
      forOf(iterable, false, function(promise){
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  }
});

/***/ }),
/* 98 */
/***/ (function(module, exports) {

module.exports = function(it, Constructor, name, forbiddenField){
  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

var ctx         = __webpack_require__(11)
  , call        = __webpack_require__(47)
  , isArrayIter = __webpack_require__(48)
  , anObject    = __webpack_require__(8)
  , toLength    = __webpack_require__(24)
  , getIterFn   = __webpack_require__(49)
  , BREAK       = {}
  , RETURN      = {};
var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
    , f      = ctx(fn, that, entries ? 2 : 1)
    , index  = 0
    , length, step, iterator, result;
  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if(result === BREAK || result === RETURN)return result;
  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
    result = call(iterator, f, step.value, entries);
    if(result === BREAK || result === RETURN)return result;
  }
};
exports.BREAK  = BREAK;
exports.RETURN = RETURN;

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject  = __webpack_require__(8)
  , aFunction = __webpack_require__(18)
  , SPECIES   = __webpack_require__(0)('species');
module.exports = function(O, D){
  var C = anObject(O).constructor, S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};

/***/ }),
/* 101 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function(fn, args, that){
  var un = that === undefined;
  switch(args.length){
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return              fn.apply(that, args);
};

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(1)
  , macrotask = __webpack_require__(50).set
  , Observer  = global.MutationObserver || global.WebKitMutationObserver
  , process   = global.process
  , Promise   = global.Promise
  , isNode    = __webpack_require__(17)(process) == 'process';

module.exports = function(){
  var head, last, notify;

  var flush = function(){
    var parent, fn;
    if(isNode && (parent = process.domain))parent.exit();
    while(head){
      fn   = head.fn;
      head = head.next;
      try {
        fn();
      } catch(e){
        if(head)notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if(parent)parent.enter();
  };

  // Node.js
  if(isNode){
    notify = function(){
      process.nextTick(flush);
    };
  // browsers with MutationObserver
  } else if(Observer){
    var toggle = true
      , node   = document.createTextNode('');
    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
    notify = function(){
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if(Promise && Promise.resolve){
    var promise = Promise.resolve();
    notify = function(){
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function(){
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function(fn){
    var task = {fn: fn, next: undefined};
    if(last)last.next = task;
    if(!head){
      head = task;
      notify();
    } last = task;
  };
};

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(7);
module.exports = function(target, src, safe){
  for(var key in src){
    if(safe && target[key])target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global      = __webpack_require__(1)
  , core        = __webpack_require__(4)
  , dP          = __webpack_require__(12)
  , DESCRIPTORS = __webpack_require__(9)
  , SPECIES     = __webpack_require__(0)('species');

module.exports = function(KEY){
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
    configurable: true,
    get: function(){ return this; }
  });
};

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "md-ripple",
    on: {
      "&touchstart": function($event) {
        $event.stopPropagation();
        _vm.startRipple($event)
      },
      "&mousedown": function($event) {
        $event.stopPropagation();
        _vm.startRipple($event)
      }
    }
  }, [(!_vm.mdDisabled) ? _c('transition', {
    attrs: {
      "name": "md-ripple",
      "appear": ""
    },
    on: {
      "after-enter": _vm.clearWave
    }
  }, [(_vm.animating) ? _c('span', {
    ref: "rippleWave",
    staticClass: "md-ripple-wave",
    class: _vm.rippleClass,
    style: (_vm.waveStyles)
  }) : _vm._e()]) : _vm._e(), _vm._v(" "), _vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0ce4ed8a", module.exports)
  }
}

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(107),
  /* template */
  __webpack_require__(108),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/marcosmoura/Projects/github/vue-material-experiments/src/components/MdButton/MdButtonContent.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] MdButtonContent.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-07b687a4", Component.options)
  } else {
    hotAPI.reload("data-v-07b687a4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


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
//
//

exports.default = {
  name: 'MdButtonContent',
  props: {
    mdRipple: Boolean,
    disabled: Boolean
  }
};

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('md-ripple', {
    attrs: {
      "md-disabled": !_vm.mdRipple || _vm.disabled
    }
  }, [_c('span', {
    staticClass: "md-button-content"
  }, [_vm._t("default")], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-07b687a4", module.exports)
  }
}

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MdContent = __webpack_require__(110);

var _MdContent2 = _interopRequireDefault(_MdContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (Vue) {
  Vue.component(_MdContent2.default.name, _MdContent2.default);
};

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(111)
}
var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(113),
  /* template */
  __webpack_require__(114),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/marcosmoura/Projects/github/vue-material-experiments/src/components/MdContent/MdContent.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] MdContent.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-00a0303e", Component.options)
  } else {
    hotAPI.reload("data-v-00a0303e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(112);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("c9fb69aa", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-00a0303e\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js?outputStyle=compressed!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./MdContent.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-00a0303e\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js?outputStyle=compressed!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./MdContent.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, "\n.md-content{transition:0.3s cubic-bezier(0.4, 0, 0.2, 1)\n}\n", ""]);

// exports


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MdComponent = __webpack_require__(10);

var _MdComponent2 = _interopRequireDefault(_MdComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _MdComponent2.default({
  name: 'MdContent'
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
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "md-content",
    class: [_vm.$mdActiveTheme]
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-00a0303e", module.exports)
  }
}

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(116);

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(117);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("bb6568cc", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./elevation.scss", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./elevation.scss");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, "/**\n * The default transition, used when the element is visible\n * since the beginning of the animation\n * ---\n * @access private\n * @type transition\n * @group transition\n */\n/**\n * The enter transition, used when the element is not visible on the screen\n * since the beginning of the animation and become visible\n * ---\n * @access private\n * @type transition\n * @group transition\n */\n/**\n * The leave transition, used when the element is visible on the screen\n * since the beginning of the animation and is removed\n * ---\n * @access private\n * @type transition\n * @group transition\n */\n/**\n * The stand transition, used when the element is going to accelerate,\n * like movements from bottom to top\n * ---\n * @access private\n * @type transition\n * @group transition\n */\n/**\n * The out transition, used when the element is going to deaccelerate,\n * like movements from top to bottom\n * ---\n * @access private\n * @type transition\n * @group transition\n */\n/**\n * The elevation transition duration\n * ---\n * @access private\n * @type transition\n * @group transition\n */\n/**\n * The elevation transition duration\n * ---\n * @access private\n * @type transition\n * @group transition\n */\n.md-elevation-0 {\n  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.2), 0 0 0 0 rgba(0, 0, 0, 0.14), 0 0 0 0 rgba(0, 0, 0, 0.12); }\n\n.md-elevation-1 {\n  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12); }\n\n.md-elevation-2 {\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12); }\n\n.md-elevation-3 {\n  box-shadow: 0 3px 3px -2px rgba(0, 0, 0, 0.2), 0 3px 4px 0 rgba(0, 0, 0, 0.14), 0 1px 8px 0 rgba(0, 0, 0, 0.12); }\n\n.md-elevation-4 {\n  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12); }\n\n.md-elevation-5 {\n  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 5px 8px 0 rgba(0, 0, 0, 0.14), 0 1px 14px 0 rgba(0, 0, 0, 0.12); }\n\n.md-elevation-6 {\n  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12); }\n\n.md-elevation-7 {\n  box-shadow: 0 4px 5px -2px rgba(0, 0, 0, 0.2), 0 7px 10px 1px rgba(0, 0, 0, 0.14), 0 2px 16px 1px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-8 {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-9 {\n  box-shadow: 0 5px 6px -3px rgba(0, 0, 0, 0.2), 0 9px 12px 1px rgba(0, 0, 0, 0.14), 0 3px 16px 2px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-10 {\n  box-shadow: 0 6px 6px -3px rgba(0, 0, 0, 0.2), 0 10px 14px 1px rgba(0, 0, 0, 0.14), 0 4px 18px 3px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-11 {\n  box-shadow: 0 6px 7px -4px rgba(0, 0, 0, 0.2), 0 11px 15px 1px rgba(0, 0, 0, 0.14), 0 4px 20px 3px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-12 {\n  box-shadow: 0 7px 8px -4px rgba(0, 0, 0, 0.2), 0 12px 17px 2px rgba(0, 0, 0, 0.14), 0 5px 22px 4px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-13 {\n  box-shadow: 0 7px 8px -4px rgba(0, 0, 0, 0.2), 0 13px 19px 2px rgba(0, 0, 0, 0.14), 0 5px 24px 4px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-14 {\n  box-shadow: 0 7px 9px -4px rgba(0, 0, 0, 0.2), 0 14px 21px 2px rgba(0, 0, 0, 0.14), 0 5px 26px 4px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-15 {\n  box-shadow: 0 8px 9px -5px rgba(0, 0, 0, 0.2), 0 15px 22px 2px rgba(0, 0, 0, 0.14), 0 6px 28px 5px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-16 {\n  box-shadow: 0 8px 10px -5px rgba(0, 0, 0, 0.2), 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-17 {\n  box-shadow: 0 8px 11px -5px rgba(0, 0, 0, 0.2), 0 17px 26px 2px rgba(0, 0, 0, 0.14), 0 6px 32px 5px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-18 {\n  box-shadow: 0 9px 11px -5px rgba(0, 0, 0, 0.2), 0 18px 28px 2px rgba(0, 0, 0, 0.14), 0 7px 34px 6px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-19 {\n  box-shadow: 0 9px 12px -6px rgba(0, 0, 0, 0.2), 0 19px 29px 2px rgba(0, 0, 0, 0.14), 0 7px 36px 6px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-20 {\n  box-shadow: 0 10px 13px -6px rgba(0, 0, 0, 0.2), 0 20px 31px 3px rgba(0, 0, 0, 0.14), 0 8px 38px 7px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-21 {\n  box-shadow: 0 10px 13px -6px rgba(0, 0, 0, 0.2), 0 21px 33px 3px rgba(0, 0, 0, 0.14), 0 8px 40px 7px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-22 {\n  box-shadow: 0 10px 14px -6px rgba(0, 0, 0, 0.2), 0 22px 35px 3px rgba(0, 0, 0, 0.14), 0 8px 42px 7px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-23 {\n  box-shadow: 0 11px 14px -7px rgba(0, 0, 0, 0.2), 0 23px 36px 3px rgba(0, 0, 0, 0.14), 0 9px 44px 8px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-24 {\n  box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12); }\n", ""]);

// exports


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MdIcon = __webpack_require__(119);

var _MdIcon2 = _interopRequireDefault(_MdIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (Vue) {
  Vue.component(_MdIcon2.default.name, _MdIcon2.default);
};

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(120)
}
var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(122),
  /* template */
  __webpack_require__(128),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/marcosmoura/Projects/github/vue-material-experiments/src/components/MdIcon/MdIcon.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] MdIcon.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8ce46dca", Component.options)
  } else {
    hotAPI.reload("data-v-8ce46dca", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(121);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("1b3fe1ff", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-8ce46dca\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js?outputStyle=compressed!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./MdIcon.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-8ce46dca\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js?outputStyle=compressed!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./MdIcon.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, "\n.md-icon{width:24px;min-width:24px;height:24px;font-size:24px !important;margin:auto;display:inline-flex;align-items:center;justify-content:center;vertical-align:middle\n}\n.md-icon.md-size-2x{width:48px;min-width:48px;height:48px;font-size:48px !important\n}\n.md-icon.md-size-3x{width:72px;min-width:72px;height:72px;font-size:72px !important\n}\n.md-icon.md-size-4x{width:96px;min-width:96px;height:96px;font-size:96px !important\n}\n.md-icon.md-size-5x{width:120px;min-width:120px;height:120px;font-size:120px !important\n}\n.md-icon-image svg{height:100%;flex:1;transition:fill 0.4s cubic-bezier(0.4, 0, 0.2, 1)\n}\n.md-icon{transition:color 0.4s cubic-bezier(0.4, 0, 0.2, 1);direction:ltr;font-family:\"Material Icons\";font-feature-settings:\"liga\";font-style:normal;letter-spacing:normal;line-height:1;text-rendering:optimizeLegibility;text-transform:none;word-wrap:normal;white-space:nowrap;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale\n}\n", ""]);

// exports


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MdComponent = __webpack_require__(10);

var _MdComponent2 = _interopRequireDefault(_MdComponent);

var _MdSvgLoader = __webpack_require__(123);

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
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(124)
}
var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(126),
  /* template */
  __webpack_require__(127),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/marcosmoura/Projects/github/vue-material-experiments/src/core/MdSvgLoader/MdSvgLoader.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] MdSvgLoader.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-003fa2b4", Component.options)
  } else {
    hotAPI.reload("data-v-003fa2b4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(125);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("4abf8ed6", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-003fa2b4\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js?outputStyle=compressed!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./MdSvgLoader.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-003fa2b4\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js?outputStyle=compressed!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./MdSvgLoader.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, "\n.md-svg-loader{display:block\n}\n.md-svg-loader svg{width:100%\n}\n", ""]);

// exports


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(41);

var _promise2 = _interopRequireDefault(_promise);

var _regenerator = __webpack_require__(28);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(29);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(value) {
        return _regenerator2.default.wrap(function _callee$(_context) {
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
        mdSVGStore[this.mdSrc] = new _promise2.default(function (resolve, reject) {
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
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('i', {
    staticClass: "md-svg-loader",
    domProps: {
      "innerHTML": _vm._s(_vm.html)
    }
  })
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-003fa2b4", module.exports)
  }
}

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.mdSrc) ? _c('md-svg-loader', {
    staticClass: "md-icon md-icon-image",
    class: [_vm.$mdActiveTheme],
    attrs: {
      "md-src": _vm.mdSrc
    },
    on: {
      "md-loaded": function($event) {
        _vm.$emit('md-loaded')
      }
    }
  }) : _c('i', {
    staticClass: "md-icon md-icon-font",
    class: [_vm.$mdActiveTheme]
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-8ce46dca", module.exports)
  }
}

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MdImage = __webpack_require__(130);

var _MdImage2 = _interopRequireDefault(_MdImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (Vue) {
  Vue.component(_MdImage2.default.name, _MdImage2.default);
};

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(131)
}
var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(133),
  /* template */
  __webpack_require__(138),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/marcosmoura/Projects/github/vue-material-experiments/src/components/MdImage/MdImage.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] MdImage.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-38959636", Component.options)
  } else {
    hotAPI.reload("data-v-38959636", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(132);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("4a051386", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-38959636\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js?outputStyle=compressed!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./MdImage.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-38959636\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js?outputStyle=compressed!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./MdImage.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, "\n.md-image{display:flex;justify-content:center;align-items:center\n}\n.md-image svg{flex:1\n}\n", ""]);

// exports


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(28);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _from = __webpack_require__(134);

var _from2 = _interopRequireDefault(_from);

var _asyncToGenerator2 = __webpack_require__(29);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _MdComponent = __webpack_require__(10);

var _MdComponent2 = _interopRequireDefault(_MdComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var registeredIcons = {};

exports.default = new _MdComponent2.default({
  name: 'MdImage',
  props: {
    mdSrc: String
  },
  data: function data() {
    return {
      svgContent: null
    };
  },
  watch: {
    src: function src() {
      this.svgContent = null;
      this.loadSVG();
    }
  },
  methods: {
    setSVGContent: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(value) {
        var _this = this;

        var dataset;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (this.textSlot) {
                  value = value.replace('{{textSlot}}', this.textSlot);
                }

                this.svgContent = value;

                _context.next = 4;
                return this.$nextTick();

              case 4:
                dataset = [].filter.call(this.$el.attributes, function (attribute) {
                  return (/^data-/.test(attribute.name)
                  );
                });


                dataset.forEach(function (data) {
                  var childrenArray = (0, _from2.default)(_this.$el.querySelectorAll('*'));

                  childrenArray.forEach(function (node) {
                    node.setAttribute(data.name.toLowerCase(), '');
                  });
                });

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function setSVGContent(_x) {
        return _ref.apply(this, arguments);
      }

      return setSVGContent;
    }(),
    loadSVG: function loadSVG() {
      if (!registeredIcons[this.mdSrc]) {
        var request = new window.XMLHttpRequest();
        var self = this;

        request.open('GET', this.mdSrc, true);

        request.onload = function () {
          if (this.status >= 200 && this.status < 400) {
            registeredIcons[self.mdSrc] = this.response;

            self.setSVGContent(this.response);
          } else {
            console.warn('The file ' + self.mdSrc + ' is not a valid SVG.');
          }
        };

        request.send();
      } else {
        this.setSVGContent(registeredIcons[this.mdSrc]);
      }
    }
  },
  mounted: function mounted() {
    this.loadSVG();
  }
});

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(135), __esModule: true };

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(42);
__webpack_require__(136);
module.exports = __webpack_require__(4).Array.from;

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx            = __webpack_require__(11)
  , $export        = __webpack_require__(6)
  , toObject       = __webpack_require__(27)
  , call           = __webpack_require__(47)
  , isArrayIter    = __webpack_require__(48)
  , toLength       = __webpack_require__(24)
  , createProperty = __webpack_require__(137)
  , getIterFn      = __webpack_require__(49);

$export($export.S + $export.F * !__webpack_require__(51)(function(iter){ Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
    var O       = toObject(arrayLike)
      , C       = typeof this == 'function' ? this : Array
      , aLen    = arguments.length
      , mapfn   = aLen > 1 ? arguments[1] : undefined
      , mapping = mapfn !== undefined
      , index   = 0
      , iterFn  = getIterFn(O)
      , length, result, step, iterator;
    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for(result = new C(length); length > index; index++){
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(12)
  , createDesc      = __webpack_require__(21);

module.exports = function(object, index, value){
  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "md-image",
    domProps: {
      "innerHTML": _vm._s(_vm.svgContent)
    }
  })
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-38959636", module.exports)
  }
}

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(140);

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(141);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("6542c956", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./layout.scss", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./layout.scss");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, "/**\n * The layout system breakpoints\n * ---\n * @access private\n * @type layout\n * @group layout\n */\n/**\n * The available gutter sizes\n * ---\n * @access private\n * @type layout\n * @group layout\n */\n/**\n * The layout system breakpoints\n * ---\n * @access private\n * @type layout\n * @group layout\n */\n/**\n * The available gutter sizes\n * ---\n * @access private\n * @type layout\n * @group layout\n */\n/**\n * Rows and Columns\n */\n[class*=\"md-layout\"] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  flex: 1; }\n  [class*=\"md-layout\"].md-centered {\n    width: 100%;\n    max-width: 1200px;\n    margin: 0 auto; }\n  [class*=\"md-layout\"].md-layout-row {\n    flex-direction: row; }\n  [class*=\"md-layout\"].md-layout-column {\n    flex-direction: column; }\n  [class*=\"md-layout\"].md-align-start-start {\n    justify-content: flex-start;\n    align-items: flex-start; }\n  [class*=\"md-layout\"].md-align-start-center {\n    justify-content: flex-start;\n    align-items: center; }\n  [class*=\"md-layout\"].md-align-start-end {\n    justify-content: flex-start;\n    align-items: flex-end; }\n  [class*=\"md-layout\"].md-align-center-start {\n    justify-content: center;\n    align-items: flex-start; }\n  [class*=\"md-layout\"].md-align-center-center {\n    justify-content: center;\n    align-items: center; }\n  [class*=\"md-layout\"].md-align-center-end {\n    justify-content: center;\n    align-items: flex-end; }\n  [class*=\"md-layout\"].md-align-end-start {\n    justify-content: flex-end;\n    align-items: flex-start; }\n  [class*=\"md-layout\"].md-align-end-center {\n    justify-content: flex-end;\n    align-items: center; }\n  [class*=\"md-layout\"].md-align-end-end {\n    justify-content: flex-end;\n    align-items: flex-end; }\n  [class*=\"md-layout\"] > .md-flex {\n    flex: 1 1; }\n  [class*=\"md-layout\"] > .md-flex-33 {\n    min-width: 33.33333%;\n    flex: 0 1 33.33333%; }\n  [class*=\"md-layout\"] > .md-flex-66 {\n    min-width: 33.33333%;\n    flex: 0 1 66.66666%; }\n  [class*=\"md-layout\"] > .md-flex-offset-33 {\n    margin-left: 33.33333%; }\n  [class*=\"md-layout\"] > .md-flex-offset-66 {\n    margin-left: 66.66666%; }\n  [class*=\"md-layout\"] > .md-flex-5 {\n    min-width: 5%;\n    flex: 0 1 5%; }\n  [class*=\"md-layout\"] > .md-flex-offset-5 {\n    margin-left: 5%; }\n  [class*=\"md-layout\"] > .md-flex-10 {\n    min-width: 10%;\n    flex: 0 1 10%; }\n  [class*=\"md-layout\"] > .md-flex-offset-10 {\n    margin-left: 10%; }\n  [class*=\"md-layout\"] > .md-flex-15 {\n    min-width: 15%;\n    flex: 0 1 15%; }\n  [class*=\"md-layout\"] > .md-flex-offset-15 {\n    margin-left: 15%; }\n  [class*=\"md-layout\"] > .md-flex-20 {\n    min-width: 20%;\n    flex: 0 1 20%; }\n  [class*=\"md-layout\"] > .md-flex-offset-20 {\n    margin-left: 20%; }\n  [class*=\"md-layout\"] > .md-flex-25 {\n    min-width: 25%;\n    flex: 0 1 25%; }\n  [class*=\"md-layout\"] > .md-flex-offset-25 {\n    margin-left: 25%; }\n  [class*=\"md-layout\"] > .md-flex-30 {\n    min-width: 30%;\n    flex: 0 1 30%; }\n  [class*=\"md-layout\"] > .md-flex-offset-30 {\n    margin-left: 30%; }\n  [class*=\"md-layout\"] > .md-flex-35 {\n    min-width: 35%;\n    flex: 0 1 35%; }\n  [class*=\"md-layout\"] > .md-flex-offset-35 {\n    margin-left: 35%; }\n  [class*=\"md-layout\"] > .md-flex-40 {\n    min-width: 40%;\n    flex: 0 1 40%; }\n  [class*=\"md-layout\"] > .md-flex-offset-40 {\n    margin-left: 40%; }\n  [class*=\"md-layout\"] > .md-flex-45 {\n    min-width: 45%;\n    flex: 0 1 45%; }\n  [class*=\"md-layout\"] > .md-flex-offset-45 {\n    margin-left: 45%; }\n  [class*=\"md-layout\"] > .md-flex-50 {\n    min-width: 50%;\n    flex: 0 1 50%; }\n  [class*=\"md-layout\"] > .md-flex-offset-50 {\n    margin-left: 50%; }\n  [class*=\"md-layout\"] > .md-flex-55 {\n    min-width: 55%;\n    flex: 0 1 55%; }\n  [class*=\"md-layout\"] > .md-flex-offset-55 {\n    margin-left: 55%; }\n  [class*=\"md-layout\"] > .md-flex-60 {\n    min-width: 60%;\n    flex: 0 1 60%; }\n  [class*=\"md-layout\"] > .md-flex-offset-60 {\n    margin-left: 60%; }\n  [class*=\"md-layout\"] > .md-flex-65 {\n    min-width: 65%;\n    flex: 0 1 65%; }\n  [class*=\"md-layout\"] > .md-flex-offset-65 {\n    margin-left: 65%; }\n  [class*=\"md-layout\"] > .md-flex-70 {\n    min-width: 70%;\n    flex: 0 1 70%; }\n  [class*=\"md-layout\"] > .md-flex-offset-70 {\n    margin-left: 70%; }\n  [class*=\"md-layout\"] > .md-flex-75 {\n    min-width: 75%;\n    flex: 0 1 75%; }\n  [class*=\"md-layout\"] > .md-flex-offset-75 {\n    margin-left: 75%; }\n  [class*=\"md-layout\"] > .md-flex-80 {\n    min-width: 80%;\n    flex: 0 1 80%; }\n  [class*=\"md-layout\"] > .md-flex-offset-80 {\n    margin-left: 80%; }\n  [class*=\"md-layout\"] > .md-flex-85 {\n    min-width: 85%;\n    flex: 0 1 85%; }\n  [class*=\"md-layout\"] > .md-flex-offset-85 {\n    margin-left: 85%; }\n  [class*=\"md-layout\"] > .md-flex-90 {\n    min-width: 90%;\n    flex: 0 1 90%; }\n  [class*=\"md-layout\"] > .md-flex-offset-90 {\n    margin-left: 90%; }\n  [class*=\"md-layout\"] > .md-flex-95 {\n    min-width: 95%;\n    flex: 0 1 95%; }\n  [class*=\"md-layout\"] > .md-flex-offset-95 {\n    margin-left: 95%; }\n  [class*=\"md-layout\"] > .md-flex-100 {\n    min-width: 100%;\n    flex: 0 1 100%; }\n  [class*=\"md-layout\"] > .md-flex-offset-100 {\n    margin-left: 100%; }\n  @media (min-width: 1904px) {\n    [class*=\"md-layout\"].md-layout-row-xlarge {\n      flex-direction: row; }\n    [class*=\"md-layout\"].md-layout-column-xlarge {\n      flex-direction: column; }\n    [class*=\"md-layout\"] > .md-flex-xlarge {\n      flex: 1 1; }\n    [class*=\"md-layout\"] > .md-flex-xlarge-33 {\n      min-width: 33.33333%;\n      flex: 0 1 33.33333%; }\n    [class*=\"md-layout\"] > .md-flex-xlarge-66 {\n      min-width: 33.33333%;\n      flex: 0 1 66.66666%; }\n    [class*=\"md-layout\"] > .md-flex-offset-xlarge-33 {\n      margin-left: 33.33333%; }\n    [class*=\"md-layout\"] > .md-flex-offset-xlarge-66 {\n      margin-left: 66.66666%; }\n    [class*=\"md-layout\"] > .md-flex-xlarge-5 {\n      min-width: 5%;\n      flex: 0 1 5%; }\n    [class*=\"md-layout\"] > .md-flex-offset-xlarge-5 {\n      margin-left: 5%; }\n    [class*=\"md-layout\"] > .md-flex-xlarge-10 {\n      min-width: 10%;\n      flex: 0 1 10%; }\n    [class*=\"md-layout\"] > .md-flex-offset-xlarge-10 {\n      margin-left: 10%; }\n    [class*=\"md-layout\"] > .md-flex-xlarge-15 {\n      min-width: 15%;\n      flex: 0 1 15%; }\n    [class*=\"md-layout\"] > .md-flex-offset-xlarge-15 {\n      margin-left: 15%; }\n    [class*=\"md-layout\"] > .md-flex-xlarge-20 {\n      min-width: 20%;\n      flex: 0 1 20%; }\n    [class*=\"md-layout\"] > .md-flex-offset-xlarge-20 {\n      margin-left: 20%; }\n    [class*=\"md-layout\"] > .md-flex-xlarge-25 {\n      min-width: 25%;\n      flex: 0 1 25%; }\n    [class*=\"md-layout\"] > .md-flex-offset-xlarge-25 {\n      margin-left: 25%; }\n    [class*=\"md-layout\"] > .md-flex-xlarge-30 {\n      min-width: 30%;\n      flex: 0 1 30%; }\n    [class*=\"md-layout\"] > .md-flex-offset-xlarge-30 {\n      margin-left: 30%; }\n    [class*=\"md-layout\"] > .md-flex-xlarge-35 {\n      min-width: 35%;\n      flex: 0 1 35%; }\n    [class*=\"md-layout\"] > .md-flex-offset-xlarge-35 {\n      margin-left: 35%; }\n    [class*=\"md-layout\"] > .md-flex-xlarge-40 {\n      min-width: 40%;\n      flex: 0 1 40%; }\n    [class*=\"md-layout\"] > .md-flex-offset-xlarge-40 {\n      margin-left: 40%; }\n    [class*=\"md-layout\"] > .md-flex-xlarge-45 {\n      min-width: 45%;\n      flex: 0 1 45%; }\n    [class*=\"md-layout\"] > .md-flex-offset-xlarge-45 {\n      margin-left: 45%; }\n    [class*=\"md-layout\"] > .md-flex-xlarge-50 {\n      min-width: 50%;\n      flex: 0 1 50%; }\n    [class*=\"md-layout\"] > .md-flex-offset-xlarge-50 {\n      margin-left: 50%; }\n    [class*=\"md-layout\"] > .md-flex-xlarge-55 {\n      min-width: 55%;\n      flex: 0 1 55%; }\n    [class*=\"md-layout\"] > .md-flex-offset-xlarge-55 {\n      margin-left: 55%; }\n    [class*=\"md-layout\"] > .md-flex-xlarge-60 {\n      min-width: 60%;\n      flex: 0 1 60%; }\n    [class*=\"md-layout\"] > .md-flex-offset-xlarge-60 {\n      margin-left: 60%; }\n    [class*=\"md-layout\"] > .md-flex-xlarge-65 {\n      min-width: 65%;\n      flex: 0 1 65%; }\n    [class*=\"md-layout\"] > .md-flex-offset-xlarge-65 {\n      margin-left: 65%; }\n    [class*=\"md-layout\"] > .md-flex-xlarge-70 {\n      min-width: 70%;\n      flex: 0 1 70%; }\n    [class*=\"md-layout\"] > .md-flex-offset-xlarge-70 {\n      margin-left: 70%; }\n    [class*=\"md-layout\"] > .md-flex-xlarge-75 {\n      min-width: 75%;\n      flex: 0 1 75%; }\n    [class*=\"md-layout\"] > .md-flex-offset-xlarge-75 {\n      margin-left: 75%; }\n    [class*=\"md-layout\"] > .md-flex-xlarge-80 {\n      min-width: 80%;\n      flex: 0 1 80%; }\n    [class*=\"md-layout\"] > .md-flex-offset-xlarge-80 {\n      margin-left: 80%; }\n    [class*=\"md-layout\"] > .md-flex-xlarge-85 {\n      min-width: 85%;\n      flex: 0 1 85%; }\n    [class*=\"md-layout\"] > .md-flex-offset-xlarge-85 {\n      margin-left: 85%; }\n    [class*=\"md-layout\"] > .md-flex-xlarge-90 {\n      min-width: 90%;\n      flex: 0 1 90%; }\n    [class*=\"md-layout\"] > .md-flex-offset-xlarge-90 {\n      margin-left: 90%; }\n    [class*=\"md-layout\"] > .md-flex-xlarge-95 {\n      min-width: 95%;\n      flex: 0 1 95%; }\n    [class*=\"md-layout\"] > .md-flex-offset-xlarge-95 {\n      margin-left: 95%; }\n    [class*=\"md-layout\"] > .md-flex-xlarge-100 {\n      min-width: 100%;\n      flex: 0 1 100%; }\n    [class*=\"md-layout\"] > .md-flex-offset-xlarge-100 {\n      margin-left: 100%; }\n    [class*=\"md-layout\"].md-align-xlarge-start-start {\n      justify-content: flex-start;\n      align-items: flex-start; }\n    [class*=\"md-layout\"].md-align-xlarge-start-center {\n      justify-content: flex-start;\n      align-items: center; }\n    [class*=\"md-layout\"].md-align-xlarge-start-end {\n      justify-content: flex-start;\n      align-items: flex-end; }\n    [class*=\"md-layout\"].md-align-xlarge-center-start {\n      justify-content: center;\n      align-items: flex-start; }\n    [class*=\"md-layout\"].md-align-xlarge-center-center {\n      justify-content: center;\n      align-items: center; }\n    [class*=\"md-layout\"].md-align-xlarge-center-end {\n      justify-content: center;\n      align-items: flex-end; }\n    [class*=\"md-layout\"].md-align-xlarge-end-start {\n      justify-content: flex-end;\n      align-items: flex-start; }\n    [class*=\"md-layout\"].md-align-xlarge-end-center {\n      justify-content: flex-end;\n      align-items: center; }\n    [class*=\"md-layout\"].md-align-xlarge-end-end {\n      justify-content: flex-end;\n      align-items: flex-end; } }\n  @media (max-width: 1903px) {\n    [class*=\"md-layout\"].md-layout-row-large {\n      flex-direction: row; }\n    [class*=\"md-layout\"].md-layout-column-large {\n      flex-direction: column; }\n    [class*=\"md-layout\"] > .md-flex-large {\n      flex: 1 1; }\n    [class*=\"md-layout\"] > .md-flex-large-33 {\n      min-width: 33.33333%;\n      flex: 0 1 33.33333%; }\n    [class*=\"md-layout\"] > .md-flex-large-66 {\n      min-width: 33.33333%;\n      flex: 0 1 66.66666%; }\n    [class*=\"md-layout\"] > .md-flex-offset-large-33 {\n      margin-left: 33.33333%; }\n    [class*=\"md-layout\"] > .md-flex-offset-large-66 {\n      margin-left: 66.66666%; }\n    [class*=\"md-layout\"] > .md-flex-large-5 {\n      min-width: 5%;\n      flex: 0 1 5%; }\n    [class*=\"md-layout\"] > .md-flex-offset-large-5 {\n      margin-left: 5%; }\n    [class*=\"md-layout\"] > .md-flex-large-10 {\n      min-width: 10%;\n      flex: 0 1 10%; }\n    [class*=\"md-layout\"] > .md-flex-offset-large-10 {\n      margin-left: 10%; }\n    [class*=\"md-layout\"] > .md-flex-large-15 {\n      min-width: 15%;\n      flex: 0 1 15%; }\n    [class*=\"md-layout\"] > .md-flex-offset-large-15 {\n      margin-left: 15%; }\n    [class*=\"md-layout\"] > .md-flex-large-20 {\n      min-width: 20%;\n      flex: 0 1 20%; }\n    [class*=\"md-layout\"] > .md-flex-offset-large-20 {\n      margin-left: 20%; }\n    [class*=\"md-layout\"] > .md-flex-large-25 {\n      min-width: 25%;\n      flex: 0 1 25%; }\n    [class*=\"md-layout\"] > .md-flex-offset-large-25 {\n      margin-left: 25%; }\n    [class*=\"md-layout\"] > .md-flex-large-30 {\n      min-width: 30%;\n      flex: 0 1 30%; }\n    [class*=\"md-layout\"] > .md-flex-offset-large-30 {\n      margin-left: 30%; }\n    [class*=\"md-layout\"] > .md-flex-large-35 {\n      min-width: 35%;\n      flex: 0 1 35%; }\n    [class*=\"md-layout\"] > .md-flex-offset-large-35 {\n      margin-left: 35%; }\n    [class*=\"md-layout\"] > .md-flex-large-40 {\n      min-width: 40%;\n      flex: 0 1 40%; }\n    [class*=\"md-layout\"] > .md-flex-offset-large-40 {\n      margin-left: 40%; }\n    [class*=\"md-layout\"] > .md-flex-large-45 {\n      min-width: 45%;\n      flex: 0 1 45%; }\n    [class*=\"md-layout\"] > .md-flex-offset-large-45 {\n      margin-left: 45%; }\n    [class*=\"md-layout\"] > .md-flex-large-50 {\n      min-width: 50%;\n      flex: 0 1 50%; }\n    [class*=\"md-layout\"] > .md-flex-offset-large-50 {\n      margin-left: 50%; }\n    [class*=\"md-layout\"] > .md-flex-large-55 {\n      min-width: 55%;\n      flex: 0 1 55%; }\n    [class*=\"md-layout\"] > .md-flex-offset-large-55 {\n      margin-left: 55%; }\n    [class*=\"md-layout\"] > .md-flex-large-60 {\n      min-width: 60%;\n      flex: 0 1 60%; }\n    [class*=\"md-layout\"] > .md-flex-offset-large-60 {\n      margin-left: 60%; }\n    [class*=\"md-layout\"] > .md-flex-large-65 {\n      min-width: 65%;\n      flex: 0 1 65%; }\n    [class*=\"md-layout\"] > .md-flex-offset-large-65 {\n      margin-left: 65%; }\n    [class*=\"md-layout\"] > .md-flex-large-70 {\n      min-width: 70%;\n      flex: 0 1 70%; }\n    [class*=\"md-layout\"] > .md-flex-offset-large-70 {\n      margin-left: 70%; }\n    [class*=\"md-layout\"] > .md-flex-large-75 {\n      min-width: 75%;\n      flex: 0 1 75%; }\n    [class*=\"md-layout\"] > .md-flex-offset-large-75 {\n      margin-left: 75%; }\n    [class*=\"md-layout\"] > .md-flex-large-80 {\n      min-width: 80%;\n      flex: 0 1 80%; }\n    [class*=\"md-layout\"] > .md-flex-offset-large-80 {\n      margin-left: 80%; }\n    [class*=\"md-layout\"] > .md-flex-large-85 {\n      min-width: 85%;\n      flex: 0 1 85%; }\n    [class*=\"md-layout\"] > .md-flex-offset-large-85 {\n      margin-left: 85%; }\n    [class*=\"md-layout\"] > .md-flex-large-90 {\n      min-width: 90%;\n      flex: 0 1 90%; }\n    [class*=\"md-layout\"] > .md-flex-offset-large-90 {\n      margin-left: 90%; }\n    [class*=\"md-layout\"] > .md-flex-large-95 {\n      min-width: 95%;\n      flex: 0 1 95%; }\n    [class*=\"md-layout\"] > .md-flex-offset-large-95 {\n      margin-left: 95%; }\n    [class*=\"md-layout\"] > .md-flex-large-100 {\n      min-width: 100%;\n      flex: 0 1 100%; }\n    [class*=\"md-layout\"] > .md-flex-offset-large-100 {\n      margin-left: 100%; }\n    [class*=\"md-layout\"].md-align-large-start-start {\n      justify-content: flex-start;\n      align-items: flex-start; }\n    [class*=\"md-layout\"].md-align-large-start-center {\n      justify-content: flex-start;\n      align-items: center; }\n    [class*=\"md-layout\"].md-align-large-start-end {\n      justify-content: flex-start;\n      align-items: flex-end; }\n    [class*=\"md-layout\"].md-align-large-center-start {\n      justify-content: center;\n      align-items: flex-start; }\n    [class*=\"md-layout\"].md-align-large-center-center {\n      justify-content: center;\n      align-items: center; }\n    [class*=\"md-layout\"].md-align-large-center-end {\n      justify-content: center;\n      align-items: flex-end; }\n    [class*=\"md-layout\"].md-align-large-end-start {\n      justify-content: flex-end;\n      align-items: flex-start; }\n    [class*=\"md-layout\"].md-align-large-end-center {\n      justify-content: flex-end;\n      align-items: center; }\n    [class*=\"md-layout\"].md-align-large-end-end {\n      justify-content: flex-end;\n      align-items: flex-end; } }\n  @media (max-width: 1264px) {\n    [class*=\"md-layout\"].md-layout-row-medium {\n      flex-direction: row; }\n    [class*=\"md-layout\"].md-layout-column-medium {\n      flex-direction: column; }\n    [class*=\"md-layout\"] > .md-flex-medium {\n      flex: 1 1; }\n    [class*=\"md-layout\"] > .md-flex-medium-33 {\n      min-width: 33.33333%;\n      flex: 0 1 33.33333%; }\n    [class*=\"md-layout\"] > .md-flex-medium-66 {\n      min-width: 33.33333%;\n      flex: 0 1 66.66666%; }\n    [class*=\"md-layout\"] > .md-flex-offset-medium-33 {\n      margin-left: 33.33333%; }\n    [class*=\"md-layout\"] > .md-flex-offset-medium-66 {\n      margin-left: 66.66666%; }\n    [class*=\"md-layout\"] > .md-flex-medium-5 {\n      min-width: 5%;\n      flex: 0 1 5%; }\n    [class*=\"md-layout\"] > .md-flex-offset-medium-5 {\n      margin-left: 5%; }\n    [class*=\"md-layout\"] > .md-flex-medium-10 {\n      min-width: 10%;\n      flex: 0 1 10%; }\n    [class*=\"md-layout\"] > .md-flex-offset-medium-10 {\n      margin-left: 10%; }\n    [class*=\"md-layout\"] > .md-flex-medium-15 {\n      min-width: 15%;\n      flex: 0 1 15%; }\n    [class*=\"md-layout\"] > .md-flex-offset-medium-15 {\n      margin-left: 15%; }\n    [class*=\"md-layout\"] > .md-flex-medium-20 {\n      min-width: 20%;\n      flex: 0 1 20%; }\n    [class*=\"md-layout\"] > .md-flex-offset-medium-20 {\n      margin-left: 20%; }\n    [class*=\"md-layout\"] > .md-flex-medium-25 {\n      min-width: 25%;\n      flex: 0 1 25%; }\n    [class*=\"md-layout\"] > .md-flex-offset-medium-25 {\n      margin-left: 25%; }\n    [class*=\"md-layout\"] > .md-flex-medium-30 {\n      min-width: 30%;\n      flex: 0 1 30%; }\n    [class*=\"md-layout\"] > .md-flex-offset-medium-30 {\n      margin-left: 30%; }\n    [class*=\"md-layout\"] > .md-flex-medium-35 {\n      min-width: 35%;\n      flex: 0 1 35%; }\n    [class*=\"md-layout\"] > .md-flex-offset-medium-35 {\n      margin-left: 35%; }\n    [class*=\"md-layout\"] > .md-flex-medium-40 {\n      min-width: 40%;\n      flex: 0 1 40%; }\n    [class*=\"md-layout\"] > .md-flex-offset-medium-40 {\n      margin-left: 40%; }\n    [class*=\"md-layout\"] > .md-flex-medium-45 {\n      min-width: 45%;\n      flex: 0 1 45%; }\n    [class*=\"md-layout\"] > .md-flex-offset-medium-45 {\n      margin-left: 45%; }\n    [class*=\"md-layout\"] > .md-flex-medium-50 {\n      min-width: 50%;\n      flex: 0 1 50%; }\n    [class*=\"md-layout\"] > .md-flex-offset-medium-50 {\n      margin-left: 50%; }\n    [class*=\"md-layout\"] > .md-flex-medium-55 {\n      min-width: 55%;\n      flex: 0 1 55%; }\n    [class*=\"md-layout\"] > .md-flex-offset-medium-55 {\n      margin-left: 55%; }\n    [class*=\"md-layout\"] > .md-flex-medium-60 {\n      min-width: 60%;\n      flex: 0 1 60%; }\n    [class*=\"md-layout\"] > .md-flex-offset-medium-60 {\n      margin-left: 60%; }\n    [class*=\"md-layout\"] > .md-flex-medium-65 {\n      min-width: 65%;\n      flex: 0 1 65%; }\n    [class*=\"md-layout\"] > .md-flex-offset-medium-65 {\n      margin-left: 65%; }\n    [class*=\"md-layout\"] > .md-flex-medium-70 {\n      min-width: 70%;\n      flex: 0 1 70%; }\n    [class*=\"md-layout\"] > .md-flex-offset-medium-70 {\n      margin-left: 70%; }\n    [class*=\"md-layout\"] > .md-flex-medium-75 {\n      min-width: 75%;\n      flex: 0 1 75%; }\n    [class*=\"md-layout\"] > .md-flex-offset-medium-75 {\n      margin-left: 75%; }\n    [class*=\"md-layout\"] > .md-flex-medium-80 {\n      min-width: 80%;\n      flex: 0 1 80%; }\n    [class*=\"md-layout\"] > .md-flex-offset-medium-80 {\n      margin-left: 80%; }\n    [class*=\"md-layout\"] > .md-flex-medium-85 {\n      min-width: 85%;\n      flex: 0 1 85%; }\n    [class*=\"md-layout\"] > .md-flex-offset-medium-85 {\n      margin-left: 85%; }\n    [class*=\"md-layout\"] > .md-flex-medium-90 {\n      min-width: 90%;\n      flex: 0 1 90%; }\n    [class*=\"md-layout\"] > .md-flex-offset-medium-90 {\n      margin-left: 90%; }\n    [class*=\"md-layout\"] > .md-flex-medium-95 {\n      min-width: 95%;\n      flex: 0 1 95%; }\n    [class*=\"md-layout\"] > .md-flex-offset-medium-95 {\n      margin-left: 95%; }\n    [class*=\"md-layout\"] > .md-flex-medium-100 {\n      min-width: 100%;\n      flex: 0 1 100%; }\n    [class*=\"md-layout\"] > .md-flex-offset-medium-100 {\n      margin-left: 100%; }\n    [class*=\"md-layout\"].md-align-medium-start-start {\n      justify-content: flex-start;\n      align-items: flex-start; }\n    [class*=\"md-layout\"].md-align-medium-start-center {\n      justify-content: flex-start;\n      align-items: center; }\n    [class*=\"md-layout\"].md-align-medium-start-end {\n      justify-content: flex-start;\n      align-items: flex-end; }\n    [class*=\"md-layout\"].md-align-medium-center-start {\n      justify-content: center;\n      align-items: flex-start; }\n    [class*=\"md-layout\"].md-align-medium-center-center {\n      justify-content: center;\n      align-items: center; }\n    [class*=\"md-layout\"].md-align-medium-center-end {\n      justify-content: center;\n      align-items: flex-end; }\n    [class*=\"md-layout\"].md-align-medium-end-start {\n      justify-content: flex-end;\n      align-items: flex-start; }\n    [class*=\"md-layout\"].md-align-medium-end-center {\n      justify-content: flex-end;\n      align-items: center; }\n    [class*=\"md-layout\"].md-align-medium-end-end {\n      justify-content: flex-end;\n      align-items: flex-end; } }\n  @media (max-width: 944px) {\n    [class*=\"md-layout\"].md-layout-row-small {\n      flex-direction: row; }\n    [class*=\"md-layout\"].md-layout-column-small {\n      flex-direction: column; }\n    [class*=\"md-layout\"] > .md-flex-small {\n      flex: 1 1; }\n    [class*=\"md-layout\"] > .md-flex-small-33 {\n      min-width: 33.33333%;\n      flex: 0 1 33.33333%; }\n    [class*=\"md-layout\"] > .md-flex-small-66 {\n      min-width: 33.33333%;\n      flex: 0 1 66.66666%; }\n    [class*=\"md-layout\"] > .md-flex-offset-small-33 {\n      margin-left: 33.33333%; }\n    [class*=\"md-layout\"] > .md-flex-offset-small-66 {\n      margin-left: 66.66666%; }\n    [class*=\"md-layout\"] > .md-flex-small-5 {\n      min-width: 5%;\n      flex: 0 1 5%; }\n    [class*=\"md-layout\"] > .md-flex-offset-small-5 {\n      margin-left: 5%; }\n    [class*=\"md-layout\"] > .md-flex-small-10 {\n      min-width: 10%;\n      flex: 0 1 10%; }\n    [class*=\"md-layout\"] > .md-flex-offset-small-10 {\n      margin-left: 10%; }\n    [class*=\"md-layout\"] > .md-flex-small-15 {\n      min-width: 15%;\n      flex: 0 1 15%; }\n    [class*=\"md-layout\"] > .md-flex-offset-small-15 {\n      margin-left: 15%; }\n    [class*=\"md-layout\"] > .md-flex-small-20 {\n      min-width: 20%;\n      flex: 0 1 20%; }\n    [class*=\"md-layout\"] > .md-flex-offset-small-20 {\n      margin-left: 20%; }\n    [class*=\"md-layout\"] > .md-flex-small-25 {\n      min-width: 25%;\n      flex: 0 1 25%; }\n    [class*=\"md-layout\"] > .md-flex-offset-small-25 {\n      margin-left: 25%; }\n    [class*=\"md-layout\"] > .md-flex-small-30 {\n      min-width: 30%;\n      flex: 0 1 30%; }\n    [class*=\"md-layout\"] > .md-flex-offset-small-30 {\n      margin-left: 30%; }\n    [class*=\"md-layout\"] > .md-flex-small-35 {\n      min-width: 35%;\n      flex: 0 1 35%; }\n    [class*=\"md-layout\"] > .md-flex-offset-small-35 {\n      margin-left: 35%; }\n    [class*=\"md-layout\"] > .md-flex-small-40 {\n      min-width: 40%;\n      flex: 0 1 40%; }\n    [class*=\"md-layout\"] > .md-flex-offset-small-40 {\n      margin-left: 40%; }\n    [class*=\"md-layout\"] > .md-flex-small-45 {\n      min-width: 45%;\n      flex: 0 1 45%; }\n    [class*=\"md-layout\"] > .md-flex-offset-small-45 {\n      margin-left: 45%; }\n    [class*=\"md-layout\"] > .md-flex-small-50 {\n      min-width: 50%;\n      flex: 0 1 50%; }\n    [class*=\"md-layout\"] > .md-flex-offset-small-50 {\n      margin-left: 50%; }\n    [class*=\"md-layout\"] > .md-flex-small-55 {\n      min-width: 55%;\n      flex: 0 1 55%; }\n    [class*=\"md-layout\"] > .md-flex-offset-small-55 {\n      margin-left: 55%; }\n    [class*=\"md-layout\"] > .md-flex-small-60 {\n      min-width: 60%;\n      flex: 0 1 60%; }\n    [class*=\"md-layout\"] > .md-flex-offset-small-60 {\n      margin-left: 60%; }\n    [class*=\"md-layout\"] > .md-flex-small-65 {\n      min-width: 65%;\n      flex: 0 1 65%; }\n    [class*=\"md-layout\"] > .md-flex-offset-small-65 {\n      margin-left: 65%; }\n    [class*=\"md-layout\"] > .md-flex-small-70 {\n      min-width: 70%;\n      flex: 0 1 70%; }\n    [class*=\"md-layout\"] > .md-flex-offset-small-70 {\n      margin-left: 70%; }\n    [class*=\"md-layout\"] > .md-flex-small-75 {\n      min-width: 75%;\n      flex: 0 1 75%; }\n    [class*=\"md-layout\"] > .md-flex-offset-small-75 {\n      margin-left: 75%; }\n    [class*=\"md-layout\"] > .md-flex-small-80 {\n      min-width: 80%;\n      flex: 0 1 80%; }\n    [class*=\"md-layout\"] > .md-flex-offset-small-80 {\n      margin-left: 80%; }\n    [class*=\"md-layout\"] > .md-flex-small-85 {\n      min-width: 85%;\n      flex: 0 1 85%; }\n    [class*=\"md-layout\"] > .md-flex-offset-small-85 {\n      margin-left: 85%; }\n    [class*=\"md-layout\"] > .md-flex-small-90 {\n      min-width: 90%;\n      flex: 0 1 90%; }\n    [class*=\"md-layout\"] > .md-flex-offset-small-90 {\n      margin-left: 90%; }\n    [class*=\"md-layout\"] > .md-flex-small-95 {\n      min-width: 95%;\n      flex: 0 1 95%; }\n    [class*=\"md-layout\"] > .md-flex-offset-small-95 {\n      margin-left: 95%; }\n    [class*=\"md-layout\"] > .md-flex-small-100 {\n      min-width: 100%;\n      flex: 0 1 100%; }\n    [class*=\"md-layout\"] > .md-flex-offset-small-100 {\n      margin-left: 100%; }\n    [class*=\"md-layout\"].md-align-small-start-start {\n      justify-content: flex-start;\n      align-items: flex-start; }\n    [class*=\"md-layout\"].md-align-small-start-center {\n      justify-content: flex-start;\n      align-items: center; }\n    [class*=\"md-layout\"].md-align-small-start-end {\n      justify-content: flex-start;\n      align-items: flex-end; }\n    [class*=\"md-layout\"].md-align-small-center-start {\n      justify-content: center;\n      align-items: flex-start; }\n    [class*=\"md-layout\"].md-align-small-center-center {\n      justify-content: center;\n      align-items: center; }\n    [class*=\"md-layout\"].md-align-small-center-end {\n      justify-content: center;\n      align-items: flex-end; }\n    [class*=\"md-layout\"].md-align-small-end-start {\n      justify-content: flex-end;\n      align-items: flex-start; }\n    [class*=\"md-layout\"].md-align-small-end-center {\n      justify-content: flex-end;\n      align-items: center; }\n    [class*=\"md-layout\"].md-align-small-end-end {\n      justify-content: flex-end;\n      align-items: flex-end; } }\n  @media (max-width: 600px) {\n    [class*=\"md-layout\"].md-layout-row-xsmall {\n      flex-direction: row; }\n    [class*=\"md-layout\"].md-layout-column-xsmall {\n      flex-direction: column; }\n    [class*=\"md-layout\"] > .md-flex-xsmall {\n      flex: 1 1; }\n    [class*=\"md-layout\"] > .md-flex-xsmall-33 {\n      min-width: 33.33333%;\n      flex: 0 1 33.33333%; }\n    [class*=\"md-layout\"] > .md-flex-xsmall-66 {\n      min-width: 33.33333%;\n      flex: 0 1 66.66666%; }\n    [class*=\"md-layout\"] > .md-flex-offset-xsmall-33 {\n      margin-left: 33.33333%; }\n    [class*=\"md-layout\"] > .md-flex-offset-xsmall-66 {\n      margin-left: 66.66666%; }\n    [class*=\"md-layout\"] > .md-flex-xsmall-5 {\n      min-width: 5%;\n      flex: 0 1 5%; }\n    [class*=\"md-layout\"] > .md-flex-offset-xsmall-5 {\n      margin-left: 5%; }\n    [class*=\"md-layout\"] > .md-flex-xsmall-10 {\n      min-width: 10%;\n      flex: 0 1 10%; }\n    [class*=\"md-layout\"] > .md-flex-offset-xsmall-10 {\n      margin-left: 10%; }\n    [class*=\"md-layout\"] > .md-flex-xsmall-15 {\n      min-width: 15%;\n      flex: 0 1 15%; }\n    [class*=\"md-layout\"] > .md-flex-offset-xsmall-15 {\n      margin-left: 15%; }\n    [class*=\"md-layout\"] > .md-flex-xsmall-20 {\n      min-width: 20%;\n      flex: 0 1 20%; }\n    [class*=\"md-layout\"] > .md-flex-offset-xsmall-20 {\n      margin-left: 20%; }\n    [class*=\"md-layout\"] > .md-flex-xsmall-25 {\n      min-width: 25%;\n      flex: 0 1 25%; }\n    [class*=\"md-layout\"] > .md-flex-offset-xsmall-25 {\n      margin-left: 25%; }\n    [class*=\"md-layout\"] > .md-flex-xsmall-30 {\n      min-width: 30%;\n      flex: 0 1 30%; }\n    [class*=\"md-layout\"] > .md-flex-offset-xsmall-30 {\n      margin-left: 30%; }\n    [class*=\"md-layout\"] > .md-flex-xsmall-35 {\n      min-width: 35%;\n      flex: 0 1 35%; }\n    [class*=\"md-layout\"] > .md-flex-offset-xsmall-35 {\n      margin-left: 35%; }\n    [class*=\"md-layout\"] > .md-flex-xsmall-40 {\n      min-width: 40%;\n      flex: 0 1 40%; }\n    [class*=\"md-layout\"] > .md-flex-offset-xsmall-40 {\n      margin-left: 40%; }\n    [class*=\"md-layout\"] > .md-flex-xsmall-45 {\n      min-width: 45%;\n      flex: 0 1 45%; }\n    [class*=\"md-layout\"] > .md-flex-offset-xsmall-45 {\n      margin-left: 45%; }\n    [class*=\"md-layout\"] > .md-flex-xsmall-50 {\n      min-width: 50%;\n      flex: 0 1 50%; }\n    [class*=\"md-layout\"] > .md-flex-offset-xsmall-50 {\n      margin-left: 50%; }\n    [class*=\"md-layout\"] > .md-flex-xsmall-55 {\n      min-width: 55%;\n      flex: 0 1 55%; }\n    [class*=\"md-layout\"] > .md-flex-offset-xsmall-55 {\n      margin-left: 55%; }\n    [class*=\"md-layout\"] > .md-flex-xsmall-60 {\n      min-width: 60%;\n      flex: 0 1 60%; }\n    [class*=\"md-layout\"] > .md-flex-offset-xsmall-60 {\n      margin-left: 60%; }\n    [class*=\"md-layout\"] > .md-flex-xsmall-65 {\n      min-width: 65%;\n      flex: 0 1 65%; }\n    [class*=\"md-layout\"] > .md-flex-offset-xsmall-65 {\n      margin-left: 65%; }\n    [class*=\"md-layout\"] > .md-flex-xsmall-70 {\n      min-width: 70%;\n      flex: 0 1 70%; }\n    [class*=\"md-layout\"] > .md-flex-offset-xsmall-70 {\n      margin-left: 70%; }\n    [class*=\"md-layout\"] > .md-flex-xsmall-75 {\n      min-width: 75%;\n      flex: 0 1 75%; }\n    [class*=\"md-layout\"] > .md-flex-offset-xsmall-75 {\n      margin-left: 75%; }\n    [class*=\"md-layout\"] > .md-flex-xsmall-80 {\n      min-width: 80%;\n      flex: 0 1 80%; }\n    [class*=\"md-layout\"] > .md-flex-offset-xsmall-80 {\n      margin-left: 80%; }\n    [class*=\"md-layout\"] > .md-flex-xsmall-85 {\n      min-width: 85%;\n      flex: 0 1 85%; }\n    [class*=\"md-layout\"] > .md-flex-offset-xsmall-85 {\n      margin-left: 85%; }\n    [class*=\"md-layout\"] > .md-flex-xsmall-90 {\n      min-width: 90%;\n      flex: 0 1 90%; }\n    [class*=\"md-layout\"] > .md-flex-offset-xsmall-90 {\n      margin-left: 90%; }\n    [class*=\"md-layout\"] > .md-flex-xsmall-95 {\n      min-width: 95%;\n      flex: 0 1 95%; }\n    [class*=\"md-layout\"] > .md-flex-offset-xsmall-95 {\n      margin-left: 95%; }\n    [class*=\"md-layout\"] > .md-flex-xsmall-100 {\n      min-width: 100%;\n      flex: 0 1 100%; }\n    [class*=\"md-layout\"] > .md-flex-offset-xsmall-100 {\n      margin-left: 100%; }\n    [class*=\"md-layout\"].md-align-xsmall-start-start {\n      justify-content: flex-start;\n      align-items: flex-start; }\n    [class*=\"md-layout\"].md-align-xsmall-start-center {\n      justify-content: flex-start;\n      align-items: center; }\n    [class*=\"md-layout\"].md-align-xsmall-start-end {\n      justify-content: flex-start;\n      align-items: flex-end; }\n    [class*=\"md-layout\"].md-align-xsmall-center-start {\n      justify-content: center;\n      align-items: flex-start; }\n    [class*=\"md-layout\"].md-align-xsmall-center-center {\n      justify-content: center;\n      align-items: center; }\n    [class*=\"md-layout\"].md-align-xsmall-center-end {\n      justify-content: center;\n      align-items: flex-end; }\n    [class*=\"md-layout\"].md-align-xsmall-end-start {\n      justify-content: flex-end;\n      align-items: flex-start; }\n    [class*=\"md-layout\"].md-align-xsmall-end-center {\n      justify-content: flex-end;\n      align-items: center; }\n    [class*=\"md-layout\"].md-align-xsmall-end-end {\n      justify-content: flex-end;\n      align-items: flex-end; } }\n  @media (min-width: 1264px) {\n    [class*=\"md-layout\"].md-layout-row-large-and-up {\n      flex-direction: row; }\n    [class*=\"md-layout\"].md-layout-column-large-and-up {\n      flex-direction: column; }\n    [class*=\"md-layout\"] > .md-flex-large-and-up {\n      flex: 1 1; }\n    [class*=\"md-layout\"] > .md-flex-large-and-up-33 {\n      min-width: 33.33333%;\n      flex: 0 1 33.33333%; }\n    [class*=\"md-layout\"] > .md-flex-large-and-up-66 {\n      min-width: 33.33333%;\n      flex: 0 1 66.66666%; }\n    [class*=\"md-layout\"] > .md-flex-offset-large-and-up-33 {\n      margin-left: 33.33333%; }\n    [class*=\"md-layout\"] > .md-flex-offset-large-and-up-66 {\n      margin-left: 66.66666%; }\n    [class*=\"md-layout\"] > .md-flex-large-and-up-5 {\n      min-width: 5%;\n      flex: 0 1 5%; }\n    [class*=\"md-layout\"] > .md-flex-offset-large-and-up-5 {\n      margin-left: 5%; }\n    [class*=\"md-layout\"] > .md-flex-large-and-up-10 {\n      min-width: 10%;\n      flex: 0 1 10%; }\n    [class*=\"md-layout\"] > .md-flex-offset-large-and-up-10 {\n      margin-left: 10%; }\n    [class*=\"md-layout\"] > .md-flex-large-and-up-15 {\n      min-width: 15%;\n      flex: 0 1 15%; }\n    [class*=\"md-layout\"] > .md-flex-offset-large-and-up-15 {\n      margin-left: 15%; }\n    [class*=\"md-layout\"] > .md-flex-large-and-up-20 {\n      min-width: 20%;\n      flex: 0 1 20%; }\n    [class*=\"md-layout\"] > .md-flex-offset-large-and-up-20 {\n      margin-left: 20%; }\n    [class*=\"md-layout\"] > .md-flex-large-and-up-25 {\n      min-width: 25%;\n      flex: 0 1 25%; }\n    [class*=\"md-layout\"] > .md-flex-offset-large-and-up-25 {\n      margin-left: 25%; }\n    [class*=\"md-layout\"] > .md-flex-large-and-up-30 {\n      min-width: 30%;\n      flex: 0 1 30%; }\n    [class*=\"md-layout\"] > .md-flex-offset-large-and-up-30 {\n      margin-left: 30%; }\n    [class*=\"md-layout\"] > .md-flex-large-and-up-35 {\n      min-width: 35%;\n      flex: 0 1 35%; }\n    [class*=\"md-layout\"] > .md-flex-offset-large-and-up-35 {\n      margin-left: 35%; }\n    [class*=\"md-layout\"] > .md-flex-large-and-up-40 {\n      min-width: 40%;\n      flex: 0 1 40%; }\n    [class*=\"md-layout\"] > .md-flex-offset-large-and-up-40 {\n      margin-left: 40%; }\n    [class*=\"md-layout\"] > .md-flex-large-and-up-45 {\n      min-width: 45%;\n      flex: 0 1 45%; }\n    [class*=\"md-layout\"] > .md-flex-offset-large-and-up-45 {\n      margin-left: 45%; }\n    [class*=\"md-layout\"] > .md-flex-large-and-up-50 {\n      min-width: 50%;\n      flex: 0 1 50%; }\n    [class*=\"md-layout\"] > .md-flex-offset-large-and-up-50 {\n      margin-left: 50%; }\n    [class*=\"md-layout\"] > .md-flex-large-and-up-55 {\n      min-width: 55%;\n      flex: 0 1 55%; }\n    [class*=\"md-layout\"] > .md-flex-offset-large-and-up-55 {\n      margin-left: 55%; }\n    [class*=\"md-layout\"] > .md-flex-large-and-up-60 {\n      min-width: 60%;\n      flex: 0 1 60%; }\n    [class*=\"md-layout\"] > .md-flex-offset-large-and-up-60 {\n      margin-left: 60%; }\n    [class*=\"md-layout\"] > .md-flex-large-and-up-65 {\n      min-width: 65%;\n      flex: 0 1 65%; }\n    [class*=\"md-layout\"] > .md-flex-offset-large-and-up-65 {\n      margin-left: 65%; }\n    [class*=\"md-layout\"] > .md-flex-large-and-up-70 {\n      min-width: 70%;\n      flex: 0 1 70%; }\n    [class*=\"md-layout\"] > .md-flex-offset-large-and-up-70 {\n      margin-left: 70%; }\n    [class*=\"md-layout\"] > .md-flex-large-and-up-75 {\n      min-width: 75%;\n      flex: 0 1 75%; }\n    [class*=\"md-layout\"] > .md-flex-offset-large-and-up-75 {\n      margin-left: 75%; }\n    [class*=\"md-layout\"] > .md-flex-large-and-up-80 {\n      min-width: 80%;\n      flex: 0 1 80%; }\n    [class*=\"md-layout\"] > .md-flex-offset-large-and-up-80 {\n      margin-left: 80%; }\n    [class*=\"md-layout\"] > .md-flex-large-and-up-85 {\n      min-width: 85%;\n      flex: 0 1 85%; }\n    [class*=\"md-layout\"] > .md-flex-offset-large-and-up-85 {\n      margin-left: 85%; }\n    [class*=\"md-layout\"] > .md-flex-large-and-up-90 {\n      min-width: 90%;\n      flex: 0 1 90%; }\n    [class*=\"md-layout\"] > .md-flex-offset-large-and-up-90 {\n      margin-left: 90%; }\n    [class*=\"md-layout\"] > .md-flex-large-and-up-95 {\n      min-width: 95%;\n      flex: 0 1 95%; }\n    [class*=\"md-layout\"] > .md-flex-offset-large-and-up-95 {\n      margin-left: 95%; }\n    [class*=\"md-layout\"] > .md-flex-large-and-up-100 {\n      min-width: 100%;\n      flex: 0 1 100%; }\n    [class*=\"md-layout\"] > .md-flex-offset-large-and-up-100 {\n      margin-left: 100%; }\n    [class*=\"md-layout\"].md-align-large-and-up-start-start {\n      justify-content: flex-start;\n      align-items: flex-start; }\n    [class*=\"md-layout\"].md-align-large-and-up-start-center {\n      justify-content: flex-start;\n      align-items: center; }\n    [class*=\"md-layout\"].md-align-large-and-up-start-end {\n      justify-content: flex-start;\n      align-items: flex-end; }\n    [class*=\"md-layout\"].md-align-large-and-up-center-start {\n      justify-content: center;\n      align-items: flex-start; }\n    [class*=\"md-layout\"].md-align-large-and-up-center-center {\n      justify-content: center;\n      align-items: center; }\n    [class*=\"md-layout\"].md-align-large-and-up-center-end {\n      justify-content: center;\n      align-items: flex-end; }\n    [class*=\"md-layout\"].md-align-large-and-up-end-start {\n      justify-content: flex-end;\n      align-items: flex-start; }\n    [class*=\"md-layout\"].md-align-large-and-up-end-center {\n      justify-content: flex-end;\n      align-items: center; }\n    [class*=\"md-layout\"].md-align-large-and-up-end-end {\n      justify-content: flex-end;\n      align-items: flex-end; } }\n  @media (min-width: 944px) {\n    [class*=\"md-layout\"].md-layout-row-medium-and-up {\n      flex-direction: row; }\n    [class*=\"md-layout\"].md-layout-column-medium-and-up {\n      flex-direction: column; }\n    [class*=\"md-layout\"] > .md-flex-medium-and-up {\n      flex: 1 1; }\n    [class*=\"md-layout\"] > .md-flex-medium-and-up-33 {\n      min-width: 33.33333%;\n      flex: 0 1 33.33333%; }\n    [class*=\"md-layout\"] > .md-flex-medium-and-up-66 {\n      min-width: 33.33333%;\n      flex: 0 1 66.66666%; }\n    [class*=\"md-layout\"] > .md-flex-offset-medium-and-up-33 {\n      margin-left: 33.33333%; }\n    [class*=\"md-layout\"] > .md-flex-offset-medium-and-up-66 {\n      margin-left: 66.66666%; }\n    [class*=\"md-layout\"] > .md-flex-medium-and-up-5 {\n      min-width: 5%;\n      flex: 0 1 5%; }\n    [class*=\"md-layout\"] > .md-flex-offset-medium-and-up-5 {\n      margin-left: 5%; }\n    [class*=\"md-layout\"] > .md-flex-medium-and-up-10 {\n      min-width: 10%;\n      flex: 0 1 10%; }\n    [class*=\"md-layout\"] > .md-flex-offset-medium-and-up-10 {\n      margin-left: 10%; }\n    [class*=\"md-layout\"] > .md-flex-medium-and-up-15 {\n      min-width: 15%;\n      flex: 0 1 15%; }\n    [class*=\"md-layout\"] > .md-flex-offset-medium-and-up-15 {\n      margin-left: 15%; }\n    [class*=\"md-layout\"] > .md-flex-medium-and-up-20 {\n      min-width: 20%;\n      flex: 0 1 20%; }\n    [class*=\"md-layout\"] > .md-flex-offset-medium-and-up-20 {\n      margin-left: 20%; }\n    [class*=\"md-layout\"] > .md-flex-medium-and-up-25 {\n      min-width: 25%;\n      flex: 0 1 25%; }\n    [class*=\"md-layout\"] > .md-flex-offset-medium-and-up-25 {\n      margin-left: 25%; }\n    [class*=\"md-layout\"] > .md-flex-medium-and-up-30 {\n      min-width: 30%;\n      flex: 0 1 30%; }\n    [class*=\"md-layout\"] > .md-flex-offset-medium-and-up-30 {\n      margin-left: 30%; }\n    [class*=\"md-layout\"] > .md-flex-medium-and-up-35 {\n      min-width: 35%;\n      flex: 0 1 35%; }\n    [class*=\"md-layout\"] > .md-flex-offset-medium-and-up-35 {\n      margin-left: 35%; }\n    [class*=\"md-layout\"] > .md-flex-medium-and-up-40 {\n      min-width: 40%;\n      flex: 0 1 40%; }\n    [class*=\"md-layout\"] > .md-flex-offset-medium-and-up-40 {\n      margin-left: 40%; }\n    [class*=\"md-layout\"] > .md-flex-medium-and-up-45 {\n      min-width: 45%;\n      flex: 0 1 45%; }\n    [class*=\"md-layout\"] > .md-flex-offset-medium-and-up-45 {\n      margin-left: 45%; }\n    [class*=\"md-layout\"] > .md-flex-medium-and-up-50 {\n      min-width: 50%;\n      flex: 0 1 50%; }\n    [class*=\"md-layout\"] > .md-flex-offset-medium-and-up-50 {\n      margin-left: 50%; }\n    [class*=\"md-layout\"] > .md-flex-medium-and-up-55 {\n      min-width: 55%;\n      flex: 0 1 55%; }\n    [class*=\"md-layout\"] > .md-flex-offset-medium-and-up-55 {\n      margin-left: 55%; }\n    [class*=\"md-layout\"] > .md-flex-medium-and-up-60 {\n      min-width: 60%;\n      flex: 0 1 60%; }\n    [class*=\"md-layout\"] > .md-flex-offset-medium-and-up-60 {\n      margin-left: 60%; }\n    [class*=\"md-layout\"] > .md-flex-medium-and-up-65 {\n      min-width: 65%;\n      flex: 0 1 65%; }\n    [class*=\"md-layout\"] > .md-flex-offset-medium-and-up-65 {\n      margin-left: 65%; }\n    [class*=\"md-layout\"] > .md-flex-medium-and-up-70 {\n      min-width: 70%;\n      flex: 0 1 70%; }\n    [class*=\"md-layout\"] > .md-flex-offset-medium-and-up-70 {\n      margin-left: 70%; }\n    [class*=\"md-layout\"] > .md-flex-medium-and-up-75 {\n      min-width: 75%;\n      flex: 0 1 75%; }\n    [class*=\"md-layout\"] > .md-flex-offset-medium-and-up-75 {\n      margin-left: 75%; }\n    [class*=\"md-layout\"] > .md-flex-medium-and-up-80 {\n      min-width: 80%;\n      flex: 0 1 80%; }\n    [class*=\"md-layout\"] > .md-flex-offset-medium-and-up-80 {\n      margin-left: 80%; }\n    [class*=\"md-layout\"] > .md-flex-medium-and-up-85 {\n      min-width: 85%;\n      flex: 0 1 85%; }\n    [class*=\"md-layout\"] > .md-flex-offset-medium-and-up-85 {\n      margin-left: 85%; }\n    [class*=\"md-layout\"] > .md-flex-medium-and-up-90 {\n      min-width: 90%;\n      flex: 0 1 90%; }\n    [class*=\"md-layout\"] > .md-flex-offset-medium-and-up-90 {\n      margin-left: 90%; }\n    [class*=\"md-layout\"] > .md-flex-medium-and-up-95 {\n      min-width: 95%;\n      flex: 0 1 95%; }\n    [class*=\"md-layout\"] > .md-flex-offset-medium-and-up-95 {\n      margin-left: 95%; }\n    [class*=\"md-layout\"] > .md-flex-medium-and-up-100 {\n      min-width: 100%;\n      flex: 0 1 100%; }\n    [class*=\"md-layout\"] > .md-flex-offset-medium-and-up-100 {\n      margin-left: 100%; }\n    [class*=\"md-layout\"].md-align-medium-and-up-start-start {\n      justify-content: flex-start;\n      align-items: flex-start; }\n    [class*=\"md-layout\"].md-align-medium-and-up-start-center {\n      justify-content: flex-start;\n      align-items: center; }\n    [class*=\"md-layout\"].md-align-medium-and-up-start-end {\n      justify-content: flex-start;\n      align-items: flex-end; }\n    [class*=\"md-layout\"].md-align-medium-and-up-center-start {\n      justify-content: center;\n      align-items: flex-start; }\n    [class*=\"md-layout\"].md-align-medium-and-up-center-center {\n      justify-content: center;\n      align-items: center; }\n    [class*=\"md-layout\"].md-align-medium-and-up-center-end {\n      justify-content: center;\n      align-items: flex-end; }\n    [class*=\"md-layout\"].md-align-medium-and-up-end-start {\n      justify-content: flex-end;\n      align-items: flex-start; }\n    [class*=\"md-layout\"].md-align-medium-and-up-end-center {\n      justify-content: flex-end;\n      align-items: center; }\n    [class*=\"md-layout\"].md-align-medium-and-up-end-end {\n      justify-content: flex-end;\n      align-items: flex-end; } }\n  @media (min-width: 660px) {\n    [class*=\"md-layout\"].md-layout-row-small-and-up {\n      flex-direction: row; }\n    [class*=\"md-layout\"].md-layout-column-small-and-up {\n      flex-direction: column; }\n    [class*=\"md-layout\"] > .md-flex-small-and-up {\n      flex: 1 1; }\n    [class*=\"md-layout\"] > .md-flex-small-and-up-33 {\n      min-width: 33.33333%;\n      flex: 0 1 33.33333%; }\n    [class*=\"md-layout\"] > .md-flex-small-and-up-66 {\n      min-width: 33.33333%;\n      flex: 0 1 66.66666%; }\n    [class*=\"md-layout\"] > .md-flex-offset-small-and-up-33 {\n      margin-left: 33.33333%; }\n    [class*=\"md-layout\"] > .md-flex-offset-small-and-up-66 {\n      margin-left: 66.66666%; }\n    [class*=\"md-layout\"] > .md-flex-small-and-up-5 {\n      min-width: 5%;\n      flex: 0 1 5%; }\n    [class*=\"md-layout\"] > .md-flex-offset-small-and-up-5 {\n      margin-left: 5%; }\n    [class*=\"md-layout\"] > .md-flex-small-and-up-10 {\n      min-width: 10%;\n      flex: 0 1 10%; }\n    [class*=\"md-layout\"] > .md-flex-offset-small-and-up-10 {\n      margin-left: 10%; }\n    [class*=\"md-layout\"] > .md-flex-small-and-up-15 {\n      min-width: 15%;\n      flex: 0 1 15%; }\n    [class*=\"md-layout\"] > .md-flex-offset-small-and-up-15 {\n      margin-left: 15%; }\n    [class*=\"md-layout\"] > .md-flex-small-and-up-20 {\n      min-width: 20%;\n      flex: 0 1 20%; }\n    [class*=\"md-layout\"] > .md-flex-offset-small-and-up-20 {\n      margin-left: 20%; }\n    [class*=\"md-layout\"] > .md-flex-small-and-up-25 {\n      min-width: 25%;\n      flex: 0 1 25%; }\n    [class*=\"md-layout\"] > .md-flex-offset-small-and-up-25 {\n      margin-left: 25%; }\n    [class*=\"md-layout\"] > .md-flex-small-and-up-30 {\n      min-width: 30%;\n      flex: 0 1 30%; }\n    [class*=\"md-layout\"] > .md-flex-offset-small-and-up-30 {\n      margin-left: 30%; }\n    [class*=\"md-layout\"] > .md-flex-small-and-up-35 {\n      min-width: 35%;\n      flex: 0 1 35%; }\n    [class*=\"md-layout\"] > .md-flex-offset-small-and-up-35 {\n      margin-left: 35%; }\n    [class*=\"md-layout\"] > .md-flex-small-and-up-40 {\n      min-width: 40%;\n      flex: 0 1 40%; }\n    [class*=\"md-layout\"] > .md-flex-offset-small-and-up-40 {\n      margin-left: 40%; }\n    [class*=\"md-layout\"] > .md-flex-small-and-up-45 {\n      min-width: 45%;\n      flex: 0 1 45%; }\n    [class*=\"md-layout\"] > .md-flex-offset-small-and-up-45 {\n      margin-left: 45%; }\n    [class*=\"md-layout\"] > .md-flex-small-and-up-50 {\n      min-width: 50%;\n      flex: 0 1 50%; }\n    [class*=\"md-layout\"] > .md-flex-offset-small-and-up-50 {\n      margin-left: 50%; }\n    [class*=\"md-layout\"] > .md-flex-small-and-up-55 {\n      min-width: 55%;\n      flex: 0 1 55%; }\n    [class*=\"md-layout\"] > .md-flex-offset-small-and-up-55 {\n      margin-left: 55%; }\n    [class*=\"md-layout\"] > .md-flex-small-and-up-60 {\n      min-width: 60%;\n      flex: 0 1 60%; }\n    [class*=\"md-layout\"] > .md-flex-offset-small-and-up-60 {\n      margin-left: 60%; }\n    [class*=\"md-layout\"] > .md-flex-small-and-up-65 {\n      min-width: 65%;\n      flex: 0 1 65%; }\n    [class*=\"md-layout\"] > .md-flex-offset-small-and-up-65 {\n      margin-left: 65%; }\n    [class*=\"md-layout\"] > .md-flex-small-and-up-70 {\n      min-width: 70%;\n      flex: 0 1 70%; }\n    [class*=\"md-layout\"] > .md-flex-offset-small-and-up-70 {\n      margin-left: 70%; }\n    [class*=\"md-layout\"] > .md-flex-small-and-up-75 {\n      min-width: 75%;\n      flex: 0 1 75%; }\n    [class*=\"md-layout\"] > .md-flex-offset-small-and-up-75 {\n      margin-left: 75%; }\n    [class*=\"md-layout\"] > .md-flex-small-and-up-80 {\n      min-width: 80%;\n      flex: 0 1 80%; }\n    [class*=\"md-layout\"] > .md-flex-offset-small-and-up-80 {\n      margin-left: 80%; }\n    [class*=\"md-layout\"] > .md-flex-small-and-up-85 {\n      min-width: 85%;\n      flex: 0 1 85%; }\n    [class*=\"md-layout\"] > .md-flex-offset-small-and-up-85 {\n      margin-left: 85%; }\n    [class*=\"md-layout\"] > .md-flex-small-and-up-90 {\n      min-width: 90%;\n      flex: 0 1 90%; }\n    [class*=\"md-layout\"] > .md-flex-offset-small-and-up-90 {\n      margin-left: 90%; }\n    [class*=\"md-layout\"] > .md-flex-small-and-up-95 {\n      min-width: 95%;\n      flex: 0 1 95%; }\n    [class*=\"md-layout\"] > .md-flex-offset-small-and-up-95 {\n      margin-left: 95%; }\n    [class*=\"md-layout\"] > .md-flex-small-and-up-100 {\n      min-width: 100%;\n      flex: 0 1 100%; }\n    [class*=\"md-layout\"] > .md-flex-offset-small-and-up-100 {\n      margin-left: 100%; }\n    [class*=\"md-layout\"].md-align-small-and-up-start-start {\n      justify-content: flex-start;\n      align-items: flex-start; }\n    [class*=\"md-layout\"].md-align-small-and-up-start-center {\n      justify-content: flex-start;\n      align-items: center; }\n    [class*=\"md-layout\"].md-align-small-and-up-start-end {\n      justify-content: flex-start;\n      align-items: flex-end; }\n    [class*=\"md-layout\"].md-align-small-and-up-center-start {\n      justify-content: center;\n      align-items: flex-start; }\n    [class*=\"md-layout\"].md-align-small-and-up-center-center {\n      justify-content: center;\n      align-items: center; }\n    [class*=\"md-layout\"].md-align-small-and-up-center-end {\n      justify-content: center;\n      align-items: flex-end; }\n    [class*=\"md-layout\"].md-align-small-and-up-end-start {\n      justify-content: flex-end;\n      align-items: flex-start; }\n    [class*=\"md-layout\"].md-align-small-and-up-end-center {\n      justify-content: flex-end;\n      align-items: center; }\n    [class*=\"md-layout\"].md-align-small-and-up-end-end {\n      justify-content: flex-end;\n      align-items: flex-end; } }\n  @media (min-width: 300px) {\n    [class*=\"md-layout\"].md-layout-row-xsmall-and-up {\n      flex-direction: row; }\n    [class*=\"md-layout\"].md-layout-column-xsmall-and-up {\n      flex-direction: column; }\n    [class*=\"md-layout\"] > .md-flex-xsmall-and-up {\n      flex: 1 1; }\n    [class*=\"md-layout\"] > .md-flex-xsmall-and-up-33 {\n      min-width: 33.33333%;\n      flex: 0 1 33.33333%; }\n    [class*=\"md-layout\"] > .md-flex-xsmall-and-up-66 {\n      min-width: 33.33333%;\n      flex: 0 1 66.66666%; }\n    [class*=\"md-layout\"] > .md-flex-offset-xsmall-and-up-33 {\n      margin-left: 33.33333%; }\n    [class*=\"md-layout\"] > .md-flex-offset-xsmall-and-up-66 {\n      margin-left: 66.66666%; }\n    [class*=\"md-layout\"] > .md-flex-xsmall-and-up-5 {\n      min-width: 5%;\n      flex: 0 1 5%; }\n    [class*=\"md-layout\"] > .md-flex-offset-xsmall-and-up-5 {\n      margin-left: 5%; }\n    [class*=\"md-layout\"] > .md-flex-xsmall-and-up-10 {\n      min-width: 10%;\n      flex: 0 1 10%; }\n    [class*=\"md-layout\"] > .md-flex-offset-xsmall-and-up-10 {\n      margin-left: 10%; }\n    [class*=\"md-layout\"] > .md-flex-xsmall-and-up-15 {\n      min-width: 15%;\n      flex: 0 1 15%; }\n    [class*=\"md-layout\"] > .md-flex-offset-xsmall-and-up-15 {\n      margin-left: 15%; }\n    [class*=\"md-layout\"] > .md-flex-xsmall-and-up-20 {\n      min-width: 20%;\n      flex: 0 1 20%; }\n    [class*=\"md-layout\"] > .md-flex-offset-xsmall-and-up-20 {\n      margin-left: 20%; }\n    [class*=\"md-layout\"] > .md-flex-xsmall-and-up-25 {\n      min-width: 25%;\n      flex: 0 1 25%; }\n    [class*=\"md-layout\"] > .md-flex-offset-xsmall-and-up-25 {\n      margin-left: 25%; }\n    [class*=\"md-layout\"] > .md-flex-xsmall-and-up-30 {\n      min-width: 30%;\n      flex: 0 1 30%; }\n    [class*=\"md-layout\"] > .md-flex-offset-xsmall-and-up-30 {\n      margin-left: 30%; }\n    [class*=\"md-layout\"] > .md-flex-xsmall-and-up-35 {\n      min-width: 35%;\n      flex: 0 1 35%; }\n    [class*=\"md-layout\"] > .md-flex-offset-xsmall-and-up-35 {\n      margin-left: 35%; }\n    [class*=\"md-layout\"] > .md-flex-xsmall-and-up-40 {\n      min-width: 40%;\n      flex: 0 1 40%; }\n    [class*=\"md-layout\"] > .md-flex-offset-xsmall-and-up-40 {\n      margin-left: 40%; }\n    [class*=\"md-layout\"] > .md-flex-xsmall-and-up-45 {\n      min-width: 45%;\n      flex: 0 1 45%; }\n    [class*=\"md-layout\"] > .md-flex-offset-xsmall-and-up-45 {\n      margin-left: 45%; }\n    [class*=\"md-layout\"] > .md-flex-xsmall-and-up-50 {\n      min-width: 50%;\n      flex: 0 1 50%; }\n    [class*=\"md-layout\"] > .md-flex-offset-xsmall-and-up-50 {\n      margin-left: 50%; }\n    [class*=\"md-layout\"] > .md-flex-xsmall-and-up-55 {\n      min-width: 55%;\n      flex: 0 1 55%; }\n    [class*=\"md-layout\"] > .md-flex-offset-xsmall-and-up-55 {\n      margin-left: 55%; }\n    [class*=\"md-layout\"] > .md-flex-xsmall-and-up-60 {\n      min-width: 60%;\n      flex: 0 1 60%; }\n    [class*=\"md-layout\"] > .md-flex-offset-xsmall-and-up-60 {\n      margin-left: 60%; }\n    [class*=\"md-layout\"] > .md-flex-xsmall-and-up-65 {\n      min-width: 65%;\n      flex: 0 1 65%; }\n    [class*=\"md-layout\"] > .md-flex-offset-xsmall-and-up-65 {\n      margin-left: 65%; }\n    [class*=\"md-layout\"] > .md-flex-xsmall-and-up-70 {\n      min-width: 70%;\n      flex: 0 1 70%; }\n    [class*=\"md-layout\"] > .md-flex-offset-xsmall-and-up-70 {\n      margin-left: 70%; }\n    [class*=\"md-layout\"] > .md-flex-xsmall-and-up-75 {\n      min-width: 75%;\n      flex: 0 1 75%; }\n    [class*=\"md-layout\"] > .md-flex-offset-xsmall-and-up-75 {\n      margin-left: 75%; }\n    [class*=\"md-layout\"] > .md-flex-xsmall-and-up-80 {\n      min-width: 80%;\n      flex: 0 1 80%; }\n    [class*=\"md-layout\"] > .md-flex-offset-xsmall-and-up-80 {\n      margin-left: 80%; }\n    [class*=\"md-layout\"] > .md-flex-xsmall-and-up-85 {\n      min-width: 85%;\n      flex: 0 1 85%; }\n    [class*=\"md-layout\"] > .md-flex-offset-xsmall-and-up-85 {\n      margin-left: 85%; }\n    [class*=\"md-layout\"] > .md-flex-xsmall-and-up-90 {\n      min-width: 90%;\n      flex: 0 1 90%; }\n    [class*=\"md-layout\"] > .md-flex-offset-xsmall-and-up-90 {\n      margin-left: 90%; }\n    [class*=\"md-layout\"] > .md-flex-xsmall-and-up-95 {\n      min-width: 95%;\n      flex: 0 1 95%; }\n    [class*=\"md-layout\"] > .md-flex-offset-xsmall-and-up-95 {\n      margin-left: 95%; }\n    [class*=\"md-layout\"] > .md-flex-xsmall-and-up-100 {\n      min-width: 100%;\n      flex: 0 1 100%; }\n    [class*=\"md-layout\"] > .md-flex-offset-xsmall-and-up-100 {\n      margin-left: 100%; }\n    [class*=\"md-layout\"].md-align-xsmall-and-up-start-start {\n      justify-content: flex-start;\n      align-items: flex-start; }\n    [class*=\"md-layout\"].md-align-xsmall-and-up-start-center {\n      justify-content: flex-start;\n      align-items: center; }\n    [class*=\"md-layout\"].md-align-xsmall-and-up-start-end {\n      justify-content: flex-start;\n      align-items: flex-end; }\n    [class*=\"md-layout\"].md-align-xsmall-and-up-center-start {\n      justify-content: center;\n      align-items: flex-start; }\n    [class*=\"md-layout\"].md-align-xsmall-and-up-center-center {\n      justify-content: center;\n      align-items: center; }\n    [class*=\"md-layout\"].md-align-xsmall-and-up-center-end {\n      justify-content: center;\n      align-items: flex-end; }\n    [class*=\"md-layout\"].md-align-xsmall-and-up-end-start {\n      justify-content: flex-end;\n      align-items: flex-start; }\n    [class*=\"md-layout\"].md-align-xsmall-and-up-end-center {\n      justify-content: flex-end;\n      align-items: center; }\n    [class*=\"md-layout\"].md-align-xsmall-and-up-end-end {\n      justify-content: flex-end;\n      align-items: flex-end; } }\n\n.md-gutter.md-layout-row > [class*=\"md-flex\"] + [class*=\"md-flex\"] {\n  padding-top: 0;\n  padding-left: 40px; }\n\n.md-gutter.md-layout-column > [class*=\"md-flex\"] + [class*=\"md-flex\"] {\n  padding-top: 40px;\n  padding-left: 0; }\n\n@media (max-width: 1264px) {\n  .md-gutter.md-layout-row > [class*=\"md-flex\"] + [class*=\"md-flex\"] {\n    padding-top: 0;\n    padding-left: 24px; }\n  .md-gutter.md-layout-column > [class*=\"md-flex\"] + [class*=\"md-flex\"] {\n    padding-top: 24px;\n    padding-left: 0; } }\n\n@media (max-width: 944px) {\n  .md-gutter.md-layout-row > [class*=\"md-flex\"] + [class*=\"md-flex\"] {\n    padding-top: 0;\n    padding-left: 16px; }\n  .md-gutter.md-layout-column > [class*=\"md-flex\"] + [class*=\"md-flex\"] {\n    padding-top: 16px;\n    padding-left: 0; } }\n\n@media (max-width: 600px) {\n  .md-gutter.md-layout-row > [class*=\"md-flex\"] + [class*=\"md-flex\"] {\n    padding-top: 0;\n    padding-left: 8px; }\n  .md-gutter.md-layout-column > [class*=\"md-flex\"] + [class*=\"md-flex\"] {\n    padding-top: 8px;\n    padding-left: 0; } }\n\n@media (max-width: 1903px) {\n  .md-gutter.md-layout-row-large > [class*=\"md-flex\"] + [class*=\"md-flex\"] {\n    padding-top: 0;\n    padding-left: 40px; }\n  .md-gutter.md-layout-column-large > [class*=\"md-flex\"] + [class*=\"md-flex\"] {\n    padding-top: 40px;\n    padding-left: 0; } }\n\n@media (max-width: 1264px) {\n  .md-gutter.md-layout-row-medium > [class*=\"md-flex\"] + [class*=\"md-flex\"] {\n    padding-top: 0;\n    padding-left: 24px; }\n  .md-gutter.md-layout-column-medium > [class*=\"md-flex\"] + [class*=\"md-flex\"] {\n    padding-top: 24px;\n    padding-left: 0; } }\n\n@media (max-width: 944px) {\n  .md-gutter.md-layout-row-small > [class*=\"md-flex\"] + [class*=\"md-flex\"] {\n    padding-top: 0;\n    padding-left: 16px; }\n  .md-gutter.md-layout-column-small > [class*=\"md-flex\"] + [class*=\"md-flex\"] {\n    padding-top: 16px;\n    padding-left: 0; } }\n\n@media (max-width: 600px) {\n  .md-gutter.md-layout-row-xsmall > [class*=\"md-flex\"] + [class*=\"md-flex\"] {\n    padding-top: 0;\n    padding-left: 8px; }\n  .md-gutter.md-layout-column-xsmall > [class*=\"md-flex\"] + [class*=\"md-flex\"] {\n    padding-top: 8px;\n    padding-left: 0; } }\n\n@media (max-width: 1903px) {\n  .md-hide-large {\n    display: none; } }\n\n@media (max-width: 1264px) {\n  .md-hide-medium {\n    display: none; } }\n\n@media (max-width: 944px) {\n  .md-hide-small {\n    display: none; } }\n\n@media (max-width: 600px) {\n  .md-hide-xsmall {\n    display: none; } }\n", ""]);

// exports


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MdRipple = __webpack_require__(39);

var _MdRipple2 = _interopRequireDefault(_MdRipple);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (Vue) {
  Vue.component(_MdRipple2.default.name, _MdRipple2.default);
};

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MdToolbar = __webpack_require__(144);

var _MdToolbar2 = _interopRequireDefault(_MdToolbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (Vue) {
  Vue.component(_MdToolbar2.default.name, _MdToolbar2.default);
};

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(145)
}
var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(147),
  /* template */
  __webpack_require__(148),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/marcosmoura/Projects/github/vue-material-experiments/src/components/MdToolbar/MdToolbar.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] MdToolbar.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2f784d36", Component.options)
  } else {
    hotAPI.reload("data-v-2f784d36", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(146);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("c5581f42", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2f784d36\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js?outputStyle=compressed!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./MdToolbar.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2f784d36\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js?outputStyle=compressed!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./MdToolbar.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, "\n.md-toolbar{min-height:64px;padding:0 8px 0 16px;display:flex;align-items:center;align-content:center;flex-flow:row wrap;position:relative;transition:.4s cubic-bezier(0.4, 0, 0.2, 1);transform:translate3D(0, 0, 0)\n}\n.md-toolbar.md-dense{min-height:48px\n}\n.md-toolbar.md-medium{min-height:88px\n}\n.md-toolbar.md-medium.md-dense{min-height:72px\n}\n.md-toolbar.md-large{min-height:128px;align-content:inherit\n}\n.md-toolbar.md-large.md-dense{min-height:96px\n}\n.md-toolbar .md-title{margin:0;font-size:20px;font-weight:400\n}\n", ""]);

// exports


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MdComponent = __webpack_require__(10);

var _MdComponent2 = _interopRequireDefault(_MdComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _MdComponent2.default({
  name: 'MdToolbar'
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "md-toolbar",
    class: [_vm.$mdActiveTheme]
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2f784d36", module.exports)
  }
}

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(150);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("55a740ef", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./index.scss", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./index.scss");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n/**\n * The default transition, used when the element is visible\n * since the beginning of the animation\n * ---\n * @access private\n * @type transition\n * @group transition\n */\n/**\n * The enter transition, used when the element is not visible on the screen\n * since the beginning of the animation and become visible\n * ---\n * @access private\n * @type transition\n * @group transition\n */\n/**\n * The leave transition, used when the element is visible on the screen\n * since the beginning of the animation and is removed\n * ---\n * @access private\n * @type transition\n * @group transition\n */\n/**\n * The stand transition, used when the element is going to accelerate,\n * like movements from bottom to top\n * ---\n * @access private\n * @type transition\n * @group transition\n */\n/**\n * The out transition, used when the element is going to deaccelerate,\n * like movements from top to bottom\n * ---\n * @access private\n * @type transition\n * @group transition\n */\n/**\n * The default transition, used when the element is visible\n * since the beginning of the animation\n * ---\n * @access private\n * @type transition\n * @group transition\n */\n/**\n * The enter transition, used when the element is not visible on the screen\n * since the beginning of the animation and become visible\n * ---\n * @access private\n * @type transition\n * @group transition\n */\n/**\n * The leave transition, used when the element is visible on the screen\n * since the beginning of the animation and is removed\n * ---\n * @access private\n * @type transition\n * @group transition\n */\n/**\n * The stand transition, used when the element is going to accelerate,\n * like movements from bottom to top\n * ---\n * @access private\n * @type transition\n * @group transition\n */\n/**\n * The out transition, used when the element is going to deaccelerate,\n * like movements from top to bottom\n * ---\n * @access private\n * @type transition\n * @group transition\n */\n/**\n * Structure - The main styles for html and body tags\n */\nhtml {\n  height: 100%;\n  box-sizing: border-box;\n  transition: background-color 0.3s cubic-bezier(0.25, 0.8, 0.25, 1); }\n  html *,\n  html *:before,\n  html *:after {\n    box-sizing: inherit; }\n\nbody {\n  min-height: 100%;\n  margin: 0;\n  position: relative;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-touch-callout: none;\n  -webkit-text-size-adjust: 100%;\n  -ms-text-size-adjust: 100%;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif; }\n\n/**\n * Overrides - Default buttons\n */\na:not(.md-button) {\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition-property: color, opacity; }\n\n/**\n * Overrides - Apply fluid media styles\n */\naudio,\nimg,\nobject,\nembed,\ncanvas,\nvideo,\niframe {\n  max-width: 100%;\n  font-style: italic;\n  vertical-align: middle; }\n  audio:not(.md-image),\n  img:not(.md-image),\n  object:not(.md-image),\n  embed:not(.md-image),\n  canvas:not(.md-image),\n  video:not(.md-image),\n  iframe:not(.md-image) {\n    height: auto; }\n\n/**\n * Suppress the focus outline on links that cannot be accessed via keyboard.\n * This prevents an unwanted focus outline from appearing around elements that\n * might still respond to pointer events.\n */\n/*\n   ========================================================================== */\n[tabindex=\"-1\"]:focus {\n  outline: none !important; }\n\n.md-scrollbar::-webkit-scrollbar,\n.md-scrollbar ::-webkit-scrollbar {\n  width: 7px;\n  height: 7px;\n  transition: 0.4s cubic-bezier(0.4, 0, 0.2, 1); }\n\n.md-scrollbar::-webkit-scrollbar-button,\n.md-scrollbar ::-webkit-scrollbar-button {\n  display: none; }\n\n.md-scrollbar::-webkit-scrollbar-thumb,\n.md-scrollbar ::-webkit-scrollbar-thumb {\n  transition: 0.4s cubic-bezier(0.4, 0, 0.2, 1); }\n\n/**\n * The complete material palette\n * ---\n * @access public\n * @type map\n * @group themes\n */\n/**\n * Theme any css property based on the current palette, accepting a themable\n * value that will give an contrasted\n * ---\n * Usage example:\n *\n * $foo-palette: (\n *   primary: md-get-palette-color(indigo, 500),\n *   accent: md-get-palette-color(pink, 500),\n *   theme: \"light\"\n * );\n *\n * ---\n * @access public\n * ---\n * @param {color} $type —  The desired color based on material palette\n * @param {string} $type —  A valid hue\n */\n/**\n * Get the current theme mode from the current theme\n * ---\n * Usage example:\n *\n * $theme-mode: md-get-theme-mode()\n *\n * ---\n * @access private\n */\n/**\n * Theme any css property based on the current palette, accepting a themable\n * value that will give an contrasted\n * ---\n * Usage example:\n *\n * .md-foo {\n *   min-width: 88px;\n *   height: 40px;\n *   background: md-theme(primary);\n * }\n *\n * ---\n * @access public\n * ---\n * @param {string} $type —  The themable value\n */\n/**\n * Get a color based on type by theme\n * ---\n * Usage example:\n *\n * $color: md-get-color-by-theme(dark, primary)\n *\n * ---\n * @access public\n * ---\n * @param {string} $color-theme —  The theme color | Accepts dark or light\n * @param {string} $type —  The color type\n */\n/**\n * Get a color based on type only\n * ---\n * Usage example:\n *\n * $color1: md-get-color-by-type(background, dark)\n * $color1: md-get-color-by-type(accent)\n *\n * ---\n * @access public\n * ---\n * @param {string} $type —  The color type\n * @param {string} $theme —  The fallback theme\n */\n/**\n * The default theme palette\n * primary: indigo 500 #3f51b5\n * accent: pink 500 #e91e63\n * theme: light\n *\n * It can be used just before importing the Vue Material stylesheet\n *\n * ---\n * @access public\n * @type colormap\n * @group themes\n */\n/**\n * Temporary variable to store all themable values\n * ---\n * @access private\n * @type map\n * @group themes\n */\n/**\n * Map variable to store all themes to be processed by each component\n * ---\n * @access private\n * @type map\n * @group themes\n */\n/**\n * Store the current theme name\n * ---\n * @access private\n * @type string\n * @group themes\n */\n/**\n * The color contrast values\n * ---\n * @access private\n * @type map\n * @group themes\n */\n/**\n * Hightly based on: \"Using Sass to automatically pick text colors\"\n * https://medium.com/dev-channel/using-sass-to-automatically-pick-text-colors-4ba7645d2796\n */\n/**\n * Precomputed linear color channel values, for use in contrast calculations.\n * See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n * ---\n *\n *  Algorithm, for c in 0 to 255:\n *  f(c) {\n *    c = c / 255;\n *    return c < 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);\n *  }\n *\n *  This lookup table is needed since there is no `pow` in SASS.\n *\n * ---\n * @access private\n * @type Map\n * @group themes\n */\n/**\n * Calculate the luminance for a color.\n * ---\n * @access private\n * ---\n * @param {string} $color —  The color to be analysed\n */\n/**\n * Calculate the contrast ratio between two colors.\n * ---\n * @access private\n * ---\n * @param {string} $bg —  The bg color\n * @param {string} $fg —  The fg color to be compared\n */\n/**\n * Determine whether to use dark or light text on top of given color.\n * Returns dark or light depending on the contrast ratio.\n * ---\n * @access private\n * ---\n * @param {string} $color —  The desired color to be compared\n */\n/**\n * Override extending the default palette giving new values. It will extend\n * the default values of the palette if has a property missing.\n * ---\n * Usage example:\n *\n * @include md-override-palette ((\n *   accent: blue,\n *   theme: \"dark\"\n * ))\n *\n * ---\n * @access public\n * @param {map} $palette —  The new palette\n */\n/**\n * Create a new theme based on a given palette. It will extend the default\n * values of the palette if has a property missing.\n * ---\n * Usage example:\n *\n * @include md-register-theme(\"alternative\", (\n *   primary: #212121,\n *   accent: #CDDC39,\n *   theme: dark\n * ));\n *\n * ---\n * @access public\n * @param {string} $name —  The theme name to be used with the Vue Material\n * @param {map} $palette [$md-default-palette] —  The theme palette\n */\n/**\n * Theme pieces of a given scss code for all pre registered themes.\n * ---\n * Usage example:\n *\n * .md-button {\n *   min-width: 88px;\n *   height: 40px;\n *   display: inline-block;\n *   border-radius: 2px;\n *   transition: .3s ease;\n *\n *   @include md-theme-component() {\n *     background: md-theme(primary);\n *     color: md-theme(text-primary);\n *   }\n *\n *   &.md-accent {\n *     @include md-theme-component() {\n *       background: md-theme(accent);\n *       color: md-theme(text-accent);\n *     };\n *   }\n * }\n */\n/**\n * Theme pieces of a given scss code for all pre registered themes based on parent.\n * ---\n * Usage example:\n *\n * .md-foo {\n *   @include md-theme-component-relative() {\n *     @include md-theme-property(background, primary);\n *   }\n * }\n */\n/**\n * Theme a single css property\n * ---\n * Usage example:\n *\n * .md-button {\n *   min-width: 88px;\n *   height: 40px;\n *   display: inline-block;\n *   border-radius: 2px;\n *   transition: .3s ease;\n *\n *   @include md-theme-component() {\n *     @include md-theme-property(background, primary);\n *     @include md-theme-property(color, text-primary, primary);\n *   }\n *\n *   &.md-accent {\n *     @include md-theme-component() {\n *       @include md-theme-property(background, accent);\n *       @include md-theme-property(color, text-primary, accent);\n *     }\n *   }\n * }\n *\n * ---\n * @access public\n * @param {string} $property —  The css property\n * @param {string} $type —  A palette type\n * @param {string} $background —  The background color to analyse contrast\n */\n/**\n * Theme a single css property by\n * ---\n * Usage example:\n *\n * .md-button {\n *   min-width: 88px;\n *   height: 40px;\n *   display: inline-block;\n *   border-radius: 2px;\n *   transition: .3s ease;\n *\n *   @include md-theme-component() {\n *     @include md-theme-property-by-hue(background, grey, 100, toolbar, background);\n *     @include md-theme-property(color, text-primary, background);\n *   }\n * }\n *\n * ---\n * @access public\n * @param {string} $property —  The css property\n * @param {string} $color —  A valid material palette color name\n * @param {string} $hue —  The hue amount to get the hex color\n * @param {string} $type —  The type of variable\n * @param {string} $variant —  The type of constrasted variable\n */\n/**\n * Text and Titles - Implement all guidelines for text content\n */\n.md-caption {\n  font-size: 12px;\n  font-weight: 400;\n  letter-spacing: .02em;\n  line-height: 17px; }\n\n.md-body-1, body {\n  font-size: 14px;\n  font-weight: 400;\n  letter-spacing: .01em;\n  line-height: 20px; }\n\n.md-body-2 {\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: .01em;\n  line-height: 24px; }\n\n.md-subheading {\n  font-size: 16px;\n  font-weight: 400;\n  letter-spacing: .01em;\n  line-height: 24px; }\n\n.md-title {\n  font-size: 20px;\n  font-weight: 500;\n  letter-spacing: .005em;\n  line-height: 26px; }\n\n.md-headline {\n  font-size: 24px;\n  font-weight: 400;\n  letter-spacing: 0;\n  line-height: 32px; }\n\n.md-display-1 {\n  font-size: 34px;\n  font-weight: 400;\n  letter-spacing: 0;\n  line-height: 40px; }\n\n.md-display-2 {\n  font-size: 45px;\n  font-weight: 400;\n  letter-spacing: 0;\n  line-height: 48px; }\n\n.md-display-3 {\n  font-size: 56px;\n  font-weight: 400;\n  letter-spacing: -.005em;\n  line-height: 58px; }\n\n.md-display-4 {\n  font-size: 112px;\n  font-weight: 300;\n  letter-spacing: -.01em;\n  line-height: 112px; }\n\n/**\n * Links and Buttons - Create consise links across all the application\n */\n/*\n   ========================================================================== */\na:not(.md-button) {\n  text-decoration: none; }\n  a:not(.md-button):hover {\n    opacity: .8;\n    text-decoration: underline; }\n\nbutton:focus {\n  outline: none; }\n", ""]);

// exports


/***/ })
/******/ ]);