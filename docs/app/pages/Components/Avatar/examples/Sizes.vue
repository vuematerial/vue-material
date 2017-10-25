<template>
  <div>
    <div class="separator">
      <md-avatar class="md-small">
        <img src="/assets/examples/avatar.png" alt="People">
      </md-avatar>

      <md-avatar class="md-avatar-icon md-small">
        <md-icon>home</md-icon>
      </md-avatar>

      <md-avatar class="md-avatar-icon md-small md-primary">
        <md-icon>folder</md-icon>
      </md-avatar>

      <md-avatar class="md-avatar-icon md-small md-accent">
        <md-icon>favorite</md-icon>
      </md-avatar>
    </div>

    <div class="separator">
      <md-avatar>
        <img src="/assets/examples/avatar.jpg" alt="Avatar">
      </md-avatar>

      <md-avatar class="md-avatar-icon">
        <md-icon>home</md-icon>
      </md-avatar>

      <md-avatar class="md-avatar-icon md-primary">
        <md-icon>folder</md-icon>
      </md-avatar>

      <md-avatar class="md-avatar-icon md-accent">
        <md-icon>favorite</md-icon>
      </md-avatar>
    </div>

    <div class="separator">
      <md-avatar class="md-large">
        <img src="/assets/examples/avatar-2.jpg" alt="People">
      </md-avatar>

      <md-avatar class="md-avatar-icon md-large">
        <md-icon>home</md-icon>
      </md-avatar>

      <md-avatar class="md-avatar-icon md-large md-primary">
        <md-icon>folder</md-icon>
      </md-avatar>

      <md-avatar class="md-avatar-icon md-large md-accent">
        <md-icon>favorite</md-icon>
      </md-avatar>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sizes'
}
</script>

<style lang="scss" scoped>
  .separator + .separator {
    margin-top: 24px;
  }
</style>
