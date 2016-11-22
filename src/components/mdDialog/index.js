import mdDialog from './mdDialog.vue';
import mdDialogTitle from './mdDialogTitle.vue';
import mdDialogContent from './mdDialogContent.vue';
import mdDialogActions from './mdDialogActions.vue';
import mdDialogAlert from './presets/mdDialogAlert.vue';
import mdDialogConfirm from './presets/mdDialogConfirm.vue';
import mdDialogPrompt from './presets/mdDialogPrompt.vue';
import mdDialogTheme from './mdDialog.theme';

export default function install(Vue) {
  Vue.component('md-dialog', Vue.extend(mdDialog));
  Vue.component('md-dialog-title', Vue.extend(mdDialogTitle));
  Vue.component('md-dialog-content', Vue.extend(mdDialogContent));
  Vue.component('md-dialog-actions', Vue.extend(mdDialogActions));

  /* Presets */
  Vue.component('md-dialog-alert', Vue.extend(mdDialogAlert));
  Vue.component('md-dialog-confirm', Vue.extend(mdDialogConfirm));
  Vue.component('md-dialog-prompt', Vue.extend(mdDialogPrompt));

  Vue.material.styles.push(mdDialogTheme);
}
