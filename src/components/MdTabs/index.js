import init from 'vue-material/material'
import MdTabs from './MdTabs'
import MdTab from './MdTab'

export default Vue => {
  init(Vue)
  Vue.component(MdTabs.name, MdTabs)
  Vue.component(MdTab.name, MdTab)
}
