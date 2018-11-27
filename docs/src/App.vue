<template>
  <div v-if="loaded" id="docs" class="docs">
    <AppNavigation />
    <RouterView />
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import { getDocumentLocale, getGlobalMessages, setMessages } from '@/i18n'
  import AppNavigation from '@/templates/AppNavigation'

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
  body {
    overflow: hidden;
  }
</style>

<style lang="scss" scoped>
  .app {
    height: 100vh;
    display: flex;
  }
</style>
