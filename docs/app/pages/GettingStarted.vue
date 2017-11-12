<template>
  <page-container centered :title="$t('pages.gettingStarted.title')">
    <div class="page-container-section">
      <h2 class="md-headline">Introduction</h2>

      <p>Vue Material is the best integration between Vue.js and Material Design specs! You can easily configure it to suit all your needs through and easy API.</p>
      <p>The documentation is divided by Themes, Components and UI Elements. The themes area is the definitive guide on how to theme your application (or write your own themes). And the Components and UI Elements parts shows live examples, along with a API Table of each component/resource.</p>
      <note-block alert>Vue Material Documentation assumes that you are confortable with Vue.js 2+. If you are new to Vue.js, it might not be the best idea to learn from here as your first step - grasp the basics then come back. The <a href="https://vuejs.org/v2/guide/index.html">Vue.js website</a> is the greatest documentation source for you start with.</note-block>
    </div>

    <div class="page-container-section">
      <h2 class="md-headline">{{ $t('pages.gettingStarted.installation') }}</h2>

      <p>First of all, you have to choose an installation method that fits you better and follow it's instructions. There is three basic ways to getting started with Vue Material.</p>
      <code-example :title="$t('pages.gettingStarted.npmOrYarn')" label="Shell" lang="shell">
        $ npm install vue-material --save
        $ yarn add vue-material
      </code-example>
    </div>
  </page-container>
</template>

<script>
  export default {
    name: 'Components'
  }
</script>
