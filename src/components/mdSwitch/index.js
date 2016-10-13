import mdSwitch from './mdSwitch.vue';
import mdSwitchTheme from './mdSwitch.theme';

export default function install(Vue) {
  Vue.component('md-switch', Vue.extend(mdSwitch));

  Vue.material.styles.push(mdSwitchTheme);
}
