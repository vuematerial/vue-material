import mdAvatar from './mdAvatar.vue';

export default function install(Vue) {
  Vue.component('md-avatar', Vue.extend(mdAvatar));
}
