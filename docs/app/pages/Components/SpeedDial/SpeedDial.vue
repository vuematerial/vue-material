<example src="./examples/PositionDirection.vue" />
<example src="./examples/AnimationTypes.vue" />
<example src="./examples/EventTriggers.vue" />
<example src="./examples/MorphingIcon.vue" />

<template>
  <page-container centered :title="$t('pages.speedDial.title')">
    <div class="page-container-section">
      <p>Floating action buttons can show related actions upon hover or press. The button should remain on screen after the menu is invoked.</p>
      <p>Speed dial component is a lot flexible and have many options to make it easy to suit all your needs. You can apply different positions, work with a couple of events to trigger the content and also have a awesome morph effect on your main action.</p>
      <p>The component is divided in 3 parts: The <code>md-speed-dial</code>, which is the container that control all children, <code>md-speed-dial-content</code> which is the content to be displayed (a.k.a buttons) and <code>md-speed-dial-trigger</code> who is responsible for trigger the content exhibition. Take a look at this following example:</p>
    </div>

    <div class="page-container-section">
      <h2>Speed Dial positions</h2>
      <p>You can specify any position that you want for you Speed Dial component. They can be top and bottom, and combined with left, center or right:</p>

      <code-example title="Positions and directions" :component="examples['position-direction']" />
      <note-block tip>Prefer the FAB on bottom left position for your main action on scrollable contents. Always use a <code>md-direction</code> equals to <code>bottom</code> when using top position.</note-block>
    </div>

    <div class="page-container-section">
      <h2>Effects</h2>
      <p>The component can be displayed different animations for each scenario that you may want:</p>
      <code-example title="Animations types" :component="examples['animation-types']" />
    </div>

    <div class="page-container-section">
      <h2>Triggers</h2>
      <p>You can trigger the speed dial content using hover or click. Using this allows you to have a open/close feature or to hold a main action:</p>
      <code-example title="Event triggers" :component="examples['event-triggers']" />
      <note-block tip>For desktop environments it's better to have a hover effect. On mobile you can toggle the property to use click instead.</note-block>

      <api-item title="API - md-speed-dial">
        <api-table :headings="props.headings" :props="props.props" slot="props" />
        <api-table :headings="classes.headings" :props="classes.props" slot="classes" />
      </api-item>
    </div>

    <div class="page-container-section">
      <h2>Icon Morph</h2>

      <p>Sometimes you want the speed dial to have a cross icon to represent your close action after showing the content. This can be easily achieved with the morph icons.</p>
      <p>To create that, create two <code>md-icon</code> components inside the trigger and add a <code>md-morph-initial</code> in the one you would like it to be the initial state (or a open state) and a <code>md-morph-final</code> on the close state:</p>
      <code-example title="Morphing Icons" :component="examples['morphing-icon']" />
    </div>

    <div class="page-container-section">
      <h3>Components</h3>

      <api-item title="API - md-speed-dial-content">
        <p>This component do not have any extra option.</p>
      </api-item>

      <api-item title="API - md-speed-dial-trigger">
        <p>This component is just an alias of <code>md-button</code> with <code>md-fab</code> class. So every option of <router-link to="/components/button">Buttons</router-link> can be applied here, even the Vue Router options...</p>
      </api-item>
    </div>
  </page-container>
</template>

<script>
import examples from 'docs-mixins/docsExample'

export default {
  name: 'SpeedDial',
  mixins: [examples],
  data: () => ({
    props: {
      headings: ['Name', 'Description', 'Default'],
      props: [
        {
          name: 'md-direction',
          type: 'String',
          description: 'Apply the style to show the content below or above the trigger',
          defaults: 'top'
        }, {
          offset: true,
          name: 'md-direction="top"',
          type: 'String',
          description: 'Set the direction of the animation effect to top. This is the default value of md-direction. You don\'t have to pass it unless you want to reset it\'s default value',
          defaults: '-'
        },
        {
          offset: true,
          name: 'md-direction="bottom"',
          type: 'String',
          description: 'Set the direction of the animation effect to bottom.',
          defaults: '-'
        },
        {
          name: 'md-effect',
          type: 'Boolean',
          description: 'Enable/Disable the ripple effect.',
          defaults: 'fling'
        },
        {
          offset: true,
          name: 'md-effect="fling"',
          type: 'String',
          description: 'Apply a reveal effect combining both opacity and scale. This is the default behaviour in most of applications using FAB.',
          defaults: '-'
        },
        {
          offset: true,
          name: 'md-effect="scale"',
          type: 'String',
          description: 'Apply a reveal effect using scale only.',
          defaults: '-'
        },
        {
          offset: true,
          name: 'md-effect="opacity"',
          type: 'String',
          description: 'Apply a reveal effect using opacity only.',
          defaults: '-'
        },
        {
          name: 'md-event',
          type: 'String',
          description: 'Specify the event who triggers the content',
          defaults: 'hover'
        },
        {
          offset: true,
          name: 'md-event="hover"',
          type: 'String',
          description: 'Open the content on hover.',
          defaults: '-'
        },
        {
          offset: true,
          name: 'md-event="click"',
          type: 'String',
          description: 'Open the content on click.',
          defaults: '-'
        }
      ]
    },
    classes: {
      headings: ['Name', 'Description'],
      props: [
        {
          name: 'md-top-right',
          description: 'Position the Speed Dial on the top right of the nearest relative parent'
        },
        {
          name: 'md-top-center',
          description: 'Position the Speed Dial on the top center of the nearest relative parent'
        },
        {
          name: 'md-top-left',
          description: 'Position the Speed Dial on the top left of the nearest relative parent'
        },
        {
          name: 'md-bottom-right',
          description: 'Position the Speed Dial on the bottom right of the nearest relative parent'
        },
        {
          name: 'md-bottom-center',
          description: 'Position the Speed Dial on the bottom center of the nearest relative parent'
        },
        {
          name: 'md-bottom-left',
          description: 'Position the Speed Dial on the bottom left of the nearest relative parent'
        },
        {
          name: 'md-fixed',
          description: 'Apply css "position: fixed" to Speed Dial. Better used with the 4 position coordinates above'
        }
      ]
    }
  })
}
</script>
