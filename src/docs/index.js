/* Third Party */
import Vue from 'vue';
import VueRouter from 'vue-router';

/* Configs */
import './config.js';
import routes from './routes.js';
import App from './App';
import SinglePage from './components/single-page';
import SinglePageBanner from './components/single-page-banner';
import DemoPage from './components/demo-page';
import DemoExample from './components/demo-example';


Vue.use(VueRouter);

let router = new VueRouter({
  hashbang: false,
  routes
});

let Docs = Vue.component('app', App);
let handleSectionTheme = (route) => {
  if (route.name.indexOf('components') >= 0) {
    Docs.theme = 'indigo';
  } else if (route.name.indexOf('themes') >= 0) {
    Docs.theme = 'teal';
  } else if (route.name.indexOf('ui-elements') >= 0) {
    Docs.theme = 'dark-pink';
  } else {
    Docs.theme = 'default';
  }
};

Vue.component('single-page', SinglePage);
Vue.component('single-page-banner', SinglePageBanner);
Vue.component('demo-page', DemoPage);
Vue.component('demo-example', DemoExample);

Docs = new Docs({
  el: '#app',
  router
});

handleSectionTheme(router.currentRoute);

router.afterEach((currentRoute) => {
  let mainContent = document.querySelector('.main-content');

  if (mainContent) {
    mainContent.scrollTop = 0;
  }

  handleSectionTheme(currentRoute);

  Docs.closeSidenav();
});
