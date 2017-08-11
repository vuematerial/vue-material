import init from 'vue-material/material'
import MdCard from './MdCard'
import MdCardArea from './MdCardArea'
import MdCardHeader from './MdCardHeader'
import MdCardHeaderText from './MdCardHeaderText'
import MdCardMedia from './MdCardMedia'
import MdCardMediaActions from './MdCardMediaActions'
import MdCardMediaCover from './MdCardMediaCover'
import MdCardContent from './MdCardContent'
import MdCardExpand from './MdCardExpand'
import MdCardExpandTrigger from './MdCardExpandTrigger'
import MdCardExpandContent from './MdCardExpandContent'
import MdCardActions from './MdCardActions'

export default Vue => {
  init(Vue)
  Vue.component(MdCard.name, MdCard)
  Vue.component(MdCardArea.name, MdCardArea)
  Vue.component(MdCardHeader.name, MdCardHeader)
  Vue.component(MdCardHeaderText.name, MdCardHeaderText)
  Vue.component(MdCardMedia.name, MdCardMedia)
  Vue.component(MdCardMediaActions.name, MdCardMediaActions)
  Vue.component(MdCardMediaCover.name, MdCardMediaCover)
  Vue.component(MdCardContent.name, MdCardContent)
  Vue.component(MdCardExpand.name, MdCardExpand)
  Vue.component(MdCardExpandTrigger.name, MdCardExpandTrigger)
  Vue.component(MdCardExpandContent.name, MdCardExpandContent)
  Vue.component(MdCardActions.name, MdCardActions)
}
