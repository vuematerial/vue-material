import material from 'vue-material/material'
import MdCard from './MdCard'
import MdCardArea from './MdCardArea/MdCardArea'
import MdCardHeader from './MdCardHeader/MdCardHeader'
import MdCardHeaderText from './MdCardHeader/MdCardHeaderText'
import MdCardMedia from './MdCardMedia/MdCardMedia'
import MdCardMediaActions from './MdCardMedia/MdCardMediaActions'
import MdCardMediaCover from './MdCardMedia/MdCardMediaCover'
import MdCardContent from './MdCardContent/MdCardContent'
import MdCardExpand from './MdCardExpand/MdCardExpand'
import MdCardExpandTrigger from './MdCardExpand/MdCardExpandTrigger'
import MdCardExpandContent from './MdCardExpand/MdCardExpandContent'
import MdCardActions from './MdCardActions/MdCardActions'

export default Vue => {
  material(Vue)
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
