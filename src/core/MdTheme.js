import Vue from 'vue'

export default new Vue({
  data: () => ({
    prefix: 'md-theme-',
    theme: 'default',
    enabled: true,
    themeTarget: document.documentElement
  }),
  computed: {
    fullThemeName () {
      return this.getThemeName()
    }
  },
  watch: {
    enabled: {
      immediate: true,
      handler () {
        const { fullThemeName, themeTarget, enabled } = this

        if (enabled) {
          themeTarget.classList.add(fullThemeName)
        } else {
          themeTarget.classList.remove(fullThemeName)
        }
      }
    },
    theme (newTheme, oldTheme) {
      const { getThemeName, themeTarget } = this

      themeTarget.classList.remove(getThemeName(oldTheme))
      themeTarget.classList.add(getThemeName(newTheme))
    }
  },
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

          return this.theme
        }

        return getParentThemeName(component.$parent)
      }

      return null
    },
    getThemeName (theme) {
      const themeName = theme || this.theme

      return this.prefix + themeName
    }
  }
})
