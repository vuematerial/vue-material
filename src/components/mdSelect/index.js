import mdSelect from './mdSelect.vue';
import mdOption from './mdOption.vue';
import mdSelectTheme from './mdSelect.theme';

export default function install(Vue) {
  Vue.component('md-select', Vue.extend(mdSelect));
  Vue.component('md-option', Vue.extend(mdOption));

  Vue.material.styles.push(mdSelectTheme);
}
