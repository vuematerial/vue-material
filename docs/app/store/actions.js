import Vue from 'vue'
import * as types from './mutation-types'

export default {
  [types.SET_PAGE_TITLE] ({ commit }, title) {
    const name = 'Vue Material'
    const metaTitle = document.querySelector('meta[property="og:title"]')
    const metaUrl = document.querySelector('meta[property="og:url"]')

    if (title) {
      document.title = `${title} - ${name}`
    } else {
      document.title = `${name} - Material Design for Vue.js`
    }

    if (metaTitle) {
      metaTitle.setAttribute('content', document.title)
    }

    if (metaUrl) {
      metaUrl.setAttribute('content', window.location.href)
    }

    commit(types.SET_PAGE_TITLE, title)
  },
  [types.CHANGE_THEME] ({ commit }, theme) {
    Vue.material.theming.theme = theme
    commit(types.CHANGE_THEME, theme)
  }
}
