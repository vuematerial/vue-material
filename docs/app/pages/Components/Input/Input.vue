<example src="./examples/TextFields.vue" />
<example src="./examples/ErrorsMessages.vue" />
<example src="./examples/Counters.vue" />

<template>
  <page-container centered :title="$t('pages.input.title')">
    <div class="page-container-section">
      <p>Text fields allow users to input, edit, and select text, typically residing in forms but can appear in other places, like dialog boxes and search.</p>
    </div>

    <div class="page-container-section">
      <h2>Text Fields</h2>

      <code-example title="Input and Textarea" :component="examples['text-fields']" />
    </div>

    <div class="page-container-section">
      <h2>Errors and Messages</h2>

      <code-example title="Validation" :component="examples['errors-messages']" />
    </div>

    <div class="page-container-section">
      <h2>Character count</h2>

      <code-example title="Counter" :component="examples['counters']" />
    </div>
  </page-container>
</template>

<script>
  import examples from 'docs-mixins/docsExample'

  export default {
    name: 'Content',
    mixins: [examples],
    data: () => ({

    })
  }
</script>
