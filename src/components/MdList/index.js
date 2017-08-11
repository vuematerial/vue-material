import init from 'vue-material/material'
import MdList from './MdList'
import MdListItem from './MdListItem/MdListItem.vue'

export default Vue => {
  init(Vue)
  Vue.component(MdList.name, MdList)
  Vue.component(MdListItem.name, MdListItem)
}
