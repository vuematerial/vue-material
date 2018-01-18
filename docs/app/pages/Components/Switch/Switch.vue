<example src="./examples/RegularSwitch.vue" />
<example src="./examples/SwitchHueColors.vue" />

<template>
  <page-container centered :title="$t('pages.switch.title')">
    <div class="page-container-section">
      <p>On/off switches toggle the state of a single settings option. The option that the switch controls, as well as the state it’s in, should be made clear from the corresponding inline label. Vue material switches can work with multiple <code>v-model</code> types: <code>String</code>, <code>Number</code>, <code>Boolean</code> and <code>Array</code>.</p>
    </div>

    <div class="page-container-section">
      <h2>Switch</h2>

      <code-example title="Switch" :component="examples['regular-switch']" />
      <code-example title="Hue Colors" :component="examples['switch-hue-colors']" />

      <api-item title="API - md-switch">
        <p>The following options can be applied to all switches:</p>

        <api-table :headings="props.headings" :props="props.props" slot="props" />
        <api-table :headings="events.headings" :props="events.props" slot="events" />
      </api-item>

      <note-block tip>All other <code>&lt;input type=&quot;checkbox&quot;&gt;</code> attributes, such as <strong>name</strong> and <strong>required</strong>, can be used on <code>md-switch</code>.</note-block>
    </div>
  </page-container>
</template>

<script>
  import examples from 'docs-mixins/docsExample'

  export default {
    name: 'DocSwitch',
    mixins: [examples],
    data: () => ({
      props: {
        headings: ['Name', 'Description', 'Default'],
        props: [
          {
            name: 'value',
            type: 'String|Number|Boolean',
            description: 'The value of the switch',
            defaults: 'on'
          },
          {
            name: 'v-model',
            type: 'String|Number|Boolean|Array',
            description: 'The model variable to bind the selection value. If array, it will toggle values inside of it. If no value is assigned, then it will use the same behaviour of a regular input[type="checkbox"].',
            defaults: 'null'
          },
          {
            name: 'id',
            type: 'String',
            description: 'The switch unique id.',
            defaults: 'a random string'
          }
        ]
      },
      events: {
        headings: ['Name', 'Description', 'Value'],
        props: [
          {
            name: 'change',
            description: 'Triggered after a value is selected',
            value: 'value'
          }
        ]
      }
    })
  }
</script>
