import deepmerge from 'deepmerge'
import MdRipple from 'components/MdRipple/MdRipple'
import MdComponent from './MdComponent'

export default function (newComponent) {
  const defaults = {
    components: {
      MdRipple
    },
    props: {
      mdRipple: {
        type: Boolean,
        default: true
      }
    }
  }

  return new MdComponent(deepmerge(defaults, newComponent))
}
