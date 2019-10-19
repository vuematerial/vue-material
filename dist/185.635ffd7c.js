webpackJsonp([185],{

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/Snackbar/examples/SnackbarExample.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(115/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/Snackbar/examples/SnackbarExample.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('snackbar-example', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['snackbar-example'] = {
    name: 'snackbar-example',
    source: "<template>\n  <form novalidate @submit.stop.prevent=\"showSnackbar = true\">\n    <div>\n      <div for=\"snackbar-center\" class=\"md-body-2\">Position</div>\n      <md-radio v-model=\"position\" id=\"snackbar-center\" name=\"snackbar-horizontal\" value=\"center\">Centered</md-radio>\n      <md-radio v-model=\"position\" id=\"snackbar-left\" name=\"snackbar-horizontal\" value=\"left\">Left</md-radio>\n    </div>\n\n    <div>\n      <div class=\"md-body-2\">Duration</div>\n\n      <md-switch v-model=\"isInfinity\">Infinite</md-switch>\n\n      <md-field>\n        <label for=\"snackbar-duration\">Miliseconds</label>\n        <md-input type=\"number\" id=\"snackbar-duration\" v-model.number=\"duration\" :disabled=\"isInfinity\"></md-input>\n      </md-field>\n    </div>\n\n    <md-button type=\"submit\" class=\"md-primary md-raised\">Open Snackbar</md-button>\n\n    <md-snackbar :md-position=\"position\" :md-duration=\"isInfinity ? Infinity : duration\" :md-active.sync=\"showSnackbar\" md-persistent>\n      <span>Connection timeout. Showing limited messages!</span>\n      <md-button class=\"md-primary\" @click=\"showSnackbar = false\">Retry</md-button>\n    </md-snackbar>\n  </form>\n</template>\n\n<script>\nexport default {\n  name: 'SnackbarExample',\n  data: () => ({\n    showSnackbar: false,\n    position: 'center',\n    duration: 4000,\n    isInfinity: false\n  })\n}\n</script>\n"
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

/***/ "./docs/app/pages/Components/Snackbar/Snackbar.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Snackbar_vue__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?cacheDirectory=true!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./docs/app/pages/Components/Snackbar/Snackbar.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Snackbar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Snackbar_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Snackbar_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, (function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Snackbar_vue__[key]; })) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_21555b80_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Snackbar_vue__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-21555b80\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./docs/app/pages/Components/Snackbar/Snackbar.vue");
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Snackbar_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_21555b80_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Snackbar_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* customBlocks */
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/Snackbar/examples/SnackbarExample.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}


/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?cacheDirectory=true!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./docs/app/pages/Components/Snackbar/Snackbar.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _docsExample = __webpack_require__("./docs/app/mixins/docsExample.js");

var _docsExample2 = _interopRequireDefault(_docsExample);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'DocSnackbar',
  mixins: [_docsExample2.default],
  data: function data() {
    return {
      props: {
        headings: ['Name', 'Description', 'Default'],
        props: [{
          name: 'md-active',
          type: 'Boolean',
          description: 'Option used to trigger the snackbar visibility. Should be used with the <code>.sync</code> modifier.',
          defaults: 'false'
        }, {
          name: 'md-duration',
          type: 'Number',
          description: 'Sets the duration in milliseconds before close the snackbar.',
          defaults: '4000'
        }, {
          name: 'md-persistent',
          type: 'Boolean',
          description: 'This will make the snackbar persistent in your application, even changing routes.',
          defaults: 'false'
        }, {
          name: 'md-position',
          type: 'String',
          description: 'Sets the snackbar position on the bottom of the screen.',
          defaults: 'null'
        }, {
          offset: true,
          name: 'md-position="center"',
          type: 'String',
          description: 'Make the snackbar centered.',
          defaults: '-'
        }, {
          offset: true,
          name: 'md-position="left"',
          type: 'String',
          description: 'Make the snackbar left aligned.',
          defaults: '-'
        }]
      },
      events: {
        headings: ['Name', 'Description', 'Value'],
        props: [{
          name: 'md-opened',
          description: 'Triggered when a snackbar opens',
          value: 'null'
        }, {
          name: 'md-closed',
          description: 'Triggered when a snackbar closes',
          value: 'null'
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

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-21555b80\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./docs/app/pages/Components/Snackbar/Snackbar.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('page-container',{attrs:{"centered":"","title":_vm.$t('pages.snackbar.title')}},[_c('div',{staticClass:"page-container-section"},[_c('p',[_vm._v("Snackbars provide brief feedback about an operation through a message at the bottom of the screen.")]),_vm._v(" "),_c('p',[_vm._v("They can have a custom duration on the screen or be persistent. It can be centered or left aligned.")]),_vm._v(" "),_c('note-block',[_vm._v("On mobile devices the snackbar will fit the whole width space.")])],1),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('h2',[_vm._v("Duration and position")]),_vm._v(" "),_c('code-example',{attrs:{"title":"Dynamic values","component":_vm.examples['snackbar-example']}}),_vm._v(" "),_c('api-item',{attrs:{"title":"API - md-snackbar"}},[_c('p',[_vm._v("The following options can be applied to any snackbar:")]),_vm._v(" "),_c('api-table',{attrs:{"slot":"props","headings":_vm.props.headings,"props":_vm.props.props},slot:"props"}),_vm._v(" "),_c('api-table',{attrs:{"slot":"events","headings":_vm.events.headings,"props":_vm.events.props},slot:"events"})],1)],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});