<template>
  <div class="page-home">
    <h1 class="md-h4">{{ i18n('title') }}</h1>

    <section>
      <h2 class="md-title">{{ i18n('text') }}</h2>

      <MdButton>Button</MdButton>
      <MdButton class="md-primary">Primary</MdButton>
      <MdButton class="md-secondary">Secondary</MdButton>
    </section>

    <section>
      <h2 class="md-title">{{ i18n('outlined') }}</h2>

      <MdButton class="md-outlined">Outlined</MdButton>
      <MdButton class="md-outlined md-primary">Outlined Primary</MdButton>
      <MdButton class="md-outlined md-secondary">Outlined Secondary</MdButton>
    </section>

    <section>
      <h2 class="md-title">{{ i18n('contained') }}</h2>

      <MdButton class="md-contained">Contained</MdButton>
      <MdButton class="md-contained md-primary">Contained Primary</MdButton>
      <MdButton class="md-contained md-secondary">Contained Secondary</MdButton>
    </section>

    <section>
      <h2 class="md-title">{{ i18n('containedWithIcon') }}</h2>

      <MdButton class="md-contained">
        <MdIcon>add</MdIcon>
        <span>Icon</span>
      </MdButton>

      <MdButton class="md-contained md-primary">
        <MdIcon>edit</MdIcon>
        <span>Icon Primary</span>
      </MdButton>

      <MdButton class="md-contained md-secondary">
        <MdIcon>save</MdIcon>
        <span>Icon Secondary</span>
      </MdButton>
    </section>
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

<style lang="scss" scoped>
  section {
    padding: 8px 16px;
  }
</style>
