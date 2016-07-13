import Vue from 'vue';
import Docs from './docs';
import './core/core';
import MdTheme from './components/mdTheme';
import MdInkRipple from './components/mdInkRipple';
import MdButton from './components/mdButton';
import MdIcon from './components/mdIcon';
import MdBottomBar from './components/mdBottomBar';

Vue.use(MdTheme, {
  default: {
    primary: 'blue',
    accent: 'red',
    background: 'white'
  },
  header: {
    primary: 'white',
    accent: 'blue',
    background: 'white'
  }
});
Vue.use(MdInkRipple);
Vue.use(MdButton);
Vue.use(MdIcon);
Vue.use(MdBottomBar);

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { Docs }
});
