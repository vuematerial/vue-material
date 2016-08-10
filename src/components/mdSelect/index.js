import mdSelect from './mdSelect.vue';
import mdSelectTheme from './mdSelect.theme';

export default function install(Vue) {
  Vue.component('md-select', Vue.extend(mdSelect));

  window.VueMaterial.styles.push(mdSelectTheme);
}
