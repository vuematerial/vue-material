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
      styles () {
        return this.component.style ? this.component.style : ''
      },
      html () {
        return this.component.template
      },
      script () {
        return this.component.script
      },
      externalScripts () {
        return [
          'https://unpkg.com/babel-standalone/babel.min.js',
          'https://unpkg.com/vue/dist/vue.min.js',
          `${vueMaterialUrl}`
        ].join(';')
      },
      externalStyles () {
        return [
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic|Material+Icons',
          `${vueMaterialUrl}/dist/vue-material.min.css`,
          `${vueMaterialUrl}/dist/theme/default.css`
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
          css_starter: 'neither',
          css_prefix: 'autoprefixer',
          js: `${this.script}`,
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
