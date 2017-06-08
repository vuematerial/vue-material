<template>
  <splash-container splash class="home-page">
    <header class="home-header">
      <div class="home-logo">
        <logo-vue-material animated />
      </div>

      <div class="home-call">
        <h1 class="home-name">Vue Material</h1>

        <p>{{ $t('pages.home.slogan') }}</p>

        <div class="home-actions">
          <md-button class="md-button-spaced md-primary md-raised" @click="$router.push('/getting-started')">{{ $t('pages.gettingStarted.title') }}</md-button>
          <md-button class="md-button-spaced md-primary md-raised" @click="$router.push('/components')">{{ $t('pages.components.title') }}</md-button>
        </div>
      </div>
    </header>

    <div class="home-features">
      <div class="home-feature">
        <home-icon-square />
        <h2 class="md-title">{{ $t('pages.home.material') }}</h2>
        <p>{{ $t('pages.home.materialContent') }}</p>
      </div>

      <div class="home-feature">
        <home-icon-devices />
        <h2 class="md-title">{{ $t('pages.home.compatible') }}</h2>
        <p>{{ $t('pages.home.compatibleContent') }}</p>
      </div>

      <div class="home-feature">
        <home-icon-circle />
        <h2 class="md-title">{{ $t('pages.home.featured') }}</h2>
        <p>{{ $t('pages.home.featuredContent') }}</p>
      </div>
    </div>
  </splash-container>
</template>

<style lang="scss" scoped>
  @import "~vue-material/components/MdAnimation/variables";

  .home-page >>> .main-header {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
  }

  .home-page >>> .main-content {
    width: 100%;
    height: 100vh;
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 15px;
    letter-spacing: normal;
    line-height: 1.7em;
  }

  .home-header {
    margin-top: 40px;
    text-align: center;
  }

  .home-logo {
    max-width: 192px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .logo-vue-material {
    width: 100%;
  }

  .home-call {
    margin-top: 24px;
    flex: 0 0 50%;
    font-size: 18px;
    line-height: 1.6em;
  }

  .home-name {
    margin: 0;
    font-size: 50px;
    font-weight: 500;
    line-height: 1em;
  }

  .home-actions {
    margin-top: 24px;
    display: flex;
    justify-content: center;

    .md-button {
      margin-left: 0;
    }
  }

  .home-features {
    margin: 120px 0 40px;
    display: flex;
  }

  .home-feature {
    flex: 1;

    + .home-feature {
      margin-left: 40px;
    }

    h2 {
      font-size: 22px;
      font-weight: 500;
    }
  }
</style>

<script>
  import HomeIconSquare from './HomeIconSquare'
  import HomeIconCircle from './HomeIconCircle'
  import HomeIconDevices from './HomeIconDevices'

  export default {
    name: 'Home',
    components: {
      HomeIconSquare,
      HomeIconCircle,
      HomeIconDevices
    }
  }
</script>
