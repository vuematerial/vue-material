import mdDialog from './mdDialog.vue';
import mdDialogContent from './mdDialogContent.vue';
import mdDialogActions from './mdDialogActions.vue';
import mdDialogTheme from './mdDialog.theme';

export default function install(Vue) {
  Vue.component('md-dialog', Vue.extend(mdDialog));
  Vue.component('md-dialog-content', Vue.extend(mdDialogContent));
  Vue.component('md-dialog-actions', Vue.extend(mdDialogActions));

  Vue.material.styles.push(mdDialogTheme);
}
