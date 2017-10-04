import material from 'vue-material/material'
import MdMenu from './MdMenu'
import MdMenuContent from './MdMenuContent'
import MdMenuItem from './MdMenuItem'

export default Vue => {
  material(Vue)
  Vue.component(MdMenu.name, MdMenu)
  Vue.component(MdMenuContent.name, MdMenuContent)
  Vue.component(MdMenuItem.name, MdMenuItem)
}
