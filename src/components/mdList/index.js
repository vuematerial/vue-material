import mdList from './mdList.vue';
import mdListItem from './mdListItem.vue';
import mdListTheme from './mdList.theme';

export default function install(Vue) {
  Vue.component('md-list', Vue.extend(mdList));
  Vue.component('md-list-item', Vue.extend(mdListItem));

  window.VueMaterial.styles.push(mdListTheme);
}
