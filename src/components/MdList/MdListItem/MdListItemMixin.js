import ripple from 'core/mixins/ripple'
import MdListItemContent from './MdListItemContent'

export default {
  mixins: [ripple],
  components: {
    MdListItemContent
  },
  props: {
    disabled: Boolean
  },
  computed: {
    isDisabled () {
      return !this.mdRipple || this.disabled
    }
  }
}
