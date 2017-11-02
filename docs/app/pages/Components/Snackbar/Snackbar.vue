<example src="./examples/SnackbarExample.vue" />

<template>
  <page-container centered :title="$t('pages.snackbar.title')">
    <div class="page-container-section">
      <p>Snackbars provide brief feedback about an operation through a message at the bottom of the screen.</p>
      <p>They can have a custom duration on the screen or be persistent. I can be centered aligned or left aligned.</p>
    </div>

    <div class="page-container-section">
      <h2>Duration and position</h2>

      <code-example title="Dynamic values" :component="examples['snackbar-example']" />

      <api-item title="API - md-snackbar">
        <p>This component does not have any extra option.</p>
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
