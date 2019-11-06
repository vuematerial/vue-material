webpackJsonp([179],{

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/Radio/examples/RadioHueColors.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(37/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/Radio/examples/RadioHueColors.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('radio-hue-colors', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['radio-hue-colors'] = {
    name: 'radio-hue-colors',
    source: "<template>\n  <div>\n    <md-radio v-model=\"radio\" value=\"accent\">Accent <small>(Default)</small></md-radio>\n    <md-radio v-model=\"radio\" value=\"Primary\" class=\"md-primary\">Primary</md-radio>\n  </div>\n</template>\n\n<script>\n  export default {\n    name: 'RadioHueColors',\n    data: () => ({\n      radio: 'accent'\n    })\n  }\n</script>\n\n<style lang=\"scss\" scoped>\n  .md-radio {\n    display: flex;\n  }\n</style>\n"
  };
};

/***/ }),

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/Radio/examples/RegularRadio.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(36/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/Radio/examples/RegularRadio.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('regular-radio', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['regular-radio'] = {
    name: 'regular-radio',
    source: "<template>\n  <div>\n    <md-radio v-model=\"radio\" :value=\"false\">Boolean</md-radio>\n    <md-radio v-model=\"radio\" value=\"my-radio\">String</md-radio>\n    <md-radio v-model=\"radio\" :value=\"objA\">Object A</md-radio>\n    <md-radio v-model=\"radio\" :value=\"objB\">Object B</md-radio>\n    <md-radio v-model=\"radio\">No Value</md-radio>\n    <md-radio v-model=\"radio\" disabled>Disabled</md-radio>\n\n    <small>Model value: {{ radio }}</small>\n  </div>\n</template>\n\n<script>\n  export default {\n    name: 'RegularRadio',\n    data: () => ({\n      objA: { name: 'a' },\n      objB: { name: 'b' },\n      radio: false\n    })\n  }\n</script>\n\n<style lang=\"scss\" scoped>\n  small {\n    display: block;\n  }\n</style>\n"
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

/***/ "./docs/app/pages/Components/Radio/Radio.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Radio_vue__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?cacheDirectory=true!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./docs/app/pages/Components/Radio/Radio.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Radio_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Radio_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Radio_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, (function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Radio_vue__[key]; })) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4089ff8e_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Radio_vue__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-4089ff8e\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./docs/app/pages/Components/Radio/Radio.vue");
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Radio_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4089ff8e_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Radio_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* customBlocks */
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/Radio/examples/RegularRadio.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/Radio/examples/RadioHueColors.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}


/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?cacheDirectory=true!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./docs/app/pages/Components/Radio/Radio.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _docsExample = __webpack_require__("./docs/app/mixins/docsExample.js");

var _docsExample2 = _interopRequireDefault(_docsExample);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'DocRadio',
  mixins: [_docsExample2.default],
  data: function data() {
    return {
      props: {
        headings: ['Name', 'Description', 'Default'],
        props: [{
          name: 'value',
          type: 'String|Number|Boolean|Object',
          description: 'The value of the radio',
          defaults: 'on'
        }, {
          name: 'v-model',
          type: 'String|Number|Boolean|Object',
          description: 'The model variable to bind the selection value. If no value is assigned, then it will use the same behaviour of a regular input[type="radio"].',
          defaults: 'null'
        }, {
          name: 'id',
          type: 'String',
          description: 'The radio unique id.',
          defaults: 'a random string'
        }]
      },
      events: {
        headings: ['Name', 'Description', 'Value'],
        props: [{
          name: 'change',
          description: 'Triggered after a value is selected',
          value: 'value'
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

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-4089ff8e\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./docs/app/pages/Components/Radio/Radio.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('page-container',{attrs:{"centered":"","title":_vm.$t('pages.radio.title')}},[_c('div',{staticClass:"page-container-section"},[_c('p',[_vm._v("Radio buttons allow the user to select one option from a set. Use radio buttons for exclusive selection if you think that the user needs to see all available options side-by-side. Vue material radio can work with multiple "),_c('code',[_vm._v("v-model")]),_vm._v(" types: "),_c('code',[_vm._v("String")]),_vm._v(", "),_c('code',[_vm._v("Number")]),_vm._v(" and "),_c('code',[_vm._v("Boolean")]),_vm._v(".")])]),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('h2',[_vm._v("Radio")]),_vm._v(" "),_c('code-example',{attrs:{"title":"Radio","component":_vm.examples['regular-radio']}}),_vm._v(" "),_c('code-example',{attrs:{"title":"Hue Colors","component":_vm.examples['radio-hue-colors']}}),_vm._v(" "),_c('api-item',{attrs:{"title":"API - md-radio"}},[_c('p',[_vm._v("The following options can be applied to all radios:")]),_vm._v(" "),_c('api-table',{attrs:{"slot":"props","headings":_vm.props.headings,"props":_vm.props.props},slot:"props"}),_vm._v(" "),_c('api-table',{attrs:{"slot":"events","headings":_vm.events.headings,"props":_vm.events.props},slot:"events"}),_vm._v(" "),_c('note-block',{attrs:{"tip":""}},[_vm._v("All other "),_c('code',[_vm._v("<input type=\"radio\">")]),_vm._v(" attributes, such as "),_c('strong',[_vm._v("name")]),_vm._v(" and "),_c('strong',[_vm._v("required")]),_vm._v(", can be used on "),_c('code',[_vm._v("md-radio")]),_vm._v(".")])],1)],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});