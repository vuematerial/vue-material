import material from 'vue-material/material'
import MdRatingBar from './MdRatingBar.vue'

export default Vue => {
  material(Vue)
  Vue.component(MdRatingBar.name, MdRatingBar)
}
