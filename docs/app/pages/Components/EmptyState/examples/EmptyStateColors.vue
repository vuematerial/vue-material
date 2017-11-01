<template>
  <div>
    <md-empty-state
      class="md-primary"
      md-icon="done"
      md-label="Nothing in Done"
      md-description="Anything you mark done will be safely stored here.">
    </md-empty-state>

    <md-empty-state
      class="md-accent"
      md-rounded
      md-icon="alarm_off"
      md-label="Nothing in Reminders"
      md-description="Create a Reminder and it will show up here.">
    </md-empty-state>
  </div>
</template>

<script>
  export default {
    name: 'EmptyStateColors'
  }
</script>

<style lang="scss" scoped>
  div {
    text-align: center;
  }

  .md-empty-state {
    display: inline-block;
    vertical-align: middle;

    + .md-empty-state {
      margin-left: 16px;
    }
  }
</style>
