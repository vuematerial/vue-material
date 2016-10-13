import mdButtonToggle from './mdButtonToggle.vue';
import mdButtonToggleTheme from './mdButtonToggle.theme';

export default function install(Vue) {
  Vue.component('md-button-toggle', Vue.extend(mdButtonToggle));

  Vue.material.styles.push(mdButtonToggleTheme);
}
