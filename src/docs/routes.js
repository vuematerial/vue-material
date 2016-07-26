/* Third Party */
import Vue from 'vue';
import VueRouter from 'vue-router';

/* Pages */
import Home from './pages/Home';
import Avatar from './pages/Avatar';
import BottomBar from './pages/BottomBar';
import Buttons from './pages/Buttons';
import ButtonToggle from './pages/ButtonToggle';
import Divider from './pages/Divider';
import Icon from './pages/Icon';
import Ripple from './pages/Ripple';
import List from './pages/List';
import Sidenav from './pages/Sidenav';
import Theme from './pages/Theme';
import Toolbar from './pages/Toolbar';
import Whiteframe from './pages/Whiteframe';


Vue.use(VueRouter);

let router = new VueRouter({
  hashbang: false
});

router.map({
  '/': {
    name: 'home',
    component: Home
  },
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
  '/divider': {
    name: 'divider',
    component: Divider
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
  },
  '/whiteframe': {
    name: 'whiteframe',
    component: Whiteframe
  }
});

export default router;
