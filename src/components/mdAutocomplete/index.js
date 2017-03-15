import mdAutocomplete from './mdAutocomplete.vue';
import mdOption from './mdOption.vue';
import mdAutocompleteTheme from './mdAutocomplete.theme';

export default function install(Vue) {
  Vue.component('md-autocomplete', mdAutocomplete);
  Vue.component('md-option', mdOption);

  Vue.material.styles.push(mdAutocompleteTheme);
}
