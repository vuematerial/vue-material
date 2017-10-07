import material from 'vue-material/material'
import MdDialog from '../MdDialog'
import MdDialogAlert from './MdDialogAlert'

export default Vue => {
  material(Vue)
  Vue.component(MdDialog.name, MdDialog)
  Vue.component(MdDialogAlert.name, MdDialogAlert)
}
