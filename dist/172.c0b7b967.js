webpackJsonp([172],{

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/ProgressSpinner/examples/ProgressSpinnerDeterminate.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(40/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/ProgressSpinner/examples/ProgressSpinnerDeterminate.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('progress-spinner-determinate', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['progress-spinner-determinate'] = {
    name: 'progress-spinner-determinate',
    source: "<template>\n  <div>\n    <md-progress-spinner md-mode=\"determinate\" :md-value=\"amount\"></md-progress-spinner>\n    <md-progress-spinner class=\"md-accent\" md-mode=\"determinate\" :md-value=\"amount\"></md-progress-spinner>\n    <div>\n      <input type=\"range\" v-model.number=\"amount\"> {{ amount }}%\n    </div>\n  </div>\n</template>\n\n<script>\n  export default {\n    name: 'ProgressSpinnerDeterminate',\n    data: () => ({\n      amount: 20\n    })\n  }\n</script>\n\n<style lang=\"scss\" scoped>\n  .md-progress-spinner {\n    margin: 24px;\n  }\n</style>\n"
  };
};

/***/ }),

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/ProgressSpinner/examples/ProgressSpinnerIndeterminate.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(39/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/ProgressSpinner/examples/ProgressSpinnerIndeterminate.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('progress-spinner-indeterminate', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['progress-spinner-indeterminate'] = {
    name: 'progress-spinner-indeterminate',
    source: "<template>\n  <div>\n    <md-progress-spinner md-mode=\"indeterminate\"></md-progress-spinner>\n    <md-progress-spinner class=\"md-accent\" md-mode=\"indeterminate\"></md-progress-spinner>\n  </div>\n</template>\n\n<script>\n  export default {\n    name: 'ProgressSpinnerIndeterminate'\n  }\n</script>\n\n<style lang=\"scss\" scoped>\n  .md-progress-spinner {\n    margin: 24px;\n  }\n</style>\n"
  };
};

/***/ }),

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/ProgressSpinner/examples/ProgressSpinnerSizes.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(38/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/ProgressSpinner/examples/ProgressSpinnerSizes.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('progress-spinner-sizes', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['progress-spinner-sizes'] = {
    name: 'progress-spinner-sizes',
    source: "<template>\n  <div>\n    <md-progress-spinner :md-diameter=\"100\" :md-stroke=\"10\" md-mode=\"indeterminate\"></md-progress-spinner>\n    <md-progress-spinner :md-diameter=\"30\" :md-stroke=\"3\" md-mode=\"indeterminate\"></md-progress-spinner>\n    <md-progress-spinner class=\"md-accent\" :md-stroke=\"3\" md-mode=\"indeterminate\"></md-progress-spinner>\n    <md-progress-spinner class=\"md-accent\" :md-diameter=\"30\" md-mode=\"indeterminate\"></md-progress-spinner>\n  </div>\n</template>\n\n<script>\n  export default {\n    name: 'ProgressSpinnerSizes'\n  }\n</script>\n\n<style lang=\"scss\" scoped>\n  .md-progress-spinner {\n    margin: 24px;\n  }\n</style>\n"
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

/***/ "./docs/app/pages/Components/ProgressSpinner/ProgressSpinner.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_ProgressSpinner_vue__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?cacheDirectory=true!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./docs/app/pages/Components/ProgressSpinner/ProgressSpinner.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_ProgressSpinner_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_ProgressSpinner_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_ProgressSpinner_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, (function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_ProgressSpinner_vue__[key]; })) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f8c78318_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ProgressSpinner_vue__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-f8c78318\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./docs/app/pages/Components/ProgressSpinner/ProgressSpinner.vue");
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_ProgressSpinner_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f8c78318_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ProgressSpinner_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* customBlocks */
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/ProgressSpinner/examples/ProgressSpinnerIndeterminate.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/ProgressSpinner/examples/ProgressSpinnerDeterminate.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/ProgressSpinner/examples/ProgressSpinnerSizes.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}


/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?cacheDirectory=true!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./docs/app/pages/Components/ProgressSpinner/ProgressSpinner.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _docsExample = __webpack_require__("./docs/app/mixins/docsExample.js");

var _docsExample2 = _interopRequireDefault(_docsExample);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'DocProgressSpinner',
  mixins: [_docsExample2.default],
  data: function data() {
    return {
      props: {
        headings: ['Name', 'Description', 'Default'],
        props: [{
          name: 'md-mode',
          type: 'String',
          description: 'Set the mode the progress. See below the detailed description of each mode.',
          defaults: 'determinate'
        }, {
          offset: true,
          name: 'md-mode="determinate"',
          type: 'String',
          description: 'The default mode. Works along with <code>md-value</code> prop. Apply a 0% to 100% loading spinner.',
          defaults: '-'
        }, {
          offset: true,
          name: 'md-mode="indeterminate"',
          type: 'String',
          description: 'Create a indeterminate loading spinner',
          defaults: '-'
        }, {
          name: 'md-value',
          type: 'Number',
          description: 'The current progress amount. From 0 to 100.',
          defaults: 'null'
        }, {
          name: 'md-diameter',
          type: 'Number',
          description: 'The diameter of the spinner in px.',
          defaults: '60'
        }, {
          name: 'md-stroke',
          type: 'Number',
          description: 'The stroke size.',
          defaults: '6'
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

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-f8c78318\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./docs/app/pages/Components/ProgressSpinner/ProgressSpinner.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('page-container',{attrs:{"centered":"","title":_vm.$t('pages.progressSpinner.title')}},[_c('div',{staticClass:"page-container-section"},[_c('p',[_vm._v("Progress indicators are visual indications of an app loading content.")]),_vm._v(" "),_c('p',[_vm._v("Progress spinners have 2 types for each operation that your application may need: Determinate or Indeterminate.")])]),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('h2',[_vm._v("Progress Spinner")]),_vm._v(" "),_c('p',[_vm._v("When indicators are determinate they indicate how long an operation will take when the percentage complete is detectable.")]),_vm._v(" "),_c('code-example',{attrs:{"title":"Determinate","component":_vm.examples['progress-spinner-determinate']}})],1),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('p',[_vm._v("When indicators are indeterminate they request that the user wait while something finishes when it’s not necessary to indicate how long it will take.")]),_vm._v(" "),_c('code-example',{attrs:{"title":"Indeterminate","component":_vm.examples['progress-spinner-indeterminate']}})],1),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('p',[_vm._v("You can always change the sizes and stroke with of a spinner to suit your needs:")]),_vm._v(" "),_c('code-example',{attrs:{"title":"Sizes","component":_vm.examples['progress-spinner-sizes']}}),_vm._v(" "),_c('api-item',{attrs:{"title":"API - md-progress-spinner"}},[_c('p',[_vm._v("The following options can be applied to all progress spinners:")]),_vm._v(" "),_c('api-table',{attrs:{"slot":"props","headings":_vm.props.headings,"props":_vm.props.props},slot:"props"})],1)],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});