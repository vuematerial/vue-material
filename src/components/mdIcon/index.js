import './mdIcon.vue';

export default function install(Vue) {
  Vue.elementDirective('md-icon', {
    bind: function() {
      Vue.nextTick(() => {
        this.el.classList.add('material-icons');
      });
    }
  });
}
