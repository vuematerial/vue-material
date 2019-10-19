webpackJsonp([170],{

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/Tooltip/examples/Delay.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(16/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/Tooltip/examples/Delay.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('delay', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['delay'] = {
    name: 'delay',
    source: "<template>\n  <div>\n    <span>\n      No delay\n\n      <md-tooltip>Bottom</md-tooltip>\n    </span>\n\n    <span>\n      300ms\n\n      <md-tooltip md-delay=\"300\">Bottom</md-tooltip>\n    </span>\n\n    <span>\n      1s\n\n      <md-tooltip md-delay=\"1000\">Bottom</md-tooltip>\n    </span>\n  </div>\n</template>\n\n<script>\n  export default {\n    name: 'Delay'\n  }\n</script>\n\n<style lang=\"scss\" scoped>\n  span {\n    min-width: 60px;\n    margin: 36px;\n    display: inline-block;\n    text-align: center;\n  }\n</style>\n"
  };
};

/***/ }),

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/Tooltip/examples/Direction.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(15/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/Tooltip/examples/Direction.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('direction', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['direction'] = {
    name: 'direction',
    source: "<template>\n  <div>\n    <md-avatar>\n      <img src=\"/assets/examples/avatar.png\" alt=\"Avatar\">\n      <md-tooltip md-direction=\"top\">Top</md-tooltip>\n    </md-avatar>\n\n    <md-avatar>\n      <img src=\"/assets/examples/avatar.png\" alt=\"Avatar\">\n      <md-tooltip md-direction=\"right\">Right</md-tooltip>\n    </md-avatar>\n\n    <md-avatar>\n      <img src=\"/assets/examples/avatar.png\" alt=\"Avatar\">\n      <md-tooltip md-direction=\"bottom\">Bottom</md-tooltip>\n    </md-avatar>\n\n    <md-avatar>\n      <img src=\"/assets/examples/avatar.png\" alt=\"Avatar\">\n      <md-tooltip md-direction=\"left\">Left</md-tooltip>\n    </md-avatar>\n  </div>\n</template>\n\n<script>\n  export default {\n    name: 'Direction'\n  }\n</script>\n\n<style lang=\"scss\" scoped>\n  .md-avatar {\n    margin: 36px;\n  }\n</style>\n"
  };
};

/***/ }),

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/Tooltip/examples/Dynamically.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(14/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/Tooltip/examples/Dynamically.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('dynamically', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['dynamically'] = {
    name: 'dynamically',
    source: "<template>\n  <div>\n    <md-avatar>\n      <img src=\"/assets/examples/avatar.png\" alt=\"Avatar\">\n      <md-tooltip :md-active.sync=\"tooltipActive\">Bottom</md-tooltip>\n    </md-avatar>\n\n    <md-button class=\"md-raised md-primary\" @click=\"tooltipActive = !tooltipActive\">Toggle Tooltip</md-button>\n  </div>\n</template>\n\n<script>\n  export default {\n    name: 'Dynamically',\n    data: () => ({\n      tooltipActive: false\n    })\n  }\n</script>\n\n<style lang=\"scss\" scoped>\n  .md-avatar,\n  .md-button {\n    margin: 36px;\n  }\n</style>\n"
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

/***/ "./docs/app/pages/Components/Tooltip/Tooltip.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Tooltip_vue__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?cacheDirectory=true!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./docs/app/pages/Components/Tooltip/Tooltip.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Tooltip_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Tooltip_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Tooltip_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, (function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Tooltip_vue__[key]; })) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_131a6bda_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Tooltip_vue__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-131a6bda\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./docs/app/pages/Components/Tooltip/Tooltip.vue");
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Tooltip_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_131a6bda_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Tooltip_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* customBlocks */
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/Tooltip/examples/Direction.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/Tooltip/examples/Delay.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/Tooltip/examples/Dynamically.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}


/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?cacheDirectory=true!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./docs/app/pages/Components/Tooltip/Tooltip.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _docsExample = __webpack_require__("./docs/app/mixins/docsExample.js");

var _docsExample2 = _interopRequireDefault(_docsExample);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'DocTooltip',
  mixins: [_docsExample2.default],
  data: function data() {
    return {
      props: {
        headings: ['Name', 'Description', 'Default'],
        props: [{
          name: 'md-direction',
          type: 'String',
          description: 'Specifies where the tooltip will appear based on the parent element.',
          defaults: 'bottom'
        }, {
          offset: true,
          name: 'md-direction="top"',
          type: 'String',
          description: 'Shows the tooltip above the parent element.',
          defaults: '-'
        }, {
          offset: true,
          name: 'md-direction="right"',
          type: 'String',
          description: 'Shows the tooltip after the parent element.',
          defaults: '-'
        }, {
          offset: true,
          name: 'md-direction="bottom"',
          type: 'String',
          description: 'Shows the tooltip below the parent element.',
          defaults: '-'
        }, {
          offset: true,
          name: 'md-direction="left"',
          type: 'String',
          description: 'Shows the tooltip before the parent element.',
          defaults: '-'
        }, {
          name: 'md-delay',
          type: 'Number',
          description: 'Postpones the exhibition of a tooltip. In milliseconds.',
          defaults: '0'
        }, {
          name: 'md-active',
          type: 'Boolean',
          description: 'Used to trigger the visibility of a tooltip. Should be used with the <code>.sync</code> modifier.',
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

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-131a6bda\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./docs/app/pages/Components/Tooltip/Tooltip.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('page-container',{attrs:{"centered":"","title":_vm.$t('pages.tooltip.title')}},[_c('div',{staticClass:"page-container-section"},[_c('p',[_vm._v("Tooltips identify an element when they are activated. They may contain brief helper text about its function. For example, they may contain text information about actionable icons.")]),_vm._v(" "),_c('p',[_vm._v("You can setup a tooltip using optional direction and delay:")])]),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('h2',[_vm._v("Direction")]),_vm._v(" "),_c('p',[_vm._v("You can set the tooltip direction using the four available values - "),_c('code',[_vm._v("top")]),_vm._v(", "),_c('code',[_vm._v("right")]),_vm._v(", "),_c('code',[_vm._v("bottom")]),_vm._v(" and "),_c('code',[_vm._v("left")]),_vm._v(":")]),_vm._v(" "),_c('code-example',{attrs:{"title":"Text position","component":_vm.examples['direction']}})],1),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('h2',[_vm._v("Delay")]),_vm._v(" "),_c('p',[_vm._v("Sometimes you don't want to pop the tooltip right away. To achieve that you can use a custom delay in milliseconds to postpone the action:")]),_vm._v(" "),_c('code-example',{attrs:{"title":"Delay","component":_vm.examples['delay']}})],1),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('h2',[_vm._v("Dynamically show a tooltip")]),_vm._v(" "),_c('p',[_vm._v("In some cases we may want to trigger the tooltip manually, to make sure that your user will understand and action. You can do it:")]),_vm._v(" "),_c('code-example',{attrs:{"title":"Trigger","component":_vm.examples['dynamically']}}),_vm._v(" "),_c('api-item',{attrs:{"title":"API - md-tooltip"}},[_c('p',[_vm._v("The following options can be applied to all tooltips:")]),_vm._v(" "),_c('api-table',{attrs:{"slot":"props","headings":_vm.props.headings,"props":_vm.props.props},slot:"props"})],1)],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});