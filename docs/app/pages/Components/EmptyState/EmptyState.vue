<example src="./examples/EmptyStateBasic.vue" />
<example src="./examples/EmptyStateRounded.vue" />
<example src="./examples/EmptyStateColors.vue" />

<template>
  <page-container centered :title="$t('pages.emptyState.title')">
    <div class="page-container-section">
      <p>A list that doesn’t contain any items, or a search that doesn’t display any results, are examples of empty states. Although these states aren’t typical, they should be designed to prevent user confusion.</p>
      <p>The most basic empty state displays a non-interactive image and a text tagline. For that you can use an icon, title and an empty state description. Vue Material already provide a nice design for your empty states, but you can always create your own design on top of <code>md-empty-state</code>.</p>
      <p>The empty state can be basic or rounded. The rounded variant is recommended only for desktop, as it size is fixed and do not work responsivelly.</p>
    </div>

    <div class="page-container-section">
      <h2>Empty State</h2>

      <p>The default empty state can be used on any screen size. You can combine designs with icon, label and description, as any of this are optional. It also accepts a default <code>&lt;slot&gt;</code> to pass any arbitrary content, like a button to give an option to continue the screen flow:</p>
      <code-example title="Default" :component="examples['empty-state-basic']" />

      <p>The rounded empty state gives a fresh look with a nice background color, to gain the attention of your user.</p>
      <code-example title="Rounded" :component="examples['empty-state-rounded']" />

      <p>You can also combine both layouts with primary or accent colors, to match your theme. Gorgeous!</p>
      <code-example title="Hue Colors" :component="examples['empty-state-colors']" />

      <api-item title="API - md-empty-state">
        <p>The following options can be applied to any empty state:</p>

        <api-table :headings="props.headings" :props="props.props" slot="props" />
      </api-item>
    </div>
  </page-container>
</template>

<script>
  import examples from 'docs-mixins/docsExample'

  export default {
    name: 'DocEmptyState',
    mixins: [examples],
    data: () => ({
      props: {
        headings: ['Name', 'Description', 'Default'],
        props: [
          {
            name: 'md-icon',
            type: 'String',
            description: 'The icon of the empty state. Optional.',
            defaults: 'null'
          },
          {
            name: 'md-label',
            type: 'String',
            description: 'The label of the empty state. Works as a title. Optional.',
            defaults: 'null'
          },
          {
            name: 'md-description',
            type: 'String',
            description: 'The description of the empty state. Optional.',
            defaults: 'null'
          },
          {
            name: 'md-rounded',
            type: 'Boolean',
            description: 'Make the empty state rounded, with a nice background color.',
            defaults: 'false'
          },
          {
            name: 'md-size',
            type: 'Number',
            description: 'The rounded width/height size. Only works with <code>md-rounded</code>.',
            defaults: '420'
          }
        ]
      }
    })
  }
</script>
