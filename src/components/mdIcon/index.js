import mdIcon from './mdIcon.vue';

export default function install(Vue) {
  Vue.component('md-icon', Vue.extend(mdIcon));
}
