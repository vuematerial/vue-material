import MdTheme from 'core/MdTheme'
import deepmerge from 'deepmerge'

export default function (newComponent) {
  const defaults = {
    props: {
      mdTheme: null
    },
    computed: {
      $mdActiveTheme () {
        const { enabled, getThemeName, getAncestorTheme } = MdTheme

        if (enabled && this.mdTheme !== false) {
          return getThemeName(this.mdTheme || getAncestorTheme(this))
        }

        return null
      }
    }
  }

  return deepmerge(defaults, newComponent)
}
