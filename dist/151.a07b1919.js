webpackJsonp([151],{

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/Autocomplete/examples/AutocompleteAsync.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(95/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/Autocomplete/examples/AutocompleteAsync.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('autocomplete-async', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['autocomplete-async'] = {
    name: 'autocomplete-async',
    source: "<template>\n  <div>\n    <md-autocomplete v-model=\"value\" :md-options=\"countries\" @md-changed=\"getCountries\" @md-opened=\"getCountries\">\n      <label>Country</label>\n\n      <template slot=\"md-autocomplete-item\" slot-scope=\"{ item }\">{{ item.name }}</template>\n    </md-autocomplete>\n  </div>\n</template>\n\n<script>\n  export default {\n    name: 'AutocompleteAsync',\n    data: () => ({\n      value: null,\n      countryList: [\n        {\n          id: 1,\n          name: 'Algeria'\n        },\n        {\n          id: 2,\n          name: 'Argentina'\n        },\n        {\n          id: 3,\n          name: 'Brazil'\n        },\n        {\n          id: 4,\n          name: 'Canada'\n        },\n        {\n          id: 5,\n          name: 'Italy'\n        },\n        {\n          id: 6,\n          name: 'Japan'\n        },\n        {\n          id: 7,\n          name: 'United Kingdom'\n        },\n        {\n          id: 8,\n          name: 'United States'\n        }\n      ],\n      countries: []\n    }),\n    methods: {\n      getCountries (searchTerm) {\n        this.countries = new Promise(resolve => {\n          window.setTimeout(() => {\n            if (!searchTerm) {\n              resolve(this.countryList)\n            } else {\n              const term = searchTerm.toLowerCase()\n\n              resolve(this.countryList.filter(({ name }) => name.toLowerCase().includes(term)))\n            }\n          }, 500)\n        })\n      }\n    }\n  }\n</script>\n\n<style lang=\"scss\" scoped>\n  .md-autocomplete {\n\n  }\n</style>\n"
  };
};

/***/ }),

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/Autocomplete/examples/AutocompleteBox.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(94/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/Autocomplete/examples/AutocompleteBox.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('autocomplete-box', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['autocomplete-box'] = {
    name: 'autocomplete-box',
    source: "<template>\n  <div>\n    <md-autocomplete\n      v-model=\"selectedEmployee\"\n      :md-options=\"employees\"\n      md-layout=\"box\"\n      md-dense>\n      <label>Employees</label>\n    </md-autocomplete>\n\n    <md-toolbar class=\"md-primary\">\n      <div class=\"md-toolbar-row\">\n        <div class=\"md-toolbar-section-start\">\n          <md-button class=\"md-icon-button\">\n            <md-icon>menu</md-icon>\n          </md-button>\n        </div>\n\n        <md-autocomplete\n          class=\"search\"\n          v-model=\"selectedEmployee\"\n          :md-options=\"employees\"\n          md-layout=\"box\">\n          <label>Search...</label>\n        </md-autocomplete>\n\n        <div class=\"md-toolbar-section-end\">\n          <md-button class=\"md-icon-button\">\n            <md-icon>refresh</md-icon>\n          </md-button>\n\n          <md-button class=\"md-icon-button\">\n            <md-icon>more_vert</md-icon>\n          </md-button>\n        </div>\n      </div>\n    </md-toolbar>\n  </div>\n</template>\n\n<script>\n  export default {\n    name: 'AutocompleteBox',\n    data: () => ({\n      selectedEmployee: null,\n      employees: [\n        'Jim Halpert',\n        'Dwight Schrute',\n        'Michael Scott',\n        'Pam Beesly',\n        'Angela Martin',\n        'Kelly Kapoor',\n        'Ryan Howard',\n        'Kevin Malone',\n        'Creed Bratton',\n        'Oscar Nunez',\n        'Toby Flenderson',\n        'Stanley Hudson',\n        'Meredith Palmer',\n        'Phyllis Lapin-Vance'\n      ]\n    })\n  }\n</script>\n\n<style lang=\"scss\" scoped>\n  .search {\n    max-width: 500px;\n  }\n</style>\n"
  };
};

/***/ }),

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/Autocomplete/examples/AutocompleteSearch.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(93/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/Autocomplete/examples/AutocompleteSearch.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('autocomplete-search', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['autocomplete-search'] = {
    name: 'autocomplete-search',
    source: "<template>\n  <div>\n    <strong>Fuzzy Search:</strong>\n    <md-autocomplete v-model=\"selectedEmployee\" :md-options=\"employees\">\n      <label>Manager</label>\n\n      <template slot=\"md-autocomplete-item\" slot-scope=\"{ item, term }\">\n        <md-highlight-text :md-term=\"term\">{{ item }}</md-highlight-text>\n      </template>\n\n      <template slot=\"md-autocomplete-empty\" slot-scope=\"{ term }\">\n        No employees matching \"{{ term }}\" were found. <a @click=\"noop()\">Create a new</a> one!\n      </template>\n    </md-autocomplete>\n\n    <strong>Normal Search:</strong>\n    <md-autocomplete v-model=\"selectedCountry\" :md-options=\"countries\" :md-fuzzy-search=\"false\">\n      <label>Country</label>\n\n      <template slot=\"md-autocomplete-item\" slot-scope=\"{ item, term }\">\n        <md-highlight-text :md-term=\"term\">{{ item }}</md-highlight-text>\n      </template>\n\n      <template slot=\"md-autocomplete-empty\" slot-scope=\"{ term }\">\n        No countries matching \"{{ term }}\" were found. <a @click=\"noop()\">Create a new</a> one!\n      </template>\n    </md-autocomplete>\n  </div>\n</template>\n\n<script>\n  export default {\n    name: 'AutocompleteSearch',\n    data: () => ({\n      selectedEmployee: null,\n      selectedCountry: null,\n      countries: [\n        'Algeria',\n        'Argentina',\n        'Brazil',\n        'Canada',\n        'Italy',\n        'Japan',\n        'United Kingdom',\n        'United States'\n      ],\n      employees: [\n        'Jim Halpert',\n        'Dwight Schrute',\n        'Michael Scott',\n        'Pam Beesly',\n        'Angela Martin',\n        'Kelly Kapoor',\n        'Ryan Howard',\n        'Kevin Malone',\n        'Creed Bratton',\n        'Oscar Nunez',\n        'Toby Flenderson',\n        'Stanley Hudson',\n        'Meredith Palmer',\n        'Phyllis Lapin-Vance'\n      ]\n    }),\n    methods: {\n      noop () {\n        window.alert('noop')\n      }\n    }\n  }\n</script>\n\n<style lang=\"scss\" scoped>\n  .md-autocomplete + strong {\n    margin-top: 36px;\n    display: block;\n  }\n</style>\n"
  };
};

/***/ }),

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/Autocomplete/examples/AutocompleteStatic.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(145/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/Autocomplete/examples/AutocompleteStatic.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('autocomplete-static', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['autocomplete-static'] = {
    name: 'autocomplete-static',
    source: "<template>\n  <div>\n    <md-autocomplete v-model=\"selectedCountry\" :md-options=\"countries\">\n      <label>Country</label>\n    </md-autocomplete>\n\n    <md-autocomplete v-model=\"selectedEmployee\" :md-options=\"employees\" md-dense>\n      <label>Employees</label>\n    </md-autocomplete>\n  </div>\n</template>\n\n<script>\n  export default {\n    name: 'AutocompleteStatic',\n    data: () => ({\n      selectedCountry: null,\n      selectedEmployee: null,\n      countries: [\n        'Algeria',\n        'Argentina',\n        'Brazil',\n        'Canada',\n        'Italy',\n        'Japan',\n        'United Kingdom',\n        'United States'\n      ],\n      employees: [\n        'Jim Halpert',\n        'Dwight Schrute',\n        'Michael Scott',\n        'Pam Beesly',\n        'Angela Martin',\n        'Kelly Kapoor',\n        'Ryan Howard',\n        'Kevin Malone',\n        'Creed Bratton',\n        'Oscar Nunez',\n        'Toby Flenderson',\n        'Stanley Hudson',\n        'Meredith Palmer',\n        'Phyllis Lapin-Vance'\n      ]\n    })\n  }\n</script>\n"
  };
};

/***/ }),

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/Autocomplete/examples/AutocompleteTemplate.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(92/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/Autocomplete/examples/AutocompleteTemplate.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('autocomplete-template', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['autocomplete-template'] = {
    name: 'autocomplete-template',
    source: "<template>\n  <div>\n    <md-autocomplete v-model=\"value\" :md-options=\"colors\">\n      <label>Color</label>\n\n      <template slot=\"md-autocomplete-item\" slot-scope=\"{ item, term }\">\n        <span class=\"color\" :style=\"`background-color: ${item.color}`\"></span>\n        <md-highlight-text :md-term=\"term\">{{ item.name }}</md-highlight-text>\n      </template>\n\n      <template slot=\"md-autocomplete-empty\" slot-scope=\"{ term }\">\n        No colors matching \"{{ term }}\" were found. <a @click=\"noop()\">Create a new</a> one!\n      </template>\n\n      <div class=\"md-helper-text\" v-if=\"value\">\n        <strong>Selected Color:</strong>\n        <span class=\"color\" :style=\"`background-color: ${value.color}`\"></span>\n      </div>\n    </md-autocomplete>\n  </div>\n</template>\n\n<script>\n  export default {\n    name: 'AutocompleteTemplate',\n    data: () => ({\n      value: null,\n      colors: [\n        { name: 'Aqua', color: '#00ffff' },\n        { name: 'Aquamarine', color: '#7fffd4' },\n        { name: 'Azure', color: '#f0ffff' },\n        { name: 'Beige', color: '#f5f5dc' },\n        { name: 'Black', color: '#000000' },\n        { name: 'Blue', color: '#0000ff' },\n        { name: 'Brown', color: '#a52a2a' },\n        { name: 'Crimson', color: '#dc143c' },\n        { name: 'Cyan', color: '#00ffff' },\n        { name: 'Deep Pink', color: '#ff1493' },\n        { name: 'Dim Gray', color: '#696969' },\n        { name: 'Fuchsia', color: '#ff00ff' },\n        { name: 'Gold', color: '#ffd700' },\n        { name: 'Gray', color: '#808080' },\n        { name: 'Green', color: '#008000' },\n        { name: 'Green Yellow', color: '#adff2f' },\n        { name: 'Grey', color: '#808080' },\n        { name: 'Hotpink', color: '#ff69b4' },\n        { name: 'Indigo', color: '#4b0082' },\n        { name: 'Ivory', color: '#fffff0' },\n        { name: 'Khaki', color: '#f0e68c' },\n        { name: 'Lavender', color: '#e6e6fa' },\n        { name: 'Lime', color: '#00ff00' },\n        { name: 'Magenta', color: '#ff00ff' },\n        { name: 'Maroon', color: '#800000' },\n        { name: 'Navy', color: '#000080' },\n        { name: 'Olive', color: '#808000' },\n        { name: 'Orange', color: '#ffa500' },\n        { name: 'Orange Red', color: '#ff4500' },\n        { name: 'Pale Golden Rod', color: '#eee8aa' },\n        { name: 'Pale Green', color: '#98fb98' },\n        { name: 'Pink', color: '#ffc0cb' },\n        { name: 'Purple', color: '#800080' },\n        { name: 'Red', color: '#ff0000' },\n        { name: 'Royal Blue', color: '#4169e1' },\n        { name: 'Sea Green', color: '#2e8b57' },\n        { name: 'Silver', color: '#c0c0c0' },\n        { name: 'Sky Blue', color: '#87ceeb' },\n        { name: 'Slate Blue', color: '#6a5acd' },\n        { name: 'Slate Grey', color: '#708090' },\n        { name: 'Teal', color: '#008080' },\n        { name: 'Turquoise', color: '#40e0d0' },\n        { name: 'Violet', color: '#ee82ee' },\n        { name: 'White', color: '#ffffff' },\n        { name: 'Yellow', color: '#ffff00' }\n      ]\n    }),\n    methods: {\n      noop () {\n        window.alert('noop')\n      }\n    }\n  }\n</script>\n\n<style lang=\"scss\" scoped>\n  .color {\n    width: 16px;\n    height: 16px;\n    display: inline-block;\n    margin-right: 16px;\n    border: 1px solid rgba(#000, .12);\n  }\n\n  .md-helper-text {\n    display: flex;\n    align-items: center;\n\n    .color {\n      width: 12px;\n      height: 12px;\n      margin-left: 4px;\n    }\n  }\n</style>\n"
  };
};

/***/ }),

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/Autocomplete/examples/AutocompleteTrigger.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(144/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/Autocomplete/examples/AutocompleteTrigger.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('autocomplete-trigger', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['autocomplete-trigger'] = {
    name: 'autocomplete-trigger',
    source: "<template>\n  <div>\n    <md-autocomplete v-model=\"selectedCountry\" :md-options=\"countries\">\n      <label>Country</label>\n    </md-autocomplete>\n\n    <md-autocomplete v-model=\"selectedEmployee\" :md-options=\"employees\" :md-open-on-focus=\"false\">\n      <label>Employees</label>\n    </md-autocomplete>\n  </div>\n</template>\n\n<script>\n  export default {\n    name: 'AutocompleteTrigger',\n    data: () => ({\n      selectedCountry: null,\n      selectedEmployee: null,\n      countries: [\n        'Algeria',\n        'Argentina',\n        'Brazil',\n        'Canada',\n        'Italy',\n        'Japan',\n        'United Kingdom',\n        'United States'\n      ],\n      employees: [\n        'Jim Halpert',\n        'Dwight Schrute',\n        'Michael Scott',\n        'Pam Beesly',\n        'Angela Martin',\n        'Kelly Kapoor',\n        'Ryan Howard',\n        'Kevin Malone',\n        'Creed Bratton',\n        'Oscar Nunez',\n        'Toby Flenderson',\n        'Stanley Hudson',\n        'Meredith Palmer',\n        'Phyllis Lapin-Vance'\n      ]\n    })\n  }\n</script>\n"
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

/***/ "./docs/app/pages/Components/Autocomplete/Autocomplete.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Autocomplete_vue__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?cacheDirectory=true!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./docs/app/pages/Components/Autocomplete/Autocomplete.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Autocomplete_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Autocomplete_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Autocomplete_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, (function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Autocomplete_vue__[key]; })) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_159594f4_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Autocomplete_vue__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-159594f4\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./docs/app/pages/Components/Autocomplete/Autocomplete.vue");
function injectStyle (ssrContext) {
  __webpack_require__("./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-159594f4\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./docs/app/pages/Components/Autocomplete/Autocomplete.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Autocomplete_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_159594f4_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Autocomplete_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* customBlocks */
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/Autocomplete/examples/AutocompleteStatic.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/Autocomplete/examples/AutocompleteTrigger.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/Autocomplete/examples/AutocompleteSearch.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/Autocomplete/examples/AutocompleteBox.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/Autocomplete/examples/AutocompleteTemplate.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/Autocomplete/examples/AutocompleteAsync.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}


/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?cacheDirectory=true!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./docs/app/pages/Components/Autocomplete/Autocomplete.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _docsExample = __webpack_require__("./docs/app/mixins/docsExample.js");

var _docsExample2 = _interopRequireDefault(_docsExample);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'DocAutocomplete',
  mixins: [_docsExample2.default],
  data: function data() {
    return {
      autocomplete: {
        slots: {
          headings: ['Name', 'Description', 'Values'],
          props: [{
            name: 'md-autocomplete-item',
            description: 'Creates a custom autocomplete result item',
            options: [{
              name: 'item',
              description: 'Will receive each item of the matched options.'
            }, {
              name: 'term',
              description: 'The current input search term.'
            }],
            usage: '<template slot="md-autocomplete-item" slot-scope="{ item, term }"> ... </template>'
          }, {
            name: 'md-autocomplete-empty',
            description: 'Creates a empty state in case of zero matches',
            options: [{
              name: 'term',
              description: 'The current input search term.'
            }],
            usage: '<template slot="md-autocomplete-empty" slot-scope="{ term }"> ... </template>'
          }]
        },
        props: {
          headings: ['Name', 'Description', 'Default'],
          props: [{
            name: 'v-model',
            type: 'String|Number|Boolean|Array',
            description: 'The model variable to bind the autocomplete value',
            defaults: 'null'
          }, {
            name: 'md-options',
            type: 'Array|Promise',
            description: 'The available options to be searched. If <code>Array</code>, the autocomplete will use a inner search engine. If <code>Promise</code>, you will need to implement the search by yourself (this is commonly made by a backend service).',
            defaults: '[]'
          }, {
            name: 'md-input-name',
            type: 'String',
            description: 'The input name attribute',
            defaults: 'null'
          }, {
            name: 'md-input-id',
            type: 'String',
            description: 'The input id attribute',
            defaults: 'a random string'
          }, {
            name: 'md-input-max-length',
            type: 'Number',
            description: 'Enables a character count, based on the given value.',
            defaults: 'null'
          }, {
            name: 'md-input-placeholder',
            type: 'Number',
            description: 'Sets a optional placeholder on autocomplete.',
            defaults: 'null'
          }, {
            name: 'md-dense',
            type: 'Boolean',
            description: 'Enable the dense layout for options',
            defaults: 'false'
          }, {
            name: 'md-layout',
            type: 'String',
            description: 'Sets the input layout. The floating variant is the default. See below the detailed description of each layout.',
            defaults: 'floating'
          }, {
            offset: true,
            name: 'md-layout="floating"',
            type: 'String',
            description: 'Sets the input layout to floating. This is the default.',
            defaults: '-'
          }, {
            offset: true,
            name: 'md-layout="box"',
            type: 'String',
            description: 'Sets the input layout to a boxed layout.',
            defaults: '-'
          }, {
            name: 'md-open-on-focus',
            type: 'Boolean',
            description: 'Disable/enable the on focus event. If <code>false</code>, the options will show the results right after a keystroke.',
            defaults: 'true'
          }, {
            name: 'md-fuzzy-search',
            type: 'Boolean',
            description: 'Disable/enable the fuzzy search algorithm. If <code>false</code>, the search will match the whole search term. This option do not take any effects if the <code>md-options</code> is a Promise',
            defaults: 'true'
          }]
        },
        events: {
          headings: ['Name', 'Description', 'Value'],
          props: [{
            name: 'md-changed',
            description: 'Triggered when the user types on the input field',
            value: 'The search term'
          }, {
            name: 'md-selected',
            description: 'Triggered when the user selects an option',
            value: 'The selected value'
          }, {
            name: 'md-opened',
            description: 'Triggered when the options panel is opened',
            value: 'null'
          }, {
            name: 'md-closed',
            description: 'Triggered when the options panel is closed',
            value: 'null'
          }]
        }
      },
      highlight: {
        props: {
          headings: ['Name', 'Description', 'Default'],
          props: [{
            name: 'md-term',
            type: 'String',
            description: 'The search term to highlight',
            defaults: 'null'
          }, {
            name: 'md-fuzzy-search',
            type: 'Boolean',
            description: 'Disable/enable the fuzzy highlight algorithm. If <code>false</code>, the highlight will match the whole search term.',
            defaults: 'true'
          }]
        }
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-159594f4\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./docs/app/pages/Components/Autocomplete/Autocomplete.vue":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-159594f4\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./docs/app/pages/Components/Autocomplete/Autocomplete.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('page-container',{attrs:{"centered":"","title":_vm.$t('pages.autocomplete.title')}},[_c('div',{staticClass:"page-container-section"},[_c('p',[_vm._v("Input text can be used with autocomplete to help users who have limited literacy or who write in a foreign language. For example, autocomplete can suggest input as it’s typed (refreshing suggestions with each keystroke).")]),_vm._v(" "),_c('p',[_vm._v("Vue Material autocomplete is really simple, yet powerfull. With simple options you can create great suggestions with async feedbacks.")]),_vm._v(" "),_c('p',[_vm._v("Autocomplete works like "),_c('code',[_vm._v("md-field")]),_vm._v(". This means that you can pass labels, validation messages, helper texts and even icons:")])]),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('h2',[_vm._v("Static Data")]),_vm._v(" "),_c('p',[_vm._v("If you have a small amount of data or if it's static, you can pass the options to "),_c('code',[_vm._v("md-autocomplete")]),_vm._v(" in a simple and intuitive way:")]),_vm._v(" "),_c('code-example',{attrs:{"title":"Normal and Dense","component":_vm.examples['autocomplete-static']}})],1),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('h2',[_vm._v("Trigger")]),_vm._v(" "),_c('p',[_vm._v("By default the suggestions will appear along with a focus trigger. If you want something less intrusive, you can disable this behaviour by canceling the focus event. If this, the suggestions will appear right after a keystroke:")]),_vm._v(" "),_c('code-example',{attrs:{"title":"Focus vs Input","component":_vm.examples['autocomplete-trigger']}})],1),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('h2',[_vm._v("Box Layout")]),_vm._v(" "),_c('p',[_vm._v("Autocomplete have types two layouts: Default with floating labels and a boxed layout with inline labels. The box layout will apply a boxed layout with a small elevation, that also works really great as search bar inside a toolbar. Gorgeous:")]),_vm._v(" "),_c('code-example',{attrs:{"title":"Works with dense variant too!","component":_vm.examples['autocomplete-box']}})],1),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('h2',[_vm._v("Custom Template")]),_vm._v(" "),_c('note-block',{attrs:{"alert":""}},[_vm._v("This section will assume that you have knowledge of "),_c('a',{attrs:{"href":"https://vuejs.org/v2/guide/components.html#Scoped-Slots","target":"_blank"}},[_vm._v("Vue Scoped Slots")]),_vm._v(". This will allow you to customize the option list.")]),_vm._v(" "),_c('p',[_vm._v("Autocomplete also accepts a custom template, flexible to accept any HTML element and with an 'empty state' built in. You can also highlight the search term inside the matches, to give a feedback on why that item has been in the results. Awesome:")]),_vm._v(" "),_c('code-example',{attrs:{"title":"With highlight text","component":_vm.examples['autocomplete-template']}}),_vm._v(" "),_c('note-block',{attrs:{"tip":""}},[_vm._v("Although the "),_c('code',[_vm._v("md-highlight-text")]),_vm._v(" component is most used with autocomplete, you can use it anywhere.")])],1),_vm._v(" "),_c('div',{staticClass:"page-container-section search-algorithms"},[_c('h2',[_vm._v("Search Algorithms")]),_vm._v(" "),_c('p',[_vm._v("Vue Material autocomplete comes with 2 ways of search: "),_c('a',{attrs:{"href":"https://en.wikipedia.org/wiki/Approximate_string_matching","target":"_blank"}},[_vm._v("Fuzzy search")]),_vm._v(" and search by whole term. The fuzzy search tries to match the results by approximation, finding patterns inside the available options. This will help with accidental type errors and improve the results. If you think that this may be confusing, you can disable this. Example:")]),_vm._v(" "),_c('div',{staticClass:"md-layout md-gutter"},[_c('div',{staticClass:"md-layout-item md-size-40"},[_c('p',[_c('strong',[_vm._v("Fuzzy search")]),_vm._v(" - search term: "),_c('code',[_vm._v("pam")])]),_vm._v(" "),_c('div',[_vm._v("\n          Matches:\n          "),_c('ul',[_c('li',[_c('md-highlight-text',{attrs:{"md-term":"pam"}},[_vm._v("Pam Beesly")])],1),_vm._v(" "),_c('li',[_c('md-highlight-text',{attrs:{"md-term":"pam"}},[_vm._v("Meredith Palmer")])],1)])])]),_vm._v(" "),_c('div',{staticClass:"md-layout-item md-size-40"},[_c('p',[_c('strong',[_vm._v("Normal Search")]),_vm._v(" - search term: "),_c('code',[_vm._v("pam")])]),_vm._v(" "),_c('div',[_vm._v("\n          Matches:\n          "),_c('ul',[_c('li',[_c('md-highlight-text',{attrs:{"md-term":"pam","md-fuzzy-search":false}},[_vm._v("Pam Beesly")])],1)])])])]),_vm._v(" "),_c('code-example',{attrs:{"title":"Fuzzy or Normal","component":_vm.examples['autocomplete-search']}})],1),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('h2',[_vm._v("Async Options")]),_vm._v(" "),_c('p',[_vm._v("Sometimes the options are inside a database in a remote server. Instead of giving a static data, we can provide a "),_c('code',[_vm._v("Promise")]),_vm._v(" that will resolve with the data from a backend servide, for example. This is great to save Bandwidth on the initial load and to improve the performance. Look at this example:")]),_vm._v(" "),_c('code-example',{attrs:{"title":"Spinner Loading","component":_vm.examples['autocomplete-async']}}),_vm._v(" "),_c('api-item',{attrs:{"title":"API - md-autocomplete"}},[_c('p',[_vm._v("All the following options can be used on any autocomplete:")]),_vm._v(" "),_c('api-table',{attrs:{"slot":"props","headings":_vm.autocomplete.props.headings,"props":_vm.autocomplete.props.props},slot:"props"}),_vm._v(" "),_c('api-table',{attrs:{"slot":"scoped-slots","headings":_vm.autocomplete.slots.headings,"props":_vm.autocomplete.slots.props},slot:"scoped-slots"}),_vm._v(" "),_c('api-table',{attrs:{"slot":"events","headings":_vm.autocomplete.events.headings,"props":_vm.autocomplete.events.props},slot:"events"})],1),_vm._v(" "),_c('api-item',{attrs:{"title":"API - md-highlight-text"}},[_c('p',[_vm._v("The following options can be used with highlight text:")]),_vm._v(" "),_c('api-table',{attrs:{"slot":"props","headings":_vm.highlight.props.headings,"props":_vm.highlight.props.props},slot:"props"})],1)],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});