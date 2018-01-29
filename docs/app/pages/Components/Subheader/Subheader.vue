<example src="./examples/SubheaderExample.vue" />

<template>
  <page-container centered :title="$t('pages.subheader.title')">
    <div class="page-container-section">
      <p>Subheaders are list tiles that delineate sections of a list or grid list.</p>
      <p>The subheader can be used in lists, grid and even on selects and are typically related to filtering or sorting criteria. They fit well in navigation panels and grid lists.</p>
    </div>

    <div class="page-container-section">
      <h2>Subheader</h2>

      <code-example title="Subheader" :component="examples['subheader-example']" />

      <api-item title="API - md-subheader">
        <p>This component does not have any extra option.</p>
      </api-item>
    </div>
  </page-container>
</template>

<script>
  import examples from 'docs-mixins/docsExample'

  export default {
    name: 'DocSubheader',
    mixins: [examples]
  }
</script>
