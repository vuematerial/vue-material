import mdSpinner from './mdSpinner.vue';
import mdSpinnerTheme from './mdSpinner.theme';

export default function install(Vue) {
  Vue.component('md-spinner', mdSpinner);

  Vue.material.styles.push(mdSpinnerTheme);
}
