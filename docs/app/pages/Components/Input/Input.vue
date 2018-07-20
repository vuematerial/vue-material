<example src="./examples/TextFields.vue" />
<example src="./examples/ErrorsMessages.vue" />
<example src="./examples/Counters.vue" />
<example src="./examples/FieldIcons.vue" />
<example src="./examples/InlineActions.vue" />
<example src="./examples/Fixes.vue" />

<template>
  <page-container centered :title="$t('pages.input.title')">
    <div class="page-container-section">
      <p>Text fields allow users to input, edit and select text typically inside forms. But they can appear in other places as well like dialog boxes and search.</p>
      <p>Vue Material fields work with a <code>md-field</code> wrapped around an input component, that can be <code>md-input</code>, <code>md-textarea</code> or even a <code>md-select</code>.</p>
      <note-block tip><code>md-select</code> has its own <router-link to="/components/select">documentation page</router-link>, dedicated to show better examples on how to use it.</note-block>
    </div>

    <div class="page-container-section">
      <h2>Text Fields</h2>

      <p>Fields mimic the HTML5 attributes to keep the same compatibility with native inputs, but has extra options. This allows Vue Material to accordingly setup the various <code>md-field</code> with its corresponding input options.</p>
      <p>You will be able to set the same properties of a regular <code>input</code> element on <code>md-input</code>. This is also valid for <code>textarea</code> and <code>select</code>. Take a look:</p>
      <code-example title="Input and Textarea" :component="examples['text-fields']" />
    </div>

    <div class="page-container-section">
      <h2>Errors and Messages</h2>

      <p>Vue Material has validation states to show error messages. You can use it along with other 3rd party Vue validation libraries, like Vuelidate or Vee-Validate:</p>
      <code-example title="Validation" :component="examples['errors-messages']" />
    </div>

    <div class="page-container-section">
      <h2>Character count</h2>

      <p>You can use character counters where you need to limit the user input, like on Twitter's 280 character tweet:</p>
      <code-example title="Counter" :component="examples['counters']" />
    </div>

    <div class="page-container-section">
      <h2>Icons</h2>

      <p>Sometimes we may want to differentiate our inputs based on it content value:</p>
      <code-example title="Outside and inline icons" :component="examples['field-icons']" />
    </div>

    <div class="page-container-section">
      <h2>Inline Actions</h2>

      <p>Fields can have a clearable feature to make it easier for users to clear the value. To use passwords better we can show a toggle button to reveal the password. This is really useful for mobile applications:</p>
      <code-example title="Clear and password" :component="examples['inline-actions']" />
    </div>

    <div class="page-container-section">
      <h2>Prefixes & suffixes</h2>

      <p>Prefixes and suffixes can be used to clarify units or to add input in advance. Prefixes are left justified in the text field whereas suffixes are right justified. Text fields can have both prefixes and suffixes.</p>
      <code-example title="Prefixes & suffixes" :component="examples['fixes']" />
    </div>

    <div class="page-container-section">
      <api-item title="API - md-field">
        <p>The following options can be applied to any field:</p>

        <api-table :headings="field.props.headings" :props="field.props.props" slot="props" />
        <api-table :headings="field.events.headings" :props="field.events.props" slot="events" />
      </api-item>

      <api-item title="API - md-input">
        <p>The following options can be applied to any input:</p>

        <api-table :headings="input.headings" :props="input.props" slot="props" />
      </api-item>

      <api-item title="API - md-textarea">
        <p>The following options can be applied to any textarea:</p>

        <api-table :headings="textarea.headings" :props="textarea.props" slot="props" />
      </api-item>

      <note-block tip>Any <code>input</code> or <code>textarea</code> attributes can be used on <code>md-input</code>/<code>md-textarea</code> respectively.</note-block>
    </div>
  </page-container>
</template>

<script>
  import examples from 'docs-mixins/docsExample'

  export default {
    name: 'DocInput',
    mixins: [examples],
    data: () => ({
      field: {
        props:{
          headings: ['Name', 'Description', 'Default'],
          props: [
            {
              name: 'md-inline',
              type: 'Boolean',
              description: 'Make the label inline. This means that the label will disappear when the input receives a focus.',
              defaults: 'false'
            },
            {
              name: 'md-counter',
              type: 'Boolean',
              description: 'Enable the character counter. Only works with fields that have a <code>md-input</code> or <code>md-textarea</code> with a <code>maxlength</code> or <code>md-counter</code> attributes.',
              defaults: 'false'
            },
            {
              name: 'md-clearable',
              type: 'Boolean',
              description: 'Add a clear button on the right of the input.',
              defaults: 'false'
            },
            {
              name: 'md-toggle-password',
              type: 'Boolean',
              description: 'Add a toggle button on the right of the input to reveal/hide the password. Only works with fields that have a <code>md-input</code> with type password.',
              defaults: 'false'
            }
          ],
        },
        events: {
          headings: ['Name', 'Description', 'Value'],
          props: [
            {
              name: 'md-clear',
              description: 'Triggered after a mouse click on clear icon. Only fired when md-clearable is true.',
              value: '-'
            }
          ]
        }
      },
      input: {
        headings: ['Name', 'Description', 'Default'],
        props: [
          {
            name: 'v-model',
            type: 'String|Number|Boolean|Array',
            description: 'The model variable to bind the input value',
            defaults: 'null'
          },
          {
            name: 'type',
            type: 'String',
            description: 'The input type. Similar to HTML5 type attribute.',
            defaults: 'text'
          },
          {
            name: 'placeholder',
            type: 'String',
            description: 'The input placeholder. Similar to HTML5 placeholder attribute.',
            defaults: 'null'
          },
          {
            name: 'required',
            type: 'Boolean',
            description: 'The input required. Similar to HTML5 required attribute.',
            defaults: 'false'
          },
          {
            name: 'id',
            type: 'String',
            description: 'The input id. Similar to HTML5 id attribute.',
            defaults: 'a random string'
          },
          {
            name: 'name',
            type: 'String',
            description: 'The input name. Similar to HTML5 name attribute.',
            defaults: 'null'
          },
          {
            name: 'disabled',
            type: 'Boolean',
            description: 'Disable the input and prevent it interactions.',
            defaults: 'false'
          },
          {
            name: 'maxlength',
            type: 'Number',
            description: 'Enable the counter for the field and set a maxlength',
            defaults: 'null'
          },
          {
            name: 'md-counter',
            type: 'Number|Boolean',
            description: 'Enable the counter for the field. This is useful when you want only a counter without setting a maxlength. After setting a maxlength, in case if you do not want to display the counter, set this prop to false',
            defaults: 'true'
          }
        ]
      },
      textarea: {
        headings: ['Name', 'Description', 'Default'],
        props: [
          {
            name: 'v-model',
            type: 'String|Number|Boolean|Array',
            description: 'The model variable to bind the textarea value',
            defaults: 'null'
          },
          {
            name: 'placeholder',
            type: 'String',
            description: 'The textarea placeholder. Similar to HTML5 placeholder attribute.',
            defaults: 'null'
          },
          {
            name: 'required',
            type: 'Boolean',
            description: 'The input required. Similar to HTML5 required attribute.',
            defaults: 'false'
          },
          {
            name: 'id',
            type: 'String',
            description: 'The textarea id. Similar to HTML5 id attribute.',
            defaults: 'a random string'
          },
          {
            name: 'name',
            type: 'String',
            description: 'The textarea name. Similar to HTML5 name attribute.',
            defaults: 'null'
          },
          {
            name: 'disabled',
            type: 'Boolean',
            description: 'Disable the textarea and prevent it interactions.',
            defaults: 'false'
          },
          {
            name: 'maxlength',
            type: 'Number',
            description: 'Enable the counter for the field and set a maxlength',
            defaults: 'null'
          },
          {
            name: 'md-counter',
            type: 'Number',
            description: 'Enable the counter for the field. This is useful when you want only a counter without set a maxlength',
            defaults: 'null'
          },
          {
            name: 'md-autogrow',
            type: 'Boolean',
            description: 'Enable the textarea autogrow',
            defaults: 'false'
          }
        ]
      }
    })
  }
</script>
