<example src="./examples/RegularCheckboxes.vue" />

<template>
  <page-container centered :title="$t('pages.checkbox.title')">
    <div class="page-container-section">
      <p>Checkboxes allow the user to select multiple options from a set.</p>
    </div>

    <div class="page-container-section">
      <h2>Regular Checkboxes</h2>

      <code-example title="Checkbox" :component="examples['regular-checkboxes']" />
    </div>
  </page-container>
</template>

<script>
  import examples from 'docs-mixins/docsExample'

  export default {
    name: 'Checkbox',
    mixins: [examples]
  }
</script>
