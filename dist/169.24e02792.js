webpackJsonp([169],{

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/BottomBar/examples/BarCustomTemplate.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(86/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/BottomBar/examples/BarCustomTemplate.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('bar-custom-template', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['bar-custom-template'] = {
    name: 'bar-custom-template',
    source: "<template>\n  <div>\n    <div class=\"phone-viewport\">\n      <md-bottom-bar class=\"md-accent\" md-type=\"shift\" @md-changed=\"checkNewPosts\">\n        <md-bottom-bar-item md-label=\"Home\" md-icon=\"home\"></md-bottom-bar-item>\n        <md-bottom-bar-item md-label=\"Pages\" md-icon=\"pages\"></md-bottom-bar-item>\n\n        <md-bottom-bar-item id=\"item-posts\" @click=\"clearNewPosts\">\n          <md-icon class=\"md-bottom-bar-icon\" md-src=\"/assets/icon-whatshot.svg\"></md-icon>\n          <span class=\"md-bottom-bar-label\">Posts</span>\n          <i class=\"badge\" v-if=\"newPosts\">{{ newPosts }}</i>\n        </md-bottom-bar-item>\n\n        <md-bottom-bar-item md-label=\"Favorites\" md-icon=\"favorite\"></md-bottom-bar-item>\n      </md-bottom-bar>\n    </div>\n  </div>\n</template>\n\n<script>\n  export default {\n    name: 'BarCustomTemplate',\n    data: () => ({\n      newPosts: 0,\n      checkInterval: null\n    }),\n    methods: {\n      clearCheckPosts () {\n        window.clearInterval(this.checkInterval)\n        this.checkInterval = null\n      },\n      clearNewPosts () {\n        this.clearCheckPosts()\n        this.newPosts = 0\n      },\n      checkNewPosts (activeItem) {\n        if (activeItem !== 'item-posts' && !this.checkInterval) {\n          this.checkInterval = window.setInterval(() => {\n            if (this.newPosts === 99) {\n              this.newPosts = '99+'\n              this.clearCheckPosts()\n            } else {\n              this.newPosts++\n            }\n          }, 1000)\n        }\n      }\n    },\n    mounted () {\n      this.checkNewPosts()\n    }\n  }\n</script>\n\n<style lang=\"scss\" scoped>\n  @import \"~vue-material/theme/engine\";\n\n  .phone-viewport {\n    width: 322px;\n    height: 200px;\n    display: inline-flex;\n    align-items: flex-end;\n    overflow: hidden;\n    border: 1px solid rgba(#000, .26);\n    background: rgba(#000, .06);\n  }\n\n  .badge {\n    width: 19px;\n    height: 19px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: absolute;\n    top: 6px;\n    right: 6px;\n    background: #fff;\n    border-radius: 100%;\n    color: #000;\n    font-size: 10px;\n    font-style: normal;\n    font-weight: 600;\n    letter-spacing: -.05em;\n    font-family: 'Roboto Mono', monospace;\n  }\n</style>\n"
  };
};

/***/ }),

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/BottomBar/examples/BarRouter.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(85/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/BottomBar/examples/BarRouter.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('bar-router', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['bar-router'] = {
    name: 'bar-router',
    source: "<template>\n  <div>\n    <div class=\"phone-viewport\">\n      <md-bottom-bar md-sync-route>\n        <md-bottom-bar-item to=\"/components/bottom-bar\" exact md-label=\"Home\" md-icon=\"home\"></md-bottom-bar-item>\n        <md-bottom-bar-item to=\"/components/bottom-bar/posts\" md-label=\"Posts\" md-icon=\"/assets/icon-whatshot.svg\"></md-bottom-bar-item>\n        <md-bottom-bar-item to=\"/components/bottom-bar/favorites\" md-label=\"Favorites\" md-icon=\"favorite\"></md-bottom-bar-item>\n      </md-bottom-bar>\n    </div>\n\n    <div class=\"phone-viewport\">\n      <md-bottom-bar class=\"md-accent\" md-sync-route>\n        <md-bottom-bar-item to=\"/components/bottom-bar\" exact md-label=\"Home\" md-icon=\"home\"></md-bottom-bar-item>\n        <md-bottom-bar-item to=\"/components/bottom-bar/posts\" md-label=\"Posts\" md-icon=\"/assets/icon-whatshot.svg\"></md-bottom-bar-item>\n        <md-bottom-bar-item to=\"/components/bottom-bar/favorites\" md-label=\"Favorites\" md-icon=\"favorite\"></md-bottom-bar-item>\n      </md-bottom-bar>\n    </div>\n\n    <div class=\"phone-viewport\">\n      <md-bottom-bar class=\"md-accent\" md-sync-route>\n        <md-bottom-bar-item to=\"/components/bottom-bar/posts/1\" md-label=\"Post 1\" md-icon=\"/assets/icon-whatshot.svg\"></md-bottom-bar-item>\n        <md-bottom-bar-item to=\"/components/bottom-bar/posts/2\" md-label=\"Post 2\" md-icon=\"/assets/icon-whatshot.svg\"></md-bottom-bar-item>\n      </md-bottom-bar>\n    </div>\n  </div>\n</template>\n\n<script>\n  export default {\n    name: 'BarRouter'\n  }\n</script>\n\n<style lang=\"scss\" scoped>\n  .phone-viewport {\n    width: 322px;\n    height: 200px;\n    display: inline-flex;\n    align-items: flex-end;\n    overflow: hidden;\n    border: 1px solid rgba(#000, .26);\n    background: rgba(#000, .06);\n  }\n</style>\n"
  };
};

/***/ }),

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/BottomBar/examples/ChangingThemes.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(3/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/BottomBar/examples/ChangingThemes.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('changing-themes', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['changing-themes'] = {
    name: 'changing-themes',
    source: "<template>\n  <div>\n    <div class=\"phone-viewport\">\n      <md-bottom-bar md-type=\"shift\" :md-theme=\"'bottom-bar-' + theme\">\n        <md-bottom-bar-item md-label=\"Home\" md-icon=\"home\" @click=\"theme = 'teal'\"></md-bottom-bar-item>\n        <md-bottom-bar-item md-label=\"Pages\" md-icon=\"pages\" @click=\"theme = 'orange'\"></md-bottom-bar-item>\n        <md-bottom-bar-item md-label=\"Posts\" md-icon=\"/assets/icon-whatshot.svg\" @click=\"theme = 'blue'\"></md-bottom-bar-item>\n        <md-bottom-bar-item md-label=\"Favorites\" md-icon=\"favorite\" @click=\"theme = 'red'\"></md-bottom-bar-item>\n      </md-bottom-bar>\n    </div>\n  </div>\n</template>\n\n<script>\nexport default {\n  name: 'ChangingThemes',\n  data: () => ({\n    theme: 'teal'\n  })\n}\n</script>\n\n<style lang=\"scss\">\n  @import \"~vue-material/theme/engine\";\n\n  @include md-register-theme(\"bottom-bar-teal\", (\n    primary: md-get-palette-color(teal, A200)\n  ));\n\n  @include md-register-theme(\"bottom-bar-orange\", (\n    primary: md-get-palette-color(orange, A200)\n  ));\n\n  @include md-register-theme(\"bottom-bar-blue\", (\n    primary: md-get-palette-color(blue, A200),\n    accent: md-get-palette-color(red, A200)\n  ));\n\n  @include md-register-theme(\"bottom-bar-red\", (\n    primary: md-get-palette-color(red, A200)\n  ));\n\n  @import \"~vue-material/theme/all\";\n</style>\n\n<style lang=\"scss\" scoped>\n  .phone-viewport {\n    width: 322px;\n    height: 200px;\n    display: inline-flex;\n    align-items: flex-end;\n    overflow: hidden;\n    border: 1px solid rgba(#000, .26);\n    background: rgba(#000, .06);\n  }\n</style>\n"
  };
};

/***/ }),

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/BottomBar/examples/Shift.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(84/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/BottomBar/examples/Shift.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('shift', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['shift'] = {
    name: 'shift',
    source: "<template>\n  <div>\n    <div class=\"phone-viewport\">\n      <md-bottom-bar md-type=\"shift\">\n        <md-bottom-bar-item id=\"bottom-bar-item-home\" md-label=\"Home\" md-icon=\"home\"></md-bottom-bar-item>\n        <md-bottom-bar-item id=\"bottom-bar-item-pages\" md-label=\"Pages\" md-icon=\"pages\"></md-bottom-bar-item>\n        <md-bottom-bar-item id=\"bottom-bar-item-posts\" md-label=\"Posts\" md-icon=\"/assets/icon-whatshot.svg\"></md-bottom-bar-item>\n        <md-bottom-bar-item id=\"bottom-bar-item-favorites\" md-label=\"Favorites\" md-icon=\"favorite\"></md-bottom-bar-item>\n      </md-bottom-bar>\n    </div>\n\n    <div class=\"phone-viewport\">\n      <md-bottom-bar class=\"md-accent\" md-type=\"shift\">\n        <md-bottom-bar-item id=\"bottom-bar-item-home\" md-label=\"Home\" md-icon=\"home\"></md-bottom-bar-item>\n        <md-bottom-bar-item id=\"bottom-bar-item-pages\" md-label=\"Pages\" md-icon=\"pages\"></md-bottom-bar-item>\n        <md-bottom-bar-item id=\"bottom-bar-item-posts\" md-label=\"Posts\" md-icon=\"/assets/icon-whatshot.svg\"></md-bottom-bar-item>\n        <md-bottom-bar-item id=\"bottom-bar-item-favorites\" md-label=\"Favorites\" md-icon=\"favorite\"></md-bottom-bar-item>\n      </md-bottom-bar>\n    </div>\n  </div>\n</template>\n\n<script>\nexport default {\n  name: 'Shift'\n}\n</script>\n\n<style lang=\"scss\" scoped>\n  .phone-viewport {\n    width: 322px;\n    height: 200px;\n    display: inline-flex;\n    align-items: flex-end;\n    overflow: hidden;\n    border: 1px solid rgba(#000, .26);\n    background: rgba(#000, .06);\n  }\n</style>\n"
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

/***/ "./docs/app/pages/Components/BottomBar/BottomBar.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_BottomBar_vue__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?cacheDirectory=true!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./docs/app/pages/Components/BottomBar/BottomBar.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_BottomBar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_BottomBar_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_BottomBar_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, (function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_BottomBar_vue__[key]; })) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_9a7b09ee_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_BottomBar_vue__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-9a7b09ee\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./docs/app/pages/Components/BottomBar/BottomBar.vue");
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_BottomBar_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_9a7b09ee_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_BottomBar_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* customBlocks */
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/BottomBar/examples/BarRouter.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/BottomBar/examples/Shift.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/BottomBar/examples/ChangingThemes.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/BottomBar/examples/BarCustomTemplate.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}


/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?cacheDirectory=true!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./docs/app/pages/Components/BottomBar/BottomBar.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _docsExample = __webpack_require__("./docs/app/mixins/docsExample.js");

var _docsExample2 = _interopRequireDefault(_docsExample);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'DocBottomBar',
  mixins: [_docsExample2.default],
  data: function data() {
    return {
      bar: {
        props: {
          headings: ['Name', 'Description', 'Default'],
          props: [{
            name: 'md-type',
            type: 'String',
            description: 'Sets the display mode. See below the detailed description of each type.',
            defaults: 'fixed'
          }, {
            offset: true,
            name: 'md-type="fixed"',
            type: 'String',
            description: 'Makes the bar with fixed items. Good for a small amount of items.',
            defaults: '-'
          }, {
            offset: true,
            name: 'md-mode="shift"',
            type: 'String',
            description: 'Highlights the selected item and hide the label from the others. Good for a large amount of items. Up to 6.',
            defaults: '-'
          }, {
            name: 'md-active-item',
            type: 'Boolean',
            description: 'Dynamically changes the selected item. Works passing the ID of a bottom bar item.',
            defaults: 'null'
          }, {
            name: 'md-sync-route',
            type: 'Boolean',
            description: 'Watches the current route if there is a Vue Router instance running on the page. This will automatically change the selected element based on the current URL.',
            defaults: 'false'
          }]
        },
        events: {
          headings: ['Name', 'Description', 'Value'],
          props: [{
            name: 'md-changed',
            description: 'Triggered when a selected item changes',
            value: 'Selected item ID'
          }]
        }
      },
      item: {
        props: {
          headings: ['Name', 'Description', 'Default'],
          props: [{
            name: 'id',
            type: 'String',
            description: 'The item id. Used when changing the selected item dynamically',
            defaults: 'a random string'
          }, {
            name: 'md-label',
            type: 'String',
            description: 'The bottom bar label. <code>Required</code>.',
            defaults: 'null'
          }, {
            name: 'md-icon',
            type: 'String',
            description: 'The bottom bar icon. Can be an icon name from <a href="https://material.io/icons/" target="_blank">Material icons</a> or the path of a valid svg. <code>Required</code>.',
            defaults: 'null'
          }, {
            name: 'md-disabled',
            type: 'Boolean',
            description: 'Disable the bottom bar preventing the click on it and all actions.',
            defaults: 'false'
          }]
        }
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

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-9a7b09ee\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./docs/app/pages/Components/BottomBar/BottomBar.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('page-container',{attrs:{"centered":"","title":_vm.$t('pages.bottomBar.title')}},[_c('div',{staticClass:"page-container-section"},[_c('p',[_vm._v("Bottom navigation bars make it easy to explore and switch between top-level views in a single tap. The bottom bar component is a high-level navigation system made for mobile devices with Vue Router support. Check it out:")])]),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('h2',[_vm._v("Seamless integration with Vue Router")]),_vm._v(" "),_c('p',[_vm._v("The bottom bar is compatible with all Vue Router options. Just pass the values as parameters on "),_c('code',[_vm._v("md-bottom-bar-item")]),_vm._v(" component:")]),_vm._v(" "),_c('code-example',{attrs:{"title":"With default fixed style","component":_vm.examples['bar-router']}}),_vm._v(" "),_c('note-block',{attrs:{"tip":""}},[_vm._v("Note: Try to change the url manually to see the component selecting the correct item.")])],1),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('h2',[_vm._v("Shift effect")]),_vm._v(" "),_c('p',[_vm._v("You can also use the awesome shift effect on your bars. It is great to keep the focus of the active item and you can show up to 6 items at once:")]),_vm._v(" "),_c('code-example',{attrs:{"title":"With Primary and Accent colors","component":_vm.examples['shift']}})],1),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('h2',[_vm._v("Dynamic Themes")]),_vm._v(" "),_c('p',[_vm._v("Sometimes each part of your application have it's own color theme, like in a social media app. You can change the theme dynamically to morph states creating an immersive experience:")]),_vm._v(" "),_c('code-example',{attrs:{"title":"Morphing States","component":_vm.examples['changing-themes']}})],1),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('h2',[_vm._v("Custom Template")]),_vm._v(" "),_c('p',[_vm._v("Maybe you want to show more informations inside a bottom bar item. With a simple and flexible default slot, you can make anything you want. Look at this unread notification example:")]),_vm._v(" "),_c('note-block',[_vm._v("If you pass anything inside the "),_c('code',[_vm._v("<md-bottom-bar-item>")]),_vm._v(", the component will ignore the "),_c('code',[_vm._v("md-label")]),_vm._v(" and "),_c('code',[_vm._v("md-icon")]),_vm._v(". Only use the content slot if you want to create a custom template.")]),_vm._v(" "),_c('code-example',{attrs:{"title":"Template Slot","component":_vm.examples['bar-custom-template']}}),_vm._v(" "),_c('api-item',{attrs:{"title":"API - md-bottom-bar"}},[_c('p',[_vm._v("All the following options can be used on any bottom bar:")]),_vm._v(" "),_c('api-table',{attrs:{"slot":"props","headings":_vm.bar.props.headings,"props":_vm.bar.props.props},slot:"props"}),_vm._v(" "),_c('api-table',{attrs:{"slot":"events","headings":_vm.bar.events.headings,"props":_vm.bar.events.props},slot:"events"})],1),_vm._v(" "),_c('api-item',{attrs:{"title":"API - md-bottom-bar-item"}},[_c('p',[_vm._v("The following options can be used on any bottom bar item. All "),_c('a',{attrs:{"href":"https://router.vuejs.org/en/api/router-link.html","target":"_blank"}},[_vm._v("options")]),_vm._v(" of "),_c('code',[_vm._v("router-link")]),_vm._v(" can be simply used here:")]),_vm._v(" "),_c('api-table',{attrs:{"slot":"props","headings":_vm.item.props.headings,"props":_vm.item.props.props},slot:"props"})],1)],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});