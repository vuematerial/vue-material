import init from 'vue-material/material'
import MdContent from './MdContent'

export default Vue => {
  init(Vue)
  Vue.component(MdContent.name, MdContent)
}
