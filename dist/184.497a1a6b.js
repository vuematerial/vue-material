webpackJsonp([184],{

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/Subheader/examples/SubheaderExample.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(28/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/Subheader/examples/SubheaderExample.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('subheader-example', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['subheader-example'] = {
    name: 'subheader-example',
    source: "<template>\n  <div>\n    <div class=\"viewport\">\n      <md-toolbar :md-elevation=\"1\">\n        <span class=\"md-title\">Default</span>\n      </md-toolbar>\n\n      <md-list class=\"md-double-line\">\n        <md-subheader>Phone</md-subheader>\n\n        <md-list-item>\n          <md-icon class=\"md-primary\">phone</md-icon>\n\n          <div class=\"md-list-item-text\">\n            <span>(650) 555-1234</span>\n            <span>Mobile</span>\n          </div>\n\n          <md-button class=\"md-icon-button md-list-action\">\n            <md-icon>sms</md-icon>\n          </md-button>\n        </md-list-item>\n\n        <md-list-item class=\"md-inset\">\n          <div class=\"md-list-item-text\">\n            <span>(650) 555-1234</span>\n            <span>Mobile</span>\n          </div>\n\n          <md-button class=\"md-icon-button md-list-action\">\n            <md-icon>sms</md-icon>\n          </md-button>\n        </md-list-item>\n\n        <md-divider></md-divider>\n        <md-subheader>Email</md-subheader>\n\n        <md-list-item>\n          <md-icon class=\"md-primary\">email</md-icon>\n\n          <div class=\"md-list-item-text\">\n            <span>aliconnors@example.com</span>\n            <span>Personal</span>\n          </div>\n        </md-list-item>\n\n        <md-list-item class=\"md-inset\">\n          <div class=\"md-list-item-text\">\n            <span>ali_connors@example.com</span>\n            <span>Work</span>\n          </div>\n        </md-list-item>\n      </md-list>\n    </div>\n\n    <div class=\"viewport\">\n      <md-toolbar :md-elevation=\"1\">\n        <span class=\"md-title\">Primary</span>\n      </md-toolbar>\n\n      <md-list>\n        <md-subheader class=\"md-primary\">Navigation</md-subheader>\n\n        <md-list-item>\n          <md-icon>move_to_inbox</md-icon>\n          <span class=\"md-list-item-text\">Inbox</span>\n        </md-list-item>\n\n        <md-list-item>\n          <md-icon>send</md-icon>\n          <span class=\"md-list-item-text\">Sent Mail</span>\n        </md-list-item>\n\n        <md-list-item>\n          <md-icon>delete</md-icon>\n          <span class=\"md-list-item-text\">Trash</span>\n        </md-list-item>\n\n        <md-list-item>\n          <md-icon>error</md-icon>\n          <span class=\"md-list-item-text\">Spam</span>\n        </md-list-item>\n\n        <md-divider class=\"md-inset\"></md-divider>\n        <md-subheader class=\"md-primary\">Contacts</md-subheader>\n\n        <md-list-item>\n          <md-avatar>\n            <img src=\"https://placeimg.com/40/40/people/5\" alt=\"People\">\n          </md-avatar>\n\n          <span class=\"md-list-item-text\">Abbey Christansen</span>\n\n          <md-button class=\"md-icon-button md-list-action\">\n            <md-icon class=\"md-primary\">chat_bubble</md-icon>\n          </md-button>\n        </md-list-item>\n\n        <md-list-item>\n          <md-avatar>\n            <img src=\"https://placeimg.com/40/40/people/1\" alt=\"People\">\n          </md-avatar>\n\n          <span class=\"md-list-item-text\">Alex Nelson</span>\n\n          <md-button class=\"md-icon-button md-list-action\">\n            <md-icon class=\"md-primary\">chat_bubble</md-icon>\n          </md-button>\n        </md-list-item>\n\n        <md-list-item>\n          <md-avatar>\n            <img src=\"https://placeimg.com/40/40/people/6\" alt=\"People\">\n          </md-avatar>\n\n          <span class=\"md-list-item-text\">Mary Johnson</span>\n\n          <md-button class=\"md-icon-button md-list-action\">\n            <md-icon>chat_bubble</md-icon>\n          </md-button>\n        </md-list-item>\n      </md-list>\n    </div>\n  </div>\n</template>\n\n<script>\n  export default {\n    name: 'SubheaderExample'\n  }\n</script>\n\n<style lang=\"scss\" scoped>\n  .viewport {\n    width: 320px;\n    max-width: 100%;\n    display: inline-block;\n    vertical-align: top;\n    overflow: auto;\n    border: 1px solid rgba(#000, .12);\n  }\n</style>\n\n"
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

/***/ "./docs/app/pages/Components/Subheader/Subheader.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Subheader_vue__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?cacheDirectory=true!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./docs/app/pages/Components/Subheader/Subheader.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Subheader_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Subheader_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Subheader_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, (function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Subheader_vue__[key]; })) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_869a7ca4_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Subheader_vue__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-869a7ca4\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./docs/app/pages/Components/Subheader/Subheader.vue");
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Subheader_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_869a7ca4_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Subheader_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* customBlocks */
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/Subheader/examples/SubheaderExample.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}


/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?cacheDirectory=true!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./docs/app/pages/Components/Subheader/Subheader.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _docsExample = __webpack_require__("./docs/app/mixins/docsExample.js");

var _docsExample2 = _interopRequireDefault(_docsExample);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'DocSubheader',
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
//
//
//
//

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-869a7ca4\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./docs/app/pages/Components/Subheader/Subheader.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('page-container',{attrs:{"centered":"","title":_vm.$t('pages.subheader.title')}},[_c('div',{staticClass:"page-container-section"},[_c('p',[_vm._v("Subheaders are list tiles that delineate sections of a list or grid list.")]),_vm._v(" "),_c('p',[_vm._v("The subheader can be used in lists, grid and even on selects and are typically related to filtering or sorting criteria. They fit well in navigation panels and grid lists.")])]),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('h2',[_vm._v("Subheader")]),_vm._v(" "),_c('code-example',{attrs:{"title":"Subheader","component":_vm.examples['subheader-example']}}),_vm._v(" "),_c('api-item',{attrs:{"title":"API - md-subheader"}},[_c('p',[_vm._v("This component does not have any extra option.")])])],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});