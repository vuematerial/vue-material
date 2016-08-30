/* Third Party */
import Vue from 'vue';
import VueRouter from 'vue-router';

/* Configs */
import './config.js';
import './core';
import routes from './routes.js';
import App from './App.vue';


Vue.use(VueRouter);

let router = new VueRouter({
  hashbang: false,
  routes
});

var app = new Vue({
  el: '#app',
  ...App,
  router
});

router.afterEach(() => {
  app.hideSidenav();
  document.querySelector('.main-content').scrollTop = 0;
});
