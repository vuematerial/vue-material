/* Third Party */
import Vue from 'vue';
import VueRouter from 'vue-router';

/* Configs */
import './config.js';
import routes from './routes.js';
import App from './App';

import PageContent from './components/PageContent';
import DocsComponent from './components/DocsComponent';
import ExampleBox from './components/ExampleBox';
import ApiTable from './components/ApiTable';
import CodeBlock from './components/CodeBlock';

Vue.component('page-content', PageContent);
Vue.component('docs-component', DocsComponent);
Vue.component('example-box', ExampleBox);
Vue.component('api-table', ApiTable);
Vue.component('code-block', CodeBlock);

Vue.use(VueRouter);

let router = new VueRouter({
  routes
});

let Docs = Vue.component('app', App);
let handleSectionTheme = (currentRoute) => {
  let theme = 'default';

  if (currentRoute.name === 'getting-started') {
    theme = 'indigo';
  } else if (currentRoute.name.indexOf('themes') >= 0) {
    theme = 'cyan';
  } else if (currentRoute.name.indexOf('ui-elements') >= 0) {
    theme = 'blue-grey';
  } else if (currentRoute.name === 'changelog') {
    theme = 'orange';
  } else if (currentRoute.name === 'about') {
    theme = 'green';
  } else if (currentRoute.name === 'error') {
    theme = 'red';
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

    handleSectionTheme(to);

    next();
  });
});
