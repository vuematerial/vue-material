/*!
* Vue Material v0.7.2
* Made with love by Marcos Moura
* Released under the MIT License.
*/   
!(function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VueMaterial=e():t.VueMaterial=e()})(this,(function(){return (function(t){function e(d){if(n[d])return n[d].exports;var r=n[d]={i:d,l:!1,exports:{}};return t[d].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,d){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:d})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=451)})({0:function(t,e){t.exports=function(t,e,n,d,r){var a,o=t=t||{},c=typeof t.default;"object"!==c&&"function"!==c||(a=t,o=t.default);var i="function"==typeof o?o.options:o;e&&(i.render=e.render,i.staticRenderFns=e.staticRenderFns),d&&(i._scopeId=d);var m;if(r?(m=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},i._ssrRegister=m):n&&(m=n),m){var s=i.functional,u=s?i.render:i.beforeCreate;s?i.render=function(t,e){return m.call(e),u(t,e)}:i.beforeCreate=u?[].concat(u,m):[m]}return{esModule:a,exports:o,options:i}}},1:function(t,e,n){"use strict";function d(t){if(!t)return null;var e=t.mdTheme;return e||"md-theme"!==t.$options._componentTag||(e=t.mdName),e||d(t.$parent)}Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{mdTheme:String},computed:{mdEffectiveTheme:function(){return d(this)||this.$material.currentTheme},themeClass:function(){return this.$material.prefix+this.mdEffectiveTheme}},watch:{mdTheme:function(t){this.$material.useTheme(t)}},beforeMount:function(){var t=this.mdTheme;this.$material.useTheme(t||"default")}},t.exports=e.default},132:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var d=n(1),r=(function(t){return t&&t.__esModule?t:{default:t}})(d);e.default={name:"md-card",props:{mdWithHover:Boolean},mixins:[r.default],computed:{classes:function(){return{"md-with-hover":this.mdWithHover}}}},t.exports=e.default},133:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"md-card-actions"},t.exports=e.default},134:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"md-card-area",props:{mdInset:Boolean},computed:{classes:function(){return{"md-inset":this.mdInset}}}},t.exports=e.default},135:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"md-card-content"},t.exports=e.default},136:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"md-card-expand",methods:{setContentMargin:function(){this.content.style.marginTop=-this.content.offsetHeight+"px"},toggle:function(){this.$refs.expand.classList.toggle("md-active")},onWindowResize:function(){window.requestAnimationFrame(this.setContentMargin)}},mounted:function(){var t=this;window.setTimeout((function(){t.trigger=t.$el.querySelector("[md-expand-trigger]"),t.content=t.$el.querySelector(".md-card-content"),t.content&&(t.setContentMargin(),t.trigger.addEventListener("click",t.toggle),window.addEventListener("resize",t.onWindowResize))}),200)},destroyed:function(){this.content&&(this.trigger.removeEventListener("click",this.toggle),window.removeEventListener("resize",this.onWindowResize))}},t.exports=e.default},137:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"md-card-header"},t.exports=e.default},138:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"md-card-header-text",mounted:function(){this.parentClasses=this.$parent.$el.classList,this.parentClasses.contains("md-card-header")&&(this.insideParent=!0,this.parentClasses.add("md-card-header-flex"))},destroyed:function(){this.parentClasses.remove("md-card-header-flex")}},t.exports=e.default},139:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"md-card-media",props:{mdRatio:String,mdMedium:Boolean,mdBig:Boolean},computed:{classes:function(){var t={"md-16-9":"16:9"===this.mdRatio||"16/9"===this.mdRatio,"md-4-3":"4:3"===this.mdRatio||"4/3"===this.mdRatio,"md-1-1":"1:1"===this.mdRatio||"1/1"===this.mdRatio};return(this.mdMedium||this.mdBig)&&(t={"md-medium":this.mdMedium,"md-big":this.mdBig}),t}}},t.exports=e.default},140:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"md-card-media-actions"},t.exports=e.default},141:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var d=n(65),r=(function(t){return t&&t.__esModule?t:{default:t}})(d);e.default={name:"md-card-media-cover",props:{mdTextScrim:Boolean,mdSolid:Boolean},data:function(){return{backdropBg:{}}},computed:{classes:function(){return{"md-text-scrim":this.mdTextScrim,"md-solid":this.mdSolid}},styles:function(){return{background:this.backdropBg}}},methods:{applyScrimColor:function(t){this.$refs.backdrop&&(this.backdropBg="linear-gradient(to bottom, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, "+t/2+") 66%, rgba(0, 0, 0, "+t+") 100%)")},applySolidColor:function(t){var e=this.$el.querySelector(".md-card-area");e&&(e.style.background="rgba(0, 0, 0, "+t+")")}},mounted:function(){var t=this,e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:.6;t.mdTextScrim?t.applyScrimColor(e):t.mdSolid&&t.applySolidColor(e)},n=this.$el.querySelector("img");n&&(this.mdTextScrim||this.mdSolid)&&(0,r.default)(n,(function(t){var n=(100*Math.abs(256-t)/256+15)/100;n>=.7&&(n=.7),e(n)}),e)}},t.exports=e.default},235:function(t,e){},269:function(t,e){t.exports=".THEME_NAME.md-card{background-color:BACKGROUND-COLOR}.THEME_NAME.md-card.md-primary{background-color:PRIMARY-COLOR;color:PRIMARY-CONTRAST}.THEME_NAME.md-card.md-primary .md-card-header .md-icon-button:not(.md-primary):not(.md-warn):not(.md-accent) .md-icon,.THEME_NAME.md-card.md-primary .md-card-actions .md-icon-button:not(.md-primary):not(.md-warn):not(.md-accent) .md-icon{color:PRIMARY-CONTRAST-0.87}.THEME_NAME.md-card.md-primary .md-input-container.md-input-focused input,.THEME_NAME.md-card.md-primary .md-input-container.md-input-focused textarea{color:PRIMARY-CONTRAST;text-shadow:0 0 0 PRIMARY-CONTRAST}.THEME_NAME.md-card.md-primary .md-input-container.md-input-focused label,.THEME_NAME.md-card.md-primary .md-input-container.md-input-focused .md-icon:not(.md-icon-delete){color:PRIMARY-CONTRAST}.THEME_NAME.md-card.md-primary .md-input-container:after{background-color:PRIMARY-CONTRAST}.THEME_NAME.md-card.md-primary .md-input-container input,.THEME_NAME.md-card.md-primary .md-input-container textarea{color:PRIMARY-CONTRAST;text-shadow:0 0 0 PRIMARY-CONTRAST}.THEME_NAME.md-card.md-primary .md-input-container input::-webkit-input-placeholder,.THEME_NAME.md-card.md-primary .md-input-container textarea::-webkit-input-placeholder{color:PRIMARY-CONTRAST-0.54}.THEME_NAME.md-card.md-primary .md-input-container label,.THEME_NAME.md-card.md-primary .md-input-container .md-icon:not(.md-icon-delete){color:PRIMARY-CONTRAST}.THEME_NAME.md-card.md-accent{background-color:ACCENT-COLOR;color:ACCENT-CONTRAST}.THEME_NAME.md-card.md-accent .md-card-header .md-icon-button:not(.md-primary):not(.md-warn):not(.md-accent) .md-icon,.THEME_NAME.md-card.md-accent .md-card-actions .md-icon-button:not(.md-primary):not(.md-warn):not(.md-accent) .md-icon{color:ACCENT-CONTRAST-0.87}.THEME_NAME.md-card.md-accent .md-input-container.md-input-focused input,.THEME_NAME.md-card.md-accent .md-input-container.md-input-focused textarea{color:ACCENT-CONTRAST;text-shadow:0 0 0 ACCENT-CONTRAST}.THEME_NAME.md-card.md-accent .md-input-container.md-input-focused label,.THEME_NAME.md-card.md-accent .md-input-container.md-input-focused .md-icon:not(.md-icon-delete){color:ACCENT-CONTRAST}.THEME_NAME.md-card.md-accent .md-input-container:after{background-color:ACCENT-CONTRAST}.THEME_NAME.md-card.md-accent .md-input-container input,.THEME_NAME.md-card.md-accent .md-input-container textarea{color:ACCENT-CONTRAST;text-shadow:0 0 0 ACCENT-CONTRAST}.THEME_NAME.md-card.md-accent .md-input-container input::-webkit-input-placeholder,.THEME_NAME.md-card.md-accent .md-input-container textarea::-webkit-input-placeholder{color:ACCENT-CONTRAST-0.54}.THEME_NAME.md-card.md-accent .md-input-container label,.THEME_NAME.md-card.md-accent .md-input-container .md-icon:not(.md-icon-delete){color:ACCENT-CONTRAST}.THEME_NAME.md-card.md-warn{background-color:WARN-COLOR;color:WARN-CONTRAST}.THEME_NAME.md-card.md-warn .md-card-header .md-icon-button:not(.md-primary):not(.md-warn):not(.md-accent) .md-icon,.THEME_NAME.md-card.md-warn .md-card-actions .md-icon-button:not(.md-primary):not(.md-warn):not(.md-accent) .md-icon{color:WARN-CONTRAST-0.87}.THEME_NAME.md-card.md-warn .md-input-container.md-input-focused input,.THEME_NAME.md-card.md-warn .md-input-container.md-input-focused textarea{color:WARN-CONTRAST;text-shadow:0 0 0 WARN-CONTRAST}.THEME_NAME.md-card.md-warn .md-input-container.md-input-focused label,.THEME_NAME.md-card.md-warn .md-input-container.md-input-focused .md-icon:not(.md-icon-delete){color:WARN-CONTRAST}.THEME_NAME.md-card.md-warn .md-input-container:after{background-color:WARN-CONTRAST}.THEME_NAME.md-card.md-warn .md-input-container input,.THEME_NAME.md-card.md-warn .md-input-container textarea{color:WARN-CONTRAST;text-shadow:0 0 0 WARN-CONTRAST}.THEME_NAME.md-card.md-warn .md-input-container input::-webkit-input-placeholder,.THEME_NAME.md-card.md-warn .md-input-container textarea::-webkit-input-placeholder{color:WARN-CONTRAST-0.54}.THEME_NAME.md-card.md-warn .md-input-container label,.THEME_NAME.md-card.md-warn .md-input-container .md-icon:not(.md-icon-delete){color:WARN-CONTRAST}.THEME_NAME.md-card .md-card-header .md-icon-button:not(.md-primary):not(.md-warn):not(.md-accent) .md-icon,.THEME_NAME.md-card .md-card-actions .md-icon-button:not(.md-primary):not(.md-warn):not(.md-accent) .md-icon{color:BACKGROUND-CONTRAST-0.54}.THEME_NAME.md-card>.md-card-area:after{background-color:BACKGROUND-CONTRAST-0.12}.THEME_NAME.md-card .md-card-media-cover.md-text-scrim .md-backdrop{background:linear-gradient(to bottom, BACKGROUND-CONTRAST-0.0 20%, BACKGROUND-CONTRAST-0.275 66%, BACKGROUND-CONTRAST-0.55 100%)}.THEME_NAME.md-card .md-card-media-cover.md-solid .md-card-area{background-color:BACKGROUND-CONTRAST-0.4}.THEME_NAME.md-card .md-card-expand .md-card-actions{background-color:BACKGROUND-COLOR}\n"},301:function(t,e,n){function d(t){n(235)}var r=n(0)(n(132),n(388),d,null,null);t.exports=r.exports},302:function(t,e,n){var d=n(0)(n(133),n(399),null,null,null);t.exports=d.exports},303:function(t,e,n){var d=n(0)(n(134),n(383),null,null,null);t.exports=d.exports},304:function(t,e,n){var d=n(0)(n(135),n(428),null,null,null);t.exports=d.exports},305:function(t,e,n){var d=n(0)(n(136),n(376),null,null,null);t.exports=d.exports},306:function(t,e,n){var d=n(0)(n(137),n(421),null,null,null);t.exports=d.exports},307:function(t,e,n){var d=n(0)(n(138),n(415),null,null,null);t.exports=d.exports},308:function(t,e,n){var d=n(0)(n(139),n(381),null,null,null);t.exports=d.exports},309:function(t,e,n){var d=n(0)(n(140),n(372),null,null,null);t.exports=d.exports},310:function(t,e,n){var d=n(0)(n(141),n(379),null,null,null);t.exports=d.exports},372:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"md-card-media-actions"},[t._t("default")],2)},staticRenderFns:[]}},376:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{ref:"expand",staticClass:"md-card-expand"},[t._t("default")],2)},staticRenderFns:[]}},379:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"md-card-media-cover",class:t.classes},[t._t("default"),t._v(" "),t.mdTextScrim?n("div",{ref:"backdrop",staticClass:"md-card-backdrop",style:t.styles}):t._e()],2)},staticRenderFns:[]}},381:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"md-card-media",class:t.classes},[t._t("default")],2)},staticRenderFns:[]}},383:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"md-card-area",class:t.classes},[t._t("default")],2)},staticRenderFns:[]}},388:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"md-card",class:[t.themeClass,t.classes]},[t._t("default")],2)},staticRenderFns:[]}},399:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"md-card-actions"},[t._t("default")],2)},staticRenderFns:[]}},415:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"md-card-header-text"},[t._t("default")],2)},staticRenderFns:[]}},421:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"md-card-header"},[t._t("default")],2)},staticRenderFns:[]}},428:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"md-card-content"},[t._t("default")],2)},staticRenderFns:[]}},451:function(t,e,n){t.exports=n(85)},65:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var d=function(t,e,n){var d=document.createElement("canvas");t.crossOrigin="Anonymous",t.onload=function(){var t=0,n=void 0,r=void 0,a=void 0,o=void 0,c=void 0,i=void 0,m=void 0;d.width=this.width,d.height=this.height,n=d.getContext("2d"),n.drawImage(this,0,0),r=n.getImageData(0,0,d.width,d.height),a=r.data;for(var s=0,u=a.length;s<u;s+=4)o=a[s],c=a[s+1],i=a[s+2],m=Math.floor((o+c+i)/3),t+=m;e(Math.floor(t/(this.width*this.height)))},t.onerror=n};e.default=d,t.exports=e.default},85:function(t,e,n){"use strict";function d(t){return t&&t.__esModule?t:{default:t}}function r(t){t.component("md-card",o.default),t.component("md-card-media",i.default),t.component("md-card-media-cover",s.default),t.component("md-card-media-actions",l.default),t.component("md-card-header",f.default),t.component("md-card-header-text",T.default),t.component("md-card-content",_.default),t.component("md-card-actions",A.default),t.component("md-card-area",R.default),t.component("md-card-expand",v.default),t.material.styles.push(O.default)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var a=n(301),o=d(a),c=n(308),i=d(c),m=n(310),s=d(m),u=n(309),l=d(u),p=n(306),f=d(p),E=n(307),T=d(E),M=n(304),_=d(M),h=n(302),A=d(h),N=n(303),R=d(N),C=n(305),v=d(C),x=n(269),O=d(x);t.exports=e.default}})}));