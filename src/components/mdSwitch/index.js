import VueTouch from 'vue-touch';
import mdSwitch from './mdSwitch.vue';
import mdSwitchTheme from './mdSwitch.theme';

export default function install(Vue) {
  Vue.use(VueTouch);
  VueTouch.config.pan = {
    threshold: 1
  };

  Vue.component('md-switch', Vue.extend(mdSwitch));

  window.VueMaterial.styles.push(mdSwitchTheme);
}
