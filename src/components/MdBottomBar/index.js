import init from 'vue-material/material'
import MdBottomBar from './MdBottomBar'
import MdBottomBarItem from './MdBottomBarItem'

export default Vue => {
  init(Vue)
  Vue.component(MdBottomBar.name, MdBottomBar)
  Vue.component(MdBottomBarItem.name, MdBottomBarItem)
}
