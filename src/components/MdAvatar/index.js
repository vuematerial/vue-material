import init from 'vue-material/material'
import MdAvatar from './MdAvatar'

export default Vue => {
  init(Vue)
  Vue.component(MdAvatar.name, MdAvatar)
}
