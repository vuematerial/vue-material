<template>
  <div>
    <div>
      <small>Buttons</small>
      <md-button>Default</md-button>
      <md-button class="md-primary">Primary</md-button>
      <md-button class="md-accent">Accent</md-button>
      <md-button disabled>Disabled</md-button>
    </div>

    <div>
      <small>Links</small>
      <md-button :href="pageUrl">Default</md-button>
      <md-button :href="pageUrl" class="md-primary">Primary</md-button>
      <md-button :href="pageUrl" class="md-accent">Accent</md-button>
      <md-button :href="pageUrl" disabled>Disabled</md-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  small {
    display: block;
  }
</style>

<script>
export default {
  name: 'ButtonVsLink',
  computed: {
    pageUrl () {
      return window.location.href
    }
  }
}
</script>
