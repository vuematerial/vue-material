import mdTable from './mdTable.vue';
import mdTableRow from './mdTableRow.vue';
import mdTableHead from './mdTableHead.vue';
import mdTableCell from './mdTableCell.vue';
import mdTableEdit from './mdTableEdit.vue';
import mdTableCard from './mdTableCard.vue';
import mdTableAlternateHeader from './mdTableAlternateHeader.vue';
import mdTablePagination from './mdTablePagination.vue';
import mdTableTheme from './mdTable.theme';

export default function install(Vue) {
  Vue.component('md-table', mdTable);
  Vue.component('md-table-header', {
    functional: true,
    render: (h, scope) => h('thead', {
      staticClass: 'md-table-header'
    }, scope.children)
  });
  Vue.component('md-table-body', {
    functional: true,
    render: (h, scope) => h('tbody', {
      staticClass: 'md-table-body'
    }, scope.children)
  });
  Vue.component('md-table-row', mdTableRow);
  Vue.component('md-table-head', mdTableHead);
  Vue.component('md-table-cell', mdTableCell);
  Vue.component('md-table-edit', mdTableEdit);
  Vue.component('md-table-card', mdTableCard);
  Vue.component('md-table-pagination', mdTablePagination);
  Vue.component('md-table-alternate-header', mdTableAlternateHeader);

  Vue.material.styles.push(mdTableTheme);
}
