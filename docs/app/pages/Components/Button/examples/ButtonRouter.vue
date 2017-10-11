<template>
  <div>
    <md-button to="/components/button">Default</md-button>
    <md-button to="/components/button" class="md-primary">Primary</md-button>
    <md-button to="/components/button" class="md-accent">Accent</md-button>
    <md-button to="/components/button" disabled>Disabled</md-button>
  </div>
</template>

<script>
  export default {
    name: 'ButtonRouter'
  }
</script>
