webpackJsonp([183],{

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/UiElements/Elevation/examples/ElevationExample.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(13/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/UiElements/Elevation/examples/ElevationExample.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('elevation-example', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['elevation-example'] = {
    name: 'elevation-example',
    source: "<template>\n  <div class=\"elevation-demo\">\n    <md-content class=\"md-elevation-1\">1</md-content>\n    <md-content class=\"md-elevation-2\">2</md-content>\n    <md-content class=\"md-elevation-3\">3</md-content>\n    <md-content class=\"md-elevation-4\">4</md-content>\n    <md-content class=\"md-elevation-5\">5</md-content>\n    <md-content class=\"md-elevation-6\">6</md-content>\n    <md-content class=\"md-elevation-7\">7</md-content>\n    <md-content class=\"md-elevation-8\">8</md-content>\n    <md-content class=\"md-elevation-9\">9</md-content>\n    <md-content class=\"md-elevation-10\">10</md-content>\n    <md-content class=\"md-elevation-11\">11</md-content>\n    <md-content class=\"md-elevation-12\">12</md-content>\n    <md-content class=\"md-elevation-13\">13</md-content>\n    <md-content class=\"md-elevation-14\">14</md-content>\n    <md-content class=\"md-elevation-15\">15</md-content>\n    <md-content class=\"md-elevation-16\">16</md-content>\n    <md-content class=\"md-elevation-17\">17</md-content>\n    <md-content class=\"md-elevation-18\">18</md-content>\n    <md-content class=\"md-elevation-19\">19</md-content>\n    <md-content class=\"md-elevation-20\">20</md-content>\n    <md-content class=\"md-elevation-21\">21</md-content>\n    <md-content class=\"md-elevation-22\">22</md-content>\n    <md-content class=\"md-elevation-23\">23</md-content>\n    <md-content class=\"md-elevation-24\">24</md-content>\n  </div>\n</template>\n\n<script>\n  export default {\n    name: 'ElevationExample'\n  }\n</script>\n\n<style lang=\"scss\" scoped>\n  .elevation-demo {\n    padding: 16px;\n    display: flex;\n    flex-wrap: wrap;\n  }\n\n  .md-content {\n    width: 100px;\n    height: 100px;\n    margin: 24px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n</style>\n"
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

/***/ "./docs/app/pages/UiElements/Elevation/Elevation.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Elevation_vue__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?cacheDirectory=true!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./docs/app/pages/UiElements/Elevation/Elevation.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Elevation_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Elevation_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Elevation_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, (function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Elevation_vue__[key]; })) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5bd6178a_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Elevation_vue__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-5bd6178a\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./docs/app/pages/UiElements/Elevation/Elevation.vue");
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Elevation_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5bd6178a_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Elevation_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* customBlocks */
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/UiElements/Elevation/examples/ElevationExample.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}


/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?cacheDirectory=true!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./docs/app/pages/UiElements/Elevation/Elevation.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _docsExample = __webpack_require__("./docs/app/mixins/docsExample.js");

var _docsExample2 = _interopRequireDefault(_docsExample);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'Elevation',
  mixins: [_docsExample2.default],
  data: function data() {
    return {
      classes: {
        headings: ['Name', 'Description'],
        props: [{
          name: 'md-elevation-[size]',
          description: 'Add an elevation to the target element. The size can be 1 to 24. Ex.: <code>md-elevation-4</code>'
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

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-5bd6178a\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./docs/app/pages/UiElements/Elevation/Elevation.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('page-container',{attrs:{"centered":"","title":_vm.$t('pages.elevation.title')}},[_c('div',{staticClass:"page-container-section"},[_c('p',[_vm._v("Measured from the front of one surface to the front of another, an element’s elevation indicates the distance between surfaces and the depth of its shadow.")]),_vm._v(" "),_c('p',[_vm._v("Elevation classes range from 1px to 24px in depth. You can add this class to any HTML tag.")])]),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('code-example',{attrs:{"title":"Elevation","component":_vm.examples['elevation-example']}}),_vm._v(" "),_c('api-item',{attrs:{"title":"API - md-elevation"}},[_c('p',[_vm._v("The following classes can be applied to any HTML element:")]),_vm._v(" "),_c('api-table',{attrs:{"slot":"classes","headings":_vm.classes.headings,"props":_vm.classes.props},slot:"classes"})],1)],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});