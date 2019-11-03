webpackJsonp([161],{

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/Menu/examples/AutoClose.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(49/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/Menu/examples/AutoClose.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('auto-close', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['auto-close'] = {
    name: 'auto-close',
    source: "<template>\n  <div>\n    <div>\n      <md-checkbox :value=\"true\" v-model=\"closeOnClick\">closeOnClick</md-checkbox>\n      <md-checkbox :value=\"true\" v-model=\"closeOnSelect\">closeOnSelect</md-checkbox>\n    </div>\n    <div>\n      <md-menu md-direction=\"bottom-end\" :mdCloseOnClick=\"closeOnClick\" :mdCloseOnSelect=\"closeOnSelect\">\n        <md-button md-menu-trigger>Bottom End</md-button>\n\n        <md-menu-content>\n          <md-menu-item disabled @click=\"data = 'click disabled'\">Disabled</md-menu-item>\n          <md-menu-item @click=\"data = 'click 1'\">Click Event 1</md-menu-item>\n          <md-menu-item @click=\"data = 'click 2'\">Click Event 2</md-menu-item>\n          <md-menu-item>Plain text</md-menu-item>\n        </md-menu-content>\n      </md-menu>\n    </div>\n    <div>{{data}}</div>\n  </div>\n</template>\n\n<script>\n  export default {\n    name: 'AutoClose',\n\n    data () {\n      return {\n        data: '',\n        closeOnClick: false,\n        closeOnSelect: true\n      }\n    }\n  }\n</script>\n\n<style lang=\"scss\" scoped>\n  .md-menu {\n    margin: 24px;\n  }\n</style>\n"
  };
};

/***/ }),

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/Menu/examples/Directions.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(48/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/Menu/examples/Directions.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('directions', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['directions'] = {
    name: 'directions',
    source: "<template>\n  <div>\n    <md-menu md-direction=\"bottom-start\">\n      <md-button md-menu-trigger>Bottom Start</md-button>\n\n      <md-menu-content>\n        <md-menu-item>My Item 1</md-menu-item>\n        <md-menu-item>My Item 2</md-menu-item>\n        <md-menu-item>My Item 3</md-menu-item>\n      </md-menu-content>\n    </md-menu>\n\n    <md-menu md-direction=\"bottom-end\">\n      <md-button md-menu-trigger>Bottom End</md-button>\n\n      <md-menu-content>\n        <md-menu-item>My Item 1</md-menu-item>\n        <md-menu-item>My Item 2</md-menu-item>\n        <md-menu-item>My Item 3</md-menu-item>\n      </md-menu-content>\n    </md-menu>\n\n    <md-menu md-direction=\"top-start\">\n      <md-button md-menu-trigger>Top Start</md-button>\n\n      <md-menu-content>\n        <md-menu-item>My Item 1</md-menu-item>\n        <md-menu-item>My Item 2</md-menu-item>\n        <md-menu-item>My Item 3</md-menu-item>\n      </md-menu-content>\n    </md-menu>\n\n    <md-menu md-direction=\"top-end\">\n      <md-button md-menu-trigger>Top End</md-button>\n\n      <md-menu-content>\n        <md-menu-item>My Item 1</md-menu-item>\n        <md-menu-item>My Item 2</md-menu-item>\n        <md-menu-item>My Item 3</md-menu-item>\n      </md-menu-content>\n    </md-menu>\n  </div>\n</template>\n\n<script>\n  export default {\n    name: 'Directions'\n  }\n</script>\n\n<style lang=\"scss\" scoped>\n  .md-menu {\n    margin: 24px;\n  }\n</style>\n"
  };
};

/***/ }),

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/Menu/examples/MenuAlignments.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(47/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/Menu/examples/MenuAlignments.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('menu-alignments', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['menu-alignments'] = {
    name: 'menu-alignments',
    source: "<template>\n  <div>\n    <md-menu>\n      <md-button md-menu-trigger>Default</md-button>\n\n      <md-menu-content>\n        <md-menu-item>My Item 1</md-menu-item>\n        <md-menu-item>My Item 2</md-menu-item>\n        <md-menu-item>My Item 3</md-menu-item>\n      </md-menu-content>\n    </md-menu>\n\n    <md-menu md-size=\"medium\" md-align-trigger>\n      <md-button md-menu-trigger>Align with trigger</md-button>\n\n      <md-menu-content>\n        <md-menu-item>My Item 1</md-menu-item>\n        <md-menu-item>My Item 2</md-menu-item>\n        <md-menu-item>My Item 3</md-menu-item>\n      </md-menu-content>\n    </md-menu>\n\n    <md-menu md-size=\"medium\" :md-offset-x=\"127\" :md-offset-y=\"-36\">\n      <md-button md-menu-trigger>Custom Offset</md-button>\n\n      <md-menu-content>\n        <md-menu-item>My Item 1</md-menu-item>\n        <md-menu-item>My Item 2</md-menu-item>\n        <md-menu-item>My Item 3</md-menu-item>\n      </md-menu-content>\n    </md-menu>\n  </div>\n</template>\n\n<script>\n  export default {\n    name: 'MenuAlignments'\n  }\n</script>\n\n<style lang=\"scss\" scoped>\n  .md-menu {\n    margin: 24px;\n  }\n</style>\n"
  };
};

/***/ }),

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/Menu/examples/MultipleContent.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(46/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/Menu/examples/MultipleContent.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('multiple-content', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['multiple-content'] = {
    name: 'multiple-content',
    source: "<template>\n  <div>\n    <md-menu md-size=\"big\" md-direction=\"top-start\" :md-active.sync=\"toggleCard\">\n      <md-button class=\"md-icon-button\" md-menu-trigger>\n        <md-icon>contacts</md-icon>\n      </md-button>\n\n      <md-menu-content>\n        <div class=\"author-card\">\n          <md-avatar class=\"md-large\">\n            <img src=\"/assets/examples/avatar.jpg\" alt=\"Marcos Moura\">\n          </md-avatar>\n\n          <div class=\"author-card-info\">\n            <span>Marcos Moura</span>\n            <div class=\"author-card-links\">\n              <a href=\"https://linkedin.com/in/marcosvmmoura\" target=\"_blank\" rel=\"noopener\">Linkedin</a>\n              <a href=\"https://github.com/marcosmoura\" target=\"_blank\" rel=\"noopener\">GitHub</a>\n            </div>\n          </div>\n        </div>\n      </md-menu-content>\n    </md-menu>\n\n    <md-menu>\n      <md-button class=\"md-icon-button\" md-menu-trigger>\n        <md-icon>phone</md-icon>\n      </md-button>\n\n      <md-menu-content>\n        <md-menu-item>\n          <md-icon>phone</md-icon>\n          <span>My Item 1</span>\n        </md-menu-item>\n\n        <md-menu-item>\n          <md-icon>phone</md-icon>\n          <span>My Item 2</span>\n        </md-menu-item>\n\n        <md-menu-item>\n          <md-icon>phone</md-icon>\n          <span>My Item 3</span>\n        </md-menu-item>\n      </md-menu-content>\n    </md-menu>\n\n    <md-menu md-size=\"big\" md-direction=\"bottom-end\">\n      <md-button class=\"md-icon-button\" md-menu-trigger>\n        <md-icon>near_me</md-icon>\n      </md-button>\n\n      <md-menu-content>\n        <md-menu-item>\n          <span>Find on map</span>\n          <md-icon>near_me</md-icon>\n        </md-menu-item>\n\n        <md-menu-item>\n          <span>Call</span>\n          <md-icon>phone</md-icon>\n        </md-menu-item>\n      </md-menu-content>\n    </md-menu>\n\n    <md-button class=\"md-primary md-raised toggle\" @click=\"toggle\">Toggle Contact</md-button>\n  </div>\n</template>\n\n<script>\n  export default {\n    name: 'MultipleContent',\n    data: () => ({\n      toggleCard: false\n    }),\n    methods: {\n      toggle () {\n        this.toggleCard = !this.toggleCard\n      }\n    }\n  }\n</script>\n\n<style lang=\"scss\" scoped>\n  .md-menu,\n  .toggle {\n    margin: 24px;\n  }\n\n  .author-card {\n    padding: 8px 16px;\n    display: flex;\n    align-items: center;\n\n    .md-avatar {\n      margin-right: 16px;\n    }\n\n    .author-card-info {\n      display: flex;\n      flex-flow: column;\n      flex: 1;\n    }\n\n    span {\n      font-size: 16px;\n    }\n\n    .author-card-links {\n      display: flex;\n\n      a + a {\n        margin-left: 8px;\n      }\n    }\n  }\n</style>\n\n"
  };
};

/***/ }),

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/Menu/examples/Sizes.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(45/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/Menu/examples/Sizes.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('sizes', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['sizes'] = {
    name: 'sizes',
    source: "<template>\n  <div>\n    <md-menu md-size=\"small\">\n      <md-button md-menu-trigger>Small</md-button>\n\n      <md-menu-content>\n        <md-menu-item>My Item 1</md-menu-item>\n        <md-menu-item>My Item 2</md-menu-item>\n        <md-menu-item>My Item 3</md-menu-item>\n      </md-menu-content>\n    </md-menu>\n\n    <md-menu md-size=\"medium\">\n      <md-button md-menu-trigger>Medium</md-button>\n\n      <md-menu-content>\n        <md-menu-item>My Item 1</md-menu-item>\n        <md-menu-item>My Item 2</md-menu-item>\n        <md-menu-item>My Item 3</md-menu-item>\n      </md-menu-content>\n    </md-menu>\n\n    <md-menu md-size=\"big\">\n      <md-button md-menu-trigger>Big</md-button>\n\n      <md-menu-content>\n        <md-menu-item>My Item 1</md-menu-item>\n        <md-menu-item>My Item 2</md-menu-item>\n        <md-menu-item>My Item 3</md-menu-item>\n      </md-menu-content>\n    </md-menu>\n\n    <md-menu md-size=\"huge\">\n      <md-button md-menu-trigger>Huge</md-button>\n\n      <md-menu-content>\n        <md-menu-item>My Item 1</md-menu-item>\n        <md-menu-item>My Item 2</md-menu-item>\n        <md-menu-item>My Item 3</md-menu-item>\n      </md-menu-content>\n    </md-menu>\n\n    <md-menu md-size=\"auto\">\n      <md-button md-menu-trigger>Auto</md-button>\n\n      <md-menu-content>\n        <md-menu-item>My Item 1</md-menu-item>\n        <md-menu-item>This content is long enough</md-menu-item>\n        <md-menu-item>My Item 3</md-menu-item>\n      </md-menu-content>\n    </md-menu>\n  </div>\n</template>\n\n<script>\n  export default {\n    name: 'Sizes'\n  }\n</script>\n\n<style lang=\"scss\" scoped>\n  .md-menu {\n    margin: 24px;\n  }\n</style>\n\n"
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

/***/ "./docs/app/pages/Components/Menu/Menu.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Menu_vue__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?cacheDirectory=true!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./docs/app/pages/Components/Menu/Menu.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Menu_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Menu_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Menu_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, (function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Menu_vue__[key]; })) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5362532d_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Menu_vue__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-5362532d\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./docs/app/pages/Components/Menu/Menu.vue");
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Menu_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5362532d_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Menu_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* customBlocks */
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/Menu/examples/Directions.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/Menu/examples/Sizes.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/Menu/examples/MenuAlignments.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/Menu/examples/AutoClose.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/Menu/examples/MultipleContent.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}


/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?cacheDirectory=true!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./docs/app/pages/Components/Menu/Menu.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _docsExample = __webpack_require__("./docs/app/mixins/docsExample.js");

var _docsExample2 = _interopRequireDefault(_docsExample);

var _MdInteractionEvents = __webpack_require__("./src/core/utils/MdInteractionEvents.js");

var _MdInteractionEvents2 = _interopRequireDefault(_MdInteractionEvents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

function getEventNames() {
  return _MdInteractionEvents2.default.map((function (event) {
    return '<li>' + event + '</li>';
  })).join('');
}

exports.default = {
  name: 'DocMenu',
  mixins: [_docsExample2.default],
  data: function data() {
    return {
      props: {
        headings: ['Name', 'Description', 'Default'],
        props: [{
          name: 'md-active',
          type: 'Boolean',
          description: 'Used to show/hide a menu programatically.',
          defaults: 'false'
        }, {
          name: 'md-close-on-click',
          type: 'Boolean',
          description: 'When this options is true, the menu will be closed after any click event.',
          defaults: 'false'
        }, {
          name: 'md-close-on-select',
          type: 'Boolean',
          description: '\n            When this options is true, the menu will close after a click on a <code>md-menu-item</code>. This will only work if the menu have one of the events below: <br>\n            <ul>' + getEventNames() + '</ul>',
          defaults: 'true'
        }, {
          name: 'md-direction',
          type: 'String',
          description: 'Set the direction of a menu. See below the detailed description of each direction.',
          defaults: 'bottom-start'
        }, {
          offset: true,
          name: 'md-direction="bottom-start"',
          type: 'String',
          description: 'Aligns the menu on the bottom left of the trigger',
          defaults: '-'
        }, {
          offset: true,
          name: 'md-direction="bottom-end"',
          type: 'String',
          description: 'Aligns the menu on the bottom right of the trigger',
          defaults: '-'
        }, {
          offset: true,
          name: 'md-direction="top-start"',
          type: 'String',
          description: 'Aligns the menu on the top left of the trigger',
          defaults: '-'
        }, {
          offset: true,
          name: 'md-direction="top-end"',
          type: 'String',
          description: 'Aligns the menu on the top right of the trigger',
          defaults: '-'
        }, {
          name: 'md-align-trigger',
          type: 'Boolean',
          description: 'Aligns the content above the trigger. Also works in combination with <code>md-direction</code> values',
          defaults: 'false'
        }, {
          name: 'md-offset-x',
          type: 'Number',
          description: 'Sets a custom offset in X axis',
          defaults: '0'
        }, {
          name: 'md-offset-y',
          type: 'Number',
          description: 'Sets a custom offset in Y axis',
          defaults: '0'
        }, {
          name: 'md-size',
          type: 'String',
          description: 'Sets the size of a menu. See below the detailed description of each size.',
          defaults: 'small'
        }, {
          offset: true,
          name: 'md-size="small"',
          type: 'String',
          description: 'Sets a menu with a small size (112px)',
          defaults: '-'
        }, {
          offset: true,
          name: 'md-size="medium"',
          type: 'String',
          description: 'Sets a menu with a medium size (168px)',
          defaults: '-'
        }, {
          offset: true,
          name: 'md-size="big"',
          type: 'String',
          description: 'Sets a menu with a big size (224px)',
          defaults: '-'
        }, {
          offset: true,
          name: 'md-size="huge"',
          type: 'String',
          description: 'Sets a menu with a huge size (280px)',
          defaults: '-'
        }, {
          offset: true,
          name: 'md-size="auto"',
          type: 'String',
          description: 'Sets a menu with a auto size',
          defaults: '-'
        }]
      },
      events: {
        headings: ['Name', 'Description', 'Value'],
        props: [{
          name: 'md-opened',
          description: 'Triggered when menu opens',
          value: 'null'
        }, {
          name: 'md-closed',
          description: 'Triggered when menu closes',
          value: 'null'
        }]
      }
    };
  }
};

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-5362532d\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./docs/app/pages/Components/Menu/Menu.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('page-container',{attrs:{"centered":"","title":_vm.$t('pages.menu.title')}},[_c('div',{staticClass:"page-container-section"},[_c('p',[_vm._v("Menus appear upon interaction with a button, action, or other control. They usually display a list of choices, with one choice per line, but can also show a rich content.")]),_vm._v(" "),_c('p',[_vm._v("The "),_c('code',[_vm._v("md-menu")]),_vm._v(" component consists of a parent "),_c('code',[_vm._v("md-menu")]),_vm._v(", a trigger "),_c('code',[_vm._v("md-menu-trigger")]),_vm._v(", a content holder "),_c('code',[_vm._v("md-menu-content")]),_vm._v(" and optional items "),_c('code',[_vm._v("md-menu-item")]),_vm._v(".")])]),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('h2',[_vm._v("Directions")]),_vm._v(" "),_c('p',[_vm._v("The position of the menu content is calculated based on the contraints of the trigger element. Based on this you can set a position using X and Y axis.")]),_vm._v(" "),_c('p',[_vm._v("You can combine "),_c('code',[_vm._v("top")]),_vm._v("/"),_c('code',[_vm._v("bottom")]),_vm._v(" with "),_c('code',[_vm._v("start")]),_vm._v("/"),_c('code',[_vm._v("end")]),_vm._v(":")]),_vm._v(" "),_c('code-example',{attrs:{"title":"Start and End","component":_vm.examples['directions']}})],1),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('h2',[_vm._v("Alignments")]),_vm._v(" "),_c('p',[_vm._v("Sometimes the default position is not what we want. Maybe we need to show a menu in another location, and to achieve that you can use trigger alignment or custom offsets:")]),_vm._v(" "),_c('code-example',{attrs:{"title":"Trigger alignment and Offsets","component":_vm.examples['menu-alignments']}})],1),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('h2',[_vm._v("Sizes")]),_vm._v(" "),_c('p',[_c('code',[_vm._v("md-menu")]),_vm._v(" has 4 different sizes and an auto mode:")]),_vm._v(" "),_c('code-example',{attrs:{"title":"5 possible sizes","component":_vm.examples['sizes']}}),_vm._v(" "),_c('note-block',[_vm._v("The max-width of a menu is 280px.")])],1),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('h2',[_vm._v("AutoClose")]),_vm._v(" "),_c('p',[_c('code',[_vm._v("md-menu")]),_vm._v(" can be auto closed on click or select:")]),_vm._v(" "),_c('code-example',{attrs:{"title":"Auto close menu on events","component":_vm.examples['auto-close']}})],1),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('h2',[_vm._v("Rich Content and Icon Alignment")]),_vm._v(" "),_c('p',[_vm._v("Sometimes you may need to toggle your menu dynamically. You can also show arbitrary content inside a "),_c('code',[_vm._v("md-menu-content")]),_vm._v(", like this card example:")]),_vm._v(" "),_c('code-example',{attrs:{"title":"Open a menu programatically","component":_vm.examples['multiple-content']}}),_vm._v(" "),_c('note-block',{attrs:{"tip":""}},[_vm._v("A "),_c('code',[_vm._v("md-menu")]),_vm._v(" with items that have icons aligns perfectly with "),_c('code',[_vm._v("md-icon-button")]),_vm._v(".")]),_vm._v(" "),_c('api-item',{attrs:{"title":"API - md-menu"}},[_c('p',[_vm._v("The following options can be used with any menu:")]),_vm._v(" "),_c('api-table',{attrs:{"slot":"props","headings":_vm.props.headings,"props":_vm.props.props},slot:"props"}),_vm._v(" "),_c('api-table',{attrs:{"slot":"events","headings":_vm.events.headings,"props":_vm.events.props},slot:"events"}),_vm._v(" "),_c('note-block',{attrs:{"tip":""}},[_vm._v("All "),_c('a',{attrs:{"href":"https://router.vuejs.org/en/api/router-link.html","target":"_blank"}},[_vm._v("options")]),_vm._v(" of "),_c('code',[_vm._v("router-link")]),_vm._v(" can be simply used here.")])],1)],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});