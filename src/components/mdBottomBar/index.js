import MdBottomBar from './mdBottomBar.vue';
import MdBottomBarItem from './mdBottomBarItem.vue';
import MdBottomBarTheme from './mdBottomBar.theme';

export default function install(Vue) {
  Vue.component('md-bottom-bar', Vue.extend(MdBottomBar));
  Vue.component('md-bottom-bar-item', Vue.extend(MdBottomBarItem));

  Vue.material.styles.push(MdBottomBarTheme);
}
