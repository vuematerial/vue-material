import Vue from 'vue';
import Docs from './docs'
import Core from './core/core';
import MdInkRipple from './components/mdInkRipple';
import MdButton from './components/mdButton';
import MdIcon from './components/mdIcon';
import MdBottomBar from './components/mdBottomBar';

Vue.use(MdInkRipple);
Vue.use(MdButton);
Vue.use(MdIcon);
Vue.use(MdBottomBar);

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { Docs }
});
