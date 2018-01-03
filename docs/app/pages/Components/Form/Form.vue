<example src="./examples/FormValidation.vue" />

<template>
  <page-container centered :title="$t('pages.form.title')">
    <div class="page-container-section">
      <p>In web applications it is very common for pages to have forms, with the most diverse types of fields. Vue Material introduces several components that help in building an application. With this you have fill flows, validation and submission forms.</p>
      <p>Here you can find some examples on how to use Vue Material to build forms.</p>
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
    name: 'DocForm',
    mixins: [examples]
  }
</script>
