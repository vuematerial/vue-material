import MdBottomBar from './mdBottomBar.vue';
import MdBottomBarItem from './mdBottomBarItem.vue';

export default function install(Vue) {
  Vue.component('md-bottom-bar', Vue.extend(MdBottomBar));
  Vue.component('md-bottom-bar-item', Vue.extend(MdBottomBarItem));
}
