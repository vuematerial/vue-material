import mdRadio from './mdRadio.vue';
import mdRadioTheme from './mdRadio.theme';

export default function install(Vue) {
  Vue.component('md-radio', mdRadio);

  Vue.material.styles.push(mdRadioTheme);
}
