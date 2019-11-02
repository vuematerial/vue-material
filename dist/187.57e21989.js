webpackJsonp([187],{

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/File/examples/FileField.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(126/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/File/examples/FileField.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('file-field', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['file-field'] = {
    name: 'file-field',
    source: "<template>\n  <div>\n    <md-field>\n      <label>Single</label>\n      <md-file v-model=\"single\" />\n    </md-field>\n\n    <md-field>\n      <label>Upload files</label>\n      <md-file v-model=\"placeholder\" placeholder=\"A nice input placeholder\" />\n    </md-field>\n\n    <md-field>\n      <label>Disabled</label>\n      <md-file v-model=\"disabled\" disabled/>\n    </md-field>\n\n    <md-field>\n      <label>Initial value</label>\n      <md-file v-model=\"initial\" />\n    </md-field>\n\n    <md-field>\n      <label>Multiple</label>\n      <md-file v-model=\"multiple\" multiple />\n    </md-field>\n\n    <md-field>\n      <label>Only images</label>\n      <md-file v-model=\"single\" accept=\"image/*\" />\n    </md-field>\n  </div>\n</template>\n\n<script>\n  export default {\n    name: 'FileField',\n    data: () => ({\n      initial: 'vue-material-is-awesome.jpg',\n      single: null,\n      placeholder: null,\n      disabled: null,\n      multiple: null\n    })\n  }\n</script>\n"
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

/***/ "./docs/app/pages/Components/File/File.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_File_vue__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?cacheDirectory=true!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./docs/app/pages/Components/File/File.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_File_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_File_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_File_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, (function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_File_vue__[key]; })) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0584ac09_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_File_vue__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-0584ac09\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./docs/app/pages/Components/File/File.vue");
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_File_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0584ac09_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_File_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* customBlocks */
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/File/examples/FileField.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}


/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?cacheDirectory=true!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./docs/app/pages/Components/File/File.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _docsExample = __webpack_require__("./docs/app/mixins/docsExample.js");

var _docsExample2 = _interopRequireDefault(_docsExample);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'DocFile',
  mixins: [_docsExample2.default],
  data: function data() {
    return {
      api: {
        regular: {
          events: {
            headings: ['Name', 'Description', 'Value'],
            props: [{
              name: 'md-change',
              description: 'Emits a FileList. Triggered every time a file is selected.',
              value: 'FileList'
            }]
          }
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

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-0584ac09\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./docs/app/pages/Components/File/File.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('page-container',{attrs:{"centered":"","title":_vm.$t('pages.file.title')}},[_c('div',{staticClass:"page-container-section"},[_c('p',[_vm._v("File inputs allows the user to pick one or multiple files. It can also filter the file type just like a normal input file or select multiple files.")]),_vm._v(" "),_c('note-block',{attrs:{"tip":""}},[_c('code',[_vm._v("md-file")]),_vm._v(" works just like a regular "),_c('code',[_vm._v("md-input")]),_vm._v(" component. This means that you can pass any "),_c('code',[_vm._v("md-input")]),_vm._v(" prop to "),_c('code',[_vm._v("md-file")]),_vm._v(", like "),_c('strong',[_vm._v("placeholder")]),_vm._v(", "),_c('strong',[_vm._v("required")]),_vm._v(" and "),_c('strong',[_vm._v("disabled")]),_vm._v(", for example.")])],1),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('h2',[_vm._v("Regular File")]),_vm._v(" "),_c('code-example',{attrs:{"title":"File Field","component":_vm.examples['file-field']}}),_vm._v(" "),_c('api-item',{attrs:{"title":"API - md-file"}},[_c('p',[_vm._v("The following options can be applied to file component:")]),_vm._v(" "),_c('api-table',{attrs:{"slot":"events","headings":_vm.api.regular.events.headings,"props":_vm.api.regular.events.props},slot:"events"})],1),_vm._v(" "),_c('note-block',{attrs:{"tip":""}},[_vm._v("All other "),_c('code',[_vm._v("<input type=\"file\">")]),_vm._v(" attributes, such as "),_c('strong',[_vm._v("multiple")]),_vm._v(" and "),_c('strong',[_vm._v("accept")]),_vm._v(", can be used on "),_c('code',[_vm._v("md-field")]),_vm._v(".")])],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});