/*!
* Vue Material v0.7.1
* Made with love by Marcos Moura
* Released under the MIT License.
*/   
!(function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueMaterial=t():e.VueMaterial=t()})(this,(function(){return (function(e){function t(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=410)})({0:function(e,t){e.exports=function(e,t,n,i){var o,r=e=e||{},u=typeof e.default;"object"!==u&&"function"!==u||(o=e,r=e.default);var a="function"==typeof r?r.options:r;if(t&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns),n&&(a._scopeId=n),i){var s=a.computed||(a.computed={});Object.keys(i).forEach((function(e){var t=i[e];s[e]=function(){return t}}))}return{esModule:o,exports:r,options:a}}},1:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{mdTheme:String},data:function(){return{closestThemedParent:!1}},methods:{getClosestThemedParent:function(e){return!(!e||!e.$el||0===e._uid)&&(e.mdTheme||e.mdName?e:this.getClosestThemedParent(e.$parent))}},computed:{themeClass:function(){if(this.mdTheme)return"md-theme-"+this.mdTheme;var e=this.closestThemedParent.mdTheme;return e||(e=this.closestThemedParent?this.closestThemedParent.mdName:this.$material.currentTheme),"md-theme-"+e}},mounted:function(){this.closestThemedParent=this.getClosestThemedParent(this.$parent),this.$material.currentTheme||this.$material.setCurrentTheme("default")}},e.exports=t.default},103:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(e){e.component("md-input-container",u.default),e.component("md-input",s.default),e.component("md-textarea",l.default),e.material.styles.push(p.default)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var r=n(291),u=i(r),a=n(290),s=i(a),d=n(292),l=i(d),c=n(244),p=i(c);e.exports=t.default},12:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function e(t,n){return!(!t||!t.$el)&&(0!==t._uid&&(t.$el.classList.contains(n)?t:e(t.$parent,n)))};t.default=i,e.exports=t.default},122:function(e,t,n){var i,o,r;!(function(n,u){o=[t,e],i=u,r="function"==typeof i?i.apply(t,o):i,!(void 0!==r&&(e.exports=r))})(this,(function(e,t){"use strict";function n(e){function t(){var t=window.getComputedStyle(e,null);"vertical"===t.resize?e.style.resize="none":"both"===t.resize&&(e.style.resize="horizontal"),s="content-box"===t.boxSizing?-(parseFloat(t.paddingTop)+parseFloat(t.paddingBottom)):parseFloat(t.borderTopWidth)+parseFloat(t.borderBottomWidth),isNaN(s)&&(s=0),a()}function n(t){var n=e.style.width;e.style.width="0px",e.offsetWidth,e.style.width=n,e.style.overflowY=t}function i(e){for(var t=[];e&&e.parentNode&&e.parentNode instanceof Element;)e.parentNode.scrollTop&&t.push({node:e.parentNode,scrollTop:e.parentNode.scrollTop}),e=e.parentNode;return t}function o(){var t=e.style.height,n=i(e),o=document.documentElement&&document.documentElement.scrollTop;e.style.height="auto";var r=e.scrollHeight+s;return 0===e.scrollHeight?void(e.style.height=t):(e.style.height=r+"px",d=e.clientWidth,n.forEach((function(e){e.node.scrollTop=e.scrollTop})),void(o&&(document.documentElement.scrollTop=o)))}function a(){o();var t=Math.round(parseFloat(e.style.height)),i=window.getComputedStyle(e,null),r=Math.round(parseFloat(i.height));if(r!==t?"visible"!==i.overflowY&&(n("visible"),o(),r=Math.round(parseFloat(window.getComputedStyle(e,null).height))):"hidden"!==i.overflowY&&(n("hidden"),o(),r=Math.round(parseFloat(window.getComputedStyle(e,null).height))),l!==r){l=r;var a=u("autosize:resized");try{e.dispatchEvent(a)}catch(e){}}}if(e&&e.nodeName&&"TEXTAREA"===e.nodeName&&!r.has(e)){var s=null,d=e.clientWidth,l=null,c=function(){e.clientWidth!==d&&a()},p=function(t){window.removeEventListener("resize",c,!1),e.removeEventListener("input",a,!1),e.removeEventListener("keyup",a,!1),e.removeEventListener("autosize:destroy",p,!1),e.removeEventListener("autosize:update",a,!1),Object.keys(t).forEach((function(n){e.style[n]=t[n]})),r.delete(e)}.bind(e,{height:e.style.height,resize:e.style.resize,overflowY:e.style.overflowY,overflowX:e.style.overflowX,wordWrap:e.style.wordWrap});e.addEventListener("autosize:destroy",p,!1),"onpropertychange"in e&&"oninput"in e&&e.addEventListener("keyup",a,!1),window.addEventListener("resize",c,!1),e.addEventListener("input",a,!1),e.addEventListener("autosize:update",a,!1),e.style.overflowX="hidden",e.style.wordWrap="break-word",r.set(e,{destroy:p,update:a}),t()}}function i(e){var t=r.get(e);t&&t.destroy()}function o(e){var t=r.get(e);t&&t.update()}var r="function"==typeof Map?new Map:(function(){var e=[],t=[];return{has:function(t){return e.indexOf(t)>-1},get:function(n){return t[e.indexOf(n)]},set:function(n,i){e.indexOf(n)===-1&&(e.push(n),t.push(i))},delete:function(n){var i=e.indexOf(n);i>-1&&(e.splice(i,1),t.splice(i,1))}}})(),u=function(e){return new Event(e,{bubbles:!0})};try{new Event("test")}catch(e){u=function(e){var t=document.createEvent("Event");return t.initEvent(e,!0,!1),t}}var a=null;"undefined"==typeof window||"function"!=typeof window.getComputedStyle?(a=function(e){return e},a.destroy=function(e){return e},a.update=function(e){return e}):(a=function(e,t){return e&&Array.prototype.forEach.call(e.length?e:[e],(function(e){return n(e,t)})),e},a.destroy=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],i),e},a.update=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],o),e}),t.exports=a}))},153:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(62),r=i(o),u=n(12),a=i(u);t.default={mixins:[r.default],props:{type:{type:String,default:"text"}},mounted:function(){var e=this;this.$nextTick((function(){if(e.parentContainer=(0,a.default)(e.$parent,"md-input-container"),!e.parentContainer)throw e.$destroy(),new Error("You should wrap the md-input in a md-input-container");e.setParentDisabled(),e.setParentRequired(),e.setParentPlaceholder(),e.handleMaxLength(),e.updateValues()}))}},e.exports=t.default},154:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),r=i(o),u=n(59),a=i(u);t.default={props:{mdInline:Boolean,mdHasPassword:Boolean},mixins:[r.default],data:function(){return{value:"",input:!1,showPassword:!1,enableCounter:!1,hasSelect:!1,hasPlaceholder:!1,hasFile:!1,isDisabled:!1,isRequired:!1,isFocused:!1,counterLength:0,inputLength:0}},computed:{hasValue:function(){return(0,a.default)(this.value)?this.value.length>0:Boolean(this.value)},classes:function(){return{"md-input-inline":this.mdInline,"md-has-password":this.mdHasPassword,"md-has-select":this.hasSelect,"md-has-file":this.hasFile,"md-has-value":this.hasValue,"md-input-placeholder":this.hasPlaceholder,"md-input-disabled":this.isDisabled,"md-input-required":this.isRequired,"md-input-focused":this.isFocused}}},methods:{isInput:function(){return this.input&&"input"===this.input.tagName.toLowerCase()},togglePasswordType:function(){this.isInput()&&("password"===this.input.type?(this.input.type="text",this.showPassword=!0):(this.input.type="password",this.showPassword=!1),this.input.focus())},setValue:function(e){this.value=e}},mounted:function(){if(this.input=this.$el.querySelectorAll("input, textarea, select, .md-file")[0],!this.input)throw this.$destroy(),new Error("Missing input/select/textarea inside md-input-container")}},e.exports=t.default},155:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(122),r=i(o),u=n(62),a=i(u),s=n(12),d=i(s);t.default={mixins:[a.default],watch:{value:function(){var e=this;this.$nextTick((function(){r.default.update(e.$el)}))}},mounted:function(){var e=this;this.$nextTick((function(){if(e.parentContainer=(0,d.default)(e.$parent,"md-input-container"),!e.parentContainer)throw e.$destroy(),new Error("You should wrap the md-textarea in a md-input-container");e.setParentDisabled(),e.setParentRequired(),e.setParentPlaceholder(),e.handleMaxLength(),e.updateValues(),e.$el.getAttribute("rows")||e.$el.setAttribute("rows","1"),(0,r.default)(e.$el)}))},beforeDestroy:function(){r.default.destroy(this.$el)}},e.exports=t.default},208:function(e,t){},244:function(e,t){e.exports=".THEME_NAME.md-input-container.md-input-invalid:after{background-color:WARN-COLOR}.THEME_NAME.md-input-container.md-input-invalid label,.THEME_NAME.md-input-container.md-input-invalid input,.THEME_NAME.md-input-container.md-input-invalid textarea,.THEME_NAME.md-input-container.md-input-invalid .md-error,.THEME_NAME.md-input-container.md-input-invalid .md-count,.THEME_NAME.md-input-container.md-input-invalid .md-icon:not(.md-icon-delete){color:WARN-COLOR}.THEME_NAME.md-input-container.md-input-focused.md-input-inline label{color:rgba(0,0,0,0.54)}.THEME_NAME.md-input-container.md-input-focused.md-input-required label:after{color:WARN-COLOR}.THEME_NAME.md-input-container.md-input-focused:after{height:2px;background-color:PRIMARY-COLOR}.THEME_NAME.md-input-container.md-input-focused input,.THEME_NAME.md-input-container.md-input-focused textarea{color:PRIMARY-COLOR;text-shadow:0 0 0 BACKGROUND-CONTRAST;-webkit-text-fill-color:transparent}.THEME_NAME.md-input-container.md-input-focused label,.THEME_NAME.md-input-container.md-input-focused .md-icon:not(.md-icon-delete){color:PRIMARY-COLOR}.THEME_NAME.md-input-container.md-input-disabled label,.THEME_NAME.md-input-container.md-input-disabled input,.THEME_NAME.md-input-container.md-input-disabled textarea,.THEME_NAME.md-input-container.md-input-disabled .md-error,.THEME_NAME.md-input-container.md-input-disabled .md-count,.THEME_NAME.md-input-container.md-input-disabled .md-icon:not(.md-icon-delete),.THEME_NAME.md-input-container.md-input-disabled ::-webkit-input-placeholder{color:BACKGROUND-CONTRAST-0.38}.THEME_NAME.md-input-container .md-icon:not(.md-icon-delete):after{background:BACKGROUND-COLOR}\n"},290:function(e,t,n){var i=n(0)(n(153),n(347),null,null);e.exports=i.exports},291:function(e,t,n){n(208);var i=n(0)(n(154),n(349),null,null);e.exports=i.exports},292:function(e,t,n){var i=n(0)(n(155),n(376),null,null);e.exports=i.exports},347:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("input",{staticClass:"md-input",attrs:{type:e.type,disabled:e.disabled,required:e.required,placeholder:e.placeholder,maxlength:e.maxlength},domProps:{value:e.value},on:{focus:e.onFocus,blur:e.onBlur,input:e.onInput,keydown:[function(t){e._k(t.keyCode,"up",38)||e.onInput(t)},function(t){e._k(t.keyCode,"down",40)||e.onInput(t)}]}})},staticRenderFns:[]}},349:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"md-input-container",class:[e.themeClass,e.classes]},[e._t("default"),e._v(" "),e.enableCounter?n("span",{staticClass:"md-count"},[e._v(e._s(e.inputLength)+" / "+e._s(e.counterLength))]):e._e(),e._v(" "),e.mdHasPassword?n("md-button",{staticClass:"md-icon-button md-toggle-password",nativeOn:{click:function(t){e.togglePasswordType(t)}}},[n("md-icon",[e._v(e._s(e.showPassword?"visibility_off":"visibility"))])],1):e._e()],2)},staticRenderFns:[]}},376:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("textarea",{staticClass:"md-input",attrs:{disabled:e.disabled,required:e.required,placeholder:e.placeholder,maxlength:e.maxlength},domProps:{value:e.value},on:{focus:e.onFocus,blur:e.onBlur,input:e.onInput}})},staticRenderFns:[]}},410:function(e,t,n){e.exports=n(103)},59:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(e){return e&&e.constructor===Array};t.default=i,e.exports=t.default},62:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{value:[String,Number],disabled:Boolean,required:Boolean,maxlength:[Number,String],placeholder:String},watch:{value:function(e){this.setParentValue(e),this.updateValues(e)},disabled:function(){this.setParentDisabled()},required:function(){this.setParentRequired()},placeholder:function(){this.setParentPlaceholder()},maxlength:function(){this.handleMaxLength()}},methods:{handleMaxLength:function(){this.parentContainer.enableCounter=this.maxlength>0,this.parentContainer.counterLength=this.maxlength},setParentValue:function(e){this.parentContainer.setValue(e||this.$el.value)},setParentDisabled:function(){this.parentContainer.isDisabled=this.disabled},setParentRequired:function(){this.parentContainer.isRequired=this.required},setParentPlaceholder:function(){this.parentContainer.hasPlaceholder=!!this.placeholder},updateValues:function(e){var t=e||this.$el.value||this.value;this.setParentValue(t),this.parentContainer.inputLength=t?t.length:0},onFocus:function(){this.parentContainer&&(this.parentContainer.isFocused=!0)},onBlur:function(){this.parentContainer.isFocused=!1,this.setParentValue()},onInput:function(){this.updateValues(),this.$emit("change",this.$el.value),this.$emit("input",this.$el.value)}}},e.exports=t.default}})}));