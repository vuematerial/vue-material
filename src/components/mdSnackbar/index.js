import mdSnackbar from './mdSnackbar.vue';
import mdSnackbarTheme from './mdSnackbar.theme';

export default function install(Vue) {
  Vue.component('md-snackbar', mdSnackbar);

  Vue.material.styles.push(mdSnackbarTheme);
}
