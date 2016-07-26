import mdInputContainer from './mdInputContainer.vue';
import mdInputContainerTheme from './mdInputContainer.theme';

export default function install(Vue) {
  Vue.component('md-input-container', Vue.extend(mdInputContainer));

  window.VueMaterial.styles.push(mdInputContainerTheme);
}
