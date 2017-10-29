<example src="./examples/FormValidation.vue" />

<template>
  <page-container centered :title="$t('pages.input.title')">
    <div class="page-container-section">
      <p>Text fields allows users to input, edit, and select text, typically inside forms but they can appear in other places, like dialog boxes and search.</p>
    </div>

    <div class="page-container-section">
      <h2>Form Validation</h2>

      <code-example title="Example" :component="examples['form-validation']" />
    </div>
  </page-container>
</template>

<script>
  import examples from 'docs-mixins/docsExample'

  export default {
    name: 'Form',
    mixins: [examples]
  }
</script>
