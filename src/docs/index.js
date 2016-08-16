/* Third Party */
import Vue from 'vue';
import VueValidator from 'vue-validator';
import VueRouter from 'vue-router';

Vue.use(VueValidator);
Vue.use(VueRouter);


/* Configs */
import './stylesheets/docs.scss';
import './config.js';
import './core';
import routes from './routes.js';
import app from './App.vue';

let App = Vue.component('app', app);

let router = new VueRouter({
  hashbang: false
});

router.afterEach(function() {
  router.app.hideSidenav();
  document.querySelector('.main-content').scrollTop = 0;
});

router.map(routes);

router.start(App, '#app');
