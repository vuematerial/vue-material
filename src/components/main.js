import Vue from 'vue/dist/vue.min';
import MdButton from './mdButton';

Vue.use(MdButton);

new Vue({
  el: '#app',
  methods: {
    clickAction: () => {
      console.log('Click Action');
    }
  }
});
