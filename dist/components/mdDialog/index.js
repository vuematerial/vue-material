/*!
* Vue Material v0.7.5
* Made with love by Marcos Moura
* Released under the MIT License.
*/   
!(function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VueMaterial=e():t.VueMaterial=e()})(this,(function(){return (function(t){function e(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=457)})({0:function(t,e){t.exports=function(t,e,n,o,i){var l,r=t=t||{},s=typeof t.default;"object"!==s&&"function"!==s||(l=t,r=t.default);var d="function"==typeof r?r.options:r;e&&(d.render=e.render,d.staticRenderFns=e.staticRenderFns),o&&(d._scopeId=o);var a;if(i?(a=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},d._ssrRegister=a):n&&(a=n),a){var c=d.functional,u=c?d.render:d.beforeCreate;c?d.render=function(t,e){return a.call(e),u(t,e)}:d.beforeCreate=u?[].concat(u,a):[a]}return{esModule:l,exports:r,options:d}}},1:function(t,e,n){"use strict";function o(t){if(!t)return null;var e=t.mdTheme;return e||"md-theme"!==t.$options._componentTag||(e=t.mdName),e||o(t.$parent)}Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{mdTheme:String},computed:{mdEffectiveTheme:function(){return o(this)||this.$material.currentTheme},themeClass:function(){return this.$material.prefix+this.mdEffectiveTheme}},watch:{mdTheme:function(t){this.$material.useTheme(t)}},beforeMount:function(){var t=this.mdTheme;this.$material.useTheme(t||"default")}},t.exports=e.default},174:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function i(t){t.component("md-dialog",r.default),t.component("md-dialog-title",d.default),t.component("md-dialog-content",c.default),t.component("md-dialog-actions",m.default),t.component("md-dialog-alert",p.default),t.component("md-dialog-confirm",g.default),t.component("md-dialog-prompt",_.default),t.material.styles.push(x.default)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var l=n(175),r=o(l),s=n(179),d=o(s),a=n(182),c=o(a),u=n(185),m=o(u),f=n(188),p=o(f),h=n(191),g=o(h),v=n(194),_=o(v),C=n(197),x=o(C);t.exports=e.default},175:function(t,e,n){function o(t){n(176)}var i=n(0)(n(177),n(178),o,null,null);t.exports=i.exports},176:function(t,e){},177:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),l=o(i),r=n(42),s=o(r);e.default={name:"md-dialog",props:{mdClickOutsideToClose:{type:Boolean,default:!0},mdEscToClose:{type:Boolean,default:!0},mdBackdrop:{type:Boolean,default:!0},mdOpenFrom:String,mdCloseTo:String,mdFullscreen:{type:Boolean,default:!1}},mixins:[l.default],data:function(){return{active:!1,transitionOff:!1,dialogTransform:""}},computed:{classes:function(){return{"md-active":this.active}},dialogClasses:function(){return{"md-fullscreen":this.mdFullscreen,"md-transition-off":this.transitionOff,"md-reference":this.mdOpenFrom||this.mdCloseTo}},styles:function(){return{transform:this.dialogTransform}}},methods:{removeDialog:function(){document.body.contains(this.dialogElement)&&this.$el.parentNode.removeChild(this.$el)},calculateDialogPos:function(t){var e=document.querySelector(t);if(e){var n=e.getBoundingClientRect(),o=this.dialogInnerElement.getBoundingClientRect(),i=n.width/o.width,l=n.height/o.height,r={top:-(o.top-n.top),left:-(o.left-n.left+n.width)};n.top>o.top+o.height&&(r.top=n.top-o.top),n.left>o.left+o.width&&(r.left=n.left-o.left-n.width),this.dialogTransform="translate3D("+r.left+"px, "+r.top+"px, 0) scale("+i+", "+l+")"}},open:function(){var t=this;document.body.appendChild(this.dialogElement),this.transitionOff=!0,this.calculateDialogPos(this.mdOpenFrom),window.setTimeout((function(){t.dialogElement.focus(),t.transitionOff=!1,t.active=!0})),this.$emit("open")},closeOnEsc:function(){this.mdEscToClose&&this.close()},close:function(){var t=this;document.body.contains(this.dialogElement)&&this.$nextTick((function(){var e=function e(){var n=t.dialogElement.querySelector(".md-ripple.md-active");n&&n.classList.remove("md-active"),t.dialogInnerElement.removeEventListener(s.default,e),document.body.removeChild(t.dialogElement),t.dialogTransform=""};t.transitionOff=!0,t.dialogTransform="",t.calculateDialogPos(t.mdCloseTo),window.setTimeout((function(){t.transitionOff=!1,t.active=!1,t.dialogInnerElement.addEventListener(s.default,e)})),t.$emit("close")}))}},mounted:function(){var t=this;this.$nextTick((function(){t.dialogElement=t.$el,t.dialogInnerElement=t.$refs.dialog,t.removeDialog()}))},beforeDestroy:function(){this.removeDialog()}},t.exports=e.default},178:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"md-dialog-container",class:[t.themeClass,t.classes],attrs:{tabindex:"0"},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"esc",27))return null;e.stopPropagation(),t.closeOnEsc(e)}}},[n("div",{ref:"dialog",staticClass:"md-dialog",class:t.dialogClasses,style:t.styles},[t._t("default")],2),t._v(" "),t.mdBackdrop?n("md-backdrop",{ref:"backdrop",staticClass:"md-dialog-backdrop",class:t.classes,on:{close:function(e){t.mdClickOutsideToClose&&t.close()}}}):t._e()],1)},staticRenderFns:[]}},179:function(t,e,n){var o=n(0)(n(180),n(181),null,null,null);t.exports=o.exports},180:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"md-dialog-title"},t.exports=e.default},181:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"md-dialog-title md-title"},[t._t("default")],2)},staticRenderFns:[]}},182:function(t,e,n){var o=n(0)(n(183),n(184),null,null,null);t.exports=o.exports},183:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"md-dialog-content"},t.exports=e.default},184:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"md-dialog-content"},[t._t("default")],2)},staticRenderFns:[]}},185:function(t,e,n){var o=n(0)(n(186),n(187),null,null,null);t.exports=o.exports},186:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"md-dialog-actions"},t.exports=e.default},187:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"md-dialog-actions"},[t._t("default")],2)},staticRenderFns:[]}},188:function(t,e,n){var o=n(0)(n(189),n(190),null,null,null);t.exports=o.exports},189:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"md-dialog-alert",props:{mdTitle:String,mdContent:String,mdContentHtml:String,mdOkText:{type:String,default:"Ok"}},data:function(){return{debounce:!1}},methods:{fireCloseEvent:function(){this.debounce||this.$emit("close")},open:function(){this.$emit("open"),this.debounce=!1,this.$refs.dialog.open()},close:function(){this.fireCloseEvent(),this.debounce=!0,this.$refs.dialog.close()}},mounted:function(){if(!this.mdContent&&!this.mdContentHtml)throw new Error("Missing md-content or md-content-html attributes")}},t.exports=e.default},190:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("md-dialog",{ref:"dialog",staticClass:"md-dialog-alert",on:{close:function(e){t.fireCloseEvent()}}},[t.mdTitle?n("md-dialog-title",[t._v(t._s(t.mdTitle))]):t._e(),t._v(" "),t.mdContentHtml?n("md-dialog-content",{domProps:{innerHTML:t._s(t.mdContentHtml)}}):n("md-dialog-content",[t._v(t._s(t.mdContent))]),t._v(" "),n("md-dialog-actions",[n("md-button",{staticClass:"md-primary",on:{click:function(e){t.close()}}},[t._v(t._s(t.mdOkText))])],1)],1)},staticRenderFns:[]}},191:function(t,e,n){var o=n(0)(n(192),n(193),null,null,null);t.exports=o.exports},192:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"md-dialog-confirm",props:{mdTitle:String,mdContent:String,mdContentHtml:String,mdOkText:{type:String,default:"Ok"},mdCancelText:{type:String,default:"Cancel"}},data:function(){return{debounce:!1}},methods:{fireCloseEvent:function(t){this.debounce||this.$emit("close",t)},open:function(){this.$emit("open"),this.debounce=!1,this.$refs.dialog.open()},close:function(t){this.fireCloseEvent(t),this.debounce=!0,this.$refs.dialog.close()}},mounted:function(){if(!this.mdContent&&!this.mdContentHtml)throw new Error("Missing md-content or md-content-html attributes")}},t.exports=e.default},193:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("md-dialog",{ref:"dialog",staticClass:"md-dialog-confirm",on:{close:function(e){t.fireCloseEvent("cancel")}}},[t.mdTitle?n("md-dialog-title",[t._v(t._s(t.mdTitle))]):t._e(),t._v(" "),t.mdContentHtml?n("md-dialog-content",{domProps:{innerHTML:t._s(t.mdContentHtml)}}):n("md-dialog-content",[t._v(t._s(t.mdContent))]),t._v(" "),n("md-dialog-actions",[n("md-button",{staticClass:"md-primary",on:{click:function(e){t.close("cancel")}}},[t._v(t._s(t.mdCancelText))]),t._v(" "),n("md-button",{staticClass:"md-primary",on:{click:function(e){t.close("ok")}}},[t._v(t._s(t.mdOkText))])],1)],1)},staticRenderFns:[]}},194:function(t,e,n){var o=n(0)(n(195),n(196),null,null,null);t.exports=o.exports},195:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"md-dialog-prompt",props:{value:{type:[String,Number],required:!0},mdTitle:String,mdContent:String,mdContentHtml:String,mdOkText:{type:String,default:"Ok"},mdCancelText:{type:String,default:"Cancel"},mdInputId:String,mdInputName:String,mdInputMaxlength:[String,Number],mdInputPlaceholder:String},data:function(){return{debounce:!1}},methods:{fireCloseEvent:function(t){this.debounce||this.$emit("close",t)},open:function(){var t=this;this.$emit("open"),this.debounce=!1,this.$refs.dialog.open(),window.setTimeout((function(){t.$refs.input.$el.focus()}))},close:function(t){this.fireCloseEvent(t),this.debounce=!0,this.$refs.dialog.close()},confirmValue:function(){this.$emit("input",this.$refs.input.$el.value),this.close("ok")}}},t.exports=e.default},196:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("md-dialog",{ref:"dialog",staticClass:"md-dialog-prompt",on:{close:function(e){t.fireCloseEvent("cancel")}}},[t.mdTitle?n("md-dialog-title",[t._v(t._s(t.mdTitle))]):t._e(),t._v(" "),t.mdContentHtml?n("md-dialog-content",{domProps:{innerHTML:t._s(t.mdContentHtml)}}):t._e(),t._v(" "),t.mdContent?n("md-dialog-content",[t._v(t._s(t.mdContent))]):t._e(),t._v(" "),n("md-dialog-content",[n("md-input-container",[n("md-input",{ref:"input",attrs:{id:t.mdInputId,name:t.mdInputName,maxlength:t.mdInputMaxlength,placeholder:t.mdInputPlaceholder,value:t.value},nativeOn:{keydown:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13))return null;t.confirmValue(e)}}})],1)],1),t._v(" "),n("md-dialog-actions",[n("md-button",{staticClass:"md-primary",on:{click:function(e){t.close("cancel")}}},[t._v(t._s(t.mdCancelText))]),t._v(" "),n("md-button",{staticClass:"md-primary",on:{click:t.confirmValue}},[t._v(t._s(t.mdOkText))])],1)],1)},staticRenderFns:[]}},197:function(t,e){t.exports=".THEME_NAME.md-dialog-container .md-dialog{background-color:BACKGROUND-COLOR;color:BACKGROUND-CONTRAST}\n"},42:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=(function(){var t=document.createElement("span"),e={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(var n in e)if(void 0!==t.style[n])return e[n]})(),t.exports=e.default},457:function(t,e,n){t.exports=n(174)}})}));