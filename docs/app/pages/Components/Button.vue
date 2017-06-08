<template>
  <page-container centered :title="$t('pages.button.title')">
    <code-example title="Buttons" label="HTML">
      <div slot="demo">
        <md-button>Button</md-button>
      </div>

      <div slot="code">
        &lt;md-button&gt;Button&lt;/md-button&gt;
      </div>
    </code-example>

    <api-item title="Button">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia eos adipisci quos inventore dolor rem explicabo enim sed, harum doloribus illo expedita itaque! Ad id obcaecati atque similique error ab!</p>

      <api-table :headings="api.flat.props.headings" :props="api.flat.props.props" slot="props" />
      <api-table :headings="api.flat.events.headings" :props="api.flat.events.props" slot="events" />
    </api-item>
  </page-container>
</template>

<style lang="scss" scoped>

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
