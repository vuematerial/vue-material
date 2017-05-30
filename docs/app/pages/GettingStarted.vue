<template>
  <page-container centered :title="$t('pages.gettingStarted.title')">
    <div class="page-container-section">{{ $t('pages.gettingStarted.introduction') }}</div>

    <div class="page-container-section">
      <h2 class="md-headline">{{ $t('pages.gettingStarted.installation') }}</h2>
    </div>

    <code-block lang="Vue" v-pre>
      &lt;template&gt;
        &lt;page-container centered :title=&quot;$t(&apos;pages.gettingStarted.title&apos;)&quot;&gt;
          &lt;div class=&quot;page-container-section&quot;&gt;{{ $t(&apos;pages.gettingStarted.introduction&apos;) }}&lt;/div&gt;

          &lt;div class=&quot;page-container-section&quot;&gt;
            &lt;h2 class=&quot;md-headline&quot;&gt;{{ $t(&apos;pages.gettingStarted.installation&apos;) }}&lt;/h2&gt;
          &lt;/div&gt;
        &lt;/page-container&gt;
      &lt;/template&gt;

      &lt;style lang=&quot;scss&quot; scoped&gt;
        @import "~vue-material/components/MdAnimation/variables";
        @import "~vue-material/theme/factory";

        .code-block {
          overflow: hidden;
          position: relative;
          border-radius: 2px;
          background-color: md-get-palette-color(grey, 900);
        }
      &lt;/style&gt;

      &lt;script&gt;
        export default {
          name: &apos;Components&apos;
        }
      &lt;/script&gt;
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
