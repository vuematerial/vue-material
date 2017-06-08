<template>
  <page-container centered :title="$t('pages.button.title')">
    <div class="page-container-section">
      <p>Buttons communicate the action that will occur when the user touches them. They can be <strong>Flat</strong>, <strong>Raised</strong> or <strong>Floating</strong>. The regular form accepts only text (by default) but with an special class the button can place an icon. They also can be smaller than the usual with a <strong>Dense</strong> class.</p>
    </div>

    <div class="page-container-section">
      <code-example title="Regular Button" label="HTML">
        <div slot="demo">
          <div>
            <small>Flat</small>
            <md-button>Default</md-button>
            <md-button class="md-primary">Primary</md-button>
            <md-button class="md-accent">Accent</md-button>
          </div>

          <div>
            <small>Raised</small>
            <md-button class="md-raised">Default</md-button>
            <md-button class="md-raised md-primary">Primary</md-button>
            <md-button class="md-raised md-accent">Accent</md-button>
          </div>
        </div>

        <div slot="code">
          &lt;md-button&gt;Button&lt;/md-button&gt;
        </div>
      </code-example>
    </div>

    <api-item title="API">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia eos adipisci quos inventore dolor rem explicabo enim sed, harum doloribus illo expedita itaque! Ad id obcaecati atque similique error ab!</p>

      <api-table :headings="api.flat.props.headings" :props="api.flat.props.props" slot="props" />
      <api-table :headings="api.flat.events.headings" :props="api.flat.events.props" slot="events" />
    </api-item>
  </page-container>
</template>

<style lang="scss" scoped>
  .code-example small {
    display: block;
  }
</style>

<script>
  export default {
    name: 'Button',
    data: () => ({
      api: {
        flat: {
          props: {
            headings: ['Name', 'Description', 'Default'],
            props: [
              {
                name: 'href',
                type: 'String',
                description: 'Create a anchor on the button. In this case the generated tag will be <a>.',
                defaults: 'null'
              },
              {
                name: 'disabled',
                type: 'Boolean',
                description: 'Disable the button and prevent his actions.',
                defaults: 'false'
              },
              {
                name: 'type',
                type: 'String',
                description: 'Apply a type to button - Don\'t affect links.',
                defaults: 'button'
              }
            ]
          },
          events: {
            headings: ['Name', 'Description', 'Value'],
            props: [
              {
                name: 'click',
                description: 'Triggered after a mouse click',
                value: '$event'
              }
            ]
          }
        }
      }
    })
  }
</script>
