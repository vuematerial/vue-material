import Vue from 'vue'

let msColor: HTMLElement | null
let themeColor: HTMLElement | null
let maskIcon: HTMLElement | null

export default new Vue({
  data: () => ({
    prefix: 'md-theme-',
    themeName: 'default',
    enabled: true,
    metaColors: false
  }),

  computed: {
    themeTarget () {
      if (!this.$isServer) {
        return document.documentElement
      }

      return null
    },

    fullThemeName (): string {
      return this.getThemeName('')
    }
  },

  watch: {
    enabled: {
      immediate: true,
      handler () {
        if (this.themeTarget) {
          if (this.enabled) {
            this.themeTarget.classList.add(this.fullThemeName)
            this.setHtmlMetaColors(this.fullThemeName)
          } else {
            this.themeTarget.classList.remove(this.fullThemeName)
            this.setHtmlMetaColors('')
          }
        }
      }
    },

    themeName (newTheme, oldTheme) {
      const themeName = this.getThemeName(newTheme)

      if (this.themeTarget) {
        this.themeTarget.classList.remove(this.getThemeName(oldTheme))
        this.themeTarget.classList.add(themeName)
      }

      if (this.metaColors) {
        this.setHtmlMetaColors(themeName)
      }
    },

    metaColors (meta) {
      if (meta) {
        this.setHtmlMetaColors(this.fullThemeName)
      } else {
        this.setHtmlMetaColors('')
      }
    }
  },

  methods: {
    getThemeName (theme: string) {
      const themeName = theme || this.themeName

      return this.prefix + themeName
    },
    setMicrosoftColors (primaryColor: string) {
      if (msColor) {
        msColor.setAttribute('content', primaryColor)
      } else {
        msColor = document.createElement('meta')

        msColor.setAttribute('name', 'msapplication-TileColor')
        msColor.setAttribute('content', primaryColor)

        document.head.appendChild(msColor)
      }
    },
    setThemeColors (primaryColor: string) {
      if (themeColor) {
        themeColor.setAttribute('content', primaryColor)
      } else {
        themeColor = document.createElement('meta')

        themeColor.setAttribute('name', 'theme-color')
        themeColor.setAttribute('content', primaryColor)

        document.head.appendChild(themeColor)
      }
    },
    setMaskColors (primaryColor: string) {
      if (maskIcon) {
        maskIcon.setAttribute('color', primaryColor)
      } else {
        maskIcon = document.createElement('meta')

        maskIcon.setAttribute('rel', 'mask-icon')
        maskIcon.setAttribute('color', primaryColor)

        document.head.appendChild(maskIcon)
      }
    },
    setHtmlMetaColors (themeName: string) {
      let primaryColor = '#fff'

      if (themeName) {
        const computedStyle = window.getComputedStyle(document.documentElement as Element)

        primaryColor = computedStyle.getPropertyValue(`--${themeName}-primary`).trim()
      }

      if (primaryColor) {
        msColor = document.querySelector('[name="msapplication-TileColor"]')
        themeColor = document.querySelector('[name="theme-color"]')
        maskIcon = document.querySelector('[rel="mask-icon"]')

        this.setMicrosoftColors(primaryColor)
        this.setThemeColors(primaryColor)
        this.setMaskColors(primaryColor)
      }
    }
  }
})
