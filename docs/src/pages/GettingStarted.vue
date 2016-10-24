<template>
  <single-page class="single-page-home" label="Getting Started">
    <single-page-banner label="Getting Started"></single-page-banner>

    <single-page-section label="Installation">
      <p>Import Roboto and Google Icons from Google CDN:</p>
      <code-block lang="xml">
&lt;link rel=&quot;stylesheet&quot; href=&quot;//fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic&quot;&gt;
&lt;link rel=&quot;stylesheet&quot; href=&quot;//fonts.googleapis.com/icon?family=Material+Icons&quot;&gt;
      </code-block>

      <p>
        - Install Vue Material through npm or yarn: <br>
        <code>npm install vue-material</code><br>
        <code>yarn add vue-material</code>
      </p>
      <small>* Others package managers like JSPM and Bower are not supported yet.</small>

      <md-tabs class="md-transparent">
        <md-tab md-label="ES6">
          <code-block lang="javascript">
import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
          </code-block>
        </md-tab>

        <md-tab md-label="AMD">
          <code-block lang="javascript">
var Vue = require('vue')
var VueMaterial = require('vue-material')
require('vue-material/dist/vue-material.css')
          </code-block>
        </md-tab>
      </md-tabs>

      <p>Or <a href="https://github.com/marcosmoura/vue-material/archive/master.zip" target="_blank" rel="noopener">download</a> from Github and reference the script and the stylesheet in your HTML:</p>
      <code-block lang="xml">
&lt;link rel=&quot;stylesheet&quot; href=&quot;path/to/vue-material.css&quot;&gt;
&lt;script src=&quot;path/to/vue-material.js&quot;&gt;&lt;/script&gt;
      </code-block>
    </single-page-section>

    <single-page-section label="Usage">
      <p>Enable Vue Material in your application using <code>Vue.use()</code>. You can always enable individual components:</p>
      <md-tabs class="md-transparent">
        <md-tab md-label="ES6">
          <code-block lang="javascript">
// To import the whole library
import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

Vue.use(VueMaterial)

// Or to import individual components
import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/components/mdCore/index.css' //Required to boot vue material
import 'vue-material/dist/components/mdButton/index.css'
import 'vue-material/dist/components/mdIcon/index.css'
import 'vue-material/dist/components/mdSidenav/index.css'
import 'vue-material/dist/components/mdToolbar/index.css'

Vue.use(VueMaterial.mdCore) //Required to boot vue material
Vue.use(VueMaterial.mdButton)
Vue.use(VueMaterial.mdIcon)
Vue.use(VueMaterial.mdSidenav)
Vue.use(VueMaterial.mdToolbar)
          </code-block>
        </md-tab>

        <md-tab md-label="AMD">
          <code-block lang="javascript">
// To import the whole library
var Vue = require('vue')
var VueMaterial = require('vue-material')
require('vue-material/dist/vue-material.css')

Vue.use(VueMaterial)

// Or to import individual components
var Vue = require('vue')
var VueMaterial = require('vue-material')
require('vue-material/dist/components/mdCore/index.css') //Required to boot vue material
require('vue-material/dist/components/mdButton/index.css')
require('vue-material/dist/components/mdIcon/index.css')
require('vue-material/dist/components/mdSidenav/index.css')
require('vue-material/dist/components/mdToolbar/index.css')

Vue.use(VueMaterial.mdCore) //Required to boot vue material
Vue.use(VueMaterial.mdButton)
Vue.use(VueMaterial.mdIcon)
Vue.use(VueMaterial.mdSidenav)
Vue.use(VueMaterial.mdToolbar)
          </code-block>
        </md-tab>
      </md-tabs>
    </single-page-section>

    <single-page-section label="Apply theme">
      <p>To get Vue Material working properly, you'll need to configure a default theme. You can also register multiple themes at once.</p>
      <md-tabs class="md-transparent">
        <md-tab md-label="Single Theme">
          <code-block lang="javascript">
Vue.material.theme.register('default', {
  primary: 'cyan',
  accent: 'pink'
})
          </code-block>
        </md-tab>

        <md-tab md-label="Multiple Themes">
          <code-block lang="javascript">
Vue.material.theme.registerAll({
  default: {
    primary: 'cyan',
    accent: 'pink'
  },
  indigo: {
    primary: 'indigo',
    accent: 'pink'
  }
})
          </code-block>
        </md-tab>
      </md-tabs>

      <p>Apply your theme on each code part that you want using <code>v-md-theme</code> directive:</p>

      <code-block lang="xml">
&lt;div id=&quot;app&quot; v-md-theme=&quot;&#039;default&#039;&quot;&gt;
  &lt;md-toolbar&gt;
    &lt;div class=&quot;md-title&quot;&gt;My App&lt;/div&gt;
  &lt;/md-toolbar&gt;

  &lt;md-button v-md-theme=&quot;&#039;indigo&#039;&quot;&gt;My Button&lt;/md-button&gt;
&lt;/div&gt;
      </code-block>
    </single-page-section>
  </single-page>
</template>

<style lang="scss" scoped>
  .md-tab {
    padding: 16px 0;
    border-top: 1px solid rgba(#000, .12);
  }
</style>
