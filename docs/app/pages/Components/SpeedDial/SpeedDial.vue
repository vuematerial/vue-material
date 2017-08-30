<example src="./examples/PositionDirection.vue" />
<example src="./examples/AnimationTypes.vue" />
<example src="./examples/EventTriggers.vue" />
<example src="./examples/MorphingIcon.vue" />

<template>
  <page-container centered :title="$t('pages.speedDial.title')">
    <div class="page-container-section">
      <p>The floating action button can show related actions upon hover or press. The button should remain on screen after the menu is invoked.</p>
      <p>The speed dial component is a ot flexible and have many options to make it easy to suit all your needs. You can apply different positions, work with a couple of events to trigger the content and also have a awesome morph effect on your main action:</p>
    </div>

    <div class="page-container-section">
      <h2>Speed Dial</h2>

      <p></p>

      <code-example title="Positions and directions" :component="examples['position-direction']" />
      <code-example title="Animations types" :component="examples['animation-types']" />
      <code-example title="Event triggers" :component="examples['event-triggers']" />

      <api-item title="API - md-speed-dial">
        <api-table :headings="props.headings" :props="props.props" slot="props" />
        <api-table :headings="classes.headings" :props="classes.props" slot="classes" />
      </api-item>
    </div>

    <div class="page-container-section">
      <h2>Icon Morph</h2>

      <code-example title="Morphing Icons" :component="examples['morphing-icon']" />

      <api-item title="API - md-speed-dial">
        <p>This component do not have any extra option.</p>
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
