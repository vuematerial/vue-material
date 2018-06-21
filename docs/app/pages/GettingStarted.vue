<template>
  <page-container centered :title="$t('pages.gettingStarted.title')">
    <note-block warning>Disclaimer: This is a beta version. The API is not going to change, but be careful to use it in production.</note-block>

    <div class="page-container-section">
      <h2 class="md-headline">Introduction</h2>

      <p>Vue Material is the best integration between Vue.js and Material Design specs! You can easily configure it to suit all your needs through an easy API.</p>
      <p>The documentation is divided by Themes, Components and UI Elements. The themes area is the definitive guide on how to theme your application (or write your own themes). The Components and UI Elements parts shows live examples, along with an API Table of each component/resource.</p>
      <note-block>Vue Material Documentation assumes that you are comfortable with Vue.js <strong>2.5+</strong>. If you are new to Vue.js, it might not be the best idea to learn from here as your first step - grasp the basics then come back. The <a href="https://vuejs.org/v2/guide/index.html">Vue.js website</a> is the greatest documentation source for you to start with.</note-block>
    </div>

    <div class="page-container-section">
      <h2 class="md-headline">{{ $t('pages.gettingStarted.installation') }}</h2>

      <p>You can install Vue Material through NPM or Yarn:</p>
      <code-example :title="$t('pages.gettingStarted.npmOrYarn')" label="Shell" lang="shell">
        $ npm install vue-material --save
        $ yarn add vue-material
      </code-example>

      <p>It's optional, but to have the best experience possible, use Roboto and Google Icons from Google CDN:</p>
      <code-example title="Roboto Font and Icons" label="HTML" lang="html">
        &lt;link rel=&quot;stylesheet&quot; href=&quot;//fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons&quot;&gt;
      </code-example>

    </div>

    <div class="page-container-section">
      <h2 class="md-headline">Usage</h2>

      <p>To use Vue Material in your application, you can import only the components that you're really using. This will allow you to make your build way more compact than installing a full bundle.</p>
      <code-example title="Individual components">
        import Vue from 'vue'
        import { MdButton, MdContent, MdTabs } from 'vue-material/dist/components'
        import 'vue-material/dist/vue-material.min.css'

        Vue.use(MdButton)
        Vue.use(MdContent)
        Vue.use(MdTabs)
      </code-example>

      <note-block alert>Although is not recommended you can use the full bundle of Vue Material. This will import <strong>ALL</strong> components and UI Elements, and will hurt performance:</note-block>
      <code-example title="Full Bundle">
        import Vue from 'vue'
        import VueMaterial from 'vue-material'
        import 'vue-material/dist/vue-material.min.css'

        Vue.use(VueMaterial)
      </code-example>

      <p>Although is not the recommended approach, you can always use CDNs for fast prototyping:</p>
      <note-block tip>For better integration with Vue Material, use <a href="https://cli.vuejs.org" target="_blank">vue-cli</a>.</note-block>

      <code-example title="CDN" label="HTML" lang="html">
        &lt;!doctype html&gt;
        &lt;html&gt;
          &lt;head&gt;
            &lt;meta charset="utf-8"&gt;
            &lt;meta content="width=device-width,initial-scale=1,minimal-ui" name="viewport"&gt;
            &lt;link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic|Material+Icons"&gt;
          	&lt;link rel="stylesheet" href="https://unpkg.com/vue-material/dist/vue-material.min.css"&gt;
          	&lt;link rel="stylesheet" href="https://unpkg.com/vue-material/dist/theme/default.css"&gt;
          &lt;/head&gt;

          &lt;body&gt;
            &lt;div id="app"&gt;
              &lt;!-- Your code here --&gt;
            &lt;/div&gt;

            &lt;script src="https://unpkg.com/vue"&gt;&lt;/script&gt;
            &lt;script src="https://unpkg.com/vue-material"&gt;&lt;/script&gt;
            &lt;script&gt;
              Vue.use(VueMaterial.default)

              new Vue({
                el: '#app'
              })
            &lt;/script&gt;
          &lt;/body&gt;
        &lt;/html&gt;
      </code-example>
    </div>
  </page-container>
</template>

<script>
  export default {
    name: 'GettingStarted'
  }
</script>
