import mdToolbar from './mdToolbar.vue';
import mdToolbarTheme from './mdToolbar.theme';

export default function install(Vue) {
  Vue.component('md-toolbar', mdToolbar);

  Vue.material.styles.push(mdToolbarTheme);
}
