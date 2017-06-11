/* Third Party */
import Vue from 'vue';
import VueRouter from 'vue-router';
import 'babel-polyfill';
require('es6-promise').polyfill();

/* Configs */
import './config.js';
import routes from './routes.js';
import App from './App';

import PageContent from './components/PageContent';
import DocsComponent from './components/DocsComponent';
import ExampleBox from './components/ExampleBox';
import ApiTable from './components/ApiTable';
import CodeBlock from './components/CodeBlock';
import ReleaseVersion from './components/ReleaseVersion';

Vue.component('page-content', PageContent);
Vue.component('docs-component', DocsComponent);
Vue.component('example-box', ExampleBox);
Vue.component('api-table', ApiTable);
Vue.component('code-block', CodeBlock);
Vue.component('release-version', ReleaseVersion);

Vue.use(VueRouter);

let router = new VueRouter({
  mode: 'hash',
  base: window.location.pathname,
  routes
});

let Docs = Vue.component('app', App);
let handleSectionTheme = (currentRoute) => {
  let theme = 'default';
  let name = currentRoute.name;

  if (name) {
    if (name === 'getting-started') {
      theme = 'indigo';
    } else if (name.indexOf('themes') >= 0) {
      theme = 'cyan';
    } else if (name.indexOf('ui-elements') >= 0) {
      theme = 'purple';
    } else if (name === 'changelog') {
      theme = 'orange';
    } else if (name === 'about') {
      theme = 'green';
    } else if (name === 'error') {
      theme = 'red';
    }
  }

  Vue.material.setCurrentTheme(theme);
};

Docs = new Docs({
  el: '#app',
  router
});

handleSectionTheme(router.currentRoute);

router.beforeEach((to, from, next) => {
  Vue.nextTick(() => {
    let mainContent = document.querySelector('.main-content');

    if (mainContent) {
      mainContent.scrollTop = 0;
    }

    Docs.closeSidenav();

    next();
  });
});

router.afterEach((to) => {
  handleSectionTheme(to);
});
