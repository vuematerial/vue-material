import mdProgress from './mdProgress.vue';
import mdProgressTheme from './mdProgress.theme';

export default function install(Vue) {
  Vue.component('md-progress', mdProgress);

  Vue.material.styles.push(mdProgressTheme);
}
