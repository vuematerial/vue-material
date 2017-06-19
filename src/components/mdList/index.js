import mdList from './mdList.vue';
import mdListItem from './mdListItem.js';
import mdListExpand from './mdListExpand.vue';
import mdListTheme from './mdList.theme';

export default function install(Vue) {
  Vue.component('md-list', mdList);
  Vue.component('md-list-item', mdListItem);
  Vue.component('md-list-expand', mdListExpand);

  Vue.material.styles.push(mdListTheme);
}
