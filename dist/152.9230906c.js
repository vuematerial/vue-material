webpackJsonp([152],{

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/Steppers/examples/StepperAlternative.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(114/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/Steppers/examples/StepperAlternative.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('stepper-alternative', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['stepper-alternative'] = {
    name: 'stepper-alternative',
    source: "<template>\n  <div>\n    <md-steppers md-alternative>\n      <md-step id=\"first\" md-label=\"First Step\">\n        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>\n        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>\n        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>\n      </md-step>\n\n      <md-step id=\"second\" md-label=\"Second Step\">\n        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>\n        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>\n        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>\n        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>\n      </md-step>\n\n      <md-step id=\"third\" md-label=\"Third Step\">\n        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>\n        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>\n      </md-step>\n    </md-steppers>\n  </div>\n</template>\n\n<script>\n  export default {\n    name: 'StepperAlternative'\n  }\n</script>\n"
  };
};

/***/ }),

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/Steppers/examples/StepperHorizontal.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(113/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/Steppers/examples/StepperHorizontal.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('stepper-horizontal', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['stepper-horizontal'] = {
    name: 'stepper-horizontal',
    source: "<template>\n  <div>\n    <md-steppers>\n      <md-step id=\"first\" md-label=\"First Step\">\n        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>\n        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>\n        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>\n      </md-step>\n\n      <md-step id=\"second\" md-label=\"Second Step\">\n        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>\n        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>\n        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>\n        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>\n      </md-step>\n\n      <md-step id=\"third\" md-label=\"Third Step\">\n        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>\n        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>\n      </md-step>\n    </md-steppers>\n  </div>\n</template>\n\n<script>\n  export default {\n    name: 'StepperHorizontal'\n  }\n</script>\n"
  };
};

/***/ }),

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/Steppers/examples/StepperLinear.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(30/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/Steppers/examples/StepperLinear.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('stepper-linear', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['stepper-linear'] = {
    name: 'stepper-linear',
    source: "<template>\n  <div>\n    <md-steppers :md-active-step.sync=\"active\" md-linear>\n      <md-step id=\"first\" md-label=\"First Step\" md-description=\"Optional\" :md-done.sync=\"first\">\n        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>\n        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>\n        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>\n        <md-button class=\"md-raised md-primary\" @click=\"setDone('first', 'second')\">Continue</md-button>\n      </md-step>\n\n      <md-step id=\"second\" md-label=\"Second Step\" :md-error=\"secondStepError\" :md-done.sync=\"second\">\n        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>\n        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>\n        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>\n        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>\n        <md-button class=\"md-raised md-primary\" @click=\"setDone('second', 'third')\">Continue</md-button>\n        <md-button class=\"md-raised md-primary\" @click=\"setError()\">Set error!</md-button>\n      </md-step>\n\n      <md-step id=\"third\" md-label=\"Third Step\" :md-done.sync=\"third\">\n        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>\n        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>\n        <md-button class=\"md-raised md-primary\" @click=\"setDone('third')\">Done</md-button>\n      </md-step>\n    </md-steppers>\n  </div>\n</template>\n\n<script>\n  export default {\n    name: 'StepperLinear',\n    data: () => ({\n      active: 'first',\n      first: false,\n      second: false,\n      third: false,\n      secondStepError: null\n    }),\n    methods: {\n      setDone (id, index) {\n        this[id] = true\n\n        this.secondStepError = null\n\n        if (index) {\n          this.active = index\n        }\n      },\n      setError () {\n        this.secondStepError = 'This is an error!'\n      }\n    }\n  }\n</script>\n\n<style lang=\"scss\" scoped>\n  .md-steppers {\n\n  }\n</style>\n"
  };
};

/***/ }),

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/Steppers/examples/StepperNonEditable.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(29/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/Steppers/examples/StepperNonEditable.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('stepper-non-editable', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['stepper-non-editable'] = {
    name: 'stepper-non-editable',
    source: "<template>\n  <div>\n    <md-steppers :md-active-step.sync=\"active\" md-vertical md-linear>\n      <md-step id=\"first\" md-label=\"First Step\" md-description=\"Optional\" :md-editable=\"false\" :md-done.sync=\"first\">\n        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>\n        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>\n        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>\n        <md-button class=\"md-raised md-primary\" @click=\"setDone('first', 'second')\">Continue</md-button>\n      </md-step>\n\n      <md-step id=\"second\" md-label=\"Second Step\" :md-error=\"secondStepError\" :md-editable=\"false\" :md-done.sync=\"second\">\n        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>\n        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>\n        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>\n        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>\n        <md-button class=\"md-raised md-primary\" @click=\"setDone('second', 'third')\">Continue</md-button>\n        <md-button class=\"md-raised md-primary\" @click=\"setError()\">Set error!</md-button>\n      </md-step>\n\n      <md-step id=\"third\" md-label=\"Third Step\" :md-editable=\"false\" :md-done.sync=\"third\">\n        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>\n        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>\n        <md-button class=\"md-raised md-primary\" @click=\"setDone('third')\">Done</md-button>\n      </md-step>\n    </md-steppers>\n  </div>\n</template>\n\n<script>\n  export default {\n    name: 'StepperNonEditable',\n    data: () => ({\n      active: 'first',\n      first: false,\n      second: false,\n      third: false,\n      secondStepError: null\n    }),\n    methods: {\n      setDone (id, index) {\n        this[id] = true\n\n        this.secondStepError = null\n\n        if (index) {\n          this.active = index\n        }\n      },\n      setError () {\n        this.secondStepError = 'This is an error!'\n      }\n    }\n  }\n</script>\n\n<style lang=\"scss\" scoped>\n  .md-steppers {\n\n  }\n</style>\n"
  };
};

/***/ }),

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/Steppers/examples/StepperRoute.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(112/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/Steppers/examples/StepperRoute.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('stepper-route', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['stepper-route'] = {
    name: 'stepper-route',
    source: "<template>\n  <div>\n    <md-steppers md-sync-route md-dynamic-height>\n      <md-step id=\"first\" to=\"/components/steppers\" exact md-label=\"First Step\">\n        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>\n        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>\n        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>\n      </md-step>\n\n      <md-step id=\"second\" to=\"/components/steppers/second\" md-label=\"Second Step\">\n        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>\n        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>\n        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>\n        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>\n        <md-list>\n          <md-list-item to=\"/components/steppers/second/sub1\">Subpage 1</md-list-item>\n          <md-list-item to=\"/components/steppers/second/sub2\">Subpage 2</md-list-item>\n        </md-list>\n      </md-step>\n\n      <md-step id=\"third\" to=\"/components/steppers/third\" md-label=\"Third Step\">\n        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>\n        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>\n      </md-step>\n    </md-steppers>\n    <md-list>\n      <md-list-item to=\"/components/steppers/second/sub1\">Subpage 2-1</md-list-item>\n      <md-list-item to=\"/components/steppers/second/sub2\">Subpage 2-2</md-list-item>\n    </md-list>\n  </div>\n</template>\n\n<script>\n  export default {\n    name: 'StepperRoute'\n  }\n</script>\n"
  };
};

/***/ }),

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/Steppers/examples/StepperVertical.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(111/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/Steppers/examples/StepperVertical.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('stepper-vertical', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['stepper-vertical'] = {
    name: 'stepper-vertical',
    source: "<template>\n  <div>\n    <md-steppers md-vertical>\n      <md-step id=\"first\" md-label=\"First Step\" md-description=\"Optional\">\n        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>\n        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>\n        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>\n      </md-step>\n\n      <md-step id=\"second\" md-label=\"Second Step\">\n        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>\n        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>\n        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>\n        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>\n      </md-step>\n\n      <md-step id=\"third\" md-label=\"Third Step\">\n        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>\n        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>\n      </md-step>\n    </md-steppers>\n  </div>\n</template>\n\n<script>\n  export default {\n    name: 'StepperVertical'\n  }\n</script>\n"
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

/***/ "./docs/app/pages/Components/Steppers/Steppers.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Steppers_vue__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?cacheDirectory=true!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./docs/app/pages/Components/Steppers/Steppers.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Steppers_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Steppers_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Steppers_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, (function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Steppers_vue__[key]; })) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_71b0df87_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Steppers_vue__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-71b0df87\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./docs/app/pages/Components/Steppers/Steppers.vue");
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Steppers_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_71b0df87_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Steppers_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* customBlocks */
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/Steppers/examples/StepperHorizontal.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/Steppers/examples/StepperAlternative.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/Steppers/examples/StepperLinear.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/Steppers/examples/StepperNonEditable.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/Steppers/examples/StepperVertical.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/Steppers/examples/StepperRoute.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}


/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?cacheDirectory=true!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./docs/app/pages/Components/Steppers/Steppers.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _docsExample = __webpack_require__("./docs/app/mixins/docsExample.js");

var _docsExample2 = _interopRequireDefault(_docsExample);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'DocSteppers',
  mixins: [_docsExample2.default],
  data: function data() {
    return {
      steppers: {
        props: {
          headings: ['Name', 'Description', 'Default'],
          props: [{
            name: 'md-active-step',
            type: 'String',
            description: 'The id of the step to be set as the current one. Useful to programatically change the active step.. Should be used with the <code>.sync</code> modifier.',
            defaults: 'false'
          }, {
            name: 'md-sync-route',
            type: 'Boolean',
            description: 'Watches the current route if there is a Vue Router instance running on the page. This will automatically change the active stepper based on the current URL.',
            defaults: 'false'
          }, {
            name: 'md-alternative',
            type: 'Boolean',
            description: 'Change the steppers into a alternative layout',
            defaults: 'false'
          }, {
            name: 'md-vertical',
            type: 'Boolean',
            description: 'Change the steppers into a vertical orientation. For mobile.',
            defaults: 'false'
          }, {
            name: 'md-linear',
            type: 'Boolean',
            description: 'Set steppers to work in a linear flow.',
            defaults: 'false'
          }, {
            name: 'md-dynamic-height',
            type: 'Boolean',
            description: 'Calculate the stepper height automatically and add an awesome height transition between them.',
            defaults: 'false'
          }]
        },
        events: {
          headings: ['Name', 'Description', 'Value'],
          props: [{
            name: 'md-changed',
            description: 'Triggered when the active stepper changes',
            value: 'Step ID'
          }]
        }
      },
      step: {
        props: {
          headings: ['Name', 'Description', 'Default'],
          props: [{
            name: 'id',
            type: 'String',
            description: 'The step id. Used when changing the active step dynamically',
            defaults: 'a random string'
          }, {
            name: 'href',
            type: 'String',
            description: 'The step href link. Useful when you don\'t have Vue Router on your app, but you still want to sync the active step with the current URL.',
            defaults: 'null'
          }, {
            name: 'md-label',
            type: 'String',
            description: 'The step label',
            defaults: 'null'
          }, {
            name: 'md-description',
            type: 'String',
            description: 'The step description. When a step is optional, use this prop to tell the user that.',
            defaults: 'null'
          }, {
            name: 'md-error',
            type: 'String',
            description: 'The error message. When set, the stepper will automatically raise an error. To clear the error, set this variable as null.',
            defaults: 'null'
          }, {
            name: 'md-done',
            type: 'Boolean',
            description: 'Set this prop to true to tell that a particular step is finished.',
            defaults: 'false'
          }, {
            name: 'md-editable',
            type: 'Boolean',
            description: 'Make a step editable or non editable.',
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

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-71b0df87\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./docs/app/pages/Components/Steppers/Steppers.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('page-container',{attrs:{"centered":"","title":_vm.$t('pages.steppers.title')}},[_c('div',{staticClass:"page-container-section"},[_c('p',[_vm._v("Steppers display progress through a sequence of logical and numbered steps. They may also be used for navigation and have two main types: Horizontal or Vertical. The horizontal type can have an alternative layout.")]),_vm._v(" "),_c('p',[_vm._v("Individual steps are editable and optional by default, but you can change that.")])]),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('h2',[_vm._v("Horizontal Steppers")]),_vm._v(" "),_c('p',[_vm._v("Horizontal steppers are ideal when the contents of one step depend on an earlier step. You should avoid using long step names in horizontal steppers.")]),_vm._v(" "),_c('p',[_vm._v("This is the default type of steppers. They are not recommended for mobile:")]),_vm._v(" "),_c('code-example',{attrs:{"title":"Default layout","component":_vm.examples['stepper-horizontal']}}),_vm._v(" "),_c('p',[_vm._v("They can also have a alternative layout to give greater emphasis to the steps titles:")]),_vm._v(" "),_c('code-example',{attrs:{"title":"Alternative Layout","component":_vm.examples['stepper-alternative']}})],1),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('h2',[_vm._v("Vertical Steppers")]),_vm._v(" "),_c('p',[_vm._v("Vertical steppers are great deal for mobile devices or to be inserted on small areas of your application, like a dialog or a card.")]),_vm._v(" "),_c('code-example',{attrs:{"title":"Ideal for Mobile","component":_vm.examples['stepper-vertical']}})],1),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('h2',[_vm._v("Linear Steppers")]),_vm._v(" "),_c('p',[_vm._v("By default steps are optional and this means that you can advance to the last step without pass through the other ones. But sometimes we're guiding an user through a linear flow and all steps matter or are connected together. Linear steppers require users to complete one step in order to move on to the next:")]),_vm._v(" "),_c('code-example',{attrs:{"title":"With error handler","component":_vm.examples['stepper-linear']}})],1),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('h2',[_vm._v("Non Editable Steps")]),_vm._v(" "),_c('p',[_vm._v("By default steps are also editable. But you can disable this by manually setting on each step that could be non-editable. This makes sense when users cannot edit a step later or when step editing poses a distraction risk to form completion:")]),_vm._v(" "),_c('code-example',{attrs:{"title":"Disable Edit","component":_vm.examples['stepper-non-editable']}})],1),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('h2',[_vm._v("Vue Router Integration")]),_vm._v(" "),_c('p',[_vm._v("Vue Material Steppers have a deep integratio with Vue Router. This means that you can have a route per step. This allows you to navigate between steps through the browser history, store the current stepper after a refresh and lots of great scenarios that you can explore! Take a look at the page URL changing when clicking on each steps:")]),_vm._v(" "),_c('note-block',{attrs:{"tip":""}},[_vm._v("Try to refresh the page to see that Steppers will detect the active step based on the current URL. Just awesome!")]),_vm._v(" "),_c('code-example',{attrs:{"title":"Sync with route","component":_vm.examples['stepper-route']}}),_vm._v(" "),_c('api-item',{attrs:{"title":"API - md-steppers"}},[_c('p',[_vm._v("The following options can be applied to any steppers:")]),_vm._v(" "),_c('api-table',{attrs:{"slot":"props","headings":_vm.steppers.props.headings,"props":_vm.steppers.props.props},slot:"props"}),_vm._v(" "),_c('api-table',{attrs:{"slot":"events","headings":_vm.steppers.events.headings,"props":_vm.steppers.events.props},slot:"events"})],1),_vm._v(" "),_c('api-item',{attrs:{"title":"API - md-step"}},[_c('p',[_vm._v("The following options can be used on any step. All "),_c('a',{attrs:{"href":"https://router.vuejs.org/en/api/router-link.html","target":"_blank"}},[_vm._v("options")]),_vm._v(" of "),_c('code',[_vm._v("router-link")]),_vm._v(" can be simply used here:")]),_vm._v(" "),_c('api-table',{attrs:{"slot":"props","headings":_vm.step.props.headings,"props":_vm.step.props.props},slot:"props"})],1)],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});