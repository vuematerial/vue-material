webpackJsonp([160],{

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/Select/examples/BasicSelect.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(119/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/Select/examples/BasicSelect.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('basic-select', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['basic-select'] = {
    name: 'basic-select',
    source: "<template>\n  <div>\n    <div class=\"md-layout md-gutter\">\n      <div class=\"md-layout-item\">\n        <md-field>\n          <label for=\"movie\">Movie</label>\n          <md-select v-model=\"movie\" name=\"movie\" id=\"movie\">\n            <md-option value=\"fight-club\">Fight Club</md-option>\n            <md-option value=\"godfather\">Godfather</md-option>\n            <md-option value=\"godfather-ii\">Godfather II</md-option>\n            <md-option value=\"godfather-iii\">Godfather III</md-option>\n            <md-option value=\"godfellas\">Godfellas</md-option>\n            <md-option value=\"pulp-fiction\">Pulp Fiction</md-option>\n            <md-option value=\"scarface\">Scarface</md-option>\n          </md-select>\n        </md-field>\n      </div>\n\n      <div class=\"md-layout-item\">\n        <md-field>\n          <md-select v-model=\"country\" name=\"country\" id=\"country\" placeholder=\"Country\">\n            <md-option value=\"australia\">Australia</md-option>\n            <md-option value=\"brazil\">Brazil</md-option>\n            <md-option value=\"japan\">Japan</md-option>\n            <md-option value=\"united-states\">United States</md-option>\n          </md-select>\n        </md-field>\n      </div>\n\n      <div class=\"md-layout-item\">\n        <md-field>\n          <label for=\"font\">Font</label>\n          <md-select v-model=\"font\" name=\"font\" id=\"font\">\n            <md-option value=\"arial\">Arial</md-option>\n            <md-option value=\"calibri\">Calibri</md-option>\n            <md-option value=\"cambria\">Cambria</md-option>\n            <md-option value=\"comic-sans\">Comic Sans</md-option>\n            <md-option value=\"consolas\">Consolas</md-option>\n            <md-option value=\"courier\">Courier</md-option>\n            <md-option value=\"droid-sans\">Droid Sans</md-option>\n            <md-option value=\"georgia\">Georgia</md-option>\n            <md-option value=\"helvetica\">Helvetica</md-option>\n            <md-option value=\"impact\">Impact</md-option>\n            <md-option value=\"roboto\">Roboto</md-option>\n            <md-option value=\"segoe-ui\">Segoe UI</md-option>\n            <md-option value=\"times-new-roman\">Times New Roman</md-option>\n            <md-option value=\"ubuntu\">Ubuntu</md-option>\n            <md-option value=\"verdana\">Verdana</md-option>\n          </md-select>\n        </md-field>\n      </div>\n    </div>\n\n    <md-button class=\"md-primary md-raised\" @click=\"movie = 'pulp-fiction'\">Set Pulp Fiction</md-button>\n  </div>\n</template>\n\n<script>\n  export default {\n    name: 'BasicSelect',\n    data: () => ({\n      movie: 'godfather',\n      country: null,\n      font: null\n    })\n  }\n</script>\n"
  };
};

/***/ }),

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/Select/examples/DenseSelect.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(118/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/Select/examples/DenseSelect.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('dense-select', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['dense-select'] = {
    name: 'dense-select',
    source: "<template>\n  <div>\n    <div class=\"md-layout md-gutter\">\n      <div class=\"md-layout-item\">\n        <md-field>\n          <label for=\"movies\">Movies</label>\n          <md-select v-model=\"movies\" name=\"movies\" id=\"movies\" md-dense multiple>\n            <md-option value=\"fight-club\">Fight Club</md-option>\n            <md-option value=\"godfather\">Godfather</md-option>\n            <md-option value=\"godfather-ii\">Godfather II</md-option>\n            <md-option value=\"godfather-iii\">Godfather III</md-option>\n            <md-option value=\"godfellas\">Godfellas</md-option>\n            <md-option value=\"pulp-fiction\">Pulp Fiction</md-option>\n            <md-option value=\"scarface\">Scarface</md-option>\n          </md-select>\n        </md-field>\n      </div>\n\n      <div class=\"md-layout-item\">\n        <md-field>\n          <label for=\"country\">Country</label>\n          <md-select v-model=\"country\" name=\"country\" id=\"country\" md-dense>\n            <md-option value=\"australia\">Australia</md-option>\n            <md-option value=\"brazil\">Brazil</md-option>\n            <md-option value=\"japan\">Japan</md-option>\n            <md-option value=\"united-states\">United States</md-option>\n          </md-select>\n        </md-field>\n      </div>\n\n      <div class=\"md-layout-item\">\n        <md-field>\n          <label for=\"font\">Font</label>\n          <md-select v-model=\"font\" name=\"font\" id=\"font\" md-dense>\n            <md-option value=\"arial\">Arial</md-option>\n            <md-option value=\"calibri\">Calibri</md-option>\n            <md-option value=\"cambria\">Cambria</md-option>\n            <md-option value=\"comic-sans\">Comic Sans</md-option>\n            <md-option value=\"consolas\">Consolas</md-option>\n            <md-option value=\"courier\">Courier</md-option>\n            <md-option value=\"droid-sans\">Droid Sans</md-option>\n            <md-option value=\"georgia\">Georgia</md-option>\n            <md-option value=\"helvetica\">Helvetica</md-option>\n            <md-option value=\"impact\">Impact</md-option>\n            <md-option value=\"roboto\">Roboto</md-option>\n            <md-option value=\"segoe-ui\">Segoe UI</md-option>\n            <md-option value=\"times-new-roman\">Times New Roman</md-option>\n            <md-option value=\"ubuntu\">Ubuntu</md-option>\n            <md-option value=\"verdana\">Verdana</md-option>\n          </md-select>\n        </md-field>\n      </div>\n    </div>\n  </div>\n</template>\n\n<script>\n  export default {\n    name: 'DenseSelect',\n    data: () => ({\n      movies: [],\n      country: null,\n      font: null\n    })\n  }\n</script>\n"
  };
};

/***/ }),

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/Select/examples/DisabledSelect.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(117/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/Select/examples/DisabledSelect.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('disabled-select', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['disabled-select'] = {
    name: 'disabled-select',
    source: "<template>\n  <div class=\"md-layout md-gutter\">\n    <div class=\"md-layout-item\">\n      <md-field>\n        <label for=\"movie\">Disabled Select</label>\n        <md-select v-model=\"movie\" name=\"movie\" id=\"movie\" disabled>\n          <md-option value=\"fight-club\">Fight Club</md-option>\n          <md-option value=\"godfather\">Godfather</md-option>\n          <md-option value=\"godfather-ii\">Godfather II</md-option>\n          <md-option value=\"godfather-iii\">Godfather III</md-option>\n          <md-option value=\"godfellas\">Godfellas</md-option>\n          <md-option value=\"pulp-fiction\">Pulp Fiction</md-option>\n          <md-option value=\"scarface\">Scarface</md-option>\n        </md-select>\n      </md-field>\n    </div>\n\n    <div class=\"md-layout-item\">\n      <md-field>\n        <label for=\"country\">Disabled Options</label>\n        <md-select v-model=\"country\" name=\"country\" id=\"country\">\n          <md-option value=\"australia\">Australia</md-option>\n          <md-option value=\"brazil\" disabled>Brazil</md-option>\n          <md-option value=\"japan\">Japan</md-option>\n          <md-option value=\"united-states\">United States</md-option>\n        </md-select>\n      </md-field>\n    </div>\n\n    <div class=\"md-layout-item\">\n      <md-field>\n        <label for=\"food\">Disabled groups</label>\n        <md-select v-model=\"food\" name=\"food\" id=\"food\">\n          <md-optgroup label=\"Baked Goods\" disabled>\n            <md-option value=\"apple-pie\">Apple Pie</md-option>\n            <md-option value=\"chocolate-cake\">Chocolate Cake</md-option>\n          </md-optgroup>\n\n          <md-optgroup label=\"Fruits\">\n            <md-option value=\"apples\">Apples</md-option>\n            <md-option value=\"bananas\">Bananas</md-option>\n            <md-option value=\"oranges\">Oranges</md-option>\n            <md-option value=\"peaches\">Peaches</md-option>\n          </md-optgroup>\n\n          <md-optgroup label=\"Vegetables\">\n            <md-option value=\"broccoli\">Broccoli</md-option>\n            <md-option value=\"carrots\">Carrots</md-option>\n            <md-option value=\"cucumbers\">Cucumbers</md-option>\n          </md-optgroup>\n        </md-select>\n      </md-field>\n    </div>\n  </div>\n</template>\n\n<script>\n  export default {\n    name: 'DisabledSelect',\n    data: () => ({\n      movie: null,\n      country: null,\n      food: null\n    })\n  }\n</script>\n"
  };
};

/***/ }),

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/Select/examples/MultipleSelect.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(35/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/Select/examples/MultipleSelect.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('multiple-select', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['multiple-select'] = {
    name: 'multiple-select',
    source: "<template>\n  <div class=\"md-layout md-gutter\">\n    <div class=\"md-layout-item\">\n      <md-field>\n        <label for=\"movies\">Movies</label>\n        <md-select v-model=\"selectedMovies\" name=\"movies\" id=\"movies\" multiple>\n          <md-option value=\"fight-club\">Fight Club</md-option>\n          <md-option value=\"godfather\">Godfather</md-option>\n          <md-option value=\"godfather-ii\">Godfather II</md-option>\n          <md-option value=\"godfather-iii\">Godfather III</md-option>\n          <md-option value=\"godfellas\">Godfellas</md-option>\n          <md-option value=\"pulp-fiction\">Pulp Fiction</md-option>\n          <md-option value=\"scarface\">Scarface</md-option>\n        </md-select>\n      </md-field>\n\n      <div>\n        <strong>Selected movies:</strong>\n        {{ selectedMovies }}\n      </div>\n    </div>\n  </div>\n</template>\n\n<script>\n  export default {\n    name: 'MultipleSelect',\n    data: () => ({\n      selectedMovies: []\n    })\n  }\n</script>\n\n<style lang=\"scss\" scoped>\n  .md-field {\n    max-width: 300px;\n  }\n</style>\n"
  };
};

/***/ }),

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/Select/examples/OptgroupSelect.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(116/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/Select/examples/OptgroupSelect.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('optgroup-select', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['optgroup-select'] = {
    name: 'optgroup-select',
    source: "<template>\n  <div class=\"md-layout md-gutter\">\n    <div class=\"md-layout-item\">\n      <md-field>\n        <label for=\"food\">Food</label>\n        <md-select v-model=\"food1\" name=\"food\" id=\"food\">\n          <md-optgroup label=\"Baked Goods\">\n            <md-option value=\"apple-pie\">Apple Pie</md-option>\n            <md-option value=\"chocolate-cake\">Chocolate Cake</md-option>\n          </md-optgroup>\n\n          <md-optgroup label=\"Fruits\">\n            <md-option value=\"apples\">Apples</md-option>\n            <md-option value=\"bananas\">Bananas</md-option>\n            <md-option value=\"oranges\">Oranges</md-option>\n            <md-option value=\"peaches\">Peaches</md-option>\n          </md-optgroup>\n\n          <md-optgroup label=\"Vegetables\">\n            <md-option value=\"broccoli\">Broccoli</md-option>\n            <md-option value=\"carrots\">Carrots</md-option>\n            <md-option value=\"cucumbers\">Cucumbers</md-option>\n          </md-optgroup>\n        </md-select>\n      </md-field>\n    </div>\n\n    <div class=\"md-layout-item\">\n      <md-field>\n        <label for=\"food\">Food</label>\n        <md-select v-model=\"food2\" name=\"food\" id=\"food\" md-dense>\n          <md-optgroup label=\"Baked Goods\">\n            <md-option value=\"apple-pie\">Apple Pie</md-option>\n            <md-option value=\"chocolate-cake\">Chocolate Cake</md-option>\n          </md-optgroup>\n\n          <md-optgroup label=\"Fruits\">\n            <md-option value=\"apples\">Apples</md-option>\n            <md-option value=\"bananas\">Bananas</md-option>\n            <md-option value=\"oranges\">Oranges</md-option>\n            <md-option value=\"peaches\">Peaches</md-option>\n          </md-optgroup>\n\n          <md-optgroup label=\"Vegetables\">\n            <md-option value=\"broccoli\">Broccoli</md-option>\n            <md-option value=\"carrots\">Carrots</md-option>\n            <md-option value=\"cucumbers\">Cucumbers</md-option>\n          </md-optgroup>\n        </md-select>\n      </md-field>\n    </div>\n  </div>\n</template>\n\n<script>\n  export default {\n    name: 'OptgroupSelect',\n    data: () => ({\n      food1: null,\n      food2: 'carrots'\n    })\n  }\n</script>\n"
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

/***/ "./docs/app/pages/Components/Select/Select.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Select_vue__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?cacheDirectory=true!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./docs/app/pages/Components/Select/Select.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Select_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Select_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Select_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, (function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Select_vue__[key]; })) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_59162b66_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Select_vue__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-59162b66\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./docs/app/pages/Components/Select/Select.vue");
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Select_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_59162b66_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Select_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* customBlocks */
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/Select/examples/BasicSelect.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/Select/examples/DenseSelect.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/Select/examples/DisabledSelect.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/Select/examples/OptgroupSelect.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/Select/examples/MultipleSelect.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}


/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?cacheDirectory=true!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./docs/app/pages/Components/Select/Select.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _docsExample = __webpack_require__("./docs/app/mixins/docsExample.js");

var _docsExample2 = _interopRequireDefault(_docsExample);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'DocSelect',
  mixins: [_docsExample2.default],
  data: function data() {
    return {
      select: {
        props: {
          headings: ['Name', 'Description', 'Default'],
          props: [{
            name: 'v-model',
            type: 'String|Number|Boolean|Array',
            description: 'The model variable to bind the select value',
            defaults: 'null'
          }, {
            name: 'placeholder',
            type: 'String',
            description: 'The select placeholder. Similar to HTML5 placeholder attribute.',
            defaults: 'null'
          }, {
            name: 'required',
            type: 'String',
            description: 'The select required. Similar to HTML5 required attribute.',
            defaults: 'null'
          }, {
            name: 'id',
            type: 'String',
            description: 'The select id. Similar to HTML5 id attribute.',
            defaults: 'null'
          }, {
            name: 'name',
            type: 'String',
            description: 'The select name. Similar to HTML5 name attribute.',
            defaults: 'null'
          }, {
            name: 'disabled',
            type: 'Boolean',
            description: 'Disable the select and prevent it selection.',
            defaults: 'false'
          }, {
            name: 'multiple',
            type: 'Boolean',
            description: 'Create a multi selection with checkboxes inside. Only works with a <code>v-model</code> with an <code>Array</code>',
            defaults: 'false'
          }, {
            name: 'md-dense',
            type: 'Boolean',
            description: 'Enable the dense layout',
            defaults: 'false'
          }]
        },
        events: {
          headings: ['Name', 'Description', 'Value'],
          props: [{
            name: 'md-selected',
            description: 'Triggered when model changes.',
            value: 'Value of v-model'
          }, {
            name: 'md-opened',
            description: 'Triggered when select is opened.',
            value: 'none'
          }, {
            name: 'md-closed',
            description: 'Triggered when select is closed.',
            value: 'none'
          }]
        }
      },
      option: {
        headings: ['Name', 'Description', 'Default'],
        props: [{
          name: 'value',
          type: 'String|Number|Boolean',
          description: 'The option value. This is used to bind to <code>md-select</code> model',
          defaults: 'null'
        }, {
          name: 'disabled',
          type: 'Boolean',
          description: 'Disable the option and prevent it selection.',
          defaults: 'false'
        }]
      },
      optgroup: {
        headings: ['Name', 'Description', 'Default'],
        props: [{
          name: 'label',
          type: 'String',
          description: 'The group label',
          defaults: 'null'
        }, {
          name: 'disabled',
          type: 'Boolean',
          description: 'Disable the optgroup and prevent the selection of all options inside.',
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

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-59162b66\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./docs/app/pages/Components/Select/Select.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('page-container',{attrs:{"centered":"","title":_vm.$t('pages.select.title')}},[_c('div',{staticClass:"page-container-section"},[_c('p',[_vm._v("A select picks between multiple options. The select displays the current state and a down arrow. They can have single selection or multiple.")]),_vm._v(" "),_c('note-block',{attrs:{"tip":""}},[_vm._v("Select component mimics the HTML5 "),_c('code',[_vm._v("<select>")]),_vm._v(" attributes. This means that you can add attributes like "),_c('code',[_vm._v("required")]),_vm._v(" and "),_c('code',[_vm._v("multiple")]),_vm._v(" and it will react to them to give the best experience.")])],1),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('h2',[_vm._v("Select")]),_vm._v(" "),_c('p',[_vm._v("Vue Material selects works along with "),_c('code',[_vm._v("md-option")]),_vm._v(" component to provide the possible selection options. You should use it inside the "),_c('code',[_vm._v("md-field")]),_vm._v(" component The selection is will always react to changes on the "),_c('code',[_vm._v("v-model")]),_vm._v(" prop:")]),_vm._v(" "),_c('code-example',{attrs:{"title":"Single selection","component":_vm.examples['basic-select']}}),_vm._v(" "),_c('p',[_vm._v("Selects also work with multiple selection with a "),_c('code',[_vm._v("v-model")]),_vm._v(" as an "),_c('code',[_vm._v("Array")]),_vm._v(". It is awesome:")]),_vm._v(" "),_c('code-example',{attrs:{"title":"Multiple selection","component":_vm.examples['multiple-select']}}),_vm._v(" "),_c('p',[_vm._v("There is also a dense layout to accommodate more items on the screen:")]),_vm._v(" "),_c('code-example',{attrs:{"title":"Dense","component":_vm.examples['dense-select']}}),_vm._v(" "),_c('p',[_vm._v("Selects can have groups to make easy to distinguish different data sets:")]),_vm._v(" "),_c('code-example',{attrs:{"title":"Groups","component":_vm.examples['optgroup-select']}}),_vm._v(" "),_c('p',[_vm._v("It is really easy to disable a select, option and even an optgroup. This will prevent them from being selected. Just pass a "),_c('code',[_vm._v("disabled")]),_vm._v(" prop to the desired component:")]),_vm._v(" "),_c('code-example',{attrs:{"title":"Disabled","component":_vm.examples['disabled-select']}}),_vm._v(" "),_c('api-item',{attrs:{"title":"API - md-select"}},[_c('p',[_vm._v("The following options can be applied to any select:")]),_vm._v(" "),_c('api-table',{attrs:{"slot":"props","headings":_vm.select.props.headings,"props":_vm.select.props.props},slot:"props"}),_vm._v(" "),_c('api-table',{attrs:{"slot":"events","headings":_vm.select.events.headings,"props":_vm.select.events.props},slot:"events"})],1),_vm._v(" "),_c('api-item',{attrs:{"title":"API - md-option"}},[_c('p',[_vm._v("The following options can be applied to any option:")]),_vm._v(" "),_c('api-table',{attrs:{"slot":"props","headings":_vm.option.headings,"props":_vm.option.props},slot:"props"})],1),_vm._v(" "),_c('api-item',{attrs:{"title":"API - md-optgroup"}},[_c('p',[_vm._v("The following options can be applied to any optgroup:")]),_vm._v(" "),_c('api-table',{attrs:{"slot":"props","headings":_vm.optgroup.headings,"props":_vm.optgroup.props},slot:"props"})],1)],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});