import MdList from './MdList'
import MdListItem from './MdListItem/MdListItem.vue'

export default Vue => {
  Vue.component(MdList.name, MdList)
  Vue.component(MdListItem.name, MdListItem)
}
