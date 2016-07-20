import Vue from 'vue';
import VueRouter from 'vue-router';
import './vue-material';
import Docs from './docs/index';

Vue.use(VueRouter);

let router = new VueRouter();
let App = Vue.extend({
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

router.map({
  '/avatar': {
    component: Docs.Avatar
  },
  '/bottom-bar': {
    component: Docs.BottomBar
  },
  '/button': {
    component: Docs.Buttons
  },
  '/button-toggle': {
    component: Docs.ButtonToggle
  },
  '/icon': {
    component: Docs.Icon
  },
  '/ripple': {
    component: Docs.Ripple
  },
  '/list': {
    component: Docs.List
  },
  '/sidenav': {
    component: Docs.Sidenav
  },
  '/theme': {
    component: Docs.Theme
  },
  '/toolbar': {
    component: Docs.Toolbar
  }
});

router.start(App, '#app');
router.afterEach(function() {
  router.app.toggleSidenav();
});
