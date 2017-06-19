import mdDialog from './mdDialog.vue';
import mdDialogTitle from './mdDialogTitle.vue';
import mdDialogContent from './mdDialogContent.vue';
import mdDialogActions from './mdDialogActions.vue';
import mdDialogAlert from './presets/mdDialogAlert.vue';
import mdDialogConfirm from './presets/mdDialogConfirm.vue';
import mdDialogPrompt from './presets/mdDialogPrompt.vue';
import mdDialogTheme from './mdDialog.theme';

export default function install(Vue) {
  Vue.component('md-dialog', mdDialog);
  Vue.component('md-dialog-title', mdDialogTitle);
  Vue.component('md-dialog-content', mdDialogContent);
  Vue.component('md-dialog-actions', mdDialogActions);

  /* Presets */
  Vue.component('md-dialog-alert', mdDialogAlert);
  Vue.component('md-dialog-confirm', mdDialogConfirm);
  Vue.component('md-dialog-prompt', mdDialogPrompt);

  Vue.material.styles.push(mdDialogTheme);
}
