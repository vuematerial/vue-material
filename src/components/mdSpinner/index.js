import mdSpinner from './mdSpinner.vue';
import mdSpinnerTheme from './mdSpinner.theme';

export default function install(Vue) {
  Vue.component('md-spinner', Vue.extend(mdSpinner));

  Vue.material.styles.push(mdSpinnerTheme);
}
