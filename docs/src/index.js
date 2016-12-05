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
  if (currentRoute.name === 'getting-started') {
    Docs.theme = 'indigo';
  } else if (currentRoute.name.indexOf('themes') >= 0) {
    Docs.theme = 'cyan';
  } else if (currentRoute.name.indexOf('ui-elements') >= 0) {
    Docs.theme = 'blue-grey';
  } else if (currentRoute.name === 'changelog') {
    Docs.theme = 'orange';
  } else if (currentRoute.name === 'about') {
    Docs.theme = 'green';
  } else if (currentRoute.name === 'error') {
    Docs.theme = 'red';
  } else {
    Docs.theme = 'default';
  }
};

Docs = new Docs({
  el: '#app',
  router
});

handleSectionTheme(router.currentRoute);

router.afterEach((to) => {
  Vue.nextTick(() => {
    let mainContent = document.querySelector('.main-content');

    if (mainContent) {
      mainContent.scrollTop = 0;
    }

    Docs.closeSidenav();

    handleSectionTheme(to);
  });
});
