<example src="./examples/Duration.vue" />

<template>
  <page-container centered :title="$t('pages.snackbar.title')">
    <div class="page-container-section">
      <p>Lorem ipsum</p>
    </div>

    <div class="page-container-section">
      <h2>Duration and position</h2>

      <code-example title="Dynamic values" :component="examples['duration']" />

      <api-item title="API - md-snackbar">
        <p>This component do not have any extra option.</p>
      </api-item>
    </div>
  </page-container>
</template>

<script>
import examples from 'docs-mixins/docsExample'

export default {
  name: 'Snackbar',
  mixins: [examples]
}
</script>
