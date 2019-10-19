webpackJsonp([155],{

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/Drawer/examples/PermanentCard.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(65/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/Drawer/examples/PermanentCard.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('permanent-card', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['permanent-card'] = {
    name: 'permanent-card',
    source: "<template>\n  <div>\n    <md-app>\n      <md-app-toolbar class=\"md-primary\">\n        <span class=\"md-title\">My Title</span>\n      </md-app-toolbar>\n\n      <md-app-drawer md-permanent=\"card\">\n        <md-list>\n          <md-list-item>\n            <md-icon>move_to_inbox</md-icon>\n            <span class=\"md-list-item-text\">Inbox</span>\n          </md-list-item>\n\n          <md-list-item>\n            <md-icon>send</md-icon>\n            <span class=\"md-list-item-text\">Sent Mail</span>\n          </md-list-item>\n\n          <md-list-item>\n            <md-icon>delete</md-icon>\n            <span class=\"md-list-item-text\">Trash</span>\n          </md-list-item>\n\n          <md-list-item>\n            <md-icon>error</md-icon>\n            <span class=\"md-list-item-text\">Spam</span>\n          </md-list-item>\n        </md-list>\n      </md-app-drawer>\n\n      <md-app-content>\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.\n      </md-app-content>\n    </md-app>\n  </div>\n</template>\n\n<script>\n  export default {\n    name: 'PermanentCard'\n  }\n</script>\n\n<style lang=\"scss\" scoped>\n  .md-app {\n    min-height: 350px;\n    border: 1px solid rgba(#000, .12);\n  }\n\n   // Demo purposes only\n  .md-drawer {\n    width: 230px;\n    max-width: calc(100vw - 125px);\n  }\n</style>\n"
  };
};

/***/ }),

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/Drawer/examples/PermanentClipped.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(64/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/Drawer/examples/PermanentClipped.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('permanent-clipped', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['permanent-clipped'] = {
    name: 'permanent-clipped',
    source: "<template>\n  <div class=\"page-container\">\n    <md-app>\n      <md-app-toolbar class=\"md-primary\">\n        <span class=\"md-title\">My Title</span>\n      </md-app-toolbar>\n\n      <md-app-drawer md-permanent=\"clipped\">\n        <md-list>\n          <md-list-item>\n            <md-icon>move_to_inbox</md-icon>\n            <span class=\"md-list-item-text\">Inbox</span>\n          </md-list-item>\n\n          <md-list-item>\n            <md-icon>send</md-icon>\n            <span class=\"md-list-item-text\">Sent Mail</span>\n          </md-list-item>\n\n          <md-list-item>\n            <md-icon>delete</md-icon>\n            <span class=\"md-list-item-text\">Trash</span>\n          </md-list-item>\n\n          <md-list-item>\n            <md-icon>error</md-icon>\n            <span class=\"md-list-item-text\">Spam</span>\n          </md-list-item>\n        </md-list>\n      </md-app-drawer>\n\n      <md-app-content>\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.\n      </md-app-content>\n    </md-app>\n  </div>\n</template>\n\n<script>\n  export default {\n    name: 'PermanentClipped'\n  }\n</script>\n\n<style lang=\"scss\" scoped>\n  .md-app {\n    min-height: 350px;\n    border: 1px solid rgba(#000, .12);\n  }\n\n   // Demo purposes only\n  .md-drawer {\n    width: 230px;\n    max-width: calc(100vw - 125px);\n  }\n</style>\n"
  };
};

/***/ }),

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/Drawer/examples/PermanentFull.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(63/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/Drawer/examples/PermanentFull.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('permanent-full', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['permanent-full'] = {
    name: 'permanent-full',
    source: "<template>\n  <div class=\"page-container md-layout-row\">\n    <md-app>\n      <md-app-toolbar class=\"md-primary\">\n        <span class=\"md-title\">My Title</span>\n      </md-app-toolbar>\n\n      <md-app-drawer md-permanent=\"full\">\n        <md-toolbar class=\"md-transparent\" md-elevation=\"0\">\n          Navigation\n        </md-toolbar>\n\n        <md-list>\n          <md-list-item>\n            <md-icon>move_to_inbox</md-icon>\n            <span class=\"md-list-item-text\">Inbox</span>\n          </md-list-item>\n\n          <md-list-item>\n            <md-icon>send</md-icon>\n            <span class=\"md-list-item-text\">Sent Mail</span>\n          </md-list-item>\n\n          <md-list-item>\n            <md-icon>delete</md-icon>\n            <span class=\"md-list-item-text\">Trash</span>\n          </md-list-item>\n\n          <md-list-item>\n            <md-icon>error</md-icon>\n            <span class=\"md-list-item-text\">Spam</span>\n          </md-list-item>\n        </md-list>\n      </md-app-drawer>\n\n      <md-app-content>\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.\n      </md-app-content>\n    </md-app>\n  </div>\n</template>\n\n<script>\n  export default {\n    name: 'PermanentFull'\n  }\n</script>\n\n<style lang=\"scss\" scoped>\n  .md-app {\n    min-height: 350px;\n    border: 1px solid rgba(#000, .12);\n  }\n\n  .md-drawer {\n    width: 230px;\n    max-width: calc(100vw - 125px);\n  }\n</style>\n"
  };
};

/***/ }),

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/Drawer/examples/PersistentFull.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(62/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/Drawer/examples/PersistentFull.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('persistent-full', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['persistent-full'] = {
    name: 'persistent-full',
    source: "<template>\n  <div class=\"page-container\">\n    <md-app>\n      <md-app-toolbar class=\"md-primary\">\n        <md-button class=\"md-icon-button\" @click=\"toggleMenu\" v-if=\"!menuVisible\">\n          <md-icon>menu</md-icon>\n        </md-button>\n        <span class=\"md-title\">My Title</span>\n      </md-app-toolbar>\n\n      <md-app-drawer :md-active.sync=\"menuVisible\" md-persistent=\"full\">\n        <md-toolbar class=\"md-transparent\" md-elevation=\"0\">\n          <span>Navigation</span>\n\n          <div class=\"md-toolbar-section-end\">\n            <md-button class=\"md-icon-button md-dense\" @click=\"toggleMenu\">\n              <md-icon>keyboard_arrow_left</md-icon>\n            </md-button>\n          </div>\n        </md-toolbar>\n\n        <md-list>\n          <md-list-item>\n            <md-icon>move_to_inbox</md-icon>\n            <span class=\"md-list-item-text\">Inbox</span>\n          </md-list-item>\n\n          <md-list-item>\n            <md-icon>send</md-icon>\n            <span class=\"md-list-item-text\">Sent Mail</span>\n          </md-list-item>\n\n          <md-list-item>\n            <md-icon>delete</md-icon>\n            <span class=\"md-list-item-text\">Trash</span>\n          </md-list-item>\n\n          <md-list-item>\n            <md-icon>error</md-icon>\n            <span class=\"md-list-item-text\">Spam</span>\n          </md-list-item>\n        </md-list>\n      </md-app-drawer>\n\n      <md-app-content>\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea.\n      </md-app-content>\n    </md-app>\n  </div>\n</template>\n\n<script>\n  export default {\n    name: 'PersistentFull',\n    data: () => ({\n      menuVisible: false\n    }),\n    methods: {\n      toggleMenu () {\n        this.menuVisible = !this.menuVisible\n      }\n    }\n  }\n</script>\n\n<style lang=\"scss\" scoped>\n  .md-app {\n    min-height: 350px;\n    border: 1px solid rgba(#000, .12);\n  }\n\n   // Demo purposes only\n  .md-drawer {\n    width: 230px;\n    max-width: calc(100vw - 125px);\n  }\n</style>\n"
  };
};

/***/ }),

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/Drawer/examples/PersistentMini.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(61/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/Drawer/examples/PersistentMini.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('persistent-mini', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['persistent-mini'] = {
    name: 'persistent-mini',
    source: "<template>\n  <div class=\"page-container\">\n    <md-app>\n      <md-app-toolbar class=\"md-primary\" md-elevation=\"0\">\n        <md-button class=\"md-icon-button\" @click=\"toggleMenu\" v-if=\"!menuVisible\">\n          <md-icon>menu</md-icon>\n        </md-button>\n        <span class=\"md-title\">My Title</span>\n      </md-app-toolbar>\n\n      <md-app-drawer :md-active.sync=\"menuVisible\" md-persistent=\"mini\">\n        <md-toolbar class=\"md-transparent\" md-elevation=\"0\">\n          <span>Navigation</span>\n\n          <div class=\"md-toolbar-section-end\">\n            <md-button class=\"md-icon-button md-dense\" @click=\"toggleMenu\">\n              <md-icon>keyboard_arrow_left</md-icon>\n            </md-button>\n          </div>\n        </md-toolbar>\n\n        <md-list>\n          <md-list-item>\n            <md-icon>move_to_inbox</md-icon>\n            <span class=\"md-list-item-text\">Inbox</span>\n          </md-list-item>\n\n          <md-list-item>\n            <md-icon>send</md-icon>\n            <span class=\"md-list-item-text\">Sent Mail</span>\n          </md-list-item>\n\n          <md-list-item>\n            <md-icon>delete</md-icon>\n            <span class=\"md-list-item-text\">Trash</span>\n          </md-list-item>\n\n          <md-list-item>\n            <md-icon>error</md-icon>\n            <span class=\"md-list-item-text\">Spam</span>\n          </md-list-item>\n        </md-list>\n      </md-app-drawer>\n\n      <md-app-content>\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea.\n      </md-app-content>\n    </md-app>\n  </div>\n</template>\n\n<script>\n  export default {\n    name: 'PersistentMini',\n    data: () => ({\n      menuVisible: false\n    }),\n    methods: {\n      toggleMenu () {\n        this.menuVisible = !this.menuVisible\n      }\n    }\n  }\n</script>\n\n<style lang=\"scss\" scoped>\n  .md-app {\n    min-height: 350px;\n    border: 1px solid rgba(#000, .12);\n  }\n\n   // Demo purposes only\n  .md-drawer {\n    width: 230px;\n    max-width: calc(100vw - 125px);\n  }\n</style>\n"
  };
};

/***/ }),

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/Drawer/examples/Temporary.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(60/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/Drawer/examples/Temporary.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('temporary', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['temporary'] = {
    name: 'temporary',
    source: "<template>\n  <div class=\"page-container md-layout-column\">\n    <md-toolbar class=\"md-primary\">\n      <md-button class=\"md-icon-button\" @click=\"showNavigation = true\">\n        <md-icon>menu</md-icon>\n      </md-button>\n      <span class=\"md-title\">My Title</span>\n\n      <div class=\"md-toolbar-section-end\">\n        <md-button @click=\"showSidepanel = true\">Favorites</md-button>\n      </div>\n    </md-toolbar>\n\n    <md-drawer :md-active.sync=\"showNavigation\" md-swipeable>\n      <md-toolbar class=\"md-transparent\" md-elevation=\"0\">\n        <span class=\"md-title\">My App name</span>\n      </md-toolbar>\n\n      <md-list>\n        <md-list-item>\n          <md-icon>move_to_inbox</md-icon>\n          <span class=\"md-list-item-text\">Inbox</span>\n        </md-list-item>\n\n        <md-list-item>\n          <md-icon>send</md-icon>\n          <span class=\"md-list-item-text\">Sent Mail</span>\n        </md-list-item>\n\n        <md-list-item>\n          <md-icon>delete</md-icon>\n          <span class=\"md-list-item-text\">Trash</span>\n        </md-list-item>\n\n        <md-list-item>\n          <md-icon>error</md-icon>\n          <span class=\"md-list-item-text\">Spam</span>\n        </md-list-item>\n      </md-list>\n    </md-drawer>\n\n    <md-drawer class=\"md-right\" :md-active.sync=\"showSidepanel\">\n      <md-toolbar class=\"md-transparent\" md-elevation=\"0\">\n        <span class=\"md-title\">Favorites</span>\n      </md-toolbar>\n\n      <md-list>\n        <md-list-item>\n          <span class=\"md-list-item-text\">Abbey Christansen</span>\n\n          <md-button class=\"md-icon-button md-list-action\">\n            <md-icon class=\"md-primary\">chat_bubble</md-icon>\n          </md-button>\n        </md-list-item>\n\n        <md-list-item>\n          <span class=\"md-list-item-text\">Alex Nelson</span>\n\n          <md-button class=\"md-icon-button md-list-action\">\n            <md-icon class=\"md-primary\">chat_bubble</md-icon>\n          </md-button>\n        </md-list-item>\n\n        <md-list-item>\n          <span class=\"md-list-item-text\">Mary Johnson</span>\n\n          <md-button class=\"md-icon-button md-list-action\">\n            <md-icon>chat_bubble</md-icon>\n          </md-button>\n        </md-list-item>\n      </md-list>\n    </md-drawer>\n\n    <md-content>\n      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.\n    </md-content>\n  </div>\n</template>\n\n<script>\n  export default {\n    name: 'Temporary',\n    data: () => ({\n      showNavigation: false,\n      showSidepanel: false\n    })\n  }\n</script>\n\n<style lang=\"scss\" scoped>\n  .page-container {\n    min-height: 300px;\n    overflow: hidden;\n    position: relative;\n    border: 1px solid rgba(#000, .12);\n  }\n\n   // Demo purposes only\n  .md-drawer {\n    width: 230px;\n    max-width: calc(100vw - 125px);\n  }\n\n  .md-content {\n    padding: 16px;\n  }\n</style>\n"
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

/***/ "./docs/app/pages/Components/Drawer/Drawer.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Drawer_vue__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?cacheDirectory=true!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./docs/app/pages/Components/Drawer/Drawer.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Drawer_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Drawer_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Drawer_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, (function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Drawer_vue__[key]; })) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1ffb3672_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Drawer_vue__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-1ffb3672\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./docs/app/pages/Components/Drawer/Drawer.vue");
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Drawer_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1ffb3672_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Drawer_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* customBlocks */
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/Drawer/examples/Temporary.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/Drawer/examples/PermanentFull.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/Drawer/examples/PermanentClipped.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/Drawer/examples/PermanentCard.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/Drawer/examples/PersistentFull.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/Drawer/examples/PersistentMini.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}


/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?cacheDirectory=true!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./docs/app/pages/Components/Drawer/Drawer.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _docsExample = __webpack_require__("./docs/app/mixins/docsExample.js");

var _docsExample2 = _interopRequireDefault(_docsExample);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'DocDrawer',
  mixins: [_docsExample2.default],
  data: function data() {
    return {
      swipeable: {
        props: {
          headings: ['Name', 'Description', 'Default'],
          props: [{
            name: 'md-swipe-threshold',
            type: 'Number',
            description: 'The minimal distance traveled to be considered swipe.',
            defaults: '50'
          }, {
            name: 'md-swipe-restraint',
            type: 'Number',
            description: 'The maximum distance allowed at the same time in perpendicular direction.',
            defaults: '100'
          }, {
            name: 'md-swipe-time',
            type: 'Number',
            description: 'The maximum time allowed to detect swipe.',
            defaults: '400'
          }]
        }
      },
      drawer: {
        props: {
          headings: ['Name', 'Description', 'Default'],
          props: [{
            name: 'md-active',
            type: 'Boolean',
            description: 'Option used to trigger the drawer visibility. Should be used with the <code>.sync</code> modifier.',
            defaults: 'false'
          }, {
            name: 'md-swipeable',
            type: 'Boolean',
            description: 'Option used to enable touch support to be opened/closed by swipe. For more option see  API - Swipeable',
            defaults: 'false'
          }, {
            name: 'md-fixed',
            type: 'Boolean',
            description: 'Applies <code>position: fixed</code> to drawer. Useful to be used as the main drawer of the application (like on this documentation).',
            defaults: 'false'
          }, {
            name: 'md-right',
            type: 'Boolean',
            description: 'This is used to place the drawer on the right of the screen.',
            defaults: 'false'
          }, {
            name: 'md-permanent',
            type: 'String',
            description: 'Sets if the drawer will be permanent on the screen.',
            defaults: 'null'
          }, {
            offset: true,
            name: 'md-permanent="full"',
            type: 'String',
            description: 'Make the drawer with full height, side by side with the toolbar and the content.',
            defaults: '-'
          }, {
            offset: true,
            name: 'md-permanent="clipped"',
            type: 'String',
            description: 'Make the drawer clipped, bellow the toolbar and side by side with the content.',
            defaults: '-'
          }, {
            offset: true,
            name: 'md-permanent="card"',
            type: 'String',
            description: 'Make the drawer floating within a card.',
            defaults: '-'
          }, {
            name: 'md-persistent',
            type: 'String',
            description: 'Sets if the drawer will be persistent on the screen, always pusing the content when opened.',
            defaults: 'null'
          }, {
            offset: true,
            name: 'md-persistent="full"',
            type: 'String',
            description: 'Make the drawer with full height. This will make the drawer hidden when closed and and pusing the content when opened.',
            defaults: '-'
          }, {
            offset: true,
            name: 'md-persistent="mini"',
            type: 'String',
            description: 'Make the drawer with full height. This will make the drawer hidden when closed and and pusing the content when opened.',
            defaults: '-'
          }]
        },
        events: {
          headings: ['Name', 'Description', 'Value'],
          props: [{
            name: 'md-opened',
            description: 'Triggered when a drawer opens',
            value: 'null'
          }, {
            name: 'md-closed',
            description: 'Triggered when a drawer closes',
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

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-1ffb3672\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./docs/app/pages/Components/Drawer/Drawer.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('page-container',{attrs:{"centered":"","title":_vm.$t('pages.drawer.title')}},[_c('div',{staticClass:"page-container-section"},[_c('p',[_vm._v("The navigation drawer slides in from the left or right and contains the navigation destinations for your app. It is commonly used with lists inside, although can accept any type of content.")]),_vm._v(" "),_c('p',[_vm._v("Drawers have 3 types: Temporary, Permanent and Persistent.")]),_vm._v(" "),_c('p',[_vm._v("They can be placed on the left or right, but you can also have both.")]),_vm._v(" "),_c('note-block',[_vm._v("In some examples of this demo we are using drawers along with the "),_c('router-link',{attrs:{"to":"/components/app"}},[_vm._v("App")]),_vm._v(" component, but you can totally use it alone.")],1)],1),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('h2',[_vm._v("Temporary")]),_vm._v(" "),_c('p',[_vm._v("Temporary navigation drawers are closed by default and opens temporarily above all other content until a section is selected. This is highly recommended for mobile devices. If you do not pass any options to drawer this will be the default preset:")]),_vm._v(" "),_c('code-example',{attrs:{"title":"Also works on the right side","component":_vm.examples['temporary']}})],1),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('h2',[_vm._v("Permanent")]),_vm._v(" "),_c('p',[_vm._v("Permanent navigation drawers are always visible and pinned to the left edge, at the same elevation as the content or background. They cannot be closed and are recommended default for desktop.")]),_vm._v(" "),_c('p',[_vm._v("They come with three sub-types: Full, Clipped and Card:")]),_vm._v(" "),_c('p',[_vm._v("The full high type is the default recommendation for desktop for apps focused on information consumption that use a left-to-right hierarchy. So this is great for responsive applications that have global navigation links, as it will automatically hide on small screens:")]),_vm._v(" "),_c('note-block',{attrs:{"tip":""}},[_vm._v("All permanent drawers will automatically become temporary on small screens.")]),_vm._v(" "),_c('code-example',{attrs:{"title":"Full Height","component":_vm.examples['permanent-full']}}),_vm._v(" "),_c('p',[_vm._v("The clipped option is also great for responsive applications, but are for apps focused on productivity that require balance across the screen:")]),_vm._v(" "),_c('code-example',{attrs:{"title":"Clipped","component":_vm.examples['permanent-clipped']}}),_vm._v(" "),_c('p',[_vm._v("The floating card is good to apps that require less hierarchy, like the ones who have a large background content, like maps and video. This is the one used on Google Maps for desktop:")]),_vm._v(" "),_c('code-example',{attrs:{"title":"Card","component":_vm.examples['permanent-card']}})],1),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('h2',[_vm._v("Persistent")]),_vm._v(" "),_c('p',[_vm._v("Persistent navigation drawers can toggle open or closed. The drawer sits on the same surface elevation as the content. It is closed by default and opens by selecting the menu icon, and stays open until closed by the user.")]),_vm._v(" "),_c('p',[_vm._v("They come with two sub-types: Full and Mini:")]),_vm._v(" "),_c('p',[_vm._v("The full type can be use either on desktop or mobile, although is recommended for larger screens:")]),_vm._v(" "),_c('code-example',{attrs:{"title":"Push page content","component":_vm.examples['persistent-full']}}),_vm._v(" "),_c('p',[_vm._v("The mini variant is recommended for apps sections that need quick selection access alongside content. They should be used only on desktop as bottom bar will be more effective for mobile devices. It is great to maximize the content area, without losing the navigation buttons:")]),_vm._v(" "),_c('code-example',{attrs:{"title":"Mini drawer always visible","component":_vm.examples['persistent-mini']}})],1),_vm._v(" "),_c('api-item',{attrs:{"title":"API - md-drawer"}},[_c('p',[_vm._v("The following options can be applied to any drawer:")]),_vm._v(" "),_c('api-table',{attrs:{"slot":"props","headings":_vm.drawer.props.headings,"props":_vm.drawer.props.props},slot:"props"}),_vm._v(" "),_c('api-table',{attrs:{"slot":"events","headings":_vm.drawer.events.headings,"props":_vm.drawer.events.props},slot:"events"})],1),_vm._v(" "),_c('api-item',{attrs:{"title":"API - Swipeable"}},[_c('p',[_vm._v("The following options can be applied to any "),_c('code',[_vm._v("md-drawer")]),_vm._v(" component that is using "),_c('code',[_vm._v("md-swipeable")]),_vm._v(" prop.")]),_vm._v(" "),_c('api-table',{attrs:{"slot":"props","headings":_vm.swipeable.props.headings,"props":_vm.swipeable.props.props},slot:"props"})],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});