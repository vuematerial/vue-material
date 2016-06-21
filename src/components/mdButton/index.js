import MdButton from './mdButton.vue';
import MdLinkButton from './mdLinkButton.vue';

export default function install(Vue) {
  Vue.component('md-button', Vue.extend(MdButton));
  Vue.component('md-link-button', Vue.extend(MdLinkButton));
}
