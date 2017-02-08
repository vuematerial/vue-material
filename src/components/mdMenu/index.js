import mdMenu from './mdMenu.vue';
import mdMenuItem from './mdMenuItem.vue';
import mdMenuContent from './mdMenuContent.vue';
import mdMenuTheme from './mdMenu.theme';

export default function install(Vue) {
  Vue.component('md-menu', mdMenu);
  Vue.component('md-menu-item', mdMenuItem);
  Vue.component('md-menu-content', mdMenuContent);

  Vue.material.styles.push(mdMenuTheme);
}
