<example src="./examples/SingleLine.vue" />
<example src="./examples/DoubleLine.vue" />
<example src="./examples/TripleLine.vue" />

<template>
  <page-container centered :title="$t('pages.list.title')">
    <div class="page-container-section">
      <p>The content surfaces that comprise applications are referred to in this spec as material, or sheets of material. The content component is commonly used to resemble a piece of paper. It'll be useful to theme a arbitrary content.</p>
    </div>

    <div class="page-container-section">
      <h2>Regular lists</h2>

      <code-example title="Single Line" :component="examples['single-line']" />
      <code-example title="Double Line" :component="examples['double-line']" />
      <code-example title="Triple Line" :component="examples['triple-line']" />

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
