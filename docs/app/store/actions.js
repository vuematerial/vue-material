import * as types from './mutation-types'

export default {
  [types.SET_PAGE_TITLE] ({ commit }, title) {
    const name = 'Vue Material'

    if (title) {
      document.title = `${title} - ${name}`
    } else {
      document.title = `${name} - Material Design for Vue.js`
    }

    commit(types.SET_PAGE_TITLE, title)
  }
}
