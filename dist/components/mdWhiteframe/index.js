/*!
* Vue Material v0.7.5
* Made with love by Marcos Moura
* Released under the MIT License.
*/   
!(function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueMaterial=t():e.VueMaterial=t()})(this,(function(){return (function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=482)})({0:function(e,t){e.exports=function(e,t,n,r,o){var i,s=e=e||{},u=typeof e.default;"object"!==u&&"function"!==u||(i=e,s=e.default);var a="function"==typeof s?s.options:s;t&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns),r&&(a._scopeId=r);var f;if(o?(f=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},a._ssrRegister=f):n&&(f=n),f){var d=a.functional,c=d?a.render:a.beforeCreate;d?a.render=function(e,t){return f.call(t),c(e,t)}:a.beforeCreate=c?[].concat(c,f):[f]}return{esModule:i,exports:s,options:a}}},441:function(e,t,n){"use strict";function r(e){e.component("md-whiteframe",i.default)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var o=n(442),i=(function(e){return e&&e.__esModule?e:{default:e}})(o);e.exports=t.default},442:function(e,t,n){function r(e){n(443)}var o=n(0)(n(444),null,r,null,null);e.exports=o.exports},443:function(e,t){},444:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"md-whiteframe",props:{mdElevation:{type:[String,Number],default:1},mdTag:{type:String,default:"div"}},computed:{classes:function(){var e=parseInt(this.mdElevation,10),t="md-whiteframe-";return isNaN(e)||"number"!=typeof e?this.mdElevation.indexOf("dp")>-1&&(t+=this.mdElevation):(t+=e,t+="dp"),t}},render:function(e){return e(this.mdTag,{staticClass:"md-whiteframe",class:this.classes},this.$slots.default)}},e.exports=t.default},482:function(e,t,n){e.exports=n(441)}})}));