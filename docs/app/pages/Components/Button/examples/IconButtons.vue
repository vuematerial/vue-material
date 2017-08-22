<template>
  <div>
    <div>
      <small>Flat</small>
      <md-button class="md-icon-button">
        <md-icon>home</md-icon>
      </md-button>

      <md-button class="md-icon-button md-primary">
        <md-icon>menu</md-icon>
      </md-button>

      <md-button class="md-icon-button md-accent">
        <md-icon>thumb_up</md-icon>
      </md-button>

      <md-button class="md-icon-button" disabled>
        <md-icon>add</md-icon>
      </md-button>
    </div>

    <div>
      <small>Raised</small>
      <md-button class="md-icon-button md-raised">
        <md-icon>home</md-icon>
      </md-button>

      <md-button class="md-icon-button md-raised md-primary">
        <md-icon>menu</md-icon>
      </md-button>

      <md-button class="md-icon-button md-raised md-accent">
        <md-icon>thumb_up</md-icon>
      </md-button>

      <md-button class="md-icon-button md-raised" disabled>
        <md-icon>add</md-icon>
      </md-button>
    </div>

    <div>
      <small>Dense</small>
      <md-button class="md-icon-button md-dense md-primary">
        <md-icon>person</md-icon>
      </md-button>

      <md-button class="md-icon-button md-dense md-raised md-primary">
        <md-icon>cached</md-icon>
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
  name: 'IconButtons'
}
</script>
