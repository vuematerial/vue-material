webpackJsonp([92],{"./docs/app/pages/Components/Autocomplete/examples/AutocompleteTemplate.vue":function(e,o,l){"use strict";function a(e){l('./node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-1dd3c6d1","scoped":true,"hasInlineConfig":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./docs/app/pages/Components/Autocomplete/examples/AutocompleteTemplate.vue')}var n,t,r,c,d,s,m,u,i,p;Object.defineProperty(o,"__esModule",{value:!0}),n=l("./node_modules/babel-loader/lib/index.js?cacheDirectory=true!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./docs/app/pages/Components/Autocomplete/examples/AutocompleteTemplate.vue"),t=l.n(n);for(r in n)"default"!==r&&(function(e){l.d(o,e,(function(){return n[e]}))})(r);c=l('./node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-1dd3c6d1","hasScoped":true,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./docs/app/pages/Components/Autocomplete/examples/AutocompleteTemplate.vue'),d=l("./node_modules/vue-loader/lib/component-normalizer.js"),s=!1,m=a,u="data-v-1dd3c6d1",i=null,p=d(t.a,c.a,s,m,u,i),o.default=p.exports},"./node_modules/babel-loader/lib/index.js?cacheDirectory=true!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./docs/app/pages/Components/Autocomplete/examples/AutocompleteTemplate.vue":function(e,o,l){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default={name:"AutocompleteTemplate",data:function(){return{value:null,colors:[{name:"Aqua",color:"#00ffff"},{name:"Aquamarine",color:"#7fffd4"},{name:"Azure",color:"#f0ffff"},{name:"Beige",color:"#f5f5dc"},{name:"Black",color:"#000000"},{name:"Blue",color:"#0000ff"},{name:"Brown",color:"#a52a2a"},{name:"Crimson",color:"#dc143c"},{name:"Cyan",color:"#00ffff"},{name:"Deep Pink",color:"#ff1493"},{name:"Dim Gray",color:"#696969"},{name:"Fuchsia",color:"#ff00ff"},{name:"Gold",color:"#ffd700"},{name:"Gray",color:"#808080"},{name:"Green",color:"#008000"},{name:"Green Yellow",color:"#adff2f"},{name:"Grey",color:"#808080"},{name:"Hotpink",color:"#ff69b4"},{name:"Indigo",color:"#4b0082"},{name:"Ivory",color:"#fffff0"},{name:"Khaki",color:"#f0e68c"},{name:"Lavender",color:"#e6e6fa"},{name:"Lime",color:"#00ff00"},{name:"Magenta",color:"#ff00ff"},{name:"Maroon",color:"#800000"},{name:"Navy",color:"#000080"},{name:"Olive",color:"#808000"},{name:"Orange",color:"#ffa500"},{name:"Orange Red",color:"#ff4500"},{name:"Pale Golden Rod",color:"#eee8aa"},{name:"Pale Green",color:"#98fb98"},{name:"Pink",color:"#ffc0cb"},{name:"Purple",color:"#800080"},{name:"Red",color:"#ff0000"},{name:"Royal Blue",color:"#4169e1"},{name:"Sea Green",color:"#2e8b57"},{name:"Silver",color:"#c0c0c0"},{name:"Sky Blue",color:"#87ceeb"},{name:"Slate Blue",color:"#6a5acd"},{name:"Slate Grey",color:"#708090"},{name:"Teal",color:"#008080"},{name:"Turquoise",color:"#40e0d0"},{name:"Violet",color:"#ee82ee"},{name:"White",color:"#ffffff"},{name:"Yellow",color:"#ffff00"}]}},methods:{noop:function(){window.alert("noop")}}}},'./node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-1dd3c6d1","scoped":true,"hasInlineConfig":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./docs/app/pages/Components/Autocomplete/examples/AutocompleteTemplate.vue':function(e,o){},'./node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-1dd3c6d1","hasScoped":true,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./docs/app/pages/Components/Autocomplete/examples/AutocompleteTemplate.vue':function(e,o,l){"use strict";var a=function(){var e=this,o=e.$createElement,l=e._self._c||o;return l("div",[l("md-autocomplete",{attrs:{"md-options":e.colors},scopedSlots:e._u([{key:"md-autocomplete-item",fn:function(o){var a=o.item,n=o.term;return[l("span",{staticClass:"color",style:"background-color: "+a.color}),e._v(" "),l("md-highlight-text",{attrs:{"md-term":n}},[e._v(e._s(a.name))])]}},{key:"md-autocomplete-empty",fn:function(o){var a=o.term;return[e._v('\n      No colors matching "'+e._s(a)+'" were found. '),l("a",{on:{click:function(o){return e.noop()}}},[e._v("Create a new")]),e._v(" one!\n    ")]}}]),model:{value:e.value,callback:function(o){e.value=o},expression:"value"}},[l("label",[e._v("Color")]),e._v(" "),e._v(" "),e._v(" "),e.value?l("div",{staticClass:"md-helper-text"},[l("strong",[e._v("Selected Color:")]),e._v(" "),l("span",{staticClass:"color",style:"background-color: "+e.value.color})]):e._e()])],1)},n=[],t={render:a,staticRenderFns:n};o.a=t}});