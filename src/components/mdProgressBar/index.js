import mdProgressBar from './mdProgressBar.vue';
import mdProgressBarTheme from './mdProgressBar.theme';

export default function install(Vue) {
  Vue.component('md-progress-bar', mdProgressBar);

  Vue.material.styles.push(mdProgressBarTheme);
}
