<template>
  <page-container centered :title="$t('pages.gettingStarted.title')">
    <div class="page-container-section">{{ $t('pages.gettingStarted.introduction') }}</div>

    <div class="page-container-section">
      <h2 class="md-headline">{{ $t('pages.gettingStarted.installation') }}</h2>
    </div>

    <code-block lang="html">
      &lt;div class=&quot;page-container-section&quot;&gt;
        &lt;h2 class=&quot;md-headline&quot;&gt;{{ $t(&apos;pages.gettingStarted.installation&apos;) }}&lt;/h2&gt;
      &lt;/div&gt;
    </code-block>
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
