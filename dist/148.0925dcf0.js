webpackJsonp([148],{

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/Table/examples/TableBasic.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(110/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/Table/examples/TableBasic.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('table-basic', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['table-basic'] = {
    name: 'table-basic',
    source: "<template>\n  <div>\n    <md-table>\n      <md-table-row>\n        <md-table-head md-numeric>ID</md-table-head>\n        <md-table-head>Name</md-table-head>\n        <md-table-head>Email</md-table-head>\n        <md-table-head>Gender</md-table-head>\n        <md-table-head>Job Title</md-table-head>\n      </md-table-row>\n\n      <md-table-row>\n        <md-table-cell md-numeric>1</md-table-cell>\n        <md-table-cell>Shawna Dubbin</md-table-cell>\n        <md-table-cell>sdubbin0@geocities.com</md-table-cell>\n        <md-table-cell>Male</md-table-cell>\n        <md-table-cell>Assistant Media Planner</md-table-cell>\n      </md-table-row>\n\n      <md-table-row>\n        <md-table-cell md-numeric>2</md-table-cell>\n        <md-table-cell>Odette Demageard</md-table-cell>\n        <md-table-cell>odemageard1@spotify.com</md-table-cell>\n        <md-table-cell>Female</md-table-cell>\n        <md-table-cell>Account Coordinator</md-table-cell>\n      </md-table-row>\n\n      <md-table-row>\n        <md-table-cell md-numeric>3</md-table-cell>\n        <md-table-cell>Vera Taleworth</md-table-cell>\n        <md-table-cell>vtaleworth2@google.ca</md-table-cell>\n        <md-table-cell>Male</md-table-cell>\n        <md-table-cell>Community Outreach Specialist</md-table-cell>\n      </md-table-row>\n    </md-table>\n  </div>\n</template>\n\n<script>\n  export default {\n    name: 'TableBasic'\n  }\n</script>\n"
  };
};

/***/ }),

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/Table/examples/TableCard.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(109/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/Table/examples/TableCard.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('table-card', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['table-card'] = {
    name: 'table-card',
    source: "<template>\n  <div>\n    <md-table md-card>\n      <md-table-toolbar>\n        <h1 class=\"md-title\">Users</h1>\n      </md-table-toolbar>\n\n      <md-table-row>\n        <md-table-head md-numeric>ID</md-table-head>\n        <md-table-head>Name</md-table-head>\n        <md-table-head>Email</md-table-head>\n        <md-table-head>Gender</md-table-head>\n        <md-table-head>Job Title</md-table-head>\n      </md-table-row>\n\n      <md-table-row>\n        <md-table-cell md-numeric>1</md-table-cell>\n        <md-table-cell>Shawna Dubbin</md-table-cell>\n        <md-table-cell>sdubbin0@geocities.com</md-table-cell>\n        <md-table-cell>Male</md-table-cell>\n        <md-table-cell>Assistant Media Planner</md-table-cell>\n      </md-table-row>\n\n      <md-table-row>\n        <md-table-cell md-numeric>2</md-table-cell>\n        <md-table-cell>Odette Demageard</md-table-cell>\n        <md-table-cell>odemageard1@spotify.com</md-table-cell>\n        <md-table-cell>Female</md-table-cell>\n        <md-table-cell>Account Coordinator</md-table-cell>\n      </md-table-row>\n\n      <md-table-row>\n        <md-table-cell md-numeric>3</md-table-cell>\n        <md-table-cell>Vera Taleworth</md-table-cell>\n        <md-table-cell>vtaleworth2@google.ca</md-table-cell>\n        <md-table-cell>Male</md-table-cell>\n        <md-table-cell>Community Outreach Specialist</md-table-cell>\n      </md-table-row>\n    </md-table>\n  </div>\n</template>\n\n<script>\n  export default {\n    name: 'TableCard'\n  }\n</script>\n"
  };
};

/***/ }),

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/Table/examples/TableCustomSort.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(108/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/Table/examples/TableCustomSort.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('table-custom-sort', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['table-custom-sort'] = {
    name: 'table-custom-sort',
    source: "<template>\n  <div>\n    <md-table v-model=\"users\" :md-sort.sync=\"currentSort\" :md-sort-order.sync=\"currentSortOrder\" :md-sort-fn=\"customSort\" md-card>\n      <md-table-toolbar>\n        <h1 class=\"md-title\">Users</h1>\n      </md-table-toolbar>\n\n      <md-table-row slot=\"md-table-row\" slot-scope=\"{ item }\">\n        <md-table-cell md-label=\"ID\" md-numeric>{{ item.id }}</md-table-cell>\n        <md-table-cell md-label=\"Name\" md-sort-by=\"name\">{{ item.name }}</md-table-cell>\n        <md-table-cell md-label=\"Email\" md-sort-by=\"email\">{{ item.email }}</md-table-cell>\n        <md-table-cell md-label=\"Gender\" md-sort-by=\"gender\">{{ item.gender }}</md-table-cell>\n        <md-table-cell md-label=\"Job Title\" md-sort-by=\"title\">{{ item.title }}</md-table-cell>\n      </md-table-row>\n    </md-table>\n  </div>\n</template>\n\n<script>\n  export default {\n    name: 'TableCustomSort',\n    data: () => ({\n      currentSort: 'name',\n      currentSortOrder: 'asc',\n      users: [\n        {\n          id: 1,\n          name: 'Shawna Dubbin',\n          email: 'sdubbin0@geocities.com',\n          gender: 'Male',\n          title: 'Assistant Media Planner'\n        },\n        {\n          id: 2,\n          name: 'Odette Demageard',\n          email: 'odemageard1@spotify.com',\n          gender: 'Female',\n          title: 'Account Coordinator'\n        },\n        {\n          id: 3,\n          name: 'Lonnie Izkovitz',\n          email: 'lizkovitz3@youtu.be',\n          gender: 'Female',\n          title: 'Operator'\n        },\n        {\n          id: 4,\n          name: 'Thatcher Stave',\n          email: 'tstave4@reference.com',\n          gender: 'Male',\n          title: 'Software Test Engineer III'\n        },\n        {\n          id: 5,\n          name: 'Clarinda Marieton',\n          email: 'cmarietonh@theatlantic.com',\n          gender: 'Female',\n          title: 'Paralegal'\n        }\n      ]\n    }),\n    methods: {\n      customSort (value) {\n        return value.sort((a, b) => {\n          const sortBy = this.currentSort\n\n          if (this.currentSortOrder === 'desc') {\n            return a[sortBy].localeCompare(b[sortBy])\n          }\n\n          return b[sortBy].localeCompare(a[sortBy])\n        })\n      }\n    }\n  }\n</script>\n"
  };
};

/***/ }),

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/Table/examples/TableFixed.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(107/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/Table/examples/TableFixed.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('table-fixed', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['table-fixed'] = {
    name: 'table-fixed',
    source: "<template>\n  <div>\n    <md-table v-model=\"users\" md-sort=\"name\" md-sort-order=\"asc\" md-card md-fixed-header>\n      <md-table-toolbar>\n        <h1 class=\"md-title\">Users</h1>\n      </md-table-toolbar>\n\n      <md-table-row slot=\"md-table-row\" slot-scope=\"{ item }\">\n        <md-table-cell md-label=\"ID\" md-sort-by=\"id\" md-numeric>{{ item.id }}</md-table-cell>\n        <md-table-cell md-label=\"Name\" md-sort-by=\"name\">{{ item.name }}</md-table-cell>\n        <md-table-cell md-label=\"Email\" md-sort-by=\"email\">{{ item.email }}</md-table-cell>\n        <md-table-cell md-label=\"Gender\" md-sort-by=\"gender\">{{ item.gender }}</md-table-cell>\n        <md-table-cell md-label=\"Job Title\" md-sort-by=\"title\">{{ item.title }}</md-table-cell>\n      </md-table-row>\n    </md-table>\n  </div>\n</template>\n\n<script>\n  export default {\n    name: 'TableFixed',\n    data: () => ({\n      users: [\n        {\n          id: 1,\n          name: \"Shawna Dubbin\",\n          email: \"sdubbin0@geocities.com\",\n          gender: \"Male\",\n          title: \"Assistant Media Planner\"\n        },\n        {\n          id: 2,\n          name: \"Odette Demageard\",\n          email: \"odemageard1@spotify.com\",\n          gender: \"Female\",\n          title: \"Account Coordinator\"\n        },\n        {\n          id: 3,\n          name: \"Vera Taleworth\",\n          email: \"vtaleworth2@google.ca\",\n          gender: \"Male\",\n          title: \"Community Outreach Specialist\"\n        },\n        {\n          id: 4,\n          name: \"Lonnie Izkovitz\",\n          email: \"lizkovitz3@youtu.be\",\n          gender: \"Female\",\n          title: \"Operator\"\n        },\n        {\n          id: 5,\n          name: \"Thatcher Stave\",\n          email: \"tstave4@reference.com\",\n          gender: \"Male\",\n          title: \"Software Test Engineer III\"\n        },\n        {\n          id: 6,\n          name: \"Karim Chipping\",\n          email: \"kchipping5@scribd.com\",\n          gender: \"Female\",\n          title: \"Safety Technician II\"\n        },\n        {\n          id: 7,\n          name: \"Helge Holyard\",\n          email: \"hholyard6@howstuffworks.com\",\n          gender: \"Female\",\n          title: \"Internal Auditor\"\n        },\n        {\n          id: 8,\n          name: \"Rod Titterton\",\n          email: \"rtitterton7@nydailynews.com\",\n          gender: \"Male\",\n          title: \"Technical Writer\"\n        },\n        {\n          id: 9,\n          name: \"Gawen Applewhite\",\n          email: \"gapplewhite8@reverbnation.com\",\n          gender: \"Female\",\n          title: \"GIS Technical Architect\"\n        },\n        {\n          id: 10,\n          name: \"Nero Mulgrew\",\n          email: \"nmulgrew9@plala.or.jp\",\n          gender: \"Female\",\n          title: \"Staff Scientist\"\n        },\n        {\n          id: 11,\n          name: \"Cybill Rimington\",\n          email: \"crimingtona@usnews.com\",\n          gender: \"Female\",\n          title: \"Assistant Professor\"\n        },\n        {\n          id: 12,\n          name: \"Maureene Eggleson\",\n          email: \"megglesonb@elpais.com\",\n          gender: \"Male\",\n          title: \"Recruiting Manager\"\n        },\n        {\n          id: 13,\n          name: \"Cortney Caulket\",\n          email: \"ccaulketc@cbsnews.com\",\n          gender: \"Male\",\n          title: \"Safety Technician IV\"\n        },\n        {\n          id: 14,\n          name: \"Selig Swynfen\",\n          email: \"sswynfend@cpanel.net\",\n          gender: \"Female\",\n          title: \"Environmental Specialist\"\n        },\n        {\n          id: 15,\n          name: \"Ingar Raggles\",\n          email: \"iragglese@cbc.ca\",\n          gender: \"Female\",\n          title: \"VP Sales\"\n        },\n        {\n          id: 16,\n          name: \"Karmen Mines\",\n          email: \"kminesf@topsy.com\",\n          gender: \"Male\",\n          title: \"Administrative Officer\"\n        },\n        {\n          id: 17,\n          name: \"Salome Judron\",\n          email: \"sjudrong@jigsy.com\",\n          gender: \"Male\",\n          title: \"Staff Scientist\"\n        },\n        {\n          id: 18,\n          name: \"Clarinda Marieton\",\n          email: \"cmarietonh@theatlantic.com\",\n          gender: \"Male\",\n          title: \"Paralegal\"\n        },\n        {\n          id: 19,\n          name: \"Paxon Lotterington\",\n          email: \"plotteringtoni@netvibes.com\",\n          gender: \"Female\",\n          title: \"Marketing Assistant\"\n        },\n        {\n          id: 20,\n          name: \"Maura Thoms\",\n          email: \"mthomsj@webeden.co.uk\",\n          gender: \"Male\",\n          title: \"Actuary\"\n        }\n      ]\n    })\n  }\n</script>\n"
  };
};

/***/ }),

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/Table/examples/TableMultiple.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(25/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/Table/examples/TableMultiple.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('table-multiple', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['table-multiple'] = {
    name: 'table-multiple',
    source: "<template>\n  <div>\n    <md-table v-model=\"people\" md-card @md-selected=\"onSelect\">\n      <md-table-toolbar>\n        <h1 class=\"md-title\">With auto select and alternate headers</h1>\n      </md-table-toolbar>\n\n      <md-table-toolbar slot=\"md-table-alternate-header\" slot-scope=\"{ count }\">\n        <div class=\"md-toolbar-section-start\">{{ getAlternateLabel(count) }}</div>\n\n        <div class=\"md-toolbar-section-end\">\n          <md-button class=\"md-icon-button\">\n            <md-icon>delete</md-icon>\n          </md-button>\n        </div>\n      </md-table-toolbar>\n\n      <md-table-row slot=\"md-table-row\" slot-scope=\"{ item }\" :md-disabled=\"item.name.includes('Stave')\" md-selectable=\"multiple\" md-auto-select>\n        <md-table-cell md-label=\"Name\" md-sort-by=\"name\">{{ item.name }}</md-table-cell>\n        <md-table-cell md-label=\"Email\" md-sort-by=\"email\">{{ item.email }}</md-table-cell>\n        <md-table-cell md-label=\"Gender\" md-sort-by=\"gender\">{{ item.gender }}</md-table-cell>\n        <md-table-cell md-label=\"Job Title\" md-sort-by=\"title\">{{ item.title }}</md-table-cell>\n      </md-table-row>\n    </md-table>\n\n    <p>Selected:</p>\n    {{ selected }}\n  </div>\n</template>\n\n<script>\n  export default {\n    name: 'TableMultiple',\n    data: () => ({\n      selected: [],\n      people: [\n        {\n          name: 'Shawna Dubbin',\n          email: 'sdubbin0@geocities.com',\n          gender: 'Male',\n          title: 'Assistant Media Planner'\n        },\n        {\n          name: 'Odette Demageard',\n          email: 'odemageard1@spotify.com',\n          gender: 'Female',\n          title: 'Account Coordinator'\n        },\n        {\n          name: 'Lonnie Izkovitz',\n          email: 'lizkovitz3@youtu.be',\n          gender: 'Female',\n          title: 'Operator'\n        },\n        {\n          name: 'Thatcher Stave',\n          email: 'tstave4@reference.com',\n          gender: 'Male',\n          title: 'Software Test Engineer III'\n        },\n        {\n          name: 'Clarinda Marieton',\n          email: 'cmarietonh@theatlantic.com',\n          gender: 'Female',\n          title: 'Paralegal'\n        }\n      ]\n    }),\n    methods: {\n      onSelect (items) {\n        this.selected = items\n      },\n      getAlternateLabel (count) {\n        let plural = ''\n\n        if (count > 1) {\n          plural = 's'\n        }\n\n        return `${count} user${plural} selected`\n      }\n    }\n  }\n</script>\n\n<style lang=\"scss\" scoped>\n  .md-table + .md-table {\n    margin-top: 16px\n  }\n</style>\n"
  };
};

/***/ }),

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/Table/examples/TablePaginationSoon.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(106/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/Table/examples/TablePaginationSoon.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('table-pagination-soon', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['table-pagination-soon'] = {
    name: 'table-pagination-soon',
    source: "<template>\n  <div>\n    Coming Soon...\n  </div>\n</template>\n\n<script>\n  export default {\n    name: 'TablePaginationSoon'\n  }\n</script>\n"
  };
};

/***/ }),

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/Table/examples/TableSearch.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(24/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/Table/examples/TableSearch.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('table-search', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['table-search'] = {
    name: 'table-search',
    source: "<template>\n  <div>\n    <md-table v-model=\"searched\" md-sort=\"name\" md-sort-order=\"asc\" md-card md-fixed-header>\n      <md-table-toolbar>\n        <div class=\"md-toolbar-section-start\">\n          <h1 class=\"md-title\">Users</h1>\n        </div>\n\n        <md-field md-clearable class=\"md-toolbar-section-end\">\n          <md-input placeholder=\"Search by name...\" v-model=\"search\" @input=\"searchOnTable\" />\n        </md-field>\n      </md-table-toolbar>\n\n      <md-table-empty-state\n        md-label=\"No users found\"\n        :md-description=\"`No user found for this '${search}' query. Try a different search term or create a new user.`\">\n        <md-button class=\"md-primary md-raised\" @click=\"newUser\">Create New User</md-button>\n      </md-table-empty-state>\n\n      <md-table-row slot=\"md-table-row\" slot-scope=\"{ item }\">\n        <md-table-cell md-label=\"ID\" md-sort-by=\"id\" md-numeric>{{ item.id }}</md-table-cell>\n        <md-table-cell md-label=\"Name\" md-sort-by=\"name\">{{ item.name }}</md-table-cell>\n        <md-table-cell md-label=\"Email\" md-sort-by=\"email\">{{ item.email }}</md-table-cell>\n        <md-table-cell md-label=\"Gender\" md-sort-by=\"gender\">{{ item.gender }}</md-table-cell>\n        <md-table-cell md-label=\"Job Title\" md-sort-by=\"title\">{{ item.title }}</md-table-cell>\n      </md-table-row>\n    </md-table>\n  </div>\n</template>\n\n<script>\n  const toLower = text => {\n    return text.toString().toLowerCase()\n  }\n\n  const searchByName = (items, term) => {\n    if (term) {\n      return items.filter(item => toLower(item.name).includes(toLower(term)))\n    }\n\n    return items\n  }\n\n  export default {\n    name: 'TableSearch',\n    data: () => ({\n      search: null,\n      searched: [],\n      users: [\n        {\n          id: 1,\n          name: \"Shawna Dubbin\",\n          email: \"sdubbin0@geocities.com\",\n          gender: \"Male\",\n          title: \"Assistant Media Planner\"\n        },\n        {\n          id: 2,\n          name: \"Odette Demageard\",\n          email: \"odemageard1@spotify.com\",\n          gender: \"Female\",\n          title: \"Account Coordinator\"\n        },\n        {\n          id: 3,\n          name: \"Vera Taleworth\",\n          email: \"vtaleworth2@google.ca\",\n          gender: \"Male\",\n          title: \"Community Outreach Specialist\"\n        },\n        {\n          id: 4,\n          name: \"Lonnie Izkovitz\",\n          email: \"lizkovitz3@youtu.be\",\n          gender: \"Female\",\n          title: \"Operator\"\n        },\n        {\n          id: 5,\n          name: \"Thatcher Stave\",\n          email: \"tstave4@reference.com\",\n          gender: \"Male\",\n          title: \"Software Test Engineer III\"\n        },\n        {\n          id: 6,\n          name: \"Karim Chipping\",\n          email: \"kchipping5@scribd.com\",\n          gender: \"Female\",\n          title: \"Safety Technician II\"\n        },\n        {\n          id: 7,\n          name: \"Helge Holyard\",\n          email: \"hholyard6@howstuffworks.com\",\n          gender: \"Female\",\n          title: \"Internal Auditor\"\n        },\n        {\n          id: 8,\n          name: \"Rod Titterton\",\n          email: \"rtitterton7@nydailynews.com\",\n          gender: \"Male\",\n          title: \"Technical Writer\"\n        },\n        {\n          id: 9,\n          name: \"Gawen Applewhite\",\n          email: \"gapplewhite8@reverbnation.com\",\n          gender: \"Female\",\n          title: \"GIS Technical Architect\"\n        },\n        {\n          id: 10,\n          name: \"Nero Mulgrew\",\n          email: \"nmulgrew9@plala.or.jp\",\n          gender: \"Female\",\n          title: \"Staff Scientist\"\n        },\n        {\n          id: 11,\n          name: \"Cybill Rimington\",\n          email: \"crimingtona@usnews.com\",\n          gender: \"Female\",\n          title: \"Assistant Professor\"\n        },\n        {\n          id: 12,\n          name: \"Maureene Eggleson\",\n          email: \"megglesonb@elpais.com\",\n          gender: \"Male\",\n          title: \"Recruiting Manager\"\n        },\n        {\n          id: 13,\n          name: \"Cortney Caulket\",\n          email: \"ccaulketc@cbsnews.com\",\n          gender: \"Male\",\n          title: \"Safety Technician IV\"\n        },\n        {\n          id: 14,\n          name: \"Selig Swynfen\",\n          email: \"sswynfend@cpanel.net\",\n          gender: \"Female\",\n          title: \"Environmental Specialist\"\n        },\n        {\n          id: 15,\n          name: \"Ingar Raggles\",\n          email: \"iragglese@cbc.ca\",\n          gender: \"Female\",\n          title: \"VP Sales\"\n        },\n        {\n          id: 16,\n          name: \"Karmen Mines\",\n          email: \"kminesf@topsy.com\",\n          gender: \"Male\",\n          title: \"Administrative Officer\"\n        },\n        {\n          id: 17,\n          name: \"Salome Judron\",\n          email: \"sjudrong@jigsy.com\",\n          gender: \"Male\",\n          title: \"Staff Scientist\"\n        },\n        {\n          id: 18,\n          name: \"Clarinda Marieton\",\n          email: \"cmarietonh@theatlantic.com\",\n          gender: \"Male\",\n          title: \"Paralegal\"\n        },\n        {\n          id: 19,\n          name: \"Paxon Lotterington\",\n          email: \"plotteringtoni@netvibes.com\",\n          gender: \"Female\",\n          title: \"Marketing Assistant\"\n        },\n        {\n          id: 20,\n          name: \"Maura Thoms\",\n          email: \"mthomsj@webeden.co.uk\",\n          gender: \"Male\",\n          title: \"Actuary\"\n        }\n      ]\n    }),\n    methods: {\n      newUser () {\n        window.alert('Noop')\n      },\n      searchOnTable () {\n        this.searched = searchByName(this.users, this.search)\n      }\n    },\n    created () {\n      this.searched = this.users\n    }\n  }\n</script>\n\n<style lang=\"scss\" scoped>\n  .md-field {\n    max-width: 300px;\n  }\n</style>\n"
  };
};

/***/ }),

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/Table/examples/TableSingle.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(23/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/Table/examples/TableSingle.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('table-single', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['table-single'] = {
    name: 'table-single',
    source: "<template>\n  <div>\n    <md-table v-model=\"people\" md-card @md-selected=\"onSelect\">\n      <md-table-toolbar>\n        <h1 class=\"md-title\">Selection Colors</h1>\n      </md-table-toolbar>\n\n      <md-table-row slot=\"md-table-row\" slot-scope=\"{ item }\" :class=\"getClass(item)\" md-selectable=\"single\">\n        <md-table-cell md-label=\"ID\" md-sort-by=\"id\" md-numeric>{{ item.id }}</md-table-cell>\n        <md-table-cell md-label=\"Name\" md-sort-by=\"name\">{{ item.name }}</md-table-cell>\n        <md-table-cell md-label=\"Email\" md-sort-by=\"email\">{{ item.email }}</md-table-cell>\n        <md-table-cell md-label=\"Gender\" md-sort-by=\"gender\">{{ item.gender }}</md-table-cell>\n        <md-table-cell md-label=\"Job Title\" md-sort-by=\"title\">{{ item.title }}</md-table-cell>\n      </md-table-row>\n    </md-table>\n\n    <p>Selected:</p>\n    {{ selected }}\n  </div>\n</template>\n\n<script>\n  export default {\n    name: 'TableSingle',\n    data: () => ({\n      selected: {},\n      people: [\n        {\n          id: 1,\n          name: 'Shawna Dubbin',\n          email: 'sdubbin0@geocities.com',\n          gender: 'Male',\n          title: 'Assistant Media Planner'\n        },\n        {\n          id: 2,\n          name: 'Odette Demageard',\n          email: 'odemageard1@spotify.com',\n          gender: 'Female',\n          title: 'Account Coordinator'\n        },\n        {\n          id: 3,\n          name: 'Lonnie Izkovitz',\n          email: 'lizkovitz3@youtu.be',\n          gender: 'Female',\n          title: 'Operator'\n        },\n        {\n          id: 4,\n          name: 'Thatcher Stave',\n          email: 'tstave4@reference.com',\n          gender: 'Male',\n          title: 'Software Test Engineer III'\n        },\n        {\n          id: 5,\n          name: 'Clarinda Marieton',\n          email: 'cmarietonh@theatlantic.com',\n          gender: 'Female',\n          title: 'Paralegal'\n        }\n      ]\n    }),\n    methods: {\n      getClass: ({ id }) => ({\n        'md-primary': id === 2,\n        'md-accent': id === 3\n      }),\n      onSelect (item) {\n        this.selected = item\n      }\n    }\n  }\n</script>\n\n<style lang=\"scss\" scoped>\n  .md-table + .md-table {\n    margin-top: 16px\n  }\n</style>\n"
  };
};

/***/ }),

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/Table/examples/TableSort.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(105/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/Table/examples/TableSort.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('table-sort', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['table-sort'] = {
    name: 'table-sort',
    source: "<template>\n  <div>\n    <md-table v-model=\"users\" md-sort=\"name\" md-sort-order=\"asc\" md-card>\n      <md-table-toolbar>\n        <h1 class=\"md-title\">Users</h1>\n      </md-table-toolbar>\n\n      <md-table-row slot=\"md-table-row\" slot-scope=\"{ item }\">\n        <md-table-cell md-label=\"ID\" md-numeric>{{ item.id }}</md-table-cell>\n        <md-table-cell md-label=\"Name\" md-sort-by=\"name\">{{ item.name }}</md-table-cell>\n        <md-table-cell md-label=\"Email\" md-sort-by=\"email\">{{ item.email }}</md-table-cell>\n        <md-table-cell md-label=\"Gender\" md-sort-by=\"gender\">{{ item.gender }}</md-table-cell>\n        <md-table-cell md-label=\"Job Title\" md-sort-by=\"title\">{{ item.title }}</md-table-cell>\n      </md-table-row>\n    </md-table>\n  </div>\n</template>\n\n<script>\n  export default {\n    name: 'TableSort',\n    data: () => ({\n      users: [\n        {\n          id: 1,\n          name: 'Shawna Dubbin',\n          email: 'sdubbin0@geocities.com',\n          gender: 'Male',\n          title: 'Assistant Media Planner'\n        },\n        {\n          id: 2,\n          name: 'Odette Demageard',\n          email: 'odemageard1@spotify.com',\n          gender: 'Female',\n          title: 'Account Coordinator'\n        },\n        {\n          id: 3,\n          name: 'Lonnie Izkovitz',\n          email: 'lizkovitz3@youtu.be',\n          gender: 'Female',\n          title: 'Operator'\n        },\n        {\n          id: 4,\n          name: 'Thatcher Stave',\n          email: 'tstave4@reference.com',\n          gender: 'Male',\n          title: 'Software Test Engineer III'\n        },\n        {\n          id: 5,\n          name: 'Clarinda Marieton',\n          email: 'cmarietonh@theatlantic.com',\n          gender: 'Female',\n          title: 'Paralegal'\n        }\n      ]\n    })\n  }\n</script>\n"
  };
};

/***/ }),

/***/ "./build/loaders/component-example-loader.js!./docs/app/pages/Components/Table/examples/TableTemplate.vue":
/***/ (function(module, exports, __webpack_require__) {


const Vue = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
const CodeLoading = __webpack_require__("./docs/app/components/CodeLoading.vue");

module.exports = function (component) {
  const asyncComponent = resolve => ({
    component: __webpack_require__.e/* require */(104/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./docs/app/pages/Components/Table/examples/TableTemplate.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
    loading: CodeLoading,
    delay: 0
  });

  Vue.default.component('table-template', asyncComponent);

  component.options.examples = component.options.examples || {};
  component.options.examples['table-template'] = {
    name: 'table-template',
    source: "<template>\n  <div>\n    <md-table v-model=\"users\" md-card>\n      <md-table-toolbar>\n        <h1 class=\"md-title\">Users</h1>\n      </md-table-toolbar>\n\n      <md-table-row slot=\"md-table-row\" slot-scope=\"{ item }\">\n        <md-table-cell md-label=\"ID\" md-sort-by=\"id\" md-numeric>{{ item.id }}</md-table-cell>\n        <md-table-cell md-label=\"Name\" md-sort-by=\"name\">{{ item.name }}</md-table-cell>\n        <md-table-cell md-label=\"Email\" md-sort-by=\"email\">{{ item.email }}</md-table-cell>\n        <md-table-cell md-label=\"Gender\" md-sort-by=\"gender\">{{ item.gender }}</md-table-cell>\n        <md-table-cell md-label=\"Job Title\" md-sort-by=\"title\">{{ item.title }}</md-table-cell>\n      </md-table-row>\n    </md-table>\n  </div>\n</template>\n\n<script>\n  export default {\n    name: 'TableTemplate',\n    data: () => ({\n      users: [\n        {\n          id: 1,\n          name: 'Shawna Dubbin',\n          email: 'sdubbin0@geocities.com',\n          gender: 'Male',\n          title: 'Assistant Media Planner'\n        },\n        {\n          id: 2,\n          name: 'Odette Demageard',\n          email: 'odemageard1@spotify.com',\n          gender: 'Female',\n          title: 'Account Coordinator'\n        },\n        {\n          id: 3,\n          name: 'Lonnie Izkovitz',\n          email: 'lizkovitz3@youtu.be',\n          gender: 'Female',\n          title: 'Operator'\n        },\n        {\n          id: 4,\n          name: 'Thatcher Stave',\n          email: 'tstave4@reference.com',\n          gender: 'Male',\n          title: 'Software Test Engineer III'\n        },\n        {\n          id: 5,\n          name: 'Clarinda Marieton',\n          email: 'cmarietonh@theatlantic.com',\n          gender: 'Female',\n          title: 'Paralegal'\n        }\n      ]\n    })\n  }\n</script>\n"
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

/***/ "./docs/app/pages/Components/Table/Table.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Table_vue__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?cacheDirectory=true!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./docs/app/pages/Components/Table/Table.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Table_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Table_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Table_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, (function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Table_vue__[key]; })) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0aa2e4e2_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Table_vue__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-0aa2e4e2\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./docs/app/pages/Components/Table/Table.vue");
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Table_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0aa2e4e2_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Table_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* customBlocks */
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/Table/examples/TableBasic.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/Table/examples/TableCard.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/Table/examples/TableTemplate.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/Table/examples/TableSort.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/Table/examples/TableCustomSort.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/Table/examples/TableFixed.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/Table/examples/TableSearch.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/Table/examples/TableSingle.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/Table/examples/TableMultiple.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}
var customBlock = __webpack_require__("./build/loaders/component-example-loader.js!./docs/app/pages/Components/Table/examples/TablePaginationSoon.vue")
if (customBlock && customBlock.__esModule) {
  customBlock = customBlock.default
}
if (typeof customBlock === "function") {
  customBlock(Component)
}


/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?cacheDirectory=true!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./docs/app/pages/Components/Table/Table.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _docsExample = __webpack_require__("./docs/app/mixins/docsExample.js");

var _docsExample2 = _interopRequireDefault(_docsExample);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'DocTable',
  mixins: [_docsExample2.default]
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

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-0aa2e4e2\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./docs/app/pages/Components/Table/Table.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('page-container',{attrs:{"centered":"","title":_vm.$t('pages.table.title')}},[_c('div',{staticClass:"page-container-section"},[_c('p',[_vm._v("Data tables display sets of raw data. They usually appear in desktop enterprise products. They are the component that have more features in all Vue Material ecosystem. There are a lot of options that you can tweak to change and impact the table layout.")]),_vm._v(" "),_c('note-block',{attrs:{"warning":""}},[_vm._v("This component is still WIP. Right now you can use the core basic stuff, but soon we will release "),_c('strong',[_vm._v("Pagination")]),_vm._v(", "),_c('strong',[_vm._v("Internal search")]),_vm._v(" and "),_c('strong',[_vm._v("Edit options")]),_vm._v(". The current API will not change during the beta phase (likely).")])],1),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('h2',[_vm._v("Simple tables")]),_vm._v(" "),_c('p',[_vm._v("To create a basic table, with simple data and without any advanced options, you have a really simple markup to use.")]),_vm._v(" "),_c('p',[_vm._v("There are some components that mimic the native table elements:")]),_vm._v(" "),_c('ul',[_c('li',[_c('code',[_vm._v("md-table")]),_vm._v(" => "),_c('code',[_vm._v("table")])]),_vm._v(" "),_c('li',[_c('code',[_vm._v("md-table-row")]),_vm._v(" => "),_c('code',[_vm._v("tr")])]),_vm._v(" "),_c('li',[_c('code',[_vm._v("md-table-head")]),_vm._v(" => "),_c('code',[_vm._v("th")])]),_vm._v(" "),_c('li',[_c('code',[_vm._v("md-table-cell")]),_vm._v(" => "),_c('code',[_vm._v("td")])])])]),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('code-example',{attrs:{"title":"Basic Table","component":_vm.examples['table-basic']}})],1),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('p',[_vm._v("In pages that only have a table, you can put this table within a card. Fortunately Vue Material provides an option out of the box to add a table card without any effort:")]),_vm._v(" "),_c('code-example',{attrs:{"title":"Table within a card","component":_vm.examples['table-card']}})],1),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('h2',[_vm._v("Advanced tables")]),_vm._v(" "),_c('note-block',{attrs:{"alert":""}},[_vm._v("This section will assume that you have knowledge of "),_c('a',{attrs:{"href":"https://vuejs.org/v2/guide/components.html#Scoped-Slots","target":"_blank"}},[_vm._v("Vue Scoped Slots")]),_vm._v(". You'll need them to create advanced tables.")]),_vm._v(" "),_c('p',[_vm._v("Vue Material have advanced tables that can handle with your data, sorting, selecting and manipulating it. You can pass a "),_c('code',[_vm._v("v-model")]),_vm._v(" with you data and tweak the table to suit your needs. Along with that, you should give to data table a custom template. This will allow the table to have its own markup and display all rows for you. This is really powerfull!")]),_vm._v(" "),_c('p',[_vm._v("There are plenty of options for you to make your data table awesome, so carefully read this documentation, analyze the code examples with full attention and take a deeper look at the API section.")]),_vm._v(" "),_c('p',[_vm._v("Let's start with a "),_c('strong',[_vm._v("custom template")]),_vm._v(" feature:")]),_vm._v(" "),_c('p',[_vm._v("When you provide a model along with a custom template, the data table will render the whole Array of options for you, without the need of a "),_c('code',[_vm._v("v-for")]),_vm._v(", for example:")]),_vm._v(" "),_c('code-example',{attrs:{"title":"Custom template","component":_vm.examples['table-template']}})],1),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('p',[_vm._v("With a custom template, a model and some other properties, you can have automatic sort:")]),_vm._v(" "),_c('code-example',{attrs:{"title":"Sort","component":_vm.examples['table-sort']}})],1),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('p',[_vm._v("Sometimes the internal sort from Vue Material will not be enough for you. You can provide your own sort function:")]),_vm._v(" "),_c('code-example',{attrs:{"title":"Custom Sort function","component":_vm.examples['table-custom-sort']}})],1),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('p',[_c('strong',[_vm._v("With large datasets comes great responsibility")]),_vm._v("... with your user. We know that Vue Material tables have a great layout, but we need to care about the usability of your screens. Fixed headers will make it easier to interact with the table by keeping all options always visible:")]),_vm._v(" "),_c('code-example',{attrs:{"title":"Fixed headers","component":_vm.examples['table-fixed']}})],1),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('p',[_vm._v("It's easy to integrate a search functionality on tables. You only need to change the model that you share with your table. You can also use the "),_c('code',[_vm._v("md-table-empty-state")]),_vm._v(" component to show an empty state when the search returns zero items:")]),_vm._v(" "),_c('code-example',{attrs:{"title":"Search and empty state","component":_vm.examples['table-search']}})],1),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('h2',[_vm._v("Selection")]),_vm._v(" "),_c('p',[_vm._v("When dealing with large data sets, you may want to have quick actions over our data, like whether to remove or make some bulk change. Tables have inner selection in two ways: Single and Multiple.")]),_vm._v(" "),_c('p',[_vm._v("The single selection is really great to highlight a particular item. Maybe, by clicking on a table row, will show the details of the item. With single selections you'll have access to the selected item and the table will do the rest. You can use the primary and accent hue colors to give more appealing highlight colors:")]),_vm._v(" "),_c('code-example',{attrs:{"title":"Single","component":_vm.examples['table-single']}})],1),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('p',[_vm._v("Multiple selections great for bulk changes and you can use the alternate header to hold the options that you can call when there are options selected. Note that if you click on the checkbox or on the entire row, it will do the same action due to "),_c('code',[_vm._v("md-auto-select")]),_vm._v(" option. Really handy:")]),_vm._v(" "),_c('code-example',{attrs:{"title":"Multiple","component":_vm.examples['table-multiple']}})],1),_vm._v(" "),_c('div',{staticClass:"page-container-section"},[_c('p',[_vm._v("The table pagination will create the mechanism to show contents through pages. This component will be available soon. :)")]),_vm._v(" "),_c('code-example',{attrs:{"title":"Pagination","component":_vm.examples['table-pagination-soon']}}),_vm._v(" "),_c('api-item',{attrs:{"title":"API - md-table"}},[_c('p',[_vm._v("Coming soon...")])])],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});