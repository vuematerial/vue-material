webpackJsonp([154],{

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/Input/examples/Counters.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(122/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/Input/examples/Counters.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('counters', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['counters'] = {
    name: 'counters',
    source: "<template>\n  <div>\n    <md-field>\n      <label>Counter</label>\n      <md-input v-model=\"regular\" md-counter=\"30\"></md-input>\n    </md-field>\n\n    <md-field>\n      <label>Max Length</label>\n      <md-input v-model=\"maxLength\" maxlength=\"30\"></md-input>\n    </md-field>\n\n    <md-field :md-counter=\"false\">\n      <label>Maxlength with disabled counter</label>\n      <md-input v-model=\"disabled\" maxlength=\"10\"></md-input>\n    </md-field>\n\n    <md-field>\n      <label>Autogrow</label>\n      <md-textarea v-model=\"autogrow\" md-autogrow md-counter=\"200\"></md-textarea>\n    </md-field>\n\n    <md-field>\n      <label>Textarea</label>\n      <md-textarea v-model=\"textarea\" md-counter=\"80\"></md-textarea>\n    </md-field>\n  </div>\n</template>\n\n<script>\n  export default {\n    name: 'Counters',\n    data: () => ({\n      regular: null,\n      maxLength: null,\n      disabled: null,\n      autogrow: null,\n      textarea: null\n    })\n  }\n</script>\n"
  };
};

/***/ }),

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/Input/examples/ErrorsMessages.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(121/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/Input/examples/ErrorsMessages.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('errors-messages', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['errors-messages'] = {
    name: 'errors-messages',
    source: "<template>\n  <div>\n    <md-field>\n      <label>No error</label>\n      <md-input v-model=\"noError\"></md-input>\n    </md-field>\n\n    <md-field :class=\"messageClass\">\n      <label>Required Field</label>\n      <md-input v-model=\"required\" required></md-input>\n      <span class=\"md-error\">There is an error</span>\n    </md-field>\n\n    <md-field :class=\"messageClass\">\n      <label>Textarea</label>\n      <md-textarea v-model=\"textarea\" required></md-textarea>\n      <span class=\"md-helper-text\">Helper text</span>\n      <span class=\"md-error\">There is an error</span>\n    </md-field>\n\n    <md-switch v-model=\"hasMessages\">{{ !hasMessages ? 'Show' : 'Hide' }} Errors</md-switch>\n  </div>\n</template>\n\n<script>\n  export default {\n    name: 'ErrorsMessages',\n    data: () => ({\n      noError: null,\n      required: null,\n      textarea: null,\n      hasMessages: false\n    }),\n    computed: {\n      messageClass () {\n        return {\n          'md-invalid': this.hasMessages\n        }\n      }\n    }\n  }\n</script>\n"
  };
};

/***/ }),

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/Input/examples/FieldIcons.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(58/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/Input/examples/FieldIcons.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('field-icons', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['field-icons'] = {
    name: 'field-icons',
    source: "<template>\n  <div>\n    <md-field>\n      <md-icon>event</md-icon>\n      <label>Date</label>\n      <md-input v-model=\"date\"></md-input>\n    </md-field>\n\n    <md-field>\n      <label>Voice</label>\n      <md-input v-model=\"voice\"></md-input>\n      <md-icon>keyboard_voice</md-icon>\n    </md-field>\n\n    <md-field>\n      <label>Description</label>\n      <md-textarea v-model=\"description\"></md-textarea>\n      <md-icon>description</md-icon>\n    </md-field>\n\n    <md-field>\n      <md-icon class=\"md-accent\">warning</md-icon>\n      <label>Transfer Money</label>\n      <md-input v-model=\"money\"></md-input>\n      <md-icon>attach_money</md-icon>\n    </md-field>\n  </div>\n</template>\n\n<script>\n  export default {\n    name: 'FieldIcons',\n    data: () => ({\n      date: null,\n      voice: null,\n      description: null,\n      money: null\n    })\n  }\n</script>\n\n<style lang=\"scss\" scoped>\n  .md-field:last-child {\n    margin-bottom: 40px;\n  }\n</style>\n"
  };
};

/***/ }),

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/Input/examples/Fixes.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(57/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/Input/examples/Fixes.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('fixes', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['fixes'] = {
    name: 'fixes',
    source: "<template>\n  <div>\n    <md-field>\n      <label>Prefix</label>\n      <span class=\"md-prefix\">$</span>\n      <md-input v-model=\"initial\"></md-input>\n    </md-field>\n\n    <md-field>\n      <label>Suffix</label>\n      <md-input v-model=\"empty\"></md-input>\n      <span class=\"md-suffix\">@gmail.com</span>\n    </md-field>\n  </div>\n</template>\n\n<script>\n  export default {\n    name: 'Fixes',\n    data: () => ({\n      initial: 0,\n      empty: ''\n    })\n  }\n</script>\n\n<style lang=\"scss\" scoped>\n  .md-field:last-child {\n    margin-bottom: 40px;\n  }\n</style>\n"
  };
};

/***/ }),

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/Input/examples/InlineActions.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(56/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/Input/examples/InlineActions.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('inline-actions', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['inline-actions'] = {
    name: 'inline-actions',
    source: "<template>\n  <div>\n    <md-field md-clearable>\n      <label>Cleareable</label>\n      <md-input v-model=\"initial\"></md-input>\n    </md-field>\n\n    <md-field>\n      <label>Password toggle</label>\n      <md-input v-model=\"password\" type=\"password\"></md-input>\n    </md-field>\n\n    <md-field :md-toggle-password=\"false\">\n      <label>Password field without toggle</label>\n      <md-input v-model=\"password\" type=\"password\"></md-input>\n    </md-field>\n  </div>\n</template>\n\n<script>\n  export default {\n    name: 'InlineActions',\n    data: () => ({\n      initial: 'Initial Value',\n      password: 'mysecurepassword'\n    })\n  }\n</script>\n\n<style lang=\"scss\" scoped>\n  .md-field:last-child {\n    margin-bottom: 40px;\n  }\n</style>\n"
  };
};

/***/ }),

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/Input/examples/TextFields.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(120/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/Input/examples/TextFields.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('text-fields', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['text-fields'] = {
    name: 'text-fields',
    source: "<template>\n  <div>\n    <md-field>\n      <label>Initial Value</label>\n      <md-input v-model=\"initial\"></md-input>\n    </md-field>\n\n    <md-field>\n      <label>Initial Value (Read Only)</label>\n      <md-input v-model=\"initial\" readonly></md-input>\n    </md-field>\n\n    <md-field>\n      <label>Type here!</label>\n      <md-input v-model=\"type\"></md-input>\n      <span class=\"md-helper-text\">Helper text</span>\n    </md-field>\n\n    <md-field>\n      <label>With label</label>\n      <md-input v-model=\"withLabel\" placeholder=\"A nice placeholder\"></md-input>\n    </md-field>\n\n    <md-field md-inline>\n      <label>Inline</label>\n      <md-input v-model=\"inline\"></md-input>\n    </md-field>\n\n    <md-field>\n      <label>Number</label>\n      <md-input v-model=\"number\" type=\"number\"></md-input>\n    </md-field>\n\n    <md-field>\n      <label>Textarea</label>\n      <md-textarea v-model=\"textarea\"></md-textarea>\n    </md-field>\n\n    <md-field>\n      <label>Textarea with Autogrow</label>\n      <md-textarea v-model=\"autogrow\" md-autogrow></md-textarea>\n    </md-field>\n\n    <md-field>\n      <label>Disabled</label>\n      <md-input v-model=\"disabled\" disabled></md-input>\n    </md-field>\n  </div>\n</template>\n\n<script>\n  export default {\n    name: 'TextFields',\n    data: () => ({\n      initial: 'Initial Value',\n      type: null,\n      withLabel: null,\n      inline: null,\n      number: null,\n      textarea: null,\n      autogrow: null,\n      disabled: null\n    })\n  }\n</script>\n"
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

/***/ "./docs/app/pages/Components/Input/Input.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Input_vue__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?cacheDirectory=true!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./docs/app/pages/Components/Input/Input.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Input_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Input_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Input_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, (function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Input_vue__[key]; })) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2b42b77e_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Input_vue__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-2b42b77e\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./docs/app/pages/Components/Input/Input.vue");
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Input_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2b42b77e_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Input_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* customBlocks */
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/Input/examples/TextFields.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/Input/examples/ErrorsMessages.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/Input/examples/Counters.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/Input/examples/FieldIcons.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/Input/examples/InlineActions.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/Input/examples/Fixes.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}


/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?cacheDirectory=true!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./docs/app/pages/Components/Input/Input.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _docsExample = __webpack_require__("./docs/app/mixins/docsExample.js");

var _docsExample2 = _interopRequireDefault(_docsExample);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'DocInput',
  mixins: [_docsExample2.default],
  data: function data() {
    return {
      field: {
        props: {
          headings: ['Name', 'Description', 'Default'],
          props: [{
            name: 'md-inline',
            type: 'Boolean',
            description: 'Make the label inline. This means that the label will disappear when the input receives a focus.',
            defaults: 'false'
          }, {
            name: 'md-counter',
            type: 'Boolean',
            description: 'Enable the character counter. Only works with fields that have a <code>md-input</code> or <code>md-textarea</code> with a <code>maxlength</code> or <code>md-counter</code> attributes.',
            defaults: 'false'
          }, {
            name: 'md-clearable',
            type: 'Boolean',
            description: 'Add a clear button on the right of the input.',
            defaults: 'false'
          }, {
            name: 'md-toggle-password',
            type: 'Boolean',
            description: 'Add a toggle button on the right of the input to reveal/hide the password. Only works with fields that have a <code>md-input</code> with type password.',
            defaults: 'false'
          }]
        },
        events: {
          headings: ['Name', 'Description', 'Value'],
          props: [{
            name: 'md-clear',
            description: 'Triggered after a mouse click on clear icon. Only fired when md-clearable is true.',
            value: '-'
          }]
        }
      },
      input: {
        headings: ['Name', 'Description', 'Default'],
        props: [{
          name: 'v-model',
          type: 'String|Number|Boolean|Array',
          description: 'The model variable to bind the input value',
          defaults: 'null'
        }, {
          name: 'type',
          type: 'String',
          description: 'The input type. Similar to HTML5 type attribute.',
          defaults: 'text'
        }, {
          name: 'placeholder',
          type: 'String',
          description: 'The input placeholder. Similar to HTML5 placeholder attribute.',
          defaults: 'null'
        }, {
          name: 'required',
          type: 'Boolean',
          description: 'The input required. Similar to HTML5 required attribute.',
          defaults: 'false'
        }, {
          name: 'id',
          type: 'String',
          description: 'The input id. Similar to HTML5 id attribute.',
          defaults: 'a random string'
        }, {
          name: 'name',
          type: 'String',
          description: 'The input name. Similar to HTML5 name attribute.',
          defaults: 'null'
        }, {
          name: 'disabled',
          type: 'Boolean',
          description: 'Disable the input and prevent it interactions.',
          defaults: 'false'
        }, {
          name: 'maxlength',
          type: 'Number',
          description: 'Enable the counter for the field and set a maxlength',
          defaults: 'null'
        }, {
          name: 'md-counter',
          type: 'Number|Boolean',
          description: 'Enable the counter for the field. This is useful when you want only a counter without setting a maxlength. After setting a maxlength, in case if you do not want to display the counter, set this prop to false',
          defaults: 'true'
        }]
      },
      textarea: {
        headings: ['Name', 'Description', 'Default'],
        props: [{
          name: 'v-model',
          type: 'String|Number|Boolean|Array',
          description: 'The model variable to bind the textarea value',
          defaults: 'null'
        }, {
          name: 'placeholder',
          type: 'String',
          description: 'The textarea placeholder. Similar to HTML5 placeholder attribute.',
          defaults: 'null'
        }, {
          name: 'required',
          type: 'Boolean',
          description: 'The input required. Similar to HTML5 required attribute.',
          defaults: 'false'
        }, {
          name: 'id',
          type: 'String',
          description: 'The textarea id. Similar to HTML5 id attribute.',
          defaults: 'a random string'
        }, {
          name: 'name',
          type: 'String',
          description: 'The textarea name. Similar to HTML5 name attribute.',
          defaults: 'null'
        }, {
          name: 'disabled',
          type: 'Boolean',
          description: 'Disable the textarea and prevent it interactions.',
          defaults: 'false'
        }, {
          name: 'maxlength',
          type: 'Number',
          description: 'Enable the counter for the field and set a maxlength',
          defaults: 'null'
        }, {
          name: 'md-counter',
          type: 'Number',
          description: 'Enable the counter for the field. This is useful when you want only a counter without set a maxlength',
          defaults: 'null'
        }, {
          name: 'md-autogrow',
          type: 'Boolean',
          description: 'Enable the textarea autogrow',
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
//
//
//

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-2b42b77e\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./docs/app/pages/Components/Input/Input.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('page-container',{attrs:{"centered":"","title":_vm.$t('pages.input.title')}},[_c('div',{staticClass:"page-container-section"},[_c('p',[_vm._v("Text fields allow users to input, edit and select text typically inside forms. But they can appear in other places as well like dialog boxes and search.")]),_vm._v(" "),_c('p',[_vm._v("Vue Material fields work with a "),_c('code',[_vm._v("md-field")]),_vm._v(" wrapped around an input component, that can be "),_c('code',[_vm._v("md-input")]),_vm._v(", "),_c('code',[_vm._v("md-textarea")]),_vm._v(" or even a "),_c('code',[_vm._v("md-select")]),_vm._v(".")]),_vm._v(" "),_c('note-block',{attrs:{"tip":""}},[_c('code',[_vm._v("md-select")]),_vm._v(" has its own "),_c('router-link',{attrs:{"to":"/components/select"}},[_vm._v("documentation page")]),_vm._v(", dedicated to show better examples on how to use it.")],1)],1),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('h2',[_vm._v("Text Fields")]),_vm._v(" "),_c('p',[_vm._v("Fields mimic the HTML5 attributes to keep the same compatibility with native inputs, but has extra options. This allows Vue Material to accordingly setup the various "),_c('code',[_vm._v("md-field")]),_vm._v(" with its corresponding input options.")]),_vm._v(" "),_c('p',[_vm._v("You will be able to set the same properties of a regular "),_c('code',[_vm._v("input")]),_vm._v(" element on "),_c('code',[_vm._v("md-input")]),_vm._v(". This is also valid for "),_c('code',[_vm._v("textarea")]),_vm._v(" and "),_c('code',[_vm._v("select")]),_vm._v(". Take a look:")]),_vm._v(" "),_c('code-example',{attrs:{"title":"Input and Textarea","component":_vm.examples['text-fields']}})],1),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('h2',[_vm._v("Errors and Messages")]),_vm._v(" "),_c('p',[_vm._v("Vue Material has validation states to show error messages. You can use it along with other 3rd party Vue validation libraries, like Vuelidate or Vee-Validate:")]),_vm._v(" "),_c('code-example',{attrs:{"title":"Validation","component":_vm.examples['errors-messages']}})],1),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('h2',[_vm._v("Character count")]),_vm._v(" "),_c('p',[_vm._v("You can use character counters where you need to limit the user input, like on Twitter's 280 character tweet:")]),_vm._v(" "),_c('code-example',{attrs:{"title":"Counter","component":_vm.examples['counters']}})],1),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('h2',[_vm._v("Icons")]),_vm._v(" "),_c('p',[_vm._v("Sometimes we may want to differentiate our inputs based on it content value:")]),_vm._v(" "),_c('code-example',{attrs:{"title":"Outside and inline icons","component":_vm.examples['field-icons']}})],1),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('h2',[_vm._v("Inline Actions")]),_vm._v(" "),_c('p',[_vm._v("Fields can have a clearable feature to make it easier for users to clear the value. To use passwords better we can show a toggle button to reveal the password. This is really useful for mobile applications:")]),_vm._v(" "),_c('code-example',{attrs:{"title":"Clear and password","component":_vm.examples['inline-actions']}})],1),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('h2',[_vm._v("Prefixes & suffixes")]),_vm._v(" "),_c('p',[_vm._v("Prefixes and suffixes can be used to clarify units or to add input in advance. Prefixes are left justified in the text field whereas suffixes are right justified. Text fields can have both prefixes and suffixes.")]),_vm._v(" "),_c('code-example',{attrs:{"title":"Prefixes & suffixes","component":_vm.examples['fixes']}})],1),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('api-item',{attrs:{"title":"API - md-field"}},[_c('p',[_vm._v("The following options can be applied to any field:")]),_vm._v(" "),_c('api-table',{attrs:{"slot":"props","headings":_vm.field.props.headings,"props":_vm.field.props.props},slot:"props"}),_vm._v(" "),_c('api-table',{attrs:{"slot":"events","headings":_vm.field.events.headings,"props":_vm.field.events.props},slot:"events"})],1),_vm._v(" "),_c('api-item',{attrs:{"title":"API - md-input"}},[_c('p',[_vm._v("The following options can be applied to any input:")]),_vm._v(" "),_c('api-table',{attrs:{"slot":"props","headings":_vm.input.headings,"props":_vm.input.props},slot:"props"})],1),_vm._v(" "),_c('api-item',{attrs:{"title":"API - md-textarea"}},[_c('p',[_vm._v("The following options can be applied to any textarea:")]),_vm._v(" "),_c('api-table',{attrs:{"slot":"props","headings":_vm.textarea.headings,"props":_vm.textarea.props},slot:"props"})],1),_vm._v(" "),_c('note-block',{attrs:{"tip":""}},[_vm._v("Any "),_c('code',[_vm._v("input")]),_vm._v(" or "),_c('code',[_vm._v("textarea")]),_vm._v(" attributes can be used on "),_c('code',[_vm._v("md-input")]),_vm._v("/"),_c('code',[_vm._v("md-textarea")]),_vm._v(" respectively.")])],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});