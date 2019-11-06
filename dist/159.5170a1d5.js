webpackJsonp([159],{

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/Tabs/examples/TabAlignments.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(22/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/Tabs/examples/TabAlignments.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('tab-alignments', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['tab-alignments'] = {
    name: 'tab-alignments',
    source: "<template>\n  <div>\n    Left aligned (default)\n    <md-tabs>\n      <md-tab id=\"tab-home\" md-label=\"Home\"></md-tab>\n      <md-tab id=\"tab-pages\" md-label=\"Pages\"></md-tab>\n      <md-tab id=\"tab-posts\" md-label=\"Posts\"></md-tab>\n      <md-tab id=\"tab-favorites\" md-label=\"Favorites\"></md-tab>\n    </md-tabs>\n\n    Centered\n    <md-tabs class=\"md-primary\" md-alignment=\"centered\">\n      <md-tab id=\"tab-home\" md-label=\"Home\"></md-tab>\n      <md-tab id=\"tab-pages\" md-label=\"Pages\"></md-tab>\n      <md-tab id=\"tab-posts\" md-label=\"Posts\"></md-tab>\n      <md-tab id=\"tab-favorites\" md-label=\"Favorites\"></md-tab>\n    </md-tabs>\n\n    Right aligned\n    <md-tabs class=\"md-accent\" md-alignment=\"right\">\n      <md-tab id=\"tab-home\" md-label=\"Home\"></md-tab>\n      <md-tab id=\"tab-pages\" md-label=\"Pages\"></md-tab>\n      <md-tab id=\"tab-posts\" md-label=\"Posts\"></md-tab>\n      <md-tab id=\"tab-favorites\" md-label=\"Favorites\"></md-tab>\n    </md-tabs>\n\n    Fixed\n    <md-tabs class=\"md-transparent\" md-alignment=\"fixed\">\n      <md-tab id=\"tab-home\" md-label=\"Home\"></md-tab>\n      <md-tab id=\"tab-pages\" md-label=\"Pages\"></md-tab>\n      <md-tab id=\"tab-posts\" md-label=\"Posts\"></md-tab>\n      <md-tab id=\"tab-favorites\" md-label=\"Favorites\"></md-tab>\n    </md-tabs>\n  </div>\n</template>\n\n<script>\n  export default {\n    name: 'TabAlignments'\n  }\n</script>\n\n<style lang=\"scss\" scoped>\n  .md-tabs {\n    margin-bottom: 24px;\n  }\n</style>\n"
  };
};

/***/ }),

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/Tabs/examples/TabContent.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(103/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/Tabs/examples/TabContent.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('tab-content', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['tab-content'] = {
    name: 'tab-content',
    source: "<template>\n  <div>\n    <md-tabs md-sync-route>\n      <md-tab id=\"tab-home\" md-label=\"Home\" to=\"/components/tabs\" exact>\n        Home Tab\n      </md-tab>\n\n      <md-tab id=\"tab-pages\" md-label=\"Pages\" to=\"/components/tabs/pages\">\n        Pages tab\n        <p>Unde provident nemo reiciendis officia, possimus repellendus. Facere dignissimos dicta quis rem. Aliquam aspernatur dolor atque nisi id deserunt laudantium quam repellat.</p>\n      </md-tab>\n\n      <md-tab id=\"tab-posts\" md-label=\"Posts\" to=\"/components/tabs/posts\">\n        Posts tab\n        <p>Qui, voluptas repellat impedit ducimus earum at ad architecto consectetur perferendis aspernatur iste amet ex tempora animi, illum tenetur quae assumenda iusto.</p>\n      </md-tab>\n\n      <md-tab id=\"tab-favorites\" md-label=\"Favorites\" to=\"/components/tabs/favorites\">\n        Favorites tab\n        <p>Maiores, dolorum. Beatae, optio tempore fuga odit aperiam velit, consequuntur magni inventore sapiente alias sequi odio qui harum dolorem sunt quasi corporis.</p>\n      </md-tab>\n    </md-tabs>\n  </div>\n</template>\n\n<script>\nexport default {\n  name: 'TabContent'\n}\n</script>\n"
  };
};

/***/ }),

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/Tabs/examples/TabCustomTemplate.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(21/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/Tabs/examples/TabCustomTemplate.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('tab-custom-template', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['tab-custom-template'] = {
    name: 'tab-custom-template',
    source: "<template>\n  <div>\n    <md-tabs @md-changed=\"checkNewPosts\">\n      <template slot=\"md-tab\" slot-scope=\"{ tab }\">\n        {{ tab.label }} <i class=\"badge\" v-if=\"tab.data.badge\">{{ tab.data.badge }}</i>\n      </template>\n\n      <md-tab id=\"tab-home\" md-label=\"Home\"></md-tab>\n      <md-tab id=\"tab-pages\" md-label=\"Pages\"></md-tab>\n      <md-tab id=\"tab-posts\" md-label=\"Posts\" :md-template-data=\"{ badge: newPosts }\" @click=\"clearNewPosts\"></md-tab>\n      <md-tab id=\"tab-favorites\" md-label=\"Favorites\"></md-tab>\n    </md-tabs>\n  </div>\n</template>\n\n<script>\n  export default {\n    name: 'TabCustomTemplate',\n    data: () => ({\n      newPosts: 0,\n      checkInterval: null\n    }),\n    methods: {\n      clearCheckPosts () {\n        window.clearInterval(this.checkInterval)\n        this.checkInterval = null\n      },\n      clearNewPosts () {\n        this.clearCheckPosts()\n        this.newPosts = 0\n      },\n      checkNewPosts (activeTab) {\n        if (activeTab !== 'tab-posts' && !this.checkInterval) {\n          this.checkInterval = window.setInterval(() => {\n            if (this.newPosts === 99) {\n              this.newPosts = '99+'\n              this.clearCheckPosts()\n            } else {\n              this.newPosts++\n            }\n          }, 1000)\n        }\n      }\n    },\n    mounted () {\n      this.checkNewPosts()\n    }\n  }\n</script>\n\n<style lang=\"scss\" scoped>\n  .badge {\n    width: 19px;\n    height: 19px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: absolute;\n    top: 2px;\n    right: 2px;\n    background: red;\n    border-radius: 100%;\n    color: #fff;\n    font-size: 10px;\n    font-style: normal;\n    font-weight: 600;\n    letter-spacing: -.05em;\n    font-family: 'Roboto Mono', monospace;\n  }\n</style>\n"
  };
};

/***/ }),

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/Tabs/examples/TabIcons.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(20/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/Tabs/examples/TabIcons.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('tab-icons', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['tab-icons'] = {
    name: 'tab-icons',
    source: "<template>\n  <div>\n    <md-tabs>\n      <md-tab id=\"tab-home\" md-label=\"Home\" md-icon=\"home\"></md-tab>\n      <md-tab id=\"tab-pages\" md-label=\"Pages\" md-icon=\"pages\"></md-tab>\n      <md-tab id=\"tab-posts\" md-label=\"Posts\" md-icon=\"/assets/icon-whatshot.svg\"></md-tab>\n      <md-tab id=\"tab-favorites\" md-label=\"Favorites\" md-icon=\"favorite\"></md-tab>\n    </md-tabs>\n\n    <md-tabs class=\"md-primary\" md-alignment=\"centered\">\n      <md-tab id=\"tab-home\" md-icon=\"home\"></md-tab>\n      <md-tab id=\"tab-pages\" md-icon=\"pages\"></md-tab>\n      <md-tab id=\"tab-posts\" md-icon=\"/assets/icon-whatshot.svg\"></md-tab>\n      <md-tab id=\"tab-favorites\" md-icon=\"favorite\"></md-tab>\n    </md-tabs>\n  </div>\n</template>\n\n<script>\n  export default {\n    name: 'TabIcons'\n  }\n</script>\n\n<style lang=\"scss\" scoped>\n  .md-tabs + .md-tabs {\n    margin-top: 24px;\n  }\n</style>\n"
  };
};

/***/ }),

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/Tabs/examples/TabRouter.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(102/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/Tabs/examples/TabRouter.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('tab-router', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['tab-router'] = {
    name: 'tab-router',
    source: "<template>\n  <div>\n    <md-tabs md-sync-route>\n      <md-tab id=\"tab-home\" md-label=\"Home\" to=\"/components/tabs\" exact></md-tab>\n      <md-tab id=\"tab-pages\" md-label=\"Pages\" to=\"/components/tabs/pages\">\n        <md-list>\n          <md-list-item to=\"/components/tabs/pages/1\">Go to Subpage 1</md-list-item>\n          <md-list-item to=\"/components/tabs/pages/2\">Go to Subpage 2</md-list-item>\n        </md-list>\n      </md-tab>\n      <md-tab id=\"tab-posts\" md-label=\"Posts\" to=\"/components/tabs/posts\"></md-tab>\n      <md-tab id=\"tab-favorites\" md-label=\"Favorites\" to=\"/components/tabs/favorites\"></md-tab>\n      <md-tab id=\"tab-disabled\" md-label=\"Disabled\" md-disabled></md-tab>\n    </md-tabs>\n    <h2>Mirror Subpage</h2>\n    <md-tabs md-sync-route>\n      <md-tab id=\"tab-pages-1\" md-label=\"Pages 1\" to=\"/components/tabs/pages/1\">Subpage 1</md-tab>\n      <md-tab id=\"tab-pages-2\" md-label=\"Pages 2\" to=\"/components/tabs/pages/2\">Subpage 2</md-tab>\n    </md-tabs>\n  </div>\n</template>\n\n<script>\n  export default {\n    name: 'TabRouter'\n  }\n</script>\n"
  };
};

/***/ }),

/***/ "./docs/app/mixins/docsExample.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  computed: {
    examples: function examples() {
      return this.$options.examples;
    }
  }
};

/***/ }),

/***/ "./docs/app/pages/Components/Tabs/Tabs.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Tabs_vue__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?cacheDirectory=true!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./docs/app/pages/Components/Tabs/Tabs.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Tabs_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Tabs_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Tabs_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, (function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Tabs_vue__[key]; })) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1edf144b_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Tabs_vue__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-1edf144b\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./docs/app/pages/Components/Tabs/Tabs.vue");
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Tabs_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1edf144b_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Tabs_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* customBlocks */
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/Tabs/examples/TabRouter.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/Tabs/examples/TabAlignments.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/Tabs/examples/TabContent.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/Tabs/examples/TabIcons.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/Tabs/examples/TabCustomTemplate.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}


/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?cacheDirectory=true!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./docs/app/pages/Components/Tabs/Tabs.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _docsExample = __webpack_require__("./docs/app/mixins/docsExample.js");

var _docsExample2 = _interopRequireDefault(_docsExample);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'DocTabs',
  mixins: [_docsExample2.default],
  data: function data() {
    return {
      swipeable: {
        props: {
          headings: ['Name', 'Description', 'Default'],
          props: [{
            name: 'md-swipe-threshold',
            type: 'Number',
            description: 'The minimal distance traveled to be considered swipe.',
            defaults: '50'
          }, {
            name: 'md-swipe-restraint',
            type: 'Number',
            description: 'The maximum distance allowed at the same time in perpendicular direction.',
            defaults: '100'
          }, {
            name: 'md-swipe-time',
            type: 'Number',
            description: 'The maximum time allowed to detect swipe.',
            defaults: '400'
          }]
        }
      },
      tabs: {
        props: {
          headings: ['Name', 'Description', 'Default'],
          props: [{
            name: 'md-active-tab',
            type: 'String|Number',
            description: 'Set the current selected tab. Works by providing the id of the desired <code>md-tab</code>.',
            defaults: 'null'
          }, {
            name: 'md-swipeable',
            type: 'Boolean',
            description: 'Option used to enable touch support to move between tabs by swipe. For more option see  API - Swipeable',
            defaults: 'false'
          }, {
            name: 'md-sync-route',
            type: 'Boolean',
            description: 'Syncs the table selection with the current route, matching by the single tab <code>to</code> prop.',
            defaults: 'false'
          }, {
            name: 'md-alignment',
            type: 'String',
            description: 'Sets the tab navigation alignment. See below the detailed description of each layout.',
            defaults: 'left'
          }, {
            offset: true,
            name: 'md-alignment="left"',
            type: 'String',
            description: 'Align the tabs navigation buttons to left',
            defaults: '-'
          }, {
            offset: true,
            name: 'md-alignment="center"',
            type: 'String',
            description: 'Align the tabs navigation buttons on center',
            defaults: '-'
          }, {
            offset: true,
            name: 'md-alignment="right"',
            type: 'String',
            description: 'Align the tabs navigation buttons on right',
            defaults: '-'
          }, {
            offset: true,
            name: 'md-alignment="fixed"',
            type: 'String',
            description: 'Make the navigation buttons to fill all the available space.',
            defaults: '-'
          }, {
            name: 'md-dynamic-height',
            type: 'Boolean',
            description: 'Apply a dynamic transition to the table height. Be careful with this option to not hurt the performance of your page.',
            defaults: 'false'
          }, {
            name: 'md-elevation',
            type: 'Number',
            description: 'Add an elevation to tab navigation element.',
            defaults: '0'
          }]
        },
        events: {
          headings: ['Name', 'Description', 'Value'],
          props: [{
            name: 'md-changed',
            description: 'Triggered when the active tab changes',
            value: 'Tab ID'
          }]
        },
        slots: {
          headings: ['Name', 'Description', 'Values'],
          props: [{
            name: 'md-tab',
            description: 'Creates a custom tab button template',
            options: [{
              name: 'tab',
              description: 'The options that were passed through <code>md-template-data</code> inside each <code>md-tab</code>'
            }],
            usage: '<template slot="md-tab" slot-scope="{ tab }"> ... </template>'
          }]
        }
      },
      tab: {
        headings: ['Name', 'Description', 'Default'],
        props: [{
          name: 'id',
          type: 'String',
          description: 'The tab id. Used when changing the active tab dynamically',
          defaults: 'a random string'
        }, {
          name: 'href',
          type: 'String',
          description: 'The tab href link. Useful when you don\'t have Vue Router on your app, but you still want to change the current URL based on the tab.',
          defaults: 'null'
        }, {
          name: 'md-label',
          type: 'String',
          description: 'The tab label',
          defaults: 'null'
        }, {
          name: 'md-icon',
          type: 'String',
          description: 'The tab icon. Accepts an string or a asset URL. The tab will know how to handle the icon based on this.',
          defaults: 'null'
        }, {
          name: 'md-disabled',
          type: 'Boolean',
          description: 'Disable/enable a tab',
          defaults: 'null'
        }, {
          name: 'md-template-data',
          type: 'Object',
          description: 'The data to be passed to the respective tab button, when using custom template.',
          defaults: 'null'
        }]
      }
    };
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-1edf144b\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./docs/app/pages/Components/Tabs/Tabs.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('page-container',{attrs:{"centered":"","title":_vm.$t('pages.tabs.title')}},[_c('div',{staticClass:"page-container-section"},[_c('p',[_vm._v("Tabs make it easy to explore, switch between different views and enable content organization at a high level, such as different data sets or functional aspects of an app.")]),_vm._v(" "),_c('p',[_vm._v("Tabs are really powerfull and have deep integration with Vue Core features and router.")]),_vm._v(" "),_c('note-block',[_vm._v("More features for tabs will be come in the next weeks, like pagination scroll and touch events. :)")])],1),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('h2',[_vm._v("Navigational tabs")]),_vm._v(" "),_c('p',[_vm._v("Sometimes you may need a tab to be the main navigational element of your application and you can do this. Tabs integrate with Vue Router by default and will be able to use single tab just like a regular button or link, by using the "),_c('code',[_vm._v("router-link")]),_vm._v(" props. The tabs will sync with the page URL and will produce effects when transitioning between tabs. "),_c('strong',[_vm._v("AUTOMATIC")]),_vm._v("!")]),_vm._v(" "),_c('code-example',{attrs:{"title":"Seamless integration with Vue Router","component":_vm.examples['tab-router']}})],1),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('h2',[_vm._v("Tab with inner content")]),_vm._v(" "),_c('p',[_vm._v("In the previous example, the tabs worked just like navigation buttons, without content. With that you would need to render the content by yourself. Although this is not a hard thing, because you can use Vue Router, you can pass arbitrary content to your tabs. And it can also work syncing with router:")]),_vm._v(" "),_c('code-example',{attrs:{"title":"Content syncing with Router","component":_vm.examples['tab-content']}})],1),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('h2',[_vm._v("Alignments")]),_vm._v(" "),_c('p',[_vm._v("Tabs have four types of alignments for the navigation buttons: Left, Center, Right and Fixed. You can use them with any tabs:")]),_vm._v(" "),_c('code-example',{attrs:{"title":"With different hue colors","component":_vm.examples['tab-alignments']}})],1),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('h2',[_vm._v("Icons")]),_vm._v(" "),_c('p',[_vm._v("Tabs accept icons, to make it easier for your user to assimilate the contents of a tab:")]),_vm._v(" "),_c('code-example',{attrs:{"title":"With svg support","component":_vm.examples['tab-icons']}})],1),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('h2',[_vm._v("Custom Template")]),_vm._v(" "),_c('p',[_vm._v("You can use a custom template for the navigation buttons. This will be applied to all navigation buttons and allows you to make updates on your tab, like this great example of unread/new content: Simple, uh?")]),_vm._v(" "),_c('code-example',{attrs:{"title":"Template Slot","component":_vm.examples['tab-custom-template']}}),_vm._v(" "),_c('api-item',{attrs:{"title":"API - md-tabs"}},[_c('p',[_vm._v("The following options can be applied to any tabs:")]),_vm._v(" "),_c('api-table',{attrs:{"slot":"props","headings":_vm.tabs.props.headings,"props":_vm.tabs.props.props},slot:"props"}),_vm._v(" "),_c('api-table',{attrs:{"slot":"scoped-slots","headings":_vm.tabs.slots.headings,"props":_vm.tabs.slots.props},slot:"scoped-slots"}),_vm._v(" "),_c('api-table',{attrs:{"slot":"events","headings":_vm.tabs.events.headings,"props":_vm.tabs.events.props},slot:"events"})],1),_vm._v(" "),_c('api-item',{attrs:{"title":"API - md-tab"}},[_c('p',[_vm._v("The following options can be applied to any tab.  All "),_c('a',{attrs:{"href":"https://router.vuejs.org/en/api/router-link.html","target":"_blank"}},[_vm._v("options")]),_vm._v(" of "),_c('code',[_vm._v("router-link")]),_vm._v(" can be simply used here:")]),_vm._v(" "),_c('api-table',{attrs:{"slot":"props","headings":_vm.tab.headings,"props":_vm.tab.props},slot:"props"})],1),_vm._v(" "),_c('api-item',{attrs:{"title":"API - Swipeable"}},[_c('p',[_vm._v("The following options can be applied to any "),_c('code',[_vm._v("md-tabs")]),_vm._v(" component that is using "),_c('code',[_vm._v("md-swipeable")]),_vm._v(" prop.")]),_vm._v(" "),_c('api-table',{attrs:{"slot":"props","headings":_vm.swipeable.props.headings,"props":_vm.swipeable.props.props},slot:"props"})],1)],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});