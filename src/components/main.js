import Vue from 'vue/dist/vue.min';
import MdInkRipple from './mdInkRipple';
import MdButton from './mdButton';
import MdIcon from './mdIcon';
import MdBottomBar from './mdBottomBar';

Vue.use(MdInkRipple);
Vue.use(MdButton);
Vue.use(MdIcon);
Vue.use(MdBottomBar);

new Vue({
  el: '#app',
  data: {
    disabled: false
  },
  methods: {
    clickAction() {
      this.disabled = !this.disabled;
    }
  }
});
