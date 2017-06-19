import mdAvatar from './mdAvatar.vue';
import mdAvatarTheme from './mdAvatar.theme';

export default function install(Vue) {
  Vue.component('md-avatar', mdAvatar);

  Vue.material.styles.push(mdAvatarTheme);
}
