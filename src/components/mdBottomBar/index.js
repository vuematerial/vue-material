import MdBottomBar from './mdBottomBar.vue';
import MdBottomBarItem from './mdBottomBarItem.vue';
import MdBottomBarTheme from './mdBottomBar.theme';

export default function install(Vue) {
  Vue.component('md-bottom-bar', MdBottomBar);
  Vue.component('md-bottom-bar-item', MdBottomBarItem);

  Vue.material.styles.push(MdBottomBarTheme);
}
