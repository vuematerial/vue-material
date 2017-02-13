import mdCheckbox from './mdCheckbox.vue';
import mdCheckboxTheme from './mdCheckbox.theme';

export default function install(Vue) {
  Vue.component('md-checkbox', mdCheckbox);

  Vue.material.styles.push(mdCheckboxTheme);
}
