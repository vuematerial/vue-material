import mdDialog from './mdDialog.vue';
import mdDialogTheme from './mdDialog.theme';

export default function install(Vue) {
  Vue.component('md-dialog', Vue.extend(mdDialog));

  Vue.material.styles.push(mdDialogTheme);
}
