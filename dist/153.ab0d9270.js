webpackJsonp([153],{

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/List/examples/Controls.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(55/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/List/examples/Controls.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('controls', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['controls'] = {
    name: 'controls',
    source: "<template>\n  <div class=\"full-control\">\n    <md-list>\n      <md-subheader>Notifications</md-subheader>\n\n      <md-list-item>\n        <md-checkbox v-model=\"notification\" value=\"preview\" />\n        <span class=\"md-list-item-text\">Show content preview</span>\n      </md-list-item>\n\n      <md-list-item>\n        <md-checkbox v-model=\"notification\" value=\"sound\" />\n        <span class=\"md-list-item-text\">Sound</span>\n      </md-list-item>\n\n      <md-list-item>\n        <md-checkbox v-model=\"notification\" value=\"vibrate\" />\n        <span class=\"md-list-item-text\">Vibrate</span>\n      </md-list-item>\n\n      <md-list-item>\n        <md-checkbox v-model=\"notification\" value=\"light\" />\n        <span class=\"md-list-item-text\">Notification light</span>\n      </md-list-item>\n    </md-list>\n\n    <md-list>\n      <md-subheader>Settings</md-subheader>\n\n      <md-list-item>\n        <md-icon>network_wifi</md-icon>\n        <span class=\"md-list-item-text\">WiFi</span>\n        <md-switch v-model=\"settings.wifi\" />\n      </md-list-item>\n\n      <md-list-item>\n        <md-icon>bluetooth</md-icon>\n        <span class=\"md-list-item-text\">Bluetooth</span>\n        <md-switch v-model=\"settings.bluetooth\" />\n      </md-list-item>\n\n      <md-list-item>\n        <md-icon>data_usage</md-icon>\n        <span class=\"md-list-item-text\">Data Usage</span>\n      </md-list-item>\n    </md-list>\n\n    <md-list>\n      <md-subheader>Ringtone</md-subheader>\n\n      <md-list-item>\n        <md-radio v-model=\"ringtone\" value=\"joy\" />\n        <span class=\"md-list-item-text\">Joy</span>\n      </md-list-item>\n\n      <md-list-item>\n        <md-radio v-model=\"ringtone\" value=\"metal\" />\n        <span class=\"md-list-item-text\">Metal</span>\n      </md-list-item>\n\n      <md-list-item>\n        <md-radio v-model=\"ringtone\" value=\"peace\" />\n        <span class=\"md-list-item-text\">Peace</span>\n      </md-list-item>\n\n      <md-list-item>\n        <md-radio v-model=\"ringtone\" value=\"rock-night\" />\n        <span class=\"md-list-item-text\">Rock night</span>\n      </md-list-item>\n    </md-list>\n  </div>\n</template>\n\n<script>\n  export default {\n    name: 'Controls',\n    data: () => ({\n      ringtone: 'peace',\n      settings: {\n        wifi: true,\n        bluetooth: false\n      },\n      notification: ['sound', 'vibrate']\n    })\n  }\n</script>\n\n<style lang=\"scss\" scoped>\n  .full-control > .md-list {\n    width: 320px;\n    max-width: 100%;\n    height: 400px;\n    display: inline-block;\n    overflow: auto;\n    border: 1px solid rgba(#000, .12);\n    vertical-align: top;\n  }\n</style>\n"
  };
};

/***/ }),

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/List/examples/DoubleLine.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(54/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/List/examples/DoubleLine.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('double-line', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['double-line'] = {
    name: 'double-line',
    source: "<template>\n  <div>\n    <md-list class=\"md-double-line\">\n      <md-subheader>Phone</md-subheader>\n\n      <md-list-item>\n        <md-icon class=\"md-primary\">phone</md-icon>\n\n        <div class=\"md-list-item-text\">\n          <span>(650) 555-1234</span>\n          <span>Mobile</span>\n        </div>\n\n        <md-button class=\"md-icon-button md-list-action\">\n          <md-icon>sms</md-icon>\n        </md-button>\n      </md-list-item>\n\n      <md-list-item class=\"md-inset\">\n        <div class=\"md-list-item-text\">\n          <span>(650) 555-1234</span>\n          <span>Mobile</span>\n        </div>\n\n        <md-button class=\"md-icon-button md-list-action\">\n          <md-icon>sms</md-icon>\n        </md-button>\n      </md-list-item>\n\n      <md-divider></md-divider>\n\n      <md-subheader>Email</md-subheader>\n\n      <md-list-item>\n        <md-icon class=\"md-primary\">email</md-icon>\n\n        <div class=\"md-list-item-text\">\n          <span>aliconnors@example.com</span>\n          <span>Personal</span>\n        </div>\n      </md-list-item>\n\n      <md-list-item class=\"md-inset\">\n        <div class=\"md-list-item-text\">\n          <span>ali_connors@example.com</span>\n          <span>Work</span>\n        </div>\n      </md-list-item>\n    </md-list>\n\n    <md-list class=\"md-double-line md-dense\">\n      <md-subheader>Phone</md-subheader>\n\n      <md-list-item>\n        <md-icon class=\"md-primary\">phone</md-icon>\n\n        <div class=\"md-list-item-text\">\n          <span>(650) 555-1234</span>\n          <span>Mobile</span>\n        </div>\n\n        <md-button class=\"md-icon-button md-list-action\">\n          <md-icon>sms</md-icon>\n        </md-button>\n      </md-list-item>\n\n      <md-list-item class=\"md-inset\">\n        <div class=\"md-list-item-text\">\n          <span>(650) 555-1234</span>\n          <span>Mobile</span>\n        </div>\n\n        <md-button class=\"md-icon-button md-list-action\">\n          <md-icon>sms</md-icon>\n        </md-button>\n      </md-list-item>\n\n      <md-divider></md-divider>\n\n      <md-subheader>Email</md-subheader>\n\n      <md-list-item>\n        <md-icon class=\"md-primary\">email</md-icon>\n\n        <div class=\"md-list-item-text\">\n          <span>aliconnors@example.com</span>\n          <span>Personal</span>\n        </div>\n      </md-list-item>\n\n      <md-list-item class=\"md-inset\">\n        <div class=\"md-list-item-text\">\n          <span>ali_connors@example.com</span>\n          <span>Work</span>\n        </div>\n      </md-list-item>\n    </md-list>\n  </div>\n</template>\n\n<script>\nexport default {\n  name: 'DoubleLine'\n}\n</script>\n\n<style lang=\"scss\" scoped>\n  .md-list {\n    width: 320px;\n    max-width: 100%;\n    display: inline-block;\n    vertical-align: top;\n    border: 1px solid rgba(#000, .12);\n  }\n</style>\n"
  };
};

/***/ }),

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/List/examples/ListExpansion.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(53/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/List/examples/ListExpansion.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('list-expansion', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['list-expansion'] = {
    name: 'list-expansion',
    source: "<template>\n  <div class=\"full-control\">\n    <div class=\"list\">\n      <md-list :md-expand-single=\"expandSingle\">\n        <md-list-item md-expand :md-expanded.sync=\"expandNews\">\n          <md-icon>whatshot</md-icon>\n          <span class=\"md-list-item-text\">News</span>\n\n          <md-list slot=\"md-expand\">\n            <md-list-item class=\"md-inset\">World</md-list-item>\n            <md-list-item class=\"md-inset\">Europe</md-list-item>\n            <md-list-item class=\"md-inset\">South America</md-list-item>\n          </md-list>\n        </md-list-item>\n\n        <md-list-item md-expand>\n          <md-icon>videogame_asset</md-icon>\n          <span class=\"md-list-item-text\">Games</span>\n\n          <md-list slot=\"md-expand\">\n            <md-list-item class=\"md-inset\">Console</md-list-item>\n            <md-list-item class=\"md-inset\">PC</md-list-item>\n            <md-list-item class=\"md-inset\">Phone</md-list-item>\n          </md-list>\n        </md-list-item>\n\n        <md-list-item md-expand>\n          <md-icon>video_library</md-icon>\n          <span class=\"md-list-item-text\">Video</span>\n\n          <md-list slot=\"md-expand\">\n            <md-list-item class=\"md-inset\">Humor</md-list-item>\n            <md-list-item class=\"md-inset\">Music</md-list-item>\n            <md-list-item class=\"md-inset\">Movies</md-list-item>\n            <md-list-item class=\"md-inset\">TV Shows</md-list-item>\n          </md-list>\n        </md-list-item>\n\n        <md-list-item>\n          <md-icon>shopping_basket</md-icon>\n          <span class=\"md-list-item-text\">Shop</span>\n        </md-list-item>\n      </md-list>\n    </div>\n    <div class=\"control\">\n      <md-switch v-model=\"expandSingle\">Expand Only One</md-switch>\n      <md-checkbox v-model=\"expandNews\">Expand News</md-checkbox>\n    </div>\n  </div>\n</template>\n\n<script>\n  export default {\n    name: 'ListExpansion',\n\n    data () {\n      return {\n        expandNews: false,\n        expandSingle: false\n      }\n    }\n  }\n</script>\n\n<style lang=\"scss\" scoped>\n  $list-width: 320px;\n\n  .full-control {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap-reverse;\n  }\n\n  .list {\n    width: $list-width;\n  }\n\n  .full-control > .md-list {\n    width: $list-width;\n    max-width: 100%;\n    height: 400px;\n    display: inline-block;\n    overflow: auto;\n    border: 1px solid rgba(#000, .12);\n    vertical-align: top;\n  }\n\n  .control {\n    min-width: 250px;\n    display: flex;\n    flex-direction: column;\n    padding: 16px;\n  }\n</style>\n"
  };
};

/***/ }),

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/List/examples/ListTypes.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(52/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/List/examples/ListTypes.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('list-types', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['list-types'] = {
    name: 'list-types',
    source: "<template>\n  <div>\n    <md-list>\n      <md-list-item>Plain Text</md-list-item>\n      <md-list-item @click=\"alert\">Button</md-list-item>\n      <md-list-item href=\"https://google.com\" target=\"_blank\">Link</md-list-item>\n      <md-list-item to=\"/components/list\" exact>Router <code>/</code></md-list-item>\n      <md-list-item to=\"/components/list/router\">Router <code>/router/**</code></md-list-item>\n    </md-list>\n    <md-list>\n      <md-list-item to=\"/components/list/router/1\">Router <code>/router/1</code></md-list-item>\n      <md-list-item to=\"/components/list/router/2\">Router <code>/router/2</code></md-list-item>\n    </md-list>\n  </div>\n</template>\n\n<script>\nexport default {\n  name: 'ListTypes',\n  methods: {\n    alert () {\n      window.alert('...')\n    }\n  }\n}\n</script>\n\n<style lang=\"scss\" scoped>\n  .md-list {\n    width: 320px;\n    max-width: 100%;\n    display: inline-block;\n    vertical-align: top;\n    border: 1px solid rgba(#000, .12);\n  }\n</style>\n"
  };
};

/***/ }),

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/List/examples/SingleLine.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(51/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/List/examples/SingleLine.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('single-line', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['single-line'] = {
    name: 'single-line',
    source: "<template>\n  <div>\n    <md-list>\n      <md-list-item>\n        <md-icon>move_to_inbox</md-icon>\n        <span class=\"md-list-item-text\">Inbox</span>\n      </md-list-item>\n\n      <md-list-item>\n        <md-icon>send</md-icon>\n        <span class=\"md-list-item-text\">Sent Mail</span>\n      </md-list-item>\n\n      <md-list-item>\n        <md-icon>delete</md-icon>\n        <span class=\"md-list-item-text\">Trash</span>\n      </md-list-item>\n\n      <md-list-item>\n        <md-icon>error</md-icon>\n        <span class=\"md-list-item-text\">Spam</span>\n      </md-list-item>\n\n      <md-divider class=\"md-inset\"></md-divider>\n\n      <md-list-item>\n        <md-avatar>\n          <img src=\"https://placeimg.com/40/40/people/5\" alt=\"People\">\n        </md-avatar>\n\n        <span class=\"md-list-item-text\">Abbey Christansen</span>\n\n        <md-button class=\"md-icon-button md-list-action\">\n          <md-icon class=\"md-primary\">chat_bubble</md-icon>\n        </md-button>\n      </md-list-item>\n\n      <md-list-item>\n        <md-avatar>\n          <img src=\"https://placeimg.com/40/40/people/1\" alt=\"People\">\n        </md-avatar>\n\n        <span class=\"md-list-item-text\">Alex Nelson</span>\n\n        <md-button class=\"md-icon-button md-list-action\">\n          <md-icon class=\"md-primary\">chat_bubble</md-icon>\n        </md-button>\n      </md-list-item>\n\n      <md-list-item>\n        <md-avatar>\n          <img src=\"https://placeimg.com/40/40/people/6\" alt=\"People\">\n        </md-avatar>\n\n        <span class=\"md-list-item-text\">Mary Johnson</span>\n\n        <md-button class=\"md-icon-button md-list-action\">\n          <md-icon>chat_bubble</md-icon>\n        </md-button>\n      </md-list-item>\n    </md-list>\n\n    <md-list class=\"md-dense\">\n      <md-list-item>\n        <md-icon>move_to_inbox</md-icon>\n        <span class=\"md-list-item-text\">Inbox</span>\n      </md-list-item>\n\n      <md-list-item>\n        <md-icon>send</md-icon>\n        <span class=\"md-list-item-text\">Sent Mail</span>\n      </md-list-item>\n\n      <md-list-item>\n        <md-icon>delete</md-icon>\n        <span class=\"md-list-item-text\">Trash</span>\n      </md-list-item>\n\n      <md-list-item>\n        <md-icon>error</md-icon>\n        <span class=\"md-list-item-text\">Spam</span>\n      </md-list-item>\n\n      <md-divider class=\"md-inset\"></md-divider>\n\n      <md-list-item>\n        <md-avatar>\n          <img src=\"https://placeimg.com/40/40/people/5\" alt=\"People\">\n        </md-avatar>\n\n        <span class=\"md-list-item-text\">Abbey Christansen</span>\n\n        <md-button class=\"md-icon-button md-list-action\">\n          <md-icon class=\"md-primary\">chat_bubble</md-icon>\n        </md-button>\n      </md-list-item>\n\n      <md-list-item>\n        <md-avatar>\n          <img src=\"https://placeimg.com/40/40/people/1\" alt=\"People\">\n        </md-avatar>\n\n        <span class=\"md-list-item-text\">Alex Nelson</span>\n\n        <md-button class=\"md-icon-button md-list-action\">\n          <md-icon class=\"md-primary\">chat_bubble</md-icon>\n        </md-button>\n      </md-list-item>\n\n      <md-list-item>\n        <md-avatar>\n          <img src=\"https://placeimg.com/40/40/people/6\" alt=\"People\">\n        </md-avatar>\n\n        <span class=\"md-list-item-text\">Mary Johnson</span>\n\n        <md-button class=\"md-icon-button md-list-action\">\n          <md-icon>chat_bubble</md-icon>\n        </md-button>\n      </md-list-item>\n    </md-list>\n  </div>\n</template>\n\n<script>\nexport default {\n  name: 'SingleLine'\n}\n</script>\n\n<style lang=\"scss\" scoped>\n  .md-list {\n    width: 320px;\n    max-width: 100%;\n    display: inline-block;\n    vertical-align: top;\n    border: 1px solid rgba(#000, .12);\n  }\n</style>\n"
  };
};

/***/ }),

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/List/examples/TripleLine.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(50/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/List/examples/TripleLine.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('triple-line', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['triple-line'] = {
    name: 'triple-line',
    source: "<template>\n  <div>\n    <md-list class=\"md-triple-line\">\n      <md-list-item>\n        <md-avatar>\n          <img src=\"https://placeimg.com/40/40/people/1\" alt=\"People\">\n        </md-avatar>\n\n        <div class=\"md-list-item-text\">\n          <span>Ali Connors</span>\n          <span>Brunch this weekend?</span>\n          <p>I'll be in your neighborhood doing errands this week. Do you want to meet?</p>\n        </div>\n\n        <md-button class=\"md-icon-button md-list-action\">\n          <md-icon class=\"md-primary\">star</md-icon>\n        </md-button>\n      </md-list-item>\n\n      <md-divider class=\"md-inset\"></md-divider>\n\n      <md-list-item>\n        <md-avatar>\n          <img src=\"https://placeimg.com/40/40/people/6\" alt=\"People\">\n        </md-avatar>\n\n        <div class=\"md-list-item-text\">\n          <span>me, Scott, Jennifer</span>\n          <span>Summer BBQ</span>\n          <p>Wish I could come, but I'm out of town this week. :(</p>\n        </div>\n\n        <md-button class=\"md-icon-button md-list-action\">\n          <md-icon>star_border</md-icon>\n        </md-button>\n      </md-list-item>\n\n      <md-divider class=\"md-inset\"></md-divider>\n\n      <md-list-item>\n        <md-avatar>\n          <img src=\"https://placeimg.com/40/40/people/5\" alt=\"People\">\n        </md-avatar>\n\n        <div class=\"md-list-item-text\">\n          <span>Sandra Adams</span>\n          <span>Oui oui</span>\n          <p>Do you have Paris recommendations? Have you visited good places?</p>\n        </div>\n\n        <md-button class=\"md-icon-button md-list-action\">\n          <md-icon>star_border</md-icon>\n        </md-button>\n      </md-list-item>\n\n      <md-divider class=\"md-inset\"></md-divider>\n\n      <md-list-item>\n        <md-avatar>\n          <img src=\"https://placeimg.com/40/40/people/8\" alt=\"People\">\n        </md-avatar>\n\n        <div class=\"md-list-item-text\">\n          <span>Trevor Hansen</span>\n          <span>Order confirmation</span>\n          <p>Thank you for your recent order from Amazon</p>\n        </div>\n\n        <md-button class=\"md-icon-button md-list-action\">\n          <md-icon>star_border</md-icon>\n        </md-button>\n      </md-list-item>\n    </md-list>\n\n    <md-list class=\"md-triple-line md-dense\">\n      <md-list-item>\n        <md-avatar>\n          <img src=\"https://placeimg.com/40/40/people/1\" alt=\"People\">\n        </md-avatar>\n\n        <div class=\"md-list-item-text\">\n          <span>Ali Connors</span>\n          <span>Brunch this weekend?</span>\n          <p>I'll be in your neighborhood doing errands this week. Do you want to meet?</p>\n        </div>\n\n        <md-button class=\"md-icon-button md-list-action\">\n          <md-icon class=\"md-primary\">star</md-icon>\n        </md-button>\n      </md-list-item>\n\n      <md-divider class=\"md-inset\"></md-divider>\n\n      <md-list-item>\n        <md-avatar>\n          <img src=\"https://placeimg.com/40/40/people/6\" alt=\"People\">\n        </md-avatar>\n\n        <div class=\"md-list-item-text\">\n          <span>me, Scott, Jennifer</span>\n          <span>Summer BBQ</span>\n          <p>Wish I could come, but I'm out of town this week. :(</p>\n        </div>\n\n        <md-button class=\"md-icon-button md-list-action\">\n          <md-icon>star_border</md-icon>\n        </md-button>\n      </md-list-item>\n\n      <md-divider class=\"md-inset\"></md-divider>\n\n      <md-list-item>\n        <md-avatar>\n          <img src=\"https://placeimg.com/40/40/people/5\" alt=\"People\">\n        </md-avatar>\n\n        <div class=\"md-list-item-text\">\n          <span>Sandra Adams</span>\n          <span>Oui oui</span>\n          <p>Do you have Paris recommendations? Have you visited good places?</p>\n        </div>\n\n        <md-button class=\"md-icon-button md-list-action\">\n          <md-icon>star_border</md-icon>\n        </md-button>\n      </md-list-item>\n\n      <md-divider class=\"md-inset\"></md-divider>\n\n      <md-list-item>\n        <md-avatar>\n          <img src=\"https://placeimg.com/40/40/people/8\" alt=\"People\">\n        </md-avatar>\n\n        <div class=\"md-list-item-text\">\n          <span>Trevor Hansen</span>\n          <span>Order confirmation</span>\n          <p>Thank you for your recent order from Amazon</p>\n        </div>\n\n        <md-button class=\"md-icon-button md-list-action\">\n          <md-icon>star_border</md-icon>\n        </md-button>\n      </md-list-item>\n    </md-list>\n  </div>\n</template>\n\n<script>\nexport default {\n  name: 'TripleLine'\n}\n</script>\n\n<style lang=\"scss\" scoped>\n  .md-list {\n    width: 320px;\n    max-width: 100%;\n    display: inline-block;\n    vertical-align: top;\n    border: 1px solid rgba(#000, .12);\n  }\n</style>\n"
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

/***/ "./docs/app/pages/Components/List/List.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_List_vue__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?cacheDirectory=true!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./docs/app/pages/Components/List/List.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_List_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_List_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_List_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, (function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_List_vue__[key]; })) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f0bdad62_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_List_vue__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-f0bdad62\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./docs/app/pages/Components/List/List.vue");
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_List_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f0bdad62_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_List_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* customBlocks */
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/List/examples/SingleLine.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/List/examples/DoubleLine.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/List/examples/TripleLine.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/List/examples/ListTypes.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/List/examples/ListExpansion.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/List/examples/Controls.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}


/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?cacheDirectory=true!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./docs/app/pages/Components/List/List.vue":
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
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  name: 'DocList',
  mixins: [_docsExample2.default],
  data: function data() {
    return {
      interactionEvents: _MdInteractionEvents2.default,
      list: {
        props: {
          headings: ['Name', 'Description', 'Default'],
          props: [{
            name: 'md-expand-single',
            type: 'Boolean',
            description: 'If set true, one expandable list item could be expanded at most at a time. The expanded list item will be collapsed when another is expanded',
            defaults: 'false'
          }]
        },
        classes: {
          headings: ['Name', 'Description'],
          props: [{
            name: 'md-dense',
            description: 'Enables the dense layout'
          }, {
            name: 'md-double-line',
            description: 'The double line lists are good to show additional information about single items'
          }, {
            name: 'md-triple-line',
            description: 'The three line lists are great for showing a preview of the full content of the item'
          }]
        }
      },
      item: {
        props: {
          headings: ['Name', 'Description', 'Default'],
          props: [{
            name: 'md-expand',
            type: 'Boolean',
            description: 'Enables the expansion panel',
            defaults: 'false'
          }, {
            name: 'md-expanded',
            type: 'Boolean',
            description: 'The prop to show/hide the expansion panel. Should be used with the <code>.sync</code> modifier',
            defaults: 'false'
          }]
        }
      }
    };
  }
};

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-f0bdad62\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./docs/app/pages/Components/List/List.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('page-container',{attrs:{"centered":"","title":_vm.$t('pages.list.title')}},[_c('div',{staticClass:"page-container-section"},[_c('p',[_vm._v("Lists present multiple line items vertically as a single continuous element and are best suited for similar data types.")]),_vm._v(" "),_c('p',[_vm._v("They can have one, two or three lines of content, with a lot of different contents. Even that the examples on this page may look like that lists can only be used in mobile viewport, you can and should use them in desktop too.")]),_vm._v(" "),_c('p',[_vm._v("List items can have interaction events, like click and mousedown events. They also integrate nicely with Vue Router.")])]),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('h2',[_vm._v("List")]),_vm._v(" "),_c('p',[_vm._v("Single line lists are really great for navigational elements, such as drawers. You can pass a icons, text and actions to them. They have also a dense layout, to accommodate more items on the screen:")]),_vm._v(" "),_c('code-example',{attrs:{"title":"Single Line","component":_vm.examples['single-line']}})],1),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('p',[_vm._v("The double line lists are good to show additional information about single items:")]),_vm._v(" "),_c('code-example',{attrs:{"title":"Double Line","component":_vm.examples['double-line']}})],1),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('p',[_vm._v("The three line lists are great for showing a preview of the full content of the item. It's good for email lists and other information like that:")]),_vm._v(" "),_c('code-example',{attrs:{"title":"Triple Line","component":_vm.examples['triple-line']}})],1),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('h2',[_vm._v("List Actions")]),_vm._v(" "),_c('p',[_vm._v("List items will render different tags based on the interaction types given.")]),_vm._v(" "),_c('p',[_vm._v("If you pass one of those event, the item will automatically render a "),_c('code',[_vm._v("button")]),_vm._v(":")]),_vm._v(" "),_c('ul',_vm._l((_vm.interactionEvents),(function(event){return _c('li',{key:event},[_vm._v(_vm._s(event))])})),0),_vm._v(" "),_c('p',[_vm._v("If you pass a "),_c('code',[_vm._v("href")]),_vm._v(" attribute, the item will automatically render an "),_c('code',[_vm._v("a")]),_vm._v(" tag.")]),_vm._v(" "),_c('p',[_vm._v("All "),_c('a',{attrs:{"href":"https://router.vuejs.org/en/api/router-link.html","target":"_blank"}},[_vm._v("options")]),_vm._v(" of "),_c('code',[_vm._v("router-link")]),_vm._v(" can be simply used here. This will render an "),_c('code',[_vm._v("a")]),_vm._v(" tag:")]),_vm._v(" "),_c('code-example',{attrs:{"title":"Different types","component":_vm.examples['list-types']}})],1),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('p',[_vm._v("Lists accept controls as main toggle actions. Really useful to improve form layouts:")]),_vm._v(" "),_c('code-example',{attrs:{"title":"Controls","component":_vm.examples['controls']}})],1),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('p',[_vm._v("Lists can have expansion panels to reveal more options:")]),_vm._v(" "),_c('code-example',{attrs:{"title":"Expansion","component":_vm.examples['list-expansion']}}),_vm._v(" "),_c('api-item',{attrs:{"title":"API - md-list"}},[_c('p',[_vm._v("The following options can be applied to any list:")]),_vm._v(" "),_c('api-table',{attrs:{"slot":"props","headings":_vm.list.props.headings,"props":_vm.list.props.props},slot:"props"}),_vm._v(" "),_c('api-table',{attrs:{"slot":"classes","headings":_vm.list.classes.headings,"props":_vm.list.classes.props},slot:"classes"})],1),_vm._v(" "),_c('api-item',{attrs:{"title":"API - md-list-item"}},[_c('p',[_vm._v("The following options can be applied to any list item. All "),_c('a',{attrs:{"href":"https://router.vuejs.org/en/api/router-link.html","target":"_blank"}},[_vm._v("options")]),_vm._v(" of "),_c('code',[_vm._v("router-link")]),_vm._v(" can be simply used here:")]),_vm._v(" "),_c('api-table',{attrs:{"slot":"props","headings":_vm.item.props.headings,"props":_vm.item.props.props},slot:"props"})],1)],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});