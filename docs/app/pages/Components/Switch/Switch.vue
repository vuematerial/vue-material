<example src="./examples/RegularSwitch.vue" />

<template>
  <page-container centered :title="$t('pages.switch.title')">
    <div class="page-container-section">
      <p>On/off switches toggle the state of a single settings option. The option that the switch controls, as well as the state it’s in, should be made clear from the corresponding inline label.</p>
    </div>

    <div class="page-container-section">
      <h2>Regular Switch</h2>

      <code-example title="Switch" :component="examples['regular-switch']" />
    </div>
  </page-container>
</template>

<script>
  import examples from 'docs-mixins/docsExample'

  export default {
    name: 'Switch',
    mixins: [examples]
  }
</script>
