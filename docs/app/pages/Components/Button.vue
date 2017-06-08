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

    <api-table :title="'Button'" :headings="api.flat.headings" :props="api.flat.props">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia eos adipisci quos inventore dolor rem explicabo enim sed, harum doloribus illo expedita itaque! Ad id obcaecati atque similique error ab!</p>
    </api-table>
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
          headings: ['Name', 'Description', 'Default'],
          props: [
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
        }
      }
    })
  }
</script>
