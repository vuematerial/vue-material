import MdTheme from 'core/MdTheme'

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

  return {
    ...defaults,
    ...newComponent
  }
}
