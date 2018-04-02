<example src="./examples/PaperContent.vue" />

<template>
  <page-container centered :title="$t('pages.content.title')">
    <div class="page-container-section">
      <p>The Content surfaces that comprise applications are referred to in this spec as material, or sheets of material. The content component is commonly used to resemble a piece of paper. It'll be useful to theme an arbitrary content.</p>
    </div>

    <div class="page-container-section">
      <h2>Content</h2>

      <code-example title="Paper Content" :component="examples['paper-content']" />

      <api-item title="API - md-content">
        <p>The following option can be applied to md-content component:</p>

        <api-table :headings="props.headings" :props="props.props" slot="props" />
      </api-item>
    </div>
  </page-container>
</template>

<script>
import examples from 'docs-mixins/docsExample'

export default {
  name: 'DocContent',
  mixins: [examples],
  data: () => ({
    props: {
      headings: ['Name', 'Description', 'Default'],
      props: [
        {
          name: 'md-tag',
          type: 'String',
          description: 'The output tag. Useful when you want to create a section instead of div, for example.',
          defaults: 'div'
        }
      ]
    }
  })
}
</script>
