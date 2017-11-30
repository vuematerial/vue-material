<template>
  <page-container centered :title="$t('pages.themePrebuilt.title')">
    <div class="page-container-section">
      <h2 class="md-headline">Default Presets</h2>

      <p>Vue Material comes with some prebuilt themes for you to quickly prototype an app. The preset themes bring all styles for all components and elements that Vue Material have.</p>
      <p>Although its not recommended, you can use those themes on your app. They are very similar with the ones that you can change on this documentation website.</p>
    </div>

    <div class="page-container-section">
      <h2 class="md-headline">Themes</h2>

      <p>The available themes, for now, are:</p>
      <ul>
        <li><code>black-green-dark</code></li>
        <li><code>black-green-light</code></li>
        <li><code>default-dark</code></li>
        <li><code>default</code></li>
      </ul>

      <p>Import your css file along with Vue Material styles:</p>
      <code-example title="Importing the theme">
        import Vue from 'vue'
        import VueMaterial from 'vue-material'
        import 'vue-material/dist/vue-material.min.css'
        import 'vue-material/dist/theme/default-dark.css' // This line here

        Vue.use(VueMaterial)
      </code-example>

      <p>Alternatively you can use CDN to include it directly on your HTML:</p>
      <code-example title="CDN">
        &lt;link rel="stylesheet" href="https://unpkg.com/vue-material@beta/dist/theme/default.css"&gt;
      </code-example>

      <note-block tip>For more theme colors, please take a look at the <router-link to="/themes/configuration">Configuration</router-link> section</note-block>
    </div>
  </page-container>
</template>

<script>
  export default {
    name: 'Prebuilt'
  }
</script>
