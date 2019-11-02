webpackJsonp([182],{

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/UiElements/Scrollbar/examples/ScrollbarExample.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(5/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/UiElements/Scrollbar/examples/ScrollbarExample.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('scrollbar-example', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['scrollbar-example'] = {
    name: 'scrollbar-example',
    source: "<template>\n  <div>\n    <md-content class=\"md-scrollbar\">\n      <p>Autem enim asperiores consequuntur neque sequi ea similique ex maxime, repudiandae doloremque aliquam exercitationem omnis assumenda. Rem suscipit pariatur vero facere?</p>\n      <p>Necessitatibus aut cumque sit ad. Tempora perferendis nostrum, in assumenda accusantium vitae vero pariatur sapiente nam quisquam, ducimus distinctio quae nisi.</p>\n      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed perspiciatis sit quaerat molestiae iusto adipisci possimus cum modi quam qui esse vero provident, ad, deserunt laborum quas eligendi beatae quibusdam.</p>\n    </md-content>\n  </div>\n</template>\n\n<script>\n  export default {\n    name: 'ScrollbarExample'\n  }\n</script>\n\n<style lang=\"scss\" scoped>\n  .md-content {\n    max-width: 400px;\n    max-height: 200px;\n    overflow: auto;\n  }\n</style>\n"
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

/***/ "./docs/app/pages/UiElements/Scrollbar/Scrollbar.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Scrollbar_vue__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?cacheDirectory=true!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./docs/app/pages/UiElements/Scrollbar/Scrollbar.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Scrollbar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Scrollbar_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Scrollbar_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, (function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Scrollbar_vue__[key]; })) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6b2f67d0_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Scrollbar_vue__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-6b2f67d0\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./docs/app/pages/UiElements/Scrollbar/Scrollbar.vue");
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Scrollbar_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6b2f67d0_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Scrollbar_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* customBlocks */
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/UiElements/Scrollbar/examples/ScrollbarExample.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}


/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?cacheDirectory=true!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./docs/app/pages/UiElements/Scrollbar/Scrollbar.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _docsExample = __webpack_require__("./docs/app/mixins/docsExample.js");

var _docsExample2 = _interopRequireDefault(_docsExample);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'Scrollbar',
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
//
//

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-6b2f67d0\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./docs/app/pages/UiElements/Scrollbar/Scrollbar.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('page-container',{attrs:{"centered":"","title":_vm.$t('pages.scrollbar.title')}},[_c('div',{staticClass:"page-container-section"},[_c('p',[_vm._v("Scrollbars show the track on how much a content has been reviewed. This is an standard on every single device out there.")]),_vm._v(" "),_c('p',[_vm._v("To enable the Material scrollbar styles, just add the "),_c('code',[_vm._v("md-scrollbar")]),_vm._v(" class to the scrollable component that you want. If you want this effect in the whole page, you can put the class in the "),_c('code',[_vm._v("html")]),_vm._v(" tag.")]),_vm._v(" "),_c('note-block',{attrs:{"alert":""}},[_vm._v("The scrollbars "),_c('strong',[_vm._v("only")]),_vm._v(" works on "),_c('code',[_vm._v("html")]),_vm._v(" tag and on Vue Material components, like "),_c('code',[_vm._v("md-content")]),_vm._v(" or "),_c('code',[_vm._v("md-drawer")]),_vm._v(". Due to CSS limitations, the style will be applied only on Webkit/Blink browsers (Chrome, Safari and Opera).")])],1),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('code-example',{attrs:{"title":"Scrollbar","component":_vm.examples['scrollbar-example']}})],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});