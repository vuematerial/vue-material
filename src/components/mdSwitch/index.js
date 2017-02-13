import mdSwitch from './mdSwitch.vue';
import mdSwitchTheme from './mdSwitch.theme';

export default function install(Vue) {
  Vue.component('md-switch', mdSwitch);

  Vue.material.styles.push(mdSwitchTheme);
}
