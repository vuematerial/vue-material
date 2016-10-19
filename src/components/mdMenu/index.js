import mdMenu from './mdMenu.vue';
import mdMenuItem from './mdMenuItem.vue';
import mdMenuContent from './mdMenuContent.vue';
import mdMenuTheme from './mdMenu.theme';

export default function install(Vue) {
  Vue.component('md-menu', Vue.extend(mdMenu));
  Vue.component('md-menu-item', Vue.extend(mdMenuItem));
  Vue.component('md-menu-content', Vue.extend(mdMenuContent));

  Vue.material.styles.push(mdMenuTheme);
}
