<template>
  <div class="page-home">
    <h1 class="md-h4">{{ i18n('title') }}</h1>

    <section>
      <MdAppBar>
        AppBar
      </MdAppBar>

      <MdAppBar class="md-primary">
        AppBar Primary
      </MdAppBar>

      <MdAppBar class="md-secondary">
        AppBar Secondary
      </MdAppBar>

      <MdAppBar class="md-primary md-extended">
        <div class="md-app-bar-content">

        </div>

        <div class="md-app-bar-content">
          AppBar Extended
        </div>
      </MdAppBar>
    </section>
  </div>
</template>

<script lang="ts">
  import { Component } from 'vue-property-decorator'
  import PageConstructor from '@/components/PageConstructor'

  @Component
  class PageAppBar extends PageConstructor {

  }

  export default PageAppBar
</script>

<style lang="scss" scoped>
  section {
    padding: 8px 16px;
  }

  .md-app-bar {
    margin-bottom: 16px;
  }
</style>
