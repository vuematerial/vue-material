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

import SinglePage from './components/single-page';
import SinglePageBanner from './components/single-page-banner';
import SinglePageSection from './components/single-page-section';
import DemoPage from './components/demo-page';
import DemoExample from './components/demo-example';
import CodeBlock from './components/code-block';


Vue.component('page-content', PageContent);
Vue.component('docs-component', DocsComponent);
Vue.component('example-box', ExampleBox);
Vue.component('api-table', ApiTable);

Vue.component('single-page', SinglePage);
Vue.component('single-page-banner', SinglePageBanner);
Vue.component('single-page-section', SinglePageSection);
Vue.component('demo-page', DemoPage);
Vue.component('demo-example', DemoExample);
Vue.component('code-block', CodeBlock);

Vue.use(VueRouter);

let router = new VueRouter({
  base: '/vue-material/',
  routes
});

let Docs = Vue.component('app', App);
let handleSectionTheme = (currentRoute) => {
  if (currentRoute.name.indexOf('getting') >= 0) {
    Docs.theme = 'indigo';
  } else if (currentRoute.name.indexOf('themes') >= 0) {
    Docs.theme = 'teal';
  } else if (currentRoute.name.indexOf('ui-elements') >= 0) {
    Docs.theme = 'blue-grey';
  } else if (currentRoute.name.indexOf('changelog') >= 0) {
    Docs.theme = 'orange';
  } else if (currentRoute.name.indexOf('about') >= 0) {
    Docs.theme = 'green';
  } else {
    Docs.theme = 'default';
  }
};

Docs = new Docs({
  el: '#app',
  router
});

handleSectionTheme(router.currentRoute);

router.beforeEach((to, from, next) => {
  let mainContent = document.querySelector('.main-content');

  if (mainContent) {
    mainContent.scrollTop = 0;
  }

  Docs.closeSidenav();

  handleSectionTheme(to);

  next();
});
