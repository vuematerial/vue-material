webpackJsonp([186],{

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/Form/examples/FormValidation.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(0/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/Form/examples/FormValidation.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('form-validation', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['form-validation'] = {
    name: 'form-validation',
    source: "<template>\n  <div>\n    <form novalidate class=\"md-layout\" @submit.prevent=\"validateUser\">\n      <md-card class=\"md-layout-item md-size-50 md-small-size-100\">\n        <md-card-header>\n          <div class=\"md-title\">Users</div>\n        </md-card-header>\n\n        <md-card-content>\n          <div class=\"md-layout md-gutter\">\n            <div class=\"md-layout-item md-small-size-100\">\n              <md-field :class=\"getValidationClass('firstName')\">\n                <label for=\"first-name\">First Name</label>\n                <md-input name=\"first-name\" id=\"first-name\" autocomplete=\"given-name\" v-model=\"form.firstName\" :disabled=\"sending\" />\n                <span class=\"md-error\" v-if=\"!$v.form.firstName.required\">The first name is required</span>\n                <span class=\"md-error\" v-else-if=\"!$v.form.firstName.minlength\">Invalid first name</span>\n              </md-field>\n            </div>\n\n            <div class=\"md-layout-item md-small-size-100\">\n              <md-field :class=\"getValidationClass('lastName')\">\n                <label for=\"last-name\">Last Name</label>\n                <md-input name=\"last-name\" id=\"last-name\" autocomplete=\"family-name\" v-model=\"form.lastName\" :disabled=\"sending\" />\n                <span class=\"md-error\" v-if=\"!$v.form.lastName.required\">The last name is required</span>\n                <span class=\"md-error\" v-else-if=\"!$v.form.lastName.minlength\">Invalid last name</span>\n              </md-field>\n            </div>\n          </div>\n\n          <div class=\"md-layout md-gutter\">\n            <div class=\"md-layout-item md-small-size-100\">\n              <md-field :class=\"getValidationClass('gender')\">\n                <label for=\"gender\">Gender</label>\n                <md-select name=\"gender\" id=\"gender\" v-model=\"form.gender\" md-dense :disabled=\"sending\">\n                  <md-option></md-option>\n                  <md-option value=\"M\">M</md-option>\n                  <md-option value=\"F\">F</md-option>\n                </md-select>\n                <span class=\"md-error\">The gender is required</span>\n              </md-field>\n            </div>\n\n            <div class=\"md-layout-item md-small-size-100\">\n              <md-field :class=\"getValidationClass('age')\">\n                <label for=\"age\">Age</label>\n                <md-input type=\"number\" id=\"age\" name=\"age\" autocomplete=\"age\" v-model=\"form.age\" :disabled=\"sending\" />\n                <span class=\"md-error\" v-if=\"!$v.form.age.required\">The age is required</span>\n                <span class=\"md-error\" v-else-if=\"!$v.form.age.maxlength\">Invalid age</span>\n              </md-field>\n            </div>\n          </div>\n\n          <md-field :class=\"getValidationClass('email')\">\n            <label for=\"email\">Email</label>\n            <md-input type=\"email\" name=\"email\" id=\"email\" autocomplete=\"email\" v-model=\"form.email\" :disabled=\"sending\" />\n            <span class=\"md-error\" v-if=\"!$v.form.email.required\">The email is required</span>\n            <span class=\"md-error\" v-else-if=\"!$v.form.email.email\">Invalid email</span>\n          </md-field>\n        </md-card-content>\n\n        <md-progress-bar md-mode=\"indeterminate\" v-if=\"sending\" />\n\n        <md-card-actions>\n          <md-button type=\"submit\" class=\"md-primary\" :disabled=\"sending\">Create user</md-button>\n        </md-card-actions>\n      </md-card>\n\n      <md-snackbar :md-active.sync=\"userSaved\">The user {{ lastUser }} was saved with success!</md-snackbar>\n    </form>\n  </div>\n</template>\n\n<script>\n  import { validationMixin } from 'vuelidate'\n  import {\n    required,\n    email,\n    minLength,\n    maxLength\n  } from 'vuelidate/lib/validators'\n\n  export default {\n    name: 'FormValidation',\n    mixins: [validationMixin],\n    data: () => ({\n      form: {\n        firstName: null,\n        lastName: null,\n        gender: null,\n        age: null,\n        email: null,\n      },\n      userSaved: false,\n      sending: false,\n      lastUser: null\n    }),\n    validations: {\n      form: {\n        firstName: {\n          required,\n          minLength: minLength(3)\n        },\n        lastName: {\n          required,\n          minLength: minLength(3)\n        },\n        age: {\n          required,\n          maxLength: maxLength(3)\n        },\n        gender: {\n          required\n        },\n        email: {\n          required,\n          email\n        }\n      }\n    },\n    methods: {\n      getValidationClass (fieldName) {\n        const field = this.$v.form[fieldName]\n\n        if (field) {\n          return {\n            'md-invalid': field.$invalid && field.$dirty\n          }\n        }\n      },\n      clearForm () {\n        this.$v.$reset()\n        this.form.firstName = null\n        this.form.lastName = null\n        this.form.age = null\n        this.form.gender = null\n        this.form.email = null\n      },\n      saveUser () {\n        this.sending = true\n\n        // Instead of this timeout, here you can call your API\n        window.setTimeout(() => {\n          this.lastUser = `${this.form.firstName} ${this.form.lastName}`\n          this.userSaved = true\n          this.sending = false\n          this.clearForm()\n        }, 1500)\n      },\n      validateUser () {\n        this.$v.$touch()\n\n        if (!this.$v.$invalid) {\n          this.saveUser()\n        }\n      }\n    }\n  }\n</script>\n\n<style lang=\"scss\" scoped>\n  .md-progress-bar {\n    position: absolute;\n    top: 0;\n    right: 0;\n    left: 0;\n  }\n</style>\n"
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

/***/ "./docs/app/pages/Components/Form/Form.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Form_vue__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?cacheDirectory=true!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./docs/app/pages/Components/Form/Form.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Form_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Form_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Form_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, (function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Form_vue__[key]; })) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f86adbcc_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Form_vue__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-f86adbcc\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./docs/app/pages/Components/Form/Form.vue");
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Form_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f86adbcc_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Form_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* customBlocks */
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/Form/examples/FormValidation.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}


/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?cacheDirectory=true!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./docs/app/pages/Components/Form/Form.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _docsExample = __webpack_require__("./docs/app/mixins/docsExample.js");

var _docsExample2 = _interopRequireDefault(_docsExample);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'DocForm',
  mixins: [_docsExample2.default]
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

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-f86adbcc\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./docs/app/pages/Components/Form/Form.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('page-container',{attrs:{"centered":"","title":_vm.$t('pages.form.title')}},[_c('div',{staticClass:"page-container-section"},[_c('p',[_vm._v("In web applications it is very common for pages to have forms, with the most diverse types of fields. Vue Material introduces several components that help in building an application. With this you have fill flows, validation and submission forms.")]),_vm._v(" "),_c('p',[_vm._v("Here you can find some examples on how to use Vue Material to build forms.")])]),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('h2',[_vm._v("Form Validation")]),_vm._v(" "),_c('code-example',{attrs:{"title":"Example","component":_vm.examples['form-validation']}})],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});