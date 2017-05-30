import * as types from './mutation-types'

export default {
  [types.SET_PAGE_TITLE] (state, title) {
    state.pageTitle = title
  },
  [types.SET_SPLASH_MODE] (state, mode) {
    state.splashPage = mode
  }
}
