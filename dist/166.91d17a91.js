webpackJsonp([166],{

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/SpeedDial/examples/AnimationTypes.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(34/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/SpeedDial/examples/AnimationTypes.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('animation-types', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['animation-types'] = {
    name: 'animation-types',
    source: "<template>\n  <div class=\"example\">\n    Fling effect:\n    <md-speed-dial md-direction=\"bottom\">\n      <md-speed-dial-target>\n        <md-icon>add</md-icon>\n      </md-speed-dial-target>\n\n      <md-speed-dial-content>\n        <md-button class=\"md-icon-button\">\n          <md-icon>note</md-icon>\n        </md-button>\n\n        <md-button class=\"md-icon-button\">\n          <md-icon>event</md-icon>\n        </md-button>\n      </md-speed-dial-content>\n    </md-speed-dial>\n\n    Scale effect:\n    <md-speed-dial md-effect=\"scale\" md-direction=\"bottom\">\n      <md-speed-dial-target class=\"md-primary\">\n        <md-icon>my_location</md-icon>\n      </md-speed-dial-target>\n\n      <md-speed-dial-content>\n        <md-button class=\"md-icon-button\">\n          <md-icon>directions</md-icon>\n        </md-button>\n\n        <md-button class=\"md-icon-button\">\n          <md-icon>streetview</md-icon>\n        </md-button>\n      </md-speed-dial-content>\n    </md-speed-dial>\n\n    Opacity effect:\n    <md-speed-dial md-effect=\"opacity\" md-direction=\"bottom\">\n      <md-speed-dial-target class=\"md-plain\">\n        <md-icon>edit</md-icon>\n      </md-speed-dial-target>\n\n      <md-speed-dial-content>\n        <md-button class=\"md-icon-button\">\n          <md-icon>attachment</md-icon>\n        </md-button>\n\n        <md-button class=\"md-icon-button\">\n          <md-icon>archive</md-icon>\n        </md-button>\n      </md-speed-dial-content>\n    </md-speed-dial>\n  </div>\n</template>\n\n<script>\nexport default {\n  name: 'AnimationTypes'\n}\n</script>\n\n<style lang=\"scss\" scoped>\n  .example {\n    min-height: 180px;\n  }\n\n  .md-speed-dial {\n    margin: 0 24px 0 8px;\n  }\n</style>\n"
  };
};

/***/ }),

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/SpeedDial/examples/EventTriggers.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(33/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/SpeedDial/examples/EventTriggers.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('event-triggers', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['event-triggers'] = {
    name: 'event-triggers',
    source: "<template>\n  <div class=\"example\">\n    Hover as trigger:\n    <md-speed-dial md-direction=\"bottom\">\n      <md-speed-dial-target @click=\"customClick\">\n        <md-icon>add</md-icon>\n      </md-speed-dial-target>\n\n      <md-speed-dial-content>\n        <md-button class=\"md-icon-button\">\n          <md-icon>note</md-icon>\n        </md-button>\n\n        <md-button class=\"md-icon-button\">\n          <md-icon>event</md-icon>\n        </md-button>\n      </md-speed-dial-content>\n    </md-speed-dial>\n\n    Click as trigger:\n    <md-speed-dial md-event=\"click\" md-direction=\"bottom\">\n      <md-speed-dial-target class=\"md-primary\">\n        <md-icon>my_location</md-icon>\n      </md-speed-dial-target>\n\n      <md-speed-dial-content>\n        <md-button class=\"md-icon-button\">\n          <md-icon>directions</md-icon>\n        </md-button>\n\n        <md-button class=\"md-icon-button\">\n          <md-icon>streetview</md-icon>\n        </md-button>\n      </md-speed-dial-content>\n    </md-speed-dial>\n  </div>\n</template>\n\n<script>\nexport default {\n  name: 'EventTriggers',\n  methods: {\n    customClick () {\n      window.alert('You can have a custom click inside the target!')\n    }\n  }\n}\n</script>\n\n<style lang=\"scss\" scoped>\n  .example {\n    min-height: 180px;\n  }\n\n  .md-speed-dial {\n    margin: 0 24px 0 8px;\n  }\n</style>\n"
  };
};

/***/ }),

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/SpeedDial/examples/MorphingIcon.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(32/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/SpeedDial/examples/MorphingIcon.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('morphing-icon', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['morphing-icon'] = {
    name: 'morphing-icon',
    source: "<template>\n  <div class=\"example\">\n    <md-speed-dial class=\"md-top-left\" md-direction=\"bottom\">\n      <md-speed-dial-target>\n        <md-icon class=\"md-morph-initial\">add</md-icon>\n        <md-icon class=\"md-morph-final\">edit</md-icon>\n      </md-speed-dial-target>\n\n      <md-speed-dial-content>\n        <md-button class=\"md-icon-button\">\n          <md-icon>note</md-icon>\n        </md-button>\n\n        <md-button class=\"md-icon-button\">\n          <md-icon>event</md-icon>\n        </md-button>\n      </md-speed-dial-content>\n    </md-speed-dial>\n\n    <md-speed-dial class=\"md-top-right\" md-direction=\"bottom\" md-event=\"click\">\n      <md-speed-dial-target class=\"md-primary\">\n        <md-icon class=\"md-morph-initial\">add</md-icon>\n        <md-icon class=\"md-morph-final\">close</md-icon>\n      </md-speed-dial-target>\n\n      <md-speed-dial-content>\n        <md-button class=\"md-icon-button\">\n          <md-icon>directions</md-icon>\n        </md-button>\n\n        <md-button class=\"md-icon-button\">\n          <md-icon>streetview</md-icon>\n        </md-button>\n      </md-speed-dial-content>\n    </md-speed-dial>\n  </div>\n</template>\n\n<script>\nexport default {\n  name: 'MorphingIcon'\n}\n</script>\n\n<style lang=\"scss\" scoped>\n  .example {\n    min-height: 180px;\n  }\n</style>\n"
  };
};

/***/ }),

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/SpeedDial/examples/PositionDirection.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(31/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/SpeedDial/examples/PositionDirection.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('position-direction', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['position-direction'] = {
    name: 'position-direction',
    source: "<template>\n  <div class=\"example\">\n    <div class=\"demo-option\">\n      <md-field class=\"select\">\n        <label for=\"top\">Top</label>\n        <md-select id=\"top\" v-model=\"topPosition\">\n          <md-option value=\"md-top-left\">Left</md-option>\n          <md-option value=\"md-top-center\">Center</md-option>\n          <md-option value=\"md-top-right\">Right</md-option>\n        </md-select>\n      </md-field>\n\n      <md-field class=\"select\">\n        <label for=\"bottom\">Bottom</label>\n        <md-select id=\"bottom\" v-model=\"bottomPosition\">\n          <md-option value=\"md-bottom-left\">Left</md-option>\n          <md-option value=\"md-bottom-center\">Center</md-option>\n          <md-option value=\"md-bottom-right\">Right</md-option>\n        </md-select>\n      </md-field>\n    </div>\n    <md-speed-dial :class=\"topPosition\" md-direction=\"bottom\">\n      <md-speed-dial-target class=\"md-primary\">\n        <md-icon>my_location</md-icon>\n      </md-speed-dial-target>\n\n      <md-speed-dial-content>\n        <md-button class=\"md-icon-button\">\n          <md-icon>directions</md-icon>\n        </md-button>\n\n        <md-button class=\"md-icon-button\">\n          <md-icon>streetview</md-icon>\n        </md-button>\n      </md-speed-dial-content>\n    </md-speed-dial>\n\n    <md-speed-dial :class=\"bottomPosition\">\n      <md-speed-dial-target>\n        <md-icon>add</md-icon>\n      </md-speed-dial-target>\n\n      <md-speed-dial-content>\n        <md-button class=\"md-icon-button\">\n          <md-icon>note</md-icon>\n        </md-button>\n\n        <md-button class=\"md-icon-button\">\n          <md-icon>event</md-icon>\n        </md-button>\n      </md-speed-dial-content>\n    </md-speed-dial>\n  </div>\n</template>\n\n<script>\nexport default {\n  name: 'PositionDirection',\n  data: () => ({\n    topPosition: 'md-top-left',\n    bottomPosition: 'md-bottom-left'\n  })\n}\n</script>\n\n<style lang=\"scss\" scoped>\n  .example {\n    min-height: 300px;\n  }\n\n  .demo-option {\n    display: flex;\n    flex-flow: wrap;\n    justify-content: center;\n    align-items: center;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n\n    .select {\n      margin: 0 6px;\n      display: inline-flex;\n      width: auto;\n    }\n  }\n</style>\n"
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

/***/ "./docs/app/pages/Components/SpeedDial/SpeedDial.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_SpeedDial_vue__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?cacheDirectory=true!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./docs/app/pages/Components/SpeedDial/SpeedDial.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_SpeedDial_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_SpeedDial_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_SpeedDial_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, (function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_SpeedDial_vue__[key]; })) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_df91f880_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_SpeedDial_vue__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-df91f880\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./docs/app/pages/Components/SpeedDial/SpeedDial.vue");
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_SpeedDial_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_df91f880_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_SpeedDial_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* customBlocks */
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/SpeedDial/examples/PositionDirection.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/SpeedDial/examples/AnimationTypes.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/SpeedDial/examples/EventTriggers.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/SpeedDial/examples/MorphingIcon.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}


/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?cacheDirectory=true!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./docs/app/pages/Components/SpeedDial/SpeedDial.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _docsExample = __webpack_require__("./docs/app/mixins/docsExample.js");

var _docsExample2 = _interopRequireDefault(_docsExample);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'DocSpeedDial',
  mixins: [_docsExample2.default],
  data: function data() {
    return {
      props: {
        headings: ['Name', 'Description', 'Default'],
        props: [{
          name: 'md-direction',
          type: 'String',
          description: 'Applies the style to show the content below or above the trigger',
          defaults: 'top'
        }, {
          offset: true,
          name: 'md-direction="top"',
          type: 'String',
          description: 'Sets the direction of the animation effect to top. This is the default value of md-direction. You don\'t have to pass it unless you want to reset it\'s default value',
          defaults: '-'
        }, {
          offset: true,
          name: 'md-direction="bottom"',
          type: 'String',
          description: 'Sets the direction of the animation effect to bottom.',
          defaults: '-'
        }, {
          name: 'md-effect',
          type: 'Boolean',
          description: 'Enables/Disables the ripple effect.',
          defaults: 'fling'
        }, {
          offset: true,
          name: 'md-effect="fling"',
          type: 'String',
          description: 'Applies a reveal effect combining both opacity and scale. This is the default behaviour in most of applications using FAB.',
          defaults: '-'
        }, {
          offset: true,
          name: 'md-effect="scale"',
          type: 'String',
          description: 'Applies a reveal effect using scale only.',
          defaults: '-'
        }, {
          offset: true,
          name: 'md-effect="opacity"',
          type: 'String',
          description: 'Applies a reveal effect using opacity only.',
          defaults: '-'
        }, {
          name: 'md-event',
          type: 'String',
          description: 'Specifies the event who triggers the content',
          defaults: 'hover'
        }, {
          offset: true,
          name: 'md-event="hover"',
          type: 'String',
          description: 'Opens the content on hover.',
          defaults: '-'
        }, {
          offset: true,
          name: 'md-event="click"',
          type: 'String',
          description: 'Opens the content on click.',
          defaults: '-'
        }]
      },
      classes: {
        headings: ['Name', 'Description'],
        props: [{
          name: 'md-top-right',
          description: 'Positions the Speed Dial on the top right of the nearest relative parent'
        }, {
          name: 'md-top-center',
          description: 'Positions the Speed Dial on the top center of the nearest relative parent'
        }, {
          name: 'md-top-left',
          description: 'Positions the Speed Dial on the top left of the nearest relative parent'
        }, {
          name: 'md-bottom-right',
          description: 'Positions the Speed Dial on the bottom right of the nearest relative parent'
        }, {
          name: 'md-bottom-center',
          description: 'Positions the Speed Dial on the bottom center of the nearest relative parent'
        }, {
          name: 'md-bottom-left',
          description: 'Positions the Speed Dial on the bottom left of the nearest relative parent'
        }, {
          name: 'md-fixed',
          description: 'Applies css "position: fixed" to Speed Dial. Better used with the 4 position coordinates above'
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
//
//
//
//
//
//
//
//
//
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

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-df91f880\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./docs/app/pages/Components/SpeedDial/SpeedDial.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('page-container',{attrs:{"centered":"","title":_vm.$t('pages.speedDial.title')}},[_c('div',{staticClass:"page-container-section"},[_c('p',[_vm._v("Floating Action Buttons can show related actions upon hovering or pressing. The button should remain on screen after the menu is invoked.")]),_vm._v(" "),_c('p',[_vm._v("Speed dial component is pretty flexible and have many options to make it easy to suit all your needs. You can apply different positions, work with a couple of events to trigger the content and also have a awesome morph effect on your main action.")]),_vm._v(" "),_c('p',[_vm._v("The component is divided in 3 parts: The "),_c('code',[_vm._v("md-speed-dial")]),_vm._v(", which is the container that control all children, "),_c('code',[_vm._v("md-speed-dial-content")]),_vm._v(" which is the content to be displayed (a.k.a buttons) and "),_c('code',[_vm._v("md-speed-dial-trigger")]),_vm._v(" who is responsible for triggering the content exhibition. Take a look at this following example:")])]),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('h2',[_vm._v("Speed Dial positions")]),_vm._v(" "),_c('p',[_vm._v("You can specify any position that you want for you Speed Dial component. They can be top and bottom, and combined with left, center or right:")]),_vm._v(" "),_c('code-example',{attrs:{"title":"Positions and directions","component":_vm.examples['position-direction']}}),_vm._v(" "),_c('note-block',{attrs:{"tip":""}},[_vm._v("Prefer the FAB on bottom left position for your main action on scrollable contents. Always use a "),_c('code',[_vm._v("md-direction")]),_vm._v(" equals to "),_c('code',[_vm._v("bottom")]),_vm._v(" when using top position.")])],1),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('h2',[_vm._v("Effects")]),_vm._v(" "),_c('p',[_vm._v("The component can be displayed different animations for each scenario that you might want:")]),_vm._v(" "),_c('code-example',{attrs:{"title":"Animations types","component":_vm.examples['animation-types']}})],1),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('h2',[_vm._v("Triggers")]),_vm._v(" "),_c('p',[_vm._v("You can trigger the speed dial content using hover or click. Using this allows you to have a open/close feature or to hold a main action:")]),_vm._v(" "),_c('code-example',{attrs:{"title":"Event triggers","component":_vm.examples['event-triggers']}}),_vm._v(" "),_c('note-block',{attrs:{"tip":""}},[_vm._v("For desktop environments it's better to have a hover effect. On mobile you can toggle the property to use click instead.")]),_vm._v(" "),_c('api-item',{attrs:{"title":"API - md-speed-dial"}},[_c('api-table',{attrs:{"slot":"props","headings":_vm.props.headings,"props":_vm.props.props},slot:"props"}),_vm._v(" "),_c('api-table',{attrs:{"slot":"classes","headings":_vm.classes.headings,"props":_vm.classes.props},slot:"classes"})],1)],1),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('h2',[_vm._v("Icon Morph")]),_vm._v(" "),_c('p',[_vm._v("Sometimes you want the speed dial to have a cross icon to represent your close action after showing the content. This can be easily achieved with the morph icons.")]),_vm._v(" "),_c('p',[_vm._v("To create that, create two "),_c('code',[_vm._v("md-icon")]),_vm._v(" components inside the trigger and add a "),_c('code',[_vm._v("md-morph-initial")]),_vm._v(" in the one you would like it to be the initial state (or an open state) and a "),_c('code',[_vm._v("md-morph-final")]),_vm._v(" on the close state:")]),_vm._v(" "),_c('code-example',{attrs:{"title":"Morphing Icons","component":_vm.examples['morphing-icon']}})],1),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('h3',[_vm._v("Components")]),_vm._v(" "),_c('api-item',{attrs:{"title":"API - md-speed-dial-content"}},[_c('p',[_vm._v("This component does not have any extra option.")])]),_vm._v(" "),_c('api-item',{attrs:{"title":"API - md-speed-dial-trigger"}},[_c('p',[_vm._v("This component is just an alias of "),_c('code',[_vm._v("md-button")]),_vm._v(" with "),_c('code',[_vm._v("md-fab")]),_vm._v(" class. So every option of "),_c('router-link',{attrs:{"to":"/components/button"}},[_vm._v("Buttons")]),_vm._v(" can be applied here, even the Vue Router options...")],1)])],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});