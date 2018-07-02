<example src="./examples/RegularCheckboxes.vue" />
<example src="./examples/CheckboxHueColors.vue" />
<example src="./examples/TrueFalseValue.vue" />

<template>
  <page-container centered :title="$t('pages.checkbox.title')">
    <div class="page-container-section">
      <p>Checkboxes allow the user to select multiple options from a set. Vue material checkboxes can work with multiple <code>v-model</code> types: <code>String</code>, <code>Number</code>, <code>Boolean</code>, <code>Object</code> and <code>Array</code>.</p>
    </div>

    <div class="page-container-section">
      <h2>Checkbox</h2>

      <code-example title="Checkbox" :component="examples['regular-checkboxes']" />
      <code-example title="Hue Colors" :component="examples['checkbox-hue-colors']" />
      <code-example title="True / False Value" :component="examples['true-false-value']" />

      <api-item title="API - md-checkbox">
        <p>The following options can be applied to all checkboxes:</p>

        <api-table :headings="props.headings" :props="props.props" slot="props" />
        <api-table :headings="events.headings" :props="events.props" slot="events" />
      </api-item>

      <note-block tip>All other <code>&lt;input type=&quot;checkbox&quot;&gt;</code> attributes, such as <strong>name</strong> and <strong>required</strong>, can be used on <code>md-checkbox</code>.</note-block>
    </div>
  </page-container>
</template>

<script>
  import examples from 'docs-mixins/docsExample'

  export default {
    name: 'DocCheckbox',
    mixins: [examples],
    data: () => ({
      props: {
        headings: ['Name', 'Description', 'Default'],
        props: [
          {
            name: 'v-model',
            type: 'String|Number|Object|Boolean|Array',
            description: 'The model variable to bind the selection value. If it is an array, it will toggle values inside of it. If no value is assigned, then it will use the same behaviour of a regular input[type="checkbox"].',
            defaults: 'null'
          },
          {
            name: 'value',
            type: 'String|Number|Object|Boolean',
            description: 'The value of the checkbox',
            defaults: 'on'
          },
          {
            name: 'id',
            type: 'String',
            description: 'The checkbox unique id.',
            defaults: 'a random string'
          },
          {
            name: 'indeterminate',
            type: 'Boolean',
            description: 'Enables the indeterminate look of the checkbox.',
            defaults: 'false'
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
