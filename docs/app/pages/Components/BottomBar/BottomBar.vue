<example src="./examples/BarRouter.vue" />
<example src="./examples/Shift.vue" />
<example src="./examples/ChangingThemes.vue" />
<example src="./examples/BarCustomTemplate.vue" />

<template>
  <page-container centered :title="$t('pages.bottomBar.title')">
    <div class="page-container-section">
      <p>Bottom navigation bars make it easy to explore and switch between top-level views in a single tap. The bottom bar component is a high-level navigation system made for mobile devices with Vue Router support. Check it out:</p>
    </div>

    <div class="page-container-section">
      <h2>Seamless integration with Vue Router</h2>

      <p>The bottom bar is compatible with all Vue Router options. Just pass the values as parameters on <code>md-bottom-bar-item</code> component:</p>
      <code-example title="With default fixed style" :component="examples['bar-router']" />
      <note-block tip>Note: Try to change the url manually to see the component selecting the correct item.</note-block>
    </div>

    <div class="page-container-section">
      <h2>Shift effect</h2>

      <p>You can also use the awesome shift effect on your bars. It is great to keep the focus of the active item and you can show up to 6 items at once:</p>
      <code-example title="With Primary and Accent colors" :component="examples['shift']" />
    </div>

    <div class="page-container-section">
      <h2>Dynamic Themes</h2>

      <p>Sometimes each part of your application have it's own color theme, like in a social media app. You can change the theme dynamically to morph states creating an immersive experience:</p>
      <code-example title="Morphing States" :component="examples['changing-themes']" />
    </div>

    <div class="page-container-section">
      <h2>Custom Template</h2>

      <p>Maybe you want to show more informations inside a bottom bar item. With a simple and flexible default slot, you can make anything you want. Look at this unread notification example:</p>
      <note-block>If you pass anything inside the <code>&lt;md-bottom-bar-item&gt;</code>, the component will ignore the <code>md-label</code> and <code>md-icon</code>. Only use the content slot if you want to create a custom template.</note-block>
      <code-example title="Template Slot" :component="examples['bar-custom-template']" />

      <api-item title="API - md-bottom-bar">
        <p>All the following options can be used on any bottom bar:</p>
        <api-table :headings="bar.props.headings" :props="bar.props.props" slot="props" />
        <api-table :headings="bar.events.headings" :props="bar.events.props" slot="events" />
      </api-item>

      <api-item title="API - md-bottom-bar-item">
        <p>The following options can be used on any bottom bar item. All <a href="https://router.vuejs.org/en/api/router-link.html" target="_blank">options</a> of <code>router-link</code> can be simply used here:</p>
        <api-table :headings="item.props.headings" :props="item.props.props" slot="props" />
      </api-item>
    </div>
  </page-container>
</template>

<script>
  import examples from 'docs-mixins/docsExample'

  export default {
    name: 'DocBottomBar',
    mixins: [examples],
    data: () => ({
      bar: {
        props: {
          headings: ['Name', 'Description', 'Default'],
          props: [
            {
              name: 'md-type',
              type: 'String',
              description: 'Sets the display mode. See below the detailed description of each type.',
              defaults: 'fixed'
            },
            {
              offset: true,
              name: 'md-type="fixed"',
              type: 'String',
              description: 'Makes the bar with fixed items. Good for a small amount of items.',
              defaults: '-'
            },
            {
              offset: true,
              name: 'md-mode="shift"',
              type: 'String',
              description: 'Highlights the selected item and hide the label from the others. Good for a large amount of items. Up to 6.',
              defaults: '-'
            },
            {
              name: 'md-active-item',
              type: 'Boolean',
              description: 'Dynamically changes the selected item. Works passing the ID of a bottom bar item.',
              defaults: 'null'
            },
            {
              name: 'md-sync-route',
              type: 'Boolean',
              description: 'Watches the current route if there is a Vue Router instance running on the page. This will automatically change the selected element based on the current URL.',
              defaults: 'false'
            }
          ]
        },
        events: {
          headings: ['Name', 'Description', 'Value'],
          props: [
            {
              name: 'md-changed',
              description: 'Triggered when a selected item changes',
              value: 'Selected item ID'
            }
          ]
        }
      },
      item: {
        props: {
          headings: ['Name', 'Description', 'Default'],
          props: [
            {
              name: 'id',
              type: 'String',
              description: 'The item id. Used when changing the selected item dynamically',
              defaults: 'a random string'
            },
            {
              name: 'md-label',
              type: 'String',
              description: 'The bottom bar label. <code>Required</code>.',
              defaults: 'null'
            },
            {
              name: 'md-icon',
              type: 'String',
              description: 'The bottom bar icon. Can be an icon name from <a href="https://material.io/icons/" target="_blank">Material icons</a> or the path of a valid svg. <code>Required</code>.',
              defaults: 'null'
            },
            {
              name: 'md-disabled',
              type: 'Boolean',
              description: 'Disable the bottom bar preventing the click on it and all actions.',
              defaults: 'false'
            }
          ]
        }
      }
    })
  }
</script>
