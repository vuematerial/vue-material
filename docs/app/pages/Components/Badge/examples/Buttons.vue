<template>
  <div class="demo-badge">
    <div>
      <md-badge md-content="1">
        <md-button class="md-icon-button">
          <md-icon>notifications</md-icon>
        </md-button>
      </md-badge>

      <md-badge class="md-primary" md-content="1">
        <md-button class="md-icon-button">
          <md-icon>home</md-icon>
        </md-button>
      </md-badge>

      <md-badge md-position="bottom" md-content="2">
        <md-button class="md-icon-button">
          <md-icon>home</md-icon>
        </md-button>
      </md-badge>
    </div>

    <div>
      <md-badge class="md-primary" md-content="12">
        <md-avatar>
          <img src="/assets/examples/avatar.png" alt="Avatar">
        </md-avatar>
      </md-badge>
    </div>

    <div>
      <md-badge class="md-primary md-square" md-position="bottom" md-content="12">
        <md-button>
          Button with
        </md-button>
      </md-badge>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Buttons'
  }
</script>

<style lang="scss" scoped>
  .demo-badge {
    > div {
      margin-bottom: 16px;
    }
  }
</style>
