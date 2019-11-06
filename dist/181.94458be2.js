webpackJsonp([181],{

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/UiElements/TextSelection/examples/SelectionExample.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(1/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/UiElements/TextSelection/examples/SelectionExample.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('selection-example', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['selection-example'] = {
    name: 'selection-example',
    source: "<template>\n  <div>\n    <h2>Select any text to see the selection background</h2>\n    <p>This text will follow the default color of the documentation, which is a nice red color.</p>\n\n    <md-content md-theme=\"selection-black\">\n      <p>This one will get a slick black background when selected, because the parent theme have another color.</p>\n    </md-content>\n\n    <md-content md-theme=\"selection-orange\">\n      <p>Also works when the theme is dark.</p>\n    </md-content>\n  </div>\n</template>\n\n<script>\n  export default {\n    name: 'SelectionExample'\n  }\n</script>\n\n<style lang=\"scss\">\n  @import \"~vue-material/theme/engine\";\n\n  @include md-register-theme(\"selection-black\", (\n    accent: md-get-palette-color(black, 500)\n  ));\n\n  @include md-register-theme(\"selection-orange\", (\n    accent: md-get-palette-color(orange, 500),\n    theme: dark\n  ));\n\n  @import \"~vue-material/base/theme\";\n  @import \"~vue-material/components/MdContent/theme\";\n</style>\n\n<style lang=\"scss\" scoped>\n  .md-content {\n    padding: 1px 16px;\n  }\n</style>\n"
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

/***/ "./docs/app/pages/UiElements/TextSelection/TextSelection.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_TextSelection_vue__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?cacheDirectory=true!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./docs/app/pages/UiElements/TextSelection/TextSelection.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_TextSelection_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_TextSelection_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_TextSelection_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, (function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_TextSelection_vue__[key]; })) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0e048c55_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_TextSelection_vue__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-0e048c55\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./docs/app/pages/UiElements/TextSelection/TextSelection.vue");
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_TextSelection_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0e048c55_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_TextSelection_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* customBlocks */
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/UiElements/TextSelection/examples/SelectionExample.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}


/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?cacheDirectory=true!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./docs/app/pages/UiElements/TextSelection/TextSelection.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _docsExample = __webpack_require__("./docs/app/mixins/docsExample.js");

var _docsExample2 = _interopRequireDefault(_docsExample);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'TextSelection',
  mixins: [_docsExample2.default]
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

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-0e048c55\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./docs/app/pages/UiElements/TextSelection/TextSelection.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('page-container',{attrs:{"centered":"","title":_vm.$t('pages.textSelection.title')}},[_c('div',{staticClass:"page-container-section"},[_c('p',[_vm._v("Text selection is indicated by highlighting a contiguous segment of text. On mobile, a selection handle is added to both the beginning and end of a selection and the actions related to the text appear in a dropdown menu positioned immediately above, but not overlapping, the selection.")]),_vm._v(" "),_c('p',[_vm._v("The selection colors follow the current theme colors, using the accent hue, and you don't need to configure anything to make it work. Go ahead and select any text to see it's background color:")])]),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('code-example',{attrs:{"title":"Text Selection","component":_vm.examples['selection-example']}})],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});