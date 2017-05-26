import Vue from 'vue'
import Vuei18n from 'vue-i18n'
import enUS from './i18n/en-US'

Vue.use(Vuei18n)

export const currentLang = enUS
export const i18n = new Vuei18n({
  locale: 'en-US',
  messages: {
    'en-US': enUS
  }
})
