import Vue from 'vue/dist/vue.min';
import MdInkRipple from './mdInkRipple';
import MdButton from './mdButton';
import MdIcon from './MdIcon';
import MdBottomBar from './MdBottomBar';

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
    clickAction: function() {
      this.disabled = !this.disabled;
    }
  }
});
