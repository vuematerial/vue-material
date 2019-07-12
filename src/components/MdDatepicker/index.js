import material from 'vue-material/material'
import MdDatepicker from './MdDatepicker'
import MdDatepickerInline from "./MdDatepickerInline";

export default Vue => {
  material(Vue)
  Vue.component(MdDatepicker.name, MdDatepicker)
  Vue.component(MdDatepickerInline.name, MdDatepickerInline)
}
