webpackJsonp([180],{

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/UiElements/Typography/examples/TypographyExample.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(4/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/UiElements/Typography/examples/TypographyExample.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('typography-example', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['typography-example'] = {
    name: 'typography-example',
    source: "<template>\n  <div>\n    <span class=\"md-display-4\">Display 4</span>\n    <span class=\"md-display-3\">Display 3</span>\n    <span class=\"md-display-2\">Display 2</span>\n    <span class=\"md-display-1\">Display 1</span>\n    <span class=\"md-headline\">Headline</span>\n    <span class=\"md-title\">Title</span>\n    <span class=\"md-subheading\">Subheading</span>\n    <span class=\"md-body-2\">Body 2</span>\n    <span class=\"md-body-1\">Body 1</span>\n    <span class=\"md-caption\">Caption</span>\n    <router-link to=\"/ui-elements/typography\">Links</router-link>\n    <md-button>Buttons</md-button>\n  </div>\n</template>\n\n<script>\n  export default {\n    name: 'TypographyExample'\n  }\n</script>\n\n<style lang=\"scss\" scoped>\n  div > * {\n    margin: .5em 0;\n    display: block;\n  }\n</style>\n"
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

/***/ "./docs/app/pages/UiElements/Typography/Typography.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Typography_vue__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?cacheDirectory=true!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./docs/app/pages/UiElements/Typography/Typography.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Typography_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Typography_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Typography_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, (function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Typography_vue__[key]; })) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5e42a182_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Typography_vue__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-5e42a182\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./docs/app/pages/UiElements/Typography/Typography.vue");
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Typography_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5e42a182_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Typography_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* customBlocks */
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/UiElements/Typography/examples/TypographyExample.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}


/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?cacheDirectory=true!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./docs/app/pages/UiElements/Typography/Typography.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _docsExample = __webpack_require__("./docs/app/mixins/docsExample.js");

var _docsExample2 = _interopRequireDefault(_docsExample);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'Typography',
  mixins: [_docsExample2.default],
  data: function data() {
    return {
      classes: {
        headings: ['Name', 'Description'],
        props: [{
          name: 'md-display-4',
          description: 'Create the biggest display text'
        }, {
          name: 'md-display-3',
          description: 'Create the second biggest display text'
        }, {
          name: 'md-display-2',
          description: 'Create the third biggest display text'
        }, {
          name: 'md-display-1',
          description: 'Create the forth biggest display text'
        }, {
          name: 'md-headline',
          description: 'Create a headline text, that is bigger than a title'
        }, {
          name: 'md-title',
          description: 'Create the regular title. Commonly used inside toolbars'
        }, {
          name: 'md-subheading',
          description: 'Create a subtitle like element'
        }, {
          name: 'md-body-2',
          description: 'Create a medium weight variation of body text'
        }, {
          name: 'md-body-1',
          description: 'Create a regular text. This has the same effect as the body text'
        }, {
          name: 'md-caption',
          description: 'Create a caption text. This has the same effect as the <small> tag'
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

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-5e42a182\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./docs/app/pages/UiElements/Typography/Typography.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('page-container',{attrs:{"centered":"","title":_vm.$t('pages.typography.title')}},[_c('div',{staticClass:"page-container-section"},[_c('h2',[_vm._v("Typeface")]),_vm._v(" "),_c('p',[_vm._v("Roboto has been refined extensively to work across the wider set of supported platforms. It is slightly wider and rounder, giving it greater clarity and making it more optimistic. Vue Material use Roboto by default, with Noto Sans as a fallback. To get up and running with Roboto font, just install it from "),_c('a',{attrs:{"href":"https://fonts.google.com/specimen/Roboto","target":"_blank"}},[_vm._v("Google Fonts")]),_vm._v(". Or install it from the following snippet:")]),_vm._v(" "),_c('code-example',{attrs:{"title":"Roboto Font","label":"HTML","lang":"xml"}},[_vm._v("\n      <link rel=\"stylesheet\" href=\"//fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic\">\n    ")])],1),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('h2',[_vm._v("Styles")]),_vm._v(" "),_c('p',[_vm._v("Too many type sizes and styles at once can wreck any layout. A typographic scale has a limited set of type sizes that work well together along with the layout grid.")]),_vm._v(" "),_c('p',[_vm._v("The "),_c('a',{attrs:{"href":"https://material.io/guidelines/style/typography.html#typography-styles","target":"_blank"}},[_vm._v("sizes and styles")]),_vm._v(" balance content density and reading comfort under typical usage conditions. They are all based on simple classes that gives the styles and works fine with dark themes. Look:")]),_vm._v(" "),_c('note-block',[_vm._v("The "),_c('code',[_vm._v("a")]),_vm._v(" tag create a link style and is the only that is affected globally. It will be automatically themed using the accent color.")])],1),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('code-example',{attrs:{"title":"Typography","component":_vm.examples['typography-example']}}),_vm._v(" "),_c('api-item',{attrs:{"title":"API"}},[_c('p',[_vm._v("The following classes can be applied to any HTML element:")]),_vm._v(" "),_c('api-table',{attrs:{"slot":"classes","headings":_vm.classes.headings,"props":_vm.classes.props},slot:"classes"})],1)],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});