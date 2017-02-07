import mdFile from './mdFile.vue';
import mdFileTheme from './mdFile.theme';

export default function install(Vue) {
  Vue.component('md-file', mdFile);

  Vue.material.styles.push(mdFileTheme);
}
