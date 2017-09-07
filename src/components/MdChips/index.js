import init from 'vue-material/material'
import MdChips from './MdChips'
import MdChip from './MdChip'

export default Vue => {
  init(Vue)
  Vue.component(MdChips.name, MdChips)
  Vue.component(MdChip.name, MdChip)
}
