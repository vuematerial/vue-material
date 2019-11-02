webpackJsonp([177],{

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/Avatar/examples/Placeholder.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(91/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/Avatar/examples/Placeholder.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('placeholder', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['placeholder'] = {
    name: 'placeholder',
    source: "<template>\n  <div>\n    <div class=\"separator\">\n      <md-avatar class=\"md-avatar-icon\">A</md-avatar>\n      <md-avatar class=\"md-avatar-icon md-primary\">A</md-avatar>\n      <md-avatar class=\"md-avatar-icon md-accent\">A</md-avatar>\n    </div>\n\n    <div class=\"separator\">\n      <md-avatar class=\"md-avatar-icon md-small\">B</md-avatar>\n      <md-avatar class=\"md-avatar-icon md-small md-primary\">B</md-avatar>\n      <md-avatar class=\"md-avatar-icon md-small md-accent\">B</md-avatar>\n    </div>\n\n    <div class=\"separator\">\n      <md-avatar class=\"md-avatar-icon md-large\">\n        <md-ripple>MM</md-ripple>\n      </md-avatar>\n\n      <md-avatar class=\"md-avatar-icon md-large md-primary\">\n        <md-ripple>MM</md-ripple>\n      </md-avatar>\n\n      <md-avatar class=\"md-avatar-icon md-large md-accent\">\n        <md-ripple>MM</md-ripple>\n      </md-avatar>\n    </div>\n  </div>\n</template>\n\n<script>\nexport default {\n  name: 'Placeholder'\n}\n</script>\n\n<style lang=\"scss\" scoped>\n  .separator + .separator {\n    margin-top: 24px;\n  }\n</style>\n"
  };
};

/***/ }),

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/Avatar/examples/Regular.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(143/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/Avatar/examples/Regular.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('regular', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['regular'] = {
    name: 'regular',
    source: "<template>\n  <div>\n    <md-avatar>\n      <img src=\"/assets/examples/avatar.png\" alt=\"Avatar\">\n    </md-avatar>\n\n    <md-avatar class=\"md-avatar-icon\">\n      <md-icon>home</md-icon>\n    </md-avatar>\n\n    <md-avatar class=\"md-avatar-icon md-primary\">\n      <md-icon>folder</md-icon>\n    </md-avatar>\n\n    <md-avatar class=\"md-avatar-icon md-accent\">\n      <md-icon>favorite</md-icon>\n    </md-avatar>\n  </div>\n</template>\n\n<script>\nexport default {\n  name: 'Regular'\n}\n</script>\n"
  };
};

/***/ }),

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/Avatar/examples/Sizes.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(90/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/Avatar/examples/Sizes.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('sizes', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['sizes'] = {
    name: 'sizes',
    source: "<template>\n  <div>\n    <div class=\"separator\">\n      <md-avatar class=\"md-small\">\n        <img src=\"/assets/examples/avatar.png\" alt=\"People\">\n      </md-avatar>\n\n      <md-avatar class=\"md-avatar-icon md-small\">\n        <md-icon>home</md-icon>\n      </md-avatar>\n\n      <md-avatar class=\"md-avatar-icon md-small md-primary\">\n        <md-icon>folder</md-icon>\n      </md-avatar>\n\n      <md-avatar class=\"md-avatar-icon md-small md-accent\">\n        <md-icon>favorite</md-icon>\n      </md-avatar>\n    </div>\n\n    <div class=\"separator\">\n      <md-avatar>\n        <img src=\"/assets/examples/avatar.jpg\" alt=\"Avatar\">\n      </md-avatar>\n\n      <md-avatar class=\"md-avatar-icon\">\n        <md-icon>home</md-icon>\n      </md-avatar>\n\n      <md-avatar class=\"md-avatar-icon md-primary\">\n        <md-icon>folder</md-icon>\n      </md-avatar>\n\n      <md-avatar class=\"md-avatar-icon md-accent\">\n        <md-icon>favorite</md-icon>\n      </md-avatar>\n    </div>\n\n    <div class=\"separator\">\n      <md-avatar class=\"md-large\">\n        <img src=\"/assets/examples/avatar-2.jpg\" alt=\"People\">\n      </md-avatar>\n\n      <md-avatar class=\"md-avatar-icon md-large\">\n        <md-icon>home</md-icon>\n      </md-avatar>\n\n      <md-avatar class=\"md-avatar-icon md-large md-primary\">\n        <md-icon>folder</md-icon>\n      </md-avatar>\n\n      <md-avatar class=\"md-avatar-icon md-large md-accent\">\n        <md-icon>favorite</md-icon>\n      </md-avatar>\n    </div>\n  </div>\n</template>\n\n<script>\nexport default {\n  name: 'Sizes'\n}\n</script>\n\n<style lang=\"scss\" scoped>\n  .separator + .separator {\n    margin-top: 24px;\n  }\n</style>\n"
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

/***/ "./docs/app/pages/Components/Avatar/Avatar.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Avatar_vue__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?cacheDirectory=true!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./docs/app/pages/Components/Avatar/Avatar.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Avatar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Avatar_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Avatar_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, (function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Avatar_vue__[key]; })) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_064ede65_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Avatar_vue__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-064ede65\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./docs/app/pages/Components/Avatar/Avatar.vue");
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Avatar_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_064ede65_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Avatar_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* customBlocks */
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/Avatar/examples/Regular.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/Avatar/examples/Sizes.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/Avatar/examples/Placeholder.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}


/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?cacheDirectory=true!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./docs/app/pages/Components/Avatar/Avatar.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _docsExample = __webpack_require__("./docs/app/mixins/docsExample.js");

var _docsExample2 = _interopRequireDefault(_docsExample);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'DocAvatar',
  mixins: [_docsExample2.default],
  data: function data() {
    return {
      regular: {
        headings: ['Name', 'Description'],
        props: [{
          name: 'md-avatar-icon',
          description: 'Creates a avatar that can show a icon.'
        }]
      },
      sizes: {
        headings: ['Name', 'Description'],
        props: [{
          name: 'md-small',
          description: 'Makes a small avatar, changing the size of image, icon or text.'
        }, {
          name: 'md-large',
          description: 'Makes a large avatar. Commonly used as the current user avatar inside a left md-drawer.'
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

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-064ede65\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./docs/app/pages/Components/Avatar/Avatar.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('page-container',{attrs:{"centered":"","title":_vm.$t('pages.avatar.title')}},[_c('div',{staticClass:"page-container-section"},[_c('p',[_vm._v("Avatars can be used to represent people. When used with a specific logo, avatars can also be used to represent a brand. They also can be a placeholder when there is no image to be shown, showing a initial letter of a name on contacts that have no picture yet, for example.")])]),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('h2',[_vm._v("Avatar")]),_vm._v(" "),_c('p',[_vm._v("Avatars can show a single image by default but can also display an icon (using the "),_c('code',[_vm._v("md-icon")]),_vm._v(" component):")]),_vm._v(" "),_c('code-example',{attrs:{"title":"Default","component":_vm.examples['regular']}}),_vm._v(" "),_c('api-item',{attrs:{"title":"API - md-avatar"}},[_c('p',[_vm._v("The following option can be applied to any avatar:")]),_vm._v(" "),_c('api-table',{attrs:{"slot":"classes","headings":_vm.regular.headings,"props":_vm.regular.props},slot:"classes"})],1)],1),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('h2',[_vm._v("Initial letter as a placeholder")]),_vm._v(" "),_c('p',[_vm._v("Let's assume that you want to show a list of contacts, but some of them do not have a picture in your database. You can use the initial letter of the contact name as a placeholder. It can even show 2 letters (for compound names) without problems:")]),_vm._v(" "),_c('code-example',{attrs:{"title":"Placeholder","component":_vm.examples['placeholder']}})],1),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('h2',[_vm._v("Multiple sizes")]),_vm._v(" "),_c('p',[_vm._v("You can specify three different sizes, if you want: Regular, Small or Large. By default the avatar have a regular size.")]),_vm._v(" "),_c('code-example',{attrs:{"title":"Sizes","component":_vm.examples['sizes']}}),_vm._v(" "),_c('api-item',{attrs:{"title":"API - md-avatar"}},[_c('p',[_vm._v("The following options will change the size of a avatar:")]),_vm._v(" "),_c('api-table',{attrs:{"slot":"classes","headings":_vm.sizes.headings,"props":_vm.sizes.props},slot:"classes"})],1)],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});