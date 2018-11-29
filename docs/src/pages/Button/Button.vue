<template>
  <div class="page-home">
    <h1>{{ i18n('title') }}</h1>
    <MdButton>Primary</MdButton>
    <MdButton class="md-primary">Primary</MdButton>
    <MdButton class="md-secondary">Secondary</MdButton>
  </div>
</template>

<script lang="ts">
  import { Component } from 'vue-property-decorator'
  import PageConstructor from '@/components/PageConstructor'

  @Component
  class PageButton extends PageConstructor {

  }

  export default PageButton
</script>
