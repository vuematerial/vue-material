webpackJsonp([86],{"./docs/app/pages/Components/BottomBar/examples/BarCustomTemplate.vue":function(e,t,s){"use strict";function o(e){s('./node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-3a07df00","scoped":true,"hasInlineConfig":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./docs/app/pages/Components/BottomBar/examples/BarCustomTemplate.vue')}var a,d,l,n,r,i,m,c,u,p;Object.defineProperty(t,"__esModule",{value:!0}),a=s("./node_modules/babel-loader/lib/index.js?cacheDirectory=true!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./docs/app/pages/Components/BottomBar/examples/BarCustomTemplate.vue"),d=s.n(a);for(l in a)"default"!==l&&(function(e){s.d(t,e,(function(){return a[e]}))})(l);n=s('./node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-3a07df00","hasScoped":true,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./docs/app/pages/Components/BottomBar/examples/BarCustomTemplate.vue'),r=s("./node_modules/vue-loader/lib/component-normalizer.js"),i=!1,m=o,c="data-v-3a07df00",u=null,p=r(d.a,n.a,i,m,c,u),t.default=p.exports},"./node_modules/babel-loader/lib/index.js?cacheDirectory=true!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./docs/app/pages/Components/BottomBar/examples/BarCustomTemplate.vue":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"BarCustomTemplate",data:function(){return{newPosts:0,checkInterval:null}},methods:{clearCheckPosts:function(){window.clearInterval(this.checkInterval),this.checkInterval=null},clearNewPosts:function(){this.clearCheckPosts(),this.newPosts=0},checkNewPosts:function(e){var t=this;"item-posts"===e||this.checkInterval||(this.checkInterval=window.setInterval((function(){99===t.newPosts?(t.newPosts="99+",t.clearCheckPosts()):t.newPosts++}),1e3))}},mounted:function(){this.checkNewPosts()}}},'./node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-3a07df00","scoped":true,"hasInlineConfig":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./docs/app/pages/Components/BottomBar/examples/BarCustomTemplate.vue':function(e,t){},'./node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-3a07df00","hasScoped":true,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./docs/app/pages/Components/BottomBar/examples/BarCustomTemplate.vue':function(e,t,s){"use strict";var o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"phone-viewport"},[s("md-bottom-bar",{staticClass:"md-accent",attrs:{"md-type":"shift"},on:{"md-changed":e.checkNewPosts}},[s("md-bottom-bar-item",{attrs:{"md-label":"Home","md-icon":"home"}}),e._v(" "),s("md-bottom-bar-item",{attrs:{"md-label":"Pages","md-icon":"pages"}}),e._v(" "),s("md-bottom-bar-item",{attrs:{id:"item-posts"},on:{click:e.clearNewPosts}},[s("md-icon",{staticClass:"md-bottom-bar-icon",attrs:{"md-src":"/assets/icon-whatshot.svg"}}),e._v(" "),s("span",{staticClass:"md-bottom-bar-label"},[e._v("Posts")]),e._v(" "),e.newPosts?s("i",{staticClass:"badge"},[e._v(e._s(e.newPosts))]):e._e()],1),e._v(" "),s("md-bottom-bar-item",{attrs:{"md-label":"Favorites","md-icon":"favorite"}})],1)],1)])},a=[],d={render:o,staticRenderFns:a};t.a=d}});