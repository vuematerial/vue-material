import Vue from 'vue';
import Docs from './docs';
import './core/core';
import MdInkRipple from './components/mdInkRipple';
import MdButton from './components/mdButton';
import MdButtonToggle from './components/mdButtonToggle';
import MdIcon from './components/mdIcon';
import MdBottomBar from './components/mdBottomBar';
import MdTheme from './components/mdTheme';

Vue.use(MdInkRipple);
Vue.use(MdButton);
Vue.use(MdButtonToggle);
Vue.use(MdIcon);
Vue.use(MdBottomBar);
Vue.use(MdTheme, {
  'bottom-bar': {
    primary: 'teal'
  }
});

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { Docs }
});
