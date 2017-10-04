import material from 'vue-material/material'
import MdSpeedDial from './MdSpeedDial'
import MdSpeedDialTarget from './MdSpeedDialTarget'
import MdSpeedDialContent from './MdSpeedDialContent'

export default Vue => {
  material(Vue)
  Vue.component(MdSpeedDial.name, MdSpeedDial)
  Vue.component(MdSpeedDialTarget.name, MdSpeedDialTarget)
  Vue.component(MdSpeedDialContent.name, MdSpeedDialContent)
}
