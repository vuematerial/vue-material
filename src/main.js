import Vue from 'vue';
import VueRouter from 'vue-router';
import './vue-material';
import Docs from './docs/index';

Vue.use(VueRouter);

let router = new VueRouter({
  hashbang: false
});
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
    name: 'avatar',
    component: Docs.Avatar
  },
  '/bottom-bar': {
    name: 'bottomBar',
    component: Docs.BottomBar
  },
  '/button': {
    name: 'button',
    component: Docs.Buttons
  },
  '/button-toggle': {
    name: 'buttonToggle',
    component: Docs.ButtonToggle
  },
  '/icon': {
    name: 'icon',
    component: Docs.Icon
  },
  '/ripple': {
    name: 'ripple',
    component: Docs.Ripple
  },
  '/list': {
    name: 'list',
    component: Docs.List
  },
  '/sidenav': {
    name: 'sidenav',
    component: Docs.Sidenav
  },
  '/theme': {
    name: 'theme',
    component: Docs.Theme
  },
  '/toolbar': {
    name: 'toolbar',
    component: Docs.Toolbar
  }
});

router.start(App, '#app');
router.afterEach(function() {
  router.app.toggleSidenav();
});
