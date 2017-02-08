import mdStepper from './mdStepper.vue';
import mdStep from './mdStep.vue';
import mdStepHeader from './mdStepHeader.vue';
import mdStepContent from './mdStepContent.vue';
import mdStepperTheme from './mdStepper.theme';

export default function install(Vue) {
  Vue.component('md-stepper', mdStepper);
  Vue.component('md-step', mdStep);
  Vue.component('md-step-header', mdStepHeader);
  Vue.component('md-step-content', mdStepContent);

  Vue.material.styles.push(mdStepperTheme);
}
