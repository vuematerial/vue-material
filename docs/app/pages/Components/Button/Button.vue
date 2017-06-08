<docs src="./examples/RegularButtons.vue" />
<docs src="./examples/FloatingButtons.vue" />

<template>
  <page-container centered :title="$t('pages.button.title')">
    <div class="page-container-section">
      <p>Buttons communicate the action that will occur when the user touches them. They can be <strong>Flat</strong>, <strong>Raised</strong> or <strong>Floating</strong>. The regular form accepts only text (by default) but with an special class the button can place an icon. They also can be smaller than the usual with a <strong>Dense</strong> class.</p>
    </div>

    <div class="page-container-section">
      <code-example title="Regular Button" label="HTML" :component="docs['regular-buttons']" />

      <api-item title="API">
        <p>The following options can be applied to all buttons, even the FAB ones:</p>

        <api-table :headings="api.regular.props.headings" :props="api.regular.props.props" slot="props" />
        <api-table :headings="api.regular.classes.headings" :props="api.regular.classes.props" slot="classes" />
        <api-table :headings="api.regular.events.headings" :props="api.regular.events.props" slot="events" />
      </api-item>
    </div>

    <div class="page-container-section">
      <code-example title="Floating Action Button" label="HTML" :component="docs['floating-buttons']" />
    </div>
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
        regular: {
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
          },
          classes: {
            headings: ['Name', 'Description'],
            props: [
              {
                name: 'md-raised',
                description: 'Create raised buttons with elevation'
              },
              {
                name: 'md-dense',
                description: 'A slight small variant of buttons. Useful to create a compact UI.'
              }
            ]
          }
        }
      }
    }),
    computed: {
      docs () {
        return this.$options.docs
      }
    }
  }
</script>
