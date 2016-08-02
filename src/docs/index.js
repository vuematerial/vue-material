/* Third Party */
import Vue from 'vue';
import VueValidator from 'vue-validator';
import VueRouter from 'vue-router';

Vue.use(VueValidator);
Vue.use(VueRouter);


/* Configs */
import './stylesheets/docs.scss';
import './config.js';
import routes from './routes.js';

let router = new VueRouter({
  hashbang: false
});

let App = Vue.component('app', {
  name: 'app',
  data() {
    return {
      showSidenav: false
    };
  },
  methods: {
    toggleSidenav() {
      this.showSidenav = !this.showSidenav;
    },
    hideSidenav() {
      this.showSidenav = false;
    }
  }
});

router.afterEach(function() {
  router.app.hideSidenav();
  document.querySelector('.main-content').scrollTop = 0;
});

router.map(routes);

router.start(App, '#app');
