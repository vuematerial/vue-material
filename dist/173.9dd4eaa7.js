webpackJsonp([173],{

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/Icon/examples/FontAwesome.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(125/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/Icon/examples/FontAwesome.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('font-awesome', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['font-awesome'] = {
    name: 'font-awesome',
    source: "<template>\n  <div>\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n\n    <div>\n      <md-icon class=\"fa fa-bars\"></md-icon>\n      <md-icon class=\"fa fa-plus\"></md-icon>\n      <md-icon class=\"fa fa-thumbs-up\"></md-icon>\n      <md-icon class=\"fa fa-shield\"></md-icon>\n      <md-icon class=\"fa fa-home\"></md-icon>\n    </div>\n\n    <div>\n      <md-icon class=\"fa fa-bars\"></md-icon>\n      <md-icon class=\"md-size-2x fa fa-plus\"></md-icon>\n      <md-icon class=\"md-size-3x fa fa-thumbs-up\"></md-icon>\n      <md-icon class=\"md-size-4x fa fa-shield\"></md-icon>\n      <md-icon class=\"md-size-5x fa fa-home\"></md-icon>\n    </div>\n  </div>\n</template>\n\n<script>\nexport default {\n  name: 'FontAwesome'\n}\n</script>\n"
  };
};

/***/ }),

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/Icon/examples/MaterialIcons.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(124/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/Icon/examples/MaterialIcons.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('material-icons', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['material-icons'] = {
    name: 'material-icons',
    source: "<template>\n  <div>\n    <div>\n      <md-icon>menu</md-icon>\n      <md-icon>add</md-icon>\n      <md-icon>thumb_up</md-icon>\n      <md-icon>verified_user</md-icon>\n      <md-icon>home</md-icon>\n    </div>\n\n    <div>\n      <md-icon>menu</md-icon>\n      <md-icon class=\"md-size-2x\">add</md-icon>\n      <md-icon class=\"md-size-3x\">thumb_up</md-icon>\n      <md-icon class=\"md-size-4x\">verified_user</md-icon>\n      <md-icon class=\"md-size-5x\">home</md-icon>\n    </div>\n  </div>\n</template>\n\n<script>\nexport default {\n  name: 'MaterialIcons'\n}\n</script>\n"
  };
};

/***/ }),

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/Icon/examples/SvgAssets.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(123/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/Icon/examples/SvgAssets.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('svg-assets', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['svg-assets'] = {
    name: 'svg-assets',
    source: "<template>\n  <div>\n    <div>\n      <md-icon md-src=\"/assets/icon-add.svg\" />\n      <md-icon md-src=\"/assets/icon-home.svg\" />\n      <md-icon md-src=\"/assets/icon-menu.svg\" />\n      <md-icon md-src=\"/assets/icon-thumbs-up.svg\" />\n      <md-icon md-src=\"/assets/icon-verified.svg\" />\n    </div>\n\n    <div>\n      <md-icon md-src=\"/assets/icon-add.svg\" />\n      <md-icon class=\"md-size-2x\" md-src=\"/assets/icon-home.svg\" />\n      <md-icon class=\"md-size-3x\" md-src=\"/assets/icon-menu.svg\" />\n      <md-icon class=\"md-size-4x\" md-src=\"/assets/icon-thumbs-up.svg\" />\n      <md-icon class=\"md-size-5x\" md-src=\"/assets/icon-verified.svg\" />\n    </div>\n  </div>\n</template>\n\n<script>\nexport default {\n  name: 'SvgAssets'\n}\n</script>\n"
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

/***/ "./docs/app/pages/Components/Icon/Icon.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Icon_vue__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?cacheDirectory=true!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./docs/app/pages/Components/Icon/Icon.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Icon_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Icon_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Icon_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, (function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Icon_vue__[key]; })) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_45501fef_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Icon_vue__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-45501fef\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./docs/app/pages/Components/Icon/Icon.vue");
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Icon_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_45501fef_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Icon_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* customBlocks */
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/Icon/examples/MaterialIcons.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/Icon/examples/FontAwesome.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/Icon/examples/SvgAssets.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}


/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?cacheDirectory=true!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./docs/app/pages/Components/Icon/Icon.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _docsExample = __webpack_require__("./docs/app/mixins/docsExample.js");

var _docsExample2 = _interopRequireDefault(_docsExample);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'DocIcon',
  mixins: [_docsExample2.default],
  data: function data() {
    return {
      api: {
        material: {
          classes: {
            headings: ['Name', 'Description', 'Example'],
            props: [{
              name: 'md-size-[dimension]',
              description: 'Increases the size of the icon. It accepts 2x, 3x, 4x or 5x',
              example: 'md-size-3x'
            }]
          },
          events: {
            headings: ['Name', 'Description', 'Value'],
            props: [{
              name: 'md-loaded',
              description: 'Triggered right after fetch of the SVG icon',
              example: 'null'
            }]
          }
        },
        svg: {
          props: {
            headings: ['Name', 'Description', 'Default'],
            props: [{
              name: 'md-src',
              description: 'The source of the svg icon. Note that for icons on external domais, cors may affect it\'s functionality.',
              defaults: 'null'
            }]
          }
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

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-45501fef\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./docs/app/pages/Components/Icon/Icon.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('page-container',{attrs:{"centered":"","title":_vm.$t('pages.icon.title')}},[_c('div',{staticClass:"page-container-section"},[_c('p',[_vm._v("Material icons uses geometric shapes to visually represent core ideas, capabilities, or topics. They are generally used along with the "),_c('a',{attrs:{"href":"https://material.io/icons/","target":"_blank"}},[_vm._v("Material icons")]),_vm._v(", but not restricted to. Icons can use icon fonts or external SVGs. Also, can accept some size dimensions, like "),_c('strong',[_vm._v("2x")]),_vm._v(", "),_c('strong',[_vm._v("3x")]),_vm._v(", "),_c('strong',[_vm._v("4x")]),_vm._v(" and "),_c('strong',[_vm._v("5x")]),_vm._v(".")])]),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('h2',[_vm._v("Material Icon Font")]),_vm._v(" "),_c('p',[_vm._v("By default the "),_c('code',[_vm._v("md-icon")]),_vm._v(" will assume that you are using the Material Icons Font. You have to pass the name of the icon with underscore instead of spaces. For example: "),_c('code',[_vm._v("<md-icon>thumb_up</md-icon>")]),_vm._v(".")]),_vm._v(" "),_c('code-example',{attrs:{"title":"Material Icons","component":_vm.examples['material-icons']}}),_vm._v(" "),_c('api-item',{attrs:{"title":"API - md-icon"}},[_c('p',[_vm._v("The following options can be applied to all icons:")]),_vm._v(" "),_c('api-table',{attrs:{"slot":"classes","headings":_vm.api.material.classes.headings,"props":_vm.api.material.classes.props},slot:"classes"}),_vm._v(" "),_c('api-table',{attrs:{"slot":"events","headings":_vm.api.material.events.headings,"props":_vm.api.material.events.props},slot:"events"})],1)],1),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('h2',[_vm._v("Custom Fonts")]),_vm._v(" "),_c('p',[_vm._v("Alternatevely you can load any custom fonts to be used with "),_c('code',[_vm._v("md-icon")]),_vm._v(", like "),_c('a',{attrs:{"href":"http://fontawesome.io/","target":"_blank"}},[_vm._v("Font Awesome")]),_vm._v(" for example. Just use the Font Awesome (or any other) classes.")]),_vm._v(" "),_c('code-example',{attrs:{"title":"Font Awesome","component":_vm.examples['font-awesome']}})],1),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('h2',[_vm._v("SVG Source")]),_vm._v(" "),_c('p',[_vm._v("When loading an icon font, you will be able to use ALL of it's icons. This may hurt the performance of your application. Instead, you can use only the icons that you really need, loading them using svg.")]),_vm._v(" "),_c('code-example',{attrs:{"title":"SVG Assets","component":_vm.examples['svg-assets']}}),_vm._v(" "),_c('api-item',{attrs:{"title":"API"}},[_c('p',[_vm._v("The following option is specifically for svg icons:")]),_vm._v(" "),_c('api-table',{attrs:{"slot":"props","headings":_vm.api.svg.props.headings,"props":_vm.api.svg.props.props},slot:"props"})],1)],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});