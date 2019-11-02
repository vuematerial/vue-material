webpackJsonp([171],{

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/Toolbar/examples/ContentActions.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(19/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/Toolbar/examples/ContentActions.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('content-actions', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['content-actions'] = {
    name: 'content-actions',
    source: "<template>\n  <div>\n    <md-toolbar>\n      <h3 class=\"md-title\" style=\"flex: 1\">Title</h3>\n      <md-button class=\"md-icon-button\">\n        <md-icon>more_vert</md-icon>\n      </md-button>\n    </md-toolbar>\n\n    <md-toolbar class=\"md-accent\" md-elevation=\"1\">\n      <h3 class=\"md-title\" style=\"flex: 1\">Title</h3>\n      <md-button>Refresh</md-button>\n      <md-button class=\"md-primary\">Create</md-button>\n    </md-toolbar>\n\n    <md-toolbar class=\"md-large md-primary\">\n      <div class=\"md-toolbar-row\">\n        <div class=\"md-toolbar-section-start\">\n          <md-button class=\"md-icon-button\">\n            <md-icon>menu</md-icon>\n          </md-button>\n        </div>\n\n        <div class=\"md-toolbar-section-end\">\n          <md-button class=\"md-icon-button\">\n            <md-icon>refresh</md-icon>\n          </md-button>\n\n          <md-button class=\"md-icon-button\">\n            <md-icon>more_vert</md-icon>\n          </md-button>\n        </div>\n      </div>\n\n      <div class=\"md-toolbar-row md-toolbar-offset\">\n        <h3 class=\"md-title\">Title on a second row</h3>\n      </div>\n    </md-toolbar>\n  </div>\n</template>\n\n<style lang=\"scss\" scoped>\n  .md-toolbar + .md-toolbar {\n    margin-top: 16px;\n  }\n</style>\n\n<script>\nexport default {\n  name: 'ContentActions'\n}\n</script>\n"
  };
};

/***/ }),

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/Toolbar/examples/RegularToolbar.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(18/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/Toolbar/examples/RegularToolbar.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('regular-toolbar', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['regular-toolbar'] = {
    name: 'regular-toolbar',
    source: "<template>\n  <div>\n    <md-toolbar>\n      <h3 class=\"md-title\">Default</h3>\n    </md-toolbar>\n\n    <md-toolbar md-elevation=\"0\">\n      <h3 class=\"md-title\">No Elevation</h3>\n    </md-toolbar>\n\n    <md-toolbar class=\"md-transparent\">\n      <h3 class=\"md-title\">Transparent</h3>\n    </md-toolbar>\n\n    <md-toolbar class=\"md-primary\">\n      <h3 class=\"md-title\">Primary</h3>\n    </md-toolbar>\n\n    <md-toolbar class=\"md-accent\">\n      <h3 class=\"md-title\">Accent</h3>\n    </md-toolbar>\n  </div>\n</template>\n\n<style lang=\"scss\" scoped>\n  .md-toolbar + .md-toolbar {\n    margin-top: 16px;\n  }\n</style>\n\n<script>\nexport default {\n  name: 'RegularToolbar'\n}\n</script>\n"
  };
};

/***/ }),

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/Toolbar/examples/ToolbarSizes.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(17/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/Toolbar/examples/ToolbarSizes.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('toolbar-sizes', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['toolbar-sizes'] = {
    name: 'toolbar-sizes',
    source: "<template>\n  <div>\n    <md-toolbar class=\"md-dense\">\n      <h3 class=\"md-title\">Dense</h3>\n    </md-toolbar>\n\n    <md-toolbar class=\"md-medium\">\n      <div class=\"md-toolbar-row\">\n        <h3 class=\"md-title\">Medium</h3>\n      </div>\n    </md-toolbar>\n\n    <md-toolbar class=\"md-large\">\n      <div class=\"md-toolbar-row\">\n        <h3 class=\"md-title\">Large</h3>\n      </div>\n    </md-toolbar>\n\n    <md-toolbar class=\"md-large md-dense\">\n      <div class=\"md-toolbar-row\">\n        <h3 class=\"md-title\">Large Dense</h3>\n      </div>\n    </md-toolbar>\n  </div>\n</template>\n\n<style lang=\"scss\" scoped>\n  .md-toolbar + .md-toolbar {\n    margin-top: 16px;\n  }\n</style>\n\n<script>\nexport default {\n  name: 'ToolbarSizes'\n}\n</script>\n"
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

/***/ "./docs/app/pages/Components/Toolbar/Toolbar.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Toolbar_vue__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?cacheDirectory=true!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./docs/app/pages/Components/Toolbar/Toolbar.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Toolbar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Toolbar_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Toolbar_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, (function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Toolbar_vue__[key]; })) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_616db182_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Toolbar_vue__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-616db182\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./docs/app/pages/Components/Toolbar/Toolbar.vue");
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Toolbar_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_616db182_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Toolbar_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* customBlocks */
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/Toolbar/examples/RegularToolbar.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/Toolbar/examples/ToolbarSizes.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/Toolbar/examples/ContentActions.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}


/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?cacheDirectory=true!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./docs/app/pages/Components/Toolbar/Toolbar.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _docsExample = __webpack_require__("./docs/app/mixins/docsExample.js");

var _docsExample2 = _interopRequireDefault(_docsExample);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'DocToolbar',
  mixins: [_docsExample2.default],
  data: function data() {
    return {
      api: {
        regular: {
          props: {
            headings: ['Name', 'Description', 'Default'],
            props: [{
              name: 'md-elevation',
              type: 'String|Number',
              description: 'Sets the toolbar shadow elevation',
              defaults: '4'
            }]
          },
          classes: {
            headings: ['Name', 'Description'],
            props: [{
              name: 'md-transparent',
              description: 'Makes the Toolbar background transparent'
            }, {
              name: 'md-dense',
              description: 'Creates a small sized toolbar'
            }, {
              name: 'md-medium',
              description: 'Creates a medium sized toolbar'
            }, {
              name: 'md-large',
              description: 'Creates a large sized toolbar'
            }]
          }
        },
        elements: {
          classes: {
            headings: ['Name', 'Description'],
            props: [{
              name: 'md-toolbar-row',
              description: 'Creates a toolbar row, commonly used on large toolbars'
            }, {
              name: 'md-toolbar-offset',
              description: 'Adds an left offset to any toolbar row. Only works in md-toolbar-row'
            }, {
              name: 'md-toolbar-section-start',
              description: 'Creates a section on the left of a toolbar or toolbar row. Commonly used to hold the application menu button and the title'
            }, {
              name: 'md-toolbar-section-end',
              description: 'Creates a section on the right of a toolbar or toolbar row. Commonly used to hold the main action of a toolbar, such as overflow buttons'
            }, {
              name: 'md-title',
              description: 'Will create the toolbar title. Works inside or outside a toolbar row'
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
//
//

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-616db182\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./docs/app/pages/Components/Toolbar/Toolbar.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('page-container',{attrs:{"centered":"","title":_vm.$t('pages.toolbar.title')}},[_c('div',{staticClass:"page-container-section"},[_c('p',[_vm._v("Toolbar actions appear above the view affected by their actions. They may constrain their width to accommodate material passing over them.")])]),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('h2',[_vm._v("Toolbars")]),_vm._v(" "),_c('p',[_vm._v("Toolbars adjusts its height dimensions based on the screen width to best fit the visible area on small devices. Try to resize your browser to see the difference:")]),_vm._v(" "),_c('code-example',{attrs:{"title":"Regular Toolbars","component":_vm.examples['regular-toolbar']}}),_vm._v(" "),_c('api-item',{attrs:{"title":"API - md-toolbar"}},[_c('p',[_vm._v("The following options can be applied to all toolbars:")]),_vm._v(" "),_c('api-table',{attrs:{"slot":"classes","headings":_vm.api.regular.classes.headings,"props":_vm.api.regular.classes.props},slot:"classes"}),_vm._v(" "),_c('api-table',{attrs:{"slot":"props","headings":_vm.api.regular.props.headings,"props":_vm.api.regular.props.props},slot:"props"})],1)],1),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('h2',[_vm._v("Different Sizes")]),_vm._v(" "),_c('code-example',{attrs:{"title":"Sizes","component":_vm.examples['toolbar-sizes']}})],1),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('h2',[_vm._v("Content and Actions")]),_vm._v(" "),_c('p',[_vm._v("As the Toolbars are mostly used to hold actions that affects the entire application, you can create rows or sections inside of it.")]),_vm._v(" "),_c('p',[_vm._v("Although those rows works on every toolbar, they were created to separate contents for large toolbars. This element is represented by the "),_c('code',[_vm._v("md-toolbar-row")]),_vm._v(" class. A row can also have a "),_c('code',[_vm._v("md-toolbar-offset")]),_vm._v(" to add a little space on the left of it. This is commonly used inside the second row of an large toolbar.")]),_vm._v(" "),_c('p',[_vm._v("The sections are used to split the content of the toolbar horizontally (or the row inside). You can apply them using two types of section: "),_c('code',[_vm._v("md-toolbar-section-start")]),_vm._v(" will be left-aligned and "),_c('code',[_vm._v("md-toolbar-section-end")]),_vm._v(" right-aligned.")]),_vm._v(" "),_c('code-example',{attrs:{"title":"Rows, Title and Icons","component":_vm.examples['content-actions']}}),_vm._v(" "),_c('api-item',{attrs:{"title":"Elements"}},[_c('p',[_vm._v("The following classes creates parts of a toolbar:")]),_vm._v(" "),_c('api-table',{attrs:{"slot":"classes","headings":_vm.api.elements.classes.headings,"props":_vm.api.elements.classes.props},slot:"classes"})],1)],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});