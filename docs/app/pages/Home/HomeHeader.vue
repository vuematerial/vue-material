<template>
  <header class="home-header">
    <div class="home-logo">
      <logo-vue-material animated />
    </div>

    <div class="home-call">
      <h1 class="home-name">Vue Material</h1>

      <p>{{ $t('pages.home.slogan') }}</p>

      <div class="home-actions">
        <gh-btns-star slug="vuematerial/vue-material" show-count></gh-btns-star>
        <br/>
        <a href="https://www.npmjs.com/package/vue-material">
          <img src="https://img.shields.io/npm/dt/vue-material.svg" alt="Downloads">
        </a>
        <a href="https://www.npmjs.com/package/vue-material">
          <img src="https://img.shields.io/npm/l/vue-material.svg" alt="License">
        </a>
        <a href="https://discord.gg/vuematerial">
          <img src="https://img.shields.io/discord/379653048798281729.svg?logo=discord&colorB=7289DA" alt="Chat">
        </a>
      </div>
      <div class="home-actions">
        <md-button class="md-button-spaced md-plain md-raised" to="/getting-started">{{ $t('pages.gettingStarted.title') }}</md-button>
        <md-button class="md-button-spaced md-plain md-raised" to="/components">{{ $t('pages.components.title') }}</md-button>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'HomeHeader'
  }
</script>

<style lang="scss" scoped>
  @import "~vue-material/components/MdAnimation/variables";
  @import "~vue-material/components/MdLayout/mixins";

  .home-header {
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

    @include md-layout-xsmall {
      font-size: 36px;
    }
  }

  .home-actions {
    margin-top: 24px;
    display: flex;
    justify-content: center;

    .md-button {
      margin-left: 0;
    }
    a{
      margin-left: 5px;
    }
  }
</style>
