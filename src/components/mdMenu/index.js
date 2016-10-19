import mdMenu from './mdMenu.vue';
import mdMenuTheme from './mdMenu.theme';

export default function install(Vue) {
  Vue.component('md-menu', Vue.extend(mdMenu));

  Vue.material.styles.push(mdMenuTheme);
}
