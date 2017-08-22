<example src="./examples/RegularRadio.vue" />

<template>
  <page-container centered :title="$t('pages.radio.title')">
    <div class="page-container-section">
      <p>Radio buttons allow the user to select one option from a set. Use radio buttons for exclusive selection if you think that the user needs to see all available options side-by-side.</p>
    </div>

    <div class="page-container-section">
      <h2>Regular Radio</h2>

      <code-example title="Radio" :component="examples['regular-radio']" />
    </div>
  </page-container>
</template>

<script>
import examples from 'docs-mixins/docsExample'

export default {
  name: 'Radio',
  mixins: [examples]
}
</script>
