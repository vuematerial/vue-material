<template>
  <section>
    <h2 class="title">Tooltip</h2>

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
  </section>

  <section>
    <h2 class="title">Tooltip - Delay</h2>

    <div>
      <md-button class="md-icon-button md-raised md-primary">
        <md-icon>folder</md-icon>
        <md-tooltip md-delay="500" md-direction="top">My tooltip</md-tooltip>
      </md-button>

      <md-avatar>
        <img src="https://placeimg.com/40/40/people/1" alt="People">
        <md-tooltip md-delay="500" md-direction="bottom">My tooltip</md-tooltip>
      </md-avatar>
    </div>

    <div>
      <md-button class="md-icon-button md-raised md-warn">
        <md-icon>home</md-icon>
        <md-tooltip md-delay="500" md-direction="left">My tooltip</md-tooltip>
      </md-button>

      <md-avatar class="md-avatar-icon">
        <md-icon>person</md-icon>
        <md-tooltip md-delay="500" md-direction="right">My tooltip</md-tooltip>
      </md-avatar>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  section {
    margin-left: 100px;
    margin-bottom: 32px;
  }

  .md-button,
  .md-avatar {
    margin: 24px;
  }
</style>
