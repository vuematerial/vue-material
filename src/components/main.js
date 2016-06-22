import Vue from 'vue/dist/vue.min';
import MdInkRipple from './mdInkRipple';
import MdButton from './mdButton';
import MdIcon from './MdIcon';

Vue.use(MdInkRipple);
Vue.use(MdButton);
Vue.use(MdIcon);

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
