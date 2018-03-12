<example src="./examples/DialogCustom.vue" />
<example src="./examples/DialogAlert.vue" />
<example src="./examples/DialogConfirm.vue" />
<example src="./examples/DialogPrompt.vue" />

<template>
  <page-container centered :title="$t('pages.dialog.title')">
    <div class="page-container-section">
      <p>Dialogs informs users about a specific task and may contain critical information, require decisions, or involve multiple tasks. The dialog component works with any plain html content. You can have tabs inside, all form components and many more.</p>
      <p>The component can be used with a custom markup, using the auxiliary components or with presets made by Vue Material. Those presets emulates the default Dialogs from Javascript, like confirm, alert and prompt.</p>

      <note-block tip>To allow scrolling in content of modal you need to wrap your content in <code>md-dialog-content</code> component.</note-block>

    </div>
    <div class="page-container-section">
      <h2>Dialog</h2>

      <p>The Dialog component can have any HTML markup inside. This allows you to create rich dialog content, like the details of a table row, for example:</p>
      <code-example title="Custom Dialog Markup" :component="examples['dialog-custom']" />

      <api-item title="API - md-dialog">
        <p>The following options can be applied to any dialog, even on presets:</p>

        <api-table :headings="dialog.props.headings" :props="dialog.props.props" slot="props" />
        <api-table :headings="dialog.events.headings" :props="dialog.events.props" slot="events" />
      </api-item>
    </div>

    <div class="page-container-section">
      <h2>Alerts</h2>

      <code-example title="Accepts custom HTML too!" :component="examples['dialog-alert']" />

      <api-item title="API - md-dialog-alert">
        <p>The following props can be applied to alerts:</p>

        <api-table :headings="alert.props.headings" :props="alert.props.props" slot="props" />
      </api-item>
    </div>

    <div class="page-container-section">
      <h2>Confirms</h2>

      <code-example title="Accepts custom HTML too!" :component="examples['dialog-confirm']" />

      <api-item title="API - md-dialog-confirm">
        <p>The following options can be applied to confirms:</p>

        <api-table :headings="confirm.props.headings" :props="confirm.props.props" slot="props" />
        <api-table :headings="confirm.events.headings" :props="confirm.events.props" slot="events" />
      </api-item>
    </div>

    <div class="page-container-section">
      <h2>Prompts</h2>

      <code-example title="Look at the character count!" :component="examples['dialog-prompt']" />

      <api-item title="API - md-dialog-prompt">
        <p>The following options can be applied to prompts:</p>

        <api-table :headings="prompt.props.headings" :props="prompt.props.props" slot="props" />
        <api-table :headings="prompt.events.headings" :props="prompt.events.props" slot="events" />
      </api-item>
    </div>
  </page-container>
</template>

<script>
  import examples from 'docs-mixins/docsExample'

  export default {
    name: 'DocDialog',
    mixins: [examples],
    data () {
      return {
        dialog: {
          props: {
            headings: ['Name', 'Description', 'Default'],
            props: [
              {
                name: 'md-active',
                type: 'Boolean',
                description: 'The prop to show/hide the dialog. Should be used with the <code>.sync</code> modifier.',
                defaults: 'false'
              },
              {
                name: 'md-backdrop',
                type: 'Boolean',
                description: 'Enable/disable the dialog overlay',
                defaults: 'true'
              },
              {
                name: 'md-close-on-esc',
                type: 'Boolean',
                description: 'By the default the dialog will close when pressing esc. To disabled that, just set this prop as false',
                defaults: 'true'
              },
              {
                name: 'md-click-outside-to-close',
                type: 'Boolean',
                description: 'By the default the dialog will close when clicking outsite. To disabled that, just set this prop as false',
                defaults: 'true'
              },
              {
                name: 'md-fullscreen',
                type: 'Boolean',
                description: 'The dialog will become fullscreen on mobile screens. This option can disable this behavior.',
                defaults: 'true'
              }
            ]
          },
          events: {
            headings: ['Name', 'Description', 'Value'],
            props: [
              {
                name: 'md-opened',
                description: 'Triggered when a dialog opens',
                value: 'null'
              },
              {
                name: 'md-closed',
                description: 'Triggered when a dialog closes',
                value: 'null'
              },
              {
                name: 'md-clicked-outside',
                description: 'Triggered when clicked outside',
                value: 'null'
              }
            ]
          }
        },
        alert: {
          props: {
            headings: ['Name', 'Description', 'Default'],
            props: [
              {
                name: 'md-title',
                type: 'String',
                description: 'The alert title. Optional.',
                defaults: 'null'
              },
              {
                name: 'md-content',
                type: 'String',
                description: 'The alert content. Accepts HTML. Optional.',
                defaults: 'null'
              },
              {
                name: 'md-confirm-text',
                type: 'String',
                description: 'The text inside confirm button',
                defaults: 'Ok'
              }
            ]
          }
        },
        confirm: {
          props: {
            headings: ['Name', 'Description', 'Default'],
            props: [
              {
                name: 'md-title',
                type: 'String',
                description: 'The alert title. Optional.',
                defaults: 'null'
              },
              {
                name: 'md-content',
                type: 'String',
                description: 'The alert content. Accepts HTML. Optional.',
                defaults: 'null'
              },
              {
                name: 'md-confirm-text',
                type: 'String',
                description: 'The text inside confirm button',
                defaults: 'Ok'
              },
              {
                name: 'md-cancel-text',
                type: 'String',
                description: 'The text inside cancel button',
                defaults: 'Cancel'
              }
            ]
          },
          events: {
            headings: ['Name', 'Description', 'Value'],
            props: [
              {
                name: 'md-confirm',
                description: 'Triggered when the confirm button receives a click',
                value: 'null'
              },
              {
                name: 'md-cancel',
                description: 'Triggered when the user dismiss the dialog',
                value: 'null'
              }
            ]
          }
        },
        prompt: {
          props: {
            headings: ['Name', 'Description', 'Default'],
            props: [
              {
                name: 'v-model',
                type: 'String|Number',
                description: 'The model variable to bind the input prompt value',
                defaults: 'null'
              },
              {
                name: 'md-input-name',
                type: 'String',
                description: 'The input name attribute',
                defaults: 'null'
              },
              {
                name: 'md-input-id',
                type: 'String',
                description: 'The input id attribute',
                defaults: 'null'
              },
              {
                name: 'md-input-max-length',
                type: 'Number',
                description: 'Enables the character count, based on the given value.',
                defaults: 'null'
              },
              {
                name: 'md-input-placeholder',
                type: 'Number',
                description: 'Sets a optional placeholder on input.',
                defaults: 'null'
              },
              {
                name: 'md-title',
                type: 'String',
                description: 'The alert title. Optional.',
                defaults: 'null'
              },
              {
                name: 'md-content',
                type: 'String',
                description: 'The alert content. Accepts HTML. Optional.',
                defaults: 'null'
              },
              {
                name: 'md-confirm-text',
                type: 'String',
                description: 'The text inside confirm button',
                defaults: 'Ok'
              },
              {
                name: 'md-cancel-text',
                type: 'String',
                description: 'The text inside cancel button',
                defaults: 'Cancel'
              }
            ]
          },
          events: {
            headings: ['Name', 'Description', 'Value'],
            props: [
              {
                name: 'md-confirm',
                description: 'Triggered when the confirm button receives a click',
                value: 'Input Value'
              },
              {
                name: 'md-cancel',
                description: 'Triggered when the user dismiss the dialog',
                value: 'null'
              }
            ]
          }
        }
      }
    }
  }
</script>
