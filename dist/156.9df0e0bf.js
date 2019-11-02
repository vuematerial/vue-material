webpackJsonp([156],{

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/Datepicker/examples/BasicDatepicker.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(137/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/Datepicker/examples/BasicDatepicker.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('basic-datepicker', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['basic-datepicker'] = {
    name: 'basic-datepicker',
    source: "<template>\n  <div>\n    <md-datepicker v-model=\"selectedDate\" />\n    <md-field>\n      <label for=\"movie\">First day of a week</label>\n      <md-select v-model=\"firstDayOfAWeek\">\n        <md-option value=\"0\">Sunday</md-option>\n        <md-option value=\"1\">Monday</md-option>\n      </md-select>\n      <span class=\"md-helper-text\">This config is global.</span>\n    </md-field>\n    <md-field>\n      <label for=\"movie\">Date format</label>\n      <md-select v-model=\"dateFormat\">\n        <md-option value=\"yyyy-MM-dd\">default</md-option>\n        <md-option value=\"yyyy/MM/dd\">yyyy/MM/dd</md-option>\n        <md-option value=\"dd/MM/yyyy\">dd/MM/yyyy</md-option>\n        <md-option value=\"MM/dd/yyyy\">MM/dd/yyyy</md-option>\n      </md-select>\n      <span class=\"md-helper-text\">This config is global.</span>\n    </md-field>\n  </div>\n</template>\n\n<script>\n  export default {\n    name: 'BasicDatepicker',\n    data: () => ({\n      selectedDate: null\n    }),\n    computed: {\n      firstDayOfAWeek: {\n        get () {\n          return this.$material.locale.firstDayOfAWeek\n        },\n        set (val) {\n          this.$material.locale.firstDayOfAWeek = val\n        }\n      },\n      dateFormat: {\n        get () {\n          return this.$material.locale.dateFormat\n        },\n        set (val) {\n          this.$material.locale.dateFormat = val\n        }\n      }\n    }\n  }\n</script>\n"
  };
};

/***/ }),

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/Datepicker/examples/CancelOpenDatepicker.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(136/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/Datepicker/examples/CancelOpenDatepicker.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('cancel-open-datepicker', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['cancel-open-datepicker'] = {
    name: 'cancel-open-datepicker',
    source: "<template>\n  <div>\n    <md-datepicker v-model=\"selectedDate\" :md-open-on-focus=\"false\" />\n  </div>\n</template>\n\n<script>\n  export default {\n    name: 'CancelOpenDatepicker',\n    data: () => ({\n      selectedDate: new Date('2018/03/26')\n    })\n  }\n</script>\n"
  };
};

/***/ }),

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/Datepicker/examples/CloseOnSelectDatepicker.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(135/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/Datepicker/examples/CloseOnSelectDatepicker.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('close-on-select-datepicker', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['close-on-select-datepicker'] = {
    name: 'close-on-select-datepicker',
    source: "<template>\n  <div>\n    <md-datepicker v-model=\"selectedDate\" md-immediately />\n  </div>\n</template>\n\n<script>\n  export default {\n    name: 'CloseOnSelectDatepicker',\n    data: () => ({\n      selectedDate: new Date('2018/03/26')\n    })\n  }\n</script>\n"
  };
};

/***/ }),

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/Datepicker/examples/DisabledDatesDatepicker.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(134/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/Datepicker/examples/DisabledDatesDatepicker.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('disabled-dates-datepicker', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['disabled-dates-datepicker'] = {
    name: 'disabled-dates-datepicker',
    source: "<template>\n  <div>\n    <md-datepicker v-model=\"selectedDate\" :md-disabled-dates=\"disabledDates\" />\n  </div>\n</template>\n\n<script>\n  export default {\n    name: 'DisabledDatesDatepicker',\n    data: () => ({\n      selectedDate: null,\n      disabledDates: date => {\n        const day = date.getDay()\n\n        return day === 6 || day === 0\n      }\n    })\n  }\n</script>\n"
  };
};

/***/ }),

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/Datepicker/examples/LabeledDatepicker.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(133/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/Datepicker/examples/LabeledDatepicker.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('labeled-datepicker', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['labeled-datepicker'] = {
    name: 'labeled-datepicker',
    source: "<template>\n  <div>\n    <md-datepicker v-model=\"selectedDate\">\n      <label>Select date</label>\n    </md-datepicker>\n  </div>\n</template>\n\n<script>\n  export default {\n    name: 'LabeledDatepicker',\n    data: () => ({\n      selectedDate: null\n    })\n  }\n</script>\n"
  };
};

/***/ }),

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/Datepicker/examples/MultiTypesDatepicker.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(132/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/Datepicker/examples/MultiTypesDatepicker.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('multi-types-datepicker', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['multi-types-datepicker'] = {
    name: 'multi-types-datepicker',
    source: "<template>\n  <div>\n    <div class=\"block\">\n      <h3>Date</h3>\n      <md-datepicker v-model=\"date\" />\n      <div class=\"value\">value: {{date}}</div>\n    </div>\n    <md-divider />\n    <div class=\"block\">\n      <h3>String</h3>\n      <md-datepicker v-model=\"string\" />\n      <div class=\"value\">value: {{string}}</div>\n    </div>\n    <md-divider />\n    <div class=\"block\">\n      <h3>Number</h3>\n      <md-datepicker v-model=\"number\" />\n      <div class=\"value\">value: {{number}}</div>\n    </div>\n    <md-divider />\n    <div class=\"block\">\n      <h3>Dynamic By Model</h3>\n      <md-radio :model=\"type\" value=\"date\" @change=\"toDate\">Date</md-radio>\n      <md-radio :model=\"type\" value=\"string\" @change=\"toString\">String</md-radio>\n      <md-radio :model=\"type\" value=\"number\" @change=\"toNumber\">Number</md-radio>\n      <md-datepicker v-model=\"dynamicByModel\" />\n      <div class=\"value\">value: {{dynamicByModel}}</div>\n    </div>\n    <md-divider />\n    <div class=\"block\">\n      <h3>Dynamic By <code>:md-model-type</code></h3>\n      <md-radio v-model=\"mdTypeValue\" value=\"date\">Date</md-radio>\n      <md-radio v-model=\"mdTypeValue\" value=\"string\">String</md-radio>\n      <md-radio v-model=\"mdTypeValue\" value=\"number\">Number</md-radio>\n      <md-datepicker v-model=\"dynamicByMdType\" :md-model-type=\"mdType\" />\n      <div class=\"value\">value: {{dynamicByMdType}}</div>\n    </div>\n  </div>\n</template>\n\n<script>\n  import parse from 'date-fns/parse'\n  import format from 'date-fns/format'\n  import isValid from 'date-fns/isValid'\n\n  export default {\n    name: 'MultiTypesDatepicker',\n    data () {\n      let dateFormat = this.$material.locale.dateFormat || 'yyyy-MM-dd'\n      let now = new Date()\n\n      return {\n        date: now,\n        string: format(now, dateFormat),\n        number: Number(now),\n        dynamicByModel: now,\n        mdTypeValue: 'date',\n        dynamicByMdType: now\n      }\n    },\n    computed: {\n      firstDayOfAWeek: {\n        get () {\n          return this.$material.locale.firstDayOfAWeek\n        },\n        set (val) {\n          this.$material.locale.firstDayOfAWeek = val\n        }\n      },\n      // eslint-disable-next-line\n      type () {\n        if (typeof this.dynamicByModel === 'object' && this.dynamicByModel instanceof Date && isValid(this.dynamicByModel)) {\n          return 'date'\n        } else if (typeof this.dynamicByModel === 'string') {\n          return 'string'\n        } else if (Number.isInteger(this.dynamicByModel) && this.dynamicByModel >= 0) {\n          return 'number'\n        } else if (this.model === null || this.model === undefined) {\n          return 'null'\n        } else {\n          throw new Error('Type error')\n        }\n      },\n      dateFormat () {\n        return this.$material.locale.dateFormat || 'yyyy-MM-dd'\n      },\n      mdType () {\n        switch (this.mdTypeValue) {\n        case 'date':\n          return Date\n        case 'string':\n          return String\n        case 'number':\n          return Number\n        }\n      }\n    },\n    methods: {\n      toDate () {\n        switch (this.type) {\n        case 'null':\n          this.dynamicByModel = null\n          break\n\n        case 'string':\n          this.dynamicByModel = parse(this.dynamicByModel, this.dateFormat, new Date())\n          break\n\n        case 'number':\n          this.dynamicByModel = new Date(this.dynamicByModel)\n          break\n        }\n      },\n      toString () {\n        this.toDate()\n        this.dynamicByModel = this.dynamicByModel && format(this.dynamicByModel, this.dateFormat)\n      },\n      toNumber () {\n        this.toDate()\n        this.dynamicByModel = this.dynamicByModel && Number(this.dynamicByModel)\n      }\n    }\n  }\n</script>\n"
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

/***/ "./docs/app/pages/Components/Datepicker/Datepicker.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Datepicker_vue__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?cacheDirectory=true!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./docs/app/pages/Components/Datepicker/Datepicker.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Datepicker_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Datepicker_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Datepicker_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, (function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Datepicker_vue__[key]; })) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0fdb9b68_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Datepicker_vue__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-0fdb9b68\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./docs/app/pages/Components/Datepicker/Datepicker.vue");
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Datepicker_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0fdb9b68_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Datepicker_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* customBlocks */
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/Datepicker/examples/BasicDatepicker.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/Datepicker/examples/LabeledDatepicker.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/Datepicker/examples/MultiTypesDatepicker.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/Datepicker/examples/CancelOpenDatepicker.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/Datepicker/examples/CloseOnSelectDatepicker.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/Datepicker/examples/DisabledDatesDatepicker.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}


/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?cacheDirectory=true!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./docs/app/pages/Components/Datepicker/Datepicker.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _docsExample = __webpack_require__("./docs/app/mixins/docsExample.js");

var _docsExample2 = _interopRequireDefault(_docsExample);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'DocDatepicker',
  mixins: [_docsExample2.default],
  data: function data() {
    return {
      props: {
        headings: ['Name', 'Description', 'Default'],
        props: [{
          name: 'v-model',
          type: 'Date|Number|String',
          description: 'The model variable to bind the selected date',
          defaults: 'null'
        }, {
          name: 'md-model-type',
          type: 'Constructor',
          description: 'Model type. This props will be overwritten by <code>typeof v-model</code>. It could be <code>Date</code>, <code>Number</code> or <code>String</code>.',
          defaults: 'Date'
        }, {
          name: 'md-disabled-dates',
          type: 'Array|Function',
          description: 'The optional disabled dates. Can be either Array or Function. <br>- If <code>Array</code>, the Datepicker will disable all days inside. <br>- If <code>Function</code>, the Datepicker will pass the current day as a parameter of this function. If the return false, then the date will be disabled.',
          defaults: 'null'
        }, {
          name: 'md-open-on-focus',
          type: 'Boolean',
          description: 'Disable the on focus event. Will open only if the user clicks on the icon.',
          defaults: 'true'
        }, {
          name: 'md-immediately',
          type: 'Boolean',
          description: 'Select the date without confirm and close the dialog immediately.',
          defaults: 'false'
        }, {
          name: 'md-override-native',
          type: 'Boolean',
          description: 'Override native browser pickers by changing type of input to text.',
          defaults: 'true'
        }, {
          name: 'md-debounce',
          type: 'Number',
          description: 'Debounces the conversion of plaintext into a date object. Set to a longer time if your users type slowly, or shorter if your users type really fast.',
          defaults: 1000
        }]
      },
      events: {
        headings: ['Name', 'Description', 'Value'],
        props: [{
          name: 'md-opened',
          description: 'Triggered when a datepicker dialog opens',
          value: 'null'
        }, {
          name: 'md-closed',
          description: 'Triggered when a datepicker dialog closes',
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-0fdb9b68\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./docs/app/pages/Components/Datepicker/Datepicker.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('page-container',{attrs:{"centered":"","title":_vm.$t('pages.datepicker.title')}},[_c('div',{staticClass:"page-container-section"},[_c('p',[_vm._v("Datepickers use a dialog window and provide a simple way to select a single value from a pre-determined set. The component can have disabled dates and it's really easy to use.")])]),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('h2',[_vm._v("Datepicker")]),_vm._v(" "),_c('code-example',{attrs:{"title":"Basic Example","component":_vm.examples['basic-datepicker']}}),_vm._v(" "),_c('code-example',{attrs:{"title":"Labeled Example","component":_vm.examples['labeled-datepicker']}})],1),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('h2',[_vm._v("Model Types")]),_vm._v(" "),_c('p',[_vm._v("Vue Material datepicker supports multiple types of "),_c('code',[_vm._v("v-model")]),_vm._v(", whiches default is "),_c('code',[_vm._v("Date")]),_vm._v(". If you want to communicate with other services without timezone problems, you could use "),_c('code',[_vm._v("String")]),_vm._v(" to avoid them:")]),_vm._v(" "),_c('code-example',{attrs:{"title":"With different type binding","component":_vm.examples['multi-types-datepicker']}})],1),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('h2',[_vm._v("Cancel open on focus")]),_vm._v(" "),_c('p',[_vm._v("By default Datepicker component open on focus to it's input. This will make the input useless and the user will not be able to type the date manually. You can disable this behavior:")]),_vm._v(" "),_c('code-example',{attrs:{"title":"With initial date selected","component":_vm.examples['cancel-open-datepicker']}})],1),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('h2',[_vm._v("Immediately selection")]),_vm._v(" "),_c('p',[_vm._v("The Datepicker dialog can be made to close instantly after a date is selected. The date will be selected immediately without any additional confirmation or user action:")]),_vm._v(" "),_c('code-example',{attrs:{"title":"Close dialog on select","component":_vm.examples['close-on-select-datepicker']}})],1),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('h2',[_vm._v("Disabled dates")]),_vm._v(" "),_c('p',[_vm._v("Sometimes you may need to disable certain dates from being selected. Let's suppose that you want to let the user select only week days:")]),_vm._v(" "),_c('code-example',{attrs:{"title":"No weekends available","component":_vm.examples['disabled-dates-datepicker']}}),_vm._v(" "),_c('api-item',{attrs:{"title":"API - md-datepicker"}},[_c('p',[_vm._v("All the following options can be applied to the md-datepicker component:")]),_vm._v(" "),_c('api-table',{attrs:{"slot":"props","headings":_vm.props.headings,"props":_vm.props.props},slot:"props"}),_vm._v(" "),_c('api-table',{attrs:{"slot":"events","headings":_vm.events.headings,"props":_vm.events.props},slot:"events"})],1)],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});