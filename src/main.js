import Vue from 'vue';
import Docs from './docs';
import './core/core';
import MdInkRipple from './components/mdInkRipple';
import MdButton from './components/mdButton';
import MdIcon from './components/mdIcon';
import MdBottomBar from './components/mdBottomBar';
import MdTheme from './components/mdTheme';

Vue.use(MdInkRipple);
Vue.use(MdButton);
Vue.use(MdIcon);
Vue.use(MdBottomBar);
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

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { Docs }
});
