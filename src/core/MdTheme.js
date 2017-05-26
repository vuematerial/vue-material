import Vue from 'vue'

export default new Vue({
  data: () => ({
    prefix: 'md-theme-',
    theme: 'default',
    enabled: true
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
        if (this.enabled) {
          document.body.classList.add(this.fullThemeName)
        } else {
          document.body.classList.remove(this.fullThemeName)
        }
      }
    },
    theme (newTheme, oldTheme) {
      const { getThemeName } = this

      document.body.classList.remove(getThemeName(oldTheme))
      document.body.classList.add(getThemeName(newTheme))
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
