import Vue from 'vue/dist/vue.min';
import MdButton from './mdButton';
import MdInkRipple from './mdInkRipple';

Vue.use(MdButton);
Vue.use(MdInkRipple);

new Vue({
  el: '#app',
  methods: {
    clickAction: () => {
      console.log('Click Action');
    }
  }
});
