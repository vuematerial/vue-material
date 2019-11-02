webpackJsonp([188],{

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/Divider/examples/Divider.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(66/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/Divider/examples/Divider.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('divider', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['divider'] = {
    name: 'divider',
    source: "<template>\n  <div>\n    <div class=\"viewport\">\n      <md-toolbar :md-elevation=\"1\">\n        <span class=\"md-title\">Full</span>\n      </md-toolbar>\n\n      <md-list class=\"md-double-line\">\n        <md-subheader>Phone</md-subheader>\n\n        <md-list-item>\n          <md-icon class=\"md-primary\">phone</md-icon>\n\n          <div class=\"md-list-item-text\">\n            <span>(650) 555-1234</span>\n            <span>Mobile</span>\n          </div>\n\n          <md-button class=\"md-icon-button md-list-action\">\n            <md-icon>sms</md-icon>\n          </md-button>\n        </md-list-item>\n\n        <md-list-item class=\"md-inset\">\n          <div class=\"md-list-item-text\">\n            <span>(650) 555-1234</span>\n            <span>Mobile</span>\n          </div>\n\n          <md-button class=\"md-icon-button md-list-action\">\n            <md-icon>sms</md-icon>\n          </md-button>\n        </md-list-item>\n\n        <md-divider></md-divider>\n        <md-subheader>Email</md-subheader>\n\n        <md-list-item>\n          <md-icon class=\"md-primary\">email</md-icon>\n\n          <div class=\"md-list-item-text\">\n            <span>aliconnors@example.com</span>\n            <span>Personal</span>\n          </div>\n        </md-list-item>\n\n        <md-list-item class=\"md-inset\">\n          <div class=\"md-list-item-text\">\n            <span>ali_connors@example.com</span>\n            <span>Work</span>\n          </div>\n        </md-list-item>\n      </md-list>\n    </div>\n\n    <div class=\"viewport\">\n      <md-toolbar :md-elevation=\"1\">\n        <span class=\"md-title\">Inset</span>\n      </md-toolbar>\n\n      <md-list>\n        <md-list-item>\n          <md-icon>move_to_inbox</md-icon>\n          <span class=\"md-list-item-text\">Inbox</span>\n        </md-list-item>\n\n        <md-list-item>\n          <md-icon>send</md-icon>\n          <span class=\"md-list-item-text\">Sent Mail</span>\n        </md-list-item>\n\n        <md-list-item>\n          <md-icon>delete</md-icon>\n          <span class=\"md-list-item-text\">Trash</span>\n        </md-list-item>\n\n        <md-list-item>\n          <md-icon>error</md-icon>\n          <span class=\"md-list-item-text\">Spam</span>\n        </md-list-item>\n\n        <md-divider class=\"md-inset\"></md-divider>\n\n        <md-list-item>\n          <md-avatar>\n            <img src=\"https://placeimg.com/40/40/people/5\" alt=\"People\">\n          </md-avatar>\n\n          <span class=\"md-list-item-text\">Abbey Christansen</span>\n\n          <md-button class=\"md-icon-button md-list-action\">\n            <md-icon class=\"md-primary\">chat_bubble</md-icon>\n          </md-button>\n        </md-list-item>\n\n        <md-list-item>\n          <md-avatar>\n            <img src=\"https://placeimg.com/40/40/people/1\" alt=\"People\">\n          </md-avatar>\n\n          <span class=\"md-list-item-text\">Alex Nelson</span>\n\n          <md-button class=\"md-icon-button md-list-action\">\n            <md-icon class=\"md-primary\">chat_bubble</md-icon>\n          </md-button>\n        </md-list-item>\n\n        <md-list-item>\n          <md-avatar>\n            <img src=\"https://placeimg.com/40/40/people/6\" alt=\"People\">\n          </md-avatar>\n\n          <span class=\"md-list-item-text\">Mary Johnson</span>\n\n          <md-button class=\"md-icon-button md-list-action\">\n            <md-icon>chat_bubble</md-icon>\n          </md-button>\n        </md-list-item>\n      </md-list>\n    </div>\n  </div>\n</template>\n\n<script>\n  export default {\n    name: 'Divider'\n  }\n</script>\n\n<style lang=\"scss\" scoped>\n  .viewport {\n    width: 320px;\n    max-width: 100%;\n    display: inline-block;\n    vertical-align: top;\n    overflow: auto;\n    border: 1px solid rgba(#000, .12);\n  }\n</style>\n"
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

/***/ "./docs/app/pages/Components/Divider/Divider.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Divider_vue__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?cacheDirectory=true!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./docs/app/pages/Components/Divider/Divider.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Divider_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Divider_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Divider_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, (function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Divider_vue__[key]; })) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c68c5878_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Divider_vue__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-c68c5878\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./docs/app/pages/Components/Divider/Divider.vue");
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Divider_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c68c5878_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Divider_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* customBlocks */
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/Divider/examples/Divider.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}


/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?cacheDirectory=true!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./docs/app/pages/Components/Divider/Divider.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _docsExample = __webpack_require__("./docs/app/mixins/docsExample.js");

var _docsExample2 = _interopRequireDefault(_docsExample);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'DocDivider',
  mixins: [_docsExample2.default],
  data: function data() {
    return {
      classes: {
        headings: ['Name', 'Description'],
        props: [{
          name: 'md-inset',
          description: 'Creates a inset divider, which is commonly used to separate related content.'
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

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-c68c5878\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./docs/app/pages/Components/Divider/Divider.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('page-container',{attrs:{"centered":"","title":_vm.$t('pages.divider.title')}},[_c('div',{staticClass:"page-container-section"},[_c('p',[_vm._v("A divider is a thin, lightweight rule that groups content in lists and page layouts and helps to organize page content and hierarchy into individual tiles.")]),_vm._v(" "),_c('p',[_vm._v("The dividers can be used in lists and to separate content. They fit well in navigation panels and menus.")])]),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('h2',[_vm._v("Divider")]),_vm._v(" "),_c('code-example',{attrs:{"title":"Divider","component":_vm.examples['divider']}}),_vm._v(" "),_c('api-item',{attrs:{"title":"API - md-divider"}},[_c('p',[_vm._v("The following class can be use in dividers inside any component:")]),_vm._v(" "),_c('api-table',{attrs:{"slot":"classes","headings":_vm.classes.headings,"props":_vm.classes.props},slot:"classes"})],1)],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});