/* Third Party */
import Vue from 'vue';

/* Configs */
import './stylesheets/docs.scss';
import './config.js';
import router from './routes.js';

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

router.start(App, '#app');
