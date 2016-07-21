/* Third Party */
import Vue from 'vue';
import VueRouter from 'vue-router';

/* Pages */
import Avatar from './pages/Avatar';
import BottomBar from './pages/BottomBar';
import Buttons from './pages/Buttons';
import ButtonToggle from './pages/ButtonToggle';
import Icon from './pages/Icon';
import Ripple from './pages/Ripple';
import List from './pages/List';
import Sidenav from './pages/Sidenav';
import Theme from './pages/Theme';
import Toolbar from './pages/Toolbar';


Vue.use(VueRouter);

let router = new VueRouter({
  hashbang: false
});

router.map({
  '/avatar': {
    name: 'avatar',
    component: Avatar
  },
  '/bottom-bar': {
    name: 'bottomBar',
    component: BottomBar
  },
  '/button': {
    name: 'button',
    component: Buttons
  },
  '/button-toggle': {
    name: 'buttonToggle',
    component: ButtonToggle
  },
  '/icon': {
    name: 'icon',
    component: Icon
  },
  '/ripple': {
    name: 'ripple',
    component: Ripple
  },
  '/list': {
    name: 'list',
    component: List
  },
  '/sidenav': {
    name: 'sidenav',
    component: Sidenav
  },
  '/theme': {
    name: 'theme',
    component: Theme
  },
  '/toolbar': {
    name: 'toolbar',
    component: Toolbar
  }
});

export default router;
