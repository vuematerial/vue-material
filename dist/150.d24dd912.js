webpackJsonp([150],{

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/Chips/examples/ChipCustomTemplate.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(70/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/Chips/examples/ChipCustomTemplate.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('chip-custom-template', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['chip-custom-template'] = {
    name: 'chip-custom-template',
    source: "<template>\n  <div>\n    <md-chips v-model=\"projects\" :md-limit=\"5\" md-placeholder=\"Add project...\">\n      <template slot=\"md-chip\" slot-scope=\"{ chip }\">\n        {{ chip }} <small v-if=\"chip === currentProject\">(Marcos Moura)</small>\n      </template>\n\n      <div class=\"md-helper-text\">Up to 5 projects</div>\n    </md-chips>\n  </div>\n</template>\n\n<script>\n  export default {\n    name: 'ChipCustomTemplate',\n    data: () => ({\n      currentProject: 'Vue Material',\n      projects: [\n        'Vue Material',\n        'Element UI',\n        'Quasar'\n      ]\n    })\n  }\n</script>\n\n<style lang=\"scss\" scoped>\n  small {\n    font-weight: 500;\n  }\n</style>\n"
  };
};

/***/ }),

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/Chips/examples/DuplicatedFeedback.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(2/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/Chips/examples/DuplicatedFeedback.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('duplicated-feedback', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['duplicated-feedback'] = {
    name: 'duplicated-feedback',
    source: "<template>\n  <div>\n    <md-chips class=\"md-primary\" v-model=\"chips\" md-placeholder=\"Add genre...\">\n      <div class=\"md-helper-text\">Default</div>\n    </md-chips>\n    <md-chips class=\"md-primary shake-on-error\" v-model=\"chips\" md-placeholder=\"Add genre...\">\n      <div class=\"md-helper-text\">Shake duplicated chip on insertion</div>\n    </md-chips>\n    <md-chips class=\"md-primary pulse-on-error\" v-model=\"chips\" md-placeholder=\"Add genre...\" md-check-duplicated>\n      <div class=\"md-helper-text\">Always pulse duplicated chip</div>\n    </md-chips>\n  </div>\n</template>\n\n<script>\nexport default {\n  name: 'DuplicatedFeedback',\n  data: () => ({\n    chips: [\n      'Pop',\n      'Rock',\n      'Jazz',\n      'Metal'\n    ]\n  })\n}\n</script>\n\n<style lang=\"scss\" scoped>\n.shake-on-error /deep/ .md-duplicated {\n  animation-name: shake;\n  animation-duration: 0.5s;\n}\n\n@keyframes shake {\n  0% { transform: translate(15px); }\n  20% { transform: translate(-15px); }\n  40% { transform: translate(7px); }\n  60% { transform: translate(-7px); }\n  80% { transform: translate(3px); }\n  100% { transform: translate(0px); }\n}\n</style>\n\n<style lang=\"css\" scoped>\n.pulse-on-error >>> .md-duplicated {\n  animation-name: pulse;\n  animation-duration: 0.5s;\n  animation-iteration-count: infinite;\n  animation-direction: alternate;\n  animation-timing-function: ease-in-out\n}\n\n@keyframes pulse {\n  0% { transform: scale(1.1, 1.1); }\n  100% { transform: scale(0.9, 0.9); }\n}\n</style>\n\n"
  };
};

/***/ }),

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/Chips/examples/Editable.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(141/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/Chips/examples/Editable.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('editable', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['editable'] = {
    name: 'editable',
    source: "<template>\n  <div>\n    <md-chips v-model=\"fruits\" md-placeholder=\"Add fruit...\"></md-chips>\n  </div>\n</template>\n\n<script>\nexport default {\n  name: 'Editable',\n  data: () => ({\n    fruits: [\n      'Orange',\n      'Apple',\n      'Pineapple'\n    ]\n  })\n}\n</script>\n"
  };
};

/***/ }),

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/Chips/examples/Format.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(140/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/Chips/examples/Format.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('format', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['format'] = {
    name: 'format',
    source: "<template>\n  <div>\n    <md-chips class=\"md-primary\" v-model=\"clubs\" md-placeholder=\"Add club...\" :md-format=\"toUppercase\">\n      <label>La Liga Clubs</label>\n      <div class=\"md-helper-text\">Three uppercase letters</div>\n    </md-chips>\n    \n    <md-chips class=\"md-primary\" v-model=\"artists\" md-placeholder=\"Add artist...\" :md-format=\"formatName\">\n      <label>Artists</label>\n      <div class=\"md-helper-text\">Try inserting `Eugène Ysaÿe`. The formatter will remove diacritics.</div>\n    </md-chips>\n  </div>\n</template>\n\n<script>\nexport default {\n  name: 'Format',\n  data: () => ({\n    clubs: [\n      'FCB',\n      'MAD'\n    ],\n    artists: [\n      'Claude Debussy',\n      'Jules Massenet',\n      'Gabriel Dupont',\n      'Emma Bardac',\n      'Mary Garden'\n    ]\n  }),\n  methods: {\n    toUppercase (str) {\n      str = str.replace(/\\s/g, '').toUpperCase()\n      if (str.length !== 3) return false\n      return str\n    },\n    formatName (str) {\n      let words = str.split(' ').filter(str => str !== '')\n      // remove accents / diacritics\n      words = words.map(str => str.normalize('NFD').replace(/[\\u0300-\\u036f]/g, ''))\n      // capitalize\n      words = words.map(str => str[0].toUpperCase() + str.slice(1))\n      return words.join(' ')\n    }\n  }\n}\n</script>\n"
  };
};

/***/ }),

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/Chips/examples/SingleChip.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(139/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/Chips/examples/SingleChip.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('single-chip', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['single-chip'] = {
    name: 'single-chip',
    source: "<template>\n  <div>\n    <md-chip>Static</md-chip>\n    <md-chip class=\"md-primary\" md-deletable>Deletable</md-chip>\n    <md-chip class=\"md-accent\" md-clickable>Clickable</md-chip>\n    <md-chip md-disabled>Disabled</md-chip>\n  </div>\n</template>\n\n<script>\nexport default {\n  name: 'SingleChip'\n}\n</script>\n"
  };
};

/***/ }),

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/Chips/examples/Static.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(138/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/Chips/examples/Static.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('static', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['static'] = {
    name: 'static',
    source: "<template>\n  <div>\n    <md-chips v-model=\"cities\" md-static></md-chips>\n  </div>\n</template>\n\n<script>\nexport default {\n  name: 'Static',\n  data: () => ({\n    cities: [\n      'New York',\n      'Amsterdam',\n      'Tokyo',\n      'Rome'\n    ]\n  })\n}\n</script>\n"
  };
};

/***/ }),

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/Chips/examples/Themed.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(69/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/Chips/examples/Themed.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('themed', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['themed'] = {
    name: 'themed',
    source: "<template>\n  <div>\n    <md-chip class=\"md-primary\" v-for=\"chip in primary\" :key=\"chip\">{{ chip }}</md-chip>\n    <md-chip class=\"md-accent\" v-for=\"chip in accent\" :key=\"chip\" md-clickable>{{ chip }}</md-chip>\n  </div>\n</template>\n\n<script>\nexport default {\n  name: 'Themed',\n  data: () => ({\n    primary: [\n      'Orange',\n      'Apple',\n      'Pineapple'\n    ],\n    accent: [\n      'Cat',\n      'Dog',\n      'Rabbit'\n    ]\n  })\n}\n</script>\n\n<style lang=\"scss\" scoped>\n  .md-chips {\n    margin-bottom: 24px;\n  }\n\n  small {\n    font-weight: 500;\n  }\n</style>\n"
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

/***/ "./docs/app/pages/Components/Chips/Chips.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Chips_vue__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?cacheDirectory=true!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./docs/app/pages/Components/Chips/Chips.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Chips_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Chips_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Chips_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, (function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Chips_vue__[key]; })) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b93b72b4_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Chips_vue__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-b93b72b4\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./docs/app/pages/Components/Chips/Chips.vue");
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Chips_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b93b72b4_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Chips_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* customBlocks */
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/Chips/examples/SingleChip.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/Chips/examples/Static.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/Chips/examples/Editable.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/Chips/examples/ChipCustomTemplate.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/Chips/examples/DuplicatedFeedback.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/Chips/examples/Format.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/Chips/examples/Themed.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}


/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?cacheDirectory=true!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./docs/app/pages/Components/Chips/Chips.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _docsExample = __webpack_require__("./docs/app/mixins/docsExample.js");

var _docsExample2 = _interopRequireDefault(_docsExample);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'DocChips',
  mixins: [_docsExample2.default],
  data: function data() {
    return {
      chip: {
        props: {
          headings: ['Name', 'Description', 'Default'],
          props: [{
            name: 'md-clickable',
            type: 'Boolean',
            description: 'Enables/Disables the click action in the chip.',
            defaults: 'false'
          }, {
            name: 'md-deletable',
            type: 'Boolean',
            description: 'Creates a chip that can hold a delete action. Useful when editing a chip series, like tags or categories.',
            defaults: 'false'
          }, {
            name: 'md-disabled',
            type: 'Boolean',
            description: 'Enables/Disables the chip to be clickable of deletable.',
            defaults: 'false'
          }]
        },
        events: {
          headings: ['Name', 'Description', 'Value'],
          props: [{
            name: 'md-delete',
            description: 'Triggered after a mouse click on delete icon. Only fired when md-deletable is true.',
            value: '$event'
          }]
        }
      },
      chips: {
        props: {
          headings: ['Name', 'Description', 'Default'],
          props: [{
            name: 'v-model',
            type: 'Array',
            description: 'The content to be displayed as chips. Need to be a array of strings, unless you specify a custom template.',
            defaults: '[]'
          }, {
            name: 'id',
            type: 'String',
            description: 'The input id. If null, it will be created automatically.',
            defaults: 'null'
          }, {
            name: 'md-input-type',
            type: 'String',
            description: 'The input type. Cannot be \'file\'',
            defaults: 'text'
          }, {
            name: 'md-placeholder',
            type: 'String',
            description: 'The input placeholder. It is useful to show to the user which type of data will be inserted.',
            defaults: 'null'
          }, {
            name: 'md-static',
            type: 'Boolean',
            description: 'Creates a non-editable chips. Useful to show inside a details page.',
            defaults: 'false'
          }, {
            name: 'md-limit',
            type: 'Number',
            description: 'Blocks the chips to create items above the limit.',
            defaults: 'false'
          }, {
            name: 'md-check-duplicated',
            type: 'Boolean',
            description: 'Always check if there is a duplicated chip while changing the input value, or check it only on insertion',
            defaults: 'false'
          }, {
            name: 'md-format',
            type: 'Function',
            description: ['Formatter before chip insertion. Effects to insertion and duplicated-checking.', 'The Chips will pass the inputted value as a parameter of this function. This function returns the formatted result.'].join('<br/>'),
            defaults: 'null'
          }]
        },
        events: {
          headings: ['Name', 'Description', 'Value'],
          props: [{
            name: 'md-delete',
            description: 'Triggered after a mouse click on delete icon of a chip.',
            value: '<span>Two params:</span> <br> text, index'
          }, {
            name: 'md-click',
            description: 'Triggered after a mouse click on a single chip.',
            value: '<span>Two params:</span> <br> text, index'
          }, {
            name: 'md-insert',
            description: 'Triggered after a chip inserted.',
            value: 'The last inserted chip value'
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

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-b93b72b4\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./docs/app/pages/Components/Chips/Chips.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('page-container',{attrs:{"centered":"","title":_vm.$t('pages.chips.title')}},[_c('div',{staticClass:"page-container-section"},[_c('p',[_vm._v("Chips represent complex entities in small blocks, such as a contact. They can be used as a way for a user to create arbitrary items, like categories or tags.")])]),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('h2',[_vm._v("Standalone Chip")]),_vm._v(" "),_c('p',[_vm._v("A chip can be used as standalone, without any connection with another chip. It can be used like a badge or a category of an entity in your application. You can specify if your chip can be deletable and clickable:")]),_vm._v(" "),_c('code-example',{attrs:{"title":"Single","component":_vm.examples['single-chip']}}),_vm._v(" "),_c('api-item',{attrs:{"title":"API - md-chip"}},[_c('p',[_vm._v("All the following options can be applied to the md-chip component:")]),_vm._v(" "),_c('api-table',{attrs:{"slot":"props","headings":_vm.chip.props.headings,"props":_vm.chip.props.props},slot:"props"}),_vm._v(" "),_c('api-table',{attrs:{"slot":"events","headings":_vm.chip.events.headings,"props":_vm.chip.events.props},slot:"events"})],1)],1),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('h2',[_vm._v("Editable model")]),_vm._v(" "),_c('p',[_vm._v("Sometimes we need to edit the set of items on screen, for example, when editing tags, the user may need to remove/add tags. In this case you can use the editable chips, that is the default behaviour:")]),_vm._v(" "),_c('code-example',{attrs:{"title":"Editable","component":_vm.examples['editable']}})],1),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('h2',[_vm._v("Readonly")]),_vm._v(" "),_c('p',[_vm._v("Let's think in an entity that have tags. Sometimes you might need to show all of them in a single row, but not allow the user to edit them. You can achieve that using the "),_c('code',[_vm._v("md-chips")]),_vm._v(" component, with a static option:")]),_vm._v(" "),_c('code-example',{attrs:{"title":"Static","component":_vm.examples['static']}})],1),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('h2',[_vm._v("Custom Template")]),_vm._v(" "),_c('p',[_vm._v("Sometimes we need to show more information about a chip, so we want to have a custom HTML structure for the chip itself. To create that scenario we can use the template scope. In this case all you have to do is to create a slot with your custom template and you're good to go. Take a look at this example:")]),_vm._v(" "),_c('code-example',{attrs:{"title":"Scoped Slot","component":_vm.examples['chip-custom-template']}})],1),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('h2',[_vm._v("Duplicated Chip")]),_vm._v(" "),_c('p',[_vm._v("Chips would reject insertion if a chip is duplicated. You can customize feedback style of the duplicated chip:")]),_vm._v(" "),_c('code-example',{attrs:{"title":"Duplicated Feedback","component":_vm.examples['duplicated-feedback']}})],1),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('h2',[_vm._v("Formatter")]),_vm._v(" "),_c('p',[_vm._v("Sometimes you may need to format a chip value before adding it, and for this case you can use a custom formatter function. This function will receive the chip value and must return the formatted value.")]),_vm._v(" "),_c('code-example',{attrs:{"title":"Formatted chips","component":_vm.examples['format']}})],1),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('h2',[_vm._v("Hue Colors")]),_vm._v(" "),_c('p',[_vm._v("You can always use the hue modifiers in single chips:")]),_vm._v(" "),_c('code-example',{attrs:{"title":"Themed Chips","component":_vm.examples['themed']}}),_vm._v(" "),_c('api-item',{attrs:{"title":"API - md-chips"}},[_c('p',[_vm._v("All the following options can be applied to the md-chips component:")]),_vm._v(" "),_c('api-table',{attrs:{"slot":"props","headings":_vm.chips.props.headings,"props":_vm.chips.props.props},slot:"props"}),_vm._v(" "),_c('api-table',{attrs:{"slot":"events","headings":_vm.chips.events.headings,"props":_vm.chips.events.props},slot:"events"})],1)],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});