import MdButton from './mdButton.vue';
import MdButtonTheme from './mdButton.theme';

export default function install(Vue) {
  Vue.component('md-button', Vue.extend(MdButton));

  window.VueMaterial.styles.push(MdButtonTheme);
}
