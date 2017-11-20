<example src="./examples/SelectionExample.vue" />

<template>
  <page-container centered :title="$t('pages.textSelection.title')">
    <div class="page-container-section">
      <p>Text selection is indicated by highlighting a contiguous segment of text. On mobile, a selection handle is added to both the beginning and end of a selection and the actions related to the text appear in a dropdown menu positioned immediately above, but not overlapping, the selection.</p>
      <p>The selection colors follow the current theme colors, using the accent hue, and you don't need to configure anything to make it work. Go ahead and select any text to see it's background color:</p>
    </div>

    <div class="page-container-section">
      <code-example title="Text Selection" :component="examples['selection-example']" />
    </div>
  </page-container>
</template>

<script>
  import examples from 'docs-mixins/docsExample'

  export default {
    name: 'TextSelection',
    mixins: [examples]
  }
</script>
