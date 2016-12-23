import mdSnackbar from './mdSnackbar.vue';
import mdSnackbarTheme from './mdSnackbar.theme';

export default function install(Vue) {
  Vue.component('md-snackbar', Vue.extend(mdSnackbar));

  Vue.material.styles.push(mdSnackbarTheme);
}
