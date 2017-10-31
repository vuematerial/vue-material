<template>
  <div>
    <md-dialog-alert
      :md-active.sync="first"
      md-content="Your post has been deleted!"
      md-confirm-text="Cool!" />

    <md-dialog-alert
      :md-active.sync="second"
      md-title="Post created!"
      md-content="Your post <strong>Material Design is awesome</strong> has been created." />

    <md-button class="md-accent md-raised" @click="first = true">Alert</md-button>
    <md-button class="md-primary md-raised" @click="second = true">Alert</md-button>
  </div>
</template>

<script>
  export default {
    name: 'DialogAlert',
    data: () => ({
      first: false,
      second: false
    })
  }
</script>
