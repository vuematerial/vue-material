<example src="./examples/Direction.vue" />
<example src="./examples/Delay.vue" />
<example src="./examples/Dynamically.vue" />

<template>
  <page-container centered :title="$t('pages.tooltip.title')">
    <div class="page-container-section">
      <p>Tooltips identify an element when they are activated. They may contain brief helper text about its function. For example, they may contain text information about actionable icons.</p>
      <p>You can setup a tooltip using optional direction and delay:</p>
    </div>

    <div class="page-container-section">
      <h2>Direction</h2>

      <p>You can set the tooltip direction using the four available values - <code>top</code>, <code>right</code>, <code>bottom</code> and <code>left</code>:</p>
      <code-example title="Text position" :component="examples['direction']" />
    </div>

    <div class="page-container-section">
      <h2>Delay</h2>
      <p>Sometimes you don't want to pop the tooltip right away. To achieve that you can use a custom delay in milliseconds to postpone the action:</p>
      <code-example title="Delay" :component="examples['delay']" />
    </div>

    <div class="page-container-section">
      <h2>Dynamically show a tooltip</h2>

      <p>In some cases we may want to trigger the tooltip manually, to make sure that your user will understand and action. You can do it:</p>
      <code-example title="Trigger" :component="examples['dynamically']" />

      <api-item title="API - md-tooltip">
        <p>The following options can be applied to all tooltips:</p>

        <api-table :headings="props.headings" :props="props.props" slot="props" />
      </api-item>
    </div>
  </page-container>
</template>

<script>
  import examples from 'docs-mixins/docsExample'

  export default {
    name: 'DocTooltip',
    mixins: [examples],
    data: () => ({
      props: {
        headings: ['Name', 'Description', 'Default'],
        props: [
          {
            name: 'md-direction',
            type: 'String',
            description: 'Specifies where the tooltip will appear based on the parent element.',
            defaults: 'bottom'
          },
          {
            offset: true,
            name: 'md-direction="top"',
            type: 'String',
            description: 'Shows the tooltip above the parent element.',
            defaults: '-'
          },
          {
            offset: true,
            name: 'md-direction="right"',
            type: 'String',
            description: 'Shows the tooltip after the parent element.',
            defaults: '-'
          },
          {
            offset: true,
            name: 'md-direction="bottom"',
            type: 'String',
            description: 'Shows the tooltip below the parent element.',
            defaults: '-'
          },
          {
            offset: true,
            name: 'md-direction="left"',
            type: 'String',
            description: 'Shows the tooltip before the parent element.',
            defaults: '-'
          },
          {
            name: 'md-delay',
            type: 'Number',
            description: 'Postpones the exhibition of a tooltip. In milliseconds.',
            defaults: '0'
          },
          {
            name: 'md-active',
            type: 'Boolean',
            description: 'Used to trigger the visibility of a tooltip. Should be used with the <code>.sync</code> modifier.',
            defaults: 'false'
          }
        ]
      }
    })
  }
</script>
