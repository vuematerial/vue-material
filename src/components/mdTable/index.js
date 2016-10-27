import mdTable from './mdTable.vue';
import mdTableCard from './mdTableCard.vue';
import mdTableHead from './mdTableHead.vue';
import mdTableCell from './mdTableCell.vue';
import mdTableRow from './mdTableRow.vue';
import mdTableTheme from './mdTable.theme';

export default function install(Vue) {
  Vue.component('md-table', Vue.extend(mdTable));
  Vue.component('md-table-card', Vue.extend(mdTableCard));
  Vue.component('md-table-head', Vue.extend(mdTableHead));
  Vue.component('md-table-cell', Vue.extend(mdTableCell));
  Vue.component('md-table-row', Vue.extend(mdTableRow));

  Vue.material.styles.push(mdTableTheme);
}
