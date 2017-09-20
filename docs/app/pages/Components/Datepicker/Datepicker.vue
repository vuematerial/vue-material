<example src="./examples/Example.vue" />

<template>
  <page-container centered :title="$t('pages.datepicker.title')">
    <div class="page-container-section">
      <p>Lorem ipsum</p>
    </div>

    <div class="page-container-section">
      <h2>Datepicker</h2>

      <code-example title="Example" :component="examples['example']" />

      <api-item title="API - md-datepicker">
        <p>This component do not have any extra option.</p>
      </api-item>
    </div>
  </page-container>
</template>

<script>
  import examples from 'docs-mixins/docsExample'

  export default {
    name: 'Datepicker',
    mixins: [examples]
  }
</script>