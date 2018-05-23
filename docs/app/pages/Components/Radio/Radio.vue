<example src="./examples/RegularRadio.vue" />
<example src="./examples/RadioHueColors.vue" />

<template>
  <page-container centered :title="$t('pages.radio.title')">
    <div class="page-container-section">
      <p>Radio buttons allow the user to select one option from a set. Use radio buttons for exclusive selection if you think that the user needs to see all available options side-by-side. Vue material radio can work with multiple <code>v-model</code> types: <code>String</code>, <code>Number</code> and <code>Boolean</code>.</p>
    </div>

    <div class="page-container-section">
      <h2>Radio</h2>

      <code-example title="Radio" :component="examples['regular-radio']" />
      <code-example title="Hue Colors" :component="examples['radio-hue-colors']" />

      <api-item title="API - md-radio">
        <p>The following options can be applied to all radios:</p>

        <api-table :headings="props.headings" :props="props.props" slot="props" />
        <api-table :headings="events.headings" :props="events.props" slot="events" />

        <note-block tip>All other <code>&lt;input type=&quot;radio&quot;&gt;</code> attributes, such as <strong>name</strong> and <strong>required</strong>, can be used on <code>md-radio</code>.</note-block>
      </api-item>
    </div>
  </page-container>
</template>

<script>
  import examples from 'docs-mixins/docsExample'

  export default {
    name: 'DocRadio',
    mixins: [examples],
    data: () => ({
      props: {
        headings: ['Name', 'Description', 'Default'],
        props: [
          {
            name: 'value',
            type: 'String|Number|Boolean|Object',
            description: 'The value of the radio',
            defaults: 'on'
          },
          {
            name: 'v-model',
            type: 'String|Number|Boolean|Object',
            description: 'The model variable to bind the selection value. If no value is assigned, then it will use the same behaviour of a regular input[type="radio"].',
            defaults: 'null'
          },
          {
            name: 'id',
            type: 'String',
            description: 'The radio unique id.',
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
