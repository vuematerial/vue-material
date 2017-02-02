import mdImage from './mdImage.vue';
import mdImageTheme from './mdImage.theme';

export default function install(Vue) {
  Vue.component('md-image', Vue.extend(mdImage));

  Vue.material.styles.push(mdImageTheme);
}
