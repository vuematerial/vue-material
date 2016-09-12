/* Third Party */
import Vue from 'vue';
import VueRouter from 'vue-router';

/* Configs */
import './config.js';
import routes from './routes.js';
import App from './App';
import Demo from './components/demo';


Vue.use(VueRouter);

let router = new VueRouter({
  hashbang: false,
  routes
});

let Docs = Vue.component('app', App);

Vue.component('demo', Demo);

Docs = new Docs({
  el: '#app',
  router
});

router.afterEach(() => {
  let mainContent = document.querySelector('.main-content');

  if (mainContent) {
    mainContent.scrollTop = 0;
  }

  Docs.closeSidenav();
});
