<example src="./examples/Temporary.vue" />
<example src="./examples/PermanentFull.vue" />
<example src="./examples/PermanentClipped.vue" />
<example src="./examples/PermanentCard.vue" />
<example src="./examples/PersistentFull.vue" />
<example src="./examples/PersistentMini.vue" />

<template>
  <page-container centered :title="$t('pages.drawer.title')">
    <div class="page-container-section">
      <p>The navigation drawer slides in from the left or right and contains the navigation destinations for your app. It is commonly used with lists inside, although can accept any type of content.</p>
      <p>Drawers have 3 types: Temporary, Permanent and Persistent.</p>
      <p>They can be placed on the left or right, but you can also have both.</p>
      <note-block>In some examples of this demo we are using drawers along with the <router-link to="/components/app">App</router-link> component, but you can totally use it alone.</note-block>
    </div>

    <div class="page-container-section">
      <h2>Temporary</h2>

      <p>Temporary navigation drawers are closed by default and opens temporarily above all other content until a section is selected. This is highly recommended for mobile devices. If you do not pass any options to drawer this will be the default preset:</p>
      <code-example title="Also works on the right side" :component="examples['temporary']" />
    </div>

    <div class="page-container-section">
      <h2>Permanent</h2>

      <p>Permanent navigation drawers are always visible and pinned to the left edge, at the same elevation as the content or background. They cannot be closed and are recommended default for desktop.</p>
      <p>They come with three sub-types: Full, Clipped and Card:</p>
      <p>The full high type is the default recommendation for desktop for apps focused on information consumption that use a left-to-right hierarchy. So this is great for responsive applications that have global navigation links, as it will automatically hide on small screens:</p>

      <note-block tip>All permanent drawers will automatically become temporary on small screens.</note-block>

      <code-example title="Full Height" :component="examples['permanent-full']" />

      <p>The clipped option is also great for responsive applications, but are for apps focused on productivity that require balance across the screen:</p>
      <code-example title="Clipped" :component="examples['permanent-clipped']" />

      <p>The floating card is good to apps that require less hierarchy, like the ones who have a large background content, like maps and video. This is the one used on Google Maps for desktop:</p>
      <code-example title="Card" :component="examples['permanent-card']" />
    </div>

    <div class="page-container-section">
      <h2>Persistent</h2>

      <p>Persistent navigation drawers can toggle open or closed. The drawer sits on the same surface elevation as the content. It is closed by default and opens by selecting the menu icon, and stays open until closed by the user.</p>
      <p>They come with two sub-types: Full and Mini:</p>
      <p>The full type can be use either on desktop or mobile, although is recommended for larger screens:</p>
      <code-example title="Push page content" :component="examples['persistent-full']" />

      <p>The mini variant is recommended for apps sections that need quick selection access alongside content. They should be used only on desktop as bottom bar will be more effective for mobile devices. It is great to maximize the content area, without losing the navigation buttons:</p>
      <code-example title="Mini drawer always visible" :component="examples['persistent-mini']" />
    </div>

    <api-item title="API - md-drawer">
      <p>The following options can be applied to any drawer:</p>

      <api-table :headings="drawer.props.headings" :props="drawer.props.props" slot="props" />
      <api-table :headings="drawer.events.headings" :props="drawer.events.props" slot="events" />
    </api-item>

    <api-item title="API - Swipeable">
      <p>The following options can be applied to any <code>md-drawer</code> component that is using <code>md-swipeable</code> prop.</p>

      <api-table :headings="swipeable.props.headings" :props="swipeable.props.props" slot="props" />
    </api-item>
  </page-container>
</template>

<script>
  import examples from 'docs-mixins/docsExample'

  export default {
    name: 'DocDrawer',
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
      drawer: {
        props: {
          headings: ['Name', 'Description', 'Default'],
          props: [
            {
              name: 'md-active',
              type: 'Boolean',
              description: 'Option used to trigger the drawer visibility. Should be used with the <code>.sync</code> modifier.',
              defaults: 'false'
            },
            {
              name: 'md-swipeable',
              type: 'Boolean',
              description: 'Option used to enable touch support to be opened/closed by swipe. For more option see  API - Swipeable',
              defaults: 'false'
            },
            {
              name: 'md-fixed',
              type: 'Boolean',
              description: 'Applies <code>position: fixed</code> to drawer. Useful to be used as the main drawer of the application (like on this documentation).',
              defaults: 'false'
            },
            {
              name: 'md-right',
              type: 'Boolean',
              description: 'This is used to place the drawer on the right of the screen.',
              defaults: 'false'
            },
            {
              name: 'md-permanent',
              type: 'String',
              description: 'Sets if the drawer will be permanent on the screen.',
              defaults: 'null'
            },
            {
              offset: true,
              name: 'md-permanent="full"',
              type: 'String',
              description: 'Make the drawer with full height, side by side with the toolbar and the content.',
              defaults: '-'
            },
            {
              offset: true,
              name: 'md-permanent="clipped"',
              type: 'String',
              description: 'Make the drawer clipped, bellow the toolbar and side by side with the content.',
              defaults: '-'
            },
            {
              offset: true,
              name: 'md-permanent="card"',
              type: 'String',
              description: 'Make the drawer floating within a card.',
              defaults: '-'
            },
            {
              name: 'md-persistent',
              type: 'String',
              description: 'Sets if the drawer will be persistent on the screen, always pusing the content when opened.',
              defaults: 'null'
            },
            {
              offset: true,
              name: 'md-persistent="full"',
              type: 'String',
              description: 'Make the drawer with full height. This will make the drawer hidden when closed and and pusing the content when opened.',
              defaults: '-'
            },
            {
              offset: true,
              name: 'md-persistent="mini"',
              type: 'String',
              description: 'Make the drawer with full height. This will make the drawer hidden when closed and and pusing the content when opened.',
              defaults: '-'
            },
          ]
        },
        events: {
          headings: ['Name', 'Description', 'Value'],
          props: [
            {
              name: 'md-opened',
              description: 'Triggered when a drawer opens',
              value: 'null'
            },
            {
              name: 'md-closed',
              description: 'Triggered when a drawer closes',
              value: 'null'
            }
          ]
        }
      }
    })
  }
</script>
