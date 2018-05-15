<example src="./examples/BasicSelect.vue" />
<example src="./examples/DenseSelect.vue" />
<example src="./examples/DisabledSelect.vue" />
<example src="./examples/OptgroupSelect.vue" />
<example src="./examples/MultipleSelect.vue" />

<template>
  <page-container centered :title="$t('pages.select.title')">
    <div class="page-container-section">
      <p>A select picks between multiple options. The select displays the current state and a down arrow. They can have single selection or multiple.</p>
      <note-block tip>Select component mimics the HTML5 <code>&lt;select&gt;</code> attributes. This means that you can add attributes like <code>required</code> and <code>multiple</code> and it will react to them to give the best experience.</note-block>
    </div>

    <div class="page-container-section">
      <h2>Select</h2>

      <p>Vue Material selects works along with <code>md-option</code> component to provide the possible selection options. You should use it inside the <code>md-field</code> component The selection is will always react to changes on the <code>v-model</code> prop:</p>
      <code-example title="Single selection" :component="examples['basic-select']" />

      <p>Selects also work with multiple selection with a <code>v-model</code> as an <code>Array</code>. It is awesome:</p>
      <code-example title="Multiple selection" :component="examples['multiple-select']" />

      <p>There is also a dense layout to accommodate more items on the screen:</p>
      <code-example title="Dense" :component="examples['dense-select']" />

      <p>Selects can have groups to make easy to distinguish different data sets:</p>
      <code-example title="Groups" :component="examples['optgroup-select']" />

      <p>It is really easy to disable a select, option and even an optgroup. This will prevent them from being selected. Just pass a <code>disabled</code> prop to the desired component:</p>
      <code-example title="Disabled" :component="examples['disabled-select']" />

      <api-item title="API - md-select">
        <p>The following options can be applied to any select:</p>

        <api-table :headings="select.props.headings" :props="select.props.props" slot="props" />
        <api-table :headings="select.events.headings" :props="select.events.props" slot="events" />
      </api-item>

      <api-item title="API - md-option">
        <p>The following options can be applied to any option:</p>

        <api-table :headings="option.headings" :props="option.props" slot="props" />
      </api-item>

      <api-item title="API - md-optgroup">
        <p>The following options can be applied to any optgroup:</p>

        <api-table :headings="optgroup.headings" :props="optgroup.props" slot="props" />
      </api-item>
    </div>
  </page-container>
</template>

<script>
  import examples from 'docs-mixins/docsExample'

  export default {
    name: 'DocSelect',
    mixins: [examples],
    data: () => ({
      select: {
        props: {
          headings: ['Name', 'Description', 'Default'],
          props: [
            {
              name: 'v-model',
              type: 'String|Number|Boolean|Array',
              description: 'The model variable to bind the select value',
              defaults: 'null'
            },
            {
              name: 'placeholder',
              type: 'String',
              description: 'The select placeholder. Similar to HTML5 placeholder attribute.',
              defaults: 'null'
            },
            {
              name: 'required',
              type: 'String',
              description: 'The select required. Similar to HTML5 required attribute.',
              defaults: 'null'
            },
            {
              name: 'id',
              type: 'String',
              description: 'The select id. Similar to HTML5 id attribute.',
              defaults: 'null'
            },
            {
              name: 'name',
              type: 'String',
              description: 'The select name. Similar to HTML5 name attribute.',
              defaults: 'null'
            },
            {
              name: 'disabled',
              type: 'Boolean',
              description: 'Disable the select and prevent it selection.',
              defaults: 'false'
            },
            {
              name: 'multiple',
              type: 'Boolean',
              description: 'Create a multi selection with checkboxes inside. Only works with a <code>v-model</code> with an <code>Array</code>',
              defaults: 'false'
            },
            {
              name: 'md-dense',
              type: 'Boolean',
              description: 'Enable the dense layout',
              defaults: 'false'
            }
          ],
        },
        events: {
          headings: ['Name', 'Description', 'Value'],
          props: [
            {
              name: 'md-selected',
              description: 'Triggered when model changes.',
              value: 'Value of v-model'
            },
            {
              name: 'md-opened',
              description: 'Triggered when select is opened.',
              value: 'none'
            },
            {
              name: 'md-closed',
              description: 'Triggered when select is closed.',
              value: 'none'
            }
          ]
        }
      },
      option: {
        headings: ['Name', 'Description', 'Default'],
        props: [
          {
            name: 'value',
            type: 'String|Number|Boolean',
            description: 'The option value. This is used to bind to <code>md-select</code> model',
            defaults: 'null'
          },
          {
            name: 'disabled',
            type: 'Boolean',
            description: 'Disable the option and prevent it selection.',
            defaults: 'false'
          }
        ]
      },
      optgroup: {
        headings: ['Name', 'Description', 'Default'],
        props: [
          {
            name: 'label',
            type: 'String',
            description: 'The group label',
            defaults: 'null'
          },
          {
            name: 'disabled',
            type: 'Boolean',
            description: 'Disable the optgroup and prevent the selection of all options inside.',
            defaults: 'false'
          }
        ]
      }
    })
  }
</script>
