webpackJsonp([149],{

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/UiElements/Layout/examples/LayoutHorizontalAlignment.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(12/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/UiElements/Layout/examples/LayoutHorizontalAlignment.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('layout-horizontal-alignment', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['layout-horizontal-alignment'] = {
    name: 'layout-horizontal-alignment',
    source: "<template>\n  <div>\n    <div class=\"md-layout md-gutter\">\n      <div class=\"md-layout-item md-size-25\">\n        <md-field>\n          <label for=\"vertical\">Vertical</label>\n          <md-select id=\"vertical\" v-model=\"vertical\">\n            <md-option value=\"top\">Top</md-option>\n            <md-option value=\"center\">Center</md-option>\n            <md-option value=\"bottom\">Bottom</md-option>\n          </md-select>\n        </md-field>\n      </div>\n\n      <div class=\"md-layout-item md-size-25\">\n        <md-field>\n          <label for=\"horizontal\">Horizontal</label>\n          <md-select id=\"horizontal\" v-model=\"horizontal\">\n            <md-option value=\"left\">Left</md-option>\n            <md-option value=\"center\">Center</md-option>\n            <md-option value=\"right\">Right</md-option>\n            <md-option value=\"space-around\">Space Around</md-option>\n            <md-option value=\"space-between\">Space Between</md-option>\n          </md-select>\n        </md-field>\n      </div>\n    </div>\n\n    <div class=\"example\">\n      <div class=\"md-layout md-gutter\" :class=\"`md-alignment-${vertical}-${horizontal}`\">\n        <div class=\"md-layout-item md-size-25\">\n          <span>Lorem ipsum dolor sit amet.</span>\n        </div>\n\n        <div class=\"md-layout-item md-size-25\">\n          <span>Repellat praesentium quasi ipsa totam, delectus aperiam deleniti, voluptates inventore.</span>\n        </div>\n\n        <div class=\"md-layout-item md-size-25\">\n          <span>Excepturi natus dolorem maxime.</span>\n        </div>\n      </div>\n    </div>\n  </div>\n</template>\n\n<script>\n  export default {\n    name: 'LayoutHorizontalAlignment',\n    data: () => ({\n      horizontal: null,\n      vertical: null\n    })\n  }\n</script>\n\n<style lang=\"scss\" scoped>\n  @import \"~vue-material/components/MdAnimation/variables\";\n  @import \"~vue-material/theme/engine\";\n\n  .md-layout {\n    transition: .3s $md-transition-stand-timing;\n  }\n\n  .example .md-layout-item {\n    min-height: 40px;\n    transition: .3s $md-transition-stand-timing;\n\n    span {\n      width: 100%;\n      height: 100%;\n      padding: 8px;\n      display: block;\n      background: md-get-palette-color(blue, 200);\n    }\n  }\n</style>\n"
  };
};

/***/ }),

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/UiElements/Layout/examples/LayoutHorizontalColumns.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(11/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/UiElements/Layout/examples/LayoutHorizontalColumns.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('layout-horizontal-columns', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['layout-horizontal-columns'] = {
    name: 'layout-horizontal-columns',
    source: "<template>\n  <div class=\"md-layout\">\n    <div class=\"md-layout-item\"></div>\n    <div class=\"md-layout-item\"></div>\n    <div class=\"md-layout-item\"></div>\n  </div>\n</template>\n\n<script>\n  export default {\n    name: 'LayoutHorizontalColumns'\n  }\n</script>\n\n<style lang=\"scss\" scoped>\n  @import \"~vue-material/theme/engine\";\n\n  .md-layout-item {\n    height: 40px;\n\n    &:nth-child(1) {\n      background: md-get-palette-color(grey, 300);\n    }\n\n    &:nth-child(2) {\n      background: md-get-palette-color(grey, 400);\n    }\n\n    &:nth-child(3) {\n      background: md-get-palette-color(grey, 500);\n    }\n  }\n</style>\n"
  };
};

/***/ }),

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/UiElements/Layout/examples/LayoutHorizontalGutter.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(10/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/UiElements/Layout/examples/LayoutHorizontalGutter.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('layout-horizontal-gutter', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['layout-horizontal-gutter'] = {
    name: 'layout-horizontal-gutter',
    source: "<template>\n  <div class=\"md-layout md-gutter\">\n    <div class=\"md-layout-item\"></div>\n    <div class=\"md-layout-item\"></div>\n    <div class=\"md-layout-item\"></div>\n  </div>\n</template>\n\n<script>\n  export default {\n    name: 'LayoutHorizontalGutter'\n  }\n</script>\n\n<style lang=\"scss\" scoped>\n  @import \"~vue-material/theme/engine\";\n\n  .md-layout-item {\n    height: 40px;\n\n    &:after {\n      width: 100%;\n      height: 100%;\n      display: block;\n      background: md-get-palette-color(red, 200);\n      content: \" \";\n    }\n  }\n</style>\n"
  };
};

/***/ }),

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/UiElements/Layout/examples/LayoutHorizontalHide.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(9/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/UiElements/Layout/examples/LayoutHorizontalHide.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('layout-horizontal-hide', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['layout-horizontal-hide'] = {
    name: 'layout-horizontal-hide',
    source: "<template>\n  <div class=\"md-layout md-gutter md-alignment-center\">\n    <div class=\"md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100\">\n      <span>Always Show</span>\n    </div>\n\n    <div class=\"md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100\">\n      <span>Always Show</span>\n    </div>\n\n    <div class=\"md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100\">\n      <span>Always Show</span>\n    </div>\n\n    <div class=\"md-layout-item md-medium-size-50 md-small-size-50 md-xsmall-hide\">\n      <span>Hide Xsmall</span>\n    </div>\n\n    <div class=\"md-layout-item md-medium-size-50 md-small-hide\">\n      <span>Hide Small</span>\n    </div>\n\n    <div class=\"md-layout-item md-medium-hide\">\n      <span>Hide Medium</span>\n    </div>\n  </div>\n</template>\n\n<script>\n  export default {\n    name: 'LayoutHorizontalHide'\n  }\n</script>\n\n<style lang=\"scss\" scoped>\n  @import \"~vue-material/theme/engine\";\n\n  .md-layout-item {\n    height: 40px;\n    margin-top: 8px;\n    margin-bottom: 8px;\n\n    span {\n      width: 100%;\n      height: 100%;\n      padding: 8px;\n      display: block;\n      background: md-get-palette-color(teal, 200);\n    }\n  }\n</style>\n"
  };
};

/***/ }),

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/UiElements/Layout/examples/LayoutHorizontalNested.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(8/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/UiElements/Layout/examples/LayoutHorizontalNested.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('layout-horizontal-nested', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['layout-horizontal-nested'] = {
    name: 'layout-horizontal-nested',
    source: "<template>\n  <div>\n    <div class=\"md-layout md-gutter\">\n      <div class=\"md-layout-item md-layout md-gutter\">\n        <div class=\"md-layout-item\"></div>\n        <div class=\"md-layout-item\"></div>\n        <div class=\"md-layout-item\"></div>\n      </div>\n\n      <div class=\"md-layout-item md-layout md-gutter\">\n        <div class=\"md-layout-item\"></div>\n        <div class=\"md-layout-item\"></div>\n      </div>\n\n      <div class=\"md-layout-item md-layout md-gutter\">\n        <div class=\"md-layout-item\"></div>\n        <div class=\"md-layout-item\"></div>\n        <div class=\"md-layout-item\"></div>\n        <div class=\"md-layout-item\"></div>\n      </div>\n    </div>\n  </div>\n</template>\n\n<script>\n  export default {\n    name: 'LayoutHorizontalNested'\n  }\n</script>\n\n<style lang=\"scss\" scoped>\n  @import \"~vue-material/theme/engine\";\n\n  .md-layout-item {\n    height: 72px;\n\n    &:after {\n      width: 100%;\n      height: 100%;\n      display: block;\n      content: \" \";\n    }\n\n    &.md-layout {\n      &:after {\n        transform: translateY(-100%);\n        background: md-get-palette-color(yellow, 200);\n      }\n\n      .md-layout-item:after {\n        height: 40px;\n        margin-top: 16px;\n        position: relative;\n        z-index: 1;\n        background: md-get-palette-color(pink, 200);\n      }\n    }\n  }\n</style>\n"
  };
};

/***/ }),

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/UiElements/Layout/examples/LayoutHorizontalResponsive.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(7/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/UiElements/Layout/examples/LayoutHorizontalResponsive.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('layout-horizontal-responsive', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['layout-horizontal-responsive'] = {
    name: 'layout-horizontal-responsive',
    source: "<template>\n  <div class=\"md-layout md-gutter md-alignment-center\">\n    <div class=\"md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100\"></div>\n    <div class=\"md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100\"></div>\n    <div class=\"md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100\"></div>\n    <div class=\"md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100\"></div>\n    <div class=\"md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100\"></div>\n    <div class=\"md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100\"></div>\n  </div>\n</template>\n\n<script>\n  export default {\n    name: 'LayoutHorizontalResponsive'\n  }\n</script>\n\n<style lang=\"scss\" scoped>\n  @import \"~vue-material/components/MdAnimation/variables\";\n  @import \"~vue-material/theme/engine\";\n\n  .md-layout-item {\n    height: 40px;\n    margin-top: 8px;\n    margin-bottom: 8px;\n    transition: .3s $md-transition-stand-timing;\n\n    &:after {\n      width: 100%;\n      height: 100%;\n      display: block;\n      background: md-get-palette-color(purple, 200);\n      content: \" \";\n    }\n  }\n</style>\n"
  };
};

/***/ }),

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/UiElements/Layout/examples/LayoutHorizontalSizes.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(6/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/UiElements/Layout/examples/LayoutHorizontalSizes.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('layout-horizontal-sizes', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['layout-horizontal-sizes'] = {
    name: 'layout-horizontal-sizes',
    source: "<template>\n  <div class=\"md-layout md-gutter\">\n    <div class=\"md-layout-item md-size-15\"></div>\n    <div class=\"md-layout-item\"></div>\n    <div class=\"md-layout-item\"></div>\n    <div class=\"md-layout-item md-size-15\"></div>\n  </div>\n</template>\n\n<script>\n  export default {\n    name: 'LayoutHorizontalSizes'\n  }\n</script>\n\n<style lang=\"scss\" scoped>\n  @import \"~vue-material/theme/engine\";\n\n  .md-layout-item {\n    height: 40px;\n\n    &:after {\n      width: 100%;\n      height: 100%;\n      display: block;\n      background: md-get-palette-color(green, 200);\n      content: \" \";\n    }\n  }\n</style>\n"
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

/***/ "./docs/app/pages/UiElements/Layout/Layout.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Layout_vue__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?cacheDirectory=true!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./docs/app/pages/UiElements/Layout/Layout.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Layout_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Layout_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Layout_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, (function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Layout_vue__[key]; })) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_52ebdb6b_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Layout_vue__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-52ebdb6b\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./docs/app/pages/UiElements/Layout/Layout.vue");
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Layout_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_52ebdb6b_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Layout_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* customBlocks */
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/UiElements/Layout/examples/LayoutHorizontalColumns.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/UiElements/Layout/examples/LayoutHorizontalGutter.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/UiElements/Layout/examples/LayoutHorizontalSizes.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/UiElements/Layout/examples/LayoutHorizontalAlignment.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/UiElements/Layout/examples/LayoutHorizontalResponsive.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/UiElements/Layout/examples/LayoutHorizontalHide.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/UiElements/Layout/examples/LayoutHorizontalNested.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}


/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?cacheDirectory=true!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./docs/app/pages/UiElements/Layout/Layout.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _docsExample = __webpack_require__("./docs/app/mixins/docsExample.js");

var _docsExample2 = _interopRequireDefault(_docsExample);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'Layout',
  mixins: [_docsExample2.default],
  data: function data() {
    return {
      breakpoints: {
        props: {
          headings: ['Name', 'Size', 'Description'],
          props: [{
            name: 'xsmall',
            description: 'Applicable to screens that are maximum 599px wide. For small, medium and large handsets in portrait. Also applies to small tablets in portrait.',
            value: '<599px'
          }, {
            name: 'small',
            description: 'Applicable to screens that are between 600px and 959px wide. For medium and large handsets in landscape. For small and large tablets in portrait mode and for some desktop monitors.',
            value: '959px'
          }, {
            name: 'medium',
            description: 'Applicable to screens that are between 960px and 1279px wide. For small and large tablets in landscape and desktop monitors.',
            value: '1279px'
          }, {
            name: 'large',
            description: 'Applicable to screens that are between 1280px and 1919px wide. For large desktop monitors.',
            value: '1919px'
          }, {
            name: 'xlarge',
            description: 'Applicable to screens wider than 1920px. For huge desktop monitors or side-by-side screens.',
            value: '>1920px'
          }]
        }
      },
      gutter: {
        props: {
          headings: ['Screen Size', 'Amount'],
          props: [{
            name: 'xsmall',
            value: '8px'
          }, {
            name: 'small',
            value: '16px'
          }, {
            name: 'medium',
            value: '24px'
          }, {
            name: 'large',
            value: '48px'
          }]
        }
      },
      layout: {
        headings: ['Name', 'Description'],
        props: [{
          name: 'md-gutter',
          description: 'Enable the automatic gutter space between layout items.'
        }, {
          name: 'md-layout-nowrap',
          description: 'By default the layout items will always be wrapped under the parent layout. Use this class if you want to disable this behaviour, but the responsiveness will not work.'
        }, {
          name: 'md-alignment-<code>[x]</code>-<code>[y]</code>',
          description: 'Sets the alignment of all children based on a value per coordinate. The alignment only works if both x and y are present e.g. <code>md-alignment-top-center</code>. The possible values are: <br>\n            <ul>\n              <li>top</li>\n              <li>center</li>\n              <li>left</li>\n              <li>space-around</li>\n              <li>space-between</li>\n            </ul>\n          '
        }]
      },
      item: {
        headings: ['Name', 'Description'],
        props: [{
          name: 'md-size-<code>[amount]</code>',
          description: 'Sets a size to a particular item. The value can be multiples of 5, e.g. <code>md-size-25</code>. Also accepts 33, 66 and 100 for easy prototyping.'
        }, {
          name: 'md-<code>[breakpoint]</code>-size-<code>[amount]</code>\',\n          description: \'Sets a size to a particular item for a particular breakpoint. The breakpoints follow the <a href="https://material.io/guidelines/layout/responsive-ui.html#responsive-ui-breakpoints" target="_blank">Material Design guidelines</a> for layout. The possible values are:\n            <ul>\n              <li>xsmall</li>\n              <li>small</li>\n              <li>medium</li>\n              <li>large</li>\n              <li>xlarge</li>\n            </ul>\n          '
        }]
      },
      hide: {
        headings: ['Name', 'Description'],
        props: [{
          name: 'md-<code>[breakpoint]</code>-hide',
          description: 'Hides a particular element for a particular breakpoint. The breakpoints follow the <a href="https://material.io/guidelines/layout/responsive-ui.html#responsive-ui-breakpoints" target="_blank">Material Design guidelines</a> for layout. The possible values are:\n            <ul>\n              <li>xsmall</li>\n              <li>small</li>\n              <li>medium</li>\n              <li>large</li>\n              <li>xlarge</li>\n            </ul>\n          '
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

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-52ebdb6b\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./docs/app/pages/UiElements/Layout/Layout.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('page-container',{attrs:{"centered":"","title":_vm.$t('pages.layout.title')}},[_c('div',{staticClass:"page-container-section"},[_c('p',[_vm._v("Responsive layouts in material design adapt to any possible screen size. This UI guidance includes a flexible grid that ensures consistency across layouts, breakpoints that detail about how the contents reflow on different screens and a description of how an app can scale from small to extra-large screens.")]),_vm._v(" "),_c('p',[_vm._v("By default you can create gutter-free layouts or make the grid system itself calculate the best margin size for each of your possible screen sizes.")]),_vm._v(" "),_c('p',[_vm._v("The layout system use the concept of rows and columns. You can create custom sized columns or leave the system to make your layout fluid. You'll be able to set the size for each breakpoint, even on nested columns.")])]),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('h2',[_vm._v("Breakpoints")]),_vm._v(" "),_c('p',[_vm._v("Vue Material layout uses breakpoints for responsiveness:")]),_vm._v(" "),_c('api-table',{attrs:{"slot":"props","headings":_vm.breakpoints.props.headings,"props":_vm.breakpoints.props.props},slot:"props"})],1),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('h2',[_vm._v("Column Layout")]),_vm._v(" "),_c('p',[_vm._v("The layout system in Vue Material is essentially based on columns and makes use of the flexbox to be flexible enough and thereby gives you the best experience with a great and easy API.")]),_vm._v(" "),_c('p',[_vm._v("What you have to do to get started with layouts is to create a "),_c('code',[_vm._v("md-layout")]),_vm._v(" parent element, that will hold a list of "),_c('code',[_vm._v("md-layout-item")]),_vm._v(". You can set up as many columns as you want using "),_c('code',[_vm._v("md-layout-item")]),_vm._v(":")]),_vm._v(" "),_c('code-example',{attrs:{"title":"Columns","component":_vm.examples['layout-horizontal-columns']}})],1),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('p',[_vm._v("By default layout items do not have space between each other. Regular layouts would rather prefer to have spaces between the layout items, like a list of card, for example. You can set Vue Material to calculate automatically the space between elements and these spaces are based on the screen width, using the breakpoints:")]),_vm._v(" "),_c('api-table',{attrs:{"slot":"props","headings":_vm.gutter.props.headings,"props":_vm.gutter.props.props},slot:"props"}),_vm._v(" "),_c('p',[_vm._v("Look at this piece of code and resize your browser to see the changes:")]),_vm._v(" "),_c('code-example',{attrs:{"title":"Gutter","component":_vm.examples['layout-horizontal-gutter']}})],1),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('p',[_vm._v("Layout columns also work with nested layouts:")]),_vm._v(" "),_c('code-example',{attrs:{"title":"Nested columns","component":_vm.examples['layout-horizontal-nested']}})],1),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('p',[_vm._v("You can use layouts for almost anything in your app, even for small parts. To help you with that you can have different alignments for "),_c('code',[_vm._v("md-layout")]),_vm._v(" with various combinations of horizontal and vertical alignments to the "),_c('code',[_vm._v("md-alignment-[horizontal]-[vertical]")]),_vm._v(" class, e.g. "),_c('code',[_vm._v("md-alignment-top-center")]),_vm._v(". The alignment works on the parent element and it will change the position of all the child items:")]),_vm._v(" "),_c('code-example',{attrs:{"title":"Alignments","component":_vm.examples['layout-horizontal-alignment']}})],1),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('p',[_vm._v("In the previous examples the layout system did the calculation of the size of the child items based on the no. of items. But if you want to set size for each item, you can simply set the class, "),_c('code',[_vm._v("md-size-[amount]")]),_vm._v(", to the item that you want, e.g. "),_c('code',[_vm._v("md-size-30")]),_vm._v(". The size are always in % and the values can be multiple of 5 and also accepts the values 33 and 66.")]),_vm._v(" "),_c('p',[_vm._v("You don't even need to set the size for all elements, as the flexbox model will calculate the size for the remaining items. Cool, uh?")]),_vm._v(" "),_c('code-example',{attrs:{"title":"Size","component":_vm.examples['layout-horizontal-sizes']}})],1),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('p',[_vm._v("A layout system is not good enough if it is not responsive. In the last example you saw fluid layout sizes, but you can change them based on the breakpoint name, by just giving a different class for each breakpoint that you may want. The class is "),_c('code',[_vm._v("md-[breakpoint]-size-[amount]")]),_vm._v(" and works just like the last example. The layout engine of Vue Material will do the magic. Try to resize your browser:")]),_vm._v(" "),_c('code-example',{attrs:{"title":"Responsive","component":_vm.examples['layout-horizontal-responsive']}})],1),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('p',[_vm._v("Although this is not the best option, it is quite common to hide elements on smaller screen. You can do that using the "),_c('code',[_vm._v("md-[breakpoint]-hide")]),_vm._v(" classes:")]),_vm._v(" "),_c('code-example',{attrs:{"title":"Hide Elements","component":_vm.examples['layout-horizontal-hide']}})],1),_vm._v(" "),_c('api-item',{attrs:{"title":"API - md-layout"}},[_c('p',[_vm._v("The following classes can be applied to any HTML Element:")]),_vm._v(" "),_c('api-table',{attrs:{"slot":"classes","headings":_vm.layout.headings,"props":_vm.layout.props},slot:"classes"})],1),_vm._v(" "),_c('api-item',{attrs:{"title":"API - md-layout-item"}},[_c('p',[_vm._v("The following classes can be applied to any HTML Element that are direct children of "),_c('code',[_vm._v("md-layout")]),_vm._v(":")]),_vm._v(" "),_c('api-table',{attrs:{"slot":"classes","headings":_vm.item.headings,"props":_vm.item.props},slot:"classes"})],1),_vm._v(" "),_c('api-item',{attrs:{"title":"API - md-hide"}},[_c('p',[_vm._v("The following classes can be applied to any HTML Element:")]),_vm._v(" "),_c('api-table',{attrs:{"slot":"classes","headings":_vm.hide.headings,"props":_vm.hide.props},slot:"classes"})],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});