import mdIcon from './mdIcon.vue';
import mdIconTheme from './mdIcon.theme';

export default function install(Vue) {
  Vue.component('md-icon', mdIcon);

  Vue.material.styles.push(mdIconTheme);
}
