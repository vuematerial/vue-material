import material from 'vue-material/material'
import MdAvatar from './MdAvatar'

export default Vue => {
  material(Vue)
  Vue.component(MdAvatar.name, MdAvatar)
}
