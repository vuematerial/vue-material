import mdOnboarding from './mdOnboarding.vue';
import mdBoard from './mdBoard.vue';
import mdOnboardingTheme from './mdOnboarding.theme';

export default function install(Vue) {
  Vue.component('md-onboarding', mdOnboarding);
  Vue.component('md-board', mdBoard);

  Vue.material.styles.push(mdOnboardingTheme);
}
