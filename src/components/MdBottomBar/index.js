import material from 'vue-material/material'
import MdBottomBar from './MdBottomBar'
import MdBottomBarItem from './MdBottomBarItem'

export default Vue => {
  material(Vue)
  Vue.component(MdBottomBar.name, MdBottomBar)
  Vue.component(MdBottomBarItem.name, MdBottomBarItem)
}
