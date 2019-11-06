webpackJsonp([168],{

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/Dialog/examples/DialogAlert.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(131/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/Dialog/examples/DialogAlert.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('dialog-alert', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['dialog-alert'] = {
    name: 'dialog-alert',
    source: "<template>\n  <div>\n    <md-dialog-alert\n      :md-active.sync=\"first\"\n      md-content=\"Your post has been deleted!\"\n      md-confirm-text=\"Cool!\" />\n\n    <md-dialog-alert\n      :md-active.sync=\"second\"\n      md-title=\"Post created!\"\n      md-content=\"Your post <strong>Material Design is awesome</strong> has been created.\" />\n\n    <md-button class=\"md-accent md-raised\" @click=\"first = true\">Alert</md-button>\n    <md-button class=\"md-primary md-raised\" @click=\"second = true\">Alert</md-button>\n  </div>\n</template>\n\n<script>\n  export default {\n    name: 'DialogAlert',\n    data: () => ({\n      first: false,\n      second: false\n    })\n  }\n</script>\n"
  };
};

/***/ }),

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/Dialog/examples/DialogConfirm.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(130/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/Dialog/examples/DialogConfirm.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('dialog-confirm', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['dialog-confirm'] = {
    name: 'dialog-confirm',
    source: "<template>\n  <div>\n    <md-dialog-confirm\n      :md-active.sync=\"active\"\n      md-title=\"Use Google's location service?\"\n      md-content=\"Let Google help apps determine location. <br> This means sending <strong>anonymous</strong> location data to Google, even when no apps are running.\"\n      md-confirm-text=\"Agree\"\n      md-cancel-text=\"Disagree\"\n      @md-cancel=\"onCancel\"\n      @md-confirm=\"onConfirm\" />\n\n    <md-button class=\"md-primary md-raised\" @click=\"active = true\">Confirm</md-button>\n    <span v-if=\"value\">Value: {{ value }}</span>\n  </div>\n</template>\n\n<script>\n  export default {\n    name: 'DialogConfirm',\n    data: () => ({\n      active: false,\n      value: null\n    }),\n    methods: {\n      onConfirm () {\n        this.value = 'Agreed'\n      },\n      onCancel () {\n        this.value = 'Disagreed'\n      }\n    }\n  }\n</script>\n"
  };
};

/***/ }),

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/Dialog/examples/DialogCustom.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(67/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/Dialog/examples/DialogCustom.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('dialog-custom', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['dialog-custom'] = {
    name: 'dialog-custom',
    source: "<template>\n  <div>\n    <md-dialog :md-active.sync=\"showDialog\">\n      <md-dialog-title>Preferences</md-dialog-title>\n\n      <md-tabs md-dynamic-height>\n        <md-tab md-label=\"General\">\n          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam mollitia dolorum dolores quae commodi impedit possimus qui, atque at voluptates cupiditate. Neque quae culpa suscipit praesentium inventore ducimus ipsa aut.</p>\n          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam mollitia dolorum dolores quae commodi impedit possimus qui, atque at voluptates cupiditate. Neque quae culpa suscipit praesentium inventore ducimus ipsa aut.</p>\n          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam mollitia dolorum dolores quae commodi impedit possimus qui, atque at voluptates cupiditate. Neque quae culpa suscipit praesentium inventore ducimus ipsa aut.</p>\n        </md-tab>\n\n        <md-tab md-label=\"Activity\">\n          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam mollitia dolorum dolores quae commodi impedit possimus qui, atque at voluptates cupiditate. Neque quae culpa suscipit praesentium inventore ducimus ipsa aut.</p>\n          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam mollitia dolorum dolores quae commodi impedit possimus qui, atque at voluptates cupiditate. Neque quae culpa suscipit praesentium inventore ducimus ipsa aut.</p>\n          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam mollitia dolorum dolores quae commodi impedit possimus qui, atque at voluptates cupiditate. Neque quae culpa suscipit praesentium inventore ducimus ipsa aut.</p>\n          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam mollitia dolorum dolores quae commodi impedit possimus qui, atque at voluptates cupiditate. Neque quae culpa suscipit praesentium inventore ducimus ipsa aut.</p>\n          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam mollitia dolorum dolores quae commodi impedit possimus qui, atque at voluptates cupiditate. Neque quae culpa suscipit praesentium inventore ducimus ipsa aut.</p>\n        </md-tab>\n\n        <md-tab md-label=\"Account\">\n          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam mollitia dolorum dolores quae commodi impedit possimus qui, atque at voluptates cupiditate. Neque quae culpa suscipit praesentium inventore ducimus ipsa aut.</p>\n          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam mollitia dolorum dolores quae commodi impedit possimus qui, atque at voluptates cupiditate. Neque quae culpa suscipit praesentium inventore ducimus ipsa aut.</p>\n        </md-tab>\n      </md-tabs>\n\n      <md-dialog-actions>\n        <md-button class=\"md-primary\" @click=\"showDialog = false\">Close</md-button>\n        <md-button class=\"md-primary\" @click=\"showDialog = false\">Save</md-button>\n      </md-dialog-actions>\n    </md-dialog>\n\n    <md-button class=\"md-primary md-raised\" @click=\"showDialog = true\">Show Dialog</md-button>\n  </div>\n</template>\n\n<script>\n  export default {\n    name: 'DialogCustom',\n    data: () => ({\n      showDialog: false\n    })\n  }\n</script>\n\n<style lang=\"scss\" scoped>\n  .md-dialog {\n    max-width: 768px;\n  }\n</style>\n"
  };
};

/***/ }),

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/Dialog/examples/DialogPrompt.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(129/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/Dialog/examples/DialogPrompt.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('dialog-prompt', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['dialog-prompt'] = {
    name: 'dialog-prompt',
    source: "<template>\n  <div>\n    <md-dialog-prompt\n      :md-active.sync=\"active\"\n      v-model=\"value\"\n      md-title=\"What's your name?\"\n      md-input-maxlength=\"30\"\n      md-input-placeholder=\"Type your name...\"\n      md-confirm-text=\"Done\" />\n\n    <md-button class=\"md-primary md-raised\" @click=\"active = true\">Prompt</md-button>\n    <span v-if=\"value\">Value: {{ value }}</span>\n  </div>\n</template>\n\n<script>\n  export default {\n    name: 'DialogPrompt',\n    data: () => ({\n      active: false,\n      value: null\n    })\n  }\n</script>\n"
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

/***/ "./docs/app/pages/Components/Dialog/Dialog.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Dialog_vue__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?cacheDirectory=true!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./docs/app/pages/Components/Dialog/Dialog.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Dialog_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Dialog_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Dialog_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, (function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Dialog_vue__[key]; })) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3ad21b89_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Dialog_vue__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-3ad21b89\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./docs/app/pages/Components/Dialog/Dialog.vue");
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Dialog_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3ad21b89_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Dialog_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* customBlocks */
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/Dialog/examples/DialogCustom.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/Dialog/examples/DialogAlert.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/Dialog/examples/DialogConfirm.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/Dialog/examples/DialogPrompt.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}


/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?cacheDirectory=true!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./docs/app/pages/Components/Dialog/Dialog.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _docsExample = __webpack_require__("./docs/app/mixins/docsExample.js");

var _docsExample2 = _interopRequireDefault(_docsExample);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'DocDialog',
  mixins: [_docsExample2.default],
  data: function data() {
    return {
      dialog: {
        props: {
          headings: ['Name', 'Description', 'Default'],
          props: [{
            name: 'md-active',
            type: 'Boolean',
            description: 'The prop to show/hide the dialog. Should be used with the <code>.sync</code> modifier.',
            defaults: 'false'
          }, {
            name: 'md-backdrop',
            type: 'Boolean',
            description: 'Enable/disable the dialog overlay',
            defaults: 'true'
          }, {
            name: 'md-close-on-esc',
            type: 'Boolean',
            description: 'By the default the dialog will close when pressing esc. To disabled that, just set this prop as false',
            defaults: 'true'
          }, {
            name: 'md-click-outside-to-close',
            type: 'Boolean',
            description: 'By the default the dialog will close when clicking outsite. To disabled that, just set this prop as false',
            defaults: 'true'
          }, {
            name: 'md-fullscreen',
            type: 'Boolean',
            description: 'The dialog will become fullscreen on mobile screens. This option can disable this behavior.',
            defaults: 'true'
          }]
        },
        events: {
          headings: ['Name', 'Description', 'Value'],
          props: [{
            name: 'md-opened',
            description: 'Triggered when a dialog opens',
            value: 'null'
          }, {
            name: 'md-closed',
            description: 'Triggered when a dialog closes',
            value: 'null'
          }, {
            name: 'md-clicked-outside',
            description: 'Triggered when clicked outside',
            value: 'null'
          }]
        }
      },
      alert: {
        props: {
          headings: ['Name', 'Description', 'Default'],
          props: [{
            name: 'md-title',
            type: 'String',
            description: 'The alert title. Optional.',
            defaults: 'null'
          }, {
            name: 'md-content',
            type: 'String',
            description: 'The alert content. Accepts HTML. Optional.',
            defaults: 'null'
          }, {
            name: 'md-confirm-text',
            type: 'String',
            description: 'The text inside confirm button',
            defaults: 'Ok'
          }]
        }
      },
      confirm: {
        props: {
          headings: ['Name', 'Description', 'Default'],
          props: [{
            name: 'md-title',
            type: 'String',
            description: 'The alert title. Optional.',
            defaults: 'null'
          }, {
            name: 'md-content',
            type: 'String',
            description: 'The alert content. Accepts HTML. Optional.',
            defaults: 'null'
          }, {
            name: 'md-confirm-text',
            type: 'String',
            description: 'The text inside confirm button',
            defaults: 'Ok'
          }, {
            name: 'md-cancel-text',
            type: 'String',
            description: 'The text inside cancel button',
            defaults: 'Cancel'
          }]
        },
        events: {
          headings: ['Name', 'Description', 'Value'],
          props: [{
            name: 'md-confirm',
            description: 'Triggered when the confirm button receives a click',
            value: 'null'
          }, {
            name: 'md-cancel',
            description: 'Triggered when the user dismiss the dialog',
            value: 'null'
          }]
        }
      },
      prompt: {
        props: {
          headings: ['Name', 'Description', 'Default'],
          props: [{
            name: 'v-model',
            type: 'String|Number',
            description: 'The model variable to bind the input prompt value',
            defaults: 'null'
          }, {
            name: 'md-input-name',
            type: 'String',
            description: 'The input name attribute',
            defaults: 'null'
          }, {
            name: 'md-input-id',
            type: 'String',
            description: 'The input id attribute',
            defaults: 'null'
          }, {
            name: 'md-input-max-length',
            type: 'Number',
            description: 'Enables the character count, based on the given value.',
            defaults: 'null'
          }, {
            name: 'md-input-placeholder',
            type: 'Number',
            description: 'Sets a optional placeholder on input.',
            defaults: 'null'
          }, {
            name: 'md-title',
            type: 'String',
            description: 'The alert title. Optional.',
            defaults: 'null'
          }, {
            name: 'md-content',
            type: 'String',
            description: 'The alert content. Accepts HTML. Optional.',
            defaults: 'null'
          }, {
            name: 'md-confirm-text',
            type: 'String',
            description: 'The text inside confirm button',
            defaults: 'Ok'
          }, {
            name: 'md-cancel-text',
            type: 'String',
            description: 'The text inside cancel button',
            defaults: 'Cancel'
          }]
        },
        events: {
          headings: ['Name', 'Description', 'Value'],
          props: [{
            name: 'md-confirm',
            description: 'Triggered when the confirm button receives a click',
            value: 'Input Value'
          }, {
            name: 'md-cancel',
            description: 'Triggered when the user dismiss the dialog',
            value: 'null'
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

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-3ad21b89\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./docs/app/pages/Components/Dialog/Dialog.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('page-container',{attrs:{"centered":"","title":_vm.$t('pages.dialog.title')}},[_c('div',{staticClass:"page-container-section"},[_c('p',[_vm._v("Dialogs informs users about a specific task and may contain critical information, require decisions, or involve multiple tasks. The dialog component works with any plain html content. You can have tabs inside, all form components and many more.")]),_vm._v(" "),_c('p',[_vm._v("The component can be used with a custom markup, using the auxiliary components or with presets made by Vue Material. Those presets emulates the default Dialogs from Javascript, like confirm, alert and prompt.")]),_vm._v(" "),_c('note-block',{attrs:{"tip":""}},[_vm._v("To allow scrolling in content of modal you need to wrap your content in "),_c('code',[_vm._v("md-dialog-content")]),_vm._v(" component.")])],1),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('h2',[_vm._v("Dialog")]),_vm._v(" "),_c('p',[_vm._v("The Dialog component can have any HTML markup inside. This allows you to create rich dialog content, like the details of a table row, for example:")]),_vm._v(" "),_c('code-example',{attrs:{"title":"Custom Dialog Markup","component":_vm.examples['dialog-custom']}}),_vm._v(" "),_c('api-item',{attrs:{"title":"API - md-dialog"}},[_c('p',[_vm._v("The following options can be applied to any dialog, even on presets:")]),_vm._v(" "),_c('api-table',{attrs:{"slot":"props","headings":_vm.dialog.props.headings,"props":_vm.dialog.props.props},slot:"props"}),_vm._v(" "),_c('api-table',{attrs:{"slot":"events","headings":_vm.dialog.events.headings,"props":_vm.dialog.events.props},slot:"events"})],1)],1),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('h2',[_vm._v("Alerts")]),_vm._v(" "),_c('code-example',{attrs:{"title":"Accepts custom HTML too!","component":_vm.examples['dialog-alert']}}),_vm._v(" "),_c('api-item',{attrs:{"title":"API - md-dialog-alert"}},[_c('p',[_vm._v("The following props can be applied to alerts:")]),_vm._v(" "),_c('api-table',{attrs:{"slot":"props","headings":_vm.alert.props.headings,"props":_vm.alert.props.props},slot:"props"})],1)],1),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('h2',[_vm._v("Confirms")]),_vm._v(" "),_c('code-example',{attrs:{"title":"Accepts custom HTML too!","component":_vm.examples['dialog-confirm']}}),_vm._v(" "),_c('api-item',{attrs:{"title":"API - md-dialog-confirm"}},[_c('p',[_vm._v("The following options can be applied to confirms:")]),_vm._v(" "),_c('api-table',{attrs:{"slot":"props","headings":_vm.confirm.props.headings,"props":_vm.confirm.props.props},slot:"props"}),_vm._v(" "),_c('api-table',{attrs:{"slot":"events","headings":_vm.confirm.events.headings,"props":_vm.confirm.events.props},slot:"events"})],1)],1),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('h2',[_vm._v("Prompts")]),_vm._v(" "),_c('code-example',{attrs:{"title":"Look at the character count!","component":_vm.examples['dialog-prompt']}}),_vm._v(" "),_c('api-item',{attrs:{"title":"API - md-dialog-prompt"}},[_c('p',[_vm._v("The following options can be applied to prompts:")]),_vm._v(" "),_c('api-table',{attrs:{"slot":"props","headings":_vm.prompt.props.headings,"props":_vm.prompt.props.props},slot:"props"}),_vm._v(" "),_c('api-table',{attrs:{"slot":"events","headings":_vm.prompt.events.headings,"props":_vm.prompt.events.props},slot:"events"})],1)],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});