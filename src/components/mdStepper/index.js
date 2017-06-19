import mdStepper from './mdStepper.vue';
import mdStep from './mdStep.vue';
import mdStepHeaderContainer from './mdStepHeaderContainer.js';
import mdStepHeader from './mdStepHeader.vue';
import mdStepperTheme from './mdStepper.theme';

export default function install(Vue) {
  Vue.component('md-stepper', mdStepper);
  Vue.component('md-step', mdStep);
  Vue.component('md-step-header-container', mdStepHeaderContainer);
  Vue.component('md-step-header', mdStepHeader);

  Vue.material.styles.push(mdStepperTheme);
}
