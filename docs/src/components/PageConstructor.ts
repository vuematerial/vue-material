import Vue from 'vue'
import camelCase from 'camel-case'

class PageConstructor extends Vue {

  page: string = ''

  constructor () {
    super()
    this.page = camelCase(this.constructor.name)
  }

  i18n (path: string) {
    return this.$t(`${this.page}.${path}`)
  }

}

export default PageConstructor
