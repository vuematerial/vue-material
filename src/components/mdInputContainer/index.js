import mdInputContainer from './mdInputContainer.vue';
import mdInput from './mdInput.vue';
import mdAutocomplete from './mdAutocomplete.vue';
import mdTextarea from './mdTextarea.vue';
import mdInputContainerTheme from './mdInputContainer.theme';

export default function install(Vue) {
  Vue.component('md-input-container', mdInputContainer);
  Vue.component('md-input', mdInput);
  Vue.component('md-autocomplete', mdAutocomplete);
  Vue.component('md-textarea', mdTextarea);

  Vue.material.styles.push(mdInputContainerTheme);
}
