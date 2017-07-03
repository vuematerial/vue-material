import Vue from 'vue'

const msColor = document.querySelector('[name="msapplication-TileColor"]')
const themeColor = document.querySelector('[name="theme-color"]')
const maskIcon = document.querySelector('[rel="mask-icon"]')

export default new Vue({
  data: () => ({
    prefix: 'md-theme-',
    theme: 'default',
    enabled: true,
    themeTarget: document.body
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
          this.setHtmlMetaColors(fullThemeName)
        } else {
          themeTarget.classList.remove(fullThemeName)
          this.setHtmlMetaColors()
        }
      }
    },
    theme (newTheme, oldTheme) {
      const { getThemeName, themeTarget } = this

      newTheme = getThemeName(newTheme)

      themeTarget.classList.remove(getThemeName(oldTheme))
      themeTarget.classList.add(newTheme)
      this.setHtmlMetaColors(newTheme)
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
    },
    setMicrosoftColors (primaryColor) {
      if (msColor) {
        msColor.setAttribute('content', primaryColor)
      }
    },
    setThemeColors (primaryColor) {
      if (themeColor) {
        themeColor.setAttribute('content', primaryColor)
      }
    },
    setMaskColors (primaryColor) {
      if (maskIcon) {
        maskIcon.setAttribute('color', primaryColor)
      }
    },
    setHtmlMetaColors (themeName) {
      let primaryColor = '#fff'

      if (themeName) {
        const computedStyle = window.getComputedStyle(document.documentElement)

        primaryColor = computedStyle.getPropertyValue(`--${themeName}-primary`)
      }

      if (primaryColor) {
        this.setMicrosoftColors(primaryColor)
        this.setThemeColors(primaryColor)
        this.setMaskColors(primaryColor)
      }
    }
  },
  created () {
    if (this.enabled) {
      window.addEventListener('load', () => {
        this.setHtmlMetaColors(this.fullThemeName)
      })
    }
  }
})
