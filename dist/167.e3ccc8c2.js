webpackJsonp([167],{

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/ProgressBar/examples/ProgressBarBuffer.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(44/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/ProgressBar/examples/ProgressBarBuffer.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('progress-bar-buffer', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['progress-bar-buffer'] = {
    name: 'progress-bar-buffer',
    source: "<template>\n  <div>\n    <md-progress-bar md-mode=\"buffer\" :md-value=\"amount\" :md-buffer=\"buffer\"></md-progress-bar>\n    <md-progress-bar class=\"md-accent\" md-mode=\"buffer\" :md-value=\"amount\" :md-buffer=\"buffer\"></md-progress-bar>\n    <div>\n      Progress <br>\n      <input type=\"range\" v-model.number=\"amount\"> {{ amount }}%\n    </div>\n\n    <div>\n      Buffer <br>\n      <input type=\"range\" v-model.number=\"buffer\"> {{ buffer }}%\n    </div>\n  </div>\n</template>\n\n<script>\n  export default {\n    name: 'ProgressBarBuffer',\n    data: () => ({\n      amount: 25,\n      buffer: 40\n    })\n  }\n</script>\n\n<style lang=\"scss\" scoped>\n  .md-progress-bar {\n    margin: 24px;\n  }\n</style>\n"
  };
};

/***/ }),

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/ProgressBar/examples/ProgressBarDeterminate.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(43/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/ProgressBar/examples/ProgressBarDeterminate.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('progress-bar-determinate', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['progress-bar-determinate'] = {
    name: 'progress-bar-determinate',
    source: "<template>\n  <div>\n    <md-progress-bar md-mode=\"determinate\" :md-value=\"amount\"></md-progress-bar>\n    <md-progress-bar class=\"md-accent\" md-mode=\"determinate\" :md-value=\"amount\"></md-progress-bar>\n    <input type=\"range\" v-model.number=\"amount\"> {{ amount }}%\n  </div>\n</template>\n\n<script>\n  export default {\n    name: 'ProgressBarDeterminate',\n    data: () => ({\n      amount: 0\n    })\n  }\n</script>\n\n<style lang=\"scss\" scoped>\n  .md-progress-bar {\n    margin: 24px;\n  }\n</style>\n"
  };
};

/***/ }),

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/ProgressBar/examples/ProgressBarIndeterminate.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(42/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/ProgressBar/examples/ProgressBarIndeterminate.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('progress-bar-indeterminate', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['progress-bar-indeterminate'] = {
    name: 'progress-bar-indeterminate',
    source: "<template>\n  <div>\n    <md-progress-bar md-mode=\"indeterminate\"></md-progress-bar>\n    <md-progress-bar class=\"md-accent\" md-mode=\"indeterminate\"></md-progress-bar>\n  </div>\n</template>\n\n<script>\n  export default {\n    name: 'ProgressBarIndeterminate'\n  }\n</script>\n\n<style lang=\"scss\" scoped>\n  .md-progress-bar {\n    margin: 24px;\n  }\n</style>\n"
  };
};

/***/ }),

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/ProgressBar/examples/ProgressBarQuery.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(41/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/ProgressBar/examples/ProgressBarQuery.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('progress-bar-query', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['progress-bar-query'] = {
    name: 'progress-bar-query',
    source: "<template>\n  <div>\n    <md-progress-bar md-mode=\"query\"></md-progress-bar>\n    <md-progress-bar class=\"md-accent\" md-mode=\"query\"></md-progress-bar>\n  </div>\n</template>\n\n<script>\n  export default {\n    name: 'ProgressBarQuery'\n  }\n</script>\n\n<style lang=\"scss\" scoped>\n  .md-progress-bar {\n    margin: 24px;\n  }\n</style>\n"
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

/***/ "./docs/app/pages/Components/ProgressBar/ProgressBar.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_ProgressBar_vue__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?cacheDirectory=true!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./docs/app/pages/Components/ProgressBar/ProgressBar.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_ProgressBar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_ProgressBar_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_ProgressBar_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, (function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_ProgressBar_vue__[key]; })) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_14a036e6_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ProgressBar_vue__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-14a036e6\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./docs/app/pages/Components/ProgressBar/ProgressBar.vue");
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_ProgressBar_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_14a036e6_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ProgressBar_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* customBlocks */
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/ProgressBar/examples/ProgressBarIndeterminate.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/ProgressBar/examples/ProgressBarDeterminate.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/ProgressBar/examples/ProgressBarBuffer.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/ProgressBar/examples/ProgressBarQuery.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}


/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?cacheDirectory=true!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./docs/app/pages/Components/ProgressBar/ProgressBar.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _docsExample = __webpack_require__("./docs/app/mixins/docsExample.js");

var _docsExample2 = _interopRequireDefault(_docsExample);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'DocProgressBar',
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
          description: 'The default mode. Works along with <code>md-value</code> prop. Apply a 0% to 100% loading bar.',
          defaults: '-'
        }, {
          offset: true,
          name: 'md-mode="indeterminate"',
          type: 'String',
          description: 'Create a indeterminate loading bar',
          defaults: '-'
        }, {
          offset: true,
          name: 'md-mode="query"',
          type: 'String',
          description: 'Create a loading bar for queries. Useful when retrieving a lot of contents.',
          defaults: '-'
        }, {
          offset: true,
          name: 'md-mode="buffer"',
          type: 'String',
          description: 'Create a loading bar with a buffer. Commonly used in videos.',
          defaults: '-'
        }, {
          name: 'md-value',
          type: 'Number',
          description: 'The current progress amount. From 0 to 100.',
          defaults: 'null'
        }, {
          name: 'md-buffer',
          type: 'Number',
          description: 'The current buffer amount. From 0 to 100.',
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

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-14a036e6\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./docs/app/pages/Components/ProgressBar/ProgressBar.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('page-container',{attrs:{"centered":"","title":_vm.$t('pages.progressBar.title')}},[_c('div',{staticClass:"page-container-section"},[_c('p',[_vm._v("Progress indicators are visual indications of an app loading content.")]),_vm._v(" "),_c('p',[_vm._v("Progress bars have 4 types for each operation that your application may need: Determinate, Indeterminate, Query or Buffer.")])]),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('h2',[_vm._v("Progress Bar")]),_vm._v(" "),_c('p',[_vm._v("When indicators are determinate they indicate how long an operation will take when the percentage complete is detectable.")]),_vm._v(" "),_c('code-example',{attrs:{"title":"Determinate","component":_vm.examples['progress-bar-determinate']}})],1),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('p',[_vm._v("When indicators are indeterminate they request that the user wait while something finishes when it’s not necessary to indicate how long it will take.")]),_vm._v(" "),_c('code-example',{attrs:{"title":"Indeterminate","component":_vm.examples['progress-bar-indeterminate']}})],1),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('p',[_vm._v("When dealing with media content like streaming videos we can use progress bars to show the buffering progress indicator on a video.")]),_vm._v(" "),_c('code-example',{attrs:{"title":"Buffer","component":_vm.examples['progress-bar-buffer']}})],1),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('p',[_vm._v("When searching or filtering a large amount of data, we can show a query progress bar. This will tell the user that some content is being retrieved.")]),_vm._v(" "),_c('code-example',{attrs:{"title":"Query","component":_vm.examples['progress-bar-query']}}),_vm._v(" "),_c('api-item',{attrs:{"title":"API - md-progress-bar"}},[_c('p',[_vm._v("The following options can be applied to all progress bars:")]),_vm._v(" "),_c('api-table',{attrs:{"slot":"props","headings":_vm.props.headings,"props":_vm.props.props},slot:"props"})],1)],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});