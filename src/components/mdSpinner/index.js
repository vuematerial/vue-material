import mdSpinner from './mdSpinner.vue';

export default function install(Vue) {
  Vue.component('md-spinner', Vue.extend(mdSpinner));
}
