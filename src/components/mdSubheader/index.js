import mdSubheader from './mdSubheader.vue';
import mdSubheaderTheme from './mdSubheader.theme';

export default function install(Vue) {
  Vue.component('md-subheader', Vue.extend(mdSubheader));

  window.VueMaterial.styles.push(mdSubheaderTheme);
}
