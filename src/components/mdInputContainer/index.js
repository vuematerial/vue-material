import mdInputContainer from './mdInputContainer.vue';
import mdInput from './mdInput.vue';
import mdTextarea from './mdTextarea.vue';
import mdInputContainerTheme from './mdInputContainer.theme';

export default function install(Vue) {
  Vue.component('md-input-container', Vue.extend(mdInputContainer));
  Vue.component('md-input', Vue.extend(mdInput));
  Vue.component('md-textarea', Vue.extend(mdTextarea));

  window.VueMaterial.styles.push(mdInputContainerTheme);
}
