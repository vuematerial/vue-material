import init from 'vue-material/material'
import MdDialog from './MdDialog'
import MdDialogTitle from './MdDialogTitle'
import MdDialogContent from './MdDialogContent'
import MdDialogActions from './MdDialogActions'

export default Vue => {
  init(Vue)
  Vue.component(MdDialog.name, MdDialog)
  Vue.component(MdDialogTitle.name, MdDialogTitle)
  Vue.component(MdDialogContent.name, MdDialogContent)
  Vue.component(MdDialogActions.name, MdDialogActions)
}
