/* Third Party */
import Vue from 'vue';
import VueRouter from 'vue-router';
import highlight from 'highlight.js/lib/highlight.js';
import highlightSCSS from 'highlight.js/lib/languages/scss';
import highlightXML from 'highlight.js/lib/languages/xml';
import highlightJS from 'highlight.js/lib/languages/javascript';

highlight.registerLanguage('scss', highlightSCSS);
highlight.registerLanguage('xml', highlightXML);
highlight.registerLanguage('javascript', highlightJS);

/* Configs */
import './config.js';
import routes from './routes.js';
import App from './App';
import SinglePage from './components/single-page';
import SinglePageBanner from './components/single-page-banner';
import SinglePageSection from './components/single-page-section';
import DemoPage from './components/demo-page';
import DemoExample from './components/demo-example';
import CodeBlock from './components/code-block';


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
let handleSectionTheme = (route) => {
  if (route.name.indexOf('introduction') >= 0) {
    Docs.theme = 'blue';
  } else if (route.name.indexOf('components') >= 0) {
    Docs.theme = 'indigo';
  } else if (route.name.indexOf('themes') >= 0) {
    Docs.theme = 'teal';
  } else if (route.name.indexOf('ui-elements') >= 0) {
    Docs.theme = 'blue-grey';
  } else if (route.name.indexOf('changelog') >= 0) {
    Docs.theme = 'orange';
  } else if (route.name.indexOf('about') >= 0) {
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

router.afterEach((currentRoute) => {
  let mainContent = document.querySelector('.main-content');

  if (mainContent) {
    mainContent.scrollTop = 0;
  }

  Docs.closeSidenav();

  handleSectionTheme(currentRoute);
});
