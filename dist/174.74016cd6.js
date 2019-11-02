webpackJsonp([174],{

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/EmptyState/examples/EmptyStateBasic.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(128/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/EmptyState/examples/EmptyStateBasic.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('empty-state-basic', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['empty-state-basic'] = {
    name: 'empty-state-basic',
    source: "<template>\n  <div>\n    <md-empty-state\n      md-icon=\"devices_other\"\n      md-label=\"Create your first project\"\n      md-description=\"Creating project, you'll be able to upload your design and collaborate with people.\">\n      <md-button class=\"md-primary md-raised\">Create first project</md-button>\n    </md-empty-state>\n  </div>\n</template>\n\n<script>\n  export default {\n    name: 'EmptyStateBasic'\n  }\n</script>\n"
  };
};

/***/ }),

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/EmptyState/examples/EmptyStateColors.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(59/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/EmptyState/examples/EmptyStateColors.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('empty-state-colors', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['empty-state-colors'] = {
    name: 'empty-state-colors',
    source: "<template>\n  <div>\n    <md-empty-state\n      class=\"md-primary\"\n      md-icon=\"done\"\n      md-label=\"Nothing in Done\"\n      md-description=\"Anything you mark done will be safely stored here.\">\n    </md-empty-state>\n\n    <md-empty-state\n      class=\"md-accent\"\n      md-rounded\n      md-icon=\"alarm_off\"\n      md-label=\"Nothing in Reminders\"\n      md-description=\"Create a Reminder and it will show up here.\">\n    </md-empty-state>\n  </div>\n</template>\n\n<script>\n  export default {\n    name: 'EmptyStateColors'\n  }\n</script>\n\n<style lang=\"scss\" scoped>\n  div {\n    text-align: center;\n  }\n\n  .md-empty-state {\n    display: inline-block;\n    vertical-align: middle;\n\n    + .md-empty-state {\n      margin-left: 16px;\n    }\n  }\n</style>\n"
  };
};

/***/ }),

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/EmptyState/examples/EmptyStateRounded.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(127/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/EmptyState/examples/EmptyStateRounded.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('empty-state-rounded', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['empty-state-rounded'] = {
    name: 'empty-state-rounded',
    source: "<template>\n  <md-empty-state\n    md-rounded\n    md-icon=\"access_time\"\n    md-label=\"Nothing in Snoozed\"\n    md-description=\"Anything you snooze will go here until it's time for it to return to the inbox.\">\n  </md-empty-state>\n</template>\n\n<script>\n  export default {\n    name: 'EmptyStateRounded'\n  }\n</script>\n"
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

/***/ "./docs/app/pages/Components/EmptyState/EmptyState.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_EmptyState_vue__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?cacheDirectory=true!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./docs/app/pages/Components/EmptyState/EmptyState.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_EmptyState_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_EmptyState_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_EmptyState_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, (function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_EmptyState_vue__[key]; })) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5386fdfe_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_EmptyState_vue__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-5386fdfe\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./docs/app/pages/Components/EmptyState/EmptyState.vue");
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_EmptyState_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5386fdfe_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_EmptyState_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* customBlocks */
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/EmptyState/examples/EmptyStateBasic.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/EmptyState/examples/EmptyStateRounded.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/EmptyState/examples/EmptyStateColors.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}


/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?cacheDirectory=true!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./docs/app/pages/Components/EmptyState/EmptyState.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _docsExample = __webpack_require__("./docs/app/mixins/docsExample.js");

var _docsExample2 = _interopRequireDefault(_docsExample);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'DocEmptyState',
  mixins: [_docsExample2.default],
  data: function data() {
    return {
      props: {
        headings: ['Name', 'Description', 'Default'],
        props: [{
          name: 'md-icon',
          type: 'String',
          description: 'The icon of the empty state. Optional.',
          defaults: 'null'
        }, {
          name: 'md-label',
          type: 'String',
          description: 'The label of the empty state. Works as a title. Optional.',
          defaults: 'null'
        }, {
          name: 'md-description',
          type: 'String',
          description: 'The description of the empty state. Optional.',
          defaults: 'null'
        }, {
          name: 'md-rounded',
          type: 'Boolean',
          description: 'Make the empty state rounded, with a nice background color.',
          defaults: 'false'
        }, {
          name: 'md-size',
          type: 'Number',
          description: 'The rounded width/height size. Only works with <code>md-rounded</code>.',
          defaults: '420'
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

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-5386fdfe\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./docs/app/pages/Components/EmptyState/EmptyState.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('page-container',{attrs:{"centered":"","title":_vm.$t('pages.emptyState.title')}},[_c('div',{staticClass:"page-container-section"},[_c('p',[_vm._v("A list that doesn’t contain any items, or a search that doesn’t display any results, are examples of empty states. Although these states aren’t typical, they should be designed to prevent user confusion.")]),_vm._v(" "),_c('p',[_vm._v("The most basic empty state displays a non-interactive image and a text tagline. For that you can use an icon, title and an empty state description. Vue Material already provide a nice design for your empty states, but you can always create your own design on top of "),_c('code',[_vm._v("md-empty-state")]),_vm._v(".")]),_vm._v(" "),_c('p',[_vm._v("The empty state can be basic or rounded. The rounded variant is recommended only for desktop, as it size is fixed and do not work responsivelly.")])]),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('h2',[_vm._v("Empty State")]),_vm._v(" "),_c('p',[_vm._v("The default empty state can be used on any screen size. You can combine designs with icon, label and description, as any of this are optional. It also accepts a default "),_c('code',[_vm._v("<slot>")]),_vm._v(" to pass any arbitrary content, like a button to give an option to continue the screen flow:")]),_vm._v(" "),_c('code-example',{attrs:{"title":"Default","component":_vm.examples['empty-state-basic']}}),_vm._v(" "),_c('p',[_vm._v("The rounded empty state gives a fresh look with a nice background color, to gain the attention of your user.")]),_vm._v(" "),_c('code-example',{attrs:{"title":"Rounded","component":_vm.examples['empty-state-rounded']}}),_vm._v(" "),_c('p',[_vm._v("You can also combine both layouts with primary or accent colors, to match your theme. Gorgeous!")]),_vm._v(" "),_c('code-example',{attrs:{"title":"Hue Colors","component":_vm.examples['empty-state-colors']}}),_vm._v(" "),_c('api-item',{attrs:{"title":"API - md-empty-state"}},[_c('p',[_vm._v("The following options can be applied to any empty state:")]),_vm._v(" "),_c('api-table',{attrs:{"slot":"props","headings":_vm.props.headings,"props":_vm.props.props},slot:"props"})],1)],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});