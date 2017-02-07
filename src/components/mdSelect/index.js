import mdSelect from './mdSelect.vue';
import mdOption from './mdOption.vue';
import mdSelectTheme from './mdSelect.theme';

export default function install(Vue) {
  Vue.component('md-select', mdSelect);
  Vue.component('md-option', mdOption);

  Vue.material.styles.push(mdSelectTheme);
}
