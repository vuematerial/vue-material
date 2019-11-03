webpackJsonp([178],{

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/Switch/examples/RegularSwitch.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(27/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/Switch/examples/RegularSwitch.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('regular-switch', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['regular-switch'] = {
    name: 'regular-switch',
    source: "<template>\n  <div>\n    <md-switch v-model=\"array\" value=\"1\">Array</md-switch>\n    <md-switch v-model=\"array\" value=\"2\">Array</md-switch>\n    <md-switch v-model=\"boolean\">Boolean</md-switch>\n    <md-switch v-model=\"string\" value=\"my-switch\">String</md-switch>\n    <md-switch v-model=\"novalue\">No Value</md-switch>\n    <md-switch v-model=\"disabled\" disabled>Disabled</md-switch>\n\n    <table>\n      <tr>\n        <th>Array</th>\n        <th>Boolean</th>\n        <th>String</th>\n        <th>No Value</th>\n      </tr>\n\n      <tr>\n        <td>{{ array }}</td>\n        <td>{{ boolean }}</td>\n        <td>{{ string }}</td>\n        <td>{{ novalue }}</td>\n      </tr>\n    </table>\n  </div>\n</template>\n\n<script>\n  export default {\n    name: 'RegularSwitch',\n    data: () => ({\n      array: [],\n      boolean: false,\n      string: null,\n      novalue: null,\n      disabled: true\n    })\n  }\n</script>\n\n<style lang=\"scss\" scoped>\n  .md-switch {\n    display: flex;\n  }\n\n  table {\n    width: 100%;\n    table-layout: fixed;\n\n    th {\n      text-align: left;\n    }\n  }\n</style>\n"
  };
};

/***/ }),

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/Switch/examples/SwitchHueColors.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(26/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/Switch/examples/SwitchHueColors.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('switch-hue-colors', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['switch-hue-colors'] = {
    name: 'switch-hue-colors',
    source: "<template>\n  <div>\n    <md-switch v-model=\"boolean\">Accent <small>(Default)</small></md-switch>\n    <md-switch v-model=\"boolean\" class=\"md-primary\">Primary</md-switch>\n  </div>\n</template>\n\n<script>\n  export default {\n    name: 'SwitchHueColors',\n    data: () => ({\n      boolean: true\n    })\n  }\n</script>\n\n<style lang=\"scss\" scoped>\n  .md-switch {\n    display: flex;\n  }\n</style>\n"
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

/***/ "./docs/app/pages/Components/Switch/Switch.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Switch_vue__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?cacheDirectory=true!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./docs/app/pages/Components/Switch/Switch.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Switch_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Switch_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Switch_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, (function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Switch_vue__[key]; })) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_54d8cade_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Switch_vue__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-54d8cade\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./docs/app/pages/Components/Switch/Switch.vue");
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Switch_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_54d8cade_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Switch_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* customBlocks */
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/Switch/examples/RegularSwitch.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/Switch/examples/SwitchHueColors.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}


/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?cacheDirectory=true!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./docs/app/pages/Components/Switch/Switch.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _docsExample = __webpack_require__("./docs/app/mixins/docsExample.js");

var _docsExample2 = _interopRequireDefault(_docsExample);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'DocSwitch',
  mixins: [_docsExample2.default],
  data: function data() {
    return {
      props: {
        headings: ['Name', 'Description', 'Default'],
        props: [{
          name: 'value',
          type: 'String|Number|Boolean',
          description: 'The value of the switch',
          defaults: 'on'
        }, {
          name: 'v-model',
          type: 'String|Number|Boolean|Array',
          description: 'The model variable to bind the selection value. If array, it will toggle values inside of it. If no value is assigned, then it will use the same behaviour of a regular input[type="checkbox"].',
          defaults: 'null'
        }, {
          name: 'id',
          type: 'String',
          description: 'The switch unique id.',
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

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-54d8cade\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./docs/app/pages/Components/Switch/Switch.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('page-container',{attrs:{"centered":"","title":_vm.$t('pages.switch.title')}},[_c('div',{staticClass:"page-container-section"},[_c('p',[_vm._v("On/off switches toggle the state of a single settings option. The option that the switch controls, as well as the state it’s in, should be made clear from the corresponding inline label. Vue material switches can work with multiple "),_c('code',[_vm._v("v-model")]),_vm._v(" types: "),_c('code',[_vm._v("String")]),_vm._v(", "),_c('code',[_vm._v("Number")]),_vm._v(", "),_c('code',[_vm._v("Boolean")]),_vm._v(" and "),_c('code',[_vm._v("Array")]),_vm._v(".")])]),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('h2',[_vm._v("Switch")]),_vm._v(" "),_c('code-example',{attrs:{"title":"Switch","component":_vm.examples['regular-switch']}}),_vm._v(" "),_c('code-example',{attrs:{"title":"Hue Colors","component":_vm.examples['switch-hue-colors']}}),_vm._v(" "),_c('api-item',{attrs:{"title":"API - md-switch"}},[_c('p',[_vm._v("The following options can be applied to all switches:")]),_vm._v(" "),_c('api-table',{attrs:{"slot":"props","headings":_vm.props.headings,"props":_vm.props.props},slot:"props"}),_vm._v(" "),_c('api-table',{attrs:{"slot":"events","headings":_vm.events.headings,"props":_vm.events.props},slot:"events"})],1),_vm._v(" "),_c('note-block',{attrs:{"tip":""}},[_vm._v("All other "),_c('code',[_vm._v("<input type=\"checkbox\">")]),_vm._v(" attributes, such as "),_c('strong',[_vm._v("name")]),_vm._v(" and "),_c('strong',[_vm._v("required")]),_vm._v(", can be used on "),_c('code',[_vm._v("md-switch")]),_vm._v(".")])],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});