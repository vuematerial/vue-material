webpackJsonp([157],{

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/Card/examples/CardExpansion.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(79/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/Card/examples/CardExpansion.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('card-expansion', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['card-expansion'] = {
    name: 'card-expansion',
    source: "<template>\n  <div class=\"card-expansion\">\n    <md-card>\n      <md-card-media>\n        <img src=\"/assets/examples/card-image-1.jpg\" alt=\"People\">\n      </md-card-media>\n\n      <md-card-header>\n        <div class=\"md-title\">Title goes here</div>\n        <div class=\"md-subhead\">Subtitle here</div>\n      </md-card-header>\n\n      <md-card-expand>\n        <md-card-actions md-alignment=\"space-between\">\n          <div>\n            <md-button>Action</md-button>\n            <md-button>Action</md-button>\n          </div>\n\n          <md-card-expand-trigger>\n            <md-button class=\"md-icon-button\">\n              <md-icon>keyboard_arrow_down</md-icon>\n            </md-button>\n          </md-card-expand-trigger>\n        </md-card-actions>\n\n        <md-card-expand-content>\n          <md-card-content>\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.\n          </md-card-content>\n        </md-card-expand-content>\n      </md-card-expand>\n    </md-card>\n\n    <md-card>\n      <md-card-media>\n        <img src=\"/assets/examples/card-image-1.jpg\" alt=\"People\">\n      </md-card-media>\n\n      <md-card-header>\n        <div class=\"md-title\">Title goes here</div>\n        <div class=\"md-subhead\">Subtitle here</div>\n      </md-card-header>\n\n      <md-card-expand>\n        <md-card-actions md-alignment=\"space-between\">\n          <div>\n            <md-button>Action</md-button>\n          </div>\n\n          <md-card-expand-trigger>\n            <md-button>Learn more</md-button>\n          </md-card-expand-trigger>\n        </md-card-actions>\n\n        <md-card-expand-content>\n          <md-card-content>\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.\n          </md-card-content>\n        </md-card-expand-content>\n      </md-card-expand>\n    </md-card>\n  </div>\n</template>\n\n<script>\n  export default {\n    name: 'CardExpansion'\n  }\n</script>\n\n<style lang=\"scss\" scoped>\n  .card-expansion {\n    height: 480px;\n  }\n\n  .md-card {\n    width: 320px;\n    margin: 4px;\n    display: inline-block;\n    vertical-align: top;\n  }\n</style>\n"
  };
};

/***/ }),

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/Card/examples/Layouts.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(78/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/Card/examples/Layouts.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('layouts', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['layouts'] = {
    name: 'layouts',
    source: "<template>\n  <div>\n    <md-card>\n      <md-card-media>\n        <img src=\"/assets/examples/card-image-1.jpg\" alt=\"People\">\n      </md-card-media>\n\n      <md-card-header>\n        <div class=\"md-title\">Title goes here</div>\n        <div class=\"md-subhead\">Subtitle here</div>\n      </md-card-header>\n\n      <md-card-actions>\n        <md-button>Action</md-button>\n        <md-button>Action</md-button>\n      </md-card-actions>\n\n      <md-card-content>\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.\n      </md-card-content>\n    </md-card>\n\n    <md-card>\n      <md-card-header>\n        <md-avatar>\n          <img src=\"/assets/examples/avatar.png\" alt=\"Avatar\">\n        </md-avatar>\n\n        <div class=\"md-title\">Title goes here</div>\n        <div class=\"md-subhead\">Subtitle here</div>\n      </md-card-header>\n\n      <md-card-media>\n        <img src=\"/assets/examples/card-image-1.jpg\" alt=\"People\">\n      </md-card-media>\n\n      <md-card-content>\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea nostrum.\n      </md-card-content>\n\n      <md-card-actions>\n        <md-button>Action</md-button>\n        <md-button>Action</md-button>\n      </md-card-actions>\n    </md-card>\n\n    <md-card class=\"md-card-example\">\n      <md-card-area md-inset>\n        <md-card-media md-ratio=\"16:9\">\n          <img src=\"/assets/examples/card-example.jpg\" alt=\"Coffee House\">\n        </md-card-media>\n\n        <md-card-header>\n          <h2 class=\"md-title\">Coffee House</h2>\n          <div class=\"md-subhead\">\n            <md-icon>location_on</md-icon>\n            <span>2 miles</span>\n          </div>\n        </md-card-header>\n\n        <md-card-content>\n          Illy Coffee served with a complimentary Leonidas Belgian Chocolate with all beverages.\n        </md-card-content>\n      </md-card-area>\n\n      <md-card-content>\n        <h3 class=\"md-subheading\">Today's availability</h3>\n        <div class=\"card-reservation\">\n          <md-icon>access_time</md-icon>\n          <div class=\"md-button-group\">\n            <md-button>5:30PM</md-button>\n            <md-button>7:30PM</md-button>\n            <md-button>9:00PM</md-button>\n          </div>\n        </div>\n      </md-card-content>\n\n      <md-card-actions>\n        <md-button class=\"md-primary\">Reserve</md-button>\n      </md-card-actions>\n    </md-card>\n\n    <md-card>\n      <md-card-area>\n        <md-card-media>\n          <img src=\"/assets/examples/card-image-1.jpg\" alt=\"People\">\n        </md-card-media>\n\n        <md-card-header>\n          <div class=\"md-title\">Actions left aligned</div>\n          <div class=\"md-subhead\">Subtitle here</div>\n        </md-card-header>\n\n        <md-card-content>\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.\n        </md-card-content>\n      </md-card-area>\n\n      <md-card-actions md-alignment=\"left\">\n        <md-button>Action</md-button>\n        <md-button>Action</md-button>\n      </md-card-actions>\n    </md-card>\n\n    <md-card>\n      <md-card-media>\n        <md-ripple>\n          <img src=\"/assets/examples/card-image-1.jpg\" alt=\"People\">\n        </md-ripple>\n      </md-card-media>\n\n      <md-card-actions>\n        <md-button class=\"md-icon-button\">\n          <md-icon>favorite</md-icon>\n        </md-button>\n\n        <md-button class=\"md-icon-button\">\n          <md-icon>bookmark</md-icon>\n        </md-button>\n\n        <md-button class=\"md-icon-button\">\n          <md-icon>share</md-icon>\n        </md-button>\n      </md-card-actions>\n    </md-card>\n\n    <md-card>\n      <md-card-media>\n        <img src=\"/assets/examples/card-image-2.jpg\" alt=\"People\">\n      </md-card-media>\n\n      <md-card-content>\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea nostrum.\n      </md-card-content>\n    </md-card>\n\n    <md-card>\n      <md-card-header>\n        <md-card-header-text>\n          <div class=\"md-title\">Actions left aligned</div>\n          <div class=\"md-subhead\">Subtitle here</div>\n        </md-card-header-text>\n\n        <md-menu md-size=\"big\" md-direction=\"bottom-end\">\n          <md-button class=\"md-icon-button\" md-menu-trigger>\n            <md-icon>more_vert</md-icon>\n          </md-button>\n\n          <md-menu-content>\n            <md-menu-item @click=\"doACall\">\n              <span>Call</span>\n              <md-icon>phone</md-icon>\n            </md-menu-item>\n\n            <md-menu-item @click=\"sendMessage\">\n              <span>Send a message</span>\n              <md-icon>message</md-icon>\n            </md-menu-item>\n          </md-menu-content>\n        </md-menu>\n      </md-card-header>\n\n      <md-card-content>\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.\n      </md-card-content>\n\n      <md-card-actions md-alignment=\"left\">\n        <md-button>Action</md-button>\n        <md-button>Action</md-button>\n      </md-card-actions>\n    </md-card>\n  </div>\n</template>\n\n<script>\n  export default {\n    name: 'Layouts',\n    methods: {\n      sendMessage () {\n        window.alert('Send a message...')\n      },\n      doACall () {\n        window.alert('Calling someone...')\n      }\n    }\n  }\n</script>\n\n<style lang=\"scss\" scoped>\n  .md-card {\n    width: 320px;\n    margin: 4px;\n    display: inline-block;\n    vertical-align: top;\n  }\n\n  .md-card-example {\n    .md-subhead {\n      .md-icon {\n        $size: 16px;\n\n        width: $size;\n        min-width: $size;\n        height: $size;\n        font-size: $size !important;\n      }\n\n      span {\n        vertical-align: middle;\n      }\n    }\n\n    .card-reservation {\n      margin-top: 8px;\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n\n      .md-icon {\n        margin: 8px;\n      }\n    }\n\n    .md-button-group {\n      display: flex;\n\n      .md-button {\n        min-width: 60px;\n        border-radius: 2px;\n      }\n    }\n  }\n</style>\n"
  };
};

/***/ }),

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/Card/examples/Media.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(77/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/Card/examples/Media.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('media', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['media'] = {
    name: 'media',
    source: "<template>\n  <div>\n    <md-card>\n      <md-card-header>\n        <md-card-header-text>\n          <div class=\"md-title\">Media card</div>\n          <div class=\"md-subhead\">Normal size</div>\n        </md-card-header-text>\n\n        <md-card-media>\n          <img src=\"/assets/examples/avatar-2.jpg\" alt=\"People\">\n        </md-card-media>\n      </md-card-header>\n\n      <md-card-actions>\n        <md-button>Action</md-button>\n        <md-button>Action</md-button>\n      </md-card-actions>\n    </md-card>\n\n    <md-card>\n      <md-card-header>\n        <md-card-header-text>\n          <div class=\"md-title\">Media card</div>\n          <div class=\"md-subhead\">Medium size</div>\n        </md-card-header-text>\n\n        <md-card-media md-medium>\n          <img src=\"/assets/examples/card-weather.png\" alt=\"People\">\n        </md-card-media>\n      </md-card-header>\n\n      <md-card-actions>\n        <md-button>Action</md-button>\n        <md-button>Action</md-button>\n      </md-card-actions>\n    </md-card>\n\n    <md-card>\n      <md-card-header>\n        <md-card-header-text>\n          <div class=\"md-title\">Media card</div>\n          <div class=\"md-subhead\">Big size</div>\n        </md-card-header-text>\n\n        <md-card-media md-big>\n          <img src=\"/assets/examples/cover.png\" alt=\"People\">\n        </md-card-media>\n      </md-card-header>\n\n      <md-card-actions>\n        <md-button>Action</md-button>\n        <md-button>Action</md-button>\n      </md-card-actions>\n    </md-card>\n\n    <md-card>\n      <md-card-media-actions>\n        <md-card-media>\n          <img src=\"/assets/examples/villains.png\" alt=\"Cover\">\n        </md-card-media>\n\n        <md-card-actions>\n          <md-button class=\"md-icon-button\">\n            <md-icon>favorite</md-icon>\n          </md-button>\n\n          <md-button class=\"md-icon-button\">\n            <md-icon>bookmark</md-icon>\n          </md-button>\n\n          <md-button class=\"md-icon-button\">\n            <md-icon>share</md-icon>\n          </md-button>\n        </md-card-actions>\n      </md-card-media-actions>\n    </md-card>\n  </div>\n</template>\n\n<style lang=\"scss\" scoped>\n  .md-card {\n    width: 320px;\n    margin: 4px;\n    display: inline-block;\n    vertical-align: top;\n  }\n</style>\n\n<script>\nexport default {\n  name: 'Media'\n}\n</script>\n"
  };
};

/***/ }),

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/Card/examples/MediaCover.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(76/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/Card/examples/MediaCover.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('media-cover', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['media-cover'] = {
    name: 'media-cover',
    source: "<template>\n  <div>\n    <md-card>\n      <md-card-media-cover>\n        <md-card-media md-ratio=\"16:9\">\n          <img src=\"/assets/examples/card-sky.jpg\" alt=\"Skyscraper\">\n        </md-card-media>\n\n        <md-card-area>\n          <md-card-header>\n            <span class=\"md-title\">Without text background</span>\n            <span class=\"md-subhead\">I bet you can't read this</span>\n          </md-card-header>\n\n          <md-card-actions>\n            <md-button>Neither this</md-button>\n            <md-button>Or this</md-button>\n          </md-card-actions>\n        </md-card-area>\n      </md-card-media-cover>\n    </md-card>\n\n    <md-card>\n      <md-card-media-cover md-text-scrim>\n        <md-card-media md-ratio=\"16:9\">\n          <img src=\"/assets/examples/card-sky.jpg\" alt=\"Skyscraper\">\n        </md-card-media>\n\n        <md-card-area>\n          <md-card-header>\n            <span class=\"md-title\">Gradient background</span>\n            <span class=\"md-subhead\">16/9 image</span>\n          </md-card-header>\n\n          <md-card-actions>\n            <md-button>Action</md-button>\n            <md-button>Action</md-button>\n          </md-card-actions>\n        </md-card-area>\n      </md-card-media-cover>\n    </md-card>\n\n    <md-card>\n      <md-card-media-cover md-solid>\n        <md-card-media md-ratio=\"4:3\">\n          <img src=\"/assets/examples/card-sky.jpg\" alt=\"Skyscraper\">\n        </md-card-media>\n\n        <md-card-area>\n          <md-card-header>\n            <span class=\"md-title\">Solid background</span>\n            <span class=\"md-subhead\">4/3 image</span>\n          </md-card-header>\n        </md-card-area>\n      </md-card-media-cover>\n    </md-card>\n\n    <md-card>\n      <md-card-media-cover md-solid>\n        <md-card-media md-ratio=\"1:1\">\n          <img src=\"/assets/examples/card-sky.jpg\" alt=\"Skyscraper\">\n        </md-card-media>\n\n        <md-card-area>\n          <md-card-header>\n            <span class=\"md-title\">Solid background</span>\n            <span class=\"md-subhead\">1/1 image</span>\n          </md-card-header>\n\n          <md-card-actions>\n            <md-button class=\"md-icon-button\">\n              <md-icon>favorite</md-icon>\n            </md-button>\n\n            <md-button class=\"md-icon-button\">\n              <md-icon>share</md-icon>\n            </md-button>\n          </md-card-actions>\n        </md-card-area>\n      </md-card-media-cover>\n    </md-card>\n  </div>\n</template>\n\n<style lang=\"scss\" scoped>\n  .md-card {\n    width: 320px;\n    margin: 4px;\n    display: inline-block;\n    vertical-align: top;\n  }\n</style>\n\n<script>\nexport default {\n  name: 'MediaCover'\n}\n</script>\n"
  };
};

/***/ }),

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/Card/examples/RegularCards.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(75/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/Card/examples/RegularCards.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('regular-cards', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['regular-cards'] = {
    name: 'regular-cards',
    source: "<template>\n  <div>\n    <md-card>\n      <md-card-header>\n        <div class=\"md-title\">Card without hover effect</div>\n      </md-card-header>\n\n      <md-card-content>\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.\n      </md-card-content>\n\n      <md-card-actions>\n        <md-button>Action</md-button>\n        <md-button>Action</md-button>\n      </md-card-actions>\n    </md-card>\n\n    <md-card md-with-hover>\n      <md-ripple>\n        <md-card-header>\n          <div class=\"md-title\">Card with hover effect</div>\n          <div class=\"md-subhead\">It also have a ripple</div>\n        </md-card-header>\n\n        <md-card-content>\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.\n        </md-card-content>\n\n        <md-card-actions>\n          <md-button>Action</md-button>\n          <md-button>Action</md-button>\n        </md-card-actions>\n      </md-ripple>\n    </md-card>\n  </div>\n</template>\n\n<style lang=\"scss\" scoped>\n  .md-card {\n    width: 320px;\n    margin: 4px;\n    display: inline-block;\n    vertical-align: top;\n  }\n</style>\n\n<script>\nexport default {\n  name: 'RegularCards'\n}\n</script>\n"
  };
};

/***/ }),

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/Card/examples/ThemeColors.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(74/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/Card/examples/ThemeColors.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('theme-colors', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['theme-colors'] = {
    name: 'theme-colors',
    source: "<template>\n  <div>\n    <md-card class=\"md-primary\">\n      <md-card-header>\n        <md-card-header-text>\n          <div class=\"md-title\">Primary color</div>\n          <div class=\"md-subhead\">Subtitle here</div>\n        </md-card-header-text>\n\n        <md-card-media>\n          <img src=\"/assets/examples/avatar-2.jpg\" alt=\"Avatar\">\n        </md-card-media>\n      </md-card-header>\n\n      <md-card-actions>\n        <md-button>Action</md-button>\n        <md-button>Action</md-button>\n      </md-card-actions>\n    </md-card>\n\n    <md-card class=\"md-accent\" md-with-hover>\n      <md-ripple>\n        <md-card-header>\n          <div class=\"md-title\">Accent color</div>\n          <div class=\"md-subhead\">With hover and ripple effects</div>\n        </md-card-header>\n\n        <md-card-content>\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.\n        </md-card-content>\n\n        <md-card-actions>\n          <md-button>Action</md-button>\n          <md-button>Action</md-button>\n        </md-card-actions>\n      </md-ripple>\n    </md-card>\n\n    <md-card class=\"md-primary\" md-theme=\"green-card\">\n      <md-card-header>\n        <md-card-header-text>\n          <div class=\"md-title\">Green custom theme</div>\n          <div class=\"md-subhead\">Subtitle here</div>\n        </md-card-header-text>\n\n        <md-card-media>\n          <img src=\"/assets/examples/avatar-2.jpg\" alt=\"Avatar\">\n        </md-card-media>\n      </md-card-header>\n    </md-card>\n\n    <md-card class=\"md-primary\" md-theme=\"purple-card\" md-with-hover>\n      <md-ripple>\n        <md-card-header>\n          <div class=\"md-title\">Purple primary color</div>\n          <div class=\"md-subhead\">With hover and ripple effects</div>\n        </md-card-header>\n\n        <md-card-content>\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.\n        </md-card-content>\n      </md-ripple>\n    </md-card>\n\n    <md-card class=\"md-primary\" md-theme=\"black-card\">\n      <md-card-header>\n        <md-card-header-text>\n          <div class=\"md-title\">True black primary color</div>\n          <div class=\"md-subhead\">Subtitle here</div>\n        </md-card-header-text>\n\n        <md-card-media>\n          <img src=\"/assets/examples/avatar-2.jpg\" alt=\"Avatar\">\n        </md-card-media>\n      </md-card-header>\n    </md-card>\n\n    <md-card class=\"md-primary\" md-theme=\"orange-card\" md-with-hover>\n      <md-ripple>\n        <md-card-header>\n          <div class=\"md-title\">Orange primary color</div>\n          <div class=\"md-subhead\">With hover and ripple effects</div>\n        </md-card-header>\n\n        <md-card-content>\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.\n        </md-card-content>\n      </md-ripple>\n    </md-card>\n  </div>\n</template>\n\n<script>\nexport default {\n  name: 'ThemeColors'\n}\n</script>\n\n<style lang=\"scss\" scoped>\n  @import \"~vue-material/theme/engine\";\n\n  @include md-register-theme(\"green-card\", (\n    primary: md-get-palette-color(green, 500)\n  ));\n\n  @include md-register-theme(\"black-card\", (\n    primary: md-get-palette-color(black, 500)\n  ));\n\n  @include md-register-theme(\"purple-card\", (\n    primary: md-get-palette-color(purple, 500)\n  ));\n\n  @include md-register-theme(\"orange-card\", (\n    primary: md-get-palette-color(orange, 500)\n  ));\n\n  @import \"~vue-material/base/theme\";\n  @import \"~vue-material/components/MdCard/theme\";\n\n  .md-card {\n    width: 320px;\n    margin: 4px;\n    display: inline-block;\n    vertical-align: top;\n  }\n</style>\n"
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

/***/ "./docs/app/pages/Components/Card/Card.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Card_vue__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?cacheDirectory=true!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./docs/app/pages/Components/Card/Card.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Card_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Card_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Card_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, (function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Card_vue__[key]; })) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3490be30_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Card_vue__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-3490be30\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./docs/app/pages/Components/Card/Card.vue");
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Card_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3490be30_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Card_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* customBlocks */
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/Card/examples/RegularCards.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/Card/examples/ThemeColors.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/Card/examples/Media.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/Card/examples/MediaCover.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/Card/examples/Layouts.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/Card/examples/CardExpansion.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}


/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?cacheDirectory=true!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./docs/app/pages/Components/Card/Card.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _docsExample = __webpack_require__("./docs/app/mixins/docsExample.js");

var _docsExample2 = _interopRequireDefault(_docsExample);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'DocCard',
  mixins: [_docsExample2.default],
  data: function data() {
    return {
      api: {
        mdCard: {
          props: {
            headings: ['Name', 'Description', 'Default'],
            props: [{
              name: 'md-with-hover',
              type: 'Boolean',
              description: 'Enables full hover elevation in card.',
              defaults: 'false'
            }, {
              name: 'md-theme',
              type: 'String',
              description: 'Speficies a custom theme for the card. Works only if a theme class like <code>primary</code> or <code>accent</code> is applied to the card.',
              defaults: '-'
            }]
          }
        },
        mdCardActions: {
          props: {
            headings: ['Name', 'Description', 'Default'],
            props: [{
              name: 'md-alignment',
              type: 'String',
              description: 'Alignment of action buttons.',
              defaults: 'right'
            }]
          }
        },
        mdCardArea: {
          props: {
            headings: ['Name', 'Description', 'Default'],
            props: [{
              name: 'md-inset',
              type: 'Boolean',
              description: 'Applies a inset border.',
              defaults: 'false'
            }]
          }
        },
        mdCardMedia: {
          props: {
            headings: ['Name', 'Description', 'Default'],
            props: [{
              name: 'md-ratio',
              type: 'String',
              description: 'Resizes or clip the image automatically based on the following options: 1:1 or 1/1, 4:3 or 4/3 and 16:9 or 16/9.',
              defaults: 'null'
            }, {
              name: 'md-medium',
              type: 'Boolean',
              description: 'Applies medium size to the media. Works only inside md-card-header.',
              defaults: 'false'
            }, {
              name: 'md-big',
              type: 'Boolean',
              description: 'Applies big size to the media. Works only inside md-card-header.',
              defaults: 'false'
            }]
          }
        },
        mdCardMediaCover: {
          props: {
            headings: ['Name', 'Description', 'Default'],
            props: [{
              name: 'md-text-scrim',
              type: 'Boolean',
              description: 'Applies a gradient background based on the image. This option increases the legibility of the text, applying background colors by extracting the amount of lightness on the image. If the image is dark the background of the text will be lighter. If it\'s not dark then the background will be darker. This will be calculated automatically.',
              defaults: 'false'
            }, {
              name: 'md-solid',
              type: 'Boolean',
              description: 'Applies a solid background with the same calculation logic of the md-text-scrim.',
              defaults: 'false'
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-3490be30\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./docs/app/pages/Components/Card/Card.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('page-container',{attrs:{"centered":"","title":_vm.$t('pages.card.title')}},[_c('div',{staticClass:"page-container-section"},[_c('p',[_vm._v("Cards may contain a photo, text, and a link about a single subject. They may display content containing elements of varying size, such as photos with captions of variable length.")]),_vm._v(" "),_c('p',[_vm._v("The cards components are very granular. Every single part of a card is a component. You can combine them in any order that you'd like, following the same logic of the examples.")])]),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('h2',[_vm._v("Regular Cards")]),_vm._v(" "),_c('p',[_vm._v("The simplest card structure has a header, content area and action buttons, defined by "),_c('code',[_vm._v("md-card-header")]),_vm._v(", "),_c('code',[_vm._v("md-card-content")]),_vm._v(" and "),_c('code',[_vm._v("md-card-actions")]),_vm._v(", respectively. The header may contain a title and a subtitle "),_c('code',[_vm._v("div")]),_vm._v(" or "),_c('code',[_vm._v("span")]),_vm._v(" with classes "),_c('code',[_vm._v(".md-title")]),_vm._v(" and "),_c('code',[_vm._v(".md-subhead")]),_vm._v(". In the content area, you may use any kind of text elements and for the actions, use at most two "),_c('code',[_vm._v("md-buttons")]),_vm._v(".")]),_vm._v(" "),_c('p',[_vm._v("If you want to elevate the card as the user hovers over it, add the "),_c('code',[_vm._v("md-with-hover")]),_vm._v(" property. You can also add a ripple effect in combination with the elevation behavior. For doing so, wrap the "),_c('code',[_vm._v("md-card")]),_vm._v("'s content in a "),_c('code',[_vm._v("md-ripple")]),_vm._v(" tag.")]),_vm._v(" "),_c('code-example',{attrs:{"title":"Regular Cards","component":_vm.examples['regular-cards']}}),_vm._v(" "),_c('h2',[_vm._v("Cards with Images")]),_vm._v(" "),_c('p',[_vm._v("To add visual appeal to your cards, you can add images inside the "),_c('code',[_vm._v("md-header")]),_vm._v(" tag with a "),_c('code',[_vm._v("md-card-media")]),_vm._v(" wraping an "),_c('code',[_vm._v("img")]),_vm._v(" tag. It's possible to increase the image size to medium or big with the properties "),_c('code',[_vm._v("md-medium")]),_vm._v(" and "),_c('code',[_vm._v("md-big")]),_vm._v(".")]),_vm._v(" "),_c('p',[_vm._v("Although not necessary with text-only headers, when using a "),_c('code',[_vm._v("md-card-media")]),_vm._v(", the title and subtitle should be wrapped around a "),_c('code',[_vm._v("md-card-header-text")]),_vm._v(" tag.")]),_vm._v(" "),_c('p',[_vm._v("For a text-free card with action icon buttons on the side, wrap the card content inside a "),_c('code',[_vm._v("md-card-media-actions")]),_vm._v(" component.")]),_vm._v(" "),_c('code-example',{attrs:{"title":"Media cover","component":_vm.examples['media']}}),_vm._v(" "),_c('p',[_vm._v("If you want the image to fill the whole card area, wrap the card content inside a "),_c('code',[_vm._v("md-card-media-cover")]),_vm._v(" component. Its basic structure comprises the following components:")]),_vm._v(" "),_c('ul',[_c('li',[_c('code',[_vm._v("md-card-media")]),_vm._v(", where you specify the imagine with an "),_c('code',[_vm._v("img")]),_vm._v(" tag. The image's aspect ratio can be specified with "),_c('code',[_vm._v("md-card-media")]),_vm._v("'s "),_c('code',[_vm._v("md-ratio")]),_vm._v(" property;")]),_vm._v(" "),_c('li',[_c('code',[_vm._v("md-card-area")]),_vm._v(", where header ("),_c('code',[_vm._v("md-header")]),_vm._v(") and actions ("),_c('code',[_vm._v("md-card-actions")]),_vm._v(") are specified.")])]),_vm._v(" "),_c('p'),_vm._v("\n    If there isn't sufficient contrast between background image and title, the latter won't be perfectly legible. To overcome that, apply a solid or gradient background to the text by using the "),_c('code',[_vm._v("md-card-media-cover")]),_vm._v("'s properties "),_c('code',[_vm._v("md-solid")]),_vm._v(" or "),_c('code',[_vm._v("md-text-scrim")]),_vm._v(", respectively.\n\n    "),_c('code-example',{attrs:{"title":"Card background with Aspect Ratio","component":_vm.examples['media-cover']}}),_vm._v(" "),_c('h2',[_vm._v("Themes")]),_vm._v(" "),_c('p',[_vm._v("Your cards will stand out if you change their base color... And you can do it by applying themes! Just add a "),_c('code',[_vm._v(".primary")]),_vm._v(" or "),_c('code',[_vm._v("accent")]),_vm._v(" class on them. This will use the current theme. You can specify a custom one with the "),_c('code',[_vm._v("md-theme")]),_vm._v(" property.")]),_vm._v(" "),_c('code-example',{attrs:{"title":"Theme Colors","component":_vm.examples['theme-colors']}}),_vm._v(" "),_c('h2',[_vm._v("Expansion Control")]),_vm._v(" "),_c('p',[_vm._v("To avoid too much information inside a card, or keep its height from exceeding the maximum height, hide supplementary information inside a expansible area.")]),_vm._v(" "),_c('p',[_vm._v("It can be done with the "),_c('code',[_vm._v("md-card-expand")]),_vm._v(" component, that has a "),_c('code',[_vm._v("md-card-action")]),_vm._v(" with a "),_c('code',[_vm._v("md-card-expand-trigger")]),_vm._v(" that toggles a "),_c('code',[_vm._v("md-card-expand-content")]),_vm._v(".")]),_vm._v(" "),_c('code-example',{attrs:{"title":"Expansion Control","component":_vm.examples['card-expansion']}}),_vm._v(" "),_c('h2',[_vm._v("Different Layouts")]),_vm._v("\n    That's pretty much it. You can now combine these and other components in many distinct ways. Here are some examples:\n\n    "),_c('code-example',{attrs:{"title":"Different Layouts","component":_vm.examples['layouts']}}),_vm._v(" "),_c('api-item',{attrs:{"title":"API - md-card"}},[_c('p',[_vm._v("The following properties can be applied:")]),_vm._v(" "),_c('api-table',{attrs:{"slot":"props","headings":_vm.api.mdCard.props.headings,"props":_vm.api.mdCard.props.props},slot:"props"})],1),_vm._v(" "),_c('api-item',{attrs:{"title":"API - md-card-actions"}},[_c('p',[_vm._v("The following properties can be applied:")]),_vm._v(" "),_c('api-table',{attrs:{"slot":"props","headings":_vm.api.mdCardActions.props.headings,"props":_vm.api.mdCardActions.props.props},slot:"props"})],1),_vm._v(" "),_c('api-item',{attrs:{"title":"API - md-card-area"}},[_c('p',[_vm._v("The following properties can be applied:")]),_vm._v(" "),_c('api-table',{attrs:{"slot":"props","headings":_vm.api.mdCardArea.props.headings,"props":_vm.api.mdCardArea.props.props},slot:"props"})],1),_vm._v(" "),_c('api-item',{attrs:{"title":"API - md-card-media"}},[_c('p',[_vm._v("The following properties can be applied:")]),_vm._v(" "),_c('api-table',{attrs:{"slot":"props","headings":_vm.api.mdCardMedia.props.headings,"props":_vm.api.mdCardMedia.props.props},slot:"props"})],1),_vm._v(" "),_c('api-item',{attrs:{"title":"API - md-card-media-cover"}},[_c('p',[_vm._v("The following properties can be applied:")]),_vm._v(" "),_c('api-table',{attrs:{"slot":"props","headings":_vm.api.mdCardMediaCover.props.headings,"props":_vm.api.mdCardMediaCover.props.props},slot:"props"})],1)],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});