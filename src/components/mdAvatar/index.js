import mdAvatar from './mdAvatar.vue';
import mdAvatarTheme from './mdAvatar.theme';

export default function install(Vue) {
  Vue.component('md-avatar', Vue.extend(mdAvatar));

  window.VueMaterial.styles.push(mdAvatarTheme);
}
