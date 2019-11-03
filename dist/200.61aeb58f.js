webpackJsonp([200],{"./docs/app/pages/WithRouter.vue":function(e,t,o){"use strict";var s,a,n,r,i,l,u,c,d,p;Object.defineProperty(t,"__esModule",{value:!0}),s=o("./node_modules/babel-loader/lib/index.js?cacheDirectory=true!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./docs/app/pages/WithRouter.vue"),a=o.n(s);for(n in s)"default"!==n&&(function(e){o.d(t,e,(function(){return s[e]}))})(n);r=o('./node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-77c4cd44","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./docs/app/pages/WithRouter.vue'),i=o("./node_modules/vue-loader/lib/component-normalizer.js"),l=!1,u=null,c=null,d=null,p=i(a.a,r.a,l,u,c,d),t.default=p.exports},"./node_modules/babel-loader/lib/index.js?cacheDirectory=true!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./docs/app/pages/WithRouter.vue":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"WithRouter"}},'./node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-77c4cd44","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./docs/app/pages/WithRouter.vue':function(e,t,o){"use strict";var s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("page-container",{attrs:{centered:"",title:e.$t("pages.withRouter.title")}},[o("div",{staticClass:"page-container-section"},[o("h2",{staticClass:"md-headline"},[e._v("Vue Material Router Link Components")]),e._v(" "),o("p",[e._v("Vue router supported with "),o("code",[o("router-link",{attrs:{to:"/components/tabs"}},[e._v("md-tab")])],1),e._v(", "),o("code",[o("router-link",{attrs:{to:"/components/list"}},[e._v("md-list-item")])],1),e._v(", "),o("code",[o("router-link",{attrs:{to:"/components/bottom-bar"}},[e._v("md-bottom-bar-item")])],1),e._v(" and "),o("code",[o("router-link",{attrs:{to:"/components/steppers"}},[e._v("md-step")])],1),e._v(" so far.")]),e._v(" "),o("p",[e._v("Vue Material router link components will be auto-generated with the prop "),o("code",[e._v("to")]),e._v(". All "),o("a",{attrs:{href:"https://router.vuejs.org/en/api/router-link.html"}},[o("code",[e._v("router-link")]),e._v(" props")]),e._v(" except "),o("code",[e._v("tag")]),e._v(" accepted.")]),e._v(" "),o("h2",{staticClass:"md-headline"},[e._v("Work with Router option "),o("code",[e._v("linkActiveClass")])]),e._v(" "),o("p",[e._v("Since Vue Router doesn't expose "),o("code",[e._v("isSameRoute")]),e._v(" and "),o("code",[e._v("isIncludedRoute")]),e._v(" methods, Vue Material cannot detect which links are active. Vue Material inject "),o("code",[e._v("linkActiveClass")]),e._v(" with an extra active class to interact with router. Therefore, if you want to using an custom class for active link as default, you need to setup like this:")]),e._v(" "),o("code-example",{attrs:{title:"Individual components"}},[e._v("\n      const linkActiveClass = 'my-link-active-class'\n\n      // pass custom class to Vue Material\n      Vue.material.router.linkActiveClass = linkActiveClass\n\n      // pass custom class to Vue Router\n      router = new VueRouter({\n        routes,\n        linkActiveClass\n      })\n\n      const app = new Vue({\n        name: 'Root',\n        router,\n      })\n\n    ")])],1)])},a=[],n={render:s,staticRenderFns:a};t.a=n}});