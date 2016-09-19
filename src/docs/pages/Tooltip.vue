<template>
  <demo-page>
    <div slot="examples">
      <demo-example label="Default">
        <div>
          <md-button class="md-icon-button md-raised md-primary">
            <md-icon>folder</md-icon>
            <md-tooltip md-direction="top">My tooltip</md-tooltip>
          </md-button>

          <md-avatar>
            <img src="https://placeimg.com/40/40/people/1" alt="People">
            <md-tooltip md-direction="bottom">My tooltip</md-tooltip>
          </md-avatar>
        </div>

        <div>
          <md-button class="md-icon-button md-raised md-warn">
            <md-icon>home</md-icon>
            <md-tooltip md-direction="left">My tooltip</md-tooltip>
          </md-button>

          <md-avatar class="md-avatar-icon">
            <md-icon>person</md-icon>
            <md-tooltip md-direction="right">My tooltip</md-tooltip>
          </md-avatar>
        </div>
      </demo-example>

      <demo-example label="Delay - 400ms">
        <div>
          <md-button class="md-icon-button md-raised md-primary">
            <md-icon>folder</md-icon>
            <md-tooltip md-delay="400" md-direction="top">My tooltip</md-tooltip>
          </md-button>

          <md-avatar>
            <img src="https://placeimg.com/40/40/people/1" alt="People">
            <md-tooltip md-delay="400" md-direction="bottom">My tooltip</md-tooltip>
          </md-avatar>
        </div>

        <div>
          <md-button class="md-icon-button md-raised md-warn">
            <md-icon>home</md-icon>
            <md-tooltip md-delay="400" md-direction="left">My tooltip</md-tooltip>
          </md-button>

          <md-avatar class="md-avatar-icon">
            <md-icon>person</md-icon>
            <md-tooltip md-delay="400" md-direction="right">My tooltip</md-tooltip>
          </md-avatar>
        </div>
      </demo-example>
    </div>

    <div slot="code">
      <h2>Code</h2>
    </div>

    <div slot="api">

    </div>
  </demo-page>
</template>

<style lang="scss" scoped>
  .md-button,
  .md-avatar {
    margin: 24px;
  }
</style>

<script>
  export default {
    mounted() {
      this.$root.pageTitle = 'Tooltip';
    }
  };
</script>
