<example src="./examples/RegularButtons.vue" />
<example src="./examples/IconButtons.vue" />
<example src="./examples/FloatingButtons.vue" />
<example src="./examples/ButtonVsLink.vue" />
<example src="./examples/VueRouter.vue" />

<template>
  <page-container centered :title="$t('pages.button.title')">
    <div class="page-container-section">
      <p>Buttons communicate the action that will occur when the user touches them. They can be <strong>Flat</strong>, <strong>Raised</strong> or <strong>Floating</strong>. Flat and raised buttons accepts only text (by default) but with an special class the button can place an icon. Floating Buttons only accept icons. They also can be smaller than the usual with a <strong>Dense</strong> class.</p>
    </div>

    <div class="page-container-section">
      <h2>Flat and Raised</h2>
      <p>The flat button is the default one. No classes or properties needs to be attached to it to make it flat. The raised button can be achieved with the <code>md-raised</code> class.</p>

      <code-example title="Regular Button" :component="examples['regular-buttons']" />

      <api-item title="API">
        <p>The following options can be applied to all buttons, even the FAB ones:</p>

        <api-table :headings="api.regular.props.headings" :props="api.regular.props.props" slot="props" />
        <api-table :headings="api.regular.classes.headings" :props="api.regular.classes.props" slot="classes" />
        <api-table :headings="api.regular.events.headings" :props="api.regular.events.props" slot="events" />
      </api-item>
    </div>

    <div class="page-container-section">
      <h2>Icons</h2>
      <p>To show icons inside buttons you only need to add a class and you're good to go. And you can also combine it with the raised class.</p>

      <code-example title="Buttons with Icons" :component="examples['icon-buttons']" />

      <api-item title="API">
        <p>The following option will turn a button in a icon button:</p>

        <api-table :headings="api.icons.classes.headings" :props="api.icons.classes.props" slot="classes" />
      </api-item>
    </div>

    <div class="page-container-section">
      <h2>Link Vs Buttons</h2>
      <p>All buttons by default will output a <code>button</code> tag. If you want to change it to a <code>a</code> tag, just pass a href to it:</p>

      <code-example title="Links and Buttons" :component="examples['button-vs-link']" />
    </div>

    <div class="page-container-section">
      <h2>Vue Router</h2>
      <p><code>md-button</code> also supports Vue Router by default. All <a href="https://router.vuejs.org/en/api/router-link.html" target="_blank">options</a> of <code>router-link</code> could be simply used here.</p>

      <code-example title="router-link" :component="examples['vue-router']" />
    </div>
  </page-container>
</template>

<script>
  import examples from 'docs-mixins/docsExample'

  export default {
    name: 'Button',
    mixins: [examples],
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
        },
        icons: {
          classes: {
            headings: ['Name', 'Description'],
            props: [
              {
                name: 'md-icon-button',
                description: 'Enable the rounded-shape icon button'
              }
            ]
          }
        }
      }
    })
  }
</script>
