<example src="./examples/RegularLists.vue" />

<template>
  <page-container centered :title="$t('pages.list.title')">
    <div class="page-container-section">
      <p>The content surfaces that comprise applications are referred to in this spec as material, or sheets of material. The content component is commonly used to resemble a piece of paper. It'll be useful to theme a arbitrary content.</p>
    </div>

    <div class="page-container-section">
      <h2>Lists</h2>

      <code-example title="Regular Lists" :component="examples['regular-lists']" />

      <api-item title="API - md-content">
        <p>This component do not have any extra option.</p>
      </api-item>
    </div>
  </page-container>
</template>

<script>
import examples from 'docs-mixins/docsExample'

export default {
  name: 'List',
  mixins: [examples],
  data: () => ({

  })
}
</script>
