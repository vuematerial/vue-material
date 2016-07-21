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
    }
  }
});

router.afterEach(function() {
  router.app.toggleSidenav();
});

router.start(App, '#app');

