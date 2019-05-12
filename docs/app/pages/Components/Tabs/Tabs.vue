<example src="./examples/TabRouter.vue" />
<example src="./examples/TabAlignments.vue" />
<example src="./examples/TabContent.vue" />
<example src="./examples/TabIcons.vue" />
<example src="./examples/TabCustomTemplate.vue" />

<template>
  <page-container centered :title="$t('pages.tabs.title')">
    <div class="page-container-section">
      <p>Tabs make it easy to explore, switch between different views and enable content organization at a high level, such as different data sets or functional aspects of an app.</p>
      <p>Tabs are really powerfull and have deep integration with Vue Core features and router.</p>
      <note-block>More features for tabs will be come in the next weeks, like pagination scroll and touch events. :)</note-block>
    </div>

    <div class="page-container-section">
      <h2>Navigational tabs</h2>

      <p>Sometimes you may need a tab to be the main navigational element of your application and you can do this. Tabs integrate with Vue Router by default and will be able to use single tab just like a regular button or link, by using the <code>router-link</code> props. The tabs will sync with the page URL and will produce effects when transitioning between tabs. <strong>AUTOMATIC</strong>!</p>
      <code-example title="Seamless integration with Vue Router" :component="examples['tab-router']" />
    </div>

    <div class="page-container-section">
      <h2>Tab with inner content</h2>

      <p>In the previous example, the tabs worked just like navigation buttons, without content. With that you would need to render the content by yourself. Although this is not a hard thing, because you can use Vue Router, you can pass arbitrary content to your tabs. And it can also work syncing with router:</p>
      <code-example title="Content syncing with Router" :component="examples['tab-content']" />
    </div>

    <div class="page-container-section">
      <h2>Alignments</h2>

      <p>Tabs have four types of alignments for the navigation buttons: Left, Center, Right and Fixed. You can use them with any tabs:</p>
      <code-example title="With different hue colors" :component="examples['tab-alignments']" />
    </div>

    <div class="page-container-section">
      <h2>Icons</h2>

      <p>Tabs accept icons, to make it easier for your user to assimilate the contents of a tab:</p>
      <code-example title="With svg support" :component="examples['tab-icons']" />
    </div>

    <div class="page-container-section">
      <h2>Custom Template</h2>

      <p>You can use a custom template for the navigation buttons. This will be applied to all navigation buttons and allows you to make updates on your tab, like this great example of unread/new content: Simple, uh?</p>
      <code-example title="Template Slot" :component="examples['tab-custom-template']" />

      <api-item title="API - md-tabs">
        <p>The following options can be applied to any tabs:</p>

        <api-table :headings="tabs.props.headings" :props="tabs.props.props" slot="props" />
        <api-table :headings="tabs.slots.headings" :props="tabs.slots.props" slot="scoped-slots" />
        <api-table :headings="tabs.events.headings" :props="tabs.events.props" slot="events" />
      </api-item>

      <api-item title="API - md-tab">
        <p>The following options can be applied to any tab.  All <a href="https://router.vuejs.org/en/api/router-link.html" target="_blank">options</a> of <code>router-link</code> can be simply used here:</p>

        <api-table :headings="tab.headings" :props="tab.props" slot="props" />
      </api-item>

      <api-item title="API - Swipeable">
        <p>The following options can be applied to any <code>md-tabs</code> component that is using <code>md-swipeable</code> prop.</p>

        <api-table :headings="swipeable.props.headings" :props="swipeable.props.props" slot="props" />
      </api-item>
    </div>
  </page-container>
</template>

<script>
  import examples from 'docs-mixins/docsExample'

  export default {
    name: 'DocTabs',
    mixins: [examples],
    data: () => ({
      swipeable: {
        props: {
          headings: ['Name', 'Description', 'Default'],
          props: [
            {
              name: 'md-swipe-threshold',
              type: 'Number',
              description: 'The minimal distance traveled to be considered swipe.',
              defaults: '50'
            },
            {
              name: 'md-swipe-restraint',
              type: 'Number',
              description: 'The maximum distance allowed at the same time in perpendicular direction.',
              defaults: '100'
            },
            {
              name: 'md-swipe-time',
              type: 'Number',
              description: 'The maximum time allowed to detect swipe.',
              defaults: '400'
            },
          ]
        }
      },
      tabs: {
        props: {
          headings: ['Name', 'Description', 'Default'],
          props: [
            {
              name: 'md-active-tab',
              type: 'String|Number',
              description: 'Set the current selected tab. Works by providing the id of the desired <code>md-tab</code>.',
              defaults: 'null'
            },
            {
              name: 'md-swipeable',
              type: 'Boolean',
              description: 'Option used to enable touch support to move between tabs by swipe. For more option see  API - Swipeable',
              defaults: 'false'
            },
            {
              name: 'md-sync-route',
              type: 'Boolean',
              description: 'Syncs the table selection with the current route, matching by the single tab <code>to</code> prop.',
              defaults: 'false'
            },
            {
              name: 'md-alignment',
              type: 'String',
              description: 'Sets the tab navigation alignment. See below the detailed description of each layout.',
              defaults: 'left'
            },
            {
              offset: true,
              name: 'md-alignment="left"',
              type: 'String',
              description: 'Align the tabs navigation buttons to left',
              defaults: '-'
            },
            {
              offset: true,
              name: 'md-alignment="center"',
              type: 'String',
              description: 'Align the tabs navigation buttons on center',
              defaults: '-'
            },
            {
              offset: true,
              name: 'md-alignment="right"',
              type: 'String',
              description: 'Align the tabs navigation buttons on right',
              defaults: '-'
            },
            {
              offset: true,
              name: 'md-alignment="fixed"',
              type: 'String',
              description: 'Make the navigation buttons to fill all the available space.',
              defaults: '-'
            },
            {
              name: 'md-dynamic-height',
              type: 'Boolean',
              description: 'Apply a dynamic transition to the table height. Be careful with this option to not hurt the performance of your page.',
              defaults: 'false'
            },
            {
              name: 'md-elevation',
              type: 'Number',
              description: 'Add an elevation to tab navigation element.',
              defaults: '0'
            }
          ]
        },
        events: {
          headings: ['Name', 'Description', 'Value'],
          props: [
            {
              name: 'md-changed',
              description: 'Triggered when the active tab changes',
              value: 'Tab ID'
            }
          ]
        },
        slots: {
          headings: ['Name', 'Description', 'Values'],
          props: [
            {
              name: 'md-tab',
              description: 'Creates a custom tab button template',
              options: [
                {
                  name: 'tab',
                  description: 'The options that were passed through <code>md-template-data</code> inside each <code>md-tab</code>'
                }
              ],
              usage: '<template slot="md-tab" slot-scope="{ tab }"> ... </template>'
            }
          ]
        },
      },
      tab: {
        headings: ['Name', 'Description', 'Default'],
        props: [
          {
            name: 'id',
            type: 'String',
            description: 'The tab id. Used when changing the active tab dynamically',
            defaults: 'a random string'
          },
          {
            name: 'href',
            type: 'String',
            description: 'The tab href link. Useful when you don\'t have Vue Router on your app, but you still want to change the current URL based on the tab.',
            defaults: 'null'
          },
          {
            name: 'md-label',
            type: 'String',
            description: 'The tab label',
            defaults: 'null'
          },
          {
            name: 'md-icon',
            type: 'String',
            description: 'The tab icon. Accepts an string or a asset URL. The tab will know how to handle the icon based on this.',
            defaults: 'null'
          },
          {
            name: 'md-disabled',
            type: 'Boolean',
            description: 'Disable/enable a tab',
            defaults: 'null'
          },
          {
            name: 'md-template-data',
            type: 'Object',
            description: 'The data to be passed to the respective tab button, when using custom template.',
            defaults: 'null'
          }
        ]
      }
    })
  }
</script>
