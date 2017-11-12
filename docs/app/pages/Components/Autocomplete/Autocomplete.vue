<example src="./examples/AutocompleteStatic.vue" />
<example src="./examples/AutocompleteBox.vue" />
<example src="./examples/AutocompleteTemplate.vue" />
<example src="./examples/AutocompleteAsync.vue" />

<template>
  <page-container centered :title="$t('pages.autocomplete.title')">
    <div class="page-container-section">
      <p>Lorem ipsum</p>
    </div>

    <div class="page-container-section">
      <h2>Static Data</h2>

      <code-example title="Normal and Dense" :component="examples['autocomplete-static']" />
    </div>

    <div class="page-container-section">
      <h2>Box Layout</h2>

      <code-example title="Works with dense variant too!" :component="examples['autocomplete-box']" />
    </div>

    <div class="page-container-section">
      <h2>Custom Template</h2>

      <code-example title="With highlight text" :component="examples['autocomplete-template']" />
    </div>

    <div class="page-container-section">
      <h2>Async Options</h2>

      <code-example title="Spinner Loading" :component="examples['autocomplete-async']" />

      <api-item title="API - md-autocomplete">
        <p>This component do not have any extra option.</p>
      </api-item>
    </div>
  </page-container>
</template>

<script>
  import examples from 'docs-mixins/docsExample'

  export default {
    name: 'Autocomplete',
    mixins: [examples]
  }
</script>
