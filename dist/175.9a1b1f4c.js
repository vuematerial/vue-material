webpackJsonp([175],{

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/Checkbox/examples/CheckboxHueColors.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(73/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/Checkbox/examples/CheckboxHueColors.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('checkbox-hue-colors', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['checkbox-hue-colors'] = {
    name: 'checkbox-hue-colors',
    source: "<template>\n  <div>\n    <md-checkbox v-model=\"boolean\">Accent <small>(Default)</small></md-checkbox>\n    <md-checkbox v-model=\"boolean\" class=\"md-primary\">Primary</md-checkbox>\n  </div>\n</template>\n\n<script>\n  export default {\n    name: 'CheckboxHueColors',\n    data: () => ({\n      boolean: true\n    })\n  }\n</script>\n\n<style lang=\"scss\" scoped>\n  .md-checkbox {\n    display: flex;\n  }\n</style>\n"
  };
};

/***/ }),

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/Checkbox/examples/RegularCheckboxes.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(72/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/Checkbox/examples/RegularCheckboxes.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('regular-checkboxes', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['regular-checkboxes'] = {
    name: 'regular-checkboxes',
    source: "<template>\n  <div>\n    <md-checkbox v-model=\"array\" value=\"1\">Array</md-checkbox>\n    <md-checkbox v-model=\"array\" value=\"2\">Array</md-checkbox>\n    <md-checkbox v-model=\"boolean\">Boolean</md-checkbox>\n    <md-checkbox v-model=\"string\" value=\"my-checkbox\">String</md-checkbox>\n    <md-checkbox v-model=\"novalue\">No Value</md-checkbox>\n    <md-checkbox v-model=\"disabled\" disabled>Disabled</md-checkbox>\n    <md-checkbox v-model=\"obj\" :value=\"obj1\">Object 1</md-checkbox>\n    <md-checkbox v-model=\"obj\" :value=\"obj2\">Object 2</md-checkbox>\n\n    <md-checkbox v-model=\"indeterminate\" indeterminate>Indeterminate</md-checkbox>\n\n    <table>\n      <tr>\n        <th>Array</th>\n        <th>Boolean</th>\n        <th>String</th>\n        <th>No Value</th>\n        <th>Object</th>\n      </tr>\n\n      <tr>\n        <td>{{ array }}</td>\n        <td>{{ boolean }}</td>\n        <td>{{ string }}</td>\n        <td>{{ novalue }}</td>\n        <td>{{ obj }}</td>\n      </tr>\n    </table>\n  </div>\n</template>\n\n<script>\n  export default {\n    name: 'RegularCheckboxes',\n    data: () => ({\n      array: [],\n      boolean: false,\n      string: null,\n      novalue: null,\n      disabled: true,\n      obj1: {name: 'obj1'},\n      obj2: {name: 'obj2'},\n      obj: null,\n      indeterminate: true\n    })\n  }\n</script>\n\n<style lang=\"scss\" scoped>\n  .md-checkbox {\n    display: flex;\n  }\n\n  table {\n    width: 100%;\n    table-layout: fixed;\n\n    th {\n      text-align: left;\n    }\n  }\n</style>\n"
  };
};

/***/ }),

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/Checkbox/examples/TrueFalseValue.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(71/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/Checkbox/examples/TrueFalseValue.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('true-false-value', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['true-false-value'] = {
    name: 'true-false-value',
    source: "<template>\n  <div>\n    <div class=\"block\">\n        <div class=\"title\">Without <code>:true-value</code> / <code>:false-value</code></div>\n        <div class=\"input\">\n          <md-checkbox v-model=\"withoutSetValue\">{{withoutSetValue|jsonStringify}}</md-checkbox>\n        </div>\n    </div>\n\n    <md-divider />\n\n    <div class=\"block\">\n        <div class=\"title\">With <code>:true-value</code> / <code>:false-value</code></div>\n        <div class=\"input\">\n          <md-checkbox v-model=\"withSetValue\" true-value=\"true\" false-value=\"false\">{{withSetValue|jsonStringify}}</md-checkbox>\n        </div>\n    </div>\n\n    <md-divider />\n\n    <div class=\"block\">\n        <div class=\"title\">Native checkbox with <code>:true-value</code> / <code>:false-value</code></div>\n        <div class=\"input\">\n          <label><input type=\"checkbox\" v-model=\"native\" true-value=\"true\" false-value=\"false\" value=\"test\" />{{native|jsonStringify}}</label>\n        </div>\n    </div>\n  </div>\n</template>\n\n<script>\nexport default {\n  name: 'TrueFalseValue',\n  data () {\n    return {\n      withoutSetValue: null,\n      withSetValue: null,\n      native: null\n    }\n  },\n\n  filters: {\n    jsonStringify (val) {\n      return JSON.stringify(val)\n    }\n  }\n}\n</script>\n\n<style lang=\"scss\">\n.block:not(:first-child) {\n  margin-top: 32px;\n}\n\n.title {\n  font: 1.2em;\n}\n</style>\n"
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

/***/ "./docs/app/pages/Components/Checkbox/Checkbox.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Checkbox_vue__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?cacheDirectory=true!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./docs/app/pages/Components/Checkbox/Checkbox.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Checkbox_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Checkbox_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Checkbox_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, (function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Checkbox_vue__[key]; })) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c1e05aa0_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Checkbox_vue__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-c1e05aa0\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./docs/app/pages/Components/Checkbox/Checkbox.vue");
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Checkbox_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c1e05aa0_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Checkbox_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* customBlocks */
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/Checkbox/examples/RegularCheckboxes.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/Checkbox/examples/CheckboxHueColors.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/Checkbox/examples/TrueFalseValue.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}


/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?cacheDirectory=true!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./docs/app/pages/Components/Checkbox/Checkbox.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _docsExample = __webpack_require__("./docs/app/mixins/docsExample.js");

var _docsExample2 = _interopRequireDefault(_docsExample);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'DocCheckbox',
  mixins: [_docsExample2.default],
  data: function data() {
    return {
      props: {
        headings: ['Name', 'Description', 'Default'],
        props: [{
          name: 'v-model',
          type: 'String|Number|Object|Boolean|Array',
          description: 'The model variable to bind the selection value. If it is an array, it will toggle values inside of it. If no value is assigned, then it will use the same behaviour of a regular input[type="checkbox"].',
          defaults: 'null'
        }, {
          name: 'value',
          type: 'String|Number|Object|Boolean',
          description: 'The value of the checkbox',
          defaults: 'on'
        }, {
          name: 'id',
          type: 'String',
          description: 'The checkbox unique id.',
          defaults: 'a random string'
        }, {
          name: 'indeterminate',
          type: 'Boolean',
          description: 'Enables the indeterminate look of the checkbox.',
          defaults: 'false'
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
//
//

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-c1e05aa0\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./docs/app/pages/Components/Checkbox/Checkbox.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('page-container',{attrs:{"centered":"","title":_vm.$t('pages.checkbox.title')}},[_c('div',{staticClass:"page-container-section"},[_c('p',[_vm._v("Checkboxes allow the user to select multiple options from a set. Vue material checkboxes can work with multiple "),_c('code',[_vm._v("v-model")]),_vm._v(" types: "),_c('code',[_vm._v("String")]),_vm._v(", "),_c('code',[_vm._v("Number")]),_vm._v(", "),_c('code',[_vm._v("Boolean")]),_vm._v(", "),_c('code',[_vm._v("Object")]),_vm._v(" and "),_c('code',[_vm._v("Array")]),_vm._v(".")])]),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('h2',[_vm._v("Checkbox")]),_vm._v(" "),_c('code-example',{attrs:{"title":"Checkbox","component":_vm.examples['regular-checkboxes']}}),_vm._v(" "),_c('code-example',{attrs:{"title":"Hue Colors","component":_vm.examples['checkbox-hue-colors']}}),_vm._v(" "),_c('code-example',{attrs:{"title":"True / False Value","component":_vm.examples['true-false-value']}}),_vm._v(" "),_c('api-item',{attrs:{"title":"API - md-checkbox"}},[_c('p',[_vm._v("The following options can be applied to all checkboxes:")]),_vm._v(" "),_c('api-table',{attrs:{"slot":"props","headings":_vm.props.headings,"props":_vm.props.props},slot:"props"}),_vm._v(" "),_c('api-table',{attrs:{"slot":"events","headings":_vm.events.headings,"props":_vm.events.props},slot:"events"})],1),_vm._v(" "),_c('note-block',{attrs:{"tip":""}},[_vm._v("All other "),_c('code',[_vm._v("<input type=\"checkbox\">")]),_vm._v(" attributes, such as "),_c('strong',[_vm._v("name")]),_vm._v(" and "),_c('strong',[_vm._v("required")]),_vm._v(", can be used on "),_c('code',[_vm._v("md-checkbox")]),_vm._v(".")])],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});