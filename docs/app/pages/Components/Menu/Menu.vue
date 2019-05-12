<example src="./examples/Directions.vue" />
<example src="./examples/Sizes.vue" />
<example src="./examples/MenuAlignments.vue" />
<example src="./examples/AutoClose.vue" />
<example src="./examples/MultipleContent.vue" />

<template>
  <page-container centered :title="$t('pages.menu.title')">
    <div class="page-container-section">
      <p>Menus appear upon interaction with a button, action, or other control. They usually display a list of choices, with one choice per line, but can also show a rich content.</p>
      <p>The <code>md-menu</code> component consists of a parent <code>md-menu</code>, a trigger <code>md-menu-trigger</code>, a content holder <code>md-menu-content</code> and optional items <code>md-menu-item</code>.</p>
    </div>

    <div class="page-container-section">
      <h2>Directions</h2>

      <p>The position of the menu content is calculated based on the contraints of the trigger element. Based on this you can set a position using X and Y axis.</p>
      <p>You can combine <code>top</code>/<code>bottom</code> with <code>start</code>/<code>end</code>:</p>
      <code-example title="Start and End" :component="examples['directions']" />
    </div>

    <div class="page-container-section">
      <h2>Alignments</h2>

      <p>Sometimes the default position is not what we want. Maybe we need to show a menu in another location, and to achieve that you can use trigger alignment or custom offsets:</p>
      <code-example title="Trigger alignment and Offsets" :component="examples['menu-alignments']" />
    </div>

    <div class="page-container-section">
      <h2>Sizes</h2>

      <p><code>md-menu</code> has 4 different sizes and an auto mode:</p>
      <code-example title="5 possible sizes" :component="examples['sizes']" />
      <note-block>The max-width of a menu is 280px.</note-block>
    </div>

    <div class="page-container-section">
      <h2>AutoClose</h2>

      <p><code>md-menu</code> can be auto closed on click or select:</p>
      <code-example title="Auto close menu on events" :component="examples['auto-close']" />
    </div>

    <div class="page-container-section">
      <h2>Rich Content and Icon Alignment</h2>

      <p>Sometimes you may need to toggle your menu dynamically. You can also show arbitrary content inside a <code>md-menu-content</code>, like this card example:</p>
      <code-example title="Open a menu programatically" :component="examples['multiple-content']" />
      <note-block tip>A <code>md-menu</code> with items that have icons aligns perfectly with <code>md-icon-button</code>.</note-block>

      <api-item title="API - md-menu">
        <p>The following options can be used with any menu:</p>
        <api-table :headings="props.headings" :props="props.props" slot="props" />
        <api-table :headings="events.headings" :props="events.props" slot="events" />
        <note-block tip>All <a href="https://router.vuejs.org/en/api/router-link.html" target="_blank">options</a> of <code>router-link</code> can be simply used here.</note-block>
      </api-item>
    </div>
  </page-container>
</template>

<script>
  import examples from 'docs-mixins/docsExample'
  import MdInteractionEvents from 'core/utils/MdInteractionEvents'

  function getEventNames () {
    return MdInteractionEvents.map(event => `<li>${event}</li>`).join('')
  }

  export default {
    name: 'DocMenu',
    mixins: [examples],
    data: () => ({
      props: {
        headings: ['Name', 'Description', 'Default'],
        props: [
          {
            name: 'md-active',
            type: 'Boolean',
            description: 'Used to show/hide a menu programatically.',
            defaults: 'false'
          },
          {
            name: 'md-close-on-click',
            type: 'Boolean',
            description: 'When this options is true, the menu will be closed after any click event.',
            defaults: 'false'
          },
          {
            name: 'md-close-on-select',
            type: 'Boolean',
            description: `
              When this options is true, the menu will close after a click on a <code>md-menu-item</code>. This will only work if the menu have one of the events below: <br>
              <ul>${getEventNames()}</ul>`,
            defaults: 'true'
          },
          {
            name: 'md-direction',
            type: 'String',
            description: 'Set the direction of a menu. See below the detailed description of each direction.',
            defaults: 'bottom-start'
          },
          {
            offset: true,
            name: 'md-direction="bottom-start"',
            type: 'String',
            description: 'Aligns the menu on the bottom left of the trigger',
            defaults: '-'
          },
          {
            offset: true,
            name: 'md-direction="bottom-end"',
            type: 'String',
            description: 'Aligns the menu on the bottom right of the trigger',
            defaults: '-'
          },
          {
            offset: true,
            name: 'md-direction="top-start"',
            type: 'String',
            description: 'Aligns the menu on the top left of the trigger',
            defaults: '-'
          },
          {
            offset: true,
            name: 'md-direction="top-end"',
            type: 'String',
            description: 'Aligns the menu on the top right of the trigger',
            defaults: '-'
          },
          {
            name: 'md-align-trigger',
            type: 'Boolean',
            description: 'Aligns the content above the trigger. Also works in combination with <code>md-direction</code> values',
            defaults: 'false'
          },
          {
            name: 'md-offset-x',
            type: 'Number',
            description: 'Sets a custom offset in X axis',
            defaults: '0'
          },
          {
            name: 'md-offset-y',
            type: 'Number',
            description: 'Sets a custom offset in Y axis',
            defaults: '0'
          },
          {
            name: 'md-size',
            type: 'String',
            description: 'Sets the size of a menu. See below the detailed description of each size.',
            defaults: 'small'
          },
          {
            offset: true,
            name: 'md-size="small"',
            type: 'String',
            description: 'Sets a menu with a small size (112px)',
            defaults: '-'
          },
          {
            offset: true,
            name: 'md-size="medium"',
            type: 'String',
            description: 'Sets a menu with a medium size (168px)',
            defaults: '-'
          },
          {
            offset: true,
            name: 'md-size="big"',
            type: 'String',
            description: 'Sets a menu with a big size (224px)',
            defaults: '-'
          },
          {
            offset: true,
            name: 'md-size="huge"',
            type: 'String',
            description: 'Sets a menu with a huge size (280px)',
            defaults: '-'
          },
          {
            offset: true,
            name: 'md-size="auto"',
            type: 'String',
            description: 'Sets a menu with a auto size',
            defaults: '-'
          }
        ]
      },
      events: {
        headings: ['Name', 'Description', 'Value'],
        props: [
          {
            name: 'md-opened',
            description: 'Triggered when menu opens',
            value: 'null'
          },
          {
            name: 'md-closed',
            description: 'Triggered when menu closes',
            value: 'null'
          }
        ]
      }      
    })
  }
</script>
