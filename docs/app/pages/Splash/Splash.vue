<template>
  <div class="splash-page">
    <header class="splash-header">
      <splash-illustration />

      <div class="splash-call">
        <h1 class="splash-name">Vue Material</h1>

        <p>Build beautiful apps with Material Design and Vue.js</p>

        <div class="splash-actions">
          <md-button class="md-button-spaced md-primary md-raised">Getting Started</md-button>
          <md-button class="md-button-spaced md-primary md-raised" @click.native="$router.push('/components')">Components</md-button>
        </div>
      </div>
    </header>

    <div class="splash-features">
      <div class="splash-feature">
        <splash-icon-square />
        <h2 class="md-title">Material Design</h2>
        <p>Simple, lightweight and built exactly according to the Google Material Design specs.</p>
      </div>

      <div class="splash-feature">
        <splash-icon-devices />
        <h2 class="md-title">Compatible</h2>
        <p>Build well-designed apps that can fit on every screen with support to all modern Web Browsers.</p>
      </div>

      <div class="splash-feature">
        <splash-icon-circle />
        <h2 class="md-title">Full-featured</h2>
        <p>Complete with dynamic themes, components on demand and all with an ease-to-use API.</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import "~vue-material/components/MdAnimation/variables";

  .splash-page {
    height: 100vh;
    width: 100%;
    max-width: 1280px;
    margin: auto;
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 15px;
    letter-spacing: normal;
    line-height: 1.7em;
  }

  .splash-header {
    margin-top: 40px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .splash-call {
    flex: 0 0 50%;
    font-size: 18px;
    line-height: 1.6em;
  }

  .splash-name {
    margin: 0;
    font-size: 56px;
    font-weight: 500;
    line-height: 1em;
  }

  .splash-actions {
    margin-top: 24px;
    display: flex;

    .md-button {
      margin-left: 0;
    }
  }

  .splash-features {
    margin: 120px 0 40px;
    display: flex;
  }

  .splash-feature {
    flex: 1;

    + .splash-feature {
      margin-left: 40px;
    }

    h2 {
      font-size: 22px;
      font-weight: 500;
    }
  }
</style>

<script>
  import SplashIllustration from './SplashIllustration'
  import SplashIconSquare from './SplashIconSquare'
  import SplashIconCircle from './SplashIconCircle'
  import SplashIconDevices from './SplashIconDevices'

  export default {
    name: 'Splash',
    components: {
      SplashIllustration,
      SplashIconSquare,
      SplashIconCircle,
      SplashIconDevices
    }
  }
</script>
