import Vue from 'vue'
import Router from 'vue-router'
import i18n, { getPageMessages, setMessages } from '@/i18n'

Vue.use(Router)

function importPage (path: string, file: string) {
  return async () => {
    const locale = i18n.locale
    const messages = await getPageMessages(locale, path)

    await setMessages(locale, messages)

    return import(`./pages/${path}/${file}.vue`)
  }
}

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: importPage('Home', 'Home')
    },
    {
      path: '*',
      name: 'error',
      component: importPage('Error', 'Error')
    }
  ]
})
