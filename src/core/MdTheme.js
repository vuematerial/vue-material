import Vue from 'vue'

export default new Vue({
  data: () => ({
    prefix: 'md-theme-',
    active: 'default',
    enabled: true
  }),
  computed: {
    fullThemeName () {
      return this.getThemeName()
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

          return this.active
        }

        return getParentThemeName(component.$parent)
      }

      return null
    },
    getThemeName (theme) {
      const themeName = theme || this.active

      return this.prefix + themeName
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
    }
  }
})
