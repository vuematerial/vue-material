<template>
  <div class="demo-badge">
    <div>
      <md-badge md-content="1" md-dense>
        <md-button class="md-icon-button">
          <md-icon>notifications</md-icon>
        </md-button>
      </md-badge>

      <md-badge class="md-primary" md-content="12" md-dense>
        <md-button class="md-icon-button">
          <md-icon>home</md-icon>
        </md-button>
      </md-badge>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Dense'
  }
</script>

<style lang="scss" scoped>
  .demo-badge {
    > div {
      margin-bottom: 16px;
    }
  }
</style>
