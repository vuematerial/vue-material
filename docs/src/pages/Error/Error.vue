<template>
  <div class="page-error">
    <h1>{{ i18n('title') }}</h1>
  </div>
</template>

<script lang="ts">
  import { Component } from 'vue-property-decorator'
  import PageConstructor from '@/components/PageConstructor'

  @Component
  class PageError extends PageConstructor {

  }

  export default PageError
</script>
