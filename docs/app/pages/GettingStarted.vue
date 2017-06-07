<template>
  <page-container centered :title="$t('pages.gettingStarted.title')">
    <div class="page-container-section">{{ $t('pages.gettingStarted.introduction') }}</div>

    <div class="page-container-section">
      <h2 class="md-headline">{{ $t('pages.gettingStarted.installation') }}</h2>
    </div>

    <code-example title="NPM or Yarn" label="Shell" lang="shell">
      <div slot="code">
        $ npm install vue-material --save
        $ yarn add vue-material
      </div>
    </code-example>
  </page-container>
</template>

<style lang="scss" scoped>
  @import "~vue-material/components/MdAnimation/variables";
</style>

<script>
  export default {
    name: 'Components'
  }
</script>
