<template>
  <div v-if="loaded" id="docs" class="docs md-scrollbar">
    <AppNavigation />
    <RouterView />
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import { getDocumentLocale, getGlobalMessages, setMessages } from '@/i18n'
  import AppNavigation from '@/templates/AppNavigation.vue'

  @Component({
    components: {
      AppNavigation
    }
  })
  class App extends Vue {

    loaded = false

    async created () {
      const documentLanguage = getDocumentLocale()
      const messages = await getGlobalMessages(documentLanguage)

      await setMessages(documentLanguage, messages)
      this.loaded = true
    }

  }

  export default App
</script>

<style lang="scss">
  @import '~vue-material/vue-material';
  @import '~vue-material/theme/engine';

  @include md-create-theme('default');

  @import '~vue-material/theme/components';
</style>

<style lang="scss">
  body {
    overflow: hidden;
  }
</style>

<style lang="scss" scoped>
  .docs {
    height: 100vh;
    display: flex;
    flex-direction: column;
    font-family: Roboto, sans-serif;
  }
</style>
