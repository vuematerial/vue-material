<template>
  <div>
    <div>
      <small>Regular</small>
      <md-button class="md-fab">
        <md-icon>menu</md-icon>
      </md-button>
      <md-button class="md-fab md-primary">
        <md-icon>add</md-icon>
      </md-button>
      <md-button class="md-fab md-plain">
        <md-icon>edit</md-icon>
      </md-button>
    </div>

    <div>
      <small>Mini/Dense</small>
      <md-button class="md-fab md-mini">
        <md-icon>menu</md-icon>
      </md-button>
      <md-button class="md-fab md-mini md-primary">
        <md-icon>add</md-icon>
      </md-button>
      <md-button class="md-fab md-mini md-plain">
        <md-icon>edit</md-icon>
      </md-button>
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
  name: 'FloatingButtons'
}
</script>
