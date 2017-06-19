import MdButton from './mdButton.vue';
import MdButtonTheme from './mdButton.theme';

export default function install(Vue) {
  Vue.component('md-button', MdButton);

  Vue.material.styles.push(MdButtonTheme);
}
