/*!
 * vue-material v1.0.0-beta-16-10
 * Made with <3 by marcosmoura 2019
 * Released under the MIT License.
 */
!(function(e,t){var n,r;if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("vue"));else if("function"==typeof define&&define.amd)define(["vue"],t);else{n=t("object"==typeof exports?require("vue"):e.Vue);for(r in n)("object"==typeof exports?exports:e)[r]=n[r]}})("undefined"!=typeof self?self:this,(function(e){return (function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=527)})({0:function(e,t){e.exports=function(e,t,n,r,o,u){var a,s,i,l,c,f=e=e||{},d=typeof e.default;return"object"!==d&&"function"!==d||(a=e,f=e.default),s="function"==typeof f?f.options:f,t&&(s.render=t.render,s.staticRenderFns=t.staticRenderFns,s._compiled=!0),n&&(s.functional=!0),o&&(s._scopeId=o),u?(i=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(u)},s._ssrRegister=i):r&&(i=r),i&&(l=s.functional,c=l?s.render:s.beforeCreate,l?(s._injectStyles=i,s.render=function(e,t){return i.call(t),c(e,t)}):s.beforeCreate=c?[].concat(c,i):[i]),{esModule:a,exports:f,options:s}}},1:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o,u,a,s;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t={props:{mdTheme:null},computed:{$mdActiveTheme:function(){var e=u.default.enabled,t=u.default.getThemeName,n=u.default.getAncestorTheme;return e&&!1!==this.mdTheme?t(this.mdTheme||n(this)):null}}};return(0,s.default)(t,e)},o=n(4),u=r(o),a=n(6),s=r(a)},120:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u,a,s,i,l,c,f;Object.defineProperty(t,"__esModule",{value:!0}),u=Object.assign||function(e){var t,n,r;for(t=1;t<arguments.length;t++){n=arguments[t];for(r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(1),s=r(a),i=n(8),l=r(i),c=n(257),f=r(c),t.default=new s.default({name:"MdBadge",components:{MdBadgeStandalone:f.default},props:{mdContent:[String,Number],mdPosition:u({type:String,default:"top"},(0,l.default)("md-position",["top","bottom"])),mdDense:Boolean},computed:{hasDefaultSlot:function(){return!!this.$slots.default},badgeClasses:function(){var e,t=this.getStaticClass(),n=this.$vnode.data.class;return u((e={},o(e,"md-position-"+this.mdPosition,!0),o(e,"md-dense",this.mdDense),e),t,n)},styles:function(){var e=this.$vnode.data.staticStyle,t=this.$vnode.data.style;return u({},e,t)}},methods:{getStaticClass:function(){var e=this.$vnode.data.staticClass;return e?(function(){return e.split(" ").filter((function(e){return e})).reduce((function(e,t){return e[t]=!0,e}),{})})():{}}}})},121:function(e,t,n){"use strict";var r,o;Object.defineProperty(t,"__esModule",{value:!0}),r=n(1),o=(function(e){return e&&e.__esModule?e:{default:e}})(r),t.default=new o.default({name:"MdBadgeStandalone"})},2:function(t,n){t.exports=e},254:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o,u,a,s;Object.defineProperty(t,"__esModule",{value:!0}),o=n(3),u=r(o),a=n(255),s=r(a),t.default=function(e){(0,u.default)(e),e.component(s.default.name,s.default)}},255:function(e,t,n){"use strict";function r(e){n(256)}var o,u,a,s,i,l,c,f,d,m;Object.defineProperty(t,"__esModule",{value:!0}),o=n(120),u=n.n(o);for(a in o)"default"!==a&&(function(e){n.d(t,e,(function(){return o[e]}))})(a);s=n(260),i=n(0),l=!1,c=r,f=null,d=null,m=i(u.a,s.a,l,c,f,d),t.default=m.exports},256:function(e,t){},257:function(e,t,n){"use strict";function r(e){n(258)}var o,u,a,s,i,l,c,f,d,m;Object.defineProperty(t,"__esModule",{value:!0}),o=n(121),u=n.n(o);for(a in o)"default"!==a&&(function(e){n.d(t,e,(function(){return o[e]}))})(a);s=n(259),i=n(0),l=!1,c=r,f=null,d=null,m=i(u.a,s.a,l,c,f,d),t.default=m.exports},258:function(e,t){},259:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"md-badge",class:[e.$mdActiveTheme]},[e._t("default")],2)},o=[],u={render:r,staticRenderFns:o};t.a=u},260:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.hasDefaultSlot?n("div",{staticClass:"md-badge-content"},[e._t("default"),e._v(" "),n("md-badge-standalone",{class:e.badgeClasses,style:e.styles},[n("div",[e._v("\n      "+e._s(e.mdContent)+"\n    ")])])],2):n("md-badge-standalone",{class:e.badgeClasses,style:e.styles},[e._v("\n  "+e._s(e.mdContent)+"\n")])},o=[],u={render:r,staticRenderFns:o};t.a=u},3:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o,u,a,s,i;Object.defineProperty(t,"__esModule",{value:!0}),n(7),o=n(5),u=r(o),a=n(4),s=r(a),i=function(){var e=new u.default({ripple:!0,theming:{},locale:{startYear:1900,endYear:2099,dateFormat:"yyyy-MM-dd",days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],shorterDays:["S","M","T","W","T","F","S"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"],shorterMonths:["J","F","M","A","M","Ju","Ju","A","Se","O","N","D"],firstDayOfAWeek:0},router:{linkActiveClass:"router-link-active"}});return Object.defineProperties(e.theming,{metaColors:{get:function(){return s.default.metaColors},set:function(e){s.default.metaColors=e}},theme:{get:function(){return s.default.theme},set:function(e){s.default.theme=e}},enabled:{get:function(){return s.default.enabled},set:function(e){s.default.enabled=e}}}),e},t.default=function(e){e.material||(e.material=i(),e.prototype.$material=e.material)}},4:function(e,t,n){"use strict";var r,o,u,a,s;Object.defineProperty(t,"__esModule",{value:!0}),r=n(2),o=(function(e){return e&&e.__esModule?e:{default:e}})(r),u=null,a=null,s=null,t.default=new o.default({data:function(){return{prefix:"md-theme-",theme:"default",enabled:!0,metaColors:!1}},computed:{themeTarget:function(){return!this.$isServer&&document.documentElement},fullThemeName:function(){return this.getThemeName()}},watch:{enabled:{immediate:!0,handler:function(){var e=this.fullThemeName,t=this.themeTarget,n=this.enabled;t&&(n?(t.classList.add(e),this.metaColors&&this.setHtmlMetaColors(e)):(t.classList.remove(e),this.metaColors&&this.setHtmlMetaColors()))}},theme:function(e,t){var n=this.getThemeName,r=this.themeTarget;e=n(e),r.classList.remove(n(t)),r.classList.add(e),this.metaColors&&this.setHtmlMetaColors(e)},metaColors:function(e){e?this.setHtmlMetaColors(this.fullThemeName):this.setHtmlMetaColors()}},methods:{getAncestorTheme:function(e){var t,n=this;return e?(t=e.mdTheme,(function e(r){if(r){var o=r.mdTheme,u=r.$parent;return o&&o!==t?o:e(u)}return n.theme})(e.$parent)):null},getThemeName:function(e){var t=e||this.theme;return this.prefix+t},setMicrosoftColors:function(e){u&&u.setAttribute("content",e)},setThemeColors:function(e){a&&a.setAttribute("content",e)},setMaskColors:function(e){s&&s.setAttribute("color",e)},setHtmlMetaColors:function(e){var t,n="#fff";e&&(t=window.getComputedStyle(document.documentElement),n=t.getPropertyValue("--"+e+"-primary")),n&&(this.setMicrosoftColors(n),this.setThemeColors(n),this.setMaskColors(n))}},mounted:function(){var e=this;u=document.querySelector('[name="msapplication-TileColor"]'),a=document.querySelector('[name="theme-color"]'),s=document.querySelector('[rel="mask-icon"]'),this.enabled&&this.metaColors&&window.addEventListener("load",(function(){e.setHtmlMetaColors(e.fullThemeName)}))}})},5:function(e,t,n){"use strict";var r,o;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t={};return o.default.util.defineReactive(t,"reactive",e),t.reactive},r=n(2),o=(function(e){return e&&e.__esModule?e:{default:e}})(r)},527:function(e,t,n){e.exports=n(254)},6:function(e,t,n){!(function(t,n){e.exports=n()})(0,(function(){"use strict";function e(e){return!!e&&"object"==typeof e}function t(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||n(e)}function n(e){return e.$$typeof===f}function r(e){return Array.isArray(e)?[]:{}}function o(e,t){return!1!==t.clone&&t.isMergeableObject(e)?i(r(e),e,t):e}function u(e,t,n){return e.concat(t).map((function(e){return o(e,n)}))}function a(e,t){if(!t.customMerge)return i;var n=t.customMerge(e);return"function"==typeof n?n:i}function s(e,t,n){var r={};return n.isMergeableObject(e)&&Object.keys(e).forEach((function(t){r[t]=o(e[t],n)})),Object.keys(t).forEach((function(u){n.isMergeableObject(t[u])&&e[u]?r[u]=a(u,n)(e[u],t[u],n):r[u]=o(t[u],n)})),r}function i(e,t,n){var r,a,i;return n=n||{},n.arrayMerge=n.arrayMerge||u,n.isMergeableObject=n.isMergeableObject||l,r=Array.isArray(t),a=Array.isArray(e),i=r===a,i?r?n.arrayMerge(e,t,n):s(e,t,n):o(t,n)}var l=function(n){return e(n)&&!t(n)},c="function"==typeof Symbol&&Symbol.for,f=c?Symbol.for("react.element"):60103;return i.all=function(e,t){if(!Array.isArray(e))throw Error("first argument should be an array");return e.reduce((function(e,n){return i(e,n,t)}),{})},i}))},7:function(e,t){},8:function(e,t,n){"use strict";var r,o;Object.defineProperty(t,"__esModule",{value:!0}),r=n(2),o=(function(e){return e&&e.__esModule?e:{default:e}})(r),t.default=function(e,t){return{validator:function(n){return!!t.includes(n)||(o.default.util.warn("The "+e+" prop is invalid. Given value: "+n+". Available options: "+t.join(", ")+".",void 0),!1)}}}}})}));