import material from 'vue-material/material'
import MdTable from './MdTableContainer'
import MdTableToolbar from './MdTableToolbar'
import MdTableEmptyState from './MdTableEmptyState'
import MdTableRow from './MdTableRow'
import MdTableHead from './MdTableHead'
import MdTableCell from './MdTableCell'
import MdTablePagination from './MdTablePagination'

export default Vue => {
  material(Vue)
  Vue.component('MdTable', MdTable)
  Vue.component(MdTableToolbar.name, MdTableToolbar)
  Vue.component(MdTableEmptyState.name, MdTableEmptyState)
  Vue.component(MdTableRow.name, MdTableRow)
  Vue.component(MdTableHead.name, MdTableHead)
  Vue.component(MdTableCell.name, MdTableCell)
  Vue.component(MdTablePagination.name, MdTablePagination)
}
