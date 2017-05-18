import MdReactive from 'core/MdReactive'
import MdTheme from 'core/MdTheme'

const VueMaterial = new MdReactive({
  inkRipple: true,
  theming: {},
  locale: {
    startYear: 1900,
    endYear: 2099,
    dateFormat: 'YYYY-MM-DD',
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    shortDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    shorterDays: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
    shorterMonths: ['J', 'F', 'M', 'A', 'M', 'Ju', 'Ju', 'A', 'Se', 'O', 'N', 'D']
  }
})

Object.defineProperties(VueMaterial.theming, {
  currentTheme: {
    get: () => MdTheme.active,
    set (active) {
      MdTheme.active = active
    }
  },
  enabled: {
    get: () => MdTheme.enabled,
    set (enabled) {
      MdTheme.enabled = enabled
    }
  }
})

export default VueMaterial
