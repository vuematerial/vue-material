<template>
  <form class="codepen-edit" action="https://codepen.io/pen/define" method="POST" target="_blank">
    <md-button type="submit" class="md-icon-button md-dense">
      <md-icon>launch</md-icon>
      <md-tooltip md-theme="default">Open on Codepen</md-tooltip>
    </md-button>

    <input type="hidden" name="data" v-model="apiContent">
  </form>
</template>

<script>
  const vueMaterialUrl = 'https://unpkg.com/vue-material@beta'

  function camelCaseToDash (str) {
    return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
  }

  export default {
    name: 'CodepenEdit',
    props: {
      component: Object
    },
    computed: {
      /* eslint-disable */
      styles () {
        return this.component.style ? this.component.style : ''
      },
      html () {
        return `
<div id="app">
  ${this.component.template}
</div>
`
      },
      script () {
        return `
Vue.use(VueMaterial.default)

const example = ${this.component.script}

new Vue({
  name: 'root',
  el: '#app',
  ...example
})
`
      },
      externalScripts () {
        return [
          'https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.6.15/browser.js',
          'https://unpkg.com/vue',
          `${vueMaterialUrl}`
        ].join(';')
      },
      externalStyles () {
        return [
          `https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic`,
          `https://fonts.googleapis.com/icon?family=Material+Icons`,
          `${vueMaterialUrl}/dist/vue-material.min.css`,
          'https://cdn.rawgit.com/vuematerial/vue-material/master/dist/default-theme.css'
        ].join(';')
      },
      apiJson () {
        return {
          title: `Vue Material - ${camelCaseToDash(this.component.name)}`,
          description: 'It\'s about stuff.',
          private: false,
          tags: ['vue-material', 'material-design'],
          editors: '111',
          layout: 'left',
          html: `${this.html}`,
          html_pre_processor: 'none',
          css: `${this.styles}`,
          css_pre_processor: 'scss',
          css_starter: 'neither',
          css_prefix: 'autoprefixer',
          js: `${this.script}`,
          js_pre_processor: 'babel',
          html_classes: '',
          head: '<meta name="viewport" content="width=device-width, initial-scale=1, minimal-ui">',
          css_external: `${this.externalStyles}`,
          js_external: `${this.externalScripts}`,
          js_modernizr: 'false'
        }
      },
      apiContent () {
        return JSON.stringify(this.apiJson).replace(/"/g, '&​quot;').replace(/'/g, '&apos;');
      }
      /* eslint-enable */
    }
  }
</script>

<style lang="scss" scoped>
  .codepen-edit {
    .md-button {
      margin-right: 0;

      .md-icon {
        color: #fff;
      }
    }
  }
</style>
