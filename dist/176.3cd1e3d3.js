webpackJsonp([176],{

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/Badge/examples/Buttons.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(89/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/Badge/examples/Buttons.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('buttons', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['buttons'] = {
    name: 'buttons',
    source: "<template>\n  <div class=\"demo-badge\">\n    <div>\n      <md-badge md-content=\"1\">\n        <md-button class=\"md-icon-button\">\n          <md-icon>notifications</md-icon>\n        </md-button>\n      </md-badge>\n\n      <md-badge class=\"md-primary\" md-content=\"1\">\n        <md-button class=\"md-icon-button\">\n          <md-icon>home</md-icon>\n        </md-button>\n      </md-badge>\n\n      <md-badge md-position=\"bottom\" md-content=\"2\">\n        <md-button class=\"md-icon-button\">\n          <md-icon>home</md-icon>\n        </md-button>\n      </md-badge>\n    </div>\n\n    <div>\n      <md-badge class=\"md-primary\" md-content=\"12\">\n        <md-avatar>\n          <img src=\"/assets/examples/avatar.png\" alt=\"Avatar\">\n        </md-avatar>\n      </md-badge>\n    </div>\n\n    <div>\n      <md-badge class=\"md-primary md-square\" md-position=\"bottom\" md-content=\"12\">\n        <md-button>\n          Button with\n        </md-button>\n      </md-badge>\n    </div>\n  </div>\n</template>\n\n<script>\n  export default {\n    name: 'Buttons'\n  }\n</script>\n\n<style lang=\"scss\" scoped>\n  .demo-badge {\n    > div {\n      margin-bottom: 16px;\n    }\n  }\n</style>\n"
  };
};

/***/ }),

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/Badge/examples/Dense.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(88/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/Badge/examples/Dense.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('dense', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['dense'] = {
    name: 'dense',
    source: "<template>\n  <div class=\"demo-badge\">\n    <div>\n      <md-badge md-content=\"1\" md-dense>\n        <md-button class=\"md-icon-button\">\n          <md-icon>notifications</md-icon>\n        </md-button>\n      </md-badge>\n\n      <md-badge class=\"md-primary\" md-content=\"12\" md-dense>\n        <md-button class=\"md-icon-button\">\n          <md-icon>home</md-icon>\n        </md-button>\n      </md-badge>\n    </div>\n  </div>\n</template>\n\n<script>\n  export default {\n    name: 'Dense'\n  }\n</script>\n\n<style lang=\"scss\" scoped>\n  .demo-badge {\n    > div {\n      margin-bottom: 16px;\n    }\n  }\n</style>\n"
  };
};

/***/ }),

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/Badge/examples/Lists.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(87/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/Badge/examples/Lists.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('lists', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['lists'] = {
    name: 'lists',
    source: "<template>\n  <div>\n    <md-list>\n      <md-list-item>\n        <md-icon>move_to_inbox</md-icon>\n        <span class=\"md-list-item-text\">Inbox</span>\n        <md-badge class=\"md-primary md-square\" md-content=\"6\" />\n      </md-list-item>\n\n      <md-list-item>\n        <md-icon>send</md-icon>\n        <span class=\"md-list-item-text\">Sent Mail</span>\n      </md-list-item>\n\n      <md-list-item>\n        <md-icon>delete</md-icon>\n        <span class=\"md-list-item-text\">Trash</span>\n        <md-badge class=\"md-primary\" md-content=\"6\" />\n      </md-list-item>\n\n      <md-list-item>\n        <md-icon>error</md-icon>\n        <span class=\"md-list-item-text\">Spam</span>\n        <md-badge class=\"md-square\" md-content=\"New\" />\n      </md-list-item>\n    </md-list>\n  </div>\n</template>\n\n<script>\n  export default {\n    name: 'Lists'\n  }\n</script>\n\n<style lang=\"scss\" scoped>\n  .md-list {\n    width: 320px;\n    max-width: 100%;\n    display: inline-block;\n    vertical-align: top;\n    border: 1px solid rgba(#000, .12);\n  }\n</style>\n"
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

/***/ "./docs/app/pages/Components/Badge/Badge.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Badge_vue__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?cacheDirectory=true!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./docs/app/pages/Components/Badge/Badge.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Badge_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Badge_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Badge_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, (function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Badge_vue__[key]; })) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_dc3df970_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Badge_vue__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-dc3df970\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./docs/app/pages/Components/Badge/Badge.vue");
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Badge_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_dc3df970_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Badge_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* customBlocks */
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/Badge/examples/Buttons.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/Badge/examples/Lists.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/Badge/examples/Dense.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}


/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?cacheDirectory=true!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./docs/app/pages/Components/Badge/Badge.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _docsExample = __webpack_require__("./docs/app/mixins/docsExample.js");

var _docsExample2 = _interopRequireDefault(_docsExample);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'DocBadge',
  mixins: [_docsExample2.default],
  data: function data() {
    return {
      classes: {
        headings: ['Name', 'Description'],
        props: [{
          name: 'md-square',
          description: 'Created square type badge.'
        }]
      },
      props: {
        headings: ['Name', 'Description', 'Default'],
        props: [{
          name: 'md-content',
          type: 'String, Number',
          description: 'A content for badge',
          defaults: ' '
        }, {
          name: 'md-position',
          type: 'String',
          description: 'Position of badge <code>top</code> or <code>bottom</code>',
          defaults: 'top'
        }, {
          name: 'md-dense',
          type: 'Boolean',
          description: 'Enables the dense layout',
          defaults: 'false'
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

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-dc3df970\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./docs/app/pages/Components/Badge/Badge.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('page-container',{attrs:{"centered":"","title":_vm.$t('pages.badge.title')}},[_c('div',{staticClass:"page-container-section"},[_c('p',[_vm._v("Small status descriptors for UI elements.")])]),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('p',[_vm._v("Some components like "),_c('b',[_vm._v("button, avatar")]),_vm._v(" needs to be wrapped with "),_c('code',[_vm._v("md-badge")]),_vm._v(" component.")]),_vm._v(" "),_c('code-example',{attrs:{"title":"Example with buttons","component":_vm.examples['buttons']}}),_vm._v(" "),_c('code-example',{attrs:{"title":"Example with lists","component":_vm.examples['lists']}}),_vm._v(" "),_c('code-example',{attrs:{"title":"Dense","component":_vm.examples['dense']}}),_vm._v(" "),_c('api-item',{attrs:{"title":"API - md-badge"}},[_c('p',[_vm._v("The following option can be applied to any badge:")]),_vm._v(" "),_c('api-table',{attrs:{"slot":"props","headings":_vm.props.headings,"props":_vm.props.props},slot:"props"}),_vm._v(" "),_c('api-table',{attrs:{"slot":"classes","headings":_vm.classes.headings,"props":_vm.classes.props},slot:"classes"})],1)],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});