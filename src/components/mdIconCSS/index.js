import mdIconCSS from './mdIconCSS.vue';
import mdIconThemeCSS from './mdIconCSS.theme';

export default function install(Vue) {
  Vue.component('md-icon-css', Vue.extend(mdIconCSS));

  Vue.material.styles.push(mdIconThemeCSS);
}
