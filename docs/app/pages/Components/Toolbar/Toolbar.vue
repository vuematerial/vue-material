<example src="./examples/RegularToolbar.vue" />
<example src="./examples/ToolbarSizes.vue" />

<template>
  <page-container centered :title="$t('pages.content.title')">
    <div class="page-container-section">
      <p>Toolbar actions appear above the view affected by their actions. They may constrain their width to accommodate material passing over them.</p>
    </div>

    <div class="page-container-section">
      <h2>Toolbars</h2>

      <code-example title="Regular Toolbars" :component="examples['regular-toolbar']" />
    </div>

    <div class="page-container-section">
      <h2>Different Sizes</h2>

      <code-example title="Sizes" :component="examples['toolbar-sizes']" />
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
