<example src="./examples/SingleChip.vue" />
<example src="./examples/Static.vue" />
<example src="./examples/Editable.vue" />
<example src="./examples/ChipCustomTemplate.vue" />
<example src="./examples/DuplicatedFeedback.vue" />
<example src="./examples/Format.vue" />
<example src="./examples/Themed.vue" />

<template>
  <page-container centered :title="$t('pages.chips.title')">
    <div class="page-container-section">
      <p>Chips represent complex entities in small blocks, such as a contact. They can be used as a way for a user to create arbitrary items, like categories or tags.</p>
    </div>

    <div class="page-container-section">
      <h2>Standalone Chip</h2>

      <p>A chip can be used as standalone, without any connection with another chip. It can be used like a badge or a category of an entity in your application. You can specify if your chip can be deletable and clickable:</p>
      <code-example title="Single" :component="examples['single-chip']" />

      <api-item title="API - md-chip">
        <p>All the following options can be applied to the md-chip component:</p>

        <api-table :headings="chip.props.headings" :props="chip.props.props" slot="props" />
        <api-table :headings="chip.events.headings" :props="chip.events.props" slot="events" />
      </api-item>
    </div>

    <div class="page-container-section">
      <h2>Editable model</h2>

      <p>Sometimes we need to edit the set of items on screen, for example, when editing tags, the user may need to remove/add tags. In this case you can use the editable chips, that is the default behaviour:</p>
      <code-example title="Editable" :component="examples['editable']" />
    </div>

    <div class="page-container-section">
      <h2>Readonly</h2>

      <p>Let's think in an entity that have tags. Sometimes you might need to show all of them in a single row, but not allow the user to edit them. You can achieve that using the <code>md-chips</code> component, with a static option:</p>
      <code-example title="Static" :component="examples['static']" />
    </div>

    <div class="page-container-section">
      <h2>Custom Template</h2>

      <p>Sometimes we need to show more information about a chip, so we want to have a custom HTML structure for the chip itself. To create that scenario we can use the template scope. In this case all you have to do is to create a slot with your custom template and you're good to go. Take a look at this example:</p>
      <code-example title="Scoped Slot" :component="examples['chip-custom-template']" />
    </div>

    <div class="page-container-section">
      <h2>Duplicated Chip</h2>

      <p>Chips would reject insertion if a chip is duplicated. You can customize feedback style of the duplicated chip:</p>
      <code-example title="Duplicated Feedback" :component="examples['duplicated-feedback']" />
    </div>

    <div class="page-container-section">
      <h2>Formatter</h2>

      <p>Sometimes you may need to format a chip value before adding it, and for this case you can use a custom formatter function. This function will receive the chip value and must return the formatted value.</p>
      <code-example title="Formatted chips" :component="examples['format']" />
    </div>

    <div class="page-container-section">
      <h2>Hue Colors</h2>

      <p>You can always use the hue modifiers in single chips:</p>
      <code-example title="Themed Chips" :component="examples['themed']" />

      <api-item title="API - md-chips">
        <p>All the following options can be applied to the md-chips component:</p>

        <api-table :headings="chips.props.headings" :props="chips.props.props" slot="props" />
        <api-table :headings="chips.events.headings" :props="chips.events.props" slot="events" />
      </api-item>
    </div>
  </page-container>
</template>

<script>
import examples from 'docs-mixins/docsExample'

export default {
  name: 'DocChips',
  mixins: [examples],
  data: () => ({
    chip: {
      props: {
        headings: ['Name', 'Description', 'Default'],
        props: [
          {
            name: 'md-clickable',
            type: 'Boolean',
            description: 'Enables/Disables the click action in the chip.',
            defaults: 'false'
          },
          {
            name: 'md-deletable',
            type: 'Boolean',
            description: 'Creates a chip that can hold a delete action. Useful when editing a chip series, like tags or categories.',
            defaults: 'false'
          },
          {
            name: 'md-disabled',
            type: 'Boolean',
            description: 'Enables/Disables the chip to be clickable of deletable.',
            defaults: 'false'
          }
        ]
      },
      events: {
        headings: ['Name', 'Description', 'Value'],
        props: [
          {
            name: 'md-delete',
            description: 'Triggered after a mouse click on delete icon. Only fired when md-deletable is true.',
            value: '$event'
          }
        ]
      }
    },
    chips: {
      props: {
        headings: ['Name', 'Description', 'Default'],
        props: [
          {
            name: 'v-model',
            type: 'Array',
            description: 'The content to be displayed as chips. Need to be a array of strings, unless you specify a custom template.',
            defaults: '[]'
          },
          {
            name: 'id',
            type: 'String',
            description: 'The input id. If null, it will be created automatically.',
            defaults: 'null'
          },
          {
            name: 'md-input-type',
            type: 'String',
            description: 'The input type. Cannot be \'file\'',
            defaults: 'text'
          },
          {
            name: 'md-placeholder',
            type: 'String',
            description: 'The input placeholder. It is useful to show to the user which type of data will be inserted.',
            defaults: 'null'
          },
          {
            name: 'md-static',
            type: 'Boolean',
            description: 'Creates a non-editable chips. Useful to show inside a details page.',
            defaults: 'false'
          },
          {
            name: 'md-limit',
            type: 'Number',
            description: 'Blocks the chips to create items above the limit.',
            defaults: 'false'
          },
          {
            name: 'md-check-duplicated',
            type: 'Boolean',
            description: 'Always check if there is a duplicated chip while changing the input value, or check it only on insertion',
            defaults: 'false'
          },
          {
            name: 'md-format',
            type: 'Function',
            description: [
              'Formatter before chip insertion. Effects to insertion and duplicated-checking.',
              'The Chips will pass the inputted value as a parameter of this function. This function returns the formatted result.'
            ].join('<br/>'),
            defaults: 'null'
          }
        ]
      },
      events: {
        headings: ['Name', 'Description', 'Value'],
        props: [
          {
            name: 'md-delete',
            description: 'Triggered after a mouse click on delete icon of a chip.',
            value: '<span>Two params:</span> <br> text, index'
          },
          {
            name: 'md-click',
            description: 'Triggered after a mouse click on a single chip.',
            value: '<span>Two params:</span> <br> text, index'
          },
          {
            name: 'md-insert',
            description: 'Triggered after a chip inserted.',
            value: 'The last inserted chip value'
          }
        ]
      }
    }
  })
}
</script>
