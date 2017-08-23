<example src="./examples/Example.vue" />

<template>
  <page-container centered :title="$t('pages.speedDial.title')">
    <div class="page-container-section">
      <p>Lorem ipsum</p>
    </div>

    <div class="page-container-section">
      <h2>SpeedDial</h2>

      <code-example title="Example" :component="examples['example']" />

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
