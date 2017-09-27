<template>
  <div>
    <div class="separator">
      <md-avatar class="md-avatar-icon">A</md-avatar>
      <md-avatar class="md-avatar-icon md-primary">A</md-avatar>
      <md-avatar class="md-avatar-icon md-accent">A</md-avatar>
    </div>

    <div class="separator">
      <md-avatar class="md-avatar-icon md-small">B</md-avatar>
      <md-avatar class="md-avatar-icon md-small md-primary">B</md-avatar>
      <md-avatar class="md-avatar-icon md-small md-accent">B</md-avatar>
    </div>

    <div class="separator">
      <md-avatar class="md-avatar-icon md-large">
        <md-ripple>MM</md-ripple>
      </md-avatar>

      <md-avatar class="md-avatar-icon md-large md-primary">
        <md-ripple>MM</md-ripple>
      </md-avatar>

      <md-avatar class="md-avatar-icon md-large md-accent">
        <md-ripple>MM</md-ripple>
      </md-avatar>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Placeholder'
}
</script>

<style lang="scss" scoped>
  .separator + .separator {
    margin-top: 24px;
  }
</style>
