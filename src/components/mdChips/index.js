import mdChips from './mdChips.vue';
import mdChip from './mdChip.vue';
import mdChipsTheme from './mdChips.theme';

export default function install(Vue) {
  Vue.component('md-chips', Vue.extend(mdChips));
  Vue.component('md-chip', Vue.extend(mdChip));

  Vue.material.styles.push(mdChipsTheme);
}
