import mdSelect from './mdSelect.vue';
import mdOption from './mdOption.vue';
import mdOptgroup from './mdOptgroup.vue';
import mdSelectTheme from './mdSelect.theme';

export default function install(Vue) {
  Vue.component('md-select', Vue.extend(mdSelect));
  Vue.component('md-option', Vue.extend(mdOption));
  Vue.component('md-optgroup', Vue.extend(mdOptgroup));

  window.VueMaterial.styles.push(mdSelectTheme);
}
