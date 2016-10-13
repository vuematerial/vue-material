import mdRadio from './mdRadio.vue';
import mdRadioTheme from './mdRadio.theme';

export default function install(Vue) {
  Vue.component('md-radio', Vue.extend(mdRadio));

  Vue.material.styles.push(mdRadioTheme);
}
