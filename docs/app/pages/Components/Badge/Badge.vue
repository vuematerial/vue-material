<example src="./examples/Buttons.vue" />
<example src="./examples/Lists.vue" />
<example src="./examples/Dense.vue" />

<template>
  <page-container centered :title="$t('pages.badge.title')">
    <div class="page-container-section">
      <p>Small status descriptors for UI elements.</p>
    </div>

    <div class="page-container-section">

      <p>Some components like <b>button, avatar</b> needs to be wrapped with <code>md-badge</code> component.</p>
      <code-example title="Example with buttons" :component="examples['buttons']" />

      <code-example title="Example with lists" :component="examples['lists']" />

      <code-example title="Dense" :component="examples['dense']" />

      <api-item title="API - md-badge">
        <p>The following option can be applied to any badge:</p>

        <api-table :headings="props.headings" :props="props.props" slot="props" />
        <api-table :headings="classes.headings" :props="classes.props" slot="classes" />
      </api-item>
    </div>
  </page-container>
</template>

<script>
  import examples from 'docs-mixins/docsExample'

  export default {
    name: 'DocBadge',
    mixins: [examples],
    data: () => ({
      classes: {
        headings: ['Name', 'Description'],
        props: [
          {
            name: 'md-square',
            description: 'Created square type badge.'
          }
        ]
      },
      props: {
        headings: ['Name', 'Description', 'Default'],
        props: [
          {
            name: 'md-content',
            type: 'String, Number',
            description: 'A content for badge',
            defaults: ' '
          },
          {
            name: 'md-position',
            type: 'String',
            description: 'Position of badge <code>top</code> or <code>bottom</code>',
            defaults: 'top'
          },
          {
            name: 'md-dense',
            type: 'Boolean',
            description: 'Enables the dense layout',
            defaults: 'false'
          },
        ]
      }
    })
  }
</script>
