<example src="./examples/PositionDirection.vue" />
<example src="./examples/AnimationTypes.vue" />
<example src="./examples/EventTriggers.vue" />

<template>
  <page-container centered :title="$t('pages.speedDial.title')">
    <div class="page-container-section">
      <p>Lorem ipsum</p>
    </div>

    <div class="page-container-section">
      <h2>Speed Dial</h2>

      <code-example title="Positions and directions" :component="examples['position-direction']" />
      <code-example title="Animations types" :component="examples['animation-types']" />
      <code-example title="Event triggers" :component="examples['event-triggers']" />

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
  mixins: [examples]
}
</script>
