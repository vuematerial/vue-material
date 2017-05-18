import Vue from 'vue'

export default new Vue({
  data: () => ({
    prefix: 'md-theme-',
    active: 'default',
    enabled: true
  }),
  methods: {
    getAncestorTheme (component) {
      if (component) {
        const currentTheme = component.mdTheme
        const getParentThemeName = (parent) => {
          if (parent) {
            const { mdTheme, $parent } = parent

            if (mdTheme && mdTheme !== currentTheme) {
              return mdTheme
            }

            return getParentThemeName($parent)
          }

          return this.active
        }

        return getParentThemeName(component.$parent)
      }

      return null
    },
    getThemeName (theme) {
      return this.prefix + theme
    }
  }
})
