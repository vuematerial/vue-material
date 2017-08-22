<template>
  <form class="jsfiddle-edit" method="post" :action="apiUrl" target="check">
    <md-button type="submit" class="md-icon-button md-dense">
      <md-icon>launch</md-icon>
    </md-button>

    <div class="form-data">
      <select name="panel_html">
        <option value="0" selected></option>
      </select>

      <select name="panel_js">
        <option value="0" selected></option>
      </select>

      <select name="panel_css">
        <option value="1" selected></option>
      </select>

      <textarea name="html" v-model="html"></textarea>
      <textarea name="js" v-model="script"></textarea>
      <textarea name="css" v-model="component.style"></textarea>
      <!--<textarea name="resources">{{ external }}</textarea>-->

      <input type="text" name="title" :value="title">
      <input type="text" name="wrap" value="l">
    </div>
  </form>
</template>

<script>
const vueMaterialUrl = 'https://unpkg.com/vue-material'

function camelCaseToDash (str) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
}

export default {
  name: 'JsfiddleEdit',
  props: {
    component: Object
  },
  data: () => ({
    apiUrl: 'http://jsfiddle.net/api/post/vue/edge/'
  }),
  computed: {
    html () {
      /* eslint-disable */
        return `
<script src="${vueMaterialUrl}"><\/script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.6.15/browser.js"><\/script>
<link rel="stylesheet" href="${vueMaterialUrl}/dist/vue-material.css">

<div id="app">
  ${this.component.template}
</div>
        `
    },
    script () {
        return `
Vue.use(VueMaterial)

Vue.material.registerTheme('default', {
  primary: 'blue',
  accent: {
    color: 'red',
    hue: 'A200'
  }
})

const example = ${component.script}

new Vue({
  name: 'root',
  el: '#app',
  ...example
})
        `
        /* eslint-enable */
    },
    title () {
      return `Vue Material - ${camelCaseToDash(this.component.name)}`
    }
  }
}
</script>

<style lang="scss" scoped>
  .jsfiddle-edit {
    .form-data {
      display: none;
    }

    .md-button {
      .md-icon {
        color: #fff;
      }
    }
  }
</style>
