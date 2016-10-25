import mdTable from './mdTable.vue';
import mdTableTheme from './mdTable.theme';

export default function install(Vue) {
  Vue.component('md-table', Vue.extend(mdTable));

  Vue.material.styles.push(mdTableTheme);
}
