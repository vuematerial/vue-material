import mdReactive from './utils/mdReactive'
import MdThemeFactory from './factories/MdThemeFactory'

interface Material {
  ripple: boolean,
  theming: {
    metaColors: boolean,
    themeName: string
    enabled: boolean
  },
  locale: {
    startYear: number,
    endYear: number,
    dateFormat: string[],
    days: string[],
    shortDays: string[],
    shorterDays: string[],
    months: string[],
    shortMonths: string[],
    shorterMonths: string[],
    firstDayOfAWeek: number
  }
}

function reactiveTheming (obj: object, prop: string, target: object) {
  Object.defineProperties(obj, {
    [prop]: {
      get: () => target[prop],
      set (value) {
        target[prop] = value
      }
    }
  })
}

const init = () => {
  const material: Material = mdReactive({
    ripple: true,
    theming: {},
    locale: {
      startYear: 1900,
      endYear: 2099,
      dateFormat: 'YYYY-MM-DD',
      days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      shortDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      shorterDays: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
      months: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ],
      shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
      shorterMonths: ['J', 'F', 'M', 'A', 'M', 'Ju', 'Ju', 'A', 'Se', 'O', 'N', 'D'],
      firstDayOfAWeek: 0
    }
  }) as Material

  reactiveTheming(material.theming, 'metaColors', MdThemeFactory)
  reactiveTheming(material.theming, 'themeName', MdThemeFactory)
  reactiveTheming(material.theming, 'enabled', MdThemeFactory)

  return material
}

export default (vue: any) => {
  if (!vue.material) {
    vue.material = init()
    vue.prototype.$material = vue.material

    if (MdThemeFactory.enabled && MdThemeFactory.metaColors) {
      window.addEventListener('load', () => {
        MdThemeFactory.setHtmlMetaColors(MdThemeFactory.fullThemeName)
      })
    }
  }
}
