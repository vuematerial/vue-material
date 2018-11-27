import Vue from 'vue'
import VueI18n, { LocaleMessageObject } from 'vue-i18n'

Vue.use(VueI18n)

const i18n = new VueI18n()
const defaultLanguage = 'en-US'

export default i18n

async function getMessages (language: string, path: string, isPage: boolean = false) {
  async function importFile (fileLanguage: string) {
    if (isPage) {
      return import(`../${path}/i18n/${fileLanguage}.ts`)
    }

    return import(`./${fileLanguage}.ts`)
  }

  try {
    return importFile(language)
  } catch (error) {
    return importFile(defaultLanguage)
  }
}

export function getDocumentLocale () {
  if (document.documentElement) {
    return document.documentElement.lang
  }

  return defaultLanguage
}

export async function getGlobalMessages (language: string) {
  const { default: messages } = await getMessages(language, '')

  return messages
}

export async function getPageMessages (language: string, page: string) {
  const { default: messages } = await getMessages(language, `pages/${page}`, true)

  return messages
}

export async function setMessages (language: string, messages: LocaleMessageObject) {
  i18n.locale = language
  i18n.mergeLocaleMessage(language, messages)

  return Promise.resolve(i18n)
}
