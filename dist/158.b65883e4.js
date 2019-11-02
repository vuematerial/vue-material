webpackJsonp([158],{

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/App/examples/Flexible.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(101/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/App/examples/Flexible.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('flexible', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['flexible'] = {
    name: 'flexible',
    source: "<template>\n  <div class=\"page-container\">\n    <md-app md-waterfall md-mode=\"flexible\">\n      <md-app-toolbar class=\"md-large md-primary\">\n        <div class=\"md-toolbar-row\">\n          <div class=\"md-toolbar-section-start\">\n            <md-button class=\"md-icon-button\" @click=\"menuVisible = !menuVisible\">\n              <md-icon>menu</md-icon>\n            </md-button>\n          </div>\n\n          <div class=\"md-toolbar-section-end\">\n            <md-button class=\"md-icon-button\">\n              <md-icon>more_vert</md-icon>\n            </md-button>\n          </div>\n        </div>\n\n        <div class=\"md-toolbar-row md-toolbar-offset\">\n          <span class=\"md-display-1\">My Title</span>\n        </div>\n      </md-app-toolbar>\n\n      <md-app-drawer :md-active.sync=\"menuVisible\">\n        <md-toolbar class=\"md-transparent\" md-elevation=\"0\">Navigation</md-toolbar>\n\n        <md-list>\n          <md-list-item>\n            <md-icon>move_to_inbox</md-icon>\n            <span class=\"md-list-item-text\">Inbox</span>\n          </md-list-item>\n\n          <md-list-item>\n            <md-icon>send</md-icon>\n            <span class=\"md-list-item-text\">Sent Mail</span>\n          </md-list-item>\n\n          <md-list-item>\n            <md-icon>delete</md-icon>\n            <span class=\"md-list-item-text\">Trash</span>\n          </md-list-item>\n\n          <md-list-item>\n            <md-icon>error</md-icon>\n            <span class=\"md-list-item-text\">Spam</span>\n          </md-list-item>\n        </md-list>\n      </md-app-drawer>\n\n      <md-app-content>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>\n      </md-app-content>\n    </md-app>\n  </div>\n</template>\n\n<style lang=\"scss\" scoped>\n  .md-app {\n    max-height: 400px;\n    border: 1px solid rgba(#000, .12);\n  }\n\n  .md-app-toolbar {\n    height: 196px;\n  }\n\n   // Demo purposes only\n  .md-drawer {\n    width: 230px;\n    max-width: calc(100vw - 125px);\n  }\n</style>\n\n<script>\nexport default {\n  name: 'Flexible',\n  data: () => ({\n    menuVisible: false\n  })\n}\n</script>\n"
  };
};

/***/ }),

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/App/examples/LastRowFixed.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(100/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/App/examples/LastRowFixed.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('last-row-fixed', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['last-row-fixed'] = {
    name: 'last-row-fixed',
    source: "<template>\n  <div class=\"page-container\">\n    <md-app md-waterfall md-mode=\"fixed-last\">\n      <md-app-toolbar class=\"md-large md-dense md-primary\">\n        <div class=\"md-toolbar-row\">\n          <div class=\"md-toolbar-section-start\">\n            <md-button class=\"md-icon-button\" @click=\"menuVisible = !menuVisible\">\n              <md-icon>menu</md-icon>\n            </md-button>\n\n            <span class=\"md-title\">My Title</span>\n          </div>\n\n          <div class=\"md-toolbar-section-end\">\n            <md-button class=\"md-icon-button\">\n              <md-icon>more_vert</md-icon>\n            </md-button>\n          </div>\n        </div>\n\n        <div class=\"md-toolbar-row\">\n          <md-tabs class=\"md-primary\">\n            <md-tab id=\"tab-home\" md-label=\"Home\"></md-tab>\n            <md-tab id=\"tab-pages\" md-label=\"Pages\"></md-tab>\n            <md-tab id=\"tab-posts\" md-label=\"Posts\"></md-tab>\n            <md-tab id=\"tab-favorites\" md-label=\"Favorites\"></md-tab>\n          </md-tabs>\n        </div>\n      </md-app-toolbar>\n\n      <md-app-drawer :md-active.sync=\"menuVisible\">\n        <md-toolbar class=\"md-transparent\" md-elevation=\"0\">Navigation</md-toolbar>\n\n        <md-list>\n          <md-list-item>\n            <md-icon>move_to_inbox</md-icon>\n            <span class=\"md-list-item-text\">Inbox</span>\n          </md-list-item>\n\n          <md-list-item>\n            <md-icon>send</md-icon>\n            <span class=\"md-list-item-text\">Sent Mail</span>\n          </md-list-item>\n\n          <md-list-item>\n            <md-icon>delete</md-icon>\n            <span class=\"md-list-item-text\">Trash</span>\n          </md-list-item>\n\n          <md-list-item>\n            <md-icon>error</md-icon>\n            <span class=\"md-list-item-text\">Spam</span>\n          </md-list-item>\n        </md-list>\n      </md-app-drawer>\n\n      <md-app-content>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>\n      </md-app-content>\n    </md-app>\n  </div>\n</template>\n\n<style lang=\"scss\" scoped>\n  .md-app {\n    max-height: 400px;\n    border: 1px solid rgba(#000, .12);\n  }\n\n   // Demo purposes only\n  .md-drawer {\n    width: 230px;\n    max-width: calc(100vw - 125px);\n  }\n</style>\n\n<script>\nexport default {\n  name: 'LastRowFixed',\n  data: () => ({\n    menuVisible: false\n  })\n}\n</script>\n"
  };
};

/***/ }),

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/App/examples/Normal.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(99/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/App/examples/Normal.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('normal', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['normal'] = {
    name: 'normal',
    source: "<template>\n  <div class=\"page-container\">\n    <md-app>\n      <md-app-toolbar class=\"md-primary\">\n        <span class=\"md-title\">My Title</span>\n      </md-app-toolbar>\n\n      <md-app-drawer md-permanent=\"full\">\n        <md-toolbar class=\"md-transparent\" md-elevation=\"0\">\n          Navigation\n        </md-toolbar>\n\n        <md-list>\n          <md-list-item>\n            <md-icon>move_to_inbox</md-icon>\n            <span class=\"md-list-item-text\">Inbox</span>\n          </md-list-item>\n\n          <md-list-item>\n            <md-icon>send</md-icon>\n            <span class=\"md-list-item-text\">Sent Mail</span>\n          </md-list-item>\n\n          <md-list-item>\n            <md-icon>delete</md-icon>\n            <span class=\"md-list-item-text\">Trash</span>\n          </md-list-item>\n\n          <md-list-item>\n            <md-icon>error</md-icon>\n            <span class=\"md-list-item-text\">Spam</span>\n          </md-list-item>\n        </md-list>\n      </md-app-drawer>\n\n      <md-app-content>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>\n      </md-app-content>\n    </md-app>\n  </div>\n</template>\n\n<style lang=\"scss\" scoped>\n  .md-app {\n    max-height: 400px;\n    border: 1px solid rgba(#000, .12);\n  }\n\n   // Demo purposes only\n  .md-drawer {\n    width: 230px;\n    max-width: calc(100vw - 125px);\n  }\n</style>\n\n<script>\nexport default {\n  name: 'Normal'\n}\n</script>\n"
  };
};

/***/ }),

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/App/examples/Overlap.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(98/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/App/examples/Overlap.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('overlap', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['overlap'] = {
    name: 'overlap',
    source: "<template>\n  <div class=\"page-container\">\n    <md-app md-waterfall md-mode=\"overlap\">\n      <md-app-toolbar class=\"md-primary md-large\">\n        <div class=\"md-toolbar-row\">\n          <md-button class=\"md-icon-button\" @click=\"menuVisible = !menuVisible\">\n            <md-icon>menu</md-icon>\n          </md-button>\n\n          <span class=\"md-title\">My Title</span>\n        </div>\n      </md-app-toolbar>\n\n      <md-app-drawer :md-active.sync=\"menuVisible\">\n        <md-toolbar class=\"md-transparent\" md-elevation=\"0\">\n          Navigation\n        </md-toolbar>\n\n        <md-list>\n          <md-list-item>\n            <md-icon>move_to_inbox</md-icon>\n            <span class=\"md-list-item-text\">Inbox</span>\n          </md-list-item>\n\n          <md-list-item>\n            <md-icon>send</md-icon>\n            <span class=\"md-list-item-text\">Sent Mail</span>\n          </md-list-item>\n\n          <md-list-item>\n            <md-icon>delete</md-icon>\n            <span class=\"md-list-item-text\">Trash</span>\n          </md-list-item>\n\n          <md-list-item>\n            <md-icon>error</md-icon>\n            <span class=\"md-list-item-text\">Spam</span>\n          </md-list-item>\n        </md-list>\n      </md-app-drawer>\n\n      <md-app-content>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>\n      </md-app-content>\n    </md-app>\n  </div>\n</template>\n\n<style lang=\"scss\" scoped>\n  .md-app {\n    max-height: 400px;\n    border: 1px solid rgba(#000, .12);\n  }\n\n   // Demo purposes only\n  .md-drawer {\n    width: 230px;\n    max-width: calc(100vw - 125px);\n  }\n</style>\n\n<script>\nexport default {\n  name: 'Overlap',\n  data: () => ({\n    menuVisible: false\n  })\n}\n</script>\n"
  };
};

/***/ }),

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/App/examples/Reveal.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(97/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/App/examples/Reveal.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('reveal', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['reveal'] = {
    name: 'reveal',
    source: "<template>\n  <div class=\"page-container\">\n    <md-app md-mode=\"reveal\">\n      <md-app-toolbar class=\"md-primary\">\n        <md-button class=\"md-icon-button\" @click=\"menuVisible = !menuVisible\">\n          <md-icon>menu</md-icon>\n        </md-button>\n        <span class=\"md-title\">My Title</span>\n      </md-app-toolbar>\n\n      <md-app-drawer :md-active.sync=\"menuVisible\">\n        <md-toolbar class=\"md-transparent\" md-elevation=\"0\">Navigation</md-toolbar>\n\n        <md-list>\n          <md-list-item>\n            <md-icon>move_to_inbox</md-icon>\n            <span class=\"md-list-item-text\">Inbox</span>\n          </md-list-item>\n\n          <md-list-item>\n            <md-icon>send</md-icon>\n            <span class=\"md-list-item-text\">Sent Mail</span>\n          </md-list-item>\n\n          <md-list-item>\n            <md-icon>delete</md-icon>\n            <span class=\"md-list-item-text\">Trash</span>\n          </md-list-item>\n\n          <md-list-item>\n            <md-icon>error</md-icon>\n            <span class=\"md-list-item-text\">Spam</span>\n          </md-list-item>\n        </md-list>\n      </md-app-drawer>\n\n      <md-app-content>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>\n      </md-app-content>\n    </md-app>\n  </div>\n</template>\n\n<style lang=\"scss\" scoped>\n  .md-app {\n    max-height: 400px;\n    border: 1px solid rgba(#000, .12);\n  }\n\n   // Demo purposes only\n  .md-drawer {\n    width: 230px;\n    max-width: calc(100vw - 125px);\n  }\n</style>\n\n<script>\nexport default {\n  name: 'Reveal',\n  data: () => ({\n    menuVisible: false\n  })\n}\n</script>\n"
  };
};

/***/ }),

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/App/examples/Waterfall.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(96/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/App/examples/Waterfall.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('waterfall', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['waterfall'] = {
    name: 'waterfall',
    source: "<template>\n  <div class=\"page-container\">\n    <md-app md-waterfall md-mode=\"fixed\">\n      <md-app-toolbar class=\"md-primary\">\n        <span class=\"md-title\">My Title</span>\n      </md-app-toolbar>\n\n      <md-app-drawer md-permanent=\"full\">\n        <md-toolbar class=\"md-transparent\" md-elevation=\"0\">\n          Navigation\n        </md-toolbar>\n\n        <md-list>\n          <md-list-item>\n            <md-icon>move_to_inbox</md-icon>\n            <span class=\"md-list-item-text\">Inbox</span>\n          </md-list-item>\n\n          <md-list-item>\n            <md-icon>send</md-icon>\n            <span class=\"md-list-item-text\">Sent Mail</span>\n          </md-list-item>\n\n          <md-list-item>\n            <md-icon>delete</md-icon>\n            <span class=\"md-list-item-text\">Trash</span>\n          </md-list-item>\n\n          <md-list-item>\n            <md-icon>error</md-icon>\n            <span class=\"md-list-item-text\">Spam</span>\n          </md-list-item>\n        </md-list>\n      </md-app-drawer>\n\n      <md-app-content>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>\n      </md-app-content>\n    </md-app>\n  </div>\n</template>\n\n<style lang=\"scss\" scoped>\n  .md-app {\n    max-height: 400px;\n    border: 1px solid rgba(#000, .12);\n  }\n\n   // Demo purposes only\n  .md-drawer {\n    width: 230px;\n    max-width: calc(100vw - 125px);\n  }\n</style>\n\n<script>\nexport default {\n  name: 'Waterfall'\n}\n</script>\n"
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

/***/ "./docs/app/pages/Components/App/App.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?cacheDirectory=true!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./docs/app/pages/Components/App/App.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, (function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__[key]; })) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5b1b9f39_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-5b1b9f39\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./docs/app/pages/Components/App/App.vue");
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5b1b9f39_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* customBlocks */
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/App/examples/Normal.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/App/examples/Waterfall.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/App/examples/Reveal.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/App/examples/Flexible.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/App/examples/LastRowFixed.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/App/examples/Overlap.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}


/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?cacheDirectory=true!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./docs/app/pages/Components/App/App.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _docsExample = __webpack_require__("./docs/app/mixins/docsExample.js");

var _docsExample2 = _interopRequireDefault(_docsExample);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'DocApp',
  mixins: [_docsExample2.default],
  data: function data() {
    return {
      api: {
        props: {
          headings: ['Name', 'Description', 'Default'],
          props: [{
            name: 'md-mode',
            type: 'String',
            description: this.$t('pages.app.props.mdMode'),
            defaults: 'null'
          }, {
            offset: true,
            name: 'md-mode="fixed"',
            type: 'String',
            description: this.$t('pages.app.props.mdModeFixed'),
            defaults: '-'
          }, {
            offset: true,
            name: 'md-mode="fixed-last"',
            type: 'String',
            description: this.$t('pages.app.props.mdModeFixedLast'),
            defaults: '-'
          }, {
            offset: true,
            name: 'md-mode="reveal"',
            type: 'String',
            description: this.$t('pages.app.props.mdModeReveal'),
            defaults: '-'
          }, {
            offset: true,
            name: 'md-mode="flexible"',
            type: 'String',
            description: this.$t('pages.app.props.mdModeFlexible'),
            defaults: '-'
          }, {
            offset: true,
            name: 'md-mode="overlap"',
            type: 'String',
            description: this.$t('pages.app.props.mdModeOverlap'),
            defaults: '-'
          }, {
            name: 'md-waterfall',
            type: 'Boolean',
            description: this.$t('pages.app.props.mdWaterfall'),
            defaults: 'false'
          }, {
            name: 'md-scrollbar',
            type: 'Boolean',
            description: this.$t('pages.app.props.mdScrollbar'),
            defaults: 'true'
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-5b1b9f39\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./docs/app/pages/Components/App/App.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('page-container',{attrs:{"centered":"","title":_vm.$t('pages.app.title')}},[_c('div',{staticClass:"page-container-section"},[_c('i18n',{attrs:{"path":"pages.app.intro.desc1","tag":"p"}}),_vm._v(" "),_c('i18n',{attrs:{"path":"pages.app.intro.desc2","tag":"p"}},[_c('code',[_vm._v("md-app")])]),_vm._v(" "),_c('i18n',{attrs:{"path":"pages.app.intro.desc3","tag":"p"}}),_vm._v(" "),_c('i18n',{attrs:{"path":"pages.app.intro.desc4","tag":"p"}},[_c('code',[_vm._v("md-app")]),_vm._v(" "),_c('code',[_vm._v("md-app-toolbar")]),_vm._v(" "),_c('code',[_vm._v("md-app-drawer")]),_vm._v(" "),_c('code',[_vm._v("md-app-content")]),_vm._v(" "),_c('code',[_vm._v("md-toolbar")]),_vm._v(" "),_c('code',[_vm._v("md-drawer")]),_vm._v(" "),_c('code',[_vm._v("md-content")])])],1),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('h2',[_vm._v(_vm._s(_vm.$t('pages.app.regular.title')))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(_vm.$t('pages.app.regular.desc1')))]),_vm._v(" "),_c('i18n',{attrs:{"tag":"note-block","tip":"","path":"pages.app.regular.desc2"}},[_c('code',[_vm._v("md-app")])]),_vm._v(" "),_c('code-example',{attrs:{"title":_vm.$t('pages.app.regular.default'),"component":_vm.examples['normal']}})],1),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('h2',[_vm._v(_vm._s(_vm.$t('pages.app.fixed.title')))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(_vm.$t('pages.app.fixed.desc')))]),_vm._v(" "),_c('code-example',{attrs:{"title":_vm.$t('pages.app.fixed.fixedWaterfall'),"component":_vm.examples['waterfall']}})],1),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('h2',[_vm._v(_vm._s(_vm.$t('pages.app.reveal.title')))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(_vm.$t('pages.app.reveal.desc')))]),_vm._v(" "),_c('code-example',{attrs:{"title":_vm.$t('pages.app.reveal.reveal'),"component":_vm.examples['reveal']}})],1),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('h2',[_vm._v(_vm._s(_vm.$t('pages.app.flexible.title')))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(_vm.$t('pages.app.flexible.desc')))]),_vm._v(" "),_c('code-example',{attrs:{"title":_vm.$t('pages.app.flexible.flexible'),"component":_vm.examples['flexible']}})],1),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('h2',[_vm._v(_vm._s(_vm.$t('pages.app.lastRow.title')))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(_vm.$t('pages.app.lastRow.desc')))]),_vm._v(" "),_c('code-example',{attrs:{"title":_vm.$t('pages.app.lastRow.fixed'),"component":_vm.examples['last-row-fixed']}})],1),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('h2',[_vm._v(_vm._s(_vm.$t('pages.app.overlap.title')))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(_vm.$t('pages.app.overlap.desc')))]),_vm._v(" "),_c('code-example',{attrs:{"title":_vm.$t('pages.app.overlap.content'),"component":_vm.examples['overlap']}})],1),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('api-item',{attrs:{"title":"API - md-app"}},[_c('p',[_vm._v(_vm._s(_vm.$t('pages.app.apiApp.desc')))]),_vm._v(" "),_c('ul',[_c('li',[_c('code',[_vm._v("md-app-toolbar")]),_vm._v(": "+_vm._s(_vm.$t('pages.app.apiApp.toolbar')))]),_vm._v(" "),_c('li',[_c('code',[_vm._v("md-app-drawer")]),_vm._v(": "+_vm._s(_vm.$t('pages.app.apiApp.drawer')))]),_vm._v(" "),_c('li',[_c('code',[_vm._v("md-app-content")]),_vm._v(": "+_vm._s(_vm.$t('pages.app.apiApp.content')))])]),_vm._v(" "),_c('note-block',{attrs:{"alert":""}},[_vm._v(_vm._s(_vm.$t('pages.app.apiApp.alert')))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(_vm.$t('pages.app.apiApp.propsDesc'))+":")]),_vm._v(" "),_c('api-table',{attrs:{"slot":"props","headings":_vm.api.props.headings,"props":_vm.api.props.props},slot:"props"})],1)],1),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('api-item',{attrs:{"title":"API - md-app-toolbar"}},[_c('i18n',{attrs:{"path":"pages.app.apiToolbar.desc","tag":"p"}},[_c('code',[_vm._v("md-toolbar")]),_vm._v(" "),_c('router-link',{attrs:{"to":"/components/toolbar"}},[_vm._v(_vm._s(_vm.$t('pages.app.apiToolbar.page')))])],1)],1)],1),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('api-item',{attrs:{"title":"API - md-app-drawer"}},[_c('i18n',{attrs:{"path":"pages.app.apiDrawer.desc","tag":"p"}},[_c('code',[_vm._v("md-drawer")]),_vm._v(" "),_c('router-link',{attrs:{"to":"/components/drawer"}},[_vm._v(_vm._s(_vm.$t('pages.app.apiDrawer.page')))])],1)],1)],1),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('api-item',{attrs:{"title":"API - md-app-content"}},[_c('i18n',{attrs:{"path":"pages.app.apiContent.desc","tag":"p"}},[_c('code',[_vm._v("md-content")]),_vm._v(" "),_c('router-link',{attrs:{"to":"/components/content"}},[_vm._v(_vm._s(_vm.$t('pages.app.apiContent.page')))])],1)],1)],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});