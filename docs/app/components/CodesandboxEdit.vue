<template>
  <form
    class="codesandbox-edit"
    action="https://codesandbox.io/api/v1/sandboxes/define"
    method="POST"
    target="_blank"
  >
    <md-button type="submit" class="md-icon-button md-dense">
      <md-icon>launch</md-icon>
      <md-tooltip md-theme="default">Open in sandbox</md-tooltip>
    </md-button>

    <input type="hidden" name="parameters" v-model="parameters" />
    <input type="hidden" name="query" value="module=App.vue" />
  </form>
</template>

<script>
const html = `
  <!DOCTYPE html>
  <html>

  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons">
    <title>CodeSandbox Vue Material</title>
  </head>

  <body>
    <div id="app"></div>
    <!-- built files will be auto injected -->
  </body>

  </html>
  `
const index = `
  import Vue from 'vue'
  import App from './App'
  
  
  //... Add Vue-Material Specs

  import VueMaterial from 'vue-material'
  import 'vue-material/dist/vue-material.min.css'
  import 'vue-material/dist/theme/default.css'

  Vue.config.productionTip = false
  Vue.use(VueMaterial)

  new Vue({
    el: '#app',
    components: { App },
    template: '<App/>'
  })
  `
const vueConfig = `module.exports = {
      runtimeCompiler: true
  };
  `

import { getParameters } from "codesandbox/lib/api/define"

export default {
  name: "CodesandboxEdit",
  props: {
    component: Object,
    title: String
  },
  computed: {
    source () {
      return this.component.source.replace(
        /src="\/assets/g,
        'src="https://vuematerial.io/assets'
      )
    },
    parameters () {
      return getParameters({
        files: {
          "package.json": {
            content: {
              name: `Vue Material - ${this.title}`,
              keywords: ["vue-material", "material-design", "vue"],
              version: "0.0.1",
              private: true,
              scripts: {
                serve: "vue-cli-service serve",
                build: "vue-cli-service build",
                lint: "vue-cli-service lint"
              },
              dependencies: {
                vue: "^2.6.11",
                "vue-material": "1.0.0-beta-15"
              },
              devDependencies: {
                "@vue/cli-service": "~4.5.0"
              }
            }
          },
          "/src/main.js": {
            content: index
          },
          "/public/index.html": {
            content: html
          },
          "/src/App.vue": {
            content: this.source
          },
          "vue.config.js": {
            content: vueConfig
          }
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.codesandbox-edit {
  .md-button {
    margin-right: 0;

    .md-icon {
      color: #fff;
    }
  }
}
</style>
