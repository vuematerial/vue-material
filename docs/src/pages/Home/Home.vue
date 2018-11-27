<template>
  <div class="page-home">
    <h1>{{ i18n('title') }}</h1>
  </div>
</template>

<script lang="ts">
  import { Component } from 'vue-property-decorator'
  import PageConstructor from '@/components/PageConstructor'

  @Component
  class PageHome extends PageConstructor {

  }

  export default PageHome
</script>
